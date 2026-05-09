// ============================================================
// Unidad 11 — Omisión del nombre (el rojo, uno rojo)
// Когда существительное опускается, остаётся артикль
// (el/la/los/las или uno/una/unos/unas) + признак (прилагательное,
// предложная группа с de, или конструкция с lo).
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u11 = {
  id: 'u11',
  number: 11,
  title: { es: 'el rojo, uno rojo', topic: 'Omisión del nombre' },
  topicRu: 'Опущение существительного: артикль + прилагательное / + de / lo + прилагательное',

  theory: [
    {
      type: 'rule',
      es: '<em>El, la, los, las</em> o <em>uno, una, unos, unas</em> + <strong>adjetivo</strong> sustituyen a un nombre ya mencionado o que no es necesario nombrar.',
      ru: 'Чтобы не повторять только что названное существительное, оставляют артикль + признак (обычно прилагательное). Артикль показывает род и число «опущенного» слова.',
      examples: [
        { es: '—¿Qué camisa te gusta más? —La verde.', ru: '— Какая рубашка тебе больше нравится? — Зелёная.' },
        { es: '—¿Qué tipo de zapatos quiere? —Quiero unos cómodos.', ru: '— Какие туфли хотите? — Хочу удобные.' },
        { es: '—¿Quién es don Tomás? —El delgado.', ru: '— Кто из них дон Томас? — Худой.' },
      ],
    },
    {
      type: 'heading',
      text: 'el / la / los / las vs uno / una / unos / unas',
    },
    {
      type: 'table',
      caption: 'Когда определённый, а когда — неопределённый',
      columns: ['Конкретный (известный) — el / la / los / las', 'Один из класса — uno / una / unos / unas'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>—¿Quién es Susi? —La alta.</em>', '<em>—¿Qué tipo de coche busca? —Uno pequeño.</em>'],
        ['<em>(la chica alta — конкретная)</em>', '<em>(un coche pequeño — любой такой)</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'La forma del adjetivo (masculino, femenino, singular o plural) es la misma que la del nombre al que sustituye: <em>—¿Qué zapatillas te gustan más? —Las rojas.</em>',
      ru: 'Прилагательное согласуется по роду и числу с тем существительным, которое подразумевается. <em>Las rojas</em> — потому что <em>las zapatillas</em>.',
    },
    {
      type: 'heading',
      text: 'el / la / los / las + de + nombre',
    },
    {
      type: 'rule',
      es: '<em>El, la, los, las</em> + <em>de</em> + nombre — para hablar de posesión, situación o materia sin repetir el sustantivo.',
      ru: '<em>el de / la de / los de / las de</em> + слово — позволяет указать на «тот, который …» (по принадлежности, расположению, материалу).',
      examples: [
        { es: 'Mi coche es peor que el de mi hermano.', ru: 'Моя машина хуже, чем у брата. (= el coche de mi hermano)' },
        { es: '—¿Quién es Alicia? —La del vestido blanco.', ru: '— Кто Алисия? — В белом платье.' },
        { es: 'Esas gafas no me gustan. Prefiero las de la derecha.', ru: 'Эти очки мне не нравятся. Предпочитаю те, что справа.' },
        { es: '—¿Qué pendientes te vas a poner? —Los de oro.', ru: '— Какие серьги наденешь? — Золотые. (= los pendientes de oro)' },
      ],
    },
    {
      type: 'heading',
      text: 'lo + adjetivo masculino singular',
    },
    {
      type: 'rule',
      es: '<em>lo</em> + <strong>adjetivo masculino singular</strong> = «la cosa(s) X», «то, что X». Es una construcción abstracta y muy frecuente.',
      ru: '<em>lo</em> + прилагательное в мужском роде ед. ч. = «то, что …» / «… вещь(и)». Очень удобная конструкция для обобщений.',
      examples: [
        { es: 'Lo bueno del verano son las vacaciones.', ru: 'Что хорошо в лете — это каникулы. (= la cosa buena del verano)' },
        { es: 'Lo mejor de Perú es la gente.', ru: 'Лучшее в Перу — это люди.' },
        { es: 'Me gusta lo salado.', ru: 'Я люблю солёное. (= las cosas saladas)' },
        { es: 'Lo difícil del español son los verbos.', ru: 'Что сложно в испанском — глаголы.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Despues de <em>lo</em>, el adjetivo siempre va en <strong>masculino singular</strong>, aunque hablemos de cosas femeninas o plurales: <em>Lo bonito de las vacaciones</em>, <em>Lo importante</em>.',
      ru: 'После <em>lo</em> прилагательное всегда в м. р. ед. ч. — даже если речь о женских или множественных вещах. Это «среднеродная» абстрактная форма.',
    },
  ],

  exercises: [
    {
      id: '11.1',
      title: 'Артикль + прилагательное вместо существительного',
      type: 'fill',
      instructions: 'Подставьте <em>el / la / los / las</em> + прилагательное в нужной форме (вспомните род и число подразумеваемого слова).',
      questions: [
        { id: 'q1',  prompt: '—¿Qué zapatos prefieres? —(negro) ___',          correct: 'los negros' },
        { id: 'q2',  prompt: '—¿Qué tipo de cuaderno quiere? —(pequeño) ___',   correct: 'el pequeño' },
        { id: 'q3',  prompt: '—¿Te gustan estos sombreros? —(negro) Me gusta ___', correct: 'el negro' },
        { id: 'q4',  prompt: '—¿Qué pantalones prefieres? —(rojo) ___',         correct: 'los rojos' },
        { id: 'q5',  prompt: '—¿Ves a esas dos chicas? —(alto) ___ es Marta.',    correct: 'La alta' },
        { id: 'q6',  prompt: '—¿Qué tipo de libro quieres leer? —(entretenido) ___', correct: 'uno entretenido' },
        { id: 'q7',  prompt: '—¿Qué manzanas prefiere? —(verde) ___ o (rojo) ___', correct: ['las verdes o las rojas', 'Las verdes o las rojas'], placeholder: 'las verdes o las rojas' },
        { id: 'q8',  prompt: 'Esta taza está sucia. Dame (limpio) ___, por favor.',  correct: ['una limpia', 'la limpia'] },
        { id: 'q9',  prompt: '—¿Qué clase de cámara quiere? —(bueno) Quiero ___, aunque sea cara.', correct: 'una buena' },
        { id: 'q10', prompt: '—¿Tienes ordenador? —Sí, tengo (portátil) ___.',         correct: 'uno portátil' },
      ],
    },

    {
      id: '11.2',
      title: 'el / la / los / las + de',
      type: 'fill',
      instructions: 'Перефразируйте: вместо «X de Y» оставьте только артикль + de + Y. Артикль согласуется с подразумеваемым словом.',
      questions: [
        { id: 'q1', prompt: '«El coche de mi hermano» (когда уже говорили о coche) → ___ mi hermano',  correct: 'el de' },
        { id: 'q2', prompt: '«La chica del vestido blanco» (когда уже говорили о chica) → ___ vestido blanco', correct: 'la del' },
        { id: 'q3', prompt: '«Las gafas de la derecha» (когда уже говорили о gafas) → ___ la derecha',  correct: 'las de' },
        { id: 'q4', prompt: '«Los pendientes de oro» (когда уже говорили о pendientes) → ___ oro',        correct: 'los de' },
        { id: 'q5', prompt: '«El libro de Marta» (когда уже говорили о libro) → ___ Marta',                  correct: 'el de' },
        { id: 'q6', prompt: '«La camisa del cuello redondo» (когда уже говорили о camisa) → ___ cuello redondo', correct: 'la del' },
        { id: 'q7', prompt: '«Los hijos de Pablo» (когда уже говорили о hijos) → ___ Pablo',                    correct: 'los de' },
        { id: 'q8', prompt: '«Las amigas de mi hermana» (когда уже говорили о amigas) → ___ mi hermana',         correct: 'las de' },
      ],
    },

    {
      id: '11.3',
      title: 'lo + прилагательное (masculino singular)',
      type: 'fill',
      instructions: 'Поставьте <em>lo</em> + прилагательное в м. р. ед. ч.',
      questions: [
        { id: 'q1', prompt: '—¿Qué es (mejor) ___ de Cuba? — La música.',         correct: 'lo mejor' },
        { id: 'q2', prompt: '—¿Qué naranjas prefiere? — (caro) ___ o (barato) ___?', correct: ['las caras o las baratas', 'Las caras o las baratas'], placeholder: 'las caras o las baratas', explanation: 'Здесь «caro/barato» — обычные прилагательные при опущенном <em>las naranjas</em>.' },
        { id: 'q3', prompt: 'No me gusta (amargo) ___.',                            correct: 'lo amargo' },
        { id: 'q4', prompt: '(barato) ___ es siempre caro.',                         correct: 'Lo barato' },
        { id: 'q5', prompt: '—¿Veis a aquel grupo de chicas? Mis hermanas son (moreno) ___.', correct: 'las morenas', explanation: 'Здесь «moreno» относится к <em>las hermanas</em>, не к «вещам в целом».' },
        { id: 'q6', prompt: '(importante) ___ es ser feliz.',                         correct: 'Lo importante' },
        { id: 'q7', prompt: '(malo) ___ del invierno es el frío.',                     correct: 'Lo malo' },
        { id: 'q8', prompt: '—¿Qué pendientes te gustan más? — (largo) ___ o (corto) ___?', correct: ['los largos o los cortos', 'Los largos o los cortos'], placeholder: 'los largos o los cortos' },
        { id: 'q9', prompt: '—¿Qué coche es el tuyo? — (pequeño) ___.',                correct: 'el pequeño' },
        { id: 'q10', prompt: '(pequeño) ___ es hermoso.',                                 correct: 'Lo pequeño' },
      ],
    },

    {
      id: '11.4',
      title: 'el / la / los / las или uno / una / unos / unas?',
      type: 'choice',
      instructions: 'Выберите подходящий артикль: определённый (известный/конкретный) или неопределённый (один из класса).',
      questions: [
        { id: 'q1', prompt: '—¿Quién es Susi? — ___ alta.',                  options: ['La', 'Una'], correct: 'La', explanation: 'Конкретная Сюзи.' },
        { id: 'q2', prompt: '—¿Qué tipo de coche busca? — ___ pequeño.',     options: ['El', 'Uno'], correct: 'Uno', explanation: 'Любая малолитражка.' },
        { id: 'q3', prompt: '—¿Quién es don Tomás? — ___ delgado.',           options: ['El', 'Uno'], correct: 'El' },
        { id: 'q4', prompt: '—¿Qué cámara quieres? — ___ buena, aunque sea cara.', options: ['La', 'Una'], correct: 'Una' },
        { id: 'q5', prompt: '—¿Qué pendientes te vas a poner? — ___ de oro.',  options: ['Los', 'Unos'], correct: 'Los', explanation: 'Известные сергьи (мои, золотые).' },
        { id: 'q6', prompt: '—¿Qué tipo de zapatos quiere? — ___ cómodos.',     options: ['Los', 'Unos'], correct: 'Unos' },
      ],
    },

    {
      id: '11.5',
      title: 'Сопоставьте конструкцию и пример',
      type: 'match',
      instructions: 'Подберите пример к каждой схеме.',
      pool: ['La verde.', 'Uno pequeño.', 'La del vestido blanco.', 'Lo bueno del verano son las vacaciones.', 'Las de oro.'],
      questions: [
        { id: 'q1', prompt: '<em>el / la / los / las</em> + adjetivo (известный)',  correct: 'La verde.' },
        { id: 'q2', prompt: '<em>uno / una / unos / unas</em> + adjetivo (один из класса)', correct: 'Uno pequeño.' },
        { id: 'q3', prompt: '<em>el / la / los / las</em> + de + ситуация',           correct: 'La del vestido blanco.' },
        { id: 'q4', prompt: '<em>el / la / los / las</em> + de + материал/принадлежность', correct: 'Las de oro.' },
        { id: 'q5', prompt: '<em>lo</em> + adjetivo masculino singular',                correct: 'Lo bueno del verano son las vacaciones.' },
      ],
    },

    {
      id: '11.6',
      title: 'Перепишите без повтора существительного',
      type: 'fill',
      instructions: 'Перепишите вторую часть, опустив существительное (заменив на артикль + признак).',
      questions: [
        { id: 'q1', prompt: 'Estos zapatos negros y aquellos zapatos rojos. → Estos zapatos negros y ___.', correct: ['aquellos rojos', 'aquellos rojos.'] },
        { id: 'q2', prompt: 'Mi coche y el coche de mi hermano. → Mi coche y ___.',                          correct: ['el de mi hermano', 'el de mi hermano.'] },
        { id: 'q3', prompt: 'La casa grande y la casa pequeña. → La casa grande y ___.',                      correct: ['la pequeña', 'la pequeña.'] },
        { id: 'q4', prompt: 'Mis pantalones azules y unos pantalones nuevos. → Mis pantalones azules y ___.',  correct: ['unos nuevos', 'unos nuevos.'] },
        { id: 'q5', prompt: 'Esta camisa blanca y la camisa de Marta. → Esta camisa blanca y ___.',             correct: ['la de Marta', 'la de Marta.'] },
        { id: 'q6', prompt: 'Los amigos viejos y los amigos nuevos. → Los amigos viejos y ___.',                correct: ['los nuevos', 'los nuevos.'] },
      ],
    },

    {
      id: '11.7',
      title: 'lo bueno / lo malo / lo importante…',
      type: 'fill',
      instructions: 'Восстановите фразу. Не забывайте: после <em>lo</em> прилагательное в м. р. ед. ч.',
      questions: [
        { id: 'q1', prompt: '___ bueno de vivir aquí es la tranquilidad.',           correct: 'Lo' },
        { id: 'q2', prompt: '___ malo de los lunes es el cansancio.',                  correct: 'Lo' },
        { id: 'q3', prompt: '___ mejor del viaje fue conocer a tu familia.',            correct: 'Lo' },
        { id: 'q4', prompt: '___ peor de mi trabajo son las reuniones.',                 correct: 'Lo' },
        { id: 'q5', prompt: '___ importante es no rendirse.',                              correct: 'Lo' },
        { id: 'q6', prompt: '___ difícil del español son los verbos irregulares.',         correct: 'Lo' },
      ],
    },

    {
      id: '11.8',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой согласования или конструкции.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['—¿Qué falda quieres? —La roja.', '—¿Qué falda quieres? —La rojo.', '—¿Qué libros prefieres? —Los entretenidos.', '—¿Qué chica? —La alta.'], correct: '—¿Qué falda quieres? —La rojo.', explanation: '<em>falda</em> — femenino, поэтому <em>la roja</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Lo bueno del verano.', 'Lo buena del verano.', 'Lo mejor de Perú.', 'Lo importante.'], correct: 'Lo buena del verano.', explanation: 'После <em>lo</em> — м. р. ед. ч.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Mi coche y el de mi hermano.', 'Mi coche y la de mi hermano.', 'Esa chica y la del vestido blanco.', 'Estos pendientes y los de oro.'], correct: 'Mi coche y la de mi hermano.', explanation: '<em>coche</em> — masculino → <em>el de</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['—¿Quieres unos cómodos? —Sí.', '—¿Quieres unas cómodas? (= zapatillas) —Sí.', '—¿Quieres una cómoda? (= silla) —Sí.', '—¿Quieres uno cómoda? —Sí.'], correct: '—¿Quieres uno cómoda? —Sí.', explanation: 'Артикль и прилагательное должны быть одного рода и числа.' },
      ],
    },

    {
      id: '11.9',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите услышанное полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'me gusta más el de la izquierda',          correct: ['me gusta más el de la izquierda', 'me gusta más el de la izquierda.'] },
        { id: 'q2', prompt: '', audio: 'quiero uno barato',                          correct: ['quiero uno barato', 'quiero uno barato.'] },
        { id: 'q3', prompt: '', audio: 'lo bueno del verano son las vacaciones',     correct: ['lo bueno del verano son las vacaciones', 'lo bueno del verano son las vacaciones.'] },
        { id: 'q4', prompt: '', audio: 'la del vestido blanco es Alicia',            correct: ['la del vestido blanco es Alicia', 'la del vestido blanco es Alicia.'] },
        { id: 'q5', prompt: '', audio: 'prefiero los de oro',                         correct: ['prefiero los de oro', 'prefiero los de oro.'] },
      ],
    },

    {
      id: '11.10',
      title: 'Перепишите фразу',
      type: 'fill',
      instructions: 'Перепишите так, как сказал бы носитель.',
      questions: [
        { id: 'q1', prompt: '<em>—¿Qué blusa quieres? —El blanco.</em> →',           correct: ['—¿Qué blusa quieres? —La blanca.', '—¿Qué blusa quieres? —La blanca'] },
        { id: 'q2', prompt: '<em>Lo importante son la familia.</em> (исправь, оставив lo) →', correct: ['Lo importante es la familia.', 'Lo importante es la familia'] },
        { id: 'q3', prompt: '<em>Mi coche y la de mi hermano.</em> →',                 correct: ['Mi coche y el de mi hermano.', 'Mi coche y el de mi hermano'] },
        { id: 'q4', prompt: '<em>—¿Qué tipo de coche busca? —Pequeño.</em> →',         correct: ['—¿Qué tipo de coche busca? —Uno pequeño.', '—¿Qué tipo de coche busca? —Uno pequeño'] },
        { id: 'q5', prompt: '<em>Lo bonita del verano son las vacaciones.</em> →',     correct: ['Lo bonito del verano son las vacaciones.', 'Lo bonito del verano son las vacaciones'] },
      ],
    },
  ],
};
