// ============================================================
// Unidad 96 — Expresiones con infinitivo (3)
// Suelo comer en casa.
// Перифразы: soler + inf. (привычное действие),
// llevar + tiempo + sin + inf., volver a + inf. (повторение).
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u96 = {
  id: 'u96',
  number: 96,
  title: { es: 'Suelo comer en casa', topic: 'Expresiones con infinitivo (3)' },
  topicRu: 'Глагольные перифразы (3): привычка, перерыв, повторение',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: '<em>Soler</em> + infinitivo se usa para hablar de <strong>acciones habituales</strong> o <strong>frecuentes</strong>. Solo existe en presente y en pretérito imperfecto de indicativo.',
      ru: 'Перифраза <em>soler</em> + инфинитив описывает <strong>привычные, регулярные действия</strong> («обычно делаю что-то»). Используется только в двух временах: <strong>presente de indicativo</strong> и <strong>pretérito imperfecto</strong>.',
      examples: [
        { es: 'Solemos comer en casa los domingos.', ru: 'По воскресеньям мы обычно едим дома.' },
        { es: '¿A qué hora sueles levantarte?', ru: 'Во сколько ты обычно встаёшь?' },
        { es: 'No suelo trabajar los sábados.', ru: 'По субботам я обычно не работаю.' },
        { es: 'De pequeño, solía pasar las vacaciones en el pueblo.', ru: 'В детстве я обычно проводил каникулы в деревне.' },
      ],
    },

    {
      type: 'heading',
      text: 'Спряжение soler',
    },
    {
      type: 'table',
      caption: 'Соответствие форм soler в двух временах',
      columns: ['Sujeto', 'Presente', 'Pretérito imperfecto'],
      colClasses: ['col-pattern', 'col-pattern', 'col-pattern'],
      rows: [
        ['(yo)', '<strong>suelo</strong>', '<strong>solía</strong>'],
        ['(tú)', '<strong>sueles</strong>', '<strong>solías</strong>'],
        ['(él, ella, usted)', '<strong>suele</strong>', '<strong>solía</strong>'],
        ['(nosotros, -as)', '<strong>solemos</strong>', '<strong>solíamos</strong>'],
        ['(vosotros, -as)', '<strong>soléis</strong>', '<strong>solíais</strong>'],
        ['(ellos, -as, ustedes)', '<strong>suelen</strong>', '<strong>solían</strong>'],
      ],
    },

    {
      type: 'rule',
      es: 'En presente, <em>soler</em> indica que la acción es habitual <strong>ahora</strong>. En pretérito imperfecto, indica que la acción <strong>era habitual antes, pero ya no</strong>.',
      ru: 'В <strong>настоящем времени</strong> <em>soler</em> = «обычно делаю сейчас». В <strong>имперфекте</strong> = «обычно делал раньше, теперь уже нет».',
      examples: [
        { es: 'Carla suele ir al gimnasio dos veces por semana.', ru: 'Карла обычно ходит в зал два раза в неделю.' },
        { es: 'Cuando vivía en Madrid, solía salir mucho.', ru: 'Когда я жил в Мадриде, я часто куда-нибудь ходил (теперь уже нет).' },
      ],
    },

    {
      type: 'heading',
      text: 'llevar + tiempo + sin + infinitivo',
    },
    {
      type: 'rule',
      es: '<em>Llevar</em> + período de tiempo + <em>sin</em> + infinitivo indica el <strong>tiempo durante el cual no se ha hecho una acción</strong>. También se puede usar con <em>desde</em> + fecha.',
      ru: 'Конструкция <em>llevar</em> + период + <em>sin</em> + инфинитив = «<strong>сколько времени уже не делаю что-то</strong>». Чтобы указать момент начала перерыва, ставится <em>desde</em> + дата/событие.',
      examples: [
        { es: 'Llevo dos meses sin fumar.', ru: 'Я не курю уже два месяца.' },
        { es: 'Llevamos una semana sin ver a Pablo.', ru: 'Мы не видели Пабло уже неделю.' },
        { es: 'Llevo sin dormir bien desde el lunes.', ru: 'Я плохо сплю с понедельника.' },
      ],
    },

    {
      type: 'atencion',
      es: 'En el pasado se usa <em>llevaba</em>: <em>Cuando me llamó, llevaba un mes sin verlo.</em>',
      ru: 'В прошлом — форма <em>llevaba</em>: <em>Cuando me llamó, llevaba un mes sin verlo</em> («Когда он мне позвонил, я не видел его уже месяц»).',
    },

    {
      type: 'heading',
      text: 'volver a + infinitivo',
    },
    {
      type: 'rule',
      es: '<em>Volver a</em> + infinitivo indica la <strong>repetición</strong> de una acción: hacer algo de nuevo.',
      ru: 'Конструкция <em>volver a</em> + инфинитив означает <strong>«снова сделать что-то»</strong>, повторить действие. По-русски часто переводится как «снова», «опять», «ещё раз».',
      examples: [
        { es: 'He vuelto a ver a Marisa.', ru: 'Я снова увидел Марису.' },
        { es: '¡No vuelvas a hacer eso!', ru: 'Больше так не делай!' },
        { es: 'El coche se ha vuelto a estropear.', ru: 'Машина опять сломалась.' },
        { es: 'Vamos a volver a empezar el ejercicio.', ru: 'Давайте начнём упражнение заново.' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '96.1',
      title: 'soler в presente',
      type: 'fill',
      instructions: 'Поставьте <em>soler</em> в нужном лице настоящего времени.',
      questions: [
        { id: 'q1', prompt: '(yo) ___ desayunar a las ocho.', correct: 'suelo' },
        { id: 'q2', prompt: '¿(tú) ___ ir al cine los viernes?', correct: 'sueles' },
        { id: 'q3', prompt: 'Mi hermano ___ acostarse muy tarde.', correct: 'suele' },
        { id: 'q4', prompt: '(nosotros) ___ comer en casa entre semana.', correct: 'solemos' },
        { id: 'q5', prompt: '¿(vosotros) ___ ver mucho la tele?', correct: 'soléis' },
        { id: 'q6', prompt: 'Mis padres ___ pasar el verano en la sierra.', correct: 'suelen' },
        { id: 'q7', prompt: '(yo) No ___ tomar café por la noche.', correct: 'suelo' },
        { id: 'q8', prompt: 'Marta y Lola no ___ salir entre semana.', correct: 'suelen' },
      ],
    },

    {
      id: '96.2',
      title: 'soler в pretérito imperfecto',
      type: 'fill',
      instructions: 'Поставьте <em>soler</em> в нужном лице имперфекта (<em>solía, solías...</em>).',
      questions: [
        { id: 'q1', prompt: 'De pequeña, (yo) ___ jugar en el parque cada tarde.', correct: 'solía' },
        { id: 'q2', prompt: '¿(tú) ___ leer mucho cuando eras estudiante?', correct: 'solías' },
        { id: 'q3', prompt: 'Mi abuela ___ cantar mientras cocinaba.', correct: 'solía' },
        { id: 'q4', prompt: 'Antes (nosotros) ___ vernos todos los domingos.', correct: 'solíamos' },
        { id: 'q5', prompt: 'Cuando trabajábais juntos, ¿___ comer en la oficina?', correct: 'solíais' },
        { id: 'q6', prompt: 'Mis tíos ___ visitarnos los fines de semana.', correct: 'solían' },
        { id: 'q7', prompt: 'Antes (yo) no ___ hacer deporte, pero ahora sí.', correct: 'solía' },
      ],
    },

    {
      id: '96.3',
      title: 'Перепишите с soler',
      type: 'fill',
      instructions: 'Замените <em>normalmente / a menudo</em> на нужную форму <em>soler</em>. Пишите глагол целиком, в правильном лице.',
      questions: [
        { id: 'q1', prompt: '<em>Normalmente como en casa.</em> →', correct: ['Suelo comer en casa.', 'Suelo comer en casa'] },
        { id: 'q2', prompt: '<em>Normalmente vamos a la playa los domingos.</em> →', correct: ['Solemos ir a la playa los domingos.', 'Solemos ir a la playa los domingos'] },
        { id: 'q3', prompt: '<em>Cuando era niño, normalmente jugaba al fútbol.</em> →', correct: ['Cuando era niño, solía jugar al fútbol.', 'Cuando era niño, solía jugar al fútbol', 'Cuando era niño solía jugar al fútbol.', 'Cuando era niño solía jugar al fútbol'] },
        { id: 'q4', prompt: '<em>Mis padres a menudo viajaban en tren.</em> →', correct: ['Mis padres solían viajar en tren.', 'Mis padres solían viajar en tren'] },
        { id: 'q5', prompt: '<em>¿Normalmente os acostáis tarde?</em> →', correct: ['¿Soléis acostaros tarde?', '¿Soléis acostaros tarde', 'Soléis acostaros tarde?'] },
        { id: 'q6', prompt: '<em>Antes Pablo a menudo iba al gimnasio.</em> →', correct: ['Antes Pablo solía ir al gimnasio.', 'Antes Pablo solía ir al gimnasio'] },
        { id: 'q7', prompt: '<em>Normalmente no desayuno mucho.</em> →', correct: ['No suelo desayunar mucho.', 'No suelo desayunar mucho'] },
      ],
    },

    {
      id: '96.4',
      title: 'llevar + tiempo + sin + инфинитив',
      type: 'fill',
      instructions: 'Запишите фразу со словами в скобках. Образец: <em>(yo / dos meses / no fumar) → Llevo dos meses sin fumar.</em>',
      questions: [
        { id: 'q1', prompt: '(yo / una semana / no salir) →', correct: ['Llevo una semana sin salir.', 'Llevo una semana sin salir'] },
        { id: 'q2', prompt: '(nosotros / tres días / no ver a Marta) →', correct: ['Llevamos tres días sin ver a Marta.', 'Llevamos tres días sin ver a Marta'] },
        { id: 'q3', prompt: '(tú / dos horas / no comer) →', correct: ['Llevas dos horas sin comer.', 'Llevas dos horas sin comer'] },
        { id: 'q4', prompt: '(él / un mes / no llamarme) →', correct: ['Lleva un mes sin llamarme.', 'Lleva un mes sin llamarme'] },
        { id: 'q5', prompt: '(vosotros / cuatro años / no viajar) →', correct: ['Lleváis cuatro años sin viajar.', 'Lleváis cuatro años sin viajar'] },
        { id: 'q6', prompt: '(ellos / dos semanas / no estudiar) →', correct: ['Llevan dos semanas sin estudiar.', 'Llevan dos semanas sin estudiar'] },
      ],
    },

    {
      id: '96.5',
      title: 'Перепишите с llevar + sin',
      type: 'fill',
      instructions: 'Замените «hace ... que no...» на конструкцию <em>llevar + tiempo + sin + inf.</em>',
      questions: [
        { id: 'q1', prompt: '<em>Hace dos años que no veo a mis primos.</em> →', correct: ['Llevo dos años sin ver a mis primos.', 'Llevo dos años sin ver a mis primos'] },
        { id: 'q2', prompt: '<em>Hace tres meses que no leo un libro.</em> →', correct: ['Llevo tres meses sin leer un libro.', 'Llevo tres meses sin leer un libro'] },
        { id: 'q3', prompt: '<em>Hace una semana que no hablamos con Ana.</em> →', correct: ['Llevamos una semana sin hablar con Ana.', 'Llevamos una semana sin hablar con Ana'] },
        { id: 'q4', prompt: '<em>Hace cuatro días que no duermo bien.</em> →', correct: ['Llevo cuatro días sin dormir bien.', 'Llevo cuatro días sin dormir bien'] },
        { id: 'q5', prompt: '<em>Hace un mes que no fumáis.</em> →', correct: ['Lleváis un mes sin fumar.', 'Lleváis un mes sin fumar'] },
      ],
    },

    {
      id: '96.6',
      title: 'volver a + инфинитив',
      type: 'fill',
      instructions: 'Замените слова <em>otra vez / de nuevo</em> на конструкцию <em>volver a</em> + инфинитив. Сохраните время.',
      questions: [
        { id: 'q1', prompt: '<em>He llamado a Sara otra vez.</em> →', correct: ['He vuelto a llamar a Sara.', 'He vuelto a llamar a Sara'] },
        { id: 'q2', prompt: '<em>El bebé está llorando otra vez.</em> →', correct: ['El bebé ha vuelto a llorar.', 'El bebé ha vuelto a llorar', 'El bebé vuelve a llorar.', 'El bebé vuelve a llorar'] },
        { id: 'q3', prompt: '<em>No comas chocolate de nuevo.</em> →', correct: ['No vuelvas a comer chocolate.', 'No vuelvas a comer chocolate'] },
        { id: 'q4', prompt: '<em>El año pasado fuimos a México otra vez.</em> →', correct: ['El año pasado volvimos a ir a México.', 'El año pasado volvimos a ir a México'] },
        { id: 'q5', prompt: '<em>¿Has visto la película de nuevo?</em> →', correct: ['¿Has vuelto a ver la película?', '¿Has vuelto a ver la película', 'Has vuelto a ver la película?'] },
        { id: 'q6', prompt: '<em>El ordenador se ha estropeado otra vez.</em> →', correct: ['El ordenador se ha vuelto a estropear.', 'El ordenador se ha vuelto a estropear'] },
        { id: 'q7', prompt: '<em>Tengo que leer este capítulo de nuevo.</em> →', correct: ['Tengo que volver a leer este capítulo.', 'Tengo que volver a leer este capítulo'] },
      ],
    },

    {
      id: '96.7',
      title: 'Какая перифраза?',
      type: 'choice',
      instructions: 'Выберите подходящую перифразу: <em>soler</em>, <em>llevar sin</em> или <em>volver a</em>.',
      questions: [
        { id: 'q1', prompt: '___ desayunar tostadas con café. (привычка)', options: ['Suelo', 'Llevo sin', 'Vuelvo a'], correct: 'Suelo' },
        { id: 'q2', prompt: 'No te preocupes, no ___ hacerlo. (повтор: больше не буду)', options: ['suelo', 'llevo sin', 'voy a volver a'], correct: 'voy a volver a' },
        { id: 'q3', prompt: '(yo) ___ tres meses ___ ver a mi tío. (с тех пор не виделись)', options: ['suelo / sin', 'llevo / sin', 'vuelvo / a'], correct: 'llevo / sin' },
        { id: 'q4', prompt: 'Cuando era estudiante, (yo) ___ leer todos los días. (была привычка)', options: ['solía', 'llevaba sin', 'volvía a'], correct: 'solía' },
        { id: 'q5', prompt: '¿Has ___ a hablar con Pablo? (ещё раз)', options: ['solido', 'llevado sin', 'vuelto'], correct: 'vuelto' },
        { id: 'q6', prompt: 'Hugo ___ dos horas ___ contestar al teléfono. (промежуток)', options: ['suele / sin', 'lleva / sin', 'vuelve / a'], correct: 'lleva / sin' },
      ],
    },

    {
      id: '96.8',
      title: 'Найдите фразы без ошибок',
      type: 'multi',
      instructions: 'Отметьте все грамматически корректные фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие варианты корректны?',
          options: [
            'Suelo a comer en casa.',
            'Suelo comer en casa.',
            'Solemos ir al cine los viernes.',
            'Solimos ir al cine los viernes.',
            'En el futuro voy a soler levantarme temprano.',
            'Llevo dos meses sin fumar.',
            'Llevo sin fumar dos meses.',
            'He vuelto a ver la película.',
            'He volvido a ver la película.',
            'No vuelvas a hacer eso.',
            'No vuelves de hacer eso.',
          ],
          correct: [
            'Suelo comer en casa.',
            'Solemos ir al cine los viernes.',
            'Llevo dos meses sin fumar.',
            'Llevo sin fumar dos meses.',
            'He vuelto a ver la película.',
            'No vuelvas a hacer eso.',
          ],
          explanation: '<em>soler</em> идёт сразу за инфинитивом, без <em>a</em>; форма «solimos» не существует; <em>soler</em> существует только в presente и imperfecto, поэтому «voy a soler» некорректно. Причастие от <em>volver</em> — <em>vuelto</em>, не «volvido».',
        },
      ],
    },

    {
      id: '96.9',
      title: 'soler / volver a / llevar sin — соедините',
      type: 'match',
      instructions: 'Подберите для каждого начала логичный конец.',
      pool: [
        'desayunar tostadas con café cada mañana.',
        'fumar desde el año pasado.',
        'leer ese libro: me encantó.',
        'ir a la playa cuando era pequeño.',
        'tres meses sin ver a mis padres.',
        'a llamarme: no quiero hablar.',
      ],
      questions: [
        { id: 'q1', prompt: '<em>Suelo</em>',                correct: 'desayunar tostadas con café cada mañana.' },
        { id: 'q2', prompt: '<em>Llevo</em>',                correct: 'fumar desde el año pasado.' },
        { id: 'q3', prompt: '<em>He vuelto a</em>',          correct: 'leer ese libro: me encantó.' },
        { id: 'q4', prompt: '<em>Solía</em>',                correct: 'ir a la playa cuando era pequeño.' },
        { id: 'q5', prompt: '<em>Llevo</em> (период)',       correct: 'tres meses sin ver a mis padres.' },
        { id: 'q6', prompt: '<em>No vuelvas</em>',           correct: 'a llamarme: no quiero hablar.' },
      ],
    },

    {
      id: '96.10',
      title: 'Постройте фразу из слов',
      type: 'fill',
      instructions: 'Соберите фразу. Сохраняйте порядок слов и нужное время.',
      questions: [
        { id: 'q1', prompt: 'Lola / soler (presente) / ir / al gimnasio / los lunes →', correct: ['Lola suele ir al gimnasio los lunes.', 'Lola suele ir al gimnasio los lunes'] },
        { id: 'q2', prompt: '(yo) / soler (imperfecto) / leer / cómics / de pequeño →', correct: ['Solía leer cómics de pequeño.', 'Solía leer cómics de pequeño', 'De pequeño solía leer cómics.', 'De pequeño solía leer cómics'] },
        { id: 'q3', prompt: '(nosotros) / llevar / dos años / sin viajar →', correct: ['Llevamos dos años sin viajar.', 'Llevamos dos años sin viajar'] },
        { id: 'q4', prompt: '(yo) / volver a (perfecto) / ver / a Marta →', correct: ['He vuelto a ver a Marta.', 'He vuelto a ver a Marta'] },
        { id: 'q5', prompt: '¿(tú) / soler (presente) / hacer deporte? →', correct: ['¿Sueles hacer deporte?', '¿Sueles hacer deporte', 'Sueles hacer deporte?'] },
      ],
    },

    {
      id: '96.11',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Послушайте и запишите услышанное полностью, с диакритикой и пунктуацией.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Suelo comer en casa.',                correct: ['Suelo comer en casa.', 'Suelo comer en casa'] },
        { id: 'q2', prompt: '', audio: '¿A qué hora sueles levantarte?',      correct: ['¿A qué hora sueles levantarte?', '¿A qué hora sueles levantarte', 'A qué hora sueles levantarte?'] },
        { id: 'q3', prompt: '', audio: 'De pequeño solía jugar al fútbol.',    correct: ['De pequeño solía jugar al fútbol.', 'De pequeño solía jugar al fútbol'] },
        { id: 'q4', prompt: '', audio: 'Llevo dos meses sin fumar.',          correct: ['Llevo dos meses sin fumar.', 'Llevo dos meses sin fumar'] },
        { id: 'q5', prompt: '', audio: 'No vuelvas a hacer eso.',              correct: ['No vuelvas a hacer eso.', 'No vuelvas a hacer eso'] },
        { id: 'q6', prompt: '', audio: 'He vuelto a ver a Marisa.',            correct: ['He vuelto a ver a Marisa.', 'He vuelto a ver a Marisa'] },
      ],
    },

    {
      id: '96.12',
      title: 'Какая перифраза точнее?',
      type: 'choice',
      instructions: 'Какой вариант ближе по смыслу?',
      questions: [
        { id: 'q1', prompt: '«Я обычно завтракаю в восемь» →', options: ['Suelo desayunar a las ocho.', 'Llevo desayunando a las ocho.', 'Vuelvo a desayunar a las ocho.'], correct: 'Suelo desayunar a las ocho.' },
        { id: 'q2', prompt: '«Я снова посмотрел этот фильм» →', options: ['Suelo ver esta película.', 'Llevo viendo esta película.', 'He vuelto a ver esta película.'], correct: 'He vuelto a ver esta película.' },
        { id: 'q3', prompt: '«Я уже три дня не курю» →', options: ['Suelo fumar tres días.', 'Llevo tres días sin fumar.', 'Vuelvo a fumar tres días.'], correct: 'Llevo tres días sin fumar.' },
        { id: 'q4', prompt: '«В детстве я обычно ходил в школу пешком» →', options: ['Suelo ir a la escuela a pie.', 'Solía ir a la escuela a pie.', 'Volvía a ir a la escuela a pie.'], correct: 'Solía ir a la escuela a pie.' },
        { id: 'q5', prompt: '«Больше так не делай!» →', options: ['¡No suelas hacer eso!', '¡No lleves haciendo eso!', '¡No vuelvas a hacer eso!'], correct: '¡No vuelvas a hacer eso!' },
      ],
    },
  ],
};
