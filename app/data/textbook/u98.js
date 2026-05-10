// ============================================================
// Unidad 98 — Gerundio
// trabajando, comiendo, viviendo
// Образование (-ando / -iendo + неправильные),
// значения (одновременность, образ действия),
// перифразы seguir + ger., llevar + ger.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u98 = {
  id: 'u98',
  number: 98,
  title: { es: 'trabajando, comiendo, viviendo', topic: 'Gerundio' },
  topicRu: 'Герундий: формы, употребление, перифразы',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'El <strong>gerundio</strong> es una forma no personal del verbo. Termina en <em>-ando</em> (verbos en -ar) o <em>-iendo</em> (verbos en -er, -ir) y se refiere a la realización de la acción indicada por el verbo.',
      ru: '<strong>Герундий</strong> (gerundio) — неличная форма глагола, обозначающая «процесс совершения действия» («делая», «совершая»). Образуется суффиксами <em>-ando</em> (от глаголов на -ar) и <em>-iendo</em> (от глаголов на -er, -ir).',
      examples: [
        { es: 'Beto se levanta cantando.', ru: 'Бето встаёт, напевая.' },
        { es: 'Mira unas fotos de mis hijos tocando el piano.', ru: 'Смотри фотографии моих детей, играющих на пианино.' },
      ],
    },

    {
      type: 'heading',
      text: 'Образование',
    },
    {
      type: 'table',
      caption: 'Регулярные глаголы',
      columns: ['Окончание инфинитива', 'Суффикс герундия', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<strong>-ar</strong>', '<strong>-ando</strong>', '<em>trabajar → trabajando, hablar → hablando</em>'],
        ['<strong>-er</strong>', '<strong>-iendo</strong>', '<em>comer → comiendo, beber → bebiendo</em>'],
        ['<strong>-ir</strong>', '<strong>-iendo</strong>', '<em>vivir → viviendo, escribir → escribiendo</em>'],
      ],
    },

    {
      type: 'rule',
      es: 'Hay verbos <strong>irregulares</strong> con cambio vocálico en la raíz: <em>e → i</em> (decir → diciendo; pedir, repetir, seguir, sentir, venir, vestir(se)), <em>o → u</em> (dormir → durmiendo; morir(se), poder).',
      ru: 'У части глаголов корневая гласная меняется: <em>e → i</em> (<em>decir → diciendo</em>, также <em>pedir, repetir, seguir, sentir, venir, vestirse</em>) и <em>o → u</em> (<em>dormir → durmiendo</em>, также <em>morir(se), poder</em>).',
      examples: [
        { es: 'decir → diciendo', ru: 'говоря' },
        { es: 'dormir → durmiendo', ru: 'спя' },
        { es: 'pedir → pidiendo', ru: 'прося' },
        { es: 'venir → viniendo', ru: 'идя/приходя' },
      ],
    },

    {
      type: 'atencion',
      es: 'Si la raíz acaba en <strong>vocal</strong>, en lugar de <em>-iendo</em> se escribe <strong>-yendo</strong>: <em>leer → leyendo, oír → oyendo, ir → yendo, traer → trayendo, construir → construyendo</em>. Pero <em>reír → riendo, freír → friendo</em>.',
      ru: 'Если корень оканчивается на <strong>гласный</strong>, вместо <em>-iendo</em> пишется <strong>-yendo</strong>: <em>leer → leyendo, oír → oyendo, ir → yendo, traer → trayendo, construir → construyendo</em>. <em>reír → riendo, freír → friendo</em> — исключения.',
    },

    {
      type: 'heading',
      text: 'Когда используется',
    },
    {
      type: 'rule',
      es: 'Se usa el gerundio para hablar de una <strong>acción que sucede al mismo tiempo</strong> que otra (= <em>mientras</em>) o para indicar <strong>cómo se hace algo</strong> (modo).',
      ru: 'Герундий используется в двух главных значениях: (1) <strong>одновременность</strong> двух действий (= <em>mientras</em>, «пока»); (2) <strong>образ действия</strong>, как выполняется главное действие.',
      examples: [
        { es: 'No me gusta escuchar música leyendo.', ru: 'Я не люблю слушать музыку, когда читаю.' },
        { es: 'Carlos siempre habla gritando.', ru: 'Карлос всегда говорит, крича. (= громко)' },
        { es: 'Se hizo rico vendiendo enciclopedias.', ru: 'Он разбогател, продавая энциклопедии.' },
      ],
    },

    {
      type: 'rule',
      es: 'El gerundio normalmente se refiere a la <strong>misma persona</strong> que el verbo principal. Con verbos como <em>ver, oír, pintar, dibujar, fotografiar, imaginar, sorprender, recordar, conocer, hay/había</em> + persona, puede referirse a <strong>otra persona</strong>.',
      ru: 'Обычно герундий относится к <strong>тому же лицу</strong>, что и главный глагол. Но при глаголах восприятия (<em>ver, oír</em>) и творческих (<em>pintar, dibujar, fotografiar, imaginar</em>), а также после <em>hay/había</em> + лицо, герундий может относиться к <strong>другому</strong> лицу.',
      examples: [
        { es: 'Me acosté temblando de frío.', ru: 'Я лёг спать, дрожа от холода. (я лёг — я дрожал)' },
        { es: 'Vi una avioneta volando.', ru: 'Я увидел самолётик летящим. (я увидел — он летел)' },
        { es: 'Hay un perro ladrando en la calle.', ru: 'На улице лает собака.' },
      ],
    },

    {
      type: 'heading',
      text: 'seguir / llevar + gerundio',
    },
    {
      type: 'rule',
      es: '<em>Seguir</em> + gerundio indica la <strong>continuación</strong> de una acción («продолжать делать»). <em>Llevar</em> + gerundio (+ período de tiempo / desde + fecha) indica la <strong>duración</strong> de una acción hasta el momento al que nos referimos.',
      ru: '<em>Seguir</em> + герундий = <strong>«продолжать»</strong>. <em>Llevar</em> + герундий + период времени (или + <em>desde</em> + момент) = <strong>«сколько времени уже делаю»</strong>.',
      examples: [
        { es: 'Sigo buscando trabajo.', ru: 'Я продолжаю искать работу.' },
        { es: 'Le dije que se callara, pero siguió hablando.', ru: 'Я сказал ему замолчать, но он продолжал говорить.' },
        { es: 'Sofía llevaba cuatro meses viviendo en México.', ru: 'София жила в Мексике уже четыре месяца.' },
        { es: 'Llevo esperando desde las cuatro.', ru: 'Я жду уже с четырёх.' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '98.1',
      title: 'Образуйте герундий',
      type: 'fill',
      instructions: 'Дан инфинитив — напишите герундий.',
      questions: [
        { id: 'q1', prompt: '<em>trabajar</em> →',  correct: 'trabajando' },
        { id: 'q2', prompt: '<em>comer</em> →',     correct: 'comiendo' },
        { id: 'q3', prompt: '<em>vivir</em> →',     correct: 'viviendo' },
        { id: 'q4', prompt: '<em>hablar</em> →',    correct: 'hablando' },
        { id: 'q5', prompt: '<em>escribir</em> →',  correct: 'escribiendo' },
        { id: 'q6', prompt: '<em>decir</em> →',     correct: 'diciendo', explanation: '<em>e → i</em> в корне.' },
        { id: 'q7', prompt: '<em>dormir</em> →',    correct: 'durmiendo', explanation: '<em>o → u</em> в корне.' },
        { id: 'q8', prompt: '<em>pedir</em> →',     correct: 'pidiendo' },
        { id: 'q9', prompt: '<em>venir</em> →',     correct: 'viniendo' },
        { id: 'q10', prompt: '<em>leer</em> →',     correct: 'leyendo', explanation: 'После гласной — <em>-yendo</em>.' },
        { id: 'q11', prompt: '<em>oír</em> →',      correct: 'oyendo' },
        { id: 'q12', prompt: '<em>ir</em> →',       correct: 'yendo' },
        { id: 'q13', prompt: '<em>traer</em> →',    correct: 'trayendo' },
        { id: 'q14', prompt: '<em>reír</em> →',     correct: 'riendo', explanation: 'Исключение: <em>riendo</em>, не <em>reyendo</em>.' },
      ],
    },

    {
      id: '98.2',
      title: 'Замените «mientras» на герундий',
      type: 'fill',
      instructions: 'Перепишите фразу с герундием. Образец: <em>Se marchó mientras se reía → Se marchó riendo.</em>',
      questions: [
        { id: 'q1', prompt: '<em>Me gusta trabajar mientras escucho música.</em> →', correct: ['Me gusta trabajar escuchando música.', 'Me gusta trabajar escuchando música'] },
        { id: 'q2', prompt: '<em>Carmen desayuna mientras lee el periódico.</em> →', correct: ['Carmen desayuna leyendo el periódico.', 'Carmen desayuna leyendo el periódico'] },
        { id: 'q3', prompt: '<em>Me afeito mientras escucho las noticias.</em> →', correct: ['Me afeito escuchando las noticias.', 'Me afeito escuchando las noticias'] },
        { id: 'q4', prompt: '<em>Lola estudia mientras escucha la radio.</em> →', correct: ['Lola estudia escuchando la radio.', 'Lola estudia escuchando la radio'] },
        { id: 'q5', prompt: '<em>Pedro siempre habla mientras come.</em> →', correct: ['Pedro siempre habla comiendo.', 'Pedro siempre habla comiendo'] },
      ],
    },

    {
      id: '98.3',
      title: 'Замените существительное на герундий',
      type: 'fill',
      instructions: 'Замените подчёркнутую группу с предлогом на герундий («с улыбкой» → «улыбаясь»). Образец: <em>Contestó con una sonrisa → Contestó sonriendo.</em>',
      questions: [
        { id: 'q1', prompt: '<em>Bajaron las escaleras a todo correr.</em> →', correct: ['Bajaron las escaleras corriendo.', 'Bajaron las escaleras corriendo'] },
        { id: 'q2', prompt: '<em>Con los viajes se conoce a mucha gente.</em> →', correct: ['Viajando se conoce a mucha gente.', 'Viajando se conoce a mucha gente'] },
        { id: 'q3', prompt: '<em>Nuestro profesor es feliz con el trabajo.</em> →', correct: ['Nuestro profesor es feliz trabajando.', 'Nuestro profesor es feliz trabajando'] },
        { id: 'q4', prompt: '<em>Con la lectura se conocen muchos mundos.</em> →', correct: ['Leyendo se conocen muchos mundos.', 'Leyendo se conocen muchos mundos'] },
        { id: 'q5', prompt: '<em>Con la práctica se aprende.</em> →', correct: ['Practicando se aprende.', 'Practicando se aprende'] },
      ],
    },

    {
      id: '98.4',
      title: 'Объедините фразы с герундием',
      type: 'fill',
      instructions: 'Замените «<em>cuando + глагол</em>» / «<em>que + глагол</em>» на герундий. Образец: <em>La policía sorprendió a los ladrones cuando hacían un agujero → La policía sorprendió a los ladrones haciendo un agujero.</em>',
      questions: [
        { id: 'q1', prompt: '<em>Esta mañana he visto a Emilio cuando salía de su casa.</em> →', correct: ['Esta mañana he visto a Emilio saliendo de su casa.', 'Esta mañana he visto a Emilio saliendo de su casa'] },
        { id: 'q2', prompt: '<em>Amalia conoció a su marido cuando viajaban por Cuba.</em> →', correct: ['Amalia conoció a su marido viajando por Cuba.', 'Amalia conoció a su marido viajando por Cuba'] },
        { id: 'q3', prompt: '<em>Me gusta fotografiar a la gente mientras camina por la ciudad.</em> →', correct: ['Me gusta fotografiar a la gente caminando por la ciudad.', 'Me gusta fotografiar a la gente caminando por la ciudad'] },
        { id: 'q4', prompt: '<em>Ayer había aquí un hombre que vendía dulces.</em> →', correct: ['Ayer había aquí un hombre vendiendo dulces.', 'Ayer había aquí un hombre vendiendo dulces'] },
        { id: 'q5', prompt: '<em>Recuerdo a Ana cuando daba sus primeros pasos.</em> →', correct: ['Recuerdo a Ana dando sus primeros pasos.', 'Recuerdo a Ana dando sus primeros pasos'] },
        { id: 'q6', prompt: '<em>En el parque hay dos chicos que tocan la guitarra.</em> →', correct: ['En el parque hay dos chicos tocando la guitarra.', 'En el parque hay dos chicos tocando la guitarra'] },
      ],
    },

    {
      id: '98.5',
      title: 'seguir + gerundio (продолжение действия)',
      type: 'fill',
      instructions: 'Запишите <em>seguir</em> + герундий нужного глагола в нужном времени.',
      questions: [
        { id: 'q1', prompt: '¿Dónde trabajas ahora, Carlos? — ___ (trabajar) en la academia de idiomas.', correct: 'Sigo trabajando' },
        { id: 'q2', prompt: 'Le dije que se callara, pero (él) ___ (hablar).', correct: 'siguió hablando' },
        { id: 'q3', prompt: '¿Llueve todavía? — Sí, ___ (llover).', correct: 'sigue lloviendo' },
        { id: 'q4', prompt: 'Lupe estudia con la radio puesta y los niños ___ (jugar) al lado.', correct: 'siguen jugando' },
        { id: 'q5', prompt: 'No me hagas caso, (yo) ___ (leer) un rato más.', correct: 'sigo leyendo' },
        { id: 'q6', prompt: 'Cuando entré en la sala, Marta ___ (escribir) en el ordenador.', correct: ['seguía escribiendo'] },
      ],
    },

    {
      id: '98.6',
      title: 'llevar + gerundio (длительность)',
      type: 'fill',
      instructions: 'Поставьте <em>llevar</em> + герундий + период / desde. Образец: <em>(yo / dos horas / esperar) → Llevo dos horas esperando.</em>',
      questions: [
        { id: 'q1', prompt: '(yo / un mes / estudiar español) →', correct: ['Llevo un mes estudiando español.', 'Llevo un mes estudiando español'] },
        { id: 'q2', prompt: '¿Cuánto tiempo (vosotros / vivir aquí)? →', correct: ['¿Cuánto tiempo lleváis viviendo aquí?', 'Cuánto tiempo lleváis viviendo aquí?', '¿Cuánto tiempo lleváis viviendo aquí'] },
        { id: 'q3', prompt: '(nosotros / dos años / trabajar juntos) →', correct: ['Llevamos dos años trabajando juntos.', 'Llevamos dos años trabajando juntos'] },
        { id: 'q4', prompt: '(yo / desde las ocho / esperar) →', correct: ['Llevo esperando desde las ocho.', 'Llevo esperando desde las ocho'] },
        { id: 'q5', prompt: 'Cuando me llamaste, (yo / una hora / leer). →', correct: ['llevaba una hora leyendo.', 'Llevaba una hora leyendo.', 'llevaba una hora leyendo', 'Llevaba una hora leyendo'] },
      ],
    },

    {
      id: '98.7',
      title: 'Найдите фразы без ошибок',
      type: 'multi',
      instructions: 'Отметьте все грамматически корректные фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Estoy leyendo un libro.',
            'Estoy leiendo un libro.',
            'Pedro está durmiendo.',
            'Pedro está dormiendo.',
            'Los niños vienen corriendo.',
            'Los niños vienen corrindo.',
            'Mira, hay un perro ladrando.',
            'Sigo trabajando aquí.',
            'Sigo a trabajar aquí.',
            'Llevo dos años viviendo en Madrid.',
            'Llevo dos años a vivir en Madrid.',
          ],
          correct: [
            'Estoy leyendo un libro.',
            'Pedro está durmiendo.',
            'Los niños vienen corriendo.',
            'Mira, hay un perro ladrando.',
            'Sigo trabajando aquí.',
            'Llevo dos años viviendo en Madrid.',
          ],
          explanation: 'После корня на гласный — <em>-yendo</em> (<em>leyendo</em>). У <em>dormir, morir, poder</em> в корне <em>o → u</em>. <em>seguir</em> и <em>llevar</em> + герундий идут <strong>без предлога</strong>.',
        },
      ],
    },

    {
      id: '98.8',
      title: 'Сопоставьте инфинитив и герундий',
      type: 'match',
      instructions: 'Подберите герундий для каждого инфинитива.',
      pool: ['leyendo', 'durmiendo', 'pidiendo', 'oyendo', 'yendo', 'diciendo', 'viniendo', 'riendo'],
      questions: [
        { id: 'q1', prompt: '<em>leer</em>',   correct: 'leyendo' },
        { id: 'q2', prompt: '<em>dormir</em>', correct: 'durmiendo' },
        { id: 'q3', prompt: '<em>pedir</em>',  correct: 'pidiendo' },
        { id: 'q4', prompt: '<em>oír</em>',    correct: 'oyendo' },
        { id: 'q5', prompt: '<em>ir</em>',     correct: 'yendo' },
        { id: 'q6', prompt: '<em>decir</em>',  correct: 'diciendo' },
        { id: 'q7', prompt: '<em>venir</em>',  correct: 'viniendo' },
        { id: 'q8', prompt: '<em>reír</em>',   correct: 'riendo' },
      ],
    },

    {
      id: '98.9',
      title: 'Какая форма?',
      type: 'choice',
      instructions: 'Выберите правильный вариант.',
      questions: [
        { id: 'q1', prompt: 'Estoy ___ (escuchar) la radio.', options: ['escuchando', 'escuchiendo', 'escuchado'], correct: 'escuchando' },
        { id: 'q2', prompt: 'Sigo ___ (oír) ese ruido extraño.', options: ['oiendo', 'oyendo', 'oído'], correct: 'oyendo' },
        { id: 'q3', prompt: 'Carlos sale de casa ___ (correr).', options: ['corriendo', 'corrindo', 'corrido'], correct: 'corriendo' },
        { id: 'q4', prompt: 'Llevo dos años ___ (vivir) en Sevilla.', options: ['viviendo', 'vivido', 'a vivir'], correct: 'viviendo' },
        { id: 'q5', prompt: 'Vi a Marta ___ (leer) en el parque.', options: ['leyendo', 'leiendo', 'a leer'], correct: 'leyendo' },
        { id: 'q6', prompt: '¿Qué estás ___ (decir)?', options: ['decendo', 'diciendo', 'dicendo'], correct: 'diciendo' },
      ],
    },

    {
      id: '98.10',
      title: 'Соберите фразу',
      type: 'fill',
      instructions: 'Из данных слов составьте фразу с герундием. Сохраняйте время основного глагола.',
      questions: [
        { id: 'q1', prompt: '(yo) / aprender / mucho / leer / libros →', correct: ['Aprendo mucho leyendo libros.', 'Aprendo mucho leyendo libros'] },
        { id: 'q2', prompt: 'Pablo / entrar (perfecto) / cantar →', correct: ['Pablo ha entrado cantando.', 'Pablo ha entrado cantando'] },
        { id: 'q3', prompt: '(yo) / seguir / esperar / a María →', correct: ['Sigo esperando a María.', 'Sigo esperando a María'] },
        { id: 'q4', prompt: '(nosotros) / llevar / tres horas / estudiar →', correct: ['Llevamos tres horas estudiando.', 'Llevamos tres horas estudiando'] },
        { id: 'q5', prompt: 'Hay / un niño / llorar / en el parque →', correct: ['Hay un niño llorando en el parque.', 'Hay un niño llorando en el parque'] },
      ],
    },

    {
      id: '98.11',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Послушайте и запишите услышанное полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Estoy leyendo un libro.',                correct: ['Estoy leyendo un libro.', 'Estoy leyendo un libro'] },
        { id: 'q2', prompt: '', audio: 'Pedro está durmiendo.',                   correct: ['Pedro está durmiendo.', 'Pedro está durmiendo'] },
        { id: 'q3', prompt: '', audio: 'Sigo trabajando en la academia.',          correct: ['Sigo trabajando en la academia.', 'Sigo trabajando en la academia'] },
        { id: 'q4', prompt: '', audio: 'Llevo dos años viviendo en Sevilla.',       correct: ['Llevo dos años viviendo en Sevilla.', 'Llevo dos años viviendo en Sevilla'] },
        { id: 'q5', prompt: '', audio: 'Hay un niño llorando.',                     correct: ['Hay un niño llorando.', 'Hay un niño llorando'] },
        { id: 'q6', prompt: '', audio: 'Aprendo español viendo películas.',         correct: ['Aprendo español viendo películas.', 'Aprendo español viendo películas'] },
      ],
    },

    {
      id: '98.12',
      title: 'Какое значение?',
      type: 'choice',
      instructions: 'Что означает герундий в этой фразе?',
      questions: [
        { id: 'q1', prompt: '<em>Marta estudia escuchando música.</em>', options: ['одновременность (= mientras)', 'образ действия (= cómo)', 'причина'], correct: 'одновременность (= mientras)' },
        { id: 'q2', prompt: '<em>Se hizo rico vendiendo enciclopedias.</em>', options: ['одновременность', 'образ действия (как именно разбогател)', 'цель'], correct: 'образ действия (как именно разбогател)' },
        { id: 'q3', prompt: '<em>Los niños entraron riendo.</em>', options: ['образ действия / манера', 'результат', 'привычка'], correct: 'образ действия / манера' },
        { id: 'q4', prompt: '<em>Llevo media hora esperando.</em>', options: ['одновременность', 'длительность процесса', 'привычка'], correct: 'длительность процесса' },
        { id: 'q5', prompt: '<em>Sigo trabajando aquí.</em>', options: ['начало действия', 'продолжение действия', 'окончание действия'], correct: 'продолжение действия' },
      ],
    },
  ],
};
