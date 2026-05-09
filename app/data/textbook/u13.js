// ============================================================
// Unidad 13 — Adjetivos calificativos (un coche pequeño)
// Образование женского рода и множественного числа,
// согласование, особенности (buen/buena, mal/mala перед существительным).
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u13 = {
  id: 'u13',
  number: 13,
  title: { es: 'un coche pequeño', topic: 'Adjetivos calificativos' },
  topicRu: 'Качественные прилагательные: формы и согласование',

  theory: [
    {
      type: 'rule',
      es: 'Los <strong>adjetivos calificativos</strong> añaden información sobre una persona, animal o cosa: <em>pequeño, alta, cansados, inteligentes…</em>',
      ru: '<strong>Качественные прилагательные</strong> описывают характеристику. Согласуются с существительным по роду и числу.',
      examples: [
        { es: 'un coche pequeño, una casa pequeña', ru: 'маленькая машина, маленький дом' },
        { es: 'Rosi es alta.', ru: 'Роси высокая.' },
        { es: 'Estamos cansados.', ru: 'Мы устали.' },
      ],
    },
    {
      type: 'heading',
      text: 'Образование женского рода',
    },
    {
      type: 'table',
      caption: 'Окончание мужского → форма женского',
      columns: ['Masculino', 'Femenino', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['оканч. на <strong>−o</strong>', '→ <strong>−a</strong>', '<em>pequeño / pequeña</em>'],
        ['оканч. на <strong>−e</strong>', '<em>не меняется</em>', '<em>inteligente / inteligente</em>'],
        ['оканч. на <strong>согласную</strong>', '<em>не меняется</em>', '<em>joven / joven</em>'],
        ['оканч. на <strong>−or, −án, −ón, −ín</strong>', '→ <strong>+a</strong>', '<em>encantador / encantadora, charlatán / charlatana</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Los adjetivos de color como <em>marrón, gris, azul, naranja</em> no cambian en el femenino: <em>un gorro marrón, una bufanda marrón</em>.',
      ru: 'Цветовые прилагательные на согласную (<em>marrón, gris, azul</em>) и заимствования (<em>naranja</em>) в женском роде <strong>не меняются</strong>.',
    },
    {
      type: 'heading',
      text: 'Образование множественного числа',
    },
    {
      type: 'table',
      caption: 'Singular → plural',
      columns: ['Singular', 'Plural', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['оканч. на <strong>гласную</strong>', '+ <strong>s</strong>', '<em>alto → altos, alta → altas</em>'],
        ['оканч. на <strong>согласную</strong>', '+ <strong>es</strong>', '<em>azul → azules, joven → jóvenes</em>'],
        ['оканч. на <strong>−z</strong>', '<strong>−z → −ces</strong>', '<em>feliz → felices</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Algunos adjetivos pierden o ganan tilde: <em>joven → jóvenes</em> (gana tilde para mantener el acento), <em>charlatán → charlatanes</em> (pierde tilde), <em>marrón → marrones</em> (pierde tilde).',
      ru: 'Из-за правил ударения тильда может появляться или исчезать: <em>joven → jóvenes</em> (появляется), <em>charlatán → charlatanes</em>, <em>marrón → marrones</em> (исчезает).',
    },
    {
      type: 'heading',
      text: 'Согласование',
    },
    {
      type: 'rule',
      es: 'El adjetivo tiene la misma <strong>forma</strong> (masculino o femenino, singular o plural) que la persona, animal o cosa a la que se refiere.',
      ru: 'Прилагательное всегда согласуется с существительным по роду и числу.',
      examples: [
        { es: 'Susana y Elena son muy trabajadoras.', ru: 'Сусана и Елена очень трудолюбивые.' },
        { es: 'Me he comprado unos zapatos negros.', ru: 'Я купил чёрные ботинки.' },
        { es: 'En Guatemala hay ruinas muy antiguas.', ru: 'В Гватемале есть очень древние руины.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Si juntamos un nombre <em>masculino</em> y un <em>femenino</em>, el adjetivo va en <strong>masculino plural</strong>: <em>Antonio y Marta son altos y morenos.</em>',
      ru: 'Если в группе и мужской, и женский род, прилагательное в м. р. мн. ч.: <em>Antonio y Marta son altos.</em>',
    },
    {
      type: 'heading',
      text: 'Местоположение прилагательного',
    },
    {
      type: 'rule',
      es: 'Lo más común: <em>ser/estar</em> + adjetivo (<em>Roberto es simpático</em>) o <em>nombre</em> + adjetivo (<em>María tiene los ojos azules</em>).',
      ru: 'Чаще всего прилагательное идёт после <em>ser/estar</em> или после существительного: <em>Roberto es simpático</em>; <em>María tiene los ojos azules</em>.',
    },
    {
      type: 'atencion',
      es: '<em>bueno/buena</em> y <em>malo/mala</em> pueden ir <strong>antes</strong> del nombre. Pero <em>bueno</em> pierde la <em>−o</em> ante un nombre masculino singular: <em>buen escritor</em>; lo mismo con <em>malo</em>: <em>mal ejemplo</em>. En femenino no pierden nada: <em>buena profesora, mala noticia</em>.',
      ru: 'Перед существительным <em>bueno → buen</em> (только перед м. р. ед. ч.) и <em>malo → mal</em>. В женском роде усечения нет: <em>buena profesora, mala noticia</em>.',
    },
  ],

  exercises: [
    {
      id: '13.1',
      title: 'Согласование: поставьте прилагательное в нужной форме',
      type: 'fill',
      instructions: 'Запишите прилагательное в правильной форме (рода и числа).',
      questions: [
        { id: 'q1',  prompt: 'Vivo en un piso (pequeño) ___.',                              correct: 'pequeño' },
        { id: 'q2',  prompt: 'Rosa tiene los ojos (verde) ___.',                              correct: 'verdes' },
        { id: 'q3',  prompt: 'Es (rubio) ___ y tiene el pelo (corto) ___ y (rizado) ___.',     correct: ['rubia, corto, rizado', 'rubia corto rizado'], placeholder: 'rubia, corto, rizado', explanation: 'Роса (она) — rubia; pelo — corto y rizado (м. р. ед. ч.).' },
        { id: 'q4',  prompt: 'Es muy (simpático) ___ y (alegre) ___.',                          correct: ['simpática, alegre', 'simpática alegre'], placeholder: 'simpática, alegre' },
        { id: 'q5',  prompt: 'Gerardo y Ana son muy (inteligente) ___.',                         correct: 'inteligentes' },
        { id: 'q6',  prompt: 'Me gustan las rosas (blanco) ___.',                                  correct: 'blancas' },
        { id: 'q7',  prompt: 'Don Santiago es una persona (encantador) ___.',                      correct: 'encantadora', explanation: 'Слова на <em>-or</em> в фем. — <em>+a</em>.' },
        { id: 'q8',  prompt: 'Chus y Lolo no son (feliz) ___. Están siempre (enfadado) ___.',      correct: ['felices, enfadados', 'felices enfadados'], placeholder: 'felices, enfadados' },
        { id: 'q9',  prompt: 'Me he comprado una camisa (rojo) ___ y unos pantalones (gris) ___.',  correct: ['roja, grises', 'roja grises'], placeholder: 'roja, grises' },
        { id: 'q10', prompt: 'Las hijas de Andrés son muy (joven) ___.',                              correct: 'jóvenes', explanation: 'Появляется тильда: <em>jóvenes</em>.' },
        { id: 'q11', prompt: 'Begoña lleva una falda (marrón) ___ y una blusa (amarillo) ___.',        correct: ['marrón, amarilla', 'marrón amarilla'], placeholder: 'marrón, amarilla', explanation: '<em>marrón</em> в фем. не меняется.' },
      ],
    },

    {
      id: '13.2',
      title: 'Совместный род: m + f → masculino plural',
      type: 'fill',
      instructions: 'Поставьте прилагательное правильно — внимание на совместный род.',
      questions: [
        { id: 'q1', prompt: 'Antonio y Marta son (alto) ___.',                            correct: 'altos' },
        { id: 'q2', prompt: 'Pablo y Ana son (moreno) ___.',                                correct: 'morenos' },
        { id: 'q3', prompt: 'Gabi lleva una camisa y un pantalón (negro) ___.',              correct: 'negros' },
        { id: 'q4', prompt: 'Mis hijos son muy (cariñoso) ___.',                              correct: 'cariñosos' },
        { id: 'q5', prompt: 'Susana y sus hermanas son (rubio) ___.',                          correct: 'rubias', explanation: 'Все женщины — фем. мн. ч.' },
        { id: 'q6', prompt: 'Mis vecinos son (italiano) ___.',                                  correct: 'italianos' },
      ],
    },

    {
      id: '13.3',
      title: 'buen/buena vs bueno; mal/mala vs malo',
      type: 'choice',
      instructions: 'Выберите правильную форму. Помните: <em>buen / mal</em> ставится только перед существительным м. р. ед. ч.',
      questions: [
        { id: 'q1', prompt: 'Julio es un ___ escritor.',         options: ['bueno', 'buen'], correct: 'buen' },
        { id: 'q2', prompt: 'Luisa es una ___ profesora.',         options: ['buena', 'buen'], correct: 'buena' },
        { id: 'q3', prompt: 'Felipe es un ___ ejemplo para sus hijos.', options: ['malo', 'mal'], correct: 'mal' },
        { id: 'q4', prompt: 'Tengo una ___ noticia.',                  options: ['mala', 'mal'], correct: 'mala' },
        { id: 'q5', prompt: 'Roberto es un chico ___.',                 options: ['bueno', 'buen'], correct: 'bueno', explanation: 'После существительного — полная форма.' },
        { id: 'q6', prompt: 'Es un día ___.',                            options: ['malo', 'mal'], correct: 'malo', explanation: 'После существительного — полная форма.' },
      ],
    },

    {
      id: '13.4',
      title: 'Множественное число прилагательных',
      type: 'fill',
      instructions: 'Поставьте прилагательное во множественное число (тот же род, что и в скобках).',
      questions: [
        { id: 'q1', prompt: 'unos chicos (alto) ___',                          correct: 'altos' },
        { id: 'q2', prompt: 'unas chicas (alto, fem.) ___',                     correct: 'altas' },
        { id: 'q3', prompt: 'unos pantalones (verde) ___',                      correct: 'verdes' },
        { id: 'q4', prompt: 'unas flores (azul) ___',                            correct: 'azules' },
        { id: 'q5', prompt: 'unos calcetines (gris) ___',                         correct: 'grises' },
        { id: 'q6', prompt: 'unas faldas (marrón) ___',                            correct: 'marrones', explanation: 'Тильда исчезает.' },
        { id: 'q7', prompt: 'unos hombres (joven) ___',                              correct: 'jóvenes', explanation: 'Появляется тильда.' },
        { id: 'q8', prompt: 'unas chicas (feliz) ___',                                correct: 'felices' },
      ],
    },

    {
      id: '13.5',
      title: 'Сопоставьте окончание и форму ж. р.',
      type: 'match',
      instructions: 'К какому шаблону относится каждое прилагательное?',
      pool: ['−o → −a', '−e (не меняется)', '−согл (не меняется)', '−or → +a'],
      questions: [
        { id: 'q1', prompt: '<em>simpático</em>',     correct: '−o → −a' },
        { id: 'q2', prompt: '<em>inteligente</em>',    correct: '−e (не меняется)' },
        { id: 'q3', prompt: '<em>joven</em>',          correct: '−согл (не меняется)' },
        { id: 'q4', prompt: '<em>encantador</em>',     correct: '−or → +a' },
        { id: 'q5', prompt: '<em>azul</em>',           correct: '−согл (не меняется)' },
        { id: 'q6', prompt: '<em>amable</em>',         correct: '−e (не меняется)' },
        { id: 'q7', prompt: '<em>trabajador</em>',     correct: '−or → +a' },
        { id: 'q8', prompt: '<em>cansado</em>',         correct: '−o → −a' },
      ],
    },

    {
      id: '13.6',
      title: 'Опишите предмет / человека',
      type: 'fill',
      instructions: 'Дополните фразу прилагательным в нужной форме.',
      questions: [
        { id: 'q1', prompt: 'Susana tiene los ojos (azul) ___.',                            correct: 'azules' },
        { id: 'q2', prompt: 'La amapola es una flor (rojo) ___.',                            correct: 'roja' },
        { id: 'q3', prompt: 'El español es un idioma (fácil) ___.',                            correct: 'fácil' },
        { id: 'q4', prompt: 'Don Tomás es un profesor (preferido) ___.',                       correct: 'preferido' },
        { id: 'q5', prompt: 'La (preferido) ___ comida de Peter es la tortilla de patatas.',    correct: 'preferida' },
        { id: 'q6', prompt: 'En Toledo hay muchos edificios (antiguo) ___.',                     correct: 'antiguos' },
        { id: 'q7', prompt: 'Esta camisa y estos pantalones están muy viejos. Necesito ropa (nuevo) ___.', correct: 'nueva' },
        { id: 'q8', prompt: 'Mi (preferido) ___ color es el rojo.',                                correct: 'preferido' },
      ],
    },

    {
      id: '13.7',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма прилагательного с ошибкой.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['una camisa roja', 'unas camisas rojas', 'una camisa rojo', 'un vestido rojo'], correct: 'una camisa rojo', explanation: 'Согласование по роду.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['unos chicos jóvenes', 'unas chicas jóvenes', 'unos chicos joven', 'una chica joven'], correct: 'unos chicos joven', explanation: 'Множ. число с тильдой: <em>jóvenes</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['un buen libro', 'una buena novela', 'un bueno libro', 'una buena idea'], correct: 'un bueno libro', explanation: 'Перед м. р. ед. ч. — <em>buen</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['un mal día', 'un día malo', 'una mala noticia', 'una mal noticia'], correct: 'una mal noticia', explanation: 'В фем. — <em>mala</em>, без усечения.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['unos calcetines marrones', 'una bufanda marrona', 'una bufanda marrón', 'unos zapatos marrones'], correct: 'una bufanda marrona', explanation: '<em>marrón</em> в фем. не меняется.' },
      ],
    },

    {
      id: '13.8',
      title: 'Цвета и материалы',
      type: 'fill',
      instructions: 'Цвета на согласную (marrón, gris, azul) не меняются по роду. Поставьте форму.',
      questions: [
        { id: 'q1', prompt: 'una blusa (rojo) ___ y unos pantalones (azul) ___',           correct: ['roja, azules', 'roja azules'], placeholder: 'roja, azules' },
        { id: 'q2', prompt: 'un coche (gris) ___ y una bicicleta (gris) ___',                correct: ['gris, gris', 'gris gris'], placeholder: 'gris, gris' },
        { id: 'q3', prompt: 'una falda (marrón) ___',                                          correct: 'marrón' },
        { id: 'q4', prompt: 'unos jerseys (negro) ___',                                          correct: 'negros' },
        { id: 'q5', prompt: 'unas flores (amarillo) ___',                                          correct: 'amarillas' },
        { id: 'q6', prompt: 'unos calcetines (azul) ___',                                            correct: 'azules' },
      ],
    },

    {
      id: '13.9',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите услышанное полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Marta es alta y simpática',                  correct: ['Marta es alta y simpática', 'Marta es alta y simpática.'] },
        { id: 'q2', prompt: '', audio: 'unos zapatos negros',                          correct: ['unos zapatos negros', 'unos zapatos negros.'] },
        { id: 'q3', prompt: '', audio: 'un buen profesor',                              correct: ['un buen profesor', 'un buen profesor.'] },
        { id: 'q4', prompt: '', audio: 'Antonio y Marta son altos',                      correct: ['Antonio y Marta son altos', 'Antonio y Marta son altos.'] },
        { id: 'q5', prompt: '', audio: 'una mala noticia',                                correct: ['una mala noticia', 'una mala noticia.'] },
      ],
    },

    {
      id: '13.10',
      title: 'Перепишите фразу',
      type: 'fill',
      instructions: 'Перепишите так, как сказал бы носитель.',
      questions: [
        { id: 'q1', prompt: '<em>Marta y Pablo son altas.</em> →',         correct: ['Marta y Pablo son altos.', 'Marta y Pablo son altos'] },
        { id: 'q2', prompt: '<em>Es un bueno libro.</em> →',                correct: ['Es un buen libro.', 'Es un buen libro'] },
        { id: 'q3', prompt: '<em>Una bufanda marrona.</em> →',                correct: ['Una bufanda marrón.', 'Una bufanda marrón'] },
        { id: 'q4', prompt: '<em>Las hijas de Andrés son muy joven.</em> →',  correct: ['Las hijas de Andrés son muy jóvenes.', 'Las hijas de Andrés son muy jóvenes'] },
        { id: 'q5', prompt: '<em>Tengo una mal noticia.</em> →',              correct: ['Tengo una mala noticia.', 'Tengo una mala noticia'] },
      ],
    },
  ],
};
