// ============================================================
// Unidad 68 — futuro simple: verbos irregulares.
// «habré, podré, tendré, diré, haré…» — основа меняется, окончания те же.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u68 = {
  id: 'u68',
  number: 68,
  title: { es: 'habré, podré…', topic: 'Futuro simple: verbos irregulares' },
  topicRu: 'Простое будущее: нерегулярные глаголы',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'En el futuro simple <strong>irregular</strong>, las terminaciones (<em>-é, -ás, -á, -emos, -éis, -án</em>) son las mismas, pero la <strong>raíz</strong> cambia. Hay tres grupos.',
      ru: 'В нерегулярном futuro окончания <strong>те же самые</strong> (<em>-é, -ás, -á, -emos, -éis, -án</em>), а вот <strong>основа</strong> меняется. Запоминать нужно только новую основу. Три типа.',
      examples: [
        { es: 'En el año 2050 <strong>habrá</strong> ciudades en la Luna.', ru: 'В 2050 году на Луне будут города.' },
        { es: 'En el futuro <strong>podremos</strong> vivir en la Luna.', ru: 'В будущем мы сможем жить на Луне.' },
      ],
    },
    {
      type: 'heading',
      text: 'Группа 1: пропадает гласная окончания (-er → -r-)',
    },
    {
      type: 'table',
      caption: 'haber, poder, saber, querer',
      columns: ['Инфинитив', 'Основа futuro', 'yo', 'tú', 'él/ella'],
      colClasses: ['col-pattern', 'col-pattern', 'col-pattern', 'col-pattern', 'col-pattern'],
      rows: [
        ['<strong>haber</strong>',     '<strong>habr-</strong>',    'habré',   'habrás',   'habrá'],
        ['<strong>poder</strong>',      '<strong>podr-</strong>',     'podré',   'podrás',   'podrá'],
        ['<strong>saber</strong>',       '<strong>sabr-</strong>',     'sabré',   'sabrás',   'sabrá'],
        ['<strong>querer</strong>',       '<strong>querr-</strong>',    'querré',  'querrás',  'querrá'],
      ],
    },
    {
      type: 'heading',
      text: 'Группа 2: гласная заменяется на -d- (-ner/-ler/-lir → -dr-)',
    },
    {
      type: 'table',
      caption: 'poner, tener, salir, venir, valer',
      columns: ['Инфинитив', 'Основа futuro', 'yo', 'nosotros', 'ellos'],
      colClasses: ['col-pattern', 'col-pattern', 'col-pattern', 'col-pattern', 'col-pattern'],
      rows: [
        ['<strong>poner</strong>',     '<strong>pondr-</strong>',     'pondré',   'pondremos',   'pondrán'],
        ['<strong>tener</strong>',      '<strong>tendr-</strong>',     'tendré',   'tendremos',   'tendrán'],
        ['<strong>salir</strong>',       '<strong>saldr-</strong>',     'saldré',   'saldremos',   'saldrán'],
        ['<strong>venir</strong>',        '<strong>vendr-</strong>',     'vendré',   'vendremos',   'vendrán'],
        ['<strong>valer</strong>',         '<strong>valdr-</strong>',     'valdré',   'valdremos',   'valdrán'],
      ],
    },
    {
      type: 'heading',
      text: 'Группа 3: совсем короткая основа (decir, hacer)',
    },
    {
      type: 'table',
      caption: 'decir, hacer',
      columns: ['Инфинитив', 'Основа futuro', 'yo', 'tú', 'ellos'],
      colClasses: ['col-pattern', 'col-pattern', 'col-pattern', 'col-pattern', 'col-pattern'],
      rows: [
        ['<strong>decir</strong>',     '<strong>dir-</strong>',     'diré',   'dirás',   'dirán'],
        ['<strong>hacer</strong>',      '<strong>har-</strong>',     'haré',   'harás',   'harán'],
      ],
    },
    {
      type: 'rule',
      es: 'Producidos los mismos cambios, los <strong>derivados</strong> mantienen la irregularidad: <em>componer → compondré</em>, <em>retener → retendré</em>, <em>deshacer → desharé</em>, <em>contradecir → contradiré</em>, <em>convenir → convendré</em>.',
      ru: 'Производные глаголы <strong>сохраняют ту же неправильность</strong>: <em>componer → compondré</em>, <em>retener → retendré</em>, <em>deshacer → desharé</em>, <em>contradecir → contradiré</em>, <em>convenir → convendré</em>.',
      examples: [
        { es: 'No te preocupes, <strong>mantendremos</strong> el secreto.', ru: 'Не волнуйся, мы сохраним секрет.' },
        { es: 'Mañana <strong>desharé</strong> la maleta.', ru: 'Завтра я разберу чемодан.' },
      ],
    },
    {
      type: 'heading',
      text: 'Futuro для предположения о настоящем',
    },
    {
      type: 'rule',
      es: 'El futuro simple también se usa para expresar una <strong>suposición sobre el presente</strong>: cuando no estamos seguros y suponemos algo «en este momento».',
      ru: 'Futuro в испанском — это ещё и «предположение о настоящем»: «наверное, ему лет тридцать», «должно быть, сейчас часа три». Часто идёт со словами <em>creo que, supongo que, me imagino que, probablemente, posiblemente, seguramente</em>.',
      examples: [
        { es: '—¿Qué hora es? —No sé. <strong>Serán</strong> sobre las tres.', ru: '— Который час? — Не знаю. Часа три, наверное.' },
        { es: 'Alberto parece bastante joven. ¿Cuántos años <strong>tendrá</strong>?', ru: 'Альберто выглядит молодо. Сколько ему лет, как думаешь?' },
        { es: 'Supongo que <strong>habrá</strong> comida para todos.', ru: 'Полагаю, еды хватит на всех.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Las terminaciones siguen siendo <em>-é, -ás, -á, -emos, -éis, -án</em>, con tilde en todas las personas excepto en <em>nosotros</em>. <strong>No</strong> existen formas <s>«haberé»</s>, <s>«tenré»</s>, <s>«hacerás»</s>: hay que usar la raíz irregular.',
      ru: 'Окончания у нерегулярных <strong>те же самые</strong>: <em>-é, -ás, -á, -emos, -éis, -án</em>, и диакритика стоит везде, кроме <em>nosotros</em>. Главная ошибка — присоединить окончание к инфинитиву: <s>haberé</s>, <s>tenré</s>, <s>hacerás</s> — так нельзя.',
      examples: [
        { es: '<s>tenré</s> → <strong>tendré</strong>', ru: 'не «tenré», а «tendré».' },
        { es: '<s>hacerás</s> → <strong>harás</strong>', ru: 'не «hacerás», а «harás».' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '68.1',
      title: 'Соберите futuro нерегулярных',
      type: 'fill',
      instructions: 'Запишите форму целиком, с диакритикой. Образец: <em>(yo, tener) → tendré</em>.',
      questions: [
        { id: 'q1', prompt: '(yo, hacer) →',                  correct: ['haré'] },
        { id: 'q2', prompt: '(tú, tener) →',                    correct: ['tendrás'] },
        { id: 'q3', prompt: '(él, salir) →',                     correct: ['saldrá'] },
        { id: 'q4', prompt: '(nosotros, poner) →',                 correct: ['pondremos'] },
        { id: 'q5', prompt: '(vosotros, decir) →',                   correct: ['diréis'] },
        { id: 'q6', prompt: '(ellos, venir) →',                       correct: ['vendrán'] },
        { id: 'q7', prompt: '(yo, poder) →',                            correct: ['podré'] },
        { id: 'q8', prompt: '(usted, querer) →',                          correct: ['querrá'] },
        { id: 'q9', prompt: '(yo, saber) →',                                correct: ['sabré'] },
        { id: 'q10', prompt: '(haber) — безличное →',                          correct: ['habrá'] },
      ],
    },

    {
      id: '68.2',
      title: 'Раскройте скобки',
      type: 'fill',
      instructions: 'Поставьте глагол в futuro simple (нерегулярные).',
      questions: [
        { id: 'q1', prompt: '—¿Has hecho la cama? —No, la (yo, hacer) ___ luego.',                       correct: ['haré'] },
        { id: 'q2', prompt: '—¿Ha venido Sonia? —No, probablemente (venir) ___ más tarde.',                correct: ['vendrá'] },
        { id: 'q3', prompt: 'Mañana (haber) ___ tormentas en el centro del país.',                          correct: ['habrá'] },
        { id: 'q4', prompt: '—¿Le has dicho a Pepe que no podemos ir? —No, se lo (yo, decir) ___ mañana.',     correct: ['diré'] },
        { id: 'q5', prompt: '—¿Sabéis ya el resultado del examen? —No, pero lo (saber) ___ muy pronto.',         correct: ['sabremos'] },
        { id: 'q6', prompt: '—¿Ha salido ya Rocío? —No, (salir) ___ dentro de un rato.',                            correct: ['saldrá'] },
        { id: 'q7', prompt: '—¿Has puesto el lavavajillas? —No, lo (yo, poner) ___ esta noche después de cenar.',     correct: ['pondré'] },
        { id: 'q8', prompt: '—No tenemos pan. —No te preocupes, (yo, salir) ___ a comprar.',                            correct: ['saldré'] },
      ],
    },

    {
      id: '68.3',
      title: 'Будущее через 50 лет',
      type: 'fill',
      instructions: 'Соберите фразу с futuro simple. Образец: <em>la vida / ser / muy diferente → La vida será muy diferente.</em>',
      questions: [
        { id: 'q1', prompt: 'la gente / vivir / más →',
          correct: ['La gente vivirá más.', 'La gente vivirá más'] },
        { id: 'q2', prompt: 'la gente / trabajar / menos →',
          correct: ['La gente trabajará menos.', 'La gente trabajará menos'] },
        { id: 'q3', prompt: 'los robots / hacer / todos los trabajos físicos →',
          correct: ['Los robots harán todos los trabajos físicos.', 'Los robots harán todos los trabajos físicos'] },
        { id: 'q4', prompt: 'haber / ciudades satélite en el espacio →',
          correct: ['Habrá ciudades satélite en el espacio.', 'Habrá ciudades satélite en el espacio'] },
        { id: 'q5', prompt: 'muchas enfermedades / desaparecer →',
          correct: ['Muchas enfermedades desaparecerán.', 'Muchas enfermedades desaparecerán'] },
        { id: 'q6', prompt: 'no / haber / guerras →',
          correct: ['No habrá guerras.', 'No habrá guerras'] },
        { id: 'q7', prompt: 'las casas / estar / informatizadas →',
          correct: ['Las casas estarán informatizadas.', 'Las casas estarán informatizadas'] },
      ],
    },

    {
      id: '68.4',
      title: 'Предположение о настоящем',
      type: 'fill',
      instructions: 'Поставьте глагол в futuro для выражения догадки.',
      questions: [
        { id: 'q1', prompt: '—¿Sabes dónde está Julia? —(Estar) ___ en casa. No sale nunca.',
          correct: ['Estará'] },
        { id: 'q2', prompt: '—¿Tienes tú las entradas? —Yo no, las (tener) ___ Blanca.',
          correct: ['tendrá'] },
        { id: 'q3', prompt: '—¿Cuántas personas crees que hay en el teatro? —(Haber) ___ unas cuarenta.',
          correct: ['Habrá'] },
        { id: 'q4', prompt: '—¿Quién es la chica con Jorge? —No la conozco. (Ser) ___ una amiga.',
          correct: ['Será'] },
        { id: 'q5', prompt: '—¿Sabes a qué hora empieza el concierto? —No. Lo (saber) ___ Amalia.',
          correct: ['sabrá'] },
        { id: 'q6', prompt: '—¿Sabes cuánto valen esos ordenadores? —No, no (valer) ___ mucho — están de oferta.',
          correct: ['valdrán'] },
      ],
    },

    {
      id: '68.5',
      title: 'Multi: какие основы у futuro?',
      type: 'multi',
      instructions: 'Отметьте все глаголы, у которых в futuro <strong>основа НЕ совпадает</strong> с инфинитивом.',
      questions: [
        {
          id: 'q1',
          prompt: 'У каких глаголов основа меняется?',
          options: ['hablar', 'tener', 'comer', 'salir', 'vivir', 'haber', 'estudiar', 'poder', 'cantar', 'saber', 'beber', 'hacer', 'decir', 'venir', 'querer', 'poner', 'valer'],
          correct: ['tener', 'salir', 'haber', 'poder', 'saber', 'hacer', 'decir', 'venir', 'querer', 'poner', 'valer'],
          explanation: 'Группы: <em>habr-, podr-, sabr-, querr-, pondr-, tendr-, saldr-, vendr-, valdr-, dir-, har-</em>.',
        },
      ],
    },

    {
      id: '68.6',
      title: 'Match: инфинитив ↔ основа futuro',
      type: 'match',
      instructions: 'Соедините глагол с его основой будущего.',
      pool: ['habr-', 'podr-', 'tendr-', 'saldr-', 'vendr-', 'pondr-', 'dir-', 'har-', 'sabr-', 'querr-', 'valdr-'],
      questions: [
        { id: 'q1', prompt: '<em>haber</em>',     correct: 'habr-' },
        { id: 'q2', prompt: '<em>poder</em>',      correct: 'podr-' },
        { id: 'q3', prompt: '<em>tener</em>',       correct: 'tendr-' },
        { id: 'q4', prompt: '<em>salir</em>',        correct: 'saldr-' },
        { id: 'q5', prompt: '<em>venir</em>',         correct: 'vendr-' },
        { id: 'q6', prompt: '<em>poner</em>',          correct: 'pondr-' },
        { id: 'q7', prompt: '<em>decir</em>',           correct: 'dir-' },
        { id: 'q8', prompt: '<em>hacer</em>',            correct: 'har-' },
        { id: 'q9', prompt: '<em>saber</em>',             correct: 'sabr-' },
        { id: 'q10', prompt: '<em>querer</em>',            correct: 'querr-' },
        { id: 'q11', prompt: '<em>valer</em>',              correct: 'valdr-' },
      ],
    },

    {
      id: '68.7',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма построена неправильно.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?',
          options: ['tendré', 'tenré', 'pondré', 'haré'],
          correct: 'tenré',
          explanation: 'У <em>tener</em> в futuro основа <em>tendr-</em>.' },
        { id: 'q2', prompt: 'Где ошибка?',
          options: ['saldrás', 'saldrá', 'salirás', 'saldremos'],
          correct: 'salirás',
          explanation: 'У <em>salir</em> в futuro основа <em>saldr-</em>.' },
        { id: 'q3', prompt: 'Где ошибка?',
          options: ['diré', 'dirás', 'decirá', 'diremos'],
          correct: 'decirá',
          explanation: 'У <em>decir</em> в futuro основа <em>dir-</em>.' },
        { id: 'q4', prompt: 'Где ошибка?',
          options: ['haberé', 'habré', 'habrá', 'habrán'],
          correct: 'haberé',
          explanation: 'У <em>haber</em> в futuro основа <em>habr-</em>; <em>yo</em> = <em>habré</em>.' },
      ],
    },

    {
      id: '68.8',
      title: 'Choice: дайте ответ',
      type: 'choice',
      instructions: 'Кто что сделает?',
      questions: [
        { id: 'q1', prompt: '¿Quién crees que (ganar) la copa?',
          options: ['ganará', 'ganaría', 'ganaba', 'gana'],
          correct: 'ganará' },
        { id: 'q2', prompt: 'Me imagino que cuando tenga cincuenta años, (yo, estar) ___ calvo.',
          options: ['estaré', 'estaría', 'estuve', 'estoy'],
          correct: 'estaré' },
        { id: 'q3', prompt: '¿Qué vais a hacer este verano? — Seguramente (ir) ___ a Viña.',
          options: ['iremos', 'íbamos', 'fuimos', 'vamos'],
          correct: 'iremos' },
        { id: 'q4', prompt: 'No he visto a Lucía. ¿Crees que (acordarse) ___ de la cita?',
          options: ['se acordará', 'se acuerda', 'se acordaba', 'se acordó'],
          correct: 'se acordará' },
        { id: 'q5', prompt: '¿Qué vas a estudiar, Rafa? — No lo sé. Probablemente (estudiar) ___ Medicina.',
          options: ['estudiaré', 'estudio', 'estudiaba', 'estudié'],
          correct: 'estudiaré' },
      ],
    },

    {
      id: '68.9',
      title: 'Multi: где futuro как догадка?',
      type: 'multi',
      instructions: 'Отметьте все фразы, в которых futuro выражает <strong>предположение о настоящем</strong> (а не реальное будущее).',
      questions: [
        {
          id: 'q1',
          prompt: 'Где futuro = «наверное» о текущем моменте?',
          options: [
            '¿Qué hora es? — Serán las cinco.',
            'Mañana lloverá en el norte.',
            'Alberto tendrá unos veinte años.',
            'En el año 2050 habrá ciudades en la Luna.',
            '—¿Dónde está Marta? —Estará en su despacho.',
            'Te llamaré mañana sin falta.',
            'Supongo que habrá comida para todos.',
            'El tren llegará a las nueve.',
          ],
          correct: [
            '¿Qué hora es? — Serán las cinco.',
            'Alberto tendrá unos veinte años.',
            '—¿Dónde está Marta? —Estará en su despacho.',
            'Supongo que habrá comida para todos.',
          ],
          explanation: 'Догадка о текущем моменте часто идёт с <em>creer que, supongo que, probablemente</em> или с вопросом о «здесь и сейчас».',
        },
      ],
    },

    {
      id: '68.10',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите фразу полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'En el año 2050 habrá ciudades en la Luna.',
          correct: ['En el año 2050 habrá ciudades en la Luna.', 'En el año 2050 habrá ciudades en la Luna'] },
        { id: 'q2', prompt: '', audio: 'Mañana hará buen tiempo en todo el país.',
          correct: ['Mañana hará buen tiempo en todo el país.', 'Mañana hará buen tiempo en todo el país'] },
        { id: 'q3', prompt: '', audio: 'No sé, no tengo reloj. Serán sobre las tres.',
          correct: ['No sé, no tengo reloj. Serán sobre las tres.', 'No sé, no tengo reloj. Serán sobre las tres'] },
        { id: 'q4', prompt: '', audio: 'Mantendremos el secreto.',
          correct: ['Mantendremos el secreto.', 'Mantendremos el secreto'] },
        { id: 'q5', prompt: '', audio: 'Saldré dentro de un rato.',
          correct: ['Saldré dentro de un rato.', 'Saldré dentro de un rato'] },
        { id: 'q6', prompt: '', audio: 'No te preocupes, pondré el lavavajillas esta noche.',
          correct: ['No te preocupes, pondré el lavavajillas esta noche.', 'No te preocupes, pondré el lavavajillas esta noche'] },
      ],
    },
  ],
};
