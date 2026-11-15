export const characters = [
  {
    id: 'antigone',
    name: 'Antigone',
    role: 'Héroïne tragique',
    tagline: 'La jeune fille qui dit non',
    initials: 'A',
    personality: [
      'Obstinée et intransigeante',
      'Courageuse, mais solitaire',
      'Fière et très jeune',
    ],
    summary:
      'Fille d’Œdipe, elle décide d’enterrer son frère Polynice malgré l’interdiction de son oncle Créon.',
    relations: [
      { with: 'Créon', text: 'Son oncle et le roi. Il représente la loi qu’elle refuse.' },
      { with: 'Ismène', text: 'Sa sœur, plus prudente. Elles ne font pas le même choix.' },
      { with: 'Hémon', text: 'Son fiancé, fils de Créon. Elle renonce à l’avenir qu’il lui offre.' },
      { with: 'La Nourrice', text: 'Elle l’a élevée. Elle incarne la tendresse de l’enfance.' },
      { with: 'Polynice', text: 'Son frère, privé de sépulture. Il est la cause de sa révolte.' },
    ],
    analysis:
      'Chez Anouilh, Antigone est moins une croyante qu’une révoltée. Elle refuse le compromis et le bonheur « raisonnable ». La pièce laisse une question ouverte : agit-elle surtout pour son frère, ou pour rester fidèle à elle-même ? Cette ambiguïté rend le personnage moderne et plus humain que dans le mythe.',
  },
  {
    id: 'creon',
    name: 'Créon',
    role: 'Roi de Thèbes',
    tagline: 'Le pouvoir et ses compromis',
    initials: 'C',
    personality: [
      'Réaliste et pragmatique',
      'Fatigué par le pouvoir',
      'Autoritaire, mais pas cruel par plaisir',
    ],
    summary:
      'Oncle d’Antigone, il devient roi après la mort des deux frères et veut rétablir l’ordre dans la cité.',
    relations: [
      { with: 'Antigone', text: 'Sa nièce. Il essaie d’abord de la convaincre, puis de la sauver.' },
      { with: 'Hémon', text: 'Son fils. Leur relation se brise pendant la crise.' },
      { with: 'Eurydice', text: 'Son épouse, qui meurt à la fin.' },
      { with: 'Polynice et Étéocle', text: 'Ses neveux. Il traite leurs corps de façon opposée.' },
    ],
    analysis:
      'Créon n’est pas un simple tyran. Il explique que gouverner est un travail difficile et nécessaire. Anouilh lui donne de vrais arguments, ce qui rend le conflit tragique : Antigone et Créon ont chacun leurs raisons. À la fin, Créon reste seul, vainqueur en apparence, mais perdant sur le plan humain.',
  },
  {
    id: 'ismene',
    name: 'Ismène',
    role: 'Sœur d’Antigone',
    tagline: 'La prudence face au danger',
    initials: 'I',
    personality: ['Douce et raisonnable', 'Peureuse devant la loi', 'Attachée à la vie ordinaire'],
    summary:
      'Elle aime sa sœur, mais elle refuse de désobéir au roi et tente de la dissuader.',
    relations: [
      { with: 'Antigone', text: 'Sa sœur. Elle veut la protéger, sans la comprendre.' },
      { with: 'Créon', text: 'Son oncle. Elle accepte son autorité.' },
    ],
    analysis:
      'Ismène est le miroir d’Antigone. Elle représente le choix de la majorité : accepter les règles pour vivre en paix. Anouilh ne la condamne pas, ce qui montre que la peur et la prudence sont aussi des réactions humaines.',
  },
  {
    id: 'hemon',
    name: 'Hémon',
    role: 'Fils de Créon, fiancé d’Antigone',
    tagline: 'Entre l’amour et son père',
    initials: 'H',
    personality: ['Sensible et amoureux', 'Loyal', 'Partagé entre deux fidélités'],
    summary:
      'Il aime Antigone et se retrouve opposé à son père quand la jeune fille est condamnée.',
    relations: [
      { with: 'Antigone', text: 'Sa fiancée. Il est prêt à la suivre.' },
      { with: 'Créon', text: 'Son père, qu’il respectait. Il plaide pour Antigone.' },
      { with: 'Eurydice', text: 'Sa mère.' },
    ],
    analysis:
      'Hémon rend la crise personnelle : la décision politique de Créon détruit sa propre famille. Sa mort montre le prix humain de l’obstination du pouvoir comme de celle d’Antigone.',
  },
  {
    id: 'nourrice',
    name: 'La Nourrice',
    role: 'Femme qui a élevé Antigone',
    tagline: 'La tendresse du quotidien',
    initials: 'N',
    personality: ['Protectrice et inquiète', 'Simple et affectueuse', 'Très attachée à Antigone'],
    summary:
      'Elle veille sur Antigone comme une mère et s’inquiète de ses sorties et de son comportement.',
    relations: [
      { with: 'Antigone', text: 'Elle l’a vue grandir et la traite encore en enfant.' },
      { with: 'Ismène', text: 'Elle s’occupe aussi d’elle.' },
    ],
    analysis:
      'La Nourrice représente le monde de l’enfance et du confort. À côté d’elle, on mesure le renoncement d’Antigone : choisir la révolte, c’est quitter cette douceur.',
  },
  {
    id: 'choeur',
    name: 'Le Chœur',
    role: 'Narrateur et commentateur',
    tagline: 'Celui qui annonce la tragédie',
    initials: 'Ch',
    personality: ['Lucide et distant', 'Ironique', 'Voix du destin'],
    summary:
      'Dans la pièce d’Anouilh, le Chœur est un seul personnage. Il présente les autres personnages et explique comment fonctionne la tragédie.',
    relations: [
      { with: 'Le public', text: 'Il s’adresse directement aux spectateurs.' },
      { with: 'Tous les personnages', text: 'Il les observe et commente leur destin.' },
    ],
    analysis:
      'Le Chœur donne à la pièce sa dimension tragique : il rappelle que la fin est déjà écrite et que les personnages ne peuvent pas y échapper. Il est aussi un lien entre la scène et la salle. Contrairement au chœur de l’Antiquité, il ne forme pas un groupe.',
  },
  {
    id: 'eurydice',
    name: 'Eurydice',
    role: 'Épouse de Créon',
    tagline: 'Le silence d’une reine',
    initials: 'E',
    personality: ['Discrète', 'Effacée', 'Victime indirecte de la tragédie'],
    summary:
      'Mère d’Hémon et épouse de Créon, elle intervient très peu et meurt hors scène.',
    relations: [
      { with: 'Créon', text: 'Son mari, qui reste seul après sa mort.' },
      { with: 'Hémon', text: 'Son fils, dont la mort précède la sienne.' },
    ],
    analysis:
      'Eurydice montre que la tragédie touche aussi ceux qui ne décident rien. Sa mort aggrave la solitude de Créon et complète le bilan de la catastrophe.',
  },
  {
    id: 'polynice',
    name: 'Polynice',
    role: 'Frère d’Antigone, privé de sépulture',
    tagline: 'Le frère absent',
    initials: 'P',
    personality: ['Personnage absent de la scène', 'Présent par son cadavre et sa mémoire'],
    summary:
      'Fils d’Œdipe, il est mort en combattant son frère. Créon le déclare traître et interdit de l’enterrer.',
    relations: [
      { with: 'Antigone et Ismène', text: 'Ses sœurs.' },
      { with: 'Étéocle', text: 'Son frère. Ils se sont tués l’un l’autre.' },
      { with: 'Créon', text: 'Son oncle, qui décide du sort de son corps.' },
    ],
    analysis:
      'Polynice déclenche toute l’action sans jamais paraître. Il pose la question centrale : a-t-on le droit de refuser une sépulture, même à un « traître » ? Créon reconnaît d’ailleurs que cette décision relève surtout de la raison d’État.',
  },
  {
    id: 'eteocle',
    name: 'Étéocle',
    role: 'Frère d’Antigone, honoré par la cité',
    tagline: 'Le frère officiel',
    initials: 'É',
    personality: ['Personnage absent de la scène', 'Honoré par décision politique'],
    summary:
      'Frère de Polynice, il est mort lui aussi dans le combat. Créon lui accorde des funérailles officielles.',
    relations: [
      { with: 'Polynice', text: 'Son frère et adversaire.' },
      { with: 'Créon', text: 'Son oncle, qui le déclare défenseur de la cité.' },
      { with: 'Antigone et Ismène', text: 'Ses sœurs.' },
    ],
    analysis:
      'Étéocle sert de contraste à Polynice : deux frères, deux traitements opposés. La différence tient à un choix politique, ce qui montre comment le pouvoir fabrique des « héros » et des « traîtres ».',
  },
]
