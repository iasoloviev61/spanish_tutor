// ============================================================
// Unidad 18 — Posesivos (1): mi, tu, su, nuestro, vuestro
// Притяжательные перед существительным.
// Правила пересказаны своими словами; примеры — оригинальные.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u18 = {
  id: 'u18',
  number: 18,
  title: { es: 'mi, tu, su...', topic: 'Posesivos (1)' },
  topicRu: 'Безударные притяжательные перед существительным',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'Los posesivos <em>mi, tu, su, nuestro, vuestro</em> se usan para indicar <strong>posesión</strong> u otro tipo de relación con personas, animales o cosas: familia, origen, color preferido, etc. Van <strong>antes</strong> del nombre.',
      ru: 'Безударные притяжательные <em>mi, tu, su, nuestro, vuestro</em> ставятся <strong>перед существительным</strong> и обозначают принадлежность или связь — родство, происхождение, любимый цвет, своя вещь и т. д.',
      examples: [
        { es: 'Mi madre trabaja en un laboratorio.', ru: 'Моя мама работает в лаборатории.' },
        { es: '—¿Dónde es la fiesta? —En mi casa.', ru: '— Где праздник? — У меня дома.' },
        { es: 'Jimena tiene un pequeño chalé en su pueblo.', ru: 'У Химены есть небольшой домик в её деревне.' },
        { es: '—¿Cuál es tu color preferido? —El blanco.', ru: '— Какой у тебя любимый цвет? — Белый.' },
      ],
    },
    {
      type: 'heading',
      text: 'Формы',
    },
    {
      type: 'table',
      caption: 'Posesivos — ед. и мн. число',
      columns: ['Хозяин', 'ед., м', 'ед., ж', 'мн., м', 'мн., ж'],
      colClasses: ['col-pattern', 'col-result', 'col-result', 'col-result', 'col-result'],
      rows: [
        ['<em>yo</em>', 'mi', 'mi', 'mis', 'mis'],
        ['<em>tú</em>', 'tu', 'tu', 'tus', 'tus'],
        ['<em>usted, él, ella</em>', 'su', 'su', 'sus', 'sus'],
        ['<em>nosotros, -as</em>', 'nuestro', 'nuestra', 'nuestros', 'nuestras'],
        ['<em>vosotros, -as</em>', 'vuestro', 'vuestra', 'vuestros', 'vuestras'],
        ['<em>ustedes, ellos, ellas</em>', 'su', 'su', 'sus', 'sus'],
      ],
    },
    {
      type: 'rule',
      es: '<em>mi, tu, su</em> tienen una sola forma para masculino y femenino. <em>nuestro / vuestro</em> tienen <strong>cuatro</strong> formas: <em>nuestro / nuestra / nuestros / nuestras</em>. Todos concuerdan con el <strong>objeto poseído</strong>, no con el dueño.',
      ru: 'У <em>mi, tu, su</em> по одной форме на оба рода (различается только число: <em>mi / mis</em>). У <em>nuestro</em> и <em>vuestro</em> — <strong>четыре</strong> формы (по родам и числам). Согласование идёт с <strong>предметом</strong>, а не с владельцем.',
      examples: [
        { es: 'mi padre / mi madre / mis padres / mis hermanas', ru: 'мой отец / моя мать / мои родители / мои сёстры' },
        { es: 'nuestro coche / nuestra casa / nuestros amigos / nuestras vecinas', ru: 'наш(а / и) ...' },
        { es: 'vuestro perro / vuestras hijas', ru: 'ваш(а / и) ...' },
      ],
    },
    {
      type: 'atencion',
      es: '<em>su / sus</em> = <em>de él, de ella, de usted, de ellos, de ellas, de ustedes</em>. Generalmente la situación indica a quién se refiere; si hay duda, se aclara con <em>de él / de ella ...</em>.',
      ru: '<strong>su / sus</strong> очень многозначно: «его», «её», «их», «Ваш / Ваши», «ваше (vosotros)» (для usted/ustedes). Обычно понятно из контекста; если нет — уточняют через <em>de él, de ella, de ustedes</em> и т. д. <em>Mire, don Raúl. Ahí va Jorge con sus hijas</em> — здесь явно «дочерями Хорхе».',
    },
    {
      type: 'rule',
      es: 'Con partes del cuerpo, prendas de vestir y otros objetos personales se usa <strong>el / la / los / las</strong>, <strong>no</strong> <em>mi / tu / su</em>.',
      ru: 'С частями тела, одеждой и личными вещами в испанском используется <strong>определённый артикль</strong>, а не притяжательное: <em>Me duele la cabeza</em> (не «<em>mi cabeza</em>»), <em>Quítate el abrigo</em>, <em>Tengo que lavar el coche</em>. Принадлежность и так понятна по контексту или по местоимению-возвратке.',
      examples: [
        { es: 'Me duele la cabeza.', ru: 'У меня болит голова.' },
        { es: 'Quítate el abrigo.', ru: 'Сними пальто.' },
        { es: 'Tengo que lavar el coche.', ru: 'Мне нужно помыть машину.' },
        { es: 'Me estoy lavando el pelo.', ru: 'Я мою голову.' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '18.1',
      title: 'Семейные деревья',
      type: 'fill',
      instructions: 'Семья Суарес: Лукас и Мария — родители Розы и Бегоньи; Бегонья замужем за Альфонсо, у них дети Артуро и Карлота. Семья Салина: Хулио и Росарио — родители Кармело и Лупе; Кармело женат на Хусте, у них дети Бланка, Лусия и Эмилио. Заполните пропуски формами <em>mi, tu, su, nuestro, vuestro</em>.',
      questions: [
        { id: 'q1', prompt: '<em>Emilio:</em> ___ hermanas se llaman Blanca y Lucía.', correct: 'Mis' },
        { id: 'q2', prompt: '<em>Carlota a don Carmelo:</em> ¿Cómo se llama ___ mujer, don Carmelo?', correct: 'su' },
        { id: 'q3', prompt: '<em>Blanca y Lucía:</em> ___ abuela se llama Rosario.', correct: 'Nuestra' },
        { id: 'q4', prompt: '<em>Emilio a Arturo y Carlota:</em> ¿Cómo se llaman ___ abuelos?', correct: 'vuestros' },
        { id: 'q5', prompt: '<em>Alfonso:</em> ___ madre se llama María.', correct: 'Mi' },
        { id: 'q6', prompt: '<em>Blanca a Arturo:</em> ¿Cómo se llama ___ tía, Arturo?', correct: 'tu' },
        { id: 'q7', prompt: '<em>Carlota a don Julio:</em> ¿Cómo se llaman ___ hijos, don Julio?', correct: 'sus' },
        { id: 'q8', prompt: '<em>Carmelo y Lupe:</em> ___ padres se llaman Julio y Rosario.', correct: 'Nuestros' },
        { id: 'q9', prompt: '<em>Arturo a Blanca y Lucía:</em> Blanca, Lucía, ¿cómo se llama ___ madre?', correct: 'vuestra' },
      ],
    },

    {
      id: '18.2',
      title: 'Заполните mi, tu, su, nuestro, vuestro',
      type: 'fill',
      instructions: 'Подберите подходящую форму притяжательного. Следите за родом и числом.',
      questions: [
        { id: 'q1', prompt: '—¿Cuál es ___ color preferido, Berta? —El azul.', correct: 'tu' },
        { id: 'q2', prompt: 'Mi hermano y yo jugamos mucho al tenis. Es ___ deporte preferido.', correct: 'nuestro' },
        { id: 'q3', prompt: 'La señora Valverde y ___ hijas son muy agradables.', correct: 'sus' },
        { id: 'q4', prompt: '—¿Dónde están Sol y Rocío? —En ___ casa.', correct: 'su' },
        { id: 'q5', prompt: 'Anoche fui al cine con ___ padre y ___ hermanos.', correct: 'mi' },
        { id: 'q6', prompt: 'Jorge, Juan, ¿dónde están ___ libros?', correct: 'vuestros' },
        { id: 'q7', prompt: '—¿Cuál es ___ comida preferida, Enrique? —La paella.', correct: 'tu' },
        { id: 'q8', prompt: 'Ayer conocí a ___ padres, Verónica. Son muy simpáticos.', correct: 'tus' },
      ],
    },

    {
      id: '18.3',
      title: 'Притяжательное или артикль?',
      type: 'choice',
      instructions: 'С частями тела, одеждой и личными вещами обычно используется определённый артикль, а не притяжательное. Выберите верный вариант.',
      questions: [
        { id: 'q1', prompt: 'Me estoy lavando ___ pelo.', options: ['mi', 'el'], correct: 'el' },
        { id: 'q2', prompt: 'Átate ___ zapatos.', options: ['tus', 'los'], correct: 'los' },
        { id: 'q3', prompt: 'Rodrigo trabaja con ___ padre.', options: ['su', 'el'], correct: 'su', explanation: 'Здесь речь о родственнике — притяжательное.' },
        { id: 'q4', prompt: 'Tenéis ___ ojos rojos.', options: ['vuestros', 'los'], correct: 'los' },
        { id: 'q5', prompt: '___ tíos viven en Puerto Rico.', options: ['Mis', 'Los'], correct: 'Mis', explanation: 'Родственники — с притяжательным.' },
        { id: 'q6', prompt: 'Le di ___ mano.', options: ['mi', 'la'], correct: 'la' },
        { id: 'q7', prompt: '___ abuela tiene 85 años.', options: ['Su', 'La'], correct: 'Su' },
        { id: 'q8', prompt: 'Tienes una mancha en ___ nariz.', options: ['tu', 'la'], correct: 'la' },
        { id: 'q9', prompt: 'Quitaos ___ chaquetas.', options: ['vuestras', 'las'], correct: 'las' },
        { id: 'q10', prompt: 'Al señor Alfonsín se le ha estropeado ___ coche.', options: ['su', 'el'], correct: 'el', explanation: 'Личная вещь — артикль.' },
      ],
    },

    {
      id: '18.4',
      title: 'Образуйте множественное число',
      type: 'fill',
      instructions: 'Перепишите фразу так, чтобы существительное стало множественного числа. Не забудьте про притяжательное.',
      questions: [
        { id: 'q1', prompt: 'mi libro →', correct: 'mis libros' },
        { id: 'q2', prompt: 'tu hermana →', correct: 'tus hermanas' },
        { id: 'q3', prompt: 'su amigo →', correct: 'sus amigos' },
        { id: 'q4', prompt: 'nuestra casa →', correct: 'nuestras casas' },
        { id: 'q5', prompt: 'nuestro coche →', correct: 'nuestros coches' },
        { id: 'q6', prompt: 'vuestra hija →', correct: 'vuestras hijas' },
        { id: 'q7', prompt: 'vuestro perro →', correct: 'vuestros perros' },
        { id: 'q8', prompt: 'mi tía →', correct: 'mis tías' },
      ],
    },

    {
      id: '18.5',
      title: 'nuestro / vuestro: согласование',
      type: 'choice',
      instructions: 'Выберите верную форму <em>nuestro / -a / -os / -as</em> или <em>vuestro / -a / -os / -as</em>. Согласуется с предметом.',
      questions: [
        { id: 'q1', prompt: '___ casa es muy grande.', options: ['Nuestro', 'Nuestra', 'Nuestros'], correct: 'Nuestra' },
        { id: 'q2', prompt: '___ amigos viven en Sevilla.', options: ['Nuestro', 'Nuestra', 'Nuestros'], correct: 'Nuestros' },
        { id: 'q3', prompt: 'Me gustan ___ vecinas.', options: ['vuestros', 'vuestras', 'vuestra'], correct: 'vuestras' },
        { id: 'q4', prompt: '¿Dónde está ___ coche?', options: ['vuestro', 'vuestra', 'vuestros'], correct: 'vuestro' },
        { id: 'q5', prompt: '___ profesores son muy estrictos.', options: ['Nuestro', 'Nuestros', 'Nuestras'], correct: 'Nuestros' },
        { id: 'q6', prompt: '¿Y ___ hijas? ¿Cuántos años tienen?', options: ['vuestro', 'vuestras', 'vuestros'], correct: 'vuestras' },
      ],
    },

    {
      id: '18.6',
      title: 'su может означать многое — выберите все возможные толкования',
      type: 'multi',
      instructions: 'Какие переводы фразы <em>Esta es su casa.</em> грамматически возможны (без дополнительного контекста)?',
      questions: [
        {
          id: 'q1',
          prompt: 'Возможные значения <em>Esta es su casa.</em>:',
          options: [
            'Это его дом.',
            'Это её дом.',
            'Это Ваш дом (usted).',
            'Это их дом (ellos / ellas).',
            'Это Ваш дом (ustedes).',
            'Это мой дом.',
            'Это твой дом.',
          ],
          correct: [
            'Это его дом.',
            'Это её дом.',
            'Это Ваш дом (usted).',
            'Это их дом (ellos / ellas).',
            'Это Ваш дом (ustedes).',
          ],
          explanation: '<em>su</em> покрывает все «третьи лица» и оба варианта вежливого обращения. «Мой» — <em>mi</em>, «твой» — <em>tu</em>.',
        },
      ],
    },

    {
      id: '18.7',
      title: 'Сопоставьте лицо и форму',
      type: 'match',
      instructions: 'Подберите для каждого хозяина форму притяжательного, которая согласуется со словом <em>libros</em>.',
      pool: ['mis libros', 'tus libros', 'sus libros', 'nuestros libros', 'vuestros libros'],
      questions: [
        { id: 'q1', prompt: '<em>yo</em> →', correct: 'mis libros' },
        { id: 'q2', prompt: '<em>tú</em> →', correct: 'tus libros' },
        { id: 'q3', prompt: '<em>él / ella / usted / ellos / ellas / ustedes</em> →', correct: 'sus libros' },
        { id: 'q4', prompt: '<em>nosotros / -as</em> →', correct: 'nuestros libros' },
        { id: 'q5', prompt: '<em>vosotros / -as</em> →', correct: 'vuestros libros' },
      ],
    },

    {
      id: '18.8',
      title: 'su = de él / de ella / de ustedes …',
      type: 'fill',
      instructions: 'Перепишите фразу через уточнение <em>de él / de ella / de ellos / de ellas / de usted / de ustedes</em>, как просит подсказка.',
      questions: [
        { id: 'q1', prompt: 'sus hijas (de Jorge) →', correct: ['las hijas de Jorge', 'las hijas de él'] },
        { id: 'q2', prompt: 'su coche (de Alicia) →', correct: ['el coche de Alicia', 'el coche de ella'] },
        { id: 'q3', prompt: 'sus libros (de los señores Puebla) →', correct: ['los libros de los señores Puebla', 'los libros de ellos'] },
        { id: 'q4', prompt: 'su mujer (de Abel) →', correct: ['la mujer de Abel', 'la mujer de él'] },
        { id: 'q5', prompt: 'su hijo (de usted) →', correct: ['el hijo de usted'] },
      ],
    },

    {
      id: '18.9',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна фраза с ошибкой согласования или с лишним притяжательным. Выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['mis libros', 'tu hermanas', 'su coche', 'nuestras casas'], correct: 'tu hermanas', explanation: 'Должно быть <em>tus hermanas</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['Me duele la cabeza.', 'Me duele mi cabeza.', 'Quítate el abrigo.', 'Lávate las manos.'], correct: 'Me duele mi cabeza.', explanation: 'С частями тела ставится артикль.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['Nuestro casa es grande.', 'Nuestra casa es grande.', 'Nuestros amigos viven aquí.', 'Nuestras hijas son pequeñas.'], correct: 'Nuestro casa es grande.', explanation: '<em>casa</em> — женский род → <em>nuestra</em>.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['vuestra hija', 'vuestro hijos', 'vuestros hijos', 'vuestras hijas'], correct: 'vuestro hijos', explanation: '<em>hijos</em> мн. ч. → <em>vuestros</em>.' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['Tengo que lavar el coche.', 'Tengo que lavar mi coche.', 'Mi coche es nuevo.', 'Mi madre tiene un coche nuevo.'], correct: 'Tengo que lavar mi coche.', explanation: 'С личными вещами в действии «помыть/починить» используют артикль: <em>lavar el coche</em>.' },
      ],
    },

    {
      id: '18.10',
      title: 'Выберите все правильно построенные фразы',
      type: 'multi',
      instructions: 'Отметьте грамматически верные варианты (помните о согласовании и о случаях с артиклем).',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие фразы корректны?',
          options: [
            'Mi padre es médico.',
            'Mis padres son médicos.',
            'Nuestra hijos son altos.',
            'Nuestros hijos son altos.',
            'Vuestra casa es bonita.',
            'Vuestras casa es bonita.',
            'Me duele la mano.',
            'Me duele mi mano.',
            'Quítate los zapatos.',
            'Quítate tus zapatos.',
          ],
          correct: [
            'Mi padre es médico.',
            'Mis padres son médicos.',
            'Nuestros hijos son altos.',
            'Vuestra casa es bonita.',
            'Me duele la mano.',
            'Quítate los zapatos.',
          ],
        },
      ],
    },

    {
      id: '18.11',
      title: 'Перевод с русского',
      type: 'fill',
      instructions: 'Переведите фразу. Используйте безударные притяжательные.',
      questions: [
        { id: 'q1', prompt: 'Моя мама работает в больнице.', correct: ['Mi madre trabaja en un hospital.', 'Mi madre trabaja en un hospital'] },
        { id: 'q2', prompt: 'Где твои книги?', correct: ['¿Dónde están tus libros?', '¿Dónde están tus libros'] },
        { id: 'q3', prompt: 'Это наш дом.', correct: ['Esta es nuestra casa.', 'Esta es nuestra casa', 'Es nuestra casa.', 'Es nuestra casa'] },
        { id: 'q4', prompt: 'Ваши (vosotros) дети очень милые.', correct: ['Vuestros hijos son muy simpáticos.', 'Vuestros hijos son muy simpáticos'] },
        { id: 'q5', prompt: 'У меня болят глаза.', correct: ['Me duelen los ojos.', 'Me duelen los ojos'] },
      ],
    },

    {
      id: '18.12',
      title: 'Аудио: послушайте и запишите',
      type: 'fill',
      instructions: 'Запишите услышанное полностью, с пунктуацией и диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Mi madre trabaja en un laboratorio.', correct: ['Mi madre trabaja en un laboratorio.', 'Mi madre trabaja en un laboratorio'] },
        { id: 'q2', prompt: '', audio: '¿Cuál es tu color preferido?', correct: ['¿Cuál es tu color preferido?', '¿Cuál es tu color preferido'] },
        { id: 'q3', prompt: '', audio: 'Nuestros hijos son muy simpáticos.', correct: ['Nuestros hijos son muy simpáticos.', 'Nuestros hijos son muy simpáticos'] },
        { id: 'q4', prompt: '', audio: 'Quítate el abrigo.', correct: ['Quítate el abrigo.', 'Quítate el abrigo'] },
        { id: 'q5', prompt: '', audio: '¿Dónde están vuestras cosas?', correct: ['¿Dónde están vuestras cosas?', '¿Dónde están vuestras cosas'] },
      ],
    },
  ],
};
