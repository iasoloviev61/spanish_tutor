// ============================================================
// Unidad 46 — Presente de indicativo de haber impersonal
// "Hay un vaso en la mesa" — наличие, существование.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u46 = {
  id: 'u46',
  number: 46,
  title: { es: 'Hay un vaso en la mesa', topic: 'Presente de indicativo de haber impersonal' },
  topicRu: 'Безличное hay: «есть, имеется» — наличие чего-либо в каком-то месте',

  theory: [
    {
      type: 'rule',
      es: 'La forma <strong>hay</strong> es la única forma del presente de <em>haber</em> impersonal: sirve igual para singular y plural y nunca cambia.',
      ru: 'Форма <strong>hay</strong> — это «безличное» <em>haber</em> в настоящем времени. Она одинаковая и для единственного, и для множественного числа, никогда не меняется по лицам.',
      examples: [
        { es: 'Hay un vaso en la mesa.', ru: 'На столе (есть/стоит) стакан.' },
        { es: 'Hay cinco alumnos en clase.', ru: 'В классе пять учеников.' },
        { es: 'No hay leche.', ru: 'Молока нет.' },
      ],
    },
    {
      type: 'heading',
      text: 'Что ставится после hay',
    },
    {
      type: 'table',
      caption: 'hay + исчисляемое существительное',
      columns: ['Конструкция', 'Пример'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['<strong>hay</strong> + <em>un / una</em> + сущ. в ед. числе', '<em>Hay un pájaro en el balcón.</em>'],
        ['<strong>hay</strong> + <em>uno / una</em> (без существительного)', '<em>—¿Hay un hotel por aquí? —Hay uno en la calle Arenal.</em>'],
        ['<strong>hay</strong> + <em>unos / unas; dos, tres…; muchos, pocos…</em> + сущ. во мн. числе', '<em>Hay muchos árboles en mi calle.</em>'],
        ['<strong>hay</strong> + число / <em>muchos, pocos</em> (без сущ.)', '<em>—¿Hay muchos cines en tu barrio? —Hay tres.</em>'],
        ['<em>¿Cuántos / cuántas</em> + сущ. + <strong>hay</strong>?', '<em>¿Cuántos chicos hay en tu clase?</em>'],
      ],
    },
    {
      type: 'table',
      caption: 'no hay + ningún / muchos…',
      columns: ['Конструкция', 'Пример'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['<strong>no hay</strong> + <em>ningún / ninguna</em> + сущ. в ед. числе', '<em>No hay ningún hotel en esta calle.</em>'],
        ['<strong>no hay</strong> + <em>muchos / muchas</em> + сущ. во мн. числе', '<em>En mi barrio no hay muchos bares.</em>'],
        ['<strong>no hay</strong> (без сущ.)', '<em>—¿Hay aeropuerto? —No hay.</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'Con <strong>nombres no contables</strong> (pan, agua, leche, azúcar…) <em>hay</em> también es invariable y suele ir sin artículo o con <em>mucho / poco…</em>.',
      ru: 'С <strong>неисчисляемыми</strong> существительными (pan, agua, leche, azúcar…) <em>hay</em> используется без артикля или с <em>mucho / poco</em>. Сама форма всё равно неизменная.',
      examples: [
        { es: 'Hay agua en el suelo.', ru: 'На полу вода.' },
        { es: 'No hay mucha mantequilla.', ru: 'Сливочного масла мало.' },
        { es: '—¿Hay pan? —No hay mucho.', ru: '—Хлеб есть? —Немного.' },
        { es: '¿Cuánta leche hay en la nevera?', ru: 'Сколько молока в холодильнике?' },
      ],
    },
    {
      type: 'heading',
      text: 'Когда употребляется hay',
    },
    {
      type: 'rule',
      es: 'Se usa <em>hay</em>: <strong>(1)</strong> para indicar o preguntar por la <strong>existencia</strong> de algo o alguien en un lugar; <strong>(2)</strong> para preguntar por la situación de algo cuya existencia <strong>no conocemos</strong>.',
      ru: '<em>Hay</em> употребляется, чтобы: <strong>(1)</strong> сказать о наличии или спросить, есть ли что-то в каком-то месте; <strong>(2)</strong> спросить, где находится что-то, о чьём существовании мы не знаем (новое для нас).',
      examples: [
        { es: '¿Hay una frutería por aquí?', ru: 'Тут поблизости есть овощной?' },
        { es: '—¿Hay pan en casa? —Sí, hay dos barras.', ru: '—Дома есть хлеб? —Да, два батона.' },
        { es: '¿Dónde hay un estanco?', ru: 'Где есть табачный киоск? (я не знаю район)' },
      ],
    },
    {
      type: 'atencion',
      es: 'Después de <strong>hay</strong> NO se usan ni el artículo determinado (<em>el, la, los, las</em>) ni los posesivos (<em>mi, tu, su…</em>). Se dice <em>hay un museo</em>, no <em>«hay el museo»</em>; <em>¿dónde hay una parada?</em>, no <em>«¿dónde hay la parada?»</em>.',
      ru: 'После <em>hay</em> НЕЛЬЗЯ ставить определённый артикль (<em>el / la / los / las</em>) и притяжательные (<em>mi, tu, su…</em>). Если предмет известен и нужен определённый артикль или притяжательное, используют не <em>hay</em>, а <em>está / están</em> (см. Unidad 47).',
    },
  ],

  exercises: [
    {
      id: '46.1',
      title: 'Что есть в комнате?',
      type: 'fill',
      instructions: 'Напишите фразу с <em>hay</em> в утвердительной или отрицательной форме. Образец: <em>(mesa) → Hay una mesa.</em>',
      questions: [
        { id: 'q1', prompt: '<em>(silla, sí)</em> →',          correct: ['Hay una silla.', 'Hay una silla'] },
        { id: 'q2', prompt: '<em>(espejo, no)</em> →',          correct: ['No hay espejo.', 'No hay espejo'], explanation: 'Без артикля или с <em>ningún</em>.' },
        { id: 'q3', prompt: '<em>(alfombra, sí)</em> →',         correct: ['Hay una alfombra.', 'Hay una alfombra'] },
        { id: 'q4', prompt: '<em>(dos lámparas)</em> →',          correct: ['Hay dos lámparas.', 'Hay dos lámparas'] },
        { id: 'q5', prompt: '<em>(televisor, no)</em> →',          correct: ['No hay televisor.', 'No hay televisor'] },
        { id: 'q6', prompt: '<em>(reloj, sí)</em> →',              correct: ['Hay un reloj.', 'Hay un reloj'] },
        { id: 'q7', prompt: '<em>(muchos cuadros)</em> →',         correct: ['Hay muchos cuadros.', 'Hay muchos cuadros'] },
        { id: 'q8', prompt: '<em>(cojín, no)</em> →',              correct: ['No hay cojín.', 'No hay cojín', 'No hay ningún cojín.', 'No hay ningún cojín'] },
      ],
    },

    {
      id: '46.2',
      title: 'Hay / No hay в холодильнике',
      type: 'fill',
      instructions: 'По данным составьте фразу с <em>hay</em>. Помните: с неисчисляемыми (<em>leche, agua, queso</em>) — без артикля.',
      questions: [
        { id: 'q1', prompt: '<em>(leche, sí)</em> →',         correct: ['Hay leche.', 'Hay leche'] },
        { id: 'q2', prompt: '<em>(agua, no)</em> →',           correct: ['No hay agua.', 'No hay agua'] },
        { id: 'q3', prompt: '<em>(seis huevos)</em> →',         correct: ['Hay seis huevos.', 'Hay seis huevos'] },
        { id: 'q4', prompt: '<em>(uvas, sí)</em> →',            correct: ['Hay uvas.', 'Hay uvas'] },
        { id: 'q5', prompt: '<em>(naranjas, no)</em> →',         correct: ['No hay naranjas.', 'No hay naranjas'] },
        { id: 'q6', prompt: '<em>(plátanos, sí: tres)</em> →',   correct: ['Hay tres plátanos.', 'Hay tres plátanos'] },
        { id: 'q7', prompt: '<em>(zumo de naranja, no)</em> →',  correct: ['No hay zumo de naranja.', 'No hay zumo de naranja'] },
        { id: 'q8', prompt: '<em>(queso, sí: poco)</em> →',      correct: ['Hay poco queso.', 'Hay poco queso'] },
      ],
    },

    {
      id: '46.3',
      title: 'Что после hay?',
      type: 'choice',
      instructions: 'Выберите грамматически правильный вариант.',
      questions: [
        { id: 'q1', prompt: 'En la calle ___ tres farmacias.',   options: ['hay', 'están'], correct: 'hay' },
        { id: 'q2', prompt: '___ pan en la cocina.',             options: ['Hay', 'Hay un'], correct: 'Hay', explanation: '<em>pan</em> — неисчисляемое: без артикля.' },
        { id: 'q3', prompt: '¿___ mucha gente en la fiesta?',    options: ['Hay', 'Están'], correct: 'Hay' },
        { id: 'q4', prompt: '¿Cuántos alumnos ___ en tu clase?', options: ['hay', 'están'], correct: 'hay' },
        { id: 'q5', prompt: 'No ___ ningún hotel por aquí.',     options: ['hay', 'está'], correct: 'hay' },
        { id: 'q6', prompt: 'En mi barrio ___ tres parques.',    options: ['hay', 'están'], correct: 'hay' },
        { id: 'q7', prompt: '—¿Hay un cine? —Sí, ___ uno en la esquina.', options: ['hay', 'es'], correct: 'hay' },
        { id: 'q8', prompt: 'No hay ___ aeropuerto en este pueblo.',       options: ['—', 'el', 'mi'], correct: '—', explanation: 'После <em>hay</em> нельзя <em>el</em> или <em>mi</em>.' },
      ],
    },

    {
      id: '46.4',
      title: 'Найдите фразу с ошибкой',
      type: 'choice',
      instructions: 'После <em>hay</em> нельзя <em>el / la / los / las</em> и притяжательные. В каждом ряду одна ошибочная фраза.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Hay un museo.', 'Hay el museo.', 'Hay tres museos.', 'No hay museos.'], correct: 'Hay el museo.', explanation: 'После <em>hay</em> определённый артикль не ставится.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['¿Hay una farmacia?', '¿Hay la farmacia?', '¿Hay farmacias?', 'No hay farmacia.'], correct: '¿Hay la farmacia?' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Hay leche.', 'Hay un leche.', 'Hay mucha leche.', 'No hay leche.'], correct: 'Hay un leche.', explanation: '<em>leche</em> — неисчисляемое.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Hay mis llaves en la mesa.', 'Hay unas llaves en la mesa.', 'Hay llaves en la mesa.', 'No hay llaves.'], correct: 'Hay mis llaves en la mesa.', explanation: 'Притяжательное (<em>mis</em>) после <em>hay</em> не ставится.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['No hay ningún problema.', 'No hay ninguna idea.', 'No hay ningunos coches.', 'No hay coches.'], correct: 'No hay ningunos coches.', explanation: '<em>ningunos</em> почти не используется; во мн. числе обычно просто <em>no hay coches</em>.' },
      ],
    },

    {
      id: '46.5',
      title: 'Сколько / какой артикль',
      type: 'fill',
      instructions: 'Допишите подходящую форму: <em>un, una, unos, unas, mucho/-a, ningún/-a, dos, tres…</em> или <code>—</code> (без артикля).',
      questions: [
        { id: 'q1', prompt: 'Hay ___ pan en la mesa. (мало)',                correct: 'poco' },
        { id: 'q2', prompt: 'Hay ___ vaso en la cocina. (один)',              correct: 'un' },
        { id: 'q3', prompt: 'Hay ___ amigas mías en la fiesta. (несколько)',  correct: 'unas' },
        { id: 'q4', prompt: 'No hay ___ leche. (вообще нет)',                  correct: '—' },
        { id: 'q5', prompt: 'Hay ___ alumnos en clase. (двадцать)',            correct: 'veinte' },
        { id: 'q6', prompt: 'No hay ___ tienda por aquí. (никакой)',           correct: 'ninguna' },
        { id: 'q7', prompt: 'Hay ___ agua en la botella. (много)',             correct: 'mucha' },
        { id: 'q8', prompt: 'Hay ___ libros muy interesantes en la biblioteca.', correct: 'unos' },
      ],
    },

    {
      id: '46.6',
      title: 'Город Сьюдад-Нуэва',
      type: 'fill',
      instructions: 'По данным таблицы напишите фразу с <em>hay</em>. Образец: <em>colegios — 5 → Hay cinco colegios.</em>',
      questions: [
        { id: 'q1', prompt: 'cines — 1 →',                 correct: ['Hay un cine.', 'Hay un cine'] },
        { id: 'q2', prompt: 'hospitales — no →',           correct: ['No hay hospitales.', 'No hay hospitales', 'No hay hospital.', 'No hay hospital'] },
        { id: 'q3', prompt: 'parques — 2 →',                correct: ['Hay dos parques.', 'Hay dos parques'] },
        { id: 'q4', prompt: 'estaciones de tren — no →',    correct: ['No hay estaciones de tren.', 'No hay estaciones de tren'] },
        { id: 'q5', prompt: 'iglesias — 3 →',                correct: ['Hay tres iglesias.', 'Hay tres iglesias'] },
        { id: 'q6', prompt: 'hoteles — no →',                correct: ['No hay hoteles.', 'No hay hoteles', 'No hay hotel.', 'No hay hotel'] },
        { id: 'q7', prompt: 'bibliotecas — 1 →',             correct: ['Hay una biblioteca.', 'Hay una biblioteca'] },
        { id: 'q8', prompt: 'farmacias — 4 →',               correct: ['Hay cuatro farmacias.', 'Hay cuatro farmacias'] },
      ],
    },

    {
      id: '46.7',
      title: 'Сопоставьте вопрос и ответ',
      type: 'match',
      instructions: 'Подберите к каждому вопросу подходящий ответ.',
      pool: [
        'Hay tres.',
        'Hay uno en la esquina.',
        'No hay mucha.',
        'No, no hay ninguno.',
        'Sí, hay dos barras.',
        'Hay diez.',
      ],
      questions: [
        { id: 'q1', prompt: '<em>¿Hay pan en casa?</em>',              correct: 'Sí, hay dos barras.' },
        { id: 'q2', prompt: '<em>¿Cuántos cines hay en tu barrio?</em>', correct: 'Hay tres.' },
        { id: 'q3', prompt: '<em>¿Hay un estanco por aquí?</em>',       correct: 'Hay uno en la esquina.' },
        { id: 'q4', prompt: '<em>¿Cuántos alumnos hay?</em>',            correct: 'Hay diez.' },
        { id: 'q5', prompt: '<em>¿Cuánta leche hay en la nevera?</em>',  correct: 'No hay mucha.' },
        { id: 'q6', prompt: '<em>¿Hay algún hotel por aquí?</em>',       correct: 'No, no hay ninguno.' },
      ],
    },

    {
      id: '46.8',
      title: 'Все формы только hay',
      type: 'multi',
      instructions: 'Отметьте <strong>все</strong> фразы, в которых <em>hay</em> употреблено правильно.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие из этих фраз корректны?',
          options: [
            'Hay un libro en la mesa.',
            'Hay tres libros en la mesa.',
            'Hay leche en la nevera.',
            'Hay el libro en la mesa.',
            'Hay mi libro en la mesa.',
            'No hay leche.',
            '¿Cuántos coches hay aquí?',
            'Hayn dos coches en la calle.',
          ],
          correct: [
            'Hay un libro en la mesa.',
            'Hay tres libros en la mesa.',
            'Hay leche en la nevera.',
            'No hay leche.',
            '¿Cuántos coches hay aquí?',
          ],
          explanation: '<em>hay</em> не меняется по числу (нет формы <em>«hayn»</em>) и не сочетается с <em>el / mi</em>.',
        },
      ],
    },

    {
      id: '46.9',
      title: 'Диалоги',
      type: 'fill',
      instructions: 'Допишите ответ или вопрос со словом <em>hay / no hay</em>.',
      questions: [
        { id: 'q1', prompt: '—¿Dónde (buzón) ___? —En la esquina.',           correct: ['hay un buzón', 'hay buzón'], placeholder: 'hay un buzón' },
        { id: 'q2', prompt: '—¿Hay un estanco por aquí? —Sí, ___ uno cerca.',  correct: 'hay' },
        { id: 'q3', prompt: 'En mi barrio (no, metro) ___.',                    correct: ['no hay metro', 'no hay metro.'] },
        { id: 'q4', prompt: '—¿Cuántos huevos hay en la nevera? —___ ninguno.', correct: ['No hay', 'no hay'] },
        { id: 'q5', prompt: '—¿(cafetería) ___ por aquí? —Sí, hay una en la Plaza Mayor.', correct: ['Hay una cafetería', 'Hay cafetería', 'hay una cafetería'] },
        { id: 'q6', prompt: '—¿Cuántos yogures hay? —(tres) ___.',              correct: ['Hay tres', 'hay tres', 'Hay tres.'] },
        { id: 'q7', prompt: '—¿Hay muchas tiendas en tu barrio? —No, ___ muchas.', correct: ['no hay'] },
        { id: 'q8', prompt: '—¿Cuánta leche hay? —(un litro) ___.',              correct: ['Hay un litro', 'hay un litro', 'Hay un litro.'] },
      ],
    },

    {
      id: '46.10',
      title: 'Постройте вопрос с ¿Cuánto / Cuántos…?',
      type: 'fill',
      instructions: 'По образцу: <em>(chicos / clase) → ¿Cuántos chicos hay en la clase?</em>',
      questions: [
        { id: 'q1', prompt: '(alumnos / clase) →',          correct: ['¿Cuántos alumnos hay en la clase?', '¿Cuántos alumnos hay en la clase'] },
        { id: 'q2', prompt: '(leche / nevera) →',            correct: ['¿Cuánta leche hay en la nevera?', '¿Cuánta leche hay en la nevera'] },
        { id: 'q3', prompt: '(museos / Madrid) →',            correct: ['¿Cuántos museos hay en Madrid?', '¿Cuántos museos hay en Madrid'] },
        { id: 'q4', prompt: '(agua / botella) →',              correct: ['¿Cuánta agua hay en la botella?', '¿Cuánta agua hay en la botella'] },
        { id: 'q5', prompt: '(tiendas / tu barrio) →',         correct: ['¿Cuántas tiendas hay en tu barrio?', '¿Cuántas tiendas hay en tu barrio'] },
        { id: 'q6', prompt: '(pan / casa) →',                   correct: ['¿Cuánto pan hay en casa?', '¿Cuánto pan hay en casa'] },
      ],
    },

    {
      id: '46.11',
      title: 'Аудио: запишите фразу с hay',
      type: 'fill',
      instructions: 'Нажмите <code>🔊</code> и запишите услышанное полностью с диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Hay un vaso en la mesa.',          correct: ['Hay un vaso en la mesa.', 'Hay un vaso en la mesa'] },
        { id: 'q2', prompt: '', audio: 'No hay leche.',                     correct: ['No hay leche.', 'No hay leche'] },
        { id: 'q3', prompt: '', audio: '¿Cuántos alumnos hay en la clase?',  correct: ['¿Cuántos alumnos hay en la clase?', 'Cuántos alumnos hay en la clase?'] },
        { id: 'q4', prompt: '', audio: 'Hay un cine en mi barrio.',          correct: ['Hay un cine en mi barrio.', 'Hay un cine en mi barrio'] },
        { id: 'q5', prompt: '', audio: 'No hay ningún hotel por aquí.',      correct: ['No hay ningún hotel por aquí.', 'No hay ningún hotel por aquí'] },
        { id: 'q6', prompt: '', audio: 'Hay tres farmacias en la calle.',     correct: ['Hay tres farmacias en la calle.', 'Hay tres farmacias en la calle'] },
      ],
    },

    {
      id: '46.12',
      title: 'Hay или нет',
      type: 'multi',
      instructions: 'Когда мы используем <em>hay</em>? Отметьте все верные утверждения.',
      questions: [
        {
          id: 'q1',
          prompt: '<em>Hay</em> употребляется…',
          options: [
            'чтобы сказать о наличии чего-то в каком-то месте',
            'чтобы спросить, есть ли что-то в каком-то месте',
            'чтобы спросить, где находится известный предмет (с определённым артиклем)',
            'чтобы спросить, где есть что-то, о существовании чего мы не знаем',
            'с притяжательными (<em>mi, tu</em>)',
            'без артикля с неисчисляемыми существительными',
          ],
          correct: [
            'чтобы сказать о наличии чего-то в каком-то месте',
            'чтобы спросить, есть ли что-то в каком-то месте',
            'чтобы спросить, где есть что-то, о существовании чего мы не знаем',
            'без артикля с неисчисляемыми существительными',
          ],
          explanation: 'Для известного предмета (<em>el museo, mi tía</em>) используется <em>está / están</em>, не <em>hay</em>.',
        },
      ],
    },
  ],
};
