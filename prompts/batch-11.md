# Батч 11 — Unidades 56–60 (estar + gerundio, indefinido, perfecto 1)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–55 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **56–60** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 56 | Estoy viendo las noticias | Presente de estar + gerundio | 120–121 |
| 57 | hago / estoy haciendo | Contraste entre presente de indicativo y estar + gerundio | 122–123 |
| 58 | trabajé, comí, viví | Pretérito indefinido: verbos regulares | 124–125 |
| 59 | durmió, leyó, hizo… | Pretérito indefinido: verbos irregulares | 126–127 |
| 60 | he trabajado | Pretérito perfecto de indicativo (1) | 128–129 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 122 -l 131 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/11-gerundio-indefinido-perfecto
   ```

1. **Прочитай разворот** через Read (Unidad 56 — PDF 122–123, 57 — 124–125,
   58 — 126–127, 59 — 128–129, 60 — 130–131).
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
   git add app/data/textbook/u56.js app/data/textbook/u57.js \
           app/data/textbook/u58.js app/data/textbook/u59.js \
           app/data/textbook/u60.js \
           app/textbook/u56.html app/textbook/u57.html \
           app/textbook/u58.html app/textbook/u59.html \
           app/textbook/u60.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 11: unidades 56–60 (estar + gerundio, indefinido, perfecto 1)

- u56: Estoy viendo las noticias — presente de estar + gerundio
- u57: hago / estoy haciendo — contraste presente vs estar + gerundio
- u58: trabajé, comí, viví — pretérito indefinido: verbos regulares
- u59: durmió, leyó, hizo — pretérito indefinido: verbos irregulares
- u60: he trabajado — pretérito perfecto de indicativo (1)

См. prompts/batch-11.md.
EOF
)"
   git tag -a units-056-060 -m "Batch 11 complete — units 56–60. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/11-gerundio-indefinido-perfecto
   git push origin main batch/11-gerundio-indefinido-perfecto units-056-060
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
