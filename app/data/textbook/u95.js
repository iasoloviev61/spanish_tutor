// ============================================================
// Unidad 95 — Expresiones con infinitivo (2)
// Tengo que trabajar. ¿Puedo abrir la ventana?
// Перифразы обязанности и разрешения:
// tener que / deber / haber que (обязанность) и
// poder / se puede / no poder (разрешение, предположение).
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u95 = {
  id: 'u95',
  number: 95,
  title: { es: 'Tengo que trabajar. ¿Puedo abrir la ventana?', topic: 'Expresiones con infinitivo (2)' },
  topicRu: 'Глагольные перифразы (2): обязанность, необходимость, разрешение',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Las perífrasis <em>tener que, deber, haber que</em> + infinitivo expresan <strong>obligación</strong> o <strong>necesidad</strong>; <em>poder</em> + infinitivo, <strong>permiso</strong> o <strong>prohibición</strong>. Cada una tiene su matiz.',
      ru: 'Перифразы <em>tener que, deber, haber que</em> + инфинитив выражают <strong>обязанность</strong> или <strong>необходимость</strong>; <em>poder</em> + инфинитив — <strong>разрешение</strong> или <strong>запрет</strong>. У каждой есть свой нюанс.',
      examples: [
        { es: 'Tengo que trabajar el sábado.', ru: 'Мне придётся работать в субботу. (так сложились обстоятельства)' },
        { es: 'Debes llamar a Rubén. Lo prometiste.', ru: 'Ты должен позвонить Рубену. (по совести, по обещанию)' },
        { es: 'Hay que ser puntual.', ru: 'Нужно быть пунктуальным. (общее правило)' },
        { es: '¿Puedo abrir la ventana?', ru: 'Можно открыть окно?' },
      ],
    },

    {
      type: 'heading',
      text: 'tener que vs deber vs haber que',
    },
    {
      type: 'table',
      caption: 'Сравнение перифраз обязанности',
      columns: ['Перифраза', 'Что выражает', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<em>tener que</em> + inf.', 'обязанность по обстоятельствам', '<em>Este domingo tenemos que trabajar.</em>'],
        ['<em>deber</em> + inf.', 'обязанность с позиции говорящего (совет, моральный долг)', '<em>Debes llamar a Rubén.</em>'],
        ['<em>haber que</em> + inf.', 'безличная обязанность (3-е лицо ед.ч.)', '<em>Hay que tener un visado.</em>'],
      ],
    },

    {
      type: 'rule',
      es: 'En negativo el matiz cambia: <em>no tener que</em> + inf. = «no es necesario»; <em>no deber</em> + inf. = «no es aconsejable, no debes hacerlo».',
      ru: 'В отрицании смыслы расходятся: <em>no tener que</em> + инфинитив = <strong>«не обязательно, не нужно»</strong>; <em>no deber</em> + инфинитив = <strong>«не следует, нехорошо делать»</strong>.',
      examples: [
        { es: 'Mañana no tengo que madrugar. Es fiesta.', ru: 'Завтра не надо рано вставать. Праздник.' },
        { es: 'No debes hablar con la boca llena.', ru: 'Не стоит говорить с полным ртом.' },
      ],
    },

    {
      type: 'atencion',
      es: '<em>Haber que</em> es <strong>impersonal</strong>: solo existe en 3.ª persona del singular: <em>hay, había, hubo, habrá, ha habido, habría que...</em>',
      ru: '<em>Haber que</em> — <strong>безличная</strong> конструкция: только в 3-м лице ед.ч.: <em>hay, había, hubo, habrá, ha habido, habría que...</em>',
    },

    {
      type: 'rule',
      es: '<em>Deber de</em> + infinitivo (con la preposición <em>de</em>) expresa una <strong>suposición</strong> o <strong>deducción</strong> del hablante.',
      ru: '<em>Deber de</em> + инфинитив (именно с предлогом <em>de</em>) выражает <strong>предположение</strong> или <strong>догадку</strong> говорящего.',
      examples: [
        { es: 'Pedro debe de ser extranjero. Casi no habla español.', ru: 'Педро, должно быть, иностранец. Почти не говорит по-испански.' },
        { es: 'No deben de ser de aquí. No conocen a nadie.', ru: 'Они, наверное, не местные. Никого не знают.' },
      ],
    },

    {
      type: 'heading',
      text: 'poder + инфинитив',
    },
    {
      type: 'rule',
      es: '<em>Poder</em> + infinitivo se usa para pedir o conceder <strong>permiso</strong>, o (en negativo) para indicar <strong>prohibición</strong>. La forma impersonal <em>se puede / no se puede</em> indica permiso o prohibición de carácter general. <em>No poder</em> también puede expresar una <strong>suposición</strong> de imposibilidad.',
      ru: '<em>Poder</em> + инфинитив = <strong>«можно», «разрешено»</strong> (или <strong>«нельзя»</strong> в отрицании). Безличная форма <em>se puede / no se puede</em> = общее разрешение или запрет. <em>No poder</em> в значении предположения = «не может быть», «исключено».',
      examples: [
        { es: '¿Puedo abrir la ventana?', ru: 'Можно открыть окно?' },
        { es: 'Aquí no podemos aparcar. Está prohibido.', ru: 'Здесь нельзя парковаться. Запрещено.' },
        { es: 'En este museo no se pueden hacer fotos.', ru: 'В этом музее нельзя фотографировать.' },
        { es: 'No puede ser Juan. Se fue ayer a Cali.', ru: 'Не может быть, что это Хуан. Он вчера уехал в Кали.' },
      ],
    },

    {
      type: 'table',
      caption: 'Сравнение: «нельзя» vs «не может быть»',
      columns: ['No deber + inf.', 'No poder + inf.'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>No debe trabajar aquí. No lleva uniforme.</em>', '<em>No puede trabajar aquí. No ha terminado la carrera.</em>'],
        ['<em>(Supongo que no trabaja aquí.)</em>',           '<em>(Es imposible que trabaje aquí.)</em>'],
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '95.1',
      title: 'tener que, deber, no tener que, no deber',
      type: 'fill',
      instructions: 'Поставьте подходящую перифразу в соответствующем времени. Подсказка в скобках: «обстоятельство», «совет», «не нужно», «нехорошо».',
      questions: [
        { id: 'q1', prompt: '(yo, обстоятельство) ___ levantarme a las seis para llegar al aeropuerto.', correct: 'Tengo que' },
        { id: 'q2', prompt: '(tú, совет) ___ estudiar más, si quieres aprobar.', correct: 'Debes' },
        { id: 'q3', prompt: '(nosotros, не нужно) Mañana ___ madrugar. Es domingo.', correct: 'no tenemos que' },
        { id: 'q4', prompt: '(tú, нехорошо) ___ hablar con la boca llena.', correct: 'No debes' },
        { id: 'q5', prompt: '(yo, обстоятельство, prét. perfecto) Ayer ___ trabajar hasta las diez.', correct: 'tuve que' },
        { id: 'q6', prompt: '(vosotros, совет) ___ ser puntuales con los profesores.', correct: 'Debéis' },
        { id: 'q7', prompt: '(ella, обстоятельство) Sara ___ levantarse a las cinco. Sale de viaje a las seis.', correct: 'tiene que' },
        { id: 'q8', prompt: '(не нужно: 3 л. мн.ч.) Los chicos ___ estudiar hoy. Ya lo hicieron ayer.', correct: 'no tienen que' },
      ],
    },

    {
      id: '95.2',
      title: 'haber que (безличное)',
      type: 'fill',
      instructions: 'Поставьте <em>haber que</em> в нужном времени (<em>hay, había, hubo, habrá, ha habido, habría</em>) + инфинитив.',
      questions: [
        { id: 'q1', prompt: 'Si hay un accidente, ___ que llamar a una ambulancia.', correct: 'hay' },
        { id: 'q2', prompt: 'En el futuro ___ que hablar varios idiomas.', correct: 'habrá' },
        { id: 'q3', prompt: 'Cuando yo era pequeño, ___ que llamar de usted a los profesores.', correct: 'había' },
        { id: 'q4', prompt: 'Ayer ___ que rescatar a varias personas del incendio.', correct: 'hubo' },
        { id: 'q5', prompt: '___ que ayudar a las personas mayores.', correct: 'Hay' },
        { id: 'q6', prompt: 'En condicional («следовало бы»): ___ que pedirle perdón.', correct: 'Habría' },
      ],
    },

    {
      id: '95.3',
      title: 'tener que или haber que?',
      type: 'choice',
      instructions: 'Выберите перифразу: <em>tener que</em> — для конкретного человека; <em>haber que</em> — общее правило, безлично.',
      questions: [
        { id: 'q1', prompt: 'Es necesario que eche gasolina al coche. → ___ echar gasolina al coche.', options: ['Tengo que', 'Hay que'], correct: 'Tengo que' },
        { id: 'q2', prompt: 'Para entrar al museo es obligatorio enseñar el carnet. → ___ enseñar el carnet.', options: ['Tienes que', 'Hay que'], correct: 'Hay que' },
        { id: 'q3', prompt: 'En mi colegio era obligatorio levantarse cuando entraba el profesor. → ___ levantarse.', options: ['Teníamos que', 'Había que'], correct: 'Había que' },
        { id: 'q4', prompt: 'Yo no tengo obligación de llevar corbata en la oficina. → No ___ llevar corbata.', options: ['tengo que', 'hay que'], correct: 'tengo que' },
        { id: 'q5', prompt: 'Para algunos países es obligatorio vacunarse contra la fiebre amarilla. → ___ vacunarse.', options: ['tienen que', 'hay que'], correct: 'hay que' },
        { id: 'q6', prompt: 'Si hay un incendio, es necesario llamar a los bomberos. → ___ llamar a los bomberos.', options: ['tienen que', 'hay que'], correct: 'hay que' },
      ],
    },

    {
      id: '95.4',
      title: 'poder в значении разрешения / запрета',
      type: 'fill',
      instructions: 'Поставьте подходящую форму <em>poder</em> + инфинитив (включая безличное <em>se puede / no se puede</em>).',
      questions: [
        { id: 'q1', prompt: 'Lo siento, aquí no ___ hacer fuego. Está prohibido.', correct: 'se puede' },
        { id: 'q2', prompt: 'David, ¿nos ___ ir a casa ya?', correct: 'podemos', explanation: 'Просьба о разрешении: <em>poder</em> в 1 л. мн.ч.' },
        { id: 'q3', prompt: '¿Sabes si ___ usar el móvil en la academia?', correct: 'se puede' },
        { id: 'q4', prompt: 'No ___ recibir mensajes personales en los ordenadores de la empresa.', correct: 'se pueden', explanation: 'Согласование с <em>mensajes personales</em>: 3 л. мн.ч.' },
        { id: 'q5', prompt: 'Os ___ llevar mi coche esta noche, si queréis.', correct: 'podéis' },
        { id: 'q6', prompt: '¿___ abrir la ventana? Hace mucho calor.', correct: 'Puedo' },
      ],
    },

    {
      id: '95.5',
      title: 'deber de или no poder (предположение)',
      type: 'fill',
      instructions: 'Замените «должно быть, ...» на <em>deber de</em>, а «не может быть, ...» — на <em>no poder</em>. Образец: <em>Supongo que es muy tarde → Debe de ser muy tarde.</em>',
      questions: [
        { id: 'q1', prompt: '<em>Supongo que Lupe está enferma.</em> →', correct: ['Lupe debe de estar enferma.', 'Debe de estar enferma.', 'Lupe debe de estar enferma', 'Debe de estar enferma'] },
        { id: 'q2', prompt: '<em>Es imposible que Hugo esté casado: vive solo.</em> →', correct: ['Hugo no puede estar casado.', 'No puede estar casado.', 'Hugo no puede estar casado', 'No puede estar casado'] },
        { id: 'q3', prompt: '<em>Supongo que Norma y Sandra están fuera. No cogen el teléfono.</em> →', correct: ['Norma y Sandra deben de estar fuera.', 'Deben de estar fuera.', 'Norma y Sandra deben de estar fuera', 'Deben de estar fuera'] },
        { id: 'q4', prompt: '<em>Es imposible que tengáis hambre: acabáis de comer.</em> →', correct: ['No podéis tener hambre.', 'No podéis tener hambre'] },
        { id: 'q5', prompt: '<em>Supongo que Juan no está en casa: no contesta.</em> →', correct: ['Juan no debe de estar en casa.', 'No debe de estar en casa.', 'Juan no debe de estar en casa', 'No debe de estar en casa'] },
      ],
    },

    {
      id: '95.6',
      title: 'no tener que vs no deber vs no poder',
      type: 'choice',
      instructions: 'Выберите подходящую перифразу: «не нужно» / «не следует (моральн.)» / «нельзя (запрет)».',
      questions: [
        { id: 'q1', prompt: 'No te preocupes, no ___ regalarme nada. (= no es necesario)', options: ['tienes que', 'debes', 'puedes'], correct: 'tienes que' },
        { id: 'q2', prompt: 'No ___ regalar nada a Nati. Se puede enfadar. (= no es aconsejable)', options: ['tienes que', 'debes', 'puedes'], correct: 'debes' },
        { id: 'q3', prompt: 'En este restaurante no ___ fumar. (= prohibido)', options: ['se tiene que', 'se debe', 'se puede'], correct: 'se puede' },
        { id: 'q4', prompt: 'Mañana no ___ madrugar: es fiesta.', options: ['tengo que', 'debo', 'puedo'], correct: 'tengo que' },
        { id: 'q5', prompt: 'No ___ hablarle así a tu madre.', options: ['tienes que', 'debes', 'puedes'], correct: 'debes' },
      ],
    },

    {
      id: '95.7',
      title: 'Соедините начало и продолжение',
      type: 'match',
      instructions: 'Подберите логичное продолжение каждой фразе.',
      pool: [
        'no es necesario.',
        'no es aconsejable.',
        'es imposible.',
        'es una suposición.',
        'es obligatorio.',
        'es un permiso.',
      ],
      questions: [
        { id: 'q1', prompt: '<em>Tienes que estudiar más.</em>',         correct: 'es obligatorio.' },
        { id: 'q2', prompt: '<em>No tienes que pagar.</em>',              correct: 'no es necesario.' },
        { id: 'q3', prompt: '<em>No debes mentir.</em>',                  correct: 'no es aconsejable.' },
        { id: 'q4', prompt: '<em>No puede ser él, está en Cali.</em>',     correct: 'es imposible.' },
        { id: 'q5', prompt: '<em>Debe de ser extranjero.</em>',            correct: 'es una suposición.' },
        { id: 'q6', prompt: '<em>Puedes irte ya.</em>',                    correct: 'es un permiso.' },
      ],
    },

    {
      id: '95.8',
      title: 'Найдите фразы без ошибок',
      type: 'multi',
      instructions: 'Отметьте все грамматически корректные фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Tengo trabajar mañana.',
            'Tengo que trabajar mañana.',
            'Hay que ser puntual.',
            'Hay ser puntual.',
            'Habían que estudiar más.',
            'Había que estudiar más.',
            'Debe de ser extranjero, no habla español.',
            'Debe ser extranjero, no habla español.',
            'No puedo aparcar aquí, está prohibido.',
            'No puede ser Juan, se fue ayer.',
          ],
          correct: [
            'Tengo que trabajar mañana.',
            'Hay que ser puntual.',
            'Había que estudiar más.',
            'Debe de ser extranjero, no habla español.',
            'No puedo aparcar aquí, está prohibido.',
            'No puede ser Juan, se fue ayer.',
          ],
          explanation: '<em>tener que</em> требует <em>que</em>; <em>haber que</em> — только безлично (<em>hay, había, hubo</em>); для предположения — <em>deber de</em>.',
        },
      ],
    },

    {
      id: '95.9',
      title: '«Можно?» — «Нельзя!»',
      type: 'fill',
      instructions: 'Запишите вежливую просьбу о разрешении или запрет. Образец: <em>(yo, abrir la ventana) → ¿Puedo abrir la ventana?</em>',
      questions: [
        { id: 'q1', prompt: '(yo, salir un momento) →', correct: ['¿Puedo salir un momento?', '¿Puedo salir un momento'] },
        { id: 'q2', prompt: '(nosotros, entrar) →', correct: ['¿Podemos entrar?', '¿Podemos entrar'] },
        { id: 'q3', prompt: '(yo, hacer una pregunta) →', correct: ['¿Puedo hacer una pregunta?', '¿Puedo hacer una pregunta'] },
        { id: 'q4', prompt: 'Запрет (безлично, fumar): →', correct: ['No se puede fumar.', 'No se puede fumar', 'Aquí no se puede fumar.', 'Aquí no se puede fumar'] },
        { id: 'q5', prompt: 'Запрет (безлично, aparcar): →', correct: ['No se puede aparcar.', 'No se puede aparcar', 'Aquí no se puede aparcar.', 'Aquí no se puede aparcar'] },
      ],
    },

    {
      id: '95.10',
      title: 'Подставьте предлог: deber или deber de?',
      type: 'choice',
      instructions: 'Без <em>de</em> = обязанность, совет; с <em>de</em> = предположение.',
      questions: [
        { id: 'q1', prompt: 'Pedro ___ ser extranjero. Casi no habla español.', options: ['debe', 'debe de'], correct: 'debe de' },
        { id: 'q2', prompt: 'Tú ___ llamar a tus padres. Están preocupados.', options: ['debes', 'debes de'], correct: 'debes' },
        { id: 'q3', prompt: 'No conocen a nadie. ___ ser nuevos en la ciudad.', options: ['Deben', 'Deben de'], correct: 'Deben de' },
        { id: 'q4', prompt: 'Si te invita, ___ aceptar.', options: ['debes', 'debes de'], correct: 'debes' },
        { id: 'q5', prompt: 'Ya son las doce. Marta ___ estar dormida.', options: ['debe', 'debe de'], correct: 'debe de' },
      ],
    },

    {
      id: '95.11',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Запишите услышанное полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Tengo que trabajar el sábado.',          correct: ['Tengo que trabajar el sábado.', 'Tengo que trabajar el sábado'] },
        { id: 'q2', prompt: '', audio: 'Hay que ser puntual.',                    correct: ['Hay que ser puntual.', 'Hay que ser puntual'] },
        { id: 'q3', prompt: '', audio: '¿Puedo abrir la ventana?',                 correct: ['¿Puedo abrir la ventana?', 'Puedo abrir la ventana?', '¿Puedo abrir la ventana'] },
        { id: 'q4', prompt: '', audio: 'No se puede fumar aquí.',                   correct: ['No se puede fumar aquí.', 'No se puede fumar aquí'] },
        { id: 'q5', prompt: '', audio: 'Debe de ser extranjero.',                    correct: ['Debe de ser extranjero.', 'Debe de ser extranjero'] },
      ],
    },

    {
      id: '95.12',
      title: 'Запишите свою мысль одной перифразой',
      type: 'choice',
      instructions: 'Какая перифраза лучше передаёт смысл по-русски?',
      questions: [
        { id: 'q1', prompt: '«В библиотеке нельзя есть» (общий запрет) →', options: ['No tienes que comer en la biblioteca.', 'En la biblioteca no se puede comer.', 'No debes de comer en la biblioteca.'], correct: 'En la biblioteca no se puede comer.' },
        { id: 'q2', prompt: '«Не обязательно отвечать сразу» →', options: ['No tienes que contestar enseguida.', 'No debes contestar enseguida.', 'No puedes contestar enseguida.'], correct: 'No tienes que contestar enseguida.' },
        { id: 'q3', prompt: '«Должно быть, он спит» →', options: ['Tiene que dormir.', 'Debe de estar durmiendo.', 'Hay que estar durmiendo.'], correct: 'Debe de estar durmiendo.' },
        { id: 'q4', prompt: '«Нужно ехать в аэропорт прямо сейчас» (мне надо) →', options: ['Hay que ir al aeropuerto.', 'Tengo que ir al aeropuerto.', 'Puedo ir al aeropuerto.'], correct: 'Tengo que ir al aeropuerto.' },
        { id: 'q5', prompt: '«Этого не может быть, она же в Лондоне» →', options: ['No debe estar aquí.', 'No puede estar aquí.', 'No tiene que estar aquí.'], correct: 'No puede estar aquí.' },
      ],
    },
  ],
};
