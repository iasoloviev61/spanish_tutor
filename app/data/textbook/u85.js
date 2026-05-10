// ============================================================
// Unidad 85 — Expresión de probabilidad
// Quizás lo haga / Puede que esté cansado / Es posible que…
// Конструкции с разной степенью вероятности и seguramente +
// индикатив.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u85 = {
  id: 'u85',
  number: 85,
  title: { es: 'Quizás lo haga', topic: 'Expresión de probabilidad' },
  topicRu: 'Как выразить вероятность (quizás, puede que, es posible que, seguramente)',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Para expresar probabilidad se usan expresiones que indican distintos <strong>grados de seguridad</strong>. Casi todas piden <em>subjuntivo</em>; sólo <em>seguramente</em> (= «seguro que sí») admite también el indicativo.',
      ru: 'Степень уверенности в высказывании передают разные обороты. Почти все они требуют <strong>субхунтива</strong>; и только <em>seguramente</em> (= «наверняка, скорее всего да») допускает индикатив (даже чаще).',
    },

    {
      type: 'heading',
      text: 'Конструкции с субхунтивом',
    },
    {
      type: 'table',
      caption: 'Чаще всего встречаемые',
      columns: ['Оборот', 'Пример'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['<em>es posible / imposible que</em>',     '<em>Es imposible que ganemos. Jugamos muy mal.</em>'],
        ['<em>es probable / improbable que</em>',    '<em>Era poco probable que encontrara trabajo.</em>'],
        ['<em>posiblemente</em>',                     '<em>Posiblemente llueva. Hay muchas nubes.</em>'],
        ['<em>probablemente</em>',                     '<em>Probablemente cambie hoy el tiempo.</em>'],
        ['<em>puede que</em>',                          '<em>Puede que no salga esta noche. Estoy cansado.</em>'],
        ['<em>quizás, quizá</em>',                       '<em>Llama a Ángel. Quizá esté en casa.</em>'],
        ['<em>tal vez</em>',                              '<em>Tal vez haya elecciones pronto.</em>'],
      ],
    },

    {
      type: 'heading',
      text: 'Какое время субхунтива выбрать',
    },
    {
      type: 'rule',
      es: 'Se usa el <strong>presente de subjuntivo</strong> cuando se habla del <strong>presente o del futuro</strong>: <em>Quizá esté en casa</em>, <em>Posiblemente me llame esta noche</em>.',
      ru: '<strong>Презенс субхунтива</strong> — когда говорим о <strong>настоящем или будущем</strong>: <em>Quizá esté en casa</em> «Может быть, он дома», <em>Posiblemente me llame esta noche</em> «Возможно, он позвонит мне сегодня вечером».',
      examples: [
        { es: '— ¿Sabe dónde está el Sr. Pavón? — No sé. Quizá esté en la cafetería.', ru: '— Знаете, где сеньор Павон? — Не знаю. Может быть, он в кафе.' },
        { es: 'Es posible que tengan ustedes razón.', ru: 'Возможно, вы правы.' },
        { es: 'No me ha llamado Martina. Posiblemente me llame esta noche.', ru: 'Мартина мне не звонила. Возможно, позвонит сегодня вечером.' },
      ],
    },
    {
      type: 'rule',
      es: 'Se usa el <strong>imperfecto de subjuntivo</strong> cuando se habla del <strong>pasado</strong> y queremos decir «возможно, что произошло».',
      ru: '<strong>Имперфект субхунтива</strong> — когда говорим о <strong>прошлом</strong>: «возможно, что (тогда) произошло».',
      examples: [
        { es: 'Era poco probable que aprobara. Había estudiado muy poco.', ru: 'Было маловероятно, что он сдаст. Учил он очень мало.' },
        { es: '— ¿Sabes si Pedro ha hablado con Ricardo? — Puede que lo hiciera anoche. Regresó tarde.', ru: '— Знаешь, говорил ли Педро с Рикардо? — Может быть, вчера вечером. Он поздно вернулся.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Pero con <em>quizás, quizá, tal vez, posiblemente, probablemente</em> también se puede usar el <strong>pretérito indefinido</strong> u otros tiempos del pasado del indicativo cuando ya no se duda mucho de los hechos: <em>Quizá se acostaron / acostaran tarde anoche.</em>',
      ru: 'Важно: с <em>quizás, quizá, tal vez, posiblemente, probablemente</em> можно также использовать <strong>индефинидо</strong> или другое прошедшее время индикатива (когда событие практически признаётся): <em>Quizá se acostaron / acostaran tarde anoche</em>. С <em>puede que</em> и <em>es posible / probable que</em> — только субхунтив.',
    },

    {
      type: 'heading',
      text: 'es posible / imposible + инфинитив',
    },
    {
      type: 'rule',
      es: 'Se dice <em>es posible / imposible + infinitivo</em> cuando se habla en <strong>sentido general</strong>, sin sujeto concreto.',
      ru: '<em>es posible / imposible + инфинитив</em> используется, когда речь идёт <strong>в общем смысле</strong>, без конкретного субъекта (= «можно/нельзя в принципе»).',
      examples: [
        { es: 'Es imposible dormir en esta casa. Hay demasiado ruido.', ru: 'В этом доме невозможно спать. Слишком много шума.' },
        { es: 'Era imposible engañar a Tomás. Era muy listo.', ru: 'Обмануть Томаса было невозможно. Он был очень умный.' },
      ],
    },

    {
      type: 'heading',
      text: 'Seguramente + индикатив',
    },
    {
      type: 'rule',
      es: 'Con <em>seguramente</em> se usan los <strong>tiempos del indicativo</strong>: presente y futuro para hablar del presente o futuro; los tiempos del pasado del indicativo (perfecto, indefinido, imperfecto) para el pasado. También se admite el subjuntivo con <em>seguramente</em>, pero el indicativo es lo más frecuente.',
      ru: 'С <em>seguramente</em> («наверняка, скорее всего») используется в основном <strong>индикатив</strong>: презенс или будущее — для настоящего/будущего; индефинидо/перфект/имперфект — для прошлого. (Субхунтив тоже возможен, но реже.)',
      examples: [
        { es: '— ¿Sabes dónde está Martín? — Seguramente está / esté en casa. No sale mucho.', ru: '— Знаешь, где Мартин? — Наверняка дома. Он редко выходит.' },
        { es: '— ¿Cuándo vas a enviarle un correo a Clara? — Seguramente lo haré esta noche.', ru: '— Когда напишешь Кларе? — Скорее всего, сегодня вечером.' },
        { es: 'Santi no contesta el teléfono. Seguramente ha salido.', ru: 'Санти не отвечает. Наверняка вышел.' },
        { es: '— Martina tiene un poncho precioso. — Seguramente lo compró cuando estuvo en Perú.', ru: '— У Мартины красивое пончо. — Наверняка купила, когда была в Перу.' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '85.1',
      title: 'Презенс субхунтива (настоящее/будущее)',
      type: 'fill',
      instructions: 'Дополните ответ глаголом из скобок в форме <strong>презенса субхунтива</strong>. Главный оборот указывает на вероятность.',
      questions: [
        { id: 'q1', prompt: '— ¿Cree que va a llover esta tarde? — No sé. Puede que (<em>llover</em>) ___.',                              correct: 'llueva' },
        { id: 'q2', prompt: '— ¿Vais a ir a la fiesta de Elisa? — Tenemos mucho que estudiar. Quizás (<em>ir</em>, nosotros) ___.',         correct: 'vayamos' },
        { id: 'q3', prompt: '— ¿Está Carmen Perón en su despacho? — No sé. Es posible que (<em>estar</em>) ___ . Mira tú.',                  correct: 'esté' },
        { id: 'q4', prompt: '— ¿Sabes si Alicia va a venir hoy a clase? — No sé. Puede que (<em>venir</em>) ___ . Últimamente no viene mucho.', correct: 'venga' },
        { id: 'q5', prompt: '— ¿Por qué no duermes bien? — Es imposible (<em>dormir</em>) ___ aquí. Hay mucho ruido.',                       correct: 'dormir' },
        { id: 'q6', prompt: '— ¿Sabes si hay un tren a Aguascalientes? — Posiblemente (<em>haber</em>) ___ uno por la mañana.',              correct: 'haya' },
        { id: 'q7', prompt: '— ¿Sabe si Celia quiere trabajar este verano? — No sé, pero es probable que (<em>querer</em>) ___ . Necesita dinero.', correct: 'quiera' },
        { id: 'q8', prompt: '— ¿No puede encontrar otro piso mejor? — Es imposible (<em>encontrar</em>) ___ nada mejor por este precio.',     correct: 'encontrar' },
      ],
    },

    {
      id: '85.2',
      title: 'Имперфект субхунтива или индефинидо (прошлое)',
      type: 'fill',
      instructions: 'Дополните глагол из скобок в форме <strong>имперфекта субхунтива</strong> или <strong>индефинидо</strong> в зависимости от оборота.',
      questions: [
        { id: 'q1', prompt: '— Miguel dijo la verdad. — No te creo. Es imposible que (<em>decir</em>) ___ la verdad.',                  correct: 'dijera' },
        { id: 'q2', prompt: '— Fue José. Seguro. — Yo no estoy tan segura. Puede que (<em>ser</em>) ___ él.',                            correct: 'fuera' },
        { id: 'q3', prompt: '— Está triste Sara. — ¿Estás seguro? Quizás (<em>estar</em>) ___ , pero a mí no me lo dijo.',                correct: ['estuviera', 'estuviese'] },
        { id: 'q4', prompt: '— Aurora no vino la semana pasada porque estaba enferma. — Sí. Es probable que (<em>estar</em>) ___ enferma. Es una chica muy débil.', correct: 'estuviera' },
        { id: 'q5', prompt: '— Mario dice que se olvidó. — Tal vez (<em>olvidarse</em>) ___ . Es muy despistado.',                          correct: ['se olvidara', 'se olvidase', 'se olvidó'] },
      ],
    },

    {
      id: '85.3',
      title: 'Seguramente + индикатив',
      type: 'fill',
      instructions: 'Допишите глагол из скобок в подходящем времени <strong>индикатива</strong>.',
      questions: [
        { id: 'q1', prompt: '— ¿Vas a ver pronto a Tomás? — Sí. Seguramente lo (<em>ver</em>, yo) ___ el sábado.',                       correct: 'veré' },
        { id: 'q2', prompt: '— ¿Crees que vas a aprobar? — Sí. Seguramente (<em>aprobar</em>, yo) ___ .',                                  correct: ['apruebo', 'aprobaré'] },
        { id: 'q3', prompt: '— ¿Van a ir a Bariloche este invierno? — Sí. Seguramente le (<em>regalar</em>, ellos) ___ unos días.',          correct: ['regalarán', 'regalan'] },
        { id: 'q4', prompt: '— ¿Crees que encontraré la cartera? — Sí. Seguramente la (<em>encontrar</em>, tú) ___ en algún rincón.',         correct: ['encontrarás', 'encuentras'] },
        { id: 'q5', prompt: '— ¿Sabes si Antonio tiene el teléfono de Amelia? — Sí. Seguramente lo (<em>tener</em>, él) ___ .',               correct: 'tiene' },
        { id: 'q6', prompt: '— ¿Crees que ese cuadro lo ha pintado Margarita? — Sí. Seguramente lo (<em>pintar</em>, ella) ___ .',              correct: ['pintó', 'ha pintado'] },
      ],
    },

    {
      id: '85.4',
      title: 'Какое время поставить?',
      type: 'fill',
      instructions: 'Поставьте глагол в скобках в подходящей форме (презенс субх. / имперфект субх. / индикатив) — смотрите на главный оборот.',
      questions: [
        { id: 'q1', prompt: '— ¡Teléfono, Lola! — Lo cojo yo. Puede que (<em>ser</em>) ___ Víctor.',                                 correct: 'sea' },
        { id: 'q2', prompt: '— ¿Cuándo vais a inaugurar el nuevo piso? — Quizá lo (<em>hacer</em>) ___ el mes que viene.',           correct: ['hagamos', 'hagamos.'] },
        { id: 'q3', prompt: '— Felipe me llama todos los días. — Seguramente le (<em>gustar</em>) ___ .',                              correct: 'gustas' },
        { id: 'q4', prompt: 'Es imposible (<em>encontrar</em>) ___ habitación en ningún hotel. Están todos llenos.',                    correct: 'encontrar' },
        { id: 'q5', prompt: '— Luis no nos saludó anoche. — Probablemente no os (<em>ver</em>) ___ .',                                   correct: ['viera', 'viese', 'vio'] },
        { id: 'q6', prompt: '— Me apetece comer algo. — Es imposible que (<em>tener</em>, tú) ___ hambre. Hemos comido hace una hora.', correct: 'tengas' },
        { id: 'q7', prompt: 'Anoche no dormí bien. Puede que me (<em>sentar</em>) ___ algo mal.',                                       correct: ['sentara', 'sentase'] },
      ],
    },

    {
      id: '85.5',
      title: 'Степень вероятности',
      type: 'choice',
      instructions: 'Выберите подходящий по смыслу оборот.',
      questions: [
        { id: 'q1', prompt: 'Очень не уверен — «может быть»:',           options: ['puede que', 'seguramente', 'es imposible que'], correct: 'puede que' },
        { id: 'q2', prompt: 'Почти уверен — «наверняка»:',                options: ['puede que', 'seguramente', 'tal vez'],          correct: 'seguramente' },
        { id: 'q3', prompt: 'Совершенно невозможно:',                      options: ['quizás', 'es probable que', 'es imposible que'], correct: 'es imposible que' },
        { id: 'q4', prompt: '«Возможно» (нейтрально):',                     options: ['es imposible que', 'es posible que', 'no es posible que'], correct: 'es posible que' },
        { id: 'q5', prompt: '«Скорее всего да» с индикативом:',              options: ['probablemente', 'puede que', 'seguramente'],   correct: 'seguramente' },
      ],
    },

    {
      id: '85.6',
      title: 'Какая форма?',
      type: 'choice',
      instructions: 'Выберите правильный вариант.',
      questions: [
        { id: 'q1', prompt: 'Es probable que (él) ___ tarde.',          options: ['llega', 'llegará', 'llegue', 'llegó'],         correct: 'llegue' },
        { id: 'q2', prompt: 'Quizás (yo) ___ el lunes.',                  options: ['ir', 'voy', 'iré', 'vaya'],                     correct: 'vaya' },
        { id: 'q3', prompt: 'Era poco probable que (él) ___ trabajo.',     options: ['encuentra', 'encontró', 'encuentre', 'encontrara'], correct: 'encontrara' },
        { id: 'q4', prompt: 'Seguramente Martín ___ en casa.',              options: ['esté', 'estuviera', 'está', 'estaba'],         correct: 'está', explanation: 'С <em>seguramente</em> чаще всего индикатив.' },
        { id: 'q5', prompt: 'Puede que Juan ___ que había examen.',           options: ['sabe', 'sepa', 'supo', 'supiera'],            correct: 'supiera', explanation: 'Прошлое после <em>puede que</em> — имперфект субхунтива.' },
        { id: 'q6', prompt: 'Es imposible ___ aquí. Hay mucho ruido.',         options: ['dormir', 'duermo', 'duerma', 'dormiré'],     correct: 'dormir', explanation: 'Без конкретного субъекта — инфинитив.' },
        { id: 'q7', prompt: 'Tal vez (ellos) se ___ tarde anoche.',            options: ['acuestan', 'acostaron', 'acuesten', 'acostaran'], correct: ['acostaron', 'acostaran'], explanation: 'С <em>tal vez</em> о прошлом допустимы и индефинидо, и имперфект субхунтива.' },
      ],
    },

    {
      id: '85.7',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Es posible que llueva.', 'Es posible que llueve.', 'Es posible que esté en casa.'], correct: 'Es posible que llueve.', explanation: 'После <em>es posible que</em> — субхунтив.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Puede que esté cansado.', 'Puede que está cansado.', 'Puede que viniera ayer.'],     correct: 'Puede que está cansado.', explanation: 'После <em>puede que</em> — только субхунтив.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Quizá esté en casa.', 'Quizás está en casa.', 'Quizás esté en casa.'],                correct: 'Quizás está en casa.', explanation: 'С <em>quizás</em> в стандартном языке — субхунтив.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Seguramente está en casa.', 'Seguramente esté en casa.', 'Seguramente esté.'],          correct: 'Seguramente esté.', explanation: 'Эта форма допустима, но в этом ряду — наименее естественная: с <em>seguramente</em> предпочтителен индикатив.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Es imposible dormir aquí.', 'Es imposible que durmamos aquí.', 'Es imposible dormimos aquí.'], correct: 'Es imposible dormimos aquí.', explanation: 'Либо инфинитив (<em>dormir</em>), либо <em>que + субхунтив</em>.' },
      ],
    },

    {
      id: '85.8',
      title: 'Сопоставьте оборот и грамматику',
      type: 'match',
      instructions: 'Какой режим у каждого оборота?',
      pool: ['+ subjuntivo (всегда)', '+ subjuntivo или indicativo (прошлое тоже)', '+ indicativo (предпочтительно)'],
      questions: [
        { id: 'q1', prompt: '<em>puede que</em>',           correct: '+ subjuntivo (всегда)' },
        { id: 'q2', prompt: '<em>es posible que</em>',       correct: '+ subjuntivo (всегда)' },
        { id: 'q3', prompt: '<em>es probable que</em>',       correct: '+ subjuntivo (всегда)' },
        { id: 'q4', prompt: '<em>quizás / quizá</em>',         correct: '+ subjuntivo или indicativo (прошлое тоже)' },
        { id: 'q5', prompt: '<em>tal vez</em>',                  correct: '+ subjuntivo или indicativo (прошлое тоже)' },
        { id: 'q6', prompt: '<em>posiblemente / probablemente</em>', correct: '+ subjuntivo или indicativo (прошлое тоже)' },
        { id: 'q7', prompt: '<em>seguramente</em>',                correct: '+ indicativo (предпочтительно)' },
      ],
    },

    {
      id: '85.9',
      title: 'Какие фразы корректны',
      type: 'multi',
      instructions: 'Отметьте все <strong>правильные</strong> фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Puede que llueva.',
            'Puede que llueve.',
            'Es posible que tengan razón.',
            'Es posible que tienen razón.',
            'Quizás esté en casa.',
            'Quizás está en casa.',
            'Tal vez se acostaron tarde.',
            'Tal vez se acostaran tarde.',
            'Seguramente está en casa.',
            'Seguramente esté en casa.',
            'Es imposible dormir aquí.',
            'Es imposible dormimos aquí.',
            'Era poco probable que aprobara.',
            'Era poco probable que aprobaba.',
          ],
          correct: [
            'Puede que llueva.',
            'Es posible que tengan razón.',
            'Quizás esté en casa.',
            'Tal vez se acostaron tarde.',
            'Tal vez se acostaran tarde.',
            'Seguramente está en casa.',
            'Seguramente esté en casa.',
            'Es imposible dormir aquí.',
            'Era poco probable que aprobara.',
          ],
          explanation: '<em>puede que / es posible que / es probable que</em> требуют только субхунтив. <em>quizás</em> в стандартном языке — субхунтив. <em>tal vez</em> допускает оба варианта о прошлом. <em>seguramente</em> — оба, но индикатив естественнее. Без субъекта — инфинитив (<em>dormir</em>).',
        },
      ],
    },

    {
      id: '85.10',
      title: 'Перефразируйте через указанный оборот',
      type: 'fill',
      instructions: 'Подставьте только нужную форму глагола.',
      questions: [
        { id: 'q1', prompt: 'Quizá Pedro está enfermo. → Es posible que Pedro (<em>estar</em>) ___ enfermo.',                       correct: 'esté' },
        { id: 'q2', prompt: 'Es probable que Marta vendrá tarde. → Es probable que Marta (<em>venir</em>) ___ tarde.',               correct: 'venga', explanation: 'После <em>es probable que</em> нельзя индикатив.' },
        { id: 'q3', prompt: 'Quizás vino ayer. → Puede que (<em>venir</em>) ___ ayer.',                                                correct: ['viniera', 'viniese'] },
        { id: 'q4', prompt: 'Era poco probable que iba a aprobar. → Era poco probable que (<em>aprobar</em>) ___ .',                    correct: ['aprobara', 'aprobase'] },
        { id: 'q5', prompt: 'Seguramente saldrá. → Probablemente (<em>salir</em>) ___ .',                                                correct: ['salga'] },
        { id: 'q6', prompt: 'Es imposible que duermo aquí. → Es imposible que (<em>dormir</em>, yo) ___ aquí.',                            correct: 'duerma' },
      ],
    },

    {
      id: '85.11',
      title: 'Аудио-диктант',
      type: 'fill',
      instructions: 'Запишите услышанное полностью с диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Quizás esté en casa.',                       correct: ['Quizás esté en casa.', 'Quizás esté en casa'] },
        { id: 'q2', prompt: '', audio: 'Puede que no salga esta noche.',              correct: ['Puede que no salga esta noche.', 'Puede que no salga esta noche'] },
        { id: 'q3', prompt: '', audio: 'Es imposible que ganemos.',                   correct: ['Es imposible que ganemos.', 'Es imposible que ganemos'] },
        { id: 'q4', prompt: '', audio: 'Era poco probable que encontrara trabajo.',    correct: ['Era poco probable que encontrara trabajo.', 'Era poco probable que encontrara trabajo'] },
        { id: 'q5', prompt: '', audio: 'Posiblemente llueva. Hay muchas nubes.',        correct: ['Posiblemente llueva. Hay muchas nubes.', 'Posiblemente llueva. Hay muchas nubes'] },
        { id: 'q6', prompt: '', audio: 'Seguramente está en casa.',                      correct: ['Seguramente está en casa.', 'Seguramente está en casa'] },
        { id: 'q7', prompt: '', audio: 'Es imposible dormir aquí.',                       correct: ['Es imposible dormir aquí.', 'Es imposible dormir aquí'] },
      ],
    },

    {
      id: '85.12',
      title: 'Какое правило применилось?',
      type: 'choice',
      instructions: 'Какое правило объясняет данную фразу?',
      questions: [
        { id: 'q1', prompt: '<em>Puede que llueva mañana.</em>',                       options: ['презенс субх. — настоящее/будущее', 'имперфект субх. — прошлое', 'индикатив с seguramente'], correct: 'презенс субх. — настоящее/будущее' },
        { id: 'q2', prompt: '<em>Era poco probable que aprobara.</em>',                  options: ['презенс субх. — настоящее/будущее', 'имперфект субх. — прошлое', 'индикатив с seguramente'], correct: 'имперфект субх. — прошлое' },
        { id: 'q3', prompt: '<em>Seguramente está en casa.</em>',                         options: ['презенс субх. — настоящее/будущее', 'имперфект субх. — прошлое', 'индикатив с seguramente'], correct: 'индикатив с seguramente' },
        { id: 'q4', prompt: '<em>Es imposible dormir aquí.</em>',                          options: ['+ инфинитив (общее значение)', '+ que + субхунтив', '+ индикатив'], correct: '+ инфинитив (общее значение)' },
        { id: 'q5', prompt: '<em>Quizá se acostaron tarde anoche.</em>',                    options: ['индефинидо допустим с quizá', 'только субхунтив', 'ошибка'], correct: 'индефинидо допустим с quizá' },
      ],
    },
  ],
};
