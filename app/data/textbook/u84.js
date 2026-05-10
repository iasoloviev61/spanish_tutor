// ============================================================
// Unidad 84 — Expresión de deseos
// Quiero que me ayudes / Quiero ayudarte / ¡Que tengáis buen viaje! /
// ¡Ojalá llueva! / ¡Ojalá fuera más joven!
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u84 = {
  id: 'u84',
  number: 84,
  title: { es: 'Quiero que me ayudes', topic: 'Expresión de deseos' },
  topicRu: 'Как выразить желание (que + субхунтив, инфинитив, ¡Que…!, ¡Ojalá!)',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Para expresar deseos se usan verbos como <em>querer, desear, preferir, esperar, rogar, soñar con, tener ganas de, (me, te) gustaría, (me, te) importaría</em>. Estos verbos se construyen con <strong>infinitivo</strong> o con <strong>que + subjuntivo</strong> según haya uno o dos sujetos.',
      ru: 'Желание выражают глаголы и обороты <em>querer, desear, preferir, esperar, rogar, soñar con, tener ganas de, (me, te) gustaría, (me, te) importaría</em>. У них две модели: <strong>+ инфинитив</strong> или <strong>+ que + субхунтив</strong>. Какую выбрать — зависит от того, совпадает ли подлежащее в обеих частях.',
    },

    {
      type: 'heading',
      text: 'Один субъект → инфинитив',
    },
    {
      type: 'rule',
      es: 'Cuando los dos verbos se refieren a la <strong>misma persona</strong>, se usa el <strong>infinitivo</strong>: el «que» no aparece. Vale para presente, pasado o futuro.',
      ru: 'Если оба глагола относятся к <strong>одному и тому же лицу</strong>, используется <strong>инфинитив</strong> (без <em>que</em>). Подходит для любого времени.',
      examples: [
        { es: 'Quiero ayudarte.', ru: 'Я хочу тебе помочь. (я хочу — я и помогаю)' },
        { es: 'Hoy no deseo ver a nadie. Estoy triste.', ru: 'Сегодня я никого не хочу видеть. Мне грустно.' },
        { es: 'De pequeña, Elisa soñaba con ser escritora.', ru: 'В детстве Элиза мечтала стать писательницей. (она → она)' },
        { es: '¿Te gustaría ganar algo de dinero?', ru: 'Тебе хотелось бы немного заработать? (ты → ты)' },
      ],
    },

    {
      type: 'heading',
      text: 'Два разных субъекта → que + субхунтив',
    },
    {
      type: 'rule',
      es: 'Cuando los dos verbos se refieren a <strong>personas diferentes</strong>, se usa <strong>que + subjuntivo</strong>. El tiempo del subjuntivo depende del verbo principal:',
      ru: 'Если действующие лица <strong>разные</strong>, используется конструкция <strong>que + субхунтив</strong>. Время субхунтива зависит от главного глагола:',
      examples: [
        { es: 'Quiero que me ayudes, Jorge. (yo → tú, presente / futuro)', ru: 'Я хочу, чтобы ты мне помог, Хорхе.' },
        { es: 'Espero que haga buen tiempo el domingo.', ru: 'Надеюсь, что в воскресенье будет хорошая погода.' },
        { es: 'Mis padres querían que (yo) fuera piloto. (pasado → impf. subj.)', ru: 'Мои родители хотели, чтобы я стал пилотом.' },
        { es: 'Me gustaría que me hicieras un favor, Mario. (cond. → impf. subj.)', ru: 'Мне бы хотелось, чтобы ты мне сделал одолжение, Марио.' },
      ],
    },
    {
      type: 'table',
      caption: 'Какой субхунтив поставить',
      columns: ['Главный глагол', 'Субхунтив в придаточной'],
      colClasses: ['col-pattern', 'col-result'],
      rows: [
        ['<em>quiero / espero / prefiero…</em> (presente)',           '<em>presente de subjuntivo</em>'],
        ['<em>quería / esperaba / soñaba con…</em> (pasado)',           '<em>imperfecto de subjuntivo</em>'],
        ['<em>(me) gustaría / (me) importaría</em> (condicional)',      '<em>imperfecto de subjuntivo</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Tras <em>tener ganas de</em>, la conjunción es <strong>de que</strong>, no <em>que</em>: <em>Tengo ganas <strong>de que</strong> trabajen mis hijos.</em>',
      ru: 'После <em>tener ganas de</em> используется <strong>de que</strong>, а не просто <em>que</em>: <em>Tengo ganas <strong>de que</strong> trabajen mis hijos</em> «Очень хочу, чтобы мои дети начали работать».',
    },

    {
      type: 'heading',
      text: '¡Que + presente de subjuntivo!',
    },
    {
      type: 'rule',
      es: 'La fórmula <em>¡Que + presente de subjuntivo!</em> se usa para <strong>desearle algo a alguien</strong> ante una acción presente o futura. Equivale a un <em>«deseo que…»</em> sobreentendido.',
      ru: '<strong>¡Que + презенс субхунтива!</strong> — устойчивая формула пожелания (в настоящем или будущем). Подразумевает <em>«deseo que…»</em>.',
      examples: [
        { es: '¡Que tengáis buen viaje! (= Os deseo que tengáis buen viaje.)', ru: 'Счастливого пути! (досл. «Желаю, чтобы у вас была хорошая поездка»)' },
        { es: '¡Que cumplas muchos más!', ru: 'Долгих лет тебе! (на день рождения)' },
        { es: '¡Que Ángel apruebe!', ru: 'Хоть бы Анхель сдал!' },
        { es: '¡Que lo pases bien!', ru: 'Хорошо тебе провести время!' },
      ],
    },

    {
      type: 'heading',
      text: '¡Ojalá + субхунтив!',
    },
    {
      type: 'rule',
      es: '<em>¡Ojalá + subjuntivo!</em> expresa un deseo o esperanza fuerte (para uno mismo o para otros). El tiempo del subjuntivo refleja si el deseo se considera <strong>realizable</strong> o <strong>difícil / imposible</strong>.',
      ru: '<strong>¡Ojalá + субхунтив!</strong> выражает сильное желание или надежду (за себя или за других). Время субхунтива показывает, насколько желаемое реально:',
      examples: [
        { es: '¡Ojalá haga buen tiempo mañana! (presente subj. — реально)', ru: 'Хоть бы завтра была хорошая погода!' },
        { es: '¡Ojalá encuentres trabajo pronto! (presente subj.)', ru: 'Хоть бы ты нашёл работу поскорее!' },
        { es: '¡Ojalá me tocara la lotería! (impf. subj. — маловероятно)', ru: 'Эх, выиграть бы мне в лотерею!' },
        { es: '¡Ojalá fuera más joven! (impf. subj. — невозможно)', ru: 'Эх, мне бы быть помоложе!' },
      ],
    },
    {
      type: 'table',
      caption: 'Презенс субх. vs имперфект субх. с ojalá',
      columns: ['Презенс субх. (реально)', 'Имперфект субх. (трудно / невозможно)'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>¡Ojalá apruebe!</em> «Хоть бы сдал»',                       '<em>¡Ojalá aprobara!</em> «Эх, если бы сдал…»'],
        ['<em>¡Ojalá no llueva!</em>',                                      '<em>¡Ojalá no lloviera!</em> (плотные тучи, шансов мало)'],
        ['<em>¡Ojalá ganemos!</em> (играем сегодня)',                        '<em>¡Ojalá ganáramos!</em> (соперник почти непобедим)'],
        ['<em>¡Ojalá venga Pedro!</em>',                                       '<em>¡Ojalá viniera Pedro!</em> (он в другой стране)'],
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '84.1',
      title: 'Инфинитив или субхунтив?',
      type: 'fill',
      instructions: 'Поставьте глагол в скобках в <strong>инфинитиве</strong> или в <strong>презенсе субхунтива</strong> в зависимости от того, совпадают ли субъекты.',
      questions: [
        { id: 'q1', prompt: 'Espero (yo, <em>encontrar</em>) ___ trabajo pronto.',                       correct: 'encontrar' },
        { id: 'q2', prompt: 'Espero que me (tú, <em>llamar</em>) ___ cuando vengas a Lima.',              correct: 'llames' },
        { id: 'q3', prompt: '¿Quieres (tú, <em>comer</em>) ___ algo?',                                     correct: 'comer' },
        { id: 'q4', prompt: '— Tengo hambre. — ¿Quieres que te (yo, <em>preparar</em>) ___ algo de comer?', correct: 'prepare' },
        { id: 'q5', prompt: 'Me gustaría (yo, <em>conocer</em>) ___ a tus padres.',                         correct: 'conocer' },
        { id: 'q6', prompt: 'Aléjate un poco. Prefiero que no nos (ellos, <em>ver</em>) ___ juntos. ¡Es una sorpresa!', correct: 'vean' },
        { id: 'q7', prompt: 'Te ruego que no me (tú, <em>esperar</em>) ___. Prefiero (yo, <em>quedarse</em>) ___ en casa.', correct: ['esperes. Prefiero quedarme', 'esperes; prefiero quedarme'], explanation: 'В первом — два разных субъекта (<em>te ruego — tú esperes</em>); во втором — одно лицо (<em>prefiero — me quedo</em>) → инфинитив <em>quedarme</em>.' },
        { id: 'q8', prompt: 'De pequeño soñaba con (yo, <em>poder</em>) ___ viajar por el espacio.',           correct: 'poder' },
        { id: 'q9', prompt: 'Voy a sentarme un poco. Tengo ganas de (yo, <em>descansar</em>) ___.',             correct: 'descansar' },
        { id: 'q10', prompt: '— ¿Le esperamos? — No, prefiero que (ustedes, <em>irse</em>) ___. Voy a acabar tarde.', correct: 'se vayan' },
      ],
    },

    {
      id: '84.2',
      title: 'que + субхунтив (по контексту)',
      type: 'fill',
      instructions: 'Преобразуйте подсказку в придаточную с <em>que</em>. Образец: <em>Alberto quería (yo, trabajar con él)</em> → <em>que trabajara con él</em>.',
      questions: [
        { id: 'q1', prompt: 'Espero (no llover mañana) → ___',                          correct: ['que no llueva mañana', 'que no llueva mañana.'], explanation: 'Главный — презенс, придаточный — презенс субхунтива.' },
        { id: 'q2', prompt: '¿Os importaría (yo, invitar a Laura a la fiesta)? → ¿Os importaría ___?', correct: ['que invite a Laura a la fiesta', 'que invitara a Laura a la fiesta'], explanation: 'После кондиционала <em>importaría</em> допустим имперфект субхунтива; в живой разговорной речи также можно презенс субхунтива.' },
        { id: 'q3', prompt: 'Felipe nos rogó (nosotros, no dejarle solo) → ___',           correct: ['que no le dejáramos solo', 'que no lo dejáramos solo'], explanation: 'Главный — индефинидо <em>rogó</em>, значит имперфект субхунтива.' },
        { id: 'q4', prompt: 'Sebastián prefiere (ustedes, esperar en su casa) → ___',       correct: ['que esperen en su casa'], explanation: 'Главный — презенс, придаточный — презенс субхунтива.' },
        { id: 'q5', prompt: 'Me gustaría (el mundo, ser más justo) → ___',                    correct: ['que el mundo fuera más justo', 'que el mundo fuese más justo'] },
        { id: 'q6', prompt: 'Tengo ganas de (vosotros, venir) → ___',                          correct: ['de que vengáis'], explanation: 'После <em>tengo ganas</em> — <em>de que</em>, не просто <em>que</em>.' },
      ],
    },

    {
      id: '84.3',
      title: '¿Qué diría? — ¡Que…!',
      type: 'fill',
      instructions: 'Подберите фразу-пожелание из шаблона <em>¡Que + subj.!</em> Подставьте только глагол.',
      questions: [
        { id: 'q1', prompt: 'A un amigo que se va de vacaciones: ¡Que lo (<em>pasar</em>) ___ bien!',          correct: 'pases' },
        { id: 'q2', prompt: 'A un desconocido que ha perdido la maleta: ¡Que la (<em>encontrar</em>) ___ pronto!', correct: 'encuentre' },
        { id: 'q3', prompt: 'A unos amigos que se van de viaje: ¡Que (<em>tener</em>) ___ buen viaje!',          correct: 'tengan' },
        { id: 'q4', prompt: 'A un amigo que va a hacer un examen importante: ¡Que (<em>tener</em>) ___ suerte!',  correct: 'tengas' },
        { id: 'q5', prompt: 'A unos recién casados: ¡Que (<em>ser</em>) ___ felices!',                              correct: 'sean' },
        { id: 'q6', prompt: 'A un amigo que se va a una fiesta: ¡Que te (<em>divertir</em>) ___!',                    correct: 'diviertas' },
      ],
    },

    {
      id: '84.4',
      title: '¿Qué diría? — ¡Ojalá!',
      type: 'fill',
      instructions: 'Постройте фразу с <em>¡Ojalá + subj.!</em> Если ситуация считается <strong>реальной</strong>, ставьте презенс субхунтива; если <strong>трудной/невозможной</strong> — имперфект субхунтива.',
      questions: [
        { id: 'q1', prompt: 'Estás jugando un partido y crees que podéis ganar. → ¡Ojalá (nosotros, <em>ganar</em>) ___!',         correct: 'ganemos' },
        { id: 'q2', prompt: 'Te gustaría que María te quisiera, pero es difícil. → ¡Ojalá me (<em>querer</em>) ___ María!',         correct: 'quisiera' },
        { id: 'q3', prompt: 'Te gustaría que tus amigos y tú aprobarais y es posible. Les dices: → ¡Ojalá (<em>aprobar</em>, nosotros) ___!', correct: 'aprobemos' },
        { id: 'q4', prompt: 'Te gustaría que no lloviera mañana y parece posible. → ¡Ojalá no (<em>llover</em>) ___ mañana!',         correct: 'llueva' },
        { id: 'q5', prompt: 'Te gustaría ser más alta. (imposible) → ¡Ojalá (yo, <em>ser</em>) ___ más alta!',                          correct: 'fuera' },
        { id: 'q6', prompt: 'Te gustaría que Julián supiera tocar el piano, pero no sabe. → ¡Ojalá (<em>saber</em>) ___ tocar el piano!', correct: 'supiera' },
      ],
    },

    {
      id: '84.5',
      title: 'Какая модель?',
      type: 'choice',
      instructions: 'Какая модель подходит для каждой пары лиц?',
      questions: [
        { id: 'q1', prompt: '<em>Quiero</em> (yo) + <em>ayudar</em> (yo)',         options: ['+ infinitivo', '+ que + subjuntivo'], correct: '+ infinitivo' },
        { id: 'q2', prompt: '<em>Quiero</em> (yo) + <em>ayudar</em> (tú)',           options: ['+ infinitivo', '+ que + subjuntivo'], correct: '+ que + subjuntivo' },
        { id: 'q3', prompt: '<em>Espero</em> (yo) + <em>llegar</em> a tiempo (yo)',   options: ['+ infinitivo', '+ que + subjuntivo'], correct: '+ infinitivo' },
        { id: 'q4', prompt: '<em>Espero</em> (yo) + <em>llegar</em> a tiempo (Marta)', options: ['+ infinitivo', '+ que + subjuntivo'], correct: '+ que + subjuntivo' },
        { id: 'q5', prompt: '<em>Soñaba con</em> (yo) + <em>ser</em> escritora (yo)',    options: ['+ infinitivo', '+ que + subjuntivo'], correct: '+ infinitivo' },
        { id: 'q6', prompt: '<em>Mis padres querían</em> + <em>ser</em> piloto (yo)',     options: ['+ infinitivo', '+ que + subjuntivo'], correct: '+ que + subjuntivo' },
      ],
    },

    {
      id: '84.6',
      title: 'Презенс или имперфект субхунтива?',
      type: 'choice',
      instructions: 'Главный глагол в каком времени? Выберите подходящее время субхунтива в придаточной.',
      questions: [
        { id: 'q1', prompt: 'Quiero que (tú) me ___.',                  options: ['ayudes', 'ayudaras'], correct: 'ayudes' },
        { id: 'q2', prompt: 'Mis padres querían que (yo) ___ piloto.',    options: ['sea', 'fuera'],         correct: 'fuera' },
        { id: 'q3', prompt: 'Me gustaría que (tú) me ___ un favor.',       options: ['hagas', 'hicieras'],     correct: 'hicieras', explanation: 'После <em>me gustaría</em> — имперфект субхунтива.' },
        { id: 'q4', prompt: 'Espero que (él) ___ buen tiempo el domingo.',  options: ['haga', 'hiciera'],       correct: 'haga' },
        { id: 'q5', prompt: 'Felipe nos rogó que no le ___ solo.',           options: ['dejemos', 'dejáramos'],  correct: 'dejáramos' },
        { id: 'q6', prompt: 'Prefiero que (vosotros) ___ aquí.',                options: ['esperéis', 'esperarais'], correct: 'esperéis' },
        { id: 'q7', prompt: 'De pequeño soñaba con que ___ a visitarme un astronauta.', options: ['venga', 'viniera'], correct: 'viniera' },
      ],
    },

    {
      id: '84.7',
      title: 'Поздравительные формулы',
      type: 'choice',
      instructions: 'Какая формула подходит ситуации?',
      questions: [
        { id: 'q1', prompt: 'Кому-то на день рождения:',                      options: ['¡Que cumplas muchos más!', '¡Que tengas buen viaje!', '¡Que aprueben!'], correct: '¡Que cumplas muchos más!' },
        { id: 'q2', prompt: 'Друзьям, которые отправляются в путь:',           options: ['¡Que cumplas muchos más!', '¡Que tengan buen viaje!', '¡Que duermas bien!'], correct: '¡Que tengan buen viaje!' },
        { id: 'q3', prompt: 'Другу перед сложным экзаменом:',                  options: ['¡Que tengas suerte!', '¡Que te diviertas!', '¡Que sean felices!'], correct: '¡Que tengas suerte!' },
        { id: 'q4', prompt: 'Молодожёнам:',                                     options: ['¡Que sean felices!', '¡Que tengas suerte!', '¡Que duerma bien!'], correct: '¡Que sean felices!' },
        { id: 'q5', prompt: 'Тому, кто идёт спать:',                              options: ['¡Que duermas bien!', '¡Que tengas buen viaje!', '¡Que apruebes!'], correct: '¡Que duermas bien!' },
      ],
    },

    {
      id: '84.8',
      title: 'Дополните по образцу',
      type: 'fill',
      instructions: 'Запишите придаточное полностью.',
      questions: [
        { id: 'q1', prompt: 'Espero ___ pronto a casa. (volver — тот же субъект)',                         correct: ['volver', 'volver pronto a casa'] },
        { id: 'q2', prompt: 'Espero ___ pronto a casa. (tú, volver — другой субъект)',                       correct: ['que vuelvas', 'que vuelvas pronto a casa'] },
        { id: 'q3', prompt: 'Quería ___ con su familia. (vivir — тот же субъект)',                            correct: ['vivir', 'vivir con su familia'] },
        { id: 'q4', prompt: 'Mi madre quería ___ con ella. (yo, vivir — другой субъект)',                     correct: ['que viviera', 'que viviera con ella', 'que viviese', 'que viviese con ella'] },
        { id: 'q5', prompt: 'Me gustaría ___ a tus padres. (yo, conocer — тот же субъект)',                    correct: ['conocer', 'conocer a tus padres'] },
        { id: 'q6', prompt: 'Me gustaría ___ a mis padres. (tú, conocer — другой субъект)',                    correct: ['que conocieras', 'que conocieras a mis padres', 'que conocieses', 'que conocieses a mis padres'] },
      ],
    },

    {
      id: '84.9',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой согласования времён или субъектов.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Quiero ayudarte.', 'Quiero que tú me ayudes.', 'Quiero que ayudarte.', 'Quiero que (él) te ayude.'], correct: 'Quiero que ayudarte.', explanation: 'Нельзя <em>que + infinitivo</em>: либо <em>que me ayudes</em>, либо <em>ayudarte</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Espero llegar a tiempo.', 'Espero que llegues a tiempo.', 'Espero que llegar a tiempo.', 'Espero que María llegue a tiempo.'], correct: 'Espero que llegar a tiempo.', explanation: 'То же: после <em>que</em> — субхунтив, а не инфинитив.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Mis padres querían que yo fuera piloto.', 'Mis padres querían que yo sea piloto.', 'Mis padres querían que yo fuese piloto.'], correct: 'Mis padres querían que yo sea piloto.', explanation: 'После прошедшего <em>querían</em> — имперфект субхунтива.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Me gustaría que vinieras.', 'Me gustaría que vengas.', 'Me gustaría que vinieses.'], correct: 'Me gustaría que vengas.', explanation: 'После кондиционала <em>me gustaría</em> — имперфект субхунтива.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['¡Ojalá fuera más joven!', '¡Ojalá soy más joven!', '¡Ojalá apruebe!'], correct: '¡Ojalá soy más joven!', explanation: 'После <em>ojalá</em> — субхунтив, не индикатив.' },
      ],
    },

    {
      id: '84.10',
      title: 'Какие конструкции работают',
      type: 'multi',
      instructions: 'Отметьте все <strong>правильные</strong> фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Quiero ayudarte.',
            'Quiero que ayudarte.',
            'Quiero que me ayudes.',
            'Espero llegar a tiempo.',
            'Espero que llegues a tiempo.',
            'Mis padres querían que yo fuera piloto.',
            'Mis padres querían que yo soy piloto.',
            'Me gustaría que vinieras.',
            'Me gustaría que vengas.',
            'Tengo ganas de que vengáis.',
            'Tengo ganas que vengáis.',
            '¡Que tengáis buen viaje!',
            '¡Que tener buen viaje!',
            '¡Ojalá apruebe!',
            '¡Ojalá soy más joven!',
            '¡Ojalá fuera más joven!',
          ],
          correct: [
            'Quiero ayudarte.',
            'Quiero que me ayudes.',
            'Espero llegar a tiempo.',
            'Espero que llegues a tiempo.',
            'Mis padres querían que yo fuera piloto.',
            'Me gustaría que vinieras.',
            'Tengo ganas de que vengáis.',
            '¡Que tengáis buen viaje!',
            '¡Ojalá apruebe!',
            '¡Ojalá fuera más joven!',
          ],
          explanation: 'После <em>que</em> — субхунтив (не инфинитив, не индикатив). После прошедшего и кондиционала — имперфект субхунтива. <em>Tener ganas</em> просит <em>de que</em>.',
        },
      ],
    },

    {
      id: '84.11',
      title: 'Сопоставьте ситуации и фразы',
      type: 'match',
      instructions: 'Подберите для каждой ситуации подходящую формулу пожелания.',
      pool: [
        '¡Que tengas buen viaje!',
        '¡Que cumplas muchos más!',
        '¡Que sean felices!',
        '¡Que tengas suerte!',
        '¡Que duermas bien!',
        '¡Que te diviertas!',
        '¡Ojalá no llueva!',
        '¡Ojalá fuera más joven!',
      ],
      questions: [
        { id: 'q1', prompt: 'Другу, который завтра летит в путешествие',                          correct: '¡Que tengas buen viaje!' },
        { id: 'q2', prompt: 'На день рождения',                                                     correct: '¡Que cumplas muchos más!' },
        { id: 'q3', prompt: 'Молодожёнам',                                                            correct: '¡Que sean felices!' },
        { id: 'q4', prompt: 'Перед экзаменом',                                                          correct: '¡Que tengas suerte!' },
        { id: 'q5', prompt: 'Тому, кто идёт спать',                                                       correct: '¡Que duermas bien!' },
        { id: 'q6', prompt: 'Тому, кто идёт на праздник',                                                   correct: '¡Que te diviertas!' },
        { id: 'q7', prompt: 'Перед свадьбой на пляже — переживаем за погоду',                                  correct: '¡Ojalá no llueva!' },
        { id: 'q8', prompt: 'Невыполнимая мечта',                                                                  correct: '¡Ojalá fuera más joven!' },
      ],
    },

    {
      id: '84.12',
      title: 'Аудио-диктант',
      type: 'fill',
      instructions: 'Запишите услышанное полностью с диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Quiero que me ayudes.',                       correct: ['Quiero que me ayudes.', 'Quiero que me ayudes'] },
        { id: 'q2', prompt: '', audio: 'Quiero ayudarte.',                              correct: ['Quiero ayudarte.', 'Quiero ayudarte'] },
        { id: 'q3', prompt: '', audio: 'Espero que haga buen tiempo el domingo.',        correct: ['Espero que haga buen tiempo el domingo.', 'Espero que haga buen tiempo el domingo'] },
        { id: 'q4', prompt: '', audio: 'Mis padres querían que yo fuera piloto.',         correct: ['Mis padres querían que yo fuera piloto.', 'Mis padres querían que yo fuera piloto'] },
        { id: 'q5', prompt: '', audio: '¡Que tengáis buen viaje!',                         correct: ['¡Que tengáis buen viaje!', 'Que tengáis buen viaje.', 'Que tengáis buen viaje'] },
        { id: 'q6', prompt: '', audio: '¡Ojalá fuera más joven!',                           correct: ['¡Ojalá fuera más joven!', 'Ojalá fuera más joven.', 'Ojalá fuera más joven'] },
        { id: 'q7', prompt: '', audio: 'Tengo ganas de que vengáis.',                        correct: ['Tengo ganas de que vengáis.', 'Tengo ganas de que vengáis'] },
      ],
    },
  ],
};
