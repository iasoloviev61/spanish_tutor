// ============================================================
// Unidad 3 — Singular, plural
// Образование множественного числа существительных.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u03 = {
  id: 'u03',
  number: 3,
  title: { es: 'libro, libros', topic: 'Singular, plural' },
  topicRu: 'Образование множественного числа',

  theory: [
    {
      type: 'rule',
      es: 'Se usa el <strong>singular</strong> para una sola persona, animal o cosa, y el <strong>plural</strong> para más de una.',
      ru: 'Множественное число образуется регулярно — по окончанию слова в единственном числе. У формы есть несколько простых правил.',
    },
    {
      type: 'table',
      caption: 'Образование множественного числа',
      columns: ['Singular', 'Plural', 'Ejemplos'],
      colClasses: ['col-pattern', 'col-result', 'col-ex'],
      rows: [
        ['оканч. на <strong>−a, −e, −i, −o, −u</strong> (безударные)', '<strong>+ s</strong>',  '<em>casa → casas, libro → libros, café → cafés, menú → menús</em>'],
        ['оканч. на <strong>−á, −é, −ó, −ú</strong> (ударные)',         '<strong>+ s</strong>',  '<em>papá → papás, sofá → sofás</em>'],
        ['оканч. на <strong>согласную</strong>',                        '<strong>+ es</strong>', '<em>hotel → hoteles, reloj → relojes, mes → meses</em>'],
        ['оканч. на <strong>−í, −ú (ударные), −y</strong>',             '<strong>+ es</strong>', '<em>rubí → rubíes, ley → leyes</em>'],
        ['оканч. на <strong>−z</strong>',                                '<strong>−z → −ces</strong>', '<em>actriz → actrices, pez → peces, luz → luces</em>'],
        ['слова на <strong>−as, −es, −is, −os, −us</strong> (2+ слога)', '<strong>не меняются</strong>', '<em>el lunes → los lunes, el paraguas → los paraguas</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'При добавлении <em>−es</em> графическое ударение часто исчезает или появляется: <em>autobús → autobuses, canción → canciones, televisión → televisiones, joven → jóvenes, examen → exámenes</em>.',
      ru: 'Это связано с правилом ударения: после добавления слога ударный остаётся тот же гласный, но меняется тип ударения (estiloso → необходимости в графическом).',
    },
    {
      type: 'heading',
      text: 'Особые случаи',
    },
    {
      type: 'rule',
      es: 'Algunas palabras tienen <strong>siempre</strong> forma plural — singular y plural se ven igual.',
      ru: 'Часть слов употребляется только во множественном числе (на парные/составные предметы).',
      examples: [
        { es: 'las tijeras', ru: 'ножницы' },
        { es: 'las gafas', ru: 'очки' },
        { es: 'los pantalones', ru: 'брюки' },
        { es: 'los vaqueros', ru: 'джинсы' },
      ],
    },
    {
      type: 'rule',
      es: 'Сочетание <em>masculino + femenino</em> в общей форме передаётся <strong>masculino plural</strong>.',
      ru: 'Когда говорят про смешанную группу (отцы + матери, братья + сёстры) — используется мужской множественный, обобщающий.',
      examples: [
        { es: 'padre + madre = los padres', ru: 'родители' },
        { es: 'hijo(s) + hija(s) = los hijos', ru: 'дети' },
        { es: 'rey + reina = los reyes', ru: 'королевская чета' },
        { es: 'hermano + hermana = los hermanos', ru: 'братья и сёстры' },
      ],
    },
  ],

  exercises: [
    {
      id: '3.1',
      title: 'Образуйте множественное число',
      type: 'fill',
      instructions: 'Запишите plural без артикля. Следите за диакритикой.',
      questions: [
        { id: 'q1',  prompt: '<em>libro</em> →',         correct: 'libros' },
        { id: 'q2',  prompt: '<em>mujer</em> →',         correct: 'mujeres' },
        { id: 'q3',  prompt: '<em>pez</em> →',           correct: 'peces' },
        { id: 'q4',  prompt: '<em>actriz</em> →',        correct: 'actrices' },
        { id: 'q5',  prompt: '<em>hotel</em> →',         correct: 'hoteles' },
        { id: 'q6',  prompt: '<em>café</em> →',          correct: 'cafés' },
        { id: 'q7',  prompt: '<em>universidad</em> →',   correct: 'universidades' },
        { id: 'q8',  prompt: '<em>habitación</em> →',    correct: 'habitaciones', explanation: 'Графическое ударение в plural уходит.' },
        { id: 'q9',  prompt: '<em>autobús</em> →',       correct: 'autobuses',    explanation: 'Та же причина: ударение становится регулярным.' },
        { id: 'q10', prompt: '<em>foto</em> →',          correct: 'fotos' },
        { id: 'q11', prompt: '<em>león</em> →',          correct: 'leones',       explanation: 'Тильда уходит.' },
        { id: 'q12', prompt: '<em>jueves</em> →',        correct: 'jueves',       explanation: 'Слова на -es в 2+ слогах не меняются.' },
      ],
    },

    {
      id: '3.2',
      title: 'Множественное и графическое ударение',
      type: 'fill',
      instructions: 'Напишите plural и поставьте ударения там, где нужно.',
      questions: [
        { id: 'q1', prompt: '<em>canción</em> →',     correct: 'canciones' },
        { id: 'q2', prompt: '<em>televisión</em> →',  correct: 'televisiones' },
        { id: 'q3', prompt: '<em>joven</em> →',       correct: 'jóvenes', explanation: 'Здесь, наоборот, ударение появляется.' },
        { id: 'q4', prompt: '<em>examen</em> →',      correct: 'exámenes', explanation: 'И здесь тоже: становится <em>esdrújula</em>.' },
        { id: 'q5', prompt: '<em>francés</em> →',     correct: 'franceses' },
        { id: 'q6', prompt: '<em>alemán</em> →',      correct: 'alemanes' },
      ],
    },

    {
      id: '3.3',
      title: 'Не меняются в plural',
      type: 'multi',
      instructions: 'Отметьте слова, у которых форма <strong>не меняется</strong> во множественном числе (или которые употребляются только во мн. числе).',
      questions: [
        {
          id: 'q1',
          prompt: 'Выберите все «не меняется»:',
          options: ['lunes', 'paraguas', 'libro', 'mes', 'cumpleaños', 'reloj', 'tijeras', 'gafas', 'casa'],
          correct: ['lunes', 'paraguas', 'cumpleaños', 'tijeras', 'gafas'],
          explanation: '<em>lunes, paraguas, cumpleaños</em> — слова на -s в 2+ слогах. <em>tijeras, gafas</em> — pluralia tantum.',
        },
      ],
    },

    {
      id: '3.4',
      title: 'Окончание +s или +es?',
      type: 'choice',
      instructions: 'Что нужно добавить?',
      questions: [
        { id: 'q1', prompt: '<em>casa</em> →',    options: ['casas', 'cases', 'casaes'],     correct: 'casas' },
        { id: 'q2', prompt: '<em>flor</em> →',    options: ['flors', 'flores', 'florees'],   correct: 'flores' },
        { id: 'q3', prompt: '<em>café</em> →',    options: ['cafés', 'cafées', 'cafes'],     correct: 'cafés' },
        { id: 'q4', prompt: '<em>rey</em> →',     options: ['reys', 'reyes', 'reies'],       correct: 'reyes' },
        { id: 'q5', prompt: '<em>menú</em> →',    options: ['menús', 'menúes', 'menúses'],   correct: 'menús' },
        { id: 'q6', prompt: '<em>rubí</em> →',    options: ['rubís', 'rubíes', 'rubises'],   correct: 'rubíes' },
        { id: 'q7', prompt: '<em>frijol</em> →',  options: ['frijols', 'frijoles', 'frijolis'], correct: 'frijoles' },
      ],
    },

    {
      id: '3.5',
      title: 'M + F = M plural',
      type: 'fill',
      instructions: 'Образуйте обобщающий plural masculino.',
      questions: [
        { id: 'q1', prompt: '<em>el padre + la madre</em> →',     correct: 'los padres',    placeholder: 'los padres' },
        { id: 'q2', prompt: '<em>el hijo + la hija</em> →',       correct: 'los hijos' },
        { id: 'q3', prompt: '<em>el abuelo + la abuela</em> →',   correct: 'los abuelos' },
        { id: 'q4', prompt: '<em>el rey + la reina</em> →',       correct: 'los reyes' },
        { id: 'q5', prompt: '<em>el hermano + la hermana</em> →', correct: 'los hermanos' },
        { id: 'q6', prompt: '<em>el tío + la tía</em> →',         correct: 'los tíos' },
        { id: 'q7', prompt: '<em>el primo + la prima</em> →',     correct: 'los primos' },
      ],
    },

    {
      id: '3.6',
      title: 'Перепишите фразу во множественном числе',
      type: 'fill',
      instructions: 'Поменяйте все слова: артикль, существительное, прилагательное.',
      questions: [
        { id: 'q1', prompt: '<em>El profesor es alto.</em> →',     correct: ['Los profesores son altos.', 'Los profesores son altos'] },
        { id: 'q2', prompt: '<em>La canción es bonita.</em> →',    correct: ['Las canciones son bonitas.', 'Las canciones son bonitas'] },
        { id: 'q3', prompt: '<em>El autobús está aquí.</em> →',    correct: ['Los autobuses están aquí.', 'Los autobuses están aquí'] },
        { id: 'q4', prompt: '<em>El joven trabaja mucho.</em> →',  correct: ['Los jóvenes trabajan mucho.', 'Los jóvenes trabajan mucho'] },
        { id: 'q5', prompt: '<em>La actriz es famosa.</em> →',     correct: ['Las actrices son famosas.', 'Las actrices son famosas'] },
      ],
    },

    {
      id: '3.7',
      title: 'От plural к singular',
      type: 'fill',
      instructions: 'Восстановите форму единственного числа.',
      questions: [
        { id: 'q1', prompt: '<em>peces</em> →',       correct: 'pez' },
        { id: 'q2', prompt: '<em>luces</em> →',       correct: 'luz' },
        { id: 'q3', prompt: '<em>leyes</em> →',       correct: 'ley' },
        { id: 'q4', prompt: '<em>autobuses</em> →',   correct: 'autobús' },
        { id: 'q5', prompt: '<em>habitaciones</em> →', correct: 'habitación' },
        { id: 'q6', prompt: '<em>jóvenes</em> →',     correct: 'joven' },
        { id: 'q7', prompt: '<em>los lunes</em> →',   correct: ['el lunes', 'lunes'] },
        { id: 'q8', prompt: '<em>los paraguas</em> →', correct: ['el paraguas', 'paraguas'] },
      ],
    },

    {
      id: '3.8',
      title: 'Только во множественном числе',
      type: 'multi',
      instructions: 'Выберите слова, у которых нет «настоящей» формы единственного числа.',
      questions: [
        {
          id: 'q1',
          prompt: 'Что употребляется только в plural?',
          options: ['tijeras', 'gafas', 'pantalones', 'vaqueros', 'libro', 'silla', 'matemáticas'],
          correct: ['tijeras', 'gafas', 'pantalones', 'vaqueros', 'matemáticas'],
          explanation: 'Парные предметы и название области (la matemática существует, но «школьный предмет» — <em>las matemáticas</em>).',
        },
      ],
    },

    {
      id: '3.9',
      title: '−z в окончании',
      type: 'fill',
      instructions: 'Образуйте plural — буква <em>z</em> переходит в <em>c</em>.',
      questions: [
        { id: 'q1', prompt: '<em>vez</em> →',     correct: 'veces' },
        { id: 'q2', prompt: '<em>luz</em> →',     correct: 'luces' },
        { id: 'q3', prompt: '<em>nariz</em> →',   correct: 'narices' },
        { id: 'q4', prompt: '<em>lápiz</em> →',   correct: 'lápices' },
        { id: 'q5', prompt: '<em>feliz</em> →',   correct: 'felices' },
        { id: 'q6', prompt: '<em>cruz</em> →',    correct: 'cruces' },
      ],
    },

    {
      id: '3.10',
      title: 'Найдите верный plural',
      type: 'choice',
      instructions: 'Только один вариант верный.',
      questions: [
        { id: 'q1', prompt: '<em>el examen</em> →', options: ['los examenes', 'los exámenes', 'los exames'],   correct: 'los exámenes' },
        { id: 'q2', prompt: '<em>la mano</em> →',   options: ['las manos', 'las manas', 'los manos'],          correct: 'las manos' },
        { id: 'q3', prompt: '<em>el día</em> →',    options: ['los días', 'las días', 'los díes'],             correct: 'los días' },
        { id: 'q4', prompt: '<em>la moto</em> →',   options: ['las motos', 'las motas', 'los motos'],          correct: 'las motos' },
        { id: 'q5', prompt: '<em>el sofá</em> →',   options: ['los sofás', 'los sofáes', 'los sofa'],          correct: 'los sofás' },
      ],
    },

    {
      id: '3.11',
      title: 'Аудио: услышали plural',
      type: 'fill',
      instructions: 'Запишите услышанное слово.',
      questions: [
        { id: 'q1', prompt: '', audio: 'los autobuses',     correct: ['los autobuses'] },
        { id: 'q2', prompt: '', audio: 'las habitaciones',  correct: ['las habitaciones'] },
        { id: 'q3', prompt: '', audio: 'los lápices',       correct: ['los lápices'] },
        { id: 'q4', prompt: '', audio: 'las flores',        correct: ['las flores'] },
        { id: 'q5', prompt: '', audio: 'los jóvenes',       correct: ['los jóvenes'] },
        { id: 'q6', prompt: '', audio: 'los paraguas',      correct: ['los paraguas'] },
      ],
    },

    {
      id: '3.12',
      title: 'Замените на обобщающую форму',
      type: 'fill',
      instructions: 'Образец: <em>tres alumnos y cinco alumnas</em> → <em>ocho alumnos</em>.',
      questions: [
        { id: 'q1', prompt: '<em>un hijo y dos hijas</em> →',                           correct: 'tres hijos' },
        { id: 'q2', prompt: '<em>el abuelo y la abuela</em> →',                          correct: 'los abuelos' },
        { id: 'q3', prompt: '<em>dos profesores y tres profesoras</em> →',               correct: 'cinco profesores' },
        { id: 'q4', prompt: '<em>mi tío y mi tía</em> →',                                correct: 'mis tíos',          placeholder: 'mis tíos' },
        { id: 'q5', prompt: '<em>un actor y dos actrices</em> →',                        correct: 'tres actores' },
        { id: 'q6', prompt: '<em>el rey y la reina</em> →',                              correct: 'los reyes' },
      ],
    },
  ],
};
