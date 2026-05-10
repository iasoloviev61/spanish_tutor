# Текстовый батч A1-03 — дни 22–30 (Pretérito Perfecto, ir a, путешествия и магазины)

Скопируйте всё ниже целиком в новую сессию Claude Code (открытой в корне проекта).

---

Продолжаем фичу «учебные тексты для чтения A1». В проекте уже есть
`app/data/texts.js` с эталонными текстами на дни 1, 11, 21 и текстами
дней 2–20 из батчей A1-01 и A1-02. Структура объекта (id, level, day,
title, text, vocabulary, questions, grammar_notes), правила оформления
и кастильские словарные предпочтения описаны прямо в эталоне и в
`CLAUDE.md`. Прочитай `app/data/texts.js` целиком до начала работы —
особенно текст `a1-021` (он самый близкий эталон по уровню).

Сделай **дни 22–30** (9 текстов), дополняя массив `window.TEXTS`
в том же файле `app/data/texts.js`. Темы по дням:

| День | id        | Тема                                            |
| ---- | --------- | ----------------------------------------------- |
| 22   | a1-022    | Путешествие — выходные в Гранаде                |
| 23   | a1-023    | Магазин одежды — диалог с продавщицей           |
| 24   | a1-024    | Кафе/бар — заказ еды (диалог)                   |
| 25   | a1-025    | Отель — регистрация (диалог + описание номера)  |
| 26   | a1-026    | Супермаркет — список покупок                    |
| 27   | a1-027    | Спросить дорогу на улице (диалог)               |
| 28   | a1-028    | Поезд / самолёт — дорога куда-то                |
| 29   | a1-029    | Магазин сувениров — выбор и оплата              |
| 30   | a1-030    | Финал — последний день поездки, итог            |

## Правила прогрессии — блок C (дни 21–30)

- **Длина текста: 80–120 слов** (считать по `text.split(/\s+/)`).
- **Активно используем:**
  - **Pretérito Perfecto** (`he comido`, `hemos llegado`, `ha comprado`)
    как основное прошедшее в этом блоке.
  - **ir a + infinitivo** для ближайшего будущего (`voy a llamar`,
    `va a salir`).
  - **Простые придаточные** с `que`, `porque`, `cuando` (без `subjuntivo`).
- **Дополнительно допустимо:** всё из блоков A и B (`ser/estar`, `hay`,
  возвратные, прилагательные, `Presente`).
- **Запрещено:** `Pretérito Indefinido` (he comido, не comí; путаница
  perfecto/indefinido — тема дальнейшего курса), `Imperfecto`, `Futuro`
  morfológico (`comeré`), `Condicional`, `Subjuntivo`, `Imperativo`.
- **Диалоги:** оформлять тире `—` (em dash) для реплик. Простые
  обороты: `—¿Cuánto cuesta? —pregunto. —Dieciocho euros —responde ella.`
- **Vocabulary: 10–15 записей** на текст. Только новые/трудные слова.
  Не повторять то, что уже было в a1-001 … a1-021.
- **questions: ровно 3** с тремя вариантами, проверяющими понимание.
- **grammar_notes: 1–3** записи. В этом блоке ожидаются заметки про
  `Pretérito Perfecto`, `ir a + infinitivo`, простые придаточные.

## Правила контента (для всех батчей A1)

- **Кастильский испанский.** `vosotros`, `móvil`, `ordenador`, `zumo`,
  `coche`, `gafas`, `patata`, `mi mujer/mi marido`. Избегаем `coger` на A1
  (давать `tomar`, `comprar`, `subir a` по смыслу). В блоке C можно
  использовать слова `el billete` (билет), `la tarjeta`, `el bocadillo`,
  `el camarero`, `la habitación`, `el ascensor`.
- **Диакритика обязательна.** `á é í ó ú ñ ü ¿ ¡` — буква в букву.
- **Тексты живые:** маленькая сценка, диалог, конкретные испанские
  места и блюда (la Boquería, Granada, la Alhambra, paella, gazpacho,
  churros, jamón ibérico, queso manchego). Можно протягивать
  Carlos / Marta / Sofía из предыдущих текстов.
