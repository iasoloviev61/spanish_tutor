// ============================================================
// Unidad 37 — Pronombres de complemento indirecto y directo
// se lo, te lo, me la, nos los…
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u37 = {
  id: 'u37',
  number: 37,
  title: { es: 'Se lo he dado. Te lo he dado', topic: 'Pronombres de complemento indirecto y directo' },
  topicRu: 'Местоимения косвенного и прямого дополнения вместе',

  theory: [
    {
      type: 'rule',
      es: 'A veces hay <strong>dos complementos</strong> en la frase: un <em>complemento directo</em> (CD, «что?») y un <em>complemento indirecto</em> (CI, «кому?»). Cuando se sustituyen ambos por pronombres, el orden es siempre: <strong>CI + CD + verbo</strong>.',
      ru: 'Если в предложении есть и прямое («что?»), и косвенное («кому?») дополнение, обычно их сразу заменяют местоимениями. Порядок всегда один: <strong>сначала CI, потом CD, потом глагол</strong>.',
      examples: [
        { es: '¿<strong>Le</strong> has dado <em>tu teléfono</em> a Rafa? → ¿<strong>Se lo</strong> has dado?', ru: 'Ты дал свой телефон Рафе? → Ты ему его дал? (CI <em>se</em> + CD <em>lo</em> + verbo).' },
        { es: '¿<strong>Les</strong> has presentado <em>tu novia</em> a tus padres? — No, no <strong>se la</strong> he presentado.', ru: 'Ты познакомил родителей со своей девушкой? — Нет, не познакомил.' },
        { es: 'Esta corbata <strong>me la</strong> regaló Andrea.', ru: 'Этот галстук мне подарила Андреа.' },
      ],
    },
    {
      type: 'heading',
      text: 'Формы и порядок',
    },
    {
      type: 'table',
      caption: 'Pronombres CI + CD',
      columns: ['CI (кому?)', 'CD (что?)'],
      colClasses: ['col-pattern', 'col-pattern'],
      rows: [
        ['<em>me</em> (a mí)',                                       '<em>lo</em> (м. р. ед. ч.)'],
        ['<em>te</em> (a ti)',                                       '<em>la</em> (ж. р. ед. ч.)'],
        ['<em>se</em> (a usted, a él, a ella, a una cosa)',           '<em>los</em> (м. р. мн. ч.)'],
        ['<em>nos</em> (a nosotros, a nosotras)',                     '<em>las</em> (ж. р. мн. ч.)'],
        ['<em>os</em> (a vosotros, a vosotras)',                       '—'],
        ['<em>se</em> (a ustedes, a ellos, a ellas, a unas cosas)',    '—'],
      ],
    },
    {
      type: 'atencion',
      es: 'Cuando van juntos un pronombre CI <em>le / les</em> y un pronombre CD <em>lo / la / los / las</em>, <strong>le / les se cambia por <em>se</em></strong>. <em><s>Le lo</s> he dado.</em> → <em>Se lo he dado.</em>',
      ru: 'Главное правило: «два <em>l-</em> подряд» в испанском не уживаются. Если рядом окажутся <em>le/les</em> (CI) и <em>lo/la/los/las</em> (CD) — <em>le/les</em> превращается в <strong><em>se</em></strong>. Поэтому к <em>usted, ustedes, él, ella, ellos, ellas</em> местоимение CI всегда выглядит как <em>se</em> (когда есть и CD).',
    },
    {
      type: 'heading',
      text: 'Когда нужны оба',
    },
    {
      type: 'rule',
      es: 'Se usa el pronombre CI <em>(me, te, se, nos, os)</em> <strong>además</strong> de la persona, incluso cuando esa persona se menciona por primera vez. Y se usa el pronombre CD <em>(lo, la, los, las)</em> cuando la cosa o persona-objeto ya se ha mencionado o aparece <em>al principio</em> de la frase.',
      ru: 'CI ставят <strong>всегда</strong> для людей — даже если адресат назван полностью (<em>a Pepe</em>): <em>Se lo has regalado a Pepe</em>. А CD ставят, когда сам предмет уже упоминался или вынесен в начало для акцента: <em>Esta corbata <strong>me la</strong> regaló Andrea</em>.',
      examples: [
        { es: '—¿Qué has hecho con el coche? ¿<strong>Se lo</strong> has regalado a Pepe? —No, <strong>se lo</strong> he vendido.', ru: 'Машина — CD (lo); Pepe — CI (se).' },
        { es: 'Esos libros <strong>se los</strong> regalé yo. (= a él)', ru: 'Книги вынесены вперёд → CD <em>los</em> + CI <em>se</em>.' },
      ],
    },
    {
      type: 'heading',
      text: 'a mí, a ti, a él… — для уточнения и эмфазы',
    },
    {
      type: 'rule',
      es: 'Como <em>se</em> sirve para muchas personas (a usted, a él, a ella, a ustedes, a ellos, a ellas), suele añadirse <em>a usted / a él / a ella…</em> para <strong>aclarar de quién se habla</strong> o para <strong>dar énfasis</strong>.',
      ru: 'Поскольку <em>se</em> покрывает разом «ему/ей/Вам/им», чаще обычного нужна расшифровка: <em>se lo ha enseñado <strong>a ella</strong></em>, <em>se lo ha enseñado <strong>a ustedes</strong></em>… Также как и для эмфазы: «<em>a mí</em> no me lo ha dado».',
      examples: [
        { es: '<strong>Se lo</strong> ha enseñado <em>a usted / a él / a ella / a ustedes / a ellos / a ellas</em>.', ru: 'Все эти переводы возможны — <em>a + персона</em> их разводит.' },
        { es: '—¿<strong>Te</strong> ha dado el dinero? —<em>A mí</em> no <strong>me lo</strong> ha dado.', ru: 'Эмфаза: «мне-то — не дал».' },
      ],
    },
  ],

  exercises: [
    {
      id: '37.1',
      title: 'Допишите ответ: CI + CD',
      type: 'fill',
      instructions: 'Допишите два местоимения через пробел (например, <code>se lo</code>). Помните: к <em>usted / él / ella / ustedes / ellos / ellas</em> CI всегда <em>se</em>.',
      questions: [
        { id: 'q1', prompt: '¿Quién te ha regalado esos bombones? — ___ ha regalado Anita.',                  correct: 'Me los', placeholder: 'Me los' },
        { id: 'q2', prompt: '¿Quién les ha prestado el dinero a tus padres? — ___ ha prestado Juan.',           correct: 'Se lo' },
        { id: 'q3', prompt: '¿Quién os ha enviado ese paquete? — ___ ha enviado mi tía Rosa.',                   correct: 'Nos lo' },
        { id: 'q4', prompt: '¿Quién me envía estas flores? — ___ envía Raúl.',                                    correct: 'Te las', explanation: 'Если спрашивают «мне», ответ — «тебе».' },
        { id: 'q5', prompt: '¿Quién le ha regalado esa corbata a Antonio? — ___ ha regalado su mujer.',           correct: 'Se la' },
        { id: 'q6', prompt: '¿Quién les ha enseñado el museo a ustedes? — ___ ha enseñado un guía turístico.',     correct: 'Nos lo', explanation: '«Нам показал», ответ от «нас».' },
      ],
    },

    {
      id: '37.2',
      title: 'Ответьте утвердительно или отрицательно',
      type: 'fill',
      instructions: 'Ответьте по образцу: <em>¿Te ha dado Pepe el regalo? → No, no me lo ha dado.</em>',
      questions: [
        { id: 'q1', prompt: '¿Os ha prestado Pablo el dinero? — Sí, →',                          correct: ['Sí, nos lo ha prestado.', 'sí, nos lo ha prestado.', 'Nos lo ha prestado.', 'nos lo ha prestado.'] },
        { id: 'q2', prompt: '¿Les ha presentado Sara su novio a sus padres? — No, →',             correct: ['No, no se lo ha presentado.', 'no, no se lo ha presentado.', 'No se lo ha presentado.'] },
        { id: 'q3', prompt: '¿Le ha enseñado Marta su casa a usted? — Sí, →',                      correct: ['Sí, me la ha enseñado.', 'sí, me la ha enseñado.', 'Me la ha enseñado.'] },
        { id: 'q4', prompt: '¿Les ha presentado Hugo sus amigos a sus padres? — Sí, →',             correct: ['Sí, se los ha presentado.', 'sí, se los ha presentado.', 'Se los ha presentado.'] },
        { id: 'q5', prompt: '¿Le ha vendido Jesús su coche a Antonia? — No, →',                     correct: ['No, no se lo ha vendido.', 'no, no se lo ha vendido.', 'No se lo ha vendido.'] },
        { id: 'q6', prompt: '¿Te ha traído Rita las entradas? — Sí, →',                              correct: ['Sí, me las ha traído.', 'sí, me las ha traído.', 'Me las ha traído.'] },
        { id: 'q7', prompt: '¿Os ha contado Marta su problema? — No, →',                              correct: ['No, no nos lo ha contado.', 'no, no nos lo ha contado.', 'No nos lo ha contado.'] },
      ],
    },

    {
      id: '37.3',
      title: 'Замените ОБА дополнения на местоимения',
      type: 'fill',
      instructions: 'Перепишите всё предложение, заменяя <em>предмет</em> и <em>адресата</em> на местоимения. Сохраняйте порядок CI + CD + verbo.',
      questions: [
        { id: 'q1', prompt: 'Este paraguas (a él) regaló Andrea. →',          correct: ['Se lo regaló Andrea.', 'Se lo regaló Andrea'] },
        { id: 'q2', prompt: 'Esta corbata (a mí) regaló mi novia. →',           correct: ['Me la regaló mi novia.', 'Me la regaló mi novia'] },
        { id: 'q3', prompt: 'Ese coche (a ellos) ha vendido un amigo. →',        correct: ['Se lo ha vendido un amigo.', 'Se lo ha vendido un amigo'] },
        { id: 'q4', prompt: 'Esa lámpara (a nosotros) ha regalado una tía de Alberto. →', correct: ['Nos la ha regalado una tía de Alberto.', 'Nos la ha regalado una tía de Alberto'] },
        { id: 'q5', prompt: 'Esas flores (a ella) ha traído su novio. →',          correct: ['Se las ha traído su novio.', 'Se las ha traído su novio'] },
        { id: 'q6', prompt: 'Este paquete (a usted) ha traído un mensajero. →',     correct: ['Se lo ha traído un mensajero.', 'Se lo ha traído un mensajero'] },
        { id: 'q7', prompt: 'Esos bombones (a ellas) ha comprado su hermano. →',     correct: ['Se los ha comprado su hermano.', 'Se los ha comprado su hermano'] },
        { id: 'q8', prompt: 'Este libro (a ti) ha traído Víctor. →',                  correct: ['Te lo ha traído Víctor.', 'Te lo ha traído Víctor'] },
        { id: 'q9', prompt: 'Esta carta (a mí) envía una amiga de Perú. →',           correct: ['Me la envía una amiga de Perú.', 'Me la envía una amiga de Perú'] },
        { id: 'q10', prompt: 'Estos helados (a vosotros) compro yo. →',                correct: ['Os los compro yo.', 'Os los compro yo'] },
      ],
    },

    {
      id: '37.4',
      title: 'Ответьте «no, … no me las han dado»',
      type: 'fill',
      instructions: 'Ответьте по образцу: <em>¿Te ha dado las entradas? → A mí no me las ha dado.</em>',
      questions: [
        { id: 'q1', prompt: '¿Le ha dado a usted el dinero? — No, →',           correct: ['A mí no me lo ha dado.', 'A mí no me lo ha dado'] },
        { id: 'q2', prompt: '¿Os ha dado las llaves? — No, →',                    correct: ['A nosotros no nos las ha dado.', 'A nosotros no nos las ha dado'] },
        { id: 'q3', prompt: '¿Me ha enviado el paquete? — No, →',                   correct: ['A ti no te lo ha enviado.', 'A ti no te lo ha enviado'] },
        { id: 'q4', prompt: '¿Nos han aprobado? — No, →',                            correct: ['A vosotros no os han aprobado.', 'A vosotros no os han aprobado', 'No, a vosotros no os han aprobado.'] },
        { id: 'q5', prompt: '¿La han aprobado a Teresa? — Sí, →',                     correct: ['A Teresa sí la han aprobado.', 'A Teresa sí la han aprobado', 'Sí, a Teresa la han aprobado.'] },
        { id: 'q6', prompt: '¿Lo han aprobado a Alfonso? — No, →',                     correct: ['A Alfonso no lo han aprobado.', 'A Alfonso no lo han aprobado'] },
      ],
    },

    {
      id: '37.5',
      title: 'le → se: где правило «двух l-»?',
      type: 'choice',
      instructions: 'Выберите верный вариант. Помните: рядом не могут стоять <em>le/les</em> и <em>lo/la/los/las</em> — CI становится <em>se</em>.',
      questions: [
        { id: 'q1', prompt: '¿La carta para Carlos? — Ya ___ he enviado.', options: ['le la', 'se la', 'la le'], correct: 'se la' },
        { id: 'q2', prompt: 'Mi madre ___ regalado un perfume. (= мне его)', options: ['me lo ha', 'lo me ha', 'le lo ha'], correct: 'me lo ha' },
        { id: 'q3', prompt: '¿Esos libros para los niños? — ___ he comprado yo.', options: ['Les los', 'Se los', 'Los les'], correct: 'Se los' },
        { id: 'q4', prompt: '¿La verdad? Pues ___ digo.', options: ['te la', 'la te', 'se la a ti'], correct: 'te la' },
        { id: 'q5', prompt: '¿Esa noticia para Pablo y Lola? — Ya ___ he contado.', options: ['les la', 'se la', 'la les'], correct: 'se la' },
        { id: 'q6', prompt: '¿El dinero? ¡___ devuelvo mañana, te lo prometo! (= тебе его)', options: ['te lo', 'lo te', 'se lo'], correct: 'te lo' },
      ],
    },

    {
      id: '37.6',
      title: 'Сопоставьте: «адресат + предмет» → пара местоимений',
      type: 'match',
      instructions: 'Подберите для каждой пары <em>(a кому, что)</em> правильную пару местоимений CI + CD.',
      pool: ['me lo', 'me la', 'te lo', 'te las', 'se lo', 'se la', 'se los', 'se las', 'nos lo', 'os los'],
      questions: [
        { id: 'q1', prompt: 'a mí, el coche',           correct: 'me lo' },
        { id: 'q2', prompt: 'a mí, la carta',            correct: 'me la' },
        { id: 'q3', prompt: 'a ti, el libro',             correct: 'te lo' },
        { id: 'q4', prompt: 'a ti, las entradas',         correct: 'te las' },
        { id: 'q5', prompt: 'a él, el regalo',             correct: 'se lo' },
        { id: 'q6', prompt: 'a ella, la corbata',           correct: 'se la' },
        { id: 'q7', prompt: 'a ellos, los discos',           correct: 'se los' },
        { id: 'q8', prompt: 'a ustedes, las flores',          correct: 'se las' },
        { id: 'q9', prompt: 'a nosotros, el paquete',          correct: 'nos lo' },
        { id: 'q10', prompt: 'a vosotros, los bombones',        correct: 'os los' },
      ],
    },

    {
      id: '37.7',
      title: 'Какие фразы корректны',
      type: 'multi',
      instructions: 'Отметьте все грамматически правильные варианты. Помните: <em>le lo / le la / les los / les las</em> — невозможно.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы верны?',
          options: [
            'Le lo he dado a Pedro.',
            'Se lo he dado a Pedro.',
            'Lo le he dado a Pedro.',
            'Te lo he dado.',
            'Lo te he dado.',
            'Me la ha regalado mi novio.',
            'La me ha regalado mi novio.',
            'Se las he comprado a mis hermanas.',
            'Les las he comprado a mis hermanas.',
          ],
          correct: [
            'Se lo he dado a Pedro.',
            'Te lo he dado.',
            'Me la ha regalado mi novio.',
            'Se las he comprado a mis hermanas.',
          ],
          explanation: 'Запреты: <em>le/les + lo/la/los/las</em> → меняем на <em>se</em>; и порядок всегда <strong>CI перед CD перед глаголом</strong>.',
        },
      ],
    },

    {
      id: '37.8',
      title: 'Перепишите со <em>se</em>',
      type: 'fill',
      instructions: 'В каждом предложении CI и CD дублируют друг друга — перепишите его правильно (l → se при необходимости).',
      questions: [
        { id: 'q1', prompt: '*Le lo he prestado al vecino. →',           correct: ['Se lo he prestado al vecino.', 'Se lo he prestado al vecino'] },
        { id: 'q2', prompt: '*Les la he enseñado a los niños. →',          correct: ['Se la he enseñado a los niños.', 'Se la he enseñado a los niños'] },
        { id: 'q3', prompt: '*Le los he regalado a mi tío. →',              correct: ['Se los he regalado a mi tío.', 'Se los he regalado a mi tío'] },
        { id: 'q4', prompt: '*Les las he comprado a mis primas. →',          correct: ['Se las he comprado a mis primas.', 'Se las he comprado a mis primas'] },
        { id: 'q5', prompt: '*Le lo digo a usted mañana. →',                  correct: ['Se lo digo a usted mañana.', 'Se lo digo a usted mañana'] },
      ],
    },

    {
      id: '37.9',
      title: 'Уточнение через «a + персона»',
      type: 'choice',
      instructions: 'Какой адресат скрывается за <em>se</em>? Выберите подходящее уточнение.',
      questions: [
        { id: 'q1', prompt: 'Se lo he dado <strong>a ___</strong> (мужчина-собеседник).',  options: ['ti', 'usted', 'mí'], correct: 'usted' },
        { id: 'q2', prompt: 'Se la he enseñado <strong>a ___</strong> (она).',                options: ['ella', 'ellos', 'él'], correct: 'ella' },
        { id: 'q3', prompt: 'Se los he comprado <strong>a ___</strong> (вы, мн.).',            options: ['ustedes', 'usted', 'vosotros'], correct: 'ustedes', explanation: 'К <em>vosotros</em> — <em>os los</em>, не <em>se los</em>.' },
        { id: 'q4', prompt: 'Se las regalé <strong>a ___</strong> (мн., мужчины).',             options: ['ellos', 'ellas', 'él'], correct: 'ellos' },
        { id: 'q5', prompt: 'Se la presté <strong>a ___</strong> (он).',                          options: ['él', 'ti', 'mí'], correct: 'él' },
      ],
    },

    {
      id: '37.10',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Послушайте и запишите фразу полностью, сохраняя порядок местоимений.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Se lo he dado a Pedro.',          correct: ['Se lo he dado a Pedro.', 'Se lo he dado a Pedro'] },
        { id: 'q2', prompt: '', audio: 'Me la regaló Andrea.',             correct: ['Me la regaló Andrea.', 'Me la regaló Andrea'] },
        { id: 'q3', prompt: '', audio: 'No, no se lo he prestado.',         correct: ['No, no se lo he prestado.', 'No, no se lo he prestado'] },
        { id: 'q4', prompt: '', audio: 'Te las traigo mañana.',             correct: ['Te las traigo mañana.', 'Te las traigo mañana'] },
        { id: 'q5', prompt: '', audio: 'A mí no me lo ha dado.',             correct: ['A mí no me lo ha dado.', 'A mí no me lo ha dado'] },
        { id: 'q6', prompt: '', audio: 'Se las he comprado a mis hermanas.', correct: ['Se las he comprado a mis hermanas.', 'Se las he comprado a mis hermanas'] },
      ],
    },

    {
      id: '37.11',
      title: 'Найдите фразу с ошибкой',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой в местоимениях.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Se lo he dado a usted.', 'Le lo he dado a usted.', 'Te lo he dado.', 'Me lo ha dado mi padre.'], correct: 'Le lo he dado a usted.', explanation: 'Не «le lo», а <em>se lo</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Me la ha regalado.', 'La me ha regalado.', 'Se la he regalado.', 'Te la he regalado.'], correct: 'La me ha regalado.', explanation: 'Порядок: CI перед CD.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Os los he comprado.', 'Nos los han comprado.', 'Se los he comprado a ellos.', 'Les los he comprado a ellos.'], correct: 'Les los he comprado a ellos.', explanation: '<em>les + los</em> → <em>se los</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Se la presté a Marta.', 'Se la presté a las chicas.', 'Le la presté a Marta.', 'Te la presté a ti.'], correct: 'Le la presté a Marta.', explanation: '<em>le + la</em> → <em>se la</em>.' },
      ],
    },

    {
      id: '37.12',
      title: 'Дополните диалог',
      type: 'fill',
      instructions: 'Допишите парой местоимений (CI + CD).',
      questions: [
        { id: 'q1', prompt: '—¿Has visto el reloj de Marcos? —Sí, ___ regaló su mujer. (ему его)',  correct: 'se lo' },
        { id: 'q2', prompt: '—¿Estas flores son para mí? —Sí, ___ ha enviado Raúl.',                  correct: 'te las' },
        { id: 'q3', prompt: '—¿Por qué no llevas tu bicicleta? —___ he prestado a Lucas. (ему её)',     correct: 'Se la' },
        { id: 'q4', prompt: '—¿Vais a comprar entradas a los niños? —Sí, ___ compraremos mañana.',      correct: 'se las' },
        { id: 'q5', prompt: '—¿El paquete que esperabas? —Ya ___ ha traído el cartero. (мне его)',       correct: 'me lo' },
        { id: 'q6', prompt: '—¿Habéis dicho la verdad a la profesora? —Sí, ya ___ hemos dicho.',          correct: 'se la' },
      ],
    },
  ],
};
