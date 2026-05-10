// ============================================================
// Unidad 121 — Oraciones consecutivas
// «por eso, así que, tanto… que»: причина → следствие.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u121 = {
  id: 'u121',
  number: 121,
  title: { es: 'por eso, así que, tanto… que', topic: 'Oraciones consecutivas' },
  topicRu: 'Следственные предложения: por eso, así que, tanto/tan… que',

  theory: [
    {
      type: 'rule',
      es: 'Las <strong>oraciones consecutivas</strong> indican la <em>consecuencia</em> o el <em>resultado</em> de otra acción. Conectan dos ideas en relación <strong>causa → efecto</strong>.',
      ru: 'Следственные предложения связывают причину со следствием: «он много бегает <strong>— поэтому</strong> в форме», «было столько народу, <strong>что</strong> мы не вошли». В обоих случаях после связки идёт <em>indicativo</em>.',
      examples: [
        { es: 'Luis hace mucho ejercicio, <strong>por eso</strong> está en forma.', ru: 'Луис много занимается спортом, поэтому он в форме.' },
        { es: 'Había <strong>tanta</strong> gente <strong>que</strong> no pudimos entrar.', ru: 'Было столько людей, что мы не смогли войти.' },
        { es: 'No vi a nadie conocido, <strong>así que</strong> me volví a casa.', ru: 'Я не увидел никого знакомого, поэтому вернулся домой.' },
      ],
    },

    {
      type: 'heading',
      text: 'Связки без количества (всегда + indicativo)',
    },
    {
      type: 'table',
      caption: '«Поэтому, так что» — простые консекутивные связки',
      columns: ['Связка', 'Перевод', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<strong>por eso</strong>', 'поэтому',
          '<em>Estaba muy ocupado, <strong>por eso</strong> no te llamé.</em>'],
        ['<strong>así que</strong>', 'так что',
          '<em>No había nadie en el club, <strong>así que</strong> me volví a casa.</em>'],
        ['<strong>por (lo) tanto</strong>', 'следовательно, поэтому',
          '<em>Empecé en junio, <strong>por (lo) tanto</strong> no he tenido vacaciones.</em>'],
        ['<strong>de modo que</strong>', 'так что',
          '<em>No había plazas, <strong>de modo que</strong> tuvimos que ir en tren.</em>'],
        ['<strong>de manera que</strong>', 'так что, таким образом',
          '<em>Hay mucha gente, <strong>de manera que</strong> será mejor que te des prisa.</em>'],
      ],
    },

    {
      type: 'heading',
      text: 'tanto / tan / tan poco + que',
    },
    {
      type: 'rule',
      es: 'Para expresar la <em>intensidad</em> o la <em>cantidad</em> que provoca el resultado, se usan <strong>tanto</strong> (con verbo o nombre), <strong>tan</strong> (con adjetivo o adverbio) y <strong>tan poco / tanto</strong> en pareja (escasez ↔ abundancia). Todos van seguidos de <strong>que + indicativo</strong>.',
      ru: 'Когда хотим показать, что именно вызвало следствие — берём <em>tanto/tan/tan poco</em>: «столько», «такой», «так мало». Затем — <em>que</em> и обычное изъявительное наклонение.',
      examples: [
        { es: 'Corre <strong>tanto que</strong> gana todas las carreras.', ru: 'Он так бегает, что выигрывает все забеги. <small>(tanto + глагол)</small>' },
        { es: 'Tiene <strong>tantos amigos que</strong> nunca está en casa.', ru: 'У него столько друзей, что он никогда дома. <small>(tantos + сущ. m. pl.)</small>' },
        { es: 'Es <strong>tan culta que</strong> entiende de todo.', ru: 'Она настолько образованна, что разбирается во всём. <small>(tan + прилагательное)</small>' },
        { es: 'Me siento <strong>tan mal que</strong> me voy a acostar.', ru: 'Мне так плохо, что я пойду спать. <small>(tan + наречие)</small>' },
        { es: 'Comí <strong>tan poco que</strong> tengo hambre.', ru: 'Я съел так мало, что снова голоден. <small>(tan poco + глагол)</small>' },
        { es: 'Había <strong>tan poca</strong> agua <strong>que</strong> no pudimos bañarnos.', ru: 'Было так мало воды, что мы не смогли искупаться. <small>(tan poca + сущ. f.)</small>' },
      ],
    },

    {
      type: 'table',
      caption: 'Что после чего',
      columns: ['Слово', 'Что идёт после', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<strong>tanto</strong> (неизм.)', 'глагол',
          '<em>Trabaja <strong>tanto</strong> que está agotado.</em>'],
        ['<strong>tanto, -a, -os, -as</strong>', 'существительное (согл. по роду и числу)',
          '<em>Hay <strong>tanta</strong> gente / <strong>tantos</strong> coches.</em>'],
        ['<strong>tan poco</strong> (неизм.)', 'глагол',
          '<em>Come <strong>tan poco</strong> que va a enfermar.</em>'],
        ['<strong>tan poco, -a, -os, -as</strong>', 'существительное (согл. по роду и числу)',
          '<em>Había <strong>tan pocos</strong> espectadores que suspendieron la función.</em>'],
        ['<strong>tan</strong>', 'прилагательное или наречие',
          '<em>Es <strong>tan</strong> alto / Habla <strong>tan</strong> rápido.</em>'],
      ],
    },

    {
      type: 'atencion',
      es: '<strong>tanto/tan poco</strong> con sustantivos siempre concuerdan en género y número con el sustantivo, igual que un adjetivo: <em>tanto trabajo, tanta gente, tantos años, tantas veces</em>. Con verbos y entre <strong>tan + adjetivo/adverbio</strong>, las formas son <em>invariables</em>.',
      ru: 'Согласование: с существительным — <em>tanto/tanta/tantos/tantas</em>, <em>tan poco/-a/-os/-as</em>. С глаголом и в связке <em>tan + прил./нар.</em> — слово не меняется (<em>tanto, tan poco, tan</em>).',
    },

    {
      type: 'atencion',
      es: 'No confundir <strong>tan poco</strong> «так мало» con <strong>tampoco</strong> «тоже не»: <em>Comí <strong>tan poco</strong> que tengo hambre</em> ≠ <em>Yo <strong>tampoco</strong> lo sé</em>.',
      ru: 'Раздельно <em>tan poco</em> — «так мало» (количественное наречие в составе следственной конструкции). Слитно <em>tampoco</em> — «тоже не» (отрицание). Это разные слова.',
    },
  ],

  exercises: [
    {
      id: '121.1',
      title: 'Соедините две фразы связкой в скобках',
      type: 'fill',
      instructions: 'Перепишите две фразы как одну. Запишите весь ответ. Внутри пары — запятая перед связкой.',
      questions: [
        { id: 'q1', prompt: '<em>Nos acostamos. Era muy tarde.</em> (de manera que) →',
          correct: ['Era muy tarde, de manera que nos acostamos.', 'Era muy tarde de manera que nos acostamos.'] },
        { id: 'q2', prompt: '<em>Me levanté tarde. No sonó el despertador.</em> (por eso) →',
          correct: ['No sonó el despertador, por eso me levanté tarde.', 'No sonó el despertador por eso me levanté tarde.'] },
        { id: 'q3', prompt: '<em>Estábamos aburridos. Nos fuimos a dar una vuelta.</em> (así que) →',
          correct: ['Estábamos aburridos, así que nos fuimos a dar una vuelta.', 'Estábamos aburridos así que nos fuimos a dar una vuelta.'] },
        { id: 'q4', prompt: '<em>No te puedo decir nada. Aún no me ha llamado Teresa.</em> (por tanto) →',
          correct: ['Aún no me ha llamado Teresa, por tanto no te puedo decir nada.', 'Aún no me ha llamado Teresa por tanto no te puedo decir nada.'] },
        { id: 'q5', prompt: '<em>No me funcionaba el móvil. No pude llamarte.</em> (por eso) →',
          correct: ['No me funcionaba el móvil, por eso no pude llamarte.', 'No me funcionaba el móvil por eso no pude llamarte.'] },
        { id: 'q6', prompt: '<em>Será mejor cenar fuera. No hay mucha comida en casa.</em> (así que) →',
          correct: ['No hay mucha comida en casa, así que será mejor cenar fuera.', 'No hay mucha comida en casa así que será mejor cenar fuera.'] },
        { id: 'q7', prompt: '<em>No podremos quedar con Pedro. Esta noche hay partido.</em> (así que) →',
          correct: ['Esta noche hay partido, así que no podremos quedar con Pedro.', 'Esta noche hay partido así que no podremos quedar con Pedro.'] },
      ],
    },

    {
      id: '121.2',
      title: 'tan или tanto?',
      type: 'choice',
      instructions: 'Выберите правильное слово. Помните: <em>tan</em> + прил./нар.; <em>tanto</em> + глагол или согл. форма перед сущ.',
      questions: [
        { id: 'q1', prompt: 'Hizo un día ___ bueno que comimos en el jardín.',                options: ['tan', 'tanto'], correct: 'tan' },
        { id: 'q2', prompt: 'Estaba ___ cansado que me acosté temprano.',                       options: ['tan', 'tanto'], correct: 'tan' },
        { id: 'q3', prompt: 'Estudia ___ poco que no puede aprobar.',                           options: ['tan', 'tanto'], correct: 'tan' },
        { id: 'q4', prompt: 'Hablas español ___ bien que pareces española.',                     options: ['tan', 'tanto'], correct: 'tan' },
        { id: 'q5', prompt: 'Tengo ___ sed que me bebería toda la botella de agua.',              options: ['tanto', 'tanta'], correct: 'tanta' },
        { id: 'q6', prompt: 'La sopa estaba ___ salada que no se podía tomar.',                    options: ['tan', 'tanto'], correct: 'tan' },
        { id: 'q7', prompt: 'Teníamos ___ tiempo que no pudimos preparar las maletas.',              options: ['tan poco', 'tampoco'], correct: 'tan poco' },
        { id: 'q8', prompt: 'Ruperto estudia ___ que va a enfermar.',                                options: ['tan', 'tanto'], correct: 'tanto' },
        { id: 'q9', prompt: 'Había ___ gente que no pudimos ver nada.',                                options: ['tanto', 'tanta'], correct: 'tanta' },
        { id: 'q10', prompt: 'Somos ___ en clase que practicamos muchísimo.',                            options: ['tantos', 'tan pocos'], correct: 'tantos' },
      ],
    },

    {
      id: '121.3',
      title: 'Поставьте нужную форму из таблицы',
      type: 'fill',
      instructions: 'Выберите слово (tan, tan poca, tan pocos, tanta, tanto, tantos) и впишите его.',
      questions: [
        { id: 'q1', prompt: 'Había ___ tráfico que tuvimos que coger el metro.',                 correct: 'tanto' },
        { id: 'q2', prompt: 'Lucas habla ___ que aburre a todo el mundo.',                          correct: 'tanto' },
        { id: 'q3', prompt: 'Han llegado ___ turistas que no hay camas en los hoteles.',                correct: 'tantos' },
        { id: 'q4', prompt: 'Había ___ niebla que tuvimos que parar en la autopista.',                    correct: 'tanta' },
        { id: 'q5', prompt: 'Estábamos ___ cansados que nos acostamos sin cenar.',                          correct: 'tan' },
        { id: 'q6', prompt: 'Tenían ___ clientes en mi empresa que tuvieron que cerrar.',                     correct: 'tan pocos' },
        { id: 'q7', prompt: 'Hay ___ luz en esta habitación que no deberíais leer.',                            correct: 'tan poca' },
      ],
    },

    {
      id: '121.4',
      title: 'Объедините идеи через tan / tanto… que',
      type: 'fill',
      instructions: 'Перепишите две фразы как одну, по образцу: <em>Hay mucho ruido. No se oye nada → Hay tanto ruido que no se oye nada.</em>',
      questions: [
        { id: 'q1', prompt: '<em>La obra es muy buena. No quedan entradas.</em> →',
          correct: ['La obra es tan buena que no quedan entradas.'] },
        { id: 'q2', prompt: '<em>No salimos. Hacía demasiado frío.</em> →',
          correct: ['Hacía tanto frío que no salimos.', 'Hacía tanto frío, que no salimos.'] },
        { id: 'q3', prompt: '<em>Había pocas sillas. No me pude sentar.</em> →',
          correct: ['Había tan pocas sillas que no me pude sentar.'] },
        { id: 'q4', prompt: '<em>Le gustan mucho los gatos. Tiene seis.</em> →',
          correct: ['Le gustan tanto los gatos que tiene seis.'] },
        { id: 'q5', prompt: '<em>Parece enfadado. Habla poco.</em> →',
          correct: ['Habla tan poco que parece enfadado.'] },
        { id: 'q6', prompt: '<em>Pedro estaba muy triste. No habló en toda la cena.</em> →',
          correct: ['Pedro estaba tan triste que no habló en toda la cena.'] },
      ],
    },

    {
      id: '121.5',
      title: 'Выберите связку из таблицы',
      type: 'choice',
      instructions: 'Подберите наиболее естественную связку.',
      questions: [
        { id: 'q1', prompt: 'Llegué tarde a casa, ___ no cené.',                                options: ['así que', 'tan'], correct: 'así que' },
        { id: 'q2', prompt: 'No funciona el ascensor, ___ subiremos andando.',                     options: ['por eso', 'tanto'], correct: 'por eso' },
        { id: 'q3', prompt: 'No quedaban plazas, ___ tuvimos que ir en tren.',                       options: ['de modo que', 'por más que'], correct: 'de modo que' },
        { id: 'q4', prompt: 'Hay mucha gente, ___ será mejor que te des prisa.',                       options: ['de manera que', 'aunque'], correct: 'de manera que' },
        { id: 'q5', prompt: 'Empecé en junio, ___ no he tenido vacaciones este año.',                    options: ['por tanto', 'tan poco'], correct: 'por tanto' },
        { id: 'q6', prompt: 'No me apetecía nada salir, ___ me quedé en casa.',                            options: ['por eso', 'tanto'], correct: 'por eso' },
      ],
    },

    {
      id: '121.6',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна неверная фраза.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?',
          options: ['Hace tanto frío que no salgo.', 'Hace tan frío que no salgo.', 'Hace tanto calor que no duermo.', 'Hace tanto viento que cierro la ventana.'],
          correct: 'Hace tan frío que no salgo.', explanation: 'Перед сущ. m. — <em>tanto</em>: <em>tanto frío</em>.' },
        { id: 'q2', prompt: 'Где ошибка?',
          options: ['Tiene tantos amigos que no está en casa.', 'Tiene tan amigos que no está en casa.', 'Tiene tantas amigas que no está en casa.', 'Es tan simpático que tiene muchos amigos.'],
          correct: 'Tiene tan amigos que no está en casa.', explanation: 'Перед сущ. — <em>tantos</em>.' },
        { id: 'q3', prompt: 'Где ошибка?',
          options: ['Habla tan rápido que no le entiendo.', 'Habla tanto rápido que no le entiendo.', 'Habla tan despacio que me aburro.', 'Habla tanto que aburre.'],
          correct: 'Habla tanto rápido que no le entiendo.', explanation: 'Перед наречием — <em>tan</em>.' },
        { id: 'q4', prompt: 'Где ошибка?',
          options: ['Era tarde, así que me acosté.', 'Era tarde, así me acosté.', 'Era tarde, por eso me acosté.', 'Era tarde, de modo que me acosté.'],
          correct: 'Era tarde, así me acosté.', explanation: 'Нужно <em>así <strong>que</strong></em>.' },
        { id: 'q5', prompt: 'Где ошибка?',
          options: ['Comió tan poco que tiene hambre.', 'Yo tampoco lo sé.', 'Comió tampoco que tiene hambre.', 'Yo tan poco he comido hoy.'],
          correct: 'Comió tampoco que tiene hambre.', explanation: '«Так мало» — <em>tan poco</em> (раздельно). <em>tampoco</em> = «тоже не».' },
      ],
    },

    {
      id: '121.7',
      title: 'Все верные варианты',
      type: 'multi',
      instructions: 'Отметьте все правильно построенные фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Выберите все правильные:',
          options: [
            'Hay tanta gente que no se ve el escenario.',
            'Hay tanto gente que no se ve el escenario.',
            'Estaba tan cansado que se durmió.',
            'Estaba tanto cansado que se durmió.',
            'Llovía mucho, así que cogimos un taxi.',
            'Llovía mucho, así cogimos un taxi.',
            'Había tan pocos espectadores que suspendieron la función.',
            'Había tanto pocos espectadores que suspendieron la función.',
            'Habla tan rápido que no le entiendo.',
            'Trabaja tanto que está agotado.',
          ],
          correct: [
            'Hay tanta gente que no se ve el escenario.',
            'Estaba tan cansado que se durmió.',
            'Llovía mucho, así que cogimos un taxi.',
            'Había tan pocos espectadores que suspendieron la función.',
            'Habla tan rápido que no le entiendo.',
            'Trabaja tanto que está agotado.',
          ],
          explanation: 'Перед сущ. — <em>tanto/-a/-os/-as</em>; перед прил./нар. — <em>tan</em>; связка — <em>así <strong>que</strong></em>.',
        },
      ],
    },

    {
      id: '121.8',
      title: 'Подберите естественное продолжение',
      type: 'match',
      instructions: 'Каждая причина имеет своё следствие.',
      pool: [
        'así que cogí un taxi.',
        'por eso no me llamaste.',
        'que no entendí nada.',
        'que no pude levantarme.',
        'de modo que tuvimos que volver.',
        'que no pude entrar.',
      ],
      questions: [
        { id: 'q1', prompt: '<em>Llovía mucho</em> ___',                              correct: 'así que cogí un taxi.' },
        { id: 'q2', prompt: '<em>No te funcionaba el móvil,</em> ___',                  correct: 'por eso no me llamaste.' },
        { id: 'q3', prompt: '<em>Hablaba tan rápido</em> ___',                            correct: 'que no entendí nada.' },
        { id: 'q4', prompt: '<em>Estaba tan cansado</em> ___',                              correct: 'que no pude levantarme.' },
        { id: 'q5', prompt: '<em>Olvidamos las llaves,</em> ___',                            correct: 'de modo que tuvimos que volver.' },
        { id: 'q6', prompt: '<em>Había tanta gente</em> ___',                                  correct: 'que no pude entrar.' },
      ],
    },

    {
      id: '121.9',
      title: 'Сопоставьте перевод',
      type: 'match',
      instructions: 'Подберите русский перевод.',
      pool: [
        'Так что мы взяли такси.',
        'Поэтому я не пришёл.',
        'Было столько народу, что мы не вошли.',
        'Он бегает столько, что выигрывает все забеги.',
        'Так мало воды, что мы не смогли искупаться.',
        'Я ел так мало, что снова голоден.',
      ],
      questions: [
        { id: 'q1', prompt: '<em>Así que cogimos un taxi.</em>',                                       correct: 'Так что мы взяли такси.' },
        { id: 'q2', prompt: '<em>Por eso no vine.</em>',                                                 correct: 'Поэтому я не пришёл.' },
        { id: 'q3', prompt: '<em>Había tanta gente que no entramos.</em>',                                correct: 'Было столько народу, что мы не вошли.' },
        { id: 'q4', prompt: '<em>Corre tanto que gana todas las carreras.</em>',                            correct: 'Он бегает столько, что выигрывает все забеги.' },
        { id: 'q5', prompt: '<em>Hay tan poca agua que no pudimos bañarnos.</em>',                            correct: 'Так мало воды, что мы не смогли искупаться.' },
        { id: 'q6', prompt: '<em>Comí tan poco que tengo hambre.</em>',                                         correct: 'Я ел так мало, что снова голоден.' },
      ],
    },

    {
      id: '121.10',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Прослушайте и запишите целиком, с пунктуацией.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Luis hace mucho ejercicio, por eso está en forma.',
          correct: ['Luis hace mucho ejercicio, por eso está en forma.', 'Luis hace mucho ejercicio por eso está en forma.'] },
        { id: 'q2', prompt: '', audio: 'Había tanta gente que no pudimos entrar.',
          correct: ['Había tanta gente que no pudimos entrar.'] },
        { id: 'q3', prompt: '', audio: 'No vi a nadie, así que me volví a casa.',
          correct: ['No vi a nadie, así que me volví a casa.', 'No vi a nadie así que me volví a casa.'] },
        { id: 'q4', prompt: '', audio: 'Estaba tan cansado que me acosté temprano.',
          correct: ['Estaba tan cansado que me acosté temprano.'] },
        { id: 'q5', prompt: '', audio: 'Hace tanto frío que no quiero salir.',
          correct: ['Hace tanto frío que no quiero salir.'] },
      ],
    },

    {
      id: '121.11',
      title: 'tan poco или tampoco?',
      type: 'choice',
      instructions: 'Раздельно <em>tan poco</em> = «так мало». Слитно <em>tampoco</em> = «тоже не».',
      questions: [
        { id: 'q1', prompt: 'Yo ___ lo sé.',                                                    options: ['tampoco', 'tan poco'], correct: 'tampoco' },
        { id: 'q2', prompt: 'Comí ___ que tengo hambre.',                                          options: ['tampoco', 'tan poco'], correct: 'tan poco' },
        { id: 'q3', prompt: 'A mí ___ me gusta esa película.',                                        options: ['tampoco', 'tan poco'], correct: 'tampoco' },
        { id: 'q4', prompt: 'Habla ___ que parece tímido.',                                           options: ['tampoco', 'tan poco'], correct: 'tan poco' },
        { id: 'q5', prompt: 'No quiero ir, y mi hermano ___.',                                          options: ['tampoco', 'tan poco'], correct: 'tampoco' },
      ],
    },
  ],
};
