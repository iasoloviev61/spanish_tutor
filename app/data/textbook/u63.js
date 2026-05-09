// ============================================================
// Unidad 63 — Pretérito imperfecto
// «trabajaba, comía, vivía» — формы и употребление имперфекта.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u63 = {
  id: 'u63',
  number: 63,
  title: { es: 'trabajaba, comía, vivía', topic: 'Pretérito imperfecto' },
  topicRu: 'Имперфект: формы и употребление (привычки, описание)',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'El <strong>pretérito imperfecto</strong> tiene dos juegos de terminaciones: para los verbos en <strong>-ar</strong>, <em>-aba</em>; para los verbos en <strong>-er / -ir</strong>, <em>-ía</em>. Las dos personas del singular y la de él/ella coinciden.',
      ru: '<strong>Имперфект</strong> — простое прошедшее с двумя наборами окончаний: <em>-aba</em> для <strong>-ar</strong>, <em>-ía</em> для <strong>-er / -ir</strong>. Формы <em>yo</em>, <em>usted</em> и <em>él/ella</em> всегда совпадают, поэтому в речи местоимение часто называют.',
      examples: [
        { es: 'Cuando era joven, trabajaba en un laboratorio.', ru: 'Когда я был молод, я работал в лаборатории.' },
        { es: 'Los incas cultivaban maíz y patatas.', ru: 'Инки выращивали кукурузу и картошку.' },
      ],
    },
    {
      type: 'heading',
      text: 'Регулярное спряжение',
    },
    {
      type: 'table',
      caption: '-ar: trabajar, -er: comer, -ir: vivir',
      columns: ['Лицо', '-ar (trabajar)', '-er (comer)', '-ir (vivir)'],
      colClasses: ['col-pattern', 'col-result', 'col-result', 'col-result'],
      rows: [
        ['(yo)',                 '<em>trabaj<strong>aba</strong></em>',   '<em>com<strong>ía</strong></em>',     '<em>viv<strong>ía</strong></em>'],
        ['(tú)',                 '<em>trabaj<strong>abas</strong></em>',  '<em>com<strong>ías</strong></em>',    '<em>viv<strong>ías</strong></em>'],
        ['(usted, él, ella)',     '<em>trabaj<strong>aba</strong></em>',   '<em>com<strong>ía</strong></em>',     '<em>viv<strong>ía</strong></em>'],
        ['(nosotros, -as)',       '<em>trabaj<strong>ábamos</strong></em>', '<em>com<strong>íamos</strong></em>',  '<em>viv<strong>íamos</strong></em>'],
        ['(vosotros, -as)',       '<em>trabaj<strong>abais</strong></em>',   '<em>com<strong>íais</strong></em>',    '<em>viv<strong>íais</strong></em>'],
        ['(ustedes, ellos, -as)',  '<em>trabaj<strong>aban</strong></em>',    '<em>com<strong>ían</strong></em>',     '<em>viv<strong>ían</strong></em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Toda la columna de <em>-ía</em> lleva tilde sobre la <strong>í</strong>: <em>comía, vivíamos, dormíais</em>. En la columna <em>-aba</em> sólo <em>nosotros</em> lleva tilde: <em>trabaj<strong>á</strong>bamos</em>.',
      ru: 'Во всём столбце <em>-ía</em> ставится <strong>акут на í</strong>: <em>comía, vivíamos</em>. В столбце <em>-aba</em> только форма <em>nosotros</em> идёт с акутом: <em>trabaj<strong>á</strong>bamos</em>.',
    },
    {
      type: 'heading',
      text: 'Нерегулярные: ser, ir, ver',
    },
    {
      type: 'table',
      caption: 'Только три глагола нерегулярны',
      columns: ['Лицо', 'ser', 'ir', 'ver'],
      colClasses: ['col-pattern', 'col-result', 'col-result', 'col-result'],
      rows: [
        ['(yo)',                 '<strong>era</strong>',     '<strong>iba</strong>',     '<strong>veía</strong>'],
        ['(tú)',                 '<strong>eras</strong>',    '<strong>ibas</strong>',    '<strong>veías</strong>'],
        ['(usted, él, ella)',     '<strong>era</strong>',     '<strong>iba</strong>',     '<strong>veía</strong>'],
        ['(nosotros, -as)',       '<strong>éramos</strong>', '<strong>íbamos</strong>', '<strong>veíamos</strong>'],
        ['(vosotros, -as)',       '<strong>erais</strong>',   '<strong>ibais</strong>',   '<strong>veíais</strong>'],
        ['(ustedes, ellos, -as)',  '<strong>eran</strong>',    '<strong>iban</strong>',    '<strong>veían</strong>'],
      ],
    },
    {
      type: 'heading',
      text: 'Когда употребляем',
    },
    {
      type: 'rule',
      es: 'El imperfecto sirve, ante todo, para hablar de <strong>acciones habituales</strong> en el pasado: lo que pasaba normalmente, lo que se hacía siempre en una época.',
      ru: 'Имперфект описывает <strong>привычки и повторявшиеся действия</strong> в прошлом — то, что было обычным делом «в те времена», «в детстве», «когда жил там». Часто звучит как русское «бывало, ходил…».',
      examples: [
        { es: 'Los aztecas se alimentaban de maíz y frijol.', ru: 'Ацтеки питались кукурузой и фасолью.' },
        { es: 'Cuando éramos jóvenes, íbamos al campo todos los fines de semana.', ru: 'Когда мы были молоды, ездили за город каждые выходные.' },
        { es: 'Cuando vivía en Buenos Aires, iba al teatro todas las semanas.', ru: 'Когда я жил в Буэнос-Айресе, я ходил в театр каждую неделю.' },
      ],
    },
    {
      type: 'rule',
      es: 'También se usa el imperfecto para <strong>describir</strong> personas, cosas o lugares <strong>en el pasado</strong>: cómo eran, qué llevaban, qué tenían alrededor.',
      ru: '<strong>Описание</strong> в прошлом — тоже имперфект: как выглядел человек, что было вокруг, какая стояла погода. Не «что произошло», а «какой была картинка».',
      examples: [
        { es: 'Yo vi al ladrón. Era alto, tenía el pelo corto y llevaba gafas de sol.', ru: 'Я видел вора. Он был высокий, коротко стриженный, в тёмных очках.' },
        { es: 'Esta ciudad era más tranquila antes; no había tanta gente ni tanto tráfico.', ru: 'Раньше этот город был тише; не было столько народу и столько машин.' },
      ],
    },
    {
      type: 'heading',
      text: 'Маркеры',
    },
    {
      type: 'table',
      caption: 'Слова, типичные для имперфекта',
      columns: ['Маркер', 'Смысл'],
      colClasses: ['col-pattern', 'col-result'],
      rows: [
        ['<strong>cuando era pequeño/-a</strong>',     'когда я был ребёнком'],
        ['<strong>cuando vivía en…</strong>',            'когда я жил в…'],
        ['<strong>antes</strong> / <strong>en aquella época</strong>', 'раньше / в те времена'],
        ['<strong>siempre</strong> / <strong>todos los días</strong> / <strong>todas las semanas</strong>', 'привычка'],
        ['<strong>normalmente</strong> / <strong>habitualmente</strong>', 'обычно'],
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '63.1',
      title: 'Окончания -ar / -er / -ir',
      type: 'fill',
      instructions: 'Запишите форму имперфекта.',
      questions: [
        { id: 'q1', prompt: '(yo) trabajar →',           correct: 'trabajaba' },
        { id: 'q2', prompt: '(tú) hablar →',              correct: 'hablabas' },
        { id: 'q3', prompt: '(él) cantar →',               correct: 'cantaba' },
        { id: 'q4', prompt: '(nosotros) estudiar →',        correct: 'estudiábamos', explanation: 'В <em>nosotros</em> на <em>-aba</em> ставится акут.' },
        { id: 'q5', prompt: '(vosotros) jugar →',             correct: 'jugabais' },
        { id: 'q6', prompt: '(ellas) viajar →',                correct: 'viajaban' },
        { id: 'q7', prompt: '(yo) comer →',                     correct: 'comía' },
        { id: 'q8', prompt: '(tú) beber →',                      correct: 'bebías' },
        { id: 'q9', prompt: '(nosotras) vivir →',                 correct: 'vivíamos' },
        { id: 'q10', prompt: '(vosotros) escribir →',              correct: 'escribíais' },
        { id: 'q11', prompt: '(ellos) salir →',                     correct: 'salían' },
        { id: 'q12', prompt: '(yo) dormir →',                        correct: 'dormía' },
      ],
    },

    {
      id: '63.2',
      title: 'Нерегулярные: ser, ir, ver',
      type: 'fill',
      instructions: 'Запишите форму имперфекта.',
      questions: [
        { id: 'q1', prompt: '(yo) ser →',           correct: 'era' },
        { id: 'q2', prompt: '(tú) ser →',            correct: 'eras' },
        { id: 'q3', prompt: '(nosotros) ser →',       correct: 'éramos' },
        { id: 'q4', prompt: '(yo) ir →',                correct: 'iba' },
        { id: 'q5', prompt: '(él) ir →',                  correct: 'iba' },
        { id: 'q6', prompt: '(nosotras) ir →',              correct: 'íbamos' },
        { id: 'q7', prompt: '(ellos) ir →',                   correct: 'iban' },
        { id: 'q8', prompt: '(yo) ver →',                       correct: 'veía' },
        { id: 'q9', prompt: '(tú) ver →',                         correct: 'veías' },
        { id: 'q10', prompt: '(vosotros) ver →',                    correct: 'veíais' },
      ],
    },

    {
      id: '63.3',
      title: 'Cuando era pequeño…',
      type: 'fill',
      instructions: 'Раскройте скобки в имперфекте.',
      questions: [
        { id: 'q1', prompt: 'Cuando (yo, ser) ___ pequeño, siempre (rezar) ___ antes de acostarme.',     correct: ['era / rezaba'] },
        { id: 'q2', prompt: 'Cuando Martín y Pablo (ser) ___ jóvenes, (llevar) ___ camisas de flores.',   correct: ['eran / llevaban'] },
        { id: 'q3', prompt: 'Cuando nos casamos, (vivir) ___ en un piso alquilado.',                       correct: ['vivíamos'] },
        { id: 'q4', prompt: 'De pequeña, Loli (ducharse) ___ sola e (ir) ___ sola al colegio.',            correct: ['se duchaba / iba'] },
        { id: 'q5', prompt: '¿A qué (tú, dedicarse) ___ antes de conocernos?',                              correct: ['te dedicabas'] },
        { id: 'q6', prompt: 'Cuando (nosotros, vivir) ___ en Ciudad de México, (ir) ___ a Acapulco.',         correct: ['vivíamos / íbamos'] },
        { id: 'q7', prompt: '¿Qué (querer) ___ ser de pequeña, María? — (Querer) ___ ser astronauta.',          correct: ['querías / Quería'] },
      ],
    },

    {
      id: '63.4',
      title: 'Древние цивилизации',
      type: 'fill',
      instructions: 'Поставьте глагол в имперфекте: <em>adorar, beber, construir, criar, ser, tener, vivir</em>.',
      questions: [
        { id: 'q1', prompt: 'Los aztecas (construir) ___ pirámides escalonadas.',         correct: ['construían'] },
        { id: 'q2', prompt: 'Los mayas (tener) ___ un calendario muy preciso.',             correct: ['tenían'] },
        { id: 'q3', prompt: 'Los aztecas (vivir) ___ en el centro y sur de México.',          correct: ['vivían'] },
        { id: 'q4', prompt: 'Los incas (adorar) ___ al sol.',                                   correct: ['adoraban'] },
        { id: 'q5', prompt: 'Los aztecas (beber) ___ chocolate.',                                  correct: ['bebían'] },
        { id: 'q6', prompt: 'Los incas (criar) ___ llamas.',                                          correct: ['criaban'] },
        { id: 'q7', prompt: 'Los caribes (ser) ___ cazadores y recolectores.',                          correct: ['eran'] },
      ],
    },

    {
      id: '63.5',
      title: 'Описание места',
      type: 'fill',
      instructions: 'Допишите рассказ в имперфекте.',
      questions: [
        { id: 'q1', prompt: 'El pueblo de mis abuelos (ser) ___ muy pequeño y muy pobre.',                 correct: ['era'] },
        { id: 'q2', prompt: 'Las casas (ser) ___ de adobe y (tener) ___ unas ventanas muy pequeñas.',       correct: ['eran / tenían'] },
        { id: 'q3', prompt: 'La casa de mis abuelos (estar) ___ en las afueras del pueblo, cerca del río.',   correct: ['estaba'] },
        { id: 'q4', prompt: 'Mi abuelo no (tener) ___ casi pelo y siempre (llevar) ___ una boina negra.',     correct: ['tenía / llevaba'] },
        { id: 'q5', prompt: 'Mi abuela (tener) ___ el pelo gris.',                                              correct: ['tenía'] },
        { id: 'q6', prompt: 'Los veranos en el pueblo (ser) ___ muy divertidos.',                                  correct: ['eran'] },
      ],
    },

    {
      id: '63.6',
      title: 'Маркер → имперфект?',
      type: 'choice',
      instructions: 'Какой маркер просит имперфект?',
      questions: [
        { id: 'q1', prompt: '<em>cuando era pequeño</em>',       options: ['Pretérito imperfecto', 'Pretérito indefinido'], correct: 'Pretérito imperfecto' },
        { id: 'q2', prompt: '<em>ayer</em>',                      options: ['Pretérito imperfecto', 'Pretérito indefinido'], correct: 'Pretérito indefinido' },
        { id: 'q3', prompt: '<em>antes</em>',                       options: ['Pretérito imperfecto', 'Pretérito indefinido'], correct: 'Pretérito imperfecto' },
        { id: 'q4', prompt: '<em>todas las semanas (en aquella época)</em>', options: ['Pretérito imperfecto', 'Pretérito indefinido'], correct: 'Pretérito imperfecto' },
        { id: 'q5', prompt: '<em>el lunes pasado</em>',                options: ['Pretérito imperfecto', 'Pretérito indefinido'], correct: 'Pretérito indefinido' },
        { id: 'q6', prompt: '<em>cuando vivía en…</em>',                options: ['Pretérito imperfecto', 'Pretérito indefinido'], correct: 'Pretérito imperfecto' },
      ],
    },

    {
      id: '63.7',
      title: 'Multi: что описание, а что событие?',
      type: 'multi',
      instructions: 'Отметьте все фразы, где <strong>имперфект</strong> уместен (описание / привычка).',
      questions: [
        {
          id: 'q1',
          prompt: 'Имперфект здесь уместен:',
          options: [
            'Cuando era niño, jugaba en la calle.',
            'Ayer jugaba en la calle.',
            'Mi abuela tenía el pelo blanco.',
            'Mi abuela tuvo el pelo blanco una hora.',
            'Los aztecas vivían en México.',
            'Los aztecas vivieron en México hace mil años exactamente.',
            'Antes había menos coches.',
            'En 2020 había menos coches.',
          ],
          correct: [
            'Cuando era niño, jugaba en la calle.',
            'Mi abuela tenía el pelo blanco.',
            'Los aztecas vivían en México.',
            'Antes había menos coches.',
          ],
          explanation: 'Имперфект — для общей картины, привычки, описания. Точная датировка тянет к indefinido.',
        },
      ],
    },

    {
      id: '63.8',
      title: 'Match: лицо ↔ форма',
      type: 'match',
      instructions: 'Соедините форму с лицом и числом.',
      pool: ['(yo)', '(tú)', '(él/ella)', '(nosotros)', '(vosotros)', '(ellos)'],
      questions: [
        { id: 'q1', prompt: '<em>trabajaba</em>',     correct: '(yo)' },
        { id: 'q2', prompt: '<em>comías</em>',          correct: '(tú)' },
        { id: 'q3', prompt: '<em>vivían</em>',           correct: '(ellos)' },
        { id: 'q4', prompt: '<em>éramos</em>',            correct: '(nosotros)' },
        { id: 'q5', prompt: '<em>ibais</em>',              correct: '(vosotros)' },
        { id: 'q6', prompt: '<em>veía</em>',                correct: '(él/ella)' },
      ],
    },

    {
      id: '63.9',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['comía', 'comías', 'comíamos', 'comíaba'], correct: 'comíaba', explanation: '<em>comer</em> — <em>-ía</em> для всех лиц: <em>comía, comías, comíamos…</em>' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['era', 'eras', 'éramos', 'iramos'],          correct: 'iramos', explanation: '<em>nosotros</em> — <em>éramos</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['iba', 'ibas', 'iba', 'ibanos'],               correct: 'ibanos', explanation: 'Правильно <em>íbamos</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['veía', 'veías', 'veian', 'veíamos'],            correct: 'veian', explanation: 'Без акута на í не бывает: <em>veían</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['trabajábamos', 'trabajabamos', 'trabajaban', 'trabajaba'], correct: 'trabajabamos', explanation: 'В <em>nosotros</em> акут обязателен: <em>trabaj<strong>á</strong>bamos</em>.' },
      ],
    },

    {
      id: '63.10',
      title: 'Привычки в детстве',
      type: 'fill',
      instructions: 'Поставьте глагол в имперфекте.',
      questions: [
        { id: 'q1', prompt: 'Cuando yo (tener) ___ siete años, (vivir) ___ en un pueblo.',         correct: ['tenía / vivía'] },
        { id: 'q2', prompt: 'Mis hermanos y yo (ir) ___ al colegio andando.',                       correct: ['íbamos'] },
        { id: 'q3', prompt: 'Por la tarde (jugar) ___ en el patio.',                                  correct: ['jugábamos'] },
        { id: 'q4', prompt: 'Mi madre nos (preparar) ___ la merienda.',                                  correct: ['preparaba'] },
        { id: 'q5', prompt: 'Los domingos (nosotros, ver) ___ películas con la familia.',                  correct: ['veíamos'] },
      ],
    },

    {
      id: '63.11',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите фразу с диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Cuando era joven, trabajaba en un laboratorio.',     correct: ['Cuando era joven, trabajaba en un laboratorio.', 'Cuando era joven, trabajaba en un laboratorio'] },
        { id: 'q2', prompt: '', audio: 'Los incas cultivaban maíz y patatas.',                   correct: ['Los incas cultivaban maíz y patatas.', 'Los incas cultivaban maíz y patatas'] },
        { id: 'q3', prompt: '', audio: 'Antes había menos coches en la ciudad.',                    correct: ['Antes había menos coches en la ciudad.', 'Antes había menos coches en la ciudad'] },
        { id: 'q4', prompt: '', audio: 'Mi abuela tenía el pelo blanco.',                              correct: ['Mi abuela tenía el pelo blanco.', 'Mi abuela tenía el pelo blanco'] },
        { id: 'q5', prompt: '', audio: 'Íbamos al cine todos los sábados.',                              correct: ['Íbamos al cine todos los sábados.', 'Íbamos al cine todos los sábados'] },
        { id: 'q6', prompt: '', audio: 'Éramos jóvenes y veíamos el mundo distinto.',                      correct: ['Éramos jóvenes y veíamos el mundo distinto.', 'Éramos jóvenes y veíamos el mundo distinto'] },
      ],
    },
  ],
};
