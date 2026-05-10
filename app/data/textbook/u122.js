// ============================================================
// Unidad 122 — Oraciones impersonales
// «Aquí se trabaja mucho»: безличные конструкции без субъекта.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u122 = {
  id: 'u122',
  number: 122,
  title: { es: 'Aquí se trabaja mucho', topic: 'Oraciones impersonales' },
  topicRu: 'Безличные предложения: se, ser + adj + inf, haber/hacer/ser, llueve…',

  theory: [
    {
      type: 'rule',
      es: 'Las <strong>oraciones impersonales</strong> no se refieren a una persona concreta: hablan de algo que «se hace», «es importante», «llueve», sin nombrar quién. En ruso a menudo equivalen a безличным конструкциям: «здесь много работают», «известно, что…», «трудно объяснить».',
      ru: 'Безличное предложение в испанском — это фраза без конкретного действующего лица. Чаще всего стороится с <em>se</em>, с <em>ser + прилагательное + инфинитив</em>, или с глаголами, которые сами по себе безличны: <em>haber, hacer, ser</em> (о времени и погоде), <em>llover, nevar, amanecer</em>.',
      examples: [
        { es: '<strong>Aquí se trabaja</strong> mucho.', ru: 'Здесь много работают.' },
        { es: '<strong>Es importante</strong> saber idiomas.', ru: 'Важно знать языки.' },
        { es: 'Hoy <strong>hay</strong> niebla. / <strong>Hace</strong> mucho frío.', ru: 'Сегодня туман. / Очень холодно.' },
        { es: 'En verano <strong>amanece</strong> pronto.', ru: 'Летом рано светает.' },
      ],
    },

    {
      type: 'heading',
      text: '1. se + 3-е лицо ед. ч.',
    },
    {
      type: 'rule',
      es: 'La forma más común: <strong>se + verbo en 3.ª persona del singular</strong>. Equivale a «generalmente / la gente» en español, y al ruso «у нас здесь… / здесь живут…».',
      ru: 'Самая частая безличная конструкция: <em>se</em> + глагол в 3-м л. ед. ч. Действие совершают «вообще все» / «люди». В русском часто соответствует неопределённо-личному обороту («здесь хорошо живут», «здесь много работали»).',
      examples: [
        { es: 'Aquí <strong>se vive</strong> muy bien.', ru: 'Здесь очень хорошо живётся.' },
        { es: 'Antes <strong>se trabajaba</strong> mucho en el campo.', ru: 'Раньше много работали в деревне.' },
        { es: 'En España <strong>se cena</strong> tarde.', ru: 'В Испании ужинают поздно.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Con verbos pronominales (<em>acostarse, divertirse, levantarse, ducharse</em>) la construcción <em>se + verbo</em> daría doble <strong>se</strong>. Por eso se usa <strong>la gente + verbo pronominal</strong> o <strong>uno + verbo pronominal</strong>: <em>Aquí <strong>se acuesta uno</strong> tarde</em> / <em>Aquí <strong>la gente se acuesta</strong> tarde</em>.',
      ru: 'С возвратными глаголами (которые сами по себе уже с <em>se</em>) безличное <em>se</em> не дублируется. Вместо этого говорят <em>la gente se acuesta…</em> или <em>uno se acuesta…</em>',
    },

    {
      type: 'heading',
      text: '2. se + verbo + infinitivo',
    },
    {
      type: 'rule',
      es: 'Con <strong>soler, poder, deber, necesitar</strong> y otros verbos modales se usa <strong>se + verbo en 3.ª persona del singular + infinitivo</strong>.',
      ru: 'С модальными глаголами строим то же безличное: <em>se suele cenar / se puede ver / no se debe hablar / se necesita estudiar</em>.',
      examples: [
        { es: 'En España <strong>se suele cenar</strong> muy tarde.', ru: 'В Испании обычно ужинают очень поздно.' },
        { es: 'Desde mi casa <strong>se puede ver</strong> el mar.', ru: 'Из моего дома видно море.' },
        { es: 'No <strong>se debe hablar</strong> con la boca llena.', ru: 'Нельзя говорить с набитым ртом.' },
      ],
    },

    {
      type: 'heading',
      text: '3. se dice que… / se espera que…',
    },
    {
      type: 'rule',
      es: 'Para introducir información sin decir <em>quién</em> lo dice se usa <strong>se + verbo de opinión + que + verbo</strong>. El modo depende del verbo introductor: <strong>se ve / se dice / se piensa / se supone / se sospecha</strong> + indicativo; <strong>se espera</strong> + subjuntivo.',
      ru: 'Чтобы передать чужое мнение «без указания источника» — <em>se dice que, se cree que, se sospecha que</em> + indicativo (факт уже подаётся как уверенный). Но <em>se espera que</em> ждёт subjuntivo (ожидание, желание).',
      examples: [
        { es: '<strong>Se dice</strong> que Arlindo <strong>está</strong> enfermo.', ru: 'Говорят, Арлиндо болен. <small>(indicativo)</small>' },
        { es: '<strong>Se sospecha</strong> que el ladrón <strong>estaba</strong> escondido allí.', ru: 'Подозревают, что вор прятался там. <small>(indicativo)</small>' },
        { es: '<strong>Se espera</strong> que <strong>ganen</strong> sin problemas.', ru: 'Ожидают, что они выиграют без проблем. <small>(subjuntivo)</small>' },
      ],
    },

    {
      type: 'heading',
      text: '4. Es + adjetivo + infinitivo',
    },
    {
      type: 'rule',
      es: 'Para valorar situaciones generales se usa <strong>3.ª persona singular de ser + adjetivo + infinitivo</strong>: <em>Es importante saber idiomas / Era inútil explicárselo</em>.',
      ru: 'Чтобы дать общую оценку — «важно делать что-то», «полезно», «трудно», «невозможно» — берём <em>es + прилагательное + инфинитив</em>. В прошлом — <em>era / fue</em>.',
      examples: [
        { es: '<strong>Es importante</strong> saber idiomas.', ru: 'Важно знать языки.' },
        { es: '<strong>Es fácil</strong> equivocarse.', ru: 'Легко ошибиться.' },
        { es: '<strong>Era inútil</strong> explicárselo. No lo entendían.', ru: 'Было бесполезно объяснять ему. Он не понимал.' },
      ],
    },
    {
      type: 'rule',
      es: 'Прилагательные, часто употребляемые в этой конструкции: <em>bueno, malo, mejor, peor, fácil, difícil, útil, inútil, justo, injusto, importante, imposible, necesario</em>.',
      ru: 'Типичные прилагательные: <em>bueno, malo, mejor, peor, fácil, difícil, útil, inútil, justo, injusto, importante, imposible, necesario</em>.',
    },

    {
      type: 'heading',
      text: '5. haber / hacer / ser в безличной форме',
    },
    {
      type: 'table',
      caption: 'Глаголы, у которых всегда 3-е лицо ед. ч.',
      columns: ['Глагол', 'Что выражает', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<strong>haber</strong> (hay, había, hubo, ha habido)', 'наличие',
          '<em>Hoy <strong>hay</strong> niebla. Ayer <strong>había</strong> mucha gente.</em>'],
        ['<strong>haber que</strong> + inf.', 'необходимость',
          '<em>Hay que preparar la comida.</em>'],
        ['<strong>hacer</strong> + frío/calor/viento/sol', 'погода',
          '<em>Ayer <strong>hizo</strong> mucho frío.</em>'],
        ['<strong>hacer</strong> + временное выражение', 'прошло (столько) времени',
          '<em><strong>Hace</strong> dos semanas que no veo a Pili.</em>'],
        ['<strong>ser</strong> + временная отсылка', 'время суток/опоздание',
          '<em><strong>Es</strong> tarde. Vámonos a casa.</em>'],
      ],
    },

    {
      type: 'heading',
      text: '6. Фенерлы погоды',
    },
    {
      type: 'rule',
      es: 'Los verbos que indican <strong>fenómenos naturales</strong> son siempre impersonales (3.ª persona singular): <em>llover, nevar, amanecer, anochecer, granizar, tronar</em>.',
      ru: 'Глаголы природных явлений безличны по определению: <em>llover</em> (идти — о дожде), <em>nevar</em> (идти — о снеге), <em>amanecer</em> (светать), <em>anochecer</em> (смеркаться), <em>granizar</em> (идти граду), <em>tronar</em> (греметь).',
      examples: [
        { es: 'En verano <strong>amanece</strong> pronto.', ru: 'Летом рано светает.' },
        { es: '<strong>Llovía</strong> mucho cuando salimos.', ru: 'Сильно шёл дождь, когда мы вышли.' },
        { es: 'Esta mañana <strong>ha nevado</strong> en la sierra.', ru: 'Сегодня утром в горах выпал снег.' },
      ],
    },

    {
      type: 'atencion',
      es: 'En ruso el sujeto a menudo aparece (<em>«льёт дождь»</em>), pero en español los verbos meteorológicos van <strong>sin sujeto</strong>: <em>llueve, nevará, amanecía</em>. Tampoco hay «есть», «бывает» — basta el verbo en sí.',
      ru: 'Главная ошибка русскоязычных: пытаются добавить подлежащее («дождь идёт» → <em>la lluvia va</em>). Не нужно: <em>llueve</em> — это всё предложение целиком.',
    },
  ],

  exercises: [
    {
      id: '122.1',
      title: 'se + 3-е лицо ед. ч.',
      type: 'fill',
      instructions: 'Поставьте <em>se</em> + указанный глагол в 3-м лице ед. ч. (Presente).',
      questions: [
        { id: 'q1',  prompt: 'En un pueblo pequeño ___ (vivir) mejor.',                          correct: 'se vive' },
        { id: 'q2',  prompt: 'Aquí ___ (necesitar) más tiempo libre.',                            correct: 'se necesita' },
        { id: 'q3',  prompt: 'En el campo ___ (tener) más tiempo.',                                correct: 'se tiene' },
        { id: 'q4',  prompt: 'En España ___ (cenar) tarde.',                                       correct: 'se cena' },
        { id: 'q5',  prompt: 'En la sierra ___ (respirar) mejor.',                                 correct: 'se respira' },
        { id: 'q6',  prompt: '¿Cómo ___ (decir) «hola» en italiano?',                              correct: 'se dice' },
        { id: 'q7',  prompt: 'En esta tienda ___ (vender) libros usados.',                          correct: 'se venden', explanation: 'Если подлежащее в мн.ч. (<em>libros</em>) — глагол согласуется (<em>se venden</em>), хотя смысл по-прежнему безличный.' },
        { id: 'q8',  prompt: 'En una gran ciudad ___ (vivir) con más libertad.',                     correct: 'se vive' },
      ],
    },

    {
      id: '122.2',
      title: 'se vs la gente / uno (с возвратным глаголом)',
      type: 'choice',
      instructions: 'Если глагол возвратный (<em>acostarse, divertirse</em>) — нельзя <em>se</em>. Берём <em>la gente</em> или <em>uno</em>.',
      questions: [
        { id: 'q1', prompt: 'Aquí ___ tarde.',                                                    options: ['se acuesta', 'la gente se acuesta'], correct: 'la gente se acuesta' },
        { id: 'q2', prompt: 'En esta playa ___ mucho en agosto.',                                   options: ['se divierte', 'uno se divierte'], correct: 'uno se divierte' },
        { id: 'q3', prompt: 'En España ___ tarde por las mañanas.',                                  options: ['se levanta', 'la gente se levanta'], correct: 'la gente se levanta' },
        { id: 'q4', prompt: 'Aquí ___ muy bien.',                                                      options: ['se vive', 'la gente vive'], correct: 'se vive', explanation: '<em>vivir</em> не возвратный — обычное безличное <em>se vive</em>.' },
        { id: 'q5', prompt: 'En este pueblo ___ pronto.',                                                options: ['se ducha', 'la gente se ducha'], correct: 'la gente se ducha' },
        { id: 'q6', prompt: 'Aquí ___ mucho en verano.',                                                   options: ['se trabaja', 'uno se trabaja'], correct: 'se trabaja' },
      ],
    },

    {
      id: '122.3',
      title: 'Перепишите безлично через se dice / se espera / se necesita / se puede / se suele / se supone / se ve / se sospechaba',
      type: 'fill',
      instructions: 'Перепишите фразу полностью, начиная с выражения из подсказки.',
      questions: [
        { id: 'q1', prompt: '<em>Estaba claro que Olga estaba contenta.</em> →',
          correct: ['Se veía que Olga estaba contenta.'] },
        { id: 'q2', prompt: '<em>En Chile es costumbre bailar la cueca en las fiestas populares.</em> →',
          correct: ['En Chile se suele bailar la cueca en las fiestas populares.'] },
        { id: 'q3', prompt: '<em>Alguien dice que Norma no se encuentra bien.</em> →',
          correct: ['Se dice que Norma no se encuentra bien.'] },
        { id: 'q4', prompt: '<em>Es posible hablar por teléfono desde aquí.</em> →',
          correct: ['Se puede hablar por teléfono desde aquí.'] },
        { id: 'q5', prompt: '<em>Alguien sospechaba que Andrés había causado la discusión.</em> →',
          correct: ['Se sospechaba que Andrés había causado la discusión.'] },
        { id: 'q6', prompt: '<em>La gente supone que Nacho es muy inteligente.</em> →',
          correct: ['Se supone que Nacho es muy inteligente.'] },
        { id: 'q7', prompt: '<em>Para jugar al baloncesto no es necesario ser muy alto.</em> →',
          correct: ['Para jugar al baloncesto no se necesita ser muy alto.'] },
        { id: 'q8', prompt: '<em>Algunas personas esperan que el Presidente hable mañana.</em> →',
          correct: ['Se espera que el Presidente hable mañana.'] },
      ],
    },

    {
      id: '122.4',
      title: 'Es + прил. + инфинитив',
      type: 'fill',
      instructions: 'Перепишите как «es + прил. + инфинитив». Запишите ответ целиком.',
      questions: [
        { id: 'q1', prompt: '<em>La gente se equivoca. Es fácil.</em> →',                       correct: ['Es fácil equivocarse.'] },
        { id: 'q2', prompt: '<em>No hay que equivocarse. Es importante.</em> →',                  correct: ['Es importante no equivocarse.'] },
        { id: 'q3', prompt: '<em>Hay que ser abiertos. Es mejor.</em> →',                          correct: ['Es mejor ser abiertos.'] },
        { id: 'q4', prompt: '<em>Hay que saber cocinar. Es útil.</em> →',                            correct: ['Es útil saber cocinar.'] },
        { id: 'q5', prompt: '<em>Hay que hacer ejercicio. Es bueno.</em> →',                            correct: ['Es bueno hacer ejercicio.'] },
        { id: 'q6', prompt: '<em>No hay que ser egoísta. Es malo.</em> →',                                correct: ['Es malo ser egoísta.'] },
        { id: 'q7', prompt: '<em>No se puede estudiar con tanto ruido. Es difícil.</em> →',                  correct: ['Es difícil estudiar con tanto ruido.'] },
        { id: 'q8', prompt: '<em>No se puede salir con este tiempo. Es imposible.</em> →',                      correct: ['Es imposible salir con este tiempo.'] },
      ],
    },

    {
      id: '122.5',
      title: 'haber / hacer / ser / amanecer / anochecer / nevar',
      type: 'fill',
      instructions: 'Выберите подходящий глагол и поставьте в нужном времени. Запишите всю форму.',
      questions: [
        { id: 'q1', prompt: '___ bastante frío durante la noche. (Indefinido) ',                       correct: 'Hizo' },
        { id: 'q2', prompt: 'Es tarde, ___ que acostarse temprano. Mañana salimos a las siete.',          correct: 'hay' },
        { id: 'q3', prompt: 'Ya ___ dos meses que no voy a la piscina. (Presente)',                         correct: 'hace' },
        { id: 'q4', prompt: '—¿A qué hora ___ en esta parte de México? (Presente, amanecer) —Pronto.',         correct: 'amanece' },
        { id: 'q5', prompt: 'Abre la ventana, ___ calor. (Presente, hacer)',                                    correct: 'hace' },
        { id: 'q6', prompt: '¿Cuánto tiempo ___ que no nos veíamos? (Presente, hacer)',                            correct: 'hace' },
        { id: 'q7', prompt: 'Hoy ___ en la sierra. Las cumbres están blancas. (Indefinido, nevar)',                   correct: 'nevó' },
        { id: 'q8', prompt: '___ tarde. Aún no ___ luz. En invierno ___ muy tarde. (anochecer / haber / amanecer, Presente)',
          correct: ['Anochece tarde. Aún no hay luz. En invierno amanece muy tarde.'] },
      ],
    },

    {
      id: '122.6',
      title: 'indicativo или subjuntivo после se + verbo',
      type: 'choice',
      instructions: '<em>se espera que</em> → subjuntivo. Остальные (<em>se dice, se piensa, se sospecha, se supone, se ve</em>) → indicativo.',
      questions: [
        { id: 'q1', prompt: 'Se espera que la conferencia ___ a tiempo.',                                  options: ['empieza', 'empiece'], correct: 'empiece' },
        { id: 'q2', prompt: 'Se dice que el alcalde ___ enfermo.',                                            options: ['está', 'esté'], correct: 'está' },
        { id: 'q3', prompt: 'Se supone que los invitados ___ a las nueve.',                                    options: ['llegan', 'lleguen'], correct: 'llegan' },
        { id: 'q4', prompt: 'Se sospecha que el cuadro ___ falso.',                                              options: ['es', 'sea'], correct: 'es' },
        { id: 'q5', prompt: 'Se espera que ___ buen tiempo el fin de semana.',                                     options: ['hace', 'haga'], correct: 'haga' },
        { id: 'q6', prompt: 'Se piensa que el museo ___ ahí desde hace siglos.',                                     options: ['existe', 'exista'], correct: 'existe' },
      ],
    },

    {
      id: '122.7',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна неверная фраза.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?',
          options: ['Aquí se trabaja mucho.', 'Aquí se acuesta tarde.', 'Aquí la gente se acuesta tarde.', 'Aquí uno se acuesta tarde.'],
          correct: 'Aquí se acuesta tarde.', explanation: 'С возвратным глаголом (<em>acostarse</em>) нельзя добавлять безличное <em>se</em> — нужно <em>la gente</em> / <em>uno</em>.' },
        { id: 'q2', prompt: 'Где ошибка?',
          options: ['Se dice que está enfermo.', 'Se espera que esté enfermo.', 'Se espera que está enfermo.', 'Se sospecha que está enfermo.'],
          correct: 'Se espera que está enfermo.', explanation: '<em>se espera</em> → subjuntivo (<em>esté</em>).' },
        { id: 'q3', prompt: 'Где ошибка?',
          options: ['Es importante saber idiomas.', 'Es importante saber idiomas.', 'Es fácil de equivocarse.', 'Es fácil equivocarse.'],
          correct: 'Es fácil de equivocarse.', explanation: 'Конструкция <em>es + прил. + infinitivo</em> без <em>de</em>: <em>es fácil equivocarse</em>.' },
        { id: 'q4', prompt: 'Где ошибка?',
          options: ['Hay niebla.', 'Hace frío.', 'Es niebla.', 'Es tarde.'],
          correct: 'Es niebla.', explanation: '«Туман» — <em>hay niebla</em>, не <em>es</em>.' },
        { id: 'q5', prompt: 'Где ошибка?',
          options: ['Llueve mucho.', 'La lluvia llueve mucho.', 'Está lloviendo.', 'Llovía cuando salimos.'],
          correct: 'La lluvia llueve mucho.', explanation: 'Глаголы погоды безличны: <em>llueve</em> — без подлежащего.' },
      ],
    },

    {
      id: '122.8',
      title: 'Все верные варианты',
      type: 'multi',
      instructions: 'Отметьте правильно построенные безличные фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Выберите все правильные:',
          options: [
            'Aquí se vive bien.',
            'Aquí se vive uno bien.',
            'Aquí la gente se acuesta tarde.',
            'Aquí se acuesta tarde.',
            'Se dice que llega mañana.',
            'Se dice que llegue mañana.',
            'Se espera que llegue mañana.',
            'Se espera que llega mañana.',
            'Es fácil equivocarse.',
            'Llueve mucho.',
            'La lluvia llueve mucho.',
            'Hay niebla.',
            'Hace frío.',
            'Es frío.',
          ],
          correct: [
            'Aquí se vive bien.',
            'Aquí la gente se acuesta tarde.',
            'Se dice que llega mañana.',
            'Se espera que llegue mañana.',
            'Es fácil equivocarse.',
            'Llueve mucho.',
            'Hay niebla.',
            'Hace frío.',
          ],
          explanation: 'С возвратными — <em>la gente</em>/<em>uno</em>. <em>se espera</em> → subjuntivo. Погода — без подлежащего.',
        },
      ],
    },

    {
      id: '122.9',
      title: 'Сопоставьте перевод',
      type: 'match',
      instructions: 'Подберите русский перевод.',
      pool: [
        'Здесь много работают.',
        'Важно знать языки.',
        'Говорят, он болен.',
        'Ожидают, что они выиграют.',
        'Из моего дома видно море.',
        'Сегодня холодно.',
        'Светает рано.',
      ],
      questions: [
        { id: 'q1', prompt: '<em>Aquí se trabaja mucho.</em>',                                       correct: 'Здесь много работают.' },
        { id: 'q2', prompt: '<em>Es importante saber idiomas.</em>',                                   correct: 'Важно знать языки.' },
        { id: 'q3', prompt: '<em>Se dice que está enfermo.</em>',                                        correct: 'Говорят, он болен.' },
        { id: 'q4', prompt: '<em>Se espera que ganen.</em>',                                                correct: 'Ожидают, что они выиграют.' },
        { id: 'q5', prompt: '<em>Desde mi casa se puede ver el mar.</em>',                                    correct: 'Из моего дома видно море.' },
        { id: 'q6', prompt: '<em>Hoy hace frío.</em>',                                                            correct: 'Сегодня холодно.' },
        { id: 'q7', prompt: '<em>Amanece pronto.</em>',                                                              correct: 'Светает рано.' },
      ],
    },

    {
      id: '122.10',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Прослушайте и запишите целиком.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Aquí se trabaja mucho.',
          correct: ['Aquí se trabaja mucho.'] },
        { id: 'q2', prompt: '', audio: 'Es importante saber idiomas.',
          correct: ['Es importante saber idiomas.'] },
        { id: 'q3', prompt: '', audio: 'Se dice que Arlindo está enfermo.',
          correct: ['Se dice que Arlindo está enfermo.'] },
        { id: 'q4', prompt: '', audio: 'En verano amanece muy pronto.',
          correct: ['En verano amanece muy pronto.'] },
        { id: 'q5', prompt: '', audio: 'Hace dos semanas que no veo a Pili.',
          correct: ['Hace dos semanas que no veo a Pili.'] },
      ],
    },

    {
      id: '122.11',
      title: 'Подберите тип конструкции',
      type: 'match',
      instructions: 'Каждой фразе — её тип безличной конструкции.',
      pool: [
        'se + verbo (3 sg)',
        'se + verbo + infinitivo',
        'se dice que + indicativo',
        'se espera que + subjuntivo',
        'es + adjetivo + infinitivo',
        'haber / hacer + tiempo',
        'verbo meteorológico',
      ],
      questions: [
        { id: 'q1', prompt: '<em>Aquí se vive bien.</em>',                                              correct: 'se + verbo (3 sg)' },
        { id: 'q2', prompt: '<em>Se suele cenar tarde en España.</em>',                                    correct: 'se + verbo + infinitivo' },
        { id: 'q3', prompt: '<em>Se dice que Arlindo está enfermo.</em>',                                    correct: 'se dice que + indicativo' },
        { id: 'q4', prompt: '<em>Se espera que ganen.</em>',                                                    correct: 'se espera que + subjuntivo' },
        { id: 'q5', prompt: '<em>Es difícil estudiar con ruido.</em>',                                            correct: 'es + adjetivo + infinitivo' },
        { id: 'q6', prompt: '<em>Hace dos semanas que no la veo.</em>',                                              correct: 'haber / hacer + tiempo' },
        { id: 'q7', prompt: '<em>Anochece tarde en verano.</em>',                                                      correct: 'verbo meteorológico' },
      ],
    },
  ],
};
