// Учебные тексты для чтения. Каждый текст — объект, прогрессия по дням (A1: дни 1–30).
// Кастильский испанский (Испания): vosotros, ordenador, móvil, zumo. Coger избегаем на A1.
// Подключение: <script src="data/texts.js"></script> до соответствующего рендерера.
window.TEXTS = window.TEXTS || [];

window.TEXTS.push(
  {
    id: 'a1-001',
    level: 'A1',
    day: 1,
    title: 'Domingo en casa',
    text:
      'Hoy comemos en casa. Mi madre hace una tortilla grande. Mi padre prepara café con leche. ' +
      'Mi hermana bebe zumo de naranja. Yo como pan con tomate.\n\n' +
      'Tenemos platos blancos y servilletas rojas. Mi gato negro mira la mesa y maúlla. ' +
      'En la cocina canta la radio. ¡Qué rico el domingo!',
    vocabulary: [
      {
        word: 'la tortilla',
        translation: 'испанский омлет (обычно с картошкой)',
        example: 'Mi madre hace una tortilla grande.',
      },
      {
        word: 'el zumo',
        translation: 'сок (кастильский вариант; в Лат. Америке — jugo)',
        example: 'Mi hermana bebe zumo de naranja.',
      },
      {
        word: 'el pan con tomate',
        translation: 'хлеб с тёртым томатом — типичный испанский завтрак',
        example: 'Yo como pan con tomate.',
      },
      {
        word: 'la servilleta',
        translation: 'салфетка',
        example: 'Tenemos servilletas rojas.',
      },
      {
        word: 'maullar',
        translation: 'мяукать',
        example: 'Mi gato mira la mesa y maúlla.',
      },
      {
        word: '¡Qué rico!',
        translation: 'как вкусно! / какая вкуснятина!',
        example: '¡Qué rico el domingo!',
      },
    ],
    questions: [
      {
        q: '¿Qué prepara el padre?',
        options: ['Café con leche', 'Una tortilla', 'Zumo de naranja'],
        correct: 0,
      },
      {
        q: '¿De qué color son las servilletas?',
        options: ['Blancas', 'Rojas', 'Verdes'],
        correct: 1,
      },
      {
        q: '¿Qué bebe la hermana?',
        options: ['Leche', 'Café', 'Zumo de naranja'],
        correct: 2,
      },
    ],
    grammar_notes: [
      {
        topic: 'Presente de indicativo: -er глаголы',
        note:
          'Глаголы на -er спрягаются с окончаниями -o, -es, -e, -emos, -éis, -en. ' +
          'В тексте: yo como, mi hermana bebe, comemos en casa.',
      },
      {
        topic: 'Согласование прилагательных',
        note:
          'Прилагательное согласуется с существительным в роде и числе. ' +
          'platos (м.р., мн.ч.) blancos; servilletas (ж.р., мн.ч.) rojas; gato negro (м.р., ед.ч.).',
      },
    ],
  },

  {
    id: 'a1-002',
    level: 'A1',
    day: 2,
    title: 'Cuatro gustos diferentes',
    text:
      'En mi familia tenemos gustos muy diferentes. Mi padre prefiere la carne con patatas. ' +
      'Mi madre come pescado los viernes. Mi hermano mayor solo quiere pizza.\n\n' +
      'Yo como verduras y fruta. Mi gato Tito quiere todo: pollo, queso, jamón. ' +
      'Cenamos juntos a las nueve.',
    vocabulary: [
      {
        word: 'la carne con patatas',
        translation: 'мясо с картошкой — типичный испанский обед',
        example: 'Mi padre prefiere la carne con patatas.',
      },
      {
        word: 'el pescado',
        translation: 'рыба (как продукт; el pez — рыба живая)',
        example: 'Mi madre come pescado los viernes.',
      },
      {
        word: 'las verduras',
        translation: 'овощи (мн. ч., общее название)',
        example: 'Yo como verduras y fruta.',
      },
      {
        word: 'preferir',
        translation: 'предпочитать (e→ie: prefiero, prefieres, prefiere…)',
        example: 'Mi padre prefiere la carne.',
      },
      {
        word: 'el gusto',
        translation: 'вкус, предпочтение (tener gustos diferentes)',
        example: 'Tenemos gustos diferentes.',
      },
      {
        word: 'cenar',
        translation: 'ужинать; la cena — ужин',
        example: 'Cenamos juntos a las nueve.',
      },
      {
        word: 'el jamón',
        translation: 'хамон — вяленая ветчина, гордость испанской кухни',
        example: 'Mi gato Tito quiere jamón.',
      },
    ],
    questions: [
      {
        q: '¿Qué prefiere el padre?',
        options: ['Carne con patatas', 'Pescado', 'Pizza'],
        correct: 0,
      },
      {
        q: '¿Cuándo come pescado la madre?',
        options: ['Los lunes', 'Los viernes', 'Los domingos'],
        correct: 1,
      },
      {
        q: '¿Qué quiere comer el gato Tito?',
        options: ['Solo pollo', 'Solo queso', 'Todo'],
        correct: 2,
      },
    ],
    grammar_notes: [
      {
        topic: 'Presente irregular: preferir (e→ie)',
        note:
          'В корне -e- меняется на -ie- во всех формах, кроме nosotros/vosotros: ' +
          'prefiero, prefieres, prefiere, preferimos, preferís, prefieren. ' +
          'Так же спрягаются querer, cerrar, empezar, pensar.',
      },
      {
        topic: 'Дни недели для регулярных действий',
        note:
          'Артикль во множественном числе + день недели = регулярная привычка: ' +
          '«los viernes» = «по пятницам». А «el viernes» — конкретная ближайшая пятница.',
      },
    ],
  },

  {
    id: 'a1-003',
    level: 'A1',
    day: 3,
    title: 'Mi piso en Salamanca',
    text:
      'Vivo en un piso pequeño en Salamanca. Tiene tres habitaciones: el salón, la cocina y mi dormitorio. ' +
      'En el salón tenemos un sofá rojo y una mesa de madera.\n\n' +
      'La cocina huele siempre a café. En mi dormitorio guardo libros y ropa. ' +
      'Mi gato duerme encima de la cama.',
    vocabulary: [
      {
        word: 'el piso',
        translation: 'квартира (кастильское; в Лат. Америке — el apartamento)',
        example: 'Vivo en un piso pequeño.',
      },
      {
        word: 'la habitación',
        translation: 'комната (общее название) или гостиничный номер',
        example: 'El piso tiene tres habitaciones.',
      },
      {
        word: 'el salón',
        translation: 'гостиная',
        example: 'En el salón tenemos un sofá rojo.',
      },
      {
        word: 'el dormitorio',
        translation: 'спальня (от dormir)',
        example: 'En mi dormitorio guardo libros.',
      },
      {
        word: 'de madera',
        translation: 'деревянный, из дерева (la madera — древесина)',
        example: 'una mesa de madera',
      },
      {
        word: 'guardar',
        translation: 'хранить, держать (вещи где-то)',
        example: 'Guardo libros y ropa en el dormitorio.',
      },
      {
        word: 'encima de',
        translation: 'на, поверх (предлог места)',
        example: 'El gato duerme encima de la cama.',
      },
    ],
    questions: [
      {
        q: '¿En qué ciudad vive la persona?',
        options: ['En Madrid', 'En Salamanca', 'En Sevilla'],
        correct: 1,
      },
      {
        q: '¿Cuántas habitaciones tiene el piso?',
        options: ['Dos', 'Tres', 'Cuatro'],
        correct: 1,
      },
      {
        q: '¿De qué es la mesa del salón?',
        options: ['De plástico', 'De madera', 'De cristal'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Presente irregular: tener',
        note:
          'tengo, tienes, tiene, tenemos, tenéis, tienen. ' +
          'Используется для обладания (tengo un piso) и составных конструкций ' +
          '(tener años, tener hambre, tener que…).',
      },
      {
        topic: 'Предлоги места',
        note:
          'encima de — на/поверх; debajo de — под; al lado de — рядом с; ' +
          'detrás de — позади; delante de — перед. Всегда с «de» перед существительным.',
      },
    ],
  },

  {
    id: 'a1-004',
    level: 'A1',
    day: 4,
    title: 'Una mañana en la cocina',
    text:
      'En la cocina mi madre prepara el desayuno. Saca pan del horno y aceite de oliva. ' +
      'Yo corto un tomate maduro. Mi hermano hace zumo de naranja.\n\n' +
      'En la mesa ponemos pan con aceite, tomate y sal. ¡Qué olor tan rico! ' +
      'Comemos rápido porque mi padre llama a la puerta.',
    vocabulary: [
      {
        word: 'el aceite de oliva',
        translation: 'оливковое масло — основа испанской кухни',
        example: 'Saca aceite de oliva.',
      },
      {
        word: 'el horno',
        translation: 'духовка, печь',
        example: 'Saca pan del horno.',
      },
      {
        word: 'maduro, -a',
        translation: 'спелый, зрелый',
        example: 'un tomate maduro',
      },
      {
        word: 'cortar',
        translation: 'резать',
        example: 'Yo corto un tomate.',
      },
      {
        word: 'sacar',
        translation: 'доставать, вынимать (откуда-то наружу)',
        example: 'Saca pan del horno.',
      },
      {
        word: 'el olor',
        translation: 'запах (от oler — пахнуть, irregular o→ue → huele)',
        example: '¡Qué olor tan rico!',
      },
      {
        word: 'llamar a la puerta',
        translation: 'стучать в дверь (буквально «звать в дверь»)',
        example: 'Mi padre llama a la puerta.',
      },
    ],
    questions: [
      {
        q: '¿Qué saca la madre del horno?',
        options: ['Pan', 'Tomate', 'Zumo'],
        correct: 0,
      },
      {
        q: '¿Quién corta el tomate?',
        options: ['La madre', 'Yo', 'El hermano'],
        correct: 1,
      },
      {
        q: '¿Quién llama a la puerta?',
        options: ['El hermano', 'La madre', 'El padre'],
        correct: 2,
      },
    ],
    grammar_notes: [
      {
        topic: 'Presente: -ar глаголы',
        note:
          'preparar, sacar, cortar, llamar — окончания -o, -as, -a, -amos, -áis, -an. ' +
          'В тексте: preparo, prepara, ponemos, llama.',
      },
      {
        topic: '«¡Qué + прилагательное + tan + …!»',
        note:
          'Восклицательная конструкция усиления: «¡Qué olor tan rico!» — «Какой вкусный запах!». ' +
          'Tan здесь усиливает прилагательное.',
      },
    ],
  },

  {
    id: 'a1-005',
    level: 'A1',
    day: 5,
    title: 'Los datos de Lucas',
    text:
      'En clase, la profesora pregunta los datos personales.\n\n' +
      '—¿Cuántos años tienes, Lucas? —pregunta.\n' +
      '—Tengo doce años.\n' +
      '—¿Y tu teléfono?\n' +
      '—Seis seis ocho, cuatro veintiuno, treinta y dos.\n' +
      '—¿Dónde vives?\n' +
      '—En la calle Mayor, número siete, segundo piso.\n\n' +
      'Lucas escribe todo en su cuaderno azul.',
    vocabulary: [
      {
        word: 'los datos personales',
        translation: 'личные данные (возраст, телефон, адрес)',
        example: 'La profesora pregunta los datos personales.',
      },
      {
        word: 'el teléfono / el móvil',
        translation: 'телефон / мобильный (в Испании — móvil, в Лат. Ам. — celular)',
        example: '¿Cuál es tu teléfono?',
      },
      {
        word: 'la calle Mayor',
        translation: 'главная улица — типичное название центральной улицы в Испании',
        example: 'Vivo en la calle Mayor.',
      },
      {
        word: 'el cuaderno',
        translation: 'тетрадь',
        example: 'Lucas escribe en su cuaderno azul.',
      },
      {
        word: 'segundo piso',
        translation: 'второй этаж (порядковое числительное)',
        example: 'Vivo en el segundo piso.',
      },
      {
        word: 'tener … años',
        translation: 'быть … лет (буквально «иметь … лет»)',
        example: 'Tengo doce años.',
      },
    ],
    questions: [
      {
        q: '¿Cuántos años tiene Lucas?',
        options: ['Diez', 'Doce', 'Catorce'],
        correct: 1,
      },
      {
        q: '¿En qué calle vive?',
        options: ['Calle Mayor', 'Calle Cervantes', 'Calle Real'],
        correct: 0,
      },
      {
        q: '¿En qué piso está su casa?',
        options: ['Primer piso', 'Segundo piso', 'Tercer piso'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Возраст: tener … años',
        note:
          'В испанском возраст выражается глаголом tener: «Tengo doce años» = «Мне 12 лет». ' +
          'Не *soy doce años. Дословно: «У меня двенадцать лет».',
      },
      {
        topic: 'Порядковые числительные 1–10',
        note:
          'primero, segundo, tercero, cuarto, quinto, sexto, séptimo, octavo, noveno, décimo. ' +
          'Перед существительным м. р. ед. ч. primero и tercero теряют -o: primer piso, tercer día.',
      },
      {
        topic: 'Числа от 11 до 30',
        note:
          'От 11 до 30 пишутся одним словом: once, doce, …, veintiuno, veintidós, …, treinta. ' +
          'С 31 — раздельно через y: treinta y uno, treinta y dos.',
      },
    ],
  },

  {
    id: 'a1-006',
    level: 'A1',
    day: 6,
    title: 'Mi armario',
    text:
      'Abro el armario. Veo muchos colores. Tengo cinco camisetas: dos azules, una blanca, ' +
      'una negra y una amarilla con dibujos.\n\n' +
      'Mi madre dice que necesito una camisa elegante para las fiestas. ' +
      'Llevo siempre vaqueros negros y zapatillas blancas. Solo tengo un jersey verde para el invierno.',
    vocabulary: [
      {
        word: 'el armario',
        translation: 'шкаф (для одежды)',
        example: 'Abro el armario.',
      },
      {
        word: 'la camiseta',
        translation: 'футболка',
        example: 'Tengo cinco camisetas.',
      },
      {
        word: 'la camisa',
        translation: 'рубашка с пуговицами (от ворота)',
        example: 'Necesito una camisa elegante.',
      },
      {
        word: 'los vaqueros',
        translation: 'джинсы (кастильское; в Лат. Ам. — los jeans/el jean)',
        example: 'Llevo vaqueros negros.',
      },
      {
        word: 'las zapatillas',
        translation: 'кроссовки (в Испании; в Лат. Ам. — los tenis)',
        example: 'zapatillas blancas',
      },
      {
        word: 'el jersey',
        translation: 'свитер (кастильское; в Лат. Ам. — el suéter)',
        example: 'un jersey verde para el invierno',
      },
      {
        word: 'llevar',
        translation: 'носить (об одежде); также «нести, везти»',
        example: 'Llevo siempre vaqueros negros.',
      },
    ],
    questions: [
      {
        q: '¿Cuántas camisetas azules tiene?',
        options: ['Una', 'Dos', 'Tres'],
        correct: 1,
      },
      {
        q: '¿De qué color son sus vaqueros?',
        options: ['Azules', 'Negros', 'Verdes'],
        correct: 1,
      },
      {
        q: '¿Para qué necesita una camisa elegante?',
        options: ['Para el trabajo', 'Para las fiestas', 'Para el deporte'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Согласование цвета',
        note:
          'Прилагательные цвета на -o согласуются в роде и числе: camisetas blancas (ж. р., мн. ч.), ' +
          'vaqueros negros (м. р., мн. ч.). Прилагательные на -e или согласный имеют одну форму ' +
          'для м. р. и ж. р., меняется только число: jersey verde, camisa azul → jerséis verdes, camisas azules.',
      },
      {
        topic: '«llevar» об одежде',
        note:
          'Глагол llevar в значении «носить (на себе)» используется без se: ' +
          'llevo vaqueros, lleva una camisa. Не *me llevo. ' +
          'Возвратное llevarse значит «уносить с собой / уживаться с кем-то».',
      },
    ],
  },

  {
    id: 'a1-007',
    level: 'A1',
    day: 7,
    title: 'Una semana llena',
    text:
      'Mis hijos tienen muchas actividades. El lunes Sofía va a clase de piano. ' +
      'El martes Diego entrena al fútbol. El miércoles los dos van a inglés.\n\n' +
      'El jueves Sofía pinta y Diego nada en la piscina. El viernes nada: ¡por fin libres! ' +
      'El sábado vamos al parque. El domingo dormimos.',
    vocabulary: [
      {
        word: 'la actividad',
        translation: 'занятие, активность (кружок, спорт)',
        example: 'Mis hijos tienen muchas actividades.',
      },
      {
        word: 'la clase de piano',
        translation: 'урок фортепиано',
        example: 'Sofía va a clase de piano.',
      },
      {
        word: 'entrenar',
        translation: 'тренироваться (спорт)',
        example: 'Diego entrena al fútbol.',
      },
      {
        word: 'la piscina',
        translation: 'бассейн',
        example: 'Diego nada en la piscina.',
      },
      {
        word: 'libre',
        translation: 'свободный (нет дел / нет занятых мест)',
        example: '¡Por fin libres!',
      },
      {
        word: 'dormir',
        translation: 'спать (o→ue: duermo, duermes, duerme, dormimos, dormís, duermen)',
        example: 'El domingo dormimos.',
      },
      {
        word: 'por fin',
        translation: 'наконец-то',
        example: '¡Por fin libres!',
      },
    ],
    questions: [
      {
        q: '¿Qué día va Sofía a clase de piano?',
        options: ['El lunes', 'El martes', 'El miércoles'],
        correct: 0,
      },
      {
        q: '¿Dónde nada Diego los jueves?',
        options: ['En el río', 'En la piscina', 'En el mar'],
        correct: 1,
      },
      {
        q: '¿Qué hace la familia el domingo?',
        options: ['Va al parque', 'Nada', 'Duerme'],
        correct: 2,
      },
    ],
    grammar_notes: [
      {
        topic: 'Дни недели — со строчной буквы',
        note:
          'lunes, martes, miércoles, jueves, viernes, sábado, domingo — все со строчной. ' +
          'lunes, martes, miércoles, jueves, viernes — не меняются во мн. ч. (el lunes / los lunes). ' +
          'Только sábado и domingo получают -s: los sábados, los domingos.',
      },
      {
        topic: 'Игра слов: nada',
        note:
          'В тексте «Diego nada en la piscina» — nada — форма глагола nadar «плавать». ' +
          'А «El viernes nada» — nada здесь местоимение «ничего». Различает контекст.',
      },
    ],
  },

  {
    id: 'a1-008',
    level: 'A1',
    day: 8,
    title: 'Buenos vecinos',
    text:
      'En mi edificio vivimos cinco familias. Conozco bien a mis vecinos. ' +
      'Don Antonio sale por las mañanas con su perro Lolo.\n\n' +
      'La señora Pilar siempre dice «¡Buenos días!» con una sonrisa. ' +
      'Los niños del segundo gritan mucho, pero no importa. ' +
      'Yo saludo a todos en el ascensor: «¡Hola!», «¡Hasta luego!».',
    vocabulary: [
      {
        word: 'el edificio',
        translation: 'здание (жилой дом)',
        example: 'En mi edificio vivimos cinco familias.',
      },
      {
        word: 'el vecino / la vecina',
        translation: 'сосед / соседка',
        example: 'Conozco bien a mis vecinos.',
      },
      {
        word: 'don / doña',
        translation: 'вежливое обращение перед именем (don Antonio, doña Pilar)',
        example: 'Don Antonio sale con su perro.',
      },
      {
        word: 'el ascensor',
        translation: 'лифт (кастильское; в Лат. Ам. — el elevador)',
        example: 'Saludo a todos en el ascensor.',
      },
      {
        word: 'saludar',
        translation: 'здороваться, приветствовать',
        example: 'Saludo a todos en el ascensor.',
      },
      {
        word: 'la sonrisa',
        translation: 'улыбка (от sonreír — улыбаться)',
        example: 'dice «buenos días» con una sonrisa',
      },
      {
        word: 'gritar',
        translation: 'кричать',
        example: 'Los niños del segundo gritan mucho.',
      },
      {
        word: '¡Hasta luego!',
        translation: 'до свидания, до встречи (буквально «до позже»)',
        example: 'Saludo: «¡Hasta luego!»',
      },
    ],
    questions: [
      {
        q: '¿Con quién sale don Antonio por las mañanas?',
        options: ['Con su mujer', 'Con su perro', 'Con su hijo'],
        correct: 1,
      },
      {
        q: '¿Quién grita mucho en el edificio?',
        options: ['Los vecinos del primero', 'Los niños del segundo', 'Los abuelos'],
        correct: 1,
      },
      {
        q: '¿Dónde saluda el narrador a los vecinos?',
        options: ['En la calle', 'En el portal', 'En el ascensor'],
        correct: 2,
      },
    ],
    grammar_notes: [
      {
        topic: 'Личное «a»',
        note:
          'Перед прямым дополнением-человеком ставится предлог a: «saludo a todos», ' +
          '«conozco a mis vecinos». Перед неодушевлённым — нет: «conozco la ciudad».',
      },
      {
        topic: 'don / doña vs señor / señora',
        note:
          'Don и doña — уважительное обращение перед именем: don Antonio, doña Pilar. ' +
          'Señor и señora — перед фамилией: el señor García, la señora Ruiz.',
      },
    ],
  },

  {
    id: 'a1-009',
    level: 'A1',
    day: 9,
    title: 'La tienda de Carmen',
    text:
      'Cerca de mi casa tenemos una tienda pequeña. Allí compro pan, leche y fruta cada día.\n\n' +
      'El pan cuesta un euro. Un litro de leche, ochenta céntimos. ' +
      'Un kilo de manzanas, dos euros con cincuenta.\n\n' +
      'La dueña, Carmen, conoce a todo el barrio. A veces me regala una galleta.',
    vocabulary: [
      {
        word: 'la tienda',
        translation: 'магазин (небольшой)',
        example: 'Cerca de mi casa tenemos una tienda pequeña.',
      },
      {
        word: 'el barrio',
        translation: 'район, квартал',
        example: 'Carmen conoce a todo el barrio.',
      },
      {
        word: 'el dueño / la dueña',
        translation: 'хозяин / хозяйка (заведения)',
        example: 'La dueña se llama Carmen.',
      },
      {
        word: 'cada día',
        translation: 'каждый день (синоним: todos los días)',
        example: 'Compro pan cada día.',
      },
      {
        word: 'el céntimo',
        translation: 'цент (1/100 евро)',
        example: 'ochenta céntimos',
      },
      {
        word: 'un kilo de',
        translation: 'килограмм (чего-то): un kilo de manzanas',
        example: 'un kilo de manzanas, dos euros',
      },
      {
        word: 'costar',
        translation: 'стоить (o→ue: cuesta, cuestan)',
        example: 'El pan cuesta un euro.',
      },
      {
        word: 'regalar',
        translation: 'дарить (regalo — подарок)',
        example: 'Carmen me regala una galleta.',
      },
    ],
    questions: [
      {
        q: '¿Qué compra el narrador cada día?',
        options: ['Carne, pescado y queso', 'Pan, leche y fruta', 'Solo ropa'],
        correct: 1,
      },
      {
        q: '¿Cuánto cuesta un kilo de manzanas?',
        options: ['Un euro', 'Dos euros con cincuenta', 'Cinco euros'],
        correct: 1,
      },
      {
        q: '¿Quién es Carmen?',
        options: ['Una vecina', 'La dueña de la tienda', 'La profesora'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Цены: euros con céntimos',
        note:
          'Цена 2,50 € читается «dos euros con cincuenta» (céntimos). В испанском в числах ' +
          'десятичный разделитель — запятая (2,50), а не точка. Точка — для тысяч (1.000).',
      },
      {
        topic: '«cada» + ед. ч.',
        note:
          'После cada — существительное в единственном числе: cada día, cada año, cada vez. ' +
          'Не *cada días. Синоним для «каждый день» — todos los días (мн. ч. с артиклем).',
      },
    ],
  },

  {
    id: 'a1-010',
    level: 'A1',
    day: 10,
    title: 'Domingo con la abuela',
    text:
      'El domingo comemos en casa de la abuela. Mi tío Paco habla alto. ' +
      'Mi prima Marta enseña fotos de la universidad.\n\n' +
      'Mi hermano y yo discutimos por el último trozo de tortilla. ' +
      'La abuela trae croquetas y ensalada. Mi padre pone música de los años setenta. ' +
      'Todos cantamos hasta tarde.',
    vocabulary: [
      {
        word: 'el tío / la tía',
        translation: 'дядя / тётя',
        example: 'Mi tío Paco habla alto.',
      },
      {
        word: 'el primo / la prima',
        translation: 'двоюродный брат / сестра',
        example: 'Mi prima Marta enseña fotos.',
      },
      {
        word: 'la abuela / el abuelo',
        translation: 'бабушка / дедушка',
        example: 'Comemos en casa de la abuela.',
      },
      {
        word: 'las croquetas',
        translation: 'крокеты — типичные испанские «котлетки» в панировке с бешамелью',
        example: 'La abuela trae croquetas.',
      },
      {
        word: 'discutir',
        translation: 'спорить, ругаться (а не нейтрально «обсуждать»!)',
        example: 'Discutimos por el último trozo de tortilla.',
      },
      {
        word: 'enseñar',
        translation: 'показывать; также «учить, преподавать»',
        example: 'Mi prima enseña fotos.',
      },
      {
        word: 'el trozo',
        translation: 'кусок, ломтик (более бытовое, чем pedazo)',
        example: 'el último trozo de tortilla',
      },
    ],
    questions: [
      {
        q: '¿En casa de quién comen el domingo?',
        options: ['De los padres', 'De la abuela', 'Del tío Paco'],
        correct: 1,
      },
      {
        q: '¿Por qué discuten los hermanos?',
        options: ['Por la música', 'Por las fotos', 'Por el último trozo de tortilla'],
        correct: 2,
      },
      {
        q: '¿De qué época pone música el padre?',
        options: ['De los años sesenta', 'De los años setenta', 'De los años ochenta'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: '«en casa de» + человек',
        note:
          'en casa de la abuela = «у бабушки дома». Не путать с «a casa» (направление к себе домой). ' +
          'Также: voy a casa (иду домой), estoy en casa (я дома), en casa de un amigo (у друга).',
      },
      {
        topic: '«discutir» — ложный друг',
        note:
          'discutir в испанском — «спорить, ругаться», ближе к английскому argue, чем discuss. ' +
          'Для нейтрального «обсудить» — comentar, hablar de, debatir.',
      },
    ],
  },

  {
    id: 'a1-011',
    level: 'A1',
    day: 11,
    title: 'Lunes por la mañana',
    text:
      'Me llamo Carlos y soy profesor de matemáticas. Vivo en Sevilla. ' +
      'Los lunes me levanto a las siete. La cocina está fría en invierno, pero el café está caliente.\n\n' +
      'Mi mujer es enfermera y trabaja en un hospital cerca. Salimos juntos. ' +
      'En la calle hay mucha gente y poco tráfico. El cielo está gris y hace frío.\n\n' +
      'Llego al instituto a las ocho. Mis alumnos son simpáticos pero ruidosos. ¡Empieza otra semana!',
    vocabulary: [
      {
        word: 'el profesor / la profesora',
        translation: 'учитель, преподаватель',
        example: 'Soy profesor de matemáticas.',
      },
      {
        word: 'la enfermera',
        translation: 'медсестра (м.р. — el enfermero)',
        example: 'Mi mujer es enfermera.',
      },
      {
        word: 'levantarse',
        translation: 'вставать (с постели) — возвратный глагол',
        example: 'Los lunes me levanto a las siete.',
      },
      {
        word: 'el instituto',
        translation: 'школа для старших классов (ESO + bachillerato) в Испании',
        example: 'Llego al instituto a las ocho.',
      },
      {
        word: 'el alumno / la alumna',
        translation: 'ученик / ученица',
        example: 'Mis alumnos son simpáticos.',
      },
      {
        word: 'ruidoso, -a',
        translation: 'шумный, -ая',
        example: 'Son simpáticos pero ruidosos.',
      },
      {
        word: 'caliente / frío',
        translation: 'горячий / холодный',
        example: 'El café está caliente, la cocina está fría.',
      },
      {
        word: 'el cielo',
        translation: 'небо',
        example: 'El cielo está gris.',
      },
      {
        word: 'el tráfico',
        translation: 'дорожное движение',
        example: 'Hay poco tráfico.',
      },
      {
        word: 'simpático, -a',
        translation: 'приятный, симпатичный (о характере)',
        example: 'Mis alumnos son simpáticos.',
      },
    ],
    questions: [
      {
        q: '¿Cuál es la profesión de Carlos?',
        options: ['Médico', 'Profesor', 'Camarero'],
        correct: 1,
      },
      {
        q: '¿Cómo está el cielo?',
        options: ['Azul', 'Gris', 'Blanco'],
        correct: 1,
      },
      {
        q: '¿A qué hora se levanta los lunes?',
        options: ['A las seis', 'A las siete', 'A las ocho'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Ser vs estar',
        note:
          'SER — для постоянных характеристик и идентичности: soy profesor, es enfermera, son simpáticos. ' +
          'ESTAR — для состояний, временных условий и местоположения: está fría, está caliente, está gris.',
      },
      {
        topic: 'Возвратные глаголы',
        note:
          'Возвратное местоимение (me, te, se, nos, os, se) ставится перед спрягаемым глаголом. ' +
          'Me llamo Carlos = «меня зовут Карлос»; me levanto = «я встаю».',
      },
      {
        topic: 'Hay — «есть, находится»',
        note:
          'Безличная форма от haber. Используется, когда сообщается о существовании чего-либо: ' +
          'en la calle hay mucha gente, hay poco tráfico. Не путать с está/están (то же место, но известный объект).',
      },
    ],
  },

  {
    id: 'a1-012',
    level: 'A1',
    day: 12,
    title: 'Lunes a viernes',
    text:
      'Me llamo Sofía y soy estudiante de medicina en Salamanca. ' +
      'De lunes a viernes me levanto a las siete. ' +
      'Primero me ducho, luego me visto rápido. Desayuno una tostada y un café con leche en la cocina.\n\n' +
      'Tomo el autobús a las ocho. Las clases son largas pero interesantes. ' +
      'Por la tarde estudio en la biblioteca. ' +
      'Estoy cansada por la noche, así que me acuesto pronto, sobre las once.',
    vocabulary: [
      {
        word: 'el / la estudiante',
        translation: 'студент / студентка (одна форма для м. р. и ж. р., меняется артикль)',
        example: 'Soy estudiante de medicina.',
      },
      {
        word: 'ducharse',
        translation: 'принимать душ — возвратный',
        example: 'Me ducho por la mañana.',
      },
      {
        word: 'vestirse',
        translation: 'одеваться (e→i: me visto, te vistes, se viste…)',
        example: 'Me visto rápido.',
      },
      {
        word: 'la tostada',
        translation: 'тост — поджаренный хлеб (типичный испанский завтрак)',
        example: 'Desayuno una tostada.',
      },
      {
        word: 'desayunar',
        translation: 'завтракать; el desayuno — завтрак',
        example: 'Desayuno una tostada y un café.',
      },
      {
        word: 'el autobús',
        translation: 'автобус (городской)',
        example: 'Tomo el autobús a las ocho.',
      },
      {
        word: 'por la tarde',
        translation: 'днём, во второй половине дня (примерно 14:00–20:00)',
        example: 'Por la tarde estudio en la biblioteca.',
      },
      {
        word: 'la biblioteca',
        translation: 'библиотека',
        example: 'Estudio en la biblioteca.',
      },
      {
        word: 'cansado, -a',
        translation: 'уставший (с estar — состояние)',
        example: 'Estoy cansada por la noche.',
      },
      {
        word: 'acostarse',
        translation: 'ложиться спать (o→ue: me acuesto, te acuestas…)',
        example: 'Me acuesto sobre las once.',
      },
      {
        word: 'sobre las once',
        translation: 'около одиннадцати — sobre + час даёт примерное время',
        example: 'Me acuesto sobre las once.',
      },
      {
        word: 'así que',
        translation: 'так что, поэтому (вводит следствие)',
        example: 'Estoy cansada, así que me acuesto pronto.',
      },
    ],
    questions: [
      {
        q: '¿Qué estudia Sofía?',
        options: ['Matemáticas', 'Medicina', 'Derecho'],
        correct: 1,
      },
      {
        q: '¿Cómo va a las clases?',
        options: ['En coche', 'En bicicleta', 'En autobús'],
        correct: 2,
      },
      {
        q: '¿A qué hora se acuesta?',
        options: ['A las nueve', 'Sobre las once', 'A las doce y media'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Возвратные глаголы в распорядке дня',
        note:
          'levantarse, ducharse, vestirse, acostarse — возвратные: действие направлено на себя. ' +
          'Местоимение всегда перед спрягаемым глаголом: me levanto, me ducho, me visto, me acuesto.',
      },
      {
        topic: 'Estar для физического и эмоционального состояния',
        note:
          'Усталость, голод, грусть, спокойствие — временные состояния, нужен estar: ' +
          'estoy cansada, estoy contenta, estoy tranquila. С ser получится черта характера, а не состояние.',
      },
    ],
  },

  {
    id: 'a1-013',
    level: 'A1',
    day: 13,
    title: 'Mi barrio de Madrid',
    text:
      'Madrid es mi ciudad. Es grande y bonita. ' +
      'En el centro hay plazas hermosas, museos y muchos bares. ' +
      'La Puerta del Sol está siempre llena de gente.\n\n' +
      'Mi barrio se llama Lavapiés. Está al sur del centro. ' +
      'Aquí hay tiendas pequeñas, cafeterías y un mercado tradicional. ' +
      'Los edificios son antiguos pero las calles son alegres. ' +
      'Por la noche, los vecinos hablan en la plaza.',
    vocabulary: [
      {
        word: 'la plaza',
        translation: 'площадь',
        example: 'En el centro hay plazas hermosas.',
      },
      {
        word: 'el museo',
        translation: 'музей',
        example: 'Hay museos en el centro.',
      },
      {
        word: 'el bar',
        translation: 'бар (в Испании — обычное кафе с кофе, тапасами и пивом)',
        example: 'Hay muchos bares en el centro.',
      },
      {
        word: 'la Puerta del Sol',
        translation: 'Пуэрта-дель-Соль — главная площадь Мадрида, «нулевой километр»',
        example: 'La Puerta del Sol está llena de gente.',
      },
      {
        word: 'lleno, -a (de)',
        translation: 'полный (чего-то); с estar — состояние',
        example: 'La plaza está llena de gente.',
      },
      {
        word: 'al sur de',
        translation: 'к югу от (al norte de, al este de, al oeste de)',
        example: 'Lavapiés está al sur del centro.',
      },
      {
        word: 'la cafetería',
        translation: 'кафе (где пьют кофе и едят выпечку; café более общий)',
        example: 'En el barrio hay cafeterías.',
      },
      {
        word: 'antiguo, -a',
        translation: 'старинный, древний (перед сущ. — «бывший»: el antiguo profesor)',
        example: 'Los edificios son antiguos.',
      },
      {
        word: 'alegre',
        translation: 'весёлый, радостный (одна форма для м. р. и ж. р.)',
        example: 'Las calles son alegres.',
      },
      {
        word: 'hermoso, -a',
        translation: 'красивый, прекрасный (более книжное, чем bonito)',
        example: 'plazas hermosas',
      },
    ],
    questions: [
      {
        q: '¿Cómo se llama el barrio del narrador?',
        options: ['Lavapiés', 'Salamanca', 'Chueca'],
        correct: 0,
      },
      {
        q: '¿Cómo está siempre la Puerta del Sol?',
        options: ['Vacía', 'Llena de gente', 'Cerrada'],
        correct: 1,
      },
      {
        q: '¿Cómo son los edificios del barrio?',
        options: ['Modernos', 'Antiguos', 'Bajos'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Hay vs está / están',
        note:
          'hay сообщает о существовании чего-то нового, чаще с неопределённым: «hay plazas, hay tiendas». ' +
          'está / están локализуют уже известный объект: «la Puerta del Sol está en el centro», «Lavapiés está al sur».',
      },
      {
        topic: 'Ser для постоянных характеристик города',
        note:
          'Города и районы описываем с ser: «Madrid es grande», «las calles son alegres», «los edificios son antiguos». ' +
          'Estar — для временного состояния: «la plaza está llena hoy».',
      },
    ],
  },

  {
    id: 'a1-014',
    level: 'A1',
    day: 14,
    title: 'Las cuatro estaciones',
    text:
      'En España hay cuatro estaciones muy diferentes. ' +
      'En primavera el cielo está azul y los parques están llenos de flores. Hace buen tiempo.\n\n' +
      'En verano hace mucho calor, especialmente en Sevilla. La gente come helado y bebe agua fría. ' +
      'En otoño llueve a menudo y las hojas están amarillas y rojas. ' +
      'En invierno hace frío en el norte; en el sur el tiempo es suave.',
    vocabulary: [
      {
        word: 'la estación',
        translation: 'время года; также «вокзал, станция»',
        example: 'En España hay cuatro estaciones.',
      },
      {
        word: 'la primavera',
        translation: 'весна',
        example: 'En primavera hace buen tiempo.',
      },
      {
        word: 'el verano',
        translation: 'лето',
        example: 'En verano hace calor.',
      },
      {
        word: 'el otoño',
        translation: 'осень',
        example: 'En otoño llueve a menudo.',
      },
      {
        word: 'el invierno',
        translation: 'зима',
        example: 'En invierno hace frío.',
      },
      {
        word: 'hace buen / mal tiempo',
        translation: 'хорошая / плохая погода (о погоде — глагол hacer + сущ.)',
        example: 'En primavera hace buen tiempo.',
      },
      {
        word: 'hace calor / hace frío',
        translation: 'жарко / холодно (буквально «делает жару / холод»)',
        example: 'En verano hace mucho calor.',
      },
      {
        word: 'el helado',
        translation: 'мороженое',
        example: 'La gente come helado.',
      },
      {
        word: 'llover',
        translation: 'идти дождю — безличный, только 3-е лицо ед. ч. (llueve)',
        example: 'En otoño llueve a menudo.',
      },
      {
        word: 'a menudo',
        translation: 'часто (синоним con frecuencia)',
        example: 'Llueve a menudo.',
      },
      {
        word: 'la hoja',
        translation: 'лист (дерева; также лист бумаги)',
        example: 'Las hojas están amarillas.',
      },
      {
        word: 'suave',
        translation: 'мягкий, нежный; о погоде — умеренный, тёплый',
        example: 'En el sur el tiempo es suave.',
      },
    ],
    questions: [
      {
        q: '¿Dónde hace mucho calor en verano?',
        options: ['En Bilbao', 'En Sevilla', 'En Santiago'],
        correct: 1,
      },
      {
        q: '¿Cuándo llueve a menudo?',
        options: ['En primavera', 'En verano', 'En otoño'],
        correct: 2,
      },
      {
        q: '¿Cómo es el invierno en el sur de España?',
        options: ['Muy frío', 'Suave', 'Nevado'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Погода: hacer + сущ. vs estar + прил.',
        note:
          'Для погоды: hace calor, hace frío, hace sol, hace viento, hace buen/mal tiempo. ' +
          'Состояние неба — estar + прил.: el cielo está gris, está nublado, está despejado.',
      },
      {
        topic: 'Безличные глаголы природы',
        note:
          'llover, nevar, granizar спрягаются только в 3-м лице ед. ч.: llueve, nieva, graniza. ' +
          'Подлежащего нет, потому что это явление природы, а не действие конкретного субъекта.',
      },
      {
        topic: 'Estar для временного цвета',
        note:
          'Когда цвет — временное состояние, ставим estar: «las hojas están amarillas» (только осенью). ' +
          'Постоянный, присущий цвет — с ser: «la nieve es blanca», «el limón es amarillo».',
      },
    ],
  },

  {
    id: 'a1-015',
    level: 'A1',
    day: 15,
    title: 'Tres amigos, tres profesiones',
    text:
      'Tengo tres amigos con profesiones muy distintas. ' +
      'Pablo es camarero en un bar de Madrid. Trabaja por las tardes y los fines de semana. Es simpático y rápido.\n\n' +
      'Lucía es médica en un hospital de Valencia. Lleva una bata blanca y un fonendoscopio. Está cansada pero contenta. ' +
      'Mi amigo Andrés es informático: trabaja con ordenadores en una oficina pequeña. Habla poco, pero es muy listo.',
    vocabulary: [
      {
        word: 'la profesión',
        translation: 'профессия (мн. ч. — profesiones, без графического акцента)',
        example: 'profesiones muy distintas',
      },
      {
        word: 'distinto, -a',
        translation: 'разный, иной (синоним diferente)',
        example: 'tres profesiones muy distintas',
      },
      {
        word: 'el camarero / la camarera',
        translation: 'официант / официантка; в Испании — также бармен в баре',
        example: 'Pablo es camarero en un bar.',
      },
      {
        word: 'el fin de semana',
        translation: 'выходные; мн. ч. — los fines de semana',
        example: 'Trabaja los fines de semana.',
      },
      {
        word: 'el médico / la médica',
        translation: 'врач (форма la médica современна; раньше — la médico)',
        example: 'Lucía es médica.',
      },
      {
        word: 'la bata',
        translation: 'халат (медицинский, рабочий; также домашний)',
        example: 'Lleva una bata blanca.',
      },
      {
        word: 'el fonendoscopio',
        translation: 'фонендоскоп (стетоскоп врача)',
        example: 'Lleva un fonendoscopio.',
      },
      {
        word: 'contento, -a',
        translation: 'довольный (с estar — в хорошем настроении)',
        example: 'Está cansada pero contenta.',
      },
      {
        word: 'el informático / la informática',
        translation: 'программист, IT-специалист',
        example: 'Andrés es informático.',
      },
      {
        word: 'el ordenador',
        translation: 'компьютер (кастильское; в Лат. Ам. — la computadora)',
        example: 'Trabaja con ordenadores.',
      },
      {
        word: 'la oficina',
        translation: 'офис',
        example: 'Trabaja en una oficina pequeña.',
      },
      {
        word: 'listo, -a',
        translation: 'ser listo — умный; estar listo — готов (классический контраст)',
        example: 'Andrés es muy listo.',
      },
    ],
    questions: [
      {
        q: '¿Cuál es la profesión de Pablo?',
        options: ['Médico', 'Camarero', 'Informático'],
        correct: 1,
      },
      {
        q: '¿Dónde trabaja Lucía?',
        options: ['En una oficina', 'En un bar', 'En un hospital'],
        correct: 2,
      },
      {
        q: '¿Con qué trabaja Andrés?',
        options: ['Con ordenadores', 'Con coches', 'Con dinero'],
        correct: 0,
      },
    ],
    grammar_notes: [
      {
        topic: 'Ser + профессия (без артикля)',
        note:
          'После ser профессия идёт без артикля: «soy profesor», «es camarero», «son médicos». ' +
          'Артикль возвращается, когда есть прилагательное: «es una médica excelente», «es un camarero rápido».',
      },
      {
        topic: 'Ser listo vs estar listo',
        note:
          'Es listo — «он умный, сообразительный» (черта характера). ' +
          'Está listo — «он готов» (к выходу, к экзамену). Аналогично: es aburrido (скучный) ≠ está aburrido (ему скучно).',
      },
    ],
  },

  {
    id: 'a1-016',
    level: 'A1',
    day: 16,
    title: 'Los sábados',
    text:
      'Los sábados son muy diferentes. ' +
      'No me levanto temprano: duermo hasta las diez. ' +
      'Me ducho con calma y desayuno fruta con yogur.\n\n' +
      'Mi marido se queda en el sofá un rato. ' +
      'Después salimos a pasear por el parque del Retiro. Comemos en una terraza tranquila. ' +
      'Por la tarde leemos o vemos una película. No miramos el reloj. ' +
      'Los sábados estoy relajada y feliz.',
    vocabulary: [
      {
        word: 'temprano',
        translation: 'рано (антоним — tarde)',
        example: 'No me levanto temprano.',
      },
      {
        word: 'con calma',
        translation: 'спокойно, не торопясь',
        example: 'Me ducho con calma.',
      },
      {
        word: 'el yogur',
        translation: 'йогурт',
        example: 'Desayuno fruta con yogur.',
      },
      {
        word: 'mi marido / mi mujer',
        translation: 'мой муж / моя жена (кастильское; в Лат. Ам. — esposo / esposa)',
        example: 'Mi marido se queda en el sofá.',
      },
      {
        word: 'quedarse',
        translation: 'оставаться (где-то) — возвратный',
        example: 'Mi marido se queda en casa.',
      },
      {
        word: 'pasear',
        translation: 'гулять, прогуливаться (el paseo — прогулка)',
        example: 'Salimos a pasear por el parque.',
      },
      {
        word: 'el parque del Retiro',
        translation: 'Парк Ретиро — главный парк в центре Мадрида',
        example: 'Paseamos por el parque del Retiro.',
      },
      {
        word: 'la terraza',
        translation: 'терраса (уличная часть кафе или бара со столиками)',
        example: 'Comemos en una terraza tranquila.',
      },
      {
        word: 'la película',
        translation: 'фильм',
        example: 'Vemos una película.',
      },
      {
        word: 'relajado, -a',
        translation: 'расслабленный, спокойный (с estar — временное состояние)',
        example: 'Estoy relajada y feliz.',
      },
    ],
    questions: [
      {
        q: '¿Hasta qué hora duerme la narradora los sábados?',
        options: ['Hasta las nueve', 'Hasta las diez', 'Hasta las once'],
        correct: 1,
      },
      {
        q: '¿Dónde pasean por la mañana?',
        options: ['Por la playa', 'Por el parque del Retiro', 'Por la sierra'],
        correct: 1,
      },
      {
        q: '¿Cómo se siente los sábados?',
        options: ['Cansada y triste', 'Relajada y feliz', 'Aburrida'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Quedarse vs quedar',
        note:
          'quedarse (возвратный) — «оставаться где-то»: me quedo en casa, se queda en el sofá. ' +
          'quedar (без se) — «договариваться о встрече»: quedo con María a las cinco; либо «оставаться (в количестве)»: queda poco tiempo.',
      },
      {
        topic: 'Ser feliz vs estar feliz',
        note:
          'ser feliz — «быть счастливым в жизни» (общая характеристика). ' +
          'estar feliz — «быть в хорошем настроении сейчас, в данный момент». В тексте estoy feliz по субботам — про конкретные дни.',
      },
    ],
  },

  {
    id: 'a1-017',
    level: 'A1',
    day: 17,
    title: 'El metro y el Retiro',
    text:
      'Madrid tiene un metro muy bueno. Hay doce líneas y muchas estaciones. ' +
      'La estación de Sol está justo en el centro. ' +
      'Allí hay turistas, músicos y vendedores de helado.\n\n' +
      'Cerca del Retiro hay un quiosco de prensa donde compro el periódico. ' +
      'El parque es enorme y verde. Tiene un lago con barcas. ' +
      'Mucha gente corre por los caminos o pasea con sus perros.',
    vocabulary: [
      {
        word: 'el metro',
        translation: 'метро (мадридское — одно из крупнейших в Европе)',
        example: 'Madrid tiene un metro muy bueno.',
      },
      {
        word: 'la línea',
        translation: 'линия (метро или транспорта вообще)',
        example: 'Hay doce líneas.',
      },
      {
        word: 'el vendedor / la vendedora',
        translation: 'продавец / продавщица (особенно уличный, в киоске)',
        example: 'vendedores de helado',
      },
      {
        word: 'el quiosco',
        translation: 'киоск (газетный или с напитками)',
        example: 'un quiosco de prensa',
      },
      {
        word: 'la prensa',
        translation: 'пресса — газеты и журналы вместе',
        example: 'un quiosco de prensa',
      },
      {
        word: 'el periódico',
        translation: 'газета',
        example: 'Compro el periódico cada día.',
      },
      {
        word: 'enorme',
        translation: 'огромный (одна форма для м. р. и ж. р.)',
        example: 'El parque es enorme.',
      },
      {
        word: 'el lago',
        translation: 'озеро (в Ретиро есть знаменитый небольшой пруд с лодками)',
        example: 'El parque tiene un lago.',
      },
      {
        word: 'la barca',
        translation: 'лодка (гребная); el barco — большой корабль',
        example: 'un lago con barcas',
      },
      {
        word: 'el camino',
        translation: 'дорожка, тропа; путь',
        example: 'La gente corre por los caminos.',
      },
    ],
    questions: [
      {
        q: '¿Cuántas líneas tiene el metro según el texto?',
        options: ['Diez', 'Doce', 'Catorce'],
        correct: 1,
      },
      {
        q: '¿Qué compra el narrador en el quiosco?',
        options: ['Un helado', 'Flores', 'El periódico'],
        correct: 2,
      },
      {
        q: '¿Qué hay en el lago del Retiro?',
        options: ['Patos', 'Barcas', 'Peces'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Hay vs está — расширение',
        note:
          'Новое в пространстве — hay: «hay doce líneas», «hay un quiosco», «hay turistas». ' +
          'Известный, конкретный объект — está / están: «la estación de Sol está en el centro». ' +
          'После hay чаще идёт неопределённый артикль или его отсутствие, после está — определённый.',
      },
      {
        topic: 'Глаголы движения с por',
        note:
          'por означает «через / по»: pasear por el parque, correr por los caminos, viajar por España. ' +
          'Это движение «по поверхности, внутри пространства», а не от точки A к точке B (для этого — de … a …).',
      },
    ],
  },

  {
    id: 'a1-018',
    level: 'A1',
    day: 18,
    title: 'Día de lluvia en Bilbao',
    text:
      'Hoy hace mal tiempo en Bilbao. El cielo está gris y llueve sin parar desde las ocho. ' +
      'Hace mucho viento y la temperatura es baja.\n\n' +
      'Por eso, no salimos a la playa. Nos quedamos en casa. ' +
      'Mi marido prepara chocolate caliente y yo busco una película. ' +
      'También leo un libro sobre Galicia. Mañana, si hace sol, vamos al monte. ' +
      'Pero hoy estamos tranquilos y calientes en el sofá.',
    vocabulary: [
      {
        word: 'sin parar',
        translation: 'без перерыва, не переставая',
        example: 'Llueve sin parar desde las ocho.',
      },
      {
        word: 'hace viento',
        translation: 'ветрено (el viento — ветер)',
        example: 'Hace mucho viento.',
      },
      {
        word: 'hace sol',
        translation: 'солнечно (el sol — солнце)',
        example: 'Si hace sol, vamos al monte.',
      },
      {
        word: 'la temperatura',
        translation: 'температура',
        example: 'La temperatura es baja.',
      },
      {
        word: 'por eso',
        translation: 'поэтому, по этой причине (вводит следствие)',
        example: 'Llueve. Por eso no salimos.',
      },
      {
        word: 'la playa',
        translation: 'пляж (Бильбао — на берегу Кантабрийского моря)',
        example: 'No salimos a la playa.',
      },
      {
        word: 'el chocolate caliente',
        translation: 'горячий шоколад — густой испанский напиток, часто с чуррос',
        example: 'Mi marido prepara chocolate caliente.',
      },
      {
        word: 'buscar',
        translation: 'искать (без предлога: busco una película, не *busco para…)',
        example: 'Busco una película.',
      },
      {
        word: 'el monte',
        translation: 'гора, лесистая возвышенность; ir al monte — выбраться в лес/в горы',
        example: 'Vamos al monte.',
      },
      {
        word: 'Galicia',
        translation: 'Галисия — зелёный регион на северо-западе Испании',
        example: 'Leo un libro sobre Galicia.',
      },
    ],
    questions: [
      {
        q: '¿Cómo está el cielo hoy?',
        options: ['Azul', 'Gris', 'Despejado'],
        correct: 1,
      },
      {
        q: '¿Por qué no salen a la playa?',
        options: ['Hace mucho calor', 'Llueve y hace viento', 'Es muy tarde'],
        correct: 1,
      },
      {
        q: '¿Qué prepara el marido?',
        options: ['Chocolate caliente', 'Café', 'Sopa'],
        correct: 0,
      },
    ],
    grammar_notes: [
      {
        topic: 'Погода: hacer + сущ., estar + прил., llover',
        note:
          'hace + сущ.: hace frío, hace calor, hace sol, hace viento, hace buen/mal tiempo. ' +
          'estar + прил. — о состоянии неба: el cielo está gris, está nublado, está despejado. ' +
          'llover, nevar — безличные, только 3-е лицо ед. ч.: llueve, nieva.',
      },
      {
        topic: 'Porque vs por eso',
        note:
          'porque вводит причину: «no salimos porque llueve». ' +
          'por eso — связка перед следствием: «llueve, por eso no salimos». ' +
          'Грамматически: porque + подлежащее + сказуемое; por eso — самостоятельная связка между предложениями.',
      },
    ],
  },

  {
    id: 'a1-019',
    level: 'A1',
    day: 19,
    title: 'Profesiones en la familia',
    text:
      'En mi familia hay profesiones muy diferentes. ' +
      'Mi padre es mecánico. Trabaja en un taller cerca de casa y siempre tiene las manos sucias.\n\n' +
      'Mi tía Marta es abogada en un despacho del centro. Es elegante y muy seria en el trabajo. ' +
      'Mi primo Daniel es panadero. Se levanta a las cuatro de la madrugada para hacer pan fresco. ' +
      'Vende también pasteles los domingos. Todos están contentos con su trabajo.',
    vocabulary: [
      {
        word: 'el mecánico / la mecánica',
        translation: 'автомеханик',
        example: 'Mi padre es mecánico.',
      },
      {
        word: 'el taller',
        translation: 'мастерская, автосервис',
        example: 'Trabaja en un taller.',
      },
      {
        word: 'sucio, -a',
        translation: 'грязный (антоним — limpio)',
        example: 'Tiene las manos sucias.',
      },
      {
        word: 'el abogado / la abogada',
        translation: 'юрист, адвокат',
        example: 'Mi tía es abogada.',
      },
      {
        word: 'el despacho',
        translation: 'кабинет; адвокатская / нотариальная контора',
        example: 'Trabaja en un despacho del centro.',
      },
      {
        word: 'elegante',
        translation: 'элегантный (одна форма для м. р. и ж. р.)',
        example: 'Mi tía es elegante.',
      },
      {
        word: 'serio, -a',
        translation: 'серьёзный',
        example: 'Es muy seria en el trabajo.',
      },
      {
        word: 'el panadero / la panadera',
        translation: 'пекарь (la panadería — булочная)',
        example: 'Mi primo es panadero.',
      },
      {
        word: 'la madrugada',
        translation: 'раннее утро, ещё затемно (примерно 3–6 утра)',
        example: 'Se levanta a las cuatro de la madrugada.',
      },
      {
        word: 'fresco, -a',
        translation: 'свежий (pan fresco — свежий хлеб; agua fresca — прохладная вода)',
        example: 'pan fresco',
      },
      {
        word: 'vender',
        translation: 'продавать (антоним — comprar)',
        example: 'Vende pasteles los domingos.',
      },
      {
        word: 'el pastel',
        translation: 'пирожное, торт (la pastelería — кондитерская)',
        example: 'Vende pasteles.',
      },
    ],
    questions: [
      {
        q: '¿Cuál es la profesión del padre?',
        options: ['Mecánico', 'Abogado', 'Panadero'],
        correct: 0,
      },
      {
        q: '¿A qué hora se levanta Daniel?',
        options: ['A las seis', 'A las cinco', 'A las cuatro'],
        correct: 2,
      },
      {
        q: '¿Cómo está la familia con su trabajo?',
        options: ['Cansada', 'Contenta', 'Aburrida'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Para + infinitivo (цель)',
        note:
          'para + инфинитив выражает цель: «se levanta para hacer pan» = «встаёт, чтобы делать хлеб». ' +
          'После para — всегда инфинитив, если подлежащее не меняется.',
      },
      {
        topic: 'Ser elegante / estar elegante',
        note:
          'ser elegante — постоянная черта: «mi tía es elegante» (всегда). ' +
          'estar elegante — временный вид: «hoy estás muy elegante» (сегодня выглядишь элегантно). ' +
          'Тот же контраст с serio: es serio (характер) ≠ está serio (сейчас хмурится).',
      },
    ],
  },

  {
    id: 'a1-020',
    level: 'A1',
    day: 20,
    title: 'Una mañana en el barrio',
    text:
      'Es martes por la mañana en mi barrio de Valencia. ' +
      'El sol brilla y la plaza está llena de actividad. ' +
      'Don Manuel abre su panadería a las siete. Doña Lucía pasea con su perro pequeño.\n\n' +
      'Los niños van al colegio con sus mochilas pesadas. ' +
      'En el bar, dos señores leen el periódico y toman café. ' +
      'Yo voy al trabajo a pie. Es solo un cuarto de hora. ' +
      'La vida del barrio es tranquila y alegre.',
    vocabulary: [
      {
        word: 'brillar',
        translation: 'светить, сиять',
        example: 'El sol brilla.',
      },
      {
        word: 'la panadería',
        translation: 'булочная, пекарня',
        example: 'Don Manuel abre su panadería.',
      },
      {
        word: 'el colegio',
        translation: 'школа (начальная и средняя в Испании)',
        example: 'Los niños van al colegio.',
      },
      {
        word: 'la mochila',
        translation: 'рюкзак',
        example: 'mochilas pesadas',
      },
      {
        word: 'pesado, -a',
        translation: 'тяжёлый; о человеке — занудный, утомительный',
        example: 'mochilas pesadas',
      },
      {
        word: 'a pie',
        translation: 'пешком (ir a pie — идти пешком)',
        example: 'Voy al trabajo a pie.',
      },
      {
        word: 'un cuarto de hora',
        translation: 'четверть часа, 15 минут; media hora — полчаса',
        example: 'Es solo un cuarto de hora.',
      },
      {
        word: 'la vida',
        translation: 'жизнь',
        example: 'La vida del barrio es tranquila.',
      },
      {
        word: 'abrir',
        translation: 'открывать (антоним — cerrar)',
        example: 'Abre la panadería a las siete.',
      },
      {
        word: 'tomar (café, té)',
        translation: 'пить (кофе / чай) — в Испании tomar заменяет beber для напитков',
        example: 'Toman café en el bar.',
      },
    ],
    questions: [
      {
        q: '¿En qué ciudad pasa la escena?',
        options: ['Madrid', 'Sevilla', 'Valencia'],
        correct: 2,
      },
      {
        q: '¿Cómo va el narrador al trabajo?',
        options: ['En coche', 'A pie', 'En metro'],
        correct: 1,
      },
      {
        q: '¿Qué hacen los señores en el bar?',
        options: ['Comen', 'Leen y toman café', 'Trabajan'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Ir + a + место (направление)',
        note:
          'ir + a + lugar: voy al trabajo, van al colegio, vamos al parque. ' +
          'Спряжение ir: voy, vas, va, vamos, vais, van. ' +
          'Это движение к месту — не путать с «ir a + инфинитив» (ближайшее будущее, отдельная конструкция).',
      },
      {
        topic: 'Время: cuartos и media',
        note:
          'un cuarto de hora = 15 минут; media hora = 30 минут; tres cuartos de hora = 45 минут. ' +
          'Для времени суток: son las tres y cuarto (3:15), son las tres y media (3:30), son las cuatro menos cuarto (3:45).',
      },
    ],
  },

  {
    id: 'a1-021',
    level: 'A1',
    day: 21,
    title: 'Una mañana en el mercado',
    text:
      'Esta mañana he ido al mercado de la Boquería con mi amiga Marta. ' +
      'Hemos comprado fruta, queso manchego y pan recién hecho. ' +
      'Marta ha probado un trozo de jamón ibérico y dice que está buenísimo.\n\n' +
      'Después hemos entrado en una tienda pequeña porque queremos un regalo para mi hermana. ' +
      'La dependienta es muy amable y nos ha enseñado pañuelos de seda. ' +
      'He elegido uno azul con flores blancas.\n\n' +
      '—¿Cuánto cuesta? —pregunto.\n' +
      '—Dieciocho euros —responde ella.\n\n' +
      'Es un poco caro, pero es bonito. Mañana voy a llamar a mi hermana para felicitarla. ' +
      '¡Va a cumplir treinta años!',
    vocabulary: [
      {
        word: 'el mercado',
        translation: 'рынок (la Boquería — знаменитый крытый рынок в Барселоне)',
        example: 'He ido al mercado de la Boquería.',
      },
      {
        word: 'el jamón ibérico',
        translation: 'иберийский хамон — вяленый окорок из чёрных свиней',
        example: 'Ha probado un trozo de jamón ibérico.',
      },
      {
        word: 'el queso manchego',
        translation: 'манчего — твёрдый овечий сыр из Ла-Манчи',
        example: 'Hemos comprado queso manchego.',
      },
      {
        word: 'recién hecho',
        translation: 'только что приготовленный, свежеиспечённый',
        example: 'pan recién hecho',
      },
      {
        word: 'probar',
        translation: 'пробовать (на вкус); примерять',
        example: 'Marta ha probado un trozo de jamón.',
      },
      {
        word: 'el regalo',
        translation: 'подарок',
        example: 'Queremos un regalo para mi hermana.',
      },
      {
        word: 'la dependienta / el dependiente',
        translation: 'продавщица / продавец в магазине',
        example: 'La dependienta es muy amable.',
      },
      {
        word: 'el pañuelo',
        translation: 'платок (носовой или шейный)',
        example: 'Nos ha enseñado pañuelos de seda.',
      },
      {
        word: 'la seda',
        translation: 'шёлк',
        example: 'pañuelos de seda',
      },
      {
        word: 'elegir',
        translation: 'выбирать (e→i: elijo, eliges, elige…)',
        example: 'He elegido uno azul.',
      },
      {
        word: 'caro / barato',
        translation: 'дорогой / дешёвый',
        example: 'Es un poco caro, pero es bonito.',
      },
      {
        word: 'cumplir años',
        translation: 'отмечать день рождения; «исполняться» (о возрасте)',
        example: 'Va a cumplir treinta años.',
      },
    ],
    questions: [
      {
        q: '¿Adónde han ido por la mañana?',
        options: ['A un restaurante', 'Al mercado', 'Al parque'],
        correct: 1,
      },
      {
        q: '¿Por qué entran en la tienda pequeña?',
        options: ['Para comer', 'Para comprar un regalo', 'Para preguntar la hora'],
        correct: 1,
      },
      {
        q: '¿Cuántos años va a cumplir la hermana?',
        options: ['Dieciocho', 'Veinte', 'Treinta'],
        correct: 2,
      },
    ],
    grammar_notes: [
      {
        topic: 'Pretérito Perfecto',
        note:
          'Конструкция haber (в Presente) + participio: he ido, hemos comprado, ha probado, ha enseñado. ' +
          'Употребляется для недавних или связанных с настоящим действий — часто с маркерами hoy, esta mañana, ya.',
      },
      {
        topic: 'Ir a + infinitivo (ближайшее будущее)',
        note:
          'voy a llamar — «я собираюсь позвонить»; va a cumplir — «ей исполнится». ' +
          'Спрягается ir в Presente + a + инфинитив. Аналог английского «going to».',
      },
      {
        topic: 'Простые придаточные с que / porque',
        note:
          'que вводит дополнительное придаточное: dice que está buenísimo. ' +
          'porque объясняет причину: hemos entrado porque queremos un regalo.',
      },
    ],
  },

  {
    id: 'a1-022',
    level: 'A1',
    day: 22,
    title: 'Un fin de semana en Granada',
    text:
      'Este fin de semana hemos estado en Granada con mi mujer. ' +
      'Hemos visitado la Alhambra y los jardines del Generalife. ¡Qué maravilla! ' +
      'Las vistas desde la torre son increíbles.\n\n' +
      'El sábado por la noche hemos cenado en un pequeño restaurante del Albaicín. ' +
      'Hemos pedido berenjenas con miel y un plato de pescado. ' +
      'La cena ha costado treinta euros para dos personas. No es nada caro.\n\n' +
      'Hoy es domingo y estamos cansados pero contentos. ' +
      'Por la tarde vamos a tomar un café en una terraza con vistas a la Alhambra ' +
      'y luego vamos a volver a casa en tren.',
    vocabulary: [
      {
        word: 'la Alhambra',
        translation: 'Альгамбра — мавританский дворцово-крепостной комплекс в Гранаде',
        example: 'Hemos visitado la Alhambra.',
      },
      {
        word: 'el Generalife',
        translation: 'Хенералифе — летняя резиденция и сады рядом с Альгамброй',
        example: 'los jardines del Generalife',
      },
      {
        word: 'el Albaicín',
        translation: 'Альбайсин — старый мавританский квартал Гранады',
        example: 'un pequeño restaurante del Albaicín',
      },
      {
        word: '¡Qué maravilla!',
        translation: 'какое чудо! — восклицание восторга',
        example: '¡Qué maravilla las vistas!',
      },
      {
        word: 'la vista',
        translation: 'вид (из окна, с высоты); зрение',
        example: 'Las vistas desde la torre son increíbles.',
      },
      {
        word: 'la torre',
        translation: 'башня',
        example: 'desde la torre',
      },
      {
        word: 'pedir',
        translation: 'просить; заказывать (в ресторане). e→i: pido, pides, pide…',
        example: 'Hemos pedido berenjenas con miel.',
      },
      {
        word: 'las berenjenas con miel',
        translation: 'баклажаны с мёдом — типичное андалусийское блюдо',
        example: 'Hemos pedido berenjenas con miel.',
      },
      {
        word: 'el plato',
        translation: 'тарелка; блюдо (как порция); основное блюдо',
        example: 'un plato de pescado',
      },
      {
        word: 'la cena',
        translation: 'ужин (cenar — ужинать)',
        example: 'La cena ha costado treinta euros.',
      },
      {
        word: 'volver',
        translation: 'возвращаться (o→ue: vuelvo, vuelves, vuelve…). Pretérito Perfecto: he vuelto',
        example: 'Vamos a volver a casa en tren.',
      },
      {
        word: 'el tren',
        translation: 'поезд (ir en tren — ехать на поезде)',
        example: 'volver a casa en tren',
      },
    ],
    questions: [
      {
        q: '¿Dónde han pasado el fin de semana?',
        options: ['En Sevilla', 'En Granada', 'En Madrid'],
        correct: 1,
      },
      {
        q: '¿Qué han pedido para cenar?',
        options: ['Paella valenciana', 'Berenjenas con miel y pescado', 'Tortilla y ensalada'],
        correct: 1,
      },
      {
        q: '¿Cómo van a volver a casa?',
        options: ['En coche', 'En tren', 'En avión'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Pretérito Perfecto: законченные «выходные»',
        note:
          'Этим временем удобно описывать целый отрезок, ещё «не закрытый» в речи: este fin de semana, esta mañana, hoy, esta tarde. ' +
          'Формы: hemos estado, hemos visitado, hemos cenado, hemos pedido — haber + причастие.',
      },
      {
        topic: 'Ir a + infinitivo для планов',
        note:
          'vamos a tomar, vamos a volver — ближайшие планы на «потом сегодня». ' +
          'ir в Presente (voy, vas, va, vamos, vais, van) + a + инфинитив.',
      },
    ],
  },

  {
    id: 'a1-023',
    level: 'A1',
    day: 23,
    title: 'En la tienda de ropa',
    text:
      'He entrado en una tienda del centro porque quiero comprar una chaqueta nueva. ' +
      'La dependienta me ha enseñado varias.\n\n' +
      '—Buenos días, ¿qué talla usa? —pregunta ella.\n' +
      '—La cuarenta —respondo.\n' +
      '—Esta chaqueta gris es muy bonita. ¿Quiere probársela?\n' +
      '—Sí, por favor.\n\n' +
      'He entrado en el probador. La chaqueta me queda bien, pero no me gusta el color. ' +
      'He pedido la misma en azul. Me queda perfecta.\n\n' +
      '—¿Cuánto cuesta? —pregunto.\n' +
      '—Sesenta y cinco euros —responde la dependienta.\n\n' +
      'Es un poco cara, pero la calidad es buena. La he pagado con tarjeta. ' +
      'Ahora voy a llevarla a la boda de mi prima el sábado.',
    vocabulary: [
      {
        word: 'la chaqueta',
        translation: 'куртка; пиджак',
        example: 'Quiero comprar una chaqueta nueva.',
      },
      {
        word: 'la talla',
        translation: 'размер одежды (для обуви — el número)',
        example: '¿Qué talla usa?',
      },
      {
        word: 'usar (una talla)',
        translation: 'носить (определённый размер); пользоваться, употреблять',
        example: 'Uso la talla cuarenta.',
      },
      {
        word: 'el probador',
        translation: 'примерочная',
        example: 'He entrado en el probador.',
      },
      {
        word: 'probarse',
        translation: 'примерять (одежду; возвратная форма от probar)',
        example: '¿Quiere probársela?',
      },
      {
        word: 'quedar bien / mal',
        translation: 'идти, быть к лицу; сидеть на фигуре. La chaqueta me queda bien — куртка мне идёт',
        example: 'La chaqueta me queda bien.',
      },
      {
        word: 'gris',
        translation: 'серый (одна форма для м.р. и ж.р.)',
        example: 'una chaqueta gris',
      },
      {
        word: 'el color',
        translation: 'цвет',
        example: 'No me gusta el color.',
      },
      {
        word: 'la calidad',
        translation: 'качество',
        example: 'La calidad es buena.',
      },
      {
        word: 'pagar',
        translation: 'платить (pagar con tarjeta / en efectivo — оплачивать картой / наличными)',
        example: 'La he pagado con tarjeta.',
      },
      {
        word: 'la tarjeta',
        translation: 'карта (банковская, визитная, поздравительная)',
        example: 'pagar con tarjeta',
      },
      {
        word: 'la boda',
        translation: 'свадьба',
        example: 'la boda de mi prima',
      },
    ],
    questions: [
      {
        q: '¿Qué talla usa el cliente?',
        options: ['La 38', 'La 40', 'La 42'],
        correct: 1,
      },
      {
        q: '¿Por qué no compra la chaqueta gris?',
        options: ['Es demasiado cara', 'No le queda bien', 'No le gusta el color'],
        correct: 2,
      },
      {
        q: '¿Cómo paga la chaqueta?',
        options: ['En efectivo', 'Con tarjeta', 'Con cheque'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Pretérito Perfecto + безударные местоимения',
        note:
          'Местоимение (lo, la, le, me, te, nos, os, se) ставится ПЕРЕД haber: la he pagado, me ha enseñado, no me ha gustado. ' +
          'Между местоимением и haber ничего не вставляют.',
      },
      {
        topic: 'Quedar bien / mal: идиома про одежду',
        note:
          '«Me queda bien» = «(одежда) мне идёт / сидит хорошо», «me queda grande / pequeño» = «велика / мала». ' +
          'Глагол quedar спрягается по подлежащему-вещи: «la chaqueta me queda bien», «los zapatos me quedan grandes».',
      },
    ],
  },

  {
    id: 'a1-024',
    level: 'A1',
    day: 24,
    title: 'En el bar de la esquina',
    text:
      'Hoy hemos entrado en el bar de la esquina, cerca de la oficina. ' +
      'Hace frío en la calle y queremos algo caliente. ' +
      'El camarero nos saluda y nos da la carta.\n\n' +
      '—Hola, ¿qué vais a tomar?\n' +
      '—Yo quiero un café con leche y un bocadillo de jamón —dice Carlos.\n' +
      '—Para mí, un té y una tostada con mantequilla, por favor —digo yo.\n\n' +
      'El camarero ha vuelto en cinco minutos con todo. ' +
      'El bocadillo de Carlos es enorme. ' +
      'Yo he comido despacio porque la tostada está muy caliente.\n\n' +
      '—¿Algo más? —pregunta él.\n' +
      '—La cuenta, por favor.\n\n' +
      'Hemos pagado catorce euros. Vamos a volver mañana.',
    vocabulary: [
      {
        word: 'la esquina',
        translation: 'угол улицы (en la esquina — на углу)',
        example: 'el bar de la esquina',
      },
      {
        word: 'la carta',
        translation: 'меню в ресторане; письмо. Дежурное блюдо дня — el menú del día',
        example: 'El camarero nos da la carta.',
      },
      {
        word: 'el bocadillo',
        translation: 'багет с начинкой (испанский «сэндвич» из батона). Не путать с bocata (разг.)',
        example: 'un bocadillo de jamón',
      },
      {
        word: 'la mantequilla',
        translation: 'сливочное масло',
        example: 'una tostada con mantequilla',
      },
      {
        word: 'el té',
        translation: 'чай',
        example: 'Para mí, un té.',
      },
      {
        word: 'para mí',
        translation: 'мне (при заказе): «para mí, un café» = «мне кофе»',
        example: 'Para mí, un té.',
      },
      {
        word: '¿qué vais a tomar?',
        translation: 'что вы будете (что закажете)? — стандартная фраза официанта',
        example: '¿Qué vais a tomar?',
      },
      {
        word: 'el minuto',
        translation: 'минута',
        example: 'en cinco minutos',
      },
      {
        word: 'despacio',
        translation: 'медленно (антоним — rápido)',
        example: 'He comido despacio.',
      },
      {
        word: '¿algo más?',
        translation: 'что-нибудь ещё? — типичная фраза в баре или магазине',
        example: '—¿Algo más? —La cuenta, por favor.',
      },
      {
        word: 'la cuenta',
        translation: 'счёт (в кафе); счёт в банке',
        example: 'La cuenta, por favor.',
      },
    ],
    questions: [
      {
        q: '¿Qué tiempo hace en la calle?',
        options: ['Hace calor', 'Hace frío', 'Llueve'],
        correct: 1,
      },
      {
        q: '¿Qué pide el narrador?',
        options: ['Café y bocadillo', 'Té y tostada', 'Zumo y croissant'],
        correct: 1,
      },
      {
        q: '¿Cuánto han pagado?',
        options: ['Cuatro euros', 'Catorce euros', 'Cuarenta euros'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Заказ в баре: tomar, querer, para mí',
        note:
          'В Испании при заказе «есть/пить» говорят tomar, не beber/comer: ¿qué vas a tomar? — yo tomo / quiero / para mí…  ' +
          '«Para mí, un café» — компактная разговорная форма заказа, без глагола.',
      },
      {
        topic: 'Pretérito Perfecto с маркером hoy',
        note:
          'hoy, esta mañana, esta tarde — «свои» обстоятельства времени для Pretérito Perfecto. ' +
          'В тексте: hoy hemos entrado, ha vuelto, he comido, hemos pagado. День ещё не закрыт — отсюда perfecto.',
      },
    ],
  },

  {
    id: 'a1-025',
    level: 'A1',
    day: 25,
    title: 'En la recepción del hotel',
    text:
      'Hemos llegado a Sevilla esta tarde. ' +
      'Vamos a quedarnos tres noches en un hotel pequeño cerca de la catedral. ' +
      'En la recepción nos atiende una señora muy simpática.\n\n' +
      '—Buenas tardes. Tenemos una reserva a nombre de García.\n' +
      '—Sí, aquí está. Una habitación doble con vistas al patio. ' +
      '¿Pueden rellenar este formulario, por favor?\n\n' +
      'He escrito mi nombre, mi pasaporte y mi dirección. ' +
      'La señora nos ha dado la llave. ' +
      'La habitación está en la tercera planta. Hay un ascensor pequeño.\n\n' +
      'La habitación es bonita: cama grande, baño con bañera y un balcón con flores. ' +
      'Vamos a descansar un poco antes de salir a cenar.',
    vocabulary: [
      {
        word: 'la recepción',
        translation: 'ресепшен; приём (de huéspedes)',
        example: 'En la recepción nos atiende una señora.',
      },
      {
        word: 'atender',
        translation: 'обслуживать клиента; уделять внимание (e→ie: atiendo, atiendes, atiende…)',
        example: 'Nos atiende una señora simpática.',
      },
      {
        word: 'la reserva',
        translation: 'бронь (a nombre de — на имя)',
        example: 'Tenemos una reserva a nombre de García.',
      },
      {
        word: 'rellenar',
        translation: 'заполнять (анкету, форму)',
        example: '¿Pueden rellenar este formulario?',
      },
      {
        word: 'el formulario',
        translation: 'бланк, анкета',
        example: 'rellenar este formulario',
      },
      {
        word: 'el pasaporte',
        translation: 'паспорт',
        example: 'He escrito mi pasaporte.',
      },
      {
        word: 'la dirección',
        translation: 'адрес; направление',
        example: 'mi nombre, mi pasaporte y mi dirección',
      },
      {
        word: 'la llave',
        translation: 'ключ',
        example: 'Nos ha dado la llave.',
      },
      {
        word: 'la planta',
        translation: 'этаж (la planta baja — первый, цокольный); растение',
        example: 'La habitación está en la tercera planta.',
      },
      {
        word: 'la cama',
        translation: 'кровать (cama doble — двуспальная)',
        example: 'cama grande',
      },
      {
        word: 'el balcón',
        translation: 'балкон',
        example: 'un balcón con flores',
      },
      {
        word: 'descansar',
        translation: 'отдыхать (descanso = отдых)',
        example: 'Vamos a descansar un poco.',
      },
    ],
    questions: [
      {
        q: '¿Cuántas noches van a quedarse?',
        options: ['Una noche', 'Dos noches', 'Tres noches'],
        correct: 2,
      },
      {
        q: '¿Qué les pide la señora de la recepción?',
        options: ['Pagar por adelantado', 'Rellenar un formulario', 'Llamar por teléfono'],
        correct: 1,
      },
      {
        q: '¿En qué planta está la habitación?',
        options: ['En la primera', 'En la segunda', 'En la tercera'],
        correct: 2,
      },
    ],
    grammar_notes: [
      {
        topic: 'Pretérito Perfecto: неправильные причастия',
        note:
          'Часть глаголов имеет «свои» причастия: escribir → escrito, dar → dado (правильное), hacer → hecho, ' +
          'volver → vuelto, decir → dicho, ver → visto, abrir → abierto, poner → puesto, romper → roto. ' +
          'В тексте: he escrito, nos ha dado.',
      },
      {
        topic: 'Числительные: количественные и порядковые',
        note:
          'tres noches — количественное (сколько); tercera planta — порядковое (какой по счёту). ' +
          '1–10 порядковые: primero/-a, segundo/-a, tercero/-a, cuarto/-a, quinto/-a… ' +
          'primero и tercero перед сущ. м.р. усекаются: el primer día, el tercer piso.',
      },
    ],
  },

  {
    id: 'a1-026',
    level: 'A1',
    day: 26,
    title: 'Lista de la compra',
    text:
      'Esta mañana hemos ido al supermercado del barrio. ' +
      'Mi marido lleva el carrito y yo la lista. ' +
      'Hemos comprado muchas cosas: dos litros de leche, una docena de huevos, ' +
      'un paquete de arroz y medio kilo de patatas.\n\n' +
      'En la sección de frutas hemos elegido manzanas y plátanos maduros. ' +
      'Mi marido ha querido también una botella de vino tinto. ¡Cuesta solo cuatro euros!\n\n' +
      'En la caja hay mucha gente. Hemos pagado treinta y dos euros con la tarjeta. ' +
      'Las bolsas son pesadas y vamos a volver a casa en coche. ' +
      'Mañana voy a preparar tortilla para la cena.',
    vocabulary: [
      {
        word: 'el supermercado',
        translation: 'супермаркет',
        example: 'Hemos ido al supermercado.',
      },
      {
        word: 'el carrito',
        translation: 'тележка (в супермаркете); коляска. Корзина — la cesta',
        example: 'Mi marido lleva el carrito.',
      },
      {
        word: 'la lista (de la compra)',
        translation: 'список покупок',
        example: 'Yo llevo la lista.',
      },
      {
        word: 'la docena',
        translation: 'дюжина, двенадцать штук',
        example: 'una docena de huevos',
      },
      {
        word: 'el huevo',
        translation: 'яйцо',
        example: 'una docena de huevos',
      },
      {
        word: 'el paquete',
        translation: 'пачка, упаковка',
        example: 'un paquete de arroz',
      },
      {
        word: 'el arroz',
        translation: 'рис',
        example: 'un paquete de arroz',
      },
      {
        word: 'la manzana',
        translation: 'яблоко',
        example: 'Hemos elegido manzanas.',
      },
      {
        word: 'el plátano',
        translation: 'банан (в Испании; в Лат. Америке — la banana)',
        example: 'plátanos maduros',
      },
      {
        word: 'el vino tinto',
        translation: 'красное вино (vino blanco — белое; vino rosado — розовое)',
        example: 'una botella de vino tinto',
      },
      {
        word: 'la caja',
        translation: 'касса; коробка',
        example: 'En la caja hay mucha gente.',
      },
      {
        word: 'la bolsa',
        translation: 'пакет, сумка',
        example: 'Las bolsas son pesadas.',
      },
    ],
    questions: [
      {
        q: '¿Cuántos huevos han comprado?',
        options: ['Seis', 'Una docena', 'Dos docenas'],
        correct: 1,
      },
      {
        q: '¿Cuánto cuesta la botella de vino?',
        options: ['Tres euros', 'Cuatro euros', 'Cinco euros'],
        correct: 1,
      },
      {
        q: '¿Cómo van a volver a casa?',
        options: ['A pie', 'En autobús', 'En coche'],
        correct: 2,
      },
    ],
    grammar_notes: [
      {
        topic: 'Количество + de + существительное',
        note:
          'Меры и упаковки строятся с предлогом de: un litro de leche, una docena de huevos, un paquete de arroz, ' +
          'medio kilo de patatas, una botella de vino, un trozo de queso. ' +
          'Само существительное идёт без артикля.',
      },
      {
        topic: 'Pretérito Perfecto: список покупок',
        note:
          'hemos comprado, hemos elegido, ha querido, hemos pagado — действия одного «закрытого» утра, ' +
          'но день ещё длится: типичный контекст для Pretérito Perfecto.',
      },
    ],
  },

  {
    id: 'a1-027',
    level: 'A1',
    day: 27,
    title: '¿Por dónde se va al museo?',
    text:
      'Estamos en el centro de Madrid y queremos visitar el Museo del Prado. ' +
      'No sabemos por dónde ir. Mi mujer pregunta a una señora.\n\n' +
      '—Perdone, ¿el Museo del Prado está cerca?\n' +
      '—Sí, muy cerca. Para llegar, hay que seguir todo recto hasta la próxima esquina. ' +
      'Después hay que girar a la derecha y cruzar la plaza. ' +
      'El museo está al final de la calle, a unos cinco minutos andando.\n' +
      '—Muchas gracias.\n' +
      '—De nada, ¡buen paseo!\n\n' +
      'Hemos seguido las instrucciones. ' +
      'Cuando hemos cruzado la plaza, hemos visto un edificio grande con columnas. ' +
      '¡Es el museo! Vamos a comprar las entradas para entrar.',
    vocabulary: [
      {
        word: 'perdone',
        translation: 'извините (вежливая форма usted; к ровеснику — perdona)',
        example: 'Perdone, ¿el museo está cerca?',
      },
      {
        word: 'todo recto',
        translation: 'прямо (направление). Также: derecho',
        example: 'seguir todo recto',
      },
      {
        word: 'hay que + инфинитив',
        translation: 'нужно, надо (безличная необходимость, без подлежащего)',
        example: 'Hay que girar a la derecha.',
      },
      {
        word: 'girar',
        translation: 'поворачивать (girar a la derecha / a la izquierda)',
        example: 'hay que girar a la derecha',
      },
      {
        word: 'la derecha / la izquierda',
        translation: 'правая / левая сторона. a la derecha — направо, a la izquierda — налево',
        example: 'girar a la derecha',
      },
      {
        word: 'cruzar',
        translation: 'переходить, пересекать (улицу, площадь)',
        example: 'cruzar la plaza',
      },
      {
        word: 'al final de',
        translation: 'в конце (улицы, коридора). Антоним — al principio de',
        example: 'al final de la calle',
      },
      {
        word: 'andando',
        translation: 'пешком, идя (a cinco minutos andando — в пяти минутах ходьбы)',
        example: 'a unos cinco minutos andando',
      },
      {
        word: 'seguir',
        translation: 'следовать; продолжать (e→i: sigo, sigues, sigue…). Pret. Perf.: he seguido',
        example: 'Hemos seguido las instrucciones.',
      },
      {
        word: 'la entrada',
        translation: 'входной билет; вход (entrar — входить)',
        example: 'comprar las entradas',
      },
      {
        word: 'de nada',
        translation: 'не за что; пожалуйста (в ответ на gracias)',
        example: '—Gracias. —De nada.',
      },
      {
        word: 'próximo, -a',
        translation: 'следующий, ближайший (la próxima esquina — следующий угол)',
        example: 'hasta la próxima esquina',
      },
    ],
    questions: [
      {
        q: '¿Qué quieren visitar?',
        options: ['La catedral', 'El Museo del Prado', 'El parque del Retiro'],
        correct: 1,
      },
      {
        q: 'Después de seguir todo recto, ¿por dónde hay que ir?',
        options: ['A la izquierda', 'A la derecha', 'Recto otra vez'],
        correct: 1,
      },
      {
        q: '¿A cuántos minutos andando está el museo?',
        options: ['A dos minutos', 'A cinco minutos', 'A diez minutos'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Hay que + инфинитив',
        note:
          'Безличная конструкция: «нужно делать что-то» — без указания, кому именно. ' +
          'hay (от haber) не меняется по лицам: hay que estudiar, hay que cruzar, hay que pagar. ' +
          'Сравните с tener que (личная обязанность): tengo que estudiar — мне надо учиться.',
        },
      {
        topic: 'Указание дороги: словарь направлений',
        note:
          'todo recto — прямо; a la derecha — направо; a la izquierda — налево; ' +
          'al final de — в конце; cerca / lejos — близко / далеко; ' +
          'enfrente de — напротив; al lado de — рядом с; a unos X minutos andando — в X минутах пешком.',
      },
    ],
  },

  {
    id: 'a1-028',
    level: 'A1',
    day: 28,
    title: 'El viaje a Barcelona',
    text:
      'Esta mañana he tomado el tren AVE de Madrid a Barcelona. ' +
      'La estación de Atocha está llena de viajeros. ' +
      'He comprado el billete por internet, pero he tenido que recogerlo ' +
      'en una máquina especial.\n\n' +
      'El tren ha salido a las nueve en punto. ' +
      'Mi asiento es el catorce B, junto a la ventana. ' +
      'He visto pasar campos verdes, pueblos pequeños y, al final, el mar.\n\n' +
      'Durante el viaje he leído un libro y he tomado un café en el vagón cafetería. ' +
      'El AVE es muy rápido: en dos horas y media hemos llegado a Barcelona. ' +
      '¡Qué cómodo viajar así!',
    vocabulary: [
      {
        word: 'el AVE',
        translation: 'испанский высокоскоростной поезд (Alta Velocidad Española)',
        example: 'He tomado el tren AVE.',
      },
      {
        word: 'el billete',
        translation: 'билет (на поезд, автобус, самолёт). В Лат. Америке — el boleto',
        example: 'He comprado el billete por internet.',
      },
      {
        word: 'el viajero / la viajera',
        translation: 'пассажир, путешественник',
        example: 'La estación está llena de viajeros.',
      },
      {
        word: 'recoger',
        translation: 'забирать, получать (билет, посылку); подбирать',
        example: 'He tenido que recogerlo en una máquina.',
      },
      {
        word: 'la máquina',
        translation: 'машина, аппарат (la máquina de billetes — билетный автомат)',
        example: 'una máquina especial',
      },
      {
        word: 'salir',
        translation: 'выходить; отправляться (поезд, самолёт). Pretérito Perfecto: he salido',
        example: 'El tren ha salido a las nueve.',
      },
      {
        word: 'en punto',
        translation: 'ровно (о времени): a las nueve en punto — ровно в девять',
        example: 'a las nueve en punto',
      },
      {
        word: 'el asiento',
        translation: 'сиденье, место (в транспорте, в зале)',
        example: 'Mi asiento es el catorce B.',
      },
      {
        word: 'junto a',
        translation: 'рядом с (junto a la ventana — у окна)',
        example: 'junto a la ventana',
      },
      {
        word: 'la ventana',
        translation: 'окно (la ventanilla — окошко в транспорте, кассе)',
        example: 'junto a la ventana',
      },
      {
        word: 'el pueblo',
        translation: 'деревня, маленький город; народ',
        example: 'pueblos pequeños',
      },
      {
        word: 'el viaje',
        translation: 'поездка, путешествие (viajar — путешествовать)',
        example: 'durante el viaje',
      },
    ],
    questions: [
      {
        q: '¿Adónde viaja el narrador?',
        options: ['A Sevilla', 'A Barcelona', 'A Valencia'],
        correct: 1,
      },
      {
        q: '¿Cómo ha comprado el billete?',
        options: ['En la taquilla', 'Por internet', 'Por teléfono'],
        correct: 1,
      },
      {
        q: '¿Cuánto dura el viaje?',
        options: ['Una hora', 'Dos horas y media', 'Cuatro horas'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Tener que + инфинитив (личная обязанность)',
        note:
          'tener que означает «должен / приходится»: he tenido que recogerlo — мне пришлось забрать его. ' +
          'Спрягается tener (tengo, tienes, tiene…), а смысловой глагол — в инфинитиве. ' +
          'Контраст с hay que: hay que — безличное «нужно вообще», tener que — конкретно я / ты / он.',
      },
      {
        topic: 'Местоимения с инфинитивом',
        note:
          'Безударные местоимения (lo, la, le, me, te, se…) при инфинитиве могут стоять ДО смыслового глагола ' +
          'или СЛИТНО после инфинитива: lo he tenido que recoger = he tenido que recogerlo. ' +
          'Оба варианта верны; присоединение к инфинитиву — пишется одним словом.',
      },
    ],
  },

  {
    id: 'a1-029',
    level: 'A1',
    day: 29,
    title: 'En la tienda de recuerdos',
    text:
      'Esta tarde hemos visitado una tienda de recuerdos en el barrio gótico. ' +
      'Hay muchas cosas bonitas: imanes para la nevera, postales, abanicos, ' +
      'cerámica pintada a mano y pequeñas figuras de bailaoras.\n\n' +
      'Mi marido ha elegido un imán con la Sagrada Familia. ' +
      'Yo he comprado dos abanicos: uno blanco para mi madre y otro rojo para mi hermana. ' +
      'Cuestan ocho euros cada uno.\n\n' +
      '—¿Algo más? —pregunta el dependiente.\n' +
      '—Sí, también queremos esta postal.\n' +
      '—Son veinte euros en total.\n\n' +
      'He pagado en efectivo. ' +
      'El dependiente nos ha dado una bolsa de papel con todo dentro. ' +
      'Mañana vamos a enviar la postal a nuestros amigos.',
    vocabulary: [
      {
        word: 'el recuerdo',
        translation: 'сувенир; воспоминание (recordar — вспоминать)',
        example: 'una tienda de recuerdos',
      },
      {
        word: 'el imán',
        translation: 'магнит (на холодильник)',
        example: 'un imán con la Sagrada Familia',
      },
      {
        word: 'la nevera',
        translation: 'холодильник (Испания; в Лат. Америке часто — el refrigerador)',
        example: 'imanes para la nevera',
      },
      {
        word: 'la postal',
        translation: 'почтовая открытка',
        example: 'enviar la postal a nuestros amigos',
      },
      {
        word: 'el abanico',
        translation: 'веер — традиционный испанский предмет от жары',
        example: 'dos abanicos: uno blanco y otro rojo',
      },
      {
        word: 'la bailaora',
        translation: 'танцовщица фламенко (мужской вариант — el bailaor)',
        example: 'figuras de bailaoras',
      },
      {
        word: 'pintado, -a a mano',
        translation: 'расписанный вручную',
        example: 'cerámica pintada a mano',
      },
      {
        word: 'la Sagrada Familia',
        translation: 'Саграда Фамилия — недостроенный собор Гауди в Барселоне',
        example: 'un imán con la Sagrada Familia',
      },
      {
        word: 'cada uno',
        translation: 'каждый, каждая штука (по…): «cuestan ocho euros cada uno» — по восемь евро каждый',
        example: 'ocho euros cada uno',
      },
      {
        word: 'en efectivo',
        translation: 'наличными (антоним — con tarjeta)',
        example: 'He pagado en efectivo.',
      },
      {
        word: 'dentro',
        translation: 'внутри. dentro de — внутри чего-то',
        example: 'una bolsa con todo dentro',
      },
      {
        word: 'enviar',
        translation: 'отправлять (письмо, посылку, сообщение)',
        example: 'enviar la postal a nuestros amigos',
      },
    ],
    questions: [
      {
        q: '¿Qué compra el marido?',
        options: ['Una postal', 'Un imán', 'Un abanico'],
        correct: 1,
      },
      {
        q: '¿Cuánto cuesta cada abanico?',
        options: ['Cinco euros', 'Ocho euros', 'Diez euros'],
        correct: 1,
      },
      {
        q: '¿Cómo paga la narradora?',
        options: ['Con tarjeta', 'En efectivo', 'Por internet'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Para + получатель',
        note:
          'para вводит того, КОМУ предназначен предмет или действие: ' +
          'uno blanco para mi madre, otro rojo para mi hermana, imanes para la nevera. ' +
          'Сравните с целью: para llegar, hay que… (para + инфинитив = чтобы…).',
      },
      {
        topic: 'Pretérito Perfecto: дневные итоги',
        note:
          'hemos visitado, ha elegido, he comprado, he pagado, ha dado — всё в рамках сегодняшнего дня. ' +
          'Pretérito Perfecto «собирает» события незакрытого периода вокруг говорящего.',
      },
    ],
  },

  {
    id: 'a1-030',
    level: 'A1',
    day: 30,
    title: 'El último día',
    text:
      'Hoy es nuestro último día en España. Hemos pasado dos semanas inolvidables. ' +
      'Hemos visitado Madrid, Granada, Sevilla y Barcelona. ' +
      'Hemos comido paella en Valencia y churros con chocolate en Madrid. ' +
      '¡Qué bien hemos comido!\n\n' +
      'Esta mañana hemos hecho las maletas con calma. ' +
      'Marta dice que su maleta pesa demasiado por los regalos.\n\n' +
      'Por la tarde vamos a ir al aeropuerto en taxi. ' +
      'El vuelo sale a las ocho de la noche. ' +
      'Vamos a llegar a casa muy cansados, pero con la cabeza llena de recuerdos bonitos.\n\n' +
      '¡Hasta pronto, España! Seguro que vamos a volver el próximo año.',
    vocabulary: [
      {
        word: 'último, -a',
        translation: 'последний (антоним — primero, -a)',
        example: 'nuestro último día',
      },
      {
        word: 'inolvidable',
        translation: 'незабываемый (одна форма для м.р. и ж.р.)',
        example: 'dos semanas inolvidables',
      },
      {
        word: 'la paella',
        translation: 'паэлья — рисовое блюдо родом из Валенсии (с морепродуктами или мясом)',
        example: 'Hemos comido paella en Valencia.',
      },
      {
        word: 'los churros con chocolate',
        translation: 'чуррос с горячим шоколадом — традиционный испанский завтрак или полдник',
        example: 'churros con chocolate en Madrid',
      },
      {
        word: 'hacer las maletas',
        translation: 'собирать чемоданы (фиксированная фраза)',
        example: 'Hemos hecho las maletas con calma.',
      },
      {
        word: 'la maleta',
        translation: 'чемодан',
        example: 'su maleta pesa demasiado',
      },
      {
        word: 'pesar',
        translation: 'весить (la maleta pesa = чемодан весит); взвешивать',
        example: 'la maleta pesa demasiado',
      },
      {
        word: 'demasiado',
        translation: 'слишком (много). demasiado caro — слишком дорого',
        example: 'pesa demasiado',
      },
      {
        word: 'el aeropuerto',
        translation: 'аэропорт',
        example: 'Vamos al aeropuerto en taxi.',
      },
      {
        word: 'el vuelo',
        translation: 'рейс, полёт (volar — летать)',
        example: 'El vuelo sale a las ocho.',
      },
      {
        word: '¡Hasta pronto!',
        translation: 'до скорого! (прощание; ср. ¡Hasta luego!, ¡Hasta mañana!)',
        example: '¡Hasta pronto, España!',
      },
      {
        word: 'seguro que',
        translation: 'наверняка, точно (выражение уверенности)',
        example: 'Seguro que vamos a volver.',
      },
    ],
    questions: [
      {
        q: '¿Cuánto tiempo han pasado en España?',
        options: ['Una semana', 'Dos semanas', 'Un mes'],
        correct: 1,
      },
      {
        q: '¿Por qué pesa demasiado la maleta?',
        options: ['Por la ropa', 'Por los regalos', 'Por los libros'],
        correct: 1,
      },
      {
        q: '¿A qué hora sale el vuelo?',
        options: ['A las seis de la tarde', 'A las ocho de la noche', 'A las diez de la noche'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Pretérito Perfecto: подведение итогов поездки',
        note:
          'hemos pasado, hemos visitado, hemos comido, hemos hecho — Pretérito Perfecto собирает «всё, что мы сделали» ' +
          'за период, который ещё переживаешь как свой (отпуск, день, неделю). ' +
          'Маркеры: hoy, esta mañana, en estas dos semanas, ya, todavía no.',
      },
      {
        topic: 'Ir a + infinitivo: планы на сегодня и на будущее',
        note:
          'vamos a ir al aeropuerto, vamos a llegar, vamos a volver el próximo año. ' +
          'Универсальная конструкция для будущего на A1 — заменяет «настоящее» Futuro. ' +
          'Формула: ir в Presente + a + инфинитив. Подходит и для ближайших, и для отдалённых планов.',
      },
    ],
  },

  {
    id: 'a2-001',
    level: 'A2',
    day: 1,
    title: 'El profesor de Historia',
    text:
      'Hace muchos años estudié en un colegio público de Salamanca. ' +
      'Empecé a los seis años y terminé a los dieciséis. ' +
      'Mi profesor favorito fue don Antonio, el profesor de Historia. ' +
      'Aquel hombre nos contó la historia de España con pasión y con humor.\n\n' +
      'Una vez, en sexto curso, organicé con mis amigos una pequeña fiesta sorpresa por su cumpleaños. ' +
      'Compramos una tarta y escribimos juntos una carta. ' +
      'Don Antonio se emocionó mucho y nos dio las gracias delante de toda la clase.\n\n' +
      'El último año hicimos el viaje de fin de curso a Mallorca. ' +
      'Aquellos días fueron preciosos. ' +
      'Aprendí a conocer mejor a mis compañeros y descubrí que los mejores recuerdos del colegio no fueron los exámenes.',
    vocabulary: [
      {
        word: 'el curso',
        translation: 'учебный год; класс (sexto curso — шестой класс)',
        example: 'Una vez, en sexto curso, organicé una fiesta.',
      },
      {
        word: 'la pasión',
        translation: 'страсть, увлечённость (con pasión — с увлечением)',
        example: 'Nos contó la historia con pasión.',
      },
      {
        word: 'organizar',
        translation: 'организовать (Indef: organicé, organizaste, organizó…)',
        example: 'Organicé una fiesta sorpresa.',
      },
      {
        word: 'la fiesta sorpresa',
        translation: 'вечеринка-сюрприз (приложение sorpresa в постпозиции)',
        example: 'una pequeña fiesta sorpresa por su cumpleaños',
      },
      {
        word: 'la tarta',
        translation: 'торт (la torta — лепёшка; в кондитерской tarta)',
        example: 'Compramos una tarta.',
      },
      {
        word: 'emocionarse',
        translation: 'разволноваться, растрогаться (возвратный)',
        example: 'Don Antonio se emocionó mucho.',
      },
      {
        word: 'dar las gracias',
        translation: 'благодарить (буквально «дать благодарности»)',
        example: 'Nos dio las gracias delante de la clase.',
      },
      {
        word: 'delante de',
        translation: 'перед, лицом к (delante de la clase — перед всем классом)',
        example: 'delante de toda la clase',
      },
      {
        word: 'el viaje de fin de curso',
        translation: 'выпускная поездка (традиция испанских школ в последний год)',
        example: 'Hicimos el viaje de fin de curso a Mallorca.',
      },
      {
        word: 'precioso, -a',
        translation: 'чудесный, восхитительный (синоним maravilloso)',
        example: 'Aquellos días fueron preciosos.',
      },
      {
        word: 'descubrir',
        translation: 'открыть, обнаружить (participio descubierto)',
        example: 'Descubrí que los exámenes no fueron lo más importante.',
      },
      {
        word: 'el examen',
        translation: 'экзамен (мн. ч. los exámenes — с тильдой!)',
        example: 'los exámenes del último año',
      },
      {
        word: 'el compañero / la compañera',
        translation: 'товарищ; одноклассник, коллега (compañero de clase)',
        example: 'Aprendí a conocer mejor a mis compañeros.',
      },
      {
        word: 'aquel, aquella, aquellos, aquellas',
        translation: 'тот, та (дальний демонстратив — для воспоминаний из прошлого)',
        example: 'Aquel hombre nos contó la historia.',
      },
    ],
    questions: [
      {
        q: '¿A qué edad empezó el colegio?',
        options: ['A los seis años', 'A los ocho años', 'A los diez años'],
        correct: 0,
      },
      {
        q: '¿Por qué organizó la fiesta sorpresa?',
        options: ['Por un examen', 'Por el cumpleaños del profesor', 'Por el fin de curso'],
        correct: 1,
      },
      {
        q: '¿Adónde fueron en el viaje de fin de curso?',
        options: ['A Mallorca', 'A Granada', 'A Barcelona'],
        correct: 0,
      },
    ],
    grammar_notes: [
      {
        topic: 'Pretérito Indefinido: формы регулярных глаголов',
        note:
          'Окончания -ar: -é, -aste, -ó, -amos, -asteis, -aron (estudié, terminé, organicé, compramos). ' +
          'Окончания -er/-ir: -í, -iste, -ió, -imos, -isteis, -ieron (aprendí, descubrí, escribimos). ' +
          'Используется для законченных событий в прошлом, оторванных от настоящего.',
      },
      {
        topic: 'Маркеры законченного прошлого',
        note:
          'С Pretérito Indefinido работают «закрытые» во времени маркеры: hace muchos años, una vez, ' +
          'el último año, en 2010, aquel día. В тексте: «Hace muchos años estudié», «Una vez organicé», ' +
          '«El último año hicimos», «Aquellos días fueron preciosos».',
      },
    ],
  },

  {
    id: 'a2-002',
    level: 'A2',
    day: 2,
    title: 'Mi primer día en la oficina',
    text:
      'El lunes pasado empecé en mi nueva empresa. ' +
      'Llegué media hora antes para no llegar tarde el primer día. ' +
      'El edificio está en el centro de Madrid, cerca de la Puerta del Sol.\n\n' +
      'En la entrada me esperó Beatriz, la responsable de recursos humanos. ' +
      'Me dio una tarjeta y me enseñó toda la oficina. ' +
      'Conocí a doce compañeros nuevos. Olvidé los nombres enseguida, claro.\n\n' +
      'A las once tuve una reunión con el jefe. ' +
      'Hablamos del proyecto, de los plazos y del sueldo. ' +
      'Él fue muy amable y me dio confianza. ' +
      'Por la tarde firmé el contrato y salí del edificio a las siete, cansado pero contento.',
    vocabulary: [
      {
        word: 'la empresa',
        translation: 'компания, фирма (la empresa familiar — семейная фирма)',
        example: 'Empecé en mi nueva empresa.',
      },
      {
        word: 'el responsable / la responsable de',
        translation: 'ответственный за; руководитель отдела',
        example: 'Beatriz, la responsable de recursos humanos.',
      },
      {
        word: 'los recursos humanos',
        translation: 'отдел кадров, HR (буквально «человеческие ресурсы»)',
        example: 'la responsable de recursos humanos',
      },
      {
        word: 'enseguida',
        translation: 'сразу, тут же (синоним inmediatamente)',
        example: 'Olvidé los nombres enseguida.',
      },
      {
        word: 'la reunión',
        translation: 'совещание, встреча (tener una reunión — иметь совещание)',
        example: 'A las once tuve una reunión con el jefe.',
      },
      {
        word: 'el jefe / la jefa',
        translation: 'начальник, шеф (el jefe directo — непосредственный начальник)',
        example: 'Tuve una reunión con el jefe.',
      },
      {
        word: 'el plazo',
        translation: 'срок, дедлайн (cumplir un plazo — соблюдать срок)',
        example: 'Hablamos de los plazos.',
      },
      {
        word: 'el sueldo',
        translation: 'зарплата (el salario — синоним, чуть формальнее)',
        example: 'Hablamos del sueldo.',
      },
      {
        word: 'amable',
        translation: 'любезный, приветливый (одна форма для м.р. и ж.р.)',
        example: 'Él fue muy amable.',
      },
      {
        word: 'la confianza',
        translation: 'доверие; уверенность (dar confianza — внушать доверие)',
        example: 'Me dio confianza.',
      },
      {
        word: 'el contrato',
        translation: 'договор, контракт (firmar un contrato — подписать контракт)',
        example: 'Firmé el contrato.',
      },
      {
        word: 'firmar',
        translation: 'подписывать; la firma — подпись',
        example: 'Firmé el contrato.',
      },
      {
        word: 'olvidar',
        translation: 'забывать (olvidé, olvidaste, olvidó… — без -se в кастильском)',
        example: 'Olvidé los nombres enseguida.',
      },
      {
        word: 'el proyecto',
        translation: 'проект (trabajar en un proyecto)',
        example: 'Hablamos del proyecto.',
      },
    ],
    questions: [
      {
        q: '¿Cuándo empezó en la nueva empresa?',
        options: ['Ayer', 'El lunes pasado', 'La semana que viene'],
        correct: 1,
      },
      {
        q: '¿Quién le esperó en la entrada?',
        options: ['El jefe', 'Beatriz, la de recursos humanos', 'Un compañero nuevo'],
        correct: 1,
      },
      {
        q: '¿A qué hora salió del edificio?',
        options: ['A las seis', 'A las siete', 'A las ocho'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Pretérito Indefinido: tener, dar, ser/ir',
        note:
          'tener: tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron. ' +
          'dar: di, diste, dio, dimos, disteis, dieron — короткие формы без ударений. ' +
          'ser и ir в Indefinido совпадают: fui, fuiste, fue, fuimos, fuisteis, fueron. ' +
          'В тексте: «tuve una reunión», «me dio una tarjeta», «Él fue muy amable».',
      },
      {
        topic: 'Орфография -ar в Indefinido',
        note:
          'У -ar глаголов на -gar, -car, -zar в 1 л. ед. ч. меняется согласная для сохранения звука: ' +
          'llegar → llegué (не llegé), empezar → empecé (не empezé), buscar → busqué. ' +
          'В тексте: «empecé en mi nueva empresa», «Llegué media hora antes».',
      },
    ],
  },

  {
    id: 'a2-003',
    level: 'A2',
    day: 3,
    title: 'La boda de mi primo Javier',
    text:
      'El sábado pasado celebramos la boda de mi primo Javier en un pueblo cerca de Sevilla. ' +
      'Mi mujer y yo cogimos el coche el viernes por la tarde y llegamos justo antes de la cena.\n\n' +
      'La ceremonia fue por la mañana, en una pequeña iglesia. ' +
      'La novia se llama Lucía y entró del brazo de su padre con un vestido blanco preciosísimo. ' +
      'Mi tía no pudo contener las lágrimas.\n\n' +
      'Después fuimos a un cortijo. ' +
      'Hubo una comida larga, con jamón, gambas y un cordero asado increíble. ' +
      'Más tarde brindamos por los novios con cava. ' +
      'Bailamos hasta las cinco de la mañana. ' +
      'Aquella noche todos olvidamos las preocupaciones del trabajo.',
    vocabulary: [
      {
        word: 'la ceremonia',
        translation: 'церемония (la ceremonia civil / religiosa)',
        example: 'La ceremonia fue por la mañana.',
      },
      {
        word: 'la iglesia',
        translation: 'церковь, храм (с маленькой буквы как здание)',
        example: 'en una pequeña iglesia',
      },
      {
        word: 'la novia / el novio',
        translation: 'невеста / жених; также «девушка / парень» (отношения)',
        example: 'La novia se llama Lucía.',
      },
      {
        word: 'el vestido',
        translation: 'платье (un vestido blanco — белое платье)',
        example: 'un vestido blanco preciosísimo',
      },
      {
        word: 'preciosísimo, -a',
        translation: 'просто восхитительный (превосходная absoluto: precioso + -ísimo)',
        example: 'un vestido blanco preciosísimo',
      },
      {
        word: 'la lágrima',
        translation: 'слеза (contener las lágrimas — сдерживать слёзы)',
        example: 'No pudo contener las lágrimas.',
      },
      {
        word: 'contener',
        translation: 'сдерживать; содержать (спрягается как tener: contuve, contuviste…)',
        example: 'No pudo contener las lágrimas.',
      },
      {
        word: 'el cortijo',
        translation: 'кортихо — андалусское поместье с белым домом и виноградниками',
        example: 'Después fuimos a un cortijo.',
      },
      {
        word: 'la gamba',
        translation: 'креветка (gambas a la plancha — креветки на гриле)',
        example: 'Hubo gambas y jamón.',
      },
      {
        word: 'el cordero asado',
        translation: 'жареный молочный ягнёнок — кастильское праздничное блюдо',
        example: 'un cordero asado increíble',
      },
      {
        word: 'brindar por',
        translation: 'поднимать тост за; el brindis — тост',
        example: 'Brindamos por los novios.',
      },
      {
        word: 'el cava',
        translation: 'кава — испанское игристое вино из Каталонии',
        example: 'Brindamos con cava.',
      },
      {
        word: 'la preocupación',
        translation: 'забота, тревога (от preocuparse — беспокоиться)',
        example: 'olvidamos las preocupaciones del trabajo',
      },
      {
        word: 'entrar del brazo de',
        translation: 'войти под руку с (брать под руку — coger del brazo)',
        example: 'Entró del brazo de su padre.',
      },
    ],
    questions: [
      {
        q: '¿Dónde celebraron la boda?',
        options: ['En Sevilla', 'En un pueblo cerca de Sevilla', 'En Madrid'],
        correct: 1,
      },
      {
        q: '¿Cómo era el vestido de la novia?',
        options: ['Blanco', 'Rojo', 'Azul'],
        correct: 0,
      },
      {
        q: '¿Hasta qué hora bailaron?',
        options: ['Hasta las tres', 'Hasta las cinco de la mañana', 'Hasta las siete'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Indefinido неправильные: poder, haber',
        note:
          'poder: pude, pudiste, pudo, pudimos, pudisteis, pudieron. ' +
          'haber в значении «было, состоялось» — только форма hubo (без рода и числа): hubo una fiesta, hubo problemas. ' +
          'В тексте: «no pudo contener las lágrimas», «hubo una comida larga».',
      },
      {
        topic: 'Связки внутри рассказа',
        note:
          'Внутри одного эпизода Indefinido тянется через «después», «más tarde», «aquella noche», «hasta las cinco». ' +
          'Эти слова не требуют новой даты — они связывают шаги одного закрытого периода. ' +
          'Сравни с маркерами Pretérito Perfecto (hoy, esta semana, ya), которые тянут к настоящему.',
      },
    ],
  },

  {
    id: 'a2-004',
    level: 'A2',
    day: 4,
    title: 'La mudanza a Bilbao',
    text:
      'En septiembre de 2018 me mudé de Salamanca a Bilbao. ' +
      'Encontré un trabajo nuevo en una empresa de ingeniería y decidí cambiar de vida. ' +
      'La mudanza fue dura: dos camiones, muchas cajas y un día entero subiendo y bajando escaleras.\n\n' +
      'Mi piso nuevo tiene tres habitaciones y un balcón pequeño con vistas al monte. ' +
      'Los primeros días me sentí muy solo y la lluvia del País Vasco me sorprendió mucho.\n\n' +
      'Por suerte, mis vecinos fueron muy amables. ' +
      'Una pareja joven, Iker y Maite, me invitó a cenar el segundo fin de semana. ' +
      'Probé el bacalao al pil-pil y bebí sidra por primera vez. ' +
      'Aquella noche entendí algo importante: Bilbao va a ser mi nueva casa.',
    vocabulary: [
      {
        word: 'la mudanza',
        translation: 'переезд (hacer una mudanza — переезжать с вещами)',
        example: 'La mudanza fue dura.',
      },
      {
        word: 'mudarse',
        translation: 'переезжать (возвратный: me mudé, te mudaste, se mudó…)',
        example: 'Me mudé de Salamanca a Bilbao.',
      },
      {
        word: 'la ingeniería',
        translation: 'инженерия; инженерное дело (estudiar ingeniería)',
        example: 'una empresa de ingeniería',
      },
      {
        word: 'duro, -a',
        translation: 'тяжёлый, трудный; жёсткий на ощупь (un día duro)',
        example: 'La mudanza fue dura.',
      },
      {
        word: 'el camión',
        translation: 'грузовик (мн. ч. los camiones — с тильдой!)',
        example: 'dos camiones para la mudanza',
      },
      {
        word: 'la escalera',
        translation: 'лестница (мн. ч. часто, если ступенек много)',
        example: 'subiendo y bajando escaleras',
      },
      {
        word: 'el País Vasco',
        translation: 'Страна Басков — автономия на севере Испании, столица Витория',
        example: 'la lluvia del País Vasco',
      },
      {
        word: 'la pareja',
        translation: 'пара (двое людей); партнёр (mi pareja — моя половинка)',
        example: 'Una pareja joven, Iker y Maite, me invitó.',
      },
      {
        word: 'el bacalao al pil-pil',
        translation: 'треска в эмульсии из её собственного желатина — баскское блюдо',
        example: 'Probé el bacalao al pil-pil.',
      },
      {
        word: 'la sidra',
        translation: 'сидр (на севере Испании пьют асуйскую и баскскую сидру)',
        example: 'Bebí sidra por primera vez.',
      },
      {
        word: 'cambiar de vida',
        translation: 'изменить жизнь, поменять образ жизни (cambiar de + сущ. без артикля)',
        example: 'Decidí cambiar de vida.',
      },
      {
        word: 'sentirse solo, -a',
        translation: 'чувствовать себя одиноко (sentir e→ie: me siento, te sientes…)',
        example: 'Me sentí muy solo.',
      },
      {
        word: 'sorprender',
        translation: 'удивлять (sorprenderse — удивляться)',
        example: 'La lluvia me sorprendió mucho.',
      },
      {
        word: 'por suerte',
        translation: 'к счастью (антоним por desgracia — к несчастью)',
        example: 'Por suerte, mis vecinos fueron amables.',
      },
    ],
    questions: [
      {
        q: '¿Cuándo se mudó a Bilbao?',
        options: ['En septiembre de 2018', 'En enero de 2019', 'Hace un mes'],
        correct: 0,
      },
      {
        q: '¿Cómo se llaman los vecinos jóvenes?',
        options: ['Carlos y Marta', 'Iker y Maite', 'Javier y Lucía'],
        correct: 1,
      },
      {
        q: '¿Qué probó por primera vez?',
        options: ['Paella y sangría', 'Churros y chocolate', 'Bacalao al pil-pil y sidra'],
        correct: 2,
      },
    ],
    grammar_notes: [
      {
        topic: 'Pretérito Indefinido: ser e ir comparten formas',
        note:
          'fui, fuiste, fue, fuimos, fuisteis, fueron — одинаковы у ser и ir. ' +
          'Значение определяется контекстом: «La mudanza fue dura» (ser — «была»), ' +
          '«Después fuimos a un cortijo» (ir — «пошли»), «mis vecinos fueron muy amables» (ser).',
      },
      {
        topic: 'Контраст Indefinido / Pretérito Perfecto',
        note:
          'Indefinido — для закрытого этапа без связи с настоящим: «me mudé en 2018». ' +
          'Pretérito Perfecto — для опыта или связи с настоящим: «¿Te has mudado alguna vez?», «Hoy he firmado el contrato». ' +
          'В этом тексте Indefinido описывает целый этап жизни, оторванный от сегодня.',
      },
    ],
  },

  {
    id: 'a2-005',
    level: 'A2',
    day: 5,
    title: 'Aquel verano en Cádiz',
    text:
      'En agosto de 1998 mis padres alquilaron una casita en la costa de Cádiz. ' +
      'Pasamos allí cuatro semanas inolvidables. ' +
      'Yo aprendí a nadar con mi padre. ' +
      'Al principio tuve miedo, pero el último día llegué nadando hasta una boya lejana sin descansar.\n\n' +
      'Un sábado fuimos en barco a una isla pequeña y desierta. ' +
      'Llevamos la merienda y comimos bocadillos en la playa. ' +
      'Por la tarde mi hermano Pablo encontró un cangrejo entre las rocas y lo dejó dentro de mi cubo. ' +
      'Yo grité y él se rio mucho.\n\n' +
      'Una noche mis padres prepararon una barbacoa de sardinas en la arena. ' +
      'Después vimos un atardecer rojo sobre el Atlántico. ' +
      'Aquel momento nunca lo olvidé.',
    vocabulary: [
      {
        word: 'la casita',
        translation: 'домик (уменьшительное от casa, суффикс -ita)',
        example: 'Alquilaron una casita en la costa.',
      },
      {
        word: 'alquilar',
        translation: 'снимать в аренду; el alquiler — арендная плата',
        example: 'Mis padres alquilaron una casita.',
      },
      {
        word: 'la costa',
        translation: 'побережье (la Costa del Sol, la Costa Brava — испанские побережья)',
        example: 'una casita en la costa de Cádiz',
      },
      {
        word: 'tener miedo',
        translation: 'бояться (tener miedo a / de algo — бояться чего-либо)',
        example: 'Al principio tuve miedo.',
      },
      {
        word: 'la boya',
        translation: 'буй, поплавок (в море отмечает безопасную зону)',
        example: 'Llegué nadando hasta una boya lejana.',
      },
      {
        word: 'la isla',
        translation: 'остров (las islas Canarias, las Baleares)',
        example: 'Fuimos en barco a una isla.',
      },
      {
        word: 'desierto, -a',
        translation: 'необитаемый, пустынный (una isla desierta)',
        example: 'una isla pequeña y desierta',
      },
      {
        word: 'la merienda',
        translation: 'полдник (испанский приём пищи около 17–18 часов)',
        example: 'Llevamos la merienda a la playa.',
      },
      {
        word: 'el cangrejo',
        translation: 'краб (los cangrejos del Cantábrico — крабы Бискайского залива)',
        example: 'Mi hermano encontró un cangrejo.',
      },
      {
        word: 'el cubo',
        translation: 'ведро, ведёрко (для песка на пляже)',
        example: 'Lo dejó dentro de mi cubo.',
      },
      {
        word: 'reírse',
        translation: 'смеяться (Indef: me reí, te reíste, se rio, nos reímos, os reísteis, se rieron)',
        example: 'Él se rio mucho.',
      },
      {
        word: 'la barbacoa',
        translation: 'барбекю, шашлык; жаровня (hacer una barbacoa)',
        example: 'una barbacoa de sardinas en la arena',
      },
      {
        word: 'la sardina',
        translation: 'сардина (sardinas a la brasa — сардины на углях, классика юга Испании)',
        example: 'una barbacoa de sardinas',
      },
      {
        word: 'el atardecer',
        translation: 'закат, вечерние сумерки (от atardecer — вечереть; синоним la puesta de sol)',
        example: 'Vimos un atardecer rojo sobre el Atlántico.',
      },
    ],
    questions: [
      {
        q: '¿Cuántas semanas pasaron en Cádiz?',
        options: ['Dos', 'Tres', 'Cuatro'],
        correct: 2,
      },
      {
        q: '¿Qué aprendió aquel verano?',
        options: ['A nadar', 'A pescar', 'A cocinar'],
        correct: 0,
      },
      {
        q: '¿Qué encontró su hermano Pablo?',
        options: ['Una concha', 'Un cangrejo', 'Un pez pequeño'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Indefinido у -ir с переменой в 3-м лице',
        note:
          'Глаголы на -ir типа sentir, dormir, pedir, reírse, seguir в 3-м лице (él, ellos) меняют корень: ' +
          'sentir → sintió/sintieron; dormir → durmió/durmieron; pedir → pidió/pidieron; ' +
          'reírse → (se) rio / (se) rieron; seguir → siguió/siguieron. ' +
          'В тексте: «él se rio mucho».',
      },
      {
        topic: 'Aquel — далёкая дистанция в воспоминании',
        note:
          'Указательные aquel/aquella/aquellos/aquellas подчёркивают удалённость во времени или пространстве: ' +
          '«aquel verano», «aquella noche», «aquel momento». В воспоминаниях о далёком прошлом они звучат особенно живо.',
      },
    ],
  },

  {
    id: 'a2-006',
    level: 'A2',
    day: 6,
    title: 'Antoni Gaudí, un genio singular',
    text:
      'Antoni Gaudí nació en 1852 en Reus, un pequeño pueblo de Cataluña. ' +
      'De joven se mudó a Barcelona para estudiar arquitectura. ' +
      'Trabajó duro y leyó libros de botánica, geometría y religión. ' +
      'Toda esa mezcla apareció después en sus edificios.\n\n' +
      'En 1883 aceptó la dirección de las obras de la Sagrada Familia. ' +
      'Dedicó cuarenta y tres años a este proyecto. ' +
      'También diseñó la Casa Batlló, la Casa Milà y el Parque Güell. ' +
      'Sus formas curvas y sus colores sorprendieron a toda Europa.\n\n' +
      'Gaudí vivió con humildad y rezó cada día. ' +
      'Una tarde de junio de 1926, un tranvía lo atropelló cerca de su iglesia favorita. ' +
      'Murió tres días más tarde. ' +
      'La Sagrada Familia todavía no está terminada.',
    vocabulary: [
      {
        word: 'el genio',
        translation: 'гений; характер (mal genio — дурной нрав)',
        example: 'Antoni Gaudí, un genio singular.',
      },
      {
        word: 'de joven',
        translation: 'в молодости (как наречие времени; ср. de niño — в детстве)',
        example: 'De joven se mudó a Barcelona.',
      },
      {
        word: 'la arquitectura',
        translation: 'архитектура (estudiar arquitectura — учиться на архитектора)',
        example: 'Se mudó para estudiar arquitectura.',
      },
      {
        word: 'la mezcla',
        translation: 'смесь, сочетание (от mezclar — смешивать)',
        example: 'Toda esa mezcla apareció en sus edificios.',
      },
      {
        word: 'aparecer',
        translation: 'появляться (Indef: aparecí, apareciste, apareció…; participio aparecido)',
        example: 'Toda esa mezcla apareció en sus edificios.',
      },
      {
        word: 'aceptar',
        translation: 'принять; согласиться (aceptar un trabajo — согласиться на работу)',
        example: 'Aceptó la dirección de las obras.',
      },
      {
        word: 'las obras',
        translation: 'стройка, строительные работы (ед. ч. la obra — произведение, постройка)',
        example: 'la dirección de las obras de la Sagrada Familia',
      },
      {
        word: 'dedicar',
        translation: 'посвящать (dedicar tiempo / dedicar un libro a alguien)',
        example: 'Dedicó cuarenta y tres años al proyecto.',
      },
      {
        word: 'diseñar',
        translation: 'проектировать, разрабатывать дизайн (el diseño — дизайн)',
        example: 'Diseñó la Casa Batlló y el Parque Güell.',
      },
      {
        word: 'la forma',
        translation: 'форма (de forma triangular — треугольной формы)',
        example: 'Sus formas curvas sorprendieron a Europa.',
      },
      {
        word: 'curvo, -a',
        translation: 'изогнутый, кривой (антоним recto — прямой)',
        example: 'formas curvas',
      },
      {
        word: 'la humildad',
        translation: 'скромность, смирение (con humildad — со смирением)',
        example: 'Vivió con humildad.',
      },
      {
        word: 'el tranvía',
        translation: 'трамвай (только мужского рода, как el día)',
        example: 'Un tranvía lo atropelló.',
      },
      {
        word: 'atropellar',
        translation: 'сбить (о машине, трамвае); атрополевать пешехода',
        example: 'Un tranvía lo atropelló.',
      },
    ],
    questions: [
      {
        q: '¿Dónde nació Gaudí?',
        options: ['En Barcelona', 'En Reus', 'En Madrid'],
        correct: 1,
      },
      {
        q: '¿Cuántos años dedicó a la Sagrada Familia?',
        options: ['Veinte', 'Treinta y cinco', 'Cuarenta y tres'],
        correct: 2,
      },
      {
        q: '¿Cómo murió Gaudí?',
        options: ['De enfermedad', 'En un accidente de tranvía', 'De vejez'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Indefinido como tiempo de las biografías',
        note:
          'Биографии — классический жанр для Pretérito Indefinido: nació, vivió, trabajó, dedicó, diseñó, murió. ' +
          'Жизнь героя — закрытый отрезок, оторванный от настоящего. Маркеры — точные годы (en 1852, en 1883, en 1926) ' +
          'или эпохи (de joven, de mayor).',
      },
      {
        topic: 'Indefinido: leer, oír, caer — i → y в 3-м лице',
        note:
          'У глаголов с гласной перед окончанием -er/-ir буква -i- между гласными превращается в -y-: ' +
          'leer → leí, leíste, leyó, leímos, leísteis, leyeron; ' +
          'oír → oí, oíste, oyó, oímos, oísteis, oyeron; ' +
          'caer → caí, caíste, cayó, caímos, caísteis, cayeron. ' +
          'В тексте: «leyó libros de botánica».',
      },
    ],
  },

  {
    id: 'a2-007',
    level: 'A2',
    day: 7,
    title: 'La rueda pinchada',
    text:
      'Hace dos años hice el Camino de Santiago en bicicleta con mi amigo Daniel. ' +
      'El cuarto día tuvimos un susto curioso. ' +
      'A las tres de la tarde, en una carretera cerca de Burgos, la rueda de mi bici se pinchó de repente.\n\n' +
      'Como no llevamos repuesto, paramos al borde del camino. ' +
      'Después de media hora apareció un peregrino mayor, un tal Eduardo, con barba blanca y mochila enorme. ' +
      'Sacó un parche de su bolsillo y reparó la rueda en diez minutos. ' +
      'No quiso aceptar dinero. ' +
      'Nos dio dos manzanas y siguió su camino.\n\n' +
      'Aquel hombre nos salvó la tarde. ' +
      'Llegamos a Burgos antes del anochecer y dormimos como dos angelitos.',
    vocabulary: [
      {
        word: 'el Camino de Santiago',
        translation: 'Путь Святого Иакова — паломнический маршрут к Сантьяго-де-Компостела',
        example: 'Hice el Camino de Santiago en bicicleta.',
      },
      {
        word: 'la bici (la bicicleta)',
        translation: 'велосипед; ir en bici — ехать на велосипеде',
        example: 'la rueda de mi bici',
      },
      {
        word: 'el susto',
        translation: 'испуг; неприятный сюрприз (dar un susto — испугать)',
        example: 'Tuvimos un susto curioso.',
      },
      {
        word: 'la carretera',
        translation: 'шоссе, трасса (la carretera nacional — национальная трасса)',
        example: 'en una carretera cerca de Burgos',
      },
      {
        word: 'la rueda',
        translation: 'колесо (la rueda delantera / trasera — переднее / заднее)',
        example: 'La rueda de mi bici se pinchó.',
      },
      {
        word: 'pincharse',
        translation: 'проколоться (о колесе); pinchar — проколоть, уколоть',
        example: 'La rueda se pinchó de repente.',
      },
      {
        word: 'de repente',
        translation: 'вдруг, внезапно (синоним de pronto)',
        example: 'La rueda se pinchó de repente.',
      },
      {
        word: 'el repuesto',
        translation: 'запаска, запасная деталь (la rueda de repuesto)',
        example: 'No llevamos repuesto.',
      },
      {
        word: 'el borde',
        translation: 'край (al borde del camino — на обочине)',
        example: 'Paramos al borde del camino.',
      },
      {
        word: 'el peregrino / la peregrina',
        translation: 'паломник / паломница (peregrinos del Camino — путники на Пути)',
        example: 'Apareció un peregrino mayor.',
      },
      {
        word: 'la barba',
        translation: 'борода (con barba blanca — с седой бородой)',
        example: 'un peregrino con barba blanca',
      },
      {
        word: 'el parche',
        translation: 'заплатка (для камеры колеса) — un parche para la rueda',
        example: 'Sacó un parche de su bolsillo.',
      },
      {
        word: 'el bolsillo',
        translation: 'карман (de bolsillo — карманный)',
        example: 'Sacó un parche del bolsillo.',
      },
      {
        word: 'el anochecer',
        translation: 'наступление ночи, сумерки (antes del anochecer — до темноты)',
        example: 'Llegamos antes del anochecer.',
      },
    ],
    questions: [
      {
        q: '¿Cómo hicieron el Camino de Santiago?',
        options: ['A pie', 'En bicicleta', 'En coche'],
        correct: 1,
      },
      {
        q: '¿Qué le pasó a la rueda?',
        options: ['Se pinchó', 'Se rompió', 'Se cayó'],
        correct: 0,
      },
      {
        q: '¿Qué les dio el peregrino al final?',
        options: ['Dinero', 'Agua', 'Dos manzanas'],
        correct: 2,
      },
    ],
    grammar_notes: [
      {
        topic: 'Hace + tiempo + Indefinido',
        note:
          '«Hace dos años hice el Camino» = «два года назад я прошёл Путь». ' +
          'Формула: hace + срок + глагол в Indefinido. Порядок гибкий: ' +
          '«Hice el Camino hace dos años» — смысл тот же. Маркер — для законченных событий, привязанных ко времени.',
      },
      {
        topic: 'Indefinido: querer, poder, saber — особые оттенки',
        note:
          'В Indefinido эти глаголы звучат сильнее, чем в Presente: ' +
          'querer → quise (захотел / попытался); no quise (отказался). ' +
          'poder → pude (смог сделать); no pude (не смог, не удалось). ' +
          'saber → supe (узнал, выяснил), а не «знал». В тексте: «No quiso aceptar dinero» = «отказался брать».',
      },
    ],
  },

  {
    id: 'a2-008',
    level: 'A2',
    day: 8,
    title: 'Mi primer viaje a España',
    text:
      'Mi primer viaje a España fue en 2014, después de mi último examen de universidad. ' +
      'Compré un billete barato a Madrid y reservé una habitación en un albergue del centro. ' +
      'Aterricé a las dos de la madrugada, agotado.\n\n' +
      'Por la mañana salí a la calle y me perdí enseguida. ' +
      'Pregunté a un señor en una panadería. ' +
      'Él me explicó el camino con mucha paciencia y me regaló un cruasán. ' +
      'Aquel pequeño gesto me sorprendió mucho.\n\n' +
      'Pasé cinco días en Madrid. ' +
      'Visité el Museo del Prado, paseé por El Retiro y probé los churros con chocolate de San Ginés. ' +
      'Una tarde fui a un partido del Atlético. ' +
      'Volví a casa enamorado del país. Desde entonces he vuelto siete veces más.',
    vocabulary: [
      {
        word: 'reservar',
        translation: 'бронировать (una habitación, una mesa); la reserva — бронь',
        example: 'Reservé una habitación en un albergue.',
      },
      {
        word: 'el albergue',
        translation: 'хостел; приют для паломников на Камино',
        example: 'un albergue del centro',
      },
      {
        word: 'aterrizar',
        translation: 'приземляться (el aterrizaje — посадка)',
        example: 'Aterricé a las dos de la madrugada.',
      },
      {
        word: 'agotado, -a',
        translation: 'измотанный, очень уставший (estar agotado — быть выжатым)',
        example: 'Aterricé agotado.',
      },
      {
        word: 'perderse',
        translation: 'теряться, заблудиться (Indef: me perdí, te perdiste…)',
        example: 'Me perdí enseguida.',
      },
      {
        word: 'la paciencia',
        translation: 'терпение (tener paciencia — иметь терпение; perder la paciencia — терять терпение)',
        example: 'Me explicó el camino con mucha paciencia.',
      },
      {
        word: 'el cruasán',
        translation: 'круассан (заимствование из французского; в Испании пишут именно так)',
        example: 'Me regaló un cruasán.',
      },
      {
        word: 'el gesto',
        translation: 'жест; поступок (un gesto amable — добрый жест)',
        example: 'Aquel pequeño gesto me sorprendió.',
      },
      {
        word: 'el Museo del Prado',
        translation: 'Музей Прадо — главный художественный музей Мадрида (Веласкес, Гойя)',
        example: 'Visité el Museo del Prado.',
      },
      {
        word: 'El Retiro',
        translation: 'Парк Ретиро в центре Мадрида (полное название Parque del Buen Retiro)',
        example: 'paseé por El Retiro',
      },
      {
        word: 'San Ginés',
        translation: 'Chocolatería San Ginés — легендарное кафе в Мадриде, открытое с 1894 г.',
        example: 'los churros con chocolate de San Ginés',
      },
      {
        word: 'el partido',
        translation: 'матч (también: партия в политике); el partido del Atlético',
        example: 'Fui a un partido del Atlético.',
      },
      {
        word: 'enamorarse de',
        translation: 'влюбиться в (estar enamorado de — быть влюблённым в)',
        example: 'Volví enamorado del país.',
      },
      {
        word: 'desde entonces',
        translation: 'с тех пор (синоним de aquel momento en adelante)',
        example: 'Desde entonces he vuelto siete veces más.',
      },
    ],
    questions: [
      {
        q: '¿Cuándo viajó a España por primera vez?',
        options: ['En 2010', 'En 2014', 'En 2018'],
        correct: 1,
      },
      {
        q: '¿Quién le regaló un cruasán?',
        options: ['El recepcionista del albergue', 'Un taxista', 'Un señor en una panadería'],
        correct: 2,
      },
      {
        q: '¿Cuántas veces más ha vuelto a España desde entonces?',
        options: ['Tres', 'Cinco', 'Siete'],
        correct: 2,
      },
    ],
    grammar_notes: [
      {
        topic: 'Contraste Indefinido / Pretérito Perfecto',
        note:
          'Indefinido — для закрытой поездки 2014 года: «viajé», «pasé cinco días», «volví». ' +
          'Pretérito Perfecto — для опыта, связанного с настоящим: «desde entonces he vuelto siete veces más». ' +
          'В одном тексте оба времени стоят рядом и хорошо контрастируют. ' +
          'Сравни: «hoy he comido paella» (Perfecto) и «ayer comí paella» (Indef).',
      },
      {
        topic: 'Маркеры законченного прошлого',
        note:
          'Indefinido притягивает: en 2014, por la mañana, una tarde, aquel pequeño gesto, después de + сущ. ' +
          'В отличие от них, hoy, esta mañana, ya, todavía no, alguna vez зовут Pretérito Perfecto. ' +
          'Маркер в начале предложения — лучшая подсказка для выбора времени.',
      },
    ],
  },

  {
    id: 'a2-009',
    level: 'A2',
    day: 9,
    title: 'Los San Fermines de Pamplona',
    text:
      'En julio de 2017 viajé a Pamplona con tres amigos para vivir los San Fermines. ' +
      'Llegamos el día seis por la noche, muy emocionados. ' +
      'Nos pusimos la camisa blanca y el pañuelo rojo y bajamos a la plaza.\n\n' +
      'A medianoche escuchamos el chupinazo, el cohete que inaugura las fiestas. ' +
      'La multitud gritó, cantó y brindó hasta el amanecer. ' +
      'Yo nunca vi tanta gente junta en una sola plaza.\n\n' +
      'El siete de julio mis amigos corrieron el primer encierro. ' +
      'Yo no me atreví: preferí mirar desde un balcón. ' +
      'Los toros pasaron en menos de tres minutos. ' +
      'Pablo tropezó, cayó y se levantó rapidísimo. ' +
      'Por suerte, nadie de nosotros se hizo daño.',
    vocabulary: [
      {
        word: 'los San Fermines',
        translation: 'Сан-Фермин — праздник в Памплоне с 6 по 14 июля (encierro, бои быков, музыка)',
        example: 'Viajé a Pamplona para vivir los San Fermines.',
      },
      {
        word: 'emocionado, -a',
        translation: 'взволнованный, эмоциональный (от emoción)',
        example: 'Llegamos muy emocionados.',
      },
      {
        word: 'la medianoche',
        translation: 'полночь (a medianoche — в полночь; антоним el mediodía — полдень)',
        example: 'A medianoche escuchamos el chupinazo.',
      },
      {
        word: 'el chupinazo',
        translation: 'чупинасо — открывающая ракета фестиваля Сан-Фермин 6 июля в 12:00',
        example: 'Escuchamos el chupinazo.',
      },
      {
        word: 'el cohete',
        translation: 'ракета (фейерверк или космическая)',
        example: 'el cohete que inaugura las fiestas',
      },
      {
        word: 'inaugurar',
        translation: 'открывать (праздник, выставку); la inauguración — открытие',
        example: 'el cohete que inaugura las fiestas',
      },
      {
        word: 'la multitud',
        translation: 'толпа, множество людей (una multitud de turistas)',
        example: 'La multitud gritó y cantó.',
      },
      {
        word: 'el amanecer',
        translation: 'рассвет (al amanecer — на рассвете; антоним el anochecer)',
        example: 'cantó hasta el amanecer',
      },
      {
        word: 'el encierro',
        translation: 'бег быков по узким улицам Памплоны — символ Сан-Фермина',
        example: 'Mis amigos corrieron el primer encierro.',
      },
      {
        word: 'atreverse a',
        translation: 'отважиться, рискнуть (+ инфинитив)',
        example: 'Yo no me atreví a correr.',
      },
      {
        word: 'el toro',
        translation: 'бык (la corrida de toros — коррида; la plaza de toros — арена)',
        example: 'Los toros pasaron en menos de tres minutos.',
      },
      {
        word: 'tropezar',
        translation: 'споткнуться (e→ie: tropiezo, tropiezas, tropieza…)',
        example: 'Pablo tropezó y cayó.',
      },
      {
        word: 'hacerse daño',
        translation: 'получить травму, ушибиться (¿te has hecho daño? — ты ушибся?)',
        example: 'Nadie se hizo daño.',
      },
      {
        word: 'rapidísimo, -a',
        translation: 'очень быстрый/быстро (превосходная absoluto: rápido + -ísimo)',
        example: 'Se levantó rapidísimo.',
      },
    ],
    questions: [
      {
        q: '¿De qué color es el pañuelo de los San Fermines?',
        options: ['Blanco', 'Rojo', 'Azul'],
        correct: 1,
      },
      {
        q: '¿Qué es el chupinazo?',
        options: ['Una canción tradicional', 'Un cohete que abre las fiestas', 'Un baile típico'],
        correct: 1,
      },
      {
        q: '¿Quién corrió el encierro?',
        options: ['Todos', 'Los amigos del narrador', 'Solo el narrador'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Indefinido: poner, hacer',
        note:
          'poner: puse, pusiste, puso, pusimos, pusisteis, pusieron. ' +
          'hacer: hice, hiciste, hizo (с -z- по орфографии), hicimos, hicisteis, hicieron. ' +
          'В тексте: «Nos pusimos la camisa blanca», «nadie se hizo daño».',
      },
      {
        topic: 'Indefinido: ver, dar — 1 и 3 л. без ударения',
        note:
          'У коротких глаголов ver и dar формы 1 и 3 л. ед. ч. пишутся без ударения: ' +
          'ver → vi, viste, vio, vimos, visteis, vieron; ' +
          'dar → di, diste, dio, dimos, disteis, dieron. ' +
          'В тексте: «Yo nunca vi tanta gente».',
      },
    ],
  },

  {
    id: 'a2-010',
    level: 'A2',
    day: 10,
    title: 'El día más importante de mi vida',
    text:
      'El día más importante de mi vida fue el catorce de abril de 2016. ' +
      'Aquella mañana mi mujer me despertó a las cinco. ' +
      '«Carlos, ya empezó», dijo en voz baja, con una sonrisa nerviosa. ' +
      'Cogí las llaves y la pequeña maleta del bebé y bajamos al coche.\n\n' +
      'En el hospital de Salamanca todo pasó muy deprisa. ' +
      'Después de cuatro horas larguísimas, la matrona vino y me dijo: «Felicidades, papá». ' +
      'Entré en la sala y vi por primera vez a mi hija Lucía.\n\n' +
      'Aquel día comprendí por fin lo que mis padres sintieron cuando yo nací. ' +
      'Llamé a toda la familia, lloré como un niño y no dormí en treinta horas. ' +
      'Pero fui más feliz que nunca.',
    vocabulary: [
      {
        word: 'despertar / despertarse',
        translation: 'будить (кого-то) / просыпаться (возвратный). e→ie',
        example: 'Mi mujer me despertó a las cinco.',
      },
      {
        word: 'en voz baja',
        translation: 'тихим голосом, шёпотом (антоним en voz alta — громко)',
        example: 'Dijo en voz baja.',
      },
      {
        word: 'nervioso, -a',
        translation: 'нервный, взволнованный (estar nervioso — нервничать)',
        example: 'con una sonrisa nerviosa',
      },
      {
        word: 'el bebé',
        translation: 'младенец, малыш (с маленькой буквы; род всегда мужской)',
        example: 'la pequeña maleta del bebé',
      },
      {
        word: 'deprisa',
        translation: 'быстро, в спешке (синоним rápidamente; антоним despacio)',
        example: 'Todo pasó muy deprisa.',
      },
      {
        word: 'larguísimo, -a',
        translation: 'очень длинный (превосходная absoluto: largo + -ísimo)',
        example: 'cuatro horas larguísimas',
      },
      {
        word: 'la matrona',
        translation: 'акушерка (медсестра, принимающая роды)',
        example: 'La matrona vino y me dijo: «Felicidades».',
      },
      {
        word: '¡Felicidades!',
        translation: 'поздравляю! (универсальное; ¡Feliz cumpleaños! — с днём рождения)',
        example: 'Felicidades, papá.',
      },
      {
        word: 'la sala',
        translation: 'зал; палата (la sala de partos — родильное отделение)',
        example: 'Entré en la sala.',
      },
      {
        word: 'comprender',
        translation: 'понимать (синоним entender; comprender una situación)',
        example: 'Aquel día comprendí lo que sintieron mis padres.',
      },
      {
        word: 'sentir',
        translation: 'чувствовать (e→ie в Presente; e→i в 3-м л. Indefinido: sintió, sintieron)',
        example: 'lo que mis padres sintieron cuando yo nací',
      },
      {
        word: 'llorar',
        translation: 'плакать (llorar de alegría / de pena — плакать от радости / от горя)',
        example: 'Lloré como un niño.',
      },
      {
        word: 'nacer',
        translation: 'рождаться (Indef: nací, naciste, nació, nacimos, nacisteis, nacieron)',
        example: 'cuando yo nací',
      },
      {
        word: 'más ... que nunca',
        translation: 'как никогда (más feliz que nunca — счастливее, чем когда-либо)',
        example: 'Fui más feliz que nunca.',
      },
    ],
    questions: [
      {
        q: '¿Cuándo nació la hija?',
        options: ['El catorce de abril de 2016', 'En enero de 2016', 'En 2018'],
        correct: 0,
      },
      {
        q: '¿Quién despertó al narrador esa mañana?',
        options: ['Su madre', 'Su mujer', 'El médico'],
        correct: 1,
      },
      {
        q: '¿Cómo se llama la hija?',
        options: ['Marta', 'Lucía', 'Sofía'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Indefinido: decir, venir',
        note:
          'decir: dije, dijiste, dijo, dijimos, dijisteis, dijeron (3 л. мн. — dijeron, без -i-!). ' +
          'venir: vine, viniste, vino, vinimos, vinisteis, vinieron. ' +
          'Это «голосовые» глаголы рассказа — постоянно вводят прямую речь: «—Felicidades, papá— me dijo».',
      },
      {
        topic: 'Indefinido в обзорной фразе',
        note:
          '«El día más importante de mi vida fue…» — типичная Indefinido-формула для подведения итогов одного события. ' +
          'Сравни с Perfecto: «Es el día más importante que he vivido» — связь с настоящим, опыт длится. ' +
          'Indefinido «закрывает» событие как точку на временной линии.',
      },
    ],
  },

  {
    id: 'a2-011',
    level: 'A2',
    day: 11,
    title: 'La casa de mis abuelos',
    text:
      'Cuando era pequeño, mis veranos eran siempre los mismos: ocho semanas en la casa de mis abuelos, ' +
      'en un pueblo de Asturias. La casa tenía dos plantas y un tejado de pizarra negra. ' +
      'Olía a leña y a manzanas. En el salón había una chimenea enorme; mi abuelo Antón la encendía cada tarde, incluso en julio.\n\n' +
      'Mi abuela Pilar siempre llevaba un delantal azul y unas zapatillas viejas. ' +
      'Yo bajaba al huerto con ella y recogíamos tomates y judías verdes. ' +
      'Por la noche, mi abuelo nos contaba cuentos antiguos sobre lobos y pastores.\n\n' +
      'Una tarde de agosto, mientras yo leía en el patio, llegó una tormenta tremenda. ' +
      'La luz se fue durante tres horas. ' +
      'Encendimos velas en la cocina y mi abuela preparó chocolate caliente. ' +
      'Aquella tarde a oscuras se quedó para siempre en mi memoria, con la voz tranquila de mi abuelo entre las sombras.',
    vocabulary: [
      {
        word: 'la planta',
        translation: 'этаж (la primera planta — второй этаж по нашим меркам; la planta baja — нулевой)',
        example: 'La casa tenía dos plantas.',
      },
      {
        word: 'el tejado',
        translation: 'крыша (un tejado de pizarra / de tejas)',
        example: 'un tejado de pizarra negra',
      },
      {
        word: 'la pizarra',
        translation: 'сланец; школьная доска (двойное значение)',
        example: 'un tejado de pizarra',
      },
      {
        word: 'oler a',
        translation: 'пахнуть чем-то (irreg.: huelo, hueles, huele…)',
        example: 'Olía a leña y a manzanas.',
      },
      {
        word: 'la leña',
        translation: 'дрова (cortar leña — рубить дрова; антоним el carbón — уголь)',
        example: 'Olía a leña.',
      },
      {
        word: 'la chimenea',
        translation: 'камин; печная труба',
        example: 'En el salón había una chimenea enorme.',
      },
      {
        word: 'encender',
        translation: 'зажигать (e→ie: enciendo, enciendes…; антоним apagar)',
        example: 'La encendía cada tarde.',
      },
      {
        word: 'el delantal',
        translation: 'фартук (носят повара и хозяйки на кухне)',
        example: 'Mi abuela llevaba un delantal azul.',
      },
      {
        word: 'el huerto',
        translation: 'огород (el jardín — сад декоративный; el huerto — где растёт еда)',
        example: 'Yo bajaba al huerto con ella.',
      },
      {
        word: 'las judías verdes',
        translation: 'стручковая фасоль (la judía blanca — белая фасоль)',
        example: 'Recogíamos tomates y judías verdes.',
      },
      {
        word: 'el cuento',
        translation: 'сказка, рассказ (contar un cuento — рассказывать сказку)',
        example: 'Mi abuelo nos contaba cuentos antiguos.',
      },
      {
        word: 'el lobo',
        translation: 'волк (la loba — волчица; герой испанских сказок)',
        example: 'cuentos antiguos sobre lobos y pastores',
      },
      {
        word: 'la tormenta',
        translation: 'гроза, буря (la tormenta de verano — летняя гроза)',
        example: 'Llegó una tormenta tremenda.',
      },
      {
        word: 'la vela',
        translation: 'свеча (encender una vela — зажечь свечу)',
        example: 'Encendimos velas en la cocina.',
      },
      {
        word: 'a oscuras',
        translation: 'в темноте (estar a oscuras — сидеть в темноте; la oscuridad — темнота)',
        example: 'Aquella tarde a oscuras se quedó en mi memoria.',
      },
    ],
    questions: [
      {
        q: '¿Dónde pasaba los veranos el narrador?',
        options: ['En Galicia', 'En Asturias', 'En Cataluña'],
        correct: 1,
      },
      {
        q: '¿Qué llevaba siempre la abuela Pilar?',
        options: ['Un delantal azul', 'Un sombrero', 'Un vestido rojo'],
        correct: 0,
      },
      {
        q: '¿Cuánto duró el corte de luz?',
        options: ['Una hora', 'Tres horas', 'Toda la noche'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Pretérito Imperfecto: окончания регулярных глаголов',
        note:
          'У -ar глаголов в Imperfecto окончания -aba, -abas, -aba, -ábamos, -abais, -aban. ' +
          'У -er и -ir — одинаковые: -ía, -ías, -ía, -íamos, -íais, -ían. ' +
          'В тексте: -ar — «llevaba un delantal», «bajaba al huerto», «contaba cuentos»; ' +
          '-er/-ir — «tenía dos plantas», «olía a leña», «encendía la chimenea», «leía en el patio». ' +
          'Это базовое время для описания «как было раньше».',
      },
      {
        topic: 'Imperfecto vs Indefinido: фон и событие',
        note:
          'Imperfecto рисует декорации (era pequeño, tenía dos plantas, olía a leña, mi abuelo encendía la chimenea) — ' +
          'это длящийся, повторяющийся фон. Indefinido вводит конкретное событие, разрывающее фон: ' +
          '«llegó una tormenta», «la luz se fue», «encendimos velas». Эти два времени дополняют друг друга, ' +
          'как фотография (Imperfecto) и кадр короткого видео (Indefinido).',
      },
    ],
  },

  {
    id: 'a2-012',
    level: 'A2',
    day: 12,
    title: 'Mi colegio de Cuenca',
    text:
      'Cuando tenía nueve años, vivía en Cuenca y estudiaba en un colegio pequeño cerca del casco antiguo. ' +
      'Todos los días seguíamos la misma rutina y a mí me encantaba.\n\n' +
      'Las clases empezaban a las nueve. La profesora doña Mercedes nos saludaba uno por uno desde la puerta. ' +
      'Por la mañana teníamos matemáticas, lengua y ciencias. ' +
      'A las once sonaba el timbre del recreo y salíamos corriendo al patio. ' +
      'Yo siempre llevaba un bocadillo de jamón y un cartón de zumo en la mochila.\n\n' +
      'Después del recreo, doña Mercedes leía un capítulo de un libro en voz alta. ' +
      'Yo cerraba los ojos y la imaginaba todo. A la una volvíamos a casa para comer.\n\n' +
      'Un viernes de mayo, doña Mercedes faltó por primera vez en cinco años. Estaba enferma. ' +
      'Aquel día comprendimos cuánto la queríamos.',
    vocabulary: [
      {
        word: 'el casco antiguo',
        translation: 'старый город, исторический центр (синоним el casco histórico)',
        example: 'cerca del casco antiguo',
      },
      {
        word: 'la rutina',
        translation: 'распорядок дня, привычный уклад (la rutina diaria)',
        example: 'Seguíamos la misma rutina.',
      },
      {
        word: 'encantar (me encanta)',
        translation: 'очень нравиться. Глагол типа gustar: me encanta, te encanta…',
        example: 'A mí me encantaba.',
      },
      {
        word: 'uno por uno',
        translation: 'один за другим, поодиночке (синоним uno a uno)',
        example: 'Nos saludaba uno por uno.',
      },
      {
        word: 'las matemáticas',
        translation: 'математика (в испанском всегда мн.ч.!)',
        example: 'Teníamos matemáticas y lengua.',
      },
      {
        word: 'la lengua',
        translation: 'язык (школьный предмет: la lengua española); язык во рту',
        example: 'Teníamos matemáticas, lengua y ciencias.',
      },
      {
        word: 'las ciencias',
        translation: 'естественные науки как школьный предмет (мн.ч.)',
        example: 'Teníamos lengua y ciencias.',
      },
      {
        word: 'el timbre',
        translation: 'звонок (дверной или школьный); тембр голоса',
        example: 'Sonaba el timbre del recreo.',
      },
      {
        word: 'el recreo',
        translation: 'перемена в школе (la hora del recreo — большая перемена)',
        example: 'el timbre del recreo',
      },
      {
        word: 'el patio',
        translation: 'двор; патио — внутренний дворик испанского дома',
        example: 'Salíamos corriendo al patio.',
      },
      {
        word: 'la mochila',
        translation: 'рюкзак (классика для школы и путешествий)',
        example: 'un bocadillo en la mochila',
      },
      {
        word: 'el cartón',
        translation: 'картон; пакет из картона (un cartón de zumo / de leche)',
        example: 'un cartón de zumo',
      },
      {
        word: 'el capítulo',
        translation: 'глава (книги); серия (сериала)',
        example: 'Leía un capítulo en voz alta.',
      },
      {
        word: 'en voz alta',
        translation: 'вслух (антоним en voz baja — шёпотом)',
        example: 'Leía un capítulo en voz alta.',
      },
      {
        word: 'faltar',
        translation: 'отсутствовать; не хватать (me falta tiempo — мне не хватает времени)',
        example: 'Doña Mercedes faltó por primera vez.',
      },
      {
        word: 'enfermo, -a',
        translation: 'больной (estar enfermo — болеть; антоним sano — здоровый)',
        example: 'Estaba enferma.',
      },
    ],
    questions: [
      {
        q: '¿Cómo se llamaba la profesora?',
        options: ['Doña Pilar', 'Doña Mercedes', 'Doña Carmen'],
        correct: 1,
      },
      {
        q: '¿A qué hora era el recreo?',
        options: ['A las nueve', 'A las once', 'A la una'],
        correct: 1,
      },
      {
        q: '¿Por qué faltó la profesora un viernes de mayo?',
        options: ['Estaba de viaje', 'Estaba enferma', 'Tenía una boda'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Imperfecto для рутины и привычек',
        note:
          'Imperfecto — идеальное время для «todos los días», «siempre», «cada mañana», «por la mañana», «a las once». ' +
          'Это маркеры повторяемости. В тексте: «las clases empezaban a las nueve», «yo siempre llevaba un bocadillo», ' +
          '«a la una volvíamos a casa». Indefinido такие фразы не любит — он закрывает событие, а не растягивает его.',
      },
      {
        topic: 'Imperfecto + Indefinido: фон и разрыв привычки',
        note:
          'Когда привычный фон описан в Imperfecto, появление Indefinido означает разрыв: ' +
          '«Doña Mercedes nos saludaba uno por uno» (привычка) → «Un viernes de mayo, faltó por primera vez» (разрыв). ' +
          'Маркер «un viernes», «un día», «una mañana» — типичный сигнал Indefinido внутри Imperfecto-описания.',
      },
    ],
  },

  {
    id: 'a2-013',
    level: 'A2',
    day: 13,
    title: 'Los domingos de verano',
    text:
      'De pequeño, los domingos de verano eran sagrados en mi familia. ' +
      'Vivíamos en Cáceres y, en cuanto terminaba el curso, nos íbamos al campo. ' +
      'Mi padre conducía una furgoneta blanca llena de cacharros y juguetes.\n\n' +
      'La casa de campo estaba al lado de un río. ' +
      'Por la mañana, mi hermana Inés y yo bajábamos a pescar con cañas viejas. ' +
      'Casi nunca cogíamos nada, pero pasábamos horas riendo bajo los chopos. ' +
      'Al mediodía, mi madre llamaba desde la terraza: «¡A comer, que se enfría la paella!».\n\n' +
      'Por la tarde dormíamos la siesta en hamacas, entre dos árboles. ' +
      'Yo escuchaba el zumbido de las cigarras y me quedaba dormido enseguida.\n\n' +
      'Un domingo de agosto vimos pasar un zorro junto al río. ' +
      'Mi hermana sacó una foto con la cámara nueva de papá. ' +
      'Todavía la conservamos en el álbum.',
    vocabulary: [
      {
        word: 'sagrado, -a',
        translation: 'священный, неприкосновенный (un ritual sagrado)',
        example: 'Los domingos eran sagrados.',
      },
      {
        word: 'en cuanto',
        translation: 'как только (en cuanto llegó — как только пришёл)',
        example: 'En cuanto terminaba el curso, nos íbamos.',
      },
      {
        word: 'la furgoneta',
        translation: 'фургон (la camioneta — пикап в Лат. Америке)',
        example: 'Una furgoneta blanca llena de cacharros.',
      },
      {
        word: 'el cacharro',
        translation: 'старая вещь, рухлядь; кухонная утварь (los cacharros de la cocina)',
        example: 'llena de cacharros y juguetes',
      },
      {
        word: 'el juguete',
        translation: 'игрушка (la tienda de juguetes — магазин игрушек)',
        example: 'cacharros y juguetes',
      },
      {
        word: 'el río',
        translation: 'река (el Tajo, el Guadalquivir, el Ebro — главные испанские реки)',
        example: 'La casa estaba al lado de un río.',
      },
      {
        word: 'pescar',
        translation: 'рыбачить, ловить рыбу (la pesca — рыбалка; el pescador — рыбак)',
        example: 'Bajábamos a pescar con cañas viejas.',
      },
      {
        word: 'la caña (de pescar)',
        translation: 'удочка; стебель тростника',
        example: 'pescar con cañas viejas',
      },
      {
        word: 'el chopo',
        translation: 'тополь — типичное дерево испанских речных берегов',
        example: 'bajo los chopos',
      },
      {
        word: 'la siesta',
        translation: 'послеобеденный сон (dormir la siesta — священная традиция Испании)',
        example: 'Dormíamos la siesta en hamacas.',
      },
      {
        word: 'la hamaca',
        translation: 'гамак (мн.ч. las hamacas)',
        example: 'en hamacas, entre dos árboles',
      },
      {
        word: 'el zumbido',
        translation: 'жужжание; гудение (от zumbar)',
        example: 'el zumbido de las cigarras',
      },
      {
        word: 'la cigarra',
        translation: 'цикада — символ испанского лета на юге',
        example: 'el zumbido de las cigarras',
      },
      {
        word: 'el zorro',
        translation: 'лиса; хитрый человек (es un zorro)',
        example: 'Vimos pasar un zorro junto al río.',
      },
    ],
    questions: [
      {
        q: '¿Adónde iba la familia los domingos de verano?',
        options: ['Al campo', 'A la playa', 'A la sierra'],
        correct: 0,
      },
      {
        q: '¿Qué hacían el narrador e Inés por la mañana?',
        options: ['Cocinaban', 'Pescaban', 'Leían'],
        correct: 1,
      },
      {
        q: '¿Qué animal vieron junto al río un domingo de agosto?',
        options: ['Un zorro', 'Un ciervo', 'Un jabalí'],
        correct: 0,
      },
    ],
    grammar_notes: [
      {
        topic: 'Imperfecto: ser, ir, ver — три неправильных',
        note:
          'Только три глагола в Imperfecto имеют неправильные формы. ' +
          'ser: era, eras, era, éramos, erais, eran. ' +
          'ir: iba, ibas, iba, íbamos, ibais, iban. ' +
          'ver: veía, veías, veía, veíamos, veíais, veían (i сохраняется, как у регулярных -er). ' +
          'В тексте: «los domingos eran sagrados», «nos íbamos al campo».',
      },
      {
        topic: 'Привычки в прошлом — Imperfecto',
        note:
          'Imperfecto рассказывает о том, что повторялось много раз, без указания на конкретный случай: ' +
          '«vivíamos», «bajábamos», «pasábamos», «dormíamos», «escuchaba». ' +
          'Русский эквивалент — «бывало, мы…», «мы постоянно…». Это время устойчивой картины прошлого, ' +
          'а не отдельных дней. «Un domingo de agosto vimos un zorro» уже выбивается из ритма — отсюда Indefinido.',
      },
    ],
  },

  {
    id: 'a2-014',
    level: 'A2',
    day: 14,
    title: 'Toledo, ayer y hoy',
    text:
      'Cuando mi padre era joven, en los años setenta, Toledo era una ciudad casi vacía los fines de semana. ' +
      'Apenas pasaban turistas por las calles estrechas. ' +
      'Los artesanos vivían y trabajaban dentro de la muralla. ' +
      'Mi padre recuerda el olor a metal de los talleres de espadas y la voz de un viejo afilador que recorría el barrio en bicicleta.\n\n' +
      'Hoy todo es distinto. Cada mañana llegan veinte autobuses de turistas desde Madrid. ' +
      'Las tiendas de espadas son ahora bazares con imanes y postales. ' +
      'Los artesanos auténticos quedan pocos y trabajan en pueblos cercanos.\n\n' +
      'El año pasado volví con mi padre. Subimos al mirador del Valle al atardecer. ' +
      'Él se quedó callado un buen rato, mirando la ciudad dorada bajo el sol. ' +
      '«Aquí, hace cuarenta años, había silencio», me dijo. ' +
      'La nostalgia es así: vive en los detalles que ya nadie ve.',
    vocabulary: [
      {
        word: 'apenas',
        translation: 'едва, почти не (apenas conozco — едва знаком)',
        example: 'Apenas pasaban turistas.',
      },
      {
        word: 'estrecho, -a',
        translation: 'узкий (антоним ancho — широкий)',
        example: 'por las calles estrechas',
      },
      {
        word: 'el artesano / la artesana',
        translation: 'ремесленник, мастер ручной работы (la artesanía — рукоделие)',
        example: 'Los artesanos vivían dentro de la muralla.',
      },
      {
        word: 'la muralla',
        translation: 'городская стена (la muralla de Ávila — знаменитая стена Авилы)',
        example: 'dentro de la muralla',
      },
      {
        word: 'la espada',
        translation: 'меч, шпага (Toledo знаменит своими историческими клинками)',
        example: 'los talleres de espadas',
      },
      {
        word: 'el afilador',
        translation: 'точильщик ножей — старая бродячая профессия, ездили на велосипеде со свистулькой',
        example: 'la voz de un viejo afilador',
      },
      {
        word: 'el bazar',
        translation: 'базар; сувенирная лавка с дешёвыми товарами',
        example: 'bazares con imanes y postales',
      },
      {
        word: 'la postal',
        translation: 'почтовая открытка (mandar una postal — отправить открытку)',
        example: 'bazares con imanes y postales',
      },
      {
        word: 'auténtico, -a',
        translation: 'настоящий, подлинный (un cuero auténtico)',
        example: 'Los artesanos auténticos quedan pocos.',
      },
      {
        word: 'cercano, -a',
        translation: 'близкий (un pueblo cercano; un familiar cercano)',
        example: 'trabajan en pueblos cercanos',
      },
      {
        word: 'el mirador',
        translation: 'смотровая площадка (el mirador del Valle — обзорная точка над Толедо)',
        example: 'Subimos al mirador del Valle.',
      },
      {
        word: 'callado, -a',
        translation: 'молчаливый, замолчавший (quedarse callado — замолчать)',
        example: 'Se quedó callado un buen rato.',
      },
      {
        word: 'un buen rato',
        translation: 'довольно долго (un rato — некоторое время; un buen rato — приличный отрезок)',
        example: 'Se quedó callado un buen rato.',
      },
      {
        word: 'dorado, -a',
        translation: 'золотистый, золотой по цвету (el oro — золото)',
        example: 'la ciudad dorada bajo el sol',
      },
      {
        word: 'la nostalgia',
        translation: 'ностальгия, тоска по прошлому (tener nostalgia de — скучать по)',
        example: 'La nostalgia vive en los detalles.',
      },
    ],
    questions: [
      {
        q: '¿Cómo era Toledo en los años setenta los fines de semana?',
        options: ['Lleno de turistas', 'Casi vacío', 'Muy ruidoso'],
        correct: 1,
      },
      {
        q: '¿Qué hacían los artesanos antiguamente?',
        options: ['Vivían y trabajaban dentro de la muralla', 'Trabajaban en Madrid', 'Vendían recuerdos'],
        correct: 0,
      },
      {
        q: '¿Qué dijo el padre en el mirador del Valle?',
        options: ['«Toledo está mejor ahora»', '«Hace cuarenta años, había silencio»', '«Aquí no quiero volver»'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Imperfecto vs Presente: «antes» / «hoy»',
        note:
          'Чтобы сравнить «раньше» и «сейчас», испанский использует Imperfecto + Presente: ' +
          '«antes vivían dentro de la muralla» (Imperfecto) // «hoy trabajan en pueblos cercanos» (Presente). ' +
          'Это формула рассказа об изменениях. Маркеры: antes, en los años setenta, en aquella época / hoy, ahora, en la actualidad.',
      },
      {
        topic: 'Había + sustantivo: безличное Imperfecto',
        note:
          'Глагол haber в Imperfecto в значении «было / был кто-то / что-то» — только форма «había»: ' +
          'había silencio, había muchos turistas, había una tienda en cada esquina. ' +
          'Никогда не «habían» (это ошибка для существования). В тексте: «aquí había silencio».',
      },
    ],
  },

  {
    id: 'a2-015',
    level: 'A2',
    day: 15,
    title: 'Cómo conocí a Marta',
    text:
      'Conocí a Marta el dos de septiembre de 2013, durante una boda en Vigo. ' +
      'Aún recuerdo cómo era ella aquel día: llevaba un vestido verde menta, gafas redondas y una sonrisa tímida. ' +
      'Estaba sola en una mesa cerca del jardín y miraba el mar.\n\n' +
      'Yo era amigo del novio y andaba bastante perdido entre cien invitados. ' +
      'De repente, alguien me empujó sin querer y mi copa de vino fue a parar sobre el mantel de Marta. ' +
      'Le pedí mil disculpas y ella se rio en silencio.\n\n' +
      'Hablamos toda la cena. ' +
      'Le encantaban los libros de viajes, odiaba el reguetón y trabajaba como veterinaria en Pontevedra. ' +
      'Cuando terminó el banquete, le dejé mi teléfono en una servilleta.\n\n' +
      'Marta me llamó al día siguiente. ' +
      'Doce años más tarde, todavía guardamos esa servilleta entre las páginas de un libro.',
    vocabulary: [
      {
        word: 'tímido, -a',
        translation: 'застенчивый, робкий (la timidez — застенчивость)',
        example: 'una sonrisa tímida',
      },
      {
        word: 'redondo, -a',
        translation: 'круглый (la mesa redonda; gafas redondas)',
        example: 'gafas redondas',
      },
      {
        word: 'perdido, -a',
        translation: 'потерянный, заблудившийся (estar perdido — быть в растерянности)',
        example: 'Andaba bastante perdido.',
      },
      {
        word: 'el invitado / la invitada',
        translation: 'приглашённый, гость (la lista de invitados)',
        example: 'entre cien invitados',
      },
      {
        word: 'empujar',
        translation: 'толкать (empujar la puerta; un empujón — толчок)',
        example: 'Alguien me empujó sin querer.',
      },
      {
        word: 'sin querer',
        translation: 'нечаянно, не нарочно (антоним a propósito)',
        example: 'Me empujó sin querer.',
      },
      {
        word: 'la copa',
        translation: 'бокал (una copa de vino); тж. кубок в спорте',
        example: 'mi copa de vino',
      },
      {
        word: 'ir a parar',
        translation: 'оказаться где-то, попасть (el balón fue a parar al jardín)',
        example: 'Mi copa fue a parar sobre el mantel.',
      },
      {
        word: 'el mantel',
        translation: 'скатерть (poner el mantel — стелить скатерть)',
        example: 'el mantel de Marta',
      },
      {
        word: 'pedir disculpas',
        translation: 'извиняться, просить прощения (disculparse — извиниться)',
        example: 'Le pedí mil disculpas.',
      },
      {
        word: 'en silencio',
        translation: 'молча, в тишине (el silencio — тишина)',
        example: 'Ella se rio en silencio.',
      },
      {
        word: 'odiar',
        translation: 'ненавидеть (el odio — ненависть)',
        example: 'Odiaba el reguetón.',
      },
      {
        word: 'el reguetón',
        translation: 'реггетон — латиноамериканский жанр, популярный и спорный в Испании',
        example: 'Odiaba el reguetón.',
      },
      {
        word: 'el veterinario / la veterinaria',
        translation: 'ветеринар (тж. la veterinaria — «ветеринария» как наука)',
        example: 'Trabajaba como veterinaria.',
      },
      {
        word: 'al día siguiente',
        translation: 'на следующий день (синоним al otro día)',
        example: 'Marta me llamó al día siguiente.',
      },
    ],
    questions: [
      {
        q: '¿Dónde conoció el narrador a Marta?',
        options: ['En una boda en Vigo', 'En una fiesta en Madrid', 'En un viaje a Pontevedra'],
        correct: 0,
      },
      {
        q: '¿Qué pasó con la copa de vino?',
        options: ['Se rompió en el suelo', 'Fue a parar sobre el mantel de Marta', 'La bebió Marta'],
        correct: 1,
      },
      {
        q: '¿De qué trabajaba Marta?',
        options: ['De abogada', 'De veterinaria', 'De profesora'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Cuando lo/la conocí, era… — описание человека в момент знакомства',
        note:
          'Знакомство — точечное событие (Indefinido), а описание человека в момент знакомства — фон (Imperfecto): ' +
          '«Conocí a Marta… llevaba un vestido verde, era amigo del novio, trabajaba como veterinaria». ' +
          'Conocer в Indefinido значит «познакомиться», а не «знал»: la conocí = я с ней познакомился; ' +
          'la conocía = я её (уже) знал.',
      },
      {
        topic: 'Глаголы типа gustar в Imperfecto',
        note:
          'gustar, encantar, doler, parecer работают с косвенным дополнением: ' +
          'le encantaban los libros (мн.: книги нравились ей), me gustaba el cine (ед.: мне нравилось кино). ' +
          'В Imperfecto особенно частотно для прошлых пристрастий: «de pequeño me encantaba la nieve».',
      },
    ],
  },

  {
    id: 'a2-016',
    level: 'A2',
    day: 16,
    title: 'Una tarde de invierno',
    text:
      'Aquella tarde de invierno hacía un frío horrible en Madrid. ' +
      'Yo estaba en mi piso de Lavapiés, sentado en el sofá con una manta sobre las piernas. ' +
      'Leía una novela de Pérez Galdós y bebía un té caliente. ' +
      'La calefacción ronroneaba y mi gato dormía a mi lado. Todo era perfecto.\n\n' +
      'De pronto, alguien llamó al timbre con insistencia. ' +
      'Me sorprendí mucho: no esperaba a nadie. ' +
      'Abrí la puerta y vi a mi vecina Carmen, blanca como el papel. ' +
      'Sus llaves se cayeron al patio interior y ya no podía entrar en casa. ' +
      'Llevaba quince minutos en el rellano, sin chaqueta y sin móvil.\n\n' +
      'La invité a pasar y le ofrecí un té caliente. ' +
      'Mientras Carmen se calentaba las manos, llamé al portero del edificio. ' +
      'Media hora más tarde, ella ya estaba en su salón. ' +
      'Yo volví a mi libro y, casi sin querer, sonreí.',
    vocabulary: [
      {
        word: 'la manta',
        translation: 'плед, одеяло (la manta eléctrica — электроодеяло)',
        example: 'con una manta sobre las piernas',
      },
      {
        word: 'la novela',
        translation: 'роман (литературный жанр); la novela negra — детектив',
        example: 'Leía una novela.',
      },
      {
        word: 'Pérez Galdós',
        translation: 'Бенито Перес Гальдос (1843–1920) — главный испанский романист XIX в., «испанский Бальзак»',
        example: 'una novela de Pérez Galdós',
      },
      {
        word: 'la calefacción',
        translation: 'отопление (la calefacción central; encender la calefacción)',
        example: 'La calefacción ronroneaba.',
      },
      {
        word: 'ronronear',
        translation: 'мурлыкать (о кошке); тихо гудеть (об отоплении, моторе)',
        example: 'La calefacción ronroneaba.',
      },
      {
        word: 'de pronto',
        translation: 'вдруг (синоним de repente; чуть более книжный)',
        example: 'De pronto, alguien llamó al timbre.',
      },
      {
        word: 'con insistencia',
        translation: 'настойчиво (la insistencia — настойчивость)',
        example: 'llamó al timbre con insistencia',
      },
      {
        word: 'blanco como el papel',
        translation: 'белый как бумага — о цвете лица от страха или шока',
        example: 'mi vecina Carmen, blanca como el papel',
      },
      {
        word: 'Lavapiés',
        translation: 'Лавапьес — мультикультурный район в центре Мадрида, рядом с Антоном-Мартином',
        example: 'mi piso de Lavapiés',
      },
      {
        word: 'el patio interior',
        translation: 'внутренний двор-колодец (типичен для старых мадридских домов)',
        example: 'Sus llaves se cayeron al patio interior.',
      },
      {
        word: 'el rellano',
        translation: 'лестничная площадка (на каждом этаже)',
        example: 'Llevaba quince minutos en el rellano.',
      },
      {
        word: 'el portero / la portera',
        translation: 'консьерж, привратник (во многих старых испанских домах)',
        example: 'Llamé al portero del edificio.',
      },
      {
        word: 'calentarse',
        translation: 'согреваться (calentar — нагревать; e→ie: caliento, calientas…)',
        example: 'Mientras Carmen se calentaba las manos.',
      },
      {
        word: 'sonreír',
        translation: 'улыбаться (la sonrisa — улыбка; e→i: sonrío, sonríes…)',
        example: 'Casi sin querer, sonreí.',
      },
    ],
    questions: [
      {
        q: '¿Qué estaba haciendo el narrador antes del timbre?',
        options: ['Cocinaba', 'Leía y bebía té', 'Jugaba con el gato'],
        correct: 1,
      },
      {
        q: '¿Por qué Carmen no podía entrar en casa?',
        options: ['Sus llaves se cayeron al patio interior', 'Olvidó la dirección', 'Se le rompió la puerta'],
        correct: 0,
      },
      {
        q: '¿Cuánto tiempo llevaba Carmen en el rellano?',
        options: ['Cinco minutos', 'Quince minutos', 'Una hora'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Прерванное действие: Imperfecto + cuando + Indefinido',
        note:
          'Классическая схема рассказа: длящееся действие в Imperfecto + внезапный сбой в Indefinido. ' +
          '«Yo leía / mi gato dormía / la calefacción ronroneaba… cuando alguien llamó al timbre». ' +
          'Imperfecto держит сцену открытой, как полотно; Indefinido прокалывает её одной точкой. ' +
          'Альтернатива: «estaba leyendo cuando…» — Imperfecto от estar + герундий.',
      },
      {
        topic: 'Mientras + Imperfecto: параллельные действия',
        note:
          'Mientras («пока, в то время как») просит Imperfecto, потому что описывает фоновое действие, ' +
          'параллельное другому: «Mientras Carmen se calentaba las manos, llamé al portero». ' +
          'Одно действие длится (Imperfecto), второе закончилось внутри него (Indefinido).',
      },
    ],
  },

  {
    id: 'a2-017',
    level: 'A2',
    day: 17,
    title: 'Mi Madrid de los años noventa',
    text:
      'Mi Madrid de los años noventa no se parecía nada al de hoy. ' +
      'Yo tenía catorce años, vivía con mis padres en un piso de Argüelles y conocía la ciudad como la palma de mi mano. ' +
      'Por las tardes bajaba al kiosco de don Andrés a comprar el tebeo de Mortadelo. ' +
      'Costaba ciento setenta y cinco pesetas.\n\n' +
      'Los autobuses eran rojos y olían a gasolina. ' +
      'Los teléfonos públicos funcionaban con monedas y siempre había alguien gritando dentro de la cabina. ' +
      'La gente fumaba en los bares, en los aviones y hasta en el metro. ' +
      'Las tiendas cerraban a las dos para la comida y volvían a abrir a las cinco.\n\n' +
      'Un sábado de 1998 mi padre me llevó al Bernabéu por primera vez. ' +
      'Pisé el césped con la mirada, no con los pies. ' +
      'Aquella tarde decidí que el Real Madrid era mío para siempre.',
    vocabulary: [
      {
        word: 'parecerse a',
        translation: 'быть похожим на (te pareces a tu padre — ты похож на отца)',
        example: 'No se parecía nada al Madrid de hoy.',
      },
      {
        word: 'la palma de la mano',
        translation: 'ладонь (conocer como la palma de la mano — знать как свои пять пальцев)',
        example: 'Conocía la ciudad como la palma de mi mano.',
      },
      {
        word: 'el tebeo',
        translation: 'детский комикс (типично испанское слово; в Лат. Ам. — la historieta)',
        example: 'el tebeo de Mortadelo',
      },
      {
        word: 'Mortadelo',
        translation: 'Мортадело — герой испанских комиксов Ф. Ибаньеса с 1958 года',
        example: 'el tebeo de Mortadelo',
      },
      {
        word: 'la peseta',
        translation: 'песета — испанская валюта до 2002 г. (166,386 песет = 1 евро)',
        example: 'Costaba ciento setenta y cinco pesetas.',
      },
      {
        word: 'la gasolina',
        translation: 'бензин (la gasolinera — заправка)',
        example: 'olían a gasolina',
      },
      {
        word: 'la moneda',
        translation: 'монета; денежная единица (la moneda única europea — евро)',
        example: 'funcionaban con monedas',
      },
      {
        word: 'la cabina (de teléfono)',
        translation: 'телефонная будка (в 90-е стояли почти на каждом углу)',
        example: 'dentro de la cabina',
      },
      {
        word: 'fumar',
        translation: 'курить (el fumador — курильщик; prohibido fumar — курить запрещено)',
        example: 'La gente fumaba en los bares.',
      },
      {
        word: 'el avión',
        translation: 'самолёт (en avión — самолётом; el aeropuerto — аэропорт)',
        example: 'fumaba en los bares, en los aviones y hasta en el metro',
      },
      {
        word: 'el Bernabéu',
        translation: 'стадион Santiago Bernabéu — домашний стадион «Реала» в Мадриде',
        example: 'me llevó al Bernabéu por primera vez',
      },
      {
        word: 'el césped',
        translation: 'газон, трава (футбольное поле — un campo de césped)',
        example: 'Pisé el césped con la mirada.',
      },
      {
        word: 'la mirada',
        translation: 'взгляд (от mirar; una mirada triste)',
        example: 'Pisé el césped con la mirada.',
      },
      {
        word: 'los años noventa',
        translation: '90-е годы (los años setenta — 70-е; en aquella época — в ту эпоху)',
        example: 'Mi Madrid de los años noventa.',
      },
    ],
    questions: [
      {
        q: '¿Qué iba a comprar el narrador al kiosco?',
        options: ['Caramelos', 'Un tebeo', 'El periódico'],
        correct: 1,
      },
      {
        q: '¿A qué hora cerraban las tiendas para la comida?',
        options: ['A las dos', 'A las cinco', 'A las siete'],
        correct: 0,
      },
      {
        q: '¿Adónde lo llevó su padre un sábado de 1998?',
        options: ['Al Prado', 'Al Bernabéu', 'A la sierra'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Imperfecto для описания эпохи',
        note:
          'Imperfecto — единственное прошедшее время для описания «как было устроено» в определённую эпоху: ' +
          '«los autobuses eran rojos», «la gente fumaba en los bares», «las tiendas cerraban a las dos». ' +
          'Это не серия событий, а параллельная картинка ушедшего мира. ' +
          'Indefinido здесь будет ошибкой — он закрыл бы каждую сцену.',
      },
      {
        topic: 'Imperfecto: tenía X años, hacía X tiempo',
        note:
          '«Tenía catorce años» (мне было 14 лет) — стандартная формула возраста в прошлом, всегда Imperfecto. ' +
          'Сравни: «cumplí catorce años» (мне исполнилось 14) — Indefinido для самого момента дня рождения. ' +
          'Так же: «hacía un frío horrible» (стоял жуткий холод) — Imperfecto для длящейся погоды.',
      },
    ],
  },

  {
    id: 'a2-018',
    level: 'A2',
    day: 18,
    title: 'La maestra del pueblo',
    text:
      'Mi abuela Encarna fue maestra durante cuarenta y un años en un pueblo de León. ' +
      'Cuando empezó a trabajar, en 1948, tenía solo veinte años y compartía aula con cuarenta niños de edades distintas. ' +
      'No había libros para todos, así que ella escribía los textos a mano y los pasaba de un pupitre a otro.\n\n' +
      'Su sueldo era pequeñísimo y la vida en el pueblo, dura. ' +
      'En invierno, los alumnos llegaban al aula con las manos heladas, y mi abuela encendía la estufa de leña antes de empezar la clase. ' +
      'Algunas familias no podían pagar lápices, así que ella los compraba con su propio dinero.\n\n' +
      'Mi abuela se jubiló en 1989. Aquel verano, todo el pueblo organizó una fiesta en la plaza. ' +
      'Vinieron antiguos alumnos desde Madrid, Barcelona e incluso Alemania. ' +
      'Le regalaron una placa de plata. ' +
      'Ella lloró y dijo solo: «Tuve mucha suerte».',
    vocabulary: [
      {
        word: 'el maestro / la maestra',
        translation: 'учитель/учительница начальной школы (el profesor — средняя школа и универ)',
        example: 'Mi abuela fue maestra.',
      },
      {
        word: 'el aula',
        translation: 'класс (помещение). Жен. рода, но артикль «el» в ед. ч. для звучности: el aula, las aulas',
        example: 'compartía aula con cuarenta niños',
      },
      {
        word: 'compartir',
        translation: 'делить с кем-то, делиться (compartir el piso — снимать квартиру вместе)',
        example: 'Compartía aula con cuarenta niños.',
      },
      {
        word: 'el pupitre',
        translation: 'парта (мебель в классе)',
        example: 'de un pupitre a otro',
      },
      {
        word: 'a mano',
        translation: 'от руки, вручную (escribir a mano; hecho a mano — ручной работы)',
        example: 'escribía los textos a mano',
      },
      {
        word: 'helado, -a',
        translation: 'замёрзший, ледяной (las manos heladas; el agua helada). Тж. сущ. el helado — мороженое',
        example: 'con las manos heladas',
      },
      {
        word: 'la estufa',
        translation: 'печка, обогреватель (la estufa de leña — дровяная печь)',
        example: 'encendía la estufa de leña',
      },
      {
        word: 'el lápiz',
        translation: 'карандаш (мн.ч. los lápices — с -c-)',
        example: 'no podían pagar lápices',
      },
      {
        word: 'propio, -a',
        translation: 'свой собственный (con mi propio dinero — на свои собственные деньги)',
        example: 'con su propio dinero',
      },
      {
        word: 'jubilarse',
        translation: 'выходить на пенсию (la jubilación — пенсия; un jubilado — пенсионер)',
        example: 'Mi abuela se jubiló en 1989.',
      },
      {
        word: 'la placa',
        translation: 'табличка, мемориальная пластина (una placa de plata — серебряная табличка)',
        example: 'Le regalaron una placa de plata.',
      },
      {
        word: 'la plata',
        translation: 'серебро (металл и цвет; las bodas de plata — серебряная свадьба)',
        example: 'una placa de plata',
      },
      {
        word: 'incluso',
        translation: 'даже (incluso él lo sabe — даже он это знает)',
        example: 'desde Madrid, Barcelona e incluso Alemania',
      },
      {
        word: 'tener suerte',
        translation: 'везти, быть удачливым (¡qué suerte! — какая удача!; la suerte — удача)',
        example: 'Tuve mucha suerte.',
      },
    ],
    questions: [
      {
        q: '¿Cuántos años trabajó la abuela como maestra?',
        options: ['Veinte', 'Cuarenta y uno', 'Cincuenta'],
        correct: 1,
      },
      {
        q: '¿Por qué encendía la estufa antes de empezar la clase?',
        options: ['Para preparar café', 'Porque los alumnos llegaban con las manos heladas', 'Porque era la tradición'],
        correct: 1,
      },
      {
        q: '¿Qué le regalaron en la fiesta de la plaza?',
        options: ['Una placa de plata', 'Un viaje', 'Un libro'],
        correct: 0,
      },
    ],
    grammar_notes: [
      {
        topic: 'Imperfecto: фон длинной жизни; Indefinido: ключевые точки',
        note:
          'Биография строится из двух слоёв. ' +
          'Фон Imperfecto: «compartía aula», «escribía a mano», «llegaban con las manos heladas», «no podían pagar lápices». ' +
          'Ключевые точки Indefinido: «empezó a trabajar en 1948», «se jubiló en 1989», «vinieron antiguos alumnos», «le regalaron una placa», «lloró y dijo». ' +
          'Imperfecto — «как было всю жизнь», Indefinido — узловые события.',
      },
      {
        topic: 'Edades en Imperfecto vs Indefinido',
        note:
          'Возраст в момент действия — Imperfecto: «tenía veinte años». ' +
          'Достижение круглой даты — Indefinido: «cumplió sesenta años». ' +
          'Один глагол (tener), разное значение. В тексте: «tenía solo veinte años» — её возраст в момент начала работы.',
      },
    ],
  },

  {
    id: 'a2-019',
    level: 'A2',
    day: 19,
    title: 'Un viaje a los Pirineos',
    text:
      'Cuando tenía once años, mi familia hizo un viaje en coche por los Pirineos. ' +
      'Fue mi primer viaje largo y todo me pareció una aventura. ' +
      'Mi madre conducía y cantaba; mi padre miraba el mapa y discutía con ella amablemente; ' +
      'mi hermano Marcos y yo íbamos detrás, peleando por el lado de la ventanilla.\n\n' +
      'Dormíamos en hostales pequeños y baratos. ' +
      'Cada mañana cogíamos cosas raras del bufé: un plato de queso, dos cruasanes, dos manzanas para el camino. ' +
      'Mi madre nos miraba con cara de horror, pero no decía nada.\n\n' +
      'Una mañana, cerca de Jaca, vimos un rebaño de ovejas que cruzaba la carretera. ' +
      'Paramos el coche y bajamos. ' +
      'El pastor llevaba una boina vieja y un perro negro con la lengua fuera. ' +
      'Nos saludó con la mano. ' +
      'Aquella imagen se me quedó grabada para siempre: las montañas verdes, las ovejas tranquilas y nosotros, fascinados, en mitad de Aragón.',
    vocabulary: [
      {
        word: 'la aventura',
        translation: 'приключение (los libros de aventuras — приключенческие книги)',
        example: 'Todo me pareció una aventura.',
      },
      {
        word: 'amablemente',
        translation: 'любезно, дружелюбно (от amable; суффикс -mente = русское «-о»)',
        example: 'discutía con ella amablemente',
      },
      {
        word: 'la ventanilla',
        translation: 'окошко в машине / поезде / у кассы (уменьш. от ventana)',
        example: 'el lado de la ventanilla',
      },
      {
        word: 'pelear',
        translation: 'драться; ссориться (la pelea — драка, ссора)',
        example: 'peleando por el lado de la ventanilla',
      },
      {
        word: 'el hostal',
        translation: 'недорогая гостиница, между хостелом и отелем (los hostales de carretera — придорожные)',
        example: 'Dormíamos en hostales pequeños y baratos.',
      },
      {
        word: 'el bufé',
        translation: 'буфет, шведский стол (un bufé libre — самообслуживание)',
        example: 'Cogíamos cosas raras del bufé.',
      },
      {
        word: 'raro, -a',
        translation: 'странный; редкий (una persona rara — странный человек)',
        example: 'cosas raras del bufé',
      },
      {
        word: 'con cara de horror',
        translation: 'с ужасом на лице (poner cara de horror — состроить ужасное лицо)',
        example: 'nos miraba con cara de horror',
      },
      {
        word: 'el rebaño',
        translation: 'стадо (овец, коз); в переносном — паства',
        example: 'un rebaño de ovejas',
      },
      {
        word: 'la oveja',
        translation: 'овца (el cordero — ягнёнок; la oveja negra — паршивая овца)',
        example: 'un rebaño de ovejas',
      },
      {
        word: 'la boina',
        translation: 'берет — типичный головной убор пастухов и старшего поколения',
        example: 'una boina vieja',
      },
      {
        word: 'con la lengua fuera',
        translation: 'высунув язык (о запыхавшемся человеке или собаке; перен. «выматываясь»)',
        example: 'un perro negro con la lengua fuera',
      },
      {
        word: 'quedarse grabado, -a',
        translation: 'остаться в памяти, врезаться (grabar — записывать, гравировать)',
        example: 'Aquella imagen se me quedó grabada.',
      },
      {
        word: 'en mitad de',
        translation: 'посреди (синоним en medio de)',
        example: 'en mitad de Aragón',
      },
    ],
    questions: [
      {
        q: '¿Cuántos años tenía el narrador durante el viaje?',
        options: ['Nueve', 'Once', 'Trece'],
        correct: 1,
      },
      {
        q: '¿Qué cogían cada mañana del bufé?',
        options: ['Solo café', 'Cosas raras: queso, cruasanes, manzanas', 'Tortilla y zumo'],
        correct: 1,
      },
      {
        q: '¿Qué vieron una mañana cerca de Jaca?',
        options: ['Un rebaño de ovejas', 'Un oso', 'Una cabaña abandonada'],
        correct: 0,
      },
    ],
    grammar_notes: [
      {
        topic: 'Imperfecto для параллельных действий в сцене',
        note:
          'Когда нужно описать сразу несколько одновременных действий в прошлом, испанский ставит их все в Imperfecto: ' +
          '«Mi madre conducía y cantaba; mi padre miraba el mapa y discutía; nosotros íbamos detrás, peleando». ' +
          'Так создаётся «многокамерная» сцена, как в кино. Если бы все глаголы были в Indefinido, ' +
          'эпизод стал бы цепочкой шагов, а не общим планом.',
      },
      {
        topic: 'Indefinido внутри Imperfecto-описания',
        note:
          'После долгого описания (Imperfecto) Indefinido резко выделяет конкретный момент: ' +
          '«Una mañana, cerca de Jaca, vimos un rebaño… paramos el coche… el pastor nos saludó». ' +
          'Маркеры «una mañana», «una tarde», «un día» — почти всегда сигнал перехода к Indefinido.',
      },
    ],
  },

  {
    id: 'a2-020',
    level: 'A2',
    day: 20,
    title: 'El álbum de fotos',
    text:
      'El otro día, mientras buscaba unas llaves perdidas, encontré un álbum de fotos enorme en el armario. ' +
      'Lo bajé al salón y lo abrí con cuidado. Las páginas crujían y olían a polvo.\n\n' +
      'En la primera foto, en blanco y negro, mi abuelo tenía dieciocho años y un bigote muy serio. ' +
      'Estaba en uniforme militar delante de un cuartel de Cádiz. ' +
      'En la segunda foto, mis padres estaban en la playa de San Sebastián; ' +
      'mi madre era jovencísima y llevaba un bañador de lunares. ' +
      'En la tercera, una niña pequeña de tres años, con coletas y un osito de peluche enorme, sonreía a la cámara. Era yo.\n\n' +
      'Pasé la tarde entera mirando las fotos. ' +
      'Cada imagen me contaba un pedazo de la familia. ' +
      'Cuando llegó mi mujer, le enseñé el álbum y nos quedamos charlando hasta las once. ' +
      'Las llaves, por cierto, aparecieron en mi chaqueta.',
    vocabulary: [
      {
        word: 'crujir',
        translation: 'скрипеть, хрустеть (las hojas crujen — листья шуршат)',
        example: 'Las páginas crujían.',
      },
      {
        word: 'el polvo',
        translation: 'пыль; порошок (quitar el polvo — вытирать пыль)',
        example: 'Olían a polvo.',
      },
      {
        word: 'en blanco y negro',
        translation: 'чёрно-белый (для фото или фильма; антоним a color — цветной)',
        example: 'la primera foto, en blanco y negro',
      },
      {
        word: 'el bigote',
        translation: 'усы (la barba — борода; el flequillo — чёлка)',
        example: 'un bigote muy serio',
      },
      {
        word: 'el uniforme',
        translation: 'форма, мундир (el uniforme escolar / militar)',
        example: 'Estaba en uniforme militar.',
      },
      {
        word: 'el cuartel',
        translation: 'казарма, военная часть (el cuartel general — штаб)',
        example: 'delante de un cuartel de Cádiz',
      },
      {
        word: 'jovencísimo, -a',
        translation: 'очень молодой (превосходная absoluto: joven + -ísimo, со вставкой -c-)',
        example: 'Mi madre era jovencísima.',
      },
      {
        word: 'el bañador',
        translation: 'купальник, плавки (en la playa, en la piscina)',
        example: 'un bañador de lunares',
      },
      {
        word: 'los lunares',
        translation: 'горошек (рисунок); родинки на коже (un vestido de lunares — платье в горошек)',
        example: 'un bañador de lunares',
      },
      {
        word: 'las coletas',
        translation: 'два хвостика по бокам (hacer coletas — заплести хвостики; la coleta — один хвост)',
        example: 'una niña con coletas',
      },
      {
        word: 'el osito de peluche',
        translation: 'плюшевый мишка (el oso — медведь; el peluche — плюш как материал и игрушка)',
        example: 'un osito de peluche enorme',
      },
      {
        word: 'el pedazo',
        translation: 'кусок (un pedazo de pan; un pedazo de la familia — частичка семьи)',
        example: 'un pedazo de la familia',
      },
      {
        word: 'charlar',
        translation: 'болтать, непринуждённо беседовать (la charla — беседа)',
        example: 'Nos quedamos charlando hasta las once.',
      },
      {
        word: 'por cierto',
        translation: 'кстати (для введения попутной темы)',
        example: 'Las llaves, por cierto, aparecieron.',
      },
    ],
    questions: [
      {
        q: '¿Qué buscaba el narrador cuando encontró el álbum?',
        options: ['Unas llaves perdidas', 'Un libro', 'Las gafas de su mujer'],
        correct: 0,
      },
      {
        q: '¿Cómo iba vestido el abuelo en la primera foto?',
        options: ['Con un traje azul', 'Con uniforme militar', 'Con un jersey rojo'],
        correct: 1,
      },
      {
        q: '¿Dónde aparecieron las llaves al final?',
        options: ['En el bolso', 'En el armario', 'En su chaqueta'],
        correct: 2,
      },
    ],
    grammar_notes: [
      {
        topic: 'Imperfecto в описании фотографии',
        note:
          'Описание содержимого старой фотографии — каноническое применение Imperfecto: ' +
          '«mi abuelo tenía dieciocho años», «llevaba un bañador de lunares», «sonreía a la cámara». ' +
          'Фотография — это замороженный кадр времени. Imperfecto идеально для него: ' +
          'он рисует, а не двигает действие.',
      },
      {
        topic: 'Mientras + Imperfecto / Indefinido — типичная завязка',
        note:
          '«Mientras buscaba unas llaves, encontré un álbum» — длящееся действие (buscaba) и ' +
          'случайная находка (encontré). Та же схема, что «mientras leía, llamaron al timbre»: ' +
          'фон + укол события. Дальше в тексте всё разворачивается уже в Indefinido (lo bajé, lo abrí, pasé la tarde).',
      },
    ],
  },
);
