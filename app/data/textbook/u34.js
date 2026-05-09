// ============================================================
// Unidad 34 — Pronombres personales de sujeto: yo, tú, él…
// Когда местоимение нужно, а когда опускается; tú vs usted;
// различия Испания vs Лат. Америка.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u34 = {
  id: 'u34',
  number: 34,
  title: { es: 'yo, tú, él…', topic: 'Pronombres personales de sujeto' },
  topicRu: 'Личные местоимения подлежащего',

  theory: [
    {
      type: 'rule',
      es: 'Los <strong>pronombres personales de sujeto</strong> son <em>yo, tú, él, ella, usted, nosotros/nosotras, vosotros/vosotras, ellos, ellas, ustedes</em>. Indican <em>quién</em> hace la acción.',
      ru: 'Личные местоимения-подлежащие в испанском — <em>yo, tú, él/ella/usted, nosotros/nosotras, vosotros/vosotras, ellos/ellas/ustedes</em>. У местоимений 1-го и 2-го лица мн. ч. есть форма ж. р. (<em>nosotras, vosotras</em>); у 3-го лица — отдельные формы для м. (<em>ellos</em>) и ж. (<em>ellas</em>).',
      examples: [
        { es: 'Yo trabajo en un hospital.', ru: 'Я работаю в больнице.' },
        { es: 'Nosotras somos cubanas.', ru: 'Мы (девушки) — кубинки.' },
        { es: 'Ustedes son los padres de Pedro.', ru: 'Вы (мн.) — родители Педро.' },
      ],
    },
    {
      type: 'heading',
      text: 'Формы',
    },
    {
      type: 'table',
      caption: 'Pronombres de sujeto',
      columns: ['Лицо', 'Singular', 'Plural'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['1.ª',                  '<em>yo</em>',                                         '<em>nosotros / nosotras</em>'],
        ['2.ª (близкие)',         '<em>tú</em> · <em>vos</em> (Аргентина и др.)',          '<em>vosotros / vosotras</em> (Испания) · <em>ustedes</em> (Лат. Америка)'],
        ['3.ª / уважительное',     '<em>él / ella · usted</em>',                          '<em>ellos / ellas · ustedes</em>'],
      ],
    },
    {
      type: 'atencion',
      es: '<strong>masculino + femenino = plural masculino</strong>: <em>Luisa, José y yo</em> → <em>nosotros</em>; <em>Luisa, José y tú</em> → <em>vosotros</em>; <em>Luisa y José</em> → <em>ellos</em>. La forma femenina (<em>nosotras, vosotras, ellas</em>) sólo si <strong>todas</strong> son mujeres.',
      ru: 'Если в группе есть хотя бы один мужчина, форма мужского рода: <em>Luisa, José y yo → nosotros</em>; <em>Luisa, José y tú → vosotros</em>; <em>Luisa y José → ellos</em>. Женская форма (<em>nosotras, vosotras, ellas</em>) — только если в группе все женщины.',
    },
    {
      type: 'heading',
      text: 'tú/vosotros vs usted/ustedes',
    },
    {
      type: 'table',
      caption: 'Регистр обращения',
      columns: ['', 'С близкими', 'С незнакомыми / старшими'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['Испания',          '<em>tú · vosotros / vosotras</em>',  '<em>usted · ustedes</em>'],
        ['Латинская Америка',  '<em>tú / usted · ustedes</em>',      '<em>usted · ustedes</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'En España: <em>tú</em> y <em>vosotros / vosotras</em> con familia, amigos, gente joven; <em>usted, ustedes</em> con desconocidos, gente mayor o superiores.',
      ru: 'В Испании: <em>tú</em> и <em>vosotros/-as</em> — с семьёй, друзьями, молодёжью; <em>usted, ustedes</em> — с незнакомыми, со старшими, в формальной обстановке. Это привычная «двухуровневая» система.',
      examples: [
        { es: '¿Cómo estás? (другу)', ru: 'Как дела? (на «ты»)' },
        { es: '¿Cómo está, señora? (старшей)', ru: 'Как дела, сеньора? (на «вы»)' },
        { es: '¿Cómo estáis? (друзьям)', ru: 'Как вы? (мн., близко)' },
        { es: '¿Cómo están ustedes? (формально)', ru: 'Как поживаете? (мн., вежливо)' },
      ],
    },
    {
      type: 'rule',
      es: 'En América Latina <strong>no se usa <em>vosotros</em></strong>: el plural es siempre <em>ustedes</em>, tanto formal como informal. En singular, <em>tú</em> alterna con <em>usted</em> en algunas zonas (Colombia, Costa Rica…).',
      ru: 'В Латинской Америке <em>vosotros / vosotras</em> <strong>не используется</strong>: множественное «вы» — всегда <em>ustedes</em>, и для близких, и для формальных. Поэтому глагольная форма для «вы» там — это форма 3-го лица мн. ч. (<em>ellos</em>): <em>ustedes hablan</em>, не <em>vosotros habláis</em>.',
    },
    {
      type: 'rule',
      es: 'En Argentina, Paraguay, Uruguay (y partes de Centroamérica) se usa <strong>vos</strong> en lugar de <em>tú</em>: <em>vos hablás, vos tenés…</em>',
      ru: 'В Аргентине, Уругвае, Парагвае (и части Центр. Америки) вместо <em>tú</em> — <em>vos</em> (так называемый <em>voseo</em>) с особым набором глагольных форм: <em>vos hablás, vos tenés, vos sos</em>. На занятиях по «учебному» испанскому достаточно знать о его существовании.',
      examples: [
        { es: '¿Vos sos de Buenos Aires? (Аргентина)', ru: 'Ты из Буэнос-Айреса?' },
        { es: '¿Vos qué pensás? (Уругвай)', ru: 'А ты что думаешь?' },
      ],
    },
    {
      type: 'heading',
      text: 'Когда местоимение нужно, а когда нет',
    },
    {
      type: 'rule',
      es: 'Normalmente <strong>no es necesario</strong> usar <em>yo, tú, él, ellos…</em> con los verbos: la terminación verbal ya indica la persona. <em><span style="text-decoration: line-through">Yo</span> vivo en Bogotá. ¿Cómo <span style="text-decoration: line-through">tú</span> te llamas?</em>',
      ru: 'В испанском окончание глагола уже показывает лицо, поэтому местоимение по умолчанию <strong>опускается</strong>: <em>Vivo en Bogotá</em> «я живу в Боготе»; <em>¿Cómo te llamas?</em> «как тебя зовут?». Ставить <em>yo</em> или <em>tú</em> «на всякий случай» не нужно — это звучит навязчиво.',
      examples: [
        { es: 'Soy ruso. (= Yo soy ruso.)', ru: 'Я русский.' },
        { es: '¿Hablas español?', ru: 'Ты говоришь по-испански?' },
        { es: 'Vivimos en Madrid.', ru: 'Мы живём в Мадриде.' },
      ],
    },
    {
      type: 'rule',
      es: '<strong>usted, ustedes</strong> se usan con más frecuencia que los otros pronombres, para marcar la cortesía y evitar ambigüedad con la 3.ª persona.',
      ru: '<em>usted / ustedes</em> сохраняют чаще остальных — это маркер вежливости. К тому же без них форма глагола совпадает с 3-м лицом (<em>habla</em> = «он говорит» / «вы говорите»), и местоимение помогает уточнить.',
      examples: [
        { es: 'Arlindo, ¿dónde vive usted?', ru: 'Арлиндо, где вы живёте?' },
        { es: 'Usted no es peruano, ¿verdad? — No, soy boliviano.', ru: 'Вы ведь не перуанец? — Нет, боливиец.' },
      ],
    },
    {
      type: 'rule',
      es: 'Se usa <em>yo, tú, él…</em> cuando hace falta:',
      ru: 'А вот когда местоимения <strong>обязательно появляются</strong>:',
      examples: [
        { es: '<strong>Контраст:</strong> Yo compro fruta y tú te la comes.', ru: 'Я покупаю фрукты, а ты их съедаешь.' },
        { es: '<strong>Усиление / эмфаза:</strong> Yo quiero trabajar, pero mis padres quieren que estudie.', ru: 'Я хочу работать, а родители хотят, чтобы я учился.' },
        { es: '<strong>Уточнение лица:</strong> Mira, allí van Silvia y Jorge. Él es de Arequipa y ella es de Lima.', ru: 'Смотри, вон идут Сильвия и Хорхе. Он — из Арекипы, она — из Лимы.' },
        { es: '<strong>В сочиненной группе:</strong> Alicia y tú parecéis hermanas. Mi padre y yo somos buenos amigos.', ru: 'Когда местоимение в составе перечисления: «Алиcия и ты», «мой папа и я».' },
      ],
    },
  ],

  exercises: [
    {
      id: '34.1',
      title: 'Какое местоимение?',
      type: 'fill',
      instructions: 'Запишите соответствующий subject pronoun.',
      questions: [
        { id: 'q1',  prompt: 'три девушки →',                                       correct: 'ellas' },
        { id: 'q2',  prompt: 'я (девушка) и моя подруга →',                          correct: 'nosotras' },
        { id: 'q3',  prompt: 'ты, твой брат и я →',                                  correct: 'nosotros' },
        { id: 'q4',  prompt: 'твои родители (папа и мама) →',                         correct: 'ellos' },
        { id: 'q5',  prompt: 'ты и твоя сестра (Испания) →',                            correct: 'vosotros', explanation: 'В группе есть мужчина — ж. р. не ставится. Уточнение про Испанию — для ясности контекста.' },
        { id: 'q6',  prompt: 'ты и твоя сестра (две девушки, Испания) →',                  correct: 'vosotras' },
        { id: 'q7',  prompt: 'два моих преподавателя →',                                    correct: 'ellos' },
        { id: 'q8',  prompt: 'вы (мн., вежливо, Испания или ЛА) →',                          correct: 'ustedes' },
        { id: 'q9',  prompt: 'один человек, к которому обращаются вежливо →',                 correct: 'usted' },
        { id: 'q10', prompt: 'я и ты →',                                                       correct: 'nosotros', explanation: 'Если есть хотя бы один мужчина — м. р.; форма зависит от пола говорящих.' },
      ],
    },

    {
      id: '34.2',
      title: 'tú, vosotros или ustedes?',
      type: 'choice',
      instructions: 'Какое местоимение естественнее в данной ситуации?',
      questions: [
        { id: 'q1', prompt: 'В Мехико обращаюсь к двум друзьям:',                  options: ['vosotros', 'ustedes'], correct: 'ustedes', explanation: 'В Лат. Америке мн. — всегда <em>ustedes</em>.' },
        { id: 'q2', prompt: 'В Мадриде к двум друзьям:',                           options: ['vosotros', 'ustedes'], correct: 'vosotros' },
        { id: 'q3', prompt: 'В Мадриде к незнакомому пожилому человеку:',          options: ['tú', 'usted'], correct: 'usted' },
        { id: 'q4', prompt: 'В Мадриде к младшей сестре:',                          options: ['tú', 'usted'], correct: 'tú' },
        { id: 'q5', prompt: 'В Мадриде к двум сеньорам в банке:',                    options: ['vosotros', 'ustedes'], correct: 'ustedes' },
        { id: 'q6', prompt: 'В Боготе к новому коллеге, ровеснику:',                   options: ['vosotros', 'usted', 'tú'], correct: ['tú', 'usted'], explanation: 'В Колумбии норма колеблется — оба варианта принимаются.' },
      ],
    },

    {
      id: '34.3',
      title: 'Ставить местоимение или нет',
      type: 'choice',
      instructions: 'Что естественнее в нейтральной речи?',
      questions: [
        { id: 'q1', prompt: 'Кто-то спрашивает «как тебя зовут?»',                       options: ['¿Cómo te llamas?', '¿Cómo tú te llamas?'], correct: '¿Cómo te llamas?' },
        { id: 'q2', prompt: 'Простое «я живу в Боготе»',                                 options: ['Vivo en Bogotá.', 'Yo vivo en Bogotá.'], correct: 'Vivo en Bogotá.' },
        { id: 'q3', prompt: 'Контраст «я ем мясо, а ты — рыбу»',                          options: ['Como carne y comes pescado.', 'Yo como carne y tú comes pescado.'], correct: 'Yo como carne y tú comes pescado.' },
        { id: 'q4', prompt: 'Уточнение «он из Лимы, а она — из Кито»',                     options: ['Es de Lima y es de Quito.', 'Él es de Lima y ella es de Quito.'], correct: 'Él es de Lima y ella es de Quito.' },
        { id: 'q5', prompt: 'Вежливый вопрос «где вы работаете, сеньор?»',                  options: ['¿Dónde trabaja?', '¿Dónde trabaja usted?'], correct: '¿Dónde trabaja usted?', explanation: 'С <em>usted</em> местоимение обычно сохраняют — для ясности и вежливости.' },
      ],
    },

    {
      id: '34.4',
      title: 'Перепишите без лишнего местоимения',
      type: 'fill',
      instructions: 'Если местоимение лишнее — уберите его. Если нужно (контраст / эмфаза / уточнение) — оставьте.',
      questions: [
        { id: 'q1', prompt: '<em>Yo trabajo en un banco.</em> →',                     correct: ['Trabajo en un banco.', 'Trabajo en un banco'] },
        { id: 'q2', prompt: '<em>¿Tú dónde vives?</em> →',                              correct: ['¿Dónde vives?'] },
        { id: 'q3', prompt: '<em>Nosotros estudiamos español.</em> →',                   correct: ['Estudiamos español.', 'Estudiamos español'] },
        { id: 'q4', prompt: '<em>Yo soy alemán y tú eres ruso.</em> →',                   correct: ['Yo soy alemán y tú eres ruso.', 'Yo soy alemán y tú eres ruso'] , explanation: 'Контраст — местоимения нужны.' },
        { id: 'q5', prompt: '<em>¿Dónde vive usted?</em> →',                                correct: ['¿Dónde vive usted?'] , explanation: 'С <em>usted</em> сохраняем.' },
      ],
    },

    {
      id: '34.5',
      title: 'Группа людей',
      type: 'fill',
      instructions: 'Дано: <em>Pep — español de Barcelona, Concha — española de Murcia, Adriana — argentina de Córdoba, Gabriel — mexicano de Monterrey, Rosita — mexicana de Mérida</em>. Допишите местоимение там, где это нужно для уточнения. Если нужно <em>—</em>, поставьте прочерк.',
      questions: [
        { id: 'q1', prompt: 'Pep: «Concha y ___ somos españoles.»',                          correct: 'yo' },
        { id: 'q2', prompt: 'Concha: «Gabriel y Rosita son mexicanos. ___ es de Mérida.»',     correct: 'Ella' },
        { id: 'q3', prompt: 'Concha: «Gabriel y Rosita son mexicanos. ___ es de Monterrey.»', correct: 'Él' },
        { id: 'q4', prompt: 'Pep: «¿De dónde es Adriana?» — «___ es argentina.»',                correct: 'Ella' },
        { id: 'q5', prompt: 'Adriana: «¿De dónde son Pep y Concha?» — «___ son españoles.»',     correct: 'Ellos' },
        { id: 'q6', prompt: 'Rosita: «Concha y ___ somos estudiantes.» (Росита девушка)',         correct: 'yo', explanation: 'Сама Росита — девушка; глагол <em>somos</em> уже показывает 1 л. мн., но в перечислении местоимение нужно.' },
      ],
    },

    {
      id: '34.6',
      title: 'Местоимение в перечислении',
      type: 'fill',
      instructions: 'В перечислении («ты и я», «он и я») местоимение появляется. Допишите подходящее.',
      questions: [
        { id: 'q1', prompt: 'Lucía y ___ somos amigas.',                                       correct: 'yo' },
        { id: 'q2', prompt: '___ y tú parecéis hermanas. (про Алисию)',                         correct: 'Alicia' },
        { id: 'q3', prompt: 'Ana y ___ vivimos en el mismo edificio.',                          correct: 'yo' },
        { id: 'q4', prompt: 'Mi padre y ___ somos buenos amigos.',                                correct: 'yo' },
        { id: 'q5', prompt: 'Tu hermano y ___ jugamos al fútbol los domingos.',                    correct: 'yo' },
      ],
    },

    {
      id: '34.7',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: [
          'Vivimos en Madrid.',
          'Nosotros vivimos en Madrid.',
          'Yo vivimos en Madrid.',
          'Yo vivo en Madrid.',
        ], correct: 'Yo vivimos en Madrid.', explanation: '<em>yo</em> с глаголом 1 л. мн. ч. невозможен.' },
        { id: 'q2', prompt: 'Где ошибка?', options: [
          'Luisa, José y yo somos nosotros.',
          'Luisa, José y yo → nosotros.',
          'Luisa, José y yo → nosotras.',
          'Luisa y María → nosotras.',
        ], correct: 'Luisa, José y yo → nosotras.', explanation: 'В группе есть мужчина — <em>nosotros</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: [
          'En Madrid: ¿Cómo estáis vosotros?',
          'En México: ¿Cómo están vosotros?',
          'En México: ¿Cómo están ustedes?',
          'En Madrid: ¿Cómo está usted?',
        ], correct: 'En México: ¿Cómo están vosotros?', explanation: 'В Лат. Америке <em>vosotros</em> не используется.' },
        { id: 'q4', prompt: 'Где ошибка?', options: [
          'Tú eres alta.',
          'Vos sos alto. (Аргентина)',
          'Tu eres alta.',
          'Usted es alta.',
        ], correct: 'Tu eres alta.', explanation: '<em>tú</em> местоимение — с тильдой; <em>tu</em> без тильды — притяжательное.' },
      ],
    },

    {
      id: '34.8',
      title: 'tú vs tu',
      type: 'choice',
      instructions: 'Помните: <em>tú</em> с тильдой — это «ты» (местоимение); <em>tu</em> без тильды — притяжательное «твой».',
      questions: [
        { id: 'q1', prompt: '___ eres mi mejor amigo.',         options: ['Tú', 'Tu'], correct: 'Tú' },
        { id: 'q2', prompt: '___ casa es muy bonita.',           options: ['Tú', 'Tu'], correct: 'Tu' },
        { id: 'q3', prompt: '¿Cómo te llamas ___?',                options: ['tú', 'tu'], correct: 'tú' },
        { id: 'q4', prompt: 'Estos son los libros de ___ hermano.', options: ['tú', 'tu'], correct: 'tu' },
        { id: 'q5', prompt: '___ y yo somos amigos.',                options: ['Tú', 'Tu'], correct: 'Tú' },
      ],
    },

    {
      id: '34.9',
      title: 'Сопоставьте',
      type: 'match',
      instructions: 'Подберите местоимение для каждой группы.',
      pool: ['yo', 'tú', 'él', 'ella', 'usted', 'nosotros', 'nosotras', 'vosotras', 'ellos', 'ustedes'],
      questions: [
        { id: 'q1', prompt: 'я (один человек)',                                       correct: 'yo' },
        { id: 'q2', prompt: 'ты (близко, Испания)',                                    correct: 'tú' },
        { id: 'q3', prompt: 'один мужчина (3-е лицо)',                                  correct: 'él' },
        { id: 'q4', prompt: 'одна женщина (3-е лицо)',                                   correct: 'ella' },
        { id: 'q5', prompt: 'один человек, формально',                                    correct: 'usted' },
        { id: 'q6', prompt: 'смешанная группа: Хосе, Луиса и я',                            correct: 'nosotros' },
        { id: 'q7', prompt: 'три девушки + я (девушка)',                                    correct: 'nosotras' },
        { id: 'q8', prompt: 'четыре подруги (Испания, обращение)',                            correct: 'vosotras' },
        { id: 'q9', prompt: 'двое мужчин (3 л.)',                                              correct: 'ellos' },
        { id: 'q10', prompt: 'двое в формальном обращении (мн., Лат. Ам.)',                     correct: 'ustedes' },
      ],
    },

    {
      id: '34.10',
      title: 'Какие фразы корректны',
      type: 'multi',
      instructions: 'Отметьте все <strong>правильные</strong> и при этом <strong>стилистически естественные</strong> варианты.',
      questions: [
        {
          id: 'q1',
          prompt: 'Выберите все корректные варианты:',
          options: [
            'Vivo en Madrid.',
            'Yo vivo en Madrid.',
            '¿Cómo te llamas?',
            '¿Cómo tú te llamas?',
            'En México: ¿Cómo están ustedes?',
            'En México: ¿Cómo estáis vosotros?',
            'Yo trabajo y tú descansas.',
            'Mi madre y yo vivimos juntos.',
            'Nosotros vivimos juntos. (без контраста)',
            '¿Dónde vive usted?',
          ],
          correct: ['Vivo en Madrid.', '¿Cómo te llamas?', 'En México: ¿Cómo están ustedes?', 'Yo trabajo y tú descansas.', 'Mi madre y yo vivimos juntos.', '¿Dónde vive usted?'],
          explanation: 'Без контраста местоимение опускается; в Лат. Ам. — <em>ustedes</em>; <em>usted</em> сохраняем.',
        },
      ],
    },

    {
      id: '34.11',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Нажмите 🔊 и запишите фразу полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Yo soy de Madrid y tú eres de Barcelona.',     correct: ['Yo soy de Madrid y tú eres de Barcelona.', 'Yo soy de Madrid y tú eres de Barcelona'] },
        { id: 'q2', prompt: '', audio: '¿Cómo se llama usted?',                         correct: ['¿Cómo se llama usted?'] },
        { id: 'q3', prompt: '', audio: '¿Cómo estáis vosotros?',                          correct: ['¿Cómo estáis vosotros?'] },
        { id: 'q4', prompt: '', audio: 'Nosotras somos cubanas.',                          correct: ['Nosotras somos cubanas.', 'Nosotras somos cubanas'] },
        { id: 'q5', prompt: '', audio: 'Mi padre y yo somos amigos.',                       correct: ['Mi padre y yo somos amigos.', 'Mi padre y yo somos amigos'] },
        { id: 'q6', prompt: '', audio: 'Él es de Arequipa y ella es de Lima.',              correct: ['Él es de Arequipa y ella es de Lima.', 'Él es de Arequipa y ella es de Lima'] },
      ],
    },

    {
      id: '34.12',
      title: 'Допишите местоимение, только если оно нужно',
      type: 'fill',
      instructions: 'Если местоимение лишнее, поставьте <code>—</code>.',
      questions: [
        { id: 'q1', prompt: '¿De dónde sois Adolfo y ___? — Somos de Uruguay.',                  correct: 'tú' },
        { id: 'q2', prompt: '¿Dónde vives? — ___ vivo en Murcia. ¿Y ___? — ___ vivo en Granada.', correct: ['—, tú, —', 'tú', 'yo'], explanation: 'Сначала простое «я живу» — без местоимения; потом контраст «а ты?» — с местоимением; ответ снова без.' },
        { id: 'q3', prompt: '___ estudiamos Medicina.',                                            correct: '—' },
        { id: 'q4', prompt: '___ quiero un café, y ___ ¿qué queréis?',                              correct: ['Yo, vosotros'] },
        { id: 'q5', prompt: 'Mira, Lucía y Ana. ___ son amigas de Blanca.',                          correct: 'Ellas' },
        { id: 'q6', prompt: '___ quiero ser abogada, pero mis padres quieren que estudie Medicina.',  correct: 'Yo', explanation: 'Контраст «я хочу — родители хотят». Местоимение нужно.' },
      ],
    },
  ],
};
