// ============================================================
// Unidad 8 — El artículo determinado con nombres propios
// Когда el/la ставится перед именами людей, мест, рек и т. д.,
// и когда — нет.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u08 = {
  id: 'u08',
  number: 8,
  title: { es: 'el señor Alonso, la calle Mayor', topic: 'Artículo determinado con nombres propios' },
  topicRu: 'Артикль с именами людей и географическими названиями',

  theory: [
    {
      type: 'heading',
      text: 'С именами людей',
    },
    {
      type: 'rule',
      es: 'Se usa <em>el / la</em> + <strong>señor, señora, señorita, doctor, doctora, presidente, presidenta…</strong> (+ nombre) + apellido.',
      ru: 'Когда мы <strong>говорим о</strong> человеке (не к нему), его «титул» + фамилия идут с артиклем.',
      examples: [
        { es: 'El señor Alonso es mi jefe.', ru: 'Сеньор Алонсо — мой начальник.' },
        { es: 'La señora Gómez es muy amable.', ru: 'Сеньора Гомес очень любезна.' },
        { es: 'La doctora Blanco trabaja en este hospital.', ru: 'Доктор Бланко работает в этой больнице.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Pero <strong>no</strong> se usa <em>el / la</em>: 1) cuando hablamos <strong>directamente</strong> con la persona — <em>Buenos días, señor Alonso</em>; 2) con <em>don / doña</em> + nombre propio — <em>Don Pedro es...</em>; 3) con un nombre propio sin título.',
      ru: 'Артикль <strong>не</strong> ставится: <strong>(а)</strong> при прямом обращении («Здравствуйте, сеньор Алонсо»); <strong>(б)</strong> с <em>don / doña</em> + имя; <strong>(в)</strong> с просто именем (без титула): <em>Julián es mi primo.</em>',
    },
    {
      type: 'heading',
      text: 'С названиями мест',
    },
    {
      type: 'rule',
      es: 'Se usa <em>el / la</em> + <strong>nombres de calles, plazas, avenidas…</strong>',
      ru: 'С названиями улиц, проспектов, площадей — артикль обязателен.',
      examples: [
        { es: 'Marga vive en la avenida de América.', ru: 'Марга живёт на проспекте Америки.' },
        { es: 'Hay un cine nuevo en la calle Bolívar.', ru: 'На улице Боливара открылся новый кинотеатр.' },
      ],
    },
    {
      type: 'rule',
      es: 'Se usa <em>el / la / los</em> + <strong>nombres de cines, hoteles, teatros, museos, universidades, hospitales…</strong> — el género depende de la palabra omitida (el hotel, el cine, la universidad…).',
      ru: 'С названиями кинотеатров, гостиниц, театров, музеев, университетов, больниц — артикль ставится. Род зависит от подразумеваемого слова: <em>el (hotel) Ritz, el (cine) Gran Vía, la (Universidad) Autónoma</em>.',
      examples: [
        { es: 'el (hotel) Ritz, el (cine) Gran Vía', ru: 'отель «Ритц», кинотеатр «Гран Вия»' },
        { es: 'la (Universidad) Autónoma', ru: 'Автономный университет' },
        { es: 'el (Museo del) Prado, el (hospital) Sotomayor', ru: 'музей Прадо, больница Сотомайор' },
      ],
    },
    {
      type: 'rule',
      es: 'Se usa <em>el / la / los / las</em> + <strong>nombres de ríos, lagos, mares, océanos, montañas, grupos de islas, desiertos</strong>.',
      ru: 'Реки, озёра, моря, океаны, горы, горные цепи, группы островов, пустыни — с артиклем.',
      examples: [
        { es: 'el (río) Tajo, el Amazonas, el (lago) Titicaca', ru: 'река Тахо, Амазонка, озеро Титикака' },
        { es: 'el Mediterráneo, el (océano) Pacífico, el Atlántico', ru: 'Средиземное (море), Тихий океан, Атлантический' },
        { es: 'las (islas) Canarias, los (montes) Pirineos, los Andes', ru: 'Канарские (острова), Пиренеи, Анды' },
        { es: 'el (desierto del) Sahara', ru: 'Сахара' },
      ],
    },
    {
      type: 'atencion',
      es: 'Pero <strong>no</strong> se usa <em>el / la</em> con: nombres de <strong>islas solas</strong> (<em>Mallorca, Sicilia, Santo Domingo</em>) ni con nombres de <strong>ciudades, regiones, provincias, comunidades autónomas, países, continentes</strong> — <em>París, Barcelona, España, Galicia, Andalucía, África, América del Sur</em>.',
      ru: 'Артикль <strong>не</strong> ставится: с одиночными островами (Майорка, Сицилия), с городами, регионами, провинциями, странами и континентами — это просто <em>París, España, África</em>.',
    },
    {
      type: 'rule',
      es: 'Excepciones: algunas <strong>ciudades, países y regiones</strong> sí llevan artículo — <em>La Habana, El Escorial, La Haya, La Paz, Las Palmas, Los Ángeles, El Cairo, El Salvador, (la) India, (los) Estados Unidos, La Mancha, La Rioja, La Pampa</em>.',
      ru: 'Исключения: артикль идёт «в составе названия» у ряда городов, стран и регионов: <em>La Habana, El Cairo, El Salvador, Los Ángeles</em>; иногда факультативно — <em>(la) India, (los) Estados Unidos</em>.',
    },
  ],

  exercises: [
    {
      id: '8.1',
      title: 'С артиклем или без — обращение или рассказ?',
      type: 'fill',
      instructions: 'Поставьте <em>el / la</em> или <code>—</code>, если артикль не нужен.',
      questions: [
        { id: 'q1', prompt: '¿Dónde vive ___ don José?',                       correct: '—', explanation: 'С <em>don</em> артикль не ставится.' },
        { id: 'q2', prompt: '— Buenas tardes, ___ señor Alfonsín.',             correct: '—', explanation: 'Прямое обращение — без артикля.' },
        { id: 'q3', prompt: '— Buenas tardes, ___ Elena.',                       correct: '—', explanation: 'Просто имя при обращении.' },
        { id: 'q4', prompt: '___ doctora Castro está en la sexta planta.',       correct: 'La' },
        { id: 'q5', prompt: '¿Quién es ___ señora Jiménez?',                      correct: 'la' },
        { id: 'q6', prompt: 'Aquí trabaja ___ Josefa.',                            correct: '—', explanation: 'Имя без титула — без артикля.' },
        { id: 'q7', prompt: '— Buenos días, ___ doctor Rojo.',                    correct: '—' },
        { id: 'q8', prompt: '— Buenos días, ___ María.',                            correct: '—' },
      ],
    },

    {
      id: '8.2',
      title: 'Здания и места',
      type: 'fill',
      instructions: 'Запишите название с подходящим артиклем (<em>el / la / los / las</em> или <em>al / del</em>).',
      questions: [
        { id: 'q1', prompt: 'Vamos al museo Picasso. → Vamos a ___ museo Picasso.',          correct: 'al' },
        { id: 'q2', prompt: 'Mi tía trabaja en hospital Central. → en ___ hospital Central.',  correct: 'el' },
        { id: 'q3', prompt: 'El concierto es en teatro Real. → en ___ teatro Real.',           correct: 'el' },
        { id: 'q4', prompt: 'Estudio en universidad Autónoma. → en ___ Universidad Autónoma.',  correct: 'la' },
        { id: 'q5', prompt: 'La feria está en plaza Mayor. → en ___ plaza Mayor.',              correct: 'la' },
        { id: 'q6', prompt: 'Marga vive en avenida de América. → en ___ avenida de América.',    correct: 'la' },
        { id: 'q7', prompt: 'Hay un cine nuevo en calle Bolívar. → en ___ calle Bolívar.',       correct: 'la' },
        { id: 'q8', prompt: 'Vimos un partido en estadio Bernabéu. → en ___ estadio Bernabéu.',   correct: 'el' },
      ],
    },

    {
      id: '8.3',
      title: 'Города, страны, реки и моря',
      type: 'fill',
      instructions: 'Поставьте артикль или <code>—</code>. Помните про исключения и группы.',
      questions: [
        { id: 'q1', prompt: '___ Habana es la capital de ___ Cuba.',           correct: ['La, —', 'La —'], placeholder: 'La, —', explanation: '<em>La Habana</em> — с артиклем; <em>Cuba</em> — без.' },
        { id: 'q2', prompt: '___ India está en ___ Asia.',                       correct: ['La, —', 'La —'], placeholder: 'La, —', explanation: '<em>(la) India</em> — допустимо с артиклем; <em>Asia</em> — без.' },
        { id: 'q3', prompt: '___ islas Galápagos están en ___ Ecuador.',          correct: ['Las, —', 'Las —'], placeholder: 'Las, —' },
        { id: 'q4', prompt: '___ Salvador tiene frontera con ___ Guatemala y ___ Honduras.', correct: ['El, —, —', 'El — —'], placeholder: 'El, —, —' },
        { id: 'q5', prompt: '___ Ángeles está en ___ California.',                  correct: ['Los, —', 'Los —'], placeholder: 'Los, —' },
        { id: 'q6', prompt: '___ lago Titicaca está entre ___ Perú y ___ Bolivia.', correct: ['El, —, —', 'El — —'], placeholder: 'El, —, —' },
        { id: 'q7', prompt: '___ Amazonas es el río más largo de ___ América del Sur.', correct: ['El, —', 'El —'], placeholder: 'El, —' },
        { id: 'q8', prompt: '___ Jamaica está en ___ mar Caribe.',                    correct: ['—, el', '— el'], placeholder: '—, el' },
        { id: 'q9', prompt: '___ Puerto Rico es una de ___ Antillas.',                  correct: ['—, las', '— las'], placeholder: '—, las' },
        { id: 'q10', prompt: '___ Pirineos separan ___ España de ___ Francia.',          correct: ['Los, —, —', 'Los — —'], placeholder: 'Los, —, —' },
      ],
    },

    {
      id: '8.4',
      title: 'Город / страна — артикль или нет?',
      type: 'choice',
      instructions: 'Выберите верную форму.',
      questions: [
        { id: 'q1', prompt: '¿Has estado en ___ Museo del Prado?',         options: ['el', '—'],   correct: 'el' },
        { id: 'q2', prompt: '___ Felipe estudia en ___ Universidad de Alcalá.', options: ['—, la', 'El, la'], correct: '—, la' },
        { id: 'q3', prompt: '___ doctora Soria trabaja en ___ Hospital Doce de Octubre.', options: ['La, el', '—, —'], correct: 'La, el' },
        { id: 'q4', prompt: 'El hermano de Ana vive en ___ Paz.',              options: ['La', '—'],   correct: 'La' },
        { id: 'q5', prompt: '___ Cairo es la capital de ___ Egipto.',           options: ['El, —', 'El, el'], correct: 'El, —' },
        { id: 'q6', prompt: '___ Pancho vive en ___ Monterrey.',                options: ['—, —', 'El, el'], correct: '—, —' },
        { id: 'q7', prompt: 'Este queso es de ___ Mancha.',                      options: ['la', '—'],   correct: 'la' },
        { id: 'q8', prompt: '___ cine Cartago está en ___ calle Buenos Aires.',  options: ['El, la', '—, —'], correct: 'El, la' },
      ],
    },

    {
      id: '8.5',
      title: 'Какие из этих стран/городов идут с артиклем?',
      type: 'multi',
      instructions: 'Отметьте только те названия, которые в нейтральном употреблении пишутся <strong>с артиклем</strong> (входит в состав имени).',
      questions: [
        {
          id: 'q1',
          prompt: 'Выберите все:',
          options: ['Habana', 'Madrid', 'Salvador', 'Cairo', 'París', 'Ángeles', 'México', 'Paz', 'España', 'Sicilia'],
          correct: ['Habana', 'Salvador', 'Cairo', 'Ángeles', 'Paz'],
          explanation: '<em>La Habana, El Salvador, El Cairo, Los Ángeles, La Paz</em> — артикль входит в состав. Остальные — без артикля.',
        },
      ],
    },

    {
      id: '8.6',
      title: 'Сопоставьте имя и артикль',
      type: 'match',
      instructions: 'Подберите подходящий артикль (или прочерк).',
      pool: ['el', 'la', 'los', 'las', '—'],
      questions: [
        { id: 'q1', prompt: '<em>Atlántico</em>',           correct: 'el' },
        { id: 'q2', prompt: '<em>Habana</em>',              correct: 'la' },
        { id: 'q3', prompt: '<em>Madrid</em>',              correct: '—' },
        { id: 'q4', prompt: '<em>Andes</em>',               correct: 'los' },
        { id: 'q5', prompt: '<em>Canarias</em>',            correct: 'las' },
        { id: 'q6', prompt: '<em>Sicilia</em>',             correct: '—' },
        { id: 'q7', prompt: '<em>Salvador</em> (страна)',    correct: 'el' },
        { id: 'q8', prompt: '<em>Mediterráneo</em>',         correct: 'el' },
      ],
    },

    {
      id: '8.7',
      title: 'Восполните диалог',
      type: 'fill',
      instructions: 'Поставьте артикль или <code>—</code>.',
      questions: [
        { id: 'q1', prompt: '— ¿Dónde está ___ señor Pérez? — En su despacho.',        correct: 'el' },
        { id: 'q2', prompt: '— Buenos días, ___ señor Pérez.',                          correct: '—' },
        { id: 'q3', prompt: '— ¿Conoces a ___ doña Rosa?',                                correct: '—' },
        { id: 'q4', prompt: '— ¿Has llamado a ___ doctora García?',                       correct: 'la' },
        { id: 'q5', prompt: '— Sí, ___ doctora García viene mañana.',                       correct: 'la' },
        { id: 'q6', prompt: '— Hola, ___ doctora, ¿cómo está usted?',                       correct: '—' },
      ],
    },

    {
      id: '8.8',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Buenos días, señor Alonso.', 'Buenos días, el señor Alonso.', 'El señor Alonso es mi jefe.', 'Don Pedro es mi vecino.'], correct: 'Buenos días, el señor Alonso.', explanation: 'При прямом обращении — без артикля.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Vivo en Madrid.', 'Vivo en el Madrid.', 'Vivo en La Habana.', 'Vivo en El Cairo.'], correct: 'Vivo en el Madrid.', explanation: '<em>Madrid</em> — без артикля.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Mallorca es bonita.', 'La Mallorca es bonita.', 'Las Canarias son turísticas.', 'Sicilia es italiana.'], correct: 'La Mallorca es bonita.', explanation: 'Одиночный остров — без артикля.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['El Tajo pasa por Toledo.', 'Tajo pasa por Toledo.', 'El Mediterráneo es cálido.', 'Los Andes son largos.'], correct: 'Tajo pasa por Toledo.', explanation: 'Реки — с артиклем.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['La doctora Blanco no está.', 'Doctora Blanco no está.', 'Buenos días, doctora Blanco.', 'El doctor Pérez no está.'], correct: 'Doctora Blanco no está.', explanation: 'В рассказе о ней — с артиклем.' },
      ],
    },

    {
      id: '8.9',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите услышанное полностью, со всеми артиклями.',
      questions: [
        { id: 'q1', prompt: '', audio: 'el señor Alonso es mi jefe',                  correct: ['el señor Alonso es mi jefe', 'el señor Alonso es mi jefe.'] },
        { id: 'q2', prompt: '', audio: 'buenos días, señor Alonso',                    correct: ['buenos días, señor Alonso', 'buenos días, señor Alonso.'] },
        { id: 'q3', prompt: '', audio: 'vivo en La Habana',                              correct: ['vivo en La Habana', 'vivo en La Habana.'] },
        { id: 'q4', prompt: '', audio: 'el Mediterráneo es cálido',                      correct: ['el Mediterráneo es cálido', 'el Mediterráneo es cálido.'] },
        { id: 'q5', prompt: '', audio: 'la doctora Blanco trabaja aquí',                  correct: ['la doctora Blanco trabaja aquí', 'la doctora Blanco trabaja aquí.'] },
      ],
    },

    {
      id: '8.10',
      title: 'Перепишите фразу',
      type: 'fill',
      instructions: 'Перепишите так, как сказал бы носитель.',
      questions: [
        { id: 'q1', prompt: '<em>Vivo en el Barcelona.</em> →',         correct: ['Vivo en Barcelona.', 'Vivo en Barcelona'] },
        { id: 'q2', prompt: '<em>Hola, el señor Pérez.</em> →',          correct: ['Hola, señor Pérez.', 'Hola, señor Pérez'] },
        { id: 'q3', prompt: '<em>Doctor Soria está en su consulta.</em> →', correct: ['El doctor Soria está en su consulta.', 'El doctor Soria está en su consulta'] },
        { id: 'q4', prompt: '<em>Tajo es un río español.</em> →',         correct: ['El Tajo es un río español.', 'El Tajo es un río español'] },
        { id: 'q5', prompt: '<em>Vivimos en Salvador.</em> →',            correct: ['Vivimos en El Salvador.', 'Vivimos en El Salvador'], explanation: 'Страна — с артиклем (входит в название).' },
      ],
    },
  ],
};
