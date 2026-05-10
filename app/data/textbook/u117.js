// ============================================================
// Unidad 117 — Oraciones finales (para, para que)
// «Зачем?» — para + infinitivo (один субъект)
//          / para que + subjuntivo (разные субъекты).
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u117 = {
  id: 'u117',
  number: 117,
  title: { es: 'para, para que…', topic: 'Oraciones finales' },
  topicRu: 'Целевые предложения: para + inf / para que + subjuntivo',

  theory: [
    {
      type: 'rule',
      es: 'Las <strong>oraciones finales</strong> indican <em>«¿con qué objetivo?»</em> o <em>«¿para qué?»</em>. Las construimos con <strong>para</strong> + infinitivo o <strong>para que</strong> + subjuntivo.',
      ru: 'Целевые придаточные отвечают на вопрос «зачем?», «с какой целью?». Базовая пара: <strong>para + инфинитив</strong> (если действующее лицо одно) — <strong>para que + сослагательное</strong> (если лиц два).',
      examples: [
        { es: 'Necesito tiempo <strong>para estudiar</strong>.', ru: 'Мне нужно время, чтобы учиться. <em>(я и учусь — оба «я».)</em>' },
        { es: 'He traído una foto de mi hijo <strong>para que lo conozcáis</strong>.', ru: 'Я принёс фото сына, чтобы вы его увидели. <em>(я принёс — вы увидели.)</em>' },
        { es: 'Se vistió deprisa <strong>para no llegar tarde</strong>.', ru: 'Он быстро оделся, чтобы не опоздать.' },
      ],
    },

    {
      type: 'heading',
      text: 'Когда субъект один — para + infinitivo',
    },
    {
      type: 'rule',
      es: 'Cuando el sujeto de las dos partes es el <strong>mismo</strong>, después de <strong>para</strong> ponemos un <em>infinitivo</em>.',
      ru: 'Если в обеих частях фразы действует <strong>одно и то же лицо</strong>, после <em>para</em> ставим инфинитив — никаких личных форм глагола.',
      examples: [
        { es: 'Llamé (yo) a Antonio <strong>para invitarle (yo)</strong> a la fiesta.', ru: 'Я позвонил Антонио, чтобы пригласить его на праздник.' },
        { es: 'Sonia y yo nos reunimos los viernes <strong>para practicar</strong> español.', ru: 'Соня и я встречаемся по пятницам, чтобы заниматься испанским.' },
        { es: 'Fito ha cerrado (él) la puerta <strong>para no molestar (él)</strong>.', ru: 'Фито закрыл дверь, чтобы не мешать.' },
      ],
    },

    {
      type: 'heading',
      text: 'Когда субъекты разные — para que + subjuntivo',
    },
    {
      type: 'rule',
      es: 'Cuando el sujeto cambia entre las dos oraciones, usamos <strong>para que</strong> + <em>subjuntivo</em>. El presente de subjuntivo se refiere al presente o al futuro; el imperfecto de subjuntivo, al pasado.',
      ru: 'Если в двух частях разные субъекты — нужен <strong>para que + сослагательное наклонение</strong>. Настоящее сослагательное — для настоящего и будущего; имперфект сослагательного — для прошлого.',
      examples: [
        { es: 'Juan ha escondido (él) el chocolate <strong>para que no lo veas (tú)</strong>.', ru: 'Хуан спрятал шоколад, чтобы ты его не увидел.' },
        { es: 'He traído un CD nuevo <strong>para que lo escuchéis (vosotros)</strong>.', ru: 'Я принёс новый CD, чтобы вы его послушали.' },
        { es: 'Estoy esperando a Lupe <strong>para que me explique</strong> este problema.', ru: 'Жду Лупе, чтобы она мне объяснила эту задачу.' },
        { es: 'Ayer quedé con Jesús <strong>para que me enseñara</strong> sus fotos.', ru: 'Вчера я встретился с Хесусом, чтобы он показал мне свои фото. <em>(прошлое → imperfecto de subjuntivo.)</em>' },
      ],
    },

    {
      type: 'table',
      caption: 'Сравнение конструкций',
      columns: ['Конструкция', 'Когда', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<strong>para + infinitivo</strong>', 'один и тот же субъект',
          '<em>Estudio mucho <strong>para aprobar</strong>.</em>'],
        ['<strong>para que + presente de subjuntivo</strong>', 'два субъекта; настоящее или будущее',
          '<em>Te llamo <strong>para que vengas</strong>.</em>'],
        ['<strong>para que + imperfecto de subjuntivo</strong>', 'два субъекта; прошлое',
          '<em>Te llamé <strong>para que vinieras</strong>.</em>'],
      ],
    },

    {
      type: 'atencion',
      es: 'Con verbos de movimiento (<em>ir, venir, salir…</em>) suele aparecer <strong>a</strong> en lugar de <em>para</em>: <em>Lola ha salido <strong>a comprar</strong> leche</em>; <em>Uschi viene <strong>a que le ayudemos</strong> con el español</em>.',
      ru: 'С глаголами движения (<em>ir, venir, salir, llegar…</em>) часто вместо <em>para / para que</em> используется <strong>a / a que</strong>: <em>Salí <strong>a tomar</strong> el aire; vienen <strong>a que les ayudemos</strong></em>.',
    },
  ],

  exercises: [
    {
      id: '117.1',
      title: 'para или para que?',
      type: 'choice',
      instructions: 'Один субъект — <em>para</em> + инфинитив; разные — <em>para que</em> + subjuntivo.',
      questions: [
        { id: 'q1', prompt: 'Estudio mucho ___ aprobar el examen.',               options: ['para', 'para que'], correct: 'para' },
        { id: 'q2', prompt: 'Te llamo ___ vengas a la fiesta.',                     options: ['para', 'para que'], correct: 'para que' },
        { id: 'q3', prompt: 'Compré flores ___ regalárselas a mi madre.',           options: ['para', 'para que'], correct: 'para' },
        { id: 'q4', prompt: 'Te he traído este libro ___ lo leas tú.',                 options: ['para', 'para que'], correct: 'para que' },
        { id: 'q5', prompt: 'Cierra la puerta ___ no entre el ruido.',                  options: ['para', 'para que'], correct: 'para que' },
        { id: 'q6', prompt: 'Se levanta temprano ___ ir a correr.',                       options: ['para', 'para que'], correct: 'para' },
        { id: 'q7', prompt: 'He hecho la cena ___ mis hijos coman al volver.',              options: ['para', 'para que'], correct: 'para que' },
        { id: 'q8', prompt: 'Voy al banco ___ sacar dinero.',                                  options: ['para', 'para que'], correct: 'para' },
      ],
    },

    {
      id: '117.2',
      title: 'Поставьте глагол в нужную форму',
      type: 'fill',
      instructions: 'Подставьте правильную форму глагола в скобках. Если субъект тот же — это инфинитив; если разный и говорим о настоящем/будущем — настоящее subjuntivo.',
      questions: [
        { id: 'q1', prompt: 'Tienes que venir para que ___ (conocer / tú) a mis padres.',          correct: 'conozcas' },
        { id: 'q2', prompt: 'Llamé a Raquel para que me ___ (abrir) la puerta.',                     correct: 'abriera', explanation: 'Прошлое → imperfecto de subjuntivo (<em>abriera</em>).' },
        { id: 'q3', prompt: 'Cierra la ventana para que no ___ (ver / nosotros) a los vecinos.',      correct: 'veamos' },
        { id: 'q4', prompt: 'Abre la ventana para que ___ (entrar) el aire.',                          correct: 'entre' },
        { id: 'q5', prompt: 'Llama a Víctor para que ___ (ir / él) a preparar la cena.',                  correct: 'vaya' },
        { id: 'q6', prompt: 'Llamé a Sara para que ___ (ir / ella) a recoger las entradas.',                correct: 'fuera' },
        { id: 'q7', prompt: 'Me escondí detrás de un árbol para que no me ___ (ver) nadie.',                 correct: 'viera' },
        { id: 'q8', prompt: 'Estoy aquí para ___ (ayudar) a los niños.',                                       correct: 'ayudar' },
      ],
    },

    {
      id: '117.3',
      title: 'Соедините начало и конец',
      type: 'match',
      instructions: 'Подберите подходящее завершение для каждого начала.',
      pool: [
        'comprarme la furgoneta.',
        'no obstaculizar la salida.',
        'venga a las siete.',
        'no os oigan.',
        'darle un recado.',
        'hablar con su madre.',
      ],
      questions: [
        { id: 'q1', prompt: '<em>Tengo que ver a María para</em> ___',                   correct: 'darle un recado.' },
        { id: 'q2', prompt: '<em>Habla bajo para</em> ___',                                 correct: 'no os oigan.' },
        { id: 'q3', prompt: '<em>Pablo trabajó mucho para</em> ___',                         correct: 'comprarme la furgoneta.' },
        { id: 'q4', prompt: '<em>No aparques aquí para</em> ___',                              correct: 'no obstaculizar la salida.' },
        { id: 'q5', prompt: '<em>Llamé a Carlos para que</em> ___',                              correct: 'venga a las siete.' },
        { id: 'q6', prompt: '<em>Iré a casa de Elisa para</em> ___',                                correct: 'hablar con su madre.' },
      ],
    },

    {
      id: '117.4',
      title: 'Перепишите как одну фразу с <em>para / para que</em>',
      type: 'fill',
      instructions: 'Объедините две идеи в одну целевую фразу. Запишите всё предложение целиком.',
      questions: [
        { id: 'q1', prompt: '<em>Lleva un paraguas. No te mojarás.</em> →',
          correct: ['Lleva un paraguas para no mojarte.', 'Lleva un paraguas para no mojarte'] },
        { id: 'q2', prompt: '<em>Préstales el libro. Podrán estudiar.</em> →',
          correct: ['Préstales el libro para que puedan estudiar.', 'Préstales el libro para que puedan estudiar'] },
        { id: 'q3', prompt: '<em>Pon la radio. Oirás las noticias.</em> →',
          correct: ['Pon la radio para oír las noticias.', 'Pon la radio para oír las noticias'] },
        { id: 'q4', prompt: '<em>Daos prisa. No llegaréis tarde.</em> →',
          correct: ['Daos prisa para no llegar tarde.', 'Daos prisa para no llegar tarde'] },
        { id: 'q5', prompt: '<em>Baja la televisión. No se dormirá el niño.</em> →',
          correct: ['Baja la televisión para que se duerma el niño.', 'Baja la televisión para que se duerma el niño'] },
        { id: 'q6', prompt: '<em>Tengo que ahorrar. Me compraré la moto.</em> →',
          correct: ['Tengo que ahorrar para comprarme la moto.', 'Tengo que ahorrar para comprarme la moto'] },
      ],
    },

    {
      id: '117.5',
      title: 'Все верные варианты',
      type: 'multi',
      instructions: 'Какие предложения построены правильно?',
      questions: [
        {
          id: 'q1',
          prompt: 'Отметьте все правильные:',
          options: [
            'Estudio para aprobar.',
            'Estudio para apruebe.',
            'Estudio para que aprobar.',
            'Te llamo para vengas.',
            'Te llamo para que vengas.',
            'Cerré la puerta para no molestar.',
            'Cerré la puerta para que no molestar.',
            'He traído un CD para que lo escuchéis.',
          ],
          correct: [
            'Estudio para aprobar.',
            'Te llamo para que vengas.',
            'Cerré la puerta para no molestar.',
            'He traído un CD para que lo escuchéis.',
          ],
          explanation: 'Один субъект → <em>para + inf</em>; разные → <em>para que + subj</em>.',
        },
      ],
    },

    {
      id: '117.6',
      title: 'Настоящее или прошлое subjuntivo?',
      type: 'choice',
      instructions: 'Если основное действие в прошлом, в придаточном — imperfecto de subjuntivo.',
      questions: [
        { id: 'q1', prompt: 'Te he traído fotos para que las ___.',                  options: ['veas', 'vieras'], correct: 'veas' },
        { id: 'q2', prompt: 'Te traje fotos para que las ___.',                        options: ['veas', 'vieras'], correct: 'vieras' },
        { id: 'q3', prompt: 'Llamó al médico para que ___ a casa.',                     options: ['venga', 'viniera'], correct: 'viniera' },
        { id: 'q4', prompt: 'Llama al médico para que ___ a casa.',                       options: ['venga', 'viniera'], correct: 'venga' },
        { id: 'q5', prompt: 'Compré entradas para que mis padres ___ ir al teatro.',         options: ['puedan', 'pudieran'], correct: 'pudieran' },
        { id: 'q6', prompt: 'Compraré entradas para que mis padres ___ ir al teatro.',         options: ['puedan', 'pudieran'], correct: 'puedan' },
      ],
    },

    {
      id: '117.7',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна неверная фраза.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?',
          options: ['Estudio para aprobar.', 'Estudio para apruebe.', 'Trabaja para vivir.', 'Llamo para invitarte.'],
          correct: 'Estudio para apruebe.', explanation: 'Один субъект → инфинитив, не subjuntivo.' },
        { id: 'q2', prompt: 'Где ошибка?',
          options: ['Te lo digo para que lo sepas.', 'Te lo digo para sepas.', 'He traído un CD para que lo escuchéis.', 'Cierra para que no entre el frío.'],
          correct: 'Te lo digo para sepas.', explanation: 'При двух разных субъектах нужно <em>para <strong>que</strong></em>.' },
        { id: 'q3', prompt: 'Где ошибка?',
          options: ['Llamé para que viniera.', 'Llamé para que venga.', 'Llamaré para que venga.', 'Llamaba para que viniera.'],
          correct: 'Llamé para que venga.', explanation: 'Прошлое → imperfecto de subjuntivo.' },
        { id: 'q4', prompt: 'Где ошибка?',
          options: ['He salido a comprar leche.', 'He salido para comprar leche.', 'He salido para que compre leche.', 'Vienen a ayudarnos.'],
          correct: 'He salido para que compre leche.', explanation: 'Субъект тот же — нет смысла в <em>para que</em>.' },
      ],
    },

    {
      id: '117.8',
      title: 'Заполните пропуски',
      type: 'fill',
      instructions: 'Подставьте подходящую форму глагола в скобках.',
      questions: [
        { id: 'q1',  prompt: 'Hice las camas para que ___ (descansar / tú).',                     correct: 'descansaras' },
        { id: 'q2',  prompt: 'Vinieron a Madrid para ___ (ver / ellos) la final.',                  correct: 'ver' },
        { id: 'q3',  prompt: 'Luis quiere dar una fiesta para ___ (conocer / nosotros) a su novia.', correct: 'conocer' },
        { id: 'q4',  prompt: 'En verano vamos a Quito para ___ (ver / nosotros) a tu prima.',         correct: 'ver' },
        { id: 'q5',  prompt: 'Saldremos de noche para que los niños no ___ (pasar) calor.',            correct: 'pasen' },
        { id: 'q6',  prompt: 'Ayer salimos para ___ (tomar / nosotros) un poco el aire.',                correct: 'tomar' },
        { id: 'q7',  prompt: 'Voy a comprar huevos para que Manu ___ (hacer) un flan.',                    correct: 'haga' },
        { id: 'q8',  prompt: 'Llamé a Ricardo para que ___ (recoger / él) a Marga en la estación.',         correct: 'recogiera' },
      ],
    },

    {
      id: '117.9',
      title: 'Сопоставьте перевод',
      type: 'match',
      instructions: 'Подберите русский перевод.',
      pool: [
        'Я учусь, чтобы сдать экзамен.',
        'Я звоню, чтобы ты пришёл.',
        'Я закрыл дверь, чтобы не мешать.',
        'Я закрыл дверь, чтобы они не услышали.',
        'Я приехал, чтобы вы познакомились с моим сыном.',
        'Я вышел купить молока.',
      ],
      questions: [
        { id: 'q1', prompt: '<em>Estudio para aprobar.</em>',                              correct: 'Я учусь, чтобы сдать экзамен.' },
        { id: 'q2', prompt: '<em>Te llamo para que vengas.</em>',                          correct: 'Я звоню, чтобы ты пришёл.' },
        { id: 'q3', prompt: '<em>Cerré la puerta para no molestar.</em>',                   correct: 'Я закрыл дверь, чтобы не мешать.' },
        { id: 'q4', prompt: '<em>Cerré la puerta para que no oyeran.</em>',                  correct: 'Я закрыл дверь, чтобы они не услышали.' },
        { id: 'q5', prompt: '<em>Vine para que conocierais a mi hijo.</em>',                   correct: 'Я приехал, чтобы вы познакомились с моим сыном.' },
        { id: 'q6', prompt: '<em>He salido a comprar leche.</em>',                              correct: 'Я вышел купить молока.' },
      ],
    },

    {
      id: '117.10',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Прослушайте и запишите.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Necesito tiempo para estudiar.',
          correct: ['Necesito tiempo para estudiar.', 'Necesito tiempo para estudiar'] },
        { id: 'q2', prompt: '', audio: 'He traído una foto para que la veas.',
          correct: ['He traído una foto para que la veas.', 'He traído una foto para que la veas'] },
        { id: 'q3', prompt: '', audio: 'Se vistió deprisa para no llegar tarde.',
          correct: ['Se vistió deprisa para no llegar tarde.', 'Se vistió deprisa para no llegar tarde'] },
        { id: 'q4', prompt: '', audio: 'Ayer quedé con Jesús para que me enseñara sus fotos.',
          correct: ['Ayer quedé con Jesús para que me enseñara sus fotos.', 'Ayer quedé con Jesús para que me enseñara sus fotos'] },
        { id: 'q5', prompt: '', audio: 'Lola ha salido a comprar leche.',
          correct: ['Lola ha salido a comprar leche.', 'Lola ha salido a comprar leche'] },
      ],
    },

    {
      id: '117.11',
      title: 'a / a que или para / para que?',
      type: 'choice',
      instructions: 'С глаголами движения (<em>ir, venir, salir</em>) часто берут <em>a / a que</em>.',
      questions: [
        { id: 'q1', prompt: 'Lola ha salido ___ comprar leche.',                       options: ['a', 'para'], correct: 'a' },
        { id: 'q2', prompt: 'Estudio mucho ___ aprobar.',                                options: ['a', 'para'], correct: 'para' },
        { id: 'q3', prompt: 'Vienen a casa ___ que les ayudemos.',                          options: ['a', 'para'], correct: 'a' },
        { id: 'q4', prompt: 'He preparado la maleta ___ irme mañana.',                       options: ['a', 'para'], correct: 'para' },
        { id: 'q5', prompt: 'He venido ___ verte.',                                            options: ['a', 'para'], correct: 'a' },
        { id: 'q6', prompt: 'Te lo digo ___ que lo sepas.',                                     options: ['a', 'para'], correct: 'para' },
      ],
    },

    {
      id: '117.12',
      title: 'Все верные варианты',
      type: 'multi',
      instructions: 'Какие фразы корректны?',
      questions: [
        {
          id: 'q1',
          prompt: 'Отметьте все правильные:',
          options: [
            'Vine a verte.',
            'Vine para verte.',
            'Vine a que te viera.',
            'Vine a que veas.',
            'Salí a comprar pan.',
            'Salí para comprar pan.',
            'Salí para que comprar pan.',
          ],
          correct: [
            'Vine a verte.',
            'Vine para verte.',
            'Salí a comprar pan.',
            'Salí para comprar pan.',
          ],
          explanation: 'С глаголами движения работают и <em>a + inf</em>, и <em>para + inf</em>; <em>para que + inf</em> — ошибка.',
        },
      ],
    },
  ],
};
