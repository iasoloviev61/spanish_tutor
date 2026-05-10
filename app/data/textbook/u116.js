// ============================================================
// Unidad 116 — Conjunciones (y, o, pero)
// Союзы соединяют слова и предложения. Y / ni — однородные;
// o — альтернативные; pero / sino — противопоставление.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u116 = {
  id: 'u116',
  number: 116,
  title: { es: 'y, o, pero…', topic: 'Conjunciones' },
  topicRu: 'Союзы: y, ni, o, pero, sino',

  theory: [
    {
      type: 'rule',
      es: 'Las <strong>conjunciones</strong> (<em>y, o, pero…</em>) sirven para unir palabras o frases y mostrar qué relación hay entre ellas: suma, alternativa o contraste.',
      ru: 'Союзы соединяют слова и предложения и показывают, в каком они отношении: сложение, выбор или противопоставление. Самые частотные — <em>y, ni, o, pero, sino</em>.',
      examples: [
        { es: 'Trabajo en un banco <strong>y</strong> estudio Económicas.', ru: 'Я работаю в банке и учусь на экономиста.' },
        { es: 'No me gusta la carne, <strong>pero</strong> me encanta el pescado.', ru: 'Я не люблю мясо, но обожаю рыбу.' },
        { es: '¿Quieres fruta <strong>o</strong> un dulce?', ru: 'Хочешь фрукт или сладкое?' },
      ],
    },

    {
      type: 'heading',
      text: 'y / e — соединение положительных идей',
    },
    {
      type: 'rule',
      es: '<strong>Y</strong> une elementos o ideas afirmativas. Cuando la palabra siguiente empieza por <strong>i-</strong> o <strong>hi-</strong>, se transforma en <strong>e</strong> para evitar dos sonidos /i/ seguidos. Excepción: <em>hie-</em> (no cambia).',
      ru: '<strong>Y</strong> = «и». Перед словом, начинающимся на <strong>i-</strong> или <strong>hi-</strong>, превращается в <strong>e</strong>, чтобы не было двух одинаковых звуков. Исключение — слова на <em>hie-</em> (там <em>y</em> остаётся).',
      examples: [
        { es: 'Me gustan la carne <strong>y</strong> el pescado.', ru: 'Мне нравятся мясо и рыба.' },
        { es: 'Sara <strong>e</strong> Isabel son madre <strong>e</strong> hija.', ru: 'Сара и Исабель — мать и дочь.' },
        { es: 'Fernando, Paco <strong>y</strong> María son españoles.', ru: 'Фернандо, Пако и Мария — испанцы. <em>(y/e ставится только перед последним элементом.)</em>' },
        { es: 'Madera <strong>y</strong> hierro.', ru: 'Дерево и железо. <em>(перед hie- остаётся y.)</em>' },
      ],
    },

    {
      type: 'heading',
      text: 'ni / ni… ni — соединение отрицательных идей',
    },
    {
      type: 'rule',
      es: '<strong>Ni</strong> une elementos o ideas negativas: <em>«и не…»</em>. Cuando los elementos van <strong>antes del verbo</strong>, se usa <strong>ni… ni</strong> y el verbo va sin <em>no</em>.',
      ru: '<strong>Ni</strong> = «и не». Если перечисление стоит <strong>перед глаголом</strong>, ставим <strong>ni… ni</strong> и глагол идёт уже без <em>no</em>.',
      examples: [
        { es: 'No me gusta el té <strong>ni</strong> el café.', ru: 'Мне не нравится ни чай, ни кофе.' },
        { es: 'Diana no habla inglés. Tere no habla inglés. → <strong>Ni</strong> Diana <strong>ni</strong> Tere hablan inglés.', ru: 'Ни Диана, ни Тере не говорят по-английски.' },
        { es: '<strong>Ni</strong> Ana, <strong>ni</strong> Laura, <strong>ni</strong> Agustín quieren ver esa película.', ru: 'Ни Ана, ни Лаура, ни Агустин не хотят смотреть тот фильм. <em>(Перед каждым элементом — ni.)</em>' },
      ],
    },

    {
      type: 'heading',
      text: 'o / u — альтернатива',
    },
    {
      type: 'rule',
      es: '<strong>O</strong> introduce una alternativa o una aproximación. Delante de palabra que empieza por <strong>o-</strong> u <strong>ho-</strong>, se transforma en <strong>u</strong>.',
      ru: '<strong>O</strong> = «или». Перед словом на <strong>o-</strong> или <strong>ho-</strong> превращается в <strong>u</strong> (опять же чтобы не было двух одинаковых гласных подряд).',
      examples: [
        { es: '¿Quieres fruta <strong>o</strong> un dulce?', ru: 'Хочешь фрукт или сладкое?' },
        { es: 'Había nueve <strong>o</strong> diez personas en la sala.', ru: 'В зале было девять или десять человек. <em>(приблизительная оценка.)</em>' },
        { es: 'No sé si siento amor <strong>u</strong> odio.', ru: 'Не знаю, любовь это или ненависть.' },
        { es: 'Había siete <strong>u</strong> ocho platos sobre la mesa.', ru: 'На столе было семь или восемь тарелок.' },
      ],
    },

    {
      type: 'heading',
      text: 'pero / sino / sino que — противопоставление',
    },
    {
      type: 'table',
      caption: 'pero vs sino vs sino que',
      columns: ['Союз', 'Когда', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<strong>pero</strong>', 'противопоставление в любом контексте',
          '<em>Enrique no estudia mucho, <strong>pero</strong> aprueba.</em>'],
        ['<strong>sino</strong>', 'после отрицания, чтобы исправить или уточнить',
          '<em>Adriana no es argentina, <strong>sino</strong> peruana.</em>'],
        ['<strong>sino que</strong>', 'после отрицания, когда соединяет два <strong>сказуемых</strong> (целые фразы)',
          '<em>No sólo no vino, <strong>sino que</strong> tampoco llamó.</em>'],
      ],
    },
    {
      type: 'atencion',
      es: '<strong>Sino</strong> aparece <strong>siempre</strong> después de una frase negativa: <em>no… sino…</em>. Si no hay negación, se usa <strong>pero</strong>: <em>Es inteligente, <strong>pero</strong> perezoso</em>. Y si lo que se introduce es una frase completa con verbo distinto, va <strong>sino que</strong>: <em>No fui a clase, <strong>sino que</strong> me quedé en casa</em>.',
      ru: '<strong>Sino</strong> ставится только после отрицания: <em>no… sino…</em>. Если отрицания нет — нужно <em>pero</em>. Если после <em>sino</em> идёт целое предложение с другим глаголом — нужен <em>sino <strong>que</strong></em>.',
    },
  ],

  exercises: [
    {
      id: '116.1',
      title: 'y или e?',
      type: 'fill',
      instructions: 'Запишите <em>y</em> или <em>e</em>. Помните про слова на <em>i-/hi-</em> и про исключение <em>hie-</em>.',
      questions: [
        { id: 'q1', prompt: 'Padres ___ hijos viven juntos.',                correct: 'e' },
        { id: 'q2', prompt: 'Tomás ___ Inés son hermanos.',                  correct: 'e' },
        { id: 'q3', prompt: 'Ana ___ Carmen estudian francés.',              correct: 'y' },
        { id: 'q4', prompt: 'Compré madera ___ hierro.',                      correct: 'y', explanation: 'Перед <em>hie-</em> остаётся <em>y</em>.' },
        { id: 'q5', prompt: 'Sara ___ Isabel son madre ___ hija.',            correct: ['e e', 'e e.'] , placeholder: 'два слова через пробел' },
        { id: 'q6', prompt: 'Es interesante ___ importante.',                  correct: 'e' },
        { id: 'q7', prompt: 'Hablamos español, francés ___ italiano.',         correct: 'e' },
        { id: 'q8', prompt: 'Trabajan los lunes ___ los martes.',               correct: 'y' },
      ],
    },

    {
      id: '116.2',
      title: 'o или u?',
      type: 'fill',
      instructions: 'Запишите <em>o</em> или <em>u</em>.',
      questions: [
        { id: 'q1', prompt: '¿Eres peruano ___ boliviano?',                     correct: 'o' },
        { id: 'q2', prompt: '¿Quieres té ___ café?',                              correct: 'o' },
        { id: 'q3', prompt: 'Septiembre ___ octubre — depende del clima.',         correct: 'u' },
        { id: 'q4', prompt: 'Mis meses preferidos son julio ___ agosto.',           correct: 'o' },
        { id: 'q5', prompt: 'Había siete ___ ocho personas.',                        correct: 'u' },
        { id: 'q6', prompt: 'No sé si dijo nueve ___ once.',                          correct: 'o' },
        { id: 'q7', prompt: 'Mujer ___ hombre, da igual.',                            correct: 'u' },
        { id: 'q8', prompt: '¿Estudias en una academia ___ en una universidad?',     correct: 'o' },
      ],
    },

    {
      id: '116.3',
      title: 'pero, sino или sino que?',
      type: 'choice',
      instructions: 'Выберите подходящий союз.',
      questions: [
        { id: 'q1', prompt: 'Hugo no vive en La Paz, ___ en Cochabamba.',        options: ['pero', 'sino', 'sino que'], correct: 'sino' },
        { id: 'q2', prompt: 'Está casado, ___ no conozco a su mujer.',            options: ['pero', 'sino', 'sino que'], correct: 'pero' },
        { id: 'q3', prompt: 'Trabaja en un taller, ___ no gana mucho.',            options: ['pero', 'sino', 'sino que'], correct: 'pero' },
        { id: 'q4', prompt: 'No solo no trabaja, ___ tampoco estudia.',             options: ['pero', 'sino', 'sino que'], correct: 'sino que' },
        { id: 'q5', prompt: 'Juana no es mexicana, ___ guatemalteca.',                options: ['pero', 'sino', 'sino que'], correct: 'sino' },
        { id: 'q6', prompt: 'No vive en Barcelona, ___ trabaja allí.',                 options: ['pero', 'sino', 'sino que'], correct: 'sino que' },
        { id: 'q7', prompt: 'Quiere abrir un negocio, ___ no tiene dinero.',            options: ['pero', 'sino', 'sino que'], correct: 'pero' },
        { id: 'q8', prompt: 'No es médico, ___ enfermero.',                              options: ['pero', 'sino', 'sino que'], correct: 'sino' },
      ],
    },

    {
      id: '116.4',
      title: 'Соедините две фразы в одну',
      type: 'fill',
      instructions: 'Объедините предложения союзом из набора <em>y, e, ni… ni</em>. Запишите получившуюся фразу целиком.',
      questions: [
        { id: 'q1', prompt: '<em>Keiko habla inglés. Keiko habla español.</em> →',
          correct: ['Keiko habla inglés y español.', 'Keiko habla inglés y español'] },
        { id: 'q2', prompt: '<em>No hablo inglés. No hablo alemán.</em> →',
          correct: ['No hablo inglés ni alemán.', 'No hablo inglés ni alemán'] },
        { id: 'q3', prompt: '<em>A Juan le gusta bailar. A Diana le gusta bailar.</em> →',
          correct: ['A Juan y a Diana les gusta bailar.', 'A Juan y a Diana les gusta bailar'] },
        { id: 'q4', prompt: '<em>Héctor estudia idiomas. Héctor estudia informática.</em> →',
          correct: ['Héctor estudia idiomas e informática.', 'Héctor estudia idiomas e informática'] },
        { id: 'q5', prompt: '<em>Mi hermano no quiere salir. Mi hermana no quiere salir.</em> →',
          correct: ['Ni mi hermano ni mi hermana quieren salir.', 'Ni mi hermano ni mi hermana quieren salir'] },
        { id: 'q6', prompt: '<em>Luis no tiene coche. Luis no sabe conducir.</em> →',
          correct: ['Luis no tiene coche ni sabe conducir.', 'Luis no tiene coche ni sabe conducir'] },
      ],
    },

    {
      id: '116.5',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна неверная фраза.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?',
          options: ['Padres y hijos.', 'Padres e hijos.', 'Madera y hierro.', 'Sara e Isabel.'],
          correct: 'Padres y hijos.', explanation: 'Перед <em>hi-</em> ставится <em>e</em>: <em>padres e hijos</em>.' },
        { id: 'q2', prompt: 'Где ошибка?',
          options: ['Siete u ocho.', 'Nueve o diez.', 'Mujer o hombre.', 'Plata o oro.'],
          correct: 'Mujer o hombre.', explanation: 'Перед <em>ho-</em> ставится <em>u</em>: <em>mujer u hombre</em>.' },
        { id: 'q3', prompt: 'Где ошибка?',
          options: ['No es alta, sino baja.', 'No es alta, pero baja.', 'No es alta, pero es muy guapa.', 'Es alta, pero delgada.'],
          correct: 'No es alta, pero baja.', explanation: 'После отрицания идёт <em>sino</em>, а не <em>pero</em>.' },
        { id: 'q4', prompt: 'Где ошибка?',
          options: ['No vino, sino que llamó.', 'No vino, sino llamó.', 'No es perezoso, sino tímido.', 'No estudia, pero aprueba.'],
          correct: 'No vino, sino llamó.', explanation: 'Между двумя глаголами нужен <em>sino que</em>.' },
        { id: 'q5', prompt: 'Где ошибка?',
          options: ['Ni Ana ni Laura vienen.', 'No Ana ni Laura vienen.', 'Ni mi hermano ni yo lo sabemos.', 'Ni el lunes ni el martes voy.'],
          correct: 'No Ana ni Laura vienen.', explanation: 'Если отрицание стоит перед глаголом и его убираем — нужно <em>ni… ni</em>.' },
      ],
    },

    {
      id: '116.6',
      title: 'Все верные варианты',
      type: 'multi',
      instructions: 'Какие фразы корректны?',
      questions: [
        {
          id: 'q1',
          prompt: 'Отметьте все правильные:',
          options: [
            'Tomás e Inés.',
            'Tomás y Inés.',
            'Madera e hierro.',
            'Madera y hierro.',
            'Siete u ocho.',
            'Siete o ocho.',
            'Septiembre u octubre.',
            'Septiembre o octubre.',
          ],
          correct: ['Tomás e Inés.', 'Madera y hierro.', 'Siete u ocho.', 'Septiembre u octubre.'],
          explanation: '<em>e</em> перед i-/hi-, кроме <em>hie-</em>; <em>u</em> перед o-/ho-.',
        },
      ],
    },

    {
      id: '116.7',
      title: 'Сопоставьте союз и контекст',
      type: 'match',
      instructions: 'Подберите союз для каждой ситуации.',
      pool: ['y', 'e', 'ni', 'o', 'u', 'pero', 'sino', 'sino que'],
      questions: [
        { id: 'q1', prompt: '<em>Carmen ___ Alberto son novios.</em>',                                 correct: 'y' },
        { id: 'q2', prompt: '<em>Ramón ___ Ignacio juegan al ajedrez.</em>',                            correct: 'e' },
        { id: 'q3', prompt: '<em>No me llama ___ me escribe.</em>',                                      correct: 'ni' },
        { id: 'q4', prompt: '<em>¿Vienes hoy ___ mañana?</em>',                                          correct: 'o' },
        { id: 'q5', prompt: '<em>Necesito siete ___ ocho minutos.</em>',                                  correct: 'u' },
        { id: 'q6', prompt: '<em>Estudia poco, ___ aprueba.</em>',                                          correct: 'pero' },
        { id: 'q7', prompt: '<em>No es médico, ___ enfermero.</em>',                                          correct: 'sino' },
        { id: 'q8', prompt: '<em>No solo no vino, ___ tampoco llamó.</em>',                                    correct: 'sino que' },
      ],
    },

    {
      id: '116.8',
      title: 'Заполните пропуски',
      type: 'fill',
      instructions: 'Подставьте союз: <em>y, e, ni, o, u, pero, sino, sino que</em>.',
      questions: [
        { id: 'q1',  prompt: 'Estoy cansado ___ tengo que terminar el trabajo.',          correct: 'pero' },
        { id: 'q2',  prompt: 'No tomo café ___ té por la noche.',                          correct: 'ni' },
        { id: 'q3',  prompt: 'Madre ___ hija se parecen mucho.',                            correct: 'e' },
        { id: 'q4',  prompt: 'No estudia mucho, ___ aprueba todos los exámenes.',            correct: 'pero' },
        { id: 'q5',  prompt: 'No quiere té, ___ café.',                                       correct: 'sino' },
        { id: 'q6',  prompt: 'Tenemos siete ___ ocho días libres.',                           correct: 'u' },
        { id: 'q7',  prompt: 'No vino, ___ se quedó en casa estudiando.',                      correct: 'sino que' },
        { id: 'q8',  prompt: 'En verano nadamos ___ tomamos el sol.',                            correct: 'y' },
        { id: 'q9',  prompt: '¿Pides agua ___ vino?',                                            correct: 'o' },
        { id: 'q10', prompt: '___ Ana ___ Pablo van a la fiesta: están enfermos.',                 correct: ['Ni ni', 'Ni - ni'], placeholder: 'два союза через пробел' },
      ],
    },

    {
      id: '116.9',
      title: 'Сопоставьте перевод',
      type: 'match',
      instructions: 'Подберите русский перевод.',
      pool: [
        'Я не пью ни чай, ни кофе.',
        'Он не итальянец, а испанец.',
        'Он мало работает, но хорошо зарабатывает.',
        'Семь или восемь.',
        'Мать и дочь.',
        'Он не только не пришёл, но и не позвонил.',
      ],
      questions: [
        { id: 'q1', prompt: '<em>No tomo té ni café.</em>',                          correct: 'Я не пью ни чай, ни кофе.' },
        { id: 'q2', prompt: '<em>No es italiano, sino español.</em>',                 correct: 'Он не итальянец, а испанец.' },
        { id: 'q3', prompt: '<em>Trabaja poco, pero gana bien.</em>',                  correct: 'Он мало работает, но хорошо зарабатывает.' },
        { id: 'q4', prompt: '<em>Siete u ocho.</em>',                                   correct: 'Семь или восемь.' },
        { id: 'q5', prompt: '<em>Madre e hija.</em>',                                    correct: 'Мать и дочь.' },
        { id: 'q6', prompt: '<em>No solo no vino, sino que tampoco llamó.</em>',         correct: 'Он не только не пришёл, но и не позвонил.' },
      ],
    },

    {
      id: '116.10',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Прослушайте и запишите. Все диакритические знаки обязательны.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Sara e Isabel son madre e hija.',
          correct: ['Sara e Isabel son madre e hija.', 'Sara e Isabel son madre e hija'] },
        { id: 'q2', prompt: '', audio: 'No me gusta la carne, pero me encanta el pescado.',
          correct: ['No me gusta la carne, pero me encanta el pescado.', 'No me gusta la carne pero me encanta el pescado.'] },
        { id: 'q3', prompt: '', audio: 'No es argentina, sino peruana.',
          correct: ['No es argentina, sino peruana.', 'No es argentina sino peruana.'] },
        { id: 'q4', prompt: '', audio: 'Había siete u ocho personas.',
          correct: ['Había siete u ocho personas.', 'Había siete u ocho personas'] },
        { id: 'q5', prompt: '', audio: 'Ni Diana ni Tere hablan inglés.',
          correct: ['Ni Diana ni Tere hablan inglés.', 'Ni Diana ni Tere hablan inglés'] },
        { id: 'q6', prompt: '', audio: 'No solo no vino, sino que tampoco llamó.',
          correct: ['No solo no vino, sino que tampoco llamó.', 'No sólo no vino, sino que tampoco llamó.'] },
      ],
    },

    {
      id: '116.11',
      title: 'pero или sino que?',
      type: 'choice',
      instructions: 'Когда после отрицания идёт целая фраза с другим глаголом — это <em>sino que</em>.',
      questions: [
        { id: 'q1', prompt: 'No estudia mucho, ___ aprueba.',                  options: ['pero', 'sino que'], correct: 'pero' },
        { id: 'q2', prompt: 'No estudia, ___ trabaja en una tienda.',            options: ['pero', 'sino que'], correct: 'sino que' },
        { id: 'q3', prompt: 'No es alta, ___ es muy guapa.',                       options: ['pero', 'sino que'], correct: 'pero' },
        { id: 'q4', prompt: 'No me llamó, ___ me envió un mensaje.',                  options: ['pero', 'sino que'], correct: 'sino que' },
        { id: 'q5', prompt: 'No me gusta, ___ tengo que hacerlo.',                       options: ['pero', 'sino que'], correct: 'pero' },
        { id: 'q6', prompt: 'No fui a la fiesta, ___ me quedé en casa.',                   options: ['pero', 'sino que'], correct: 'sino que' },
      ],
    },

    {
      id: '116.12',
      title: 'Все верные применения <em>ni</em>',
      type: 'multi',
      instructions: 'Какие предложения с <em>ni / ni… ni</em> построены правильно?',
      questions: [
        {
          id: 'q1',
          prompt: 'Отметьте все правильные:',
          options: [
            'No habla inglés ni francés.',
            'No habla ni inglés ni francés.',
            'Ni Ana ni Pablo vienen.',
            'No ni Ana ni Pablo vienen.',
            'Ni hablo inglés ni hablo francés.',
            'Ni Ana, ni Laura, ni Agustín quieren ir.',
          ],
          correct: [
            'No habla inglés ni francés.',
            'No habla ni inglés ni francés.',
            'Ni Ana ni Pablo vienen.',
            'Ni hablo inglés ni hablo francés.',
            'Ni Ana, ni Laura, ni Agustín quieren ir.',
          ],
          explanation: 'Если перечисление стоит перед глаголом, <em>no</em> убирается. <em>«No ni… ni…»</em> — недопустимо.',
        },
      ],
    },
  ],
};
