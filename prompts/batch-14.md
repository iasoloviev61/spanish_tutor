# Батч 14 — Unidades 71–75 (condicional, императив регулярный)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–70 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **71–75** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 71 | trabajaría, comería, viviría | Condicional simple: verbos regulares | 150–151 |
| 72 | habría, podría… | Condicional simple: verbos irregulares | 152–153 |
| 73 | Abre la ventana | Imperativo afirmativo: verbos regulares | 154–155 |
| 74 | No abras la ventana | Imperativo negativo: verbos regulares | 156–157 |
| 75 | Cierra la ventana | Imperativo: verbos irregulares (1) | 158–159 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 152 -l 161 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/14-condicional-imperativo
   ```

1. **Прочитай разворот** через Read (Unidad 71 — PDF 152–153, 72 — 154–155,
   73 — 156–157, 74 — 158–159, 75 — 160–161).
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
   git add app/data/textbook/u71.js app/data/textbook/u72.js \
           app/data/textbook/u73.js app/data/textbook/u74.js \
           app/data/textbook/u75.js \
           app/textbook/u71.html app/textbook/u72.html \
           app/textbook/u73.html app/textbook/u74.html \
           app/textbook/u75.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 14: unidades 71–75 (condicional, императив регулярный)

- u71: trabajaría, comería, viviría — condicional simple: verbos regulares
- u72: habría, podría — condicional simple: verbos irregulares
- u73: Abre la ventana — imperativo afirmativo: verbos regulares
- u74: No abras la ventana — imperativo negativo: verbos regulares
- u75: Cierra la ventana — imperativo: verbos irregulares (1)

См. prompts/batch-14.md.
EOF
)"
   git tag -a units-071-075 -m "Batch 14 complete — units 71–75. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/14-condicional-imperativo
   git push origin main batch/14-condicional-imperativo units-071-075
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
