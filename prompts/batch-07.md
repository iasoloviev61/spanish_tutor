# Батч 07 — Unidades 36–40 (местоимения-дополнения, рефлексивные)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем учебник испанского. В проекте уже сделаны Unidad 1–35 — формат
не менялся, эталоны те же: `app/data/textbook/u01.js` (полный пример со всеми
типами упражнений) и `app/data/textbook/u05.js` (с `atencion` и двумя
сравнительными таблицами). Формат данных и правила оформления описаны в
`app/PROMPT-textbook.md` и `CLAUDE.md`.

Сделай Unidad **36–40** по этим темам:

| Unidad | Заголовок-пример | Тема | Книжные стр. |
| --- | --- | --- | --- |
| 36 | Me han regalado un reloj | Pronombres personales de complemento indirecto | 80–81 |
| 37 | Se lo he dado. Te lo he dado | Pronombres de complemento indirecto y directo | 82–83 |
| 38 | lo / la / le | Confusión entre pronombres personales de complemento | 84–85 |
| 39 | ámame, dámelo | Pronombres de complemento con el imperativo, el infinitivo y el gerundio | 86–87 |
| 40 | me ducho, nos queremos | Pronombres reflexivos y con valor recíproco | 88–89 |

Книжная страница `N` = PDF-страница `N + 2`. Для всего батча отрендерь
страницы **одной командой**:

```bash
mkdir -p /tmp/gram_pages && pdftoppm -r 110 -f 82 -l 91 -jpeg \
  "gramatica del uso del espanol.pdf" /tmp/gram_pages/p
```

Что нужно сделать для каждого модуля:

0. **Перед началом — заведи ветку батча** от свежего `main` (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b batch/07-pronombres-complemento
   ```

1. **Прочитай разворот** через Read (Unidad 36 — PDF 82–83, 37 — 84–85,
   38 — 86–87, 39 — 88–89, 40 — 90–91).
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
   git add app/data/textbook/u36.js app/data/textbook/u37.js \
           app/data/textbook/u38.js app/data/textbook/u39.js \
           app/data/textbook/u40.js \
           app/textbook/u36.html app/textbook/u37.html \
           app/textbook/u38.html app/textbook/u39.html \
           app/textbook/u40.html \
           app/textbook.html app/index.html
   git commit -m "$(cat <<'EOF'
batch 07: unidades 36–40 (местоимения-дополнения, рефлексивные)

- u36: Me han regalado un reloj — pronombres de complemento indirecto
- u37: Se lo he dado — pronombres CI и CD вместе
- u38: lo / la / le — confusión entre pronombres
- u39: ámame, dámelo — pronombres con imperativo, infinitivo y gerundio
- u40: me ducho, nos queremos — pronombres reflexivos y recíprocos

См. prompts/batch-07.md.
EOF
)"
   git tag -a units-036-040 -m "Batch 07 complete — units 36–40. M упражнений / Q вопросов."
   git checkout main
   git merge --ff-only batch/07-pronombres-complemento
   git push origin main batch/07-pronombres-complemento units-036-040
   ```

Требования:

- **Никаких промежуточных вопросов**, кроме совсем критичных. Решения
  по спорным местам бери сам, в духе уже сделанных модулей.
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`u<NN>: M упражнений / Q вопросов`) и список изменённых/созданных файлов.
- **PDF — сканированный, без текста.** Извлекать только через
  `pdftoppm` → JPEG → Read.
- **Не вытягивай разом весь учебник.** Только нужные 10 страниц.
