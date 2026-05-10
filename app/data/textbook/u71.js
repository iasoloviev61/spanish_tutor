// ============================================================
// Unidad 71 — Condicional simple: verbos regulares
// trabajaría, comería, viviría — что бы я делал.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u71 = {
  id: 'u71',
  number: 71,
  title: { es: 'trabajaría, comería, viviría', topic: 'Condicional simple: verbos regulares' },
  topicRu: 'Условное наклонение: правильные глаголы',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'El <strong>condicional simple</strong> expresa lo que <em>haríamos</em> en una situación hipotética o lo que sería deseable. Se forma añadiendo al <strong>infinitivo entero</strong> las terminaciones <em>−ía, −ías, −ía, −íamos, −íais, −ían</em> — las mismas para las tres conjugaciones.',
      ru: '<strong>Condicional simple</strong> (условное наклонение) — это «я <em>сделал бы</em>». Образуется проще, чем futuro: к <strong>полному инфинитиву</strong> прибавляются окончания <em>−ía, −ías, −ía, −íamos, −íais, −ían</em>. Окончания <strong>одинаковы</strong> для глаголов на <em>−ar, −er, −ir</em>. Ударение всегда на <em>í</em> — поэтому пишется с тильдой.',
      examples: [
        { es: 'Yo <strong>trabajaría</strong> menos.', ru: 'Я бы работал меньше.' },
        { es: '<strong>Comeríamos</strong> mejor con menos sal.', ru: 'Мы ели бы лучше с меньшим количеством соли.' },
        { es: '<strong>Viviría</strong> en el campo.', ru: 'Я бы жил в деревне.' },
      ],
    },
    {
      type: 'heading',
      text: 'Спряжение',
    },
    {
      type: 'table',
      caption: 'Condicional simple — правильные глаголы',
      columns: ['Pronombre', '−ar (trabajar)', '−er (comer)', '−ir (vivir)'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex', 'col-ex'],
      rows: [
        ['(yo)',            'trabajar<strong>ía</strong>',     'comer<strong>ía</strong>',     'vivir<strong>ía</strong>'],
        ['(tú)',            'trabajar<strong>ías</strong>',    'comer<strong>ías</strong>',    'vivir<strong>ías</strong>'],
        ['(usted, él, ella)','trabajar<strong>ía</strong>',     'comer<strong>ía</strong>',     'vivir<strong>ía</strong>'],
        ['(nosotros, −as)', 'trabajar<strong>íamos</strong>',  'comer<strong>íamos</strong>',  'vivir<strong>íamos</strong>'],
        ['(vosotros, −as)', 'trabajar<strong>íais</strong>',   'comer<strong>íais</strong>',   'vivir<strong>íais</strong>'],
        ['(ustedes, ellos, −as)','trabajar<strong>ían</strong>','comer<strong>ían</strong>',   'vivir<strong>ían</strong>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Ojo: las formas de <em>yo</em> y de <em>él / ella / usted</em> son <strong>iguales</strong> — <em>trabajaría</em> sirve para ambas. El sujeto se aclara por el contexto o se nombra explícitamente.',
      ru: 'Формы <em>yo</em> и <em>él / ella / usted</em> совпадают (<em>trabajaría</em>). Подлежащее обычно ясно из контекста или называется явно: <em>yo trabajaría</em>, <em>ella trabajaría</em>.',
    },
    {
      type: 'heading',
      text: 'Когда используется',
    },
    {
      type: 'rule',
      es: '<strong>1) Posibilidad teórica</strong> — algo que sería verdad en una situación distinta, pero que ahora no es así. La realidad y la hipótesis se contrastan.',
      ru: '<strong>1) Теоретическая возможность</strong> — «было бы лучше / другой / иначе», если бы что-то было по-другому. Часто рядом стоит <em>pero</em> с реальной ситуацией.',
      examples: [
        { es: 'Esta tarta <strong>estaría</strong> mejor con nata. (Pero no tiene.)', ru: 'Этот торт был бы лучше со сливками. (Но их нет.)' },
        { es: '<strong>Trabajaría</strong> más a gusto en casa. (Pero trabajo en la oficina.)', ru: 'Я бы работал с удовольствием дома. (Но работаю в офисе.)' },
      ],
    },
    {
      type: 'rule',
      es: '<strong>2) Deseos</strong> con verbos como <em>gustar, encantar, preferir</em> — más suave y educado que el presente.',
      ru: '<strong>2) Желания</strong> с глаголами <em>gustar, encantar, preferir</em>. <em>Me gusta</em> = «мне нравится» (факт). <em>Me gustaría</em> = «мне хотелось бы» (мечта, пожелание) — мягче и вежливее.',
      examples: [
        { es: '¿Te <strong>gustaría</strong> ser escritora?', ru: 'Тебе хотелось бы стать писательницей?' },
        { es: 'Me <strong>encantaría</strong> visitar el Amazonas.', ru: 'Мне очень бы хотелось побывать на Амазонке.' },
        { es: '<strong>Preferiríamos</strong> ir en tren.', ru: 'Мы бы предпочли поехать на поезде.' },
      ],
    },
    {
      type: 'table',
      caption: 'gusta vs gustaría',
      columns: ['Me gustaría ser actor.', 'Me gusta ser actor.'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>Хотел бы быть актёром (но не являюсь — это мечта).</em>', '<em>Мне нравится быть актёром (я уже актёр).</em>'],
      ],
    },
    {
      type: 'rule',
      es: '<strong>3) Consejos</strong> — para sugerir lo que conviene hacer, sin imponer. A menudo con <em>yo que tú / yo en tu lugar / deberías</em>.',
      ru: '<strong>3) Советы</strong> — мягкая рекомендация, без давления. Часто с оборотами <em>yo que tú</em> («на твоём месте я бы…»), <em>yo en tu lugar</em>, <em>deberías</em> («тебе следовало бы»).',
      examples: [
        { es: '<strong>Deberías</strong> hacer un curso de informática.', ru: 'Тебе стоило бы пройти курс информатики.' },
        { es: 'Yo que tú, <strong>comería</strong> menos.', ru: 'На твоём месте я бы ел меньше.' },
        { es: 'Yo no <strong>aceptaría</strong> la invitación.', ru: 'Я бы не принял приглашение.' },
      ],
    },
    {
      type: 'atencion',
      es: 'En el condicional, el acento gráfico sobre la <strong>í</strong> es obligatorio en <em>todas</em> las personas: <em>−ía, −ías, −ía, −íamos, −íais, −ían</em>. Sin tilde, el sentido cambia o la palabra simplemente no existe.',
      ru: 'Тильда над <strong>í</strong> обязательна во <em>всех</em> формах: <em>−ía, −ías, −ía, −íamos, −íais, −ían</em>. Без тильды слово либо не существует, либо означает другое (<em>vivia</em>, <em>amaria</em> — ошибки).',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '71.1',
      title: 'Спряжение трёх образцов',
      type: 'fill',
      instructions: 'Поставьте глагол в нужное лицо condicional simple. Не забудьте тильду.',
      questions: [
        { id: 'q1',  prompt: '(yo, trabajar) ___',         correct: 'trabajaría' },
        { id: 'q2',  prompt: '(tú, comer) ___',            correct: 'comerías' },
        { id: 'q3',  prompt: '(ella, vivir) ___',          correct: 'viviría' },
        { id: 'q4',  prompt: '(nosotros, hablar) ___',      correct: 'hablaríamos' },
        { id: 'q5',  prompt: '(vosotros, leer) ___',        correct: 'leeríais' },
        { id: 'q6',  prompt: '(ustedes, escribir) ___',     correct: 'escribirían' },
        { id: 'q7',  prompt: '(yo, beber) ___',             correct: 'bebería' },
        { id: 'q8',  prompt: '(tú, abrir) ___',             correct: 'abrirías' },
        { id: 'q9',  prompt: '(él, estudiar) ___',          correct: 'estudiaría' },
        { id: 'q10', prompt: '(nosotras, aprender) ___',    correct: 'aprenderíamos' },
      ],
    },

    {
      id: '71.2',
      title: '«Bien aquí, pero mejor allá» — теоретическая возможность',
      type: 'fill',
      instructions: 'Допишите вторую часть в condicional simple. Образец: <em>Esta tarta está buena, pero (estar) ___ mejor con nata</em> → <em>estaría</em>.',
      questions: [
        { id: 'q1', prompt: 'Aquí estamos bien, pero (estar) ___ mejor en la playa.',         correct: 'estaríamos' },
        { id: 'q2', prompt: 'Soy feliz, pero (ser) ___ más feliz con un buen empleo.',         correct: 'sería' },
        { id: 'q3', prompt: 'Tocas bien el piano, pero (tocar) ___ mejor con más práctica.',   correct: 'tocarías' },
        { id: 'q4', prompt: 'Vivimos bien aquí, pero (vivir) ___ mejor en el campo.',           correct: 'viviríamos' },
        { id: 'q5', prompt: 'Susi trabaja muy bien, pero (trabajar) ___ mejor con más sueldo.', correct: 'trabajaría' },
        { id: 'q6', prompt: 'Me siento bien, pero (sentirse) me ___ mejor con una buena comida.', correct: 'sentiría', explanation: 'Местоимение <em>me</em> уже стоит впереди — нужна только форма <em>sentiría</em>.' },
        { id: 'q7', prompt: 'Tarik habla español bastante bien, pero (hablar) ___ mejor con un buen profesor.', correct: 'hablaría' },
        { id: 'q8', prompt: 'Comes mucha sal: (comer) ___ mejor con menos sal.',                 correct: 'comerías' },
      ],
    },

    {
      id: '71.3',
      title: 'Желания: gustar / encantar / preferir',
      type: 'fill',
      instructions: 'Поставьте глагол в condicional. Помните: вначале местоимение <em>me / te / le / nos / os / les</em>, потом форма глагола.',
      questions: [
        { id: 'q1', prompt: '(a nosotros, gustar) Nos ___ aprender muchos idiomas.',     correct: 'gustaría' },
        { id: 'q2', prompt: '(a Abdou, encantar) Le ___ hablar bien español.',            correct: 'encantaría' },
        { id: 'q3', prompt: '(a mí, no, gustar) No me ___ vivir en una gran ciudad.',     correct: 'gustaría' },
        { id: 'q4', prompt: '(a ustedes, gustar) ¿Les ___ hacer un viaje por Andalucía?', correct: 'gustaría' },
        { id: 'q5', prompt: '(yo, preferir) Me gusta este hotel, pero ___ alojarme en uno más céntrico.', correct: 'preferiría' },
        { id: 'q6', prompt: '(a mis padres, encantar) Les ___ visitar las ruinas mayas.',  correct: 'encantaría' },
        { id: 'q7', prompt: '(nosotros, preferir) Nos encanta comer en casa, pero hoy ___ comer fuera.', correct: 'preferiríamos' },
      ],
    },

    {
      id: '71.4',
      title: '<em>gusta</em> или <em>gustaría</em>?',
      type: 'choice',
      instructions: 'Выберите: <em>gusta</em>/<em>encanta</em> (факт настоящего) или <em>gustaría</em>/<em>encantaría</em> (мечта, пожелание).',
      questions: [
        { id: 'q1', prompt: 'Me ___ visitar Argentina, pero ahora no tengo vacaciones.',
          options: ['gusta', 'gustaría'], correct: 'gustaría',
          explanation: 'Сейчас не еду — мечта на будущее.' },
        { id: 'q2', prompt: 'Nos ___ bailar. Lo pasamos fenomenal.',
          options: ['encanta', 'encantaría'], correct: 'encanta',
          explanation: 'Мы танцуем регулярно — факт.' },
        { id: 'q3', prompt: '___ trabajar, pero no encuentro empleo.',
          options: ['Prefiero', 'Preferiría'], correct: 'Preferiría',
          explanation: 'Гипотеза — работы пока нет.' },
        { id: 'q4', prompt: '¿Qué os ___ hacer hoy? Podemos hacer lo que queráis.',
          options: ['gusta', 'gustaría'], correct: 'gustaría' },
        { id: 'q5', prompt: 'A Paloma le ___ viajar. Ha recorrido medio mundo.',
          options: ['encanta', 'encantaría'], correct: 'encanta',
          explanation: 'Уже путешествует — факт.' },
        { id: 'q6', prompt: 'Los sábados me ___ salir con Pepa y Pablo. Lo pasamos muy bien.',
          options: ['gusta', 'gustaría'], correct: 'gusta' },
        { id: 'q7', prompt: '___ vivir con gente. Cuando vivía sola era muy aburrido.',
          options: ['Prefiero', 'Preferiría'], correct: 'Prefiero',
          explanation: 'Высказана общая позиция «вообще предпочитаю».' },
        { id: 'q8', prompt: 'Me ___ saber pintar bien. Es el sueño de mi vida.',
          options: ['encanta', 'encantaría'], correct: 'encantaría' },
      ],
    },

    {
      id: '71.5',
      title: 'Советы с <em>yo que tú / deberías</em>',
      type: 'fill',
      instructions: 'Запас глаголов: <em>buscar, deber, estudiar, hablar, ir, pedir, ser</em>. Поставьте подходящий в condicional.',
      questions: [
        { id: 'q1', prompt: '___ madrugar más. Sois un poco perezosos.', correct: 'Deberíais' },
        { id: 'q2', prompt: 'Sería mejor que ___ a Marta y se lo explicaras todo.', correct: 'hablaras', explanation: '<em>Sería mejor que</em> требует прошлого сослагательного — здесь подсказка про условное в придаточном; основная форма — condicional <em>sería</em>.' },
        { id: 'q3', prompt: 'Yo que tú, ___ Bellas Artes.', correct: 'estudiaría' },
        { id: 'q4', prompt: 'Yo que ustedes, ___ otro empleo. Esta empresa va a cerrar.', correct: 'buscaría' },
        { id: 'q5', prompt: 'Perdonen, pero creo que ___ pedir disculpas a Irene por llegar tan tarde.', correct: 'deberían' },
        { id: 'q6', prompt: 'Yo que tú, ___ al médico. Tienes mala cara.', correct: 'iría' },
        { id: 'q7', prompt: 'Yo ___ con el director y le ___ un aumento.', correct: ['hablaría / pediría'] },
      ],
    },

    {
      id: '71.6',
      title: 'Перепишите как мягкий совет',
      type: 'fill',
      instructions: 'Замените <em>tienes que / tenéis que</em> на <em>deberías / deberíais</em>. Образец: <em>Tienes que estudiar más</em> → <em>Deberías estudiar más</em>.',
      questions: [
        { id: 'q1', prompt: 'Tienes que descansar más. →',     correct: ['Deberías descansar más.', 'Deberías descansar más'] },
        { id: 'q2', prompt: 'Tenéis que llamar a vuestros padres. →', correct: ['Deberíais llamar a vuestros padres.', 'Deberíais llamar a vuestros padres'] },
        { id: 'q3', prompt: 'Tienes que comer menos dulce. →',  correct: ['Deberías comer menos dulce.', 'Deberías comer menos dulce'] },
        { id: 'q4', prompt: 'Tenéis que beber más agua. →',     correct: ['Deberíais beber más agua.', 'Deberíais beber más agua'] },
        { id: 'q5', prompt: 'Tienes que hablar con el profesor. →', correct: ['Deberías hablar con el profesor.', 'Deberías hablar con el profesor'] },
      ],
    },

    {
      id: '71.7',
      title: 'Сопоставьте оттенок и форму',
      type: 'match',
      instructions: 'Какой оттенок передаёт каждый из вариантов?',
      pool: [
        'факт настоящего',
        'мечта, пожелание',
        'теоретическая возможность',
        'мягкий совет',
      ],
      questions: [
        { id: 'q1', prompt: '<em>Me gusta el chocolate.</em>',           correct: 'факт настоящего' },
        { id: 'q2', prompt: '<em>Me gustaría viajar a Cuba.</em>',       correct: 'мечта, пожелание' },
        { id: 'q3', prompt: '<em>Yo que tú, comería menos.</em>',        correct: 'мягкий совет' },
        { id: 'q4', prompt: '<em>Esta sopa estaría mejor con sal.</em>', correct: 'теоретическая возможность' },
        { id: 'q5', prompt: '<em>Deberías estudiar más.</em>',           correct: 'мягкий совет' },
        { id: 'q6', prompt: '<em>Vivo en Madrid.</em>',                  correct: 'факт настоящего' },
      ],
    },

    {
      id: '71.8',
      title: 'Multi: где <em>condicional</em> уместен?',
      type: 'multi',
      instructions: 'Отметьте <strong>все грамматически и стилистически правильные</strong> предложения с условным.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы построены правильно?',
          options: [
            'Me gustaría aprender ruso.',
            'Yo que tú, hablaría con él.',
            'Yo que tú, hablo con él.',
            'Esta sopa estaria mejor con más sal.',
            'Esta sopa estaría mejor con más sal.',
            'Deberías descansar.',
            '¿Te gustaría ir al cine?',
            'Vivirías en el campo? (без знака ¿)',
          ],
          correct: [
            'Me gustaría aprender ruso.',
            'Yo que tú, hablaría con él.',
            'Esta sopa estaría mejor con más sal.',
            'Deberías descansar.',
            '¿Te gustaría ir al cine?',
          ],
          explanation: 'Без тильды (<em>estaria</em>) и без открывающего <em>¿</em> — ошибки. <em>Yo que tú, hablo</em> = неверная конструкция (после <em>yo que tú</em> идёт condicional).',
        },
      ],
    },

    {
      id: '71.9',
      title: 'Образуйте инфинитив',
      type: 'fill',
      instructions: 'От условной формы к инфинитиву. Образец: <em>vivirías</em> → <em>vivir</em>.',
      questions: [
        { id: 'q1', prompt: '<em>trabajaríais</em> →',  correct: 'trabajar' },
        { id: 'q2', prompt: '<em>comeríamos</em> →',     correct: 'comer' },
        { id: 'q3', prompt: '<em>vivirían</em> →',       correct: 'vivir' },
        { id: 'q4', prompt: '<em>estudiaría</em> →',     correct: 'estudiar' },
        { id: 'q5', prompt: '<em>aprenderías</em> →',    correct: 'aprender' },
        { id: 'q6', prompt: '<em>escribirían</em> →',    correct: 'escribir' },
        { id: 'q7', prompt: '<em>hablaríamos</em> →',     correct: 'hablar' },
        { id: 'q8', prompt: '<em>leeríais</em> →',        correct: 'leer' },
      ],
    },

    {
      id: '71.10',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['trabajaría', 'comería', 'viviria', 'estaríais'], correct: 'viviria',
          explanation: 'Без тильды над <em>í</em> — ошибка: правильно <em>viviría</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['hablaríamos', 'aprenderíamos', 'escribiríamos', 'comermos'], correct: 'comermos',
          explanation: 'Несуществующая форма; правильно <em>comeríamos</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Yo que tú estudiaría más.', 'Yo que tú estudiarías más.', 'Yo que tú, estudiaría más.', 'Yo, en tu lugar, estudiaría más.'], correct: 'Yo que tú estudiarías más.',
          explanation: 'После <em>yo que tú</em> ставится форма <em>yo</em>: <em>estudiaría</em>, не <em>estudiarías</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Me gustaría ir.', 'Te gustarías ir.', 'Le gustaría ir.', 'Nos gustaría ir.'], correct: 'Te gustarías ir.',
          explanation: '<em>gustar</em> согласуется с тем, что нравится: «пойти» — единственное → <em>gustaría</em>.' },
      ],
    },

    {
      id: '71.11',
      title: 'Переведите на испанский',
      type: 'fill',
      instructions: 'Используйте condicional simple от правильных глаголов.',
      questions: [
        { id: 'q1', prompt: 'Я бы жил в деревне.',           correct: ['Viviría en el campo.', 'Viviría en el campo', 'Yo viviría en el campo.', 'Yo viviría en el campo'] },
        { id: 'q2', prompt: 'Мы бы говорили лучше с практикой.', correct: ['Hablaríamos mejor con práctica.', 'Hablaríamos mejor con práctica'] },
        { id: 'q3', prompt: 'Тебе хотелось бы поехать в Испанию?', correct: ['¿Te gustaría ir a España?', '¿Te gustaría viajar a España?'] },
        { id: 'q4', prompt: 'На твоём месте я бы изучал испанский.', correct: ['Yo que tú, estudiaría español.', 'Yo que tú estudiaría español.', 'Yo que tú, estudiaría español', 'Yo que tú estudiaría español'] },
        { id: 'q5', prompt: 'Тебе следовало бы есть меньше.',  correct: ['Deberías comer menos.', 'Deberías comer menos'] },
      ],
    },

    {
      id: '71.12',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите фразу полностью, с тильдами и знаками препинания.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Me gustaría visitar el Amazonas.',
          correct: ['Me gustaría visitar el Amazonas.', 'Me gustaría visitar el Amazonas'] },
        { id: 'q2', prompt: '', audio: 'Yo que tú, comería menos.',
          correct: ['Yo que tú, comería menos.', 'Yo que tú comería menos.', 'Yo que tú, comería menos', 'Yo que tú comería menos'] },
        { id: 'q3', prompt: '', audio: 'Trabajaríamos mejor en casa.',
          correct: ['Trabajaríamos mejor en casa.', 'Trabajaríamos mejor en casa'] },
        { id: 'q4', prompt: '', audio: 'Deberías hablar con el director.',
          correct: ['Deberías hablar con el director.', 'Deberías hablar con el director'] },
        { id: 'q5', prompt: '', audio: 'Esta tarta estaría mejor con nata.',
          correct: ['Esta tarta estaría mejor con nata.', 'Esta tarta estaría mejor con nata'] },
        { id: 'q6', prompt: '', audio: 'Viviría en una casa cerca del mar.',
          correct: ['Viviría en una casa cerca del mar.', 'Viviría en una casa cerca del mar'] },
      ],
    },
  ],
};
