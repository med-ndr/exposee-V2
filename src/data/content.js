export const sections = [
  { id: 'hero', label: 'Accueil' },
  { id: 'auteur', label: 'Auteur' },
  { id: 'oeuvre', label: 'Œuvre' },
  { id: 'resume', label: 'Résumé' },
  { id: 'personnages', label: 'Personnages' },
  { id: 'themes', label: 'Thèmes' },
  { id: 'analyse', label: 'Analyse' },
  { id: 'comparaison', label: 'Duel' },
  { id: 'avis', label: 'Avis' },
  { id: 'quiz', label: 'Quiz' },
  { id: 'conclusion', label: 'Conclusion' },
]

export const author = {
  fullName: 'Jean Marie Lucien Pierre Anouilh',
  facts: [
    { label: 'Naissance', value: '23 juin 1910' },
    { label: 'Décès', value: '3 octobre 1987' },
    { label: 'Nationalité', value: 'Française' },
    { label: 'Domaine', value: 'Théâtre' },
  ],
  timeline: [
    { year: '1910', text: 'Naissance de Jean Anouilh à Bordeaux.' },
    { year: '1930', text: 'Il travaille dans la publicité et fréquente le monde du théâtre.' },
    { year: '1932', text: 'Première pièce jouée : L’Hermine.' },
    { year: '1937', text: 'Succès avec Le Voyageur sans bagage.' },
    { year: '1944', text: 'Création d’Antigone, sa pièce la plus célèbre.' },
    { year: '1959', text: 'Becket ou l’Honneur de Dieu, grand succès public.' },
    { year: '1987', text: 'Mort à Lausanne, en Suisse.' },
  ],
  works: [
    { title: 'Le Voyageur sans bagage', year: '1937' },
    { title: 'Antigone', year: '1944' },
    { title: 'Médée', year: '1946' },
    { title: 'L’Alouette', year: '1953' },
    { title: 'Becket ou l’Honneur de Dieu', year: '1959' },
  ],
  career:
    'Jean Anouilh est l’un des grands auteurs de théâtre français du XXᵉ siècle. Il écrit une œuvre très variée : il classe lui-même ses pièces en « noires », « roses », « brillantes », « grinçantes » ou « costumées ». Antigone fait partie de ses pièces noires.',
  style: [
    'Un langage simple, vif et proche de l’oral.',
    'Un mélange d’humour, d’ironie et de gravité.',
    'Des personnages qui refusent de renoncer à leur idéal.',
    'Des sujets antiques revisités avec un regard moderne.',
  ],
}

export const work = {
  facts: [
    { label: 'Titre', value: 'Antigone' },
    { label: 'Auteur', value: 'Jean Anouilh' },
    { label: 'Genre', value: 'Tragédie moderne' },
    { label: 'Première représentation', value: '1944, Paris' },
  ],
  context: [
    {
      title: 'Contexte historique',
      text: 'La pièce est créée en 1944, à Paris, pendant l’Occupation allemande. Le public vit dans un climat de peur, de censure et de choix difficiles entre obéir et résister.',
    },
    {
      title: 'Contexte littéraire',
      text: 'Au XXᵉ siècle, plusieurs auteurs reprennent les mythes grecs pour parler du présent. Anouilh choisit une forme courte, un langage simple et un décor dépouillé.',
    },
    {
      title: 'Le mythe d’origine',
      text: 'L’histoire vient de la mythologie grecque et de la tragédie de Sophocle. Anouilh en garde le point de départ : Antigone veut enterrer son frère malgré l’interdiction de Créon.',
    },
  ],
  difference: {
    title: 'Mythe antique ou pièce d’Anouilh ?',
    myth: [
      'Les dieux et les lois religieuses comptent beaucoup.',
      'Créon apparaît surtout comme un roi trop sûr de lui.',
      'Le style est solennel.',
    ],
    anouilh: [
      'Le débat est surtout humain et politique.',
      'Créon a de vrais arguments et fatigue d’être roi.',
      'Le langage est moderne et direct.',
    ],
  },
}

