// ============================================================
// Unidad 15 — Comparativo de los adjetivos (1)
// más/menos + adj + que; неправильные mayor, menor, mejor, peor;
// сравнение с местоимением.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u15 = {
  id: 'u15',
  number: 15,
  title: { es: 'más caro, menos trabajador', topic: 'Forma comparativa de los adjetivos (1)' },
  topicRu: 'Сравнительная степень: больше / меньше + прилагательное',

  theory: [
    {
      type: 'rule',
      es: 'Para comparar dos personas, animales o cosas se usa la <strong>forma comparativa</strong> del adjetivo.',
      ru: 'Чтобы сравнить два предмета/человека, используют сравнительную степень прилагательного.',
      examples: [
        { es: 'El Regina es más caro que el Relomátic.', ru: 'Регина дороже, чем Реломатик.' },
        { es: 'Una jirafa es más alta que un oso.', ru: 'Жираф выше медведя.' },
        { es: 'Marta es menos trabajadora que Laura.', ru: 'Марта менее трудолюбивая, чем Лаура.' },
      ],
    },
    {
      type: 'heading',
      text: 'Образование сравнительной степени',
    },
    {
      type: 'table',
      caption: 'más / menos',
      columns: ['Тип', 'Формула', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['Превосходство (+)', '<strong>más</strong> + adjetivo (+ <em>que</em>)', '<em>Felipe es <strong>más alto que</strong> su hermana.</em>'],
        ['Уступительная (–)', '<strong>menos</strong> + adjetivo (+ <em>que</em>)', '<em>Clara es <strong>menos trabajadora que</strong> Gilberto.</em>'],
      ],
    },
    {
      type: 'heading',
      text: 'Неправильные формы',
    },
    {
      type: 'table',
      caption: 'Замена «más + …» на одно слово',
      columns: ['Прилагательное', 'Сравнительная форма', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<em>+ viejo</em> (старше по возрасту)', '<strong>mayor</strong>', '<em>Eva es mayor que Javi.</em>'],
        ['<em>− viejo</em> (младше по возрасту)', '<strong>menor</strong>', '<em>Javi es menor que Eva.</em>'],
        ['<em>+ bueno</em>', '<strong>mejor</strong>', '<em>El coche de Ana es mejor que el de Álvaro.</em>'],
        ['<em>− bueno</em>', '<strong>peor</strong>', '<em>El coche de Álvaro es peor que el de Ana.</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Estas formas tienen <strong>la misma forma</strong> para masculino y femenino: <em>mayor / menor / mejor / peor</em> en singular; <em>mayores / menores / mejores / peores</em> en plural.',
      ru: 'У <em>mayor, menor, mejor, peor</em> одна форма для м. и ж. рода. Меняется только число: добавляется <em>-es</em>.',
    },
    {
      type: 'rule',
      es: 'El adjetivo en la forma comparativa <strong>concuerda</strong> en género y número con el sujeto al que se refiere.',
      ru: 'Сравнительная форма прилагательного согласуется по роду и числу с тем, о ком/о чём идёт речь.',
      examples: [
        { es: 'Mis hermanos son más altos que yo.', ru: 'Мои братья выше меня.' },
        { es: 'Marta es menos trabajadora que Raúl.', ru: 'Марта менее трудолюбивая, чем Рауль.' },
        { es: 'Estas camisas son más caras.', ru: 'Эти рубашки дороже.' },
      ],
    },
    {
      type: 'heading',
      text: 'Сравнение с местоимением',
    },
    {
      type: 'rule',
      es: 'Después de <em>que</em> en una comparación se usa el <strong>pronombre personal sujeto</strong>: <em>yo, tú, él, ella, nosotros…</em> — <strong>no</strong> <em>mí, ti</em>.',
      ru: 'После <em>que</em> в сравнении ставится <strong>именительный</strong> падеж местоимения (yo, tú, él, …), а не косвенный (mí, ti). По-русски это «чем я / ты», а не «чем меня».',
      examples: [
        { es: 'Eres más fuerte que yo.', ru: 'Ты сильнее меня.' },
        { es: 'Somos menos altos que vosotros.', ru: 'Мы ниже, чем вы.' },
      ],
    },
    {
      type: 'rule',
      es: 'A veces no es necesario mencionar a la persona o cosa con la que se compara: el contexto ya está claro.',
      ru: 'Сравнение можно не «закрывать» — если из контекста ясно, с чем сравниваем.',
      examples: [
        { es: 'Este piso es pequeño. Yo quiero uno más grande.', ru: 'Эта квартира маленькая. Я хочу побольше.' },
        { es: 'Necesitamos un piso más grande.', ru: 'Нам нужна квартира побольше.' },
      ],
    },
  ],

  exercises: [
    {
      id: '15.1',
      title: 'más / menos + прилагательное',
      type: 'fill',
      instructions: 'Запишите сравнительную форму. Знак «+» = превосходство (más), «−» = уступительная (menos).',
      questions: [
        { id: 'q1', prompt: '¿Quién es (+ guapo) ___, Juan o su hermano?',                   correct: 'más guapo' },
        { id: 'q2', prompt: '¿Quién es (− caprichoso) ___, Alberto o Luisa?',                  correct: 'menos caprichoso' },
        { id: 'q3', prompt: '¿Qué ciudad es (+ antiguo) ___, Lima o Santiago?',                 correct: 'más antigua', explanation: '<em>ciudad</em> — фем.' },
        { id: 'q4', prompt: '¿Quién es (+ bueno) ___, Ronaldo o Rivaldo?',                       correct: 'mejor', explanation: '<em>+ bueno</em> = <em>mejor</em>.' },
        { id: 'q5', prompt: '¿Qué país está (− poblado) ___, Venezuela o Colombia?',             correct: 'menos poblado' },
        { id: 'q6', prompt: '¿Qué deporte es (− peligroso) ___, el esquí o el alpinismo?',        correct: 'menos peligroso' },
        { id: 'q7', prompt: '¿Qué es (+ malo) ___, estar enfermo o no tener dinero?',              correct: 'peor', explanation: '<em>+ malo</em> = <em>peor</em>.' },
        { id: 'q8', prompt: '¿Quién es (+ viejo) ___, Sofía o su esposo? (по возрасту)',             correct: 'mayor', explanation: '<em>+ viejo</em> для людей по возрасту = <em>mayor</em>.' },
      ],
    },

    {
      id: '15.2',
      title: 'Постройте сравнение',
      type: 'fill',
      instructions: 'Сравните, добавив <em>más / menos … que</em>. Согласуйте по роду и числу.',
      questions: [
        { id: 'q1', prompt: 'Luis 1,90 m; su hermano 1,82 m. → Luis es ___ su hermano. (alto)',          correct: ['más alto que', 'más alto que.'], placeholder: 'más alto que' },
        { id: 'q2', prompt: 'Uruguay 176 220 km²; Argentina 2 766 890 km². → Uruguay es ___ Argentina. (grande)', correct: ['menos grande que', 'menos grande que.'], placeholder: 'menos grande que' },
        { id: 'q3', prompt: 'Paraguay 5,5 millones; Ecuador 13 millones. → Paraguay está ___ Ecuador. (poblado)',  correct: ['menos poblado que', 'menos poblado que.'], placeholder: 'menos poblado que' },
        { id: 'q4', prompt: 'Luisa 19 años, Clara 25 años. → Luisa es ___ Clara. (mayor/menor)',                      correct: ['menor que', 'menor que.'], placeholder: 'menor que' },
        { id: 'q5', prompt: 'Fresas 3,50 € / kg; plátanos 1,75 € / kg. → Las fresas son ___ los plátanos. (caro)',     correct: ['más caras que', 'más caras que.'], placeholder: 'más caras que' },
        { id: 'q6', prompt: 'Amazonas 6 788 km, Paraná 3 780 km. → El Amazonas es ___ el Paraná. (largo)',             correct: ['más largo que', 'más largo que.'], placeholder: 'más largo que' },
        { id: 'q7', prompt: 'León 80 km/h, canguro 50 km/h. → El canguro es ___ el león. (rápido)',                      correct: ['menos rápido que', 'menos rápido que.'], placeholder: 'menos rápido que' },
        { id: 'q8', prompt: 'Discos duros: Suiko 20 GB, Misima 80 GB. → Los Suiko son ___ los Misima. (potente)',         correct: ['menos potentes que', 'menos potentes que.'], placeholder: 'menos potentes que' },
      ],
    },

    {
      id: '15.3',
      title: 'Сравнение с местоимением (yo / tú / él)',
      type: 'fill',
      instructions: 'Поставьте местоимение в правильной форме: после <em>que</em> — именительный (<em>yo, tú, él, ella, nosotros, vosotros, ellos</em>).',
      questions: [
        { id: 'q1', prompt: 'Soy más fuerte que ___. (ты)',                  correct: 'tú' },
        { id: 'q2', prompt: 'Eres más alta que ___. (я)',                     correct: 'yo' },
        { id: 'q3', prompt: 'Sois más rápidos que ___. (мы)',                   correct: 'nosotros' },
        { id: 'q4', prompt: 'Mi hermano es mayor que ___. (она)',                correct: 'ella' },
        { id: 'q5', prompt: 'Ana es menos tímida que ___. (мы — ж. р.)',          correct: 'nosotras' },
        { id: 'q6', prompt: 'Vosotros sois mejores que ___. (они)',                correct: 'ellos' },
      ],
    },

    {
      id: '15.4',
      title: 'Mejor / peor / mayor / menor — выберите верное',
      type: 'fill',
      instructions: 'Замените «más bueno / más malo / más viejo / menos viejo» на одно слово.',
      questions: [
        { id: 'q1', prompt: 'Este postre es muy dulce. Prefiero uno (− dulce) ___.',          correct: 'menos dulce' },
        { id: 'q2', prompt: 'Este libro es un poco aburrido. Prefiero uno (+ entretenido) ___.', correct: 'más entretenido' },
        { id: 'q3', prompt: 'Esta falda es muy corta. Quiero una (+ largo) ___.',                  correct: 'más larga' },
        { id: 'q4', prompt: 'Este piso es muy antiguo. Prefiero uno (− antiguo) ___.',               correct: 'menos antiguo' },
        { id: 'q5', prompt: 'Estos pantalones son muy grandes. Necesito unos (− grande) ___.',         correct: 'menos grandes', explanation: 'Можно тж. <em>más pequeños</em>, но здесь — точное «(-)grande».' },
        { id: 'q6', prompt: 'Esta cama es incómoda. Prefiero una (+ cómodo) ___.',                       correct: 'más cómoda' },
        { id: 'q7', prompt: 'Mi trabajo es muy malo. Quiero uno (+ bueno) ___.',                            correct: 'mejor' },
        { id: 'q8', prompt: 'Mi hermano tiene 30 años; yo tengo 25. Mi hermano es ___ que yo. (по возрасту)', correct: 'mayor' },
      ],
    },

    {
      id: '15.5',
      title: 'Сопоставьте «обычное» прилагательное и его сравнительную форму',
      type: 'match',
      instructions: 'Подберите неправильную сравнительную форму.',
      pool: ['mejor', 'peor', 'mayor', 'menor'],
      questions: [
        { id: 'q1', prompt: '<em>+ bueno</em>',                       correct: 'mejor' },
        { id: 'q2', prompt: '<em>− bueno</em>',                        correct: 'peor' },
        { id: 'q3', prompt: '<em>+ viejo</em> (по возрасту)',           correct: 'mayor' },
        { id: 'q4', prompt: '<em>− viejo</em> (по возрасту)',           correct: 'menor' },
      ],
    },

    {
      id: '15.6',
      title: 'Согласование сравнительной формы',
      type: 'fill',
      instructions: 'Поставьте сравнительную форму прилагательного, согласуя с подлежащим.',
      questions: [
        { id: 'q1', prompt: 'Estas camisas son ___ las de allí. (+ caro)',         correct: ['más caras que', 'más caras que.'], placeholder: 'más caras que' },
        { id: 'q2', prompt: 'Mis zapatos son ___ los tuyos. (− cómodo)',              correct: ['menos cómodos que', 'menos cómodos que.'], placeholder: 'menos cómodos que' },
        { id: 'q3', prompt: 'Esta noticia es ___ la de ayer. (+ malo)',                correct: ['peor que', 'peor que.'], placeholder: 'peor que' },
        { id: 'q4', prompt: 'Mis hermanas son ___ yo. (+ viejo, по возрасту)',           correct: ['mayores que', 'mayores que.'], placeholder: 'mayores que' },
        { id: 'q5', prompt: 'Estos resultados son ___ los del año pasado. (+ bueno)',     correct: ['mejores que', 'mejores que.'], placeholder: 'mejores que' },
        { id: 'q6', prompt: 'Mi abuelo es ___ mi abuela. (+ viejo, по возрасту)',           correct: ['mayor que', 'mayor que.'], placeholder: 'mayor que' },
      ],
    },

    {
      id: '15.7',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Eres más alto que yo.', 'Eres más alto que mí.', 'Eres más alta que yo.', 'Sois más altos que nosotros.'], correct: 'Eres más alto que mí.', explanation: 'После <em>que</em> — <em>yo</em>, не <em>mí</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Mi coche es más mejor que el tuyo.', 'Mi coche es mejor que el tuyo.', 'Tu coche es peor que el mío.', 'Mi coche es bueno.'], correct: 'Mi coche es más mejor que el tuyo.', explanation: '<em>mejor</em> уже сравнительная — без <em>más</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Eva es mayor que Javi.', 'Eva es más mayor que Javi.', 'Javi es menor que Eva.', 'Soy mayor que mi hermana.'], correct: 'Eva es más mayor que Javi.', explanation: '<em>mayor</em> уже сравнительная — без <em>más</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Estas camisas son más caras.', 'Estas camisas son más caro.', 'Esta camisa es más cara.', 'Estos pantalones son más caros.'], correct: 'Estas camisas son más caro.', explanation: 'Согласование по роду и числу.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Mis hijos son mayores que los tuyos.', 'Mis hijos son mayor que los tuyos.', 'Mi hija es mayor que mi hijo.', 'Mis hijas son mayores.'], correct: 'Mis hijos son mayor que los tuyos.', explanation: 'Множ. число: <em>mayores</em>.' },
      ],
    },

    {
      id: '15.8',
      title: 'Сравните пары предметов',
      type: 'fill',
      instructions: 'Постройте короткую сравнительную фразу с <em>más / menos … que</em>.',
      questions: [
        { id: 'q1', prompt: 'Manzanas: 1 €/kg; peras: 2 €/kg. → Las peras son ___ las manzanas. (caro)',     correct: ['más caras que', 'más caras que.'], placeholder: 'más caras que' },
        { id: 'q2', prompt: 'Camisa A: 100 %% algodón; camisa B: 50 %% poliéster. → La camisa A es ___ la B. (cómodo)', correct: ['más cómoda que', 'más cómoda que.'], placeholder: 'más cómoda que' },
        { id: 'q3', prompt: 'Película de 90 min; película de 180 min. → La primera es ___ la segunda. (corto)', correct: ['más corta que', 'más corta que.'], placeholder: 'más corta que' },
        { id: 'q4', prompt: 'Ordenador A: 8 GB RAM; B: 16 GB. → A es ___ B. (potente)',                            correct: ['menos potente que', 'menos potente que.'], placeholder: 'menos potente que' },
      ],
    },

    {
      id: '15.9',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите услышанное полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Marta es más alta que Laura',          correct: ['Marta es más alta que Laura', 'Marta es más alta que Laura.'] },
        { id: 'q2', prompt: '', audio: 'eres más fuerte que yo',                correct: ['eres más fuerte que yo', 'eres más fuerte que yo.'] },
        { id: 'q3', prompt: '', audio: 'mi coche es mejor que el tuyo',          correct: ['mi coche es mejor que el tuyo', 'mi coche es mejor que el tuyo.'] },
        { id: 'q4', prompt: '', audio: 'mi hermana es mayor que yo',              correct: ['mi hermana es mayor que yo', 'mi hermana es mayor que yo.'] },
        { id: 'q5', prompt: '', audio: 'estas camisas son más caras',              correct: ['estas camisas son más caras', 'estas camisas son más caras.'] },
      ],
    },

    {
      id: '15.10',
      title: 'Перепишите фразу',
      type: 'fill',
      instructions: 'Перепишите так, как сказал бы носитель.',
      questions: [
        { id: 'q1', prompt: '<em>Eres más alto que mí.</em> →',                  correct: ['Eres más alto que yo.', 'Eres más alto que yo'] },
        { id: 'q2', prompt: '<em>Mi coche es más mejor que el tuyo.</em> →',      correct: ['Mi coche es mejor que el tuyo.', 'Mi coche es mejor que el tuyo'] },
        { id: 'q3', prompt: '<em>Eva es más mayor que Javi.</em> →',               correct: ['Eva es mayor que Javi.', 'Eva es mayor que Javi'] },
        { id: 'q4', prompt: '<em>Estas camisas son más caro.</em> →',               correct: ['Estas camisas son más caras.', 'Estas camisas son más caras'] },
        { id: 'q5', prompt: '<em>Mis hijos son mayor que los tuyos.</em> →',         correct: ['Mis hijos son mayores que los tuyos.', 'Mis hijos son mayores que los tuyos'] },
      ],
    },
  ],
};
