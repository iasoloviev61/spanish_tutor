// ============================================================
// Unidad 119 — Oraciones causales (porque, como, puesto que…)
// porque, ya que, puesto que, como, por, a causa de, es que.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u119 = {
  id: 'u119',
  number: 119,
  title: { es: 'porque, como, puesto que…', topic: 'Oraciones causales' },
  topicRu: 'Причинные предложения: porque, como, ya que, puesto que, por, a causa de, es que',

  theory: [
    {
      type: 'rule',
      es: 'Las <strong>oraciones causales</strong> indican la causa de una acción o situación. Responden a la pregunta <em>¿por qué?</em>.',
      ru: 'Причинные придаточные отвечают на вопрос «почему?». Союзов много: <em>porque, como, ya que, puesto que</em>; и плюс предложные обороты <em>por + inf, por + nombre, a causa de + nombre</em>.',
      examples: [
        { es: 'Hoy no salimos <strong>porque hace</strong> mucho frío.', ru: 'Сегодня не выходим, потому что очень холодно.' },
        { es: '<strong>Como es alta</strong>, a Marta se le da bien el baloncesto.', ru: 'Так как она высокая, у Марты хорошо получается баскетбол.' },
        { es: 'Han suspendido el partido <strong>a causa de la lluvia</strong>.', ru: 'Матч отменили из-за дождя.' },
      ],
    },

    {
      type: 'heading',
      text: 'Формы выражения причины',
    },
    {
      type: 'table',
      caption: 'Союзы и обороты',
      columns: ['Форма', 'Что после', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<strong>porque</strong>', 'indicativo (личная форма глагола)',
          '<em>Nos quedamos en casa <strong>porque estábamos</strong> cansados.</em>'],
        ['<strong>ya que</strong>', 'indicativo',
          '<em><strong>Ya que se</strong> levanta, enciende el televisor.</em>'],
        ['<strong>puesto que</strong>', 'indicativo (более книжный союз)',
          '<em><strong>Puesto que</strong> me lo pides tú, lo haré.</em>'],
        ['<strong>como</strong>', 'indicativo (только в начале фразы!)',
          '<em><strong>Como tenían</strong> hambre, se compraron unos bocadillos.</em>'],
        ['<strong>por</strong>', '+ infinitivo (или + nombre)',
          '<em>Le regañaron <strong>por llegar</strong> tarde. / <strong>Por la</strong> niebla.</em>'],
        ['<strong>a causa de</strong>', '+ nombre (имя существительное)',
          '<em>Han suspendido el partido <strong>a causa de la lluvia</strong>.</em>'],
      ],
    },

    {
      type: 'heading',
      text: 'Где может стоять союз?',
    },
    {
      type: 'rule',
      es: '<strong>Como</strong> aparece <strong>siempre al principio</strong> de la frase. <strong>Porque</strong> suele ir <strong>en medio</strong>. <strong>Ya que / puesto que</strong> pueden ir al principio o en medio.',
      ru: '<strong>Como</strong> ставится только в начале фразы. <strong>Porque</strong> — почти всегда в середине. <strong>Ya que / puesto que</strong> работают и в начале, и в середине.',
      examples: [
        { es: '<strong>Como</strong> la película es buena, no quedan entradas.', ru: 'Раз фильм хороший, билетов уже нет. <em>(como — в начале.)</em>' },
        { es: 'Lo hice <strong>porque</strong> me lo había pedido Aurora.', ru: 'Я это сделал, потому что меня попросила Аврора. <em>(porque — в середине.)</em>' },
        { es: '<strong>Ya que estás</strong> aquí, ¿por qué no me ayudas? / ¿Por qué no me ayudas, <strong>ya que estás</strong> aquí?', ru: 'Раз уж ты здесь, помоги мне.' },
      ],
    },

    {
      type: 'heading',
      text: 'es que — причина-объяснение',
    },
    {
      type: 'rule',
      es: '<strong>Es que</strong> introduce una causa <em>como explicación o pretexto</em> en respuesta a una pregunta o petición.',
      ru: '<strong>Es que</strong> используют, когда хотят объяснить или оправдаться в ответ на вопрос или просьбу.',
      examples: [
        { es: '—¿Por qué no viniste ayer? — <strong>Es que tuve</strong> mucho trabajo.', ru: '— Почему ты вчера не пришёл? — Дело в том, что было много работы.' },
        { es: '—¿Por qué no me llevas a dar una vuelta en la moto? — <strong>Es que no tienes</strong> casco.', ru: '— Почему ты меня не возьмёшь покататься? — Потому что у тебя нет шлема.' },
      ],
    },

    {
      type: 'atencion',
      es: 'No confundir <strong>porque</strong> (союз, «потому что») con <strong>por qué</strong> (вопрос, «почему?») и <strong>el porqué</strong> (существительное, «причина»). <em>¿<strong>Por qué</strong> no viniste? — <strong>Porque</strong> estaba cansado. — Nadie sabe <strong>el porqué</strong>.</em>',
      ru: 'Не путайте: <em>¿<strong>por qué</strong>?</em> — вопрос «почему?»; <em><strong>porque</strong></em> — союз «потому что»; <em>el <strong>porqué</strong></em> — существительное «причина».',
    },
  ],

  exercises: [
    {
      id: '119.1',
      title: 'Соберите фразу',
      type: 'fill',
      instructions: 'Соедините части в одно предложение. Запишите всю фразу.',
      questions: [
        { id: 'q1', prompt: '<em>el accidente / llegaron tarde / por</em> →',
          correct: ['Llegaron tarde por el accidente.', 'Llegaron tarde por el accidente'] },
        { id: 'q2', prompt: '<em>porque / no se oye nada / hay mucho ruido</em> →',
          correct: ['No se oye nada porque hay mucho ruido.', 'No se oye nada porque hay mucho ruido'] },
        { id: 'q3', prompt: '<em>ya que / cómprame el periódico / sales</em> →',
          correct: ['Ya que sales, cómprame el periódico.', 'Cómprame el periódico ya que sales.'] },
        { id: 'q4', prompt: '<em>cogimos el coche / como / estaba lloviendo</em> →',
          correct: ['Como estaba lloviendo, cogimos el coche.', 'Como estaba lloviendo cogimos el coche.'] },
        { id: 'q5', prompt: '<em>Inés está resfriada / se ha quedado en casa / como</em> →',
          correct: ['Como Inés está resfriada, se ha quedado en casa.', 'Como Inés está resfriada se ha quedado en casa.'] },
        { id: 'q6', prompt: '<em>por / terminar la carrera / le hicieron un regalo</em> →',
          correct: ['Le hicieron un regalo por terminar la carrera.', 'Le hicieron un regalo por terminar la carrera'] },
        { id: 'q7', prompt: '<em>estaba lloviendo / Menchu no salió / porque</em> →',
          correct: ['Menchu no salió porque estaba lloviendo.', 'Menchu no salió porque estaba lloviendo'] },
        { id: 'q8', prompt: '<em>ustedes me lo piden / puesto que / tocaré otra pieza</em> →',
          correct: ['Puesto que ustedes me lo piden, tocaré otra pieza.', 'Tocaré otra pieza puesto que ustedes me lo piden.'] },
      ],
    },

    {
      id: '119.2',
      title: 'Подставьте союз',
      type: 'fill',
      instructions: 'Подставьте: <em>porque, como, ya que, por, a causa de</em>. Каждый можно использовать не один раз.',
      questions: [
        { id: 'q1', prompt: 'Félix está cansado ___ trabaja mucho.',                              correct: 'porque' },
        { id: 'q2', prompt: 'Se han inundado las calles ___ la lluvia.',                            correct: ['a causa de', 'por'] },
        { id: 'q3', prompt: 'A Arturo lo despidieron ___ llegar siempre tarde.',                     correct: 'por' },
        { id: 'q4', prompt: '___ no habla mucho, la gente cree que Rafa es tímido.',                  correct: 'Como' },
        { id: 'q5', prompt: 'Me quedaré a cenar, ___ insistís.',                                       correct: ['ya que', 'puesto que'] },
        { id: 'q6', prompt: 'Perdió la voz ___ gritar.',                                                 correct: 'por' },
        { id: 'q7', prompt: 'Ramiro no sacó al perro ___ se quedó dormido.',                              correct: 'porque' },
        { id: 'q8', prompt: '___ estaba navegando en Internet, me olvidé de cenar.',                        correct: 'Como' },
      ],
    },

    {
      id: '119.3',
      title: 'Объедините фразы',
      type: 'fill',
      instructions: 'Перепишите как одну фразу с указанным союзом.',
      questions: [
        { id: 'q1', prompt: '<em>Nadie quería ir al cine. Me fui sola.</em> (como) →',
          correct: ['Como nadie quería ir al cine, me fui sola.', 'Como nadie quería ir al cine me fui sola.'] },
        { id: 'q2', prompt: '<em>Estáis aquí. Quedaos a cenar.</em> (ya que) →',
          correct: ['Ya que estáis aquí, quedaos a cenar.', 'Quedaos a cenar ya que estáis aquí.'] },
        { id: 'q3', prompt: '<em>Fui el primero en entregar el trabajo. Me felicitó el profesor.</em> (por) →',
          correct: ['Me felicitó el profesor por ser el primero en entregar el trabajo.', 'Me felicitó el profesor por entregar el primero el trabajo.'] },
        { id: 'q4', prompt: '<em>Mañana es domingo. No tengo que ir a la oficina.</em> (como) →',
          correct: ['Como mañana es domingo, no tengo que ir a la oficina.', 'Como mañana es domingo no tengo que ir a la oficina.'] },
        { id: 'q5', prompt: '<em>No querían despertar a los niños. Apagaron la televisión.</em> (porque) →',
          correct: ['Apagaron la televisión porque no querían despertar a los niños.', 'Apagaron la televisión porque no querían despertar a los niños'] },
        { id: 'q6', prompt: '<em>Los aeropuertos están cerrados. Hay nieve.</em> (a causa de) →',
          correct: ['Los aeropuertos están cerrados a causa de la nieve.', 'Los aeropuertos están cerrados a causa de la nieve'] },
        { id: 'q7', prompt: '<em>Rosa es muy generosa. Tiene muchos amigos.</em> (porque) →',
          correct: ['Rosa tiene muchos amigos porque es muy generosa.', 'Rosa tiene muchos amigos porque es muy generosa'] },
        { id: 'q8', prompt: '<em>Lee sin luz. Le duele la cabeza.</em> (por) →',
          correct: ['Le duele la cabeza por leer sin luz.', 'Le duele la cabeza por leer sin luz'] },
      ],
    },

    {
      id: '119.4',
      title: '<em>es que</em> — оправдания',
      type: 'fill',
      instructions: 'Ответьте с <em>es que</em>, используя одно из выражений: <em>está enfadada, estoy cansado, tenía el móvil descargado, tengo que estudiar, no tengo mucha hambre</em>. Запишите ответ целиком (включая <em>Es que</em>).',
      questions: [
        { id: 'q1', prompt: '—¿Damos una vuelta? —___',
          correct: ['Es que estoy cansado.', 'Es que estoy cansado'] },
        { id: 'q2', prompt: '—Come más pollo. —___',
          correct: ['Es que no tengo mucha hambre.', 'Es que no tengo mucha hambre'] },
        { id: 'q3', prompt: '—¿Por qué no vamos al cine esta noche? —___',
          correct: ['Es que tengo que estudiar.', 'Es que tengo que estudiar'] },
        { id: 'q4', prompt: '—¿Por qué no me llamaste anoche? —___',
          correct: ['Es que tenía el móvil descargado.', 'Es que tenía el móvil descargado'] },
        { id: 'q5', prompt: '—¿Por qué no ha venido Anita? —___',
          correct: ['Es que está enfadada.', 'Es que está enfadada'] },
      ],
    },

    {
      id: '119.5',
      title: 'porque или por?',
      type: 'choice',
      instructions: '<em>porque</em> + личная форма; <em>por</em> + инфинитив или существительное.',
      questions: [
        { id: 'q1', prompt: 'Le regañaron ___ llegar tarde.',                  options: ['porque', 'por'], correct: 'por' },
        { id: 'q2', prompt: 'Le regañaron ___ llegó tarde.',                     options: ['porque', 'por'], correct: 'porque' },
        { id: 'q3', prompt: 'No salimos ___ hace frío.',                          options: ['porque', 'por'], correct: 'porque' },
        { id: 'q4', prompt: 'Me felicitaron ___ ganar el premio.',                 options: ['porque', 'por'], correct: 'por' },
        { id: 'q5', prompt: 'No fui a la fiesta ___ estaba cansado.',                options: ['porque', 'por'], correct: 'porque' },
        { id: 'q6', prompt: 'Le multaron ___ no llevar casco.',                       options: ['porque', 'por'], correct: 'por' },
      ],
    },

    {
      id: '119.6',
      title: 'como или porque?',
      type: 'choice',
      instructions: 'Помните: <em>como</em> — только в начале фразы; <em>porque</em> — обычно в середине.',
      questions: [
        { id: 'q1', prompt: 'No iremos al parque ___ está lloviendo.',                 options: ['como', 'porque'], correct: 'porque' },
        { id: 'q2', prompt: '___ está lloviendo, no iremos al parque.',                  options: ['Como', 'Porque'], correct: 'Como' },
        { id: 'q3', prompt: '___ no me llamaste, me preocupé.',                            options: ['Como', 'Porque'], correct: 'Como' },
        { id: 'q4', prompt: 'Me preocupé ___ no me llamaste.',                              options: ['como', 'porque'], correct: 'porque' },
        { id: 'q5', prompt: '___ Inés está enferma, se queda en casa.',                       options: ['Como', 'Porque'], correct: 'Como' },
        { id: 'q6', prompt: 'Inés se queda en casa ___ está enferma.',                          options: ['como', 'porque'], correct: 'porque' },
      ],
    },

    {
      id: '119.7',
      title: 'Все верные варианты',
      type: 'multi',
      instructions: 'Какие фразы построены правильно?',
      questions: [
        {
          id: 'q1',
          prompt: 'Отметьте все правильные:',
          options: [
            'Como llovía, no salí.',
            'Porque llovía, no salí.',
            'No salí porque llovía.',
            'No salí como llovía.',
            'Han cancelado el vuelo a causa de la niebla.',
            'Han cancelado el vuelo a causa la niebla.',
            'Le regañaron por llegar tarde.',
            'Le regañaron por llega tarde.',
            'Es que tengo mucho trabajo.',
            'Tengo mucho trabajo, es que.',
          ],
          correct: [
            'Como llovía, no salí.',
            'No salí porque llovía.',
            'Han cancelado el vuelo a causa de la niebla.',
            'Le regañaron por llegar tarde.',
            'Es que tengo mucho trabajo.',
          ],
          explanation: '<em>como</em> — только в начале; <em>porque</em> — в середине; <em>a causa de</em> требует <em>de</em>; <em>por</em> + инфинитив; <em>es que</em> — в начале ответа.',
        },
      ],
    },

    {
      id: '119.8',
      title: 'porque или por qué?',
      type: 'choice',
      instructions: '<em>por qué</em> — это вопрос; <em>porque</em> — союз ответа.',
      questions: [
        { id: 'q1', prompt: '¿___ no viniste ayer?',                       options: ['Por qué', 'Porque'], correct: 'Por qué' },
        { id: 'q2', prompt: '___ no tenía ganas.',                          options: ['Por qué', 'Porque'], correct: 'Porque' },
        { id: 'q3', prompt: '¿___ me lo dices?',                              options: ['Por qué', 'Porque'], correct: 'Por qué' },
        { id: 'q4', prompt: 'Te lo digo ___ es importante.',                    options: ['por qué', 'porque'], correct: 'porque' },
        { id: 'q5', prompt: 'Nadie sabe ___ se fue.',                            options: ['por qué', 'porque'], correct: 'por qué', explanation: 'Косвенный вопрос — <em>por qué</em>.' },
        { id: 'q6', prompt: 'Me ayudó ___ es mi amigo.',                          options: ['por qué', 'porque'], correct: 'porque' },
      ],
    },

    {
      id: '119.9',
      title: 'Сопоставьте перевод',
      type: 'match',
      instructions: 'Подберите русский перевод.',
      pool: [
        'Сегодня не выходим, потому что холодно.',
        'Раз ты здесь, помоги мне.',
        'Поскольку шёл дождь, мы взяли машину.',
        'Матч отменили из-за дождя.',
        'Его оштрафовали за опоздание.',
        'Дело в том, что у меня много работы.',
      ],
      questions: [
        { id: 'q1', prompt: '<em>No salimos hoy porque hace frío.</em>',                                   correct: 'Сегодня не выходим, потому что холодно.' },
        { id: 'q2', prompt: '<em>Ya que estás aquí, ayúdame.</em>',                                          correct: 'Раз ты здесь, помоги мне.' },
        { id: 'q3', prompt: '<em>Como llovía, cogimos el coche.</em>',                                        correct: 'Поскольку шёл дождь, мы взяли машину.' },
        { id: 'q4', prompt: '<em>Han suspendido el partido a causa de la lluvia.</em>',                        correct: 'Матч отменили из-за дождя.' },
        { id: 'q5', prompt: '<em>Le multaron por llegar tarde.</em>',                                          correct: 'Его оштрафовали за опоздание.' },
        { id: 'q6', prompt: '<em>Es que tengo mucho trabajo.</em>',                                            correct: 'Дело в том, что у меня много работы.' },
      ],
    },

    {
      id: '119.10',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Прослушайте и запишите.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Hoy no salimos porque hace mucho frío.',
          correct: ['Hoy no salimos porque hace mucho frío.', 'Hoy no salimos porque hace mucho frío'] },
        { id: 'q2', prompt: '', audio: 'Como es alta, a Marta se le da bien el baloncesto.',
          correct: ['Como es alta, a Marta se le da bien el baloncesto.', 'Como es alta a Marta se le da bien el baloncesto.'] },
        { id: 'q3', prompt: '', audio: 'Han cancelado el vuelo a causa de la niebla.',
          correct: ['Han cancelado el vuelo a causa de la niebla.', 'Han cancelado el vuelo a causa de la niebla'] },
        { id: 'q4', prompt: '', audio: 'Le regañaron por llegar tarde.',
          correct: ['Le regañaron por llegar tarde.', 'Le regañaron por llegar tarde'] },
        { id: 'q5', prompt: '', audio: 'Es que tuve mucho trabajo.',
          correct: ['Es que tuve mucho trabajo.', 'Es que tuve mucho trabajo'] },
      ],
    },

    {
      id: '119.11',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна неверная фраза.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?',
          options: ['Como hace frío, me quedo.', 'Hace frío, como me quedo.', 'No salgo porque hace frío.', 'Ya que hace frío, no salgo.'],
          correct: 'Hace frío, como me quedo.', explanation: '<em>como</em> ставится только в начале фразы.' },
        { id: 'q2', prompt: 'Где ошибка?',
          options: ['Le regañaron por llegar tarde.', 'Le regañaron por llegó tarde.', 'Le regañaron porque llegó tarde.', 'No vino por la lluvia.'],
          correct: 'Le regañaron por llegó tarde.', explanation: 'После <em>por</em> идёт инфинитив или существительное, не личная форма.' },
        { id: 'q3', prompt: 'Где ошибка?',
          options: ['Cancelado a causa de la lluvia.', 'Cancelado a causa la lluvia.', 'Cancelado por la lluvia.', 'Cancelado porque llovía.'],
          correct: 'Cancelado a causa la lluvia.', explanation: '<em>a causa <strong>de</strong></em>.' },
        { id: 'q4', prompt: 'Где ошибка?',
          options: ['—¿Por qué no vienes? —Es que estoy cansado.', '—¿Por qué no vienes? —Estoy cansado, es que.', '—¿Por qué no vienes? —Porque estoy cansado.', '—¿Por qué no vienes? —Como estoy cansado.'],
          correct: '—¿Por qué no vienes? —Estoy cansado, es que.', explanation: '<em>es que</em> идёт в начале ответа.' },
      ],
    },

    {
      id: '119.12',
      title: 'Все способы выразить причину',
      type: 'multi',
      instructions: 'Какие пары переводят русское «потому что шёл дождь, мы остались дома»?',
      questions: [
        {
          id: 'q1',
          prompt: 'Отметьте все правильные:',
          options: [
            'Como llovía, nos quedamos en casa.',
            'Nos quedamos en casa porque llovía.',
            'Nos quedamos en casa ya que llovía.',
            'Nos quedamos en casa puesto que llovía.',
            'Nos quedamos en casa por la lluvia.',
            'Nos quedamos en casa a causa de la lluvia.',
            'Nos quedamos en casa como llovía.',
            'Llovía, nos quedamos en casa porque.',
          ],
          correct: [
            'Como llovía, nos quedamos en casa.',
            'Nos quedamos en casa porque llovía.',
            'Nos quedamos en casa ya que llovía.',
            'Nos quedamos en casa puesto que llovía.',
            'Nos quedamos en casa por la lluvia.',
            'Nos quedamos en casa a causa de la lluvia.',
          ],
          explanation: '<em>como</em> — только в начале; <em>porque</em> не может стоять в конце.',
        },
      ],
    },
  ],
};