export const story = [
  {
    n: '01',
    scene: 'palace',
    title: 'La famille royale de Thèbes',
    text: 'Œdipe est mort et ses deux fils, Étéocle et Polynice, se sont battus pour le trône. Ils se sont tués l’un l’autre. Créon, leur oncle, devient roi. Antigone et Ismène, les sœurs des deux frères, vivent au palais.',
  },
  {
    n: '02',
    scene: 'burial',
    title: 'Le conflit autour de Polynice',
    text: 'Créon accorde des honneurs à Étéocle, qui a défendu la ville. Il traite Polynice en traître et interdit de l’enterrer. Quiconque désobéira sera puni de mort.',
  },
  {
    n: '03',
    scene: 'decision',
    title: 'Antigone décide de désobéir',
    text: 'Antigone ne peut accepter que son frère reste sans sépulture. Ismène, plus prudente, essaie de l’en empêcher. Antigone choisit pourtant d’agir, seule.',
  },
  {
    n: '04',
    scene: 'duel',
    title: 'Antigone face à Créon',
    text: 'Antigone est arrêtée par les gardes. Créon essaie de la convaincre de renoncer et de rentrer dans la vie normale. Antigone refuse tout compromis. Hémon, qui l’aime, plaide pour elle mais ne peut pas changer la situation.',
  },
  {
    n: '05',
    scene: 'tomb',
    title: 'La fin tragique',
    text: 'Antigone est enfermée dans un tombeau où elle meurt. Hémon meurt à son tour, puis Eurydice. Créon reste seul, tandis que la vie de la cité continue, comme si rien n’avait changé.',
  },
]

export const analysisBlocks = [
  {
    n: '01',
    title: 'Conscience individuelle contre autorité politique',
    text: 'Antigone obéit à sa conscience. Créon obéit à la nécessité de gouverner. La pièce pose une question toujours actuelle : faut-il toujours obéir à la loi ?',
  },
  {
    n: '02',
    title: 'Antigone et Créon, deux visions du monde',
    text: 'Antigone veut un monde pur, sans compromis. Créon accepte un monde imparfait, mais organisé. Anouilh ne dit pas clairement qui a raison, et c’est ce qui rend le débat fort.',
  },
  {
    n: '03',
    title: 'La dimension tragique',
    text: 'Dans une tragédie, la fin est connue d’avance. Les personnages ne peuvent pas changer leur sort. L’action ressemble à un mécanisme qui se déroule jusqu’au bout.',
  },
  {
    n: '04',
    title: 'Le rôle du Chœur',
    text: 'Le Chœur ouvre la pièce, présente les personnages, commente l’action et rappelle que la fin est inévitable. Il crée un lien direct entre la scène et le public.',
  },
  {
    n: '05',
    title: 'L’importance de la fin',
    text: 'À la fin, plusieurs personnages sont morts et Créon est seul. Pourtant, la vie continue pour les autres. Cette fin montre le prix humain du conflit et l’indifférence du monde.',
  },
  {
    n: '06',
    title: 'Le message central',
    text: 'Anouilh nous invite à réfléchir : jusqu’où peut-on aller pour rester fidèle à ses convictions, et quelle est la responsabilité de celui qui gouverne ?',
  },
]

export const comparison = [
  {
    a: 'La révolte',
    c: 'L’autorité',
    aText: 'Antigone dit non à un ordre qu’elle juge injuste.',
    cText: 'Créon veut que la décision du roi soit respectée.',
  },
  {
    a: 'La conscience',
    c: 'La loi',
    aText: 'Elle suit sa voix intérieure, même seule.',
    cText: 'Il défend la loi commune, valable pour tous.',
  },
  {
    a: 'La liberté',
    c: 'L’ordre',
    aText: 'Elle veut choisir sa vie et sa mort.',
    cText: 'Il veut éviter le désordre dans la cité.',
  },
  {
    a: 'L’idéal',
    c: 'Le réalisme',
    aText: 'Elle croit à ce qui est pur et juste.',
    cText: 'Il accepte que le monde soit imparfait.',
  },
  {
    a: 'Le refus du compromis',
    c: 'Le compromis',
    aText: 'Pour elle, tout ou rien.',
    cText: 'Pour lui, gouverner demande d’accepter des arrangements.',
  },
]

export const opinion = {
  message: [
    'La pièce montre que dire non peut coûter très cher.',
    'Elle montre aussi que celui qui gouverne porte une lourde responsabilité.',
    'Anouilh ne choisit pas clairement son camp. Il laisse le spectateur réfléchir.',
  ],
  personal: [
    'Pour moi, Antigone est très courageuse. Elle défend ce qu’elle croit juste, même seule.',
    'Mais je comprends aussi Créon. Un chef doit penser à tout le monde, pas seulement à une personne.',
    'Je pense qu’il faut parfois dire non à l’injustice. Mais il faut aussi savoir dialoguer. Dans la pièce, personne n’écoute vraiment l’autre, et tout le monde perd.',
    'Cette histoire me fait penser qu’on doit respecter les règles, mais qu’on ne doit jamais oublier sa conscience.',
  ],
}
