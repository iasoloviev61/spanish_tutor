# Батч 19 — Unidades 96–100 (инфинитив 3, gerundio, participio, adverbios de lugar)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–95 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **96–100** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 96 | Suelo comer en casa | Expresiones con infinitivo (3) | 200–201 |
| 97 | Quiero ir / Quiero que vayas | Verbos seguidos de infinitivo o de subjuntivo | 202–203 |
| 98 | trabajando, comiendo, viviendo | Gerundio | 204–205 |
| 99 | trabajado, comido, vivido | Participio | 206–207 |
| 100 | aquí, allí, abajo… | Adverbios de lugar | 208–209 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 202 -l 211 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/19-infinitivo-gerundio-participio
   ```

1. **Прочитай разворот** через Read (Unidad 96 — PDF 202–203, 97 — 204–205,
   98 — 206–207, 99 — 208–209, 100 — 210–211).
2. **Создай `app/data/textbook/u<NN>.js`** — теория и 10–15 упражнений в
   формате эталона. Правила пересказывай **своими словами**. Упражнения —
   **оригинальные**, в той же педагогической форме (fill / choice / multi
   / match / + диктант через `audio`). Не копируй предложения из учебника —
   строй свои на типичной A1–A2 лексике.
3. **Создай `app/textbook/u<NN>.html`** — копия `app/textbook/u01.html`
   с заменой всех `u01` на `u<NN>` и обновлённым `<title>`.
4. **Обнови `app/textbook.html`**: добавь
   `<script src="data/textbook/u<NN>.js"></script>` и запись `'u<NN>'`
   в массив `ids`.
5. **Обнови `app/index.html`**: те же два места — `<script>` и `ids`.
6. После всех 5 модулей — синтакс-чек одним вызовом `node -e`
   через `new Function`: проходит ли каждый `data/textbook/u<NN>.js`
   парсинг и сколько вышло вопросов в каждом.

7. **Финализируй git-историю** — стейдж только нужное, осмысленный коммит,
   аннотированный тег, fast-forward в `main`, пуш ветки и тега. Подставь
   фактические M (упражнений) / Q (вопросов) из синтакс-чека.
   ```bash
   git add app/data/textbook/u96.js app/data/textbook/u97.js \
           app/data/textbook/u98.js app/data/textbook/u99.js \
           app/data/textbook/u100.js \
           app/textbook/u96.html app/textbook/u97.html \
           app/textbook/u98.html app/textbook/u99.html \
           app/textbook/u100.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 19: unidades 96–100 (инфинитив 3, gerundio, participio, adverbios de lugar)

- u96: Suelo comer en casa — expresiones con infinitivo (3)
- u97: Quiero ir / Quiero que vayas — verbos con infinitivo o subjuntivo
- u98: trabajando, comiendo, viviendo — gerundio
- u99: trabajado, comido, vivido — participio
- u100: aquí, allí, abajo — adverbios de lugar

См. prompts/batch-19.md.
EOF
)"
   git tag -a units-096-100 -m "Batch 19 complete — units 96–100. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/19-infinitivo-gerundio-participio
   git push origin main batch/19-infinitivo-gerundio-participio units-096-100
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
