// ============================================================
// Unidad 51 — Presente de indicativo: otros usos
// Помимо «вообще» и «прямо сейчас», presente выражает
// ближайшее будущее (запланированное), инструкции, предложения,
// просьбы совета, предложение помощи и просьбы об услуге.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u51 = {
  id: 'u51',
  number: 51,
  title: { es: 'Mañana voy al médico', topic: 'Presente: otros usos' },
  topicRu: 'Дополнительные функции настоящего времени',

  theory: [
    {
      type: 'rule',
      es: 'El <strong>presente de indicativo</strong> se usa también para hablar de <strong>un futuro próximo ya acordado o programado</strong>, casi siempre con marcadores como <em>hoy, esta noche, mañana, el lunes, la semana que viene…</em>',
      ru: 'Настоящее время регулярно описывает <strong>ближайшее запланированное будущее</strong>: договорённость, расписание, билеты на завтра. Почти всегда есть маркер «когда» — <em>hoy, esta noche, mañana, el lunes, la semana que viene</em>.',
      examples: [
        { es: 'Mañana voy al médico.', ru: 'Завтра иду к врачу.' },
        { es: 'Nos vemos el domingo.', ru: 'Встретимся в воскресенье.' },
        { es: 'El curso termina en diciembre.', ru: 'Курс заканчивается в декабре.' },
        { es: 'El avión sale a las 4.35.', ru: 'Самолёт вылетает в 4:35.' },
      ],
    },
    {
      type: 'rule',
      es: 'Se usa el presente para <strong>dar instrucciones</strong>, normalmente con <em>primero… luego…, después…</em>',
      ru: 'Настоящее даёт <strong>пошаговые инструкции</strong> (рецепт, дорога). Часто с <em>primero… luego…, después…</em>',
      examples: [
        { es: 'Primero pelas los tomates y luego los partes.', ru: 'Сначала очищаешь помидоры, потом режешь.' },
        { es: 'Bajas por esta calle y tuerces a la izquierda.', ru: 'Спускаешься по этой улице и поворачиваешь налево.' },
      ],
    },
    {
      type: 'rule',
      es: 'Se usa el presente, sobre todo en <strong>preguntas</strong>, para: <strong>hacer sugerencias</strong>, <strong>pedir consejo</strong>, <strong>ofrecer ayuda</strong> o <strong>pedir un favor</strong>.',
      ru: 'В вопросительных фразах настоящее работает как «давай / а что если…?» — <strong>предложение, совет, помощь, просьба</strong>. По-русски часто переводится как «давай», «а я…?», «можно я…?», «не одолжишь…?»',
      examples: [
        { es: '¿Llamamos a Nuria?', ru: 'Давай позвоним Нурии?' },
        { es: '¿Invito a Julio?', ru: 'А мне пригласить Хулио?' },
        { es: '¿Le abro la puerta?', ru: 'Открыть Вам дверь?' },
        { es: '¿Me prestas cincuenta euros?', ru: 'Не одолжишь мне пятьдесят евро?' },
      ],
    },
    {
      type: 'heading',
      text: 'Сводная таблица функций',
    },
    {
      type: 'table',
      caption: 'Функция → пример',
      columns: ['Функция', 'Пример', 'Маркер / интонация'],
      colClasses: ['col-pattern', 'col-ex', 'col-pattern'],
      rows: [
        ['ближайшее будущее', '<em>Mañana voy al médico.</em>', '<em>hoy, mañana, el lunes…</em>'],
        ['инструкции', '<em>Primero pelas los tomates.</em>', '<em>primero, luego…</em>'],
        ['предложение', '<em>¿Llamamos a Nuria?</em>', 'вопрос с <em>nosotros</em>'],
        ['просьба совета', '<em>¿Invito a Julio?</em>', 'вопрос про себя'],
        ['предложение помощи', '<em>¿Le abro la puerta?</em>', 'вопрос «ему/ей/Вам»'],
        ['просьба об услуге', '<em>¿Me prestas el coche?</em>', 'вопрос «мне» к собеседнику'],
      ],
    },
    {
      type: 'atencion',
      es: 'Para el futuro próximo también se usa <em>ir a + infinitivo</em> — <em>Voy a llamar a Nuria</em>. La diferencia: el presente sugiere algo ya <strong>programado</strong> (cita, billete, agenda); <em>ir a</em> expresa <strong>la intención</strong>, sin compromiso.',
      ru: 'Для ближайшего будущего есть и конструкция <em>ir a + инфинитив</em>. Разница: чистое настоящее звучит как «уже договорено / в расписании», а <em>ir a</em> — «собираюсь, есть намерение».',
    },
  ],

  exercises: [
    {
      id: '51.1',
      title: 'Какая функция у этой фразы?',
      type: 'choice',
      instructions: 'Соотнесите фразу с её ролью.',
      questions: [
        { id: 'q1', prompt: '<em>El tren sale a las nueve y media.</em>', options: ['ближайшее будущее (расписание)', 'инструкция', 'предложение помощи'], correct: 'ближайшее будущее (расписание)' },
        { id: 'q2', prompt: '<em>¿Te ayudo con las maletas?</em>', options: ['ближайшее будущее', 'инструкция', 'предложение помощи'], correct: 'предложение помощи' },
        { id: 'q3', prompt: '<em>Primero abres la puerta y luego entras.</em>', options: ['предложение', 'инструкция', 'просьба совета'], correct: 'инструкция' },
        { id: 'q4', prompt: '<em>¿Vamos al cine esta noche?</em>', options: ['предложение', 'просьба об услуге', 'расписание'], correct: 'предложение' },
        { id: 'q5', prompt: '<em>¿Me dejas tu boli?</em>', options: ['предложение помощи', 'просьба об услуге', 'инструкция'], correct: 'просьба об услуге' },
        { id: 'q6', prompt: '<em>¿Llamo yo a tus padres?</em>', options: ['просьба совета', 'расписание', 'инструкция'], correct: 'просьба совета' },
        { id: 'q7', prompt: '<em>Mañana cenamos con Marta.</em>', options: ['ближайшее будущее', 'инструкция', 'просьба об услуге'], correct: 'ближайшее будущее' },
      ],
    },

    {
      id: '51.2',
      title: 'План на неделю',
      type: 'fill',
      instructions: 'Карлос рассказывает о своих планах. Поставьте глагол в правильную форму настоящего времени.',
      questions: [
        { id: 'q1', prompt: 'El lunes (yo, ir) ___ al médico.', correct: 'voy' },
        { id: 'q2', prompt: 'El martes (yo, cenar) ___ con Ana.', correct: 'ceno' },
        { id: 'q3', prompt: 'El miércoles (yo, jugar) ___ al tenis.', correct: 'juego' },
        { id: 'q4', prompt: 'El jueves Marta y yo (visitar) ___ a los abuelos.', correct: 'visitamos' },
        { id: 'q5', prompt: 'El viernes (yo, salir) ___ con los amigos.', correct: 'salgo' },
        { id: 'q6', prompt: 'El sábado (yo, tener) ___ una boda.', correct: 'tengo' },
        { id: 'q7', prompt: 'El domingo Pablo (regresar) ___ de Madrid.', correct: 'regresa' },
      ],
    },

    {
      id: '51.3',
      title: 'Запланированные дела',
      type: 'fill',
      instructions: 'Поставьте глагол в скобках в нужную форму настоящего времени (расписание / план).',
      questions: [
        { id: 'q1', prompt: 'Mañana (yo, salir) ___ a las siete.', correct: 'salgo' },
        { id: 'q2', prompt: 'La semana que viene mis padres (volver) ___ de París.', correct: 'vuelven' },
        { id: 'q3', prompt: 'Esta noche (nosotros, cenar) ___ en casa de Luis.', correct: 'cenamos' },
        { id: 'q4', prompt: 'El curso (empezar) ___ en septiembre.', correct: 'empieza' },
        { id: 'q5', prompt: '¿Qué (tú, hacer) ___ esta tarde?', correct: 'haces' },
        { id: 'q6', prompt: 'El concierto (terminar) ___ a las once.', correct: 'termina' },
        { id: 'q7', prompt: 'Mañana Lucía (casarse) ___ con Daniel.', correct: 'se casa' },
        { id: 'q8', prompt: 'La película (empezar) ___ a las diez en punto.', correct: 'empieza' },
      ],
    },

    {
      id: '51.4',
      title: 'Инструкция: рецепт салата',
      type: 'fill',
      instructions: 'Поставьте каждый глагол в форму <em>tú</em> настоящего времени, чтобы получилась пошаговая инструкция.',
      questions: [
        { id: 'q1', prompt: 'Primero (lavar) ___ la lechuga.', correct: 'lavas' },
        { id: 'q2', prompt: 'Luego (cortar) ___ el tomate.', correct: 'cortas' },
        { id: 'q3', prompt: 'Después (pelar) ___ el pepino.', correct: 'pelas' },
        { id: 'q4', prompt: 'Lo (poner) ___ todo en una ensaladera.', correct: 'pones' },
        { id: 'q5', prompt: '(añadir) ___ aceite, sal y un poco de limón.', correct: 'Añades', placeholder: 'Añades' },
        { id: 'q6', prompt: 'Al final lo (mezclar) ___ todo.', correct: 'mezclas' },
      ],
    },

    {
      id: '51.5',
      title: 'Предложить, посоветовать, помочь, попросить',
      type: 'choice',
      instructions: 'Какая фраза уместна в данной ситуации?',
      questions: [
        { id: 'q1', prompt: 'Подруга устала. Хочешь её подбодрить — предложить вместе сходить выпить кофе.', options: ['¿Salimos a tomar un café?', 'Salimos a tomar un café.', '¿Tomas un café?'], correct: '¿Salimos a tomar un café?' },
        { id: 'q2', prompt: 'У соседки заняты руки — ты держишь дверь.', options: ['¿Le abre la puerta?', '¿Le abro la puerta?', 'Le abro la puerta.'], correct: '¿Le abro la puerta?' },
        { id: 'q3', prompt: 'Не уверен, стоит ли звать Хулио на ужин — спрашиваешь у девушки.', options: ['Invito a Julio.', '¿Invito a Julio?', '¿Invitas a Julio?'], correct: '¿Invito a Julio?' },
        { id: 'q4', prompt: 'Просишь у друга машину на вечер.', options: ['¿Me dejas tu coche esta noche?', 'Me dejas tu coche esta noche.', '¿Te dejo el coche?'], correct: '¿Me dejas tu coche esta noche?' },
        { id: 'q5', prompt: 'Объясняешь дорогу прохожему.', options: ['¿Bajas por esta calle y tuerces a la izquierda?', 'Bajas por esta calle y tuerces a la izquierda.', 'Baja usted por esta calle.'], correct: 'Bajas por esta calle y tuerces a la izquierda.', explanation: 'Инструкция — утвердительная форма настоящего, без вопросительной интонации.' },
      ],
    },

    {
      id: '51.6',
      title: 'Восстановите диалог',
      type: 'fill',
      instructions: 'Допишите глагол в нужной форме настоящего времени.',
      questions: [
        { id: 'q1', prompt: '—¿(nosotros, llamar) ___ a Nuria? —Sí, vale.', correct: 'Llamamos', placeholder: 'Llamamos' },
        { id: 'q2', prompt: '—¿Me (tú, prestar) ___ el diccionario? —Claro.', correct: 'prestas' },
        { id: 'q3', prompt: '—¿Te (yo, ayudar) ___ con la mochila? —Gracias, muy amable.', correct: 'ayudo' },
        { id: 'q4', prompt: '—¿Por qué no le (tú, pedir) ___ el coche a tu padre?', correct: 'pides' },
        { id: 'q5', prompt: '—¿(nosotros, salir) ___ esta noche? —No puedo, tengo que estudiar.', correct: 'Salimos' },
        { id: 'q6', prompt: '—¿Le (yo, llevar) ___ la maleta, señora?', correct: 'llevo' },
      ],
    },

    {
      id: '51.7',
      title: 'Презенс или ir a + infinitivo?',
      type: 'choice',
      instructions: 'Какой вариант звучит более естественно для запланированного будущего? В чисто презенсе подразумевается «уже в расписании, билеты есть»; <em>ir a</em> — «есть намерение».',
      questions: [
        { id: 'q1', prompt: 'У тебя билеты на самолёт в 8 утра завтра.', options: ['Mañana voy a Roma.', 'Mañana voy a ir a Roma.'], correct: 'Mañana voy a Roma.', explanation: 'Билет уже куплен — чистое настоящее.' },
        { id: 'q2', prompt: 'Думаешь, что неплохо бы позвонить маме сегодня вечером.', options: ['Esta noche llamo a mi madre.', 'Esta noche voy a llamar a mi madre.'], correct: 'Esta noche voy a llamar a mi madre.', explanation: 'Намерение, не план.' },
        { id: 'q3', prompt: 'У вас договорённость встретиться в воскресенье.', options: ['Nos vemos el domingo.', 'Vamos a vernos el domingo.'], correct: 'Nos vemos el domingo.' },
        { id: 'q4', prompt: 'У тебя в календаре запись: лекция заканчивается в декабре.', options: ['El curso termina en diciembre.', 'El curso va a terminar en diciembre.'], correct: 'El curso termina en diciembre.' },
      ],
    },

    {
      id: '51.8',
      title: 'Какие фразы возможны',
      type: 'multi',
      instructions: 'Отметьте все фразы, в которых настоящее время использовано <strong>уместно</strong> (для одной из «других» функций — план, инструкция, предложение, совет, помощь, услуга).',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны и уместны?',
          options: [
            'Mañana voy al dentista.',
            '¿Te ayudo con la maleta?',
            'Primero abres la puerta y luego entras.',
            '¿Me prestas el bolígrafo?',
            'Ayer voy al cine.',
            '¿Llamamos a Carmen?',
            'El avión sale a las seis.',
            'Voy al médico el año pasado.',
          ],
          correct: [
            'Mañana voy al dentista.',
            '¿Te ayudo con la maleta?',
            'Primero abres la puerta y luego entras.',
            '¿Me prestas el bolígrafo?',
            '¿Llamamos a Carmen?',
            'El avión sale a las seis.',
          ],
          explanation: '<em>Ayer voy al cine</em> и <em>Voy al médico el año pasado</em> относятся к прошлому — настоящее не работает.',
        },
      ],
    },

    {
      id: '51.9',
      title: 'Сопоставьте фразу и её функцию',
      type: 'match',
      instructions: 'Подберите функцию для каждой фразы.',
      pool: ['ближайшее будущее', 'инструкция', 'предложение', 'просьба совета', 'предложение помощи', 'просьба об услуге'],
      questions: [
        { id: 'q1', prompt: '<em>Mañana voy al médico.</em>', correct: 'ближайшее будущее' },
        { id: 'q2', prompt: '<em>¿Llamamos a Nuria?</em>', correct: 'предложение' },
        { id: 'q3', prompt: '<em>Primero pelas los tomates.</em>', correct: 'инструкция' },
        { id: 'q4', prompt: '<em>¿Le abro la puerta?</em>', correct: 'предложение помощи' },
        { id: 'q5', prompt: '<em>¿Me prestas el coche?</em>', correct: 'просьба об услуге' },
        { id: 'q6', prompt: '<em>¿Invito a Julio?</em>', correct: 'просьба совета' },
      ],
    },

    {
      id: '51.10',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите фразу полностью (с диакритикой и знаками вопроса).',
      questions: [
        { id: 'q1', prompt: '', audio: 'Mañana voy al médico.', correct: ['Mañana voy al médico.', 'Mañana voy al médico'] },
        { id: 'q2', prompt: '', audio: '¿Llamamos a Nuria?', correct: ['¿Llamamos a Nuria?'] },
        { id: 'q3', prompt: '', audio: '¿Me prestas el coche?', correct: ['¿Me prestas el coche?'] },
        { id: 'q4', prompt: '', audio: 'Nos vemos el domingo.', correct: ['Nos vemos el domingo.', 'Nos vemos el domingo'] },
        { id: 'q5', prompt: '', audio: 'El avión sale a las cuatro.', correct: ['El avión sale a las cuatro.', 'El avión sale a las cuatro'] },
        { id: 'q6', prompt: '', audio: '¿Le abro la puerta?', correct: ['¿Le abro la puerta?'] },
      ],
    },

    {
      id: '51.11',
      title: 'Подберите глагол',
      type: 'fill',
      instructions: 'Выберите подходящий глагол из списка и поставьте в нужную форму настоящего времени: <em>ayudar, dejar, decir, ir, llevar, poner, salir</em>.',
      questions: [
        { id: 'q1', prompt: '—¿___ a cenar esta noche? —Buena idea.', correct: ['Salimos'], explanation: '<em>nosotros</em>: <em>salimos</em>.' },
        { id: 'q2', prompt: '—¿Me ___ el coche? —Lo siento, lo necesito.', correct: ['dejas'] },
        { id: 'q3', prompt: '—¿Qué me ___, la falda o los pantalones?', correct: ['pongo'], explanation: 'просьба совета: «что мне надеть»; <em>ponerse</em> с <em>se</em> → <em>me pongo</em>; здесь «¿qué me pongo?» = «какую вещь надеть на себя».' },
        { id: 'q4', prompt: '—¿Te ___ a preparar la cena? —Por supuesto.', correct: ['ayudo'] },
        { id: 'q5', prompt: '—¿___ al campo el domingo? —No puedo, tengo que estudiar.', correct: ['Vamos'] },
        { id: 'q6', prompt: '—¿Le ___ las bolsas? —Gracias, hijo.', correct: ['llevo'] },
        { id: 'q7', prompt: '—¿Me ___ qué hora es? —Las tres y media.', correct: ['dices'] },
      ],
    },

    {
      id: '51.12',
      title: 'Переформулируйте фразу',
      type: 'fill',
      instructions: 'Перепишите так, чтобы получилась подходящая по функции фраза в настоящем времени.',
      questions: [
        { id: 'q1', prompt: 'Сделать предложение «давай позвоним Анне?»:', correct: ['¿Llamamos a Ana?'], placeholder: '¿Llamamos a ...?' },
        { id: 'q2', prompt: 'Попросить у собеседника одолжить ручку (tú):', correct: ['¿Me dejas el boli?', '¿Me prestas el boli?'] },
        { id: 'q3', prompt: 'Предложить помощь — открыть окно (a usted):', correct: ['¿Le abro la ventana?'] },
        { id: 'q4', prompt: 'Сказать, что завтра идёшь к стоматологу:', correct: ['Mañana voy al dentista.', 'Mañana voy al dentista'] },
        { id: 'q5', prompt: 'Дать инструкцию (tú): «сначала включаешь компьютер, потом открываешь файл»:', correct: ['Primero enciendes el ordenador y luego abres el archivo.', 'Primero enciendes el ordenador y luego abres el archivo'] },
      ],
    },
  ],
};
