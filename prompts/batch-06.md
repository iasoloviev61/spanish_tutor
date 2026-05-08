# Батч 06 — Unidades 31–35 (interrogativos 2–3, exclamativos, личные местоимения)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–30 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **31–35** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 31 | ¿cuál?, ¿qué?… | Interrogativos (2) | 70–71 |
| 32 | ¿cuándo?, ¿dónde?… | Interrogativos (3) | 72–73 |
| 33 | ¡qué!, ¡cuánto!, ¡cómo!… | Exclamativos | 74–75 |
| 34 | yo, tú, él… | Pronombres personales de sujeto | 76–77 |
| 35 | Te amo | Pronombres personales de complemento directo | 78–79 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 72 -l 81 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/06-interrogativos-pronombres
   ```

1. **Прочитай разворот** через Read (Unidad 31 — PDF 72–73, 32 — 74–75,
   33 — 76–77, 34 — 78–79, 35 — 80–81).
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
   git add app/data/textbook/u31.js app/data/textbook/u32.js \
           app/data/textbook/u33.js app/data/textbook/u34.js \
           app/data/textbook/u35.js \
           app/textbook/u31.html app/textbook/u32.html \
           app/textbook/u33.html app/textbook/u34.html \
           app/textbook/u35.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 06: unidades 31–35 (interrogativos 2–3, exclamativos, личные местоимения)

- u31: ¿cuál?, ¿qué? — interrogativos (2)
- u32: ¿cuándo?, ¿dónde? — interrogativos (3)
- u33: ¡qué!, ¡cuánto!, ¡cómo! — exclamativos
- u34: yo, tú, él — pronombres personales de sujeto
- u35: Te amo — pronombres personales de complemento directo

См. prompts/batch-06.md.
EOF
)"
   git tag -a units-031-035 -m "Batch 06 complete — units 31–35. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/06-interrogativos-pronombres
   git push origin main batch/06-interrogativos-pronombres units-031-035
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
