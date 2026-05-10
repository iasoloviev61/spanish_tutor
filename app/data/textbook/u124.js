// ============================================================
// Unidad 124 — Reglas de acentuación (2)
// «adiós, león, continúa»: дифтонги, хиаты и tilde.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u124 = {
  id: 'u124',
  number: 124,
  title: { es: 'adiós, león, continúa', topic: 'Reglas de acentuación (2)' },
  topicRu: 'Правила ударения (2): дифтонги, хиаты и поведение i/u',

  theory: [
    {
      type: 'rule',
      es: 'Las vocales se dividen en dos grupos: <strong>débiles</strong> (i, u) y <strong>fuertes</strong> (a, e, o). El comportamiento de un grupo de vocales contiguas depende de cuáles son y dónde cae el acento. De ello depende también la tilde.',
      ru: 'Гласные в испанском бывают «слабые» (<em>i, u</em>) и «сильные» (<em>a, e, o</em>). Когда они встречаются подряд, образуется либо <em>дифтонг</em> (одна слога), либо <em>хиат</em> (две). От этого зависит, нужна tilde или нет.',
      examples: [
        { es: '<strong>a-gua</strong>, <strong>ai-re</strong>, <strong>can-ción</strong>, <strong>cien-to</strong> — дифтонги.', ru: 'i/u + a/e/o = один слог.' },
        { es: '<strong>le-ón</strong>, <strong>a-é-re-o</strong>, <strong>lí-ne-a</strong> — хиаты.', ru: 'a + e + o = два или три слога.' },
        { es: '<strong>Ma-rí-a</strong>, <strong>dor-mí-os</strong>, <strong>hu-í-a</strong> — хиат с обязательной tilde.', ru: 'Если i/u ударные и сильные рядом — хиат, всегда с tilde.' },
      ],
    },

    {
      type: 'heading',
      text: '1. Группы i/u + a/e/o (дифтонги)',
    },
    {
      type: 'rule',
      es: 'Los grupos <strong>i/u + a/e/o</strong> y <strong>a/e/o + i/u</strong> forman normalmente <strong>una sola sílaba</strong> (diptongo). Siguen las reglas generales de la Unidad 123: si la sílaba acentuada no coincide con la regla — se pone tilde, y va sobre la vocal <em>fuerte</em> (a, e, o).',
      ru: 'Сочетания <em>i/u + a/e/o</em> (или наоборот) образуют один слог — дифтонг. К ним применяется то же общее правило: tilde нужна, если ударение «неправильное». При этом tilde ставится на <strong>сильную</strong> гласную (a, e, o).',
      examples: [
        { es: 'reme-<strong>diad</strong> — оканч. на согл., правило само работает.', ru: '«Лекарство» — ударение на «diad», правило выполнено.' },
        { es: 'em-<strong>pie</strong>-za, <strong>cien</strong>-to, <strong>nues</strong>-tro, <strong>ju</strong>-lio — на гласную, ударение на предпоследнем.', ru: 'Без tilde — общее правило сразу работает.' },
        { es: '<strong>huésped</strong>, can-<strong>ción</strong>, die-ci-<strong>séis</strong>, a-<strong>diós</strong>, far-ma-<strong>céu</strong>-ti-co, lim-<strong>piáis</strong> — tilde на a/e/o.', ru: 'Tilde нужна, и она ставится на сильную гласную.' },
      ],
    },
    {
      type: 'atencion',
      es: 'La <strong>y final</strong> se considera consonante: las terminaciones <strong>-ay, -ey, -oy, -uy</strong> nunca llevan tilde, aunque el acento esté en la última: <em>estoy, Paraguay, Uruguay, buey, rey</em>.',
      ru: 'Финальная <em>y</em> ведёт себя как согласная. Окончания <em>-ay, -ey, -oy, -uy</em> tilde не получают, даже если ударение на этом слоге: <em>estoy, Paraguay, rey, buey</em>.',
    },
    {
      type: 'atencion',
      es: 'Las palabras de una sola sílaba con grupo vocálico no llevan tilde: <em>dio, vio, fui, rey, seis, soy</em>.',
      ru: 'Односложные слова — без tilde: <em>dio, vio, fui, rey, seis, soy</em>.',
    },

    {
      type: 'heading',
      text: '2. Группы i + u и u + i',
    },
    {
      type: 'rule',
      es: 'Los grupos <strong>i + u</strong> y <strong>u + i</strong> también forman <strong>una sola sílaba</strong> (dos vocales débiles juntas) y siguen las reglas generales. Si se necesita tilde, va sobre la <strong>segunda</strong> vocal.',
      ru: 'Сочетания <em>iu</em> и <em>ui</em> — тоже один слог. Правило общее. Tilde, если нужна, ставится на <strong>вторую</strong> гласную.',
      examples: [
        { es: 'cir-<strong>cui</strong>-to, <strong>rui</strong>-do, <strong>viu</strong>-do — без tilde.', ru: 'Без tilde, правило само работает.' },
        { es: '<strong>cuí</strong>-da-los, vein-ti-<strong>ún</strong> — с tilde на второй гласной.', ru: 'Tilde на второй гласной, если нужна.' },
      ],
    },

    {
      type: 'heading',
      text: '3. Группы a + e + o (хиаты)',
    },
    {
      type: 'rule',
      es: 'Los grupos formados por <strong>a, e, o</strong> (vocales fuertes) forman <strong>dos sílabas</strong> separadas (hiato) y siguen las reglas generales.',
      ru: 'Если рядом две «сильные» гласные (a, e, o), они образуют разные слоги (хиат). Применяются общие правила.',
      examples: [
        { es: 'a-<strong>é</strong>-re-o, a-<strong>ho</strong>-ra, <strong>a</strong>-mar, le-<strong>ón</strong>, <strong>lí</strong>-ne-a, mo-<strong>ve</strong>-os, o-<strong>a</strong>-sis, re-ha-<strong>cer</strong>.',
          ru: 'Произношение по слогам — две гласные, два слога.' },
      ],
    },

    {
      type: 'heading',
      text: '4. i/u ударные + a/e/o (хиат с tilde)',
    },
    {
      type: 'rule',
      es: 'Cuando una <em>i</em> o <em>u</em> <strong>acentuada</strong> está junto a <em>a, e, o</em>, no forman diptongo, sino <strong>hiato</strong> (dos sílabas). En este caso <strong>siempre se pone tilde</strong> sobre la <em>i</em> o la <em>u</em>, independientemente de las reglas generales.',
      ru: 'Если ударение падает на «слабую» гласную (i или u), стоящую рядом с «сильной» (a, e, o), общее правило не работает: всегда ставим tilde на i/u. Это и есть способ показать, что слабая гласная — ударная и образует отдельный слог.',
      examples: [
        { es: 'Ma-<strong>rí</strong>-a, a-<strong>brí</strong>-ais, dor-<strong>mí</strong>-os, hu-<strong>í</strong>-a.',
          ru: 'И в каждом случае слабая гласная — ударная, поэтому tilde.' },
        { es: 'o-<strong>í</strong>r, dí-a, ha-<strong>bí</strong>-a, <strong>bú</strong>-ho, <strong>rí</strong>-o, Ra-<strong>úl</strong>, ma-<strong>íz</strong>, son-<strong>rí</strong>-o.',
          ru: 'Слабая ударная + сильная всегда требует tilde.' },
      ],
    },

    {
      type: 'table',
      caption: 'Спряжения с tilde на i/u: continuar / reír / prohibir',
      columns: ['<strong>con-ti-nu-ar</strong>', '<strong>re-ír</strong>', '<strong>prohi-bir</strong>'],
      colClasses: ['col-pattern', 'col-pattern', 'col-pattern'],
      rows: [
        ['conti<strong>nú</strong>o',     '<strong>rí</strong>o',     'pro<strong>hí</strong>bo'],
        ['conti<strong>nú</strong>as',    '<strong>rí</strong>es',    'pro<strong>hí</strong>bes'],
        ['conti<strong>nú</strong>a',     '<strong>rí</strong>e',     'pro<strong>hí</strong>be'],
        ['conti-nu<strong>a</strong>-mos','re-<strong>í</strong>-mos', 'prohi-<strong>bi</strong>-mos'],
        ['conti-nu-<strong>áis</strong>', 're-<strong>ís</strong>',   'prohi-<strong>bís</strong>'],
        ['conti<strong>nú</strong>an',    '<strong>rí</strong>en',    'pro<strong>hí</strong>ben'],
      ],
    },
    {
      type: 'atencion',
      es: 'En las formas <em>nosotros</em> y <em>vosotros</em> el acento se desplaza y desaparece la tilde de la <em>i/u</em>: <em>conti-nu-a-mos, prohi-bi-mos</em>. Pero en <em>vosotros</em> de <em>reír</em> aparece otra tilde por la regla general: <em>re-ís</em>.',
      ru: 'В формах <em>nosotros/vosotros</em> ударение часто переходит на другой слог — tilde исчезает или меняется. Сравните: <em>continúo / continuamos</em>; <em>río / reímos</em>; <em>prohíbo / prohibimos</em>.',
    },
  ],

  exercises: [
    {
      id: '124.1',
      title: 'Один или два слога?',
      type: 'choice',
      instructions: 'i/u + a/e/o = один слог. a + e + o = два слога. i/u ударные + a/e/o = два слога с tilde.',
      questions: [
        { id: 'q1', prompt: '<em>aire</em> — сколько слогов в этом слове?',                            options: ['1', '2', '3'], correct: '2', explanation: '<em>ai-re</em> — <em>ai</em> дифтонг (1 слог) + <em>re</em>.' },
        { id: 'q2', prompt: '<em>cuerno</em> — сколько слогов?',                                       options: ['1', '2', '3'], correct: '2', explanation: '<em>cuer-no</em>: <em>ue</em> дифтонг.' },
        { id: 'q3', prompt: '<em>cien</em>',                                                              options: ['1', '2', '3'], correct: '1' },
        { id: 'q4', prompt: '<em>ciudad</em>',                                                              options: ['1', '2', '3'], correct: '2', explanation: '<em>ciu-dad</em>: <em>iu</em> — один слог.' },
        { id: 'q5', prompt: '<em>océano</em>',                                                                options: ['2', '3', '4'], correct: '4', explanation: '<em>o-cé-a-no</em>.' },
        { id: 'q6', prompt: '<em>diez</em>',                                                                    options: ['1', '2', '3'], correct: '1' },
        { id: 'q7', prompt: '<em>egipcio</em>',                                                                   options: ['2', '3', '4'], correct: '3', explanation: '<em>e-gip-cio</em>.' },
        { id: 'q8', prompt: '<em>María</em>',                                                                        options: ['2', '3', '4'], correct: '3', explanation: '<em>Ma-rí-a</em> — хиат с tilde.' },
      ],
    },

    {
      id: '124.2',
      title: 'Поставьте tilde, где она нужна',
      type: 'fill',
      instructions: 'Запишите слово. Если tilde нужна — добавьте её. Если нет — оставьте как есть.',
      questions: [
        { id: 'q1', prompt: 'estais (vosotros)',                                            correct: 'estáis' },
        { id: 'q2', prompt: 'cuidate (imperativo)',                                           correct: 'cuídate' },
        { id: 'q3', prompt: 'habitacion',                                                       correct: 'habitación' },
        { id: 'q4', prompt: 'Europa',                                                              correct: 'Europa' },
        { id: 'q5', prompt: 'Colombia',                                                              correct: 'Colombia' },
        { id: 'q6', prompt: 'acostaos (imperativo de acostarse)',                                       correct: 'acostaos' },
        { id: 'q7', prompt: 'Jamaica',                                                                     correct: 'Jamaica' },
        { id: 'q8', prompt: 'bacalao',                                                                       correct: 'bacalao' },
        { id: 'q9', prompt: 'ruinas',                                                                          correct: 'ruinas' },
        { id: 'q10', prompt: 'levantaos (imperativo de levantarse)',                                              correct: 'levantaos' },
      ],
    },

    {
      id: '124.3',
      title: 'Хиат или дифтонг? Поставьте tilde, где нужна',
      type: 'fill',
      instructions: 'Если i/u ударные стоят рядом с a/e/o — tilde обязательна.',
      questions: [
        { id: 'q1', prompt: 'tia (тётя)',                                                                  correct: 'tía' },
        { id: 'q2', prompt: 'oido (слух / прич. от oír)',                                                    correct: 'oído' },
        { id: 'q3', prompt: 'raiz (корень)',                                                                    correct: 'raíz' },
        { id: 'q4', prompt: 'relojeria',                                                                          correct: 'relojería' },
        { id: 'q5', prompt: 'oleo (масло художн.)',                                                                  correct: 'óleo' },
        { id: 'q6', prompt: 'hacia (глагол, прош., 3 sg. от <em>hacer</em>) — какая форма с tilde?',                    correct: 'hacía', explanation: '<em>hacía</em> «делал» — с tilde (хиат). <em>hacia</em> без tilde — предлог «к, в направлении».' },
        { id: 'q7', prompt: 'ahi (там/туда)',                                                                            correct: 'ahí' },
        { id: 'q8', prompt: 'heroe',                                                                                       correct: 'héroe' },
        { id: 'q9', prompt: 'vehiculo',                                                                                       correct: 'vehículo' },
        { id: 'q10', prompt: 'subios (imperativo de subirse, vosotros)',                                                            correct: 'subíos' },
        { id: 'q11', prompt: 'frio',                                                                                                   correct: 'frío' },
        { id: 'q12', prompt: 'envian (3 pl.)',                                                                                            correct: 'envían' },
        { id: 'q13', prompt: 'acentuo (1 sg. de <em>acentuar</em>)',                                                                          correct: 'acentúo' },
        { id: 'q14', prompt: 'acentuar (инф.)',                                                                                                   correct: 'acentuar' },
        { id: 'q15', prompt: 'baul (сундук)',                                                                                                       correct: 'baúl' },
      ],
    },

    {
      id: '124.4',
      title: 'Спряжение continuar, reír, prohibir',
      type: 'fill',
      instructions: 'Запишите форму с правильной tilde.',
      questions: [
        { id: 'q1', prompt: 'continuar — yo →',                                                        correct: 'continúo' },
        { id: 'q2', prompt: 'continuar — tú →',                                                         correct: 'continúas' },
        { id: 'q3', prompt: 'continuar — nosotros →',                                                    correct: 'continuamos' },
        { id: 'q4', prompt: 'continuar — vosotros →',                                                     correct: 'continuáis' },
        { id: 'q5', prompt: 'reír — yo →',                                                                  correct: 'río' },
        { id: 'q6', prompt: 'reír — él →',                                                                    correct: 'ríe' },
        { id: 'q7', prompt: 'reír — nosotros →',                                                                correct: 'reímos' },
        { id: 'q8', prompt: 'reír — vosotros →',                                                                  correct: 'reís' },
        { id: 'q9', prompt: 'prohibir — yo →',                                                                       correct: 'prohíbo' },
        { id: 'q10', prompt: 'prohibir — ellos →',                                                                      correct: 'prohíben' },
        { id: 'q11', prompt: 'prohibir — nosotros →',                                                                      correct: 'prohibimos' },
      ],
    },

    {
      id: '124.5',
      title: 'Расставьте tilde в группах слов',
      type: 'fill',
      instructions: 'Запишите весь ряд с правильно расставленными tilde.',
      questions: [
        { id: 'q1', prompt: 'oigo, oyes, oye, oimos, ois, oyen',
          correct: ['oigo, oyes, oye, oímos, oís, oyen'] },
        { id: 'q2', prompt: 'rei, reiste, rio, reimos, reisteis, rieron',
          correct: ['reí, reíste, rio, reímos, reísteis, rieron'], explanation: '<em>rio</em> в 3-м л. простого прошедшего теперь без tilde (по решению RAE 2010 — одно слог); <em>reí, reíste, reímos, reísteis</em> — хиаты с tilde.' },
        { id: 'q3', prompt: 'actuo, actuas, actua, actuamos, actuais, actuan',
          correct: ['actúo, actúas, actúa, actuamos, actuáis, actúan'] },
        { id: 'q4', prompt: 'reuno, reunes, reune, reunimos, reunis, reunen',
          correct: ['reúno, reúnes, reúne, reunimos, reunís, reúnen'] },
      ],
    },

    {
      id: '124.6',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна неверно записанная форма.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?',
          options: ['adiós', 'canción', 'también', 'cancion'],
          correct: 'cancion', explanation: '<em>canción</em> — оканчивается на <em>n</em>, ударение должно быть на предпоследнем, но реально на «ción» → tilde на <em>o</em>.' },
        { id: 'q2', prompt: 'Где ошибка?',
          options: ['estoy', 'Paraguay', 'estóy', 'Uruguay'],
          correct: 'estóy', explanation: 'Окончания <em>-ay, -ey, -oy, -uy</em> не получают tilde.' },
        { id: 'q3', prompt: 'Где ошибка?',
          options: ['María', 'día', 'Maria', 'frío'],
          correct: 'Maria', explanation: 'Ударная i рядом с a — обязательно tilde: <em>María</em>.' },
        { id: 'q4', prompt: 'Где ошибка?',
          options: ['continúo', 'continuamos', 'continúan', 'continuá'],
          correct: 'continuá', explanation: 'В этой парадигме <em>continúa</em> — 3 л. ед. ч.' },
        { id: 'q5', prompt: 'Где ошибка?',
          options: ['héroe', 'leon', 'aéreo', 'línea'],
          correct: 'leon', explanation: '<em>león</em> — окончание <em>n</em>, ударение на последнем «ón» → tilde.' },
      ],
    },

    {
      id: '124.7',
      title: 'Все слова с правильной tilde',
      type: 'multi',
      instructions: 'Отметьте слова без ошибок.',
      questions: [
        {
          id: 'q1',
          prompt: 'Отметьте правильные:',
          options: [
            'adiós',
            'adios',
            'también',
            'tambien',
            'leon',
            'león',
            'María',
            'Maria',
            'estoy',
            'estóy',
            'continúo',
            'continúo',
            'reímos',
            'reimos',
            'Paraguay',
            'Paragüay',
            'aéreo',
            'aereo',
          ],
          correct: [
            'adiós',
            'también',
            'león',
            'María',
            'estoy',
            'continúo',
            'continúo',
            'reímos',
            'Paraguay',
            'aéreo',
          ],
          explanation: 'Запомните: окончание <em>-y</em> никогда не получает tilde; ударная i + a/e/o всегда даёт хиат с tilde.',
        },
      ],
    },

    {
      id: '124.8',
      title: 'Сопоставьте слова с правилом',
      type: 'match',
      instructions: 'Каждому слову — действующее правило.',
      pool: [
        'дифтонг i/u + a/e/o, правило само работает',
        'дифтонг с tilde (правило нарушено)',
        'хиат a + e + o, правило само работает',
        'хиат с ударной i/u (всегда tilde)',
        'окончание -y — tilde не ставится',
      ],
      questions: [
        { id: 'q1', prompt: '<em>aire</em>',                                                                  correct: 'дифтонг i/u + a/e/o, правило само работает' },
        { id: 'q2', prompt: '<em>canción</em>',                                                                  correct: 'дифтонг с tilde (правило нарушено)' },
        { id: 'q3', prompt: '<em>aéreo</em>',                                                                       correct: 'хиат a + e + o, правило само работает' },
        { id: 'q4', prompt: '<em>María</em>',                                                                          correct: 'хиат с ударной i/u (всегда tilde)' },
        { id: 'q5', prompt: '<em>Paraguay</em>',                                                                          correct: 'окончание -y — tilde не ставится' },
        { id: 'q6', prompt: '<em>baúl</em>',                                                                                 correct: 'хиат с ударной i/u (всегда tilde)' },
      ],
    },

    {
      id: '124.9',
      title: 'Сравнение пар: с tilde и без',
      type: 'fill',
      instructions: 'Запишите слово в требуемой форме, с tilde или без.',
      questions: [
        { id: 'q1', prompt: '«мой день» — el ___',                                                       correct: 'día' },
        { id: 'q2', prompt: '«если» — ___',                                                                correct: 'si' },
        { id: 'q3', prompt: '«мама» — ма-___',                                                               correct: 'má', explanation: '<em>mamá</em> — последний слог ударный, окончание на гласную → tilde.' },
        { id: 'q4', prompt: '«страна» — pa-___',                                                                correct: 'ís', explanation: '<em>país</em> — хиат с ударной i.' },
        { id: 'q5', prompt: '«дороже» (más caro) — ма-___',                                                       correct: 'ás', explanation: '<em>más</em> — наречие «больше», с tilde.' },
        { id: 'q6', prompt: '«куда» (вопр.) — a-___',                                                                correct: 'dónde', explanation: '<em>adónde</em> — вопросительное, с tilde.' },
      ],
    },

    {
      id: '124.10',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Прослушайте и запишите целиком, со всеми tilde.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Adiós, María. Hasta pronto.',
          correct: ['Adiós, María. Hasta pronto.'] },
        { id: 'q2', prompt: '', audio: 'El león es el rey de la sabana.',
          correct: ['El león es el rey de la sabana.'] },
        { id: 'q3', prompt: '', audio: 'Continúa estudiando, no te rindas.',
          correct: ['Continúa estudiando, no te rindas.'] },
        { id: 'q4', prompt: '', audio: 'Tengo frío y necesito un café.',
          correct: ['Tengo frío y necesito un café.'] },
        { id: 'q5', prompt: '', audio: 'Estoy en Paraguay desde el lunes.',
          correct: ['Estoy en Paraguay desde el lunes.'] },
      ],
    },
  ],
};
