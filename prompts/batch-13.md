# Батч 13 — Unidades 66–70 (pluscuamperfecto, futuro, ir a, контраст будущих)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–65 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **66–70** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 66 | había trabajado | Pretérito pluscuamperfecto | 140–141 |
| 67 | trabajaré, comeré, viviré | Futuro simple: verbos regulares | 142–143 |
| 68 | habré, podré… | Futuro simple: verbos irregulares | 144–145 |
| 69 | voy a salir… | Presente de ir a + infinitivo | 146–147 |
| 70 | haré / hago / voy a hacer | Contraste entre las diversas formas de hablar del futuro | 148–149 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 142 -l 151 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/13-pluscuamperfecto-futuro
   ```

1. **Прочитай разворот** через Read (Unidad 66 — PDF 142–143, 67 — 144–145,
   68 — 146–147, 69 — 148–149, 70 — 150–151).
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
   git add app/data/textbook/u66.js app/data/textbook/u67.js \
           app/data/textbook/u68.js app/data/textbook/u69.js \
           app/data/textbook/u70.js \
           app/textbook/u66.html app/textbook/u67.html \
           app/textbook/u68.html app/textbook/u69.html \
           app/textbook/u70.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 13: unidades 66–70 (pluscuamperfecto, futuro, ir a, контраст будущих)

- u66: había trabajado — pretérito pluscuamperfecto
- u67: trabajaré, comeré, viviré — futuro simple: verbos regulares
- u68: habré, podré — futuro simple: verbos irregulares
- u69: voy a salir — presente de ir a + infinitivo
- u70: haré / hago / voy a hacer — contraste de los futuros

См. prompts/batch-13.md.
EOF
)"
   git tag -a units-066-070 -m "Batch 13 complete — units 66–70. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/13-pluscuamperfecto-futuro
   git push origin main batch/13-pluscuamperfecto-futuro units-066-070
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
