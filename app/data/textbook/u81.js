// ============================================================
// Unidad 81 — Presente de subjuntivo: verbos irregulares (2)
// conozca, diga, vaya… Глаголы, у которых корень субхунтива
// берётся из формы yo индикатива, плюс ir / saber / haber.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u81 = {
  id: 'u81',
  number: 81,
  title: { es: 'conozca, diga, vaya…', topic: 'Presente de subjuntivo: verbos irregulares (2)' },
  topicRu: 'Презенс субхунтива: «нерегулярные» глаголы (corner-yo, ir, saber, haber)',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'La gran mayoría de verbos irregulares forman el <strong>presente de subjuntivo</strong> a partir de la <strong>1.ª persona del singular del presente de indicativo</strong>: se quita la <em>−o</em> final y se añaden las terminaciones de subjuntivo (<em>−a, −as, −a, −amos, −áis, −an</em>).',
      ru: 'У большинства неправильных глаголов корень субхунтива берётся из <strong>формы <em>yo</em> презенса индикатива</strong>: убираем конечное <em>−o</em> и добавляем окончания субхунтива (<em>−a, −as, −a, −amos, −áis, −an</em>). Это покрывает почти все «капризные» глаголы: <em>tengo → tenga</em>, <em>digo → diga</em>, <em>hago → haga</em>, <em>pongo → ponga</em>, <em>salgo → salga</em>, <em>vengo → venga</em>, <em>oigo → oiga</em>, <em>traigo → traiga</em>, <em>caigo → caiga</em>, <em>conozco → conozca</em>, <em>huyo → huya</em>.',
      examples: [
        { es: 'Espero que tengas un buen día.', ru: 'Желаю тебе хорошего дня.' },
        { es: 'No me gusta que digas eso.', ru: 'Мне не нравится, когда ты так говоришь.' },
        { es: 'Es probable que (él) salga tarde.', ru: 'Вероятно, он выйдет поздно.' },
        { es: 'Quiero que la conozcas.', ru: 'Хочу, чтобы ты с ней познакомился.' },
      ],
    },

    {
      type: 'heading',
      text: 'Глаголы на −cer / −cir, −uir',
    },
    {
      type: 'table',
      caption: 'conocer (conozco) и huir (huyo)',
      columns: ['', 'conocer (→ conozca)', 'huir (→ huya)'],
      colClasses: ['col-pattern', 'col-result', 'col-result'],
      rows: [
        ['<strong>yo</strong>',          '<em>conozca</em>',     '<em>huya</em>'],
        ['<strong>tú</strong>',          '<em>conozcas</em>',    '<em>huyas</em>'],
        ['<strong>usted, él</strong>',    '<em>conozca</em>',     '<em>huya</em>'],
        ['<strong>nosotros</strong>',    '<em>conozcamos</em>',  '<em>huyamos</em>'],
        ['<strong>vosotros</strong>',    '<em>conozcáis</em>',   '<em>huyáis</em>'],
        ['<strong>ustedes, ellos</strong>', '<em>conozcan</em>', '<em>huyan</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'Como <em>conocer</em> se conjugan <em>conducir, obedecer, parecer, reconocer, traducir</em>. Como <em>huir</em>: <em>concluir, construir, contribuir, destruir, influir</em>. La <strong>−y−</strong> (respect. la <strong>−zc−</strong>) <strong>se mantiene en todas las personas</strong> del subjuntivo.',
      ru: 'Как <em>conocer</em>, спрягаются <em>conducir, obedecer, parecer, reconocer, traducir</em>: во всех формах субхунтива остаётся <strong>−zc−</strong>. Как <em>huir</em>: <em>concluir, construir, contribuir, destruir, influir</em> — во всех формах сохраняется <strong>−y−</strong>.',
    },

    {
      type: 'heading',
      text: 'Глаголы с «капризной» формой yo (decir, hacer, tener…)',
    },
    {
      type: 'table',
      caption: 'Корень субхунтива = форма yo минус −o',
      columns: ['Инфинитив', 'yo (indic.)', 'Субхунтив (yo / nosotros)'],
      colClasses: ['col-pattern', 'col-result', 'col-ex'],
      rows: [
        ['<em>decir</em>',  '<em>digo</em>',   '<em>diga / digamos</em>'],
        ['<em>hacer</em>',  '<em>hago</em>',   '<em>haga / hagamos</em>'],
        ['<em>oír</em>',    '<em>oigo</em>',   '<em>oiga / oigamos</em>'],
        ['<em>poner</em>',  '<em>pongo</em>',  '<em>ponga / pongamos</em>'],
        ['<em>salir</em>',  '<em>salgo</em>',  '<em>salga / salgamos</em>'],
        ['<em>tener</em>',  '<em>tengo</em>',  '<em>tenga / tengamos</em>'],
        ['<em>venir</em>',  '<em>vengo</em>',  '<em>venga / vengamos</em>'],
        ['<em>traer</em>',  '<em>traigo</em>', '<em>traiga / traigamos</em>'],
        ['<em>caer(se)</em>', '<em>caigo</em>', '<em>caiga / caigamos</em>'],
      ],
    },

    {
      type: 'heading',
      text: 'Особые: ir, saber, haber',
    },
    {
      type: 'table',
      caption: 'Совсем другие корни',
      columns: ['', 'ir (→ vaya)', 'saber (→ sepa)', 'haber (→ haya)'],
      colClasses: ['col-pattern', 'col-result', 'col-result', 'col-result'],
      rows: [
        ['<strong>yo</strong>',          '<em>vaya</em>',      '<em>sepa</em>',     '<em>haya</em>'],
        ['<strong>tú</strong>',          '<em>vayas</em>',     '<em>sepas</em>',    '<em>hayas</em>'],
        ['<strong>usted, él</strong>',    '<em>vaya</em>',      '<em>sepa</em>',     '<em>haya</em>'],
        ['<strong>nosotros</strong>',    '<em>vayamos</em>',   '<em>sepamos</em>',  '<em>hayamos</em>'],
        ['<strong>vosotros</strong>',    '<em>vayáis</em>',    '<em>sepáis</em>',   '<em>hayáis</em>'],
        ['<strong>ustedes, ellos</strong>', '<em>vayan</em>',  '<em>sepan</em>',    '<em>hayan</em>'],
      ],
    },
    {
      type: 'atencion',
      es: '<em>haber</em> — vспомогательный глагол; в живой речи как самостоятельный встречается лишь форма <strong>haya</strong> (3 л. ед. ч.) — «есть / имеется»: <em>Espero que haya entradas.</em> Все формы <em>haya / hayas / haya / hayamos / hayáis / hayan</em> используются в составе <strong>pretérito perfecto de subjuntivo</strong> (<em>haya hablado, hayas comido…</em>).',
      ru: '<em>haber</em> — вспомогательный глагол: формы <em>haya / hayas / haya …</em> вы будете часто встречать в составе перфекта субхунтива (<em>haya hablado, hayas comido</em>). Самостоятельно (= «иметься, быть в наличии») в живой речи всё равно используется только 3 л. ед. ч.: <em>Espero que haya entradas</em> — «Надеюсь, что билеты есть».',
    },

    {
      type: 'heading',
      text: 'Где использовать (анонс)',
    },
    {
      type: 'rule',
      es: 'Las construcciones son las habituales del subjuntivo: <strong>deseo</strong> (<em>quiero / espero / ojalá que…</em>), <strong>probabilidad</strong> (<em>puede que, es probable que, quizás</em>), <strong>sentimiento o valoración</strong> (<em>me gusta que, me parece bien que, es lógico que…</em>).',
      ru: 'Конструкции — обычные «триггеры» субхунтива: <strong>желание</strong> (<em>quiero / espero / ojalá que…</em>) — Unidad 84; <strong>вероятность</strong> (<em>puede que, es probable que, quizás</em>) — Unidad 85; <strong>чувство / оценка</strong> (<em>me gusta que, me parece bien que, es lógico que…</em>).',
      examples: [
        { es: '¡Ojalá no haya más guerras!', ru: 'Хоть бы больше не было войн!' },
        { es: 'Puede que no venga hoy. Tenía mucho trabajo.', ru: 'Может, сегодня не придёт. У него было много работы.' },
        { es: 'Es lógico que construyan más carreteras.', ru: 'Логично, что строят больше дорог.' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '81.1',
      title: 'Форма yo субхунтива',
      type: 'fill',
      instructions: 'Поставьте глагол в форме <em>yo</em> презенса субхунтива.',
      questions: [
        { id: 'q1',  prompt: '(<em>tener</em>) Espero que (yo) ___ tiempo mañana.',          correct: 'tenga' },
        { id: 'q2',  prompt: '(<em>decir</em>) No quieren que (yo) ___ la verdad.',           correct: 'diga' },
        { id: 'q3',  prompt: '(<em>hacer</em>) Es probable que (yo) ___ una tarta.',          correct: 'haga' },
        { id: 'q4',  prompt: '(<em>poner</em>) ¿Quieres que (yo) ___ la mesa?',                correct: 'ponga' },
        { id: 'q5',  prompt: '(<em>venir</em>) Quizás (yo) ___ el sábado.',                    correct: 'venga' },
        { id: 'q6',  prompt: '(<em>salir</em>) No me gusta que (yo) ___ tan tarde.',            correct: 'salga' },
        { id: 'q7',  prompt: '(<em>traer</em>) Quieren que (yo) ___ el postre.',                correct: 'traiga' },
        { id: 'q8',  prompt: '(<em>conocer</em>) Esperan que (yo) ___ a sus padres pronto.',     correct: 'conozca' },
        { id: 'q9',  prompt: '(<em>ir</em>) Es probable que (yo) ___ a Madrid en mayo.',          correct: 'vaya' },
        { id: 'q10', prompt: '(<em>saber</em>) Es importante que (yo) ___ la respuesta.',         correct: 'sepa' },
      ],
    },

    {
      id: '81.2',
      title: 'tú: ставим в субхунтиве',
      type: 'fill',
      instructions: 'Поставьте глагол в форме <em>tú</em>.',
      questions: [
        { id: 'q1', prompt: '(<em>venir</em>) Quiero que ___ a mi casa esta noche.',         correct: 'vengas' },
        { id: 'q2', prompt: '(<em>traer</em>) Espero que ___ algo de postre, Ana.',           correct: 'traigas' },
        { id: 'q3', prompt: '(<em>decir</em>) No me gusta que ___ esas cosas.',                correct: 'digas' },
        { id: 'q4', prompt: '(<em>tener</em>) Es lógico que ___ miedo después de eso.',         correct: 'tengas' },
        { id: 'q5', prompt: '(<em>hacer</em>) Quiero que ___ los deberes hoy.',                  correct: 'hagas' },
        { id: 'q6', prompt: '(<em>oír</em>) Habla más alto, no me gusta que no me ___.',          correct: 'oigas' },
        { id: 'q7', prompt: '(<em>salir</em>) Tu madre no quiere que ___ tan tarde.',              correct: 'salgas' },
        { id: 'q8', prompt: '(<em>ir</em>) Es probable que ___ con nosotros al cine.',              correct: 'vayas' },
        { id: 'q9', prompt: '(<em>saber</em>) Es importante que ___ la verdad.',                     correct: 'sepas' },
        { id: 'q10', prompt: '(<em>conocer</em>) Quiero que ___ a mi familia.',                       correct: 'conozcas' },
      ],
    },

    {
      id: '81.3',
      title: 'usted, él, ella',
      type: 'fill',
      instructions: 'Поставьте в форме 3 л. ед. ч.',
      questions: [
        { id: 'q1', prompt: '(<em>hacer</em>) ¡Ojalá ___ buen tiempo mañana!',                  correct: 'haga' },
        { id: 'q2', prompt: '(<em>haber</em>) Espero que ___ entradas para el concierto.',       correct: 'haya' },
        { id: 'q3', prompt: '(<em>venir</em>) Es probable que Marta no ___ hoy.',                 correct: 'venga' },
        { id: 'q4', prompt: '(<em>tener</em>) Es lógico que (él) ___ sueño después de comer.',     correct: 'tenga' },
        { id: 'q5', prompt: '(<em>decir</em>) No me gusta que mi jefe ___ esas cosas.',             correct: 'diga' },
        { id: 'q6', prompt: '(<em>ir</em>) Es probable que (ella) ___ al médico esta semana.',       correct: 'vaya' },
        { id: 'q7', prompt: '(<em>saber</em>) Espero que (él) ___ que le quiero.',                    correct: 'sepa' },
        { id: 'q8', prompt: '(<em>oír</em>) Habla más alto. Puede que el de atrás no te ___.',         correct: 'oiga' },
        { id: 'q9', prompt: '(<em>poner</em>) Quiero que (él) ___ la mesa hoy.',                       correct: 'ponga' },
      ],
    },

    {
      id: '81.4',
      title: 'nosotros и vosotros',
      type: 'fill',
      instructions: 'Поставьте в форме <em>nosotros</em> или <em>vosotros</em>, как указано.',
      questions: [
        { id: 'q1', prompt: '(<em>tener</em>, nosotros) Es probable que ___ tiempo el viernes.',         correct: 'tengamos' },
        { id: 'q2', prompt: '(<em>ir</em>, nosotros) Luis y Pili quieren que ___ de excursión.',          correct: 'vayamos' },
        { id: 'q3', prompt: '(<em>salir</em>, nosotros) Es lógico que ___ tarde.',                         correct: 'salgamos' },
        { id: 'q4', prompt: '(<em>hacer</em>, vosotros) Quiero que ___ la cena hoy.',                       correct: 'hagáis' },
        { id: 'q5', prompt: '(<em>traer</em>, vosotros) Espero que ___ buen vino.',                          correct: 'traigáis' },
        { id: 'q6', prompt: '(<em>saber</em>, nosotros) Es importante que ___ la verdad.',                    correct: 'sepamos' },
        { id: 'q7', prompt: '(<em>venir</em>, vosotros) Esperamos que ___ todos.',                              correct: 'vengáis' },
        { id: 'q8', prompt: '(<em>oír</em>, nosotros) Habla más alto, queremos que te ___ todos.',              correct: 'oigamos' },
        { id: 'q9', prompt: '(<em>conocer</em>, nosotros) Es probable que (nosotros) ___ a sus padres pronto.',  correct: 'conozcamos' },
      ],
    },

    {
      id: '81.5',
      title: '3 л. мн. ч.: ustedes / ellos / ellas',
      type: 'fill',
      instructions: 'Поставьте в форме 3 л. мн. ч.',
      questions: [
        { id: 'q1', prompt: '(<em>decir</em>) No quiero que (ustedes) le ___ nada.',              correct: 'digan' },
        { id: 'q2', prompt: '(<em>tener</em>) Es lógico que mis hijos ___ hambre. Han corrido mucho.', correct: 'tengan' },
        { id: 'q3', prompt: '(<em>hacer</em>) ¡Ojalá ___ buen tiempo este fin de semana!',             correct: 'haga' },
        { id: 'q4', prompt: '(<em>venir</em>) Espero que mis primos ___ a la fiesta.',                  correct: 'vengan' },
        { id: 'q5', prompt: '(<em>oír</em>) Habla más alto. Puede que los de atrás no te ___.',          correct: 'oigan' },
        { id: 'q6', prompt: '(<em>ir</em>) Es probable que ___ todos al concierto.',                       correct: 'vayan' },
        { id: 'q7', prompt: '(<em>saber</em>) Es lógico que (ellos) no ___ qué hacer.',                     correct: 'sepan' },
        { id: 'q8', prompt: '(<em>caerse</em>) Mira esos obreros, se van a caer. Es imposible que no ___.',   correct: 'se caigan' },
        { id: 'q9', prompt: '(<em>construir</em>) Es lógico que ___ más carreteras nuevas.',                  correct: 'construyan' },
        { id: 'q10', prompt: '(<em>conducir</em>) No me gusta que mis amigos ___ tan rápido.',                 correct: 'conduzcan' },
      ],
    },

    {
      id: '81.6',
      title: 'Какая форма?',
      type: 'choice',
      instructions: 'Выберите правильный вариант субхунтива.',
      questions: [
        { id: 'q1', prompt: 'Quiero que (tú) la ___.',                       options: ['conozcas', 'conoces', 'conozas', 'conozcas no'], correct: 'conozcas' },
        { id: 'q2', prompt: '¡Ojalá ___ buen tiempo mañana!',                  options: ['hace', 'haga', 'haz', 'hagua'], correct: 'haga' },
        { id: 'q3', prompt: 'Es probable que (yo) ___ tarde.',                  options: ['salgo', 'salga', 'sala', 'salgua'], correct: 'salga' },
        { id: 'q4', prompt: 'No me gusta que (tú) ___ esas cosas.',              options: ['dices', 'digas', 'das', 'dijas'], correct: 'digas' },
        { id: 'q5', prompt: 'Espero que (ustedes) ___ a tiempo.',                 options: ['vienen', 'vengan', 'vienan', 'vinguen'], correct: 'vengan' },
        { id: 'q6', prompt: 'Es importante que (vosotros) ___ la verdad.',         options: ['sabéis', 'sepáis', 'sabáis', 'sapáis'], correct: 'sepáis' },
        { id: 'q7', prompt: 'Es probable que (nosotros) ___ a Madrid el lunes.',    options: ['vamos', 'vayamos', 'iramos', 'vayamos no'], correct: 'vayamos' },
        { id: 'q8', prompt: 'Habla más alto, quiero que me ___ bien.',               options: ['oyes', 'oigas', 'oyas', 'oigues'], correct: 'oigas' },
        { id: 'q9', prompt: 'No quiero que (tú) le ___ nada a Pedro.',                options: ['traes', 'traigas', 'tres', 'traes no'], correct: 'traigas' },
      ],
    },

    {
      id: '81.7',
      title: 'Соедините через que',
      type: 'fill',
      instructions: 'Преобразуйте по образцу: <em>Hay pobreza en el mundo. Me parece terrible.</em> → <em>Me parece terrible que haya pobreza en el mundo.</em> Подставьте только глагольную форму субхунтива.',
      questions: [
        { id: 'q1', prompt: 'Antonia no dice nunca la verdad. Me parece mal. → Me parece mal que Antonia no ___ nunca la verdad.',                       correct: 'diga' },
        { id: 'q2', prompt: 'Mi gato huye cuando ve a un perro. Es lógico. → Es lógico que mi gato ___ cuando ve a un perro.',                            correct: 'huya' },
        { id: 'q3', prompt: 'Luciano y Adolfo no saben usar un ordenador. Me parece increíble. → Me parece increíble que Luciano y Adolfo no ___ usar un ordenador.', correct: 'sepan' },
        { id: 'q4', prompt: 'Pones siempre la mesa. Me parece bien. → Me parece bien que (tú) ___ siempre la mesa.',                                       correct: 'pongas' },
        { id: 'q5', prompt: 'Tenéis siempre hambre; trabajáis mucho. Es natural. → Es natural que (vosotros) ___ siempre hambre.',                          correct: 'tengáis' },
        { id: 'q6', prompt: 'Susana no hace nunca la cama. No me parece bien. → No me parece bien que Susana no ___ nunca la cama.',                        correct: 'haga' },
        { id: 'q7', prompt: 'Destruyen los bosques. Es una vergüenza. → Es una vergüenza que ___ los bosques.',                                              correct: 'destruyan' },
        { id: 'q8', prompt: 'Hay pobreza en el mundo. Me parece terrible. → Me parece terrible que ___ pobreza en el mundo.',                                  correct: 'haya' },
      ],
    },

    {
      id: '81.8',
      title: 'Сценки: ответьте через субхунтив',
      type: 'fill',
      instructions: 'Дополните диалог нужной формой.',
      questions: [
        { id: 'q1', prompt: '— Hay mucha gente en la exposición. — Es normal que (<em>haber</em>) ___ tanta gente. Es una pintora buenísima.',                          correct: 'haya' },
        { id: 'q2', prompt: '— Elsa sale con Tomás. — No me gusta que (<em>salir</em>) ___ con ese chico. Es muy celoso.',                                                correct: 'salga' },
        { id: 'q3', prompt: '— ¡Cuidado! Te van a oír. — Es igual. No me importa que me (<em>oír</em>) ___.',                                                              correct: 'oigan' },
        { id: 'q4', prompt: '— ¿Creéis que os puede reconocer? — Sí, tengo miedo de que nos (<em>reconocer</em>) ___.',                                                     correct: 'reconozca' },
        { id: 'q5', prompt: '— Gloria es educadísima. — Sí, me llama la atención que (<em>ser</em>) ___ tan educada.',                                                       correct: 'sea' },
        { id: 'q6', prompt: '— Esos obreros se van a caer. — Es imposible que (<em>caerse</em>) ___. Tienen cinturones de seguridad.',                                         correct: 'se caigan' },
      ],
    },

    {
      id: '81.9',
      title: 'Сопоставьте инфинитив и форму tú',
      type: 'match',
      instructions: 'Подберите для каждого инфинитива форму <em>tú</em> презенса субхунтива.',
      pool: ['tengas', 'digas', 'hagas', 'pongas', 'salgas', 'vengas', 'oigas', 'traigas', 'conozcas', 'huyas', 'vayas', 'sepas'],
      questions: [
        { id: 'q1',  prompt: '<em>tener</em>',     correct: 'tengas' },
        { id: 'q2',  prompt: '<em>decir</em>',     correct: 'digas' },
        { id: 'q3',  prompt: '<em>hacer</em>',     correct: 'hagas' },
        { id: 'q4',  prompt: '<em>poner</em>',     correct: 'pongas' },
        { id: 'q5',  prompt: '<em>salir</em>',     correct: 'salgas' },
        { id: 'q6',  prompt: '<em>venir</em>',     correct: 'vengas' },
        { id: 'q7',  prompt: '<em>oír</em>',        correct: 'oigas' },
        { id: 'q8',  prompt: '<em>traer</em>',      correct: 'traigas' },
        { id: 'q9',  prompt: '<em>conocer</em>',    correct: 'conozcas' },
        { id: 'q10', prompt: '<em>huir</em>',       correct: 'huyas' },
        { id: 'q11', prompt: '<em>ir</em>',         correct: 'vayas' },
        { id: 'q12', prompt: '<em>saber</em>',      correct: 'sepas' },
      ],
    },

    {
      id: '81.10',
      title: 'Какие формы корректны',
      type: 'multi',
      instructions: 'Отметьте все <strong>правильные</strong> формы презенса субхунтива.',
      questions: [
        {
          id: 'q1',
          prompt: 'Выберите правильные формы:',
          options: [
            'tenga', 'tena', 'tengamos', 'tenamos',
            'diga', 'dica', 'digamos', 'dicamos',
            'haga', 'hagua', 'hagamos',
            'sepa', 'sapa', 'sepamos',
            'vaya', 'vayamos', 'vamos (subj.)',
            'haya', 'hayamos',
            'conozca', 'conozcamos', 'conozamos',
          ],
          correct: ['tenga', 'tengamos', 'diga', 'digamos', 'haga', 'hagamos', 'sepa', 'sepamos', 'vaya', 'vayamos', 'haya', 'hayamos', 'conozca', 'conozcamos'],
          explanation: 'Корень субхунтива берётся из формы <em>yo</em>: <em>tengo→tenga</em>, <em>digo→diga</em>, <em>hago→haga</em>, <em>conozco→conozca</em>. Особые: <em>ir→vaya</em>, <em>saber→sepa</em>, <em>haber→haya</em>. <em>vamos</em> — это индикатив; в субхунтиве — <em>vayamos</em>.',
        },
      ],
    },

    {
      id: '81.11',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['tenga', 'tengas', 'tenamos', 'tengan'],         correct: 'tenamos',  explanation: '<em>tengamos</em>, с <em>−g−</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['diga', 'digas', 'digamos', 'dicáis'],            correct: 'dicáis',   explanation: '<em>digáis</em>, с <em>−g−</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['vaya', 'vayas', 'vayamos', 'vayen'],              correct: 'vayen',    explanation: 'В 3 л. мн. ч.: <em>vayan</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['sepa', 'sepas', 'sapamos', 'sepan'],               correct: 'sapamos',  explanation: '<em>sepamos</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['conozca', 'conozas', 'conozcamos', 'conozcan'],     correct: 'conozas',  explanation: '<em>conozcas</em>, с <em>−zc−</em>.' },
        { id: 'q6', prompt: 'Где ошибка?', options: ['huya', 'huyas', 'huymos', 'huyan'],                  correct: 'huymos',   explanation: '<em>huyamos</em>: <em>−y−</em> сохраняется.' },
        { id: 'q7', prompt: 'Где ошибка?', options: ['oiga', 'oigas', 'oigan', 'oyamos'],                   correct: 'oyamos',   explanation: '<em>oigamos</em>, с <em>−g−</em>.' },
      ],
    },

    {
      id: '81.12',
      title: 'Аудио-диктант',
      type: 'fill',
      instructions: 'Запишите услышанное полностью с диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Espero que tengas un buen día.',           correct: ['Espero que tengas un buen día.', 'Espero que tengas un buen día'] },
        { id: 'q2', prompt: '', audio: '¡Ojalá haga buen tiempo mañana!',           correct: ['¡Ojalá haga buen tiempo mañana!', 'Ojalá haga buen tiempo mañana.', 'Ojalá haga buen tiempo mañana'] },
        { id: 'q3', prompt: '', audio: 'No me gusta que digas eso.',                 correct: ['No me gusta que digas eso.', 'No me gusta que digas eso'] },
        { id: 'q4', prompt: '', audio: 'Es probable que (él) salga tarde.',          correct: ['Es probable que (él) salga tarde.', 'Es probable que él salga tarde.', 'Es probable que él salga tarde'] },
        { id: 'q5', prompt: '', audio: 'Quiero que la conozcas.',                     correct: ['Quiero que la conozcas.', 'Quiero que la conozcas'] },
        { id: 'q6', prompt: '', audio: 'Espero que haya entradas.',                    correct: ['Espero que haya entradas.', 'Espero que haya entradas'] },
        { id: 'q7', prompt: '', audio: 'Es probable que vayamos a Madrid.',             correct: ['Es probable que vayamos a Madrid.', 'Es probable que vayamos a Madrid'] },
        { id: 'q8', prompt: '', audio: 'Es importante que sepas la verdad.',             correct: ['Es importante que sepas la verdad.', 'Es importante que sepas la verdad'] },
      ],
    },

    {
      id: '81.13',
      title: 'Какому образцу подчиняется глагол?',
      type: 'match',
      instructions: 'Соотнесите глагол с моделью образования субхунтива.',
      pool: ['как conocer (−zc−)', 'как huir (−y−)', 'из «yo» индикатива', 'особый (ir / saber / haber)'],
      questions: [
        { id: 'q1', prompt: '<em>traducir</em>',   correct: 'как conocer (−zc−)' },
        { id: 'q2', prompt: '<em>obedecer</em>',   correct: 'как conocer (−zc−)' },
        { id: 'q3', prompt: '<em>construir</em>',  correct: 'как huir (−y−)' },
        { id: 'q4', prompt: '<em>destruir</em>',   correct: 'как huir (−y−)' },
        { id: 'q5', prompt: '<em>tener</em>',      correct: 'из «yo» индикатива' },
        { id: 'q6', prompt: '<em>poner</em>',      correct: 'из «yo» индикатива' },
        { id: 'q7', prompt: '<em>traer</em>',       correct: 'из «yo» индикатива' },
        { id: 'q8', prompt: '<em>oír</em>',         correct: 'из «yo» индикатива' },
        { id: 'q9', prompt: '<em>ir</em>',          correct: 'особый (ir / saber / haber)' },
        { id: 'q10', prompt: '<em>saber</em>',       correct: 'особый (ir / saber / haber)' },
        { id: 'q11', prompt: '<em>haber</em>',       correct: 'особый (ir / saber / haber)' },
      ],
    },
  ],
};
