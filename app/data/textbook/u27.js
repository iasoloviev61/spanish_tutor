// ============================================================
// Unidad 27 — Números ordinales: primero, segundo, tercero…
// Порядковые числительные, согласование, апокопа perед
// существительным, особенности использования.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u27 = {
  id: 'u27',
  number: 27,
  title: { es: 'primero, segundo, tercero…', topic: 'Números ordinales' },
  topicRu: 'Порядковые числительные',

  theory: [
    {
      type: 'rule',
      es: 'Los <strong>números ordinales</strong> sirven para indicar el <em>orden</em> en una clasificación o en una secuencia.',
      ru: 'Порядковые числительные обозначают <strong>порядок</strong> элементов: «первый, второй, третий…». Они отвечают на вопрос «который по счёту?».',
      examples: [
        { es: 'Yo vivo en el cuarto piso.', ru: 'Я живу на четвёртом этаже.' },
        { es: 'Ana es mi tercera profesora de español.', ru: 'Ана — моя третья учительница испанского.' },
        { es: 'Javier acabó sexto en el maratón.', ru: 'Хавьер пришёл шестым в марафоне.' },
      ],
    },
    {
      type: 'heading',
      text: 'Формы 1–10',
    },
    {
      type: 'table',
      caption: 'Números ordinales',
      columns: ['Cifra', 'Masculino', 'Femenino'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['1.º / 1.ª', '<em>primero / primer</em>', '<em>primera</em>'],
        ['2.º / 2.ª', '<em>segundo</em>', '<em>segunda</em>'],
        ['3.º / 3.ª', '<em>tercero / tercer</em>', '<em>tercera</em>'],
        ['4.º / 4.ª', '<em>cuarto</em>', '<em>cuarta</em>'],
        ['5.º / 5.ª', '<em>quinto</em>', '<em>quinta</em>'],
        ['6.º / 6.ª', '<em>sexto</em>', '<em>sexta</em>'],
        ['7.º / 7.ª', '<em>séptimo</em>', '<em>séptima</em>'],
        ['8.º / 8.ª', '<em>octavo</em>', '<em>octava</em>'],
        ['9.º / 9.ª', '<em>noveno</em>', '<em>novena</em>'],
        ['10.º / 10.ª', '<em>décimo</em>', '<em>décima</em>'],
      ],
    },
    {
      type: 'rule',
      es: '<strong>Concordancia.</strong> Los ordinales tienen la misma forma (masculino, femenino, singular, plural) que el nombre al que se refieren.',
      ru: 'Порядковые согласуются с существительным <strong>в роде и числе</strong> — как обычное прилагательное.',
      examples: [
        { es: 'la tercera planta', ru: 'третий этаж (la planta — ж. р.)' },
        { es: 'el cuarto día', ru: 'четвёртый день' },
        { es: 'los primeros días', ru: 'первые дни' },
        { es: 'las últimas filas', ru: 'последние ряды' },
        { es: 'Chus y yo quedamos segundos en un campeonato.', ru: 'Чус и я заняли второе место (мы оба — м. р., мн. ч.).' },
      ],
    },
    {
      type: 'atencion',
      es: '<strong>primero, tercero</strong> + sustantivo masculino singular = <em>primer, tercer</em> (apócope).',
      ru: 'Перед существительным <strong>мужского рода в единственном числе</strong> формы <em>primero</em> и <em>tercero</em> теряют конечное <em>-o</em>: <em>el <strong>primer</strong> tren, el <strong>tercer</strong> día</em>. На женский род и множественное число это не распространяется: <em>la <strong>primera</strong> vez, los <strong>primeros</strong> días</em>.',
    },
    {
      type: 'heading',
      text: 'Использование',
    },
    {
      type: 'rule',
      es: 'Los ordinales pueden ir <strong>delante o detrás</strong> del nombre.',
      ru: 'Ordinales могут стоять <strong>до</strong> или <strong>после</strong> существительного — оба варианта правильны: <em>el segundo piso = el piso segundo</em>. После существительного — чуть более «технический», адресный стиль (планировки, нумерация).',
      examples: [
        { es: 'Vivo en el segundo piso. / Vivo en el piso segundo.', ru: 'Живу на втором этаже.' },
        { es: 'la primera fila / la fila primera', ru: 'первый ряд' },
      ],
    },
    {
      type: 'rule',
      es: 'A partir del <strong>11.º</strong>, normalmente se usan los <em>cardinales</em>, no los ordinales: <em>Alfonso XIII (trece)</em>, <em>el piso diecisiete</em>, <em>el siglo XIX (diecinueve)</em>.',
      ru: 'Начиная с <strong>11-го</strong>, в реальной речи обычно ставят <em>обычное (cardinal)</em> число, а не порядковое: <em>Alfonso XIII = Alfonso trece</em>, <em>el piso diecisiete</em>, <em>el siglo diecinueve</em>. Поэтому формы <em>undécimo, duodécimo, decimoctavo…</em> в живой речи почти не встречаются.',
      examples: [
        { es: 'Alfonso XIII (trece)', ru: 'Альфонс Тринадцатый' },
        { es: 'la oficina está en el piso diecisiete', ru: 'офис на 17-м этаже' },
        { es: 'el siglo XIX (diecinueve)', ru: '19-й век' },
        { es: 'Juan Pablo II (segundo)', ru: 'Иоанн Павел Второй (с числами 1–10 — порядковое)' },
      ],
    },
    {
      type: 'atencion',
      es: 'Para nombres propios (reyes, papas, capítulos…) se usan <strong>ordinales</strong> hasta 10, pero <strong>cardinales</strong> a partir de 11. Y, en general, no se usa el ordinal con un nombre propio cuando el ordinal mismo está sin sustantivo: <em>Carlos V (quinto)</em>, no <em><span style="text-decoration: line-through">el quinto Carlos</span></em>.',
      ru: 'Для королей, пап, глав книги: 1–10 — порядковое (<em>Felipe VI = sexto</em>), от 11 — обычное число (<em>Alfonso XIII = trece</em>). При этом порядковое с именем собственным не превращается в самостоятельное прилагательное (<em>Carlos V = quinto</em>, нельзя <em>el quinto Carlos</em>).',
    },
    {
      type: 'rule',
      es: 'Los ordinales pueden aparecer <strong>solos</strong>, sin sustantivo, cuando está claro a qué se refieren.',
      ru: 'Если из контекста понятно, о чём речь, порядковое употребляется <strong>без существительного</strong>: <em>El Universidad de Chile va primero en la liga</em> «Universidad de Chile идёт первой в лиге»; <em>—¿Por qué capítulo vas? —Por el quinto.</em>',
      examples: [
        { es: '—¿Por qué capítulo vas? —Por el quinto.', ru: '— На какой главе ты сейчас? — На пятой.' },
        { es: 'Llegó la primera.', ru: 'Она пришла первой.' },
      ],
    },
    {
      type: 'heading',
      text: 'Запись цифрами',
    },
    {
      type: 'rule',
      es: 'En cifras, se añade <strong>.º</strong> para masculino, <strong>.ª</strong> para femenino. También se usan los <strong>números romanos</strong>.',
      ru: 'На письме порядковые сокращают так: <em>1.º, 2.º, 3.º…</em> для мужского и <em>1.ª, 2.ª, 3.ª…</em> для женского. Точка между цифрой и буквой ставится в академической норме (часто опускается). В именах, главах, веках и т.п. используют <strong>римские цифры</strong>: <em>Felipe VI, capítulo VIII, siglo XIX</em>.',
      examples: [
        { es: '1.º dcha. — primero derecha', ru: '1-я квартира направо' },
        { es: 'capítulo VIII (octavo)', ru: 'глава 8' },
        { es: 'Fernando III (tercero)', ru: 'Фернандо III' },
      ],
    },
  ],

  exercises: [
    {
      id: '27.1',
      title: 'Запишите число прописью',
      type: 'fill',
      instructions: 'Дано порядковое в цифровой записи и существительное — запишите ordinal <strong>словами</strong> в нужной форме.',
      questions: [
        { id: 'q1',  prompt: '<em>(2.º) ___ piso</em>',           correct: 'segundo' },
        { id: 'q2',  prompt: '<em>(1.º) ___ premio</em>',          correct: 'primer', explanation: 'Перед сущ. м. р. ед. ч. — <em>primer</em>.' },
        { id: 'q3',  prompt: '<em>(1.ª) ___ planta</em>',          correct: 'primera' },
        { id: 'q4',  prompt: '<em>(3.º) ___ día</em>',             correct: 'tercer', explanation: 'Перед сущ. м. р. ед. ч. — <em>tercer</em>.' },
        { id: 'q5',  prompt: '<em>(3.ª) ___ vez</em>',             correct: 'tercera' },
        { id: 'q6',  prompt: '<em>(5.º) ___ capítulo</em>',         correct: 'quinto' },
        { id: 'q7',  prompt: '<em>(7.ª) ___ semana</em>',           correct: 'séptima' },
        { id: 'q8',  prompt: '<em>(8.º) ___ piso</em>',             correct: 'octavo' },
        { id: 'q9',  prompt: '<em>(9.ª) ___ sinfonía</em>',          correct: 'novena' },
        { id: 'q10', prompt: '<em>(10.º) ___ aniversario</em>',     correct: 'décimo' },
        { id: 'q11', prompt: '<em>(1.os) ___ días</em>',             correct: 'primeros' },
        { id: 'q12', prompt: '<em>(3.as) ___ jornadas</em>',         correct: 'terceras' },
      ],
    },

    {
      id: '27.2',
      title: 'Этажи в офисном здании',
      type: 'fill',
      instructions: 'По таблице офисов: <em>Antonio Oliva — 2.º C, Servicios de Gas — 11.º A, Sastrería Moderna — 10.ª D, Moreno-Arribas (abogados) — 3.º D, Molina Cardoso — 12.º A, Gestoría Salvado — 1.º A, Hispanosa — 14.º D, Academia Cervantes — 4.ª B, Julia Salinas — 7.º C, Editorial Mundisa — 9.º D</em>. Запишите числительное прописью (без буквы офиса).',
      questions: [
        { id: 'q1', prompt: 'Antonio Oliva vive en el piso ___.',                       correct: 'segundo' },
        { id: 'q2', prompt: 'Las oficinas de Servicios de Gas están en el piso ___.',     correct: 'once', explanation: 'С 11-го пользуются обычными числами.' },
        { id: 'q3', prompt: 'La sastrería Moderna está en la ___ planta.',                correct: 'décima' },
        { id: 'q4', prompt: 'Hay un despacho de abogados en el ___ piso.',                correct: 'tercer', explanation: 'Перед сущ. м. р. ед. ч. — <em>tercer</em>.' },
        { id: 'q5', prompt: 'La familia Molina Cardoso vive en el piso ___.',              correct: 'doce' },
        { id: 'q6', prompt: 'La gestoría Salvado está en el ___ piso.',                    correct: 'primer' },
        { id: 'q7', prompt: 'Las oficinas de Hispanosa están en el piso ___.',              correct: 'catorce' },
        { id: 'q8', prompt: 'La academia Cervantes está en la ___ planta.',                 correct: 'cuarta' },
        { id: 'q9', prompt: 'Julia Salinas vive en el piso ___.',                            correct: 'séptimo' },
        { id: 'q10', prompt: 'La editorial Mundisa está en el ___ piso.',                    correct: 'noveno' },
      ],
    },

    {
      id: '27.3',
      title: 'Имена королей и пап',
      type: 'fill',
      instructions: 'Запишите имя с порядковым числительным. До <em>10</em> — порядковое; с <em>11</em> — обычное число.',
      questions: [
        { id: 'q1', prompt: '<em>Juan Carlos I</em> →',  correct: 'Juan Carlos primero' },
        { id: 'q2', prompt: '<em>Isabel I</em> →',         correct: 'Isabel primera' },
        { id: 'q3', prompt: '<em>Juan XXIII</em> →',       correct: 'Juan veintitrés' },
        { id: 'q4', prompt: '<em>Alfonso XII</em> →',      correct: 'Alfonso doce' },
        { id: 'q5', prompt: '<em>Luis XV</em> →',          correct: 'Luis quince' },
        { id: 'q6', prompt: '<em>Iván IV</em> →',          correct: 'Iván cuarto' },
        { id: 'q7', prompt: '<em>Margarita II</em> →',      correct: 'Margarita segunda' },
        { id: 'q8', prompt: '<em>Pío XI</em> →',           correct: 'Pío once' },
        { id: 'q9', prompt: '<em>Juana III</em> →',        correct: 'Juana tercera' },
        { id: 'q10', prompt: '<em>Juan Pablo II</em> →',    correct: 'Juan Pablo segundo' },
      ],
    },

    {
      id: '27.4',
      title: 'Apócope: primer / tercer',
      type: 'choice',
      instructions: 'Какая форма правильна? Помните: <em>primer / tercer</em> — только перед существительным мужского рода в единственном числе.',
      questions: [
        { id: 'q1', prompt: 'Es la ___ vez que vengo aquí.',  options: ['primer', 'primera'], correct: 'primera' },
        { id: 'q2', prompt: 'Es mi ___ día en Madrid.',        options: ['primer', 'primero'], correct: 'primer' },
        { id: 'q3', prompt: 'Es el ___ tren del día.',         options: ['primer', 'primero'], correct: 'primer' },
        { id: 'q4', prompt: 'Llegó el ___.',                   options: ['primer', 'primero'], correct: 'primero', explanation: 'Без существительного — полная форма.' },
        { id: 'q5', prompt: 'Hoy es nuestro ___ día en Bolivia.', options: ['tercer', 'tercero'], correct: 'tercer' },
        { id: 'q6', prompt: 'En el ___ capítulo del libro.',     options: ['tercer', 'tercero'], correct: 'tercer' },
        { id: 'q7', prompt: 'Vive en la ___ planta.',             options: ['tercer', 'tercera'], correct: 'tercera' },
        { id: 'q8', prompt: 'Los ___ días son siempre difíciles.', options: ['primer', 'primeros'], correct: 'primeros', explanation: 'Множественное число — апокопа не работает.' },
      ],
    },

    {
      id: '27.5',
      title: 'Согласование по роду и числу',
      type: 'fill',
      instructions: 'Допишите ordinal в правильной форме.',
      questions: [
        { id: 'q1', prompt: 'Estudio (2.º) ___ curso de Arquitectura.',          correct: 'segundo' },
        { id: 'q2', prompt: 'Enero es el (1.º) ___ mes del año.',                  correct: 'primer' },
        { id: 'q3', prompt: 'Voy por el capítulo (11.º) ___.',                      correct: 'once' },
        { id: 'q4', prompt: 'El Valencia es el (1.º) ___ en la Liga.',             correct: 'primero', explanation: 'Без существительного — полная форма.' },
        { id: 'q5', prompt: 'Javi es el (3.º) ___ de sus hermanos.',                 correct: 'tercero', explanation: 'Без сущ. — полная форма <em>tercero</em>.' },
        { id: 'q6', prompt: 'Ellas han sido las (1.ª, мн.) ___ en llegar.',         correct: 'primeras' },
        { id: 'q7', prompt: 'La <em>ñ</em> es la letra (15.ª) ___ del alfabeto.',   correct: 'quince' },
        { id: 'q8', prompt: 'El despacho de José está en el (8.º) ___ piso.',       correct: 'octavo' },
        { id: 'q9', prompt: 'Tuerza por la (2.ª) ___ calle a la izquierda.',         correct: 'segunda' },
        { id: 'q10', prompt: 'Nos vamos de vacaciones la (3.ª) ___ semana de agosto.', correct: 'tercera' },
        { id: 'q11', prompt: 'El siglo XVIII fue el Siglo de las Luces. → siglo ___.', correct: 'dieciocho' },
        { id: 'q12', prompt: 'Tina y Carla acabaron (4.as) ___ en el campeonato.',    correct: 'cuartas' },
      ],
    },

    {
      id: '27.6',
      title: 'Сопоставьте цифру и слово',
      type: 'match',
      instructions: 'Подберите правильную словесную форму.',
      pool: ['primero', 'segundo', 'tercero', 'cuarto', 'quinto', 'sexto', 'séptimo', 'octavo', 'noveno', 'décimo'],
      questions: [
        { id: 'q1',  prompt: '<em>1.º</em>',  correct: 'primero' },
        { id: 'q2',  prompt: '<em>2.º</em>',  correct: 'segundo' },
        { id: 'q3',  prompt: '<em>3.º</em>',  correct: 'tercero' },
        { id: 'q4',  prompt: '<em>4.º</em>',  correct: 'cuarto' },
        { id: 'q5',  prompt: '<em>5.º</em>',  correct: 'quinto' },
        { id: 'q6',  prompt: '<em>6.º</em>',  correct: 'sexto' },
        { id: 'q7',  prompt: '<em>7.º</em>',  correct: 'séptimo' },
        { id: 'q8',  prompt: '<em>8.º</em>',  correct: 'octavo' },
        { id: 'q9',  prompt: '<em>9.º</em>',  correct: 'noveno' },
        { id: 'q10', prompt: '<em>10.º</em>', correct: 'décimo' },
      ],
    },

    {
      id: '27.7',
      title: 'Сначала ordinal, потом cardinal',
      type: 'choice',
      instructions: 'Какой числительный естественнее носители используют в этих случаях?',
      questions: [
        { id: 'q1', prompt: 'Vivo en el piso ___.',         options: ['quinto', 'cinco'],   correct: 'quinto' },
        { id: 'q2', prompt: 'Vivo en el piso ___.',         options: ['decimoséptimo', 'diecisiete'], correct: 'diecisiete', explanation: 'С 11-го — обычное число.' },
        { id: 'q3', prompt: 'Estamos en el siglo ___.',     options: ['vigesimoprimero', 'veintiuno'], correct: 'veintiuno' },
        { id: 'q4', prompt: 'Es el ___ aniversario.',        options: ['décimo', 'diez'], correct: 'décimo', explanation: 'Внутри 1–10 — порядковое.' },
        { id: 'q5', prompt: 'Es el aniversario número ___.', options: ['veinte', 'vigésimo'], correct: 'veinte' },
        { id: 'q6', prompt: 'Felipe ___ es el rey actual de España.', options: ['sexto', 'seis'], correct: 'sexto' },
        { id: 'q7', prompt: 'Capítulo ___.',                  options: ['quince', 'decimoquinto'], correct: 'quince' },
      ],
    },

    {
      id: '27.8',
      title: 'Перед сущ. или после',
      type: 'multi',
      instructions: 'Отметьте все <strong>правильные</strong> варианты словосочетаний.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'el segundo piso',
            'el piso segundo',
            'la primer vez',
            'la primera vez',
            'el tercer día',
            'el tercero día',
            'la tercera planta',
            'los primer días',
            'los primeros días',
            'Carlos quinto',
            'el quinto Carlos',
          ],
          correct: ['el segundo piso', 'el piso segundo', 'la primera vez', 'el tercer día', 'la tercera planta', 'los primeros días', 'Carlos quinto'],
          explanation: '<em>primero / tercero</em> теряют <em>-o</em> только перед сущ. м. р. ед. ч. С именами собственными порядковое идёт после имени.',
        },
      ],
    },

    {
      id: '27.9',
      title: 'Дата прописью',
      type: 'fill',
      instructions: 'Запишите число месяца и год прописью. Образец: <em>21 de enero de 1812 → veintiuno de enero de mil ochocientos doce</em>.',
      questions: [
        { id: 'q1', prompt: '<em>2 de mayo de 2001</em> →',     correct: 'dos de mayo de dos mil uno' },
        { id: 'q2', prompt: '<em>25 de octubre de 1954</em> →', correct: 'veinticinco de octubre de mil novecientos cincuenta y cuatro' },
        { id: 'q3', prompt: '<em>31 de diciembre de 2008</em> →', correct: 'treinta y uno de diciembre de dos mil ocho' },
        { id: 'q4', prompt: '<em>10 de julio de 1613</em> →',    correct: 'diez de julio de mil seiscientos trece' },
        { id: 'q5', prompt: '<em>1 de enero de 2026</em> →',     correct: ['uno de enero de dos mil veintiséis', 'primero de enero de dos mil veintiséis'], explanation: 'В Испании говорят <em>uno</em>; в Латинской Америке часто <em>primero</em>.' },
      ],
    },

    {
      id: '27.10',
      title: 'Аудио: послушайте порядковое',
      type: 'fill',
      instructions: 'Нажмите 🔊 и запишите услышанное словосочетание.',
      questions: [
        { id: 'q1', prompt: '', audio: 'el primer día',           correct: ['el primer día'] },
        { id: 'q2', prompt: '', audio: 'la tercera planta',        correct: ['la tercera planta'] },
        { id: 'q3', prompt: '', audio: 'el quinto piso',           correct: ['el quinto piso'] },
        { id: 'q4', prompt: '', audio: 'séptima',                  correct: ['séptima'] },
        { id: 'q5', prompt: '', audio: 'la novena sinfonía',        correct: ['la novena sinfonía'] },
        { id: 'q6', prompt: '', audio: 'Juan Pablo segundo',         correct: ['Juan Pablo segundo'] },
        { id: 'q7', prompt: '', audio: 'el siglo veintiuno',         correct: ['el siglo veintiuno'] },
      ],
    },

    {
      id: '27.11',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['el primer tren', 'la primera vez', 'el primer mujer', 'el primero capítulo'], correct: 'el primer mujer', explanation: '<em>mujer</em> ж. р.: <em>la primera mujer</em>. (Заодно — <em>el primer capítulo</em>, без -o.)' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Felipe sexto', 'Alfonso XIII trece', 'Carlos V quinto', 'el quinto Carlos'], correct: 'el quinto Carlos', explanation: 'С именами собственными порядковое <em>после</em> имени, без артикля.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['la décima sinfonía', 'el sexto piso', 'la séptima planta', 'la noveno semana'], correct: 'la noveno semana', explanation: 'Должно быть <em>la novena semana</em> (ж. р.).' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['los primeros días', 'las primeras semanas', 'los primer días', 'el primer día'], correct: 'los primer días', explanation: 'Во множественном — полная форма <em>primeros</em>.' },
      ],
    },

    {
      id: '27.12',
      title: 'Подставьте правильный ordinal',
      type: 'fill',
      instructions: 'Допишите фразу. Учитывайте род, число и положение перед сущ.',
      questions: [
        { id: 'q1', prompt: 'Mi ___ amor fue Pedro. (1.º)',                   correct: 'primer' },
        { id: 'q2', prompt: 'Mi ___ novia se llamaba Marta. (1.ª)',           correct: 'primera' },
        { id: 'q3', prompt: 'Estamos en el ___ trimestre. (3.º)',              correct: 'tercer' },
        { id: 'q4', prompt: 'Es la ___ canción del disco. (8.ª)',              correct: 'octava' },
        { id: 'q5', prompt: 'Los ___ corredores recibirán medalla. (3.os)',    correct: 'terceros' },
        { id: 'q6', prompt: 'En el ___ aniversario haremos una fiesta. (10.º)', correct: 'décimo' },
        { id: 'q7', prompt: 'Vive en la calle Goya, ___ piso. (4.º)',           correct: 'cuarto' },
        { id: 'q8', prompt: 'La ___ planta es de oficinas. (5.ª)',              correct: 'quinta' },
      ],
    },
  ],
};
