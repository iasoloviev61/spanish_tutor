// ============================================================
// Unidad 75 — Imperativo: verbos irregulares (1)
// Cierra la ventana — глаголы с чередованиями e→i, e→ie, o/u→ue.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u75 = {
  id: 'u75',
  number: 75,
  title: { es: 'Cierra la ventana', topic: 'Imperativo: verbos irregulares (1)' },
  topicRu: 'Императив: неправильные глаголы (1) — чередования гласных',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Los verbos con <strong>cambio vocálico</strong> en el presente (e→i, e→ie, o→ue) mantienen ese cambio en el imperativo. La regla es la misma de siempre: el cambio aparece en las personas <strong>tónicas</strong> (donde la sílaba que cambia lleva el acento), <strong>excepto</strong> en <em>nosotros / vosotros</em>, que conservan la vocal del infinitivo.',
      ru: 'Глаголы с <strong>чередованием гласной</strong> в презенсе (<em>e→i</em>, <em>e→ie</em>, <em>o→ue</em>) сохраняют это чередование в imperativo. Гласная меняется в формах с <strong>ударным</strong> слогом — то есть везде, <strong>кроме</strong> <em>vosotros</em>: там окончание ударное, а основа без чередования.<br>Это касается обеих форм — утвердительной и отрицательной.',
      examples: [
        { es: '<strong>Cierra</strong> la ventana. / No la <strong>cierres</strong>.', ru: 'Закрой окно. / Не закрывай его. (e→ie)' },
        { es: '<strong>Pide</strong> lo que quieras. / No <strong>pidas</strong> nada.', ru: 'Проси, что хочешь. / Ничего не проси. (e→i)' },
        { es: '<strong>Vuelve</strong> pronto. / No <strong>vuelvas</strong> tarde.', ru: 'Возвращайся скоро. / Не возвращайся поздно. (o→ue)' },
      ],
    },

    {
      type: 'heading',
      text: 'Тип 1: e → i  (pedir и подобные)',
    },
    {
      type: 'table',
      caption: 'pedir',
      columns: ['Pronombre', 'Afirmativo', 'Negativo'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex'],
      rows: [
        ['(tú)',           '<strong>pide</strong>',  'no <strong>pidas</strong>'],
        ['(usted)',        '<strong>pida</strong>',  'no <strong>pida</strong>'],
        ['(vosotros, −as)','<strong>pedid</strong>', 'no <strong>pidáis</strong>'],
        ['(ustedes)',      '<strong>pidan</strong>', 'no <strong>pidan</strong>'],
      ],
    },
    {
      type: 'rule',
      es: 'Otros: <em>conseguir, corregir, elegir, freír, medir, reír, repetir, seguir, servir, sonreír</em>.',
      ru: 'Так же ведут себя: <em>conseguir, corregir, elegir, freír, medir, reír, repetir, seguir, servir, sonreír</em>. Ударный слог получает <em>i</em> вместо <em>e</em>.',
      examples: [
        { es: '<strong>Sonreíd</strong>. Os voy a hacer una foto.', ru: 'Улыбайтесь. Я вас сфотографирую. (vosotros — без чередования)' },
        { es: 'No <strong>frías</strong> toda la carne. No tengo hambre.', ru: 'Не жарь всё мясо. Я не голоден.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Verbos en <em>−gir</em> y <em>−guir</em> tienen además ortografía: <em>elegir → elige, elija, elegid, elijan; no elijas…</em> · <em>seguir → sigue, siga, seguid, sigan; no sigas…</em>',
      ru: 'У глаголов на <em>−gir</em> и <em>−guir</em> есть ещё орфографические замены, чтобы сохранить звук:<br>• <em>elegir</em> → <em>elige, elija, elegid, elijan</em>; в отрицании <em>no elijas, no elija, no elijáis, no elijan</em>.<br>• <em>seguir</em> → <em>sigue, siga, seguid, sigan</em>; в отрицании <em>no sigas, no siga, no sigáis, no sigan</em>.',
    },

    {
      type: 'heading',
      text: 'Тип 2: e → ie  (cerrar, encender, mentir и др.)',
    },
    {
      type: 'table',
      caption: 'cerrar / encender',
      columns: ['Pronombre', 'cerrar (afirm.)', 'cerrar (neg.)', 'encender (afirm.)', 'encender (neg.)'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex', 'col-ex', 'col-ex'],
      rows: [
        ['(tú)',           '<strong>cierra</strong>',  'no <strong>cierres</strong>',  '<strong>enciende</strong>',  'no <strong>enciendas</strong>'],
        ['(usted)',        '<strong>cierre</strong>',  'no <strong>cierre</strong>',   '<strong>encienda</strong>',  'no <strong>encienda</strong>'],
        ['(vosotros, −as)','<strong>cerrad</strong>',  'no <strong>cerréis</strong>',  '<strong>encended</strong>',  'no <strong>encendáis</strong>'],
        ['(ustedes)',      '<strong>cierren</strong>', 'no <strong>cierren</strong>',  '<strong>enciendan</strong>', 'no <strong>enciendan</strong>'],
      ],
    },
    {
      type: 'rule',
      es: 'Otros: <em>calentar, despertar, empezar, encender, fregar, pensar, regar, defender, entender</em>.',
      ru: 'Так же: <em>calentar, despertar, empezar, encender, fregar, pensar, regar, defender, entender</em>. Под ударением <em>e</em> превращается в <em>ie</em>.',
      examples: [
        { es: '<strong>Riega</strong> las plantas todos los días.', ru: 'Поливай растения каждый день.' },
        { es: 'No <strong>despiertes</strong> a Sonia. Está cansada.', ru: 'Не буди Соню. Она устала.' },
      ],
    },
    {
      type: 'atencion',
      es: '<em>mentir</em> tiene además e→i en <em>nosotros / vosotros</em> en algunas formas: <em>miente, mienta, mentid, mientan; no mientas, no mienta, no mintáis, no mientan</em>.',
      ru: 'У <em>mentir</em> особенность: в форме отрицания <em>vosotros</em> — <em>no mintáis</em> (а не <em>no mentáis</em>), потому что глагол ведёт себя как <em>e→ie / e→i</em>: <em>miente, mienta, mentid, mientan; no mientas, no mienta, <strong>no mintáis</strong>, no mientan</em>.',
    },

    {
      type: 'heading',
      text: 'Тип 3: o → ue, u → ue  (soñar, mover, jugar)',
    },
    {
      type: 'table',
      caption: 'soñar / mover / jugar',
      columns: ['Pronombre', 'soñar (afirm.)', 'mover (afirm.)', 'jugar (afirm.)'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex', 'col-ex'],
      rows: [
        ['(tú)',           '<strong>sueña</strong>',  '<strong>mueve</strong>',  '<strong>juega</strong>'],
        ['(usted)',        '<strong>sueñe</strong>',  '<strong>mueva</strong>',  '<strong>juegue</strong>'],
        ['(vosotros, −as)','<strong>soñad</strong>',  '<strong>moved</strong>',  '<strong>jugad</strong>'],
        ['(ustedes)',      '<strong>sueñen</strong>', '<strong>muevan</strong>', '<strong>jueguen</strong>'],
      ],
    },
    {
      type: 'table',
      caption: 'soñar / mover / jugar — отрицание',
      columns: ['Pronombre', 'soñar (neg.)', 'mover (neg.)', 'jugar (neg.)'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex', 'col-ex'],
      rows: [
        ['(tú)',           'no <strong>sueñes</strong>', 'no <strong>muevas</strong>', 'no <strong>juegues</strong>'],
        ['(usted)',        'no <strong>sueñe</strong>',  'no <strong>mueva</strong>',  'no <strong>juegue</strong>'],
        ['(vosotros, −as)','no <strong>soñéis</strong>', 'no <strong>mováis</strong>', 'no <strong>juguéis</strong>'],
        ['(ustedes)',      'no <strong>sueñen</strong>', 'no <strong>muevan</strong>', 'no <strong>jueguen</strong>'],
      ],
    },
    {
      type: 'rule',
      es: 'Otros: <em>comprobar, contar, encontrar, recordar, volar, morder, mover</em>. <em>Jugar</em> es el único con <em>u→ue</em>; necesita además ortografía <em>g→gu</em> ante <em>e</em>: <em>juega, juegue, jugad, jueguen</em>.',
      ru: 'Так же: <em>comprobar, contar, encontrar, recordar, volar, morder, mover</em>. <em>Jugar</em> — единственный с <em>u→ue</em>, и у него ещё <em>g→gu</em> перед <em>e</em>: <em>juega, juegue, jugad, jueguen</em>; в отрицании — <em>no juegues, no juegue, no juguéis, no jueguen</em>.',
      examples: [
        { es: '<strong>Cuenta</strong> hasta diez.', ru: 'Считай до десяти.' },
        { es: 'No <strong>muevan</strong> la mesa.', ru: 'Не двигайте стол.' },
      ],
    },
    {
      type: 'atencion',
      es: '<em>dormir</em>: <em>duerme, duerma, dormid, duerman; no duermas, no duerma, <strong>no durmáis</strong>, no duerman</em> — en negativo <em>vosotros</em> hay e→u, como en <em>mentir</em>.',
      ru: 'У <em>dormir</em> — то же самое явление, что у <em>mentir</em>: в отрицании <em>vosotros</em> чередование <em>o→u</em>: <em>duerme, duerma, dormid, duerman; no duermas, no duerma, <strong>no durmáis</strong>, no duerman</em>.',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '75.1',
      title: 'Заметка с инструкциями (форма tú)',
      type: 'fill',
      instructions: 'Запас глаголов: <em>cerrar (×2), conectar, encender, lavar, regar</em>. Образец: первая фраза → <em>Cierra</em>.',
      questions: [
        { id: 'q1', prompt: '___ todas las ventanas cuando salgas.',                                    correct: 'Cierra' },
        { id: 'q2', prompt: '___ las plantas todos los días; una vez a la semana es suficiente.',         correct: 'Riega' },
        { id: 'q3', prompt: '___ la llave del gas cuando acabes de cocinar.',                              correct: 'Cierra' },
        { id: 'q4', prompt: '___ los platos en el lavavajillas.',                                          correct: 'Lava' },
        { id: 'q5', prompt: '___ la alarma cuando salgas.',                                                correct: 'Conecta' },
        { id: 'q6', prompt: '___ el calentador una hora antes de ducharte.',                                correct: 'Enciende' },
      ],
    },

    {
      id: '75.2',
      title: 'Сцены: подберите команду',
      type: 'fill',
      instructions: 'Запас глаголов: <em>cerrar (×2), despertar, jugar, pedir (×2), seguir, sonreír</em>. Скажите подходящую форму.',
      questions: [
        { id: 'q1', prompt: '(прохожий спрашивает дорогу) ___ todo recto.',                                correct: 'Siga' },
        { id: 'q2', prompt: '(тебе принесли подарок: «Закрой глаза…») ___ los ojos.',                       correct: 'Cierra' },
        { id: 'q3', prompt: '(в столовой кричат детям) ¡Niños! No ___ en el salón.',                        correct: 'juguéis' },
        { id: 'q4', prompt: '(официанту, вежливо) ___ un zumo, por favor, Tomás.',                          correct: 'Pide', explanation: '«Пусть Томас закажет сок» — обращение к ребёнку.' },
        { id: 'q5', prompt: '(на свадебной фотографии) ___, por favor.',                                    correct: 'Sonreíd' },
        { id: 'q6', prompt: '(жалуется на еду) No ___ la sopa. No está muy buena.',                         correct: 'pidas' },
        { id: 'q7', prompt: '(детям, спящим в восемь утра) ¡___! Son las ocho.',                            correct: 'Despertad' },
        { id: 'q8', prompt: '(когда уходят) ___ la puerta, por favor.',                                      correct: 'Cierra' },
      ],
    },

    {
      id: '75.3',
      title: 'Что бы вы сказали в каждом случае',
      type: 'fill',
      instructions: 'Поставьте подходящую форму. Образец: <em>(a su familia) (Empezar) ___ a comer</em> → <em>Empezad</em>.',
      questions: [
        { id: 'q1',  prompt: '(a un amigo) (Elegir) ___ un libro. Te lo regalo.',                  correct: 'Elige' },
        { id: 'q2',  prompt: '(a un alumno) (Contar) ___ hasta veinte en español.',                 correct: 'Cuenta' },
        { id: 'q3',  prompt: '(a alguien de su familia) (Encender) ___ la luz. Está muy oscuro.',    correct: 'Enciende' },
        { id: 'q4',  prompt: '(a un camarero) (No, calentar) ___ la leche. La quiero fría.',         correct: 'No caliente' },
        { id: 'q5',  prompt: '(a unos amigos) (Sonreír) ___. Os voy a hacer una foto.',              correct: 'Sonreíd' },
        { id: 'q6',  prompt: '(a unos niños) (No, mentir) ___. Decir mentiras no está bien.',         correct: 'No mintáis' },
        { id: 'q7',  prompt: '(a unos alumnos) (Corregir) ___ el ejercicio.',                         correct: 'Corregid' },
        { id: 'q8',  prompt: '(a un alumno) (Comprobar) ___ las respuestas.',                          correct: 'Comprueba' },
        { id: 'q9',  prompt: '(a un alumno) (Cerrar) ___ el libro y (escuchar) ___.',                 correct: ['Cierra / escucha'] },
        { id: 'q10', prompt: '(a un amigo) (Freír) ___ más carne, por favor. Tengo mucha hambre.',     correct: 'Fríe' },
        { id: 'q11', prompt: '(a un desconocido) (Cruzar) ___ esta calle y (seguir) ___ todo recto.',   correct: ['Cruce / siga'] },
      ],
    },

    {
      id: '75.4',
      title: 'Утвердительное → отрицательное (с чередованиями)',
      type: 'fill',
      instructions: 'Перепишите ту же команду в отрицательной форме. Образец: <em>Cierra la puerta</em> → <em>No cierres la puerta</em>.',
      questions: [
        { id: 'q1', prompt: '<em>Cierra la ventana.</em> →',          correct: ['No cierres la ventana.', 'No cierres la ventana'] },
        { id: 'q2', prompt: '<em>Pide ayuda.</em> →',                  correct: ['No pidas ayuda.', 'No pidas ayuda'] },
        { id: 'q3', prompt: '<em>Vuelve tarde.</em> →',                 correct: ['No vuelvas tarde.', 'No vuelvas tarde'] },
        { id: 'q4', prompt: '<em>Juega aquí.</em> →',                   correct: ['No juegues aquí.', 'No juegues aquí'] },
        { id: 'q5', prompt: '<em>Enciende la tele.</em> →',             correct: ['No enciendas la tele.', 'No enciendas la tele'] },
        { id: 'q6', prompt: '<em>Empieza ahora.</em> →',                 correct: ['No empieces ahora.', 'No empieces ahora'] },
        { id: 'q7', prompt: '<em>Cuenta el dinero.</em> →',               correct: ['No cuentes el dinero.', 'No cuentes el dinero'] },
        { id: 'q8', prompt: '<em>Sigue por aquí.</em> →',                  correct: ['No sigas por aquí.', 'No sigas por aquí'] },
      ],
    },

    {
      id: '75.5',
      title: 'Все четыре формы',
      type: 'fill',
      instructions: 'Дан глагол в инфинитиве. Запишите запрошенную форму без частицы <em>no</em>.',
      questions: [
        { id: 'q1', prompt: '<em>cerrar</em>, (tú) afirm. →',           correct: 'cierra' },
        { id: 'q2', prompt: '<em>cerrar</em>, (vosotros) afirm. →',     correct: 'cerrad' },
        { id: 'q3', prompt: '<em>cerrar</em>, (vosotros) negat. → no ___', correct: 'cerréis' },
        { id: 'q4', prompt: '<em>pedir</em>, (usted) afirm. →',         correct: 'pida' },
        { id: 'q5', prompt: '<em>pedir</em>, (vosotros) afirm. →',      correct: 'pedid' },
        { id: 'q6', prompt: '<em>volver</em>, (tú) afirm. →',           correct: 'vuelve' },
        { id: 'q7', prompt: '<em>volver</em>, (ustedes) afirm. →',      correct: 'vuelvan' },
        { id: 'q8', prompt: '<em>jugar</em>, (vosotros) negat. → no ___', correct: 'juguéis' },
        { id: 'q9', prompt: '<em>dormir</em>, (vosotros) negat. → no ___', correct: 'durmáis' },
        { id: 'q10', prompt: '<em>seguir</em>, (usted) afirm. →',         correct: 'siga' },
      ],
    },

    {
      id: '75.6',
      title: 'Сопоставьте инфинитив с типом чередования',
      type: 'match',
      instructions: 'Какое чередование происходит у этого глагола в imperativo?',
      pool: ['e → i', 'e → ie', 'o → ue', 'u → ue'],
      questions: [
        { id: 'q1', prompt: '<em>pedir</em>',     correct: 'e → i' },
        { id: 'q2', prompt: '<em>cerrar</em>',    correct: 'e → ie' },
        { id: 'q3', prompt: '<em>volver</em>',    correct: 'o → ue' },
        { id: 'q4', prompt: '<em>jugar</em>',     correct: 'u → ue' },
        { id: 'q5', prompt: '<em>encender</em>',  correct: 'e → ie' },
        { id: 'q6', prompt: '<em>seguir</em>',     correct: 'e → i' },
        { id: 'q7', prompt: '<em>contar</em>',     correct: 'o → ue' },
        { id: 'q8', prompt: '<em>servir</em>',     correct: 'e → i' },
      ],
    },

    {
      id: '75.7',
      title: 'Где меняется гласная — а где нет',
      type: 'choice',
      instructions: 'В какой форме чередование <em>не появляется</em>?',
      questions: [
        { id: 'q1', prompt: 'Глагол <em>cerrar</em>:',
          options: ['cierra (tú)', 'cierre (usted)', 'cerrad (vosotros)', 'cierren (ustedes)'],
          correct: 'cerrad (vosotros)',
          explanation: 'У <em>vosotros</em> ударение на окончании, поэтому основа без <em>ie</em>.' },
        { id: 'q2', prompt: 'Глагол <em>volver</em>:',
          options: ['vuelve (tú)', 'vuelva (usted)', 'volved (vosotros)', 'vuelvan (ustedes)'],
          correct: 'volved (vosotros)' },
        { id: 'q3', prompt: 'Глагол <em>pedir</em>:',
          options: ['pide (tú)', 'pida (usted)', 'pedid (vosotros)', 'pidan (ustedes)'],
          correct: 'pedid (vosotros)' },
        { id: 'q4', prompt: 'Глагол <em>jugar</em>:',
          options: ['juega (tú)', 'juegue (usted)', 'jugad (vosotros)', 'jueguen (ustedes)'],
          correct: 'jugad (vosotros)' },
      ],
    },

    {
      id: '75.8',
      title: 'Multi: какие формы построены правильно?',
      type: 'multi',
      instructions: 'Отметьте <strong>все</strong> правильные формы imperativo.',
      questions: [
        {
          id: 'q1',
          prompt: 'Где правильный imperativo?',
          options: [
            'cierra la ventana',
            'cerra la ventana',
            'cierre la ventana (usted)',
            'cierren ustedes',
            'cerrad vosotros',
            'cerréis vosotros (afirm.)',
            'pide más',
            'pede más',
            'pedid más (vosotros)',
            'no pidáis más',
            'no pedáis más',
            'vuelve pronto',
            'volve pronto',
            'no vuelvas tarde',
            'juega aquí',
            'no juguéis aquí',
            'no jueguéis aquí',
            'duerme bien',
            'no durmáis (vosotros)',
            'no dormáis (vosotros)',
          ],
          correct: [
            'cierra la ventana',
            'cierre la ventana (usted)',
            'cierren ustedes',
            'cerrad vosotros',
            'pide más',
            'pedid más (vosotros)',
            'no pidáis más',
            'vuelve pronto',
            'no vuelvas tarde',
            'juega aquí',
            'no juguéis aquí',
            'duerme bien',
            'no durmáis (vosotros)',
          ],
          explanation: 'Ошибки: <em>cerra, pede, volve</em> — нет чередования; <em>cerréis vosotros (afirm.)</em> — отрицательная форма; <em>no pedáis</em> — должно быть <em>no pidáis</em>; <em>no jueguéis</em> — лишнее <em>e</em>; <em>no dormáis</em> — должно быть <em>no durmáis</em>.',
        },
      ],
    },

    {
      id: '75.9',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['cierra', 'cierre', 'cierren', 'cierrad'], correct: 'cierrad',
          explanation: 'Для <em>vosotros</em> чередования нет: <em>cerrad</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['pide', 'pida', 'pidan', 'pidid'], correct: 'pidid',
          explanation: 'Для <em>vosotros</em> — <em>pedid</em> (без чередования).' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['juega', 'juegue', 'jueguen', 'juega usted'], correct: 'juega usted',
          explanation: '<em>juega</em> — для <em>tú</em>; для <em>usted</em> — <em>juegue</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['no cierres', 'no cierre', 'no cerréis', 'no cierréis'], correct: 'no cierréis',
          explanation: 'Для <em>vosotros</em> в отрицании — <em>no cerréis</em> (без <em>ie</em>).' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['no duermas', 'no duerma', 'no dormáis', 'no durmáis'], correct: 'no dormáis',
          explanation: 'Правильная форма — <em>no durmáis</em> (o→u в отрицании vosotros).' },
      ],
    },

    {
      id: '75.10',
      title: 'Переведите',
      type: 'fill',
      instructions: 'Используйте указанную форму imperativo.',
      questions: [
        { id: 'q1', prompt: 'Закрой окно. (tú)',                 correct: ['Cierra la ventana.', 'Cierra la ventana'] },
        { id: 'q2', prompt: 'Возвращайся пораньше. (tú)',         correct: ['Vuelve pronto.', 'Vuelve pronto', 'Vuelve temprano.', 'Vuelve temprano'] },
        { id: 'q3', prompt: 'Не играйте здесь. (vosotros)',       correct: ['No juguéis aquí.', 'No juguéis aquí'] },
        { id: 'q4', prompt: 'Попроси меню. (tú)',                  correct: ['Pide el menú.', 'Pide el menú', 'Pide la carta.', 'Pide la carta'] },
        { id: 'q5', prompt: 'Не буди меня рано. (tú)',              correct: ['No me despiertes pronto.', 'No me despiertes pronto', 'No me despiertes temprano.', 'No me despiertes temprano'] },
        { id: 'q6', prompt: 'Считайте до десяти. (vosotros)',       correct: ['Contad hasta diez.', 'Contad hasta diez'] },
      ],
    },

    {
      id: '75.11',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите фразу полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Cierra la ventana, por favor.',
          correct: ['Cierra la ventana, por favor.', 'Cierra la ventana, por favor'] },
        { id: 'q2', prompt: '', audio: 'Pide lo que quieras. Yo invito.',
          correct: ['Pide lo que quieras. Yo invito.', 'Pide lo que quieras. Yo invito'] },
        { id: 'q3', prompt: '', audio: 'Vuelve pronto a casa.',
          correct: ['Vuelve pronto a casa.', 'Vuelve pronto a casa'] },
        { id: 'q4', prompt: '', audio: 'No juguéis con la pelota dentro de casa.',
          correct: ['No juguéis con la pelota dentro de casa.', 'No juguéis con la pelota dentro de casa'] },
        { id: 'q5', prompt: '', audio: 'Sigan ustedes todo recto.',
          correct: ['Sigan ustedes todo recto.', 'Sigan ustedes todo recto'] },
        { id: 'q6', prompt: '', audio: 'Cuenta hasta diez y respira.',
          correct: ['Cuenta hasta diez y respira.', 'Cuenta hasta diez y respira'] },
        { id: 'q7', prompt: '', audio: 'No despiertes a Sonia, está cansada.',
          correct: ['No despiertes a Sonia, está cansada.', 'No despiertes a Sonia, está cansada'] },
      ],
    },
  ],
};
