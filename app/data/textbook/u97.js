// ============================================================
// Unidad 97 — Verbos seguidos de infinitivo o de subjuntivo
// Quiero ir / Quiero que vayas
// Когда подлежащее у двух глаголов одно — инфинитив;
// когда разные — que + subjuntivo.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u97 = {
  id: 'u97',
  number: 97,
  title: { es: 'Quiero ir / Quiero que vayas', topic: 'Verbos seguidos de infinitivo o de subjuntivo' },
  topicRu: 'Инфинитив или субхунтив после глаголов воли, желания, просьбы',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Algunos verbos van seguidos de otro verbo en <strong>infinitivo</strong> cuando los dos verbos se refieren a la <strong>misma persona</strong>.',
      ru: 'Если у обоих глаголов <strong>одно и то же подлежащее</strong> («хочу — кто? я; ехать — кто? я»), второй глагол ставится в <strong>инфинитив</strong>. Это касается глаголов воли, желания, просьбы, привычки, предпочтения и т. д.',
      examples: [
        { es: 'Preferimos comer en casa.', ru: 'Мы предпочитаем есть дома. (предпочитаем мы — едим мы)' },
        { es: 'Quiero ir a Colombia el año que viene.', ru: 'Я хочу поехать в Колумбию в следующем году.' },
        { es: 'Sara se encargó de reservar las entradas.', ru: 'Сара взялась забронировать билеты.' },
      ],
    },

    {
      type: 'rule',
      es: 'Cuando los dos verbos se refieren a <strong>personas diferentes</strong>, el segundo verbo va con <em>que</em> + <strong>subjuntivo</strong>.',
      ru: 'Если у глаголов <strong>разные подлежащие</strong> («хочу — я; ехал — ты»), второй глагол ставится через <em>que</em> + <strong>субхунтив</strong>.',
      examples: [
        { es: 'Quiero que vayas a Colombia conmigo.', ru: 'Я хочу, чтобы ты поехал со мной в Колумбию.' },
        { es: 'Preferimos que lo hagas tú.', ru: 'Мы предпочитаем, чтобы это сделал(а) ты.' },
        { es: 'Espero que se levanten temprano.', ru: 'Надеюсь, что они встанут рано.' },
        { es: 'Me encanta que estéis todos aquí.', ru: 'Мне очень приятно, что вы все здесь.' },
      ],
    },

    {
      type: 'heading',
      text: 'Какое время субхунтива?',
    },
    {
      type: 'rule',
      es: 'Se usa el <strong>presente de subjuntivo</strong> cuando se habla del presente o del futuro. Se usa el <strong>pretérito imperfecto de subjuntivo</strong> cuando se habla del pasado o después de una forma condicional.',
      ru: '<strong>Presente de subjuntivo</strong> — если речь о настоящем или будущем. <strong>Pretérito imperfecto de subjuntivo</strong> (формы на -<em>ara</em>/-<em>iera</em>) — если речь о прошлом или если первый глагол стоит в <em>condicional</em> (вежливая форма / гипотеза).',
      examples: [
        { es: 'Necesito que me hagas un favor.', ru: 'Мне нужно, чтобы ты сделал мне одолжение. (сейчас/скоро)' },
        { es: 'Preferí que lo hicieran ellos.', ru: 'Я предпочёл, чтобы это сделали они. (прошлое)' },
        { es: 'Me encantaría que vinieras a la fiesta.', ru: 'Мне бы очень хотелось, чтобы ты пришёл на праздник. (condicional → imperfecto subj.)' },
      ],
    },

    {
      type: 'heading',
      text: 'Сравнение',
    },
    {
      type: 'table',
      caption: 'Один субъект — два субъекта',
      columns: ['Infinitivo (одно лицо)', 'Subjuntivo (разные лица)'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>Necesito alquilar un coche.</em>', '<em>Necesito que me prestes el coche.</em>'],
        ['<em>Quiero ir al cine.</em>', '<em>Quiero que vayas al cine conmigo.</em>'],
        ['<em>Preferimos comer en casa.</em>', '<em>Preferimos que comas en casa.</em>'],
        ['<em>Espero llegar a tiempo.</em>', '<em>Espero que lleguéis a tiempo.</em>'],
      ],
    },

    {
      type: 'rule',
      es: 'Si el primer verbo lleva <strong>preposición</strong>, la preposición se pone delante de <em>que</em>: <em>encargarse de, acostumbrarse a, insistir en, alegrarse de...</em>',
      ru: 'Если первый глагол требует <strong>предлог</strong>, этот предлог обязательно ставится перед <em>que</em>: <em>encargarse <strong>de</strong> que, acostumbrarse <strong>a</strong> que, insistir <strong>en</strong> que, alegrarse <strong>de</strong> que...</em>',
      examples: [
        { es: 'Yo me encargo de que Roberto venga.', ru: 'Я займусь тем, чтобы Роберто пришёл.' },
        { es: 'Catalina insistió en que fuéramos a verla.', ru: 'Каталина настояла, чтобы мы её навестили.' },
        { es: 'Me alegro de que estés aquí.', ru: 'Я рад, что ты здесь.' },
      ],
    },

    {
      type: 'rule',
      es: 'Con algunos verbos (<em>dejar, permitir, prohibir, hacer, mandar</em>) se puede usar el <strong>infinitivo</strong> o el <strong>subjuntivo</strong> incluso cuando los sujetos son diferentes — las dos opciones son correctas.',
      ru: 'У глаголов <em>dejar, permitir, prohibir, hacer, mandar</em> можно использовать <strong>и инфинитив, и субхунтив</strong> даже при разных подлежащих — обе формы правильны.',
      examples: [
        { es: 'El director no deja comer en las aulas. = El director no deja que comamos en las aulas.', ru: 'Директор не разрешает есть в классах.' },
        { es: 'Te prohíbo salir. = Te prohíbo que salgas.', ru: 'Я запрещаю тебе выходить.' },
      ],
    },

    {
      type: 'atencion',
      es: '<em>Acordarse de, recordar, olvidarse de, olvidar</em> van seguidos de <em>que</em> + <strong>indicativo</strong> cuando los dos verbos se refieren a personas diferentes (no requieren subjuntivo): se trata de constatar un hecho.',
      ru: 'Глаголы <em>acordarse de, recordar, olvidarse de, olvidar</em> при разных подлежащих идут с <em>que</em> + <strong>indicativo</strong> (не субхунтив!), потому что речь о факте: <em>Acuérdate de que es mi cumpleaños mañana</em>, <em>No olvidéis que tenemos una reunión</em>.',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '97.1',
      title: 'Инфинитив или presente de subjuntivo?',
      type: 'fill',
      instructions: 'Раскройте скобки: один и тот же субъект — инфинитив; разные субъекты — <em>que</em> уже стоит, ставьте субхунтив.',
      questions: [
        { id: 'q1', prompt: 'Espero que Enrique me (devolver) ___ la cámara pronto.', correct: 'devuelva' },
        { id: 'q2', prompt: 'No quiero (gastar) ___ demasiado dinero en el coche.', correct: 'gastar' },
        { id: 'q3', prompt: 'Prefiero que (hacer, ello) ___ calor en verano.', correct: 'haga' },
        { id: 'q4', prompt: 'Mi médico siempre me aconseja (comer) ___ más fruta.', correct: 'comer' },
        { id: 'q5', prompt: '¿Necesitas que te (echar, yo) ___ una mano?', correct: 'eche' },
        { id: 'q6', prompt: 'Elsa prefiere (tener) ___ los sábados libres.', correct: 'tener' },
        { id: 'q7', prompt: 'Siempre intentáis que (conducir) ___ yo.', correct: 'conduzca' },
        { id: 'q8', prompt: '¿Qué quieres que te (llevar, yo) ___ a la fiesta?', correct: 'lleve' },
        { id: 'q9', prompt: 'No necesitan que nadie las (ayudar) ___.', correct: 'ayude' },
        { id: 'q10', prompt: '¿Me dejas (usar) ___ tu móvil?', correct: 'usar' },
      ],
    },

    {
      id: '97.2',
      title: '«Хотелось бы, чтобы...» → imperfecto de subjuntivo',
      type: 'fill',
      instructions: 'Раскройте скобки в imperfecto de subjuntivo (форма на -<em>ara</em>/-<em>iera</em>).',
      questions: [
        { id: 'q1', prompt: 'Me gustaría que (plantar, ellos) ___ más árboles en el barrio.', correct: ['plantaran', 'plantasen'] },
        { id: 'q2', prompt: 'Me gustaría que (hacer, ellos) ___ más parques.', correct: ['hicieran', 'hiciesen'] },
        { id: 'q3', prompt: 'Me gustaría que (poner, ellos) ___ más autobuses.', correct: ['pusieran', 'pusiesen'] },
        { id: 'q4', prompt: 'Me gustaría que (limpiar, ellos) ___ las calles.', correct: ['limpiaran', 'limpiasen'] },
        { id: 'q5', prompt: 'Me gustaría que (bajar, ellos) ___ los impuestos.', correct: ['bajaran', 'bajasen'] },
        { id: 'q6', prompt: 'Me encantaría que (venir, tú) ___ a la fiesta.', correct: ['vinieras', 'vinieses'] },
      ],
    },

    {
      id: '97.3',
      title: 'Инфинитив, presente или imperfecto de subjuntivo?',
      type: 'fill',
      instructions: 'Поставьте глагол в нужной форме. Слова в подсказке: время первого глагола (presente, condicional, pretérito) и совпадение лиц.',
      questions: [
        { id: 'q1', prompt: 'Ángeles no quiso que yo la (acompañar) ___ al médico.', correct: ['acompañara', 'acompañase'] },
        { id: 'q2', prompt: 'Si no os importa, preferiría que (hablar, vosotros) ___ en otra parte.', correct: ['hablarais', 'hablaseis'] },
        { id: 'q3', prompt: '¿A quién le gustaría (hacer) ___ un viaje por la Baja California?', correct: 'hacer' },
        { id: 'q4', prompt: 'Mónica me ha pedido que la (ayudar, yo) ___ a pintar el piso.', correct: 'ayude' },
        { id: 'q5', prompt: 'Antes me avergonzaba (hablar, yo) ___ mal español.', correct: 'hablar' },
        { id: 'q6', prompt: 'Mis amigos insistieron en que (ir, yo) ___ a un concurso de televisión.', correct: ['fuera', 'fuese'] },
        { id: 'q7', prompt: 'Mi padre me enseñó a (nadar) ___ cuando tenía ocho años.', correct: 'nadar' },
      ],
    },

    {
      id: '97.4',
      title: 'Постройте фразу',
      type: 'fill',
      instructions: 'Соберите фразу из данных слов. Решайте: инфинитив или субхунтив (presente / imperfecto).',
      questions: [
        { id: 'q1', prompt: 'Me gustaría / Antonio / ser / amable →', correct: ['Me gustaría que Antonio fuera más amable.', 'Me gustaría que Antonio fuese más amable.', 'Me gustaría que Antonio fuera amable.', 'Me gustaría que Antonio fuese amable.'] },
        { id: 'q2', prompt: 'Luisa / no querer (pretérito) / salir / el domingo →', correct: ['Luisa no quiso salir el domingo.', 'Luisa no quiso salir el domingo'] },
        { id: 'q3', prompt: 'Mario / acostumbrarse a (perfecto) / Lupe / hacer la comida →', correct: ['Mario se ha acostumbrado a que Lupe haga la comida.', 'Mario se ha acostumbrado a que Lupe haga la comida'] },
        { id: 'q4', prompt: 'La profesora / no dejar (presente) / nosotros / usar el diccionario →', correct: ['La profesora no nos deja usar el diccionario.', 'La profesora no deja que usemos el diccionario.', 'La profesora no nos deja usar el diccionario', 'La profesora no deja que usemos el diccionario'] },
        { id: 'q5', prompt: 'Ayer / yo / olvidarse de / llamar a Carolina →', correct: ['Ayer me olvidé de llamar a Carolina.', 'Ayer me olvidé de llamar a Carolina'] },
        { id: 'q6', prompt: 'El director / prohibir (perfecto) / nosotros / llamar a móviles →', correct: ['El director nos ha prohibido llamar a móviles.', 'El director ha prohibido que llamemos a móviles.', 'El director nos ha prohibido llamar a móviles', 'El director ha prohibido que llamemos a móviles'] },
      ],
    },

    {
      id: '97.5',
      title: 'Один субъект или два?',
      type: 'choice',
      instructions: 'Выберите правильный вариант: инфинитив (если субъект один) или que + субхунтив (если субъекты разные).',
      questions: [
        { id: 'q1', prompt: 'Quiero ___ a la playa este fin de semana.', options: ['ir', 'que vaya', 'que voy'], correct: 'ir' },
        { id: 'q2', prompt: 'Quiero ___ a la playa este fin de semana.  (мама — детям)', options: ['ir', 'que vayáis', 'que vais'], correct: 'que vayáis' },
        { id: 'q3', prompt: 'Necesito ___ unos minutos para terminar.', options: ['tener', 'que tenga'], correct: 'tener' },
        { id: 'q4', prompt: 'Necesito que tú me ___ unos minutos.', options: ['das', 'des', 'dar'], correct: 'des' },
        { id: 'q5', prompt: 'Espero ___ a tiempo.  (мы)', options: ['llegar', 'que lleguemos', 'que llegamos'], correct: 'llegar' },
        { id: 'q6', prompt: 'Espero que vosotros ___ a tiempo.', options: ['llegáis', 'lleguéis', 'llegar'], correct: 'lleguéis' },
        { id: 'q7', prompt: 'Me encantaría ___ a Italia el verano que viene.', options: ['viajar', 'que viajara'], correct: 'viajar' },
        { id: 'q8', prompt: 'Me encantaría que ___ con nosotros a Italia.', options: ['viajas', 'viajaras', 'viajar'], correct: 'viajaras' },
      ],
    },

    {
      id: '97.6',
      title: 'Глаголы с предлогом',
      type: 'fill',
      instructions: 'Не забудьте предлог перед <em>que</em> (<em>de, a, en</em>). Поставьте глагол в субхунтив.',
      questions: [
        { id: 'q1', prompt: 'Me alegro ___ que (estar, vosotros) aquí.', correct: 'de' },
        { id: 'q2', prompt: 'Me alegro de que (estar, vosotros) ___ aquí.', correct: 'estéis' },
        { id: 'q3', prompt: 'Yo me encargo ___ que Roberto (venir) a la reunión.', correct: 'de' },
        { id: 'q4', prompt: 'Yo me encargo de que Roberto (venir) ___ a la reunión.', correct: 'venga' },
        { id: 'q5', prompt: 'Catalina insistió ___ que (ir, nosotros) a verla.', correct: 'en' },
        { id: 'q6', prompt: 'Catalina insistió en que (ir, nosotros) ___ a verla.', correct: ['fuéramos', 'fuésemos'] },
        { id: 'q7', prompt: 'Se ha acostumbrado ___ que le (servir, ellos) la comida.', correct: 'a' },
        { id: 'q8', prompt: 'Se ha acostumbrado a que le (servir, ellos) ___ la comida.', correct: 'sirvan' },
      ],
    },

    {
      id: '97.7',
      title: 'dejar / permitir / prohibir: две формы',
      type: 'fill',
      instructions: 'Перепишите фразу с инфинитивом, заменив на <em>que</em> + субхунтив (или наоборот). Смысл сохраняется.',
      questions: [
        { id: 'q1', prompt: '<em>El director nos deja salir antes.</em> →', correct: ['El director deja que salgamos antes.', 'El director deja que salgamos antes'] },
        { id: 'q2', prompt: '<em>Te prohíbo que fumes en casa.</em> →', correct: ['Te prohíbo fumar en casa.', 'Te prohíbo fumar en casa'] },
        { id: 'q3', prompt: '<em>No me dejan entrar.</em> →', correct: ['No dejan que entre.', 'No dejan que yo entre.', 'No dejan que entre', 'No dejan que yo entre'] },
        { id: 'q4', prompt: '<em>Permitidnos que pasemos.</em> →', correct: ['Permitidnos pasar.', 'Permitidnos pasar'] },
        { id: 'q5', prompt: '<em>El profesor no nos deja hablar en clase.</em> →', correct: ['El profesor no deja que hablemos en clase.', 'El profesor no deja que hablemos en clase'] },
      ],
    },

    {
      id: '97.8',
      title: 'recordar / olvidarse: indicativo, не subjuntivo',
      type: 'fill',
      instructions: 'После <em>acuérdate de que, no olvides que, recuerda que</em> при разных лицах идёт <strong>indicativo</strong> (факт). Поставьте глагол в нужном времени indicativo.',
      questions: [
        { id: 'q1', prompt: 'Acuérdate de que mañana (ser) ___ mi cumpleaños.', correct: 'es' },
        { id: 'q2', prompt: 'No olvides que (tener, nosotros) ___ una reunión a las once.', correct: 'tenemos' },
        { id: 'q3', prompt: 'Recuerda que tu madre te (estar) ___ esperando.', correct: 'está' },
        { id: 'q4', prompt: 'No os olvidéis de que el avión (salir) ___ a las siete.', correct: 'sale' },
        { id: 'q5', prompt: 'Acordaos de que el banco (cerrar) ___ a las dos.', correct: 'cierra' },
      ],
    },

    {
      id: '97.9',
      title: 'Найдите фразы без ошибок',
      type: 'multi',
      instructions: 'Отметьте все грамматически корректные фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Quiero que voy al cine.',
            'Quiero ir al cine.',
            'Quiero que vayas al cine.',
            'Espero llegar a tiempo.',
            'Espero que llegar a tiempo.',
            'Me alegro que estés aquí.',
            'Me alegro de que estés aquí.',
            'Me gustaría que vengas mañana.',
            'Me gustaría que vinieras mañana.',
            'Acuérdate de que es mi cumpleaños.',
            'Acuérdate de que sea mi cumpleaños.',
          ],
          correct: [
            'Quiero ir al cine.',
            'Quiero que vayas al cine.',
            'Espero llegar a tiempo.',
            'Me alegro de que estés aquí.',
            'Me gustaría que vinieras mañana.',
            'Acuérdate de que es mi cumpleaños.',
          ],
          explanation: 'Если сабжекты разные — нужен субхунтив, а не indicativo. Глагол <em>alegrarse</em> требует <em>de</em> перед <em>que</em>. После condicional (<em>me gustaría</em>) — imperfecto subj. <em>vinieras</em>, не <em>vengas</em>. После <em>acuérdate</em> — indicativo (факт).',
        },
      ],
    },

    {
      id: '97.10',
      title: 'Сопоставьте начало и продолжение',
      type: 'match',
      instructions: 'Подберите для каждого начала логичный конец.',
      pool: [
        'ir al cine este sábado.',
        'vengáis a la fiesta.',
        'que Lupe haga la comida.',
        'fueras más amable.',
        'que tengamos una reunión mañana.',
        'comer en clase.',
      ],
      questions: [
        { id: 'q1', prompt: '<em>Quiero</em>',                     correct: 'ir al cine este sábado.' },
        { id: 'q2', prompt: '<em>Espero que</em>',                 correct: 'vengáis a la fiesta.' },
        { id: 'q3', prompt: '<em>Mario se ha acostumbrado a</em>', correct: 'que Lupe haga la comida.' },
        { id: 'q4', prompt: '<em>Me gustaría que</em>',            correct: 'fueras más amable.' },
        { id: 'q5', prompt: '<em>No olvides</em>',                 correct: 'que tengamos una reunión mañana.' },
        { id: 'q6', prompt: '<em>El profesor no nos deja</em>',    correct: 'comer en clase.' },
      ],
    },

    {
      id: '97.11',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Послушайте и запишите услышанное полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Quiero ir al cine.',                       correct: ['Quiero ir al cine.', 'Quiero ir al cine'] },
        { id: 'q2', prompt: '', audio: 'Quiero que vayas al cine.',                 correct: ['Quiero que vayas al cine.', 'Quiero que vayas al cine'] },
        { id: 'q3', prompt: '', audio: 'Espero que lleguéis a tiempo.',             correct: ['Espero que lleguéis a tiempo.', 'Espero que lleguéis a tiempo'] },
        { id: 'q4', prompt: '', audio: 'Me alegro de que estés aquí.',              correct: ['Me alegro de que estés aquí.', 'Me alegro de que estés aquí'] },
        { id: 'q5', prompt: '', audio: 'Me gustaría que vinieras mañana.',          correct: ['Me gustaría que vinieras mañana.', 'Me gustaría que vinieras mañana'] },
        { id: 'q6', prompt: '', audio: 'Acuérdate de que es mi cumpleaños.',         correct: ['Acuérdate de que es mi cumpleaños.', 'Acuérdate de que es mi cumpleaños'] },
      ],
    },

    {
      id: '97.12',
      title: 'Перевод: какой вариант точнее?',
      type: 'choice',
      instructions: 'Какой вариант ближе по смыслу русской фразе?',
      questions: [
        { id: 'q1', prompt: '«Я хочу, чтобы ты пришёл» →', options: ['Quiero venir.', 'Quiero que vienes.', 'Quiero que vengas.'], correct: 'Quiero que vengas.' },
        { id: 'q2', prompt: '«Я надеюсь приехать вовремя» →', options: ['Espero que llego a tiempo.', 'Espero llegar a tiempo.', 'Espero que llegue a tiempo.'], correct: 'Espero llegar a tiempo.' },
        { id: 'q3', prompt: '«Мне бы хотелось, чтобы ты был тут» →', options: ['Me gustaría estar aquí.', 'Me gustaría que estés aquí.', 'Me gustaría que estuvieras aquí.'], correct: 'Me gustaría que estuvieras aquí.' },
        { id: 'q4', prompt: '«Не забудь, что у нас завтра встреча» →', options: ['No olvides que tengamos una reunión mañana.', 'No olvides que tenemos una reunión mañana.', 'No olvides tener una reunión mañana.'], correct: 'No olvides que tenemos una reunión mañana.' },
        { id: 'q5', prompt: '«Я рад, что ты здесь» →', options: ['Me alegro estar aquí.', 'Me alegro que estás aquí.', 'Me alegro de que estés aquí.'], correct: 'Me alegro de que estés aquí.' },
      ],
    },
  ],
};
