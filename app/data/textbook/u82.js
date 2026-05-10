// ============================================================
// Unidad 82 — Pretérito imperfecto de subjuntivo: verbos regulares
// trabajara, comiera, viviera (форма −ra) и trabajase / comiese /
// viviese (форма −se). Образование, временна́я отнесённость, типичные
// триггеры в прошедшем времени и после кондиционала.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u82 = {
  id: 'u82',
  number: 82,
  title: { es: 'trabajara, comiera, viviera', topic: 'Pretérito imperfecto de subjuntivo: verbos regulares' },
  topicRu: 'Имперфект субхунтива: правильные глаголы',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'El <strong>pretérito imperfecto de subjuntivo</strong> tiene dos formas equivalentes en uso: <em>trabajara</em> y <em>trabajase</em>. La forma en <em>−ra</em> es <strong>más frecuente</strong> hoy en día; la forma en <em>−se</em> es algo más literaria. Ambas son correctas y siguen las mismas reglas de uso.',
      ru: 'У имперфекта субхунтива <strong>две равноправные формы</strong>: <em>trabajara</em> и <em>trabajase</em>. В современной речи чаще употребляется форма на <em>−ra</em>; форма на <em>−se</em> чуть более «книжная», но грамматически совершенно равноценна. В упражнениях ниже будем чаще использовать <em>−ra</em>, но обе принимаются.',
      examples: [
        { es: 'Quería que me ayudaras / ayudases con los deberes.', ru: 'Я хотел, чтобы ты помог мне с уроками.' },
        { es: 'Era lógico que estuviera / estuviese cansado.', ru: 'Логично было, что он был усталый.' },
      ],
    },

    {
      type: 'heading',
      text: 'Образование',
    },
    {
      type: 'table',
      caption: 'Окончания трёх спряжений (форма −ra / −se)',
      columns: ['', '−ar (trabajar)', '−er (comer)', '−ir (vivir)'],
      colClasses: ['col-pattern', 'col-result', 'col-result', 'col-result'],
      rows: [
        ['<strong>yo</strong>',          '<em>trabaj−ara, −ase</em>',     '<em>com−iera, −iese</em>',     '<em>viv−iera, −iese</em>'],
        ['<strong>tú</strong>',          '<em>trabaj−aras, −ases</em>',    '<em>com−ieras, −ieses</em>',    '<em>viv−ieras, −ieses</em>'],
        ['<strong>usted, él</strong>',    '<em>trabaj−ara, −ase</em>',     '<em>com−iera, −iese</em>',     '<em>viv−iera, −iese</em>'],
        ['<strong>nosotros</strong>',    '<em>trabaj−áramos, −ásemos</em>', '<em>com−iéramos, −iésemos</em>', '<em>viv−iéramos, −iésemos</em>'],
        ['<strong>vosotros</strong>',    '<em>trabaj−arais, −aseis</em>',   '<em>com−ierais, −ieseis</em>',   '<em>viv−ierais, −ieseis</em>'],
        ['<strong>ustedes, ellos</strong>', '<em>trabaj−aran, −asen</em>',    '<em>com−ieran, −iesen</em>',     '<em>viv−ieran, −iesen</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'En la 1.ª persona del plural <strong>siempre lleva tilde</strong>: <em>trabajáramos / trabajásemos</em>, <em>comiéramos / comiésemos</em>. Y la forma <em>−ra</em> coincide en escritura con varias del condicional (<em>trabajaría → trabajara</em>): cuidado.',
      ru: 'В 1 л. мн. ч. <strong>всегда тильда</strong>: <em>trabajáramos / trabajásemos</em>, <em>comiéramos / comiésemos</em>, <em>viviéramos / viviésemos</em>. Не путайте форму <em>−ra</em> с кондиционалом (<em>trabajaría</em>) — это разные формы.',
    },

    {
      type: 'heading',
      text: 'Временна́я отнесённость',
    },
    {
      type: 'rule',
      es: 'El imperfecto de subjuntivo se puede referir <strong>al pasado, al presente o al futuro</strong>: el tiempo lo marca el verbo principal y el contexto.',
      ru: 'Имперфект субхунтива может относиться к <strong>прошлому, настоящему или будущему</strong>: значение зависит от главного глагола и контекста.',
      examples: [
        { es: 'Pasado: Ayer te llamé a casa. Quería que me ayudaras a preparar el examen.', ru: 'Прошлое: Вчера я тебе звонил домой. Хотел, чтобы ты помог мне с экзаменом.' },
        { es: 'Presente: ¿Estás ocupada? Me gustaría que vieras esto.', ru: 'Настоящее: Ты занята? Мне бы хотелось, чтобы ты это посмотрела.' },
        { es: 'Futuro: ¿Hacéis algo el sábado? Me gustaría que vinierais a casa.', ru: 'Будущее: Что вы делаете в субботу? Мне бы хотелось, чтобы вы пришли ко мне домой.' },
      ],
    },

    {
      type: 'heading',
      text: 'Когда используется',
    },
    {
      type: 'rule',
      es: 'En <strong>exclamaciones con <em>¡Quién…!</em></strong>, para expresar una esperanza <strong>difícil o imposible</strong> en el presente / futuro: <em>¡Quién viviera cien años!</em>, <em>¡Quién conociera el futuro!</em>',
      ru: 'В <strong>восклицаниях с <em>¡Quién…!</em></strong> — для выражения трудно или невозможно осуществимого желания: <em>¡Quién viviera cien años!</em> «Вот бы прожить сто лет!», <em>¡Quién bailara como tú!</em> «Вот бы танцевать, как ты!». Это устоявшаяся конструкция; <em>quién</em> здесь = «кто бы…», подразумевая «как бы я хотел…».',
    },
    {
      type: 'rule',
      es: 'Después de <strong>verbos o expresiones en pasado o en condicional</strong>, en los mismos tipos de oración que requieren subjuntivo en presente:',
      ru: 'После <strong>главного глагола в прошедшем времени или кондиционале</strong> в придаточных, которые в настоящем требовали бы презенса субхунтива:',
      examples: [
        { es: 'voluntad / influencia: El jefe prohibió que usáramos los móviles.', ru: 'воля / влияние на других: Начальник запретил пользоваться мобильными.' },
        { es: 'sentimiento: No me gustó que no me invitaran.', ru: 'чувство: Мне не понравилось, что меня не пригласили.' },
        { es: 'valoración: Era lógico que Goyo protestase por la película.', ru: 'оценка ситуации: Логично было, что Гойо возмутился из-за фильма.' },
        { es: 'probabilidad: Era imposible que Pedro encontrara empleo. No lo buscaba.', ru: 'вероятность: Было невозможно, чтобы Педро нашёл работу. Он её не искал.' },
        { es: 'condicional: Sería mejor que llamaras a Chus.', ru: 'после кондиционала: Лучше было бы тебе позвонить Чус.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Si la oración subordinada se refiere al <strong>mismo sujeto</strong> que la principal, se usa <strong>infinitivo</strong>, no subjuntivo: <em>Quería ayudarte</em> (yo→yo), pero <em>Quería que me ayudaras</em> (yo→tú).',
      ru: 'Если действующее лицо в главной и придаточной части <strong>одно и то же</strong>, в придаточной используется <strong>инфинитив</strong>, а не субхунтив: <em>Quería ayudarte</em> «Хотел тебе помочь» (я→я), но <em>Quería que me ayudaras</em> «Хотел, чтобы ты мне помог» (я→ты).',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '82.1',
      title: 'Образуйте форму −ra (yo)',
      type: 'fill',
      instructions: 'Поставьте глагол в форме <em>yo</em> имперфекта субхунтива (вариант на <em>−ra</em>).',
      questions: [
        { id: 'q1', prompt: '<em>trabajar</em> → ',     correct: 'trabajara' },
        { id: 'q2', prompt: '<em>comer</em> → ',         correct: 'comiera' },
        { id: 'q3', prompt: '<em>vivir</em> → ',         correct: 'viviera' },
        { id: 'q4', prompt: '<em>llamar</em> → ',        correct: 'llamara' },
        { id: 'q5', prompt: '<em>aprender</em> → ',      correct: 'aprendiera' },
        { id: 'q6', prompt: '<em>escribir</em> → ',      correct: 'escribiera' },
        { id: 'q7', prompt: '<em>cantar</em> → ',        correct: 'cantara' },
        { id: 'q8', prompt: '<em>perder</em> → ',        correct: 'perdiera' },
        { id: 'q9', prompt: '<em>recibir</em> → ',       correct: 'recibiera' },
        { id: 'q10', prompt: '<em>comprar</em> → ',       correct: 'comprara' },
      ],
    },

    {
      id: '82.2',
      title: 'tú: −ar / −er / −ir',
      type: 'fill',
      instructions: 'Поставьте глагол в форме <em>tú</em> имперфекта субхунтива (любая форма — <em>−ras</em> или <em>−ses</em>).',
      questions: [
        { id: 'q1', prompt: '(<em>ayudar</em>) Quería que me ___ con los deberes.',           correct: ['ayudaras', 'ayudases'] },
        { id: 'q2', prompt: '(<em>llamar</em>) Esperaba que (tú) me ___ por la noche.',         correct: ['llamaras', 'llamases'] },
        { id: 'q3', prompt: '(<em>comer</em>) Me gustaría que ___ algo. Estás muy delgado.',     correct: ['comieras', 'comieses'] },
        { id: 'q4', prompt: '(<em>vivir</em>) Mi madre quería que ___ con ella.',                 correct: ['vivieras', 'vivieses'] },
        { id: 'q5', prompt: '(<em>escribir</em>) Te dije que me ___ una postal.',                  correct: ['escribieras', 'escribieses'] },
        { id: 'q6', prompt: '(<em>aprender</em>) Mis padres querían que ___ inglés de pequeño.',    correct: ['aprendieras', 'aprendieses'] },
        { id: 'q7', prompt: '(<em>cantar</em>) Sería bonito que (tú) ___ en la fiesta.',             correct: ['cantaras', 'cantases'] },
        { id: 'q8', prompt: '(<em>recibir</em>) Esperaba que ___ pronto la carta.',                   correct: ['recibieras', 'recibieses'] },
      ],
    },

    {
      id: '82.3',
      title: 'usted / él / ella',
      type: 'fill',
      instructions: 'Поставьте в форме 3 л. ед. ч. (форма на <em>−ra</em>).',
      questions: [
        { id: 'q1', prompt: '(<em>trabajar</em>) El jefe prohibió que Marta ___ los sábados.',         correct: 'trabajara' },
        { id: 'q2', prompt: '(<em>comer</em>) No quería que mi hijo ___ tantos dulces.',                 correct: 'comiera' },
        { id: 'q3', prompt: '(<em>llegar</em>) Era poco probable que (él) ___ a tiempo.',                 correct: 'llegara' },
        { id: 'q4', prompt: '(<em>perder</em>) Era natural que Andrés ___ las llaves; las dejaba en cualquier sitio.', correct: 'perdiera' },
        { id: 'q5', prompt: '(<em>escribir</em>) Era extraño que María no me ___ nunca.',                   correct: 'escribiera' },
        { id: 'q6', prompt: '(<em>protestar</em>) Era lógico que Goyo ___ por la película.',                 correct: 'protestara' },
        { id: 'q7', prompt: '(<em>vivir</em>) Me parecía raro que mi tío ___ tan lejos.',                      correct: 'viviera' },
      ],
    },

    {
      id: '82.4',
      title: 'nosotros: помните о тильде',
      type: 'fill',
      instructions: 'Поставьте глагол в форме <em>nosotros</em>. Не забудьте графическое ударение!',
      questions: [
        { id: 'q1', prompt: '(<em>llegar</em>) El profesor quería que ___ a tiempo.',           correct: 'llegáramos' },
        { id: 'q2', prompt: '(<em>trabajar</em>) Era imposible que ___ en domingo.',              correct: 'trabajáramos' },
        { id: 'q3', prompt: '(<em>comer</em>) Mi abuela quería que ___ más.',                     correct: 'comiéramos' },
        { id: 'q4', prompt: '(<em>aprender</em>) Era necesario que ___ esa lección.',              correct: 'aprendiéramos' },
        { id: 'q5', prompt: '(<em>escribir</em>) Quería que ___ una redacción.',                    correct: 'escribiéramos' },
        { id: 'q6', prompt: '(<em>vivir</em>) Mis padres preferían que ___ en el centro.',           correct: 'viviéramos' },
        { id: 'q7', prompt: '(<em>usar</em>) El jefe prohibió que ___ los móviles en la oficina.',    correct: 'usáramos' },
      ],
    },

    {
      id: '82.5',
      title: 'vosotros / ustedes',
      type: 'fill',
      instructions: 'Поставьте глагол в указанном лице.',
      questions: [
        { id: 'q1', prompt: '(<em>cantar</em>, vosotros) Me gustaría que (vosotros) ___ en la fiesta.',         correct: 'cantarais' },
        { id: 'q2', prompt: '(<em>comer</em>, vosotros) Era lógico que (vosotros) ___ después del partido.',     correct: 'comierais' },
        { id: 'q3', prompt: '(<em>vivir</em>, ustedes) Sería bonito que (ustedes) ___ aquí.',                     correct: 'vivieran' },
        { id: 'q4', prompt: '(<em>llamar</em>, ustedes) Esperaba que ___ por la mañana.',                          correct: 'llamaran' },
        { id: 'q5', prompt: '(<em>escribir</em>, vosotros) Quería que (vosotros) ___ a la abuela.',                  correct: 'escribierais' },
        { id: 'q6', prompt: '(<em>trabajar</em>, ellos) Era extraño que (ellos) ___ tantas horas.',                    correct: 'trabajaran' },
        { id: 'q7', prompt: '(<em>aprender</em>, ustedes) Era necesario que ___ las normas.',                          correct: 'aprendieran' },
      ],
    },

    {
      id: '82.6',
      title: 'Какая форма?',
      type: 'choice',
      instructions: 'Выберите правильную форму имперфекта субхунтива.',
      questions: [
        { id: 'q1', prompt: 'Quería que me ___ con los deberes.',     options: ['ayudas', 'ayudaras', 'ayudaba', 'ayudarías'],       correct: 'ayudaras' },
        { id: 'q2', prompt: 'El jefe prohibió que ___ los móviles.',   options: ['usamos', 'usáramos', 'usabamos', 'usariamos'],     correct: 'usáramos', explanation: 'В форме <em>nosotros</em> обязательная тильда: <em>usáramos</em>.' },
        { id: 'q3', prompt: 'Era lógico que (él) ___ por la película.', options: ['protesta', 'protestaría', 'protestara', 'protestaba'], correct: 'protestara' },
        { id: 'q4', prompt: '¡Quién ___ cien años!',                    options: ['vivía', 'viviera', 'vive', 'vivirá'],               correct: 'viviera' },
        { id: 'q5', prompt: 'Sería mejor que ___ a Chus.',                 options: ['llamas', 'llamaste', 'llamaras', 'llamarás'],       correct: 'llamaras' },
        { id: 'q6', prompt: 'Mis padres querían que (yo) ___ Derecho.',     options: ['estudio', 'estudiaba', 'estudiara', 'estudiaría'],  correct: 'estudiara' },
        { id: 'q7', prompt: 'Era extraño que (ellos) no me ___ nunca.',      options: ['llaman', 'llamaron', 'llamaran', 'llamarán'],       correct: 'llamaran' },
      ],
    },

    {
      id: '82.7',
      title: '¿Qué diría? — ¡Quién…!',
      type: 'fill',
      instructions: 'Перефразируйте через <em>¡Quién + impf. de subj.!</em> Образец: <em>Le gustaría bailar como un amigo suyo.</em> → <em>¡Quién bailara como tú!</em> Подставьте только глагол.',
      questions: [
        { id: 'q1', prompt: 'Le gustaría bailar como un amigo suyo. → ¡Quién ___ como tú!',                 correct: 'bailara' },
        { id: 'q2', prompt: 'Le gustaría comer como un amigo suyo. → ¡Quién ___ como tú!',                   correct: 'comiera' },
        { id: 'q3', prompt: 'Le gustaría hablar italiano como sus amigos. → ¡Quién ___ italiano como ellos!',  correct: 'hablara' },
        { id: 'q4', prompt: 'Le gustaría escribir como García Márquez. → ¡Quién ___ como García Márquez!',     correct: 'escribiera' },
        { id: 'q5', prompt: 'Le gustaría jugar al ajedrez como Karpov. → ¡Quién ___ al ajedrez como Karpov!',   correct: 'jugara' },
        { id: 'q6', prompt: 'Le gustaría vivir cien años. → ¡Quién ___ cien años!',                              correct: 'viviera' },
      ],
    },

    {
      id: '82.8',
      title: 'Соедините через que',
      type: 'fill',
      instructions: 'Объедините предложения. Образец: <em>Mauro no aprobó el carné de conducir. Lo sentimos.</em> → <em>Sentimos que Mauro no aprobara el carné de conducir.</em> Подставьте только глагольную форму.',
      questions: [
        { id: 'q1', prompt: 'Balbina encontró trabajo. Me alegré. → Me alegré de que Balbina ___ trabajo.',                                       correct: 'encontrara' },
        { id: 'q2', prompt: 'No me llamasteis el domingo. Me extrañó. → Me extrañó que (vosotros) no me ___ el domingo.',                          correct: 'llamarais' },
        { id: 'q3', prompt: 'Juan y Alicia se acordaron de nosotros. Nos gustó. → Nos gustó que Juan y Alicia se ___ de nosotros.',                 correct: 'acordaran' },
        { id: 'q4', prompt: 'Mi hermana se llevó el coche. No me importó. → No me importó que mi hermana se ___ el coche.',                          correct: 'llevara' },
        { id: 'q5', prompt: 'No aprobaste. Lo sentí. → Sentí que (tú) no ___.',                                                                       correct: 'aprobaras' },
        { id: 'q6', prompt: 'No hablasteis con Blas. Me pareció mal. → Me pareció mal que (vosotros) no ___ con Blas.',                                correct: 'hablarais' },
        { id: 'q7', prompt: 'No invitasteis a Sonia. No me gustó. → No me gustó que (vosotros) no ___ a Sonia.',                                        correct: 'invitarais' },
        { id: 'q8', prompt: 'Mis padres nos regalaron una alfombra. Nos encantó. → Nos encantó que mis padres nos ___ una alfombra.',                      correct: 'regalaran' },
      ],
    },

    {
      id: '82.9',
      title: 'Дополните по контексту',
      type: 'fill',
      instructions: 'Подставьте глагол в имперфекте субхунтива (форма −ra).',
      questions: [
        { id: 'q1', prompt: '(<em>jugar</em>) Cuando era pequeño mis padres querían que (yo) ___ al tenis.',                       correct: 'jugara' },
        { id: 'q2', prompt: '(<em>lavar</em>) ¿Vas a ponerte a lavar el coche? Preferiría que lo ___ en otro momento.',              correct: 'lavaras' },
        { id: 'q3', prompt: '(<em>llegar</em>) ¿Ya estáis aquí? Esperaba que (vosotros) ___ más tarde.',                              correct: 'llegarais' },
        { id: 'q4', prompt: '(<em>comprar</em>) Gracias por el regalo, Andrés. No era necesario que (tú) ___ nada.',                  correct: 'compraras' },
        { id: 'q5', prompt: '(<em>perder</em>) Era imposible que no ___ nadie. Lo dijo en voz alta.',                                  correct: 'perdiera' },
        { id: 'q6', prompt: '(<em>recibir</em>) Me encantaría que (ustedes) ___ a mis amigos en su casa.',                              correct: 'recibieran' },
        { id: 'q7', prompt: '(<em>perder</em>) Antonia nos despertó a las siete. Tenía miedo de que (nosotros) ___ el avión.',           correct: 'perdiéramos' },
        { id: 'q8', prompt: '(<em>cantar</em>) Todo el mundo esperaba que Marta ___ en la fiesta, pero tenía mal la voz.',                correct: 'cantara' },
        { id: 'q9', prompt: '(<em>recibir</em>) ¿Por qué no vinieron a la cena? Puede que no ___ la invitación.',                          correct: 'recibieran' },
        { id: 'q10', prompt: '(<em>llamar</em>) Me encantó que (tú) me ___. Tenía muchas ganas de verte.',                                   correct: 'llamaras' },
        { id: 'q11', prompt: '(<em>hablar</em>) El año pasado el director nos prohibió que ___ en clase.',                                    correct: 'habláramos' },
      ],
    },

    {
      id: '82.10',
      title: 'Какие формы корректны',
      type: 'multi',
      instructions: 'Отметьте все правильные формы имперфекта субхунтива.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие формы написаны без ошибок?',
          options: [
            'trabajara', 'trabajase', 'trabajáramos', 'trabajáramos',
            'trabajamos (subj.)',
            'comiera', 'comiese', 'comieramos', 'comiéramos', 'comiésemos',
            'viviera', 'vivierais', 'vivieran',
            'vivieramos', 'viviéramos',
            'cantarías (subj.)',
            'cantara', 'cantase',
          ],
          correct: ['trabajara', 'trabajase', 'trabajáramos', 'comiera', 'comiese', 'comiéramos', 'comiésemos', 'viviera', 'vivierais', 'vivieran', 'viviéramos', 'cantara', 'cantase'],
          explanation: '<em>−ra</em> и <em>−se</em> — обе формы имперфекта субхунтива. В 1 л. мн. ч. — обязательная тильда: <em>trabajáramos / comiéramos / viviéramos</em>. <em>trabajamos / cantarías</em> — это другие времена.',
        },
      ],
    },

    {
      id: '82.11',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['trabajara', 'trabajaras', 'trabajaramos', 'trabajaran'], correct: 'trabajaramos', explanation: '<em>trabajáramos</em> — обязательная тильда.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['comiera', 'comieras', 'comiéramos', 'comierían'],         correct: 'comierían',     explanation: 'Это кондиционал, не субхунтив.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['vivieras', 'vivierais', 'viviéramos', 'vivieron'],          correct: 'vivieron',      explanation: 'Это индефинидо, не субхунтив.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['llamara', 'llamáramos', 'llamasen', 'llamarías'],            correct: 'llamarías',     explanation: 'Это кондиционал.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['cantara', 'cantarais', 'cantaramos', 'cantaran'],             correct: 'cantaramos',    explanation: '<em>cantáramos</em> — с тильдой.' },
      ],
    },

    {
      id: '82.12',
      title: 'Аудио-диктант',
      type: 'fill',
      instructions: 'Запишите услышанное полностью с диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Quería que me ayudaras con los deberes.',         correct: ['Quería que me ayudaras con los deberes.', 'Quería que me ayudaras con los deberes'] },
        { id: 'q2', prompt: '', audio: 'El jefe prohibió que usáramos los móviles.',       correct: ['El jefe prohibió que usáramos los móviles.', 'El jefe prohibió que usáramos los móviles'] },
        { id: 'q3', prompt: '', audio: 'Era lógico que protestara.',                        correct: ['Era lógico que protestara.', 'Era lógico que protestara'] },
        { id: 'q4', prompt: '', audio: '¡Quién viviera cien años!',                         correct: ['¡Quién viviera cien años!', 'Quién viviera cien años.', 'Quién viviera cien años'] },
        { id: 'q5', prompt: '', audio: 'Sería mejor que llamaras a Chus.',                  correct: ['Sería mejor que llamaras a Chus.', 'Sería mejor que llamaras a Chus'] },
        { id: 'q6', prompt: '', audio: 'Me extrañó que no me invitaran.',                    correct: ['Me extrañó que no me invitaran.', 'Me extrañó que no me invitaran'] },
      ],
    },

    {
      id: '82.13',
      title: 'Сопоставьте инфинитив и форму nosotros',
      type: 'match',
      instructions: 'Подберите для каждого инфинитива форму <em>nosotros</em> имперфекта субхунтива (на <em>−ra</em>).',
      pool: ['trabajáramos', 'comiéramos', 'viviéramos', 'llamáramos', 'aprendiéramos', 'escribiéramos', 'cantáramos', 'recibiéramos'],
      questions: [
        { id: 'q1', prompt: '<em>trabajar</em>',  correct: 'trabajáramos' },
        { id: 'q2', prompt: '<em>comer</em>',     correct: 'comiéramos' },
        { id: 'q3', prompt: '<em>vivir</em>',     correct: 'viviéramos' },
        { id: 'q4', prompt: '<em>llamar</em>',    correct: 'llamáramos' },
        { id: 'q5', prompt: '<em>aprender</em>',  correct: 'aprendiéramos' },
        { id: 'q6', prompt: '<em>escribir</em>',  correct: 'escribiéramos' },
        { id: 'q7', prompt: '<em>cantar</em>',     correct: 'cantáramos' },
        { id: 'q8', prompt: '<em>recibir</em>',    correct: 'recibiéramos' },
      ],
    },
  ],
};
