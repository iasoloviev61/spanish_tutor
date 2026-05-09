// ============================================================
// Unidad 53 — Verbos con me, te, se… (1)
// Возвратные (местоименные) глаголы: спряжение в presente,
// регулярные и иррегулярные модели, базовое употребление.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u53 = {
  id: 'u53',
  number: 53,
  title: { es: 'me levanto', topic: 'Verbos con me, te, se… (1)' },
  topicRu: 'Возвратные глаголы: спряжение и употребление',

  theory: [
    {
      type: 'rule',
      es: 'Los <strong>verbos pronominales</strong> llevan los pronombres <em>me, te, se, nos, os, se</em> delante de la forma conjugada.',
      ru: 'Возвратные глаголы (в инфинитиве — <em>levantarse, vestirse, dormirse</em>) спрягаются как обычные, но к каждой форме добавляется свой <strong>возвратный местоимённый</strong>: <em>me, te, se, nos, os, se</em>.',
      examples: [
        { es: 'Yo me levanto a las siete.', ru: 'Я встаю в семь.' },
        { es: 'Tú te atreves a todo.', ru: 'Ты решаешься на всё.' },
        { es: 'Ana se aburre en clase.', ru: 'Ана скучает на занятии.' },
        { es: 'Nosotros nos vestimos rápido.', ru: 'Мы одеваемся быстро.' },
      ],
    },
    {
      type: 'heading',
      text: 'Регулярные модели',
    },
    {
      type: 'table',
      caption: 'Спряжение в presente',
      columns: ['', '−ar (levantarse)', '−er (atreverse)', '−ir (aburrirse)'],
      colClasses: ['col-pattern', 'col-ex', 'col-ex', 'col-ex'],
      rows: [
        ['(yo)',           'me levanto',     'me atrevo',    'me aburro'],
        ['(tú)',           'te levantas',    'te atreves',   'te aburres'],
        ['(usted, él, ella)', 'se levanta',  'se atreve',    'se aburre'],
        ['(nosotros, −as)', 'nos levantamos','nos atrevemos','nos aburrimos'],
        ['(vosotros, −as)', 'os levantáis', 'os atrevéis',  'os aburrís'],
        ['(ustedes, ellos, ellas)', 'se levantan', 'se atreven', 'se aburren'],
      ],
    },
    {
      type: 'heading',
      text: 'Иррегулярные модели',
    },
    {
      type: 'table',
      caption: 'Чередование основы',
      columns: ['Тип', 'Глагол', 'Пример (yo / nosotros)'],
      colClasses: ['col-pattern', 'col-pattern', 'col-ex'],
      rows: [
        ['<strong>e → ie</strong>', '<em>divertirse</em>', '<em>me divierto / nos divertimos</em>'],
        ['(те же)',  '<em>despertarse, defenderse, arrepentirse</em>', '<em>me despierto / nos despertamos</em>'],
        ['<strong>e → i</strong>',  '<em>vestirse</em>',  '<em>me visto / nos vestimos</em>'],
        ['<strong>o → ue</strong>', '<em>acostarse</em>', '<em>me acuesto / nos acostamos</em>'],
        ['(те же)', '<em>dormirse</em>',  '<em>me duermo / nos dormimos</em>'],
        ['<strong>−go в 1 л.</strong>', '<em>ponerse</em>', '<em>me pongo / nos ponemos</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'Algunos verbos con <em>se</em> indican que la <strong>acción recae sobre la misma persona</strong> que la realiza, o sobre <strong>una parte de su cuerpo o ropa</strong>.',
      ru: 'Местоимение <em>se</em> сигнализирует, что действие направлено на самого деятеля или на <strong>часть его тела / его одежду</strong>. По-русски часто переводится возвратной формой («моюсь», «одеваюсь») или притяжательным («мою себе руки» = «мою руки»).',
      examples: [
        { es: 'Luis se lava, se afeita y luego se viste.', ru: 'Луис моется, бреется, потом одевается.' },
        { es: 'Siempre me lavo la cara con agua fría.', ru: 'Я всегда умываюсь холодной водой.' },
        { es: 'Laura se pinta las uñas.', ru: 'Лаура красит себе ногти.' },
        { es: 'Luis se plancha sus camisas.', ru: 'Луис гладит свои рубашки.' },
      ],
    },
    {
      type: 'atencion',
      es: 'Cuando hablamos de partes del cuerpo o de ropa <em>propia</em>, el español usa el <strong>artículo definido</strong>, no el posesivo: <em>Me lavo <strong>las</strong> manos</em> (no «mis manos»). El pronombre <em>me / te / se</em> ya indica de quién son.',
      ru: 'При действии на свою часть тела или одежду используется <strong>определённый артикль</strong>, а не «мой»: <em>me lavo las manos</em>, а не <em>mis manos</em>. Возвратное местоимение само показывает чьё.',
    },
  ],

  exercises: [
    {
      id: '53.1',
      title: 'Спряжение levantarse',
      type: 'fill',
      instructions: 'Поставьте <em>levantarse</em> в нужную форму настоящего времени. Записывайте местоимение и глагол через пробел.',
      questions: [
        { id: 'q1', prompt: '(yo) ___ a las siete.',          correct: 'me levanto', placeholder: 'me levanto' },
        { id: 'q2', prompt: '(tú) ___ tarde los domingos.',     correct: 'te levantas' },
        { id: 'q3', prompt: 'Marta ___ a las ocho.',             correct: 'se levanta' },
        { id: 'q4', prompt: '(nosotros) ___ temprano.',           correct: 'nos levantamos' },
        { id: 'q5', prompt: '(vosotros) ___ a las nueve.',        correct: 'os levantáis' },
        { id: 'q6', prompt: 'Mis hermanos ___ los primeros.',     correct: 'se levantan' },
      ],
    },

    {
      id: '53.2',
      title: 'Спряжение divertirse и acostarse',
      type: 'fill',
      instructions: 'Учтите чередования <em>e → ie</em> (divertirse) и <em>o → ue</em> (acostarse). В формах nosotros/vosotros чередования нет.',
      questions: [
        { id: 'q1', prompt: '(yo) ___ mucho en las fiestas. (divertirse)',  correct: 'me divierto' },
        { id: 'q2', prompt: 'Pedro siempre ___ con Juan. (divertirse)',      correct: 'se divierte' },
        { id: 'q3', prompt: '(nosotros) no ___ en clase. (divertirse)',       correct: 'nos divertimos' },
        { id: 'q4', prompt: '(yo) ___ a las once. (acostarse)',                 correct: 'me acuesto' },
        { id: 'q5', prompt: '(tú) ___ muy tarde. (acostarse)',                   correct: 'te acuestas' },
        { id: 'q6', prompt: 'Los niños ___ a las nueve. (acostarse)',             correct: 'se acuestan' },
        { id: 'q7', prompt: '(nosotros) ___ tarde los sábados. (acostarse)',       correct: 'nos acostamos' },
        { id: 'q8', prompt: '(vosotros) ___ pronto. (acostarse)',                  correct: 'os acostáis' },
      ],
    },

    {
      id: '53.3',
      title: 'Утренний распорядок',
      type: 'fill',
      instructions: 'Поставьте подходящий глагол в нужное лицо настоящего времени: <em>despertarse, levantarse, ducharse, vestirse, ponerse, peinarse</em>.',
      questions: [
        { id: 'q1', prompt: 'Arturo ___ a las ocho. (despertarse)',                correct: 'se despierta' },
        { id: 'q2', prompt: 'Merche y Ernesto ___ a las ocho y media. (levantarse)', correct: 'se levantan' },
        { id: 'q3', prompt: 'Jaime ___ todas las mañanas. (ducharse)',              correct: 'se ducha' },
        { id: 'q4', prompt: 'Después de ducharse, Jaime ___. (vestirse)',           correct: 'se viste' },
        { id: 'q5', prompt: '(yo) ___ los zapatos en la entrada. (ponerse)',         correct: 'me pongo' },
        { id: 'q6', prompt: 'Mi hermana ___ delante del espejo. (peinarse)',          correct: 'se peina' },
        { id: 'q7', prompt: 'Merche y Ernesto ___ a las once y media. (acostarse)',    correct: 'se acuestan' },
      ],
    },

    {
      id: '53.4',
      title: 'me, te, se, nos, os, se',
      type: 'choice',
      instructions: 'Выберите правильное местоимение.',
      questions: [
        { id: 'q1', prompt: '(yo) ___ levanto pronto.',          options: ['me', 'te', 'se'], correct: 'me' },
        { id: 'q2', prompt: '(tú) ___ duermes en clase.',          options: ['me', 'te', 'se'], correct: 'te' },
        { id: 'q3', prompt: 'Ana ___ viste de negro.',              options: ['me', 'te', 'se'], correct: 'se' },
        { id: 'q4', prompt: '(nosotros) ___ acostamos tarde.',      options: ['me', 'nos', 'os'], correct: 'nos' },
        { id: 'q5', prompt: '(vosotros) ___ aburrís en casa.',      options: ['nos', 'os', 'se'], correct: 'os' },
        { id: 'q6', prompt: 'Mis padres ___ despiertan a las seis.', options: ['me', 'os', 'se'], correct: 'se' },
        { id: 'q7', prompt: 'Usted ___ ducha por la mañana, ¿no?',   options: ['te', 'se', 'os'], correct: 'se' },
      ],
    },

    {
      id: '53.5',
      title: 'Часть тела или одежда',
      type: 'fill',
      instructions: 'Помните: при действии на свою часть тела или одежду — <strong>определённый артикль</strong> (не «mi/tu/su»).',
      questions: [
        { id: 'q1', prompt: '(yo) Me lavo ___ manos antes de comer.',         correct: 'las' },
        { id: 'q2', prompt: 'Laura se pinta ___ uñas de rojo.',                  correct: 'las' },
        { id: 'q3', prompt: '(tú) Te peinas ___ pelo cada cinco minutos.',        correct: 'el' },
        { id: 'q4', prompt: '(nosotros) Nos limpiamos ___ dientes después de comer.', correct: 'los' },
        { id: 'q5', prompt: '(yo) Me pongo ___ chaqueta porque hace frío.',         correct: 'la' },
        { id: 'q6', prompt: 'Los niños se manchan ___ ropa.',                        correct: 'la' },
      ],
    },

    {
      id: '53.6',
      title: 'Утвердительная или отрицательная форма?',
      type: 'fill',
      instructions: 'Поставьте подходящий глагол с <em>se</em> в нужную форму. Отрицание добавляйте через <em>no</em> перед местоимением.',
      questions: [
        { id: 'q1', prompt: 'Javi ___ con un jabón especial. (lavarse)', correct: 'se lava' },
        { id: 'q2', prompt: '(yo) ___ traje para ir a trabajar. (ponerse)', correct: 'me pongo' },
        { id: 'q3', prompt: 'José todavía no ___. No tiene barba. (afeitarse)', correct: 'se afeita' },
        { id: 'q4', prompt: 'Ángel y yo ___ mucho en las fiestas. (divertirse)', correct: 'nos divertimos' },
        { id: 'q5', prompt: 'Pepe es muy sucio. ___ mucho la ropa. (mancharse)', correct: 'Se mancha', placeholder: 'Se mancha' },
        { id: 'q6', prompt: 'Alberto es muy tímido. No ___ a hablar con Sarita. (atreverse)', correct: 'se atreve' },
        { id: 'q7', prompt: 'A Iván no le gusta el cine; ___ mucho cuando va. (aburrirse)', correct: 'se aburre' },
        { id: 'q8', prompt: 'Mi hermana y yo ___ el pelo todos los días. (lavarse)', correct: 'nos lavamos' },
      ],
    },

    {
      id: '53.7',
      title: 'Вопрос-ответ',
      type: 'fill',
      instructions: 'Заполните глаголом в нужной форме.',
      questions: [
        { id: 'q1', prompt: '—¿A qué hora (tú, levantarse) ___? —Me levanto a las siete.', correct: 'te levantas' },
        { id: 'q2', prompt: '—¿(tú, ponerse) ___ pijama para dormir? —No, me pongo camisón.', correct: 'Te pones', placeholder: 'Te pones' },
        { id: 'q3', prompt: '—¿(vosotros, bañarse) ___ en el mar? —Sí, todos los veranos.', correct: 'Os bañáis' },
        { id: 'q4', prompt: '—¿Con qué (afeitarse, usted) ___? —Me afeito con maquinilla eléctrica.', correct: 'se afeita' },
        { id: 'q5', prompt: '—¿(usted, vestirse) ___ antes o después de desayunar?', correct: 'Se viste' },
        { id: 'q6', prompt: '—¿A qué hora (ustedes, acostarse) ___? —Nos acostamos sobre las once.', correct: 'se acuestan' },
        { id: 'q7', prompt: '—¿(tú, dormirse) ___ rápido? —Sí, en cinco minutos.', correct: 'Te duermes' },
      ],
    },

    {
      id: '53.8',
      title: 'Найдите правильную форму',
      type: 'choice',
      instructions: 'Выберите верный вариант (учтите чередование основы).',
      questions: [
        { id: 'q1', prompt: 'Yo ___ a las once. (acostarse)', options: ['me acosto', 'me acuesto', 'me acuestos'], correct: 'me acuesto' },
        { id: 'q2', prompt: 'Carlos ___ con la película. (divertirse)', options: ['se divierte', 'se diverte', 'se diviertes'], correct: 'se divierte' },
        { id: 'q3', prompt: 'Nosotros ___ en pijama. (vestirse)', options: ['nos vistemos', 'nos vestimos', 'nos vestomos'], correct: 'nos vestimos', explanation: 'В nosotros чередования нет: <em>nos vestimos</em>.' },
        { id: 'q4', prompt: 'Yo ___ los zapatos. (ponerse)', options: ['me pono', 'me pongo', 'me poneo'], correct: 'me pongo' },
        { id: 'q5', prompt: 'Vosotros ___ a las seis. (despertarse)', options: ['os despertáis', 'os despiertáis', 'os despierto'], correct: 'os despertáis' },
        { id: 'q6', prompt: 'Los niños ___ rápido. (dormirse)', options: ['se dormen', 'se duermen', 'se duermon'], correct: 'se duermen' },
      ],
    },

    {
      id: '53.9',
      title: 'Какие глаголы возвратные',
      type: 'multi',
      instructions: 'Отметьте все глаголы, в которых при подобном значении в испанском <strong>обязательно</strong> ставится <em>se</em> (на себя или часть тела).',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие из этих глаголов используются в возвратной форме, когда речь идёт о <em>себе самом</em>?',
          options: ['levantar (себя из кровати)', 'lavar (свои руки)', 'peinar (свои волосы)', 'comer (хлеб)', 'vestir (себя)', 'leer (книгу)', 'acostar (себя)', 'pintar (свои ногти)'],
          correct: ['levantar (себя из кровати)', 'lavar (свои руки)', 'peinar (свои волосы)', 'vestir (себя)', 'acostar (себя)', 'pintar (свои ногти)'],
          explanation: '<em>comer</em> и <em>leer</em> не действуют на самого деятеля.',
        },
      ],
    },

    {
      id: '53.10',
      title: 'Сопоставьте инфинитив и форму yo',
      type: 'match',
      instructions: 'Подберите для каждого инфинитива форму первого лица единственного числа.',
      pool: ['me levanto', 'me visto', 'me acuesto', 'me divierto', 'me pongo', 'me duermo', 'me despierto', 'me afeito'],
      questions: [
        { id: 'q1', prompt: 'levantarse', correct: 'me levanto' },
        { id: 'q2', prompt: 'vestirse',    correct: 'me visto' },
        { id: 'q3', prompt: 'acostarse',   correct: 'me acuesto' },
        { id: 'q4', prompt: 'divertirse',  correct: 'me divierto' },
        { id: 'q5', prompt: 'ponerse',     correct: 'me pongo' },
        { id: 'q6', prompt: 'dormirse',    correct: 'me duermo' },
        { id: 'q7', prompt: 'despertarse', correct: 'me despierto' },
        { id: 'q8', prompt: 'afeitarse',   correct: 'me afeito' },
      ],
    },

    {
      id: '53.11',
      title: 'Аудио: запишите фразу',
      type: 'fill',
      instructions: 'Запишите услышанное полностью.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Me levanto a las siete.',     correct: ['Me levanto a las siete.', 'Me levanto a las siete'] },
        { id: 'q2', prompt: '', audio: 'Ana se viste de negro.',       correct: ['Ana se viste de negro.', 'Ana se viste de negro'] },
        { id: 'q3', prompt: '', audio: 'Nos acostamos muy tarde.',      correct: ['Nos acostamos muy tarde.', 'Nos acostamos muy tarde'] },
        { id: 'q4', prompt: '', audio: 'Me lavo las manos.',             correct: ['Me lavo las manos.', 'Me lavo las manos'] },
        { id: 'q5', prompt: '', audio: 'Laura se pinta las uñas.',        correct: ['Laura se pinta las uñas.', 'Laura se pinta las uñas'] },
        { id: 'q6', prompt: '', audio: 'Me pongo el abrigo.',              correct: ['Me pongo el abrigo.', 'Me pongo el abrigo'] },
      ],
    },

    {
      id: '53.12',
      title: 'Утром в семье Гарсии',
      type: 'fill',
      instructions: 'Заполните пропуски подходящим возвратным глаголом в нужной форме настоящего времени.',
      questions: [
        { id: 'q1', prompt: 'Mi padre (despertarse) ___ a las seis.',                  correct: 'se despierta' },
        { id: 'q2', prompt: 'Yo (levantarse) ___ a las siete y media.',                  correct: 'me levanto' },
        { id: 'q3', prompt: 'Mi hermano y yo (ducharse) ___ rápidamente.',                correct: 'nos duchamos' },
        { id: 'q4', prompt: 'Mi madre (vestirse) ___ con un traje azul.',                  correct: 'se viste' },
        { id: 'q5', prompt: 'Yo (ponerse) ___ los vaqueros y una camiseta.',                correct: 'me pongo' },
        { id: 'q6', prompt: 'Después todos (lavarse) ___ los dientes.',                      correct: 'se lavan' },
        { id: 'q7', prompt: 'Por la noche, los niños (acostarse) ___ a las nueve.',            correct: 'se acuestan' },
        { id: 'q8', prompt: 'Y yo (dormirse) ___ casi inmediatamente.',                          correct: 'me duermo' },
      ],
    },
  ],
};
