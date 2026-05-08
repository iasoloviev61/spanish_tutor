// ============================================================
// Учебник: рендер теории и интерактивных упражнений
// Данные приходят из window.TEXTBOOK[unitId]
// Глобальный API: window.App.textbook
// ============================================================
(function () {
  // ---------- утилиты ----------
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function normalize(s) {
    return String(s || '').trim().toLowerCase().replace(/\s+/g, ' ');
  }

  function answerEqual(user, expected) {
    const u = normalize(user).replace(/[.!?¿¡,]+$/g, '').replace(/^[¿¡]+/, '');
    const arr = Array.isArray(expected) ? expected : [expected];
    return arr.some((e) => {
      const en = normalize(e).replace(/[.!?¿¡,]+$/g, '').replace(/^[¿¡]+/, '');
      return en === u;
    });
  }

  // ---------- speech synthesis ----------
  let _voice = null;
  function loadVoice() {
    return new Promise((resolve) => {
      const pick = () => {
        const voices = speechSynthesis.getVoices();
        _voice = voices.find((v) => /^es(-|_|$)/i.test(v.lang)) || voices.find((v) => v.lang.toLowerCase().startsWith('es')) || null;
        resolve(_voice);
      };
      const v = speechSynthesis.getVoices();
      if (v && v.length) pick();
      else speechSynthesis.addEventListener('voiceschanged', pick, { once: true });
    });
  }
  function speak(text) {
    try { speechSynthesis.cancel(); } catch (e) {}
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'es-ES';
    if (_voice) u.voice = _voice;
    u.rate = 0.95;
    speechSynthesis.speak(u);
  }
  function bindSpeakable(root) {
    root.querySelectorAll('.speakable').forEach((el) => {
      el.addEventListener('click', () => speak(el.textContent.trim()));
    });
  }

  // ---------- рендер теории ----------
  function renderTheory(unit) {
    const wrap = document.createElement('div');
    for (const block of (unit.theory || [])) {
      wrap.appendChild(renderTheoryBlock(block));
    }
    bindSpeakable(wrap);
    return wrap;
  }

  function renderTheoryBlock(b) {
    const out = document.createElement('div');
    out.className = 'theory-block';
    if (b.type === 'rule') {
      const r = document.createElement('div');
      r.className = 'theory-rule';
      if (b.es) r.insertAdjacentHTML('beforeend', `<div class="theory-rule-es">${b.es}</div>`);
      if (b.examples && b.examples.length) {
        const ex = document.createElement('div');
        ex.className = 'theory-examples';
        for (const e of b.examples) {
          const sp = document.createElement('span');
          sp.className = 'theory-example';
          sp.innerHTML = `<span class="speakable">${escapeHtml(e.es || e)}</span>${e.ru ? `<span class="ex-ru">— ${escapeHtml(e.ru)}</span>` : ''}`;
          ex.appendChild(sp);
        }
        r.appendChild(ex);
      }
      if (b.ru) r.insertAdjacentHTML('beforeend', `<div class="theory-rule-ru">${b.ru}</div>`);
      out.appendChild(r);
    } else if (b.type === 'table') {
      const t = document.createElement('table');
      t.className = 'theory-table';
      if (b.caption) {
        const cap = document.createElement('caption'); cap.textContent = b.caption; t.appendChild(cap);
      }
      if (b.columns) {
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');
        for (const c of b.columns) tr.insertAdjacentHTML('beforeend', `<th>${escapeHtml(c)}</th>`);
        thead.appendChild(tr); t.appendChild(thead);
      }
      const tbody = document.createElement('tbody');
      for (const row of (b.rows || [])) {
        const tr = document.createElement('tr');
        for (let i = 0; i < row.length; i++) {
          const cell = row[i];
          const cls = (b.colClasses && b.colClasses[i]) || '';
          const td = document.createElement('td');
          if (cls) td.className = cls;
          td.innerHTML = cell;
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      }
      t.appendChild(tbody);
      out.appendChild(t);
    } else if (b.type === 'atencion') {
      const a = document.createElement('div');
      a.className = 'atencion';
      a.innerHTML = `<div class="atencion-label">Atención</div>` +
        (b.es ? `<div class="atencion-es">${b.es}</div>` : '') +
        (b.ru ? `<div class="atencion-ru">${b.ru}</div>` : '');
      out.appendChild(a);
    } else if (b.type === 'heading') {
      const h = document.createElement('h3');
      h.textContent = b.text;
      h.style.fontFamily = "'Cormorant Garamond', serif";
      h.style.fontSize = '17px';
      h.style.fontWeight = '500';
      h.style.color = 'var(--ink)';
      h.style.margin = '14px 0 8px';
      out.appendChild(h);
    }
    return out;
  }

  // ---------- рендер упражнений ----------
  function renderExercises(unit, ctx) {
    const wrap = document.createElement('div');
    wrap.className = 'exercises';
    for (let i = 0; i < unit.exercises.length; i++) {
      wrap.appendChild(renderExercise(unit.exercises[i], unit, ctx));
    }
    bindSpeakable(wrap);
    return wrap;
  }

  function renderExercise(ex, unit, ctx) {
    const card = document.createElement('div');
    card.className = 'exercise';
    card.dataset.exerciseId = ex.id;

    card.innerHTML = `
      <div class="exercise-head">
        <span class="exercise-num">${escapeHtml(ex.id)}</span>
        <span class="exercise-title">${escapeHtml(ex.title || '')}</span>
      </div>
      ${ex.instructions ? `<div class="exercise-instr">${ex.instructions}</div>` : ''}
    `;

    const list = document.createElement('div');
    list.className = 'q-list';

    const states = []; // { qid, getValue, setFeedback, correct }

    for (let i = 0; i < ex.questions.length; i++) {
      const q = ex.questions[i];
      const qid = q.id || `q${i + 1}`;
      const node = renderQuestion(q, qid, ex, i + 1);
      list.appendChild(node.row);
      if (node.feedback) list.appendChild(node.feedback);
      states.push({ qid, ...node });
    }
    card.appendChild(list);

    const actions = document.createElement('div');
    actions.className = 'exercise-actions';
    const btnCheck = document.createElement('button');
    btnCheck.className = 'btn-check'; btnCheck.type = 'button'; btnCheck.textContent = 'Проверить упражнение';
    const btnReset = document.createElement('button');
    btnReset.className = 'btn-reset'; btnReset.type = 'button'; btnReset.textContent = 'Сбросить';
    const result = document.createElement('div');
    result.className = 'exercise-result';
    actions.appendChild(btnCheck); actions.appendChild(btnReset); actions.appendChild(result);
    card.appendChild(actions);

    btnCheck.addEventListener('click', async () => {
      let correctN = 0;
      const records = [];
      for (const s of states) {
        const v = s.getValue();
        const ok = s.checker(v);
        s.applyFeedback(ok, v);
        if (ok) correctN++;
        records.push({ questionId: s.qid, isCorrect: ok, userAnswer: typeof v === 'string' ? v : JSON.stringify(v) });
      }
      const total = states.length;
      result.innerHTML = `<strong>${correctN}/${total}</strong> aciertos`;
      result.classList.toggle('is-perfect', correctN === total);
      btnCheck.textContent = 'Проверить ещё раз';

      if (ctx && ctx.userId) {
        for (const r of records) {
          await App.db.progress.record({
            userId: ctx.userId,
            unitId: unit.id,
            exerciseId: ex.id,
            questionId: r.questionId,
            isCorrect: r.isCorrect,
            userAnswer: r.userAnswer,
          });
        }
        if (ctx.onProgress) ctx.onProgress();
      }
    });

    btnReset.addEventListener('click', () => {
      for (const s of states) s.reset();
      result.textContent = ''; result.classList.remove('is-perfect');
      btnCheck.textContent = 'Проверить упражнение';
    });

    return card;
  }

  function renderQuestion(q, qid, ex, num) {
    const row = document.createElement('div');
    row.className = 'q-row';
    const fb = document.createElement('div');
    fb.className = 'q-feedback';

    if (ex.type === 'fill') {
      row.innerHTML = `
        <span class="q-num">${num}.</span>
        <span class="q-prompt">${q.prompt || ''}</span>
      `;
      const input = document.createElement('input');
      input.type = 'text'; input.className = 'q-input'; input.autocomplete = 'off'; input.spellcheck = false;
      input.setAttribute('autocapitalize', 'off');
      if (q.placeholder) input.placeholder = q.placeholder;
      if (q.size) input.style.minWidth = q.size + 'px';
      row.appendChild(input);
      if (q.audio) {
        const sp = document.createElement('button');
        sp.type = 'button'; sp.className = 'q-speak'; sp.title = 'Послушать'; sp.textContent = '🔊';
        sp.addEventListener('click', () => speak(Array.isArray(q.audio) ? q.audio[0] : q.audio));
        row.insertBefore(sp, input);
      }
      return {
        row, feedback: fb,
        getValue: () => input.value,
        checker: (v) => answerEqual(v, q.correct),
        applyFeedback: (ok, v) => {
          input.classList.remove('is-correct', 'is-wrong');
          input.classList.add(ok ? 'is-correct' : 'is-wrong');
          fb.classList.remove('is-correct', 'is-wrong');
          fb.classList.add(ok ? 'is-correct' : 'is-wrong');
          if (ok) {
            fb.innerHTML = '✓' + (q.explanation ? ` <span>${q.explanation}</span>` : '');
          } else {
            const right = Array.isArray(q.correct) ? q.correct[0] : q.correct;
            fb.innerHTML = `✗ Правильно: <strong>${escapeHtml(right)}</strong>` + (q.explanation ? ` · <span>${q.explanation}</span>` : '');
          }
        },
        reset: () => {
          input.value = ''; input.classList.remove('is-correct', 'is-wrong');
          fb.innerHTML = ''; fb.classList.remove('is-correct', 'is-wrong');
        },
      };
    }

    if (ex.type === 'choice' || ex.type === 'multi') {
      const isMulti = ex.type === 'multi';
      row.innerHTML = `
        <span class="q-num">${num}.</span>
        <span class="q-prompt">${q.prompt || ''}</span>
      `;
      if (q.audio) {
        const sp = document.createElement('button');
        sp.type = 'button'; sp.className = 'q-speak'; sp.title = 'Послушать'; sp.textContent = '🔊';
        sp.addEventListener('click', () => speak(Array.isArray(q.audio) ? q.audio[0] : q.audio));
        row.appendChild(sp);
      }
      const opts = document.createElement('div'); opts.className = 'q-options';
      const inputs = [];
      const name = `${ex.id}-${qid}`;
      const correctSet = new Set(
        isMulti
          ? (q.correct || []).map((x) => String(x))
          : [String(q.correct)]
      );
      q.options.forEach((opt, i) => {
        const optVal = (typeof opt === 'object' ? opt.value : opt);
        const optLabel = (typeof opt === 'object' ? (opt.label || opt.value) : opt);
        const id = `${name}-${i}`;
        const lab = document.createElement('label');
        lab.className = 'q-opt';
        lab.dataset.value = String(optVal);
        const inp = document.createElement('input');
        inp.type = isMulti ? 'checkbox' : 'radio';
        inp.id = id; inp.name = name; inp.value = String(optVal);
        const span = document.createElement('span'); span.innerHTML = optLabel;
        lab.appendChild(inp); lab.appendChild(span);
        opts.appendChild(lab);
        inputs.push(inp);
      });
      row.appendChild(opts);

      return {
        row, feedback: fb,
        getValue: () => {
          if (isMulti) return inputs.filter((x) => x.checked).map((x) => x.value);
          const sel = inputs.find((x) => x.checked);
          return sel ? sel.value : '';
        },
        checker: (v) => {
          if (isMulti) {
            const set = new Set(v);
            if (set.size !== correctSet.size) return false;
            for (const x of correctSet) if (!set.has(x)) return false;
            return true;
          }
          return correctSet.has(String(v));
        },
        applyFeedback: (ok, v) => {
          for (const inp of inputs) {
            const lab = inp.closest('.q-opt');
            lab.classList.remove('is-correct', 'is-wrong', 'is-missed');
            const val = inp.value;
            const isUserPick = isMulti ? Array.isArray(v) && v.includes(val) : String(v) === val;
            const isCorrect = correctSet.has(val);
            if (isUserPick && isCorrect) lab.classList.add('is-correct');
            else if (isUserPick && !isCorrect) lab.classList.add('is-wrong');
            else if (!isUserPick && isCorrect) lab.classList.add('is-missed');
          }
          fb.classList.remove('is-correct', 'is-wrong');
          fb.classList.add(ok ? 'is-correct' : 'is-wrong');
          if (ok) fb.innerHTML = '✓' + (q.explanation ? ` <span>${q.explanation}</span>` : '');
          else fb.innerHTML = '✗' + (q.explanation ? ` <span>${q.explanation}</span>` : '');
        },
        reset: () => {
          for (const inp of inputs) {
            inp.checked = false;
            const lab = inp.closest('.q-opt');
            lab.classList.remove('is-correct', 'is-wrong', 'is-missed');
          }
          fb.innerHTML = ''; fb.classList.remove('is-correct', 'is-wrong');
        },
      };
    }

    if (ex.type === 'match') {
      // q.left = string (показывается слева), q.options = string[] (общий пул для всех вопросов в упр.) — задаётся через ex.pool
      // q.correct = строка из pool
      row.classList.add('q-match-row');
      const pool = ex.pool || [];
      row.innerHTML = `
        <span class="q-num">${num}.</span>
        <span class="q-match-left">${q.prompt || q.left}</span>
      `;
      const sel = document.createElement('select');
      sel.innerHTML = '<option value="">— выберите —</option>' +
        pool.map((p) => `<option value="${escapeHtml(p)}">${escapeHtml(p)}</option>`).join('');
      row.appendChild(sel);
      return {
        row, feedback: fb,
        getValue: () => sel.value,
        checker: (v) => answerEqual(v, q.correct),
        applyFeedback: (ok, v) => {
          sel.classList.remove('is-correct', 'is-wrong');
          sel.classList.add(ok ? 'is-correct' : 'is-wrong');
          fb.classList.remove('is-correct', 'is-wrong');
          fb.classList.add(ok ? 'is-correct' : 'is-wrong');
          if (ok) fb.innerHTML = '✓';
          else fb.innerHTML = `✗ Правильно: <strong>${escapeHtml(q.correct)}</strong>`;
        },
        reset: () => {
          sel.value = ''; sel.classList.remove('is-correct', 'is-wrong');
          fb.innerHTML = ''; fb.classList.remove('is-correct', 'is-wrong');
        },
      };
    }

    // fallback
    row.textContent = '[unknown question type: ' + ex.type + ']';
    return { row, feedback: fb, getValue: () => '', checker: () => false, applyFeedback: () => {}, reset: () => {} };
  }

  // ---------- основной запуск страницы модуля ----------
  async function mountUnitPage(unitId, opts = {}) {
    await loadVoice();
    const unit = (window.TEXTBOOK || {})[unitId];
    if (!unit) {
      document.getElementById('unit-root').innerHTML = `<p>Не найдены данные модуля «${escapeHtml(unitId)}». Проверьте подключение data/textbook/${escapeHtml(unitId)}.js</p>`;
      return;
    }

    const user = await App.profile.ensureActive();
    const ctx = {
      userId: user ? user.id : null,
      onProgress: opts.onProgress,
    };

    // header
    const header = document.getElementById('unit-header');
    if (header) {
      header.innerHTML = `
        <div class="unit-header-num">${escapeHtml(String(unit.number))}</div>
        <div class="unit-header-text">
          <div class="unit-header-es">${escapeHtml(unit.title.es)}</div>
          <div class="unit-header-topic">${escapeHtml(unit.title.topic)}</div>
          <div class="unit-header-topic-ru">${escapeHtml(unit.topicRu || '')}</div>
        </div>
      `;
    }

    const theoryHost = document.getElementById('theory-pane');
    if (theoryHost) { theoryHost.innerHTML = '<h2>Teoría · Теория</h2>'; theoryHost.appendChild(renderTheory(unit)); }

    const practiceHost = document.getElementById('practice-pane');
    if (practiceHost) { practiceHost.innerHTML = '<h2>Ejercicios · Практика</h2>'; practiceHost.appendChild(renderExercises(unit, ctx)); }

    // unit summary
    await renderUnitSummary(unit, ctx);
    ctx.onProgress = () => renderUnitSummary(unit, ctx);
  }

  async function renderUnitSummary(unit, ctx) {
    const host = document.getElementById('unit-summary');
    if (!host) return;
    if (!ctx.userId) {
      host.innerHTML = '<span class="unit-summary-text">Создайте профиль в шапке, чтобы сохранять прогресс по упражнениям.</span>';
      return;
    }
    const recs = await App.db.progress.forUnit(ctx.userId, unit.id);
    const totalQs = unit.exercises.reduce((s, e) => s + e.questions.length, 0);
    const everCorrect = recs.filter((r) => r.everCorrect).length;
    const lastCorrect = recs.filter((r) => r.lastIsCorrect).length;
    host.innerHTML = `
      <div class="unit-summary-text">
        Прогресс модуля: <strong>${everCorrect}/${totalQs}</strong> вопросов решено хотя бы раз
        · <strong>${lastCorrect}</strong> верно в последней попытке
      </div>
    `;
  }

  // ---------- рендер хаба со списком модулей ----------
  async function mountHubPage(units) {
    const user = await App.profile.ensureActive();
    const grid = document.getElementById('units-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const allRecs = user ? await App.db.progress.forUser(user.id) : [];
    const byUnit = new Map();
    for (const r of allRecs) {
      if (!byUnit.has(r.unitId)) byUnit.set(r.unitId, []);
      byUnit.get(r.unitId).push(r);
    }
    for (const u of units) {
      const totalQs = u.exercises.reduce((s, e) => s + e.questions.length, 0);
      const recs = byUnit.get(u.id) || [];
      const ever = recs.filter((r) => r.everCorrect).length;
      const a = document.createElement('a');
      a.className = 'unit-card';
      a.href = `textbook/${u.id}.html`;
      a.innerHTML = `
        <div class="unit-num">${escapeHtml(String(u.number))}</div>
        <div class="unit-meta">
          <div class="unit-title-es">${escapeHtml(u.title.es)}</div>
          <div class="unit-topic-es">${escapeHtml(u.title.topic)}</div>
          <div class="unit-topic-ru">${escapeHtml(u.topicRu || '')}</div>
        </div>
        <div class="unit-progress">
          <span>${ever}/${totalQs}</span>
          <div class="unit-progress-bar"><div class="unit-progress-fill" style="width:${totalQs ? Math.round(ever / totalQs * 100) : 0}%"></div></div>
        </div>
      `;
      grid.appendChild(a);
    }
  }

  window.App = window.App || {};
  window.App.textbook = { mountUnitPage, mountHubPage, speak };
})();
