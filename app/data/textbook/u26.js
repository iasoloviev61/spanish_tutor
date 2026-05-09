// ============================================================
// Unidad 26 — Números cardinales (2): cien, mil, un millón
// Большие числа: сотни, тысячи, миллионы, согласование по роду,
// чтение дробей и годов.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u26 = {
  id: 'u26',
  number: 26,
  title: { es: 'cien, mil, un millón…', topic: 'Números cardinales (2)' },
  topicRu: 'Большие числа: сотни, тысячи, миллионы',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Los <strong>números a partir de 100</strong> se forman combinando <em>cien / ciento</em>, las centenas (<em>doscientos…</em>), <em>mil</em> y <em>millón</em>.',
      ru: 'Большие числа собираются из «сотни» (<em>cien / ciento</em>), сложных сотен (<em>doscientos…</em>), <em>mil</em> «тысяча» и <em>millón</em> «миллион». Между сотнями и десятками союз <em>y</em> <strong>не ставится</strong>: <em>ciento veintidós</em>, а не <em>ciento <span style="text-decoration: line-through">y</span> veintidós</em>. <em>y</em> появляется только между десятками и единицами: <em>treinta y dos</em>, <em>ciento treinta y dos</em>.',
      examples: [
        { es: '100 — cien', ru: 'сто' },
        { es: '101 — ciento uno', ru: 'сто один' },
        { es: '137 — ciento treinta y siete', ru: 'сто тридцать семь' },
        { es: '1 000 — mil', ru: 'тысяча' },
        { es: '1 000 000 — un millón', ru: 'миллион' },
      ],
    },
    {
      type: 'heading',
      text: 'Сотни',
    },
    {
      type: 'table',
      caption: 'Centenas — формы',
      columns: ['Cifra', 'Masculino', 'Femenino'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['100', '<em>cien</em>', '<em>cien</em>'],
        ['200', '<em>doscientos</em>', '<em>doscientas</em>'],
        ['300', '<em>trescientos</em>', '<em>trescientas</em>'],
        ['400', '<em>cuatrocientos</em>', '<em>cuatrocientas</em>'],
        ['500', '<em>quinientos</em>', '<em>quinientas</em>'],
        ['600', '<em>seiscientos</em>', '<em>seiscientas</em>'],
        ['700', '<em>setecientos</em>', '<em>setecientas</em>'],
        ['800', '<em>ochocientos</em>', '<em>ochocientas</em>'],
        ['900', '<em>novecientos</em>', '<em>novecientas</em>'],
      ],
    },
    {
      type: 'rule',
      es: '<strong>cien / ciento.</strong> Forma <em>cien</em> ante un nombre (masculino o femenino) y ante <em>mil</em> o <em>millones</em>; <em>ciento</em> sólo cuando viene seguido de unidades o decenas.',
      ru: 'Ровно «сто» — это <em>cien</em>: <em>cien euros, cien personas, cien mil, cien millones</em>. Форма <em>ciento</em> используется только когда сразу после идут единицы или десятки: <em>ciento uno, ciento veinticinco, ciento treinta y siete</em>.',
      examples: [
        { es: 'cien hombres / cien mujeres', ru: '100 мужчин / 100 женщин' },
        { es: 'cien mil habitantes', ru: '100 000 жителей' },
        { es: 'ciento dos páginas', ru: '102 страницы' },
        { es: 'ciento cincuenta euros', ru: '150 евро' },
      ],
    },
    {
      type: 'rule',
      es: 'Las <strong>centenas (200, 300…)</strong> y la palabra <em>una</em> en <em>ciento una, doscientas una…</em> <strong>concuerdan en género</strong> con el nombre que cuentan.',
      ru: 'Сложные сотни и слово <em>una</em> внутри числа <strong>согласуются в роде</strong> с тем, что считают: <em>doscientos euros</em>, но <em>doscientas personas</em>; <em>ciento un libros</em>, но <em>ciento una páginas</em>. Все остальные числа (3, 27, 1000…) по роду не меняются.',
      examples: [
        { es: 'doscientos euros — doscientas personas', ru: '200 €  — 200 человек' },
        { es: 'quinientos kilos — quinientas casas', ru: '500 кг — 500 домов' },
        { es: 'novecientos libros — novecientas páginas', ru: '900 книг — 900 страниц' },
        { es: 'veintiún chicos — veintiuna chicas', ru: '21 парень — 21 девушка' },
      ],
    },
    {
      type: 'heading',
      text: 'Mil и millón',
    },
    {
      type: 'rule',
      es: '<strong>mil</strong> es invariable. Su plural <em>miles</em> sólo aparece como sustantivo (<em>miles de personas</em>). <strong>millón</strong> sí varía: <em>un millón → dos millones</em>.',
      ru: '<em>mil</em> в составе числа не меняется: <em>dos mil, diez mil, cien mil</em>. Множественное <em>miles</em> бывает только как существительное со значением «тысячи (множества)» — <em>miles de turistas</em>. А вот <em>millón</em> ведёт себя как существительное и принимает <em>-es</em> во множественном: <em>un millón, dos millones, diez millones</em>.',
      examples: [
        { es: '2 079 — dos mil setenta y nueve', ru: '2 079' },
        { es: '10 000 — diez mil', ru: '10 000' },
        { es: '100 000 — cien mil', ru: '100 000' },
        { es: '2 000 000 — dos millones', ru: '2 000 000' },
      ],
    },
    {
      type: 'atencion',
      es: 'Cuando <em>millón</em> va inmediatamente delante del nombre que cuenta, se necesita la preposición <strong>de</strong>: <em>un millón <strong>de</strong> euros, tres millones <strong>de</strong> habitantes</em>. PERO si entre <em>millón / millones</em> y el nombre hay otro número, <strong>no</strong> se pone <em>de</em>: <em>un millón <span style="text-decoration: line-through">de</span> doscientos mil euros</em>, <em>tres millones cien mil habitantes</em>.',
      ru: '<em>millón</em> перед существительным требует предлога <em>de</em>: <em>un millón de euros</em>. Но если между <em>millón</em> и существительным стоит другое число — <em>de</em> уходит: <em>un millón doscientos mil euros</em>, <em>tres millones cien mil habitantes</em>.',
    },
    {
      type: 'heading',
      text: 'Большие числа целиком',
    },
    {
      type: 'table',
      caption: 'Примеры разбора',
      columns: ['Cifra', 'En palabras'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['864 325', '<em>ochocientos sesenta y cuatro mil trescientos veinticinco</em>'],
        ['1 537 982', '<em>un millón quinientos treinta y siete mil novecientos ochenta y dos</em>'],
        ['10 410 212', '<em>diez millones cuatrocientos diez mil doscientos doce</em>'],
        ['1 212', '<em>mil doscientos doce</em>'],
        ['2 400 000', '<em>dos millones cuatrocientos mil</em>'],
      ],
    },
    {
      type: 'heading',
      text: 'Десятичная запятая, годы',
    },
    {
      type: 'rule',
      es: 'En español la <strong>coma</strong> separa decimales (no el punto). Se lee <em>coma</em>; tras la coma se leen los dígitos como un número entero o uno por uno.',
      ru: 'Запятая в испанском — десятичный разделитель (а точка — разделитель тысяч, как в русском пробел). Читается «<em>coma</em>», после неё — либо число целиком, либо по одной цифре.',
      examples: [
        { es: '3,1416 — tres coma catorce dieciséis', ru: '3,1416 — три и 1416' },
        { es: '6,10 — seis (con) diez', ru: '6,10 — шесть и 10' },
        { es: '0,5 — cero coma cinco', ru: '0,5' },
      ],
    },
    {
      type: 'rule',
      es: 'Los <strong>años</strong> se leen siempre como un único número entero, sin partirlo en pares como en inglés.',
      ru: 'Годы читаются <strong>одним целым числом</strong>: 1989 — это «тысяча девятьсот восемьдесят девять», а не «девятнадцать восемьдесят девять».',
      examples: [
        { es: '1989 — mil novecientos ochenta y nueve', ru: '1989' },
        { es: '2002 — dos mil dos', ru: '2002' },
        { es: '2003 — dos mil tres', ru: '2003' },
        { es: '1492 — mil cuatrocientos noventa y dos', ru: '1492' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '26.1',
      title: 'Запишите число словами',
      type: 'fill',
      instructions: 'Напишите число <strong>прописью</strong> (полностью, без сокращений). Помните о пробелах и союзе <em>y</em> только перед единицами.',
      questions: [
        { id: 'q1', prompt: '<em>183</em> →',     correct: 'ciento ochenta y tres' },
        { id: 'q2', prompt: '<em>1 070</em> →',   correct: 'mil setenta' },
        { id: 'q3', prompt: '<em>3 561</em> →',   correct: 'tres mil quinientos sesenta y uno' },
        { id: 'q4', prompt: '<em>500</em> →',     correct: 'quinientos' },
        { id: 'q5', prompt: '<em>900</em> →',     correct: 'novecientos' },
        { id: 'q6', prompt: '<em>2 015</em> →',   correct: 'dos mil quince' },
        { id: 'q7', prompt: '<em>100 000</em> →', correct: 'cien mil' },
        { id: 'q8', prompt: '<em>1 000 000</em> →', correct: 'un millón' },
        { id: 'q9', prompt: '<em>5 200 000</em> →', correct: 'cinco millones doscientos mil' },
        { id: 'q10', prompt: '<em>22 891 604</em> →', correct: 'veintidós millones ochocientos noventa y un mil seiscientos cuatro', explanation: 'В составе числа: <em>ochocientos noventa y un mil</em> — <em>uno</em> теряет <em>-o</em> перед <em>mil</em>.' },
      ],
    },

    {
      id: '26.2',
      title: 'cien или ciento?',
      type: 'choice',
      instructions: 'Какая форма правильна перед этим существительным или числом?',
      questions: [
        { id: 'q1',  prompt: '___ euros',          options: ['cien', 'ciento'], correct: 'cien' },
        { id: 'q2',  prompt: '___ tres páginas',   options: ['cien', 'ciento'], correct: 'ciento', explanation: 'Перед единицами/десятками — <em>ciento</em>.' },
        { id: 'q3',  prompt: '___ veinticinco',    options: ['cien', 'ciento'], correct: 'ciento' },
        { id: 'q4',  prompt: '___ mil habitantes', options: ['cien', 'ciento'], correct: 'cien', explanation: 'Перед <em>mil</em> — всегда <em>cien</em>.' },
        { id: 'q5',  prompt: '___ millones de pesos', options: ['cien', 'ciento'], correct: 'cien' },
        { id: 'q6',  prompt: '___ personas',       options: ['cien', 'ciento'], correct: 'cien' },
        { id: 'q7',  prompt: '___ cincuenta',      options: ['cien', 'ciento'], correct: 'ciento' },
        { id: 'q8',  prompt: '___ uno de cada dos', options: ['cien', 'ciento'], correct: 'ciento' },
      ],
    },

    {
      id: '26.3',
      title: 'Согласование сотен по роду',
      type: 'fill',
      instructions: 'Допишите число в правильной форме (мужской или женский род).',
      questions: [
        { id: 'q1', prompt: '300 chicos → ___ chicos',          correct: 'trescientos' },
        { id: 'q2', prompt: '300 chicas → ___ chicas',          correct: 'trescientas' },
        { id: 'q3', prompt: '500 euros → ___ euros',            correct: 'quinientos' },
        { id: 'q4', prompt: '500 personas → ___ personas',       correct: 'quinientas' },
        { id: 'q5', prompt: '700 kilos → ___ kilos',             correct: 'setecientos' },
        { id: 'q6', prompt: '700 casas → ___ casas',             correct: 'setecientas' },
        { id: 'q7', prompt: '900 libros → ___ libros',           correct: 'novecientos' },
        { id: 'q8', prompt: '900 páginas → ___ páginas',         correct: 'novecientas' },
        { id: 'q9', prompt: '21 chicas → ___ chicas',            correct: 'veintiuna', explanation: '<em>una</em> внутри числа тоже согласуется по роду.' },
        { id: 'q10', prompt: '201 mujeres → doscientas ___ mujeres', correct: 'una' },
      ],
    },

    {
      id: '26.4',
      title: 'mil, millón и предлог de',
      type: 'choice',
      instructions: 'Выберите правильный вариант. Помните: <em>de</em> ставится только если <em>millón</em> идёт <strong>прямо перед существительным</strong>.',
      questions: [
        { id: 'q1', prompt: 'La Habana tiene ___ habitantes.',  options: ['dos millones de', 'dos millones'], correct: 'dos millones de' },
        { id: 'q2', prompt: 'Pagué ___.',                         options: ['un millón doscientos mil euros', 'un millón de doscientos mil euros'], correct: 'un millón doscientos mil euros', explanation: 'Между <em>millón</em> и <em>euros</em> есть число — <em>de</em> не нужно.' },
        { id: 'q3', prompt: 'Esa empresa vale ___.',              options: ['tres millones euros', 'tres millones de euros'], correct: 'tres millones de euros' },
        { id: 'q4', prompt: 'En el banco hay ___.',               options: ['cien mil euros', 'cien mil de euros'], correct: 'cien mil euros', explanation: 'После <em>mil</em> предлога <em>de</em> нет.' },
        { id: 'q5', prompt: 'La ciudad tiene ___ habitantes.',    options: ['tres millones cien mil', 'tres millones de cien mil'], correct: 'tres millones cien mil' },
        { id: 'q6', prompt: 'La empresa factura ___.',            options: ['un millón de dólares', 'un millón dólares'], correct: 'un millón de dólares' },
      ],
    },

    {
      id: '26.5',
      title: 'Заполните пропуски прописью',
      type: 'fill',
      instructions: 'Запишите число (которое в скобках) словами в правильной форме.',
      questions: [
        { id: 'q1', prompt: 'María gana (2 085) ___ euros al mes.',           correct: 'dos mil ochenta y cinco' },
        { id: 'q2', prompt: 'Rafael tiene una colección de más de (300) ___ mariposas.', correct: 'trescientas', explanation: '<em>mariposas</em> — женский род.' },
        { id: 'q3', prompt: 'La mujer más vieja del mundo tiene (118) ___ años.', correct: 'ciento dieciocho' },
        { id: 'q4', prompt: 'De Cartagena a Bogotá hay (1 274) ___ kilómetros.', correct: 'mil doscientos setenta y cuatro' },
        { id: 'q5', prompt: 'Alberto pesa (108) ___ kilos.',                     correct: 'ciento ocho' },
        { id: 'q6', prompt: 'Esta televisión cuesta (310) ___ bolívares.',       correct: 'trescientos diez' },
        { id: 'q7', prompt: 'La biblioteca tiene (500) ___ libros.',              correct: 'quinientos' },
        { id: 'q8', prompt: 'En la sala hay (200) ___ sillas.',                   correct: 'doscientas' },
      ],
    },

    {
      id: '26.6',
      title: 'Год прописью',
      type: 'fill',
      instructions: 'Запишите год полностью одним числом.',
      questions: [
        { id: 'q1', prompt: '<em>1492</em> →', correct: 'mil cuatrocientos noventa y dos' },
        { id: 'q2', prompt: '<em>1812</em> →', correct: 'mil ochocientos doce' },
        { id: 'q3', prompt: '<em>1954</em> →', correct: 'mil novecientos cincuenta y cuatro' },
        { id: 'q4', prompt: '<em>1989</em> →', correct: 'mil novecientos ochenta y nueve' },
        { id: 'q5', prompt: '<em>2001</em> →', correct: 'dos mil uno' },
        { id: 'q6', prompt: '<em>2008</em> →', correct: 'dos mil ocho' },
        { id: 'q7', prompt: '<em>2026</em> →', correct: 'dos mil veintiséis' },
      ],
    },

    {
      id: '26.7',
      title: 'Десятичные дроби',
      type: 'fill',
      instructions: 'Прочитайте число вслух — допишите словесную форму. Десятичный разделитель — <em>coma</em>.',
      questions: [
        { id: 'q1', prompt: '<em>0,5</em> →',     correct: ['cero coma cinco'] },
        { id: 'q2', prompt: '<em>2,75</em> →',     correct: ['dos coma setenta y cinco', 'dos coma siete cinco'] },
        { id: 'q3', prompt: '<em>6,10</em> →',     correct: ['seis coma diez', 'seis con diez'] },
        { id: 'q4', prompt: '<em>3,1416</em> →',   correct: ['tres coma catorce dieciséis', 'tres coma uno cuatro uno seis'] },
        { id: 'q5', prompt: '<em>10,2</em> →',     correct: ['diez coma dos'] },
      ],
    },

    {
      id: '26.8',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма не соответствует норме — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['cien euros', 'ciento mil', 'cien mil', 'cien personas'], correct: 'ciento mil', explanation: 'Перед <em>mil</em> — <em>cien</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['doscientos libros', 'doscientas páginas', 'doscientos personas', 'trescientas casas'], correct: 'doscientos personas', explanation: '<em>personas</em> — женский род: <em>doscientas</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['cinco millones de euros', 'un millón doscientos mil', 'tres millones de cien mil habitantes', 'dos millones'], correct: 'tres millones de cien mil habitantes', explanation: 'Если после <em>millones</em> есть число, <em>de</em> не нужно.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['mil dos', 'dos mil', 'dos miles', 'cien mil'], correct: 'dos miles', explanation: '<em>mil</em> в составе числа неизменно: <em>dos mil</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['veintiuna chicas', 'ciento un libros', 'doscientas una páginas', 'trescienta personas'], correct: 'trescienta personas', explanation: '«300» — <em>trescientas</em> (или <em>trescientos</em> для м. рода). Формы <em>trescienta</em> нет.' },
      ],
    },

    {
      id: '26.9',
      title: 'Сопоставьте цифру и слова',
      type: 'match',
      instructions: 'Подберите для каждой цифры словесную форму.',
      pool: [
        'quinientos cuarenta',
        'cien mil',
        'mil cien',
        'un millón',
        'dos millones',
        'cien',
        'mil',
        'quince mil',
      ],
      questions: [
        { id: 'q1', prompt: '<em>100</em>',         correct: 'cien' },
        { id: 'q2', prompt: '<em>540</em>',         correct: 'quinientos cuarenta' },
        { id: 'q3', prompt: '<em>1 000</em>',       correct: 'mil' },
        { id: 'q4', prompt: '<em>1 100</em>',       correct: 'mil cien' },
        { id: 'q5', prompt: '<em>15 000</em>',      correct: 'quince mil' },
        { id: 'q6', prompt: '<em>100 000</em>',     correct: 'cien mil' },
        { id: 'q7', prompt: '<em>1 000 000</em>',   correct: 'un millón' },
        { id: 'q8', prompt: '<em>2 000 000</em>',   correct: 'dos millones' },
      ],
    },

    {
      id: '26.10',
      title: 'Цена в нескольких валютах',
      type: 'fill',
      instructions: 'Запишите сумму прописью с названием валюты. Образец: <em>$ 205 → doscientos cinco dólares</em>.',
      questions: [
        { id: 'q1', prompt: '<em>€ 301</em> →',     correct: 'trescientos un euros' },
        { id: 'q2', prompt: '<em>¥ 2 612</em> →',    correct: 'dos mil seiscientos doce yenes' },
        { id: 'q3', prompt: '<em>€ 83 195</em> →',   correct: 'ochenta y tres mil ciento noventa y cinco euros' },
        { id: 'q4', prompt: '<em>$ 568</em> →',      correct: 'quinientos sesenta y ocho dólares' },
        { id: 'q5', prompt: '<em>$ 1 421</em> →',    correct: 'mil cuatrocientos veintiún dólares', explanation: '<em>veintiún</em> теряет <em>-o</em> перед существительным мужского рода.' },
        { id: 'q6', prompt: '<em>€ 833</em> →',      correct: 'ochocientos treinta y tres euros' },
        { id: 'q7', prompt: '<em>$ 1 000 000</em> →', correct: 'un millón de dólares' },
      ],
    },

    {
      id: '26.11',
      title: 'Аудио: послушайте число',
      type: 'fill',
      instructions: 'Нажмите 🔊 и запишите услышанное число <strong>словами</strong>.',
      questions: [
        { id: 'q1', prompt: '', audio: 'ciento veinticinco',                  correct: ['ciento veinticinco'] },
        { id: 'q2', prompt: '', audio: 'quinientos',                            correct: ['quinientos'] },
        { id: 'q3', prompt: '', audio: 'novecientas páginas',                   correct: ['novecientas páginas'] },
        { id: 'q4', prompt: '', audio: 'dos mil veintiséis',                    correct: ['dos mil veintiséis'] },
        { id: 'q5', prompt: '', audio: 'cien mil habitantes',                   correct: ['cien mil habitantes'] },
        { id: 'q6', prompt: '', audio: 'tres millones de euros',                correct: ['tres millones de euros'] },
        { id: 'q7', prompt: '', audio: 'mil novecientos ochenta y nueve',       correct: ['mil novecientos ochenta y nueve'] },
      ],
    },

    {
      id: '26.12',
      title: 'Вычислите и напишите словами',
      type: 'fill',
      instructions: 'Сделайте простой подсчёт и напишите ответ прописью.',
      questions: [
        { id: 'q1', prompt: '<em>50 + 50 = ?</em>',         correct: 'cien' },
        { id: 'q2', prompt: '<em>250 + 250 = ?</em>',       correct: 'quinientos' },
        { id: 'q3', prompt: '<em>500 × 2 = ?</em>',         correct: 'mil' },
        { id: 'q4', prompt: '<em>1 000 × 1 000 = ?</em>',    correct: 'un millón' },
        { id: 'q5', prompt: '<em>100 × 9 = ?</em>',         correct: 'novecientos' },
        { id: 'q6', prompt: '<em>1 500 + 500 = ?</em>',     correct: 'dos mil' },
        { id: 'q7', prompt: '<em>700 + 200 = ?</em>',       correct: 'novecientos' },
      ],
    },

    {
      id: '26.13',
      title: 'Какие формы существуют',
      type: 'multi',
      instructions: 'Отметьте все <strong>правильные</strong> словесные формы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Выберите все корректные варианты:',
          options: [
            'cien personas',
            'ciento personas',
            'doscientos chicas',
            'doscientas chicas',
            'quinientos euros',
            'quinientas euros',
            'un millón de euros',
            'un millón euros',
            'dos millones cien mil',
            'dos millones de cien mil',
          ],
          correct: ['cien personas', 'doscientas chicas', 'quinientos euros', 'un millón de euros', 'dos millones cien mil'],
          explanation: 'Перед существительным — <em>cien</em>; сотни согласуются по роду; <em>millón</em> + сущ. → с <em>de</em>; если между <em>millones</em> и сущ. есть другое число — <em>de</em> убирается.',
        },
      ],
    },
  ],
};
