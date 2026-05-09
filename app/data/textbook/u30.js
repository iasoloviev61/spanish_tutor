// ============================================================
// Unidad 30 — Interrogativos (1): ¿quién?, ¿qué?
// Базовые вопросительные о людях и о вещах, конструкция
// «предлог + interrogativo» в начале вопроса.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u30 = {
  id: 'u30',
  number: 30,
  title: { es: '¿quién?, ¿qué?…', topic: 'Interrogativos (1)' },
  topicRu: 'Вопросительные ¿quién? и ¿qué?',

  theory: [
    {
      type: 'rule',
      es: '<strong>quién, quiénes, qué</strong> son interrogativos. Se usan para pedir información sobre <em>personas, animales o cosas</em>. Llevan siempre <strong>tilde</strong> y van entre <em>¿…?</em>',
      ru: '<em>quién / quiénes</em> — «кто», <em>qué</em> — «что» (или «какой/-ая/-ое»). Это вопросительные слова: они <strong>всегда с ударением</strong> на письме (<em>quién, qué</em>) и используются в вопросах <em>¿…?</em>',
      examples: [
        { es: '¿Quién ha llamado por teléfono?', ru: 'Кто звонил?' },
        { es: '¿Qué vende esa señora?', ru: 'Что продаёт та женщина?' },
        { es: '¿Para quién es esta carta?', ru: 'Кому это письмо?' },
        { es: '¿Quiénes son los ganadores?', ru: 'Кто победители?' },
      ],
    },
    {
      type: 'heading',
      text: 'Формы',
    },
    {
      type: 'table',
      caption: 'quién / qué',
      columns: ['Форма', 'Использование'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['<em>quién</em>',  '«кто» — про одного человека'],
        ['<em>quiénes</em>', '«кто» — про нескольких'],
        ['<em>qué</em>',    '«что» / «какой» — про вещи, действия, классы'],
        ['<em>qué + nombre</em>', '«какой / какая» — выбор «класса» (см. ниже)'],
      ],
    },
    {
      type: 'rule',
      es: 'Se usa <strong>quién</strong> o <strong>quiénes</strong> para preguntar por la <em>identidad de personas</em>. Concuerda en número con la respuesta esperada.',
      ru: 'О <strong>людях</strong> — <em>quién</em> (один человек) или <em>quiénes</em> (несколько). Если ответ ожидается множественный — спрашивайте <em>quiénes</em>.',
      examples: [
        { es: '—¿Quién es esa señora? —Es mi profesora de piano.', ru: '— Кто эта женщина? — Моя учительница фортепиано.' },
        { es: '—¿Quiénes son los hermanos de Mercedes? —Los que están en la mesa del centro.', ru: '— Кто братья Мерседес? — Те, что за центральным столом.' },
        { es: '—¿Con quién está hablando Pablo? —Con un vecino.', ru: '— С кем разговаривает Пабло? — С соседом.' },
      ],
    },
    {
      type: 'rule',
      es: 'Se usa <strong>qué</strong> para preguntar por <em>cosas, acciones</em> o el contenido de algo.',
      ru: 'О <strong>предметах и действиях</strong> — <em>qué</em>. По-русски обычно «что» / «что делать».',
      examples: [
        { es: '—¿Qué tienes en la mano? —Unas monedas.', ru: '— Что у тебя в руке? — Монетки.' },
        { es: '—¿Qué hacéis? —Estamos estudiando un poco.', ru: '— Что вы делаете? — Учимся немного.' },
        { es: '—¿De qué están hablando? —De fútbol, como siempre.', ru: '— О чём они говорят? — О футболе, как всегда.' },
      ],
    },
    {
      type: 'rule',
      es: 'Se usa <strong>qué + nombre</strong> singular o plural para preguntar por una <em>clase</em> de cosas o animales (= <em>¿qué clase de…?</em>).',
      ru: '<em>qué</em> может стоять перед существительным — спрашивает «какой именно?» в смысле <strong>«какого класса / типа»</strong>: <em>¿qué queso?</em> «какой сыр (какого сорта)?», <em>¿qué animales?</em> «какие животные?». В таком случае <em>qué</em> приближается к «какой».',
      examples: [
        { es: '—¿Qué queso habéis comprado? —Queso de bola.', ru: '— Какой (какого сорта) сыр вы купили? — Сыр бола.' },
        { es: '—¿Qué animales viven en la tierra y en el agua? —Los anfibios.', ru: '— Какие животные живут и на суше, и в воде? — Земноводные.' },
        { es: '¿Qué libros te gustan?', ru: 'Какие книги тебе нравятся?' },
      ],
    },
    {
      type: 'heading',
      text: 'Конструкция с предлогом',
    },
    {
      type: 'rule',
      es: 'En español la <strong>preposición</strong> que rige al verbo va <em>delante</em> del interrogativo, no al final como en inglés.',
      ru: 'В испанском предлог идёт <strong>перед</strong> вопросительным словом, а не в конце вопроса (в отличие от английского). По-русски это естественно: «<em>с кем?</em>», «<em>о чём?</em>».',
      examples: [
        { es: '¿De quién es esta carta?', ru: 'Чьё это письмо?' },
        { es: '¿Para quién es este regalo?', ru: 'Для кого этот подарок?' },
        { es: '¿Con quién has venido?', ru: 'С кем ты пришёл?' },
        { es: '¿En qué piensas?', ru: 'О чём ты думаешь?' },
        { es: '¿Con qué has hecho el caldo?', ru: 'Из чего ты сварил бульон?' },
      ],
    },
    {
      type: 'atencion',
      es: 'Hay dos esquemas básicos: <strong>(1)</strong> interrogativo SUJETO (<em>quién, qué</em>) + verbo + complementos; <strong>(2)</strong> interrogativo COMPLEMENTO (<em>a quién, qué…</em>) + verbo + sujeto + complementos. Cuando el interrogativo es complemento, el sujeto pasa <em>detrás</em> del verbo.',
      ru: 'Запомните два порядка: <strong>(1)</strong> подлежащее-вопрос — <em>¿Quién ha vendido el ordenador?</em> «Кто продал компьютер?»; <strong>(2)</strong> дополнение-вопрос — <em>¿A quién <strong>ha vendido Alejo</strong> el ordenador?</em> «Кому Алехо продал компьютер?». Во втором случае <strong>подлежащее идёт после глагола</strong> — это естественный для испанского порядок слов.',
    },
    {
      type: 'table',
      caption: 'Схемы вопросов',
      columns: ['Тип', 'Пример'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['SUJETO',     '<em>¿Quién ha vendido el ordenador?</em> · <em>¿Qué pasa?</em>'],
        ['COMPLEMENTO', '<em>¿A quién ha vendido Alejo el ordenador?</em> · <em>¿Qué ha vendido Alejo?</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Cuando se pregunta por el <em>complemento directo de persona</em>, se usa la preposición <strong>a</strong>: <em>—¿A quién has visto? —A María</em>. (En español, los complementos directos de persona llevan <em>a</em>.)',
      ru: 'Если человек — прямое дополнение, обязательна <strong>a</strong>: <em>¿A quién has visto?</em> «Кого ты видел?». Для предметов и животных <em>a</em> не нужно: <em>¿Qué has visto?</em>',
    },
  ],

  exercises: [
    {
      id: '30.1',
      title: 'Соберите вопрос из слов',
      type: 'fill',
      instructions: 'Соберите вопрос в правильном порядке. Не забудьте <em>¿…?</em>, тильду в <em>quién / qué</em> и точку с запятой не нужны.',
      questions: [
        { id: 'q1', prompt: 'tiene / en la mano / Julián / qué',         correct: ['¿Qué tiene Julián en la mano?'] },
        { id: 'q2', prompt: 'quién / Eloísa / está bailando / con',       correct: ['¿Con quién está bailando Eloísa?'] },
        { id: 'q3', prompt: 'ese anillo / para / es / quién',              correct: ['¿Para quién es ese anillo?'] },
        { id: 'q4', prompt: 'anoche / pasó / qué',                          correct: ['¿Qué pasó anoche?'] },
        { id: 'q5', prompt: 'quién / esa bolsa / de / es',                  correct: ['¿De quién es esa bolsa?'] },
        { id: 'q6', prompt: 'tus padres / te / qué / han regalado',         correct: ['¿Qué te han regalado tus padres?'] },
        { id: 'q7', prompt: 'la puerta / qué / has abierto / con',          correct: ['¿Con qué has abierto la puerta?'] },
        { id: 'q8', prompt: 'está escribiendo / una novela / quién',         correct: ['¿Quién está escribiendo una novela?'] },
        { id: 'q9', prompt: 'María / qué / quiere',                          correct: ['¿Qué quiere María?'] },
        { id: 'q10', prompt: 'quiere / a María / quién',                      correct: ['¿Quién quiere a María?'] },
        { id: 'q11', prompt: 'es / la sopa / qué / de',                        correct: ['¿De qué es la sopa?'] },
      ],
    },

    {
      id: '30.2',
      title: 'quién, quiénes или qué?',
      type: 'fill',
      instructions: 'Допишите подходящее вопросительное слово (с тильдой!).',
      questions: [
        { id: 'q1',  prompt: '¿___ te ha regalado ese collar?',         correct: 'Quién' },
        { id: 'q2',  prompt: '¿De ___ es esta pluma?',                    correct: 'quién' },
        { id: 'q3',  prompt: '¿___ miel tomas normalmente?',              correct: 'Qué', explanation: '«Какого сорта мёд» — <em>qué + nombre</em>.' },
        { id: 'q4',  prompt: '¿Con ___ fuiste a Bolivia?',                  correct: 'quién' },
        { id: 'q5',  prompt: '¿___ estás haciendo?',                        correct: 'Qué' },
        { id: 'q6',  prompt: '¿___ van a jugar en el equipo esta semana?', correct: 'Quiénes', explanation: 'Ожидается несколько человек.' },
        { id: 'q7',  prompt: '¿___ libros le gustan a Teresa?',              correct: 'Qué' },
        { id: 'q8',  prompt: '¿Con ___ has abierto el paquete?',              correct: 'qué', explanation: 'Чем — инструмент, не человек.' },
        { id: 'q9',  prompt: '¿A ___ visteis anoche en la fiesta?',            correct: 'quién' },
        { id: 'q10', prompt: '¿___ visteis anoche en la tele?',                 correct: 'Qué' },
        { id: 'q11', prompt: '¿___ quería Julián?',                              correct: 'Qué', explanation: 'Без <em>a</em> — про вещь/действие.' },
      ],
    },

    {
      id: '30.3',
      title: 'Сформулируйте вопрос',
      type: 'fill',
      instructions: 'Подчёркнутое — ответ. Сформулируйте к нему вопрос с правильным предлогом и интеррогативом.',
      questions: [
        { id: 'q1',  prompt: '—Ayer estuve <u>con Águeda</u>. — ___ estuviste ayer?',           correct: ['¿Con quién'] },
        { id: 'q2',  prompt: '—Esa silla está hecha <u>de cuerda</u>. — ___ está hecha esa silla?', correct: ['¿De qué'] },
        { id: 'q3',  prompt: '—Comemos con pan <u>de molde</u>. — ___ pan coméis?',                correct: ['¿Qué'] },
        { id: 'q4',  prompt: '—Alfonso quiere comprarse <u>un CD</u>. — ___ quiere comprarse Alfonso?', correct: ['¿Qué'] },
        { id: 'q5',  prompt: '—Estas gafas son <u>de Pablo</u>. — ___ son esas gafas?',              correct: ['¿De quién'] },
        { id: 'q6',  prompt: '—Georgina está trabajando <u>con su madre</u>. — ___ está trabajando Georgina?', correct: ['¿Con quién'] },
        { id: 'q7',  prompt: '—Han ganado <u>Eduardo y Marisa</u>. — ___ han ganado?',               correct: ['¿Quiénes', '¿Quién'] },
        { id: 'q8',  prompt: '—Esos chicos están <u>bailando</u>. — ___ están haciendo esos chicos?', correct: ['¿Qué'] },
        { id: 'q9',  prompt: '—Belinda no quiere <u>a Ariel</u>. — ___ no quiere Belinda?',           correct: ['¿A quién'] },
        { id: 'q10', prompt: '—Estas flores son <u>para mi abuela</u>. — ___ son esas flores?',        correct: ['¿Para quién'] },
        { id: 'q11', prompt: '—Me han regalado <u>unos bombones</u>. — ___ te han regalado?',          correct: ['¿Qué'] },
      ],
    },

    {
      id: '30.4',
      title: 'Подлежащее или дополнение?',
      type: 'choice',
      instructions: 'В каждом вопросе interrogativo — это subject (подлежащее) или complemento (дополнение)?',
      questions: [
        { id: 'q1', prompt: '<em>¿Quién ha vendido el ordenador?</em>',     options: ['SUJETO', 'COMPLEMENTO'], correct: 'SUJETO' },
        { id: 'q2', prompt: '<em>¿A quién ha vendido Alejo el ordenador?</em>', options: ['SUJETO', 'COMPLEMENTO'], correct: 'COMPLEMENTO' },
        { id: 'q3', prompt: '<em>¿Qué pasa?</em>',                          options: ['SUJETO', 'COMPLEMENTO'], correct: 'SUJETO' },
        { id: 'q4', prompt: '<em>¿Qué ha comprado María?</em>',              options: ['SUJETO', 'COMPLEMENTO'], correct: 'COMPLEMENTO' },
        { id: 'q5', prompt: '<em>¿Quién quiere a María?</em>',                options: ['SUJETO', 'COMPLEMENTO'], correct: 'SUJETO' },
        { id: 'q6', prompt: '<em>¿A quién quiere María?</em>',                options: ['SUJETO', 'COMPLEMENTO'], correct: 'COMPLEMENTO' },
      ],
    },

    {
      id: '30.5',
      title: 'qué + nombre',
      type: 'fill',
      instructions: 'Сформулируйте вопрос «какой/какая/какие …» с помощью <em>qué + существительное</em>.',
      questions: [
        { id: 'q1', prompt: 'Спросите, какие книги нравятся собеседнику. →',           correct: ['¿Qué libros te gustan?'] },
        { id: 'q2', prompt: 'Спросите, какой сыр купили. →',                            correct: ['¿Qué queso habéis comprado?', '¿Qué queso has comprado?'] },
        { id: 'q3', prompt: 'Спросите, какие фильмы он смотрит. →',                      correct: ['¿Qué películas ve?'] },
        { id: 'q4', prompt: 'Спросите, на каком языке они говорят. →',                    correct: ['¿Qué idioma hablan?', '¿En qué idioma hablan?'] },
        { id: 'q5', prompt: 'Спросите, какую музыку любит Ана. →',                         correct: ['¿Qué música le gusta a Ana?'] },
      ],
    },

    {
      id: '30.6',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду один вопрос с грамматической ошибкой — выберите его.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: [
          '¿Con quién hablas?',
          '¿Quién hablas con?',
          '¿De quién es esta carta?',
          '¿Para quién es esto?',
        ], correct: '¿Quién hablas con?', explanation: 'В испанском предлог идёт перед вопросительным словом, не в конце.' },
        { id: 'q2', prompt: 'Где ошибка?', options: [
          '¿A quién has visto?',
          '¿Quién has visto?',
          '¿Qué has visto?',
          '¿A quién has llamado?',
        ], correct: '¿Quién has visto?', explanation: 'Если человек — прямое дополнение, нужен предлог <em>a</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: [
          '¿Quién son los ganadores?',
          '¿Quiénes son los ganadores?',
          '¿Quién es el ganador?',
          '¿Quiénes vinieron a la fiesta?',
        ], correct: '¿Quién son los ganadores?', explanation: 'Множественное — <em>quiénes</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: [
          '¿Qué hacéis?',
          '¿Qué tienes?',
          '¿Que pasa?',
          '¿Qué quieres?',
        ], correct: '¿Que pasa?', explanation: 'В вопросе — обязательно тильда: <em>qué</em>.' },
      ],
    },

    {
      id: '30.7',
      title: 'A или без a?',
      type: 'choice',
      instructions: 'Нужен ли предлог <em>a</em> перед <em>quién</em>?',
      questions: [
        { id: 'q1', prompt: '— ___ has llamado? — A mi madre.',         options: ['¿Quién', '¿A quién'], correct: '¿A quién' },
        { id: 'q2', prompt: '— ___ ha llamado? — Mi madre.',             options: ['¿Quién', '¿A quién'], correct: '¿Quién' },
        { id: 'q3', prompt: '— ___ visteis ayer? — A Juan.',              options: ['¿Quién', '¿A quién'], correct: '¿A quién' },
        { id: 'q4', prompt: '— ___ ha venido? — Tu hermano.',              options: ['¿Quién', '¿A quién'], correct: '¿Quién' },
        { id: 'q5', prompt: '— ___ esperan? — A los abuelos.',              options: ['¿Quién', '¿A quiénes'], correct: '¿A quiénes' },
      ],
    },

    {
      id: '30.8',
      title: 'Добавьте нужный предлог',
      type: 'fill',
      instructions: 'Допишите предлог + <em>quién / qué</em>. (Обычно: <em>de, con, para, en, a, por…</em>)',
      questions: [
        { id: 'q1', prompt: '___ es ese coche? (Maria → de Maria)',                   correct: ['¿De quién', 'De quién'] },
        { id: 'q2', prompt: '___ piensas tanto? (en mis hijos)',                       correct: ['¿En quién', 'En quién'] },
        { id: 'q3', prompt: '___ has hecho la tarta? (con harina y huevos)',           correct: ['¿Con qué', 'Con qué'] },
        { id: 'q4', prompt: '___ vais? (al cine)',                                      correct: ['¿Adónde', 'Adónde', '¿A dónde', 'A dónde'], explanation: 'Это уже наречие — будет в следующем модуле; здесь приведено для контраста.' },
        { id: 'q5', prompt: '___ son estas flores? (para mi abuela)',                    correct: ['¿Para quién', 'Para quién'] },
        { id: 'q6', prompt: '___ habláis? (de fútbol)',                                  correct: ['¿De qué', 'De qué'] },
      ],
    },

    {
      id: '30.9',
      title: 'Сопоставьте',
      type: 'match',
      instructions: 'Подберите для каждой ситуации подходящий interrogativo.',
      pool: ['quién', 'quiénes', 'qué', 'a quién', 'de quién', 'con quién', 'para quién'],
      questions: [
        { id: 'q1', prompt: 'Кто звонил? (один человек, подлежащее)',           correct: 'quién' },
        { id: 'q2', prompt: 'Кто победители? (несколько)',                       correct: 'quiénes' },
        { id: 'q3', prompt: 'Что ты сказал?',                                     correct: 'qué' },
        { id: 'q4', prompt: 'Кого ты видел? (прямое доп. — человек)',             correct: 'a quién' },
        { id: 'q5', prompt: 'Чьё это письмо?',                                     correct: 'de quién' },
        { id: 'q6', prompt: 'С кем ты идёшь?',                                     correct: 'con quién' },
        { id: 'q7', prompt: 'Для кого это?',                                       correct: 'para quién' },
      ],
    },

    {
      id: '30.10',
      title: 'Какие фразы корректны',
      type: 'multi',
      instructions: 'Отметьте все <strong>правильно построенные</strong> вопросы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Выберите все корректные варианты:',
          options: [
            '¿Quién ha llamado?',
            '¿Quien ha llamado?',
            '¿A quién has visto?',
            '¿Quién has visto? (имея в виду «кого»)',
            '¿Con quién hablas?',
            '¿Quién hablas con?',
            '¿Qué pasa?',
            '¿Que pasa?',
            '¿Quiénes son ellos?',
            '¿Qué libros lees?',
          ],
          correct: ['¿Quién ha llamado?', '¿A quién has visto?', '¿Con quién hablas?', '¿Qué pasa?', '¿Quiénes son ellos?', '¿Qué libros lees?'],
          explanation: 'Тильда обязательна в interrogativo; для прямого доп. о человеке нужен <em>a</em>; предлог идёт перед вопросительным.',
        },
      ],
    },

    {
      id: '30.11',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Нажмите 🔊 и запишите вопрос полностью (с диакритикой и знаками).',
      questions: [
        { id: 'q1', prompt: '', audio: '¿Quién ha llamado por teléfono?',     correct: ['¿Quién ha llamado por teléfono?'] },
        { id: 'q2', prompt: '', audio: '¿Qué quieres tomar?',                  correct: ['¿Qué quieres tomar?'] },
        { id: 'q3', prompt: '', audio: '¿De quién es esta carta?',              correct: ['¿De quién es esta carta?'] },
        { id: 'q4', prompt: '', audio: '¿A quién has visto?',                   correct: ['¿A quién has visto?'] },
        { id: 'q5', prompt: '', audio: '¿Con qué has hecho el caldo?',           correct: ['¿Con qué has hecho el caldo?'] },
        { id: 'q6', prompt: '', audio: '¿Quiénes son los hermanos de Mercedes?', correct: ['¿Quiénes son los hermanos de Mercedes?'] },
        { id: 'q7', prompt: '', audio: '¿Qué libros te gustan?',                 correct: ['¿Qué libros te gustan?'] },
      ],
    },

    {
      id: '30.12',
      title: 'Тильда нужна или нет?',
      type: 'choice',
      instructions: 'Помните: вопросительные <em>quién / qué</em> в вопросах <strong>всегда</strong> с тильдой. Без тильды — это относительные слова <em>que / quien</em> (Unidad 28).',
      questions: [
        { id: 'q1', prompt: '___ ha venido?',                            options: ['¿Quien', '¿Quién'], correct: '¿Quién' },
        { id: 'q2', prompt: 'El chico ___ ha venido es mi amigo.',         options: ['que', 'qué'], correct: 'que', explanation: 'Это relativo — без тильды.' },
        { id: 'q3', prompt: 'Conozco a la persona con ___ trabajas.',        options: ['quien', 'quién'], correct: 'quien', explanation: 'Relativo после предлога — без тильды.' },
        { id: 'q4', prompt: '___ haces?',                                    options: ['Que', 'Qué'], correct: 'Qué' },
        { id: 'q5', prompt: 'No sé ___ quieres.',                            options: ['que', 'qué'], correct: 'qué', explanation: 'Косвенный вопрос — тоже с тильдой.' },
        { id: 'q6', prompt: '— ¿Sabes ___ ha llamado? — No, no lo sé.',       options: ['quien', 'quién'], correct: 'quién', explanation: 'Косвенный вопрос — с тильдой.' },
      ],
    },
  ],
};
