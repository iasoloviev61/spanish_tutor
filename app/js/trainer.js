// ============================================================
// Тренажёр глаголов · логика
// VERBS приходит из window.VERBS (наполняется файлами data/verbs/*.js)
// ============================================================
const VERBS = window.VERBS || [];

const PERSON_LABELS = {
  yo: 'yo',
  tu: 'tú',
  el: 'él / ella / usted',
  nosotros: 'nosotros',
  vosotros: 'vosotros',
  ellos: 'ellos / ellas / ustedes'
};

const TENSE_LABELS = {
  presente: 'Presente',
  indefinido: 'Indefinido',
  futuro: 'Futuro'
};

// ============================================================
// СБОР ПЛОСКОГО МАССИВА КАРТОЧЕК
// ============================================================
const ALL_CARDS = [];
VERBS.forEach((verb, vi) => {
  verb.sentences.forEach((s) => {
    ALL_CARDS.push({
      id: `${verb.infinitive}_${s.tense}_${s.person}_${s.variant || 1}`,
      verbIdx: vi,
      verb: verb.infinitive,
      verbTranslation: verb.translation,
      group: verb.group,
      irregular: verb.irregular,
      person: s.person,
      tense: s.tense,
      es: s.es,
      ru: s.ru,
    });
  });
});

// ============================================================
// СОСТОЯНИЕ
// ============================================================
// Ключ привязан к активному профилю — у каждого пользователя свой прогресс.
// Если профиль не выбран, данные пишутся в «guest» и доступны до создания
// первого профиля (после которого страница перезагрузится с новым ключом).
const _activeId = (window.App && window.App.profile)
  ? (window.App.profile.getActiveId() || 'guest')
  : 'guest';
const STORAGE_KEY = 'spanish_trainer_v1:' + _activeId;

function defaultState() {
  return {
    direction: 'ru-es',
    tense: 'all',
    group: 'all',
    mode: 'smart',
    selectedVerbs: VERBS.map(v => v.infinitive),
    cardStats: {},
    sessionCorrect: 0,
    sessionWrong: 0,
    sessionStreak: 0,
    sessionTotal: 0,
    seenIdx: 0,
    currentCardId: null,
  };
}

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed);
  } catch (e) {
    return defaultState();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {}
}

// ============================================================
// ФИЛЬТРАЦИЯ КАРТОЧЕК
// ============================================================
function filteredCards() {
  return ALL_CARDS.filter(c => {
    if (state.tense !== 'all' && c.tense !== state.tense) return false;
    if (state.group === 'irreg') {
      if (!c.irregular) return false;
    } else if (state.group !== 'all') {
      if (c.group !== state.group || c.irregular) return false;
    }
    if (!state.selectedVerbs.includes(c.verb)) return false;
    return true;
  });
}

// ============================================================
// ВЫБОР СЛЕДУЮЩЕЙ КАРТОЧКИ
// ============================================================
function pickNextCard() {
  const cards = filteredCards();
  if (cards.length === 0) return null;

  if (state.mode === 'random') {
    return cards[Math.floor(Math.random() * cards.length)];
  }

  if (state.mode === 'weak') {
    const weak = cards.filter(c => {
      const s = state.cardStats[c.id];
      if (!s) return false;
      return s.wrong > 0 && (s.right - s.wrong) < 3;
    });
    if (weak.length === 0) return cards[Math.floor(Math.random() * cards.length)];
    return weak[Math.floor(Math.random() * weak.length)];
  }

  // smart: вес = 1 + штраф за ошибки + бонус за «давно не виделась» + большой вес если ни разу
  const weighted = cards.map(c => {
    const s = state.cardStats[c.id] || { right: 0, wrong: 0, lastSeen: -1 };
    let w = 1;
    if (s.right + s.wrong === 0) w += 5;
    w += Math.max(0, (s.wrong - s.right)) * 3;
    const ago = state.seenIdx - (s.lastSeen ?? -1);
    if (ago > 20) w += 2;
    if (s.right >= 4 && s.wrong === 0) w *= 0.3;
    return { card: c, weight: w };
  });

  let pool = weighted;
  if (state.currentCardId) {
    pool = weighted.filter(w => w.card.id !== state.currentCardId);
    if (pool.length === 0) pool = weighted;
  }

  const total = pool.reduce((acc, x) => acc + x.weight, 0);
  let r = Math.random() * total;
  for (const x of pool) {
    r -= x.weight;
    if (r <= 0) return x.card;
  }
  return pool[pool.length - 1].card;
}

// ============================================================
// СРАВНЕНИЕ ОТВЕТОВ — СТРОГОЕ ПО ДИАКРИТИКЕ
// ============================================================
function normalizeAnswer(s) {
  return s.trim().replace(/\s+/g, ' ').toLowerCase();
}

