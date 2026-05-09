// ============================================================
// Unidad 19 — Posesivos (2): mío, tuyo, suyo, nuestro, vuestro
// Ударные притяжательные: ser + mío, el / la + mío, un + mío.
// Правила пересказаны своими словами; примеры — оригинальные.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u19 = {
  id: 'u19',
  number: 19,
  title: { es: 'mío, tuyo, suyo...', topic: 'Posesivos (2)' },
  topicRu: 'Ударные притяжательные: ser mío, el mío, un amigo mío',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Los posesivos <em>mío, tuyo, suyo, nuestro, vuestro</em> también indican <strong>posesión</strong> u otro tipo de relación, pero a diferencia de <em>mi, tu, su</em>, van <strong>después</strong> del nombre o sin nombre (con artículo o con <em>ser</em>).',
      ru: 'Ударные притяжательные <em>mío, tuyo, suyo</em> отвечают на тот же вопрос «чей?», что и <em>mi, tu, su</em>, но употребляются по-другому: после <em>ser</em>, после артикля (вместо повторно названной вещи), и в обороте <em>un / una / unos / unas + сущ. + mío</em>.',
      examples: [
        { es: '—Mi madre trabaja en un banco. ¿Y la tuya? —La mía trabaja en una agencia de viajes.', ru: '— Моя мама работает в банке. А твоя? — Моя — в турагентстве.' },
        { es: '—Mi pueblo es muy bonito. —El nuestro es muy antiguo.', ru: '— Моя деревня очень красивая. — Наша — очень старинная.' },
      ],
    },
    {
      type: 'heading',
      text: 'Формы',
    },
    {
      type: 'table',
      caption: 'Posesivos tónicos — все четыре формы',
      columns: ['Хозяин', 'ед., м', 'ед., ж', 'мн., м', 'мн., ж'],
      colClasses: ['col-pattern', 'col-result', 'col-result', 'col-result', 'col-result'],
      rows: [
        ['<em>yo</em>', 'mío', 'mía', 'míos', 'mías'],
        ['<em>tú</em>', 'tuyo', 'tuya', 'tuyos', 'tuyas'],
        ['<em>usted, él, ella</em>', 'suyo', 'suya', 'suyos', 'suyas'],
        ['<em>nosotros, -as</em>', 'nuestro', 'nuestra', 'nuestros', 'nuestras'],
        ['<em>vosotros, -as</em>', 'vuestro', 'vuestra', 'vuestros', 'vuestras'],
        ['<em>ustedes, ellos, ellas</em>', 'suyo', 'suya', 'suyos', 'suyas'],
      ],
    },
    {
      type: 'heading',
      text: 'Три случая употребления',
    },
    {
      type: 'rule',
      es: '<strong>(1)</strong> <em>ser + mío, tuyo...</em> — para expresar posesión.',
      ru: '<strong>(1)</strong> После <em>ser</em> — чтобы сказать, чьё это: <em>Esta bolsa no es mía. ¿Es tuya, Amparo?</em> Здесь притяжательное согласуется с подлежащим (<em>bolsa</em> ж. ед. → <em>mía</em>).',
      examples: [
        { es: 'Esta bolsa no es mía. ¿Es tuya, Amparo?', ru: 'Эта сумка не моя. Твоя, Ампаро?' },
        { es: '—¿Es esto nuestro? —No, es suyo.', ru: '— Это наше? — Нет, их.' },
      ],
    },
    {
      type: 'rule',
      es: '<strong>(2)</strong> <em>el / la / los / las + mío, tuyo...</em> — cuando se habla de algo o alguien <strong>mencionado anteriormente</strong>.',
      ru: '<strong>(2)</strong> С артиклем — вместо повторного названия предмета (как русское «мой / твой» без существительного): <em>—¿Es tuya esa bolsa? —No, la mía es más pequeña</em>. <em>el mío</em> = «мой» (напр., чемодан); <em>la mía</em> = «моя» (напр., сумка).',
      examples: [
        { es: '—¿Es tuya esa bolsa? —No, la mía es más pequeña.', ru: '— Эта сумка твоя? — Нет, моя поменьше.' },
        { es: 'Como se estropeó el coche de Jaime, fuimos en el nuestro.', ru: 'Так как машина Хайме сломалась, поехали на нашей.' },
      ],
    },
    {
      type: 'rule',
      es: '<strong>(3)</strong> <em>un / una / unos / unas + nombre + mío, tuyo...</em> — cuando hablamos de alguien o algo como <strong>parte de un grupo</strong> (uno de mis, una de mis...).',
      ru: '<strong>(3)</strong> С неопределённым артиклем + существительное + ударное притяжательное — «один из моих ...»: <em>Es amigo mío</em> (= <em>uno de mis amigos</em>); <em>Una tía nuestra vive en Panamá</em> (= одна из наших тёть). Артикль может опускаться после <em>ser</em>: <em>Es amigo mío</em>.',
      examples: [
        { es: '—¿Conoces a Julián? —Sí, hombre. Es amigo mío.', ru: '— Ты знаешь Хулиана? — Конечно. Это мой друг.' },
        { es: 'Una tía nuestra vive en Panamá.', ru: 'Одна наша тётя живёт в Панаме.' },
      ],
    },
    {
      type: 'atencion',
      es: '<em>suyo, suya, suyos, suyas</em> = <em>de él, de ella, de usted, de ellos, de ellas, de ustedes</em>. Generalmente la situación lo aclara; si no, se prefiere <em>de él / de ella ...</em>.',
      ru: 'Как и <em>su</em>, ударная форма <em>suyo</em> покрывает много значений. Если без контекста непонятно, лучше сказать <em>de él, de ella, de ustedes</em> и т. д.: <em>—¿Son estas las maletas de Felisa? —No, las suyas son azules.</em> <em>—¿Son estas mis maletas? —No, las suyas (de usted) son más pequeñas.</em>',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '19.1',
      title: 'Это моё / твоё / наше — закончите ответ',
      type: 'fill',
      instructions: 'Дополните по образцу: <em>—¿De quién son estas llaves? —Son ___</em> → <em>mías</em>. Согласуйте по роду и числу с подлежащим.',
      questions: [
        { id: 'q1', prompt: '<em>—¿De quién son estas llaves? (yo) —Son ___ .</em>', correct: 'mías' },
        { id: 'q2', prompt: '<em>—¿De quién es este libro? (yo) —Es ___ .</em>', correct: 'mío' },
        { id: 'q3', prompt: '<em>—¿De quién es este paraguas? (tú) —Es ___ .</em>', correct: 'tuyo' },
        { id: 'q4', prompt: '<em>—¿De quién son estos CD? (nosotros) —Son ___ .</em>', correct: 'nuestros' },
        { id: 'q5', prompt: '<em>—¿Son tuyos estos libros? (yo) —Sí, son ___ .</em>', correct: 'míos' },
        { id: 'q6', prompt: '<em>—¿Son vuestras estas maletas? (nosotros) —Sí, son ___ .</em>', correct: 'nuestras' },
        { id: 'q7', prompt: '<em>—¿Es suyo este reloj? (él) —Sí, es ___ .</em>', correct: 'suyo' },
        { id: 'q8', prompt: '<em>—¿Es esta bufanda tuya? (yo) —Sí, es ___ .</em>', correct: 'mía' },
      ],
    },

    {
      id: '19.2',
      title: 'el mío, la tuya, los suyos...',
      type: 'fill',
      instructions: 'Замените повтор существительного формой <em>el / la / los / las + mío, tuyo, suyo, nuestro, vuestro</em>. Согласуйте по роду и числу.',
      questions: [
        { id: 'q1', prompt: 'Estas llaves no son mías. ___ son más pequeñas.', correct: 'Las mías' },
        { id: 'q2', prompt: '—¿Es ese vuestro coche? —No, ___ es más grande.', correct: 'el nuestro' },
        { id: 'q3', prompt: 'Este abrigo no es de Pedro. ___ es azul.', correct: 'El suyo' },
        { id: 'q4', prompt: '—Perdona, ¿es este mi asiento? —No, ___ está más atrás.', correct: 'el tuyo' },
        { id: 'q5', prompt: '—¿Es ese nuestro profesor? —No, ___ es mayor.', correct: 'el nuestro' },
        { id: 'q6', prompt: 'Mi deporte preferido es el fútbol. ¿Y ___ ? —Es el esquí.', correct: 'el tuyo' },
        { id: 'q7', prompt: 'Mis hijos practican muchos deportes. ¿Y ___ , Manuel? — ___ juegan al tenis.', correct: 'los tuyos' },
        { id: 'q8', prompt: '¿Son esos los padres de Arturo? —No, ___ son más jóvenes.', correct: 'los suyos' },
        { id: 'q9', prompt: 'Mi profesora es peruana. ___ es argentina.', correct: 'La tuya', placeholder: 'La tuya / La suya / La nuestra / ...' },
        { id: 'q10', prompt: 'Nuestros hijos son muy trabajadores. ___ son un poco vagos.', correct: 'Los suyos', placeholder: 'Los suyos / Los vuestros / ...' },
      ],
    },

    {
      id: '19.3',
      title: 'un amigo mío — «один из моих»',
      type: 'fill',
      instructions: 'Дополните по образцу: <em>(amigo, yo)</em> → <em>Un amigo mío es pintor</em>. Подберите неопределённый артикль и форму притяжательного.',
      questions: [
        { id: 'q1', prompt: '<em>(amigo, yo)</em> ___ es pintor.', correct: 'Un amigo mío' },
        { id: 'q2', prompt: '<em>(amiga, yo)</em> ___ ha ganado un premio.', correct: 'Una amiga mía' },
        { id: 'q3', prompt: 'Ayer estuve con <em>(primo, vosotros)</em> ___ .', correct: 'un primo vuestro' },
        { id: 'q4', prompt: 'El director del banco es <em>(amigo, ellos)</em> ___ .', correct: 'amigo suyo', explanation: 'После <em>ser</em> обычно без артикля.' },
        { id: 'q5', prompt: 'Raquel es <em>(prima, nosotros)</em> ___ .', correct: 'prima nuestra' },
        { id: 'q6', prompt: '¿Es Alicia <em>(tía, tú)</em> ___ ?', correct: 'tía tuya' },
        { id: 'q7', prompt: '—¿Conocéis a Mariano? —Sí, es <em>(amigo, nosotros)</em> ___ .', correct: 'amigo nuestro' },
        { id: 'q8', prompt: 'El domingo conocimos a <em>(familiares, ustedes)</em> ___ .', correct: 'unos familiares suyos' },
      ],
    },

    {
      id: '19.4',
      title: 'Согласуйте по роду и числу',
      type: 'fill',
      instructions: 'Поставьте ударное притяжательное в нужной форме.',
      questions: [
        { id: 'q1', prompt: 'Esta maleta es ___ . (yo)', correct: 'mía' },
        { id: 'q2', prompt: 'Estos libros son ___ . (tú)', correct: 'tuyos' },
        { id: 'q3', prompt: 'Aquellos zapatos son ___ . (él)', correct: 'suyos' },
        { id: 'q4', prompt: 'Esa casa es ___ . (nosotros)', correct: 'nuestra' },
        { id: 'q5', prompt: 'Estos perros son ___ . (vosotros)', correct: 'vuestros' },
        { id: 'q6', prompt: 'Esa mesa es ___ . (ellas)', correct: 'suya' },
        { id: 'q7', prompt: 'Esos cuadernos son ___ . (yo)', correct: 'míos' },
        { id: 'q8', prompt: 'Esta bici es ___ . (tú)', correct: 'tuya' },
      ],
    },

    {
      id: '19.5',
      title: 'Какая конструкция уместна?',
      type: 'choice',
      instructions: 'Выберите грамматически верный вариант с ударным или безударным притяжательным.',
      questions: [
        { id: 'q1', prompt: 'Es ___ casa.', options: ['mi', 'mía', 'la mía'], correct: 'mi', explanation: 'Перед существительным — безударная форма.' },
        { id: 'q2', prompt: 'Esa casa es ___ .', options: ['mi', 'mía', 'la mía'], correct: 'mía' },
        { id: 'q3', prompt: '—¿Es esta tu casa? —No, ___ es más grande.', options: ['mi', 'mía', 'la mía'], correct: 'la mía' },
        { id: 'q4', prompt: 'Carlos es ___ amigo.', options: ['mi', 'mío', 'el mío'], correct: 'mi' },
        { id: 'q5', prompt: 'Carlos es un amigo ___ .', options: ['mi', 'mío', 'el mío'], correct: 'mío' },
        { id: 'q6', prompt: 'Estos zapatos son ___ .', options: ['tus', 'tuyos', 'los tuyos'], correct: 'tuyos' },
        { id: 'q7', prompt: '—¿Y tus zapatos? —___ están allí.', options: ['Tus', 'Tuyos', 'Los míos'], correct: 'Los míos' },
      ],
    },

    {
      id: '19.6',
      title: 'Сопоставьте безударную и ударную форму',
      type: 'match',
      instructions: 'Подберите ударную форму, соответствующую данной безударной (для слова в скобках).',
      pool: ['el mío', 'la mía', 'los míos', 'las mías', 'el tuyo', 'la tuya', 'los tuyos', 'las tuyas'],
      questions: [
        { id: 'q1', prompt: 'mi libro →', correct: 'el mío' },
        { id: 'q2', prompt: 'mi casa →', correct: 'la mía' },
        { id: 'q3', prompt: 'mis libros →', correct: 'los míos' },
        { id: 'q4', prompt: 'mis llaves →', correct: 'las mías' },
        { id: 'q5', prompt: 'tu coche →', correct: 'el tuyo' },
        { id: 'q6', prompt: 'tu chaqueta →', correct: 'la tuya' },
        { id: 'q7', prompt: 'tus padres →', correct: 'los tuyos' },
        { id: 'q8', prompt: 'tus gafas →', correct: 'las tuyas' },
      ],
    },

    {
      id: '19.7',
      title: 'Найдите фразы с правильной формой',
      type: 'multi',
      instructions: 'Отметьте все грамматически корректные варианты (помните о согласовании и о том, где какая форма уместна).',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Esta bolsa es mía.',
            'Esta bolsa es mi.',
            'La mía es más grande.',
            'La mi es más grande.',
            'Es un amigo mío.',
            'Es un amigo mi.',
            'Mi amigo Juan vive aquí.',
            'Mío amigo Juan vive aquí.',
          ],
          correct: [
            'Esta bolsa es mía.',
            'La mía es más grande.',
            'Es un amigo mío.',
            'Mi amigo Juan vive aquí.',
          ],
          explanation: 'Перед существительным — <em>mi</em>; после <em>ser</em> и с артиклем — <em>mía / la mía</em>; в обороте «один из моих» — <em>un + сущ. + mío</em>.',
        },
      ],
    },

    {
      id: '19.8',
      title: 'suyo = de él / de ella / ...',
      type: 'fill',
      instructions: 'Перепишите фразу через <em>de él / de ella / de ellos / de ellas / de usted / de ustedes</em>.',
      questions: [
        { id: 'q1', prompt: '<em>la suya</em> (de Felisa) →', correct: ['la de Felisa', 'la de ella'] },
        { id: 'q2', prompt: '<em>el suyo</em> (de don Carlos) →', correct: ['el de don Carlos', 'el de él'] },
        { id: 'q3', prompt: '<em>las suyas</em> (de los señores Puebla) →', correct: ['las de los señores Puebla', 'las de ellos'] },
        { id: 'q4', prompt: '<em>los suyos</em> (de mis vecinas) →', correct: ['los de mis vecinas', 'los de ellas'] },
        { id: 'q5', prompt: '<em>la suya</em> (de usted) →', correct: ['la de usted'] },
      ],
    },

    {
      id: '19.9',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с грамматической ошибкой. Выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Esta bolsa es mía.', 'Esta bolsa es mí.', 'La mía es más grande.', 'Es una amiga mía.'], correct: 'Esta bolsa es mí.', explanation: '<em>mí</em> — местоимение «меня», не притяжательное; нужно <em>mía</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Es mi casa.', 'Es la mía.', 'Es mía la casa.', 'Esta casa es mía.'], correct: 'Es mía la casa.', explanation: 'Естественный порядок — <em>Esta casa es mía</em> или <em>Es mía esta casa</em>; «<em>Es mía la casa</em>» звучит неловко.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Estos libros son míos.', 'Estos libros son mío.', 'Estos libros son míos y de mi hermano.', 'Mis libros están aquí.'], correct: 'Estos libros son mío.', explanation: 'Согласование по числу: должно быть <em>míos</em>, а не <em>mío</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Carlos es un amigo mío.', 'Carlos es amigo mío.', 'Carlos es un mi amigo.', 'Carlos es mi amigo.'], correct: 'Carlos es un mi amigo.', explanation: '<em>un + mi</em> вместе не сочетается; нужно <em>un amigo mío</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Mi coche es nuevo.', 'El mío es nuevo.', 'Mío coche es nuevo.', 'Es coche mío.'], correct: 'Mío coche es nuevo.', explanation: 'Перед существительным — безударная форма <em>mi</em>.' },
      ],
    },

    {
      id: '19.10',
      title: 'Mi vs el mío vs un ... mío — дополните',
      type: 'fill',
      instructions: 'Поставьте подходящую форму притяжательного.',
      questions: [
        { id: 'q1', prompt: 'Esta es ___ casa. Vivimos aquí desde hace cinco años. (yo)', correct: 'mi' },
        { id: 'q2', prompt: 'Estas son ___ llaves. (yo)', correct: 'mis' },
        { id: 'q3', prompt: 'Estas llaves son ___ . (yo)', correct: 'mías' },
        { id: 'q4', prompt: '—¿Es ___ ese coche? —No, ___ está allí. (tú)', correct: 'tuyo' },
        { id: 'q5', prompt: 'Te presento a Marta, ___ amiga. (yo)', correct: 'una amiga mía', placeholder: 'una amiga mía / mi amiga' },
        { id: 'q6', prompt: '—¿Conoces a Diego? —Sí, es ___ amigo. (yo)', correct: 'amigo mío', placeholder: 'amigo mío / mi amigo' },
      ],
    },

    {
      id: '19.11',
      title: 'Перевод с русского',
      type: 'fill',
      instructions: 'Переведите фразу. Используйте ударные притяжательные.',
      questions: [
        { id: 'q1', prompt: 'Эта сумка моя.', correct: ['Esta bolsa es mía.', 'Esta bolsa es mía'] },
        { id: 'q2', prompt: 'Эти ключи не твои?', correct: ['¿Estas llaves no son tuyas?', '¿Estas llaves no son tuyas', '¿No son tuyas estas llaves?', '¿No son tuyas estas llaves'] },
        { id: 'q3', prompt: 'Это наша машина, не их.', correct: ['Este coche es nuestro, no suyo.', 'Este coche es nuestro, no suyo'] },
        { id: 'q4', prompt: 'Один мой друг живёт в Мадриде.', correct: ['Un amigo mío vive en Madrid.', 'Un amigo mío vive en Madrid'] },
        { id: 'q5', prompt: 'Моя сестра — врач, а твоя?', correct: ['Mi hermana es médica, ¿y la tuya?', 'Mi hermana es médica, ¿y la tuya'] },
      ],
    },

    {
      id: '19.12',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите услышанное полностью, с пунктуацией и диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Esta bolsa no es mía.', correct: ['Esta bolsa no es mía.', 'Esta bolsa no es mía'] },
        { id: 'q2', prompt: '', audio: 'La mía es más pequeña.', correct: ['La mía es más pequeña.', 'La mía es más pequeña'] },
        { id: 'q3', prompt: '', audio: 'Es un amigo mío.', correct: ['Es un amigo mío.', 'Es un amigo mío'] },
        { id: 'q4', prompt: '', audio: 'El nuestro es muy antiguo.', correct: ['El nuestro es muy antiguo.', 'El nuestro es muy antiguo'] },
        { id: 'q5', prompt: '', audio: 'Una tía nuestra vive en Panamá.', correct: ['Una tía nuestra vive en Panamá.', 'Una tía nuestra vive en Panamá'] },
      ],
    },
  ],
};
