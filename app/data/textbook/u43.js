// ============================================================
// Unidad 43 — Presente de indicativo de ESTAR
// estoy, estás, está, estamos, estáis, están.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u43 = {
  id: 'u43',
  number: 43,
  title: { es: 'estoy, estás, está…', topic: 'Presente de indicativo de estar' },
  topicRu: 'Спряжение глагола estar и его употребление',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: '<strong>Estar</strong> es un verbo irregular: la 1.ª persona del singular es <em>estoy</em>, y todas las formas <strong>excepto</strong> <em>estamos</em> llevan <strong>tilde</strong> en la última sílaba (<em>estás, está, estáis, están</em>).',
      ru: 'Глагол <strong>estar</strong> неправилен: 1-е лицо ед. ч. — <em>estoy</em>, а во всех формах, <strong>кроме</strong> <em>estamos</em>, ставится <strong>тильда</strong> на последнем слоге (<em>estás, está, estáis, están</em>).',
      examples: [
        { es: '<strong>Estoy</strong> en Sevilla.', ru: 'Я в Севилье.' },
        { es: '¿Dónde <strong>están</strong> mis llaves?', ru: 'Где мои ключи?' },
        { es: '<strong>Estamos</strong> aburridos.', ru: 'Нам скучно.' },
      ],
    },
    {
      type: 'heading',
      text: 'Спряжение',
    },
    {
      type: 'table',
      caption: 'ESTAR — presente de indicativo',
      columns: ['Лицо', 'Singular', 'Plural'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['1.ª',                       '(yo) <strong>estoy</strong>',                           '(nosotros, -as) <strong>estamos</strong>'],
        ['2.ª (близко)',              '(tú) <strong>estás</strong>',                            '(vosotros, -as) <strong>estáis</strong>'],
        ['3.ª / usted, ustedes',      '(él, ella, usted) <strong>está</strong>',                '(ellos, ellas, ustedes) <strong>están</strong>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Cuidado con la ortografía: <em>estás</em> ≠ <em>estas</em> (demostrativo, «эти»). Solo la forma verbal lleva tilde.',
      ru: 'Не путайте: <em>estás</em> («ты находишься») с тильдой — это глагол; <em>estas</em> без тильды — указательное «эти». Тильда меняет смысл.',
    },
    {
      type: 'heading',
      text: 'Когда употребляется <em>estar</em>',
    },
    {
      type: 'rule',
      es: '<em>Estar</em> describe <strong>dónde</strong> está alguien o algo y <strong>cómo</strong> está en este momento. Tres usos básicos:',
      ru: '<em>Estar</em> отвечает на вопрос «где» (физическое местонахождение) и «как сейчас» (текущее состояние). Три главных случая:',
      examples: [
        { es: '<strong>Местонахождение</strong>: <em>Mis padres están en Caracas. Madrid está en España.</em>', ru: 'Где находится человек, предмет, место.' },
        { es: '<strong>Временное физическое или эмоциональное состояние</strong>: <em>Estoy un poco cansada. Estamos aburridos. ¿Cómo estás hoy?</em>', ru: 'Сейчас плохо/хорошо, устал, болеет, в плохом настроении.' },
        { es: '<strong>Временные характеристики предметов</strong>: <em>La sopa está caliente. La casa está sucia.</em>', ru: 'Свойство, которое <em>сейчас</em> отличается от обычного.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Pregunta clásica: «<em>¿Está Miguel?</em>» significa «<em>¿Está Miguel en casa?</em>» o «en su lugar habitual» (oficina, etc.). Es una elipsis muy frecuente al teléfono o al llegar a un sitio.',
      ru: '«<em>¿Está Miguel?</em>» по-русски — «Мигель дома (на месте)?». Это сокращение от <em>¿Está Miguel en casa / en la oficina?</em> — обычное дело по телефону или у двери.',
    },
    {
      type: 'heading',
      text: 'Типичные прилагательные при <em>estar</em>',
    },
    {
      type: 'table',
      caption: 'Состояния через <em>estar</em>',
      columns: ['Сфера', 'Прилагательные'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['Самочувствие',          '<em>cansado, agotado, enfermo, resfriado, mareado…</em>'],
        ['Настроение',             '<em>contento, triste, aburrido, enfadado, de buen / mal humor…</em>'],
        ['Состояние объекта',       '<em>caliente / frío, abierto / cerrado, sucio / limpio, lleno / vacío…</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'En cualquiera de estos sentidos, <em>estar</em> implica que la situación es <strong>actual y limitada en el tiempo</strong>: hoy, en este momento, en este punto. Mañana puede cambiar.',
      ru: 'Во всех этих случаях <em>estar</em> означает «<strong>сейчас, в данный момент, временно</strong>»: сегодня устал, дверь сейчас закрыта, суп пока горячий. Завтра может быть иначе.',
      examples: [
        { es: 'Las tiendas <strong>están</strong> abiertas hasta las nueve.', ru: 'Магазины (сейчас) открыты до девяти.' },
        { es: 'Los niños <strong>están</strong> contentos hoy.', ru: 'Дети сегодня довольны.' },
        { es: '<strong>Estoy</strong> en la oficina, llámame luego.', ru: 'Я (сейчас) в офисе, перезвони позже.' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '43.1',
      title: 'Спряжение <em>estar</em>',
      type: 'fill',
      instructions: 'Поставьте глагол <em>estar</em> в нужную форму. <strong>Не забывайте про тильду!</strong>',
      questions: [
        { id: 'q1', prompt: 'yo →',                  correct: 'estoy' },
        { id: 'q2', prompt: 'tú →',                  correct: 'estás',   explanation: 'С тильдой.' },
        { id: 'q3', prompt: 'él / ella / usted →',    correct: 'está' },
        { id: 'q4', prompt: 'nosotras →',             correct: 'estamos', explanation: 'Без тильды.' },
        { id: 'q5', prompt: 'vosotros →',             correct: 'estáis' },
        { id: 'q6', prompt: 'ellos / ustedes →',       correct: 'están' },
      ],
    },

    {
      id: '43.2',
      title: 'Где находится?',
      type: 'fill',
      instructions: 'Поставьте подходящую форму <em>estar</em>.',
      questions: [
        { id: 'q1', prompt: 'Yo ___ en casa.',                                correct: 'estoy' },
        { id: 'q2', prompt: 'Las llaves ___ encima de la mesa.',               correct: 'están' },
        { id: 'q3', prompt: 'Mi hermano ___ en el colegio.',                    correct: 'está' },
        { id: 'q4', prompt: 'Nosotras ___ en la playa.',                        correct: 'estamos' },
        { id: 'q5', prompt: '¿Vosotros ___ en Madrid?',                          correct: 'estáis' },
        { id: 'q6', prompt: 'Mi chaqueta ___ en el armario.',                    correct: 'está' },
        { id: 'q7', prompt: 'Las Islas Galápagos ___ en el Pacífico.',            correct: 'están' },
        { id: 'q8', prompt: '¿___ tú en la oficina?',                            correct: 'Estás' },
      ],
    },

    {
      id: '43.3',
      title: 'Самочувствие и настроение',
      type: 'fill',
      instructions: 'Подставьте форму <em>estar</em>.',
      questions: [
        { id: 'q1', prompt: 'Hoy yo ___ muy cansada.',                        correct: 'estoy' },
        { id: 'q2', prompt: '— ¿Cómo ___ tú? — Bien, gracias.',                correct: 'estás' },
        { id: 'q3', prompt: 'Pedro y Luis ___ enfermos esta semana.',           correct: 'están' },
        { id: 'q4', prompt: 'Mi madre ___ de mal humor hoy.',                   correct: 'está' },
        { id: 'q5', prompt: 'Nosotros ___ muy contentos con la noticia.',        correct: 'estamos' },
        { id: 'q6', prompt: '— ¿Cómo ___ usted? — Bien, gracias.',               correct: 'está' },
        { id: 'q7', prompt: '¿Por qué ___ tan tristes los niños?',                correct: 'están' },
        { id: 'q8', prompt: 'Hoy vosotras ___ muy alegres.',                       correct: 'estáis' },
      ],
    },

    {
      id: '43.4',
      title: 'Опишите ситуацию через <em>estar</em>',
      type: 'fill',
      instructions: 'Подставьте <em>está</em> или <em>están</em>.',
      questions: [
        { id: 'q1', prompt: 'La ventana ___ abierta.',                       correct: 'está' },
        { id: 'q2', prompt: 'Los platos ___ sucios.',                         correct: 'están' },
        { id: 'q3', prompt: 'La sopa ___ fría.',                              correct: 'está' },
        { id: 'q4', prompt: 'Las tiendas ___ cerradas los domingos.',          correct: 'están' },
        { id: 'q5', prompt: 'El cielo ___ nublado.',                            correct: 'está' },
        { id: 'q6', prompt: 'Los vasos ___ limpios, ya puedes usarlos.',         correct: 'están' },
        { id: 'q7', prompt: 'La puerta ___ cerrada con llave.',                  correct: 'está' },
        { id: 'q8', prompt: 'Las luces ___ apagadas.',                            correct: 'están' },
      ],
    },

    {
      id: '43.5',
      title: 'Выберите верный вариант',
      type: 'choice',
      instructions: 'Какая форма <em>estar</em> уместна?',
      questions: [
        { id: 'q1', prompt: 'Yo ___ en la oficina.',                  options: ['estoy', 'está', 'estamos'], correct: 'estoy' },
        { id: 'q2', prompt: 'Mis padres ___ de viaje.',                options: ['están', 'estamos', 'estáis'], correct: 'están' },
        { id: 'q3', prompt: 'Tú ___ muy guapa hoy.',                    options: ['estás', 'está', 'estoy'], correct: 'estás' },
        { id: 'q4', prompt: '¿Vosotros ___ contentos con la casa nueva?', options: ['estamos', 'estáis', 'están'], correct: 'estáis' },
        { id: 'q5', prompt: 'Mi café ya ___ frío.',                       options: ['estoy', 'está', 'están'], correct: 'está' },
        { id: 'q6', prompt: 'Mi hermana y yo ___ resfriadas.',             options: ['están', 'estamos', 'estáis'], correct: 'estamos' },
        { id: 'q7', prompt: '¿Dónde ___ el supermercado, por favor?',       options: ['estás', 'estoy', 'está'], correct: 'está' },
        { id: 'q8', prompt: 'Ustedes ___ en el aula 12.',                    options: ['están', 'estáis', 'estamos'], correct: 'están' },
      ],
    },

    {
      id: '43.6',
      title: 'Опишите состояние по картинке',
      type: 'fill',
      instructions: 'Соберите фразу. Образец: <em>la ventana / abierta → La ventana está abierta.</em>',
      questions: [
        { id: 'q1', prompt: 'la puerta / cerrada →',              correct: ['La puerta está cerrada.'] },
        { id: 'q2', prompt: 'los niños / cansados →',              correct: ['Los niños están cansados.'] },
        { id: 'q3', prompt: 'mi padre / enfermo →',                 correct: ['Mi padre está enfermo.'] },
        { id: 'q4', prompt: 'las luces / apagadas →',                correct: ['Las luces están apagadas.'] },
        { id: 'q5', prompt: 'yo / un poco mareada →',                correct: ['Yo estoy un poco mareada.', 'Estoy un poco mareada.'] },
        { id: 'q6', prompt: 'vosotras / muy guapas →',                correct: ['Vosotras estáis muy guapas.', 'Estáis muy guapas.'] },
        { id: 'q7', prompt: 'mi habitación / limpia →',                correct: ['Mi habitación está limpia.'] },
      ],
    },

    {
      id: '43.7',
      title: 'Соедините начало и продолжение',
      type: 'match',
      instructions: 'Подберите естественное продолжение для каждой фразы с <em>estar</em>.',
      pool: [
        'estoy en la cama, no me encuentro bien.',
        'están en el armario.',
        'está nublado, va a llover.',
        'estamos muy contentos.',
        'estáis muy guapos hoy.',
        'estás muy callada, ¿qué te pasa?',
        'están cerradas hasta las cinco.',
        'está frío, caliéntalo otra vez.',
      ],
      questions: [
        { id: 'q1', prompt: 'Mis zapatos ___',                                correct: 'están en el armario.' },
        { id: 'q2', prompt: 'Las farmacias ___',                              correct: 'están cerradas hasta las cinco.' },
        { id: 'q3', prompt: 'Mi hermana y yo ___',                             correct: 'estamos muy contentos.' },
        { id: 'q4', prompt: 'Hoy yo ___',                                       correct: 'estoy en la cama, no me encuentro bien.' },
        { id: 'q5', prompt: 'Tú ___',                                           correct: 'estás muy callada, ¿qué te pasa?' },
        { id: 'q6', prompt: 'El cielo ___',                                     correct: 'está nublado, va a llover.' },
        { id: 'q7', prompt: 'El café ___',                                       correct: 'está frío, caliéntalo otra vez.' },
        { id: 'q8', prompt: 'Vosotros ___',                                      correct: 'estáis muy guapos hoy.' },
      ],
    },

    {
      id: '43.8',
      title: 'Диалог',
      type: 'fill',
      instructions: 'Заполните пропуски формами <em>estar</em>.',
      questions: [
        { id: 'q1', prompt: '— Buenos días. ¿___ la señora Pérez?',          correct: 'Está' },
        { id: 'q2', prompt: '— No, no ___, vuelva por la tarde.',              correct: 'está' },
        { id: 'q3', prompt: '— ¿Cómo ___ usted, doña Elena?',                  correct: 'está' },
        { id: 'q4', prompt: '— Bien, gracias. Pero mi marido ___ resfriado.',   correct: 'está' },
        { id: 'q5', prompt: '— ¿Dónde ___ mis gafas?',                          correct: 'están' },
        { id: 'q6', prompt: '— ___ encima de la mesa.',                          correct: 'Están' },
      ],
    },

    {
      id: '43.9',
      title: 'Отметьте все случаи, где нужен <em>estar</em>',
      type: 'multi',
      instructions: 'Какие из ситуаций — типичные именно для <em>estar</em>?',
      questions: [
        {
          id: 'q1',
          prompt: 'Где обычно требуется <em>estar</em>?',
          options: [
            'местонахождение человека («он на работе»)',
            'местонахождение предмета («ключи на столе»)',
            'местонахождение страны / города («Мадрид находится в Испании»)',
            'сегодняшнее самочувствие («устал, болею»)',
            'постоянная характеристика («умный, высокий»)',
            'временное состояние объекта («дверь закрыта, суп холодный»)',
            'профессия и национальность',
            'настроение в данный момент',
          ],
          correct: [
            'местонахождение человека («он на работе»)',
            'местонахождение предмета («ключи на столе»)',
            'местонахождение страны / города («Мадрид находится в Испании»)',
            'сегодняшнее самочувствие («устал, болею»)',
            'временное состояние объекта («дверь закрыта, суп холодный»)',
            'настроение в данный момент',
          ],
          explanation: 'Постоянная характеристика, профессия и национальность — это <em>ser</em>.',
        },
      ],
    },

    {
      id: '43.10',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма <em>estar</em> ошибочна — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?',  options: ['estoy', 'estás', 'esta', 'están'], correct: 'esta', explanation: 'У 3-го лица обязательна тильда: <em>está</em>. Без тильды — указательное «эта».' },
        { id: 'q2', prompt: 'Где ошибка?',  options: ['estámos', 'estáis', 'estoy', 'está'], correct: 'estámos', explanation: '<em>estamos</em> — единственная форма без тильды.' },
        { id: 'q3', prompt: 'Где ошибка?',  options: ['Tú estás cansada.', 'Yo estoy bien.', 'Él estás aquí.', 'Estamos contentos.'], correct: 'Él estás aquí.', explanation: 'Должно быть <em>está</em>, не <em>estás</em>.' },
        { id: 'q4', prompt: 'Где ошибка?',  options: ['Las llaves están aquí.', 'Las llaves estan aquí.', 'Las luces están apagadas.', 'Mis amigos están enfermos.'], correct: 'Las llaves estan aquí.', explanation: 'Без тильды — ошибка.' },
        { id: 'q5', prompt: 'Где ошибка?',  options: ['¿Cómo estáis?', '¿Cómo está usted?', '¿Cómo estoy yo?', '¿Cómo estás vosotros?'], correct: '¿Cómo estás vosotros?', explanation: 'С <em>vosotros</em> — <em>estáis</em>.' },
      ],
    },

    {
      id: '43.11',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Нажмите <code>🔊</code>. Запишите фразу <strong>с тильдой и знаками препинания</strong>.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Estoy en casa.',                  correct: ['Estoy en casa.'] },
        { id: 'q2', prompt: '', audio: '¿Cómo estás?',                     correct: ['¿Cómo estás?'] },
        { id: 'q3', prompt: '', audio: 'Estamos cansados.',                 correct: ['Estamos cansados.'] },
        { id: 'q4', prompt: '', audio: 'La puerta está abierta.',           correct: ['La puerta está abierta.'] },
        { id: 'q5', prompt: '', audio: '¿Dónde están las llaves?',           correct: ['¿Dónde están las llaves?'] },
        { id: 'q6', prompt: '', audio: 'Hoy estoy un poco resfriada.',       correct: ['Hoy estoy un poco resfriada.'] },
        { id: 'q7', prompt: '', audio: '¿Está Miguel?',                       correct: ['¿Está Miguel?'] },
      ],
    },

    {
      id: '43.12',
      title: 'Поставьте в форму отрицания',
      type: 'fill',
      instructions: 'Образец: <em>Estoy en casa → No estoy en casa.</em> Запишите всю фразу.',
      questions: [
        { id: 'q1', prompt: 'Estoy cansado. →',                       correct: ['No estoy cansado.'] },
        { id: 'q2', prompt: 'La sopa está caliente. →',                correct: ['La sopa no está caliente.'] },
        { id: 'q3', prompt: 'Mis padres están en casa. →',              correct: ['Mis padres no están en casa.'] },
        { id: 'q4', prompt: 'Estamos en la playa. →',                   correct: ['No estamos en la playa.'] },
        { id: 'q5', prompt: 'Las tiendas están abiertas. →',             correct: ['Las tiendas no están abiertas.'] },
      ],
    },
  ],
};