function isCorrect(userInput, expected) {
  const u = normalizeAnswer(userInput).replace(/[.!?¿¡]+$/g, '').replace(/^[¿¡]+/, '');
  const e = normalizeAnswer(expected).replace(/[.!?¿¡]+$/g, '').replace(/^[¿¡]+/, '');
  return u === e;
}

function diffHighlight(user, correct) {
  const a = user.trim();
  const b = correct.trim();
  const m = a.length, n = b.length;
  const dp = Array.from({length: m+1}, () => new Array(n+1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i-1].toLowerCase() === b[j-1].toLowerCase()) {
        dp[i][j] = dp[i-1][j-1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
      }
    }
  }
  const ops = [];
  let i = m, j = n;
  while (i > 0 && j > 0) {
    if (a[i-1].toLowerCase() === b[j-1].toLowerCase()) {
      if (a[i-1] === b[j-1]) {
        ops.push({type: 'eq', char: b[j-1]});
      } else {
        ops.push({type: 'diff', userChar: a[i-1], correctChar: b[j-1]});
      }
      i--; j--;
    } else if (dp[i-1][j] >= dp[i][j-1]) {
      ops.push({type: 'extra', char: a[i-1]});
      i--;
    } else {
      ops.push({type: 'missing', char: b[j-1]});
      j--;
    }
  }
  while (i > 0) { ops.push({type: 'extra', char: a[i-1]}); i--; }
  while (j > 0) { ops.push({type: 'missing', char: b[j-1]}); j--; }
  ops.reverse();

  let html = '';
  for (const op of ops) {
    if (op.type === 'eq') {
      html += escapeHtml(op.char);
    } else if (op.type === 'diff') {
      html += `<span class="diff-bad" title="у вас: ${escapeHtml(op.userChar)}">${escapeHtml(op.correctChar)}</span>`;
    } else if (op.type === 'missing') {
      html += `<span class="diff-missing">${escapeHtml(op.char)}</span>`;
    }
  }
  return html;
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
}

// ============================================================
// РЕНДЕР КАРТОЧКИ
// ============================================================
const cardContainer = document.getElementById('card-container');
let currentCard = null;
let answered = false;

function showCard() {
  const card = pickNextCard();
  currentCard = card;
  state.currentCardId = card ? card.id : null;
  answered = false;

  if (!card) {
    cardContainer.innerHTML = `
      <div class="empty">
        <h3>Нет карточек по этим фильтрам</h3>
        <div>Попробуй ослабить фильтры — например, переключиться на «все времена» или выбрать другие глаголы.</div>
      </div>`;
    return;
  }

  const isRuToEs = state.direction === 'ru-es';
  const prompt = isRuToEs ? card.ru : card.es;
  const promptHint = isRuToEs ? '↓ переведи на испанский' : '↓ переведи на русский';

  const irregBadge = card.irregular
    ? '<span class="tag irreg">неправильный</span>'
    : `<span class="tag">-${card.group}</span>`;

  cardContainer.innerHTML = `
    <div class="card">
      <div class="card-meta">
        <span class="tag">${card.verb} · ${card.verbTranslation}</span>
        ${irregBadge}
        <span class="tag tense-${card.tense}">${TENSE_LABELS[card.tense]}</span>
        <span class="tag">${PERSON_LABELS[card.person]}</span>
      </div>
      <div class="prompt">${escapeHtml(prompt)}</div>
      <div class="prompt-hint">${promptHint}</div>
      <div class="answer-area">
        <input
          type="text"
          class="answer-input"
          id="answer-input"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
          placeholder="${isRuToEs ? 'Ответ на испанском...' : 'Ответ на русском...'}"
        />
        ${isRuToEs ? `
          <div class="spec-chars">
            ${'á é í ó ú ñ ü ¿ ¡'.split(' ').map(c =>
              `<button class="spec-char" data-char="${c}">${c}</button>`
            ).join('')}
          </div>
        ` : ''}
        <div class="btn-row">
          <button class="btn" id="check-btn">Проверить</button>
          <button class="btn btn-secondary" id="show-btn">Показать ответ</button>
          <button class="btn btn-link" id="skip-btn">пропустить →</button>
        </div>
        <div class="feedback" id="feedback"></div>
      </div>
    </div>
  `;

  const input = document.getElementById('answer-input');
  input.focus();

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (answered) {
        nextCard();
      } else {
        checkAnswer();
      }
    }
  });

  document.getElementById('check-btn').addEventListener('click', () => {
    if (answered) nextCard(); else checkAnswer();
  });
  document.getElementById('show-btn').addEventListener('click', revealAnswer);
  document.getElementById('skip-btn').addEventListener('click', nextCard);

  document.querySelectorAll('.spec-char').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const ch = btn.dataset.char;
      insertAtCursor(input, ch);
      input.focus();
    });
  });
}

