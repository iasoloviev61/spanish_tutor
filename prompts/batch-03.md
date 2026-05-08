# Батч 03 — Unidades 16–20 (сравнение, превосходная, посессивы, indefinidos 1)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–15 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **16–20** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 16 | tan alto, igual de alto | Forma comparativa de los adjetivos (2) | 40–41 |
| 17 | la más alta, el menos trabajador | Superlativo | 42–43 |
| 18 | mi, tu, su… | Posesivos (1) | 44–45 |
| 19 | mío, tuyo, suyo… | Posesivos (2) | 46–47 |
| 20 | todos, algunos, unos, ninguno… | Indefinidos (1) | 48–49 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 42 -l 51 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/03-comparativo-superlativo-posesivos
   ```

1. **Прочитай разворот** через Read (Unidad 16 — PDF 42–43, 17 — 44–45,
   18 — 46–47, 19 — 48–49, 20 — 50–51).
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
   git add app/data/textbook/u16.js app/data/textbook/u17.js \
           app/data/textbook/u18.js app/data/textbook/u19.js \
           app/data/textbook/u20.js \
           app/textbook/u16.html app/textbook/u17.html \
           app/textbook/u18.html app/textbook/u19.html \
           app/textbook/u20.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 03: unidades 16–20 (сравнение, превосходная, посессивы, indefinidos 1)

- u16: tan alto, igual de alto — comparativo de los adjetivos (2)
- u17: la más alta, el menos trabajador — superlativo
- u18: mi, tu, su — posesivos (1)
- u19: mío, tuyo, suyo — posesivos (2)
- u20: todos, algunos, unos, ninguno — indefinidos (1)

См. prompts/batch-03.md.
EOF
)"
   git tag -a units-016-020 -m "Batch 03 complete — units 16–20. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/03-comparativo-superlativo-posesivos
   git push origin main batch/03-comparativo-superlativo-posesivos units-016-020
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
