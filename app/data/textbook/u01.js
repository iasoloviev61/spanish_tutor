// ============================================================
// Unidad 1 — Masculino, femenino (1)
// Род существительных, обозначающих людей.
// Правила пересказаны своими словами; примеры и упражнения —
// оригинальные, на типичной A1-лексике.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u01 = {
  id: 'u01',
  number: 1,
  title: { es: 'el hijo, la hija', topic: 'Masculino, femenino (1)' },
  topicRu: 'Род существительных-людей: формы и образование',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'En español, los <strong>nombres referidos a personas</strong> son <em>masculinos</em> (hombres) o <em>femeninos</em> (mujeres).',
      ru: '<strong>Существительные, обозначающие людей</strong>, бывают мужского рода (про мужчин) или женского рода (про женщин). Род нужно знать всегда — от него зависят артикль и согласование прилагательных.',
      examples: [
        { es: 'el hijo', ru: 'сын' },
        { es: 'la hija', ru: 'дочь' },
        { es: 'el doctor', ru: 'врач (м)' },
        { es: 'la doctora', ru: 'врач (ж)' },
      ],
    },
    {
      type: 'heading',
      text: 'Образование женского рода',
    },
    {
      type: 'table',
      caption: 'Базовые модели',
      columns: ['Masculino', 'Femenino', 'Ejemplos'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['оканч. на <strong>−o, −e</strong>', '→ <strong>−a</strong>', '<em>el niño / la niña, el cocinero / la cocinera</em>'],
        ['оканч. на <strong>согласную</strong>', '→ <strong>+ a</strong>', '<em>el profesor / la profesora, el doctor / la doctora</em>'],
        ['оканч. на <strong>−ante, −ista</strong>', '<em>не меняется</em>', '<em>el / la estudiante, el / la pianista</em>'],
        ['<strong>особые пары</strong>', '—', '<em>actor / actriz, rey / reina, alcalde / alcaldesa</em>'],
        ['<strong>разные слова</strong>', '—', '<em>el padre / la madre, el marido / la mujer, el papá / la mamá</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'Algunos nombres tienen <strong>dos formas válidas</strong> de femenino: la tradicional y la igual al masculino.',
      ru: 'У части существительных-профессий есть <strong>две допустимые формы женского рода</strong>: «классическая» и совпадающая с мужской. Обе используются.',
      examples: [
        { es: 'el médico — la médica / la médico', ru: 'врач' },
        { es: 'el jefe — la jefa / la jefe', ru: 'начальник' },
      ],
    },
    {
      type: 'rule',
      es: 'Algunos nombres son <strong>invariables</strong>: la forma es la misma para hombre y mujer; sólo cambia el artículo.',
      ru: 'Часть слов <strong>не меняется по роду</strong> — отличается только артикль (<em>el / la</em>).',
      examples: [
        { es: 'el / la modelo', ru: 'модель' },
        { es: 'el / la piloto', ru: 'пилот' },
        { es: 'el / la joven', ru: 'молодой человек / девушка' },
        { es: 'el / la paciente', ru: 'пациент(ка)' },
      ],
    },
    {
      type: 'atencion',
      es: 'Прилагательные и местоимения, стоящие при существительном, тоже меняются по роду: <em>aquel chico rubio</em> — <em>aquella chica rubia</em>; <em>un hombre alto</em> — <em>una mujer alta</em>.',
      ru: 'Связанные слова (артикль, прилагательное, указательное местоимение) обязательно согласуются по роду с существительным.',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '1.1',
      title: 'Образуйте женский род',
      type: 'fill',
      instructions: 'Запишите форму женского рода. Помните о диакритике (ударениях).',
      questions: [
        { id: 'q1',  prompt: '<em>el señor</em> →',       correct: 'señora' },
        { id: 'q2',  prompt: '<em>el niño</em> →',        correct: 'niña' },
        { id: 'q3',  prompt: '<em>el profesor</em> →',    correct: 'profesora' },
        { id: 'q4',  prompt: '<em>el doctor</em> →',      correct: 'doctora' },
        { id: 'q5',  prompt: '<em>el escritor</em> →',    correct: 'escritora' },
        { id: 'q6',  prompt: '<em>el hermano</em> →',     correct: 'hermana' },
        { id: 'q7',  prompt: '<em>el amigo</em> →',       correct: 'amiga' },
        { id: 'q8',  prompt: '<em>el camarero</em> →',    correct: 'camarera' },
        { id: 'q9',  prompt: '<em>el bailarín</em> →',    correct: 'bailarina', explanation: 'Ударение в женском роде уходит — <em>bailarina</em>, без тильды.' },
        { id: 'q10', prompt: '<em>el rey</em> →',         correct: 'reina',     explanation: 'Особая пара.' },
        { id: 'q11', prompt: '<em>el actor</em> →',       correct: 'actriz',    explanation: 'Особая пара: -tor → -triz.' },
        { id: 'q12', prompt: '<em>el alcalde</em> →',     correct: 'alcaldesa', explanation: 'Особая пара: -e → -esa.' },
      ],
    },

    {
      id: '1.2',
      title: 'Образуйте мужской род',
      type: 'fill',
      instructions: 'Дано слово в женском роде — напишите соответствующее в мужском.',
      questions: [
        { id: 'q1', prompt: '<em>la madre</em> →',      correct: 'padre' },
        { id: 'q2', prompt: '<em>la mujer</em> →',      correct: ['marido', 'hombre'], explanation: '<em>la mujer</em> = «жена» → <em>el marido</em>; «женщина» → <em>el hombre</em>.' },
        { id: 'q3', prompt: '<em>la mamá</em> →',       correct: 'papá' },
        { id: 'q4', prompt: '<em>la hija</em> →',       correct: 'hijo' },
        { id: 'q5', prompt: '<em>la doctora</em> →',    correct: 'doctor' },
        { id: 'q6', prompt: '<em>la profesora</em> →',  correct: 'profesor' },
        { id: 'q7', prompt: '<em>la actriz</em> →',     correct: 'actor' },
        { id: 'q8', prompt: '<em>la reina</em> →',      correct: 'rey' },
        { id: 'q9', prompt: '<em>la alcaldesa</em> →',  correct: 'alcalde' },
        { id: 'q10', prompt: '<em>la abuela</em> →',    correct: 'abuelo' },
      ],
    },

    {
      id: '1.3',
      title: 'Какой артикль — el или la?',
      type: 'choice',
      instructions: 'Выберите верный определённый артикль для каждого человека.',
      questions: [
        { id: 'q1',  prompt: '___ profesora',     options: ['el', 'la'], correct: 'la' },
        { id: 'q2',  prompt: '___ taxista (мужчина)', options: ['el', 'la'], correct: 'el', explanation: 'Слова на <em>-ista</em> не меняются — артикль показывает род.' },
        { id: 'q3',  prompt: '___ estudiante (девушка)', options: ['el', 'la'], correct: 'la' },
        { id: 'q4',  prompt: '___ rey',          options: ['el', 'la'], correct: 'el' },
        { id: 'q5',  prompt: '___ pianista (девушка)', options: ['el', 'la'], correct: 'la' },
        { id: 'q6',  prompt: '___ modelo (мужчина)', options: ['el', 'la'], correct: 'el', explanation: '<em>modelo</em> — инвариантно, артикль показывает род.' },
        { id: 'q7',  prompt: '___ joven (девушка)', options: ['el', 'la'], correct: 'la' },
        { id: 'q8',  prompt: '___ médica',        options: ['el', 'la'], correct: 'la' },
        { id: 'q9',  prompt: '___ paciente (мужчина)', options: ['el', 'la'], correct: 'el' },
        { id: 'q10', prompt: '___ enfermera',     options: ['el', 'la'], correct: 'la' },
      ],
    },

    {
      id: '1.4',
      title: 'Слова, у которых форма не меняется по роду',
      type: 'multi',
      instructions: 'Отметьте все существительные, у которых одна форма для мужчины и для женщины (отличает только артикль).',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие из этих слов <em>не меняются</em> по роду?',
          options: ['estudiante', 'profesor', 'pianista', 'cocinero', 'taxista', 'niño', 'joven', 'paciente', 'cantante', 'señor'],
          correct: ['estudiante', 'pianista', 'taxista', 'joven', 'paciente', 'cantante'],
          explanation: 'Инвариантны слова на <em>-ante, -ista</em>, а также <em>joven, paciente, modelo, piloto</em>.',
        },
      ],
    },

    {
      id: '1.5',
      title: 'Перепишите фразу в противоположном роде',
      type: 'fill',
      instructions: 'Замените и существительное, и связанные с ним слова (артикль, прилагательное).',
      questions: [
        { id: 'q1', prompt: '<em>El profesor es alto.</em> →',          correct: 'La profesora es alta.', placeholder: 'La profesora ...' },
        { id: 'q2', prompt: '<em>Mi hermano es simpático.</em> →',      correct: 'Mi hermana es simpática.', placeholder: 'Mi hermana ...' },
        { id: 'q3', prompt: '<em>Un actor famoso.</em> →',              correct: ['Una actriz famosa.', 'Una actriz famosa'] , placeholder: 'Una actriz ...' },
        { id: 'q4', prompt: '<em>El rey español.</em> →',               correct: ['La reina española.', 'La reina española'] },
        { id: 'q5', prompt: '<em>Aquel chico rubio.</em> →',            correct: ['Aquella chica rubia.', 'Aquella chica rubia'] },
      ],
    },

    {
      id: '1.6',
      title: 'Сопоставьте мужскую и женскую форму',
      type: 'match',
      instructions: 'Подберите для каждого мужского слова женскую пару из списка справа.',
      pool: ['actriz', 'reina', 'mujer', 'mamá', 'alcaldesa', 'madre', 'yegua', 'hija'],
      questions: [
        { id: 'q1', prompt: '<em>actor</em>',    correct: 'actriz' },
        { id: 'q2', prompt: '<em>rey</em>',      correct: 'reina' },
        { id: 'q3', prompt: '<em>marido</em>',   correct: 'mujer' },
        { id: 'q4', prompt: '<em>papá</em>',     correct: 'mamá' },
        { id: 'q5', prompt: '<em>alcalde</em>',  correct: 'alcaldesa' },
        { id: 'q6', prompt: '<em>padre</em>',    correct: 'madre' },
        { id: 'q7', prompt: '<em>caballo</em>',  correct: 'yegua' },
        { id: 'q8', prompt: '<em>hijo</em>',     correct: 'hija' },
      ],
    },

    {
      id: '1.7',
      title: 'Семейные роли',
      type: 'fill',
      instructions: 'В семье Луиса и Аны: у них дети — Хавьер и Лусия. Заполните роли.',
      questions: [
        { id: 'q1',  prompt: 'Luis es ___ de Javier.',    correct: 'el padre',  placeholder: 'el padre' },
        { id: 'q2',  prompt: 'Ana es ___ de Lucía.',      correct: 'la madre' },
        { id: 'q3',  prompt: 'Javier es ___ de Lucía.',   correct: 'el hermano' },
        { id: 'q4',  prompt: 'Lucía es ___ de Javier.',   correct: 'la hermana' },
        { id: 'q5',  prompt: 'Javier es ___ de Luis.',    correct: 'el hijo' },
        { id: 'q6',  prompt: 'Lucía es ___ de Ana.',      correct: 'la hija' },
        { id: 'q7',  prompt: 'Luis es ___ de Ana.',       correct: 'el marido' },
        { id: 'q8',  prompt: 'Ana es ___ de Luis.',       correct: ['la mujer', 'la esposa'] },
      ],
    },

    {
      id: '1.8',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой согласования по роду — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['la profesora', 'el doctor', 'la actor', 'el rey'], correct: 'la actor', explanation: 'Должно быть <em>la actriz</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['el pianista', 'la pianista', 'la pianisto', 'una pianista'], correct: 'la pianisto', explanation: '<em>pianista</em> — инвариантно, формы <em>pianisto</em> не существует.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['la reina', 'el rey', 'la reyna', 'el caballo'], correct: 'la reyna', explanation: 'Правильно — <em>la reina</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['el bailarín', 'la bailarina', 'la bailarína', 'el cantante'], correct: 'la bailarína', explanation: 'В женском роде ударение уходит: <em>bailarina</em>, без тильды.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['un hombre alto', 'una mujer alta', 'un mujer alta', 'una mujer simpática'], correct: 'un mujer alta', explanation: 'Артикль и существительное должны согласовываться: <em>una mujer</em>.' },
      ],
    },

    {
      id: '1.9',
      title: 'У каких слов есть две формы женского рода',
      type: 'multi',
      instructions: 'Отметьте слова, у которых официально допустимы <em>две</em> формы женского рода (классическая на <em>-a</em> и совпадающая с мужской).',
      questions: [
        {
          id: 'q1',
          prompt: 'Выберите все варианты:',
          options: ['médico', 'jefe', 'profesor', 'taxista', 'modelo', 'hijo', 'abogado'],
          correct: ['médico', 'jefe'],
          explanation: 'Это профессии «спорной» нормы: <em>la médica / la médico</em>, <em>la jefa / la jefe</em>. У <em>profesor, abogado, hijo</em> только одна форма (на -a). <em>taxista, modelo</em> — инвариантны.',
        },
      ],
    },

    {
      id: '1.10',
      title: 'Аудио: послушайте и запишите слово',
      type: 'fill',
      instructions: 'Нажмите <code>🔊</code> чтобы послушать. Запишите услышанное слово (<strong>с диакритикой и артиклем <em>el</em> или <em>la</em></strong>).',
      questions: [
        { id: 'q1', prompt: '', audio: 'la profesora',    correct: ['la profesora'] },
        { id: 'q2', prompt: '', audio: 'el bailarín',     correct: ['el bailarín'] },
        { id: 'q3', prompt: '', audio: 'la actriz',       correct: ['la actriz'] },
        { id: 'q4', prompt: '', audio: 'el cocinero',     correct: ['el cocinero'] },
        { id: 'q5', prompt: '', audio: 'la enfermera',    correct: ['la enfermera'] },
        { id: 'q6', prompt: '', audio: 'el escritor',     correct: ['el escritor'] },
        { id: 'q7', prompt: '', audio: 'la reina',        correct: ['la reina'] },
        { id: 'q8', prompt: '', audio: 'el estudiante',   correct: ['el estudiante'] },
      ],
    },

    {
      id: '1.11',
      title: 'Согласование прилагательного',
      type: 'choice',
      instructions: 'Выберите правильный вариант — следите за родом артикля и существительного.',
      questions: [
        { id: 'q1', prompt: 'Es ___ chica simpática.',  options: ['un', 'una', 'el'], correct: 'una' },
        { id: 'q2', prompt: 'Aquel ___ es mi vecino.',  options: ['joven', 'jovena', 'jovenes'], correct: 'joven', explanation: '<em>joven</em> не меняется по роду; для женского — <em>aquella joven</em>.' },
        { id: 'q3', prompt: 'Mi tía es una mujer ___.', options: ['alto', 'alta', 'altos'], correct: 'alta' },
        { id: 'q4', prompt: 'El doctor es muy ___.',    options: ['amable', 'amabla', 'amablo'], correct: 'amable', explanation: 'Прилагательные на -e не меняются по роду.' },
        { id: 'q5', prompt: 'La actriz es ___.',        options: ['famosa', 'famoso', 'famos'], correct: 'famosa' },
      ],
    },

    {
      id: '1.12',
      title: 'Дополните по образцу',
      type: 'fill',
      instructions: 'Образец: <em>Mi padre es médico, mi madre es médica.</em> Заполните пропуски.',
      questions: [
        { id: 'q1', prompt: 'Mi tío es profesor, mi tía es ___.',        correct: 'profesora' },
        { id: 'q2', prompt: 'Mi hermano es cocinero, mi hermana es ___.', correct: 'cocinera' },
        { id: 'q3', prompt: 'Su marido es escritor, su mujer es ___.',    correct: 'escritora' },
        { id: 'q4', prompt: 'El abuelo es alemán, la abuela es ___.',     correct: 'alemana', explanation: 'Прилагательные на согласную тоже добавляют -a в женском роде.' },
        { id: 'q5', prompt: 'El rey es español, la reina es ___.',        correct: 'española' },
        { id: 'q6', prompt: 'Su hijo es pintor, su hija es ___.',         correct: 'pintora' },
        { id: 'q7', prompt: 'Aquel señor es bailarín, aquella señora es ___.', correct: 'bailarina' },
        { id: 'q8', prompt: 'Mi primo es estudiante, mi prima es ___.',   correct: 'estudiante', explanation: '<em>estudiante</em> — инвариантно.' },
      ],
    },
  ],
};
