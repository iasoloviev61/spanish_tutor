// ============================================================
// Unidad 35 — Pronombres personales de complemento directo
// me, te, lo/la, nos, os, los/las.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u35 = {
  id: 'u35',
  number: 35,
  title: { es: 'Te amo', topic: 'Pronombres personales de complemento directo' },
  topicRu: 'Личные местоимения прямого дополнения',

  theory: [
    {
      type: 'rule',
      es: 'Los pronombres <strong>me, te, lo, la, nos, os, los, las</strong> se usan como <em>complemento directo</em> de un verbo para referirse a una persona, animal o cosa <em>conocida o ya mencionada</em>. Sustituyen al objeto directo.',
      ru: 'Местоимения прямого дополнения заменяют существительное, которое уже упомянули или которое и так понятно из контекста — чтобы не повторяться. По-русски это «меня, тебя, его, её, нас, вас, их».',
      examples: [
        { es: 'Lola ama a Carlos. → Lola lo ama.', ru: 'Лола любит Карлоса → Лола его любит.' },
        { es: 'No encuentro el pan. → No lo encuentro.', ru: 'Не нахожу хлеб → Не нахожу его.' },
        { es: '¿Conoces a Marta? — Sí, la conozco.', ru: 'Знаешь Марту? — Да, знаю её.' },
      ],
    },
    {
      type: 'heading',
      text: 'Формы',
    },
    {
      type: 'table',
      caption: 'Pronombres de complemento directo',
      columns: ['Лицо', 'SINGULAR (= a mí, a ti…)', 'PLURAL'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['1.ª',                           '<em>me</em> (a mí)',                                                   '<em>nos</em> (a nosotros / nosotras)'],
        ['2.ª (близко)',                   '<em>te</em> (a ti)',                                                    '<em>os</em> (a vosotros / vosotras)'],
        ['3.ª м. / usted м. / cosa м.',     '<em>lo</em>',                                                          '<em>los</em>'],
        ['3.ª ж. / usted ж. / cosa ж.',     '<em>la</em>',                                                          '<em>las</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'Para 3.ª persona y para <em>usted / ustedes</em> la elección depende del <strong>género</strong> y <strong>número</strong> del objeto: <em>lo / la / los / las</em>.',
      ru: 'Для «его / её / их» выбор формы зависит от рода и числа того, на что ссылаемся: <em>lo</em> — м. р. ед. ч. (его/него или мужчину «вас»), <em>la</em> — ж. р. ед. ч., <em>los</em> — м. р. мн. ч., <em>las</em> — ж. р. мн. ч. То же самое для вежливого <em>usted/ustedes</em>: к мужчине-собеседнику — <em>lo</em>, к женщине — <em>la</em>.',
      examples: [
        { es: '¿Quieres este libro? — No, no lo quiero.', ru: '— Хочешь эту книгу? — Нет, не хочу её. (libro — м. р.)' },
        { es: '¿Quieres a tus padres? — Sí, los quiero.', ru: '— Любишь родителей? — Да, люблю их.' },
        { es: '¿Conoces esa canción? — Sí, la conozco.', ru: '— Знаешь эту песню? — Да, знаю.' },
        { es: '—Señora, la llamo mañana.', ru: '— Сеньора, я вам перезвоню завтра. (к женщине — <em>la</em>)' },
      ],
    },
    {
      type: 'atencion',
      es: '<strong>masculino + femenino = plural masculino</strong>. <em>—¿Veis mucho a Almudena y a Luis? —No, no los vemos mucho.</em>',
      ru: 'Если упоминаются и мужчина, и женщина — берётся форма мужского рода: <em>los</em> (а не <em>las</em>). Так же, как с подлежащими (<em>nosotros, ellos</em>).',
    },
    {
      type: 'heading',
      text: 'Где ставится',
    },
    {
      type: 'rule',
      es: 'Por defecto, los pronombres CD van <strong>delante</strong> del verbo conjugado: <em>(no) me, te, lo… + verbo</em>.',
      ru: 'Базовое место — <strong>перед</strong> спрягаемым глаголом. Между местоимением и глаголом обычно ничего не вставляется (отрицание <em>no</em> идёт ещё левее).',
      examples: [
        { es: 'Yo os conozco.', ru: 'Я вас знаю.' },
        { es: '¿Dónde está Marisa? No la veo.', ru: 'Где Мариса? Я её не вижу.' },
        { es: '¿Quién eres? No te conozco.', ru: 'Кто ты? Я тебя не знаю.' },
        { es: '—¿Nos recuerdas? —Ah, sí. Ahora os recuerdo.', ru: '— Ты нас помнишь? — А, да, теперь помню вас.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Con <em>imperativo, infinitivo</em> y <em>gerundio</em>, el pronombre se <strong>une al final del verbo</strong>: <em>cómpralo, voy a comprarlo, estoy comprándolo</em>. (Detalles ▶ Unidad 39.)',
      ru: 'С повелительным наклонением, инфинитивом и герундием местоимение <strong>прицепляется в конец</strong> глагола: <em>cómpralo</em> «купи это», <em>voy a comprarlo</em> «я собираюсь это купить», <em>estoy comprándolo</em> «я это покупаю». Подробно — в Unidad 39.',
    },
    {
      type: 'heading',
      text: 'a mí, a ti, a él… для уточнения и эмфазы',
    },
    {
      type: 'rule',
      es: 'Cuando se habla de personas se puede añadir <strong>a mí, a ti, a él, a ella, a usted, a nosotros, a vosotros, a ellos, a ellas, a ustedes</strong> — además de <em>me, te, lo…</em>',
      ru: 'Местоимения <em>me, te, lo…</em> ставятся <strong>обязательно</strong>, но при необходимости их сопровождает «удвоенная» форма с <em>a</em> — <em>a mí, a ti, a él…</em> Это нужно для трёх задач:',
      examples: [
        { es: '<strong>Уточнение лица:</strong> Ayer las vi en el parque. → ¿A ustedes o a ellas? → Ayer las vi a ustedes en el parque.', ru: 'Чтобы было ясно «вас» или «их».' },
        { es: '<strong>Контраст:</strong> Ramón ama a María, pero María no lo ama a él.', ru: 'Контраст «но не любит именно его».' },
        { es: '<strong>Эмфаза:</strong> A mí no me conoce. (Puede que conozca a otros, pero a mí no.)', ru: 'Усиление: «именно меня».' },
      ],
    },
    {
      type: 'atencion',
      es: 'Es importante: <em>a mí, a ti…</em> <strong>nunca</strong> sustituyen a <em>me, te, lo…</em>: van <strong>juntos</strong>. <em><span style="text-decoration: line-through">A mí no conoce</span></em> es incorrecto; lo correcto es <em>A mí no me conoce</em>.',
      ru: 'Главное: <em>a mí, a ti, a él…</em> <strong>не заменяют</strong> <em>me, te, lo…</em>, а идут <strong>вместе</strong>. <em>A mí no me conoce</em> ✔, <em>A mí no conoce</em> ✖.',
    },
  ],

  exercises: [
    {
      id: '35.1',
      title: 'Замените существительное на lo / la / los / las',
      type: 'fill',
      instructions: 'Допишите подходящее местоимение прямого дополнения.',
      questions: [
        { id: 'q1', prompt: '¿Dónde está Andrés? No ___ veo.',                  correct: 'lo' },
        { id: 'q2', prompt: '¿Dónde están las cucharas? No ___ veo.',            correct: 'las' },
        { id: 'q3', prompt: '¿Dónde están tus amigos? No ___ veo.',                correct: 'los' },
        { id: 'q4', prompt: '¿Dónde está el teléfono? No ___ veo.',                 correct: 'lo' },
        { id: 'q5', prompt: '¿Dónde está Julia? No ___ veo.',                         correct: 'la' },
        { id: 'q6', prompt: '¿Dónde están tus padres? No ___ veo.',                    correct: 'los' },
        { id: 'q7', prompt: '¿Dónde está la entrada? No ___ veo.',                       correct: 'la' },
        { id: 'q8', prompt: '¿Dónde están las naranjas? No ___ veo.',                    correct: 'las' },
      ],
    },

    {
      id: '35.2',
      title: 'me, te, lo, la, nos, os, los, las',
      type: 'fill',
      instructions: 'Допишите местоимение, которое заменяет адресата (см. вторую фразу).',
      questions: [
        { id: 'q1', prompt: 'Yo ___ conozco. Tú eres amigo de Ana.',                  correct: 'te' },
        { id: 'q2', prompt: 'Yo ___ conozco. Ustedes son los padres de Jesús.',         correct: 'los' },
        { id: 'q3', prompt: 'Yo ___ conozco. Vosotros sois compañeros de Ramón.',         correct: 'os' },
        { id: 'q4', prompt: 'Yo ___ conozco. Usted es la madre de Rosario.',                correct: 'la' },
        { id: 'q5', prompt: 'Yo ___ conozco. Ustedes son las tías de Pepe.',                  correct: 'las' },
        { id: 'q6', prompt: 'Yo ___ conozco. Vosotras sois amigas de Raquel.',                  correct: 'os' },
        { id: 'q7', prompt: 'Yo ___ conozco. Usted es el padre de Pedro.',                       correct: 'lo' },
        { id: 'q8', prompt: 'Yo ___ conozco. Tú vives en la calle Arenal.',                       correct: 'te' },
      ],
    },

    {
      id: '35.3',
      title: 'Краткий ответ с местоимением',
      type: 'fill',
      instructions: 'Ответьте кратко: <em>(no +) me / te / lo / la… + глагол</em>. Образец: <em>—¿Amas a Luis? —Sí, lo amo.</em>',
      questions: [
        { id: 'q1', prompt: '—¿Quieres esta foto? — No, no ___.',               correct: ['la quiero'] },
        { id: 'q2', prompt: '—¿Has comprado el periódico? — No, no ___.',         correct: ['lo he comprado'] },
        { id: 'q3', prompt: '—¿Nos quieres, mamá? — Sí, ___ mucho.',                correct: ['os quiero', 'los quiero'] },
        { id: 'q4', prompt: '—¿Has visto mis zapatillas? — No, no ___.',             correct: ['las he visto'] },
        { id: 'q5', prompt: '—¿Me recuerdas? — Sí, ___. Tú eres Julián.',              correct: ['te recuerdo'] },
        { id: 'q6', prompt: '—¿Ves mucho a Pepe y a Luisa? — Sí, ___ mucho.',           correct: ['los veo'] },
        { id: 'q7', prompt: '—¿Te quiere Elena? — No, no ___.',                          correct: ['me quiere'] },
        { id: 'q8', prompt: '—¿Conoces a los Sres. Pardo? — No, no ___.',                  correct: ['los conozco'] },
        { id: 'q9', prompt: '—¿Te conocen en esta tienda? — Sí, ___ mucho.',                correct: ['me conocen'] },
      ],
    },

    {
      id: '35.4',
      title: 'Контраст с a mí, a ti, a él…',
      type: 'fill',
      instructions: 'Допишите оба элемента: «короткое» местоимение + «длинная» форма с <em>a</em>. Образец: <em>Yo conozco a esa chica, pero ella no me conoce a mí</em>.',
      questions: [
        { id: 'q1', prompt: 'Desde aquí vemos a Roberto, pero él no ___ ve ___.',           correct: ['nos, a nosotros', 'nos, a nosotras'] },
        { id: 'q2', prompt: 'Teresa quiere a Alfredo, pero él no ___ quiere ___.',           correct: ['la, a ella'] },
        { id: 'q3', prompt: 'Esas señoras me conocen, pero yo no ___ conozco ___.',           correct: ['las, a ellas'] },
        { id: 'q4', prompt: 'Ustedes me conocen, pero yo no ___ conozco ___.',                  correct: ['los, a ustedes', 'los conozco a ustedes'] , explanation: 'Если все мужчины или смешанная группа — <em>los</em>; если все женщины — <em>las</em>.' },
        { id: 'q5', prompt: 'Esos chicos conocen a Miguel, pero Miguel no ___ conoce ___.',       correct: ['los, a ellos'] },
      ],
    },

    {
      id: '35.5',
      title: 'Перепишите без повторения существительного',
      type: 'fill',
      instructions: 'Замените прямое дополнение на местоимение. Запишите всю фразу.',
      questions: [
        { id: 'q1', prompt: '<em>Veo a María.</em> →',                          correct: ['La veo.', 'La veo'] },
        { id: 'q2', prompt: '<em>Compramos los billetes.</em> →',                 correct: ['Los compramos.', 'Los compramos'] },
        { id: 'q3', prompt: '<em>No conozco a tus hermanos.</em> →',                correct: ['No los conozco.', 'No los conozco'] },
        { id: 'q4', prompt: '<em>¿Quieres esta manzana?</em> →',                     correct: ['¿La quieres?'] },
        { id: 'q5', prompt: '<em>No leo periódicos.</em> →',                          correct: ['No los leo.', 'No los leo'] , explanation: '«Газеты» — м. р. мн. ч.' },
        { id: 'q6', prompt: '<em>Veo a Ana y a Pedro.</em> →',                          correct: ['Los veo.', 'Los veo'] , explanation: 'Смешанная группа — <em>los</em>.' },
        { id: 'q7', prompt: '<em>¿Tienes la dirección?</em> →',                          correct: ['¿La tienes?'] },
        { id: 'q8', prompt: '<em>Mira la luna.</em> →',                                  correct: ['Mírala.'] , explanation: 'С повелительным — местоимение прицепляется к концу.' },
      ],
    },

    {
      id: '35.6',
      title: 'lo или la',
      type: 'choice',
      instructions: 'Выберите подходящую форму по роду существительного.',
      questions: [
        { id: 'q1', prompt: '¿El libro? Sí, ___ tengo.',                options: ['lo', 'la'], correct: 'lo' },
        { id: 'q2', prompt: '¿La revista? Sí, ___ tengo.',               options: ['lo', 'la'], correct: 'la' },
        { id: 'q3', prompt: '¿El agua? Sí, ___ veo en la mesa.',         options: ['lo', 'la'], correct: 'la', explanation: '<em>agua</em> — ж. р. (артикль <em>el</em> — фонетический).' },
        { id: 'q4', prompt: '¿La canción? Sí, ___ recuerdo.',             options: ['lo', 'la'], correct: 'la' },
        { id: 'q5', prompt: '¿El paquete? Sí, ___ envío hoy.',             options: ['lo', 'la'], correct: 'lo' },
        { id: 'q6', prompt: '¿La carta? Sí, ___ leo.',                      options: ['lo', 'la'], correct: 'la' },
      ],
    },

    {
      id: '35.7',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: [
          'Lo veo.',
          'Lo veo a él.',
          'A él lo veo.',
          'A él veo.',
        ], correct: 'A él veo.', explanation: '<em>a él</em> не заменяет местоимение, а сопровождает: <em>A él lo veo</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: [
          'No la conozco.',
          'No conozco la.',
          'No te conozco.',
          'No los conozco.',
        ], correct: 'No conozco la.', explanation: 'Местоимение CD идёт <strong>перед</strong> спрягаемым глаголом.' },
        { id: 'q3', prompt: 'Где ошибка?', options: [
          'Veo a Ana y a Pedro. → Los veo.',
          'Veo a Ana y a María. → Las veo.',
          'Veo a Ana y a María. → Los veo.',
          'Veo a Pedro y a Juan. → Los veo.',
        ], correct: 'Veo a Ana y a María. → Los veo.', explanation: 'Все женщины — <em>las</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: [
          'Señora, la llamo mañana.',
          'Señor, lo llamo mañana.',
          'Señora, lo llamo mañana.',
          'Señor, la llamo mañana.',
        ], correct: 'Señora, lo llamo mañana. (для женщины)', explanation: 'К сеньоре — <em>la</em>; к сеньору — <em>lo</em>.' },
      ],
    },

    {
      id: '35.8',
      title: 'Сопоставьте',
      type: 'match',
      instructions: 'Подберите местоимение прямого дополнения для каждой ситуации.',
      pool: ['me', 'te', 'lo', 'la', 'nos', 'os', 'los', 'las'],
      questions: [
        { id: 'q1', prompt: '«меня»',                                                   correct: 'me' },
        { id: 'q2', prompt: '«тебя» (близко, ед.)',                                       correct: 'te' },
        { id: 'q3', prompt: '«его» / «вас» (мужчина) / м. предмет',                         correct: 'lo' },
        { id: 'q4', prompt: '«её» / «вас» (женщина) / ж. предмет',                           correct: 'la' },
        { id: 'q5', prompt: '«нас»',                                                          correct: 'nos' },
        { id: 'q6', prompt: '«вас» (мн., близко, Испания)',                                    correct: 'os' },
        { id: 'q7', prompt: '«их» (м. или смешанная) / «вас» (мн.) м.',                          correct: 'los' },
        { id: 'q8', prompt: '«их» (ж.) / «вас» (мн., все женщины)',                              correct: 'las' },
      ],
    },

    {
      id: '35.9',
      title: 'Какие фразы корректны',
      type: 'multi',
      instructions: 'Отметьте все <strong>правильные</strong> предложения.',
      questions: [
        {
          id: 'q1',
          prompt: 'Выберите все корректные варианты:',
          options: [
            'Lo veo a él.',
            'Veo lo.',
            'No la conozco.',
            'No conozco la.',
            'A mí no me conoce.',
            'A mí no conoce.',
            'Te quiero.',
            'Quiero te.',
            'Veo a Ana y a Pedro → los veo.',
            'Veo a Ana y a Pedro → las veo.',
            'Señora, la llamo mañana.',
            'Señora, lo llamo mañana.',
          ],
          correct: ['Lo veo a él.', 'No la conozco.', 'A mí no me conoce.', 'Te quiero.', 'Veo a Ana y a Pedro → los veo.', 'Señora, la llamo mañana.'],
          explanation: 'Местоимение CD ставится перед глаголом; <em>a mí</em> идёт вместе с <em>me</em>; смешанная группа — м. р.; женщине — <em>la</em>.',
        },
      ],
    },

    {
      id: '35.10',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Нажмите 🔊 и запишите фразу полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Te amo.',                                  correct: ['Te amo.', 'Te amo'] },
        { id: 'q2', prompt: '', audio: 'No lo encuentro.',                          correct: ['No lo encuentro.', 'No lo encuentro'] },
        { id: 'q3', prompt: '', audio: 'No la veo.',                                 correct: ['No la veo.', 'No la veo'] },
        { id: 'q4', prompt: '', audio: 'A mí no me conoce.',                          correct: ['A mí no me conoce.', 'A mí no me conoce'] },
        { id: 'q5', prompt: '', audio: 'Yo os conozco.',                                correct: ['Yo os conozco.', 'Yo os conozco'] },
        { id: 'q6', prompt: '', audio: 'Señora, la llamo mañana.',                       correct: ['Señora, la llamo mañana.', 'Señora, la llamo mañana'] },
        { id: 'q7', prompt: '', audio: 'No los vemos mucho.',                              correct: ['No los vemos mucho.', 'No los vemos mucho'] },
      ],
    },

    {
      id: '35.11',
      title: 'lo / la / los / las или me / te',
      type: 'fill',
      instructions: 'Допишите подходящее местоимение.',
      questions: [
        { id: 'q1', prompt: '¿Conoces a María? — Sí, ___ conozco.',                       correct: 'la' },
        { id: 'q2', prompt: '¿Conoces a mí? — Sí, ___ conozco.',                            correct: 'te' },
        { id: 'q3', prompt: '¿Tu hermana ___ ve a vosotras a menudo?',                        correct: 'os' },
        { id: 'q4', prompt: '¿Han comprado los billetes? — No, todavía no ___ han comprado.',  correct: 'los' },
        { id: 'q5', prompt: '¿Quieres una manzana? — No, gracias, no ___ quiero.',              correct: 'la' },
        { id: 'q6', prompt: '¿Cuándo nos ves? — ___ veo el sábado.',                              correct: 'Os', explanation: 'Если в Испании — <em>os</em>; в Лат. Ам. — <em>los</em>. Для нашего курса возьмём европейский вариант.' },
      ],
    },

    {
      id: '35.12',
      title: 'Ответьте полным предложением',
      type: 'fill',
      instructions: 'Ответьте, заменив прямое дополнение на местоимение и сохраняя глагол.',
      questions: [
        { id: 'q1', prompt: '—¿Amas a Luis? — Sí, ___.',                              correct: ['lo amo'] },
        { id: 'q2', prompt: '—¿Quieres esta foto? — No, no ___.',                       correct: ['la quiero'] },
        { id: 'q3', prompt: '—¿Lees libros en español? — Sí, ___ leo.',                  correct: ['los leo'] },
        { id: 'q4', prompt: '—¿Conoces a Sara y a Mar? — No, no ___.',                    correct: ['las conozco'] , explanation: 'Обе — женщины.' },
        { id: 'q5', prompt: '—¿Has visto la película? — Sí, ___ vi ayer.',                  correct: ['la vi'] },
        { id: 'q6', prompt: '—¿Te quiere tu novio? — Sí, ___ quiere mucho.',                  correct: ['me quiere'] },
      ],
    },
  ],
};
