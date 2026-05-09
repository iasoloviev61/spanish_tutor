// ============================================================
// Unidad 12 — Demostrativos (este, ese, aquel)
// Указательные: «вот это» (рядом со мной), «это/то» (рядом с тобой),
// «вон то» (далеко от обоих).
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u12 = {
  id: 'u12',
  number: 12,
  title: { es: 'este, ese, aquel…', topic: 'Demostrativos' },
  topicRu: 'Указательные местоимения и их три уровня дальности',

  theory: [
    {
      type: 'rule',
      es: '<em>Este, ese, aquel…</em> sirven para señalar algo o a alguien. Tienen tres niveles según la distancia: <strong>cerca de mí</strong>, <strong>cerca de ti</strong>, <strong>lejos de los dos</strong>. La forma cambia por género y número.',
      ru: 'Указательные показывают на предмет/человека и кодируют <strong>дистанцию</strong>: <em>este</em> — то, что рядом со мной; <em>ese</em> — то, что рядом с собеседником; <em>aquel</em> — то, что далеко от обоих. Согласуются по роду и числу.',
      examples: [
        { es: 'Quiero este libro.', ru: 'Я хочу эту книгу. (рядом со мной)' },
        { es: 'Quiero ese libro.', ru: 'Я хочу ту книгу. (рядом с собеседником)' },
        { es: 'Quiero aquel libro.', ru: 'Я хочу вон ту книгу. (далеко от обоих)' },
      ],
    },
    {
      type: 'heading',
      text: 'Cerca de mí',
    },
    {
      type: 'table',
      caption: 'este / esta / estos / estas',
      columns: ['', 'Singular', 'Plural'],
      colClasses: ['col-pattern', 'col-pattern', 'col-pattern'],
      rows: [
        ['<strong>Masculino</strong>', '<strong>este</strong> libro', '<strong>estos</strong> libros'],
        ['<strong>Femenino</strong>', '<strong>esta</strong> revista', '<strong>estas</strong> revistas'],
      ],
    },
    {
      type: 'heading',
      text: 'Cerca de ti',
    },
    {
      type: 'table',
      caption: 'ese / esa / esos / esas',
      columns: ['', 'Singular', 'Plural'],
      colClasses: ['col-pattern', 'col-pattern', 'col-pattern'],
      rows: [
        ['<strong>Masculino</strong>', '<strong>ese</strong> libro', '<strong>esos</strong> libros'],
        ['<strong>Femenino</strong>', '<strong>esa</strong> revista', '<strong>esas</strong> revistas'],
      ],
    },
    {
      type: 'heading',
      text: 'Lejos de los dos',
    },
    {
      type: 'table',
      caption: 'aquel / aquella / aquellos / aquellas',
      columns: ['', 'Singular', 'Plural'],
      colClasses: ['col-pattern', 'col-pattern', 'col-pattern'],
      rows: [
        ['<strong>Masculino</strong>', '<strong>aquel</strong> libro', '<strong>aquellos</strong> libros'],
        ['<strong>Femenino</strong>', '<strong>aquella</strong> casa', '<strong>aquellas</strong> chicas'],
      ],
    },
    {
      type: 'atencion',
      es: 'A veces se usa <em>ese, esa, esos, esas</em> para señalar algo que está lejos de ti y de mí — la frontera entre <em>ese</em> y <em>aquel</em> en el habla cotidiana es flexible.',
      ru: 'Граница между <em>ese</em> и <em>aquel</em> в разговорной речи нестрогая: иногда <em>ese</em> подходит и для удалённых предметов.',
    },
    {
      type: 'rule',
      es: '<em>Este, ese, aquel…</em> pueden usarse <strong>solos</strong>, sin nombre — funcionan como pronombres y mantienen el género y número de la cosa.',
      ru: 'Указательные могут стоять <strong>без существительного</strong> — тогда они работают как местоимения, сохраняя род и число подразумеваемого слова.',
      examples: [
        { es: '¿Cuál es tu maleta, esta, esa o aquella?', ru: 'Какой твой чемодан — этот, тот или вон тот?' },
        { es: 'Este es Juan, mi novio.', ru: 'Это Хуан, мой жених.' },
      ],
    },
    {
      type: 'heading',
      text: 'Указание во времени',
    },
    {
      type: 'rule',
      es: '<em>Este</em> → presente o futuro próximo; <em>ese</em> → pasado; <em>aquel</em> → pasado lejano.',
      ru: 'Те же три уровня работают и со временем: <em>este</em> = настоящее или близкое будущее, <em>ese</em> = недавнее прошлое, <em>aquel</em> = далёкое прошлое.',
      examples: [
        { es: 'Este año ha sido muy frío.', ru: 'Этот год был очень холодный.' },
        { es: 'Estuve en Perú en 1999. Ese año hubo elecciones.', ru: 'Я был в Перу в 1999. В тот год прошли выборы.' },
        { es: 'Los españoles llegaron a América en 1492. En aquella época, el imperio inca iba de Chile a Ecuador.', ru: 'Испанцы прибыли в Америку в 1492. В ту эпоху империя инков простиралась от Чили до Эквадора.' },
      ],
    },
    {
      type: 'heading',
      text: 'esto / eso / aquello',
    },
    {
      type: 'rule',
      es: '<em>esto, eso, aquello</em> (forma neutra, sin género) — para señalar algo sin decir el nombre, porque no se sabe qué es o porque no es necesario decirlo.',
      ru: 'Среднеродные <em>esto / eso / aquello</em> используются, когда мы не знаем, что это за предмет, или не считаем нужным называть его. Не имеют рода и числа.',
      examples: [
        { es: '—¿Qué es esto? —No sé. Parece una lámpara.', ru: '— Что это? — Не знаю. Похоже на лампу.' },
        { es: '—¿De quién es eso?', ru: '— Это чьё?' },
      ],
    },
  ],

  exercises: [
    {
      id: '12.1',
      title: 'este / esta / estos / estas (рядом со мной)',
      type: 'fill',
      instructions: 'Поставьте указательное местоимение «вот этот/эта/эти» в нужной форме.',
      questions: [
        { id: 'q1', prompt: '___ llaves son mías.',                  correct: 'Estas' },
        { id: 'q2', prompt: '___ árboles son altos.',                 correct: 'Estos' },
        { id: 'q3', prompt: '___ paraguas es nuevo.',                  correct: 'Este' },
        { id: 'q4', prompt: '___ revista no me gusta.',                 correct: 'Esta' },
        { id: 'q5', prompt: '___ gafas son de mi madre.',                correct: 'Estas' },
        { id: 'q6', prompt: '___ bolso pesa mucho.',                      correct: 'Este' },
        { id: 'q7', prompt: '___ maleta está rota.',                       correct: 'Esta' },
        { id: 'q8', prompt: '___ libros son de la biblioteca.',             correct: 'Estos' },
      ],
    },

    {
      id: '12.2',
      title: 'este / ese / aquel (выберите дальность)',
      type: 'fill',
      instructions: 'Поставьте подходящую форму. Подсказки в скобках.',
      questions: [
        { id: 'q1', prompt: 'Me gusta mucho ___ restaurante. (тот, что рядом с нами обоими — здесь)',     correct: 'este' },
        { id: 'q2', prompt: '¿Conoces a ___ chico? (он стоит рядом с тобой)',                                correct: 'ese' },
        { id: 'q3', prompt: '___ es Julia, una compañera. (она здесь, со мной)',                              correct: 'Esta' },
        { id: 'q4', prompt: 'Mira, ___ es el padre de Charo. (он подходит — указываем издалека)',              correct: 'aquel' },
        { id: 'q5', prompt: '___ vaso está sucio. (тот, что у тебя)',                                          correct: 'Ese' },
        { id: 'q6', prompt: '¿Cuánto cuestan ___ gafas? (те, что на витрине вон там)',                          correct: 'aquellas' },
        { id: 'q7', prompt: '___ es la casa de Ramón. (та, что вдалеке)',                                        correct: 'Aquella' },
        { id: 'q8', prompt: '¿Adónde va ___ autobús? (тот, что отходит — рядом с тобой)',                          correct: 'ese' },
      ],
    },

    {
      id: '12.3',
      title: 'Указание во времени',
      type: 'fill',
      instructions: 'Поставьте <em>este / ese / aquel</em> в нужном роде и числе.',
      questions: [
        { id: 'q1', prompt: '___ verano vamos a ir a Ibiza. (этим летом)',                          correct: 'Este' },
        { id: 'q2', prompt: 'Nací en 1983. ___ mismo año nació mi prima. (в тот же год)',           correct: 'Ese' },
        { id: 'q3', prompt: '—¿Qué haces ___ noche? —Nada. ___ semana tengo mucho trabajo.',         correct: ['esta, Esta', 'esta Esta'], placeholder: 'esta, Esta', explanation: 'Ближайшие время — <em>esta</em>.' },
        { id: 'q4', prompt: '2001 fue un año extraordinario. ___ verano conocí a Maite. (тем летом)', correct: 'Ese' },
        { id: 'q5', prompt: 'Mis padres vivieron en Perú entre 1950 y 1965. ___ fueron los mejores años de su vida.', correct: 'Aquellos' },
        { id: 'q6', prompt: '___ mes ha sido fabuloso. He encontrado piso y trabajo. (этот месяц)',     correct: 'Este' },
        { id: 'q7', prompt: 'Luis se casó en 1970. En ___ época yo vivía en México.',                     correct: 'aquella' },
        { id: 'q8', prompt: '___ tarde tengo un examen. (сегодня вечером)',                                correct: 'Esta' },
      ],
    },

    {
      id: '12.4',
      title: 'esto / eso / aquello (без существительного)',
      type: 'fill',
      instructions: 'Поставьте среднеродную форму, когда речь о неназванном предмете или явлении.',
      questions: [
        { id: 'q1', prompt: '—¿De quién es ___? (показываю на сумку)',                       correct: 'esto' },
        { id: 'q2', prompt: '—¿Qué es ___? —No sé, parece una lámpara.',                       correct: 'esto' },
        { id: 'q3', prompt: '—¿Qué? ___ no me gusta nada.',                                     correct: 'Eso' },
        { id: 'q4', prompt: '—¿De quién es ___? (то, что у тебя в руках)',                       correct: 'eso' },
        { id: 'q5', prompt: '___ que pasó ayer fue terrible.',                                    correct: 'Aquello', explanation: 'Далёкое в прошлом, без имени.' },
        { id: 'q6', prompt: 'No quiero hablar de ___, ya pasó hace años.',                          correct: 'aquello' },
      ],
    },

    {
      id: '12.5',
      title: 'Сопоставьте дальность и форму',
      type: 'match',
      instructions: 'Подберите подходящую форму указательного для каждого случая.',
      pool: ['este / esta / estos / estas', 'ese / esa / esos / esas', 'aquel / aquella / aquellos / aquellas', 'esto / eso / aquello'],
      questions: [
        { id: 'q1', prompt: 'предмет рядом со мной (или у меня в руках)',                  correct: 'este / esta / estos / estas' },
        { id: 'q2', prompt: 'предмет рядом с собеседником',                                correct: 'ese / esa / esos / esas' },
        { id: 'q3', prompt: 'предмет далеко от обоих',                                      correct: 'aquel / aquella / aquellos / aquellas' },
        { id: 'q4', prompt: 'неназванная вещь / неизвестно что',                             correct: 'esto / eso / aquello' },
      ],
    },

    {
      id: '12.6',
      title: 'Согласование по роду и числу',
      type: 'choice',
      instructions: 'Выберите правильную форму указательного.',
      questions: [
        { id: 'q1', prompt: '___ amigas vienen mañana.',           options: ['Estas', 'Estos', 'Este'], correct: 'Estas' },
        { id: 'q2', prompt: 'Quiero comprar ___ zapatos.',          options: ['estos', 'estas', 'este'], correct: 'estos' },
        { id: 'q3', prompt: '¿Te gusta ___ cuadro?',                  options: ['ese', 'esa', 'eso'],   correct: 'ese' },
        { id: 'q4', prompt: 'Conozco a ___ chicas.',                   options: ['aquellos', 'aquellas', 'aquel'], correct: 'aquellas' },
        { id: 'q5', prompt: '___ es mi maleta.',                         options: ['Esta', 'Esto', 'Este'], correct: 'Esta', explanation: '<em>maleta</em> — femenino.' },
        { id: 'q6', prompt: '¿De quién es ___? (показываю на пакет неизвестного содержания)', options: ['este', 'esto', 'esta'], correct: 'esto' },
      ],
    },

    {
      id: '12.7',
      title: 'Восполните мини-диалог',
      type: 'fill',
      instructions: 'Поставьте указательное в нужной форме.',
      questions: [
        { id: 'q1', prompt: '— Mira, me gusta mucho ___ vestido. (то, что у манекена напротив)',   correct: 'ese' },
        { id: 'q2', prompt: '— ¿Y ___ de allí? (то, что в дальнем углу)',                            correct: 'aquel' },
        { id: 'q3', prompt: '— No, prefiero ___ que tengo aquí.',                                     correct: 'este' },
        { id: 'q4', prompt: '— ¿Y ___ chica que pasa por la calle? Es muy elegante. (вон та вдалеке)',  correct: 'aquella' },
        { id: 'q5', prompt: '— ¡Mira ___! ¡Qué bonito!  (показываю кольцо у меня)',                       correct: 'esto' },
      ],
    },

    {
      id: '12.8',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой согласования или выбора.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Estas chicas son mis amigas.', 'Estos chicas son mis amigas.', 'Estas amigas son simpáticas.', 'Estos chicos son altos.'], correct: 'Estos chicas son mis amigas.', explanation: 'Согласование по роду.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['¿Qué es esto?', '¿Qué es este?', '¿Qué es eso?', '¿Qué es aquello?'], correct: '¿Qué es este?', explanation: 'Без имени — нужна среднеродная форма.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Aquellos años fueron felices.', 'Aquellas años fueron felices.', 'Aquella época fue dura.', 'Aquel verano hizo calor.'], correct: 'Aquellas años fueron felices.', explanation: '<em>años</em> — masculino.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Esa chica es mi prima.', 'Ese chica es mi prima.', 'Ese chico es mi primo.', 'Esa amiga es de Lima.'], correct: 'Ese chica es mi prima.', explanation: '<em>chica</em> — femenino → <em>esa</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Este verano voy a la playa.', 'En aquella época vivía en Lima.', 'Ese año estuvo bien.', 'Esto verano voy a la playa.'], correct: 'Esto verano voy a la playa.', explanation: '<em>verano</em> — masculino, форма с именем — <em>este</em>, не <em>esto</em>.' },
      ],
    },

    {
      id: '12.9',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите услышанное полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'quiero este libro',                                correct: ['quiero este libro', 'quiero este libro.'] },
        { id: 'q2', prompt: '', audio: 'esa chica es amiga de Ana',                          correct: ['esa chica es amiga de Ana', 'esa chica es amiga de Ana.'] },
        { id: 'q3', prompt: '', audio: 'aquellas chicas son colombianas',                    correct: ['aquellas chicas son colombianas', 'aquellas chicas son colombianas.'] },
        { id: 'q4', prompt: '', audio: 'este año hace mucho calor',                            correct: ['este año hace mucho calor', 'este año hace mucho calor.'] },
        { id: 'q5', prompt: '', audio: 'qué es esto',                                            correct: ['qué es esto', '¿qué es esto?', '¿Qué es esto?'] },
      ],
    },

    {
      id: '12.10',
      title: 'Перепишите фразу',
      type: 'fill',
      instructions: 'Перепишите так, как сказал бы носитель.',
      questions: [
        { id: 'q1', prompt: '<em>Esto chico es mi primo.</em> →',          correct: ['Este chico es mi primo.', 'Este chico es mi primo'] },
        { id: 'q2', prompt: '<em>¿Qué es este? (показываю на коробку)</em> →', correct: ['¿Qué es esto?', '¿Qué es esto?', 'Qué es esto'] },
        { id: 'q3', prompt: '<em>Aquellas año fue duro.</em> →',             correct: ['Aquel año fue duro.', 'Aquel año fue duro'] },
        { id: 'q4', prompt: '<em>Estos chicas son simpáticas.</em> →',       correct: ['Estas chicas son simpáticas.', 'Estas chicas son simpáticas'] },
        { id: 'q5', prompt: '<em>En esa época yo no había nacido. (1850)</em> →', correct: ['En aquella época yo no había nacido.', 'En aquella época yo no había nacido'], explanation: 'Далёкое прошлое — <em>aquella</em>.' },
      ],
    },
  ],
};
