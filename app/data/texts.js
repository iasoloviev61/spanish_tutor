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
);
