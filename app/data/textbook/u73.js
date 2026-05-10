// ============================================================
// Unidad 73 — Imperativo afirmativo: verbos regulares
// Abre la ventana — формы tú / usted / vosotros / ustedes.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u73 = {
  id: 'u73',
  number: 73,
  title: { es: 'Abre la ventana', topic: 'Imperativo afirmativo: verbos regulares' },
  topicRu: 'Повелительное наклонение (утвердительная форма): правильные глаголы',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'El <strong>imperativo</strong> sirve para dar órdenes, instrucciones, consejos, hacer peticiones o dar permiso. Tiene cuatro formas — <em>tú, usted, vosotros, ustedes</em> — y no existe forma de <em>yo</em>.',
      ru: '<strong>Повелительное наклонение</strong> (imperativo) используют, чтобы попросить, велеть, посоветовать или разрешить. У него четыре формы: <em>tú, usted, vosotros, ustedes</em>. Формы <em>yo</em> нет (нельзя приказать самому себе). В этой Unidad — только <strong>утвердительный</strong> императив правильных глаголов.',
      examples: [
        { es: '<strong>Abre</strong> la ventana. Hace calor.', ru: 'Открой окно. Жарко.' },
        { es: '<strong>Abrid</strong> el libro en la página diez.', ru: 'Откройте книгу на странице десять. (vosotros)' },
        { es: '<strong>Pasen</strong> ustedes, por favor.', ru: 'Проходите, пожалуйста. (ustedes)' },
      ],
    },
    {
      type: 'heading',
      text: 'Образование (правильные глаголы)',
    },
    {
      type: 'table',
      caption: 'Imperativo afirmativo — правильные',
      columns: ['Pronombre', '−ar (trabajar)', '−er (comer)', '−ir (vivir)'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex', 'col-ex'],
      rows: [
        ['(tú)',           'trabaj<strong>a</strong>',    'com<strong>e</strong>',    'viv<strong>e</strong>'],
        ['(usted)',        'trabaj<strong>e</strong>',    'com<strong>a</strong>',    'viv<strong>a</strong>'],
        ['(vosotros, −as)','trabaj<strong>ad</strong>',   'com<strong>ed</strong>',   'viv<strong>id</strong>'],
        ['(ustedes)',      'trabaj<strong>en</strong>',   'com<strong>an</strong>',   'viv<strong>an</strong>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Forma de <em>tú</em> = 3<sup>a</sup> persona del presente: <em>habla</em> (él habla → habla tú). Forma de <em>vosotros</em> = infinitivo, cambiando la <em>−r</em> por <em>−d</em>: <em>hablar → hablad</em>.',
      ru: 'Простые подсказки:<br>• <em>tú</em> = совпадает с третьим лицом презенса: <em>él habla</em> → <em>habla (tú)</em>.<br>• <em>vosotros</em> = от инфинитива: меняем <em>−r</em> на <em>−d</em>: <em>hablar</em> → <em>hablad</em>.<br>• <em>usted / ustedes</em> — у глаголов на <em>−ar</em> окончание <em>−e / −en</em>; у <em>−er, −ir</em> — <em>−a / −an</em> («меняются местами»).',
    },
    {
      type: 'rule',
      es: 'Глагол <strong>ver</strong> (как исключение): <em>ve, vea, ved, vean</em>. Хотя <em>ver</em> формально правильный, форма <em>tú</em> = <em>ve</em>, не <em>vee</em>.',
      ru: 'Запомните: <strong>ver</strong> — <em>ve, vea, ved, vean</em>. (Совпадает с формой <em>ir</em> в imperativo — но только tú: «ve», ср. <em>ir</em> → <em>ve</em>.)',
      examples: [
        { es: '<strong>Ve</strong> a la pizarra.', ru: 'Иди к доске. (или «Посмотри на доску.» — двусмысленно по контексту)' },
        { es: '<strong>Vea</strong> usted la película.', ru: 'Посмотрите фильм.' },
      ],
    },
    {
      type: 'heading',
      text: 'Орфографические изменения',
    },
    {
      type: 'rule',
      es: 'Para mantener el sonido, algunos verbos cambian la consonante final de la raíz cuando la terminación empieza por <em>e</em>. Esto afecta a las formas de <em>usted / ustedes</em>.',
      ru: 'Чтобы сохранить звук, у некоторых глаголов перед <em>e</em> меняется согласная (только в формах <em>usted</em> и <em>ustedes</em> — где окончание начинается с <em>e</em>):',
      examples: [
        { es: '−<strong>gar</strong>: pagar → paga, <strong>pague</strong>, pagad, <strong>paguen</strong>', ru: 'g + e → gu + e' },
        { es: '−<strong>ger</strong>: escoger → escoge, <strong>escoja</strong>, escoged, <strong>escojan</strong>', ru: 'g + a → j + a' },
        { es: '−<strong>car</strong>: practicar → practica, <strong>practique</strong>, practicad, <strong>practiquen</strong>', ru: 'c + e → qu + e' },
        { es: '−<strong>zar</strong>: cruzar → cruza, <strong>cruce</strong>, cruzad, <strong>crucen</strong>', ru: 'z + e → c + e' },
      ],
    },
    {
      type: 'heading',
      text: 'Когда используется',
    },
    {
      type: 'rule',
      es: 'El imperativo afirmativo se usa para: <strong>órdenes e instrucciones</strong>, <strong>peticiones</strong>, <strong>consejos / advertencias</strong> y para <strong>dar permiso</strong>. Suele añadirse el pronombre de sujeto para enfatizar (<em>habla tú, ahora</em>) o por cortesía (<em>pasen ustedes</em>).',
      ru: 'Утвердительный imperativo нужен для:<br>• <strong>приказов и инструкций</strong>: <em>Envíe esta carta, Sr. Aguayo, por favor.</em><br>• <strong>просьб</strong>: <em>Abre la puerta, por favor.</em><br>• <strong>советов / предостережений</strong>: <em>Come más. Estás muy delgado.</em><br>• <strong>разрешения</strong>: <em>—¿Puedo pasar? —Sí, pasa.</em><br>Часто добавляют местоимение (<em>habla tú</em>, <em>pasen ustedes</em>) — для вежливости или акцента.',
      examples: [
        { es: 'Ahora <strong>habla tú</strong>, Ismael.', ru: 'Теперь говори ты, Исмаэль.' },
        { es: '<strong>Pasen ustedes</strong>, por favor.', ru: 'Проходите, пожалуйста.' },
        { es: '<strong>¡Apaga</strong> la televisión y <strong>estudia!</strong>', ru: 'Выключи телевизор и занимайся!' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '73.1',
      title: 'Образуйте все четыре формы',
      type: 'fill',
      instructions: 'Запишите указанную форму imperativo afirmativo.',
      questions: [
        { id: 'q1',  prompt: '<em>trabajar</em>, форма (tú) →',     correct: 'trabaja' },
        { id: 'q2',  prompt: '<em>trabajar</em>, форма (usted) →',  correct: 'trabaje' },
        { id: 'q3',  prompt: '<em>trabajar</em>, форма (vosotros) →', correct: 'trabajad' },
        { id: 'q4',  prompt: '<em>trabajar</em>, форма (ustedes) →', correct: 'trabajen' },
        { id: 'q5',  prompt: '<em>comer</em>, форма (tú) →',         correct: 'come' },
        { id: 'q6',  prompt: '<em>comer</em>, форма (usted) →',      correct: 'coma' },
        { id: 'q7',  prompt: '<em>comer</em>, форма (vosotros) →',   correct: 'comed' },
        { id: 'q8',  prompt: '<em>comer</em>, форма (ustedes) →',    correct: 'coman' },
        { id: 'q9',  prompt: '<em>vivir</em>, форма (tú) →',         correct: 'vive' },
        { id: 'q10', prompt: '<em>vivir</em>, форма (usted) →',      correct: 'viva' },
        { id: 'q11', prompt: '<em>vivir</em>, форма (vosotros) →',    correct: 'vivid' },
        { id: 'q12', prompt: '<em>vivir</em>, форма (ustedes) →',     correct: 'vivan' },
      ],
    },

    {
      id: '73.2',
      title: 'Советы врача (форма usted)',
      type: 'fill',
      instructions: 'Возможные глаголы: <em>andar, beber, comer, descansar, practicar</em>. Обращение к пациенту на <em>usted</em>.',
      questions: [
        { id: 'q1', prompt: '___ algún deporte.',                correct: 'Practique' },
        { id: 'q2', prompt: '___ después de las comidas.',         correct: 'Descanse' },
        { id: 'q3', prompt: '___ mucha fruta.',                    correct: 'Coma' },
        { id: 'q4', prompt: '___ mucha agua.',                     correct: 'Beba' },
        { id: 'q5', prompt: '___ dos kilómetros al día.',          correct: 'Ande' },
      ],
    },

    {
      id: '73.3',
      title: 'Какую форму выбрать (по адресату)',
      type: 'fill',
      instructions: 'Поставьте нужную форму. Образец: <em>(a un amigo) Están llamando. (Abrir) ___ la puerta, por favor</em> → <em>Abre</em>.',
      questions: [
        { id: 'q1', prompt: '(a unos niños) (Cruzar) ___ por el paso de cebra.',                correct: 'Cruzad' },
        { id: 'q2', prompt: '(a unos amigos) La paella está riquísima. (Comer) ___ más.',         correct: 'Comed' },
        { id: 'q3', prompt: '(a un amigo) (Hablar) ___ más bajo. No soy sorda.',                  correct: 'Habla' },
        { id: 'q4', prompt: '(a alguien de su familia) (Bajar) ___ la televisión. Está muy alta.', correct: 'Baja' },
        { id: 'q5', prompt: '(a un amigo) —¿Puedo llamar por teléfono? —Sí, por supuesto. (Llamar) ___.', correct: 'Llama' },
        { id: 'q6', prompt: '(a un niño) —¿Puedo comer otro pastel? —Sí, claro. (Comer) ___ todos los que quieras.', correct: 'Come' },
        { id: 'q7', prompt: '(a unos señores mayores) —¿Podemos pasar? —Sí, (pasar) ___ ustedes, por favor.', correct: 'pasen' },
        { id: 'q8', prompt: '(a unos desconocidos) (Cruzar) ___ por aquí; es más seguro.',           correct: 'Crucen' },
        { id: 'q9', prompt: '(a unos clientes) (Pagar) ___ en la caja, por favor.',                  correct: 'Paguen' },
      ],
    },

    {
      id: '73.4',
      title: 'Реклама (формы usted / ustedes)',
      type: 'fill',
      instructions: 'Заполните рекламные слоганы. Скобки = инфинитив.',
      questions: [
        { id: 'q1', prompt: '«Mes del ahorro en Supermás. (Comprar) ___ dos y (pagar) ___ uno.»',
          correct: ['Compre / pague'] },
        { id: 'q2', prompt: '«(Visitar) ___ Andalucía. (Recorrer) ___ sus ciudades y sus pueblos. (Descansar) ___ en sus playas. (Vivir) ___ unos días mágicos.»',
          correct: ['Visite / Recorra / Descanse / Viva'] },
        { id: 'q3', prompt: '«Restaurante <em>Nuevo Mundo</em>. (Comer) ___ en un ambiente especial y (disfrutar) ___ de un espectáculo inolvidable. (Ver) ___ las mejores actuaciones de América Latina.»',
          correct: ['Coma / disfrute / Vea'] },
        { id: 'q4', prompt: '«¿Te gustaría hablar español? (Estudiar) ___ con el revolucionario método <em>Naturalia</em> y (aprender) ___ español en diez meses.»',
          correct: ['Estudia / aprende'] },
        { id: 'q5', prompt: '«¿No conoce usted América Latina? (Enviar) ___ una etiqueta de leche <em>CAM</em> a Radio Central. (Participar) ___ en nuestro concurso y (ganar) ___ un viaje a Perú.»',
          correct: ['Envíe / Participe / gane'] },
      ],
    },

    {
      id: '73.5',
      title: 'Орфографические правила (−gar, −ger, −car, −zar)',
      type: 'fill',
      instructions: 'Поставьте форму <em>usted</em> (или <em>ustedes</em> в q3). Помните: перед <em>e</em> меняется согласная.',
      questions: [
        { id: 'q1', prompt: '<em>pagar</em> → forma (usted) ___',     correct: 'pague' },
        { id: 'q2', prompt: '<em>practicar</em> → forma (usted) ___', correct: 'practique' },
        { id: 'q3', prompt: '<em>cruzar</em> → forma (ustedes) ___',  correct: 'crucen' },
        { id: 'q4', prompt: '<em>escoger</em> → forma (usted) ___',   correct: 'escoja' },
        { id: 'q5', prompt: '<em>llegar</em> → forma (usted) ___',    correct: 'llegue' },
        { id: 'q6', prompt: '<em>buscar</em> → forma (ustedes) ___',  correct: 'busquen' },
        { id: 'q7', prompt: '<em>empezar</em> → forma (usted) ___',   correct: 'empiece', explanation: '<em>empezar</em> ещё и e→ie, но только в (tú): <em>empieza</em>; usted = <em>empiece</em>.' },
        { id: 'q8', prompt: '<em>recoger</em> → forma (ustedes) ___', correct: 'recojan' },
      ],
    },

    {
      id: '73.6',
      title: 'Сопоставьте функцию',
      type: 'match',
      instructions: 'Какую функцию выполняет imperativo в каждом примере?',
      pool: ['órdenes / instrucciones', 'peticiones e invitaciones', 'consejos / advertencias', 'dar permiso'],
      questions: [
        { id: 'q1', prompt: '<em>—¿Puedo pasar? —Sí, pasa.</em>',                            correct: 'dar permiso' },
        { id: 'q2', prompt: '<em>¡Policía! ¡Abran la puerta!</em>',                          correct: 'órdenes / instrucciones' },
        { id: 'q3', prompt: '<em>Come más. Estás muy delgado.</em>',                         correct: 'consejos / advertencias' },
        { id: 'q4', prompt: '<em>Abre la puerta, por favor.</em>',                           correct: 'peticiones e invitaciones' },
        { id: 'q5', prompt: '<em>Trabaja o tendrás problemas.</em>',                         correct: 'consejos / advertencias' },
        { id: 'q6', prompt: '<em>Coged un pastel. Están muy ricos.</em>',                     correct: 'peticiones e invitaciones' },
      ],
    },

    {
      id: '73.7',
      title: 'Multi: какие формы построены правильно?',
      type: 'multi',
      instructions: 'Отметьте <strong>все</strong> грамматически правильные формы.',
      questions: [
        {
          id: 'q1',
          prompt: 'Где правильный imperativo afirmativo?',
          options: [
            'habla (tú)',
            'hable (usted)',
            'hablad (vosotros)',
            'hablen (ustedes)',
            'habléis (vosotros)',
            'come (tú)',
            'comes (tú)',
            'coman (ustedes)',
            'pague (usted)',
            'page (usted)',
            'practique (usted)',
            'practica (tú)',
            'practiqued (vosotros)',
            'cruce (usted)',
          ],
          correct: [
            'habla (tú)', 'hable (usted)', 'hablad (vosotros)', 'hablen (ustedes)',
            'come (tú)', 'coman (ustedes)',
            'pague (usted)', 'practique (usted)', 'practica (tú)', 'cruce (usted)',
          ],
          explanation: '<em>habléis</em> — это subjuntivo, не imperativo afirmativo (vosotros). <em>comes</em> — настоящее. <em>page</em> и <em>practiqued</em> — несуществующие формы.',
        },
      ],
    },

    {
      id: '73.8',
      title: 'Перепишите с обращением на <em>usted</em>',
      type: 'fill',
      instructions: 'Преобразуйте просьбу из <em>tú</em> в <em>usted</em>. Образец: <em>Abre la ventana</em> → <em>Abra la ventana</em>.',
      questions: [
        { id: 'q1', prompt: '<em>Abre la puerta, por favor.</em> →',         correct: ['Abra la puerta, por favor.', 'Abra la puerta, por favor'] },
        { id: 'q2', prompt: '<em>Pasa, por favor.</em> →',                    correct: ['Pase, por favor.', 'Pase, por favor'] },
        { id: 'q3', prompt: '<em>Habla más despacio.</em> →',                 correct: ['Hable más despacio.', 'Hable más despacio'] },
        { id: 'q4', prompt: '<em>Bebe más agua.</em> →',                      correct: ['Beba más agua.', 'Beba más agua'] },
        { id: 'q5', prompt: '<em>Escribe tu nombre aquí.</em> →',             correct: ['Escriba su nombre aquí.', 'Escriba su nombre aquí'] },
        { id: 'q6', prompt: '<em>Practica más.</em> →',                       correct: ['Practique más.', 'Practique más'] },
        { id: 'q7', prompt: '<em>Paga en la caja.</em> →',                     correct: ['Pague en la caja.', 'Pague en la caja'] },
      ],
    },

    {
      id: '73.9',
      title: 'Перепишите с обращением на <em>vosotros</em>',
      type: 'fill',
      instructions: 'Преобразуйте из <em>tú</em> в <em>vosotros</em>. Образец: <em>Abre la ventana</em> → <em>Abrid la ventana</em>.',
      questions: [
        { id: 'q1', prompt: '<em>Habla más alto.</em> →',     correct: ['Hablad más alto.', 'Hablad más alto'] },
        { id: 'q2', prompt: '<em>Come más fruta.</em> →',     correct: ['Comed más fruta.', 'Comed más fruta'] },
        { id: 'q3', prompt: '<em>Vive el momento.</em> →',     correct: ['Vivid el momento.', 'Vivid el momento'] },
        { id: 'q4', prompt: '<em>Estudia más.</em> →',         correct: ['Estudiad más.', 'Estudiad más'] },
        { id: 'q5', prompt: '<em>Bebe agua.</em> →',           correct: ['Bebed agua.', 'Bebed agua'] },
        { id: 'q6', prompt: '<em>Escribe la respuesta.</em> →', correct: ['Escribid la respuesta.', 'Escribid la respuesta'] },
      ],
    },

    {
      id: '73.10',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['¡Abre la puerta!', '¡Abrid la puerta!', '¡Abren la puerta! (vosotros)', '¡Abran la puerta!'], correct: '¡Abren la puerta! (vosotros)',
          explanation: 'Для <em>vosotros</em> — <em>abrid</em>; <em>abran</em> — это ustedes.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Pague usted.', 'Page usted.', 'Paguen ustedes.', 'Paga tú.'], correct: 'Page usted.',
          explanation: 'Перед <em>e</em> ставим <em>gu</em>: <em>pague</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Practica más.', 'Practica usted más.', 'Practique más.', 'Practique usted más.'], correct: 'Practica usted más.',
          explanation: 'С <em>usted</em> идёт <em>practique</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Coman ustedes.', 'Comen ustedes. (приказ)', 'Coma usted.', 'Comed vosotros.'], correct: 'Comen ustedes. (приказ)',
          explanation: '<em>comen</em> — настоящее (factual), а в imperativo для ustedes — <em>coman</em>.' },
      ],
    },

    {
      id: '73.11',
      title: 'Переведите',
      type: 'fill',
      instructions: 'Используйте указанную форму imperativo afirmativo.',
      questions: [
        { id: 'q1', prompt: 'Открой окно. (tú)',           correct: ['Abre la ventana.', 'Abre la ventana'] },
        { id: 'q2', prompt: 'Откройте дверь. (usted)',     correct: ['Abra la puerta.', 'Abra la puerta'] },
        { id: 'q3', prompt: 'Говорите громче. (vosotros)',  correct: ['Hablad más alto.', 'Hablad más alto'] },
        { id: 'q4', prompt: 'Проходите, пожалуйста. (ustedes)', correct: ['Pasen, por favor.', 'Pasen, por favor', 'Pasen ustedes, por favor.', 'Pasen ustedes, por favor'] },
        { id: 'q5', prompt: 'Поешь немного фруктов. (tú)',  correct: ['Come un poco de fruta.', 'Come un poco de fruta'] },
      ],
    },

    {
      id: '73.12',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите фразу полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Abre la ventana, por favor.',
          correct: ['Abre la ventana, por favor.', 'Abre la ventana, por favor'] },
        { id: 'q2', prompt: '', audio: 'Pasen ustedes, por favor.',
          correct: ['Pasen ustedes, por favor.', 'Pasen ustedes, por favor'] },
        { id: 'q3', prompt: '', audio: 'Hablad más despacio.',
          correct: ['Hablad más despacio.', 'Hablad más despacio'] },
        { id: 'q4', prompt: '', audio: 'Estudia más, María.',
          correct: ['Estudia más, María.', 'Estudia más, María'] },
        { id: 'q5', prompt: '', audio: 'Practique todos los días.',
          correct: ['Practique todos los días.', 'Practique todos los días'] },
        { id: 'q6', prompt: '', audio: 'Crucen por el paso de cebra.',
          correct: ['Crucen por el paso de cebra.', 'Crucen por el paso de cebra'] },
      ],
    },
  ],
};
