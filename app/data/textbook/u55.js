// ============================================================
// Unidad 55 — Verbos con me, te, le… (gustar y similares)
// Конструкция «(a + кому-то) + me/te/le… + gusta/gustan + что»;
// другие глаголы с тем же управлением: encantar, doler,
// apetecer, importar, interesar, quedar, sentar.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u55 = {
  id: 'u55',
  number: 55,
  title: { es: 'Me gusta la ópera', topic: 'Verbos con me, te, le…' },
  topicRu: 'Глаголы типа gustar: me gusta / me gustan',

  theory: [
    {
      type: 'rule',
      es: 'El verbo <em>gustar</em> no funciona como «to like»: lo que gusta es <strong>el sujeto</strong>, y la persona a quien le gusta es el <strong>complemento indirecto</strong>. Por eso siempre va con <em>me, te, le, nos, os, les</em>.',
      ru: '<em>Gustar</em> не похож на русское «нравиться, любить». Подлежащее — <strong>то, что нравится</strong>, а человек выражается через <em>me, te, le, nos, os, les</em>. Буквально: «мне нравится опера», «нам нравятся апельсины». Глагол согласуется с тем, <em>что</em> нравится.',
      examples: [
        { es: 'Me gusta la ópera.', ru: 'Мне нравится опера.' },
        { es: 'Nos gustan la paella y el marisco.', ru: 'Нам нравятся паэлья и морепродукты.' },
        { es: 'A Ricardo no le gusta nada estudiar.', ru: 'Рикардо совсем не нравится учиться.' },
      ],
    },
    {
      type: 'heading',
      text: 'Конструкция',
    },
    {
      type: 'table',
      caption: 'gustar / encantar в presente',
      columns: ['(кому)', 'местоимение', 'глагол', 'что'],
      colClasses: ['col-pattern', 'col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['(a mí)',          'me',  'gusta / encanta',  '+ ед. число / инфинитив'],
        ['(a ti)',          'te',  'gusta / encanta',  '<em>el café, viajar</em>'],
        ['(a usted, él, ella)', 'le', 'gusta / encanta', '<em>la música, leer</em>'],
        ['(a nosotros, −as)', 'nos', 'gustan / encantan', '+ мн. число'],
        ['(a vosotros, −as)', 'os', 'gustan / encantan',  '<em>los pasteles</em>'],
        ['(a ustedes, ellos, ellas)', 'les', 'gustan / encantan', '<em>las naranjas</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Con <strong>infinitivo(s)</strong>, el verbo siempre va en <strong>singular</strong>, aunque haya varios infinitivos: <em>A Luis le gusta nadar y jugar al tenis</em>. Con <strong>nombres propios o sustantivos</strong>, hace falta la preposición <em>a</em>: <em>A mis padres les gusta viajar</em>.',
      ru: 'Два важных нюанса: <strong>(а)</strong> с инфинитивами — всегда <em>gusta</em> (даже если их несколько); <strong>(б)</strong> перед именем человека или подлежащим-«кому» обязателен предлог <em>a</em>: <em>A Elsa le gusta…</em>',
    },
    {
      type: 'heading',
      text: 'Другие глаголы с тем же управлением',
    },
    {
      type: 'table',
      caption: 'Тот же шаблон',
      columns: ['Глагол', 'Значение', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<em>encantar</em>',  'очень нравиться',          '<em>A mi hijo le encantan los pasteles.</em>'],
        ['<em>apetecer</em>',  'хотеться (в данный момент)', '<em>¿Te apetece dar un paseo?</em>'],
        ['<em>doler</em>',     'болеть',                    '<em>A Luisa le duelen las muelas.</em>'],
        ['<em>importar</em>',  'волновать, иметь значение',  '<em>No me importa madrugar.</em>'],
        ['<em>interesar</em>', 'интересовать',                 '<em>¿Te interesan las matemáticas?</em>'],
        ['<em>quedar</em>',    'оставаться',                    '<em>Solo nos quedan veinte euros.</em>'],
        ['<em>sentar</em>',    'идти (об одежде) / приходиться по душе', '<em>Te sienta muy bien ese vestido.</em>'],
      ],
    },
    {
      type: 'rule',
      es: '<em>a mí, a ti, a él, a ella, a usted…</em> sirven para <strong>énfasis</strong>, <strong>contraste</strong> o para <strong>aclarar</strong> de quién hablamos.',
      ru: 'Дублирование <em>a mí / a ti / a él / a ella / a usted…</em> используется, чтобы: <strong>(а)</strong> подчеркнуть («именно мне!»); <strong>(б)</strong> противопоставить («мне нравится — а тебе нет»); <strong>(в)</strong> уточнить, кому именно (особенно с <em>le / les</em>, которые сами по себе двусмысленны).',
      examples: [
        { es: 'A nosotros nos encanta la ópera.', ru: 'Нам — нам! — очень нравится опера.' },
        { es: '—Me encanta el fútbol. —A mí no me gusta nada.', ru: '— Я обожаю футбол. — А мне он совсем не нравится.' },
        { es: '¿Le gusta a usted el pescado?', ru: 'Вам нравится рыба? (уточнили — Вам)' },
      ],
    },
  ],

  exercises: [
    {
      id: '55.1',
      title: 'gusta или gustan?',
      type: 'choice',
      instructions: 'Глагол согласуется с тем, что нравится: ед. число → <em>gusta</em>, мн. число → <em>gustan</em>. С инфинитивами — всегда <em>gusta</em>.',
      questions: [
        { id: 'q1', prompt: 'Me ___ el café.',                            options: ['gusta', 'gustan'], correct: 'gusta' },
        { id: 'q2', prompt: 'Me ___ los gatos.',                            options: ['gusta', 'gustan'], correct: 'gustan' },
        { id: 'q3', prompt: 'A Luis le ___ nadar y jugar al tenis.',          options: ['gusta', 'gustan'], correct: 'gusta', explanation: 'С инфинитивами — всегда ед. ч.' },
        { id: 'q4', prompt: 'Nos ___ las películas francesas.',                options: ['gusta', 'gustan'], correct: 'gustan' },
        { id: 'q5', prompt: '¿Os ___ la paella?',                                options: ['gusta', 'gustan'], correct: 'gusta' },
        { id: 'q6', prompt: 'A mis padres les ___ viajar.',                     options: ['gusta', 'gustan'], correct: 'gusta' },
        { id: 'q7', prompt: 'A los niños les ___ los pasteles.',                 options: ['gusta', 'gustan'], correct: 'gustan' },
        { id: 'q8', prompt: 'A Pedro le ___ leer y escribir.',                    options: ['gusta', 'gustan'], correct: 'gusta' },
      ],
    },

    {
      id: '55.2',
      title: 'me, te, le, nos, os, les?',
      type: 'choice',
      instructions: 'Выберите правильное местоимение.',
      questions: [
        { id: 'q1', prompt: 'A mi hermana ___ encanta el chocolate.',     options: ['le', 'les', 'me'], correct: 'le' },
        { id: 'q2', prompt: 'A nosotros ___ gusta el cine.',                  options: ['le', 'nos', 'les'], correct: 'nos' },
        { id: 'q3', prompt: 'A mis primos ___ gustan las motos.',                options: ['le', 'les', 'os'], correct: 'les' },
        { id: 'q4', prompt: 'A ti no ___ gusta el café, ¿verdad?',                  options: ['te', 'le', 'me'], correct: 'te' },
        { id: 'q5', prompt: 'A vosotros ___ encanta viajar.',                          options: ['te', 'os', 'les'], correct: 'os' },
        { id: 'q6', prompt: '(yo) ___ encanta la música clásica.',                       options: ['Me', 'Te', 'Le'], correct: 'Me' },
        { id: 'q7', prompt: 'A ustedes ___ gusta el flamenco, ¿no?',                       options: ['os', 'les', 'le'], correct: 'les', explanation: '<em>ustedes</em> требует <em>les</em>, а не <em>os</em>.' },
      ],
    },

    {
      id: '55.3',
      title: 'a Pedro, a mí, a Elena…',
      type: 'fill',
      instructions: 'Допишите местоимение и (где нужно) предлог. Образец: <em>A Pedro ___ gusta el fútbol</em> → <em>A Pedro <strong>le</strong> gusta el fútbol</em>.',
      questions: [
        { id: 'q1', prompt: 'A Marisa ___ gusta la ópera.',          correct: 'le' },
        { id: 'q2', prompt: 'A mis padres ___ gusta cocinar.',        correct: 'les' },
        { id: 'q3', prompt: 'A mí ___ encantan las novelas policiacas.', correct: 'me' },
        { id: 'q4', prompt: 'A los niños ___ encantan los videojuegos.', correct: 'les' },
        { id: 'q5', prompt: '___ mí no me gusta nada el café.',           correct: 'A', placeholder: 'A' },
        { id: 'q6', prompt: '___ ti te gusta bailar, ¿no?',                correct: 'A' },
        { id: 'q7', prompt: '___ Carmen le encanta el chocolate.',           correct: 'A' },
        { id: 'q8', prompt: 'A Luis y a Marta ___ gusta el deporte.',         correct: 'les' },
      ],
    },

    {
      id: '55.4',
      title: 'Полные фразы с gustar',
      type: 'fill',
      instructions: 'Соберите фразу. В скобках — кто и что; используйте <em>gustar</em> в нужной форме. Запишите целиком.',
      questions: [
        { id: 'q1', prompt: '(yo / la música clásica)',           correct: ['Me gusta la música clásica.', 'Me gusta la música clásica'], placeholder: 'Me gusta ...' },
        { id: 'q2', prompt: '(tú / los perros)',                    correct: ['Te gustan los perros.', 'Te gustan los perros'] },
        { id: 'q3', prompt: '(Marta / leer y escribir)',              correct: ['A Marta le gusta leer y escribir.', 'A Marta le gusta leer y escribir'] },
        { id: 'q4', prompt: '(nosotros / las naranjas)',                correct: ['Nos gustan las naranjas.', 'Nos gustan las naranjas'] },
        { id: 'q5', prompt: '(mis hermanos / el fútbol)',                  correct: ['A mis hermanos les gusta el fútbol.', 'A mis hermanos les gusta el fútbol'] },
        { id: 'q6', prompt: '(vosotros / la paella)',                        correct: ['Os gusta la paella.', 'Os gusta la paella'] },
      ],
    },

    {
      id: '55.5',
      title: 'gustar или encantar?',
      type: 'choice',
      instructions: '<em>gustar</em> = «нравится»; <em>encantar</em> = «очень нравится». С <em>encantar</em> не используется <em>mucho</em>: оно уже «обожаю».',
      questions: [
        { id: 'q1', prompt: 'Me ___ mucho los gatos.',                         options: ['gustan', 'encantan'], correct: 'gustan', explanation: 'С <em>mucho</em> — gustar.' },
        { id: 'q2', prompt: 'A mi hijo le ___ los pasteles, los come a diario.', options: ['gustan', 'encantan'], correct: 'encantan' },
        { id: 'q3', prompt: '¿Te ___ el café?',                                    options: ['gusta', 'encanta'], correct: 'gusta' },
        { id: 'q4', prompt: 'A Sara le ___ bailar (es lo que más le gusta del mundo).', options: ['gusta', 'encanta'], correct: 'encanta' },
        { id: 'q5', prompt: 'A nosotros nos ___ la ópera. ¡Es nuestra pasión!',      options: ['gusta', 'encanta'], correct: 'encanta' },
      ],
    },

    {
      id: '55.6',
      title: 'Похожие глаголы — apetecer, doler, importar, interesar, quedar, sentar',
      type: 'fill',
      instructions: 'Поставьте подходящий глагол в нужную форму настоящего времени. Учитывайте число.',
      questions: [
        { id: 'q1', prompt: 'A mi abuela le ___ mucho las piernas. (doler)',                   correct: 'duelen' },
        { id: 'q2', prompt: '¿Te ___ salir esta noche, Luis? —No, estoy cansado. (apetecer)',     correct: 'apetece' },
        { id: 'q3', prompt: 'A Elena y a ti ___ muy bien el color verde. (sentar)',                correct: ['os sienta'], placeholder: 'os sienta' },
        { id: 'q4', prompt: '¿(a vosotros) ___ mucho dinero? (quedar)',                              correct: 'os queda' },
        { id: 'q5', prompt: 'Me ___ las muelas. Tengo que ir al dentista. (doler)',                  correct: 'duelen' },
        { id: 'q6', prompt: 'A José y a mí no nos ___ madrugar. (importar)',                          correct: 'importa' },
        { id: 'q7', prompt: '¿Les ___ a ustedes comer algo? —No, gracias. (apetecer)',                  correct: 'apetece' },
        { id: 'q8', prompt: 'A Jordi y a Gonzalo les ___ bien la corbata. (sentar)',                      correct: 'sienta' },
        { id: 'q9', prompt: 'A mí no me ___ nada la informática. (interesar)',                              correct: 'interesa' },
        { id: 'q10', prompt: 'Lo siento, esos pantalones os ___ grandes. (quedar)',                          correct: 'quedan', explanation: '<em>quedar grande / pequeño</em> = «велики / малы».' },
      ],
    },

    {
      id: '55.7',
      title: 'Контраст и эмфаза',
      type: 'fill',
      instructions: 'Допишите фразу с <em>a mí, a ti, a él, a ella, a nosotros, a vosotros, a ellos, a ellas</em>. Помните о роли контраста.',
      questions: [
        { id: 'q1', prompt: '—Me encanta el fútbol. —___ no me gusta nada.', correct: ['A mí'], placeholder: 'A mí' },
        { id: 'q2', prompt: '—Nos gusta la playa. —___ nos gusta la montaña.', correct: ['A nosotros'] },
        { id: 'q3', prompt: 'A Pedro le gusta Luisa, pero ___ no le gusta Pedro.', correct: ['a ella'] },
        { id: 'q4', prompt: 'A Juan le gusta el café, pero ___ le gusta el té.', correct: ['a María', 'a su mujer', 'a ella'], explanation: 'Любая «контрастная» персона годится — главное предлог <em>a</em>.' },
      ],
    },

    {
      id: '55.8',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза грамматически некорректна.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Me gusta el café.', 'Me gustan el café.', 'Me gusta nadar.', 'Me gustan los niños.'], correct: 'Me gustan el café.', explanation: '<em>el café</em> — ед. ч., нужно <em>gusta</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['A Marta le gusta bailar.', 'Marta le gusta bailar.', 'A Marta le gustan las flores.', 'A Marta le encanta viajar.'], correct: 'Marta le gusta bailar.', explanation: 'Перед именем нужен предлог <em>a</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['A Luis le gustan nadar y jugar.', 'A Luis le gusta nadar y jugar.', 'A Luis le gustan los deportes.', 'A Luis le gusta el tenis.'], correct: 'A Luis le gustan nadar y jugar.', explanation: 'С инфинитивами — всегда ед. ч.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['A ustedes les gusta el flamenco.', 'A ustedes os gusta el flamenco.', 'A ustedes les gustan los conciertos.', 'A ustedes les encanta viajar.'], correct: 'A ustedes os gusta el flamenco.', explanation: '<em>ustedes</em> → <em>les</em>, не <em>os</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Me duele la cabeza.', 'Me duelen los pies.', 'Me duele las muelas.', 'Me duele el estómago.'], correct: 'Me duele las muelas.', explanation: '<em>las muelas</em> — мн.ч., нужно <em>duelen</em>.' },
      ],
    },

    {
      id: '55.9',
      title: 'Какие фразы корректны',
      type: 'multi',
      instructions: 'Отметьте все фразы, в которых конструкция <strong>правильная</strong>.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы построены верно?',
          options: [
            'Me gusta los gatos.',
            'Me gustan los gatos.',
            'A mí me gusta los gatos.',
            'A mí me gustan los gatos.',
            'A Luis le gusta cantar y bailar.',
            'A Luis le gustan cantar y bailar.',
            'A los niños les encanta el chocolate.',
            'A los niños les encantan el chocolate.',
          ],
          correct: [
            'Me gustan los gatos.',
            'A mí me gustan los gatos.',
            'A Luis le gusta cantar y bailar.',
            'A los niños les encanta el chocolate.',
          ],
        },
      ],
    },

    {
      id: '55.10',
      title: 'Сопоставьте — кому что нравится',
      type: 'match',
      instructions: 'Подберите концовку для каждой фразы.',
      pool: [
        'me gusta nadar.',
        'le gustan los animales.',
        'le encanta la ópera.',
        'nos gusta el fútbol.',
        'os gusta viajar.',
        'les gustan las películas antiguas.',
      ],
      questions: [
        { id: 'q1', prompt: 'A mí ___',                correct: 'me gusta nadar.' },
        { id: 'q2', prompt: 'A mi hermana ___',          correct: 'le gustan los animales.' },
        { id: 'q3', prompt: 'A mi padre ___',              correct: 'le encanta la ópera.' },
        { id: 'q4', prompt: 'A nosotros ___',                correct: 'nos gusta el fútbol.' },
        { id: 'q5', prompt: 'A vosotros ___',                  correct: 'os gusta viajar.' },
        { id: 'q6', prompt: 'A mis abuelos ___',                  correct: 'les gustan las películas antiguas.' },
      ],
    },

    {
      id: '55.11',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Запишите услышанное полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Me gusta la ópera.',                    correct: ['Me gusta la ópera.', 'Me gusta la ópera'] },
        { id: 'q2', prompt: '', audio: 'A mi hijo le encantan los pasteles.',     correct: ['A mi hijo le encantan los pasteles.', 'A mi hijo le encantan los pasteles'] },
        { id: 'q3', prompt: '', audio: '¿Te apetece dar un paseo?',                 correct: ['¿Te apetece dar un paseo?'] },
        { id: 'q4', prompt: '', audio: 'A Luisa le duelen las muelas.',              correct: ['A Luisa le duelen las muelas.', 'A Luisa le duelen las muelas'] },
        { id: 'q5', prompt: '', audio: 'Me sienta muy bien ese vestido.',             correct: ['Me sienta muy bien ese vestido.', 'Me sienta muy bien ese vestido'] },
        { id: 'q6', prompt: '', audio: 'No me importa madrugar.',                      correct: ['No me importa madrugar.', 'No me importa madrugar'] },
      ],
    },

    {
      id: '55.12',
      title: 'Большой микс',
      type: 'fill',
      instructions: 'Поставьте глагол в нужную форму, добавьте подходящее местоимение и (где нужно) предлог <em>a</em>.',
      questions: [
        { id: 'q1', prompt: '___ Sara le ___ el flamenco. (gustar)',             correct: ['A / gusta', 'A; gusta', 'A, gusta'], explanation: 'Перед именем — <em>a</em>; единственное число → <em>gusta</em>. Пишите как <em>A / gusta</em>.', placeholder: 'A / gusta' },
        { id: 'q2', prompt: '___ mí ___ encantan los libros antiguos. (encantar)', correct: ['A / me', 'A; me', 'A, me'], placeholder: 'A / me' },
        { id: 'q3', prompt: '¿___ vosotros ___ apetece un café? (apetecer)',        correct: ['A / os', 'A; os', 'A, os'] },
        { id: 'q4', prompt: 'A los niños ___ ___ los videojuegos. (encantar)',       correct: ['les / encantan', 'les; encantan'] },
        { id: 'q5', prompt: '___ ti ___ duelen los pies. (doler)',                    correct: ['A / te', 'A; te'] },
        { id: 'q6', prompt: 'A nosotros ___ ___ el deporte. (interesar)',              correct: ['nos / interesa', 'nos; interesa'] },
      ],
    },
  ],
};
