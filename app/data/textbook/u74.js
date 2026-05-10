// ============================================================
// Unidad 74 — Imperativo negativo: verbos regulares
// No abras la ventana — отрицательный императив = subjuntivo.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u74 = {
  id: 'u74',
  number: 74,
  title: { es: 'No abras la ventana', topic: 'Imperativo negativo: verbos regulares' },
  topicRu: 'Повелительное наклонение (отрицательная форма): правильные глаголы',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Para prohibir o pedir <em>no hacer algo</em> usamos el <strong>imperativo negativo</strong>: <em>no</em> + verbo. Las formas son <strong>distintas</strong> de las afirmativas — coinciden con las del <strong>presente de subjuntivo</strong>.',
      ru: 'Когда хотим запретить, попросить «не делать», используем <strong>отрицательный imperativo</strong>: ставим <em>no</em> и глагол в особой форме. Эти формы <strong>отличаются</strong> от утвердительных и совпадают с формами <strong>presente de subjuntivo</strong> (его подробно разберём в Unidad 79–81).',
      examples: [
        { es: '<strong>No abras</strong> la ventana, por favor. Tengo frío.', ru: 'Не открывай окно, пожалуйста. Мне холодно.' },
        { es: '¡<strong>No toques</strong> eso! Es peligroso.', ru: 'Не трогай это! Это опасно.' },
        { es: '<strong>No habléis</strong> en clase.', ru: 'Не разговаривайте на уроке. (vosotros)' },
      ],
    },
    {
      type: 'heading',
      text: 'Образование (правильные глаголы)',
    },
    {
      type: 'table',
      caption: 'Imperativo negativo — правильные',
      columns: ['Pronombre', '−ar (trabajar)', '−er (comer)', '−ir (vivir)'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex', 'col-ex'],
      rows: [
        ['(tú)',           'no trabaj<strong>es</strong>',   'no com<strong>as</strong>',   'no viv<strong>as</strong>'],
        ['(usted)',        'no trabaj<strong>e</strong>',    'no com<strong>a</strong>',    'no viv<strong>a</strong>'],
        ['(vosotros, −as)','no trabaj<strong>éis</strong>',  'no com<strong>áis</strong>',  'no viv<strong>áis</strong>'],
        ['(ustedes)',      'no trabaj<strong>en</strong>',   'no com<strong>an</strong>',   'no viv<strong>an</strong>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Notas: las formas de <em>usted</em> y <em>ustedes</em> son <strong>iguales</strong> a las del afirmativo (<em>(no) abra, (no) abran</em>). Las formas de <em>tú</em> y <em>vosotros</em> son <strong>distintas</strong>: <em>abre / no abras</em>; <em>abrid / no abráis</em>.',
      ru: 'Важно:<br>• <em>usted / ustedes</em> — формы такие же, как в утвердительном: <em>abra / no abra</em>, <em>abran / no abran</em>.<br>• <em>tú</em> и <em>vosotros</em> — формы <strong>другие</strong>: <em>abre / no abras</em>; <em>abrid / no abráis</em>. У <em>vosotros</em> в отрицании — <em>−éis / −áis / −áis</em>.',
    },
    {
      type: 'rule',
      es: 'El verbo <strong>ver</strong>: <em>no veas, no vea, no veáis, no vean</em>.',
      ru: 'Особый глагол <strong>ver</strong>: <em>no veas, no vea, no veáis, no vean</em>.',
      examples: [
        { es: '<strong>No veas</strong> tanto la tele.', ru: 'Не смотри так много телевизор.' },
      ],
    },
    {
      type: 'heading',
      text: 'Орфографические изменения',
    },
    {
      type: 'rule',
      es: 'Como en el afirmativo, los verbos en <em>−gar, −ger, −car, −zar</em> mantienen el sonido cambiando la consonante final de la raíz <strong>en todas las personas</strong> del negativo.',
      ru: 'У глаголов на <em>−gar, −ger, −car, −zar</em> те же орфографические замены, что и в утвердительном — но <strong>во всех формах отрицания</strong> (потому что окончания везде начинаются с <em>e</em> или <em>a</em> «другого» типа).',
      examples: [
        { es: '−<strong>gar</strong>: pagar → no <strong>pagues</strong>, no pague, no <strong>paguéis</strong>, no paguen', ru: '' },
        { es: '−<strong>ger</strong>: escoger → no <strong>escojas</strong>, no escoja, no <strong>escojáis</strong>, no escojan', ru: '' },
        { es: '−<strong>car</strong>: practicar → no <strong>practiques</strong>, no practique, no <strong>practiquéis</strong>, no practiquen', ru: '' },
        { es: '−<strong>zar</strong>: cruzar → no <strong>cruces</strong>, no cruce, no <strong>crucéis</strong>, no crucen', ru: '' },
      ],
    },
    {
      type: 'heading',
      text: 'Утвердительный vs отрицательный',
    },
    {
      type: 'table',
      caption: 'abrir / cerrar / abrir в двух формах',
      columns: ['Afirmativo', 'Negativo'],
      colClasses: ['col-ex', 'col-ex'],
      rows: [
        ['<em><strong>Abre</strong> la ventana. (tú)</em>', '<em><strong>No abras</strong> la ventana. (tú)</em>'],
        ['<em><strong>Abra</strong> la ventana. (usted)</em>', '<em><strong>No abra</strong> la ventana. (usted)</em>'],
        ['<em><strong>Abrid</strong> la ventana. (vosotros)</em>', '<em><strong>No abráis</strong> la ventana. (vosotros)</em>'],
        ['<em><strong>Abran</strong> la ventana. (ustedes)</em>', '<em><strong>No abran</strong> la ventana. (ustedes)</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'El imperativo negativo se usa para: <strong>órdenes / instrucciones</strong> («не делай!»), <strong>peticiones</strong> («не открывай, пожалуйста»), <strong>consejos / advertencias</strong> («не пей оттуда!») и para <strong>negar permiso</strong> («нет, не бери»).',
      ru: 'Использование такое же, как у утвердительного, только наоборот:<br>• приказы/запреты: <em>No habléis en clase.</em><br>• просьбы: <em>No abras la ventana, tengo frío.</em><br>• советы/предостережения: <em>No bebáis agua de esa fuente.</em><br>• отказ в разрешении: <em>—¿Puedo coger el coche? —No, no lo cojas.</em>',
      examples: [
        { es: '<strong>No coma</strong> muchas grasas. Es malo para el corazón.', ru: 'Не ешьте много жирного. Это вредно для сердца.' },
        { es: '<strong>No olviden</strong> el paraguas. Puede llover.', ru: 'Не забудьте зонт. Может пойти дождь.' },
        { es: '—Papá, ¿puedo coger el coche? —No, <strong>no lo cojas</strong>. Lo necesito yo.', ru: '— Папа, можно я возьму машину? — Нет, не бери. Она нужна мне.' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '74.1',
      title: 'Образуйте все четыре формы отрицания',
      type: 'fill',
      instructions: 'Запишите указанную форму imperativo negativo (без частицы <em>no</em>).',
      questions: [
        { id: 'q1',  prompt: '<em>trabajar</em>, форма (tú) — no ___',     correct: 'trabajes' },
        { id: 'q2',  prompt: '<em>trabajar</em>, форма (usted) — no ___',  correct: 'trabaje' },
        { id: 'q3',  prompt: '<em>trabajar</em>, форма (vosotros) — no ___', correct: 'trabajéis' },
        { id: 'q4',  prompt: '<em>trabajar</em>, форма (ustedes) — no ___', correct: 'trabajen' },
        { id: 'q5',  prompt: '<em>comer</em>, форма (tú) — no ___',         correct: 'comas' },
        { id: 'q6',  prompt: '<em>comer</em>, форма (usted) — no ___',      correct: 'coma' },
        { id: 'q7',  prompt: '<em>comer</em>, форма (vosotros) — no ___',   correct: 'comáis' },
        { id: 'q8',  prompt: '<em>vivir</em>, форма (tú) — no ___',         correct: 'vivas' },
        { id: 'q9',  prompt: '<em>vivir</em>, форма (vosotros) — no ___',    correct: 'viváis' },
        { id: 'q10', prompt: '<em>vivir</em>, форма (ustedes) — no ___',     correct: 'vivan' },
      ],
    },

    {
      id: '74.2',
      title: 'Дорожные знаки (форма usted)',
      type: 'fill',
      instructions: 'Запас глаголов: <em>adelantar, aparcar, girar, parar</em>. К водителю обращаются на <em>usted</em>.',
      questions: [
        { id: 'q1', prompt: '___ a la izquierda. (запрет на левый поворот)',  correct: 'No gire' },
        { id: 'q2', prompt: '___ a la derecha. (запрет на правый поворот)',    correct: 'No gire' },
        { id: 'q3', prompt: '___ aquí. (запрет остановки)',                    correct: 'No pare' },
        { id: 'q4', prompt: '___ aquí. (запрет парковки)',                     correct: 'No aparque' },
        { id: 'q5', prompt: '___ aquí. (нельзя обгонять)',                     correct: 'No adelante' },
      ],
    },

    {
      id: '74.3',
      title: 'Что отец сказал бы детям',
      type: 'fill',
      instructions: 'Поставьте подходящую форму отрицательного imperativo.',
      questions: [
        { id: 'q1', prompt: '(Sus hijos están viendo mucha televisión.) «(No, ver) ___ tanta televisión.»', correct: 'No veáis' },
        { id: 'q2', prompt: '(Su hijo deja sus cosas en el salón.) «(No, dejar) ___ tus cosas en el salón.»', correct: 'No dejes' },
        { id: 'q3', prompt: '(Su hija está bebiendo demasiado granizado.) «(No, beber) ___ más granizado.»', correct: 'No bebas' },
        { id: 'q4', prompt: '(Su hijo está tocando la guitarra a las dos de la mañana.) «(No, tocar) ___ la guitarra a estas horas.»', correct: 'No toques' },
        { id: 'q5', prompt: '(Su hijo quiere regresar tarde.) «(No, regresar) ___ muy tarde.»', correct: 'No regreses' },
        { id: 'q6', prompt: '(Sus hijos están discutiendo.) «(No, discutir) ___.»', correct: 'No discutáis' },
        { id: 'q7', prompt: '(Su hija está comiendo en el salón.) «(No, comer) ___ en el salón.»', correct: 'No comas' },
      ],
    },

    {
      id: '74.4',
      title: 'Какую форму выбрать (по адресату)',
      type: 'fill',
      instructions: 'Поставьте нужную форму отрицательного imperativo. Образец: <em>(a un amigo) (No, tirar) ___ cosas al suelo</em> → <em>No tires</em>.',
      questions: [
        { id: 'q1',  prompt: '(a unos alumnos) (No, escribir) ___ en las mesas.',                       correct: 'No escribáis' },
        { id: 'q2',  prompt: '(a un niño) (No, coger) ___ nada del suelo. Está muy sucio.',            correct: 'No cojas' },
        { id: 'q3',  prompt: '(a unos desconocidos) (No, comer) ___ aquí, por favor. Está prohibido.',   correct: 'No coman' },
        { id: 'q4',  prompt: '(a unos amigos) La cena es a las nueve. (No, llegar) ___ tarde.',          correct: 'No lleguéis' },
        { id: 'q5',  prompt: '(a unos amigos) (No, cortar) ___ flores. Está prohibido.',                  correct: 'No cortéis' },
        { id: 'q6',  prompt: '(a unos desconocidos) (No, cruzar) ___ por aquí. Es peligroso.',            correct: 'No crucen' },
        { id: 'q7',  prompt: '(a un amigo) (No, tocar) ___ eso. Está caliente.',                          correct: 'No toques' },
        { id: 'q8',  prompt: '(a un niño) —¿Puedo llamar a Rafa? —No, (no, llamar) ___ ahora. Es tarde.',  correct: 'no llames' },
        { id: 'q9',  prompt: '(a un desconocido) (No, pisar) ___ el césped, por favor.',                    correct: 'No pise' },
        { id: 'q10', prompt: '(a un amigo) (No, ver) ___ esa película. Es muy aburrida.',                   correct: 'No veas' },
        { id: 'q11', prompt: '(a un amigo) (No, hablar) ___ tan alto. Te oigo perfectamente.',              correct: 'No hables' },
        { id: 'q12', prompt: '(a unos amigos) (No, gastar) ___ mucha agua. Hay sequía.',                    correct: 'No gastéis' },
        { id: 'q13', prompt: '(a un alumno) (No, usar) ___ el móvil en clase.',                              correct: 'No uses' },
        { id: 'q14', prompt: '(a un desconocido) (No, dejar) ___ las maletas solas.',                         correct: 'No deje' },
      ],
    },

    {
      id: '74.5',
      title: 'Орфография (gar / ger / car / zar) в отрицании',
      type: 'fill',
      instructions: 'Поставьте отрицательную форму <em>tú</em> или <em>vosotros</em>.',
      questions: [
        { id: 'q1', prompt: '<em>pagar</em>, (tú) — no ___',          correct: 'pagues' },
        { id: 'q2', prompt: '<em>practicar</em>, (vosotros) — no ___', correct: 'practiquéis' },
        { id: 'q3', prompt: '<em>cruzar</em>, (tú) — no ___',          correct: 'cruces' },
        { id: 'q4', prompt: '<em>escoger</em>, (tú) — no ___',         correct: 'escojas' },
        { id: 'q5', prompt: '<em>llegar</em>, (vosotros) — no ___',     correct: 'lleguéis' },
        { id: 'q6', prompt: '<em>buscar</em>, (tú) — no ___',           correct: 'busques' },
        { id: 'q7', prompt: '<em>recoger</em>, (vosotros) — no ___',    correct: 'recojáis' },
      ],
    },

    {
      id: '74.6',
      title: 'Утвердительное → отрицательное',
      type: 'fill',
      instructions: 'Перепишите ту же команду в отрицательной форме (без смены лица). Образец: <em>Abre la puerta</em> → <em>No abras la puerta</em>.',
      questions: [
        { id: 'q1', prompt: '<em>Habla más alto.</em> →',     correct: ['No hables más alto.', 'No hables más alto'] },
        { id: 'q2', prompt: '<em>Come más.</em> →',           correct: ['No comas más.', 'No comas más'] },
        { id: 'q3', prompt: '<em>Bebe agua.</em> →',           correct: ['No bebas agua.', 'No bebas agua'] },
        { id: 'q4', prompt: '<em>Pasen ustedes.</em> →',        correct: ['No pasen ustedes.', 'No pasen ustedes', 'No pasen.', 'No pasen'] },
        { id: 'q5', prompt: '<em>Hablad más alto. (vosotros)</em> →', correct: ['No habléis más alto.', 'No habléis más alto'] },
        { id: 'q6', prompt: '<em>Cruza por aquí.</em> →',       correct: ['No cruces por aquí.', 'No cruces por aquí'] },
        { id: 'q7', prompt: '<em>Pague en la caja.</em> →',     correct: ['No pague en la caja.', 'No pague en la caja'] },
      ],
    },

    {
      id: '74.7',
      title: 'Сопоставьте лицо с формой (tú vs vosotros)',
      type: 'match',
      instructions: 'Какому лицу соответствует каждая отрицательная форма?',
      pool: ['(tú)', '(usted)', '(vosotros)', '(ustedes)'],
      questions: [
        { id: 'q1', prompt: '<em>no hables</em>',     correct: '(tú)' },
        { id: 'q2', prompt: '<em>no habléis</em>',    correct: '(vosotros)' },
        { id: 'q3', prompt: '<em>no hablen</em>',     correct: '(ustedes)' },
        { id: 'q4', prompt: '<em>no hable</em>',      correct: '(usted)' },
        { id: 'q5', prompt: '<em>no comas</em>',      correct: '(tú)' },
        { id: 'q6', prompt: '<em>no comáis</em>',     correct: '(vosotros)' },
        { id: 'q7', prompt: '<em>no escriban</em>',    correct: '(ustedes)' },
        { id: 'q8', prompt: '<em>no escribas</em>',    correct: '(tú)' },
      ],
    },

    {
      id: '74.8',
      title: 'Multi: где формы построены правильно?',
      type: 'multi',
      instructions: 'Отметьте <strong>все</strong> правильно построенные отрицательные команды.',
      questions: [
        {
          id: 'q1',
          prompt: 'Где imperativo negativo построен правильно?',
          options: [
            'No abras la ventana. (tú)',
            'No abre la ventana. (tú)',
            'No abráis la ventana. (vosotros)',
            'No abrid la ventana. (vosotros)',
            'No abran la ventana. (ustedes)',
            'No coman aquí.',
            'No comen aquí.',
            'No pagues con tarjeta.',
            'No pages con tarjeta.',
            'No cruces ahora.',
            'No cruzas ahora.',
            'No habléis tan alto.',
          ],
          correct: [
            'No abras la ventana. (tú)',
            'No abráis la ventana. (vosotros)',
            'No abran la ventana. (ustedes)',
            'No coman aquí.',
            'No pagues con tarjeta.',
            'No cruces ahora.',
            'No habléis tan alto.',
          ],
          explanation: 'У <em>tú</em> в отрицании — <em>−as / −es</em>; у <em>vosotros</em> — <em>−áis / −éis</em>; формы <em>abre, abrid, comen, pages, cruzas</em> — либо утвердительный imperativo, либо ошибки орфографии.',
        },
      ],
    },

    {
      id: '74.9',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['no abras', 'no abre', 'no abra', 'no abráis'], correct: 'no abre',
          explanation: 'Для <em>tú</em> в отрицании — <em>no abras</em>, не <em>no abre</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['no pagues', 'no pages', 'no pague', 'no paguen'], correct: 'no pages',
          explanation: 'Перед <em>e</em> ставим <em>gu</em>: <em>no pagues</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['no comas', 'no comáis', 'no coman', 'no comad'], correct: 'no comad',
          explanation: 'Несуществующая форма; для <em>vosotros</em> — <em>no comáis</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['no cruces', 'no cruzes', 'no cruce', 'no crucen'], correct: 'no cruzes',
          explanation: 'Перед <em>e</em>: <em>z → c</em>: <em>no cruces</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['no veas', 'no vea', 'no veáis', 'no ves'], correct: 'no ves',
          explanation: '<em>no ves</em> — настоящее; в imperativo — <em>no veas</em>.' },
      ],
    },

    {
      id: '74.10',
      title: 'Переведите',
      type: 'fill',
      instructions: 'Используйте указанную форму отрицательного imperativo.',
      questions: [
        { id: 'q1', prompt: 'Не открывай окно. (tú)',           correct: ['No abras la ventana.', 'No abras la ventana'] },
        { id: 'q2', prompt: 'Не открывайте дверь. (usted)',     correct: ['No abra la puerta.', 'No abra la puerta'] },
        { id: 'q3', prompt: 'Не разговаривайте на уроке. (vosotros)', correct: ['No habléis en clase.', 'No habléis en clase'] },
        { id: 'q4', prompt: 'Не курите здесь, пожалуйста. (ustedes)', correct: ['No fumen aquí, por favor.', 'No fumen aquí, por favor'] },
        { id: 'q5', prompt: 'Не пей много кофе. (tú)',           correct: ['No bebas mucho café.', 'No bebas mucho café'] },
      ],
    },

    {
      id: '74.11',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите фразу полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'No abras la ventana, tengo frío.',
          correct: ['No abras la ventana, tengo frío.', 'No abras la ventana, tengo frío'] },
        { id: 'q2', prompt: '', audio: 'No habléis tan alto.',
          correct: ['No habléis tan alto.', 'No habléis tan alto'] },
        { id: 'q3', prompt: '', audio: 'No coman muchas grasas.',
          correct: ['No coman muchas grasas.', 'No coman muchas grasas'] },
        { id: 'q4', prompt: '', audio: 'No olviden el paraguas.',
          correct: ['No olviden el paraguas.', 'No olviden el paraguas'] },
        { id: 'q5', prompt: '', audio: 'No cruces por aquí, es peligroso.',
          correct: ['No cruces por aquí, es peligroso.', 'No cruces por aquí, es peligroso'] },
        { id: 'q6', prompt: '', audio: 'No pagues con tarjeta, no funciona.',
          correct: ['No pagues con tarjeta, no funciona.', 'No pagues con tarjeta, no funciona'] },
      ],
    },
  ],
};
