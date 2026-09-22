import { ServiceItem, ExpertiseSector, Testimonial, BlogPost, JobOffer } from '../types';

export const SERVICES_ENTREPRISES: ServiceItem[] = [
  {
    id: 'ent-executive-search',
    category: 'entreprises',
    title: 'Executive Search & C-Level LifeSciences',
    subtitle: 'Approche directe et confidentielle pour vos postes stratégiques',
    description: 'Identification et approche ciblée de dirigeants, directeurs médicaux, VP R&D et membres du Comex capables de piloter vos transformations scientifiques et industrielles.',
    points: [
      'Chasse de tête ultra-ciblée à l’échelle européenne et internationale',
      'Évaluation rigoureuse des compétences scientifiques et du leadership',
      'Garantie de mandat exclusive et discrétion absolue garantie',
      'Accompagnement jusqu’à la fin de la période d’essai validée'
    ],
    iconName: 'Compass',
    highlightMetric: '98% de mandats de direction menés au succès'
  },
  {
    id: 'ent-rd-clinical',
    category: 'entreprises',
    title: 'Recrutement Experts R&D & Développement Clinique',
    subtitle: 'Les scientifiques et cliniciens au cœur de vos innovations thérapeutiques',
    description: 'Sourcing pointu de profils PhD, PharmD, MD et ingénieurs pour accélérer vos phases précliniques, vos essais de phases I à III et la transposition industrielle.',
    points: [
      'Experts en oncologie, immunologie, thérapie génique et cellulaire',
      'Chefs de projets cliniques (CPM, CRA Senior, Directeurs des Opérations Cliniques)',
      'Bio-statisticiens, data managers et experts en modélisation PK/PD',
      'Délai moyen de présentation de la short-list : 12 à 18 jours'
    ],
    iconName: 'Microscope',
    highlightMetric: 'Vivier qualifié de +14 000 experts LifeSciences'
  },
  {
    id: 'ent-regulatory-qa',
    category: 'entreprises',
    title: 'Affaires Réglementaires, Qualité (QA/QC) & PV',
    subtitle: 'Sécurisez la conformité EMA, FDA et ANSM de vos produits de santé',
    description: 'Recrutement de spécialistes seniors des processus d’enregistrement (AMM, CTA, IND), de la pharmacovigilance et du respect des référentiels cGMP/ISO 13485.',
    points: [
      'Directeurs et Responsables Affaires Réglementaires Europe & Global',
      'Responsables Libération de lots & Personnes Qualifiées (QP)',
      'Auditeurs Qualité, spécialistes validation des systèmes informatisés (CSV)',
      'Experts Pharmacovigilance & Sécurité des patients'
    ],
    iconName: 'ShieldCheck',
    highlightMetric: 'Conformité stricte aux exigences ANSM, EMA & FDA'
  },
  {
    id: 'ent-biotech-scaleup',
    category: 'entreprises',
    title: 'Accompagnement Scale-up Biotech & MedTech',
    subtitle: 'Construisez l’équipe capable de porter vos phases de croissance et levées de fonds',
    description: 'Une solution agile adaptée aux biotechs et medtechs en phase de levée (Series A, B, C) pour recruter simultanément les piliers techniques, réglementaires et opérationnels.',
    points: [
      'Cartographie prospective des compétences requises à 6-24 mois',
      'Package d’attractivité sur-mesure (BSPCE, variable, conditions de travail)',
      'Coordination globale de campagnes multi-postes avec interlocuteur dédié',
      'Assistance à la construction de la culture d’entreprise scientifique'
    ],
    iconName: 'TrendingUp',
    highlightMetric: 'Partenaire de confiance de plus de 45 biotechs en Europe'
  }
];

