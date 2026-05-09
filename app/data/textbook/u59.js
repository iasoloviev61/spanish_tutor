// ============================================================
// Unidad 59 — Pretérito indefinido: verbos irregulares
// durmió, leyó, hizo, tuvo, fue…
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u59 = {
  id: 'u59',
  number: 59,
  title: { es: 'durmió, leyó, hizo…', topic: 'Pretérito indefinido: verbos irregulares' },
  topicRu: 'Простое прошедшее: неправильные глаголы',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'En el indefinido hay tres grupos de verbos irregulares: <strong>(1)</strong> verbos -<em>ir</em> con cambio vocálico solo en 3ª persona; <strong>(2)</strong> verbos con raíz irregular y terminaciones especiales (<em>hacer, tener, estar…</em>); <strong>(3)</strong> los verbos <em>ser / ir</em>, idénticos en indefinido.',
      ru: 'У неправильных глаголов в indefinido три группы: <strong>(1)</strong> глаголы на <em>-ir</em> с чередованием гласной только в 3 л. ед. и мн. ч. (<em>pidió, durmieron, leyó</em>); <strong>(2)</strong> глаголы с особой основой и единым набором окончаний (<em>hice, tuve, estuve…</em>); <strong>(3)</strong> <em>ser / ir</em>, у которых формы совпадают (<em>fui, fuiste, fue…</em>).',
    },
    {
      type: 'heading',
      text: 'Группа 1: -ir с чередованием в 3-м лице',
    },
    {
      type: 'table',
      caption: 'Изменения e→i и o→u только в él/ellos',
      columns: ['Тип', 'Глагол', '3 sg.', '3 pl.', 'Похожие'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex', 'col-ex', 'col-ex'],
      rows: [
        ['<strong>e → i</strong>', '<em>pedir</em>',  '<em>pidió</em>',     '<em>pidieron</em>',     '<em>mentir, preferir, seguir, sentir, divertirse</em>'],
        ['<strong>o → u</strong>', '<em>dormir</em>', '<em>durmió</em>',    '<em>durmieron</em>',     '<em>morir</em>'],
        ['<strong>i → y</strong> (vocal + er/ir)', '<em>leer</em>', '<em>leyó</em>', '<em>leyeron</em>', '<em>caer, construir, creer, destruir, huir, incluir, oír</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'En el grupo «<em>i → y</em>» el cambio aparece porque hay <strong>vocal + e/i</strong> en el contacto: <em>le-yó, ca-yó, oye-ron, le-yeron</em>. En las demás formas el verbo es regular: <em>leí, leíste, leímos, leísteis</em>.',
      ru: 'В формах <em>3 sg. / 3 pl.</em> сочетание двух гласных делает <em>i</em> неудобной — её заменяют на <em>y</em>: <em>le-yó, ca-yó, le-yeron, oyeron</em>. Остальные формы — обычные: <em>leí, leíste, leímos, leísteis</em>.',
      examples: [
        { es: 'Pepi y Lolo se divirtieron mucho.', ru: 'Пепи и Лоло отлично повеселились.' },
        { es: 'Los niños durmieron diez horas.',    ru: 'Дети спали десять часов.' },
        { es: 'Una tormenta destruyó la iglesia.',  ru: 'Буря разрушила церковь.' },
      ],
    },
    {
      type: 'heading',
      text: 'Группа 2: особая основа + единые окончания',
    },
    {
      type: 'table',
      caption: 'Окончания одинаковые: -e, -iste, -o, -imos, -isteis, -ieron',
      columns: ['Глагол', 'Основа', '1 sg.', '3 sg.', '3 pl.'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex', 'col-ex', 'col-ex'],
      rows: [
        ['<em>decir</em>',   '<strong>dij-</strong>',     '<em>dije</em>',    '<em>dijo</em>',    '<em>dijeron*</em>'],
        ['<em>estar</em>',   '<strong>estuv-</strong>',   '<em>estuve</em>',  '<em>estuvo</em>',  '<em>estuvieron</em>'],
        ['<em>haber</em>',   '<strong>hub-</strong>',     '<em>hube</em>',    '<em>hubo</em>',    '<em>hubieron</em>'],
        ['<em>hacer</em>',   '<strong>hic-/hiz-</strong>', '<em>hice</em>',   '<em>hizo</em>',    '<em>hicieron</em>'],
        ['<em>poder</em>',   '<strong>pud-</strong>',     '<em>pude</em>',    '<em>pudo</em>',    '<em>pudieron</em>'],
        ['<em>poner</em>',   '<strong>pus-</strong>',     '<em>puse</em>',    '<em>puso</em>',    '<em>pusieron</em>'],
        ['<em>querer</em>',  '<strong>quis-</strong>',    '<em>quise</em>',   '<em>quiso</em>',   '<em>quisieron</em>'],
        ['<em>saber</em>',   '<strong>sup-</strong>',     '<em>supe</em>',    '<em>supo</em>',    '<em>supieron</em>'],
        ['<em>tener</em>',   '<strong>tuv-</strong>',     '<em>tuve</em>',    '<em>tuvo</em>',    '<em>tuvieron</em>'],
        ['<em>traer</em>',   '<strong>traj-</strong>',    '<em>traje</em>',   '<em>trajo</em>',   '<em>trajeron*</em>'],
        ['<em>venir</em>',   '<strong>vin-</strong>',     '<em>vine</em>',    '<em>vino</em>',    '<em>vinieron</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'En 1ª y 3ª singular <strong>NO hay tilde</strong>: <em>hice / hizo</em>, <em>tuve / tuvo</em>, <em>vine / vino</em>. Después de <strong>j</strong> (verbos <em>decir, traer</em> y los en <em>-ducir</em>) la 3ª plural pierde la <em>i</em>: <em>dij<strong>eron</strong></em>, <em>traj<strong>eron</strong></em>, <em>conduj<strong>eron</strong></em>.',
      ru: 'В этих глаголах <strong>в 1 и 3 л. ед. ч. ударение НЕ обозначается</strong>: <em>tuve / tuvo, hice / hizo, vine / vino</em>. И после основы на <strong>-j-</strong> (decir, traer, traducir, conducir…) 3 л. мн. ч. идёт без <em>i</em>: <em>dijeron, trajeron, condujeron</em>.',
    },
    {
      type: 'heading',
      text: 'Глаголы на -ducir',
    },
    {
      type: 'table',
      caption: 'conducir, traducir, producir → -duj-',
      columns: ['Глагол', 'Основа', '1 sg.', '3 sg.', '3 pl.'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex', 'col-ex', 'col-ex'],
      rows: [
        ['<em>conducir</em>', '<strong>conduj-</strong>', '<em>conduje</em>', '<em>condujo</em>', '<em>condujeron</em>'],
        ['<em>traducir</em>', '<strong>traduj-</strong>', '<em>traduje</em>', '<em>tradujo</em>', '<em>tradujeron</em>'],
        ['<em>producir</em>', '<strong>produj-</strong>', '<em>produje</em>', '<em>produjo</em>', '<em>produjeron</em>'],
      ],
    },
    {
      type: 'heading',
      text: 'Группа 3: ser / ir',
    },
    {
      type: 'table',
      caption: 'Совпадают полностью; смысл из контекста',
      columns: ['Лицо', 'Форма'],
      colClasses: ['col-pattern', 'col-ex'],
      rows: [
        ['(yo)',                 '<strong>fui</strong>'],
        ['(tú)',                 '<strong>fuiste</strong>'],
        ['(usted, él, ella)',    '<strong>fue</strong>'],
        ['(nosotros, -as)',      '<strong>fuimos</strong>'],
        ['(vosotros, -as)',      '<strong>fuisteis</strong>'],
        ['(ustedes, ellos, -as)', '<strong>fueron</strong>'],
      ],
    },
    {
      type: 'rule',
      es: '<em>fui</em> puede significar <strong>«я был»</strong> (ser) o <strong>«я пошёл»</strong> (ir). El sentido depende del contexto.',
      ru: 'Формы <em>fui, fue, fueron…</em> используются и для <em>ser</em> («был / была»), и для <em>ir</em> («пошёл»). Различаем по контексту.',
      examples: [
        { es: 'Alicia fue (ser) directora del banco cuatro años.', ru: 'Алисия была директором банка четыре года.' },
        { es: 'Antonio fue (ir) a Puerto Rico.', ru: 'Антонио ездил в Пуэрто-Рико.' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '59.1',
      title: 'Группа 1: чередование в 3 л.',
      type: 'fill',
      instructions: 'Запишите 3 л. ед. ч. в indefinido.',
      questions: [
        { id: 'q1', prompt: '<em>pedir</em> → (él)',     correct: 'pidió' },
        { id: 'q2', prompt: '<em>dormir</em> → (ella)',   correct: 'durmió' },
        { id: 'q3', prompt: '<em>morir</em> → (él)',       correct: 'murió' },
        { id: 'q4', prompt: '<em>preferir</em> → (ella)',   correct: 'prefirió' },
        { id: 'q5', prompt: '<em>seguir</em> → (él)',        correct: 'siguió' },
        { id: 'q6', prompt: '<em>sentir</em> → (ella)',       correct: 'sintió' },
        { id: 'q7', prompt: '<em>leer</em> → (él)',           correct: 'leyó' },
        { id: 'q8', prompt: '<em>oír</em> → (ella)',          correct: 'oyó' },
        { id: 'q9', prompt: '<em>creer</em> → (él)',          correct: 'creyó' },
        { id: 'q10', prompt: '<em>caer</em> → (ella)',         correct: 'cayó' },
        { id: 'q11', prompt: '<em>construir</em> → (él)',      correct: 'construyó' },
        { id: 'q12', prompt: '<em>destruir</em> → (ellos)',    correct: 'destruyeron' },
      ],
    },

    {
      id: '59.2',
      title: 'Группа 2: основа + единое окончание',
      type: 'fill',
      instructions: 'Запишите форму indefinido (без тильд).',
      questions: [
        { id: 'q1',  prompt: '(yo, tener) →',            correct: 'tuve' },
        { id: 'q2',  prompt: '(tú, hacer) →',             correct: 'hiciste' },
        { id: 'q3',  prompt: '(él, hacer) →',             correct: 'hizo' },
        { id: 'q4',  prompt: '(nosotros, estar) →',        correct: 'estuvimos' },
        { id: 'q5',  prompt: '(ellos, poner) →',           correct: 'pusieron' },
        { id: 'q6',  prompt: '(yo, querer) →',              correct: 'quise' },
        { id: 'q7',  prompt: '(ellas, venir) →',             correct: 'vinieron' },
        { id: 'q8',  prompt: '(él, decir) →',                correct: 'dijo' },
        { id: 'q9',  prompt: '(ellos, decir) →',              correct: 'dijeron' },
        { id: 'q10', prompt: '(yo, saber) →',                  correct: 'supe' },
        { id: 'q11', prompt: '(ellos, traer) →',                correct: 'trajeron' },
        { id: 'q12', prompt: '(él, conducir) →',                 correct: 'condujo' },
      ],
    },

    {
      id: '59.3',
      title: 'ser или ir? Различи по контексту',
      type: 'choice',
      instructions: 'Формы <em>fui, fue, fueron…</em> совпадают. Что значит фраза?',
      questions: [
        { id: 'q1', prompt: '<em>El verano pasado fui a Cuba.</em>',                    options: ['ser (был)', 'ir (поехал)'], correct: 'ir (поехал)' },
        { id: 'q2', prompt: '<em>Mi abuelo fue médico durante 40 años.</em>',           options: ['ser (был)', 'ir (поехал)'], correct: 'ser (был)' },
        { id: 'q3', prompt: '<em>Antonio fue a la fiesta y se aburrió.</em>',           options: ['ser (был)', 'ir (поехал)'], correct: 'ir (поехал)' },
        { id: 'q4', prompt: '<em>La civilización maya fue muy pacífica.</em>',           options: ['ser (была)', 'ir (поехала)'], correct: 'ser (была)' },
        { id: 'q5', prompt: '<em>Ayer fuimos al cine.</em>',                              options: ['ser (были)', 'ir (пошли)'], correct: 'ir (пошли)' },
        { id: 'q6', prompt: '<em>Fue un día estupendo.</em>',                              options: ['ser (был)', 'ir (поехал)'], correct: 'ser (был)' },
      ],
    },

    {
      id: '59.4',
      title: 'Заполните пропуски',
      type: 'fill',
      instructions: 'Поставьте глагол в нужную форму indefinido.',
      questions: [
        { id: 'q1', prompt: '¿Qué (tú, hacer) ___ el verano pasado?',                    correct: 'hiciste' },
        { id: 'q2', prompt: 'Los niños no (querer) ___ acostarse.',                        correct: 'quisieron' },
        { id: 'q3', prompt: 'Ayer (yo, tener) ___ que trabajar hasta tarde.',               correct: 'tuve' },
        { id: 'q4', prompt: 'Anoche (haber) ___ una fiesta en casa de Marta.',                correct: 'hubo' },
        { id: 'q5', prompt: 'En 1547 Cervantes (nacer) ___ en Alcalá.',                       correct: 'nació' },
        { id: 'q6', prompt: 'El año pasado mis amigos (estar) ___ en Cuba.',                   correct: 'estuvieron' },
        { id: 'q7', prompt: 'Lola (caerse) ___ y (romperse) ___ un brazo.',                     correct: ['se cayó / se rompió'], explanation: 'Полностью: <em>se cayó</em> и <em>se rompió</em>.' },
        { id: 'q8', prompt: '¿Por qué no (vosotros, venir) ___ a la fiesta?',                    correct: 'vinisteis' },
        { id: 'q9', prompt: 'No (yo, poder) ___ entrar; (yo, perder) ___ las llaves.',            correct: ['pude / perdí'] },
        { id: 'q10', prompt: 'Los romanos (construir) ___ acueductos en Hispania.',                correct: 'construyeron' },
      ],
    },

    {
      id: '59.5',
      title: 'Multi: правильные формы 3 pl.',
      type: 'multi',
      instructions: 'Отметьте все <strong>верные</strong> формы 3 л. мн. ч.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие формы 3 pl. в indefinido корректны?',
          options: [
            'dijieron',
            'dijeron',
            'trajieron',
            'trajeron',
            'condujieron',
            'condujeron',
            'durmieron',
            'durmiron',
            'leyeron',
            'leieron',
            'pidieron',
            'pidiron',
          ],
          correct: ['dijeron', 'trajeron', 'condujeron', 'durmieron', 'leyeron', 'pidieron'],
          explanation: 'После <em>-j-</em> в 3 pl. <em>i</em> теряется: <em>dijeron, trajeron, condujeron</em>. У <em>leer / construir / oír</em> <em>i → y</em>.',
        },
      ],
    },

    {
      id: '59.6',
      title: 'Сопоставьте инфинитив и форму 1 sg.',
      type: 'match',
      instructions: 'Найдите 1 л. ед. ч. в indefinido для каждого глагола.',
      pool: ['hice', 'tuve', 'estuve', 'puse', 'pude', 'quise', 'vine', 'supe', 'dije', 'traje'],
      questions: [
        { id: 'q1', prompt: 'hacer',  correct: 'hice' },
        { id: 'q2', prompt: 'tener',  correct: 'tuve' },
        { id: 'q3', prompt: 'estar',  correct: 'estuve' },
        { id: 'q4', prompt: 'poner',  correct: 'puse' },
        { id: 'q5', prompt: 'poder',  correct: 'pude' },
        { id: 'q6', prompt: 'querer', correct: 'quise' },
        { id: 'q7', prompt: 'venir',  correct: 'vine' },
        { id: 'q8', prompt: 'saber',  correct: 'supe' },
        { id: 'q9', prompt: 'decir',  correct: 'dije' },
        { id: 'q10', prompt: 'traer', correct: 'traje' },
      ],
    },

    {
      id: '59.7',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма не существует.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['hice', 'hizo', 'hizimos', 'hicieron'], correct: 'hizimos', explanation: 'Только в 3 sg. <em>hizo</em>; в остальных — основа <em>hic-</em>: <em>hicimos</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['tuve', 'tuvo', 'tuvieron', 'tení'], correct: 'tení', explanation: 'Это форма imperfecto, не indefinido.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['durmió', 'durmieron', 'dormí', 'dormió'], correct: 'dormió', explanation: 'В <em>yo</em> и <em>vosotros</em> — без чередования: <em>dormí, dormisteis</em>; в <em>él</em> — <em>durmió</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['fue', 'fui', 'fuemos', 'fueron'], correct: 'fuemos', explanation: 'Правильно — <em>fuimos</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['leyó', 'leyeron', 'leyí', 'leí'], correct: 'leyí', explanation: 'В <em>yo</em> — <em>leí</em>, без -y-.' },
      ],
    },

    {
      id: '59.8',
      title: 'История: что произошло?',
      type: 'fill',
      instructions: 'Поставьте глагол в скобках в indefinido.',
      questions: [
        { id: 'q1', prompt: 'Una noche (oír) ___ un ruido extraño.',                         correct: 'oí', explanation: 'Можно также <em>(yo, oír) → oí</em>.' },
        { id: 'q2', prompt: '(yo, levantarse) ___ y (ir) ___ a la cocina.',                    correct: ['me levanté / fui'] },
        { id: 'q3', prompt: 'Allí (ver) ___ a un gato pequeño.',                                correct: 'vi' },
        { id: 'q4', prompt: 'El gato me (mirar) ___ y (huir) ___ por la ventana.',              correct: ['miró / huyó'] },
        { id: 'q5', prompt: 'No (yo, poder) ___ dormir más esa noche.',                          correct: 'pude' },
        { id: 'q6', prompt: 'Por la mañana le (decir) ___ todo a Marta.',                          correct: 'dije' },
      ],
    },

    {
      id: '59.9',
      title: 'Биография Хорхе Луиса Борхеса',
      type: 'fill',
      instructions: 'Поставьте глагол в форму indefinido.',
      questions: [
        { id: 'q1', prompt: 'Borges (nacer) ___ en Buenos Aires en 1899.',                  correct: 'nació' },
        { id: 'q2', prompt: 'A los 15 años (mudarse) ___ a Suiza con su familia.',            correct: ['se mudó'] },
        { id: 'q3', prompt: 'Allí (estudiar) ___ francés y alemán.',                            correct: 'estudió' },
        { id: 'q4', prompt: 'En 1921 (volver) ___ a Argentina.',                                correct: 'volvió' },
        { id: 'q5', prompt: 'Borges (escribir) ___ cuentos famosos como «Ficciones».',           correct: 'escribió' },
        { id: 'q6', prompt: 'Con los años (perder) ___ la vista casi por completo.',              correct: 'perdió' },
        { id: 'q7', prompt: 'En 1986 (morir) ___ en Ginebra.',                                     correct: 'murió' },
      ],
    },

    {
      id: '59.10',
      title: 'Вопросы и краткие ответы',
      type: 'fill',
      instructions: 'Поставьте глагол в indefinido.',
      questions: [
        { id: 'q1', prompt: '—¿Qué (tú, hacer) ___ ayer? —Nada especial.',                     correct: 'hiciste' },
        { id: 'q2', prompt: '—¿Adónde (vosotros, ir) ___? —A la playa.',                          correct: 'fuisteis' },
        { id: 'q3', prompt: '—¿(tú, traer) ___ el libro? —Sí.',                                   correct: 'trajiste' },
        { id: 'q4', prompt: '—¿Qué (decir) ___ Carlos? —Nada interesante.',                          correct: 'dijo' },
        { id: 'q5', prompt: '—¿(usted, conducir) ___ alguna vez en Madrid? —No, nunca.',              correct: 'condujo' },
        { id: 'q6', prompt: '—¿(haber) ___ mucha gente? —Sí, muchísima.',                              correct: 'hubo' },
      ],
    },

    {
      id: '59.11',
      title: 'Multi: с какими подлежащими сочетается форма',
      type: 'multi',
      instructions: 'С какими подлежащими сочетается форма <strong><em>tuvieron</em></strong>?',
      questions: [
        {
          id: 'q1',
          prompt: 'Выберите все возможные подлежащие к <em>tuvieron</em>:',
          options: ['yo', 'tú', 'él', 'ella', 'nosotros', 'vosotros', 'ellos', 'ellas', 'ustedes'],
          correct: ['ellos', 'ellas', 'ustedes'],
          explanation: '<em>tuvieron</em> — 3 л. мн. ч.',
        },
      ],
    },

    {
      id: '59.12',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите фразу с диакритикой и пунктуацией.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Los niños durmieron diez horas.',           correct: ['Los niños durmieron diez horas.', 'Los niños durmieron diez horas'] },
        { id: 'q2', prompt: '', audio: 'Hice varios viajes a América del Sur.',      correct: ['Hice varios viajes a América del Sur.', 'Hice varios viajes a América del Sur'] },
        { id: 'q3', prompt: '', audio: 'Ayer no pude entrar en casa.',                correct: ['Ayer no pude entrar en casa.', 'Ayer no pude entrar en casa'] },
        { id: 'q4', prompt: '', audio: 'Mis abuelos tuvieron diez hijos.',             correct: ['Mis abuelos tuvieron diez hijos.', 'Mis abuelos tuvieron diez hijos'] },
        { id: 'q5', prompt: '', audio: 'Antonio fue a Puerto Rico el verano pasado.',   correct: ['Antonio fue a Puerto Rico el verano pasado.', 'Antonio fue a Puerto Rico el verano pasado'] },
        { id: 'q6', prompt: '', audio: 'Leyó el libro en una noche.',                    correct: ['Leyó el libro en una noche.', 'Leyó el libro en una noche'] },
      ],
    },
  ],
};
