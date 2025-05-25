import { RegulationDocument } from '@/types/workspace';

// ====== DTU CUVELAGE ======
export const dtuCuvelage: RegulationDocument[] = [
  {
    id: 'dtu-14-1',
    type: 'regulation',
    title: 'NF DTU 14.1 - Travaux de cuvelage',
    description: 'Exécution des travaux de cuvelage contre les infiltrations d\'eau',
    regulationType: 'dtu',
    reference: 'NF DTU 14.1',
    scope: 'Cuvelage contre remontées d\'eau et infiltrations',
    category: 'dtu',
    tags: ['cuvelage', 'étanchéité', 'infiltrations', 'sous-sol', 'drainage'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '35 min',
    isPublic: true,
    isPremium: false,
    applicableFrom: '2008-10-01',
    keyRules: [
      {
        id: 'drainage-peripherique',
        title: 'Drainage périphérique obligatoire',
        description: 'Système de drainage avec collecte et évacuation des eaux. Pente ≥ 0,5%',
        mandatory: true,
        references: ['Article 5.2']
      },
      {
        id: 'cuvelage-etanche',
        title: 'Cuvelage étanche',
        description: 'Membrane d\'étanchéité continue sur murs et radier. Résistance chimique adaptée',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Pente de drainage',
        tolerance: '± 0,1%',
        conditions: 'Vérification par géomètre'
      }
    ],
    dimensions: [
      {
        element: 'Épaisseur membrane étanchéité',
        dimension: 'Selon pression d\'eau',
        minimum: '4 mm',
        conditions: 'Membrane élastomère'
      }
    ],
    relatedDocuments: ['DTU 13.1', 'DTU 43.1', 'NF P 11-221']
  }
];

// ====== DTU FUMISTERIE ======
export const dtuFumisterie: RegulationDocument[] = [
  {
    id: 'dtu-24-1',
    type: 'regulation',
    title: 'NF DTU 24.1 - Travaux de fumisterie - Systèmes d\'évacuation',
    description: 'Conduits de fumée et systèmes d\'évacuation des produits de combustion',
    regulationType: 'dtu',
    reference: 'NF DTU 24.1',
    scope: 'Conduits de fumée individuels et collectifs',
    category: 'dtu',
    tags: ['fumisterie', 'conduits', 'évacuation', 'combustion', 'cheminée'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '40 min',
    isPublic: true,
    isPremium: false,
    applicableFrom: '2020-08-01',
    keyRules: [
      {
        id: 'hauteur-debouche',
        title: 'Hauteur de débouché',
        description: 'Débouché ≥ 40 cm au-dessus faîtage dans zone de 8 m. Zone de vents variables',
        mandatory: true,
        references: ['Article 7.2', 'DTU 45.2']
      },
      {
        id: 'resistance-thermique',
        title: 'Résistance thermique conduits',
        description: 'Conduits classe T selon température gaz : T200, T250, T300, T400, T450, T600',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Verticalité des conduits',
        tolerance: '± 5 mm/m',
        conditions: 'Maximum 20 mm sur hauteur totale'
      }
    ],
    dimensions: [
      {
        element: 'Section minimale conduit',
        dimension: 'Selon puissance appareil',
        minimum: '150 cm² pour poêle bois',
        conditions: 'Calcul selon NF EN 13384'
      }
    ],
    relatedDocuments: ['NF EN 1443', 'NF EN 13384', 'DTU 25.1']
  },
  {
    id: 'dtu-24-2',
    type: 'regulation',
    title: 'NF DTU 24.2 - Cheminées équipées d\'un foyer fermé',
    description: 'Cheminées avec insert ou foyer fermé',
    regulationType: 'dtu',
    reference: 'NF DTU 24.2',
    scope: 'Foyers fermés, inserts, conduits de raccordement',
    category: 'dtu',
    tags: ['cheminée', 'foyer fermé', 'insert', 'conduit raccordement'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'protection-combustibles',
        title: 'Protection matériaux combustibles',
        description: 'Distance sécurité : 160 mm (simple rayonnement), 80 mm (double rayonnement)',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [
      {
        element: 'Diamètre conduit de raccordement',
        dimension: 'Égal ou supérieur sortie appareil',
        minimum: '130 mm pour poêle < 12 kW',
        conditions: 'Jamais de réduction'
      }
    ],
    relatedDocuments: ['DTU 24.1', 'NF EN 13229']
  }
];

// ====== DTU PLÂTRERIE ======
export const dtuPlatrerie: RegulationDocument[] = [
  {
    id: 'dtu-25-1',
    type: 'regulation',
    title: 'NF DTU 25.1 - Travaux d\'enduits intérieurs',
    description: 'Enduits intérieurs au plâtre et compositions à base de plâtre',
    regulationType: 'dtu',
    reference: 'NF DTU 25.1',
    scope: 'Enduits plâtre traditionnels et projetés',
    category: 'dtu',
    tags: ['enduit plâtre', 'finition', 'projection', 'lissé', 'gratté'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'epaisseur-enduit',
        title: 'Épaisseur des enduits',
        description: 'Enduit de dressage : 8-15 mm. Enduit de finition : 1-3 mm',
        mandatory: true
      },
      {
        id: 'hygrometrie-application',
        title: 'Conditions d\'application',
        description: 'Température 5-30°C. Hygrométrie < 60%. Protection courants d\'air',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Planéité générale',
        tolerance: '± 5 mm sous règle de 2 m',
        conditions: 'Enduit de dressage'
      }
    ],
    dimensions: [
      {
        element: 'Épaisseur totale enduit',
        dimension: '10-20 mm',
        maximum: '25 mm en rattrapage local',
        conditions: 'Sur maçonnerie'
      }
    ],
    relatedDocuments: ['DTU 20.1', 'DTU 25.41', 'NF B 12-301']
  },
  {
    id: 'dtu-25-41',
    type: 'regulation',
    title: 'NF DTU 25.41 - Ouvrages en plaques de plâtre',
    description: 'Cloisons, doublages et plafonds en plaques de plâtre',
    regulationType: 'dtu',
    reference: 'NF DTU 25.41',
    scope: 'Plaques de plâtre vissées sur ossature métallique',
    category: 'dtu',
    tags: ['plaque plâtre', 'cloison', 'doublage', 'ossature métallique'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'fixation-plaques',
        title: 'Fixation des plaques',
        description: 'Vis autoperceuses Ø 3,5 mm. Espacement 25 cm sur périphérie, 30 cm au centre',
        mandatory: true
      },
      {
        id: 'joints-plaques',
        title: 'Traitement des joints',
        description: 'Bande à joints + enduit. 3 passes pour joints droits, 2 passes pour bords amincis',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Planéité des ouvrages',
        tolerance: '± 5 mm sous règle de 2 m',
        conditions: 'Après traitement des joints'
      }
    ],
    dimensions: [
      {
        element: 'Entraxe montants ossature',
        dimension: '60 cm maximum',
        conditions: 'Plaques standard 13 mm'
      }
    ],
    relatedDocuments: ['DTU 25.1', 'NF EN 520', 'Cahiers CSTB']
  }
];

// ====== DTU ENDUITS ET CHAPES ======
export const dtuEnduitsChapes: RegulationDocument[] = [
  {
    id: 'dtu-26-1',
    type: 'regulation',
    title: 'NF DTU 26.1 - Enduits aux mortiers de liants hydrauliques',
    description: 'Enduits de façade au mortier de ciment, chaux-ciment et chaux hydraulique',
    regulationType: 'dtu',
    reference: 'NF DTU 26.1',
    scope: 'Enduits extérieurs traditionnels monocouches et multicouches',
    category: 'dtu',
    tags: ['enduit façade', 'mortier', 'ciment', 'chaux', 'gobetis'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '35 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'preparation-support',
        title: 'Préparation du support',
        description: 'Nettoyage, dépoussiérage, humidification. Gobetis d\'accrochage si nécessaire',
        mandatory: true
      },
      {
        id: 'dosage-mortier',
        title: 'Dosage des mortiers',
        description: 'Couche d\'accroche : 500 kg/m³. Corps d\'enduit : 350-400 kg/m³. Finition : 300-350 kg/m³',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Planéité d\'ensemble',
        tolerance: '± 10 mm sous règle de 2 m',
        conditions: 'Enduit de corps'
      }
    ],
    dimensions: [
      {
        element: 'Épaisseur totale enduit',
        dimension: '15-20 mm',
        minimum: '12 mm',
        maximum: '25 mm',
        conditions: 'Enduit traditionnel 3 couches'
      }
    ],
    relatedDocuments: ['DTU 20.1', 'NF EN 998-1', 'DTU 42.1']
  },
  {
    id: 'dtu-26-2',
    type: 'regulation',
    title: 'NF DTU 26.2 - Chapes et dalles à base de liants hydrauliques',
    description: 'Chapes de mortier et dalles béton rapportées',
    regulationType: 'dtu',
    reference: 'NF DTU 26.2',
    scope: 'Chapes traditionnelles, fluides, allégées',
    category: 'dtu',
    tags: ['chape', 'mortier', 'dalle', 'plancher chauffant', 'ragréage'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'epaisseur-chape',
        title: 'Épaisseur des chapes',
        description: 'Chape adhérente : 20 mm mini. Chape désolidarisée : 40 mm mini. Chape flottante : 40 mm mini',
        mandatory: true
      },
      {
        id: 'joints-fractionnement',
        title: 'Joints de fractionnement',
        description: 'Surface ≤ 40 m² par plot. Rapport L/l ≤ 2. Joints de dilatation tous les 8 m',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Planéité de la chape',
        tolerance: '± 5 mm sous règle de 2 m',
        conditions: 'Avant pose revêtement'
      }
    ],
    dimensions: [
      {
        element: 'Épaisseur mini chape courante',
        dimension: 'Selon type liaison au support',
        minimum: '20 mm adhérente, 40 mm désolidarisée',
        conditions: 'Mortier dosé à 300-350 kg/m³'
      }
    ],
    relatedDocuments: ['DTU 13.3', 'DTU 52.1', 'DTU 65.14']
  }
];

