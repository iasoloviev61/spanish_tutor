// ============================================================
// Unidad 22 — Indefinidos (3): mucho, poco, demasiado, suficiente, bastante
// Количественные индефинидо. Согласование с существительным.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u22 = {
  id: 'u22',
  number: 22,
  title: { es: 'mucho, poco, demasiado, suficiente...', topic: 'Indefinidos (3)' },
  topicRu: 'Количество: «много», «мало», «слишком», «достаточно»',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Para indicar <strong>cantidad</strong> usamos <em>mucho, poco, demasiado, suficiente</em> y <em>bastante</em>. Como adjetivos, concuerdan con el nombre en <strong>género y número</strong> (cuando tienen formas distintas).',
      ru: 'Эти пять слов отвечают на вопрос «сколько». Когда они стоят перед существительным, то ведут себя как прилагательные и согласуются: <em>mucho/-a/-os/-as, poco/-a/-os/-as, demasiado/-a/-os/-as</em>. У <em>suficiente</em> и <em>bastante</em> формы по роду нет — только по числу (<em>suficiente / suficientes, bastante / bastantes</em>).',
      examples: [
        { es: 'mucho dinero', ru: 'много денег' },
        { es: 'poco dinero', ru: 'мало денег' },
        { es: 'demasiado dinero', ru: 'слишком много денег' },
        { es: 'suficiente dinero', ru: 'достаточно денег' },
      ],
    },

    {
      type: 'heading',
      text: 'Значения',
    },
    {
      type: 'table',
      caption: 'Что означает каждое слово',
      columns: ['Слово', 'Значение', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<em>mucho</em>',       'una gran cantidad — много',                 '<em>No tengo mucha hambre.</em>'],
        ['<em>poco</em>',        'una cantidad pequeña — мало',                '<em>Martín tiene poco tiempo para estudiar.</em>'],
        ['<em>demasiado</em>',   'más cantidad de lo necesario — слишком',     '<em>Rodri come demasiado chocolate.</em>'],
        ['<em>suficiente</em>',  'la cantidad necesaria — достаточно',          '<em>No tengo suficiente dinero para el avión.</em>'],
        ['<em>bastante</em>',    'mucho, pero no demasiado / suficiente',       '<em>Hay bastante gente.</em><br><em>Sí, hay bastante comida; solo somos tres.</em>'],
      ],
    },

    {
      type: 'heading',
      text: 'Согласование',
    },
    {
      type: 'table',
      caption: 'Перед существительным',
      columns: ['Тип существительного', 'Формы', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<strong>ед. ч. неисчисл.</strong> (агва, время, деньги, голод…)', '<em>mucho/-a, poco/-a, demasiado/-a, suficiente, bastante</em>', '<em>No tengo mucha hambre.</em><br><em>Tenemos poca agua.</em><br><em>Hay demasiada comida.</em><br><em>Hay suficiente pan.</em>'],
        ['<strong>мн. ч.</strong>',                                            '<em>muchos/-as, pocos/-as, demasiados/-as, suficientes, bastantes</em>', '<em>Mis hijos duermen muchas horas.</em><br><em>Marcela tiene pocas amigas.</em><br><em>Alejo come demasiados pasteles.</em><br><em>Tenemos suficientes patatas para hoy.</em>'],
      ],
    },
    {
      type: 'atencion',
      es: '<em>suficiente(s)</em> puede ir <strong>antes</strong> o <strong>después</strong> del nombre con el mismo significado: <em>Hay suficiente agua = Hay agua suficiente</em>.',
      ru: 'Слово <em>suficiente(s)</em> можно ставить и до, и после существительного — смысл не меняется. Это редкое свойство для прилагательных-количественников.',
    },

    {
      type: 'heading',
      text: 'bastante: «достаточно много»',
    },
    {
      type: 'rule',
      es: '<em>bastante</em> está entre <em>mucho</em> y <em>poco</em>: indica una cantidad <strong>considerable, pero no excesiva</strong>; en otros contextos significa <em>la cantidad necesaria</em>, sinónimo de <em>suficiente</em>.',
      ru: '<em>bastante</em> часто переводится «довольно (много)»: больше, чем «poco», но меньше, чем «mucho». Иногда — «достаточно» (= <em>suficiente</em>).',
      examples: [
        { es: 'Hay bastante gente en la plaza.', ru: 'На площади довольно много людей.' },
        { es: '—¿Crees que hay bastante comida? —Sí, sólo somos tres.', ru: '— Думаешь, еды достаточно? — Да, нас всего трое.' },
        { es: 'No podemos ir de vacaciones. No tenemos bastante dinero.', ru: 'Мы не можем поехать в отпуск. У нас не хватает денег.' },
      ],
    },

    {
      type: 'rule',
      es: '<em>mucho, poco, demasiado, suficiente, bastante</em> pueden ir <strong>solos</strong> cuando está claro de qué se está hablando.',
      ru: 'Если объект уже назван, существительное опускают, а слово согласуется по роду/числу с подразумеваемым именем.',
      examples: [
        { es: '—¿Cuántos huevos hay? —Tres. Son suficientes para una tortilla.', ru: '— Сколько яиц? — Три. Этого хватит на омлет.' },
        { es: '—¿Tienes tiempo? —No tengo mucho. Me voy en diez minutos.', ru: '— У тебя есть время? — Не очень. Я ухожу через десять минут.' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '22.1',
      title: 'Согласуйте mucho/-a/-os/-as',
      type: 'fill',
      instructions: 'Поставьте подходящую форму <em>mucho</em>.',
      questions: [
        { id: 'q1', prompt: 'Tengo ___ hambre.',          correct: 'mucha' },
        { id: 'q2', prompt: 'En la plaza hay ___ gente.',  correct: 'mucha',  explanation: '<em>gente</em> — ж. р., ед. ч.' },
        { id: 'q3', prompt: 'Mis hijos duermen ___ horas.', correct: 'muchas' },
        { id: 'q4', prompt: 'No tengo ___ amigos aquí.',    correct: 'muchos' },
        { id: 'q5', prompt: 'Bebo ___ agua todos los días.', correct: 'mucha',  explanation: '<em>agua</em> — ж. р., перед ним <em>el</em>, но <em>mucha</em>.' },
        { id: 'q6', prompt: 'Hace ___ frío hoy.',            correct: 'mucho' },
        { id: 'q7', prompt: 'Hay ___ libros en mi casa.',    correct: 'muchos' },
        { id: 'q8', prompt: 'Comemos ___ verdura.',          correct: 'mucha' },
      ],
    },

    {
      id: '22.2',
      title: 'Согласуйте poco/-a/-os/-as и demasiado/-a/-os/-as',
      type: 'fill',
      instructions: 'Используйте указанное слово в нужной форме (в скобках — лемма). Не забывайте про род и число.',
      questions: [
        { id: 'q1', prompt: 'Tenemos ___ patatas para la cena. (poco)',          correct: 'pocas' },
        { id: 'q2', prompt: 'Bebes ___ agua. (poco)',                              correct: 'poca' },
        { id: 'q3', prompt: 'Hay ___ tiempo para terminar. (poco)',                correct: 'poco' },
        { id: 'q4', prompt: 'Comes ___ chocolate. Te va a doler la barriga. (demasiado)', correct: 'demasiado' },
        { id: 'q5', prompt: 'Esta sopa tiene ___ sal. (demasiado)',                 correct: 'demasiada' },
        { id: 'q6', prompt: 'Hace ___ años que no nos vemos. (demasiado)',          correct: 'demasiados' },
        { id: 'q7', prompt: 'Hay ___ cucharas en la mesa. (demasiado)',             correct: 'demasiadas' },
        { id: 'q8', prompt: 'Tengo ___ amigas en Madrid. (poco)',                    correct: 'pocas' },
      ],
    },

    {
      id: '22.3',
      title: 'suficiente / suficientes / bastante / bastantes',
      type: 'fill',
      instructions: 'Согласуйте по числу с существительным (по роду эти слова не меняются).',
      questions: [
        { id: 'q1', prompt: 'Hay ___ agua para el café.',                  correct: 'suficiente' },
        { id: 'q2', prompt: 'Tenemos ___ huevos para una tortilla.',        correct: 'suficientes' },
        { id: 'q3', prompt: 'Hace ___ frío como para llevar abrigo.',        correct: 'bastante' },
        { id: 'q4', prompt: 'No tengo ___ amigos aquí; me siento solo.',      correct: ['bastantes', 'suficientes'] },
        { id: 'q5', prompt: 'Tenemos ___ patatas; podemos hacer puré.',       correct: ['suficientes', 'bastantes'] },
        { id: 'q6', prompt: 'En la fiesta hay ___ gente.',                     correct: 'bastante',   explanation: '<em>gente</em> — ед. ч., ж. р.' },
        { id: 'q7', prompt: 'No tengo dinero ___ para ir al cine.',             correct: 'suficiente' , explanation: 'После имени тоже допустимо: <em>dinero suficiente</em>.' },
      ],
    },

    {
      id: '22.4',
      title: 'Замените «10 / много / два / медиа...» подходящим количественником',
      type: 'fill',
      instructions: 'Перепишите подчёркнутое слово как <em>mucho/-a/-os/-as</em> или <em>poco/-a/-os/-as</em>. Сохраняйте остальную часть фразы.',
      questions: [
        { id: 'q1', prompt: 'Sonia tiene <em>unos doscientos</em> libros. → Sonia tiene ___ libros.', correct: 'muchos' },
        { id: 'q2', prompt: 'Alberto tiene <em>dos</em> amigos. → Alberto tiene ___ amigos.',          correct: 'pocos' },
        { id: 'q3', prompt: 'Ayer dormimos <em>diez</em> horas. → Ayer dormimos ___ horas.',            correct: 'muchas' },
        { id: 'q4', prompt: 'Bebo <em>tres litros de</em> agua al día. → Bebo ___ agua al día.',         correct: 'mucha' },
        { id: 'q5', prompt: 'Quedan <em>dos</em> patatas. → Quedan ___ patatas.',                         correct: 'pocas' },
        { id: 'q6', prompt: 'Luisa toma <em>media cucharada de</em> azúcar en el café. → Luisa toma ___ azúcar.', correct: 'poca' },
        { id: 'q7', prompt: 'Hemos comprado <em>diez litros de</em> aceite. → Hemos comprado ___ aceite.', correct: 'mucho' },
      ],
    },

    {
      id: '22.5',
      title: '«Слишком» или «достаточно»?',
      type: 'choice',
      instructions: 'Поставьте <em>demasiado/-a/-os/-as</em> или <em>suficiente(s)</em> по смыслу.',
      questions: [
        { id: 'q1', prompt: 'Javier trabaja doce horas todos los días. Trabaja ___ horas.', options: ['demasiadas', 'suficientes'], correct: 'demasiadas' },
        { id: 'q2', prompt: 'Enrique duerme cuatro horas todos los días. No duerme ___ horas.', options: ['demasiadas', 'suficientes'], correct: 'suficientes' },
        { id: 'q3', prompt: 'Inés bebe litro y medio de agua al día. Bebe ___ agua.', options: ['demasiada', 'suficiente'], correct: 'suficiente' },
        { id: 'q4', prompt: 'Como cinco plátanos al día. Como ___ plátanos.', options: ['demasiados', 'suficientes'], correct: 'demasiados' },
        { id: 'q5', prompt: 'Tenemos una patata para hacer una tortilla para cuatro. No tenemos ___ patatas.', options: ['demasiadas', 'suficientes'], correct: 'suficientes' },
        { id: 'q6', prompt: 'Gabriel come medio kilo de carne todos los días. Come ___ carne.', options: ['demasiada', 'suficiente'], correct: 'demasiada' },
      ],
    },

    {
      id: '22.6',
      title: 'mucho / poco / demasiado / suficiente / bastante',
      type: 'fill',
      instructions: 'Дайте подходящий ответ. В скобках указан смысл.',
      questions: [
        { id: 'q1', prompt: '—¿Tienes hambre? —No tengo ___ . Puedo esperar. (мало)',                 correct: 'mucha' , explanation: '«No tengo mucha» = «мало».' },
        { id: 'q2', prompt: '—¿Cuántas manzanas tienes? —Tres. Son ___ para una tarta. (достаточно)',  correct: ['suficientes', 'bastantes'] },
        { id: 'q3', prompt: '—¿Cuánto dinero tienes? —Veinticinco euros. Es ___ . Las entradas cuestan veinte. (хватает)', correct: ['suficiente', 'bastante'] },
        { id: 'q4', prompt: '—¿Cuánta gente hay? —No hay ___. Unas diez personas. (много)',              correct: 'mucha' , explanation: 'Отрицание «no … mucha» = «не очень много».' },
        { id: 'q5', prompt: '—¿Cuántas horas duermes al día? —___ . Cinco o seis. Tengo que estudiar. (мало)', correct: 'Pocas' },
        { id: 'q6', prompt: '—¿Crees que veinte bocadillos serán suficientes? —Son ___ . Solo somos tres. (слишком)', correct: 'demasiados' },
      ],
    },

    {
      id: '22.7',
      title: 'Упорядочите по убыванию количества',
      type: 'match',
      instructions: 'Подберите место в шкале «больше → меньше».',
      pool: ['mucho', 'bastante', 'suficiente', 'poco', 'demasiado'],
      questions: [
        { id: 'q1', prompt: 'Сверх меры (1-е место).',                       correct: 'demasiado' },
        { id: 'q2', prompt: 'Большое количество (2-е место).',                correct: 'mucho' },
        { id: 'q3', prompt: 'Заметное, но не много (3-е место).',              correct: 'bastante' },
        { id: 'q4', prompt: 'Ровно столько, сколько нужно (4-е место).',        correct: 'suficiente' },
        { id: 'q5', prompt: 'Очень небольшое количество (5-е место).',          correct: 'poco' },
      ],
    },

    {
      id: '22.8',
      title: 'Без существительного',
      type: 'fill',
      instructions: 'Перепишите ответ, убрав повтор существительного. Согласуйте слово по роду/числу с подразумеваемым именем.',
      questions: [
        { id: 'q1', prompt: '—¿Cuántas amigas tienes? —Tengo <em>muchas amigas</em>. → Tengo ___ .',         correct: 'muchas' },
        { id: 'q2', prompt: '—¿Hay agua? —Sí, hay <em>suficiente agua</em>. → Sí, hay ___ .',                  correct: ['suficiente', 'bastante'] },
        { id: 'q3', prompt: '—¿Tienes tiempo? —Tengo <em>poco tiempo</em>. → Tengo ___ .',                       correct: 'poco' },
        { id: 'q4', prompt: '—¿Quedan patatas? —Sí, quedan <em>bastantes patatas</em>. → Sí, quedan ___ .',       correct: ['bastantes', 'suficientes'] },
        { id: 'q5', prompt: '—¿Comes chocolate? —Sí, como <em>demasiado chocolate</em>. → Sí, como ___ .',         correct: 'demasiado' },
      ],
    },

    {
      id: '22.9',
      title: 'Найдите ошибку согласования',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой согласования по роду или числу.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['mucha gente', 'mucho hambre', 'mucha hambre', 'mucha agua'], correct: 'mucho hambre', explanation: '<em>hambre</em> — ж. р., поэтому <em>mucha hambre</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['pocas amigas', 'pocos años', 'pocas tiempo', 'poca leche'], correct: 'pocas tiempo', explanation: '<em>tiempo</em> — м. р., ед. ч.: <em>poco tiempo</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['demasiados pasteles', 'demasiado azúcar', 'demasiada sal', 'demasiados agua'], correct: 'demasiados agua', explanation: '<em>agua</em> — ж. р., ед. ч.: <em>demasiada agua</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['suficientes huevos', 'suficiente leche', 'suficientas patatas', 'suficiente pan'], correct: 'suficientas patatas', explanation: 'У <em>suficiente</em> нет формы <em>-a</em>: <em>suficientes patatas</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['bastantes coches', 'bastante gente', 'bastantas amigas', 'bastante frío'], correct: 'bastantas amigas', explanation: 'У <em>bastante</em> нет формы <em>-a</em>: <em>bastantes amigas</em>.' },
      ],
    },

    {
      id: '22.10',
      title: 'Опишите картинку (количеством)',
      type: 'fill',
      instructions: 'Подберите количественное слово (с существительным во мн. ч. или ед. ч. неисчисл.). Образец: «много машин на улице» → <em>muchos coches</em>.',
      questions: [
        { id: 'q1', prompt: 'много деревьев →',                         correct: ['muchos árboles', 'bastantes árboles'] },
        { id: 'q2', prompt: 'мало воды →',                                correct: ['poca agua'] },
        { id: 'q3', prompt: 'слишком много еды →',                        correct: ['demasiada comida'] },
        { id: 'q4', prompt: 'достаточно людей →',                          correct: ['suficiente gente', 'bastante gente'] },
        { id: 'q5', prompt: 'мало машин →',                                correct: ['pocos coches'] },
        { id: 'q6', prompt: 'много снега →',                                correct: ['mucha nieve', 'bastante nieve'] },
      ],
    },

    {
      id: '22.11',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Послушайте и запишите услышанное (диакритика обязательна).',
      questions: [
        { id: 'q1', prompt: '', audio: 'No tengo mucha hambre.',                       correct: ['No tengo mucha hambre.', 'No tengo mucha hambre'] },
        { id: 'q2', prompt: '', audio: 'Hay demasiada gente en la plaza.',              correct: ['Hay demasiada gente en la plaza.', 'Hay demasiada gente en la plaza'] },
        { id: 'q3', prompt: '', audio: 'Tenemos suficientes patatas para hoy.',         correct: ['Tenemos suficientes patatas para hoy.', 'Tenemos suficientes patatas para hoy'] },
        { id: 'q4', prompt: '', audio: 'Marcela tiene pocas amigas.',                    correct: ['Marcela tiene pocas amigas.', 'Marcela tiene pocas amigas'] },
        { id: 'q5', prompt: '', audio: 'Hace bastante frío hoy.',                        correct: ['Hace bastante frío hoy.', 'Hace bastante frío hoy'] },
        { id: 'q6', prompt: '', audio: 'Como demasiados pasteles de chocolate.',          correct: ['Como demasiados pasteles de chocolate.', 'Como demasiados pasteles de chocolate'] },
      ],
    },

    {
      id: '22.12',
      title: 'Переведите на испанский',
      type: 'fill',
      instructions: 'Запишите перевод фразы.',
      questions: [
        { id: 'q1', prompt: '«У меня мало времени.»',                                 correct: ['Tengo poco tiempo.', 'Tengo poco tiempo'] },
        { id: 'q2', prompt: '«В супе слишком много соли.»',                           correct: ['Hay demasiada sal en la sopa.', 'La sopa tiene demasiada sal.'] },
        { id: 'q3', prompt: '«У нас достаточно денег на отпуск.» (vacaciones)',        correct: ['Tenemos suficiente dinero para las vacaciones.', 'Tenemos bastante dinero para las vacaciones.'] },
        { id: 'q4', prompt: '«Дети мало читают.»',                                       correct: ['Los niños leen poco.', 'Los niños leen poco'] },
        { id: 'q5', prompt: '«Сегодня довольно холодно.»',                                correct: ['Hoy hace bastante frío.', 'Hace bastante frío hoy.'] },
      ],
    },
  ],
};
