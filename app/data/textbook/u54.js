// ============================================================
// Unidad 54 — Contraste entre verbos con y sin me, te, se…
// «Я мою себя» vs «я мою кого-то»; глаголы, у которых
// добавление se меняет смысл (irse, dormirse, llamarse и т.д.)
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u54 = {
  id: 'u54',
  number: 54,
  title: { es: 'me lavo / lavo', topic: 'Contraste con y sin me, te, se…' },
  topicRu: 'Возвратные vs невозвратные: на себя или на кого-то ещё',

  theory: [
    {
      type: 'rule',
      es: 'Sin <em>me, te, se…</em>: la acción la recibe <strong>otra persona u otra cosa</strong>, no el sujeto. Con <em>me, te, se…</em>: la acción recae <strong>sobre el propio sujeto</strong> (o sobre una parte de su cuerpo o ropa).',
      ru: 'Один и тот же глагол меняет смысл от наличия <em>me, te, se…</em>: <strong>без местоимения</strong> действие переходит на <em>другого человека / на предмет</em>; <strong>с местоимением</strong> — на самого деятеля или на его часть тела/одежду.',
      examples: [
        { es: 'Lavo el pelo a las clientas.', ru: 'Я мою волосы клиенткам (парикмахер).' },
        { es: 'Me lavo el pelo todos los días.', ru: 'Я мою (свои) волосы каждый день.' },
        { es: 'Gonzalo acuesta a los niños a las nueve.', ru: 'Гонсало укладывает детей в девять.' },
        { es: 'Gonzalo se acuesta a las once.', ru: 'Гонсало (сам) ложится в одиннадцать.' },
      ],
    },
    {
      type: 'heading',
      text: 'Сравнение «на другого / на себя»',
    },
    {
      type: 'table',
      caption: 'Без se vs с se',
      columns: ['Без se (на другого / предмет)', 'С se (на самого себя)'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>Lavo el coche.</em>',                   '<em>Me lavo las manos.</em>'],
        ['<em>El padre viste al niño.</em>',           '<em>El padre se viste rápido.</em>'],
        ['<em>La madre despierta a los niños.</em>',   '<em>La madre se despierta a las seis.</em>'],
        ['<em>Acuesto al bebé.</em>',                   '<em>Me acuesto a las once.</em>'],
        ['<em>Baño al perro.</em>',                     '<em>Me baño en el mar.</em>'],
        ['<em>Peino a mi hija.</em>',                   '<em>Me peino delante del espejo.</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'Otros verbos cambian de <strong>significado</strong> al añadir <em>se</em>. No es solo «sobre uno mismo»: es otro verbo.',
      ru: 'У ряда глаголов <em>se</em> не просто разворачивает действие на себя, а <strong>меняет значение</strong>. Это уже другая лексема.',
    },
    {
      type: 'table',
      caption: 'Глаголы, у которых se меняет смысл',
      columns: ['Без se', 'С se'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em>despedir</em> = увольнять',                    '<em>despedirse</em> = прощаться, уволиться по своей воле'],
        ['<em>dormir</em> = спать',                            '<em>dormirse</em> = заснуть, скучать'],
        ['<em>dejar</em> = одолжить, оставить',                '<em>dejarse</em> = забыть (вещь)'],
        ['<em>encontrar</em> = найти, обнаружить',              '<em>encontrarse</em> = встретиться, чувствовать себя'],
        ['<em>ir</em> = идти, ходить',                            '<em>irse</em> = уходить'],
        ['<em>llamar</em> = звать, звонить',                     '<em>llamarse</em> = носить имя'],
        ['<em>parecer</em> = казаться, выглядеть',                '<em>parecerse a</em> = быть похожим на'],
      ],
    },
    {
      type: 'atencion',
      es: 'Compare: <em>Ana <strong>duerme</strong> siete horas al día</em> (= спит) ↔ <em>Ana <strong>se duerme</strong> en la ópera</em> (= засыпает / ей скучно). <em>Voy a clase</em> (= хожу на занятия) ↔ <em>Me voy a clase</em> (= ухожу на занятия). <em>Te <strong>llama</strong> Jorge</em> (= тебе звонит Хорхе) ↔ <em>Me <strong>llamo</strong> Juana</em> (= меня зовут Хуана).',
      ru: 'Запомните контрасты: <em>dormir</em> «спать» — <em>dormirse</em> «уснуть»; <em>ir</em> «ходить» — <em>irse</em> «уходить»; <em>llamar</em> «звать/звонить» — <em>llamarse</em> «называться, носить имя»; <em>encontrar</em> «найти» — <em>encontrarse</em> «встретиться / чувствовать себя».',
    },
  ],

  exercises: [
    {
      id: '54.1',
      title: 'lavar или lavarse?',
      type: 'choice',
      instructions: 'На себя — с <em>me/te/se</em>; на другого/предмет — без.',
      questions: [
        { id: 'q1', prompt: 'Raúl ___ coches en el garaje.',           options: ['lava', 'se lava'], correct: 'lava' },
        { id: 'q2', prompt: 'Yo ___ las manos antes de comer.',          options: ['lavo', 'me lavo'], correct: 'me lavo' },
        { id: 'q3', prompt: '(yo) ___ los dientes antes de acostarme.',  options: ['lavo', 'me lavo'], correct: 'me lavo' },
        { id: 'q4', prompt: 'María ___ a los niños antes de cenar.',      options: ['lava', 'se lava'], correct: 'lava' },
        { id: 'q5', prompt: 'Mi padre siempre ___ la camisa con la mano.', options: ['lava', 'se lava'], correct: 'lava' },
        { id: 'q6', prompt: 'Los niños ___ los domingos por la tarde.',     options: ['bañan', 'se bañan'], correct: 'se bañan' },
        { id: 'q7', prompt: '(yo) ___ a mi perro una vez al mes.',          options: ['baño', 'me baño'], correct: 'baño' },
      ],
    },

    {
      id: '54.2',
      title: 'Распорядок дня',
      type: 'fill',
      instructions: 'Поставьте подходящий глагол в нужную форму. Если действие на себя — добавьте местоимение.',
      questions: [
        { id: 'q1', prompt: 'Felipe ___ viendo la tele. (aburrirse)',                          correct: 'se aburre' },
        { id: 'q2', prompt: '(yo) ___ las manos antes de comer. (lavarse)',                     correct: 'Me lavo', placeholder: 'Me lavo' },
        { id: 'q3', prompt: 'Clara ___ a los niños después de desayunar y después ___ ella. (vestir / vestirse)', correct: ['viste / se viste', 'viste; se viste'], explanation: 'Сначала «одевает детей» (viste), потом «одевается сама» (se viste).' },
        { id: 'q4', prompt: '(yo) ___ muy tarde los sábados por la noche. (acostarse)',          correct: 'Me acuesto', placeholder: 'Me acuesto' },
        { id: 'q5', prompt: 'Alicia ___ las blusas a mano. (lavar)',                              correct: 'lava' },
        { id: 'q6', prompt: 'Juan ___ a sus hijos a las diez de la noche. (acostar)',              correct: 'acuesta' },
        { id: 'q7', prompt: 'Miguel ___ mucho en el espejo. (mirarse)',                              correct: 'se mira' },
        { id: 'q8', prompt: 'Los payasos ___ a los niños. (divertir)',                                correct: 'divierten', explanation: '«Веселят детей» — на других, без se.' },
      ],
    },

    {
      id: '54.3',
      title: 'Выберите верный вариант',
      type: 'choice',
      instructions: 'Внимательно: в одних — на себя, в других — на другого. Учтите глаголы со сменой значения.',
      questions: [
        { id: 'q1', prompt: '___ Andrés. (имя)',                                  options: ['Llamo', 'Me llamo'], correct: 'Me llamo' },
        { id: 'q2', prompt: 'Tania siempre ___ con un beso.',                       options: ['despide', 'se despide'], correct: 'se despide', explanation: 'Прощается = se despide.' },
        { id: 'q3', prompt: '¿A quién ___, a tu padre o a tu madre?',                options: ['pareces', 'te pareces'], correct: 'te pareces', explanation: '«Похож на …» = parecerse a.' },
        { id: 'q4', prompt: '___ al cine dos veces al mes.',                         options: ['Vamos', 'Nos vamos'], correct: 'Vamos', explanation: '«Ходим» = ir; «уходим» было бы nos vamos.' },
        { id: 'q5', prompt: 'Rita ___ muy amable.',                                   options: ['parece', 'se parece'], correct: 'parece', explanation: '«Кажется любезной» = parecer.' },
        { id: 'q6', prompt: '¡Hasta luego! ___ al cine.',                              options: ['Vamos', 'Nos vamos'], correct: 'Nos vamos', explanation: '«Уходим» — irse.' },
        { id: 'q7', prompt: 'Anoche ___ con Marina en la discoteca.',                   options: ['encontré', 'me encontré'], correct: 'me encontré', explanation: '«Встретился случайно» — encontrarse con.' },
        { id: 'q8', prompt: 'No ___ mis gafas.',                                          options: ['encuentro', 'me encuentro'], correct: 'encuentro', explanation: '«Не нахожу» — encontrar.' },
        { id: 'q9', prompt: '¿Cuántas horas ___ al día?',                                  options: ['duermes', 'te duermes'], correct: 'duermes' },
        { id: 'q10', prompt: 'Siempre ___ las llaves en casa.',                              options: ['dejo', 'me dejo'], correct: 'me dejo', explanation: '«Забываю вещи» — dejarse.' },
      ],
    },

    {
      id: '54.4',
      title: 'irse или ir?',
      type: 'choice',
      instructions: '<em>ir a + место</em> — куда, как маршрут. <em>irse</em> — уходить откуда-то (часто без указания куда).',
      questions: [
        { id: 'q1', prompt: 'Es tarde, (yo) ___ a casa.',                          options: ['voy', 'me voy'], correct: 'me voy' },
        { id: 'q2', prompt: 'Todos los días (yo) ___ al trabajo en metro.',          options: ['voy', 'me voy'], correct: 'voy' },
        { id: 'q3', prompt: 'Niños, ___ a la cama, ¡ya!',                              options: ['vais', 'os vais'], correct: 'os vais' },
        { id: 'q4', prompt: '¿(tú) ___ a la fiesta el sábado?',                         options: ['Vas', 'Te vas'], correct: 'Vas' },
        { id: 'q5', prompt: 'Adiós, chicos, (nosotros) ___.',                            options: ['vamos', 'nos vamos'], correct: 'nos vamos' },
      ],
    },

    {
      id: '54.5',
      title: 'dormir или dormirse?',
      type: 'choice',
      instructions: '<em>dormir</em> = «спать (быть в состоянии сна)»; <em>dormirse</em> = «засыпать / заскучать».',
      questions: [
        { id: 'q1', prompt: 'Ana ___ ocho horas al día.',                  options: ['duerme', 'se duerme'], correct: 'duerme' },
        { id: 'q2', prompt: 'Ana ___ siempre en la ópera.',                  options: ['duerme', 'se duerme'], correct: 'se duerme', explanation: '«Засыпает (от скуки)» — dormirse.' },
        { id: 'q3', prompt: 'Por la noche (yo) ___ muy bien.',                options: ['duermo', 'me duermo'], correct: 'duermo' },
        { id: 'q4', prompt: '(yo) ___ rápido cuando estoy cansado.',           options: ['duermo', 'me duermo'], correct: 'me duermo' },
        { id: 'q5', prompt: 'El bebé ya ___; no hagas ruido.',                  options: ['duerme', 'se duerme'], correct: 'duerme', explanation: 'Уже спит = duerme.' },
      ],
    },

    {
      id: '54.6',
      title: 'Парные глаголы — сопоставьте',
      type: 'match',
      instructions: 'Подберите русский эквивалент для каждой формы.',
      pool: [
        'спать',
        'засыпать',
        'идти',
        'уходить',
        'звать / звонить',
        'называться (носить имя)',
        'найти',
        'встретиться (или чувствовать себя)',
      ],
      questions: [
        { id: 'q1', prompt: 'dormir',         correct: 'спать' },
        { id: 'q2', prompt: 'dormirse',       correct: 'засыпать' },
        { id: 'q3', prompt: 'ir',              correct: 'идти' },
        { id: 'q4', prompt: 'irse',            correct: 'уходить' },
        { id: 'q5', prompt: 'llamar',           correct: 'звать / звонить' },
        { id: 'q6', prompt: 'llamarse',          correct: 'называться (носить имя)' },
        { id: 'q7', prompt: 'encontrar',          correct: 'найти' },
        { id: 'q8', prompt: 'encontrarse',         correct: 'встретиться (или чувствовать себя)' },
      ],
    },

    {
      id: '54.7',
      title: 'Парные глаголы (продолжение)',
      type: 'match',
      instructions: 'Подберите русский смысл.',
      pool: [
        'оставить, одолжить',
        'забыть (вещь)',
        'увольнять',
        'прощаться / уволиться по своей воле',
        'казаться, выглядеть',
        'быть похожим (на кого-то)',
      ],
      questions: [
        { id: 'q1', prompt: 'dejar',       correct: 'оставить, одолжить' },
        { id: 'q2', prompt: 'dejarse',     correct: 'забыть (вещь)' },
        { id: 'q3', prompt: 'despedir',     correct: 'увольнять' },
        { id: 'q4', prompt: 'despedirse',   correct: 'прощаться / уволиться по своей воле' },
        { id: 'q5', prompt: 'parecer',      correct: 'казаться, выглядеть' },
        { id: 'q6', prompt: 'parecerse',     correct: 'быть похожим (на кого-то)' },
      ],
    },

    {
      id: '54.8',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждой паре одна фраза грамотна, другая — нет (или меняет смысл). Выберите <strong>ошибочную</strong>.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка? (имеется в виду «меня зовут Андрес»)', options: ['Llamo Andrés.', 'Me llamo Andrés.'], correct: 'Llamo Andrés.', explanation: 'Llamo Andrés = «я звоню Андресу» (без a — это уже спорно, но не «зовут»).' },
        { id: 'q2', prompt: 'Где ошибка? (имеется в виду «волосы клиенток»)',     options: ['Lavo el pelo a las clientas.', 'Me lavo el pelo a las clientas.'], correct: 'Me lavo el pelo a las clientas.', explanation: '<em>Me lavo</em> = на себя; здесь действие на других — без se.' },
        { id: 'q3', prompt: 'Где ошибка? (имеется в виду «я ложусь в одиннадцать»)', options: ['Acuesto a las once.', 'Me acuesto a las once.'], correct: 'Acuesto a las once.', explanation: 'Без se это «укладываю кого-то».' },
        { id: 'q4', prompt: 'Где ошибка? (имеется в виду «он на меня похож»)',          options: ['Se parece a mí.', 'Parece a mí.'], correct: 'Parece a mí.', explanation: 'Похож на = <em>parecerse a</em>.' },
        { id: 'q5', prompt: 'Где ошибка? (имеется в виду «я ухожу домой»)',                options: ['Voy a casa.', 'Me voy a casa.'], correct: '—', explanation: 'Обе фразы возможны: <em>Voy</em> = «иду / собираюсь», <em>Me voy</em> = «ухожу». Помечаем эту ловушку — здесь ошибки нет.' },
      ],
    },

    {
      id: '54.9',
      title: 'Утверждения про разницу',
      type: 'multi',
      instructions: 'Отметьте все <strong>верные</strong> утверждения.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие из утверждений верны?',
          options: [
            '«Lavo el coche» и «Me lavo el coche» — это одно и то же.',
            'В «Me lavo las manos» местоимение se показывает, что руки — мои.',
            '«Acostar a alguien» — укладывать кого-то спать; «acostarse» — самому ложиться.',
            'В «Me llamo Juana» глагол llamar управляет винительным падежом.',
            '«Encontrarse con» — означает встретить кого-то (намеренно или случайно).',
            '«Voy a casa» и «Me voy a casa» имеют точно одно значение.',
            '«Dormirse» — синоним «dormir», только более вежливый.',
          ],
          correct: [
            'В «Me lavo las manos» местоимение se показывает, что руки — мои.',
            '«Acostar a alguien» — укладывать кого-то спать; «acostarse» — самому ложиться.',
            '«Encontrarse con» — означает встретить кого-то (намеренно или случайно).',
          ],
          explanation: 'Lavo el coche ≠ me lavo el coche (последнее звучит странно — «мою себе машину»). «Voy a casa» = «иду домой / собираюсь», «me voy a casa» = «ухожу домой». «Dormirse» = «засыпать», не синоним dormir.',
        },
      ],
    },

    {
      id: '54.10',
      title: 'Перепишите фразу — поменяйте смысл',
      type: 'fill',
      instructions: 'Перепишите так, чтобы действие было направлено на самого деятеля (или наоборот). Изменяйте только нужные части.',
      questions: [
        { id: 'q1', prompt: '<em>Lavo a mi hijo.</em> → (я моюсь сам) <em>___</em>', correct: ['Me lavo.', 'Me lavo'], placeholder: 'Me lavo.' },
        { id: 'q2', prompt: '<em>Visto a la niña.</em> → (я одеваюсь сам)',           correct: ['Me visto.', 'Me visto'] },
        { id: 'q3', prompt: '<em>Me peino delante del espejo.</em> → (я причёсываю Анну)', correct: ['Peino a Ana.', 'Peino a Ana'] },
        { id: 'q4', prompt: '<em>Me acuesto tarde.</em> → (я укладываю детей)',          correct: ['Acuesto a los niños.', 'Acuesto a los niños'] },
        { id: 'q5', prompt: '<em>Despierta a Pablo a las siete.</em> → (просыпается сама в семь)', correct: ['Se despierta a las siete.', 'Se despierta a las siete'] },
      ],
    },

    {
      id: '54.11',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Запишите услышанное полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Me llamo Juana.',              correct: ['Me llamo Juana.', 'Me llamo Juana'] },
        { id: 'q2', prompt: '', audio: 'Te llama Jorge.',                correct: ['Te llama Jorge.', 'Te llama Jorge'] },
        { id: 'q3', prompt: '', audio: 'Me voy a clase.',                  correct: ['Me voy a clase.', 'Me voy a clase'] },
        { id: 'q4', prompt: '', audio: 'Voy a clase todos los días.',       correct: ['Voy a clase todos los días.', 'Voy a clase todos los días'] },
        { id: 'q5', prompt: '', audio: 'Ana se duerme en la ópera.',          correct: ['Ana se duerme en la ópera.', 'Ana se duerme en la ópera'] },
        { id: 'q6', prompt: '', audio: 'Se parece a su madre.',                correct: ['Se parece a su madre.', 'Se parece a su madre'] },
      ],
    },

    {
      id: '54.12',
      title: 'Полная картинка',
      type: 'fill',
      instructions: 'Подставьте глагол в нужную форму (со <em>se</em> или без) — следите за смыслом.',
      questions: [
        { id: 'q1', prompt: 'Mi hija (parecerse) ___ mucho a mi madre.',         correct: 'se parece' },
        { id: 'q2', prompt: 'El profesor (parecer) ___ muy joven.',                 correct: 'parece' },
        { id: 'q3', prompt: '(yo) Siempre (dejarse) ___ el paraguas en el metro.',   correct: 'me dejo' },
        { id: 'q4', prompt: 'Mi vecina (dejar) ___ el coche en la calle.',             correct: 'deja' },
        { id: 'q5', prompt: 'Mañana (yo, irse) ___ de vacaciones.',                     correct: 'me voy' },
        { id: 'q6', prompt: '(nosotros, ir) ___ a Italia todos los veranos.',             correct: 'Vamos', placeholder: 'Vamos' },
        { id: 'q7', prompt: 'No (encontrar, yo) ___ las llaves.',                          correct: 'encuentro' },
        { id: 'q8', prompt: 'Cada miércoles (encontrarse, yo) ___ con María en el café.',     correct: 'me encuentro' },
        { id: 'q9', prompt: '¿Cómo (llamarse, tú) ___?',                                       correct: 'te llamas' },
        { id: 'q10', prompt: '(tú) ___ por teléfono cada tarde.', correct: ['Llamas'], placeholder: 'Llamas', explanation: '«Звонишь» = llamar, без se.' },
      ],
    },
  ],
};
