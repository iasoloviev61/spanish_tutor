# Батч 22 — Unidades 111–115 (preposiciones 2–5, verbos con preposiciones)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–110 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **111–115** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 111 | a Tijuana, desde la playa… | Preposiciones (2) | 230–231 |
| 112 | encima de la mesa, dentro de la caja… | Preposiciones (3) | 232–233 |
| 113 | a Pedro, de Elvira, en autobús… | Preposiciones (4) | 234–235 |
| 114 | para ti, por amor… | Preposiciones (5) | 236–237 |
| 115 | Pienso en ti | Verbos con preposiciones | 238–239 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 232 -l 241 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/22-preposiciones-verbos
   ```

1. **Прочитай разворот** через Read (Unidad 111 — PDF 232–233, 112 — 234–235,
   113 — 236–237, 114 — 238–239, 115 — 240–241).
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
   git add app/data/textbook/u111.js app/data/textbook/u112.js \
           app/data/textbook/u113.js app/data/textbook/u114.js \
           app/data/textbook/u115.js \
           app/textbook/u111.html app/textbook/u112.html \
           app/textbook/u113.html app/textbook/u114.html \
           app/textbook/u115.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 22: unidades 111–115 (preposiciones 2–5, verbos con preposiciones)

- u111: a Tijuana, desde la playa — preposiciones (2)
- u112: encima de la mesa, dentro de la caja — preposiciones (3)
- u113: a Pedro, de Elvira, en autobús — preposiciones (4)
- u114: para ti, por amor — preposiciones (5)
- u115: Pienso en ti — verbos con preposiciones

См. prompts/batch-22.md.
EOF
)"
   git tag -a units-111-115 -m "Batch 22 complete — units 111–115. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/22-preposiciones-verbos
   git push origin main batch/22-preposiciones-verbos units-111-115
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
