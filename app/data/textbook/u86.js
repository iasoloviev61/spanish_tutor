// ============================================================
// Unidad 86 — Expresión de emociones, sentimientos y valoraciones
// Me gusta que venga a casa / Es importante que llegues pronto.
// Конструкции с эмоциями (gustar, alegrarse de, estar harto de…)
// и оценочные обороты (es bueno/malo/lógico/una pena que…) +
// que + субхунтив или + инфинитив (общий смысл / тот же субъект).
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u86 = {
  id: 'u86',
  number: 86,
  title: { es: 'Me gusta que venga a casa', topic: 'Emociones, sentimientos y valoraciones' },
  topicRu: 'Эмоции, чувства и оценки: gustar / alegrarse / es importante que… + субхунтив',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Para expresar <strong>sentimientos y emociones</strong> (agrado, desagrado, alegría, sorpresa…) y para <strong>valorar</strong> acciones o situaciones se usan dos tipos de construcciones: con <em>+ infinitivo</em> y con <em>+ que + subjuntivo</em>.',
      ru: 'Чтобы выразить <strong>чувства и эмоции</strong> (нравится / не нравится, радость, удивление…) и чтобы <strong>оценивать</strong> действия и ситуации, используются две схемы: <em>+ инфинитив</em> и <em>+ que + субхунтив</em>.',
    },

    {
      type: 'heading',
      text: 'Эмоции и чувства: gustar, alegrarse de, estar harto de…',
    },
    {
      type: 'table',
      caption: 'Конструкции',
      columns: ['Оборот', 'Схема', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<em>gustar / encantar / molestar / preocupar / sorprender / fastidiar / extrañar / asombrar / alegrar (a uno)</em>', '+ infinitivo<br>+ que + subjuntivo', '<em>Me gusta llegar pronto. / Me gusta que llegues pronto.</em>'],
        ['<em>alegrarse de / tener miedo de / estar harto de</em>',                                                              '+ infinitivo<br>+ de que + subjuntivo', '<em>Me alegro de verte. / Me alegro de que vengas.</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'Se usa el <strong>infinitivo</strong> cuando los dos verbos se refieren a la <strong>misma persona</strong>.',
      ru: '<strong>Инфинитив</strong> ставим, когда оба глагола относятся к <strong>одному и тому же лицу</strong>.',
      examples: [
        { es: 'Me gusta (a mí) ser puntual.', ru: 'Мне нравится быть пунктуальным. (мне — мне быть)' },
        { es: 'Me molesta (a mí) llegar tarde.', ru: 'Мне неприятно опаздывать. (мне — мне опаздывать)' },
        { es: 'Estoy harto de trabajar tanto.', ru: 'Мне надоело так много работать.' },
      ],
    },
    {
      type: 'rule',
      es: 'Se usa <em>que + subjuntivo</em> cuando los dos verbos se refieren a <strong>personas distintas</strong>.',
      ru: '<em>que + субхунтив</em> — когда у глаголов <strong>разные подлежащие</strong>.',
      examples: [
        { es: 'Me gusta (a mí) que tú llegues pronto.', ru: 'Мне нравится, что ты приходишь рано.' },
        { es: 'Me alegro de que vengas a casa.', ru: 'Я рад, что ты приходишь к нам.' },
        { es: 'Estoy harto de que no me escuches.', ru: 'Мне надоело, что ты меня не слушаешь.' },
        { es: 'Me extraña que Marta no haya llamado.', ru: 'Странно, что Марта не позвонила.' },
      ],
    },

    {
      type: 'heading',
      text: 'Какое время субхунтива?',
    },
    {
      type: 'rule',
      es: 'Se usa el <strong>presente de subjuntivo</strong> cuando hablamos del <strong>presente o del futuro</strong>.',
      ru: '<strong>Презенс субхунтива</strong> — когда речь идёт о <strong>настоящем или будущем</strong>.',
      examples: [
        { es: 'Me alegro de que tengas un buen trabajo.', ru: 'Я рад, что у тебя хорошая работа.' },
        { es: 'Me extraña que Isa no venga al concierto.', ru: 'Мне странно, что Иса не идёт на концерт.' },
        { es: 'Es una pena que no puedas venir mañana.', ru: 'Жаль, что ты не сможешь прийти завтра.' },
      ],
    },
    {
      type: 'rule',
      es: 'Se usa el <strong>imperfecto de subjuntivo</strong> cuando hablamos del <strong>pasado</strong> o después de una <strong>forma condicional</strong>.',
      ru: '<strong>Имперфект субхунтива</strong> — когда речь идёт о <strong>прошлом</strong> или после формы <strong>кондисионала</strong> (<em>me gustaría, sería…</em>).',
      examples: [
        { es: 'Me extrañó que me llamaran tan tarde.', ru: 'Мне показалось странным, что мне так поздно позвонили.' },
        { es: 'Nos encantaría que Lidia estudiara Medicina.', ru: 'Нам бы очень хотелось, чтобы Лидия изучала медицину.' },
        { es: 'Sería una lástima que perdieras la beca.', ru: 'Было бы жаль, если бы ты потерял стипендию.' },
      ],
    },

    {
      type: 'heading',
      text: 'Оценочные обороты: es bueno / es importante / es una pena que…',
    },
    {
      type: 'table',
      caption: 'Схема',
      columns: ['Оборот', 'Схема', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<em>ser + bueno / malo / mejor / lógico / natural / normal / importante / interesante / maravilloso</em>', '+ que + subjuntivo<br>+ infinitivo (общий смысл)', '<em>Es importante que llegues pronto. / Es importante decir la verdad.</em>'],
        ['<em>parecer + bien / mal</em>',                                                                              '+ que + subjuntivo<br>+ infinitivo',                  '<em>Me parece bien que salgas. / Me parece bien salir hoy.</em>'],
        ['<em>ser / parecer + una vergüenza / una locura / una pena / una lástima</em>',                                '+ que + subjuntivo<br>+ infinitivo',                  '<em>Es una vergüenza que sean tan maleducados. / Me parece una locura levantarse a las cinco.</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'En estas construcciones se usa el <strong>presente de subjuntivo</strong> para presente / futuro y el <strong>imperfecto de subjuntivo</strong> para pasado o después de un condicional. Con sentido <strong>general</strong>, sin sujeto concreto, se usa el <strong>infinitivo</strong>.',
      ru: 'Здесь те же два правила выбора времени. Если речь идёт <strong>в общем смысле</strong>, без конкретного субъекта, ставим <strong>инфинитив</strong>.',
      examples: [
        { es: 'Es importante que lleguéis pronto.', ru: 'Важно, чтобы вы пришли пораньше.' },
        { es: 'Alba pensaba que era mejor que llamáramos a casa.', ru: 'Альба думала, что нам лучше было бы позвонить домой.' },
        { es: 'Es importante decir la verdad.', ru: 'Важно говорить правду. (вообще)' },
        { es: 'Me parece una locura levantarse a las cinco.', ru: 'Мне кажется безумием вставать в пять утра.' },
      ],
    },

    {
      type: 'atencion',
      es: 'Compara: <em>Me gusta llegar pronto</em> (мне — мне) vs. <em>Me gusta que llegues pronto</em> (мне — ты). Si el sujeto del segundo verbo cambia, no se puede usar el infinitivo: ✗ <em>Me gusta llegar tú pronto.</em>',
      ru: 'Запомни: если у второго глагола <strong>другое подлежащее</strong>, инфинитив невозможен — обязателен оборот <em>que + субхунтив</em>. Сравни: <em>Me gusta llegar pronto</em> (мне — самому приходить) vs. <em>Me gusta que llegues pronto</em> (мне — что ты приходишь).',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '86.1',
      title: 'Инфинитив или que + субхунтив?',
      type: 'fill',
      instructions: 'Поставьте глагол в скобках в нужной форме (<strong>инфинитив</strong> — если оба глагола про одно лицо; <strong>презенс субхунтива</strong> — если про разных).',
      questions: [
        { id: 'q1', prompt: 'Me gusta (<em>llegar</em>, yo) ___ pronto a casa.',                                  correct: 'llegar' },
        { id: 'q2', prompt: 'A mi madre le gusta que (<em>llegar</em>, yo) ___ pronto a casa.',                    correct: 'llegue' },
        { id: 'q3', prompt: 'Me molesta (<em>esperar</em>, yo) ___ en la cola.',                                    correct: 'esperar' },
        { id: 'q4', prompt: 'Me molesta que tú (<em>llegar</em>) ___ tarde otra vez.',                              correct: 'llegues' },
        { id: 'q5', prompt: 'Me alegro de (<em>verte</em>, yo) ___ aquí.',                                            correct: 'verte' },
        { id: 'q6', prompt: 'Me alegro de que tú (<em>estar</em>) ___ mejor.',                                         correct: 'estés' },
        { id: 'q7', prompt: 'Estoy harta de (<em>trabajar</em>, yo) ___ tanto.',                                        correct: 'trabajar' },
        { id: 'q8', prompt: 'Estoy harta de que no me (<em>escuchar</em>, vosotros) ___ .',                              correct: 'escuchéis' },
      ],
    },

    {
      id: '86.2',
      title: 'Презенс субхунтива (настоящее/будущее)',
      type: 'fill',
      instructions: 'Дополните глагол в форме <strong>презенса субхунтива</strong>.',
      questions: [
        { id: 'q1', prompt: 'Nos encanta que Rosa (<em>venir</em>) ___ a vernos los domingos.',           correct: 'venga' },
        { id: 'q2', prompt: 'Me extraña que Pablo no (<em>contestar</em>) ___ al teléfono.',                correct: 'conteste' },
        { id: 'q3', prompt: 'Es bueno que los niños (<em>jugar</em>) ___ al aire libre.',                    correct: 'jueguen' },
        { id: 'q4', prompt: 'Me parece bien que (<em>salir</em>, tú) ___ con tus amigos esta noche.',          correct: 'salgas' },
        { id: 'q5', prompt: 'Es una pena que María no (<em>poder</em>) ___ venir a la fiesta.',                  correct: 'pueda' },
        { id: 'q6', prompt: 'A mi padre le fastidia que (<em>haber</em>) ___ tanto ruido en la calle.',           correct: 'haya' },
        { id: 'q7', prompt: 'Me sorprende que Laura ya (<em>saber</em>) ___ italiano.',                            correct: 'sepa' },
        { id: 'q8', prompt: 'Es importante que (<em>estudiar</em>, vosotros) ___ todos los días.',                   correct: 'estudiéis' },
      ],
    },

    {
      id: '86.3',
      title: 'Имперфект субхунтива (прошлое или после кондисионала)',
      type: 'fill',
      instructions: 'Дополните глагол в форме <strong>имперфекта субхунтива</strong>.',
      questions: [
        { id: 'q1', prompt: 'Me extrañó que Teresa no (<em>venir</em>) ___ a la cena.',                            correct: ['viniera', 'viniese'] },
        { id: 'q2', prompt: 'Me sorprendió que Andrés (<em>llegar</em>) ___ tan temprano.',                          correct: ['llegara', 'llegase'] },
        { id: 'q3', prompt: 'Nos encantaría que (<em>vivir</em>, ustedes) ___ más cerca.',                              correct: ['vivieran', 'viviesen'] },
        { id: 'q4', prompt: 'A mi abuela le gustaba que la (<em>visitar</em>, nosotros) ___ los domingos.',               correct: ['visitáramos', 'visitásemos'] },
        { id: 'q5', prompt: 'Sería una lástima que (<em>perder</em>, tú) ___ esta oportunidad.',                            correct: ['perdieras', 'perdieses'] },
        { id: 'q6', prompt: 'Me alegré mucho de que Luis (<em>aprobar</em>) ___ el examen.',                                  correct: ['aprobara', 'aprobase'] },
        { id: 'q7', prompt: 'Era importante que la reunión (<em>empezar</em>) ___ a las nueve en punto.',                       correct: ['empezara', 'empezase'] },
      ],
    },

    {
      id: '86.4',
      title: 'Объедините две фразы',
      type: 'fill',
      instructions: 'Соедините через подходящую форму глагола в скобках. Выбирайте <strong>презенс субх.</strong> или <strong>имперфект субх.</strong>',
      questions: [
        { id: 'q1', prompt: 'Tomás baila tangos. Le encanta. → A Tomás le encanta (<em>bailar</em>) ___ tangos.',                          correct: 'bailar' },
        { id: 'q2', prompt: 'Mañana no voy al partido. Me fastidia. → Me fastidia no (<em>ir</em>) ___ al partido.',                        correct: 'ir' },
        { id: 'q3', prompt: 'Tus amigos te ayudan. Te encanta. → Te encanta que tus amigos te (<em>ayudar</em>) ___ .',                       correct: 'ayuden' },
        { id: 'q4', prompt: 'Carlos es profesor de informática. Me sorprende. → Me sorprende que Carlos (<em>ser</em>) ___ profesor de informática.', correct: 'sea' },
        { id: 'q5', prompt: 'Rubén no tiene amigos. Me preocupa. → Me preocupa que Rubén no (<em>tener</em>) ___ amigos.',                        correct: 'tenga' },
        { id: 'q6', prompt: 'Trabajo diez horas todos los días. Estoy harto. → Estoy harto de (<em>trabajar</em>) ___ diez horas todos los días.',  correct: 'trabajar' },
      ],
    },

    {
      id: '86.5',
      title: 'Дополните до оценки',
      type: 'fill',
      instructions: 'Соедините фразу с оценочным оборотом. Поставьте глагол в нужной форме субхунтива.',
      questions: [
        { id: 'q1', prompt: 'Lupe prefiere ir a México. Es lógico. → Es lógico que Lupe (<em>preferir</em>) ___ ir a México.',          correct: 'prefiera' },
        { id: 'q2', prompt: 'Sofía sabe cinco idiomas. Es maravilloso. → Es maravilloso que Sofía (<em>saber</em>) ___ cinco idiomas.', correct: 'sepa' },
        { id: 'q3', prompt: 'Mucha gente pasa hambre. Es un escándalo. → Es un escándalo que mucha gente (<em>pasar</em>) ___ hambre.',  correct: 'pase' },
        { id: 'q4', prompt: 'Asunción no quiere estudiar. Es una lástima. → Es una lástima que Asunción no (<em>querer</em>) ___ estudiar.', correct: 'quiera' },
        { id: 'q5', prompt: 'Hay que ser educado. Es bueno. → Es bueno (<em>ser</em>) ___ educado.',                                          correct: 'ser' },
        { id: 'q6', prompt: 'De pequeño no me gustaba madrugar. Es normal. → Es normal que de pequeño no te (<em>gustar</em>) ___ madrugar.', correct: 'gustara' },
      ],
    },

    {
      id: '86.6',
      title: 'Какая форма правильная?',
      type: 'choice',
      instructions: 'Выберите подходящий вариант.',
      questions: [
        { id: 'q1', prompt: 'Me gusta que Marta ___ a vernos.',                  options: ['venir', 'viene', 'venga', 'vendrá'],         correct: 'venga' },
        { id: 'q2', prompt: 'Me gusta ___ pronto a casa.',                         options: ['llegar', 'llego', 'llegue', 'llegaré'],       correct: 'llegar', explanation: 'Тот же субъект — инфинитив.' },
        { id: 'q3', prompt: 'Es importante ___ la verdad.',                          options: ['decir', 'digo', 'diga', 'dijera'],            correct: 'decir', explanation: 'Общий смысл — инфинитив.' },
        { id: 'q4', prompt: 'Es importante que (vosotros) ___ pronto.',               options: ['llegar', 'llegáis', 'lleguéis', 'llegasteis'], correct: 'lleguéis' },
        { id: 'q5', prompt: 'Me extrañó que Pedro no me ___ ayer.',                    options: ['llama', 'llamó', 'llame', 'llamara'],         correct: 'llamara', explanation: 'Прошлое — имперфект субхунтива.' },
        { id: 'q6', prompt: 'Sería una pena que tú ___ esta beca.',                     options: ['pierdes', 'pierdas', 'perdieras', 'perdiste'], correct: 'perdieras', explanation: 'После condicional — имперфект субхунтива.' },
        { id: 'q7', prompt: 'Me alegro de ___ aquí.',                                     options: ['estar', 'estoy', 'esté', 'estuviera'],        correct: 'estar', explanation: 'Тот же субъект — инфинитив.' },
        { id: 'q8', prompt: 'Estoy harto de que no me ___ .',                              options: ['escuchas', 'escuches', 'escuchas', 'escuchabas'], correct: 'escuches' },
      ],
    },

    {
      id: '86.7',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Me gusta que vengas a casa.', 'Me gusta que vienes a casa.', 'Me gusta venir a casa.'],                  correct: 'Me gusta que vienes a casa.', explanation: 'После <em>me gusta que</em> — субхунтив, не индикатив.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Es importante que estudiéis.', 'Es importante decir la verdad.', 'Es importante decimos la verdad.'],     correct: 'Es importante decimos la verdad.', explanation: 'В общем смысле — только инфинитив.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Me alegro de verte.', 'Me alegro de que vengas.', 'Me alegro de venir tú.'],                              correct: 'Me alegro de venir tú.', explanation: 'Если у второго глагола другое подлежащее — нужен оборот <em>de que + субхунтив</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Me extrañó que llamaran tan tarde.', 'Me extrañó que llamaron tan tarde.', 'Me extraña que llamen tan tarde.'], correct: 'Me extrañó que llamaron tan tarde.', explanation: 'После <em>me extrañó que</em> — имперфект субхунтива (прошлое).' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Sería una pena que perdieras la beca.', 'Sería una pena que pierdes la beca.', 'Es una pena perder la beca.'],   correct: 'Sería una pena que pierdes la beca.', explanation: 'После condicional <em>sería</em> — имперфект субхунтива.' },
      ],
    },

    {
      id: '86.8',
      title: 'Сопоставьте оборот и схему',
      type: 'match',
      instructions: 'Какая схема у каждой структуры?',
      pool: [
        '+ infinitivo (тот же субъект)',
        '+ que + subjuntivo (разные субъекты)',
        '+ infinitivo (общий смысл)',
      ],
      questions: [
        { id: 'q1', prompt: '<em>Me gusta llegar pronto.</em>',                       correct: '+ infinitivo (тот же субъект)' },
        { id: 'q2', prompt: '<em>Me gusta que llegues pronto.</em>',                    correct: '+ que + subjuntivo (разные субъекты)' },
        { id: 'q3', prompt: '<em>Es importante decir la verdad.</em>',                    correct: '+ infinitivo (общий смысл)' },
        { id: 'q4', prompt: '<em>Es importante que digas la verdad.</em>',                  correct: '+ que + subjuntivo (разные субъекты)' },
        { id: 'q5', prompt: '<em>Me alegro de verte.</em>',                                  correct: '+ infinitivo (тот же субъект)' },
        { id: 'q6', prompt: '<em>Estoy harto de que llegues tarde.</em>',                     correct: '+ que + subjuntivo (разные субъекты)' },
        { id: 'q7', prompt: '<em>Me parece una locura levantarse a las cinco.</em>',           correct: '+ infinitivo (общий смысл)' },
      ],
    },

    {
      id: '86.9',
      title: 'Какие фразы корректны',
      type: 'multi',
      instructions: 'Отметьте все <strong>правильные</strong> фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Me gusta que vengas a casa.',
            'Me gusta que vienes a casa.',
            'Me alegro de que estés aquí.',
            'Me alegro de que estás aquí.',
            'Estoy harta de trabajar tanto.',
            'Estoy harta de trabajo tanto.',
            'Es importante decir la verdad.',
            'Es importante que digamos la verdad.',
            'Es importante decimos la verdad.',
            'Me extrañó que llamaran tan tarde.',
            'Me extrañó que llamaron tan tarde.',
            'Sería una pena que perdieras la beca.',
            'Sería una pena que pierdes la beca.',
          ],
          correct: [
            'Me gusta que vengas a casa.',
            'Me alegro de que estés aquí.',
            'Estoy harta de trabajar tanto.',
            'Es importante decir la verdad.',
            'Es importante que digamos la verdad.',
            'Me extrañó que llamaran tan tarde.',
            'Sería una pena que perdieras la beca.',
          ],
          explanation: 'После <em>me gusta que / me alegro de que / es importante que / me extrañó que / sería una pena que</em> — только субхунтив. С тем же субъектом или в общем смысле — инфинитив.',
        },
      ],
    },

    {
      id: '86.10',
      title: 'Какое правило применилось?',
      type: 'choice',
      instructions: 'Какое правило объясняет данную фразу?',
      questions: [
        { id: 'q1', prompt: '<em>Me gusta llegar pronto.</em>',           options: ['тот же субъект — инфинитив', 'разные субъекты — субхунтив', 'общий смысл — инфинитив'], correct: 'тот же субъект — инфинитив' },
        { id: 'q2', prompt: '<em>Me gusta que llegues pronto.</em>',         options: ['тот же субъект — инфинитив', 'разные субъекты — субхунтив', 'общий смысл — инфинитив'], correct: 'разные субъекты — субхунтив' },
        { id: 'q3', prompt: '<em>Es importante decir la verdad.</em>',         options: ['тот же субъект — инфинитив', 'разные субъекты — субхунтив', 'общий смысл — инфинитив'], correct: 'общий смысл — инфинитив' },
        { id: 'q4', prompt: '<em>Me extrañó que llamaran tan tarde.</em>',       options: ['презенс субх. — настоящее/будущее', 'имперфект субх. — прошлое/после condicional'], correct: 'имперфект субх. — прошлое/после condicional' },
        { id: 'q5', prompt: '<em>Me alegro de que vengas mañana.</em>',             options: ['презенс субх. — настоящее/будущее', 'имперфект субх. — прошлое/после condicional'], correct: 'презенс субх. — настоящее/будущее' },
      ],
    },

    {
      id: '86.11',
      title: 'Аудио-диктант',
      type: 'fill',
      instructions: 'Запишите услышанное полностью с диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Me gusta que vengas a casa.',                       correct: ['Me gusta que vengas a casa.', 'Me gusta que vengas a casa'] },
        { id: 'q2', prompt: '', audio: 'Me alegro de que estés mejor.',                       correct: ['Me alegro de que estés mejor.', 'Me alegro de que estés mejor'] },
        { id: 'q3', prompt: '', audio: 'Es importante que lleguéis pronto.',                    correct: ['Es importante que lleguéis pronto.', 'Es importante que lleguéis pronto'] },
        { id: 'q4', prompt: '', audio: 'Me extrañó que no me llamaran ayer.',                     correct: ['Me extrañó que no me llamaran ayer.', 'Me extrañó que no me llamaran ayer'] },
        { id: 'q5', prompt: '', audio: 'Sería una pena que perdieras la beca.',                     correct: ['Sería una pena que perdieras la beca.', 'Sería una pena que perdieras la beca'] },
        { id: 'q6', prompt: '', audio: 'Estoy harta de trabajar tanto.',                              correct: ['Estoy harta de trabajar tanto.', 'Estoy harta de trabajar tanto'] },
        { id: 'q7', prompt: '', audio: 'Es importante decir la verdad.',                                correct: ['Es importante decir la verdad.', 'Es importante decir la verdad'] },
      ],
    },

    {
      id: '86.12',
      title: 'Свободный выбор формы',
      type: 'fill',
      instructions: 'Поставьте глагол в любой подходящей форме (инфинитив / презенс субх. / имперфект субх.) — смотрите на смысл и время.',
      questions: [
        { id: 'q1', prompt: 'Me molesta (<em>esperar</em>, yo) ___ tanto.',                                    correct: 'esperar' },
        { id: 'q2', prompt: 'Me molesta que tú me (<em>hacer</em>) ___ esperar tanto.',                          correct: 'hagas' },
        { id: 'q3', prompt: 'Es una vergüenza que (<em>haber</em>) ___ tantos coches sucios.',                    correct: 'haya' },
        { id: 'q4', prompt: 'Era una pena que no (<em>poder</em>, nosotros) ___ ir a la boda.',                    correct: ['pudiéramos', 'pudiésemos'] },
        { id: 'q5', prompt: 'A mi madre le encanta (<em>cocinar</em>) ___ los domingos.',                            correct: 'cocinar' },
        { id: 'q6', prompt: 'A mi madre le encanta que (<em>cocinar</em>, yo) ___ los domingos.',                      correct: 'cocine' },
        { id: 'q7', prompt: 'Sería bueno que ahora (<em>descansar</em>, tú) ___ un poco.',                              correct: ['descansaras', 'descansases'] },
      ],
    },
  ],
};
