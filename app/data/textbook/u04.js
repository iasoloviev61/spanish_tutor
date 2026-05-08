// ============================================================
// Unidad 4 — El artículo indeterminado (un, una, unos, unas)
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u04 = {
  id: 'u04',
  number: 4,
  title: { es: 'un, una, unos, unas', topic: 'El artículo indeterminado' },
  topicRu: 'Неопределённый артикль: формы и употребление',

  theory: [
    {
      type: 'table',
      caption: 'Формы неопределённого артикля',
      columns: ['', 'Masculino', 'Femenino'],
      colClasses: ['col-pattern', 'col-result', 'col-result'],
      rows: [
        ['<strong>Singular</strong>', '<em>un</em> — <em>un chico, un libro</em>', '<em>una</em> — <em>una chica, una casa</em>'],
        ['<strong>Plural</strong>',   '<em>unos</em> — <em>unos chicos, unos libros</em>', '<em>unas</em> — <em>unas chicas, unas casas</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Перед существительными женского рода в единственном числе, начинающимися на ударные <em>a-</em> или <em>ha-</em>, ставится <em>un</em> (не <em>una</em>): <em>un águila, un aula, un hacha</em>. Но во множественном числе и с прилагательным между артиклем и существительным — <em>una</em>: <em>unas águilas, una buena aula, una pequeña hacha</em>.',
      ru: 'Артикль меняется только из-за фонетики (избегаем «a-a»), род существительного остаётся женским.',
    },
    {
      type: 'heading',
      text: 'Когда употребляется',
    },
    {
      type: 'rule',
      es: 'Para <strong>identificar</strong> algo o alguien como parte de una clase o grupo.',
      ru: '«Что это / кто это» — когда называем класс предмета или человека впервые.',
      examples: [
        { es: '¿Qué es eso? — Es un reloj.', ru: 'Что это? — Это часы.' },
        { es: 'La papaya es una fruta.', ru: 'Папайя — это фрукт.' },
        { es: '¿Quién es Chayanne? — Es un cantante.', ru: 'Кто такой Чайянне? — Это певец.' },
      ],
    },
    {
      type: 'rule',
      es: 'Para indicar <strong>cantidad</strong>.',
      ru: 'Когда передаётся числовое значение.',
      examples: [
        { es: 'Necesito un lápiz.', ru: 'Нужен один карандаш.' },
        { es: 'Una entrada, por favor.', ru: 'Один билет, пожалуйста.' },
      ],
    },
    {
      type: 'rule',
      es: '<em>unos / unas</em> + слова, у которых только форма plural = <strong>1 предмет</strong>; <em>unos / unas</em> + обычные plural = <strong>«несколько» (3, 4, 5...)</strong>.',
      ru: 'Один и тот же артикль работает по-разному в зависимости от того, есть ли у слова форма ед. числа.',
      examples: [
        { es: 'Necesito unas tijeras.', ru: 'Мне нужны (одни) ножницы.' },
        { es: 'Quiero unos vaqueros.', ru: 'Хочу (одни) джинсы.' },
        { es: 'Me han regalado unas flores.', ru: 'Мне подарили несколько цветов.' },
        { es: 'He comprado unos libros.', ru: 'Я купил несколько книг.' },
      ],
    },
  ],

  exercises: [
    {
      id: '4.1',
      title: 'Подберите неопределённый артикль',
      type: 'fill',
      instructions: 'Поставьте <em>un, una, unos, unas</em>.',
      questions: [
        { id: 'q1',  prompt: '___ flor',         correct: 'una' },
        { id: 'q2',  prompt: '___ silla',        correct: 'una' },
        { id: 'q3',  prompt: '___ relojes',      correct: 'unos' },
        { id: 'q4',  prompt: '___ paraguas (1 шт.)', correct: 'un' },
        { id: 'q5',  prompt: '___ alumnos',      correct: 'unos' },
        { id: 'q6',  prompt: '___ cine',         correct: 'un' },
        { id: 'q7',  prompt: '___ habitación',   correct: 'una' },
        { id: 'q8',  prompt: '___ chica',        correct: 'una' },
        { id: 'q9',  prompt: '___ ciudad',       correct: 'una' },
        { id: 'q10', prompt: '___ aula',         correct: 'un',   explanation: 'Перед ударным a- ставится <em>un</em>, хотя слово femenino.' },
        { id: 'q11', prompt: '___ aulas',        correct: 'unas', explanation: 'В plural уже <em>unas</em>: фонетического столкновения нет.' },
        { id: 'q12', prompt: '___ camarera',     correct: 'una' },
      ],
    },

    {
      id: '4.2',
      title: '¿Qué es...?',
      type: 'choice',
      instructions: 'Выберите верный ответ. Класс понятий — спорт, страна, фрукт и т.д.',
      questions: [
        { id: 'q1', prompt: 'El balonmano es ___', options: ['un deporte', 'una deporte', 'unos deportes'], correct: 'un deporte' },
        { id: 'q2', prompt: 'Sevilla es ___',      options: ['un ciudad', 'una ciudad', 'unas ciudades'],   correct: 'una ciudad' },
        { id: 'q3', prompt: 'El mango es ___',     options: ['un fruta', 'una fruta', 'una fruto'],         correct: 'una fruta' },
        { id: 'q4', prompt: 'Colombia es ___',     options: ['un país', 'una país', 'unas países'],         correct: 'un país' },
        { id: 'q5', prompt: 'La rosa es ___',      options: ['un flor', 'una flor', 'unos flores'],         correct: 'una flor' },
        { id: 'q6', prompt: 'Frida Kahlo es ___',  options: ['un pintora', 'una pintora', 'una pintor'],    correct: 'una pintora' },
      ],
    },

    {
      id: '4.3',
      title: 'Заполните: что нужно',
      type: 'fill',
      instructions: 'Дополните формами <em>un / una / unos / unas</em>.',
      questions: [
        { id: 'q1', prompt: 'Necesito ___ lápiz.',          correct: 'un' },
        { id: 'q2', prompt: 'Quiero ___ café, por favor.',  correct: 'un' },
        { id: 'q3', prompt: 'Tengo ___ idea.',              correct: 'una' },
        { id: 'q4', prompt: 'Voy a comprar ___ pantalones.', correct: 'unos' },
        { id: 'q5', prompt: 'Hay ___ flores en la mesa.',    correct: 'unas' },
        { id: 'q6', prompt: 'Llevo ___ gafas nuevas.',       correct: 'unas' },
        { id: 'q7', prompt: 'Es ___ problema serio.',        correct: 'un' },
        { id: 'q8', prompt: 'Tienes ___ mano fuerte.',       correct: 'una' },
      ],
    },

    {
      id: '4.4',
      title: 'Перед ударным a- / ha-',
      type: 'multi',
      instructions: 'Какие из этих женских слов в единственном числе требуют <em>un</em> вместо <em>una</em>?',
      questions: [
        {
          id: 'q1',
          prompt: 'Выберите все «un + femenino»:',
          options: ['águila', 'aula', 'hacha', 'agua', 'casa', 'amiga', 'hora', 'habitación'],
          correct: ['águila', 'aula', 'hacha', 'agua'],
          explanation: 'Только когда первый слог — ударный <em>a-</em> или <em>ha-</em>. У <em>amiga, hora, habitación</em> ударение НЕ на первом слоге.',
        },
      ],
    },

    {
      id: '4.5',
      title: 'Замените на множественное',
      type: 'fill',
      instructions: 'Перепишите словосочетание во множественном числе.',
      questions: [
        { id: 'q1', prompt: '<em>un libro</em> →',     correct: 'unos libros' },
        { id: 'q2', prompt: '<em>una flor</em> →',     correct: 'unas flores' },
        { id: 'q3', prompt: '<em>un águila</em> →',    correct: 'unas águilas', explanation: 'В plural уже <em>unas</em>.' },
        { id: 'q4', prompt: '<em>una habitación</em> →', correct: 'unas habitaciones' },
        { id: 'q5', prompt: '<em>un mes</em> →',       correct: 'unos meses' },
        { id: 'q6', prompt: '<em>un coche</em> →',     correct: 'unos coches' },
      ],
    },

    {
      id: '4.6',
      title: '¿un águila или una águila?',
      type: 'choice',
      instructions: 'Выберите фонетически правильный артикль.',
      questions: [
        { id: 'q1', prompt: '___ águila',        options: ['un', 'una'], correct: 'un' },
        { id: 'q2', prompt: '___ amiga',         options: ['un', 'una'], correct: 'una', explanation: 'Ударение не на первом слоге → <em>una</em>.' },
        { id: 'q3', prompt: '___ aula moderna',  options: ['un', 'una'], correct: 'un' },
        { id: 'q4', prompt: '___ buena aula',    options: ['un', 'una'], correct: 'una', explanation: 'Между артиклем и существительным стоит прилагательное → <em>una</em>.' },
        { id: 'q5', prompt: '___ hora',          options: ['un', 'una'], correct: 'una', explanation: '<em>h</em> немая, ударение на «o».' },
      ],
    },

    {
      id: '4.7',
      title: 'Что нужно купить',
      type: 'fill',
      instructions: 'Завершите фразы с правильным артиклем.',
      questions: [
        { id: 'q1', prompt: 'Necesito ___ tijeras.',     correct: 'unas' },
        { id: 'q2', prompt: 'Quiero ___ vaqueros.',      correct: 'unos' },
        { id: 'q3', prompt: 'Voy a comprar ___ entradas.', correct: 'unas' },
        { id: 'q4', prompt: 'Tomo ___ té con limón.',    correct: 'un' },
        { id: 'q5', prompt: 'Hay ___ pájaros en el árbol.', correct: 'unos' },
      ],
    },

    {
      id: '4.8',
      title: '«Один» vs «несколько»',
      type: 'choice',
      instructions: 'Какое значение у <em>unos / unas</em> в этой фразе?',
      questions: [
        { id: 'q1', prompt: '<em>Necesito unas tijeras.</em>', options: ['1 предмет', 'несколько (3-5)'], correct: '1 предмет', explanation: '<em>tijeras</em> существует только в plural — артикль показывает «одну штуку».' },
        { id: 'q2', prompt: '<em>He comprado unos libros.</em>', options: ['1 предмет', 'несколько (3-5)'], correct: 'несколько (3-5)', explanation: '<em>libro</em> имеет plural и singular — значит «несколько книг».' },
        { id: 'q3', prompt: '<em>Llevo unas gafas.</em>', options: ['1 предмет', 'несколько (3-5)'], correct: '1 предмет' },
        { id: 'q4', prompt: '<em>Quiero unos vaqueros.</em>', options: ['1 предмет', 'несколько (3-5)'], correct: '1 предмет' },
        { id: 'q5', prompt: '<em>Veo unas flores.</em>', options: ['1 предмет', 'несколько (3-5)'], correct: 'несколько (3-5)' },
      ],
    },

    {
      id: '4.9',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма артикля ошибочна.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['un libro', 'una mesa', 'una problema', 'unos amigos'], correct: 'una problema', explanation: '<em>problema</em> — masculino → <em>un problema</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['una águila', 'un aula', 'unas águilas', 'una pequeña hacha'], correct: 'una águila', explanation: 'Должно быть <em>un águila</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['un día', 'una mano', 'un foto', 'unas radios'], correct: 'un foto', explanation: '<em>foto</em> — femenino: <em>una foto</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['unos coches', 'unas tijeras', 'unos gafas', 'un pantalón'], correct: 'unos gafas', explanation: '<em>gafas</em> — femenino: <em>unas gafas</em>.' },
      ],
    },

    {
      id: '4.10',
      title: 'Аудио: артикль + существительное',
      type: 'fill',
      instructions: 'Послушайте и запишите.',
      questions: [
        { id: 'q1', prompt: '', audio: 'una habitación',  correct: ['una habitación'] },
        { id: 'q2', prompt: '', audio: 'un águila',       correct: ['un águila'] },
        { id: 'q3', prompt: '', audio: 'unos vaqueros',   correct: ['unos vaqueros'] },
        { id: 'q4', prompt: '', audio: 'una flor',        correct: ['una flor'] },
        { id: 'q5', prompt: '', audio: 'un problema',     correct: ['un problema'] },
        { id: 'q6', prompt: '', audio: 'unas tijeras',    correct: ['unas tijeras'] },
      ],
    },

    {
      id: '4.11',
      title: 'Заполните: ¿Quién es...? — Es ___',
      type: 'fill',
      instructions: 'Ответ должен идентифицировать профессию или класс. Используйте артикль.',
      questions: [
        { id: 'q1', prompt: '¿Quién es Ronaldo? — Es ___ futbolista.',   correct: 'un' },
        { id: 'q2', prompt: '¿Quién es Isabel Allende? — Es ___ escritora.', correct: 'una' },
        { id: 'q3', prompt: '¿Quién es Frida Kahlo? — Es ___ pintora.',  correct: 'una' },
        { id: 'q4', prompt: '¿Quién es Almodóvar? — Es ___ director de cine.', correct: 'un' },
        { id: 'q5', prompt: '¿Quién es Stephen Hawking? — Es ___ científico.', correct: 'un' },
      ],
    },

    {
      id: '4.12',
      title: 'Дополните по контексту',
      type: 'fill',
      instructions: 'Поставьте <em>un / una / unos / unas</em>.',
      questions: [
        { id: 'q1', prompt: 'Quiero ___ melón, por favor.',            correct: 'un' },
        { id: 'q2', prompt: 'El Orinoco es ___ río importante.',        correct: 'un' },
        { id: 'q3', prompt: '¡Cuidado! ___ serpiente.',                 correct: 'una' },
        { id: 'q4', prompt: 'Rosa tiene ___ hija.',                      correct: 'una' },
        { id: 'q5', prompt: 'Necesitamos ___ tijeras nuevas.',           correct: 'unas' },
        { id: 'q6', prompt: 'Tengo ___ zapatos muy cómodos.',            correct: 'unos' },
        { id: 'q7', prompt: '¿Tienes ___ mapa de la ciudad?',            correct: 'un' },
        { id: 'q8', prompt: 'Es ___ idea genial.',                       correct: 'una' },
      ],
    },
  ],
};
