// ============================================================
// Unidad 118 — Oraciones temporales (cuando, antes de que…)
// Когда говорим о прошлом / настоящем — indicativo;
// когда о будущем — presente de subjuntivo.
// antes de que всегда + subjuntivo.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u118 = {
  id: 'u118',
  number: 118,
  title: { es: 'cuando, antes de que…', topic: 'Oraciones temporales' },
  topicRu: 'Временные предложения: cuando, antes de que, hasta que, en cuanto…',

  theory: [
    {
      type: 'rule',
      es: 'Las <strong>oraciones temporales</strong> dan información sobre el momento en que ocurre algo. Responden a las preguntas <em>¿cuándo?</em>, <em>¿desde cuándo?</em>, <em>¿hasta cuándo?</em>.',
      ru: 'Временные придаточные отвечают на вопросы «когда?», «с каких пор?», «до каких пор?». Самые частотные союзы: <em>cuando, antes de que, después de que, hasta que, desde que, en cuanto, siempre que, mientras</em>.',
      examples: [
        { es: 'Daniel se puso bien <strong>en cuanto tomó</strong> la medicina.', ru: 'Даниэль выздоровел, как только принял лекарство.' },
        { es: '<strong>Cuando era</strong> joven, hacía mucho deporte.', ru: 'Когда я был молод, я много занимался спортом.' },
        { es: 'Tengo que recoger la cocina <strong>antes de que lleguen</strong> todos.', ru: 'Мне нужно прибрать кухню, пока не пришли все.' },
      ],
    },

    {
      type: 'heading',
      text: 'Главное правило: indicativo или subjuntivo?',
    },
    {
      type: 'table',
      caption: 'Когда какой режим?',
      columns: ['Союз', '+ Indicativo', '+ Subjuntivo'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['<strong>cuando</strong>',
          '<em>Cuando <strong>era</strong> joven, comía mucho.</em> <small>(прошлое/наст.)</small>',
          '<em>Cuando <strong>cobre</strong> mi sueldo, te invito.</em> <small>(будущее)</small>'],
        ['<strong>en cuanto</strong>',
          '<em>Me fui en cuanto <strong>empezó</strong> a llover.</em>',
          '<em>Llámame en cuanto <strong>termine</strong> el examen.</em>'],
        ['<strong>hasta que</strong>',
          '<em>Insistió hasta que su padre lo <strong>perdonó</strong>.</em>',
          '<em>Espera aquí hasta que <strong>llegue</strong> Charo.</em>'],
        ['<strong>después de que</strong>',
          '<em>Después de que <strong>terminamos</strong>, salimos.</em>',
          '<em>Después de que <strong>termines</strong>, sal.</em>'],
        ['<strong>desde que</strong>',
          '<em>La conozco desde que <strong>era</strong> pequeña.</em>',
          '— (обычно в indicativo)'],
        ['<strong>siempre que</strong>',
          '<em>Siempre que <strong>llegabas</strong> tarde, se enfadaba.</em>',
          '<em>Siempre que <strong>vengas</strong>, llámame.</em>'],
        ['<strong>antes de que</strong>',
          '— (никогда!)',
          '<em>Llámame antes de que <strong>salgas</strong>.</em>'],
      ],
    },

    {
      type: 'rule',
      es: 'Resumen: con casi todas las conjunciones temporales, se usa <strong>indicativo</strong> cuando la acción es <em>presente o pasada</em> (real, ocurrida) y <strong>presente de subjuntivo</strong> cuando la acción es <em>futura</em> (todavía no ha ocurrido).',
      ru: 'Главное правило: со всеми (кроме <em>antes de que</em>) — <strong>indicativo</strong>, если речь о настоящем или прошлом, и <strong>presente de subjuntivo</strong>, если речь о будущем.',
      examples: [
        { es: '<strong>Cuando vengo</strong> a casa, descanso. <small>— привычка/настоящее → indicativo.</small>', ru: 'Когда я прихожу домой, я отдыхаю.' },
        { es: '<strong>Cuando venga</strong> a casa, descansaré. <small>— будущее → subjuntivo.</small>', ru: 'Когда я приду домой, я отдохну.' },
      ],
    },

    {
      type: 'heading',
      text: 'antes de que / antes de — две разные конструкции',
    },
    {
      type: 'rule',
      es: 'Con <strong>antes de</strong>, <strong>después de</strong> y <strong>hasta</strong> usamos <em>infinitivo</em> cuando el sujeto es el mismo. Cuando los sujetos son distintos, ponemos <em>que</em> + verbo conjugado (subjuntivo después de <strong>antes de que</strong>).',
      ru: 'Если действующее лицо в обеих частях одно и то же, после <em>antes de / después de / hasta</em> ставим инфинитив. Если лица разные — добавляем <em>que</em> и глагол в личной форме: <em>antes de que llegue</em> / <em>después de que termine</em>.',
      examples: [
        { es: 'Te llamaré (yo) <strong>antes de salir</strong> (yo).', ru: 'Я тебе позвоню перед тем, как выйти. <em>(оба «я».)</em>' },
        { es: 'Te llamaré (yo) <strong>antes de que salgan</strong> (ellos).', ru: 'Я тебе позвоню перед тем, как они выйдут. <em>(разные субъекты → antes de que + subjuntivo.)</em>' },
        { es: '<strong>Después de cenar</strong>, fuimos al cine.', ru: 'Поужинав, мы пошли в кино.' },
      ],
    },

    {
      type: 'atencion',
      es: '<strong>Mientras</strong> tiene dos значения: <em>(1)</em> «al mismo tiempo que» — siempre con <strong>indicativo</strong> (<em>Voy a ducharme mientras haces la cena</em>). <em>(2)</em> «durante todo el tiempo que» — con <strong>subjuntivo</strong> cuando hablamos del futuro (<em>No pienso salir mientras esté enfermo</em>).',
      ru: 'У <em>mientras</em> два смысла: «пока, в то же время» — всегда indicativo; «пока (всё то время, что)» — может быть subjuntivo (особенно для будущего): <em>No saldré mientras llueva</em>.',
    },
  ],

  exercises: [
    {
      id: '118.1',
      title: 'Indicativo или subjuntivo?',
      type: 'choice',
      instructions: 'Выберите правильную форму. Будущее → subjuntivo; настоящее/прошлое → indicativo.',
      questions: [
        { id: 'q1', prompt: 'Cuando ___ el coche, me compraré una moto.',                options: ['vendo', 'venda'], correct: 'venda' },
        { id: 'q2', prompt: 'Cuando ___ mayor, podrás salir de noche.',                    options: ['serás', 'seas'], correct: 'seas' },
        { id: 'q3', prompt: 'Ramón no quiere jubilarse hasta que no ___ 65 años.',           options: ['tiene', 'tenga'], correct: 'tenga' },
        { id: 'q4', prompt: 'Llámame en cuanto ___ el examen.',                                options: ['terminas', 'termines'], correct: 'termines' },
        { id: 'q5', prompt: 'Cuando ___ tus amigos, lo pasamos muy bien.',                     options: ['vienen', 'vengan'], correct: 'vienen' },
        { id: 'q6', prompt: 'Sonia no piensa irse hasta que no le ___ el dinero.',                options: ['das', 'des'], correct: 'des' },
        { id: 'q7', prompt: 'Cuando ___ a Orestes, me pongo nerviosa.',                           options: ['veo', 'vea'], correct: 'veo' },
        { id: 'q8', prompt: 'Cuando ___ a Orestes mañana, dile que me llame.',                       options: ['ves', 'veas'], correct: 'veas' },
      ],
    },

    {
      id: '118.2',
      title: 'Поставьте глагол в нужную форму',
      type: 'fill',
      instructions: 'Запишите глагол в скобках в правильной форме (presente de indicativo или presente de subjuntivo).',
      questions: [
        { id: 'q1',  prompt: 'Te compraré la bici cuando ___ (aprender / tú) a montar.',                correct: 'aprendas' },
        { id: 'q2',  prompt: 'Antes de ___ (hablar / tú), piensa lo que vas a decir.',                    correct: 'hablar' },
        { id: 'q3',  prompt: 'Suelo desayunar después de ___ (ducharse / yo).',                            correct: 'ducharme' },
        { id: 'q4',  prompt: 'No queremos casarnos hasta que ___ (acabar / yo) la carrera.',                 correct: 'acabe' },
        { id: 'q5',  prompt: 'Mándame un correo en cuanto ___ (saber / tú) algo.',                            correct: 'sepas' },
        { id: 'q6',  prompt: 'Me gusta cantar mientras ___ (afeitarse / yo).',                                  correct: 'me afeito' },
        { id: 'q7',  prompt: 'Cuando ___ (ser / nosotros) jóvenes, hacíamos muchas excursiones.',                 correct: 'éramos' },
        { id: 'q8',  prompt: 'Siempre que ___ (ir / yo) a la playa, llueve.',                                       correct: 'voy' },
        { id: 'q9',  prompt: 'Llámame antes de que ___ (salir / vosotros).',                                          correct: 'salgáis' },
        { id: 'q10', prompt: 'Cuando ___ (cobrar / yo) mi sueldo, te invito a cenar.',                                  correct: 'cobre' },
      ],
    },

    {
      id: '118.3',
      title: 'Заполните союзом',
      type: 'fill',
      instructions: 'Подставьте: <em>antes de, cuando, desde que, después de, en cuanto, hasta que, mientras, siempre que</em>.',
      questions: [
        { id: 'q1', prompt: 'Luis, espera aquí ___ llegue Charo.',                            correct: 'hasta que' },
        { id: 'q2', prompt: '___ llegue a casa, me ducho.',                                     correct: ['Cuando', 'En cuanto'] },
        { id: 'q3', prompt: 'Por favor, no bebas ___ conduzcas.',                                correct: 'cuando' },
        { id: 'q4', prompt: 'Podemos ir a la bolera ___ cenar.',                                   correct: 'después de' },
        { id: 'q5', prompt: '___ veo a Marta, me da recuerdos para ti.',                            correct: ['Cuando', 'Siempre que'] },
        { id: 'q6', prompt: 'Hans estudia español ___ tenía catorce años.',                            correct: 'desde que' },
        { id: 'q7', prompt: '___ acostarte, apaga la tele, por favor.',                                 correct: 'Antes de' },
        { id: 'q8', prompt: 'Si estás cansada, siéntate un rato ___ preparo la cena.',                    correct: 'mientras' },
      ],
    },

    {
      id: '118.4',
      title: 'Объедините предложения',
      type: 'fill',
      instructions: 'Перепишите как одно предложение, используя указанный союз. Запишите всю фразу.',
      questions: [
        { id: 'q1', prompt: '<em>Cenaremos. Iremos a dar un paseo.</em> (después de) →',
          correct: ['Después de cenar, iremos a dar un paseo.', 'Después de cenar iremos a dar un paseo.'] },
        { id: 'q2', prompt: '<em>A veces me duele la cabeza. Me tomo una aspirina.</em> (siempre que) →',
          correct: ['Siempre que me duele la cabeza, me tomo una aspirina.', 'Siempre que me duele la cabeza me tomo una aspirina.'] },
        { id: 'q3', prompt: '<em>Seré abogado. Trabajaré en esta empresa.</em> (cuando) →',
          correct: ['Cuando sea abogado, trabajaré en esta empresa.', 'Cuando sea abogado trabajaré en esta empresa.'] },
        { id: 'q4', prompt: '<em>Adela vendrá. Le daré la noticia.</em> (en cuanto) →',
          correct: ['En cuanto venga Adela, le daré la noticia.', 'Le daré la noticia en cuanto venga Adela.'] },
        { id: 'q5', prompt: '<em>Empezó a llover. Nos fuimos a casa.</em> (cuando) →',
          correct: ['Cuando empezó a llover, nos fuimos a casa.', 'Nos fuimos a casa cuando empezó a llover.'] },
        { id: 'q6', prompt: '<em>Me quedaré aquí. La fiesta acabará.</em> (hasta que) →',
          correct: ['Me quedaré aquí hasta que acabe la fiesta.', 'Me quedaré aquí hasta que la fiesta acabe.'] },
      ],
    },

    {
      id: '118.5',
      title: 'antes de или antes de que?',
      type: 'choice',
      instructions: 'Один субъект — <em>antes de + inf</em>; разные — <em>antes de que + subj</em>.',
      questions: [
        { id: 'q1', prompt: 'Lávate las manos ___ comer.',                              options: ['antes de', 'antes de que'], correct: 'antes de' },
        { id: 'q2', prompt: 'Te llamaré ___ salgas de casa.',                             options: ['antes de', 'antes de que'], correct: 'antes de que' },
        { id: 'q3', prompt: 'Cierra la puerta ___ irte.',                                  options: ['antes de', 'antes de que'], correct: 'antes de' },
        { id: 'q4', prompt: 'Termínalo ___ llegue tu padre.',                              options: ['antes de', 'antes de que'], correct: 'antes de que' },
        { id: 'q5', prompt: 'Quiero hablar contigo ___ tomar una decisión.',                options: ['antes de', 'antes de que'], correct: 'antes de' },
        { id: 'q6', prompt: 'Quiero hablar contigo ___ tomes una decisión.',                 options: ['antes de', 'antes de que'], correct: 'antes de que' },
      ],
    },

    {
      id: '118.6',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна неверная фраза.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?',
          options: ['Cuando llegues, llámame.', 'Cuando llegarás, llámame.', 'Cuando llegues mañana, llámame.', 'Cuando llegabas, no estaba.'],
          correct: 'Cuando llegarás, llámame.', explanation: 'После <em>cuando</em> для будущего — subjuntivo, не futuro.' },
        { id: 'q2', prompt: 'Где ошибка?',
          options: ['Antes de que llegues.', 'Antes de que llegas.', 'Antes de llegar.', 'Antes de comer.'],
          correct: 'Antes de que llegas.', explanation: '<em>antes de que</em> всегда требует subjuntivo.' },
        { id: 'q3', prompt: 'Где ошибка?',
          options: ['Cuando era pequeño, vivía en Sevilla.', 'Cuando sea pequeño, vivía en Sevilla.', 'Cuando llegamos, llovía.', 'Cuando vino, dormíamos.'],
          correct: 'Cuando sea pequeño, vivía en Sevilla.', explanation: 'Для прошлого нужно indicativo (<em>era</em>).' },
        { id: 'q4', prompt: 'Где ошибка?',
          options: ['Llámame en cuanto llegues.', 'Llámame en cuanto llegarás.', 'Llámame en cuanto sepas algo.', 'Llámame en cuanto puedas.'],
          correct: 'Llámame en cuanto llegarás.', explanation: 'После <em>en cuanto</em> для будущего — subjuntivo.' },
        { id: 'q5', prompt: 'Где ошибка?',
          options: ['Mientras hagas la cena, leo.', 'Mientras haces la cena, leo.', 'Mientras estudio, escucho música.', 'Mientras llueva, no salgo.'],
          correct: 'Mientras hagas la cena, leo.', explanation: '<em>mientras</em> «al mismo tiempo» — indicativo (<em>haces</em>).' },
      ],
    },

    {
      id: '118.7',
      title: 'Все верные варианты',
      type: 'multi',
      instructions: 'Какие фразы построены правильно?',
      questions: [
        {
          id: 'q1',
          prompt: 'Отметьте все правильные:',
          options: [
            'Cuando vengas, te lo cuento.',
            'Cuando vendrás, te lo cuento.',
            'Cuando viniste, no estaba.',
            'Cuando vienes, hablamos.',
            'Antes de que vengas, prepararé la cena.',
            'Antes de que vienes, prepararé la cena.',
            'Antes de venir, llámame.',
            'Después de que termines, llámame.',
          ],
          correct: [
            'Cuando vengas, te lo cuento.',
            'Cuando viniste, no estaba.',
            'Cuando vienes, hablamos.',
            'Antes de que vengas, prepararé la cena.',
            'Antes de venir, llámame.',
            'Después de que termines, llámame.',
          ],
          explanation: 'Будущее → subjuntivo; <em>antes de que</em> всегда subjuntivo; futuro после <em>cuando</em> невозможно.',
        },
      ],
    },

    {
      id: '118.8',
      title: 'Сопоставьте русский и испанский',
      type: 'match',
      instructions: 'Подберите русский перевод.',
      pool: [
        'Когда я приду, я тебе позвоню.',
        'Когда я был молодым, я много занимался спортом.',
        'Я подожду, пока ты не вернёшься.',
        'Как только узнаю, расскажу.',
        'Позвони мне, прежде чем выйти.',
        'Я её знаю с тех пор, как ей было пять лет.',
      ],
      questions: [
        { id: 'q1', prompt: '<em>Cuando llegue, te llamo.</em>',                              correct: 'Когда я приду, я тебе позвоню.' },
        { id: 'q2', prompt: '<em>Cuando era joven, hacía mucho deporte.</em>',                  correct: 'Когда я был молодым, я много занимался спортом.' },
        { id: 'q3', prompt: '<em>Esperaré hasta que vuelvas.</em>',                              correct: 'Я подожду, пока ты не вернёшься.' },
        { id: 'q4', prompt: '<em>En cuanto sepa algo, te lo cuento.</em>',                        correct: 'Как только узнаю, расскажу.' },
        { id: 'q5', prompt: '<em>Llámame antes de salir.</em>',                                    correct: 'Позвони мне, прежде чем выйти.' },
        { id: 'q6', prompt: '<em>La conozco desde que tenía cinco años.</em>',                       correct: 'Я её знаю с тех пор, как ей было пять лет.' },
      ],
    },

    {
      id: '118.9',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Прослушайте и запишите.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Cuando era joven, hacía mucho deporte.',
          correct: ['Cuando era joven, hacía mucho deporte.', 'Cuando era joven hacía mucho deporte.'] },
        { id: 'q2', prompt: '', audio: 'Tengo que recoger la cocina antes de que lleguen todos.',
          correct: ['Tengo que recoger la cocina antes de que lleguen todos.', 'Tengo que recoger la cocina antes de que lleguen todos'] },
        { id: 'q3', prompt: '', audio: 'Llámame en cuanto termine el examen.',
          correct: ['Llámame en cuanto termine el examen.', 'Llámame en cuanto termine el examen'] },
        { id: 'q4', prompt: '', audio: 'No pienso salir mientras esté enfermo.',
          correct: ['No pienso salir mientras esté enfermo.', 'No pienso salir mientras esté enfermo'] },
        { id: 'q5', prompt: '', audio: 'Cuando cobre mi primer sueldo, te invitaré a cenar.',
          correct: ['Cuando cobre mi primer sueldo, te invitaré a cenar.', 'Cuando cobre mi primer sueldo te invitaré a cenar.'] },
      ],
    },

    {
      id: '118.10',
      title: 'mientras: indicativo или subjuntivo?',
      type: 'choice',
      instructions: '«В то же время» → indicativo. «Пока (на всё время)», особенно про будущее → subjuntivo.',
      questions: [
        { id: 'q1', prompt: 'Voy a ducharme mientras ___ la cena.',                       options: ['haces', 'hagas'], correct: 'haces' },
        { id: 'q2', prompt: 'No saldré mientras ___ enfermo.',                              options: ['estoy', 'esté'], correct: 'esté' },
        { id: 'q3', prompt: 'Mientras ___, escucho música.',                                 options: ['estudio', 'estudie'], correct: 'estudio' },
        { id: 'q4', prompt: 'Mientras ___ lloviendo, nos quedamos en casa.',                   options: ['está', 'esté'], correct: 'esté', explanation: 'Здесь смысл «всё то время, пока» (на будущее) → subjuntivo.' },
        { id: 'q5', prompt: 'Ayer, mientras ___ la cena, escuchaba la radio.',                  options: ['preparaba', 'preparara'], correct: 'preparaba' },
        { id: 'q6', prompt: 'Cuida del bebé mientras yo ___ a la tienda.',                       options: ['voy', 'vaya'], correct: 'vaya' },
      ],
    },

    {
      id: '118.11',
      title: 'Подберите конец фразы',
      type: 'match',
      instructions: 'Соедините начало и завершение каждого предложения.',
      pool: [
        'antes de que llegue.',
        'cuando llegue.',
        'hasta que llegue.',
        'desde que llegó.',
        'mientras esté en casa.',
        'en cuanto llegue.',
      ],
      questions: [
        { id: 'q1', prompt: '<em>Tengo que limpiar la cocina</em> ___',                  correct: 'antes de que llegue.' },
        { id: 'q2', prompt: '<em>Te lo cuento todo</em> ___',                                correct: 'en cuanto llegue.' },
        { id: 'q3', prompt: '<em>No me llames</em> ___',                                       correct: 'mientras esté en casa.' },
        { id: 'q4', prompt: '<em>Esperaré aquí</em> ___',                                       correct: 'hasta que llegue.' },
        { id: 'q5', prompt: '<em>No habla con nadie</em> ___',                                   correct: 'desde que llegó.' },
        { id: 'q6', prompt: '<em>Daremos un paseo</em> ___',                                       correct: 'cuando llegue.' },
      ],
    },
  ],
};
