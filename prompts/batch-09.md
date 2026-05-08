# Батч 09 — Unidades 46–50 (haber, presente regular и irregular)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–45 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **46–50** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 46 | Hay un vaso en la mesa | Presente de indicativo de haber impersonal | 100–101 |
| 47 | Hay un cine. Está en la calle Mayor | Contraste entre haber y estar | 102–103 |
| 48 | trabajo, como, vivo… | Presente de indicativo: verbos regulares | 104–105 |
| 49 | quiero, mido, sueño… | Presente de indicativo: verbos irregulares (1) | 106–107 |
| 50 | voy, hago, conozco… | Presente de indicativo: verbos irregulares (2) | 108–109 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 102 -l 111 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/09-haber-presente
   ```

1. **Прочитай разворот** через Read (Unidad 46 — PDF 102–103, 47 — 104–105,
   48 — 106–107, 49 — 108–109, 50 — 110–111).
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
   git add app/data/textbook/u46.js app/data/textbook/u47.js \
           app/data/textbook/u48.js app/data/textbook/u49.js \
           app/data/textbook/u50.js \
           app/textbook/u46.html app/textbook/u47.html \
           app/textbook/u48.html app/textbook/u49.html \
           app/textbook/u50.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 09: unidades 46–50 (haber, presente regular и irregular)

- u46: Hay un vaso en la mesa — haber impersonal
- u47: Hay un cine. Está en la calle Mayor — contraste haber y estar
- u48: trabajo, como, vivo — presente de indicativo: verbos regulares
- u49: quiero, mido, sueño — presente de indicativo: verbos irregulares (1)
- u50: voy, hago, conozco — presente de indicativo: verbos irregulares (2)

См. prompts/batch-09.md.
EOF
)"
   git tag -a units-046-050 -m "Batch 09 complete — units 46–50. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/09-haber-presente
   git push origin main batch/09-haber-presente units-046-050
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
