// ============================================================
// Unidad 83 — Pretérito imperfecto de subjuntivo: verbos irregulares
// fuera, tuviera, supiera… Корень берётся из формы 3 л. мн. ч.
// pretérito indefinido (минус −ron) + окончания −ra / −se.
// ============================================================
window.TEXTBOOK = window.TEXTBOOK || {};
window.TEXTBOOK.u83 = {
  id: 'u83',
  number: 83,
  title: { es: 'fuera, tuviera…', topic: 'Pretérito imperfecto de subjuntivo: verbos irregulares' },
  topicRu: 'Имперфект субхунтива: неправильные глаголы',

  // ---------------------------- ТЕОРИЯ ----------------------------
  theory: [
    {
      type: 'rule',
      es: 'En todos los verbos —regulares e irregulares— el imperfecto de subjuntivo se forma a partir de la <strong>3.ª persona del plural del pretérito indefinido</strong>: se quita la terminación <em>−ron</em> y se añaden las terminaciones <em>−ra / −se</em>. Por eso las irregularidades del indefinido <strong>se mantienen</strong> aquí.',
      ru: 'Любой имперфект субхунтива — и у регулярных, и у нерегулярных глаголов — образуется от <strong>формы 3 л. мн. ч. pretérito indefinido</strong>: отбрасываем окончание <em>−ron</em> и добавляем <em>−ra / −se</em>. Поэтому все «неправильности» индефинидо <strong>автоматически переносятся</strong> и сюда: <em>tuvieron → tuviera, tuviese</em>; <em>fueron → fuera, fuese</em>; <em>dijeron → dijera, dijese</em>.',
      examples: [
        { es: 'Cuando era pequeña, mis padres querían que (yo) fuera pianista.', ru: 'Когда я была маленькой, родители хотели, чтобы я была пианисткой.' },
        { es: 'Era lógico que (él) estuviera triste. Se había ido Hugo.', ru: 'Логично было, что он был грустный. Уехал Хуго.' },
        { es: 'Puede que Juan supiera que había examen, pero no dijo nada.', ru: 'Может быть, Хуан знал, что будет экзамен, но ничего не сказал.' },
      ],
    },

    {
      type: 'heading',
      text: 'Глаголы с чередованием в корне',
    },
    {
      type: 'table',
      caption: 'pedir (e→i) и dormir (o→u)',
      columns: ['', 'pedir (→ pidiera)', 'dormir (→ durmiera)'],
      colClasses: ['col-pattern', 'col-result', 'col-result'],
      rows: [
        ['<strong>yo</strong>',          '<em>pidiera, −iese</em>',     '<em>durmiera, −iese</em>'],
        ['<strong>tú</strong>',          '<em>pidieras, −ieses</em>',    '<em>durmieras, −ieses</em>'],
        ['<strong>usted, él</strong>',    '<em>pidiera, −iese</em>',     '<em>durmiera, −iese</em>'],
        ['<strong>nosotros</strong>',    '<em>pidiéramos, −iésemos</em>', '<em>durmiéramos, −iésemos</em>'],
        ['<strong>vosotros</strong>',    '<em>pidierais, −ieseis</em>',   '<em>durmierais, −ieseis</em>'],
        ['<strong>ustedes, ellos</strong>', '<em>pidieran, −iesen</em>',    '<em>durmieran, −iesen</em>'],
      ],
    },
    {
      type: 'rule',
      es: 'Como <em>pedir</em> (e→i): <em>elegir, sentir, preferir, mentir, divertir, conseguir, seguir, servir</em>. Como <em>dormir</em> (o→u): <em>morir</em>.',
      ru: 'Как <em>pedir</em> (с <em>e→i</em>) ведут себя <em>elegir, sentir, preferir, mentir, divertir, conseguir, seguir, servir</em>. Как <em>dormir</em> (с <em>o→u</em>) ведут себя <em>morir</em> и его производные.',
    },

    {
      type: 'heading',
      text: 'Глаголы с «крепким» корнем',
    },
    {
      type: 'table',
      caption: 'Корень имперфекта субхунтива',
      columns: ['Инфинитив', '3 л. мн. ч. indef.', 'Имперфект субхунтива (yo)'],
      colClasses: ['col-pattern', 'col-result', 'col-ex'],
      rows: [
        ['<em>dar</em>',     '<em>dieron</em>',      '<em>diera / diese</em>'],
        ['<em>estar</em>',   '<em>estuvieron</em>',  '<em>estuviera / estuviese</em>'],
        ['<em>haber</em>',   '<em>hubieron</em>',    '<em>hubiera / hubiese</em>'],
        ['<em>hacer</em>',   '<em>hicieron</em>',     '<em>hiciera / hiciese</em>'],
        ['<em>poder</em>',   '<em>pudieron</em>',     '<em>pudiera / pudiese</em>'],
        ['<em>poner</em>',   '<em>pusieron</em>',     '<em>pusiera / pusiese</em>'],
        ['<em>querer</em>',  '<em>quisieron</em>',    '<em>quisiera / quisiese</em>'],
        ['<em>saber</em>',   '<em>supieron</em>',     '<em>supiera / supiese</em>'],
        ['<em>tener</em>',   '<em>tuvieron</em>',     '<em>tuviera / tuviese</em>'],
        ['<em>venir</em>',   '<em>vinieron</em>',     '<em>viniera / viniese</em>'],
      ],
    },

    {
      type: 'heading',
      text: 'Группа на −y− и группа на −j−',
    },
    {
      type: 'table',
      caption: 'caer / leer / oír / huir и decir / traer / traducir',
      columns: ['Инфинитив', '3 л. мн. ч. indef.', 'Имперфект субхунтива (yo)'],
      colClasses: ['col-pattern', 'col-result', 'col-ex'],
      rows: [
        ['<em>caer(se)</em>',  '<em>cayeron</em>',     '<em>cayera, −era</em>'],
        ['<em>leer</em>',       '<em>leyeron</em>',     '<em>leyera, −era</em>'],
        ['<em>oír</em>',         '<em>oyeron</em>',      '<em>oyera, −era</em>'],
        ['<em>huir</em>',        '<em>huyeron</em>',     '<em>huyera, −era</em>'],
        ['<em>traducir</em>',     '<em>tradujeron</em>',  '<em>tradujera, −era</em>'],
        ['<em>traer</em>',         '<em>trajeron</em>',    '<em>trajera, −era</em>'],
        ['<em>decir</em>',          '<em>dijeron</em>',     '<em>dijera, −era</em>'],
        ['<em>ir / ser</em>',         '<em>fueron</em>',      '<em>fuera, −ese</em>'],
        ['<em>reír / sonreír</em>', '<em>rieron / sonrieron</em>', '<em>riera / sonriera</em>'],
      ],
    },
    {
      type: 'atencion',
      es: 'Tras <strong>−j</strong> (en <em>dijera, trajera, tradujera, condujera</em>) y tras <strong>vocal</strong> en <em>fuera, riera</em>, <strong>desaparece la <em>i</em></strong> de las terminaciones <em>−iera / −iese</em>: <em>dij−era</em>, no <em>dij−iera</em>; <em>fu−era</em>, no <em>fu−iera</em>.',
      ru: 'Важно: после <strong>−j</strong> (<em>dijera, trajera, tradujera, condujera</em>) и после <strong>гласной</strong> (<em>fuera, riera, sonriera</em>) <strong>исчезает <em>i</em></strong> из окончаний <em>−iera / −iese</em>: правильно <em>dijera</em>, а не <em>dijiera</em>; правильно <em>fuera</em>, а не <em>fuiera</em>.',
    },
    {
      type: 'rule',
      es: '<em>ir</em> y <em>ser</em> tienen <strong>la misma forma</strong> en imperfecto de subjuntivo: <em>fuera / fuese</em>. Solo el contexto distingue uno de otro.',
      ru: 'У <em>ir</em> и <em>ser</em> формы имперфекта субхунтива <strong>совпадают полностью</strong>: <em>fuera / fuese</em>. Различить можно только по контексту: <em>Mis padres querían que yo fuera pianista</em> (= <em>ser</em> «была пианисткой»); <em>Querían que (yo) fuera al médico</em> (= <em>ir</em> «пошла к врачу»).',
    },

    {
      type: 'heading',
      text: 'Где использовать (повтор)',
    },
    {
      type: 'rule',
      es: 'Los usos son los mismos que en la unidad anterior: <strong>exclamaciones con <em>¡quién…!</em></strong>, voluntad, sentimiento, valoración o probabilidad después de un verbo principal en pasado o en condicional.',
      ru: 'Контексты — те же, что в Unidad 82: <strong>восклицания <em>¡Quién…!</em></strong>, выражение воли, чувств, оценки или вероятности после главного глагола в прошедшем времени или кондиционале.',
      examples: [
        { es: '¡Quién pudiera nadar como tú!', ru: 'Вот бы плавать, как ты!' },
        { es: '¡Quién tuviera treinta años menos!', ru: 'Эх, мне бы скинуть тридцать лет!' },
        { es: 'Me extrañó que no vinieras a mi fiesta.', ru: 'Меня удивило, что ты не пришёл ко мне на праздник.' },
        { es: 'Era lógico que estuviera triste.', ru: 'Логично, что он был грустный.' },
      ],
    },
  ],

  // ---------------------------- УПРАЖНЕНИЯ ----------------------------
  exercises: [
    {
      id: '83.1',
      title: 'От 3 л. мн. ч. индефинидо — к субхунтиву',
      type: 'fill',
      instructions: 'Дано форма 3 л. мн. ч. pretérito indefinido. Образуйте форму <em>yo</em> имперфекта субхунтива (на <em>−ra</em>).',
      questions: [
        { id: 'q1',  prompt: '<em>tuvieron</em> →',     correct: 'tuviera' },
        { id: 'q2',  prompt: '<em>fueron</em> →',        correct: 'fuera' },
        { id: 'q3',  prompt: '<em>pudieron</em> →',      correct: 'pudiera' },
        { id: 'q4',  prompt: '<em>quisieron</em> →',     correct: 'quisiera' },
        { id: 'q5',  prompt: '<em>supieron</em> →',      correct: 'supiera' },
        { id: 'q6',  prompt: '<em>hicieron</em> →',      correct: 'hiciera' },
        { id: 'q7',  prompt: '<em>vinieron</em> →',      correct: 'viniera' },
        { id: 'q8',  prompt: '<em>estuvieron</em> →',    correct: 'estuviera' },
        { id: 'q9',  prompt: '<em>dieron</em> →',        correct: 'diera' },
        { id: 'q10', prompt: '<em>dijeron</em> →',       correct: 'dijera', explanation: 'После <em>−j</em> теряется <em>i</em>: <em>dijera</em>, не <em>dijiera</em>.' },
        { id: 'q11', prompt: '<em>trajeron</em> →',      correct: 'trajera' },
        { id: 'q12', prompt: '<em>cayeron</em> →',       correct: 'cayera' },
        { id: 'q13', prompt: '<em>leyeron</em> →',       correct: 'leyera' },
        { id: 'q14', prompt: '<em>pidieron</em> →',      correct: 'pidiera' },
        { id: 'q15', prompt: '<em>durmieron</em> →',     correct: 'durmiera' },
      ],
    },

    {
      id: '83.2',
      title: 'tú: ставим в субхунтиве',
      type: 'fill',
      instructions: 'Поставьте глагол в форме <em>tú</em> имперфекта субхунтива.',
      questions: [
        { id: 'q1', prompt: '(<em>tener</em>) Era lógico que ___ frío después de aquel paseo.',          correct: ['tuvieras', 'tuvieses'] },
        { id: 'q2', prompt: '(<em>venir</em>) Me extrañó que no ___ a mi fiesta.',                        correct: ['vinieras', 'vinieses'] },
        { id: 'q3', prompt: '(<em>hacer</em>) Mis padres querían que ___ los deberes antes de cenar.',     correct: ['hicieras', 'hicieses'] },
        { id: 'q4', prompt: '(<em>ser</em>) ¡Quién ___ más alto!',                                          correct: ['fueras', 'fueses'] },
        { id: 'q5', prompt: '(<em>poder</em>) Sería bonito que (tú) ___ acompañarme.',                       correct: ['pudieras', 'pudieses'] },
        { id: 'q6', prompt: '(<em>saber</em>) Me gustaría que ___ la verdad.',                                correct: ['supieras', 'supieses'] },
        { id: 'q7', prompt: '(<em>decir</em>) Esperaba que (tú) me ___ algo.',                                 correct: ['dijeras', 'dijeses'] },
        { id: 'q8', prompt: '(<em>traer</em>) Quería que (tú) ___ el postre.',                                  correct: ['trajeras', 'trajeses'] },
      ],
    },

    {
      id: '83.3',
      title: 'él / ella / usted',
      type: 'fill',
      instructions: 'Поставьте в форме 3 л. ед. ч.',
      questions: [
        { id: 'q1', prompt: '(<em>tener</em>) Era natural que ella no ___ ganas de salir.',           correct: 'tuviera' },
        { id: 'q2', prompt: '(<em>ir</em>) Era extraño que Hugo no ___ al médico.',                    correct: 'fuera' },
        { id: 'q3', prompt: '(<em>poder</em>) Era imposible que (él) ___ ayudarte aquel día.',          correct: 'pudiera' },
        { id: 'q4', prompt: '(<em>saber</em>) Puede que Juan ___ que había examen.',                     correct: 'supiera' },
        { id: 'q5', prompt: '(<em>estar</em>) Era lógico que (él) ___ cansado.',                           correct: 'estuviera' },
        { id: 'q6', prompt: '(<em>decir</em>) No me gustó que (él) ___ esas cosas.',                       correct: 'dijera' },
        { id: 'q7', prompt: '(<em>dormir</em>) Era natural que mi hijo ___ poco esa noche.',                correct: 'durmiera' },
        { id: 'q8', prompt: '(<em>caerse</em>) Era imposible que ___, llevaba arnés.',                       correct: 'se cayera' },
      ],
    },

    {
      id: '83.4',
      title: 'nosotros / vosotros: тильда обязательна',
      type: 'fill',
      instructions: 'Поставьте в указанном лице. В <em>nosotros</em> — обязательная тильда.',
      questions: [
        { id: 'q1', prompt: '(<em>tener</em>, nosotros) Era lógico que ___ hambre.',                       correct: 'tuviéramos' },
        { id: 'q2', prompt: '(<em>poder</em>, nosotros) Sería mejor que ___ hablar a solas.',                correct: 'pudiéramos' },
        { id: 'q3', prompt: '(<em>ir</em>, nosotros) Mis padres querían que ___ a la playa.',                  correct: 'fuéramos' },
        { id: 'q4', prompt: '(<em>hacer</em>, nosotros) El profesor quería que ___ una redacción.',             correct: 'hiciéramos' },
        { id: 'q5', prompt: '(<em>venir</em>, vosotros) Me encantaría que (vosotros) ___ a casa.',                correct: 'vinierais' },
        { id: 'q6', prompt: '(<em>decir</em>, vosotros) No me gustó que (vosotros) ___ aquello.',                  correct: 'dijerais' },
        { id: 'q7', prompt: '(<em>dormir</em>, nosotros) Era necesario que ___ ocho horas.',                        correct: 'durmiéramos' },
      ],
    },

    {
      id: '83.5',
      title: 'ellos / ellas / ustedes',
      type: 'fill',
      instructions: 'Поставьте в форме 3 л. мн. ч.',
      questions: [
        { id: 'q1', prompt: '(<em>caerse</em>) Era imposible que las maletas ___. Estaban bien sujetas.',      correct: 'se cayeran' },
        { id: 'q2', prompt: '(<em>ser</em>) Sería bonito que tus padres ___ aquí esta semana.',                  correct: 'fueran' },
        { id: 'q3', prompt: '(<em>tener</em>) Era extraño que (ellos) no ___ noticias todavía.',                  correct: 'tuvieran' },
        { id: 'q4', prompt: '(<em>poder</em>) Esperaba que (ustedes) ___ venir.',                                  correct: 'pudieran' },
        { id: 'q5', prompt: '(<em>traer</em>) Era lógico que mis amigos ___ algún regalo.',                         correct: 'trajeran' },
        { id: 'q6', prompt: '(<em>querer</em>) Me extrañó que (ellos) no ___ ir a la fiesta.',                        correct: 'quisieran' },
        { id: 'q7', prompt: '(<em>decir</em>) Era natural que los niños no ___ nada delante de él.',                    correct: 'dijeran' },
      ],
    },

    {
      id: '83.6',
      title: 'Какая форма?',
      type: 'choice',
      instructions: 'Выберите правильный вариант имперфекта субхунтива.',
      questions: [
        { id: 'q1', prompt: 'Era lógico que (él) ___ triste.',          options: ['estaba', 'estuviera', 'estaría', 'esté'],          correct: 'estuviera' },
        { id: 'q2', prompt: 'Mis padres querían que (yo) ___ pianista.', options: ['fui', 'fuera', 'sería', 'fuese no'],              correct: 'fuera' },
        { id: 'q3', prompt: 'Era imposible que ___ ayudarte (él).',       options: ['puede', 'podría', 'pudiera', 'pude'],              correct: 'pudiera' },
        { id: 'q4', prompt: 'Me extrañó que no ___ a mi fiesta (tú).',     options: ['vienes', 'viniste', 'vinieras', 'vendrías'],       correct: 'vinieras' },
        { id: 'q5', prompt: 'Puede que Juan ___ algo de eso.',              options: ['sabe', 'supiera', 'sabría', 'sabía'],              correct: 'supiera' },
        { id: 'q6', prompt: 'Era natural que (yo) le ___ las gracias.',     options: ['di', 'daría', 'diera', 'doy'],                    correct: 'diera' },
        { id: 'q7', prompt: '¡Quién ___ treinta años menos!',                options: ['tuviera', 'tuvo', 'tendría', 'tiene'],            correct: 'tuviera' },
        { id: 'q8', prompt: 'Sería mejor que (tú) ___ la verdad.',            options: ['dices', 'dijiste', 'dijeras', 'dirías'],          correct: 'dijeras' },
      ],
    },

    {
      id: '83.7',
      title: '¿Qué diría? — ¡Quién…!',
      type: 'fill',
      instructions: 'Перефразируйте через <em>¡Quién + impf. de subj.!</em>',
      questions: [
        { id: 'q1', prompt: 'A alguien le gustaría ser más alto. → ¡Quién ___ más alto!',                               correct: 'fuera' },
        { id: 'q2', prompt: 'A alguien le gustaría poder vivir en Guatemala. → ¡Quién ___ vivir en Guatemala!',          correct: 'pudiera' },
        { id: 'q3', prompt: 'A alguien le gustaría saber hablar chino. → ¡Quién ___ hablar chino!',                       correct: 'supiera' },
        { id: 'q4', prompt: 'A alguien le gustaría tener tanta suerte como un amigo. → ¡Quién ___ tanta suerte!',          correct: 'tuviera' },
        { id: 'q5', prompt: 'A alguien le gustaría estar ahora de vacaciones. → ¡Quién ___ ahora de vacaciones!',           correct: 'estuviera' },
        { id: 'q6', prompt: 'A alguien le gustaría conducir un coche de carreras. → ¡Quién ___ un coche de carreras!',       correct: 'condujera' },
        { id: 'q7', prompt: 'A alguien le gustaría sonreír siempre. → ¡Quién ___ siempre!',                                   correct: 'sonriera' },
      ],
    },

    {
      id: '83.8',
      title: 'Соедините через que',
      type: 'fill',
      instructions: 'Образец: <em>No vinisteis a la fiesta. Me extrañó.</em> → <em>Me extrañó que no vinierais a la fiesta.</em> Подставьте только глагол.',
      questions: [
        { id: 'q1', prompt: 'Nos hicieron una foto. No nos gustó. → No nos gustó que nos ___ una foto.',                  correct: 'hicieran' },
        { id: 'q2', prompt: 'Elegiste mi clase. Me alegré de ello. → Me alegré de que (tú) ___ mi clase.',                  correct: 'eligieras' },
        { id: 'q3', prompt: 'Rafa tuvo que irse. Lo sentimos. → Sentimos que Rafa ___ que irse.',                            correct: 'tuviera' },
        { id: 'q4', prompt: 'Raúl no vino a mi fiesta. No me importó. → No me importó que Raúl no ___ a mi fiesta.',          correct: 'viniera' },
        { id: 'q5', prompt: 'Gisele dijo que había mentido. Me molestó. → Me molestó que Gisele ___ que había mentido.',         correct: 'dijera' },
        { id: 'q6', prompt: 'Te reíste de Blas. Me pareció mal. → Me pareció mal que (tú) te ___ de Blas.',                       correct: 'rieras' },
        { id: 'q7', prompt: 'No me hiciste caso. No me gustó. → No me gustó que no me ___ caso.',                                  correct: 'hicieras' },
        { id: 'q8', prompt: 'Jesús y Luis durmieron ocho horas. Me extrañó. → Me extrañó que Jesús y Luis ___ ocho horas.',          correct: 'durmieran' },
        { id: 'q9', prompt: 'Tus hermanas no quisieron salir con nosotras. Me pareció lógico. → Me pareció lógico que tus hermanas no ___ salir con nosotras.', correct: 'quisieran' },
        { id: 'q10', prompt: 'Los niños nos dieron la bienvenida. Nos encantó. → Nos encantó que los niños nos ___ la bienvenida.',     correct: 'dieran' },
        { id: 'q11', prompt: 'Alberto hizo la cena. Nos extrañó. → Nos extrañó que Alberto ___ la cena.',                                correct: 'hiciera' },
      ],
    },

    {
      id: '83.9',
      title: 'Дополните по контексту',
      type: 'fill',
      instructions: 'Подставьте глагол из скобок в имперфекте субхунтива.',
      questions: [
        { id: 'q1', prompt: '(<em>haber</em>) Sería maravilloso que no ___ tanto trabajo. Podríamos ahorrar para un piso.',     correct: 'hubiera' },
        { id: 'q2', prompt: '(<em>traducir</em>) Me llamó la atención que le ___ el diccionario a Gabriel. No sois amigos.',     correct: 'tradujera' },
        { id: 'q3', prompt: '(<em>traer</em>) ¿Por qué habéis traído pasteles? No era necesario que ___ nada.',                    correct: 'trajerais' },
        { id: 'q4', prompt: '(<em>leer</em>) El profesor no quería que (nosotros) ___ las frases.',                                  correct: 'leyéramos' },
        { id: 'q5', prompt: '(<em>hacer</em>) Perdonen, pero preferiría que no ___ fuego aquí.',                                       correct: 'hicieran' },
        { id: 'q6', prompt: '(<em>poder</em>) Me encantaría que (tú) ___ pasar unos días conmigo.',                                     correct: 'pudieras' },
        { id: 'q7', prompt: '(<em>dar</em>) Josefina sintió que no te ___ el empleo a ti.',                                              correct: 'dieran' },
        { id: 'q8', prompt: '(<em>ser</em>) Mi padre esperaba que (yo) ___ abogado como él, pero yo no quise.',                            correct: 'fuera' },
        { id: 'q9', prompt: '(<em>leer</em>, ellos) Sería bueno que (ustedes) ___ más, niños. Leer es importante.',                          correct: 'leyeran' },
        { id: 'q10', prompt: '(<em>oír</em>) ¿Por qué no vinieron cuando los llamé? — Puede que no te ___.',                                  correct: 'oyeran' },
        { id: 'q11', prompt: '(<em>haber</em>) Me gustaría que ___ menos violencia en el mundo.',                                              correct: 'hubiera' },
      ],
    },

    {
      id: '83.10',
      title: 'Сопоставьте инфинитив и форму yo',
      type: 'match',
      instructions: 'Подберите для каждого инфинитива форму <em>yo</em> имперфекта субхунтива.',
      pool: ['fuera', 'tuviera', 'pudiera', 'supiera', 'hiciera', 'estuviera', 'viniera', 'quisiera', 'dijera', 'trajera', 'pidiera', 'durmiera', 'leyera', 'oyera'],
      questions: [
        { id: 'q1',  prompt: '<em>ser / ir</em>',  correct: 'fuera' },
        { id: 'q2',  prompt: '<em>tener</em>',     correct: 'tuviera' },
        { id: 'q3',  prompt: '<em>poder</em>',     correct: 'pudiera' },
        { id: 'q4',  prompt: '<em>saber</em>',     correct: 'supiera' },
        { id: 'q5',  prompt: '<em>hacer</em>',     correct: 'hiciera' },
        { id: 'q6',  prompt: '<em>estar</em>',     correct: 'estuviera' },
        { id: 'q7',  prompt: '<em>venir</em>',     correct: 'viniera' },
        { id: 'q8',  prompt: '<em>querer</em>',    correct: 'quisiera' },
        { id: 'q9',  prompt: '<em>decir</em>',     correct: 'dijera' },
        { id: 'q10', prompt: '<em>traer</em>',     correct: 'trajera' },
        { id: 'q11', prompt: '<em>pedir</em>',     correct: 'pidiera' },
        { id: 'q12', prompt: '<em>dormir</em>',    correct: 'durmiera' },
        { id: 'q13', prompt: '<em>leer</em>',      correct: 'leyera' },
        { id: 'q14', prompt: '<em>oír</em>',        correct: 'oyera' },
      ],
    },

    {
      id: '83.11',
      title: 'Какие формы корректны',
      type: 'multi',
      instructions: 'Отметьте все правильные формы имперфекта субхунтива.',
      questions: [
        {
          id: 'q1',
          prompt: 'Какие формы написаны правильно?',
          options: [
            'fuera', 'fuiera', 'fuera (ser)', 'fueras', 'fueramos', 'fuéramos',
            'tuviera', 'tuvieras', 'tuviéramos', 'tuvieramos',
            'pudiera', 'podiera', 'pudiéramos',
            'dijera', 'dijiera', 'dijeran',
            'trajera', 'trajiera', 'trajeran',
            'durmiera', 'durmieramos', 'durmiéramos',
            'pidiera', 'pidiéramos',
          ],
          correct: ['fuera', 'fuera (ser)', 'fueras', 'fuéramos', 'tuviera', 'tuvieras', 'tuviéramos', 'pudiera', 'pudiéramos', 'dijera', 'dijeran', 'trajera', 'trajeran', 'durmiera', 'durmiéramos', 'pidiera', 'pidiéramos'],
          explanation: 'После <em>−j</em> исчезает <em>i</em>: <em>dijera, trajera</em> — без <em>i</em>. После гласной — то же: <em>fuera</em>, не <em>fuiera</em>. В 1 л. мн. ч. — обязательная тильда: <em>fuéramos, tuviéramos, pudiéramos, durmiéramos</em>.',
        },
      ],
    },

    {
      id: '83.12',
      title: 'Найдите ошибку',
      type: 'choice',
      instructions: 'В каждом ряду одна форма с ошибкой — выберите её.',
      questions: [
        { id: 'q1', prompt: 'Где ошибка?', options: ['fuera', 'fueras', 'fuiéramos', 'fueran'],         correct: 'fuiéramos', explanation: 'После гласной нет <em>i</em>: <em>fuéramos</em>.' },
        { id: 'q2', prompt: 'Где ошибка?', options: ['dijera', 'dijieras', 'dijéramos', 'dijeran'],     correct: 'dijieras',  explanation: 'После <em>−j</em> — без <em>i</em>: <em>dijeras</em>.' },
        { id: 'q3', prompt: 'Где ошибка?', options: ['tuviera', 'tuvieras', 'tuvieramos', 'tuvieran'],   correct: 'tuvieramos', explanation: '<em>tuviéramos</em> — обязательная тильда.' },
        { id: 'q4', prompt: 'Где ошибка?', options: ['durmiera', 'durmieras', 'dormieran', 'durmieran'], correct: 'dormieran',  explanation: 'У <em>dormir</em> в субхунтиве: <em>durm−</em> (от <em>durmieron</em>).' },
        { id: 'q5', prompt: 'Где ошибка?', options: ['pidiera', 'pediera', 'pidiéramos', 'pidieran'],     correct: 'pediera',    explanation: 'У <em>pedir</em> в субхунтиве: <em>pid−</em> (от <em>pidieron</em>).' },
        { id: 'q6', prompt: 'Где ошибка?', options: ['trajera', 'trajieras', 'trajéramos', 'trajeran'],   correct: 'trajieras',  explanation: 'После <em>−j</em> — без <em>i</em>: <em>trajeras</em>.' },
      ],
    },

    {
      id: '83.13',
      title: 'Аудио-диктант',
      type: 'fill',
      instructions: 'Запишите услышанное полностью с диакритикой.',
      questions: [
        { id: 'q1', prompt: '', audio: 'Era lógico que estuviera triste.',                  correct: ['Era lógico que estuviera triste.', 'Era lógico que estuviera triste'] },
        { id: 'q2', prompt: '', audio: 'Mis padres querían que (yo) fuera pianista.',         correct: ['Mis padres querían que (yo) fuera pianista.', 'Mis padres querían que yo fuera pianista.', 'Mis padres querían que yo fuera pianista'] },
        { id: 'q3', prompt: '', audio: 'Me extrañó que no vinieras a mi fiesta.',              correct: ['Me extrañó que no vinieras a mi fiesta.', 'Me extrañó que no vinieras a mi fiesta'] },
        { id: 'q4', prompt: '', audio: '¡Quién pudiera nadar como tú!',                         correct: ['¡Quién pudiera nadar como tú!', 'Quién pudiera nadar como tú.', 'Quién pudiera nadar como tú'] },
        { id: 'q5', prompt: '', audio: 'Puede que Juan supiera la respuesta.',                   correct: ['Puede que Juan supiera la respuesta.', 'Puede que Juan supiera la respuesta'] },
        { id: 'q6', prompt: '', audio: 'No me gustó que dijera eso.',                              correct: ['No me gustó que dijera eso.', 'No me gustó que dijera eso'] },
      ],
    },
  ],
};
