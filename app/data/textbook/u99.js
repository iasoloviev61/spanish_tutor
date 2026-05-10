// ============================================================
// Unidad 99 — Participio
// trabajado, comido, vivido
// Образование (-ado / -ido + неправильные),
// употребление: со вспомог. haber (compuestos),
// как прилагательное (estar + part.),
// перифразы seguir + part., llevar + part.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u99 = {
  id: 'u99',
  number: 99,
  title: { es: 'trabajado, comido, vivido', topic: 'Participio' },
  topicRu: 'Причастие: формы и употребление',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'El <strong>participio</strong> es una forma no personal del verbo. Termina en <em>-ado</em> (verbos en -ar) o <em>-ido</em> (verbos en -er, -ir). Indica el resultado de una acción.',
      ru: '<strong>Причастие</strong> (participio) — неличная форма глагола, обозначающая результат действия («сделанный», «съеденный»). Образуется суффиксами <em>-ado</em> (от глаголов на -ar) и <em>-ido</em> (от глаголов на -er, -ir).',
      examples: [
        { es: 'La clase ha terminado.', ru: 'Урок закончился.' },
        { es: 'El restaurante está cerrado.', ru: 'Ресторан закрыт.' },
      ],
    },

    {
      type: 'heading',
      text: 'Образование',
    },
    {
      type: 'table',
      caption: 'Регулярные глаголы',
      columns: ['Окончание инфинитива', 'Суффикс причастия', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<strong>-ar</strong>', '<strong>-ado</strong>', '<em>trabajar → trabajado, hablar → hablado</em>'],
        ['<strong>-er</strong>', '<strong>-ido</strong>', '<em>comer → comido, beber → bebido</em>'],
        ['<strong>-ir</strong>', '<strong>-ido</strong>', '<em>vivir → vivido, dormir → dormido</em>'],
      ],
    },

    {
      type: 'table',
      caption: 'Неправильные причастия',
      columns: ['Инфинитив', 'Причастие'],
      colClasses: ['col-pattern', 'col-pattern'],
      rows: [
        ['<em>abrir</em>', '<strong>abierto</strong>'],
        ['<em>cubrir, descubrir</em>', '<strong>cubierto, descubierto</strong>'],
        ['<em>escribir</em>', '<strong>escrito</strong>'],
        ['<em>volver, devolver</em>', '<strong>vuelto, devuelto</strong>'],
        ['<em>decir</em>', '<strong>dicho</strong>'],
        ['<em>poner, componer</em>', '<strong>puesto, compuesto</strong>'],
        ['<em>romper</em>', '<strong>roto</strong>'],
        ['<em>ver</em>', '<strong>visto</strong>'],
        ['<em>morir</em>', '<strong>muerto</strong>'],
        ['<em>hacer</em>', '<strong>hecho</strong>'],
      ],
    },

    {
      type: 'heading',
      text: 'Употребление',
    },
    {
      type: 'rule',
      es: 'El participio se usa con <em>haber</em> para formar los <strong>tiempos compuestos</strong> (pretérito perfecto, pluscuamperfecto). En este uso, la forma del participio <strong>no cambia nunca</strong>.',
      ru: 'Причастие в сочетании с <em>haber</em> образует <strong>сложные времена</strong>: pretérito perfecto (<em>he comido</em>), pluscuamperfecto (<em>había comido</em>) и т. д. В этом значении причастие <strong>никогда не меняется</strong> по роду и числу.',
      examples: [
        { es: 'Mis padres han vuelto hace un rato.', ru: 'Мои родители только что вернулись.' },
        { es: 'Sonia no había comido cuando la llamé.', ru: 'Соня ещё не поела, когда я ей позвонил.' },
        { es: 'Lidia no se ha atrevido a bañarse.', ru: 'Лидия не решилась купаться.' },
      ],
    },

    {
      type: 'rule',
      es: 'El participio también se usa como <strong>adjetivo</strong>. En este caso concuerda en género y número con la persona, animal o cosa: <em>cansado, cansada, cansados, cansadas</em>.',
      ru: 'Причастие может работать как <strong>прилагательное</strong> и тогда согласуется в роде и числе с подлежащим: <em>cansado, cansada, cansados, cansadas</em>; <em>roto, rota, rotos, rotas</em>.',
      examples: [
        { es: 'Óscar parece cansado.', ru: 'Оскар выглядит уставшим.' },
        { es: 'Muchas personas estaban heridas.', ru: 'Многие были ранены.' },
        { es: 'La puerta está abierta.', ru: 'Дверь открыта.' },
      ],
    },

    {
      type: 'atencion',
      es: '<strong>Compuesto vs adjetivo:</strong> con <em>haber</em>, el participio nunca cambia (<em>han abierto la puerta</em>); con <em>ser, estar</em> y como adjetivo, sí concuerda (<em>la puerta está abierta</em>).',
      ru: '<strong>Сравните:</strong> в сложных временах с <em>haber</em> причастие <strong>не меняется</strong> (<em>han abierto la puerta</em>). С <em>ser, estar</em> и в качестве прилагательного — <strong>согласуется</strong> (<em>la puerta está abierta</em>).',
    },

    {
      type: 'heading',
      text: 'estar / seguir / llevar + participio',
    },
    {
      type: 'rule',
      es: '<em>estar</em> + participio indica el <strong>resultado</strong> de una acción. <em>seguir</em> + participio indica que una situación anterior <strong>sigue siendo cierta</strong>. <em>llevar</em> + participio indica la <strong>duración</strong> de una situación.',
      ru: '<em>estar</em> + причастие = <strong>результат</strong> действия («сейчас в таком состоянии»). <em>seguir</em> + причастие = «<strong>по-прежнему так</strong>» (состояние не изменилось). <em>llevar</em> + причастие + период = «<strong>сколько уже</strong> (в таком состоянии)».',
      examples: [
        { es: 'Ya está arreglada la lavadora.', ru: 'Стиральная машина уже починена.' },
        { es: 'La puerta del salón sigue rota.', ru: 'Дверь зала всё ещё сломана.' },
        { es: 'Rita y Jaime llevan casados quince años.', ru: 'Рита и Хайме женаты уже пятнадцать лет.' },
        { es: 'Cuando cambiaron el cristal, llevaba roto desde el verano.', ru: 'Когда поменяли стекло, оно было сломано с лета.' },
      ],
    },

    {
      type: 'table',
      caption: 'Сравнение трёх перифраз',
      columns: ['Перифраза', 'Что выражает', 'Пример'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<em>estar</em> + part.', 'результат: «уже сделано / в таком состоянии»', '<em>El ordenador está estropeado.</em>'],
        ['<em>seguir</em> + part.', 'продолжение состояния: «всё ещё так»', '<em>El ordenador sigue estropeado.</em>'],
        ['<em>llevar</em> + part. + tiempo', 'длительность состояния', '<em>Lleva estropeado dos semanas.</em>'],
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '99.1',
      title: 'Образуйте причастие',
      type: 'fill',
      instructions: 'Дан инфинитив — напишите причастие.',
      questions: [
        { id: 'q1', prompt: '<em>trabajar</em> →',  correct: 'trabajado' },
        { id: 'q2', prompt: '<em>comer</em> →',     correct: 'comido' },
        { id: 'q3', prompt: '<em>vivir</em> →',     correct: 'vivido' },
        { id: 'q4', prompt: '<em>hablar</em> →',    correct: 'hablado' },
        { id: 'q5', prompt: '<em>dormir</em> →',    correct: 'dormido' },
        { id: 'q6', prompt: '<em>abrir</em> →',     correct: 'abierto', explanation: 'Неправильное.' },
        { id: 'q7', prompt: '<em>escribir</em> →',  correct: 'escrito' },
        { id: 'q8', prompt: '<em>volver</em> →',    correct: 'vuelto' },
        { id: 'q9', prompt: '<em>decir</em> →',     correct: 'dicho' },
        { id: 'q10', prompt: '<em>poner</em> →',    correct: 'puesto' },
        { id: 'q11', prompt: '<em>romper</em> →',   correct: 'roto' },
        { id: 'q12', prompt: '<em>ver</em> →',      correct: 'visto' },
        { id: 'q13', prompt: '<em>morir</em> →',    correct: 'muerto' },
        { id: 'q14', prompt: '<em>hacer</em> →',    correct: 'hecho' },
        { id: 'q15', prompt: '<em>cubrir</em> →',   correct: 'cubierto' },
      ],
    },

    {
      id: '99.2',
      title: 'Pretérito perfecto: ставим причастие',
      type: 'fill',
      instructions: 'Поставьте причастие в нужной форме (с <em>haber</em> — без согласования).',
      questions: [
        { id: 'q1', prompt: '¿Qué te ha (decir) ___ Diana de mí?', correct: 'dicho' },
        { id: 'q2', prompt: '¿Está Juana (casarse) ___?', correct: 'casada' },
        { id: 'q3', prompt: 'Se ha (acabar) ___ la gasolina.', correct: 'acabado' },
        { id: 'q4', prompt: '¿Dónde has (poner) ___ la nueva lámpara?', correct: 'puesto' },
        { id: 'q5', prompt: 'A mí me encanta el cordero (asar) ___.', correct: 'asado' },
        { id: 'q6', prompt: 'Vargas Llosa ha (escribir) ___ muchas novelas.', correct: 'escrito' },
        { id: 'q7', prompt: 'Mira. La peluquería ya está (abrir) ___. Podemos entrar.', correct: 'abierta' },
        { id: 'q8', prompt: 'Hay que cortar las ramas (caer) ___.', correct: 'caídas' },
        { id: 'q9', prompt: 'Paco siempre ha (tener) ___ mucha suerte.', correct: 'tenido' },
        { id: 'q10', prompt: 'Los barrenderos han (recoger) ___ las hojas.', correct: 'recogido' },
        { id: 'q11', prompt: '¿Has (conocer) ___ ya a la nueva directora?', correct: 'conocido' },
        { id: 'q12', prompt: 'Mis amigos todavía no han (volver) ___ de las vacaciones.', correct: 'vuelto' },
      ],
    },

    {
      id: '99.3',
      title: 'haber: причастие НЕ согласуется',
      type: 'fill',
      instructions: 'Поставьте причастие в форму после <em>haber</em>. Помните: после <em>haber</em> причастие <strong>всегда</strong> в форме на -o.',
      questions: [
        { id: 'q1', prompt: 'Marta ha (escribir) ___ una carta.', correct: 'escrito' },
        { id: 'q2', prompt: 'Las chicas han (volver) ___ ya.', correct: 'vuelto' },
        { id: 'q3', prompt: 'Hemos (abrir) ___ las ventanas.', correct: 'abierto' },
        { id: 'q4', prompt: 'Los niños han (romper) ___ las copas.', correct: 'roto' },
        { id: 'q5', prompt: 'Mi tía ha (poner) ___ las flores en la mesa.', correct: 'puesto' },
      ],
    },

    {
      id: '99.4',
      title: 'estar + причастие: согласование',
      type: 'fill',
      instructions: 'Поставьте причастие в правильной форме (м./ж., ед./мн.). После <em>estar</em> и как прилагательное — согласуется!',
      questions: [
        { id: 'q1', prompt: 'La puerta está (abrir) ___.', correct: 'abierta' },
        { id: 'q2', prompt: 'Las ventanas están (cerrar) ___.', correct: 'cerradas' },
        { id: 'q3', prompt: 'Los platos están (lavar) ___.', correct: 'lavados' },
        { id: 'q4', prompt: 'La cama no está (hacer) ___.', correct: 'hecha' },
        { id: 'q5', prompt: 'Las cartas están (escribir) ___.', correct: 'escritas' },
        { id: 'q6', prompt: 'El espejo está (romper) ___.', correct: 'roto' },
        { id: 'q7', prompt: 'Las luces están (apagar) ___.', correct: 'apagadas' },
        { id: 'q8', prompt: 'La paella ya está (hacer) ___.', correct: 'hecha' },
      ],
    },

    {
      id: '99.5',
      title: 'estar / seguir / llevar + причастие',
      type: 'fill',
      instructions: 'Перепишите фразу с указанной перифразой.',
      questions: [
        { id: 'q1', prompt: '<em>Se ha estropeado el ordenador.</em> → (estar)', correct: ['El ordenador está estropeado.', 'El ordenador está estropeado'] },
        { id: 'q2', prompt: '<em>La biblioteca cerró hace tiempo y aún estaba cerrada.</em> → (seguir, imperfecto)', correct: ['La biblioteca seguía cerrada.', 'La biblioteca seguía cerrada'] },
        { id: 'q3', prompt: '<em>Esta academia abrió en 2002 y aún está abierta.</em> → (seguir, presente)', correct: ['Esta academia sigue abierta.', 'Esta academia sigue abierta'] },
        { id: 'q4', prompt: '<em>El tren paró hace un rato y aún está parado.</em> → (seguir)', correct: ['El tren sigue parado.', 'El tren sigue parado'] },
        { id: 'q5', prompt: '<em>Se había roto el móvil.</em> → (estar, imperfecto)', correct: ['El móvil estaba roto.', 'El móvil estaba roto'] },
        { id: 'q6', prompt: '<em>Esta comida se hizo hace dos días.</em> → (estar, presente)', correct: ['Esta comida está hecha hace dos días.', 'Esta comida está hecha hace dos días'] },
      ],
    },

    {
      id: '99.6',
      title: 'llevar + причастие: длительность состояния',
      type: 'fill',
      instructions: 'Запишите фразу. Образец: <em>(Rita y Jaime / casarse / 15 años) → Rita y Jaime llevan casados quince años.</em>',
      questions: [
        { id: 'q1', prompt: '(yo / dormir / dos horas) →', correct: ['Llevo dos horas dormido.', 'Llevo dormido dos horas.', 'Llevo dos horas dormido', 'Llevo dormido dos horas'] },
        { id: 'q2', prompt: '(la tienda / cerrar / desde junio) →', correct: ['La tienda lleva cerrada desde junio.', 'La tienda lleva cerrada desde junio'] },
        { id: 'q3', prompt: '(nosotros / casarse / diez años) →', correct: ['Llevamos diez años casados.', 'Llevamos casados diez años.', 'Llevamos diez años casados', 'Llevamos casados diez años'] },
        { id: 'q4', prompt: '(el coche / parar / una hora) →', correct: ['El coche lleva una hora parado.', 'El coche lleva parado una hora.', 'El coche lleva una hora parado', 'El coche lleva parado una hora'] },
        { id: 'q5', prompt: '(las luces / apagar / desde las nueve) →', correct: ['Las luces llevan apagadas desde las nueve.', 'Las luces llevan apagadas desde las nueve'] },
      ],
    },

    {
      id: '99.7',
      title: 'Найдите фразы без ошибок',
      type: 'multi',
      instructions: 'Отметьте все грамматически корректные фразы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'He escrito una carta.',
            'He escrita una carta.',
            'Las cartas están escritas.',
            'Las cartas están escritos.',
            'Hemos abierto la ventana.',
            'Hemos abierta la ventana.',
            'La ventana está abierta.',
            'Han roto el cristal.',
            'Han rompido el cristal.',
            'El cristal está roto.',
            'La paella ya está hecha.',
            'La paella ya está hecho.',
          ],
          correct: [
            'He escrito una carta.',
            'Las cartas están escritas.',
            'Hemos abierto la ventana.',
            'La ventana está abierta.',
            'Han roto el cristal.',
            'El cristal está roto.',
            'La paella ya está hecha.',
          ],
          explanation: 'С <em>haber</em> причастие не меняется (<em>he escrito, hemos abierto, han roto</em>). С <em>estar</em> и как прилагательное — обязательно согласуется.',
        },
      ],
    },

    {
      id: '99.8',
      title: 'Сопоставьте инфинитив и причастие',
      type: 'match',
      instructions: 'Подберите причастие для каждого инфинитива.',
      pool: ['abierto', 'escrito', 'vuelto', 'dicho', 'puesto', 'roto', 'visto', 'muerto', 'hecho', 'cubierto'],
      questions: [
        { id: 'q1', prompt: '<em>abrir</em>',     correct: 'abierto' },
        { id: 'q2', prompt: '<em>escribir</em>',  correct: 'escrito' },
        { id: 'q3', prompt: '<em>volver</em>',    correct: 'vuelto' },
        { id: 'q4', prompt: '<em>decir</em>',     correct: 'dicho' },
        { id: 'q5', prompt: '<em>poner</em>',     correct: 'puesto' },
        { id: 'q6', prompt: '<em>romper</em>',    correct: 'roto' },
        { id: 'q7', prompt: '<em>ver</em>',       correct: 'visto' },
        { id: 'q8', prompt: '<em>morir</em>',     correct: 'muerto' },
        { id: 'q9', prompt: '<em>hacer</em>',     correct: 'hecho' },
        { id: 'q10', prompt: '<em>cubrir</em>',   correct: 'cubierto' },
      ],
    },

    {
      id: '99.9',
      title: 'haber или estar?',
      type: 'choice',
      instructions: 'Выберите вспомогательный глагол: <em>haber</em> (действие) или <em>estar</em> (результат).',
      questions: [
        { id: 'q1', prompt: 'Mi madre ___ hecho la cena.', options: ['ha', 'está'], correct: 'ha' },
        { id: 'q2', prompt: 'La cena ya ___ hecha.', options: ['ha', 'está'], correct: 'está' },
        { id: 'q3', prompt: 'Los niños ___ abierto los regalos.', options: ['han', 'están'], correct: 'han' },
        { id: 'q4', prompt: 'Las puertas ___ abiertas.', options: ['han', 'están'], correct: 'están' },
        { id: 'q5', prompt: 'Yo todavía no ___ visto esa película.', options: ['he', 'estoy'], correct: 'he' },
        { id: 'q6', prompt: 'La biblioteca ___ cerrada por obras.', options: ['ha', 'está'], correct: 'está' },
        { id: 'q7', prompt: 'Vargas Llosa ___ escrito muchos libros.', options: ['ha', 'está'], correct: 'ha' },
      ],
    },

    {
      id: '99.10',
      title: 'Соберите фразу',
      type: 'fill',
      instructions: 'Из данных слов соберите фразу. Согласуйте причастие, где нужно.',
      questions: [
        { id: 'q1', prompt: '(yo) / haber (presente) / hacer / ya / la cama →', correct: ['Ya he hecho la cama.', 'He hecho ya la cama.', 'Ya he hecho la cama', 'He hecho ya la cama'] },
        { id: 'q2', prompt: 'Las ventanas / estar / abrir →', correct: ['Las ventanas están abiertas.', 'Las ventanas están abiertas'] },
        { id: 'q3', prompt: 'El cristal / seguir / romper →', correct: ['El cristal sigue roto.', 'El cristal sigue roto'] },
        { id: 'q4', prompt: 'Marta / llevar / casar / cinco años →', correct: ['Marta lleva cinco años casada.', 'Marta lleva casada cinco años.', 'Marta lleva cinco años casada', 'Marta lleva casada cinco años'] },
        { id: 'q5', prompt: '(nosotros) / haber (presente) / poner / la mesa →', correct: ['Hemos puesto la mesa.', 'Hemos puesto la mesa'] },
      ],
    },

    {
      id: '99.11',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Послушайте и запишите услышанное полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'La clase ha terminado.',                  correct: ['La clase ha terminado.', 'La clase ha terminado'] },
        { id: 'q2', prompt: '', audio: 'El restaurante está cerrado.',             correct: ['El restaurante está cerrado.', 'El restaurante está cerrado'] },
        { id: 'q3', prompt: '', audio: 'Mis padres han vuelto.',                    correct: ['Mis padres han vuelto.', 'Mis padres han vuelto'] },
        { id: 'q4', prompt: '', audio: 'La ventana está abierta.',                   correct: ['La ventana está abierta.', 'La ventana está abierta'] },
        { id: 'q5', prompt: '', audio: 'Llevamos diez años casados.',                 correct: ['Llevamos diez años casados.', 'Llevamos diez años casados'] },
        { id: 'q6', prompt: '', audio: 'No he dicho nada.',                            correct: ['No he dicho nada.', 'No he dicho nada'] },
      ],
    },

    {
      id: '99.12',
      title: 'Действие или состояние?',
      type: 'choice',
      instructions: 'Какой смысл подходит фразе?',
      questions: [
        { id: 'q1', prompt: '<em>Han cerrado la puerta.</em>', options: ['действие, кто-то совершил', 'результат, дверь сейчас закрыта'], correct: 'действие, кто-то совершил' },
        { id: 'q2', prompt: '<em>La puerta está cerrada.</em>', options: ['действие, кто-то совершил', 'результат, дверь сейчас закрыта'], correct: 'результат, дверь сейчас закрыта' },
        { id: 'q3', prompt: '<em>El móvil sigue roto.</em>', options: ['кто-то его сломал', 'он по-прежнему сломан'], correct: 'он по-прежнему сломан' },
        { id: 'q4', prompt: '<em>Lleva dos meses casada.</em>', options: ['замужем уже два месяца', 'вышла замуж два месяца назад (одно событие)'], correct: 'замужем уже два месяца' },
        { id: 'q5', prompt: '<em>Hemos abierto las ventanas.</em>', options: ['действие — открыли', 'окна сейчас открыты'], correct: 'действие — открыли' },
      ],
    },
  ],
};
