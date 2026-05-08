# Батч 16 — Unidades 81–85 (subjuntivo продолжение, deseos, probabilidad)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–80 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **81–85** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 81 | conozca, diga, vaya… | Presente de subjuntivo: verbos irregulares (2) | 170–171 |
| 82 | trabajara, comiera, viviera | Pretérito imperfecto de subjuntivo: verbos regulares | 172–173 |
| 83 | fuera, tuviera… | Pretérito imperfecto de subjuntivo: verbos irregulares | 174–175 |
| 84 | Quiero que me ayudes | Expresión de deseos | 176–177 |
| 85 | Quizás lo haga | Expresión de probabilidad | 178–179 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 172 -l 181 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/16-subjuntivo-deseos
   ```

1. **Прочитай разворот** через Read (Unidad 81 — PDF 172–173, 82 — 174–175,
   83 — 176–177, 84 — 178–179, 85 — 180–181).
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
   git add app/data/textbook/u81.js app/data/textbook/u82.js \
           app/data/textbook/u83.js app/data/textbook/u84.js \
           app/data/textbook/u85.js \
           app/textbook/u81.html app/textbook/u82.html \
           app/textbook/u83.html app/textbook/u84.html \
           app/textbook/u85.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 16: unidades 81–85 (subjuntivo продолжение, deseos, probabilidad)

- u81: conozca, diga, vaya — presente de subjuntivo: verbos irregulares (2)
- u82: trabajara, comiera, viviera — pretérito imperfecto de subjuntivo: regulares
- u83: fuera, tuviera — pretérito imperfecto de subjuntivo: irregulares
- u84: Quiero que me ayudes — expresión de deseos
- u85: Quizás lo haga — expresión de probabilidad

См. prompts/batch-16.md.
EOF
)"
   git tag -a units-081-085 -m "Batch 16 complete — units 81–85. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/16-subjuntivo-deseos
   git push origin main batch/16-subjuntivo-deseos units-081-085
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
