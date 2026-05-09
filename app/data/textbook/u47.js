// ============================================================
// Unidad 47 — Contraste entre haber y estar
// "Hay un cine. Está en la calle Mayor"
// hay = существование (новое); está/están = расположение (известное).
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u47 = {
  id: 'u47',
  number: 47,
  title: { es: 'Hay un cine. Está en la calle Mayor', topic: 'Contraste entre haber y estar' },
  topicRu: 'Hay vs está/están: «есть/имеется» против «находится»',

  theory: [
    {
      type: 'rule',
      es: '<strong>Hay</strong> habla de la <em>existencia</em> de algo o alguien <strong>nuevo</strong>: lo mencionamos por primera vez. <strong>Está / están</strong> habla de la <em>situación</em> (dónde se encuentra) algo o alguien <strong>ya conocido</strong>.',
      ru: '<strong>Hay</strong> вводит новый объект: мы сообщаем, что он вообще существует (или спрашиваем об этом). <strong>Está / están</strong> рассказывает, где находится уже известный — упомянутый ранее или знакомый говорящему — объект.',
      examples: [
        { es: 'Hay un cine en la calle Mayor.', ru: 'На улице Mayor есть кинотеатр. (новая информация)' },
        { es: 'El cine América está en la calle Mayor.', ru: 'Кинотеатр «Америка» — на улице Mayor. (известный кинотеатр)' },
        { es: 'Hay un señor que quiere hablar con usted.', ru: 'Тут какой-то сеньор хочет с вами говорить. (я не знаю, кто это)' },
        { es: '—¿Está Marta? —Sí, está en la cocina.', ru: '—Марта дома? —Да, на кухне. (Марта известна)' },
      ],
    },
    {
      type: 'heading',
      text: 'Главное правило выбора',
    },
    {
      type: 'table',
      caption: 'hay vs está / están',
      columns: ['HAY', 'ESTÁ / ESTÁN'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['Существование «нового» предмета или человека', 'Местонахождение «известного» предмета или человека'],
        ['<em>Hay un restaurante nuevo en el barrio.</em>', '<em>El restaurante de Pepe está en la plaza.</em>'],
        ['<em>En Madrid hay muchos museos.</em>', '<em>El Museo del Prado está en Madrid.</em>'],
        ['<em>¿Dónde hay una farmacia?</em><br><span class="muted">(не знаю, где такая вообще есть)</span>', '<em>¿Dónde está la farmacia de tu tía?</em><br><span class="muted">(знаю, что есть; не знаю, где именно)</span>'],
        ['+ <em>un / una / unos / unas / dos, tres / muchos / poco / —</em>', '+ <em>el / la / los / las / mi / tu / nombre propio</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Después de <strong>hay</strong> NUNCA va <em>el / la / los / las</em> ni un posesivo (<em>mi, tu, su…</em>) ni un nombre propio. Si el sustantivo lleva determinante definido — siempre <em>está / están</em>.',
      ru: 'После <em>hay</em> НИКОГДА не идут определённый артикль <em>el / la / los / las</em>, притяжательные <em>mi, tu, su</em> и собственные имена. Если перед существительным стоит определённый артикль или притяжательное — нужно <em>está / están</em>.',
    },
    {
      type: 'table',
      caption: 'Формы согласования',
      columns: ['Тип', 'Hay (всегда так)', 'Estar — согласует число'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['Singular', '<em>Hay un supermercado.</em>', '<em>El supermercado está en la plaza.</em>'],
        ['Plural', '<em>Hay tres bares.</em>', '<em>Los bares están en el centro.</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'Para <em>preguntar dónde</em>: <strong>¿Dónde hay…?</strong> = «где (вообще) есть…?» (не знаю, существует ли); <strong>¿Dónde está / están…?</strong> = «где находится…?» (знаю, что существует).',
      ru: 'В вопросах: <em>¿Dónde hay…?</em> — «где можно найти/где есть какой-нибудь…?» (предмет неизвестен); <em>¿Dónde está / están…?</em> — «где (именно) находится известный мне предмет?».',
      examples: [
        { es: '¿Dónde hay una parada de autobús?', ru: 'Где есть остановка автобуса? (любая)' },
        { es: '¿Dónde está la parada de autobús más próxima?', ru: 'Где ближайшая остановка? (определённая)' },
        { es: '¿Dónde hay un banco?', ru: 'Где есть какой-нибудь банк?' },
        { es: '¿Dónde está el Banco de Galicia?', ru: 'Где находится «Banco de Galicia»? (конкретный)' },
      ],
    },
  ],

  exercises: [
    {
      id: '47.1',
      title: 'Hay или está / están?',
      type: 'choice',
      instructions: 'Выберите верную форму.',
      questions: [
        { id: 'q1', prompt: '___ un paquete para ti.',                     options: ['Hay', 'Está'], correct: 'Hay' },
        { id: 'q2', prompt: 'El paquete ___ en tu habitación.',             options: ['hay', 'está'], correct: 'está', explanation: 'Определённый артикль <em>el</em> → <em>está</em>.' },
        { id: 'q3', prompt: '¿Cuántos alumnos ___ en tu clase?',             options: ['hay', 'están'], correct: 'hay', explanation: '«Сколько» — речь об общем числе, новая информация.' },
        { id: 'q4', prompt: '—¿___ pan? —Sí, ___ en la despensa.',           options: ['Hay … hay', 'Hay … está', 'Está … está'], correct: 'Hay … está', explanation: 'Сначала проверяем существование, потом указываем место известного.' },
        { id: 'q5', prompt: '¿Qué ___ en esa caja?',                          options: ['hay', 'está'], correct: 'hay' },
        { id: 'q6', prompt: '¿___ una estación de metro por aquí?',            options: ['Hay', 'Está'], correct: 'Hay' },
        { id: 'q7', prompt: 'La cafetería del hospital ___ en el sótano.',     options: ['hay', 'está'], correct: 'está' },
        { id: 'q8', prompt: 'En este edificio ___ dos oficinas.',              options: ['hay', 'están'], correct: 'hay' },
        { id: 'q9', prompt: 'Las oficinas ___ en el primer piso.',              options: ['hay', 'están'], correct: 'están' },
        { id: 'q10', prompt: '___ muchos museos en Barcelona.',                  options: ['Hay', 'Están'], correct: 'Hay' },
      ],
    },

    {
      id: '47.2',
      title: 'Закройте предложение: hay, está или están?',
      type: 'fill',
      instructions: 'Запишите только глагол: <em>hay</em>, <em>está</em> или <em>están</em>.',
      questions: [
        { id: 'q1', prompt: '___ diez alumnos en mi clase.',                          correct: 'Hay' },
        { id: 'q2', prompt: '¿Dónde ___ la casa de tu abuelo?',                       correct: 'está' },
        { id: 'q3', prompt: '___ un cine nuevo en mi barrio.',                          correct: 'Hay' },
        { id: 'q4', prompt: 'El cine nuevo ___ en la calle de Bravo Murillo.',           correct: 'está' },
        { id: 'q5', prompt: 'Perdone, ¿___ la calle 67 por aquí?',                       correct: 'está' },
        { id: 'q6', prompt: 'Mis compañeros ___ en la cafetería.',                       correct: 'están' },
        { id: 'q7', prompt: '¿Dónde ___ la parada del 61?',                              correct: 'está' },
        { id: 'q8', prompt: '___ un departamento nuevo en la empresa.',                   correct: 'Hay' },
        { id: 'q9', prompt: 'El departamento nuevo ___ en el piso cuarto.',                correct: 'está' },
        { id: 'q10', prompt: '¿___ leche? —Sí, ___ un litro en la nevera.',                correct: 'Hay' },
        { id: 'q11', prompt: '¿Dónde ___ una parada de taxis?',                            correct: 'hay' },
        { id: 'q12', prompt: 'En mi pueblo ___ dos piscinas.',                              correct: 'hay' },
        { id: 'q13', prompt: 'Las piscinas ___ en las afueras.',                             correct: 'están' },
        { id: 'q14', prompt: '¿Dónde ___ la posada La Montaña?',                              correct: 'está' },
        { id: 'q15', prompt: '¿___ una papelería por aquí?',                                  correct: 'Hay' },
        { id: 'q16', prompt: 'En Bogotá ___ un museo del oro.',                                correct: 'hay' },
        { id: 'q17', prompt: '¿Dónde ___ mis llaves?',                                        correct: 'están', explanation: '<em>mis llaves</em> — притяжательное → <em>están</em>.' },
        { id: 'q18', prompt: 'En Lima ___ muchos edificios antiguos.',                          correct: 'hay' },
      ],
    },

    {
      id: '47.3',
      title: 'Постройте вопрос с ¿Dónde…?',
      type: 'fill',
      instructions: 'По образцу: <em>(una farmacia) → ¿Dónde hay una farmacia?</em>; <em>(la farmacia de Marta) → ¿Dónde está la farmacia de Marta?</em>',
      questions: [
        { id: 'q1', prompt: '<em>(una parada de autobús)</em> →',          correct: ['¿Dónde hay una parada de autobús?', '¿Dónde hay una parada de autobús'] },
        { id: 'q2', prompt: '<em>(la parada de autobús más próxima)</em> →', correct: ['¿Dónde está la parada de autobús más próxima?', '¿Dónde está la parada de autobús más próxima'] },
        { id: 'q3', prompt: '<em>(un banco)</em> →',                          correct: ['¿Dónde hay un banco?', '¿Dónde hay un banco'] },
        { id: 'q4', prompt: '<em>(el Banco de Galicia)</em> →',               correct: ['¿Dónde está el Banco de Galicia?', '¿Dónde está el Banco de Galicia'] },
        { id: 'q5', prompt: '<em>(las ruinas de Tikal)</em> →',                correct: ['¿Dónde están las ruinas de Tikal?', '¿Dónde están las ruinas de Tikal'] },
        { id: 'q6', prompt: '<em>(los cines Luna)</em> →',                       correct: ['¿Dónde están los cines Luna?', '¿Dónde están los cines Luna'] },
        { id: 'q7', prompt: '<em>(un Hospital Central)</em> →',                  correct: ['¿Dónde hay un hospital central?', '¿Dónde hay un Hospital Central?', '¿Dónde hay un hospital central'] },
        { id: 'q8', prompt: '<em>(el Hospital Central)</em> →',                   correct: ['¿Dónde está el Hospital Central?', '¿Dónde está el Hospital Central'] },
      ],
    },

    {
      id: '47.4',
      title: 'Какой смысл',
      type: 'choice',
      instructions: 'Что хочет узнать говорящий?',
      questions: [
        { id: 'q1', prompt: '<em>¿Hay una farmacia por aquí?</em>',           options: ['не знаю, есть ли вообще', 'знаю, что есть; не знаю где именно'], correct: 'не знаю, есть ли вообще' },
        { id: 'q2', prompt: '<em>¿Dónde está la farmacia de tu tía?</em>',     options: ['не знаю, есть ли вообще', 'знаю, что есть; не знаю где именно'], correct: 'знаю, что есть; не знаю где именно' },
        { id: 'q3', prompt: '<em>Hay un señor en la puerta.</em>',              options: ['какой-то незнакомый человек', 'известный сеньор'], correct: 'какой-то незнакомый человек' },
        { id: 'q4', prompt: '<em>El señor está en la recepción.</em>',           options: ['какой-то незнакомый человек', 'известный сеньор'], correct: 'известный сеньор' },
        { id: 'q5', prompt: '<em>En Madrid hay muchos museos.</em>',              options: ['общая характеристика города', 'указание адреса конкретного музея'], correct: 'общая характеристика города' },
        { id: 'q6', prompt: '<em>El Museo del Prado está en Madrid.</em>',         options: ['общая характеристика города', 'указание адреса конкретного музея'], correct: 'указание адреса конкретного музея' },
      ],
    },

    {
      id: '47.5',
      title: 'Сначала hay, потом está / están',
      type: 'fill',
      instructions: 'Допишите две фразы — первая вводит объект, вторая указывает место. Образец: <em>(un museo / centro) → Hay un museo. El museo está en el centro.</em>',
      questions: [
        { id: 'q1', prompt: '(un cine / la calle Mayor) →',           correct: ['Hay un cine. El cine está en la calle Mayor.', 'Hay un cine. El cine está en la calle Mayor'] },
        { id: 'q2', prompt: '(una farmacia / la esquina) →',           correct: ['Hay una farmacia. La farmacia está en la esquina.', 'Hay una farmacia. La farmacia está en la esquina'] },
        { id: 'q3', prompt: '(dos bares / el centro) →',                correct: ['Hay dos bares. Los bares están en el centro.', 'Hay dos bares. Los bares están en el centro'] },
        { id: 'q4', prompt: '(un supermercado / la plaza) →',            correct: ['Hay un supermercado. El supermercado está en la plaza.', 'Hay un supermercado. El supermercado está en la plaza'] },
        { id: 'q5', prompt: '(tres parques / las afueras) →',            correct: ['Hay tres parques. Los parques están en las afueras.', 'Hay tres parques. Los parques están en las afueras'] },
      ],
    },

    {
      id: '47.6',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой выбора <em>hay / estar</em>.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Hay un libro en la mesa.', 'El libro está en la mesa.', 'Hay el libro en la mesa.', 'Hay tres libros en la mesa.'], correct: 'Hay el libro en la mesa.', explanation: 'После <em>hay</em> нельзя <em>el</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['¿Dónde está la farmacia?', '¿Dónde hay la farmacia?', '¿Dónde hay una farmacia?', '¿Dónde están las farmacias?'], correct: '¿Dónde hay la farmacia?' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Hay mis llaves en la mesa.', 'Mis llaves están en la mesa.', 'Hay unas llaves en la mesa.', '¿Dónde están mis llaves?'], correct: 'Hay mis llaves en la mesa.', explanation: 'С притяжательным — только <em>están</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['El Museo del Prado está en Madrid.', 'En Madrid hay muchos museos.', 'En Madrid están muchos museos.', 'Hay un museo nuevo.'], correct: 'En Madrid están muchos museos.', explanation: 'Существование (много музеев) — <em>hay</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Hay un señor en la puerta.', 'El señor está en la puerta.', 'Hay el señor González en la puerta.', 'El señor González está en la puerta.'], correct: 'Hay el señor González en la puerta.', explanation: 'С именем собственным — только <em>está</em>.' },
      ],
    },

    {
      id: '47.7',
      title: 'Сопоставьте начало и конец',
      type: 'match',
      instructions: 'Подберите подходящее окончание.',
      pool: [
        'hay un cine.',
        'está en la plaza.',
        'están en el centro.',
        'hay muchos museos.',
        'está en la calle Mayor.',
        'hay una farmacia?',
      ],
      questions: [
        { id: 'q1', prompt: '<em>El supermercado…</em>',           correct: 'está en la plaza.' },
        { id: 'q2', prompt: '<em>Los bares…</em>',                  correct: 'están en el centro.' },
        { id: 'q3', prompt: '<em>En mi barrio…</em>',                correct: 'hay un cine.' },
        { id: 'q4', prompt: '<em>El cine América…</em>',              correct: 'está en la calle Mayor.' },
        { id: 'q5', prompt: '<em>En Madrid…</em>',                     correct: 'hay muchos museos.' },
        { id: 'q6', prompt: '<em>¿Dónde…</em>',                         correct: 'hay una farmacia?' },
      ],
    },

    {
      id: '47.8',
      title: 'Все правильные варианты',
      type: 'multi',
      instructions: 'Отметьте все фразы, в которых выбор <em>hay / está / están</em> сделан верно.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Hay un cine en mi barrio.',
            'Hay el cine en mi barrio.',
            'El cine está en la calle Mayor.',
            'El cine hay en la calle Mayor.',
            '¿Dónde hay una farmacia?',
            '¿Dónde está la farmacia?',
            '¿Dónde hay la farmacia?',
            'Mis llaves están en la mesa.',
            'Hay mis llaves en la mesa.',
            'En Madrid hay muchos museos.',
          ],
          correct: [
            'Hay un cine en mi barrio.',
            'El cine está en la calle Mayor.',
            '¿Dónde hay una farmacia?',
            '¿Dónde está la farmacia?',
            'Mis llaves están en la mesa.',
            'En Madrid hay muchos museos.',
          ],
          explanation: 'После <em>hay</em> — без определённого артикля и без <em>mi/tu/su</em>; со известным предметом или собственным именем — <em>está / están</em>.',
        },
      ],
    },

    {
      id: '47.9',
      title: 'Hay / está / están — диалоги',
      type: 'fill',
      instructions: 'Допишите фразу.',
      questions: [
        { id: 'q1', prompt: '—¿___ una panadería por aquí? —Sí, ___ una en la esquina.',     correct: ['Hay … hay', 'Hay, hay'], placeholder: 'Hay … hay' },
        { id: 'q2', prompt: '—¿Dónde ___ el baño? —___ al fondo del pasillo.',                 correct: ['está … Está', 'está, Está', 'está…Está'], placeholder: 'está … Está' },
        { id: 'q3', prompt: '—¿Cuántos cines ___ en tu barrio? —___ tres.',                     correct: ['hay … Hay', 'hay, Hay'], placeholder: 'hay … Hay' },
        { id: 'q4', prompt: '—¿Dónde ___ tus padres? —___ en casa.',                            correct: ['están … Están', 'están, Están'], placeholder: 'están … Están' },
        { id: 'q5', prompt: '—¿___ pan? —Sí, ___ en la cocina.',                                  correct: ['Hay … está', 'Hay, está'], placeholder: 'Hay … está' },
      ],
    },

    {
      id: '47.10',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Послушайте и запишите фразу полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Hay un cine en mi barrio.',           correct: ['Hay un cine en mi barrio.', 'Hay un cine en mi barrio'] },
        { id: 'q2', prompt: '', audio: 'El cine está en la calle Mayor.',      correct: ['El cine está en la calle Mayor.', 'El cine está en la calle Mayor'] },
        { id: 'q3', prompt: '', audio: '¿Dónde hay una farmacia?',              correct: ['¿Dónde hay una farmacia?', 'Dónde hay una farmacia?'] },
        { id: 'q4', prompt: '', audio: '¿Dónde está la farmacia más próxima?',   correct: ['¿Dónde está la farmacia más próxima?', 'Dónde está la farmacia más próxima?'] },
        { id: 'q5', prompt: '', audio: 'Mis llaves están en la mesa.',           correct: ['Mis llaves están en la mesa.', 'Mis llaves están en la mesa'] },
        { id: 'q6', prompt: '', audio: 'En Madrid hay muchos museos.',            correct: ['En Madrid hay muchos museos.', 'En Madrid hay muchos museos'] },
      ],
    },

    {
      id: '47.11',
      title: 'Где определитель — там estar',
      type: 'fill',
      instructions: 'Глагол: <em>hay</em>, <em>está</em> или <em>están</em>. Подсказка: <em>el / la / los / las / mi / tu / su</em> и собственные имена → <em>está / están</em>.',
      questions: [
        { id: 'q1', prompt: '___ Marta en casa? —Sí, ___ en la cocina.',          correct: ['Está … está', 'Está, está'] },
        { id: 'q2', prompt: 'En la calle ___ tres farmacias.',                      correct: 'hay' },
        { id: 'q3', prompt: 'La farmacia de Pepe ___ en la plaza.',                  correct: 'está' },
        { id: 'q4', prompt: '¿Cuántos huevos ___ en la nevera?',                      correct: 'hay' },
        { id: 'q5', prompt: 'Tu coche ___ en la calle.',                              correct: 'está' },
        { id: 'q6', prompt: 'Mis padres ___ en el salón.',                             correct: 'están' },
        { id: 'q7', prompt: '¿Dónde ___ los servicios?',                                correct: 'están' },
        { id: 'q8', prompt: '¿Dónde ___ unos servicios por aquí?',                      correct: 'hay' },
      ],
    },

    {
      id: '47.12',
      title: 'Перепишите фразу с правильным глаголом',
      type: 'fill',
      instructions: 'Перепишите так, как сказал бы носитель.',
      questions: [
        { id: 'q1', prompt: '<em>Hay el museo en el centro.</em> →',          correct: ['El museo está en el centro.', 'El museo está en el centro'] },
        { id: 'q2', prompt: '<em>Hay mi coche en la calle.</em> →',            correct: ['Mi coche está en la calle.', 'Mi coche está en la calle'] },
        { id: 'q3', prompt: '<em>El restaurante hay en la esquina.</em> →',     correct: ['El restaurante está en la esquina.', 'El restaurante está en la esquina'] },
        { id: 'q4', prompt: '<em>En Madrid están muchos parques.</em> →',        correct: ['En Madrid hay muchos parques.', 'En Madrid hay muchos parques'] },
        { id: 'q5', prompt: '<em>¿Dónde hay la parada del 61?</em> →',           correct: ['¿Dónde está la parada del 61?', 'Dónde está la parada del 61?'] },
        { id: 'q6', prompt: '<em>Hay el señor González en la recepción.</em> →', correct: ['El señor González está en la recepción.', 'El señor González está en la recepción'] },
      ],
    },
  ],
};
