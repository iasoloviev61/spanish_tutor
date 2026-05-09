// ============================================================
// Unidad 58 — Pretérito indefinido: verbos regulares
// trabajé, comí, viví — простое прошедшее, законченное действие.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u58 = {
  id: 'u58',
  number: 58,
  title: { es: 'trabajé, comí, viví', topic: 'Pretérito indefinido: verbos regulares' },
  topicRu: 'Простое прошедшее: правильные глаголы',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'El <strong>pretérito indefinido</strong> sirve para hablar de acciones <strong>pasadas y ya terminadas</strong>, que ocurrieron en un momento concreto del pasado: <em>anoche, ayer, el lunes pasado, hace dos meses, en 1995…</em>',
      ru: 'Простое прошедшее (<em>pretérito indefinido</em>) — для <strong>законченного</strong> действия в определённой точке прошлого: «вчера», «в понедельник», «два месяца назад», «в 1995 году».',
      examples: [
        { es: 'Anoche no salimos. Nos quedamos en casa.', ru: 'Вчера вечером мы не пошли никуда. Остались дома.' },
        { es: 'Mis padres vivieron en Quito desde 1990 hasta 2001.', ru: 'Мои родители жили в Кито с 1990 по 2001 год.' },
        { es: 'La Primera Guerra Mundial empezó en 1914 y acabó en 1918.', ru: 'Первая мировая началась в 1914 и закончилась в 1918.' },
      ],
    },
    {
      type: 'heading',
      text: 'Окончания правильных глаголов',
    },
    {
      type: 'table',
      caption: 'Pretérito indefinido — formas regulares',
      columns: ['Лицо', '-ar (trabajar)', '-er (comer)', '-ir (vivir)'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex', 'col-ex'],
      rows: [
        ['(yo)',                   '<strong>trabajé</strong>',     '<strong>comí</strong>',     '<strong>viví</strong>'],
        ['(tú)',                   '<strong>trabajaste</strong>',  '<strong>comiste</strong>',  '<strong>viviste</strong>'],
        ['(usted, él, ella)',      '<strong>trabajó</strong>',     '<strong>comió</strong>',    '<strong>vivió</strong>'],
        ['(nosotros, -as)',        '<strong>trabajamos</strong>',  '<strong>comimos</strong>',  '<strong>vivimos</strong>'],
        ['(vosotros, -as)',        '<strong>trabajasteis</strong>','<strong>comisteis</strong>','<strong>vivisteis</strong>'],
        ['(ustedes, ellos, -as)',  '<strong>trabajaron</strong>',  '<strong>comieron</strong>', '<strong>vivieron</strong>'],
      ],
    },
    {
      type: 'rule',
      es: 'Окончания у <strong>-er</strong> и <strong>-ir</strong> глаголов <strong>совпадают</strong> в indefinido. Ударение в формах <em>1ª/3ª sg.</em> на последний слог: <em>trabaj<strong>é</strong>, trabaj<strong>ó</strong>, com<strong>í</strong>, com<strong>ió</strong>, viv<strong>í</strong>, viv<strong>ió</strong></em>.',
      ru: 'У <em>-er</em> и <em>-ir</em> окончания одинаковые. Ударение в «я» и «он/она» — на последний слог, поэтому всегда с <strong>тильдой</strong>: <em>-é, -ó, -í, -ió</em>.',
      examples: [
        { es: 'Yo bailé, él bailó.',       ru: 'Я танцевал — он танцевал.' },
        { es: 'Yo bebí, ella bebió.',      ru: 'Я выпил — она выпила.' },
        { es: 'Yo escribí, él escribió.',   ru: 'Я написал — он написал.' },
      ],
    },
    {
      type: 'atencion',
      es: '<strong>Орфографические сдвиги</strong> в форме <em>yo</em> у глаголов на <em>-car / -gar / -zar</em>: <br>• <em>-car</em> → <strong>-qué</strong>: <em>sacar → saqué</em>, <em>tocar → toqué</em>, <em>buscar → busqué</em>.<br>• <em>-gar</em> → <strong>-gué</strong>: <em>llegar → llegué</em>, <em>pagar → pagué</em>, <em>jugar → jugué</em>.<br>• <em>-zar</em> → <strong>-cé</strong>: <em>empezar → empecé</em>, <em>almorzar → almorcé</em>, <em>cruzar → crucé</em>.<br>Также <em>d-ar</em> идёт по <em>-er/-ir</em>-окончаниям, без тильд: <em>di, diste, dio, dimos, disteis, dieron</em>.',
      ru: 'У -ar глаголов на -car / -gar / -zar в форме «я» меняется буква перед окончанием, чтобы сохранить звук: <em>saqué, llegué, empecé</em>. Глагол <em>dar</em> спрягается по <em>-er/-ir</em>-модели, но <strong>без тильд</strong>: <em>di, diste, dio…</em>',
    },
    {
      type: 'heading',
      text: 'Маркеры времени',
    },
    {
      type: 'table',
      caption: 'Когда indefinido — типичные слова',
      columns: ['Маркер', 'Перевод'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['<em>ayer</em>',                     'вчера'],
        ['<em>anoche</em>',                   'вчера ночью'],
        ['<em>anteayer</em>',                 'позавчера'],
        ['<em>el lunes (pasado)</em>',        'в (прошлый) понедельник'],
        ['<em>la semana pasada</em>',         'на прошлой неделе'],
        ['<em>el mes pasado, el año pasado</em>', 'в прошлом месяце / году'],
        ['<em>hace dos años</em>',             'два года назад'],
        ['<em>en 1995, en mayo</em>',          'в 1995, в мае'],
      ],
    },
    {
      type: 'rule',
      es: 'El indefinido también se usa en <strong>cadenas de acciones</strong> y en <strong>biografías</strong>.',
      ru: 'Indefinido — для <strong>цепочек завершённых действий</strong> («сначала..., потом...») и для <strong>биографий</strong>.',
      examples: [
        { es: 'El profesor entró en el aula, abrió el libro y empezó a explicar.', ru: 'Преподаватель вошёл в класс, открыл книгу и начал объяснять.' },
        { es: 'Cervantes nació en Alcalá de Henares en 1547.', ru: 'Сервантес родился в Алькала-де-Энарес в 1547.' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '58.1',
      title: 'Спряжение -ar (trabajar)',
      type: 'fill',
      instructions: 'Запишите форму глагола <em>trabajar</em> в indefinido (с тильдой, где нужно).',
      questions: [
        { id: 'q1', prompt: '(yo) →',           correct: 'trabajé' },
        { id: 'q2', prompt: '(tú) →',           correct: 'trabajaste' },
        { id: 'q3', prompt: '(él) →',           correct: 'trabajó' },
        { id: 'q4', prompt: '(nosotros) →',     correct: 'trabajamos' },
        { id: 'q5', prompt: '(vosotros) →',     correct: 'trabajasteis' },
        { id: 'q6', prompt: '(ellos) →',        correct: 'trabajaron' },
      ],
    },

    {
      id: '58.2',
      title: 'Спряжение -er и -ir (comer, vivir)',
      type: 'fill',
      instructions: 'Окончания у <em>-er</em> и <em>-ir</em> одинаковые.',
      questions: [
        { id: 'q1', prompt: '(yo, comer) →',           correct: 'comí' },
        { id: 'q2', prompt: '(tú, comer) →',           correct: 'comiste' },
        { id: 'q3', prompt: '(ella, comer) →',         correct: 'comió' },
        { id: 'q4', prompt: '(nosotros, comer) →',     correct: 'comimos' },
        { id: 'q5', prompt: '(vosotros, comer) →',     correct: 'comisteis' },
        { id: 'q6', prompt: '(ellos, comer) →',         correct: 'comieron' },
        { id: 'q7', prompt: '(yo, vivir) →',            correct: 'viví' },
        { id: 'q8', prompt: '(él, vivir) →',            correct: 'vivió' },
        { id: 'q9', prompt: '(nosotros, vivir) →',      correct: 'vivimos' },
        { id: 'q10', prompt: '(ellos, escribir) →',      correct: 'escribieron' },
      ],
    },

    {
      id: '58.3',
      title: 'Орфография: -car / -gar / -zar в форме yo',
      type: 'fill',
      instructions: 'Образуйте форму <em>yo</em> в indefinido. Помните о смене буквы перед <em>-é</em>.',
      questions: [
        { id: 'q1', prompt: '<em>sacar</em> → (yo)',     correct: 'saqué' },
        { id: 'q2', prompt: '<em>buscar</em> → (yo)',     correct: 'busqué' },
        { id: 'q3', prompt: '<em>tocar</em> → (yo)',      correct: 'toqué' },
        { id: 'q4', prompt: '<em>llegar</em> → (yo)',     correct: 'llegué' },
        { id: 'q5', prompt: '<em>pagar</em> → (yo)',      correct: 'pagué' },
        { id: 'q6', prompt: '<em>jugar</em> → (yo)',      correct: 'jugué' },
        { id: 'q7', prompt: '<em>empezar</em> → (yo)',    correct: 'empecé' },
        { id: 'q8', prompt: '<em>almorzar</em> → (yo)',   correct: 'almorcé' },
        { id: 'q9', prompt: '<em>cruzar</em> → (yo)',     correct: 'crucé' },
      ],
    },

    {
      id: '58.4',
      title: 'Раскройте скобки',
      type: 'fill',
      instructions: 'Поставьте глагол в нужную форму indefinido.',
      questions: [
        { id: 'q1', prompt: 'Ayer (yo, hablar) ___ con Marta por teléfono.',          correct: 'hablé' },
        { id: 'q2', prompt: 'El sábado (nosotros, comer) ___ paella en casa.',         correct: 'comimos' },
        { id: 'q3', prompt: 'En 2010 mis padres (vivir) ___ en Sevilla.',                correct: 'vivieron' },
        { id: 'q4', prompt: '¿Tú (escribir) ___ el correo?',                              correct: 'escribiste' },
        { id: 'q5', prompt: 'Anoche Carla (cantar) ___ en el bar.',                       correct: 'cantó' },
        { id: 'q6', prompt: 'La semana pasada (vosotros, viajar) ___ a Lisboa.',           correct: 'viajasteis' },
        { id: 'q7', prompt: 'Mis amigos (estudiar) ___ inglés cinco años.',                correct: 'estudiaron' },
        { id: 'q8', prompt: 'En la fiesta (yo, bailar) ___ mucho.',                          correct: 'bailé' },
        { id: 'q9', prompt: '(yo, llegar) ___ tarde a la reunión ayer.',                     correct: 'llegué' },
        { id: 'q10', prompt: 'En 2001 (yo, empezar) ___ a estudiar español.',                  correct: 'empecé' },
      ],
    },

    {
      id: '58.5',
      title: 'Кто что делал',
      type: 'fill',
      instructions: 'Закончите рассказ о вчерашнем дне Карла.',
      questions: [
        { id: 'q1', prompt: 'Carlos (levantarse) ___ a las siete.',           correct: ['se levantó'] },
        { id: 'q2', prompt: '(desayunar) ___ café y tostadas.',                correct: 'desayunó' },
        { id: 'q3', prompt: 'Después (salir) ___ de casa a las ocho.',           correct: 'salió' },
        { id: 'q4', prompt: '(trabajar) ___ hasta las dos.',                     correct: 'trabajó' },
        { id: 'q5', prompt: 'Por la tarde (correr) ___ en el parque.',           correct: 'corrió' },
        { id: 'q6', prompt: 'Por la noche (cenar) ___ con su novia.',             correct: 'cenó' },
        { id: 'q7', prompt: 'Después de la cena (ver) ___ una película.',          correct: 'vio', explanation: '<em>ver</em> в indefinido — без тильды: <em>vi, viste, vio</em>.' },
        { id: 'q8', prompt: 'Y por fin (acostarse) ___ a las once.',                 correct: ['se acostó'] },
      ],
    },

    {
      id: '58.6',
      title: 'Сопоставьте местоимение и форму',
      type: 'match',
      instructions: 'Подберите к каждому подлежащему правильную форму глагола <em>vivir</em>.',
      pool: ['viví', 'viviste', 'vivió', 'vivimos', 'vivisteis', 'vivieron'],
      questions: [
        { id: 'q1', prompt: 'yo',         correct: 'viví' },
        { id: 'q2', prompt: 'tú',         correct: 'viviste' },
        { id: 'q3', prompt: 'ella',       correct: 'vivió' },
        { id: 'q4', prompt: 'nosotras',   correct: 'vivimos' },
        { id: 'q5', prompt: 'vosotros',   correct: 'vivisteis' },
        { id: 'q6', prompt: 'ellos',      correct: 'vivieron' },
      ],
    },

    {
      id: '58.7',
      title: 'Multi: формы yo для -car, -gar, -zar',
      type: 'multi',
      instructions: 'Отметьте все <strong>правильные</strong> формы первого лица единственного числа в indefinido.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие формы <em>yo</em> верны?',
          options: [
            'saqué',
            'sacé',
            'llegué',
            'llegé',
            'empecé',
            'empezé',
            'pagué',
            'pagé',
            'crucé',
            'cruzé',
            'jugué',
            'jugé',
          ],
          correct: ['saqué', 'llegué', 'empecé', 'pagué', 'crucé', 'jugué'],
          explanation: '<em>-car → -qué</em>, <em>-gar → -gué</em>, <em>-zar → -cé</em>.',
        },
      ],
    },

    {
      id: '58.8',
      title: 'Маркеры времени: indefinido или нет?',
      type: 'choice',
      instructions: 'Выберите фразу, где можно использовать <em>indefinido</em>.',
      questions: [
        { id: 'q1', prompt: 'С каким маркером уместен indefinido?', options: ['ayer', 'hoy', 'todos los días'], correct: 'ayer' },
        { id: 'q2', prompt: 'А здесь?', options: ['anoche', 'normalmente', 'esta semana'], correct: 'anoche' },
        { id: 'q3', prompt: 'А здесь?', options: ['en 1990', 'siempre', 'este año'], correct: 'en 1990' },
        { id: 'q4', prompt: 'А здесь?', options: ['hace dos meses', 'a veces', 'últimamente'], correct: 'hace dos meses' },
        { id: 'q5', prompt: 'А здесь?', options: ['el martes pasado', 'todos los martes', 'cada mes'], correct: 'el martes pasado' },
      ],
    },

    {
      id: '58.9',
      title: 'Перепишите в прошедшем',
      type: 'fill',
      instructions: 'Перепишите фразу в indefinido, поставив маркер <em>ayer</em>.',
      questions: [
        { id: 'q1', prompt: '<em>Hoy hablo con María.</em> → Ayer …',     correct: ['Ayer hablé con María.', 'Ayer hablé con María'] },
        { id: 'q2', prompt: '<em>Comemos en un restaurante.</em> → Ayer …', correct: ['Ayer comimos en un restaurante.', 'Ayer comimos en un restaurante'] },
        { id: 'q3', prompt: '<em>Carlos escribe un correo.</em> → Ayer …',  correct: ['Ayer Carlos escribió un correo.', 'Ayer Carlos escribió un correo'] },
        { id: 'q4', prompt: '<em>Mis padres viajan a Roma.</em> → Ayer …',  correct: ['Ayer mis padres viajaron a Roma.', 'Ayer mis padres viajaron a Roma'] },
        { id: 'q5', prompt: '<em>Yo llego tarde.</em> → Ayer …',             correct: ['Ayer (yo) llegué tarde.', 'Ayer llegué tarde.', 'Ayer llegué tarde'] },
      ],
    },

    {
      id: '58.10',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['hablé', 'habló', 'hablamos', 'hablaron', 'hablasteis', 'hablé yo', 'habló él', 'habléis'], correct: 'habléis', explanation: 'Это форма presente subjuntivo. В indefinido — <em>hablasteis</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['viví', 'vivió', 'vivieron', 'vivisteis', 'vivieste'], correct: 'vivieste', explanation: '<em>tú viviste</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['saqué', 'sacé', 'sacaste', 'sacó', 'sacaron'], correct: 'sacé', explanation: '<em>-car → saqué</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['di', 'diste', 'dió', 'dimos', 'dieron'], correct: 'dió', explanation: '<em>dar</em> — без тильды: <em>dio</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['empecé', 'empezé', 'empezaste', 'empezó', 'empezamos'], correct: 'empezé', explanation: '<em>-zar → empecé</em>.' },
      ],
    },

    {
      id: '58.11',
      title: 'Биография: разверните',
      type: 'fill',
      instructions: 'Поставьте глагол в форму indefinido.',
      questions: [
        { id: 'q1', prompt: 'Frida Kahlo (nacer) ___ en México en 1907.',                 correct: 'nació' },
        { id: 'q2', prompt: 'Estudió pintura y (casarse) ___ con Diego Rivera.',           correct: ['se casó'] },
        { id: 'q3', prompt: 'En 1939 (viajar) ___ a París por primera vez.',                 correct: 'viajó' },
        { id: 'q4', prompt: 'Allí (conocer) ___ a varios artistas surrealistas.',             correct: 'conoció' },
        { id: 'q5', prompt: 'Frida (vivir) ___ en su Casa Azul de Coyoacán.',                  correct: 'vivió' },
        { id: 'q6', prompt: 'En 1954 la pintora (morir) ___ a los 47 años.',                   correct: 'murió' },
      ],
    },

    {
      id: '58.12',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите фразу с диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Anoche cené en casa.',                  correct: ['Anoche cené en casa.', 'Anoche cené en casa'] },
        { id: 'q2', prompt: '', audio: 'Trabajé hasta las ocho.',                correct: ['Trabajé hasta las ocho.', 'Trabajé hasta las ocho'] },
        { id: 'q3', prompt: '', audio: 'Mis padres vivieron en Quito.',          correct: ['Mis padres vivieron en Quito.', 'Mis padres vivieron en Quito'] },
        { id: 'q4', prompt: '', audio: 'Llegué tarde a la reunión.',              correct: ['Llegué tarde a la reunión.', 'Llegué tarde a la reunión'] },
        { id: 'q5', prompt: '', audio: 'Empecé a estudiar español el año pasado.', correct: ['Empecé a estudiar español el año pasado.', 'Empecé a estudiar español el año pasado'] },
        { id: 'q6', prompt: '', audio: 'Cervantes nació en 1547.',                  correct: ['Cervantes nació en 1547.', 'Cervantes nació en 1547'] },
      ],
    },
  ],
};
