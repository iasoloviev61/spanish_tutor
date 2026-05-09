// ============================================================
// Unidad 25 — Números cardinales (1): 0–99
// Количественные числительные. Счёт, возраст, деньги, время.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u25 = {
  id: 'u25',
  number: 25,
  title: { es: 'uno, dos, tres...', topic: 'Números cardinales (1)' },
  topicRu: 'Числительные 0–99: счёт, возраст, деньги, время',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Los <strong>números cardinales</strong> indican cantidad exacta. Hay que aprenderlos de memoria del 0 al 30; del 30 al 99 se forman con <em>y</em>: <em>treinta y uno, cuarenta y dos, ochenta y nueve</em>.',
      ru: 'Числа от 0 до 30 запоминаются как отдельные слова. От 30 до 99 — собираются по схеме «десяток + <em>y</em> + единица»: <em>treinta y uno</em> = 31, <em>cuarenta y dos</em> = 42, <em>ochenta y nueve</em> = 89.',
      examples: [
        { es: 'Solo tengo quince pesos.', ru: 'У меня всего пятнадцать песо.' },
        { es: 'En mi clase hay catorce alumnos.', ru: 'В моём классе четырнадцать учеников.' },
        { es: 'Peso setenta y cinco kilos.', ru: 'Я вешу 75 килограммов.' },
      ],
    },

    {
      type: 'heading',
      text: '0–29',
    },
    {
      type: 'table',
      caption: 'Числа 0–29',
      columns: ['', '', ''],
      colClasses: ['col-pattern', 'col-pattern', 'col-pattern'],
      rows: [
        ['0  <em>cero</em>',           '10 <em>diez</em>',         '20 <em>veinte</em>'],
        ['1  <em>uno / un, una</em>',  '11 <em>once</em>',          '21 <em>veintiuno / veintiún, veintiuna</em>'],
        ['2  <em>dos</em>',             '12 <em>doce</em>',          '22 <em>veintidós</em>'],
        ['3  <em>tres</em>',            '13 <em>trece</em>',          '23 <em>veintitrés</em>'],
        ['4  <em>cuatro</em>',          '14 <em>catorce</em>',         '24 <em>veinticuatro</em>'],
        ['5  <em>cinco</em>',           '15 <em>quince</em>',           '25 <em>veinticinco</em>'],
        ['6  <em>seis</em>',            '16 <em>dieciséis</em>',         '26 <em>veintiséis</em>'],
        ['7  <em>siete</em>',           '17 <em>diecisiete</em>',         '27 <em>veintisiete</em>'],
        ['8  <em>ocho</em>',            '18 <em>dieciocho</em>',           '28 <em>veintiocho</em>'],
        ['9  <em>nueve</em>',           '19 <em>diecinueve</em>',           '29 <em>veintinueve</em>'],
      ],
    },

    {
      type: 'heading',
      text: '30–99',
    },
    {
      type: 'table',
      caption: 'Десятки и сложные числа',
      columns: ['Десяток', 'Образец сложного числа'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['30 <em>treinta</em>',         '31 <em>treinta y uno</em> / <em>treinta y un</em> / <em>treinta y una</em><br>32 <em>treinta y dos</em>'],
        ['40 <em>cuarenta</em>',         '43 <em>cuarenta y tres</em><br>44 <em>cuarenta y cuatro</em>'],
        ['50 <em>cincuenta</em>',         '56 <em>cincuenta y seis</em>'],
        ['60 <em>sesenta</em>',            '67 <em>sesenta y siete</em>'],
        ['70 <em>setenta</em>',             '78 <em>setenta y ocho</em>'],
        ['80 <em>ochenta</em>',              '89 <em>ochenta y nueve</em>'],
        ['90 <em>noventa</em>',               '99 <em>noventa y nueve</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Del 16 al 19 y del 21 al 29 se escriben en <strong>una sola palabra</strong>: <em>dieciséis, diecisiete, dieciocho, diecinueve, veintiuno, veintidós, ...</em> Del 31 en adelante — <strong>tres palabras con <em>y</em></strong>.',
      ru: 'Запомните графику: 16–19 и 21–29 пишутся слитно (<em>dieciséis, veintidós</em>), а с 31 — раздельно через <em>y</em> (<em>treinta y uno</em>). Это частая ошибка.',
    },

    {
      type: 'heading',
      text: 'uno → un / una',
    },
    {
      type: 'rule',
      es: 'Cuando <em>uno</em> va con un nombre, pierde la <strong>-o</strong> ante masculino: <em>un libro, treinta y un libros</em>. Ante femenino se pone <em>una</em>: <em>una mesa, veintiuna mesas</em>. Solo (al contar) se queda <em>uno</em>: <em>—¿Cuántos años tienes? —Treinta y uno.</em>',
      ru: 'Перед существительным мужского рода — <em>un</em> (без -o); перед женского рода — <em>una</em>. Когда же мы просто называем число (отвечаем «сколько»), используется полная форма <em>uno</em>.',
      examples: [
        { es: '—¿Cuántos años tienes? —Treinta y uno.', ru: '— Сколько тебе лет? — Тридцать один.' },
        { es: '—¿Cuántas chicas hay? —Veintiuna.', ru: '— Сколько девушек? — Двадцать одна.' },
        { es: 'En mi oficina hay veintiún hombres.', ru: 'В моём офисе двадцать один мужчина.' },
        { es: 'Tengo treinta y una libras.', ru: 'У меня 31 фунт.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Ante un nombre <strong>femenino singular que empieza por <em>a-</em> o <em>ha-</em> tónica</strong> usamos <em>un</em> (no <em>una</em>): <em>un águila, un hambre</em>. Pero el plural y los compuestos vuelven a <em>una</em>: <em>dos águilas, treinta y una águilas</em>... — aunque <em>veintiún águilas</em> tampoco es raro.',
      ru: 'Перед ж. р. на ударные <em>a-/ha-</em> ставится <em>un</em> ради благозвучия: <em>un águila</em>, <em>un hambre</em>. Согласование по роду остаётся женским (<em>un águila blanca</em>).',
    },

    {
      type: 'heading',
      text: 'Где используются числа',
    },
    {
      type: 'rule',
      es: 'Los cardinales se usan para indicar: <strong>cantidad exacta</strong>, <strong>medidas, pesos y distancias</strong>, <strong>edad</strong>, <strong>fechas</strong>, <strong>la hora</strong> y <strong>números de teléfono</strong>.',
      ru: 'Кардинальные числа покрывают почти весь бытовой счёт: точное количество, рост/вес/расстояние, возраст, даты, время и телефонные номера.',
      examples: [
        { es: 'En mi clase hay catorce alumnos.', ru: 'В моём классе четырнадцать учеников. (количество)' },
        { es: 'Peso setenta y cinco kilos.', ru: 'Я вешу 75 кг. (вес)' },
        { es: '—¿Cuántos años tienes? —Veinticuatro.', ru: '— Сколько тебе лет? — Двадцать четыре. (возраст)' },
        { es: 'Hoy es cuatro de febrero.', ru: 'Сегодня 4 февраля. (дата)' },
        { es: 'La boda es el día trece.', ru: 'Свадьба тринадцатого. (дата)' },
        { es: 'De Madrid a Toledo hay ochenta kilómetros.', ru: 'От Мадрида до Толедо 80 км. (расстояние)' },
      ],
    },

    {
      type: 'heading',
      text: 'Время',
    },
    {
      type: 'table',
      caption: 'La hora',
      columns: ['Время', 'Конструкция'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['1:00',   '<em>la una en punto</em>'],
        ['3:10',   '<em>las tres y diez</em>'],
        ['4:15',   '<em>las cuatro y cuarto</em>'],
        ['4:30',   '<em>las cuatro y media</em>'],
        ['4:45',   '<em>las cinco menos cuarto</em>'],
        ['5:50',   '<em>las seis menos diez</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'La hora va con artículo femenino: <em>la una</em> (singular) y <em>las dos, las tres...</em> (plural). Después de la hora se usa <em>y</em> hasta la media; a partir de los 35 minutos pasamos a la siguiente hora con <em>menos</em>.',
      ru: 'Со временем используется женский артикль: <em>la una, las tres</em>. До получаса — <em>y</em>, после получаса — <em>menos</em> (отнимаем от следующего часа). Альтернативный «цифровой» вариант: <em>las quince veinte</em>.',
    },

    {
      type: 'heading',
      text: 'Телефонные номера',
    },
    {
      type: 'rule',
      es: 'Los números de teléfono se dicen <strong>en grupos de dos cifras</strong> (o de tres si la primera es de tres dígitos). El cero suele decirse como <em>cero</em>.',
      ru: 'Телефон обычно произносится парами: <em>91 478 92 14</em> = <em>noventa y uno, cuatro setenta y ocho, noventa y dos, catorce</em>. Цифра 0 — <em>cero</em>.',
      examples: [
        { es: '46596703 = cuatro, seis, cinco, nueve, seis, siete, cero, tres.', ru: '4-6-5-9-6-7-0-3 (поодиночке).' },
        { es: '902 32 46 01 = nueve cero dos, treinta y dos, cuarenta y seis, cero uno.', ru: '902 32 46 01 (по группам).' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '25.1',
      title: 'Запишите число словами',
      type: 'fill',
      instructions: 'Запишите число так, как его произносят. Используйте <em>un / una</em> в нужных контекстах.',
      questions: [
        { id: 'q1',  prompt: '21 euros →',         correct: 'veintiún euros',           explanation: 'Перед сущ. м. р. — <em>veintiún</em> (краткая форма).' },
        { id: 'q2',  prompt: '10 de enero →',       correct: 'diez de enero' },
        { id: 'q3',  prompt: '31 días →',           correct: 'treinta y un días',       explanation: 'Перед сущ. м. р. — <em>treinta y un</em>, без «-o».' },
        { id: 'q4',  prompt: '49 kilos →',          correct: 'cuarenta y nueve kilos' },
        { id: 'q5',  prompt: '15 de diciembre →',   correct: 'quince de diciembre' },
        { id: 'q6',  prompt: '88 centímetros →',    correct: 'ochenta y ocho centímetros' },
        { id: 'q7',  prompt: '31 aulas →',          correct: 'treinta y una aulas',     explanation: 'Перед сущ. ж. р. — <em>treinta y una</em>.' },
        { id: 'q8',  prompt: '28 de febrero →',     correct: 'veintiocho de febrero' },
        { id: 'q9',  prompt: '25 años →',           correct: 'veinticinco años' },
        { id: 'q10', prompt: '61 semanas →',        correct: 'sesenta y una semanas',   explanation: 'Перед сущ. ж. р. — <em>sesenta y una</em>.' },
        { id: 'q11', prompt: '1 de mayo →',          correct: ['uno de mayo', 'primero de mayo'], explanation: 'В Лат. Америке часто <em>el primero</em>.' },
        { id: 'q12', prompt: '45 kilómetros →',     correct: 'cuarenta y cinco kilómetros' },
      ],
    },

    {
      id: '25.2',
      title: 'Числа на слух — запишите цифрой',
      type: 'fill',
      instructions: 'Прочитайте словесную запись и запишите число цифрами.',
      questions: [
        { id: 'q1', prompt: '<em>treinta y dos</em> →',                correct: '32' },
        { id: 'q2', prompt: '<em>cuarenta y siete</em> →',              correct: '47' },
        { id: 'q3', prompt: '<em>cincuenta y nueve</em> →',              correct: '59' },
        { id: 'q4', prompt: '<em>setenta y tres</em> →',                  correct: '73' },
        { id: 'q5', prompt: '<em>ochenta y uno</em> →',                    correct: '81' },
        { id: 'q6', prompt: '<em>noventa y nueve</em> →',                  correct: '99' },
        { id: 'q7', prompt: '<em>dieciséis</em> →',                          correct: '16' },
        { id: 'q8', prompt: '<em>veintidós</em> →',                          correct: '22' },
      ],
    },

    {
      id: '25.3',
      title: 'uno, un или una?',
      type: 'choice',
      instructions: 'Выберите правильную форму единицы.',
      questions: [
        { id: 'q1', prompt: '—¿Cuántos años tienes? —Treinta y ___.',                           options: ['uno', 'un', 'una'], correct: 'uno', explanation: 'Без существительного — полная форма.' },
        { id: 'q2', prompt: 'Tengo veintiún ___.',                                                options: ['libro', 'libros', 'libra'],   correct: 'libros' , explanation: 'После числа всегда мн. ч. (кроме «1»).' },
        { id: 'q3', prompt: 'En mi clase hay treinta y ___ alumnos.',                              options: ['uno', 'un', 'una'], correct: 'un' },
        { id: 'q4', prompt: 'Compré veintiuna ___.',                                                options: ['silla', 'sillas', 'sillo'],   correct: 'sillas' },
        { id: 'q5', prompt: 'Vinieron cuarenta y ___ chicas.',                                      options: ['uno', 'un', 'una'], correct: 'una' },
        { id: 'q6', prompt: 'En esta sala hay treinta y ___ hombres.',                                options: ['uno', 'un', 'una'], correct: 'un' },
        { id: 'q7', prompt: '—¿Cuántas libras tienes? —Sesenta y ___.',                                options: ['uno', 'un', 'una'], correct: 'una' , explanation: 'Без сущ., но согласование по роду подразумеваемого слова — ж. р.' },
        { id: 'q8', prompt: 'En esa montaña vive ___ águila.',                                        options: ['un', 'una', 'uno'], correct: 'un' , explanation: 'Перед ж. р. на ударное <em>a-</em> — <em>un</em>.' },
      ],
    },

    {
      id: '25.4',
      title: '¿Qué hora es?',
      type: 'fill',
      instructions: 'Запишите время словами полностью (с артиклем). Используйте <em>en punto, y cuarto, y media, menos cuarto</em>.',
      questions: [
        { id: 'q1', prompt: '3:20 →',     correct: 'las tres y veinte' },
        { id: 'q2', prompt: '1:00 →',     correct: 'la una en punto' },
        { id: 'q3', prompt: '4:15 →',      correct: 'las cuatro y cuarto' },
        { id: 'q4', prompt: '8:30 →',      correct: 'las ocho y media' },
        { id: 'q5', prompt: '6:45 →',      correct: 'las siete menos cuarto' },
        { id: 'q6', prompt: '9:50 →',      correct: 'las diez menos diez' },
        { id: 'q7', prompt: '5:25 →',      correct: 'las cinco y veinticinco' },
        { id: 'q8', prompt: '11:55 →',     correct: 'las doce menos cinco' },
      ],
    },

    {
      id: '25.5',
      title: 'Телефон по группам',
      type: 'fill',
      instructions: 'Запишите номер словами по парам, как читал бы носитель.',
      questions: [
        { id: 'q1', prompt: '93 547 89 02 →', correct: ['noventa y tres, cinco cuarenta y siete, ochenta y nueve, cero dos', 'noventa y tres, quinientos cuarenta y siete, ochenta y nueve, cero dos'] },
        { id: 'q2', prompt: '91 478 92 14 →', correct: 'noventa y uno, cuatro setenta y ocho, noventa y dos, catorce' },
        { id: 'q3', prompt: '512 02 96 →',     correct: ['cinco doce, cero dos, noventa y seis', 'quinientos doce, cero dos, noventa y seis'] },
        { id: 'q4', prompt: '963 52 63 61 →',  correct: 'nueve sesenta y tres, cincuenta y dos, sesenta y tres, sesenta y uno' },
        { id: 'q5', prompt: '650 21 34 59 →',  correct: 'seis cincuenta, veintiuno, treinta y cuatro, cincuenta y nueve' },
      ],
    },

    {
      id: '25.6',
      title: 'Сопоставьте число и его запись',
      type: 'match',
      instructions: 'Подберите числовую и словесную запись.',
      pool: ['catorce', 'cuarenta', 'sesenta y cuatro', 'setenta y cuatro', 'ochenta y nueve', 'dieciséis', 'cincuenta y cinco', 'noventa y nueve'],
      questions: [
        { id: 'q1', prompt: '14',  correct: 'catorce' },
        { id: 'q2', prompt: '40',   correct: 'cuarenta' },
        { id: 'q3', prompt: '64',   correct: 'sesenta y cuatro' },
        { id: 'q4', prompt: '74',   correct: 'setenta y cuatro' },
        { id: 'q5', prompt: '89',   correct: 'ochenta y nueve' },
        { id: 'q6', prompt: '16',    correct: 'dieciséis' },
        { id: 'q7', prompt: '55',    correct: 'cincuenta y cinco' },
        { id: 'q8', prompt: '99',    correct: 'noventa y nueve' },
      ],
    },

    {
      id: '25.7',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма записана неверно.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['veintidós', 'veinte y dos', 'veintitrés', 'veintiocho'], correct: 'veinte y dos', explanation: '21–29 пишутся слитно: <em>veintidós</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['treinta y uno', 'treintaiuno', 'cuarenta y dos', 'sesenta y siete'], correct: 'treintaiuno', explanation: 'С 31 — раздельно через <em>y</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['las tres y media', 'la una en punto', 'las tres y cuarto', 'la una y media en punto'], correct: 'la una y media en punto', explanation: '«В точности» применимо только к ровному часу.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['veintiún hombres', 'veintiuna mujeres', 'veintiuno hombres', 'treinta y un libros'], correct: 'veintiuno hombres', explanation: 'Перед сущ. м. р. — <em>veintiún</em>, без -o.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['dieciséis', 'diecisiete', 'dieciocho', 'diez y nueve'], correct: 'diez y nueve', explanation: '19 пишется слитно: <em>diecinueve</em>.' },
      ],
    },

    {
      id: '25.8',
      title: 'Назовите дату / возраст / меру',
      type: 'fill',
      instructions: 'Перепишите фразу полностью, заменив цифры на слова.',
      questions: [
        { id: 'q1', prompt: 'Hoy es <em>4</em> de febrero.',                       correct: 'Hoy es cuatro de febrero.' },
        { id: 'q2', prompt: 'Tengo <em>22</em> años.',                              correct: 'Tengo veintidós años.' },
        { id: 'q3', prompt: 'Peso <em>68</em> kilos.',                               correct: 'Peso sesenta y ocho kilos.' },
        { id: 'q4', prompt: 'Mi hermana tiene <em>31</em> años.',                     correct: 'Mi hermana tiene treinta y un años.' },
        { id: 'q5', prompt: 'En esta calle hay <em>15</em> tiendas.',                  correct: 'En esta calle hay quince tiendas.' },
        { id: 'q6', prompt: 'La boda es el <em>13</em> de junio.',                       correct: 'La boda es el trece de junio.' },
        { id: 'q7', prompt: 'De aquí al pueblo hay <em>80</em> kilómetros.',              correct: 'De aquí al pueblo hay ochenta kilómetros.' },
      ],
    },

    {
      id: '25.9',
      title: 'Какие записи корректны?',
      type: 'multi',
      instructions: 'Отметьте все варианты, которые соответствуют норме.',
      questions: [
        {
          id: 'q1',
          prompt: 'Выберите все правильные формы:',
          options: [
            'veintiuno años',
            'veintiún años',
            'veintiuna años',
            'treinta y un libros',
            'treinta y uno libros',
            'treinta y una libras',
            'cuarenta y dos',
            'cuarentaidos',
            'dieciséis',
            'diez y seis',
            'cincuenta y cinco',
            'noventa y nueve',
          ],
          correct: ['veintiún años', 'treinta y un libros', 'treinta y una libras', 'cuarenta y dos', 'dieciséis', 'cincuenta y cinco', 'noventa y nueve'],
          explanation: 'Перед сущ. м. р. — <em>un</em> (без -o); 16 пишется слитно; 31+ — раздельно.',
        },
      ],
    },

    {
      id: '25.10',
      title: 'Аудио: запишите услышанное число',
      type: 'fill',
      instructions: 'Послушайте и запишите фразу с числами.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Tengo veintiún años.',                          correct: ['Tengo veintiún años.', 'Tengo veintiún años'] },
        { id: 'q2', prompt: '', audio: 'En mi clase hay catorce alumnos.',               correct: ['En mi clase hay catorce alumnos.', 'En mi clase hay catorce alumnos'] },
        { id: 'q3', prompt: '', audio: 'La boda es el trece de junio.',                   correct: ['La boda es el trece de junio.', 'La boda es el trece de junio'] },
        { id: 'q4', prompt: '', audio: 'Son las cuatro y cuarto.',                        correct: ['Son las cuatro y cuarto.', 'Son las cuatro y cuarto'] },
        { id: 'q5', prompt: '', audio: 'Peso setenta y cinco kilos.',                      correct: ['Peso setenta y cinco kilos.', 'Peso setenta y cinco kilos'] },
        { id: 'q6', prompt: '', audio: 'De Madrid a Toledo hay ochenta kilómetros.',        correct: ['De Madrid a Toledo hay ochenta kilómetros.', 'De Madrid a Toledo hay ochenta kilómetros'] },
        { id: 'q7', prompt: '', audio: 'Es la una en punto.',                                correct: ['Es la una en punto.', 'Es la una en punto'] },
        { id: 'q8', prompt: '', audio: 'Son las tres menos cuarto.',                          correct: ['Son las tres menos cuarto.', 'Son las tres menos cuarto'] },
      ],
    },

    {
      id: '25.11',
      title: 'Сложение в уме',
      type: 'fill',
      instructions: 'Запишите результат словами.',
      questions: [
        { id: 'q1', prompt: 'doce + diez =',                  correct: 'veintidós' },
        { id: 'q2', prompt: 'quince + cinco =',                correct: 'veinte' },
        { id: 'q3', prompt: 'treinta + nueve =',                correct: 'treinta y nueve' },
        { id: 'q4', prompt: 'cincuenta + diez =',                correct: 'sesenta' },
        { id: 'q5', prompt: 'setenta + diecinueve =',            correct: 'ochenta y nueve' },
        { id: 'q6', prompt: 'noventa + ocho =',                   correct: 'noventa y ocho' },
        { id: 'q7', prompt: 'cuarenta y dos + diez =',             correct: 'cincuenta y dos' },
      ],
    },

    {
      id: '25.12',
      title: 'Запишите время цифрами',
      type: 'fill',
      instructions: 'Цифрами в формате <code>H:MM</code>.',
      questions: [
        { id: 'q1', prompt: '<em>las tres y veinte</em> →',          correct: '3:20' },
        { id: 'q2', prompt: '<em>la una y media</em> →',              correct: '1:30' },
        { id: 'q3', prompt: '<em>las ocho y cuarto</em> →',            correct: '8:15' },
        { id: 'q4', prompt: '<em>las nueve menos cuarto</em> →',        correct: '8:45' },
        { id: 'q5', prompt: '<em>las once en punto</em> →',              correct: '11:00' },
        { id: 'q6', prompt: '<em>las cinco menos diez</em> →',            correct: '4:50' },
        { id: 'q7', prompt: '<em>las doce y veinticinco</em> →',          correct: '12:25' },
      ],
    },
  ],
};
