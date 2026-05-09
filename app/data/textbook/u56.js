// ============================================================
// Unidad 56 — Presente de estar + gerundio
// «Estoy haciendo algo ahora».
// Правила пересказаны своими словами; примеры и упражнения —
// оригинальные, на типичной A1–A2 лексике.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u56 = {
  id: 'u56',
  number: 56,
  title: { es: 'Estoy viendo las noticias', topic: 'Presente de estar + gerundio' },
  topicRu: 'Настоящее длительное: «делаю прямо сейчас»',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'La construcción <strong>estar + gerundio</strong> sirve para hablar de algo que <strong>está pasando ahora mismo</strong>, en el momento en que hablamos.',
      ru: 'Конструкция <strong>estar + gerundio</strong> описывает то, что <strong>происходит прямо сейчас</strong>, в момент речи. Аналог английского <em>I am doing</em>.',
      examples: [
        { es: '—¿Qué estás haciendo? —Estoy viendo las noticias.', ru: '— Что ты делаешь? — Смотрю новости.' },
        { es: '¡Sshh! Isabel está tocando el piano.', ru: 'Тссс! Изабель играет на пианино.' },
        { es: 'Llévate el paraguas. Está lloviendo.', ru: 'Возьми зонт. Идёт дождь.' },
      ],
    },
    {
      type: 'heading',
      text: 'Спряжение estar в Presente',
    },
    {
      type: 'table',
      caption: 'estar + gerundio',
      columns: ['Lugar', 'estar', 'gerundio'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['(yo)',                  '<strong>estoy</strong>',   '<em>trabajando, comiendo, escribiendo…</em>'],
        ['(tú)',                  '<strong>estás</strong>',   '—'],
        ['(usted, él, ella)',     '<strong>está</strong>',    '—'],
        ['(nosotros, -as)',       '<strong>estamos</strong>', '—'],
        ['(vosotros, -as)',       '<strong>estáis</strong>',  '—'],
        ['(ustedes, ellos, -as)', '<strong>están</strong>',   '—'],
      ],
    },
    {
      type: 'rule',
      es: 'El <strong>gerundio regular</strong> se forma con <em>-ando</em> (verbos en -ar) y <em>-iendo</em> (verbos en -er, -ir).',
      ru: 'Обычный герундий: <em>-ar</em> → <strong>-ando</strong>, <em>-er / -ir</em> → <strong>-iendo</strong>.',
      examples: [
        { es: 'trabajar → trabaj<strong>ando</strong>', ru: 'работая' },
        { es: 'comer → com<strong>iendo</strong>',     ru: 'кушая' },
        { es: 'escribir → escrib<strong>iendo</strong>', ru: 'записывая' },
      ],
    },
    {
      type: 'rule',
      es: '<strong>estar + gerundio</strong> también se usa para una <strong>situación temporal, no habitual</strong>, con marcadores como <em>hoy, este mes, esta semana, últimamente…</em>',
      ru: 'Та же конструкция передаёт <strong>временную, нерегулярную</strong> ситуацию (несколько дней / недель / месяцев) — с маркерами <em>hoy, este mes, esta semana, últimamente</em>.',
      examples: [
        { es: 'Luisa normalmente trabaja en España, pero este mes está trabajando en Argentina.', ru: 'Обычно Луиса работает в Испании, но в этом месяце — в Аргентине.' },
        { es: 'Este año estamos estudiando chino.', ru: 'В этом году мы учим китайский.' },
        { es: 'Últimamente estoy durmiendo mucho.', ru: 'Последнее время я много сплю.' },
      ],
    },
    {
      type: 'rule',
      es: 'Sirve también para <strong>enfatizar</strong> acciones frecuentes: con <em>siempre, todo el día, todo el rato, a todas horas</em>.',
      ru: 'Может подчёркивать <strong>чрезмерно частое</strong> действие — с <em>siempre, todo el día, a todas horas</em>.',
      examples: [
        { es: 'Antonio está siempre pensando en Belén.', ru: 'Антонио постоянно думает о Белен.' },
        { es: 'Estáis todo el día jugando y no estudiáis.', ru: 'Вы целыми днями играете и не учитесь.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Con verbos pronominales (<em>ducharse, vestirse, lavarse…</em>) hay <strong>dos posiciones</strong> para el pronombre: antes del verbo (<em>Me estoy duchando</em>) o pegado al gerundio (<em>Estoy duchándo<strong>me</strong></em>). Las dos son correctas; con el pronombre pegado, el gerundio lleva tilde.',
      ru: 'У возвратных глаголов местоимение можно ставить <strong>перед estar</strong> (<em>Me estoy duchando</em>) или <strong>в конце герундия</strong> (<em>Estoy duchándome</em>). Обе формы равноправны; во втором случае на герундии появляется ударение (-<em>ándo-</em>, -<em>iéndo-</em>).',
      examples: [
        { es: 'Me estoy lavando la cara. = Estoy lavándome la cara.', ru: 'Я умываюсь.' },
        { es: 'Se están vistiendo. = Están vistiéndose.', ru: 'Они одеваются.' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '56.1',
      title: 'Образуйте герундий',
      type: 'fill',
      instructions: 'Запишите регулярный герундий от инфинитива.',
      questions: [
        { id: 'q1',  prompt: '<em>trabajar</em> →',  correct: 'trabajando' },
        { id: 'q2',  prompt: '<em>comer</em> →',     correct: 'comiendo' },
        { id: 'q3',  prompt: '<em>escribir</em> →',  correct: 'escribiendo' },
        { id: 'q4',  prompt: '<em>cantar</em> →',    correct: 'cantando' },
        { id: 'q5',  prompt: '<em>beber</em> →',     correct: 'bebiendo' },
        { id: 'q6',  prompt: '<em>vivir</em> →',     correct: 'viviendo' },
        { id: 'q7',  prompt: '<em>estudiar</em> →',  correct: 'estudiando' },
        { id: 'q8',  prompt: '<em>aprender</em> →',  correct: 'aprendiendo' },
        { id: 'q9',  prompt: '<em>hablar</em> →',    correct: 'hablando' },
        { id: 'q10', prompt: '<em>tocar</em> →',     correct: 'tocando' },
      ],
    },

    {
      id: '56.2',
      title: 'Forma de estar',
      type: 'choice',
      instructions: 'Выберите подходящую форму глагола <em>estar</em>.',
      questions: [
        { id: 'q1', prompt: 'Yo ___ leyendo un libro.',          options: ['estoy', 'estás', 'está'],     correct: 'estoy' },
        { id: 'q2', prompt: 'Mis hermanos ___ viendo la tele.',  options: ['está', 'están', 'estamos'],   correct: 'están' },
        { id: 'q3', prompt: '¿Qué ___ haciendo (tú)?',           options: ['estás', 'está', 'estáis'],    correct: 'estás' },
        { id: 'q4', prompt: 'Nosotras ___ comiendo paella.',     options: ['estáis', 'estamos', 'están'], correct: 'estamos' },
        { id: 'q5', prompt: 'Vosotros ___ jugando al fútbol.',   options: ['estamos', 'estáis', 'están'], correct: 'estáis' },
        { id: 'q6', prompt: 'Mi madre ___ trabajando.',          options: ['estoy', 'está', 'estás'],     correct: 'está' },
        { id: 'q7', prompt: 'Ustedes ___ escuchando música.',    options: ['estáis', 'están', 'estamos'], correct: 'están' },
        { id: 'q8', prompt: '¿(Usted) ___ esperando a alguien?', options: ['estás', 'está', 'estáis'],    correct: 'está' },
      ],
    },

    {
      id: '56.3',
      title: 'Что происходит прямо сейчас?',
      type: 'fill',
      instructions: 'Поставьте глагол в скобках в форму <em>estar + gerundio</em>. Полная форма: «<em>está cantando</em>», «<em>estamos comiendo</em>».',
      questions: [
        { id: 'q1', prompt: 'Mira: el bebé (dormir) ___ ahora.',        correct: ['está durmiendo'], explanation: '<em>dormir</em> → durmiendo (нерегулярный, см. Unidad 98).' },
        { id: 'q2', prompt: 'Ana (escribir) ___ una carta.',             correct: ['está escribiendo'] },
        { id: 'q3', prompt: 'Yo (estudiar) ___ español.',                  correct: ['estoy estudiando'] },
        { id: 'q4', prompt: 'Nosotros (cenar) ___ en casa.',                correct: ['estamos cenando'] },
        { id: 'q5', prompt: 'Mis primos (jugar) ___ en el parque.',         correct: ['están jugando'] },
        { id: 'q6', prompt: 'Vosotras (hablar) ___ por teléfono.',          correct: ['estáis hablando'] },
        { id: 'q7', prompt: '¿Qué (tú, hacer) ___ ahora?',                  correct: ['estás haciendo'] },
        { id: 'q8', prompt: 'El profesor (explicar) ___ la lección.',       correct: ['está explicando'] },
      ],
    },

    {
      id: '56.4',
      title: 'Разверните инфинитив',
      type: 'fill',
      instructions: 'Превратите вопрос в полное предложение в <em>estar + gerundio</em>. Образец: <em>(estudiar español, yo)</em> → <em>Estoy estudiando español.</em>',
      questions: [
        { id: 'q1', prompt: '(escuchar música, yo) →',           correct: ['Estoy escuchando música.', 'Estoy escuchando música'] },
        { id: 'q2', prompt: '(beber un zumo, ella) →',           correct: ['Está bebiendo un zumo.', 'Está bebiendo un zumo'] },
        { id: 'q3', prompt: '(escribir un correo, nosotros) →',  correct: ['Estamos escribiendo un correo.', 'Estamos escribiendo un correo'] },
        { id: 'q4', prompt: '(ver la tele, ellos) →',            correct: ['Están viendo la tele.', 'Están viendo la tele'] },
        { id: 'q5', prompt: '(leer el periódico, tú) →',         correct: ['Estás leyendo el periódico.', 'Estás leyendo el periódico'], explanation: '<em>leer</em> → leyendo (i → y между гласными).' },
        { id: 'q6', prompt: '(llover) →',                        correct: ['Está lloviendo.', 'Está lloviendo'] },
      ],
    },

    {
      id: '56.5',
      title: 'Временная ситуация: este mes, últimamente…',
      type: 'fill',
      instructions: 'Действие не на минуту, а на несколько недель. Поставьте <em>estar + gerundio</em>.',
      questions: [
        { id: 'q1', prompt: 'Este año (yo, aprender) ___ alemán.',           correct: ['estoy aprendiendo'] },
        { id: 'q2', prompt: 'Últimamente Marta (dormir) ___ poco.',           correct: ['está durmiendo'] },
        { id: 'q3', prompt: 'Esta semana (nosotros, trabajar) ___ mucho.',    correct: ['estamos trabajando'] },
        { id: 'q4', prompt: 'Este mes (mis padres, viajar) ___ por Italia.',  correct: ['están viajando'] },
        { id: 'q5', prompt: 'Hoy (vosotros, comer) ___ en un restaurante.',   correct: ['estáis comiendo'] },
        { id: 'q6', prompt: 'Últimamente (tú, leer) ___ mucho.',              correct: ['estás leyendo'] },
      ],
    },

    {
      id: '56.6',
      title: 'Энфаза: siempre, todo el día…',
      type: 'fill',
      instructions: 'Подчёркивает раздражающую частоту. Поставьте глагол в <em>estar + gerundio</em>.',
      questions: [
        { id: 'q1', prompt: 'Pablo (siempre, hablar) ___ siempre ___ de fútbol.',  correct: ['está hablando'], explanation: 'Полностью: <em>Pablo está siempre hablando de fútbol.</em>' },
        { id: 'q2', prompt: 'Mis hijos todo el día (jugar) ___ con la consola.',    correct: ['están jugando'] },
        { id: 'q3', prompt: '(Tú) a todas horas (comer) ___ chocolate.',            correct: ['estás comiendo'] },
        { id: 'q4', prompt: 'Mi vecina siempre (cantar) ___ a las siete.',          correct: ['está cantando'] },
        { id: 'q5', prompt: 'Ese niño todo el rato (llorar) ___.',                  correct: ['está llorando'] },
      ],
    },

    {
      id: '56.7',
      title: 'Возвратные глаголы — две позиции местоимения',
      type: 'multi',
      instructions: 'Отметьте все <strong>корректные</strong> формы (две позиции местоимения).',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Me estoy duchando.',
            'Estoy duchándome.',
            'Estoy me duchando.',
            'Duchándome estoy.',
            'Se está vistiendo.',
            'Está vistiéndose.',
            'Está vistiendose.',
            'Está sé vistiendo.',
          ],
          correct: ['Me estoy duchando.', 'Estoy duchándome.', 'Se está vistiendo.', 'Está vistiéndose.'],
          explanation: 'Местоимение либо перед <em>estar</em>, либо в конце герундия — со ударением (<em>duchándome, vistiéndose</em>).',
        },
      ],
    },

    {
      id: '56.8',
      title: 'Перепишите с местоимением в другой позиции',
      type: 'fill',
      instructions: 'Если местоимение перед <em>estar</em> — поставьте в конец герундия (с ударением). Если в конце — перенесите вперёд.',
      questions: [
        { id: 'q1', prompt: '<em>Me estoy lavando.</em> →',         correct: ['Estoy lavándome.', 'Estoy lavándome'] },
        { id: 'q2', prompt: '<em>Está vistiéndose.</em> →',         correct: ['Se está vistiendo.', 'Se está vistiendo'] },
        { id: 'q3', prompt: '<em>Nos estamos divirtiendo.</em> →',  correct: ['Estamos divirtiéndonos.', 'Estamos divirtiéndonos'] },
        { id: 'q4', prompt: '<em>Están duchándose.</em> →',         correct: ['Se están duchando.', 'Se están duchando'] },
        { id: 'q5', prompt: '<em>Te estás peinando.</em> →',         correct: ['Estás peinándote.', 'Estás peinándote'] },
      ],
    },

    {
      id: '56.9',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Estoy comiendo.', 'Estás bebiendo.', 'Está trabajiendo.', 'Estamos hablando.'], correct: 'Está trabajiendo.', explanation: 'От -ar — окончание <em>-ando</em>: <em>trabajando</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Está lloviendo.', 'Estoy escribiendo.', 'Están leyiendo.', 'Estoy jugando.'], correct: 'Están leyiendo.', explanation: '<em>leer</em> → <em>leyendo</em> (без -i-).' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Me estoy duchando.', 'Estoy duchandome.', 'Estoy duchándome.', 'Duchándome estoy bien.'], correct: 'Estoy duchandome.', explanation: 'Местоимение в конце требует тильду: <em>duchándome</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Estoy viendo la tele.', 'Estamos viviendo en Madrid.', 'Está hacendo la cena.', 'Está escribiendo un correo.'], correct: 'Está hacendo la cena.', explanation: '<em>hacer</em> → <em>haciendo</em>.' },
      ],
    },

    {
      id: '56.10',
      title: 'Сопоставьте сцену и фразу',
      type: 'match',
      instructions: 'К каждой ситуации подберите подходящее предложение.',
      pool: [
        'Está lloviendo.',
        'Estoy viendo las noticias.',
        'Está tocando el piano.',
        'Están jugando al fútbol.',
        'Estamos cenando.',
        'Estás durmiendo.',
      ],
      questions: [
        { id: 'q1', prompt: 'Я смотрю телевизор, идут новости.',            correct: 'Estoy viendo las noticias.' },
        { id: 'q2', prompt: 'На улице — зонт нужен.',                       correct: 'Está lloviendo.' },
        { id: 'q3', prompt: 'Изабель сидит за инструментом, играет музыку.', correct: 'Está tocando el piano.' },
        { id: 'q4', prompt: 'Дети с мячом во дворе.',                        correct: 'Están jugando al fútbol.' },
        { id: 'q5', prompt: 'Мы за столом, едим вечером.',                   correct: 'Estamos cenando.' },
        { id: 'q6', prompt: 'Ты в кровати с закрытыми глазами.',             correct: 'Estás durmiendo.' },
      ],
    },

    {
      id: '56.11',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Нажмите <code>🔊</code> и запишите фразу с диакритикой и пунктуацией.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Estoy viendo las noticias.',     correct: ['Estoy viendo las noticias.', 'Estoy viendo las noticias'] },
        { id: 'q2', prompt: '', audio: 'Isabel está tocando el piano.',  correct: ['Isabel está tocando el piano.', 'Isabel está tocando el piano'] },
        { id: 'q3', prompt: '', audio: 'Está lloviendo mucho.',          correct: ['Está lloviendo mucho.', 'Está lloviendo mucho'] },
        { id: 'q4', prompt: '', audio: 'Me estoy duchando.',             correct: ['Me estoy duchando.', 'Me estoy duchando'] },
        { id: 'q5', prompt: '', audio: 'Están vistiéndose.',             correct: ['Están vistiéndose.', 'Están vistiéndose'] },
        { id: 'q6', prompt: '', audio: 'Este mes estamos estudiando chino.', correct: ['Este mes estamos estudiando chino.', 'Este mes estamos estudiando chino'] },
      ],
    },

    {
      id: '56.12',
      title: 'Когда «прямо сейчас», когда «сегодня/в этом месяце», когда «постоянно»',
      type: 'choice',
      instructions: 'Какое значение у <em>estar + gerundio</em> в этой фразе?',
      questions: [
        { id: 'q1', prompt: '<em>Sshh, María está leyendo.</em>', options: ['Сейчас, в этот момент', 'Временно, эти недели', 'Постоянно, раздражает'], correct: 'Сейчас, в этот момент' },
        { id: 'q2', prompt: '<em>Este año estamos viviendo en Madrid.</em>', options: ['Сейчас, в этот момент', 'Временно, этот год', 'Постоянно, раздражает'], correct: 'Временно, этот год' },
        { id: 'q3', prompt: '<em>¡Mi vecino está siempre cantando a las seis!</em>', options: ['Сейчас, в этот момент', 'Временно, эти недели', 'Постоянно, раздражает'], correct: 'Постоянно, раздражает' },
        { id: 'q4', prompt: '<em>Últimamente estoy durmiendo poco.</em>', options: ['Сейчас, в этот момент', 'Временно, последнее время', 'Постоянно, раздражает'], correct: 'Временно, последнее время' },
        { id: 'q5', prompt: '<em>—¿Qué estás haciendo? —Estoy comiendo.</em>', options: ['Сейчас, в этот момент', 'Временно, эти дни', 'Постоянно, раздражает'], correct: 'Сейчас, в этот момент' },
      ],
    },
  ],
};
