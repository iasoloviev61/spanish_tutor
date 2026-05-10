// ============================================================
// Unidad 67 — futuro simple: verbos regulares.
// «trabajaré, comeré, viviré»: окончания добавляются к инфинитиву.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u67 = {
  id: 'u67',
  number: 67,
  title: { es: 'trabajaré, comeré, viviré', topic: 'Futuro simple: verbos regulares' },
  topicRu: 'Простое будущее: правильные глаголы',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'El <strong>futuro simple</strong> regular se forma añadiendo al <strong>infinitivo</strong> las terminaciones <em>-é, -ás, -á, -emos, -éis, -án</em>: <em>trabajaré, comeré, viviré…</em>',
      ru: 'Простое будущее у правильных глаголов = <strong>инфинитив целиком</strong> + одно общее окончание для всех трёх спряжений: <em>-é, -ás, -á, -emos, -éis, -án</em>. Никаких изменений основы — оно «приклеивается» к -ar / -er / -ir.',
      examples: [
        { es: 'Mañana <strong>lloverá</strong> en el norte.', ru: 'Завтра на севере будет идти дождь.' },
        { es: '<strong>Llegaremos</strong> a Caracas a las cuatro y cuarto.', ru: 'Мы прилетим в Каракас в четверть пятого.' },
      ],
    },
    {
      type: 'heading',
      text: 'Окончания будущего времени (одни и те же)',
    },
    {
      type: 'table',
      caption: 'futuro simple: trabajar / comer / vivir',
      columns: ['Лицо', '-ar (trabajar)', '-er (comer)', '-ir (vivir)'],
      colClasses: ['col-pattern', 'col-pattern', 'col-pattern', 'col-pattern'],
      rows: [
        ['(yo)',                     '<strong>trabajar<u>é</u></strong>',     '<strong>comer<u>é</u></strong>',     '<strong>vivir<u>é</u></strong>'],
        ['(tú)',                      '<strong>trabajar<u>ás</u></strong>',     '<strong>comer<u>ás</u></strong>',     '<strong>vivir<u>ás</u></strong>'],
        ['(usted, él, ella)',           '<strong>trabajar<u>á</u></strong>',     '<strong>comer<u>á</u></strong>',     '<strong>vivir<u>á</u></strong>'],
        ['(nosotros, -as)',              '<strong>trabajar<u>emos</u></strong>', '<strong>comer<u>emos</u></strong>', '<strong>vivir<u>emos</u></strong>'],
        ['(vosotros, -as)',              '<strong>trabajar<u>éis</u></strong>',  '<strong>comer<u>éis</u></strong>',  '<strong>vivir<u>éis</u></strong>'],
        ['(ustedes, ellos, -as)',         '<strong>trabajar<u>án</u></strong>',   '<strong>comer<u>án</u></strong>',   '<strong>vivir<u>án</u></strong>'],
      ],
    },
    {
      type: 'heading',
      text: 'Когда используем futuro simple',
    },
    {
      type: 'rule',
      es: 'Para acciones o situaciones <strong>futuras</strong>: <em>mañana, dentro de tres meses, el año que viene…</em>',
      ru: 'Для будущих действий с привязкой ко времени: «завтра», «через три месяца», «в следующем году». Часто появляется с маркерами <em>luego, más tarde, pronto, el próximo lunes, la semana que viene, en el año 2050, dentro de + срок, cuando + ситуация в будущем</em>.',
      examples: [
        { es: 'El nuevo edificio <strong>estará</strong> acabado dentro de seis meses.', ru: 'Новое здание будет готово через полгода.' },
        { es: 'Mañana te <strong>sentirás</strong> mejor.', ru: 'Завтра тебе станет лучше.' },
        { es: '—¿Has llamado a José? —No. Lo <strong>llamaré</strong> más tarde.', ru: '— Ты звонил Хосе? — Нет, позвоню попозже.' },
        { es: 'Te <strong>avisaré</strong> cuando aterricemos.', ru: 'Я тебе сообщу, как только мы приземлимся.' },
      ],
    },
    {
      type: 'rule',
      es: 'También se usa el futuro simple para hacer <strong>predicciones</strong>: el tiempo, el horóscopo, el futuro lejano.',
      ru: 'Futuro simple — это «прогноз»: погода на выходные, гороскоп, что будет через сто лет.',
      examples: [
        { es: 'El fin de semana <strong>nevará</strong> a partir de mil metros.', ru: 'На выходных выше тысячи метров пойдёт снег.' },
        { es: '<strong>Conocerás</strong> a una persona maravillosa y os <strong>casaréis</strong>.', ru: 'Ты встретишь чудесного человека, и вы поженитесь.' },
        { es: 'En el año 2050 <strong>llegaremos</strong> a Marte.', ru: 'В 2050 году мы долетим до Марса.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Las terminaciones del futuro <strong>llevan tilde</strong> en todas las personas <strong>excepto en <em>nosotros, -as</em></strong>: <em>trabajaré, trabajarás, trabajará, trabajaremos, trabajaréis, trabajarán</em>.',
      ru: '<strong>Все формы будущего, кроме <em>nosotros</em>, несут ударение (диакритику)</strong>: <em>-é, -ás, -á, -éis, -án</em>. Только <em>-emos</em> — без значка. Это важная орфографическая ловушка.',
      examples: [
        { es: 'Trabajar<strong>é</strong> mañana, pero el lunes no trabajar<strong>emos</strong>.', ru: 'Завтра я поработаю, но в понедельник мы работать не будем.' },
        { es: '<s>trabajaras</s> → trabajar<strong>ás</strong> ; <s>trabajaran</s> → trabajar<strong>án</strong>.', ru: 'Без диакритики получаются формы прошедшего сослагательного — это совсем другое время.' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '67.1',
      title: 'Соберите futuro simple',
      type: 'fill',
      instructions: 'Запишите форму целиком, с диакритикой. Образец: <em>(yo, trabajar) → trabajaré</em>.',
      questions: [
        { id: 'q1', prompt: '(yo, hablar) →',                    correct: ['hablaré'] },
        { id: 'q2', prompt: '(tú, comer) →',                      correct: ['comerás'] },
        { id: 'q3', prompt: '(él, vivir) →',                       correct: ['vivirá'] },
        { id: 'q4', prompt: '(nosotros, viajar) →',                  correct: ['viajaremos'] },
        { id: 'q5', prompt: '(vosotros, beber) →',                     correct: ['beberéis'] },
        { id: 'q6', prompt: '(ellos, escribir) →',                       correct: ['escribirán'] },
        { id: 'q7', prompt: '(usted, llegar) →',                            correct: ['llegará'] },
        { id: 'q8', prompt: '(yo, abrir) →',                                  correct: ['abriré'] },
      ],
    },

    {
      id: '67.2',
      title: 'Раскройте скобки',
      type: 'fill',
      instructions: 'Поставьте глагол в futuro simple.',
      questions: [
        { id: 'q1', prompt: 'Hoy no puedo ir. (Yo, ir) ___ mañana.',                          correct: ['Iré'] },
        { id: 'q2', prompt: '—Nos vamos hoy a Panamá. —¿Y cuándo (volver) ___?',                correct: ['volveréis', 'volverán'] },
        { id: 'q3', prompt: 'Hoy no te puedo llamar. Te (yo, llamar) ___ el lunes.',              correct: ['llamaré'] },
        { id: 'q4', prompt: '—¿Habéis acabado la traducción? —No, la (acabar) ___ la semana que viene.', correct: ['acabaremos'] },
        { id: 'q5', prompt: '—¿Han arreglado ya el ordenador? —No, lo (arreglar) ___ en cuanto puedan.',  correct: ['arreglarán'] },
        { id: 'q6', prompt: 'Estas plantas están secas. Riégalas o (morirse) ___.',                    correct: ['se morirán'] },
        { id: 'q7', prompt: '—¿Crees que (yo, aprobar) ___? —(Aprobar) ___ si estudias mucho.',          correct: ['aprobaré / Aprobarás'] },
        { id: 'q8', prompt: 'Ahora no tenemos hambre. (Comer) ___ más tarde.',                              correct: ['Comeremos'] },
        { id: 'q9', prompt: '—Quiero una bici. —Te (yo, regalar) ___ una para Reyes.',                          correct: ['regalaré'] },
        { id: 'q10', prompt: 'Cuando tenga tiempo, (yo, leer) ___ ese libro.',                                    correct: ['leeré'] },
      ],
    },

    {
      id: '67.3',
      title: 'Прогноз погоды',
      type: 'fill',
      instructions: 'Заполните прогноз: глаголы в futuro simple.',
      questions: [
        { id: 'q1', prompt: 'El fin de semana (ser) ___ bastante frío.',                            correct: ['será'] },
        { id: 'q2', prompt: 'El sábado (bajar) ___ las temperaturas en todo el país.',                correct: ['bajarán'] },
        { id: 'q3', prompt: 'Y (nevar) ___ en zonas altas del norte.',                                  correct: ['nevará'] },
        { id: 'q4', prompt: 'El domingo (subir) ___ un poco las temperaturas.',                            correct: ['subirán'] },
        { id: 'q5', prompt: 'Aunque (seguir) ___ haciendo frío.',                                            correct: ['seguirá'] },
        { id: 'q6', prompt: '(Llover) ___ en el oeste y suroeste.',                                            correct: ['Lloverá'] },
        { id: 'q7', prompt: 'En el centro (soplar) ___ fuertes vientos del norte.',                            correct: ['soplarán'] },
      ],
    },

    {
      id: '67.4',
      title: 'Маркер времени',
      type: 'choice',
      instructions: 'Какое выражение времени уместно с futuro simple?',
      questions: [
        { id: 'q1', prompt: 'Te llamaré ___.',
          options: ['más tarde', 'ayer', 'hace dos años', 'antes de ayer'],
          correct: 'más tarde' },
        { id: 'q2', prompt: 'Pronto encontrarás trabajo. — здесь <em>pronto</em> значит:',
          options: ['скоро', 'давно', 'никогда', 'вчера'],
          correct: 'скоро' },
        { id: 'q3', prompt: 'Iván llegará ___ tres días.',
          options: ['dentro de', 'hace', 'desde', 'antes de'],
          correct: 'dentro de' },
        { id: 'q4', prompt: 'Le escribiremos a la abuela ___.',
          options: ['la semana que viene', 'la semana pasada', 'el mes pasado', 'anoche'],
          correct: 'la semana que viene' },
        { id: 'q5', prompt: 'Te avisaré ___ aterricemos.',
          options: ['cuando', 'mientras', 'desde que', 'antes de'],
          correct: 'cuando',
          explanation: 'После <em>cuando</em> о будущем используется субхунтив (<em>aterricemos</em>), а в главной — futuro.' },
      ],
    },

    {
      id: '67.5',
      title: 'Multi: где правильно поставлены ударения?',
      type: 'multi',
      instructions: 'Отметьте все формы, в которых <strong>правильно</strong> расставлены диакритические знаки.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие формы написаны верно?',
          options: ['hablare', 'hablaré', 'comeras', 'comerás', 'vivirá', 'viviran', 'vivirán', 'estudiaremos', 'estudiarémos', 'cantaréis', 'cantareis', 'llegarán', 'llegaran'],
          correct: ['hablaré', 'comerás', 'vivirá', 'vivirán', 'estudiaremos', 'cantaréis', 'llegarán'],
          explanation: 'Все формы futuro, <strong>кроме <em>nosotros</em></strong> (<em>-emos</em>), несут диакритику.',
        },
      ],
    },

    {
      id: '67.6',
      title: 'Перепишите в futuro simple',
      type: 'fill',
      instructions: 'Замените <em>presente</em> на futuro simple, ничего не теряя.',
      questions: [
        { id: 'q1', prompt: 'Hoy estudio en casa. → Mañana ___ en casa.',                  correct: ['estudiaré'] },
        { id: 'q2', prompt: 'Ahora no tengo tiempo. → Más tarde ___ tiempo.',                  correct: ['tendré'],
          explanation: '<em>tener</em> в будущем — нерегулярный (<em>tendr-</em>), но окончания те же. См. Unidad 68.' },
        { id: 'q3', prompt: 'Compramos pan ahora. → Compramos pan luego. → ___ pan luego.',         correct: ['Compraremos'] },
        { id: 'q4', prompt: 'Hoy no como pescado. → Mañana ___ pescado.',                                correct: ['comeré'] },
        { id: 'q5', prompt: 'Hoy lluvioso. → Mañana ___ todo el día.',                                    correct: ['lloverá'] },
        { id: 'q6', prompt: 'Hoy llegan los amigos a las ocho. → Mañana ___ los amigos a las ocho.',         correct: ['llegarán'] },
      ],
    },

    {
      id: '67.7',
      title: 'Match: лицо ↔ окончание',
      type: 'match',
      instructions: 'Соедините местоимение с окончанием futuro.',
      pool: ['-é', '-ás', '-á', '-emos', '-éis', '-án'],
      questions: [
        { id: 'q1', prompt: '<em>yo</em>',                       correct: '-é' },
        { id: 'q2', prompt: '<em>tú</em>',                         correct: '-ás' },
        { id: 'q3', prompt: '<em>él, ella, usted</em>',              correct: '-á' },
        { id: 'q4', prompt: '<em>nosotros, -as</em>',                  correct: '-emos' },
        { id: 'q5', prompt: '<em>vosotros, -as</em>',                    correct: '-éis' },
        { id: 'q6', prompt: '<em>ellos, ellas, ustedes</em>',              correct: '-án' },
      ],
    },

    {
      id: '67.8',
      title: 'Гороскоп',
      type: 'fill',
      instructions: 'Допишите предсказания, поставив глагол в futuro simple.',
      questions: [
        { id: 'q1', prompt: 'Aries: (recibir) ___ muchas invitaciones esta semana.',
          correct: ['recibirá', 'recibirás'] },
        { id: 'q2', prompt: 'Tauro: tus amigos te (ayudar) ___ con un problema.',
          correct: ['ayudarán'] },
        { id: 'q3', prompt: 'Cáncer: (yo, viajar) ___ a un país lejano y (conocer) ___ a alguien importante.',
          correct: ['viajaré / conoceré'] },
        { id: 'q4', prompt: 'Escorpio: (pasar) ___ unos días muy felices con la familia.',
          correct: ['pasarás', 'pasará'] },
        { id: 'q5', prompt: 'Géminis: este verano (vosotros, conocer) ___ a alguien especial.',
          correct: ['conoceréis'] },
      ],
    },

    {
      id: '67.9',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма ошибочна.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?',
          options: ['hablaré', 'comeré', 'viviré', 'estudiare'],
          correct: 'estudiare',
          explanation: 'У <em>yo</em> в futuro обязательно <em>-é</em> с диакритикой.' },
        { id: 'q2', prompt: 'Где ошибка?',
          options: ['trabajaremos', 'comerémos', 'viviremos', 'estudiaremos'],
          correct: 'comerémos',
          explanation: 'Форма <em>nosotros</em> (-emos) — без диакритики.' },
        { id: 'q3', prompt: 'Где ошибка?',
          options: ['hablarán', 'comerán', 'vivirán', 'estudiaran'],
          correct: 'estudiaran',
          explanation: 'Без диакритики — это уже imperfecto de subjuntivo. В futuro — <em>estudiarán</em>.' },
      ],
    },

    {
      id: '67.10',
      title: 'Из presente в futuro',
      type: 'fill',
      instructions: 'Перепишите фразу в futuro simple. Подлежащее не меняется.',
      questions: [
        { id: 'q1', prompt: 'Yo trabajo el lunes. (la próxima semana) →',
          correct: ['Yo trabajaré la próxima semana.', 'Trabajaré la próxima semana.', 'Trabajaré la próxima semana'] },
        { id: 'q2', prompt: 'Comemos en casa hoy. (mañana) →',
          correct: ['Comeremos en casa mañana.', 'Comeremos en casa mañana'] },
        { id: 'q3', prompt: 'Vivimos en Madrid ahora. (en el año 2030) →',
          correct: ['Viviremos en Madrid en el año 2030.', 'Viviremos en Madrid en el año 2030'] },
        { id: 'q4', prompt: 'Pedro estudia inglés. (el año que viene) →',
          correct: ['Pedro estudiará inglés el año que viene.', 'Pedro estudiará inglés el año que viene'] },
      ],
    },

    {
      id: '67.11',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите фразу полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Mañana lloverá en el norte.',
          correct: ['Mañana lloverá en el norte.', 'Mañana lloverá en el norte'] },
        { id: 'q2', prompt: '', audio: 'Te llamaré más tarde.',
          correct: ['Te llamaré más tarde.', 'Te llamaré más tarde'] },
        { id: 'q3', prompt: '', audio: 'Llegaremos a Caracas a las cuatro y cuarto.',
          correct: ['Llegaremos a Caracas a las cuatro y cuarto.', 'Llegaremos a Caracas a las cuatro y cuarto'] },
        { id: 'q4', prompt: '', audio: 'El nuevo edificio estará acabado dentro de seis meses.',
          correct: ['El nuevo edificio estará acabado dentro de seis meses.', 'El nuevo edificio estará acabado dentro de seis meses'] },
        { id: 'q5', prompt: '', audio: 'Te avisaré cuando aterricemos.',
          correct: ['Te avisaré cuando aterricemos.', 'Te avisaré cuando aterricemos'] },
        { id: 'q6', prompt: '', audio: 'Conocerás a una persona maravillosa.',
          correct: ['Conocerás a una persona maravillosa.', 'Conocerás a una persona maravillosa'] },
      ],
    },
  ],
};
