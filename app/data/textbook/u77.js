// ============================================================
// Unidad 77 — Imperativo de verbos con se
// Lávate. Возвратные глаголы в императиве: позиция местоимения,
// орфографические правила (lavaos, subíos, idos), формы у
// нерегулярных (vístete, acuéstate, ponte, vete, cáete).
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u77 = {
  id: 'u77',
  number: 77,
  title: { es: 'lávate', topic: 'Imperativo de verbos con se' },
  topicRu: 'Императив возвратных глаголов: позиция местоимения и орфографические правки',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Con los verbos pronominales (con <em>se</em>), el pronombre <strong>cambia de sitio</strong> según la forma sea afirmativa o negativa: <strong>se pega al verbo en afirmativo</strong> (<em>lávate</em>) y <strong>va delante en negativo</strong> (<em>no te laves</em>).',
      ru: 'У возвратных глаголов местоимение (<em>me, te, se, nos, os, se</em>) <strong>меняет место</strong>: в утвердительной форме оно <strong>прилипает к глаголу</strong> (<em>lávate</em>), в отрицательной — <strong>стоит перед глаголом</strong> (<em>no te laves</em>).',
      examples: [
        { es: '¡Lávate las manos antes de comer!', ru: 'Помой руки перед едой!' },
        { es: 'No te laves con esa esponja, está sucia.', ru: 'Не мойся этой губкой, она грязная.' },
        { es: 'Quítese el abrigo, por favor.', ru: 'Снимите пальто, пожалуйста.' },
        { es: 'No se preocupe, todo va bien.', ru: 'Не беспокойтесь, всё хорошо.' },
      ],
    },

    {
      type: 'heading',
      text: 'Регулярные возвратные: lavarse, atreverse, subirse',
    },
    {
      type: 'table',
      caption: 'Образец спряжения',
      columns: ['', '−ar (lavarse)', '−er (atreverse)', '−ir (subirse)'],
      colClasses: ['col-pattern', 'col-result', 'col-result', 'col-result'],
      rows: [
        ['<strong>tú</strong> +',          '<em>lávate</em>',     '<em>atrévete</em>',     '<em>súbete</em>'],
        ['<strong>tú</strong> −',          '<em>no te laves</em>', '<em>no te atrevas</em>', '<em>no te subas</em>'],
        ['<strong>usted</strong> +',       '<em>lávese</em>',      '<em>atrévase</em>',      '<em>súbase</em>'],
        ['<strong>usted</strong> −',       '<em>no se lave</em>',  '<em>no se atreva</em>',  '<em>no se suba</em>'],
        ['<strong>vosotros</strong> +',    '<em>lavaos</em>',      '<em>atreveos</em>',      '<em>subíos</em>'],
        ['<strong>vosotros</strong> −',    '<em>no os lavéis</em>', '<em>no os atreváis</em>', '<em>no os subáis</em>'],
        ['<strong>ustedes</strong> +',     '<em>lávense</em>',     '<em>atrévanse</em>',     '<em>súbanse</em>'],
        ['<strong>ustedes</strong> −',     '<em>no se laven</em>', '<em>no se atrevan</em>', '<em>no se suban</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'En la forma <strong>+ vosotros</strong> de un verbo pronominal, la <strong>−d</strong> final del imperativo cae ante <em>os</em>: <em>lavad + os → lavaos</em>, <em>atreved + os → atreveos</em>. En los verbos en <em>-ir</em>, además aparece tilde: <em>subid + os → subíos</em>, <em>vestid + os → vestíos</em>. La excepción es <em>irse</em>: se conserva la <em>d</em> — <em>idos</em>.',
      ru: 'В форме <em>vosotros +</em> возвратных глаголов <strong>конечная −d</strong> обычно <strong>выпадает</strong> перед <em>os</em>: <em>lavad + os → lavaos</em>, <em>atreved + os → atreveos</em>. У глаголов на <em>−ir</em> ещё ставится ударение: <em>subid + os → subíos</em>, <em>vestid + os → vestíos</em>. Единственное исключение — <em>irse</em>: сохраняется <em>d</em>, форма <em>idos</em>.',
    },
    {
      type: 'rule',
      es: 'En las formas afirmativas con el pronombre pegado, hay que <strong>poner tilde</strong> para mantener la sílaba tónica original: <em>lava → lávate, lavarse</em>; <em>baja → bájate</em>; <em>póngase, súbase</em>.',
      ru: 'Когда местоимение прилипает к глаголу, оно добавляет лишний слог — поэтому в форме <strong>обязательно ставится графическое ударение</strong>, чтобы сохранить «правильную» ударную гласную: <em>lava → lávate</em>, <em>baja → bájate</em>, <em>póngase, súbase</em>.',
      examples: [
        { es: 'Levántate, son las ocho.', ru: 'Вставай, восемь утра.' },
        { es: 'Siéntese aquí, por favor.', ru: 'Присядьте здесь, пожалуйста.' },
      ],
    },

    {
      type: 'heading',
      text: 'Возвратные с чередованием в корне',
    },
    {
      type: 'table',
      caption: 'e→ie, o→ue, e→i (тип despertarse / acostarse / vestirse)',
      columns: ['', 'tú +', 'usted +', 'vosotros +', 'ustedes +'],
      colClasses: ['col-pattern', 'col-result', 'col-result', 'col-result', 'col-result'],
      rows: [
        ['<strong>despertarse</strong> (e→ie)', '<em>despiértate</em>', '<em>despiértese</em>', '<em>despertaos</em>', '<em>despiértense</em>'],
        ['<strong>acostarse</strong> (o→ue)',   '<em>acuéstate</em>',   '<em>acuéstese</em>',   '<em>acostaos</em>',   '<em>acuéstense</em>'],
        ['<strong>vestirse</strong> (e→i)',     '<em>vístete</em>',     '<em>vístase</em>',     '<em>vestíos</em>',    '<em>vístanse</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'En la forma de <em>vosotros</em> <strong>no hay diptongación</strong>: <em>despertaos</em>, no «*despiertaos»; <em>acostaos</em>, no «*acuestaos»; <em>vestíos</em>, no «*vístaos». La diptongación o el cambio <em>e→i</em> se mantienen sólo en las formas con sílaba tónica en la raíz.',
      ru: 'В <em>vosotros</em> форме <strong>чередование не происходит</strong>: <em>despertaos</em>, не «*despiertaos»; <em>acostaos</em>, не «*acuestaos»; <em>vestíos</em>, не «*vístaos». Дифтонг и переход <em>e→i</em> появляются только там, где ударный слог попадает на корень.',
    },

    {
      type: 'heading',
      text: 'Полностью неправильные: ponerse, irse, caerse',
    },
    {
      type: 'table',
      caption: 'ponerse / irse / caerse',
      columns: ['', 'tú', 'usted', 'vosotros', 'ustedes'],
      colClasses: ['col-pattern', 'col-result', 'col-result', 'col-result', 'col-result'],
      rows: [
        ['<strong>ponerse</strong> +', '<em>ponte</em>',   '<em>póngase</em>', '<em>poneos</em>',   '<em>pónganse</em>'],
        ['<strong>ponerse</strong> −', '<em>no te pongas</em>', '<em>no se ponga</em>', '<em>no os pongáis</em>', '<em>no se pongan</em>'],
        ['<strong>irse</strong> +',     '<em>vete</em>',    '<em>váyase</em>',  '<em>idos</em>',     '<em>váyanse</em>'],
        ['<strong>irse</strong> −',     '<em>no te vayas</em>', '<em>no se vaya</em>', '<em>no os vayáis</em>', '<em>no se vayan</em>'],
        ['<strong>caerse</strong> +',   '<em>cáete</em>',   '<em>cáigase</em>', '<em>caeos</em>',    '<em>cáiganse</em>'],
        ['<strong>caerse</strong> −',   '<em>no te caigas</em>', '<em>no se caiga</em>', '<em>no os caigáis</em>', '<em>no se caigan</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Los verbos pronominales sirven para indicar que la acción la <strong>recibe el sujeto mismo</strong> o una <strong>parte de su cuerpo / su ropa</strong>: <em>Acuéstate</em> (acción sobre sí mismo), <em>Lávate las manos</em> (parte del cuerpo), <em>Quítese el abrigo</em> (su ropa).',
      ru: 'Возвратные глаголы показывают, что действие направлено на <strong>самого деятеля</strong> или на <strong>часть его тела / одежду</strong>: <em>Acuéstate</em> «ложись» (на себя), <em>Lávate las manos</em> «помой руки» (часть тела), <em>Quítese el abrigo</em> «снимите пальто» (своё пальто).',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '77.1',
      title: 'Tú affirmativo: место местоимения',
      type: 'fill',
      instructions: 'Поставьте глагол в форме <em>tú</em> утвердительного императива с прилипшим местоимением. Образец: <em>lavarse</em> → <em>lávate</em>.',
      questions: [
        { id: 'q1', prompt: '(<em>levantarse</em>) ___, son las ocho.',           correct: 'Levántate' },
        { id: 'q2', prompt: '(<em>peinarse</em>) ___, tienes el pelo alborotado.',  correct: 'Péinate' },
        { id: 'q3', prompt: '(<em>sentarse</em>) ___ aquí, por favor.',              correct: 'Siéntate' },
        { id: 'q4', prompt: '(<em>callarse</em>) ___, los niños duermen.',           correct: 'Cállate' },
        { id: 'q5', prompt: '(<em>ducharse</em>) ___ ya, vamos a cenar.',             correct: 'Dúchate' },
        { id: 'q6', prompt: '(<em>vestirse</em>) ___, llegamos tarde.',                correct: 'Vístete', explanation: '<em>vestir</em> — e→i: <em>vístete</em>.' },
        { id: 'q7', prompt: '(<em>acostarse</em>) ___, es muy tarde.',                  correct: 'Acuéstate' },
        { id: 'q8', prompt: '(<em>ponerse</em>) ___ el abrigo, hace frío.',              correct: 'Ponte' },
        { id: 'q9', prompt: '(<em>irse</em>) ___ ya, es tarde.',                          correct: 'Vete' },
      ],
    },

    {
      id: '77.2',
      title: 'Tú negativo: «no + te + глагол»',
      type: 'fill',
      instructions: 'Перепишите глагол в отрицательной форме <em>tú</em>. Образец: <em>lavarse</em> → <em>no te laves</em>.',
      questions: [
        { id: 'q1', prompt: '(<em>moverse</em>) No ___ ___, voy a hacerte una foto.',     correct: 'te muevas' },
        { id: 'q2', prompt: '(<em>preocuparse</em>) No ___ ___, todo va bien.',             correct: 'te preocupes' },
        { id: 'q3', prompt: '(<em>caerse</em>) No ___ ___ de la escalera, ten cuidado.',     correct: 'te caigas' },
        { id: 'q4', prompt: '(<em>dormirse</em>) No ___ ___ en el sofá, vete a la cama.',     correct: 'te duermas' },
        { id: 'q5', prompt: '(<em>ponerse</em>) No ___ ___ esa corbata, esta es más bonita.',  correct: 'te pongas' },
        { id: 'q6', prompt: '(<em>irse</em>) No ___ ___ todavía, quiero hablar contigo.',       correct: 'te vayas' },
        { id: 'q7', prompt: '(<em>callarse</em>) No ___ ___, ¡habla!',                            correct: 'te calles' },
        { id: 'q8', prompt: '(<em>reírse</em>) No ___ ___ de tu hermano.',                         correct: 'te rías' },
      ],
    },

    {
      id: '77.3',
      title: 'Usted: вежливый возвратный императив',
      type: 'fill',
      instructions: 'Поставьте в форме <em>usted</em> утвердительного императива.',
      questions: [
        { id: 'q1', prompt: '(<em>quitarse</em>) ___ el abrigo, por favor.',              correct: 'Quítese' },
        { id: 'q2', prompt: '(<em>sentarse</em>) ___ aquí, doctor.',                       correct: 'Siéntese' },
        { id: 'q3', prompt: '(<em>tranquilizarse</em>) ___, todo está bien.',               correct: 'Tranquilícese' },
        { id: 'q4', prompt: '(<em>acercarse</em>) ___ a la ventanilla, señora.',             correct: 'Acérquese' },
        { id: 'q5', prompt: '(<em>ponerse</em>) ___ las gafas para leer.',                   correct: 'Póngase' },
        { id: 'q6', prompt: '(<em>levantarse</em>) ___, por favor.',                          correct: 'Levántese' },
        { id: 'q7', prompt: '(<em>callarse</em>) ___ un momento, le ruego.',                   correct: 'Cállese' },
      ],
    },

    {
      id: '77.4',
      title: 'Vosotros +: куда делась −d?',
      type: 'fill',
      instructions: 'Образец: <em>lavarse</em> → <em>lavaos</em>. Помните: <em>−d</em> выпадает (кроме <em>idos</em>); у <em>−ir</em> ставится акцент.',
      questions: [
        { id: 'q1', prompt: '(<em>sentarse</em>, vosotros) ___, niños.',           correct: 'Sentaos' },
        { id: 'q2', prompt: '(<em>callarse</em>, vosotros) ___, por favor.',         correct: 'Callaos' },
        { id: 'q3', prompt: '(<em>ducharse</em>, vosotros) ___ ya.',                  correct: 'Duchaos' },
        { id: 'q4', prompt: '(<em>vestirse</em>, vosotros) ___, llegáis tarde.',       correct: 'Vestíos', explanation: 'У <em>−ir</em> ставится акцент: <em>vestíos</em>.' },
        { id: 'q5', prompt: '(<em>subirse</em>, vosotros) ___ al coche.',                correct: 'Subíos' },
        { id: 'q6', prompt: '(<em>irse</em>, vosotros) ___ a la cama.',                   correct: 'Idos', explanation: 'Единственное исключение: <em>idos</em> сохраняет <em>d</em>.' },
        { id: 'q7', prompt: '(<em>acostarse</em>, vosotros) ___, es tarde.',              correct: 'Acostaos', explanation: 'В <em>vosotros</em> чередования нет: не «*acuestaos», а <em>acostaos</em>.' },
      ],
    },

    {
      id: '77.5',
      title: 'Какая форма правильная?',
      type: 'choice',
      instructions: 'Выберите грамматически верный вариант.',
      questions: [
        { id: 'q1', prompt: '(a un niño) ¡___ las manos antes de comer!',     options: ['Te lavas', 'Lávate', 'Lavarte', 'Te lava'], correct: 'Lávate' },
        { id: 'q2', prompt: '(a un señor mayor) ___, por favor.',              options: ['Sentarse', 'Siéntese', 'Sentate', 'Siéntate'], correct: 'Siéntese' },
        { id: 'q3', prompt: '(a unos niños) No ___ esa corbata, esta es más bonita.', options: ['te pongas', 'os pongáis', 'os pongas', 'pongáis'], correct: 'os pongáis' },
        { id: 'q4', prompt: '(a un amigo) ¡___ ya, es tarde!',                  options: ['Te vas', 'Vete', 'Te ve', 'Vé'], correct: 'Vete' },
        { id: 'q5', prompt: '(a unos niños) ___ a la cama.',                    options: ['Acuéstaos', 'Acostaos', 'Acostaros', 'Os acostáis'], correct: 'Acostaos', explanation: 'В <em>vosotros</em> формe чередования <em>o→ue</em> нет.' },
        { id: 'q6', prompt: '(a un amigo) Ten cuidado, no ___ de la escalera.', options: ['te caes', 'te caigas', 'caigas', 'cáete'], correct: 'te caigas' },
        { id: 'q7', prompt: '(a unos amigos) ___ el cinturón antes de arrancar.', options: ['Pónganse', 'Os ponéis', 'Poneos', 'Pongaos'], correct: 'Poneos' },
        { id: 'q8', prompt: '(a un señor) ___ las gafas para leer.',              options: ['Te pones', 'Ponte', 'Póngase', 'Os ponéis'], correct: 'Póngase' },
      ],
    },

    {
      id: '77.6',
      title: 'Из утвердительной — в отрицательную',
      type: 'fill',
      instructions: 'Перепишите команду в отрицательной форме (для того же лица). Местоимение перед глаголом.',
      questions: [
        { id: 'q1', prompt: '<em>Levántate.</em> →',          correct: ['No te levantes.', 'No te levantes'] },
        { id: 'q2', prompt: '<em>Acuéstate.</em> →',          correct: ['No te acuestes.', 'No te acuestes'] },
        { id: 'q3', prompt: '<em>Vístete.</em> →',             correct: ['No te vistas.', 'No te vistas'] },
        { id: 'q4', prompt: '<em>Ponte el abrigo.</em> →',     correct: ['No te pongas el abrigo.', 'No te pongas el abrigo'] },
        { id: 'q5', prompt: '<em>Vete.</em> →',                 correct: ['No te vayas.', 'No te vayas'] },
        { id: 'q6', prompt: '<em>Cáete.</em> →',                correct: ['No te caigas.', 'No te caigas'] },
        { id: 'q7', prompt: '<em>Quítese el abrigo.</em> (usted) →', correct: ['No se quite el abrigo.', 'No se quite el abrigo'] },
        { id: 'q8', prompt: '<em>Sentaos aquí.</em> (vosotros) →', correct: ['No os sentéis aquí.', 'No os sentéis aquí'] },
      ],
    },

    {
      id: '77.7',
      title: 'Сценки: что бы вы сказали',
      type: 'fill',
      instructions: 'Подставьте указанную форму. Внимание на диакритику.',
      questions: [
        { id: 'q1', prompt: '(a un niño, <em>peinarse</em>) ___. Tienes el pelo alborotado.',         correct: 'Péinate' },
        { id: 'q2', prompt: '(a un amigo, <em>mirarse</em>) ___ al espejo. Tienes mala cara.',          correct: 'Mírate' },
        { id: 'q3', prompt: '(a un niño, <em>irse</em>) ___ a la cama. Es muy tarde.',                   correct: 'Vete' },
        { id: 'q4', prompt: '(a unos desconocidos, <em>no bañarse</em>) No ___ ___ aquí. Es peligroso.', correct: 'se bañen', explanation: 'Отрицательная <em>ustedes</em>: <em>se</em> + основа субхунтива.' },
        { id: 'q5', prompt: '(a un amigo, <em>afeitarse</em>) ___. Estás mejor sin barba.',                correct: 'Aféitate' },
        { id: 'q6', prompt: '(a un señor mayor, <em>no preocuparse</em>) No ___ ___, yo le ayudo.',         correct: 'se preocupe' },
        { id: 'q7', prompt: '(a un niño, <em>callarse</em>) ___. ¡Estoy hablando!',                          correct: 'Cállate' },
        { id: 'q8', prompt: '(a unos alumnos, <em>no moverse</em>) No ___ ___, voy a hacer una foto.',       correct: 'os mováis' },
      ],
    },

    {
      id: '77.8',
      title: 'Сопоставьте инфинитив и форму tú+',
      type: 'match',
      instructions: 'Подберите для каждого возвратного инфинитива форму утвердительного <em>tú</em>.',
      pool: ['lávate', 'siéntate', 'vístete', 'acuéstate', 'ponte', 'vete', 'cáete', 'cállate', 'levántate'],
      questions: [
        { id: 'q1', prompt: '<em>lavarse</em>',     correct: 'lávate' },
        { id: 'q2', prompt: '<em>sentarse</em>',    correct: 'siéntate' },
        { id: 'q3', prompt: '<em>vestirse</em>',    correct: 'vístete' },
        { id: 'q4', prompt: '<em>acostarse</em>',   correct: 'acuéstate' },
        { id: 'q5', prompt: '<em>ponerse</em>',      correct: 'ponte' },
        { id: 'q6', prompt: '<em>irse</em>',         correct: 'vete' },
        { id: 'q7', prompt: '<em>caerse</em>',       correct: 'cáete' },
        { id: 'q8', prompt: '<em>callarse</em>',     correct: 'cállate' },
        { id: 'q9', prompt: '<em>levantarse</em>',   correct: 'levántate' },
      ],
    },

    {
      id: '77.9',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду один вариант с ошибкой — выберите его.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['lávate', 'no te laves', 'no lávate', 'lávese'], correct: 'no lávate', explanation: 'В отрицательной форме местоимение стоит <strong>перед</strong> глаголом, а форма — субхунтив: <em>no te laves</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['sentaos', 'sentáos', 'no os sentéis', 'siéntense'], correct: 'sentáos', explanation: 'В форме <em>sentaos</em> акцент не нужен (ударение само на «a»).' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['vístete', 'vístanse', 'vestíos', 'vístaos'], correct: 'vístaos', explanation: 'В <em>vosotros +</em> чередования <em>e→i</em> нет: правильно <em>vestíos</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['idos', 'iros', 'no os vayáis', 'vete'], correct: 'iros', explanation: 'Положительная <em>vosotros</em> от <em>irse</em> — единственная сохраняющая <em>d</em>: <em>idos</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['póngase', 'no se ponga', 'pongaos', 'poneos'], correct: 'pongaos', explanation: 'У <em>ponerse</em> в <em>vosotros +</em> — <em>poneos</em> (без «g»).' },
      ],
    },

    {
      id: '77.10',
      title: 'Возвратные нерегулярные: vestirse, despertarse, acostarse',
      type: 'fill',
      instructions: 'Поставьте требуемую форму. Образец: (<em>despertarse</em>, tú) → <em>despiértate</em>.',
      questions: [
        { id: 'q1', prompt: '(<em>despertarse</em>, tú) ___, son las siete.',                correct: 'Despiértate' },
        { id: 'q2', prompt: '(<em>despertarse</em>, ustedes) ___, son las diez.',              correct: 'Despiértense' },
        { id: 'q3', prompt: '(<em>vestirse</em>, usted) ___ y salgamos ya.',                    correct: 'Vístase' },
        { id: 'q4', prompt: '(<em>acostarse</em>, vosotros) ___ pronto, mañana hay clase.',      correct: 'Acostaos' },
        { id: 'q5', prompt: '(<em>divertirse</em>, vosotros) ___, niños — ¡es vuestro día!',      correct: 'Divertíos', explanation: '<em>−ir</em> + <em>os</em> → акцент: <em>divertíos</em>.' },
        { id: 'q6', prompt: '(<em>dormirse</em>, tú −) No ___ ___ en el sofá.',                    correct: 'te duermas' },
      ],
    },

    {
      id: '77.11',
      title: 'Какие формы корректны',
      type: 'multi',
      instructions: 'Отметьте все формы, которые являются <strong>корректным</strong> императивом возвратного глагола.',
      questions: [
        {
          id: 'q1',
          prompt: 'Отметьте корректные формы:',
          options: ['lávate', 'lavate', 'lávese', 'no se lave', 'no te lavas', 'sentaos', 'sentaros', 'idos', 'iros', 'cállate', 'cállense', 'no os pongáis', 'no se ponga'],
          correct: ['lávate', 'lávese', 'no se lave', 'sentaos', 'idos', 'cállate', 'cállense', 'no os pongáis', 'no se ponga'],
          explanation: '<em>lavate</em> без акцента — ошибка; <em>no te lavas</em> — индикатив, не императив; <em>sentaros / iros</em> — разговорные, но нормативно неверные.',
        },
      ],
    },

    {
      id: '77.12',
      title: 'Аудио-диктант',
      type: 'fill',
      instructions: 'Запишите услышанное полностью и с диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Lávate las manos antes de comer.',     correct: ['Lávate las manos antes de comer.', 'Lávate las manos antes de comer'] },
        { id: 'q2', prompt: '', audio: 'No te preocupes, todo va bien.',        correct: ['No te preocupes, todo va bien.', 'No te preocupes, todo va bien'] },
        { id: 'q3', prompt: '', audio: 'Quítese el abrigo, por favor.',          correct: ['Quítese el abrigo, por favor.', 'Quítese el abrigo, por favor'] },
        { id: 'q4', prompt: '', audio: 'Sentaos aquí, niños.',                    correct: ['Sentaos aquí, niños.', 'Sentaos aquí, niños'] },
        { id: 'q5', prompt: '', audio: 'No os pongáis nerviosos.',                correct: ['No os pongáis nerviosos.', 'No os pongáis nerviosos'] },
        { id: 'q6', prompt: '', audio: 'Vete a la cama, es tarde.',                correct: ['Vete a la cama, es tarde.', 'Vete a la cama, es tarde'] },
        { id: 'q7', prompt: '', audio: 'Acuéstense temprano hoy.',                 correct: ['Acuéstense temprano hoy.', 'Acuéstense temprano hoy'] },
      ],
    },
  ],
};
