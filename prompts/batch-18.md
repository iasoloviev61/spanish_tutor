# Батч 18 — Unidades 91–95 (условные предложения, инфинитив)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–90 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **91–95** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 91 | Si ganan serán campeones | Condicionales (1) | 190–191 |
| 92 | Si encontrara trabajo, me casaría | Condicionales (2) | 192–193 |
| 93 | Viajar es estupendo | Infinitivo | 194–195 |
| 94 | Me puse a trabajar. Voy a trabajar | Expresiones con infinitivo (1) | 196–197 |
| 95 | Tengo que trabajar. ¿Puedo abrir la ventana? | Expresiones con infinitivo (2) | 198–199 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 192 -l 201 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/18-condicionales-infinitivo
   ```

1. **Прочитай разворот** через Read (Unidad 91 — PDF 192–193, 92 — 194–195,
   93 — 196–197, 94 — 198–199, 95 — 200–201).
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
   git add app/data/textbook/u91.js app/data/textbook/u92.js \
           app/data/textbook/u93.js app/data/textbook/u94.js \
           app/data/textbook/u95.js \
           app/textbook/u91.html app/textbook/u92.html \
           app/textbook/u93.html app/textbook/u94.html \
           app/textbook/u95.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 18: unidades 91–95 (условные предложения, инфинитив)

- u91: Si ganan serán campeones — condicionales (1)
- u92: Si encontrara trabajo, me casaría — condicionales (2)
- u93: Viajar es estupendo — infinitivo
- u94: Me puse a trabajar. Voy a trabajar — expresiones con infinitivo (1)
- u95: Tengo que trabajar. ¿Puedo abrir la ventana? — expresiones con infinitivo (2)

См. prompts/batch-18.md.
EOF
)"
   git tag -a units-091-095 -m "Batch 18 complete — units 91–95. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/18-condicionales-infinitivo
   git push origin main batch/18-condicionales-infinitivo units-091-095
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
