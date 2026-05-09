// ============================================================
// Unidad 36 — Pronombres personales de complemento indirecto
// me, te, le, nos, os, les.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u36 = {
  id: 'u36',
  number: 36,
  title: { es: 'Me han regalado un reloj', topic: 'Pronombres personales de complemento indirecto' },
  topicRu: 'Личные местоимения косвенного дополнения',

  theory: [
    {
      type: 'rule',
      es: 'Los pronombres <strong>me, te, le, nos, os, les</strong> se usan como <em>complemento indirecto</em> de un verbo para referirse a la <strong>persona</strong> (o, a veces, animal o cosa) <em>a la que va dirigida</em> la acción. Sustituyen al complemento indirecto.',
      ru: 'Местоимения косвенного дополнения отвечают на вопрос «кому?» / «для кого?» — они показывают того, <strong>в чью сторону</strong> направлено действие (адресат подарка, рассказа, вопроса). По-русски это «мне, тебе, ему, ей, вам, нам, им» в дательном падеже.',
      examples: [
        { es: 'Luis ha regalado un reloj <em>a Chus</em>. → Luis <strong>le</strong> ha regalado un reloj.', ru: 'Луис подарил часы Чус → Луис ей подарил часы.' },
        { es: 'He preguntado <em>a Ana</em> por sus padres. → <strong>Le</strong> he preguntado por sus padres.', ru: 'Я спросил Ану о её родителях → Я её спросил о родителях.' },
        { es: '<strong>Te</strong> escribo mañana.', ru: 'Я тебе напишу завтра.' },
      ],
    },
    {
      type: 'heading',
      text: 'Формы',
    },
    {
      type: 'table',
      caption: 'Pronombres personales de complemento indirecto',
      columns: ['Лицо', 'SINGULAR', 'PLURAL'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['1.ª',                                    '<em>me</em> (a mí)',                          '<em>nos</em> (a nosotros, a nosotras)'],
        ['2.ª (близко)',                            '<em>te</em> (a ti)',                          '<em>os</em> (a vosotros, a vosotras)'],
        ['3.ª / usted / usted-ы / animal / cosa',   '<em>le</em> (a él, a ella, a usted, a una cosa)', '<em>les</em> (a ellos, a ellas, a ustedes, a unas cosas)'],
      ],
    },
    {
      type: 'rule',
      es: 'A diferencia del CD, en el CI <strong>no</strong> se distingue el género: <em>le</em> sirve para «ему» y «ей»; <em>les</em> sirve para «им» (мужчинам, женщинам, вещам). El género se aclara, si hace falta, con <em>a él / a ella / a usted…</em>',
      ru: 'У местоимений CI <strong>род не различается</strong> — одна форма <em>le</em> для «ему/ей/Вам», одна <em>les</em> для «им/Вам (мн.)». При необходимости пол уточняют добавлением <em>a él, a ella, a usted, a ellas…</em>',
      examples: [
        { es: '<strong>Le</strong> dije a usted que no era verdad.', ru: 'Я Вам сказал, что это неправда.' },
        { es: '<strong>Le</strong> dije a él / <strong>Le</strong> dije a ella.', ru: 'Я ему сказал / Я ей сказала.' },
      ],
    },
    {
      type: 'heading',
      text: 'Где ставится',
    },
    {
      type: 'rule',
      es: 'Como los pronombres CD, los pronombres CI van <strong>delante</strong> del verbo conjugado: <em>(no) me, te, le… + verbo</em>.',
      ru: 'Стандартное место — <strong>перед</strong> спрягаемым глаголом. Отрицание <em>no</em> уходит ещё левее: <em>no me ha dicho nada</em>.',
      examples: [
        { es: '—¿Qué <strong>te</strong> ha dicho el médico? —<strong>Me</strong> ha dicho que estoy bien.', ru: '— Что тебе сказал врач? — Сказал мне, что всё в порядке.' },
        { es: '<strong>Te</strong> ha preguntado Charo? —No, no <strong>me</strong> ha preguntado nada.', ru: 'Чаро тебя спросила? — Нет, ничего не спросила.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Con <em>imperativo, infinitivo</em> y <em>gerundio</em>, el pronombre CI también se <strong>une al final del verbo</strong>: <em>dime, voy a decirte algo, está hablándome</em>. (▶ Unidad 39.)',
      ru: 'С повелительным наклонением, инфинитивом и герундием местоимение CI прицепляется в конец глагола: <em>dime</em> «скажи мне», <em>voy a decirte algo</em> «я тебе кое-что скажу», <em>está hablándome</em> «он со мной говорит». Подробно в Unidad 39.',
    },
    {
      type: 'heading',
      text: 'a mí, a ti, a él… для уточнения и эмфазы',
    },
    {
      type: 'rule',
      es: 'Cuando se habla de personas se usa <em>a mí, a ti, a él…</em> <strong>además</strong> de me, te, le… — para <em>aclarar a quién</em> nos referimos o para <em>dar énfasis</em>. La presencia del pronombre corto (me / te / le…) sigue siendo obligatoria.',
      ru: 'Развёрнутая форма <em>a mí, a ti, a él, a ella, a usted…</em> <strong>дополняет</strong>, а не заменяет короткое местоимение: «короткое» <em>le, me, te…</em> остаётся в любом случае. Используется в двух ситуациях: <strong>(а)</strong> чтобы уточнить, о ком речь (для <em>le, les</em> — особенно важно), <strong>(б)</strong> чтобы выделить адресата.',
      examples: [
        { es: '<strong>Le</strong> dije que no era verdad. (¿A usted, a él, a ella?) → <strong>Le</strong> dije <em>a usted</em>…', ru: 'Уточнение: кому именно сказал.' },
        { es: '—¿<strong>Te</strong> ha dado el dinero? —<em>A mí</em> no <strong>me</strong> ha dado nada. (Puede que se lo haya dado a otros, pero a mí no.)', ru: 'Эмфаза: «мне-то — нет».' },
      ],
    },
    {
      type: 'atencion',
      es: 'Normalmente, cuando se habla de personas, se usa <em>me, te, le…</em> <strong>además</strong> de la persona a la que se refiere — incluso si esa persona se menciona por primera vez en la frase.',
      ru: 'Обычно, когда речь о людях, короткое <em>me, te, le, les…</em> ставится <strong>даже если</strong> сам адресат упомянут полным существительным или впервые называется. Это норма, а не «дублирование».',
      examples: [
        { es: '—¿<strong>Le</strong> has regalado algo a Pedro? —Sí, <strong>le</strong> he regalado una cartera.', ru: 'Хотя «a Pedro» уже названо, перед глаголом всё равно стоит <em>le</em>.' },
        { es: '<strong>Les</strong> he comprado unos bombones a mis hermanas.', ru: 'И снова: «a mis hermanas» уточняет, кому именно — а <em>les</em> остаётся.' },
      ],
    },
  ],

  exercises: [
    {
      id: '36.1',
      title: 'Выберите правильное местоимение',
      type: 'choice',
      instructions: 'Выберите <em>me / te / le / nos / os / les</em>, исходя из того, кому адресовано действие.',
      questions: [
        { id: 'q1',  prompt: '¿Qué ___ has regalado <em>a tu padre</em>? (= ему)',                        options: ['le', 'lo', 'les'],     correct: 'le' },
        { id: 'q2',  prompt: 'Mañana ___ escribo (= тебе) un correo.',                                     options: ['me', 'te', 'le'],     correct: 'te' },
        { id: 'q3',  prompt: '___ han preguntado (= нам) por el camino.',                                   options: ['nos', 'os', 'les'],   correct: 'nos' },
        { id: 'q4',  prompt: '¿Qué ___ ha dicho el profesor <em>a vosotros</em>?',                          options: ['os', 'nos', 'les'],   correct: 'os' },
        { id: 'q5',  prompt: '<em>A mis abuelos</em> ___ visitamos los domingos.',                          options: ['les', 'los', 'le'],   correct: 'les' },
        { id: 'q6',  prompt: '<em>A Marta</em> no ___ he dicho nada todavía.',                              options: ['le', 'la', 'les'],    correct: 'le' },
        { id: 'q7',  prompt: '¿Por qué no ___ has prestado el coche <em>a Pablo</em>?',                     options: ['le', 'lo', 'les'],    correct: 'le' },
        { id: 'q8',  prompt: 'Hoy ___ dan los resultados (= мне).',                                          options: ['me', 'te', 'le'],     correct: 'me' },
      ],
    },

    {
      id: '36.2',
      title: 'Сократите фразу: замените CI местоимением',
      type: 'fill',
      instructions: 'Перепишите всё предложение, заменив выделенное косвенное дополнение на <em>le</em> или <em>les</em>. Сохраните <em>a + персона</em>, если оно стоит — короткое местоимение всё равно нужно.',
      questions: [
        { id: 'q1', prompt: 'He escrito un correo <em>a Marta</em>. →',                       correct: ['Le he escrito un correo a Marta.', 'Le he escrito un correo a Marta'] },
        { id: 'q2', prompt: 'Dice la verdad <em>a sus padres</em>. →',                          correct: ['Les dice la verdad a sus padres.', 'Les dice la verdad a sus padres'] },
        { id: 'q3', prompt: 'Pregunto la hora <em>al señor</em>. →',                            correct: ['Le pregunto la hora al señor.', 'Le pregunto la hora al señor'] },
        { id: 'q4', prompt: 'Han regalado un libro <em>a Carmen y a María</em>. →',             correct: ['Les han regalado un libro a Carmen y a María.', 'Les han regalado un libro a Carmen y a María'] },
        { id: 'q5', prompt: 'No he comprado nada <em>a mi hermano</em>. →',                     correct: ['No le he comprado nada a mi hermano.', 'No le he comprado nada a mi hermano'] },
      ],
    },

    {
      id: '36.3',
      title: 'me / te / le / nos / os / les?',
      type: 'fill',
      instructions: 'Допишите подходящее местоимение CI. Помните: для «ему/ей/Вам» — одна форма <em>le</em>.',
      questions: [
        { id: 'q1', prompt: 'Mañana es el cumpleaños de Lucía: ___ voy a comprar flores.',         correct: 'le' },
        { id: 'q2', prompt: 'Niños, ¿quién ___ ha contado este cuento? (= вам мн.)',                 correct: 'os' },
        { id: 'q3', prompt: 'Señor Pérez, ___ llamo mañana. (Вам, к мужчине)',                       correct: 'le', explanation: 'Для CI к <em>usted</em> — всегда <em>le</em>, без различия по полу.' },
        { id: 'q4', prompt: 'Si quieres saber mi opinión, ___ digo la verdad. (= тебе)',             correct: 'te' },
        { id: 'q5', prompt: '¿___ han dicho algo a tus hermanos sobre la fiesta?',                    correct: 'les' },
        { id: 'q6', prompt: '¿Qué ___ pasa? — A mí no ___ pasa nada.',                                correct: 'me', explanation: 'Один и тот же дательный падеж в двух репликах: «что мне?» — «мне ничего не».' },
        { id: 'q7', prompt: 'A nosotros ___ encanta este café.',                                       correct: 'nos' },
        { id: 'q8', prompt: '¿___ duele la cabeza, Sara?',                                              correct: 'te' },
      ],
    },

    {
      id: '36.4',
      title: 'Ответьте «нет» с местоимением CI',
      type: 'fill',
      instructions: 'Ответьте отрицательно по образцу: <em>¿Qué te han dicho? → No me han dicho nada.</em>',
      questions: [
        { id: 'q1', prompt: '¿Qué te han preguntado? →',                  correct: ['No me han preguntado nada.', 'No me han preguntado nada'] },
        { id: 'q2', prompt: '¿Qué le ha dado a usted Pedro? →',            correct: ['No me ha dado nada.', 'No me ha dado nada'], explanation: 'Ответ от лица «вас» — переходим в первое лицо: <em>me</em>.' },
        { id: 'q3', prompt: '¿Qué os ha contado el profesor? →',           correct: ['No nos ha contado nada.', 'No nos ha contado nada'] },
        { id: 'q4', prompt: '¿Qué le han regalado a Susana? →',             correct: ['No le han regalado nada.', 'No le han regalado nada'] },
        { id: 'q5', prompt: '¿Qué te ha vendido? →',                         correct: ['No me ha vendido nada.', 'No me ha vendido nada'] },
        { id: 'q6', prompt: '¿Qué les han dado a ustedes? →',                correct: ['No nos han dado nada.', 'No nos han dado nada'] },
      ],
    },

    {
      id: '36.5',
      title: 'le или les?',
      type: 'choice',
      instructions: 'Выберите форму единственного или множественного числа.',
      questions: [
        { id: 'q1', prompt: '___ he escrito a mi tía.',                              options: ['le', 'les'], correct: 'le' },
        { id: 'q2', prompt: '___ he comprado un regalo a mis sobrinos.',              options: ['le', 'les'], correct: 'les' },
        { id: 'q3', prompt: '___ he dicho la verdad a usted.',                         options: ['le', 'les'], correct: 'le' },
        { id: 'q4', prompt: '___ he dicho la verdad a ustedes.',                       options: ['le', 'les'], correct: 'les' },
        { id: 'q5', prompt: 'Hoy ___ toca la lotería a Juana y a Pablo.',               options: ['le', 'les'], correct: 'les' },
        { id: 'q6', prompt: 'Esta canción ___ encanta a mi madre.',                      options: ['le', 'les'], correct: 'le' },
        { id: 'q7', prompt: 'No ___ pasa nada a esos niños.',                            options: ['le', 'les'], correct: 'les' },
        { id: 'q8', prompt: '¿Qué ___ regalas al jefe?',                                   options: ['le', 'les'], correct: 'le' },
      ],
    },

    {
      id: '36.6',
      title: 'Соотнесите вопрос и ответ',
      type: 'match',
      instructions: 'Подберите к каждому вопросу подходящий ответ. Обращайте внимание на лицо местоимения CI.',
      pool: [
        'No, no me han dicho nada.',
        'Le he regalado una corbata.',
        'Nos han preguntado por la dirección.',
        'Os hemos comprado bombones.',
        'Les he escrito un correo.',
        'Sí, te llamo mañana.',
      ],
      questions: [
        { id: 'q1', prompt: '¿Te han dicho algo?',                              correct: 'No, no me han dicho nada.' },
        { id: 'q2', prompt: '¿Qué le has regalado a tu padre?',                  correct: 'Le he regalado una corbata.' },
        { id: 'q3', prompt: '¿Qué os han preguntado?',                            correct: 'Nos han preguntado por la dirección.' },
        { id: 'q4', prompt: '¿Qué nos habéis comprado, mamá?',                     correct: 'Os hemos comprado bombones.' },
        { id: 'q5', prompt: '¿Has hablado con tus tíos?',                           correct: 'Les he escrito un correo.' },
        { id: 'q6', prompt: '¿Me llamas mañana?',                                    correct: 'Sí, te llamo mañana.' },
      ],
    },

    {
      id: '36.7',
      title: 'Дублирующее «a + персона»: где оно нужно?',
      type: 'multi',
      instructions: 'Отметьте <strong>все</strong> предложения, которые звучат естественно. Помните: для уточнения <em>le / les</em> часто добавляют <em>a él / a ella / a usted / a ellos…</em>',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Le he dado el regalo a Pedro.',
            'He dado el regalo a Pedro.',
            'Les he comprado bombones a mis hermanas.',
            'A mí no me ha dicho nada.',
            'A mí no ha dicho nada.',
            'Le dije a usted que no era verdad.',
          ],
          correct: [
            'Le he dado el regalo a Pedro.',
            'Les he comprado bombones a mis hermanas.',
            'A mí no me ha dicho nada.',
            'Le dije a usted que no era verdad.',
          ],
          explanation: 'Когда речь о человеке, обычно <strong>обязательно</strong> ставить и короткое местоимение <em>le/les/me…</em>, даже если адресат назван полным «a + персона». Без короткого местоимения фразы звучат искусственно.',
        },
      ],
    },

    {
      id: '36.8',
      title: 'Перепишите с эмфазой',
      type: 'fill',
      instructions: 'Перепишите фразу, добавив <em>a mí / a ti / a él…</em> для эмфазы. Образец: <em>No me ha dado nada</em> → <em>A mí no me ha dado nada</em>.',
      questions: [
        { id: 'q1', prompt: 'No le ha dicho nada (a él). →',           correct: ['A él no le ha dicho nada.', 'A él no le ha dicho nada'] },
        { id: 'q2', prompt: 'Te toca pagar (a ti). →',                  correct: ['A ti te toca pagar.', 'A ti te toca pagar'] },
        { id: 'q3', prompt: 'Nos gusta este barrio (a nosotros). →',    correct: ['A nosotros nos gusta este barrio.', 'A nosotros nos gusta este barrio'] },
        { id: 'q4', prompt: 'Les molesta el ruido (a ellos). →',         correct: ['A ellos les molesta el ruido.', 'A ellos les molesta el ruido'] },
        { id: 'q5', prompt: 'Le duele la cabeza (a ella). →',             correct: ['A ella le duele la cabeza.', 'A ella le duele la cabeza'] },
      ],
    },

    {
      id: '36.9',
      title: 'Найдите фразу с ошибкой',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой в местоимении CI.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Le he dicho la verdad a Pedro.', 'Les he dicho la verdad a Pedro.', 'Te he dicho la verdad.', 'Me han dicho la verdad.'], correct: 'Les he dicho la verdad a Pedro.', explanation: 'К одному человеку — <em>le</em>, не <em>les</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['A nosotros nos encanta el cine.', 'A vosotros os encanta el cine.', 'A ellos le encanta el cine.', 'A mí me encanta el cine.'], correct: 'A ellos le encanta el cine.', explanation: 'К ним — <em>les</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Os he comprado un regalo.', 'Le he comprado un regalo a vosotros.', 'Les he comprado un regalo.', 'Te he comprado un regalo.'], correct: 'Le he comprado un regalo a vosotros.', explanation: 'Для «вам (вы)» — <em>os</em>, а не <em>le</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Me duele la cabeza.', 'Te duele la cabeza.', 'Le duele la cabeza a Lucía.', 'Le duele la cabeza a Lucía y a Pablo.'], correct: 'Le duele la cabeza a Lucía y a Pablo.', explanation: 'Адресатов двое — <em>les</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Me ha preguntado mi nombre.', 'Te ha preguntado tu nombre.', 'Le ha preguntado su nombre a Carlos.', 'Le ha preguntado su nombre a Carlos y a Lola.'], correct: 'Le ha preguntado su nombre a Carlos y a Lola.', explanation: 'К двум адресатам — <em>les</em>.' },
      ],
    },

    {
      id: '36.10',
      title: 'Поставьте местоимение в нужное место',
      type: 'fill',
      instructions: 'Соберите предложение из данных слов в правильном порядке. Местоимение CI идёт <strong>перед</strong> спрягаемым глаголом, отрицание <em>no</em> — ещё левее.',
      questions: [
        { id: 'q1', prompt: 'no / te / he / dicho / nada →',              correct: ['No te he dicho nada.', 'No te he dicho nada'] },
        { id: 'q2', prompt: 'mañana / le / escribo / a Ana →',            correct: ['Mañana le escribo a Ana.', 'Mañana le escribo a Ana'] },
        { id: 'q3', prompt: 'no / nos / han / preguntado / nada →',       correct: ['No nos han preguntado nada.', 'No nos han preguntado nada'] },
        { id: 'q4', prompt: 'a vosotros / os / han / regalado / un libro →', correct: ['A vosotros os han regalado un libro.', 'A vosotros os han regalado un libro'] },
        { id: 'q5', prompt: 'a mí / no / me / gusta / este café →',         correct: ['A mí no me gusta este café.', 'A mí no me gusta este café'] },
      ],
    },

    {
      id: '36.11',
      title: 'Сопоставьте лицо с местоимением CI',
      type: 'match',
      instructions: 'Подберите для каждой группы лиц соответствующее местоимение косвенного дополнения.',
      pool: ['me', 'te', 'le', 'nos', 'os', 'les'],
      questions: [
        { id: 'q1', prompt: 'a mí',                          correct: 'me' },
        { id: 'q2', prompt: 'a ti',                          correct: 'te' },
        { id: 'q3', prompt: 'a él / a ella / a usted',        correct: 'le' },
        { id: 'q4', prompt: 'a nosotros / a nosotras',        correct: 'nos' },
        { id: 'q5', prompt: 'a vosotros / a vosotras',         correct: 'os' },
        { id: 'q6', prompt: 'a ellos / a ellas / a ustedes',   correct: 'les' },
      ],
    },

    {
      id: '36.12',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Нажмите <code>🔊</code> и запишите услышанное полностью, с нужным местоимением CI и диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Te escribo mañana.',                       correct: ['Te escribo mañana.', 'Te escribo mañana'] },
        { id: 'q2', prompt: '', audio: 'No me ha dicho nada.',                      correct: ['No me ha dicho nada.', 'No me ha dicho nada'] },
        { id: 'q3', prompt: '', audio: 'Les he comprado bombones a mis hermanas.',  correct: ['Les he comprado bombones a mis hermanas.', 'Les he comprado bombones a mis hermanas'] },
        { id: 'q4', prompt: '', audio: 'A mí no me gusta el café.',                 correct: ['A mí no me gusta el café.', 'A mí no me gusta el café'] },
        { id: 'q5', prompt: '', audio: 'Le duele la cabeza a Elena.',               correct: ['Le duele la cabeza a Elena.', 'Le duele la cabeza a Elena'] },
        { id: 'q6', prompt: '', audio: 'Os hemos preguntado dónde vivís.',          correct: ['Os hemos preguntado dónde vivís.', 'Os hemos preguntado dónde vivís'] },
      ],
    },
  ],
};
