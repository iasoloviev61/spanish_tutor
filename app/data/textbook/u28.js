// ============================================================
// Unidad 28 — Relativos (1): que, el que, quien, lo que
// Базовые относительные местоимения, выбор формы после предлога,
// lo que для отсылки к идее.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u28 = {
  id: 'u28',
  number: 28,
  title: { es: 'que, el que, quien…', topic: 'Relativos (1)' },
  topicRu: 'Относительные местоимения: que, el que, quien, lo que',

  theory: [
    {
      type: 'rule',
      es: 'Los <strong>relativos</strong> sirven para dar información sobre un nombre anterior sin tener que repetirlo. Conectan dos frases en una sola.',
      ru: 'Относительные местоимения — это «склейка» двух фраз, чтобы не повторять существительное. По-русски обычно соответствуют «который / которая / которые», иногда «кто», «что», «чей».',
      examples: [
        { es: 'Tengo un loro. El loro habla. → Tengo un loro <strong>que</strong> habla.', ru: 'У меня попугай, который разговаривает.' },
        { es: 'He recibido una revista. Clara escribe en esta revista. → He recibido una revista <strong>en la que</strong> escribe Clara.', ru: 'Я получил журнал, в котором пишет Клара.' },
      ],
    },
    {
      type: 'rule',
      es: 'Las relativas pueden <strong>identificar</strong> el nombre («какой именно») o <strong>definirlo</strong> («что такое»).',
      ru: 'Relativas бывают <em>определительные</em> («какой именно из» — <em>la chica que está bailando con Pedro</em>) и <em>дефинирующие</em> («что это такое» — <em>un carnicero es una persona que vende carne</em>).',
      examples: [
        { es: 'Es la chica que está bailando con Pedro.', ru: 'Это та девушка, которая танцует с Педро.' },
        { es: 'El coche que está delante del banco es el mío.', ru: 'Машина, которая стоит перед банком, моя.' },
        { es: 'Un carnicero es una persona que vende carne.', ru: 'Мясник — это человек, который продаёт мясо.' },
      ],
    },
    {
      type: 'heading',
      text: 'Формы',
    },
    {
      type: 'table',
      caption: 'Relativos основные',
      columns: ['Без предлога', 'После предлога'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['<em>que</em>', '<em>el que / la que / los que / las que</em>'],
        ['—', '<em>quien / quienes</em> (только о людях)'],
      ],
    },
    {
      type: 'rule',
      es: '<strong>que</strong> sirve para referirse a <em>personas, animales o cosas</em>. Se usa cuando no hay preposición delante.',
      ru: '<em>que</em> — самый универсальный относительный. Без предлога он используется и про людей, и про вещи, и про животных. Род, число, одушевлённость роли не играют.',
      examples: [
        { es: 'Las chicas que conocimos ayer son de Córdoba.', ru: 'Девушки, которых мы вчера встретили, — из Кордобы.' },
        { es: 'El cóndor es un ave que procede de América del Sur.', ru: 'Кондор — птица, которая родом из Южной Америки.' },
        { es: 'No me gusta el libro que estoy leyendo.', ru: 'Мне не нравится книга, которую я читаю.' },
      ],
    },
    {
      type: 'rule',
      es: 'Después de <strong>preposición</strong> se usa <em>el que, la que, los que, las que</em> (сущ. + предлог + el que…). Tiene la misma forma (género y número) que el nombre al que se refiere.',
      ru: 'После предлога используется <em>el que / la que / los que / las que</em> — форма выбирается по существительному, на которое ссылаемся (его роду и числу).',
      examples: [
        { es: 'Ese es el perro <strong>del que</strong> te hablé.', ru: 'Это та собака, о которой я тебе говорил.' },
        { es: 'Las chicas <strong>con las que</strong> estaba jugando son mis sobrinas.', ru: 'Девочки, с которыми я играл, — мои племянницы.' },
        { es: 'La revista <strong>en la que</strong> escribe Clara.', ru: 'Журнал, в котором пишет Клара.' },
        { es: 'Ese es el agujero <strong>por el que</strong> entran los ratones.', ru: 'Это дыра, через которую забегают мыши.' },
      ],
    },
    {
      type: 'rule',
      es: 'Después de preposición se puede usar también <strong>quien</strong> (singular) o <strong>quienes</strong> (plural), pero <em>solo para personas</em>.',
      ru: '<em>quien / quienes</em> после предлога — альтернатива <em>el que / los que…</em>, но только когда речь о людях. Не используется про предметы.',
      examples: [
        { es: 'El chico con quien sale Nieves es bombero. (= con el que)', ru: 'Парень, с которым встречается Ньевес, — пожарный.' },
        { es: 'Las chicas con quienes estaba jugando son mis sobrinas.', ru: 'Девочки, с которыми я играл, — мои племянницы.' },
        { es: 'La persona a quien llamé.', ru: 'Человек, которому я позвонил.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Cuando el sustantivo es <strong>cosa o animal</strong>, después de preposición se usa <em>el que / la que / los que / las que</em>, <strong>no</strong> <em>quien</em>: <em>el libro <strong>del que</strong> te hablé</em> (no <em><span style="text-decoration: line-through">del quien</span></em>).',
      ru: 'Если речь о предмете или животном, после предлога — только <em>el que / la que / los que / las que</em>, форма <em>quien</em> подходит лишь для людей.',
    },
    {
      type: 'heading',
      text: 'Замена существительного и lo que',
    },
    {
      type: 'rule',
      es: 'Se usa <strong>el que, la que, los que, las que</strong> en lugar de un nombre mencionado anteriormente.',
      ru: '<em>el que / la que / los que / las que</em> могут <strong>заменить</strong> ранее упомянутое существительное — в смысле «тот / та / те, что…». Так избегают повторения.',
      examples: [
        { es: '—¿Cuál es tu maleta? —La que tiene ruedas.', ru: '— Какой твой чемодан? — Тот, что на колёсиках.' },
        { es: 'Me gusta más este libro que el que me recomendó Luis.', ru: 'Мне эта книга нравится больше той, что мне посоветовал Луис.' },
        { es: 'Los que llegaron primero recibieron premio.', ru: 'Те, кто пришёл первыми, получили приз.' },
      ],
    },
    {
      type: 'rule',
      es: 'Se usa <strong>lo que</strong> para referirse a una <em>afirmación anterior</em> o a una <em>idea</em> entera, no a un nombre concreto.',
      ru: '<em>lo que</em> отсылает <strong>к мысли, идее, ранее сказанному</strong> в целом, а не к конкретному существительному. По-русски — «то, что», «то, чего».',
      examples: [
        { es: 'Lo que has dicho es una tontería.', ru: 'То, что ты сказал, — глупость.' },
        { es: 'Lo que tú necesitas es mucho cariño.', ru: 'То, что тебе нужно, — это много нежности.' },
        { es: 'Eso es lo que me preocupa.', ru: 'Вот это меня и беспокоит.' },
      ],
    },
  ],

  exercises: [
    {
      id: '28.1',
      title: 'que или quien',
      type: 'choice',
      instructions: 'Выберите правильный вариант.',
      questions: [
        { id: 'q1', prompt: 'Ese es el señor con ___ tienes que hablar.',         options: ['que', 'quien'],   correct: 'quien', explanation: 'После предлога о людях — <em>quien</em> или <em>el que</em>.' },
        { id: 'q2', prompt: 'Necesito el libro ___ te presté.',                    options: ['que', 'el que'], correct: 'que', explanation: 'Без предлога — всегда <em>que</em>.' },
        { id: 'q3', prompt: 'Tengo un amigo ___ vive en Panamá.',                   options: ['que', 'quien'], correct: 'que' },
        { id: 'q4', prompt: 'Este es el restaurante ___ me han recomendado.',       options: ['que', 'el que'], correct: 'que' },
        { id: 'q5', prompt: 'Este es el agujero por ___ entran los ratones.',       options: ['que', 'el que'], correct: 'el que', explanation: 'После предлога — <em>el que</em>.' },
        { id: 'q6', prompt: 'Sebastián es el chico ___ está hablando con Lola.',     options: ['que', 'quien'], correct: 'que' },
        { id: 'q7', prompt: '¿Conoces a la señora ___ nos ha saludado?',              options: ['que', 'la que'], correct: 'que' },
        { id: 'q8', prompt: 'Ese es el equipo contra ___ jugamos el domingo.',        options: ['que', 'el que'], correct: 'el que' },
        { id: 'q9', prompt: 'Usa los pañuelos ___ están en el baño.',                  options: ['que', 'los que'], correct: 'que' },
        { id: 'q10', prompt: 'La academia a ___ voy está en el centro.',                options: ['que', 'la que'], correct: 'la que' },
      ],
    },

    {
      id: '28.2',
      title: 'Соедините две фразы',
      type: 'fill',
      instructions: 'Соедините две фразы в одну с помощью <em>que, quien, quienes, el que, la que, los que</em> или <em>las que</em>. Запишите <strong>только полученную одну фразу целиком</strong>.',
      questions: [
        { id: 'q1', prompt: 'Tengo un ventilador. Funciona con pilas. →',                                  correct: ['Tengo un ventilador que funciona con pilas.', 'Tengo un ventilador que funciona con pilas'] },
        { id: 'q2', prompt: 'La vicuña es un mamífero. Vive en los Andes. →',                                correct: ['La vicuña es un mamífero que vive en los Andes.', 'La vicuña es un mamífero que vive en los Andes'] },
        { id: 'q3', prompt: 'Ayer comimos ostras. Te gustaron. → ¿Te gustaron ___?',                          correct: ['las ostras que comimos ayer', 'las ostras que comimos ayer.'] },
        { id: 'q4', prompt: 'Estoy leyendo un libro. Me gusta mucho. → Me gusta mucho ___.',                   correct: ['el libro que estoy leyendo', 'el libro que estoy leyendo.'] },
        { id: 'q5', prompt: 'Paco sale con una chica. La chica es piloto. → La chica ___ es piloto.',          correct: ['con la que sale Paco', 'con quien sale Paco'] },
        { id: 'q6', prompt: 'He comprado unos cuadros. Te había hablado de ellos. → He comprado los cuadros ___.', correct: ['de los que te había hablado', 'de los que te había hablado.'] },
        { id: 'q7', prompt: 'Ayer conocí a unas chicas. Ana vivía con ellas. → Ayer conocí a las chicas ___.',  correct: ['con las que vivía Ana', 'con quienes vivía Ana'] },
      ],
    },

    {
      id: '28.3',
      title: 'que, el que, la que, los que, las que или lo que',
      type: 'fill',
      instructions: 'Допишите подходящий относительный.',
      questions: [
        { id: 'q1', prompt: '—¿Quién es esa chica? — ___ trabaja con Eduardo.',                  correct: 'La que', explanation: 'Без существительного, ж. р. ед. ч.' },
        { id: 'q2', prompt: '___ tú quieres es imposible.',                                       correct: 'Lo que', explanation: 'Отсылка к идее в целом — <em>lo que</em>.' },
        { id: 'q3', prompt: '—¿Qué libro estás leyendo? — ___ me prestó Antonio.',                correct: 'El que' },
        { id: 'q4', prompt: 'Mi casa es ___ está en aquella esquina.',                              correct: 'la que' },
        { id: 'q5', prompt: '¿Recuerdas ___ dijiste ayer?',                                        correct: 'lo que' },
        { id: 'q6', prompt: '¿Quiénes son esas chicas? — ___ estuvieron en mi fiesta.',             correct: 'Las que' },
        { id: 'q7', prompt: '—¿Quiénes son Guille y Silverio? — ___ viven en el sexto.',            correct: 'Los que' },
        { id: 'q8', prompt: 'Ese es el coche ___ te dije.',                                         correct: ['del que', 'que'], explanation: '«Машина, о которой я тебе говорил» — после <em>de</em>: <em>del que</em>.' },
      ],
    },

    {
      id: '28.4',
      title: 'el / la / los / las que',
      type: 'fill',
      instructions: 'Допишите форму <em>el que / la que / los que / las que</em> в правильном роде и числе.',
      questions: [
        { id: 'q1', prompt: 'La chica con ___ trabajo se llama Pilar.',                  correct: 'la que' },
        { id: 'q2', prompt: 'Los amigos con ___ salgo son del barrio.',                    correct: 'los que' },
        { id: 'q3', prompt: 'Las pastillas con ___ duermo son flojitas.',                   correct: 'las que' },
        { id: 'q4', prompt: 'El bolígrafo con ___ escribo es azul.',                         correct: 'el que' },
        { id: 'q5', prompt: 'La playa a ___ vamos en verano está cerca.',                    correct: 'la que' },
        { id: 'q6', prompt: 'El piso en ___ vivo es pequeño.',                                correct: 'el que' },
        { id: 'q7', prompt: 'Los libros de ___ te hablé están en la mesa.',                    correct: 'los que' },
        { id: 'q8', prompt: 'La persona a ___ llamé no contestó.',                              correct: ['la que', 'quien'] },
      ],
    },

    {
      id: '28.5',
      title: 'lo que vs el / la que',
      type: 'choice',
      instructions: 'Идея/мысль или конкретный предмет?',
      questions: [
        { id: 'q1', prompt: '___ me has dicho es importante.',         options: ['Lo que', 'El que', 'La que'], correct: 'Lo que', explanation: 'Отсылает к сказанному в целом — идея.' },
        { id: 'q2', prompt: '___ trabaja con Eduardo es Marta.',        options: ['Lo que', 'La que', 'El que'], correct: 'La que', explanation: 'Конкретный человек, ж. р.' },
        { id: 'q3', prompt: 'Eso es ___ me preocupa.',                   options: ['lo que', 'el que', 'la que'], correct: 'lo que' },
        { id: 'q4', prompt: '___ mi maleta es esta.',                     options: ['Lo que', 'La que'], correct: 'La que', explanation: 'О чемодане (ж. р., конкретный предмет).' },
        { id: 'q5', prompt: '___ pasó ayer me sorprendió.',                options: ['Lo que', 'El que'], correct: 'Lo que' },
        { id: 'q6', prompt: 'No entiendo ___ tú quieres decir.',           options: ['lo que', 'el que'], correct: 'lo que' },
        { id: 'q7', prompt: '— ¿Cuál es tu coche? — ___ está aparcado allí.', options: ['Lo que', 'El que'], correct: 'El que' },
      ],
    },

    {
      id: '28.6',
      title: 'Сопоставьте',
      type: 'match',
      instructions: 'Какой относительный подходит к каждой ситуации? Подберите для каждой подсказки нужный вариант.',
      pool: ['que', 'quien', 'el que', 'la que', 'los que', 'las que', 'lo que'],
      questions: [
        { id: 'q1', prompt: 'без предлога, любой объект',                            correct: 'que' },
        { id: 'q2', prompt: 'после предлога, мужчина',                                correct: 'quien' },
        { id: 'q3', prompt: 'после предлога, мужской предмет (ед. ч.)',                correct: 'el que' },
        { id: 'q4', prompt: 'после предлога, женский предмет (ед. ч.)',                correct: 'la que' },
        { id: 'q5', prompt: 'после предлога, мужские предметы (мн. ч.)',                correct: 'los que' },
        { id: 'q6', prompt: 'после предлога, женские предметы (мн. ч.)',                correct: 'las que' },
        { id: 'q7', prompt: 'отсылка к идее, не к существительному',                     correct: 'lo que' },
      ],
    },

    {
      id: '28.7',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой выбора relativo — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: [
          'El libro que estoy leyendo es bueno.',
          'El libro de quien te hablé es bueno.',
          'El libro del que te hablé es bueno.',
          'Este es el libro que me regalaste.',
        ], correct: 'El libro de quien te hablé es bueno.', explanation: 'О предмете после предлога — <em>del que</em>, не <em>de quien</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: [
          'La chica con quien sale es de Quito.',
          'La chica con la que sale es de Quito.',
          'La chica con que sale es de Quito.',
          'Las chicas con quienes hablo son simpáticas.',
        ], correct: 'La chica con que sale es de Quito.', explanation: 'После предлога — <em>la que</em> или <em>quien</em>, но не голое <em>que</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: [
          'No me gusta lo que has dicho.',
          'No me gusta el que has dicho.',
          'Lo que tú quieres es imposible.',
          'Eso es lo que necesito.',
        ], correct: 'No me gusta el que has dicho.', explanation: 'Отсылка к сказанному, идея — нужен <em>lo que</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: [
          'Las amigas con las que viajo son ucranianas.',
          'Las amigas con las quienes viajo son ucranianas.',
          'Las amigas con quienes viajo son ucranianas.',
          'Las amigas que viajan conmigo son ucranianas.',
        ], correct: 'Las amigas con las quienes viajo son ucranianas.', explanation: '<em>las quienes</em> — несуществующая форма; правильно <em>las que</em> или <em>quienes</em>.' },
      ],
    },

    {
      id: '28.8',
      title: 'Перепишите фразу с relativo',
      type: 'fill',
      instructions: 'Замените повтор существительного на относительный местоимение.',
      questions: [
        { id: 'q1', prompt: 'Tengo una hermana. Mi hermana vive en París. →',           correct: ['Tengo una hermana que vive en París.', 'Tengo una hermana que vive en París'] },
        { id: 'q2', prompt: 'Compré un coche. El coche es rojo. →',                       correct: ['Compré un coche que es rojo.', 'Compré un coche que es rojo'] },
        { id: 'q3', prompt: 'Conozco a un médico. El médico habla cinco idiomas. →',       correct: ['Conozco a un médico que habla cinco idiomas.', 'Conozco a un médico que habla cinco idiomas'] },
        { id: 'q4', prompt: 'Esta es la silla. Mi abuelo se sentaba en esta silla. →',     correct: ['Esta es la silla en la que se sentaba mi abuelo.', 'Esta es la silla en la que se sentaba mi abuelo'] },
        { id: 'q5', prompt: 'Es la canción. Te hablé de la canción. →',                     correct: ['Es la canción de la que te hablé.', 'Es la canción de la que te hablé'] },
      ],
    },

    {
      id: '28.9',
      title: 'lo que в начале фразы',
      type: 'fill',
      instructions: 'Допишите конструкцию с <em>lo que</em>. Образец: <em>Eso es ___ me preocupa → lo que</em>.',
      questions: [
        { id: 'q1', prompt: '___ tú dices no tiene sentido.',                  correct: 'Lo que' },
        { id: 'q2', prompt: 'No entendí ___ explicó el profesor.',              correct: 'lo que' },
        { id: 'q3', prompt: '___ me gusta de ti es tu humor.',                  correct: 'Lo que' },
        { id: 'q4', prompt: 'Esto es ___ pasó ayer.',                            correct: 'lo que' },
        { id: 'q5', prompt: '___ necesitamos es tiempo.',                        correct: 'Lo que' },
      ],
    },

    {
      id: '28.10',
      title: 'Какие фразы корректны',
      type: 'multi',
      instructions: 'Отметьте все <strong>правильные</strong> фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Выберите все корректные варианты:',
          options: [
            'El libro que estoy leyendo.',
            'El libro el que estoy leyendo.',
            'La chica con quien hablé.',
            'La chica con que hablé.',
            'Lo que has dicho es verdad.',
            'El que has dicho es verdad.',
            'El piso en el que vivo.',
            'El piso en quien vivo.',
            'Los amigos con los que salgo.',
            'Los amigos con que salgo.',
          ],
          correct: ['El libro que estoy leyendo.', 'La chica con quien hablé.', 'Lo que has dicho es verdad.', 'El piso en el que vivo.', 'Los amigos con los que salgo.'],
          explanation: 'Без предлога — <em>que</em>; после предлога о людях — <em>quien</em> или <em>el que</em>; о предметах — только <em>el que</em>; об идее — <em>lo que</em>.',
        },
      ],
    },

    {
      id: '28.11',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Нажмите 🔊 и запишите услышанное предложение.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Tengo un amigo que vive en Panamá.',           correct: ['Tengo un amigo que vive en Panamá.', 'Tengo un amigo que vive en Panamá'] },
        { id: 'q2', prompt: '', audio: 'Es la chica con la que sale Pedro.',            correct: ['Es la chica con la que sale Pedro.', 'Es la chica con la que sale Pedro'] },
        { id: 'q3', prompt: '', audio: 'Eso es lo que necesito.',                        correct: ['Eso es lo que necesito.', 'Eso es lo que necesito'] },
        { id: 'q4', prompt: '', audio: 'Los que llegaron primero recibieron premio.',     correct: ['Los que llegaron primero recibieron premio.', 'Los que llegaron primero recibieron premio'] },
        { id: 'q5', prompt: '', audio: 'El piso en el que vivo es pequeño.',               correct: ['El piso en el que vivo es pequeño.', 'El piso en el que vivo es pequeño'] },
      ],
    },

    {
      id: '28.12',
      title: 'Краткие ответы',
      type: 'fill',
      instructions: 'Ответьте кратко, используя <em>el / la / los / las que</em> или <em>lo que</em>.',
      questions: [
        { id: 'q1', prompt: '—¿Cuál es tu maleta? — ___ tiene ruedas.',          correct: 'La que' },
        { id: 'q2', prompt: '—¿Cuál es tu coche? — ___ está aparcado allí.',     correct: 'El que' },
        { id: 'q3', prompt: '—¿Qué te molesta? — ___ dice Pedro.',                 correct: 'Lo que' },
        { id: 'q4', prompt: '—¿Cuáles son tus zapatos? — ___ están bajo la cama.',  correct: 'Los que' },
        { id: 'q5', prompt: '—¿Cuáles son tus llaves? — ___ tienen el llavero rojo.', correct: 'Las que' },
      ],
    },
  ],
};
