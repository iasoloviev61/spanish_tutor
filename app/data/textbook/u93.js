// ============================================================
// Unidad 93 — Infinitivo
// Viajar es estupendo
// Базовая форма глагола (-ar, -er, -ir/-ír),
// её функции: словарная форма, существительное,
// сочетания «глагол + инфинитив», «глагол + предлог + инфинитив»,
// инфинитив для инструкций и запретов.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u93 = {
  id: 'u93',
  number: 93,
  title: { es: 'Viajar es estupendo', topic: 'Infinitivo' },
  topicRu: 'Инфинитив: формы и употребление',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'El <strong>infinitivo</strong> es la forma del verbo que aparece en el diccionario. Expresa el significado del verbo sin indicar persona ni tiempo. Termina en <strong>-ar</strong>, <strong>-er</strong> o <strong>-ir / -ír</strong>.',
      ru: '<strong>Инфинитив</strong> — это форма глагола, в которой он стоит в словаре. Передаёт значение глагола, но не показывает лицо и время. Окончания: <strong>-ar</strong>, <strong>-er</strong>, <strong>-ir / -ír</strong>.',
      examples: [
        { es: 'trabaj-ar, cant-ar, habl-ar', ru: 'работать, петь, говорить' },
        { es: 'com-er, ten-er, le-er', ru: 'есть, иметь, читать' },
        { es: 'viv-ir, escrib-ir, re-ír', ru: 'жить, писать, смеяться' },
      ],
    },

    {
      type: 'heading',
      text: 'Окончания',
    },
    {
      type: 'table',
      caption: 'Три типа инфинитива',
      columns: ['-ar', '-er', '-ir / -ír'],
      colClasses: ['col-pattern', 'col-pattern', 'col-pattern'],
      rows: [
        ['<em>trabajar</em>', '<em>comer</em>', '<em>vivir</em>'],
        ['<em>cantar</em>', '<em>correr</em>', '<em>reír</em>'],
        ['<em>hablar</em>', '<em>beber</em>', '<em>escribir</em>'],
      ],
    },

    {
      type: 'heading',
      text: 'Инфинитив как существительное',
    },
    {
      type: 'rule',
      es: 'El infinitivo se puede usar como un <strong>nombre singular masculino</strong> — equivale a un sustantivo.',
      ru: 'Инфинитив может выступать как <strong>существительное мужского рода в единственном числе</strong>: соответствует русскому отглагольному существительному («курение», «путешествия») или субъектному инфинитиву («курить», «путешествовать»).',
      examples: [
        { es: 'Fumar es malo. (= El tabaco es malo.)', ru: 'Курить вредно.' },
        { es: 'Viajar es estupendo.', ru: 'Путешествовать — это здорово.' },
        { es: 'Comprar es aburrido. (= Las compras son aburridas.)', ru: 'Покупки — скучное занятие.' },
        { es: 'Me gusta leer.', ru: 'Мне нравится читать.' },
      ],
    },

    {
      type: 'heading',
      text: 'После других глаголов',
    },
    {
      type: 'rule',
      es: 'El infinitivo se usa <strong>detrás de muchos verbos</strong>. Algunos lo unen <strong>directamente</strong>; otros, mediante una <strong>preposición</strong>.',
      ru: 'Инфинитив обычно стоит <strong>после другого глагола</strong>. Одни глаголы соединяются с ним <strong>напрямую</strong>, другие — через <strong>предлог</strong>.',
      examples: [
        { es: 'verbo + infinitivo: He conseguido terminar el proyecto.', ru: 'Глагол + инфинитив: «Я смог закончить проект».' },
        { es: 'verbo + a / con / de / en... + infinitivo: Soñaba con ser bailarina.', ru: 'Глагол + предлог + инфинитив: «Я мечтала стать балериной».' },
      ],
    },

    {
      type: 'table',
      caption: 'Как соединяется глагол + инфинитив',
      columns: ['Соединение', 'Глаголы', 'Пример'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['<strong>напрямую</strong>', '<em>conseguir, dejar (= permitir), esperar, hacer (= obligar), necesitar, oír, poder, preferir, querer, saber, ver...</em>', '<em>No nos dejan usar el móvil. Necesitamos cambiar dinero.</em>'],
        ['<strong>+ a</strong>', '<em>aprender, empezar, enseñar, ir, salir, venir...</em>', '<em>Estoy aprendiendo a conducir. Vamos a comer.</em>'],
        ['<strong>+ de</strong>', '<em>acordarse, encargarse, olvidarse, tratar...</em>', '<em>Me olvidé de despertarte. Trata de llegar pronto.</em>'],
        ['<strong>+ en</strong>', '<em>dudar, insistir, interesarse...</em>', '<em>Si tienes algún problema, no dudes en llamarme.</em>'],
        ['<strong>+ con</strong>', '<em>amenazar, soñar...</em>', '<em>Soñaba con ser piloto.</em>'],
      ],
    },

    {
      type: 'heading',
      text: 'Инструкции и запреты',
    },
    {
      type: 'rule',
      es: 'En <strong>textos escritos</strong> (instrucciones, recetas, señales) el infinitivo puede sustituir al imperativo, sobre todo en órdenes <strong>impersonales</strong>.',
      ru: 'В <strong>письменных текстах</strong> (инструкции, рецепты, таблички) инфинитив часто <strong>заменяет повелительное наклонение</strong>, особенно когда обращение безличное.',
      examples: [
        { es: 'No entrar. (= No entren.)', ru: 'Не входить.' },
        { es: 'No fumar.', ru: 'Не курить.' },
        { es: 'Asar dos pimientos y pelarlos...', ru: 'Запечь два перца и очистить...' },
        { es: 'Empujar / Tirar', ru: 'От себя / На себя (на двери)' },
      ],
    },

    {
      type: 'atencion',
      es: 'Cuando el infinitivo lleva pronombres átonos, estos van <strong>pegados al final</strong>: <em>levantarme, dárselo, escribirles</em>.',
      ru: 'Если у инфинитива есть безударные местоимения (<em>me, te, le, lo, la, se...</em>), они присоединяются <strong>в конце слова</strong>: <em>levantarme, dárselo, escribirles</em>.',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '93.1',
      title: 'Назовите инфинитив',
      type: 'fill',
      instructions: 'Запишите словарную форму глагола.',
      questions: [
        { id: 'q1', prompt: '<em>hablo</em> →', correct: 'hablar' },
        { id: 'q2', prompt: '<em>comemos</em> →', correct: 'comer' },
        { id: 'q3', prompt: '<em>viven</em> →', correct: 'vivir' },
        { id: 'q4', prompt: '<em>tengo</em> →', correct: 'tener' },
        { id: 'q5', prompt: '<em>vamos</em> →', correct: 'ir', explanation: '<em>vamos</em> — это от <em>ir</em>.' },
        { id: 'q6', prompt: '<em>sé</em> →', correct: 'saber' },
        { id: 'q7', prompt: '<em>río</em> →', correct: 'reír', explanation: 'Не забудьте про тильду: <em>reír</em>.' },
        { id: 'q8', prompt: '<em>duermes</em> →', correct: 'dormir' },
        { id: 'q9', prompt: '<em>vuelvo</em> →', correct: 'volver' },
        { id: 'q10', prompt: '<em>pidió</em> →', correct: 'pedir' },
      ],
    },

    {
      id: '93.2',
      title: 'Замените существительное инфинитивом',
      type: 'fill',
      instructions: 'Образец: <em>El estudio es importante. → Estudiar es importante.</em>',
      questions: [
        { id: 'q1', prompt: '<em>El trabajo es duro.</em> → ___ es duro.', correct: 'Trabajar' },
        { id: 'q2', prompt: '<em>El baile me encanta.</em> → Me encanta ___.', correct: 'bailar' },
        { id: 'q3', prompt: '<em>Los viajes son interesantes.</em> → ___ es interesante.', correct: 'Viajar' },
        { id: 'q4', prompt: '<em>El descanso es necesario.</em> → ___ es necesario.', correct: 'Descansar' },
        { id: 'q5', prompt: '<em>La lectura es relajante.</em> → ___ es relajante.', correct: 'Leer' },
        { id: 'q6', prompt: '<em>El amor da fuerza.</em> → ___ da fuerza.', correct: 'Amar' },
        { id: 'q7', prompt: '<em>La mentira es fea.</em> → ___ es feo.', correct: 'Mentir', explanation: 'Инфинитив всегда мужского рода — поэтому <em>feo</em>.' },
      ],
    },

    {
      id: '93.3',
      title: 'Какой предлог (или ничего)?',
      type: 'choice',
      instructions: 'Выберите верный предлог между глаголом и инфинитивом. <code>—</code> = без предлога.',
      questions: [
        { id: 'q1', prompt: 'Estoy aprendiendo ___ tocar la guitarra.', options: ['—', 'a', 'de', 'en'], correct: 'a' },
        { id: 'q2', prompt: 'Necesito ___ comprar pan.', options: ['—', 'a', 'de', 'en'], correct: '—' },
        { id: 'q3', prompt: 'Me he olvidado ___ llamar a Lola.', options: ['—', 'a', 'de', 'en'], correct: 'de' },
        { id: 'q4', prompt: 'No dudes ___ pedirme ayuda.', options: ['—', 'a', 'de', 'en'], correct: 'en' },
        { id: 'q5', prompt: 'Soñaba ___ ser bailarina.', options: ['—', 'a', 'con', 'en'], correct: 'con' },
        { id: 'q6', prompt: 'Quiero ___ irme a casa.', options: ['—', 'a', 'de', 'en'], correct: '—' },
        { id: 'q7', prompt: 'Empieza ___ llover.', options: ['—', 'a', 'de', 'en'], correct: 'a' },
        { id: 'q8', prompt: 'No puedo ___ creer que sea verdad.', options: ['—', 'a', 'de', 'en'], correct: '—' },
        { id: 'q9', prompt: 'Trata ___ no llegar tarde.', options: ['—', 'a', 'de', 'en'], correct: 'de' },
        { id: 'q10', prompt: 'Insiste ___ pagar él.', options: ['—', 'a', 'de', 'en'], correct: 'en' },
      ],
    },

    {
      id: '93.4',
      title: 'Подберите глагол по предлогу',
      type: 'match',
      instructions: 'Подберите типичный глагол к каждому соединителю с инфинитивом.',
      pool: ['aprender', 'olvidarse', 'soñar', 'insistir', 'querer', 'empezar', 'tratar', 'dudar'],
      questions: [
        { id: 'q1', prompt: '___ <em>+ a</em> + inf. (учиться)',     correct: 'aprender' },
        { id: 'q2', prompt: '___ <em>+ a</em> + inf. (начинать)',    correct: 'empezar' },
        { id: 'q3', prompt: '___ <em>+ de</em> + inf. (забыть)',     correct: 'olvidarse' },
        { id: 'q4', prompt: '___ <em>+ de</em> + inf. (стараться)',  correct: 'tratar' },
        { id: 'q5', prompt: '___ <em>+ en</em> + inf. (настаивать)', correct: 'insistir' },
        { id: 'q6', prompt: '___ <em>+ en</em> + inf. (сомневаться)', correct: 'dudar' },
        { id: 'q7', prompt: '___ <em>+ con</em> + inf. (мечтать)',    correct: 'soñar' },
        { id: 'q8', prompt: '___ + inf. (хотеть, прямо)',             correct: 'querer' },
      ],
    },

    {
      id: '93.5',
      title: 'Закончите фразу инфинитивом',
      type: 'fill',
      instructions: 'Поставьте глагол из скобок в инфинитив (с местоимением, если нужно).',
      questions: [
        { id: 'q1', prompt: 'No quiero (ir) ___ a la fiesta.', correct: 'ir' },
        { id: 'q2', prompt: 'Mañana voy a (estudiar) ___ todo el día.', correct: 'estudiar' },
        { id: 'q3', prompt: 'Necesito (dormir) ___ ocho horas.', correct: 'dormir' },
        { id: 'q4', prompt: 'Empiezo a (entender) ___ el español.', correct: 'entender' },
        { id: 'q5', prompt: 'Me he olvidado de (cerrar) ___ la puerta.', correct: 'cerrar' },
        { id: 'q6', prompt: 'No puedo (levantarse: 1ª pers.) ___ tan pronto.', correct: 'levantarme', explanation: 'Местоимение приклеивается к инфинитиву.' },
        { id: 'q7', prompt: '¿Quieres (decirme) ___ la verdad?', correct: 'decirme' },
        { id: 'q8', prompt: 'Tengo que (acordarse: 1ª pers.) ___ de comprarlo.', correct: 'acordarme' },
      ],
    },

    {
      id: '93.6',
      title: 'Соедините две части одной фразой',
      type: 'fill',
      instructions: 'Используйте инфинитив. Образец: <em>He hablado con Raquel. Lo he conseguido. → He conseguido hablar con Raquel.</em>',
      questions: [
        { id: 'q1', prompt: 'No salgo de noche. Mis padres no me dejan. →', correct: ['Mis padres no me dejan salir de noche.', 'Mis padres no me dejan salir de noche'] },
        { id: 'q2', prompt: 'No como pescado. No puedo. →', correct: ['No puedo comer pescado.', 'No puedo comer pescado'] },
        { id: 'q3', prompt: 'Bebo mucha agua. Lo necesito. →', correct: ['Necesito beber mucha agua.', 'Necesito beber mucha agua'] },
        { id: 'q4', prompt: 'Trabajo bien. Lo prefiero. →', correct: ['Prefiero trabajar bien.', 'Prefiero trabajar bien'] },
        { id: 'q5', prompt: 'Apagaste la luz. Te vi. →', correct: ['Te vi apagar la luz.', 'Te vi apagar la luz'] },
      ],
    },

    {
      id: '93.7',
      title: 'Знаки и инструкции — поставьте инфинитив',
      type: 'fill',
      instructions: 'Перепишите запрет/инструкцию в форме инфинитива (как на табличках).',
      questions: [
        { id: 'q1', prompt: '«No fumen aquí.» →', correct: ['No fumar.', 'No fumar', 'No fumar aquí.', 'No fumar aquí'] },
        { id: 'q2', prompt: '«No entren.» →', correct: ['No entrar.', 'No entrar'] },
        { id: 'q3', prompt: '«No toquen el cuadro.» →', correct: ['No tocar el cuadro.', 'No tocar el cuadro', 'No tocar.', 'No tocar'] },
        { id: 'q4', prompt: '«Empujen la puerta.» →', correct: ['Empujar la puerta.', 'Empujar la puerta', 'Empujar.', 'Empujar'] },
        { id: 'q5', prompt: '«Tiren la basura aquí.» →', correct: ['Tirar la basura aquí.', 'Tirar la basura aquí'] },
        { id: 'q6', prompt: '«No usen el móvil con el conductor.» →', correct: ['No hablar con el conductor.', 'No hablar con el conductor', 'No usar el móvil.', 'No usar el móvil'] },
      ],
    },

    {
      id: '93.8',
      title: 'Найдите фразы без ошибок',
      type: 'multi',
      instructions: 'Отметьте все фразы с правильным управлением.',
      questions: [
        {
          id: 'q1',
          prompt: 'Где предлог поставлен правильно?',
          options: [
            'Empezó de llorar.',
            'Empezó a llorar.',
            'Aprende a leer.',
            'Aprende de leer.',
            'Quiero a comer.',
            'Quiero comer.',
            'Soñaba con ser actriz.',
            'Soñaba ser actriz.',
            'No te olvides de llamarme.',
            'No te olvides a llamarme.',
          ],
          correct: [
            'Empezó a llorar.',
            'Aprende a leer.',
            'Quiero comer.',
            'Soñaba con ser actriz.',
            'No te olvides de llamarme.',
          ],
          explanation: '<em>empezar a, aprender a, soñar con, olvidarse de</em>; <em>querer</em> — без предлога.',
        },
      ],
    },

    {
      id: '93.9',
      title: 'Дополните глаголом из рамки',
      type: 'choice',
      instructions: 'Выберите подходящий глагол.',
      questions: [
        { id: 'q1', prompt: '___ es bueno para la salud.', options: ['Caminar', 'Caminado', 'Camino'], correct: 'Caminar' },
        { id: 'q2', prompt: 'Acabamos de ___ una buena película.', options: ['ver', 'visto', 'veamos'], correct: 'ver' },
        { id: 'q3', prompt: 'Aprendo a ___ piano desde el año pasado.', options: ['toco', 'tocar', 'tocando'], correct: 'tocar' },
        { id: 'q4', prompt: '— No te olvides de ___ la luz.', options: ['apagar', 'apaga', 'apagado'], correct: 'apagar' },
        { id: 'q5', prompt: '___ es la mejor manera de aprender un idioma.', options: ['Practicar', 'Practica', 'Practicando'], correct: 'Practicar' },
      ],
    },

    {
      id: '93.10',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Запишите услышанное полностью, с диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Viajar es estupendo.',                  correct: ['Viajar es estupendo.', 'Viajar es estupendo'] },
        { id: 'q2', prompt: '', audio: 'Estoy aprendiendo a conducir.',         correct: ['Estoy aprendiendo a conducir.', 'Estoy aprendiendo a conducir'] },
        { id: 'q3', prompt: '', audio: 'No quiero ir al cine hoy.',              correct: ['No quiero ir al cine hoy.', 'No quiero ir al cine hoy'] },
        { id: 'q4', prompt: '', audio: 'Soñaba con ser bailarina.',                correct: ['Soñaba con ser bailarina.', 'Soñaba con ser bailarina'] },
        { id: 'q5', prompt: '', audio: 'No fumar.',                                  correct: ['No fumar.', 'No fumar'] },
      ],
    },

    {
      id: '93.11',
      title: 'Глагол с местоимением',
      type: 'fill',
      instructions: 'Замените дополнение местоимением и приклейте его к инфинитиву. Образец: <em>Quiero comprar el libro → Quiero comprarlo.</em>',
      questions: [
        { id: 'q1', prompt: 'Voy a llamar a Marta. → Voy a ___.',          correct: 'llamarla' },
        { id: 'q2', prompt: 'Tengo que terminar el trabajo. → Tengo que ___.', correct: 'terminarlo' },
        { id: 'q3', prompt: 'Quiero ver a mis amigos. → Quiero ___.',         correct: 'verlos' },
        { id: 'q4', prompt: 'Necesito comprar las entradas. → Necesito ___.',   correct: 'comprarlas' },
        { id: 'q5', prompt: 'Voy a leer el libro a Pablo. → Voy a ___.',          correct: ['leérselo'], explanation: '<em>le</em> + <em>lo</em> → <em>se</em> + <em>lo</em>; ударение пишется на первом слоге глагола.' },
      ],
    },
  ],
};
