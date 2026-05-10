// ============================================================
// Unidad 88 — Estilo indirecto (1)
// Dice que vive… Dijo que vivía…
// Передача чужой речи: согласование времён в зависимости
// от вводящего глагола (presente / pretérito perfecto vs.
// pretérito indefinido / imperfecto). Утверждения, без
// вопросов и приказов.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u88 = {
  id: 'u88',
  number: 88,
  title: { es: 'Dice que vive… Dijo que vivía…', topic: 'Estilo indirecto (1) — afirmaciones' },
  topicRu: 'Косвенная речь (1): передача утверждений и согласование времён',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'El <strong>estilo indirecto</strong> sirve para transmitir lo que dijeron otras personas (o uno mismo en otro momento) <strong>sin repetir las palabras exactas</strong>. Hay que hacer ajustes lógicos en pronombres, posesivos y, sobre todo, en los <strong>tiempos verbales</strong>.',
      ru: '<strong>Косвенная речь</strong> — передача чужих (или своих прежних) слов <strong>без буквального повтора</strong>. Местоимения, притяжательные и (главное) <strong>времена</strong> приходится логически перестраивать.',
      examples: [
        { es: '«Soy el pintor. No puedo ir este mes.» → Mamá, es el pintor. Dice que no puede ir este mes.', ru: '«Я маляр. Не могу прийти в этом месяце.» → Мама, это маляр. Говорит, что не сможет прийти в этом месяце.' },
        { es: '«La llamaré cuando pueda.» → Dice que te llamará cuando pueda.', ru: '«Я позвоню ей, когда смогу.» → Он говорит, что позвонит тебе, когда сможет.' },
      ],
    },

    {
      type: 'heading',
      text: 'Глаголы для введения косвенной речи',
    },
    {
      type: 'rule',
      es: 'El verbo más común para introducir información en estilo indirecto es <em>decir</em>. También se usan <em>comentar, afirmar, añadir, explicar</em> y verbos como <em>asegurar, prometer</em>… Cada uno aporta un matiz, pero todos van seguidos de <em>que + frase</em>.',
      ru: 'Самый частый вводящий глагол — <em>decir</em> «сказать, говорить». Используются также <em>comentar, afirmar, añadir, explicar</em>, <em>asegurar, prometer</em>… Все они идут в схеме <em>+ que + фраза</em>.',
      examples: [
        { es: 'El otro día Juan me comentó que había suspendido porque no había podido estudiar.', ru: 'На днях Хуан мне рассказал, что провалил экзамен, потому что не смог позаниматься.' },
        { es: 'Felipe me ha prometido que iremos a Cuba el verano que viene.', ru: 'Фелипе пообещал мне, что в следующее лето мы поедем на Кубу.' },
      ],
    },

    {
      type: 'heading',
      text: 'Согласование времён: вводящий глагол в настоящем (dice / ha dicho)',
    },
    {
      type: 'rule',
      es: 'Si el verbo introductor está en <strong>presente</strong> o en <strong>pretérito perfecto</strong> (<em>dice / ha dicho</em>), normalmente <strong>no cambian los tiempos</strong> de la frase original.',
      ru: 'Если вводящий глагол стоит в <strong>презенсе</strong> или <strong>прет. перфекто</strong> (<em>dice / ha dicho</em>), времена внутри передаваемой речи <strong>обычно не меняются</strong>.',
    },
    {
      type: 'table',
      caption: 'Dice / Ha dicho que…',
      columns: ['О чём', 'В оригинале', 'В косвенной речи'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['настоящее',                    '<em>«Vivo en Guadalajara.»</em>',                   '<em>Dice que vive en Guadalajara.</em>'],
        ['настоящее (continuous)',         '<em>«Estoy estudiando mucho.»</em>',                  '<em>Dice que está estudiando mucho.</em>'],
        ['прошлое (perfecto)',                '<em>«No he podido hacerlo.»</em>',                     '<em>Dice que no ha podido hacerlo.</em>'],
        ['прошлое (indefinido + imperfecto)',   '<em>«No pude venir ayer porque estaba enferma.»</em>',  '<em>Dice que no pudo venir ayer porque estaba enferma.</em>'],
        ['будущее',                              '<em>«Te espero esta noche.»</em>',                       '<em>Dice que te espera esta noche.</em>'],
        ['будущее (futuro / ir a)',                '<em>«Lo haré cuando tenga tiempo.»</em>',                  '<em>Dice que lo hará cuando tenga tiempo.</em>'],
        ['гипотетическое',                            '<em>«Sería más feliz con otro trabajo.»</em>',              '<em>Dice que sería más feliz con otro trabajo.</em>'],
      ],
    },

    {
      type: 'heading',
      text: 'Согласование времён: вводящий глагол в прошлом (dijo)',
    },
    {
      type: 'rule',
      es: 'Si el verbo introductor está en <strong>pretérito indefinido</strong> (<em>dijo</em>), o en otros tiempos del pasado, los tiempos de la frase original <strong>se desplazan al pasado</strong>: presente → imperfecto, pretérito perfecto / indefinido → pluscuamperfecto, futuro → condicional.',
      ru: 'Если вводящий глагол стоит в <strong>индефинидо</strong> (<em>dijo</em>) или другом прошедшем времени, в передаваемой речи времена <strong>сдвигаются в прошлое</strong>: презенс → имперфект, перфекто/индефинидо → плюсквампер., футуро → кондисионал.',
    },
    {
      type: 'table',
      caption: 'Dijo que… (сдвиг времён)',
      columns: ['Прямая речь', 'Косвенная речь'],
      colClasses: ['col-pattern', 'col-pattern'],
      rows: [
        ['<em>presente</em> (vivo)',                       '<em>imperfecto</em> (vivía / vive)'],
        ['<em>presente continuo</em> (estoy estudiando)',     '<em>imperfecto continuo</em> (estaba estudiando)'],
        ['<em>pretérito perfecto</em> (no he podido)',          '<em>pluscuamperfecto</em> (no había podido)'],
        ['<em>pretérito indefinido</em> (no pude)',                '<em>pluscuamperfecto</em> (no había podido)'],
        ['<em>imperfecto</em> (estaba enferma)',                      '<em>imperfecto</em> (había estado / estaba enferma)'],
        ['<em>futuro</em> (te esperaré / te espero)',                    '<em>condicional</em> (te esperaría / esperaba)'],
        ['<em>ir a + inf.</em> (voy a hacerlo)',                            '<em>iba a + inf.</em> (iba a hacerlo)'],
        ['<em>condicional</em> (sería)',                                       '<em>condicional</em> (sería)'],
      ],
    },
    {
      type: 'rule',
      es: 'Ejemplos del uso de <em>dijo que…</em>:',
      ru: 'Примеры с <em>dijo que…</em>:',
      examples: [
        { es: '«Vivo en Guadalajara.» → Dijo que vivía en Guadalajara.', ru: '«Я живу в Гвадалахаре.» → Он сказал, что живёт в Гвадалахаре.' },
        { es: '«Estoy estudiando mucho.» → Dijo que estaba estudiando mucho.', ru: '«Я много учусь.» → Он сказал, что много учится.' },
        { es: '«No he podido hacerlo.» → Dijo que no había podido hacerlo.', ru: '«Я не смог этого сделать.» → Он сказал, что не смог.' },
        { es: '«No pude venir ayer.» → Dijo que no había podido venir ayer.', ru: '«Я не смог прийти вчера.» → Он сказал, что не смог прийти накануне.' },
        { es: '«Te esperaré esta noche.» → Dijo que me esperaría esa noche.', ru: '«Подожду тебя вечером.» → Он сказал, что подождёт меня вечером.' },
        { es: '«Voy a hacerlo otro día.» → Dijo que iba a hacerlo otro día.', ru: '«Сделаю в другой день.» → Он сказал, что сделает в другой день.' },
      ],
    },

    {
      type: 'atencion',
      es: 'En la lengua hablada, cuando el hecho transmitido sigue siendo válido en el momento en que se habla, también se admite mantener el tiempo original tras <em>dijo que</em>: <em>Dijo que vive en Guadalajara</em> (sigue viviendo allí). Pero el desplazamiento al pasado siempre es correcto y más neutro.',
      ru: 'В разговорной речи, если передаваемый факт <strong>остаётся актуальным</strong> в момент разговора, после <em>dijo que</em> можно сохранить исходное время: <em>Dijo que vive en Guadalajara</em> (он там и сейчас живёт). Но сдвиг в прошлое — всегда корректен и более нейтрален.',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '88.1',
      title: 'После dice / ha dicho — времена не меняются',
      type: 'fill',
      instructions: 'Перенесите фразу в косвенную речь. Глагол подберите в нужной форме.',
      questions: [
        { id: 'q1', prompt: '«Vivo en Madrid.» → Dice que (<em>vivir</em>) ___ en Madrid.',                                          correct: 'vive' },
        { id: 'q2', prompt: '«Trabajo en una empresa petrolera.» → Ha dicho que (<em>trabajar</em>) ___ en una empresa petrolera.',     correct: 'trabaja' },
        { id: 'q3', prompt: '«Te llamaré mañana.» → Dice que te (<em>llamar</em>) ___ mañana.',                                            correct: 'llamará' },
        { id: 'q4', prompt: '«Me he casado hace dos años.» → Ha dicho que se (<em>casar</em>) ___ hace dos años.',                            correct: 'ha casado' },
        { id: 'q5', prompt: '«Tengo un hijo.» → Dice que (<em>tener</em>) ___ un hijo.',                                                       correct: 'tiene' },
        { id: 'q6', prompt: '«Voy a crear mi propia empresa.» → Dice que (<em>ir</em>) ___ a crear su propia empresa.',                          correct: 'va' },
        { id: 'q7', prompt: '«Estoy haciendo un curso.» → Dice que (<em>estar</em>) ___ haciendo un curso.',                                       correct: 'está' },
        { id: 'q8', prompt: '«Sería más feliz con otro trabajo.» → Dice que (<em>ser</em>) ___ más feliz con otro trabajo.',                          correct: 'sería' },
      ],
    },

    {
      id: '88.2',
      title: 'После dijo — сдвиг времён',
      type: 'fill',
      instructions: 'Перенесите фразу в косвенную речь после <em>dijo que…</em>',
      questions: [
        { id: 'q1', prompt: '«Vivo en Guadalajara.» → Dijo que (<em>vivir</em>) ___ en Guadalajara.',                            correct: 'vivía' },
        { id: 'q2', prompt: '«Estoy estudiando mucho.» → Dijo que (<em>estar</em>) ___ estudiando mucho.',                          correct: 'estaba' },
        { id: 'q3', prompt: '«No he podido hacerlo.» → Dijo que no (<em>poder</em>) ___ hacerlo.',                                     correct: 'había podido' },
        { id: 'q4', prompt: '«No pude venir ayer porque estaba enferma.» → Dijo que no (<em>poder</em>) ___ venir el día anterior.',     correct: 'había podido' },
        { id: 'q5', prompt: '«Te espero esta noche en mi casa.» → Dijo que me (<em>esperar</em>) ___ esa noche en su casa.',                correct: 'esperaba' },
        { id: 'q6', prompt: '«Lo haré cuando tenga tiempo.» → Dijo que lo (<em>hacer</em>) ___ cuando tuviera tiempo.',                       correct: 'haría' },
        { id: 'q7', prompt: '«Voy a hacerlo otro día.» → Dijo que (<em>ir</em>) ___ a hacerlo otro día.',                                       correct: 'iba' },
        { id: 'q8', prompt: '«Sería más feliz con otro trabajo.» → Dijo que (<em>ser</em>) ___ más feliz con otro trabajo.',                       correct: 'sería' },
      ],
    },

    {
      id: '88.3',
      title: 'Передайте телефонные сообщения',
      type: 'fill',
      instructions: 'Передайте каждое сообщение в косвенной речи (вводный глагол — <em>dice</em>).',
      questions: [
        { id: 'q1', prompt: '«Soy el fontanero. Dígale que no puedo ir hasta la semana que viene.» → Papá, es el fontanero. Dice que no (<em>poder</em>) ___ ir hasta la semana que viene.', correct: 'puede' },
        { id: 'q2', prompt: '«Soy Sebastián. Dile que no puedo ir, mi mujer va a dar a luz.» → Don Anselmo, ha llamado Sebastián. Ha dicho que no (<em>poder</em>) ___ ir.',                  correct: 'puede' },
        { id: 'q3', prompt: '«Soy Chema. Dile que he quedado con Andrea en mi casa.» → Guillermo, ha llamado Chema. Ha dicho que (<em>quedar</em>) ___ con Andrea en su casa.',                  correct: 'ha quedado' },
        { id: 'q4', prompt: '«Soy Luciano. Dile a Marga que voy hacia allí.» → Luciano dice que (<em>ir</em>) ___ hacia aquí.',                                                                  correct: 'va' },
        { id: 'q5', prompt: '«Soy el pintor. Mañana le envío el presupuesto.» → Sofía, ha llamado el pintor. Dice que mañana le (<em>enviar</em>) ___ el presupuesto.',                            correct: 'envía' },
      ],
    },

    {
      id: '88.4',
      title: 'Завершите ответы (после me dijo / me aseguró)',
      type: 'fill',
      instructions: 'Дополните глагол в скобках в нужной форме (вводный глагол в прошлом — нужен сдвиг).',
      questions: [
        { id: 'q1', prompt: '— ¿Crees que Ana me quiere? — Sí, me aseguró que te (<em>querer</em>) ___ .',                            correct: 'quería' },
        { id: 'q2', prompt: '— ¿Sabes si Julio va a ir a Argentina este verano? — Sí, me comentó que (<em>ir</em>) ___ a ir.',          correct: 'iba' },
        { id: 'q3', prompt: '— ¿Sabes si tus hermanas vieron a Gloria en Murcia? — Sí, me dijeron que la (<em>ver</em>) ___ allí.',       correct: ['habían visto', 'vieron'] },
        { id: 'q4', prompt: '— ¿Estás seguro de que Nati ha comprado las entradas? — Sí, me aseguró que las (<em>comprar</em>) ___ .',     correct: ['había comprado', 'compró'] },
        { id: 'q5', prompt: '— ¿Estás seguro de que Pili y Luis quieren invitarnos? — Sí, me dijeron que (<em>querer</em>) ___ invitarnos.', correct: 'querían' },
        { id: 'q6', prompt: '— ¿Sabes si Albertina quiere salir mañana? — Sí, me dijo que le (<em>gustar</em>) ___ salir.',                    correct: 'gustaría' },
      ],
    },

    {
      id: '88.5',
      title: 'Какая форма правильная?',
      type: 'choice',
      instructions: 'Выберите правильный вариант.',
      questions: [
        { id: 'q1', prompt: '«Estudio mucho.» Dice que ___ mucho.',                                  options: ['estudiaba', 'estudia', 'estudie'],          correct: 'estudia' },
        { id: 'q2', prompt: '«Estudio mucho.» Dijo que ___ mucho.',                                    options: ['estudiaba', 'estudia', 'estudie'],          correct: 'estudiaba' },
        { id: 'q3', prompt: '«No he podido hacerlo.» Dijo que no ___ hacerlo.',                          options: ['ha podido', 'había podido', 'pudo'],          correct: 'había podido' },
        { id: 'q4', prompt: '«Te llamaré.» Dijo que me ___ .',                                              options: ['llamará', 'llamó', 'llamaría'],                correct: 'llamaría' },
        { id: 'q5', prompt: '«Voy a hacerlo.» Dijo que ___ a hacerlo.',                                      options: ['va', 'iba', 'iría'],                            correct: 'iba' },
        { id: 'q6', prompt: '«Estoy estudiando.» Dijo que ___ estudiando.',                                    options: ['estoy', 'estaba', 'estaría'],                  correct: 'estaba' },
        { id: 'q7', prompt: '«Sería más feliz.» Dijo que ___ más feliz.',                                       options: ['es', 'sería', 'sea'],                          correct: 'sería' },
        { id: 'q8', prompt: '«No pude venir ayer.» Dijo que no ___ venir el día anterior.',                       options: ['ha podido', 'había podido', 'puede'],          correct: 'había podido' },
      ],
    },

    {
      id: '88.6',
      title: 'Перепишите в косвенной речи через dijo que…',
      type: 'fill',
      instructions: 'Переведите прямую речь в косвенную после <em>dijo que…</em> Подставьте нужную форму глагола.',
      questions: [
        { id: 'q1', prompt: '«No quiero salir.» → Dijo que no (<em>querer</em>) ___ salir.',                              correct: 'quería' },
        { id: 'q2', prompt: '«He estado en París.» → Dijo que (<em>estar</em>) ___ en París.',                              correct: 'había estado' },
        { id: 'q3', prompt: '«Llamé a Marta ayer.» → Dijo que (<em>llamar</em>) ___ a Marta el día anterior.',                  correct: 'había llamado' },
        { id: 'q4', prompt: '«Ahora estoy trabajando.» → Dijo que en ese momento (<em>estar</em>) ___ trabajando.',                correct: 'estaba' },
        { id: 'q5', prompt: '«Te ayudaré mañana.» → Dijo que me (<em>ayudar</em>) ___ al día siguiente.',                              correct: 'ayudaría' },
        { id: 'q6', prompt: '«Vamos a comprar la casa.» → Dijo que (<em>ir</em>) ___ a comprar la casa.',                                correct: 'iban' },
      ],
    },

    {
      id: '88.7',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза — с ошибкой согласования.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Dice que vive en Lima.', 'Dice que vivía en Lima.', 'Ha dicho que vive en Lima.'],                              correct: 'Dice que vivía en Lima.', explanation: 'После <em>dice</em> времена не сдвигаются.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Dijo que vivía en Lima.', 'Dijo que vive en Lima (всё ещё там).', 'Dijo que vivirá en Lima.'],                       correct: 'Dijo que vivirá en Lima.', explanation: 'Будущее → condicional, а не futuro.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Dijo que había estado en París.', 'Dijo que ha estado en París.', 'Dice que ha estado en París.'],                       correct: 'Dijo que ha estado en París.', explanation: 'После <em>dijo</em> perfecto/indefinido → pluscuamperfecto.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Dijo que me llamaría.', 'Dijo que me llamará.', 'Dice que me llamará.'],                                                  correct: 'Dijo que me llamará.', explanation: 'Futuro после <em>dijo</em> сдвигается в condicional.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Dijo que iba a hacerlo.', 'Dijo que va a hacerlo.', 'Dice que va a hacerlo.'],                                              correct: 'Dijo que va a hacerlo.', explanation: '<em>ir a + inf.</em> после <em>dijo</em> сдвигается в <em>iba a + inf.</em>' },
      ],
    },

    {
      id: '88.8',
      title: 'Сопоставьте время прямой и косвенной речи (после dijo)',
      type: 'match',
      instructions: 'Какому времени в косвенной речи соответствует время оригинала?',
      pool: [
        'imperfecto',
        'pluscuamperfecto',
        'condicional',
        'iba a + infinitivo',
        'condicional (без изменений)',
      ],
      questions: [
        { id: 'q1', prompt: 'Прямая речь: <em>presente</em>',                          correct: 'imperfecto' },
        { id: 'q2', prompt: 'Прямая речь: <em>pretérito perfecto</em>',                  correct: 'pluscuamperfecto' },
        { id: 'q3', prompt: 'Прямая речь: <em>pretérito indefinido</em>',                  correct: 'pluscuamperfecto' },
        { id: 'q4', prompt: 'Прямая речь: <em>futuro simple</em> (te llamaré)',                correct: 'condicional' },
        { id: 'q5', prompt: 'Прямая речь: <em>ir a + infinitivo</em>',                            correct: 'iba a + infinitivo' },
        { id: 'q6', prompt: 'Прямая речь: <em>condicional</em>',                                    correct: 'condicional (без изменений)' },
      ],
    },

    {
      id: '88.9',
      title: 'Какие фразы корректны',
      type: 'multi',
      instructions: 'Отметьте все <strong>правильные</strong> фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Dice que vive en Madrid.',
            'Dice que vivía en Madrid.',
            'Dijo que vivía en Madrid.',
            'Dijo que vive en Madrid (sigue viviendo allí).',
            'Dijo que vivirá en Madrid.',
            'Dijo que viviría en Madrid.',
            'Dijo que había estado en París.',
            'Dijo que ha estado en París.',
            'Dijo que iba a hacerlo.',
            'Dijo que va a hacerlo.',
            'Ha dicho que vive en Lima.',
            'Ha dicho que vivía en Lima.',
          ],
          correct: [
            'Dice que vive en Madrid.',
            'Dijo que vivía en Madrid.',
            'Dijo que vive en Madrid (sigue viviendo allí).',
            'Dijo que viviría en Madrid.',
            'Dijo que había estado en París.',
            'Dijo que iba a hacerlo.',
            'Ha dicho que vive en Lima.',
          ],
          explanation: 'После <em>dice/ha dicho</em> времена не меняются. После <em>dijo</em> делается сдвиг (presente → imperfecto, perfecto/indefinido → pluscuamperfecto, futuro → condicional, ir a → iba a). В разговорной речи можно сохранить презенс, если факт всё ещё актуален.',
        },
      ],
    },

    {
      id: '88.10',
      title: 'Аудио-диктант',
      type: 'fill',
      instructions: 'Запишите услышанное полностью с диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Dice que vive en Guadalajara.',                          correct: ['Dice que vive en Guadalajara.', 'Dice que vive en Guadalajara'] },
        { id: 'q2', prompt: '', audio: 'Dijo que vivía en Guadalajara.',                            correct: ['Dijo que vivía en Guadalajara.', 'Dijo que vivía en Guadalajara'] },
        { id: 'q3', prompt: '', audio: 'Dijo que no había podido hacerlo.',                            correct: ['Dijo que no había podido hacerlo.', 'Dijo que no había podido hacerlo'] },
        { id: 'q4', prompt: '', audio: 'Dijo que me llamaría esa noche.',                                correct: ['Dijo que me llamaría esa noche.', 'Dijo que me llamaría esa noche'] },
        { id: 'q5', prompt: '', audio: 'Felipe me ha prometido que iremos a Cuba.',                          correct: ['Felipe me ha prometido que iremos a Cuba.', 'Felipe me ha prometido que iremos a Cuba'] },
        { id: 'q6', prompt: '', audio: 'Dijo que iba a hacerlo otro día.',                                      correct: ['Dijo que iba a hacerlo otro día.', 'Dijo que iba a hacerlo otro día'] },
        { id: 'q7', prompt: '', audio: 'Dijo que sería más feliz con otro trabajo.',                                correct: ['Dijo que sería más feliz con otro trabajo.', 'Dijo que sería más feliz con otro trabajo'] },
      ],
    },

    {
      id: '88.11',
      title: 'Свободная передача (рассказ Леона про Германа)',
      type: 'fill',
      instructions: 'Леон встретил старого друга Германа неделю назад. Сегодня он рассказывает другу, что говорил Герман. Подставьте подходящую форму.',
      questions: [
        { id: 'q1', prompt: '«Vivo en Venezuela.» → Me dijo que (<em>vivir</em>) ___ en Venezuela.',                                                                  correct: 'vivía' },
        { id: 'q2', prompt: '«Me casé hace dos años y tengo un hijo.» → Añadió que se (<em>casar</em>) ___ hacía dos años y que (<em>tener</em>) ___ un hijo.',           correct: 'había casado' },
        { id: 'q3', prompt: 'Añadió que se había casado hacía dos años y que (<em>tener</em>) ___ un hijo.',                                                                correct: 'tenía' },
        { id: 'q4', prompt: '«Trabajo en una empresa petrolera.» → Dijo que (<em>trabajar</em>) ___ en una empresa petrolera.',                                                correct: 'trabajaba' },
        { id: 'q5', prompt: '«Estoy haciendo un curso de administración.» → Explicó que (<em>estar</em>) ___ haciendo un curso de administración.',                              correct: 'estaba' },
        { id: 'q6', prompt: '«Después del curso regresaré a Venezuela.» → Dijo que después del curso (<em>regresar</em>) ___ a Venezuela.',                                       correct: 'regresaría' },
        { id: 'q7', prompt: '«Antes de irme me gustaría reunirme con los viejos amigos.» → Comentó que antes de irse le (<em>gustar</em>) ___ reunirse con los viejos amigos.',     correct: 'gustaría' },
        { id: 'q8', prompt: '«Te llamaré la semana que viene sin falta.» → Me aseguró que me (<em>llamar</em>) ___ esta semana sin falta.',                                          correct: 'llamaría' },
      ],
    },

    {
      id: '88.12',
      title: 'Какое правило применилось?',
      type: 'choice',
      instructions: 'Какое правило объясняет передачу времени?',
      questions: [
        { id: 'q1', prompt: '<em>Dice que vive aquí.</em>',                              options: ['после dice — без сдвига', 'после dijo — со сдвигом'], correct: 'после dice — без сдвига' },
        { id: 'q2', prompt: '<em>Dijo que vivía aquí.</em>',                                options: ['после dice — без сдвига', 'после dijo — со сдвигом'], correct: 'после dijo — со сдвигом' },
        { id: 'q3', prompt: '<em>Dijo que había estado en París.</em>',                        options: ['perfecto/indefinido → pluscuamperfecto', 'futuro → condicional'], correct: 'perfecto/indefinido → pluscuamperfecto' },
        { id: 'q4', prompt: '<em>Dijo que me llamaría.</em>',                                     options: ['perfecto/indefinido → pluscuamperfecto', 'futuro → condicional'], correct: 'futuro → condicional' },
        { id: 'q5', prompt: '<em>Dijo que iba a hacerlo.</em>',                                      options: ['ir a → iba a', 'condicional → condicional'], correct: 'ir a → iba a' },
        { id: 'q6', prompt: '<em>Dijo que sería más feliz.</em>',                                      options: ['ir a → iba a', 'condicional → condicional'], correct: 'condicional → condicional' },
      ],
    },
  ],
};
