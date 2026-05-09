// ============================================================
// Unidad 41 — Pronombres personales con preposiciones
// para mí, contigo, sin ti, según tú…
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u41 = {
  id: 'u41',
  number: 41,
  title: { es: 'para mí, contigo…', topic: 'Pronombres personales con preposiciones' },
  topicRu: 'Личные местоимения после предлогов',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Tras la mayoría de las <strong>preposiciones</strong> (<em>a, de, para, por, sin, en, sobre, hacia…</em>) se usan formas <strong>especiales</strong> de los pronombres para <em>1.ª</em> y <em>2.ª persona del singular</em>: <em>mí</em> y <em>ti</em>. El resto de personas usa la misma forma que como sujeto (<em>él, ella, usted, nosotros, vosotros, ustedes, ellos, ellas</em>).',
      ru: 'После большинства предлогов (<em>a, de, para, por, sin, en, sobre, hacia…</em>) местоимения «я» и «ты» получают особые формы — <strong>mí</strong> и <strong>ti</strong>. Остальные лица выглядят так же, как в роли подлежащего (<em>él, ella, usted, nosotros…</em>).',
      examples: [
        { es: 'Este regalo es <strong>para mí</strong>.', ru: 'Этот подарок — для меня.' },
        { es: 'No quiero hablar <strong>de ti</strong>.', ru: 'Я не хочу говорить о тебе.' },
        { es: '¿Has visto a Luis? Quiero hablar <strong>con él</strong>.', ru: 'Видел Луиса? Я хочу с ним поговорить.' },
        { es: 'Tengo algo <strong>para ustedes</strong>.', ru: 'У меня кое-что для вас.' },
      ],
    },
    {
      type: 'heading',
      text: 'Формы',
    },
    {
      type: 'table',
      caption: 'Preposición + pronombre',
      columns: ['Лицо', 'SINGULAR', 'PLURAL'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['1.ª',                      '<em>mí</em> (с тильдой!)',                  '<em>nosotros, nosotras</em>'],
        ['2.ª (близко)',              '<em>ti</em> (без тильды!)',                  '<em>vosotros, vosotras</em>'],
        ['3.ª / usted, ustedes',      '<em>él, ella, usted</em>',                    '<em>ellos, ellas, ustedes</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Ortografía: <em>mí</em> (pronombre) lleva tilde para distinguirse del posesivo <em>mi</em> (<em>mi casa</em>). En cambio <em>ti</em> <strong>nunca</strong> lleva tilde — no hay homógrafo del que separarlo.',
      ru: 'Орфография: у местоимения <em>mí</em> ставится тильда — чтобы отличать от притяжательного <em>mi</em> («моя <em>mi casa</em>»). А вот у <em>ti</em> тильды <strong>никогда</strong> нет — отличать не от чего.',
    },
    {
      type: 'heading',
      text: 'Особый случай: предлог <em>con</em>',
    },
    {
      type: 'rule',
      es: 'Tras <strong>con</strong>, las formas <em>mí</em> y <em>ti</em> se sueldan al verbo en una sola palabra: <em>con + mí → <strong>conmigo</strong></em>, <em>con + ti → <strong>contigo</strong></em>. Las demás personas no cambian: <em>con él, con ella, con nosotros, con ustedes…</em>',
      ru: 'После предлога <strong>con</strong> «я» и «ты» сливаются с предлогом в одно слово: <em>con + mí → <strong>conmigo</strong></em> («со мной»), <em>con + ti → <strong>contigo</strong></em> («с тобой»). Остальные лица — обычным образом: <em>con él</em>, <em>con nosotros</em> и т. д.',
      examples: [
        { es: '¿Quieres venir al cine <strong>conmigo</strong>?', ru: 'Пойдёшь со мной в кино?' },
        { es: 'Soy muy feliz <strong>contigo</strong>.', ru: 'Я очень счастлив(а) с тобой.' },
        { es: 'Mi hermana vive <strong>con nosotros</strong>.', ru: 'Моя сестра живёт с нами.' },
      ],
    },
    {
      type: 'heading',
      text: 'Исключения: предлоги, после которых — <em>yo</em> и <em>tú</em>',
    },
    {
      type: 'rule',
      es: 'Después de las preposiciones <strong>entre, excepto, hasta (= incluso), incluso, menos, según</strong> se usan los pronombres de sujeto: <em>yo, tú</em> (no <em>mí, ti</em>).',
      ru: 'После предлогов <strong>entre, excepto, hasta (= даже), incluso, menos, según</strong> используются обычные «подлежащные» формы — <em>yo, tú</em>, а <strong>не</strong> <em>mí / ti</em>.',
      examples: [
        { es: 'Siéntate aquí, <strong>entre Ivana y yo</strong>.', ru: 'Садись сюда, между Иваной и мной.' },
        { es: 'Saben nadar todos <strong>menos yo</strong>.', ru: 'Все умеют плавать, кроме меня.' },
        { es: '<strong>Según tú</strong>, ¿quién es el culpable?', ru: 'По-твоему, кто виноват?' },
        { es: '<strong>Incluso yo</strong> entiendo eso.', ru: 'Даже я это понимаю.' },
      ],
    },
    {
      type: 'table',
      caption: 'Сравнение: обычные предлоги vs «список исключений»',
      columns: ['→ <em>mí / ti / conmigo / contigo</em>', '→ <em>yo / tú</em>'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>Es <strong>para mí</strong>.</em>',                '<em>Es <strong>para todos menos yo</strong>.</em>'],
        ['<em>Quiere venir <strong>conmigo</strong>.</em>',       '<em>Quiere ir <strong>según yo</strong> sé.</em>'],
        ['<em>No vivo <strong>sin ti</strong>.</em>',             '<em>Han venido <strong>incluso tú</strong>.</em>'],
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '41.1',
      title: 'Превратите местоимение в форму после предлога',
      type: 'fill',
      instructions: 'Какая форма пойдёт после <em>para, de, sin, por…</em> ?',
      questions: [
        { id: 'q1', prompt: '<em>yo</em> →',           correct: 'mí',       explanation: 'Тильда обязательна.' },
        { id: 'q2', prompt: '<em>tú</em> →',           correct: 'ti',       explanation: 'Без тильды.' },
        { id: 'q3', prompt: '<em>él</em> →',           correct: 'él' },
        { id: 'q4', prompt: '<em>ella</em> →',          correct: 'ella' },
        { id: 'q5', prompt: '<em>usted</em> →',         correct: 'usted' },
        { id: 'q6', prompt: '<em>nosotras</em> →',      correct: 'nosotras' },
        { id: 'q7', prompt: '<em>vosotros</em> →',      correct: 'vosotros' },
        { id: 'q8', prompt: '<em>ellos</em> →',         correct: 'ellos' },
      ],
    },

    {
      id: '41.2',
      title: 'Поставьте местоимение после предлога',
      type: 'fill',
      instructions: 'Подставьте <em>mí, ti, él, ella, usted, nosotros, vosotros, ellos…</em> по смыслу.',
      questions: [
        { id: 'q1', prompt: '¿Has visto a Marta? Quiero hablar con ___.',  correct: 'ella' },
        { id: 'q2', prompt: 'Toma, este café es para ___ (=tú).',          correct: 'ti' },
        { id: 'q3', prompt: 'No puedo vivir sin ___ (=yo).',               correct: 'mí' },
        { id: 'q4', prompt: 'Hay una llamada para ___ (=usted).',          correct: 'usted' },
        { id: 'q5', prompt: 'Mis padres están de viaje. No sé nada de ___.',correct: 'ellos' },
        { id: 'q6', prompt: 'Niños, tengo un regalo para ___ (=vosotros).', correct: 'vosotros' },
        { id: 'q7', prompt: 'Siéntate junto a ___ (=nosotras).',            correct: 'nosotras' },
        { id: 'q8', prompt: '¿Dónde están los gatos? Tengo comida para ___.', correct: 'ellos' },
      ],
    },

    {
      id: '41.3',
      title: '<em>conmigo, contigo</em> или <em>con + …</em> ?',
      type: 'fill',
      instructions: 'Выберите форму с предлогом <em>con</em>: <em>conmigo / contigo / con él / con nosotros / con vosotros / con ellos…</em>',
      questions: [
        { id: 'q1', prompt: '¿Quieres ir al cine ___ (= con + yo)?',          correct: 'conmigo' },
        { id: 'q2', prompt: 'Estoy muy feliz ___ (= con + tú).',              correct: 'contigo' },
        { id: 'q3', prompt: 'Mi novia va al concierto ___ (= con + yo).',      correct: 'conmigo' },
        { id: 'q4', prompt: 'Quiero hablar ___ (= con + usted), señora Pérez.', correct: 'con usted' },
        { id: 'q5', prompt: 'Mañana cenamos ___ (= con + ellos).',             correct: 'con ellos' },
        { id: 'q6', prompt: '¿Vienes ___ (= con + nosotros) a la playa?',      correct: 'con nosotros' },
        { id: 'q7', prompt: 'Tengo que estudiar ___ (= con + ella).',          correct: 'con ella' },
        { id: 'q8', prompt: 'Voy a viajar ___ (= con + ella) y su familia.',   correct: 'con ella' },
      ],
    },

    {
      id: '41.4',
      title: '<em>mí / ti</em> или <em>yo / tú</em> ?',
      type: 'choice',
      instructions: 'Помните про список исключений: <em>entre, excepto, hasta (=даже), incluso, menos, según</em> + <em>yo / tú</em>.',
      questions: [
        { id: 'q1',  prompt: 'Este libro es para ___.',                            options: ['mí', 'yo'], correct: 'mí' },
        { id: 'q2',  prompt: 'Según ___, ¿quién es el mejor?',                     options: ['ti', 'tú'], correct: 'tú',  explanation: 'После <em>según</em> — <em>tú</em>.' },
        { id: 'q3',  prompt: 'Han llegado todos menos ___.',                       options: ['mí', 'yo'], correct: 'yo',  explanation: 'После <em>menos</em> — <em>yo</em>.' },
        { id: 'q4',  prompt: 'Siéntate entre Sara y ___.',                         options: ['mí', 'yo'], correct: 'yo',  explanation: 'После <em>entre</em> — <em>yo</em>.' },
        { id: 'q5',  prompt: 'No puedo trabajar sin ___.',                          options: ['ti', 'tú'], correct: 'ti' },
        { id: 'q6',  prompt: 'Incluso ___ entiendo eso.',                          options: ['mí', 'yo'], correct: 'yo',  explanation: 'После <em>incluso</em> — <em>yo</em>.' },
        { id: 'q7',  prompt: '¿Quieres bailar con ___?',                            options: ['mí', 'conmigo'], correct: 'conmigo', explanation: '<em>con + yo → conmigo</em>, одним словом.' },
        { id: 'q8',  prompt: 'Excepto ___, todos saben la respuesta.',              options: ['mí', 'yo'], correct: 'yo',  explanation: 'После <em>excepto</em> — <em>yo</em>.' },
        { id: 'q9',  prompt: 'Hay una sorpresa para ___.',                          options: ['ti', 'tú'], correct: 'ti' },
        { id: 'q10', prompt: 'Esto se queda entre ___ y yo.',                       options: ['ti', 'tú'], correct: 'tú',  explanation: 'После <em>entre</em> оба местоимения в форме «yo / tú».' },
      ],
    },

    {
      id: '41.5',
      title: 'Соедините начало и продолжение',
      type: 'match',
      instructions: 'Подберите подходящее окончание к каждому началу.',
      pool: ['conmigo al cine.', 'para mí?', 'con vosotros.', 'sin ti.', 'según tú?', 'menos yo.', 'contigo siempre.', 'con ella.'],
      questions: [
        { id: 'q1', prompt: '¿Vienes ___',                       correct: 'conmigo al cine.' },
        { id: 'q2', prompt: '¿Es esto ___',                      correct: 'para mí?' },
        { id: 'q3', prompt: 'No puedo vivir ___',                 correct: 'sin ti.' },
        { id: 'q4', prompt: 'Estoy de acuerdo ___',                correct: 'contigo siempre.' },
        { id: 'q5', prompt: 'No quiero comer ___',                 correct: 'con vosotros.' },
        { id: 'q6', prompt: 'Saben la respuesta todos ___',         correct: 'menos yo.' },
        { id: 'q7', prompt: 'Marta llegó tarde y luego cené ___',   correct: 'con ella.' },
        { id: 'q8', prompt: '¿Quién es el culpable, ___',          correct: 'según tú?' },
      ],
    },

    {
      id: '41.6',
      title: 'Обведите верный вариант',
      type: 'choice',
      instructions: 'Какая форма уместна — обычная или из «списка исключений»?',
      questions: [
        { id: 'q1', prompt: 'Este regalo es para ___.',           options: ['mí', 'yo'],         correct: 'mí' },
        { id: 'q2', prompt: 'Todos saben bailar excepto ___.',     options: ['mí', 'yo'],         correct: 'yo' },
        { id: 'q3', prompt: 'Vamos al teatro ___ (= con + tú).',    options: ['contigo', 'con ti'], correct: 'contigo' },
        { id: 'q4', prompt: 'No vive con ___, vive con su madre.',  options: ['mí', 'yo'],         correct: 'mí' },
        { id: 'q5', prompt: 'Según ___, esto es difícil.',          options: ['mí', 'yo'],         correct: 'yo' },
        { id: 'q6', prompt: 'Hasta ___ has aprobado el examen.',     options: ['ti', 'tú'], correct: 'tú',  explanation: 'После <em>hasta (= incluso, «даже»)</em> — <em>tú</em>.' },
        { id: 'q7', prompt: 'Han venido todos menos ___.',           options: ['ti', 'tú'],         correct: 'tú' },
        { id: 'q8', prompt: '¿Te apetece estudiar ___ (= con + yo)?', options: ['conmigo', 'con mí'], correct: 'conmigo' },
      ],
    },

    {
      id: '41.7',
      title: 'Замените имя на местоимение',
      type: 'fill',
      instructions: 'Перепишите фразу, заменив подчёркнутое имя соответствующим местоимением. Подсказка стоит в скобках.',
      questions: [
        { id: 'q1', prompt: 'Este pastel es para Marta. → Es para ___.',              correct: 'ella' },
        { id: 'q2', prompt: 'Voy al cine con Pedro. → Voy al cine con ___.',          correct: 'él' },
        { id: 'q3', prompt: 'Hablamos de Carmen y Sofía. → Hablamos de ___.',          correct: 'ellas' },
        { id: 'q4', prompt: 'No puedo vivir sin mis padres. → No puedo vivir sin ___.', correct: 'ellos' },
        { id: 'q5', prompt: 'Tengo algo para mi profesor. → Tengo algo para ___.',     correct: 'él' },
        { id: 'q6', prompt: 'Trabajo con la señora Ramos. → Trabajo con ___.',          correct: 'ella' },
        { id: 'q7', prompt: 'Esta carta es para Luis. → Es para ___.',           correct: 'él' },
      ],
    },

    {
      id: '41.8',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма ошибочна — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['para mí', 'para tí', 'para él', 'para nosotros'], correct: 'para tí', explanation: 'У <em>ti</em> <strong>никогда</strong> не ставится тильда.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['conmigo', 'contigo', 'con él', 'con mí'],          correct: 'con mí',  explanation: 'После <em>con</em> + <em>mí</em> → одним словом <em>conmigo</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['según yo', 'según tú', 'según mí', 'según él'],     correct: 'según mí', explanation: 'После <em>según</em> — <em>yo</em>, не <em>mí</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['entre tú y yo', 'entre Sara y yo', 'entre mí y ti', 'entre vosotros'], correct: 'entre mí y ti', explanation: 'После <em>entre</em> — <em>yo</em> и <em>tú</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['sin mi', 'sin él', 'sin ella', 'sin ustedes'],      correct: 'sin mi',   explanation: 'После предлога нужна форма с тильдой: <em>sin mí</em>.' },
      ],
    },

    {
      id: '41.9',
      title: 'Выберите все верные продолжения',
      type: 'multi',
      instructions: 'Какие формы могут идти после данного предлога?',
      questions: [
        {
          id: 'q1',
          prompt: 'После <em>para</em> правильно сказать:',
          options: ['mí', 'yo', 'ti', 'tú', 'él', 'nosotros', 'ustedes'],
          correct: ['mí', 'ti', 'él', 'nosotros', 'ustedes'],
          explanation: '<em>para</em> — обычный предлог: 1.ª/2.ª — <em>mí, ti</em>; остальные — обычные.',
        },
        {
          id: 'q2',
          prompt: 'После <em>según</em> правильно сказать:',
          options: ['mí', 'yo', 'ti', 'tú', 'él', 'ella', 'ustedes'],
          correct: ['yo', 'tú', 'él', 'ella', 'ustedes'],
          explanation: 'Исключение: <em>según + yo / tú</em>.',
        },
        {
          id: 'q3',
          prompt: 'После <em>con</em> правильно сказать:',
          options: ['conmigo', 'con yo', 'contigo', 'con tú', 'con él', 'con nosotros', 'con ustedes'],
          correct: ['conmigo', 'contigo', 'con él', 'con nosotros', 'con ustedes'],
          explanation: 'Только 1.ª/2.ª лица сливаются с <em>con</em>; остальные — обычным образом.',
        },
      ],
    },

    {
      id: '41.10',
      title: 'Аудио: послушайте и запишите фразу',
      type: 'fill',
      instructions: 'Нажмите <code>🔊</code> и запишите услышанное. <strong>С диакритикой и знаками препинания.</strong>',
      questions: [
        { id: 'q1', prompt: '', audio: 'Es para mí.',              correct: ['Es para mí.'] },
        { id: 'q2', prompt: '', audio: '¿Vienes conmigo?',          correct: ['¿Vienes conmigo?'] },
        { id: 'q3', prompt: '', audio: 'No puedo vivir sin ti.',    correct: ['No puedo vivir sin ti.'] },
        { id: 'q4', prompt: '', audio: 'Según tú, ¿quién gana?',    correct: ['Según tú, ¿quién gana?'] },
        { id: 'q5', prompt: '', audio: 'Quiero hablar con ella.',   correct: ['Quiero hablar con ella.'] },
        { id: 'q6', prompt: '', audio: 'Todos menos yo.',           correct: ['Todos menos yo.'] },
        { id: 'q7', prompt: '', audio: 'Soy feliz contigo.',        correct: ['Soy feliz contigo.'] },
      ],
    },

    {
      id: '41.11',
      title: 'Закончите фразу местоимением',
      type: 'fill',
      instructions: 'Подставьте местоимение, опираясь на смысл.',
      questions: [
        { id: 'q1', prompt: 'Es un regalo para Ana. Es para ___.',                                           correct: 'ella' },
        { id: 'q2', prompt: 'Hablo mucho con mis hermanos. Hablo con ___.',                                  correct: 'ellos' },
        { id: 'q3', prompt: '— Te llaman, Pedro. — ¿Para ___? Vale, voy.',                                    correct: 'mí',  explanation: 'Педро отвечает «для меня?» → <em>mí</em>.' },
        { id: 'q4', prompt: '— Estoy enfadada ___ (= con + tú).',                                            correct: 'contigo' },
        { id: 'q5', prompt: 'No iremos sin ___ (= vosotros).',                                                correct: 'vosotros' },
        { id: 'q6', prompt: 'Trabajamos juntos. Estoy todos los días con ___ (=él).',                          correct: 'él' },
        { id: 'q7', prompt: 'Esta es mi tía. Vivo con ___.',                                                   correct: 'ella' },
      ],
    },
  ],
};