function insertAtCursor(input, text) {
  const start = input.selectionStart ?? input.value.length;
  const end = input.selectionEnd ?? input.value.length;
  input.value = input.value.slice(0, start) + text + input.value.slice(end);
  input.selectionStart = input.selectionEnd = start + text.length;
}

// ============================================================
// ПРОВЕРКА
// ============================================================
function checkAnswer() {
  if (answered || !currentCard) return;
  const input = document.getElementById('answer-input');
  const userAnswer = input.value;
  if (!userAnswer.trim()) return;

  const isRuToEs = state.direction === 'ru-es';
  const expected = isRuToEs ? currentCard.es : currentCard.ru;

  const correct = isCorrect(userAnswer, expected);
  answered = true;
  state.seenIdx++;

  const stats = state.cardStats[currentCard.id] || { right: 0, wrong: 0, lastSeen: -1 };
  if (correct) {
    stats.right++;
    state.sessionCorrect++;
    state.sessionStreak++;
  } else {
    stats.wrong++;
    state.sessionWrong++;
    state.sessionStreak = 0;
  }
  stats.lastSeen = state.seenIdx;
  state.cardStats[currentCard.id] = stats;
  state.sessionTotal++;
  saveState();
  updateStatsDisplay();

  input.classList.add(correct ? 'correct' : 'wrong');
  input.disabled = true;

  const fb = document.getElementById('feedback');
  fb.classList.remove('correct', 'wrong');
  fb.classList.add('show', correct ? 'correct' : 'wrong');

  let html = '';
  if (correct) {
    html = `
      <div class="feedback-label">¡Correcto!</div>
      <div class="answer-display">${escapeHtml(expected)}</div>
    `;
  } else {
    if (isRuToEs) {
      html = `
        <div class="feedback-label">Правильно так:</div>
        <div class="answer-display">${diffHighlight(userAnswer, expected)}</div>
      `;
    } else {
      html = `
        <div class="feedback-label">Правильно так:</div>
        <div class="answer-display">${escapeHtml(expected)}</div>
        <div style="margin-top:6px; font-size:13px; color:var(--ink-soft); font-style:italic;">
          Ваш ответ: ${escapeHtml(userAnswer)}
        </div>
      `;
    }
    html += renderConjugationTable(currentCard);
  }

  fb.innerHTML = html;

  document.getElementById('check-btn').textContent = 'Дальше →';
  document.getElementById('show-btn').style.display = 'none';
}

function revealAnswer() {
  if (answered || !currentCard) return;
  const input = document.getElementById('answer-input');
  const isRuToEs = state.direction === 'ru-es';
  const expected = isRuToEs ? currentCard.es : currentCard.ru;
  input.value = expected;
  input.disabled = true;
  answered = true;
  state.seenIdx++;
  const stats = state.cardStats[currentCard.id] || { right: 0, wrong: 0, lastSeen: -1 };
  stats.wrong++;
  stats.lastSeen = state.seenIdx;
  state.cardStats[currentCard.id] = stats;
  state.sessionWrong++;
  state.sessionStreak = 0;
  state.sessionTotal++;
  saveState();
  updateStatsDisplay();

  const fb = document.getElementById('feedback');
  fb.classList.add('show', 'wrong');
  fb.innerHTML = `
    <div class="feedback-label">Ответ показан</div>
    <div class="answer-display">${escapeHtml(expected)}</div>
    ${renderConjugationTable(currentCard)}
  `;
  document.getElementById('check-btn').textContent = 'Дальше →';
  document.getElementById('show-btn').style.display = 'none';
}

function renderConjugationTable(card) {
  const verb = VERBS[card.verbIdx];
  const persons = ['yo', 'tu', 'el', 'nosotros', 'vosotros', 'ellos'];
  const forms = verb.forms && verb.forms[card.tense];
  if (!forms) return '';
  let html = '<div class="conjugation-table">';
  html += `<div class="person" style="grid-column:1/3; font-weight:600; color:var(--ink); margin-bottom:4px;">
    Спряжение <em>${escapeHtml(verb.infinitive)}</em> в ${TENSE_LABELS[card.tense]}:
  </div>`;
  for (const p of persons) {
    const form = forms[p];
    if (!form) continue;
    const isCurrent = (p === card.person);
    html += `<div class="person">${escapeHtml(PERSON_LABELS[p])}</div>`;
    html += `<div class="form ${isCurrent ? 'current' : ''}">${escapeHtml(form)}</div>`;
  }
  html += '</div>';
  return html;
}

function nextCard() {
  showCard();
}

