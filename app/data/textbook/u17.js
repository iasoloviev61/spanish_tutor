// ============================================================
// Unidad 17 — Superlativo
// el más alto / el menos trabajador / mayor, menor, mejor, peor.
// Правила пересказаны своими словами; примеры — оригинальные.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u17 = {
  id: 'u17',
  number: 17,
  title: { es: 'la más alta, el menos trabajador', topic: 'Superlativo' },
  topicRu: 'Превосходная степень: el / la / los / las más (menos) ...',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'El <strong>superlativo</strong> sirve para comparar a alguien o algo con un grupo: <em>el más alto, los más cómodos, el menos trabajador</em>.',
      ru: 'Превосходная степень показывает, что один член группы выделяется по какому-то качеству — «самый высокий», «самые удобные», «наименее работящий». В испанском она строится с определённым артиклем и словами <em>más</em> или <em>menos</em>.',
      examples: [
        { es: 'Carla es la más alta de sus hermanos.', ru: 'Карла — самая высокая из своих братьев и сестёр.' },
        { es: 'Zapatos Loto, los más cómodos.', ru: 'Обувь Loto — самая удобная.' },
        { es: 'David es el menos trabajador de sus amigos.', ru: 'Давид — наименее работящий среди друзей.' },
        { es: 'El Teide es la montaña más alta de España.', ru: 'Тейде — самая высокая гора Испании.' },
      ],
    },
    {
      type: 'heading',
      text: 'Образование',
    },
    {
      type: 'table',
      caption: 'Formación del superlativo',
      columns: ['Тип', 'Схема', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['Superioridad <strong>(+)</strong>', '<em>el / la / los / las</em> (+ существительное) + <em>más</em> + прилагательное (+ <em>de</em>)', '<em>Alberto es el más trabajador de su familia.</em><br><em>El Everest es la montaña más alta del mundo.</em>'],
        ['Inferioridad <strong>(−)</strong>', '<em>el / la / los / las</em> (+ существительное) + <em>menos</em> + прилагательное (+ <em>de</em>)', '<em>Hugo es el menos hablador de mis amigos.</em><br><em>Paraguay es el país menos poblado de América del Sur.</em>'],
      ],
    },
    {
      type: 'heading',
      text: 'Особые формы',
    },
    {
      type: 'table',
      caption: 'Formas irregulares',
      columns: ['Прилагательное', 'Превосходная форма', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['+ <em>viejo</em>', '<em>el / la mayor, los / las mayores</em>', '<em>Eva es la mayor de sus hermanos.</em>'],
        ['− <em>viejo</em> (= младший)', '<em>el / la menor, los / las menores</em>', '<em>Pablo es el menor de la clase.</em>'],
        ['+ <em>bueno</em>', '<em>el / la mejor, los / las mejores</em>', '<em>Estas naranjas son las mejores de España.</em>'],
        ['+ <em>malo</em>', '<em>el / la peor, los / las peores</em>', '<em>Ese restaurante es el peor de la zona.</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Después del superlativo: <em>de + nombre</em> (la mayor parte de los casos), <em>que + verbo</em> en oraciones de relativo. <em>mejor / peor</em> идут <strong>перед</strong> существительным.',
      ru: 'После превосходной степени: <strong>de + существительное</strong> — для группы, в которой сравнивается («из ...»). <strong>que + глагол</strong> — если за ней идёт целое предложение («из всех, что …»). И ещё: <em>mejor / peor</em> ставится <strong>перед</strong> существительным: <em>el mejor alumno</em>, не «el alumno mejor».',
      // дополнение в виде отдельных примеров
    },
    {
      type: 'table',
      caption: 'de / que + ...',
      columns: ['Конструкция', 'Пример'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['<em>mejor / peor</em> + сущ. + <em>de</em> + сущ.', '<em>Julián es el mejor alumno de la clase.</em>'],
        ['superlativo + <em>de</em> + сущ.', '<em>Hoy es el día más feliz de mi vida.</em>'],
        ['superlativo + <em>que</em> + глагол', '<em>Elena es la chica más alegre que he conocido.</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'El adjetivo del superlativo <strong>concuerda</strong> en género y número con la persona, animal o cosa de la que se habla.',
      ru: 'Прилагательное в превосходной степени, как и в обычной, <strong>согласуется</strong> по роду и числу с тем, о ком (или о чём) идёт речь.',
      examples: [
        { es: 'Raúl es el más cariñoso de sus hermanos.', ru: 'Рауль — самый ласковый из своих братьев и сестёр.' },
        { es: 'Carola y Elena son las más simpáticas del grupo.', ru: 'Карола и Елена — самые приятные в группе.' },
      ],
    },
    {
      type: 'rule',
      es: 'A veces no es necesario mencionar el grupo si <strong>está claro por el contexto</strong>.',
      ru: 'Группу, с которой сравнивают, можно не упоминать, если она ясна из контекста: <em>Este televisor es el más caro</em> (в этом магазине), <em>Laura es la más alta</em> (в классе).',
      examples: [
        { es: 'Este televisor es el más caro.', ru: 'Этот телевизор — самый дорогой.' },
        { es: 'Laura es la más alta.', ru: 'Лаура — самая высокая.' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '17.1',
      title: 'Образуйте превосходную степень',
      type: 'fill',
      instructions: 'Дополните фразу в форме <em>el / la / los / las (+ сущ.) más / menos + прилагательное</em>. Согласуйте по роду и числу.',
      questions: [
        { id: 'q1', prompt: '¿Cuál es <em>(ciudad, + bonito)</em> ___ de Cuba?', correct: ['la ciudad más bonita'] },
        { id: 'q2', prompt: '¿Cuál es <em>(país, − poblado)</em> ___ de América Latina?', correct: ['el país menos poblado'] },
        { id: 'q3', prompt: '¿Cuál es <em>(ciudad, − contaminado)</em> ___ de España?', correct: ['la ciudad menos contaminada'] },
        { id: 'q4', prompt: '¿Cuál es <em>(río, + largo)</em> ___ de México?', correct: ['el río más largo'] },
        { id: 'q5', prompt: '¿Cuál es <em>(capital, + alto)</em> ___ de América del Sur?', correct: ['la capital más alta'] },
        { id: 'q6', prompt: '¿Cuál es <em>(isla, + pequeño)</em> ___ del Caribe?', correct: ['la isla más pequeña'] },
        { id: 'q7', prompt: '¿Cuál es <em>(catedral, + antiguo)</em> ___ de México?', correct: ['la catedral más antigua'] },
      ],
    },

    {
      id: '17.2',
      title: 'Сравните внутри группы',
      type: 'fill',
      instructions: 'Образец: <em>(simpático: Lucas ++, Marina −, Leo +)</em> → <em>Lucas es el más simpático de sus amigos.</em> Опирайтесь на знаки <code>+</code> / <code>−</code>.',
      questions: [
        { id: 'q1', prompt: '<em>(simpático: Lucas ++, Marina −, Leo +)</em> — Marina es ___ .', correct: ['la menos simpática'] },
        { id: 'q2', prompt: '<em>(trabajador: Lucas +, Marina ++, Leo ++)</em> — Marina y Leo son ___ .', correct: ['los más trabajadores'] },
        { id: 'q3', prompt: '<em>(trabajador: Lucas +, Marina ++, Leo ++)</em> — Lucas es ___ .', correct: ['el menos trabajador'] },
        { id: 'q4', prompt: '<em>(elegante: Lucas −, Marina ++, Leo +)</em> — Marina es ___ .', correct: ['la más elegante'] },
        { id: 'q5', prompt: '<em>(elegante: Lucas −, Marina ++, Leo +)</em> — Lucas es ___ .', correct: ['el menos elegante'] },
        { id: 'q6', prompt: '<em>(atractivo: Lucas +, Marina +, Leo −)</em> — Lucas y Marina son ___ .', correct: ['los más atractivos'] },
      ],
    },

    {
      id: '17.3',
      title: 'mejor, peor, mayor, menor — без más и menos',
      type: 'fill',
      instructions: 'Используйте особую (нерегулярную) форму превосходной степени.',
      questions: [
        { id: 'q1', prompt: 'Julián es ___ alumno de la clase. (+ bueno)', correct: 'el mejor' },
        { id: 'q2', prompt: 'Estas naranjas son ___ de España. (+ bueno)', correct: 'las mejores' },
        { id: 'q3', prompt: 'Eva es ___ de sus hermanos. (+ viejo = старшая)', correct: 'la mayor' },
        { id: 'q4', prompt: 'Pablo es ___ de la clase. (− viejo = младший)', correct: 'el menor' },
        { id: 'q5', prompt: 'Ese restaurante es ___ de la zona. (+ malo)', correct: 'el peor' },
        { id: 'q6', prompt: 'Aquellos hoteles son ___ del barrio. (+ malo)', correct: 'los peores' },
      ],
    },

    {
      id: '17.4',
      title: 'de или que?',
      type: 'choice',
      instructions: 'Перед существительным — <em>de</em>, перед глаголом — <em>que</em>.',
      questions: [
        { id: 'q1', prompt: 'Julia es la chica más alegre ___ conozco.', options: ['de', 'que'], correct: 'que' },
        { id: 'q2', prompt: 'Para mí, el café de Colombia es el mejor ___ mundo.', options: ['de', 'del', 'que el'], correct: 'del', explanation: 'de + el = del.' },
        { id: 'q3', prompt: 'Las ruinas de Machu Picchu son las más impresionantes ___ he visto.', options: ['de', 'que'], correct: 'que' },
        { id: 'q4', prompt: 'El día de mi boda fue el más feliz ___ mi vida.', options: ['de', 'que'], correct: 'de' },
        { id: 'q5', prompt: '¿Cuál es el país más interesante ___ has visitado?', options: ['de', 'que'], correct: 'que' },
        { id: 'q6', prompt: 'Esther es la mayor ___ mis hermanas.', options: ['de', 'que'], correct: 'de' },
      ],
    },

    {
      id: '17.5',
      title: 'Согласование по роду и числу',
      type: 'fill',
      instructions: 'Поставьте артикль и прилагательное в нужной форме.',
      questions: [
        { id: 'q1', prompt: 'Marta es ___ alta de la clase.', correct: 'la más' },
        { id: 'q2', prompt: 'Estos coches son ___ caros del concesionario.', correct: 'los más' },
        { id: 'q3', prompt: 'Aquellas chicas son ___ simpáticas del grupo.', correct: 'las más' },
        { id: 'q4', prompt: 'Mi tío es ___ trabajador de la familia.', correct: 'el menos', placeholder: 'el menos / el más / ...' },
        { id: 'q5', prompt: 'Estas casas son ___ bonitas del pueblo. (− bonito)', correct: 'las menos' },
        { id: 'q6', prompt: 'Pedro y Luis son ___ jóvenes del equipo.', correct: 'los más' },
      ],
    },

    {
      id: '17.6',
      title: 'Где должны стоять mejor / peor — найдите верные фразы',
      type: 'multi',
      instructions: '<em>mejor</em> и <em>peor</em> ставятся <strong>перед</strong> существительным. Отметьте все правильные варианты.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы построены правильно?',
          options: [
            'Es el mejor alumno de la clase.',
            'Es el alumno mejor de la clase.',
            'Es el peor restaurante del barrio.',
            'Es el restaurante peor del barrio.',
            'Es el mejor café que he probado.',
            'Es la peor película del año.',
            'Es la película peor del año.',
          ],
          correct: [
            'Es el mejor alumno de la clase.',
            'Es el peor restaurante del barrio.',
            'Es el mejor café que he probado.',
            'Es la peor película del año.',
          ],
          explanation: '<em>mejor / peor</em> идут перед существительным.',
        },
      ],
    },

    {
      id: '17.7',
      title: 'Сопоставьте признак и форму',
      type: 'match',
      instructions: 'Подберите для каждой формулировки правильную нерегулярную форму превосходной степени.',
      pool: ['el mejor', 'el peor', 'el mayor', 'el menor', 'la mejor', 'la peor', 'la mayor', 'la menor'],
      questions: [
        { id: 'q1', prompt: '+ <em>bueno</em>, мужской, ед. →', correct: 'el mejor' },
        { id: 'q2', prompt: '+ <em>malo</em>, мужской, ед. →', correct: 'el peor' },
        { id: 'q3', prompt: 'старший (+ viejo), мужской, ед. →', correct: 'el mayor' },
        { id: 'q4', prompt: 'младший (− viejo), мужской, ед. →', correct: 'el menor' },
        { id: 'q5', prompt: '+ <em>bueno</em>, женский, ед. →', correct: 'la mejor' },
        { id: 'q6', prompt: '+ <em>malo</em>, женский, ед. →', correct: 'la peor' },
        { id: 'q7', prompt: 'старшая, женский, ед. →', correct: 'la mayor' },
        { id: 'q8', prompt: 'младшая, женский, ед. →', correct: 'la menor' },
      ],
    },

    {
      id: '17.8',
      title: 'Слоганы для рекламы',
      type: 'fill',
      instructions: 'Оформите фразу как рекламный слоган с превосходной степенью. Образец: <em>(refresco, + sano)</em> → <em>el refresco más sano</em>.',
      questions: [
        { id: 'q1', prompt: 'Galletas Buenavida, <em>(+ bueno)</em> ___ para el desayuno.', correct: ['las mejores'] },
        { id: 'q2', prompt: 'Supermercados Ahorro, <em>(+ económico)</em> ___ .', correct: ['los más económicos'] },
        { id: 'q3', prompt: 'Zumos Vital, <em>(+ sano)</em> ___ .', correct: ['los más sanos'] },
        { id: 'q4', prompt: 'Reloj Regina, <em>(+ caro)</em> ___ del mundo.', correct: ['el más caro'] },
        { id: 'q5', prompt: 'Ropa deportiva Libre, <em>(+ cómodo)</em> ___ y <em>(+ elegante)</em> ___ .', correct: ['la más cómoda'] },
        { id: 'q6', prompt: 'Leche fresca Norte, <em>(+ bueno)</em> ___ para su familia.', correct: ['la mejor'] },
      ],
    },

    {
      id: '17.9',
      title: 'Где ошибка?',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с грамматической ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Es el más alto de la clase.', 'Es el más alto que la clase.', 'Es el más alto que he visto.', 'Es la más alta del grupo.'], correct: 'Es el más alto que la clase.', explanation: 'Перед существительным — <em>de</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Es el mejor alumno.', 'Es el alumno más bueno.', 'Es el peor alumno.', 'Es el mejor.'], correct: 'Es el alumno más bueno.', explanation: 'У <em>bueno</em> в превосходной степени особая форма <em>mejor</em>; обычно <em>más bueno</em> не используется.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Marta es la más alta.', 'Marta es el más alta.', 'Marta es la mayor.', 'Marta es la mejor de la clase.'], correct: 'Marta es el más alta.', explanation: 'Артикль должен быть женского рода — <em>la</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Estas naranjas son las mejores.', 'Estas naranjas son las mejor.', 'Estos chicos son los mejores.', 'Estas chicas son las menos altas.'], correct: 'Estas naranjas son las mejor.', explanation: '<em>mejor</em> во мн. ч. → <em>mejores</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Es el día más feliz de mi vida.', 'Es el día más feliz que mi vida.', 'Es la chica más alegre que he conocido.', 'Es el mejor día del año.'], correct: 'Es el día más feliz que mi vida.', explanation: 'Перед существительным — <em>de</em>.' },
      ],
    },

    {
      id: '17.10',
      title: 'Перевод с русского',
      type: 'fill',
      instructions: 'Переведите фразу. Используйте превосходную степень.',
      questions: [
        { id: 'q1', prompt: 'Эверест — самая высокая гора в мире.', correct: ['El Everest es la montaña más alta del mundo.', 'El Everest es la montaña más alta del mundo'] },
        { id: 'q2', prompt: 'Карла — самая старшая из своих сестёр.', correct: ['Carla es la mayor de sus hermanas.', 'Carla es la mayor de sus hermanas'] },
        { id: 'q3', prompt: 'Это лучший фильм, который я видел.', correct: ['Es la mejor película que he visto.', 'Es la mejor película que he visto', 'Es el mejor filme que he visto.', 'Es el mejor filme que he visto'] },
        { id: 'q4', prompt: 'Эти туфли — самые удобные.', correct: ['Estos zapatos son los más cómodos.', 'Estos zapatos son los más cómodos'] },
        { id: 'q5', prompt: 'Парагвай — наименее населённая страна в Южной Америке.', correct: ['Paraguay es el país menos poblado de América del Sur.', 'Paraguay es el país menos poblado de América del Sur'] },
      ],
    },

    {
      id: '17.11',
      title: 'Дополните без указания группы',
      type: 'fill',
      instructions: 'Группа ясна из контекста — упоминать её не нужно. Поставьте только <em>el / la / los / las</em> + <em>más / menos</em> + прилагательное.',
      questions: [
        { id: 'q1', prompt: 'En esta tienda, este televisor es ___ caro.', correct: 'el más' },
        { id: 'q2', prompt: 'En la clase, Laura es ___ alta.', correct: 'la más' },
        { id: 'q3', prompt: 'En el equipo, estos jugadores son ___ rápidos.', correct: 'los más' },
        { id: 'q4', prompt: 'En el grupo, estas chicas son ___ simpáticas.', correct: 'las más' },
        { id: 'q5', prompt: 'En la familia, soy ___ joven. (femenino)', correct: 'la menor' },
        { id: 'q6', prompt: 'En el restaurante, este postre es ___ . (+ bueno)', correct: 'el mejor' },
      ],
    },

    {
      id: '17.12',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите услышанное полностью, с пунктуацией и диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Carla es la más alta de sus hermanos.', correct: ['Carla es la más alta de sus hermanos.', 'Carla es la más alta de sus hermanos'] },
        { id: 'q2', prompt: '', audio: 'David es el menos trabajador de sus amigos.', correct: ['David es el menos trabajador de sus amigos.', 'David es el menos trabajador de sus amigos'] },
        { id: 'q3', prompt: '', audio: 'Es el mejor alumno de la clase.', correct: ['Es el mejor alumno de la clase.', 'Es el mejor alumno de la clase'] },
        { id: 'q4', prompt: '', audio: 'Hoy es el día más feliz de mi vida.', correct: ['Hoy es el día más feliz de mi vida.', 'Hoy es el día más feliz de mi vida'] },
        { id: 'q5', prompt: '', audio: 'Estas naranjas son las mejores de España.', correct: ['Estas naranjas son las mejores de España.', 'Estas naranjas son las mejores de España'] },
      ],
    },
  ],
};
