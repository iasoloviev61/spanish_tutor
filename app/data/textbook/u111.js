// ============================================================
// Unidad 111 — Preposiciones (2)
// Предлоги места и движения: a, hacia, hasta, de, desde, en,
// sobre, entre. Куда / откуда / докуда / где.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u111 = {
  id: 'u111',
  number: 111,
  title: { es: 'a Tijuana, desde la playa…', topic: 'Preposiciones (2)' },
  topicRu: 'Предлоги направления, исходной точки и общего расположения',

  theory: [
    {
      type: 'rule',
      es: '<em>a</em> indica <strong>destino</strong> (adónde) y también <strong>distancia</strong> respecto a un punto de referencia.',
      ru: 'Предлог <em>a</em> указывает <strong>пункт назначения</strong> («куда») и <strong>расстояние</strong> до объекта. Помните слитные формы: <em>a + el = al</em>.',
      examples: [
        { es: '¿Adónde vas? — Voy a la academia.', ru: 'Куда ты идёшь? — В академию.' },
        { es: 'Voy al mercado.', ru: 'Иду на рынок.' },
        { es: 'El pueblo está a seis kilómetros.', ru: 'Деревня в шести километрах.' },
      ],
    },
    {
      type: 'rule',
      es: '<em>hacia</em> indica <strong>dirección</strong> (= en dirección a). No marca el destino exacto, sino hacia dónde apunta el movimiento.',
      ru: 'Предлог <em>hacia</em> означает <strong>направление</strong> («в сторону»). В отличие от <em>a</em>, не подразумевает, что мы дойдём до точки.',
      examples: [
        { es: 'Esta autopista va hacia el sur.', ru: 'Это шоссе ведёт на юг.' },
        { es: 'No mires hacia abajo.', ru: 'Не смотри вниз.' },
        { es: 'Mi casa está hacia las afueras.', ru: 'Мой дом ближе к окраине.' },
      ],
    },
    {
      type: 'rule',
      es: '<em>hasta</em> indica el <strong>punto final</strong> de un trayecto (= «до»).',
      ru: 'Предлог <em>hasta</em> отмечает <strong>конечную точку</strong> пути («до куда»). Часто сочетается с <em>desde / de</em> в паре «от … до …».',
      examples: [
        { es: 'Corrimos hasta la parada del autobús.', ru: 'Мы добежали до автобусной остановки.' },
        { es: 'Hicimos una marcha hasta Aranjuez.', ru: 'Мы прошли пеший маршрут до Аранхуэса.' },
        { es: '¿Hasta dónde hay que llegar?', ru: 'До какого места надо дойти?' },
      ],
    },
    {
      type: 'rule',
      es: '<em>de</em> y <em>desde</em> indican el <strong>lugar de origen</strong> o el <strong>punto inicial</strong> de un movimiento. Slitno: <em>de + el = del</em>.',
      ru: 'Предлоги <em>de</em> и <em>desde</em> указывают <strong>исходную точку</strong> («откуда»). В большинстве случаев взаимозаменяемы при глаголах движения.',
      examples: [
        { es: 'Han venido de la playa en bicicleta.', ru: 'Они приехали с пляжа на велосипеде.' },
        { es: 'Vengo desde la playa en bicicleta.', ru: 'Еду с пляжа на велосипеде.' },
        { es: '¿De dónde vienes? — De casa de Eva.', ru: 'Откуда ты? — От Эвы.' },
        { es: 'Regreso del instituto a las tres.', ru: 'Возвращаюсь из института в три.' },
      ],
    },
    {
      type: 'atencion',
      es: 'No se usa <em>desde</em> cuando lo importante es el <strong>lugar de origen</strong> y no el trayecto: <em>Venimos del cine</em> (no «desde el cine»). <em>Desde</em> también puede aparecer con verbos sin movimiento, marcando un punto de referencia: <em>Se ve el mar desde la terraza</em>.',
      ru: 'Если в фокусе сам факт «откуда», а не путь, ставим <em>de</em>, не <em>desde</em>: <em>Venimos del cine</em>. С глаголами без движения <em>desde</em> используется как «отсюда виден / слышен»: <em>Se ve el mar desde la terraza</em> — «с террасы видно море».',
    },
    {
      type: 'rule',
      es: '<em>de/desde … a/hasta …</em> marcan <strong>punto inicial y punto final</strong> de un trayecto.',
      ru: 'Конструкция «<em>de/desde … a/hasta …</em>» — это «от … до …», полное обозначение пути от точки А к точке Б.',
      examples: [
        { es: 'Hay mucho camino de la iglesia a el restaurante.', ru: 'От церкви до ресторана далеко.' },
        { es: 'Desde Santiago hasta Lima hay una buena carretera.', ru: 'От Сантьяго до Лимы хорошая трасса.' },
      ],
    },
    {
      type: 'heading',
      text: 'Расположение: en, sobre, entre',
    },
    {
      type: 'rule',
      es: '<em>en</em> indica <strong>situación general</strong>: dentro de un espacio, sobre una superficie o en un lugar geográfico.',
      ru: 'Предлог <em>en</em> описывает <strong>нахождение в каком-то пространстве</strong> — на/в/внутри. Универсальный предлог места.',
      examples: [
        { es: 'El libro está en la mesa.', ru: 'Книга на столе.' },
        { es: 'Las llaves están en la caja.', ru: 'Ключи в коробке.' },
        { es: 'Teresa vive en Ecuador.', ru: 'Тереза живёт в Эквадоре.' },
        { es: 'Vive en el quinto piso.', ru: 'Живёт на пятом этаже.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Pero se usa <em>a</em> cuando se indica situación con respecto a otro punto: <em>a la entrada del museo, a la derecha de la calle, a la puerta de la casa</em>.',
      ru: 'В оборотах вида «у входа», «справа от», «у двери» (расположение относительно другой точки) ставим <em>a</em>, а не <em>en</em>: <em>Se sentaron a la puerta de la casa</em>.',
    },
    {
      type: 'rule',
      es: '<em>sobre</em> indica situación <strong>por encima</strong> de algo o alguien (en contacto o no).',
      ru: 'Предлог <em>sobre</em> означает «на (поверхности)» или «над». Часто эквивалентен <em>en</em>, но всегда с оттенком «сверху».',
      examples: [
        { es: 'Hay muchos papeles sobre el televisor.', ru: 'На телевизоре куча бумаг.' },
        { es: 'A veces pasan aviones sobre la ciudad.', ru: 'Иногда над городом пролетают самолёты.' },
      ],
    },
    {
      type: 'rule',
      es: '<em>entre</em> indica un <strong>lugar intermedio</strong> entre dos o más elementos.',
      ru: 'Предлог <em>entre</em> — «между». Указывает положение между двумя (и более) объектами.',
      examples: [
        { es: 'La farmacia está entre el supermercado y el banco.', ru: 'Аптека между супермаркетом и банком.' },
        { es: 'Bibiana está entre su madre y su padre.', ru: 'Бибиана стоит между матерью и отцом.' },
        { es: 'Costa Rica está entre Nicaragua y Panamá.', ru: 'Коста-Рика — между Никарагуа и Панамой.' },
      ],
    },
    {
      type: 'table',
      caption: 'Куда / откуда / докуда / где — резюме',
      columns: ['Значение', 'Предлог', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['пункт назначения', '<strong>a</strong>',       '<em>Voy a Madrid.</em>'],
        ['направление',       '<strong>hacia</strong>',  '<em>Va hacia el norte.</em>'],
        ['конечная точка',    '<strong>hasta</strong>',  '<em>Llegamos hasta la plaza.</em>'],
        ['исходная точка',    '<strong>de / desde</strong>', '<em>Vengo de / desde la playa.</em>'],
        ['нахождение в',      '<strong>en</strong>',     '<em>Vivo en Quito.</em>'],
        ['на поверхности',    '<strong>sobre</strong>',  '<em>Papeles sobre la mesa.</em>'],
        ['между',             '<strong>entre</strong>',  '<em>Entre A y B.</em>'],
      ],
    },
  ],

  exercises: [
    {
      id: '111.1',
      title: 'Выберите предлог: hasta или de',
      type: 'choice',
      instructions: 'В каждой фразе один из вариантов уместнее. Опирайтесь на смысл «откуда / докуда».',
      questions: [
        { id: 'q1', prompt: 'Vengo ___ casa de Juana.',                options: ['hasta', 'de'],   correct: 'de' },
        { id: 'q2', prompt: 'Ven ___ mi casa esta noche.',              options: ['a', 'hasta'],   correct: 'a' },
        { id: 'q3', prompt: 'No mires ___ abajo. Te puedes marear.',    options: ['a', 'hacia'],   correct: 'hacia', explanation: '«Не смотри вниз» = направление взгляда → <em>hacia</em>.' },
        { id: 'q4', prompt: '___ aquí se ve muy bien la obra.',         options: ['De', 'Desde'],  correct: 'Desde', explanation: 'Точка обзора (без движения) → <em>desde</em>.' },
        { id: 'q5', prompt: 'Tienes que llegar ___ la meta.',            options: ['a', 'hacia'],   correct: 'a', explanation: 'Цель достигается → <em>a</em>.' },
        { id: 'q6', prompt: '¿___ dónde hay que llegar? — ___ el árbol.', options: ['Hasta / Hasta', 'Hasta / Hacia', 'Hacia / Hasta'], correct: 'Hasta / Hasta' },
        { id: 'q7', prompt: '¡Ánimo! Tienes que llegar ___ la meta.',    options: ['a', 'hasta'],   correct: 'hasta', explanation: 'Подчёркивается «дойти до самого финиша».' },
        { id: 'q8', prompt: 'Mi casa hay más de diez kilómetros ___ el instituto.', options: ['a', 'del'], correct: 'del', explanation: 'Расстояние «от института» — точка отсчёта.' },
      ],
    },

    {
      id: '111.2',
      title: 'Дополните: a, hacia, hasta, de, desde',
      type: 'fill',
      instructions: 'Запишите подходящий предлог. Не забывайте про слитные формы <em>al</em> и <em>del</em>, если уместны.',
      questions: [
        { id: 'q1',  prompt: '¿Nos puede llevar ___ la estación?',                correct: 'a' },
        { id: 'q2',  prompt: '¿Vosotras podéis nadar ___ la orilla?',              correct: 'hasta', explanation: 'До берега — конечная точка.' },
        { id: 'q3',  prompt: 'Este autobús no llega ___ centro.',                  correct: 'al' },
        { id: 'q4',  prompt: 'Para ver esa estrella hay que mirar ___ el Este.',  correct: 'hacia' },
        { id: 'q5',  prompt: '___ Santiago ___ Lima hay una buena carretera.',     correct: ['Desde / hasta', 'De / a'], explanation: 'Полная пара «от … до …».' },
        { id: 'q6',  prompt: 'El Ebro fluye ___ el Este.',                         correct: 'hacia', explanation: 'Направление течения.' },
        { id: 'q7',  prompt: '___ aquí ___ casa de Lola hay solo dos kilómetros.', correct: ['De / a', 'Desde / a', 'De / hasta', 'Desde / hasta'] },
        { id: 'q8',  prompt: '¿Cuántos kilómetros hay ___ Valencia?',              correct: 'a', explanation: 'Расстояние до точки.' },
        { id: 'q9',  prompt: '¿___ dónde vienes? — ___ una conferencia.',           correct: ['De / De', 'De / de'] },
        { id: 'q10', prompt: '___ aquí arriba no se oye nada.',                    correct: 'Desde', explanation: 'Точка обзора без движения.' },
        { id: 'q11', prompt: '¿Cómo se va ___ estadio?',                            correct: 'al' },
      ],
    },

    {
      id: '111.3',
      title: 'En, a, sobre, entre',
      type: 'fill',
      instructions: 'Подберите предлог, обозначающий <strong>где</strong> находится объект.',
      questions: [
        { id: 'q1', prompt: 'Hay una foto ___ el piano.',                  correct: 'sobre', explanation: '«На пианино» (поверхность сверху).' },
        { id: 'q2', prompt: 'Bibiana está ___ su madre y su padre.',        correct: 'entre' },
        { id: 'q3', prompt: 'Asunción está ___ Paraguay.',                  correct: 'en', explanation: 'Город — внутри страны.' },
        { id: 'q4', prompt: 'Hay un quiosco de flores ___ la puerta de los almacenes.', correct: 'a', explanation: '«У двери» — относительная точка → <em>a</em>.' },
        { id: 'q5', prompt: 'Tuerce por la primera ___ la izquierda.',      correct: 'a' },
        { id: 'q6', prompt: 'Hay unas nubes ___ el pueblo.',                correct: 'sobre' },
        { id: 'q7', prompt: 'Costa Rica está ___ Nicaragua y Panamá.',      correct: 'entre' },
        { id: 'q8', prompt: 'Solo hay dos alumnos ___ el aula.',            correct: 'en' },
      ],
    },

    {
      id: '111.4',
      title: 'a или en?',
      type: 'choice',
      instructions: 'Выберите предлог. Помните: <em>a</em> — относительная точка («у», «на пороге», «справа»); <em>en</em> — общее расположение.',
      questions: [
        { id: 'q1', prompt: 'Te espero ___ la puerta del cine.',     options: ['a', 'en'], correct: 'a' },
        { id: 'q2', prompt: 'Vivo ___ Madrid.',                       options: ['a', 'en'], correct: 'en' },
        { id: 'q3', prompt: 'Mi oficina está ___ el quinto piso.',    options: ['a', 'en'], correct: 'en' },
        { id: 'q4', prompt: 'Se sentaron ___ la entrada del museo.',  options: ['a', 'en'], correct: 'a' },
        { id: 'q5', prompt: 'El supermercado está ___ la derecha.',   options: ['a', 'en'], correct: 'a' },
        { id: 'q6', prompt: 'Trabajo ___ una empresa pequeña.',       options: ['a', 'en'], correct: 'en' },
        { id: 'q7', prompt: 'Vivimos ___ la calle Mayor.',            options: ['a', 'en'], correct: 'en', explanation: 'Адрес — обычно <em>en</em>.' },
        { id: 'q8', prompt: 'El pueblo está ___ seis kilómetros.',    options: ['a', 'en'], correct: 'a', explanation: 'Расстояние → <em>a</em>.' },
      ],
    },

    {
      id: '111.5',
      title: 'a или hacia?',
      type: 'choice',
      instructions: '<em>a</em> — пункт назначения; <em>hacia</em> — направление, без обязательного достижения.',
      questions: [
        { id: 'q1', prompt: 'Voy ___ la academia.',                      options: ['a', 'hacia'], correct: 'a' },
        { id: 'q2', prompt: 'El sol se mueve ___ el oeste.',             options: ['a', 'hacia'], correct: 'hacia' },
        { id: 'q3', prompt: 'Mañana viajamos ___ Tijuana.',              options: ['a', 'hacia'], correct: 'a' },
        { id: 'q4', prompt: 'Camina ___ las afueras de la ciudad.',      options: ['a', 'hacia'], correct: 'hacia' },
        { id: 'q5', prompt: '¿Adónde vas? — ___ casa.',                   options: ['A', 'Hacia'], correct: 'A' },
        { id: 'q6', prompt: 'Mira ___ ese edificio rojo.',                options: ['a', 'hacia'], correct: 'hacia' },
      ],
    },

    {
      id: '111.6',
      title: 'de или desde?',
      type: 'choice',
      instructions: 'Если важна точка отсчёта без движения, или подчёркнуто «начало пути», лучше <em>desde</em>. Если важно само «откуда», без оттенка «начиная отсюда» — обычно <em>de</em>.',
      questions: [
        { id: 'q1', prompt: 'Vengo ___ el cine. Hemos visto una película.',  options: ['de', 'desde'], correct: 'de', explanation: 'В фокусе — место, не путь.' },
        { id: 'q2', prompt: 'Se ve el mar ___ la terraza.',                   options: ['de', 'desde'], correct: 'desde', explanation: 'Точка обзора без движения.' },
        { id: 'q3', prompt: 'Han venido ___ la playa en bicicleta.',           options: ['de', 'desde'], correct: ['de', 'desde'], explanation: 'Оба варианта допустимы.' },
        { id: 'q4', prompt: '¿___ dónde vienes? — ___ casa de Eva.',           options: ['De / De', 'Desde / Desde', 'De / Desde'], correct: 'De / De' },
        { id: 'q5', prompt: '___ aquí no se oye nada.',                        options: ['De', 'Desde'], correct: 'Desde' },
        { id: 'q6', prompt: 'Regreso ___ el instituto a las tres.',             options: ['de', 'desde'], correct: 'de', explanation: 'Слитно: <em>del instituto</em>.' },
      ],
    },

    {
      id: '111.7',
      title: 'Сопоставьте предлог со значением',
      type: 'match',
      instructions: 'Подберите для каждого предлога его типичное значение.',
      pool: [
        'пункт назначения',
        'направление, без обязательного финиша',
        'конечная точка пути',
        'исходная точка / источник',
        'точка обзора без движения',
        'нахождение в пространстве',
        'на поверхности или над',
        'между двумя объектами',
      ],
      questions: [
        { id: 'q1', prompt: '<em>a</em>',     correct: 'пункт назначения' },
        { id: 'q2', prompt: '<em>hacia</em>', correct: 'направление, без обязательного финиша' },
        { id: 'q3', prompt: '<em>hasta</em>', correct: 'конечная точка пути' },
        { id: 'q4', prompt: '<em>de</em>',    correct: 'исходная точка / источник' },
        { id: 'q5', prompt: '<em>desde</em>', correct: 'точка обзора без движения' },
        { id: 'q6', prompt: '<em>en</em>',    correct: 'нахождение в пространстве' },
        { id: 'q7', prompt: '<em>sobre</em>', correct: 'на поверхности или над' },
        { id: 'q8', prompt: '<em>entre</em>', correct: 'между двумя объектами' },
      ],
    },

    {
      id: '111.8',
      title: 'Найдите фразу с ошибкой',
      type: 'choice',
      instructions: 'В каждом ряду одна неудачная фраза.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Voy a Madrid.', 'Voy al Madrid.', 'Voy hacia el norte.', 'Voy hasta la plaza.'], correct: 'Voy al Madrid.', explanation: 'Перед именами городов артикль не ставится: <em>a Madrid</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Vengo de la playa.', 'Vengo desde la playa.', 'Vengo del playa.', 'Vengo de casa.'], correct: 'Vengo del playa.', explanation: '<em>la playa</em> женского рода — <em>del</em> не подходит, нужно <em>de la playa</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['El libro está en la mesa.', 'El libro está sobre la mesa.', 'El libro está a la mesa.', 'El libro está entre los cuadernos.'], correct: 'El libro está a la mesa.', explanation: '«На столе» — <em>en/sobre la mesa</em>; <em>a la mesa</em> = «за столом» в значении «к трапезе».' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['No mires hacia abajo.', 'No mires a abajo.', 'No mires hacia arriba.', 'Mira hacia el cielo.'], correct: 'No mires a abajo.', explanation: 'С наречиями места употребляется <em>hacia</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Costa Rica está entre Nicaragua y Panamá.', 'La farmacia está entre el banco.', 'Estoy entre amigos.', 'Camina entre las flores.'], correct: 'La farmacia está entre el banco.', explanation: '<em>entre</em> требует двух элементов.' },
      ],
    },

    {
      id: '111.9',
      title: 'Соберите фразу',
      type: 'fill',
      instructions: 'Расставьте слова в естественном порядке. Образец: <em>un bar / hay / el cine / frente a → Hay un bar frente al cine.</em>',
      questions: [
        { id: 'q1', prompt: 'el suelo / los cables / debajo de / van →', correct: ['Los cables van debajo del suelo.', 'Los cables van debajo del suelo'], placeholder: 'Los cables ...' },
        { id: 'q2', prompt: 'una estación de metro / mi casa / hay / cerca de →', correct: ['Hay una estación de metro cerca de mi casa.', 'Hay una estación de metro cerca de mi casa'] },
        { id: 'q3', prompt: 'se sienta / junto a / Alfonso / mí →', correct: ['Alfonso se sienta junto a mí.', 'Alfonso se sienta junto a mí'] },
        { id: 'q4', prompt: 'el televisor / no pongas / encima de / nada →', correct: ['No pongas nada encima del televisor.', 'No pongas nada encima del televisor'] },
        { id: 'q5', prompt: 'te espero / el hotel / frente a →', correct: ['Te espero frente al hotel.', 'Te espero frente al hotel'] },
      ],
    },

    {
      id: '111.10',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Прослушайте и запишите. Все диакритические знаки обязательны.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Voy al mercado.',                                  correct: ['Voy al mercado.', 'Voy al mercado'] },
        { id: 'q2', prompt: '', audio: 'El pueblo está a seis kilómetros.',                 correct: ['El pueblo está a seis kilómetros.', 'El pueblo está a seis kilómetros'] },
        { id: 'q3', prompt: '', audio: 'Vengo desde la playa en bicicleta.',                correct: ['Vengo desde la playa en bicicleta.', 'Vengo desde la playa en bicicleta'] },
        { id: 'q4', prompt: '', audio: 'La farmacia está entre el banco y el supermercado.', correct: ['La farmacia está entre el banco y el supermercado.', 'La farmacia está entre el banco y el supermercado'] },
        { id: 'q5', prompt: '', audio: 'Esta autopista va hacia el sur.',                   correct: ['Esta autopista va hacia el sur.', 'Esta autopista va hacia el sur'] },
        { id: 'q6', prompt: '', audio: 'Se ve el mar desde la terraza.',                    correct: ['Se ve el mar desde la terraza.', 'Se ve el mar desde la terraza'] },
      ],
    },

    {
      id: '111.11',
      title: 'Перепишите, заменив подчёркнутый предлог',
      type: 'fill',
      instructions: 'Перепишите фразу, заменив <em>de</em> на <em>desde</em> или наоборот, если так лучше звучит.',
      questions: [
        { id: 'q1', prompt: '<em>Venimos desde el cine.</em> →',         correct: ['Venimos del cine.', 'Venimos del cine'], explanation: 'Когда важно лишь место, не путь, — <em>de</em>.' },
        { id: 'q2', prompt: '<em>Se ve el mar de la terraza.</em> →',     correct: ['Se ve el mar desde la terraza.', 'Se ve el mar desde la terraza'], explanation: 'Точка обзора → <em>desde</em>.' },
        { id: 'q3', prompt: '<em>Salgo de Madrid mañana.</em> →',         correct: ['Salgo de Madrid mañana.', 'Salgo de Madrid mañana'], explanation: 'Здесь <em>de</em> уместнее.' },
        { id: 'q4', prompt: '<em>Te oigo perfectamente de aquí.</em> →',  correct: ['Te oigo perfectamente desde aquí.', 'Te oigo perfectamente desde aquí'] },
      ],
    },

    {
      id: '111.12',
      title: 'Какой предлог выражает эту идею',
      type: 'choice',
      instructions: 'Выберите предлог, наиболее точно передающий смысл.',
      questions: [
        { id: 'q1', prompt: '«Между двумя точками»',                 options: ['entre', 'sobre', 'hasta'], correct: 'entre' },
        { id: 'q2', prompt: '«До какого-то предела»',                 options: ['hasta', 'hacia', 'sobre'], correct: 'hasta' },
        { id: 'q3', prompt: '«Откуда виден вид»',                     options: ['de', 'desde', 'a'],       correct: 'desde' },
        { id: 'q4', prompt: '«В сторону, но без обязательной цели»',  options: ['a', 'hacia', 'hasta'],    correct: 'hacia' },
        { id: 'q5', prompt: '«На поверхности сверху»',                options: ['en', 'sobre', 'entre'],   correct: 'sobre' },
        { id: 'q6', prompt: '«У входа в музей»',                       options: ['en', 'a', 'hasta'],       correct: 'a' },
      ],
    },
  ],
};
