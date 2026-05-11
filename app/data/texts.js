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

  {
    id: 'a2-021',
    level: 'A2',
    day: 21,
    title: 'Doce meses por delante',
    text:
      'El próximo año será especial para mí: cumpliré treinta años y quiero aprovecharlo bien. ' +
      'Me he sentado con un cuaderno y he escrito una lista de planes mes a mes.\n\n' +
      'En enero empezaré clases de italiano en una escuela cerca de Atocha. ' +
      'En febrero iré a Tenerife con mi mujer; pasaremos diez días al sol y aprenderemos a bucear. ' +
      'En marzo terminaré el curso de fotografía que dejé a medias el año pasado.\n\n' +
      'En verano haremos algo grande: cruzaremos parte del Camino de Santiago desde León hasta Santiago de Compostela. ' +
      'Caminaremos catorce días y dormiremos en albergues. ' +
      'Tendré que comprarme unas botas nuevas y entrenar las piernas antes.\n\n' +
      'En octubre saldré con mis amigos del instituto a los Picos de Europa. ' +
      'Allí podremos ver el otoño desde los miradores. ' +
      'En noviembre haré por fin el examen oficial de italiano. ' +
      'Y en diciembre, si todo va bien, mi mujer y yo invitaremos a la familia a cenar Nochevieja en casa.\n\n' +
      'No sé qué saldrá mal, pero este año diré sí a todo lo que pueda.',
    vocabulary: [
      {
        word: 'aprovechar',
        translation: 'пользоваться, использовать (момент, возможность); aprovechar el tiempo — использовать время',
        example: 'Quiero aprovecharlo bien.',
      },
      {
        word: 'mes a mes',
        translation: 'месяц за месяцем (паттерн «X a X»: paso a paso, día a día — равномерно)',
        example: 'una lista de planes mes a mes',
      },
      {
        word: 'bucear',
        translation: 'нырять, плавать с трубкой; погружаться с аквалангом (el buceo — дайвинг)',
        example: 'Aprenderemos a bucear.',
      },
      {
        word: 'dejar a medias',
        translation: 'бросить недоделанным (a medias — наполовину; антоним terminar)',
        example: 'el curso que dejé a medias',
      },
      {
        word: 'las botas',
        translation: 'ботинки, сапоги (las botas de montaña — походные; los zapatos — туфли)',
        example: 'unas botas nuevas',
      },
      {
        word: 'los Picos de Europa',
        translation: 'горный массив на севере Испании (Астурия, Кантабрия, Леон)',
        example: 'a los Picos de Europa',
      },
      {
        word: 'la Nochevieja',
        translation: 'ночь 31 декабря (буквально «старая ночь»; синоним fin de año; ср. la Nochebuena — сочельник)',
        example: 'cenar Nochevieja en casa',
      },
      {
        word: 'invitar a + inf',
        translation: 'пригласить (что-то сделать); invitar a alguien a algo',
        example: 'invitaremos a la familia a cenar',
      },
      {
        word: 'Tenerife',
        translation: 'самый большой Канарский остров; столица — Santa Cruz de Tenerife',
        example: 'En febrero iré a Tenerife.',
      },
      {
        word: 'especial',
        translation: 'особенный (sin acentos: especial; mn. especiales; синоним particular)',
        example: 'El próximo año será especial.',
      },
      {
        word: 'caminar',
        translation: 'идти пешком, шагать (синоним andar; el camino — путь)',
        example: 'Caminaremos catorce días.',
      },
      {
        word: 'el italiano',
        translation: 'итальянский язык; итальянец (так же el inglés, el alemán, el francés)',
        example: 'el examen oficial de italiano',
      },
      {
        word: 'las piernas',
        translation: 'ноги (la pierna — нога; el brazo — рука; los brazos — руки)',
        example: 'entrenar las piernas antes',
      },
      {
        word: 'la fotografía',
        translation: 'фотография как искусство и как снимок; сокр. la foto',
        example: 'el curso de fotografía',
      },
      {
        word: 'Atocha',
        translation: 'главный железнодорожный вокзал Мадрида; одноимённая площадь и район',
        example: 'una escuela cerca de Atocha',
      },
      {
        word: 'comprarse',
        translation: 'купить себе (возвратная форма с дательным — для подчёркивания «для себя»)',
        example: 'comprarme unas botas nuevas',
      },
    ],
    questions: [
      {
        q: '¿Por qué será especial el próximo año?',
        options: ['Porque empezará en una empresa nueva', 'Porque cumplirá treinta años', 'Porque se casará'],
        correct: 1,
      },
      {
        q: '¿Adónde irá en febrero?',
        options: ['A Tenerife', 'A Mallorca', 'A los Picos de Europa'],
        correct: 0,
      },
      {
        q: '¿Cuántos días caminarán por el Camino de Santiago?',
        options: ['Diez días', 'Catorce días', 'Tres semanas'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Futuro simple: окончания регулярных глаголов',
        note:
          'Futuro simple строится одинаково для -ar, -er, -ir: к инфинитиву прибавляются -é, -ás, -á, -emos, -éis, -án. ' +
          'В тексте: empezaré, terminaré, pasaremos, aprenderemos, caminaremos, dormiremos, podremos, invitaremos, diré. ' +
          'Все окончания, кроме -emos, под ударением и с тильдой.',
      },
      {
        topic: 'Futuro simple: ключевые неправильные основы',
        note:
          'У 12 частотных глаголов основа Futuro меняется, окончания остаются те же. ' +
          'В тексте: tener → tendr- (tendré), hacer → har- (haré), salir → saldr- (saldré), poder → podr- (podremos), decir → dir- (diré). ' +
          'Запомнить вместе: tendré, vendré, pondré, saldré, sabré, podré, querré, haré, diré, habrá, cabrá, valdrá.',
      },
    ],
  },

  {
    id: 'a2-022',
    level: 'A2',
    day: 22,
    title: 'Carta a un amigo',
    text:
      'Querido Marcos:\n\n' +
      'Me escribes que estás muy cansado en el trabajo, que duermes mal y que tu jefe te grita por cualquier cosa. ' +
      'Te entiendo perfectamente, porque a mí me pasó algo parecido el año pasado. ' +
      'Por eso me atrevo a darte unos consejos de amigo.\n\n' +
      'Primero, deberías hablar con tu jefe con calma. ' +
      'Seguramente él no se da cuenta de cuánto te afecta su forma de tratarte. ' +
      'Yo, en tu lugar, prepararía la conversación por escrito y la pediría sin gritar.\n\n' +
      'También podrías cambiar algunos hábitos pequeños: salir media hora antes para no correr, comer fuera del despacho y apagar el móvil después de las ocho. ' +
      'Sería mejor para tu cabeza y para tu sueño.\n\n' +
      'Y si todo eso no funciona, yo empezaría a buscar otra empresa. ' +
      'No es fácil, pero ahora hay muchas ofertas en tu sector y tu currículum es muy bueno. ' +
      'Podrías ganar más y trabajar más cerca de casa.\n\n' +
      'Sería estupendo vernos pronto y hablar de todo esto con calma. Llámame esta semana, ¿vale?\n\n' +
      'Un abrazo,\nAndrés',
    vocabulary: [
      {
        word: 'el consejo',
        translation: 'совет (dar un consejo — дать совет; pedir consejo — попросить совета; aconsejar — советовать)',
        example: 'unos consejos de amigo',
      },
      {
        word: 'en tu lugar',
        translation: 'на твоём месте (Yo, en tu lugar, + Condicional — типовая формула совета)',
        example: 'Yo, en tu lugar, prepararía la conversación.',
      },
      {
        word: 'por escrito',
        translation: 'в письменном виде, письменно (антоним de palabra — устно)',
        example: 'prepararía la conversación por escrito',
      },
      {
        word: 'el hábito',
        translation: 'привычка (синоним la costumbre; tener el hábito de + inf)',
        example: 'cambiar algunos hábitos pequeños',
      },
      {
        word: 'apagar',
        translation: 'выключать (антоним encender; apagar la luz, el móvil, la tele)',
        example: 'apagar el móvil después de las ocho',
      },
      {
        word: 'funcionar',
        translation: 'работать (о механизмах и ситуациях); no funciona — не работает / не выходит',
        example: 'si todo eso no funciona',
      },
      {
        word: 'la oferta',
        translation: 'предложение (de trabajo — о работе; en oferta — со скидкой; ofrecer — предлагать)',
        example: 'hay muchas ofertas en tu sector',
      },
      {
        word: 'el sector',
        translation: 'отрасль, сектор (el sector público / privado; el sector de la informática)',
        example: 'hay muchas ofertas en tu sector',
      },
      {
        word: 'el currículum',
        translation: 'резюме (полная форма curriculum vitae; в Испании пишут с тильдой: currículum)',
        example: 'tu currículum es muy bueno',
      },
      {
        word: 'ganar',
        translation: 'зарабатывать; выигрывать (ganar un sueldo / un partido / un premio)',
        example: 'Podrías ganar más.',
      },
      {
        word: 'estupendo, -a',
        translation: 'замечательный, отличный (синонимы: genial, fantástico, magnífico)',
        example: 'Sería estupendo vernos pronto.',
      },
      {
        word: 'el abrazo',
        translation: 'объятие; «Un abrazo» — стандартное окончание дружеского письма (формальнее: Un saludo)',
        example: 'Un abrazo, Andrés',
      },
      {
        word: 'cualquier (cosa)',
        translation: 'любой (cualquier hora — в любой час; cualquier cosa — что угодно; перед существительным теряет -a)',
        example: 'te grita por cualquier cosa',
      },
      {
        word: 'parecido, -a',
        translation: 'похожий, схожий (algo parecido — нечто похожее; parecerse a — быть похожим на)',
        example: 'me pasó algo parecido',
      },
      {
        word: 'darse cuenta de',
        translation: 'осознавать, замечать (No me di cuenta — Я не заметил; me doy cuenta — я понимаю)',
        example: 'él no se da cuenta de cuánto te afecta',
      },
      {
        word: 'tratar (a alguien)',
        translation: 'обращаться (с кем-то); tratar bien / mal — хорошо/плохо обращаться; la forma de tratar — манера обращения',
        example: 'su forma de tratarte',
      },
    ],
    questions: [
      {
        q: '¿Cómo aconseja hablar con el jefe?',
        options: ['Con gritos', 'Con calma y por escrito', 'Por correo electrónico'],
        correct: 1,
      },
      {
        q: '¿Qué hábito pequeño propone Andrés?',
        options: ['Salir media hora antes', 'Trabajar más horas', 'Dormir en el despacho'],
        correct: 0,
      },
      {
        q: '¿Qué sería el último recurso?',
        options: ['Apagar el móvil', 'Buscar otra empresa', 'Cambiar de habitación'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Condicional simple: формы',
        note:
          'Condicional simple строится так же, как Futuro: основа (часто = инфинитив) + окончания -ía, -ías, -ía, -íamos, -íais, -ían. ' +
          'Окончания одинаковы для -ar, -er, -ir и совпадают с Imperfecto -er/-ir. ' +
          'В тексте: prepararía, pediría, podría, sería, empezaría, podrías. ' +
          'Неправильные основы те же, что у Futuro: tener → tendría, hacer → haría, decir → diría, poder → podría.',
      },
      {
        topic: 'Идиомы совета через Condicional',
        note:
          'Условное наклонение смягчает рекомендацию: «deberías + inf» (тебе следовало бы), «podrías + inf» (ты мог бы), ' +
          '«sería mejor + inf» (было бы лучше), «yo en tu lugar + Condicional» (я бы на твоём месте). ' +
          'Все четыре формулы вежливо предлагают, а не приказывают.',
      },
    ],
  },

  {
    id: 'a2-023',
    level: 'A2',
    day: 23,
    title: 'España en 2050',
    text:
      'En 2050 el mundo será muy diferente al de ahora. La ciudad donde vivo no se reconocerá. ' +
      'Los coches privados casi desaparecerán del centro de Madrid; en su lugar tendremos taxis sin conductor y tranvías nuevos por toda la Gran Vía.\n\n' +
      'Las casas serán más pequeñas pero más inteligentes. ' +
      'Una pantalla central encenderá las luces, regulará la calefacción y nos avisará si la nevera está vacía. ' +
      'Mucha gente trabajará desde casa o desde cafeterías; las oficinas de hoy serán museos del pasado.\n\n' +
      'En España habrá problemas también. El verano durará cinco meses y hará un calor difícil de soportar en agosto. ' +
      'Por eso construiremos parques con árboles altos y plazas con sombra grande, y aprenderemos a vivir como en los pueblos de Andalucía: siesta larga y vida nocturna.\n\n' +
      'Algunas cosas no cambiarán. Seguiremos tomando café en la terraza, hablando con los vecinos en el portal y viendo el partido del Real Madrid con los amigos. ' +
      '¿Quién querrá vivir sin esas pequeñas alegrías?',
    vocabulary: [
      {
        word: 'desaparecer',
        translation: 'исчезать (антоним aparecer; participio desaparecido)',
        example: 'Los coches privados casi desaparecerán.',
      },
      {
        word: 'el conductor / la conductora',
        translation: 'водитель (de coche, de tren, de autobús); conducir — водить',
        example: 'taxis sin conductor',
      },
      {
        word: 'la Gran Vía',
        translation: 'центральная улица Мадрида с театрами, отелями и магазинами',
        example: 'tranvías nuevos por toda la Gran Vía',
      },
      {
        word: 'inteligente',
        translation: 'умный (о человеке) и интеллектуальный, «умный» (о вещах: casa inteligente, móvil inteligente)',
        example: 'Las casas serán más inteligentes.',
      },
      {
        word: 'la pantalla',
        translation: 'экран (la pantalla del móvil / del ordenador / del cine)',
        example: 'Una pantalla central encenderá las luces.',
      },
      {
        word: 'regular',
        translation: 'регулировать, настраивать (regular la temperatura, la calefacción)',
        example: 'regulará la calefacción',
      },
      {
        word: 'avisar',
        translation: 'предупредить, уведомить (avisar a alguien de algo)',
        example: 'nos avisará si la nevera está vacía',
      },
      {
        word: 'vacío, -a',
        translation: 'пустой (антоним lleno; una caja vacía)',
        example: 'si la nevera está vacía',
      },
      {
        word: 'durar',
        translation: 'длиться, продолжаться (la película dura dos horas)',
        example: 'El verano durará cinco meses.',
      },
      {
        word: 'soportar',
        translation: 'выносить, терпеть (un calor difícil de soportar; no soporto el ruido)',
        example: 'un calor difícil de soportar',
      },
      {
        word: 'la sombra',
        translation: 'тень (sentarse a la sombra; антоним el sol)',
        example: 'plazas con sombra grande',
      },
      {
        word: 'nocturno, -a',
        translation: 'ночной (vida nocturna — ночная жизнь; антоним diurno)',
        example: 'siesta larga y vida nocturna',
      },
      {
        word: 'seguir + gerundio',
        translation: 'продолжать что-то делать (seguir trabajando — продолжать работать)',
        example: 'Seguiremos tomando café en la terraza.',
      },
      {
        word: 'el portal',
        translation: 'подъезд, парадная (el portero — консьерж; el portal del edificio)',
        example: 'hablando con los vecinos en el portal',
      },
      {
        word: 'la alegría',
        translation: 'радость (alegre — радостный; alegrarse — радоваться)',
        example: 'esas pequeñas alegrías',
      },
      {
        word: 'el árbol',
        translation: 'дерево (los árboles, мн. ч. с тильдой; el bosque — лес)',
        example: 'parques con árboles altos',
      },
    ],
    questions: [
      {
        q: '¿Cómo serán las casas en 2050?',
        options: ['Pequeñas e inteligentes', 'Enormes y vacías', 'Sin pantallas'],
        correct: 0,
      },
      {
        q: '¿Cuánto durará el verano según el texto?',
        options: ['Tres meses', 'Cinco meses', 'Todo el año'],
        correct: 1,
      },
      {
        q: '¿Qué seguirá igual en 2050?',
        options: ['Tomar café en la terraza', 'Trabajar en oficinas grandes', 'Tener coches privados'],
        correct: 0,
      },
    ],
    grammar_notes: [
      {
        topic: 'Futuro simple для прогнозов и гипотез',
        note:
          'Futuro используется не только для планов, но и для предсказаний, гипотез о будущем и общих утверждений «как будет». ' +
          'В тексте таких форм очень много: desaparecerán, tendremos, serán, encenderá, regulará, avisará, trabajará, habrá, durará, hará, construiremos, aprenderemos, cambiarán, querrá. ' +
          'Это базовый журналистский регистр для текстов «мир через 30 лет».',
      },
      {
        topic: 'Futuro irregulares в одном тексте',
        note:
          'В тексте плотно собраны частотные неправильные основы: habrá (haber), hará (hacer), tendremos (tener), pondré… (poner, тут не было, но в паре), querrá (querer), podremos (poder). ' +
          'Дополним общий список 12 «классиков»: haber → habrá, poder → podrá, querer → querrá, saber → sabrá, poner → pondrá, salir → saldrá, tener → tendrá, valer → valdrá, venir → vendrá, decir → dirá, hacer → hará, caber → cabrá.',
      },
    ],
  },

  {
    id: 'a2-024',
    level: 'A2',
    day: 24,
    title: 'Tortilla de patatas, paso a paso',
    text:
      'La tortilla de patatas es el plato más español del mundo. ' +
      'Aquí tienes la receta de mi madre, paso a paso. ' +
      'Para una tortilla grande necesitas cinco huevos, cuatro patatas medianas, una cebolla, aceite de oliva y un poco de sal.\n\n' +
      'Primero pela las patatas y córtalas en láminas finas. Pica la cebolla en trozos pequeños. ' +
      'Pon una sartén grande al fuego con bastante aceite de oliva. ' +
      'Echa las patatas y la cebolla y fríelas a fuego medio durante veinte minutos. ' +
      'Remueve de vez en cuando con una cuchara de madera; las patatas deben quedar tiernas, no doradas.\n\n' +
      'Mientras tanto, casca los huevos en un bol grande y bátelos bien con un tenedor. ' +
      'Añade una pizca de sal. ' +
      'Después escúrrelas y échalas en el bol con los huevos. Mézclalo todo con calma.\n\n' +
      'Pon de nuevo la sartén al fuego con un poco de aceite. ' +
      'Vierte la mezcla y dale forma redonda. ' +
      'Cocina dos minutos por un lado, dale la vuelta con un plato y dos minutos por el otro. ' +
      'Sírvela templada, con pan y un buen vino tinto.',
    vocabulary: [
      {
        word: 'la receta',
        translation: 'рецепт (la receta de mi madre; в аптеке тоже la receta — рецепт врача)',
        example: 'la receta de mi madre, paso a paso',
      },
      {
        word: 'la cebolla',
        translation: 'лук (la cebolla morada — красный лук; cebolleta — зелёный)',
        example: 'Pica la cebolla en trozos pequeños.',
      },
      {
        word: 'pelar',
        translation: 'чистить (фрукт, овощ) от кожуры (pelar una manzana — почистить яблоко)',
        example: 'pela las patatas',
      },
      {
        word: 'picar',
        translation: 'мелко резать, рубить; picar carne — рубить мясо',
        example: 'Pica la cebolla en trozos pequeños.',
      },
      {
        word: 'la sartén',
        translation: 'сковорода (la sartén antiadherente — антипригарная)',
        example: 'Pon una sartén grande al fuego.',
      },
      {
        word: 'el fuego',
        translation: 'огонь; конфорка (a fuego medio / lento / fuerte — на среднем / медленном / сильном огне)',
        example: 'fríelas a fuego medio',
      },
      {
        word: 'freír',
        translation: 'жарить (на масле); irreg.: frío, fríes, fríe…; participio frito',
        example: 'fríelas a fuego medio durante veinte minutos',
      },
      {
        word: 'remover',
        translation: 'перемешивать (o→ue: remuevo, remueves, remueve…)',
        example: 'Remueve de vez en cuando.',
      },
      {
        word: 'la cuchara',
        translation: 'ложка (la cucharilla — чайная ложка; el cuchillo — нож; el tenedor — вилка)',
        example: 'con una cuchara de madera',
      },
      {
        word: 'tierno, -a',
        translation: 'мягкий, нежный (об овощах, мясе); о чувствах — нежный, трогательный',
        example: 'las patatas deben quedar tiernas',
      },
      {
        word: 'cascar',
        translation: 'разбить, расколоть (cascar un huevo — разбить яйцо; cascar nueces — колоть орехи)',
        example: 'casca los huevos en un bol grande',
      },
      {
        word: 'batir',
        translation: 'взбивать (batir los huevos / la nata)',
        example: 'bátelos bien con un tenedor',
      },
      {
        word: 'la pizca',
        translation: 'щепотка (una pizca de sal / de pimienta)',
        example: 'una pizca de sal',
      },
      {
        word: 'escurrir',
        translation: 'сцеживать, давать стечь воде/маслу (escurrir la pasta / las patatas)',
        example: 'escúrrelas y échalas en el bol',
      },
      {
        word: 'verter',
        translation: 'выливать, переливать (e→ie: vierto, viertes, vierte…)',
        example: 'Vierte la mezcla.',
      },
      {
        word: 'dar la vuelta',
        translation: 'перевернуть (буквально «сделать оборот»); dar la vuelta a la tortilla — перевернуть тортилью',
        example: 'dale la vuelta con un plato',
      },
    ],
    questions: [
      {
        q: '¿Cuántos huevos necesita la receta?',
        options: ['Tres', 'Cinco', 'Diez'],
        correct: 1,
      },
      {
        q: '¿Cómo deben quedar las patatas después de freírlas?',
        options: ['Tiernas, no doradas', 'Muy crujientes', 'Casi crudas'],
        correct: 0,
      },
      {
        q: '¿Cómo se sirve la tortilla?',
        options: ['Muy caliente y con limón', 'Templada, con pan y vino tinto', 'Helada y con azúcar'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Imperativo afirmativo (tú): формы',
        note:
          'Утвердительная форма tú = 3 л. ед. ч. Presente без -s: hablar → habla, comer → come, vivir → vive. ' +
          'В тексте: pela, corta, pica, echa, fríe, remueve, casca, bate, añade, escurre, mezcla, vierte, cocina, sirve. ' +
          'Ключевые неправильные tú: pon (poner), ten (tener), ven (venir), haz (hacer), sal (salir), di (decir), ve (ir), sé (ser). ' +
          'В тексте: pon, da.',
      },
      {
        topic: 'Imperativo + местоимения: enclítico и тильда',
        note:
          'Местоимения OD/OI/возвратные приклеиваются к концу глагола: cortar + las → córtalas, freír + las → fríelas, ' +
          'mezclar + lo → mézclalo, servir + la → sírvela, batir + los → bátelos, dar + le → dale. ' +
          'Появляется новая антипенультимная гласная, поэтому в большинстве случаев нужна тильда (córtalas, sírvela). ' +
          'Без тильды только короткие формы с естественным ударением: dale (2 слога).',
      },
    ],
  },

  {
    id: 'a2-025',
    level: 'A2',
    day: 25,
    title: 'Yo, en su lugar',
    text:
      'Mi amiga Lucía está en una situación complicada. ' +
      'Su novio quiere mudarse a Sevilla por su trabajo, pero ella tiene un buen empleo en Bilbao y no quiere dejarlo. ' +
      'Ayer estuvimos hablando en una cafetería del Casco Viejo y me pidió mi opinión.\n\n' +
      'Yo, en su lugar, no decidiría nada sin pensar mucho. ' +
      'Primero hablaría con su jefe para saber si la empresa tiene oficina en Sevilla; muchas firmas grandes la tienen. ' +
      'Si no, yo le propondría a su novio una solución intermedia: él iría a Sevilla durante un año y se verían los fines de semana. ' +
      'No es ideal, pero un año pasa rápido.\n\n' +
      'Tampoco vendería el piso enseguida. Lo alquilaría a una pareja seria por unos meses. ' +
      'Así, si la cosa no funciona, podría volver a su casa sin problemas.\n\n' +
      'Yo, además, le pediría a mi novio una promesa: si en doce meses no encuentra trabajo en Bilbao para los dos, le toca a él volver. ' +
      'Una relación necesita esfuerzo, pero también justicia.\n\n' +
      'Le dije todo esto. Lucía me sonrió y me respondió: «¡Qué fácil es dar consejos!»',
    vocabulary: [
      {
        word: 'complicado, -a',
        translation: 'сложный, запутанный (антоним sencillo; una situación complicada)',
        example: 'Lucía está en una situación complicada.',
      },
      {
        word: 'el empleo',
        translation: 'работа, место (синоним el trabajo; el empleo fijo — постоянная работа)',
        example: 'ella tiene un buen empleo en Bilbao',
      },
      {
        word: 'dejar',
        translation: 'оставить; бросить (dejar un trabajo — бросить работу; dejar a alguien — бросить кого-то)',
        example: 'no quiere dejarlo',
      },
      {
        word: 'el Casco Viejo',
        translation: 'старый город, исторический квартал (в Бильбао — знаменитый туристический центр)',
        example: 'una cafetería del Casco Viejo',
      },
      {
        word: 'decidir',
        translation: 'решать, принимать решение (decidir hacer algo)',
        example: 'no decidiría nada sin pensar mucho',
      },
      {
        word: 'intermedio, -a',
        translation: 'промежуточный (una solución intermedia — компромисс)',
        example: 'una solución intermedia',
      },
      {
        word: 'la firma',
        translation: 'фирма, компания (синоним empresa; не путать с firma — подпись)',
        example: 'muchas firmas grandes la tienen',
      },
      {
        word: 'la solución',
        translation: 'решение (la solución a un problema; solucionar — решать)',
        example: 'una solución intermedia',
      },
      {
        word: 'ideal',
        translation: 'идеальный (sin acentos: ideal; mn. ideales)',
        example: 'No es ideal, pero un año pasa rápido.',
      },
      {
        word: 'la promesa',
        translation: 'обещание (hacer una promesa; cumplir una promesa — сдержать обещание)',
        example: 'le pediría una promesa',
      },
      {
        word: 'encontrar',
        translation: 'находить (o→ue: encuentro, encuentras, encuentra…); encontrar trabajo — найти работу',
        example: 'si en doce meses no encuentra trabajo',
      },
      {
        word: 'le toca a + alguien',
        translation: 'настала чья-то очередь (Me toca a mí — моя очередь; le toca a él — его очередь)',
        example: 'le toca a él volver',
      },
      {
        word: 'la relación',
        translation: 'отношения (de pareja, de amistad); сокр. сленг la rela',
        example: 'Una relación necesita esfuerzo.',
      },
      {
        word: 'el esfuerzo',
        translation: 'усилие (hacer un esfuerzo — приложить усилие; esforzarse — стараться)',
        example: 'Una relación necesita esfuerzo.',
      },
      {
        word: 'la justicia',
        translation: 'справедливость; правосудие (justo, -a — справедливый)',
        example: 'también justicia',
      },
      {
        word: 'responder',
        translation: 'отвечать (синоним contestar; responder a una pregunta)',
        example: 'me respondió: «¡Qué fácil es dar consejos!»',
      },
    ],
    questions: [
      {
        q: '¿Dónde vive y trabaja Lucía?',
        options: ['En Sevilla', 'En Bilbao', 'En Madrid'],
        correct: 1,
      },
      {
        q: '¿Qué solución intermedia propone la narradora?',
        options: ['Vender el piso enseguida', 'Que el novio vaya a Sevilla un año y se vean los fines de semana', 'Que Lucía deje su trabajo'],
        correct: 1,
      },
      {
        q: '¿Qué reacción tiene Lucía al final?',
        options: ['Se enfada mucho', 'Sonríe y dice que es fácil dar consejos', 'Llora y se va'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Condicional simple для гипотез о настоящем',
        note:
          '«Yo, en su lugar, no decidiría nada» = я не на её месте, поэтому это гипотеза, а не реальный план. ' +
          'В тексте: hablaría, propondría, iría, vendería, alquilaría, podría, pediría — всё гипотезы. ' +
          'Если бы говорящий планировал реально, было бы Futuro: «Hablaré con mi jefe».',
      },
      {
        topic: 'Condicional vs «si + Presente, Futuro»',
        note:
          'В тексте сосуществуют две конструкции. «Si la cosa no funciona, podría volver» — реальное условие 1-го типа, ' +
          'но в главной части Condicional как смягчение (вместо podrá → podría). ' +
          'Это нормально и часто: основное правило «si + Presente, Futuro», но Condicional в главной части придаёт оттенок «возможно, теоретически».',
      },
    ],
  },

  {
    id: 'a2-026',
    level: 'A2',
    day: 26,
    title: 'Entrevista con la alcaldesa',
    text:
      'Hoy hablamos con Lola Ramírez, alcaldesa de Aranda de Duero, sobre los planes del ayuntamiento para los próximos diez años.\n\n' +
      '—Lola, ¿cómo será Aranda en 2035?\n\n' +
      '—Será un pueblo más verde y más joven. Construiremos un nuevo barrio al norte, con doscientas viviendas para familias jóvenes y un parque grande con árboles autóctonos. ' +
      'Plantaremos mil chopos junto al río Duero.\n\n' +
      '—¿Y el centro histórico?\n\n' +
      '—Lo cuidaremos especialmente. Renovaremos la plaza Mayor sin tocar los edificios antiguos. ' +
      'También abriremos un museo del vino, porque la Ribera del Duero es nuestra gran marca. ' +
      'Pondremos paneles en cuatro idiomas para los turistas.\n\n' +
      '—¿Qué pasará con los jóvenes que se van a Madrid?\n\n' +
      '—Volverán. Estamos hablando con dos empresas de tecnología que abrirán oficinas aquí. ' +
      'Crearemos doscientos puestos en cinco años. Además, todas las casas del centro tendrán fibra óptica.\n\n' +
      '—¿Y el campo?\n\n' +
      '—El campo es la base. Daremos ayudas a los agricultores jóvenes y enseñaremos a sus hijos las profesiones del vino y de la trufa. ' +
      'Aquí siempre habrá trabajo para los que aman el pueblo.\n\n' +
      '—Muchas gracias, Lola. Esperamos volver a hablar dentro de cinco años.',
    vocabulary: [
      {
        word: 'el ayuntamiento',
        translation: 'мэрия, городская администрация (в маленьких городах — здание на площади Mayor)',
        example: 'los planes del ayuntamiento',
      },
      {
        word: 'el alcalde / la alcaldesa',
        translation: 'мэр / мэрша (избирается на местных выборах; в больших городах — el alcalde de Madrid)',
        example: 'Lola Ramírez, alcaldesa de Aranda de Duero',
      },
      {
        word: 'la vivienda',
        translation: 'жильё (официальный термин; sinónimos: el piso, la casa); el problema de la vivienda — жилищный вопрос',
        example: 'doscientas viviendas para familias jóvenes',
      },
      {
        word: 'autóctono, -a',
        translation: 'местный, эндемичный (об организмах и культурах; árboles autóctonos — местные деревья)',
        example: 'árboles autóctonos',
      },
      {
        word: 'la Ribera del Duero',
        translation: 'винодельческий регион вдоль реки Дуэро в Кастилии-и-Леоне (DOC, конкурент Риохи)',
        example: 'la Ribera del Duero es nuestra gran marca',
      },
      {
        word: 'la marca',
        translation: 'бренд, марка (la marca registrada; одно из значений — отметина, след)',
        example: 'nuestra gran marca',
      },
      {
        word: 'el panel',
        translation: 'информационный щит, табличка (тж. солнечная панель — el panel solar)',
        example: 'Pondremos paneles en cuatro idiomas.',
      },
      {
        word: 'el idioma',
        translation: 'язык (синоним la lengua; el idioma — обычно официальный/иностранный язык)',
        example: 'paneles en cuatro idiomas',
      },
      {
        word: 'la tecnología',
        translation: 'технология; высокотехнологичная отрасль (las empresas de tecnología — IT-компании)',
        example: 'dos empresas de tecnología',
      },
      {
        word: 'el puesto (de trabajo)',
        translation: 'рабочее место, вакансия (crear puestos — создавать рабочие места)',
        example: 'Crearemos doscientos puestos.',
      },
      {
        word: 'la fibra óptica',
        translation: 'оптоволокно (стандарт интернета в Испании: la fibra)',
        example: 'todas las casas tendrán fibra óptica',
      },
      {
        word: 'la ayuda',
        translation: 'помощь; денежная субсидия от государства (las ayudas públicas)',
        example: 'Daremos ayudas a los agricultores jóvenes.',
      },
      {
        word: 'el agricultor / la agricultora',
        translation: 'фермер, работник сельского хозяйства (la agricultura — сельское хозяйство)',
        example: 'ayudas a los agricultores jóvenes',
      },
      {
        word: 'la trufa',
        translation: 'трюфель (гриб; чёрный трюфель — la trufa negra; в провинции Сория и Теруэль — национальный продукт)',
        example: 'las profesiones del vino y de la trufa',
      },
      {
        word: 'histórico, -a',
        translation: 'исторический (el centro histórico — старый город; los edificios históricos)',
        example: 'el centro histórico',
      },
      {
        word: 'renovar',
        translation: 'обновлять, реставрировать (o→ue: renuevo, renuevas…); renovar un piso — отремонтировать квартиру',
        example: 'Renovaremos la plaza Mayor.',
      },
    ],
    questions: [
      {
        q: '¿Qué van a plantar junto al río Duero?',
        options: ['Mil chopos', 'Cien olivos', 'Trescientos pinos'],
        correct: 0,
      },
      {
        q: '¿Qué marca destacará Aranda?',
        options: ['El queso manchego', 'La Ribera del Duero', 'La paella'],
        correct: 1,
      },
      {
        q: '¿Cómo piensan ayudar al campo?',
        options: ['Con ayudas a los agricultores jóvenes', 'Cerrando las granjas', 'Subiendo los impuestos'],
        correct: 0,
      },
    ],
    grammar_notes: [
      {
        topic: 'Futuro simple в речи политика',
        note:
          'Futuro 1-го лица мн. ч. («construiremos», «pondremos», «daremos», «crearemos», «enseñaremos») — стандартный регистр политических обещаний и интервью с альчальде. ' +
          'Звучит как «мы это сделаем» = обязательство перед избирателями. ' +
          'В тексте 14 форм Futuro, и почти все — 1-е л. мн. ч. от лица администрации.',
      },
    ],
  },

  {
    id: 'a2-027',
    level: 'A2',
    day: 27,
    title: 'Normas del piso compartido',
    text:
      'Bienvenidos al piso, chicos. ' +
      'Antes de instalaros, leed con calma estas pequeñas normas que los inquilinos hemos acordado entre todos. ' +
      'No son muchas, pero son importantes.\n\n' +
      'Primero, respetad el silencio después de las once de la noche. ' +
      'Algunos tenemos turnos de mañana y madrugamos mucho. ' +
      'Si queréis hablar largo por teléfono, hacedlo en el salón con la puerta cerrada.\n\n' +
      'En la cocina, limpiad siempre vuestros platos enseguida. ' +
      'Tirad la basura por la noche, no por la mañana, porque el camión pasa muy temprano. ' +
      'Comprad vuestros alimentos básicos y poned el nombre en la nevera; los productos sin nombre se consideran comunes.\n\n' +
      'Para el baño, dejadlo tal y como lo encontráis. ' +
      'Sed prácticos: una ducha de diez minutos basta, sobre todo en invierno, cuando la caldera trabaja mucho. ' +
      'Avisad al casero si hay alguna avería; tenéis su número en la nevera.\n\n' +
      'Pagad el alquiler antes del día cinco de cada mes, por transferencia. ' +
      'Y, por favor, venid al salón el primer domingo del mes a las nueve. ' +
      'Tomamos un café juntos y hablamos de la convivencia. ' +
      'Disfrutad del piso, es vuestra casa.',
    vocabulary: [
      {
        word: 'la norma',
        translation: 'правило, норма (синоним la regla; normas de convivencia — правила совместного проживания)',
        example: 'estas pequeñas normas',
      },
      {
        word: 'el inquilino / la inquilina',
        translation: 'жилец, квартиросъёмщик (антоним el casero — владелец)',
        example: 'los inquilinos hemos acordado',
      },
      {
        word: 'acordar',
        translation: 'договариваться, соглашаться (o→ue: acuerdo, acuerdas…); не путать с acordarse de — помнить',
        example: 'normas que hemos acordado entre todos',
      },
      {
        word: 'respetar',
        translation: 'уважать; соблюдать (respetar las normas — соблюдать правила)',
        example: 'respetad el silencio',
      },
      {
        word: 'el turno',
        translation: 'смена (de mañana, de tarde, de noche); очередь (esperar tu turno)',
        example: 'turnos de mañana',
      },
      {
        word: 'madrugar',
        translation: 'рано вставать (la madrugada — раннее утро; el madrugador — жаворонок)',
        example: 'madrugamos mucho',
      },
      {
        word: 'la basura',
        translation: 'мусор (tirar la basura — выносить мусор; el cubo de basura — мусорное ведро)',
        example: 'Tirad la basura por la noche.',
      },
      {
        word: 'el alimento',
        translation: 'продукт питания (alimentos básicos — базовые продукты; sinónimos: la comida в общем смысле)',
        example: 'vuestros alimentos básicos',
      },
      {
        word: 'el alquiler',
        translation: 'арендная плата; аренда (alquilar — снимать; el alquiler mensual — ежемесячная плата)',
        example: 'Pagad el alquiler antes del día cinco.',
      },
      {
        word: 'la transferencia',
        translation: 'банковский перевод (hacer una transferencia; синоним el ingreso)',
        example: 'por transferencia',
      },
      {
        word: 'el producto',
        translation: 'продукт, товар (los productos del supermercado; el producto interior bruto — ВВП)',
        example: 'los productos sin nombre se consideran comunes',
      },
      {
        word: 'la caldera',
        translation: 'котёл (отопления, газа); даёт горячую воду и отопление в испанских квартирах',
        example: 'la caldera trabaja mucho',
      },
      {
        word: 'la avería',
        translation: 'поломка (la avería del coche / de la caldera; estar averiado — быть сломанным)',
        example: 'si hay alguna avería',
      },
      {
        word: 'el casero / la casera',
        translation: 'хозяин квартиры, владелец (el casero cobra el alquiler; антоним el inquilino)',
        example: 'Avisad al casero.',
      },
      {
        word: 'la convivencia',
        translation: 'совместное проживание, сосуществование (las normas de convivencia)',
        example: 'hablamos de la convivencia',
      },
      {
        word: 'disfrutar (de algo)',
        translation: 'наслаждаться, получать удовольствие от чего-то (disfrutar de la vida)',
        example: 'Disfrutad del piso.',
      },
    ],
    questions: [
      {
        q: '¿A qué hora empieza el silencio en el piso?',
        options: ['A las nueve', 'A las once de la noche', 'A medianoche'],
        correct: 1,
      },
      {
        q: '¿Cuándo hay que tirar la basura?',
        options: ['Por la mañana temprano', 'Por la noche', 'Solo los domingos'],
        correct: 1,
      },
      {
        q: '¿Qué hacen el primer domingo del mes?',
        options: ['Limpian el piso entero', 'Toman café juntos y hablan de la convivencia', 'Pagan al casero en mano'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Imperativo afirmativo (vosotros): -d',
        note:
          'Возьмите инфинитив и замените конечное -r на -d: hablar → hablad, comer → comed, vivir → vivid. ' +
          'В тексте: leed, respetad, limpiad, tirad, comprad, poned, dejadlo, sed (irreg ser), avisad, pagad, venid (irreg venir), disfrutad. ' +
          'У ir форма vosotros — id (но в речи Испании чаще «idos», «iros»).',
      },
      {
        topic: 'Pronombres en imperativo vosotros',
        note:
          'Местоимения приклеиваются к концу глагола, как и в tú: hacedlo, dejadlo, poned el nombre, comprad vuestros alimentos. ' +
          'У возвратных vosotros -d перед -os отпадает: instalaros (вместо *instaladlos), levantaros, sentaros. ' +
          'Исключение: ir → idos сохраняет -d. На практике в разговорной речи Испании часто слышно «iros».',
      },
    ],
  },

  {
    id: 'a2-028',
    level: 'A2',
    day: 28,
    title: 'Si hace sol el sábado',
    text:
      'Este fin de semana queremos ir a la sierra de Madrid, pero todo depende del tiempo. ' +
      'Si mañana hace sol, saldremos a primera hora hacia Cercedilla. ' +
      'Si llueve, nos quedaremos en casa y veremos una serie en el sofá.\n\n' +
      'Si el día es bueno, subiremos hasta el puerto de Navacerrada y comeremos algo en el restaurante de arriba. ' +
      'Si tenemos energía, haremos una pequeña ruta de una hora por el bosque de pinos. ' +
      'Si encontramos un sitio bonito, sacaremos fotos para la abuela, que adora la montaña.\n\n' +
      'Volveremos antes de las ocho de la tarde, porque mi mujer trabaja el lunes muy temprano. ' +
      'Si llegamos a tiempo, cenaremos en el restaurante chino del barrio; si llegamos tarde, calentaremos algo del frigorífico.\n\n' +
      'Hay un solo problema: el coche. Si la batería sigue débil, no podremos salir y tendremos que coger el tren. ' +
      'Pasaré por el taller esta tarde. Si Roberto, el mecánico, está libre, me la mirará rápido. ' +
      'Si no, llamaré a mi hermano: él siempre presta el suyo.\n\n' +
      'Si todo sale bien, será un domingo perfecto.',
    vocabulary: [
      {
        word: 'la sierra',
        translation: 'горная цепь, горы (la sierra de Madrid; la sierra Nevada в Андалусии)',
        example: 'ir a la sierra de Madrid',
      },
      {
        word: 'depender de',
        translation: 'зависеть от (todo depende de ti — всё зависит от тебя; la dependencia — зависимость)',
        example: 'todo depende del tiempo',
      },
      {
        word: 'la serie',
        translation: 'сериал (ver una serie — смотреть сериал; синоним: la teleserie)',
        example: 'veremos una serie en el sofá',
      },
      {
        word: 'el puerto (de montaña)',
        translation: 'горный перевал (el puerto de Navacerrada; в другом значении — морской порт)',
        example: 'subiremos hasta el puerto de Navacerrada',
      },
      {
        word: 'la energía',
        translation: 'энергия, силы (no tener energía — нет сил; energético — энергичный)',
        example: 'Si tenemos energía, haremos una ruta.',
      },
      {
        word: 'la ruta',
        translation: 'маршрут, поход (la ruta de senderismo — пешеходный маршрут)',
        example: 'una pequeña ruta de una hora',
      },
      {
        word: 'el bosque',
        translation: 'лес (el bosque de pinos — сосновый лес; синоним la selva — джунгли)',
        example: 'por el bosque de pinos',
      },
      {
        word: 'el pino',
        translation: 'сосна (el pino — самое распространённое дерево в Кастилии; antynim el roble — дуб)',
        example: 'el bosque de pinos',
      },
      {
        word: 'el sitio',
        translation: 'место (синоним el lugar; в разговоре чаще el sitio)',
        example: 'un sitio bonito',
      },
      {
        word: 'adorar',
        translation: 'обожать, очень любить (синоним: encantar, en 3-м лице; me adora la montaña — звучит странно, лучше adoro)',
        example: 'la abuela adora la montaña',
      },
      {
        word: 'calentar',
        translation: 'разогреть (e→ie: caliento, calientas…); calentarse — греться (refl.)',
        example: 'calentaremos algo del frigorífico',
      },
      {
        word: 'el frigorífico',
        translation: 'холодильник (синонимы: la nevera более разговорно; el frigorífico — нейтрально/официально)',
        example: 'algo del frigorífico',
      },
      {
        word: 'la batería',
        translation: 'аккумулятор (de coche, de móvil); сидит в коробке передач у машины',
        example: 'Si la batería sigue débil…',
      },
      {
        word: 'débil',
        translation: 'слабый (антоним fuerte; mn. débiles)',
        example: 'la batería sigue débil',
      },
      {
        word: 'prestar',
        translation: 'одолжить (prestar algo a alguien; антоним pedir prestado — взять взаймы)',
        example: 'él siempre presta el suyo',
      },
      {
        word: 'perfecto, -a',
        translation: 'идеальный, безупречный (синонимы: ideal, perfectísimo)',
        example: 'será un domingo perfecto',
      },
    ],
    questions: [
      {
        q: '¿Qué harán si llueve?',
        options: ['Saldrán a primera hora a la sierra', 'Se quedarán en casa y verán una serie', 'Cogerán el tren a Cercedilla'],
        correct: 1,
      },
      {
        q: '¿Adónde subirán si el día es bueno?',
        options: ['Al puerto de Navacerrada', 'A Toledo', 'A Segovia'],
        correct: 0,
      },
      {
        q: '¿Cuál es el problema del coche?',
        options: ['Las ruedas están viejas', 'La batería está débil', 'No tiene gasolina'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Условие 1-го типа: si + Presente, Futuro simple',
        note:
          'Реальное, выполнимое условие: si-часть в Presente de indicativo, главная — в Futuro. ' +
          'В тексте таких пар целая россыпь: «Si hace sol, saldremos», «Si llueve, nos quedaremos», «Si tenemos energía, haremos», ' +
          '«Si encontramos un sitio, sacaremos», «Si llegamos a tiempo, cenaremos», «Si la batería sigue débil, no podremos», ' +
          '«Si Roberto está libre, mirará», «Si todo sale bien, será». ' +
          '⚠️ После si никогда не ставится Futuro: говорим «si hace sol», не «si hará sol».',
      },
      {
        topic: 'Coger в Испании vs Латинская Америка',
        note:
          'В Испании coger — нейтральный, частотный глагол: coger el tren / el autobús / el móvil / un libro. ' +
          'В Мексике, Аргентине и других странах региона избегают из-за вульгарного значения, заменяют на tomar или agarrar. ' +
          'В наших текстах кастильский испанский, поэтому coger используется свободно начиная с A2.',
      },
    ],
  },

  {
    id: 'a2-029',
    level: 'A2',
    day: 29,
    title: 'Consejos para un turista en España',
    text:
      'Si vienes a España por primera vez, escucha estos consejos de quien ha vivido aquí toda su vida. ' +
      'No son obligatorios, pero te ahorrarán problemas.\n\n' +
      'Primero, cambia el ritmo de tu reloj. ' +
      'Si llegas a un restaurante a las siete de la tarde, la cocina estará cerrada. ' +
      'Yo, en tu lugar, comería a las dos y media y cenaría a las nueve, como los españoles. ' +
      'Reserva con un día de antelación los sitios famosos; si no, esperarás una hora en la calle.\n\n' +
      'Habla con la gente. Yo siempre les digo a mis amigos extranjeros: di «hola» y «gracias» al camarero, al portero, al señor del kiosco. ' +
      'No hace falta saber mucho español; con una sonrisa se abren todas las puertas. ' +
      'Pregunta al taxista: él te recomendará el mejor sitio para tomar el café.\n\n' +
      'Yo no llevaría mucho dinero en efectivo. Casi todo se paga con tarjeta, incluso un café de un euro. ' +
      'Lleva una pequeña mochila contra los carteristas en el metro; cuídala en lugares con mucha gente, como Sol o la Sagrada Familia.\n\n' +
      'Y, sobre todo, sal del centro. ' +
      'Si visitas Lavapiés, Malasaña o el Albaicín a pie, verás la España de verdad. ' +
      '¡Disfruta del viaje!',
    vocabulary: [
      {
        word: 'obligatorio, -a',
        translation: 'обязательный (la educación obligatoria; антоним opcional)',
        example: 'No son obligatorios.',
      },
      {
        word: 'ahorrar',
        translation: 'экономить (ahorrar dinero / tiempo / problemas); el ahorro — экономия, сбережения',
        example: 'te ahorrarán problemas',
      },
      {
        word: 'el ritmo',
        translation: 'ритм, темп (a su ritmo — в своём темпе; el ritmo de vida — ритм жизни)',
        example: 'cambia el ritmo de tu reloj',
      },
      {
        word: 'el reloj',
        translation: 'часы (наручные, настенные); el reloj de pulsera — наручные; conjunction el reloj de la torre',
        example: 'el ritmo de tu reloj',
      },
      {
        word: 'la antelación',
        translation: 'заблаговременность (con un día / una semana de antelación — за день/неделю)',
        example: 'Reserva con un día de antelación.',
      },
      {
        word: 'famoso, -a',
        translation: 'известный, знаменитый (un restaurante famoso; la fama — слава)',
        example: 'los sitios famosos',
      },
      {
        word: 'extranjero, -a',
        translation: 'иностранный; иностранец (un amigo extranjero; viajar al extranjero — поехать за границу)',
        example: 'mis amigos extranjeros',
      },
      {
        word: 'hacer falta',
        translation: 'требоваться (No hace falta — не нужно; sinónimo: ser necesario)',
        example: 'No hace falta saber mucho español.',
      },
      {
        word: 'el taxista',
        translation: 'таксист (el taxi — такси; глагол не существует, говорят coger un taxi)',
        example: 'Pregunta al taxista.',
      },
      {
        word: 'recomendar',
        translation: 'рекомендовать (e→ie: recomiendo, recomiendas…); recomendar a alguien hacer algo',
        example: 'él te recomendará el mejor sitio',
      },
      {
        word: 'el carterista',
        translation: 'карманник (от la cartera — кошелёк); особая проблема в метро и на людных площадях',
        example: 'contra los carteristas en el metro',
      },
      {
        word: 'el lugar',
        translation: 'место (синоним el sitio; el lugar — более формально, sitio — разговорно)',
        example: 'en lugares con mucha gente',
      },
      {
        word: 'Malasaña',
        translation: 'модный молодёжный район Мадрида к северу от Gran Vía (антоним «туристический Sol»)',
        example: 'Si visitas Lavapiés, Malasaña o el Albaicín',
      },
      {
        word: 'de verdad',
        translation: 'по-настоящему, действительно (la España de verdad — настоящая Испания; ¿De verdad? — Правда?)',
        example: 'verás la España de verdad',
      },
      {
        word: 'visitar',
        translation: 'посещать, навещать (visitar un museo / a un amigo); la visita — посещение',
        example: 'Si visitas Lavapiés…',
      },
      {
        word: 'cuidar',
        translation: 'заботиться о, охранять (cuidar a alguien / algo); cuidarse — беречь себя',
        example: 'cuídala en lugares con mucha gente',
      },
    ],
    questions: [
      {
        q: '¿A qué hora suelen comer los españoles, según el texto?',
        options: ['A la una', 'A las dos y media', 'A las cuatro'],
        correct: 1,
      },
      {
        q: '¿Qué se recomienda llevar contra los carteristas?',
        options: ['Una mochila pequeña, bien cuidada', 'Una bolsa grande y abierta', 'Solo dinero en efectivo'],
        correct: 0,
      },
      {
        q: '¿Cómo conocer la «España de verdad»?',
        options: ['Quedándose en hoteles del centro', 'Saliendo del centro a barrios como Malasaña o Lavapiés', 'Comiendo solo en cadenas internacionales'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Imperativo + Condicional: тон совета',
        note:
          'Imperativo звучит директивно: «cambia», «reserva», «habla», «di», «pregunta», «lleva», «cuídala», «sal», «disfruta». ' +
          'Condicional смягчает: «Yo, en tu lugar, comería», «cenaría», «no llevaría». ' +
          'Хороший совет балансирует оба регистра: команда там, где надо коротко («Sal del centro»), и гипотеза там, где надо такт («Yo no llevaría mucho efectivo»).',
      },
      {
        topic: 'Imperativo tú: ключевые неправильные',
        note:
          'В тексте собраны главные неправильные tú: di (decir), sal (salir). ' +
          'Полный список: pon (poner), ten (tener), ven (venir), haz (hacer), sal (salir), di (decir), ve (ir), sé (ser). ' +
          'Восемь форм — короткие, односложные, часто без тильды (кроме sé — отличие от se-местоимения).',
      },
    ],
  },

  {
    id: 'a2-030',
    level: 'A2',
    day: 30,
    title: 'Final del nivel A2',
    text:
      'Hoy termino el último texto del nivel A2. ' +
      'Ha sido un año entero leyendo, escribiendo y aprendiendo despacio. ' +
      'Sesenta textos en total: treinta de A1, treinta de A2. ' +
      'Cada uno me ha dado una pequeña porción de español: un sabor, un personaje, un rincón del país.\n\n' +
      '¿Qué haré ahora? Empezaré el nivel B1 sin pausa. ' +
      'Compraré el cuaderno azul que vi en la librería y leeré la primera novela ligera en español: probablemente algo de Sergio del Molino o Almudena Grandes. ' +
      'No correré: dos páginas al día durante seis meses serán suficientes.\n\n' +
      'Yo, en tu lugar, lector, no haría nada distinto. Sigue tu camino con calma. ' +
      'Si lees veinte minutos al día, en un año hablarás con fluidez. ' +
      'Si añades una conversación a la semana con un nativo, no te reconocerás dentro de doce meses.\n\n' +
      'Algunos sueños para mi B1: ver una película española sin subtítulos, escribir una postal larga a un amigo de Salamanca, pedir un café en Madrid y entender al camarero al cien por cien.\n\n' +
      'Gracias por leer hasta aquí. Cierra ahora este texto, abre el cuaderno y escribe tu primer plan para el próximo nivel. ' +
      'El español no es difícil: solo pide tiempo y cariño. ¡Hasta pronto!',
    vocabulary: [
      {
        word: 'el nivel',
        translation: 'уровень (el nivel A2, B1; el nivel del mar — уровень моря)',
        example: 'el último texto del nivel A2',
      },
      {
        word: 'entero, -a',
        translation: 'целый (un año entero — целый год; синоним completo)',
        example: 'un año entero leyendo',
      },
      {
        word: 'la porción',
        translation: 'порция, часть (la porción de pizza; una pequeña porción — небольшая порция)',
        example: 'una pequeña porción de español',
      },
      {
        word: 'el sabor',
        translation: 'вкус (el sabor a chocolate; sabroso — вкусный)',
        example: 'un sabor, un personaje, un rincón',
      },
      {
        word: 'el personaje',
        translation: 'персонаж (de una novela, una película); тж. историческая личность',
        example: 'un personaje',
      },
      {
        word: 'el rincón',
        translation: 'уголок (un rincón tranquilo — тихий уголок; антоним la esquina — внешний угол)',
        example: 'un rincón del país',
      },
      {
        word: 'la librería',
        translation: 'книжный магазин (⚠️ ложный друг: библиотека — la biblioteca)',
        example: 'el cuaderno azul que vi en la librería',
      },
      {
        word: 'ligero, -a',
        translation: 'лёгкий (антоним pesado; una novela ligera — лёгкое чтение; una comida ligera — лёгкая еда)',
        example: 'la primera novela ligera en español',
      },
      {
        word: 'suficiente',
        translation: 'достаточный (синонимы: bastante; suficientemente — достаточно)',
        example: 'dos páginas al día serán suficientes',
      },
      {
        word: 'la fluidez',
        translation: 'беглость (речи); hablar con fluidez — говорить бегло; fluido, -a — беглый',
        example: 'en un año hablarás con fluidez',
      },
      {
        word: 'añadir',
        translation: 'добавить (sinónimos: agregar, sumar)',
        example: 'Si añades una conversación a la semana',
      },
      {
        word: 'el nativo / la nativa',
        translation: 'носитель языка (un hablante nativo — формальнее; un nativo — короче)',
        example: 'una conversación con un nativo',
      },
      {
        word: 'el sueño',
        translation: 'мечта; сон (двойное значение; los sueños — мечты или сны)',
        example: 'algunos sueños para mi B1',
      },
      {
        word: 'el subtítulo',
        translation: 'субтитр (ver una película sin subtítulos — смотреть без субтитров)',
        example: 'ver una película española sin subtítulos',
      },
      {
        word: 'el cariño',
        translation: 'нежность, любовь, привязанность (con cariño — с любовью; cariñoso — ласковый)',
        example: 'tiempo y cariño',
      },
      {
        word: 'al cien por cien',
        translation: 'на сто процентов, полностью (синоним del todo; estoy de acuerdo al cien por cien)',
        example: 'entender al camarero al cien por cien',
      },
    ],
    questions: [
      {
        q: '¿Cuántos textos en total ha leído el narrador?',
        options: ['Cincuenta', 'Sesenta', 'Cien'],
        correct: 1,
      },
      {
        q: '¿Qué consejo da para el nivel B1?',
        options: ['Veinte minutos de lectura al día', 'Cuatro horas de gramática al día', 'No leer nada nuevo'],
        correct: 0,
      },
      {
        q: '¿Qué autores menciona el narrador?',
        options: ['Sergio del Molino y Almudena Grandes', 'Cervantes y Pérez Galdós', 'García Márquez y Borges'],
        correct: 0,
      },
    ],
    grammar_notes: [
      {
        topic: 'Три кита A2-блока C в одном тексте',
        note:
          'Финальный текст собирает все три темы блока: Futuro simple для будущих планов (empezaré, compraré, leeré, correré, serán, hablarás, reconocerás), ' +
          'Condicional simple для гипотезы (no haría nada distinto) и Imperativo afirmativo для прямого обращения к читателю (sigue, cierra, abre, escribe). ' +
          'Это итог уровня — три времени, которые отличают A2 от A1.',
      },
      {
        topic: 'Реальное условие как мост к B1',
        note:
          '«Si lees veinte minutos al día, hablarás con fluidez», «Si añades una conversación, no te reconocerás» — ' +
          'стандартная формула «si + Presente, Futuro», уже отработанная в a2-028. ' +
          'На уровне B1 эта схема расширится: появятся условия 2-го («si tuviera tiempo, viajaría») и 3-го («si hubiera tenido tiempo, habría viajado») типов с Subjuntivo. Но это уже другая история.',
      },
    ],
  },

  {
    id: 'b1-001',
    level: 'B1',
    day: 1,
    title: 'Carta a Pablo desde Sevilla',
    text:
      'Querido Pablo:\n\n' +
      'Llevo dos semanas en Sevilla y por fin tengo un rato para escribirte. ' +
      'La ciudad me ha conquistado: el piso es pequeño, pero tiene un balcón con vistas al patio. ' +
      'Por las mañanas, una vecina canta flamenco mientras cocina; espero que nunca deje de hacerlo.\n\n' +
      'Mi empresa quiere que aprenda andaluz en seis meses. ¡Cosa imposible! ' +
      'Pero he conocido a Lucía, una sevillana paciente que me corrige cada día. ' +
      'Le pido que me hable despacio, aunque ella prefiere que practique con el ritmo natural del barrio. Y tiene razón.\n\n' +
      'Por las tardes paseo por Triana, junto al río. ' +
      'Me alegra que mi madre venga la próxima semana: deseo que vea Sevilla antes de que empiecen las lluvias de otoño. ' +
      'He reservado mesa en un restaurante con terraza; espero que el camarero hable con calma para que ella entienda algo.\n\n' +
      '¿Y tú? ¿Cuándo te decides a visitarme? ' +
      'Quiero que reserves al menos cinco días: dos para Sevilla, uno para Cádiz y dos para descansar en la playa. ' +
      'No aceptaré excusas. Espero que tengas vacaciones en noviembre y que el nuevo trabajo no te quite todo el tiempo libre.\n\n' +
      'Un abrazo enorme,\nMarta',
    vocabulary: [
      {
        word: 'el rato',
        translation: 'небольшой промежуток времени, «минутка» (un rato — недолго; pasar el rato — проводить время)',
        example: 'por fin tengo un rato para escribirte',
      },
      {
        word: 'conquistar',
        translation: 'покорить, завоевать; в переносном смысле — пленить (la ciudad me ha conquistado)',
        example: 'La ciudad me ha conquistado.',
      },
      {
        word: 'el balcón',
        translation: 'балкон (типичный элемент испанской улицы; el balcón da a la calle)',
        example: 'un balcón con vistas al patio',
      },
      {
        word: 'el patio',
        translation: 'внутренний двор дома (типичная испанская архитектура; el patio andaluz)',
        example: 'con vistas al patio',
      },
      {
        word: 'la vista',
        translation: 'вид, обзор (con vistas a — с видом на; la vista al mar)',
        example: 'un balcón con vistas al patio',
      },
      {
        word: 'dejar de + inf',
        translation: 'переставать что-либо делать (deja de fumar — бросает курить)',
        example: 'espero que nunca deje de hacerlo',
      },
      {
        word: 'andaluz, -a',
        translation: 'андалусский; андалусец / южноиспанский диалект (de Andalucía)',
        example: 'que aprenda andaluz en seis meses',
      },
      {
        word: 'paciente',
        translation: 'терпеливый (как прилагательное); la paciencia — терпение',
        example: 'una sevillana paciente que me corrige',
      },
      {
        word: 'corregir',
        translation: 'исправлять, корректировать (e→i: corrijo, corriges, corrige…)',
        example: 'me corrige cada día',
      },
      {
        word: 'junto a',
        translation: 'рядом с, около (синоним al lado de; junto al río — у самой реки)',
        example: 'paseo por Triana, junto al río',
      },
      {
        word: 'la terraza',
        translation: 'летняя терраса кафе/ресторана; также балкон-терраса',
        example: 'un restaurante con terraza',
      },
      {
        word: 'con calma',
        translation: 'спокойно, не торопясь (hablar con calma; tomarse las cosas con calma)',
        example: 'que el camarero hable con calma',
      },
      {
        word: 'decidirse a',
        translation: 'решиться на что-то (decidirse a hacer algo — после колебаний принять решение)',
        example: '¿Cuándo te decides a visitarme?',
      },
      {
        word: 'la excusa',
        translation: 'отговорка, оправдание (poner excusas — отнекиваться; sin excusas — без отговорок)',
        example: 'No aceptaré excusas.',
      },
      {
        word: 'quitar (tiempo / dinero) a alguien',
        translation: 'отнимать, забирать у кого-либо (que no te quite tiempo — чтобы не отнимал у тебя время)',
        example: 'que el nuevo trabajo no te quite todo el tiempo libre',
      },
    ],
    questions: [
      {
        q: '¿Qué quiere la empresa de Marta?',
        options: ['Que aprenda andaluz en seis meses', 'Que vuelva a Madrid', 'Que enseñe español a otros'],
        correct: 0,
      },
      {
        q: '¿Quién corrige el español de Marta?',
        options: ['Su jefa', 'Su madre', 'Lucía, una sevillana paciente'],
        correct: 2,
      },
      {
        q: '¿Cuántos días, al menos, le pide reservar a Pablo?',
        options: ['Tres días', 'Cinco días', 'Diez días'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Subjuntivo после глаголов воли и желания',
        note:
          'Когда субъект главного предложения хочет, чтобы что-то делал другой субъект, в придаточном после que идёт Presente de Subjuntivo. ' +
          'В тексте: «quiere que aprenda», «espero que deje», «pido que hable», «prefiere que practique», «deseo que vea», «quiero que reserves», «espero que tengas». ' +
          'Если субъект тот же — инфинитив без que: «quiero aprender», «espero leer».',
      },
      {
        topic: 'Antes de que / para que + Subjuntivo',
        note:
          'Союзы antes de que, para que (а также sin que, hasta que в значении будущего) всегда требуют Subjuntivo. ' +
          'В тексте: «antes de que empiecen las lluvias», «para que ella entienda algo». ' +
          'Это одна из самых стабильных конструкций B1: запомните союз — и автоматически ставьте subjuntivo.',
      },
    ],
  },

  {
    id: 'b1-002',
    level: 'B1',
    day: 2,
    title: 'Mis ojalás de junio',
    text:
      'Es viernes por la noche, junio se acaba y escribo desde mi cocina de Bilbao, con un café frío que ya no me apetece. ' +
      'Es un buen momento para los ojalás.\n\n' +
      'Ojalá llueva mañana. Llevamos un mes sin agua y el jardín está triste, los tomates apenas crecen. ' +
      'Ojalá los meteorólogos se equivoquen y, en vez de calor, nos traigan tormenta.\n\n' +
      'Ojalá mi hermana acepte el puesto de Valencia. Lleva dos años en una empresa que la agota; un cambio le sentaría bien. ' +
      'Sé que duda, sé que tiene miedo, pero ojalá se atreva. Yo, en su lugar, ya diría que sí.\n\n' +
      'Ojalá mis padres viajen este otoño. Nunca han visto Mallorca. ' +
      'Mi madre me dice por teléfono que no son edades para aviones; yo le contesto que ojalá deje de poner excusas y se compre el billete.\n\n' +
      'Y, sobre todo, ojalá pueda terminar la novela que llevo escribiendo desde Reyes. Solo me faltan dos capítulos. ' +
      'Ojalá la inspiración no se vaya de vacaciones antes que yo.\n\n' +
      'Mañana es otro día. Cierro el ordenador y, en silencio, repito un último ojalá: ojalá duerma bien.',
    vocabulary: [
      {
        word: 'ojalá',
        translation: 'дай бог; хоть бы (от арабского «in šā\\u2019a llāh» — «если пожелает Бог»); всегда + Subjuntivo',
        example: 'Ojalá llueva mañana.',
      },
      {
        word: 'apetecer (a alguien)',
        translation: 'хотеться (мне хочется); строится как gustar: me apetece un café',
        example: 'un café frío que ya no me apetece',
      },
      {
        word: 'equivocarse',
        translation: 'ошибаться (equivocarse de número; me he equivocado — я ошибся)',
        example: 'Ojalá los meteorólogos se equivoquen.',
      },
      {
        word: 'el meteorólogo / la meteoróloga',
        translation: 'метеоролог (la meteorología — наука о погоде; el hombre del tiempo — телеведущий)',
        example: 'Ojalá los meteorólogos se equivoquen.',
      },
      {
        word: 'la tormenta',
        translation: 'гроза, буря (la tormenta de verano; tormenta de ideas — мозговой штурм)',
        example: 'nos traigan tormenta',
      },
      {
        word: 'agotar (a alguien)',
        translation: 'изматывать, выматывать (agotar a alguien; estar agotado — быть выжатым)',
        example: 'una empresa que la agota',
      },
      {
        word: 'el puesto',
        translation: 'должность, рабочее место (un puesto de trabajo; quedarse sin puesto — потерять работу)',
        example: 'Ojalá mi hermana acepte el puesto de Valencia.',
      },
      {
        word: 'atreverse a',
        translation: 'осмеливаться, рискнуть (atreverse a hacer algo; no me atrevo — не решаюсь)',
        example: 'ojalá se atreva',
      },
      {
        word: 'sentar bien / mal a alguien',
        translation: 'идти на пользу/во вред; быть к лицу (le sentaría bien — пошло бы на пользу)',
        example: 'un cambio le sentaría bien',
      },
      {
        word: 'el billete',
        translation: 'билет (на самолёт, поезд); банкнота. В Лат. Америке часто el boleto',
        example: 'se compre el billete',
      },
      {
        word: 'faltar (a alguien)',
        translation: 'не хватать (строится как gustar: me faltan dos capítulos — мне не хватает двух глав)',
        example: 'Solo me faltan dos capítulos.',
      },
      {
        word: 'el capítulo',
        translation: 'глава (книги); серия (сериала); статья кодекса',
        example: 'me faltan dos capítulos',
      },
      {
        word: 'la inspiración',
        translation: 'вдохновение (inspirar — вдохновлять; inspirarse en — вдохновляться чем-то)',
        example: 'Ojalá la inspiración no se vaya.',
      },
      {
        word: 'los Reyes',
        translation: 'праздник Богоявления, 6 января — главный детский праздник в Испании, когда дарят подарки',
        example: 'la novela que llevo escribiendo desde Reyes',
      },
      {
        word: 'en silencio',
        translation: 'молча, в тишине (guardar silencio — хранить молчание)',
        example: 'repito un último ojalá en silencio',
      },
    ],
    questions: [
      {
        q: '¿Desde dónde escribe el narrador?',
        options: ['Madrid', 'Bilbao', 'Valencia'],
        correct: 1,
      },
      {
        q: '¿Qué espera el narrador para mañana?',
        options: ['Sol y calor', 'Lluvia y tormenta', 'Nieve'],
        correct: 1,
      },
      {
        q: '¿Cuántos capítulos le faltan para terminar la novela?',
        options: ['Cinco', 'Tres', 'Dos'],
        correct: 2,
      },
    ],
    grammar_notes: [
      {
        topic: 'Ojalá + Presente de Subjuntivo',
        note:
          'Слово ojalá (от арабского «дай бог») всегда сочетается с Subjuntivo. ' +
          'С Presente de Subjuntivo выражается надежда на настоящее или будущее: «ojalá llueva», «ojalá se atreva», «ojalá pueda», «ojalá duerma bien», «ojalá viajen», «ojalá no se vaya». ' +
          'Это эмоционально сильнее, чем espero que: ojalá подразумевает, что говорящий хочет, но не контролирует исход.',
      },
      {
        topic: 'Indicativo для факта + Subjuntivo для пожелания',
        note:
          'Типичный B1-баланс: рядом ставятся уверенное знание (Indicativo) и пожелание (Subjuntivo). ' +
          'В тексте: «Sé que duda, sé que tiene miedo» (объективная констатация — Indicativo), «pero ojalá se atreva» (то, чего хочу я — Subjuntivo). ' +
          'Так же: «Mi madre me dice que no son edades para aviones» (Indicativo) против «yo le contesto que ojalá deje de poner excusas» (Subjuntivo после ojalá).',
      },
    ],
  },

  {
    id: 'b1-003',
    level: 'B1',
    day: 3,
    title: 'Carta a mi madre',
    text:
      'Mamá:\n\n' +
      'Te escribo desde Madrid después de hablar contigo esta tarde. ' +
      'He pensado en lo que me has contado del piso y de la rodilla, y quiero que leas esto con paciencia.\n\n' +
      'Es importante que vayas al médico la semana que viene. No solo a la consulta del pueblo: pide que te manden al traumatólogo de León. ' +
      'No quiero que esperes seis meses más con dolor.\n\n' +
      'También es necesario que dejes de subir tú sola la compra al segundo piso. ' +
      'Habla con doña Pilar, paga a su hijo veinte euros la semana y deja que él lo haga. ' +
      'No es lujo, es sentido común.\n\n' +
      'Otra cosa, mamá: te pido que llames a Carmen. Sé que hace tiempo que no os veis, pero ella te quiere y se preocupa. ' +
      'Es una pena que dos amigas de toda la vida se distancien por un malentendido tonto.\n\n' +
      'Y, por favor, no quiero que sigas conduciendo de noche. La carretera de Astorga es peligrosa y tus ojos ya no son los de antes. ' +
      'Si necesitas ir al cine en invierno, te recojo yo en el coche.\n\n' +
      'Te llamo el domingo. Cuídate.\nTu hija, Sofía',
    vocabulary: [
      {
        word: 'la rodilla',
        translation: 'колено (las rodillas — колени; ponerse de rodillas — встать на колени)',
        example: 'lo que me has contado del piso y de la rodilla',
      },
      {
        word: 'la consulta',
        translation: 'приём (у врача); кабинет; запрос (la consulta médica — врачебный приём)',
        example: 'No solo a la consulta del pueblo',
      },
      {
        word: 'el traumatólogo / la traumatóloga',
        translation: 'травматолог (специалист по костям и суставам; la traumatología)',
        example: 'pide que te manden al traumatólogo de León',
      },
      {
        word: 'mandar a alguien a (un especialista)',
        translation: 'направлять (к специалисту); также: посылать, командовать (mandar a hacer algo)',
        example: 'que te manden al traumatólogo',
      },
      {
        word: 'la compra',
        translation: 'покупка; продукты, закупленные за один поход в магазин (hacer la compra, subir la compra)',
        example: 'que dejes de subir tú sola la compra',
      },
      {
        word: 'doña',
        translation: 'почтительное обращение к женщине + имя (как señora, но теплее: doña Pilar)',
        example: 'Habla con doña Pilar.',
      },
      {
        word: 'el lujo',
        translation: 'роскошь; излишество (un coche de lujo; permitirse un lujo)',
        example: 'No es lujo, es sentido común.',
      },
      {
        word: 'el sentido común',
        translation: 'здравый смысл (no tener sentido común — действовать неразумно)',
        example: 'es sentido común',
      },
      {
        word: 'distanciarse',
        translation: 'отдаляться, переставать общаться (distanciarse de un amigo)',
        example: 'que dos amigas de toda la vida se distancien',
      },
      {
        word: 'el malentendido',
        translation: 'недоразумение (mal- + entender; un malentendido tonto — глупая размолвка)',
        example: 'por un malentendido tonto',
      },
      {
        word: 'tonto, -a',
        translation: 'глупый, нелепый (una idea tonta; hacer el tonto — валять дурака)',
        example: 'un malentendido tonto',
      },
      {
        word: 'conducir',
        translation: 'водить машину (conduzco, conduces…); el carnet de conducir — водительские права',
        example: 'no quiero que sigas conduciendo de noche',
      },
      {
        word: 'la carretera',
        translation: 'шоссе, трасса (la carretera nacional; за городом — главные дороги в Испании)',
        example: 'La carretera de Astorga es peligrosa.',
      },
      {
        word: 'peligroso, -a',
        translation: 'опасный (el peligro — опасность; ¡cuidado, peligroso!)',
        example: 'La carretera de Astorga es peligrosa.',
      },
      {
        word: 'recoger (a alguien)',
        translation: 'заехать за кем-то; также: собирать, поднимать (recoger los juguetes)',
        example: 'te recojo yo en el coche',
      },
    ],
    questions: [
      {
        q: '¿De qué le duele a la madre?',
        options: ['La rodilla', 'La espalda', 'La cabeza'],
        correct: 0,
      },
      {
        q: '¿Quién es Carmen?',
        options: ['La hermana de la madre', 'Una amiga de toda la vida', 'La hija mayor de Sofía'],
        correct: 1,
      },
      {
        q: '¿Qué le pide la hija sobre conducir?',
        options: ['Que use solo el tren', 'Que no conduzca de noche', 'Que venda el coche'],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Expresiones impersonales + Subjuntivo',
        note:
          'Безличные конструкции, выражающие оценку или необходимость, требуют Subjuntivo: es importante que, es necesario que, es una pena que. ' +
          'В тексте: «es importante que vayas», «es necesario que dejes», «es una pena que dos amigas se distancien». ' +
          'Логика: говорящий не констатирует факт, а оценивает желательность — поэтому не Indicativo, а Subjuntivo.',
      },
      {
        topic: 'Querer / pedir + que + Subjuntivo (отрицание сохраняет Subjuntivo)',
        note:
          'После глаголов воли в утверждении или отрицании — всегда Subjuntivo: «no quiero que esperes», «no quiero que sigas», «te pido que llames», «pide que te manden». ' +
          'Объект просьбы или желания всегда новый субъект в придаточном.',
      },
    ],
  },

  {
    id: 'b1-004',
    level: 'B1',
    day: 4,
    title: 'Cinco minutos sin móvil',
    text:
      'Esta tarde, en una terraza de Lavapiés, una pareja estuvo dos horas sin hablarse. ' +
      'Cada uno miraba su móvil mientras el café se enfriaba. ' +
      'No es una imagen rara: la vemos cada día. Pero quizá ha llegado el momento de decir algo.\n\n' +
      'Es importante que aprendamos a estar presentes. ' +
      'Una conversación con la pareja, con un amigo, con la abuela, no se construye entre notificaciones. ' +
      'Es necesario que cerremos la pantalla y miremos a los ojos.\n\n' +
      'Es raro que un grupo de adolescentes coma junto sin tres móviles en la mesa. ' +
      'Y, sin embargo, es una pena que ellos se pierdan la ironía de su tío, la receta exacta de la tortilla de la abuela o la historia de cómo se conocieron sus padres. ' +
      'Esos detalles no llegan por WhatsApp.\n\n' +
      'No estoy en contra del móvil. Es útil que tengamos GPS, traductor, billetes electrónicos. ' +
      'Pero es bueno que existan momentos cerrados al teléfono. ' +
      'En casa proponemos una regla: durante la comida, los móviles se quedan en una cesta junto a la puerta. Funciona.\n\n' +
      'Vivimos rápido, miramos poco. Es urgente que recuperemos la atención antes de que olvidemos cómo se habla.',
    vocabulary: [
      {
        word: 'enfriarse',
        translation: 'остывать (el café se enfría; enfriar — охлаждать)',
        example: 'mientras el café se enfriaba',
      },
      {
        word: 'la imagen',
        translation: 'образ, картина (una imagen rara — нечастая картина; la imagen de un país)',
        example: 'No es una imagen rara.',
      },
      {
        word: 'presente (estar presente)',
        translation: 'присутствующий; внимательный к моменту («быть здесь и сейчас»)',
        example: 'Es importante que aprendamos a estar presentes.',
      },
      {
        word: 'la pantalla',
        translation: 'экран (телевизора, телефона, кинотеатра); la pantalla pequeña — телевидение',
        example: 'que cerremos la pantalla',
      },
      {
        word: 'la notificación',
        translation: 'уведомление (push-уведомление; notificar — извещать)',
        example: 'no se construye entre notificaciones',
      },
      {
        word: 'el / la adolescente',
        translation: 'подросток (la adolescencia — подростковый возраст)',
        example: 'un grupo de adolescentes',
      },
      {
        word: 'la ironía',
        translation: 'ирония (con ironía — с иронией; irónico, -a — ироничный)',
        example: 'que ellos se pierdan la ironía de su tío',
      },
      {
        word: 'la receta',
        translation: 'рецепт (кулинарный или медицинский); la receta de la tortilla',
        example: 'la receta exacta de la tortilla de la abuela',
      },
      {
        word: 'perderse algo',
        translation: 'пропустить, упустить (te has perdido la fiesta — ты пропустил вечеринку)',
        example: 'que ellos se pierdan la ironía',
      },
      {
        word: 'estar en contra de',
        translation: 'быть против (sinónimo: oponerse a; антоним a favor de)',
        example: 'No estoy en contra del móvil.',
      },
      {
        word: 'proponer',
        translation: 'предлагать (o→ue: propongo, propones, propone…); la propuesta — предложение',
        example: 'En casa proponemos una regla.',
      },
      {
        word: 'la regla',
        translation: 'правило (las reglas del juego); также линейка (для черчения)',
        example: 'proponemos una regla',
      },
      {
        word: 'la cesta',
        translation: 'корзина (плетёная; la cesta de la compra — продуктовая корзина)',
        example: 'los móviles se quedan en una cesta',
      },
      {
        word: 'recuperar',
        translation: 'вернуть, восстановить (recuperar el tiempo perdido; la recuperación)',
        example: 'que recuperemos la atención',
      },
      {
        word: 'urgente',
        translation: 'срочный, неотложный (es urgente — срочно нужно; la urgencia — экстренность)',
        example: 'Es urgente que recuperemos la atención.',
      },
    ],
    questions: [
      {
        q: '¿Dónde ocurre la escena inicial?',
        options: ['En una terraza de Lavapiés', 'En el metro de Madrid', 'En un restaurante de Barcelona'],
        correct: 0,
      },
      {
        q: '¿Cuál es la regla que propone la familia del autor?',
        options: [
          'No usar móvil en todo el día',
          'Dejar los móviles en una cesta junto a la puerta durante la comida',
          'Apagar los móviles a las nueve de la noche',
        ],
        correct: 1,
      },
      {
        q: '¿Qué opina el autor sobre el móvil?',
        options: [
          'Cree que hay que prohibirlo por completo',
          'Solo lo considera útil para el GPS',
          'Reconoce su utilidad, pero pide momentos sin él',
        ],
        correct: 2,
      },
    ],
    grammar_notes: [
      {
        topic: 'Es + adjetivo + que + Subjuntivo — целая галерея',
        note:
          'Текст собирает почти весь набор безличных оценок B1: «es importante que aprendamos», «es necesario que cerremos», «es raro que coma», «es una pena que se pierdan», «es útil que tengamos», «es bueno que existan», «es urgente que recuperemos». ' +
          'Все они оценивают ситуацию (важно/нужно/жаль/полезно/срочно) и поэтому требуют Subjuntivo, а не Indicativo.',
      },
      {
        topic: 'Antes de que + Subjuntivo (повторение)',
        note:
          'В финале: «antes de que olvidemos cómo se habla». ' +
          'Та же логика, что в b1-001: союз antes de que всегда вводит Subjuntivo, потому что событие ещё не произошло и относится к гипотетическому будущему.',
      },
    ],
  },

  {
    id: 'b1-005',
    level: 'B1',
    day: 5,
    title: 'Carta a Andrés',
    text:
      'Querido Andrés:\n\n' +
      'Te debía esta carta. Mucho ha pasado desde la boda de Carmen.\n\n' +
      'Me alegra muchísimo que hayas vuelto a Madrid. La oferta de la universidad es lo que esperabas y, por una vez, te toca a ti elegir. ' +
      'Siento que en Berlín hayas pasado dos inviernos solo, pero estoy contenta de que ahora tengamos otra vez los domingos.\n\n' +
      'Me molesta, sin embargo, que tu hermana siga sin hablarte. ' +
      'He tratado de entender su postura y no la veo. ' +
      'Lamento que ella no se dé cuenta del esfuerzo que tú has hecho. ' +
      'No es justo que tú cargues con un silencio que no inventaste.\n\n' +
      'Por otro lado, me sorprende que la tía Mercedes te haya escrito. ¡Después de quince años! ' +
      'Me alegro de que el correo te haya llegado a tiempo. ' +
      'Espero que respondas: una llamada bastaría. ' +
      'Es una pena que pierdas esa oportunidad por orgullo.\n\n' +
      'Yo, por mi parte, sigo nerviosa con el examen del miércoles. ' +
      'Me da rabia que el tribunal cambie la fecha cada dos por tres. ' +
      'Pero, tranquilo, no voy a hundirme.\n\n' +
      'Cena el viernes en mi casa, lentejas y vino de Toro. Trae a Lola si le apetece. Un abrazo.\nMarta',
    vocabulary: [
      {
        word: 'deber algo a alguien',
        translation: 'быть должным (письмо, услугу, деньги); te debo una llamada',
        example: 'Te debía esta carta.',
      },
      {
        word: 'la oferta',
        translation: 'предложение (рабочее, коммерческое); en oferta — со скидкой',
        example: 'La oferta de la universidad es lo que esperabas.',
      },
      {
        word: 'tocar a alguien',
        translation: 'настать чья-то очередь; выпадать (a ti te toca elegir; me toca pagar)',
        example: 'por una vez, te toca a ti elegir',
      },
      {
        word: 'la postura',
        translation: 'позиция, точка зрения; также поза тела (la postura del cuerpo)',
        example: 'He tratado de entender su postura.',
      },
      {
        word: 'el esfuerzo',
        translation: 'усилие, старание (hacer un esfuerzo; el esfuerzo merece la pena)',
        example: 'del esfuerzo que tú has hecho',
      },
      {
        word: 'cargar con',
        translation: 'нести бремя, отвечать за (cargar con la culpa, con un silencio, con una responsabilidad)',
        example: 'que tú cargues con un silencio que no inventaste',
      },
      {
        word: 'lamentar',
        translation: 'сожалеть, скорбеть (lamento que…; lo lamento — сожалею, мне жаль)',
        example: 'Lamento que ella no se dé cuenta.',
      },
      {
        word: 'el orgullo',
        translation: 'гордость; гордыня (negativo: por orgullo — из гордости)',
        example: 'que pierdas esa oportunidad por orgullo',
      },
      {
        word: 'bastar',
        translation: 'хватать, быть достаточным (basta con + inf; con eso basta)',
        example: 'una llamada bastaría',
      },
      {
        word: 'la oportunidad',
        translation: 'возможность, шанс (perder una oportunidad; aprovechar la oportunidad)',
        example: 'que pierdas esa oportunidad',
      },
      {
        word: 'dar rabia a alguien',
        translation: 'бесить, раздражать (¡qué rabia! — какая досада!; me da rabia que…)',
        example: 'Me da rabia que el tribunal cambie la fecha.',
      },
      {
        word: 'el tribunal',
        translation: 'экзаменационная или судебная комиссия (el tribunal del examen; el tribunal supremo)',
        example: 'que el tribunal cambie la fecha',
      },
      {
        word: 'cada dos por tres',
        translation: 'постоянно, через раз (idiomatic: то и дело)',
        example: 'cambie la fecha cada dos por tres',
      },
      {
        word: 'hundirse',
        translation: 'идти ко дну; пасть духом (hundirse en la tristeza; el barco se hunde)',
        example: 'no voy a hundirme',
      },
      {
        word: 'las lentejas',
        translation: 'чечевица — типичное домашнее блюдо в Испании (lentejas con chorizo)',
        example: 'cena en mi casa, lentejas y vino de Toro',
      },
      {
        word: 'el vino de Toro',
        translation: 'красное вино из района Toro (Castilla y León), плотное и насыщенное',
        example: 'lentejas y vino de Toro',
      },
    ],
    questions: [
      {
        q: '¿Por qué se alegra la narradora?',
        options: ['Porque Andrés ha vuelto a Madrid', 'Porque ha terminado el examen', 'Porque su hermana le ha hablado'],
        correct: 0,
      },
      {
        q: '¿Qué le sorprende de la tía Mercedes?',
        options: ['Que viva todavía en Madrid', 'Que haya escrito después de quince años', 'Que le mande dinero'],
        correct: 1,
      },
      {
        q: '¿Qué cena prepara la narradora?',
        options: ['Tortilla y ensalada', 'Pescado y vino blanco', 'Lentejas y vino de Toro'],
        correct: 2,
      },
    ],
    grammar_notes: [
      {
        topic: 'Verbos de emoción + que + Subjuntivo',
        note:
          'Эмоциональная реакция всегда вводит Subjuntivo через que: «me alegra que», «siento que», «me molesta que», «me sorprende que», «lamento que», «me da rabia que», «estoy contenta de que». ' +
          'Объект эмоции — то, что вызывает чувство; именно поэтому он подаётся не как факт (Indicativo), а как «то, что я переживаю» (Subjuntivo).',
      },
      {
        topic: 'Pretérito Perfecto de Subjuntivo: haya + participio',
        note:
          'Когда эмоция касается недавнего, уже совершённого события, используется Pretérito Perfecto de Subjuntivo — haber в форме Subjuntivo + participio: ' +
          '«me alegra que hayas vuelto», «siento que hayas pasado», «me sorprende que la tía Mercedes te haya escrito», «me alegro de que el correo te haya llegado». ' +
          'Это естественное продолжение Presente de Subjuntivo: те же формы haya / hayas / haya / hayamos / hayáis / hayan + participio.',
      },
    ],
  },

  {
    id: 'b1-006',
    level: 'B1',
    day: 6,
    title: 'En la consulta',
    text:
      '—Buenos días, doctora. Vengo porque mi marido lleva tres semanas con dolor en la espalda.\n\n' +
      '—Pase, siéntese. ¿Le aparece el dolor por la mañana o por la noche?\n\n' +
      '—Sobre todo de noche. Él dice que es la silla del despacho, pero yo dudo que sea solo eso.\n\n' +
      '—Hace bien en venir. No creo que se trate de un problema grave, pero conviene mirarlo. ¿Hace deporte?\n\n' +
      '—Tres veces a la semana, en el gimnasio del barrio. Ahora bien, no estoy segura de que levante pesas con la postura correcta.\n\n' +
      '—Es probable que tenga el músculo cargado. Le voy a pedir una radiografía, aunque dudo que veamos nada serio. ' +
      'Mientras tanto, que evite las pesas y que duerma con un cojín entre las rodillas.\n\n' +
      '—¿Y si el dolor sigue después de la radiografía?\n\n' +
      '—Pediremos resonancia. Pero, repito: no creo que haga falta. ' +
      'Es raro que una hernia aparezca a los treinta y cinco años sin un golpe fuerte. Lo más probable es que sea un mal apoyo.\n\n' +
      '—Gracias, doctora. ¿Cuándo nos darán la cita?\n\n' +
      '—Esta misma semana. Pasen por recepción y díganle a Rocío que es de mi parte.',
    vocabulary: [
      {
        word: 'la espalda',
        translation: 'спина (dolor de espalda — боль в спине; dar la espalda — повернуться спиной)',
        example: 'dolor en la espalda',
      },
      {
        word: 'el despacho',
        translation: 'рабочий кабинет (en casa o en la oficina); тж. el despacho del jefe',
        example: 'es la silla del despacho',
      },
      {
        word: 'tratarse de',
        translation: 'идти речь о (¿de qué se trata? — о чём речь?; no se trata de eso)',
        example: 'No creo que se trate de un problema grave.',
      },
      {
        word: 'convenir + inf',
        translation: 'стоит, следует (безличный совет: conviene mirarlo — стоит посмотреть)',
        example: 'conviene mirarlo',
      },
      {
        word: 'levantar pesas',
        translation: 'поднимать тяжести (la pesa — гиря/штанга; el levantamiento de pesas — тяжёлая атлетика)',
        example: 'no estoy segura de que levante pesas con la postura correcta',
      },
      {
        word: 'cargado, -a (un músculo)',
        translation: 'напряжённый, перегруженный (мышца); о компьютере — заряженный',
        example: 'Es probable que tenga el músculo cargado.',
      },
      {
        word: 'la radiografía',
        translation: 'рентген (la radio — здесь сокращение; hacer una radiografía)',
        example: 'Le voy a pedir una radiografía.',
      },
      {
        word: 'el cojín',
        translation: 'подушка декоративная или ортопедическая (la almohada — подушка для сна)',
        example: 'que duerma con un cojín entre las rodillas',
      },
      {
        word: 'la resonancia',
        translation: 'МРТ; также: резонанс (la resonancia magnética)',
        example: 'Pediremos resonancia.',
      },
      {
        word: 'la hernia',
        translation: 'грыжа (la hernia discal — грыжа межпозвоночного диска)',
        example: 'que una hernia aparezca a los treinta y cinco años',
      },
      {
        word: 'el golpe',
        translation: 'удар (un golpe fuerte; de golpe — внезапно; golpe de suerte — везение)',
        example: 'sin un golpe fuerte',
      },
      {
        word: 'el apoyo',
        translation: 'опора, поддержка (un mal apoyo — неправильная опора; el apoyo moral)',
        example: 'Lo más probable es que sea un mal apoyo.',
      },
      {
        word: 'la cita',
        translation: 'запись на приём; назначенная встреча; цитата. Pedir cita — записаться',
        example: '¿Cuándo nos darán la cita?',
      },
      {
        word: 'la recepción',
        translation: 'стойка регистрации (en una clínica, en un hotel); также: приём (вечер)',
        example: 'Pasen por recepción.',
      },
      {
        word: 'de mi parte',
        translation: 'от меня (передайте от меня; de parte de quién — от кого?)',
        example: 'díganle a Rocío que es de mi parte',
      },
    ],
    questions: [
      {
        q: '¿Cuánto lleva el marido con dolor?',
        options: ['Una semana', 'Tres semanas', 'Tres meses'],
        correct: 1,
      },
      {
        q: '¿Qué duda la mujer del marido?',
        options: ['Que el dolor sea solo por la silla del despacho', 'Que su marido haga deporte', 'Que el médico ayude'],
        correct: 0,
      },
      {
        q: '¿Qué cree la doctora sobre la hernia?',
        options: [
          'Que es muy probable',
          'Que es raro a los treinta y cinco años sin un golpe fuerte',
          'Que ya la tiene confirmada',
        ],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Verbos de duda y negación de opinión + Subjuntivo',
        note:
          'После глаголов сомнения и отрицания мнения подчинённое идёт в Subjuntivo: «dudo que sea», «no creo que se trate», «no estoy segura de que levante», «dudo que veamos», «no creo que haga falta». ' +
          'Утвердительные creo que, estoy segura de que, no dudo de que тянут за собой Indicativo — речь идёт об уверенности.',
      },
      {
        topic: 'Que + Subjuntivo как мягкая команда',
        note:
          'Врач говорит «que evite las pesas», «que duerma con un cojín» — это укороченная форма от «(quiero) que evite». ' +
          'В испанском такие распоряжения от врача, учителя или родителя звучат естественнее, чем прямой Imperativo. ' +
          'Конструкция: que + Presente de Subjuntivo + остальное предложение.',
      },
      {
        topic: 'Es probable que / es raro que + Subjuntivo',
        note:
          'Безличные оценки вероятности тоже идут с Subjuntivo: «es probable que tenga el músculo cargado», «es raro que una hernia aparezca», «lo más probable es que sea un mal apoyo». ' +
          'Чем выше уверенность (es seguro que, es evidente que), тем чаще возвращается Indicativo.',
      },
    ],
  },

  {
    id: 'b1-007',
    level: 'B1',
    day: 7,
    title: 'Brindis para Carmen y Diego',
    text:
      'Familia, amigos, queridos novios:\n\n' +
      'Me han pedido unas palabras y, aunque odio los micrófonos, no puedo decir que no a Carmen, que es como una hermana.\n\n' +
      'Queremos que vuestra vida juntos empiece despacio. Que no haya prisa en nada importante. ' +
      'Diego, tú que eres ingeniero, deseamos que no calcules la felicidad como un puente: ella se hace, no se diseña. ' +
      'Carmen, tú que eres profesora, te pedimos que no corrijas demasiado: el matrimonio no es un examen.\n\n' +
      'Deseamos que vuestra casa de Vigo huela siempre a pan recién hecho. Que la lluvia gallega no os apague el ánimo. ' +
      'Y, sobre todo, que tengáis paciencia las mañanas difíciles, porque las habrá.\n\n' +
      'Que los amigos que estamos hoy aquí seamos también los de las crisis. ' +
      'Que las parejas que llevan veinte años casadas, como mis padres, os den un consejo cuando os perdáis. ' +
      'Que el abuelo Manolo, que nos mira desde donde esté, sienta que su nieta ha elegido bien.\n\n' +
      'Que vuestros viajes sean largos, vuestros enfados breves y vuestras risas, contagiosas. ' +
      'Y, por favor, que la próxima sobrina llegue antes de tres años, que la familia espera con ganas.\n\n' +
      '¡Por Carmen y Diego, salud!',
    vocabulary: [
      {
        word: 'el brindis',
        translation: 'тост (на застолье; hacer un brindis; brindar por alguien — поднимать бокал за кого-то)',
        example: '¡Por Carmen y Diego, salud!',
      },
      {
        word: 'el micrófono',
        translation: 'микрофон (hablar por el micrófono; pasar el micrófono — передавать слово)',
        example: 'odio los micrófonos',
      },
      {
        word: 'diseñar',
        translation: 'проектировать, разрабатывать дизайн (diseñar un puente, una página web; el diseñador)',
        example: 'la felicidad se hace, no se diseña',
      },
      {
        word: 'el matrimonio',
        translation: 'брак, супружество; также: супружеская пара (un matrimonio mayor)',
        example: 'el matrimonio no es un examen',
      },
      {
        word: 'el ingeniero / la ingeniera',
        translation: 'инженер (ingeniero civil, ingeniero informático); la ingeniería — инженерия',
        example: 'tú que eres ingeniero',
      },
      {
        word: 'el puente',
        translation: 'мост; также: «продлённые выходные» в Испании (hacer puente)',
        example: 'la felicidad no se calcula como un puente',
      },
      {
        word: 'el ánimo',
        translation: 'дух, настроение (estar de buen ánimo; apagar el ánimo — выбивать почву из-под ног)',
        example: 'Que la lluvia gallega no os apague el ánimo.',
      },
      {
        word: 'apagar',
        translation: 'гасить, тушить, выключать (apagar la luz, el fuego, el ánimo)',
        example: 'que no os apague el ánimo',
      },
      {
        word: 'la crisis',
        translation: 'кризис (crisis económica, crisis de pareja; в B1-блоке — слово актуальной взрослой жизни)',
        example: 'los amigos de las crisis',
      },
      {
        word: 'el enfado',
        translation: 'ссора, недовольство (enfadarse con alguien; estar enfadado — сердиться)',
        example: 'vuestros enfados breves',
      },
      {
        word: 'la risa',
        translation: 'смех (reírse de algo; soltar la risa — расхохотаться)',
        example: 'vuestras risas, contagiosas',
      },
      {
        word: 'contagioso, -a',
        translation: 'заразительный (una risa contagiosa); о болезни — заразный',
        example: 'risas contagiosas',
      },
      {
        word: 'la sobrina / el sobrino',
        translation: 'племянница / племянник (los sobrinos — племянники, нередко: внуки в широком смысле)',
        example: 'la próxima sobrina',
      },
      {
        word: 'la nieta / el nieto',
        translation: 'внучка / внук (los nietos — внуки; los abuelos — бабушка с дедушкой)',
        example: 'que su nieta ha elegido bien',
      },
      {
        word: 'con ganas',
        translation: 'с воодушевлением, с охотой (tener ganas de — хотеть; con muchas ganas)',
        example: 'la familia espera con ganas',
      },
    ],
    questions: [
      {
        q: '¿De qué profesión es Diego?',
        options: ['Profesor', 'Ingeniero', 'Médico'],
        correct: 1,
      },
      {
        q: '¿Dónde van a vivir los novios?',
        options: ['En Vigo', 'En Madrid', 'En Sevilla'],
        correct: 0,
      },
      {
        q: '¿Qué desea el orador para la próxima sobrina?',
        options: ['Que llegue antes de tres años', 'Que llegue antes de cinco años', 'Que no llegue nunca'],
        correct: 0,
      },
    ],
    grammar_notes: [
      {
        topic: 'Que + Subjuntivo: пожелания через короткий тост',
        note:
          'Когда речь обращена ко всем сразу и формула воли упрощена, используется que + Subjuntivo: ' +
          '«que vuestra vida empiece despacio», «que no haya prisa», «que vuestra casa huela a pan», «que la lluvia no os apague el ánimo», «que tengáis paciencia», «que seamos los amigos de las crisis», «que vuestros viajes sean largos». ' +
          'Это стандартный жанр испанского brindis: «que…» в начале каждой реплики.',
      },
      {
        topic: 'Vosotros в кастильском испанском',
        note:
          'Тост обращён к двоим — поэтому повсеместно формы vosotros: «tengáis», «vuestra casa», «os apague», «os perdáis», «vuestros viajes», «vuestras risas». ' +
          'В Латинской Америке вместо этого был бы ustedes: «tengan», «su casa», «les apague», «se pierdan». Это маркер именно испанского испанского.',
      },
    ],
  },

  {
    id: 'b1-008',
    level: 'B1',
    day: 8,
    title: 'Reseña: «Volver», de Almodóvar',
    text:
      'Anoche volví a ver «Volver», de Almodóvar, después de casi diez años. ' +
      'Sigue siendo una de las películas que más me han marcado, aunque hoy me chirrían algunas cosas.\n\n' +
      'No creo que el guion sea perfecto. Hay diálogos que envejecen mal y una escena del entierro que dura demasiado. ' +
      'Tampoco creo que la trama se sostenga sin las actrices: si quitas a Penélope Cruz y a Carmen Maura, no queda película.\n\n' +
      'Pero no dudo de que la dirección artística es brillante. ' +
      'Los rojos de La Mancha, las cocinas de pueblo, las viejas que cuchichean en el patio: cada plano podría colgarse en una pared.\n\n' +
      'No me parece que el protagonista masculino aporte gran cosa, y es una pena que Almodóvar lo despache tan pronto. ' +
      'La película es de mujeres, sí, pero un personaje masculino más cuidado daría más fuerza al conjunto.\n\n' +
      'Es probable que muchos espectadores jóvenes la sientan lenta. Me da igual. ' +
      'Yo creo que cada cinco años conviene revisar las películas que nos formaron: nos descubrimos cambiados.\n\n' +
      '¿Recomendable? Sin duda, aunque dudo que vuelvas a salir con la misma idea sobre las madres, las hijas y los secretos de pueblo.',
    vocabulary: [
      {
        word: 'la reseña',
        translation: 'рецензия, обзор (de una película, un libro, un restaurante); reseñar — рецензировать',
        example: 'reseña de «Volver»',
      },
      {
        word: 'marcar a alguien',
        translation: 'оставить глубокий след (una película que me ha marcado; marcar la diferencia)',
        example: 'las películas que más me han marcado',
      },
      {
        word: 'chirriar',
        translation: 'скрипеть; в переносном смысле — резать слух, не сходиться (me chirría esta escena)',
        example: 'me chirrían algunas cosas',
      },
      {
        word: 'el guion',
        translation: 'сценарий фильма (в современной норме без accent: с 2010 г.); тж. дефис',
        example: 'No creo que el guion sea perfecto.',
      },
      {
        word: 'envejecer',
        translation: 'стареть; устаревать (envejecer mal — стареть плохо; envejecer con dignidad)',
        example: 'diálogos que envejecen mal',
      },
      {
        word: 'la trama',
        translation: 'сюжет, интрига (la trama de la novela; una trama complicada)',
        example: 'que la trama se sostenga',
      },
      {
        word: 'sostenerse',
        translation: 'держаться, опираться (sostenerse sin actrices, sostenerse en pie)',
        example: 'que la trama se sostenga sin las actrices',
      },
      {
        word: 'la dirección artística',
        translation: 'художественная постановка (декорации, костюмы, цвет; el director artístico)',
        example: 'la dirección artística es brillante',
      },
      {
        word: 'cuchichear',
        translation: 'шептаться (на ухо, втихаря; el cuchicheo)',
        example: 'las viejas que cuchichean en el patio',
      },
      {
        word: 'el plano',
        translation: 'кадр (в кино); план (общий, крупный); тж. карта города (el plano de Madrid)',
        example: 'cada plano podría colgarse en una pared',
      },
      {
        word: 'aportar',
        translation: 'привносить, добавлять, вносить вклад (aportar ideas, aportar gran cosa)',
        example: 'no me parece que el protagonista masculino aporte gran cosa',
      },
      {
        word: 'despachar (un personaje)',
        translation: 'быстро избавиться (от персонажа); тж. отправлять, разбирать (correo, asuntos)',
        example: 'que Almodóvar lo despache tan pronto',
      },
      {
        word: 'el conjunto',
        translation: 'целое, ансамбль (en conjunto — в целом; el conjunto de la obra)',
        example: 'daría más fuerza al conjunto',
      },
      {
        word: 'el espectador / la espectadora',
        translation: 'зритель (en el cine, en el teatro); el público — публика в целом',
        example: 'muchos espectadores jóvenes',
      },
      {
        word: 'revisar',
        translation: 'пересматривать, перепроверять (una película, los apuntes, el coche)',
        example: 'conviene revisar las películas que nos formaron',
      },
    ],
    questions: [
      {
        q: '¿Cuánto tiempo llevaba el narrador sin ver «Volver»?',
        options: ['Casi cinco años', 'Casi diez años', 'Casi veinte años'],
        correct: 1,
      },
      {
        q: '¿Qué opina del guion?',
        options: [
          'Que es perfecto',
          'Que no es perfecto y envejece mal en algunos diálogos',
          'Que es lo mejor de la película',
        ],
        correct: 1,
      },
      {
        q: '¿Qué destaca como brillante?',
        options: ['Las actrices secundarias', 'La música', 'La dirección artística'],
        correct: 2,
      },
    ],
    grammar_notes: [
      {
        topic: 'No creer / no pensar / no parecer / dudar que + Subjuntivo',
        note:
          'В отзыве рецензент сомневается — и поэтому почти везде Subjuntivo: «no creo que el guion sea perfecto», «tampoco creo que la trama se sostenga», «no me parece que el protagonista aporte gran cosa», «dudo que vuelvas a salir». ' +
          'Контраст утверждения и отрицания: «no dudo de que la dirección artística es brillante» — Indicativo, потому что здесь полная уверенность.',
      },
      {
        topic: 'Es probable que / es una pena que + Subjuntivo',
        note:
          'В тексте: «es probable que muchos espectadores la sientan lenta», «es una pena que Almodóvar lo despache tan pronto». ' +
          'Та же логика безличных оценок, что в b1-003 и b1-004: всё, что описывает вероятность или эмоциональную оценку, тянет за собой Subjuntivo.',
      },
    ],
  },

  {
    id: 'b1-009',
    level: 'B1',
    day: 9,
    title: 'Carta a Elena',
    text:
      'Elena, querida:\n\n' +
      'He leído tres veces tu última carta. Me he tomado tiempo, ya sabes que no suelo opinar sin pensar. Hoy sí me siento preparada.\n\n' +
      'Sobre lo del traslado a Barcelona: no creo que sea una decisión arriesgada como tú dices. ' +
      'Quince años en la misma ciudad pesan, y yo no pienso que cambiar de aires sea huir. ' +
      'Tú eres una mujer adulta con un trabajo estable; nadie está exigiendo que te lances al vacío.\n\n' +
      'No me parece justo que tu pareja insista en quedarse «por la familia». ' +
      'La familia, querida, viaja contigo si es de verdad familia. ' +
      'Y dudo que tus padres, que tanto te conocen, prefieran verte amargada en León a verte feliz en el Maresme.\n\n' +
      'Sobre el dinero, no me preocupa lo que escribes. ' +
      'Es importante que mires los números con calma, pero no creo que un piso barato cerca del mar sea un sueño imposible. ' +
      'Hay vida fuera de la Diagonal.\n\n' +
      'Eso sí: te pido que no me hagas caso del todo. Cada uno decide su rumbo. Yo solo escribo lo que pienso, con cariño.\n\n' +
      'Llámame cuando lo hayas hablado con Jorge. Un abrazo grande.\nMarta',
    vocabulary: [
      {
        word: 'el traslado',
        translation: 'переезд (de ciudad, de empresa); trasladarse a — переезжать',
        example: 'lo del traslado a Barcelona',
      },
      {
        word: 'arriesgado, -a',
        translation: 'рискованный (una decisión arriesgada; el riesgo — риск; arriesgar — рисковать)',
        example: 'no creo que sea una decisión arriesgada',
      },
      {
        word: 'pesar',
        translation: 'весить; в переносном смысле — тяготить, давить (los años pesan; me pesa la conciencia)',
        example: 'Quince años en la misma ciudad pesan.',
      },
      {
        word: 'cambiar de aires',
        translation: 'сменить обстановку (буквально: «сменить воздух»; типичная испанская идиома)',
        example: 'no pienso que cambiar de aires sea huir',
      },
      {
        word: 'huir',
        translation: 'убегать, спасаться (huir de un problema; la huida — бегство)',
        example: 'que cambiar de aires sea huir',
      },
      {
        word: 'estable',
        translation: 'устойчивый, стабильный (un trabajo estable; la estabilidad)',
        example: 'un trabajo estable',
      },
      {
        word: 'exigir',
        translation: 'требовать (e→i: exijo, exiges, exige…); la exigencia — требование',
        example: 'nadie está exigiendo que te lances al vacío',
      },
      {
        word: 'lanzarse a',
        translation: 'броситься, кинуться (lanzarse al vacío, lanzarse a hacer algo)',
        example: 'que te lances al vacío',
      },
      {
        word: 'insistir en',
        translation: 'настаивать на (insistir en quedarse; la insistencia)',
        example: 'tu pareja insista en quedarse',
      },
      {
        word: 'amargado, -a',
        translation: 'озлобленный, обиженный на жизнь (amargar — горчить; amargo — горький)',
        example: 'verte amargada en León',
      },
      {
        word: 'el Maresme',
        translation: 'прибрежная зона к северу от Барселоны, серия маленьких городков у моря',
        example: 'verte feliz en el Maresme',
      },
      {
        word: 'la Diagonal',
        translation: 'главный диагональный проспект Барселоны (Avinguda Diagonal), символ дорогого центра',
        example: 'Hay vida fuera de la Diagonal.',
      },
      {
        word: 'el rumbo',
        translation: 'курс, направление (el rumbo de la vida; cambiar de rumbo)',
        example: 'Cada uno decide su rumbo.',
      },
      {
        word: 'hacer caso a alguien',
        translation: 'слушать, прислушиваться (hazme caso — послушай меня; no hacer ni caso — ноль внимания)',
        example: 'te pido que no me hagas caso del todo',
      },
      {
        word: 'del todo',
        translation: 'полностью, до конца (no del todo — не вполне; estar del todo de acuerdo)',
        example: 'que no me hagas caso del todo',
      },
    ],
    questions: [
      {
        q: '¿Qué piensa la narradora sobre el traslado de Elena?',
        options: ['Que no es una decisión arriesgada', 'Que es claramente una huida', 'Que es imposible'],
        correct: 0,
      },
      {
        q: '¿Qué dice de la pareja de Elena?',
        options: [
          'Que insiste en quedarse «por la familia» y a la narradora no le parece justo',
          'Que la apoya en todo',
          'Que ya se ha mudado a Barcelona',
        ],
        correct: 0,
      },
      {
        q: '¿Qué le pide la narradora al final?',
        options: [
          'Que le haga caso del todo',
          'Que no le haga caso del todo, porque cada uno decide su rumbo',
          'Que no la llame nunca más',
        ],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'No creer / no pensar / no parecer + que + Subjuntivo (повторение)',
        note:
          'Личное мнение в отрицании — Subjuntivo: «no creo que sea una decisión arriesgada», «no pienso que cambiar de aires sea huir», «no me parece justo que tu pareja insista», «no creo que un piso barato sea un sueño imposible», «dudo que tus padres prefieran». ' +
          'В утверждении те же глаголы дали бы Indicativo: «creo que es», «pienso que…».',
      },
      {
        topic: 'Cuando + Pretérito Perfecto de Subjuntivo для будущего действия',
        note:
          'Финальное «Llámame cuando lo hayas hablado con Jorge» — нормальная B1-структура: cuando + Subjuntivo для будущего, и именно Pret Perfecto de Subjuntivo, потому что говорящий имеет в виду «после того, как ты это уже обсудишь». ' +
          'Сравни: «cuando llegues» (когда приедешь) и «cuando hayas llegado» (когда уже приедешь, после прибытия).',
      },
    ],
  },

  {
    id: 'b1-010',
    level: 'B1',
    day: 10,
    title: 'Un año sin redes sociales',
    text:
      'Hace exactamente un año cerré todas mis redes. Instagram, Twitter, LinkedIn. ' +
      'La pregunta que más recibo en estos meses es la misma: ¿no te aburres? La respuesta corta es no. La larga, esta.\n\n' +
      'Es bueno que reconozcamos lo que se gana al silencio. Lo primero es el tiempo. ' +
      'Antes pasaba dos horas al día revisando vidas ajenas; hoy esas dos horas las dedico a leer o a cocinar despacio. ' +
      'No creo que sea saludable consumir tanta información cada día.\n\n' +
      'También es bueno que nuestra cabeza descanse. Sin notificaciones constantes, los pensamientos se ordenan: aparecen ideas que llevaban años esperando. ' +
      'No pretendo que todo el mundo siga este camino, pero quizá deba probarlo más gente.\n\n' +
      'Por otro lado, no diré que sea fácil. He perdido el contacto con amigos que solo escriben por allí. ' +
      'Es triste que algunas amistades dependan tanto de un like. ' +
      'Y me molesta que las invitaciones a bodas y cumpleaños lleguen por aplicaciones que ya no abro.\n\n' +
      '¿Volveré? Lo dudo. Espero que algún día las redes cambien y que la conversación pese más que la imagen. ' +
      'Mientras tanto, sigo leyendo libros de papel en una cafetería de Malasaña.',
    vocabulary: [
      {
        word: 'la red social',
        translation: 'социальная сеть (las redes sociales — соцсети; la red — сеть в широком смысле)',
        example: 'cerré todas mis redes',
      },
      {
        word: 'aburrirse',
        translation: 'скучать (me aburro; el aburrimiento — скука; aburrido — скучный или скучающий)',
        example: '¿no te aburres?',
      },
      {
        word: 'ajeno, -a',
        translation: 'чужой, не свой (vidas ajenas; lo ajeno — чужое)',
        example: 'revisando vidas ajenas',
      },
      {
        word: 'saludable',
        translation: 'полезный для здоровья (una comida saludable; la salud — здоровье)',
        example: 'no creo que sea saludable',
      },
      {
        word: 'la cantidad',
        translation: 'количество (la cantidad de — количество чего-то; en grandes cantidades)',
        example: 'tanta información cada día',
      },
      {
        word: 'ordenarse',
        translation: 'приходить в порядок (los pensamientos se ordenan); ordenar — упорядочивать',
        example: 'los pensamientos se ordenan',
      },
      {
        word: 'pretender',
        translation: 'претендовать, стремиться к, утверждать (⚠️ ложный друг: НЕ «делать вид»)',
        example: 'No pretendo que todo el mundo siga este camino.',
      },
      {
        word: 'el contacto',
        translation: 'связь, контакт (perder el contacto; mantener el contacto)',
        example: 'He perdido el contacto con amigos.',
      },
      {
        word: 'la amistad',
        translation: 'дружба (una amistad de años; el amigo / la amiga — друг/подруга)',
        example: 'algunas amistades dependan tanto de un like',
      },
      {
        word: 'depender de',
        translation: 'зависеть от (depender de algo / de alguien; la dependencia)',
        example: 'que algunas amistades dependan tanto de un like',
      },
      {
        word: 'el like',
        translation: 'лайк (англицизм; меньшинство пишет «me gusta», но в речи обычно el like)',
        example: 'dependan tanto de un like',
      },
      {
        word: 'la aplicación',
        translation: 'приложение (мобильное; la app — короткая форма); тж. применение',
        example: 'aplicaciones que ya no abro',
      },
      {
        word: 'constante',
        translation: 'постоянный, непрерывный (notificaciones constantes; la constancia — постоянство)',
        example: 'sin notificaciones constantes',
      },
      {
        word: 'mientras tanto',
        translation: 'тем временем, между тем (синоним entretanto)',
        example: 'Mientras tanto, sigo leyendo libros de papel.',
      },
      {
        word: 'el papel',
        translation: 'бумага; роль (un libro de papel — бумажная книга; un papel importante — важная роль)',
        example: 'libros de papel',
      },
      {
        word: 'la cafetería',
        translation: 'кафе с сидячими местами, где подают кофе и закуски (≠ el café как напиток)',
        example: 'una cafetería de Malasaña',
      },
    ],
    questions: [
      {
        q: '¿Qué dejó de hacer el autor hace un año?',
        options: ['Trabajar en oficinas', 'Usar las redes sociales', 'Leer libros de papel'],
        correct: 1,
      },
      {
        q: '¿Qué ha ganado, según el autor?',
        options: ['Más dinero', 'Tiempo y descanso mental', 'Más seguidores'],
        correct: 1,
      },
      {
        q: '¿Qué le molesta al autor?',
        options: [
          'Que las invitaciones lleguen por aplicaciones que ya no abre',
          'Que sus amigos le envíen demasiadas cartas',
          'Que las cafeterías cierren tarde',
        ],
        correct: 0,
      },
    ],
    grammar_notes: [
      {
        topic: 'Galería de triggers de Subjuntivo en un mismo texto',
        note:
          'Пост в блоге собирает все ключевые группы B1-блока: «es bueno que reconozcamos», «no creo que sea saludable», «es bueno que nuestra cabeza descanse», «no pretendo que todo el mundo siga», «quizá deba probarlo más gente», «es triste que algunas amistades dependan», «me molesta que las invitaciones lleguen», «espero que las redes cambien y que la conversación pese». ' +
          'Это компактный обзор тем дней 1–10: воля, эмоция, сомнение, безличная оценка.',
      },
      {
        topic: 'Quizá / quizás + Subjuntivo',
        note:
          'Quizá и quizás вводят сомнение и часто берут Subjuntivo, особенно когда говорящий по-настоящему не уверен: «quizá deba probarlo más gente». ' +
          'С Indicativo (quizá debe probarlo) звучало бы как более вероятное предположение; с Subjuntivo — как открытая гипотеза. На B1 Subjuntivo здесь — стандарт.',
      },
    ],
  },

  {
    id: 'b1-011',
    level: 'B1',
    day: 11,
    title: 'Cuando vuelva de Lisboa',
    text:
      'Estoy en Lisboa, en un café junto al Tajo, y aprovecho el wifi para escribirte rápido. ' +
      'Cuando vuelva a Madrid el domingo por la noche, te llamo y montamos algo en serio.\n\n' +
      'Mira, cuando llegue al piso, lo primero que pienso hacer es dormir doce horas seguidas. ' +
      'Llevo cinco días caminando sin parar y noto las piernas pesadas. ' +
      'Después, en cuanto recupere fuerzas, quiero ver a mi hermana: ella prometió enseñarme las fotos de la boda tan pronto como yo aterrice en España.\n\n' +
      'Lo importante: cuando tenga un hueco entre semana, paso por tu barrio. ' +
      'Antes de que termine octubre, quiero probar ese peruano del que tanto hablas. ' +
      'Reserva tú, por favor; yo invito esta vez.\n\n' +
      'He hablado con Lola y dice que, en cuanto le confirmen el bonus de fin de año, organizaremos una escapada a Asturias, tan pronto como ella acabe el proyecto del banco. ' +
      'Yo me apunto. Cuando se cierren las fechas, te aviso por WhatsApp.\n\n' +
      'A propósito, mi madre quiere que vayamos a comer a su casa cuando volvamos de Asturias. ' +
      'Ya conoces sus paellas. De hecho, dice que esta vez la hará con marisco fresco del mercado de Avilés.\n\n' +
      'Una cosa más: cuando me toque hacer las maletas mañana por la noche, te llamo por videollamada para que veas el piso donde me he quedado. ' +
      'Es una joya del barrio de Alfama, con azulejos azules en la fachada. Un abrazo enorme desde Portugal.\n\nMarta',
    vocabulary: [
      {
        word: 'el Tajo',
        translation: 'река Тахо — крупнейшая на Иберийском полуострове, течёт через Толедо и впадает в океан в Лиссабоне',
        example: 'un café junto al Tajo',
      },
      {
        word: 'aprovechar',
        translation: 'воспользоваться, использовать; aprovechar para + inf — пользуясь моментом сделать что-то',
        example: 'aprovecho el wifi para escribirte',
      },
      {
        word: 'montar algo',
        translation: 'устроить, организовать (montar una fiesta, montar un plan); разг. — затеять',
        example: 'montamos algo en serio',
      },
      {
        word: 'seguido, -a',
        translation: 'подряд, кряду (doce horas seguidas; dos días seguidos)',
        example: 'dormir doce horas seguidas',
      },
      {
        word: 'en cuanto',
        translation: 'как только (союз времени; + Subjuntivo для будущего, + Indicativo для прошлого)',
        example: 'en cuanto recupere fuerzas',
      },
      {
        word: 'tan pronto como',
        translation: 'как только, сразу как (синоним en cuanto; + Subjuntivo для будущего)',
        example: 'tan pronto como yo aterrice',
      },
      {
        word: 'aterrizar',
        translation: 'приземляться (про самолёт); el aterrizaje — посадка; антоним despegar',
        example: 'tan pronto como yo aterrice en España',
      },
      {
        word: 'el hueco',
        translation: 'окошко, свободный промежуток; буквально «дыра, пустое место» (tener un hueco en la agenda)',
        example: 'cuando tenga un hueco entre semana',
      },
      {
        word: 'entre semana',
        translation: 'в будни (в отличие от fin de semana — выходные)',
        example: 'cuando tenga un hueco entre semana',
      },
      {
        word: 'la escapada',
        translation: 'короткая поездка, вылазка (una escapada de fin de semana; escaparse — улизнуть)',
        example: 'organizaremos una escapada a Asturias',
      },
      {
        word: 'apuntarse a',
        translation: 'записаться, присоединиться (a un curso, a un plan); ¡me apunto! — я в деле!',
        example: 'Yo me apunto.',
      },
      {
        word: 'avisar',
        translation: 'предупредить, дать знать (avisar a alguien de algo; el aviso — уведомление)',
        example: 'te aviso por WhatsApp',
      },
      {
        word: 'a propósito',
        translation: 'кстати, к слову; также «нарочно» (lo hizo a propósito — он сделал это нарочно)',
        example: 'A propósito, mi madre quiere que vayamos.',
      },
      {
        word: 'de hecho',
        translation: 'на самом деле, фактически (вводное; синоним: en realidad)',
        example: 'De hecho, dice que esta vez la hará con marisco.',
      },
      {
        word: 'el marisco',
        translation: 'морепродукты (креветки, мидии и т.п.); кастильский собирательный термин',
        example: 'la hará con marisco fresco',
      },
      {
        word: 'tocarle a alguien hacer algo',
        translation: 'настать чья-то очередь делать что-то (me toca pagar; cuando me toque hacer las maletas)',
        example: 'cuando me toque hacer las maletas',
      },
      {
        word: 'el azulejo',
        translation: 'изразец, расписная керамическая плитка — характерный элемент португальских и испанских фасадов',
        example: 'con azulejos azules en la fachada',
      },
      {
        word: 'la fachada',
        translation: 'фасад здания (la fachada principal; en sentido figurado: показная сторона)',
        example: 'azulejos azules en la fachada',
      },
    ],
    questions: [
      {
        q: '¿Qué piensa hacer la narradora en cuanto llegue a su piso?',
        options: ['Dormir doce horas seguidas', 'Llamar a su madre', 'Ver a su hermana'],
        correct: 0,
      },
      {
        q: '¿Cuándo organizarán la escapada a Asturias?',
        options: [
          'Antes de que termine octubre',
          'Tan pronto como Lola acabe el proyecto del banco y le confirmen el bonus',
          'Cuando la narradora aterrice en Madrid',
        ],
        correct: 1,
      },
      {
        q: '¿Qué le propone hacer a Pablo por videollamada?',
        options: [
          'Que vean juntos las fotos de la boda',
          'Que reserve mesa en el restaurante peruano',
          'Que vea el piso de Alfama donde se ha quedado',
        ],
        correct: 2,
      },
    ],
    grammar_notes: [
      {
        topic: 'Cuando / en cuanto / tan pronto como + Subjuntivo для будущего',
        note:
          'Союзы времени, когда речь идёт о ещё не случившемся, обязательно требуют Subjuntivo: «cuando vuelva», «cuando llegue», «en cuanto recupere fuerzas», «tan pronto como yo aterrice», «cuando tenga un hueco», «cuando se cierren las fechas», «cuando volvamos», «cuando me toque». ' +
          'Если же речь о привычке или прошлом, те же союзы возьмут Indicativo: «cuando llego a casa, ceno» (обычно), «cuando llegué, cené» (прошлое).',
      },
      {
        topic: 'Antes de que / para que (повторение)',
        note:
          '«Antes de que termine octubre» и «para que veas el piso» — стабильные триггеры Subjuntivo. ' +
          'Antes de que всегда вводит будущее или гипотетическое событие; para que всегда выражает цель. Ни один из этих союзов не сочетается с Indicativo.',
      },
    ],
  },

  {
    id: 'b1-012',
    level: 'B1',
    day: 12,
    title: 'Para que entiendas',
    text:
      'Hijo, te dejo esta nota en la nevera para que la leas con calma cuando vuelvas del instituto. ' +
      'Tu padre y yo hemos hablado largo y, antes de que pongas mala cara, déjanos explicarte.\n\n' +
      'Te subimos la paga semanal, sí, pero a fin de que aprendas a administrar el dinero de verdad. ' +
      'Te damos veinte euros más cada viernes para que puedas pagarte tú el transporte, el bocadillo del recreo y algún capricho razonable. ' +
      'No es un regalo: es una herramienta para que practiques.\n\n' +
      'A cambio, te pedimos dos cosas pequeñas. La primera: que apuntes en el móvil lo que gastas, para que a fin de mes podamos sentarnos los tres y mirar los números sin discusiones. ' +
      'La segunda: que metas el cinco por ciento en la hucha de la cocina, para que tengas un colchón en caso de imprevisto.\n\n' +
      'Sé lo que estás pensando: «mamá ya está con sus clases». No es eso. Te lo decimos para que entiendas cómo funciona una casa por dentro. ' +
      'Cuando tengas dieciocho años y vivas fuera, no quiero que te encuentres pagando intereses al banco sin enterarte.\n\n' +
      'Por cierto: el sábado, cena con la abuela. Habla bajito al principio, para que ella se vaya enterando del plan poco a poco; ya sabes cómo se pone con el tema del dinero.\n\n' +
      'Hay tortilla en el horno. Cómete media, deja media para tu hermana. Un beso enorme.\nMamá',
    vocabulary: [
      {
        word: 'la nota',
        translation: 'записка, заметка; tomar nota — записать; dejar una nota — оставить записку',
        example: 'te dejo esta nota en la nevera',
      },
      {
        word: 'la nevera',
        translation: 'холодильник (кастильский вариант; в Лат. Америке часто el refrigerador, в Мексике el refri)',
        example: 'te dejo esta nota en la nevera',
      },
      {
        word: 'la paga',
        translation: 'карманные деньги (los padres dan paga a los hijos); также жалование (la paga extra)',
        example: 'Te subimos la paga semanal.',
      },
      {
        word: 'administrar',
        translation: 'распоряжаться, управлять (administrar el dinero, una empresa); la administración',
        example: 'aprendas a administrar el dinero',
      },
      {
        word: 'a fin de que',
        translation: 'с целью того, чтобы (книжный синоним para que; всегда + Subjuntivo)',
        example: 'a fin de que aprendas a administrar',
      },
      {
        word: 'el bocadillo',
        translation: 'испанский сэндвич — багет с начинкой; el bocadillo de jamón — типичная еда в школе',
        example: 'el bocadillo del recreo',
      },
      {
        word: 'el recreo',
        translation: 'школьная перемена (в colegio и instituto); recrearse — отдыхать, развлекаться',
        example: 'el bocadillo del recreo',
      },
      {
        word: 'el capricho',
        translation: 'каприз, прихоть; algún capricho — какое-то баловство (un capricho razonable — разумная прихоть)',
        example: 'algún capricho razonable',
      },
      {
        word: 'la herramienta',
        translation: 'инструмент (как предмет, так и в переносном смысле — средство)',
        example: 'una herramienta para que practiques',
      },
      {
        word: 'a cambio',
        translation: 'взамен, в обмен (a cambio de algo; sin pedir nada a cambio)',
        example: 'A cambio, te pedimos dos cosas.',
      },
      {
        word: 'apuntar',
        translation: 'записывать (apuntar en el cuaderno; apuntar lo que gastas); тж. apuntarse a — записаться',
        example: 'que apuntes lo que gastas',
      },
      {
        word: 'la hucha',
        translation: 'копилка (домашняя; ahorrar en la hucha; el ahorro — сбережения)',
        example: 'que metas el cinco por ciento en la hucha',
      },
      {
        word: 'el colchón',
        translation: 'матрас; в переносном смысле — финансовая подушка (un colchón económico)',
        example: 'para que tengas un colchón en caso de imprevisto',
      },
      {
        word: 'el imprevisto',
        translation: 'непредвиденное событие, неожиданность (en caso de imprevisto; surgir un imprevisto)',
        example: 'en caso de imprevisto',
      },
      {
        word: 'los intereses',
        translation: 'проценты (по кредиту); тж. интересы (мн.ч. от el interés)',
        example: 'pagando intereses al banco',
      },
      {
        word: 'enterarse de',
        translation: 'узнавать, разбираться, замечать (no se entera — он не врубается; enterarse de algo)',
        example: 'sin enterarte',
      },
      {
        word: 'por cierto',
        translation: 'кстати (вводное; синоним a propósito); НЕ путать с «por supuesto» — конечно',
        example: 'Por cierto: el sábado, cena con la abuela.',
      },
      {
        word: 'ponerse (con un tema)',
        translation: 'завестись на тему, разойтись (ya sabes cómo se pone — ты знаешь, как её заносит)',
        example: 'ya sabes cómo se pone con el tema del dinero',
      },
    ],
    questions: [
      {
        q: '¿Por qué le suben la paga al hijo?',
        options: [
          'Para que aprenda a administrar el dinero',
          'Para que deje de pedir cosas a sus padres',
          'Para que ahorre y se compre un móvil',
        ],
        correct: 0,
      },
      {
        q: '¿Qué dos cosas le piden a cambio?',
        options: [
          'Que estudie más y que ayude en casa',
          'Que apunte sus gastos y que meta el cinco por ciento en la hucha',
          'Que llame a la abuela y que limpie su habitación',
        ],
        correct: 1,
      },
      {
        q: '¿Qué consejo le da la madre sobre la cena del sábado?',
        options: [
          'Que no vaya, mejor quedarse en casa',
          'Que hable bajito al principio, para que la abuela se vaya enterando del plan poco a poco',
          'Que le cuente todo de golpe a la abuela',
        ],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Para que / a fin de que + Subjuntivo (цель)',
        note:
          'Конструкции цели всегда требуют Subjuntivo, если субъекты главного и придаточного — разные. ' +
          'В тексте: «para que la leas», «a fin de que aprendas», «para que puedas pagarte», «para que practiques», «para que podamos sentarnos», «para que tengas un colchón», «para que entiendas», «para que ella se vaya enterando». ' +
          'Если субъект тот же, используется para + инфинитив: «trabajo para ahorrar» (не «para que ahorre»).',
      },
      {
        topic: 'Antes de que / cuando + Subjuntivo (повторение)',
        note:
          '«Antes de que pongas mala cara» и «cuando vuelvas del instituto», «cuando tengas dieciocho años» — снова союзы будущего и предостережения с Subjuntivo. ' +
          'На B1 они работают как единый паттерн: союз времени или цели, обращённый в будущее или гипотезу → Subjuntivo автоматически.',
      },
    ],
  },

  {
    id: 'b1-013',
    level: 'B1',
    day: 13,
    title: 'Aunque llueva',
    text:
      'Mi abuela tiene una frase para todo: «Aunque llueva, el camino se hace andando». ' +
      'La oigo desde niña y, a mis veintinueve años, empieza a tener sentido del todo.\n\n' +
      'Este lunes, aunque sea difícil, voy a dejar mi trabajo en la consultora. ' +
      'Llevo cuatro años allí. Gano bien, viajo a Frankfurt cada dos meses, mi jefe me valora. ' +
      'Y, sin embargo, vuelvo a casa vacía cada noche. ' +
      'Aunque mi madre piense que estoy loca, no quiero esperar a los cuarenta para reaccionar.\n\n' +
      'He montado un pequeño taller de cerámica en Lavapiés con dos amigas. ' +
      'Aunque al principio ganemos poco, los números salen: tenemos clientes, una web sencilla y una página de Instagram que crece despacio. ' +
      'Aunque no nos hagamos ricas, vamos a vivir tranquilas. ' +
      'Aunque el primer invierno sea duro, sé que aguantaremos.\n\n' +
      'Mis amigas de la oficina no lo entienden. ' +
      'Aunque tú insistas en que «estás muy bien», muchos de nosotros estamos cansados de oficinas grises. ' +
      'Aunque resulte raro decirlo, prefiero las manos sucias de barro a las uñas perfectas de las reuniones de los viernes.\n\n' +
      'Mi padre me ha sorprendido. Aunque él mismo trabajó cuarenta años en una fábrica, ayer me dijo: «Hija, aunque te equivoques, hazlo. Lo importante es elegir tú». ' +
      'Le di un abrazo larguísimo.\n\n' +
      'Pongo punto final a esta carta porque llaman al timbre. ' +
      'Aunque no sé qué saldrá de todo esto, mañana firmo la baja voluntaria y se acabó. Voy a por ello.',
    vocabulary: [
      {
        word: 'aunque',
        translation: 'хотя, даже если; + Subjuntivo для гипотезы или уступки в будущем, + Indicativo для констатации факта',
        example: 'Aunque llueva, el camino se hace andando.',
      },
      {
        word: 'la consultora',
        translation: 'консалтинговая фирма (la consultora estratégica; el consultor — консультант)',
        example: 'voy a dejar mi trabajo en la consultora',
      },
      {
        word: 'valorar a alguien',
        translation: 'ценить, придавать значение (mi jefe me valora; sentirse valorado)',
        example: 'mi jefe me valora',
      },
      {
        word: 'vacío, -a',
        translation: 'пустой; в переносном смысле — опустошённый (sentirse vacío; el vacío — пустота)',
        example: 'vuelvo a casa vacía cada noche',
      },
      {
        word: 'reaccionar',
        translation: 'отреагировать, начать действовать (reaccionar a tiempo; la reacción)',
        example: 'no quiero esperar a los cuarenta para reaccionar',
      },
      {
        word: 'el taller',
        translation: 'мастерская; также семинар (un taller de cerámica; un taller de escritura)',
        example: 'un pequeño taller de cerámica',
      },
      {
        word: 'la cerámica',
        translation: 'керамика (как материал и как ремесло; un jarrón de cerámica)',
        example: 'un taller de cerámica',
      },
      {
        word: 'los números salen',
        translation: 'цифры сходятся, концы с концами сводятся (если no salen los números — не сходится)',
        example: 'los números salen',
      },
      {
        word: 'aguantar',
        translation: 'выдерживать, терпеть (aguantar el dolor, aguantar un invierno duro)',
        example: 'sé que aguantaremos',
      },
      {
        word: 'gris',
        translation: 'серый; в переносном смысле — унылый, безликий (un día gris; una oficina gris)',
        example: 'cansados de oficinas grises',
      },
      {
        word: 'resultar',
        translation: 'оказываться, выходить (resulta raro — звучит странно; el resultado — результат)',
        example: 'Aunque resulte raro decirlo',
      },
      {
        word: 'el barro',
        translation: 'глина; грязь после дождя (manos sucias de barro; un cacharro de barro)',
        example: 'las manos sucias de barro',
      },
      {
        word: 'la uña',
        translation: 'ноготь (las uñas perfectas; comerse las uñas — грызть ногти)',
        example: 'las uñas perfectas de las reuniones',
      },
      {
        word: 'equivocarse',
        translation: 'ошибаться (повторение из b1-002; aunque te equivoques — даже если ошибёшься)',
        example: 'aunque te equivoques, hazlo',
      },
      {
        word: 'el timbre',
        translation: 'дверной звонок; tocar / llamar al timbre — звонить в дверь',
        example: 'llaman al timbre',
      },
      {
        word: 'la baja voluntaria',
        translation: 'добровольное увольнение по своей инициативе (firmar la baja; coger la baja — взять отпуск по болезни)',
        example: 'mañana firmo la baja voluntaria',
      },
      {
        word: 'ir a por ello / algo',
        translation: 'идти за этим, рвануть; разг. — браться за дело решительно (¡a por ello!)',
        example: 'Voy a por ello.',
      },
      {
        word: 'poner punto final a',
        translation: 'поставить точку, завершить (poner punto final a una carta, a una etapa)',
        example: 'Pongo punto final a esta carta.',
      },
    ],
    questions: [
      {
        q: '¿Qué decisión va a tomar la narradora este lunes?',
        options: [
          'Pedir un aumento en la consultora',
          'Dejar su trabajo en la consultora y dedicarse al taller de cerámica',
          'Mudarse a Frankfurt definitivamente',
        ],
        correct: 1,
      },
      {
        q: '¿Cómo reacciona el padre de la narradora?',
        options: [
          'Le pide que no se equivoque, que vuelva atrás',
          'No le habla durante días',
          'La apoya: «aunque te equivoques, hazlo; lo importante es elegir tú»',
        ],
        correct: 2,
      },
      {
        q: '¿Qué prefiere la narradora?',
        options: [
          'Las uñas perfectas de las reuniones',
          'Las manos sucias de barro del taller',
          'Trabajar desde casa para la consultora',
        ],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Aunque + Subjuntivo: уступка и гипотеза',
        note:
          'Aunque вводит уступку. С Subjuntivo это означает «даже если» (гипотеза или признание, что говорящий не считает факт релевантным): «aunque llueva», «aunque sea difícil», «aunque mi madre piense», «aunque al principio ganemos poco», «aunque no nos hagamos ricas», «aunque el primer invierno sea duro», «aunque tú insistas», «aunque resulte raro», «aunque él mismo trabajó… aunque te equivoques», «aunque no sé qué saldrá» (последнее с Indicativo — это уже факт). ' +
          'Сравни: «aunque llueve» (хотя сейчас идёт дождь, факт) vs «aunque llueva» (даже если пойдёт, гипотеза).',
      },
      {
        topic: 'Subjuntivo не обязательно «нереально»',
        note:
          'Важный нюанс B1: aunque + Subjuntivo не всегда значит «маловероятно». Часто это просто способ показать, что говорящий не делает упор на факт. «Aunque sea difícil» можно сказать, даже зная, что точно будет трудно — это уступка, не сомнение. ' +
          'Решение «Subjuntivo / Indicativo» здесь — стилистическое: с Subjuntivo звучит решительнее и более «по-литературному».',
      },
    ],
  },

  {
    id: 'b1-014',
    level: 'B1',
    day: 14,
    title: 'Diez consejos antes del campamento',
    text:
      'Queridas familias:\n\n' +
      'El sábado salimos hacia el campamento de los Pirineos. Antes del viaje, por favor, hablad con vuestros hijos. ' +
      'Os dejamos una lista breve de cosas que sí y de cosas que no.\n\n' +
      'A los niños: no perdáis de vista al monitor, sobre todo en el autobús y en los senderos. ' +
      'No abráis la mochila grande hasta que lleguemos al refugio; ahí dentro va el saco de dormir y se moja con nada. ' +
      'No bebáis del río, por bonito que parezca; el agua se llena con el sol. ' +
      'No durmáis con el móvil en la cama: lo entregáis a las diez y se devuelve por la mañana.\n\n' +
      'No os preocupéis por el frío de la primera noche: en el refugio hay mantas suficientes. ' +
      'Si alguno se siente mal, no esperéis a la mañana; avisad al monitor enseguida. ' +
      'No os peleéis por los turnos de ducha: hay agua para todos.\n\n' +
      'A los padres: no enviéis paquetes de comida durante la semana; la cocina está organizada. ' +
      'No llaméis al móvil del niño: si surge una urgencia, marcad el número del campamento que aparece al final de esta carta. ' +
      'No descarguéis aplicaciones de geolocalización sin avisar a los monitores; rompe la dinámica.\n\n' +
      'Por último, un par de consejos en positivo. ' +
      'Confiad en el equipo. Disfrutad de una semana sin pantallas en casa. Y, sobre todo, recordad: a los niños les sienta bien dormir con estrellas.\n\nUn abrazo,\nIsabel — coordinadora del campamento',
    vocabulary: [
      {
        word: 'el campamento',
        translation: 'лагерь, кемпинг (un campamento de verano; campamento escolar)',
        example: 'el campamento de los Pirineos',
      },
      {
        word: 'los Pirineos',
        translation: 'Пиренеи — горный массив на границе Испании и Франции; популярны для летних лагерей',
        example: 'salimos hacia el campamento de los Pirineos',
      },
      {
        word: 'el monitor / la monitora',
        translation: 'вожатый, инструктор (в детских лагерях; tж. ведущий курса)',
        example: 'no perdáis de vista al monitor',
      },
      {
        word: 'perder de vista',
        translation: 'упустить из виду (no perder de vista a alguien)',
        example: 'no perdáis de vista al monitor',
      },
      {
        word: 'el sendero',
        translation: 'тропа, тропинка (sendero de montaña; el senderismo — пеший туризм)',
        example: 'en los senderos',
      },
      {
        word: 'el refugio',
        translation: 'горный приют, убежище (refugio de montaña; refugiarse — укрываться)',
        example: 'hasta que lleguemos al refugio',
      },
      {
        word: 'el saco de dormir',
        translation: 'спальный мешок (типичный предмет в кемпинге)',
        example: 'ahí dentro va el saco de dormir',
      },
      {
        word: 'mojarse',
        translation: 'намокнуть (se moja con nada — намокает от чего угодно); mojar — мочить',
        example: 'se moja con nada',
      },
      {
        word: 'por bonito que parezca',
        translation: 'каким бы красивым ни казалось (конструкция por + adj + que + Subjuntivo)',
        example: 'por bonito que parezca',
      },
      {
        word: 'entregar',
        translation: 'сдавать, вручать (entregar el móvil, entregar un trabajo); la entrega — сдача, доставка',
        example: 'lo entregáis a las diez',
      },
      {
        word: 'devolverse / devolver',
        translation: 'возвращать, отдавать обратно (te lo devuelvo; se devuelve por la mañana)',
        example: 'se devuelve por la mañana',
      },
      {
        word: 'la manta',
        translation: 'одеяло, плед (taparse con una manta; una manta de lana)',
        example: 'hay mantas suficientes',
      },
      {
        word: 'pelearse por',
        translation: 'ссориться, драться из-за чего-то (pelearse por una tontería; la pelea — драка, ссора)',
        example: 'no os peleéis por los turnos de ducha',
      },
      {
        word: 'el turno',
        translation: 'очередь, смена (turno de ducha, turno de noche; pedir turno — записаться в очередь)',
        example: 'los turnos de ducha',
      },
      {
        word: 'el paquete',
        translation: 'посылка, упаковка (un paquete de comida; recibir un paquete)',
        example: 'no enviéis paquetes de comida',
      },
      {
        word: 'surgir',
        translation: 'возникнуть, появиться (surge un problema; surgió la idea)',
        example: 'si surge una urgencia',
      },
      {
        word: 'marcar (un número)',
        translation: 'набирать (номер телефона); тж. отмечать (marcar una fecha)',
        example: 'marcad el número del campamento',
      },
      {
        word: 'la geolocalización',
        translation: 'геолокация (определение местоположения; aplicaciones de geolocalización)',
        example: 'no descarguéis aplicaciones de geolocalización',
      },
      {
        word: 'sentar bien (a alguien)',
        translation: 'идти на пользу (a los niños les sienta bien — детям это полезно; повторение из b1-002)',
        example: 'a los niños les sienta bien dormir con estrellas',
      },
    ],
    questions: [
      {
        q: '¿Qué no deben hacer los niños con el móvil?',
        options: [
          'No deben encenderlo nunca',
          'No deben dormir con el móvil en la cama: lo entregan a las diez',
          'No deben llamar a sus padres durante la semana',
        ],
        correct: 1,
      },
      {
        q: '¿Qué tienen que hacer los padres si surge una urgencia?',
        options: [
          'Llamar al móvil del niño',
          'Esperar a la mañana siguiente',
          'Marcar el número del campamento que aparece al final de la carta',
        ],
        correct: 2,
      },
      {
        q: '¿Qué consejo en positivo da Isabel al final?',
        options: [
          'Disfrutar de una semana sin pantallas en casa y confiar en el equipo',
          'Enviar paquetes con comida favorita',
          'Descargar la aplicación de geolocalización oficial',
        ],
        correct: 0,
      },
    ],
    grammar_notes: [
      {
        topic: 'Imperativo negativo: no + Subjuntivo presente',
        note:
          'Отрицательный императив образуется только через Subjuntivo. ' +
          'Vosotros (типично для Испании): «no perdáis», «no abráis», «no bebáis», «no durmáis», «no os preocupéis», «no esperéis», «no os peleéis», «no enviéis», «no llaméis», «no descarguéis». ' +
          'Ту: «no hables», «no salgas», «no te preocupes». ' +
          'Утвердительный императив имеет свои формы (perded, abrid, bebed), но в отрицании все шесть лиц берут Subjuntivo.',
      },
      {
        topic: 'Hasta que + Subjuntivo для будущего; por + adj + que + Subjuntivo',
        note:
          '«No abráis la mochila hasta que lleguemos al refugio» — hasta que с Subjuntivo, потому что речь о будущем. ' +
          '«Por bonito que parezca» — фиксированная уступительная конструкция по схеме «por + прилагательное + que + Subjuntivo», смысл: «каким бы … ни казалось». Часто встречается на B1.',
      },
    ],
  },

  {
    id: 'b1-015',
    level: 'B1',
    day: 15,
    title: 'Lo que dice Lucía',
    text:
      'Hoy he comido con Lucía, mi amiga sevillana, y traigo material. Dejo aquí todo lo que cuenta, así no se me olvida.\n\n' +
      'Lucía dice que su nuevo piso de Triana le encanta y que la luz por la tarde es de postal. ' +
      'Añade que el balcón es minúsculo, pero que ella es feliz con poco. ' +
      'A mí, que tantas veces hemos hablado del tamaño de las cosas, me hace gracia oírle decir esto.\n\n' +
      'Cuenta que su madre está mejor del corazón. ' +
      'Asegura que el cardiólogo del Virgen del Rocío es un crack y que las pruebas han salido bien. ' +
      'Comenta también que su padre, en cambio, sigue tan terco como siempre: no quiere ni oír hablar de gimnasia para mayores. ' +
      'Le dice a su madre que está «como un toro» y se ríe.\n\n' +
      'Por el trabajo, explica que el bufete por fin la trata bien. ' +
      'Cuenta que su jefa le ha subido el sueldo y le promete dos viernes libres al mes. ' +
      'Repite que necesita aire, que llevaba dos años a pleno gas. ' +
      'Reconoce que se le iban las tardes en la oficina sin notarlo.\n\n' +
      'Sobre Carlos, su pareja, está en plena mudanza. ' +
      'Lucía afirma que él la está ayudando muchísimo, aunque mete las cajas en el orden equivocado. ' +
      'Dice riéndose que prefiere que él monte mal los muebles a que no monte nada. ' +
      'Buena filosofía, pienso yo.\n\n' +
      'Antes de irse, me asegura que viene a Madrid en diciembre y que esta vez se queda tres días. ' +
      '¡Por fin!',
    vocabulary: [
      {
        word: 'traer material',
        translation: 'разг. — принести материал (новости, тему для разговора); идиоматически',
        example: 'traigo material',
      },
      {
        word: 'de postal',
        translation: 'как с открытки, очень красивый (un paisaje de postal; una luz de postal)',
        example: 'la luz por la tarde es de postal',
      },
      {
        word: 'minúsculo, -a',
        translation: 'крохотный, миниатюрный (un piso minúsculo; антоним enorme)',
        example: 'el balcón es minúsculo',
      },
      {
        word: 'hacer gracia a alguien',
        translation: 'забавлять, казаться смешным (me hace gracia — мне это смешно; строится как gustar)',
        example: 'me hace gracia oírle decir esto',
      },
      {
        word: 'añadir',
        translation: 'добавить (a una conversación, a una comida; la suma — сложение)',
        example: 'Añade que el balcón es minúsculo.',
      },
      {
        word: 'asegurar',
        translation: 'заверять, гарантировать (asegurar que…; el seguro — страховка; la aseguradora)',
        example: 'Asegura que el cardiólogo es un crack.',
      },
      {
        word: 'el / la crack',
        translation: 'разг. — мастер своего дела, ас (англицизм; un crack del fútbol, un crack en medicina)',
        example: 'el cardiólogo es un crack',
      },
      {
        word: 'la prueba',
        translation: 'анализ, обследование; также проба, испытание (las pruebas médicas; una prueba de selectividad)',
        example: 'las pruebas han salido bien',
      },
      {
        word: 'terco, -a',
        translation: 'упрямый (синоним testarudo; ser terco como una mula)',
        example: 'sigue tan terco como siempre',
      },
      {
        word: 'como un toro',
        translation: 'идиома — здоров как бык, в полном порядке (фольклорная фраза)',
        example: 'está «como un toro»',
      },
      {
        word: 'el bufete',
        translation: 'юридическая фирма, адвокатская контора (trabajar en un bufete; el bufete de abogados)',
        example: 'el bufete por fin la trata bien',
      },
      {
        word: 'el sueldo',
        translation: 'зарплата (cobrar un sueldo, subir el sueldo; el salario — официальный термин)',
        example: 'le ha subido el sueldo',
      },
      {
        word: 'a pleno gas',
        translation: 'разг. — на полной скорости, на полную катушку (vivir a pleno gas; синоним a tope)',
        example: 'llevaba dos años a pleno gas',
      },
      {
        word: 'irse el tiempo / la tarde',
        translation: 'разг. — время уходит, незаметно проходит (se me va la tarde; se me ha ido el día)',
        example: 'se le iban las tardes en la oficina',
      },
      {
        word: 'la mudanza',
        translation: 'переезд (с вещами); mudarse — переезжать; estar de mudanza',
        example: 'está en plena mudanza',
      },
      {
        word: 'meter (algo en orden / desorden)',
        translation: 'класть, засовывать (meter las cajas; meter la pata — оплошать)',
        example: 'mete las cajas en el orden equivocado',
      },
      {
        word: 'afirmar',
        translation: 'утверждать (afirmar que…; la afirmación; антоним negar)',
        example: 'Lucía afirma que él la está ayudando.',
      },
      {
        word: 'reconocer',
        translation: 'признавать (reconocer un error; reconocer a alguien — узнать кого-то в лицо)',
        example: 'Reconoce que se le iban las tardes.',
      },
    ],
    questions: [
      {
        q: '¿Qué cuenta Lucía sobre su nuevo piso de Triana?',
        options: [
          'Que le encanta y que la luz por la tarde es de postal',
          'Que es demasiado caro y va a dejarlo',
          'Que no tiene balcón',
        ],
        correct: 0,
      },
      {
        q: '¿Cómo está su padre, según Lucía?',
        options: [
          'Está peor y no sale de casa',
          'Sigue tan terco como siempre y no quiere oír hablar de gimnasia',
          'Acepta hacer ejercicio cada mañana',
        ],
        correct: 1,
      },
      {
        q: '¿Qué prefiere Lucía sobre Carlos durante la mudanza?',
        options: [
          'Que él monte mal los muebles a que no monte nada',
          'Que él no toque nada y deje todo al transportista',
          'Que él se vaya y vuelva cuando todo esté listo',
        ],
        correct: 0,
      },
    ],
    grammar_notes: [
      {
        topic: 'Estilo indirecto en presente: глаголы речи + que + Indicativo',
        note:
          'Когда мы пересказываем чужие слова, оставаясь в настоящем («Lucía dice que…», «cuenta que…», «asegura que…», «explica que…», «repite que…», «afirma que…», «reconoce que…»), придаточное с фактом стоит в Indicativo: «dice que su piso le encanta», «cuenta que su madre está mejor», «explica que el bufete la trata bien». ' +
          'На B1 это базовая модель: говорящий передаёт чужое утверждение как реальный факт — отсюда Indicativo.',
      },
      {
        topic: 'Volición внутри косвенной речи → Subjuntivo',
        note:
          'Если исходная реплика содержала желание или просьбу, в косвенной речи появляется Subjuntivo: «prefiere que él monte mal los muebles a que no monte nada». ' +
          'То есть: косвенная речь не «отменяет» правила выбора между Indicativo и Subjuntivo — они применяются по типу действия (факт vs воля/эмоция/оценка), как и в прямой речи.',
      },
    ],
  },

  {
    id: 'b1-016',
    level: 'B1',
    day: 16,
    title: 'Le pido que me ayude',
    text:
      'Llevo dos semanas intentando aprender a usar el ordenador nuevo y, después de mucho pensarlo, le pido a mi sobrino Iván que me ayude. ' +
      'Iván tiene dieciocho años y, desde niño, ha sido el más paciente con su abuela.\n\n' +
      'Le ruego que venga el sábado por la mañana, no muy temprano. ' +
      'Le advierto que tengo libreta, bolígrafo y café preparados. ' +
      'Él se ríe por WhatsApp y me responde que no me preocupe, que tiene toda la mañana libre.\n\n' +
      'El sábado llega puntual. Empezamos por el correo. ' +
      'Le pido que me explique cómo se manda un archivo grande sin que el ordenador se enfade. ' +
      'Me aconseja que use un servicio de la nube, pero también me recomienda que aprenda a comprimir carpetas, «porque hay correos antiguos que no aceptan archivos pesados».\n\n' +
      'Después le pido que me enseñe a hablar con mi hija por videollamada. ' +
      'Me sugiere que ponga el portátil un poco más alto y, sobre todo, me prohíbe que mire fijamente al icono de la pantalla: «mira a la cámara, abuela, si no, parece que estás triste».\n\n' +
      'A media mañana surge un problema con las contraseñas. ' +
      'Iván me pide que no apunte la contraseña en un papel pegado al monitor; me ruega que use un gestor sencillo en el móvil. ' +
      'Acepto, aunque protesto un poco. ' +
      'Él me promete que volveremos a repasarlo el sábado siguiente, para que no se me olvide.\n\n' +
      'Acabamos comiendo tortilla. ' +
      'Antes de irse, le pido una cosa más: que llame de vez en cuando sin esperar a que su tía organice nada. Me da un beso y me dice que lo hará.',
    vocabulary: [
      {
        word: 'el sobrino / la sobrina',
        translation: 'племянник / племянница (parentesco directo; tía / tío — тётя / дядя)',
        example: 'le pido a mi sobrino Iván que me ayude',
      },
      {
        word: 'rogar',
        translation: 'просить настойчиво, упрашивать (o→ue: ruego, ruegas, ruega…; rogar a alguien que + Subjuntivo)',
        example: 'Le ruego que venga el sábado.',
      },
      {
        word: 'advertir',
        translation: 'предупреждать (e→ie: advierto, adviertes, advierte…; la advertencia — предупреждение)',
        example: 'Le advierto que tengo libreta y bolígrafo.',
      },
      {
        word: 'la libreta',
        translation: 'тетрадь, блокнот (libreta de notas, libreta de direcciones)',
        example: 'tengo libreta, bolígrafo y café preparados',
      },
      {
        word: 'puntual',
        translation: 'пунктуальный (llegar puntual; la puntualidad)',
        example: 'El sábado llega puntual.',
      },
      {
        word: 'enfadarse',
        translation: 'сердиться, злиться (кастильский глагол; в Лат. Америке enojarse); el enfado — раздражение',
        example: 'sin que el ordenador se enfade',
      },
      {
        word: 'aconsejar',
        translation: 'советовать (aconsejar a alguien que + Subjuntivo; el consejo — совет)',
        example: 'Me aconseja que use un servicio de la nube.',
      },
      {
        word: 'la nube',
        translation: 'облако; в IT — облачный сервис (guardar en la nube; servicios de la nube)',
        example: 'un servicio de la nube',
      },
      {
        word: 'recomendar',
        translation: 'рекомендовать (e→ie: recomiendo, recomiendas…; recomendar que + Subjuntivo)',
        example: 'me recomienda que aprenda a comprimir carpetas',
      },
      {
        word: 'comprimir',
        translation: 'сжимать, архивировать (comprimir un archivo; un archivo comprimido)',
        example: 'aprenda a comprimir carpetas',
      },
      {
        word: 'sugerir',
        translation: 'предлагать, наводить на мысль (e→ie/i: sugiero, sugieres…; la sugerencia)',
        example: 'Me sugiere que ponga el portátil más alto.',
      },
      {
        word: 'prohibir',
        translation: 'запрещать (prohibir a alguien que + Subjuntivo; la prohibición)',
        example: 'me prohíbe que mire fijamente al icono',
      },
      {
        word: 'fijamente',
        translation: 'пристально, в упор (mirar fijamente; fijar la mirada en algo)',
        example: 'que mire fijamente al icono de la pantalla',
      },
      {
        word: 'la contraseña',
        translation: 'пароль (cambiar la contraseña; un gestor de contraseñas — менеджер паролей)',
        example: 'surge un problema con las contraseñas',
      },
      {
        word: 'pegado a',
        translation: 'приклеенный, прилепленный (un papel pegado al monitor; pegar — клеить)',
        example: 'un papel pegado al monitor',
      },
      {
        word: 'el gestor',
        translation: 'менеджер (программа или человек-управляющий); un gestor de contraseñas; un gestor administrativo',
        example: 'un gestor sencillo en el móvil',
      },
      {
        word: 'protestar',
        translation: 'возражать, протестовать (protestar por algo; la protesta — протест)',
        example: 'Acepto, aunque protesto un poco.',
      },
      {
        word: 'repasar',
        translation: 'повторять, пересматривать (repasar una lección; el repaso — повторение)',
        example: 'volveremos a repasarlo el sábado siguiente',
      },
    ],
    questions: [
      {
        q: '¿Por qué le pide la abuela ayuda a Iván?',
        options: [
          'Para aprender a usar el ordenador nuevo',
          'Para mudarse a otro piso',
          'Para enseñarle a Iván a cocinar tortilla',
        ],
        correct: 0,
      },
      {
        q: '¿Qué le aconseja Iván sobre las contraseñas?',
        options: [
          'Que las apunte en un papel pegado al monitor',
          'Que no apunte la contraseña en un papel y use un gestor en el móvil',
          'Que use la misma contraseña en todas partes',
        ],
        correct: 1,
      },
      {
        q: '¿Qué le pide la abuela al final, antes de que Iván se vaya?',
        options: [
          'Que la llame de vez en cuando sin esperar a que la tía organice nada',
          'Que vuelva el domingo siguiente',
          'Que le compre un ordenador nuevo',
        ],
        correct: 0,
      },
    ],
    grammar_notes: [
      {
        topic: 'Глаголы просьбы и совета + que + Subjuntivo',
        note:
          'Pedir, rogar, aconsejar, recomendar, sugerir, advertir, prohibir, mandar, ordenar — все вводят придаточное в Subjuntivo, когда субъекты разные: «le pido que me ayude», «le ruego que venga», «me aconseja que use», «me recomienda que aprenda», «me sugiere que ponga», «me prohíbe que mire», «me pide que no apunte», «me ruega que use». ' +
          'Если субъект тот же, после этих глаголов идёт инфинитив: «te pido venir», но в речи чаще всё равно «te pido que vengas».',
      },
      {
        topic: 'Sin que / para que / antes de que (повторение)',
        note:
          '«Sin que el ordenador se enfade», «para que no se me olvide», «antes de que se vaya», «sin esperar a que su tía organice» — четыре стабильных триггера Subjuntivo. ' +
          '«Esperar a que» по структуре совпадает с antes de que: оба указывают на ещё не случившееся действие → Subjuntivo.',
      },
    ],
  },

  {
    id: 'b1-017',
    level: 'B1',
    day: 17,
    title: 'En cuanto bajen los precios',
    text:
      'Cena de domingo en casa de mis padres. Pollo asado, ensalada de tomate del huerto y un vino tinto modesto. ' +
      'El tema vuelve a ser el mismo: el piso. ' +
      'Mi hermana lleva un año mirando anuncios y, sinceramente, ya cansa.\n\n' +
      'Mi padre dice: «En cuanto bajen los precios, te buscaremos algo en condiciones». ' +
      'Mi madre añade: «Y, antes de que firmes nada, lo vemos los tres juntos». ' +
      'Mi hermana suspira y contesta que, a menos que algo cambie en el mercado, los precios no van a bajar.\n\n' +
      'Yo, callada, observo. ' +
      'Antes de que mi hermana se enfade del todo, intento mediar: ' +
      '«Tan pronto como vuelva el frío, muchos propietarios van a aceptar bajar un poco; en septiembre la gente compra menos». ' +
      'Pongo cifras, hablo de Idealista, de barrios concretos. ' +
      'Mi padre asiente.\n\n' +
      'Surge entonces una idea: alquiler con opción a compra. ' +
      'Mi madre, con tal de que la decisión sea reversible, lo acepta. ' +
      'Mi hermana se anima un poco. Acordamos que, en cuanto encontremos tres opciones interesantes en el norte de Madrid, vamos los cuatro a verlas un sábado. ' +
      'Sin que nadie presione, sin compromiso de comprar.\n\n' +
      'Después de los cafés, mi padre saca un cuaderno antiguo. ' +
      'Ha apuntado fechas, números y nombres de inmobiliarias. ' +
      'Lo hace para que la conversación no se quede en aire, como otras veces.\n\n' +
      'Antes de irnos, mi hermana me dice bajito: «Hasta que no firme un contrato, no me voy a fiar». ' +
      'Yo le contesto: «Hasta que no lo firmes, sigue mirando. Hay piso para ti, sin duda. Solo hay que tener paciencia».',
    vocabulary: [
      {
        word: 'asado, -a',
        translation: 'жареный, запечённый (pollo asado, patatas asadas; asar — запекать)',
        example: 'Pollo asado, ensalada de tomate.',
      },
      {
        word: 'el huerto',
        translation: 'огород (домашний или сельский; el huerto urbano — городской огород)',
        example: 'ensalada de tomate del huerto',
      },
      {
        word: 'en condiciones',
        translation: 'нормальный, как положено (un piso en condiciones — приличная квартира; trabajar en condiciones)',
        example: 'algo en condiciones',
      },
      {
        word: 'suspirar',
        translation: 'вздыхать (el suspiro — вздох; suspirar por alguien — вздыхать по кому-то)',
        example: 'Mi hermana suspira y contesta.',
      },
      {
        word: 'a menos que',
        translation: 'если только не, разве что (всегда + Subjuntivo; синоним salvo que)',
        example: 'a menos que algo cambie en el mercado',
      },
      {
        word: 'el mercado',
        translation: 'рынок (как место и как экономическое понятие; el mercado inmobiliario — рынок недвижимости)',
        example: 'a menos que algo cambie en el mercado',
      },
      {
        word: 'mediar',
        translation: 'посредничать, выступать арбитром (mediar en un conflicto; el mediador — посредник)',
        example: 'intento mediar',
      },
      {
        word: 'asentir',
        translation: 'кивать, соглашаться (e→i: asiento, asientes, asiente…; sin decir nada, asentir)',
        example: 'Mi padre asiente.',
      },
      {
        word: 'el alquiler',
        translation: 'аренда, съём; также арендная плата (alquiler con opción a compra — аренда с правом выкупа)',
        example: 'alquiler con opción a compra',
      },
      {
        word: 'reversible',
        translation: 'обратимый, поправимый (una decisión reversible; антоним irreversible)',
        example: 'con tal de que la decisión sea reversible',
      },
      {
        word: 'con tal de que',
        translation: 'при условии что, лишь бы (всегда + Subjuntivo; выражает условие говорящего)',
        example: 'con tal de que la decisión sea reversible',
      },
      {
        word: 'animarse',
        translation: 'воодушевиться, оживиться (animarse a hacer algo; el ánimo — настрой)',
        example: 'Mi hermana se anima un poco.',
      },
      {
        word: 'presionar',
        translation: 'давить, оказывать давление (presionar a alguien; la presión — давление)',
        example: 'Sin que nadie presione.',
      },
      {
        word: 'sin que',
        translation: 'без того чтобы, не давая (всегда + Subjuntivo; ↔ субъект придаточного отличается от главного)',
        example: 'sin que nadie presione',
      },
      {
        word: 'la inmobiliaria',
        translation: 'агентство недвижимости (un agente inmobiliario; tж. el sector inmobiliario)',
        example: 'nombres de inmobiliarias',
      },
      {
        word: 'quedarse en el aire',
        translation: 'остаться в воздухе, не получить продолжения (una conversación que se queda en el aire)',
        example: 'que la conversación no se quede en aire',
      },
      {
        word: 'fiarse de',
        translation: 'доверять (fiarse de alguien; no me fío — я не доверяю; la confianza — доверие)',
        example: 'no me voy a fiar',
      },
      {
        word: 'Idealista',
        translation: 'Idealista.com — основная испанская платформа объявлений по аренде и продаже жилья',
        example: 'hablo de Idealista',
      },
    ],
    questions: [
      {
        q: '¿Cuándo, según el padre, le buscarán algo en condiciones a la hermana?',
        options: [
          'En cuanto bajen los precios',
          'Cuando la hermana cumpla treinta años',
          'En cuanto el padre se jubile',
        ],
        correct: 0,
      },
      {
        q: '¿Qué fórmula proponen para el piso?',
        options: [
          'Comprar al contado sin pensarlo',
          'Alquiler con opción a compra',
          'Vivir todos juntos en casa de los padres',
        ],
        correct: 1,
      },
      {
        q: '¿Para qué saca el padre un cuaderno con fechas, números y nombres de inmobiliarias?',
        options: [
          'Para regalárselo a la hija',
          'Para que la conversación no se quede en aire, como otras veces',
          'Para venderlo en una tienda de segunda mano',
        ],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Conjunciones de tiempo y condición + Subjuntivo',
        note:
          'Гипотеза в будущем с союзами времени и условия — Subjuntivo: «en cuanto bajen los precios», «antes de que firmes nada», «a menos que algo cambie», «tan pronto como vuelva el frío», «en cuanto encontremos tres opciones», «con tal de que la decisión sea reversible», «sin que nadie presione». ' +
          'Все эти союзы держат Subjuntivo, потому что событие либо ещё не произошло, либо является условием.',
      },
      {
        topic: 'Hasta que (no) + Subjuntivo для будущего',
        note:
          '«Hasta que no firme un contrato, no me voy a fiar» и «hasta que no lo firmes, sigue mirando» — типичный B1-рисунок. ' +
          'Hasta que для будущего/гипотезы всегда берёт Subjuntivo, и испанцы часто добавляют избыточное «no» внутри придаточного без изменения смысла: «hasta que no firme» = «hasta que firme». Это разговорная норма.',
      },
    ],
  },

  {
    id: 'b1-018',
    level: 'B1',
    day: 18,
    title: 'Reunión del lunes',
    text:
      'Acta de la reunión del lunes, 9 h, sala azul. Asisten: Marta, Carlos, Sonia, Diego y, conectado por videollamada, Pablo desde la oficina de Valencia.\n\n' +
      'Marta abre la reunión y pide que no nos demoremos: a las once tenemos al cliente de Bilbao en pantalla. ' +
      'Sonia, recién llegada de vacaciones, repasa los plazos. ' +
      'Resume la situación así: «En cuanto recibamos el feedback del cliente, el equipo de diseño se pone a corregir; tan pronto como ellos cierren las maquetas, los desarrolladores empiezan la integración».\n\n' +
      'Diego propone que avancemos un paso. ' +
      'Sugiere que, antes de que llegue el feedback, preparemos dos versiones del informe interno, para que el viernes podamos mostrar avances al director sin que él tenga que esperar. ' +
      'Todos asienten.\n\n' +
      'Carlos, que es el más cauto, pide la palabra. ' +
      'Recomienda que no enviemos nada al cliente a menos que Marta lo apruebe personalmente. ' +
      'Marta confirma: nada sale sin su firma. ' +
      'Sonia añade que, con tal de que respetemos esa regla, podemos seguir trabajando en paralelo.\n\n' +
      'Pablo interviene desde Valencia. ' +
      'Pide que, en cuanto el cliente confirme la fecha de la siguiente reunión, le aviséis enseguida: tiene que reservar un AVE y prefiere no comprarlo a última hora. ' +
      'Marta apunta el detalle.\n\n' +
      'Cerramos con tareas concretas. ' +
      'Carlos: maquetas para el miércoles. Sonia: borrador del informe. Diego: dos versiones para el viernes. Pablo: contacto con el equipo legal. ' +
      'Yo, Marta, asumo el seguimiento general y la reunión con el cliente.\n\n' +
      'Quedamos en revisar todo el jueves por la tarde, antes de que la semana se desordene del todo.\n\n' +
      'Cierro acta. — Marta',
    vocabulary: [
      {
        word: 'el acta',
        translation: 'протокол собрания (la palabra es femenina, pero por fonética lleva el; las actas)',
        example: 'Acta de la reunión del lunes.',
      },
      {
        word: 'asistir',
        translation: 'присутствовать (asistir a una reunión, a clase; la asistencia)',
        example: 'Asisten: Marta, Carlos, Sonia.',
      },
      {
        word: 'demorarse',
        translation: 'затягиваться, задерживаться (demorarse en algo; la demora — задержка)',
        example: 'pide que no nos demoremos',
      },
      {
        word: 'el plazo',
        translation: 'срок (el plazo de entrega; cumplir un plazo; vencer el plazo)',
        example: 'repasa los plazos',
      },
      {
        word: 'el feedback',
        translation: 'обратная связь (англицизм, прижился в офисном испанском; recibir feedback)',
        example: 'En cuanto recibamos el feedback.',
      },
      {
        word: 'la maqueta',
        translation: 'макет (дизайн-макет страницы или продукта; cerrar maquetas — закрыть макеты)',
        example: 'ellos cierren las maquetas',
      },
      {
        word: 'la integración',
        translation: 'интеграция (например, фронтенда и бэкенда; integrar — объединять)',
        example: 'los desarrolladores empiezan la integración',
      },
      {
        word: 'avanzar un paso',
        translation: 'продвинуться, сделать шаг вперёд (avanzar un paso; dar un paso adelante)',
        example: 'propone que avancemos un paso',
      },
      {
        word: 'el informe',
        translation: 'отчёт, доклад (un informe interno; presentar un informe; informar — извещать)',
        example: 'dos versiones del informe interno',
      },
      {
        word: 'cauto, -a',
        translation: 'осторожный, осмотрительный (синоним prudente; la cautela — осторожность)',
        example: 'Carlos, que es el más cauto',
      },
      {
        word: 'la palabra (pedir la palabra)',
        translation: 'слово; pedir la palabra — попросить слова на собрании (формальная фраза)',
        example: 'pide la palabra',
      },
      {
        word: 'aprobar',
        translation: 'утверждать, одобрять (o→ue: apruebo, apruebas…; la aprobación)',
        example: 'a menos que Marta lo apruebe',
      },
      {
        word: 'la firma',
        translation: 'подпись; также фирма, компания (la firma del director; firmar — подписывать)',
        example: 'nada sale sin su firma',
      },
      {
        word: 'en paralelo',
        translation: 'параллельно, одновременно (trabajar en paralelo; paralelo a — параллельно чему-то)',
        example: 'podemos seguir trabajando en paralelo',
      },
      {
        word: 'intervenir',
        translation: 'вмешаться, взять слово (e→ie: intervengo, intervienes…; la intervención)',
        example: 'Pablo interviene desde Valencia.',
      },
      {
        word: 'el AVE',
        translation: 'высокоскоростной поезд в Испании (Alta Velocidad Española; coger el AVE)',
        example: 'tiene que reservar un AVE',
      },
      {
        word: 'el borrador',
        translation: 'черновик (de un informe, de un contrato; en borrador — в черновом виде)',
        example: 'Sonia: borrador del informe.',
      },
      {
        word: 'el seguimiento',
        translation: 'отслеживание, контроль (hacer seguimiento de un proyecto; seguir — следить)',
        example: 'asumo el seguimiento general',
      },
      {
        word: 'desordenarse',
        translation: 'путаться, выходить из-под контроля (la semana se desordena; el desorden — беспорядок)',
        example: 'antes de que la semana se desordene',
      },
    ],
    questions: [
      {
        q: '¿Qué propone Diego en la reunión?',
        options: [
          'Que esperemos al feedback antes de hacer nada',
          'Que, antes de que llegue el feedback, preparemos dos versiones del informe interno',
          'Que cancelemos la reunión del viernes',
        ],
        correct: 1,
      },
      {
        q: '¿Qué condición pone Carlos para enviar algo al cliente?',
        options: [
          'Que se envíe solo en lunes',
          'Que no se envíe nada a menos que Marta lo apruebe personalmente',
          'Que el equipo legal lo revise primero',
        ],
        correct: 1,
      },
      {
        q: '¿Por qué Pablo pide que le avisen cuanto antes de la próxima reunión?',
        options: [
          'Porque quiere preparar la presentación',
          'Porque tiene que reservar un AVE y prefiere no comprarlo a última hora',
          'Porque está de vacaciones esa semana',
        ],
        correct: 1,
      },
    ],
    grammar_notes: [
      {
        topic: 'Subjuntivo в офисном языке: цепочка союзов',
        note:
          'Деловой текст естественно цепляет несколько триггеров Subjuntivo подряд: «pide que no nos demoremos», «en cuanto recibamos», «tan pronto como ellos cierren», «propone que avancemos», «sugiere que preparemos», «antes de que llegue», «para que podamos mostrar», «sin que él tenga que esperar», «recomienda que no enviemos», «a menos que Marta lo apruebe», «con tal de que respetemos», «pide que le aviséis», «en cuanto el cliente confirme», «antes de que la semana se desordene». ' +
          'На рабочих B1-собраниях это типовой пейзаж.',
      },
      {
        topic: 'Vosotros в Subjuntivo (повторение)',
        note:
          'В разговоре с коллегами по Испании используется vosotros: «pide que le aviséis». Окончание -éis (II спряж.) и -áis (I) в Subjuntivo: aviséis, escribáis, comáis, habléis. ' +
          'Не путать с ustedes: «pide que le avisen» — то же значение, но используется в Лат. Америке и в формальной речи.',
      },
    ],
  },

  {
    id: 'b1-019',
    level: 'B1',
    day: 19,
    title: 'Cadena de correos sobre un problema en la oficina',
    text:
      'De: Marta Ruiz <m.ruiz@empresa.es>\nPara: Carlos Soto\nAsunto: Servidor caído otra vez\n\n' +
      'Carlos, buenos días. Te escribo a primera hora porque el servidor de Madrid lleva caído desde las siete. ' +
      'Ya he avisado al técnico de turno, pero te pido que vengas en cuanto puedas: a las once tenemos al cliente de Bilbao y prefiero que estés tú en la sala. ' +
      'Marta.\n\n\n' +
      'De: Carlos Soto\nPara: Marta Ruiz\nAsunto: Re: Servidor caído otra vez\n\n' +
      'Marta, recibido. Entro al metro ahora; en cuanto salga, te llamo. ' +
      'Por favor, dile al técnico que no toque la copia de seguridad de anoche hasta que yo no la vea. ' +
      'Aunque sea urgente, prefiero perder media hora a perder datos.\n\n\n' +
      'De: Marta Ruiz\nPara: Carlos Soto, Sonia Pérez\nAsunto: Re: Servidor caído otra vez\n\n' +
      'Añado a Sonia, nuestro contacto con el proveedor. Sonia, ¿puedes pedirles que abran ticket urgente? ' +
      'A menos que confirmen que es un fallo de su lado, no podemos justificar el retraso.\n\n\n' +
      'De: Sonia Pérez\nPara: Marta Ruiz, Carlos Soto\nAsunto: Re: Servidor caído otra vez\n\n' +
      'Hablo con ellos ahora. Les voy a exigir que nos manden a alguien presencial; por teléfono no avanzamos. ' +
      'Si insisten en que es problema nuestro, que lo demuestren con logs.\n\n' +
      'Aprovecho para avisaros: mañana llega la auditoría externa. ' +
      'Lo digo para que esta tarde dejemos los servidores limpios y documentados; sin que se note el caos del lunes.\n\n\n' +
      'De: Carlos Soto\nPara: todos\nAsunto: Re: Servidor caído otra vez\n\n' +
      'Ya estoy en la oficina. He restablecido el servicio. ' +
      'La caída venía de una actualización mal aplicada anoche. ' +
      'Lo cuento con detalle a las cinco, en cuanto pase la reunión. ' +
      'Mientras tanto, tranquilos.',
    vocabulary: [
      {
        word: 'el asunto',
        translation: 'тема письма (asunto del correo); также вопрос, дело (es un asunto delicado)',
        example: 'Asunto: Servidor caído otra vez.',
      },
      {
        word: 'el servidor',
        translation: 'сервер (компьютерный; el servidor de correo, el servidor caído — упавший сервер)',
        example: 'el servidor de Madrid lleva caído desde las siete',
      },
      {
        word: 'caído, -a',
        translation: 'упавший (про сервер: не работающий; en general — упавший)',
        example: 'el servidor de Madrid lleva caído',
      },
      {
        word: 'el técnico de turno',
        translation: 'дежурный техник (de turno — дежурный, тот, кто сейчас на смене)',
        example: 'he avisado al técnico de turno',
      },
      {
        word: 'la copia de seguridad',
        translation: 'резервная копия, бэкап (hacer una copia de seguridad; el respaldo — синоним)',
        example: 'la copia de seguridad de anoche',
      },
      {
        word: 'el proveedor',
        translation: 'поставщик услуг или товаров (el proveedor de internet, de software; proveer — поставлять)',
        example: 'nuestro contacto con el proveedor',
      },
      {
        word: 'abrir ticket',
        translation: 'открыть заявку в системе поддержки (англицизм, прижившийся в IT-испанском)',
        example: 'que abran ticket urgente',
      },
      {
        word: 'el fallo',
        translation: 'сбой, поломка (un fallo del sistema; fallar — давать сбой)',
        example: 'un fallo de su lado',
      },
      {
        word: 'justificar',
        translation: 'оправдать, объяснить (justificar un retraso, una decisión; la justificación)',
        example: 'justificar el retraso al cliente',
      },
      {
        word: 'el retraso',
        translation: 'задержка, опоздание (un retraso de dos horas; el tren va con retraso)',
        example: 'justificar el retraso al cliente',
      },
      {
        word: 'presencial',
        translation: 'очно, лично присутствующий (una reunión presencial; un técnico presencial; ↔ telemático)',
        example: 'que nos manden a alguien presencial',
      },
      {
        word: 'los logs',
        translation: 'логи, журналы событий (англицизм; los registros — испанский эквивалент)',
        example: 'que lo demuestren con logs',
      },
      {
        word: 'aprovechar para',
        translation: 'воспользоваться случаем, чтобы (повторение из b1-011 в другом обороте)',
        example: 'Aprovecho para avisaros.',
      },
      {
        word: 'la auditoría',
        translation: 'аудит, проверка (auditoría externa / interna; el auditor — аудитор)',
        example: 'mañana llega la auditoría externa',
      },
      {
        word: 'documentado, -a',
        translation: 'задокументированный (un proceso documentado; documentar — фиксировать в документации)',
        example: 'servidores limpios y documentados',
      },
      {
        word: 'restablecer',
        translation: 'восстановить, возобновить (e→ie: restablezco, restableces…; restablecer un servicio)',
        example: 'He restablecido el servicio.',
      },
      {
        word: 'la actualización',
        translation: 'обновление (программного обеспечения; actualizar — обновлять)',
        example: 'una actualización mal aplicada',
      },
      {
        word: 'aplicar',
        translation: 'применить, наложить (aplicar una actualización; aplicarse a algo — стараться)',
        example: 'una actualización mal aplicada',
      },
    ],
    questions: [
      {
        q: '¿Qué le pide Marta a Carlos en el primer correo?',
        options: [
          'Que llame al cliente de Bilbao',
          'Que venga en cuanto pueda, porque a las once hay reunión con el cliente',
          'Que se quede en casa hasta que arregle el servidor desde allí',
        ],
        correct: 1,
      },
      {
        q: '¿Qué le pide Carlos al técnico sobre la copia de seguridad?',
        options: [
          'Que la borre cuanto antes',
          'Que la suba al servidor enseguida',
          'Que no la toque hasta que él la vea, aunque sea urgente',
        ],
        correct: 2,
      },
      {
        q: '¿Por qué pide Sonia que dejen los servidores limpios y documentados esa tarde?',
        options: [
          'Porque al día siguiente llega la auditoría externa',
          'Porque el cliente de Bilbao se va a quedar a dormir',
          'Porque van a apagar el servidor todo el fin de semana',
        ],
        correct: 0,
      },
    ],
    grammar_notes: [
      {
        topic: 'Subjuntivo в офисных просьбах и условиях (повторение в новом контексте)',
        note:
          'Цепочка типичных конструкций: «te pido que vengas», «prefiero que estés», «dile que no toque», «hasta que yo no la vea», «aunque sea urgente», «¿puedes pedirles que abran ticket?», «a menos que confirmen», «les voy a exigir que nos manden», «que lo demuestren con logs», «para que dejemos los servidores limpios», «sin que se note el caos», «en cuanto pase la reunión». ' +
          'Ни одно из этих придаточных не возможно в Indicativo: глагол просьбы, цели, условия и времени-будущего фиксирует Subjuntivo.',
      },
      {
        topic: 'Estilo indirecto в просьбе: dile que / pídeles que',
        note:
          '«Dile al técnico que no toque la copia» и «pídeles que abran ticket» — это прямые императивы, а во вложенной части — Subjuntivo, потому что передаётся просьба. ' +
          'Сравни: «dile al técnico que el servidor está caído» (передача факта → Indicativo) vs «dile al técnico que no toque la copia» (передача распоряжения → Subjuntivo). На B1 важно различать эти два сценария.',
      },
    ],
  },

  {
    id: 'b1-020',
    level: 'B1',
    day: 20,
    title: 'El coche en el centro: ¿de quién es la ciudad?',
    text:
      'Madrid ha vuelto a abrir el debate de siempre: ¿coche o peatón en el centro? ' +
      'Esta semana el ayuntamiento ha anunciado una zona de bajas emisiones más amplia. ' +
      'Hay quienes aplauden y quienes se llevan las manos a la cabeza. ' +
      'A mí, sinceramente, me parece urgente que tomemos partido.\n\n' +
      'Es necesario que entendamos los datos. ' +
      'Los estudios municipales son claros: cuando se reduce el tráfico, mejora la calidad del aire en pocas semanas. ' +
      'A propósito de cifras: en la calle Alcalá, tras la peatonalización parcial, los niveles de óxidos de nitrógeno bajaron un veinte por ciento. ' +
      'No creo que sea exageración hablar de salud pública.\n\n' +
      'Sin embargo, también es justo que escuchemos a los comerciantes. ' +
      'Muchos temen que las restricciones les hagan perder clientes, sobre todo a los pequeños. ' +
      'A menos que el ayuntamiento ofrezca aparcamiento alternativo y transporte público frecuente, las protestas seguirán. ' +
      'De hecho, en Atenas, una medida parecida fracasó por no acompañarla de buses cada cinco minutos.\n\n' +
      'En lo personal, conduzco dos veces al mes. ' +
      'Aunque me toque dejar el coche fuera, no me parece un drama. ' +
      'Por cierto, mi vecino, que vive a media hora del centro, dice que el bus le sale más barato y rápido desde que cambió las rutinas.\n\n' +
      'En resumen, esta ciudad no será un paraíso sin coches mañana, ni hace falta. ' +
      'Pero antes de que los niños crezcan respirando aire sucio, antes de que sigamos discutiendo en redes sin movernos, conviene que el debate baje al barrio. ' +
      'Pongamos sillas en la plaza. Hablemos cara a cara. ' +
      'Y, sobre todo, escuchemos también a quienes piensan distinto a nosotros.',
    vocabulary: [
      {
        word: 'el debate',
        translation: 'дискуссия, дебаты (un debate público; debatir — обсуждать)',
        example: 'ha vuelto a abrir el debate de siempre',
      },
      {
        word: 'el ayuntamiento',
        translation: 'мэрия, муниципалитет (gobierno local; la alcaldía — пост мэра)',
        example: 'el ayuntamiento ha anunciado',
      },
      {
        word: 'la zona de bajas emisiones',
        translation: 'зона низких выбросов (ZBE — ограничение въезда автомобилей в центр испанских городов)',
        example: 'una zona de bajas emisiones más amplia',
      },
      {
        word: 'aplaudir',
        translation: 'аплодировать; в переносном смысле — одобрять (aplaudir una medida)',
        example: 'Hay quienes aplauden.',
      },
      {
        word: 'llevarse las manos a la cabeza',
        translation: 'идиома — хвататься за голову от ужаса или недоумения',
        example: 'quienes se llevan las manos a la cabeza',
      },
      {
        word: 'tomar partido',
        translation: 'занять сторону, определиться (en un debate; синоним: posicionarse)',
        example: 'me parece urgente que tomemos partido',
      },
      {
        word: 'municipal',
        translation: 'муниципальный, городской (estudios municipales; la policía municipal)',
        example: 'Los estudios municipales son claros.',
      },
      {
        word: 'la peatonalización',
        translation: 'превращение улицы в пешеходную зону (peatonal — пешеходный; el peatón — пешеход)',
        example: 'tras la peatonalización parcial',
      },
      {
        word: 'los óxidos de nitrógeno',
        translation: 'оксиды азота (NOx — основной показатель загрязнения воздуха от автотранспорта)',
        example: 'los niveles de óxidos de nitrógeno',
      },
      {
        word: 'la exageración',
        translation: 'преувеличение (exagerar — преувеличивать; sin exageración — без преувеличения)',
        example: 'No creo que sea exageración hablar de salud pública.',
      },
      {
        word: 'el / la comerciante',
        translation: 'торговец, владелец магазина (los pequeños comerciantes; el comercio — торговля)',
        example: 'también es justo que escuchemos a los comerciantes',
      },
      {
        word: 'temer',
        translation: 'опасаться, бояться (temer + Subjuntivo: temen que les hagan perder; el temor — страх)',
        example: 'Muchos temen que las restricciones les hagan perder clientes.',
      },
      {
        word: 'la restricción',
        translation: 'ограничение (restricciones de tráfico, restricciones sanitarias; restringir — ограничивать)',
        example: 'que las restricciones les hagan perder clientes',
      },
      {
        word: 'frecuente',
        translation: 'частый, регулярный (transporte público frecuente; la frecuencia — частота)',
        example: 'transporte público frecuente',
      },
      {
        word: 'fracasar',
        translation: 'провалиться, потерпеть неудачу (una medida fracasa; el fracaso — провал)',
        example: 'una medida parecida fracasó',
      },
      {
        word: 'conducir',
        translation: 'водить машину (yo conduzco; el conductor; cm. также: вести себя)',
        example: 'conduzco dos veces al mes',
      },
      {
        word: 'salir más barato / caro',
        translation: 'выходить дешевле / дороже (le sale más barato; te sale a cuenta — тебе выгодно)',
        example: 'el bus le sale más barato',
      },
      {
        word: 'convenir',
        translation: 'быть уместным, целесообразным (conviene que + Subjuntivo — стоит, чтобы; e→ie/i)',
        example: 'conviene que el debate baje al barrio',
      },
      {
        word: 'cara a cara',
        translation: 'лицом к лицу, очно (hablar cara a cara; синоним: en persona)',
        example: 'Hablemos cara a cara.',
      },
    ],
    questions: [
      {
        q: '¿Qué ha anunciado el ayuntamiento de Madrid esta semana?',
        options: [
          'Una zona de bajas emisiones más amplia',
          'El cierre total del transporte público',
          'La construcción de una autopista en el centro',
        ],
        correct: 0,
      },
      {
        q: '¿Qué temen los comerciantes?',
        options: [
          'Que el ayuntamiento les suba los impuestos',
          'Que las restricciones les hagan perder clientes, sobre todo a los pequeños',
          'Que los autobuses pasen demasiado a menudo',
        ],
        correct: 1,
      },
      {
        q: '¿Cuál es la propuesta final del autor?',
        options: [
          'Prohibir todos los coches en una semana',
          'Cerrar el centro a los peatones',
          'Que el debate baje al barrio, hablar cara a cara y escuchar también a quienes piensan distinto',
        ],
        correct: 2,
      },
    ],
    grammar_notes: [
      {
        topic: 'Galería B1-B: Subjuntivo después de uniones de tiempo, cesión, condición y opinión',
        note:
          'Эта итоговая статья-мнение собирает почти все темы блока: «me parece urgente que tomemos partido», «es necesario que entendamos», «no creo que sea exageración», «es justo que escuchemos», «temen que les hagan perder clientes», «a menos que el ayuntamiento ofrezca», «aunque me toque dejar el coche», «antes de que los niños crezcan», «antes de que sigamos discutiendo», «conviene que el debate baje». ' +
          'Это и опорная карта тем дней 11–20: cuando/en cuanto/antes de que/para que/aunque/a menos que/sin que + Subjuntivo плюс обычные триггеры мнения и эмоции.',
      },
      {
        topic: 'Pongamos / hablemos / escuchemos: 1-е лицо мн. ч. императива через Subjuntivo',
        note:
          '«Pongamos sillas en la plaza», «hablemos cara a cara», «escuchemos también a quienes piensan distinto» — призыв «давайте сделаем», 1-е лицо мн. ч. императива. ' +
          'Образуется через формы Subjuntivo: pongamos, hablemos, escuchemos. Это тот же механизм, что в отрицательном императиве «no salgáis»: Subjuntivo заменяет «недостающие» лица императива.',
      },
    ],
  },
);
