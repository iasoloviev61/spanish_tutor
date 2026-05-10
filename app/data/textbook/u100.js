// ============================================================
// Unidad 100 — Adverbios de lugar
// aquí, allí, abajo...
// aquí / ahí / allí, arriba/abajo/dentro/fuera/cerca/lejos/encima/debajo/
// delante/detrás/enfrente/alrededor.
// Позиция в фразе, инверсия после фронтального наречия.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u100 = {
  id: 'u100',
  number: 100,
  title: { es: 'aquí, allí, abajo...', topic: 'Adverbios de lugar' },
  topicRu: 'Наречия места: aquí, allí, arriba, abajo, dentro, fuera...',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Los <strong>adverbios de lugar</strong> dan información sobre las circunstancias de lugar. Responden a las preguntas <em>¿dónde?</em> y <em>¿adónde?</em>',
      ru: '<strong>Наречия места</strong> отвечают на вопросы <em>¿dónde?</em> («где?») и <em>¿adónde?</em> («куда?»). В отличие от предлогов, они самостоятельны: им не нужно существительное.',
      examples: [
        { es: 'Cuelga el cuadro ahí.', ru: 'Повесь картину туда (рядом с тобой).' },
        { es: 'Lleve este paquete arriba.', ru: 'Отнесите этот пакет наверх.' },
        { es: 'Yo vivo aquí y Margarita vive enfrente.', ru: 'Я живу здесь, а Маргарита живёт напротив.' },
      ],
    },

    {
      type: 'heading',
      text: 'aquí, ahí, allí',
    },
    {
      type: 'table',
      caption: 'Три уровня удалённости',
      columns: ['Наречие', 'Значение', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<strong>aquí</strong>', 'рядом с говорящим («здесь, тут»)', '<em>Póngalo aquí, por favor.</em>'],
        ['<strong>ahí</strong>', 'рядом с собеседником («там, у тебя»)', '<em>Póngalo ahí, por favor.</em>'],
        ['<strong>allí</strong>', 'далеко от обоих («вон там»)', '<em>Póngalo allí, por favor.</em>'],
      ],
    },

    {
      type: 'heading',
      text: 'arriba, abajo, dentro, fuera...',
    },
    {
      type: 'rule',
      es: 'Otros adverbios de lugar describen la posición o la dirección.',
      ru: 'Другие наречия места описывают расположение или направление. В отличие от предлогов (<em>encima de, debajo de</em>), они <strong>не требуют</strong> существительного — это полноценная единица.',
      examples: [
        { es: '¿Vives cerca? — No, vivo muy lejos.', ru: '— Ты живёшь недалеко? — Нет, очень далеко.' },
        { es: '¿Qué hay arriba? — Una sala de juegos.', ru: '— Что наверху? — Игровая комната.' },
        { es: 'Este barrio tiene muchos parques alrededor.', ru: 'У этого района много парков вокруг.' },
      ],
    },

    {
      type: 'table',
      caption: 'Основные наречия места',
      columns: ['Наречие', 'Перевод'],
      colClasses: ['col-pattern', 'col-pattern'],
      rows: [
        ['<strong>arriba / abajo</strong>', 'наверху / внизу'],
        ['<strong>dentro / fuera</strong>', 'внутри / снаружи'],
        ['<strong>cerca / lejos</strong>', 'близко / далеко'],
        ['<strong>encima / debajo</strong>', 'сверху / снизу'],
        ['<strong>delante / detrás</strong>', 'впереди / сзади'],
        ['<strong>enfrente</strong>', 'напротив'],
        ['<strong>alrededor</strong>', 'вокруг'],
      ],
    },

    {
      type: 'heading',
      text: 'Позиция в предложении',
    },
    {
      type: 'rule',
      es: 'Los adverbios <em>aquí, arriba</em>... suelen ir <strong>al final</strong> de la frase. Pero también pueden ir al <strong>principio</strong> para dar énfasis.',
      ru: 'Наречия <em>aquí, arriba</em> и т. д. обычно ставятся <strong>в конце</strong> фразы. Но могут идти и в <strong>начале</strong>, если на них падает логическое ударение («Здесь живут мои родители», «Внизу — кухня»).',
      examples: [
        { es: 'Hay algo aquí.', ru: 'Здесь что-то есть.' },
        { es: 'Aquí hay un zapato. ¿Dónde está el otro?', ru: 'Тут лежит ботинок. Где второй?' },
      ],
    },

    {
      type: 'atencion',
      es: 'Cuando el adverbio va <strong>al principio</strong> de la frase, el sujeto va <strong>detrás del verbo</strong>: <em>Arriba están las habitaciones</em> (no <em>Arriba las habitaciones están</em>).',
      ru: 'Когда наречие места стоит <strong>в начале</strong> фразы, подлежащее ставится <strong>после глагола</strong> (инверсия): <em>Arriba <strong>están</strong> las habitaciones</em>, а не <em>Arriba las habitaciones están</em>.',
    },

    {
      type: 'rule',
      es: 'Es común usar <em>aquí, ahí, allí</em> junto con <em>arriba, abajo, dentro, fuera...</em> para precisar.',
      ru: 'Часто <em>aquí, ahí, allí</em> сочетаются с <em>arriba, abajo, dentro, fuera...</em> — это уточняет направление.',
      examples: [
        { es: 'Ponlo allí dentro.', ru: 'Положи это туда, внутрь.' },
        { es: 'Juan, ven aquí arriba.', ru: 'Хуан, поднимайся сюда наверх.' },
        { es: 'Mira ahí abajo.', ru: 'Посмотри туда вниз (рядом с тобой).' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '100.1',
      title: 'aquí, ahí или allí?',
      type: 'fill',
      instructions: 'Поставьте <em>aquí</em> (рядом с говорящим), <em>ahí</em> (рядом с собеседником) или <em>allí</em> (далеко от обоих).',
      questions: [
        { id: 'q1', prompt: 'Ven ___, Bruno (рядом со мной).', correct: 'aquí' },
        { id: 'q2', prompt: '___ hay agua (показываю на стакан рядом с собой).', correct: 'aquí' },
        { id: 'q3', prompt: '¿Qué hay ___ (далеко, на той стороне)?', correct: 'allí' },
        { id: 'q4', prompt: '¿Ves a Ana? — Sí, está ___ arriba (далеко вверху).', correct: 'allí' },
        { id: 'q5', prompt: '¿Dónde pongo los platos? — Ponlos ___ dentro (рядом с тобой).', correct: 'ahí' },
        { id: 'q6', prompt: 'Mira, ___ hay sombra (на той стороне).', correct: 'allí' },
        { id: 'q7', prompt: 'Siéntate ___, a mi lado (рядом со мной).', correct: 'aquí' },
        { id: 'q8', prompt: '¿Tienes mi libro? — Sí, lo tengo ___ (у меня).', correct: 'aquí' },
      ],
    },

    {
      id: '100.2',
      title: 'arriba / abajo / dentro / fuera / cerca / lejos / encima / debajo',
      type: 'fill',
      instructions: 'Подставьте подходящее наречие места.',
      questions: [
        { id: 'q1', prompt: 'Niños, idos a jugar ___, al jardín.', correct: 'fuera' },
        { id: 'q2', prompt: 'Prefiero dormir ___, en el segundo piso.', correct: 'arriba' },
        { id: 'q3', prompt: 'Deja el paquete aquí ___ (под столом).', correct: 'debajo' },
        { id: 'q4', prompt: 'La cafetería no está ___, está justo al lado.', correct: 'lejos' },
        { id: 'q5', prompt: '¿Vives ___? — Sí, a cinco minutos.', correct: 'cerca' },
        { id: 'q6', prompt: 'Hay muchas montañas ___ del pueblo.', correct: 'alrededor' },
        { id: 'q7', prompt: '¿Quién se sienta ___ de mí (= перед)?', correct: 'delante' },
        { id: 'q8', prompt: 'Aquí ___ no nos mojamos, pero fuera sí.', correct: 'dentro' },
        { id: 'q9', prompt: 'Está ___ del armario (= наверху).', correct: 'encima' },
        { id: 'q10', prompt: 'Mira ___, por la ventana (= снаружи).', correct: 'fuera' },
      ],
    },

    {
      id: '100.3',
      title: 'Соберите фразу: наречие в начале + инверсия',
      type: 'fill',
      instructions: 'Соберите фразу с наречием места <strong>в начале</strong>. После наречия — глагол, потом подлежащее. Образец: <em>(mis padres / abajo / viven) → Abajo viven mis padres.</em>',
      questions: [
        { id: 'q1', prompt: '(Elena / cerca / vive) →', correct: ['Cerca vive Elena.', 'Cerca vive Elena'] },
        { id: 'q2', prompt: '(la mesa / fuera / sacad) →', correct: ['Sacad fuera la mesa.', 'Fuera sacad la mesa.', 'Sacad fuera la mesa', 'Fuera sacad la mesa'] },
        { id: 'q3', prompt: '(Benito / aquí / trabaja) →', correct: ['Aquí trabaja Benito.', 'Aquí trabaja Benito'] },
        { id: 'q4', prompt: '(mi oficina / lejos / está) →', correct: ['Lejos está mi oficina.', 'Lejos está mi oficina'] },
        { id: 'q5', prompt: '(yo / abajo / duermo) →', correct: ['Abajo duermo yo.', 'Abajo duermo yo'] },
        { id: 'q6', prompt: '(la cafetería / allí / está) →', correct: ['Allí está la cafetería.', 'Allí está la cafetería'] },
      ],
    },

    {
      id: '100.4',
      title: 'Сочетания: aquí/ahí/allí + arriba/abajo/dentro/fuera',
      type: 'fill',
      instructions: 'Составьте уточняющее сочетание двух наречий по подсказке.',
      questions: [
        { id: 'q1', prompt: '«Туда внутрь» (далеко) →', correct: ['allí dentro', 'allí dentro.'] },
        { id: 'q2', prompt: '«Сюда наверх» →', correct: ['aquí arriba', 'aquí arriba.'] },
        { id: 'q3', prompt: '«Туда вниз» (рядом с собеседником) →', correct: ['ahí abajo', 'ahí abajo.'] },
        { id: 'q4', prompt: '«Сюда снаружи» →', correct: ['aquí fuera', 'aquí fuera.'] },
        { id: 'q5', prompt: '«Туда наверх» (далеко) →', correct: ['allí arriba', 'allí arriba.'] },
      ],
    },

    {
      id: '100.5',
      title: 'Позиция в предложении: какой порядок верный?',
      type: 'choice',
      instructions: 'Выберите правильный порядок слов.',
      questions: [
        { id: 'q1', prompt: '«Здесь живут мои родители» (с акцентом «здесь»)', options: ['Aquí mis padres viven.', 'Aquí viven mis padres.', 'Mis padres aquí viven.'], correct: 'Aquí viven mis padres.' },
        { id: 'q2', prompt: '«Кошка под столом» (нейтрально)', options: ['Debajo está el gato.', 'El gato está debajo.', 'El gato debajo está.'], correct: 'El gato está debajo.' },
        { id: 'q3', prompt: '«Внизу комнаты» (с акцентом «внизу»)', options: ['Abajo las habitaciones están.', 'Abajo están las habitaciones.', 'Las habitaciones abajo están.'], correct: 'Abajo están las habitaciones.' },
        { id: 'q4', prompt: '«В этом районе много парков вокруг»', options: ['Este barrio alrededor tiene muchos parques.', 'Este barrio tiene muchos parques alrededor.', 'Alrededor este barrio tiene muchos parques.'], correct: 'Este barrio tiene muchos parques alrededor.' },
        { id: 'q5', prompt: '«Я живу далеко» (нейтрально)', options: ['Yo vivo lejos.', 'Lejos yo vivo.', 'Vivo yo lejos.'], correct: 'Yo vivo lejos.' },
      ],
    },

    {
      id: '100.6',
      title: 'Найдите фразы без ошибок',
      type: 'multi',
      instructions: 'Отметьте все грамматически корректные фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Ven aquí.',
            'Ven a aquí.',
            'Vivo cerca.',
            'Vivo cerca de.',
            'Aquí están las habitaciones.',
            'Aquí las habitaciones están.',
            'Ponlo allí dentro.',
            'Ponlo allí en dentro.',
            'Hay algo aquí.',
            'Hay algo en aquí.',
            'La cafetería está enfrente.',
            'La cafetería está enfrente de.',
          ],
          correct: [
            'Ven aquí.',
            'Vivo cerca.',
            'Aquí están las habitaciones.',
            'Ponlo allí dentro.',
            'Hay algo aquí.',
            'La cafetería está enfrente.',
          ],
          explanation: 'Наречия места <strong>не требуют</strong> предлога перед собой (нет «a aquí», «en aquí»). Если наречие в начале — обязательно инверсия. Без существительного предлог <em>de</em> после <em>cerca, enfrente</em> не нужен.',
        },
      ],
    },

    {
      id: '100.7',
      title: 'Сопоставьте антонимы',
      type: 'match',
      instructions: 'Подберите для каждого наречия антоним.',
      pool: ['abajo', 'lejos', 'fuera', 'detrás', 'debajo', 'allí'],
      questions: [
        { id: 'q1', prompt: '<em>arriba</em>',  correct: 'abajo' },
        { id: 'q2', prompt: '<em>cerca</em>',   correct: 'lejos' },
        { id: 'q3', prompt: '<em>dentro</em>',  correct: 'fuera' },
        { id: 'q4', prompt: '<em>delante</em>', correct: 'detrás' },
        { id: 'q5', prompt: '<em>encima</em>',  correct: 'debajo' },
        { id: 'q6', prompt: '<em>aquí</em>',    correct: 'allí' },
      ],
    },

    {
      id: '100.8',
      title: 'Перевод: какой вариант?',
      type: 'choice',
      instructions: 'Какой вариант ближе по смыслу русской фразе?',
      questions: [
        { id: 'q1', prompt: '«Положи это туда (рядом с тобой)» →', options: ['Ponlo aquí.', 'Ponlo ahí.', 'Ponlo allí.'], correct: 'Ponlo ahí.' },
        { id: 'q2', prompt: '«Иди сюда!» →', options: ['¡Ven ahí!', '¡Ven aquí!', '¡Ven allí!'], correct: '¡Ven aquí!' },
        { id: 'q3', prompt: '«Что-то есть на той стороне» →', options: ['Aquí hay algo.', 'Allí hay algo.', 'Hay algo aquí.'], correct: 'Allí hay algo.' },
        { id: 'q4', prompt: '«Снаружи холодно» (с акцентом «снаружи») →', options: ['Hace frío fuera.', 'Fuera hace frío.', 'Fuera frío hace.'], correct: 'Fuera hace frío.' },
        { id: 'q5', prompt: '«Я живу очень близко» →', options: ['Vivo de cerca.', 'Vivo muy cerca.', 'Vivo cerca de.'], correct: 'Vivo muy cerca.' },
      ],
    },

    {
      id: '100.9',
      title: 'Заполните пропуск',
      type: 'choice',
      instructions: 'Какое наречие подходит по смыслу?',
      questions: [
        { id: 'q1', prompt: 'El supermercado está ___ de aquí, a 50 metros.', options: ['cerca', 'lejos', 'arriba'], correct: 'cerca' },
        { id: 'q2', prompt: 'No me oye, está muy ___.', options: ['cerca', 'lejos', 'enfrente'], correct: 'lejos' },
        { id: 'q3', prompt: 'Los gatos están ___ de la mesa (под).', options: ['encima', 'debajo', 'delante'], correct: 'debajo' },
        { id: 'q4', prompt: 'Pon el libro ___ de la mesa (на).', options: ['encima', 'debajo', 'detrás'], correct: 'encima' },
        { id: 'q5', prompt: 'Cierra la puerta, hay corriente ___.', options: ['fuera', 'dentro', 'arriba'], correct: 'fuera' },
        { id: 'q6', prompt: 'Vivo ___ del parque, lo veo desde la ventana.', options: ['lejos', 'enfrente', 'dentro'], correct: 'enfrente' },
      ],
    },

    {
      id: '100.10',
      title: 'Соберите фразу',
      type: 'fill',
      instructions: 'Из данных слов соберите естественную фразу. Решайте: наречие в конце или в начале (с инверсией).',
      questions: [
        { id: 'q1', prompt: 'Niños / aquí / venir →', correct: ['Niños, venid aquí.', 'Venid aquí, niños.', 'Niños, venid aquí', 'Venid aquí, niños'] },
        { id: 'q2', prompt: 'el coche / fuera / dejar (yo) →', correct: ['Dejo el coche fuera.', 'Dejo el coche fuera'] },
        { id: 'q3', prompt: 'arriba / mis hermanos / vivir →', correct: ['Arriba viven mis hermanos.', 'Mis hermanos viven arriba.', 'Arriba viven mis hermanos', 'Mis hermanos viven arriba'] },
        { id: 'q4', prompt: 'la mesa / encima / poner (tú) / la lámpara →', correct: ['Pon la lámpara encima de la mesa.', 'Pon la lámpara encima de la mesa'] },
        { id: 'q5', prompt: 'allí dentro / hay / mucha gente →', correct: ['Allí dentro hay mucha gente.', 'Hay mucha gente allí dentro.', 'Allí dentro hay mucha gente', 'Hay mucha gente allí dentro'] },
      ],
    },

    {
      id: '100.11',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Послушайте и запишите услышанное полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Ven aquí, Bruno.',                      correct: ['Ven aquí, Bruno.', 'Ven aquí Bruno.', 'Ven aquí, Bruno', 'Ven aquí Bruno'] },
        { id: 'q2', prompt: '', audio: 'Vivo muy cerca.',                        correct: ['Vivo muy cerca.', 'Vivo muy cerca'] },
        { id: 'q3', prompt: '', audio: 'Aquí hay un zapato.',                     correct: ['Aquí hay un zapato.', 'Aquí hay un zapato'] },
        { id: 'q4', prompt: '', audio: 'Ponlo allí dentro.',                       correct: ['Ponlo allí dentro.', 'Ponlo allí dentro'] },
        { id: 'q5', prompt: '', audio: 'Abajo viven mis padres.',                   correct: ['Abajo viven mis padres.', 'Abajo viven mis padres'] },
        { id: 'q6', prompt: '', audio: 'La cafetería está enfrente.',                correct: ['La cafetería está enfrente.', 'La cafetería está enfrente'] },
      ],
    },

    {
      id: '100.12',
      title: 'Где ошибка?',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Ven aquí.', 'Vivo cerca.', 'Hay algo en aquí.', 'Mira allí.'], correct: 'Hay algo en aquí.', explanation: 'Перед наречиями <em>aquí, ahí, allí</em> не ставится предлог.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Aquí están las habitaciones.', 'Aquí las habitaciones están.', 'Las habitaciones están aquí.', 'Aquí hay un zapato.'], correct: 'Aquí las habitaciones están.', explanation: 'После наречия в начале — инверсия: глагол перед подлежащим.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Vivo cerca.', 'Vivo cerca de.', 'Vivo cerca del parque.', 'Vivo muy cerca.'], correct: 'Vivo cerca de.', explanation: 'Без существительного <em>de</em> не нужно — это просто наречие <em>cerca</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Ponlo allí dentro.', 'Ponlo allí en dentro.', 'Ponlo aquí fuera.', 'Ponlo ahí abajo.'], correct: 'Ponlo allí en dentro.', explanation: 'Между двумя наречиями места предлог не ставится.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Está enfrente.', 'Está enfrente de la casa.', 'Está al enfrente.', 'Vive enfrente de mí.'], correct: 'Está al enfrente.', explanation: 'Артикль перед <em>enfrente</em> не ставится.' },
      ],
    },
  ],
};
