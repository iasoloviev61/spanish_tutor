// ============================================================
// Unidad 42 — Presente de indicativo de SER
// soy, eres, es, somos, sois, son.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u42 = {
  id: 'u42',
  number: 42,
  title: { es: 'soy, eres, es…', topic: 'Presente de indicativo de ser' },
  topicRu: 'Спряжение глагола ser в настоящем времени и его употребление',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: '<strong>Ser</strong> es un verbo irregular. En el presente de indicativo cada persona tiene su propia forma — hay que aprenderlas de memoria.',
      ru: 'Глагол <strong>ser</strong> («быть») неправилен. В настоящем времени у каждого лица своя особая форма — выучите наизусть.',
      examples: [
        { es: '<strong>Soy</strong> estudiante.', ru: 'Я студент(ка).' },
        { es: 'Marta y yo <strong>somos</strong> primos.', ru: 'Марта и я — двоюродные.' },
        { es: '¿De dónde <strong>eres</strong>?', ru: 'Откуда ты?' },
      ],
    },
    {
      type: 'heading',
      text: 'Спряжение',
    },
    {
      type: 'table',
      caption: 'SER — presente de indicativo',
      columns: ['Лицо', 'Singular', 'Plural'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['1.ª',                       '(yo) <strong>soy</strong>',                         '(nosotros, -as) <strong>somos</strong>'],
        ['2.ª (близко)',              '(tú) <strong>eres</strong>',                         '(vosotros, -as) <strong>sois</strong>'],
        ['3.ª / usted, ustedes',      '(él, ella, usted) <strong>es</strong>',              '(ellos, ellas, ustedes) <strong>son</strong>'],
      ],
    },
    {
      type: 'heading',
      text: 'Когда употребляется <em>ser</em>',
    },
    {
      type: 'rule',
      es: '<em>Ser</em> describe lo que algo o alguien <strong>es</strong> — su identidad, su clase, sus rasgos permanentes. Sus usos típicos:',
      ru: '<em>Ser</em> отвечает на вопрос «кто это / что это / какой по сути». Главные случаи:',
      examples: [
        { es: '<strong>Identificación</strong>: <em>Ese es Andrés. ¿Quién es? — Es mi hermano.</em>', ru: 'Идентификация — кто это / что это.' },
        { es: '<strong>Profesión, nacionalidad, ideología</strong>: <em>Soy profesora. Es peruano. Son católicos.</em>', ru: 'Профессия, национальность, идеология.' },
        { es: '<strong>Relación o parentesco</strong>: <em>Luis y María son amigos. Ana es mi prima.</em>', ru: 'Отношения и родство.' },
        { es: '<strong>Cualidades estables</strong>: <em>Diana es muy inteligente. El coche es rojo.</em>', ru: 'Постоянные качества (характер, цвет, внешность).' },
        { es: '<strong>Tiempo, cantidad, precio</strong>: <em>Es martes. Son las cinco. Son sesenta euros.</em>', ru: 'Время, количество, цена.' },
        { es: '<strong>Lugar / momento de un evento</strong>: <em>¿Dónde es la fiesta? El partido es a las diez.</em>', ru: 'Место и время события (концерт, свадьба, матч).' },
      ],
    },
    {
      type: 'atencion',
      es: '<em>Es la una</em> (singular, una hora) — pero <em>son las dos / son las tres…</em> (plural). El sujeto es la propia hora.',
      ru: 'Когда говорят «один час» — <em>es la una</em> (единственное число). Все остальные часы — <em>son las dos / son las tres / son las cinco…</em> (множественное).',
    },
    {
      type: 'heading',
      text: '<em>Ser + de</em>: происхождение, материал, владелец',
    },
    {
      type: 'rule',
      es: 'La construcción <strong>ser + de</strong> indica de dónde es alguien (origen), de qué está hecho algo (materia) o de quién es algo (posesión).',
      ru: 'Сочетание <strong>ser + de</strong> отвечает сразу на три вопроса: «откуда?», «из чего?», «чьё?». Контекст подскажет, какой именно.',
      examples: [
        { es: 'Origen: ¿De dónde <strong>son</strong> ustedes? — <strong>Somos de</strong> Santander.', ru: 'Происхождение: «Откуда вы? — Мы из Сантандера».' },
        { es: 'Materia: Esta silla <strong>es de</strong> plástico.', ru: 'Материал: «Этот стул — из пластика».' },
        { es: 'Posesión: Ese coche <strong>es de</strong> Eduardo.', ru: 'Принадлежность: «Эта машина — Эдуардо».' },
      ],
    },
    {
      type: 'table',
      caption: 'Памятка случаев',
      columns: ['Случай', 'Пример'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['Идентификация',           '<em>—¿Qué es eso? —Es una cámara.</em>'],
        ['Профессия / национальность', '<em>Soy estudiante. Chelo es peruana.</em>'],
        ['Качество (стабильное)',     '<em>El coche es rojo. Diana es inteligente.</em>'],
        ['Время / цена',              '<em>Son las cinco. Son sesenta euros.</em>'],
        ['Место события',             '<em>La fiesta es en mi casa.</em>'],
        ['<em>ser + de</em>',         '<em>Soy de Madrid. La mesa es de madera. Es de Pedro.</em>'],
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '42.1',
      title: 'Спряжение <em>ser</em>',
      type: 'fill',
      instructions: 'Поставьте глагол <em>ser</em> в нужную форму настоящего времени.',
      questions: [
        { id: 'q1', prompt: 'yo →',                  correct: 'soy' },
        { id: 'q2', prompt: 'tú →',                  correct: 'eres' },
        { id: 'q3', prompt: 'él / ella / usted →',    correct: 'es' },
        { id: 'q4', prompt: 'nosotras →',             correct: 'somos' },
        { id: 'q5', prompt: 'vosotros →',             correct: 'sois' },
        { id: 'q6', prompt: 'ellos / ustedes →',       correct: 'son' },
      ],
    },

    {
      id: '42.2',
      title: 'Профессии и национальности',
      type: 'fill',
      instructions: 'Поставьте подходящую форму <em>ser</em>.',
      questions: [
        { id: 'q1', prompt: 'Yo ___ estudiante de español.',                correct: 'soy' },
        { id: 'q2', prompt: '¿De dónde ___ tú?',                              correct: 'eres' },
        { id: 'q3', prompt: 'Mi hermano ___ médico.',                          correct: 'es' },
        { id: 'q4', prompt: 'Nosotros ___ argentinos.',                        correct: 'somos' },
        { id: 'q5', prompt: '¿Vosotros ___ profesores?',                       correct: 'sois' },
        { id: 'q6', prompt: 'Mis primas ___ italianas.',                        correct: 'son' },
        { id: 'q7', prompt: 'Sara y yo ___ amigas desde el colegio.',          correct: 'somos' },
        { id: 'q8', prompt: 'Usted ___ muy amable, gracias.',                   correct: 'es' },
        { id: 'q9', prompt: 'Ustedes ___ de Quito, ¿verdad?',                   correct: 'son' },
        { id: 'q10', prompt: 'Carlos y tú ___ hermanos.',                        correct: 'sois', explanation: '«Карлос и ты» = вы (vosotros) → <em>sois</em>.' },
      ],
    },

    {
      id: '42.3',
      title: 'Время, цена и количество',
      type: 'fill',
      instructions: 'Поставьте <em>es</em> или <em>son</em>.',
      questions: [
        { id: 'q1', prompt: '¿Qué hora ___?',                                   correct: 'es' },
        { id: 'q2', prompt: '___ las tres en punto.',                           correct: 'Son' },
        { id: 'q3', prompt: '___ la una y media.',                              correct: 'Es' },
        { id: 'q4', prompt: '¿Cuánto ___ esto? — ___ veinte euros.',             correct: 'es son',  explanation: 'Через пробел: первое — «сколько это (стоит)» (<em>es</em>), второе — про сумму во мн. ч. (<em>son</em>).' },
        { id: 'q5', prompt: 'En mi clase ___ veintidós alumnos.',                 correct: 'somos',  explanation: 'Если рассказчик внутри класса, говорят «нас 22» — <em>somos veintidós</em>; если снаружи — «их 22» — <em>son veintidós</em>. Здесь — рассказ изнутри.' },
        { id: 'q6', prompt: 'Hoy ___ jueves.',                                    correct: 'es' },
        { id: 'q7', prompt: '___ las once y media de la noche.',                  correct: 'Son' },
      ],
    },

    {
      id: '42.4',
      title: 'Идентификация и описание',
      type: 'fill',
      instructions: 'Используйте <em>ser</em>.',
      questions: [
        { id: 'q1', prompt: '¿Quién ___ ese chico?',                          correct: 'es' },
        { id: 'q2', prompt: '¿Qué ___ esto? — ___ una guitarra.',              correct: 'es es', explanation: 'Через пробел.' },
        { id: 'q3', prompt: 'Mis abuelos ___ muy simpáticos.',                  correct: 'son' },
        { id: 'q4', prompt: 'El coche de mi padre ___ azul.',                   correct: 'es' },
        { id: 'q5', prompt: 'Estos libros no ___ interesantes.',                correct: 'son' },
        { id: 'q6', prompt: 'Tú y yo ___ amigos.',                              correct: 'somos' },
      ],
    },

    {
      id: '42.5',
      title: '<em>ser + de</em>: происхождение, материал, владелец',
      type: 'fill',
      instructions: 'Подставьте форму <em>ser</em>; смысл («откуда / из чего / чьё») определите сами.',
      questions: [
        { id: 'q1', prompt: 'Esta camisa ___ de algodón.',                     correct: 'es' },
        { id: 'q2', prompt: 'Yo ___ de Bilbao, ¿y tú?',                          correct: 'soy' },
        { id: 'q3', prompt: 'Esos zapatos ___ de Marta.',                        correct: 'son' },
        { id: 'q4', prompt: '¿De dónde ___ vosotros?',                            correct: 'sois' },
        { id: 'q5', prompt: 'Estas mesas ___ de madera.',                         correct: 'son' },
        { id: 'q6', prompt: 'El reloj nuevo ___ de mi abuelo.',                    correct: 'es' },
        { id: 'q7', prompt: 'Mis padres ___ de Granada, pero ahora viven en Sevilla.', correct: 'son' },
      ],
    },

    {
      id: '42.6',
      title: 'Выберите верный вариант',
      type: 'choice',
      instructions: 'Какая форма <em>ser</em> уместна?',
      questions: [
        { id: 'q1', prompt: 'Mi hermana ___ enfermera.',           options: ['soy', 'es', 'son'],          correct: 'es' },
        { id: 'q2', prompt: 'Marisa y Pablo ___ casados.',          options: ['son', 'somos', 'sois'],     correct: 'son' },
        { id: 'q3', prompt: '¿Vosotros ___ de Madrid?',             options: ['son', 'sois', 'somos'],     correct: 'sois' },
        { id: 'q4', prompt: 'Tú ___ muy puntual, gracias.',         options: ['eres', 'es', 'soy'],         correct: 'eres' },
        { id: 'q5', prompt: 'En este edificio ___ siete plantas.',  options: ['es', 'somos', 'son'],        correct: 'son',  explanation: 'Только речь идёт о количестве «их семь» → <em>son</em>. Если бы рассказчик считал себя в их числе, было бы <em>somos</em>.' },
        { id: 'q6', prompt: 'Yo ___ mexicana.',                      options: ['soy', 'eres', 'es'],         correct: 'soy' },
        { id: 'q7', prompt: 'La fiesta ___ en casa de Pablo.',       options: ['es', 'son', 'somos'],        correct: 'es' },
        { id: 'q8', prompt: 'Carmen y tú ___ buenos amigos.',        options: ['son', 'sois', 'somos'],     correct: 'sois' },
      ],
    },

    {
      id: '42.7',
      title: 'Соедините начало и продолжение',
      type: 'match',
      instructions: 'Подберите естественное окончание для каждой фразы.',
      pool: [
        'soy de México.',
        'son las nueve de la mañana.',
        'es muy interesante.',
        'somos primos.',
        'sois hermanos?',
        'es de Pedro.',
        'son ingenieros.',
        'eres muy amable.',
      ],
      questions: [
        { id: 'q1', prompt: 'Yo ___',                              correct: 'soy de México.' },
        { id: 'q2', prompt: 'Mi tío y yo ___',                      correct: 'somos primos.' },
        { id: 'q3', prompt: '¿Vosotros ___',                        correct: 'sois hermanos?' },
        { id: 'q4', prompt: 'Este libro ___',                        correct: 'es muy interesante.' },
        { id: 'q5', prompt: 'Ese coche rojo ___',                    correct: 'es de Pedro.' },
        { id: 'q6', prompt: 'Adriana y Luis ___',                    correct: 'son ingenieros.' },
        { id: 'q7', prompt: 'Tú ___',                                correct: 'eres muy amable.' },
        { id: 'q8', prompt: 'En verano ___',                          correct: 'son las nueve de la mañana.' },
      ],
    },

    {
      id: '42.8',
      title: 'Соберите фразу с <em>ser</em>',
      type: 'fill',
      instructions: 'Соберите утвердительное предложение из элементов. Запишите всю фразу с заглавной буквой и точкой.',
      questions: [
        { id: 'q1', prompt: 'Marta / chilena →',              correct: ['Marta es chilena.'] },
        { id: 'q2', prompt: 'usted / muy amable →',            correct: ['Usted es muy amable.'] },
        { id: 'q3', prompt: 'mi hermano y yo / morenos →',     correct: ['Mi hermano y yo somos morenos.'] },
        { id: 'q4', prompt: 'vosotras / muy alegres →',         correct: ['Vosotras sois muy alegres.'] },
        { id: 'q5', prompt: 'esos pantalones / de lana →',      correct: ['Esos pantalones son de lana.'] },
        { id: 'q6', prompt: 'ese libro / de Marta →',           correct: ['Ese libro es de Marta.'] },
        { id: 'q7', prompt: 'ustedes / muy altos →',             correct: ['Ustedes son muy altos.'] },
      ],
    },

    {
      id: '42.9',
      title: 'Выберите все случаи, где нужен <em>ser</em>',
      type: 'multi',
      instructions: 'Это юнит про <em>ser</em>. Какие из ситуаций — типичные для <em>ser</em>?',
      questions: [
        {
          id: 'q1',
          prompt: 'Где обычно требуется <em>ser</em>?',
          options: [
            'назвать профессию',
            'сказать «который час»',
            'сказать «откуда я»',
            'описать постоянный цвет вещи',
            'указать, чьё это',
            'сказать, где сейчас человек («он в офисе»)',
            'описать сегодняшнее настроение («я устал(а)»)',
            'сказать, где состоится концерт',
          ],
          correct: [
            'назвать профессию',
            'сказать «который час»',
            'сказать «откуда я»',
            'описать постоянный цвет вещи',
            'указать, чьё это',
            'сказать, где состоится концерт',
          ],
          explanation: 'Местонахождение человека и временное состояние — это уже <em>estar</em> (Unidad 43–44).',
        },
      ],
    },

    {
      id: '42.10',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма <em>ser</em> ошибочна — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?',  options: ['yo soy', 'tú eres', 'él es', 'nosotros sois'], correct: 'nosotros sois', explanation: 'Должно быть <em>nosotros somos</em>; <em>sois</em> — это <em>vosotros</em>.' },
        { id: 'q2', prompt: 'Где ошибка?',  options: ['Es la una.', 'Son las tres.', 'Es las cinco.', 'Son las once.'], correct: 'Es las cinco.', explanation: '«Пять часов» — мн. ч., нужно <em>son</em>.' },
        { id: 'q3', prompt: 'Где ошибка?',  options: ['Soy estudiante.', 'Eres médico.', 'Sois ingenieros.', 'Somos profesor.'], correct: 'Somos profesor.', explanation: 'Подлежащее во мн. ч. — и существительное должно быть во мн. ч.: <em>somos profesores</em>.' },
        { id: 'q4', prompt: 'Где ошибка?',  options: ['¿De dónde eres?', '¿De dónde es ustedes?', '¿De dónde sois?', '¿De dónde son ellos?'], correct: '¿De dónde es ustedes?', explanation: '<em>ustedes</em> — мн. ч. → <em>son</em>.' },
        { id: 'q5', prompt: 'Где ошибка?',  options: ['Soy peruana.', 'Eres simpático.', 'Es de madera.', 'Son las una.'], correct: 'Son las una.', explanation: 'Час <em>una</em> ставится в ед. ч.: <em>es la una</em>.' },
      ],
    },

    {
      id: '42.11',
      title: 'Аудио: послушайте и запишите фразу',
      type: 'fill',
      instructions: 'Нажмите <code>🔊</code> и запишите услышанное. <strong>С диакритикой и знаками препинания.</strong>',
      questions: [
        { id: 'q1', prompt: '', audio: 'Soy de Madrid.',           correct: ['Soy de Madrid.'] },
        { id: 'q2', prompt: '', audio: '¿De dónde eres?',           correct: ['¿De dónde eres?'] },
        { id: 'q3', prompt: '', audio: 'Son las cinco.',             correct: ['Son las cinco.'] },
        { id: 'q4', prompt: '', audio: 'Mi hermana es médica.',      correct: ['Mi hermana es médica.'] },
        { id: 'q5', prompt: '', audio: 'Hoy es martes.',              correct: ['Hoy es martes.'] },
        { id: 'q6', prompt: '', audio: 'Somos cinco hermanos.',       correct: ['Somos cinco hermanos.'] },
        { id: 'q7', prompt: '', audio: '¿Vosotros sois primos?',      correct: ['¿Vosotros sois primos?'] },
      ],
    },

    {
      id: '42.12',
      title: 'Сделайте отрицательную фразу',
      type: 'fill',
      instructions: 'Образец: <em>Soy de Lima → No soy de Lima.</em> Запишите всю фразу.',
      questions: [
        { id: 'q1', prompt: 'Eres profesor. →',                       correct: ['No eres profesor.'] },
        { id: 'q2', prompt: 'Somos amigos. →',                         correct: ['No somos amigos.'] },
        { id: 'q3', prompt: 'Sois de México. →',                        correct: ['No sois de México.'] },
        { id: 'q4', prompt: 'Es muy caro. →',                          correct: ['No es muy caro.'] },
        { id: 'q5', prompt: 'Son las diez. →',                          correct: ['No son las diez.'] },
      ],
    },
  ],
};
