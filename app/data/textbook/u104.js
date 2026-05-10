// ============================================================
// Unidad 104 — Adverbios de cantidad
// muy, mucho, bastante, algo, un poco, poco, demasiado, nada.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u104 = {
  id: 'u104',
  number: 104,
  title: { es: 'muy, mucho, bastante...', topic: 'Adverbios de cantidad' },
  topicRu: 'Наречия количества: «очень, много, довольно...»',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: '<em>mucho, bastante, demasiado, algo, un poco, poco, nada...</em> son adverbios de cantidad. Indican <strong>diferentes grados de intensidad</strong> en relación a las palabras a las que se refieren.',
      ru: '<strong>Наречия количества</strong> показывают «насколько» что-то делается или каково качество. Они образуют шкалу от «очень много» до «нисколько». Самые частые — <em>muy, mucho, bastante, algo, un poco, poco, demasiado, nada</em>.',
      examples: [
        { es: 'Nuria trabaja mucho.', ru: 'Нурия много работает.' },
        { es: 'Julia y su hermano son bastante diferentes.', ru: 'Хулия и её брат довольно разные.' },
        { es: 'Es demasiado tarde. El avión ya ha despegado.', ru: 'Слишком поздно. Самолёт уже улетел.' },
      ],
    },
    {
      type: 'heading',
      text: 'Шкала интенсивности',
    },
    {
      type: 'table',
      caption: 'От (+) к (–)',
      columns: ['Степень', 'Наречия'],
      colClasses: ['col-pattern', 'col-pattern'],
      rows: [
        ['(+) очень / много',     '<strong>muy / mucho</strong>'],
        ['довольно',              '<strong>bastante</strong>'],
        ['немного',               '<strong>algo</strong>, <strong>un poco</strong>'],
        ['мало',                  '<strong>poco</strong>'],
        ['(–) нисколько',         '<strong>nada</strong>'],
        ['слишком (= больше нормы)', '<strong>demasiado</strong>'],
      ],
    },

    {
      type: 'heading',
      text: 'С прилагательными и наречиями',
    },
    {
      type: 'rule',
      es: 'Con <strong>adjetivos</strong> y <strong>adverbios</strong> se usa: <em>muy, bastante, algo, un poco, poco, demasiado, nada</em> (no <em>mucho</em>).',
      ru: 'Перед <strong>прилагательным</strong> или другим <strong>наречием</strong> ставится <em>muy</em>, а не <em>mucho</em>. Также возможны <em>bastante, algo, un poco, poco, demasiado, nada</em>.',
      examples: [
        { es: 'Fidel cocina muy bien.', ru: 'Фидель готовит очень хорошо.' },
        { es: 'Es algo tarde.', ru: 'Уже немного поздно.' },
        { es: 'Este ejercicio es un poco difícil.', ru: 'Это упражнение немного сложное.' },
        { es: 'Susana es poco cariñosa.', ru: 'Сусана не очень ласковая.' },
        { es: 'Este hotel es demasiado caro.', ru: 'Этот отель слишком дорогой.' },
        { es: 'Gema no es nada egoísta.', ru: 'Хема совершенно не эгоистична.' },
      ],
    },
    {
      type: 'atencion',
      es: '<em>algo</em> и <em>un poco</em> tienen sentido <strong>positivo</strong> («чуть-чуть, в небольшой степени»). <em>poco</em> tiene sentido <strong>negativo</strong> («мало»). Compara: <em>Soy algo tímida</em> = «я немного стеснительная»; <em>Soy poco tímida</em> = «я не такая уж и стеснительная».',
      ru: 'Различайте: <strong>algo / un poco</strong> = «чуть-чуть, немного» (положительный смысл, признак есть, но в малой степени). <strong>poco</strong> = «мало» (отрицательный, признака почти нет). По-русски и то и другое часто переводится «немного / мало», но в испанском они меняют смысл.',
      examples: [
        { es: 'Soy algo / un poco tímida.', ru: 'Я немного стеснительная (= признак есть).' },
        { es: 'Soy poco tímida.', ru: 'Я не очень стеснительная (= признака почти нет).' },
      ],
    },
    {
      type: 'atencion',
      es: '<em>algo</em> и <em>un poco</em> normalmente NO se usan con adjetivos de cualidades positivas. No se dice <em>Adela es algo simpática</em> ни <em>Felipe es un poco trabajador</em>.',
      ru: 'С прилагательными положительной оценки (<em>simpático, trabajador, amable, generoso</em>...) <strong>нельзя</strong> использовать <em>algo / un poco</em>. Это звучит странно — как «он немного добр» вместо «он добрый». Используйте <em>muy, bastante</em>.',
    },

    {
      type: 'heading',
      text: 'С глаголами',
    },
    {
      type: 'rule',
      es: 'Con <strong>verbos</strong> se usa: <em>mucho, bastante, algo, poco, demasiado, nada</em>. NO se usa <em>muy</em> ni <em>un poco</em>.',
      ru: 'После <strong>глагола</strong> ставится <em>mucho</em> (а не <em>muy</em>!). Также возможны <em>bastante, algo, poco, demasiado, nada</em>.',
      examples: [
        { es: 'Beatriz trabaja mucho.', ru: 'Беатрис много работает.' },
        { es: 'Ernesto piensa bastante.', ru: 'Эрнесто довольно много думает.' },
        { es: 'Nati estudia algo, pero poco.', ru: 'Нати немного учится, но мало.' },
        { es: 'Este tren corre poco.', ru: 'Этот поезд едет медленно.' },
        { es: 'Felipe duerme demasiado.', ru: 'Фелипе спит слишком много.' },
        { es: 'Juan no come nada.', ru: 'Хуан совсем не ест.' },
      ],
    },
    {
      type: 'atencion',
      es: 'No se dice <em>Trabajo muy</em> ni <em>Trabajo un poco</em>. Después del verbo: <em>Trabajo <strong>mucho</strong> / <strong>bastante</strong> / <strong>poco</strong></em>.',
      ru: 'Запомните: после глагола — <em>mucho</em>, не <em>muy</em>. <em>«Я много работаю»</em> = <em>Trabajo mucho</em>, а не *<em>Trabajo muy</em>.',
    },

    {
      type: 'table',
      caption: 'С чем какое наречие',
      columns: ['Наречие', 'С прилаг. / нар.', 'С глаголом'],
      colClasses: ['col-pattern', 'col-pattern', 'col-pattern'],
      rows: [
        ['<strong>muy</strong>',          '✓',  '✗'],
        ['<strong>mucho</strong>',         '✗',  '✓'],
        ['<strong>bastante</strong>',      '✓',  '✓'],
        ['<strong>algo</strong>',          '✓',  '✓'],
        ['<strong>un poco</strong>',       '✓',  '✗'],
        ['<strong>poco</strong>',          '✓',  '✓'],
        ['<strong>demasiado</strong>',     '✓',  '✓'],
        ['<strong>nada</strong>',          '✓',  '✓'],
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '104.1',
      title: 'Выберите правильное наречие',
      type: 'choice',
      instructions: 'В каждой фразе выберите подходящее наречие количества.',
      questions: [
        { id: 'q1', prompt: 'Me encanta esta novela. Es ___ buena.',
          options: ['muy', 'poco'], correct: 'muy' },
        { id: 'q2', prompt: 'No se puede oír nada. La música está ___ alta.',
          options: ['algo', 'bastante'], correct: 'bastante', explanation: 'Когда «довольно громко, неприятно» — это <em>bastante</em>. <em>algo</em> = чуть-чуть, не подходит, если ничего не слышно.' },
        { id: 'q3', prompt: 'Roberto no es ___ alegre. Nunca quiere salir.',
          options: ['poco', 'nada'], correct: 'nada', explanation: '<em>nada</em> = совершенно не. С отрицанием.' },
        { id: 'q4', prompt: 'Este libro no es ___ caro. Solo cuesta cinco euros.',
          options: ['bastante', 'nada'], correct: 'nada' },
        { id: 'q5', prompt: 'Rubén es ___ sincero. A veces es mejor no decir toda la verdad.',
          options: ['demasiado', 'poco'], correct: 'demasiado', explanation: '«Слишком честный» = demasiado.' },
        { id: 'q6', prompt: 'Silvia se lleva ___ bien con su hermana. Se ayudan mucho.',
          options: ['muy', 'mucho'], correct: 'muy', explanation: 'Перед наречием <em>bien</em> — только <em>muy</em>.' },
        { id: 'q7', prompt: 'Es ___ tarde. Deberíamos irnos.',
          options: ['algo', 'poco'], correct: 'algo', explanation: '<em>algo tarde</em> = «уже немного поздно». <em>poco tarde</em> не используется.' },
        { id: 'q8', prompt: 'Tomás es ___ cariñoso. Nunca da un beso a nadie.',
          options: ['poco', 'un poco'], correct: 'poco', explanation: 'Признака почти нет → <em>poco</em>.' },
        { id: 'q9', prompt: 'Ricardo está ___ débil. Debería hacer algo de ejercicio.',
          options: ['poco', 'un poco'], correct: 'un poco', explanation: '«Немного слаб» (в малой степени) = un poco.' },
        { id: 'q10', prompt: 'Ayer estuve con Elisa y la encontré ___ nerviosa. No paraba de hablar.',
          options: ['bastante', 'poco'], correct: 'bastante' },
      ],
    },

    {
      id: '104.2',
      title: 'Подберите наречие количества по смыслу',
      type: 'fill',
      instructions: 'Подставьте <em>bastante</em>, <em>demasiado</em>, <em>muy</em> или <em>un poco</em>.',
      questions: [
        { id: 'q1', prompt: 'El traje le queda ___ grande (на 3 размера больше).',  correct: 'demasiado' },
        { id: 'q2', prompt: 'Catalina dibuja ___ bien (рисует мастерски).',          correct: 'muy' },
        { id: 'q3', prompt: 'Ernesto va ___ rápido (быстрее обычного, нормально-быстро).', correct: 'bastante' },
        { id: 'q4', prompt: 'Los zapatos son ___ pequeños (немного жмут).',          correct: 'un poco' },
        { id: 'q5', prompt: 'El libro es ___ caro (50 евро — это перебор).',          correct: 'demasiado' },
      ],
    },

    {
      id: '104.3',
      title: 'mucho или muy?',
      type: 'choice',
      instructions: 'Выберите подходящую форму. Перед прилагательным/наречием — <em>muy</em>; после глагола — <em>mucho</em>.',
      questions: [
        { id: 'q1', prompt: 'Beatriz trabaja ___.',           options: ['muy', 'mucho'], correct: 'mucho' },
        { id: 'q2', prompt: 'Beatriz es ___ trabajadora.',    options: ['muy', 'mucho'], correct: 'muy' },
        { id: 'q3', prompt: 'Esta ciudad es ___ bonita.',      options: ['muy', 'mucho'], correct: 'muy' },
        { id: 'q4', prompt: 'Me gusta ___ esta ciudad.',       options: ['muy', 'mucho'], correct: 'mucho' },
        { id: 'q5', prompt: 'Hablas español ___ bien.',         options: ['muy', 'mucho'], correct: 'muy', explanation: '<em>bien</em> — наречие, перед ним <em>muy</em>.' },
        { id: 'q6', prompt: 'Has estudiado ___ este año.',      options: ['muy', 'mucho'], correct: 'mucho' },
        { id: 'q7', prompt: 'Estoy ___ cansado.',                options: ['muy', 'mucho'], correct: 'muy' },
        { id: 'q8', prompt: 'Hoy hace ___ frío.',                options: ['muy', 'mucho'], correct: 'mucho', explanation: '<em>frío</em> здесь — существительное (после <em>hace</em>), значит <em>mucho</em>. О <em>muy / mucho</em> с существительным — следующая Unidad.' },
      ],
    },

    {
      id: '104.4',
      title: 'algo / un poco / poco — что выбрать?',
      type: 'choice',
      instructions: 'Положительный смысл («признак есть, чуть-чуть») = <em>algo / un poco</em>; отрицательный («признака почти нет») = <em>poco</em>.',
      questions: [
        { id: 'q1', prompt: '«Я немного устал» (= усталость есть, но небольшая) →',
          options: ['Estoy algo cansado.', 'Estoy poco cansado.'], correct: 'Estoy algo cansado.' },
        { id: 'q2', prompt: '«Этот человек не очень разговорчив» (= признака почти нет) →',
          options: ['Es un poco hablador.', 'Es poco hablador.'], correct: 'Es poco hablador.' },
        { id: 'q3', prompt: '«Мне немного грустно» →',
          options: ['Estoy un poco triste.', 'Estoy poco triste.'], correct: 'Estoy un poco triste.' },
        { id: 'q4', prompt: '«Дом не очень просторный» →',
          options: ['La casa es un poco amplia.', 'La casa es poco amplia.'], correct: 'La casa es poco amplia.' },
        { id: 'q5', prompt: '«Это упражнение немного сложное» →',
          options: ['Este ejercicio es un poco difícil.', 'Este ejercicio es poco difícil.'], correct: 'Este ejercicio es un poco difícil.' },
      ],
    },

    {
      id: '104.5',
      title: 'Заполните пропуск',
      type: 'fill',
      instructions: 'Подберите <em>algo, bastante, demasiado, mucho, nada, poco</em> по смыслу.',
      questions: [
        { id: 'q1', prompt: 'Ernesto estudia ___: seis horas al día.',                    correct: 'mucho' },
        { id: 'q2', prompt: 'Este coche corre ___. No pasa de los ochenta kilómetros.',    correct: 'poco' },
        { id: 'q3', prompt: 'Víctor sale ___. No está nunca en casa.',                     correct: ['mucho', 'demasiado'] },
        { id: 'q4', prompt: 'Rosa y yo nos vemos ___, casi todas las semanas.',            correct: 'mucho' },
        { id: 'q5', prompt: 'Tengo que tomarme algo. Me duele ___ la cabeza.',              correct: ['mucho', 'bastante'] },
        { id: 'q6', prompt: 'A Verónica no le gusta ___ el frío.',                          correct: 'nada' },
        { id: 'q7', prompt: 'Nacho les ayuda ___ a sus padres.',                            correct: ['mucho', 'bastante'] },
        { id: 'q8', prompt: 'Mi padre hace ___ deporte. Va todos los días al gimnasio.',     correct: 'mucho' },
        { id: 'q9', prompt: 'Ahora trabajo ___. Tengo que buscar más trabajo.',              correct: 'poco' },
        { id: 'q10', prompt: 'María no estudia ___. Va a suspender los exámenes.',            correct: 'nada' },
      ],
    },

    {
      id: '104.6',
      title: 'demasiado: «слишком»',
      type: 'fill',
      instructions: 'Допишите фразу с <em>demasiado</em> по смыслу.',
      questions: [
        { id: 'q1', prompt: 'No puedo dormir, hace ___ calor (= слишком жарко, в смысле «жара слишком сильная»).', correct: 'demasiado' },
        { id: 'q2', prompt: 'Este café está ___ caliente. Espera un poco.',                              correct: 'demasiado' },
        { id: 'q3', prompt: 'Has comprado ___ vino. Tienes treinta botellas.',                            correct: 'demasiado' },
        { id: 'q4', prompt: 'Eduardo come ___. Por eso engorda.',                                          correct: 'demasiado' },
        { id: 'q5', prompt: 'Habla ___ alto. No queremos molestar a los vecinos.',                          correct: 'demasiado' },
        { id: 'q6', prompt: 'Es ___ tarde para llamar; son las once.',                                       correct: 'demasiado' },
      ],
    },

    {
      id: '104.7',
      title: 'Сопоставьте',
      type: 'match',
      instructions: 'Подберите для каждой шкалы значение.',
      pool: ['слишком (больше нормы)', 'много / очень', 'довольно', 'немного', 'мало', 'нисколько'],
      questions: [
        { id: 'q1', prompt: '<em>demasiado</em>',  correct: 'слишком (больше нормы)' },
        { id: 'q2', prompt: '<em>muy / mucho</em>', correct: 'много / очень' },
        { id: 'q3', prompt: '<em>bastante</em>',    correct: 'довольно' },
        { id: 'q4', prompt: '<em>algo / un poco</em>', correct: 'немного' },
        { id: 'q5', prompt: '<em>poco</em>',         correct: 'мало' },
        { id: 'q6', prompt: '<em>nada</em>',         correct: 'нисколько' },
      ],
    },

    {
      id: '104.8',
      title: 'Найдите фразы без ошибок',
      type: 'multi',
      instructions: 'Отметьте все грамматически корректные фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Trabajo mucho.',
            'Trabajo muy.',
            'Estoy muy cansado.',
            'Estoy mucho cansado.',
            'Cocina muy bien.',
            'Cocina mucho bien.',
            'No estudia nada.',
            'Es un poco simpática.',
            'Es muy simpática.',
            'Es algo tarde.',
            'Trabaja un poco.',
            'Habla bastante rápido.',
          ],
          correct: [
            'Trabajo mucho.',
            'Estoy muy cansado.',
            'Cocina muy bien.',
            'No estudia nada.',
            'Es muy simpática.',
            'Es algo tarde.',
            'Habla bastante rápido.',
          ],
          explanation: '<em>muy</em> не идёт с глаголом, <em>mucho</em> не идёт с прилагательным/наречием. <em>un poco</em> не используется с положительными качествами (<em>simpática</em>) и не идёт с глаголом (<em>Trabaja un poco</em> — устоявшееся, но в «академическом» испанском говорят <em>Trabaja poco</em>).',
        },
      ],
    },

    {
      id: '104.9',
      title: 'Поставьте подходящее слово',
      type: 'choice',
      instructions: 'Какое наречие количества естественнее в этом контексте?',
      questions: [
        { id: 'q1', prompt: 'Mi sobrino es ___ inteligente. Es un genio.',
          options: ['muy', 'mucho', 'un poco'], correct: 'muy' },
        { id: 'q2', prompt: 'Mi sobrino estudia ___. Saca buenas notas.',
          options: ['muy', 'mucho'], correct: 'mucho' },
        { id: 'q3', prompt: 'Esta sopa es ___ salada. No puedo comerla.',
          options: ['demasiado', 'algo'], correct: 'demasiado' },
        { id: 'q4', prompt: 'No tenemos ___ tiempo, pero algo haremos.',
          options: ['mucho', 'muy'], correct: 'mucho', explanation: 'Перед существительным <em>tiempo</em> — <em>mucho</em>. Об этом — Unidad 105.' },
        { id: 'q5', prompt: 'Estoy ___ contento por ti.',
          options: ['muy', 'mucho'], correct: 'muy' },
        { id: 'q6', prompt: 'Te quiero ___.',
          options: ['muy', 'mucho'], correct: 'mucho' },
      ],
    },

    {
      id: '104.10',
      title: 'Перепишите фразу с противоположной интенсивностью',
      type: 'fill',
      instructions: 'Замените на противоположное наречие. Образец: <em>Trabaja mucho</em> → <em>Trabaja poco</em>.',
      questions: [
        { id: 'q1', prompt: '<em>Es muy simpático.</em> →',     correct: ['Es poco simpático.', 'Es poco simpático'] },
        { id: 'q2', prompt: '<em>Estudia mucho.</em> →',         correct: ['Estudia poco.', 'Estudia poco'] },
        { id: 'q3', prompt: '<em>Come demasiado.</em> →',         correct: ['Come poco.', 'No come nada.', 'Come poco', 'No come nada'] },
        { id: 'q4', prompt: '<em>Habla mucho.</em> →',            correct: ['Habla poco.', 'Habla poco'] },
        { id: 'q5', prompt: '<em>Está muy cansado.</em> →',        correct: ['Está poco cansado.', 'No está nada cansado.', 'Está poco cansado', 'No está nada cansado'] },
      ],
    },

    {
      id: '104.11',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Послушайте и запишите фразу полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Nuria trabaja mucho.',                      correct: ['Nuria trabaja mucho.', 'Nuria trabaja mucho'] },
        { id: 'q2', prompt: '', audio: 'Es demasiado tarde.',                        correct: ['Es demasiado tarde.', 'Es demasiado tarde'] },
        { id: 'q3', prompt: '', audio: 'Fidel cocina muy bien.',                     correct: ['Fidel cocina muy bien.', 'Fidel cocina muy bien'] },
        { id: 'q4', prompt: '', audio: 'Gema no es nada egoísta.',                    correct: ['Gema no es nada egoísta.', 'Gema no es nada egoísta'] },
        { id: 'q5', prompt: '', audio: 'Este ejercicio es un poco difícil.',           correct: ['Este ejercicio es un poco difícil.', 'Este ejercicio es un poco difícil'] },
        { id: 'q6', prompt: '', audio: 'Susana es poco cariñosa.',                     correct: ['Susana es poco cariñosa.', 'Susana es poco cariñosa'] },
      ],
    },

    {
      id: '104.12',
      title: 'Где ошибка?',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?',
          options: ['Trabajo mucho.', 'Estoy muy cansado.', 'Trabajo muy.', 'Cocina bastante bien.'],
          correct: 'Trabajo muy.', explanation: 'После глагола — <em>mucho</em>, не <em>muy</em>.' },
        { id: 'q2', prompt: 'Где ошибка?',
          options: ['Es muy guapa.', 'Es mucho guapa.', 'Es bastante guapa.', 'Es algo seria.'],
          correct: 'Es mucho guapa.', explanation: 'Перед прилагательным — <em>muy</em>, не <em>mucho</em>.' },
        { id: 'q3', prompt: 'Где ошибка?',
          options: ['Adela es algo simpática.', 'Adela es muy simpática.', 'Adela es bastante simpática.'],
          correct: 'Adela es algo simpática.', explanation: 'С положительными качествами <em>algo / un poco</em> не используется.' },
        { id: 'q4', prompt: 'Где ошибка?',
          options: ['Está un poco triste.', 'Está poco triste.', 'Está muy triste.', 'Está bastante triste.', 'Está mucho triste.'],
          correct: 'Está mucho triste.' },
        { id: 'q5', prompt: 'Где ошибка?',
          options: ['No come nada.', 'No come algo.', 'Come algo.', 'Come poco.'],
          correct: 'No come algo.', explanation: 'С отрицанием — <em>nada</em>, а не <em>algo</em>.' },
      ],
    },
  ],
};
