// ============================================================
// Unidad 80 — Presente de subjuntivo: verbos irregulares (1)
// quiera, juegue… Глаголы с чередованием в корне (e→ie, e→i,
// o→ue, u→ue) и группа sentir / pedir / dormir.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u80 = {
  id: 'u80',
  number: 80,
  title: { es: 'quiera, juegue…', topic: 'Presente de subjuntivo: verbos irregulares (1)' },
  topicRu: 'Презенс субхунтива: глаголы с чередованием в корне',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Los verbos con <strong>cambio vocálico en la raíz</strong> mantienen ese cambio en el subjuntivo: <em>querer → quiera</em>, <em>jugar → juegue</em>, <em>poder → pueda</em>. La regla general es la misma del indicativo: <strong>diptonga la sílaba tónica</strong>; cuando el acento se va a la terminación (<em>nosotros, vosotros</em>), <strong>la raíz vuelve a la forma simple</strong>.',
      ru: 'Глаголы с <strong>чередованием в корне</strong> сохраняют то же чередование в субхунтиве: <em>querer → quiera</em>, <em>jugar → juegue</em>, <em>poder → pueda</em>. Действует то же правило, что и в индикативе: <strong>дифтонг возникает там, где ударение падает на корень</strong>. В формах <em>nosotros / vosotros</em> ударение уезжает на окончание, поэтому корень становится «простым» (<em>queramos, podáis, juguemos</em>).',
      examples: [
        { es: 'Espero que quieras venir a mi fiesta.', ru: 'Надеюсь, ты захочешь прийти на мой праздник.' },
        { es: 'No me gusta que mientan los niños.', ru: 'Мне не нравится, когда дети врут.' },
        { es: 'Quizás te sientas mejor después de comer.', ru: 'Возможно, тебе станет лучше после еды.' },
      ],
    },

    {
      type: 'heading',
      text: 'Чередования: пять моделей',
    },
    {
      type: 'table',
      caption: 'querer / sentir / pedir / poder / jugar',
      columns: ['', 'querer (e→ie/e)', 'sentir (e→ie/i)', 'pedir (e→i)', 'poder (o→ue/o)', 'jugar (u→ue/u)'],
      colClasses: ['col-pattern', 'col-result', 'col-result', 'col-result', 'col-result', 'col-result'],
      rows: [
        ['<strong>yo</strong>',          '<em>quier−a</em>',     '<em>sient−a</em>',     '<em>pid−a</em>',     '<em>pued−a</em>',     '<em>juegu−e</em>'],
        ['<strong>tú</strong>',          '<em>quier−as</em>',    '<em>sient−as</em>',    '<em>pid−as</em>',    '<em>pued−as</em>',    '<em>juegu−es</em>'],
        ['<strong>usted, él</strong>',    '<em>quier−a</em>',     '<em>sient−a</em>',     '<em>pid−a</em>',     '<em>pued−a</em>',     '<em>juegu−e</em>'],
        ['<strong>nosotros</strong>',    '<em>quer−amos</em>',   '<em>sint−amos</em>',   '<em>pid−amos</em>',  '<em>pod−amos</em>',   '<em>jugu−emos</em>'],
        ['<strong>vosotros</strong>',    '<em>quer−áis</em>',    '<em>sint−áis</em>',    '<em>pid−áis</em>',   '<em>pod−áis</em>',    '<em>jugu−éis</em>'],
        ['<strong>ustedes, ellos</strong>', '<em>quier−an</em>',  '<em>sient−an</em>',    '<em>pid−an</em>',    '<em>pued−an</em>',    '<em>juegu−en</em>'],
      ],
    },
    {
      type: 'rule',
      es: '<em>jugar</em>, además de <em>u→ue</em>, requiere <strong>−gu−</strong> ortográfico ante <em>e</em> para mantener el sonido [g]: <em>juegu−e</em>. Igualmente <em>llegar → llegue</em>, <em>pagar → pague</em>.',
      ru: 'У <em>jugar</em> к чередованию <em>u→ue</em> добавляется орфографическое <strong>−gu−</strong> перед <em>e</em> (чтобы сохранился звук [g]): <em>juegue</em>. То же самое у любых глаголов на <em>−gar</em>: <em>llegar → llegue</em>, <em>pagar → pague</em>.',
    },

    {
      type: 'heading',
      text: 'Группы по моделям (что куда относится)',
    },
    {
      type: 'table',
      caption: 'Какие глаголы спрягаются «как…»',
      columns: ['Модель', 'Глаголы'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['<strong>querer</strong> (e→ie/e), <em>−ar</em>',         '<em>calentar, cerrar, empezar, fregar, gobernar, pensar, regar</em>'],
        ['<strong>querer</strong> (e→ie/e), <em>−er</em>',          '<em>defender, entender, perder</em>'],
        ['<strong>sentir</strong> (e→ie/i)',                          '<em>divertir, herir, preferir, mentir</em>'],
        ['<strong>pedir</strong> (e→i)',                              '<em>conseguir, corregir, elegir, freír, impedir, medir, reír, seguir, servir, sonreír</em>'],
        ['<strong>poder</strong> (o→ue/o), <em>−ar</em>',            '<em>contar, costar, encontrar, recordar, sonar, soñar, volar</em>'],
        ['<strong>poder</strong> (o→ue/o), <em>−er</em>',             '<em>llover, morder, mover, soler, volver</em>'],
      ],
    },

    {
      type: 'atencion',
      es: 'Dos verbos especiales: <em>oler → <strong>huela</strong>, huelas, huela, <strong>olamos</strong>, oláis, huelan</em> (aparece <strong>h−</strong> ortográfica); <em>dormir → <strong>duerma</strong>, duermas, duerma, <strong>durmamos</strong>, durmáis, duerman</em> (en <em>nosotros / vosotros</em>: <strong>o→u</strong>).',
      ru: 'Два особых глагола: <em>oler</em> «пахнуть» — формы с дифтонгом получают орфографическое <strong>h−</strong>: <em>huela, huelas… olamos, oláis, huelan</em>. <em>dormir</em> в <em>nosotros / vosotros</em> делает <strong>o→u</strong>: <em>duerma, duermas, duerma, <strong>durmamos</strong>, <strong>durmáis</strong>, duerman</em>. Так же ведёт себя <em>morir</em> (<em>muera… muramos</em>).',
    },

    {
      type: 'heading',
      text: 'Где встречаешь субхунтив',
    },
    {
      type: 'rule',
      es: 'Las construcciones de uso son las mismas que con regulares: <strong>deseo</strong> (<em>quiero / espero / ojalá que…</em>), <strong>probabilidad</strong> (<em>puede que, es probable que, quizás</em>), <strong>sentimiento / valoración</strong> (<em>me gusta que, es lógico que, me parece bien que…</em>).',
      ru: 'Контексты те же, что и для правильных глаголов: <strong>желание</strong> (<em>quiero / espero / ojalá que…</em>), <strong>вероятность</strong> (<em>puede que, es probable que, quizás</em>), <strong>чувство / оценка</strong> (<em>me gusta que, es lógico que, me parece bien que…</em>).',
      examples: [
        { es: 'Espero que podáis venir a mi fiesta.', ru: 'Надеюсь, что вы сможете прийти на мой праздник.' },
        { es: 'Es lógico que prefieras comer ahora.', ru: 'Логично, что ты предпочитаешь поесть сейчас.' },
        { es: 'Me parece bien que César quiera estudiar Bellas Artes.', ru: 'Мне кажется правильным, что Сесар хочет изучать изящные искусства.' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '80.1',
      title: 'tú: ie / i / ue',
      type: 'fill',
      instructions: 'Поставьте глагол в форме <em>tú</em> субхунтива. Помните: дифтонг там, где ударение в корне.',
      questions: [
        { id: 'q1', prompt: '(<em>volver</em>) Espero que no ___ a perder las llaves.',     correct: 'vuelvas' },
        { id: 'q2', prompt: '(<em>mentir</em>) No me gusta que ___, Nadia.',                 correct: 'mientas' },
        { id: 'q3', prompt: '(<em>perder</em>) Espero que no ___ el tren.',                   correct: 'pierdas' },
        { id: 'q4', prompt: '(<em>jugar</em>) Quizás ___ el domingo con tus amigos.',          correct: 'juegues' },
        { id: 'q5', prompt: '(<em>preferir</em>) Es lógico que ___ comer ahora.',               correct: 'prefieras' },
        { id: 'q6', prompt: '(<em>contar</em>) Espero que me lo ___ todo.',                       correct: 'cuentes' },
        { id: 'q7', prompt: '(<em>recordar</em>) Espero que me ___ siempre.',                     correct: 'recuerdes' },
        { id: 'q8', prompt: '(<em>seguir</em>) Es importante que ___ las instrucciones.',          correct: 'sigas' },
      ],
    },

    {
      id: '80.2',
      title: 'usted / él / ella',
      type: 'fill',
      instructions: 'Поставьте в форме 3 л. ед. ч.',
      questions: [
        { id: 'q1', prompt: '(<em>perder</em>) Espero que Arturo no ___ esta partida.',           correct: 'pierda' },
        { id: 'q2', prompt: '(<em>poder</em>) Es probable que (él) ___ ayudarte.',                correct: 'pueda' },
        { id: 'q3', prompt: '(<em>entender</em>) Espero que usted ___ las instrucciones.',         correct: 'entienda' },
        { id: 'q4', prompt: '(<em>servir</em>) Tome este libro. Puede que le ___ para su viaje.',    correct: 'sirva' },
        { id: 'q5', prompt: '(<em>llover</em>) Me gusta que ___ en verano.',                          correct: 'llueva' },
        { id: 'q6', prompt: '(<em>oler</em>) Me encanta que mi casa ___ a flores.',                    correct: 'huela', explanation: 'Особый случай: <em>oler → huela</em> (с орфографическим <em>h−</em>).' },
        { id: 'q7', prompt: '(<em>volver</em>) Es probable que ___ tarde a casa.',                     correct: 'vuelva' },
      ],
    },

    {
      id: '80.3',
      title: 'nosotros / vosotros: «когда дифтонг исчезает»',
      type: 'fill',
      instructions: 'Помните: в формах <em>nosotros / vosotros</em> ударение уезжает на окончание, дифтонг исчезает (а у <em>sentir, pedir, dormir</em> работает другое чередование).',
      questions: [
        { id: 'q1', prompt: '(<em>poder</em>, nosotros) Es probable que ___ venir.',          correct: 'podamos' },
        { id: 'q2', prompt: '(<em>volver</em>, nosotros) Es probable que ___ el lunes.',        correct: 'volvamos' },
        { id: 'q3', prompt: '(<em>querer</em>, vosotros) No quiero que (vosotros) ___ irse.',    correct: 'queráis' },
        { id: 'q4', prompt: '(<em>sentir</em>, nosotros) Quizás nos ___ mejor mañana.',           correct: 'sintamos', explanation: 'У <em>sentir</em>: <em>e→i</em> в <em>nosotros / vosotros</em>.' },
        { id: 'q5', prompt: '(<em>dormir</em>, nosotros) No me gusta que ___ tan tarde.',          correct: 'durmamos', explanation: '<em>dormir</em>: <em>o→u</em> в этих формах.' },
        { id: 'q6', prompt: '(<em>pedir</em>, nosotros) Me gusta que (nosotros) ___ ayuda.',        correct: 'pidamos' },
        { id: 'q7', prompt: '(<em>jugar</em>, nosotros) Quizás ___ esta tarde.',                     correct: 'juguemos', explanation: '<em>jugar</em>: <em>u→u</em> + орфо <em>−gu−</em> → <em>juguemos</em>.' },
      ],
    },

    {
      id: '80.4',
      title: 'Все лица одного глагола',
      type: 'fill',
      instructions: 'Поставьте глагол в указанном лице.',
      questions: [
        { id: 'q1', prompt: '(<em>querer</em>, ellos) Me gusta que ___ visitarnos.',                  correct: 'quieran' },
        { id: 'q2', prompt: '(<em>poder</em>, vosotros) Espero que ___ venir.',                        correct: 'podáis' },
        { id: 'q3', prompt: '(<em>jugar</em>, ustedes) Quizás ___ el domingo.',                         correct: 'jueguen' },
        { id: 'q4', prompt: '(<em>preferir</em>, ellos) Es lógico que ___ este restaurante.',            correct: 'prefieran' },
        { id: 'q5', prompt: '(<em>conseguir</em>, ella) Espero que ___ entradas para el concierto.',      correct: 'consiga' },
        { id: 'q6', prompt: '(<em>volver</em>, ustedes) Es probable que ___ el lunes.',                   correct: 'vuelvan' },
        { id: 'q7', prompt: '(<em>divertirse</em>, ellos) ¡Ojalá ___ en las vacaciones!',                  correct: 'se diviertan' },
      ],
    },

    {
      id: '80.5',
      title: 'Какая форма?',
      type: 'choice',
      instructions: 'Выберите правильный вариант.',
      questions: [
        { id: 'q1', prompt: 'Espero que no ___ las llaves.',           options: ['vuelvas', 'volves', 'volveas', 'vueles'], correct: 'vuelvas' },
        { id: 'q2', prompt: 'Es probable que ellos ___ tarde.',         options: ['vuelven', 'vuelvan', 'vuelvas', 'vuelva'], correct: 'vuelvan' },
        { id: 'q3', prompt: 'Quiero que (nosotros) ___ ayuda.',          options: ['pedimos', 'pidamos', 'piedamos', 'pedáis'], correct: 'pidamos' },
        { id: 'q4', prompt: 'No me gusta que (tú) ___, María.',           options: ['mientas', 'mientes', 'mientas no', 'mintas'], correct: 'mientas' },
        { id: 'q5', prompt: 'Quizás (yo) ___ el domingo.',                options: ['juego', 'juegue', 'juge', 'juge'], correct: 'juegue' },
        { id: 'q6', prompt: 'Es lógico que (ustedes) ___ comer ahora.',    options: ['preferen', 'prefieran', 'prefieren', 'preferan'], correct: 'prefieran' },
        { id: 'q7', prompt: 'Espero que ___ pronto. (= llover)',            options: ['llove', 'llueve', 'llueva', 'lluve'], correct: 'llueva' },
        { id: 'q8', prompt: 'Quiero que mi casa siempre ___ a flores.',    options: ['ole', 'huela', 'huele', 'olera'], correct: 'huela' },
      ],
    },

    {
      id: '80.6',
      title: 'Соедините через que',
      type: 'fill',
      instructions: 'Преобразуйте по образцу: <em>César quiere estudiar Bellas Artes. Me parece bien.</em> → <em>Me parece bien que César quiera estudiar Bellas Artes.</em> Подставьте только глагол в субхунтиве.',
      questions: [
        { id: 'q1', prompt: 'La película empieza tarde. Me parece mal. → Me parece mal que la película ___ tarde.',                   correct: 'empiece' },
        { id: 'q2', prompt: 'Hoy cierran las tiendas; es fiesta. Es lógico. → Es lógico que hoy ___ las tiendas. (cerrar)',           correct: 'cierren' },
        { id: 'q3', prompt: 'Sócrates no puede venir mañana. Me da pena. → Me da pena que Sócrates no ___ venir.',                   correct: 'pueda' },
        { id: 'q4', prompt: 'No quieres madrugar el domingo. Es natural. → Es natural que no ___ madrugar el domingo. (querer)',       correct: 'quieras' },
        { id: 'q5', prompt: 'Tania friega siempre los platos. Me parece mal. → Me parece mal que Tania ___ siempre los platos. (fregar)', correct: 'friegue', explanation: '<em>fregar</em>: <em>e→ie</em> + орфо <em>−gu−</em> → <em>friegue</em>.' },
        { id: 'q6', prompt: 'Félix consigue siempre lo que quiere. No es normal. → No es normal que Félix ___ siempre lo que ___. (conseguir / querer)', correct: ['consiga siempre lo que quiera', 'consiga siempre lo que quiere'] },
        { id: 'q7', prompt: 'Rafa y Esther prefieren este restaurante. Es lógico. → Es lógico que Rafa y Esther ___ este restaurante.',  correct: 'prefieran' },
      ],
    },

    {
      id: '80.7',
      title: 'Сценки: «Puede que…»',
      type: 'fill',
      instructions: 'Ответьте через <em>Puede que…</em> + указанный глагол в субхунтиве (3 л. мн. ч., если иное не указано).',
      questions: [
        { id: 'q1', prompt: '¿Cuándo vuelven ustedes? — Puede que (nosotros, <em>volver</em>) ___ el lunes.',     correct: 'volvamos' },
        { id: 'q2', prompt: '¿Por qué se ríen tus amigos? — No sé. Puede que (<em>reírse</em>) ___ de ese cartel.',  correct: 'se rían' },
        { id: 'q3', prompt: '¿Por qué encuentran todo extraño en este país? — Es lógico que (<em>encontrar</em>) ___ todo extraño.', correct: 'encuentren' },
        { id: 'q4', prompt: '¿Por qué les pedimos el ordenador a Fran? — No me gusta que (<em>pedir</em>, nosotros) ___ el ordenador.', correct: 'pidamos' },
        { id: 'q5', prompt: '¿Por qué no les dejas dormir tantas horas en la siesta? — No me gusta que (<em>dormir</em>, ellos) ___ tantas horas.', correct: 'duerman' },
      ],
    },

    {
      id: '80.8',
      title: 'Сопоставьте инфинитив и форму tú субхунтива',
      type: 'match',
      instructions: 'Подберите для каждого инфинитива форму <em>tú</em> презенса субхунтива.',
      pool: ['quieras', 'sientas', 'pidas', 'puedas', 'juegues', 'vuelvas', 'duermas', 'mientas', 'sirvas', 'huelas'],
      questions: [
        { id: 'q1',  prompt: '<em>querer</em>',     correct: 'quieras' },
        { id: 'q2',  prompt: '<em>sentir</em>',     correct: 'sientas' },
        { id: 'q3',  prompt: '<em>pedir</em>',      correct: 'pidas' },
        { id: 'q4',  prompt: '<em>poder</em>',      correct: 'puedas' },
        { id: 'q5',  prompt: '<em>jugar</em>',      correct: 'juegues' },
        { id: 'q6',  prompt: '<em>volver</em>',     correct: 'vuelvas' },
        { id: 'q7',  prompt: '<em>dormir</em>',     correct: 'duermas' },
        { id: 'q8',  prompt: '<em>mentir</em>',     correct: 'mientas' },
        { id: 'q9',  prompt: '<em>servir</em>',     correct: 'sirvas' },
        { id: 'q10', prompt: '<em>oler</em>',        correct: 'huelas' },
      ],
    },

    {
      id: '80.9',
      title: 'Чередование сохраняется или нет?',
      type: 'multi',
      instructions: 'Отметьте все формы, где <strong>дифтонг (или e→i) сохраняется правильно</strong>. Помните: в <em>nosotros/vosotros</em> у <em>querer/poder</em> дифтонга нет.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие формы корректны?',
          options: [
            'quieras',
            'queramos',
            'quieramos',
            'puedan',
            'podamos',
            'puedamos',
            'sientas',
            'sintamos',
            'sientamos',
            'durmamos',
            'duermamos',
            'pidan',
            'pedan',
          ],
          correct: ['quieras', 'queramos', 'puedan', 'podamos', 'sientas', 'sintamos', 'durmamos', 'pidan'],
          explanation: 'Дифтонг — только под ударением. <em>quieramos / puedamos / sientamos / duermamos</em> — ошибки.',
        },
      ],
    },

    {
      id: '80.10',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['quiera', 'quieras', 'quieramos', 'quieran'], correct: 'quieramos', explanation: 'В <em>nosotros</em>: <em>queramos</em> (без дифтонга).' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['pueda', 'puedas', 'puedan', 'puedamos'], correct: 'puedamos', explanation: '<em>podamos</em>, без дифтонга.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['juegue', 'juegues', 'juegamos', 'jueguen'], correct: 'juegamos', explanation: 'У <em>jugar</em> 1 л. мн. ч. — <em>juguemos</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['duerma', 'duermas', 'duermamos', 'duerman'], correct: 'duermamos', explanation: 'У <em>dormir</em> в <em>nosotros</em>: <em>durmamos</em> (o→u).' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['huela', 'huelas', 'olamos', 'olan'], correct: 'olan', explanation: 'В 3 л. мн. ч. — <em>huelan</em> (под ударением — дифтонг и <em>h−</em>).' },
      ],
    },

    {
      id: '80.11',
      title: 'Аудио-диктант',
      type: 'fill',
      instructions: 'Запишите услышанное полностью с диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Espero que puedas venir a mi fiesta.',          correct: ['Espero que puedas venir a mi fiesta.', 'Espero que puedas venir a mi fiesta'] },
        { id: 'q2', prompt: '', audio: 'No me gusta que mientas.',                       correct: ['No me gusta que mientas.', 'No me gusta que mientas'] },
        { id: 'q3', prompt: '', audio: 'Quizás te sientas mejor después de comer.',       correct: ['Quizás te sientas mejor después de comer.', 'Quizás te sientas mejor después de comer'] },
        { id: 'q4', prompt: '', audio: 'Es lógico que prefieras comer ahora.',             correct: ['Es lógico que prefieras comer ahora.', 'Es lógico que prefieras comer ahora'] },
        { id: 'q5', prompt: '', audio: 'Espero que volvamos pronto.',                       correct: ['Espero que volvamos pronto.', 'Espero que volvamos pronto'] },
        { id: 'q6', prompt: '', audio: '¡Ojalá durmáis bien!',                              correct: ['¡Ojalá durmáis bien!', 'Ojalá durmáis bien.', 'Ojalá durmáis bien'] },
        { id: 'q7', prompt: '', audio: 'Quizás juguemos esta tarde.',                       correct: ['Quizás juguemos esta tarde.', 'Quizás juguemos esta tarde'] },
      ],
    },

    {
      id: '80.12',
      title: 'Какому образцу подчиняется глагол?',
      type: 'match',
      instructions: 'Соотнесите глагол с моделью спряжения в субхунтиве.',
      pool: ['как querer (e→ie/e)', 'как sentir (e→ie/i)', 'как pedir (e→i)', 'как poder (o→ue/o)', 'как jugar (u→ue/u)', 'особый: oler', 'особый: dormir'],
      questions: [
        { id: 'q1', prompt: '<em>cerrar</em>',    correct: 'как querer (e→ie/e)' },
        { id: 'q2', prompt: '<em>preferir</em>',  correct: 'как sentir (e→ie/i)' },
        { id: 'q3', prompt: '<em>servir</em>',    correct: 'как pedir (e→i)' },
        { id: 'q4', prompt: '<em>volver</em>',    correct: 'как poder (o→ue/o)' },
        { id: 'q5', prompt: '<em>jugar</em>',     correct: 'как jugar (u→ue/u)' },
        { id: 'q6', prompt: '<em>oler</em>',       correct: 'особый: oler' },
        { id: 'q7', prompt: '<em>dormir</em>',     correct: 'особый: dormir' },
        { id: 'q8', prompt: '<em>entender</em>',   correct: 'как querer (e→ie/e)' },
        { id: 'q9', prompt: '<em>conseguir</em>',  correct: 'как pedir (e→i)' },
        { id: 'q10', prompt: '<em>recordar</em>',   correct: 'как poder (o→ue/o)' },
      ],
    },
  ],
};
