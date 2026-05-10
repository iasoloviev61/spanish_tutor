// ============================================================
// Unidad 78 — Imperativo con pronombres de complemento
// dámelo, no me lo des. Позиция местоимений CD / CI / CI+CD,
// порядок (CI перед CD), орфография: cómprala, dámelo.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u78 = {
  id: 'u78',
  number: 78,
  title: { es: 'dámelo, no me lo des', topic: 'Imperativo con pronombres de complemento' },
  topicRu: 'Императив с местоимениями: позиция, порядок CI+CD, ударения',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Con el imperativo, los pronombres de complemento <strong>cambian de sitio</strong> según la frase sea afirmativa o negativa: en <strong>afirmativo</strong> se pegan al verbo (<em>cómprala, dame, dímelo</em>); en <strong>negativo</strong> van delante (<em>no la compres, no me lo digas</em>).',
      ru: 'У императива местоимения-дополнения <strong>меняют место</strong>: в <strong>утвердительной</strong> форме они <strong>прилипают к глаголу справа</strong> (<em>cómprala, dame, dímelo</em>); в <strong>отрицательной</strong> — стоят <strong>перед</strong> глаголом (<em>no la compres, no me lo digas</em>).',
      examples: [
        { es: '¡Cómprala! Es muy bonita.', ru: 'Купи её! Очень красивая.' },
        { es: 'No la compres. A mí no me gusta.', ru: 'Не покупай её. Мне не нравится.' },
        { es: 'Préstame tu diccionario.', ru: 'Одолжи мне свой словарь.' },
        { es: 'No me prestes el tuyo, ya tengo dos.', ru: 'Не одалживай мне свой, у меня уже есть два.' },
      ],
    },

    {
      type: 'heading',
      text: 'Прямое дополнение (CD)',
    },
    {
      type: 'table',
      caption: 'comprar — pronombres CD (lo, la, los, las)',
      columns: ['Afirmativo (verbo + CD)', 'Negativo (no + CD + verbo)'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>cómpra<strong>la</strong></em>', '<em>no <strong>la</strong> compres</em>'],
        ['<em>cómpre<strong>la</strong></em>', '<em>no <strong>la</strong> compre</em>'],
        ['<em>compra<strong>dla</strong></em>', '<em>no <strong>la</strong> compréis</em>'],
        ['<em>cómpren<strong>la</strong></em>', '<em>no <strong>la</strong> compren</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'En afirmativo, al pegar el pronombre, casi siempre <strong>aparece tilde</strong> para conservar la sílaba tónica original: <em>compra → cómprala, compre → cómprela, compren → cómprenla</em>.',
      ru: 'Когда местоимение прилипает к утвердительной форме, для сохранения исходного ударения <strong>почти всегда ставится графический акцент</strong>: <em>compra → cómprala, compre → cómprela, compren → cómprenla</em>.',
    },

    {
      type: 'heading',
      text: 'Косвенное дополнение (CI)',
    },
    {
      type: 'table',
      caption: 'prestar — pronombres CI (me, te, le, nos, os, les)',
      columns: ['Afirmativo (verbo + CI)', 'Negativo (no + CI + verbo)'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>présta<strong>me</strong></em>', '<em>no <strong>me</strong> prestes</em>'],
        ['<em>préste<strong>me</strong></em>', '<em>no <strong>me</strong> preste</em>'],
        ['<em>presta<strong>dme</strong></em>', '<em>no <strong>me</strong> prestéis</em>'],
        ['<em>présten<strong>me</strong></em>', '<em>no <strong>me</strong> presten</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'Igual que con el CD: en afirmativo, pronombre pegado + tilde para mantener la pronunciación original.',
      ru: 'Те же правила: акцент сохраняется, чтобы ударение не «съехало».',
      examples: [
        { es: 'Dame ese libro, por favor.', ru: 'Дай мне эту книгу, пожалуйста.' },
        { es: 'Enséñales el mapa.', ru: 'Покажи им карту.' },
        { es: 'Dinos la verdad.', ru: 'Скажи нам правду.' },
      ],
    },

    {
      type: 'heading',
      text: 'CI + CD вместе: порядок «mне это»',
    },
    {
      type: 'table',
      caption: 'dar — CI + CD',
      columns: ['Afirmativo (verbo + CI + CD)', 'Negativo (no + CI + CD + verbo)'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>dá<strong>melo</strong></em>',   '<em>no <strong>me lo</strong> des</em>'],
        ['<em>dé<strong>melo</strong></em>',   '<em>no <strong>me lo</strong> dé</em>'],
        ['<em>dád<strong>melo</strong></em>',   '<em>no <strong>me lo</strong> deis</em>'],
        ['<em>dén<strong>melo</strong></em>',   '<em>no <strong>me lo</strong> den</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'Cuando aparecen <strong>dos pronombres</strong>, <strong>el CI va siempre antes del CD</strong>: <em>me + lo, te + la, nos + los, os + las…</em>',
      ru: 'Когда стоят <strong>два местоимения</strong>, <strong>CI идёт раньше CD</strong>: <em>me + lo, te + la, nos + los, os + las…</em> (мнемоника: «человеку — потом про вещь»).',
      examples: [
        { es: 'Regálaselo. (= dale el regalo a Jorge)', ru: 'Подари это ему.' },
        { es: '¿Te gustan las fotos? Mándamelas.', ru: 'Тебе нравятся фотографии? Отправь их мне.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Si CI = <em>le / les</em> y CD = <em>lo / la / los / las</em>, el CI <strong>cambia a <em>se</em></strong>: <em>le + lo → <strong>se</strong> lo, les + las → <strong>se</strong> las</em>. Por eso se dice <em>regálaselo</em>, no «*regálelelo».',
      ru: 'Если CI — <em>le / les</em>, а CD — <em>lo / la / los / las</em>, CI <strong>превращается в <em>se</em></strong>: <em>le + lo → <strong>se</strong> lo</em>. Отсюда <em>regálaselo</em>, а не «*regálelelo».',
    },

    {
      type: 'heading',
      text: 'Орфографические тонкости',
    },
    {
      type: 'table',
      caption: 'Правки при склейке',
      columns: ['Что происходит', 'Пример'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['<strong>Tilde</strong> почти всегда нужна', '<em>compra → cómprala</em>; <em>presta → préstame</em>; <em>da → dámelo</em>'],
        ['<strong>vosotros + os</strong>: −d падает', '<em>lavad + os → lavaos</em> (но: <em>idos</em>)'],
        ['<strong>nosotros + nos</strong>: −s падает', '<em>vamos + nos → vámonos</em>'],
        ['<strong>le/les + lo/la → se + lo/la</strong>', '<em>dale el libro → dáselo</em>'],
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '78.1',
      title: 'Только CD: «купи это / не покупай это»',
      type: 'fill',
      instructions: 'Замените существительное местоимением и поставьте в нужное место. Образец: <em>compra el pan → cómpralo / no lo compres</em>.',
      questions: [
        { id: 'q1', prompt: '<em>compra el libro</em> (tú +) →',     correct: 'cómpralo' },
        { id: 'q2', prompt: '<em>compra el libro</em> (tú −) →',     correct: 'no lo compres' },
        { id: 'q3', prompt: '<em>lee la carta</em> (tú +) →',         correct: 'léela' },
        { id: 'q4', prompt: '<em>lee la carta</em> (tú −) →',         correct: 'no la leas' },
        { id: 'q5', prompt: '<em>abre las ventanas</em> (tú +) →',    correct: 'ábrelas' },
        { id: 'q6', prompt: '<em>cierra los libros</em> (tú −) →',     correct: 'no los cierres' },
        { id: 'q7', prompt: '<em>haga la cena</em> (usted +) →',       correct: 'hágala' },
        { id: 'q8', prompt: '<em>pongan la mesa</em> (ustedes +) →',    correct: 'pónganla' },
      ],
    },

    {
      id: '78.2',
      title: 'Только CI: «дай мне / не давай мне»',
      type: 'fill',
      instructions: 'Подставьте местоимение CI в нужном месте.',
      questions: [
        { id: 'q1', prompt: '(<em>prestar</em>, tú +) ___ tu boli, por favor. (= a mí)',     correct: 'Préstame' },
        { id: 'q2', prompt: '(<em>prestar</em>, tú −) No ___ ___ tu coche. (= a mí)',         correct: 'me prestes' },
        { id: 'q3', prompt: '(<em>dar</em>, usted +) ___ ese libro, por favor. (= a mí)',      correct: 'Deme' },
        { id: 'q4', prompt: '(<em>enseñar</em>, tú +) ___ el mapa. (= a ellos)',                 correct: 'Enséñales' },
        { id: 'q5', prompt: '(<em>decir</em>, tú +) ___ la verdad. (= a nosotros)',                correct: 'Dinos' },
        { id: 'q6', prompt: '(<em>contar</em>, ustedes +) ___ una historia, por favor. (= a mí)',  correct: 'Cuéntenme' },
        { id: 'q7', prompt: '(<em>decir</em>, tú −) No ___ ___ nada de esto. (= a ella)',           correct: 'le digas' },
      ],
    },

    {
      id: '78.3',
      title: 'CI + CD вместе: «дай мне это»',
      type: 'fill',
      instructions: 'Соберите оба местоимения. Образец: <em>(dar) ___ el libro a mí (tú +)</em> → <em>dámelo</em>.',
      questions: [
        { id: 'q1', prompt: '<em>dar el regalo a mí</em> (tú +) →',                correct: 'dámelo' },
        { id: 'q2', prompt: '<em>dar el regalo a mí</em> (tú −) →',                correct: 'no me lo des' },
        { id: 'q3', prompt: '<em>regalar la entrada a Héctor</em> (tú −) →',        correct: 'no se la regales', explanation: '<em>le + la → se la</em>: «не дари ему/ей это».' },
        { id: 'q4', prompt: '<em>regalar la entrada a mí</em> (tú +) →',             correct: 'regálamela' },
        { id: 'q5', prompt: '<em>contar la historia a nosotros</em> (tú +) →',        correct: 'cuéntanosla' },
        { id: 'q6', prompt: '<em>enseñar las fotos a mí</em> (tú +) →',                correct: 'enséñamelas' },
        { id: 'q7', prompt: '<em>decir la verdad a ellos</em> (usted +) →',             correct: 'dígasela', explanation: '<em>les + la → se la</em>; форма <em>diga + se + la</em> с прилипанием = <em>dígasela</em>.' },
        { id: 'q8', prompt: '<em>decir la verdad a ellos</em> (usted −) →',             correct: 'no se la diga' },
      ],
    },

    {
      id: '78.4',
      title: '«Sí, hazla. — No, no la hagas.»',
      type: 'fill',
      instructions: 'Ответьте по образцу: сначала «да + сделай», потом «нет — пока не делай». Образец: <em>¿Hago la cena? — Sí, hazla ya. — No, no la hagas todavía.</em>',
      questions: [
        { id: 'q1', prompt: '¿Abrimos los regalos? — Sí, ___ ya.',           correct: 'abridlos' },
        { id: 'q2', prompt: '¿Abrimos los regalos? — No, no ___ ___ todavía.', correct: 'los abráis' },
        { id: 'q3', prompt: '¿Despierto a Andrés? — Sí, ___ ya.',              correct: 'despiértalo' },
        { id: 'q4', prompt: '¿Despierto a Andrés? — No, no ___ ___ todavía.',   correct: 'lo despiertes' },
        { id: 'q5', prompt: '¿Frío las patatas? — Sí, ___ ya.',                  correct: 'fríelas' },
        { id: 'q6', prompt: '¿Pongo el vídeo? — No, no ___ ___ todavía.',          correct: 'lo pongas' },
      ],
    },

    {
      id: '78.5',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?',  options: ['cómprala', 'no la compres', 'no cómprala', 'cómprenla'], correct: 'no cómprala', explanation: 'В отрицательной форме местоимение перед глаголом и форма — субхунтив: <em>no la compres</em>.' },
        { id: 'q2', prompt: 'Где ошибка?',  options: ['dámelo', 'no me lo des', 'dame lo', 'dáselo'], correct: 'dame lo', explanation: 'Все местоимения в утвердительной форме склеиваются вместе: <em>dámelo</em>.' },
        { id: 'q3', prompt: 'Где ошибка?',  options: ['regálaselo', 'no se lo regales', 'regálelelo', 'no se la regales'], correct: 'regálelelo', explanation: '<em>le + lo</em> всегда меняется на <em>se + lo</em>: <em>regálaselo</em>.' },
        { id: 'q4', prompt: 'Где ошибка?',  options: ['díganmelo', 'díganmeloo', 'díganmelo, por favor', 'no me lo digan'], correct: 'díganmeloo', explanation: 'Просто опечатка для проверки наблюдательности — двойная «o».' },
        { id: 'q5', prompt: 'Где ошибка?',  options: ['póngaselo', 'pónganselo', 'no se lo ponga', 'no se lo ponganlo'], correct: 'no se lo ponganlo', explanation: 'В отрицательной форме нельзя двойной CD: достаточно <em>no se lo pongan</em>.' },
      ],
    },

    {
      id: '78.6',
      title: 'Заменить именительные дополнения местоимениями',
      type: 'fill',
      instructions: 'Перепишите команду, заменив существительные на местоимения. Образец: <em>Apaga la luz</em> → <em>Apágala</em>.',
      questions: [
        { id: 'q1', prompt: '<em>Cierra la ventana.</em> →',                          correct: ['Ciérrala.', 'Ciérrala'] },
        { id: 'q2', prompt: '<em>Envía estas cartas.</em> →',                          correct: ['Envíalas.', 'Envíalas'] },
        { id: 'q3', prompt: '<em>Pásame el agua.</em> →',                              correct: ['Pásamela.', 'Pásamela'] },
        { id: 'q4', prompt: '<em>Hazle una foto a Raúl.</em> →',                        correct: ['Házsela.', 'Házsela'], explanation: '<em>le + una foto (la) → se + la</em>: <em>Házsela</em> (= сделай ему её).' },
        { id: 'q5', prompt: '<em>Cómprale unos sellos a Mario.</em> →',                  correct: ['Cómpraselos.', 'Cómpraselos'] },
        { id: 'q6', prompt: '<em>No enseñes el regalo a nadie.</em> →',                   correct: ['No lo enseñes a nadie.', 'No lo enseñes a nadie'] },
        { id: 'q7', prompt: '<em>Dile algo a Sebastián.</em> →',                          correct: ['Díselo.', 'Díselo'] },
      ],
    },

    {
      id: '78.7',
      title: 'CI + CD: какая форма верная?',
      type: 'choice',
      instructions: 'Выберите грамматически правильный вариант. Помните: <em>le + lo → se lo</em>.',
      questions: [
        { id: 'q1', prompt: 'Si te sobra una entrada, no ___ a Héctor. (regalar)',          options: ['la regales', 'se la regales', 'le la regales', 'le regales'], correct: 'se la regales' },
        { id: 'q2', prompt: 'Necesito saber la verdad: ___, doctor. (decir)',                 options: ['díme la', 'dígamela', 'me la diga', 'dígale me'], correct: 'dígamela' },
        { id: 'q3', prompt: 'Esa pluma es mía: ___, por favor. (dar)',                          options: ['dame la', 'dámela', 'me la das', 'da la mí'], correct: 'dámela' },
        { id: 'q4', prompt: 'Ese libro es de Rosa: no ___ a Pedro. (dar)',                       options: ['lo des', 'se lo des', 'le lo des', 'le des'], correct: 'se lo des' },
        { id: 'q5', prompt: 'Te he comprado una chaqueta: ___. (ponerse)',                        options: ['póntela', 'póntele', 'pón te la', 'la pongas'], correct: 'póntela', explanation: '<em>te (CI/refl.) + la (CD)</em>: <em>póntela</em>.' },
      ],
    },

    {
      id: '78.8',
      title: 'Recetas: пошаговая инструкция',
      type: 'fill',
      instructions: 'Поставьте глагол с нужным местоимением (CD или CI+CD). Образец: <em>(pelar) ___ unas patatas → pélalas</em>.',
      questions: [
        { id: 'q1', prompt: '(<em>pelar</em>, tú) Para hacer tortilla, ___ unas patatas.',          correct: 'pela' },
        { id: 'q2', prompt: '(<em>cortar</em>, tú) Luego ___ en láminas finas. (= las patatas)',      correct: 'córtalas' },
        { id: 'q3', prompt: '(<em>echar</em>, tú) ___ sal a las patatas.',                              correct: 'échales', explanation: '<em>echar a alguien (CI)</em> → <em>échales</em>.' },
        { id: 'q4', prompt: '(<em>freír</em>, tú) ___ en aceite caliente. (= las patatas)',              correct: 'fríelas' },
        { id: 'q5', prompt: '(<em>batir</em>, tú) ___ dos huevos y mezcla con la patata. (= los huevos)', correct: 'bátelos' },
        { id: 'q6', prompt: '(<em>poner</em>, tú) ___ en la sartén. (= la mezcla)',                       correct: 'ponla' },
        { id: 'q7', prompt: '(<em>dar</em>, tú) ___ la vuelta a la tortilla.',                              correct: 'dale' },
      ],
    },

    {
      id: '78.9',
      title: 'Из утвердительной — в отрицательную',
      type: 'fill',
      instructions: 'Перепишите команду в отрицательной форме (то же лицо, то же дополнение).',
      questions: [
        { id: 'q1', prompt: '<em>Cómpralo.</em> →',           correct: ['No lo compres.', 'No lo compres'] },
        { id: 'q2', prompt: '<em>Dámelo.</em> →',              correct: ['No me lo des.', 'No me lo des'] },
        { id: 'q3', prompt: '<em>Dáselo.</em> →',              correct: ['No se lo des.', 'No se lo des'] },
        { id: 'q4', prompt: '<em>Cuéntanoslo.</em> →',         correct: ['No nos lo cuentes.', 'No nos lo cuentes'] },
        { id: 'q5', prompt: '<em>Préstamela.</em> →',          correct: ['No me la prestes.', 'No me la prestes'] },
        { id: 'q6', prompt: '<em>Póngalo aquí.</em> (usted) →', correct: ['No lo ponga aquí.', 'No lo ponga aquí'] },
        { id: 'q7', prompt: '<em>Dénselo.</em> (ustedes) →',    correct: ['No se lo den.', 'No se lo den'] },
      ],
    },

    {
      id: '78.10',
      title: 'Сопоставьте: команда + ответное местоимение',
      type: 'match',
      instructions: 'Соедините утвердительную форму с её отрицательным эквивалентом.',
      pool: ['no la hagas', 'no me lo digas', 'no se lo des', 'no me la prestes', 'no os la pongáis', 'no se lo cuente'],
      questions: [
        { id: 'q1', prompt: '<em>hazla</em>',           correct: 'no la hagas' },
        { id: 'q2', prompt: '<em>dímelo</em>',          correct: 'no me lo digas' },
        { id: 'q3', prompt: '<em>dáselo</em>',          correct: 'no se lo des' },
        { id: 'q4', prompt: '<em>préstamela</em>',      correct: 'no me la prestes' },
        { id: 'q5', prompt: '<em>ponéosla</em>',         correct: 'no os la pongáis' },
        { id: 'q6', prompt: '<em>cuénteselo</em>',      correct: 'no se lo cuente' },
      ],
    },

    {
      id: '78.11',
      title: 'le/les + lo/la → se + lo/la',
      type: 'multi',
      instructions: 'Отметьте все формы, где замена <em>le/les → se</em> применена <strong>правильно</strong>.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Dáselo a Pedro.',
            'Dálelo a Pedro.',
            'No se lo digas a María.',
            'No le lo digas a María.',
            'Regálaselos a los niños.',
            'Regálelelos a los niños.',
            'Mándaselo por correo.',
            'Mándaselelo por correo.',
          ],
          correct: ['Dáselo a Pedro.', 'No se lo digas a María.', 'Regálaselos a los niños.', 'Mándaselo por correo.'],
          explanation: '<em>le/les + lo/la</em> всегда становится <em>se + lo/la</em>; форм <em>lelo, lelelo</em> в норме нет.',
        },
      ],
    },

    {
      id: '78.12',
      title: 'Аудио-диктант: команды с местоимениями',
      type: 'fill',
      instructions: 'Запишите услышанное полностью, с диакритикой и пунктуацией.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Dámelo, por favor.',                  correct: ['Dámelo, por favor.', 'Dámelo, por favor'] },
        { id: 'q2', prompt: '', audio: 'No me lo digas todavía.',              correct: ['No me lo digas todavía.', 'No me lo digas todavía'] },
        { id: 'q3', prompt: '', audio: 'Cómprala, es muy bonita.',              correct: ['Cómprala, es muy bonita.', 'Cómprala, es muy bonita'] },
        { id: 'q4', prompt: '', audio: 'Regálaselo a Jorge.',                    correct: ['Regálaselo a Jorge.', 'Regálaselo a Jorge'] },
        { id: 'q5', prompt: '', audio: 'No se lo des a nadie.',                  correct: ['No se lo des a nadie.', 'No se lo des a nadie'] },
        { id: 'q6', prompt: '', audio: 'Préstame tu diccionario.',                correct: ['Préstame tu diccionario.', 'Préstame tu diccionario'] },
        { id: 'q7', prompt: '', audio: 'Dígame su nombre, por favor.',             correct: ['Dígame su nombre, por favor.', 'Dígame su nombre, por favor'] },
      ],
    },
  ],
};
