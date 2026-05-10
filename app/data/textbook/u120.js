// ============================================================
// Unidad 120 — Oraciones concesivas (aunque, a pesar de que…)
// indicativo — факт известен / реален;
// subjuntivo — гипотеза / возражение / неуверенность.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u120 = {
  id: 'u120',
  number: 120,
  title: { es: 'aunque, a pesar de que…', topic: 'Oraciones concesivas' },
  topicRu: 'Уступительные предложения: aunque, a pesar de que, por más que',

  theory: [
    {
      type: 'rule',
      es: 'Las <strong>oraciones concesivas</strong> indican un <em>obstáculo</em> o una <em>objeción</em>, real o posible, que <strong>no impide</strong> la realización de la acción principal. Los conectores más frecuentes son <strong>aunque, a pesar de que, por más que, por mucho que</strong>.',
      ru: 'Уступительные предложения говорят о препятствии — реальном или предполагаемом — которое не мешает действию: «хотя, несмотря на то что». Главные союзы: <em>aunque, a pesar de que, por más que, por mucho que</em>.',
      examples: [
        { es: '<strong>Aunque llueva</strong> mañana, voy a la playa.', ru: 'Даже если завтра пойдёт дождь, я иду на пляж.' },
        { es: '<strong>A pesar de que no estudia</strong>, aprueba.', ru: 'Несмотря на то что он не учится, он сдаёт. <em>(но он сдаёт.)</em>' },
        { es: '<strong>Aunque Clara es</strong> muy simpática, no tiene muchos amigos.', ru: 'Хотя Клара очень милая, у неё мало друзей.' },
      ],
    },

    {
      type: 'heading',
      text: 'Indicativo или subjuntivo?',
    },
    {
      type: 'rule',
      es: 'Se usa <strong>indicativo</strong> cuando la acción se considera <em>cierta</em>, real: lo sabemos o lo damos por seguro (presente o pasado). Se usa <strong>subjuntivo</strong> cuando la acción es <em>hipotética</em>, posible o no necesariamente cierta para nosotros.',
      ru: 'Главное правило выбора: <strong>indicativo</strong>, если факт известен / реален; <strong>subjuntivo</strong>, если это гипотеза, предположение или возражение.',
      examples: [
        { es: 'Aunque <strong>trabajó</strong> mucho, nunca se hizo rico. <small>— я знаю, что он работал → indicativo.</small>', ru: 'Хотя он много работал, он не разбогател.' },
        { es: 'Aunque <strong>corras</strong> mucho, no me ganarás. <small>— возможно, побежишь → subjuntivo.</small>', ru: 'Сколько бы ты ни бежал, ты меня не победишь.' },
        { es: 'No me gusta la sopa. — Aunque no te <strong>guste</strong>, tienes que comértela. <small>— возражение → subjuntivo.</small>', ru: '— Не люблю суп. — Хоть и не нравится — съешь.' },
      ],
    },

    {
      type: 'table',
      caption: 'Сравнение использования',
      columns: ['Когда', 'Режим', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['факт известен / реальный (наст. или прош.)', '<strong>indicativo</strong>',
          '<em>Aunque <strong>tiene</strong> dinero, no es feliz.</em>'],
        ['будущее или гипотеза (можно — может и нет)', '<strong>presente de subjuntivo</strong>',
          '<em>Aunque <strong>llueva</strong> mañana, iré.</em>'],
        ['гипотеза в прошлом', '<strong>imperfecto de subjuntivo</strong>',
          '<em>Aunque <strong>comieras</strong> poco, te sentó mal.</em>'],
        ['возражение собеседнику', '<strong>presente de subjuntivo</strong>',
          '<em>—No me gusta. —Aunque no te <strong>guste</strong>, cómetelo.</em>'],
      ],
    },

    {
      type: 'heading',
      text: 'a pesar de + инфинитив',
    },
    {
      type: 'rule',
      es: 'Cuando el sujeto de las dos partes es el mismo, se puede usar <strong>a pesar de + infinitivo</strong> (sin <em>que</em>). Si los sujetos son distintos, sigue siendo <strong>a pesar de que + verbo conjugado</strong>.',
      ru: 'Если оба действия — об одном и том же лице, после <em>a pesar de</em> ставят инфинитив: «несмотря на то что (я / он) сделал». Разные лица → нужен <em>a pesar de que</em> + личная форма.',
      examples: [
        { es: '<strong>A pesar de estar agotados</strong>, tuvimos que levantarnos temprano.', ru: 'Несмотря на то что мы были без сил, нам пришлось встать рано.' },
        { es: '<strong>A pesar de que estaban</strong> agotados, tuvieron que ir.', ru: 'Несмотря на то что они были без сил, им пришлось идти.' },
      ],
    },

    {
      type: 'atencion',
      es: 'En ruso <em>«даже если»</em> y <em>«хотя»</em> a menudo coinciden con <strong>aunque</strong>, pero el matiz lo decide el modo: <strong>indicativo</strong> = «хотя» (известно), <strong>subjuntivo</strong> = «даже если» (гипотеза). El mismo verbo cambia de sentido: <em>aunque <strong>llueve</strong></em> «хотя идёт дождь» / <em>aunque <strong>llueva</strong></em> «даже если пойдёт дождь».',
      ru: 'Самое тонкое: один и тот же союз <em>aunque</em> может означать «хотя» (фактическое — indicativo) или «даже если» (гипотетическое — subjuntivo). Сравните: <em>Aunque <strong>llueve</strong>, voy</em> «хотя идёт дождь» — <em>Aunque <strong>llueva</strong>, voy</em> «даже если пойдёт».',
    },
  ],

  exercises: [
    {
      id: '120.1',
      title: 'Соедините начало и конец',
      type: 'match',
      instructions: 'Каждое начало имеет свой логичный конец.',
      pool: [
        'aunque no os apetezca mucho.',
        'aunque comieras poco.',
        'a pesar de no tener muchas ganas.',
        'por mucho que ahorre.',
        'por mucho que ahorres.',
        'aunque comas poco.',
      ],
      questions: [
        { id: 'q1', prompt: '<em>Tengo que trabajar</em> ___',                       correct: 'a pesar de no tener muchas ganas.' },
        { id: 'q2', prompt: '<em>Tendréis que comer la sopa</em> ___',                  correct: 'aunque no os apetezca mucho.' },
        { id: 'q3', prompt: '<em>Esa comida te puede sentar mal</em> ___',                correct: 'aunque comas poco.' },
        { id: 'q4', prompt: '<em>Algo te sentó mal</em> ___',                              correct: 'aunque comieras poco.' },
        { id: 'q5', prompt: '<em>No me podré comprar esa casa</em> ___',                    correct: 'por mucho que ahorre.' },
        { id: 'q6', prompt: '<em>No te podrás comprar esa casa</em> ___',                     correct: 'por mucho que ahorres.' },
      ],
    },

    {
      id: '120.2',
      title: 'Поставьте глагол в нужную форму',
      type: 'fill',
      instructions: 'Выберите indicativo или subjuntivo по контексту.',
      questions: [
        { id: 'q1',  prompt: 'Aunque me ___ (llamar / él) Roberto, no le contestaré.',                     correct: 'llame' },
        { id: 'q2',  prompt: 'A pesar de ___ (trabajar / nosotros) mucho, ganamos poco.',                    correct: 'trabajar' },
        { id: 'q3',  prompt: 'Por mucho que ___ (correr / vosotros), llegaréis tarde.',                       correct: 'corráis' },
        { id: 'q4',  prompt: 'Aunque hoy ___ (levantarse / yo) tarde, tengo sueño.',                            correct: 'me he levantado', explanation: 'Известный факт → indicativo (<em>me he levantado</em> / <em>me levanté</em>).' },
        { id: 'q5',  prompt: 'A pesar de ___ (jugar / ellos) bien, perdieron el partido.',                       correct: 'jugar' },
        { id: 'q6',  prompt: 'Tengo frío a pesar de que ___ (hacer) sol.',                                         correct: 'hace' },
        { id: 'q7',  prompt: 'Aunque normalmente ___ (ir / yo) andando, hoy prefiero ir en autobús.',                correct: 'voy' },
        { id: 'q8',  prompt: 'Por más que ___ (gritar / tú), no les van a oír.',                                       correct: 'grites' },
        { id: 'q9',  prompt: 'Aunque ___ (hacer) muy buen tiempo, no pudimos bañarnos.',                                correct: 'hacía', explanation: 'Прошлое, реальный факт → indicativo (<em>hacía</em> / <em>hacía</em>).' },
        { id: 'q10', prompt: 'A pesar de que ___ (llover) intensamente, tuvimos que jugar el partido.',                   correct: 'llovía' },
      ],
    },

    {
      id: '120.3',
      title: 'Объедините идеи фразой с <em>a pesar de (que) / aunque</em>',
      type: 'fill',
      instructions: 'Соедините по образцу. Запишите всю фразу.',
      questions: [
        { id: 'q1', prompt: '<em>Estuvimos en Escocia en julio. Hizo mal tiempo, pero lo pasamos bien.</em> (Aunque) →',
          correct: ['Aunque hizo muy mal tiempo, lo pasamos muy bien.', 'Aunque hizo mal tiempo, lo pasamos bien.', 'Aunque hizo mal tiempo, lo pasamos muy bien.'] },
        { id: 'q2', prompt: '<em>No sé si Mariana come mucho, pero no creo que engorde.</em> (A pesar de que) →',
          correct: ['A pesar de que coma mucho, no creo que engorde.', 'A pesar de que come mucho, no creo que engorde.'] },
        { id: 'q3', prompt: '<em>No sé si Arturo va a esperar mucho a Amelia, pero no creo que venga.</em> (Por mucho que) →',
          correct: ['Por mucho que espere a Amelia, no creo que venga.', 'Por mucho que la espere, no creo que venga.'] },
        { id: 'q4', prompt: '<em>Normalmente duermo mucho, pero estoy siempre cansado.</em> (A pesar de) →',
          correct: ['A pesar de dormir mucho, estoy siempre cansado.', 'A pesar de dormir mucho estoy siempre cansado.'] },
        { id: 'q5', prompt: '<em>No sé si anoche era muy tarde. Me molestó que me despertaran.</em> (Aunque no) →',
          correct: ['Aunque no fuera muy tarde, me molestó que me despertaran.', 'Aunque no fuera tarde, me molestó que me despertaran.'] },
        { id: 'q6', prompt: '<em>No sé si Silvio madrugó mucho. Llegó tarde al trabajo.</em> (Por mucho que) →',
          correct: ['Por mucho que madrugara, llegó tarde al trabajo.', 'Por mucho que madrugase, llegó tarde al trabajo.'] },
      ],
    },

    {
      id: '120.4',
      title: 'Ответьте фразой с <em>aunque</em>',
      type: 'fill',
      instructions: 'Используйте <em>aunque</em> + subjuntivo как возражение собеседнику. Запишите весь ответ.',
      questions: [
        { id: 'q1', prompt: '—No quiero ir al cole. —___, irás.',
          correct: ['Aunque no quieras', 'Aunque no quieras,'] },
        { id: 'q2', prompt: '—No salgas. Está lloviendo. —___, tengo que salir.',
          correct: ['Aunque llueva', 'Aunque esté lloviendo'] },
        { id: 'q3', prompt: '—No queremos hacer este ejercicio. —___, debéis hacerlo. Es útil.',
          correct: ['Aunque no queráis', 'Aunque no queráis,'] },
        { id: 'q4', prompt: '—No les gusta el pescado. —___, tendrán que comerlo.',
          correct: ['Aunque no les guste', 'Aunque no les guste,'] },
        { id: 'q5', prompt: '—Dice que no sale, que hace frío. —___, tiene que salir.',
          correct: ['Aunque haga frío', 'Aunque haga frío,'] },
      ],
    },

    {
      id: '120.5',
      title: 'Indicativo или subjuntivo?',
      type: 'choice',
      instructions: 'Выберите подходящую форму. Помните: реальный факт → indicativo; гипотеза/возражение → subjuntivo.',
      questions: [
        { id: 'q1', prompt: 'Aunque mañana ___, iré a la playa.',                            options: ['llueve', 'llueva'], correct: 'llueva' },
        { id: 'q2', prompt: 'Aunque ___ ahora, no salgo.',                                     options: ['llueve', 'llueva'], correct: 'llueve' },
        { id: 'q3', prompt: 'Por mucho que ___, no entiendo nada.',                              options: ['estudio', 'estudie'], correct: 'estudio' },
        { id: 'q4', prompt: 'Por mucho que ___, no entenderé nada.',                              options: ['estudie', 'estudio'], correct: 'estudie' },
        { id: 'q5', prompt: 'Aunque ___ rico, no es feliz.',                                       options: ['es', 'sea'], correct: 'es' },
        { id: 'q6', prompt: 'No te creeré aunque me lo ___ veinte veces.',                          options: ['dices', 'digas'], correct: 'digas' },
        { id: 'q7', prompt: 'A pesar de que ___ enfermo ayer, vino a clase.',                         options: ['estaba', 'estuviera'], correct: 'estaba' },
        { id: 'q8', prompt: 'No te creo. Aunque me lo ___, no te creo.',                                options: ['juras', 'jures'], correct: 'jures' },
      ],
    },

    {
      id: '120.6',
      title: 'a pesar de или a pesar de que?',
      type: 'choice',
      instructions: 'Один субъект — <em>a pesar de + inf</em>; разные — <em>a pesar de que + verbo</em>.',
      questions: [
        { id: 'q1', prompt: 'Vino a la fiesta ___ estar enfermo.',                       options: ['a pesar de', 'a pesar de que'], correct: 'a pesar de' },
        { id: 'q2', prompt: 'Vino a la fiesta ___ estaba enfermo su hijo.',                options: ['a pesar de', 'a pesar de que'], correct: 'a pesar de que' },
        { id: 'q3', prompt: 'Tengo frío ___ hace sol.',                                     options: ['a pesar de', 'a pesar de que'], correct: 'a pesar de que' },
        { id: 'q4', prompt: 'No tengo hambre ___ no haber comido.',                          options: ['a pesar de', 'a pesar de que'], correct: 'a pesar de' },
        { id: 'q5', prompt: 'Lo entendí ___ hablar muy rápido el profesor.',                  options: ['a pesar de', 'a pesar de que'], correct: 'a pesar de' },
        { id: 'q6', prompt: 'Lo entendí ___ el profesor hablaba muy rápido.',                   options: ['a pesar de', 'a pesar de que'], correct: 'a pesar de que' },
      ],
    },

    {
      id: '120.7',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна неверная фраза.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?',
          options: ['Aunque llueva, iré.', 'Aunque lloverá, iré.', 'Aunque llueva mañana, iré.', 'Aunque llueve, iré.'],
          correct: 'Aunque lloverá, iré.', explanation: 'После <em>aunque</em> futuro не используется; нужно subjuntivo (<em>llueva</em>) или indicativo о настоящем (<em>llueve</em>).' },
        { id: 'q2', prompt: 'Где ошибка?',
          options: ['A pesar de estar cansado.', 'A pesar de que está cansado.', 'A pesar que está cansado.', 'A pesar de la lluvia.'],
          correct: 'A pesar que está cansado.', explanation: 'Правильно: <em>a pesar <strong>de</strong> que</em>.' },
        { id: 'q3', prompt: 'Где ошибка?',
          options: ['Por mucho que corras.', 'Por mucho corras.', 'Por más que estudies.', 'Por mucho que estudie.'],
          correct: 'Por mucho corras.', explanation: 'Нужно <em>por mucho <strong>que</strong></em> + verbo.' },
        { id: 'q4', prompt: 'Где ошибка?',
          options: ['Aunque trabajó mucho, no se hizo rico.', 'Aunque trabajara mucho, nunca se hizo rico.', 'Aunque corras, no me ganarás.', 'Aunque trabajaras, no te haces rico.'],
          correct: 'Aunque trabajaras, no te haces rico.', explanation: 'Главное предложение в настоящем — после <em>aunque</em> нужен presente de subjuntivo (<em>trabajes</em>).' },
        { id: 'q5', prompt: 'Где ошибка?',
          options: ['No me gusta. —Aunque no te guste, cómetelo.', 'No me gusta. —Aunque no te gusta, cómetelo.', 'No me gusta. —Pues cómetelo.', 'No me gusta. —Aunque sea, cómetelo.'],
          correct: 'No me gusta. —Aunque no te gusta, cómetelo.', explanation: 'Возражение → subjuntivo.' },
      ],
    },

    {
      id: '120.8',
      title: 'Все верные варианты',
      type: 'multi',
      instructions: 'Какие фразы построены правильно?',
      questions: [
        {
          id: 'q1',
          prompt: 'Отметьте все правильные:',
          options: [
            'Aunque llueva mañana, iré.',
            'Aunque lloverá mañana, iré.',
            'Aunque llueve ahora, voy a salir.',
            'A pesar de que está cansado, vino.',
            'A pesar que está cansado, vino.',
            'A pesar de estar cansado, vino.',
            'Por mucho que corras, no me ganarás.',
            'Por mucho corras, no me ganarás.',
            'Por más que estudie, no apruebo.',
          ],
          correct: [
            'Aunque llueva mañana, iré.',
            'Aunque llueve ahora, voy a salir.',
            'A pesar de que está cansado, vino.',
            'A pesar de estar cansado, vino.',
            'Por mucho que corras, no me ganarás.',
            'Por más que estudie, no apruebo.',
          ],
          explanation: 'После <em>aunque</em> нет futuro; <em>a pesar <strong>de</strong> que</em>; <em>por mucho <strong>que</strong></em> + verbo.',
        },
      ],
    },

    {
      id: '120.9',
      title: 'Сопоставьте перевод',
      type: 'match',
      instructions: 'Подберите русский перевод.',
      pool: [
        'Хотя идёт дождь, я выйду.',
        'Даже если завтра пойдёт дождь, я выйду.',
        'Несмотря на то что он много работает, не богатеет.',
        'Сколько бы ты ни бежал, ты меня не победишь.',
        'Хоть и не нравится — съешь.',
        'Несмотря на усталость, он пришёл.',
      ],
      questions: [
        { id: 'q1', prompt: '<em>Aunque llueve, voy a salir.</em>',                                  correct: 'Хотя идёт дождь, я выйду.' },
        { id: 'q2', prompt: '<em>Aunque llueva mañana, saldré.</em>',                                  correct: 'Даже если завтра пойдёт дождь, я выйду.' },
        { id: 'q3', prompt: '<em>A pesar de que trabaja mucho, no se hace rico.</em>',                  correct: 'Несмотря на то что он много работает, не богатеет.' },
        { id: 'q4', prompt: '<em>Por mucho que corras, no me ganarás.</em>',                              correct: 'Сколько бы ты ни бежал, ты меня не победишь.' },
        { id: 'q5', prompt: '<em>Aunque no te guste, cómetelo.</em>',                                      correct: 'Хоть и не нравится — съешь.' },
        { id: 'q6', prompt: '<em>A pesar de estar cansado, vino.</em>',                                     correct: 'Несмотря на усталость, он пришёл.' },
      ],
    },

    {
      id: '120.10',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Прослушайте и запишите.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Aunque llueva mañana, voy a la playa.',
          correct: ['Aunque llueva mañana, voy a la playa.', 'Aunque llueva mañana voy a la playa.'] },
        { id: 'q2', prompt: '', audio: 'A pesar de que no estudia, aprueba.',
          correct: ['A pesar de que no estudia, aprueba.', 'A pesar de que no estudia aprueba.'] },
        { id: 'q3', prompt: '', audio: 'Por mucho que corras, no me ganarás.',
          correct: ['Por mucho que corras, no me ganarás.', 'Por mucho que corras no me ganarás.'] },
        { id: 'q4', prompt: '', audio: 'Aunque Clara es muy simpática, no tiene muchos amigos.',
          correct: ['Aunque Clara es muy simpática, no tiene muchos amigos.', 'Aunque Clara es muy simpática no tiene muchos amigos.'] },
        { id: 'q5', prompt: '', audio: 'A pesar de estar agotados, tuvimos que levantarnos temprano.',
          correct: ['A pesar de estar agotados, tuvimos que levantarnos temprano.', 'A pesar de estar agotados tuvimos que levantarnos temprano.'] },
      ],
    },

    {
      id: '120.11',
      title: 'aunque: «хотя» или «даже если»?',
      type: 'choice',
      instructions: 'Определите смысл по форме глагола: indicativo → «хотя» (факт); subjuntivo → «даже если» (гипотеза).',
      questions: [
        { id: 'q1', prompt: '<em>Aunque <strong>llueve</strong>, voy a salir.</em>',                  options: ['хотя', 'даже если'], correct: 'хотя' },
        { id: 'q2', prompt: '<em>Aunque <strong>llueva</strong>, voy a salir.</em>',                    options: ['хотя', 'даже если'], correct: 'даже если' },
        { id: 'q3', prompt: '<em>Aunque <strong>tiene</strong> dinero, vive sencillamente.</em>',         options: ['хотя', 'даже если'], correct: 'хотя' },
        { id: 'q4', prompt: '<em>Aunque <strong>tenga</strong> dinero, no la perdonaré.</em>',             options: ['хотя', 'даже если'], correct: 'даже если' },
        { id: 'q5', prompt: '<em>Aunque <strong>estudia</strong> mucho, no aprueba.</em>',                  options: ['хотя', 'даже если'], correct: 'хотя' },
        { id: 'q6', prompt: '<em>Aunque <strong>estudie</strong> mucho, no aprobará.</em>',                  options: ['хотя', 'даже если'], correct: 'даже если' },
      ],
    },
  ],
};
