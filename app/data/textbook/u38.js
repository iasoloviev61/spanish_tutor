// ============================================================
// Unidad 38 — Confusión entre pronombres personales de complemento
// lo / la / le.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u38 = {
  id: 'u38',
  number: 38,
  title: { es: 'lo / la / le', topic: 'Confusión entre pronombres personales de complemento' },
  topicRu: 'Когда «его/её/Вас» — это lo/la, а когда — le',

  theory: [
    {
      type: 'rule',
      es: 'Para refresco rápido: <em>lo, la, los, las</em> son pronombres de <strong>complemento directo</strong> (CD); <em>le, les</em> — de <strong>complemento indirecto</strong> (CI). El verbo determina cuál pedir.',
      ru: 'Кратко: <em>lo / la / los / las</em> — для прямого дополнения («его, её, их»), <em>le / les</em> — для косвенного («ему, ей, им», «Вам»). Какой формы требует глагол — это и решает.',
      examples: [
        { es: '¿Conoces a Marta? — Sí, <strong>la</strong> conozco. (CD)', ru: '«Знать кого?» → CD: <em>la</em>.' },
        { es: '¿Has hablado con Marta? — Sí, <strong>le</strong> he escrito. (CI)', ru: '«Писать кому?» → CI: <em>le</em>.' },
        { es: 'A Elena <strong>le</strong> duele la cabeza. (CI)', ru: '«Болит у кого?» → CI.' },
      ],
    },
    {
      type: 'heading',
      text: 'CD: lo / la / los / las — для людей, животных и вещей',
    },
    {
      type: 'rule',
      es: '<em>Lo, la, los, las</em> son los pronombres CD habituales — sirven igual para <strong>personas</strong>, animales y cosas, y se eligen por el <em>género y número</em> del objeto: <em>lo, los</em> = masculino; <em>la, las</em> = femenino.',
      ru: 'Стандартные CD-местоимения <em>lo / la / los / las</em> нормально используются и для людей: <em>lo</em> — м. р., <em>la</em> — ж. р. По сути, всё то же, что в Unidad 35.',
      examples: [
        { es: '¿Me dejas el diccionario? — No puedo, <strong>lo</strong> necesito.', ru: 'Книга-словарь (м. р., вещь) → <em>lo</em>.' },
        { es: '¿Me dejas la pluma? — No puedo, <strong>la</strong> necesito.', ru: 'Ручка (ж. р., вещь) → <em>la</em>.' },
        { es: '¿Amas a Juan? — Sí, <strong>lo</strong> amo.', ru: 'Хуан (м. р., человек) → <em>lo</em>.' },
        { es: '¿Quieres a tus padres? — Sí, <strong>los</strong> quiero.', ru: 'Родители (м. р. мн., люди) → <em>los</em>.' },
      ],
    },
    {
      type: 'atencion',
      es: 'PERO: algunos hispanohablantes (sobre todo en España) usan <strong>le, les</strong> en lugar de <em>lo, los</em> para referirse a <strong>personas masculinas</strong> — el llamado «leísmo». Es admitido por la Academia, pero solo para personas y solo en masculino. <em>¿Amas a Juan? — Sí, <strong>le</strong> amo.</em>',
      ru: 'Реальная разговорная норма (особенно в Испании): для мужчин-людей часто говорят <em>le / les</em> вместо <em>lo / los</em>. Это явление называется <em>leísmo</em>. RAE его допускает, но <strong>только</strong> для людей мужского пола. На <em>la / las</em> (для женщин-людей) и на вещи это правило <strong>не распространяется</strong>: <em>* le veo a María</em> — ошибка, нужно <em>la veo</em>.',
    },
    {
      type: 'heading',
      text: 'CI: le, les — для людей',
    },
    {
      type: 'rule',
      es: '<em>Le, les</em> se usan como CI para referirse a <strong>personas</strong> (hombres o mujeres) — sin distinción de género.',
      ru: 'Косвенное дополнение для людей выглядит одинаково для мужчин и женщин: <em>le</em> (одному человеку), <em>les</em> (нескольким). Род уточняется через <em>a él / a ella / a ellas…</em>',
      examples: [
        { es: '¿Qué <strong>le</strong> has regalado a Pedro? — <strong>Le</strong> he regalado una cartera.', ru: 'Pedro — мужчина → CI <em>le</em>.' },
        { es: '¿Y a María? — <strong>Le</strong> he regalado unos pendientes.', ru: 'María — женщина → тоже <em>le</em>, потому что CI.' },
        { es: 'A Elena <strong>le</strong> duele la cabeza.', ru: 'У Елены болит голова → CI.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Cuando hay <strong>dos pronombres</strong> (CI + CD), <em>le / les</em> se cambia por <strong>se</strong>. <em><s>Le</s> lo he dado.</em> → <em>Se lo he dado.</em> (▶ Unidad 37.)',
      ru: 'И не забываем: рядом с <em>lo / la / los / las</em> местоимение <em>le / les</em> превращается в <em>se</em>. См. Unidad 37.',
    },
    {
      type: 'heading',
      text: 'Сравнение',
    },
    {
      type: 'table',
      caption: 'lo / la / le — что когда',
      columns: ['Кого / что заменяем', 'CD (что? кого?)', 'CI (кому?)'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['предмет м. р.',          '<em>lo</em> (No <em>lo</em> tengo.)',                 '— (предмет редко CI)'],
        ['предмет ж. р.',          '<em>la</em> (No <em>la</em> tengo.)',                 '—'],
        ['мужчина',                '<em>lo</em> (CD) / <em>le</em> (leísmo, доп. норма)', '<em>le</em>'],
        ['женщина',                '<em>la</em> (CD)',                                     '<em>le</em>'],
        ['мужчины (мн.)',          '<em>los</em> / <em>les</em> (leísmo)',                  '<em>les</em>'],
        ['женщины (мн.)',           '<em>las</em>',                                          '<em>les</em>'],
      ],
    },
    {
      type: 'heading',
      text: 'Особый случай: lo «это»',
    },
    {
      type: 'rule',
      es: '<em>Lo</em> se usa también como CD para referirse a una <strong>información</strong> entera (un hecho o una afirmación dicha antes), traducible por «это».',
      ru: 'Отдельная функция <em>lo</em> — заменять собой целую <em>мысль/информацию</em>, которую только что упомянули. По-русски это «это»: «Я знаю это», «Я в это не верю».',
      examples: [
        { es: '¿Le has dicho a Juan que me caso? — Sí, <strong>se lo</strong> he dicho, pero no <strong>se lo</strong> cree.', ru: '«это» (= что я женюсь) → <em>lo</em>.' },
        { es: '¿Sabes que Chávez está enfermo? — Sí, <strong>lo</strong> sé.', ru: '«Я это знаю».' },
        { es: 'Felipe no es argentino. — Claro que <strong>lo</strong> es.', ru: '«Конечно, он это (= argentino) есть».' },
      ],
    },
  ],

  exercises: [
    {
      id: '38.1',
      title: 'Обведите верную форму',
      type: 'choice',
      instructions: 'Определите, требуется ли CD или CI, и выберите правильное местоимение. Ориентир: «знать кого?», «видеть что?» — CD (<em>lo/la/los/las</em>); «звонить кому?», «дарить кому?», «болит у кого?» — CI (<em>le/les</em>).',
      questions: [
        { id: 'q1',  prompt: '¿Quieres este libro? — No, no ___ quiero. Gracias.',          options: ['le', 'lo'], correct: 'lo' },
        { id: 'q2',  prompt: '¿Me dejas el lápiz? — No puedo, ___ necesito.',                 options: ['le', 'lo'], correct: 'lo' },
        { id: 'q3',  prompt: '¿Quieres a Ana? — Sí, ___ quiero.',                              options: ['la', 'le'], correct: 'la', explanation: 'Женщина-человек, CD → <em>la</em>. <em>le quiero</em> — отступление от нормы.' },
        { id: 'q4',  prompt: '¿Has visto usted mis gafas? — No, no ___ he visto.',              options: ['las', 'les'], correct: 'las', explanation: 'Очки (вещь, ж. р. мн.) → CD <em>las</em>.' },
        { id: 'q5',  prompt: 'Inés, ___ llaman por teléfono. (= Инес, тебе звонят)',             options: ['la', 'le'], correct: 'le', explanation: '«Звонить кому?» → CI.' },
        { id: 'q6',  prompt: '¿Quiere ver a Andrés? — No, no quiero ___.',                        options: ['verlo', 'verle'], correct: 'verlo', explanation: 'CD к мужчине-человеку — <em>lo</em> (или, по leísmo-норме, <em>le</em>; обе формы возможны, но <em>lo</em> — основная).' },
        { id: 'q7',  prompt: '___ he prestado cien euros a Ivana.',                                 options: ['Le', 'La'], correct: 'Le', explanation: '«Дать в долг кому?» → CI.' },
        { id: 'q8',  prompt: 'A Pili ___ duelen las muelas.',                                          options: ['le', 'la'], correct: 'le', explanation: '«Болят у кого?» → CI.' },
        { id: 'q9',  prompt: '¿Qué ___ pasa a Elsa? — ___ duele la cabeza.',                         options: ['le', 'la'], correct: 'le', explanation: 'И «случается с кем?», и «болит у кого?» — CI.' },
        { id: 'q10', prompt: 'Ayer ___ vi en el parque, Elisa. (= Эльса, я тебя видел)',              options: ['la', 'le'], correct: 'la', explanation: 'CD к женщине → <em>la</em>.' },
      ],
    },

    {
      id: '38.2',
      title: 'Подставьте lo / la / los / las / le / les / se',
      type: 'fill',
      instructions: 'Допишите подходящее местоимение. Помните: рядом с <em>lo/la/…</em> местоимение CI превращается в <em>se</em>.',
      questions: [
        { id: 'q1', prompt: '¿Has visto a Juana? — Sí, ___ he visto.',                       correct: 'la' },
        { id: 'q2', prompt: '___ he regalado unos bombones a Sarita.',                         correct: 'Le' },
        { id: 'q3', prompt: '¿Has llamado a tu padre, Héctor? — Sí, ___ he llamado.',           correct: ['lo', 'le'], explanation: '«Позвонил кому?» — это CI: <em>le he llamado</em>. Но в Испании очень часто говорят <em>lo he llamado</em>; обе формы зачитываются.' },
        { id: 'q4', prompt: '¿Qué ___ has dicho a la profesora? (= ей)',                          correct: 'le' },
        { id: 'q5', prompt: '¿___ has regalado tus discos a Enrique? — Sí, ___ he regalado.',     correct: 'Le' },
        { id: 'q6', prompt: '¿Has visto a Concha? — No, hoy no ___ he visto.',                      correct: 'la' },
        { id: 'q7', prompt: 'A Pili ___ duelen las muelas.',                                          correct: 'le' },
        { id: 'q8', prompt: '¿Qué ___ has comprado a tus padres? — A mi padre ___ he comprado un libro y a mi madre ___ he comprado un pañuelo.', correct: 'le' },
      ],
    },

    {
      id: '38.3',
      title: 'Дополните каждый пробел',
      type: 'fill',
      instructions: 'Нужное местоимение в каждом пропуске. Иногда повторяется один и тот же.',
      questions: [
        { id: 'q1', prompt: '¿___ has dicho a Juan que necesito el coche? — Sí, ___ he dicho. (ему это)',  correct: 'Le' },
        { id: 'q2', prompt: 'No ___ he dicho, pero ___ he ofrecido ayuda a Teresa. (ей)',                    correct: 'le', explanation: 'Оба пропуска — CI к Teresa: <em>le</em>.' },
        { id: 'q3', prompt: '¿De verdad que Ana es escritora? — Claro que ___ es, pero no ___ sabe nadie.',    correct: 'lo', explanation: '«Это» (= ser escritora) → <em>lo</em>; «знать это» → тоже <em>lo</em>.' },
        { id: 'q4', prompt: '¿Sabes que me voy a Colombia? — No, no ___ sabía. (этого)',                       correct: 'lo' },
        { id: 'q5', prompt: 'Juan y Lola se han casado. — Ya ___ sabía. (это)',                                  correct: 'lo' },
        { id: 'q6', prompt: 'Se ha muerto Momo. — ¡Cuánto ___ siento! (это)',                                     correct: 'lo' },
        { id: 'q7', prompt: '¿Es verdad que Ángela tiene mucho dinero? — ___ es, pero no ___ parece. (= она такая, но это не похоже)', correct: 'Lo' },
      ],
    },

    {
      id: '38.4',
      title: 'CD или CI — определите по глаголу',
      type: 'choice',
      instructions: 'У какого пропуска требуется CD (lo/la/los/las), а у какого — CI (le/les)?',
      questions: [
        { id: 'q1', prompt: 'Ya ___ veo. (видеть что? кого?)',           options: ['CD: lo/la/los/las', 'CI: le/les'], correct: 'CD: lo/la/los/las' },
        { id: 'q2', prompt: 'Mañana ___ escribo. (писать кому?)',         options: ['CD: lo/la/los/las', 'CI: le/les'], correct: 'CI: le/les' },
        { id: 'q3', prompt: 'A mí ___ encanta el jazz. (нравиться кому?)', options: ['CD: lo/la/los/las', 'CI: le/les'], correct: 'CI: le/les' },
        { id: 'q4', prompt: 'No ___ entiendo. (понимать что? кого?)',       options: ['CD: lo/la/los/las', 'CI: le/les'], correct: 'CD: lo/la/los/las' },
        { id: 'q5', prompt: '___ duele la espalda a mi madre. (болит у кого?)', options: ['CD: lo/la/los/las', 'CI: le/les'], correct: 'CI: le/les' },
        { id: 'q6', prompt: 'No ___ recuerdo. (помнить что?)',                   options: ['CD: lo/la/los/las', 'CI: le/les'], correct: 'CD: lo/la/los/las' },
        { id: 'q7', prompt: '¿Qué ___ pasa? (происходить с кем?)',              options: ['CD: lo/la/los/las', 'CI: le/les'], correct: 'CI: le/les' },
        { id: 'q8', prompt: '___ buscan por todas partes. (искать кого?)',       options: ['CD: lo/la/los/las', 'CI: le/les'], correct: 'CD: lo/la/los/las' },
      ],
    },

    {
      id: '38.5',
      title: 'lo вместо целого высказывания',
      type: 'fill',
      instructions: 'Замените подчёркнутую часть на <em>lo</em>. Образец: <em>Sé <u>que estás cansado</u></em> → <em>Lo sé.</em>',
      questions: [
        { id: 'q1', prompt: 'Sé <u>que tienes razón</u>. →',                      correct: ['Lo sé.', 'Lo sé'] },
        { id: 'q2', prompt: 'No creo <u>que sea verdad</u>. →',                    correct: ['No lo creo.', 'No lo creo'] },
        { id: 'q3', prompt: 'Te dije <u>que no era buena idea</u>. →',              correct: ['Te lo dije.', 'Te lo dije'] },
        { id: 'q4', prompt: 'Siento mucho <u>tu pérdida</u>. →',                     correct: ['Lo siento mucho.', 'Lo siento mucho'] },
        { id: 'q5', prompt: 'Sospecho <u>que han mentido</u>. →',                     correct: ['Lo sospecho.', 'Lo sospecho'] },
      ],
    },

    {
      id: '38.6',
      title: 'Какие фразы корректны',
      type: 'multi',
      instructions: 'Отметьте все фразы, которые соответствуют норме (с CD <em>lo/la</em> для людей и CI <em>le</em> для адресата).',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'A María la veo todos los días.',
            'A María le veo todos los días.',
            'A Carlos lo veo todos los días.',
            'A Carlos le doy clase.',
            'A Carlos lo doy clase.',
            'A las niñas las saludo.',
            'A las niñas les saludo.',
            'A Pedro le duele la cabeza.',
            'A Pedro lo duele la cabeza.',
          ],
          correct: [
            'A María la veo todos los días.',
            'A Carlos lo veo todos los días.',
            'A Carlos le doy clase.',
            'A las niñas las saludo.',
            'A Pedro le duele la cabeza.',
          ],
          explanation: '«Видеть кого?» — CD: <em>la / lo / las</em>. «Преподавать кому?», «болеть у кого?» — CI: <em>le</em>. <em>le</em> для женщины-CD (<em>le veo a María</em>) — нестандартный «laísmo/leísmo».',
        },
      ],
    },

    {
      id: '38.7',
      title: 'Перепишите без ошибки',
      type: 'fill',
      instructions: 'Перепишите фразу со стандартным местоимением.',
      questions: [
        { id: 'q1', prompt: '*Le veo a María todos los días. →',                correct: ['La veo a María todos los días.', 'La veo a María todos los días', 'A María la veo todos los días.', 'A María la veo todos los días'] },
        { id: 'q2', prompt: '*La he dado un libro a Marta. →',                    correct: ['Le he dado un libro a Marta.', 'Le he dado un libro a Marta', 'A Marta le he dado un libro.', 'A Marta le he dado un libro'] },
        { id: 'q3', prompt: '*Las he comprado flores a las chicas. →',             correct: ['Les he comprado flores a las chicas.', 'Les he comprado flores a las chicas', 'A las chicas les he comprado flores.', 'A las chicas les he comprado flores'] },
        { id: 'q4', prompt: '*Le veo el coche a Pedro todas las mañanas. →',         correct: ['Lo veo a Pedro todas las mañanas.', 'Lo veo a Pedro todas las mañanas', 'Veo a Pedro todas las mañanas.', 'Veo a Pedro todas las mañanas'], explanation: 'Здесь дополнение — Pedro (а не coche), CD к мужчине: <em>lo</em>.' },
      ],
    },

    {
      id: '38.8',
      title: 'Сопоставьте функцию и пример',
      type: 'match',
      instructions: 'Подберите для каждой функции пример.',
      pool: [
        'Lo necesito (= словарь).',
        'La necesito (= ручка).',
        'Le he escrito a Marta.',
        'Lo veo a Carlos.',
        'A Pedro le duele la cabeza.',
        'Lo sé.',
      ],
      questions: [
        { id: 'q1', prompt: 'CD к вещи мужского рода',                  correct: 'Lo necesito (= словарь).' },
        { id: 'q2', prompt: 'CD к вещи женского рода',                   correct: 'La necesito (= ручка).' },
        { id: 'q3', prompt: 'CI к женщине-адресату',                       correct: 'Le he escrito a Marta.' },
        { id: 'q4', prompt: 'CD к мужчине-человеку',                       correct: 'Lo veo a Carlos.' },
        { id: 'q5', prompt: 'CI «болит у кого»',                            correct: 'A Pedro le duele la cabeza.' },
        { id: 'q6', prompt: '<em>lo</em> = «это» (вся информация)',            correct: 'Lo sé.' },
      ],
    },

    {
      id: '38.9',
      title: 'Спорная зона: leísmo',
      type: 'choice',
      instructions: 'В этих фразах допустимы <strong>обе</strong> формы (CD к мужчине-человеку: <em>lo</em> по строгой норме, <em>le</em> по leísmo). Выберите ту, где согласие — единственный вариант.',
      questions: [
        { id: 'q1', prompt: 'Какой вариант — единственно правильный (без leísmo)?', options: ['A Juan lo veo a menudo.', 'A Juan le veo a menudo.'], correct: 'A Juan lo veo a menudo.' },
        { id: 'q2', prompt: 'Какой вариант — единственно правильный?',               options: ['A María la conozco bien.', 'A María le conozco bien.'], correct: 'A María la conozco bien.', explanation: 'Для женщины-CD <em>le</em> не допускается даже разговорно.' },
        { id: 'q3', prompt: 'Какой вариант — единственно правильный?',                options: ['A las chicas las saludo.', 'A las chicas les saludo.'], correct: 'A las chicas las saludo.' },
        { id: 'q4', prompt: 'Какой вариант — единственно правильный?',                 options: ['Esa novela ya la leí.', 'Esa novela ya le leí.'], correct: 'Esa novela ya la leí.', explanation: 'Вещь — только CD-форма.' },
      ],
    },

    {
      id: '38.10',
      title: 'CD-местоимение по роду / числу',
      type: 'fill',
      instructions: 'Заменяете подчёркнутый предмет на CD: <em>lo / la / los / las</em>.',
      questions: [
        { id: 'q1', prompt: 'No tengo <u>el periódico</u>. →',                  correct: 'lo' },
        { id: 'q2', prompt: 'Necesito <u>la llave</u>. →',                       correct: 'la' },
        { id: 'q3', prompt: 'Compro <u>las flores</u>. →',                        correct: 'las' },
        { id: 'q4', prompt: 'No veo <u>los zapatos</u>. →',                        correct: 'los' },
        { id: 'q5', prompt: 'He perdido <u>el libro</u>. →',                       correct: 'lo' },
        { id: 'q6', prompt: 'Tengo <u>las entradas</u>. →',                          correct: 'las' },
        { id: 'q7', prompt: 'No conozco <u>esa canción</u>. →',                       correct: 'la' },
        { id: 'q8', prompt: 'Voy a vender <u>los cuadros viejos</u>. →',                correct: 'los' },
      ],
    },

    {
      id: '38.11',
      title: 'Найдите фразу с ошибкой',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой в местоимении.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['A Marta la veo cada día.', 'A Marta le doy clase.', 'A Marta le veo cada día.', 'A Marta la conozco bien.'], correct: 'A Marta le veo cada día.', explanation: '«Видеть кого?» — CD; для женщины — <em>la</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['No lo sé.', 'No lo creo.', 'No los entiendo a tus padres.', 'No le entiendo el reloj.'], correct: 'No le entiendo el reloj.', explanation: '«Не понимаю часы» — CD-вещь: <em>No lo entiendo</em> (= reloj).' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['A Pedro le duele la cabeza.', 'A Pedro lo duele la cabeza.', 'A Carla le duele la espalda.', 'A los niños les duelen los dientes.'], correct: 'A Pedro lo duele la cabeza.', explanation: '«Болит у кого» — CI: <em>le</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Lo siento.', 'Lo sé.', 'La sé.', 'Lo sospecho.'], correct: 'La sé.', explanation: '<em>lo</em> = «это» (информация) — единственный вариант.' },
      ],
    },

    {
      id: '38.12',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Запишите услышанное полностью, с диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'No lo necesito.',                       correct: ['No lo necesito.', 'No lo necesito'] },
        { id: 'q2', prompt: '', audio: 'A María la veo todos los días.',         correct: ['A María la veo todos los días.', 'A María la veo todos los días'] },
        { id: 'q3', prompt: '', audio: 'A Pedro le he regalado un libro.',        correct: ['A Pedro le he regalado un libro.', 'A Pedro le he regalado un libro'] },
        { id: 'q4', prompt: '', audio: 'Lo siento mucho.',                          correct: ['Lo siento mucho.', 'Lo siento mucho'] },
        { id: 'q5', prompt: '', audio: 'Le duele la cabeza.',                        correct: ['Le duele la cabeza.', 'Le duele la cabeza'] },
        { id: 'q6', prompt: '', audio: 'A las chicas las saludo cada mañana.',        correct: ['A las chicas las saludo cada mañana.', 'A las chicas las saludo cada mañana'] },
      ],
    },
  ],
};
