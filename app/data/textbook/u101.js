// ============================================================
// Unidad 101 — Adverbios de tiempo (1)
// hoy, ayer, anteayer, anoche, mañana, pasado mañana,
// ahora, entonces, luego, después, pronto, temprano, tarde.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u101 = {
  id: 'u101',
  number: 101,
  title: { es: 'hoy, ayer, entonces, luego...', topic: 'Adverbios de tiempo (1)' },
  topicRu: 'Наречия времени: «когда»',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Los <strong>adverbios de tiempo</strong> dan información sobre <em>cuándo</em> sucede algo. Responden a la pregunta <em>¿cuándo?</em>',
      ru: '<strong>Наречия времени</strong> отвечают на вопрос <em>¿cuándo?</em> («когда?»). К ним относятся слова, обозначающие конкретный момент (<em>ahora, hoy, ayer</em>) и относительные обозначения («раньше», «позже», «после этого»).',
      examples: [
        { es: '¿Cuándo te vas? — Mañana.', ru: '— Когда уезжаешь? — Завтра.' },
        { es: '¿Me ayudas? — Ahora no puedo, estoy ocupado.', ru: '— Поможешь? — Сейчас не могу, я занят.' },
        { es: 'Ayer estuve con Antón.', ru: 'Вчера я был с Антоном.' },
      ],
    },

    {
      type: 'heading',
      text: 'Календарная ось: anteayer → pasado mañana',
    },
    {
      type: 'table',
      caption: 'Дни относительно «сегодня»',
      columns: ['Наречие', 'Перевод', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<strong>anteayer</strong>',     'позавчера',    '<em>Anteayer vimos a Carmen.</em>'],
        ['<strong>ayer</strong>',          'вчера',         '<em>Ayer estuve en León.</em>'],
        ['<strong>anoche</strong>',        'вчера вечером / ночью', '<em>Anoche no pude dormir.</em>'],
        ['<strong>hoy</strong>',           'сегодня',       '<em>Hoy es sábado.</em>'],
        ['<strong>ahora</strong>',         'сейчас',         '<em>Ahora no puedo, estoy ocupada.</em>'],
        ['<strong>mañana</strong>',        'завтра',         '<em>Mañana te lo devuelvo.</em>'],
        ['<strong>pasado mañana</strong>', 'послезавтра',    '<em>Pasado mañana voy al médico.</em>'],
      ],
    },

    {
      type: 'heading',
      text: 'entonces, luego, después',
    },
    {
      type: 'rule',
      es: '<em>entonces</em> = «в тот момент, о котором говорим» (в прошлом или будущем — момент в фокусе рассказа).',
      ru: '<em>entonces</em> переводится как «тогда», «в тот момент» — это <strong>момент, о котором уже идёт речь</strong>. Не «потом», а «в тот же момент».',
      examples: [
        { es: 'Le pregunté por Paula y entonces me contó todo.', ru: 'Я спросил его о Пауле — и тогда (в тот момент) он мне всё рассказал.' },
        { es: 'Sonaron unas trompetas y entonces empezó el espectáculo.', ru: 'Зазвучали трубы — и тут начался спектакль.' },
      ],
    },
    {
      type: 'rule',
      es: '<em>luego</em> и <em>después</em> = «потом», «позже» — момент <strong>позже</strong> того, о котором говорим.',
      ru: '<em>luego</em> и <em>después</em> практически синонимы. Оба значат «потом» — указывают на момент <strong>после</strong> того, о котором сейчас речь. Часто взаимозаменяемы.',
      examples: [
        { es: 'Ahora tengo clase. Nos vemos luego.', ru: 'Сейчас у меня занятия. Увидимся потом.' },
        { es: 'Me voy. Después te llamo.', ru: 'Я ухожу. Потом тебе позвоню.' },
        { es: 'Primero hablé con Carmen y después con Olivia.', ru: 'Сначала я поговорил с Кармен, потом — с Оливией.' },
      ],
    },

    {
      type: 'heading',
      text: 'pronto, temprano, tarde',
    },
    {
      type: 'table',
      caption: 'Скоро / рано / поздно',
      columns: ['Наречие', 'Значение', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<strong>pronto</strong>',    'скоро (мало времени до); раньше нормы',
                                        '<em>Lo sabrás pronto.</em><br><em>Es pronto. La clase no empieza hasta las ocho.</em>'],
        ['<strong>temprano</strong>',  'рано (в начале дня); раньше обычного',
                                        '<em>Abel se levanta temprano.</em><br><em>Hoy quiero comer temprano.</em>'],
        ['<strong>tarde</strong>',     'поздно (в конце дня); позже обычного',
                                        '<em>Ayer cenamos muy tarde.</em><br><em>Habéis llegado tarde.</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'No confundas <em>pronto</em> y <em>temprano</em>: <em>pronto</em> = «скоро» (через малое время), <em>temprano</em> = «рано» (в начале дня).',
      ru: 'Различайте: <strong>pronto</strong> = «скоро» (мало времени осталось), <strong>temprano</strong> = «рано» (в начале дня). По-русски оба часто переводятся как «рано», но в испанском это разные слова.',
    },

    {
      type: 'heading',
      text: 'Позиция в предложении',
    },
    {
      type: 'rule',
      es: '<em>ahora, hoy, ayer, anoche...</em> pueden ir <strong>al principio</strong>, <strong>al final</strong> o <strong>en el medio</strong> (detrás del verbo).',
      ru: 'Наречия <em>ahora, hoy, ayer, anoche</em> и т. д. могут стоять <strong>в начале</strong>, <strong>в конце</strong> или <strong>после глагола</strong>. Все три варианта корректны.',
      examples: [
        { es: 'Anoche no pude dormir.', ru: 'Прошлой ночью я не мог уснуть.' },
        { es: 'No pude dormir anoche.', ru: 'Я не мог уснуть прошлой ночью.' },
        { es: 'Ayer estuve con Antón.', ru: 'Вчера я был с Антоном.' },
        { es: 'Estuve con Antón ayer.', ru: 'Я был с Антоном вчера.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Cuando <em>ahora, hoy, ayer...</em> van al <strong>principio</strong> de la frase, el sujeto suele ir <strong>detrás del verbo</strong>: <em>Ayer Pablo llegó</em> → <em>Ayer <strong>llegó Pablo</strong></em>.',
      ru: 'Когда наречие времени стоит <strong>в начале</strong> фразы, подлежащее обычно идёт <strong>после глагола</strong> (инверсия). <em>Ayer Pablo llegó</em> звучит коряво — носитель скажет <em>Ayer llegó Pablo</em>.',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '101.1',
      title: 'Календарь: anoche, anteayer, ayer, hoy, mañana, pasado mañana',
      type: 'fill',
      instructions: 'Сегодня <strong>суббота 10</strong>. Подставьте подходящее наречие. Вариантов больше одного быть не должно.',
      questions: [
        { id: 'q1', prompt: 'El lunes 12 voy al médico → ___ voy al médico.',         correct: 'Pasado mañana', explanation: 'Через день после завтрашнего = pasado mañana.' },
        { id: 'q2', prompt: 'El sábado 10 he quedado con Eloísa → ___ he quedado con Eloísa.', correct: 'Hoy' },
        { id: 'q3', prompt: 'El jueves 8 estuve en León → ___ estuve en León.',        correct: 'Anteayer' },
        { id: 'q4', prompt: 'El viernes 9 por la noche salimos a cenar → ___ salimos a cenar.', correct: 'Anoche', explanation: '«Вчера ночью» = anoche.' },
        { id: 'q5', prompt: 'El domingo 11 vamos al campo → ___ vamos al campo.',     correct: 'Mañana' },
        { id: 'q6', prompt: 'El viernes 9 recibí una postal → ___ recibí una postal.', correct: 'Ayer' },
      ],
    },

    {
      id: '101.2',
      title: 'Соберите фразу: наречие в начале + инверсия',
      type: 'fill',
      instructions: 'Соберите фразу. Если наречие времени стоит в начале — после него идёт глагол, потом подлежащее.',
      questions: [
        { id: 'q1', prompt: '(pasado mañana / Emma / se marcha) →',  correct: ['Pasado mañana se marcha Emma.', 'Pasado mañana se marcha Emma'] },
        { id: 'q2', prompt: '(mañana / el jefe / no estará en la oficina) →', correct: ['Mañana no estará el jefe en la oficina.', 'Mañana el jefe no estará en la oficina.', 'Mañana no estará el jefe en la oficina', 'Mañana el jefe no estará en la oficina'] },
        { id: 'q3', prompt: '(ayer / Olga / me llamó) →',             correct: ['Ayer me llamó Olga.', 'Ayer me llamó Olga'] },
        { id: 'q4', prompt: '(pasado mañana / mis padres / llegan) →', correct: ['Pasado mañana llegan mis padres.', 'Pasado mañana llegan mis padres'] },
        { id: 'q5', prompt: '(ahora / Concha / no está) →',           correct: ['Ahora no está Concha.', 'Ahora no está Concha'] },
        { id: 'q6', prompt: '(entonces / sonaron unas trompetas / empezó el espectáculo) →', correct: ['Sonaron unas trompetas y entonces empezó el espectáculo.', 'Sonaron unas trompetas y entonces empezó el espectáculo'] },
      ],
    },

    {
      id: '101.3',
      title: 'temprano или pronto?',
      type: 'choice',
      instructions: 'Выберите подходящее наречие.',
      questions: [
        { id: 'q1', prompt: 'No te preocupes. Estoy seguro de que nos veremos ___.', options: ['temprano', 'pronto'], correct: 'pronto', explanation: '«Скоро» (мало времени до встречи) = pronto.' },
        { id: 'q2', prompt: 'Mañana nos tenemos que levantar ___. El avión sale a las siete.', options: ['temprano', 'pronto'], correct: 'temprano', explanation: '«Рано утром» = temprano.' },
        { id: 'q3', prompt: 'Daos prisa. Los invitados van a llegar ___.', options: ['temprano', 'pronto'], correct: 'pronto' },
        { id: 'q4', prompt: 'Me gusta cenar ___, sobre las siete y media.', options: ['temprano', 'pronto'], correct: 'temprano' },
        { id: 'q5', prompt: 'Espero que mejore ___ y vuelva al trabajo.', options: ['temprano', 'pronto'], correct: 'pronto' },
        { id: 'q6', prompt: 'Hoy he salido del trabajo ___, a las cinco.', options: ['temprano', 'pronto'], correct: 'temprano' },
      ],
    },

    {
      id: '101.4',
      title: 'entonces, luego, después',
      type: 'choice',
      instructions: 'Выберите подходящее. <em>entonces</em> = «в тот момент»; <em>luego/después</em> = «потом, позже».',
      questions: [
        { id: 'q1', prompt: 'Primero iremos a Mendoza y ___ a Bariloche.', options: ['entonces', 'después'], correct: 'después', explanation: '«Сначала... потом» — это последовательность, нужно «потом».' },
        { id: 'q2', prompt: 'Llamamos al timbre y ___ salió el marido de Tere.', options: ['entonces', 'después'], correct: 'entonces', explanation: '«В этот момент вышел» — entonces.' },
        { id: 'q3', prompt: 'Estoy acabando un trabajo, pero si quieres nos vemos ___.', options: ['entonces', 'luego'], correct: 'luego', explanation: '«Потом, попозже» = luego.' },
        { id: 'q4', prompt: 'Le pregunté por Paula y ___ me contó toda la historia.', options: ['entonces', 'luego'], correct: 'entonces' },
        { id: 'q5', prompt: 'Ahora tengo clase. Nos vemos ___.', options: ['entonces', 'luego'], correct: 'luego' },
        { id: 'q6', prompt: 'Hablamos primero con el director y ___ con la secretaria.', options: ['entonces', 'después'], correct: 'después' },
      ],
    },

    {
      id: '101.5',
      title: 'Замените выражение одним наречием',
      type: 'fill',
      instructions: 'Замените подчёркнутое выражение наречием из списка: <em>después, entonces, luego, pronto, temprano, tarde</em>.',
      questions: [
        { id: 'q1', prompt: 'Tienen que hacer el proyecto <em>en poco tiempo</em>. →',          correct: 'pronto' },
        { id: 'q2', prompt: 'Mañana nos tenemos que levantar <em>a primera hora del día</em>. →', correct: 'temprano' },
        { id: 'q3', prompt: 'Estaba hablando con Josefina y <em>en ese momento</em> llegó Roberto. →', correct: 'entonces' },
        { id: 'q4', prompt: 'Ahora tengo trabajo. Te llamaré <em>después del trabajo</em>. →',     correct: 'después' },
        { id: 'q5', prompt: 'Era <em>una hora avanzada de la noche</em>, pero llamamos al hospital. →', correct: 'tarde' },
        { id: 'q6', prompt: 'Vino la ambulancia <em>en muy poco tiempo</em>. →',                  correct: 'pronto' },
        { id: 'q7', prompt: 'Hoy quiero cenar <em>antes de lo normal</em>. Estoy cansado. →',     correct: 'temprano' },
        { id: 'q8', prompt: 'Ahora no tenemos hambre. Comeremos <em>más tarde</em>. →',           correct: 'luego' },
        { id: 'q9', prompt: 'Apagaron las luces y <em>en ese momento</em> se oyó una voz. →',     correct: 'entonces' },
      ],
    },

    {
      id: '101.6',
      title: 'Что значит фраза?',
      type: 'choice',
      instructions: 'Какой смысл точнее передаёт фразу?',
      questions: [
        { id: 'q1', prompt: '<em>Es pronto. La clase no empieza hasta las ocho.</em>',
          options: ['ещё рано (мало времени прошло, до начала много)', 'будет скоро'], correct: 'ещё рано (мало времени прошло, до начала много)' },
        { id: 'q2', prompt: '<em>Hemos llegado tarde. La película ya ha empezado.</em>',
          options: ['пришли позже, чем нужно', 'пришли вечером'], correct: 'пришли позже, чем нужно' },
        { id: 'q3', prompt: '<em>Volved temprano.</em>',
          options: ['скоро возвращайтесь (через мало времени)', 'возвращайтесь рано (в начале вечера)'], correct: 'возвращайтесь рано (в начале вечера)' },
        { id: 'q4', prompt: '<em>—¿Se ha ido María? —Sí, pero vuelve pronto.</em>',
          options: ['скоро вернётся (через мало времени)', 'вернётся рано утром'], correct: 'скоро вернётся (через мало времени)' },
        { id: 'q5', prompt: '<em>Ayer cenamos muy tarde, a las doce.</em>',
          options: ['позже обычного / поздно ночью', 'опоздали'], correct: 'позже обычного / поздно ночью' },
      ],
    },

    {
      id: '101.7',
      title: 'Выберите правильный порядок слов',
      type: 'choice',
      instructions: 'Какой порядок естественнее для носителя?',
      questions: [
        { id: 'q1', prompt: '«Вчера Пабло пришёл» (наречие в начале)',
          options: ['Ayer Pablo llegó.', 'Ayer llegó Pablo.', 'Ayer Pablo ha llegado.'], correct: 'Ayer llegó Pablo.', explanation: 'Когда наречие в начале — обычно инверсия.' },
        { id: 'q2', prompt: '«Сейчас Конча не дома» (с акцентом «сейчас»)',
          options: ['Ahora Concha no está.', 'Ahora no está Concha.', 'Concha ahora no está.'], correct: 'Ahora no está Concha.' },
        { id: 'q3', prompt: '«Антеайер мы видели Кармен» (нейтрально, акцент в конце)',
          options: ['Vimos a Carmen anteayer.', 'Carmen vimos anteayer.', 'Anteayer vimos Carmen a.'], correct: 'Vimos a Carmen anteayer.' },
        { id: 'q4', prompt: '«Сегодня я работаю весь день»',
          options: ['Hoy trabajo todo el día.', 'Trabajo hoy todo el día.', 'Trabajo todo el día hoy.'], correct: 'Hoy trabajo todo el día.' },
      ],
    },

    {
      id: '101.8',
      title: 'Сопоставьте противоположности',
      type: 'match',
      instructions: 'Подберите для каждого наречия пару с противоположным значением.',
      pool: ['mañana', 'tarde', 'pasado mañana', 'después', 'luego'],
      questions: [
        { id: 'q1', prompt: '<em>ayer</em>',         correct: 'mañana' },
        { id: 'q2', prompt: '<em>temprano</em>',     correct: 'tarde' },
        { id: 'q3', prompt: '<em>anteayer</em>',     correct: 'pasado mañana' },
        { id: 'q4', prompt: '<em>antes</em>',        correct: 'después' },
        { id: 'q5', prompt: '<em>primero</em>',      correct: 'luego' },
      ],
    },

    {
      id: '101.9',
      title: 'Заполните пропуск',
      type: 'fill',
      instructions: 'Поставьте подходящее наречие времени.',
      questions: [
        { id: 'q1', prompt: 'No puedo ___, estoy ocupado. Te llamo en una hora.',         correct: 'ahora' },
        { id: 'q2', prompt: '___ no fui al gimnasio, estaba muy cansada (про вчерашний день).', correct: 'Ayer' },
        { id: 'q3', prompt: '___ es jueves; ___ es viernes (сегодня и завтра).',           correct: ['Hoy es jueves; mañana es viernes.', 'Hoy es jueves; mañana es viernes'], explanation: 'Допишите всё предложение целиком.' },
        { id: 'q4', prompt: 'No te preocupes, lo terminaremos ___ (= скоро).',              correct: 'pronto' },
        { id: 'q5', prompt: 'Levántate ___, a las seis (= рано).',                          correct: 'temprano' },
        { id: 'q6', prompt: 'Llegasteis ___, ya habíamos cenado (= поздно).',               correct: 'tarde' },
      ],
    },

    {
      id: '101.10',
      title: 'Найдите фразы без ошибок',
      type: 'multi',
      instructions: 'Отметьте все грамматически и стилистически естественные фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Ayer Pablo llegó.',
            'Ayer llegó Pablo.',
            'Pablo llegó ayer.',
            'Hoy es sábado.',
            'Mañana es Pablo cumpleaños.',
            'Mañana es el cumpleaños de Pablo.',
            'Es pronto. Hay tiempo.',
            'Es temprano para salir.',
            'Llegamos tarde a la fiesta.',
            'Llegamos pronto a la fiesta (en el sentido de a primera hora).',
          ],
          correct: [
            'Ayer llegó Pablo.',
            'Pablo llegó ayer.',
            'Hoy es sábado.',
            'Mañana es el cumpleaños de Pablo.',
            'Es pronto. Hay tiempo.',
            'Es temprano para salir.',
            'Llegamos tarde a la fiesta.',
          ],
          explanation: '«Ayer Pablo llegó» — без инверсии звучит коряво. «Mañana es Pablo cumpleaños» — без артикля и предлога <em>de</em> нельзя. «Llegamos pronto» в смысле «рано утром» — нет, нужно <em>temprano</em>.',
        },
      ],
    },

    {
      id: '101.11',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Послушайте и запишите услышанное полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Ayer estuve con Antón.',          correct: ['Ayer estuve con Antón.', 'Ayer estuve con Antón'] },
        { id: 'q2', prompt: '', audio: 'Mañana te lo devuelvo.',          correct: ['Mañana te lo devuelvo.', 'Mañana te lo devuelvo'] },
        { id: 'q3', prompt: '', audio: 'Ahora no puedo, estoy ocupada.',  correct: ['Ahora no puedo, estoy ocupada.', 'Ahora no puedo estoy ocupada.', 'Ahora no puedo, estoy ocupada', 'Ahora no puedo estoy ocupada'] },
        { id: 'q4', prompt: '', audio: 'Anoche no pude dormir.',          correct: ['Anoche no pude dormir.', 'Anoche no pude dormir'] },
        { id: 'q5', prompt: '', audio: 'Pasado mañana voy al médico.',    correct: ['Pasado mañana voy al médico.', 'Pasado mañana voy al médico'] },
        { id: 'q6', prompt: '', audio: 'Nos vemos luego.',                correct: ['Nos vemos luego.', 'Nos vemos luego'] },
        { id: 'q7', prompt: '', audio: 'Habéis llegado tarde.',           correct: ['Habéis llegado tarde.', 'Habéis llegado tarde'] },
      ],
    },

    {
      id: '101.12',
      title: 'Где ошибка?',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза неудачная — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Ayer llegó Pablo.', 'Pablo llegó ayer.', 'Ayer Pablo llegó.', 'Hoy ha llegado Pablo.'], correct: 'Ayer Pablo llegó.', explanation: 'После наречия в начале нужна инверсия.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Es temprano. Hasta las ocho no abren.', 'Es pronto. Hasta las ocho no abren.', 'Es tarde, ya cerraron.', 'Llegasteis tarde.'], correct: 'Es temprano. Hasta las ocho no abren.', explanation: '«Ещё рано» в смысле «мало времени прошло до начала» = <em>pronto</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Te llamo después.', 'Te llamo luego.', 'Te llamo entonces.', 'Te llamo más tarde.'], correct: 'Te llamo entonces.', explanation: '<em>entonces</em> не значит «попозже»; нужно <em>luego/después</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Anoche cené con ellos.', 'Ayer noche cené con ellos.', 'Cené con ellos anoche.'], correct: 'Ayer noche cené con ellos.', explanation: '«Вчера ночью» одним словом = <em>anoche</em>; <em>ayer noche</em> не используется.' },
      ],
    },
  ],
};
