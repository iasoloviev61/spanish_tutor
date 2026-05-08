# Батч 01 — Unidades 6–10 (определённый артикль и его расширения)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–5 — см. эталоны
`app/data/textbook/u01.js` (полный пример со всеми типами упражнений) и
`app/data/textbook/u05.js` (более сложный пример с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **6–10** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 6 | el, la, los, las | El artículo determinado | 20–21 |
| 7 | un perro / el perro | Contraste entre el artículo determinado y el indeterminado | 22–23 |
| 8 | el señor Alonso, la calle Mayor | El artículo determinado con nombres propios | 24–25 |
| 9 | el seis de enero | El artículo determinado con expresiones de tiempo y de cantidad | 26–27 |
| 10 | tocar la guitarra | Otros usos del artículo determinado | 28–29 |

Книжная страница `N` = PDF-страница `N + 2` (две страницы передней обложки/титула спереди — проверено).
Для всего батча отрендерь страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 22 -l 31 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/01-articulo-determinado
   ```

1. **Прочитай разворот** через Read (Unidad 6 — PDF 22–23, 7 — 24–25,
   8 — 26–27, 9 — 28–29, 10 — 30–31).
2. **Создай `app/data/textbook/u<NN>.js`** — теория и 10–15 упражнений в
   формате эталона. Правила пересказывай **своими словами** (краткое
   испанское определение + развёрнутое русское пояснение). Упражнения —
   **оригинальные**, в той же педагогической форме (fill / choice / multi
   / match / + диктант через `audio`). Не копируй конкретные предложения
   из учебника — строй свои на типичной A1–A2 лексике.
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
   git add app/data/textbook/u06.js app/data/textbook/u07.js \
           app/data/textbook/u08.js app/data/textbook/u09.js \
           app/data/textbook/u10.js \
           app/textbook/u06.html app/textbook/u07.html \
           app/textbook/u08.html app/textbook/u09.html \
           app/textbook/u10.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 01: unidades 6–10 (определённый артикль и его расширения)

- u06: el, la, los, las — el artículo determinado
- u07: un perro / el perro — контраст определённого и неопределённого
- u08: el señor Alonso, la calle Mayor — артикль с именами собственными
- u09: el seis de enero — артикль во временных и количественных выражениях
- u10: tocar la guitarra — прочие случаи употребления

См. prompts/batch-01.md.
EOF
)"
   git tag -a units-006-010 -m "Batch 01 complete — units 6–10. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/01-articulo-determinado
   git push origin main batch/01-articulo-determinado units-006-010
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
