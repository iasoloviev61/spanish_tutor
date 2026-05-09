// ============================================================
// Unidad 31 — Interrogativos (2): ¿cuál?, ¿qué?
// Выбор из группы (cuál) против открытого вопроса (qué).
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u31 = {
  id: 'u31',
  number: 31,
  title: { es: '¿cuál?, ¿qué?…', topic: 'Interrogativos (2)' },
  topicRu: 'Вопросительные ¿cuál? и ¿qué? — выбор из группы',

  theory: [
    {
      type: 'rule',
      es: '<strong>cuál, cuáles</strong> son interrogativos. Sirven para pedir información cuando hay que <em>elegir</em> entre dos o más elementos de un grupo concreto. Llevan tilde y van entre <em>¿…?</em>',
      ru: '<em>cuál / cuáles</em> — это «который из» или «какой именно из». Используется, когда выбираем <strong>из конкретной группы</strong> (из этих, из твоих, из нас, из городов Испании…). По форме — <em>cuál</em> для одного, <em>cuáles</em> для нескольких. Тильда обязательна.',
      examples: [
        { es: '¿Cuál es tu color preferido?', ru: 'Какой твой любимый цвет?' },
        { es: '¿Cuáles son tus deportes preferidos?', ru: 'Какие твои любимые виды спорта?' },
        { es: '¿Cuál de tus hermanos vive en La Habana?', ru: 'Кто из твоих братьев живёт в Гаване?' },
        { es: '¿Cuál de vosotros habla ruso?', ru: 'Кто из вас говорит по-русски?' },
      ],
    },
    {
      type: 'heading',
      text: 'Формы и схемы',
    },
    {
      type: 'table',
      caption: 'cuál / cuáles',
      columns: ['Структура', 'Пример'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['<em>cuál / cuáles</em> + verbo',                          '<em>¿Cuál es tu apellido?</em>'],
        ['(preposición + ) <em>cuál / cuáles</em>',                  '<em>¿Por cuál te has decidido?</em>'],
        ['<em>cuál / cuáles + de + estos, mis, los, vosotros…</em>', '<em>¿Cuál de estas chicas es tu novia?</em>'],
        ['(preposición +) <em>cuál / cuáles + de…</em>',              '<em>¿Por cuál de estas ciudades pasa el Ebro?</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'Se usa <strong>cuál, cuáles</strong> para preguntar sobre un grupo específico de cosas o personas. La pregunta da a elegir entre los elementos de ese grupo.',
      ru: '<em>cuál / cuáles</em> уместно, когда из контекста ясно, <strong>из чего выбираем</strong>. Группа может быть упомянута явно (<em>cuál de estos…</em>) или подразумеваться (например, в анкете: «cuál es tu apellido» — из множества возможных фамилий).',
      examples: [
        { es: '—¿Tienes un boli? —Sí. Tengo uno azul y otro negro. —¿Cuál prefieres? —El negro.', ru: '— Есть ручка? — Да, синяя и чёрная. — Какую хочешь? — Чёрную.' },
        { es: '—¿Cuál de esas chicas es la hermana de Toni? —La del pelo largo.', ru: '— Какая из тех девушек — сестра Тони? — Та, что с длинными волосами.' },
        { es: '—¿Cuál es el río más largo del mundo? —El Nilo.', ru: '— Какая самая длинная река в мире? — Нил.' },
      ],
    },
    {
      type: 'rule',
      es: 'También se puede usar <strong>qué + nombre</strong> (singular o plural) para pedir información sobre un grupo específico (= «qué clase de»). Es la forma más común en España con sustantivo expresado.',
      ru: 'Альтернатива — <em>qué + существительное</em>: «какой/какая/какие». Так работает, когда после <em>qué</em> сразу идёт сущ.: <em>¿qué libro?</em>, <em>¿qué deportes?</em>. В Испании это основной способ сказать «какой именно». В Латинской Америке часто <em>cuál + nombre</em> — но в нашем учебнике придерживаемся европейской нормы.',
      examples: [
        { es: '¿Qué libro prefieres: el de Borges o el de Cortázar?', ru: 'Какую книгу предпочитаешь — Борхеса или Кортасара?' },
        { es: '¿Qué médico te ha visto? — La doctora Martín.', ru: 'Какой врач тебя осматривал?' },
        { es: '¿En qué ciudad española está la Puerta de Alcalá?', ru: 'В каком испанском городе находится Пуэрта-де-Алькала?' },
      ],
    },
    {
      type: 'heading',
      text: 'Открытый или ограниченный вопрос',
    },
    {
      type: 'table',
      caption: 'Сравнение respuesta abierta / limitada',
      columns: ['Открытый вопрос (qué, quién, quiénes)', 'Выбор из группы (qué + nombre / cuál, cuáles)'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>¿Qué quieres?</em>',                       '<em>¿Qué libro quieres? / ¿Cuál de estos libros quieres?</em>'],
        ['<em>¿Qué es un OVNI?</em>',                    '<em>¿Qué poeta famoso nació en Chile?</em>'],
        ['<em>¿Quién inventó el teléfono?</em>',          '<em>¿Cuál es tu apellido?</em>'],
        ['<em>¿Quiénes han venido?</em>',                '<em>¿Cuáles de estas cajas son nuestras?</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Cuando se mencionan <strong>los elementos entre los que se va a elegir</strong>, se usa <em>¿qué?</em> para cosas y <em>¿quién?</em> para personas, no <em>¿cuál?</em>: <em>¿Qué prefieren, carne o pescado?</em> · <em>¿Quién es más alta, Rosana o Leila?</em>',
      ru: 'Если в самом вопросе перечислены варианты («чай или кофе?», «Анна или Мария?»), используют <em>¿qué?</em> для вещей и <em>¿quién?</em> для людей — не <em>¿cuál?</em>: <em>¿Qué prefieres, té o café?</em>, <em>¿Quién es más alta, Rosana o Leila?</em>.',
    },
    {
      type: 'atencion',
      es: 'En España es muy raro <em>¿cuál + nombre?</em> (<em><span style="text-decoration: line-through">¿cuál libro?</span></em>): se prefiere <em>¿qué libro?</em> o <em>¿cuál de los libros?</em>. En América Latina <em>¿cuál libro?</em> sí se oye y es aceptable.',
      ru: 'В Испании <em>¿cuál + сущ.?</em> почти не встречается: говорят либо <em>¿qué libro?</em>, либо <em>¿cuál de los libros?</em>. В Латинской Америке <em>¿cuál libro?</em> — норма; здесь будем ориентироваться на испанский вариант.',
    },
  ],

  exercises: [
    {
      id: '31.1',
      title: 'cuál или cuáles',
      type: 'fill',
      instructions: 'Допишите <em>Cuál</em> или <em>Cuáles</em> (с тильдой, с заглавной буквы).',
      questions: [
        { id: 'q1', prompt: '¿___ es tu bebida preferida?',                              correct: 'Cuál' },
        { id: 'q2', prompt: '¿___ son tus deportes preferidos?',                          correct: 'Cuáles' },
        { id: 'q3', prompt: '¿___ es la montaña más alta del mundo?',                     correct: 'Cuál' },
        { id: 'q4', prompt: '¿___ son las cinco ciudades más pobladas de América?',         correct: 'Cuáles' },
        { id: 'q5', prompt: '¿___ es tu apellido?',                                          correct: 'Cuál' },
        { id: 'q6', prompt: '¿___ son nuestras habitaciones?',                                correct: 'Cuáles' },
        { id: 'q7', prompt: '¿___ es la capital de Colombia?',                                 correct: 'Cuál' },
        { id: 'q8', prompt: '¿___ es el río más largo de Europa?',                              correct: 'Cuál' },
      ],
    },

    {
      id: '31.2',
      title: 'cuál de или cuáles de',
      type: 'fill',
      instructions: 'Сформулируйте «выбор из группы» через <em>Cuál de</em> или <em>Cuáles de</em>.',
      questions: [
        { id: 'q1', prompt: '¿___ esos chicos es el hijo de Guillermo?',                  correct: 'Cuál de' },
        { id: 'q2', prompt: '¿___ tus padres nació en Panamá?',                            correct: 'Cuál de' },
        { id: 'q3', prompt: '¿___ tus hermanos nacieron en Ecuador?',                       correct: 'Cuáles de' },
        { id: 'q4', prompt: '¿___ ustedes ha estado en la Patagonia?',                        correct: 'Cuál de' },
        { id: 'q5', prompt: '¿___ los dos diccionarios prefieres?',                            correct: 'Cuál de' },
        { id: 'q6', prompt: '¿___ vosotros habla francés?',                                     correct: 'Cuál de' },
        { id: 'q7', prompt: '¿___ estas chicas son tus primas?',                                 correct: 'Cuáles de' },
        { id: 'q8', prompt: '¿___ los jugadores marcó el gol?',                                  correct: 'Cuál de' },
      ],
    },

    {
      id: '31.3',
      title: 'cuál / cuáles / cuál de / cuáles de или qué',
      type: 'fill',
      instructions: 'Допишите подходящий вопросительный (с тильдой). Если перед существительным — обычно <em>qué</em>; если выбор из конкретной группы — <em>cuál / cuáles (de)</em>.',
      questions: [
        { id: 'q1', prompt: '¿___ tus hermanos trabaja en Aerolíneas? — Jaime.',           correct: 'Cuál de' },
        { id: 'q2', prompt: '¿___ es tu comida preferida? — El pescado.',                   correct: 'Cuál' },
        { id: 'q3', prompt: '¿___ son tus deportes preferidos? — El baloncesto y el tenis.', correct: 'Cuáles' },
        { id: 'q4', prompt: '¿___ deportes practicas? — Tenis y natación.',                   correct: 'Qué' },
        { id: 'q5', prompt: '¿___ quieres estudiar? — Aún no lo sé.',                          correct: 'Qué' },
        { id: 'q6', prompt: '¿___ es tu película preferida? — Casablanca.',                     correct: 'Cuál' },
        { id: 'q7', prompt: '¿___ tus hermanas vive en Rosario? — Cecilia.',                    correct: 'Cuál de' },
        { id: 'q8', prompt: '¿En ___ ciudad de México vive María? — En Tijuana.',                 correct: 'qué' },
        { id: 'q9', prompt: '¿Con ___ líneas aéreas va a viajar Sol? — Con Iberia.',               correct: 'qué' },
        { id: 'q10', prompt: '¿___ son nuestras habitaciones? — Las tres de la derecha.',           correct: 'Cuáles' },
        { id: 'q11', prompt: '¿En ___ trabaja Mariano? — Es cocinero.',                              correct: 'qué', explanation: 'Профессия / сфера — открытый вопрос.' },
        { id: 'q12', prompt: '¿___ prefieres, té o café? — Té.',                                       correct: 'Qué', explanation: 'Когда варианты названы прямо в вопросе — <em>qué</em>, не <em>cuál</em>.' },
      ],
    },

    {
      id: '31.4',
      title: 'qué или cuál — открытый/ограниченный',
      type: 'choice',
      instructions: 'Какой вариант естественнее в Испании?',
      questions: [
        { id: 'q1', prompt: '¿___ es tu nombre?',                              options: ['Qué', 'Cuál'], correct: 'Cuál' },
        { id: 'q2', prompt: '¿___ es esto? — Un OVNI.',                         options: ['Qué', 'Cuál'], correct: 'Qué', explanation: 'Спрашиваем определение / категорию.' },
        { id: 'q3', prompt: '¿___ es la fecha de hoy?',                          options: ['Qué', 'Cuál'], correct: 'Cuál' },
        { id: 'q4', prompt: '¿___ libro estás leyendo?',                          options: ['Qué', 'Cuál'], correct: 'Qué', explanation: 'Перед сущ. в Испании — <em>qué</em>.' },
        { id: 'q5', prompt: '¿___ de estos libros estás leyendo?',                 options: ['Qué', 'Cuál'], correct: 'Cuál' },
        { id: 'q6', prompt: '¿___ haces los domingos?',                              options: ['Qué', 'Cuál'], correct: 'Qué' },
        { id: 'q7', prompt: '¿___ prefieres, el rojo o el azul?',                    options: ['Qué', 'Cuál'], correct: 'Cuál', explanation: 'Здесь варианты предметов перечислены — <em>cuál</em> ок, потому что выбираем «который»; либо <em>qué color</em>. Без сущ. — <em>cuál</em>.' },
        { id: 'q8', prompt: '¿___ quieren, carne o pescado?',                        options: ['Qué', 'Cuál'], correct: 'Qué', explanation: 'Без сущ., но варианты прямо названы — традиционно <em>qué</em>.' },
      ],
    },

    {
      id: '31.5',
      title: 'Викторина по культуре',
      type: 'fill',
      instructions: 'Допишите <em>Quién, Quiénes, Qué, Cuál, Cuál de</em> (с тильдой, как в начале вопроса).',
      questions: [
        { id: 'q1', prompt: '¿___ es la ciudad más antigua de América Latina?',          correct: 'Cuál' },
        { id: 'q2', prompt: '¿___ es un “huaino”?',                                       correct: 'Qué', explanation: 'Спрашиваем определение.' },
        { id: 'q3', prompt: '¿En ___ ciudad española está el Museo del Prado?',             correct: 'qué' },
        { id: 'q4', prompt: '¿___ es la capital de Colombia?',                                correct: 'Cuál' },
        { id: 'q5', prompt: '¿___ escribió <em>Trilce</em>?',                                  correct: 'Quién' },
        { id: 'q6', prompt: '¿___ río atraviesa Santiago de Chile?',                            correct: 'Qué' },
        { id: 'q7', prompt: '¿Entre ___ países está el lago Titicaca?',                          correct: 'qué' },
        { id: 'q8', prompt: '¿En ___ estas ciudades está la Sagrada Familia: Barcelona, Sevilla o Valladolid?', correct: 'cuál de' },
        { id: 'q9', prompt: '¿___ construyeron Machu Picchu?',                                     correct: 'Quiénes' },
        { id: 'q10', prompt: '¿En ___ país suramericano está el volcán Inti?',                      correct: 'qué' },
        { id: 'q11', prompt: '¿___ es la ciudad más poblada de América Latina?',                    correct: 'Cuál' },
        { id: 'q12', prompt: '¿___ es un “poncho”?',                                                  correct: 'Qué' },
      ],
    },

    {
      id: '31.6',
      title: 'Сопоставьте',
      type: 'match',
      instructions: 'Какой interrogativo подходит к каждой ситуации?',
      pool: ['qué', 'qué + nombre', 'cuál', 'cuáles', 'cuál de', 'cuáles de', 'quién', 'quiénes'],
      questions: [
        { id: 'q1', prompt: 'открытый вопрос про вещь / действие',                    correct: 'qué' },
        { id: 'q2', prompt: 'категория / класс предмета (перед сущ.)',                  correct: 'qué + nombre' },
        { id: 'q3', prompt: 'выбор одного элемента (без явной группы after de)',         correct: 'cuál' },
        { id: 'q4', prompt: 'выбор нескольких элементов',                                correct: 'cuáles' },
        { id: 'q5', prompt: 'выбор одного из явной группы',                              correct: 'cuál de' },
        { id: 'q6', prompt: 'выбор нескольких из явной группы',                          correct: 'cuáles de' },
        { id: 'q7', prompt: 'идентификация одного человека',                              correct: 'quién' },
        { id: 'q8', prompt: 'идентификация нескольких людей',                              correct: 'quiénes' },
      ],
    },

    {
      id: '31.7',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду один вопрос с ошибкой выбора interrogativo — выберите его.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: [
          '¿Cuál es tu apellido?',
          '¿Qué es tu apellido?',
          '¿Cuál es tu color preferido?',
          '¿Cuáles son tus deportes preferidos?',
        ], correct: '¿Qué es tu apellido?', explanation: 'Фамилия из множества возможных — <em>cuál</em>; <em>qué</em> здесь уместно только если спрашивают определение слова.' },
        { id: 'q2', prompt: 'Где ошибка?', options: [
          '¿Qué libro prefieres?',
          '¿Cuál de los libros prefieres?',
          '¿Cuál libro prefieres?',
          '¿Cuáles de estos libros prefieres?',
        ], correct: '¿Cuál libro prefieres?', explanation: 'В Испании перед сущ. — <em>qué libro</em>; <em>cuál + nombre</em> характерно для Лат. Америки.' },
        { id: 'q3', prompt: 'Где ошибка?', options: [
          '¿Qué prefieres, té o café?',
          '¿Cuál prefieres, té o café?',
          '¿Cuál de estos cafés prefieres?',
          '¿Quién es más alta, Rosana o Leila?',
        ], correct: '¿Cuál prefieres, té o café?', explanation: 'Когда варианты прямо названы — <em>qué</em> для вещей.' },
        { id: 'q4', prompt: 'Где ошибка?', options: [
          '¿Cuál son tus zapatos?',
          '¿Cuáles son tus zapatos?',
          '¿Cuáles de estos zapatos son tuyos?',
          '¿Cuál es tu zapato derecho?',
        ], correct: '¿Cuál son tus zapatos?', explanation: 'Множественное — <em>cuáles</em>.' },
      ],
    },

    {
      id: '31.8',
      title: 'Разверните вопрос с предлогом',
      type: 'fill',
      instructions: 'Допишите предлог + <em>cuál / cuáles</em>. Образец: ¿___ pasa el Ebro? (по какому из городов?) → ¿Por cuál pasa el Ebro?',
      questions: [
        { id: 'q1', prompt: '¿___ has decidido? (за какой проголосовал?)',          correct: ['¿Por cuál'] },
        { id: 'q2', prompt: '¿___ estás esperando? (какого из автобусов?)',         correct: ['¿A cuál'] },
        { id: 'q3', prompt: '¿___ habla María? (с кем из них?)',                       correct: ['¿Con cuál'] },
        { id: 'q4', prompt: '¿___ son nuestros lápices? (какие из этих?)',              correct: ['¿Cuáles'] },
        { id: 'q5', prompt: '¿___ estos chicos te llamó? (кто из этих?)',                correct: ['¿Cuál de'] },
        { id: 'q6', prompt: '¿___ vosotras quiere venir? (кто из вас?)',                   correct: ['¿Cuál de'] },
      ],
    },

    {
      id: '31.9',
      title: 'Какие вопросы корректны',
      type: 'multi',
      instructions: 'Отметьте все <strong>правильно</strong> построенные вопросы (испанская норма).',
      questions: [
        {
          id: 'q1',
          prompt: 'Выберите все корректные варианты:',
          options: [
            '¿Cuál es tu nombre?',
            '¿Qué es tu nombre?',
            '¿Qué libro lees?',
            '¿Cuál libro lees?',
            '¿Cuál de estos libros lees?',
            '¿Cuáles son tus llaves?',
            '¿Cuál son tus llaves?',
            '¿Qué prefieres, té o café?',
            '¿Cuál prefieres, té o café?',
            '¿Cuáles de vosotros habla ruso?',
            '¿Cuál de vosotros habla ruso?',
          ],
          correct: ['¿Cuál es tu nombre?', '¿Qué libro lees?', '¿Cuál de estos libros lees?', '¿Cuáles son tus llaves?', '¿Qué prefieres, té o café?', '¿Cuál de vosotros habla ruso?'],
          explanation: 'В Испании перед сущ. — <em>qué</em>, для выбора из группы — <em>cuál de</em>. Согласование <em>cuál / cuáles</em> по числу. <em>Cuáles de vosotros</em> неточно: <em>vosotros</em> — это адресаты, в группе берётся один — <em>cuál</em>.',
        },
      ],
    },

    {
      id: '31.10',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Нажмите 🔊 и запишите вопрос полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: '¿Cuál es tu color preferido?',                correct: ['¿Cuál es tu color preferido?'] },
        { id: 'q2', prompt: '', audio: '¿Cuáles son tus deportes preferidos?',         correct: ['¿Cuáles son tus deportes preferidos?'] },
        { id: 'q3', prompt: '', audio: '¿Qué libro estás leyendo?',                     correct: ['¿Qué libro estás leyendo?'] },
        { id: 'q4', prompt: '', audio: '¿Cuál de tus hermanos vive en La Habana?',       correct: ['¿Cuál de tus hermanos vive en La Habana?'] },
        { id: 'q5', prompt: '', audio: '¿Qué prefieres, té o café?',                      correct: ['¿Qué prefieres, té o café?'] },
        { id: 'q6', prompt: '', audio: '¿En qué ciudad vives?',                            correct: ['¿En qué ciudad vives?'] },
      ],
    },

    {
      id: '31.11',
      title: 'Перепишите через cuál de',
      type: 'fill',
      instructions: 'Перепишите вопрос с <em>qué</em> на эквивалент с <em>cuál de</em>.',
      questions: [
        { id: 'q1', prompt: '<em>¿Qué libro de estos prefieres?</em> →',                  correct: ['¿Cuál de estos libros prefieres?'] },
        { id: 'q2', prompt: '<em>¿Qué chica de esas es tu hermana?</em> →',                correct: ['¿Cuál de esas chicas es tu hermana?'] },
        { id: 'q3', prompt: '<em>¿Qué llaves de estas son las tuyas?</em> →',               correct: ['¿Cuáles de estas llaves son las tuyas?'] },
        { id: 'q4', prompt: '<em>¿Qué chico de los dos te gusta más?</em> →',                correct: ['¿Cuál de los dos chicos te gusta más?'] },
      ],
    },

    {
      id: '31.12',
      title: 'Смешанная практика',
      type: 'fill',
      instructions: 'Допишите вопросительное слово (с тильдой). Учитывайте: открытый вопрос или выбор из группы.',
      questions: [
        { id: 'q1', prompt: '¿___ tipo de música te gusta? — El jazz.',                    correct: 'Qué' },
        { id: 'q2', prompt: '¿___ es tu canción favorita? — “Imagine”.',                    correct: 'Cuál' },
        { id: 'q3', prompt: '¿___ inventó el bolígrafo? — László Bíró.',                     correct: 'Quién' },
        { id: 'q4', prompt: '¿___ son tus mejores amigos? — Pedro y Marta.',                  correct: 'Quiénes' },
        { id: 'q5', prompt: '¿___ estas dos camisas te queda mejor? — La azul.',               correct: 'Cuál de' },
        { id: 'q6', prompt: '¿En ___ continente está Argentina? — En América del Sur.',         correct: 'qué' },
        { id: 'q7', prompt: '¿___ es la moneda de México? — El peso.',                            correct: 'Cuál' },
        { id: 'q8', prompt: '¿___ es un “taco”? — Una comida típica mexicana.',                    correct: 'Qué' },
      ],
    },
  ],
};
