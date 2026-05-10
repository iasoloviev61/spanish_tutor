// ============================================================
// Unidad 105 — Contraste entre formas de expresar grados de cualidad o cantidad
// muy / mucho / muchos + nombre / verbo / adjetivo,
// formación de –ísimo (rapidísimo, listísima, muchísimo, lentísimamente).
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u105 = {
  id: 'u105',
  number: 105,
  title: { es: 'muy, mucho, muchos, –ísimo...', topic: 'Contraste de grados' },
  topicRu: 'muy / mucho / muchos / –ísimo: как сравнить и не запутаться',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Las formas <em>muy, mucho, mucha, muchos, muchas</em> sirven para expresar <strong>grado de cualidad</strong> (с прилагательными и наречиями) или <strong>cantidad</strong> (с глаголами и существительными). Cada una tiene su lugar.',
      ru: '<strong>muy</strong> — наречие, не меняется. <strong>mucho</strong> с глаголом — наречие, тоже не меняется. А <em>mucho/-a/-os/-as</em> с существительным — это уже <strong>прилагательное</strong>, и оно согласуется по роду и числу.',
      examples: [
        { es: 'Juan es muy trabajador.', ru: 'Хуан очень трудолюбивый.' },
        { es: 'Juan trabaja mucho.', ru: 'Хуан много работает.' },
        { es: 'Juan trabaja muchas horas.', ru: 'Хуан работает много часов.' },
      ],
    },

    {
      type: 'heading',
      text: 'Перед прилагательным или наречием',
    },
    {
      type: 'table',
      caption: '+ adjetivo / adverbio',
      columns: ['Конструкция', 'Пример'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['<strong>muy</strong> + прилаг./нар.',         '<em>Luisa es muy inteligente.</em>'],
        ['<strong>bastante</strong> + прилаг./нар.',    '<em>Alberto cocina bastante bien.</em>'],
        ['<strong>poco</strong> + прилаг./нар.',         '<em>Jorge es poco estudioso.</em>'],
        ['<strong>demasiado</strong> + прилаг./нар.',    '<em>Habéis llegado demasiado tarde.</em>'],
      ],
    },

    {
      type: 'heading',
      text: 'После глагола',
    },
    {
      type: 'table',
      caption: 'verbo +',
      columns: ['Конструкция', 'Пример'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['глагол + <strong>mucho</strong>',     '<em>Clara trabaja mucho.</em>'],
        ['глагол + <strong>bastante</strong>',  '<em>Consuelo sale bastante.</em>'],
        ['глагол + <strong>poco</strong>',       '<em>Ignacio come poco.</em>'],
        ['глагол + <strong>demasiado</strong>',  '<em>Rodri habla demasiado.</em>'],
      ],
    },

    {
      type: 'heading',
      text: 'Перед существительным',
    },
    {
      type: 'rule',
      es: 'Перед <strong>существительным</strong> используются согласующиеся формы: <em>mucho/-a/-os/-as</em>, <em>bastante/-es</em>, <em>poco/-a/-os/-as</em>, <em>demasiado/-a/-os/-as</em>.',
      ru: 'Перед существительным наречие превращается в прилагательное и <strong>согласуется в роде и числе</strong>: <em>mucha leche, muchos amigos, pocas horas, demasiada gente</em>. <em>bastante</em> меняет только число: <em>bastante tiempo / bastantes amigos</em>.',
      examples: [
        { es: 'Clara trabaja muchas horas.', ru: 'Клара работает много часов.' },
        { es: 'Tiene bastantes amigos.', ru: 'У него довольно много друзей.' },
        { es: 'Ignacio come poca carne.', ru: 'Игнасио ест мало мяса.' },
        { es: 'Bebes demasiada leche.', ru: 'Ты пьёшь слишком много молока.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Compara: <em>Juan es <strong>muy</strong> trabajador</em> (прилагательное) — <em>Juan trabaja <strong>mucho</strong></em> (глагол) — <em>Juan trabaja <strong>muchas</strong> horas</em> (существительное в женском мн.).',
      ru: 'Сравните три ситуации с одним и тем же смыслом «много/очень»: перед <em>trabajador</em> (прил.) — <em>muy</em>; после <em>trabaja</em> (глаг.) — <em>mucho</em>; перед <em>horas</em> (сущ. жен. мн.) — <em>muchas</em>.',
    },

    {
      type: 'heading',
      text: 'Превосходная степень: –ísimo',
    },
    {
      type: 'rule',
      es: 'Para reforzar el grado de un adjetivo o adverbio (= «очень-очень»), se usa el sufijo <strong>–ísimo</strong>. Equivale a <em>muy</em> + adjetivo.',
      ru: 'Для усиления (= «очень-очень», «крайне», «жутко») к прилагательному или наречию добавляется суффикс <strong>–ísimo/-a/-os/-as</strong>. По смыслу = <em>muy</em> + прилаг.',
      examples: [
        { es: 'Alonso conduce rapidísimo.', ru: 'Алонсо ездит очень-очень быстро.' },
        { es: 'Lorena es altísima.', ru: 'Лорена очень высокая.' },
        { es: 'Este examen es facilísimo.', ru: 'Этот экзамен — проще простого.' },
      ],
    },

    {
      type: 'table',
      caption: 'Как образуется –ísimo',
      columns: ['Исходник', 'Действие', 'Результат', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['прилаг. на гласную',     '–vocal + ísimo',     'list<strong>o</strong> → list<strong>ísimo</strong>',     '<em>Estas chicas son listísimas.</em>'],
        ['прилаг. на согласную',   '+ ísimo',              'difíci<strong>l</strong> → difíci<strong>l</strong>ísimo', '<em>El examen fue dificilísimo.</em>'],
        ['прилаг. <em>mucho</em>',  '–o + ísimo',          'much<strong>o</strong> → much<strong>ísimo</strong>',     '<em>Dunia tiene muchísimos amigos.</em>'],
        ['наречие на гласную',     '–vocal + ísimo',      'tard<strong>e</strong> → tard<strong>ísimo</strong>',       '<em>Es tardísimo.</em>'],
        ['наречие mucho',           '–o + ísimo',          'much<strong>o</strong> → much<strong>ísimo</strong>',     '<em>Sebastián trabaja muchísimo.</em>'],
        ['наречие на –mente',      '–a + ísima + mente', 'lent<strong>a</strong>mente → lent<strong>ísima</strong>mente', '<em>Samuel conduce lentísimamente.</em>'],
      ],
    },

    {
      type: 'atencion',
      es: 'Algunas formas tienen ortografía especial: <em>feliz → felicísimo, blanco → blanquísimo, antiguo → antiquísimo, amigo → amiguísimo, amable → amabilísimo, joven → jovencísimo</em>.',
      ru: 'Некоторые формы образуются с орфографическими изменениями: <em>feliz → felicísimo</em>, <em>blanco → blanquísimo</em>, <em>antiguo → antiquísimo</em>, <em>amigo → amiguísimo</em>, <em>amable → amabilísimo</em>, <em>joven → jovencísimo</em>.',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '105.1',
      title: 'muy или mucho?',
      type: 'fill',
      instructions: 'Допишите фразу, добавив <em>muy</em> или <em>mucho</em>. Образец: <em>Esta novela es buena</em> → <em>Esta novela es muy buena</em>.',
      questions: [
        { id: 'q1', prompt: 'Esta novela es buena. →',           correct: ['Esta novela es muy buena.', 'Esta novela es muy buena'] },
        { id: 'q2', prompt: 'Esther duerme. →',                   correct: ['Esther duerme mucho.', 'Esther duerme mucho'] },
        { id: 'q3', prompt: 'Mi casa está lejos. →',              correct: ['Mi casa está muy lejos.', 'Mi casa está muy lejos'] },
        { id: 'q4', prompt: 'Raúl prepara bien la carne. →',      correct: ['Raúl prepara muy bien la carne.', 'Raúl prepara la carne muy bien.', 'Raúl prepara muy bien la carne', 'Raúl prepara la carne muy bien'] },
        { id: 'q5', prompt: 'Me parezco a mi madre. →',           correct: ['Me parezco mucho a mi madre.', 'Me parezco mucho a mi madre'] },
        { id: 'q6', prompt: 'Hacer ejercicio es sano. →',          correct: ['Hacer ejercicio es muy sano.', 'Hacer ejercicio es muy sano'] },
        { id: 'q7', prompt: 'Juan llega siempre tarde. →',         correct: ['Juan llega siempre muy tarde.', 'Juan llega siempre muy tarde'] },
        { id: 'q8', prompt: 'Eva gasta poco. →',                    correct: ['Eva gasta muy poco.', 'Eva gasta muy poco'] },
      ],
    },

    {
      id: '105.2',
      title: 'Согласуйте форму',
      type: 'fill',
      instructions: 'Поставьте указанное в скобках слово в правильной форме.',
      questions: [
        { id: 'q1', prompt: 'Ernesto tiene (mucho) ___ hermanos.',                  correct: 'muchos' },
        { id: 'q2', prompt: 'Felisa vive (bastante) ___ lejos.',                    correct: 'bastante' },
        { id: 'q3', prompt: 'Hoy hay (bastante) ___ estrellas en el cielo.',         correct: 'bastantes' },
        { id: 'q4', prompt: 'No me gusta Eduardo. Es (demasiado) ___ orgulloso.',    correct: 'demasiado' },
        { id: 'q5', prompt: 'Queda (poco) ___ leche. Hay que comprar.',               correct: 'poca' },
        { id: 'q6', prompt: 'Has comprado (demasiado) ___ fruta.',                    correct: 'demasiada' },
        { id: 'q7', prompt: 'Gerardo habla (demasiado) ___. Siempre mete la pata.',   correct: 'demasiado' },
        { id: 'q8', prompt: 'Esteban sale (poco) ___. Estudia (mucho) ___.',          correct: ['poco; mucho', 'poco, mucho'], explanation: 'Запишите ответы через точку с запятой или запятую: <em>poco; mucho</em>.' },
        { id: 'q9', prompt: 'He visto esta película (mucho) ___ veces.',              correct: 'muchas' },
        { id: 'q10', prompt: 'Hemos llegado (demasiado) ___ temprano. Aún no han abierto.', correct: 'demasiado' },
        { id: 'q11', prompt: 'Últimamente leo (poco) ___. No tengo (mucho) ___ tiempo.', correct: ['poco; mucho', 'poco, mucho'] },
        { id: 'q12', prompt: 'No veo a Ruth. Hay (demasiado) ___ gente.',             correct: 'demasiada' },
      ],
    },

    {
      id: '105.3',
      title: 'Переделайте в форму с –ísimo',
      type: 'fill',
      instructions: 'Замените <em>muy + прилаг./нар.</em> на форму с –ísimo. Образец: <em>Alfonso es un chico muy aburrido</em> → <em>Alfonso es un chico aburridísimo</em>.',
      questions: [
        { id: 'q1', prompt: 'Alfonso es un chico muy aburrido. →',         correct: ['Alfonso es un chico aburridísimo.', 'Alfonso es un chico aburridísimo'] },
        { id: 'q2', prompt: 'Olga es una chica muy interesante. →',         correct: ['Olga es una chica interesantísima.', 'Olga es una chica interesantísima'] },
        { id: 'q3', prompt: 'Roberto camina muy lentamente. →',             correct: ['Roberto camina lentísimamente.', 'Roberto camina lentísimamente'] },
        { id: 'q4', prompt: 'Daniel me golpeó muy fuerte. →',                correct: ['Daniel me golpeó fuertísimo.', 'Daniel me golpeó fortísimo.', 'Daniel me golpeó fuertísimo', 'Daniel me golpeó fortísimo'], explanation: 'У <em>fuerte</em> равноправны <em>fuertísimo</em> и <em>fortísimo</em>.' },
        { id: 'q5', prompt: 'Héctor es muy amigo mío. →',                    correct: ['Héctor es amiguísimo mío.', 'Héctor es amiguísimo mío'] },
        { id: 'q6', prompt: 'Este edificio es muy antiguo. →',                correct: ['Este edificio es antiquísimo.', 'Este edificio es antiquísimo'] },
        { id: 'q7', prompt: 'Estoy leyendo una novela muy buena. →',          correct: ['Estoy leyendo una novela buenísima.', 'Estoy leyendo una novela buenísima'] },
        { id: 'q8', prompt: 'Los hermanos de Lola son muy educados. →',        correct: ['Los hermanos de Lola son educadísimos.', 'Los hermanos de Lola son educadísimos'] },
        { id: 'q9', prompt: 'Miriam explica muy claramente. →',                correct: ['Miriam explica clarísimamente.', 'Miriam explica clarísimamente'] },
        { id: 'q10', prompt: 'Durante la semana tengo muy poco tiempo libre. →', correct: ['Durante la semana tengo poquísimo tiempo libre.', 'Durante la semana tengo poquísimo tiempo libre'] },
        { id: 'q11', prompt: 'Paula y Gloria son muy amables. →',               correct: ['Paula y Gloria son amabilísimas.', 'Paula y Gloria son amabilísimas'] },
        { id: 'q12', prompt: 'Los padres de Aurora son muy jóvenes. →',          correct: ['Los padres de Aurora son jovencísimos.', 'Los padres de Aurora son jovencísimos'] },
      ],
    },

    {
      id: '105.4',
      title: 'muy / mucho / muchos / muchas',
      type: 'choice',
      instructions: 'Выберите правильную форму.',
      questions: [
        { id: 'q1', prompt: 'Tengo ___ amigos en Madrid.',           options: ['muy', 'mucho', 'muchos'], correct: 'muchos' },
        { id: 'q2', prompt: 'Mis amigos son ___ simpáticos.',         options: ['muy', 'mucho', 'muchos'], correct: 'muy' },
        { id: 'q3', prompt: 'Me gustan ___ los gatos.',                options: ['muy', 'mucho', 'muchos'], correct: 'mucho' },
        { id: 'q4', prompt: 'Hay ___ gente en la plaza.',              options: ['muy', 'mucha', 'muchas'], correct: 'mucha' },
        { id: 'q5', prompt: 'La plaza es ___ grande.',                  options: ['muy', 'mucha'], correct: 'muy' },
        { id: 'q6', prompt: 'Bebo ___ agua todos los días.',            options: ['muy', 'mucha'], correct: 'mucha' },
        { id: 'q7', prompt: 'Trabajo ___ horas a la semana.',           options: ['muy', 'muchas'], correct: 'muchas' },
        { id: 'q8', prompt: 'Estoy ___ contenta de verte.',              options: ['muy', 'mucha'], correct: 'muy' },
      ],
    },

    {
      id: '105.5',
      title: 'Соберите фразу',
      type: 'fill',
      instructions: 'Соберите фразу с указанными словами. Все формы — в правильном виде.',
      questions: [
        { id: 'q1', prompt: '(Clara / muchas horas / trabaja) →',              correct: ['Clara trabaja muchas horas.', 'Clara trabaja muchas horas'] },
        { id: 'q2', prompt: '(Juan / muy / es / trabajador) →',                correct: ['Juan es muy trabajador.', 'Juan es muy trabajador'] },
        { id: 'q3', prompt: '(Juan / mucho / trabaja) →',                       correct: ['Juan trabaja mucho.', 'Juan trabaja mucho'] },
        { id: 'q4', prompt: '(poca carne / Ignacio / come) →',                  correct: ['Ignacio come poca carne.', 'Ignacio come poca carne'] },
        { id: 'q5', prompt: '(demasiada leche / bebes) →',                       correct: ['Bebes demasiada leche.', 'Bebes demasiada leche'] },
        { id: 'q6', prompt: '(bastantes amigos / tiene) →',                      correct: ['Tiene bastantes amigos.', 'Tiene bastantes amigos'] },
      ],
    },

    {
      id: '105.6',
      title: 'Сопоставьте –ísimo с исходником',
      type: 'match',
      instructions: 'Подберите для каждого слова форму с <em>–ísimo</em>.',
      pool: ['rapidísimo', 'amabilísimo', 'antiquísimo', 'felicísimo', 'jovencísimo', 'muchísimo', 'tardísimo', 'blanquísimo'],
      questions: [
        { id: 'q1', prompt: '<em>rápido</em>',  correct: 'rapidísimo' },
        { id: 'q2', prompt: '<em>amable</em>',   correct: 'amabilísimo' },
        { id: 'q3', prompt: '<em>antiguo</em>',  correct: 'antiquísimo' },
        { id: 'q4', prompt: '<em>feliz</em>',    correct: 'felicísimo' },
        { id: 'q5', prompt: '<em>joven</em>',    correct: 'jovencísimo' },
        { id: 'q6', prompt: '<em>mucho</em>',    correct: 'muchísimo' },
        { id: 'q7', prompt: '<em>tarde</em>',    correct: 'tardísimo' },
        { id: 'q8', prompt: '<em>blanco</em>',   correct: 'blanquísimo' },
      ],
    },

    {
      id: '105.7',
      title: 'Согласуйте –ísimo по роду и числу',
      type: 'fill',
      instructions: 'Поставьте форму с –ísimo в правильной форме.',
      questions: [
        { id: 'q1', prompt: 'Ana y Luisa son <em>(listo)</em> ___.',                correct: 'listísimas' },
        { id: 'q2', prompt: 'El examen fue <em>(difícil)</em> ___.',                 correct: 'dificilísimo' },
        { id: 'q3', prompt: 'Estos zapatos son <em>(barato)</em> ___.',               correct: 'baratísimos' },
        { id: 'q4', prompt: 'La comida está <em>(rico)</em> ___.',                    correct: 'riquísima', explanation: 'Орфографически: <em>rico → riquísimo/-a</em>.' },
        { id: 'q5', prompt: 'Mis abuelos son <em>(amable)</em> ___.',                  correct: 'amabilísimos' },
        { id: 'q6', prompt: 'Tengo <em>(mucho)</em> ___ ganas de verte.',              correct: 'muchísimas' },
        { id: 'q7', prompt: 'Mi hermana habla <em>(rápido)</em> ___.',                  correct: 'rapidísimo', explanation: 'Это уже наречие, не меняет форму.' },
        { id: 'q8', prompt: 'Estos pantalones son <em>(largo)</em> ___.',                correct: 'larguísimos' },
      ],
    },

    {
      id: '105.8',
      title: 'Сравните три формы',
      type: 'choice',
      instructions: 'Какой смысл точнее передаёт фразу?',
      questions: [
        { id: 'q1', prompt: '<em>Juan es muy trabajador.</em>',
          options: ['оценка качества: какой Хуан', 'сколько он работает', 'сколько часов работает'], correct: 'оценка качества: какой Хуан' },
        { id: 'q2', prompt: '<em>Juan trabaja mucho.</em>',
          options: ['оценка качества: какой Хуан', 'сколько он работает', 'сколько часов работает'], correct: 'сколько он работает' },
        { id: 'q3', prompt: '<em>Juan trabaja muchas horas.</em>',
          options: ['оценка качества: какой Хуан', 'сколько он работает (общее)', 'сколько часов работает (точная мера)'], correct: 'сколько часов работает (точная мера)' },
        { id: 'q4', prompt: '<em>Juan es trabajadorísimo.</em>',
          options: ['= Juan es muy trabajador (усиление)', '= Juan trabaja muchas horas'], correct: '= Juan es muy trabajador (усиление)' },
      ],
    },

    {
      id: '105.9',
      title: 'Найдите фразы без ошибок',
      type: 'multi',
      instructions: 'Отметьте все грамматически корректные фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Tengo muchos amigos.',
            'Tengo mucho amigos.',
            'Tengo muy amigos.',
            'Hay mucha gente.',
            'Hay muy gente.',
            'Es muy guapa.',
            'Es mucha guapa.',
            'Trabajo mucho.',
            'Trabajo muy.',
            'Trabajo muchas horas.',
            'Esta sopa está riquísima.',
            'Esta sopa está muy riquísima.',
          ],
          correct: [
            'Tengo muchos amigos.',
            'Hay mucha gente.',
            'Es muy guapa.',
            'Trabajo mucho.',
            'Trabajo muchas horas.',
            'Esta sopa está riquísima.',
          ],
          explanation: 'Перед существительным — согласованная форма (<em>muchos amigos, mucha gente, muchas horas</em>). Перед прилагательным — <em>muy</em>. После глагола — <em>mucho</em>. Форма с <em>–ísimo</em> уже сама — превосходная, <em>muy</em> с ней не идёт.',
        },
      ],
    },

    {
      id: '105.10',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Послушайте и запишите фразу полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Juan trabaja muchas horas.',          correct: ['Juan trabaja muchas horas.', 'Juan trabaja muchas horas'] },
        { id: 'q2', prompt: '', audio: 'Lorena es altísima.',                  correct: ['Lorena es altísima.', 'Lorena es altísima'] },
        { id: 'q3', prompt: '', audio: 'Bebes demasiada leche.',                correct: ['Bebes demasiada leche.', 'Bebes demasiada leche'] },
        { id: 'q4', prompt: '', audio: 'Sebastián trabaja muchísimo.',          correct: ['Sebastián trabaja muchísimo.', 'Sebastián trabaja muchísimo'] },
        { id: 'q5', prompt: '', audio: 'Este examen es facilísimo.',            correct: ['Este examen es facilísimo.', 'Este examen es facilísimo'] },
        { id: 'q6', prompt: '', audio: 'Tiene bastantes amigos.',                correct: ['Tiene bastantes amigos.', 'Tiene bastantes amigos'] },
      ],
    },

    {
      id: '105.11',
      title: 'Где ошибка?',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?',
          options: ['Tengo muchas amigas.', 'Tengo muy amigas.', 'Tengo amigas guapísimas.', 'Tengo muchísimas amigas.'],
          correct: 'Tengo muy amigas.', explanation: 'Перед существительным — согласованная форма <em>muchas</em>.' },
        { id: 'q2', prompt: 'Где ошибка?',
          options: ['Es muy alta.', 'Es altísima.', 'Es muy altísima.', 'Es bastante alta.'],
          correct: 'Es muy altísima.', explanation: 'Форма с <em>–ísimo</em> уже превосходная — <em>muy</em> с ней дублируется.' },
        { id: 'q3', prompt: 'Где ошибка?',
          options: ['Hay mucha gente.', 'Hay mucho gente.', 'Hay bastante gente.', 'Hay demasiada gente.'],
          correct: 'Hay mucho gente.', explanation: '<em>gente</em> — женский род, нужна форма <em>mucha</em>.' },
        { id: 'q4', prompt: 'Где ошибка?',
          options: ['Es facilísimo.', 'Es muy fácil.', 'Es facilísima.', 'Es facílisimo.'],
          correct: 'Es facílisimo.', explanation: 'В превосходной форме ударение на <em>–í</em>: <em>facilísimo</em>, не *<em>facílisimo</em>.' },
        { id: 'q5', prompt: 'Где ошибка?',
          options: ['Tengo muchísimas ganas.', 'Tengo muchísimo ganas.', 'Tengo muchas ganas.'],
          correct: 'Tengo muchísimo ganas.', explanation: '<em>ganas</em> — женский мн., нужна форма <em>muchísimas</em>.' },
      ],
    },

    {
      id: '105.12',
      title: 'Заполните пропуск',
      type: 'fill',
      instructions: 'Поставьте подходящую форму: <em>muy / mucho / mucha / muchos / muchas / muchísimo</em> и т. п.',
      questions: [
        { id: 'q1', prompt: 'Esta clase es ___ interesante.',                  correct: 'muy' },
        { id: 'q2', prompt: 'Te quiero ___ (= очень-очень).',                    correct: 'muchísimo' },
        { id: 'q3', prompt: 'Hace ___ frío hoy. ¡Brrr!',                         correct: 'mucho' },
        { id: 'q4', prompt: 'Tengo ___ ganas de verte.',                          correct: 'muchas' },
        { id: 'q5', prompt: 'Hay ___ tráfico en esta avenida.',                    correct: 'mucho' },
        { id: 'q6', prompt: 'Sus padres son ___ amables.',                          correct: 'muy' },
        { id: 'q7', prompt: 'Necesito ___ paciencia con este niño.',                correct: 'mucha' },
        { id: 'q8', prompt: 'En esta tienda venden libros ___ baratos (= очень дешёвые).', correct: 'muy' },
      ],
    },
  ],
};
