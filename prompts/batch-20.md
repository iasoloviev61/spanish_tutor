# Батч 20 — Unidades 101–105 (наречия времени, частоты, количества)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–100 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **101–105** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 101 | hoy, ayer, entonces, luego… | Adverbios de tiempo (1) | 210–211 |
| 102 | ya, todavía, aún | Adverbios de tiempo (2) | 212–213 |
| 103 | siempre, de vez en cuando, a veces… | Adverbios y expresiones de frecuencia | 214–215 |
| 104 | muy, mucho, bastante… | Adverbios de cantidad | 216–217 |
| 105 | muy, mucho, muchos, –ísimo… | Contraste entre formas de expresar grados de cualidad o cantidad | 218–219 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 212 -l 221 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/20-adverbios-tiempo-frecuencia
   ```

1. **Прочитай разворот** через Read (Unidad 101 — PDF 212–213, 102 — 214–215,
   103 — 216–217, 104 — 218–219, 105 — 220–221).
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
   git add app/data/textbook/u101.js app/data/textbook/u102.js \
           app/data/textbook/u103.js app/data/textbook/u104.js \
           app/data/textbook/u105.js \
           app/textbook/u101.html app/textbook/u102.html \
           app/textbook/u103.html app/textbook/u104.html \
           app/textbook/u105.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 20: unidades 101–105 (наречия времени, частоты, количества)

- u101: hoy, ayer, entonces, luego — adverbios de tiempo (1)
- u102: ya, todavía, aún — adverbios de tiempo (2)
- u103: siempre, de vez en cuando, a veces — adverbios de frecuencia
- u104: muy, mucho, bastante — adverbios de cantidad
- u105: muy, mucho, muchos, –ísimo — contraste de grados

См. prompts/batch-20.md.
EOF
)"
   git tag -a units-101-105 -m "Batch 20 complete — units 101–105. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/20-adverbios-tiempo-frecuencia
   git push origin main batch/20-adverbios-tiempo-frecuencia units-101-105
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