- **vocabulary[].word** для существительных — с артиклем.
- **vocabulary[].example** — фраза из текста или близкая к нему.

## Что нужно сделать

0. **Перед началом — заведи ветку батча** от свежего `main`
   (см. `GIT-WORKFLOW.md`):
   ```bash
   cd /Users/iasoloviev61/mydocs/language/spanish
   git checkout main && git pull --ff-only
   git checkout -b texts-a1/03-perfecto-viajes
   ```

1. **Прочитай `app/data/texts.js`** через Read — это эталон формата.
   Особое внимание тексту `a1-021` и его grammar_notes (Pretérito
   Perfecto, ir a + inf, придаточные).

2. **Открой `app/data/texts.js` через Edit** и допиши 9 новых объектов
   **после объекта `a1-021`**, в самом конце массива внутри
   `window.TEXTS.push( ... )`. Порядок в массиве: …, 20, 21, 22, …, 30.
   Не создавай новый `push(...)` и не меняй уже добавленные тексты.
   Якорь вставки: запятая и перенос строки после закрывающей `}` объекта `a1-021`,
   перед закрывающей `);` всего вызова `push`.

3. **Синтакс-чек** одной командой `node -e`:
   ```bash
   node -e "global.window={}; require('./app/data/texts.js'); \
     const t=window.TEXTS; console.log('total:', t.length); \
     t.forEach(x=>console.log(x.day, x.id, '|', \
       'vocab:', x.vocabulary.length, 'q:', x.questions.length, \
       'gn:', x.grammar_notes.length, '| words ~', x.text.split(/\s+/).length));"
   ```
   Должно быть `total: 30`, дни 1, 2, …, 30 в порядке возрастания.
   Для дней 22–30 — 80–120 слов, vocab 10–15, questions=3, grammar_notes 1–3.

4. **Финализируй git-историю** — стейдж только нужное, осмысленный
   коммит, аннотированный тег, fast-forward в `main`, пуш ветки и тега.
   Это финал A1-курса текстов — добавь дополнительный тег `texts-a1-complete-v1.0.0`.
   ```bash
   git add app/data/texts.js
   git commit -m "$(cat <<'EOF'
   texts-a1 batch 03: дни 22–30 (Pretérito Perfecto, ir a, путешествия)

   - a1-022: выходные в Гранаде
   - a1-023: магазин одежды (диалог)
   - a1-024: кафе — заказ
   - a1-025: отель — регистрация
   - a1-026: супермаркет — список покупок
   - a1-027: спросить дорогу
   - a1-028: дорога поездом / самолётом
   - a1-029: магазин сувениров
   - a1-030: финал — последний день поездки

   Все 30 текстов A1 готовы.

   См. prompts/texts-a1-batch-03.md.
   EOF
   )"
   git tag -a texts-a1-022-030 -m "Texts A1 batch 03 — days 22–30. Total V vocab / Q questions."
   git tag -a texts-a1-complete-v1.0.0 -m "Texts A1 complete — все 30 текстов."
   git checkout main
   git merge --ff-only texts-a1/03-perfecto-viajes
   git push origin main texts-a1/03-perfecto-viajes \
     texts-a1-022-030 texts-a1-complete-v1.0.0
   ```
   Подставь реальные V и Q (3 × 9 = 27) из синтакс-чека.

## Требования

- **Никаких промежуточных вопросов.** Решения по спорным местам бери сам,
  в духе уже сделанных текстов (a1-021 — самый близкий эталон по уровню).
- **Один батч = одна сессия.** В конце дай короткую сводку
  (`a1-NNN: W слов / V vocab`) и список изменённых файлов.
- **Не выдумывай новые поля.** Только: `id, level, day, title, text,
  vocabulary, questions, grammar_notes` — точно как в a1-021.
- **JS-файл, не JSON.** Запятые между объектами обязательны.
- **Это финальный батч A1-текстов.** После него все 30 текстов в `texts.js`.
