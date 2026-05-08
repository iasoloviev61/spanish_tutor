# Промпты по батчам — учебник «Gramática del uso del español»

Каталог содержит **24 готовых промпта**, по одному на батч из 5 модулей
(последний — из 6, чтобы покрыть приложение «Otras cuestiones»). Каждый
файл — самодостаточный текст для **новой сессии Claude Code** в корне
проекта (`/Users/iasoloviev61/mydocs/language/spanish/`).

Каждый батч = **отдельная feature-ветка** в git с осмысленным коммитом
и аннотированным тегом. Конвенции — в `../GIT-WORKFLOW.md`.

## Как пользоваться

1. Открой новую сессию Claude Code в корне проекта.
2. Возьми следующий по порядку файл из таблицы ниже.
3. Скопируй всё содержимое в чат.
4. Промпт сам:
   - заведёт `batch/NN-slug` от свежего `main`;
   - сделает 5–6 модулей;
   - прогонит синтакс-чек;
   - оформит коммит, тег, fast-forward в `main` и пуш.
5. Закрой сессию. Следующий батч в новой сессии.

## Чек-лист после каждого батча

- [ ] Созданы 5 (или 6) файлов `app/data/textbook/u<NN>.js` (синтаксис ок).
- [ ] Созданы соответствующие `app/textbook/u<NN>.html`.
- [ ] `app/textbook.html`: добавлены `<script>` и записи в массиве `ids`.
- [ ] `app/index.html`: добавлены `<script>` и записи в массиве `ids`.
- [ ] Открыли `app/index.html` в браузере: счётчик «N модулей» вырос
      на 5/6, новые карточки открываются и проходимы.
- [ ] Прогресс пишется в IndexedDB.
- [ ] В git: новая ветка `batch/NN-slug`, аннотированный тег
      `units-AAA-BBB`, fast-forward в `main`, всё запушено.

## Расписание батчей

