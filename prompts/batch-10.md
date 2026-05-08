# Батч 10 — Unidades 51–55 (использование настоящего, возвратные, gustar)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–50 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **51–55** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 51 | Mañana voy al médico | Presente de indicativo: otros usos | 110–111 |
| 52 | Vivo en México desde 1998 | Presente para expresar períodos de tiempo | 112–113 |
| 53 | me levanto | Verbos con me, te, se… | 114–115 |
| 54 | me lavo / lavo | Contraste entre verbos con y sin me, te, se… | 116–117 |
| 55 | Me gusta la ópera | Verbos con me, te, le… | 118–119 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 112 -l 121 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/10-presente-uso-pronominales
   ```

1. **Прочитай разворот** через Read (Unidad 51 — PDF 112–113, 52 — 114–115,
   53 — 116–117, 54 — 118–119, 55 — 120–121).
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
   git add app/data/textbook/u51.js app/data/textbook/u52.js \
           app/data/textbook/u53.js app/data/textbook/u54.js \
           app/data/textbook/u55.js \
           app/textbook/u51.html app/textbook/u52.html \
           app/textbook/u53.html app/textbook/u54.html \
           app/textbook/u55.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 10: unidades 51–55 (использование настоящего, возвратные, gustar)

- u51: Mañana voy al médico — presente: otros usos
- u52: Vivo en México desde 1998 — presente para periodos de tiempo
- u53: me levanto — verbos con me, te, se
- u54: me lavo / lavo — contraste verbos con y sin se
- u55: Me gusta la ópera — verbos con me, te, le (gustar)

См. prompts/batch-10.md.
EOF
)"
   git tag -a units-051-055 -m "Batch 10 complete — units 51–55. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/10-presente-uso-pronominales
   git push origin main batch/10-presente-uso-pronominales units-051-055
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
