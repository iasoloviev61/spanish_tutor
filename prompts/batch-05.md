# Батч 05 — Unidades 26–30 (числа 2, ordinales, relativos, interrogativos 1)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–25 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **26–30** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 26 | cien, mil, un millón… | Números cardinales (2) | 60–61 |
| 27 | primero, segundo, tercero… | Números ordinales | 62–63 |
| 28 | que, el que, quien… | Relativos (1) | 64–65 |
| 29 | cuyo, donde, cuando… | Relativos (2) | 66–67 |
| 30 | ¿quién?, ¿qué?… | Interrogativos (1) | 68–69 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 62 -l 71 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/05-numeros-relativos-interrogativos
   ```

1. **Прочитай разворот** через Read (Unidad 26 — PDF 62–63, 27 — 64–65,
   28 — 66–67, 29 — 68–69, 30 — 70–71).
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
   git add app/data/textbook/u26.js app/data/textbook/u27.js \
           app/data/textbook/u28.js app/data/textbook/u29.js \
           app/data/textbook/u30.js \
           app/textbook/u26.html app/textbook/u27.html \
           app/textbook/u28.html app/textbook/u29.html \
           app/textbook/u30.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 05: unidades 26–30 (числа 2, ordinales, relativos, interrogativos 1)

- u26: cien, mil, un millón — números cardinales (2)
- u27: primero, segundo, tercero — números ordinales
- u28: que, el que, quien — relativos (1)
- u29: cuyo, donde, cuando — relativos (2)
- u30: ¿quién?, ¿qué? — interrogativos (1)

См. prompts/batch-05.md.
EOF
)"
   git tag -a units-026-030 -m "Batch 05 complete — units 26–30. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/05-numeros-relativos-interrogativos
   git push origin main batch/05-numeros-relativos-interrogativos units-026-030
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
