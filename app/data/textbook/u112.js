// ============================================================
// Unidad 112 — Preposiciones (3)
// Сложные предлоги места: encima de, debajo de, dentro de,
// fuera de, cerca de, lejos de, frente a / enfrente de,
// junto a / al lado de, alrededor de, delante de, detrás de.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u112 = {
  id: 'u112',
  number: 112,
  title: { es: 'encima de la mesa, dentro de la caja…', topic: 'Preposiciones (3)' },
  topicRu: 'Сложные предлоги места: положение относительно объекта',

  theory: [
    {
      type: 'rule',
      es: 'Las <strong>preposiciones compuestas</strong> indican la situación de una persona, animal o cosa <em>en relación con otra</em>. Casi todas terminan en <em>de</em>; algunas, en <em>a</em>.',
      ru: '<strong>Сложные (составные) предлоги</strong> описывают положение одного объекта <em>относительно другого</em>. Большинство оканчивается на <em>de</em> (<em>encima de, dentro de, cerca de</em>…), некоторые — на <em>a</em> (<em>frente a, junto a</em>).',
      examples: [
        { es: 'Los documentos están encima de la mesa.', ru: 'Документы на столе.' },
        { es: 'Las llaves están dentro del cajón.', ru: 'Ключи в ящике.' },
        { es: 'Aurelio vive enfrente de un parque.', ru: 'Аурелио живёт напротив парка.' },
      ],
    },
    {
      type: 'heading',
      text: 'Антонимические пары',
    },
    {
      type: 'table',
      caption: 'Сверху / снизу / внутри / снаружи',
      columns: ['«Внутри / на», «над»', 'Антоним', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<strong>encima de</strong> — на, поверх', '<strong>debajo de</strong> — под',  '<em>encima de la mesa / debajo de la mesa</em>'],
        ['<strong>dentro de</strong> — внутри',     '<strong>fuera de</strong> — снаружи', '<em>dentro de la caja / fuera de la caja</em>'],
        ['<strong>cerca de</strong> — рядом с',     '<strong>lejos de</strong> — далеко от', '<em>cerca de la parada / lejos de la parada</em>'],
        ['<strong>delante de</strong> — перед',     '<strong>detrás de</strong> — за',     '<em>delante de Victoria / detrás de Salvador</em>'],
      ],
    },
    {
      type: 'heading',
      text: 'Синонимические пары',
    },
    {
      type: 'table',
      caption: '«Напротив» и «рядом»',
      columns: ['Вариант 1', 'Вариант 2', 'Перевод'],
      colClasses: ['col-pattern', 'col-pattern', 'col-pattern'],
      rows: [
        ['<strong>frente a</strong>',  '<strong>enfrente de</strong>',  'напротив'],
        ['<strong>junto a</strong>',   '<strong>al lado de</strong>',   'рядом с / возле'],
      ],
    },
    {
      type: 'rule',
      es: '<em>alrededor de</em> indica que algo o alguien <strong>rodea</strong> el objeto de referencia.',
      ru: 'Предлог <em>alrededor de</em> — «вокруг»: расположение по периметру.',
      examples: [
        { es: 'Hay muchas tiendas alrededor de la plaza.', ru: 'Вокруг площади много магазинов.' },
        { es: 'Los niños están alrededor del profesor.', ru: 'Дети — вокруг учителя.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Después de una preposición compuesta se usa <em>mí, ti, él, ella, nosotros/-as, vosotros/-as, ustedes, ellos/-as</em>: <em>delante de mí, detrás de ti, cerca de él</em>.',
      ru: 'После сложных предлогов идут особые формы личных местоимений: <em>mí, ti, él, ella, nosotros/-as, vosotros/-as, ustedes, ellos/-as</em>. Напомним: <em>delante de mí</em>, не «delante de yo». Исключения <em>conmigo / contigo</em> относятся только к <em>con</em>.',
      examples: [
        { es: '¿Quién está detrás de mí?', ru: 'Кто за мной?' },
        { es: 'Se sentó junto a ti.', ru: 'Он сел рядом с тобой.' },
      ],
    },
    {
      type: 'rule',
      es: '<em>frente a</em> = <em>enfrente de</em>; <em>junto a</em> = <em>al lado de</em>. Las dos formas son intercambiables.',
      ru: 'Пары <em>frente a / enfrente de</em> и <em>junto a / al lado de</em> взаимозаменяемы. Иногда <em>al lado de</em> звучит чуть «бытовее», а <em>junto a</em> — нейтральнее.',
      examples: [
        { es: 'La papelería está junto a la academia.', ru: 'Канцтовары рядом с академией.' },
        { es: 'La papelería está al lado de la academia.', ru: 'То же самое.' },
        { es: 'Vivo frente al parque.', ru: 'Живу напротив парка.' },
        { es: 'Vivo enfrente del parque.', ru: 'Живу напротив парка.' },
      ],
    },
    {
      type: 'atencion',
      es: 'No olvidéis las <strong>contracciones</strong> con artículo masculino: <em>de + el = del</em>, <em>a + el = al</em>. Por eso decimos <em>encima del armario</em> (no «encima de el»), <em>frente al cine</em>.',
      ru: 'Не забывайте про слитные формы с мужским артиклем: <em>de + el = del</em>, <em>a + el = al</em>. Поэтому говорим <em>encima del armario</em>, <em>frente al cine</em>, <em>junto al banco</em>.',
    },
  ],

  exercises: [
    {
      id: '112.1',
      title: 'Подберите антоним',
      type: 'match',
      instructions: 'Каждому предлогу — его смысловой антоним.',
      pool: ['debajo de', 'fuera de', 'lejos de', 'detrás de'],
      questions: [
        { id: 'q1', prompt: '<em>encima de</em>',  correct: 'debajo de' },
        { id: 'q2', prompt: '<em>dentro de</em>',  correct: 'fuera de' },
        { id: 'q3', prompt: '<em>cerca de</em>',   correct: 'lejos de' },
        { id: 'q4', prompt: '<em>delante de</em>', correct: 'detrás de' },
      ],
    },

    {
      id: '112.2',
      title: 'Слитные формы',
      type: 'choice',
      instructions: 'Когда мужской артикль сливается с предлогом? Выберите верную форму.',
      questions: [
        { id: 'q1', prompt: '«На шкафу»',         options: ['encima de el armario', 'encima del armario'],  correct: 'encima del armario' },
        { id: 'q2', prompt: '«Напротив кафе»',     options: ['frente a el café', 'frente al café'],          correct: 'frente al café' },
        { id: 'q3', prompt: '«Рядом с банком»',    options: ['junto a el banco', 'junto al banco'],           correct: 'junto al banco' },
        { id: 'q4', prompt: '«Внутри ящика»',       options: ['dentro de el cajón', 'dentro del cajón'],       correct: 'dentro del cajón' },
        { id: 'q5', prompt: '«Внутри коробки»',     options: ['dentro de la caja', 'dentro del caja'],          correct: 'dentro de la caja', explanation: 'С женским артиклем слияния нет.' },
        { id: 'q6', prompt: '«Около центра»',       options: ['cerca de el centro', 'cerca del centro'],         correct: 'cerca del centro' },
        { id: 'q7', prompt: '«Перед телевизором»',  options: ['delante de el televisor', 'delante del televisor'], correct: 'delante del televisor' },
      ],
    },

    {
      id: '112.3',
      title: 'Дополните предлогом',
      type: 'fill',
      instructions: 'Запишите подходящий составной предлог. Выбор — из <em>encima de, debajo de, dentro de, fuera de, cerca de, lejos de, alrededor de, delante de, detrás de, junto a</em>.',
      questions: [
        { id: 'q1', prompt: 'No podemos ir andando a la playa. Está ___ aquí.',           correct: 'lejos de' },
        { id: 'q2', prompt: 'La cola es muy larga. Hay casi cien personas ___ nosotros.', correct: 'delante de' },
        { id: 'q3', prompt: 'No hace falta ir en coche. El cine está ___ mi casa.',        correct: 'cerca de' },
        { id: 'q4', prompt: 'Las tijeras están ___ uno de esos cajones.',                  correct: 'dentro de' },
        { id: 'q5', prompt: 'Por favor, no pongáis los pies ___ la mesa.',                  correct: 'encima de' },
        { id: 'q6', prompt: 'Hay una parada de autobús justo ___ mi casa.',                 correct: 'delante de' },
        { id: 'q7', prompt: 'Ponte ___ mí. Yo he llegado primero.',                          correct: 'detrás de' },
        { id: 'q8', prompt: 'En las fiestas colocan puestos ___ la plaza.',                  correct: 'alrededor de' },
        { id: 'q9', prompt: 'Deja el paraguas ___ la casa.',                                  correct: 'fuera de' },
        { id: 'q10', prompt: 'Voy a sentarme ___ ti, así charlamos.',                          correct: 'junto a' },
      ],
    },

    {
      id: '112.4',
      title: 'Какой предлог уместнее',
      type: 'choice',
      instructions: 'Выберите предлог по смыслу.',
      questions: [
        { id: 'q1', prompt: 'Hay un banco ___ del cine.',                  options: ['junto al', 'junto a el'], correct: 'junto al', explanation: 'Слияние <em>a + el = al</em>; полностью: <em>junto al cine</em>.' },
        { id: 'q2', prompt: 'Saturno está ___ la Tierra.',                  options: ['lejos de', 'cerca de'],   correct: 'lejos de', explanation: 'Логически — Сатурн далеко.' },
        { id: 'q3', prompt: 'Hay una mosca ___ la botella.',                options: ['dentro de', 'fuera de'],  correct: 'dentro de' },
        { id: 'q4', prompt: 'Se han dejado la leche ___ la nevera.',         options: ['dentro de', 'fuera de'],  correct: 'fuera de', explanation: 'Молоко забыли НЕ в холодильнике.' },
        { id: 'q5', prompt: 'He dejado el coche ___ la tienda.',              options: ['delante de', 'dentro de'], correct: 'delante de' },
        { id: 'q6', prompt: 'Tengo una foto ___ la mesa.',                     options: ['encima de', 'debajo de'], correct: 'encima de' },
        { id: 'q7', prompt: 'Las zapatillas están ___ la cama.',               options: ['encima de', 'debajo de'], correct: 'debajo de', explanation: 'Тапки обычно «под кроватью».' },
        { id: 'q8', prompt: 'Hay un parque ___ del colegio.',                  options: ['frente a', 'frente al'],  correct: 'frente al' },
      ],
    },

    {
      id: '112.5',
      title: 'Frente a или enfrente de? Junto a или al lado de?',
      type: 'choice',
      instructions: 'Эти пары взаимозаменяемы. Выберите грамматически правильное оформление (с учётом слитных форм).',
      questions: [
        { id: 'q1', prompt: '«Напротив кино»',                options: ['frente al cine', 'frente a el cine', 'enfrente del cine'], correct: 'frente al cine' },
        { id: 'q2', prompt: '«Напротив кино» (другой вариант)', options: ['enfrente del cine', 'enfrente de el cine'],               correct: 'enfrente del cine' },
        { id: 'q3', prompt: '«Рядом с библиотекой»',           options: ['junto a la librería', 'junto al librería'],                  correct: 'junto a la librería' },
        { id: 'q4', prompt: '«Рядом с аптекой» (другой вариант)', options: ['al lado de la farmacia', 'al lado del farmacia'],         correct: 'al lado de la farmacia' },
        { id: 'q5', prompt: '«Напротив парка»',                 options: ['enfrente del parque', 'enfrente de el parque'],            correct: 'enfrente del parque' },
      ],
    },

    {
      id: '112.6',
      title: 'Местоимения после составного предлога',
      type: 'fill',
      instructions: 'Подставьте в форме после предлога: <em>mí, ti, él, ella, nosotros/-as, vosotros/-as, ustedes, ellos/-as</em>.',
      questions: [
        { id: 'q1', prompt: '¿Quién está detrás de ___? (=я)',           correct: 'mí' },
        { id: 'q2', prompt: 'Se sentó junto a ___. (=ты)',                correct: 'ti' },
        { id: 'q3', prompt: 'Vive cerca de ___. (=мы)',                    correct: ['nosotros', 'nosotras'] },
        { id: 'q4', prompt: 'No me dejas ver. Estás siempre delante de ___. (=я)', correct: 'mí' },
        { id: 'q5', prompt: 'Marta está al lado de ___. (=она)',           correct: 'ella' },
        { id: 'q6', prompt: 'Los gatos están alrededor de ___. (=они)',     correct: ['ellos', 'ellas'] },
        { id: 'q7', prompt: 'Iremos lejos de ___. (=вы, неформ.)',          correct: ['vosotros', 'vosotras'] },
      ],
    },

    {
      id: '112.7',
      title: 'Соберите фразу',
      type: 'fill',
      instructions: 'Расставьте слова в естественном порядке. Не забудьте про <em>al / del</em>.',
      questions: [
        { id: 'q1', prompt: 'un bar / hay / el cine / frente a →',           correct: ['Hay un bar frente al cine.', 'Hay un bar frente al cine'] },
        { id: 'q2', prompt: 'están / detrás / la puerta / los niños / de →', correct: ['Los niños están detrás de la puerta.', 'Los niños están detrás de la puerta'] },
        { id: 'q3', prompt: 'mi casa / lejos de / está / la oficina →',       correct: ['Mi casa está lejos de la oficina.', 'Mi casa está lejos de la oficina'] },
        { id: 'q4', prompt: 'el sofá / dejado / tu mochila / has / debajo de →', correct: ['Has dejado tu mochila debajo del sofá.', 'Has dejado tu mochila debajo del sofá'] },
        { id: 'q5', prompt: 'mucha gente / hay / la plaza / alrededor de →',  correct: ['Hay mucha gente alrededor de la plaza.', 'Hay mucha gente alrededor de la plaza'] },
      ],
    },

    {
      id: '112.8',
      title: 'Сопоставьте противоположные предлоги',
      type: 'match',
      instructions: 'Найдите парные значения.',
      pool: ['debajo de la mesa', 'fuera de la nevera', 'lejos de aquí', 'detrás del coche'],
      questions: [
        { id: 'q1', prompt: '<em>encima de la mesa</em>',  correct: 'debajo de la mesa' },
        { id: 'q2', prompt: '<em>dentro de la nevera</em>', correct: 'fuera de la nevera' },
        { id: 'q3', prompt: '<em>cerca de aquí</em>',       correct: 'lejos de aquí' },
        { id: 'q4', prompt: '<em>delante del coche</em>',   correct: 'detrás del coche' },
      ],
    },

    {
      id: '112.9',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна неудачная фраза.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['encima del televisor', 'encima de el televisor', 'encima de la mesa', 'encima del armario'], correct: 'encima de el televisor', explanation: 'Должно быть <em>encima del</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['detrás de mí', 'detrás de yo', 'detrás de ti', 'detrás de ella'], correct: 'detrás de yo', explanation: 'После предлога — <em>mí</em>, не <em>yo</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['frente al cine', 'frente del cine', 'enfrente del cine', 'frente a la casa'], correct: 'frente del cine', explanation: '<em>frente</em> требует <em>a</em>; правильно <em>frente al</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['al lado de la farmacia', 'al lado del banco', 'al lado el banco', 'junto al banco'], correct: 'al lado el banco', explanation: 'Должно быть <em>al lado del banco</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['junto a la academia', 'junto al hospital', 'junto el hospital', 'al lado de la academia'], correct: 'junto el hospital', explanation: '<em>junto</em> требует <em>a</em>: <em>junto al hospital</em>.' },
      ],
    },

    {
      id: '112.10',
      title: 'Где находится предмет',
      type: 'multi',
      instructions: 'Какие фразы означают, что объект находится <strong>внутри</strong> другого?',
      questions: [
        {
          id: 'q1',
          prompt: 'Отметьте все «внутри»:',
          options: [
            'Las llaves están dentro del cajón.',
            'Los niños están detrás de la puerta.',
            'Hay un gato dentro de la caja.',
            'El móvil está fuera de la mochila.',
            'El móvil está dentro de la mochila.',
            'La papelería está junto a la academia.',
          ],
          correct: ['Las llaves están dentro del cajón.', 'Hay un gato dentro de la caja.', 'El móvil está dentro de la mochila.'],
          explanation: 'Только три фразы с <em>dentro de</em>.',
        },
      ],
    },

    {
      id: '112.11',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Прослушайте и запишите. Учтите слитные формы и диакритику.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Las llaves están dentro del cajón.',          correct: ['Las llaves están dentro del cajón.', 'Las llaves están dentro del cajón'] },
        { id: 'q2', prompt: '', audio: 'Aurelio vive enfrente del parque.',            correct: ['Aurelio vive enfrente del parque.', 'Aurelio vive enfrente del parque'] },
        { id: 'q3', prompt: '', audio: 'Hay muchas tiendas alrededor de la plaza.',    correct: ['Hay muchas tiendas alrededor de la plaza.', 'Hay muchas tiendas alrededor de la plaza'] },
        { id: 'q4', prompt: '', audio: 'No te pongas detrás de mí.',                    correct: ['No te pongas detrás de mí.', 'No te pongas detrás de mí'] },
        { id: 'q5', prompt: '', audio: 'El estadio está lejos de aquí.',                correct: ['El estadio está lejos de aquí.', 'El estadio está lejos de aquí'] },
        { id: 'q6', prompt: '', audio: 'Hay un quiosco junto a la farmacia.',           correct: ['Hay un quiosco junto a la farmacia.', 'Hay un quiosco junto a la farmacia'] },
      ],
    },

    {
      id: '112.12',
      title: 'Опишите расположение',
      type: 'fill',
      instructions: 'Готовая ситуация: соберите предложение со словами в скобках.',
      questions: [
        { id: 'q1', prompt: '(la foto / el piano / encima de) →',          correct: ['La foto está encima del piano.', 'La foto está encima del piano'] },
        { id: 'q2', prompt: '(la mochila / la silla / debajo de) →',        correct: ['La mochila está debajo de la silla.', 'La mochila está debajo de la silla'] },
        { id: 'q3', prompt: '(el supermercado / mi casa / cerca de) →',     correct: ['El supermercado está cerca de mi casa.', 'El supermercado está cerca de mi casa'] },
        { id: 'q4', prompt: '(los niños / la mesa / alrededor de) →',        correct: ['Los niños están alrededor de la mesa.', 'Los niños están alrededor de la mesa'] },
        { id: 'q5', prompt: '(la papelería / la academia / al lado de) →',   correct: ['La papelería está al lado de la academia.', 'La papelería está al lado de la academia'] },
      ],
    },
  ],
};