export const SERVICES_CANDIDATS: ServiceItem[] = [
  {
    id: 'cand-mandats-exclusifs',
    category: 'candidats',
    title: 'Accès privilégié aux mandats confidentiels',
    subtitle: 'Des postes non publiés sur le marché ouvert',
    description: 'Plus de 70% de nos missions de recrutement sont traitées sous le sceau de la confidentialité pour le compte de laboratoires majeurs et de biotechs pionnières.',
    points: [
      'Présentation directe aux décideurs clés (Direction Générale, VP R&D, DRH)',
      'Découverte des projets scientifiques majeurs avant leur officialisation',
      'Respect scrupuleux de votre confidentialité et absence de diffusion sans accord',
      'Opportunités en France, Suisse, Belgique et à l’international'
    ],
    iconName: 'KeyRound',
    highlightMetric: '70% des opportunités traitées en exclusivité confidentielle'
  },
  {
    id: 'cand-carriere-coaching',
    category: 'candidats',
    title: 'Accompagnement de carrière & Conseil personnalisé',
    subtitle: 'Des consultants issus du monde des sciences de la vie à votre écoute',
    description: 'Nos consultants parlent votre langage scientifique et technique. Nous vous aidons à clarifier vos priorités professionnelles et à valoriser votre singularité.',
    points: [
      'Bilan d’expertise scientifique et d’aptitudes managériales',
      'Optimisation de votre profil professionnel et valorisation de vos publications',
      'Préparation stratégique aux jurys d’embauche et entretiens de haut niveau',
      'Accompagnement bienveillant et feedback détaillé à chaque étape'
    ],
    iconName: 'UserCheck',
    highlightMetric: '100% des candidats accompagnés reçoivent un feedback complet'
  },
  {
    id: 'cand-negociation',
    category: 'candidats',
    title: 'Négociation salariale & Benchmark du marché',
    subtitle: 'Maximisez la valeur de votre expertise dans les sciences du vivant',
    description: 'Bénéficiez d’un éclairage précis et indépendant sur les grilles de rémunération actuelles : fixe, bonus, packages d’intéressement et instruments d’equity (BSPCE).',
    points: [
      'Benchmark salarial précis par pôle de spécialité et niveau d’expérience',
      'Conseil sur les composantes variables, primes d’objectifs et avantages',
      'Facilitation transparente des échanges avec l’entreprise recruteuse',
      'Suivi d’intégration régulier à 1, 3 et 6 mois après votre prise de poste'
    ],
    iconName: 'Award',
    highlightMetric: '+18% d’optimisation moyenne de package négocié'
  }
];

export const EXPERTISE_SECTORS: ExpertiseSector[] = [
  {
    id: 'pharma',
    title: 'Industrie Pharmaceutique',
    subtitle: 'Du screening moléculaire jusqu’à la distribution hospitalière et officinale',
    description: 'Un ancrage historique dans les laboratoires princeps, génériques et biopharmaceutiques. Nous intervenons sur l’ensemble de la chaîne de valeur du médicament.',
    subfields: [
      'Développement préclinique & Pharmacologie',
      'Essais cliniques de phases I à IV',
      'Affaires médicales (MSL, Directeurs Médicaux)',
      'Production cGMP, Scale-up & Chaîne du froid',
      'Affaires réglementaires & Market Access'
    ],
    iconName: 'Pill',
    badge: 'Cœur de métier'
  },
  {
    id: 'biotech',
    title: 'Biotechnologies & ATMP',
    subtitle: 'Thérapies géniques, cellulaires, ARN messager et biothérapies de pointe',
    description: 'Au plus près des spin-offs académiques, incubateurs et biotechs émergentes développant les traitements novateurs de demain.',
    subfields: [
      'Vecteurs viraux (AAV, Lentivirus) & ARN',
      'Culture cellulaire & Fermentation (Upstream/Downstream)',
      'Bio-analytique & Contrôle qualité (QC)',
      'Ingénierie des protéines & Anticorps monoclonaux',
      'Scale-up bioprocédés & salles blanches'
    ],
    iconName: 'Dna',
    badge: 'Innovation de rupture'
  },
  {
    id: 'medtech',
    title: 'Dispositifs Médicaux & MedTech',
    subtitle: 'Technologies chirurgicales, implants, robotique médicale et imagerie',
    description: 'Une expertise reconnue dans la sélection d’ingénieurs et spécialistes réglementaires maîtrisant les exigences strictes du RDM (UE) 2017/745 et FDA 510(k).',
    subfields: [
      'R&D mécanique, mécatronique & biomatériaux',
      'Affaires réglementaires CE & FDA',
      'Assurance Qualité ISO 13485 & Audit 21 CFR 820',
      'Gestion des risques ISO 14971 & Évaluation clinique',
      'Industrialisation & Validation de procédés (IQ/OQ/PQ)'
    ],
    iconName: 'Activity',
    badge: 'Conformité & RDM'
  },
  {
    id: 'diagnostics-digital',
    title: 'Diagnostic In Vitro & Santé Digitale',
    subtitle: 'Bio-informatique, IA médicale, e-santé et plateformes de diagnostic moléculaire',
    description: 'La convergence des sciences du vivant et de la data au service de la médecine personnalisée et prédictive.',
    subfields: [
      'Next-Generation Sequencing (NGS) & PCR digitale',
      'Bio-informatique & Data Science génomique',
      'Algorithmes d’IA appliqués au diagnostic d’imagerie',
      'Dispositifs de diagnostic in vitro (DIV/IVDR)',
      'Logiciels dispositifs médicaux (SaMD)'
    ],
    iconName: 'Cpu',
    badge: 'Santé de demain'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Hélène de Montmirail',
    role: 'Directrice de la Production & des Procédés',
    company: 'Site de Bioproduction & Industrialisation (Lyon)',
    type: 'entreprise',
    quote: "Vitalia comprend instantanément les subtilités techniques de nos procédés industriels. Leur équipe nous a présenté des profils rares en ingénierie et en industrialisation avec un niveau d'exigence remarquable en moins de trois semaines.",
    impact: '3 recrutements clés finalisés en R&D avancée',
    sector: 'Biopharmacie & Oncologie',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    rating: 5
  },
  {
    id: 'test-3',
    author: 'Alexandre Chen',
    role: "Placé en tant qu'Ingénieur Validation & Conformité",
    company: 'Responsable Senior en Industrie Pharmaceutique',
    type: 'candidat',
    quote: "Une approche humaine et rigoureuse. Mon consultant Vitalia a su cibler exactement le défi technique et industriel que je recherchais. La négociation de mon contrat et de mes conditions d'intégration a été gérée parfaitement.",
    impact: 'Évolution de carrière vers un poste clé',
    sector: 'Validation & Conformité',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    rating: 5
  },
  {
    id: 'test-4',
    author: 'Claire Dufay, PharmD',
    role: 'Placée en tant que Lead Scientist Bioprocédés',
    company: 'Biotech spécialisée en vaccins ARN (Nantes)',
    type: 'candidat',
    quote: 'La candidature rapide via LinkedIn a été d’une fluidité remarquable : j’ai été contactée dans les 24h par une consultante qui maîtrisait parfaitement le vocabulaire des bioprocédés et les enjeux de mon doctorat.',
    impact: 'Prise de poste réussie en 4 semaines',
    sector: 'Biotechnologies',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    rating: 5
  }
];