// ============================================================
// СТАТИСТИКА
// ============================================================
function updateStatsDisplay() {
  document.getElementById('stat-correct').textContent = state.sessionCorrect;
  document.getElementById('stat-wrong').textContent = state.sessionWrong;
  document.getElementById('stat-total').textContent = state.sessionTotal;
  document.getElementById('stat-streak').textContent = state.sessionStreak;
}

document.getElementById('reset-stats').addEventListener('click', () => {
  if (!confirm('Сбросить всю статистику и историю карточек?')) return;
  state = defaultState();
  saveState();
  initFiltersUI();
  updateStatsDisplay();
  showCard();
});

// ============================================================
// ФИЛЬТРЫ — UI
// ============================================================
function updateSettingsSummary() {
  const dirLabel = state.direction === 'ru-es' ? 'RU→ES' : 'ES→RU';
  const tenseLabel = state.tense === 'all' ? 'все времена' : TENSE_LABELS[state.tense];
  let groupLabel;
  if (state.group === 'all') groupLabel = 'все группы';
  else if (state.group === 'irreg') groupLabel = 'неправильные';
  else groupLabel = `-${state.group}`;
  const verbsTotal = VERBS.length;
  const verbsSel = state.selectedVerbs.length;
  const verbsLabel = verbsSel === verbsTotal
    ? `${verbsTotal} глаголов`
    : `${verbsSel} из ${verbsTotal} глаголов`;
  const modeLabels = { smart: 'умное повтор.', random: 'случайно', weak: 'проблемные' };
  const modeLabel = modeLabels[state.mode];

  document.getElementById('settings-summary').textContent =
    `${dirLabel} · ${tenseLabel} · ${groupLabel} · ${verbsLabel} · ${modeLabel}`;
}

function initFiltersUI() {
  document.querySelectorAll('#direction-chips .chip').forEach(c => {
    c.classList.toggle('active', c.dataset.dir === state.direction);
  });
  document.querySelectorAll('#tense-chips .chip').forEach(c => {
    c.classList.toggle('active', c.dataset.tense === state.tense);
  });
  document.querySelectorAll('#group-chips .chip').forEach(c => {
    c.classList.toggle('active', c.dataset.group === state.group);
  });
  document.querySelectorAll('#mode-chips .chip').forEach(c => {
    c.classList.toggle('active', c.dataset.mode === state.mode);
  });

  const list = document.getElementById('verb-filter-list');
  list.innerHTML = '';

  const ctlAll = document.createElement('button');
  ctlAll.className = 'chip chip-control';
  ctlAll.textContent = '✓ все';
  ctlAll.addEventListener('click', () => {
    state.selectedVerbs = VERBS.map(v => v.infinitive);
    saveState(); initFiltersUI(); showCard();
  });
  list.appendChild(ctlAll);

  const ctlNone = document.createElement('button');
  ctlNone.className = 'chip chip-control';
  ctlNone.textContent = '✗ снять';
  ctlNone.addEventListener('click', () => {
    state.selectedVerbs = [];
    saveState(); initFiltersUI(); showCard();
  });
  list.appendChild(ctlNone);

  VERBS.forEach(v => {
    const btn = document.createElement('button');
    btn.className = 'chip';
    if (state.selectedVerbs.includes(v.infinitive)) btn.classList.add('active');
    const irregMark = v.irregular ? '★' : '';
    btn.textContent = `${irregMark}${v.infinitive}`;
    btn.title = v.translation;
    btn.addEventListener('click', () => {
      if (state.selectedVerbs.includes(v.infinitive)) {
        state.selectedVerbs = state.selectedVerbs.filter(x => x !== v.infinitive);
      } else {
        state.selectedVerbs.push(v.infinitive);
      }
      saveState();
      btn.classList.toggle('active');
      updateSettingsSummary();
      showCard();
    });
    list.appendChild(btn);
  });

  updateSettingsSummary();
}

document.querySelectorAll('#direction-chips .chip').forEach(c => {
  c.addEventListener('click', () => {
    state.direction = c.dataset.dir;
    saveState(); initFiltersUI(); showCard();
  });
});

document.querySelectorAll('#tense-chips .chip').forEach(c => {
  c.addEventListener('click', () => {
    state.tense = c.dataset.tense;
    saveState(); initFiltersUI(); showCard();
  });
});

document.querySelectorAll('#group-chips .chip').forEach(c => {
  c.addEventListener('click', () => {
    state.group = c.dataset.group;
    saveState(); initFiltersUI(); showCard();
  });
});

document.querySelectorAll('#mode-chips .chip').forEach(c => {
  c.addEventListener('click', () => {
    state.mode = c.dataset.mode;
    saveState(); initFiltersUI(); showCard();
  });
});

document.getElementById('settings-toggle').addEventListener('click', () => {
  document.getElementById('settings').classList.toggle('open');
});

// ============================================================
// СТАРТ
// ============================================================
initFiltersUI();
updateStatsDisplay();
showCard();
