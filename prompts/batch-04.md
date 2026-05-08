# Батч 04 — Unidades 21–25 (indefinidos 2–4, comparación con nombres, числа 1)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–20 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **21–25** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 21 | uno, otro, cualquiera | Indefinidos (2) | 50–51 |
| 22 | mucho, poco, demasiado, suficiente… | Indefinidos (3) | 52–53 |
| 23 | alguien, algo, nadie, nada | Indefinidos (4) | 54–55 |
| 24 | más, menos, tanto como | Comparación con nombres | 56–57 |
| 25 | uno, dos, tres… | Números cardinales (1) | 58–59 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 52 -l 61 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/04-indefinidos-numeros
   ```

1. **Прочитай разворот** через Read (Unidad 21 — PDF 52–53, 22 — 54–55,
   23 — 56–57, 24 — 58–59, 25 — 60–61).
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
   git add app/data/textbook/u21.js app/data/textbook/u22.js \
           app/data/textbook/u23.js app/data/textbook/u24.js \
           app/data/textbook/u25.js \
           app/textbook/u21.html app/textbook/u22.html \
           app/textbook/u23.html app/textbook/u24.html \
           app/textbook/u25.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 04: unidades 21–25 (indefinidos 2–4, comparación con nombres, числа 1)

- u21: uno, otro, cualquiera — indefinidos (2)
- u22: mucho, poco, demasiado, suficiente — indefinidos (3)
- u23: alguien, algo, nadie, nada — indefinidos (4)
- u24: más, menos, tanto como — comparación con nombres
- u25: uno, dos, tres — números cardinales (1)

См. prompts/batch-04.md.
EOF
)"
   git tag -a units-021-025 -m "Batch 04 complete — units 21–25. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/04-indefinidos-numeros
   git push origin main batch/04-indefinidos-numeros units-021-025
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
