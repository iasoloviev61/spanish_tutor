// ============================================================
// Unidad 62 — Contraste entre pretérito perfecto y pretérito indefinido
// «He trabajado / trabajé» — выбор между двумя прошедшими.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u62 = {
  id: 'u62',
  number: 62,
  title: { es: 'he trabajado / trabajé', topic: 'Contraste entre pretérito perfecto y pretérito indefinido' },
  topicRu: 'Контраст perfecto / indefinido: выбор по маркеру',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Los dos tiempos hablan del pasado, pero el <strong>pretérito perfecto</strong> sitúa la acción en un período que el hablante siente cerca o todavía abierto. El <strong>pretérito indefinido</strong> la coloca en un momento <strong>cerrado</strong>, lejano del presente.',
      ru: 'Оба времени описывают прошлое. Разница — <strong>в восприятии говорящим</strong>: <em>perfecto</em> — отрезок ещё «живой», тянется до сих пор или только что закончился; <em>indefinido</em> — точка / отрезок, которые говорящий уже считает закрытыми и удалёнными.',
      examples: [
        { es: 'Hoy he tenido dos exámenes.', ru: 'Сегодня у меня было два экзамена. (день ещё идёт)' },
        { es: 'Ayer tuve dos exámenes.', ru: 'Вчера у меня было два экзамена. (день закрыт)' },
      ],
    },
    {
      type: 'heading',
      text: 'Когда какой',
    },
    {
      type: 'table',
      caption: 'Главное правило выбора',
      columns: ['Pretérito perfecto', 'Pretérito indefinido'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['Прошлое <strong>близкое</strong>: <em>hace un rato, hace una hora…</em>', 'Прошлое <strong>далёкое</strong>: <em>hace una semana, hace dos años…</em>'],
        ['Период, <strong>входящий в настоящее</strong>: <em>hoy, esta mañana, este mes, este verano, este año…</em>', 'Период <strong>уже закрытый</strong>: <em>ayer, el mes pasado, aquel verano, el año pasado…</em>'],
        ['Опыт жизни <strong>без точной даты</strong>: <em>alguna vez, nunca, hasta ahora…</em>', 'Действие в <strong>конкретный момент</strong>: <em>hace tres años, en 2010, el lunes pasado…</em>'],
        ['ya / todavía no <strong>до сих пор</strong>', 'Точка во времени, относительно которой выясняем «когда»'],
      ],
    },
    {
      type: 'heading',
      text: 'Маркеры',
    },
    {
      type: 'table',
      caption: 'Сравнительная таблица маркеров',
      columns: ['perfecto', 'indefinido'],
      colClasses: ['col-pattern', 'col-pattern'],
      rows: [
        ['<strong>hoy</strong>',                       '<strong>ayer</strong>'],
        ['<strong>esta mañana</strong>',                 '<strong>aquella mañana</strong>'],
        ['<strong>este mes / este año / este verano</strong>', '<strong>el mes pasado / el año pasado / aquel verano</strong>'],
        ['<strong>hace un rato / una hora / un momento</strong>', '<strong>hace tres años / dos meses / una semana</strong>'],
        ['<strong>alguna vez, nunca, hasta ahora</strong>',         '<strong>en 1999, el lunes pasado, aquel día</strong>'],
        ['<strong>ya / todavía no</strong>',                          '— (другие времена)'],
      ],
    },
    {
      type: 'rule',
      es: 'Si la frase ya menciona un momento concreto (<em>el verano pasado, en 2010, ayer…</em>), aunque sea con un verbo en perfecto en la pregunta, hay que pasar a <strong>indefinido</strong>: <em>—El año pasado he estado en Chile</em> → <em>El año pasado estuve en Chile</em>.',
      ru: 'Если в самой фразе названа закрытая точка (<em>el verano pasado, en 2010, ayer</em>), глагол должен быть в <strong>indefinido</strong>, даже если в вопросе использовался perfecto.',
      examples: [
        { es: '—¿Has visto a Antonio Banderas? —Sí, lo vimos en el estreno hace una semana.', ru: '— Ты видел Антонио Бандераса? — Да, мы его видели на премьере неделю назад.' },
        { es: 'Hace tres años estuvimos en Cuzco.', ru: 'Три года назад мы были в Куско.' },
      ],
    },
    {
      type: 'atencion',
      es: 'En gran parte de Hispanoamérica y en algunas zonas de España (Galicia, Asturias, Canarias) se prefiere el <strong>indefinido</strong> también para «hoy» y para experiencias: <em>—¿Comiste? = ¿Has comido?</em>',
      ru: 'В большей части Латинской Америки и в части Испании <em>indefinido</em> используется и там, где в кастильском нормативе ставят perfecto: <em>—¿Comiste hoy?</em> вместо <em>¿Has comido hoy?</em>',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '62.1',
      title: 'Выберите форму по маркеру',
      type: 'choice',
      instructions: 'Какая форма уместна с этим маркером?',
      questions: [
        { id: 'q1', prompt: 'Маркер: <em>hoy</em>',                  options: ['Pretérito perfecto', 'Pretérito indefinido'], correct: 'Pretérito perfecto' },
        { id: 'q2', prompt: 'Маркер: <em>ayer</em>',                  options: ['Pretérito perfecto', 'Pretérito indefinido'], correct: 'Pretérito indefinido' },
        { id: 'q3', prompt: 'Маркер: <em>este verano</em>',             options: ['Pretérito perfecto', 'Pretérito indefinido'], correct: 'Pretérito perfecto' },
        { id: 'q4', prompt: 'Маркер: <em>aquel verano</em>',              options: ['Pretérito perfecto', 'Pretérito indefinido'], correct: 'Pretérito indefinido' },
        { id: 'q5', prompt: 'Маркер: <em>hace un momento</em>',             options: ['Pretérito perfecto', 'Pretérito indefinido'], correct: 'Pretérito perfecto' },
        { id: 'q6', prompt: 'Маркер: <em>hace cinco años</em>',               options: ['Pretérito perfecto', 'Pretérito indefinido'], correct: 'Pretérito indefinido' },
        { id: 'q7', prompt: 'Маркер: <em>nunca / alguna vez</em>',              options: ['Pretérito perfecto', 'Pretérito indefinido'], correct: 'Pretérito perfecto' },
        { id: 'q8', prompt: 'Маркер: <em>en 1998</em>',                          options: ['Pretérito perfecto', 'Pretérito indefinido'], correct: 'Pretérito indefinido' },
      ],
    },

    {
      id: '62.2',
      title: 'Обведите правильную форму',
      type: 'choice',
      instructions: 'Какая форма уместна в каждой фразе?',
      questions: [
        { id: 'q1', prompt: '(hemos estado / estuvimos) con Rosa hace poco.',           options: ['hemos estado', 'estuvimos'], correct: 'hemos estado' },
        { id: 'q2', prompt: 'Hoy no (he ido / fui) a trabajar.',                          options: ['he ido', 'fui'], correct: 'he ido' },
        { id: 'q3', prompt: '¿Cuándo (ha nacido / nació) tu hijo mayor?',                  options: ['ha nacido', 'nació'], correct: 'nació' },
        { id: 'q4', prompt: '(Hemos estado / Estuvimos) en México el verano de 1998.',        options: ['Hemos estado', 'Estuvimos'], correct: 'Estuvimos' },
        { id: 'q5', prompt: '¿(Han comido / Comieron) alguna vez ceviche?',                    options: ['Han comido', 'Comieron'], correct: 'Han comido' },
        { id: 'q6', prompt: 'Este invierno no (ha nevado / nevó) mucho.',                       options: ['ha nevado', 'nevó'], correct: 'ha nevado' },
        { id: 'q7', prompt: 'Peter no (ha estudiado / estudió) nunca español.',                  options: ['ha estudiado', 'estudió'], correct: 'ha estudiado' },
        { id: 'q8', prompt: 'Amalia y sus padres (han venido / vinieron) a España hace tres años.', options: ['han venido', 'vinieron'], correct: 'vinieron' },
        { id: 'q9', prompt: 'Cuando nos casamos, (hemos hecho / hicimos) un viaje por Centroamérica.', options: ['hemos hecho', 'hicimos'], correct: 'hicimos' },
      ],
    },

    {
      id: '62.3',
      title: 'Раскройте скобки',
      type: 'fill',
      instructions: 'Поставьте глагол в perfecto или indefinido — по маркеру.',
      questions: [
        { id: 'q1', prompt: '¿(ustedes, montar) ___ alguna vez en globo?',                       correct: ['Han montado'] },
        { id: 'q2', prompt: 'Mi hermana (tener) ___ un niño hace poco.',                            correct: ['ha tenido'], explanation: '<em>hace poco</em> — perfecto.' },
        { id: 'q3', prompt: 'Rosana nos (invitar) ___ a su chalet el fin de semana pasado.',         correct: ['invitó'], explanation: '<em>el fin de semana pasado</em> — indefinido.' },
        { id: 'q4', prompt: 'Este año (haber) ___ menos accidentes en las carreteras.',                correct: ['ha habido'] },
        { id: 'q5', prompt: 'El siglo pasado (haber) ___ dos guerras mundiales.',                       correct: ['hubo'] },
        { id: 'q6', prompt: '¿(tú, ver) ___ a Ana hoy? — Sí, la (yo, ver) ___ esta mañana.',             correct: ['Has visto / he visto', 'has visto / he visto'], explanation: 'Оба раза — perfecto: <em>hoy / esta mañana</em>.' },
        { id: 'q7', prompt: '¿(vosotras, estar) ___ alguna vez en América del Sur? — Sí, (estar) ___ en Uruguay hace cuatro años.', correct: ['Habéis estado / estuvimos', 'habéis estado / estuvimos'] },
        { id: 'q8', prompt: '¿(tú, sacar) ___ las entradas? — Las (yo, comprar) ___ hace dos semanas.',     correct: ['Has sacado / compré', 'has sacado / compré'] },
      ],
    },

    {
      id: '62.4',
      title: 'Hoy / ayer — пересоберите фразы',
      type: 'fill',
      instructions: 'Запишите вторую фразу, заменив маркер и время. Образец: <em>Hoy he comido paella → Ayer comí paella.</em>',
      questions: [
        { id: 'q1', prompt: 'Hoy he trabajado mucho. → Ayer ___ mucho.',                          correct: ['trabajé'] },
        { id: 'q2', prompt: 'Esta semana hemos viajado dos veces. → La semana pasada ___ dos veces.', correct: ['viajamos'] },
        { id: 'q3', prompt: 'Este mes ha llovido poco. → En febrero ___ poco.',                       correct: ['llovió'] },
        { id: 'q4', prompt: 'Este año he leído cinco libros. → El año pasado ___ cinco libros.',        correct: ['leí'] },
        { id: 'q5', prompt: 'Hoy hemos visto a Marta. → El sábado ___ a Marta.',                          correct: ['vimos'] },
      ],
    },

    {
      id: '62.5',
      title: 'Match: маркер ↔ время',
      type: 'match',
      instructions: 'К каждому маркеру выберите perfecto или indefinido.',
      pool: ['Pretérito perfecto', 'Pretérito indefinido'],
      questions: [
        { id: 'q1', prompt: '<em>esta mañana</em>',           correct: 'Pretérito perfecto' },
        { id: 'q2', prompt: '<em>aquella mañana</em>',          correct: 'Pretérito indefinido' },
        { id: 'q3', prompt: '<em>este verano</em>',              correct: 'Pretérito perfecto' },
        { id: 'q4', prompt: '<em>el verano pasado</em>',           correct: 'Pretérito indefinido' },
        { id: 'q5', prompt: '<em>hace un rato</em>',                correct: 'Pretérito perfecto' },
        { id: 'q6', prompt: '<em>hace tres años</em>',                correct: 'Pretérito indefinido' },
        { id: 'q7', prompt: '<em>todavía no</em>',                     correct: 'Pretérito perfecto' },
        { id: 'q8', prompt: '<em>en 2010</em>',                          correct: 'Pretérito indefinido' },
      ],
    },

    {
      id: '62.6',
      title: 'Multi: с какими маркерами идёт perfecto?',
      type: 'multi',
      instructions: 'Отметьте все маркеры, которые сочетаются с <strong>perfecto</strong>.',
      questions: [
        {
          id: 'q1',
          prompt: 'Маркеры perfecto:',
          options: ['hoy', 'ayer', 'hace un rato', 'hace tres años', 'este verano', 'aquel verano', 'alguna vez', 'el lunes pasado'],
          correct: ['hoy', 'hace un rato', 'este verano', 'alguna vez'],
        },
      ],
    },

    {
      id: '62.7',
      title: 'Диалог в Барселоне',
      type: 'fill',
      instructions: 'Перепишите диалог в perfecto или indefinido. Образец: <em>(estar, Barcelona) — ¿Habéis estado ya en Barcelona? — Sí, estuvimos el miércoles.</em>',
      questions: [
        { id: 'q1', prompt: '(probar, el cocido) — ¿___?',                              correct: ['Habéis probado ya el cocido?', 'Habéis probado ya el cocido'], placeholder: 'Habéis probado ya el cocido?' },
        { id: 'q2', prompt: 'Sí, lo (probar) ___ el lunes.',                              correct: ['probamos'] },
        { id: 'q3', prompt: '(visitar, el museo) — ¿___?',                                correct: ['Habéis visitado ya el museo?', 'Habéis visitado ya el museo'], placeholder: 'Habéis visitado ya el museo?' },
        { id: 'q4', prompt: 'Sí, lo (visitar) ___ el martes por la mañana.',                correct: ['visitamos'] },
        { id: 'q5', prompt: '(comprar, los regalos) — ¿___?',                                correct: ['Habéis comprado ya los regalos?', 'Habéis comprado ya los regalos'], placeholder: 'Habéis comprado ya los regalos?' },
        { id: 'q6', prompt: 'No, todavía no los (comprar) ___.',                              correct: ['hemos comprado'] },
      ],
    },

    {
      id: '62.8',
      title: 'Найдите ошибку времени',
      type: 'choice',
      instructions: 'В каждом ряду одна форма не подходит к маркеру.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Hoy he salido temprano.', 'Esta semana he trabajado.', 'Ayer he salido temprano.', 'Hace un rato ha llamado.'], correct: 'Ayer he salido temprano.', explanation: 'С <em>ayer</em> — indefinido: <em>Ayer salí temprano</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['En 1999 nací.', 'El lunes pasado vimos a Luis.', 'Hace dos años vivimos allí.', 'Hace un momento vine.'], correct: 'Hace un momento vine.', explanation: 'С <em>hace un momento</em> — perfecto: <em>he venido hace un momento</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Nunca he probado el sushi.', 'Nunca probé el sushi en mi vida.', 'Alguna vez he ido a Roma.', 'En mi vida he visto algo así.'], correct: 'Nunca probé el sushi en mi vida.', explanation: 'С <em>en mi vida</em> — perfecto: <em>nunca he probado…</em>' },
      ],
    },

    {
      id: '62.9',
      title: 'Замените маркер — переключите время',
      type: 'fill',
      instructions: 'Замените указанный маркер и поставьте глагол в нужное время.',
      questions: [
        { id: 'q1', prompt: 'Hoy he visto a Carla. → Ayer ___ a Carla.',                       correct: ['vi'] },
        { id: 'q2', prompt: 'Ayer fuimos al cine. → Esta tarde ___ al cine.',                    correct: ['hemos ido'] },
        { id: 'q3', prompt: 'En 2019 viajé a Cuba. → Este año ___ a Cuba.',                       correct: ['he viajado'] },
        { id: 'q4', prompt: 'Esta semana he trabajado mucho. → La semana pasada ___ mucho.',        correct: ['trabajé'] },
        { id: 'q5', prompt: 'Hace un rato ha llamado mi madre. → Anoche ___ mi madre.',             correct: ['llamó'] },
      ],
    },

    {
      id: '62.10',
      title: 'Multi: что верно?',
      type: 'multi',
      instructions: 'Отметьте <strong>все</strong> правильные предложения.',
      questions: [
        {
          id: 'q1',
          prompt: 'Что верно?',
          options: [
            'Hoy he comido paella.',
            'Hoy comí paella.',
            'Ayer he comido paella.',
            'Ayer comí paella.',
            'Esta mañana hemos salido pronto.',
            'Aquella mañana salimos pronto.',
            'Hace tres años he viajado a Perú.',
            'Hace un rato ha llamado.',
          ],
          correct: [
            'Hoy he comido paella.',
            'Ayer comí paella.',
            'Esta mañana hemos salido pronto.',
            'Aquella mañana salimos pronto.',
            'Hace un rato ha llamado.',
          ],
          explanation: '<em>Hoy comí</em> — нормативно нет (но допустимо в Латинской Америке). <em>Ayer he comido</em>, <em>Hace tres años he viajado</em> — неверно: с этими маркерами нужен indefinido.',
        },
      ],
    },

    {
      id: '62.11',
      title: 'Раскройте скобки в диалоге',
      type: 'fill',
      instructions: 'Поставьте глагол в perfecto или indefinido.',
      questions: [
        { id: 'q1', prompt: '—¿(tú, comer) ___ ya? — Sí, (comer) ___ hace un rato.',          correct: ['Has comido / he comido', 'has comido / he comido'] },
        { id: 'q2', prompt: '—¿Cuándo (vosotros, conocerse) ___? — Nos (conocer) ___ en 2015.',  correct: ['os conocisteis / conocimos'] },
        { id: 'q3', prompt: 'Este año (yo, leer) ___ pocos libros, pero el año pasado (leer) ___ muchos.', correct: ['he leído / leí'] },
        { id: 'q4', prompt: 'Anoche (yo, ver) ___ una buena película; hoy todavía no (ver) ___ nada.', correct: ['vi / he visto'] },
        { id: 'q5', prompt: 'Mis abuelos (vivir) ___ en Galicia toda su vida; (morir) ___ allí en 2003.', correct: ['vivieron / murieron'] },
      ],
    },

    {
      id: '62.12',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите фразу с диакритикой и пунктуацией.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Hoy he tenido dos exámenes.',                       correct: ['Hoy he tenido dos exámenes.', 'Hoy he tenido dos exámenes'] },
        { id: 'q2', prompt: '', audio: 'Ayer tuve dos exámenes.',                              correct: ['Ayer tuve dos exámenes.', 'Ayer tuve dos exámenes'] },
        { id: 'q3', prompt: '', audio: 'El año pasado estuve en Chile.',                         correct: ['El año pasado estuve en Chile.', 'El año pasado estuve en Chile'] },
        { id: 'q4', prompt: '', audio: '¿Has estado alguna vez en Cuzco?',                          correct: ['¿Has estado alguna vez en Cuzco?'] },
        { id: 'q5', prompt: '', audio: 'Hace tres años estuvimos en Cuzco.',                          correct: ['Hace tres años estuvimos en Cuzco.', 'Hace tres años estuvimos en Cuzco'] },
        { id: 'q6', prompt: '', audio: 'Todavía no hemos visitado La Guaira.',                          correct: ['Todavía no hemos visitado La Guaira.', 'Todavía no hemos visitado La Guaira'] },
      ],
    },
  ],
};
