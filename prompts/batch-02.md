# Батч 02 — Unidades 11–15 (опущение существительного, демонстративы, прилагательные)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–10 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (более сложный пример с
`atencion` и двумя сравнительными таблицами). Формат данных и правила
оформления описаны в `app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **11–15** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 11 | el rojo, uno rojo | Omisión del nombre | 30–31 |
| 12 | este, ese, aquel… | Demostrativos | 32–33 |
| 13 | un coche pequeño | Adjetivos calificativos | 34–35 |
| 14 | una amiga chilena | Adjetivos de nacionalidad | 36–37 |
| 15 | más caro, menos trabajador | Forma comparativa de los adjetivos (1) | 38–39 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 32 -l 41 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/02-omision-demostrativos-adjetivos
   ```

1. **Прочитай разворот** через Read (Unidad 11 — PDF 32–33, 12 — 34–35,
   13 — 36–37, 14 — 38–39, 15 — 40–41).
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
   git add app/data/textbook/u11.js app/data/textbook/u12.js \
           app/data/textbook/u13.js app/data/textbook/u14.js \
           app/data/textbook/u15.js \
           app/textbook/u11.html app/textbook/u12.html \
           app/textbook/u13.html app/textbook/u14.html \
           app/textbook/u15.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 02: unidades 11–15 (опущение существительного, демонстративы, прилагательные)

- u11: el rojo, uno rojo — omisión del nombre
- u12: este, ese, aquel — demostrativos
- u13: un coche pequeño — adjetivos calificativos
- u14: una amiga chilena — adjetivos de nacionalidad
- u15: más caro, menos trabajador — comparativo de los adjetivos (1)

См. prompts/batch-02.md.
EOF
)"
   git tag -a units-011-015 -m "Batch 02 complete — units 11–15. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/02-omision-demostrativos-adjetivos
   git push origin main batch/02-omision-demostrativos-adjetivos units-011-015
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
