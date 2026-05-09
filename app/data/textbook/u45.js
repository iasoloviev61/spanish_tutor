// ============================================================
// Unidad 45 — Presente de indicativo de TENER
// tengo, tienes, tiene, tenemos, tenéis, tienen.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u45 = {
  id: 'u45',
  number: 45,
  title: { es: 'tengo, tienes, tiene…', topic: 'Presente de indicativo de tener' },
  topicRu: 'Спряжение глагола tener в настоящем времени и его употребление',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: '<strong>Tener</strong> es un verbo irregular del grupo <em>e → ie</em>: en el presente, <strong>la <em>e</em> de la raíz cambia a <em>ie</em></strong> en todas las personas <strong>excepto</strong> en <em>nosotros</em> y <em>vosotros</em>. Además, la 1.ª persona del singular es <em>tengo</em>: añade una <em>g</em>.',
      ru: 'Глагол <strong>tener</strong> неправильный, типа «<em>e → ie</em>»: в настоящем времени <em>e</em> в корне переходит в <em>ie</em> во всех лицах, <strong>кроме</strong> <em>nosotros</em> и <em>vosotros</em>. Плюс особая форма 1-го лица — <em>tengo</em> (с буквой <em>g</em>).',
      examples: [
        { es: '<strong>Tengo</strong> un ordenador nuevo.', ru: 'У меня новый компьютер.' },
        { es: '¿<strong>Tienes</strong> dinero?', ru: 'У тебя есть деньги?' },
        { es: 'Cristina <strong>tiene</strong> siete hermanos.', ru: 'У Кристины семеро братьев и сестёр.' },
      ],
    },
    {
      type: 'heading',
      text: 'Спряжение',
    },
    {
      type: 'table',
      caption: 'TENER — presente de indicativo',
      columns: ['Лицо', 'Singular', 'Plural'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['1.ª',                       '(yo) <strong>tengo</strong>',                          '(nosotros, -as) <strong>tenemos</strong>'],
        ['2.ª (близко)',              '(tú) <strong>tienes</strong>',                          '(vosotros, -as) <strong>tenéis</strong>'],
        ['3.ª / usted, ustedes',      '(él, ella, usted) <strong>tiene</strong>',              '(ellos, ellas, ustedes) <strong>tienen</strong>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Atención a la ortografía: <em>tengo</em> (con <em>g</em>); <em>tenéis</em> lleva tilde en la <em>é</em>. <em>Tenemos</em> y <em>tenéis</em> conservan la <em>e</em> de la raíz, sin diptongo.',
      ru: 'Орфография: <em>tengo</em> пишется с <em>g</em>. В <em>tenéis</em> ставится тильда. В <em>tenemos</em> и <em>tenéis</em> в корне сохраняется <em>e</em> — без дифтонга <em>ie</em>.',
    },
    {
      type: 'heading',
      text: 'Когда употребляется <em>tener</em>',
    },
    {
      type: 'rule',
      es: '<em>Tener</em> es muy frecuente. Sus usos básicos:',
      ru: 'У глагола <em>tener</em> много базовых значений — выучите их вместе.',
      examples: [
        { es: '<strong>Posesión</strong>: <em>Tengo un coche nuevo. Luis no tiene casa.</em>', ru: 'Обладание: «у меня есть / нет».' },
        { es: '<strong>Petición / pregunta</strong>: <em>¿Tienes un lápiz? — Sí, pero lo necesito.</em>', ru: 'Вопрос-просьба «Есть ли у тебя?»' },
        { es: '<strong>Familia</strong>: <em>Tengo dos hermanos. ¿Cuántos hijos tenéis?</em>', ru: 'Состав семьи.' },
        { es: '<strong>Edad</strong>: <em>¿Cuántos años tienes? — Tengo veintitrés.</em>', ru: 'Возраст. По-русски «мне 23», по-испански «<em>tengo 23 años</em>» — буквально «имею».' },
        { es: '<strong>Описание</strong>: <em>Enrique tiene los ojos verdes. Mi casa no tiene jardín.</em>', ru: 'Описание людей, вещей, мест: цвет глаз, наличие сада, размер и т. п.' },
        { es: '<strong>Состояния</strong>: <em>Tengo hambre. ¿Tienes frío? Tienes mala cara.</em>', ru: 'Физические/психические состояния: голод, жажда, холод, страх, сон…' },
      ],
    },
    {
      type: 'heading',
      text: 'Идиоматичные сочетания',
    },
    {
      type: 'table',
      caption: '«Иметь Х» по-испански',
      columns: ['Состояние', 'Идиома'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['голод',          '<em>tener hambre</em>'],
        ['жажда',           '<em>tener sed</em>'],
        ['холод (кому-то холодно)', '<em>tener frío</em>'],
        ['жара (кому-то жарко)',   '<em>tener calor</em>'],
        ['страх',           '<em>tener miedo</em>'],
        ['сон / спать хочется', '<em>tener sueño</em>'],
        ['температура / болезнь', '<em>tener fiebre</em>, <em>tener gripe</em>'],
        ['возраст',          '<em>tener X años</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Importante: en español, los <strong>estados físicos</strong> y la <strong>edad</strong> se expresan con <em>tener</em>, no con <em>ser</em> ni con <em>estar</em>: <em>Tengo hambre</em> (no <em>«Soy hambriento»</em>), <em>Tengo treinta años</em> (no <em>«Soy treinta»</em>).',
      ru: 'Важно: <strong>возраст</strong> и многие физические состояния — это <em>tener</em>, не <em>ser</em> и не <em>estar</em>. Не «я тридцать», а «<em>tengo treinta años</em>». Не «я голоден», а «<em>tengo hambre</em>». Это самая частая «русская» ошибка.',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '45.1',
      title: 'Спряжение <em>tener</em>',
      type: 'fill',
      instructions: 'Поставьте глагол <em>tener</em> в нужную форму.',
      questions: [
        { id: 'q1', prompt: 'yo →',                  correct: 'tengo' },
        { id: 'q2', prompt: 'tú →',                  correct: 'tienes' },
        { id: 'q3', prompt: 'él / ella / usted →',    correct: 'tiene' },
        { id: 'q4', prompt: 'nosotras →',             correct: 'tenemos' },
        { id: 'q5', prompt: 'vosotros →',             correct: 'tenéis', explanation: 'С тильдой.' },
        { id: 'q6', prompt: 'ellos / ustedes →',       correct: 'tienen' },
      ],
    },

    {
      id: '45.2',
      title: 'Сколько лет?',
      type: 'fill',
      instructions: 'Помните: <strong>возраст</strong> по-испански передаётся через <em>tener</em>. Дано имя и количество лет — постройте фразу. Образец: <em>Yo / 23 → Tengo veintitrés años.</em>',
      questions: [
        { id: 'q1', prompt: 'tú / 18 →',                                  correct: ['Tienes dieciocho años.'] },
        { id: 'q2', prompt: 'mi hermana / 30 →',                            correct: ['Mi hermana tiene treinta años.'] },
        { id: 'q3', prompt: 'mis abuelos / 90 →',                            correct: ['Mis abuelos tienen noventa años.'] },
        { id: 'q4', prompt: 'vosotros / 20 →',                                correct: ['Vosotros tenéis veinte años.', 'Tenéis veinte años.'] },
        { id: 'q5', prompt: 'ustedes / 40 →',                                  correct: ['Ustedes tienen cuarenta años.', 'Tienen cuarenta años.'] },
        { id: 'q6', prompt: 'mi madre y yo / 50 (ambas) →',                    correct: ['Mi madre y yo tenemos cincuenta años.'] },
      ],
    },

    {
      id: '45.3',
      title: 'Семья и обладание',
      type: 'fill',
      instructions: 'Подставьте подходящую форму <em>tener</em>.',
      questions: [
        { id: 'q1', prompt: 'Yo ___ dos hermanos y una hermana.',          correct: 'tengo' },
        { id: 'q2', prompt: '¿Cuántos hijos ___ usted?',                    correct: 'tiene' },
        { id: 'q3', prompt: 'Adela y Jorge no ___ hijos.',                   correct: 'tienen' },
        { id: 'q4', prompt: 'Mi prima ___ una casa muy grande.',              correct: 'tiene' },
        { id: 'q5', prompt: 'Nosotros ___ un perro y dos gatos.',              correct: 'tenemos' },
        { id: 'q6', prompt: '¿Vosotros ___ coche?',                            correct: 'tenéis' },
        { id: 'q7', prompt: '— ¿___ tú un diccionario? — Sí, aquí.',           correct: 'Tienes' },
        { id: 'q8', prompt: 'Mi casa no ___ ascensor.',                          correct: 'tiene' },
      ],
    },

    {
      id: '45.4',
      title: 'Состояния через <em>tener</em>',
      type: 'choice',
      instructions: 'Выберите верный вариант.',
      questions: [
        { id: 'q1', prompt: '— ¿Quieres beber algo? — Sí, ___ mucha sed.',  options: ['estoy', 'tengo', 'soy'], correct: 'tengo', explanation: 'Жажда — <em>tener sed</em>.' },
        { id: 'q2', prompt: '— ¿___ frío? — Sí, cierra la ventana.',           options: ['Eres', 'Estás', 'Tienes'], correct: 'Tienes', explanation: '«Тебе холодно» — <em>tener frío</em>.' },
        { id: 'q3', prompt: 'Los niños ___ miedo de los truenos.',             options: ['tienen', 'están', 'son'], correct: 'tienen' },
        { id: 'q4', prompt: 'Es tarde, ya ___ sueño.',                         options: ['soy', 'estoy', 'tengo'], correct: 'tengo' },
        { id: 'q5', prompt: 'Mi madre ___ gripe esta semana.',                  options: ['es', 'está', 'tiene'], correct: 'tiene' },
        { id: 'q6', prompt: '¿___ hambre? Hay pizza en la nevera.',              options: ['Eres', 'Estás', 'Tienes'], correct: 'Tienes' },
        { id: 'q7', prompt: 'En agosto siempre ___ mucho calor en Sevilla.',     options: ['son', 'están', 'tienen'], correct: 'tienen', explanation: 'Подразумевается «(люди) испытывают жару». Если о погоде вообще, было бы безличное <em>hace calor</em>.' },
        { id: 'q8', prompt: 'Tienes mala cara, ¿___ fiebre?',                    options: ['eres', 'estás', 'tienes'], correct: 'tienes' },
      ],
    },

    {
      id: '45.5',
      title: 'Описание людей и предметов',
      type: 'fill',
      instructions: 'Опишите внешность или особенности через <em>tener</em>.',
      questions: [
        { id: 'q1', prompt: 'Enrique ___ los ojos verdes.',                 correct: 'tiene' },
        { id: 'q2', prompt: 'Mi casa no ___ jardín.',                        correct: 'tiene' },
        { id: 'q3', prompt: 'Tú ___ el pelo muy largo.',                     correct: 'tienes' },
        { id: 'q4', prompt: 'Mis abuelos ___ una casa con piscina.',          correct: 'tienen' },
        { id: 'q5', prompt: 'Vosotros ___ una habitación muy luminosa.',       correct: 'tenéis' },
        { id: 'q6', prompt: 'Yo ___ los ojos marrones, como mi padre.',         correct: 'tengo' },
        { id: 'q7', prompt: 'Esta camisa ___ un agujero, no la compres.',       correct: 'tiene' },
      ],
    },

    {
      id: '45.6',
      title: 'Превратите в вопрос',
      type: 'fill',
      instructions: 'Поставьте вопрос с <em>tener</em>. Образец: <em>usted / sueño → ¿Tiene usted sueño?</em>',
      questions: [
        { id: 'q1', prompt: 'tú / dinero →',                            correct: ['¿Tienes dinero?'] },
        { id: 'q2', prompt: 'nosotros / no, coche →',                    correct: ['¿No tenemos coche?'] },
        { id: 'q3', prompt: 'ustedes / hijos →',                          correct: ['¿Tienen ustedes hijos?', '¿Tienen hijos?'] },
        { id: 'q4', prompt: 'usted / una casa grande →',                   correct: ['¿Tiene usted una casa grande?', '¿Tiene una casa grande?'] },
        { id: 'q5', prompt: 'vosotras / muchos amigos →',                   correct: ['¿Tenéis muchas amigas?', '¿Tenéis muchos amigos?'] },
        { id: 'q6', prompt: 'tú / un diccionario →',                         correct: ['¿Tienes un diccionario?'] },
        { id: 'q7', prompt: 'mi casa / no, ascensor →',                       correct: ['¿No tiene ascensor mi casa?', '¿Mi casa no tiene ascensor?'] },
      ],
    },

    {
      id: '45.7',
      title: 'Соедините начало и продолжение',
      type: 'match',
      instructions: 'Подберите естественное окончание для каждой фразы.',
      pool: [
        'tengo mucha hambre.',
        'tienes los ojos azules.',
        'tiene treinta años.',
        'tenemos dos perros.',
        'tenéis una casa preciosa.',
        'tienen miedo de los aviones.',
        'tengo sueño, voy a la cama.',
        'tiene mala cara, está enfermo.',
      ],
      questions: [
        { id: 'q1', prompt: 'Es tarde y ___',                                correct: 'tengo sueño, voy a la cama.' },
        { id: 'q2', prompt: 'No he comido nada en todo el día, ___',           correct: 'tengo mucha hambre.' },
        { id: 'q3', prompt: 'Tú no eres morena, ___',                           correct: 'tienes los ojos azules.' },
        { id: 'q4', prompt: 'Mi hermana mayor ___',                              correct: 'tiene treinta años.' },
        { id: 'q5', prompt: 'Mi marido y yo ___',                                correct: 'tenemos dos perros.' },
        { id: 'q6', prompt: 'Vosotros ___',                                       correct: 'tenéis una casa preciosa.' },
        { id: 'q7', prompt: 'Mis primos no viajan en avión, ___',                  correct: 'tienen miedo de los aviones.' },
        { id: 'q8', prompt: 'Pedro ___',                                            correct: 'tiene mala cara, está enfermo.' },
      ],
    },

    {
      id: '45.8',
      title: 'Семейная таблица',
      type: 'fill',
      instructions: 'Дано:<br><em>Julio</em>: 23 года, без братьев/сестёр, без детей, глаза карие.<br><em>Pepa и Jorge</em>: 28 и 31 год, у Хорхе 2 брата, у Пепы 1 сестра, вместе 3 ребёнка, глаза зелёные/чёрные.<br><em>Margarita</em>: 23 года, 2 брата, без детей, глаза карие.<br>Заполните пропуски формой <em>tener</em>.',
      questions: [
        { id: 'q1', prompt: 'Pepa y Jorge ___ tres hijos.',                  correct: 'tienen' },
        { id: 'q2', prompt: 'Pero Julio y Margarita no ___ hijos.',            correct: 'tienen' },
        { id: 'q3', prompt: 'Julio ___ veintitrés años.',                       correct: 'tiene' },
        { id: 'q4', prompt: 'Margarita y yo (= Julio) ___ los ojos marrones.',  correct: 'tenemos' },
        { id: 'q5', prompt: 'Pepa y Jorge ___ los ojos verdes y negros.',         correct: 'tienen' },
        { id: 'q6', prompt: 'Yo (= Pepa) ___ una hermana.',                       correct: 'tengo' },
        { id: 'q7', prompt: '¿Cuántos años ___ vosotros, Pepa y Jorge? — Veintiocho y treinta y uno.', correct: 'tenéis' },
      ],
    },

    {
      id: '45.9',
      title: '<em>ser</em>, <em>estar</em> или <em>tener</em>?',
      type: 'choice',
      instructions: 'Выберите глагол с правильной формой.',
      questions: [
        { id: 'q1', prompt: '— ¿Cuántos años ___ tu hijo?',                  options: ['es', 'está', 'tiene'], correct: 'tiene' },
        { id: 'q2', prompt: 'Mi madre ___ médica.',                           options: ['es', 'está', 'tiene'], correct: 'es' },
        { id: 'q3', prompt: 'Hoy yo ___ cansada.',                             options: ['soy', 'estoy', 'tengo'], correct: 'estoy' },
        { id: 'q4', prompt: 'Yo ___ sed, ¿hay agua?',                          options: ['soy', 'estoy', 'tengo'], correct: 'tengo' },
        { id: 'q5', prompt: 'Las llaves ___ encima de la mesa.',                options: ['son', 'están', 'tienen'], correct: 'están' },
        { id: 'q6', prompt: 'Mis hermanos ___ los ojos azules.',                 options: ['son', 'están', 'tienen'], correct: 'tienen' },
        { id: 'q7', prompt: '¿___ frío? Te dejo mi chaqueta.',                  options: ['Eres', 'Estás', 'Tienes'], correct: 'Tienes' },
        { id: 'q8', prompt: 'Esta paella ___ riquísima.',                       options: ['es', 'está', 'tiene'], correct: 'está' },
        { id: 'q9', prompt: 'Mi prima Sara ___ veinte años.',                    options: ['es', 'está', 'tiene'], correct: 'tiene' },
        { id: 'q10', prompt: 'Hoy ___ jueves.',                                  options: ['es', 'está', 'tiene'], correct: 'es' },
      ],
    },

    {
      id: '45.10',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма <em>tener</em> или сочетание ошибочны — выберите ошибочный вариант.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?',  options: ['yo tengo', 'tú tienes', 'él tienes', 'nosotros tenemos'], correct: 'él tienes', explanation: '<em>él tiene</em>; <em>tienes</em> — это форма <em>tú</em>.' },
        { id: 'q2', prompt: 'Где ошибка?',  options: ['vosotros tenéis', 'vosotros teneis', 'nosotros tenemos', 'ellos tienen'], correct: 'vosotros teneis', explanation: 'В <em>tenéis</em> обязательна тильда.' },
        { id: 'q3', prompt: 'Где ошибка?',  options: ['Tengo veinte años.', 'Soy veinte años.', 'Mi madre tiene cuarenta años.', '¿Cuántos años tienes?'], correct: 'Soy veinte años.', explanation: 'Возраст по-испански — <em>tener</em>, не <em>ser</em>.' },
        { id: 'q4', prompt: 'Где ошибка?',  options: ['Tengo hambre.', 'Tengo sed.', 'Estoy hambre.', 'Tengo miedo.'], correct: 'Estoy hambre.', explanation: 'Голод — <em>tener hambre</em>, не <em>estar</em>.' },
        { id: 'q5', prompt: 'Где ошибка?',  options: ['Tengo dos hermanos.', 'No tengo coche.', 'Tienes los ojos verdes.', 'Tengamos un perro.'], correct: 'Tengamos un perro.', explanation: '<em>Tengamos</em> — это сослагательное; в настоящем времени надо <em>tenemos</em>.' },
      ],
    },

    {
      id: '45.11',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите фразу <strong>с тильдами и знаками препинания</strong>.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Tengo veinte años.',           correct: ['Tengo veinte años.'] },
        { id: 'q2', prompt: '', audio: '¿Tienes hambre?',               correct: ['¿Tienes hambre?'] },
        { id: 'q3', prompt: '', audio: 'Tenemos dos hijos.',             correct: ['Tenemos dos hijos.'] },
        { id: 'q4', prompt: '', audio: 'No tengo coche.',                 correct: ['No tengo coche.'] },
        { id: 'q5', prompt: '', audio: '¿Cuántos años tienen?',           correct: ['¿Cuántos años tienen?'] },
        { id: 'q6', prompt: '', audio: 'Tiene los ojos verdes.',          correct: ['Tiene los ojos verdes.'] },
        { id: 'q7', prompt: '', audio: 'Tengo sueño.',                     correct: ['Tengo sueño.'] },
      ],
    },

    {
      id: '45.12',
      title: 'Поставьте в форму отрицания',
      type: 'fill',
      instructions: 'Образец: <em>Tengo coche → No tengo coche.</em> Запишите всю фразу.',
      questions: [
        { id: 'q1', prompt: 'Tengo hambre. →',                         correct: ['No tengo hambre.'] },
        { id: 'q2', prompt: 'Tienes razón. →',                          correct: ['No tienes razón.'] },
        { id: 'q3', prompt: 'Tenemos clase mañana. →',                  correct: ['No tenemos clase mañana.'] },
        { id: 'q4', prompt: 'Tienen miedo. →',                          correct: ['No tienen miedo.'] },
        { id: 'q5', prompt: 'Mi casa tiene jardín. →',                   correct: ['Mi casa no tiene jardín.'] },
      ],
    },
  ],
};
