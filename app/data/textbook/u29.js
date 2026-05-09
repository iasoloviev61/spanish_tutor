// ============================================================
// Unidad 29 — Relativos (2): cuyo, donde, adonde, cuando
// Притяжательное относительное cuyo и наречные donde / cuando.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u29 = {
  id: 'u29',
  number: 29,
  title: { es: 'cuyo, donde, cuando…', topic: 'Relativos (2)' },
  topicRu: 'Относительные cuyo, donde, cuando',

  theory: [
    {
      type: 'rule',
      es: 'Se usa <strong>cuyo, cuya, cuyos, cuyas</strong> para indicar <em>posesión</em> u otro tipo de relación: parentesco, procedencia, etc. Se traduce como <em>«чей»</em>.',
      ru: '<em>cuyo / cuya / cuyos / cuyas</em> — относительное «чей / чья / чьи»: указывает на принадлежность или родственную/иную связь. Из двух фраз с <em>su / sus</em> делает одну.',
      examples: [
        { es: 'Tengo un amigo. Su padre es fotógrafo. → Tengo un amigo <strong>cuyo</strong> padre es fotógrafo.', ru: 'У меня друг, отец которого — фотограф.' },
        { es: 'Esa es la persona <strong>cuyo</strong> perro ganó el concurso.', ru: 'Это тот человек, чья собака выиграла конкурс.' },
        { es: 'Los alumnos <strong>cuyos</strong> nombres diga pueden salir.', ru: 'Ученики, чьи имена я назову, могут выйти.' },
      ],
    },
    {
      type: 'heading',
      text: 'Согласование cuyo',
    },
    {
      type: 'rule',
      es: '<strong>cuyo</strong> tiene la misma forma (masculino, femenino, singular o plural) que <em>el nombre al que acompaña</em>, no el «poseedor».',
      ru: '<em>cuyo</em> согласуется не с тем, кто «обладает», а с тем, чем обладают — со словом, которое идёт <strong>сразу за ним</strong>. Это главная ловушка: ориентируйтесь на следующее существительное, не на предыдущее.',
      examples: [
        { es: 'Conozco a una chica <strong>cuya</strong> hermana ha escalado el Aconcagua.', ru: 'У меня есть знакомая, чья сестра поднялась на Аконкагуа. (<em>cuya</em> — по <em>hermana</em>)' },
        { es: 'Conozco a un señor <strong>cuyos</strong> hijos han estudiado Físicas.', ru: 'Я знаю человека, чьи дети учились на физическом. (<em>cuyos</em> — по <em>hijos</em>)' },
        { es: 'Ese es el escritor <strong>de cuyos</strong> libros te he hablado.', ru: 'Это тот писатель, о книгах которого я тебе говорил.' },
      ],
    },
    {
      type: 'table',
      caption: 'Формы cuyo',
      columns: ['Род / число', 'Форма', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['м. р., ед. ч.',     '<em>cuyo</em>',   '<em>el chico cuyo padre…</em>'],
        ['ж. р., ед. ч.',      '<em>cuya</em>',   '<em>la chica cuya madre…</em>'],
        ['м. р., мн. ч.',      '<em>cuyos</em>',  '<em>los chicos cuyos hijos…</em>'],
        ['ж. р., мн. ч.',      '<em>cuyas</em>',  '<em>las chicas cuyas hijas…</em>'],
      ],
    },
    {
      type: 'rule',
      es: '<strong>cuyo</strong> puede ir precedido de preposición: <em>de cuyo, en cuya, con cuyos…</em>',
      ru: 'Перед <em>cuyo</em> может стоять предлог: <em>de, en, con, a, por…</em>. Тогда конструкция получается: <em>предлог + cuyo + сущ</em>.',
      examples: [
        { es: 'Ese señor es un escritor. Te he hablado de sus libros. → Ese es el escritor <strong>de cuyos</strong> libros te he hablado.', ru: 'Это писатель, о чьих книгах я тебе говорил.' },
        { es: 'Ese es el profesor <strong>en cuya</strong> casa fue la fiesta.', ru: 'Это преподаватель, в чьём доме была вечеринка.' },
      ],
    },
    {
      type: 'atencion',
      es: '<em>cuyo</em> es claramente formal y escrito. En el habla cotidiana se sustituye con paráfrasis: <em>el chico al que su padre…</em> o <em>el escritor del que te hablé sus libros</em>. En textos cuidados, no obstante, se sigue usando.',
      ru: '<em>cuyo</em> ощутимо книжное, в разговорной речи его часто избегают через перефраз: <em>el chico cuyo padre es médico → el chico que tiene un padre médico</em>. Но в письменной норме и в учебниках используется регулярно.',
    },
    {
      type: 'heading',
      text: 'donde / adonde — место',
    },
    {
      type: 'rule',
      es: 'Se usa <strong>donde</strong> y <strong>adonde</strong> para referirse a <em>lugares</em>.',
      ru: '<em>donde</em> и <em>adonde</em> заменяют относительные с предлогом, когда речь идёт о месте — «где» и «куда».',
      examples: [
        { es: 'Esta es la casa <strong>donde</strong> nació Cervantes.', ru: 'Это дом, где родился Сервантес.' },
        { es: 'Me gustó mucho el restaurante <strong>donde</strong> comimos ayer.', ru: 'Мне очень понравился ресторан, где мы вчера ели.' },
        { es: 'Esta es la piscina <strong>adonde</strong> van los niños en verano.', ru: 'Это бассейн, куда дети ходят летом.' },
      ],
    },
    {
      type: 'table',
      caption: 'donde / adonde и эквиваленты',
      columns: ['Форма', 'Заменяет', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<em>donde</em>',  '<em>en el que / en la que / en los que / en las que</em>', '<em>la casa donde nació = la casa en la que nació</em>'],
        ['<em>adonde</em>', '<em>al que / a la que / a los que / a las que</em>',       '<em>la piscina adonde van = la piscina a la que van</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Cuando hay movimiento <em>«куда»</em>, se prefiere <strong>adonde</strong>; cuando es <em>«где»</em> (sin movimiento o con preposiciones <em>de, desde, por, hacia</em>), se usa <strong>donde</strong>: <em>la ciudad de donde vengo, el pueblo por donde pasamos</em>. Variante <em>a donde</em> separado también es válida.',
      ru: '«Куда» (с движением) — обычно <em>adonde</em>; «где» — <em>donde</em>. С другими предлогами места (<em>de, desde, por, hacia</em>) ставят <em>donde</em>: <em>la ciudad <strong>de</strong> donde vengo</em>, <em>el pueblo <strong>por</strong> donde pasamos</em>. Раздельное <em>a donde</em> тоже допустимо.',
    },
    {
      type: 'heading',
      text: 'cuando — время',
    },
    {
      type: 'rule',
      es: 'Se usa <strong>cuando</strong> para referirse a una <em>expresión de tiempo</em>. Equivale a <em>en el que / en la que…</em>.',
      ru: '<em>cuando</em> отсылает к выражению времени — «когда». Эквивалент <em>en el que / en la que / en los que…</em> в значении времени.',
      examples: [
        { es: 'El verano <strong>cuando</strong> nos conocimos fue muy especial.', ru: 'Лето, когда мы познакомились, было особенным.' },
        { es: 'Recuerdo aquel día <strong>cuando</strong> llegaste por primera vez.', ru: 'Я помню тот день, когда ты впервые приехал.' },
        { es: 'Recuerdo una época <strong>cuando</strong> no había muchos coches.', ru: 'Я помню время, когда машин было мало.' },
      ],
    },
    {
      type: 'atencion',
      es: 'En la lengua escrita actual también se usa mucho <em>en el que / en la que</em> en lugar de <em>cuando</em>: <em>la época en la que vivíamos</em>. Ambos son correctos.',
      ru: 'Часто вместо <em>cuando</em> пишут <em>en el que / en la que / en los que…</em>: <em>la época cuando vivíamos = la época en la que vivíamos</em>. Оба варианта корректны.',
    },
  ],

  exercises: [
    {
      id: '29.1',
      title: 'Соедините фразу с cuyo',
      type: 'fill',
      instructions: 'Соедините две фразы в одну, заменив <em>su / sus</em> на нужную форму <em>cuyo</em>. Запишите итоговую фразу <strong>целиком</strong>.',
      questions: [
        { id: 'q1', prompt: 'Esa es la tienda. Su dueño es mi tío. →',                                  correct: ['Esa es la tienda cuyo dueño es mi tío.', 'Esa es la tienda cuyo dueño es mi tío'] },
        { id: 'q2', prompt: 'Mi madre tiene una amiga. Su hija está en mi clase. → Mi madre tiene una amiga ___.', correct: ['cuya hija está en mi clase', 'cuya hija está en mi clase.'] },
        { id: 'q3', prompt: 'Conozco a un chico. Su madre es capitán del ejército. → Conozco a un chico ___.', correct: ['cuya madre es capitán del ejército', 'cuya madre es capitán del ejército.'] },
        { id: 'q4', prompt: 'Lorenzo conoce a un profesor. Sus hijos hablan cuatro idiomas. → Lorenzo conoce a un profesor ___.', correct: ['cuyos hijos hablan cuatro idiomas', 'cuyos hijos hablan cuatro idiomas.'] },
        { id: 'q5', prompt: 'Tengo un primo. Su mujer dirige una multinacional. → Tengo un primo ___.', correct: ['cuya mujer dirige una multinacional', 'cuya mujer dirige una multinacional.'] },
        { id: 'q6', prompt: 'Tengo una abuela. Pasa las vacaciones en su pueblo. → Tengo una abuela ___.', correct: ['que pasa las vacaciones en su pueblo', 'que pasa las vacaciones en su pueblo.'], explanation: 'Здесь нет «принадлежности», просто действие — обычное <em>que</em>.' },
        { id: 'q7', prompt: 'Tengo unas amigas. Sus padres veranean en Asturias. → Tengo unas amigas ___.', correct: ['cuyos padres veranean en Asturias', 'cuyos padres veranean en Asturias.'] },
        { id: 'q8', prompt: 'Me he encontrado con una señora. Estoy haciendo un mueble para sus hijas. → Me he encontrado con una señora ___.', correct: ['para cuyas hijas estoy haciendo un mueble', 'para cuyas hijas estoy haciendo un mueble.'] },
      ],
    },

    {
      id: '29.2',
      title: 'Выберите форму cuyo',
      type: 'choice',
      instructions: 'Какая форма <em>cuyo</em> правильна? Помните: согласуется со словом <strong>после</strong> него.',
      questions: [
        { id: 'q1', prompt: 'Es la persona ___ perro ganó el concurso.',     options: ['cuyo', 'cuya', 'cuyos', 'cuyas'], correct: 'cuyo' },
        { id: 'q2', prompt: 'Es la persona ___ hija habla ruso.',             options: ['cuyo', 'cuya', 'cuyos', 'cuyas'], correct: 'cuya' },
        { id: 'q3', prompt: 'Son los autores ___ libros leemos.',              options: ['cuyo', 'cuya', 'cuyos', 'cuyas'], correct: 'cuyos' },
        { id: 'q4', prompt: 'Son las amigas ___ casas están vacías.',           options: ['cuyo', 'cuya', 'cuyos', 'cuyas'], correct: 'cuyas' },
        { id: 'q5', prompt: 'Es el escritor de ___ obras te hablé.',             options: ['cuyo', 'cuya', 'cuyos', 'cuyas'], correct: 'cuyas' },
        { id: 'q6', prompt: 'Es el chico ___ padres son arquitectos.',            options: ['cuyo', 'cuya', 'cuyos', 'cuyas'], correct: 'cuyos' },
        { id: 'q7', prompt: 'Es la profesora en ___ casa fue la fiesta.',         options: ['cuyo', 'cuya', 'cuyos', 'cuyas'], correct: 'cuya' },
        { id: 'q8', prompt: 'Son los alumnos ___ nombres voy a leer.',             options: ['cuyo', 'cuya', 'cuyos', 'cuyas'], correct: 'cuyos' },
      ],
    },

    {
      id: '29.3',
      title: 'Опиши соседей через cuyo',
      type: 'fill',
      instructions: 'По таблице: <em>Sr. Palacios — su mujer da clases en la universidad; Alba y Silvia — su piso está enfrente del nuestro; Familia Torroja — sus perros ladran por las noches; Alberto — hicimos una fiesta en su casa; Sra. Albéniz — sus hijas bailan muy bien; Pablo y Teresa — su gata nos visita</em>. Допишите ответ с <em>cuyo / cuya / cuyos / cuyas</em>.',
      questions: [
        { id: 'q1', prompt: '¿Quién es el Sr. Palacios? — Es el hombre ___ da clases en la universidad.',         correct: 'cuya mujer' },
        { id: 'q2', prompt: '¿Quiénes son Alba y Silvia? — Son las chicas ___ está enfrente del nuestro.',          correct: 'cuyo piso' },
        { id: 'q3', prompt: '¿Quiénes son los Torroja? — Son los vecinos ___ ladran por las noches.',                correct: 'cuyos perros' },
        { id: 'q4', prompt: '¿Quién es Alberto? — Es el chico en ___ hicimos una fiesta.',                            correct: 'cuya casa' },
        { id: 'q5', prompt: '¿Quién es la Sra. Albéniz? — Es la señora ___ bailan muy bien.',                         correct: 'cuyas hijas' },
        { id: 'q6', prompt: '¿Quiénes son Pablo y Teresa? — Son los vecinos ___ nos visita todas las tardes.',          correct: 'cuya gata' },
      ],
    },

    {
      id: '29.4',
      title: 'donde, adonde или cuando?',
      type: 'fill',
      instructions: 'Допишите подходящее наречное относительное.',
      questions: [
        { id: 'q1', prompt: 'Rocío es la dueña de la casa ___ vive Matías.',         correct: 'donde' },
        { id: 'q2', prompt: 'Esta es la escuela ___ estudié.',                          correct: 'donde' },
        { id: 'q3', prompt: 'Son los domingos ___ más gente viene.',                     correct: 'cuando' },
        { id: 'q4', prompt: 'Este es el edificio ___ trabaja Marisa.',                    correct: 'donde' },
        { id: 'q5', prompt: 'Lima es la ciudad ___ está enterrado Pizarro.',                correct: 'donde' },
        { id: 'q6', prompt: 'Esta es la dirección ___ tienes que mandar el paquete.',        correct: ['adonde', 'a donde', 'donde'] },
        { id: 'q7', prompt: 'Normalmente es a las dos ___ comemos.',                          correct: 'cuando' },
        { id: 'q8', prompt: 'El país ___ conocí a mi marido fue Colombia.',                    correct: 'donde' },
        { id: 'q9', prompt: 'El pueblo ___ nació Adolfo ya no existe.',                          correct: 'donde' },
        { id: 'q10', prompt: '¿Cuál es el pueblo ___ vais en verano?',                            correct: ['adonde', 'a donde'] },
        { id: 'q11', prompt: 'Este es el hotel ___ nos alojamos el año pasado.',                   correct: 'donde' },
        { id: 'q12', prompt: 'Recuerdo una época ___ no había muchos coches en Madrid.',            correct: 'cuando' },
      ],
    },

    {
      id: '29.5',
      title: 'donde = en el / la / los / las que',
      type: 'choice',
      instructions: 'Какие из вариантов <strong>равнозначны</strong> данной фразе?',
      questions: [
        { id: 'q1', prompt: 'La casa donde vivo es pequeña. = La casa ___ vivo es pequeña.',     options: ['en la que', 'a la que', 'de la que'], correct: 'en la que' },
        { id: 'q2', prompt: 'La piscina adonde voy. = La piscina ___ voy.',                         options: ['en la que', 'a la que', 'de la que'], correct: 'a la que' },
        { id: 'q3', prompt: 'El parque por donde paseamos. = El parque ___ paseamos.',               options: ['por el que', 'al que', 'en el que'], correct: 'por el que' },
        { id: 'q4', prompt: 'La ciudad de donde vengo. = La ciudad ___ vengo.',                       options: ['en la que', 'a la que', 'de la que'], correct: 'de la que' },
      ],
    },

    {
      id: '29.6',
      title: 'Замените donde / cuando',
      type: 'fill',
      instructions: 'Перепишите фразу, заменив <em>donde</em> или <em>cuando</em> на эквивалентную форму с предлогом + <em>el que / la que / los que / las que</em>.',
      questions: [
        { id: 'q1', prompt: '<em>la casa donde nací</em> →',         correct: ['la casa en la que nací', 'la casa en la que nací.'] },
        { id: 'q2', prompt: '<em>el restaurante donde comimos</em> →', correct: ['el restaurante en el que comimos', 'el restaurante en el que comimos.'] },
        { id: 'q3', prompt: '<em>la piscina adonde van</em> →',         correct: ['la piscina a la que van', 'la piscina a la que van.'] },
        { id: 'q4', prompt: '<em>el parque adonde corro</em> →',        correct: ['el parque al que corro', 'el parque al que corro.'] },
        { id: 'q5', prompt: '<em>el día cuando te conocí</em> →',        correct: ['el día en el que te conocí', 'el día en el que te conocí.'] },
        { id: 'q6', prompt: '<em>la época cuando vivíamos en Cuba</em> →', correct: ['la época en la que vivíamos en Cuba', 'la época en la que vivíamos en Cuba.'] },
      ],
    },

    {
      id: '29.7',
      title: 'Что согласуется с cuyo',
      type: 'multi',
      instructions: 'Отметьте все <strong>правильные</strong> варианты с <em>cuyo</em>.',
      questions: [
        {
          id: 'q1',
          prompt: 'Выберите все корректные варианты:',
          options: [
            'la chica cuyo hermano es médico',
            'la chica cuya hermano es médico',
            'el chico cuya madre es pintora',
            'el chico cuyo madre es pintora',
            'el escritor cuyos libros leemos',
            'la señora cuyas hijas viven en París',
            'la señora cuya hijas viven en París',
            'el profesor en cuya casa cenamos',
            'el profesor en cuyo casa cenamos',
          ],
          correct: ['la chica cuyo hermano es médico', 'el chico cuya madre es pintora', 'el escritor cuyos libros leemos', 'la señora cuyas hijas viven en París', 'el profesor en cuya casa cenamos'],
          explanation: '<em>cuyo</em> согласуется со <strong>следующим</strong> существительным, не с предыдущим.',
        },
      ],
    },

    {
      id: '29.8',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: [
          'el chico cuyo padre es médico',
          'la chica cuya madre es médica',
          'el chico cuya padre es médico',
          'los chicos cuyos padres son médicos',
        ], correct: 'el chico cuya padre es médico', explanation: '<em>padre</em> — м. р., поэтому <em>cuyo</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: [
          'la casa donde nací',
          'la casa en la que nací',
          'la casa cuyo nací',
          'la casa donde vivo ahora',
        ], correct: 'la casa cuyo nací', explanation: '<em>cuyo</em> требует обязательно существительного после: <em>cuyo dueño</em> и т. п.' },
        { id: 'q3', prompt: 'Где ошибка?', options: [
          'el parque adonde voy',
          'el parque al que voy',
          'el parque a donde voy',
          'el parque cuya voy',
        ], correct: 'el parque cuya voy', explanation: '<em>cuyo</em> — это «чей», а не «куда».' },
        { id: 'q4', prompt: 'Где ошибка?', options: [
          'el día cuando llegué',
          'el día en el que llegué',
          'el día donde llegué',
          'la época en que vivíamos',
        ], correct: 'el día donde llegué', explanation: 'Время — <em>cuando</em> или <em>en el que</em>; место — <em>donde</em>.' },
      ],
    },

    {
      id: '29.9',
      title: 'donde со всеми предлогами места',
      type: 'fill',
      instructions: 'Допишите предлог + <em>donde</em> в нужной комбинации.',
      questions: [
        { id: 'q1', prompt: 'Es la ciudad ___ vengo.',           correct: ['de donde'] },
        { id: 'q2', prompt: 'Es el camino ___ pasaremos.',         correct: ['por donde'] },
        { id: 'q3', prompt: 'Es la calle ___ vivo.',                correct: ['donde', 'en donde'] },
        { id: 'q4', prompt: 'Es la playa ___ vamos.',                correct: ['adonde', 'a donde'] },
        { id: 'q5', prompt: 'Es la estación ___ salgo del metro.',     correct: ['donde', 'en donde'] },
        { id: 'q6', prompt: 'Es la tienda ___ vengo ahora mismo.',      correct: ['de donde'] },
      ],
    },

    {
      id: '29.10',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Нажмите 🔊 и запишите фразу полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Tengo un amigo cuyo padre es fotógrafo.',      correct: ['Tengo un amigo cuyo padre es fotógrafo.', 'Tengo un amigo cuyo padre es fotógrafo'] },
        { id: 'q2', prompt: '', audio: 'Conozco a una chica cuya hermana es médica.',   correct: ['Conozco a una chica cuya hermana es médica.', 'Conozco a una chica cuya hermana es médica'] },
        { id: 'q3', prompt: '', audio: 'Esta es la casa donde nací.',                    correct: ['Esta es la casa donde nací.', 'Esta es la casa donde nací'] },
        { id: 'q4', prompt: '', audio: 'Recuerdo el verano cuando nos conocimos.',        correct: ['Recuerdo el verano cuando nos conocimos.', 'Recuerdo el verano cuando nos conocimos'] },
        { id: 'q5', prompt: '', audio: 'Es la piscina adonde van los niños.',              correct: ['Es la piscina adonde van los niños.', 'Es la piscina adonde van los niños', 'Es la piscina a donde van los niños.', 'Es la piscina a donde van los niños'] },
      ],
    },

    {
      id: '29.11',
      title: 'Ответьте через donde / cuando / cuyo',
      type: 'fill',
      instructions: 'Ответьте полным предложением, используя подходящее наречное или притяжательное относительное.',
      questions: [
        { id: 'q1', prompt: '¿Cuál es la ciudad ___ naciste? (donde / cuyo)',                                correct: 'donde' },
        { id: 'q2', prompt: '¿Recuerdas el día ___ te llamé por primera vez? (cuando / donde)',                correct: 'cuando' },
        { id: 'q3', prompt: '¿Es ese el chico ___ hermana es bailarina? (cuya / donde)',                        correct: 'cuya' },
        { id: 'q4', prompt: '¿Es esa la playa ___ pasáis los fines de semana? (donde / cuyo)',                  correct: 'donde' },
        { id: 'q5', prompt: '¿Conoces al señor ___ hijos juegan al fútbol con Pedro? (cuyos / donde)',          correct: 'cuyos' },
      ],
    },

    {
      id: '29.12',
      title: 'Перепишите без donde / cuando / cuyo',
      type: 'fill',
      instructions: 'Перепишите фразу, не используя <em>donde / cuando / cuyo</em> — только <em>en el que, en la que, a la que, del que…</em>',
      questions: [
        { id: 'q1', prompt: '<em>La casa donde vivo es vieja.</em> →',          correct: ['La casa en la que vivo es vieja.', 'La casa en la que vivo es vieja'] },
        { id: 'q2', prompt: '<em>La playa adonde voy es preciosa.</em> →',       correct: ['La playa a la que voy es preciosa.', 'La playa a la que voy es preciosa'] },
        { id: 'q3', prompt: '<em>El día cuando te vi llovía.</em> →',             correct: ['El día en el que te vi llovía.', 'El día en el que te vi llovía'] },
        { id: 'q4', prompt: '<em>El escritor cuyos libros leemos es chileno.</em> →', correct: ['El escritor del que leemos los libros es chileno.', 'El escritor del que leemos los libros es chileno'], explanation: 'Один из вариантов перефраза.' },
      ],
    },
  ],
};
