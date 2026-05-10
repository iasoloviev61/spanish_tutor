// ============================================================
// Unidad 87 — Contraste entre indicativo y subjuntivo
// Creo que es… / No creo que sea…
// Глаголы мнения, выражения истинности, относительные
// придаточные с conocido/no conocido — выбор индикатива
// или субхунтива.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u87 = {
  id: 'u87',
  number: 87,
  title: { es: 'Creo que es… / No creo que sea…', topic: 'Contraste indicativo / subjuntivo' },
  topicRu: 'Контраст индикатив/субхунтив: глаголы мнения, истинности и относительные придаточные',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Con muchos verbos y expresiones la elección entre <strong>indicativo</strong> y <strong>subjuntivo</strong> depende de la <strong>polaridad</strong> de la frase (afirmativa o negativa) y del <strong>tipo de antecedente</strong> (conocido / no conocido) en las oraciones de relativo.',
      ru: 'У многих оборотов выбор <strong>индикатива</strong> или <strong>субхунтива</strong> зависит от того, <strong>утвердительная или отрицательная</strong> фраза, и от того, <strong>знаком ли антецедент</strong> (в относительных придаточных).',
    },

    {
      type: 'heading',
      text: 'Глаголы мнения и мышления: creer, pensar, opinar, parecer, estar seguro de, recordar',
    },
    {
      type: 'table',
      caption: 'Утверждение / вопрос vs. отрицание',
      columns: ['Тип фразы', 'Режим', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['Утвердительная или вопрос', 'indicativo', '<em>Creo que es médico. / ¿Crees que está enfermo?</em>'],
        ['Отрицательная',                 'subjuntivo', '<em>No creo que sea médico. / No pienso que esté enfermo.</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'Después de los verbos <em>creer, pensar, opinar, parecer, estar seguro de, recordar</em>… se usa el <strong>indicativo</strong> en frases <strong>afirmativas</strong> y en las <strong>preguntas</strong>; y el <strong>subjuntivo</strong> cuando van en <strong>negativo</strong> (porque dudamos o negamos).',
      ru: 'После глаголов мнения (<em>creer, pensar, opinar, parecer, estar seguro de, recordar</em>) в <strong>утвердительной</strong> фразе и в <strong>вопросе</strong> ставим <strong>индикатив</strong>. В <strong>отрицательной</strong> — <strong>субхунтив</strong> (потому что говорящий сомневается или отрицает).',
      examples: [
        { es: 'Doctor, ¿cree que estoy enfermo?', ru: 'Доктор, вы думаете, я болен?' },
        { es: 'Pues yo no creo que esté enfermo.', ru: 'А я не считаю, что он болен.' },
        { es: 'Recuerdo que el año pasado visitamos el desierto.', ru: 'Я помню, что в прошлом году мы посетили пустыню.' },
        { es: 'No recuerdo que el año pasado visitáramos el desierto.', ru: 'Я не помню, чтобы в прошлом году мы посещали пустыню.' },
        { es: 'No, no pienso que sea tan tarde.', ru: 'Нет, я не считаю, что уже так поздно.' },
      ],
    },

    {
      type: 'heading',
      text: 'Выражения истинности: es verdad / cierto / evidente / está claro que…',
    },
    {
      type: 'table',
      caption: 'Истина и ложь',
      columns: ['Тип фразы', 'Режим', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<em>es verdad / cierto / evidente / está claro que…</em> — утверждение/вопрос', 'indicativo', '<em>¿Es verdad que Ángel es actor? / Estaba claro que Julián mentía.</em>'],
        ['<em>no es verdad / no es cierto / no está claro que…</em> — отрицание',           'subjuntivo', '<em>No es verdad que sea actor. / No estaba claro que mintiera.</em>'],
        ['<em>es mentira / es falso que…</em> — утверждение, вопрос, отрицание',              'subjuntivo', '<em>Es mentira que Felipe no quiera ayudarnos.</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'Con <em>es verdad / cierto / evidente, está claro que</em>… se usa <strong>indicativo</strong> en afirmativas y preguntas, <strong>subjuntivo</strong> en negativas. Pero con <em>es mentira / es falso que</em>… (expresiones de falsedad) se usa <strong>subjuntivo siempre</strong>: en afirmativas, negativas y preguntas.',
      ru: 'С <em>es verdad / es cierto / es evidente / está claro que</em> — индикатив в утвердительных и вопросительных фразах, субхунтив в отрицательных. С <em>es mentira / es falso que</em> (выражения лжи) — <strong>всегда субхунтив</strong>, в любой полярности.',
      examples: [
        { es: '¿Es verdad que Ángel es actor?', ru: 'Правда, что Анхель актёр?' },
        { es: 'No es verdad que sea actor.', ru: 'Неправда, что он актёр.' },
        { es: 'Es evidente que Felipe no quiere ayudarnos.', ru: 'Очевидно, что Фелипе не хочет нам помогать.' },
        { es: 'Es mentira que Felipe no quiera ayudarnos.', ru: 'Неправда, что Фелипе не хочет нам помогать.' },
      ],
    },

    {
      type: 'heading',
      text: 'Относительные придаточные: знакомое и незнакомое',
    },
    {
      type: 'table',
      caption: 'Тип антецедента',
      columns: ['Антецедент', 'Режим', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['Известный / конкретный',                  'indicativo', '<em>Blanca es la persona que cuida a los niños.</em>'],
        ['Неизвестный / неопределённый',                'subjuntivo', '<em>Necesito una persona que cuide a los niños.</em>'],
        ['Отрицательный (никто / ничто такое)',           'subjuntivo', '<em>No conozco a nadie que toque el oboe.</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'En las oraciones de relativo se usa el <strong>indicativo</strong> cuando el antecedente es <strong>conocido o específico</strong> (sabemos de quién o de qué se habla) y el <strong>subjuntivo</strong> cuando el antecedente es <strong>desconocido</strong> o <strong>negativo</strong> («ищем кого-то такого», «никого такого нет»).',
      ru: 'В относительных придаточных <strong>индикатив</strong> используется, когда антецедент <strong>известен / конкретен</strong> («Бланка, которая…» — знаем, о ком речь). <strong>Субхунтив</strong> — когда антецедент <strong>неизвестен или не существует</strong> («ищу человека, который…», «нет никого, кто…»).',
      examples: [
        { es: 'Conozco a un chico que toca el oboe.', ru: 'Я знаю одного парня, который играет на гобое. (конкретный)' },
        { es: 'Busco un chico que toque el oboe.', ru: 'Ищу парня, который играл бы на гобое. (любого такого)' },
        { es: 'No conozco a nadie que toque el oboe.', ru: 'Я никого не знаю, кто играл бы на гобое.' },
        { es: 'Costa Rica es el único país de América que no tiene ejército.', ru: 'Коста-Рика — единственная страна Америки, у которой нет армии. (известный факт)' },
        { es: '¿Hay algún país que no tenga ejército?', ru: 'Есть ли страна, у которой нет армии? (ищем такую)' },
      ],
    },
    {
      type: 'rule',
      es: 'Cuando se habla del <strong>pasado</strong> (o después de un condicional), en las oraciones de relativo con antecedente desconocido o negativo se usa el <strong>imperfecto de subjuntivo</strong>.',
      ru: 'Если речь идёт о <strong>прошлом</strong> (или после кондисионала), в относительных придаточных с неизвестным/отрицательным антецедентом ставим <strong>имперфект субхунтива</strong>.',
      examples: [
        { es: 'Conocía un lugar que era perfecto para acampar.', ru: 'Я знал место, которое идеально подходило для кемпинга. (конкретное)' },
        { es: 'No conocía ningún lugar que fuera perfecto para acampar.', ru: 'Я не знал ни одного места, которое было бы идеальным для кемпинга.' },
        { es: 'Necesitaríamos un editor que supiera árabe.', ru: 'Нам нужен был бы редактор, который бы знал арабский.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Recuerda que delante de un complemento directo de <strong>persona conocida</strong> se pone la preposición <em>a</em>: <em>Conozco a un chico que…</em>. Pero delante de <em>nadie / alguien</em> también se mantiene la <em>a</em> aunque sea desconocido: <em>No conozco a nadie que…</em>',
      ru: 'Не забывай предлог <em>a</em> перед <strong>известным</strong> прямым дополнением-человеком (<em>Conozco a un chico…</em>). Перед <em>nadie/alguien</em> предлог <em>a</em> тоже сохраняется, даже если речь о неизвестном (<em>No conozco a nadie que…</em>).',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '87.1',
      title: 'Глаголы мнения: индикатив или субхунтив?',
      type: 'fill',
      instructions: 'Дополните глагол в скобках в подходящей форме (<strong>индикатив</strong> в утверждениях/вопросах, <strong>субхунтив</strong> после отрицания).',
      questions: [
        { id: 'q1', prompt: 'Yo creo que Federico (<em>tener</em>) ___ novia. — Pues yo no creo que la (<em>tener</em>) ___ .',                  correct: 'tiene' },
        { id: 'q2', prompt: '— Yo creo que Federico tiene novia. — Pues yo no creo que la (<em>tener</em>) ___ .',                                correct: 'tenga' },
        { id: 'q3', prompt: '— Yo creo que Graciela (<em>ser</em>) ___ peruana.',                                                                   correct: 'es' },
        { id: 'q4', prompt: '— Yo creo que Graciela es peruana. — Pues yo no creo que lo (<em>ser</em>) ___ .',                                       correct: 'sea' },
        { id: 'q5', prompt: '— ¿Crees que Alejandra (<em>poder</em>) ___ hacer este trabajo? — No, no creo que (<em>poder</em>) ___ hacerlo.',         correct: 'pueda' },
        { id: 'q6', prompt: '— ¿Crees que Alejandra puede hacer este trabajo? — No, no creo que (<em>poder</em>) ___ hacerlo.',                          correct: 'pueda' },
        { id: 'q7', prompt: '— Pienso que Susana es muy cariñosa. — Pues yo no pienso que (<em>ser</em>) ___ muy cariñosa.',                              correct: 'sea' },
        { id: 'q8', prompt: '— ¿Ustedes no creen que aquí (<em>hacer</em>) ___ mucho calor? — No, no creemos que (<em>hacer</em>) ___ mucho calor.',         correct: 'haga' },
      ],
    },

    {
      id: '87.2',
      title: 'Истина и ложь',
      type: 'fill',
      instructions: 'Дополните глагол в скобках в подходящей форме (после <em>es verdad / claro que</em> — индикатив; после отрицания и после <em>es mentira / es falso que</em> — субхунтив).',
      questions: [
        { id: 'q1', prompt: 'Dicen que Alfonso es agresivo, pero no es verdad que lo (<em>ser</em>) ___ .',                       correct: 'sea' },
        { id: 'q2', prompt: 'Dicen que no hace frío, pero está claro que lo (<em>hacer</em>) ___ .',                                correct: 'hace' },
        { id: 'q3', prompt: 'Dicen que hay mucha gente, pero no es evidente que (<em>haber</em>) ___ mucha.',                        correct: 'haya' },
        { id: 'q4', prompt: 'Dijeron que Tomás fue el culpable, pero no estaba claro que lo (<em>ser</em>) ___ .',                    correct: ['fuera', 'fuese'] },
        { id: 'q5', prompt: 'Dices que Concha tiene mal genio, pero no es cierto que lo (<em>tener</em>) ___ .',                       correct: 'tenga' },
        { id: 'q6', prompt: 'Es verdad que Paco (<em>regresar</em>) ___ la semana que viene.',                                          correct: 'regresa' },
        { id: 'q7', prompt: 'No era verdad que Julio (<em>estudiar</em>) ___ Matemáticas. Estudiaba Física.',                            correct: ['estudiara', 'estudiase'] },
        { id: 'q8', prompt: 'Es falso que Emilio (<em>tener</em>) ___ veinticinco años. Tiene treinta.',                                   correct: 'tenga' },
      ],
    },

    {
      id: '87.3',
      title: 'Относительные придаточные',
      type: 'fill',
      instructions: 'Дополните глагол в скобках в форме <strong>индикатива</strong> или <strong>субхунтива</strong> в зависимости от антецедента.',
      questions: [
        { id: 'q1', prompt: 'No conozco a nadie que (<em>bailar</em>) ___ bien.',                                                      correct: 'baile' },
        { id: 'q2', prompt: 'Estamos buscando un traductor que (<em>enseñar</em>) ___ a programar.',                                     correct: 'enseñe' },
        { id: 'q3', prompt: 'Me han regalado un libro que (<em>enseñar</em>) ___ bien español.',                                          correct: 'enseña' },
        { id: 'q4', prompt: 'Me gustaría vivir en una ciudad donde (<em>haber</em>) ___ muchas bibliotecas.',                              correct: 'haya' },
        { id: 'q5', prompt: '¿Conoces a algún profesor de español que (<em>saber</em>) ___ ruso?',                                          correct: 'sepa' },
        { id: 'q6', prompt: 'Quiero un libro que (<em>tener</em>) ___ información sobre Cuba.',                                              correct: 'tenga' },
        { id: 'q7', prompt: 'Estoy buscando el libro que (<em>tener</em>) ___ fotos de la selva peruana. ¿Lo habéis visto?',                   correct: 'tiene' },
        { id: 'q8', prompt: 'En mi empresa necesitan una secretaria que (<em>hablar</em>) ___ portugués.',                                       correct: 'hable' },
        { id: 'q9', prompt: 'No conozco a nadie que (<em>ser</em>) ___ tan bueno como Lorenzo.',                                                  correct: 'sea' },
        { id: 'q10', prompt: 'Necesito unos cuantos amigos que me (<em>ayudar</em>) ___ a hacer la mudanza al nuevo piso.',                         correct: 'ayuden' },
      ],
    },

    {
      id: '87.4',
      title: 'Прошлое: индикатив или имперфект субхунтива?',
      type: 'fill',
      instructions: 'Дополните глагол в скобках. Антецедент конкретный — индикатив; неизвестный/отрицательный — имперфект субхунтива.',
      questions: [
        { id: 'q1', prompt: 'Conocía un lugar que (<em>ser</em>) ___ perfecto para acampar.',                                  correct: 'era' },
        { id: 'q2', prompt: 'No conocía ningún lugar que (<em>ser</em>) ___ perfecto para acampar.',                              correct: ['fuera', 'fuese'] },
        { id: 'q3', prompt: 'Necesitaríamos un editor que (<em>saber</em>) ___ árabe.',                                            correct: ['supiera', 'supiese'] },
        { id: 'q4', prompt: 'Tenemos un nuevo editor que (<em>saber</em>) ___ árabe.',                                                correct: 'sabe' },
        { id: 'q5', prompt: 'Buscaba a alguien que me (<em>ayudar</em>) ___ con la mudanza.',                                          correct: ['ayudara', 'ayudase'] },
        { id: 'q6', prompt: 'No recuerdo que el año pasado (<em>visitar</em>, nosotros) ___ el desierto.',                              correct: ['visitáramos', 'visitásemos'] },
      ],
    },

    {
      id: '87.5',
      title: 'Какая форма правильная?',
      type: 'choice',
      instructions: 'Выберите подходящий вариант.',
      questions: [
        { id: 'q1', prompt: 'Creo que Pedro ___ médico.',                                  options: ['es', 'sea', 'fuera'],                       correct: 'es' },
        { id: 'q2', prompt: 'No creo que Pedro ___ médico.',                                 options: ['es', 'sea', 'sería'],                        correct: 'sea' },
        { id: 'q3', prompt: '¿Crees que ___ a llover?',                                       options: ['va', 'vaya', 'fuera'],                        correct: 'va' },
        { id: 'q4', prompt: 'Es verdad que ___ peruano.',                                      options: ['es', 'sea'],                                  correct: 'es' },
        { id: 'q5', prompt: 'No es verdad que ___ peruano.',                                    options: ['es', 'sea'],                                  correct: 'sea' },
        { id: 'q6', prompt: 'Es mentira que Felipe no ___ ayudarnos.',                            options: ['quiere', 'quiera'],                          correct: 'quiera', explanation: 'После <em>es mentira que</em> — всегда субхунтив.' },
        { id: 'q7', prompt: 'Conozco a una chica que ___ cinco idiomas.',                            options: ['habla', 'hable'],                            correct: 'habla', explanation: 'Конкретный антецедент.' },
        { id: 'q8', prompt: 'Busco a alguien que ___ cinco idiomas.',                                 options: ['habla', 'hable'],                            correct: 'hable', explanation: 'Неизвестный антецедент.' },
        { id: 'q9', prompt: 'No conozco a nadie que ___ tocar el violín.',                              options: ['sabe', 'sepa'],                              correct: 'sepa' },
        { id: 'q10', prompt: 'No recuerdo que el año pasado ___ tantos turistas.',                          options: ['hubo', 'hubiera'],                            correct: 'hubiera' },
      ],
    },

    {
      id: '87.6',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Creo que está enfermo.', 'Creo que esté enfermo.', 'No creo que esté enfermo.'],            correct: 'Creo que esté enfermo.', explanation: 'После <em>creo que</em> в утверждении — индикатив.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['No pienso que sea tarde.', 'No pienso que es tarde.', 'Pienso que es tarde.'],                  correct: 'No pienso que es tarde.', explanation: 'После <em>no pienso que</em> — субхунтив.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Es verdad que es actor.', 'Es verdad que sea actor.', 'No es verdad que sea actor.'],            correct: 'Es verdad que sea actor.', explanation: 'После утвердительного <em>es verdad que</em> — индикатив.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Es mentira que sea actor.', 'Es mentira que es actor.', 'No es mentira que sea actor.'],            correct: 'Es mentira que es actor.', explanation: 'После <em>es mentira que</em> — всегда субхунтив.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Busco un piso que tiene tres habitaciones.', 'Busco un piso que tenga tres habitaciones.', 'Tengo un piso que tiene tres habitaciones.'], correct: 'Busco un piso que tiene tres habitaciones.', explanation: 'Неизвестный антецедент → субхунтив.' },
        { id: 'q6', prompt: 'Где ошибка?', options: ['No conozco a nadie que toque el oboe.', 'No conozco a nadie que toca el oboe.', 'Conozco a un chico que toca el oboe.'], correct: 'No conozco a nadie que toca el oboe.', explanation: 'Отрицательный антецедент → субхунтив.' },
      ],
    },

    {
      id: '87.7',
      title: 'Сопоставьте оборот и режим',
      type: 'match',
      instructions: 'Какой режим (индикатив или субхунтив) требует каждая структура?',
      pool: [
        'indicativo',
        'subjuntivo',
        'indicativo / subjuntivo (зависит от полярности)',
      ],
      questions: [
        { id: 'q1', prompt: '<em>creo que…</em> (утвердительно)',           correct: 'indicativo' },
        { id: 'q2', prompt: '<em>no creo que…</em>',                          correct: 'subjuntivo' },
        { id: 'q3', prompt: '<em>es verdad que… / no es verdad que…</em>',     correct: 'indicativo / subjuntivo (зависит от полярности)' },
        { id: 'q4', prompt: '<em>es mentira que…</em> (любая полярность)',      correct: 'subjuntivo' },
        { id: 'q5', prompt: '<em>conozco a un chico que…</em> (известный)',      correct: 'indicativo' },
        { id: 'q6', prompt: '<em>busco a alguien que…</em> (неизвестный)',         correct: 'subjuntivo' },
        { id: 'q7', prompt: '<em>no conozco a nadie que…</em>',                      correct: 'subjuntivo' },
      ],
    },

    {
      id: '87.8',
      title: 'Какие фразы корректны',
      type: 'multi',
      instructions: 'Отметьте все <strong>правильные</strong> фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Creo que es médico.',
            'Creo que sea médico.',
            'No creo que sea médico.',
            'No creo que es médico.',
            'Es verdad que es peruano.',
            'Es verdad que sea peruano.',
            'No es verdad que sea peruano.',
            'Es mentira que sea actor.',
            'Es mentira que es actor.',
            'Conozco a un chico que toca el oboe.',
            'Conozco a un chico que toque el oboe.',
            'Busco a alguien que toque el oboe.',
            'Busco a alguien que toca el oboe.',
            'No conozco a nadie que toque el oboe.',
            'No conozco a nadie que toca el oboe.',
          ],
          correct: [
            'Creo que es médico.',
            'No creo que sea médico.',
            'Es verdad que es peruano.',
            'No es verdad que sea peruano.',
            'Es mentira que sea actor.',
            'Conozco a un chico que toca el oboe.',
            'Busco a alguien que toque el oboe.',
            'No conozco a nadie que toque el oboe.',
          ],
          explanation: 'Утверждение/вопрос с глаголами мнения и истинности — индикатив. Отрицание — субхунтив. <em>es mentira que</em> — всегда субхунтив. В относительных: известный антецедент — индикатив, неизвестный/отрицательный — субхунтив.',
        },
      ],
    },

    {
      id: '87.9',
      title: 'Аудио-диктант',
      type: 'fill',
      instructions: 'Запишите услышанное полностью с диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Creo que está enfermo.',                              correct: ['Creo que está enfermo.', 'Creo que está enfermo'] },
        { id: 'q2', prompt: '', audio: 'No creo que esté enfermo.',                             correct: ['No creo que esté enfermo.', 'No creo que esté enfermo'] },
        { id: 'q3', prompt: '', audio: 'No es verdad que sea actor.',                              correct: ['No es verdad que sea actor.', 'No es verdad que sea actor'] },
        { id: 'q4', prompt: '', audio: 'Es mentira que Felipe no quiera ayudarnos.',                  correct: ['Es mentira que Felipe no quiera ayudarnos.', 'Es mentira que Felipe no quiera ayudarnos'] },
        { id: 'q5', prompt: '', audio: 'Necesito una persona que cuide a los niños.',                   correct: ['Necesito una persona que cuide a los niños.', 'Necesito una persona que cuide a los niños'] },
        { id: 'q6', prompt: '', audio: 'No conozco a nadie que toque el oboe.',                            correct: ['No conozco a nadie que toque el oboe.', 'No conozco a nadie que toque el oboe'] },
        { id: 'q7', prompt: '', audio: 'Conozco a un chico que toca el oboe.',                                correct: ['Conozco a un chico que toca el oboe.', 'Conozco a un chico que toca el oboe'] },
      ],
    },

    {
      id: '87.10',
      title: 'Какое правило применилось?',
      type: 'choice',
      instructions: 'Какое правило объясняет данную фразу?',
      questions: [
        { id: 'q1', prompt: '<em>Creo que es médico.</em>',                              options: ['утверждение мнения — индикатив', 'отрицание мнения — субхунтив', 'неизвестный антецедент'], correct: 'утверждение мнения — индикатив' },
        { id: 'q2', prompt: '<em>No creo que sea médico.</em>',                             options: ['утверждение мнения — индикатив', 'отрицание мнения — субхунтив', 'неизвестный антецедент'], correct: 'отрицание мнения — субхунтив' },
        { id: 'q3', prompt: '<em>Busco un piso que tenga tres habitaciones.</em>',          options: ['конкретный антецедент', 'неизвестный антецедент', 'отрицательный антецедент'], correct: 'неизвестный антецедент' },
        { id: 'q4', prompt: '<em>No conozco a nadie que toque el oboe.</em>',                  options: ['конкретный антецедент', 'неизвестный антецедент', 'отрицательный антецедент'], correct: 'отрицательный антецедент' },
        { id: 'q5', prompt: '<em>Es mentira que sea actor.</em>',                                options: ['истинность утверждения — индикатив', 'выражение лжи — всегда субхунтив'], correct: 'выражение лжи — всегда субхунтив' },
      ],
    },

    {
      id: '87.11',
      title: 'Перефразируйте через отрицание',
      type: 'fill',
      instructions: 'Поставьте только нужную форму глагола (после отрицания нужен субхунтив).',
      questions: [
        { id: 'q1', prompt: 'Creo que está cansado. → No creo que (<em>estar</em>) ___ cansado.',                                                  correct: 'esté' },
        { id: 'q2', prompt: 'Pienso que tiene razón. → No pienso que (<em>tener</em>) ___ razón.',                                                    correct: 'tenga' },
        { id: 'q3', prompt: 'Es verdad que viven aquí. → No es verdad que (<em>vivir</em>) ___ aquí.',                                                  correct: 'vivan' },
        { id: 'q4', prompt: 'Está claro que sabe la respuesta. → No está claro que (<em>saber</em>) ___ la respuesta.',                                  correct: 'sepa' },
        { id: 'q5', prompt: 'Recuerdo que vinimos juntos. → No recuerdo que (<em>venir</em>, nosotros) ___ juntos.',                                       correct: ['viniéramos', 'viniésemos'] },
      ],
    },

    {
      id: '87.12',
      title: 'Кратко: какой режим?',
      type: 'choice',
      instructions: 'Выберите режим (индикатив или субхунтив).',
      questions: [
        { id: 'q1', prompt: 'Conozco a una chica que ___ cinco idiomas.',                  options: ['habla', 'hable'], correct: 'habla' },
        { id: 'q2', prompt: 'Necesito a alguien que ___ cinco idiomas.',                      options: ['habla', 'hable'], correct: 'hable' },
        { id: 'q3', prompt: 'Estoy seguro de que Marta ___ contigo.',                          options: ['está', 'esté'], correct: 'está' },
        { id: 'q4', prompt: 'No estoy seguro de que Marta ___ contigo.',                          options: ['está', 'esté'], correct: 'esté' },
        { id: 'q5', prompt: 'Es evidente que (él) ___ razón.',                                       options: ['tiene', 'tenga'], correct: 'tiene' },
        { id: 'q6', prompt: 'No es evidente que (él) ___ razón.',                                     options: ['tiene', 'tenga'], correct: 'tenga' },
      ],
    },
  ],
};
