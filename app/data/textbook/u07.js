// ============================================================
// Unidad 7 — Contraste entre el artículo determinado y el indeterminado
// Когда un, а когда el — выбор зависит от того, известно ли слушающему,
// о чём именно идёт речь.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u07 = {
  id: 'u07',
  number: 7,
  title: { es: 'un perro / el perro', topic: 'Contraste artículo determinado / indeterminado' },
  topicRu: 'Когда ставить un, а когда — el',

  theory: [
    {
      type: 'rule',
      es: 'El <strong>artículo indeterminado</strong> (<em>un, una, unos, unas</em>) introduce información <strong>nueva</strong> para el oyente: hablamos por primera vez de algo, o lo presentamos como parte de una clase.',
      ru: 'Когда говорящий вводит в речь нечто новое (собеседник об этом ещё не знает) или представляет предмет как «один из класса» — ставится <em>un, una, unos, unas</em>.',
      examples: [
        { es: 'Tengo un loro y un perro.', ru: 'У меня есть попугай и собака. (новая инфа)' },
        { es: 'Tucumán es una ciudad de Argentina.', ru: 'Тукуман — (один из) город(ов) Аргентины.' },
        { es: 'Necesito alquilar un coche.', ru: 'Мне нужно арендовать (какую-нибудь) машину.' },
      ],
    },
    {
      type: 'rule',
      es: 'El <strong>artículo determinado</strong> (<em>el, la, los, las</em>) se usa cuando ya sabemos de qué cosa o persona hablamos: información <strong>conocida</strong>, <strong>única</strong> o <strong>en sentido general</strong>.',
      ru: 'Когда речь идёт об уже упомянутом, единственном или о категории в целом — ставится <em>el, la, los, las</em>.',
      examples: [
        { es: 'El loro se llama Ricky y el perro se llama Trotski.', ru: 'Попугая зовут Рики, а собаку — Троцкий. (уже представили)' },
        { es: 'Buenos Aires es la capital de Argentina.', ru: 'Буэнос-Айрес — столица Аргентины. (одна)' },
        { es: 'Necesito arreglar el coche.', ru: 'Мне нужно починить (мою) машину.' },
      ],
    },
    {
      type: 'heading',
      text: 'Сравнение по случаям',
    },
    {
      type: 'table',
      caption: 'Indeterminado vs determinado',
      columns: ['Un / una / unos / unas', 'El / la / los / las'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>Un hijo de Andrés es médico.</em> (один из трёх сыновей)', '<em>La hija de Rosa es escritora.</em> (одна-единственная)'],
        ['<em>Tucumán es una ciudad de Argentina.</em>', '<em>Buenos Aires es la capital de Argentina.</em>'],
        ['<em>He visto una película de terror.</em> (одну из многих)', '<em>Los actores eran muy malos.</em> (актёры этого фильма)'],
        ['<em>Necesito alquilar un coche.</em> (любой)', '<em>Necesito arreglar el coche.</em> (мой)'],
        ['<em>Un melón, por favor.</em> (один штуку)', '<em>Me encanta el melón.</em> (в общем)'],
      ],
    },
    {
      type: 'atencion',
      es: 'Cadena «primera mención → siguiente mención»: la primera vez se introduce con <em>un / una</em>; la segunda vez ya se usa <em>el / la</em>.',
      ru: 'Цепочка «впервые → потом» работает почти всегда: первое упоминание получает неопределённый артикль, повторное — определённый.',
      examples: [
        { es: 'Hay un coche en la calle. El coche es rojo.', ru: 'На улице (какая-то) машина. (Эта) машина красная.' },
        { es: 'Estoy leyendo un libro. El libro es de García Márquez.', ru: 'Я читаю (одну) книгу. (Эта) книга — Гарсиа Маркеса.' },
      ],
    },
    {
      type: 'rule',
      es: 'Cuando algo es <strong>único</strong> en su contexto, ya se sabe — siempre <em>el / la</em>: <em>el presidente, el sol, la capital, el director (de este banco)</em>.',
      ru: 'Если объект единственный в своём контексте — артикль уже определённый, без «знакомства».',
    },
  ],

  exercises: [
    {
      id: '7.1',
      title: 'Восполните цепочку «новое → известное»',
      type: 'fill',
      instructions: 'Сначала вводится новое (un/una), затем — то же, но уже известное (el/la). Поставьте нужный артикль.',
      questions: [
        { id: 'q1', prompt: 'Hay ___ perro en el jardín. ___ perro es muy grande.',    correct: ['un, El', 'un El'], placeholder: 'un, El' },
        { id: 'q2', prompt: 'Tengo ___ amiga colombiana. ___ amiga vive en Bogotá.',    correct: ['una, La', 'una La'], placeholder: 'una, La' },
        { id: 'q3', prompt: 'He visto ___ película. ___ película era muy aburrida.',     correct: ['una, La', 'una La'], placeholder: 'una, La' },
        { id: 'q4', prompt: 'Compré ___ libros. ___ libros son para Carmen.',             correct: ['unos, Los', 'unos Los'], placeholder: 'unos, Los' },
        { id: 'q5', prompt: '¿Hay ___ farmacia por aquí? — Sí, ___ farmacia está allí.',    correct: ['una, la', 'una la'], placeholder: 'una, la' },
        { id: 'q6', prompt: 'Tengo ___ vecinos nuevos. ___ vecinos son muy simpáticos.',    correct: ['unos, Los', 'unos Los'], placeholder: 'unos, Los' },
      ],
    },

    {
      id: '7.2',
      title: 'Выберите верную форму',
      type: 'choice',
      instructions: 'Подумайте, известный это объект или новый.',
      questions: [
        { id: 'q1', prompt: 'Chihuahua es ___ ciudad de México.',          options: ['la', 'una'], correct: 'una', explanation: 'Один из городов Мексики, не единственный.' },
        { id: 'q2', prompt: 'Madrid es ___ capital de España.',             options: ['la', 'una'], correct: 'la',  explanation: 'Столица одна.' },
        { id: 'q3', prompt: '¿Quién es ___ primer ministro de tu país?',     options: ['el', 'un'], correct: 'el',  explanation: 'Премьер-министр один.' },
        { id: 'q4', prompt: 'Soy enfermero y trabajo en ___ hospital.',       options: ['el', 'un'], correct: 'un',  explanation: 'Какой-то госпиталь, новая инфа.' },
        { id: 'q5', prompt: 'Estoy leyendo ___ libro sobre ___ rey Juan Carlos.', options: ['un / el', 'el / un', 'un / un'], correct: 'un / el', explanation: 'Книга — какая-то; король Хуан Карлос — единственный.' },
        { id: 'q6', prompt: 'La novia de Arturo es ___ brasileña.',            options: ['la', 'una', '—'], correct: '—', explanation: 'После <em>ser</em> + национальность — без артикля (см. Unidad 5).' },
        { id: 'q7', prompt: '___ Sol es ___ estrella.',                          options: ['El / una', 'Un / una', 'El / la'], correct: 'El / una', explanation: 'Солнце — единственное; звезда — одна из множества.' },
        { id: 'q8', prompt: 'Vivo en ___ centro de Lima.',                       options: ['el', 'un'], correct: 'el', explanation: 'Центр у города один.' },
      ],
    },

    {
      id: '7.3',
      title: 'Поставьте артикль или оставьте без',
      type: 'fill',
      instructions: 'Поставьте <em>un / una / unos / unas</em>, <em>el / la / los / las</em> или <code>—</code>, если артикль не нужен.',
      questions: [
        { id: 'q1', prompt: 'Me han regalado ___ bombones.',           correct: 'unos' },
        { id: 'q2', prompt: 'No me gusta ___ chocolate.',               correct: 'el', explanation: 'В общем смысле — определённый.' },
        { id: 'q3', prompt: '___ piña, por favor.',                      correct: 'Una', explanation: 'Количество, одна штука.' },
        { id: 'q4', prompt: '___ piña es mi fruta preferida.',            correct: 'La' },
        { id: 'q5', prompt: 'Me encantan ___ cuadros de Dalí.',           correct: 'los', explanation: 'Все картины Дали — известный класс.' },
        { id: 'q6', prompt: '¿Te gustan ___ peras?',                       correct: 'las', explanation: 'Груши вообще.' },
        { id: 'q7', prompt: 'Me he comprado ___ vaqueros.',                correct: 'unos', explanation: 'Pluralia tantum + новая покупка.' },
        { id: 'q8', prompt: 'Te he comprado ___ margaritas.',               correct: 'unas' },
        { id: 'q9', prompt: 'Quiero comprarme ___ pantalones cortos.',       correct: 'unos' },
        { id: 'q10', prompt: 'Me encanta ___ agua con limón.',                correct: 'el', explanation: 'В общем смысле; обратите внимание — <em>el agua</em>.' },
      ],
    },

    {
      id: '7.4',
      title: 'Что подразумевается?',
      type: 'choice',
      instructions: 'Какой смысл закладывает выбранный артикль?',
      questions: [
        { id: 'q1', prompt: '<em>Necesito alquilar un coche.</em>', options: ['любую машину', 'мою конкретную машину'], correct: 'любую машину' },
        { id: 'q2', prompt: '<em>Necesito arreglar el coche.</em>', options: ['любую машину', 'мою конкретную машину'], correct: 'мою конкретную машину' },
        { id: 'q3', prompt: '<em>Un hijo de Andrés es médico.</em>', options: ['у Андреса один сын, он врач', 'один из нескольких сыновей — врач'], correct: 'один из нескольких сыновей — врач' },
        { id: 'q4', prompt: '<em>La hija de Rosa es escritora.</em>', options: ['у Росы единственная дочь, она писательница', 'одна из дочерей — писательница'], correct: 'у Росы единственная дочь, она писательница' },
        { id: 'q5', prompt: '<em>Me gusta el melón.</em>', options: ['один конкретный кусок дыни', 'дыня в принципе как фрукт'], correct: 'дыня в принципе как фрукт' },
        { id: 'q6', prompt: '<em>Quiero un melón.</em>', options: ['одну штуку (любую)', 'тот самый, что лежит на витрине'], correct: 'одну штуку (любую)' },
      ],
    },

    {
      id: '7.5',
      title: 'Сопоставьте контекст и тип артикля',
      type: 'match',
      instructions: 'Каждой ситуации подберите тип артикля, который в ней нужен.',
      pool: ['indeterminado (un/una/unos/unas)', 'determinado (el/la/los/las)'],
      questions: [
        { id: 'q1', prompt: 'Первое упоминание новой вещи',                    correct: 'indeterminado (un/una/unos/unas)' },
        { id: 'q2', prompt: 'Уникальный объект (один в мире)',                  correct: 'determinado (el/la/los/las)' },
        { id: 'q3', prompt: 'Уже упомянутый предмет',                            correct: 'determinado (el/la/los/las)' },
        { id: 'q4', prompt: 'Один из класса (часть группы)',                     correct: 'indeterminado (un/una/unos/unas)' },
        { id: 'q5', prompt: 'Категория в целом, обобщение',                       correct: 'determinado (el/la/los/las)' },
        { id: 'q6', prompt: 'Количество («одну штуку»)',                          correct: 'indeterminado (un/una/unos/unas)' },
      ],
    },

    {
      id: '7.6',
      title: 'Восполните коротенький рассказ',
      type: 'fill',
      instructions: 'Поставьте <em>un / una</em> или <em>el / la</em> в каждый пропуск.',
      questions: [
        { id: 'q1', prompt: 'Conocí a ___ chica muy simpática en la fiesta.',                correct: 'una' },
        { id: 'q2', prompt: '___ chica se llama Marta y trabaja en un banco.',                correct: 'La' },
        { id: 'q3', prompt: 'Marta tiene ___ perro pequeño.',                                  correct: 'un' },
        { id: 'q4', prompt: '___ perro se llama Luna y duerme en su cama.',                    correct: 'El' },
        { id: 'q5', prompt: 'Marta vive en ___ piso del centro.',                                correct: 'un' },
        { id: 'q6', prompt: '___ piso tiene tres habitaciones y mucha luz.',                    correct: 'El' },
      ],
    },

    {
      id: '7.7',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза неестественна для носителя.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Hay un libro en la mesa.', 'Hay el libro en la mesa.', 'El libro es de Marta.', 'Necesito un libro de cocina.'], correct: 'Hay el libro en la mesa.', explanation: '<em>hay</em> почти всегда вводит новую инфу — с <em>un / una</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Madrid es la capital.', 'Madrid es una capital.', 'Toledo es una ciudad.', 'El sol es una estrella.'], correct: 'Madrid es una capital.', explanation: 'Столица — единственная.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Tengo una hermana.', '¿Tienes hermanos?', 'Tengo la hermana.', 'Tengo dos hermanas.'], correct: 'Tengo la hermana.', explanation: 'Первое упоминание — с <em>una</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['¿Quién es Almodóvar? — Es director.', '¿Quién es Almodóvar? — Es un director.', 'Almodóvar es director de cine.', 'Almodóvar es un director famoso.'], correct: '¿Quién es Almodóvar? — Es director.', explanation: 'Идентификация — с артиклем (см. Unidad 5).' },
      ],
    },

    {
      id: '7.8',
      title: 'Выбор артикля',
      type: 'multi',
      instructions: 'Отметьте все фразы, в которых артикль выбран <strong>правильно</strong>.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'El presidente de Brasil visita Madrid.',
            'Un presidente de Brasil visita Madrid.',
            'Hay un coche en la puerta.',
            'Hay el coche en la puerta.',
            'Me gusta el café.',
            'Me gusta un café.',
            'Tengo una hermana mayor.',
            'Tengo la hermana mayor.',
          ],
          correct: ['El presidente de Brasil visita Madrid.', 'Hay un coche en la puerta.', 'Me gusta el café.', 'Tengo una hermana mayor.'],
          explanation: 'Уникальный → el; первое упоминание → un; общий смысл → el; первое упоминание сестры → una.',
        },
      ],
    },

    {
      id: '7.9',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите услышанное полностью, со всеми артиклями.',
      questions: [
        { id: 'q1', prompt: '', audio: 'tengo un perro y un loro',                correct: ['tengo un perro y un loro', 'tengo un perro y un loro.'] },
        { id: 'q2', prompt: '', audio: 'el perro se llama Rocky',                  correct: ['el perro se llama Rocky', 'el perro se llama Rocky.'] },
        { id: 'q3', prompt: '', audio: 'Buenos Aires es la capital de Argentina',  correct: ['Buenos Aires es la capital de Argentina', 'Buenos Aires es la capital de Argentina.'] },
        { id: 'q4', prompt: '', audio: 'me gusta el chocolate',                    correct: ['me gusta el chocolate', 'me gusta el chocolate.'] },
        { id: 'q5', prompt: '', audio: 'necesito una habitación tranquila',         correct: ['necesito una habitación tranquila', 'necesito una habitación tranquila.'] },
      ],
    },

    {
      id: '7.10',
      title: 'Перепишите фразу с верным артиклем',
      type: 'fill',
      instructions: 'Перепишите фразу так, как сказал бы носитель.',
      questions: [
        { id: 'q1', prompt: '<em>Hay el problema en el coche.</em> →',          correct: ['Hay un problema en el coche.', 'Hay un problema en el coche'] },
        { id: 'q2', prompt: '<em>Tengo el hermano mayor.</em> →',                correct: ['Tengo un hermano mayor.', 'Tengo un hermano mayor'] },
        { id: 'q3', prompt: '<em>Me gusta un té por la mañana.</em> →',          correct: ['Me gusta el té por la mañana.', 'Me gusta el té por la mañana'] },
        { id: 'q4', prompt: '<em>Lima es una capital de Perú.</em> →',           correct: ['Lima es la capital de Perú.', 'Lima es la capital de Perú'] },
        { id: 'q5', prompt: '<em>Necesito el coche para mañana.</em> →',         correct: ['Necesito un coche para mañana.', 'Necesito un coche para mañana'], explanation: 'Если речь о любом — <em>un</em>; если о моём — <em>el</em>. В обобщённом запросе аренды — <em>un</em>.' },
      ],
    },
  ],
};
