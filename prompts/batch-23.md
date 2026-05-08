# Батч 23 — Unidades 116–120 (союзы, целевые/временные/причинные/уступительные)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–115 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **116–120** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 116 | y, o, pero | Conjunciones | 240–241 |
| 117 | para, para que | Oraciones finales | 242–243 |
| 118 | cuando, antes de que, siempre que… | Oraciones temporales | 244–245 |
| 119 | porque, como, puesto que… | Oraciones causales | 246–247 |
| 120 | aunque, a pesar de que… | Oraciones concesivas | 248–249 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 242 -l 251 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/23-conjunciones-oraciones
   ```

1. **Прочитай разворот** через Read (Unidad 116 — PDF 242–243, 117 — 244–245,
   118 — 246–247, 119 — 248–249, 120 — 250–251).
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
   git add app/data/textbook/u116.js app/data/textbook/u117.js \
           app/data/textbook/u118.js app/data/textbook/u119.js \
           app/data/textbook/u120.js \
           app/textbook/u116.html app/textbook/u117.html \
           app/textbook/u118.html app/textbook/u119.html \
           app/textbook/u120.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 23: unidades 116–120 (союзы, целевые/временные/причинные/уступительные)

- u116: y, o, pero — conjunciones
- u117: para, para que — oraciones finales
- u118: cuando, antes de que, siempre que — oraciones temporales
- u119: porque, como, puesto que — oraciones causales
- u120: aunque, a pesar de que — oraciones concesivas

См. prompts/batch-23.md.
EOF
)"
   git tag -a units-116-120 -m "Batch 23 complete — units 116–120. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/23-conjunciones-oraciones
   git push origin main batch/23-conjunciones-oraciones units-116-120
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
