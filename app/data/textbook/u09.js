// ============================================================
// Unidad 9 — El artículo determinado con expresiones de tiempo y de cantidad
// Часы, дни недели, даты, части дня, частота, единицы измерения.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u09 = {
  id: 'u09',
  number: 9,
  title: { es: 'el seis de enero', topic: 'Artículo con tiempo y cantidad' },
  topicRu: 'Артикль во временных и количественных выражениях',

  theory: [
    {
      type: 'heading',
      text: 'Часы',
    },
    {
      type: 'rule',
      es: 'Se usa <em>la, las</em> + <strong>horas</strong>.',
      ru: 'С часами всегда ставится <em>la</em> (для одного часа) или <em>las</em> (для двух и более).',
      examples: [
        { es: 'la una y diez', ru: 'час десять' },
        { es: 'las dos', ru: 'два часа' },
        { es: 'Son las tres y cinco.', ru: 'Сейчас три ноль пять.' },
        { es: 'El partido es a las nueve.', ru: 'Матч в девять.' },
      ],
    },
    {
      type: 'heading',
      text: 'Дни недели и даты',
    },
    {
      type: 'rule',
      es: 'Se usa <em>el</em> + <strong>día de la semana</strong> cuando se habla de un día específico (próximo o pasado).',
      ru: '<em>el</em> + день недели — конкретный день (ближайший или прошедший).',
      examples: [
        { es: 'El domingo voy a una fiesta.', ru: 'В (это) воскресенье я иду на вечеринку.' },
        { es: 'El sábado estuve con Luisa.', ru: 'В (прошлую) субботу я был с Луизой.' },
      ],
    },
    {
      type: 'rule',
      es: 'Se usa <em>los</em> + <strong>día de la semana</strong> cuando se habla de una acción <strong>habitual</strong>.',
      ru: '<em>los</em> + день недели — повторяющееся действие («по понедельникам»).',
      examples: [
        { es: 'Los miércoles tengo clases de español.', ru: 'По средам у меня занятия испанским.' },
        { es: 'Mariano trabaja los domingos.', ru: 'Мариано работает по воскресеньям.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Pero <strong>no</strong> se usa artículo después de <em>ser</em> en respuesta a <em>¿Qué día es hoy?</em> — <em>—Lunes. Ayer fue domingo.</em>',
      ru: 'В ответе на «какой сегодня день» артикль не нужен: «Понедельник. Вчера было воскресенье.»',
    },
    {
      type: 'rule',
      es: 'Se usa <em>el</em> + <strong>fechas</strong>.',
      ru: 'С датами — <em>el</em>.',
      examples: [
        { es: 'Me examino el doce de junio.', ru: 'У меня экзамен 12 июня.' },
        { es: 'Mi cumpleaños es el seis de enero.', ru: 'Мой день рождения 6 января.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Día de la semana + fecha → <strong>solo un artículo</strong>: <em>El examen es el jueves veinte de junio</em> (no «el jueves el veinte»).',
      ru: 'Если в одной фразе и день недели, и дата — артикль ставится <strong>только один раз</strong> (перед днём недели), потом дата идёт без артикля.',
    },
    {
      type: 'atencion',
      es: 'Con los nombres de los <strong>meses</strong> no se usa artículo: <em>Mi cumpleaños es en octubre.</em>',
      ru: 'С названиями месяцев артикль не ставится: «Мой день рождения в октябре».',
    },
    {
      type: 'heading',
      text: 'Части дня и частота',
    },
    {
      type: 'rule',
      es: 'Se usa <em>por la</em> + <strong>parte del día</strong> (<em>mañana, tarde, noche</em>).',
      ru: '<em>por la mañana / tarde / noche</em> = утром, днём, вечером, ночью.',
      examples: [
        { es: 'Trabajo por la mañana y estudio por la tarde.', ru: 'Утром работаю, вечером учусь.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Pero: <em>a mediodía, de madrugada</em> — sin artículo.',
      ru: 'Особые формы: <em>a mediodía</em> «в полдень», <em>de madrugada</em> «под утро» — без артикля.',
    },
    {
      type: 'rule',
      es: 'Cantidad o frecuencia: <strong>(número/cantidad) + al / a la + período</strong>.',
      ru: 'Частота — «n раз / часов / дней + al / a la + период».',
      examples: [
        { es: 'Ando una hora al día.', ru: 'Хожу пешком час в день.' },
        { es: 'Vamos al cine dos veces al mes.', ru: 'Ходим в кино два раза в месяц.' },
        { es: 'Voy al gimnasio dos días a la semana.', ru: 'Хожу в спортзал два дня в неделю.' },
      ],
    },
    {
      type: 'heading',
      text: 'Единицы измерения',
    },
    {
      type: 'rule',
      es: 'Se usa <em>el / la / los / las</em> + <strong>unidades de medida</strong> (kilo, litro, docena…).',
      ru: 'С единицами измерения цена/количество идут через определённый артикль: «X евро килограмм», «два евро литр».',
      examples: [
        { es: 'El aceite cuesta veinte céntimos el litro.', ru: 'Масло стоит 20 сентов за литр.' },
        { es: 'Los plátanos cuestan dos euros el kilo.', ru: 'Бананы по два евро за килограмм.' },
      ],
    },
  ],

  exercises: [
    {
      id: '9.1',
      title: 'Часы — la / las',
      type: 'fill',
      instructions: 'Запишите время с подходящим артиклем.',
      questions: [
        { id: 'q1', prompt: 'Son ___ tres y veinte.',          correct: 'las' },
        { id: 'q2', prompt: 'Son ___ doce y cinco.',            correct: 'las' },
        { id: 'q3', prompt: 'Son ___ dos en punto.',             correct: 'las' },
        { id: 'q4', prompt: 'Son ___ ocho y media.',              correct: 'las' },
        { id: 'q5', prompt: 'Son ___ once y cuarto.',              correct: 'las' },
        { id: 'q6', prompt: 'Es ___ una y veinticinco.',            correct: 'la' },
        { id: 'q7', prompt: 'Son ___ cuatro menos diez.',            correct: 'las' },
        { id: 'q8', prompt: 'Es ___ una menos cuarto.',               correct: 'la' },
      ],
    },

    {
      id: '9.2',
      title: 'Дни, даты, части дня',
      type: 'fill',
      instructions: 'Поставьте <em>el / la / los / las</em> или <code>—</code>, если артикль не нужен.',
      questions: [
        { id: 'q1', prompt: 'Mi cumpleaños es ___ doce de febrero.',                correct: 'el' },
        { id: 'q2', prompt: '___ martes tenemos clase de español.',                  correct: 'Los', explanation: 'Привычное действие.' },
        { id: 'q3', prompt: 'Normalmente estudiamos por ___ noche.',                  correct: 'la' },
        { id: 'q4', prompt: 'Felipe se casa ___ martes, ___ trece de julio.',          correct: ['el, —', 'el —'], placeholder: 'el, —', explanation: 'День + дата → один артикль.' },
        { id: 'q5', prompt: 'La fiesta es ___ domingo a ___ siete.',                   correct: ['el, las', 'el las'], placeholder: 'el, las' },
        { id: 'q6', prompt: 'Hoy es ___ jueves, ___ cuatro de octubre.',                correct: ['—, —', '— —'], placeholder: '—, —', explanation: 'Ответ «какой сегодня день» — без артикля.' },
        { id: 'q7', prompt: 'El partido es a ___ diez.',                                correct: 'las' },
        { id: 'q8', prompt: 'Trabajo por ___ tarde y estudio por ___ mañana.',           correct: ['la, la', 'la la'], placeholder: 'la, la' },
        { id: 'q9', prompt: 'Nací ___ dos de diciembre.',                                correct: 'el' },
        { id: 'q10', prompt: 'Diana sale siempre ___ sábados.',                            correct: 'los' },
        { id: 'q11', prompt: 'Tengo vacaciones en ___ agosto.',                              correct: '—', explanation: 'С месяцами — без артикля.' },
        { id: 'q12', prompt: 'Tenemos un examen ___ lunes.',                                correct: 'el', explanation: 'Конкретный день.' },
      ],
    },

    {
      id: '9.3',
      title: 'Частота — al / a la',
      type: 'fill',
      instructions: 'Заполните формулу «n раз/часов/дней + al/a la + период».',
      questions: [
        { id: 'q1', prompt: 'Duermo ocho horas ___ día.',                  correct: 'al' },
        { id: 'q2', prompt: 'Voy al gimnasio dos días ___ semana.',         correct: 'a la' },
        { id: 'q3', prompt: 'Vamos de vacaciones una vez ___ año.',          correct: 'al' },
        { id: 'q4', prompt: 'Voy al cine dos veces ___ mes.',                 correct: 'al' },
        { id: 'q5', prompt: 'Salimos una noche ___ semana.',                   correct: 'a la' },
        { id: 'q6', prompt: 'Corro una hora ___ día.',                          correct: 'al' },
      ],
    },

    {
      id: '9.4',
      title: 'Цены и единицы измерения',
      type: 'fill',
      instructions: 'Допишите цену в формате «X euros + el/la + единица».',
      questions: [
        { id: 'q1', prompt: '2 € / kilo (kiwis): Dos euros ___ kilo de kiwis.',       correct: 'el' },
        { id: 'q2', prompt: '4 € / litro (leche): Cuatro euros ___ litro de leche.',    correct: 'el' },
        { id: 'q3', prompt: '2 € / docena (huevos): Dos euros ___ docena de huevos.',    correct: 'la' },
        { id: 'q4', prompt: '1 € / 100 g (queso): Un euro ___ cien gramos de queso.',     correct: 'los' },
        { id: 'q5', prompt: '6 € / kilo (jamón): Seis euros ___ kilo de jamón.',           correct: 'el' },
        { id: 'q6', prompt: '3 € / botella (vino): Tres euros ___ botella de vino.',         correct: 'la' },
      ],
    },

    {
      id: '9.5',
      title: 'Какой смысл у выбора артикля для дня недели?',
      type: 'choice',
      instructions: 'Какой смысл закладывает <em>el</em> или <em>los</em>?',
      questions: [
        { id: 'q1', prompt: '<em>El lunes voy al médico.</em>',          options: ['конкретный понедельник', 'каждый понедельник'], correct: 'конкретный понедельник' },
        { id: 'q2', prompt: '<em>Los lunes voy al médico.</em>',          options: ['конкретный понедельник', 'каждый понедельник'], correct: 'каждый понедельник' },
        { id: 'q3', prompt: '<em>El sábado fui al cine.</em>',             options: ['прошлая суббота', 'каждую субботу'], correct: 'прошлая суббота' },
        { id: 'q4', prompt: '<em>Los sábados voy al cine.</em>',           options: ['прошлая суббота', 'каждую субботу'], correct: 'каждую субботу' },
        { id: 'q5', prompt: '<em>—¿Qué día es hoy? —Martes.</em>',         options: ['нужен артикль', 'без артикля'], correct: 'без артикля' },
      ],
    },

    {
      id: '9.6',
      title: 'Сопоставьте ситуацию и форму',
      type: 'match',
      instructions: 'Подберите подходящую форму артикля для каждой временно́й/количественной модели.',
      pool: ['la, las', 'el', 'los', 'al / a la', 'el / la (мера)', '— (без артикля)'],
      questions: [
        { id: 'q1', prompt: 'часы (это час / два часа)',                    correct: 'la, las' },
        { id: 'q2', prompt: 'конкретный день недели или дата',              correct: 'el' },
        { id: 'q3', prompt: 'привычное действие («по понедельникам»)',      correct: 'los' },
        { id: 'q4', prompt: 'частота: n раз / часов в период',                correct: 'al / a la' },
        { id: 'q5', prompt: 'цена за единицу: «два евро килограмм»',           correct: 'el / la (мера)' },
        { id: 'q6', prompt: 'месяц / ответ «какой сегодня день»',               correct: '— (без артикля)' },
      ],
    },

    {
      id: '9.7',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Son las dos.', 'Son la dos.', 'Es la una.', 'Son las cinco.'], correct: 'Son la dos.', explanation: 'Для «двух» — <em>las</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Mi cumpleaños es el seis de enero.', 'Mi cumpleaños es seis de enero.', 'Tengo vacaciones en agosto.', 'Voy al cine los sábados.'], correct: 'Mi cumpleaños es seis de enero.', explanation: 'Перед датой нужен <em>el</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Estudio por la noche.', 'Estudio por noche.', 'A mediodía como en casa.', 'Trabajo por la tarde.'], correct: 'Estudio por noche.', explanation: '<em>por la noche</em> — с артиклем.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['dos euros el kilo', 'dos euros un kilo', 'tres euros la docena', 'cinco euros el litro'], correct: 'dos euros un kilo', explanation: 'Цена за единицу — с определённым артиклем.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['una vez al mes', 'dos veces a la semana', 'una hora al día', 'cinco días al semana'], correct: 'cinco días al semana', explanation: '<em>semana</em> — femenino, должно быть <em>a la</em>.' },
      ],
    },

    {
      id: '9.8',
      title: 'Восполните маленький рассказ',
      type: 'fill',
      instructions: 'Поставьте артикль или <code>—</code>.',
      questions: [
        { id: 'q1', prompt: '___ lunes empieza la semana.',                    correct: 'El' },
        { id: 'q2', prompt: '___ lunes voy al gimnasio.',                       correct: 'Los', explanation: 'Привычное действие.' },
        { id: 'q3', prompt: 'En ___ enero hace mucho frío.',                     correct: '—' },
        { id: 'q4', prompt: 'Mi clase de español es ___ jueves a ___ siete.',     correct: ['el, las', 'el las'], placeholder: 'el, las' },
        { id: 'q5', prompt: 'El examen final es ___ veinte de junio.',             correct: 'el' },
        { id: 'q6', prompt: 'Suelo correr media hora ___ día.',                     correct: 'al' },
      ],
    },

    {
      id: '9.9',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите услышанное полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'son las tres y veinte',                       correct: ['son las tres y veinte', 'son las tres y veinte.'] },
        { id: 'q2', prompt: '', audio: 'mi cumpleaños es el seis de enero',            correct: ['mi cumpleaños es el seis de enero', 'mi cumpleaños es el seis de enero.'] },
        { id: 'q3', prompt: '', audio: 'los sábados voy al cine',                       correct: ['los sábados voy al cine', 'los sábados voy al cine.'] },
        { id: 'q4', prompt: '', audio: 'trabajo por la mañana',                          correct: ['trabajo por la mañana', 'trabajo por la mañana.'] },
        { id: 'q5', prompt: '', audio: 'dos euros el kilo',                              correct: ['dos euros el kilo', 'dos euros el kilo.'] },
      ],
    },

    {
      id: '9.10',
      title: 'Перепишите фразу правильно',
      type: 'fill',
      instructions: 'Перепишите так, как сказал бы носитель.',
      questions: [
        { id: 'q1', prompt: '<em>Son la cuatro.</em> →',                          correct: ['Son las cuatro.', 'Son las cuatro'] },
        { id: 'q2', prompt: '<em>Mi cumpleaños es seis de enero.</em> →',          correct: ['Mi cumpleaños es el seis de enero.', 'Mi cumpleaños es el seis de enero'] },
        { id: 'q3', prompt: '<em>Estudio por mañana.</em> →',                      correct: ['Estudio por la mañana.', 'Estudio por la mañana'] },
        { id: 'q4', prompt: '<em>El examen es el lunes el veinte de junio.</em> →', correct: ['El examen es el lunes veinte de junio.', 'El examen es el lunes veinte de junio'] },
        { id: 'q5', prompt: '<em>Voy al gimnasio dos veces el mes.</em> →',          correct: ['Voy al gimnasio dos veces al mes.', 'Voy al gimnasio dos veces al mes'] },
      ],
    },
  ],
};
