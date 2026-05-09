// ============================================================
// Unidad 52 — Vivo en México desde 1998
// Presente для действия, начавшегося в прошлом и продолжающегося
// до сих пор: desde + дата, desde hace + период, hace … que…
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u52 = {
  id: 'u52',
  number: 52,
  title: { es: 'Vivo en México desde 1998', topic: 'Presente para periodos de tiempo' },
  topicRu: 'Презенс с desde, desde hace, hace … que',

  theory: [
    {
      type: 'rule',
      es: 'Cuando una acción <strong>empezó en el pasado y continúa</strong> en el presente, se usa el <strong>presente de indicativo</strong> (no el pasado, como en ruso e inglés).',
      ru: 'Действие, начавшееся в прошлом и <strong>продолжающееся до сих пор</strong>, в испанском передаётся <strong>настоящим временем</strong>. По-русски мы часто говорим в прошедшем («живу с 1998-го» — буквально «я жил с 1998-го»), а испанский требует <em>vivo</em>, а не <em>vivía/he vivido</em>.',
      examples: [
        { es: 'Vivo en México desde 1998.', ru: 'Я живу в Мексике с 1998 года.' },
        { es: 'Conozco a Elsa desde 2002.', ru: 'Я знаю Эльсу с 2002 года.' },
        { es: 'Trabajo en un banco desde el año pasado.', ru: 'Я работаю в банке с прошлого года.' },
      ],
    },
    {
      type: 'heading',
      text: 'Три конструкции',
    },
    {
      type: 'table',
      caption: 'Структура и пример',
      columns: ['Структура', 'Пример', 'Перевод'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['<em>presente + <strong>desde</strong> + дата/событие</em>', '<em>Vivo en México <strong>desde</strong> 1998.</em>', 'с 1998 года'],
        ['<em>presente + <strong>desde hace</strong> + период</em>', '<em>Keiko estudia español <strong>desde hace</strong> tres meses.</em>', 'уже три месяца'],
        ['<em><strong>hace</strong> + период + <strong>que</strong> + presente</em>', '<em><strong>Hace</strong> un año <strong>que</strong> estudio español.</em>', 'я год учу испанский'],
      ],
    },
    {
      type: 'rule',
      es: 'La misma estructura se usa en <strong>oraciones negativas</strong> para decir cuánto tiempo <strong>NO</strong> hacemos algo.',
      ru: 'Те же конструкции работают и для отрицания: «не делаю чего-то с тех пор / уже сколько-то».',
      examples: [
        { es: 'No voy al teatro desde Navidad.', ru: 'Я не хожу в театр с Рождества.' },
        { es: 'No veo a Pili desde hace mucho tiempo.', ru: 'Я не вижусь с Пили уже давно.' },
        { es: 'Hace dos días que no miro el correo.', ru: 'Два дня не проверяю почту.' },
      ],
    },
    {
      type: 'heading',
      text: 'Вопросы',
    },
    {
      type: 'table',
      caption: 'Как спрашивать',
      columns: ['Вопрос', 'Тип ответа'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>¿<strong>Desde cuándo</strong> conoces a Charo?</em>', '<em>(La conozco) desde 2010 / desde el verano pasado.</em>'],
        ['<em>¿<strong>Cuánto tiempo hace que</strong> trabajas aquí?</em>', '<em>Trabajo aquí desde hace cinco años. / Hace cinco años que trabajo aquí.</em>'],
        ['<em>¿<strong>Hace mucho que</strong> esperas?</em>', '<em>No, sólo diez minutos.</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Важно: <em>desde</em> идёт с <strong>точкой</strong> отсчёта (1998, enero, Navidad, era pequeño…), а <em>desde hace</em> и <em>hace … que</em> — с <strong>периодом</strong> (tres meses, dos años, mucho tiempo).',
      ru: 'Запомните разницу: <em>desde</em> + момент («с какого времени»), а <em>desde hace</em> / <em>hace … que</em> + длительность («сколько уже»). Перепутать — самая частая ошибка.',
    },
  ],

  exercises: [
    {
      id: '52.1',
      title: 'desde или desde hace?',
      type: 'choice',
      instructions: 'После desde — точка отсчёта (год, дата, событие). После desde hace — период.',
      questions: [
        { id: 'q1', prompt: 'Vivo aquí ___ 2015.', options: ['desde', 'desde hace'], correct: 'desde' },
        { id: 'q2', prompt: 'Vivo aquí ___ ocho años.', options: ['desde', 'desde hace'], correct: 'desde hace' },
        { id: 'q3', prompt: 'Conozco a Marta ___ el verano pasado.', options: ['desde', 'desde hace'], correct: 'desde' },
        { id: 'q4', prompt: 'Conozco a Marta ___ tres meses.', options: ['desde', 'desde hace'], correct: 'desde hace' },
        { id: 'q5', prompt: 'Trabajamos juntos ___ enero.', options: ['desde', 'desde hace'], correct: 'desde' },
        { id: 'q6', prompt: 'No fumo ___ mucho tiempo.', options: ['desde', 'desde hace'], correct: 'desde hace' },
        { id: 'q7', prompt: 'Estudia inglés ___ que era pequeño.', options: ['desde', 'desde hace'], correct: 'desde', explanation: '«Desde» работает и с придаточными времени.' },
        { id: 'q8', prompt: 'No voy al teatro ___ dos años.', options: ['desde', 'desde hace'], correct: 'desde hace' },
      ],
    },

    {
      id: '52.2',
      title: 'Поставьте глагол в форму настоящего',
      type: 'fill',
      instructions: 'Глагол в скобках — в нужное лицо настоящего времени.',
      questions: [
        { id: 'q1', prompt: '¿Cuánto tiempo hace que (vivir, usted) ___ en Caracas?', correct: 'vive' },
        { id: 'q2', prompt: '—¿Hablas español? —Sí, lo (hablar) ___ desde que era pequeño.', correct: 'hablo' },
        { id: 'q3', prompt: '¿Hace mucho que no (conocer, vosotros) ___ a Ronaldo?', correct: 'conocéis' },
        { id: 'q4', prompt: '¿Cuánto tiempo hace que (vivir) ___ ustedes en Quito?', correct: 'viven' },
        { id: 'q5', prompt: '¿Desde cuándo (ser) ___ amigos Jorge y tú?', correct: 'sois' },
        { id: 'q6', prompt: 'Hace dos semanas que (trabajar, yo) ___ en este bar.', correct: 'trabajo' },
        { id: 'q7', prompt: 'Lucas y Alba no (tener) ___ vacaciones desde hace cuatro años.', correct: 'tienen' },
        { id: 'q8', prompt: '¿Hace mucho que (conducir, usted) ___?', correct: 'conduce' },
        { id: 'q9', prompt: '¿Desde cuándo (vosotros, conocerse) ___?', correct: 'os conocéis' },
        { id: 'q10', prompt: 'Mis padres no (salir) ___ de noche desde hace meses.', correct: 'salen' },
      ],
    },

    {
      id: '52.3',
      title: 'Перепишите с desde',
      type: 'fill',
      instructions: 'По образцу: <em>Empecé a trabajar aquí en 2018</em> → <em>Trabajo aquí desde 2018.</em> Дайте только переписанную фразу с точкой в конце.',
      questions: [
        { id: 'q1', prompt: 'Lupe conoció a Jaime en 2001. → Lupe ___', correct: ['conoce a Jaime desde 2001.', 'conoce a Jaime desde 2001'], placeholder: 'conoce a Jaime desde ...' },
        { id: 'q2', prompt: 'Vivo en Lima. Llegué aquí en 1999. → Yo ___', correct: ['vivo en Lima desde 1999.', 'vivo en Lima desde 1999'] },
        { id: 'q3', prompt: 'Salgo con Rosario. Empecé a salir con ella en enero. → Yo ___', correct: ['salgo con Rosario desde enero.', 'salgo con Rosario desde enero'] },
        { id: 'q4', prompt: 'Trabajo en este banco. Empecé el año pasado. → Yo ___', correct: ['trabajo en este banco desde el año pasado.', 'trabajo en este banco desde el año pasado'] },
        { id: 'q5', prompt: 'Estudio español. Empecé cuando era niña. → Yo ___', correct: ['estudio español desde que era niña.', 'estudio español desde que era niña'] },
      ],
    },

    {
      id: '52.4',
      title: 'Перепишите с desde hace',
      type: 'fill',
      instructions: 'Образец: <em>Empezó a estudiar español hace seis meses</em> → <em>Estudia español desde hace seis meses.</em>',
      questions: [
        { id: 'q1', prompt: 'Yasir estudia español. Empezó hace seis meses. → Yasir ___', correct: ['estudia español desde hace seis meses.', 'estudia español desde hace seis meses'], placeholder: 'estudia español desde hace ...' },
        { id: 'q2', prompt: 'Conozco a César. Lo conocí hace cinco años. → Yo ___', correct: ['conozco a César desde hace cinco años.', 'conozco a César desde hace cinco años'] },
        { id: 'q3', prompt: 'Tengo móvil. Lo compré hace dos meses. → Yo ___', correct: ['tengo móvil desde hace dos meses.', 'tengo móvil desde hace dos meses'] },
        { id: 'q4', prompt: 'No fumo. Dejé de fumar hace un mes. → Yo ___', correct: ['no fumo desde hace un mes.', 'no fumo desde hace un mes'] },
        { id: 'q5', prompt: 'No vamos al cine. La última vez fue hace dos semanas. → ___', correct: ['No vamos al cine desde hace dos semanas.', 'No vamos al cine desde hace dos semanas'], placeholder: 'No vamos ...' },
      ],
    },

    {
      id: '52.5',
      title: 'Перепишите с hace … que',
      type: 'fill',
      instructions: 'Образец: <em>Estudio español desde hace seis meses</em> → <em>Hace seis meses que estudio español.</em>',
      questions: [
        { id: 'q1', prompt: 'Trabajo aquí desde hace cinco años. → ___', correct: ['Hace cinco años que trabajo aquí.', 'Hace cinco años que trabajo aquí'], placeholder: 'Hace cinco años que ...' },
        { id: 'q2', prompt: 'No veo a Pili desde hace mucho tiempo. → ___', correct: ['Hace mucho tiempo que no veo a Pili.', 'Hace mucho tiempo que no veo a Pili'] },
        { id: 'q3', prompt: 'Vivo en este piso desde hace tres meses. → ___', correct: ['Hace tres meses que vivo en este piso.', 'Hace tres meses que vivo en este piso'] },
        { id: 'q4', prompt: 'Conozco a Elsa desde hace veinte años. → ___', correct: ['Hace veinte años que conozco a Elsa.', 'Hace veinte años que conozco a Elsa'] },
        { id: 'q5', prompt: 'No miro el correo desde hace dos días. → ___', correct: ['Hace dos días que no miro el correo.', 'Hace dos días que no miro el correo'] },
      ],
    },

    {
      id: '52.6',
      title: 'Сформулируйте вопрос',
      type: 'fill',
      instructions: 'По данному ответу составьте вопрос, начинающийся с <em>¿Desde cuándo</em> или <em>¿Cuánto tiempo hace que</em>.',
      questions: [
        { id: 'q1', prompt: 'Hace cinco años que conozco a César. — ¿___ conoces a César?', correct: 'Cuánto tiempo hace que' },
        { id: 'q2', prompt: 'No fumo desde hace un mes. — ¿___ no fumas?', correct: ['Desde cuándo', 'Cuánto tiempo hace que'], explanation: 'Оба вопроса возможны.' },
        { id: 'q3', prompt: 'Vivimos en Mérida desde hace dos años. — ¿___ vivís en Mérida?', correct: ['Cuánto tiempo hace que', 'Desde cuándo'] },
        { id: 'q4', prompt: 'Asún y yo salimos juntos desde que teníamos dieciséis años. — ¿___ salís juntos?', correct: 'Desde cuándo' },
        { id: 'q5', prompt: 'Mi padre trabaja en esta empresa desde que tenía veinte años. — ¿___ trabaja tu padre en esta empresa?', correct: 'Desde cuándo' },
        { id: 'q6', prompt: 'No vamos al cine desde las pasadas Navidades. — ¿___ no vais al cine?', correct: ['Desde cuándo', 'Cuánto tiempo hace que'] },
      ],
    },

    {
      id: '52.7',
      title: 'Прошедшее или настоящее?',
      type: 'choice',
      instructions: 'Если действие закончилось — нужен прошедший. Если продолжается — настоящий.',
      questions: [
        { id: 'q1', prompt: 'Виолета знает Карлоса с 2010 года и до сих пор: <em>Violeta ___ a Carlos desde 2010.</em>', options: ['conoce', 'conoció'], correct: 'conoce' },
        { id: 'q2', prompt: 'Лето кончилось, поездка завершилась: <em>El verano pasado ___ a la playa.</em>', options: ['voy', 'fui'], correct: 'fui' },
        { id: 'q3', prompt: 'Учу испанский второй год — продолжается: <em>___ español desde hace dos años.</em>', options: ['Estudio', 'Estudié'], correct: 'Estudio' },
        { id: 'q4', prompt: 'Жил в Перу пять лет, потом уехал: <em>___ en Perú cinco años.</em>', options: ['Vivo', 'Viví'], correct: 'Viví' },
        { id: 'q5', prompt: 'Не вижу Хорхе с прошлого декабря: <em>No ___ a Jorge desde diciembre.</em>', options: ['veo', 'vi'], correct: 'veo' },
      ],
    },

    {
      id: '52.8',
      title: 'Соберите фразу',
      type: 'fill',
      instructions: 'Из частей соберите грамотную фразу. Сохраняйте регистр и пунктуацию.',
      questions: [
        { id: 'q1', prompt: '<em>vivir / yo / Madrid / desde / 2010</em>', correct: ['Vivo en Madrid desde 2010.', 'Vivo en Madrid desde 2010'], placeholder: 'Vivo en Madrid ...' },
        { id: 'q2', prompt: '<em>desde hace / tres años / estudiar / nosotros / chino</em>', correct: ['Estudiamos chino desde hace tres años.', 'Estudiamos chino desde hace tres años'] },
        { id: 'q3', prompt: '<em>hace / cinco años / que / yo / no ver / a mi tío</em>', correct: ['Hace cinco años que no veo a mi tío.', 'Hace cinco años que no veo a mi tío'] },
        { id: 'q4', prompt: '<em>¿desde cuándo / tú / conocer / a Marta?</em>', correct: ['¿Desde cuándo conoces a Marta?'] },
        { id: 'q5', prompt: '<em>¿cuánto tiempo / hacer que / vosotros / trabajar aquí?</em>', correct: ['¿Cuánto tiempo hace que trabajáis aquí?'] },
      ],
    },

    {
      id: '52.9',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с грамматической ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Vivo aquí desde 2018.', 'Vivo aquí desde hace seis años.', 'Vivo aquí desde hace 2018.', 'Hace seis años que vivo aquí.'], correct: 'Vivo aquí desde hace 2018.', explanation: '<em>desde hace</em> требует период, не год. С годом — просто <em>desde</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Trabajo aquí desde enero.', 'Trabajo aquí desde hace tres meses.', 'Hace tres meses trabajo aquí.', 'Hace tres meses que trabajo aquí.'], correct: 'Hace tres meses trabajo aquí.', explanation: 'В конструкции <em>hace … presente</em> обязательно <em>que</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Conozco a Pedro desde 2010.', 'Conocí a Pedro desde 2010.', 'Conozco a Pedro desde hace mucho.', 'Hace años que conozco a Pedro.'], correct: 'Conocí a Pedro desde 2010.', explanation: 'Действие продолжается → настоящее.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['¿Desde cuándo vives aquí?', '¿Cuánto tiempo hace que vives aquí?', '¿Desde hace cuándo vives aquí?', '¿Hace mucho que vives aquí?'], correct: '¿Desde hace cuándo vives aquí?', explanation: 'Спрашивая о моменте — только <em>¿Desde cuándo…?</em>' },
      ],
    },

    {
      id: '52.10',
      title: 'desde когда / cuánto tiempo',
      type: 'multi',
      instructions: 'Отметьте все фразы, где конструкция <strong>грамматически верная</strong>.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие из этих фраз правильны?',
          options: [
            'Vivo en Lima desde 2005.',
            'Vivo en Lima desde hace 2005.',
            'Hace cinco años que vivo en Lima.',
            'Hace cinco años vivo en Lima.',
            'No te veo desde Navidad.',
            'No te veo desde hace mucho.',
            'Hace mucho que no te veo.',
            'Conozco a Ana desde hace que era niña.',
          ],
          correct: [
            'Vivo en Lima desde 2005.',
            'Hace cinco años que vivo en Lima.',
            'No te veo desde Navidad.',
            'No te veo desde hace mucho.',
            'Hace mucho que no te veo.',
          ],
          explanation: '<em>desde hace 2005</em> — нет (год — точка); <em>hace cinco años vivo</em> — нужно <em>que</em>; <em>desde hace que era niña</em> — придаточное времени идёт с одним <em>desde</em>.',
        },
      ],
    },

    {
      id: '52.11',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Запишите услышанное полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Vivo en México desde 1998.', correct: ['Vivo en México desde 1998.', 'Vivo en México desde 1998'] },
        { id: 'q2', prompt: '', audio: 'Estudio español desde hace tres meses.', correct: ['Estudio español desde hace tres meses.', 'Estudio español desde hace tres meses'] },
        { id: 'q3', prompt: '', audio: 'Hace dos años que trabajo aquí.', correct: ['Hace dos años que trabajo aquí.', 'Hace dos años que trabajo aquí'] },
        { id: 'q4', prompt: '', audio: 'No veo a Pili desde hace mucho tiempo.', correct: ['No veo a Pili desde hace mucho tiempo.', 'No veo a Pili desde hace mucho tiempo'] },
        { id: 'q5', prompt: '', audio: '¿Desde cuándo conoces a Charo?', correct: ['¿Desde cuándo conoces a Charo?'] },
      ],
    },

    {
      id: '52.12',
      title: 'Сопоставьте русское и испанское',
      type: 'match',
      instructions: 'Подберите для каждой русской фразы испанский эквивалент.',
      pool: [
        'Vivo aquí desde 2010.',
        'Vivo aquí desde hace dos años.',
        'Hace dos años que vivo aquí.',
        'Viví aquí dos años.',
        'No fumo desde hace un mes.',
        '¿Desde cuándo lo conoces?',
      ],
      questions: [
        { id: 'q1', prompt: 'Я живу здесь с 2010 года.', correct: 'Vivo aquí desde 2010.' },
        { id: 'q2', prompt: 'Я живу здесь два года (продолжаю).', correct: 'Vivo aquí desde hace dos años.' },
        { id: 'q3', prompt: 'Прожил здесь два года (потом уехал).', correct: 'Viví aquí dos años.' },
        { id: 'q4', prompt: 'Уже два года, как я живу здесь.', correct: 'Hace dos años que vivo aquí.' },
        { id: 'q5', prompt: 'Я не курю уже месяц.', correct: 'No fumo desde hace un mes.' },
        { id: 'q6', prompt: 'С какого времени ты его знаешь?', correct: '¿Desde cuándo lo conoces?' },
      ],
    },
  ],
};
