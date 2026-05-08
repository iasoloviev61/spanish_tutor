# Батч 15 — Unidades 76–80 (императив нерегулярный, presente subjuntivo)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–75 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **76–80** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 76 | Pon la mesa | Imperativo: verbos irregulares (2) | 160–161 |
| 77 | lávate | Imperativo de verbos con se | 162–163 |
| 78 | dámelo, no me lo des | Imperativo con pronombres de complemento | 164–165 |
| 79 | trabaje, coma, viva | Presente de subjuntivo: verbos regulares | 166–167 |
| 80 | quiera, juegue… | Presente de subjuntivo: verbos irregulares (1) | 168–169 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 162 -l 171 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/15-imperativo-subjuntivo
   ```

1. **Прочитай разворот** через Read (Unidad 76 — PDF 162–163, 77 — 164–165,
   78 — 166–167, 79 — 168–169, 80 — 170–171).
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
   git add app/data/textbook/u76.js app/data/textbook/u77.js \
           app/data/textbook/u78.js app/data/textbook/u79.js \
           app/data/textbook/u80.js \
           app/textbook/u76.html app/textbook/u77.html \
           app/textbook/u78.html app/textbook/u79.html \
           app/textbook/u80.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 15: unidades 76–80 (императив нерегулярный, presente subjuntivo)

- u76: Pon la mesa — imperativo: verbos irregulares (2)
- u77: lávate — imperativo de verbos con se
- u78: dámelo, no me lo des — imperativo con pronombres de complemento
- u79: trabaje, coma, viva — presente de subjuntivo: verbos regulares
- u80: quiera, juegue — presente de subjuntivo: verbos irregulares (1)

См. prompts/batch-15.md.
EOF
)"
   git tag -a units-076-080 -m "Batch 15 complete — units 76–80. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/15-imperativo-subjuntivo
   git push origin main batch/15-imperativo-subjuntivo units-076-080
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
