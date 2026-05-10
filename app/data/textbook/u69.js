// ============================================================
// Unidad 69 — presente de ir a + infinitivo.
// «voy a salir, vamos a ver…» — ближайшие планы и очевидные предсказания.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u69 = {
  id: 'u69',
  number: 69,
  title: { es: 'voy a salir…', topic: 'Presente de ir a + infinitivo' },
  topicRu: 'Конструкция ir a + инфинитив для ближайшего будущего',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'La perífrasis <strong>ir a + infinitivo</strong> se forma con el <em>presente de indicativo</em> del verbo <strong>ir</strong> + la preposición <strong>a</strong> + el <strong>infinitivo</strong> del verbo principal: <em>voy a trabajar, vas a comer, va a vivir…</em>',
      ru: 'Конструкция <strong>ir a + инфинитив</strong> = «собираюсь сделать». Берётся настоящее время глагола <em>ir</em> (<em>voy, vas, va, vamos, vais, van</em>) + предлог <em>a</em> + инфинитив. Это самый ходовой способ говорить о ближайших планах.',
      examples: [
        { es: '<strong>Voy a salir</strong> con unos amigos.', ru: 'Я собираюсь пойти прогуляться с друзьями.' },
        { es: '¿Qué <strong>vas a hacer</strong> esta noche?', ru: 'Что ты будешь делать сегодня вечером?' },
      ],
    },
    {
      type: 'heading',
      text: 'Спряжение ir + a + инфинитив',
    },
    {
      type: 'table',
      caption: 'voy a + infinitivo',
      columns: ['Лицо', 'ir (presente)', 'a + infinitivo'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['(yo)',                    '<strong>voy</strong>',     '<em>a trabajar, a comer, a vivir…</em>'],
        ['(tú)',                     '<strong>vas</strong>',     '—'],
        ['(usted, él, ella)',          '<strong>va</strong>',      '—'],
        ['(nosotros, -as)',             '<strong>vamos</strong>',  '—'],
        ['(vosotros, -as)',              '<strong>vais</strong>',   '—'],
        ['(ustedes, ellos, -as)',         '<strong>van</strong>',    '—'],
      ],
    },
    {
      type: 'heading',
      text: 'Когда употребляем',
    },
    {
      type: 'rule',
      es: 'Se usa <strong>voy/vas/va… a + infinitivo</strong> para hablar de <strong>intenciones o planes</strong> futuros próximos: ahora mismo, esta tarde, esta noche, mañana, este verano…',
      ru: 'Главное значение — <strong>намерение/план</strong> на ближайшее время: «сейчас», «сегодня вечером», «завтра», «этим летом». Это «я собираюсь», «мы планируем».',
      examples: [
        { es: 'Tengo sueño. <strong>Voy a acostarme</strong>.', ru: 'Я хочу спать. Ложусь.' },
        { es: '—¿Qué <strong>vas a hacer</strong> esta noche? —<strong>Voy a ir</strong> al cine.', ru: '— Что планируешь вечером? — Пойду в кино.' },
        { es: 'Hoy no <strong>voy a dormir</strong> la siesta.', ru: 'Сегодня я не буду спать после обеда.' },
      ],
    },
    {
      type: 'rule',
      es: 'También se usa para <strong>predicciones evidentes</strong>: cuando, por las circunstancias presentes, parece seguro que algo va a suceder.',
      ru: 'Второе значение — <strong>«очевидное предсказание»</strong>: то, что прямо сейчас вот-вот случится, и это видно невооружённым глазом.',
      examples: [
        { es: 'Esa niña <strong>va a caerse</strong> de la silla.', ru: 'Эта девочка вот-вот упадёт со стула.' },
        { es: 'Llévate el paraguas. <strong>Va a llover</strong>.', ru: 'Возьми зонт. Сейчас польёт.' },
        { es: 'Escucha. <strong>Va a hablar</strong> el presidente.', ru: 'Слушай. Президент вот-вот выступит.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Con verbos pronominales (<em>verbos con se</em>) hay <strong>dos posiciones</strong> posibles para el pronombre: pegado al infinitivo (<em>van a casarse</em>) o antes del verbo conjugado (<em>se van a casar</em>). Las dos formas son correctas.',
      ru: 'У возвратных глаголов местоимение <strong>может стоять в двух местах</strong>: либо приклеивается к инфинитиву (<em>van a casarse</em>), либо идёт перед спрягаемым <em>ir</em> (<em>se van a casar</em>). Оба варианта правильные. То же с <em>me, te, lo, le…</em>.',
      examples: [
        { es: 'Laura y Jaime <strong>van a casarse</strong> este verano. = Laura y Jaime <strong>se van a casar</strong> este verano.', ru: 'Лаура и Хайме поженятся этим летом.' },
        { es: '<strong>Voy a llamarte</strong> mañana. = <strong>Te voy a llamar</strong> mañana.', ru: 'Завтра я тебе позвоню.' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '69.1',
      title: 'Соберите ir a + infinitivo',
      type: 'fill',
      instructions: 'Запишите конструкцию полностью. Образец: <em>(yo, salir) → voy a salir</em>.',
      questions: [
        { id: 'q1', prompt: '(yo, comer) →',                    correct: ['voy a comer'] },
        { id: 'q2', prompt: '(tú, viajar) →',                     correct: ['vas a viajar'] },
        { id: 'q3', prompt: '(él, llamar) →',                      correct: ['va a llamar'] },
        { id: 'q4', prompt: '(nosotros, ver una película) →',        correct: ['vamos a ver una película'] },
        { id: 'q5', prompt: '(vosotros, estudiar) →',                  correct: ['vais a estudiar'] },
        { id: 'q6', prompt: '(ellos, casarse) →',                        correct: ['van a casarse', 'se van a casar'] },
        { id: 'q7', prompt: '(yo, acostarse) →',                            correct: ['voy a acostarme', 'me voy a acostar'] },
        { id: 'q8', prompt: '(usted, comprar pan) →',                          correct: ['va a comprar pan'] },
      ],
    },

    {
      id: '69.2',
      title: 'Что собираются делать?',
      type: 'fill',
      instructions: 'Дополните фразу <em>ir a + infinitivo</em> по описанию ситуации. Используйте подходящий глагол из контекста.',
      questions: [
        { id: 'q1', prompt: 'El coche está sucio. Lo (yo, lavar) ___.',                       correct: ['voy a lavar'] },
        { id: 'q2', prompt: 'Tengo hambre. (Yo, comer) ___ algo.',                              correct: ['Voy a comer'] },
        { id: 'q3', prompt: 'Estamos cansados. (Acostarse) ___.',                                  correct: ['Vamos a acostarnos', 'Nos vamos a acostar'] },
        { id: 'q4', prompt: 'Tengo sed. (Yo, beber) ___ algo.',                                       correct: ['Voy a beber'] },
        { id: 'q5', prompt: 'Mañana tenemos un examen. (Estudiar) ___ un poco.',                          correct: ['Vamos a estudiar'] },
        { id: 'q6', prompt: 'La calefacción. Tengo frío. (Yo, encender) ___ la calefacción.',                  correct: ['Voy a encender'] },
        { id: 'q7', prompt: 'Estoy aburrido. (Yo, ver) ___ una película.',                                       correct: ['Voy a ver'] },
      ],
    },

    {
      id: '69.3',
      title: 'Планы на лето',
      type: 'fill',
      instructions: 'Раскройте скобки. <em>Ir a + infinitivo</em>.',
      questions: [
        { id: 'q1', prompt: '—¿Qué (hacer) ___ ustedes este verano?',                                              correct: ['van a hacer'] },
        { id: 'q2', prompt: '—Los niños (pasar) ___ unos días en un campamento.',                                      correct: ['van a pasar'] },
        { id: 'q3', prompt: '—Y Celia y yo (ir) ___ a Marbella.',                                                          correct: ['vamos a ir'] },
        { id: 'q4', prompt: '—¿Y dónde (alojarse) ___?',                                                                       correct: ['van a alojarse', 'se van a alojar'] },
        { id: 'q5', prompt: '—En un chalé alquilado. Lo (compartir) ___ con unos amigos.',                                        correct: ['vamos a compartir'] },
        { id: 'q6', prompt: '—¿Cuándo (tú, arreglar) ___ tu habitación, Marta?',                                                      correct: ['vas a arreglar'] },
        { id: 'q7', prompt: '—Hoy no puedo. (Ir) ___ a la fiesta de Sandra.',                                                            correct: ['Voy a ir'] },
        { id: 'q8', prompt: '—¿Y qué le (regalar) ___? — No lo sé. Ahora le (yo, comprar) ___ algo.',                                       correct: ['vas a regalar / voy a comprar'] },
      ],
    },

    {
      id: '69.4',
      title: '«Очевидное предсказание»',
      type: 'fill',
      instructions: 'Опишите, что вот-вот случится, через <em>ir a + infinitivo</em>.',
      questions: [
        { id: 'q1', prompt: 'Mira las nubes. (Llover) ___ pronto.',                                       correct: ['Va a llover'] },
        { id: 'q2', prompt: 'Cuidado, ese vaso (caerse) ___.',                                              correct: ['va a caerse', 'se va a caer'] },
        { id: 'q3', prompt: '¡Silencio! La obra (empezar) ___.',                                              correct: ['va a empezar'] },
        { id: 'q4', prompt: 'Mira el avión. (Aterrizar) ___ ahora.',                                              correct: ['Va a aterrizar'] },
        { id: 'q5', prompt: 'El autobús se va. (Nosotros, perderlo) ___.',                                            correct: ['Vamos a perderlo', 'Lo vamos a perder'] },
        { id: 'q6', prompt: 'Marta y David esperan un bebé. (Tener) ___ un niño.',                                        correct: ['Van a tener'] },
      ],
    },

    {
      id: '69.5',
      title: 'Положение возвратных местоимений',
      type: 'choice',
      instructions: 'Какой вариант с <em>se</em> правильный? Часто оба годятся.',
      questions: [
        { id: 'q1', prompt: 'Laura y Jaime ___ este verano.',
          options: ['van a casarse', 'se van a casar', 'оба варианта правильные', 'ни один'],
          correct: 'оба варианта правильные' },
        { id: 'q2', prompt: 'Tengo sueño. ___ ahora mismo.',
          options: ['Voy a acostarme', 'Me voy a acostar', 'оба варианта правильные', 'ни один'],
          correct: 'оба варианта правильные' },
        { id: 'q3', prompt: '¿Cuándo ___ a la fiesta?',
          options: ['vais a ir', 'os vais a ir', 'vais a iros', 'оба: vais a iros / os vais a ir'],
          correct: 'оба: vais a iros / os vais a ir',
          explanation: 'У возвратного <em>irse</em> = «уходить» местоимение тоже может стоять в двух местах.' },
        { id: 'q4', prompt: '___ mañana sin falta.',
          options: ['Voy a llamarte', 'Te voy a llamar', 'оба варианта правильные', 'ни один'],
          correct: 'оба варианта правильные' },
      ],
    },

    {
      id: '69.6',
      title: 'Planes vs. simple presente',
      type: 'choice',
      instructions: 'Что уместнее в этом контексте?',
      questions: [
        { id: 'q1', prompt: 'No estés triste. Mañana (vamos / vamos a ir) al parque y todo va a estar bien.',
          options: ['vamos', 'vamos a ir'],
          correct: 'vamos a ir',
          explanation: 'План на ближайшее будущее — <em>ir a + infinitivo</em>.' },
        { id: 'q2', prompt: 'Cada día (voy / voy a ir) al gimnasio a las siete.',
          options: ['voy', 'voy a ir'],
          correct: 'voy',
          explanation: 'Привычка в настоящем — простой <em>presente</em>.' },
        { id: 'q3', prompt: 'Mira el cielo. (Llueve / Va a llover) seguro.',
          options: ['Llueve', 'Va a llover'],
          correct: 'Va a llover',
          explanation: 'Очевидное предсказание о том, что вот-вот случится.' },
        { id: 'q4', prompt: 'Aquí en otoño siempre (llueve / va a llover) mucho.',
          options: ['llueve', 'va a llover'],
          correct: 'llueve',
          explanation: 'Общая характеристика климата — <em>presente</em>.' },
      ],
    },

    {
      id: '69.7',
      title: 'Multi: где уместно ir a + infinitivo?',
      type: 'multi',
      instructions: 'Отметьте все фразы, где <em>ir a + infinitivo</em> на месте (намерение или очевидное предсказание).',
      questions: [
        {
          id: 'q1',
          prompt: 'Где конструкция уместна?',
          options: [
            'Tengo sueño. Voy a acostarme.',
            'Cada noche voy a acostarme a las once.',
            '¡Cuidado! Esa niña va a caerse.',
            'Aquí los niños van a caerse a menudo.',
            'Mañana vamos a ver una película juntos.',
            'Llévate el paraguas, va a llover.',
            'En esta zona va a llover mucho en invierno.',
            '¿Qué vas a hacer esta noche?',
          ],
          correct: [
            'Tengo sueño. Voy a acostarme.',
            '¡Cuidado! Esa niña va a caerse.',
            'Mañana vamos a ver una película juntos.',
            'Llévate el paraguas, va a llover.',
            '¿Qué vas a hacer esta noche?',
          ],
          explanation: '<em>Ir a + infinitivo</em> — для конкретных ближайших планов и для «вот-вот случится». Для привычек и общих характеристик — <em>presente</em>.',
        },
      ],
    },

    {
      id: '69.8',
      title: 'Match: ir в presente',
      type: 'match',
      instructions: 'Соедините местоимение с формой <em>ir</em>.',
      pool: ['voy', 'vas', 'va', 'vamos', 'vais', 'van'],
      questions: [
        { id: 'q1', prompt: '<em>yo</em>',                       correct: 'voy' },
        { id: 'q2', prompt: '<em>tú</em>',                         correct: 'vas' },
        { id: 'q3', prompt: '<em>él, ella, usted</em>',              correct: 'va' },
        { id: 'q4', prompt: '<em>nosotros, -as</em>',                  correct: 'vamos' },
        { id: 'q5', prompt: '<em>vosotros, -as</em>',                    correct: 'vais' },
        { id: 'q6', prompt: '<em>ellos, ellas, ustedes</em>',              correct: 'van' },
      ],
    },

    {
      id: '69.9',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'Где конструкция собрана неправильно?',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?',
          options: ['Voy a salir.', 'Voy salir.', 'Voy a comer.', 'Voy a estudiar.'],
          correct: 'Voy salir.',
          explanation: 'После <em>voy</em> обязателен предлог <em>a</em>.' },
        { id: 'q2', prompt: 'Где ошибка?',
          options: ['Vamos a vamos.', 'Vamos a ir al cine.', 'Vamos a comer.', 'Vamos a salir.'],
          correct: 'Vamos a vamos.',
          explanation: 'После <em>a</em> идёт инфинитив, а не спрягаемая форма.' },
        { id: 'q3', prompt: 'Где ошибка?',
          options: ['Va a llover.', 'Va a comer.', 'Va a casándose.', 'Va a casarse.'],
          correct: 'Va a casándose.',
          explanation: 'После <em>a</em> только инфинитив, не герундий.' },
        { id: 'q4', prompt: 'Где ошибка?',
          options: ['Te voy a llamar.', 'Voy a llamarte.', 'Voy llamarte.', 'Voy a llamarte mañana.'],
          correct: 'Voy llamarte.',
          explanation: 'Без <em>a</em> конструкция не работает.' },
      ],
    },

    {
      id: '69.10',
      title: 'Из futuro в ir a + infinitivo',
      type: 'fill',
      instructions: 'Перепишите фразу с <em>ir a + infinitivo</em> (ближайший план).',
      questions: [
        { id: 'q1', prompt: 'Iré al cine esta noche. → ___ al cine esta noche.',
          correct: ['Voy a ir'] },
        { id: 'q2', prompt: 'Comeremos en casa. → ___ en casa.',
          correct: ['Vamos a comer'] },
        { id: 'q3', prompt: '¿Qué harás mañana? → ¿Qué ___ mañana?',
          correct: ['vas a hacer'] },
        { id: 'q4', prompt: 'Estudiarán español el año que viene. → ___ español el año que viene.',
          correct: ['Van a estudiar'] },
        { id: 'q5', prompt: 'Saldré con unos amigos. → ___ con unos amigos.',
          correct: ['Voy a salir'] },
      ],
    },

    {
      id: '69.11',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите фразу полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Voy a salir con unos amigos.',
          correct: ['Voy a salir con unos amigos.', 'Voy a salir con unos amigos'] },
        { id: 'q2', prompt: '', audio: '¿Qué vas a hacer esta noche?',
          correct: ['¿Qué vas a hacer esta noche?'] },
        { id: 'q3', prompt: '', audio: 'Vamos a ir a un restaurante mexicano.',
          correct: ['Vamos a ir a un restaurante mexicano.', 'Vamos a ir a un restaurante mexicano'] },
        { id: 'q4', prompt: '', audio: 'Llévate el paraguas, va a llover.',
          correct: ['Llévate el paraguas, va a llover.', 'Llévate el paraguas, va a llover'] },
        { id: 'q5', prompt: '', audio: 'Tengo sueño. Voy a acostarme.',
          correct: ['Tengo sueño. Voy a acostarme.', 'Tengo sueño. Voy a acostarme'] },
        { id: 'q6', prompt: '', audio: 'Laura y Jaime van a casarse este verano.',
          correct: ['Laura y Jaime van a casarse este verano.', 'Laura y Jaime van a casarse este verano'] },
      ],
    },
  ],
};
