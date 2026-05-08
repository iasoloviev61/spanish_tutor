// ============================================================
// Unidad 2 — Masculino, femenino (2)
// Род существительных-вещей и животных.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u02 = {
  id: 'u02',
  number: 2,
  title: { es: 'el libro, la mesa', topic: 'Masculino, femenino (2)' },
  topicRu: 'Род существительных-вещей и животных',

  theory: [
    {
      type: 'rule',
      es: 'Los <strong>nombres de cosas</strong> también tienen género: pueden ser masculinos o femeninos.',
      ru: 'Существительные-вещи в испанском <strong>тоже имеют род</strong>. Род определить часто можно по окончанию, но есть исключения — их нужно учить.',
    },
    {
      type: 'table',
      caption: 'Род по окончанию',
      columns: ['Окончание', 'Род', 'Примеры', 'Исключения'],
      colClasses: ['col-pattern', 'col-result', 'col-ex', 'col-ex'],
      rows: [
        ['<strong>−o</strong>',          'masculino',  '<em>el libro, el coche, el museo</em>', '<em>la mano, la foto, la moto, la radio</em>'],
        ['<strong>−a</strong>',          'femenino',   '<em>la casa, la mesa, la silla</em>',   '<em>el día, el idioma, el problema, el mapa, el planeta, el clima</em>'],
        ['<strong>−ción / −sión</strong>', 'femenino', '<em>la canción, la habitación, la televisión</em>', '—'],
        ['<strong>−dad / −tad</strong>', 'femenino',   '<em>la ciudad, la universidad, la libertad</em>', '—'],
        ['<strong>−e / согласная</strong>', 'может быть и тем, и другим', '<em>el coche, el lápiz</em> · <em>la noche, la flor</em>', 'учить с артиклем'],
      ],
    },
    {
      type: 'atencion',
      es: 'Дни недели — всегда masculinos: <em>el lunes, el martes, el miércoles…</em> Сложные существительные на -as тоже masculinos: <em>el paraguas, el cumpleaños</em>.',
      ru: 'Окончание здесь обманчивое — род фиксированный.',
    },
    {
      type: 'heading',
      text: 'Названия животных',
    },
    {
      type: 'rule',
      es: 'Многие животные имеют <strong>один зафиксированный род</strong> и не делятся на «он/она»: одно слово используется для самцов и самок.',
      ru: 'Чтобы уточнить пол, добавляют <em>macho</em> (самец) или <em>hembra</em> (самка): <em>la jirafa macho, el ratón hembra</em>.',
      examples: [
        { es: 'el pez, el pájaro, el ratón, el conejo', ru: 'только masculino' },
        { es: 'la jirafa, la serpiente, la rana, la sardina', ru: 'только femenino' },
      ],
    },
    {
      type: 'rule',
      es: 'У <strong>домашних и хорошо знакомых</strong> животных есть отдельные формы для самца и самки.',
      ru: 'Используются как разные слова или как пара masculino/femenino.',
      examples: [
        { es: 'el gato — la gata', ru: 'кот / кошка' },
        { es: 'el perro — la perra', ru: 'пёс / собака' },
        { es: 'el caballo — la yegua', ru: 'конь / кобыла' },
        { es: 'el toro — la vaca', ru: 'бык / корова' },
        { es: 'el león — la leona', ru: 'лев / львица' },
        { es: 'el gallo — la gallina', ru: 'петух / курица' },
      ],
    },
  ],

  exercises: [
    {
      id: '2.1',
      title: 'Поставьте артикль el или la',
      type: 'choice',
      instructions: 'Только определённый артикль (<em>el</em> / <em>la</em>).',
      questions: [
        { id: 'q1',  prompt: '___ libro',        options: ['el', 'la'], correct: 'el' },
        { id: 'q2',  prompt: '___ mesa',         options: ['el', 'la'], correct: 'la' },
        { id: 'q3',  prompt: '___ mano',         options: ['el', 'la'], correct: 'la', explanation: 'Исключение: -o, но femenino.' },
        { id: 'q4',  prompt: '___ día',          options: ['el', 'la'], correct: 'el', explanation: 'Исключение: -a, но masculino.' },
        { id: 'q5',  prompt: '___ canción',      options: ['el', 'la'], correct: 'la' },
        { id: 'q6',  prompt: '___ universidad',  options: ['el', 'la'], correct: 'la' },
        { id: 'q7',  prompt: '___ problema',     options: ['el', 'la'], correct: 'el', explanation: 'Все -ema, -ama → masculino.' },
        { id: 'q8',  prompt: '___ foto',         options: ['el', 'la'], correct: 'la', explanation: 'Сокращение от <em>la fotografía</em>.' },
        { id: 'q9',  prompt: '___ paraguas',     options: ['el', 'la'], correct: 'el', explanation: 'Сложное слово (parar+aguas) — masculino.' },
        { id: 'q10', prompt: '___ leche',        options: ['el', 'la'], correct: 'la' },
        { id: 'q11', prompt: '___ lápiz',        options: ['el', 'la'], correct: 'el' },
        { id: 'q12', prompt: '___ luz',          options: ['el', 'la'], correct: 'la' },
      ],
    },

    {
      id: '2.2',
      title: 'Распределите слова по столбцам',
      type: 'choice',
      instructions: 'Решите для каждого слова — masculino (M) или femenino (F).',
      questions: [
        { id: 'q1',  prompt: '<em>cine</em>',        options: [{value:'M',label:'M (el)'},{value:'F',label:'F (la)'}], correct: 'M' },
        { id: 'q2',  prompt: '<em>idioma</em>',      options: [{value:'M',label:'M (el)'},{value:'F',label:'F (la)'}], correct: 'M' },
        { id: 'q3',  prompt: '<em>habitación</em>',  options: [{value:'M',label:'M (el)'},{value:'F',label:'F (la)'}], correct: 'F' },
        { id: 'q4',  prompt: '<em>museo</em>',       options: [{value:'M',label:'M (el)'},{value:'F',label:'F (la)'}], correct: 'M' },
        { id: 'q5',  prompt: '<em>noche</em>',       options: [{value:'M',label:'M (el)'},{value:'F',label:'F (la)'}], correct: 'F' },
        { id: 'q6',  prompt: '<em>moto</em>',        options: [{value:'M',label:'M (el)'},{value:'F',label:'F (la)'}], correct: 'F' },
        { id: 'q7',  prompt: '<em>mapa</em>',        options: [{value:'M',label:'M (el)'},{value:'F',label:'F (la)'}], correct: 'M' },
        { id: 'q8',  prompt: '<em>flor</em>',        options: [{value:'M',label:'M (el)'},{value:'F',label:'F (la)'}], correct: 'F' },
        { id: 'q9',  prompt: '<em>cumpleaños</em>',  options: [{value:'M',label:'M (el)'},{value:'F',label:'F (la)'}], correct: 'M' },
        { id: 'q10', prompt: '<em>libertad</em>',    options: [{value:'M',label:'M (el)'},{value:'F',label:'F (la)'}], correct: 'F' },
      ],
    },

    {
      id: '2.3',
      title: 'Слова-исключения',
      type: 'multi',
      instructions: 'Отметьте все исключения — слова, у которых род <strong>не</strong> совпадает с «общим» правилом по окончанию.',
      questions: [
        {
          id: 'q1',
          prompt: 'Что из перечисленного — исключение?',
          options: ['mano', 'libro', 'día', 'casa', 'problema', 'mesa', 'foto', 'idioma', 'planeta', 'museo'],
          correct: ['mano', 'día', 'problema', 'foto', 'idioma', 'planeta'],
          explanation: '<em>mano, foto</em> — на -o, но femenino. <em>día, problema, idioma, planeta</em> — на -a, но masculino.',
        },
      ],
    },

    {
      id: '2.4',
      title: 'Артикль для слов с типичным окончанием',
      type: 'fill',
      instructions: 'Допишите <em>el</em> или <em>la</em> перед существительным.',
      questions: [
        { id: 'q1', prompt: '___ universidad',  correct: 'la' },
        { id: 'q2', prompt: '___ noche',        correct: 'la' },
        { id: 'q3', prompt: '___ teléfono',     correct: 'el' },
        { id: 'q4', prompt: '___ televisión',   correct: 'la' },
        { id: 'q5', prompt: '___ ciudad',       correct: 'la' },
        { id: 'q6', prompt: '___ hotel',        correct: 'el' },
        { id: 'q7', prompt: '___ pan',          correct: 'el' },
        { id: 'q8', prompt: '___ sal',          correct: 'la' },
      ],
    },

    {
      id: '2.5',
      title: 'Окончания → род',
      type: 'choice',
      instructions: 'Какой род у слов с этим окончанием — без исключений?',
      questions: [
        { id: 'q1', prompt: '<em>−ción</em>',  options: ['masculino', 'femenino'], correct: 'femenino' },
        { id: 'q2', prompt: '<em>−sión</em>',  options: ['masculino', 'femenino'], correct: 'femenino' },
        { id: 'q3', prompt: '<em>−dad</em>',   options: ['masculino', 'femenino'], correct: 'femenino' },
        { id: 'q4', prompt: '<em>−tad</em>',   options: ['masculino', 'femenino'], correct: 'femenino' },
        { id: 'q5', prompt: '<em>−aje</em>',   options: ['masculino', 'femenino'], correct: 'masculino', explanation: '<em>el viaje, el paisaje, el garaje</em>.' },
      ],
    },

    {
      id: '2.6',
      title: 'Сопоставьте животных',
      type: 'match',
      instructions: 'К каждому самцу подберите самку.',
      pool: ['gata', 'perra', 'yegua', 'vaca', 'leona', 'gallina'],
      questions: [
        { id: 'q1', prompt: '<em>el gato</em>',    correct: 'gata' },
        { id: 'q2', prompt: '<em>el perro</em>',   correct: 'perra' },
        { id: 'q3', prompt: '<em>el caballo</em>', correct: 'yegua' },
        { id: 'q4', prompt: '<em>el toro</em>',    correct: 'vaca' },
        { id: 'q5', prompt: '<em>el león</em>',    correct: 'leona' },
        { id: 'q6', prompt: '<em>el gallo</em>',   correct: 'gallina' },
      ],
    },

    {
      id: '2.7',
      title: 'Дни недели и сложные слова',
      type: 'fill',
      instructions: 'Допишите артикль (все эти слова — masculino, даже если выглядят иначе).',
      questions: [
        { id: 'q1', prompt: '___ lunes',       correct: 'el' },
        { id: 'q2', prompt: '___ miércoles',   correct: 'el' },
        { id: 'q3', prompt: '___ paraguas',    correct: 'el' },
        { id: 'q4', prompt: '___ cumpleaños',  correct: 'el' },
        { id: 'q5', prompt: '___ jueves',      correct: 'el' },
      ],
    },

    {
      id: '2.8',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'Один артикль в каждом ряду — ошибочный.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['el problema', 'la mano', 'la día', 'la noche'],         correct: 'la día' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['el idioma', 'el agua', 'el ciudad', 'el mapa'],          correct: 'el ciudad' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['la canción', 'la habitación', 'la cumpleaños', 'la flor'], correct: 'la cumpleaños' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['el coche', 'el moto', 'la moto', 'el lápiz'],            correct: 'el moto' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['la foto', 'la radio', 'la planeta', 'la sal'],           correct: 'la planeta' },
      ],
    },

    {
      id: '2.9',
      title: 'Гарантированно femenino',
      type: 'multi',
      instructions: 'Какие из этих окончаний <strong>всегда</strong> делают слово женским родом?',
      questions: [
        {
          id: 'q1',
          prompt: 'Отметьте «всегда femenino»:',
          options: ['-ción', '-aje', '-dad', '-tad', '-sión', '-ema', '-or'],
          correct: ['-ción', '-dad', '-tad', '-sión'],
          explanation: '<em>-aje</em>, <em>-ema</em>, <em>-or</em> — обычно masculino.',
        },
      ],
    },

    {
      id: '2.10',
      title: 'Заполните по контексту',
      type: 'fill',
      instructions: 'Допишите верный артикль (<em>el</em> или <em>la</em>).',
      questions: [
        { id: 'q1', prompt: 'Hay ___ flor en ___ mesa.',           correct: 'una',                           placeholder: 'una' },
        { id: 'q2', prompt: '¿Cuál es ___ capital de España?',     correct: 'la' },
        { id: 'q3', prompt: 'Necesito ___ mapa de la ciudad.',     correct: 'el' },
        { id: 'q4', prompt: 'Tenemos ___ problema importante.',    correct: 'un',                            placeholder: 'un' },
        { id: 'q5', prompt: 'Compramos ___ pan en la panadería.',  correct: 'el' },
        { id: 'q6', prompt: 'Mi cumpleaños es ___ jueves.',        correct: 'el' },
      ],
    },

    {
      id: '2.11',
      title: 'Аудио: артикль + слово',
      type: 'fill',
      instructions: 'Послушайте и запишите словосочетание целиком (с артиклем и диакритикой).',
      questions: [
        { id: 'q1', prompt: '', audio: 'la habitación',  correct: ['la habitación'] },
        { id: 'q2', prompt: '', audio: 'el problema',    correct: ['el problema'] },
        { id: 'q3', prompt: '', audio: 'la universidad', correct: ['la universidad'] },
        { id: 'q4', prompt: '', audio: 'el día',         correct: ['el día'] },
        { id: 'q5', prompt: '', audio: 'la canción',     correct: ['la canción'] },
        { id: 'q6', prompt: '', audio: 'el paraguas',    correct: ['el paraguas'] },
      ],
    },

    {
      id: '2.12',
      title: 'Заполните: животные',
      type: 'fill',
      instructions: 'Запишите соответствующую форму (только слово, без артикля).',
      questions: [
        { id: 'q1', prompt: 'самка от <em>el gato</em> →',    correct: 'gata' },
        { id: 'q2', prompt: 'самец от <em>la vaca</em> →',     correct: 'toro' },
        { id: 'q3', prompt: 'самка от <em>el caballo</em> →',  correct: 'yegua' },
        { id: 'q4', prompt: 'самка от <em>el león</em> →',     correct: 'leona' },
        { id: 'q5', prompt: 'самец от <em>la gallina</em> →',  correct: 'gallo' },
        { id: 'q6', prompt: 'самка от <em>el perro</em> →',    correct: 'perra' },
      ],
    },
  ],
};
