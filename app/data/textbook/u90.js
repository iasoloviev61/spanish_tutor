// ============================================================
// Unidad 90 — Estilo indirecto (3): órdenes y peticiones
// Me pidió que le ayudara
// Передача приказов и просьб: dice/dijo que + субхунтив,
// pedir / mandar / ordenar / aconsejar / advertir / rogar /
// sugerir / exigir + презенс или имперфект субхунтива в
// зависимости от вводящего глагола.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u90 = {
  id: 'u90',
  number: 90,
  title: { es: 'Me pidió que le ayudara', topic: 'Estilo indirecto (3) — órdenes y peticiones' },
  topicRu: 'Косвенная речь (3): передача приказов и просьб',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Las <strong>órdenes</strong> y <strong>peticiones</strong> en estilo indirecto se transmiten con <em>que + subjuntivo</em>. El imperativo del original (<em>«Ven», «No comas»</em>) desaparece y se sustituye por una forma de subjuntivo.',
      ru: '<strong>Приказы</strong> и <strong>просьбы</strong> в косвенной речи передаются через <em>que + субхунтив</em>. Повелительное наклонение оригинала (<em>«Ven», «No comas»</em>) исчезает и заменяется субхунтивом.',
      examples: [
        { es: '«Ven» → Dile que venga.', ru: '«Приходи» → Скажи ему, чтобы пришёл.' },
        { es: '«No coman en la oficina, por favor.» → La jefa nos ha pedido que no comamos en la oficina.', ru: '«Не ешьте в офисе, пожалуйста.» → Начальница попросила нас не есть в офисе.' },
        { es: '«Que venga.» → Dice papá que vayas.', ru: '«Пусть придёт.» → Папа говорит, чтобы ты шёл.' },
      ],
    },

    {
      type: 'heading',
      text: 'Глаголы для передачи приказов и просьб',
    },
    {
      type: 'rule',
      es: 'Para transmitir <strong>órdenes</strong> el verbo más común es <em>decir</em> (= ordenar, no informar). También se usan <em>mandar, ordenar, exigir</em>. Para transmitir <strong>peticiones</strong> — <em>pedir</em>, así como <em>aconsejar, advertir, rogar, sugerir</em>.',
      ru: 'Для <strong>приказов</strong> главный глагол — <em>decir</em> (в значении «велеть», а не «сообщать»). Также <em>mandar, ordenar, exigir</em>. Для <strong>просьб</strong> — <em>pedir</em>, а также <em>aconsejar, advertir, rogar, sugerir</em>.',
      examples: [
        { es: 'Alicia me ha dicho que deje de trabajar tanto.', ru: 'Алисия сказала мне, чтобы я перестал столько работать.' },
        { es: 'El policía nos ordenó que no nos moviéramos de allí.', ru: 'Полицейский приказал нам не двигаться с того места.' },
        { es: 'Mi padre me ha pedido que lo lleve al aeropuerto esta noche.', ru: 'Папа попросил отвезти его в аэропорт сегодня вечером.' },
        { es: 'Esteban me aconsejó que no le dijera a nadie lo había visto.', ru: 'Эстебан посоветовал мне никому не говорить, что я его видел.' },
        { es: 'El jefe nos advirtió que no volviéramos a llegar tarde.', ru: 'Начальник предупредил нас, чтобы мы больше не опаздывали.' },
      ],
    },

    {
      type: 'heading',
      text: 'Какое время субхунтива?',
    },
    {
      type: 'table',
      caption: 'Время вводящего глагола → время субхунтива',
      columns: ['Вводящий', 'Субхунтив', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<em>presente / pretérito perfecto</em><br>(<em>dice / me ha pedido</em>)', '<em>presente de subjuntivo</em>', '<em>El director dice que vayas ahora. / Luis me ha pedido que le enseñe a conducir.</em>'],
        ['<em>pretérito indefinido / imperfecto</em><br>(<em>dijo / me pidió</em>)',     '<em>imperfecto de subjuntivo</em>',  '<em>Luisa dijo que la llamara hoy. / Ramsés me pidió que le ayudara.</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'Cuando el verbo introductor va en <strong>presente</strong> o <strong>pretérito perfecto</strong>, la orden o petición transmitida va en <strong>presente de subjuntivo</strong> (puede referirse al presente o al futuro): <em>Rafa dice que apagues la tele. / Rosario me ha pedido que la despierte a las ocho.</em>',
      ru: 'Если вводящий глагол стоит в <strong>презенсе</strong> или <strong>прет. перфекто</strong>, приказ/просьба идёт в <strong>презенсе субхунтива</strong> (относится к настоящему или будущему): <em>Rafa dice que apagues la tele. / Rosario me ha pedido que la despierte a las ocho mañana.</em>',
    },
    {
      type: 'rule',
      es: 'Cuando el verbo introductor va en un <strong>pasado</strong> (sobre todo <em>pretérito indefinido</em>), la orden o petición transmitida va en <strong>imperfecto de subjuntivo</strong> y puede referirse al pasado, al presente o al futuro: <em>Cuando suspendí el año pasado, el profesor me sugirió que trabajara más. / Voy a despertar a Juan: me pidió que lo despertara a esta hora. / Hablé con Carlos hace una semana y me pidió que le volviera a llamar este lunes.</em>',
      ru: 'Если вводящий глагол стоит в <strong>прошедшем времени</strong> (чаще всего в индефинидо), приказ/просьба идёт в <strong>имперфекте субхунтива</strong> — и может относиться к прошлому, настоящему или будущему: <em>Cuando suspendí el año pasado, el profesor me sugirió que trabajara más. / Voy a despertar a Juan: me pidió que lo despertara a esta hora. / Hablé con Carlos hace una semana y me pidió que le volviera a llamar este lunes.</em>',
    },

    {
      type: 'atencion',
      es: 'Cuidado con la diferencia entre <em>decir</em> «сообщать» (+ <strong>indicativo</strong>) y <em>decir</em> «велеть» (+ <strong>subjuntivo</strong>): <em>Me dijo que venía mañana</em> = «он сказал мне, что придёт завтра» (информация). <em>Me dijo que viniera mañana</em> = «он велел мне прийти завтра» (приказ).',
      ru: 'Различай два значения <em>decir</em>: «сообщать» (+ <strong>индикатив</strong>) и «велеть» (+ <strong>субхунтив</strong>). <em>Me dijo que venía mañana</em> «он сказал, что придёт завтра» (информация) vs. <em>Me dijo que viniera mañana</em> «он велел прийти завтра» (приказ).',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '90.1',
      title: 'Передайте приказ или просьбу через dice / me ha pedido',
      type: 'fill',
      instructions: 'Передайте приказ/просьбу в косвенной речи. Подставьте глагол в форме <strong>презенса субхунтива</strong>.',
      questions: [
        { id: 'q1', prompt: '«¡Que venga Aurora!» (la directora) → La directora dice que (<em>venir</em>) ___ Aurora.',                              correct: 'venga' },
        { id: 'q2', prompt: '«¿Me puedes ayudar?» (Raquel) → Raquel me pide que la (<em>ayudar</em>) ___ .',                                            correct: 'ayude' },
        { id: 'q3', prompt: '«¡Escribid más claro!» (el profesor) → El profesor dice que (<em>escribir</em>, nosotros) ___ más claro.',                    correct: 'escribamos' },
        { id: 'q4', prompt: '«Llámame el lunes.» (Roberto) → Roberto me ha pedido que lo (<em>llamar</em>) ___ el lunes.',                                    correct: 'llame' },
        { id: 'q5', prompt: '«Llévame unas bolsas a casa, por favor.» (mi madre) → Mi madre me ha pedido que le (<em>llevar</em>) ___ unas bolsas a casa.',     correct: 'lleve' },
        { id: 'q6', prompt: '«¿Puedes explicarme esta lección?» (Ramón) → Ramón me pide que le (<em>explicar</em>) ___ esta lección.',                            correct: 'explique' },
      ],
    },

    {
      id: '90.2',
      title: 'Передайте через me dijo / me pidió (имперфект субхунтива)',
      type: 'fill',
      instructions: 'Передайте приказ/просьбу через прошлое. Глагол поставьте в форме <strong>имперфекта субхунтива</strong>.',
      questions: [
        { id: 'q1', prompt: '«Llámame.» (Marcos, ayer) → Marcos me pidió que lo (<em>llamar</em>) ___ .',                                                   correct: ['llamara', 'llamase'] },
        { id: 'q2', prompt: '«Trabaja más.» (el profesor, el año pasado) → El profesor me sugirió que (<em>trabajar</em>, yo) ___ más.',                       correct: ['trabajara', 'trabajase'] },
        { id: 'q3', prompt: '«No volváis a llegar tarde.» (el jefe) → El jefe nos advirtió que no (<em>volver</em>) ___ a llegar tarde.',                          correct: ['volviéramos', 'volviésemos'] },
        { id: 'q4', prompt: '«No te muevas de aquí.» (el policía) → El policía me ordenó que no me (<em>mover</em>) ___ de allí.',                                   correct: ['moviera', 'moviese'] },
        { id: 'q5', prompt: '«Ayúdame con esto.» (Ramsés) → Ramsés me pidió que le (<em>ayudar</em>) ___ con eso.',                                                     correct: ['ayudara', 'ayudase'] },
        { id: 'q6', prompt: '«Despiértame a las ocho.» (Juan) → Juan me pidió que lo (<em>despertar</em>) ___ a las ocho.',                                                correct: ['despertara', 'despertase'] },
        { id: 'q7', prompt: '«Vuelve a llamar el lunes.» (Carlos, hace una semana) → Carlos me pidió que le (<em>volver</em>) ___ a llamar este lunes.',                       correct: ['volviera', 'volviese'] },
        { id: 'q8', prompt: '«No le digas a nadie lo que viste.» (Esteban) → Esteban me aconsejó que no le (<em>decir</em>) ___ a nadie lo que había visto.',                    correct: ['dijera', 'dijese'] },
      ],
    },

    {
      id: '90.3',
      title: 'Какая форма правильная?',
      type: 'choice',
      instructions: 'Выберите подходящий вариант.',
      questions: [
        { id: 'q1', prompt: 'El director me dice que ___ verle.',                                  options: ['voy', 'vaya', 'fuera'],                      correct: 'vaya' },
        { id: 'q2', prompt: 'Mar me ha pedido que te ___ los libros.',                                options: ['das', 'des', 'dieras'],                       correct: 'des' },
        { id: 'q3', prompt: 'Me dijo que no ___ más en su garaje.',                                     options: ['aparco', 'aparque', 'aparcara'],              correct: 'aparcara' },
        { id: 'q4', prompt: 'Marisa dice que nos ___ prisa, vamos a llegar tarde.',                        options: ['damos', 'demos', 'diéramos'],                  correct: 'demos' },
        { id: 'q5', prompt: 'Paco me pidió que le ___ la moto y le dije que no.',                              options: ['dejo', 'deje', 'dejara'],                       correct: 'dejara' },
        { id: 'q6', prompt: 'No, el profesor me dijo hoy más tarde que ___ a la academia.',                        options: ['voy', 'vaya', 'fuera'],                          correct: 'vaya', explanation: 'Сегодня → презенс субхунтив возможен; но после <em>dijo</em> чаще <em>fuera</em>.' },
        { id: 'q7', prompt: 'Me han pedido que ___ a Venezuela hoy mismo.',                                          options: ['vuelvo', 'vuelva', 'volviera'],              correct: 'vuelva' },
        { id: 'q8', prompt: 'Raúl Torres me dijo ayer que no ___ más en su plaza.',                                     options: ['aparque', 'aparcara', 'aparco'],            correct: 'aparcara' },
      ],
    },

    {
      id: '90.4',
      title: 'Подберите глагол передачи',
      type: 'choice',
      instructions: 'Выберите подходящий глагол (с тем же смысловым оттенком).',
      questions: [
        { id: 'q1', prompt: 'Teresa me ___ que no llegaría a tiempo.',                                                                          options: ['advirtió', 'pidió', 'rogó'],         correct: 'advirtió', explanation: 'Это предупреждение, а не приказ.' },
        { id: 'q2', prompt: 'Alberto me ha ___ que me case con él.',                                                                              options: ['advertido', 'pedido', 'exigido'],   correct: 'pedido' },
        { id: 'q3', prompt: 'Por favor, Lola, te ___ que me ayudes. Necesito ayuda.',                                                                options: ['advierto', 'ruego', 'exijo'],       correct: 'ruego', explanation: 'Просьба от души — <em>rogar</em>.' },
        { id: 'q4', prompt: 'Me han ___ que estudie Económicas, pero yo prefiero Derecho.',                                                              options: ['aconsejado', 'pedido', 'rogado'], correct: 'aconsejado', explanation: 'Совет — <em>aconsejar</em>.' },
        { id: 'q5', prompt: 'Rosa se indignó con Javier y le ___ que le pidiera disculpas.',                                                                options: ['exigió', 'aconsejó', 'sugirió'],   correct: 'exigió', explanation: 'Категорическое требование.' },
        { id: 'q6', prompt: 'Luis ___ que cenemos primero y vayamos luego al cine.',                                                                          options: ['exige', 'sugiere', 'advierte'],   correct: 'sugiere' },
      ],
    },

    {
      id: '90.5',
      title: 'Передайте просьбу через advertir / aconsejar / pedir / rogar / sugerir',
      type: 'fill',
      instructions: 'Подставьте глагол в форме субхунтива (презенс или имперфект — по вводящему глаголу).',
      questions: [
        { id: 'q1', prompt: '«Tienes mala cara, ve al médico.» → Pedro le ha aconsejado que (<em>ir</em>) ___ al médico.',                                              correct: 'vaya' },
        { id: 'q2', prompt: '«Hagan horas extras.» → El jefe nos ha pedido que (<em>hacer</em>, nosotros) ___ horas extras.',                                              correct: 'hagamos' },
        { id: 'q3', prompt: '«Cuida a los niños el sábado.» → Me había pedido que (<em>cuidar</em>) ___ a los niños el sábado.',                                              correct: ['cuidara', 'cuidase'] },
        { id: 'q4', prompt: '«Cállate, estoy intentando estudiar.» → Te ruego que te (<em>callar</em>) ___ , estoy intentando estudiar.',                                       correct: 'calles' },
        { id: 'q5', prompt: '«Hagamos una excursión el sábado.» → Luis sugiere que (<em>hacer</em>, nosotros) ___ una excursión el sábado.',                                       correct: 'hagamos' },
        { id: 'q6', prompt: '«No digas nada.» → Lucía me rogó que no (<em>decir</em>, yo) ___ nada.',                                                                                correct: ['dijera', 'dijese'] },
      ],
    },

    {
      id: '90.6',
      title: 'decir + indicativo (информация) или + субхунтив (приказ)?',
      type: 'choice',
      instructions: 'Один и тот же глагол <em>decir</em> может вводить как информацию, так и приказ. Выберите правильную форму.',
      questions: [
        { id: 'q1', prompt: '(информация) Me dijo que ___ enfermo.',                              options: ['estaba', 'estuviera'],                     correct: 'estaba' },
        { id: 'q2', prompt: '(приказ) Me dijo que ___ con él.',                                      options: ['venía', 'viniera'],                         correct: 'viniera' },
        { id: 'q3', prompt: '(информация) Dice que ___ contigo mañana.',                               options: ['va', 'vaya'],                                correct: 'va' },
        { id: 'q4', prompt: '(приказ) Dice que ___ con él mañana.',                                       options: ['vas', 'vayas'],                            correct: 'vayas' },
        { id: 'q5', prompt: '(информация) Me ha dicho que no ___ tiempo.',                                    options: ['tiene', 'tenga'],                       correct: 'tiene' },
        { id: 'q6', prompt: '(приказ) Me ha dicho que no ___ tarde.',                                            options: ['llego', 'llegue'],                  correct: 'llegue' },
      ],
    },

    {
      id: '90.7',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Me pidió que le ayudara.', 'Me pidió que le ayudo.', 'Me pide que le ayude.'],                                              correct: 'Me pidió que le ayudo.', explanation: 'После <em>pidió</em> — имперфект субхунтива.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Me pide que le ayude.', 'Me pide que le ayudara.', 'Me ha pedido que le ayude.'],                                              correct: 'Me pide que le ayudara.', explanation: 'После <em>pide / ha pedido</em> — презенс субхунтива.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['El profesor dice que estudiemos más.', 'El profesor dice que estudiamos más.', 'El profesor pide que estudiemos más.'],          correct: 'El profesor dice que estudiamos más.', explanation: 'Если <em>decir</em> = «велеть», нужен субхунтив.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Me dijo que viniera.', 'Me dijo que venga.', 'Me dice que venga.'],                                                                  correct: 'Me dijo que venga.', explanation: 'После <em>dijo</em> в значении «велел» — имперфект субхунтива.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Me aconsejó que fuera al médico.', 'Me aconsejó que vaya al médico.', 'Me aconseja que vaya al médico.'],                                  correct: 'Me aconsejó que vaya al médico.', explanation: 'После <em>aconsejó</em> — имперфект субхунтива.' },
      ],
    },

    {
      id: '90.8',
      title: 'Какие фразы корректны',
      type: 'multi',
      instructions: 'Отметьте все <strong>правильные</strong> фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Me pide que le ayude.',
            'Me pide que le ayudara.',
            'Me pidió que le ayudara.',
            'Me pidió que le ayudo.',
            'Me ha pedido que le ayude.',
            'Me ha pedido que le ayudara.',
            'El director dice que vayas ahora.',
            'El director dice que vas ahora.',
            'El profesor sugirió que trabajara más.',
            'El profesor sugirió que trabajo más.',
            'Me aconsejó que fuera al médico.',
            'Me aconsejó que voy al médico.',
            'Me dijo que venía mañana (información).',
            'Me dijo que viniera mañana (orden).',
          ],
          correct: [
            'Me pide que le ayude.',
            'Me pidió que le ayudara.',
            'Me ha pedido que le ayude.',
            'El director dice que vayas ahora.',
            'El profesor sugirió que trabajara más.',
            'Me aconsejó que fuera al médico.',
            'Me dijo que venía mañana (información).',
            'Me dijo que viniera mañana (orden).',
          ],
          explanation: 'После <em>pide / dice / ha pedido / aconseja</em> — презенс субхунтива; после <em>pidió / dijo / aconsejó / sugirió</em> — имперфект субхунтива. <em>decir + indicativo</em> = информация, <em>decir + subjuntivo</em> = приказ.',
        },
      ],
    },

    {
      id: '90.9',
      title: 'Сопоставьте время вводящего и субхунтива',
      type: 'match',
      instructions: 'Какое время субхунтива нужно после данного вводящего глагола?',
      pool: [
        'presente de subjuntivo',
        'imperfecto de subjuntivo',
      ],
      questions: [
        { id: 'q1', prompt: '<em>dice / pide</em>',           correct: 'presente de subjuntivo' },
        { id: 'q2', prompt: '<em>ha dicho / ha pedido</em>',    correct: 'presente de subjuntivo' },
        { id: 'q3', prompt: '<em>dijo / pidió</em>',              correct: 'imperfecto de subjuntivo' },
        { id: 'q4', prompt: '<em>aconsejó / sugirió</em>',          correct: 'imperfecto de subjuntivo' },
        { id: 'q5', prompt: '<em>aconseja / sugiere</em>',           correct: 'presente de subjuntivo' },
        { id: 'q6', prompt: '<em>advirtió / ordenó</em>',              correct: 'imperfecto de subjuntivo' },
      ],
    },

    {
      id: '90.10',
      title: 'Аудио-диктант',
      type: 'fill',
      instructions: 'Запишите услышанное полностью с диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Me pidió que le ayudara.',                                  correct: ['Me pidió que le ayudara.', 'Me pidió que le ayudara'] },
        { id: 'q2', prompt: '', audio: 'El director dice que vayas ahora.',                            correct: ['El director dice que vayas ahora.', 'El director dice que vayas ahora'] },
        { id: 'q3', prompt: '', audio: 'Luis me ha pedido que le enseñe a conducir.',                     correct: ['Luis me ha pedido que le enseñe a conducir.', 'Luis me ha pedido que le enseñe a conducir'] },
        { id: 'q4', prompt: '', audio: 'El jefe nos advirtió que no llegáramos tarde.',                      correct: ['El jefe nos advirtió que no llegáramos tarde.', 'El jefe nos advirtió que no llegáramos tarde'] },
        { id: 'q5', prompt: '', audio: 'Me aconsejó que fuera al médico.',                                       correct: ['Me aconsejó que fuera al médico.', 'Me aconsejó que fuera al médico'] },
        { id: 'q6', prompt: '', audio: 'Me dijo que viniera a las ocho.',                                            correct: ['Me dijo que viniera a las ocho.', 'Me dijo que viniera a las ocho'] },
        { id: 'q7', prompt: '', audio: 'Te ruego que me escuches.',                                                       correct: ['Te ruego que me escuches.', 'Te ruego que me escuches'] },
      ],
    },

    {
      id: '90.11',
      title: 'Свободный выбор формы',
      type: 'fill',
      instructions: 'Подставьте глагол в форме субхунтива (презенс или имперфект — по вводящему).',
      questions: [
        { id: 'q1', prompt: 'Mi profesor me sugiere que (<em>leer</em>, yo) ___ más en español.',                                                          correct: 'lea' },
        { id: 'q2', prompt: 'Mi profesor me sugirió que (<em>leer</em>, yo) ___ más en español.',                                                            correct: ['leyera', 'leyese'] },
        { id: 'q3', prompt: 'Mi madre siempre me pedía que la (<em>ayudar</em>) ___ con la cena.',                                                              correct: ['ayudara', 'ayudase'] },
        { id: 'q4', prompt: 'El médico le ha dicho que no (<em>fumar</em>) ___ tanto.',                                                                            correct: 'fume' },
        { id: 'q5', prompt: 'El policía me ordenó que (<em>parar</em>) ___ el coche.',                                                                                correct: ['parara', 'parase'] },
        { id: 'q6', prompt: 'Te ruego que me (<em>escuchar</em>) ___ un momento.',                                                                                       correct: 'escuches' },
        { id: 'q7', prompt: 'Mis amigos me han pedido que (<em>cocinar</em>, yo) ___ paella el domingo.',                                                                   correct: 'cocine' },
      ],
    },

    {
      id: '90.12',
      title: 'Какое правило применилось?',
      type: 'choice',
      instructions: 'Какое правило объясняет фразу?',
      questions: [
        { id: 'q1', prompt: '<em>Me pide que le ayude.</em>',                                  options: ['презенс субх. — после dice/pide/ha pedido', 'имперфект субх. — после dijo/pidió'], correct: 'презенс субх. — после dice/pide/ha pedido' },
        { id: 'q2', prompt: '<em>Me pidió que le ayudara.</em>',                                 options: ['презенс субх. — после dice/pide/ha pedido', 'имперфект субх. — после dijo/pidió'], correct: 'имперфект субх. — после dijo/pidió' },
        { id: 'q3', prompt: '<em>Me dijo que venía mañana.</em>',                                   options: ['decir = информация (индикатив)', 'decir = приказ (субхунтив)'], correct: 'decir = информация (индикатив)' },
        { id: 'q4', prompt: '<em>Me dijo que viniera mañana.</em>',                                    options: ['decir = информация (индикатив)', 'decir = приказ (субхунтив)'], correct: 'decir = приказ (субхунтив)' },
        { id: 'q5', prompt: '<em>El profesor sugirió que trabajara más.</em>',                              options: ['презенс субх. — после dice/pide/ha pedido', 'имперфект субх. — после dijo/pidió'], correct: 'имперфект субх. — после dijo/pidió' },
      ],
    },
  ],
};