export const JOB_OFFERS: JobOffer[] = [
  {
    id: 'job-1',
    title: 'Directeur Médical Oncologie (MD / PharmD)',
    sector: 'Pharmaceutique',
    location: 'Paris (75) / Hybride 2j',
    contractType: 'CDI - Cadre Dirigeant',
    experienceLevel: '8+ ans d’expérience',
    salaryRange: '130k€ - 160k€ + bonus + package',
    description: 'Pilotage de la stratégie médicale d’un pipeline prometteur d’immunothérapies en phase IIb/III. Management d’une équipe de MSL et interaction avec les Key Opinion Leaders (KOL) européens.',
    keyRequirements: [
      'Diplôme de Docteur en Médecine ou Pharmacie',
      'Expérience confirmée en oncologie ou hématologie clinique',
      'Leadership d’équipe et aisance relationnelle auprès des leaders d’opinion',
      'Anglais bilingue indispensable'
    ],
    postedDaysAgo: 2,
    featured: true
  },
  {
    id: 'job-2',
    title: 'Head of DSP / Purif Bioprocédés (H/F)',
    sector: 'Biotechnologies',
    location: 'Lyon (69) / Sur site',
    contractType: 'CDI',
    experienceLevel: '5-10 ans d’expérience',
    salaryRange: '75k€ - 95k€ + intéressement',
    description: 'Supervision de l’équipe de purification (Downstream Processing) pour la production de protéines recombinantes et anticorps monoclonaux en milieu cGMP.',
    keyRequirements: [
      'PhD ou Master 2 en Biotechnologies / Génie des Procédés',
      'Solide maîtrise de la chromatographie préparative (AKTA) et filtration tangentielle',
      'Expérience de transfert technologique vers des CMOs',
      'Rigueur cGMP et esprit d’équipe'
    ],
    postedDaysAgo: 4,
    featured: true
  },
  {
    id: 'job-3',
    title: 'Senior Regulatory Affairs Manager - MedTech (Classe IIb/III)',
    sector: 'MedTech',
    location: 'Grenoble (38) / Télétravail partiel',
    contractType: 'CDI',
    experienceLevel: '6+ ans d’expérience',
    salaryRange: '80k€ - 95k€',
    description: 'Prise en charge des dossiers de marquage CE selon le Règlement RDM 2017/745 et soumissions FDA 510(k) pour des implants médicaux actifs de nouvelle génération.',
    keyRequirements: [
      'Formation scientifique supérieure ou Ingénieur Biomédical',
      'Expertise éprouvée du RDM (UE) 2017/745 et échanges avec les Organismes Notifiés',
      'Connaissance de l’ISO 13485 et ISO 14971',
      'Rigueur rédactionnelle et autonomie'
    ],
    postedDaysAgo: 6,
    featured: false
  },
  {
    id: 'job-4',
    title: 'Lead Bio-Informaticien & Data Science Santé (H/F)',
    sector: 'Diagnostic & Data',
    location: 'Strasbourg / Full Remote possible',
    contractType: 'CDI',
    experienceLevel: '4+ ans d’expérience',
    salaryRange: '65k€ - 85k€ + BSPCE',
    description: 'Développement de pipelines de traitement de données de séquençage haut débit (NGS) et intégration de modèles de machine learning pour la détection précoce de biomarqueurs.',
    keyRequirements: [
      'Doctorat ou Ingénieur en Bio-informatique / Bio-statistiques',
      'Excellente maîtrise de Python, R, Nextflow, Docker et AWS/GCP',
      'Expérience avérée sur des données génomiques ou transcriptomiques',
      'Capacité à dialoguer avec des biologistes moléculaires'
    ],
    postedDaysAgo: 1,
    featured: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Les compétences LifeSciences les plus recherchées en 2025 : pénurie et opportunités',
    slug: 'competences-lifesciences-recherchees-2025',
    category: 'Tendances RH & Marché',
    readTime: '5 min',
    date: '10 Mars 2025',
    excerpt: 'Entre l’essor de l’ARN messager, les nouvelles contraintes réglementaires européennes et la transition vers les thérapies cellulaires, découvrez les profils que les laboratoires et biotechs s’arrachent.',
    author: {
      name: 'Camille Berthier',
      role: 'Directrice de Mission Executive Search, Vitalia',
      avatarUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['Recrutement', 'Biotech', 'Tendances 2025', 'Carrière'],
    featured: true,
    content: [
      'Le secteur des sciences de la vie connaît une mutation structurelle profonde en Europe. Si les besoins en profils cliniques classiques demeurent soutenus, l’émergence accélérée des biomédicaments et des thérapies avancées (ATMP) a créé une tension sans précédent sur certains segments de compétences.',
      '1. Les spécialistes de la bioproduction cGMP et du scale-up : Le passage de la paillasse de laboratoire à des bioréacteurs industriels exige des ingénieurs capables de maîtriser à la fois la biologie cellulaire délicate et les automatismes d’ingénierie industrielle.',
      '2. Les experts en Affaires Réglementaires nouvelle génération : Avec la mise en œuvre continue du RDM pour les dispositifs médicaux et les nouvelles directives de l’EMA pour les produits biologiques, les profils bilingues sciences-droit sont les véritables stratèges des comités de direction.',
      '3. La bio-informatique appliquée et la science des données de santé : L’analyse des données omiques et l’intégration de l’intelligence artificielle dans le criblage de molécules nécessitent des talents hybrides, capables de dialoguer aussi bien avec des chimistes médicinaux qu’avec des data architects.',
      'Chez Vitalia, nous constatons que la capacité d’une entreprise à sécuriser ces compétences clés dès le premier tour de table conditionne directement sa vitesse de mise sur le marché et sa valorisation lors des levées de fonds ultérieures.'
    ]
  },
  {
    id: 'blog-2',
    title: 'Comment réussir sa transition de l’académique vers la Biotech ou l’Industrie Pharmaceutique ?',
    slug: 'transition-academique-vers-biotech-pharma',
    category: 'Conseils Carrière',
    readTime: '6 min',
    date: '28 Février 2025',
    excerpt: 'Docteurs, post-doctorants et chercheurs académiques : voici notre méthode pas-à-pas pour traduire vos travaux scientifiques en valeur ajoutée business et réussir vos entretiens d’embauche.',
    author: {
      name: 'Dr. Julien Morel',
      role: 'Senior Consultant R&D & LifeSciences, Vitalia',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['PhD', 'Conseils Carrière', 'Entretien', 'Transition'],
    featured: true,
    content: [
      'Passer du monde de la recherche publique ou universitaire au secteur privé des sciences du vivant est une étape passionnante mais souvent intimidante. Les codes, les critères d’évaluation et le vocabulaire diffèrent sensiblement.',
      '1. Dépasser la seule liste de publications : Bien que vos articles dans des revues à comité de lecture prouvent votre rigueur intellectuelle, un recruteur industriel cherche avant tout à mesurer votre capacité à gérer des projets sous contraintes de temps, de budget et de réglementation cGMP.',
      '2. Valoriser les compétences transversales (Soft Skills) : La communication interdisciplinaire, la gestion des imprévus techniques, l’encadrement d’étudiants ou de techniciens et la négociation de partenariats sont des atouts majeurs à mettre en relief dans votre CV et lors de votre premier échange avec nos consultants.',
      '3. Comprendre le modèle économique de votre cible : Une biotech cotée en bourse, une start-up en phase préclinique et un laboratoire pharmaceutique mondial n’ont pas les mêmes attentes. Montrez dès votre lettre ou message de candidature que vous comprenez les étapes de jalon (milestones) de l’entreprise.',
      'Vitalia propose un accompagnement personnalisé sans frais pour les scientifiques en transition afin d’optimiser leur profil et les positionner sur des missions stratégiques.'
    ]
  },
  {
    id: 'blog-3',
    title: 'Négocier son package en LifeSciences : fixe, variable, BSPCE et avantages méconnus',
    slug: 'negocier-package-salaire-lifesciences-bspce',
    category: 'Conseils Carrière',
    readTime: '4 min',
    date: '14 Février 2025',
    excerpt: 'Grilles de salaires, instruments d’intéressement au capital, primes d’atteinte de jalons cliniques : les clés pour évaluer et optimiser votre rémunération globale.',
    author: {
      name: 'Camille Berthier',
      role: 'Directrice de Mission Executive Search, Vitalia',
      avatarUrl: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['Rémunération', 'BSPCE', 'Négociation', 'Carrière'],
    featured: false,
    content: [
      'Dans le domaine des sciences de la vie, la rémunération ne se résume jamais à un simple salaire mensuel. La valeur d’un package se mesure dans sa globalité.',
      'Dans les biotechs en démarrage, les BSPCE (Bons de Souscription de Parts de Créateur d’Entreprise) peuvent constituer un levier patrimonial exceptionnel si le candidat sait en évaluer le potentiel par rapport au prix d’exercice et au calendrier de vesting.',
      'Dans l’industrie pharmaceutique établie, les primes sur objectifs de jalons cliniques (milestones d’inclusions de patients, soumission d’AMM, validation de phase), les véhicules de fonction et les plans d’épargne entreprise complètent significativement le fixe de base.',
      'Notre rôle chez Vitalia est d’apporter une transparence totale lors de la négociation pour aligner sereinement les intérêts du candidat et les capacités budgétaires de l’entreprise.'
    ]
  },
  {
    id: 'blog-4',
    title: 'Règlement Européen RDM 2017/745 : Pourquoi le recrutement en affaires réglementaires est sous haute tension',
    slug: 'reglement-rdm-impact-recrutement-affaires-reglementaires',
    category: 'Réglementation',
    readTime: '5 min',
    date: '2 Février 2025',
    excerpt: 'L’embouteillage auprès des organismes notifiés pousse les fabricants de dispositifs médicaux à renforcer drastiquement leurs pôles qualité et conformité.',
    author: {
      name: 'Dr. Julien Morel',
      role: 'Senior Consultant R&D & LifeSciences, Vitalia',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['RDM', 'MedTech', 'Réglementation', 'Qualité'],
    featured: false,
    content: [
      'Depuis l’entrée en vigueur progressive du Règlement Médical Européen (RDM), les exigences en matière d’évaluation clinique et de surveillance après commercialisation (PMS) ont décuplé.',
      'Les fabricants de dispositifs médicaux se heurtent à un double défi : la rareté des créneaux d’audit auprès des organismes notifiés et le manque criant de spécialistes internes capables de constituer des dossiers techniques sans faille.',
      'Cette dynamique place les directeurs et chargés d’affaires réglementaires dans une position de force inédite sur le marché de l’emploi, avec une revalorisation salariale moyenne de 15 à 25% observée au cours des 24 derniers mois.',
      'Vitalia conseille les directions générales pour anticiper ces recrutements cruciaux et sécuriser les profils clés bien en amont de leurs échéances réglementaires critiques.'
    ]
  }
];
