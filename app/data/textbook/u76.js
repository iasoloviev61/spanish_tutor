// ============================================================
// Unidad 76 — Imperativo: verbos irregulares (2)
// Pon la mesa. Полностью неправильные императивы у decir, hacer,
// poner, salir, tener, venir, ser, ir, traer и группа на -ecer/
// -ocer/-ucir (тип conducir → conduzca).
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u76 = {
  id: 'u76',
  number: 76,
  title: { es: 'Pon la mesa', topic: 'Imperativo: verbos irregulares (2)' },
  topicRu: 'Полностью неправильный императив (decir, hacer, poner, salir, tener, venir, ser, ir, traer; глаголы на -cer/-cir)',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Algunos verbos tienen <strong>imperativo totalmente irregular</strong>: la forma de <em>tú</em> afirmativa es muy corta (a menudo monosilábica), y la negativa se construye con la <strong>raíz del subjuntivo</strong> en todas las personas.',
      ru: 'У группы важных глаголов императив полностью нерегулярный. <strong>Положительная форма «tú»</strong> короткая (часто из одного слога), а в <strong>отрицательной</strong> и во всех формах с <em>usted / vosotros / ustedes</em> работает <strong>основа презенса субхунтива</strong>: <em>diga, haga, ponga, salga, tenga, venga, sea, vaya, traiga…</em>',
      examples: [
        { es: 'Pon la mesa, por favor.', ru: 'Накрой на стол, пожалуйста.' },
        { es: 'No pongas los pies en el sofá.', ru: 'Не клади ноги на диван.' },
        { es: 'Sal de aquí ahora mismo.', ru: 'Выйди отсюда сейчас же.' },
        { es: 'Sé amable con los abuelos.', ru: 'Будь любезен с бабушкой и дедушкой.' },
      ],
    },

    {
      type: 'heading',
      text: 'decir, hacer, poner — формы',
    },
    {
      type: 'table',
      caption: 'decir / hacer / poner',
      columns: ['', 'tú', 'usted', 'vosotros', 'ustedes'],
      colClasses: ['col-pattern', 'col-result', 'col-result', 'col-result', 'col-result'],
      rows: [
        ['<strong>decir</strong> +', '<em>di</em>', '<em>diga</em>', '<em>decid</em>', '<em>digan</em>'],
        ['<strong>decir</strong> −', '<em>no digas</em>', '<em>no diga</em>', '<em>no digáis</em>', '<em>no digan</em>'],
        ['<strong>hacer</strong> +', '<em>haz</em>', '<em>haga</em>', '<em>haced</em>', '<em>hagan</em>'],
        ['<strong>hacer</strong> −', '<em>no hagas</em>', '<em>no haga</em>', '<em>no hagáis</em>', '<em>no hagan</em>'],
        ['<strong>poner</strong> +', '<em>pon</em>', '<em>ponga</em>', '<em>poned</em>', '<em>pongan</em>'],
        ['<strong>poner</strong> −', '<em>no pongas</em>', '<em>no ponga</em>', '<em>no pongáis</em>', '<em>no pongan</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Igual que <em>poner</em> se conjuga <em>suponer</em> (<em>supón / no supongas</em>), <em>componer</em>, <em>proponer</em>.',
      ru: 'Все производные от <em>poner</em> повторяют те же формы: <em>supón, compón, propón</em> и т. д.',
    },

    {
      type: 'heading',
      text: 'salir, tener, venir — формы',
    },
    {
      type: 'table',
      caption: 'salir / tener / venir',
      columns: ['', 'tú', 'usted', 'vosotros', 'ustedes'],
      colClasses: ['col-pattern', 'col-result', 'col-result', 'col-result', 'col-result'],
      rows: [
        ['<strong>salir</strong> +', '<em>sal</em>', '<em>salga</em>', '<em>salid</em>', '<em>salgan</em>'],
        ['<strong>salir</strong> −', '<em>no salgas</em>', '<em>no salga</em>', '<em>no salgáis</em>', '<em>no salgan</em>'],
        ['<strong>tener</strong> +', '<em>ten</em>', '<em>tenga</em>', '<em>tened</em>', '<em>tengan</em>'],
        ['<strong>tener</strong> −', '<em>no tengas</em>', '<em>no tenga</em>', '<em>no tengáis</em>', '<em>no tengan</em>'],
        ['<strong>venir</strong> +', '<em>ven</em>', '<em>venga</em>', '<em>venid</em>', '<em>vengan</em>'],
        ['<strong>venir</strong> −', '<em>no vengas</em>', '<em>no venga</em>', '<em>no vengáis</em>', '<em>no vengan</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Igual que <em>tener</em>: <em>mantener</em> (<em>mantén / no mantengas</em>), <em>contener</em>, <em>obtener</em>, <em>retener</em>.',
      ru: 'Производные от <em>tener</em> образуют императив так же: <em>mantén, contén, obtén</em>.',
    },

    {
      type: 'heading',
      text: 'ser, ir, traer — формы',
    },
    {
      type: 'table',
      caption: 'ser / ir / traer',
      columns: ['', 'tú', 'usted', 'vosotros', 'ustedes'],
      colClasses: ['col-pattern', 'col-result', 'col-result', 'col-result', 'col-result'],
      rows: [
        ['<strong>ser</strong> +', '<em>sé</em>', '<em>sea</em>', '<em>sed</em>', '<em>sean</em>'],
        ['<strong>ser</strong> −', '<em>no seas</em>', '<em>no sea</em>', '<em>no seáis</em>', '<em>no sean</em>'],
        ['<strong>ir</strong> +', '<em>ve</em>', '<em>vaya</em>', '<em>id</em>', '<em>vayan</em>'],
        ['<strong>ir</strong> −', '<em>no vayas</em>', '<em>no vaya</em>', '<em>no vayáis</em>', '<em>no vayan</em>'],
        ['<strong>traer</strong> +', '<em>trae</em>', '<em>traiga</em>', '<em>traed</em>', '<em>traigan</em>'],
        ['<strong>traer</strong> −', '<em>no traigas</em>', '<em>no traiga</em>', '<em>no traigáis</em>', '<em>no traigan</em>'],
      ],
    },
    {
      type: 'atencion',
      es: '<em>sé</em> de <em>ser</em> lleva tilde para distinguirlo del pronombre <em>se</em>. <em>ve</em> de <em>ir</em> coincide con <em>ve</em> de <em>ver</em> — el contexto desambigua.',
      ru: 'Форма <em>sé</em> от <em>ser</em> пишется с акцентом — чтобы отличить от местоимения <em>se</em>. Форма <em>ve</em> у <em>ir</em> совпадает с <em>ve</em> у <em>ver</em> — различает контекст (<em>Ve a casa</em> «Иди домой» / <em>Ve la película</em> «Посмотри фильм»).',
    },

    {
      type: 'heading',
      text: 'Verbos en -cer, -cir: тип conducir',
    },
    {
      type: 'table',
      caption: 'conducir (по этой же модели conocer, introducir, obedecer)',
      columns: ['', 'tú', 'usted', 'vosotros', 'ustedes'],
      colClasses: ['col-pattern', 'col-result', 'col-result', 'col-result', 'col-result'],
      rows: [
        ['<strong>+</strong>', '<em>conduce</em>', '<em>condu<strong>zc</strong>a</em>', '<em>conducid</em>', '<em>condu<strong>zc</strong>an</em>'],
        ['<strong>−</strong>', '<em>no condu<strong>zc</strong>as</em>', '<em>no condu<strong>zc</strong>a</em>', '<em>no condu<strong>zc</strong>áis</em>', '<em>no condu<strong>zc</strong>an</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'En verbos terminados en <em>-ecer, -ocer, -ucir</em> aparece <strong>−zc−</strong> en todas las formas excepto <em>tú</em> afirmativo. Así: <em>conoce / no conozcas</em>, <em>obedece / no obedezcas</em>, <em>introduce / no introduzcas</em>.',
      ru: 'У глаголов на <em>-ecer / -ocer / -ucir</em> во всех формах императива (кроме положительной <em>tú</em>) корень получает вставку <strong>−zc−</strong>: <em>conoce / no conozcas</em>, <em>obedece / no obedezcas</em>, <em>introduce / no introduzcas</em>.',
      examples: [
        { es: 'Conduzca con cuidado, por favor.', ru: 'Ведите машину осторожно, пожалуйста.' },
        { es: 'No obedezcas órdenes injustas.', ru: 'Не подчиняйся несправедливым приказам.' },
      ],
    },

    {
      type: 'atencion',
      es: 'Recuerde: la forma de <em>vosotros</em> afirmativa siempre es <strong>regular</strong> (cambia <em>−r</em> del infinitivo por <em>−d</em>): <em>decid, haced, poned, salid, tened, venid, sed, id, traed, conducid</em>. Lo nerregular vive en <em>tú</em> y en las formas con <em>usted/ustedes</em> + en todas las negativas.',
      ru: 'Положительная форма <em>vosotros</em> всегда регулярная — заменой <em>−r</em> инфинитива на <em>−d</em>: <em>decid, haced, poned, salid, tened, venid, sed, id, traed, conducid</em>. Вся «неправильность» сосредоточена в <em>tú</em>, формах с <em>usted/ustedes</em> и во всех отрицательных формах.',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '76.1',
      title: 'Tú affirmativo: короткие формы',
      type: 'fill',
      instructions: 'Поставьте глагол в форме <em>tú</em> утвердительного императива. Помните: формы у этих глаголов очень короткие.',
      questions: [
        { id: 'q1', prompt: '(<em>poner</em>) ___ la mesa, por favor.',           correct: 'Pon' },
        { id: 'q2', prompt: '(<em>hacer</em>) ___ la cama antes de salir.',        correct: 'Haz' },
        { id: 'q3', prompt: '(<em>decir</em>) ___ la verdad, Marta.',              correct: 'Di' },
        { id: 'q4', prompt: '(<em>salir</em>) ___ de aquí ahora mismo.',           correct: 'Sal' },
        { id: 'q5', prompt: '(<em>tener</em>) ___ paciencia, hijo.',                correct: 'Ten' },
        { id: 'q6', prompt: '(<em>venir</em>) ___ aquí, por favor.',                correct: 'Ven' },
        { id: 'q7', prompt: '(<em>ser</em>) ___ amable con tu hermana.',            correct: 'Sé', explanation: 'Форма пишется с акцентом, чтобы не путать с местоимением <em>se</em>.' },
        { id: 'q8', prompt: '(<em>ir</em>) ___ a comprar el pan.',                  correct: 'Ve' },
        { id: 'q9', prompt: '(<em>traer</em>) ___ los platos a la cocina.',         correct: 'Trae', explanation: '<em>traer</em> сохраняет правильную форму tú: <em>trae</em>.' },
        { id: 'q10', prompt: '(<em>conducir</em>) ___ con cuidado, Pedro.',         correct: 'Conduce' },
      ],
    },

    {
      id: '76.2',
      title: 'Tú negativo: основа субхунтива',
      type: 'fill',
      instructions: 'Перепишите глагол в форме <em>no + tú</em> (отрицательный императив).',
      questions: [
        { id: 'q1',  prompt: '(<em>poner</em>) No ___ los codos en la mesa.',        correct: 'pongas' },
        { id: 'q2',  prompt: '(<em>hacer</em>) No ___ ruido, los niños duermen.',     correct: 'hagas' },
        { id: 'q3',  prompt: '(<em>decir</em>) No ___ tonterías.',                    correct: 'digas' },
        { id: 'q4',  prompt: '(<em>salir</em>) No ___ ahora; está lloviendo.',         correct: 'salgas' },
        { id: 'q5',  prompt: '(<em>tener</em>) No ___ miedo, no pasa nada.',           correct: 'tengas' },
        { id: 'q6',  prompt: '(<em>venir</em>) No ___ tarde, te esperamos a las siete.', correct: 'vengas' },
        { id: 'q7',  prompt: '(<em>ser</em>) No ___ impaciente.',                       correct: 'seas' },
        { id: 'q8',  prompt: '(<em>ir</em>) No ___ solo a casa de Martín.',             correct: 'vayas' },
        { id: 'q9',  prompt: '(<em>traer</em>) No ___ nada para la fiesta.',            correct: 'traigas' },
        { id: 'q10', prompt: '(<em>obedecer</em>) No ___ a desconocidos.',              correct: 'obedezcas' },
      ],
    },

    {
      id: '76.3',
      title: 'Usted: вежливые приказы',
      type: 'fill',
      instructions: 'Поставьте глагол в форме <em>usted</em> утвердительного императива.',
      questions: [
        { id: 'q1', prompt: '(<em>tener</em>) ___ cuidado, este cruce es peligroso.',  correct: 'Tenga' },
        { id: 'q2', prompt: '(<em>conducir</em>) ___ despacio, por favor.',             correct: 'Conduzca' },
        { id: 'q3', prompt: '(<em>poner</em>) ___ las llaves sobre la mesa.',           correct: 'Ponga' },
        { id: 'q4', prompt: '(<em>traer</em>) ___ la cuenta, por favor.',                correct: 'Traiga' },
        { id: 'q5', prompt: '(<em>venir</em>) ___ a mi oficina mañana.',                 correct: 'Venga' },
        { id: 'q6', prompt: '(<em>ir</em>) ___ a la ventanilla 3.',                       correct: 'Vaya' },
        { id: 'q7', prompt: '(<em>hacer</em>) ___ una copia de este documento.',         correct: 'Haga' },
        { id: 'q8', prompt: '(<em>decir</em>) ___me su nombre completo, por favor.',      correct: 'Diga', explanation: 'Местоимение присоединяется к утвердительной форме: <em>Dígame…</em>; здесь без слияния — просто форма <em>diga</em>.' },
        { id: 'q9', prompt: '(<em>conocer</em>) ___ a mi colega Andrés.',                 correct: 'Conozca' },
      ],
    },

    {
      id: '76.4',
      title: 'Vosotros: положительная форма всегда регулярна',
      type: 'fill',
      instructions: 'Перепишите в форме <em>vosotros</em>. Утвердительная форма строится по простому правилу: <em>−r → −d</em>.',
      questions: [
        { id: 'q1', prompt: '(<em>poner</em>) ___ la mesa, niños.',          correct: 'Poned' },
        { id: 'q2', prompt: '(<em>hacer</em>) ___ los deberes ya.',            correct: 'Haced' },
        { id: 'q3', prompt: '(<em>decir</em>) ___ ‘gracias’ al abuelo.',        correct: 'Decid' },
        { id: 'q4', prompt: '(<em>salir</em>) ___ todos a la calle.',           correct: 'Salid' },
        { id: 'q5', prompt: '(<em>tener</em>) ___ paciencia, por favor.',       correct: 'Tened' },
        { id: 'q6', prompt: '(<em>venir</em>) ___ aquí ahora.',                 correct: 'Venid' },
        { id: 'q7', prompt: '(<em>ser</em>) ___ amables con la profesora.',     correct: 'Sed' },
        { id: 'q8', prompt: '(<em>ir</em>) ___ a la cocina, niños.',             correct: 'Id' },
        { id: 'q9', prompt: '(<em>traer</em>) ___ los libros mañana.',           correct: 'Traed' },
      ],
    },

    {
      id: '76.5',
      title: 'Какая форма?',
      type: 'choice',
      instructions: 'Выберите грамматически правильный вариант.',
      questions: [
        { id: 'q1', prompt: 'No ___ tonterías, niños.',                options: ['decid', 'digáis', 'digáis no', 'no decid'], correct: 'digáis', explanation: 'Отрицательная форма <em>vosotros</em> идёт через основу субхунтива.' },
        { id: 'q2', prompt: '___ usted con cuidado, por favor.',         options: ['Conduce', 'Conduzca', 'Conduzcan', 'Conduzcas'], correct: 'Conduzca' },
        { id: 'q3', prompt: '___ amable, Lola.',                         options: ['Ser', 'Sea', 'Sé', 'Se'], correct: 'Sé', explanation: 'Tú affirmativo = <em>sé</em> с акцентом.' },
        { id: 'q4', prompt: 'No ___ a casa de Martín, no está.',          options: ['ve', 'vayas', 'vas', 'vayan'], correct: 'vayas', explanation: 'Отрицательная форма tú через субхунтив.' },
        { id: 'q5', prompt: '¡___ aquí ahora mismo!',                    options: ['Salga', 'Sale', 'Sal', 'Sales'], correct: 'Sal' },
        { id: 'q6', prompt: '___ ustedes la cuenta, por favor.',          options: ['Traen', 'Traigan', 'Traigad', 'Traed'], correct: 'Traigan' },
        { id: 'q7', prompt: 'No ___ ruido, vosotros — la abuela duerme.', options: ['hagáis', 'haced', 'hacéis', 'hacéd'], correct: 'hagáis' },
        { id: 'q8', prompt: '(a un amigo) ___ la mesa, ya viene mamá.',    options: ['Ponga', 'Pon', 'Pones', 'Pone'], correct: 'Pon' },
      ],
    },

    {
      id: '76.6',
      title: 'Все четыре формы',
      type: 'fill',
      instructions: 'Запишите положительные формы императива (<em>tú, usted, vosotros, ustedes</em>) через запятую и пробел. Образец: <em>poner</em> → <em>pon, ponga, poned, pongan</em>.',
      questions: [
        { id: 'q1', prompt: '<em>decir</em> →', correct: ['di, diga, decid, digan'] },
        { id: 'q2', prompt: '<em>hacer</em> →', correct: ['haz, haga, haced, hagan'] },
        { id: 'q3', prompt: '<em>salir</em> →', correct: ['sal, salga, salid, salgan'] },
        { id: 'q4', prompt: '<em>tener</em> →', correct: ['ten, tenga, tened, tengan'] },
        { id: 'q5', prompt: '<em>venir</em> →', correct: ['ven, venga, venid, vengan'] },
        { id: 'q6', prompt: '<em>ser</em> →',   correct: ['sé, sea, sed, sean'] },
        { id: 'q7', prompt: '<em>ir</em> →',    correct: ['ve, vaya, id, vayan'] },
        { id: 'q8', prompt: '<em>traer</em> →', correct: ['trae, traiga, traed, traigan'] },
      ],
    },

    {
      id: '76.7',
      title: 'Глаголы на -cer / -cir',
      type: 'fill',
      instructions: 'Поставьте глагол в требуемую форму императива.',
      questions: [
        { id: 'q1', prompt: '(<em>conducir</em>, usted) ___ con cuidado.',                correct: 'Conduzca' },
        { id: 'q2', prompt: '(<em>conocer</em>, tú −) No ___ a esa gente.',                correct: 'conozcas' },
        { id: 'q3', prompt: '(<em>obedecer</em>, vosotros) ___ a vuestros padres.',         correct: 'Obedeced', explanation: 'Положительная <em>vosotros</em> всегда регулярна: <em>obedeced</em>.' },
        { id: 'q4', prompt: '(<em>obedecer</em>, vosotros −) No ___ órdenes injustas.',     correct: 'obedezcáis' },
        { id: 'q5', prompt: '(<em>introducir</em>, ustedes) ___ la tarjeta en la ranura.',   correct: 'Introduzcan' },
        { id: 'q6', prompt: '(<em>conducir</em>, tú) ___ tú; yo estoy cansado.',              correct: 'Conduce' },
      ],
    },

    {
      id: '76.8',
      title: 'Из положительной — в отрицательную',
      type: 'fill',
      instructions: 'Перепишите команду в отрицательной форме (для того же лица). Образец: <em>Pon la mesa</em> → <em>No pongas la mesa</em>.',
      questions: [
        { id: 'q1', prompt: '<em>Haz la cama.</em> →',          correct: ['No hagas la cama.', 'No hagas la cama'] },
        { id: 'q2', prompt: '<em>Sal de aquí.</em> →',          correct: ['No salgas de aquí.', 'No salgas de aquí'] },
        { id: 'q3', prompt: '<em>Ven con nosotros.</em> →',     correct: ['No vengas con nosotros.', 'No vengas con nosotros'] },
        { id: 'q4', prompt: '<em>Sé impaciente.</em> →',         correct: ['No seas impaciente.', 'No seas impaciente'] },
        { id: 'q5', prompt: '<em>Ve al supermercado.</em> →',    correct: ['No vayas al supermercado.', 'No vayas al supermercado'] },
        { id: 'q6', prompt: '<em>Tened miedo.</em> →',           correct: ['No tengáis miedo.', 'No tengáis miedo'] },
        { id: 'q7', prompt: '<em>Ponga la radio.</em> (usted) →', correct: ['No ponga la radio.', 'No ponga la radio'] },
        { id: 'q8', prompt: '<em>Conduzcan rápido.</em> (ustedes) →', correct: ['No conduzcan rápido.', 'No conduzcan rápido'] },
      ],
    },

    {
      id: '76.9',
      title: 'Сопоставьте инфинитив и форму tú+',
      type: 'match',
      instructions: 'Подберите для каждого инфинитива короткую форму утвердительного императива <em>tú</em>.',
      pool: ['di', 'haz', 'pon', 'sal', 'ten', 'ven', 'sé', 've', 'trae', 'conduce'],
      questions: [
        { id: 'q1', prompt: '<em>decir</em>',     correct: 'di' },
        { id: 'q2', prompt: '<em>hacer</em>',     correct: 'haz' },
        { id: 'q3', prompt: '<em>poner</em>',     correct: 'pon' },
        { id: 'q4', prompt: '<em>salir</em>',     correct: 'sal' },
        { id: 'q5', prompt: '<em>tener</em>',     correct: 'ten' },
        { id: 'q6', prompt: '<em>venir</em>',     correct: 'ven' },
        { id: 'q7', prompt: '<em>ser</em>',       correct: 'sé' },
        { id: 'q8', prompt: '<em>ir</em>',         correct: 've' },
        { id: 'q9', prompt: '<em>traer</em>',     correct: 'trae' },
        { id: 'q10', prompt: '<em>conducir</em>', correct: 'conduce' },
      ],
    },

    {
      id: '76.10',
      title: 'Где регулярная форма vosotros?',
      type: 'multi',
      instructions: 'Отметьте все формы, которые являются <strong>правильной положительной</strong> формой <em>vosotros</em> императива.',
      questions: [
        {
          id: 'q1',
          prompt: 'Отметьте формы <em>vosotros</em> +:',
          options: ['decid', 'digáis', 'haced', 'hagáis', 'poned', 'salid', 'tened', 'sed', 'id', 'traed', 'sean', 'vayan'],
          correct: ['decid', 'haced', 'poned', 'salid', 'tened', 'sed', 'id', 'traed'],
          explanation: 'Положительная <em>vosotros</em> = инфинитив без <em>-r</em> + <em>-d</em>. Формы на <em>-áis</em> — отрицательные. <em>sean / vayan</em> — это <em>ustedes</em>.',
        },
      ],
    },

    {
      id: '76.11',
      title: 'Сценки: какой глагол',
      type: 'fill',
      instructions: 'В каждой ситуации подставьте глагол из списка в нужной форме императива (полная форма с диакритикой). Список: <em>conducir, hacer, poner, salir, tener, traer, venir, decir</em>.',
      questions: [
        { id: 'q1', prompt: 'A unos niños en la sala: «No ___ fotos, por favor.» (<em>hacer</em>, ustedes −)',     correct: 'hagan' },
        { id: 'q2', prompt: 'A un amigo al volante: «___ con cuidado.» (<em>conducir</em>, tú)',                    correct: 'Conduce' },
        { id: 'q3', prompt: 'A unos vecinos: «No ___ ruido, por favor.» (<em>hacer</em>, ustedes −)',               correct: 'hagan' },
        { id: 'q4', prompt: 'A un hijo: «___ pan de la panadería.» (<em>traer</em>, tú)',                            correct: 'Trae' },
        { id: 'q5', prompt: 'A un cliente: «___ a mi oficina mañana.» (<em>venir</em>, usted)',                       correct: 'Venga' },
        { id: 'q6', prompt: 'A unos alumnos: «___ atención.» (<em>tener</em>, vosotros)',                              correct: 'Tened' },
        { id: 'q7', prompt: 'A unos amigos en la playa: «___ todos al agua.» (<em>salir</em>, ustedes)',               correct: 'Salgan' },
        { id: 'q8', prompt: 'A un compañero: «No ___ nada, es un secreto.» (<em>decir</em>, tú −)',                    correct: 'digas' },
      ],
    },

    {
      id: '76.12',
      title: 'Между запретом и разрешением',
      type: 'choice',
      instructions: 'Какой смысл у фразы?',
      questions: [
        { id: 'q1', prompt: '<em>No tengas miedo.</em>', options: ['успокаивает: «не бойся»', 'упрекает: «у тебя нет страха»'], correct: 'успокаивает: «не бойся»' },
        { id: 'q2', prompt: '<em>Sé bueno, Julián.</em>', options: ['описывает: «Хулиан хороший»', 'просит: «Будь хорошим, Хулиан»'], correct: 'просит: «Будь хорошим, Хулиан»' },
        { id: 'q3', prompt: '<em>Ve a comprar pan.</em>', options: ['команда: «иди купить хлеб»', 'описывает действие'], correct: 'команда: «иди купить хлеб»' },
        { id: 'q4', prompt: '<em>No vayáis a casa de Martín, no está.</em>', options: ['разрешает идти', 'запрещает идти'], correct: 'запрещает идти' },
      ],
    },

    {
      id: '76.13',
      title: 'Аудио-диктант',
      type: 'fill',
      instructions: 'Послушайте и запишите фразу <strong>с диакритикой</strong>. Используйте <code>🔊</code>.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Pon la mesa, por favor.',                  correct: ['Pon la mesa, por favor.', 'Pon la mesa, por favor'] },
        { id: 'q2', prompt: '', audio: 'No hagas ruido.',                           correct: ['No hagas ruido.', 'No hagas ruido'] },
        { id: 'q3', prompt: '', audio: 'Sal de aquí ahora mismo.',                  correct: ['Sal de aquí ahora mismo.', 'Sal de aquí ahora mismo'] },
        { id: 'q4', prompt: '', audio: 'Sé amable con tu hermana.',                 correct: ['Sé amable con tu hermana.', 'Sé amable con tu hermana'] },
        { id: 'q5', prompt: '', audio: 'Conduzca con cuidado, por favor.',          correct: ['Conduzca con cuidado, por favor.', 'Conduzca con cuidado, por favor'] },
        { id: 'q6', prompt: '', audio: 'No vayas a casa de Martín.',                 correct: ['No vayas a casa de Martín.', 'No vayas a casa de Martín'] },
        { id: 'q7', prompt: '', audio: 'Tened paciencia, niños.',                   correct: ['Tened paciencia, niños.', 'Tened paciencia, niños'] },
      ],
    },
  ],
};
