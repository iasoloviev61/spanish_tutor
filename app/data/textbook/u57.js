// ============================================================
// Unidad 57 — Contraste presente de indicativo / estar + gerundio
// «Hago gimnasia todos los días» vs «Estoy haciendo gimnasia ahora».
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u57 = {
  id: 'u57',
  number: 57,
  title: { es: 'hago / estoy haciendo', topic: 'Contraste presente vs estar + gerundio' },
  topicRu: 'Простое настоящее vs «estar + gerundio»',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'El <strong>presente de indicativo</strong> sirve para hablar de acciones <strong>habituales</strong> (todos los días, los lunes, normalmente) y de <strong>verdades generales</strong>.',
      ru: 'Простое настоящее (<em>hago, como, vivo</em>) — для <strong>привычного, повторяющегося</strong> действия и для общих фактов.',
      examples: [
        { es: 'Hago gimnasia todas las mañanas.', ru: 'Я делаю зарядку каждое утро.' },
        { es: 'En mi casa comemos a las dos.',     ru: 'У нас дома обедают в два.' },
        { es: 'En Galicia llueve mucho.',          ru: 'В Галисии часто идут дожди.' },
      ],
    },
    {
      type: 'rule',
      es: '<strong>estar + gerundio</strong> sirve para acciones <strong>breves, en marcha en este momento</strong>, y para situaciones <strong>temporales, no habituales</strong> (con <em>esta semana, este mes, últimamente</em>).',
      ru: '<em>estar + gerundio</em> — для действия <strong>прямо сейчас</strong> или для <strong>временной</strong>, нехарактерной ситуации (этот месяц, последнее время).',
      examples: [
        { es: 'Estoy haciendo un rompecabezas.', ru: 'Я сейчас собираю пазл.' },
        { es: 'Este verano está haciendo frío.', ru: 'Этим летом холодно.' },
        { es: 'Esta semana estoy trabajando en Iquique.', ru: 'На этой неделе я работаю в Икике.' },
      ],
    },
    {
      type: 'heading',
      text: 'Сравнение',
    },
    {
      type: 'table',
      caption: 'Hábito vs acción en marcha',
      columns: ['Presente de indicativo (привычка/факт)', 'Estar + gerundio (сейчас / временно)'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>Hago gimnasia todas las mañanas.</em>', '<em>Ahora estoy haciendo gimnasia.</em>'],
        ['<em>Olga toca la guitarra en un grupo.</em>', '<em>¿Qué tocas? — Estoy tocando una canción mexicana.</em>'],
        ['<em>En Acapulco hace calor en verano.</em>', '<em>Este verano está haciendo frío.</em>'],
        ['<em>Trabajo en Santiago.</em>', '<em>Esta semana estoy trabajando en Iquique.</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Algunos verbos <strong>no se usan normalmente con estar + gerundio</strong>: <em>ir, venir; conocer, comprender, entender, querer, necesitar, amar, preferir, odiar, parecer, tener, llevar; ver, oír</em> (cuando significan <em>mirar / escuchar</em>). Con ellos usamos el presente: <em>Voy a la playa</em>, <em>No oye nada</em>, <em>Tiene dos hermanos</em>.',
      ru: 'С глаголами <em>ir, venir, conocer, comprender, entender, querer, necesitar, amar, preferir, odiar, parecer, tener, llevar, ver, oír</em> обычно <strong>не используют</strong> <em>estar + gerundio</em> — у них своё «состоятельное» значение в простом настоящем.',
      examples: [
        { es: 'Vamos a la playa. (NO «estamos yendo»)', ru: 'Мы идём на пляж.' },
        { es: 'No oye nada. (NO «no está oyendo»)',     ru: 'Он ничего не слышит.' },
        { es: 'Tiene dos hermanos. (NO «está teniendo»)', ru: 'У него два брата.' },
      ],
    },
    {
      type: 'table',
      caption: 'Глаголы «без герундия»',
      columns: ['Группа', 'Примеры', 'Используем'],
      colClasses: ['col-pattern', 'col-ex', 'col-pattern'],
      rows: [
        ['<strong>движение «туда / оттуда»</strong>', '<em>ir, venir</em>',                     '<em>Voy / Vengo</em>'],
        ['<strong>состояние / отношение</strong>',    '<em>tener, llevar, parecer, querer, conocer, comprender, preferir…</em>', '<em>Tengo, conozco, parece…</em>'],
        ['<strong>восприятие</strong> (= mirar / escuchar)', '<em>ver, oír</em>',              '<em>Veo / Oigo</em>'],
        ['<strong>но</strong>: <em>oír</em> = «слушать радио»', '<em>Estoy oyendo la radio.</em>', '— разрешено'],
      ],
    },
    {
      type: 'atencion',
      es: 'A veces el <strong>presente</strong> también describe lo que pasa ahora: <em>—¿Qué haces? —Nada. Leo un rato.</em> Las dos opciones son posibles; <em>estar + gerundio</em> es más enfático.',
      ru: 'Простое настоящее тоже умеет говорить про «сейчас», особенно в коротких ответах: <em>—¿Qué haces? —Leo un rato</em>. Тогда <em>estar + gerundio</em> — просто более выразительный вариант.',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '57.1',
      title: 'Привычка или сейчас?',
      type: 'choice',
      instructions: 'Выберите подходящую форму глагола в скобках.',
      questions: [
        { id: 'q1', prompt: 'Todos los días Marta (correr) ___ en el parque.', options: ['corre', 'está corriendo'], correct: 'corre' },
        { id: 'q2', prompt: '¡Mira! Marta (correr) ___ ahora mismo.',           options: ['corre', 'está corriendo'], correct: 'está corriendo' },
        { id: 'q3', prompt: 'Normalmente (yo, comer) ___ a las dos.',             options: ['como', 'estoy comiendo'], correct: 'como' },
        { id: 'q4', prompt: '—¿Dónde estás? —En la cocina, (yo, comer) ___ ahora.', options: ['como', 'estoy comiendo'], correct: 'estoy comiendo' },
        { id: 'q5', prompt: 'En Andalucía (hacer) ___ mucho calor en agosto.',     options: ['hace', 'está haciendo'], correct: 'hace' },
        { id: 'q6', prompt: 'Este verano (hacer) ___ frío en Madrid.',              options: ['hace', 'está haciendo'], correct: 'está haciendo', explanation: '«Этим летом» — нерегулярная ситуация.' },
        { id: 'q7', prompt: 'Mi padre (trabajar) ___ en un banco.',                  options: ['trabaja', 'está trabajando'], correct: 'trabaja' },
        { id: 'q8', prompt: 'Esta semana (yo, trabajar) ___ en casa.',                 options: ['trabajo', 'estoy trabajando'], correct: 'estoy trabajando' },
      ],
    },

    {
      id: '57.2',
      title: 'Глаголы «без герундия»',
      type: 'choice',
      instructions: 'С глаголами <em>ir, venir, conocer, querer, tener, ver, oír…</em> обычно не используют <em>estar + gerundio</em>. Выберите правильную форму.',
      questions: [
        { id: 'q1', prompt: '¿Adónde (vosotros, ir) ___?',                  options: ['vais', 'estáis yendo'], correct: 'vais' },
        { id: 'q2', prompt: '(Yo, no, entender) ___. ¿Puedes repetir?',      options: ['No entiendo', 'No estoy entendiendo'], correct: 'No entiendo' },
        { id: 'q3', prompt: '(Tú, oír) ___ algo extraño?',                    options: ['Oyes', 'Estás oyendo'], correct: 'Oyes' },
        { id: 'q4', prompt: '(Yo, no, ver) ___ nada en esta foto.',           options: ['No veo', 'No estoy viendo'], correct: 'No veo' },
        { id: 'q5', prompt: 'Mi abuela (tener) ___ ochenta años.',             options: ['tiene', 'está teniendo'], correct: 'tiene' },
        { id: 'q6', prompt: '(Tú, conocer) ___ a esa chica?',                  options: ['Conoces', 'Estás conociendo'], correct: 'Conoces' },
        { id: 'q7', prompt: 'Hoy Lola (llevar) ___ un vestido azul.',           options: ['lleva', 'está llevando'], correct: 'lleva' },
        { id: 'q8', prompt: '(Tú, querer) ___ un café?',                        options: ['Quieres', 'Estás queriendo'], correct: 'Quieres' },
      ],
    },

    {
      id: '57.3',
      title: 'Раскройте скобки',
      type: 'fill',
      instructions: 'Поставьте глагол в <em>presente de indicativo</em> или <em>estar + gerundio</em> — что подходит по смыслу.',
      questions: [
        { id: 'q1', prompt: 'Normalmente Lola (desayunar) ___ café con leche.',       correct: 'desayuna' },
        { id: 'q2', prompt: 'Pero hoy (desayunar) ___ té.',                            correct: ['está desayunando'] },
        { id: 'q3', prompt: 'Mis amigos (vivir) ___ en Sevilla desde 2015.',           correct: 'viven' },
        { id: 'q4', prompt: 'Esta temporada Carla (vivir) ___ en Berlín.',             correct: ['está viviendo'] },
        { id: 'q5', prompt: 'En invierno (nevar) ___ en los Pirineos.',                correct: 'nieva' },
        { id: 'q6', prompt: '¡Mira por la ventana! (nevar) ___ ahora.',                 correct: ['está nevando'] },
        { id: 'q7', prompt: 'Los lunes (yo, ir) ___ al gimnasio.',                       correct: 'voy' },
        { id: 'q8', prompt: 'Últimamente Pedro (dormir) ___ muy mal.',                    correct: ['está durmiendo'] },
      ],
    },

    {
      id: '57.4',
      title: 'Обведите верный вариант',
      type: 'choice',
      instructions: 'Выберите правильный вариант (по правилу «обычно — простое настоящее»).',
      questions: [
        { id: 'q1', prompt: '¿(Vienes / Estás viniendo) a la fiesta esta noche?',     options: ['Vienes', 'Estás viniendo'], correct: 'Vienes' },
        { id: 'q2', prompt: 'Necesito un favor: ¿(quieres / estás queriendo) ayudarme?', options: ['quieres', 'estás queriendo'], correct: 'quieres' },
        { id: 'q3', prompt: '—¿(Oyes / Estás oyendo) el ruido del vecino?',             options: ['Oyes', 'Estás oyendo'], correct: 'Oyes' },
        { id: 'q4', prompt: 'Pero: por la noche (oigo / estoy oyendo) la radio antes de dormir.', options: ['oigo', 'estoy oyendo'], correct: 'oigo', explanation: 'Обычное действие — простое настоящее. <em>estar oyendo la radio</em> сказали бы прямо сейчас.' },
        { id: 'q5', prompt: 'Carlos (parece / está pareciendo) cansado hoy.',            options: ['parece', 'está pareciendo'], correct: 'parece' },
      ],
    },

    {
      id: '57.5',
      title: 'Подберите маркер',
      type: 'match',
      instructions: 'Сопоставьте маркер времени с глагольной формой.',
      pool: ['todos los días', 'siempre', 'normalmente', 'ahora mismo', 'esta semana', 'últimamente'],
      questions: [
        { id: 'q1', prompt: 'Marker для <em>presente de indicativo</em> (привычка)',         correct: 'todos los días' },
        { id: 'q2', prompt: 'Marker для <em>presente</em> (общая привычка)',                  correct: 'normalmente' },
        { id: 'q3', prompt: 'Marker для <em>estar + gerundio</em> (прямо сейчас)',            correct: 'ahora mismo' },
        { id: 'q4', prompt: 'Marker для <em>estar + gerundio</em> (последние дни/недели)',     correct: 'esta semana' },
        { id: 'q5', prompt: 'Marker для <em>estar + gerundio</em> (последнее время)',           correct: 'últimamente' },
        { id: 'q6', prompt: 'Marker для <em>estar + gerundio</em> (постоянно, эмфаза)',         correct: 'siempre' },
      ],
    },

    {
      id: '57.6',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза неестественна — отметьте её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Hoy estoy estudiando español.', 'Todos los días estoy estudiando español.', 'Estoy estudiando español ahora.', 'Esta semana estoy estudiando mucho.'], correct: 'Todos los días estoy estudiando español.', explanation: 'С <em>todos los días</em> — обычная привычка → <em>estudio</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Mi abuela tiene 80 años.', 'Mi abuela está teniendo 80 años.', 'Mi abuela está bien hoy.', 'Mi abuela vive en Madrid.'], correct: 'Mi abuela está teniendo 80 años.', explanation: '<em>tener</em> в значении возраста — без герундия.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Estoy yendo al cine.', 'Voy al cine los sábados.', 'Voy al cine ahora.', 'Mañana voy al cine.'], correct: 'Estoy yendo al cine.', explanation: '<em>ir</em> обычно не идёт в <em>estar + gerundio</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['No te oigo bien.', 'Estás oyendo la radio.', 'No estoy oyendo nada (= no escucho).', 'Oigo la radio cada mañana.'], correct: 'No estoy oyendo nada (= no escucho).', explanation: 'В значении «слышать» — простое настоящее.' },
      ],
    },

    {
      id: '57.7',
      title: 'Ответьте полным предложением',
      type: 'fill',
      instructions: 'Ответьте о текущем моменте, используя <em>estar + gerundio</em>.',
      questions: [
        { id: 'q1', prompt: '¿Qué haces ahora? (yo, estudiar) →',          correct: ['Estoy estudiando.', 'Estoy estudiando'] },
        { id: 'q2', prompt: '¿Qué hace tu hermano? (jugar al fútbol) →',    correct: ['Está jugando al fútbol.', 'Está jugando al fútbol'] },
        { id: 'q3', prompt: '¿Qué hacéis? (cenar) →',                        correct: ['Estamos cenando.', 'Estamos cenando'] },
        { id: 'q4', prompt: '¿Qué hacen los niños? (ver la tele) →',          correct: ['Están viendo la tele.', 'Están viendo la tele'] },
        { id: 'q5', prompt: '¿Qué haces tú? (yo, leer un libro) →',           correct: ['Estoy leyendo un libro.', 'Estoy leyendo un libro'] },
      ],
    },

    {
      id: '57.8',
      title: 'Дополните диалог',
      type: 'fill',
      instructions: 'Поставьте глагол в подходящую форму. <em>(Подсказка: про себя «Сейчас? Каждый день? Не идёт с герундием?»)</em>',
      questions: [
        { id: 'q1', prompt: '—¿Qué (tú, hacer) ___? — Nada, (leer) ___ un rato.', correct: ['haces / leo'], explanation: 'Можно и <em>estoy leyendo</em>, но в коротких ответах естественнее простое настоящее.' },
        { id: 'q2', prompt: '—¿Adónde (vosotros, ir) ___? —A la playa.',           correct: ['vais'] },
        { id: 'q3', prompt: '—Mira, ahora (llover) ___.',                            correct: ['está lloviendo'] },
        { id: 'q4', prompt: '—Sí, en mayo aquí (llover) ___ casi todos los días.',    correct: ['llueve'] },
        { id: 'q5', prompt: '—¿Tú (conocer) ___ a Marta?',                            correct: ['conoces'] },
        { id: 'q6', prompt: '—Esta semana (yo, trabajar) ___ desde casa.',             correct: ['estoy trabajando'] },
      ],
    },

    {
      id: '57.9',
      title: 'Multi: какие фразы корректны',
      type: 'multi',
      instructions: 'Отметьте все грамматически и стилистически удачные варианты.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы естественны?',
          options: [
            'Vamos a la playa todos los domingos.',
            'Estamos yendo a la playa todos los domingos.',
            'Tengo dos hermanos.',
            'Estoy teniendo dos hermanos.',
            'Este mes estoy estudiando mucho.',
            'Este mes estudio mucho normalmente.',
            'Ahora estoy comiendo.',
            'No te oigo, hay mucho ruido.',
          ],
          correct: [
            'Vamos a la playa todos los domingos.',
            'Tengo dos hermanos.',
            'Este mes estoy estudiando mucho.',
            'Ahora estoy comiendo.',
            'No te oigo, hay mucho ruido.',
          ],
          explanation: '<em>ir, tener, oír</em> в этих значениях идут в простом настоящем. <em>«Este mes estudio mucho normalmente»</em> противоречит само себе — «обычно» и «этот месяц» не сочетаются.',
        },
      ],
    },

    {
      id: '57.10',
      title: 'Превратите привычку в «сейчас»',
      type: 'fill',
      instructions: 'Замените привычку на действие, происходящее в данный момент. Образец: <em>Comemos a las dos.</em> → <em>Estamos comiendo ahora.</em>',
      questions: [
        { id: 'q1', prompt: '<em>Estudio español los lunes.</em> → ahora …',  correct: ['Estoy estudiando español ahora.', 'Estoy estudiando español ahora'] },
        { id: 'q2', prompt: '<em>Olga toca la guitarra en un grupo.</em> → ahora …', correct: ['Olga está tocando la guitarra ahora.', 'Olga está tocando la guitarra ahora'] },
        { id: 'q3', prompt: '<em>Llueve mucho en Galicia.</em> → ahora …',     correct: ['Está lloviendo ahora.', 'Está lloviendo ahora'] },
        { id: 'q4', prompt: '<em>Mi hermano corre por las mañanas.</em> → ahora …', correct: ['Mi hermano está corriendo ahora.', 'Mi hermano está corriendo ahora'] },
        { id: 'q5', prompt: '<em>Comemos paella los domingos.</em> → ahora …',      correct: ['Estamos comiendo paella ahora.', 'Estamos comiendo paella ahora'] },
      ],
    },

    {
      id: '57.11',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Послушайте и запишите целиком.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Hago gimnasia todas las mañanas.',           correct: ['Hago gimnasia todas las mañanas.', 'Hago gimnasia todas las mañanas'] },
        { id: 'q2', prompt: '', audio: 'Estoy haciendo gimnasia ahora.',              correct: ['Estoy haciendo gimnasia ahora.', 'Estoy haciendo gimnasia ahora'] },
        { id: 'q3', prompt: '', audio: 'Vamos a la playa todos los domingos.',        correct: ['Vamos a la playa todos los domingos.', 'Vamos a la playa todos los domingos'] },
        { id: 'q4', prompt: '', audio: 'Esta semana estoy trabajando desde casa.',    correct: ['Esta semana estoy trabajando desde casa.', 'Esta semana estoy trabajando desde casa'] },
        { id: 'q5', prompt: '', audio: 'No te oigo, hay mucho ruido.',                 correct: ['No te oigo, hay mucho ruido.', 'No te oigo, hay mucho ruido'] },
      ],
    },

    {
      id: '57.12',
      title: 'Какое правило сработало',
      type: 'choice',
      instructions: 'Какое правило объясняет употребление формы?',
      questions: [
        { id: 'q1', prompt: '<em>Olga toca la guitarra en un grupo.</em>', options: ['Привычка / общий факт', 'Действие сейчас', 'Глагол не идёт с герундием'], correct: 'Привычка / общий факт' },
        { id: 'q2', prompt: '<em>Estoy tocando una canción mexicana.</em>', options: ['Привычка / общий факт', 'Действие сейчас', 'Глагол не идёт с герундием'], correct: 'Действие сейчас' },
        { id: 'q3', prompt: '<em>Tengo tres hermanos.</em>', options: ['Привычка / общий факт', 'Действие сейчас', 'Глагол не идёт с герундием'], correct: 'Глагол не идёт с герундием' },
        { id: 'q4', prompt: '<em>Vengo de la oficina.</em>', options: ['Привычка / общий факт', 'Действие сейчас', 'Глагол не идёт с герундием'], correct: 'Глагол не идёт с герундием' },
        { id: 'q5', prompt: '<em>Este mes estamos viviendo en Lima.</em>', options: ['Привычка / общий факт', 'Временно', 'Глагол не идёт с герундием'], correct: 'Временно' },
      ],
    },
  ],
};
