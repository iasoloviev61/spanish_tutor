// ============================================================
// Unidad 48 — Presente de indicativo: verbos regulares
// "trabajo, como, vivo..." — три типа окончаний (-ar / -er / -ir).
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u48 = {
  id: 'u48',
  number: 48,
  title: { es: 'trabajo, como, vivo…', topic: 'Presente de indicativo: verbos regulares' },
  topicRu: 'Настоящее время правильных глаголов: окончания -ar / -er / -ir',

  theory: [
    {
      type: 'rule',
      es: 'Los <strong>verbos regulares</strong> en presente de indicativo se forman quitando la terminación del infinitivo (<em>-ar / -er / -ir</em>) y añadiendo las desinencias propias de cada conjugación.',
      ru: 'Чтобы образовать настоящее время <strong>правильных глаголов</strong>, отбрасываем окончание инфинитива (<em>-ar / -er / -ir</em>) и добавляем к корню личные окончания. У каждой группы свой набор.',
      examples: [
        { es: 'trabajar → trabajo, trabajas, trabaja…', ru: 'работать' },
        { es: 'comer → como, comes, come…',             ru: 'есть' },
        { es: 'vivir → vivo, vives, vive…',              ru: 'жить' },
      ],
    },
    {
      type: 'heading',
      text: 'Полные таблицы спряжений',
    },
    {
      type: 'table',
      caption: 'Окончания трёх правильных групп',
      columns: ['Лицо', '-ar (trabaj-ar)', '-er (com-er)', '-ir (viv-ir)'],
      colClasses: ['col-pattern', 'col-form', 'col-form', 'col-form'],
      rows: [
        ['<em>yo</em>',                        '<strong>trabajo</strong>',  '<strong>como</strong>',  '<strong>vivo</strong>'],
        ['<em>tú</em>',                         '<strong>trabajas</strong>',  '<strong>comes</strong>',  '<strong>vives</strong>'],
        ['<em>usted, él, ella</em>',             '<strong>trabaja</strong>',   '<strong>come</strong>',   '<strong>vive</strong>'],
        ['<em>nosotros, nosotras</em>',           '<strong>trabajamos</strong>', '<strong>comemos</strong>', '<strong>vivimos</strong>'],
        ['<em>vosotros, vosotras</em>',            '<strong>trabajáis</strong>',  '<strong>coméis</strong>',  '<strong>vivís</strong>'],
        ['<em>ustedes, ellos, ellas</em>',          '<strong>trabajan</strong>',   '<strong>comen</strong>',   '<strong>viven</strong>'],
      ],
    },
    {
      type: 'atencion',
      es: 'El verbo <strong>ver</strong> (mirar) se conjuga casi como un <em>-er</em> regular, pero la 1.<sup>a</sup> persona conserva la <em>e</em>: <strong>ve-o</strong>, ves, ve, ve, vemos, veis, ven, ven.',
      ru: 'Глагол <em>ver</em> «видеть» спрягается почти как правильный на <em>-er</em>, но в 1-м лице ед. числа сохраняется <em>e</em> в корне: <strong>veo</strong>, ves, ve, vemos, veis, ven.',
    },
    {
      type: 'heading',
      text: 'Когда употребляется presente',
    },
    {
      type: 'rule',
      es: 'El <strong>presente de indicativo</strong> se usa para: (1) dar o pedir información sobre el presente; (2) hablar de acciones <em>habituales</em>; (3) verdades generales o universales; (4) acciones que ocurren en el momento de hablar.',
      ru: 'Настоящее время используется для четырёх основных целей: <strong>(1)</strong> сообщать или спрашивать что-то о настоящем; <strong>(2)</strong> говорить о привычных, регулярных действиях; <strong>(3)</strong> формулировать общие истины; <strong>(4)</strong> описывать действие, происходящее прямо сейчас.',
      examples: [
        { es: 'El hermano de Alicia trabaja en una empresa de informática.', ru: 'Брат Алисии работает в IT-фирме. (информация о настоящем)' },
        { es: 'En mi casa cenamos muy temprano.',                              ru: 'У нас дома ужинают очень рано. (привычка)' },
        { es: 'No bebo vino.',                                                  ru: 'Я не пью вина. (общая характеристика)' },
        { es: 'La Tierra gira alrededor del Sol.',                              ru: 'Земля вращается вокруг Солнца. (общая истина)' },
        { es: '—¿Qué ves? —Una chica que lleva una gorra.',                     ru: '—Что видишь? —Девочку в кепке. (сейчас)' },
      ],
    },
    {
      type: 'atencion',
      es: 'Para acciones que <em>están sucediendo justo ahora</em> también se usa <strong>estar + gerundio</strong> (<em>estoy hablando</em>) — pero el simple presente es perfectamente posible.',
      ru: 'Для действия, происходящего прямо в момент речи, испанский также часто использует конструкцию <em>estar + gerundio</em> (<em>estoy hablando</em>) — об этом будет отдельный модуль. Но и обычное настоящее в этом значении тоже звучит естественно.',
    },
  ],

  exercises: [
    {
      id: '48.1',
      title: 'Спряжение -ar: trabajar',
      type: 'fill',
      instructions: 'Запишите форму глагола <em>trabajar</em>.',
      questions: [
        { id: 'q1', prompt: 'yo →',                  correct: 'trabajo' },
        { id: 'q2', prompt: 'tú →',                   correct: 'trabajas' },
        { id: 'q3', prompt: 'usted →',                 correct: 'trabaja' },
        { id: 'q4', prompt: 'él / ella →',             correct: 'trabaja' },
        { id: 'q5', prompt: 'nosotros →',              correct: 'trabajamos' },
        { id: 'q6', prompt: 'vosotros →',              correct: 'trabajáis', explanation: 'Ударение в окончании <em>-áis</em>.' },
        { id: 'q7', prompt: 'ustedes →',                correct: 'trabajan' },
        { id: 'q8', prompt: 'ellos / ellas →',          correct: 'trabajan' },
      ],
    },

    {
      id: '48.2',
      title: 'Спряжение -er: comer',
      type: 'fill',
      instructions: 'Запишите форму глагола <em>comer</em>.',
      questions: [
        { id: 'q1', prompt: 'yo →',                  correct: 'como' },
        { id: 'q2', prompt: 'tú →',                   correct: 'comes' },
        { id: 'q3', prompt: 'él →',                    correct: 'come' },
        { id: 'q4', prompt: 'nosotros →',              correct: 'comemos' },
        { id: 'q5', prompt: 'vosotros →',              correct: 'coméis', explanation: 'Ударение в окончании <em>-éis</em>.' },
        { id: 'q6', prompt: 'ellos →',                  correct: 'comen' },
      ],
    },

    {
      id: '48.3',
      title: 'Спряжение -ir: vivir',
      type: 'fill',
      instructions: 'Запишите форму глагола <em>vivir</em>.',
      questions: [
        { id: 'q1', prompt: 'yo →',                  correct: 'vivo' },
        { id: 'q2', prompt: 'tú →',                   correct: 'vives' },
        { id: 'q3', prompt: 'ella →',                  correct: 'vive' },
        { id: 'q4', prompt: 'nosotros →',              correct: 'vivimos', explanation: 'У <em>-ir</em> в 1-м лице мн. числа окончание <em>-imos</em>.' },
        { id: 'q5', prompt: 'vosotros →',              correct: 'vivís', explanation: 'Ударение в окончании <em>-ís</em>.' },
        { id: 'q6', prompt: 'ustedes →',                correct: 'viven' },
      ],
    },

    {
      id: '48.4',
      title: 'Поставьте глагол в нужную форму',
      type: 'fill',
      instructions: 'Образец: <em>(yo, hablar) → hablo</em>.',
      questions: [
        { id: 'q1', prompt: '(tú, estudiar) →',           correct: 'estudias' },
        { id: 'q2', prompt: '(él, beber) →',                correct: 'bebe' },
        { id: 'q3', prompt: '(nosotros, abrir) →',           correct: 'abrimos' },
        { id: 'q4', prompt: '(vosotros, cenar) →',           correct: 'cenáis' },
        { id: 'q5', prompt: '(ellos, hablar) →',              correct: 'hablan' },
        { id: 'q6', prompt: '(yo, ver) →',                    correct: 'veo', explanation: '<em>ver</em> сохраняет <em>e</em>: <em>veo</em>.' },
        { id: 'q7', prompt: '(tú, escribir) →',                correct: 'escribes' },
        { id: 'q8', prompt: '(usted, viajar) →',                correct: 'viaja' },
        { id: 'q9', prompt: '(nosotros, leer) →',                correct: 'leemos' },
        { id: 'q10', prompt: '(vosotros, vivir) →',              correct: 'vivís' },
        { id: 'q11', prompt: '(ellos, comer) →',                  correct: 'comen' },
        { id: 'q12', prompt: '(yo, trabajar) →',                  correct: 'trabajo' },
      ],
    },

    {
      id: '48.5',
      title: 'Где живут, где работают',
      type: 'fill',
      instructions: 'По данным таблицы (Arturo — Segovia, fábrica; José y Pilar — Lima, tienda; María y Ana — Cali, hospital; Pedro — Buenos Aires, estudia Economía) допишите фразу.',
      questions: [
        { id: 'q1', prompt: 'Arturo (vivir) ___ en Segovia.',                  correct: 'vive' },
        { id: 'q2', prompt: 'Arturo (trabajar) ___ en una fábrica.',            correct: 'trabaja' },
        { id: 'q3', prompt: 'José y Pilar (vivir) ___ en Lima.',                 correct: 'viven' },
        { id: 'q4', prompt: 'José (trabajar) ___ en una tienda.',                 correct: 'trabaja' },
        { id: 'q5', prompt: 'María y Ana (vivir) ___ en Cali.',                    correct: 'viven' },
        { id: 'q6', prompt: 'Yo (trabajar) ___ en un hospital.',                    correct: 'trabajo' },
        { id: 'q7', prompt: 'Pedro (vivir) ___ en Buenos Aires.',                   correct: 'vive' },
        { id: 'q8', prompt: 'Pedro (estudiar) ___ Economía.',                       correct: 'estudia' },
      ],
    },

    {
      id: '48.6',
      title: 'Допишите фразу',
      type: 'fill',
      instructions: 'Поставьте глагол в правильную форму.',
      questions: [
        { id: 'q1', prompt: '¿A qué hora (vosotros, cenar) ___?',           correct: 'cenáis' },
        { id: 'q2', prompt: '¿Dónde (tú, pasar) ___ los veranos?',           correct: 'pasas' },
        { id: 'q3', prompt: 'Las ballenas (vivir) ___ en aguas frías.',       correct: 'viven' },
        { id: 'q4', prompt: '¿Dónde (trabajar) ___ usted?',                    correct: 'trabaja' },
        { id: 'q5', prompt: 'Los argentinos (hablar) ___ español.',             correct: 'hablan' },
        { id: 'q6', prompt: '¿Qué (beber) ___ ustedes en las comidas?',          correct: 'beben' },
        { id: 'q7', prompt: '¿Dónde (vosotros, vivir) ___?',                      correct: 'vivís' },
        { id: 'q8', prompt: 'Lalo y yo (no viajar) ___ nunca en avión.',          correct: ['no viajamos'] },
        { id: 'q9', prompt: '¿Qué idiomas (hablar) ___ ustedes?',                  correct: 'hablan' },
        { id: 'q10', prompt: '¿Qué (estudiar) ___ tus hermanas?',                  correct: 'estudian' },
        { id: 'q11', prompt: 'Nosotros (no ver) ___ mucho la tele.',                 correct: ['no vemos'] },
        { id: 'q12', prompt: '¿A qué hora (abrir) ___ las tiendas?',                  correct: 'abren' },
      ],
    },

    {
      id: '48.7',
      title: 'Какое окончание',
      type: 'choice',
      instructions: 'Выберите правильную форму.',
      questions: [
        { id: 'q1', prompt: 'Yo ___ en una oficina.',                  options: ['trabaja', 'trabajo', 'trabajas'],   correct: 'trabajo' },
        { id: 'q2', prompt: 'Tú ___ inglés muy bien.',                  options: ['hablo', 'hablas', 'habla'],          correct: 'hablas' },
        { id: 'q3', prompt: 'María ___ en Madrid.',                      options: ['vive', 'vives', 'vivo'],             correct: 'vive' },
        { id: 'q4', prompt: 'Nosotros ___ pizza los viernes.',             options: ['come', 'comemos', 'coméis'],         correct: 'comemos' },
        { id: 'q5', prompt: 'Vosotros ___ francés.',                       options: ['estudiáis', 'estudian', 'estudiamos'], correct: 'estudiáis' },
        { id: 'q6', prompt: 'Ellos ___ pan todos los días.',                options: ['come', 'comemos', 'comen'],          correct: 'comen' },
        { id: 'q7', prompt: 'Yo ___ a mis amigos cada semana.',              options: ['ve', 'veo', 'veis'],                  correct: 'veo' },
        { id: 'q8', prompt: '¿Vosotros ___ en Barcelona?',                    options: ['vivís', 'vivimos', 'viven'],          correct: 'vivís' },
      ],
    },

    {
      id: '48.8',
      title: 'Сопоставьте подлежащее и форму',
      type: 'match',
      instructions: 'Подберите к каждому подлежащему форму глагола <em>comer</em>.',
      pool: ['como', 'comes', 'come', 'comemos', 'coméis', 'comen'],
      questions: [
        { id: 'q1', prompt: '<em>yo</em>',          correct: 'como' },
        { id: 'q2', prompt: '<em>tú</em>',           correct: 'comes' },
        { id: 'q3', prompt: '<em>ella</em>',         correct: 'come' },
        { id: 'q4', prompt: '<em>nosotros</em>',      correct: 'comemos' },
        { id: 'q5', prompt: '<em>vosotros</em>',      correct: 'coméis' },
        { id: 'q6', prompt: '<em>ustedes</em>',        correct: 'comen' },
      ],
    },

    {
      id: '48.9',
      title: 'Какие формы правильные',
      type: 'multi',
      instructions: 'Отметьте все формы, спряжённые верно.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие формы <strong>правильные</strong>?',
          options: [
            'yo trabajo',
            'yo trabaja',
            'tú comes',
            'tú come',
            'nosotros vivemos',
            'nosotros vivimos',
            'vosotros trabajáis',
            'vosotros trabajais',
            'ellos viven',
            'ellos vivimos',
            'yo veo',
            'yo vo',
          ],
          correct: [
            'yo trabajo',
            'tú comes',
            'nosotros vivimos',
            'vosotros trabajáis',
            'ellos viven',
            'yo veo',
          ],
          explanation: 'У <em>-ir</em> в 1-м лице мн. числа окончание <em>-imos</em> (не <em>-emos</em>). У <em>vosotros</em> в <em>-ar</em> ставится <em>á</em> с акцентом.',
        },
      ],
    },

    {
      id: '48.10',
      title: 'Постройте предложение',
      type: 'fill',
      instructions: 'Составьте полную фразу. Помните о согласовании по лицу/числу.',
      questions: [
        { id: 'q1', prompt: '<em>yo / vivir / en Madrid</em> →',           correct: ['Vivo en Madrid.', 'Vivo en Madrid', 'yo vivo en Madrid', 'Yo vivo en Madrid.', 'Yo vivo en Madrid'] },
        { id: 'q2', prompt: '<em>nosotros / hablar / inglés</em> →',        correct: ['Hablamos inglés.', 'Hablamos inglés', 'Nosotros hablamos inglés.', 'Nosotros hablamos inglés'] },
        { id: 'q3', prompt: '<em>tú / comer / mucho</em> →',                 correct: ['Comes mucho.', 'Comes mucho', 'Tú comes mucho.', 'Tú comes mucho'] },
        { id: 'q4', prompt: '<em>vosotros / abrir / la ventana</em> →',       correct: ['Abrís la ventana.', 'Abrís la ventana', 'Vosotros abrís la ventana.', 'Vosotros abrís la ventana'] },
        { id: 'q5', prompt: '<em>ellos / trabajar / en un hospital</em> →',    correct: ['Trabajan en un hospital.', 'Trabajan en un hospital', 'Ellos trabajan en un hospital.', 'Ellos trabajan en un hospital'] },
        { id: 'q6', prompt: '<em>yo / ver / la tele</em> →',                    correct: ['Veo la tele.', 'Veo la tele', 'Yo veo la tele.', 'Yo veo la tele'] },
      ],
    },

    {
      id: '48.11',
      title: 'Употребление presente — какой случай',
      type: 'choice',
      instructions: 'Какой из четырёх типов употребления подходит?',
      questions: [
        { id: 'q1', prompt: '<em>La Tierra gira alrededor del Sol.</em>',           options: ['общая истина', 'привычка', 'информация о настоящем', 'действие сейчас'], correct: 'общая истина' },
        { id: 'q2', prompt: '<em>Cristina lleva siempre vaqueros.</em>',             options: ['общая истина', 'привычка', 'информация о настоящем', 'действие сейчас'], correct: 'привычка' },
        { id: 'q3', prompt: '<em>Mi hermano trabaja en una empresa de informática.</em>', options: ['общая истина', 'привычка', 'информация о настоящем', 'действие сейчас'], correct: 'информация о настоящем' },
        { id: 'q4', prompt: '<em>—¿Qué ves? —Una chica con una gorra.</em>',         options: ['общая истина', 'привычка', 'информация о настоящем', 'действие сейчас'], correct: 'действие сейчас' },
        { id: 'q5', prompt: '<em>Los vegetarianos no comen carne.</em>',              options: ['общая истина', 'привычка', 'информация о настоящем', 'действие сейчас'], correct: 'общая истина' },
        { id: 'q6', prompt: '<em>Normalmente pasamos el fin de semana en el campo.</em>', options: ['общая истина', 'привычка', 'информация о настоящем', 'действие сейчас'], correct: 'привычка' },
      ],
    },

    {
      id: '48.12',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Послушайте и запишите фразу полностью с диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Trabajo en una oficina.',          correct: ['Trabajo en una oficina.', 'Trabajo en una oficina'] },
        { id: 'q2', prompt: '', audio: 'Vives en Madrid.',                  correct: ['Vives en Madrid.', 'Vives en Madrid'] },
        { id: 'q3', prompt: '', audio: 'No bebo vino.',                      correct: ['No bebo vino.', 'No bebo vino'] },
        { id: 'q4', prompt: '', audio: 'Vosotros habláis muy rápido.',        correct: ['Vosotros habláis muy rápido.', 'Vosotros habláis muy rápido'] },
        { id: 'q5', prompt: '', audio: 'Comemos a las dos.',                  correct: ['Comemos a las dos.', 'Comemos a las dos'] },
        { id: 'q6', prompt: '', audio: 'Veo a mis amigos los sábados.',        correct: ['Veo a mis amigos los sábados.', 'Veo a mis amigos los sábados'] },
      ],
    },

    {
      id: '48.13',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна неверно спряжённая форма.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['yo hablo', 'tú hablas', 'él habla', 'nosotros hablan'], correct: 'nosotros hablan', explanation: 'Должно быть <em>hablamos</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['yo como', 'tú comes', 'nosotros comemos', 'vosotros comimos'], correct: 'vosotros comimos', explanation: 'Должно быть <em>coméis</em>; <em>comimos</em> — это прошедшее время.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['yo vivo', 'tú vives', 'nosotros vivemos', 'ellos viven'], correct: 'nosotros vivemos', explanation: 'У <em>-ir</em>: <em>vivimos</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['yo veo', 'yo vo', 'tú ves', 'él ve'], correct: 'yo vo', explanation: 'Только <em>veo</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['vosotros trabajáis', 'vosotros bebéis', 'vosotros vivís', 'vosotros estudias'], correct: 'vosotros estudias', explanation: 'У <em>vosotros</em>: <em>estudiáis</em>.' },
      ],
    },
  ],
};
