// ============================================================
// Unidad 61 — Pretérito perfecto de indicativo (2)
// «He viajado mucho» — опыт за всю жизнь, последствия в настоящем,
// ya / todavía no.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u61 = {
  id: 'u61',
  number: 61,
  title: { es: 'He viajado mucho', topic: 'Pretérito perfecto de indicativo (2)' },
  topicRu: 'Перфект для опыта, последствий и ya / todavía no',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'El <strong>pretérito perfecto</strong> sirve para hablar de <strong>experiencias</strong> de la vida sin precisar cuándo ocurrieron. Informa de lo que se ha hecho <em>hasta ahora</em>.',
      ru: '<strong>Перфект описывает опыт</strong> человека за всю его жизнь — без указания, когда именно. Отвечает на вопрос «что я успел / повидал к этому моменту?».',
      examples: [
        { es: 'He viajado por todo el mundo.', ru: 'Я объездил весь мир.' },
        { es: 'He sido actriz.', ru: 'Я была актрисой (в своей жизни).' },
        { es: 'Nunca he probado el sushi.', ru: 'Я никогда не пробовал суши.' },
      ],
    },
    {
      type: 'heading',
      text: 'Маркеры опыта',
    },
    {
      type: 'table',
      caption: 'Типичные слова с perfecto-опытом',
      columns: ['Маркер', 'Смысл', 'Пример'],
      colClasses: ['col-pattern', 'col-result', 'col-ex'],
      rows: [
        ['<strong>alguna vez</strong>',  'хоть раз',          '<em>¿Has comido alguna vez paella?</em>'],
        ['<strong>nunca</strong>',        'ни разу',            '<em>Nunca he estado en África.</em>'],
        ['<strong>hasta ahora</strong>',   'до сих пор',          '<em>Hasta ahora no hemos tenido problemas.</em>'],
        ['<strong>en mi vida</strong>',     'за всю жизнь',         '<em>En mi vida he visto algo igual.</em>'],
        ['<strong>varias veces</strong>',     '(не) сколько раз',       '<em>He visitado Roma varias veces.</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'También se usa el pretérito perfecto para acciones pasadas <strong>con consecuencias en el presente</strong>: la causa está en el pasado, el efecto se nota ahora.',
      ru: 'Перфектом передаём <strong>прошедшее с последствиями в настоящем</strong>: что-то случилось — и поэтому сейчас вот так.',
      examples: [
        { es: 'No puedo correr: me he roto una pierna.', ru: 'Не могу бегать: сломал ногу.' },
        { es: 'No he dormido bien y estoy cansado.', ru: 'Я плохо спал и теперь устал.' },
        { es: 'Llegas tarde porque no ha sonado el despertador.', ru: 'Опаздываешь, потому что не прозвенел будильник.' },
      ],
    },
    {
      type: 'heading',
      text: 'ya / todavía no',
    },
    {
      type: 'rule',
      es: '<strong>ya</strong> indica (o pregunta si) una acción <strong>ya se ha realizado</strong> antes de ahora. <strong>todavía no</strong> indica que <strong>aún no</strong> se ha realizado.',
      ru: '<strong>ya</strong> = «уже» (действие совершилось к моменту разговора). <strong>todavía no</strong> = «ещё не». Оба слова обычно стоят перед <em>haber + participio</em>, но <em>ya</em> может уходить и в конец.',
      examples: [
        { es: '¿Has acabado ya el curso?', ru: 'Ты уже закончил курс?' },
        { es: 'Ya he terminado el cuadro.', ru: 'Я уже закончил картину.' },
        { es: '—¿Te ha gustado el libro? —Todavía no lo he leído.', ru: '— Тебе понравилась книга? — Я её ещё не читал.' },
        { es: 'Por fin han acabado las clases.', ru: 'Наконец-то закончились занятия.' },
      ],
    },
    {
      type: 'table',
      caption: 'Контраст ya / todavía no',
      columns: ['Утверждение', 'Отрицание'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>Ya he comprado el regalo.</em>',          '<em>Todavía no he comprado el regalo.</em>'],
        ['<em>Marta ya ha llegado.</em>',                 '<em>Marta todavía no ha llegado.</em>'],
        ['<em>¿Has visto ya la película?</em>',             '<em>—No, todavía no la he visto.</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'En muchas zonas de América Latina y de España (Galicia, Asturias, Canarias) se usa el <strong>pretérito indefinido</strong> también para experiencias y resultados: <em>¿Comiste alguna vez paella?</em> = <em>¿Has comido alguna vez paella?</em>',
      ru: 'В большей части Латинской Америки (а также в Галисии, Астурии и на Канарах) то же значение опыта/результата чаще передают через <strong>indefinido</strong>: <em>¿Comiste alguna vez paella?</em> вместо <em>¿Has comido…?</em>',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '61.1',
      title: 'Опыт жизни: ¿Qué ha hecho?',
      type: 'fill',
      instructions: 'Поставьте глагол в perfecto, сохраняя порядок слов.',
      questions: [
        { id: 'q1', prompt: 'Ana (estar) ___ en Uruguay.',                     correct: ['ha estado'] },
        { id: 'q2', prompt: 'Ana (escribir) ___ un libro.',                     correct: ['ha escrito'], explanation: '<em>escribir → escrito</em> (нерегулярное причастие).' },
        { id: 'q3', prompt: 'Ana (conocer) ___ a personajes famosos.',           correct: ['ha conocido'] },
        { id: 'q4', prompt: 'Ana (vivir) ___ en Chile.',                          correct: ['ha vivido'] },
        { id: 'q5', prompt: 'Ana (trabajar) ___ en un hospital.',                  correct: ['ha trabajado'] },
        { id: 'q6', prompt: 'Ana (tener) ___ cinco hijos.',                          correct: ['ha tenido'] },
      ],
    },

    {
      id: '61.2',
      title: 'alguna vez / nunca',
      type: 'fill',
      instructions: 'Соберите фразу из элементов; глагол — в perfecto.',
      questions: [
        { id: 'q1', prompt: 'Reinaldo / estar / nunca / en África →',                          correct: ['Reinaldo no ha estado nunca en África.', 'Reinaldo no ha estado nunca en África'] },
        { id: 'q2', prompt: '¿ustedes / comer / alguna vez / tortilla? →',                       correct: ['¿Han comido ustedes alguna vez tortilla?', '¿Han comido ustedes alguna vez tortilla'] },
        { id: 'q3', prompt: '¿vosotros / enamorarse / alguna vez? →',                              correct: ['¿Os habéis enamorado alguna vez?', '¿Os habéis enamorado alguna vez'] },
        { id: 'q4', prompt: 'yo / nunca / ir / a la ópera →',                                       correct: ['Yo no he ido nunca a la ópera.', 'Yo no he ido nunca a la ópera'] },
        { id: 'q5', prompt: 'nosotros / beber / nunca / tequila →',                                  correct: ['Nosotros no hemos bebido nunca tequila.', 'Nosotros no hemos bebido nunca tequila'] },
      ],
    },

    {
      id: '61.3',
      title: 'Причина и следствие',
      type: 'match',
      instructions: 'Соедините следствие (сейчас) с причиной (perfecto).',
      pool: [
        'porque he perdido las llaves',
        'porque ha trabajado mucho todo el día',
        'porque se ha olvidado la cartera',
        'porque se ha roto las gafas',
      ],
      questions: [
        { id: 'q1', prompt: 'No puedo entrar en casa…',     correct: 'porque he perdido las llaves' },
        { id: 'q2', prompt: 'Está agotado…',                 correct: 'porque ha trabajado mucho todo el día' },
        { id: 'q3', prompt: 'Juan no puede pagar la cuenta…', correct: 'porque se ha olvidado la cartera' },
        { id: 'q4', prompt: 'Mi padre no ve bien…',            correct: 'porque se ha roto las gafas' },
      ],
    },

    {
      id: '61.4',
      title: 'Сборы в отпуск (ya)',
      type: 'fill',
      instructions: 'Спросите коротко в perfecto и ответьте местоимением. Образец: <em>(recoger los billetes) → ¿Has recogido ya los billetes? — Sí, los he recogido ya.</em>',
      questions: [
        { id: 'q1', prompt: '(reservar el hotel) — ¿___?',         correct: ['Has reservado ya el hotel?', 'Has reservado ya el hotel'], placeholder: 'Has reservado ya el hotel?' },
        { id: 'q2', prompt: 'Sí, ___ ya. (lo / reservar)',           correct: ['lo he reservado', 'Lo he reservado'] },
        { id: 'q3', prompt: '(pedir el visado) — ¿___?',              correct: ['Has pedido ya el visado?', 'Has pedido ya el visado'], placeholder: 'Has pedido ya el visado?' },
        { id: 'q4', prompt: 'Sí, ___ ya. (lo / pedir)',                correct: ['lo he pedido', 'Lo he pedido'] },
        { id: 'q5', prompt: '(cambiar dinero) — ¿___?',                  correct: ['Has cambiado ya dinero?', 'Has cambiado ya dinero'], placeholder: 'Has cambiado ya dinero?' },
      ],
    },

    {
      id: '61.5',
      title: 'todavía no',
      type: 'fill',
      instructions: 'Дайте отрицательный ответ с <em>todavía no</em>.',
      questions: [
        { id: 'q1', prompt: '¿Has acabado el informe? — ___',          correct: ['Todavía no lo he acabado.', 'Todavía no lo he acabado'] },
        { id: 'q2', prompt: '¿Habéis visto la nueva película? — ___',   correct: ['Todavía no la hemos visto.', 'Todavía no la hemos visto'] },
        { id: 'q3', prompt: '¿Han llamado tus padres? — ___',            correct: ['Todavía no han llamado.', 'Todavía no han llamado'] },
        { id: 'q4', prompt: '¿Te ha respondido Ana? — ___',                correct: ['Todavía no me ha respondido.', 'Todavía no me ha respondido'] },
        { id: 'q5', prompt: '¿Has hecho los deberes? — ___',                  correct: ['Todavía no los he hecho.', 'Todavía no los he hecho'], explanation: '<em>hacer → hecho</em>.' },
      ],
    },

    {
      id: '61.6',
      title: 'Какое значение perfecto?',
      type: 'choice',
      instructions: 'Выберите, какое употребление иллюстрирует фраза.',
      questions: [
        { id: 'q1', prompt: '<em>He viajado por todo el mundo.</em>', options: ['опыт жизни', 'результат с последствием', 'действие сегодня'], correct: 'опыт жизни' },
        { id: 'q2', prompt: '<em>No puedo jugar: me he roto una pierna.</em>', options: ['опыт жизни', 'результат с последствием', 'действие сегодня'], correct: 'результат с последствием' },
        { id: 'q3', prompt: '<em>Hoy me he levantado a las siete.</em>', options: ['опыт жизни', 'результат с последствием', 'действие сегодня'], correct: 'действие сегодня' },
        { id: 'q4', prompt: '<em>Nunca he probado el ceviche.</em>', options: ['опыт жизни', 'результат с последствием', 'действие сегодня'], correct: 'опыт жизни' },
        { id: 'q5', prompt: '<em>Llegas tarde porque no ha sonado el despertador.</em>', options: ['опыт жизни', 'результат с последствием', 'действие сегодня'], correct: 'результат с последствием' },
      ],
    },

    {
      id: '61.7',
      title: 'Multi: чьи маркеры просят perfecto?',
      type: 'multi',
      instructions: 'Отметьте все маркеры, которые просят <strong>pretérito perfecto</strong>.',
      questions: [
        {
          id: 'q1',
          prompt: 'Маркеры perfecto:',
          options: ['alguna vez', 'ayer', 'nunca', 'hace tres años', 'hasta ahora', 'en mi vida', 'el año pasado', 'todavía no'],
          correct: ['alguna vez', 'nunca', 'hasta ahora', 'en mi vida', 'todavía no'],
          explanation: '<em>ayer, hace tres años, el año pasado</em> требуют indefinido.',
        },
      ],
    },

    {
      id: '61.8',
      title: 'Перепишите с ya',
      type: 'fill',
      instructions: 'Поставьте <em>ya</em> в нужное место и измените форму.',
      questions: [
        { id: 'q1', prompt: 'Tengo que comprar el regalo. (уже сделал) →',          correct: ['Ya he comprado el regalo.', 'Ya he comprado el regalo'] },
        { id: 'q2', prompt: 'Quiero ver esa serie. (уже видел) →',                    correct: ['Ya he visto esa serie.', 'Ya he visto esa serie'] },
        { id: 'q3', prompt: 'Va a llamar Marta. (уже позвонила) →',                    correct: ['Marta ya ha llamado.', 'Ya ha llamado Marta.', 'Marta ya ha llamado', 'Ya ha llamado Marta'] },
        { id: 'q4', prompt: 'Tienen que terminar las clases. (уже закончились) →',      correct: ['Ya han terminado las clases.', 'Ya han terminado las clases'] },
      ],
    },

    {
      id: '61.9',
      title: 'Найдите неуместный маркер',
      type: 'choice',
      instructions: 'В каждой фразе один маркер не сочетается с perfecto.',
      questions: [
        { id: 'q1', prompt: 'He visitado Madrid ___.', options: ['varias veces', 'alguna vez', 'el año pasado', 'hasta ahora'], correct: 'el año pasado', explanation: '<em>el año pasado</em> — закрытая точка, нужен indefinido.' },
        { id: 'q2', prompt: 'No he comido nunca ceviche ___.', options: ['en mi vida', 'hasta ahora', 'ayer', 'todavía'], correct: 'ayer', explanation: '<em>ayer</em> требует indefinido (<em>ayer comí</em>).' },
        { id: 'q3', prompt: 'Marta ha llamado ___.', options: ['hace un momento', 'esta mañana', 'hace tres años', 'ya'], correct: 'hace tres años', explanation: '<em>hace + período</em> с большим сроком — indefinido.' },
      ],
    },

    {
      id: '61.10',
      title: 'Match: маркер ↔ значение',
      type: 'match',
      instructions: 'Сопоставьте маркер с тем, что он подчёркивает.',
      pool: ['опыт жизни', 'результат с последствием', 'свежая новость', 'отрицание опыта'],
      questions: [
        { id: 'q1', prompt: '<em>alguna vez</em>',         correct: 'опыт жизни' },
        { id: 'q2', prompt: '<em>nunca</em>',                correct: 'отрицание опыта' },
        { id: 'q3', prompt: '<em>hace un momento</em>',      correct: 'свежая новость' },
        { id: 'q4', prompt: '<em>por eso ahora…</em>',         correct: 'результат с последствием' },
      ],
    },

    {
      id: '61.11',
      title: 'Диалог в perfecto',
      type: 'fill',
      instructions: 'Раскройте скобки в perfecto.',
      questions: [
        { id: 'q1', prompt: '—¿(tú, estar) ___ alguna vez en México?',           correct: ['Has estado'] },
        { id: 'q2', prompt: '—No, nunca (yo, ir) ___ a México.',                   correct: ['he ido'] },
        { id: 'q3', prompt: '—Pues yo (estar) ___ tres veces.',                     correct: ['he estado'] },
        { id: 'q4', prompt: '—¿Y qué tal? ¿(tú, comer) ___ tacos?',                  correct: ['Has comido'] },
        { id: 'q5', prompt: '—Claro. Y también (yo, probar) ___ el mole.',            correct: ['he probado'] },
      ],
    },

    {
      id: '61.12',
      title: 'Multi: правильно или нет?',
      type: 'multi',
      instructions: 'Отметьте все <strong>верные</strong> предложения.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Nunca he estado en África.',
            'Yo no he estado nunca en África.',
            'Yo he estado nunca en África.',
            'Todavía no he leído el libro.',
            'No he leído todavía no el libro.',
            '¿Has acabado ya el curso?',
            '¿Has ya acabado el curso?',
          ],
          correct: [
            'Nunca he estado en África.',
            'Yo no he estado nunca en África.',
            'Todavía no he leído el libro.',
            '¿Has acabado ya el curso?',
          ],
          explanation: '<em>nunca</em> может стоять перед haber или после причастия (тогда нужен <em>no</em>). <em>todavía no</em> — целиком перед haber. <em>ya</em> чаще всего сразу после причастия.',
        },
      ],
    },

    {
      id: '61.13',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите фразу с диакритикой и пунктуацией.',
      questions: [
        { id: 'q1', prompt: '', audio: 'He viajado por todo el mundo.',                       correct: ['He viajado por todo el mundo.', 'He viajado por todo el mundo'] },
        { id: 'q2', prompt: '', audio: '¿Habéis comido alguna vez sopa de tiburón?',           correct: ['¿Habéis comido alguna vez sopa de tiburón?'] },
        { id: 'q3', prompt: '', audio: 'Hasta ahora no hemos tenido ningún problema.',           correct: ['Hasta ahora no hemos tenido ningún problema.', 'Hasta ahora no hemos tenido ningún problema'] },
        { id: 'q4', prompt: '', audio: 'Todavía no lo he leído.',                                  correct: ['Todavía no lo he leído.', 'Todavía no lo he leído'] },
        { id: 'q5', prompt: '', audio: 'Ya he terminado el cuadro.',                                  correct: ['Ya he terminado el cuadro.', 'Ya he terminado el cuadro'] },
        { id: 'q6', prompt: '', audio: 'Me he roto una pierna.',                                       correct: ['Me he roto una pierna.', 'Me he roto una pierna'] },
      ],
    },
  ],
};
