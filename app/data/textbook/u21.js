// ============================================================
// Unidad 21 — Indefinidos (2): uno, otro, cualquiera
// Правила пересказаны своими словами; примеры и упражнения —
// оригинальные, на типичной A1-A2-лексике.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u21 = {
  id: 'u21',
  number: 21,
  title: { es: 'uno, otro, cualquiera', topic: 'Indefinidos (2)' },
  topicRu: 'Неопределённые: «один», «другой», «любой»',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: '<em>un, una, unos, unas</em>, <em>otro/-a/-os/-as</em> y <em>cualquier(a)</em> son <strong>indefinidos</strong>: presentan elementos sin precisar de cuáles se trata.',
      ru: 'Эти три семейства слов вводят в речь предмет, который не уточняется или ещё не назван. <em>un / una</em> — какой-то один; <em>otro</em> — ещё один или другой; <em>cualquier</em> — любой, неважно какой.',
      examples: [
        { es: 'Necesito un móvil nuevo.', ru: 'Мне нужен новый телефон (какой-нибудь).' },
        { es: 'Tráiganos otra cuchara, por favor.', ru: 'Принесите нам ещё одну ложку, пожалуйста.' },
        { es: 'Cualquier día voy a verte.', ru: 'Зайду к тебе как-нибудь (в любой день).' },
      ],
    },

    {
      type: 'heading',
      text: 'otro, otra, otros, otras',
    },
    {
      type: 'rule',
      es: '<em>otro</em> indica <strong>uno o más elementos del mismo tipo</strong> (= ещё один) <strong>o de tipo distinto</strong> (= другой). Funciona como adjetivo: concuerda en género y número.',
      ru: 'У <em>otro</em> два смысла: «ещё один такой же» и «другой, не такой». В обоих случаях согласуется с существительным.',
      examples: [
        { es: 'Toma otra galleta.', ru: 'Возьми ещё одно печенье. (= ещё одно такое же)' },
        { es: 'Déjame otro libro. Este no me gusta.', ru: 'Дай мне другую книгу. Эта мне не нравится. (= не такую)' },
        { es: 'Otros dos bocadillos, por favor.', ru: 'Ещё два бутерброда, пожалуйста.' },
      ],
    },
    {
      type: 'table',
      caption: 'Сочетания с otro / otra',
      columns: ['Конструкция', 'Пример'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['<em>otro, otra</em> + сущ. ед. ч.', '<em>Tráiganos otra cuchara, por favor.</em>'],
        ['<em>otros, otras</em> + сущ. мн. ч.', '<em>Enséñeme otros zapatos. Estos no me gustan.</em>'],
        ['<em>otros, otras</em> + <em>dos / tres / cuatro...</em> + сущ. мн. ч.', '<em>Necesitamos otras dos jugadoras.</em>'],
        ['<em>otro/-a</em> + <em>de</em> + <em>nosotros / los / mis / estos...</em> + сущ. мн. ч.', '<em>Quiere que vayamos otro de nosotros.</em><br><em>Pásame otro de los pasteles de chocolate.</em><br><em>He perdido otra de mis plumas.</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Después de <em>otro</em> nunca se pone el artículo <em>un / una</em>: se dice <em>otro libro</em>, no «un otro libro».',
      ru: 'Перед <em>otro</em> не ставится <em>un / una</em> — это типичная ошибка для русскоязычных. По-русски «ещё один» = по-испански просто <em>otro</em>.',
    },

    {
      type: 'heading',
      text: 'cualquier, cualquiera',
    },
    {
      type: 'rule',
      es: '<em>cualquier(a)</em> indica <strong>uno, no importa cuál</strong>; el hablante no lo identifica ni le interesa. Tiene una sola forma para masculino y femenino.',
      ru: 'Слово <em>cualquier(a)</em> = «любой, неважно какой». Род не различает (одна форма для м. и ж.).',
      examples: [
        { es: 'Dame cualquier libro.', ru: 'Дай мне любую книгу. (Какую — неважно.)' },
        { es: 'Puedes llamarme a cualquier hora.', ru: 'Можешь звонить мне в любое время.' },
        { es: 'Deme uno cualquiera.', ru: 'Дайте мне любой / какой угодно. (= один из них, неважно какой.)' },
      ],
    },
    {
      type: 'table',
      caption: 'Конструкции с cualquier(a)',
      columns: ['Позиция', 'Форма', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['перед сущ. ед. ч.', '<em>cualquier</em>', '<em>Cualquier día voy a verte.</em>'],
        ['после сущ. ед. ч.', '<em>cualquiera</em>', '<em>Dame un libro cualquiera.</em>'],
        ['<em>cualquiera</em> + <em>de</em> + <em>nosotros / los / mis / estos...</em>', '<em>cualquiera</em>', '<em>Cualquiera de ustedes puede hacerlo.</em><br><em>Pásame cualquiera de los bolígrafos.</em><br><em>Cualquiera de esos chicos es más amable que tú.</em>'],
        ['с числительным <em>uno / una</em>', '<em>uno cualquiera</em><br><em>una cualquiera</em>', '<em>—¿Cuál le gusta? —Es igual. Deme uno cualquiera.</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Forma corta <em>cualquier</em> sólo va <strong>antes</strong> del nombre singular (m. o f.). Después del nombre o sola usamos <em>cualquiera</em>.',
      ru: 'До существительного — <em>cualquier</em> (без «-а»), после или отдельно — <em>cualquiera</em>. Без множественного числа в этом значении.',
    },

    {
      type: 'rule',
      es: '<em>uno, una, unos, unas</em>, <em>otro / otra / otros / otras</em> y <em>cualquiera</em> pueden ir <strong>solos</strong> cuando está claro de qué se está hablando.',
      ru: 'Если предмет уже упомянут, можно опустить существительное и оставить только индефинидо. Это короче и звучит естественнее.',
      examples: [
        { es: '—¿Necesitas sillas? —He visto unas preciosas.', ru: '— Тебе нужны стулья? — Я видел красивые (= какие-то стулья).' },
        { es: 'Hay muchos bocadillos. Toma otro.', ru: 'Бутербродов много. Возьми ещё один.' },
        { es: '—¿Cuál le gusta? —Cualquiera.', ru: '— Какой вам нравится? — Любой.' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '21.1',
      title: 'un / una / unos / unas или otro / otra / otros / otras?',
      type: 'fill',
      instructions: 'Поставьте подходящую форму. Если фраза просит «ещё один такой же» — это <em>otro</em>; если просто называет объект впервые — <em>un / una / unos / unas</em>.',
      questions: [
        { id: 'q1', prompt: '—¿Quieres más zumo? —Sí, ___ zumo, por favor.',     correct: 'otro',   explanation: '«Ещё один» — <em>otro</em>.' },
        { id: 'q2', prompt: 'Necesito ___ cuaderno para la clase de mañana.',      correct: 'un',     explanation: 'Просто «какой-то новый, какой-нибудь».' },
        { id: 'q3', prompt: 'Tráiganos ___ cucharas, por favor.',                  correct: 'otras',  explanation: 'Этих не хватает — давайте ещё.' },
        { id: 'q4', prompt: 'En la cocina hay ___ chicas hablando.',                correct: 'unas',   explanation: 'Описываем «какие-то девушки», впервые.' },
        { id: 'q5', prompt: 'Este café está frío. Pídeme ___ café, por favor.',     correct: 'otro' },
        { id: 'q6', prompt: 'En la mesa hay ___ libro abierto.',                    correct: 'un' },
        { id: 'q7', prompt: 'Necesitamos ___ dos sillas más.',                       correct: 'otras',  explanation: 'Перед числительным во множественном — <em>otras</em>.' },
        { id: 'q8', prompt: 'Acabo de comprar ___ camisas blancas.',                correct: 'unas' },
      ],
    },

    {
      id: '21.2',
      title: 'cualquier или cualquiera?',
      type: 'choice',
      instructions: 'Перед существительным используется короткая форма <em>cualquier</em>; после или отдельно — <em>cualquiera</em>.',
      questions: [
        { id: 'q1', prompt: 'Esto lo puedes encontrar en ___ tienda.',          options: ['cualquier', 'cualquiera'], correct: 'cualquier' },
        { id: 'q2', prompt: 'Si quieres que te ayude, ven ___ mañana.',         options: ['cualquier', 'cualquiera'], correct: 'cualquier' },
        { id: 'q3', prompt: 'Eso es complicado. No lo puede hacer ___ de nosotros.', options: ['cualquier', 'cualquiera'], correct: 'cualquiera', explanation: 'Перед <em>de</em> — полная форма.' },
        { id: 'q4', prompt: 'Usa ___ de esos ordenadores. Todos funcionan.',     options: ['cualquier', 'cualquiera'], correct: 'cualquiera' },
        { id: 'q5', prompt: 'Dale una excusa ___. No le importará.',             options: ['cualquier', 'cualquiera'], correct: 'cualquiera', explanation: 'После существительного — <em>cualquiera</em>.' },
        { id: 'q6', prompt: 'Te puedo escribir a ___ hora del día.',              options: ['cualquier', 'cualquiera'], correct: 'cualquier' },
        { id: 'q7', prompt: '¿Cuál te llevo? — Tráeme uno ___.',                  options: ['cualquier', 'cualquiera'], correct: 'cualquiera', explanation: 'После числительного <em>uno</em> — <em>cualquiera</em>.' },
      ],
    },

    {
      id: '21.3',
      title: 'Поставьте uno, otro, cualquier(a) (+ de когда нужно)',
      type: 'fill',
      instructions: 'Запишите подходящую форму. Где требуется предлог <em>de</em>, добавьте его (например: <em>otro de</em>).',
      questions: [
        { id: 'q1', prompt: '—¿Te gustan estas galletas? Toma ___ .',                                        correct: ['otra'],                       explanation: '«Ещё одна» — <em>otra</em>.' },
        { id: 'q2', prompt: 'Este helado estaba riquísimo. Quiero ___ .',                                    correct: ['otro'] },
        { id: 'q3', prompt: 'Diez euros no son suficientes. Necesitamos ___ cinco.',                          correct: ['otros'],                     explanation: 'Перед числительным во мн. ч. — <em>otros</em>.' },
        { id: 'q4', prompt: '—¿Dónde estabas? —Con ___ amigas.',                                              correct: ['unas'] },
        { id: 'q5', prompt: 'Ayer jugué al tenis con ___ tus primos.',                                        correct: ['uno de', 'otro de'],         explanation: '«С одним из твоих кузенов» = <em>uno de</em>; «с другим из твоих кузенов» = <em>otro de</em>.' },
        { id: 'q6', prompt: 'Si vienen Arnaldo y Marta al concierto, necesitaremos ___ dos entradas.',         correct: ['otras'] },
        { id: 'q7', prompt: 'Quiero ___ esas corbatas.',                                                       correct: ['otra de', 'una de'] ,        explanation: '«Другую из этих галстуков» — <em>otra de</em>; «одну из этих» — <em>una de</em>.' },
        { id: 'q8', prompt: 'Han llegado ___ libros para la biblioteca.',                                     correct: ['unos', 'otros'],             explanation: 'Без контекста подходят оба: «какие-то» или «ещё».' },
      ],
    },

    {
      id: '21.4',
      title: 'otro, otra, otros, otras или cualquiera',
      type: 'fill',
      instructions: 'Допишите фразу подходящей формой. Подсказка: «другой / ещё» — <em>otro</em>; «любой» — <em>cualquiera</em>.',
      questions: [
        { id: 'q1', prompt: '—¿Le gustan estos zapatos? —No, enséñeme ___, por favor.', correct: 'otros' },
        { id: 'q2', prompt: 'No es muy difícil. ___ puede hacerlo.',                     correct: 'cualquiera' },
        { id: 'q3', prompt: '¿Qué trabajo quieres hacer? ___. Necesito trabajar.',        correct: 'cualquiera',  explanation: '«Любой, мне всё равно».' },
        { id: 'q4', prompt: 'He perdido el tren a Madrid. ¿Cuándo hay ___ ?',              correct: 'otro' },
        { id: 'q5', prompt: '—¿Le gustan estos plátanos? —No, deme ___ . Esos están muy verdes.', correct: 'otros' },
        { id: 'q6', prompt: 'Esta camisa está sucia. Voy a ponerme ___ .',                 correct: 'otra' },
      ],
    },

    {
      id: '21.5',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза грамматически неудачна — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Toma otra galleta.', 'Tráigame un otro vaso.', 'Quiero otro café.', 'Necesito otros zapatos.'], correct: 'Tráigame un otro vaso.', explanation: 'Перед <em>otro</em> не ставится <em>un</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Cualquier persona puede hacerlo.', 'Cualquiera persona puede hacerlo.', 'Una persona cualquiera puede hacerlo.', 'Cualquiera de ellos puede hacerlo.'], correct: 'Cualquiera persona puede hacerlo.', explanation: 'Перед существительным — короткая форма <em>cualquier</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Necesitamos otros dos kilos.', 'Necesitamos otras dos jugadoras.', 'Necesitamos dos otros kilos.', 'Necesitamos otro libro.'], correct: 'Necesitamos dos otros kilos.', explanation: '<em>otros</em> идёт перед числительным, а не после.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Dame otro de los lápices.', 'Dame otro de tus lápices.', 'Dame otro de aquellos lápices.', 'Dame otro de lápiz.'], correct: 'Dame otro de lápiz.', explanation: 'После <em>otro de</em> идёт мн. ч.: <em>los, mis, estos lápices…</em>' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Cualquiera de ustedes.', 'Cualquiera de las chicas.', 'Cualquiera de mi amigo.', 'Cualquiera de esos coches.'], correct: 'Cualquiera de mi amigo.', explanation: 'После <em>cualquiera de</em> требуется существительное во мн. ч. (<em>de mis amigos</em>).' },
      ],
    },

    {
      id: '21.6',
      title: 'Сопоставьте ситуацию и форму',
      type: 'match',
      instructions: 'Какая форма подходит каждой ситуации?',
      pool: ['cualquiera', 'cualquier', 'otro', 'otros', 'unos', 'otra de'],
      questions: [
        { id: 'q1', prompt: 'Перед существительным ед. ч. в значении «любой».',                            correct: 'cualquier' },
        { id: 'q2', prompt: 'После <em>uno / una</em> или после существительного: «любой».',                correct: 'cualquiera' },
        { id: 'q3', prompt: '«Ещё одно/такое же» к существительному ед. ч. м. р.',                            correct: 'otro' },
        { id: 'q4', prompt: '«Ещё несколько» к существительному мн. ч. м. р.',                                correct: 'otros' },
        { id: 'q5', prompt: '«Какие-то» (новые в речи) к существительному мн. ч.',                            correct: 'unos' },
        { id: 'q6', prompt: '«Другая из ...» (с предлогом, перед мн. ч. ж. р.).',                              correct: 'otra de' },
      ],
    },

    {
      id: '21.7',
      title: 'Перепишите без существительного',
      type: 'fill',
      instructions: 'Когда из контекста ясно, о чём речь, существительное можно опустить. Перепишите подчёркнутую часть, оставив только индефинидо.',
      questions: [
        { id: 'q1', prompt: '—¿Tienes manzanas? —Sí, tengo <em>algunas manzanas</em>. → Sí, tengo ___ .',     correct: 'algunas' },
        { id: 'q2', prompt: '—Hay muchos bocadillos. —Toma <em>otro bocadillo</em>. → Toma ___ .',             correct: 'otro' },
        { id: 'q3', prompt: '—¿Te gusta este vino? —Tráeme <em>otro vino</em>, por favor. → Tráeme ___, por favor.', correct: 'otro' },
        { id: 'q4', prompt: '—¿Cuál prefieres? —<em>Cualquier libro</em>. → ___ .',                              correct: 'cualquiera', explanation: 'Без существительного — полная форма.' },
        { id: 'q5', prompt: '—¿Hay sillas libres? —He visto <em>unas sillas</em> en el pasillo. → He visto ___ en el pasillo.', correct: 'unas' },
      ],
    },

    {
      id: '21.8',
      title: 'Расширьте: добавьте de + указание',
      type: 'fill',
      instructions: 'Перепишите фразу, превратив <em>otro / cualquiera</em> + сущ. в конструкцию с <em>de</em>. Образец: <em>otro libro</em> + «из этих» → <em>otro de estos libros</em>.',
      questions: [
        { id: 'q1', prompt: '<em>otra pluma</em> + «из моих» →',                  correct: ['otra de mis plumas'] },
        { id: 'q2', prompt: '<em>cualquiera</em> + «из вас» →',                    correct: ['cualquiera de vosotros', 'cualquiera de ustedes'] },
        { id: 'q3', prompt: '<em>otro pastel</em> + «шоколадных» →',                correct: ['otro de los pasteles de chocolate'] },
        { id: 'q4', prompt: '<em>cualquiera</em> + «из тех ребят» →',               correct: ['cualquiera de esos chicos'] },
        { id: 'q5', prompt: '<em>otro</em> + «из нас» →',                            correct: ['otro de nosotros'] },
      ],
    },

    {
      id: '21.9',
      title: 'Выберите все правильные продолжения',
      type: 'multi',
      instructions: 'Какие из вариантов <strong>грамматичны</strong> в современном испанском?',
      questions: [
        {
          id: 'q1',
          prompt: 'Перед существительным <em>día</em> (ед. ч. м. р.) можно поставить:',
          options: ['un', 'otro', 'un otro', 'cualquier', 'cualquiera', 'otros'],
          correct: ['un', 'otro', 'cualquier'],
          explanation: '«un otro» — нельзя, перед <em>otro</em> артикль не ставится. <em>cualquiera</em> — только после имени или отдельно. <em>otros</em> требует мн. ч.',
        },
        {
          id: 'q2',
          prompt: 'После существительного <em>día</em> можно поставить:',
          options: ['cualquier', 'cualquiera', 'otro', 'unos'],
          correct: ['cualquiera'],
          explanation: 'Только полная форма <em>cualquiera</em> идёт после имени; <em>otro / unos</em> — препозитивны.',
        },
      ],
    },

    {
      id: '21.10',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Послушайте и запишите услышанное (диакритика обязательна).',
      questions: [
        { id: 'q1', prompt: '', audio: 'Tráiganos otra cuchara.',                  correct: ['Tráiganos otra cuchara.', 'Tráiganos otra cuchara'] },
        { id: 'q2', prompt: '', audio: 'Cualquier día voy a verte.',               correct: ['Cualquier día voy a verte.', 'Cualquier día voy a verte'] },
        { id: 'q3', prompt: '', audio: 'Dame un libro cualquiera.',                correct: ['Dame un libro cualquiera.', 'Dame un libro cualquiera'] },
        { id: 'q4', prompt: '', audio: 'Necesito otros dos kilos de patatas.',     correct: ['Necesito otros dos kilos de patatas.', 'Necesito otros dos kilos de patatas'] },
        { id: 'q5', prompt: '', audio: 'Cualquiera de ustedes puede hacerlo.',     correct: ['Cualquiera de ustedes puede hacerlo.', 'Cualquiera de ustedes puede hacerlo'] },
        { id: 'q6', prompt: '', audio: 'Toma otra galleta, por favor.',            correct: ['Toma otra galleta, por favor.', 'Toma otra galleta, por favor'] },
      ],
    },

    {
      id: '21.11',
      title: 'Допишите диалоги',
      type: 'fill',
      instructions: 'Вставьте уместное слово (<em>un / unos / otro / otros / cualquier / cualquiera</em>).',
      questions: [
        { id: 'q1',  prompt: '—¿Tomamos un café? —Vale, pero en ___ sitio. Aquí hace mucho ruido.', correct: 'otro' },
        { id: 'q2',  prompt: '—¿A qué hora paso? —A ___ hora. No tengo planes hoy.',                 correct: 'cualquier' },
        { id: 'q3',  prompt: '—¿Qué pluma usas? —___, no me importa.',                                correct: 'Cualquiera' },
        { id: 'q4',  prompt: '—¿Vive ahí solo? —No, con ___ compañeros de trabajo.',                  correct: 'unos' },
        { id: 'q5',  prompt: '—Esta camisa es estrecha. ¿Tiene ___ talla? — Sí, una M.',              correct: 'otra' },
        { id: 'q6',  prompt: '—Ven a casa cuando quieras: ___ de estos días.',                         correct: 'cualquiera' },
        { id: 'q7',  prompt: '—Quiero comprar ___ regalo para mi sobrina.',                            correct: 'un' },
        { id: 'q8',  prompt: '—¿Cuántas cervezas más? —Pon ___ tres.',                                  correct: 'otras' },
      ],
    },

    {
      id: '21.12',
      title: 'Переведите на испанский',
      type: 'fill',
      instructions: 'Запишите перевод фразы. Знаки препинания обязательны.',
      questions: [
        { id: 'q1', prompt: '«Принесите ещё один стакан, пожалуйста.» (tráigame)', correct: ['Tráigame otro vaso, por favor.', 'Tráigame otro vaso, por favor'] },
        { id: 'q2', prompt: '«Возьми любую книгу с полки.» (toma; estantería)',     correct: ['Toma cualquier libro de la estantería.', 'Toma cualquier libro de la estantería'] },
        { id: 'q3', prompt: '«Любой из нас может ему помочь.» (puede ayudarle)',     correct: ['Cualquiera de nosotros puede ayudarle.', 'Cualquiera de nosotros puede ayudarle'] },
        { id: 'q4', prompt: '«Дай мне другие туфли. Эти мне не нравятся.» (dame; éstos)', correct: ['Dame otros zapatos. Estos no me gustan.', 'Dame otros zapatos. Éstos no me gustan.'] },
        { id: 'q5', prompt: '«Дайте мне любой, мне всё равно.» (es igual; deme)',     correct: ['Es igual. Deme uno cualquiera.', 'Es igual. Deme uno cualquiera'] },
      ],
    },
  ],
};
