# Батч 08 — Unidades 41–45 (местоимения с предлогами, ser / estar / tener)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–40 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **41–45** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 41 | para mí, contigo… | Pronombres personales con preposiciones | 90–91 |
| 42 | soy, eres, es… | Presente de indicativo de ser | 92–93 |
| 43 | estoy, estás, está… | Presente de indicativo de estar | 94–95 |
| 44 | soy alegre / estoy alegre | Contraste entre ser y estar | 96–97 |
| 45 | tengo, tienes, tiene… | Presente de indicativo de tener | 98–99 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 92 -l 101 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/08-ser-estar-tener
   ```

1. **Прочитай разворот** через Read (Unidad 41 — PDF 92–93, 42 — 94–95,
   43 — 96–97, 44 — 98–99, 45 — 100–101).
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
   git add app/data/textbook/u41.js app/data/textbook/u42.js \
           app/data/textbook/u43.js app/data/textbook/u44.js \
           app/data/textbook/u45.js \
           app/textbook/u41.html app/textbook/u42.html \
           app/textbook/u43.html app/textbook/u44.html \
           app/textbook/u45.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 08: unidades 41–45 (местоимения с предлогами, ser / estar / tener)

- u41: para mí, contigo — pronombres con preposiciones
- u42: soy, eres, es — presente de ser
- u43: estoy, estás, está — presente de estar
- u44: soy alegre / estoy alegre — contraste ser y estar
- u45: tengo, tienes, tiene — presente de tener

См. prompts/batch-08.md.
EOF
)"
   git tag -a units-041-045 -m "Batch 08 complete — units 41–45. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/08-ser-estar-tener
   git push origin main batch/08-ser-estar-tener units-041-045
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
