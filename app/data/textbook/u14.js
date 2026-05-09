// ============================================================
// Unidad 14 — Adjetivos de nacionalidad (una amiga chilena)
// Образование женского и множественного числа.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u14 = {
  id: 'u14',
  number: 14,
  title: { es: 'una amiga chilena', topic: 'Adjetivos de nacionalidad' },
  topicRu: 'Прилагательные национальности: формы',

  theory: [
    {
      type: 'rule',
      es: 'Los adjetivos de nacionalidad <strong>concuerdan en género y número</strong> con la persona, animal o cosa a la que se refieren.',
      ru: 'Прилагательные национальности согласуются с существительным по роду и числу, как и любые другие.',
      examples: [
        { es: 'Esta es Elsa, una amiga chilena.', ru: 'Это Эльса, моя чилийская подруга.' },
        { es: '¿De dónde sois? — Somos cubanos.', ru: 'Откуда вы? — Мы кубинцы.' },
        { es: 'Yo soy español.', ru: 'Я испанец.' },
      ],
    },
    {
      type: 'heading',
      text: 'Группа 1: −o → −a',
    },
    {
      type: 'table',
      caption: 'Окончание на −o, −a',
      columns: ['Singular m.', 'Singular f.', 'Plural m.', 'Plural f.'],
      colClasses: ['col-pattern', 'col-pattern', 'col-pattern', 'col-pattern'],
      rows: [
        ['<em>chileno</em>', '<em>chilena</em>', '<em>chilenos</em>', '<em>chilenas</em>'],
        ['<em>cubano</em>', '<em>cubana</em>', '<em>cubanos</em>', '<em>cubanas</em>'],
        ['<em>italiano</em>', '<em>italiana</em>', '<em>italianos</em>', '<em>italianas</em>'],
        ['<em>mexicano</em>', '<em>mexicana</em>', '<em>mexicanos</em>', '<em>mexicanas</em>'],
      ],
    },
    {
      type: 'heading',
      text: 'Группа 2: −a, −e, −í — не меняется по роду',
    },
    {
      type: 'table',
      caption: 'Одна форма для м. и ж. рода',
      columns: ['Singular m./f.', 'Plural m./f.'],
      colClasses: ['col-pattern', 'col-pattern'],
      rows: [
        ['<em>belga</em>', '<em>belgas</em>'],
        ['<em>canadiense</em>', '<em>canadienses</em>'],
        ['<em>marroquí</em>', '<em>marroquís</em> / <em>marroquíes</em>'],
        ['<em>vietnamita</em>', '<em>vietnamitas</em>'],
        ['<em>nicaragüense</em>', '<em>nicaragüenses</em>'],
        ['<em>iraní</em>', '<em>iranís</em> / <em>iraníes</em>'],
      ],
    },
    {
      type: 'heading',
      text: 'Группа 3: согласная → +a в фем., +es / +as в мн. ч.',
    },
    {
      type: 'table',
      caption: 'Согласная',
      columns: ['Singular m.', 'Singular f.', 'Plural m.', 'Plural f.'],
      colClasses: ['col-pattern', 'col-pattern', 'col-pattern', 'col-pattern'],
      rows: [
        ['<em>portugués</em>', '<em>portuguesa</em>', '<em>portugueses</em>', '<em>portuguesas</em>'],
        ['<em>alemán</em>', '<em>alemana</em>', '<em>alemanes</em>', '<em>alemanas</em>'],
        ['<em>español</em>', '<em>española</em>', '<em>españoles</em>', '<em>españolas</em>'],
        ['<em>francés</em>', '<em>francesa</em>', '<em>franceses</em>', '<em>francesas</em>'],
        ['<em>japonés</em>', '<em>japonesa</em>', '<em>japoneses</em>', '<em>japonesas</em>'],
        ['<em>escocés</em>', '<em>escocesa</em>', '<em>escoceses</em>', '<em>escocesas</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Las formas con tilde en masculino singular <strong>pierden la tilde</strong> en femenino y plural: <em>portugués → portuguesa, portugueses, portuguesas</em>; <em>alemán → alemana, alemanes, alemanas</em>; <em>francés → francesa, franceses, francesas</em>.',
      ru: 'Тильда из формы м. р. ед. ч. <strong>исчезает</strong> в фем. и мн. ч., потому что меняется ударение по правилам акцентуации.',
    },
    {
      type: 'rule',
      es: 'Si juntamos un sustantivo masculino y otro femenino, el adjetivo va en <strong>masculino plural</strong>: <em>Iván es cubano. Haydée es cubana. → Iván y Haydée son cubanos.</em>',
      ru: 'Если в группе и мужской, и женский — прилагательное в м. р. мн. ч.',
    },
    {
      type: 'rule',
      es: 'Las nacionalidades funcionan como adjetivos calificativos: van con <em>ser</em> (sin artículo: <em>Soy chileno</em>) o detrás del nombre (<em>una amiga chilena</em>).',
      ru: 'Национальность с <em>ser</em> ставится без артикля (<em>Soy chileno</em>); как определение — после существительного (<em>una amiga chilena</em>).',
    },
  ],

  exercises: [
    {
      id: '14.1',
      title: 'Заполните таблицу национальностей',
      type: 'fill',
      instructions: 'Запишите форму ж. р. ед. ч., м. р. мн. ч. или ф. р. мн. ч. — по запросу.',
      questions: [
        { id: 'q1',  prompt: 'brasileño → fem. sg. ___',          correct: 'brasileña' },
        { id: 'q2',  prompt: 'brasileño → masc. pl. ___',          correct: 'brasileños' },
        { id: 'q3',  prompt: 'costarricense → fem. sg. ___',        correct: 'costarricense' },
        { id: 'q4',  prompt: 'costarricense → fem. pl. ___',         correct: 'costarricenses' },
        { id: 'q5',  prompt: 'escocés → fem. sg. ___',                correct: 'escocesa' },
        { id: 'q6',  prompt: 'escocés → masc. pl. ___',                correct: 'escoceses' },
        { id: 'q7',  prompt: 'iraní → fem. sg. ___',                    correct: 'iraní' },
        { id: 'q8',  prompt: 'japonés → fem. sg. ___',                   correct: 'japonesa' },
        { id: 'q9',  prompt: 'japonés → masc. pl. ___',                  correct: 'japoneses' },
        { id: 'q10', prompt: 'nicaragüense → masc. pl. ___',              correct: 'nicaragüenses' },
        { id: 'q11', prompt: 'venezolano → fem. pl. ___',                 correct: 'venezolanas' },
        { id: 'q12', prompt: 'vietnamita → masc. sg. ___',                 correct: 'vietnamita' },
        { id: 'q13', prompt: 'alemán → fem. sg. ___',                       correct: 'alemana' },
        { id: 'q14', prompt: 'alemán → masc. pl. ___',                       correct: 'alemanes' },
      ],
    },

    {
      id: '14.2',
      title: 'Откуда они?',
      type: 'fill',
      instructions: 'Запишите национальность в нужной форме (<em>chino, peruano, italiano, francés, mexicano, ruso, indio, egipcio</em>).',
      questions: [
        { id: 'q1', prompt: 'Soy de Lima. Soy ___.',                      correct: 'peruano', explanation: 'Можно <em>peruana</em> для девушки.' },
        { id: 'q2', prompt: 'Soy de Lima (девушка). Soy ___.',              correct: 'peruana' },
        { id: 'q3', prompt: 'Somos de Roma y Milán. Somos ___.',             correct: 'italianos' },
        { id: 'q4', prompt: 'Somos de El Cairo. Somos ___.',                  correct: 'egipcios' },
        { id: 'q5', prompt: 'Soy de París. Soy ___ (девушка).',                 correct: 'francesa' },
        { id: 'q6', prompt: 'Somos de Roma y Florencia (две девушки). Somos ___.', correct: 'italianas' },
        { id: 'q7', prompt: 'Somos de Pekín. Somos ___.',                          correct: 'chinos' },
        { id: 'q8', prompt: 'Soy de Mumbai. Soy ___ (м.).',                          correct: 'indio' },
        { id: 'q9', prompt: 'Soy de Moscú. Soy ___ (девушка).',                       correct: 'rusa' },
        { id: 'q10', prompt: 'Somos de Ciudad de México. Somos ___.',                  correct: 'mexicanos' },
      ],
    },

    {
      id: '14.3',
      title: 'Город / валюта / актриса — какой национальности?',
      type: 'fill',
      instructions: 'Подберите подходящее существительное-национальность в нужной форме (см. примеры в скобках).',
      questions: [
        { id: 'q1', prompt: 'El yen es la moneda ___ (Japón).',                       correct: 'japonesa' },
        { id: 'q2', prompt: 'El dirham es la moneda ___ (Marruecos).',                 correct: 'marroquí' },
        { id: 'q3', prompt: 'Gabriel García Márquez es un escritor ___ (Colombia).',    correct: 'colombiano' },
        { id: 'q4', prompt: 'Burdeos es una ciudad ___ (Francia).',                      correct: 'francesa' },
        { id: 'q5', prompt: 'Julia Roberts es una actriz ___ (EE. UU.).',                  correct: 'estadounidense' },
        { id: 'q6', prompt: 'Hanói es la capital ___ (Vietnam).',                            correct: 'vietnamita' },
        { id: 'q7', prompt: 'Montreal y Edmonton son ciudades ___ (Canadá).',                  correct: 'canadienses' },
        { id: 'q8', prompt: 'Lisboa es la capital ___ (Portugal).',                              correct: 'portuguesa' },
        { id: 'q9', prompt: 'Berlín es la capital ___ (Alemania).',                                correct: 'alemana' },
        { id: 'q10', prompt: 'Sevilla y Granada son ciudades ___ (España).',                          correct: 'españolas' },
      ],
    },

    {
      id: '14.4',
      title: 'Сопоставьте окончание и шаблон',
      type: 'match',
      instructions: 'К какой группе относится прилагательное национальности?',
      pool: ['−o → −a (4 формы)', '−a / −e / −í (одна форма для рода)', '−согл → +a в фем.'],
      questions: [
        { id: 'q1', prompt: '<em>chileno</em>',         correct: '−o → −a (4 формы)' },
        { id: 'q2', prompt: '<em>belga</em>',           correct: '−a / −e / −í (одна форма для рода)' },
        { id: 'q3', prompt: '<em>canadiense</em>',       correct: '−a / −e / −í (одна форма для рода)' },
        { id: 'q4', prompt: '<em>marroquí</em>',         correct: '−a / −e / −í (одна форма для рода)' },
        { id: 'q5', prompt: '<em>portugués</em>',        correct: '−согл → +a в фем.' },
        { id: 'q6', prompt: '<em>alemán</em>',           correct: '−согл → +a в фем.' },
        { id: 'q7', prompt: '<em>cubano</em>',           correct: '−o → −a (4 формы)' },
        { id: 'q8', prompt: '<em>vietnamita</em>',       correct: '−a / −e / −í (одна форма для рода)' },
      ],
    },

    {
      id: '14.5',
      title: 'Совместный род — м + ж',
      type: 'fill',
      instructions: 'Поставьте национальность в форме совместного рода (м. р. мн. ч.).',
      questions: [
        { id: 'q1', prompt: 'Iván y Haydée son ___ (Cuba).',                  correct: 'cubanos' },
        { id: 'q2', prompt: 'Pierre y Marie son ___ (Francia).',                correct: 'franceses' },
        { id: 'q3', prompt: 'Hans y Greta son ___ (Alemania).',                  correct: 'alemanes' },
        { id: 'q4', prompt: 'Tom y Lucy son ___ (Inglaterra).',                   correct: 'ingleses' },
        { id: 'q5', prompt: 'Pablo y Ana son ___ (Chile).',                        correct: 'chilenos' },
        { id: 'q6', prompt: 'Hugo y Carmen son ___ (España).',                      correct: 'españoles' },
      ],
    },

    {
      id: '14.6',
      title: 'Тильда: с ней или без?',
      type: 'choice',
      instructions: 'Выберите форму с правильной диакритикой.',
      questions: [
        { id: 'q1', prompt: 'Это итальянец — м.: ___',         options: ['italiano', 'italiáno'], correct: 'italiano' },
        { id: 'q2', prompt: 'Это француженка: ___',              options: ['francésa', 'francesa'], correct: 'francesa', explanation: 'В фем. тильда исчезает.' },
        { id: 'q3', prompt: 'Это немцы (м., мн.): ___',           options: ['alemánes', 'alemanes'], correct: 'alemanes' },
        { id: 'q4', prompt: 'Это иранец (м., ед.): ___',           options: ['irani', 'iraní'], correct: 'iraní' },
        { id: 'q5', prompt: 'Это португальцы (м., мн.): ___',       options: ['portugueses', 'portuguéses'], correct: 'portugueses' },
        { id: 'q6', prompt: 'Это японка: ___',                       options: ['japónesa', 'japonesa'], correct: 'japonesa' },
      ],
    },

    {
      id: '14.7',
      title: 'Восполните мини-текст',
      type: 'fill',
      instructions: 'Поставьте национальность в нужной форме.',
      questions: [
        { id: 'q1', prompt: 'Mi vecino es ___ (Italia).',                       correct: 'italiano' },
        { id: 'q2', prompt: 'Mi vecina es ___ (Italia).',                        correct: 'italiana' },
        { id: 'q3', prompt: 'Mis vecinos son ___ (Italia).',                      correct: 'italianos' },
        { id: 'q4', prompt: 'La capital ___ (Bélgica) es Bruselas.',                correct: 'belga' },
        { id: 'q5', prompt: 'La capital ___ (Marruecos) es Rabat.',                  correct: 'marroquí' },
        { id: 'q6', prompt: 'Me encantan los bombones ___ (Bélgica).',                correct: 'belgas' },
        { id: 'q7', prompt: 'A Carla le gusta mucho la comida ___ (España).',           correct: 'española' },
        { id: 'q8', prompt: 'Mis amigas son ___ (Vietnam).',                              correct: 'vietnamitas' },
      ],
    },

    {
      id: '14.8',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой согласования или диакритики.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['una amiga chilena', 'un amigo chileno', 'unos amigos chilenos', 'unas amigas chileno'], correct: 'unas amigas chileno', explanation: 'Согласование: фем. мн. → <em>chilenas</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Soy francesa.', 'Soy francésa.', 'Es francés.', 'Son franceses.'], correct: 'Soy francésa.', explanation: 'В фем. тильда исчезает.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['una amiga belga', 'un amigo belgo', 'unas amigas belgas', 'unos amigos belgas'], correct: 'un amigo belgo', explanation: '<em>belga</em> не меняется по роду.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['unos chicos alemanes', 'unas chicas alemanes', 'unas chicas alemanas', 'una chica alemana'], correct: 'unas chicas alemanes', explanation: 'Фем. мн. → <em>alemanas</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Iván y Haydée son cubanos.', 'Iván y Haydée son cubanas.', 'Iván es cubano.', 'Haydée es cubana.'], correct: 'Iván y Haydée son cubanas.', explanation: 'm + f → м. р. мн. ч.' },
      ],
    },

    {
      id: '14.9',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите услышанное полностью, со всеми диакритиками.',
      questions: [
        { id: 'q1', prompt: '', audio: 'soy chileno',                              correct: ['soy chileno', 'soy chileno.'] },
        { id: 'q2', prompt: '', audio: 'una amiga chilena',                         correct: ['una amiga chilena', 'una amiga chilena.'] },
        { id: 'q3', prompt: '', audio: 'somos cubanos',                              correct: ['somos cubanos', 'somos cubanos.'] },
        { id: 'q4', prompt: '', audio: 'la capital portuguesa es Lisboa',             correct: ['la capital portuguesa es Lisboa', 'la capital portuguesa es Lisboa.'] },
        { id: 'q5', prompt: '', audio: 'unos amigos alemanes',                         correct: ['unos amigos alemanes', 'unos amigos alemanes.'] },
      ],
    },

    {
      id: '14.10',
      title: 'Перепишите фразу',
      type: 'fill',
      instructions: 'Перепишите так, как сказал бы носитель.',
      questions: [
        { id: 'q1', prompt: '<em>Soy francésa.</em> →',                  correct: ['Soy francesa.', 'Soy francesa'] },
        { id: 'q2', prompt: '<em>Una amiga chileno.</em> →',              correct: ['Una amiga chilena.', 'Una amiga chilena'] },
        { id: 'q3', prompt: '<em>Somos belgos.</em> →',                    correct: ['Somos belgas.', 'Somos belgas'] },
        { id: 'q4', prompt: '<em>Iván y Haydée son cubanas.</em> →',        correct: ['Iván y Haydée son cubanos.', 'Iván y Haydée son cubanos'] },
        { id: 'q5', prompt: '<em>Unas chicas alemanes.</em> →',              correct: ['Unas chicas alemanas.', 'Unas chicas alemanas'] },
      ],
    },
  ],
};
