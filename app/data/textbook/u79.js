// ============================================================
// Unidad 79 — Presente de subjuntivo: verbos regulares
// trabaje, coma, viva. Образование (yo trabajo → trabaje), формы
// для всех лиц. Выбор -e- vs -a- по группе. Атенсион: dar, estar,
// ser, ver. Базовые контексты: deseo, probabilidad, sentimiento.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u79 = {
  id: 'u79',
  number: 79,
  title: { es: 'trabaje, coma, viva', topic: 'Presente de subjuntivo: verbos regulares' },
  topicRu: 'Презенс субхунтива: правильные глаголы и базовые случаи употребления',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'El <strong>presente de subjuntivo</strong> se forma cambiando la vocal temática: los verbos en <em>−ar</em> toman <strong>−e</strong>; los de <em>−er</em> y <em>−ir</em> toman <strong>−a</strong>. Es la «vocal contraria» a la del presente de indicativo.',
      ru: 'Презенс субхунтива образуется через <strong>«обратную тематическую гласную»</strong>: у глаголов на <em>−ar</em> в окончаниях стоит <strong>−e−</strong>; у глаголов на <em>−er</em> и <em>−ir</em> — <strong>−a−</strong>. (В индикативе всё ровно наоборот.)',
      examples: [
        { es: 'Quiero que trabajes a gusto.', ru: 'Хочу, чтобы тебе работалось в удовольствие.' },
        { es: 'No me gusta que comáis nada antes de las comidas.', ru: 'Мне не нравится, что вы что-то едите перед обедом.' },
        { es: 'Puede que esté en su habitación.', ru: 'Может быть, он у себя в комнате.' },
      ],
    },

    {
      type: 'heading',
      text: 'Окончания регулярных глаголов',
    },
    {
      type: 'table',
      caption: 'trabajar / comer / vivir — presente de subjuntivo',
      columns: ['', '−ar (trabajar)', '−er (comer)', '−ir (vivir)'],
      colClasses: ['col-pattern', 'col-result', 'col-result', 'col-result'],
      rows: [
        ['<strong>yo</strong>',                '<em>trabaj−<strong>e</strong></em>',     '<em>com−<strong>a</strong></em>',     '<em>viv−<strong>a</strong></em>'],
        ['<strong>tú</strong>',                '<em>trabaj−<strong>es</strong></em>',    '<em>com−<strong>as</strong></em>',    '<em>viv−<strong>as</strong></em>'],
        ['<strong>usted, él, ella</strong>',    '<em>trabaj−<strong>e</strong></em>',     '<em>com−<strong>a</strong></em>',     '<em>viv−<strong>a</strong></em>'],
        ['<strong>nosotros, −as</strong>',     '<em>trabaj−<strong>emos</strong></em>',  '<em>com−<strong>amos</strong></em>',  '<em>viv−<strong>amos</strong></em>'],
        ['<strong>vosotros, −as</strong>',     '<em>trabaj−<strong>éis</strong></em>',   '<em>com−<strong>áis</strong></em>',   '<em>viv−<strong>áis</strong></em>'],
        ['<strong>ustedes, ellos, ellas</strong>', '<em>trabaj−<strong>en</strong></em>',  '<em>com−<strong>an</strong></em>',    '<em>viv−<strong>an</strong></em>'],
      ],
    },
    {
      type: 'rule',
      es: 'La raíz del subjuntivo coincide con la <strong>raíz de la 1.ª persona del presente de indicativo</strong>: <em>yo trabajo → trabaj−</em>; <em>yo como → com−</em>; <em>yo vivo → viv−</em>. Esta misma raíz se usará después para los irregulares.',
      ru: 'Корень субхунтива всегда совпадает с <strong>корнем 1-го лица индикатива</strong>: <em>yo trabajo → trabaj−</em>, <em>yo como → com−</em>, <em>yo vivo → viv−</em>. (Это правило особенно полезно для нерегулярных глаголов: <em>yo tengo → tenga</em>, <em>yo digo → diga</em>.)',
    },

    {
      type: 'heading',
      text: 'Полностью неправильные: dar, estar, ser, ver',
    },
    {
      type: 'table',
      caption: 'Запомнить целиком',
      columns: ['', 'dar', 'estar', 'ser', 'ver'],
      colClasses: ['col-pattern', 'col-result', 'col-result', 'col-result', 'col-result'],
      rows: [
        ['<strong>yo</strong>',          '<em>dé</em>',     '<em>esté</em>',     '<em>sea</em>',     '<em>vea</em>'],
        ['<strong>tú</strong>',          '<em>des</em>',    '<em>estés</em>',    '<em>seas</em>',    '<em>veas</em>'],
        ['<strong>él / usted</strong>',   '<em>dé</em>',     '<em>esté</em>',     '<em>sea</em>',     '<em>vea</em>'],
        ['<strong>nosotros</strong>',    '<em>demos</em>',  '<em>estemos</em>',  '<em>seamos</em>',  '<em>veamos</em>'],
        ['<strong>vosotros</strong>',    '<em>deis</em>',   '<em>estéis</em>',   '<em>seáis</em>',   '<em>veáis</em>'],
        ['<strong>ellos / ustedes</strong>', '<em>den</em>', '<em>estén</em>',    '<em>sean</em>',    '<em>vean</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'En <em>dar</em>, las formas <em>dé</em> (yo, él) llevan tilde para no confundirlas con la preposición <em>de</em>. <em>estar</em>: tilde en todas excepto <em>estemos</em>.',
      ru: 'У <em>dar</em> формы 1-го и 3-го лица единственного числа пишутся как <em>dé</em> с акцентом — чтобы не путать с предлогом <em>de</em>. У <em>estar</em> акценты везде, кроме <em>estemos</em>.',
    },

    {
      type: 'heading',
      text: 'Когда используется',
    },
    {
      type: 'rule',
      es: 'El presente de subjuntivo puede referirse al <strong>presente</strong> o al <strong>futuro</strong>. Aparece sobre todo en oraciones subordinadas con <em>que</em>.',
      ru: 'Презенс субхунтива может говорить и о настоящем, и о будущем. Появляется почти всегда в придаточных с <em>que</em>.',
      examples: [
        { es: 'Puede que Sonia esté ahora en casa.', ru: 'Возможно, Соня сейчас дома.' },
        { es: 'Mi padre quiere que le ayude mañana.', ru: 'Папа хочет, чтобы я помог ему завтра.' },
      ],
    },
    {
      type: 'table',
      caption: 'Базовые «триггеры» субхунтива',
      columns: ['Контекст', 'Пример'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['<strong>Желание</strong>: <em>querer que, esperar que, ojalá</em>', '<em>Quiero que me ayudes.</em>'],
        ['<strong>Вероятность</strong>: <em>puede que, es probable que, quizás</em>', '<em>Es probable que llegue tarde.</em>'],
        ['<strong>Чувство / оценка</strong>: <em>me gusta que, me extraña que, tengo miedo de que</em>', '<em>Me gusta que seáis educados.</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Si el sujeto es el <strong>mismo</strong> en las dos partes, en español se prefiere el infinitivo: <em>Quiero ayudar</em> (yo / yo). El subjuntivo aparece cuando los sujetos son <strong>distintos</strong>: <em>Quiero que ayudes</em> (yo / tú).',
      ru: 'Если подлежащее в обеих частях <strong>одно и то же</strong>, по-испански используется инфинитив: <em>Quiero ayudar</em> «хочу помочь» (я / я). Субхунтив возникает, когда подлежащие <strong>разные</strong>: <em>Quiero que ayudes</em> «хочу, чтобы помог ты».',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '79.1',
      title: 'Окончания: tú',
      type: 'fill',
      instructions: 'Поставьте глагол в форме <em>tú</em> презенса субхунтива.',
      questions: [
        { id: 'q1',  prompt: '(<em>trabajar</em>) Quiero que ___ a gusto.',          correct: 'trabajes' },
        { id: 'q2',  prompt: '(<em>ayudar</em>) Quiero que me ___, Carlos.',          correct: 'ayudes' },
        { id: 'q3',  prompt: '(<em>comer</em>) Espero que ___ algo antes de salir.',  correct: 'comas' },
        { id: 'q4',  prompt: '(<em>escribir</em>) Quiero que me ___ pronto.',           correct: 'escribas' },
        { id: 'q5',  prompt: '(<em>vivir</em>) Espero que ___ feliz allí.',              correct: 'vivas' },
        { id: 'q6',  prompt: '(<em>cantar</em>) No me gusta que ___ tan alto.',           correct: 'cantes' },
        { id: 'q7',  prompt: '(<em>leer</em>) Espero que ___ este libro.',                 correct: 'leas' },
        { id: 'q8',  prompt: '(<em>aprender</em>) Quiero que ___ mucho.',                   correct: 'aprendas' },
      ],
    },

    {
      id: '79.2',
      title: 'Окончания: usted / él / ella',
      type: 'fill',
      instructions: 'Поставьте глагол в форме 3 л. ед. ч. (он, она, Вы).',
      questions: [
        { id: 'q1', prompt: '(<em>llegar</em>) Espero que ___ pronto. (= он)',         correct: 'llegue', explanation: 'У глаголов на <em>−gar</em> добавляется <em>u</em>: <em>llegar → llegue</em> (для сохранения звука [g]).' },
        { id: 'q2', prompt: '(<em>llamar</em>) Quizás me ___ esta noche.',                correct: 'llame' },
        { id: 'q3', prompt: '(<em>estudiar</em>) Es probable que ___ Derecho.',            correct: 'estudie' },
        { id: 'q4', prompt: '(<em>aprender</em>) Quiero que mi hijo ___ inglés.',           correct: 'aprenda' },
        { id: 'q5', prompt: '(<em>vivir</em>) Espero que su abuela ___ muchos años más.',     correct: 'viva' },
        { id: 'q6', prompt: '(<em>casarse</em>) Puede que mi prima se ___ el año que viene.',  correct: 'case' },
        { id: 'q7', prompt: '(<em>responder</em>) Espero que el profesor ___ pronto.',          correct: 'responda' },
      ],
    },

    {
      id: '79.3',
      title: 'Все лица одного глагола',
      type: 'fill',
      instructions: 'Поставьте глагол в указанном лице. Образец: <em>(trabajar, nosotros) Quiero que ___ → trabajemos</em>.',
      questions: [
        { id: 'q1', prompt: '(<em>trabajar</em>, nosotros) Quiere que ___ el sábado.',            correct: 'trabajemos' },
        { id: 'q2', prompt: '(<em>comer</em>, nosotros) Espero que ___ pronto.',                    correct: 'comamos' },
        { id: 'q3', prompt: '(<em>escribir</em>, ustedes) Espero que me ___ desde Madrid.',         correct: 'escriban' },
        { id: 'q4', prompt: '(<em>llamar</em>, ellos) Espero que ___ esta noche.',                   correct: 'llamen' },
        { id: 'q5', prompt: '(<em>vivir</em>, vosotros) Espero que ___ muchos años aquí.',            correct: 'viváis' },
        { id: 'q6', prompt: '(<em>ayudar</em>, ellos) Quiero que ___ a su madre.',                     correct: 'ayuden' },
        { id: 'q7', prompt: '(<em>leer</em>, vosotros) Me gusta que ___ tanto.',                         correct: 'leáis' },
        { id: 'q8', prompt: '(<em>aprender</em>, nosotros) Es importante que ___ idiomas.',                correct: 'aprendamos' },
      ],
    },

    {
      id: '79.4',
      title: 'estar, ser, ver, dar',
      type: 'fill',
      instructions: 'Поставьте указанную форму. Внимание на акценты.',
      questions: [
        { id: 'q1', prompt: '(<em>estar</em>, él) No sé. Puede que ___ en su despacho.',     correct: 'esté' },
        { id: 'q2', prompt: '(<em>ser</em>, vosotros) ¡Ojalá ___ felices!',                    correct: 'seáis' },
        { id: 'q3', prompt: '(<em>ser</em>, ello impersonal) ¡Ojalá no ___ grave!',             correct: 'sea' },
        { id: 'q4', prompt: '(<em>estar</em>, tú) No me gusta que ___ triste, Pedro.',           correct: 'estés' },
        { id: 'q5', prompt: '(<em>ver</em>, ellos) Quiero que ___ esa película.',                  correct: 'vean' },
        { id: 'q6', prompt: '(<em>dar</em>, ustedes) Espero que me ___ una respuesta pronto.',      correct: 'den' },
        { id: 'q7', prompt: '(<em>estar</em>, nosotros) Me gusta que ___ todos juntos.',              correct: 'estemos' },
      ],
    },

    {
      id: '79.5',
      title: 'Quizás / Puede que',
      type: 'fill',
      instructions: 'Заполните форму глагола в субхунтиве (3 л. ед. ч., если иное не указано).',
      questions: [
        { id: 'q1', prompt: '¿Has visto a Juan? — No, pero quizás lo ___ mañana. (<em>ver</em>, yo)',       correct: 'vea' },
        { id: 'q2', prompt: '¿Han llamado tus padres? — No. Puede que no ___ hoy. (<em>llamar</em>)',         correct: 'llamen' },
        { id: 'q3', prompt: '¿Qué vas a estudiar? — Es probable que ___ Derecho. (<em>estudiar</em>, yo)',      correct: 'estudie' },
        { id: 'q4', prompt: '¿Abren hoy los bancos? — Puede que no ___ hoy, es sábado. (<em>abrir</em>)',         correct: 'abran' },
        { id: 'q5', prompt: '¿Dónde están tus hermanas? — Puede que ___ en el jardín. (<em>estar</em>)',           correct: 'estén' },
        { id: 'q6', prompt: '¿Cuándo os casáis? — Puede que ___ el año que viene. (<em>casarse</em>, nosotros)',    correct: 'nos casemos' },
        { id: 'q7', prompt: '¿Vais a ganar el torneo? — Es probable que no lo ___. (<em>ganar</em>, nosotros)',     correct: 'ganemos' },
      ],
    },

    {
      id: '79.6',
      title: 'Соедините предложения через que',
      type: 'fill',
      instructions: 'Соедините по образцу: <em>Agustín bebe demasiada cola + A Sonia no le gusta</em> → <em>A Sonia no le gusta que Agustín beba demasiada cola</em>.',
      questions: [
        { id: 'q1', prompt: 'Jaime y Yolanda son amables. — A Pilar le gusta. → A Pilar le gusta que ___ amables. (<em>ser</em>, ellos)',                          correct: 'Jaime y Yolanda sean' },
        { id: 'q2', prompt: 'Ernestina vive en el extranjero. — A Lorenzo no le gusta. → A Lorenzo no le gusta que ___ en el extranjero. (<em>vivir</em>)',         correct: 'Ernestina viva' },
        { id: 'q3', prompt: 'Lolo da muchas fiestas. — A Tomás no le gusta. → A Tomás no le gusta que ___ muchas fiestas. (<em>dar</em>)',                          correct: 'Lolo dé' },
        { id: 'q4', prompt: 'Ves muchas películas de terror. — A tu padre no le gusta. → A tu padre no le gusta que ___ muchas películas de terror. (<em>ver</em>)', correct: 'veas' },
        { id: 'q5', prompt: 'Trabajáis mucho. — A vuestro profesor le encanta. → A vuestro profesor le encanta que ___ mucho. (<em>trabajar</em>)',                    correct: 'trabajéis' },
      ],
    },

    {
      id: '79.7',
      title: 'Какая форма?',
      type: 'choice',
      instructions: 'Выберите грамматически верный вариант.',
      questions: [
        { id: 'q1', prompt: 'Espero que tú ___ pronto.',                  options: ['llegas', 'lleges', 'llegues', 'llegas'], correct: 'llegues' },
        { id: 'q2', prompt: 'No me gusta que vosotros ___ tan poco.',     options: ['comáis', 'comemos', 'comáis no', 'comed'], correct: 'comáis' },
        { id: 'q3', prompt: 'Puede que mañana ___ frío.',                  options: ['hace', 'haga', 'hagas', 'hagamos'], correct: 'haga', explanation: '<em>hacer</em> в субхунтиве: <em>haga</em> (от <em>yo hago</em>).' },
        { id: 'q4', prompt: 'Mi madre quiere que (yo) ___ Derecho.',       options: ['estudio', 'estudie', 'estudies', 'estudiar'], correct: 'estudie' },
        { id: 'q5', prompt: '¡Ojalá ___ no grave!',                         options: ['es', 'sea', 'seas', 'sean'], correct: 'sea' },
        { id: 'q6', prompt: 'No quiero que mis hijos ___ tarde.',          options: ['llegan', 'lleguen', 'llegues', 'llegando'], correct: 'lleguen' },
        { id: 'q7', prompt: 'Es probable que él te ___ esta noche.',         options: ['llama', 'llame', 'llames', 'llamar'], correct: 'llame' },
      ],
    },

    {
      id: '79.8',
      title: 'Indicativo или subjuntivo?',
      type: 'choice',
      instructions: 'Выберите подходящую форму. После «фактовых» глаголов (<em>sé que, es verdad que</em>) идёт индикатив; после желания, вероятности и чувства — субхунтив.',
      questions: [
        { id: 'q1', prompt: 'Sé que Luis ___ en Madrid.',                       options: ['vive', 'viva'], correct: 'vive', explanation: 'После <em>sé que</em> — индикатив (факт).' },
        { id: 'q2', prompt: 'No creo que Luis ___ en Madrid.',                  options: ['vive', 'viva'], correct: 'viva', explanation: 'После <em>no creo que</em> — субхунтив (сомнение).' },
        { id: 'q3', prompt: 'Es verdad que mi prima ___ inglés muy bien.',       options: ['habla', 'hable'], correct: 'habla', explanation: 'Факт после <em>es verdad que</em>.' },
        { id: 'q4', prompt: 'Es probable que mi prima ___ inglés muy bien.',     options: ['habla', 'hable'], correct: 'hable' },
        { id: 'q5', prompt: 'Me gusta que ___ educados, niños.',                  options: ['sois', 'seáis'], correct: 'seáis' },
        { id: 'q6', prompt: 'Sé que vosotros ___ educados.',                       options: ['sois', 'seáis'], correct: 'sois' },
        { id: 'q7', prompt: 'Quiero ___ a Madrid mañana. (= yo / yo)',                options: ['que voy', 'ir', 'que vaya'], correct: 'ir', explanation: 'Один и тот же субъект → инфинитив.' },
        { id: 'q8', prompt: 'Quiero que tú ___ a Madrid mañana.',                       options: ['vas', 'vayas', 'ir'], correct: 'vayas' },
      ],
    },

    {
      id: '79.9',
      title: 'Сопоставьте триггер и пример',
      type: 'match',
      instructions: 'Соотнесите конструкцию с её типичным значением.',
      pool: ['желание', 'вероятность', 'чувство / оценка', 'факт (индикатив)'],
      questions: [
        { id: 'q1', prompt: '<em>Quiero que…</em>',          correct: 'желание' },
        { id: 'q2', prompt: '<em>Puede que…</em>',           correct: 'вероятность' },
        { id: 'q3', prompt: '<em>Me gusta que…</em>',        correct: 'чувство / оценка' },
        { id: 'q4', prompt: '<em>Sé que…</em>',                correct: 'факт (индикатив)' },
        { id: 'q5', prompt: '<em>Es probable que…</em>',       correct: 'вероятность' },
        { id: 'q6', prompt: '<em>Tengo miedo de que…</em>',     correct: 'чувство / оценка' },
        { id: 'q7', prompt: '<em>Espero que…</em>',             correct: 'желание' },
        { id: 'q8', prompt: '<em>Es verdad que…</em>',           correct: 'факт (индикатив)' },
      ],
    },

    {
      id: '79.10',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['trabajemos', 'trabajéis', 'trabajen', 'trabajan'], correct: 'trabajan', explanation: '<em>trabajan</em> — индикатив; в субхунтиве было бы <em>trabajen</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['coma', 'comás', 'comamos', 'coman'], correct: 'comás', explanation: 'Правильно: <em>comas</em> (без акцента) или <em>comáis</em> (vosotros).' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['esté', 'estes', 'estés', 'estemos'], correct: 'estes', explanation: 'У <em>estar</em> нужен акцент: <em>estés</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['de', 'dé', 'des', 'demos'], correct: 'de', explanation: 'У <em>dar</em> 1-е/3-е л. ед. ч. — <em>dé</em> (с акцентом, чтобы не путать с предлогом <em>de</em>).' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['ojalá llueva', 'ojalá lloví', 'ojalá lluevan', 'ojalá no llueva'], correct: 'ojalá lloví', explanation: 'После <em>ojalá</em> — субхунтив.' },
      ],
    },

    {
      id: '79.11',
      title: 'Аудио-диктант',
      type: 'fill',
      instructions: 'Запишите услышанное полностью с диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Quiero que me ayudes mañana.',           correct: ['Quiero que me ayudes mañana.', 'Quiero que me ayudes mañana'] },
        { id: 'q2', prompt: '', audio: 'Espero que coman pronto.',                correct: ['Espero que coman pronto.', 'Espero que coman pronto'] },
        { id: 'q3', prompt: '', audio: 'Puede que esté en su habitación.',         correct: ['Puede que esté en su habitación.', 'Puede que esté en su habitación'] },
        { id: 'q4', prompt: '', audio: 'No me gusta que comáis tan poco.',           correct: ['No me gusta que comáis tan poco.', 'No me gusta que comáis tan poco'] },
        { id: 'q5', prompt: '', audio: '¡Ojalá no sea grave!',                        correct: ['¡Ojalá no sea grave!', 'Ojalá no sea grave.', 'Ojalá no sea grave'] },
        { id: 'q6', prompt: '', audio: 'Es probable que llegue tarde.',                correct: ['Es probable que llegue tarde.', 'Es probable que llegue tarde'] },
      ],
    },

    {
      id: '79.12',
      title: 'Соберите фразу: «Quiero que…»',
      type: 'fill',
      instructions: 'Превратите данную фразу в придаточное после <em>Quiero que…</em>. Образец: <em>tú me ayudas</em> → <em>Quiero que me ayudes</em>.',
      questions: [
        { id: 'q1', prompt: '<em>Carlos me ayuda</em> → Quiero que ___.',          correct: ['Carlos me ayude', 'me ayude Carlos'] },
        { id: 'q2', prompt: '<em>vosotros estudiáis más</em> → Quiero que ___.',    correct: ['estudiéis más', 'vosotros estudiéis más'] },
        { id: 'q3', prompt: '<em>tú comes algo</em> → Quiero que ___.',              correct: ['comas algo'] },
        { id: 'q4', prompt: '<em>ellos llegan a tiempo</em> → Quiero que ___.',       correct: ['lleguen a tiempo', 'ellos lleguen a tiempo'] },
        { id: 'q5', prompt: '<em>tú me escribes pronto</em> → Quiero que ___.',        correct: ['me escribas pronto'] },
      ],
    },
  ],
};
