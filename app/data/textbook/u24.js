// ============================================================
// Unidad 24 — Comparación con nombres: más, menos, tanto como
// Сравнение существительных по количеству.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u24 = {
  id: 'u24',
  number: 24,
  title: { es: 'más, menos, tanto como', topic: 'Comparación con nombres' },
  topicRu: 'Сравнение количества: больше, меньше, столько же',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Para comparar la <strong>cantidad</strong> de algo entre dos sujetos usamos <em>más</em>, <em>menos</em> y <em>tanto / tanta / tantos / tantas</em>: <em>más</em> = mayor cantidad (+); <em>menos</em> = menor cantidad (−); <em>tanto</em> = igual cantidad (=).',
      ru: 'Когда речь идёт о количестве предметов или вещества, используем три ключевых слова: <em>más</em> (больше), <em>menos</em> (меньше), <em>tanto</em> (столько же). После них идёт существительное.',
      examples: [
        { es: 'Belén tiene más libros que yo.', ru: 'У Белен больше книг, чем у меня.' },
        { es: 'Ahora tengo menos pelo que cuando era joven.', ru: 'Сейчас у меня меньше волос, чем в молодости.' },
        { es: 'Hoy no tengo tanto trabajo como ayer.', ru: 'Сегодня у меня не так много работы, как вчера.' },
      ],
    },

    {
      type: 'heading',
      text: 'Конструкции',
    },
    {
      type: 'table',
      caption: 'más / menos / tanto + nombre',
      columns: ['Знак', 'Конструкция', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<strong>+</strong>', '<em>más</em> + сущ. (+ <em>que</em>)',                              '<em>Ernesto tiene más alumnos que Guadalupe.</em><br><em>Pedro tiene más amigos que Antonio.</em>'],
        ['<strong>−</strong>', '<em>menos</em> + сущ. (+ <em>que</em>)',                            '<em>Antes había menos coches que ahora.</em><br><em>Ahora tengo menos sueño que antes.</em>'],
        ['<strong>=</strong>', '<em>tanto / tanta / tantos / tantas</em> + сущ. (+ <em>como</em>)',  '<em>Hoy no hay tanta gente como ayer.</em><br><em>No tengo tantos amigos como mi hermana.</em>'],
      ],
    },
    {
      type: 'atencion',
      es: '<em>más</em> y <em>menos</em> son invariables: una sola forma para masculino, femenino, singular y plural. <em>tanto</em>, en cambio, <strong>concuerda</strong> en género y número con el nombre que sigue: <em>tanto trabajo, tanta gente, tantos amigos, tantas horas</em>.',
      ru: 'Запомните разницу: <em>más</em> и <em>menos</em> — неизменяемые. А <em>tanto</em> — обычное прилагательное и согласуется с существительным.',
    },

    {
      type: 'heading',
      text: 'Объект сравнения: que / como',
    },
    {
      type: 'rule',
      es: 'Después de <em>más / menos</em> el segundo término va con <em>que</em>; después de <em>tanto</em> — con <em>como</em>. Si el segundo término es un <strong>pronombre personal de sujeto</strong>, se usa la forma de sujeto: <em>que tú, que él, como yo</em>.',
      ru: 'Объект сравнения присоединяется через <em>que</em> (после «больше/меньше») или <em>como</em> (после «столько же»). Если это местоимение, используется именительный падеж: <em>que yo, que tú, que él, como nosotros</em>.',
      examples: [
        { es: 'Rodolfo tiene más vacaciones que tú.', ru: 'У Родольфо больше отпуска, чем у тебя.' },
        { es: 'Pero tú haces más viajes que él.', ru: 'Но ты ездишь больше, чем он.' },
        { es: '¿Tienes tanta hambre como yo?', ru: 'Ты так же голоден, как я?' },
      ],
    },
    {
      type: 'rule',
      es: 'Cuando está claro con qué se compara, no se repite <em>que / como</em> + el segundo término. La frase se entiende por el contexto.',
      ru: 'Если из контекста понятно, с чем мы сравниваем, можно не договаривать вторую часть: <em>Ahora tengo menos hambre</em> (по сравнению с тем, что было до еды).',
      examples: [
        { es: 'Ahora tengo menos hambre. (que antes de la comida)', ru: 'Сейчас я меньше голоден (чем до еды).' },
        { es: 'Hoy no hay tanta gente. (como ayer)', ru: 'Сегодня людей меньше (чем вчера).' },
      ],
    },

    {
      type: 'heading',
      text: 'Без существительного',
    },
    {
      type: 'rule',
      es: '<em>más, menos, tanto / tanta / tantos / tantas</em> pueden ir <strong>solos</strong> cuando el nombre se ha mencionado antes. <strong>OJO:</strong> en frases <strong>afirmativas</strong>, <em>tanto</em> y formas siempre necesitan <em>como</em> + segundo término.',
      ru: 'После уже названного существительного слово используется в одиночку: <em>—Sonia tiene cien CD. —Yo tengo más</em>. Но в утвердительных предложениях <em>tanto</em>/<em>tantos</em> без <em>como</em> не остаётся: правильно <em>Yo tengo tantos como ella</em> (а не «Yo tengo tantos» с точкой).',
      examples: [
        { es: '—Sonia tiene cerca de cien CD. —Yo tengo más.', ru: '— У Сонии около ста дисков. — У меня больше.' },
        { es: '—Pues yo no tengo tantos.', ru: '— А у меня не так много.' },
        { es: '—Elisa tiene una gran colección. —Yo tengo tantos como ella.', ru: '— У Элизы большая коллекция. — У меня столько же, сколько у неё.' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '24.1',
      title: 'más, menos или tanto/-a/-os/-as?',
      type: 'fill',
      instructions: 'Поставьте слово, соответствующее знаку: (+) <em>más</em>, (−) <em>menos</em>, (=) согласованная форма <em>tanto</em>.',
      questions: [
        { id: 'q1', prompt: 'Buenos Aires tiene (+) ___ habitantes que Madrid.',          correct: 'más' },
        { id: 'q2', prompt: 'Ahora bebo (−) ___ leche que cuando era pequeño.',             correct: 'menos' },
        { id: 'q3', prompt: 'Sol ha leído (+) ___ libros que yo.',                            correct: 'más' },
        { id: 'q4', prompt: 'No tengo (=) ___ amigos como mi hermana.',                       correct: 'tantos' },
        { id: 'q5', prompt: 'En Canarias no hace (=) ___ calor como en Cuba.',                 correct: 'tanto' },
        { id: 'q6', prompt: 'José Manuel trabaja (−) ___ horas que tú.',                       correct: 'menos' },
        { id: 'q7', prompt: 'Tenemos (=) ___ prisa como tú.',                                   correct: 'tanta', explanation: '<em>prisa</em> — ж. р., ед. ч.' },
        { id: 'q8', prompt: 'Samuel tiene (+) ___ ropa que yo.',                                correct: 'más' },
        { id: 'q9', prompt: 'En La Paz hace (+) ___ frío que en Caracas.',                      correct: 'más' },
      ],
    },

    {
      id: '24.2',
      title: 'Сравните по образцу',
      type: 'fill',
      instructions: 'Запишите сравнение целиком. Пример: <em>Roberto tiene 200 pesos. Clara tiene 20.</em> → <em>Clara tiene menos dinero que Roberto.</em>',
      questions: [
        { id: 'q1', prompt: 'Elsa bebe 1/2 litro de leche al día. Eloy bebe 1 litro. → Elsa <strong>no</strong> bebe ___ leche ___ Eloy.', correct: ['tanta ... como', 'tanta como'], explanation: 'Ответ — <em>tanta como</em>; в форме «X не …, как Y».' },
        { id: 'q2', prompt: 'Hoy hace 30°. Ayer hizo 25°. → Hoy hace ___ calor ___ ayer.',                                    correct: ['más ... que', 'más que'] },
        { id: 'q3', prompt: 'Rosario: 1 millón de habitantes; Mendoza: 1,5 millones. → Rosario no tiene ___ habitantes ___ Mendoza.', correct: ['tantos ... como', 'tantos como'] },
        { id: 'q4', prompt: 'Simón tiene 30 años; yo tengo 28. → Simón tiene ___ años ___ yo.',                                  correct: ['más ... que', 'más que'] },
        { id: 'q5', prompt: 'Ayer vinieron doce estudiantes; hoy diez. → Hoy no han venido ___ estudiantes ___ ayer.',           correct: ['tantos ... como', 'tantos como'] },
        { id: 'q6', prompt: 'Ayer hizo 5°. Hoy hace 10°. → Hoy hace ___ frío ___ ayer.',                                          correct: ['menos ... que', 'menos que'] },
        { id: 'q7', prompt: 'No he comido nada desde esta mañana. Irene tampoco desde anoche. → Irene tiene ___ hambre ___ yo.', correct: ['más ... que', 'más que'] },
      ],
    },

    {
      id: '24.3',
      title: 'Согласуйте tanto / tanta / tantos / tantas',
      type: 'fill',
      instructions: 'Поставьте подходящую форму <em>tanto</em>.',
      questions: [
        { id: 'q1', prompt: 'No tengo ___ amigos como mi hermana.',           correct: 'tantos' },
        { id: 'q2', prompt: 'Hoy no hay ___ gente como ayer.',                 correct: 'tanta' },
        { id: 'q3', prompt: 'No bebo ___ café como tú.',                        correct: 'tanto' },
        { id: 'q4', prompt: 'No tenemos ___ horas libres como vosotros.',        correct: 'tantas' },
        { id: 'q5', prompt: 'No hace ___ calor en Madrid como en Sevilla.',      correct: 'tanto' },
        { id: 'q6', prompt: 'No leo ___ revistas como mi padre.',                  correct: 'tantas' },
        { id: 'q7', prompt: 'No comemos ___ pan como antes.',                       correct: 'tanto' },
        { id: 'q8', prompt: 'No bebes ___ agua como deberías.',                     correct: 'tanta' },
      ],
    },

    {
      id: '24.4',
      title: 'que или como?',
      type: 'choice',
      instructions: 'После <em>más / menos</em> ставится <em>que</em>; после <em>tanto/-a/-os/-as</em> — <em>como</em>.',
      questions: [
        { id: 'q1', prompt: 'Tengo más libros ___ tú.',                         options: ['que', 'como'], correct: 'que' },
        { id: 'q2', prompt: 'Tengo tantos libros ___ tú.',                       options: ['que', 'como'], correct: 'como' },
        { id: 'q3', prompt: 'Mi hermano come menos verdura ___ yo.',              options: ['que', 'como'], correct: 'que' },
        { id: 'q4', prompt: 'No hay tanta gente ___ ayer.',                        options: ['que', 'como'], correct: 'como' },
        { id: 'q5', prompt: 'En Madrid hace más frío ___ en Sevilla.',              options: ['que', 'como'], correct: 'que' },
        { id: 'q6', prompt: 'No bebo tanto café ___ Pablo.',                         options: ['que', 'como'], correct: 'como' },
        { id: 'q7', prompt: 'En tu casa hay menos sillas ___ en la mía.',             options: ['que', 'como'], correct: 'que' },
      ],
    },

    {
      id: '24.5',
      title: 'Завершите ответ по образцу',
      type: 'fill',
      instructions: 'В диалоге используйте <em>más</em>, <em>menos</em> или <em>tanto/-a/-os/-as</em> + (<em>como</em>). Образец: <em>—Felipe tiene dos hijos. —Yo tengo <strong>más</strong>. Tengo cuatro.</em>',
      questions: [
        { id: 'q1', prompt: '—Tengo siete hermanos. —Yo tengo casi ___ tú. Tengo seis.',                                correct: 'tantos como' },
        { id: 'q2', prompt: '—Aurora tiene 30 días de vacaciones. —Yo tengo ___ . Tengo 22.',                              correct: 'menos' },
        { id: 'q3', prompt: '—Tengo unos quinientos libros. —Yo no tengo ___ . Tengo unos trescientos.',                    correct: 'tantos' },
        { id: 'q4', prompt: '—Tengo sueño. He dormido sólo cuatro horas. —Yo tengo ___ . He dormido sólo dos horas.',         correct: 'más' },
        { id: 'q5', prompt: '—Hoy hay cerca de doscientos espectadores. —Yo he estado en ___ . Había casi cincuenta.',         correct: 'menos' },
        { id: 'q6', prompt: '—Hemos estado en diez países diferentes. —Yo he estado en ___ . He estado en doce.',              correct: 'más' },
        { id: 'q7', prompt: '—Trabajo ocho horas al día. —Yo trabajo ___ tú. También trabajo ocho.',                            correct: 'tantas como' },
      ],
    },

    {
      id: '24.6',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза неудачна.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Tengo más libros que tú.', 'Tengo más libros como tú.', 'Tengo menos libros que tú.', 'Tengo tantos libros como tú.'], correct: 'Tengo más libros como tú.', explanation: 'После <em>más</em> — <em>que</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['No hay tanta gente como ayer.', 'No hay tanto gente como ayer.', 'No hay tantos coches como ayer.', 'Hay menos gente que ayer.'], correct: 'No hay tanto gente como ayer.', explanation: '<em>gente</em> — ж. р., ед. ч.: <em>tanta gente</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Tienes más hambre que mí.', 'Tienes más hambre que yo.', 'Tienes más hambre que él.', 'Tienes más hambre que tu hermana.'], correct: 'Tienes más hambre que mí.', explanation: 'Используется именительная форма: <em>que yo</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Tengo tantos amigos como ella.', 'Tengo tantos amigos.', 'No tengo tantos amigos como ella.', 'Tengo más amigos que ella.'], correct: 'Tengo tantos amigos.', explanation: 'В утверждении <em>tantos</em> требует <em>como</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Hace más calor que ayer.', 'Hace tanto calor como ayer.', 'Hace tanta calor como ayer.', 'Hace menos calor que ayer.'], correct: 'Hace tanta calor como ayer.', explanation: '<em>calor</em> — м. р.: <em>tanto calor</em>.' },
      ],
    },

    {
      id: '24.7',
      title: 'Сопоставьте русское и испанское',
      type: 'match',
      instructions: 'Подберите перевод.',
      pool: ['más libros que', 'menos libros que', 'tantos libros como', 'tanta agua como', 'más agua que', 'menos agua que'],
      questions: [
        { id: 'q1', prompt: 'больше книг, чем',         correct: 'más libros que' },
        { id: 'q2', prompt: 'меньше книг, чем',          correct: 'menos libros que' },
        { id: 'q3', prompt: 'столько же книг, сколько',   correct: 'tantos libros como' },
        { id: 'q4', prompt: 'столько же воды, сколько',    correct: 'tanta agua como' },
        { id: 'q5', prompt: 'больше воды, чем',             correct: 'más agua que' },
        { id: 'q6', prompt: 'меньше воды, чем',              correct: 'menos agua que' },
      ],
    },

    {
      id: '24.8',
      title: 'Какие фразы корректны?',
      type: 'multi',
      instructions: 'Отметьте все грамматичные варианты.',
      questions: [
        {
          id: 'q1',
          prompt: 'Выберите все правильные фразы:',
          options: [
            'Tengo más amigos que ella.',
            'Tengo más amigos como ella.',
            'Tengo tantos amigos como ella.',
            'Tengo tantos amigos que ella.',
            'No tengo tantos amigos como ella.',
            'No tengo tantas amigos como ella.',
            'Hay más gente que ayer.',
            'Hay tanta gente como ayer.',
          ],
          correct: ['Tengo más amigos que ella.', 'Tengo tantos amigos como ella.', 'No tengo tantos amigos como ella.', 'Hay más gente que ayer.', 'Hay tanta gente como ayer.'],
          explanation: '«como» только после <em>tanto</em>; «tantas amigos» — нарушает согласование (<em>amigos</em> — м. р.).',
        },
      ],
    },

    {
      id: '24.9',
      title: 'Без второго термина',
      type: 'fill',
      instructions: 'Сократите фразу: уберите <em>que / como</em> + второй термин, если из контекста и так понятно.',
      questions: [
        { id: 'q1', prompt: '<em>Hoy no hay tanta gente como ayer.</em> → Hoy no hay ___ .',          correct: ['tanta gente', 'tanta gente.'] },
        { id: 'q2', prompt: '<em>Ahora tengo menos hambre que antes.</em> → Ahora tengo ___ .',         correct: ['menos hambre', 'menos hambre.'] },
        { id: 'q3', prompt: '<em>Tengo más amigos que tú.</em> → Tengo ___ .',                           correct: ['más amigos', 'más amigos.'] },
        { id: 'q4', prompt: '<em>Hace menos frío que ayer.</em> → Hace ___ .',                            correct: ['menos frío', 'menos frío.'] },
        { id: 'q5', prompt: '<em>No tengo tantas vacaciones como tú.</em> → No tengo ___ .',               correct: ['tantas vacaciones', 'tantas vacaciones.'] },
      ],
    },

    {
      id: '24.10',
      title: 'Без существительного',
      type: 'fill',
      instructions: 'Замените существительное в ответе на одно слово (с согласованием по контексту).',
      questions: [
        { id: 'q1', prompt: '—¿Tienes muchos libros? —Tengo <em>más libros</em> que tú. → Tengo ___ que tú.',          correct: 'más' },
        { id: 'q2', prompt: '—¿Tienes muchas amigas? —Tengo <em>tantas amigas</em> como ella. → Tengo ___ como ella.',  correct: 'tantas' },
        { id: 'q3', prompt: '—¿Bebes café? —Bebo <em>menos café</em> que antes. → Bebo ___ que antes.',                  correct: 'menos' },
        { id: 'q4', prompt: '—¿Hay gente? —Hay <em>tanta gente</em> como ayer. → Hay ___ como ayer.',                     correct: 'tanta' },
        { id: 'q5', prompt: '—¿Tienes hijos? —Tengo <em>más hijos</em> que vosotros. → Tengo ___ que vosotros.',           correct: 'más' },
      ],
    },

    {
      id: '24.11',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Послушайте и запишите услышанное.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Belén tiene más libros que yo.',                     correct: ['Belén tiene más libros que yo.', 'Belén tiene más libros que yo'] },
        { id: 'q2', prompt: '', audio: 'No tengo tantos amigos como mi hermana.',             correct: ['No tengo tantos amigos como mi hermana.', 'No tengo tantos amigos como mi hermana'] },
        { id: 'q3', prompt: '', audio: 'Hoy hay menos gente que ayer.',                        correct: ['Hoy hay menos gente que ayer.', 'Hoy hay menos gente que ayer'] },
        { id: 'q4', prompt: '', audio: 'Tengo tanta hambre como tú.',                          correct: ['Tengo tanta hambre como tú.', 'Tengo tanta hambre como tú'] },
        { id: 'q5', prompt: '', audio: 'Pedro tiene más amigos que Antonio.',                  correct: ['Pedro tiene más amigos que Antonio.', 'Pedro tiene más amigos que Antonio'] },
        { id: 'q6', prompt: '', audio: 'Ahora tengo menos pelo que antes.',                     correct: ['Ahora tengo menos pelo que antes.', 'Ahora tengo menos pelo que antes'] },
      ],
    },

    {
      id: '24.12',
      title: 'Переведите на испанский',
      type: 'fill',
      instructions: 'Запишите перевод фразы.',
      questions: [
        { id: 'q1', prompt: '«У меня меньше денег, чем у тебя.»',                       correct: ['Tengo menos dinero que tú.', 'Tengo menos dinero que tú'] },
        { id: 'q2', prompt: '«У него столько же книг, сколько у меня.»',                   correct: ['Tiene tantos libros como yo.', 'Tiene tantos libros como yo'] },
        { id: 'q3', prompt: '«Сегодня меньше людей, чем вчера.»',                            correct: ['Hoy hay menos gente que ayer.', 'Hay menos gente que ayer.'] },
        { id: 'q4', prompt: '«У меня больше работы, чем у моей сестры.»',                    correct: ['Tengo más trabajo que mi hermana.', 'Tengo más trabajo que mi hermana'] },
        { id: 'q5', prompt: '«У них столько же машин, сколько у нас.»',                       correct: ['Tienen tantos coches como nosotros.', 'Tienen tantos coches como nosotros'] },
      ],
    },
  ],
};
