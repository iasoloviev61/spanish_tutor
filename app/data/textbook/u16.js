// ============================================================
// Unidad 16 — Forma comparativa de los adjetivos (2)
// Сравнение равенства: tan ... como, igual de ... (que).
// Правила пересказаны своими словами; примеры — оригинальные.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u16 = {
  id: 'u16',
  number: 16,
  title: { es: 'tan alto, igual de alto', topic: 'Forma comparativa de los adjetivos (2)' },
  topicRu: 'Сравнение равенства: tan ... como, igual de ...',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Para indicar que dos personas, animales o cosas tienen <strong>el mismo grado</strong> de una cualidad, usamos el comparativo de <em>igualdad</em>: <em>tan + adjetivo + como</em> o <em>igual de + adjetivo (+ que)</em>.',
      ru: 'Сравнительная степень <strong>равенства</strong> показывает, что у двух предметов / людей / животных одно и то же качество в одинаковой степени. По-русски — «такой же …, как» или «одинаково …». В испанском есть две основные конструкции: <em>tan + прилаг. + como</em> и <em>igual de + прилаг. (+ que)</em>.',
      examples: [
        { es: 'Martín es tan alto como Carlos.', ru: 'Мартин такой же высокий, как Карлос.' },
        { es: 'Martín es igual de alto que Carlos.', ru: 'Мартин такой же высокий, как Карлос. (то же значение)' },
        { es: 'Sonia es igual de guapa que su madre.', ru: 'Соня такая же красивая, как её мать.' },
        { es: 'El tren no es tan rápido como el avión.', ru: 'Поезд не такой быстрый, как самолёт.' },
      ],
    },
    {
      type: 'heading',
      text: 'Образование',
    },
    {
      type: 'table',
      caption: 'Comparativo de igualdad',
      columns: ['Конструкция', 'Схема', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<em>tan ... como</em>', 'tan + <strong>adjetivo</strong> + como', '<em>Soy tan alto como tú, pero no soy tan fuerte.</em>'],
        ['<em>igual de ... (que)</em>', 'igual de + <strong>adjetivo</strong> (+ que)', '<em>Soy igual de alto que mi hermano.</em><br><em>Mi hermano y yo somos igual de altos.</em>'],
        ['отрицание', 'no + <em>tan</em> + adj. + <em>como</em>', '<em>El tren no es tan rápido como el avión.</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'El adjetivo <strong>concuerda</strong> en género y número con la persona o cosa de la que se habla.',
      ru: 'Прилагательное в этой конструкции <strong>согласуется</strong> по роду и числу с тем, о ком (или о чём) идёт речь — точно так же, как при обычном употреблении прилагательного.',
      examples: [
        { es: 'Mi piso es de pequeño que el tuyo.', ru: '— (неверно)' },
        { es: 'Mi piso es igual de pequeño que el tuyo.', ru: 'Моя квартира такая же маленькая, как твоя.' },
        { es: 'Mi hermana es tan alta como yo.', ru: 'Моя сестра такая же высокая, как я.' },
        { es: 'Sonia y su madre son igual de guapas.', ru: 'Соня и её мама одинаково красивые.' },
        { es: 'Estos dos televisores son igual de caros.', ru: 'Эти два телевизора одинаково дорогие.' },
      ],
    },
    {
      type: 'rule',
      es: 'Después de <em>como</em> o <em>que</em> se usa el <strong>pronombre personal sujeto</strong> (yo, tú, él, ella, nosotros...).',
      ru: 'После <em>como</em> или <em>que</em> ставится <strong>местоимение-подлежащее</strong> (yo, tú, él, ella…), а не косвенная форма (mí, ti).',
      examples: [
        { es: 'Los hijos de Andrés no son tan guapos como él.', ru: 'Дети Андреса не такие красивые, как он.' },
        { es: 'Yo soy igual de trabajadora que vosotros.', ru: 'Я такая же работящая, как и вы.' },
      ],
    },
    {
      type: 'heading',
      text: 'Сравнение синонимичных конструкций',
    },
    {
      type: 'table',
      caption: 'Три способа сказать «такой же ...»',
      columns: ['С качеством', 'С отрицанием'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>Loli es tan simpática como Juani.</em>', '<em>Sus hermanos no son tan trabajadores como Felipe.</em>'],
        ['<em>Loli es igual de simpática que Juani.</em>', '<em>Sus hermanos no son igual de trabajadores que Felipe.</em>'],
        ['<em>Loli y Juani son igual de simpáticas.</em>', '<em>Felipe y sus hermanos no son igual de trabajadores.</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'A veces se prefiere <em>no tan + adjetivo positivo</em> en lugar de <em>más + adjetivo negativo</em> o <em>menos + adjetivo positivo</em>: суавнее по тону.',
      ru: 'Часто, чтобы смягчить высказывание, вместо <em>más feo</em> или <em>menos fuerte</em> говорят <strong>no tan + положительное прилагательное</strong>: <em>no tan guapo</em>, <em>no tan fuerte</em>. Сравните: <em>Adolfo es más feo que Jorge → Adolfo no es tan guapo como Jorge</em>; <em>Luisa es menos fuerte que Ana → Luisa no es tan fuerte como Ana</em>.',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '16.1',
      title: 'Образуйте сравнение равенства с tan ... como',
      type: 'fill',
      instructions: 'Завершите фразу по образцу: <em>Pedro / Luis (alto)</em> → <em>Pedro es tan alto como Luis.</em> Пишите ответ полностью, начиная с подлежащего.',
      questions: [
        { id: 'q1', prompt: 'Marta / Eva (simpática) →', correct: ['Marta es tan simpática como Eva.', 'Marta es tan simpática como Eva'] },
        { id: 'q2', prompt: 'mi piso / tu piso (pequeño) →', correct: ['Mi piso es tan pequeño como tu piso.', 'Mi piso es tan pequeño como tu piso'] },
        { id: 'q3', prompt: 'el café de Brasil / el café de Colombia (bueno) →', correct: ['El café de Brasil es tan bueno como el café de Colombia.', 'El café de Brasil es tan bueno como el café de Colombia'] },
        { id: 'q4', prompt: 'Lola / su madre (joven) →', correct: ['Lola es tan joven como su madre.', 'Lola es tan joven como su madre'] },
        { id: 'q5', prompt: 'tus zapatos / mis zapatos (cómodos) →', correct: ['Tus zapatos son tan cómodos como mis zapatos.', 'Tus zapatos son tan cómodos como mis zapatos'] },
        { id: 'q6', prompt: 'el invierno aquí / el invierno en Moscú (frío) — отрицание →', correct: ['El invierno aquí no es tan frío como el invierno en Moscú.', 'El invierno aquí no es tan frío como el invierno en Moscú'], explanation: 'Отрицание ставится перед <em>tan</em>: <em>no es tan frío como ...</em>' },
      ],
    },

    {
      id: '16.2',
      title: 'Перепишите через igual de ... que',
      type: 'fill',
      instructions: 'Передайте то же самое значение через конструкцию <em>igual de + прилагательное + que</em>.',
      questions: [
        { id: 'q1', prompt: '<em>Marta es tan alta como Eva.</em> →', correct: ['Marta es igual de alta que Eva.', 'Marta es igual de alta que Eva'] },
        { id: 'q2', prompt: '<em>Mi coche es tan rápido como el tuyo.</em> →', correct: ['Mi coche es igual de rápido que el tuyo.', 'Mi coche es igual de rápido que el tuyo'] },
        { id: 'q3', prompt: '<em>Sus hijas son tan amables como ellos.</em> →', correct: ['Sus hijas son igual de amables que ellos.', 'Sus hijas son igual de amables que ellos'] },
        { id: 'q4', prompt: '<em>Pedro es tan trabajador como yo.</em> →', correct: ['Pedro es igual de trabajador que yo.', 'Pedro es igual de trabajador que yo'] },
        { id: 'q5', prompt: '<em>Estas naranjas son tan dulces como aquellas.</em> →', correct: ['Estas naranjas son igual de dulces que aquellas.', 'Estas naranjas son igual de dulces que aquellas'] },
      ],
    },

    {
      id: '16.3',
      title: 'Согласуйте прилагательное',
      type: 'fill',
      instructions: 'Поставьте прилагательное в скобках в нужной форме (род и число).',
      questions: [
        { id: 'q1', prompt: 'Mi hermana es tan ___ como yo. (alto)', correct: 'alta' },
        { id: 'q2', prompt: 'Estas dos sillas son igual de ___. (cómodo)', correct: 'cómodas' },
        { id: 'q3', prompt: 'Los chicos son igual de ___ que las chicas. (listo)', correct: 'listos' },
        { id: 'q4', prompt: 'Marta y Eva son tan ___ como su madre. (guapo)', correct: 'guapas' },
        { id: 'q5', prompt: 'Mi piso es igual de ___ que el tuyo. (pequeño)', correct: 'pequeño' },
        { id: 'q6', prompt: 'Las manzanas son tan ___ como las peras. (caro)', correct: 'caras' },
        { id: 'q7', prompt: 'Mi padre y mi tío son igual de ___. (trabajador)', correct: 'trabajadores' },
        { id: 'q8', prompt: 'Tu casa es tan ___ como la mía. (grande)', correct: 'grande', explanation: 'Прилагательные на <em>-e</em> не меняются по роду.' },
      ],
    },

    {
      id: '16.4',
      title: 'tan, como, igual, que — какое слово?',
      type: 'choice',
      instructions: 'Выберите слово, которое логично заполняет пропуск.',
      questions: [
        { id: 'q1', prompt: 'Soy ___ alto como tú.', options: ['tan', 'igual', 'como', 'que'], correct: 'tan' },
        { id: 'q2', prompt: 'Soy igual ___ alto que tú.', options: ['como', 'de', 'que', 'tan'], correct: 'de' },
        { id: 'q3', prompt: 'No es tan caro ___ un coche nuevo.', options: ['como', 'que', 'de', 'igual'], correct: 'como' },
        { id: 'q4', prompt: 'Es igual de fuerte ___ su hermano.', options: ['como', 'de', 'que', 'tan'], correct: 'que' },
        { id: 'q5', prompt: 'Pedro y yo somos igual ___ trabajadores.', options: ['de', 'como', 'que', 'tan'], correct: 'de', explanation: 'Без второго члена сравнения: <em>somos igual de trabajadores</em>.' },
        { id: 'q6', prompt: 'El italiano es tan fácil ___ el español.', options: ['como', 'que', 'de'], correct: 'como' },
      ],
    },

    {
      id: '16.5',
      title: 'Замените «более / менее» на смягчённое «не такой ... как»',
      type: 'fill',
      instructions: 'Перепишите фразу, используя <em>no es tan ... como</em> + <strong>положительное</strong> прилагательное (антоним к данному). Образец: <em>Adolfo es más feo que Jorge.</em> → <em>Adolfo no es tan guapo como Jorge.</em>',
      questions: [
        { id: 'q1', prompt: '<em>Luisa es menos fuerte que Ana.</em> →', correct: ['Luisa no es tan fuerte como Ana.', 'Luisa no es tan fuerte como Ana'] },
        { id: 'q2', prompt: '<em>Jorge es más feo que yo.</em> →', correct: ['Jorge no es tan guapo como yo.', 'Jorge no es tan guapo como yo'] },
        { id: 'q3', prompt: '<em>Elio es más bajo que su padre.</em> →', correct: ['Elio no es tan alto como su padre.', 'Elio no es tan alto como su padre'] },
        { id: 'q4', prompt: '<em>La silla es más incómoda que el sillón.</em> →', correct: ['La silla no es tan cómoda como el sillón.', 'La silla no es tan cómoda como el sillón'] },
        { id: 'q5', prompt: '<em>Eres más débil que yo.</em> →', correct: ['No eres tan fuerte como yo.', 'No eres tan fuerte como yo'] },
      ],
    },

    {
      id: '16.6',
      title: 'Найдите фразы, в которых сравнение <em>равенства</em> построено правильно',
      type: 'multi',
      instructions: 'Отметьте все грамматически корректные варианты.',
      questions: [
        {
          id: 'q1',
          prompt: 'Где грамматика верна?',
          options: [
            'Soy tan alto como tú.',
            'Soy tan alto que tú.',
            'Soy igual de alto que tú.',
            'Soy igual de alto como tú.',
            'Mi hermano y yo somos igual de altos.',
            'Mi hermano y yo somos tan altos.',
            'No es tan caro como un Ferrari.',
            'No es igual de caro como un Ferrari.',
          ],
          correct: [
            'Soy tan alto como tú.',
            'Soy igual de alto que tú.',
            'Mi hermano y yo somos igual de altos.',
            'No es tan caro como un Ferrari.',
          ],
          explanation: 'После <em>tan</em> ставится <em>como</em>; после <em>igual de</em> — <em>que</em> (или ничего, если без второго члена). <em>tan altos</em> в одиночку без <em>como</em> не работает.',
        },
      ],
    },

    {
      id: '16.7',
      title: 'Сопоставьте начало и конец фразы',
      type: 'match',
      instructions: 'Подберите для каждого начала логичное окончание.',
      pool: [
        'como tú.',
        'como un avión.',
        'que su hermana.',
        'igual de altas.',
        'que el sillón.',
        'como un león.',
      ],
      questions: [
        { id: 'q1', prompt: 'Soy tan alto ___', correct: 'como tú.' },
        { id: 'q2', prompt: 'Mi padre es fuerte ___', correct: 'como un león.' },
        { id: 'q3', prompt: 'El AVE no es tan rápido ___', correct: 'como un avión.' },
        { id: 'q4', prompt: 'Esta cama no es igual de cómoda ___', correct: 'que el sillón.' },
        { id: 'q5', prompt: 'María es igual de simpática ___', correct: 'que su hermana.' },
        { id: 'q6', prompt: 'Lucía y Ana son ___', correct: 'igual de altas.' },
      ],
    },

    {
      id: '16.8',
      title: 'Закончите диалоги',
      type: 'fill',
      instructions: 'Дополните репликой со сравнением равенства. Образец: <em>—Luis es muy listo. —Pues su hermano es igual de listo / tan listo como él.</em>',
      questions: [
        { id: 'q1', prompt: '—Rosario es muy elegante. —Pues sus hijas son ___ elegantes.', correct: ['igual de', 'tan'], placeholder: 'igual de / tan ...' },
        { id: 'q2', prompt: '—Jesús es muy simpático. —Pues su hermana no es ___ simpática como él.', correct: 'tan' },
        { id: 'q3', prompt: '—Esta cama es muy cómoda. —Pues la mía es ___ cómoda que la tuya.', correct: 'igual de' },
        { id: 'q4', prompt: '—Juan es muy amable. —Pues sus hijos no son ___ amables como él.', correct: 'tan' },
        { id: 'q5', prompt: '—Elvira es muy guapa. —Pues sus hermanas son ___ guapas.', correct: ['igual de', 'tan'], placeholder: 'igual de / tan ...' },
      ],
    },

    {
      id: '16.9',
      title: 'Какое местоимение — yo / mí, tú / ti?',
      type: 'choice',
      instructions: 'После <em>como</em> и <em>que</em> ставится местоимение-подлежащее (yo, tú, ...). Выберите верный вариант.',
      questions: [
        { id: 'q1', prompt: 'Sus hijos no son tan altos como ___.', options: ['él', 'lo'], correct: 'él' },
        { id: 'q2', prompt: 'Soy igual de fuerte que ___.', options: ['ti', 'tú'], correct: 'tú' },
        { id: 'q3', prompt: 'No eres tan paciente como ___.', options: ['mí', 'yo'], correct: 'yo' },
        { id: 'q4', prompt: 'Marta es igual de inteligente que ___.', options: ['nosotros', 'nos'], correct: 'nosotros' },
        { id: 'q5', prompt: 'No son tan amables como ___.', options: ['vos', 'vosotros'], correct: 'vosotros' },
      ],
    },

    {
      id: '16.10',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с грамматической ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Soy tan alto como tú.', 'Soy tan alto que tú.', 'No soy tan alto como tú.', 'Soy igual de alto que tú.'], correct: 'Soy tan alto que tú.', explanation: 'После <em>tan</em> ставится <em>como</em>, не <em>que</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Es igual de caro que el otro.', 'Es igual de caro como el otro.', 'Es tan caro como el otro.', 'No es tan caro como el otro.'], correct: 'Es igual de caro como el otro.', explanation: 'После <em>igual de</em> — <em>que</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Mi hermana es tan alto como yo.', 'Mi hermana es tan alta como yo.', 'Mi hermana y yo somos igual de altas.', 'Mi hermana es igual de alta que yo.'], correct: 'Mi hermana es tan alto como yo.', explanation: 'Прилагательное согласуется с подлежащим: <em>alta</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['No son tan amables como nosotros.', 'No son tan amables como nos.', 'No son igual de amables que nosotros.', 'Son tan amables como nosotros.'], correct: 'No son tan amables como nos.', explanation: 'После <em>como</em> — местоимение-подлежащее <em>nosotros</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Sus hijos son igual de altos.', 'Sus hijos son igual de alto.', 'Sus hijos son tan altos como su padre.', 'Sus hijos no son tan altos como su padre.'], correct: 'Sus hijos son igual de alto.', explanation: '<em>hijos</em> мн. ч. → <em>altos</em>.' },
      ],
    },

    {
      id: '16.11',
      title: 'Перевод с русского',
      type: 'fill',
      instructions: 'Переведите. Используйте указанную конструкцию.',
      questions: [
        { id: 'q1', prompt: 'Я такой же высокий, как ты. (через <em>tan ... como</em>)', correct: ['Soy tan alto como tú.', 'Soy tan alto como tú', 'Yo soy tan alto como tú.', 'Yo soy tan alto como tú'] },
        { id: 'q2', prompt: 'Моя сестра такая же симпатичная, как Ева. (через <em>igual de ... que</em>)', correct: ['Mi hermana es igual de simpática que Eva.', 'Mi hermana es igual de simpática que Eva'] },
        { id: 'q3', prompt: 'Эти два дома одинаково большие. (через <em>igual de</em>, без второго члена)', correct: ['Estas dos casas son igual de grandes.', 'Estas dos casas son igual de grandes'] },
        { id: 'q4', prompt: 'Поезд не такой быстрый, как самолёт. (через <em>tan ... como</em>)', correct: ['El tren no es tan rápido como el avión.', 'El tren no es tan rápido como el avión'] },
        { id: 'q5', prompt: 'Я такой же работящий, как и вы (vosotros).', correct: ['Soy igual de trabajador que vosotros.', 'Soy tan trabajador como vosotros.', 'Yo soy igual de trabajador que vosotros.', 'Yo soy tan trabajador como vosotros.', 'Soy igual de trabajador que vosotros', 'Soy tan trabajador como vosotros'] },
      ],
    },

    {
      id: '16.12',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Нажмите <code>🔊</code> и запишите услышанное полностью, с пунктуацией и диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Marta es tan alta como Eva.', correct: ['Marta es tan alta como Eva.', 'Marta es tan alta como Eva'] },
        { id: 'q2', prompt: '', audio: 'Mi piso es igual de pequeño que el tuyo.', correct: ['Mi piso es igual de pequeño que el tuyo.', 'Mi piso es igual de pequeño que el tuyo'] },
        { id: 'q3', prompt: '', audio: 'El tren no es tan rápido como el avión.', correct: ['El tren no es tan rápido como el avión.', 'El tren no es tan rápido como el avión'] },
        { id: 'q4', prompt: '', audio: 'Sus hijas son igual de amables.', correct: ['Sus hijas son igual de amables.', 'Sus hijas son igual de amables'] },
        { id: 'q5', prompt: '', audio: 'Soy igual de trabajadora que vosotros.', correct: ['Soy igual de trabajadora que vosotros.', 'Soy igual de trabajadora que vosotros'] },
      ],
    },
  ],
};
