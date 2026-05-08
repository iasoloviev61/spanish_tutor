// ============================================================
// Unidad 5 — Ausencia de artículo (un coche / coche)
// Когда неопределённый артикль НЕ ставится.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u05 = {
  id: 'u05',
  number: 5,
  title: { es: 'un coche / coche', topic: 'Ausencia de artículo' },
  topicRu: 'Когда артикль не ставится',

  theory: [
    {
      type: 'rule',
      es: 'No se usa <em>un / una / unos / unas</em> después de <strong>ser</strong> o <strong>hacerse</strong> con nombres de <strong>profesión, religión, nacionalidad o ideología política</strong>.',
      ru: 'После глаголов <em>ser</em> и <em>hacerse</em> при назывании профессии, религии, национальности или идеологии артикль <strong>опускается</strong> — речь идёт об общей характеристике, а не об одном представителе.',
      examples: [
        { es: 'Soy estudiante.', ru: 'Я студент(ка).' },
        { es: 'Chantal es francesa. Es abogada.', ru: 'Шанталь — француженка. Она адвокат.' },
        { es: 'Alberto se ha hecho budista.', ru: 'Альберто стал буддистом.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Pero sí se usa <em>un / una / unos / unas</em>: 1) cuando hay <strong>un calificativo</strong> con el nombre — <em>Chantal es <strong>una</strong> francesa muy simpática</em>; 2) cuando se identifica a alguien por su profesión en una respuesta — <em>—¿Quién es Almodóvar? —Es <strong>un</strong> director de cine</em>.',
      ru: 'Артикль возвращается, когда: <strong>(а)</strong> существительное с прилагательным («какая-то определённая француженка»), или <strong>(б)</strong> когда отвечают «кто это» — то есть называют известного человека через его профессию.',
    },
    {
      type: 'heading',
      text: 'Сравнение',
    },
    {
      type: 'table',
      caption: 'С артиклем и без',
      columns: ['Без артикля', 'С артиклем'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>La hermana de Rosa es profesora de español.</em>', '<em>Es <strong>una</strong> profesora muy seria.</em>'],
        ['<em>Almodóvar es director de cine.</em>',              '<em>—¿Quién es Almodóvar? —Es <strong>un</strong> director de cine.</em>'],
        ['<em>Soy abogado.</em>',                                  '<em>Soy <strong>un</strong> abogado especializado en familia.</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'No se usa <em>un / una / unos / unas</em> ante el <strong>objeto directo</strong> de un verbo cuando hablamos de la <strong>clase</strong> de objeto, no de un objeto concreto.',
      ru: 'В роли прямого дополнения артикль опускается, когда речь идёт о категории, а не о конкретном предмете. По-русски часто переводится без артиклевых нюансов.',
      examples: [
        { es: 'Lola colecciona sellos.', ru: 'Лола собирает марки.' },
        { es: '¿Tienes teléfono?', ru: 'У тебя есть телефон?' },
        { es: 'No tengo coche.', ru: 'У меня нет машины.' },
        { es: '¿Hay pan?', ru: 'Хлеб есть?' },
        { es: 'Tomás canta flamenco.', ru: 'Томас поёт фламенко.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Pero sí se usa <em>un / una / unos / unas</em>: 1) cuando se habla de <strong>cantidad</strong> — <em>Me han regalado <strong>unos</strong> sellos</em> (= algunos); 2) cuando se añade un <strong>adjetivo</strong> al nombre — <em>Tengo <strong>unos</strong> sellos muy raros</em>, <em>Aquí hacen <strong>un</strong> pan buenísimo</em>.',
      ru: 'То есть: «штука», «несколько» или «с эпитетом» — артикль возвращается.',
    },
    {
      type: 'table',
      caption: 'Сравнение «класс» / «штука» / «с эпитетом»',
      columns: ['Без артикля (класс)', 'С артиклем'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>Antonio vende coches.</em>',           '<em>Hoy ha vendido <strong>un</strong> coche.</em>'],
        ['<em>Necesito gafas.</em>',                  '<em>Necesito <strong>unas</strong> gafas especiales.</em>'],
        ['<em>¿Tienes hermanos?</em>',                '<em>Tengo <strong>una</strong> hermana.</em>'],
      ],
    },
  ],

  exercises: [
    {
      id: '5.1',
      title: 'Профессия после ser',
      type: 'fill',
      instructions: 'Допишите <em>un / una</em> или оставьте пусто (поставьте <code>—</code> в этом случае).',
      questions: [
        { id: 'q1', prompt: 'Eva es ___ abogada.',         correct: '—', explanation: 'После <em>ser</em> + профессия — без артикля.' },
        { id: 'q2', prompt: 'José Luis es ___ actor.',      correct: '—' },
        { id: 'q3', prompt: 'Eva es ___ abogada muy famosa.', correct: 'una', explanation: 'С прилагательным — артикль возвращается.' },
        { id: 'q4', prompt: 'Mar es ___ fotógrafa.',        correct: '—' },
        { id: 'q5', prompt: 'Mar es ___ fotógrafa excelente.', correct: 'una' },
        { id: 'q6', prompt: 'Roberto es ___ estudiante.',    correct: '—' },
        { id: 'q7', prompt: 'Eloísa es ___ camarera.',       correct: '—' },
        { id: 'q8', prompt: 'Es ___ médico extraordinario.',  correct: 'un' },
      ],
    },

    {
      id: '5.2',
      title: 'Какой вариант верный',
      type: 'choice',
      instructions: 'Выберите грамматически уместный вариант.',
      questions: [
        { id: 'q1', prompt: '¿Quién es Luis Miguel? — Es ___', options: ['cantante', 'un cantante'], correct: 'un cantante', explanation: 'Идентификация известного человека через профессию — с артиклем.' },
        { id: 'q2', prompt: 'La doctora Ramírez es ___', options: ['médica buenísima', 'una médica buenísima'], correct: 'una médica buenísima' },
        { id: 'q3', prompt: 'Tomás se ha hecho ___', options: ['musulmán', 'un musulmán'], correct: 'musulmán' },
        { id: 'q4', prompt: 'Los tíos de Andrea son ___', options: ['protestantes', 'unos protestantes'], correct: 'protestantes' },
        { id: 'q5', prompt: '¿Quién es Vargas Llosa? — Es ___', options: ['escritor', 'un escritor'], correct: 'un escritor' },
        { id: 'q6', prompt: 'Sarita quiere ser ___', options: ['bailarina', 'una bailarina'], correct: 'bailarina' },
        { id: 'q7', prompt: 'García Márquez es ___ de éxito.', options: ['escritor', 'un escritor'], correct: 'un escritor', explanation: 'С эпитетом «de éxito» — артикль возвращается.' },
      ],
    },

    {
      id: '5.3',
      title: 'Прямое дополнение: артикль или ничего?',
      type: 'fill',
      instructions: 'Поставьте <em>un / una / unos / unas</em> или <code>—</code> (без артикля).',
      questions: [
        { id: 'q1', prompt: '¿Comes ___ carne? — No, soy vegetariano.', correct: '—' },
        { id: 'q2', prompt: 'Colecciono ___ monedas.',                    correct: '—' },
        { id: 'q3', prompt: 'Ayer compré ___ monedas chinas.',             correct: 'unas', explanation: 'С прилагательным «chinas» — артикль появляется.' },
        { id: 'q4', prompt: 'Alberto tiene ___ apartamento en Benidorm.',  correct: 'un',   explanation: 'Один конкретный объект (= одна квартира).' },
        { id: 'q5', prompt: '¿Tomas ___ café? — Solo ___ taza al día.',     correct: 'una',  explanation: 'Сначала без артикля (класс), потом «одну штуку».' },
        { id: 'q6', prompt: '¿Azúcar? Gracias, no tomo ___ azúcar.',        correct: '—' },
        { id: 'q7', prompt: '¿Tenéis ___ hijos?',                            correct: '—' },
        { id: 'q8', prompt: 'Chelo canta ___ ópera.',                         correct: '—' },
        { id: 'q9', prompt: 'Ernesto es ___ músico. Escribe ___ canciones.',  correct: '—' },
        { id: 'q10', prompt: '¿Quieres ___ queso? — No, gracias; es ___ queso muy fuerte.', correct: '—', explanation: 'Сначала «класс», во второй части — с прилагательным был бы <em>un</em>, но здесь полная фраза «es un queso muy fuerte» — пропущена в этом задании.' },
      ],
    },

    {
      id: '5.4',
      title: 'С артиклем или без?',
      type: 'multi',
      instructions: 'Отметьте все фразы, в которых артикль ставится <strong>правильно</strong>.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Soy un estudiante.',
            'Soy estudiante.',
            'Es una profesora muy seria.',
            'Es profesora muy seria.',
            'Tengo coche.',
            'Tengo un coche.',
            'Tengo un coche nuevo.',
            'No tengo unas gafas.',
          ],
          correct: ['Soy estudiante.', 'Es una profesora muy seria.', 'Tengo coche.', 'Tengo un coche.', 'Tengo un coche nuevo.'],
          explanation: '«Soy un estudiante» — обычно ошибка (без эпитета). «Es profesora muy seria» — без артикля + прилагательное несочетаемо: правильно <em>una</em>. «No tengo unas gafas» неверно — простое отсутствие = без артикля.',
        },
      ],
    },

    {
      id: '5.5',
      title: 'Дайте характеристику с прилагательным',
      type: 'fill',
      instructions: 'Перепишите фразу, добавив прилагательное и нужный артикль. Образец: <em>Es médico</em> + <em>excelente</em> → <em>Es un médico excelente</em>.',
      questions: [
        { id: 'q1', prompt: 'Es profesora + <em>seria</em> →',         correct: ['Es una profesora seria.', 'Es una profesora seria'] },
        { id: 'q2', prompt: 'Soy estudiante + <em>aplicado</em> →',     correct: ['Soy un estudiante aplicado.', 'Soy un estudiante aplicado'] },
        { id: 'q3', prompt: 'Es director + <em>famoso</em> →',          correct: ['Es un director famoso.', 'Es un director famoso'] },
        { id: 'q4', prompt: 'Es escritora + <em>joven</em> →',          correct: ['Es una escritora joven.', 'Es una escritora joven'] },
        { id: 'q5', prompt: 'Es abogada + <em>excelente</em> →',         correct: ['Es una abogada excelente.', 'Es una abogada excelente'] },
      ],
    },

    {
      id: '5.6',
      title: '«Класс предмета» vs «штука»',
      type: 'choice',
      instructions: 'Какой смысл у пропуска артикля или его наличия?',
      questions: [
        { id: 'q1', prompt: '<em>Antonio vende coches.</em>', options: ['продаёт машины как класс товара', 'продал одну машину'], correct: 'продаёт машины как класс товара' },
        { id: 'q2', prompt: '<em>Hoy ha vendido un coche.</em>', options: ['продаёт машины как класс товара', 'продал одну машину'], correct: 'продал одну машину' },
        { id: 'q3', prompt: '<em>Necesito gafas.</em>', options: ['нужны очки как класс', 'нужна одна пара особенных очков'], correct: 'нужны очки как класс' },
        { id: 'q4', prompt: '<em>Necesito unas gafas especiales.</em>', options: ['нужны очки как класс', 'нужна одна пара особенных очков'], correct: 'нужна одна пара особенных очков' },
        { id: 'q5', prompt: '<em>¿Tienes hermanos?</em>', options: ['есть ли в принципе братья/сёстры', 'сколько именно'], correct: 'есть ли в принципе братья/сёстры' },
      ],
    },

    {
      id: '5.7',
      title: 'Найдите фразу с ошибкой',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза стилистически/грамматически неудачная.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Soy estudiante.', 'Soy una estudiante.', 'Soy un estudiante de medicina.', 'Soy abogada.'], correct: 'Soy una estudiante.', explanation: 'Без эпитета — артикль не нужен.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['¿Tienes coche?', 'Tengo un coche.', 'Tengo coche nuevo.', 'No tengo coche.'], correct: 'Tengo coche nuevo.', explanation: 'С прилагательным <em>un coche nuevo</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Es un médico.', 'Es médico.', 'Es médico muy bueno.', 'Es un médico muy bueno.'], correct: 'Es médico muy bueno.', explanation: 'Тот же случай.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Necesito tijeras.', 'Necesito unas tijeras.', 'Necesito una tijeras.', 'Necesito unas tijeras nuevas.'], correct: 'Necesito una tijeras.', explanation: '<em>tijeras</em> — pluralia tantum, нельзя <em>una</em>.' },
      ],
    },

    {
      id: '5.8',
      title: 'Идеология, религия, национальность',
      type: 'fill',
      instructions: 'После <em>ser</em> или <em>hacerse</em> с этими словами артикль обычно не ставится. Поставьте <em>un / una</em> или <code>—</code>.',
      questions: [
        { id: 'q1', prompt: 'Mi vecino es ___ italiano.',           correct: '—' },
        { id: 'q2', prompt: 'Mis vecinos son ___ italianos.',        correct: '—' },
        { id: 'q3', prompt: 'Es ___ italiano muy simpático.',         correct: 'un' },
        { id: 'q4', prompt: 'Lenin era ___ comunista.',               correct: '—' },
        { id: 'q5', prompt: 'Mi tía se ha hecho ___ vegetariana.',    correct: '—' },
        { id: 'q6', prompt: 'Es ___ vegetariana estricta.',           correct: 'una' },
        { id: 'q7', prompt: 'Soy ___ ruso.',                            correct: '—' },
        { id: 'q8', prompt: 'Soy ___ ruso de Moscú.',                   correct: 'un' },
      ],
    },

    {
      id: '5.9',
      title: 'Аудио: артикль или без?',
      type: 'fill',
      instructions: 'Запишите услышанное полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Soy estudiante.',                    correct: ['Soy estudiante.', 'Soy estudiante'] },
        { id: 'q2', prompt: '', audio: 'Es una profesora muy seria.',         correct: ['Es una profesora muy seria.', 'Es una profesora muy seria'] },
        { id: 'q3', prompt: '', audio: 'No tengo coche.',                     correct: ['No tengo coche.', 'No tengo coche'] },
        { id: 'q4', prompt: '', audio: 'Tengo un coche nuevo.',                correct: ['Tengo un coche nuevo.', 'Tengo un coche nuevo'] },
        { id: 'q5', prompt: '', audio: 'Es un director de cine.',              correct: ['Es un director de cine.', 'Es un director de cine'] },
      ],
    },

    {
      id: '5.10',
      title: 'Перепишите фразу — вставьте или уберите артикль',
      type: 'fill',
      instructions: 'Перепишите так, как сказал бы носитель.',
      questions: [
        { id: 'q1', prompt: '<em>Soy un médico.</em> →',               correct: ['Soy médico.', 'Soy médico'], explanation: 'Без эпитета — без артикля.' },
        { id: 'q2', prompt: '<em>Es director famoso.</em> →',          correct: ['Es un director famoso.', 'Es un director famoso'] },
        { id: 'q3', prompt: '<em>Tengo coche japonés.</em> →',         correct: ['Tengo un coche japonés.', 'Tengo un coche japonés'] },
        { id: 'q4', prompt: '<em>Necesito una azúcar.</em> →',         correct: ['Necesito azúcar.', 'Necesito azúcar'], explanation: '«Класс продукта» → без артикля.' },
        { id: 'q5', prompt: '<em>Mi padre es un abogado.</em> →',      correct: ['Mi padre es abogado.', 'Mi padre es abogado'] },
      ],
    },

    {
      id: '5.11',
      title: 'Правило для каждой фразы',
      type: 'choice',
      instructions: 'Какое из правил применилось?',
      questions: [
        { id: 'q1', prompt: '<em>Soy estudiante.</em>', options: ['Профессия после ser', 'Прямое дополнение, класс', 'Идентификация по профессии'], correct: 'Профессия после ser' },
        { id: 'q2', prompt: '<em>Tengo coche.</em>', options: ['Профессия после ser', 'Прямое дополнение, класс', 'Идентификация по профессии'], correct: 'Прямое дополнение, класс' },
        { id: 'q3', prompt: '<em>—¿Quién es Almodóvar? —Es un director.</em>', options: ['Профессия после ser', 'Прямое дополнение, класс', 'Идентификация по профессии'], correct: 'Идентификация по профессии' },
        { id: 'q4', prompt: '<em>Es una médica famosa.</em>', options: ['Профессия после ser, без артикля', 'С прилагательным — артикль возвращается'], correct: 'С прилагательным — артикль возвращается' },
        { id: 'q5', prompt: '<em>Necesito gafas.</em>', options: ['Прямое дополнение, класс', '«Одна штука»'], correct: 'Прямое дополнение, класс' },
      ],
    },

    {
      id: '5.12',
      title: 'Своё / чужое',
      type: 'fill',
      instructions: 'Допишите фразу. Ставьте артикль <strong>только</strong> там, где он нужен; иначе — <code>—</code>.',
      questions: [
        { id: 'q1', prompt: 'Mi hermano es ___ ingeniero.',                correct: '—' },
        { id: 'q2', prompt: 'Mi hermano es ___ ingeniero brillante.',       correct: 'un' },
        { id: 'q3', prompt: '¿Hay ___ pan?',                                  correct: '—' },
        { id: 'q4', prompt: 'Aquí hacen ___ pan buenísimo.',                  correct: 'un' },
        { id: 'q5', prompt: 'Necesito ___ información.',                      correct: '—' },
        { id: 'q6', prompt: 'Necesito ___ información urgente.',              correct: 'una', explanation: 'Эпитет → артикль возвращается.' },
        { id: 'q7', prompt: 'Tienen ___ casa enorme.',                         correct: 'una' },
        { id: 'q8', prompt: 'No tengo ___ tiempo.',                            correct: '—' },
      ],
    },
  ],
};
