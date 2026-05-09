// ============================================================
// Unidad 40 — Pronombres reflexivos y con valor recíproco
// me, te, se, nos, os, se.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u40 = {
  id: 'u40',
  number: 40,
  title: { es: 'me ducho, nos queremos', topic: 'Pronombres reflexivos y con valor recíproco' },
  topicRu: 'Возвратные и взаимные местоимения',

  theory: [
    {
      type: 'rule',
      es: '<em>Me, te, se, nos, os, se</em> son <strong>pronombres reflexivos</strong>. Se usan cuando la <em>acción del verbo</em> recae sobre la <strong>misma persona</strong> que la realiza, o sobre <strong>una parte de su cuerpo o de su ropa</strong>.',
      ru: 'Возвратные местоимения нужны, когда субъект и объект — <strong>один и тот же человек</strong>: «я моюсь сам(а)», «он бреется», «мы одеваемся». Сюда же — действия над <em>своей</em> частью тела или <em>своей</em> одеждой («мою <em>себе</em> голову», «надеваем <em>на себя</em> халат»).',
      examples: [
        { es: '<strong>Me</strong> ducho todos los días.', ru: 'Я принимаю душ каждый день.' },
        { es: 'Ricardo <strong>se</strong> afeita todas las mañanas.', ru: 'Рикардо бреется каждое утро.' },
        { es: '<strong>Me</strong> lavo el pelo.', ru: 'Я мою себе волосы.' },
        { es: '<strong>Nos</strong> ponemos una bata para trabajar.', ru: 'Надеваем (на себя) халат для работы.' },
      ],
    },
    {
      type: 'heading',
      text: 'Формы',
    },
    {
      type: 'table',
      caption: 'Pronombres reflexivos',
      columns: ['Лицо', 'SINGULAR', 'PLURAL'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['1.ª',                          '(yo) <em>me</em>',                          '(nosotros, -as) <em>nos</em>'],
        ['2.ª (близко)',                 '(tú) <em>te</em>',                          '(vosotros, -as) <em>os</em>'],
        ['3.ª / usted, ustedes',          '(él, ella, usted) <em>se</em>',              '(ellos, ellas, ustedes) <em>se</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'En tiempos compuestos y con verbos conjugados, el reflexivo va <strong>delante</strong> del verbo: <em>(no) me, te, se… + verbo</em>. Con <em>imperativo afirmativo, infinitivo</em> y <em>gerundio</em>, va <strong>al final</strong>: <em>levántate, voy a ducharme, está peinándose</em>. (▶ Unidad 39.)',
      ru: 'Возвратное местоимение ведёт себя как обычное местоимение-дополнение: с спрягаемым глаголом — спереди (<em>me ducho</em>, <em>no se afeita</em>); с инфинитивом, повелительным утвердительным и герундием — сзади одним словом (<em>ducharme</em>, <em>levántate</em>, <em>peinándose</em>).',
      examples: [
        { es: '<strong>Me</strong> levanto a las siete.', ru: 'Я встаю в семь.' },
        { es: 'Voy a ducharme.', ru: 'Сейчас приму душ.' },
        { es: 'Está peinándo<strong>se</strong>.', ru: 'Причёсывается.' },
        { es: '¡Levánta<strong>te</strong> ya!', ru: 'Вставай уже!' },
      ],
    },
    {
      type: 'heading',
      text: 'Сравните: возвратное vs обычное',
    },
    {
      type: 'table',
      caption: 'reflexivo / no reflexivo',
      columns: ['Возвратное (= над собой)', 'Невозвратное (= над другим)'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>Me afeito</em> todas las mañanas.',                 '<em>Afeito</em> a unas seis personas todas las mañanas.'],
        ['<em>Rut se viste</em> después de desayunar.',            '<em>Rut viste a los niños</em> después de desayunar.'],
        ['<em>Antón y yo nos quemamos</em> con unas cerillas.',    '<em>Quemamos unos troncos</em> en la chimenea.'],
        ['<em>Me lavo</em> la cara.',                              '<em>Lavo</em> la ropa de mi hijo.'],
      ],
    },
    {
      type: 'heading',
      text: 'Взаимное значение: nos / os / se',
    },
    {
      type: 'rule',
      es: '<em>Nos, os, se</em> también se usan para indicar que la acción se realiza entre <strong>dos o más personas</strong> de manera <em>recíproca</em>: «yo a ti y tú a mí». El sujeto es siempre plural.',
      ru: 'Те же местоимения <em>nos / os / se</em> используются для <em>взаимного</em> значения: «друг друга». Подлежащее тогда всегда во множественном числе. По-русски это «друг друга», «друг друга»/«себя» в смысле «между собой».',
      examples: [
        { es: '<strong>Nos</strong> queremos. (= Ella me quiere a mí y yo la quiero a ella.)', ru: 'Мы любим друг друга.' },
        { es: '¿<strong>Os</strong> conocéis Marisa y tú?', ru: 'Вы знакомы — ты и Мариса?' },
        { es: 'Juan y su padre <strong>se</strong> entienden muy bien.', ru: 'Хуан и его отец понимают друг друга.' },
        { es: 'Felipe y David <strong>se</strong> saludaron.', ru: 'Фелипе и Давид поздоровались (друг с другом).' },
      ],
    },
    {
      type: 'atencion',
      es: 'A veces el contexto deja ambiguo si la lectura es <em>reflexiva</em> o <em>recíproca</em>: <em>Se miran</em> = «они смотрят на себя (каждый в своём зеркале)» o «они смотрят друг на друга». Si hace falta aclarar, se añade <em>el uno al otro / a sí mismo / mutuamente</em>.',
      ru: 'Иногда фраза двусмысленна: <em>Se miran</em> может значить и «смотрят каждый на себя», и «смотрят друг на друга». Чтобы уточнить, добавляют <em>el uno al otro / mutuamente</em> (для взаимного) или <em>a sí mismo</em> (для возвратного).',
    },
    {
      type: 'heading',
      text: 'Когда возвратного НЕ нужно',
    },
    {
      type: 'rule',
      es: 'Si la acción recae sobre <strong>otra persona</strong> (no sobre el sujeto), el verbo se usa <em>sin</em> reflexivo: <em>Sandra mira al espejo</em> (= смотрит на зеркало как на предмет — без <em>se</em>) vs <em>Sandra se mira en el espejo</em> (= смотрит на себя в зеркале).',
      ru: 'Если действие направлено на кого-то <em>другого</em> (или на предмет в обычном смысле), возвратное местоимение НЕ ставится. Сравните: <em>Juan corta el pan</em> «Хуан режет хлеб» (обычное) — <em>Juan se corta con un cuchillo</em> «Хуан режется ножом» (возвратное, действие на себе). Главное — кого / что задевает действие.',
      examples: [
        { es: 'Rosa <strong>se</strong> cortó con un cuchillo. (= порезалась)', ru: 'Действие на себе.' },
        { es: 'Juan cortó el pan. (— ничего)', ru: 'Обычное действие над предметом.' },
        { es: 'Mi hermana y yo <strong>nos</strong> quemamos. (= обожглись)', ru: 'Возвратное.' },
        { es: 'Quemamos las cartas viejas. (— ничего)', ru: 'Сжигаем письма — это объект.' },
      ],
    },
  ],

  exercises: [
    {
      id: '40.1',
      title: 'Поставьте me, te, se… только если нужно',
      type: 'fill',
      instructions: 'Допишите возвратное местоимение или поставьте <code>—</code>, если оно не требуется. Решайте по смыслу: действие направлено на самого себя — местоимение нужно.',
      questions: [
        { id: 'q1', prompt: 'Rosa ___ cortó con un cuchillo ayer.',           correct: 'se' },
        { id: 'q2', prompt: 'Sandra ___ mira mucho al espejo.',                correct: 'se', explanation: '«Смотрит на себя в зеркале» → возвратное.' },
        { id: 'q3', prompt: 'Juan ___ cortó el pan con su navaja.',             correct: '—' },
        { id: 'q4', prompt: 'No ___ mires tanto al espejo, Saúl.',                correct: 'te' },
        { id: 'q5', prompt: '¿Cuándo ___ duchan los niños?',                       correct: 'se' },
        { id: 'q6', prompt: 'Mi hermana y yo ___ quemamos cocinando.',              correct: 'nos' },
        { id: 'q7', prompt: 'Roberto ___ ha quemado las cartas de Aurora.',           correct: '—' },
        { id: 'q8', prompt: 'Julio y Pedro ___ saludaron en la fiesta.',                correct: 'se', explanation: 'Взаимное.' },
        { id: 'q9', prompt: '¿Quién ___ ha tirado mis gafas a la basura?',                correct: '—' },
        { id: 'q10', prompt: '¿Por qué ___ pone usted el sombrero?',                       correct: 'se' },
        { id: 'q11', prompt: 'Mira. (Yo) ___ veo en el agua.',                              correct: 'me' },
        { id: 'q12', prompt: '¿Qué ___ ves en el agua?',                                      correct: '—', explanation: '«Что ты видишь в воде?» — обычное действие над «что».' },
        { id: 'q13', prompt: '¿Cuándo ___ lavas el pelo, Sonia?',                              correct: 'te' },
        { id: 'q14', prompt: '¿Vosotros ___ afeitáis todos los días?',                          correct: 'os' },
        { id: 'q15', prompt: 'Alicia ___ rompió una pierna esquiando.',                          correct: 'se' },
      ],
    },

    {
      id: '40.2',
      title: 'Перепишите со взаимным местоимением',
      type: 'fill',
      instructions: 'Перепишите фразу с <em>nos, os, se</em>. Образец: <em>Felipe saludó a David y David saludó a Felipe</em> → <em>Felipe y David se saludaron</em>.',
      questions: [
        { id: 'q1', prompt: 'Roque no habla a Julio y Julio no habla a Roque. →',          correct: ['Roque y Julio no se hablan.', 'Roque y Julio no se hablan'] },
        { id: 'q2', prompt: 'Roque te quiere a ti y tú quieres a Roque. →',                  correct: ['Roque y tú os queréis.', 'Roque y tú os queréis', 'Tú y Roque os queréis.', 'Tú y Roque os queréis'] },
        { id: 'q3', prompt: 'Sofía escribe a Lina y Lina escribe a Sofía. →',                 correct: ['Sofía y Lina se escriben.', 'Sofía y Lina se escriben'] },
        { id: 'q4', prompt: 'Andrés me conoce muy bien a mí y yo conozco muy bien a Andrés. →', correct: ['Andrés y yo nos conocemos muy bien.', 'Andrés y yo nos conocemos muy bien'] },
        { id: 'q5', prompt: 'Rodrigo ayuda a su hermana y su hermana ayuda a Rodrigo. →',         correct: ['Rodrigo y su hermana se ayudan.', 'Rodrigo y su hermana se ayudan'] },
        { id: 'q6', prompt: 'En Navidad, mi mujer me hace un regalo y yo le hago un regalo a ella. →', correct: ['En Navidad, mi mujer y yo nos hacemos un regalo.', 'En Navidad, mi mujer y yo nos hacemos un regalo'] },
        { id: 'q7', prompt: 'Tus amigos te ven a ti y tú los ves a ellos los domingos. →',              correct: ['Tus amigos y tú os veis los domingos.', 'Tus amigos y tú os veis los domingos', 'Vosotros os veis los domingos.', 'Vosotros os veis los domingos'] },
      ],
    },

    {
      id: '40.3',
      title: 'me / te / se… когда нужно',
      type: 'fill',
      instructions: 'Допишите местоимение или <code>—</code>. Помните: если действие направлено на самого/между собой — местоимение нужно.',
      questions: [
        { id: 'q1', prompt: '(Yo) ___ conozco muy bien.',                       correct: 'Me' },
        { id: 'q2', prompt: 'Teresa y Antonio ___ conocen muy bien.',            correct: 'se', explanation: 'Взаимное.' },
        { id: 'q3', prompt: '___ conozco muy bien a mis hijos.',                  correct: '—', explanation: '«Знаю своих детей» — обычное действие.' },
        { id: 'q4', prompt: '¿Por qué no ___ quieren Isabel y Leo?',                correct: 'se' },
        { id: 'q5', prompt: '¿Por qué no ___ quieres a tu hermano?',                  correct: '—' },
        { id: 'q6', prompt: '¿Por qué ___ peleáis tú y Juan?',                          correct: 'os' },
        { id: 'q7', prompt: '¿___ veis mucho Alfonso y tú?',                              correct: 'Os' },
        { id: 'q8', prompt: 'Raúl y Teresa no ___ hablan.',                                 correct: 'se' },
        { id: 'q9', prompt: '¿___ ve usted en el espejo?',                                    correct: 'Se' },
        { id: 'q10', prompt: 'María y Alfredo ___ ven todos los días.',                          correct: 'se' },
        { id: 'q11', prompt: '¿Por qué no ___ vistes, Rosa? Es tarde.',                            correct: 'te' },
        { id: 'q12', prompt: '¿___ has vestido ya a los niños, Jaime?',                              correct: '—', explanation: '«Одел детей» — обычное действие, без возвратного.' },
      ],
    },

    {
      id: '40.4',
      title: 'Сопоставьте лицо и местоимение',
      type: 'match',
      instructions: 'Подберите для каждого подлежащего соответствующее возвратное местоимение.',
      pool: ['me', 'te', 'se', 'nos', 'os'],
      questions: [
        { id: 'q1', prompt: 'yo',                       correct: 'me' },
        { id: 'q2', prompt: 'tú',                       correct: 'te' },
        { id: 'q3', prompt: 'él, ella, usted',           correct: 'se' },
        { id: 'q4', prompt: 'nosotros, nosotras',        correct: 'nos' },
        { id: 'q5', prompt: 'vosotros, vosotras',         correct: 'os' },
        { id: 'q6', prompt: 'ellos, ellas, ustedes',      correct: 'se' },
      ],
    },

    {
      id: '40.5',
      title: 'Выберите верный вариант',
      type: 'choice',
      instructions: 'Возвратное или невозвратное?',
      questions: [
        { id: 'q1', prompt: 'Mamá, ___ los niños después de cenar.',          options: ['acuesta', 'se acuesta'], correct: 'acuesta', explanation: '«Укладывает детей» — обычное действие.' },
        { id: 'q2', prompt: 'Yo siempre ___ a las once.',                       options: ['acuesto', 'me acuesto'], correct: 'me acuesto' },
        { id: 'q3', prompt: 'El barbero ___ a sus clientes con cuidado.',        options: ['afeita', 'se afeita'], correct: 'afeita' },
        { id: 'q4', prompt: 'Mi padre ___ con la maquinilla nueva.',              options: ['afeita', 'se afeita'], correct: 'se afeita' },
        { id: 'q5', prompt: 'Mi hijo ___ las manos antes de comer.',                options: ['lava', 'se lava'], correct: 'se lava' },
        { id: 'q6', prompt: 'Mi madre ___ los platos cada noche.',                    options: ['lava', 'se lava'], correct: 'lava' },
        { id: 'q7', prompt: 'Lola ___ una falda para la fiesta.',                       options: ['pone', 'se pone'], correct: 'se pone', explanation: '«Надеть на себя» → возвратное.' },
        { id: 'q8', prompt: 'Lola ___ la mesa para la cena.',                              options: ['pone', 'se pone'], correct: 'pone', explanation: '«Накрыть на стол» — обычное.' },
      ],
    },

    {
      id: '40.6',
      title: 'Напишите фразу со взаимным «друг друга»',
      type: 'fill',
      instructions: 'Сократите фразу до глагола с местоимением <em>se / nos / os</em>. Образец: <em>Мы пишем друг другу</em> → <em>Nos escribimos.</em>',
      questions: [
        { id: 'q1', prompt: 'Мы любим друг друга. →',                  correct: ['Nos queremos.', 'Nos queremos'] },
        { id: 'q2', prompt: 'Они звонят друг другу каждый день. →',     correct: ['Se llaman cada día.', 'Se llaman todos los días.', 'Se llaman cada día', 'Se llaman todos los días'] },
        { id: 'q3', prompt: 'Вы (vosotros) часто встречаетесь? →',        correct: ['¿Os veis a menudo?', '¿Os veis mucho?', '¿Os veis a menudo?', '¿Os veis mucho?'] },
        { id: 'q4', prompt: 'Они (ellos) поздоровались. →',                 correct: ['Se saludaron.', 'Se saludaron'] },
        { id: 'q5', prompt: 'Мы хорошо понимаем друг друга. →',                correct: ['Nos entendemos bien.', 'Nos entendemos bien'] },
      ],
    },

    {
      id: '40.7',
      title: 'Возвратное или нет — отметьте все верные фразы',
      type: 'multi',
      instructions: 'Отметьте все грамматически правильные фразы (по смыслу).',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Me lavo las manos.',
            'Lavo las manos.',
            'Lavo el coche.',
            'Me lavo el coche.',
            'Mi madre se viste a los niños.',
            'Mi madre viste a los niños.',
            'Mi madre se viste rápido.',
            'Nos peinamos antes de salir.',
            'Peinamos antes de salir.',
          ],
          correct: [
            'Me lavo las manos.',
            'Lavo el coche.',
            'Mi madre viste a los niños.',
            'Mi madre se viste rápido.',
            'Nos peinamos antes de salir.',
          ],
          explanation: '«Lavo las manos» без местоимения звучит так, будто моют чьи-то чужие руки в общем смысле — нужно <em>me lavo las manos</em>. «Me lavo el coche» — машина не часть тела, без <em>me</em>. «Mi madre se viste a los niños» — нельзя одновременно <em>se</em> и <em>a los niños</em>: либо <em>viste a los niños</em>, либо <em>se viste</em>.',
        },
      ],
    },

    {
      id: '40.8',
      title: 'Возвратные глаголы про режим дня',
      type: 'fill',
      instructions: 'Допишите глагол в нужной форме <em>presente</em> с возвратным местоимением.',
      questions: [
        { id: 'q1', prompt: '(Yo, levantarse) ___ a las siete.',           correct: 'Me levanto' },
        { id: 'q2', prompt: '(Tú, ducharse) ___ por la mañana.',             correct: 'Te duchas' },
        { id: 'q3', prompt: '(Mi padre, afeitarse) ___ todos los días.',      correct: 'Se afeita' },
        { id: 'q4', prompt: '(Nosotros, vestirse) ___ rápido.',                 correct: 'Nos vestimos' },
        { id: 'q5', prompt: '(Vosotros, peinarse) ___ antes de salir.',           correct: 'Os peináis' },
        { id: 'q6', prompt: '(Mis hijos, acostarse) ___ a las nueve.',              correct: 'Se acuestan' },
        { id: 'q7', prompt: '(Yo, lavarse) ___ los dientes después de comer.',         correct: 'Me lavo' },
        { id: 'q8', prompt: '(Tú, cepillarse) ___ el pelo cada mañana.',                 correct: 'Te cepillas' },
      ],
    },

    {
      id: '40.9',
      title: 'Сравните: возвратное / взаимное',
      type: 'choice',
      instructions: 'Какое из значений у местоимения в данном предложении?',
      questions: [
        { id: 'q1', prompt: '<em>Carmen y Luis se quieren.</em>',         options: ['возвратное (каждый сам себя)', 'взаимное (друг друга)'], correct: 'взаимное (друг друга)' },
        { id: 'q2', prompt: '<em>Carmen se mira en el espejo.</em>',       options: ['возвратное', 'взаимное'], correct: 'возвратное' },
        { id: 'q3', prompt: '<em>Los niños se peinan ellos solos.</em>',    options: ['возвратное', 'взаимное'], correct: 'возвратное' },
        { id: 'q4', prompt: '<em>Mi novio y yo nos escribimos cada día.</em>', options: ['возвратное', 'взаимное'], correct: 'взаимное' },
        { id: 'q5', prompt: '<em>Marisa y Pepa se saludaron.</em>',           options: ['возвратное', 'взаимное'], correct: 'взаимное' },
        { id: 'q6', prompt: '<em>Yo me corté con un cuchillo.</em>',            options: ['возвратное', 'взаимное'], correct: 'возвратное' },
      ],
    },

    {
      id: '40.10',
      title: 'Найдите фразу с ошибкой',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой возвратного местоимения.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Me ducho cada mañana.', 'Te duchas cada mañana.', 'Se ducha cada mañana.', 'Os ducha cada mañana.'], correct: 'Os ducha cada mañana.', explanation: 'К <em>os</em> подходит <em>ducháis</em>, не <em>ducha</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Mi madre se peina.', 'Mi madre peina a la niña.', 'Mi madre se peina a la niña.', 'Mi madre peina al perro.'], correct: 'Mi madre se peina a la niña.', explanation: 'Нельзя одновременно возвратное <em>se</em> и прямое дополнение <em>a la niña</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Nos queremos.', 'Os queréis.', 'Se quieren.', 'Nos queréis.'], correct: 'Nos queréis.', explanation: 'Подлежащее «мы» требует <em>nos queremos</em> (взаимное), не <em>nos queréis</em>: форма не сходится с лицом.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Yo me lavo el pelo.', 'Tú te lavas el pelo.', 'Él se lava el pelo.', 'Nosotros se lavamos el pelo.'], correct: 'Nosotros se lavamos el pelo.', explanation: 'К <em>nosotros</em> — <em>nos</em>: <em>nos lavamos</em>.' },
      ],
    },

    {
      id: '40.11',
      title: 'Поставьте местоимение в нужное место',
      type: 'fill',
      instructions: 'Соберите фразу с возвратным местоимением. Если нужен герундий или инфинитив — приклейте местоимение в конец одним словом.',
      questions: [
        { id: 'q1', prompt: 'voy a / yo / ducharse →',           correct: ['Voy a ducharme.', 'Voy a ducharme'] },
        { id: 'q2', prompt: 'estamos / vestirse →',                correct: ['Estamos vistiéndonos.', 'Nos estamos vistiendo.', 'Estamos vistiéndonos', 'Nos estamos vistiendo'] },
        { id: 'q3', prompt: 'no / quiero / levantarse →',           correct: ['No quiero levantarme.', 'No me quiero levantar.', 'No quiero levantarme', 'No me quiero levantar'] },
        { id: 'q4', prompt: 'los niños / acostarse / temprano →',     correct: ['Los niños se acuestan temprano.', 'Los niños se acuestan temprano'] },
        { id: 'q5', prompt: '¡rápido! / vestirse →',                     correct: ['¡Vístete rápido!', '¡Rápido, vístete!', '¡Vístete rápido!', '¡Rápido, vístete!'] },
      ],
    },

    {
      id: '40.12',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Запишите услышанное полностью, с диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Me ducho todos los días.',        correct: ['Me ducho todos los días.', 'Me ducho todos los días'] },
        { id: 'q2', prompt: '', audio: 'Nos queremos mucho.',                correct: ['Nos queremos mucho.', 'Nos queremos mucho'] },
        { id: 'q3', prompt: '', audio: 'Ricardo se afeita por la mañana.',    correct: ['Ricardo se afeita por la mañana.', 'Ricardo se afeita por la mañana'] },
        { id: 'q4', prompt: '', audio: 'Voy a ducharme ahora.',                  correct: ['Voy a ducharme ahora.', 'Voy a ducharme ahora'] },
        { id: 'q5', prompt: '', audio: '¿Os conocéis tú y Marisa?',                correct: ['¿Os conocéis tú y Marisa?', '¿Os conocéis tú y Marisa'] },
        { id: 'q6', prompt: '', audio: 'Mi hermana y yo nos escribimos.',           correct: ['Mi hermana y yo nos escribimos.', 'Mi hermana y yo nos escribimos'] },
      ],
    },
  ],
};