// ====== DTU COUVERTURES ======
export const dtuCouvertures: RegulationDocument[] = [
  {
    id: 'dtu-40-11',
    type: 'regulation',
    title: 'NF DTU 40.11 - Couverture en ardoises',
    description: 'Couvertures en ardoises naturelles',
    regulationType: 'dtu',
    reference: 'NF DTU 40.11',
    scope: 'Ardoises naturelles sur voliges ou liteaux',
    category: 'dtu',
    tags: ['ardoise', 'couverture', 'fixation', 'pente', 'recouvrement'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '35 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'pente-minimale',
        title: 'Pente minimale',
        description: 'Pente ≥ 40% (22°) pour ardoises format 32×22 cm. Augmente selon format',
        mandatory: true
      },
      {
        id: 'fixation-ardoises',
        title: 'Fixation des ardoises',
        description: '2 pointes inox par ardoise. Position à 1/3 de la hauteur depuis le haut',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Alignement des rangées',
        tolerance: '± 5 mm',
        conditions: 'Contrôle au cordeau'
      }
    ],
    dimensions: [
      {
        element: 'Recouvrement des ardoises',
        dimension: 'Variable selon pente',
        minimum: '10 cm pour pente > 60%',
        conditions: 'Augmenter si pente faible'
      }
    ],
    relatedDocuments: ['DTU 31.1', 'DTU 43.1', 'NF EN 12326']
  },
  {
    id: 'dtu-40-2',
    type: 'regulation',
    title: 'NF DTU 40.2 - Couvertures en tuiles de terre cuite à emboîtement',
    description: 'Tuiles mécaniques à emboîtement longitudinal et transversal',
    regulationType: 'dtu',
    reference: 'NF DTU 40.2',
    scope: 'Tuiles grand moule à emboîtement',
    category: 'dtu',
    tags: ['tuile mécanique', 'emboîtement', 'fixation', 'pente', 'ventilation'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'pente-tuiles-mecaniques',
        title: 'Pente selon exposition',
        description: 'Site protégé : pente ≥ 25%. Site normal : ≥ 35%. Site exposé : ≥ 40%',
        mandatory: true,
        references: ['Carte zones climatiques']
      },
      {
        id: 'fixation-tuiles',
        title: 'Fixation des tuiles',
        description: 'Fixation selon zone : normal ≥ 5 rangées du faîtage. Exposé : toutes tuiles',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Pureau des tuiles',
        tolerance: '± 5 mm',
        conditions: 'Par rapport au pureau nominal'
      }
    ],
    dimensions: [
      {
        element: 'Débord égout',
        dimension: '50-70 mm',
        conditions: 'Protection de la chanlatte'
      }
    ],
    relatedDocuments: ['DTU 31.1', 'NF EN 1304', 'Cahiers CSTB']
  },
  // Couvertures métalliques
  {
    id: 'dtu-40-1',
    type: 'regulation',
    title: 'NF DTU 40.1 - Couverture par éléments métalliques en feuilles et longues feuilles',
    description: 'Couvertures métalliques traditionnelles zinc, plomb, cuivre',
    regulationType: 'dtu',
    reference: 'NF DTU 40.1',
    scope: 'Couvertures zinc, plomb, cuivre en feuilles',
    category: 'dtu',
    tags: ['couverture métallique', 'zinc', 'plomb', 'cuivre', 'soudure'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '40 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'dilatation-metallique',
        title: 'Joints de dilatation',
        description: 'Joints de dilatation tous les 10-12 m selon matériau. Fixations coulissantes',
        mandatory: true
      },
      {
        id: 'pente-metallique',
        title: 'Pente minimale',
        description: 'Pente ≥ 5% (3°) minimum. 7% recommandé pour évacuation optimale',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 40.44', 'DTU 40.45', 'DTU 40.46']
  },
  {
    id: 'dtu-40-44',
    type: 'regulation',
    title: 'NF DTU 40.44 - Couverture en acier inoxydable',
    description: 'Couvertures en acier inoxydable',
    regulationType: 'dtu',
    reference: 'NF DTU 40.44',
    scope: 'Couverture acier inoxydable en feuilles',
    category: 'dtu',
    tags: ['acier inoxydable', 'couverture', 'soudage', 'inox'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '35 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'qualite-inox',
        title: 'Qualité de l\'acier inoxydable',
        description: 'Acier 316L pour milieu marin, 304L pour milieu normal. Épaisseur ≥ 0,5 mm',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 40.1']
  },
  {
    id: 'dtu-40-45',
    type: 'regulation',
    title: 'NF DTU 40.45 - Couverture en cuivre',
    description: 'Couvertures en cuivre traditionnel',
    regulationType: 'dtu',
    reference: 'NF DTU 40.45',
    scope: 'Couverture cuivre en feuilles et bandes',
    category: 'dtu',
    tags: ['cuivre', 'couverture', 'patine', 'soudure'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '35 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'epaisseur-cuivre',
        title: 'Épaisseur du cuivre',
        description: 'Épaisseur 0,6 mm minimum. Cuivre électrolytique pur à 99,9%',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 40.1']
  },
  {
    id: 'dtu-40-46',
    type: 'regulation',
    title: 'NF DTU 40.46 - Travaux de couverture en plomb',
    description: 'Couvertures en plomb laminé',
    regulationType: 'dtu',
    reference: 'NF DTU 40.46',
    scope: 'Couverture plomb sur support continu',
    category: 'dtu',
    tags: ['plomb', 'couverture', 'soudure', 'étanchéité'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'epaisseur-plomb',
        title: 'Épaisseur du plomb',
        description: 'Épaisseur minimum 1,8 mm (code 4). Plomb laminé conforme NF',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 40.1']
  },
  // Couvertures en ardoises
  {
    id: 'dtu-40-13',
    type: 'regulation',
    title: 'NF DTU 40.13 - Couverture en ardoises en fibres-ciment',
    description: 'Ardoises artificielles en fibres-ciment',
    regulationType: 'dtu',
    reference: 'NF DTU 40.13',
    scope: 'Ardoises fibres-ciment sur liteaux',
    category: 'dtu',
    tags: ['ardoise fibres-ciment', 'artificielle', 'fixation', 'étanchéité'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'fixation-ardoises-fc',
        title: 'Fixation spécifique',
        description: 'Fixation par vis ou crochets inox. Pré-perçage obligatoire',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 40.11']
  },
  // Couvertures en tuiles
  {
    id: 'dtu-40-21',
    type: 'regulation',
    title: 'NF DTU 40.21 - Couverture en tuiles de béton à glissement',
    description: 'Tuiles béton à glissement et emboîtement',
    regulationType: 'dtu',
    reference: 'NF DTU 40.21',
    scope: 'Tuiles béton système à glissement',
    category: 'dtu',
    tags: ['tuile béton', 'glissement', 'emboîtement', 'fixation'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'glissement-tuiles',
        title: 'Système de glissement',
        description: 'Tuiles à glissement longitudinal. Fixation mécanique obligatoire en rives',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 40.2']
  },
  {
    id: 'dtu-40-211',
    type: 'regulation',
    title: 'NF DTU 40.211 - Couverture en tuiles plates de terre cuite à pureau plat',
    description: 'Tuiles plates terre cuite à emboîtement pureau plat',
    regulationType: 'dtu',
    reference: 'NF DTU 40.211',
    scope: 'Tuiles plates terre cuite pureau plat',
    category: 'dtu',
    tags: ['tuile plate', 'pureau plat', 'terre cuite', 'emboîtement'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'pureau-uniforme',
        title: 'Pureau plat uniforme',
        description: 'Pureau constant sur toute la surface. Alignement parfait des rangées',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 40.23']
  },
  {
    id: 'dtu-40-22',
    type: 'regulation',
    title: 'NF DTU 40.22 - Couverture en tuiles canal de terre cuite',
    description: 'Tuiles canal traditionnelles du Midi',
    regulationType: 'dtu',
    reference: 'NF DTU 40.22',
    scope: 'Tuiles canal terre cuite traditionnelles',
    category: 'dtu',
    tags: ['tuile canal', 'terre cuite', 'méditerranéenne', 'recouvrement'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'pose-canal',
        title: 'Pose des tuiles canal',
        description: 'Pose sur lit de mortier. Recouvrement variable selon pente et exposition',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 26.1']
  },
  {
    id: 'dtu-40-23',
    type: 'regulation',
    title: 'NF DTU 40.23 - Couverture en tuiles plates de terre cuite',
    description: 'Tuiles plates terre cuite traditionnelles',
    regulationType: 'dtu',
    reference: 'NF DTU 40.23',
    scope: 'Tuiles plates terre cuite clouées',
    category: 'dtu',
    tags: ['tuile plate', 'terre cuite', 'clouage', 'traditionnel'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'clouage-tuiles-plates',
        title: 'Clouage des tuiles',
        description: 'Chaque tuile clouée. Clous en acier galvanisé ou inox',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 40.211']
  },
  {
    id: 'dtu-40-24',
    type: 'regulation',
    title: 'NF DTU 40.24 - Couverture en tuiles à emboîtement longitudinal',
    description: 'Tuiles terre cuite à emboîtement longitudinal',
    regulationType: 'dtu',
    reference: 'NF DTU 40.24',
    scope: 'Tuiles emboîtement longitudinal uniquement',
    category: 'dtu',
    tags: ['emboîtement longitudinal', 'tuile', 'terre cuite'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'emboitement-long',
        title: 'Emboîtement longitudinal',
        description: 'Emboîtement dans le sens de la pente uniquement. Fixation renforcée',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 40.2']
  },
  {
    id: 'dtu-40-241',
    type: 'regulation',
    title: 'NF DTU 40.241 - Couvertures en tuiles planes en béton',
    description: 'Tuiles planes béton à glissement et emboîtement longitudinal',
    regulationType: 'dtu',
    reference: 'NF DTU 40.241',
    scope: 'Tuiles planes béton système mixte',
    category: 'dtu',
    tags: ['tuile plane béton', 'glissement', 'emboîtement longitudinal'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'systeme-mixte',
        title: 'Système mixte',
        description: 'Combinaison glissement et emboîtement longitudinal. Double sécurité',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 40.21', 'DTU 40.25']
  },
  {
    id: 'dtu-40-25',
    type: 'regulation',
    title: 'NF DTU 40.25 - Couverture en tuiles plates en béton',
    description: 'Tuiles plates en béton',
    regulationType: 'dtu',
    reference: 'NF DTU 40.25',
    scope: 'Tuiles plates béton sur liteaux',
    category: 'dtu',
    tags: ['tuile plate béton', 'fixation', 'étanchéité'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'resistance-beton-tuile',
        title: 'Résistance au gel',
        description: 'Tuiles résistantes au gel-dégel. Essais de durabilité obligatoires',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 40.21']
  },
  // Autres couvertures
  {
    id: 'dtu-40-14',
    type: 'regulation',
    title: 'NF DTU 40.14 - Couverture en bardeaux bitumés',
    description: 'Couvertures en bardeaux bitumineux',
    regulationType: 'dtu',
    reference: 'NF DTU 40.14',
    scope: 'Bardeaux bitumés sur support continu',
    category: 'dtu',
    tags: ['bardeau bitumé', 'shingle', 'étanchéité', 'clouage'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'support-continu',
        title: 'Support continu obligatoire',
        description: 'Voligeage ou panneaux OSB/contreplaqué. Pare-vapeur sous isolant',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 31.1']
  },
  {
    id: 'dtu-40-35',
    type: 'regulation',
    title: 'NF DTU 40.35 - Couverture en plaques ondulées en fibres-ciment',
    description: 'Plaques ondulées fibres-ciment',
    regulationType: 'dtu',
    reference: 'NF DTU 40.35',
    scope: 'Plaques ondulées fibres-ciment sur pannes',
    category: 'dtu',
    tags: ['plaque ondulée', 'fibres-ciment', 'industriel', 'fixation'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'fixation-plaques-fc',
        title: 'Fixation des plaques',
        description: 'Fixation par tirefonds avec rondelles étanches. Pré-perçage obligatoire',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 31.1']
  },
  {
    id: 'dtu-40-36',
    type: 'regulation',
    title: 'NF DTU 40.36 - Couverture en plaques nervurées en acier',
    description: 'Plaques nervurées en tôles d\'acier revêtues',
    regulationType: 'dtu',
    reference: 'NF DTU 40.36',
    scope: 'Tôles nervurées acier galvanisé ou laqué',
    category: 'dtu',
    tags: ['tôle nervurée', 'acier', 'galvanisé', 'industriel'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'revetement-protection',
        title: 'Revêtement de protection',
        description: 'Galvanisation + laquage ou plastisol. Résistance corrosion adaptée',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 32.1']
  },
  {
    id: 'dtu-40-5',
    type: 'regulation',
    title: 'NF DTU 40.5 - Travaux d\'évacuation des eaux pluviales',
    description: 'Systèmes d\'évacuation eaux pluviales en toiture',
    regulationType: 'dtu',
    reference: 'NF DTU 40.5',
    scope: 'Chéneaux, gouttières, descentes EP',
    category: 'dtu',
    tags: ['évacuation EP', 'gouttière', 'chéneau', 'descente'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'section-evacuation',
        title: 'Dimensionnement des évacuations',
        description: 'Section selon surface de toiture et pluviométrie. Calcul méthode DTU',
        mandatory: true
      },
      {
        id: 'pente-cheneau',
        title: 'Pente des chéneaux',
        description: 'Pente ≥ 0,5% vers évacuations. 1% recommandé pour longueurs importantes',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 60.11', 'DTU 40.1']
  }
];

// ====== DTU BARDAGES ======
export const dtuBardages: RegulationDocument[] = [
  {
    id: 'dtu-41-2',
    type: 'regulation',
    title: 'NF DTU 41.2 - Revêtements extérieurs en bois',
    description: 'Bardages bois, clins et bardages rapportés',
    regulationType: 'dtu',
    reference: 'NF DTU 41.2',
    scope: 'Bardages bois massif et dérivés du bois',
    category: 'dtu',
    tags: ['bardage bois', 'clins', 'lame', 'fixation', 'ventilation'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'classe-emploi-bardage',
        title: 'Classe d\'emploi du bois',
        description: 'Classe 3.1 minimum. Classe 3.2 pour expositions sévères (littoral, montagne)',
        mandatory: true,
        references: ['NF EN 335']
      },
      {
        id: 'lame-air-ventilation',
        title: 'Lame d\'air ventilée',
        description: 'Épaisseur ≥ 20 mm. Ventilation basse et haute par grilles ou fentes',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Planéité du bardage',
        tolerance: '± 10 mm sous règle de 2 m',
        conditions: 'Aspect fini'
      }
    ],
    dimensions: [
      {
        element: 'Entraxe des fixations',
        dimension: 'Variable selon largeur lame',
        maximum: '40 cm pour lames > 100 mm',
        conditions: 'Fixation en partie haute'
      }
    ],
    relatedDocuments: ['DTU 31.2', 'NF EN 14915', 'Cahiers CSTB']
  }
];

// ====== DTU PARQUETS ======
export const dtuParquets: RegulationDocument[] = [
  {
    id: 'dtu-51-1',
    type: 'regulation',
    title: 'NF DTU 51.1 - Pose des parquets à clouer',
    description: 'Parquets massifs cloués sur lambourdes ou solives',
    regulationType: 'dtu',
    reference: 'NF DTU 51.1',
    scope: 'Parquets massifs traditionnels cloués',
    category: 'dtu',
    tags: ['parquet cloué', 'lambourdes', 'lames massives', 'espacement'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'entraxe-lambourdes',
        title: 'Entraxe des lambourdes',
        description: 'Entraxe ≤ 40 cm pour lames ≤ 23 mm. Entraxe ≤ 50 cm pour lames > 23 mm',
        mandatory: true
      },
      {
        id: 'clouage-lames',
        title: 'Clouage des lames',
        description: 'Clouage en biais dans la rainure. 2 clous par lambourde minimum',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Planéité du parquet',
        tolerance: '± 2 mm sous règle de 2 m',
        conditions: 'Aspect fini poncé'
      }
    ],
    dimensions: [
      {
        element: 'Jeu périphérique',
        dimension: '8-10 mm',
        conditions: 'Dilatation du bois'
      }
    ],
    relatedDocuments: ['DTU 51.2', 'NF EN 13629', 'DTU 26.2']
  },
  {
    id: 'dtu-51-2',
    type: 'regulation',
    title: 'NF DTU 51.2 - Parquets collés',
    description: 'Parquets massifs et contrecollés posés collés',
    regulationType: 'dtu',
    reference: 'NF DTU 51.2',
    scope: 'Parquets collés sur chape ou dalle',
    category: 'dtu',
    tags: ['parquet collé', 'colle', 'contrecollé', 'préparation support'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'preparation-support-parquet',
        title: 'Préparation du support',
        description: 'Planéité ± 3 mm sous règle de 2 m. Propreté parfaite. Humidité ≤ 3%',
        mandatory: true
      },
      {
        id: 'encollage',
        title: 'Encollage',
        description: 'Encollage à la spatule crantée. Respect du temps ouvert de la colle',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Planéité parquet collé',
        tolerance: '± 2 mm sous règle de 2 m',
        conditions: 'Contrôle final'
      }
    ],
    dimensions: [
      {
        element: 'Jeu périphérique parquet collé',
        dimension: '5-8 mm',
        conditions: 'Moins que parquet cloué'
      }
    ],
    relatedDocuments: ['DTU 51.1', 'DTU 26.2', 'NF EN 14342']
  }
];

// Export de tous les DTU additionnels
export const additionalDTUs = [
  ...dtuCuvelage,
  ...dtuFumisterie,
  ...dtuPlatrerie,
  ...dtuEnduitsChapes,
  ...dtuCouvertures,
  ...dtuBardages,
  ...dtuParquets
]; 