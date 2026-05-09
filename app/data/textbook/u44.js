// ============================================================
// Unidad 44 — Contraste entre SER y ESTAR
// soy alegre / estoy alegre.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u44 = {
  id: 'u44',
  number: 44,
  title: { es: 'soy alegre / estoy alegre', topic: 'Contraste entre ser y estar' },
  topicRu: 'Различие ser и estar: постоянное против временного',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'La diferencia básica entre <strong>ser</strong> y <strong>estar</strong> con un mismo adjetivo es: <em>ser</em> describe una <strong>cualidad normal o permanente</strong> («así es esa persona / esa cosa»); <em>estar</em> describe el <strong>estado actual</strong>, posiblemente diferente de lo habitual («así está ahora»).',
      ru: 'Главное отличие <strong>ser</strong> от <strong>estar</strong> с одним и тем же прилагательным: <em>ser</em> — это «так есть всегда / по природе» (постоянное качество); <em>estar</em> — «так сейчас, в моменте» (текущее, возможно временное состояние).',
      examples: [
        { es: 'María <strong>es</strong> muy activa. (Es así normalmente.)', ru: 'Мария — очень активная. (Такая по характеру.)' },
        { es: 'Hoy María <strong>está</strong> cansada. (Solo hoy.)', ru: 'Сегодня Мария уставшая. (Только сегодня.)' },
        { es: 'Julián <strong>es</strong> alegre. (Carácter.)', ru: 'Хулиан — весёлый человек. (Так по характеру.)' },
        { es: 'Hoy Julián no <strong>está</strong> alegre. <strong>Está</strong> triste. (Hoy.)', ru: 'Сегодня Хулиан не весёлый. Сегодня он грустный.' },
      ],
    },
    {
      type: 'heading',
      text: 'Сравнительная таблица случаев',
    },
    {
      type: 'table',
      caption: 'SER vs ESTAR с прилагательным',
      columns: ['SER (норма / характер)', 'ESTAR (сейчас, в моменте)'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>Sofía <strong>es</strong> delgada.</em> (Es así siempre.)',          '<em>Estás muy <strong>delgado</strong>, Pedro.</em> (Изменение.)'],
        ['<em>Ana <strong>es</strong> elegante.</em> (Carácter / estilo.)',          '<em>Estás muy <strong>elegante</strong> con ese vestido.</em> (Сейчас в моменте.)'],
        ['<em>El hielo <strong>es</strong> frío.</em> (Por naturaleza.)',            '<em>Este café <strong>está</strong> frío.</em> (Сейчас.)'],
        ['<em>Hoy <strong>es</strong> jueves.</em>',                                  '<em>Hoy <strong>estoy</strong> contenta.</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'Los <strong>cambios</strong> y la situación <em>física</em> de personas, animales, cosas y lugares siempre van con <strong>estar</strong>: <em>Estás muy delgado. La iglesia está en la plaza.</em>',
      ru: 'Сообщить, что человек <em>изменился</em>, и указать, <em>где</em> кто-то/что-то находится — это всегда <strong>estar</strong>: <em>Estás muy delgado</em> (похудел), <em>La iglesia está en la plaza</em> (стоит на площади).',
      examples: [
        { es: 'Ana <strong>está</strong> muy alta este año.', ru: 'Аня сильно вытянулась в этом году.' },
        { es: 'La iglesia <strong>está</strong> en la Plaza Mayor.', ru: 'Церковь — на Главной площади.' },
        { es: 'La fiesta <strong>es</strong> en mi casa.', ru: '<strong>Но!</strong> Праздник проходит у меня. (Место события — <em>ser</em>.)' },
      ],
    },
    {
      type: 'atencion',
      es: 'Importante: para hablar del <strong>lugar de un evento</strong> (concierto, boda, partido) se usa <em>ser</em>, no <em>estar</em>: <em>La boda <strong>es</strong> en la iglesia. El concierto <strong>es</strong> en el Teatro Real.</em>',
      ru: 'Важно: «где состоится событие» (свадьба, концерт, матч) — это всегда <em>ser</em>, не <em>estar</em>. <em>La boda <strong>es</strong> en la iglesia.</em> «Где находится здание этой церкви» — наоборот, <em>estar</em>: <em>La iglesia <strong>está</strong> en el centro.</em>',
    },
    {
      type: 'heading',
      text: 'Прилагательные, у которых меняется значение',
    },
    {
      type: 'rule',
      es: 'Algunos adjetivos significan <strong>cosas distintas</strong> según vayan con <em>ser</em> o con <em>estar</em>. Los más útiles para A1–A2:',
      ru: 'Часть прилагательных при <em>ser</em> и <em>estar</em> означает <strong>совсем разное</strong>. Самые полезные пары:',
    },
    {
      type: 'table',
      caption: 'Разное значение с <em>ser</em> и <em>estar</em>',
      columns: ['Прилагательное', 'SER = ', 'ESTAR = '],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['<em>malo</em>',     'плохой по поведению / качеству',      'болеет'],
        ['<em>bueno</em>',     'хороший по характеру / качеству',     'вкусный; выздоровел'],
        ['<em>aburrido</em>', 'скучный (тип, фильм)',                  'скучает'],
        ['<em>listo</em>',     'умный, сообразительный',                'готов(а)'],
        ['<em>rico</em>',     'богатый',                                'вкусный'],
        ['<em>moreno</em>',    'смуглый / темноволосый по природе',     'загоревший'],
      ],
    },
    {
      type: 'table',
      caption: 'Сравните в контексте',
      columns: ['SER',                                    'ESTAR'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>Este perro <strong>es</strong> muy malo.</em> (Опасный, кусается.)',     '<em>Pepe <strong>está</strong> malo.</em> (Болеет.)'],
        ['<em>Esta película <strong>es</strong> aburrida.</em> (Скучная.)',                '<em>Los niños <strong>están</strong> aburridos.</em> (Им скучно.)'],
        ['<em>Carlos <strong>es</strong> listo.</em> (Сообразительный.)',                  '<em>Carlos <strong>está</strong> listo.</em> (Готов идти.)'],
        ['<em>Felipe <strong>es</strong> rico.</em> (Богатый.)',                            '<em>Esta paella <strong>está</strong> riquísima.</em> (Очень вкусная.)'],
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '44.1',
      title: '<em>ser</em> или <em>estar</em>?',
      type: 'choice',
      instructions: 'Выберите верный глагол, исходя из смысла (постоянное или сейчас).',
      questions: [
        { id: 'q1', prompt: '___ cansado.',                            options: ['Soy', 'Estoy'],   correct: 'Estoy' },
        { id: 'q2', prompt: 'Este café ___ muy caliente.',              options: ['es', 'está'],     correct: 'está', explanation: 'Этот конкретный кофе сейчас горячий — <em>estar</em>.' },
        { id: 'q3', prompt: 'Algunas rosas ___ blancas.',               options: ['son', 'están'],   correct: 'son',  explanation: 'Цвет розы — стабильное свойство.' },
        { id: 'q4', prompt: 'Esos cristales ___ sucios.',                options: ['son', 'están'],   correct: 'están' },
        { id: 'q5', prompt: 'Este árbol ___ muerto.',                    options: ['es', 'está'],     correct: 'está', explanation: '<em>Estar muerto</em> — фиксированное выражение.' },
        { id: 'q6', prompt: 'Ana y Sergio ___ casados.',                  options: ['son', 'están'],   correct: 'están' },
        { id: 'q7', prompt: 'Las margaritas ___ amarillas y blancas.',     options: ['son', 'están'],   correct: 'son',  explanation: 'Цвет вида — постоянная характеристика.' },
        { id: 'q8', prompt: '¡Qué guapa ___ con ese sombrero, Lola!',      options: ['eres', 'estás'],   correct: 'estás', explanation: 'В моменте, со шляпой — текущее впечатление.' },
        { id: 'q9', prompt: 'Hoy no ___ alegre, ¿qué te pasa?',            options: ['eres', 'estás'],   correct: 'estás' },
      ],
    },

    {
      id: '44.2',
      title: 'Подставьте форму <em>ser</em> или <em>estar</em>',
      type: 'fill',
      instructions: 'Поставьте подходящую форму в настоящем времени.',
      questions: [
        { id: 'q1', prompt: 'Las serpientes ___ peligrosas.',              correct: 'son',    explanation: 'Общее свойство.' },
        { id: 'q2', prompt: 'Este libro ___ muy interesante.',              correct: 'es',     explanation: 'Стабильная характеристика книги.' },
        { id: 'q3', prompt: 'La nieve ___ blanca.',                          correct: 'es',     explanation: 'Цвет — общее свойство.' },
        { id: 'q4', prompt: 'No os sentéis en esas sillas. ___ sucias.',      correct: 'Están',  explanation: 'Сейчас грязные — <em>estar</em>.' },
        { id: 'q5', prompt: 'Juan ___ muy guapo con uniforme.',                correct: 'está',  explanation: 'Сейчас, в форме — впечатление в моменте.' },
        { id: 'q6', prompt: 'La sopa ___ fría. Caliéntala un poco.',           correct: 'está' },
        { id: 'q7', prompt: 'Los plátanos ___ amarillos.',                      correct: 'son',  explanation: 'Цвет банана — общее свойство.' },
        { id: 'q8', prompt: '¡Qué guapo ___ Francisco! Tiene unos ojos preciosos.', correct: 'es', explanation: 'Описание самого человека (а не его текущего вида).' },
        { id: 'q9', prompt: 'Flor y Pili ___ muy guapas con el nuevo peinado.',   correct: 'están', explanation: 'С новой причёской, в моменте.' },
      ],
    },

    {
      id: '44.3',
      title: 'Местоположение или место события?',
      type: 'fill',
      instructions: 'Помните: <em>где находится здание/предмет/человек</em> — <em>estar</em>; <em>где состоится событие</em> — <em>ser</em>.',
      questions: [
        { id: 'q1', prompt: '¿Dónde ___ la fiesta?',                       correct: 'es',     explanation: 'Событие → <em>ser</em>.' },
        { id: 'q2', prompt: 'El examen ___ a las diez.',                    correct: 'es',     explanation: 'Событие во времени.' },
        { id: 'q3', prompt: '¿Dónde ___ mis gafas?',                        correct: 'están' },
        { id: 'q4', prompt: 'Mañana ___ mi cumpleaños.',                    correct: 'es' },
        { id: 'q5', prompt: 'El examen ___ en el aula 15.',                  correct: 'es',     explanation: 'Где пройдёт экзамен (событие).' },
        { id: 'q6', prompt: '¿Cuándo ___ la boda?',                          correct: 'es' },
        { id: 'q7', prompt: '¿Dónde ___ la discoteca «Futuro»?',              correct: 'está',   explanation: 'Где находится здание дискотеки.' },
        { id: 'q8', prompt: 'El examen ___ encima de la mesa.',                correct: 'está',  explanation: 'Здесь экзамен = листок, предмет → <em>estar</em>.' },
        { id: 'q9', prompt: 'El concierto ___ en el Teatro Real.',              correct: 'es',   explanation: 'Где пройдёт концерт.' },
        { id: 'q10', prompt: 'El Teatro Real ___ en la Plaza de la Ópera.',      correct: 'está', explanation: 'Где находится само здание.' },
      ],
    },

    {
      id: '44.4',
      title: 'Описание людей и предметов',
      type: 'fill',
      instructions: 'Образец: <em>Estás listo. — Готов идти.</em> Используйте подсказку справа.',
      questions: [
        { id: 'q1', prompt: 'Estás ___ (готов), vamos.',                    correct: 'listo',   explanation: '<em>estar listo</em> = готов.' },
        { id: 'q2', prompt: 'Carlos ___ muy moreno este verano.',             correct: 'está',   explanation: 'Загорел, изменение → <em>estar</em>.' },
        { id: 'q3', prompt: 'Felipe ___ muy rico, tiene tres coches.',         correct: 'es',    explanation: 'Богатый — стабильно.' },
        { id: 'q4', prompt: 'Juanito ___ malo hoy, no va al cole.',            correct: 'está', explanation: '<em>estar malo</em> = болеет.' },
        { id: 'q5', prompt: 'Isabel ___ muy morena (по природе, всегда).',     correct: 'es' },
        { id: 'q6', prompt: 'Esta paella ___ muy rica.',                       correct: 'está',  explanation: 'Вкусная — <em>estar</em>.' },
        { id: 'q7', prompt: 'Esta película ___ aburrida, voy a apagarla.',      correct: 'es',   explanation: '«Скучная по сути» — <em>ser aburrida</em>.' },
        { id: 'q8', prompt: 'Ángel y Nieves ___ muy buenos amigos.',             correct: 'son' },
      ],
    },

    {
      id: '44.5',
      title: 'Соедините начало и продолжение',
      type: 'match',
      instructions: 'Подберите окончание, которое сохраняет смысл фразы.',
      pool: [
        'es alegre por naturaleza.',
        'está alegre porque ha aprobado.',
        'es muy alta, mide 1,80.',
        'está muy alto, ha crecido este año.',
        'es de Cádiz.',
        'está en Cádiz por trabajo.',
        'es a las ocho.',
        'está en la calle Mayor.',
      ],
      questions: [
        { id: 'q1', prompt: 'Mi tío Andrés ___',                               correct: 'es alegre por naturaleza.' },
        { id: 'q2', prompt: 'Hoy mi tío Andrés ___',                            correct: 'está alegre porque ha aprobado.' },
        { id: 'q3', prompt: 'Su madre siempre ___',                             correct: 'es muy alta, mide 1,80.' },
        { id: 'q4', prompt: 'Su hijo Lucas ___',                                 correct: 'está muy alto, ha crecido este año.' },
        { id: 'q5', prompt: 'Mi amiga Lola ___',                                 correct: 'es de Cádiz.' },
        { id: 'q6', prompt: 'Esta semana Lola ___',                              correct: 'está en Cádiz por trabajo.' },
        { id: 'q7', prompt: 'La función ___',                                     correct: 'es a las ocho.' },
        { id: 'q8', prompt: 'El teatro ___',                                       correct: 'está en la calle Mayor.' },
      ],
    },

    {
      id: '44.6',
      title: '«Постоянное» или «сейчас»?',
      type: 'multi',
      instructions: 'Какие из этих фраз <em>обычно</em> идут с <strong>estar</strong> (а не с <em>ser</em>)?',
      questions: [
        {
          id: 'q1',
          prompt: 'Где нужен <em>estar</em>?',
          options: [
            'возраст («ему 30 лет»)',
            'сегодняшнее настроение',
            'местонахождение здания',
            'постоянный цвет вещи',
            'болезнь («я простужен»)',
            'свежесть еды («суп холодный»)',
            'национальность',
            'место события (концерта, свадьбы)',
            'факт изменения («ты похудел»)',
          ],
          correct: [
            'сегодняшнее настроение',
            'местонахождение здания',
            'болезнь («я простужен»)',
            'свежесть еды («суп холодный»)',
            'факт изменения («ты похудел»)',
          ],
          explanation: 'Возраст — <em>tener</em> (см. Unidad 45). Цвет, национальность и место события — <em>ser</em>.',
        },
      ],
    },

    {
      id: '44.7',
      title: 'Один и тот же объект',
      type: 'fill',
      instructions: 'Поставьте форму <em>ser</em> или <em>estar</em>, опираясь на смысл «обычно» / «сейчас».',
      questions: [
        { id: 'q1', prompt: 'Mi café normalmente ___ frío. (Так выходит каждый раз.)',  correct: 'es',  explanation: 'Привычное свойство — <em>ser</em>.' },
        { id: 'q2', prompt: 'Mi café hoy ___ frío. (Сегодня остыл.)',                   correct: 'está' },
        { id: 'q3', prompt: 'Diana ___ una persona muy alegre.',                        correct: 'es' },
        { id: 'q4', prompt: 'Diana hoy no ___ muy alegre.',                              correct: 'está' },
        { id: 'q5', prompt: 'Mi hermana ___ muy delgada (siempre).',                     correct: 'es' },
        { id: 'q6', prompt: '¡Pedro, ___ muy delgado! ¿No comes?',                      correct: 'estás', explanation: 'Изменение — <em>estar</em>.' },
        { id: 'q7', prompt: 'Esta planta normalmente ___ verde, pero hoy ___ amarilla.', correct: 'es está', explanation: 'Через пробел: первое — общее свойство (<em>es</em>), второе — текущее (<em>está</em>).' },
      ],
    },

    {
      id: '44.8',
      title: 'Выберите верный вариант',
      type: 'choice',
      instructions: 'Помните о паре «другое значение»: <em>ser malo / estar malo, ser listo / estar listo</em>…',
      questions: [
        { id: 'q1', prompt: 'Pepe no va al colegio porque ___ malo.', options: ['es', 'está'], correct: 'está', explanation: '<em>estar malo</em> = болеет.' },
        { id: 'q2', prompt: 'Este chico ___ muy malo, siempre miente.', options: ['es', 'está'], correct: 'es',  explanation: '<em>ser malo</em> = плохой характер.' },
        { id: 'q3', prompt: 'La paella ___ riquísima, ¿la has hecho tú?', options: ['es', 'está'], correct: 'está' },
        { id: 'q4', prompt: 'El abuelo ___ muy rico: tiene casas en tres países.', options: ['es', 'está'], correct: 'es' },
        { id: 'q5', prompt: 'Los niños ___ aburridos, no saben qué hacer.', options: ['son', 'están'], correct: 'están', explanation: '<em>estar aburrido</em> = скучает.' },
        { id: 'q6', prompt: 'Esta clase ___ muy aburrida.',  options: ['es', 'está'], correct: 'es', explanation: '<em>ser aburrido</em> = скучный сам по себе.' },
        { id: 'q7', prompt: '¿Ya ___ listo? Vámonos.',         options: ['eres', 'estás'], correct: 'estás', explanation: '<em>estar listo</em> = готов.' },
        { id: 'q8', prompt: 'Mi sobrino ___ muy listo, aprende rápido.', options: ['es', 'está'], correct: 'es', explanation: '<em>ser listo</em> = умный.' },
      ],
    },

    {
      id: '44.9',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза грамматически или по смыслу некорректна — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Estoy cansado.', 'Soy cansado.', 'Estoy enfermo.', 'Estoy contento.'], correct: 'Soy cansado.', explanation: 'Усталость — это всегда <em>estar</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['La nieve está blanca.', 'La nieve es blanca.', 'El cielo está nublado.', 'El cielo es azul.'], correct: 'La nieve está blanca.', explanation: 'Цвет снега — постоянное свойство, нужен <em>ser</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['La fiesta es en mi casa.', 'La fiesta está en mi casa.', 'Mi casa está en el centro.', 'El concierto es a las ocho.'], correct: 'La fiesta está en mi casa.', explanation: 'Место события — <em>ser</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Hoy es martes.', 'Hoy estoy contenta.', 'Hoy estoy peruana.', 'Hoy está nublado.'], correct: 'Hoy estoy peruana.', explanation: 'Национальность — <em>ser</em>: <em>soy peruana</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Estoy listo.', 'Soy lista, lo entiendo todo.', 'Esta sopa está rica.', 'Esta sopa es rica desde Filipinas.'], correct: 'Esta sopa es rica desde Filipinas.', explanation: 'Если речь о вкусе — <em>está rica</em>; <em>ser rica</em> значит «богатая».' },
      ],
    },

    {
      id: '44.10',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите фразу со всеми тильдами и знаками препинания.',
      questions: [
        { id: 'q1', prompt: '', audio: 'María es muy alegre.',          correct: ['María es muy alegre.'] },
        { id: 'q2', prompt: '', audio: 'Hoy María está triste.',         correct: ['Hoy María está triste.'] },
        { id: 'q3', prompt: '', audio: 'La sopa está fría.',              correct: ['La sopa está fría.'] },
        { id: 'q4', prompt: '', audio: 'El hielo es frío.',                correct: ['El hielo es frío.'] },
        { id: 'q5', prompt: '', audio: 'La fiesta es en mi casa.',         correct: ['La fiesta es en mi casa.'] },
        { id: 'q6', prompt: '', audio: 'La iglesia está en el centro.',     correct: ['La iglesia está en el centro.'] },
        { id: 'q7', prompt: '', audio: '¡Qué guapa estás hoy!',             correct: ['¡Qué guapa estás hoy!'] },
      ],
    },

    {
      id: '44.11',
      title: 'Постройте фразу из элементов',
      type: 'fill',
      instructions: 'Выберите между <em>ser</em> и <em>estar</em> и спрягите. Запишите всю фразу.',
      questions: [
        { id: 'q1', prompt: 'yo / cansado →',                                  correct: ['Estoy cansado.'] },
        { id: 'q2', prompt: 'mi madre / médica →',                              correct: ['Mi madre es médica.'] },
        { id: 'q3', prompt: 'el examen / a las nueve →',                         correct: ['El examen es a las nueve.'] },
        { id: 'q4', prompt: 'las llaves / encima de la mesa →',                   correct: ['Las llaves están encima de la mesa.'] },
        { id: 'q5', prompt: 'mis hijos / muy altos este año →',                    correct: ['Mis hijos están muy altos este año.'] },
        { id: 'q6', prompt: 'tú / muy simpática →',                                correct: ['Tú eres muy simpática.', 'Eres muy simpática.'] },
        { id: 'q7', prompt: 'el café / frío →',                                    correct: ['El café está frío.'] },
      ],
    },
  ],
};
