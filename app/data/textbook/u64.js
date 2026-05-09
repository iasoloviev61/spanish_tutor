// ============================================================
// Unidad 64 — Contraste entre pretérito indefinido y pretérito imperfecto
// «trabajé / trabajaba» — два прошедших в одном тексте.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u64 = {
  id: 'u64',
  number: 64,
  title: { es: 'trabajé / trabajaba', topic: 'Contraste entre pretérito indefinido y pretérito imperfecto' },
  topicRu: 'Контраст indefinido / imperfecto: событие vs. фон',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Los dos tiempos hablan del pasado. El <strong>pretérito indefinido</strong> presenta la acción como un <strong>hecho</strong> ocurrido en un momento concreto y ya cerrado. El <strong>pretérito imperfecto</strong> presenta una <strong>costumbre</strong> o describe la <strong>situación</strong> que rodeaba ese hecho.',
      ru: 'Оба времени о прошлом. <em>Indefinido</em> подаёт действие как <strong>факт</strong> в закрытой точке («что произошло»). <em>Imperfecto</em> рисует <strong>привычку</strong> или <strong>фон</strong> («каким было», «что обычно»). Разница не в самом действии, а в том, как мы его подаём.',
      examples: [
        { es: 'La semana pasada comí con Luis.', ru: 'На прошлой неделе я обедал с Луисом. (одна точка)' },
        { es: 'De pequeña, comía mucho chocolate.', ru: 'В детстве я ела много шоколада. (привычка)' },
      ],
    },
    {
      type: 'heading',
      text: 'Точка vs. привычка',
    },
    {
      type: 'table',
      caption: 'Сравнение: один и тот же глагол',
      columns: ['Pretérito indefinido (точка)', 'Pretérito imperfecto (привычка)'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>El domingo fuimos al campo.</em>',                  '<em>Cuando era pequeño, íbamos al campo los domingos.</em>'],
        ['<em>Aquella tarde dimos un paseo.</em>',                  '<em>Dábamos un paseo todas las tardes.</em>'],
        ['<em>Ayer comí con Luis.</em>',                              '<em>Comía con Luis casi todos los días.</em>'],
        ['<em>El año pasado fui a Granada.</em>',                       '<em>Antes iba mucho a Granada.</em>'],
      ],
    },
    {
      type: 'heading',
      text: 'Событие vs. фон',
    },
    {
      type: 'rule',
      es: 'Cuando contamos una historia, el <strong>indefinido</strong> aporta los hechos que avanzan la narración (lo que pasó), y el <strong>imperfecto</strong> aporta las <strong>circunstancias</strong> (cómo era todo, qué se hacía a la vez).',
      ru: 'В рассказе <em>indefinido</em> двигает сюжет («и тут случилось…»), а <em>imperfecto</em> описывает обстановку: погоду, внешность, что шло параллельно. Часто пара: «<em>imperfecto</em>, когда <em>indefinido</em>».',
      examples: [
        { es: 'Estábamos en Managua cuando comenzó la huelga.', ru: 'Мы были в Манагуа, когда началась забастовка.' },
        { es: 'Hacía mucho calor y había mucha gente.', ru: 'Было очень жарко и много народу. (общая обстановка)' },
        { es: 'Vi al ladrón. Era alto, tenía los ojos verdes y llevaba una gorra negra.', ru: 'Я видел вора. Он был высокий, с зелёными глазами, в чёрной кепке.' },
      ],
    },
    {
      type: 'heading',
      text: 'Маркеры',
    },
    {
      type: 'table',
      caption: 'Что просит каждое время',
      columns: ['indefinido (закрытая точка)', 'imperfecto (привычка / фон)'],
      colClasses: ['col-pattern', 'col-pattern'],
      rows: [
        ['<strong>ayer</strong>',                       '<strong>antes</strong>'],
        ['<strong>el domingo (pasado)</strong>',          '<strong>todos los domingos</strong>'],
        ['<strong>la semana pasada</strong>',                '<strong>todas las semanas</strong>'],
        ['<strong>aquella tarde</strong>',                     '<strong>todas las tardes</strong>'],
        ['<strong>en 1547, en 2010</strong>',                     '<strong>en aquella época</strong>'],
        ['<strong>hace un mes</strong>',                            '<strong>cuando era pequeño / vivía en…</strong>'],
        ['<strong>de repente</strong>',                                '<strong>siempre, normalmente</strong>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Con <em>cuando</em>, lo más típico es: <strong>imperfecto</strong> en la frase de fondo + <strong>indefinido</strong> en la frase del hecho que interrumpe: <em>Cuando vivía en México, conocí a Luis.</em>',
      ru: 'С союзом <em>cuando</em> чаще всего: <strong>imperfecto</strong> в придаточном (фон) + <strong>indefinido</strong> в главном (событие, которое случилось): <em>Cuando vivía en México, conocí a Luis</em> — пока я жил, познакомился.',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '64.1',
      title: 'Обведите правильную форму',
      type: 'choice',
      instructions: 'Какая форма уместна?',
      questions: [
        { id: 'q1', prompt: 'Ayer no (fui / iba) a trabajar. (Estuve / Estaba) enfermo.',                options: ['fui / estaba', 'iba / estuve', 'fui / estuve', 'iba / estaba'], correct: 'fui / estaba' },
        { id: 'q2', prompt: '¿(Fuiste / Ibas) mucho a la playa cuando (viviste / vivías) en Las Palmas?', options: ['Fuiste / vivías', 'Ibas / vivías', 'Fuiste / viviste', 'Ibas / viviste'], correct: 'Ibas / vivías' },
        { id: 'q3', prompt: 'El domingo pasado (estuvimos / estábamos) en la sierra. No (pudimos / podíamos) esquiar porque no (hubo / había) nieve.', options: ['estuvimos / pudimos / había', 'estábamos / podíamos / hubo', 'estuvimos / podíamos / hubo', 'estábamos / pudimos / había'], correct: 'estuvimos / pudimos / había' },
        { id: 'q4', prompt: 'Cuando (fui / era) joven, (fui / iba) mucho al cine.',                          options: ['fui / fui', 'era / iba', 'era / fui', 'fui / iba'], correct: 'era / iba' },
        { id: 'q5', prompt: 'Carolina (estuvo / estaba) en medio del campo cuando (empezó / empezaba) a llover.', options: ['estuvo / empezó', 'estaba / empezó', 'estuvo / empezaba', 'estaba / empezaba'], correct: 'estaba / empezó' },
        { id: 'q6', prompt: '¿Qué (hiciste / hacías) el sábado pasado?',                                       options: ['hiciste', 'hacías'], correct: 'hiciste' },
        { id: 'q7', prompt: '¿Dónde (estuviste / estabas) cuando (empezó / empezaba) el partido?',              options: ['estuviste / empezó', 'estabas / empezó', 'estuviste / empezaba', 'estabas / empezaba'], correct: 'estabas / empezó' },
        { id: 'q8', prompt: 'Anoche (vi / veía) a Marisa. (Llevó / Llevaba) un vestido precioso.',                options: ['vi / llevaba', 'veía / llevó', 'vi / llevó', 'veía / llevaba'], correct: 'vi / llevaba' },
      ],
    },

    {
      id: '64.2',
      title: 'Раскройте скобки в диалоге',
      type: 'fill',
      instructions: 'Поставьте каждое глагольное слово в indefinido или imperfecto.',
      questions: [
        { id: 'q1', prompt: '¿Cuándo (tú, conocer) ___ a Maruja?',                            correct: ['conociste'] },
        { id: 'q2', prompt: 'La (yo, conocer) ___ cuando (vivir) ___ en Bogotá.',               correct: ['conocí / vivía'] },
        { id: 'q3', prompt: '¿Dónde (ustedes, estar) ___ cuando (yo, llamar) ___ anoche?',       correct: ['estaban / llamé'] },
        { id: 'q4', prompt: '(nosotros, estar) ___ dormidos y no (oír) ___ el teléfono.',          correct: ['Estábamos / oímos'] },
        { id: 'q5', prompt: '¿Qué (tú, hacer) ___ cuando (vivir) ___ en Ecuador?',                   correct: ['hacías / vivías'] },
        { id: 'q6', prompt: '(yo, ser) ___ maestra. No (tener) ___ trabajo allí.',                     correct: ['Era / tenía'] },
      ],
    },

    {
      id: '64.3',
      title: 'История ночи',
      type: 'fill',
      instructions: 'Поставьте глагол в indefinido или imperfecto.',
      questions: [
        { id: 'q1', prompt: 'Cuando yo (tener) ___ once o doce años, mis padres (salir) ___ y me (dejar) ___ solo.', correct: ['tenía / salieron / dejaron'] },
        { id: 'q2', prompt: 'Yo (estar) ___ feliz porque me (sentir) ___ adulto.',                                     correct: ['estaba / sentía'] },
        { id: 'q3', prompt: '(Yo, prepararse) ___ algo para cenar y (ver) ___ la tele.',                                 correct: ['Me preparé / vi'] },
        { id: 'q4', prompt: 'Sobre las doce (irse) ___ a mi habitación.',                                                  correct: ['me fui'] },
        { id: 'q5', prompt: 'De repente, (oír) ___ un ruido en el piso de abajo.',                                            correct: ['oí'] },
        { id: 'q6', prompt: '(Cerrar) ___ con llave la puerta y (escuchar) ___ con miedo.',                                     correct: ['Cerré / escuché'] },
        { id: 'q7', prompt: 'Al cabo de un rato (abrir) ___ la puerta y (bajar) ___ las escaleras.',                              correct: ['abrí / bajé'] },
        { id: 'q8', prompt: '(Haber) ___ algo que (moverse) ___ cerca de una ventana.',                                              correct: ['Había / se movía'] },
        { id: 'q9', prompt: 'De repente, una sombra negra (saltar) ___ sobre mí. (Ser) ___ un gato.',                                  correct: ['saltó / Era'] },
        { id: 'q10', prompt: '(Yo, desmayarse) ___, y cuando (regresar) ___ mis padres, me (encontrar) ___ tirado en el suelo.',         correct: ['Me desmayé / regresaron / encontraron'] },
      ],
    },

    {
      id: '64.4',
      title: 'Точка или привычка?',
      type: 'choice',
      instructions: 'Какое время уместно?',
      questions: [
        { id: 'q1', prompt: 'Ayer ___ con Marta. (comer)',                              options: ['comí', 'comía'], correct: 'comí' },
        { id: 'q2', prompt: 'Cuando estudiaba, ___ con Marta casi todos los días. (comer)', options: ['comí', 'comía'], correct: 'comía' },
        { id: 'q3', prompt: 'El año pasado ___ a Granada dos veces. (ir)',                      options: ['fui', 'iba'], correct: 'fui' },
        { id: 'q4', prompt: 'Antes ___ a Granada todos los veranos. (ir)',                         options: ['fui', 'iba'], correct: 'iba' },
        { id: 'q5', prompt: 'En 2010 ___ en Madrid. (vivir)',                                          options: ['viví', 'vivía'], correct: 'viví' },
        { id: 'q6', prompt: 'Cuando ___ en Madrid, salía mucho. (vivir)',                                  options: ['viví', 'vivía'], correct: 'vivía' },
      ],
    },

    {
      id: '64.5',
      title: 'Match: время ↔ функция',
      type: 'match',
      instructions: 'К каждой характеристике — нужное время.',
      pool: ['Pretérito indefinido', 'Pretérito imperfecto'],
      questions: [
        { id: 'q1', prompt: 'описание персонажа в прошлом',                 correct: 'Pretérito imperfecto' },
        { id: 'q2', prompt: 'событие в закрытой точке',                       correct: 'Pretérito indefinido' },
        { id: 'q3', prompt: 'привычка («каждый день»)',                          correct: 'Pretérito imperfecto' },
        { id: 'q4', prompt: 'момент с <em>de repente</em>',                       correct: 'Pretérito indefinido' },
        { id: 'q5', prompt: 'фон, на котором случилось событие',                    correct: 'Pretérito imperfecto' },
        { id: 'q6', prompt: 'дата года: <em>en 1547</em>, <em>en 2010</em>',          correct: 'Pretérito indefinido' },
      ],
    },

    {
      id: '64.6',
      title: 'Cuando + (фон) + (событие)',
      type: 'fill',
      instructions: 'Заполните пропуски: <em>cuando</em> + imperfecto, в главной — indefinido.',
      questions: [
        { id: 'q1', prompt: 'Cuando (yo, vivir) ___ en México, (conocer) ___ a Luis.',           correct: ['vivía / conocí'] },
        { id: 'q2', prompt: 'Cuando (nosotros, ser) ___ niños, (mudarse) ___ a Madrid.',            correct: ['éramos / nos mudamos'] },
        { id: 'q3', prompt: 'Cuando (tú, dormir) ___, (sonar) ___ el teléfono.',                      correct: ['dormías / sonó'] },
        { id: 'q4', prompt: 'Cuando (ellos, estar) ___ en la playa, (empezar) ___ a llover.',           correct: ['estaban / empezó'] },
        { id: 'q5', prompt: 'Cuando (yo, ir) ___ al colegio, (encontrarse) ___ con mi tío.',              correct: ['iba / me encontré'] },
      ],
    },

    {
      id: '64.7',
      title: 'Multi: разные значения одной формы',
      type: 'multi',
      instructions: 'Отметьте все фразы, где <strong>imperfecto</strong> уместен.',
      questions: [
        {
          id: 'q1',
          prompt: 'Где имперфект на месте?',
          options: [
            'Hacía calor y la gente miraba el cielo.',
            'Ayer hizo mucho calor a las cinco exactas.',
            'En mi infancia íbamos al pueblo cada verano.',
            'En 1999 iba a Cuba un mes exacto.',
            'Cuando entré, todos hablaban a la vez.',
            'Cuando entré, todos hablaron a la vez.',
            'El ladrón era alto y llevaba gafas.',
            'Cervantes era el autor del Quijote en 1605.',
          ],
          correct: [
            'Hacía calor y la gente miraba el cielo.',
            'En mi infancia íbamos al pueblo cada verano.',
            'Cuando entré, todos hablaban a la vez.',
            'El ladrón era alto y llevaba gafas.',
          ],
          explanation: 'Имперфект — фон, описание, привычка. Закрытая дата и одиночное событие — indefinido.',
        },
      ],
    },

    {
      id: '64.8',
      title: 'Найдите ошибку времени',
      type: 'choice',
      instructions: 'В каждом ряду одна форма не подходит к маркеру.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Ayer salí temprano.', 'El lunes pasado salí temprano.', 'Antes salía temprano.', 'Antes salí temprano.'], correct: 'Antes salí temprano.', explanation: '<em>antes</em> — привычка, нужен imperfecto.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Cuando era niño, jugaba mucho.', 'Cuando fui niño, jugaba mucho.', 'De pequeño, jugaba mucho.', 'En aquella época jugábamos en la calle.'], correct: 'Cuando fui niño, jugaba mucho.', explanation: 'Возраст — фон, имперфект: <em>cuando era niño</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['En 1547 nació Cervantes.', 'En 1547 nacía Cervantes.', 'Cervantes era un gran escritor.', 'Cervantes nació en Alcalá.'], correct: 'En 1547 nacía Cervantes.', explanation: 'Дата года — событие, indefinido: <em>nació</em>.' },
      ],
    },

    {
      id: '64.9',
      title: 'Опишите внешность вора',
      type: 'fill',
      instructions: 'Поставьте глагол в имперфекте — это описание.',
      questions: [
        { id: 'q1', prompt: 'El ladrón (ser) ___ alto y delgado.',                  correct: ['era'] },
        { id: 'q2', prompt: '(Tener) ___ el pelo corto y oscuro.',                    correct: ['Tenía'] },
        { id: 'q3', prompt: '(Llevar) ___ gafas de sol y una gorra negra.',             correct: ['Llevaba'] },
        { id: 'q4', prompt: '(Vestir) ___ una camisa azul.',                              correct: ['Vestía'] },
        { id: 'q5', prompt: 'No (parecer) ___ peligroso.',                                  correct: ['parecía'] },
      ],
    },

    {
      id: '64.10',
      title: 'Соберите рассказ',
      type: 'fill',
      instructions: 'Раскройте скобки.',
      questions: [
        { id: 'q1', prompt: 'Aquel verano (yo, estar) ___ en un pueblo de la costa.',                correct: ['estaba'] },
        { id: 'q2', prompt: '(Hacer) ___ mucho calor y (haber) ___ poca gente.',                       correct: ['Hacía / había'] },
        { id: 'q3', prompt: 'Una mañana (yo, levantarse) ___ temprano y (ir) ___ a la playa.',           correct: ['me levanté / fui'] },
        { id: 'q4', prompt: 'Allí (conocer) ___ a una chica que (vender) ___ helados.',                    correct: ['conocí / vendía'] },
        { id: 'q5', prompt: '(Nosotros, hablar) ___ un rato y luego (despedirse) ___.',                       correct: ['Hablamos / nos despedimos'] },
      ],
    },

    {
      id: '64.11',
      title: 'Multi: indefinido на месте',
      type: 'multi',
      instructions: 'Отметьте все фразы, где <strong>indefinido</strong> уместен.',
      questions: [
        {
          id: 'q1',
          prompt: 'Где indefinido правильнее?',
          options: [
            'Ayer me llamó Marta.',
            'Antes me llamaba Marta a menudo.',
            'En 2018 viajé a Bolivia.',
            'En aquella época viajaba a Bolivia.',
            'De repente sonó el timbre.',
            'De repente sonaba el timbre.',
            'Cuando salía de casa, encontré a Luis.',
            'Cuando salí de casa, encontraba a Luis.',
          ],
          correct: [
            'Ayer me llamó Marta.',
            'En 2018 viajé a Bolivia.',
            'De repente sonó el timbre.',
            'Cuando salía de casa, encontré a Luis.',
          ],
          explanation: '<em>de repente</em>, конкретный год, <em>ayer</em> — indefinido. В паре «фон + событие» событие — indefinido.',
        },
      ],
    },

    {
      id: '64.12',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите фразу.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Cuando vivía en México, conocí a Luis.',                        correct: ['Cuando vivía en México, conocí a Luis.', 'Cuando vivía en México, conocí a Luis'] },
        { id: 'q2', prompt: '', audio: 'Estábamos en Managua cuando comenzó la huelga.',                    correct: ['Estábamos en Managua cuando comenzó la huelga.', 'Estábamos en Managua cuando comenzó la huelga'] },
        { id: 'q3', prompt: '', audio: 'Hacía mucho calor y había mucha gente.',                              correct: ['Hacía mucho calor y había mucha gente.', 'Hacía mucho calor y había mucha gente'] },
        { id: 'q4', prompt: '', audio: 'De pequeño, iba al campo todos los domingos.',                          correct: ['De pequeño, iba al campo todos los domingos.', 'De pequeño, iba al campo todos los domingos'] },
        { id: 'q5', prompt: '', audio: 'El año pasado fui a Granada dos veces.',                                  correct: ['El año pasado fui a Granada dos veces.', 'El año pasado fui a Granada dos veces'] },
        { id: 'q6', prompt: '', audio: 'Era alto, tenía los ojos verdes y llevaba una gorra negra.',                correct: ['Era alto, tenía los ojos verdes y llevaba una gorra negra.', 'Era alto, tenía los ojos verdes y llevaba una gorra negra'] },
      ],
    },
  ],
};
