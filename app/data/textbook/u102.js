// ============================================================
// Unidad 102 — Adverbios de tiempo (2)
// ya, todavía, aún, todavía no / aún no, ya no.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u102 = {
  id: 'u102',
  number: 102,
  title: { es: 'ya, todavía, aún', topic: 'Adverbios de tiempo (2)' },
  topicRu: '«Уже» и «ещё»: ya, todavía, aún',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: '<em>todavía</em> y <em>aún</em> indican que una acción que comenzó en el pasado <strong>sigue siendo cierta</strong> en el presente.',
      ru: '<strong>todavía</strong> и <strong>aún</strong> переводятся как «ещё», «всё ещё». Означают, что начавшееся в прошлом <strong>продолжается</strong> сейчас. Это синонимы — выбирайте любое.',
      examples: [
        { es: 'Todavía trabajo en el estudio de Mónica.', ru: 'Я всё ещё работаю в студии Моники.' },
        { es: '¿Aún estás aquí? Creía que te habías ido.', ru: 'Ты всё ещё здесь? Я думал, ты ушёл.' },
        { es: 'Son las doce y todavía está durmiendo.', ru: 'Уже двенадцать, а он всё ещё спит.' },
      ],
    },
    {
      type: 'rule',
      es: '<em>ya no</em> indica que algo anterior <strong>ya no es cierto</strong> en el presente.',
      ru: '<strong>ya no</strong> = «уже не», «больше не». Означает, что то, что было раньше, <strong>сейчас прекратилось</strong>.',
      examples: [
        { es: 'Antes íbamos mucho a esquiar, pero ya no vamos casi nada.', ru: 'Раньше мы часто ездили кататься на лыжах, но теперь почти не ездим.' },
        { es: 'Ya no trabajo en la academia. Ahora trabajo en la universidad.', ru: 'Я больше не работаю в академии. Теперь работаю в университете.' },
        { es: 'Puedes salir ahora. Ya no llueve.', ru: 'Можешь выходить. Дождь уже кончился.' },
      ],
    },

    {
      type: 'heading',
      text: 'ya = «уже»: действие совершилось',
    },
    {
      type: 'rule',
      es: '<em>ya</em> indica que la acción o situación <strong>ya se ha realizado</strong>. Puede ir delante o detrás del verbo.',
      ru: '<strong>ya</strong> = «уже». Указывает, что действие <strong>уже совершилось</strong>. Может стоять до или после глагола.',
      examples: [
        { es: 'Ya he terminado. Podemos marcharnos.', ru: 'Я уже закончил. Можем идти.' },
        { es: 'Cuando llegué a casa de Damián, se había ido ya.', ru: 'Когда я пришёл к Дамиану, он уже ушёл.' },
        { es: '—¿Has hablado ya con Pedro? —Sí, hablé ayer.', ru: '— Ты уже поговорил с Педро? — Да, говорил вчера.' },
      ],
    },

    {
      type: 'heading',
      text: 'todavía no / aún no = «ещё не»',
    },
    {
      type: 'rule',
      es: '<em>todavía</em> y <em>aún</em> con verbo en negativo indican que la acción <strong>no se ha realizado</strong>. Pueden ir delante o detrás del verbo.',
      ru: '<strong>todavía no</strong> и <strong>aún no</strong> = «ещё не». Действие <strong>не произошло</strong>, но ожидается. Положение свободное — до или после глагола.',
      examples: [
        { es: 'Aún no he acabado. Espérame un momento.', ru: 'Я ещё не закончил. Подожди минуту.' },
        { es: 'Mar no ha encontrado trabajo todavía.', ru: 'Мар ещё не нашла работу.' },
        { es: '¿Todavía no te has vestido? Vamos a llegar tarde.', ru: 'Ты ещё не оделся? Опоздаем.' },
      ],
    },

    {
      type: 'table',
      caption: 'Сравнение четырёх случаев',
      columns: ['Конструкция', 'Что означает', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<strong>todavía / aún</strong> + утв.',     'действие <em>продолжается</em>',                  '<em>Todavía llueve.</em> «Ещё идёт дождь.»'],
        ['<strong>ya no</strong> + глагол',           'действие <em>прекратилось</em>',                  '<em>Ya no llueve.</em> «Дождь уже не идёт.»'],
        ['<strong>ya</strong> + глагол',              'действие <em>уже произошло</em>',                  '<em>Ya han comido.</em> «Они уже поели.»'],
        ['<strong>todavía no / aún no</strong> + гл.', 'действие <em>ещё не произошло</em>',              '<em>Todavía no han comido.</em> «Они ещё не ели.»'],
      ],
    },

    {
      type: 'heading',
      text: 'ya = «ahora, a partir de ahora»',
    },
    {
      type: 'rule',
      es: '<em>ya</em> también puede significar <em>ahora</em> o <em>a partir de ahora</em>. Se usa con <strong>presente</strong> o con <strong>futuro</strong>.',
      ru: '<strong>ya</strong> может значить «уже сейчас», «начиная с этого момента» (= ahora, a partir de ahora). С <em>presente</em> = «уже»; с <em>futuro</em> = «скоро, как-нибудь».',
      examples: [
        { es: '¡Ya me acuerdo! Tú eres Armando.', ru: 'Уже (= вот сейчас) вспомнил! Ты Армандо.' },
        { es: 'Ya no llueve. Ya podemos salir.', ru: 'Дождя больше нет. Уже можем выйти.' },
        { es: 'No te preocupes. Ya se arreglará todo.', ru: 'Не волнуйся. Всё ещё уладится.' },
      ],
    },
    {
      type: 'atencion',
      es: 'No confundas <em>ya</em> y <em>ya no</em>. <em>Ya he comido</em> = «уже поел»; <em>ya no como carne</em> = «больше не ем мясо».',
      ru: 'Различайте: <strong>ya</strong> + утвердительный глагол = «уже» (что-то произошло); <strong>ya no</strong> + глагол = «больше не» (что-то прекратилось). Вместе менять знак нельзя.',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '102.1',
      title: 'todavía, aún или ya no?',
      type: 'fill',
      instructions: 'Подставьте <em>todavía</em>, <em>aún</em> или <em>ya no</em> по смыслу. Если подходят оба «ещё», пишите любое.',
      questions: [
        { id: 'q1', prompt: 'No puedes irte. ___ te necesito.',                  correct: ['todavía', 'aún', 'Todavía', 'Aún'] },
        { id: 'q2', prompt: '—¿Está Berta? —No, ___ vive aquí.',                  correct: ['ya no', 'Ya no'], explanation: '«Больше не живёт» = ya no.' },
        { id: 'q3', prompt: '—¿Sigues jugando al tenis? —Sí, ___ juego de vez en cuando.', correct: ['todavía', 'aún', 'Todavía', 'Aún'] },
        { id: 'q4', prompt: '—¿Vas a la oficina? —No, ___ estoy de vacaciones.',  correct: ['todavía', 'aún', 'Todavía', 'Aún'] },
        { id: 'q5', prompt: 'Puedes irte. ___ te necesito (теперь не нужен).',     correct: ['Ya no', 'ya no'] },
        { id: 'q6', prompt: '—¿Me dejas la bici? —Lo siento, ___ tengo bici. Se me rompió.', correct: ['ya no', 'Ya no'] },
        { id: 'q7', prompt: '—¿Sigue estudiando griego? —Sí, ___ lo estudia. Le encanta.', correct: ['todavía', 'aún', 'Todavía', 'Aún'] },
      ],
    },

    {
      id: '102.2',
      title: 'ya или todavía no / aún no?',
      type: 'fill',
      instructions: 'Поставьте <em>ya</em> (действие совершилось) или <em>todavía no / aún no</em> (ещё не).',
      questions: [
        { id: 'q1', prompt: 'Estoy esperando a Lidia desde las seis, pero ___ ha llegado.', correct: ['todavía no', 'aún no', 'Todavía no', 'Aún no'], explanation: '«Ещё не пришла» = todavía no / aún no.' },
        { id: 'q2', prompt: 'Venid. ___ han abierto las puertas.',                          correct: ['Ya', 'ya'], explanation: '«Уже открыли» = ya.' },
        { id: 'q3', prompt: '—¿Qué quieres estudiar? — ___ lo sé (ещё не решил).',           correct: ['Todavía no', 'Aún no', 'todavía no', 'aún no'] },
        { id: 'q4', prompt: '—¿Sabes que Lorenzo se marcha a Chile? —Sí, ___ lo sé.',         correct: ['ya', 'Ya'] },
        { id: 'q5', prompt: '—¿Has leído el fichero que te mandé? —No, ___ lo he abierto.',   correct: ['todavía no', 'aún no', 'Todavía no', 'Aún no'] },
        { id: 'q6', prompt: '¿___ has pagado el alquiler? Se va a enfadar el casero.',         correct: ['Ya', 'ya'] },
        { id: 'q7', prompt: '—¿Ha vuelto Pilar de México? —No, ___ ha vuelto.',                correct: ['todavía no', 'aún no'] },
        { id: 'q8', prompt: '___ sé dónde está Viña. Me lo ha dicho Tomás.',                  correct: ['Ya', 'ya'] },
      ],
    },

    {
      id: '102.3',
      title: 'Перепишите фразу с <em>ya</em>',
      type: 'fill',
      instructions: 'Замените подчёркнутое выражение на <em>ya</em>. Сделайте необходимые изменения.',
      questions: [
        { id: 'q1', prompt: 'Puedes llamar <em>a partir de ahora</em>. →',  correct: ['Puedes llamar ya.', 'Ya puedes llamar.', 'Puedes llamar ya', 'Ya puedes llamar'] },
        { id: 'q2', prompt: 'Te diré algo <em>más adelante</em>. →',         correct: ['Ya te diré algo.', 'Te diré ya algo.', 'Ya te diré algo', 'Te diré ya algo'] },
        { id: 'q3', prompt: '<em>¡Ahora</em> lo entiendo! →',                correct: ['¡Ya lo entiendo!', '¡Ya lo entiendo'] },
        { id: 'q4', prompt: 'Hablaremos <em>otro día</em>. →',                correct: ['Ya hablaremos.', 'Hablaremos ya.', 'Ya hablaremos', 'Hablaremos ya'] },
        { id: 'q5', prompt: '<em>A partir de ahora</em> podemos comprar las entradas. →', correct: ['Ya podemos comprar las entradas.', 'Podemos comprar ya las entradas.', 'Ya podemos comprar las entradas', 'Podemos comprar ya las entradas'] },
        { id: 'q6', prompt: 'Os contestaré <em>más adelante</em>. →',         correct: ['Ya os contestaré.', 'Os contestaré ya.', 'Ya os contestaré', 'Os contestaré ya'] },
        { id: 'q7', prompt: '<em>Ahora</em> hay que irse. →',                  correct: ['Ya hay que irse.', 'Hay que irse ya.', 'Ya hay que irse', 'Hay que irse ya'] },
      ],
    },

    {
      id: '102.4',
      title: 'Сформулируйте вопрос',
      type: 'fill',
      instructions: 'По ответу составьте вопрос с <em>ya</em>, <em>todavía no</em> или <em>aún no</em>. Образец: <em>Sí, ya nos conocemos.</em> → <em>¿Se conocen ya ustedes?</em>',
      questions: [
        { id: 'q1', prompt: 'Sí, ya nos conocemos. → ¿___ ustedes?',                          correct: ['Se conocen ya', 'Ya se conocen', 'Se conocen ustedes ya'], explanation: 'Несколько вариантов порядка слов корректны.' },
        { id: 'q2', prompt: 'Sí, ya lo sé. → ¿___ ya?',                                       correct: ['Lo sabes', 'Ya lo sabes'] },
        { id: 'q3', prompt: 'No, aún no ha llegado Paloma. → ¿___ Paloma?',                    correct: ['Ha llegado ya', 'Ya ha llegado'] },
        { id: 'q4', prompt: 'No, todavía no hemos empezado las clases. → ¿___ las clases?',     correct: ['Habéis empezado ya', 'Ya habéis empezado'] },
        { id: 'q5', prompt: 'No, la comida no está lista todavía. → ¿___ la comida?',           correct: ['Está ya lista', 'Ya está lista', 'Está lista ya'] },
      ],
    },

    {
      id: '102.5',
      title: 'Отрицательная или утвердительная фраза?',
      type: 'choice',
      instructions: 'Выберите версию, которая соответствует подсказке.',
      questions: [
        { id: 'q1', prompt: '«Они ещё не пришли» →',
          options: ['Ya han llegado.', 'Todavía no han llegado.', 'Ya no han llegado.'], correct: 'Todavía no han llegado.' },
        { id: 'q2', prompt: '«Они уже больше не живут здесь» →',
          options: ['Ya viven aquí.', 'Todavía viven aquí.', 'Ya no viven aquí.'], correct: 'Ya no viven aquí.' },
        { id: 'q3', prompt: '«Они уже поели» →',
          options: ['Ya han comido.', 'Todavía no han comido.', 'Ya no comen.'], correct: 'Ya han comido.' },
        { id: 'q4', prompt: '«Они всё ещё едят» (= процесс продолжается) →',
          options: ['Ya comen.', 'Todavía comen.', 'Ya no comen.'], correct: 'Todavía comen.' },
        { id: 'q5', prompt: '«Я больше не работаю в банке» →',
          options: ['Ya trabajo en el banco.', 'Todavía no trabajo en el banco.', 'Ya no trabajo en el banco.'], correct: 'Ya no trabajo en el banco.' },
      ],
    },

    {
      id: '102.6',
      title: 'Сопоставьте',
      type: 'match',
      instructions: 'Подберите к каждой фразе подходящий смысл.',
      pool: ['действие совершилось', 'действие ещё не совершилось', 'действие продолжается', 'действие прекратилось'],
      questions: [
        { id: 'q1', prompt: '<em>Ya he comido.</em>',           correct: 'действие совершилось' },
        { id: 'q2', prompt: '<em>Todavía no he comido.</em>',   correct: 'действие ещё не совершилось' },
        { id: 'q3', prompt: '<em>Todavía como mucho pan.</em>', correct: 'действие продолжается' },
        { id: 'q4', prompt: '<em>Ya no como pan.</em>',         correct: 'действие прекратилось' },
      ],
    },

    {
      id: '102.7',
      title: 'Переведите смысл',
      type: 'choice',
      instructions: 'Какой русский перевод точнее?',
      questions: [
        { id: 'q1', prompt: '<em>¿Aún estás aquí?</em>',
          options: ['«Ты всё ещё здесь?»', '«Ты уже здесь?»', '«Тебя здесь больше нет?»'], correct: '«Ты всё ещё здесь?»' },
        { id: 'q2', prompt: '<em>Ya no llueve.</em>',
          options: ['«Уже идёт дождь.»', '«Дождь ещё идёт.»', '«Дождя больше нет.»'], correct: '«Дождя больше нет.»' },
        { id: 'q3', prompt: '<em>¿Has hablado ya con Pedro?</em>',
          options: ['«Ты уже говорил с Педро?»', '«Ты ещё не говорил с Педро?»'], correct: '«Ты уже говорил с Педро?»' },
        { id: 'q4', prompt: '<em>Mar no ha encontrado trabajo todavía.</em>',
          options: ['«Мар уже нашла работу.»', '«Мар ещё не нашла работу.»', '«Мар больше не ищет работу.»'], correct: '«Мар ещё не нашла работу.»' },
        { id: 'q5', prompt: '<em>¡Ya me acuerdo!</em>',
          options: ['«Уже не помню!»', '«Вот, теперь вспомнил!»', '«Я ещё помню.»'], correct: '«Вот, теперь вспомнил!»' },
      ],
    },

    {
      id: '102.8',
      title: '«Уже» (ya) или «ещё» (todavía)?',
      type: 'choice',
      instructions: 'Выберите подходящее наречие.',
      questions: [
        { id: 'q1', prompt: 'Ana ha cumplido 18; ___ es mayor de edad.',          options: ['ya', 'todavía'], correct: 'ya' },
        { id: 'q2', prompt: 'Mi hermano tiene 15; ___ es menor de edad.',         options: ['ya', 'todavía'], correct: 'todavía' },
        { id: 'q3', prompt: 'A las once ___ están durmiendo, no les llames.',     options: ['ya', 'todavía'], correct: 'todavía' },
        { id: 'q4', prompt: '—¿Llamamos a Marta? —No, es muy tarde, ___ se habrá acostado.', options: ['ya', 'todavía'], correct: 'ya' },
        { id: 'q5', prompt: 'Comed sin mí, ___ no tengo hambre (= больше не).',    options: ['ya', 'todavía'], correct: 'ya' },
        { id: 'q6', prompt: 'Aprendo francés desde hace un año, pero ___ no lo hablo bien.', options: ['ya', 'todavía'], correct: 'todavía' },
      ],
    },

    {
      id: '102.9',
      title: 'Поставьте правильный порядок слов',
      type: 'choice',
      instructions: 'Какой вариант звучит естественнее?',
      questions: [
        { id: 'q1', prompt: '«Я ещё не кончил» →',
          options: ['No aún he acabado.', 'Aún no he acabado.', 'No he aún acabado.'], correct: 'Aún no he acabado.' },
        { id: 'q2', prompt: '«Они уже пришли»',
          options: ['Ya han llegado.', 'Han ya llegado.', 'Han llegado ya.'], correct: 'Ya han llegado.', explanation: 'Оба варианта (<em>ya</em> до или после) корректны, но порядок «ya + verbo compuesto» — самый частотный.' },
        { id: 'q3', prompt: '«Я больше не работаю в банке»',
          options: ['No ya trabajo en el banco.', 'Ya no trabajo en el banco.', 'Ya trabajo no en el banco.'], correct: 'Ya no trabajo en el banco.' },
        { id: 'q4', prompt: '«Мар ещё не нашла работу»',
          options: ['Mar no ha encontrado trabajo todavía.', 'Mar ha no encontrado todavía trabajo.', 'Mar todavía ha encontrado trabajo no.'], correct: 'Mar no ha encontrado trabajo todavía.' },
      ],
    },

    {
      id: '102.10',
      title: 'Заполните пропуск',
      type: 'fill',
      instructions: 'Поставьте <em>ya</em>, <em>ya no</em>, <em>todavía</em>, <em>aún</em>, <em>todavía no</em> или <em>aún no</em>.',
      questions: [
        { id: 'q1', prompt: 'Antes fumaba mucho, pero ___ fumo (бросил).',                 correct: ['ya no'] },
        { id: 'q2', prompt: 'Son las diez y mis hijos ___ están durmiendo (всё ещё).',     correct: ['todavía', 'aún'] },
        { id: 'q3', prompt: 'No te preocupes, todo se arreglará ___ (потом, в неконкретное будущее).', correct: ['ya'] },
        { id: 'q4', prompt: '—¿Habéis cenado? —Sí, ___ hemos cenado.',                     correct: ['ya'] },
        { id: 'q5', prompt: '—¿Habéis cenado? —No, ___ hemos cenado.',                     correct: ['todavía no', 'aún no'] },
        { id: 'q6', prompt: '___ no llueve. Podemos salir.',                                correct: ['Ya'], explanation: '«Дождь уже не идёт» = Ya no llueve. Хотя именно <em>Ya</em> + <em>no</em> здесь.' },
        { id: 'q7', prompt: 'Mi abuela ___ tiene 90 años (всё ещё, держится).',             correct: ['todavía', 'aún'] },
        { id: 'q8', prompt: '___ no como dulces (бросил).',                                 correct: ['Ya'] },
      ],
    },

    {
      id: '102.11',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Послушайте и запишите услышанное полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Todavía trabajo en el estudio.',  correct: ['Todavía trabajo en el estudio.', 'Todavía trabajo en el estudio'] },
        { id: 'q2', prompt: '', audio: '¿Aún estás aquí?',                 correct: ['¿Aún estás aquí?', 'Aún estás aquí?', '¿Aún estás aquí'] },
        { id: 'q3', prompt: '', audio: 'Ya no llueve.',                     correct: ['Ya no llueve.', 'Ya no llueve'] },
        { id: 'q4', prompt: '', audio: 'Aún no he acabado.',                 correct: ['Aún no he acabado.', 'Aún no he acabado'] },
        { id: 'q5', prompt: '', audio: 'Ya he terminado.',                   correct: ['Ya he terminado.', 'Ya he terminado'] },
        { id: 'q6', prompt: '', audio: 'Todavía no han comido.',              correct: ['Todavía no han comido.', 'Todavía no han comido'] },
      ],
    },

    {
      id: '102.12',
      title: 'Где ошибка?',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Ya he comido.', 'Todavía no he comido.', 'Ya no he comido.', 'Aún no he comido.'], correct: 'Ya no he comido.', explanation: '<em>ya no he comido</em> в этом смысле не используется — для «ещё не ел» нужно <em>todavía no / aún no</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Ya no llueve.', 'Todavía llueve.', 'Aún llueve.', 'Ya llueve no.'], correct: 'Ya llueve no.', explanation: '<em>no</em> ставится между <em>ya</em> и глаголом: <em>ya no llueve</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Aún no he acabado.', 'No aún he acabado.', 'No he acabado aún.'], correct: 'No aún he acabado.', explanation: 'Перед <em>aún no</em> отрицание не дублируется.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Mar todavía no ha encontrado trabajo.', 'Mar no ha encontrado trabajo todavía.', 'Mar ha no encontrado trabajo todavía.'], correct: 'Mar ha no encontrado trabajo todavía.', explanation: '<em>no</em> идёт перед составной формой: <em>no ha encontrado</em>.' },
      ],
    },
  ],
};
