# Батч 21 — Unidades 106–110 (наречия modo/comparación/negación, coincidencia, prep 1)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–105 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **106–110** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 106 | bien, fácilmente… | Adverbios de modo | 220–221 |
| 107 | más rápido, mejor, peor… | Comparación de adverbios | 222–223 |
| 108 | no, nunca, jamás… | Adverbios de negación | 224–225 |
| 109 | yo sí, yo no, yo también, yo tampoco | Expresión de coincidencia o no coincidencia | 226–227 |
| 110 | a las cinco, por la mañana… | Preposiciones (1) | 228–229 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 222 -l 231 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/21-adverbios-preposiciones
   ```

1. **Прочитай разворот** через Read (Unidad 106 — PDF 222–223, 107 — 224–225,
   108 — 226–227, 109 — 228–229, 110 — 230–231).
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
   git add app/data/textbook/u106.js app/data/textbook/u107.js \
           app/data/textbook/u108.js app/data/textbook/u109.js \
           app/data/textbook/u110.js \
           app/textbook/u106.html app/textbook/u107.html \
           app/textbook/u108.html app/textbook/u109.html \
           app/textbook/u110.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 21: unidades 106–110 (наречия modo/comparación/negación, coincidencia, prep 1)

- u106: bien, fácilmente — adverbios de modo
- u107: más rápido, mejor, peor — comparación de adverbios
- u108: no, nunca, jamás — adverbios de negación
- u109: yo sí, yo no, yo también, yo tampoco — coincidencia o no coincidencia
- u110: a las cinco, por la mañana — preposiciones (1)

См. prompts/batch-21.md.
EOF
)"
   git tag -a units-106-110 -m "Batch 21 complete — units 106–110. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/21-adverbios-preposiciones
   git push origin main batch/21-adverbios-preposiciones units-106-110
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
