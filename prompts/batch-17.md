# Батч 17 — Unidades 86–90 (эмоции, контраст ind/subj, estilo indirecto)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–85 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **86–90** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 86 | Me gusta que venga a casa | Expresión de emociones, sentimientos y valoraciones | 180–181 |
| 87 | Creo que es… / No creo que sea… | Contraste entre indicativo y subjuntivo | 182–183 |
| 88 | Dice que vive… Dijo que vivía… | Estilo indirecto (1) | 184–185 |
| 89 | Me preguntó dónde vivía | Estilo indirecto (2) | 186–187 |
| 90 | Me pidió que le ayudara | Estilo indirecto (3) | 188–189 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 182 -l 191 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/17-subjuntivo-estilo-indirecto
   ```

1. **Прочитай разворот** через Read (Unidad 86 — PDF 182–183, 87 — 184–185,
   88 — 186–187, 89 — 188–189, 90 — 190–191).
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
   git add app/data/textbook/u86.js app/data/textbook/u87.js \
           app/data/textbook/u88.js app/data/textbook/u89.js \
           app/data/textbook/u90.js \
           app/textbook/u86.html app/textbook/u87.html \
           app/textbook/u88.html app/textbook/u89.html \
           app/textbook/u90.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 17: unidades 86–90 (эмоции, контраст ind/subj, estilo indirecto)

- u86: Me gusta que venga a casa — emociones, sentimientos y valoraciones
- u87: Creo que es / No creo que sea — contraste indicativo y subjuntivo
- u88: Dice que vive — estilo indirecto (1)
- u89: Me preguntó dónde vivía — estilo indirecto (2)
- u90: Me pidió que le ayudara — estilo indirecto (3)

См. prompts/batch-17.md.
EOF
)"
   git tag -a units-086-090 -m "Batch 17 complete — units 86–90. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/17-subjuntivo-estilo-indirecto
   git push origin main batch/17-subjuntivo-estilo-indirecto units-086-090
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
