// ============================================================
// Unidad 6 — El artículo determinado (el, la, los, las)
// Когда и как используется определённый артикль.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u06 = {
  id: 'u06',
  number: 6,
  title: { es: 'el, la, los, las', topic: 'El artículo determinado' },
  topicRu: 'Определённый артикль и его базовые формы',

  theory: [
    {
      type: 'rule',
      es: 'El <strong>artículo determinado</strong> (<em>el, la, los, las</em>) se usa cuando hablamos de algo <em>conocido</em>, <em>único</em> o <em>específico</em>; también para hablar de algo <em>en sentido general</em>.',
      ru: '<strong>Определённый артикль</strong> ставится перед существительным, когда говорящий и слушающий уже знают, о чём речь, или когда предмет <em>уникален</em>, или когда речь идёт о категории <em>в целом</em>.',
      examples: [
        { es: 'el padre, la madre', ru: 'отец, мать (известные)' },
        { es: 'la capital de Argentina', ru: 'столица Аргентины (одна)' },
        { es: 'El tabaco es malo.', ru: 'Табак вреден. (вообще)' },
      ],
    },
    {
      type: 'heading',
      text: 'Формы',
    },
    {
      type: 'table',
      caption: 'Артикль по роду и числу',
      columns: ['', 'Masculino', 'Femenino'],
      colClasses: ['col-pattern', 'col-pattern', 'col-pattern'],
      rows: [
        ['<strong>Singular</strong>', '<strong>el</strong> padre, <strong>el</strong> libro', '<strong>la</strong> madre, <strong>la</strong> hoja'],
        ['<strong>Plural</strong>', '<strong>los</strong> padres, <strong>los</strong> libros', '<strong>las</strong> madres, <strong>las</strong> hojas'],
      ],
    },
    {
      type: 'atencion',
      es: 'Ante nombres femeninos en singular que empiezan por <em>á-</em> o <em>ha-</em> tónica, se usa <strong>el</strong> (no <em>la</em>): <em>el aula, el agua, el hacha, el águila</em>. En plural vuelve <em>las</em>: <em>las aulas, las hachas, las águilas</em>.',
      ru: 'Перед существительными женского рода в единственном числе, начинающимися с ударного <em>á-</em> или <em>ha-</em>, ставится <strong>el</strong> (а не <em>la</em>) — это сделано, чтобы не сливались два «а». Во множественном — обычное <em>las</em>.',
    },
    {
      type: 'heading',
      text: 'Слияния (contracciones)',
    },
    {
      type: 'table',
      caption: 'Когда a / de встречаются с el',
      columns: ['Сочетание', 'Слитная форма', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<em>a + el</em>', '<strong>al</strong>', '<em>Voy <strong>al</strong> cine.</em>'],
        ['<em>de + el</em>', '<strong>del</strong>', '<em>El hijo <strong>del</strong> profesor.</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Слияние работает только с артиклем-мужским <em>el</em>. С местоимением <em>él</em> или с другими формами артикля — нет: <em>a él, de la, de los, de las</em>.',
      ru: '<em>a + él</em> (личное местоимение «ему/к нему») пишется раздельно. <em>al / del</em> только когда <em>el</em> = артикль.',
    },
    {
      type: 'heading',
      text: 'Когда ставим определённый артикль',
    },
    {
      type: 'rule',
      es: '1) <strong>Único</strong> en su clase o en la situación.',
      ru: '<strong>Уникальные</strong> объекты — в принципе единственные или единственные в данной ситуации.',
      examples: [
        { es: 'La madre de Antonio es policía.', ru: 'Мать Антонио — полицейский. (мать у него одна)' },
        { es: '¿Quién es el presidente de Brasil?', ru: 'Кто президент Бразилии? (один)' },
      ],
    },
    {
      type: 'rule',
      es: '2) <strong>Específico</strong>: ya sabemos de qué cosa o persona hablamos.',
      ru: '<strong>Конкретный, известный</strong> объект — собеседник понимает, какой именно.',
      examples: [
        { es: 'Quiero ver al director.', ru: 'Я хочу видеть директора. (этого банка/конторы)' },
        { es: 'Cierra la puerta, por favor.', ru: 'Закрой дверь, пожалуйста. (ту, что здесь)' },
      ],
    },
    {
      type: 'rule',
      es: '3) <strong>Sentido general</strong>: hablamos de toda la categoría.',
      ru: '<strong>В обобщающем значении</strong> — обо всей категории целиком.',
      examples: [
        { es: 'El tabaco es malo para la salud.', ru: 'Табак вреден для здоровья. (любой табак)' },
        { es: 'Los chilenos hablan español.', ru: 'Чилийцы говорят на испанском. (все чилийцы)' },
      ],
    },
  ],

  exercises: [
    {
      id: '6.1',
      title: 'Поставьте el / la / los / las',
      type: 'fill',
      instructions: 'Запишите подходящий артикль перед существительным.',
      questions: [
        { id: 'q1',  prompt: '___ casa',         correct: 'la' },
        { id: 'q2',  prompt: '___ médico',       correct: 'el' },
        { id: 'q3',  prompt: '___ naranjas',     correct: 'las' },
        { id: 'q4',  prompt: '___ coche',        correct: 'el' },
        { id: 'q5',  prompt: '___ habitación',   correct: 'la' },
        { id: 'q6',  prompt: '___ águila',       correct: 'el', explanation: '<em>águila</em> — femenino, но начинается с ударного <em>á-</em>, поэтому <em>el águila</em>; во мн. — <em>las águilas</em>.' },
        { id: 'q7',  prompt: '___ pantalones',   correct: 'los', explanation: '<em>pantalones</em> — pluralia tantum, мужской.' },
        { id: 'q8',  prompt: '___ aula',         correct: 'el', explanation: 'Femenino + ударное <em>a-</em> → <em>el aula</em>.' },
        { id: 'q9',  prompt: '___ sillas',       correct: 'las' },
        { id: 'q10', prompt: '___ lápices',      correct: 'los' },
        { id: 'q11', prompt: '___ tijeras',      correct: 'las' },
        { id: 'q12', prompt: '___ profesor',     correct: 'el' },
        { id: 'q13', prompt: '___ perro',        correct: 'el' },
        { id: 'q14', prompt: '___ hermana',      correct: 'la' },
        { id: 'q15', prompt: '___ alumnos',      correct: 'los' },
      ],
    },

    {
      id: '6.2',
      title: 'Слияние al / del и формы a la / de la',
      type: 'fill',
      instructions: 'Поставьте <em>al</em>, <em>del</em>, <em>a la</em>, <em>de la</em>, <em>a los</em>, <em>de los</em>, <em>a las</em>, <em>de las</em>.',
      questions: [
        { id: 'q1',  prompt: 'Voy ___ cine con mis amigos.',          correct: 'al' },
        { id: 'q2',  prompt: 'Vengo ___ trabajo cansada.',             correct: 'del' },
        { id: 'q3',  prompt: 'El libro es ___ profesora.',              correct: 'de la' },
        { id: 'q4',  prompt: 'Hablo ___ chicos de mi clase.',           correct: 'a los' },
        { id: 'q5',  prompt: 'Llego ___ universidad a las ocho.',        correct: 'a la' },
        { id: 'q6',  prompt: 'Es la madre ___ niño.',                    correct: 'del' },
        { id: 'q7',  prompt: 'Vamos ___ playa el sábado.',               correct: 'a la' },
        { id: 'q8',  prompt: 'Es el regalo ___ abuelos.',                correct: 'de los' },
        { id: 'q9',  prompt: 'Conozco ___ alcalde de tu pueblo.',        correct: 'al', explanation: 'Слитное <em>al</em> с артиклем-мужским <em>el</em>.' },
        { id: 'q10', prompt: 'Me acuerdo ___ chicas francesas.',         correct: 'de las' },
      ],
    },

    {
      id: '6.3',
      title: 'Какое из правил применилось?',
      type: 'choice',
      instructions: 'У определённого артикля в каждой фразе свой смысл. Выберите подходящее объяснение.',
      questions: [
        { id: 'q1', prompt: '<em>El presidente de Francia visita España.</em>', options: ['уникальный', 'конкретный', 'общий смысл'], correct: 'уникальный' },
        { id: 'q2', prompt: '<em>Cierra la ventana, por favor.</em>',            options: ['уникальный', 'конкретный', 'общий смысл'], correct: 'конкретный', explanation: 'Та, на которую указывают — известная собеседнику.' },
        { id: 'q3', prompt: '<em>Los gatos son independientes.</em>',            options: ['уникальный', 'конкретный', 'общий смысл'], correct: 'общий смысл' },
        { id: 'q4', prompt: '<em>Buenos Aires es la capital de Argentina.</em>', options: ['уникальный', 'конкретный', 'общий смысл'], correct: 'уникальный' },
        { id: 'q5', prompt: '<em>El café por la mañana es perfecto.</em>',       options: ['уникальный', 'конкретный', 'общий смысл'], correct: 'общий смысл', explanation: 'Кофе как класс напитка.' },
        { id: 'q6', prompt: '<em>Llama al doctor que te recetó las pastillas.</em>', options: ['уникальный', 'конкретный', 'общий смысл'], correct: 'конкретный' },
        { id: 'q7', prompt: '<em>El sol sale por el este.</em>',                  options: ['уникальный', 'конкретный', 'общий смысл'], correct: 'уникальный' },
      ],
    },

    {
      id: '6.4',
      title: '«Женское слово на á-/ha-»: какой артикль?',
      type: 'multi',
      instructions: 'Отметьте все слова, которые в единственном числе берут <em>el</em> вместо <em>la</em>.',
      questions: [
        {
          id: 'q1',
          prompt: 'Выберите слова, идущие с <em>el</em> в singular:',
          options: ['agua', 'arena', 'aula', 'amiga', 'hacha', 'habitación', 'águila', 'alma'],
          correct: ['agua', 'aula', 'hacha', 'águila', 'alma'],
          explanation: '<em>arena, amiga, habitación</em> — femenino, но <em>a-</em> безударное, поэтому обычное <em>la</em>. Слова с ударным <em>á-/ha-</em>: <em>el agua, el aula, el hacha, el águila, el alma</em>.',
        },
      ],
    },

    {
      id: '6.5',
      title: 'Семья: восполните родственные роли с артиклем',
      type: 'fill',
      instructions: 'У Анны: муж — Пабло, дети — Хуан и София, родители — Хосе и Кармен. Ответ — артикль (<em>el / la / los / las</em>).',
      questions: [
        { id: 'q1', prompt: 'Pablo es ___ marido de Ana.',           correct: 'el' },
        { id: 'q2', prompt: 'Juan y Sofía son ___ hijos de Ana.',     correct: 'los' },
        { id: 'q3', prompt: 'José es ___ padre de Ana.',               correct: 'el' },
        { id: 'q4', prompt: 'Carmen es ___ madre de Ana.',             correct: 'la' },
        { id: 'q5', prompt: 'Sofía es ___ hija menor.',                 correct: 'la' },
        { id: 'q6', prompt: 'José y Carmen son ___ abuelos de Sofía.',  correct: 'los' },
        { id: 'q7', prompt: 'Ana es ___ mujer de Pablo.',               correct: 'la' },
        { id: 'q8', prompt: 'Juan es ___ hermano de Sofía.',            correct: 'el' },
      ],
    },

    {
      id: '6.6',
      title: 'Восполните маленький текст',
      type: 'fill',
      instructions: 'Поставьте артикли (<em>el / la / los / las / al / del</em>) или <code>—</code>, если артикль не нужен. Если нужно два слова — пишите через запятую и пробел.',
      questions: [
        { id: 'q1', prompt: 'Mi padre es ___ médico ___ hospital central.',   correct: ['—, del', '— del'], placeholder: '—, del', explanation: 'После <em>ser</em> + профессия — без артикля; <em>de + el</em> = <em>del</em>.' },
        { id: 'q2', prompt: '___ niños van ___ colegio en autobús.',          correct: ['Los, al', 'Los al'], placeholder: 'Los, al' },
        { id: 'q3', prompt: 'Necesito ___ agua, por favor.',                   correct: 'el',   explanation: '<em>el agua</em> — femenino, но <em>a-</em> ударное.' },
        { id: 'q4', prompt: '___ chilenos hablan español muy rápido.',          correct: 'Los',  explanation: 'В общем смысле — артикль.' },
        { id: 'q5', prompt: 'Vamos ___ playa todos ___ sábados.',                correct: ['a la, los', 'a la los'], placeholder: 'a la, los' },
      ],
    },

    {
      id: '6.7',
      title: 'Сопоставьте слово и артикль',
      type: 'match',
      instructions: 'Подберите верный артикль для каждого слова.',
      pool: ['el', 'la', 'los', 'las'],
      questions: [
        { id: 'q1', prompt: '<em>aula</em>',          correct: 'el' },
        { id: 'q2', prompt: '<em>pantalones</em>',    correct: 'los' },
        { id: 'q3', prompt: '<em>tijeras</em>',       correct: 'las' },
        { id: 'q4', prompt: '<em>habitación</em>',    correct: 'la' },
        { id: 'q5', prompt: '<em>águilas</em>',       correct: 'las' },
        { id: 'q6', prompt: '<em>profesor</em>',      correct: 'el' },
        { id: 'q7', prompt: '<em>amigas</em>',        correct: 'las' },
        { id: 'q8', prompt: '<em>alma</em>',          correct: 'el' },
      ],
    },

    {
      id: '6.8',
      title: 'В общем смысле',
      type: 'fill',
      instructions: 'Поставьте определённый артикль в начале фразы (общий смысл — нечто вообще). Сохраняйте заглавную букву.',
      questions: [
        { id: 'q1', prompt: '___ niños necesitan dormir mucho.',           correct: 'Los' },
        { id: 'q2', prompt: '___ azúcar es mala para los dientes.',         correct: 'El' },
        { id: 'q3', prompt: '___ vida es bella.',                            correct: 'La' },
        { id: 'q4', prompt: '___ amor todo lo puede.',                       correct: 'El' },
        { id: 'q5', prompt: '___ matemáticas son útiles.',                   correct: 'Las' },
        { id: 'q6', prompt: '___ ejercicio físico mejora el ánimo.',          correct: 'El' },
      ],
    },

    {
      id: '6.9',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой артикля.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['el agua', 'la agua', 'las aguas', 'el águila'],                       correct: 'la agua',         explanation: 'Перед ударным <em>a-</em> в singular — <em>el</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Voy a el cine.', 'Voy al cine.', 'Voy a la playa.', 'Voy a los toros.'], correct: 'Voy a el cine.', explanation: '<em>a + el = al</em>, обязательно слитно.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['el problema', 'la mano', 'la profesor', 'el día'],                     correct: 'la profesor',     explanation: 'Должно быть <em>la profesora</em> или <em>el profesor</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['las aulas', 'el aula', 'la aulas', 'una aula'],                         correct: 'la aulas',        explanation: 'Артикль и существительное должны согласовываться по числу.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Es de el padre.', 'Es del padre.', 'Es de la madre.', 'Es de los abuelos.'], correct: 'Es de el padre.', explanation: '<em>de + el = del</em>.' },
      ],
    },

    {
      id: '6.10',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите услышанное полностью, со всеми артиклями и слияниями.',
      questions: [
        { id: 'q1', prompt: '', audio: 'el águila vuela alto',           correct: ['el águila vuela alto', 'el águila vuela alto.'] },
        { id: 'q2', prompt: '', audio: 'voy al cine con los amigos',     correct: ['voy al cine con los amigos', 'voy al cine con los amigos.'] },
        { id: 'q3', prompt: '', audio: 'la luz de la habitación',        correct: ['la luz de la habitación', 'la luz de la habitación.'] },
        { id: 'q4', prompt: '', audio: 'los niños comen las naranjas',    correct: ['los niños comen las naranjas', 'los niños comen las naranjas.'] },
        { id: 'q5', prompt: '', audio: 'el padre del profesor',           correct: ['el padre del profesor', 'el padre del profesor.'] },
      ],
    },

    {
      id: '6.11',
      title: 'Перепишите без ошибок',
      type: 'fill',
      instructions: 'Перепишите фразу с правильными артиклями и слияниями.',
      questions: [
        { id: 'q1', prompt: '<em>Voy a el médico mañana.</em> →',           correct: ['Voy al médico mañana.', 'Voy al médico mañana'] },
        { id: 'q2', prompt: '<em>La agua está fría.</em> →',                  correct: ['El agua está fría.', 'El agua está fría'] },
        { id: 'q3', prompt: '<em>Los lápices son de el alumno.</em> →',       correct: ['Los lápices son del alumno.', 'Los lápices son del alumno'] },
        { id: 'q4', prompt: '<em>El aulas son grandes.</em> →',                correct: ['Las aulas son grandes.', 'Las aulas son grandes'], explanation: 'В plural возвращается обычное <em>las</em>.' },
        { id: 'q5', prompt: '<em>Hablo con el madre de Lucía.</em> →',         correct: ['Hablo con la madre de Lucía.', 'Hablo con la madre de Lucía'] },
      ],
    },
  ],
};
