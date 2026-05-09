// ============================================================
// Unidad 23 — Indefinidos (4): alguien, algo, nadie, nada
// Неопределённые местоимения «кто-то / что-то / никто / ничего».
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u23 = {
  id: 'u23',
  number: 23,
  title: { es: 'alguien, algo, nadie, nada', topic: 'Indefinidos (4)' },
  topicRu: 'Кто-то / что-то / никто / ничего',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Usamos <em>alguien, algo, nadie, nada</em> para referirnos a <strong>personas o cosas de identidad desconocida</strong> o no precisada.',
      ru: 'Эти четыре слова — местоимения, которые подменяют человека или вещь, имя которой не называется (или неизвестно, или неважно). По числам и родам они <strong>не меняются</strong>.',
      examples: [
        { es: 'Hay alguien detrás de la puerta.', ru: 'За дверью кто-то есть.' },
        { es: 'No hay nadie detrás de la puerta.', ru: 'За дверью никого нет.' },
        { es: 'Hay algo detrás de la puerta.', ru: 'За дверью что-то есть.' },
        { es: 'No hay nada detrás de la puerta.', ru: 'За дверью ничего нет.' },
      ],
    },

    {
      type: 'heading',
      text: 'Значения и распределение',
    },
    {
      type: 'table',
      caption: 'Кого / что',
      columns: ['Тип фразы', 'Люди (personas)', 'Вещи (cosas)'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['<strong>утвердит. и вопрос.</strong>', '<em>alguien</em><br><em>Alguien ha roto la silla.</em><br><em>¿Hay alguien ahí dentro?</em>', '<em>algo</em><br><em>Hay algo en la sopa.</em><br><em>¿Has dicho algo?</em>'],
        ['<strong>отрицательные</strong>',         '<em>nadie</em><br><em>No ha venido nadie.</em>',                                       '<em>nada</em><br><em>Hoy no he vendido nada.</em>'],
      ],
    },
    {
      type: 'rule',
      es: '<em>alguien</em> = una o varias personas, pero no se sabe quién. <em>nadie</em> = ninguna persona. <em>algo</em> = una o varias cosas (sin saber qué). <em>nada</em> = ninguna cosa.',
      ru: '<em>alguien</em> — кто-то один или несколько (неизвестно кто); <em>nadie</em> — никто; <em>algo</em> — что-то; <em>nada</em> — ничего. Все четыре относятся только к лицам или вещам обобщённо, конкретного признака или числа в них нет.',
      examples: [
        { es: 'Alguien quiere acompañarme al cine.', ru: 'Кто-то хочет пойти со мной в кино.' },
        { es: 'No conozco a nadie en esta ciudad.', ru: 'Я никого не знаю в этом городе.' },
        { es: '¿Quieres algo de comer?', ru: 'Хочешь чего-нибудь поесть?' },
        { es: 'No quiero nada, gracias.', ru: 'Ничего не хочу, спасибо.' },
      ],
    },

    {
      type: 'heading',
      text: 'Двойное отрицание',
    },
    {
      type: 'atencion',
      es: 'En español, <em>nadie / nada</em> pueden ir <strong>antes</strong> del verbo (sin <em>no</em>) o <strong>después</strong> (con <em>no</em> antes del verbo). Las dos construcciones son correctas.',
      ru: 'Если <em>nadie / nada</em> стоит до глагола, отрицание <em>no</em> не нужно: <em>Nadie me ha visto</em>. Если после глагола, перед глаголом обязательно <em>no</em>: <em>No me ha visto nadie</em>. По смыслу разницы нет — это типичное двойное отрицание.',
    },
    {
      type: 'table',
      caption: 'Два варианта',
      columns: ['Перед глаголом', 'После глагола'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>Nadie me ha visto.</em>',           '<em>No me ha visto nadie.</em>'],
        ['<em>Nada le importa.</em>',              '<em>No le importa nada.</em>'],
        ['<em>Nadie ha venido.</em>',              '<em>No ha venido nadie.</em>'],
      ],
    },

    {
      type: 'heading',
      text: 'algo de / nada de',
    },
    {
      type: 'rule',
      es: 'Usamos <em>algo de</em> y <em>nada de</em> + <strong>nombre no contable</strong> (queso, agua, pan...) para indicar cantidad: <em>algo de</em> = un poco; <em>nada de</em> = ninguna cantidad.',
      ru: '<em>algo de</em> + неисчисляемое = «немного чего-то»; <em>nada de</em> + неисчисляемое = «нисколько». Удобный способ говорить о малом или нулевом количестве жидкого, сыпучего, абстрактного.',
      examples: [
        { es: 'Hay algo de queso en la nevera.', ru: 'В холодильнике есть немного сыра.' },
        { es: 'No hay nada de queso.', ru: 'Сыра вообще нет.' },
        { es: 'Tengo algo de tiempo esta tarde.', ru: 'У меня есть немного времени сегодня вечером.' },
      ],
    },

    {
      type: 'rule',
      es: 'Se pueden usar <em>algo</em> y <em>nada</em> <strong>solos</strong> cuando el nombre al que se refieren ya se ha mencionado.',
      ru: 'Когда предмет уже назван, можно ответить просто <em>algo</em> или <em>nada</em>, без существительного.',
      examples: [
        { es: '—¿Tienes dinero? —Tengo algo. —Pues yo no tengo nada.', ru: '— У тебя есть деньги? — Немного есть. — А у меня — ничего.' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '23.1',
      title: 'hay / no hay + alguien / algo / nadie / nada',
      type: 'fill',
      instructions: 'Допишите фразу. Если на картинке предмет/человек есть — <em>hay alguien / algo</em>; если нет — <em>no hay nadie / nada</em>.',
      questions: [
        { id: 'q1', prompt: 'На столе нет ничего: ___ en la mesa.',                              correct: ['no hay nada'] },
        { id: 'q2', prompt: 'В моей комнате есть какой-то человек: ___ en mi habitación.',        correct: ['hay alguien'] },
        { id: 'q3', prompt: 'За деревом лежит что-то: ___ detrás del árbol.',                       correct: ['hay algo'] },
        { id: 'q4', prompt: 'В гостиной никого нет: ___ en el salón.',                                correct: ['no hay nadie'] },
        { id: 'q5', prompt: 'В книге что-то есть (закладка): ___ en el libro.',                       correct: ['hay algo'] },
        { id: 'q6', prompt: 'В бассейне никого: ___ en la piscina.',                                  correct: ['no hay nadie'] },
        { id: 'q7', prompt: 'В коробке ничего: ___ en la caja.',                                       correct: ['no hay nada'] },
        { id: 'q8', prompt: 'На дереве сидит кто-то: ___ en el árbol.',                                correct: ['hay alguien'] },
      ],
    },

    {
      id: '23.2',
      title: 'alguien, algo, nadie, nada',
      type: 'fill',
      instructions: 'Поставьте подходящее слово. Помните: в отрицании после глагола нужен ещё <em>no</em> перед глаголом.',
      questions: [
        { id: 'q1',  prompt: 'Hay ___ esperándole en recepción.',         correct: 'alguien' },
        { id: 'q2',  prompt: 'Me han dado ___ para ti.',                    correct: 'algo' },
        { id: 'q3',  prompt: '___ huele mal en la cocina.',                  correct: 'Algo' },
        { id: 'q4',  prompt: 'Hoy no he hecho ___ .',                         correct: 'nada' },
        { id: 'q5',  prompt: '¿Ha visto ___ mi bolígrafo?',                   correct: 'alguien' },
        { id: 'q6',  prompt: '___ quiere acompañarme al cine.',                correct: 'Alguien' },
        { id: 'q7',  prompt: 'Necesito que ___ me ayude con este ejercicio.', correct: 'alguien' },
        { id: 'q8',  prompt: 'Hay mucha gente en la calle. ¿Ha pasado ___ ?', correct: 'algo' },
        { id: 'q9',  prompt: 'No ha pasado ___ . Ha sido una falsa alarma.',   correct: 'nada' },
        { id: 'q10', prompt: 'No hay ___ en casa de Tomás. No contestan.',     correct: 'nadie' },
      ],
    },

    {
      id: '23.3',
      title: 'algo de / nada de + неисчисляемое',
      type: 'fill',
      instructions: 'Отвечайте <em>algo de ...</em> или <em>nada de ...</em> в зависимости от смысла. Используйте слова из вопроса.',
      questions: [
        { id: 'q1', prompt: '—¿Hay comida? —No queda ___ queso, pero queda jamón.',                  correct: 'nada de' },
        { id: 'q2', prompt: '—¿Queda pan? —Queda ___ , pero poco.',                                    correct: 'algo' , explanation: 'Существительное уже было — отвечаем коротко.' },
        { id: 'q3', prompt: '—¿Y leche? —No queda ___ . Hay zumo.',                                     correct: 'nada' },
        { id: 'q4', prompt: '—Necesitamos comprar comida. ¿Tenéis dinero? —Tenemos ___ , pero poco.',    correct: 'algo' },
        { id: 'q5', prompt: '—¿Qué podemos comprar? —Podemos comprar ___ pan y ___ queso.',              correct: ['algo de', 'algo de'], explanation: 'Оба пропуска — «немного чего-то».' },
        { id: 'q6', prompt: '—¿Y fruta? —No podemos comprar ___ fruta. No tenemos suficiente dinero.',    correct: 'nada de' },
      ],
    },

    {
      id: '23.4',
      title: 'Перепишите с другим порядком слов',
      type: 'fill',
      instructions: 'Если <em>nadie / nada</em> стоит после глагола, перед глаголом нужен <em>no</em>. Перепишите фразу, поменяв порядок.',
      questions: [
        { id: 'q1', prompt: '<em>Nadie me ha llamado.</em> →',                  correct: ['No me ha llamado nadie.', 'No me ha llamado nadie'] },
        { id: 'q2', prompt: '<em>Nada le interesa a Pablo.</em> →',              correct: ['No le interesa nada a Pablo.', 'A Pablo no le interesa nada.'] },
        { id: 'q3', prompt: '<em>No ha venido nadie a la fiesta.</em> →',         correct: ['Nadie ha venido a la fiesta.', 'Nadie ha venido a la fiesta'] },
        { id: 'q4', prompt: '<em>No queda nada en la nevera.</em> →',              correct: ['Nada queda en la nevera.', 'Nada queda en la nevera'] },
        { id: 'q5', prompt: '<em>Nadie sabe la respuesta.</em> →',                  correct: ['No sabe la respuesta nadie.', 'No sabe la respuesta nadie'] },
      ],
    },

    {
      id: '23.5',
      title: 'Утверждение или отрицание?',
      type: 'choice',
      instructions: 'Выберите подходящую пару. Помните: <em>alguien / algo</em> — для утверждений и вопросов; <em>nadie / nada</em> — для отрицания.',
      questions: [
        { id: 'q1', prompt: 'Я слышу: за дверью кто-то стоит.', options: ['Hay alguien detrás de la puerta.', 'No hay nadie detrás de la puerta.'], correct: 'Hay alguien detrás de la puerta.' },
        { id: 'q2', prompt: 'Я не голоден, ничего не хочу.', options: ['Quiero algo.', 'No quiero nada.'], correct: 'No quiero nada.' },
        { id: 'q3', prompt: 'Дома никого нет.', options: ['Hay alguien en casa.', 'No hay nadie en casa.'], correct: 'No hay nadie en casa.' },
        { id: 'q4', prompt: '— Скажешь что-нибудь? — Нет, ничего.', options: ['¿Dices algo? — No, nada.', '¿Dices nadie? — No, alguien.'], correct: '¿Dices algo? — No, nada.' },
        { id: 'q5', prompt: 'Кто-то постучал в дверь.', options: ['Alguien ha llamado a la puerta.', 'Nadie ha llamado a la puerta.'], correct: 'Alguien ha llamado a la puerta.' },
      ],
    },

    {
      id: '23.6',
      title: 'Сопоставьте',
      type: 'match',
      instructions: 'Подберите русский перевод каждому испанскому слову.',
      pool: ['кто-то', 'что-то', 'никто', 'ничего', 'немного (чего-то)', 'нисколько'],
      questions: [
        { id: 'q1', prompt: '<em>alguien</em>',     correct: 'кто-то' },
        { id: 'q2', prompt: '<em>algo</em>',         correct: 'что-то' },
        { id: 'q3', prompt: '<em>nadie</em>',         correct: 'никто' },
        { id: 'q4', prompt: '<em>nada</em>',          correct: 'ничего' },
        { id: 'q5', prompt: '<em>algo de</em>',       correct: 'немного (чего-то)' },
        { id: 'q6', prompt: '<em>nada de</em>',       correct: 'нисколько' },
      ],
    },

    {
      id: '23.7',
      title: 'Найдите грамматически верную фразу',
      type: 'multi',
      instructions: 'Отметьте все корректные варианты.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'No ha venido nadie.',
            'Nadie ha venido.',
            'Ha venido nadie.',
            'No ha venido alguien.',
            'No quiero nada.',
            'Nada quiero.',
            'Quiero nada.',
            'Hay algo en la mesa.',
            'No hay nada en la mesa.',
          ],
          correct: ['No ha venido nadie.', 'Nadie ha venido.', 'No quiero nada.', 'Nada quiero.', 'Hay algo en la mesa.', 'No hay nada en la mesa.'],
          explanation: 'Нельзя «Ha venido nadie» (нужно <em>no</em>), «No ha venido alguien» (в отрицании — <em>nadie</em>), «Quiero nada» (нужно <em>no</em>).',
        },
      ],
    },

    {
      id: '23.8',
      title: 'Превратите утверждение в отрицание',
      type: 'fill',
      instructions: 'Замените <em>alguien</em> на <em>nadie</em>, а <em>algo</em> на <em>nada</em>. Не забудьте про <em>no</em>.',
      questions: [
        { id: 'q1', prompt: '<em>Hay alguien en la cocina.</em> →',     correct: ['No hay nadie en la cocina.', 'No hay nadie en la cocina'] },
        { id: 'q2', prompt: '<em>He visto algo raro.</em> →',            correct: ['No he visto nada raro.', 'No he visto nada raro'] },
        { id: 'q3', prompt: '<em>Alguien me ha llamado.</em> →',          correct: ['Nadie me ha llamado.', 'No me ha llamado nadie.'] },
        { id: 'q4', prompt: '<em>Necesito algo de la tienda.</em> →',      correct: ['No necesito nada de la tienda.', 'No necesito nada de la tienda'] },
        { id: 'q5', prompt: '<em>Hay alguien en el jardín.</em> →',         correct: ['No hay nadie en el jardín.', 'No hay nadie en el jardín'] },
      ],
    },

    {
      id: '23.9',
      title: 'Допишите диалоги',
      type: 'fill',
      instructions: 'Поставьте подходящее <em>alguien / algo / nadie / nada</em> (или <em>algo de / nada de</em>).',
      questions: [
        { id: 'q1', prompt: '—¿Hay ___ en casa? —Sí, está mi hermana.',                          correct: 'alguien' },
        { id: 'q2', prompt: '—¿Quieres ___ para beber? —Sí, agua, por favor.',                    correct: 'algo' },
        { id: 'q3', prompt: '—¿Has comido ___ esta mañana? —No, ___ . No tengo hambre.',           correct: ['algo', 'nada'] },
        { id: 'q4', prompt: '—¿Conoces a ___ en Madrid? —No, no conozco a ___ todavía.',           correct: ['alguien', 'nadie'] },
        { id: 'q5', prompt: '—¿Hay ___ leche? —Sí, queda ___, pero poca.',                          correct: ['algo de', 'algo'] },
        { id: 'q6', prompt: '—¿Sabes ___ del concierto? —No, no sé ___ todavía.',                    correct: ['algo', 'nada'] },
      ],
    },

    {
      id: '23.10',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Послушайте и запишите услышанное.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Hay alguien en la puerta.',                  correct: ['Hay alguien en la puerta.', 'Hay alguien en la puerta'] },
        { id: 'q2', prompt: '', audio: 'No he visto nada raro.',                      correct: ['No he visto nada raro.', 'No he visto nada raro'] },
        { id: 'q3', prompt: '', audio: 'Nadie me ha llamado hoy.',                    correct: ['Nadie me ha llamado hoy.', 'Nadie me ha llamado hoy'] },
        { id: 'q4', prompt: '', audio: 'Hay algo de queso en la nevera.',              correct: ['Hay algo de queso en la nevera.', 'Hay algo de queso en la nevera'] },
        { id: 'q5', prompt: '', audio: 'No quiero nada, gracias.',                     correct: ['No quiero nada, gracias.', 'No quiero nada, gracias'] },
        { id: 'q6', prompt: '', audio: '¿Has dicho algo?',                              correct: ['¿Has dicho algo?', '¿Has dicho algo'] },
      ],
    },

    {
      id: '23.11',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза грамматически неудачна.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['No ha venido nadie.', 'Nadie ha venido.', 'Ha venido nadie.', 'Alguien ha venido.'], correct: 'Ha venido nadie.', explanation: '<em>nadie</em> после глагола требует <em>no</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['No quiero nada.', 'No quiero algo.', 'Quiero algo.', 'No quiero ningún libro.'], correct: 'No quiero algo.', explanation: 'В отрицании — <em>nada</em>, не <em>algo</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['¿Hay alguien?', '¿Hay nadie?', '¿No hay nadie?', '¿Hay algo?'], correct: '¿Hay nadie?', explanation: 'В вопросе без <em>no</em> — <em>alguien</em>; <em>nadie</em> требует отрицания.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['No tengo nada de tiempo.', 'Tengo algo de tiempo.', 'Tengo nada de tiempo.', 'No tengo tiempo.'], correct: 'Tengo nada de tiempo.', explanation: 'Без <em>no</em> перед глаголом не выйдет.' },
      ],
    },

    {
      id: '23.12',
      title: 'Переведите на испанский',
      type: 'fill',
      instructions: 'Запишите перевод фразы.',
      questions: [
        { id: 'q1', prompt: '«Никто не позвонил.»',                      correct: ['Nadie ha llamado.', 'No ha llamado nadie.'] },
        { id: 'q2', prompt: '«Я ничего не знаю.»',                          correct: ['No sé nada.', 'Nada sé.'] },
        { id: 'q3', prompt: '«В холодильнике есть немного молока.»',         correct: ['Hay algo de leche en la nevera.', 'En la nevera hay algo de leche.'] },
        { id: 'q4', prompt: '«Кто-то стоит у двери.»',                       correct: ['Alguien está en la puerta.', 'Hay alguien en la puerta.'] },
        { id: 'q5', prompt: '«У меня совсем нет времени.»',                   correct: ['No tengo nada de tiempo.', 'No tengo nada de tiempo'] },
      ],
    },
  ],
};
