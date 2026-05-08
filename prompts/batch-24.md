# Батч 24 — Unidades 121–126 (consecutivas, impersonales, акцентуация, мayúsculas, vos)

Это **последний батч**: 6 модулей вместо 5 — захватываем приложение
«Otras cuestiones» (Unidades 123–126), чтобы не оставлять висящий хвост.

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–120 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Это финальный батч: 6 модулей. Между Unidad 122 и Unidad 123 в учебнике
есть разделительная страница «Otras cuestiones» — отнесись к этому как
к декоративной заставке, материала не несёт.

Сделай Unidad **121–126** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 121 | por eso, así que, tanto… que | Oraciones consecutivas | 250–251 |
| 122 | Aquí se trabaja mucho | Oraciones impersonales | 252–253 |
| 123 | médico, árbol, inglés | Reglas de acentuación (1) | 256–257 |
| 124 | adiós, león, continúa | Reglas de acentuación (2) | 258–259 |
| 125 | Arturo Sánchez | Uso de mayúsculas | 260–261 |
| 126 | (vos) | Conjugación verbal con vos | 262 |

Книжная страница `N` = PDF-страница `N + 2`. Unidad 126 в учебнике —
**одна страница** (без отдельного разворота с упражнениями); собери
больше упражнений из теории сам. Для всего батча отрендерь страницы
**одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 252 -l 265 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/24-impersonales-acentuacion-vos
   ```

1. **Прочитай разворот** через Read (Unidad 121 — PDF 252–253, 122 — 254–255,
   разделитель «Otras cuestiones» — PDF 256–257, 123 — 258–259, 124 — 260–261,
   125 — 262–263, 126 — 264).
2. **Создай `app/data/textbook/u<NN>.js`** — теория и 10–15 упражнений в
   формате эталона. Правила пересказывай **своими словами**. Упражнения —
   **оригинальные**, в той же педагогической форме (fill / choice / multi
   / match / + диктант через `audio`). Не копируй предложения из учебника —
   строй свои на типичной A1–A2 лексике. Для u126 ориентируйся на
   аргентинскую/уругвайскую разговорную норму, контраст с tú.
3. **Создай `app/textbook/u<NN>.html`** — копия `app/textbook/u01.html`
   с заменой всех `u01` на `u<NN>` и обновлённым `<title>`.
4. **Обнови `app/textbook.html`**: добавь
   `<script src="data/textbook/u<NN>.js"></script>` и запись `'u<NN>'`
   в массив `ids`.
5. **Обнови `app/index.html`**: те же два места — `<script>` и `ids`.
6. После всех 6 модулей — синтакс-чек одним вызовом `node -e`
   через `new Function`: проходит ли каждый `data/textbook/u<NN>.js`
   парсинг и сколько вышло вопросов в каждом.

7. **Финализируй git-историю** — стейдж только нужное, осмысленный коммит,
   аннотированный тег и финальный «учебник целиком». Подставь фактические
   M / Q. Это **последний батч**, поэтому ставим ещё `textbook-complete-v1.0.0`.
   ```bash
   git add app/data/textbook/u121.js app/data/textbook/u122.js \
           app/data/textbook/u123.js app/data/textbook/u124.js \
           app/data/textbook/u125.js app/data/textbook/u126.js \
           app/textbook/u121.html app/textbook/u122.html \
           app/textbook/u123.html app/textbook/u124.html \
           app/textbook/u125.html app/textbook/u126.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 24: unidades 121–126 (consecutivas, impersonales, acentuación, mayúsculas, vos)

- u121: por eso, así que, tanto… que — oraciones consecutivas
- u122: Aquí se trabaja mucho — oraciones impersonales
- u123: médico, árbol, inglés — reglas de acentuación (1)
- u124: adiós, león, continúa — reglas de acentuación (2)
- u125: Arturo Sánchez — uso de mayúsculas
- u126: vos — conjugación verbal con vos

Финальный батч: 126 unidades полностью.
См. prompts/batch-24.md.
EOF
)"
   git tag -a units-121-126 -m "Batch 24 complete — units 121–126. M упражнений / Q вопросов."
   git tag -a textbook-complete-v1.0.0 -m "Учебник полностью собран: 126 unidades, X модулей всего."
   git checkout main
   git merge --ff-only batch/24-impersonales-acentuacion-vos
   git push origin main batch/24-impersonales-acentuacion-vos units-121-126 textbook-complete-v1.0.0
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 14 страниц приложения.
- После этого батча учебник целиком собран — отметь в финальной сводке,
  сколько Unidades всего получилось и сколько в сумме упражнений/вопросов.
