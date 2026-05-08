# Git workflow — spanish_tutor

Репозиторий: <https://github.com/iasoloviev61/spanish_tutor>.

Все 24 батча учебника представлены в виде feature-веток с осмысленными
коммитами и тегами. Это даёт «настоящую» историю и позволяет:

- сравнить, что именно добавил конкретный батч (`git diff units-005-baseline..units-006-010`);
- откатить плохой батч (`git revert` тега);
- посмотреть прогресс по тегам (`git tag -l 'units-*'`);
- запустить очередной батч от чистого `main` параллельно с предыдущим.

## Ветки

- **`main`** — стабильная, после каждого слитого батча.
- **`batch/NN-slug`** — рабочая ветка одного батча. Создаётся от `main`,
  живёт до слияния, после слияния остаётся в истории как след работы.
- Никаких rebase/force-push в `main`. В личных `batch/*` — на своё усмотрение
  до слияния.

## Теги

- **`units-AAA-BBB`** (zero-padded трёхзначные номера юнитов) ставится
  на коммит-результат батча. Аннотированный (`git tag -a`), сообщение
  включает количество упражнений/вопросов.
- **`units-001-005-baseline`** — первый коммит, состояние «есть
  Unidad 1–5» до начала автоматических батчей.
- **`textbook-complete-v1.0.0`** — финальный тег после батча 24.

## Жизненный цикл батча

```bash
# 1. от свежего main
git checkout main && git pull --ff-only

# 2. рабочая ветка
git checkout -b batch/01-articulo-determinado

# 3. ... (агент создаёт u06.js, u06.html, обновляет index.html и textbook.html, и т. д.) ...

# 4. стейджинг только нужного
git add app/data/textbook/u06.js app/data/textbook/u07.js \
        app/data/textbook/u08.js app/data/textbook/u09.js \
        app/data/textbook/u10.js \
        app/textbook/u06.html app/textbook/u07.html \
        app/textbook/u08.html app/textbook/u09.html \
        app/textbook/u10.html \
        app/textbook.html app/index.html

# 5. коммит
git commit -m "$(cat <<'EOF'
batch 01: unidades 6–10 (определённый артикль и его расширения)

- u06: el, la, los, las — el artículo determinado
- u07: un perro / el perro — контраст артиклей
- u08: el señor Alonso, la calle Mayor — артикль с именами собственными
- u09: el seis de enero — артикль во временных и количественных выражениях
- u10: tocar la guitarra — прочие случаи употребления

См. prompts/batch-01.md.
EOF
)"

# 6. тег
git tag -a units-006-010 -m "Batch 01 complete — units 6–10. <M> упражнений / <Q> вопросов."

# 7. слияние в main fast-forward + push
git checkout main
git merge --ff-only batch/01-articulo-determinado
git push origin main batch/01-articulo-determinado units-006-010
```

## Соответствие батч ↔ ветка ↔ тег

| Батч | Ветка | Тег | Юниты |
| --- | --- | --- | --- |
| 01 | `batch/01-articulo-determinado` | `units-006-010` | 6–10 |
| 02 | `batch/02-omision-demostrativos-adjetivos` | `units-011-015` | 11–15 |
| 03 | `batch/03-comparativo-superlativo-posesivos` | `units-016-020` | 16–20 |
| 04 | `batch/04-indefinidos-numeros` | `units-021-025` | 21–25 |
| 05 | `batch/05-numeros-relativos-interrogativos` | `units-026-030` | 26–30 |
| 06 | `batch/06-interrogativos-pronombres` | `units-031-035` | 31–35 |
| 07 | `batch/07-pronombres-complemento` | `units-036-040` | 36–40 |
| 08 | `batch/08-ser-estar-tener` | `units-041-045` | 41–45 |
| 09 | `batch/09-haber-presente` | `units-046-050` | 46–50 |
| 10 | `batch/10-presente-uso-pronominales` | `units-051-055` | 51–55 |
| 11 | `batch/11-gerundio-indefinido-perfecto` | `units-056-060` | 56–60 |
| 12 | `batch/12-perfecto-imperfecto` | `units-061-065` | 61–65 |
| 13 | `batch/13-pluscuamperfecto-futuro` | `units-066-070` | 66–70 |
| 14 | `batch/14-condicional-imperativo` | `units-071-075` | 71–75 |
| 15 | `batch/15-imperativo-subjuntivo` | `units-076-080` | 76–80 |
| 16 | `batch/16-subjuntivo-deseos` | `units-081-085` | 81–85 |
| 17 | `batch/17-subjuntivo-estilo-indirecto` | `units-086-090` | 86–90 |
| 18 | `batch/18-condicionales-infinitivo` | `units-091-095` | 91–95 |
| 19 | `batch/19-infinitivo-gerundio-participio` | `units-096-100` | 96–100 |
| 20 | `batch/20-adverbios-tiempo-frecuencia` | `units-101-105` | 101–105 |
| 21 | `batch/21-adverbios-preposiciones` | `units-106-110` | 106–110 |
| 22 | `batch/22-preposiciones-verbos` | `units-111-115` | 111–115 |
| 23 | `batch/23-conjunciones-oraciones` | `units-116-120` | 116–120 |
| 24 | `batch/24-impersonales-acentuacion-vos` | `units-121-126` | 121–126 |

После батча 24 — финальный тег:

```bash
git tag -a textbook-complete-v1.0.0 -m "Учебник полностью собран: 126 unidades."
git push origin textbook-complete-v1.0.0
```

## PDF и Git LFS

Файл `gramatica del uso del espanol.pdf` (~128 МБ) исключён через
`.gitignore`, потому что GitHub отбрасывает файлы > 100 МБ без LFS.

Если хочешь, чтобы PDF тоже жил в репозитории:

```bash
brew install git-lfs   # один раз на машину
git lfs install        # один раз на репозиторий

# раскомментируй строку в .gitattributes:
#   *.pdf filter=lfs diff=lfs merge=lfs -text

# убери PDF из .gitignore (удали строку с "gramatica del uso del espanol.pdf")
git add .gitattributes .gitignore "gramatica del uso del espanol.pdf"
git commit -m "lfs: track PDFs via Git LFS"
git push origin main
```

GitHub бесплатно даёт 1 ГБ LFS-хранилища и 1 ГБ/мес исходящего трафика —
для 128 МБ PDF этого с запасом.

## Что НЕ попадает в репозиторий

См. `.gitignore`. Кратко:

- `.DS_Store` (macOS-метаданные).
- `.claude/settings.local.json` (локальные разрешения Claude Code,
  пользовательские).
- `Полиглот. 16 уроков испанского языка. 2015/` (16 ГБ видеокурса).
- `gramatica del uso del espanol.pdf` (см. выше — опционально через LFS).
- IDE-файлы (`.idea/`, `.vscode/`), swap-файлы, временные.

## Конфигурация автора

Сейчас в `git config` стоит `isoloviev@sardinasystems.com`. Если хочешь
коммитить под личным `iasoloviev61@gmail.com` — выстави **локально для
этого репозитория**, не глобально:

```bash
git config user.email iasoloviev61@gmail.com
git config user.name 'Ivan Soloviev'   # или как удобно
```

## Удалённый репозиторий

```bash
git remote add origin https://github.com/iasoloviev61/spanish_tutor.git
git push -u origin main
git push origin --tags
```

После первого `push` ветки можно создавать прямо в GitHub UI или
из CLI; стандартный workflow в инструкциях батчей это уже учитывает.
