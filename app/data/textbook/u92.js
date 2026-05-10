// ============================================================
// Unidad 92 — Condicionales (2)
// Si encontrara trabajo, me casaría
// Маловероятные / воображаемые условия:
// si + imperfecto de subjuntivo → condicional simple.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u92 = {
  id: 'u92',
  number: 92,
  title: { es: 'Si encontrara trabajo, me casaría', topic: 'Condicionales (2)' },
  topicRu: 'Условные предложения (2): маловероятное и воображаемое условие',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Cuando hablamos de una condición que el hablante considera <strong>poco probable</strong> o claramente <strong>imaginaria</strong>, usamos: <em>si + pretérito imperfecto de subjuntivo</em> → <em>condicional simple</em>.',
      ru: 'Когда говорящий считает условие <strong>маловероятным</strong> или явно <strong>воображаемым</strong>, конструкция такая: <em>si + pretérito imperfecto de subjuntivo</em> → <em>condicional simple</em>.',
      examples: [
        { es: 'Si encontrara trabajo, me casaría.', ru: 'Если бы я нашёл работу, я бы женился. (работы пока нет — мало шансов)' },
        { es: 'Si tuviéramos dinero, iríamos al Caribe.', ru: 'Если бы у нас были деньги, мы бы поехали в Карибы. (денег нет — это мечта)' },
        { es: 'Si Alberto fuera más alto, sería un buen jugador de baloncesto.', ru: 'Если бы Альберто был выше, был бы хорошим баскетболистом. (он не выше)' },
      ],
    },

    {
      type: 'heading',
      text: 'Какие времена',
    },
    {
      type: 'table',
      caption: 'Маловероятное / воображаемое условие',
      columns: ['Condición', 'Consecuencia'],
      colClasses: ['col-pattern', 'col-pattern'],
      rows: [
        ['<em>si</em> + <strong>imperfecto de subjuntivo</strong> (<em>-ara/-iera</em>)', '<strong>condicional simple</strong> (<em>-ría</em>)'],
        ['<em>Si Alicia me dejara el coche,</em>', '<em>te llevaría a casa.</em>'],
        ['<em>Si supiera la verdad,</em>', '<em>te lo diría.</em>'],
        ['<em>Si fuéramos millonarios,</em>', '<em>compraríamos una isla.</em>'],
      ],
    },

    {
      type: 'atencion',
      es: 'El imperfecto de subjuntivo tiene <strong>dos formas</strong> intercambiables: <em>-ara / -iera</em> (<em>cantara, comiera, viviera</em>) y <em>-ase / -iese</em> (<em>cantase, comiese, viviese</em>). En el día a día se usa más la primera.',
      ru: 'У <em>imperfecto de subjuntivo</em> две взаимозаменяемые формы: <em>-ara / -iera</em> и <em>-ase / -iese</em>. В повседневной речи чаще встречается первая.',
    },

    {
      type: 'heading',
      text: 'Сравнение: реальное и нереальное',
    },
    {
      type: 'table',
      caption: 'Real, real-improbable, imaginario',
      columns: ['Тип ситуации', 'Условие', 'Главная часть'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['<strong>real, posible</strong> (см. unidad 91)', '<em>Si viene Marga,</em>', '<em>nos lo pasaremos bien.</em>'],
        ['<strong>real pero improbable</strong>', '<em>Si viniera Marga,</em>', '<em>nos lo pasaríamos bien.</em>'],
        ['<strong>real, posible</strong> (mañana)', '<em>Si hace buen tiempo mañana,</em>', '<em>podemos dar un paseo.</em>'],
        ['<strong>imaginaria</strong> (no real)', '<em>Si hiciera buen tiempo,</em>', '<em>podríamos dar un paseo.</em>'],
      ],
    },

    {
      type: 'rule',
      es: 'Estas oraciones se usan también para <strong>dar consejos</strong> o expresar <strong>hipótesis sobre la persona</strong>: <em>Yo en tu lugar...</em>',
      ru: 'Эта же конструкция используется для <strong>советов</strong> и <strong>гипотез</strong> о собеседнике: «На твоём месте я бы...»',
      examples: [
        { es: 'Yo, si fuera tú, no diría nada.', ru: 'На твоём месте я бы ничего не сказал.' },
        { es: 'Si yo estuviera en tu lugar, hablaría con el jefe.', ru: 'Если бы я был на твоём месте, я бы поговорил с начальником.' },
      ],
    },

    {
      type: 'atencion',
      es: 'En el español actual, en la lengua hablada se oye también <em>si + condicional</em> (⛔ <em>«Si tendría tiempo, iría»</em>) — pero <strong>es incorrecto</strong> en el español estándar. Hay que decir <em>Si tuviera tiempo, iría</em>.',
      ru: 'В разговорной речи иногда встречается <em>si + condicional</em> (⛔ <em>«Si tendría tiempo, iría»</em>), но это <strong>не литературная норма</strong>. Правильно — <em>Si tuviera tiempo, iría</em>.',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '92.1',
      title: 'Поставьте глагол в imperfecto de subjuntivo',
      type: 'fill',
      instructions: 'Используйте форму на <em>-ara / -iera</em>. Пример: <em>cantar → cantara</em>, <em>tener → tuviera</em>.',
      questions: [
        { id: 'q1', prompt: 'Si yo (tener) ___ tiempo, iría al cine.', correct: 'tuviera' },
        { id: 'q2', prompt: 'Si tú (estudiar) ___ más, aprobarías.', correct: 'estudiaras' },
        { id: 'q3', prompt: 'Si ellos (venir) ___ a Madrid, los llevaríamos al Prado.', correct: 'vinieran' },
        { id: 'q4', prompt: 'Si Marta (saber) ___ la verdad, se enfadaría.', correct: 'supiera' },
        { id: 'q5', prompt: 'Si nosotros (poder) ___, te ayudaríamos.', correct: 'pudiéramos' },
        { id: 'q6', prompt: 'Si Luis (ser) ___ más alto, jugaría al baloncesto.', correct: 'fuera' },
        { id: 'q7', prompt: 'Si vosotros (ir) ___ a Cuba, os encantaría.', correct: 'fuerais' },
        { id: 'q8', prompt: 'Si yo (hablar) ___ chino, trabajaría en Pekín.', correct: 'hablara' },
        { id: 'q9', prompt: 'Si tú (querer) ___, te lo regalaría.', correct: 'quisieras' },
      ],
    },

    {
      id: '92.2',
      title: 'Поставьте глагол в condicional simple',
      type: 'fill',
      instructions: 'Главная часть предложения. Образец: <em>yo / cantar → cantaría</em>.',
      questions: [
        { id: 'q1', prompt: 'Si tuviera dinero, me (comprar) ___ un coche.', correct: 'compraría' },
        { id: 'q2', prompt: 'Si supiéramos su dirección, le (escribir) ___.', correct: 'escribiríamos' },
        { id: 'q3', prompt: 'Si fueras más amable, (tú / tener) ___ más amigos.', correct: 'tendrías' },
        { id: 'q4', prompt: 'Si hablara español, (yo / poder) ___ trabajar en Madrid.', correct: 'podría' },
        { id: 'q5', prompt: 'Si tú vinieras conmigo, yo (ser) ___ feliz.', correct: 'sería' },
        { id: 'q6', prompt: 'Si los niños comieran fruta, (estar) ___ más sanos.', correct: 'estarían' },
        { id: 'q7', prompt: 'Si Pedro me lo pidiera, lo (yo / hacer) ___.', correct: 'haría' },
        { id: 'q8', prompt: 'Si tuviéramos tiempo, (nosotros / ir) ___ a la montaña.', correct: 'iríamos' },
      ],
    },

    {
      id: '92.3',
      title: 'Соберите фразу целиком',
      type: 'fill',
      instructions: 'Преобразуйте оба глагола: <em>si + imp. de subj.</em>, <em>condicional</em>. Пишите всё предложение.',
      questions: [
        { id: 'q1', prompt: 'yo / saber inglés / yo / hablar con ellos →', correct: ['Si supiera inglés, hablaría con ellos.', 'Si supiera inglés hablaría con ellos.'], placeholder: 'Si ...' },
        { id: 'q2', prompt: 'tú / venir a la fiesta / tú / divertirse →', correct: ['Si vinieras a la fiesta, te divertirías.', 'Si vinieras a la fiesta te divertirías.'] },
        { id: 'q3', prompt: 'nosotros / tener vacaciones / nosotros / ir a Cuba →', correct: ['Si tuviéramos vacaciones, iríamos a Cuba.', 'Si tuviéramos vacaciones iríamos a Cuba.'] },
        { id: 'q4', prompt: 'Pablo / estudiar más / él / aprobar el examen →', correct: ['Si Pablo estudiara más, aprobaría el examen.', 'Si Pablo estudiara más aprobaría el examen.'] },
        { id: 'q5', prompt: 'yo / ser tú / yo / hablar con el jefe →', correct: ['Si yo fuera tú, hablaría con el jefe.', 'Si yo fuera tú hablaría con el jefe.', 'Si fuera tú, hablaría con el jefe.', 'Si fuera tú hablaría con el jefe.'] },
      ],
    },

    {
      id: '92.4',
      title: 'Реальное (u91) или маловероятное (u92)?',
      type: 'choice',
      instructions: 'Какой тип условия использовать?',
      questions: [
        { id: 'q1', prompt: 'Probablemente vendrá Pablo. <em>Si Pablo ___, le presentaré a María.</em>', options: ['viene', 'viniera'], correct: 'viene' },
        { id: 'q2', prompt: 'Pablo está en Australia y no piensa volver. <em>Si Pablo ___, le presentaríamos a María.</em>', options: ['viene', 'viniera'], correct: 'viniera' },
        { id: 'q3', prompt: 'Tu hermano es bajo. <em>Si tu hermano ___ más alto, jugaría en el equipo.</em>', options: ['es', 'fuera'], correct: 'fuera' },
        { id: 'q4', prompt: 'Probablemente lloverá. <em>Si ___, nos quedamos en casa.</em>', options: ['llueve', 'lloviera'], correct: 'llueve' },
        { id: 'q5', prompt: 'No tengo dinero. <em>Si ___ dinero, viajaría por el mundo.</em>', options: ['tengo', 'tuviera'], correct: 'tuviera' },
        { id: 'q6', prompt: 'Quizás Luis llegue antes. <em>Si Luis ___ antes, cenaremos juntos.</em>', options: ['llega', 'llegara'], correct: 'llega' },
      ],
    },

    {
      id: '92.5',
      title: 'Какое время в condicional',
      type: 'choice',
      instructions: 'Выберите верную форму главной части.',
      questions: [
        { id: 'q1', prompt: 'Si tuviera tiempo, te ___.', options: ['ayudara', 'ayudaría', 'ayudo'], correct: 'ayudaría' },
        { id: 'q2', prompt: 'Si ellos vinieran, ___ una fiesta.', options: ['hacíamos', 'haremos', 'haríamos'], correct: 'haríamos' },
        { id: 'q3', prompt: 'Si tú me quisieras, ___ feliz.', options: ['era', 'sería', 'estaría'], correct: 'sería' },
        { id: 'q4', prompt: 'Si Roberto fuera más amable, ___ más amigos.', options: ['tiene', 'tendrá', 'tendría'], correct: 'tendría' },
        { id: 'q5', prompt: 'Si yo supiera ruso, ___ trabajar en Moscú.', options: ['podría', 'puedo', 'podré'], correct: 'podría' },
      ],
    },

    {
      id: '92.6',
      title: 'Соедините половинки',
      type: 'match',
      instructions: 'Подберите следствие к каждому условию.',
      pool: [
        'iría más al cine.',
        'cogería un taxi.',
        'me lo diría.',
        'te quedarías sin amigos.',
        'compraría una casa en la playa.',
        'le ayudaría yo mismo.',
        'no estaría tan cansada.',
      ],
      questions: [
        { id: 'q1', prompt: 'Si Ana confiara en mí,',           correct: 'me lo diría.' },
        { id: 'q2', prompt: 'Si llegáramos tarde,',              correct: 'cogería un taxi.' },
        { id: 'q3', prompt: 'Si tuviera más tiempo,',            correct: 'iría más al cine.' },
        { id: 'q4', prompt: 'Si fuera rico,',                    correct: 'compraría una casa en la playa.' },
        { id: 'q5', prompt: 'Si trataras así a la gente,',       correct: 'te quedarías sin amigos.' },
        { id: 'q6', prompt: 'Si Pedro no pudiera,',              correct: 'le ayudaría yo mismo.' },
        { id: 'q7', prompt: 'Si Marta durmiera mejor,',          correct: 'no estaría tan cansada.' },
      ],
    },

    {
      id: '92.7',
      title: 'Найдите фразы без ошибок',
      type: 'multi',
      instructions: 'Отметьте все грамматически корректные фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Si tendría tiempo, iría.',
            'Si tuviera tiempo, iría.',
            'Si fuera tú, no diría nada.',
            'Si sería tú, no diría nada.',
            'Si supiera francés, trabajaría en París.',
            'Si supiera francés, trabajaré en París.',
            'Si vinieras conmigo, sería feliz.',
            'Si venir conmigo, sería feliz.',
          ],
          correct: [
            'Si tuviera tiempo, iría.',
            'Si fuera tú, no diría nada.',
            'Si supiera francés, trabajaría en París.',
            'Si vinieras conmigo, sería feliz.',
          ],
          explanation: 'После <em>si</em> в нереальном условии — только <em>imperfecto de subjuntivo</em>; в главной части — <em>condicional simple</em>.',
        },
      ],
    },

    {
      id: '92.8',
      title: 'Дайте совет: «На твоём месте я бы...»',
      type: 'fill',
      instructions: 'Образец: <em>No le digas nada → Yo, si fuera tú, no le diría nada.</em> Заполните пропуск формой <em>condicional</em>.',
      questions: [
        { id: 'q1', prompt: 'Estudia más → Yo, si fuera tú, (estudiar) ___ más.', correct: 'estudiaría' },
        { id: 'q2', prompt: 'Habla con el jefe → Yo, si fuera tú, (hablar) ___ con el jefe.', correct: 'hablaría' },
        { id: 'q3', prompt: 'Vete pronto → Yo, si fuera tú, me (ir) ___ pronto.', correct: 'iría' },
        { id: 'q4', prompt: 'Cómprate ese coche → Yo, si fuera tú, me (comprar) ___ ese coche.', correct: 'compraría' },
        { id: 'q5', prompt: 'No salgas con él → Yo, si fuera tú, no (salir) ___ con él.', correct: 'saldría' },
        { id: 'q6', prompt: 'Pídele perdón → Yo, si fuera tú, le (pedir) ___ perdón.', correct: 'pediría' },
      ],
    },

    {
      id: '92.9',
      title: 'Закончите диалог',
      type: 'fill',
      instructions: 'Поставьте оба глагола в нужное время. Контекст подсказывает: реальное условие или маловероятное.',
      questions: [
        { id: 'q1', prompt: '— ¿Y si te (tocar) ___ la lotería? — Pues (yo / dejar) ___ de trabajar.', correct: 'tocara' },
        { id: 'q2', prompt: '(второй пробел из q1) — Pues (yo / dejar) ___ de trabajar.', correct: 'dejaría' },
        { id: 'q3', prompt: '— Mañana, si (haber) ___ entradas, vamos al teatro. — Vale.', correct: 'hay', explanation: 'Завтра — реально возможно: <em>presente de indicativo</em>.' },
        { id: 'q4', prompt: '— Si yo (saber) ___ tu número, te llamaría. — Pues apúntalo.', correct: 'supiera' },
        { id: 'q5', prompt: '— ¿Vendrías a Madrid? — Si (yo / poder) ___, sí, pero trabajo todo el verano.', correct: 'pudiera' },
        { id: 'q6', prompt: '(продолжение q5) Si (poder) ___, sí.', correct: 'pudiera' },
      ],
    },

    {
      id: '92.10',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой согласования.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Si tendría tiempo, iría.', 'Si tuviera tiempo, iría.', 'Si tengo tiempo, iré.', 'Si tuvieras tiempo, vendrías.'], correct: 'Si tendría tiempo, iría.', explanation: 'После <em>si</em> нельзя <em>tendría</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Si fuera tú, no diría nada.', 'Si yo seré tú, no diría nada.', 'Si yo fuera tú, hablaría con él.', 'Si yo estuviera en tu lugar, callaría.'], correct: 'Si yo seré tú, no diría nada.', explanation: 'Должно быть <em>fuera</em>, не <em>seré</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Si Pablo viniera, te lo presentaría.', 'Si Pablo viene, te lo presento.', 'Si Pablo vendría, te lo presento.', 'Si Pablo viniera, lo conocerías.'], correct: 'Si Pablo vendría, te lo presento.', explanation: 'После <em>si</em> — никогда условное <em>vendría</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Si tuviera dinero, viajaría.', 'Si tendrá dinero, viajará.', 'Si tiene dinero, viajará.', 'Si tuviera dinero, viajaba mucho.'], correct: 'Si tendrá dinero, viajará.', explanation: 'После <em>si</em> в реальном условии — <em>presente</em>: <em>Si tiene</em>.' },
      ],
    },

    {
      id: '92.11',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Запишите услышанное полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Si tuviera tiempo, iría al cine.',          correct: ['Si tuviera tiempo, iría al cine.', 'Si tuviera tiempo iría al cine.', 'Si tuviera tiempo, iría al cine'] },
        { id: 'q2', prompt: '', audio: 'Si supiera la verdad, te la diría.',         correct: ['Si supiera la verdad, te la diría.', 'Si supiera la verdad te la diría.', 'Si supiera la verdad, te la diría'] },
        { id: 'q3', prompt: '', audio: 'Si fuera rico, compraría una isla.',          correct: ['Si fuera rico, compraría una isla.', 'Si fuera rico compraría una isla.', 'Si fuera rico, compraría una isla'] },
        { id: 'q4', prompt: '', audio: 'Yo, si fuera tú, no diría nada.',              correct: ['Yo, si fuera tú, no diría nada.', 'Yo si fuera tú no diría nada.', 'Yo, si fuera tú, no diría nada'] },
        { id: 'q5', prompt: '', audio: 'Si vinieras conmigo, sería más feliz.',          correct: ['Si vinieras conmigo, sería más feliz.', 'Si vinieras conmigo sería más feliz.', 'Si vinieras conmigo, sería más feliz'] },
      ],
    },

    {
      id: '92.12',
      title: 'Перепишите как «маловероятное»',
      type: 'fill',
      instructions: 'Превратите реальное условие (u91) в маловероятное (u92). Пример: <em>Si tengo dinero, viajaré.</em> → <em>Si tuviera dinero, viajaría.</em>',
      questions: [
        { id: 'q1', prompt: '<em>Si hace sol, iremos al parque.</em> →', correct: ['Si hiciera sol, iríamos al parque.', 'Si hiciera sol iríamos al parque.'] },
        { id: 'q2', prompt: '<em>Si tengo tiempo, te llamaré.</em> →', correct: ['Si tuviera tiempo, te llamaría.', 'Si tuviera tiempo te llamaría.'] },
        { id: 'q3', prompt: '<em>Si Marta viene, cenaremos juntos.</em> →', correct: ['Si Marta viniera, cenaríamos juntos.', 'Si Marta viniera cenaríamos juntos.'] },
        { id: 'q4', prompt: '<em>Si ellos saben la verdad, se enfadarán.</em> →', correct: ['Si ellos supieran la verdad, se enfadarían.', 'Si ellos supieran la verdad se enfadarían.', 'Si supieran la verdad, se enfadarían.', 'Si supieran la verdad se enfadarían.'] },
        { id: 'q5', prompt: '<em>Si Pedro puede, nos ayudará.</em> →', correct: ['Si Pedro pudiera, nos ayudaría.', 'Si Pedro pudiera nos ayudaría.'] },
      ],
    },
  ],
};
