// ============================================================
// Unidad 65 — estaba + gerundio y contraste con el pretérito indefinido
// «estaba trabajando / trabajé» — длящееся прошлое и его прерывание.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u65 = {
  id: 'u65',
  number: 65,
  title: { es: 'estaba trabajando / trabajé', topic: 'Estaba + gerundio y contraste con el pretérito indefinido' },
  topicRu: 'Длящееся прошлое estaba + герундий и его прерывание',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'La perífrasis <strong>estaba + gerundio</strong> se construye con el pretérito imperfecto del verbo <em>estar</em> y el gerundio del verbo principal: <em>estaba trabajando, estabas comiendo, estábamos viviendo…</em>',
      ru: 'Конструкция <strong>estaba + герундий</strong> = «был занят чем-то в прошлом». Берётся имперфект <em>estar</em> + форма на <em>-ando / -iendo</em>: <em>estaba trabajando, estabas comiendo, estábamos viviendo…</em>',
      examples: [
        { es: 'Cuando entró el jefe, Bruno estaba leyendo el periódico.', ru: 'Когда вошёл начальник, Бруно читал газету.' },
        { es: 'A las ocho estaba regando los rosales.', ru: 'В восемь я как раз поливал розы.' },
      ],
    },
    {
      type: 'heading',
      text: 'Спряжение estar (imperfecto)',
    },
    {
      type: 'table',
      caption: 'estaba + gerundio',
      columns: ['Лицо', 'estar (imperfecto)', 'gerundio'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['(yo)',                  '<strong>estaba</strong>',     '<em>trabajando, comiendo, viviendo…</em>'],
        ['(tú)',                  '<strong>estabas</strong>',    '—'],
        ['(usted, él, ella)',      '<strong>estaba</strong>',     '—'],
        ['(nosotros, -as)',        '<strong>estábamos</strong>', '—'],
        ['(vosotros, -as)',        '<strong>estabais</strong>',   '—'],
        ['(ustedes, ellos, -as)',   '<strong>estaban</strong>',    '—'],
      ],
    },
    {
      type: 'heading',
      text: 'Когда употребляем',
    },
    {
      type: 'rule',
      es: 'Se usa <strong>estaba + gerundio</strong> para una acción que <strong>estaba en desarrollo</strong> en un momento concreto del pasado: ayer a las seis, cuando ocurrió algo, mientras hablábamos…',
      ru: 'Имперфект-прогрессив выделяет, что действие <strong>в данный момент в прошлом было в разгаре</strong>: «в это время я как раз делал…». Часто появляется в паре с <em>cuando</em> или с указанием часа.',
      examples: [
        { es: '—Anoche te llamé a las ocho. ¿Dónde estabas? —Estaba en el jardín. Estaba regando los rosales.', ru: '— Вчера вечером я звонил тебе в восемь. Где ты был? — В саду. Я поливал розы.' },
        { es: 'Cuando llegó el presidente, yo estaba aparcando.', ru: 'Когда приехал президент, я как раз парковался.' },
      ],
    },
    {
      type: 'heading',
      text: 'Контраст: фон в развитии vs. короткое событие',
    },
    {
      type: 'table',
      caption: 'estaba + gerundio (фон) / indefinido (событие)',
      columns: ['Действие в разгаре', 'Действие, которое прервало'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>Estábamos comiendo…</em>',                       '<em>…cuando llegaron los amigos de Ana.</em>'],
        ['<em>Yo estaba leyendo en el sofá…</em>',                '<em>…cuando sonó el teléfono.</em>'],
        ['<em>Mar y Luis estaban cruzando la calle…</em>',          '<em>…cuando vieron el accidente.</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'Para una <strong>secuencia de hechos</strong> uno tras otro se usa <strong>el pretérito indefinido</strong>: <em>Comimos cuando llegaron los amigos de Ana</em> = primero llegaron, después comimos.',
      ru: 'Для <strong>последовательности</strong> событий («сначала это, потом то») берётся <em>indefinido</em>: <em>Comimos cuando llegaron los amigos</em> — сначала пришли друзья, потом сели есть. <em>Estábamos comiendo cuando llegaron</em> — ели уже, когда они пришли.',
      examples: [
        { es: 'Estábamos comiendo cuando llegaron los amigos.', ru: 'Мы как раз ели, когда пришли друзья. (фон + событие)' },
        { es: 'Comimos cuando llegaron los amigos.', ru: 'Мы поели, когда пришли друзья. (последовательность)' },
      ],
    },
    {
      type: 'atencion',
      es: 'No se suele usar <em>estaba + gerundio</em> con verbos como <strong>comprender, entender, saber, querer, necesitar, amar, preferir, odiar, parecer, tener, llevar, ir, venir</strong>. En su lugar se usa el <strong>pretérito imperfecto</strong>.',
      ru: 'С глаголами состояния и движения <em>estaba + герундий</em> обычно не идёт. Это <em>comprender, entender, saber, querer, necesitar, amar, preferir, odiar, parecer, tener, llevar, ir, venir</em>. Вместо «estaba teniendo fiebre» — просто <em>tenía fiebre</em>.',
      examples: [
        { es: '<s>Estaba teniendo</s> algo de fiebre cuando me llamaste. → Tenía algo de fiebre cuando me llamaste.', ru: 'У меня была температура, когда ты позвонил.' },
        { es: '<s>Estaba yendo</s> al colegio. → Iba al colegio.', ru: 'Я шёл в школу.' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '65.1',
      title: 'Соберите estaba + gerundio',
      type: 'fill',
      instructions: 'Запишите конструкцию целиком. Образец: <em>(yo, leer) → estaba leyendo</em>.',
      questions: [
        { id: 'q1', prompt: '(yo, comprar el periódico) →',          correct: ['estaba comprando el periódico'] },
        { id: 'q2', prompt: '(tú, esperar el autobús) →',              correct: ['estabas esperando el autobús'] },
        { id: 'q3', prompt: '(él, hablar por teléfono) →',              correct: ['estaba hablando por teléfono'] },
        { id: 'q4', prompt: '(nosotros, cruzar la calle) →',              correct: ['estábamos cruzando la calle'] },
        { id: 'q5', prompt: '(ellos, mirar un escaparate) →',                correct: ['estaban mirando un escaparate'] },
        { id: 'q6', prompt: '(ella, leer el periódico) →',                     correct: ['estaba leyendo el periódico'] },
        { id: 'q7', prompt: '(yo, echar una carta) →',                            correct: ['estaba echando una carta'] },
        { id: 'q8', prompt: '(vosotras, aparcar el coche) →',                        correct: ['estabais aparcando el coche'] },
      ],
    },

    {
      id: '65.2',
      title: '«В этот момент я как раз…»',
      type: 'fill',
      instructions: 'Дайте ответ свидетеля по образцу. Образец: <em>(comprar el periódico) → En ese momento estaba comprando el periódico.</em>',
      questions: [
        { id: 'q1', prompt: '(esperar el autobús) → En ese momento ___.',          correct: ['estaba esperando el autobús'] },
        { id: 'q2', prompt: '(hablar por teléfono) → En ese momento ___.',           correct: ['estaba hablando por teléfono'] },
        { id: 'q3', prompt: '(cruzar la calle) → En ese momento mis padres ___.',     correct: ['estaban cruzando la calle'] },
        { id: 'q4', prompt: '(leer el periódico) → En ese momento Tomás ___.',          correct: ['estaba leyendo el periódico'] },
        { id: 'q5', prompt: '(mirar un escaparate) → En ese momento ___.',                correct: ['estaba mirando un escaparate'] },
      ],
    },

    {
      id: '65.3',
      title: 'estaba + gerundio или indefinido?',
      type: 'fill',
      instructions: 'Поставьте глагол в нужную форму.',
      questions: [
        { id: 'q1', prompt: 'Cuando me (ver) ___ Sofía, (yo, hablar) ___ con unas amigas.',           correct: ['vio / estaba hablando'] },
        { id: 'q2', prompt: '¿Qué (tú, hacer) ___ cuando (apagarse) ___ la luz?',                       correct: ['estabas haciendo / se apagó'] },
        { id: 'q3', prompt: 'La clase (empezar) ___ cuando (nosotros, llegar) ___.',                      correct: ['empezó / llegamos'] },
        { id: 'q4', prompt: '¿(Nevar) ___ cuando (usted, salir) ___?',                                       correct: ['Estaba nevando / salió'] },
        { id: 'q5', prompt: 'Pedrito (caerse) ___ y (romperse) ___ una pierna cuando (jugar) ___ al fútbol.',  correct: ['se cayó / se rompió / estaba jugando', 'se cayó / se rompió / jugaba'] },
        { id: 'q6', prompt: '(Yo, ducharse) ___ cuando (sonar) ___ el teléfono.',                                 correct: ['Me estaba duchando / sonó', 'Estaba duchándome / sonó'] },
        { id: 'q7', prompt: 'Cuando (llegar) ___ el jefe, (irse) ___ Fina y Celia.',                                 correct: ['llegó / se iban', 'llegó / se fueron'], explanation: 'Допустимы оба прочтения — фон или последовательность.' },
      ],
    },

    {
      id: '65.4',
      title: 'Обведите правильную форму',
      type: 'choice',
      instructions: 'Какая форма уместна?',
      questions: [
        { id: 'q1', prompt: '¿Qué te (pasaba / estaba pasando) anoche? (Tenías / Estabas teniendo) mucho sueño.',  options: ['pasaba / Tenías', 'estaba pasando / Estabas teniendo', 'pasaba / Estabas teniendo', 'estaba pasando / Tenías'], correct: 'pasaba / Tenías', explanation: '<em>tener</em> и <em>pasar</em> состояния — имперфект, без герундия.' },
        { id: 'q2', prompt: '¿Adónde (ibas / estabas yendo) ayer cuando te vio Tere?',                                options: ['ibas', 'estabas yendo'], correct: 'ibas', explanation: '<em>ir</em> не идёт с <em>estaba + gerundio</em>.' },
        { id: 'q3', prompt: '¿Dónde estaban tus hermanas la semana pasada? (Viajaban / Estaban viajando) por Argentina.', options: ['Viajaban', 'Estaban viajando'], correct: 'Estaban viajando' },
        { id: 'q4', prompt: 'Cuando nos encontramos con Nacho, (llevaba / estaba llevando) un poncho chileno.',         options: ['llevaba', 'estaba llevando'], correct: 'llevaba', explanation: '<em>llevar</em> в значении «быть одетым» — имперфект.' },
        { id: 'q5', prompt: '(Parecía / Estaba pareciendo) un mapuche.',                                                  options: ['Parecía', 'Estaba pareciendo'], correct: 'Parecía' },
        { id: 'q6', prompt: '¿De dónde (venían / estaban viniendo) cuando tuvieron el accidente?',                          options: ['venían', 'estaban viniendo'], correct: 'venían', explanation: '<em>venir</em> не идёт с прогрессивом.' },
        { id: 'q7', prompt: 'Fui a ver a Anita porque (necesitaba / estaba necesitando) su ayuda.',                            options: ['necesitaba', 'estaba necesitando'], correct: 'necesitaba' },
      ],
    },

    {
      id: '65.5',
      title: 'Можно ли estaba + gerundio?',
      type: 'multi',
      instructions: 'Отметьте все глаголы, с которыми <strong>обычно НЕ употребляют</strong> <em>estaba + gerundio</em>.',
      questions: [
        {
          id: 'q1',
          prompt: 'Глаголы, которые сопротивляются прогрессиву:',
          options: ['comer', 'comprender', 'leer', 'saber', 'estudiar', 'querer', 'cantar', 'preferir', 'tener', 'jugar', 'ir', 'venir'],
          correct: ['comprender', 'saber', 'querer', 'preferir', 'tener', 'ir', 'venir'],
          explanation: 'Глаголы состояний и движения. С ними используют простой имперфект: <em>tenía, iba, sabía…</em>',
        },
      ],
    },

    {
      id: '65.6',
      title: 'Last Friday at 8 (фон + событие)',
      type: 'fill',
      instructions: 'Раскройте скобки. Используйте <em>estaba + gerundio</em> для фона и indefinido для события.',
      questions: [
        { id: 'q1', prompt: 'Cuando (sonar) ___ el timbre, (yo, ducharse) ___.',                       correct: ['sonó / me estaba duchando', 'sonó / estaba duchándome'] },
        { id: 'q2', prompt: 'Cuando (llamar) ___ Ana, (nosotros, cenar) ___.',                            correct: ['llamó / estábamos cenando'] },
        { id: 'q3', prompt: 'Cuando (entrar) ___ el profesor, los alumnos (hablar) ___.',                   correct: ['entró / estaban hablando'] },
        { id: 'q4', prompt: 'Cuando (caerse) ___ Pedro, (jugar) ___ con sus amigos.',                          correct: ['se cayó / estaba jugando'] },
        { id: 'q5', prompt: '(Llover) ___ mucho cuando (yo, salir) ___ de casa.',                                correct: ['Estaba lloviendo / salí'] },
      ],
    },

    {
      id: '65.7',
      title: 'Match: глагол ↔ герундий',
      type: 'match',
      instructions: 'Соедините инфинитив с герундием.',
      pool: ['comiendo', 'leyendo', 'durmiendo', 'viniendo', 'cruzando', 'oyendo'],
      questions: [
        { id: 'q1', prompt: '<em>comer</em>',     correct: 'comiendo' },
        { id: 'q2', prompt: '<em>leer</em>',       correct: 'leyendo' },
        { id: 'q3', prompt: '<em>dormir</em>',      correct: 'durmiendo' },
        { id: 'q4', prompt: '<em>oír</em>',          correct: 'oyendo' },
        { id: 'q5', prompt: '<em>cruzar</em>',         correct: 'cruzando' },
        { id: 'q6', prompt: '<em>venir</em>',           correct: 'viniendo' },
      ],
    },

    {
      id: '65.8',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма не нужна.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Estaba leyendo cuando sonó.', 'Estaba comiendo cuando llamó.', 'Estaba teniendo fiebre cuando llamó.', 'Estaba escribiendo cuando entró.'], correct: 'Estaba teniendo fiebre cuando llamó.', explanation: 'С <em>tener</em> — простой имперфект: <em>Tenía fiebre cuando llamó</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Estaba yendo al colegio.', 'Iba al colegio.', 'Iba a clase cuando vino mi tío.', 'Estaba caminando hacia el colegio.'], correct: 'Estaba yendo al colegio.', explanation: 'С <em>ir</em> прогрессив не используют.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Comimos cuando llegaron los amigos.', 'Estábamos comiendo cuando llegaron los amigos.', 'Comíamos cuando llegaron los amigos.', 'Comíamos cuando estaban llegando los amigos.'], correct: 'Comíamos cuando estaban llegando los amigos.', explanation: '<em>llegar</em> — точечное событие, в этой фразе нужен indefinido.' },
      ],
    },

    {
      id: '65.9',
      title: 'Multi: фон или последовательность?',
      type: 'multi',
      instructions: 'Отметьте все фразы, где <strong>estaba + gerundio</strong> уместен (=в момент Х было в разгаре).',
      questions: [
        {
          id: 'q1',
          prompt: 'Где estaba + gerundio на месте?',
          options: [
            'Cuando entró, todos estaban hablando a la vez.',
            'Cuando entró, todos hablaron a la vez.',
            'A las cinco en punto estaba leyendo en el sofá.',
            'A las cinco en punto leí un capítulo entero.',
            'Estaba estudiando para el examen toda la tarde.',
            'Estuve estudiando para el examen toda la tarde.',
            'Estábamos sabiendo la respuesta.',
            'Sabíamos la respuesta.',
          ],
          correct: [
            'Cuando entró, todos estaban hablando a la vez.',
            'A las cinco en punto estaba leyendo en el sofá.',
            'Estaba estudiando para el examen toda la tarde.',
            'Sabíamos la respuesta.',
          ],
          explanation: '«Sabíamos» правильно (с <em>saber</em> прогрессив не идёт), <em>Estaba sabiendo</em> — нет.',
        },
      ],
    },

    {
      id: '65.10',
      title: 'Из imperfecto в estaba + gerundio',
      type: 'fill',
      instructions: 'Замените глагол на конструкцию <em>estaba + gerundio</em>, чтобы подчеркнуть «в разгаре».',
      questions: [
        { id: 'q1', prompt: 'Yo leía cuando llegó. → Yo ___ cuando llegó.',                  correct: ['estaba leyendo'] },
        { id: 'q2', prompt: 'Mi madre cocinaba. → Mi madre ___.',                              correct: ['estaba cocinando'] },
        { id: 'q3', prompt: 'Los niños jugaban en el parque. → Los niños ___ en el parque.',     correct: ['estaban jugando'] },
        { id: 'q4', prompt: 'Tú dormías a las once. → Tú ___ a las once.',                          correct: ['estabas durmiendo'] },
        { id: 'q5', prompt: 'Nosotros cenábamos. → Nosotros ___.',                                    correct: ['estábamos cenando'] },
      ],
    },

    {
      id: '65.11',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите фразу.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Estaba regando los rosales.',                                       correct: ['Estaba regando los rosales.', 'Estaba regando los rosales'] },
        { id: 'q2', prompt: '', audio: 'Cuando entró el jefe, Bruno estaba leyendo el periódico.',           correct: ['Cuando entró el jefe, Bruno estaba leyendo el periódico.', 'Cuando entró el jefe, Bruno estaba leyendo el periódico'] },
        { id: 'q3', prompt: '', audio: 'Estábamos comiendo cuando llegaron los amigos.',                       correct: ['Estábamos comiendo cuando llegaron los amigos.', 'Estábamos comiendo cuando llegaron los amigos'] },
        { id: 'q4', prompt: '', audio: 'Tenía algo de fiebre cuando me llamaste.',                                correct: ['Tenía algo de fiebre cuando me llamaste.', 'Tenía algo de fiebre cuando me llamaste'] },
        { id: 'q5', prompt: '', audio: 'A las ocho estaba aparcando el coche.',                                      correct: ['A las ocho estaba aparcando el coche.', 'A las ocho estaba aparcando el coche'] },
        { id: 'q6', prompt: '', audio: '¿Qué hacías cuando se apagó la luz?',                                          correct: ['¿Qué hacías cuando se apagó la luz?'] },
      ],
    },
  ],
};
