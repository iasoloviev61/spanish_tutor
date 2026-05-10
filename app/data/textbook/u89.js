// ============================================================
// Unidad 89 — Estilo indirecto (2): preguntas
// Me preguntó dónde vivía
// Передача вопросов: preguntar + si / + interrogativo,
// querer saber, desear saber, gustaría saber + согласование
// времён.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u89 = {
  id: 'u89',
  number: 89,
  title: { es: 'Me preguntó dónde vivía', topic: 'Estilo indirecto (2) — preguntas' },
  topicRu: 'Косвенная речь (2): передача вопросов',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'En estilo indirecto, las preguntas se transmiten con dos esquemas: <em>preguntar + si</em> (cuando la pregunta original era de sí/no) y <em>preguntar + palabra interrogativa</em> (qué, dónde, cuándo, cómo, por qué, quién, cuánto).',
      ru: 'Вопросы в косвенной речи передаются по двум схемам: <em>preguntar + si</em ё«спросить, ли…») — для общих вопросов (да/нет), и <em>preguntar + вопросительное слово</em> (qué, dónde, cuándo, cómo, por qué, quién, cuánto) — для специальных.',
      examples: [
        { es: '«¿Tienes novio?» → Me preguntó si tenía novio.', ru: '«У тебя есть парень?» → Он спросил меня, есть ли у меня парень.' },
        { es: '«¿Cómo se llama tu hermano?» → Le pregunté cómo se llamaba su hermano.', ru: '«Как зовут твоего брата?» → Я спросил, как зовут его брата.' },
        { es: '«¿Dónde vives?» → Me preguntó dónde vivía.', ru: '«Где ты живёшь?» → Он спросил, где я живу.' },
      ],
    },

    {
      type: 'heading',
      text: 'Глаголы для введения вопросов',
    },
    {
      type: 'rule',
      es: 'El verbo más común para introducir preguntas en estilo indirecto es <em>preguntar</em>. También se usan <em>querer saber, desear saber, (me/te…) gustaría saber</em>.',
      ru: 'Главный вводящий глагол — <em>preguntar</em>. Используются также <em>querer saber, desear saber, (me/te…) gustaría saber</em> «хотел/хотелось бы узнать».',
      examples: [
        { es: 'Sara quiere saber si vas a ayudarla.', ru: 'Сара хочет знать, будешь ли ты ей помогать.' },
        { es: 'Me gustaría saber qué pasó anoche.', ru: 'Мне бы хотелось знать, что произошло вчера вечером.' },
      ],
    },

    {
      type: 'heading',
      text: 'Согласование времён: настоящее (quiere saber / ha preguntado)',
    },
    {
      type: 'rule',
      es: 'Si el verbo introductor está en <strong>presente</strong> o en <strong>pretérito perfecto</strong> (<em>quiere saber, ha preguntado</em>), normalmente <strong>no cambian los tiempos</strong> de la pregunta original.',
      ru: 'Если вводящий глагол стоит в <strong>презенсе</strong> или <strong>прет. перфекто</strong> (<em>quiere saber, ha preguntado</em>), времена в передаваемом вопросе <strong>не меняются</strong>.',
    },
    {
      type: 'table',
      caption: 'Quiere saber / Ha preguntado…',
      columns: ['О чём', 'Прямой вопрос', 'Косвенный'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['настоящее',                              '<em>«¿Hablas español?»</em>',                          '<em>Quiere saber si hablas español.</em>'],
        ['настоящее (continuo)',                     '<em>«¿Qué estás haciendo?»</em>',                       '<em>Quiere saber qué estás haciendo.</em>'],
        ['прошлое (perfecto)',                          '<em>«¿He acabado el cuadro?»</em>',                      '<em>Quiere saber si he acabado el cuadro.</em>'],
        ['прошлое (indefinido + imperfecto)',              '<em>«¿Adónde fuimos el domingo?»</em>',                   '<em>Quiere saber adónde fuimos el domingo.</em>'],
        ['будущее (futuro)',                                  '<em>«¿Cuándo será el examen?»</em>',                      '<em>Quiere saber cuándo será el examen.</em>'],
        ['будущее (ir a)',                                       '<em>«¿Vamos a ir el domingo?»</em>',                       '<em>Quiere saber si vamos a ir el domingo.</em>'],
        ['гипотетическое (condicional)',                            '<em>«¿Sería mejor quedar otro día?»</em>',                  '<em>Quiere saber si sería mejor quedar otro día.</em>'],
      ],
    },

    {
      type: 'heading',
      text: 'Согласование времён: прошлое (preguntó / quería saber)',
    },
    {
      type: 'rule',
      es: 'Si el verbo introductor va en <strong>pretérito indefinido</strong> o en <strong>imperfecto</strong> (<em>preguntó / quería saber</em>), los tiempos de la pregunta original <strong>se desplazan al pasado</strong>: presente → imperfecto, perfecto/indefinido → pluscuamperfecto, futuro → condicional, ir a → iba a.',
      ru: 'Если вводящий глагол стоит в <strong>индефинидо</strong> или <strong>имперфекте</strong> (<em>preguntó / quería saber</em>), времена в передаваемом вопросе <strong>сдвигаются в прошлое</strong>: презенс → имперфект, перфекто/индефинидо → плюсквамп., футуро → кондисионал, <em>ir a</em> → <em>iba a</em>.',
    },
    {
      type: 'table',
      caption: 'Preguntó / Quería saber… (сдвиг)',
      columns: ['Прямой вопрос', 'Косвенный после preguntó'],
      colClasses: ['col-pattern', 'col-pattern'],
      rows: [
        ['<em>«¿Hablas español?»</em>',                       '<em>Me preguntó si hablaba español.</em>'],
        ['<em>«¿Qué estás haciendo?»</em>',                      '<em>Me preguntó qué estaba haciendo.</em>'],
        ['<em>«¿He acabado el cuadro?»</em>',                       '<em>Quería saber si había acabado el cuadro.</em>'],
        ['<em>«¿Adónde fuimos el domingo?»</em>',                       '<em>Quería saber adónde habíamos ido el domingo.</em>'],
        ['<em>«¿Cuándo será el examen?»</em>',                                '<em>Preguntó cuándo sería el examen.</em>'],
        ['<em>«¿Vamos a ir el domingo?»</em>',                                  '<em>Preguntó si íbamos a ir el domingo.</em>'],
        ['<em>«¿Qué haremos en caso de que…?»</em>',                              '<em>Preguntó qué haríamos en caso de que…</em>'],
      ],
    },

    {
      type: 'atencion',
      es: 'En español, las preguntas indirectas <strong>no llevan signos de interrogación</strong> y mantienen el orden sujeto-verbo casi siempre: <em>Me preguntó dónde vivía</em> (no «<em>donde vivía yo</em>»). Cuando el verbo en pasado del original conserva la misma referencia, también es posible mantenerlo: <em>«¿Adónde fuiste?» → Me preguntó adónde fui</em> (más coloquial) / <em>adónde había ido</em> (más neutro).',
      ru: 'В испанском косвенные вопросы <strong>не пишутся с вопросительными знаками</strong> и сохраняют обычный порядок «подлежащее — глагол»: <em>Me preguntó dónde vivía</em>. Если в оригинале было индефинидо и нет смыслового сдвига, можно оставить и его: <em>«¿Adónde fuiste?» → Me preguntó adónde fui</em> (разговорно) / <em>había ido</em> (нейтральнее).',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '89.1',
      title: 'Quiero saber + si / qué… (без сдвига)',
      type: 'fill',
      instructions: 'Передайте вопрос автоответчика через <em>quiero saber…</em> Подставьте нужное вопросительное слово (или <em>si</em>) и форму глагола.',
      questions: [
        { id: 'q1', prompt: '«¿Dónde has comprado el libro sobre Cuba?» → Patricia, soy Raquel. Quiero saber (<em>dónde / si</em>) ___ has comprado el libro sobre Cuba.', correct: 'dónde' },
        { id: 'q2', prompt: '«¿Cuándo le va a devolver el coche?» → Su padre quiere saber (<em>cuándo / si</em>) ___ le va a devolver el coche.',                              correct: 'cuándo' },
        { id: 'q3', prompt: '«¿Va a venir al concierto esta noche?» → Ernesto quiere saber (<em>cuándo / si</em>) ___ va a venir al concierto esta noche.',                       correct: 'si' },
        { id: 'q4', prompt: '«¿Dónde vive Laura?» → Fede quiere saber (<em>dónde / si</em>) ___ vive Laura.',                                                                       correct: 'dónde' },
        { id: 'q5', prompt: '«¿Puede cuidar a los niños esta noche?» → Ismael quiere saber (<em>si / dónde</em>) ___ puede cuidar a los niños esta noche.',                            correct: 'si' },
        { id: 'q6', prompt: '«¿Está ocupada el sábado?» → Lolo quiere saber (<em>si / cómo</em>) ___ está ocupada el sábado.',                                                            correct: 'si' },
      ],
    },

    {
      id: '89.2',
      title: 'Преобразование с сдвигом: me preguntó / quería saber',
      type: 'fill',
      instructions: 'Передайте вопрос в косвенной речи (вводный глагол в прошлом). Глагол поставьте в нужной форме.',
      questions: [
        { id: 'q1', prompt: '«¿Tienes novia?» (le pregunté) → Le pregunté si (<em>tener</em>) ___ novia.',                                          correct: 'tenía' },
        { id: 'q2', prompt: '«¿Cuándo lo vas a llamar?» (Jesús, ayer) → Jesús quería saber cuándo lo (<em>ir</em>) ___ a llamar.',                      correct: 'iba' },
        { id: 'q3', prompt: '«¿Qué hace Ramón?» (Ana) → Ana quería saber qué (<em>hacer</em>) ___ Ramón.',                                                  correct: 'hacía' },
        { id: 'q4', prompt: '«¿Qué vais a hacer este verano?» (Lola) → Lola me preguntó qué (<em>ir</em>) ___ a hacer ese verano.',                            correct: 'íbamos' },
        { id: 'q5', prompt: '«¿Os gustaría salir el sábado?» (Alberto) → Alberto quería saber si nos (<em>gustar</em>) ___ salir el sábado.',                    correct: 'gustaría' },
        { id: 'q6', prompt: '«¿Por qué has dejado el trabajo?» (Ángela) → Ángela quería saber por qué (<em>dejar</em>) ___ el trabajo.',                            correct: 'había dejado' },
        { id: 'q7', prompt: '«¿Quién pagará el arreglo de la cocina?» (al administrador) → Le pregunté al administrador quién (<em>pagar</em>) ___ el arreglo.',     correct: 'pagaría' },
        { id: 'q8', prompt: '«¿Habéis visto a alguien sospechoso por el barrio?» (la policía) → La policía quería saber si (<em>ver</em>) ___ a alguien sospechoso.', correct: 'habíamos visto' },
        { id: 'q9', prompt: '«¿Te llamó Ángel anoche?» (Luisa) → Luisa me preguntó si me (<em>llamar</em>) ___ Ángel la noche anterior.',                                correct: 'había llamado' },
        { id: 'q10', prompt: '«¿Dónde conociste a Silvia?» (a Adolfo) → Le pregunté a Adolfo dónde (<em>conocer</em>) ___ a Silvia.',                                       correct: 'había conocido' },
      ],
    },

    {
      id: '89.3',
      title: 'Si или вопросительное слово?',
      type: 'choice',
      instructions: 'Выберите нужный союз / вопросительное слово.',
      questions: [
        { id: 'q1', prompt: 'Me preguntó ___ vivía en Madrid.',                              options: ['si', 'dónde', 'qué'],                  correct: 'si' },
        { id: 'q2', prompt: 'Me preguntó ___ vivía.',                                          options: ['si', 'dónde', 'qué'],                  correct: 'dónde' },
        { id: 'q3', prompt: 'Quiere saber ___ hablo italiano.',                                 options: ['si', 'cómo', 'cuándo'],                correct: 'si' },
        { id: 'q4', prompt: 'Quiere saber ___ hablo italiano (с каким акцентом).',                options: ['si', 'cómo', 'cuándo'],                correct: 'cómo' },
        { id: 'q5', prompt: 'Le pregunté ___ había llegado a casa.',                                options: ['si', 'cuándo', 'qué'],                  correct: 'cuándo' },
        { id: 'q6', prompt: 'Le pregunté ___ había llegado a casa (просто да/нет).',                  options: ['si', 'cuándo', 'qué'],                  correct: 'si' },
        { id: 'q7', prompt: 'Quería saber ___ pasaba con Miguel.',                                       options: ['si', 'qué', 'dónde'],                   correct: 'qué' },
        { id: 'q8', prompt: 'Me preguntó ___ había mucha gente en la fiesta.',                              options: ['si', 'cuántos', 'qué'],                correct: 'si' },
      ],
    },

    {
      id: '89.4',
      title: 'Какая форма глагола (после сдвига)?',
      type: 'choice',
      instructions: 'Выберите правильную форму глагола в косвенной речи.',
      questions: [
        { id: 'q1', prompt: '«¿Dónde vives?» → Me preguntó dónde ___ .',                              options: ['vivo', 'vivía', 'viviría'],                correct: 'vivía' },
        { id: 'q2', prompt: '«¿Has acabado el cuadro?» → Me preguntó si ___ el cuadro.',                  options: ['he acabado', 'había acabado', 'acabaría'], correct: 'había acabado' },
        { id: 'q3', prompt: '«¿Cuándo será el examen?» → Preguntó cuándo ___ el examen.',                    options: ['será', 'sería', 'sea'],                    correct: 'sería' },
        { id: 'q4', prompt: '«¿Vamos a ir el domingo?» → Preguntó si ___ a ir el domingo.',                      options: ['vamos', 'íbamos', 'iríamos'],              correct: 'íbamos' },
        { id: 'q5', prompt: '«¿Qué estás haciendo?» → Me preguntó qué ___ haciendo.',                                options: ['estoy', 'estaba', 'estaría'],            correct: 'estaba' },
        { id: 'q6', prompt: '«¿Adónde fuimos el domingo?» → Quería saber adónde ___ el domingo.',                       options: ['fuimos', 'habíamos ido', 'iríamos'],   correct: 'habíamos ido' },
        { id: 'q7', prompt: '«¿Dónde vives?» → Quiere saber dónde ___ .',                                                  options: ['vivo', 'vivía', 'viviría'],            correct: 'vivo', explanation: 'После <em>quiere saber</em> сдвига нет.' },
      ],
    },

    {
      id: '89.5',
      title: 'Преобразование без сдвига (quiere saber)',
      type: 'fill',
      instructions: 'Подставьте нужную форму глагола (вводный глагол в презенсе — без сдвига).',
      questions: [
        { id: 'q1', prompt: '«¿Hablas español?» → Quiere saber si (<em>hablar</em>, tú) ___ español.',                                  correct: 'hablas' },
        { id: 'q2', prompt: '«¿Qué estás haciendo?» → Quiere saber qué (<em>estar</em>) ___ haciendo.',                                  correct: 'estás' },
        { id: 'q3', prompt: '«¿Has acabado el cuadro?» → Quiere saber si (<em>acabar</em>, tú) ___ el cuadro.',                            correct: 'has acabado' },
        { id: 'q4', prompt: '«¿Cuándo será el examen?» → Quiere saber cuándo (<em>ser</em>) ___ el examen.',                                  correct: 'será' },
        { id: 'q5', prompt: '«¿Vamos a ir el domingo?» → Quiere saber si (<em>ir</em>, vosotros) ___ a ir el domingo.',                          correct: 'vais' },
        { id: 'q6', prompt: '«¿Sería mejor quedar otro día?» → Quiere saber si (<em>ser</em>) ___ mejor quedar otro día.',                          correct: 'sería' },
      ],
    },

    {
      id: '89.6',
      title: 'Преобразование со сдвигом (preguntó)',
      type: 'fill',
      instructions: 'Подставьте нужную форму глагола (вводный глагол в прошлом — нужен сдвиг).',
      questions: [
        { id: 'q1', prompt: '«¿Hablas español?» → Me preguntó si (<em>hablar</em>) ___ español.',                                          correct: 'hablaba' },
        { id: 'q2', prompt: '«¿Qué estás haciendo?» → Me preguntó qué (<em>estar</em>) ___ haciendo.',                                       correct: 'estaba' },
        { id: 'q3', prompt: '«¿He acabado el cuadro?» → Me preguntó si (<em>acabar</em>) ___ el cuadro.',                                       correct: 'había acabado' },
        { id: 'q4', prompt: '«¿Quién era la chica que estaba conmigo ayer?» → Quería saber quién (<em>ser</em>) ___ la chica que estaba conmigo el otro día.', correct: 'era' },
        { id: 'q5', prompt: '«¿Cuándo será el examen?» → Preguntó cuándo (<em>ser</em>) ___ el examen.',                                            correct: 'sería' },
        { id: 'q6', prompt: '«¿Qué haremos en caso de que llueva?» → Preguntó qué (<em>hacer</em>, nosotros) ___ en caso de que lloviera.',              correct: 'haríamos' },
      ],
    },

    {
      id: '89.7',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Me preguntó si tenía novio.', 'Me preguntó si tengo novio.', 'Me ha preguntado si tengo novio.'],                                correct: 'Me preguntó si tengo novio.', explanation: 'После <em>preguntó</em> презенс сдвигается в имперфект.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Me preguntó dónde vivía.', 'Me preguntó dónde vivo.', 'Quiere saber dónde vivo.'],                                                  correct: 'Me preguntó dónde vivo.', explanation: 'Тот же сдвиг.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Le pregunté qué iba a hacer.', 'Le pregunté qué va a hacer.', 'Le he preguntado qué va a hacer.'],                                     correct: 'Le pregunté qué va a hacer.', explanation: 'После <em>pregunté</em> — <em>iba a</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Me preguntó cuándo sería el examen.', 'Me preguntó cuándo será el examen.', 'Quiere saber cuándo será el examen.'],                       correct: 'Me preguntó cuándo será el examen.', explanation: 'Futuro → condicional после <em>preguntó</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Me preguntó si había venido.', 'Me preguntó si he venido.', 'Quiere saber si he venido.'],                                                  correct: 'Me preguntó si he venido.', explanation: 'Perfecto → pluscuamperfecto после <em>preguntó</em>.' },
      ],
    },

    {
      id: '89.8',
      title: 'Какие фразы корректны',
      type: 'multi',
      instructions: 'Отметьте все <strong>правильные</strong> фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Me preguntó si tenía novio.',
            'Me preguntó si tengo novio.',
            'Me preguntó dónde vivía.',
            'Me preguntó dónde vivo.',
            'Quiere saber dónde vivo.',
            'Quiere saber dónde vivía.',
            'Le pregunté qué iba a hacer.',
            'Le pregunté qué va a hacer.',
            'Me preguntó cuándo sería el examen.',
            'Me preguntó cuándo será el examen.',
            'Me preguntó si había venido.',
            'Me preguntó si he venido.',
            'Le pregunté ¿dónde vivía?',
          ],
          correct: [
            'Me preguntó si tenía novio.',
            'Me preguntó dónde vivía.',
            'Quiere saber dónde vivo.',
            'Le pregunté qué iba a hacer.',
            'Me preguntó cuándo sería el examen.',
            'Me preguntó si había venido.',
          ],
          explanation: 'После <em>quiere saber</em> сдвига нет; после <em>pregunté/preguntó</em> делается сдвиг (presente → imperfecto, perfecto → pluscuamperfecto, futuro → condicional, ir a → iba a). Косвенный вопрос не пишется с «¿…?».',
        },
      ],
    },

    {
      id: '89.9',
      title: 'Сопоставьте схему',
      type: 'match',
      instructions: 'Какая схема косвенного вопроса подходит?',
      pool: [
        'preguntar + si',
        'preguntar + qué / dónde / cómo / cuándo / por qué / quién / cuánto',
      ],
      questions: [
        { id: 'q1', prompt: 'Прямой вопрос: <em>«¿Tienes novio?»</em>',           correct: 'preguntar + si' },
        { id: 'q2', prompt: 'Прямой вопрос: <em>«¿Cómo te llamas?»</em>',          correct: 'preguntar + qué / dónde / cómo / cuándo / por qué / quién / cuánto' },
        { id: 'q3', prompt: 'Прямой вопрос: <em>«¿Vienes mañana?»</em>',             correct: 'preguntar + si' },
        { id: 'q4', prompt: 'Прямой вопрос: <em>«¿Por qué no me llamaste?»</em>',     correct: 'preguntar + qué / dónde / cómo / cuándo / por qué / quién / cuánto' },
        { id: 'q5', prompt: 'Прямой вопрос: <em>«¿Has comido ya?»</em>',                correct: 'preguntar + si' },
        { id: 'q6', prompt: 'Прямой вопрос: <em>«¿Cuántos años tienes?»</em>',           correct: 'preguntar + qué / dónde / cómo / cuándo / por qué / quién / cuánto' },
      ],
    },

    {
      id: '89.10',
      title: 'Аудио-диктант',
      type: 'fill',
      instructions: 'Запишите услышанное полностью с диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Me preguntó si tenía novio.',                              correct: ['Me preguntó si tenía novio.', 'Me preguntó si tenía novio'] },
        { id: 'q2', prompt: '', audio: 'Me preguntó dónde vivía.',                                   correct: ['Me preguntó dónde vivía.', 'Me preguntó dónde vivía'] },
        { id: 'q3', prompt: '', audio: 'Le pregunté cómo se llamaba su hermano.',                       correct: ['Le pregunté cómo se llamaba su hermano.', 'Le pregunté cómo se llamaba su hermano'] },
        { id: 'q4', prompt: '', audio: 'Quiere saber si hablas español.',                                  correct: ['Quiere saber si hablas español.', 'Quiere saber si hablas español'] },
        { id: 'q5', prompt: '', audio: 'Me preguntó cuándo sería el examen.',                                correct: ['Me preguntó cuándo sería el examen.', 'Me preguntó cuándo sería el examen'] },
        { id: 'q6', prompt: '', audio: 'Quería saber qué estaba haciendo.',                                     correct: ['Quería saber qué estaba haciendo.', 'Quería saber qué estaba haciendo'] },
        { id: 'q7', prompt: '', audio: 'Me gustaría saber qué pasó anoche.',                                       correct: ['Me gustaría saber qué pasó anoche.', 'Me gustaría saber qué pasó anoche'] },
      ],
    },

    {
      id: '89.11',
      title: 'Передайте интервью Сабины',
      type: 'fill',
      instructions: 'Сабина пересказывает другу интервью на работе. Подставьте нужное слово или форму глагола.',
      questions: [
        { id: 'q1', prompt: '«¿Cuántos años tiene?» → Primero me preguntaron cuántos años (<em>tener</em>) ___ .',                                       correct: 'tenía' },
        { id: 'q2', prompt: '«¿Dónde ha estudiado?» → Me preguntaron (<em>dónde / si</em>) ___ había estudiado.',                                          correct: 'dónde' },
        { id: 'q3', prompt: '«¿Sabe usar un ordenador?» → Querían saber (<em>si / qué</em>) ___ sabía usar un ordenador.',                                    correct: 'si' },
        { id: 'q4', prompt: '«¿Habla algún idioma extranjero?» → Querían saber si (<em>hablar</em>) ___ algún idioma extranjero.',                                correct: 'hablaba' },
        { id: 'q5', prompt: '«¿Por qué quiere dejar su empleo actual?» → Me preguntaron por qué (<em>querer</em>) ___ dejar mi empleo actual.',                       correct: 'quería' },
        { id: 'q6', prompt: '«¿Ha estado en América Latina?» → Me preguntaron si (<em>estar</em>) ___ en América Latina.',                                                correct: 'había estado' },
        { id: 'q7', prompt: '«¿Estaría dispuesta a viajar?» → Me preguntaron si (<em>estar</em>) ___ dispuesta a viajar.',                                                    correct: 'estaría' },
        { id: 'q8', prompt: '«¿Cuánto espera ganar?» → Finalmente me preguntaron cuánto (<em>esperar</em>) ___ ganar.',                                                          correct: 'esperaba' },
      ],
    },

    {
      id: '89.12',
      title: 'Какое правило применилось?',
      type: 'choice',
      instructions: 'Какое правило объясняет передачу вопроса?',
      questions: [
        { id: 'q1', prompt: '<em>Me preguntó si tenía novio.</em>',                              options: ['preguntar + si (общий вопрос)', 'preguntar + interrogativo'], correct: 'preguntar + si (общий вопрос)' },
        { id: 'q2', prompt: '<em>Me preguntó dónde vivía.</em>',                                   options: ['preguntar + si (общий вопрос)', 'preguntar + interrogativo'], correct: 'preguntar + interrogativo' },
        { id: 'q3', prompt: '<em>Quiere saber dónde vivo.</em>',                                      options: ['после quiere saber — без сдвига', 'после preguntó — со сдвигом'], correct: 'после quiere saber — без сдвига' },
        { id: 'q4', prompt: '<em>Me preguntó dónde vivía.</em>',                                          options: ['после quiere saber — без сдвига', 'после preguntó — со сдвигом'], correct: 'после preguntó — со сдвигом' },
        { id: 'q5', prompt: '<em>Preguntó cuándo sería el examen.</em>',                                       options: ['futuro → condicional', 'perfecto → pluscuamperfecto'], correct: 'futuro → condicional' },
        { id: 'q6', prompt: '<em>Me preguntó si había venido.</em>',                                                options: ['futuro → condicional', 'perfecto → pluscuamperfecto'], correct: 'perfecto → pluscuamperfecto' },
      ],
    },
  ],
};
