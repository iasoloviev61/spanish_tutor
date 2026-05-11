// ============================================================
// Раздел «Чтение» (Lectura): хаб уровней + экран дня.
// Источник данных — window.TEXTS из data/texts.js.
// Прогресс — localStorage, ключ spanish_reading_v1:<userId|guest>.
// Глобальный API: window.App.reading
// ============================================================
(function () {
  const KEY_PREFIX = 'spanish_reading_v1:';
  const ACTIVE_KEY = 'spanish_app_active_user_v1';
  const LEVELS = ['A1', 'A2', 'B1', 'B2'];
  const LEVEL_INFO = {
    A1: { eyebrow: 'Principiante', desc: 'Простые тексты с настоящим временем и Pretérito Perfecto.' },
    A2: { eyebrow: 'Elemental', desc: 'Прошедшие времена, описания, более длинные истории.' },
    B1: { eyebrow: 'Intermedio', desc: 'Subjuntivo, мнения, аргументация.' },
    B2: { eyebrow: 'Intermedio alto', desc: 'Сложные темы, идиоматика, развёрнутая аргументация.' },
  };

  // ---------- хранилище ----------
  function progKey() {
    const id = localStorage.getItem(ACTIVE_KEY) || 'guest';
    return KEY_PREFIX + id;
  }
  function defaultProgress() {
    return { completed_days: [], current_day: null, unknown_words: [], answers: {} };
  }
  function getProgress() {
    try {
      const raw = localStorage.getItem(progKey());
      if (!raw) return defaultProgress();
      const p = JSON.parse(raw);
      return Object.assign(defaultProgress(), p);
    } catch (e) {
      return defaultProgress();
    }
  }
  function saveProgress(p) {
    try { localStorage.setItem(progKey(), JSON.stringify(p)); } catch (e) { /* quota — игнор */ }
  }

  // ---------- доступ к данным ----------
  function texts(level) {
    return (window.TEXTS || []).filter((t) => t.level === level).sort((a, b) => a.day - b.day);
  }
  function findText(id) {
    return (window.TEXTS || []).find((t) => t.id === id) || null;
  }

  // ---------- TTS ----------
  let currentUtt = null;
  let currentAudio = null;

  function pickEsVoice() {
    if (!('speechSynthesis' in window)) return null;
    const voices = speechSynthesis.getVoices();
    const pref = voices.find((v) => v.lang && /^es/i.test(v.lang) && /m[oó]nica|jorge/i.test(v.name));
    return pref || voices.find((v) => v.lang && /^es/i.test(v.lang)) || null;
  }

  function setBtnState(btn, playing) {
    if (!btn) return;
    btn.dataset.state = playing ? 'playing' : 'idle';
    btn.textContent = playing ? '■ Стоп' : '🔊 Прослушать';
  }

  function speak(text, audioPath, btn) {
    stopSpeaking();
    if (audioPath) {
      currentAudio = new Audio(audioPath);
      currentAudio.play().catch(() => {});
      currentAudio.addEventListener('ended', () => { currentAudio = null; setBtnState(btn, false); });
      setBtnState(btn, true);
      return;
    }
    if (!('speechSynthesis' in window)) return;
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'es-ES';
    const v = pickEsVoice();
    if (v) utt.voice = v;
    utt.onend = () => { currentUtt = null; setBtnState(btn, false); };
    utt.onerror = () => { currentUtt = null; setBtnState(btn, false); };
    currentUtt = utt;
    setBtnState(btn, true);
    speechSynthesis.speak(utt);
  }

  function stopSpeaking() {
    if (currentUtt && 'speechSynthesis' in window) speechSynthesis.cancel();
    if (currentAudio) { try { currentAudio.pause(); } catch (e) {} currentAudio = null; }
    currentUtt = null;
    document.querySelectorAll('.read-tts').forEach((b) => setBtnState(b, false));
  }

  // ---------- сравнение слов ----------
  // Артикль/частица в начале словарной записи отбрасывается, диакритика сохраняется.
  const ARTICLES_RE = /^(el|la|los|las|un|una|unos|unas)\s+/i;
  function vocabKey(word) {
    let s = String(word || '').replace(/^[¡¿\s]+/, '').trim();
    s = s.replace(ARTICLES_RE, '');
    const m = s.match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/);
    return m ? m[0].toLowerCase() : s.toLowerCase();
  }
  function vocabIndex(t) {
    const m = {};
    (t.vocabulary || []).forEach((v) => {
      const k = vocabKey(v.word);
      if (k && !m[k]) m[k] = v;
    });
    return m;
  }

  // ---------- HTML helpers ----------
  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Каждое слово оборачивается в <span class="word"> для двойного клика.
  function renderParagraph(p) {
    const out = [];
    const re = /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g;
    let last = 0;
    let m;
    while ((m = re.exec(p)) !== null) {
      if (m.index > last) out.push(escapeHtml(p.substring(last, m.index)));
      const w = m[0];
      out.push(`<span class="word" data-w="${escapeHtml(w.toLowerCase())}">${escapeHtml(w)}</span>`);
      last = m.index + w.length;
    }
    if (last < p.length) out.push(escapeHtml(p.substring(last)));
    return out.join('');
  }
  function renderText(text) {
    return String(text || '').split('\n\n').map((p) => `<p>${renderParagraph(p)}</p>`).join('');
  }

  // ---------- popup ----------
  let popupEl = null;
  function closePopup() {
    if (popupEl) { popupEl.remove(); popupEl = null; }
  }
  function showPopup(near, html) {
    closePopup();
    popupEl = document.createElement('div');
    popupEl.className = 'word-popup';
    popupEl.innerHTML = html;
    document.body.appendChild(popupEl);
    const r = near.getBoundingClientRect();
    const popH = popupEl.offsetHeight;
    const popW = popupEl.offsetWidth;
    let top = window.scrollY + r.bottom + 6;
    if (r.bottom + popH + 12 > window.innerHeight) {
      top = window.scrollY + r.top - popH - 6;
    }
    let left = window.scrollX + r.left;
    if (left + popW + 8 > window.scrollX + window.innerWidth) {
      left = window.scrollX + window.innerWidth - popW - 8;
    }
    if (left < window.scrollX + 8) left = window.scrollX + 8;
    popupEl.style.top = top + 'px';
    popupEl.style.left = left + 'px';
  }

  // глобальный обработчик закрытия — навешиваем один раз
  let docHandlerInstalled = false;
  function installDocHandler() {
    if (docHandlerInstalled) return;
    docHandlerInstalled = true;
    document.addEventListener('mousedown', (e) => {
      if (!popupEl) return;
      if (popupEl.contains(e.target)) return;
      if (e.target.closest && e.target.closest('.read-text .word')) return;
      closePopup();
    }, true);
    window.addEventListener('scroll', () => closePopup(), true);
  }

  // ---------- хаб ----------
  function pickContinue(days, p) {
    if (!days.length) return null;
    if (p.current_day) {
      const d = days.find((x) => x.id === p.current_day);
      if (d && !p.completed_days.includes(d.id)) return d.id;
    }
    const next = days.find((x) => !p.completed_days.includes(x.id));
    if (next) return next.id;
    return days[days.length - 1].id;
  }

  function renderHub() {
    const hub = document.getElementById('read-hub');
    const screen = document.getElementById('read-screen');
    if (!hub || !screen) return;
    hub.hidden = false;
    screen.hidden = true;
    closePopup();
    stopSpeaking();

    const p = getProgress();
    const a1 = texts('A1');
    const continueId = pickContinue(a1, p);
    const continueDay = continueId ? a1.find((d) => d.id === continueId) : null;
    const continueLabel = continueDay
      ? `Продолжить · день ${continueDay.day} →`
      : 'Нет текстов →';

    hub.innerHTML = `
      <div class="reading-intro">
        <p>Короткие тексты с TTS, всплывающим переводом по двойному клику и проверкой понимания. Открыт уровень A1, остальные — позже.</p>
        <button class="reading-cta" id="continue-btn"${continueDay ? '' : ' disabled'}>${escapeHtml(continueLabel)}</button>
      </div>
      <div class="level-cards">
        ${LEVELS.map((lv) => renderLevelCard(lv, p)).join('')}
      </div>
    `;

    if (continueDay) {
      hub.querySelector('#continue-btn').addEventListener('click', () => openDay(continueDay.id));
    }
    hub.querySelectorAll('.day-tile').forEach((tile) => {
      const id = tile.dataset.id;
      if (id) tile.addEventListener('click', () => openDay(id));
    });

    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  function renderLevelCard(level, p) {
    const days = texts(level);
    const lab = LEVEL_INFO[level] || { eyebrow: '', desc: '' };
    const isActive = level === 'A1' && days.length > 0;

    if (!isActive) {
      return `
        <section class="level-card is-locked" aria-disabled="true">
          <div class="level-soon">скоро</div>
          <div class="level-card-head">
            <span class="level-name">${level}</span>
            <span class="level-eyebrow">${escapeHtml(lab.eyebrow)}</span>
          </div>
          <p class="level-desc">${escapeHtml(lab.desc)}</p>
        </section>
      `;
    }

    const completed = days.filter((d) => p.completed_days.includes(d.id)).length;
    const tiles = days.map((d) => {
      const isDone = p.completed_days.includes(d.id);
      const isCurrent = p.current_day === d.id && !isDone;
      const cls = ['day-tile'];
      if (isDone) cls.push('is-done');
      else if (isCurrent) cls.push('is-current');
      else cls.push('is-future');
      const mark = isDone ? '✓' : String(d.day);
      const titleAttr = `${d.day}. ${d.title}`;
      return `<button type="button" class="${cls.join(' ')}" data-id="${escapeHtml(d.id)}" title="${escapeHtml(titleAttr)}" aria-label="${escapeHtml(titleAttr)}">${escapeHtml(mark)}</button>`;
    }).join('');

    return `
      <section class="level-card is-active">
        <div class="level-card-head">
          <span class="level-name">${level}</span>
          <span class="level-eyebrow">${escapeHtml(lab.eyebrow)}</span>
        </div>
        <p class="level-desc">${escapeHtml(lab.desc)}</p>
        <div class="level-progress">${completed}/${days.length} дней</div>
        <div class="day-grid">${tiles}</div>
      </section>
    `;
  }

  // ---------- экран дня ----------
  function openDay(id) {
    const t = findText(id);
    if (!t) return;
    const hub = document.getElementById('read-hub');
    const screen = document.getElementById('read-screen');
    if (!hub || !screen) return;
    hub.hidden = true;
    screen.hidden = false;
    closePopup();
    stopSpeaking();

    const days = texts(t.level);
    const idx = days.findIndex((d) => d.id === id);
    const prev = idx > 0 ? days[idx - 1] : null;
    const next = idx >= 0 && idx < days.length - 1 ? days[idx + 1] : null;
    const p = getProgress();
    const isDone = p.completed_days.includes(id);

    screen.innerHTML = `
      <div class="read-topbar">
        <button class="read-back" id="read-back" type="button">← Назад к списку</button>
        <span class="read-day-num">${escapeHtml(t.level)} · день ${t.day}</span>
      </div>

      <h2 class="read-title">${escapeHtml(t.title)}</h2>

      <div class="read-controls">
        <button class="read-tts" id="tts-btn" type="button" data-state="idle">🔊 Прослушать</button>
      </div>

      <div class="read-text" id="read-text">${renderText(t.text)}</div>

      <h3 class="read-h3">Новые слова</h3>
      ${renderVocabTable(t)}

      ${(t.grammar_notes && t.grammar_notes.length) ? `
        <details class="read-grammar">
          <summary>Грамматика</summary>
          <div class="read-grammar-body">
            ${t.grammar_notes.map((g) => `
              <div class="grammar-note">
                <div class="grammar-topic">${escapeHtml(g.topic)}</div>
                <div class="grammar-text">${escapeHtml(g.note)}</div>
              </div>
            `).join('')}
          </div>
        </details>
      ` : ''}

      ${(t.questions && t.questions.length) ? `
        <h3 class="read-h3">Проверь понимание</h3>
        <div class="read-questions" id="read-questions">${renderQuestions(t, p)}</div>
        <div class="read-q-actions">
          <button class="read-check" id="check-btn" type="button">Проверить</button>
          <span class="read-q-result" id="q-result"></span>
        </div>
      ` : ''}

      <div class="read-bottom">
        ${prev ? `<button type="button" class="read-nav-prev" data-id="${escapeHtml(prev.id)}">← ${prev.day}. ${escapeHtml(prev.title)}</button>` : '<span></span>'}
        <button type="button" class="read-finish" id="finish-btn">${isDone ? '✓ Пройдено' : 'Завершить день'}</button>
        ${next ? `<button type="button" class="read-nav-next" data-id="${escapeHtml(next.id)}">${next.day}. ${escapeHtml(next.title)} →</button>` : '<span></span>'}
      </div>
    `;

    bindDayScreen(t, p);
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }

  function bindDayScreen(t, p) {
    const screen = document.getElementById('read-screen');

    // TTS
    const ttsBtn = screen.querySelector('#tts-btn');
    if (ttsBtn) {
      ttsBtn.addEventListener('click', () => {
        if (ttsBtn.dataset.state === 'playing') stopSpeaking();
        else speak(t.text, t.audio || null, ttsBtn);
      });
    }

    // Назад
    screen.querySelector('#read-back').addEventListener('click', () => renderHub());

    // двойной клик по слову
    const textEl = screen.querySelector('#read-text');
    textEl.addEventListener('dblclick', (e) => {
      const span = e.target.closest && e.target.closest('.word');
      if (!span) return;
      onWordDblClick(span, span.dataset.w, t);
    });

    // вокаб «➕ в тренажёр»
    screen.querySelectorAll('.vocab-add').forEach((b) => {
      b.addEventListener('click', () => {
        addUnknown({ word: b.dataset.word, translation: b.dataset.translation || null, source_day: t.id });
        b.textContent = '✓ добавлено';
        b.disabled = true;
      });
    });
    syncVocabAddState(t);

    // вопросы
    const checkBtn = screen.querySelector('#check-btn');
    const qResult = screen.querySelector('#q-result');
    if (checkBtn) {
      checkBtn.addEventListener('click', () => {
        const selected = collectAnswers(t);
        const prog = getProgress();
        prog.answers[t.id] = selected;
        saveProgress(prog);
        applyResults(t, selected);
        const correctCount = selected.reduce((acc, s, i) => acc + (s === t.questions[i].correct ? 1 : 0), 0);
        qResult.textContent = `${correctCount} из ${t.questions.length}`;
      });
    }
    if (p.answers[t.id]) {
      applyResults(t, p.answers[t.id]);
      const sel = p.answers[t.id];
      const correctCount = sel.reduce((acc, s, i) => acc + (t.questions[i] && s === t.questions[i].correct ? 1 : 0), 0);
      if (qResult) qResult.textContent = `${correctCount} из ${t.questions.length}`;
    }

    // завершить день
    const finishBtn = screen.querySelector('#finish-btn');
    finishBtn.addEventListener('click', () => {
      const prog = getProgress();
      if (!prog.completed_days.includes(t.id)) prog.completed_days.push(t.id);
      const dayList = texts(t.level);
      const upcoming = dayList.find((d) => !prog.completed_days.includes(d.id));
      prog.current_day = upcoming ? upcoming.id : null;
      saveProgress(prog);
      if (upcoming) openDay(upcoming.id);
      else renderHub();
    });

    // нав-стрелки
    const prevBtn = screen.querySelector('.read-nav-prev');
    if (prevBtn) prevBtn.addEventListener('click', () => openDay(prevBtn.dataset.id));
    const nextBtn = screen.querySelector('.read-nav-next');
    if (nextBtn) nextBtn.addEventListener('click', () => openDay(nextBtn.dataset.id));
  }

  function renderVocabTable(t) {
    if (!t.vocabulary || !t.vocabulary.length) return '<div class="vocab-list"><div class="vocab-row">—</div></div>';
    const rows = t.vocabulary.map((v) => `
      <div class="vocab-row">
        <div class="vocab-word">${escapeHtml(v.word)}</div>
        <div class="vocab-trans">${escapeHtml(v.translation)}</div>
        <div class="vocab-ex">${escapeHtml(v.example || '')}</div>
        <div class="vocab-action">
          <button type="button" class="vocab-add" data-word="${escapeHtml(v.word)}" data-translation="${escapeHtml(v.translation)}">➕ в тренажёр</button>
        </div>
      </div>
    `).join('');
    return `
      <div class="vocab-list">
        <div class="vocab-row vocab-head">
          <div>Слово</div><div>Перевод</div><div>Пример</div><div></div>
        </div>
        ${rows}
      </div>
    `;
  }

  function syncVocabAddState(t) {
    const p = getProgress();
    const set = new Set(p.unknown_words.map((u) => `${u.source_day}::${u.word}`));
    document.querySelectorAll('.vocab-add').forEach((b) => {
      const key = `${t.id}::${b.dataset.word}`;
      if (set.has(key)) {
        b.textContent = '✓ добавлено';
        b.disabled = true;
      }
    });
  }

  function renderQuestions(t, p) {
    const saved = p.answers[t.id];
    return t.questions.map((q, qi) => {
      const opts = q.options.map((o, oi) => {
        const checked = saved && saved[qi] === oi ? ' checked' : '';
        return `<label class="q-opt">
          <input type="radio" name="q-${qi}" value="${oi}"${checked}>
          <span>${escapeHtml(o)}</span>
        </label>`;
      }).join('');
      return `<div class="q-block" data-qi="${qi}">
        <div class="q-prompt">${escapeHtml(q.q)}</div>
        <div class="q-opts">${opts}</div>
      </div>`;
    }).join('');
  }

  function collectAnswers(t) {
    const out = [];
    for (let i = 0; i < t.questions.length; i++) {
      const r = document.querySelector(`input[name="q-${i}"]:checked`);
      out.push(r ? Number(r.value) : null);
    }
    return out;
  }

  function applyResults(t, selected) {
    const blocks = document.querySelectorAll('.q-block');
    blocks.forEach((b, qi) => {
      const opts = b.querySelectorAll('.q-opt');
      opts.forEach((opt, oi) => {
        opt.classList.remove('is-correct', 'is-bad');
        const correct = t.questions[qi] && t.questions[qi].correct;
        if (oi === correct) opt.classList.add('is-correct');
        if (selected[qi] != null && selected[qi] !== correct && oi === selected[qi]) opt.classList.add('is-bad');
      });
    });
  }

  function onWordDblClick(span, word, t) {
    const map = vocabIndex(t);
    const found = map[word];
    if (found) {
      showPopup(span, `
        <div class="wp-word">${escapeHtml(found.word)}</div>
        <div class="wp-trans">${escapeHtml(found.translation)}</div>
        ${found.example ? `<div class="wp-ex">${escapeHtml(found.example)}</div>` : ''}
      `);
    } else {
      showPopup(span, `
        <div class="wp-word">${escapeHtml(word)}</div>
        <div class="wp-empty">не в словаре дня</div>
        <button type="button" class="wp-add">➕ в незнакомые</button>
      `);
      const btn = popupEl.querySelector('.wp-add');
      const prog = getProgress();
      const exists = prog.unknown_words.find((u) => u.word === word && u.source_day === t.id);
      if (exists) {
        btn.textContent = '✓ добавлено';
        btn.disabled = true;
      }
      btn.addEventListener('click', () => {
        addUnknown({ word, translation: null, source_day: t.id });
        btn.textContent = '✓ добавлено';
        btn.disabled = true;
      });
    }
  }

  function addUnknown(entry) {
    const p = getProgress();
    const exists = p.unknown_words.find((u) => u.word === entry.word && u.source_day === entry.source_day);
    if (!exists) p.unknown_words.push(entry);
    saveProgress(p);
  }

  // ---------- entry ----------
  async function mount() {
    installDocHandler();
    // прогрев голосов TTS — getVoices иногда пуст до voiceschanged
    if ('speechSynthesis' in window) {
      try { speechSynthesis.getVoices(); } catch (e) {}
      speechSynthesis.onvoiceschanged = () => {};
    }
    renderHub();
  }

  window.App = window.App || {};
  window.App.reading = {
    mount, renderHub, openDay,
    getProgress, saveProgress, // экспортируем для будущей интеграции с тренажёром
  };
})();
