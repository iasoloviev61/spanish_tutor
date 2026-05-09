// ============================================================
// Unidad 60 — Pretérito perfecto de indicativo (1)
// «He trabajado» — настоящее совершённое.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u60 = {
  id: 'u60',
  number: 60,
  title: { es: 'he trabajado', topic: 'Pretérito perfecto de indicativo (1)' },
  topicRu: 'Настоящее совершённое: формы и базовое употребление',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'El <strong>pretérito perfecto de indicativo</strong> se forma con el <strong>presente de <em>haber</em></strong> + <strong>participio</strong> del verbo principal.',
      ru: '<strong>Настоящее совершённое</strong> (<em>pretérito perfecto</em>) образуется как «<em>haber</em> в presente + причастие» (participio).',
      examples: [
        { es: 'Hoy he tenido un día agotador.', ru: 'Сегодня у меня был очень утомительный день.' },
        { es: 'Me he levantado temprano.', ru: 'Я встал рано.' },
        { es: 'Por la tarde he hecho la compra.', ru: 'После обеда сделал покупки.' },
      ],
    },
    {
      type: 'heading',
      text: 'Спряжение haber + participio',
    },
    {
      type: 'table',
      caption: 'haber (presente) + participio',
      columns: ['Лицо', 'haber', 'participio'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['(yo)',                 '<strong>he</strong>',     '<em>trabajado, comido, vivido…</em>'],
        ['(tú)',                 '<strong>has</strong>',    '—'],
        ['(usted, él, ella)',    '<strong>ha</strong>',     '—'],
        ['(nosotros, -as)',      '<strong>hemos</strong>',  '—'],
        ['(vosotros, -as)',      '<strong>habéis</strong>', '—'],
        ['(ustedes, ellos, -as)', '<strong>han</strong>',    '—'],
      ],
    },
    {
      type: 'rule',
      es: 'El <strong>participio regular</strong>: -ar → <strong>-ado</strong>, -er / -ir → <strong>-ido</strong>. Y nunca cambia de género ni de número.',
      ru: 'Обычное причастие: <em>-ar</em> → <strong>-ado</strong>, <em>-er / -ir</em> → <strong>-ido</strong>. После <em>haber</em> оно <strong>не меняется</strong> ни по роду, ни по числу: <em>he comido, hemos comido, han comido</em>.',
      examples: [
        { es: 'trabajar → trabajado',  ru: 'работал' },
        { es: 'comer → comido',        ru: 'ел' },
        { es: 'vivir → vivido',        ru: 'жил' },
      ],
    },
    {
      type: 'atencion',
      es: '<strong>haber y participio van siempre juntos</strong>. Entre ellos no se pone nada — los pronombres átonos van delante: <em>Me he levantado tarde</em>, NO «<em>he me levantado</em>», NO «<em>he levantado me</em>».',
      ru: '<em>haber + participio</em> — нерасторжимая пара. Возвратное / прямое дополнение ставится <strong>перед</strong> <em>haber</em>: <em>Me he levantado tarde</em>. Между <em>he</em> и <em>levantado</em> ничего не вставляется.',
    },
    {
      type: 'heading',
      text: 'Когда употребляем',
    },
    {
      type: 'rule',
      es: 'Pretérito perfecto se usa para acciones que han ocurrido en un <strong>período de tiempo que llega hasta el presente</strong>: <em>hoy, este año, este mes, esta semana, esta mañana, últimamente</em>.',
      ru: 'Употребляем, когда событие случилось <strong>в отрезке времени, который тянется до сих пор</strong>: <em>hoy, esta semana, este mes, este año, esta mañana, últimamente</em>.',
      examples: [
        { es: 'Hoy me he levantado tarde.', ru: 'Сегодня я встал поздно.' },
        { es: 'Esta semana Lara ha salido todas las noches.', ru: 'На этой неделе Лара выходила каждый вечер.' },
        { es: 'Este mes hemos ido al cine tres veces.', ru: 'В этом месяце мы три раза ходили в кино.' },
        { es: 'Este año no ha hecho mucho frío.', ru: 'В этом году не было особо холодно.' },
      ],
    },
    {
      type: 'rule',
      es: 'También se usa para acciones <strong>recién ocurridas</strong> (con <em>hace poco, hace un momento, hace un rato</em>) o para <strong>noticias recientes</strong>.',
      ru: 'Также для совсем недавних событий (с <em>hace poco, hace un momento, hace un rato</em>) и для свежих новостей.',
      examples: [
        { es: 'He estado con Carlos hace un momento.', ru: 'Я только что был с Карлосом.' },
        { es: 'He aprendido a jugar al golf hace poco.', ru: 'Недавно научился играть в гольф.' },
        { es: '—¿Qué ha pasado? —Ha dimitido el presidente.', ru: '— Что случилось? — Президент подал в отставку.' },
      ],
    },
    {
      type: 'heading',
      text: 'Сравнение с indefinido',
    },
    {
      type: 'table',
      caption: 'Один и тот же глагол — два прошедших',
      columns: ['Pretérito perfecto (отрезок до сейчас)', 'Pretérito indefinido (закрытая точка)'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>Hoy he comido paella.</em>',                 '<em>Ayer comí paella.</em>'],
        ['<em>Esta semana he trabajado mucho.</em>',         '<em>La semana pasada trabajé mucho.</em>'],
        ['<em>Este año he viajado tres veces.</em>',          '<em>El año pasado viajé tres veces.</em>'],
        ['<em>Este mes ha llovido poco.</em>',                 '<em>En febrero llovió poco.</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'En gran parte de Hispanoamérica y en algunas regiones de España se prefiere el <strong>indefinido</strong> también para hablar de <em>hoy</em>: <em>—¿Has comido? = ¿Comiste?</em>',
      ru: 'В большей части Латинской Америки и в части Испании <em>perfecto</em> используют реже — даже про сегодня могут сказать <em>indefinido</em>: <em>¿Comiste hoy?</em>',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '60.1',
      title: 'Спряжение haber',
      type: 'fill',
      instructions: 'Запишите форму глагола <em>haber</em> в presente.',
      questions: [
        { id: 'q1', prompt: '(yo) →',         correct: 'he' },
        { id: 'q2', prompt: '(tú) →',         correct: 'has' },
        { id: 'q3', prompt: '(él) →',         correct: 'ha' },
        { id: 'q4', prompt: '(nosotras) →',    correct: 'hemos' },
        { id: 'q5', prompt: '(vosotros) →',    correct: 'habéis' },
        { id: 'q6', prompt: '(ellos) →',       correct: 'han' },
      ],
    },

    {
      id: '60.2',
      title: 'Образуйте participio (regular)',
      type: 'fill',
      instructions: '-ar → -ado, -er / -ir → -ido.',
      questions: [
        { id: 'q1', prompt: '<em>trabajar</em> →', correct: 'trabajado' },
        { id: 'q2', prompt: '<em>comer</em> →',     correct: 'comido' },
        { id: 'q3', prompt: '<em>vivir</em> →',     correct: 'vivido' },
        { id: 'q4', prompt: '<em>hablar</em> →',    correct: 'hablado' },
        { id: 'q5', prompt: '<em>beber</em> →',     correct: 'bebido' },
        { id: 'q6', prompt: '<em>salir</em> →',     correct: 'salido' },
        { id: 'q7', prompt: '<em>cantar</em> →',    correct: 'cantado' },
        { id: 'q8', prompt: '<em>aprender</em> →',  correct: 'aprendido' },
        { id: 'q9', prompt: '<em>dormir</em> →',    correct: 'dormido' },
      ],
    },

    {
      id: '60.3',
      title: 'Соберите perfecto',
      type: 'fill',
      instructions: 'Запишите фразу целиком: «<em>haber + participio</em>». Образец: <em>(yo, comer)</em> → <em>he comido</em>.',
      questions: [
        { id: 'q1', prompt: '(yo, trabajar) →',        correct: ['he trabajado'] },
        { id: 'q2', prompt: '(tú, hablar) →',           correct: ['has hablado'] },
        { id: 'q3', prompt: '(ella, comer) →',          correct: ['ha comido'] },
        { id: 'q4', prompt: '(nosotros, vivir) →',       correct: ['hemos vivido'] },
        { id: 'q5', prompt: '(vosotros, salir) →',        correct: ['habéis salido'] },
        { id: 'q6', prompt: '(ellos, beber) →',           correct: ['han bebido'] },
        { id: 'q7', prompt: '(yo, dormir) →',              correct: ['he dormido'] },
        { id: 'q8', prompt: '(ustedes, aprender) →',        correct: ['han aprendido'] },
      ],
    },

    {
      id: '60.4',
      title: 'Сегодня я… (Hoy he…)',
      type: 'fill',
      instructions: 'Поставьте глагол в perfecto.',
      questions: [
        { id: 'q1', prompt: 'Hoy (yo, levantarse) ___ a las siete.',           correct: ['me he levantado'] },
        { id: 'q2', prompt: 'Hoy (yo, desayunar) ___ café con tostadas.',       correct: ['he desayunado'] },
        { id: 'q3', prompt: 'Esta mañana (yo, trabajar) ___ mucho.',             correct: ['he trabajado'] },
        { id: 'q4', prompt: 'Hoy (yo, comer) ___ con mi madre.',                  correct: ['he comido'] },
        { id: 'q5', prompt: 'Por la tarde (yo, ir) ___ al gimnasio.',              correct: ['he ido'] },
        { id: 'q6', prompt: 'Esta semana (yo, dormir) ___ poco.',                   correct: ['he dormido'] },
      ],
    },

    {
      id: '60.5',
      title: 'Возвратные глаголы и местоимения',
      type: 'fill',
      instructions: 'Помните: местоимение идёт <strong>перед haber</strong>. Поставьте глагол в perfecto.',
      questions: [
        { id: 'q1', prompt: '(yo, ducharse) ___ esta mañana.',         correct: ['Me he duchado'] },
        { id: 'q2', prompt: '(tú, levantarse) ___ tarde hoy.',          correct: ['Te has levantado'] },
        { id: 'q3', prompt: 'Marta (peinarse) ___ delante del espejo.',  correct: ['se ha peinado'] },
        { id: 'q4', prompt: '(nosotros, divertirse) ___ en la fiesta.',   correct: ['Nos hemos divertido'] },
        { id: 'q5', prompt: '(ellos, vestirse) ___ rápido.',                correct: ['Se han vestido'] },
        { id: 'q6', prompt: '¿(vosotros, lavarse) ___ las manos?',           correct: ['Os habéis lavado'] },
      ],
    },

    {
      id: '60.6',
      title: 'Маркеры: perfecto или indefinido?',
      type: 'choice',
      instructions: 'Какая форма прошедшего подходит к маркеру?',
      questions: [
        { id: 'q1', prompt: 'Маркер: <em>hoy</em>',               options: ['Pretérito perfecto', 'Pretérito indefinido'], correct: 'Pretérito perfecto' },
        { id: 'q2', prompt: 'Маркер: <em>ayer</em>',              options: ['Pretérito perfecto', 'Pretérito indefinido'], correct: 'Pretérito indefinido' },
        { id: 'q3', prompt: 'Маркер: <em>esta semana</em>',        options: ['Pretérito perfecto', 'Pretérito indefinido'], correct: 'Pretérito perfecto' },
        { id: 'q4', prompt: 'Маркер: <em>la semana pasada</em>',    options: ['Pretérito perfecto', 'Pretérito indefinido'], correct: 'Pretérito indefinido' },
        { id: 'q5', prompt: 'Маркер: <em>este año</em>',             options: ['Pretérito perfecto', 'Pretérito indefinido'], correct: 'Pretérito perfecto' },
        { id: 'q6', prompt: 'Маркер: <em>en 2010</em>',               options: ['Pretérito perfecto', 'Pretérito indefinido'], correct: 'Pretérito indefinido' },
        { id: 'q7', prompt: 'Маркер: <em>hace un momento</em>',        options: ['Pretérito perfecto', 'Pretérito indefinido'], correct: 'Pretérito perfecto' },
        { id: 'q8', prompt: 'Маркер: <em>hace dos años</em>',           options: ['Pretérito perfecto', 'Pretérito indefinido'], correct: 'Pretérito indefinido' },
      ],
    },

    {
      id: '60.7',
      title: 'Раскройте скобки',
      type: 'fill',
      instructions: 'Поставьте глагол в perfecto.',
      questions: [
        { id: 'q1', prompt: 'Este verano (nosotros, estar) ___ en Perú.',          correct: ['hemos estado'] },
        { id: 'q2', prompt: 'Hoy (nosotros, trabajar) ___ cerca de diez horas.',     correct: ['hemos trabajado'] },
        { id: 'q3', prompt: 'Este año (llover) ___ mucho.',                          correct: ['ha llovido'] },
        { id: 'q4', prompt: '(tú, ver) ___ a Cristina hoy?',                          correct: ['Has visto'], explanation: '<em>ver</em> → <em>visto</em> (нерегулярное причастие).' },
        { id: 'q5', prompt: 'Mis padres (estar) ___ en la costa este invierno.',        correct: ['han estado'] },
        { id: 'q6', prompt: '¿(vosotros, hacer) ___ los deberes?',                       correct: ['Habéis hecho'], explanation: '<em>hacer</em> → <em>hecho</em>.' },
        { id: 'q7', prompt: '¿(tú, leer) ___ algo interesante últimamente?',              correct: ['Has leído'] },
        { id: 'q8', prompt: 'Hoy (nosotras, comer) ___ ceviche.',                          correct: ['hemos comido'] },
      ],
    },

    {
      id: '60.8',
      title: 'Multi: правильное место местоимения',
      type: 'multi',
      instructions: 'Отметьте все <strong>корректные</strong> фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы написаны верно?',
          options: [
            'Me he levantado tarde.',
            'He me levantado tarde.',
            'He levantadome tarde.',
            'Se ha duchado.',
            'Ha sé duchado.',
            'Ha duchadose.',
            'Os habéis lavado.',
            'Habéis os lavado.',
          ],
          correct: [
            'Me he levantado tarde.',
            'Se ha duchado.',
            'Os habéis lavado.',
          ],
          explanation: 'Местоимение всегда <strong>перед haber</strong>. Между <em>he/has/ha…</em> и причастием ничего вставлять нельзя.',
        },
      ],
    },

    {
      id: '60.9',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['he comido', 'has comido', 'ha comida', 'hemos comido'], correct: 'ha comida', explanation: 'Причастие после haber не меняется по роду — <em>ha comido</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['hemos vivido', 'habéis vivido', 'han vividos', 'he vivido'], correct: 'han vividos', explanation: 'И не меняется по числу — <em>han vivido</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Me he duchado.', 'Te has duchado.', 'Se ha duchado.', 'Habéis os duchado.'], correct: 'Habéis os duchado.', explanation: 'Местоимение — перед haber: <em>Os habéis duchado</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Hoy he salido.', 'Ayer he salido.', 'Esta semana he salido.', 'Hace un rato he salido.'], correct: 'Ayer he salido.', explanation: 'С <em>ayer</em> — indefinido: <em>Ayer salí</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Han llegado tarde.', 'Han llegado los chicos.', 'Han llegadas tarde.', 'Has llegado tarde.'], correct: 'Han llegadas tarde.', explanation: 'Причастие неизменно: <em>han llegado</em>.' },
        { id: 'q6', prompt: 'Где ошибка?', options: ['Hemos trabajado mucho.', 'Habemos trabajado mucho.', 'Habéis trabajado mucho.', 'Han trabajado mucho.'], correct: 'Habemos trabajado mucho.', explanation: '«habemos» не существует — <em>hemos</em>.' },
      ],
    },

    {
      id: '60.10',
      title: 'Сопоставьте marcador и время',
      type: 'match',
      instructions: 'К каждому маркеру — perfecto или indefinido.',
      pool: ['Pretérito perfecto', 'Pretérito indefinido'],
      questions: [
        { id: 'q1', prompt: '<em>hoy</em>',               correct: 'Pretérito perfecto' },
        { id: 'q2', prompt: '<em>ayer</em>',              correct: 'Pretérito indefinido' },
        { id: 'q3', prompt: '<em>esta mañana</em>',        correct: 'Pretérito perfecto' },
        { id: 'q4', prompt: '<em>en 1999</em>',             correct: 'Pretérito indefinido' },
        { id: 'q5', prompt: '<em>este verano</em>',         correct: 'Pretérito perfecto' },
        { id: 'q6', prompt: '<em>hace un rato</em>',         correct: 'Pretérito perfecto' },
        { id: 'q7', prompt: '<em>el lunes pasado</em>',       correct: 'Pretérito indefinido' },
        { id: 'q8', prompt: '<em>hace dos meses</em>',         correct: 'Pretérito indefinido' },
      ],
    },

    {
      id: '60.11',
      title: 'Новости (perfecto свежих событий)',
      type: 'fill',
      instructions: 'Запишите свежую новость в perfecto. Образец: <em>Fuga de 50 presos.</em> → <em>Se han escapado cincuenta presos.</em>',
      questions: [
        { id: 'q1', prompt: 'Dimite la ministra. → <em>(dimitir)</em>',           correct: ['Ha dimitido la ministra.', 'Ha dimitido la ministra'] },
        { id: 'q2', prompt: 'Choque de dos trenes. → <em>(chocar)</em>',           correct: ['Han chocado dos trenes.', 'Han chocado dos trenes'] },
        { id: 'q3', prompt: 'Sube la gasolina. → <em>(subir)</em>',                  correct: ['Ha subido la gasolina.', 'Ha subido la gasolina'] },
        { id: 'q4', prompt: 'Bajan los impuestos. → <em>(bajar)</em>',                correct: ['Han bajado los impuestos.', 'Han bajado los impuestos'] },
        { id: 'q5', prompt: 'Fallece el presidente. → <em>(morir)</em>',                correct: ['Ha muerto el presidente.', 'Ha muerto el presidente'], explanation: '<em>morir → muerto</em> — нерегулярное причастие.' },
      ],
    },

    {
      id: '60.12',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите фразу с диакритикой и пунктуацией.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Hoy me he levantado tarde.',                 correct: ['Hoy me he levantado tarde.', 'Hoy me he levantado tarde'] },
        { id: 'q2', prompt: '', audio: 'Esta semana hemos trabajado mucho.',          correct: ['Esta semana hemos trabajado mucho.', 'Esta semana hemos trabajado mucho'] },
        { id: 'q3', prompt: '', audio: 'Han llegado los abuelos.',                     correct: ['Han llegado los abuelos.', 'Han llegado los abuelos'] },
        { id: 'q4', prompt: '', audio: 'He estado con Carlos hace un momento.',         correct: ['He estado con Carlos hace un momento.', 'He estado con Carlos hace un momento'] },
        { id: 'q5', prompt: '', audio: 'Este año no ha llovido mucho.',                  correct: ['Este año no ha llovido mucho.', 'Este año no ha llovido mucho'] },
        { id: 'q6', prompt: '', audio: '¿Qué ha pasado?',                                 correct: ['¿Qué ha pasado?'] },
      ],
    },
  ],
};
