// ============================================================
// Unidad 20 — Indefinidos (1)
// todo, todos / algún, alguno, algunos / un, unos / ningún, ninguno
// Правила пересказаны своими словами; примеры — оригинальные.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u20 = {
  id: 'u20',
  number: 20,
  title: { es: 'todos, algunos, unos, ninguno...', topic: 'Indefinidos (1)' },
  topicRu: 'Неопределённые: todo, alguno, ninguno и компания',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Usamos <em>todos, algunos, unos, ningún</em> para referirnos a los <strong>componentes</strong> de un grupo: <em>todos</em> = la totalidad; <em>algunos</em> = una parte; <em>un / unos</em> = elementos no determinados (no se dice cuáles); <em>ningún</em> = nadie / nada del grupo.',
      ru: 'Эти неопределённые описывают <strong>состав группы</strong>: <em>todos</em> — все, <em>algunos</em> — некоторые, <em>un / unos</em> — какой-то / какие-то (не уточняется), <em>ningún</em> — ни один.',
      examples: [
        { es: 'Todos los niños están llorando.', ru: 'Все дети плачут.' },
        { es: 'Algunos niños están llorando.', ru: 'Некоторые дети плачут.' },
        { es: 'Un niño está llorando.', ru: 'Один (какой-то) ребёнок плачет.' },
        { es: 'Ningún niño está llorando.', ru: 'Ни один ребёнок не плачет.' },
      ],
    },
    {
      type: 'heading',
      text: 'todo, toda, todos, todas',
    },
    {
      type: 'table',
      caption: 'todo + ...',
      columns: ['Форма', 'С чем сочетается', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<em>todo, toda</em>', '+ <em>el / la / mi / tu / este, ese, aquel...</em> + сущ. ед. ч.', '<em>Dame todo el pan.</em><br><em>Toda tu familia es muy alegre.</em><br><em>Tira toda esa basura al contenedor.</em>'],
        ['<em>todos, todas</em>', '+ <em>nosotros, vosotros, los, las, mis, tus, estos, esos, aquellos...</em> + сущ. мн. ч.', '<em>Sois muy amables todos vosotros.</em><br><em>Voy a México todos los veranos.</em><br><em>Todos mis hermanos hablan francés.</em><br><em>Deme todas esas manzanas, por favor.</em>'],
      ],
    },
    {
      type: 'heading',
      text: 'un / unos, algún / algunos, ningún / ninguna',
    },
    {
      type: 'table',
      caption: 'Перед существительным',
      columns: ['Форма', 'Сочетается с', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<em>un, una</em><br><em>algún, alguna</em><br><em>ningún, ninguna</em>', '+ <strong>сущ. ед. ч.</strong>', '<em>He conocido a un compañero tuyo.</em><br><em>¿Ha venido algún alumno?</em><br><em>Alicia no sale ningún domingo.</em>'],
        ['<em>unos, unas</em><br><em>algunos, algunas</em>', '+ <strong>сущ. мн. ч.</strong>', '<em>Conozco a unos chicos que estudian quechua.</em><br><em>He recorrido algunas zonas de Perú.</em>'],
      ],
    },
    {
      type: 'heading',
      text: 'uno / alguno / ninguno + de + ...',
    },
    {
      type: 'table',
      caption: '«Один из ...», «никто из ...»',
      columns: ['Форма', '+ de +', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<em>uno, una</em><br><em>alguno, -a, algunos, -as</em><br><em>ninguno, ninguna</em>', '<em>nosotros / vosotros / los / las / mis / tus / estos / esos / aquellos</em>... + (сущ.)', '<em>¿Alguno de vosotros conduce?</em><br><em>No veo a ninguno de los niños.</em><br><em>Uno de mis tíos vive en Caracas.</em><br><em>Alguno de estos es mío, seguro.</em>'],
      ],
    },
    {
      type: 'rule',
      es: '<em>algún, alguno, alguna</em> expresan <strong>cantidad e identidad indeterminadas</strong> (no se dice ni cuántos ni cuáles); por eso son frecuentes en preguntas.',
      ru: '<em>algún, alguno</em> = «какой-то / некоторый» — не уточняется ни <strong>сколько</strong>, ни <strong>кто именно</strong>. Поэтому очень часто звучит в вопросах: <em>¿Alguno de vosotros habla árabe? —No, ninguno.</em>',
      examples: [
        { es: '¿Algún alumno tiene la respuesta?', ru: 'Кто-нибудь из учеников знает ответ?' },
        { es: '¿Tienes algún libro de Lorca?', ru: 'У тебя есть какая-нибудь книга Лорки?' },
      ],
    },
    {
      type: 'rule',
      es: '<em>uno, ninguno, alguno</em> y <em>todo</em> pueden usarse <strong>solos</strong>, sin nombre, cuando está claro de quién o de qué se habla.',
      ru: 'Эти слова можно употреблять <strong>без существительного</strong>, если из контекста ясно, о ком (о чём) речь: <em>Todos quieren venir a la fiesta</em>, <em>—¿Has visto a alguno de mis compañeros? —No, no he visto a ninguno.</em>',
      examples: [
        { es: 'Todos quieren venir a la fiesta.', ru: 'Все хотят прийти на праздник.' },
        { es: '—¿Has visto a alguno de mis compañeros? —No, no he visto a ninguno.', ru: '— Ты видел кого-нибудь из моих сокурсников? — Нет, никого.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Двойное отрицание / порядок: <em>ningún + verbo afirmativo</em> или <em>verbo + no + ningún</em>: <em>Ningún amigo mío ha llegado. / No ha llegado ningún amigo mío.</em>',
      ru: 'Если <em>ningún / ninguno</em> стоит <strong>перед</strong> глаголом — глагол в утвердительной форме (одного отрицания достаточно): <em>Ninguno de mis amigos ha salido</em>. Если <em>после</em> — нужно ещё <em>no</em> перед глаголом: <em>No ha salido ninguno de mis amigos</em>. Это «двойное отрицание» — нормальная норма в испанском.',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '20.1',
      title: 'todo, algún, un, ningún — выберите форму',
      type: 'fill',
      instructions: 'По описанию ситуации поставьте подходящее слово в нужной форме (учтите род и число существительного).',
      questions: [
        { id: 'q1', prompt: '(все ящики) ___ las cajas están vacías.', correct: 'Todas' },
        { id: 'q2', prompt: '(одна машина — пустая, остальные нет) ___ coche está parado.', correct: 'Un' },
        { id: 'q3', prompt: '(некоторые тарелки разбиты) ___ platos están rotos.', correct: 'Algunos' },
        { id: 'q4', prompt: '(одно яблоко гнилое) ___ manzana está podrida.', correct: 'Una' },
        { id: 'q5', prompt: '(ни одной не разбито — отрицание) ___ vaso está roto.', correct: 'Ningún' },
        { id: 'q6', prompt: '(несколько груш гнилые) ___ peras están podridas.', correct: 'Algunas' },
        { id: 'q7', prompt: '(все стаканы блестят) ___ los vasos están relucientes.', correct: 'Todos' },
      ],
    },

    {
      id: '20.2',
      title: 'todo, algún, un, ningún + существительное',
      type: 'fill',
      instructions: 'Поставьте подходящую форму. Если слов несколько подходящих — пишите наиболее частую.',
      questions: [
        { id: 'q1', prompt: 'Alicia está estudiando con ___ compañeros. (несколько неизвестных)', correct: 'unos' },
        { id: 'q2', prompt: 'En ___ países de África se habla español. (некоторые)', correct: 'algunos' },
        { id: 'q3', prompt: '¿Has estado en ___ país de América? (хоть в одном)', correct: 'algún' },
        { id: 'q4', prompt: '___ mi familia habla español. (вся целиком)', correct: 'Toda' },
        { id: 'q5', prompt: '___ mis amigas son simpáticas. (все)', correct: 'Todas' },
        { id: 'q6', prompt: '___ aves no pueden volar. (некоторые)', correct: 'Algunas' },
        { id: 'q7', prompt: '___ elefante come carne. (ни один)', correct: 'Ningún' },
      ],
    },

    {
      id: '20.3',
      title: 'uno, alguno, ninguno + de + группа',
      type: 'fill',
      instructions: 'Дополните фразу, добавив форму с <em>de</em> там, где нужно. Образец: <em>Ayer conocí a uno de tus hermanos.</em>',
      questions: [
        { id: 'q1', prompt: '¿___ ustedes habla quechua?', correct: ['Alguno de'] },
        { id: 'q2', prompt: 'No he conocido a ___ mis abuelas.', correct: ['ninguna de'] },
        { id: 'q3', prompt: '¿Trabaja ___ tus hermanos?', correct: ['alguno de'] },
        { id: 'q4', prompt: 'Felipe sale con ___ mis amigas.', correct: ['una de'] },
        { id: 'q5', prompt: '___ nosotros ha estado en la Isla de Pascua, pero nos gustaría ir.', correct: ['Ninguno de'] },
        { id: 'q6', prompt: '___ vosotros conoce Madrid, ¿verdad?', correct: ['Alguno de'] },
      ],
    },

    {
      id: '20.4',
      title: 'todo / algún / ningún — закончите диалог',
      type: 'fill',
      instructions: 'Добавьте подходящее неопределённое слово (с предлогом, если нужно). В скобках — род и число.',
      questions: [
        { id: 'q1', prompt: '—¿Conoces a los amigos de Pedro? —Conozco a ___ , pero no a ___ . (некоторых / всех)', correct: 'algunos' },
        { id: 'q2', prompt: '—¿Has comprado los libros? —Sí, los he comprado ___ . (все)', correct: 'todos' },
        { id: 'q3', prompt: '—¿Conoces ___ país de Asia? —No, no conozco ___. (хоть один / ни одного)', correct: 'algún' },
        { id: 'q4', prompt: '—¿Has visto a alguna de mis hermanas? —No, no he visto a ___ . (ни одной)', correct: 'ninguna' },
        { id: 'q5', prompt: 'Me encantan las mariposas. ___ tienen las alas muy bonitas. (все)', correct: 'Todas' },
        { id: 'q6', prompt: '—¿Ha venido ___ alumno? —No, no ha venido ___. (хоть один / ни один)', correct: 'algún' },
      ],
    },

    {
      id: '20.5',
      title: 'Согласуйте по роду',
      type: 'choice',
      instructions: 'Перед мужским существительным ед. числа — <em>algún</em>, <em>ningún</em>, <em>uno</em> (короткие формы). Перед женским — <em>alguna, ninguna, una</em>. Выберите верную форму.',
      questions: [
        { id: 'q1', prompt: '___ libro me interesa.', options: ['Algún', 'Alguna', 'Algunos'], correct: 'Algún' },
        { id: 'q2', prompt: '___ persona puede ayudarte.', options: ['Algún', 'Alguna', 'Algunos'], correct: 'Alguna' },
        { id: 'q3', prompt: 'No tengo ___ amigo en Madrid.', options: ['ningún', 'ninguna', 'ningunos'], correct: 'ningún' },
        { id: 'q4', prompt: 'No tengo ___ amiga en Madrid.', options: ['ningún', 'ninguna', 'ningunos'], correct: 'ninguna' },
        { id: 'q5', prompt: 'Solo necesito ___ minuto, por favor.', options: ['un', 'uno', 'una'], correct: 'un' },
        { id: 'q6', prompt: 'Solo necesito ___ hora, por favor.', options: ['un', 'una', 'unos'], correct: 'una' },
      ],
    },

    {
      id: '20.6',
      title: 'algún / alguno — выбор полной или короткой формы',
      type: 'choice',
      instructions: 'Перед существительным мужского рода ед. ч. — <strong>короткая</strong> форма <em>algún / ningún</em>. Без существительного или после <em>de</em> — полная: <em>alguno, ninguno</em>. Выберите верный вариант.',
      questions: [
        { id: 'q1', prompt: '¿Ha venido ___ alumno?', options: ['algún', 'alguno', 'algunos'], correct: 'algún' },
        { id: 'q2', prompt: '—¿Has visto a algún chico? —No, ___.', options: ['ningún', 'ninguno', 'ningunos'], correct: 'ninguno', explanation: 'Без существительного — полная форма.' },
        { id: 'q3', prompt: '___ de mis amigos vendrá conmigo.', options: ['Algún', 'Alguno', 'Alguna'], correct: 'Alguno', explanation: 'После <em>de</em> — полная форма.' },
        { id: 'q4', prompt: 'No ha llegado ___ paquete.', options: ['ningún', 'ninguno', 'ningunos'], correct: 'ningún' },
        { id: 'q5', prompt: '—¿Conoces a uno de los hijos de Marta? —No, no conozco a ___ .', options: ['ningún', 'ninguno', 'ningunos'], correct: 'ninguno' },
      ],
    },

    {
      id: '20.7',
      title: 'Двойное отрицание',
      type: 'fill',
      instructions: 'Если <em>ningún / ninguno</em> ставится <strong>после</strong> глагола, перед глаголом нужно ещё <em>no</em>. Перепишите фразу, поставив <em>ninguno / ningún ...</em> после глагола.',
      questions: [
        { id: 'q1', prompt: '<em>Ninguno de mis amigos ha salido.</em> →', correct: ['No ha salido ninguno de mis amigos.', 'No ha salido ninguno de mis amigos'] },
        { id: 'q2', prompt: '<em>Ningún alumno ha llegado tarde.</em> →', correct: ['No ha llegado tarde ningún alumno.', 'No ha llegado tarde ningún alumno'] },
        { id: 'q3', prompt: '<em>Ninguna chica vino a la fiesta.</em> →', correct: ['No vino ninguna chica a la fiesta.', 'No vino ninguna chica a la fiesta', 'No vino a la fiesta ninguna chica.', 'No vino a la fiesta ninguna chica'] },
        { id: 'q4', prompt: '<em>Ninguno de los niños está llorando.</em> →', correct: ['No está llorando ninguno de los niños.', 'No está llorando ninguno de los niños'] },
      ],
    },

    {
      id: '20.8',
      title: 'Сопоставьте значение и форму',
      type: 'match',
      instructions: 'Подберите для каждого описания подходящее неопределённое слово.',
      pool: ['todos', 'algunos', 'unos', 'ningún', 'todo', 'algún'],
      questions: [
        { id: 'q1', prompt: 'вся группа целиком, мн. м. →', correct: 'todos' },
        { id: 'q2', prompt: 'часть группы, мн. м. →', correct: 'algunos' },
        { id: 'q3', prompt: 'неопределённые «какие-то», мн. м. →', correct: 'unos' },
        { id: 'q4', prompt: 'ни один, ед. м. →', correct: 'ningún' },
        { id: 'q5', prompt: 'весь / всё (полностью), ед. м. →', correct: 'todo' },
        { id: 'q6', prompt: 'хоть один, ед. м. (часто в вопросах) →', correct: 'algún' },
      ],
    },

    {
      id: '20.9',
      title: 'Найдите правильные фразы',
      type: 'multi',
      instructions: 'Отметьте все грамматически верные варианты.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Todos los niños están llorando.',
            'Todos niños están llorando.',
            'Algún alumno ha venido.',
            'Alguno alumno ha venido.',
            'No tengo ningún libro.',
            'No tengo ninguno libro.',
            'Ninguno de mis amigos ha salido.',
            'Ningún de mis amigos ha salido.',
            'Toda mi familia es alegre.',
            'Todo mi familia es alegre.',
          ],
          correct: [
            'Todos los niños están llorando.',
            'Algún alumno ha venido.',
            'No tengo ningún libro.',
            'Ninguno de mis amigos ha salido.',
            'Toda mi familia es alegre.',
          ],
          explanation: '<em>todo / toda</em> + артикль (или <em>mi / este</em>...) + сущ. ед. ч.; перед мужским сущ. ед. ч. — <em>algún, ningún</em> (краткая); после <em>de</em> — полная <em>alguno, ninguno</em>.',
        },
      ],
    },

    {
      id: '20.10',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с грамматической ошибкой. Выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Todas las cajas están vacías.', 'Toda la caja está vacía.', 'Todos los vasos están relucientes.', 'Toda los vasos están relucientes.'], correct: 'Toda los vasos están relucientes.', explanation: '<em>vasos</em> — мн. м. → <em>Todos</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['¿Has venido algún alumno?', '¿Ha venido algún alumno?', 'No ha venido ningún alumno.', 'Algunos alumnos han venido.'], correct: '¿Has venido algún alumno?', explanation: '«Has venido» — 2 л. ед. ч.; здесь подлежащее «alumno» — должно быть «¿Ha venido algún alumno?» (3 л.).' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Alguno de mis amigos vendrá.', 'Algún de mis amigos vendrá.', 'Alguno de vosotros conduce.', 'Algunos de mis amigos vendrán.'], correct: 'Algún de mis amigos vendrá.', explanation: 'После <em>de</em> — полная форма <em>alguno</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['No tengo ningún problema.', 'No tengo ninguna problema.', 'No tengo ninguna duda.', 'No tengo problemas.'], correct: 'No tengo ninguna problema.', explanation: '<em>problema</em> — мужской род → <em>ningún</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Ninguno de mis amigos ha salido.', 'Ningún de mis amigos ha salido.', 'No ha salido ninguno de mis amigos.', 'Ningún amigo mío ha salido.'], correct: 'Ningún de mis amigos ha salido.', explanation: 'После <em>de</em> — полная форма <em>ninguno</em>.' },
      ],
    },

    {
      id: '20.11',
      title: 'Перевод с русского',
      type: 'fill',
      instructions: 'Переведите фразу.',
      questions: [
        { id: 'q1', prompt: 'Все мои братья говорят по-французски.', correct: ['Todos mis hermanos hablan francés.', 'Todos mis hermanos hablan francés'] },
        { id: 'q2', prompt: 'Некоторые из моих друзей живут в Мексике.', correct: ['Algunos de mis amigos viven en México.', 'Algunos de mis amigos viven en México'] },
        { id: 'q3', prompt: 'У меня нет ни одной книги Лорки.', correct: ['No tengo ningún libro de Lorca.', 'No tengo ningún libro de Lorca'] },
        { id: 'q4', prompt: 'Кто-нибудь из вас (vosotros) говорит по-арабски?', correct: ['¿Alguno de vosotros habla árabe?', '¿Alguno de vosotros habla árabe'] },
        { id: 'q5', prompt: 'Один из моих дядей живёт в Каракасе.', correct: ['Uno de mis tíos vive en Caracas.', 'Uno de mis tíos vive en Caracas'] },
      ],
    },

    {
      id: '20.12',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите услышанное полностью, с пунктуацией и диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Todos los niños están llorando.', correct: ['Todos los niños están llorando.', 'Todos los niños están llorando'] },
        { id: 'q2', prompt: '', audio: 'Algunos niños están llorando.', correct: ['Algunos niños están llorando.', 'Algunos niños están llorando'] },
        { id: 'q3', prompt: '', audio: '¿Alguno de vosotros habla árabe?', correct: ['¿Alguno de vosotros habla árabe?', '¿Alguno de vosotros habla árabe'] },
        { id: 'q4', prompt: '', audio: 'No he visto a ninguno.', correct: ['No he visto a ninguno.', 'No he visto a ninguno'] },
        { id: 'q5', prompt: '', audio: 'Uno de mis tíos vive en Caracas.', correct: ['Uno de mis tíos vive en Caracas.', 'Uno de mis tíos vive en Caracas'] },
      ],
    },
  ],
};