| № | Файл | Unidades | Ветка | Тег | Тема |
| --- | --- | --- | --- | --- | --- |
| 01 | [batch-01.md](batch-01.md) | 6–10 | `batch/01-articulo-determinado` | `units-006-010` | Определённый артикль |
| 02 | [batch-02.md](batch-02.md) | 11–15 | `batch/02-omision-demostrativos-adjetivos` | `units-011-015` | Опущение, демонстративы, прилагательные |
| 03 | [batch-03.md](batch-03.md) | 16–20 | `batch/03-comparativo-superlativo-posesivos` | `units-016-020` | Сравнение, посессивы, indefinidos (1) |
| 04 | [batch-04.md](batch-04.md) | 21–25 | `batch/04-indefinidos-numeros` | `units-021-025` | Indefinidos (2–4), числа (1) |
| 05 | [batch-05.md](batch-05.md) | 26–30 | `batch/05-numeros-relativos-interrogativos` | `units-026-030` | Числа, relativos, interrogativos (1) |
| 06 | [batch-06.md](batch-06.md) | 31–35 | `batch/06-interrogativos-pronombres` | `units-031-035` | Вопросительные/восклицательные, личные местоимения |
| 07 | [batch-07.md](batch-07.md) | 36–40 | `batch/07-pronombres-complemento` | `units-036-040` | Местоимения-дополнения, рефлексивные |
| 08 | [batch-08.md](batch-08.md) | 41–45 | `batch/08-ser-estar-tener` | `units-041-045` | Местоимения с предлогами, ser/estar/tener |
| 09 | [batch-09.md](batch-09.md) | 46–50 | `batch/09-haber-presente` | `units-046-050` | haber, presente regular и irregular |
| 10 | [batch-10.md](batch-10.md) | 51–55 | `batch/10-presente-uso-pronominales` | `units-051-055` | Использование настоящего, возвратные, gustar |
| 11 | [batch-11.md](batch-11.md) | 56–60 | `batch/11-gerundio-indefinido-perfecto` | `units-056-060` | estar+gerundio, indefinido, perfecto (1) |
| 12 | [batch-12.md](batch-12.md) | 61–65 | `batch/12-perfecto-imperfecto` | `units-061-065` | Контрасты прошедших времён |
| 13 | [batch-13.md](batch-13.md) | 66–70 | `batch/13-pluscuamperfecto-futuro` | `units-066-070` | pluscuamperfecto, futuro, ir a |
| 14 | [batch-14.md](batch-14.md) | 71–75 | `batch/14-condicional-imperativo` | `units-071-075` | Condicional, imperativo (regulares) |
| 15 | [batch-15.md](batch-15.md) | 76–80 | `batch/15-imperativo-subjuntivo` | `units-076-080` | Imperativo (irregulares), presente subjuntivo |
| 16 | [batch-16.md](batch-16.md) | 81–85 | `batch/16-subjuntivo-deseos` | `units-081-085` | Subjuntivo, deseos, probabilidad |
| 17 | [batch-17.md](batch-17.md) | 86–90 | `batch/17-subjuntivo-estilo-indirecto` | `units-086-090` | Subjuntivo (продолж.), estilo indirecto |
| 18 | [batch-18.md](batch-18.md) | 91–95 | `batch/18-condicionales-infinitivo` | `units-091-095` | Условные, инфинитив (1–2) |
| 19 | [batch-19.md](batch-19.md) | 96–100 | `batch/19-infinitivo-gerundio-participio` | `units-096-100` | Инфинитив (3), gerundio, participio, prep. места |
| 20 | [batch-20.md](batch-20.md) | 101–105 | `batch/20-adverbios-tiempo-frecuencia` | `units-101-105` | Наречия времени, частоты, количества |
| 21 | [batch-21.md](batch-21.md) | 106–110 | `batch/21-adverbios-preposiciones` | `units-106-110` | Adverbios modo/comp/neg, preposiciones (1) |
| 22 | [batch-22.md](batch-22.md) | 111–115 | `batch/22-preposiciones-verbos` | `units-111-115` | Preposiciones (2–5), verbos con prep. |
| 23 | [batch-23.md](batch-23.md) | 116–120 | `batch/23-conjunciones-oraciones` | `units-116-120` | Союзы, целевые/временные/причинные/уступит. |
| 24 | [batch-24.md](batch-24.md) | 121–126 | `batch/24-impersonales-acentuacion-vos` | `units-121-126` + `textbook-complete-v1.0.0` | Финал: consecutivas, impersonales, acentuación, vos |

## Соответствие страниц

- Книжная страница `N` = PDF-страница `N + 2` (две страницы передней
  обложки/титула спереди — проверено на Unidad 3 = book p. 14 = PDF p. 16).
- Каждая Unidad занимает **разворот**: чётная страница — теория,
  нечётная — упражнения. Для Unidad `K` это книжные страницы
  `(2K+8) – (2K+9)`, т. е. PDF-страницы `(2K+10) – (2K+11)`.
- Для батча `A–B` достаточно одного `pdftoppm -f (2A+10) -l (2B+11)`.

## Если что-то идёт не так

- **Контекст распух.** Закрой сессию, открой новую с тем же файлом-промптом.
- **Сравнение ответа в упражнении не пускает «правильный».** Чаще всего
  пунктуация — добавь обе формы: `correct: ['…', '…']`.
- **Не работает SpeechSynthesis.** На macOS проверь, что в системе
  установлен испанский голос (Settings → Accessibility → Spoken Content).
- **`git push` отвергнут (non-fast-forward).** Кто-то ещё писал в `main`.
  `git pull --rebase origin main`, потом снова `git push`.
- **Случайно начал работу не в той ветке.** `git stash`, `git checkout main`,
  `git checkout -b batch/NN-slug`, `git stash pop`.

См. также `../BATCH-PROMPT.md` (исходный шаблон, на основе которого
сгенерированы эти промпты) и `../GIT-WORKFLOW.md` (полное описание
git-конвенций).
