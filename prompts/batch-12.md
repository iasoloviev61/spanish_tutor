# Батч 12 — Unidades 61–65 (perfecto, контрасты прошедших, imperfecto)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–60 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **61–65** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 61 | He viajado mucho | Pretérito perfecto de indicativo (2) | 130–131 |
| 62 | he trabajado / trabajé | Contraste entre pretérito perfecto y pretérito indefinido | 132–133 |
| 63 | trabajaba, comía, vivía | Pretérito imperfecto | 134–135 |
| 64 | trabajé / trabajaba | Contraste entre pretérito indefinido y pretérito imperfecto | 136–137 |
| 65 | estaba trabajando / trabajé | estaba + gerundio y contraste con el pretérito indefinido | 138–139 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 132 -l 141 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/12-perfecto-imperfecto
   ```

1. **Прочитай разворот** через Read (Unidad 61 — PDF 132–133, 62 — 134–135,
   63 — 136–137, 64 — 138–139, 65 — 140–141).
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
   git add app/data/textbook/u61.js app/data/textbook/u62.js \
           app/data/textbook/u63.js app/data/textbook/u64.js \
           app/data/textbook/u65.js \
           app/textbook/u61.html app/textbook/u62.html \
           app/textbook/u63.html app/textbook/u64.html \
           app/textbook/u65.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 12: unidades 61–65 (perfecto, контрасты прошедших, imperfecto)

- u61: He viajado mucho — pretérito perfecto de indicativo (2)
- u62: he trabajado / trabajé — contraste perfecto y indefinido
- u63: trabajaba, comía, vivía — pretérito imperfecto
- u64: trabajé / trabajaba — contraste indefinido y imperfecto
- u65: estaba trabajando / trabajé — estaba + gerundio

См. prompts/batch-12.md.
EOF
)"
   git tag -a units-061-065 -m "Batch 12 complete — units 61–65. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/12-perfecto-imperfecto
   git push origin main batch/12-perfecto-imperfecto units-061-065
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
