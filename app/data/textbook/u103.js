// ============================================================
// Unidad 103 — Adverbios y expresiones de frecuencia
// siempre, normalmente, casi siempre, a menudo, frecuentemente,
// a veces, de vez en cuando, casi nunca, nunca,
// + todos los días / una vez al mes / dos veces a la semana...
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u103 = {
  id: 'u103',
  number: 103,
  title: { es: 'siempre, de vez en cuando, a veces...', topic: 'Adverbios y expresiones de frecuencia' },
  topicRu: 'Наречия частоты: «как часто»',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Los <strong>adverbios y expresiones de frecuencia</strong> indican <em>con qué frecuencia</em> sucede o se hace algo. Responden a la pregunta <em>¿con qué frecuencia?</em>',
      ru: '<strong>Наречия частоты</strong> отвечают на вопрос <em>¿con qué frecuencia?</em> («как часто?»). Они показывают, насколько регулярно происходит действие.',
      examples: [
        { es: 'En el desierto de Atacama no llueve nunca.', ru: 'В пустыне Атакама никогда не идёт дождь.' },
        { es: 'Javier hace footing todos los días.', ru: 'Хавьер бегает каждый день.' },
        { es: 'En mi casa comemos pescado de vez en cuando.', ru: 'Дома мы иногда едим рыбу.' },
      ],
    },

    {
      type: 'heading',
      text: 'Шкала частоты',
    },
    {
      type: 'table',
      caption: 'От 100% к 0%',
      columns: ['Частота', 'Наречие'],
      colClasses: ['col-pattern', 'col-pattern'],
      rows: [
        ['100%',  '<strong>siempre</strong> — всегда'],
        ['~80%',  '<strong>normalmente</strong>, <strong>casi siempre</strong> — обычно, почти всегда'],
        ['~60%',  '<strong>a menudo</strong>, <strong>frecuentemente</strong> — часто'],
        ['~30%',  '<strong>a veces</strong>, <strong>de vez en cuando</strong> — иногда, время от времени'],
        ['~5%',   '<strong>casi nunca</strong> — почти никогда'],
        ['0%',    '<strong>nunca</strong> — никогда'],
      ],
    },

    {
      type: 'heading',
      text: 'Позиция в предложении',
    },
    {
      type: 'rule',
      es: '<em>siempre, a veces, a menudo, de vez en cuando...</em> pueden ir <strong>delante</strong> o <strong>detrás del verbo</strong>, al <strong>final</strong> o <strong>al principio</strong> de la frase.',
      ru: 'Большинство наречий частоты (<em>siempre, a veces, a menudo, de vez en cuando</em>) могут стоять <strong>после глагола</strong>, в <strong>конце</strong> или <strong>в начале</strong> фразы. Свободный порядок.',
      examples: [
        { es: 'Luis siempre estudia por la noche.', ru: 'Луис всегда занимается по ночам.' },
        { es: 'Trabajo a veces por la tarde.', ru: 'Я иногда работаю по вечерам.' },
        { es: 'Silvia me envía un correo de vez en cuando.', ru: 'Сильвия иногда мне пишет.' },
      ],
    },
    {
      type: 'rule',
      es: '<em>normalmente</em> suele ir al <strong>principio</strong> de la frase.',
      ru: '<strong>normalmente</strong> чаще всего стоит <strong>в начале</strong> фразы.',
      examples: [
        { es: 'Normalmente, los sábados salgo con mis amigos.', ru: 'Обычно по субботам я выхожу с друзьями.' },
        { es: 'Normalmente comemos a las dos.', ru: 'Обычно мы обедаем в два.' },
      ],
    },

    {
      type: 'heading',
      text: 'casi nunca, nunca',
    },
    {
      type: 'rule',
      es: '<em>nunca</em> и <em>casi nunca</em> работают двумя способами: <strong>nunca/casi nunca + verbo</strong> (без отрицания) или <strong>no + verbo + nunca/casi nunca</strong> (с двойным отрицанием).',
      ru: 'У <em>nunca</em> и <em>casi nunca</em> два варианта: либо они стоят <strong>перед глаголом без <em>no</em></strong>, либо <strong>после глагола, тогда <em>no</em> обязательно</strong>.',
      examples: [
        { es: 'Nunca voy a la ópera.', ru: 'Я никогда не хожу в оперу.' },
        { es: 'No voy nunca a la ópera.', ru: 'Я никогда не хожу в оперу.' },
        { es: 'Casi nunca vemos la tele.', ru: 'Мы почти никогда не смотрим телевизор.' },
        { es: 'No vemos casi nunca la tele.', ru: 'Мы почти никогда не смотрим телевизор.' },
      ],
    },

    {
      type: 'heading',
      text: 'Развёрнутые выражения частоты',
    },
    {
      type: 'table',
      caption: 'todos los días, una vez al mes...',
      columns: ['Конструкция', 'Перевод', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<strong>todos los días / meses / años</strong>',           'каждый день / месяц / год',     '<em>Me levanto temprano todos los días.</em>'],
        ['<strong>todas las noches / semanas / tardes</strong>',     'каждую ночь / неделю / вечер',  '<em>Todas las noches leo un rato.</em>'],
        ['<strong>(todos) los lunes / martes...</strong>',           'по понедельникам / вторникам',  '<em>Voy a clase de guitarra los martes.</em>'],
        ['<strong>una vez al día / al mes / al año</strong>',        'раз в день / месяц / год',      '<em>Nos reunimos una vez al mes.</em>'],
        ['<strong>dos / tres veces a la semana</strong>',             '2 / 3 раза в неделю',           '<em>Limpiamos la casa dos veces a la semana.</em>'],
        ['<strong>un día / dos días a la semana</strong>',           'один / два дня в неделю',        '<em>Como en casa de mis padres un día a la semana.</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'Estas expresiones pueden ir al <strong>final</strong> o al <strong>principio</strong> de la frase, o solas en respuestas.',
      ru: 'Эти выражения могут стоять <strong>в конце</strong> или <strong>в начале</strong> фразы, а также давать ответ сами по себе.',
      examples: [
        { es: 'Una vez a la semana nos reunimos todos los amigos.', ru: 'Раз в неделю мы собираемся всей компанией.' },
        { es: 'Nos reunimos todos los amigos una vez a la semana.', ru: 'Мы собираемся всей компанией раз в неделю.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Para preguntar por la frecuencia se suele usar <em>mucho</em>: <em>¿Viajas <strong>mucho</strong> a México?</em>',
      ru: 'В вопросе о частоте часто употребляется <strong>mucho</strong>: <em>¿Viajas mucho a México?</em> — «Часто ездишь в Мексику?». В ответе — конкретная частота: <em>Dos o tres veces al año</em>.',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '103.1',
      title: 'Подставьте наречие частоты',
      type: 'fill',
      instructions: 'Подберите подходящее: <em>casi nunca, a menudo, de vez en cuando, frecuentemente, mucho, normalmente, nunca</em>. Иногда подходит несколько вариантов.',
      questions: [
        { id: 'q1', prompt: '___ salgo con Teresa. Ahora vivimos muy lejos (= почти никогда).',          correct: ['Casi nunca'] },
        { id: 'q2', prompt: '___, suelo cenar en casa (= обычно).',                                       correct: ['Normalmente'] },
        { id: 'q3', prompt: 'Me levanto ___ a las siete. Me gusta madrugar (= обычно).',                  correct: ['normalmente'] },
        { id: 'q4', prompt: 'Vamos ___ al cine, dos o tres veces al mes (= часто).',                       correct: ['a menudo', 'frecuentemente'] },
        { id: 'q5', prompt: '___ me acuesto antes de las doce. No puedo dormirme antes (= почти никогда).', correct: ['Casi nunca'] },
        { id: 'q6', prompt: 'Mis padres hacen un viaje ___, una o dos veces al año (= иногда).',           correct: ['de vez en cuando'] },
        { id: 'q7', prompt: '—¿Ves ___ a Lola? —___. La última vez fue hace dos meses (= часто / почти никогда).', correct: ['mucho'], explanation: 'В вопросе про частоту — <em>mucho</em>; в ответе — <em>casi nunca</em>.' },
        { id: 'q8', prompt: 'Viajo ___ a Argentina. Tengo muchos parientes y me gusta verlos (= часто).',  correct: ['mucho', 'a menudo', 'frecuentemente'] },
      ],
    },

    {
      id: '103.2',
      title: 'Перепишите фразу с наречием в указанном месте',
      type: 'fill',
      instructions: 'Добавьте указанное в скобках слово на место стрелочки. Сделайте необходимые изменения. Образец: <em>↑ Voy al cine. (nunca) → No voy nunca al cine.</em>',
      questions: [
        { id: 'q1', prompt: 'Voy ↑ al cine. (nunca) →',          correct: ['No voy nunca al cine.', 'Nunca voy al cine.', 'No voy nunca al cine', 'Nunca voy al cine'] },
        { id: 'q2', prompt: '↑ Salgo por la noche. (nunca) →',     correct: ['Nunca salgo por la noche.', 'No salgo nunca por la noche.', 'Nunca salgo por la noche', 'No salgo nunca por la noche'] },
        { id: 'q3', prompt: 'Fernando ↑ viaja en coche. (casi nunca) →', correct: ['Fernando casi nunca viaja en coche.', 'Fernando no viaja casi nunca en coche.', 'Fernando casi nunca viaja en coche', 'Fernando no viaja casi nunca en coche'] },
        { id: 'q4', prompt: 'Vemos ↑ la tele. (casi nunca) →',     correct: ['Casi nunca vemos la tele.', 'No vemos casi nunca la tele.', 'Casi nunca vemos la tele', 'No vemos casi nunca la tele'] },
        { id: 'q5', prompt: 'Diana me llama ↑. (nunca) →',          correct: ['Diana no me llama nunca.', 'Diana nunca me llama.', 'Diana no me llama nunca', 'Diana nunca me llama'] },
      ],
    },

    {
      id: '103.3',
      title: 'Расставьте по убыванию частоты',
      type: 'choice',
      instructions: 'Какое выражение чаще всего? Расставьте каждую пару от более частого к менее частому.',
      questions: [
        { id: 'q1', prompt: 'Что чаще: <em>todos los días</em> или <em>cada dos días</em>?',
          options: ['todos los días', 'cada dos días'], correct: 'todos los días' },
        { id: 'q2', prompt: 'Что чаще: <em>una vez a la semana</em> или <em>una vez al mes</em>?',
          options: ['una vez a la semana', 'una vez al mes'], correct: 'una vez a la semana' },
        { id: 'q3', prompt: 'Что чаще: <em>cada quince días</em> или <em>una vez al mes</em>?',
          options: ['cada quince días', 'una vez al mes'], correct: 'cada quince días', explanation: 'Каждые 15 дней = 2 раза в месяц > 1 раз в месяц.' },
        { id: 'q4', prompt: 'Что чаще: <em>los lunes</em> или <em>dos veces al año</em>?',
          options: ['los lunes', 'dos veces al año'], correct: 'los lunes' },
        { id: 'q5', prompt: 'Что чаще: <em>siempre</em> или <em>casi siempre</em>?',
          options: ['siempre', 'casi siempre'], correct: 'siempre' },
        { id: 'q6', prompt: 'Что чаще: <em>a veces</em> или <em>casi nunca</em>?',
          options: ['a veces', 'casi nunca'], correct: 'a veces' },
      ],
    },

    {
      id: '103.4',
      title: 'Сформулируйте выражение частоты по подсказке',
      type: 'fill',
      instructions: 'Сформулируйте выражение частоты для каждой ситуации. Образец: <em>[enero *, febrero *...] (salimos a cenar) → Salimos a cenar una vez al mes.</em>',
      questions: [
        { id: 'q1', prompt: '[enero *, febrero *, marzo *...] Salimos a cenar →',  correct: ['Salimos a cenar una vez al mes.', 'Salimos a cenar una vez al mes'] },
        { id: 'q2', prompt: '[martes *, martes *, martes *...] Tenemos clases de español →',  correct: ['Tenemos clases de español los martes.', 'Tenemos clases de español todos los martes.', 'Tenemos clases de español los martes', 'Tenemos clases de español todos los martes'] },
        { id: 'q3', prompt: '[L M (X) J V S D] Voy al gimnasio →',                  correct: ['Voy al gimnasio una vez a la semana.', 'Voy al gimnasio los miércoles.', 'Voy al gimnasio una vez a la semana', 'Voy al gimnasio los miércoles'], explanation: 'Понедельник–воскресенье отмечена среда (X) — раз в неделю по средам.' },
        { id: 'q4', prompt: '[2001, 2002, 2003...] Pasamos unos días en Cancún →',  correct: ['Pasamos unos días en Cancún todos los años.', 'Pasamos unos días en Cancún una vez al año.', 'Pasamos unos días en Cancún todos los años', 'Pasamos unos días en Cancún una vez al año'] },
        { id: 'q5', prompt: '[L***, M***...] Martín se lava los dientes →',         correct: ['Martín se lava los dientes tres veces al día.', 'Martín se lava los dientes tres veces al día'], explanation: 'Три звёздочки рядом с днями недели = три раза в день.' },
        { id: 'q6', prompt: '[S, D, S, D, S, D...] Hacemos algún viaje →',          correct: ['Hacemos algún viaje todos los fines de semana.', 'Hacemos algún viaje los fines de semana.', 'Hacemos algún viaje todos los fines de semana', 'Hacemos algún viaje los fines de semana'] },
      ],
    },

    {
      id: '103.5',
      title: 'Соберите фразу',
      type: 'fill',
      instructions: 'Соберите естественную фразу с указанными словами. Несколько порядков слов могут быть верными.',
      questions: [
        { id: 'q1', prompt: '(siempre / Luis / por la noche / estudia) →',
          correct: ['Luis siempre estudia por la noche.', 'Luis estudia siempre por la noche.', 'Siempre estudia Luis por la noche.', 'Luis siempre estudia por la noche', 'Luis estudia siempre por la noche', 'Siempre estudia Luis por la noche'] },
        { id: 'q2', prompt: '(de vez en cuando / Silvia / un correo / me envía) →',
          correct: ['Silvia me envía un correo de vez en cuando.', 'De vez en cuando Silvia me envía un correo.', 'Silvia me envía un correo de vez en cuando', 'De vez en cuando Silvia me envía un correo'] },
        { id: 'q3', prompt: '(normalmente / los sábados / con mis amigos / salgo) →',
          correct: ['Normalmente, los sábados salgo con mis amigos.', 'Normalmente los sábados salgo con mis amigos.', 'Normalmente, los sábados salgo con mis amigos', 'Normalmente los sábados salgo con mis amigos'] },
        { id: 'q4', prompt: '(a la ópera / nunca / voy) →',
          correct: ['Nunca voy a la ópera.', 'No voy nunca a la ópera.', 'Nunca voy a la ópera', 'No voy nunca a la ópera'] },
        { id: 'q5', prompt: '(dos veces a la semana / la casa / limpiamos) →',
          correct: ['Limpiamos la casa dos veces a la semana.', 'Dos veces a la semana limpiamos la casa.', 'Limpiamos la casa dos veces a la semana', 'Dos veces a la semana limpiamos la casa'] },
      ],
    },

    {
      id: '103.6',
      title: 'Сопоставьте',
      type: 'match',
      instructions: 'Подберите синоним или близкое выражение.',
      pool: ['todos los días', 'a veces', 'a menudo', 'casi nunca', 'siempre'],
      questions: [
        { id: 'q1', prompt: '<em>cada día</em>',           correct: 'todos los días' },
        { id: 'q2', prompt: '<em>de vez en cuando</em>',    correct: 'a veces' },
        { id: 'q3', prompt: '<em>frecuentemente</em>',      correct: 'a menudo' },
        { id: 'q4', prompt: '<em>en muy raras ocasiones</em>', correct: 'casi nunca' },
        { id: 'q5', prompt: '<em>en todo momento</em>',     correct: 'siempre' },
      ],
    },

    {
      id: '103.7',
      title: 'siempre или nunca?',
      type: 'choice',
      instructions: 'Выберите подходящее по смыслу.',
      questions: [
        { id: 'q1', prompt: 'En el desierto de Atacama no llueve ___.',  options: ['siempre', 'nunca'], correct: 'nunca' },
        { id: 'q2', prompt: 'Mario es muy puntual: ___ llega a tiempo.', options: ['siempre', 'nunca'], correct: 'siempre' },
        { id: 'q3', prompt: 'No me gusta el café. ___ lo tomo.',          options: ['siempre', 'nunca'], correct: 'nunca' },
        { id: 'q4', prompt: 'Mis abuelos ___ desayunan a las ocho. Es su rutina.', options: ['siempre', 'nunca'], correct: 'siempre' },
      ],
    },

    {
      id: '103.8',
      title: 'Без отрицания или с двойным отрицанием?',
      type: 'multi',
      instructions: 'Отметьте все корректные фразы с <em>nunca</em> и <em>casi nunca</em>.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Nunca voy a la ópera.',
            'No voy nunca a la ópera.',
            'Voy nunca a la ópera.',
            'No voy a la ópera nunca.',
            'Casi nunca vemos la tele.',
            'No vemos casi nunca la tele.',
            'Vemos casi nunca la tele.',
            'No vemos la tele casi nunca.',
          ],
          correct: [
            'Nunca voy a la ópera.',
            'No voy nunca a la ópera.',
            'No voy a la ópera nunca.',
            'Casi nunca vemos la tele.',
            'No vemos casi nunca la tele.',
            'No vemos la tele casi nunca.',
          ],
          explanation: 'Если <em>nunca</em> стоит после глагола — обязательно <em>no</em> перед глаголом. <em>Voy nunca / Vemos casi nunca</em> без <em>no</em> — ошибка.',
        },
      ],
    },

    {
      id: '103.9',
      title: 'Часто или редко?',
      type: 'choice',
      instructions: 'К какой категории ближе значение?',
      questions: [
        { id: 'q1', prompt: '<em>frecuentemente</em>',       options: ['часто', 'редко'], correct: 'часто' },
        { id: 'q2', prompt: '<em>de vez en cuando</em>',     options: ['часто', 'иногда', 'почти никогда'], correct: 'иногда' },
        { id: 'q3', prompt: '<em>casi siempre</em>',         options: ['часто', 'почти никогда'], correct: 'часто' },
        { id: 'q4', prompt: '<em>casi nunca</em>',           options: ['часто', 'почти никогда'], correct: 'почти никогда' },
        { id: 'q5', prompt: '<em>a menudo</em>',             options: ['часто', 'почти никогда'], correct: 'часто' },
      ],
    },

    {
      id: '103.10',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Послушайте и запишите фразу полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Javier hace footing todos los días.', correct: ['Javier hace footing todos los días.', 'Javier hace footing todos los días'] },
        { id: 'q2', prompt: '', audio: 'En el desierto no llueve nunca.',     correct: ['En el desierto no llueve nunca.', 'En el desierto no llueve nunca'] },
        { id: 'q3', prompt: '', audio: 'Vamos al cine de vez en cuando.',     correct: ['Vamos al cine de vez en cuando.', 'Vamos al cine de vez en cuando'] },
        { id: 'q4', prompt: '', audio: 'Normalmente comemos a las dos.',      correct: ['Normalmente comemos a las dos.', 'Normalmente, comemos a las dos.', 'Normalmente comemos a las dos', 'Normalmente, comemos a las dos'] },
        { id: 'q5', prompt: '', audio: 'Trabajo a veces por la tarde.',       correct: ['Trabajo a veces por la tarde.', 'Trabajo a veces por la tarde'] },
        { id: 'q6', prompt: '', audio: 'Voy al gimnasio dos veces a la semana.', correct: ['Voy al gimnasio dos veces a la semana.', 'Voy al gimnasio dos veces a la semana'] },
      ],
    },

    {
      id: '103.11',
      title: 'Где ошибка?',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Nunca voy al gimnasio.', 'No voy nunca al gimnasio.', 'Voy nunca al gimnasio.', 'No voy al gimnasio nunca.'], correct: 'Voy nunca al gimnasio.', explanation: 'Если <em>nunca</em> после глагола — нужен <em>no</em> перед глаголом.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Una vez al mes hacemos limpieza.', 'Una vez de mes hacemos limpieza.', 'Hacemos limpieza una vez al mes.'], correct: 'Una vez de mes hacemos limpieza.', explanation: 'Правильно <em>al mes</em>, не <em>de mes</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Dos veces a la semana.', 'Dos veces la semana.', 'Una vez a la semana.', 'Tres veces al año.'], correct: 'Dos veces la semana.', explanation: 'Перед существительным с артиклем нужен предлог <em>a</em>: <em>a la semana</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Los lunes voy a yoga.', 'Todos los lunes voy a yoga.', 'En los lunes voy a yoga.'], correct: 'En los lunes voy a yoga.', explanation: 'По дням недели — без предлога: <em>los lunes</em> или <em>todos los lunes</em>.' },
      ],
    },

    {
      id: '103.12',
      title: 'Заполните пропуск',
      type: 'fill',
      instructions: 'Подставьте подходящее наречие или выражение частоты.',
      questions: [
        { id: 'q1', prompt: 'Trabajo de lunes a viernes, ocho horas, así que estoy en la oficina ___ (= каждый день рабочей недели).', correct: ['todos los días', 'los días laborables'] },
        { id: 'q2', prompt: 'Mi gato come ___ (= три раза в день).',                                    correct: ['tres veces al día'] },
        { id: 'q3', prompt: 'Vamos a la sierra ___ (= иногда).',                                       correct: ['a veces', 'de vez en cuando'] },
        { id: 'q4', prompt: 'Mariana ___ se enfada (= почти никогда). Es muy tranquila.',                correct: ['casi nunca'] },
        { id: 'q5', prompt: '___, los domingos comemos en casa de los abuelos (= обычно).',              correct: ['Normalmente'] },
        { id: 'q6', prompt: 'En el Polo Sur ___ hace mucho frío (= всегда).',                            correct: ['siempre'] },
      ],
    },
  ],
};
