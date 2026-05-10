// ============================================================
// Unidad 91 — Condicionales (1)
// Si ganan, serán campeones
// Реальные/возможные условия: si + presente de indicativo →
// futuro simple / presente / imperativo. Si = «cuando, siempre que»
// для общих истин и привычек.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u91 = {
  id: 'u91',
  number: 91,
  title: { es: 'Si ganan, serán campeones', topic: 'Condicionales (1)' },
  topicRu: 'Условные предложения (1): реальное условие в настоящем/будущем',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Las <strong>oraciones condicionales</strong> con <em>si</em> expresan una <strong>condición</strong> de la que depende otra acción o situación. Cuando hablamos de algo que <strong>puede ocurrir</strong> o ser cierto en el presente o el futuro, usamos <em>si + presente de indicativo</em>.',
      ru: '<strong>Условные предложения</strong> с <em>si</em> описывают условие, от которого зависит другое действие. Когда речь о чём-то, что <strong>реально может произойти</strong> в настоящем или будущем, в самом условии стоит <em>si + presente de indicativo</em>.',
      examples: [
        { es: 'Si ganan este partido, serán campeones.', ru: 'Если выиграют этот матч, станут чемпионами.' },
        { es: 'Si no llueve mañana, iré a la playa.', ru: 'Если завтра не пойдёт дождь, поеду на пляж.' },
        { es: 'Si tienes hambre, come algo.', ru: 'Если ты голоден, поешь чего-нибудь.' },
      ],
    },

    {
      type: 'heading',
      text: 'Что стоит в главной части',
    },
    {
      type: 'table',
      caption: 'Реальное условие в настоящем/будущем',
      columns: ['Condición', 'Consecuencia', 'Ejemplo'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<em>si</em> + <strong>presente</strong>', '<strong>futuro simple</strong> (самый частый случай)', '<em>Si no nos damos prisa, llegaremos tarde.</em>'],
        ['<em>si</em> + <strong>presente</strong>', '<strong>presente de indicativo</strong> — когда следствие почти неизбежно', '<em>Si encuentro otro trabajo, me cambio.</em>'],
        ['<em>si</em> + <strong>presente</strong>', '<strong>imperativo</strong> — приказ, просьба', '<em>Si llaman de la oficina, avísame.</em>'],
      ],
    },

    {
      type: 'atencion',
      es: 'La oración con <em>si</em> puede ir <strong>al principio</strong> o <strong>al final</strong> de la frase. Cuando va al principio, se separa con coma; al final, no.',
      ru: 'Условная часть может стоять как <strong>в начале</strong>, так и <strong>в конце</strong> предложения. В начале — отделяется запятой; в конце — без запятой.',
    },
    {
      type: 'rule',
      es: 'Comparación de matices en la consecuencia.',
      ru: 'Сравните оттенки следствия.',
      examples: [
        { es: 'Si llueve, nos quedaremos en casa.', ru: 'Если будет дождь, останемся дома. (нейтральный прогноз)' },
        { es: 'Si llueve, nos quedamos en casa.', ru: 'Если дождь — остаёмся дома. (фактически решено)' },
        { es: 'Si llueve, quédate en casa.', ru: 'Если будет дождь, останься дома. (совет, просьба)' },
      ],
    },

    {
      type: 'heading',
      text: 'Si = cuando / siempre que',
    },
    {
      type: 'rule',
      es: 'Se usa <em>si</em> con el sentido de <em>cuando</em> o <em>siempre que</em> para hablar de <strong>verdades universales, leyes naturales o hábitos</strong>. En este caso, en las dos partes va <em>presente de indicativo</em>.',
      ru: '<em>Si</em> в значении «когда, всякий раз когда» используется для <strong>общих истин, законов природы и привычек</strong>. Тогда в обеих частях стоит <em>presente de indicativo</em>.',
      examples: [
        { es: 'Si calientas el hielo, se derrite.', ru: 'Если нагреть лёд — он тает. (= когда нагреваешь)' },
        { es: 'Si hace frío, no voy a la piscina.', ru: 'В холод я в бассейн не хожу. (привычка)' },
        { es: 'Si Pablo viene a casa, siempre trae un regalo.', ru: 'Когда Пабло приходит к нам, он всегда приносит подарок.' },
      ],
    },

    {
      type: 'atencion',
      es: 'Después de <em>si</em> <strong>nunca</strong> se usa el futuro simple ni el presente de subjuntivo en español. Es un error frecuente: ⛔ <em>Si tendré tiempo...</em> / ⛔ <em>Si tenga tiempo...</em> → ✅ <em>Si tengo tiempo...</em>',
      ru: 'После <em>si</em> <strong>никогда</strong> не ставится будущее время или презенс субхунтива. Частая ошибка: ⛔ <em>Si tendré tiempo</em> / ⛔ <em>Si tenga tiempo</em> → ✅ <em>Si tengo tiempo</em>.',
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '91.1',
      title: 'Допишите следствие в будущем времени',
      type: 'fill',
      instructions: 'Поставьте глагол в скобках в <em>futuro simple</em>.',
      questions: [
        { id: 'q1', prompt: 'Si no estudias más, no (aprobar) ___ el examen.', correct: 'aprobarás' },
        { id: 'q2', prompt: 'Si hace buen tiempo, (nosotros / ir) ___ a la montaña.', correct: 'iremos' },
        { id: 'q3', prompt: 'Si Marta llega pronto, (nosotros / cenar) ___ juntos.', correct: 'cenaremos' },
        { id: 'q4', prompt: 'Si no os dais prisa, (perder) ___ el tren.', correct: 'perderéis' },
        { id: 'q5', prompt: 'Si Luis me llama, le (decir) ___ la verdad.', correct: 'diré' },
        { id: 'q6', prompt: 'Si tienen hambre, (comer) ___ algo en el bar.', correct: 'comerán' },
        { id: 'q7', prompt: 'Si encuentro un piso barato, lo (alquilar) ___.', correct: 'alquilaré' },
        { id: 'q8', prompt: 'Si vienes a Madrid, (tú / poder) ___ quedarte en mi casa.', correct: 'podrás' },
      ],
    },

    {
      id: '91.2',
      title: 'Какое время в условии?',
      type: 'choice',
      instructions: 'Выберите форму, которая корректно сочетается с <em>si</em>.',
      questions: [
        { id: 'q1', prompt: 'Si ___ tiempo, te llamaré.', options: ['tengo', 'tendré', 'tenga'], correct: 'tengo', explanation: 'После <em>si</em> для реального условия — <em>presente de indicativo</em>.' },
        { id: 'q2', prompt: 'Si ___ frío, no salimos.', options: ['hace', 'hará', 'haga'], correct: 'hace' },
        { id: 'q3', prompt: 'Si los niños ___ pronto, jugaremos en el parque.', options: ['vuelven', 'volverán', 'vuelvan'], correct: 'vuelven' },
        { id: 'q4', prompt: 'Si tú ___ a la fiesta, yo también iré.', options: ['vas', 'irás', 'vayas'], correct: 'vas' },
        { id: 'q5', prompt: 'Si me ___ de noche, no contesto el teléfono.', options: ['llaman', 'llamarán', 'llamen'], correct: 'llaman' },
        { id: 'q6', prompt: 'Si Pedro ___ esta semana, te lo presento.', options: ['viene', 'vendrá', 'venga'], correct: 'viene' },
      ],
    },

    {
      id: '91.3',
      title: 'Условие + императив',
      type: 'fill',
      instructions: 'Преобразуйте глагол в скобках в форму <em>tú</em> повелительного наклонения. Образец: <em>Si llaman, (avisar) → avisa.</em>',
      questions: [
        { id: 'q1', prompt: 'Si tienes sed, (beber) ___ agua.', correct: 'bebe' },
        { id: 'q2', prompt: 'Si no entiendes la pregunta, (preguntar) ___ otra vez.', correct: 'pregunta' },
        { id: 'q3', prompt: 'Si te encuentras mal, (ir) ___ al médico.', correct: 've', explanation: 'Императив <em>tú</em> от <em>ir</em> — <em>ve</em>.' },
        { id: 'q4', prompt: 'Si quieres aprobar, (estudiar) ___ más.', correct: 'estudia' },
        { id: 'q5', prompt: 'Si llega Carmen, (decirle) ___ que estoy en la cocina.', correct: 'dile', explanation: '<em>di</em> + местоимение = <em>dile</em>.' },
        { id: 'q6', prompt: 'Si tienes frío, (cerrar) ___ la ventana.', correct: 'cierra' },
        { id: 'q7', prompt: 'Si suena el teléfono, no (contestar) ___.', correct: 'contestes', explanation: 'Отрицательный императив = <em>no + presente de subjuntivo</em>.' },
      ],
    },

    {
      id: '91.4',
      title: 'Соедините условие и следствие',
      type: 'match',
      instructions: 'Каждому условию слева подберите логичное продолжение справа.',
      pool: [
        'iremos a la playa.',
        'llámame al móvil.',
        'tomo una aspirina.',
        'no pasarás el examen.',
        'cómpralo.',
        'cenaremos juntos.',
        'me cambio de empresa.',
      ],
      questions: [
        { id: 'q1', prompt: 'Si hace sol mañana,',           correct: 'iremos a la playa.' },
        { id: 'q2', prompt: 'Si me duele la cabeza,',         correct: 'tomo una aspirina.' },
        { id: 'q3', prompt: 'Si no estudias más,',            correct: 'no pasarás el examen.' },
        { id: 'q4', prompt: 'Si necesitas algo,',             correct: 'llámame al móvil.' },
        { id: 'q5', prompt: 'Si te gusta ese libro,',         correct: 'cómpralo.' },
        { id: 'q6', prompt: 'Si Lola llega antes de las ocho,', correct: 'cenaremos juntos.' },
        { id: 'q7', prompt: 'Si encuentro un trabajo mejor,', correct: 'me cambio de empresa.' },
      ],
    },

    {
      id: '91.5',
      title: 'Образуйте условную фразу',
      type: 'fill',
      instructions: 'Соедините две части в одну фразу: <em>Si</em> + <em>presente</em>, <em>futuro simple</em>. Пишите всю фразу целиком, начиная с <em>Si</em>.',
      questions: [
        { id: 'q1', prompt: 'no llover / nosotros salir →', correct: ['Si no llueve, saldremos.', 'Si no llueve saldremos.'], placeholder: 'Si no llueve, ...' },
        { id: 'q2', prompt: 'tú venir conmigo / yo ser feliz →', correct: ['Si vienes conmigo, seré feliz.', 'Si vienes conmigo seré feliz.'] },
        { id: 'q3', prompt: 'ellos llegar tarde / nosotros empezar sin ellos →', correct: ['Si llegan tarde, empezaremos sin ellos.', 'Si llegan tarde empezaremos sin ellos.'] },
        { id: 'q4', prompt: 'tú aprender bien / encontrar trabajo →', correct: ['Si aprendes bien, encontrarás trabajo.', 'Si aprendes bien encontrarás trabajo.'] },
        { id: 'q5', prompt: 'yo tener tiempo / ir al cine →', correct: ['Si tengo tiempo, iré al cine.', 'Si tengo tiempo iré al cine.'] },
      ],
    },

    {
      id: '91.6',
      title: 'Найдите фразы без ошибок',
      type: 'multi',
      instructions: 'Отметьте все фразы, в которых грамматика условия с <em>si</em> верна.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Si tendré tiempo, te llamaré.',
            'Si tengo tiempo, te llamaré.',
            'Si quieras, vamos al cine.',
            'Si quieres, vamos al cine.',
            'Si llueve, no salimos.',
            'Si lloverá, no saliremos.',
            'Si me llama Ana, dile que estoy aquí.',
            'Si me llamará Ana, dile que estoy aquí.',
          ],
          correct: [
            'Si tengo tiempo, te llamaré.',
            'Si quieres, vamos al cine.',
            'Si llueve, no salimos.',
            'Si me llama Ana, dile que estoy aquí.',
          ],
          explanation: 'После <em>si</em> в реальных условиях — только <em>presente de indicativo</em>. Будущее (<em>tendré, llamará</em>) и субхунтив (<em>quieras</em>) недопустимы.',
        },
      ],
    },

    {
      id: '91.7',
      title: 'Si = «когда, всякий раз когда»',
      type: 'fill',
      instructions: 'Это <strong>общая истина</strong> или <strong>привычка</strong>: в обеих частях ставьте <em>presente de indicativo</em>.',
      questions: [
        { id: 'q1', prompt: 'Si (yo / no dormir) ___ ocho horas, estoy cansado todo el día.', correct: 'no duermo' },
        { id: 'q2', prompt: 'Si (tú / mezclar) ___ amarillo y azul, sale verde.', correct: 'mezclas' },
        { id: 'q3', prompt: 'Si Pedro (beber) ___ café por la noche, no duerme.', correct: 'bebe' },
        { id: 'q4', prompt: 'Si (hacer) ___ mucho frío, los pájaros se van al sur.', correct: 'hace' },
        { id: 'q5', prompt: 'Si los niños (comer) ___ demasiado chocolate, se ponen malos.', correct: 'comen' },
        { id: 'q6', prompt: 'Si (yo / no desayunar) ___, me duele la cabeza.', correct: 'no desayuno' },
      ],
    },

    {
      id: '91.8',
      title: 'Какой нюанс у следствия',
      type: 'choice',
      instructions: 'Что показывает форма глагола в главной части?',
      questions: [
        { id: 'q1', prompt: '<em>Si llueve, nos quedaremos en casa.</em>', options: ['нейтральный прогноз', 'факт, уже решено', 'просьба / совет'], correct: 'нейтральный прогноз' },
        { id: 'q2', prompt: '<em>Si llueve, nos quedamos en casa.</em>', options: ['нейтральный прогноз', 'факт, уже решено', 'просьба / совет'], correct: 'факт, уже решено' },
        { id: 'q3', prompt: '<em>Si llueve, quédate en casa.</em>', options: ['нейтральный прогноз', 'факт, уже решено', 'просьба / совет'], correct: 'просьба / совет' },
        { id: 'q4', prompt: '<em>Si tienes hambre, come algo.</em>', options: ['нейтральный прогноз', 'просьба / совет'], correct: 'просьба / совет' },
        { id: 'q5', prompt: '<em>Si tengo dinero, me compro un coche.</em>', options: ['нейтральный прогноз', 'факт, почти решено', 'просьба / совет'], correct: 'факт, почти решено' },
      ],
    },

    {
      id: '91.9',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой согласования времён в условии.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['Si vienes, te invito.', 'Si vendrás, te invitaré.', 'Si vienes, te invitaré.', 'Si Marta viene, le decimos la verdad.'], correct: 'Si vendrás, te invitaré.', explanation: 'После <em>si</em> нельзя <em>vendrás</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Si haga sol, iremos.', 'Si hace sol, iremos.', 'Si hace sol, vamos.', 'Si hace sol, ve a la playa.'], correct: 'Si haga sol, iremos.', explanation: 'Субхунтив <em>haga</em> после <em>si</em> в реальном условии — ошибка.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Si tienes frío, cierra la ventana.', 'Si no me crees, pregunta a Lola.', 'Si quieras, te ayudo.', 'Si tienes hambre, come algo.'], correct: 'Si quieras, te ayudo.', explanation: 'Должно быть <em>Si quieres</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['Si calientas el agua, hierve.', 'Si calentarás el agua, hierve.', 'Si Ana llama, dile que estoy aquí.', 'Si llueve, me quedo.'], correct: 'Si calentarás el agua, hierve.', explanation: 'После <em>si</em> не используется будущее.' },
      ],
    },

    {
      id: '91.10',
      title: 'Закончите диалог',
      type: 'fill',
      instructions: 'Поставьте глагол в скобках в нужное время.',
      questions: [
        { id: 'q1', prompt: '— ¿Vamos al cine? — Si (haber) ___ entradas, vale.', correct: 'hay' },
        { id: 'q2', prompt: '— ¿Y si (llover) ___? — Pues nos quedamos en casa.', correct: 'llueve' },
        { id: 'q3', prompt: '— Si yo (estar) ___ libre el sábado, te llamo.', correct: 'estoy' },
        { id: 'q4', prompt: '— Si los niños (portarse) ___ bien, les compraré un helado.', correct: 'se portan' },
        { id: 'q5', prompt: '— ¿Vienes mañana? — Si no (yo / tener) ___ que trabajar, sí.', correct: 'tengo' },
        { id: 'q6', prompt: '— Si Antonio te (preguntar) ___, dile que no sabes nada.', correct: 'pregunta' },
      ],
    },

    {
      id: '91.11',
      title: 'Аудио: запишите фразу полностью',
      type: 'fill',
      instructions: 'Нажмите <code>🔊</code> и запишите услышанную фразу, не забывая о диакритике.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Si tengo tiempo, te llamaré.',            correct: ['Si tengo tiempo, te llamaré.', 'Si tengo tiempo te llamaré.', 'Si tengo tiempo, te llamaré'] },
        { id: 'q2', prompt: '', audio: 'Si no llueve, iremos a la playa.',         correct: ['Si no llueve, iremos a la playa.', 'Si no llueve iremos a la playa.', 'Si no llueve, iremos a la playa'] },
        { id: 'q3', prompt: '', audio: 'Si tienes hambre, come algo.',              correct: ['Si tienes hambre, come algo.', 'Si tienes hambre come algo.', 'Si tienes hambre, come algo'] },
        { id: 'q4', prompt: '', audio: 'Si calientas el hielo, se derrite.',         correct: ['Si calientas el hielo, se derrite.', 'Si calientas el hielo se derrite.', 'Si calientas el hielo, se derrite'] },
        { id: 'q5', prompt: '', audio: 'Si llaman de la oficina, avísame.',           correct: ['Si llaman de la oficina, avísame.', 'Si llaman de la oficina avísame.', 'Si llaman de la oficina, avísame'] },
      ],
    },

    {
      id: '91.12',
      title: 'Реальное условие или общая истина?',
      type: 'choice',
      instructions: 'Что выражает фраза?',
      questions: [
        { id: 'q1', prompt: '<em>Si bebes mucho café, no duermes bien.</em>', options: ['конкретное предсказание', 'общая истина / привычка'], correct: 'общая истина / привычка' },
        { id: 'q2', prompt: '<em>Si Luis llega antes de las siete, vamos al cine.</em>', options: ['конкретное предсказание', 'общая истина / привычка'], correct: 'конкретное предсказание' },
        { id: 'q3', prompt: '<em>Si calientas el hielo, se derrite.</em>', options: ['конкретное предсказание', 'общая истина / привычка'], correct: 'общая истина / привычка' },
        { id: 'q4', prompt: '<em>Si mañana hace sol, iremos al campo.</em>', options: ['конкретное предсказание', 'общая истина / привычка'], correct: 'конкретное предсказание' },
        { id: 'q5', prompt: '<em>Si Lola viene a casa, siempre trae galletas.</em>', options: ['конкретное предсказание', 'общая истина / привычка'], correct: 'общая истина / привычка' },
      ],
    },
  ],
};
