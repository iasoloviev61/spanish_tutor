// Учебные тексты для чтения. Каждый текст — объект, прогрессия по дням (A1: дни 1–30).
// Кастильский испанский (Испания): vosotros, ordenador, móvil, zumo. Coger избегаем на A1.
// Подключение: <script src="data/texts.js"></script> до соответствующего рендерера.
window.TEXTS = window.TEXTS || [];

window.TEXTS.push(
  {
    id: 'a1-001',
    level: 'A1',
    day: 1,
    title: 'Domingo en casa',
    text:
      'Hoy comemos en casa. Mi madre hace una tortilla grande. Mi padre prepara café con leche. ' +
      'Mi hermana bebe zumo de naranja. Yo como pan con tomate.\n\n' +
      'Tenemos platos blancos y servilletas rojas. Mi gato negro mira la mesa y maúlla. ' +
      'En la cocina canta la radio. ¡Qué rico el domingo!',
    vocabulary: [
      {
        word: 'la tortilla',
        translation: 'испанский омлет (обычно с картошкой)',
        example: 'Mi madre hace una tortilla grande.',
      },
      {
        word: 'el zumo',
        translation: 'сок (кастильский вариант; в Лат. Америке — jugo)',
        example: 'Mi hermana bebe zumo de naranja.',
      },
      {
        word: 'el pan con tomate',
        translation: 'хлеб с тёртым томатом — типичный испанский завтрак',
        example: 'Yo como pan con tomate.',
      },
      {
        word: 'la servilleta',
        translation: 'салфетка',
        example: 'Tenemos servilletas rojas.',
      },
      {
        word: 'maullar',
        translation: 'мяукать',
        example: 'Mi gato mira la mesa y maúlla.',
      },
      {
        word: '¡Qué rico!',
        translation: 'как вкусно! / какая вкуснятина!',
        example: '¡Qué rico el domingo!',
      },
    ],
    questions: [
      {
        q: '¿Qué prepara el padre?',
        options: ['Café con leche', 'Una tortilla', 'Zumo de naranja'],
        correct: 0,
      },
      {
        q: '¿De qué color son las servilletas?',
        options: ['Blancas', 'Rojas', 'Verdes'],
        correct: 1,
      },
      {
        q: '¿Qué bebe la hermana?',
        options: ['Leche', 'Café', 'Zumo de naranja'],
        correct: 2,
      },
    ],
    grammar_notes: [
      {
        topic: 'Presente de indicativo: -er глаголы',
        note:
          'Глаголы на -er спрягаются с окончаниями -o, -es, -e, -emos, -éis, -en. ' +
          'В тексте: yo como, mi hermana bebe, comemos en casa.',
      },
      {
        topic: 'Согласование прилагательных',
        note:
          'Прилагательное согласуется с существительным в роде и числе. ' +
          'platos (м.р., мн.ч.) blancos; servilletas (ж.р., мн.ч.) rojas; gato negro (м.р., ед.ч.).',
      },
    ],
  },

  {
    id: 'a1-011',
    level: 'A1',
    day: 11,
    title: 'Lunes por la mañana',
    text:
      'Me llamo Carlos y soy profesor de matemáticas. Vivo en Sevilla. ' +
      'Los lunes me levanto a las siete. La cocina está fría en invierno, pero el café está caliente.\n\n' +
      'Mi mujer es enfermera y trabaja en un hospital cerca. Salimos juntos. ' +
      'En la calle hay mucha gente y poco tráfico. El cielo está gris y hace frío.\n\n' +
      'Llego al instituto a las ocho. Mis alumnos son simpáticos pero ruidosos. ¡Empieza otra semana!',
    vocabulary: [
      {
        word: 'el profesor / la profesora',
        translation: 'учитель, преподаватель',
        example: 'Soy profesor de matemáticas.',
      },
      {
        word: 'la enfermera',
        translation: 'медсестра (м.р. — el enfermero)',
        example: 'Mi mujer es enfermera.',
      },
      {
        word: 'levantarse',
        translation: 'вставать (с постели) — возвратный глагол',
        example: 'Los lunes me levanto a las siete.',
      },
      {
        word: 'el instituto',
        translation: 'школа для старших классов (ESO + bachillerato) в Испании',
        example: 'Llego al instituto a las ocho.',
      },
      {
        word: 'el alumno / la alumna',
        translation: 'ученик / ученица',
        example: 'Mis alumnos son simpáticos.',
      },
      {
        word: 'ruidoso, -a',
        translation: 'шумный, -ая',
        example: 'Son simpáticos pero ruidosos.',
      },
      {
        word: 'caliente / frío',
        translation: 'горячий / холодный',
        example: 'El café está caliente, la cocina está fría.',
      },
      {
        word: 'el cielo',
        translation: 'небо',
        example: 'El cielo está gris.',
      },
      {
        word: 'el tráfico',
        translation: 'дорожное движение',
        example: 'Hay poco tráfico.',
      },
      {
        word: 'simpático, -a',
        translation: 'приятный, симпатичный (о характере)',
        example: 'Mis alumnos son simpáticos.',
      },
    ],
    questions: [
      {
        q: '¿Cuál es la profesión de Carlos?',
        options: ['Médico', 'Profesor', 'Camarero'],
        correct: 1,
      },
      {
        q: '¿Cómo está el cielo?',
        options: ['Azul', 'Gris', 'Blanco'],
        correct: 1,
      },
      {
        q: '¿A qué hora se levanta los lunes?',
        options: ['A las seis', 'A las siete', 'A las ocho'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Ser vs estar',
        note:
          'SER — для постоянных характеристик и идентичности: soy profesor, es enfermera, son simpáticos. ' +
          'ESTAR — для состояний, временных условий и местоположения: está fría, está caliente, está gris.',
      },
      {
        topic: 'Возвратные глаголы',
        note:
          'Возвратное местоимение (me, te, se, nos, os, se) ставится перед спрягаемым глаголом. ' +
          'Me llamo Carlos = «меня зовут Карлос»; me levanto = «я встаю».',
      },
      {
        topic: 'Hay — «есть, находится»',
        note:
          'Безличная форма от haber. Используется, когда сообщается о существовании чего-либо: ' +
          'en la calle hay mucha gente, hay poco tráfico. Не путать с está/están (то же место, но известный объект).',
      },
    ],
  },

  {
    id: 'a1-021',
    level: 'A1',
    day: 21,
    title: 'Una mañana en el mercado',
    text:
      'Esta mañana he ido al mercado de la Boquería con mi amiga Marta. ' +
      'Hemos comprado fruta, queso manchego y pan recién hecho. ' +
      'Marta ha probado un trozo de jamón ibérico y dice que está buenísimo.\n\n' +
      'Después hemos entrado en una tienda pequeña porque queremos un regalo para mi hermana. ' +
      'La dependienta es muy amable y nos ha enseñado pañuelos de seda. ' +
      'He elegido uno azul con flores blancas.\n\n' +
      '—¿Cuánto cuesta? —pregunto.\n' +
      '—Dieciocho euros —responde ella.\n\n' +
      'Es un poco caro, pero es bonito. Mañana voy a llamar a mi hermana para felicitarla. ' +
      '¡Va a cumplir treinta años!',
    vocabulary: [
      {
        word: 'el mercado',
        translation: 'рынок (la Boquería — знаменитый крытый рынок в Барселоне)',
        example: 'He ido al mercado de la Boquería.',
      },
      {
        word: 'el jamón ibérico',
        translation: 'иберийский хамон — вяленый окорок из чёрных свиней',
        example: 'Ha probado un trozo de jamón ibérico.',
      },
      {
        word: 'el queso manchego',
        translation: 'манчего — твёрдый овечий сыр из Ла-Манчи',
        example: 'Hemos comprado queso manchego.',
      },
      {
        word: 'recién hecho',
        translation: 'только что приготовленный, свежеиспечённый',
        example: 'pan recién hecho',
      },
      {
        word: 'probar',
        translation: 'пробовать (на вкус); примерять',
        example: 'Marta ha probado un trozo de jamón.',
      },
      {
        word: 'el regalo',
        translation: 'подарок',
        example: 'Queremos un regalo para mi hermana.',
      },
      {
        word: 'la dependienta / el dependiente',
        translation: 'продавщица / продавец в магазине',
        example: 'La dependienta es muy amable.',
      },
      {
        word: 'el pañuelo',
        translation: 'платок (носовой или шейный)',
        example: 'Nos ha enseñado pañuelos de seda.',
      },
      {
        word: 'la seda',
        translation: 'шёлк',
        example: 'pañuelos de seda',
      },
      {
        word: 'elegir',
        translation: 'выбирать (e→i: elijo, eliges, elige…)',
        example: 'He elegido uno azul.',
      },
      {
        word: 'caro / barato',
        translation: 'дорогой / дешёвый',
        example: 'Es un poco caro, pero es bonito.',
      },
      {
        word: 'cumplir años',
        translation: 'отмечать день рождения; «исполняться» (о возрасте)',
        example: 'Va a cumplir treinta años.',
      },
    ],
    questions: [
      {
        q: '¿Adónde han ido por la mañana?',
        options: ['A un restaurante', 'Al mercado', 'Al parque'],
        correct: 1,
      },
      {
        q: '¿Por qué entran en la tienda pequeña?',
        options: ['Para comer', 'Para comprar un regalo', 'Para preguntar la hora'],
        correct: 1,
      },
      {
        q: '¿Cuántos años va a cumplir la hermana?',
        options: ['Dieciocho', 'Veinte', 'Treinta'],
        correct: 2,
      },
    ],
    grammar_notes: [
      {
        topic: 'Pretérito Perfecto',
        note:
          'Конструкция haber (в Presente) + participio: he ido, hemos comprado, ha probado, ha enseñado. ' +
          'Употребляется для недавних или связанных с настоящим действий — часто с маркерами hoy, esta mañana, ya.',
      },
      {
        topic: 'Ir a + infinitivo (ближайшее будущее)',
        note:
          'voy a llamar — «я собираюсь позвонить»; va a cumplir — «ей исполнится». ' +
          'Спрягается ir в Presente + a + инфинитив. Аналог английского «going to».',
      },
      {
        topic: 'Простые придаточные с que / porque',
        note:
          'que вводит дополнительное придаточное: dice que está buenísimo. ' +
          'porque объясняет причину: hemos entrado porque queremos un regalo.',
      },
    ],
  },
);
