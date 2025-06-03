import { Guide, WorkspaceCategory } from '../../types/workspace.js';
import { additionalGuides } from './additionalGuides.js';

// Catégories de guides
export const guideCategories: WorkspaceCategory[] = [
  {
    id: 'preparation',
    name: 'Préparation de projet',
    description: 'Guides pour bien préparer son projet de construction',
    icon: 'FileText',
    color: 'blue',
    resourceCount: 6
  },
  {
    id: 'reglementation',
    name: 'Réglementation',
    description: 'Comprendre les normes et réglementations',
    icon: 'Scale',
    color: 'green',
    resourceCount: 5
  },
  {
    id: 'technique',
    name: 'Aspects techniques',
    description: 'Guides techniques et bonnes pratiques',
    icon: 'Settings',
    color: 'orange',
    resourceCount: 4
  },
  {
    id: 'gestion',
    name: 'Gestion de projet',
    description: 'Organisation et suivi de chantier',
    icon: 'Users',
    color: 'purple',
    resourceCount: 3
  }
];

// 15 guides pratiques complets
export const mainGuides: Guide[] = [
  {
    id: 'qui-faire-appel',
    type: 'guide',
    title: 'Qui faire appel pour mon projet ?',
    description: 'Architecte, maître d\'œuvre, entrepreneur : guide complet pour choisir le bon professionnel selon votre projet',
    category: 'preparation',
    tags: ['architecte', 'maître d\'œuvre', 'entrepreneur', 'construction', 'choix professionnel'],
    lastUpdated: '2024-01-15',
    author: 'Équipe Progineer',
    difficulty: 'beginner',
    estimatedTime: '10 min',
    readTime: '8 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Architecte ou Maître d\'œuvre ? Guide complet pour choisir | Progineer',
      metaDescription: 'Découvrez qui faire appel pour votre projet : architecte, maître d\'œuvre ou entrepreneur. Guide complet avec avantages, coûts et conseils pratiques.',
      keywords: ['architecte', 'maître d\'œuvre', 'entrepreneur', 'construction', 'rénovation', 'projet', 'professionnel'],
      canonicalUrl: 'https://progineer.fr/workspace/guides/qui-faire-appel'
    },
    content: `Ce guide complet vous aide à identifier le professionnel idéal pour votre projet de construction ou rénovation. Découvrez les rôles, missions, coûts et avantages de chaque acteur du bâtiment.`,
    sections: [
      {
        id: 'introduction',
        title: 'Introduction : Bien s\'entourer pour réussir',
        content: 'Choisir le bon professionnel pour votre projet de construction ou rénovation est crucial pour sa réussite. Cette décision impacte directement le budget, les délais, la qualité des travaux et votre tranquillité d\'esprit.',
        subsections: [
          {
            id: 'enjeux',
            title: 'Les enjeux du choix',
            content: 'Un mauvais choix peut coûter cher : dépassements budgétaires, malfaçons, retards, stress. À l\'inverse, un bon professionnel vous fait économiser temps et argent.'
          }
        ]
      },
      {
        id: 'architecte',
        title: 'L\'architecte : concepteur et maître d\'œuvre',
        content: 'L\'architecte conçoit votre projet et s\'assure de sa faisabilité technique et réglementaire. Son intervention est obligatoire pour les constructions de plus de 150 m².',
        subsections: [
          {
            id: 'missions-architecte',
            title: 'Missions et services',
            content: 'L\'architecte intervient de la conception à la réception des travaux : esquisse, avant-projet, permis de construire, suivi de chantier, réception des travaux.'
          },
          {
            id: 'cout-architecte',
            title: 'Coût et honoraires',
            content: 'Honoraires entre 8% et 15% du montant des travaux selon la mission. Mission complète : 12-15%, mission partielle (plans uniquement) : 8-10%.'
          },
          {
            id: 'avantages-architecte',
            title: 'Avantages',
            content: 'Vision globale du projet, expertise technique, gestion réglementaire, suivi qualité, assurance responsabilité décennale.'
          }
        ]
      },
      {
        id: 'maitre-oeuvre',
        title: 'Le maître d\'œuvre : pilote de chantier',
        content: 'Le maître d\'œuvre coordonne l\'ensemble des corps de métier et pilote votre chantier du début à la fin.',
        subsections: [
          {
            id: 'role-moe',
            title: 'Rôle et missions',
            content: 'Coordination des artisans, planning des travaux, suivi qualité, respect des délais et budgets, gestion des aléas de chantier.'
          },
          {
            id: 'cout-moe',
            title: 'Coût et tarification',
            content: 'Honoraires entre 10% et 18% selon la complexité du projet. Rénovation lourde : 15-18%, construction neuve : 10-15%.'
          },
          {
            id: 'difference-architecte-moe',
            title: 'Différence avec l\'architecte',
            content: 'L\'architecte conçoit, le maître d\'œuvre exécute. Certains architectes font aussi maître d\'œuvre. Le MO peut reprendre les plans d\'un architecte.'
          }
        ]
      },
      {
        id: 'entrepreneur-general',
        title: 'L\'entrepreneur général : solution clé en main',
        content: 'L\'entrepreneur général prend en charge l\'intégralité de votre projet, de la conception à la livraison.',
        subsections: [
          {
            id: 'prestations-eg',
            title: 'Prestations complètes',
            content: 'Études, démarches administratives, coordination des corps d\'état, livraison clé en main. Solution simplifiée pour le client.'
          },
          {
            id: 'prix-forfait',
            title: 'Prix forfaitaire',
            content: 'Généralement proposé au forfait, permet de maîtriser le budget global. Moins de flexibilité mais plus de sécurité financière.'
          }
        ]
      },
      {
        id: 'artisans-specialises',
        title: 'Les artisans spécialisés',
        content: 'Pour des travaux spécifiques ou des budgets serrés, faire appel directement aux artisans peut être une solution économique.',
        subsections: [
          {
            id: 'avantages-artisans',
            title: 'Avantages des artisans',
            content: 'Contact direct, tarifs généralement plus bas, expertise métier pointue, flexibilité dans les délais.'
          },
          {
            id: 'inconvenients-artisans',
            title: 'Points d\'attention',
            content: 'Coordination à votre charge, risque de retards en cascade, responsabilité partagée, gestion administrative multiple.'
          }
        ]
      },
      {
        id: 'comment-choisir',
        title: 'Comment choisir selon votre projet ?',
        content: 'Le choix dépend de la nature, de la complexité et du budget de votre projet.',
        subsections: [
          {
            id: 'criteres-choix',
            title: 'Critères de décision',
            content: 'Surface du projet, budget disponible, complexité technique, temps à consacrer, niveau d\'accompagnement souhaité.'
          },
          {
            id: 'projet-simple',
            title: 'Projet simple (< 50 000€)',
            content: 'Artisans spécialisés ou maître d\'œuvre pour la coordination. Suffisant pour rénovations partielles ou aménagements.'
          },
          {
            id: 'projet-moyen',
            title: 'Projet moyen (50-200 000€)',
            content: 'Maître d\'œuvre recommandé pour la coordination. Architecte si modification de structure ou création d\'ouvertures.'
          },
          {
            id: 'projet-complexe',
            title: 'Projet complexe (> 200 000€)',
            content: 'Architecte obligatoire si > 150 m². Équipe architecte + maître d\'œuvre ou entrepreneur général selon les préférences.'
          }
        ]
      }
    ],
    relatedGuides: ['permis-construire', 'budget-construction', 'assurances-construction'],
    downloadUrl: '/resources/guides/qui-faire-appel.pdf',
    fileSize: '1.2 Mo'
  },
  {
    id: 'permis-construire',
    type: 'guide',
    title: 'Permis de construire : démarches complètes',
    description: 'Guide étape par étape pour obtenir votre permis de construire : documents, délais, recours et conseils pratiques',
    category: 'reglementation',
    tags: ['permis de construire', 'urbanisme', 'démarches', 'administration', 'autorisations'],
    lastUpdated: '2024-01-10',
    difficulty: 'intermediate',
    estimatedTime: '12 min',
    readTime: '10 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Permis de construire 2024 : Guide complet des démarches | Progineer',
      metaDescription: 'Obtenez votre permis de construire facilement : dossier, délais, coûts, recours. Guide complet avec checklist et conseils d\'expert.',
      keywords: ['permis de construire', 'dossier permis', 'urbanisme', 'PLU', 'déclaration travaux', 'mairie'],
      canonicalUrl: 'https://progineer.fr/workspace/guides/permis-construire'
    },
    content: `Guide exhaustif pour naviguer dans les démarches administratives du permis de construire. Toutes les étapes, documents requis et conseils pour éviter les pièges.`,
    sections: [
      {
        id: 'contexte',
        title: 'Quand faut-il un permis de construire ?',
        content: 'Le permis de construire est obligatoire selon la surface et la nature des travaux. Comprendre les seuils pour éviter les erreurs.',
        subsections: [
          {
            id: 'seuils-obligatoires',
            title: 'Seuils d\'obligation',
            content: 'Construction neuve > 20 m² en zone non urbaine, > 40 m² en zone urbaine avec PLU. Extension > 40 m² ou dépassant 150 m² au total.'
          },
          {
            id: 'cas-particuliers',
            title: 'Cas particuliers',
            content: 'Piscines > 100 m², abris de jardin > 20 m², changement de destination, modifications de façade en secteur protégé.'
          }
        ]
      },
      {
        id: 'constitution-dossier',
        title: 'Constitution du dossier',
        content: 'Le dossier comprend plusieurs formulaires et plans obligatoires selon la nature du projet.',
        subsections: [
          {
            id: 'cerfa',
            title: 'Formulaires CERFA',
            content: 'CERFA 13406*07 pour maison individuelle, 13409*07 pour autres constructions. Notices explicatives disponibles.'
          },
          {
            id: 'plans-obligatoires',
            title: 'Plans et documents',
            content: 'Plan de situation, plan de masse, plans des façades et toitures, coupe du terrain, notice descriptive, photos.'
          },
          {
            id: 'documents-complementaires',
            title: 'Pièces complémentaires',
            content: 'Étude thermique RT2012/RE2020, étude de sol si nécessaire, volet paysager selon localisation.'
          }
        ]
      },
      {
        id: 'depot-instruction',
        title: 'Dépôt et instruction',
        content: 'Modalités de dépôt et processus d\'instruction par les services d\'urbanisme.',
        subsections: [
          {
            id: 'depot-dossier',
            title: 'Modalités de dépôt',
            content: 'Dépôt en mairie par courrier recommandé ou directement. 4 exemplaires du dossier complet. Récépissé de dépôt obligatoire.'
          },
          {
            id: 'delais-instruction',
            title: 'Délais d\'instruction',
            content: '2 mois pour maison individuelle, 3 mois pour autres projets. Délai majoré en secteur protégé ou si consultation ABF.'
          },
          {
            id: 'silence-administration',
            title: 'Silence de l\'administration',
            content: 'Absence de réponse dans les délais = accord tacite. Demander attestation de non-opposition pour sécuriser.'
          }
        ]
      },
      {
        id: 'apres-obtention',
        title: 'Après l\'obtention du permis',
        content: 'Les obligations une fois le permis de construire obtenu.',
        subsections: [
          {
            id: 'affichage-panneau',
            title: 'Affichage sur le terrain',
            content: 'Panneau obligatoire visible de la voie publique pendant toute la durée des travaux. Modèle réglementaire à respecter.'
          },
          {
            id: 'validite-permis',
            title: 'Validité et péremption',
            content: 'Permis valable 3 ans, renouvelable 2 fois 1 an. Commencement des travaux obligatoire pour maintenir la validité.'
          },
          {
            id: 'modifications-travaux',
            title: 'Modifications en cours de travaux',
            content: 'Permis modificatif si changements importants. Déclaration préalable pour modifications mineures.'
          }
        ]
      }
    ],
    relatedGuides: ['qui-faire-appel', 'terrain-constructible', 'declaration-prealable'],
    downloadUrl: '/resources/guides/permis-construire.pdf',
    fileSize: '1.8 Mo'
  },
  {
    id: 'budget-construction',
    type: 'guide',
    title: 'Établir son budget de construction',
    description: 'Méthode complète pour estimer et optimiser le budget de votre projet : coûts, financement, imprévus et conseils',
    category: 'preparation',
    tags: ['budget', 'coût construction', 'financement', 'devis', 'estimation', 'prêt'],
    lastUpdated: '2024-01-12',
    difficulty: 'intermediate',
    estimatedTime: '15 min',
    readTime: '12 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Budget construction 2024 : Guide complet d\'estimation | Progineer',
      metaDescription: 'Calculez précisément votre budget de construction : coûts au m², financement, imprévus. Guide avec simulateur et conseils d\'expert.',
      keywords: ['budget construction', 'coût construction', 'prix maison', 'financement travaux', 'estimation'],
      canonicalUrl: 'https://progineer.fr/workspace/guides/budget-construction'
    },
    content: `Maîtrisez parfaitement votre budget de construction avec cette méthode éprouvée. Estimations précises, gestion des imprévus et optimisation des coûts.`,
    sections: [
      {
        id: 'estimation-globale',
        title: 'Estimation globale du projet',
        content: 'Méthode pour estimer le coût total de votre construction en partant des données de marché actuelles.',
        subsections: [
          {
            id: 'prix-m2-reference',
            title: 'Prix de référence au m²',
            content: 'Construction traditionnelle : 1200-1600€/m². Maison contemporaine : 1600-2200€/m². Maison passive : 2000-2800€/m².'
          },
          {
            id: 'facteurs-variation',
            title: 'Facteurs de variation',
            content: 'Région, qualité des matériaux, complexité architecturale, niveau de finition, accessibilité du terrain.'
          }
        ]
      },
      {
        id: 'postes-budget',
        title: 'Répartition détaillée du budget',
        content: 'Détail des coûts par poste pour une vision claire de la répartition budgétaire.',
        subsections: [
          {
            id: 'cout-terrain',
            title: 'Acquisition du terrain (20-30%)',
            content: 'Prix d\'achat, frais de notaire (7-8%), taxes, viabilisation si nécessaire (5000-15000€).'
          },
          {
            id: 'cout-construction',
            title: 'Construction (50-60%)',
            content: 'Gros œuvre (40% du bâti), second œuvre (35%), finitions (25%). Hors taxes et frais annexes.'
          },
          {
            id: 'frais-annexes',
            title: 'Frais annexes (15-20%)',
            content: 'Études (3-5%), assurances (1-2%), raccordements (2-4%), aménagements extérieurs (5-8%).'
          }
        ]
      },
      {
        id: 'financement',
        title: 'Solutions de financement',
        content: 'Panorama des solutions pour financer votre projet de construction.',
        subsections: [
          {
            id: 'pret-immobilier',
            title: 'Prêt immobilier classique',
            content: 'Jusqu\'à 80% du projet, taux fixe ou variable. Apport personnel minimum 20%. Assurance emprunteur obligatoire.'
          },
          {
            id: 'prets-aides',
            title: 'Prêts aidés',
            content: 'PTZ pour primo-accédants, prêt Action Logement, prêt conventionné. Conditions de ressources et de localisation.'
          },
          {
            id: 'aides-subventions',
            title: 'Aides et subventions',
            content: 'MaPrimeRénov\' pour rénovation énergétique, aides locales, défiscalisation (Pinel, LMNP).'
          }
        ]
      },
      {
        id: 'gestion-imprevus',
        title: 'Anticiper et gérer les imprévus',
        content: 'Stratégies pour prévoir et maîtriser les dépassements budgétaires.',
        subsections: [
          {
            id: 'marge-securite',
            title: 'Marge de sécurité',
            content: 'Prévoir 10-15% d\'imprévus minimum. 20% pour rénovation lourde. Dépassements fréquents : aléas techniques, modifications en cours.'
          },
          {
            id: 'suivi-budget',
            title: 'Suivi budgétaire',
            content: 'Tableau de bord mensuel, validation des avenants, contrôle des factures, anticipation des dérives.'
          }
        ]
      }
    ],
    relatedGuides: ['terrain-constructible', 'assurances-construction', 'financement-travaux'],
    downloadUrl: '/resources/guides/budget-construction.pdf',
    fileSize: '2.1 Mo'
  },
  {
    id: 'terrain-constructible',
    type: 'guide',
    title: 'Choisir son terrain constructible',
    description: 'Critères essentiels pour bien choisir votre terrain : réglementation, géotechnique, réseaux, exposition et négociation',
    category: 'preparation',
    tags: ['terrain', 'constructible', 'PLU', 'géotechnique', 'viabilisation', 'exposition'],
    lastUpdated: '2024-01-08',
    difficulty: 'intermediate',
    estimatedTime: '14 min',
    readTime: '11 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Choisir son terrain constructible : Guide complet 2024 | Progineer',
      metaDescription: 'Tous les critères pour bien choisir votre terrain : réglementation, sol, réseaux, orientation. Guide avec checklist et conseils d\'expert.',
      keywords: ['terrain constructible', 'PLU', 'géotechnique', 'viabilisation', 'exposition terrain', 'achat terrain'],
      canonicalUrl: 'https://progineer.fr/workspace/guides/terrain-constructible'
    },
    content: `Guide expert pour choisir le terrain idéal. Tous les critères techniques, réglementaires et pratiques pour éviter les mauvaises surprises.`,
    sections: [
      {
        id: 'criteres-reglementaires',
        title: 'Vérifications réglementaires essentielles',
        content: 'Avant tout achat, vérifier la constructibilité et les règles d\'urbanisme applicables.',
        subsections: [
          {
            id: 'plu-reglement',
            title: 'PLU et règlement d\'urbanisme',
            content: 'Consulter le PLU en mairie : zonage, coefficient d\'occupation des sols, règles d\'implantation, hauteur maximale.'
          },
          {
            id: 'servitudes',
            title: 'Servitudes et contraintes',
            content: 'Servitudes de passage, alignement, zones protégées, périmètre monuments historiques, risques naturels.'
          }
        ]
      },
      {
        id: 'etude-sol',
        title: 'Étude géotechnique du terrain',
        content: 'L\'étude de sol est cruciale pour adapter les fondations et éviter les sinistres.',
        subsections: [
          {
            id: 'types-etudes',
            title: 'Types d\'études de sol',
            content: 'G1 (étude préliminaire), G2 (avant-projet et projet), G5 (diagnostic). G2 obligatoire depuis 2020.'
          },
          {
            id: 'interpretation-resultats',
            title: 'Interpréter les résultats',
            content: 'Nature du sol, portance, niveau de la nappe, retrait-gonflement argiles, risque sismique. Impact sur les fondations.'
          }
        ]
      },
      {
        id: 'viabilisation-reseaux',
        title: 'Viabilisation et raccordements',
        content: 'Vérifier la disponibilité et le coût des raccordements aux réseaux.',
        subsections: [
          {
            id: 'reseaux-obligatoires',
            title: 'Réseaux à vérifier',
            content: 'Électricité, eau potable, assainissement, télécommunications. Gaz si disponible. Distance et coût de raccordement.'
          },
          {
            id: 'cout-viabilisation',
            title: 'Coût de la viabilisation',
            content: '5000-20000€ selon l\'éloignement des réseaux. Négocier la prise en charge avec le vendeur si possible.'
          }
        ]
      },
      {
        id: 'exposition-environnement',
        title: 'Exposition et environnement',
        content: 'L\'orientation et l\'environnement impactent le confort et les performances énergétiques.',
        subsections: [
          {
            id: 'orientation-solaire',
            title: 'Orientation optimale',
            content: 'Privilégier exposition sud/sud-est pour les pièces de vie. Éviter nord pour les chambres. Impact sur le chauffage.'
          },
          {
            id: 'environnement-proche',
            title: 'Environnement et nuisances',
            content: 'Voisinage, évolution possible du quartier, nuisances sonores, pollution. Visiter à différents moments.'
          }
        ]
      },
      {
        id: 'negociation-achat',
        title: 'Négociation et finalisation',
        content: 'Conseils pour négocier le prix et sécuriser l\'achat.',
        subsections: [
          {
            id: 'prix-marche',
            title: 'Évaluation du prix',
            content: 'Comparer avec les ventes récentes, consulter les notaires, prendre en compte les coûts de viabilisation.'
          },
          {
            id: 'conditions-suspensives',
            title: 'Conditions suspensives',
            content: 'Obtention du permis de construire, financement, étude de sol favorable. Délais de réalisation à négocier.'
          }
        ]
      }
    ],
    relatedGuides: ['permis-construire', 'budget-construction', 'etude-sol'],
    downloadUrl: '/resources/guides/terrain-constructible.pdf',
    fileSize: '1.6 Mo'
  },
  {
    id: 're2020-guide',
    type: 'guide',
    title: 'Comprendre la RE2020',
    description: 'Guide complet de la réglementation environnementale 2020 : exigences, calculs, solutions techniques et impact sur votre projet',
    category: 'reglementation',
    tags: ['RE2020', 'réglementation', 'environnement', 'thermique', 'carbone', 'performance'],
    lastUpdated: '2024-01-20',
    difficulty: 'advanced',
    estimatedTime: '18 min',
    readTime: '15 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'RE2020 : Guide complet de la réglementation environnementale | Progineer',
      metaDescription: 'Maîtrisez la RE2020 : exigences, indicateurs Bbio, Cep, Ic. Solutions techniques et conseils pour réussir votre projet.',
      keywords: ['RE2020', 'réglementation environnementale', 'Bbio', 'Cep', 'Ic construction', 'performance énergétique'],
      canonicalUrl: 'https://progineer.fr/workspace/guides/re2020-guide'
    },
    content: `Maîtrisez la Réglementation Environnementale 2020 qui révolutionne la construction. Guide technique complet avec solutions pratiques.`,
    sections: [
      {
        id: 'principes-re2020',
        title: 'Principes et objectifs de la RE2020',
        content: 'La RE2020 remplace la RT2012 avec des exigences renforcées sur l\'environnement et le confort d\'été.',
        subsections: [
          {
            id: 'evolution-rt2012',
            title: 'Évolutions par rapport à la RT2012',
            content: 'Nouvel indicateur carbone, confort d\'été renforcé, exigences énergie renouvelable, seuils plus contraignants.'
          },
          {
            id: 'calendrier-application',
            title: 'Calendrier d\'application',
            content: 'Depuis janvier 2022 pour le résidentiel, 2023 pour le tertiaire. Renforcement progressif jusqu\'en 2031.'
          }
        ]
      },
      {
        id: 'indicateurs',
        title: 'Les 6 indicateurs de la RE2020',
        content: 'Six indicateurs encadrent la performance des bâtiments neufs.',
        subsections: [
          {
            id: 'bbio',
            title: 'Bbio : Besoin bioclimatique',
            content: 'Qualité de l\'enveloppe et de la conception. Bbio ≤ Bbiomax. Coefficient selon la zone climatique et l\'altitude.'
          },
          {
            id: 'cep',
            title: 'Cep : Consommation d\'énergie primaire',
            content: 'Consommation pour chauffage, refroidissement, ECS, éclairage, auxiliaires. Cep ≤ Cepmax et Cep,nr ≤ Cep,nr max.'
          },
          {
            id: 'impact-carbone',
            title: 'Ic : Impact carbone',
            content: 'Émissions de GES sur le cycle de vie : construction (Ic construction) et exploitation (Ic énergie). Données environnementales INIES.'
          },
          {
            id: 'confort-ete',
            title: 'DH : Degrés-heures d\'inconfort',
            content: 'Nombre d\'heures où la température dépasse les seuils de confort. DH ≤ DHmax pour limiter la climatisation.'
          }
        ]
      },
      {
        id: 'solutions-techniques',
        title: 'Solutions techniques pour respecter la RE2020',
        content: 'Stratégies et technologies pour atteindre les exigences.',
        subsections: [
          {
            id: 'isolation-renforcee',
            title: 'Isolation renforcée',
            content: 'Murs : R ≥ 4-5 m².K/W, toiture : R ≥ 8-10 m².K/W. Traitement des ponts thermiques, étanchéité à l\'air.'
          },
          {
            id: 'systemes-energies',
            title: 'Systèmes et énergies',
            content: 'Pompes à chaleur, poêles à bois, chauffe-eau thermodynamique, panneaux solaires. Éviter le gaz et l\'électricité directe.'
          },
          {
            id: 'materiaux-biosources',
            title: 'Matériaux biosourcés',
            content: 'Isolation chanvre, ouate de cellulose, fibre de bois. Structure bois. Réduction de l\'impact carbone construction.'
          }
        ]
      },
      {
        id: 'strategies-conformite',
        title: 'Stratégies de mise en conformité',
        content: 'Approches pour optimiser votre projet selon la RE2020.',
        subsections: [
          {
            id: 'conception-bioclimatique',
            title: 'Conception bioclimatique',
            content: 'Orientation optimale, masques solaires, inertie thermique, ventilation naturelle. Base de la performance énergétique.'
          },
          {
            id: 'choix-equipements',
            title: 'Choix des équipements',
            content: 'Privilégier les énergies renouvelables, équipements performants, régulation avancée. Éviter les systèmes fossiles.'
          }
        ]
      }
    ],
    relatedGuides: ['isolation-thermique', 'pompes-chaleur', 'construction-bois'],
    downloadUrl: '/resources/guides/re2020-guide.pdf',
    fileSize: '2.4 Mo'
  },
  {
    id: 'assurances-construction',
    type: 'guide',
    title: 'Assurances construction : protection complète',
    description: 'Guide complet des assurances obligatoires et optionnelles pour votre projet de construction : responsabilité, dommages-ouvrage, protection juridique',
    category: 'preparation',
    tags: ['assurances', 'responsabilité décennale', 'dommages-ouvrage', 'protection juridique', 'sinistres'],
    lastUpdated: '2024-01-22',
    difficulty: 'intermediate',
    estimatedTime: '16 min',
    readTime: '13 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Assurances construction 2024 : Guide complet protection | Progineer',
      metaDescription: 'Maîtrisez les assurances construction : responsabilité décennale, dommages-ouvrage, TRC. Guide complet avec tarifs et conseils.',
      keywords: ['assurances construction', 'responsabilité décennale', 'dommages-ouvrage', 'TRC', 'protection juridique'],
      canonicalUrl: 'https://progineer.fr/workspace/guides/assurances-construction'
    },
    content: `Sécurisez votre projet de construction avec les bonnes assurances. Guide exhaustif des protections obligatoires et recommandées.`,
    sections: [
      {
        id: 'assurances-obligatoires',
        title: 'Assurances obligatoires',
        content: 'Les assurances que la loi impose aux professionnels et aux maîtres d\'ouvrage.',
        subsections: [
          {
            id: 'responsabilite-decennale',
            title: 'Responsabilité décennale',
            content: 'Obligatoire pour tous les professionnels du bâtiment. Couvre les dommages compromettant la solidité ou l\'habitabilité pendant 10 ans.'
          },
          {
            id: 'dommages-ouvrage',
            title: 'Assurance dommages-ouvrage',
            content: 'Obligatoire pour le maître d\'ouvrage. Préfinancement des réparations sans recherche de responsabilité. 2-4% du coût des travaux.'
          }
        ]
      },
      {
        id: 'assurances-complementaires',
        title: 'Assurances complémentaires',
        content: 'Protections optionnelles mais fortement recommandées.',
        subsections: [
          {
            id: 'trc-assurance',
            title: 'TRC - Tous Risques Chantier',
            content: 'Couvre les dommages matériels pendant les travaux : incendie, vol, intempéries, vandalisme. 0,5-1% du montant des travaux.'
          },
          {
            id: 'protection-juridique',
            title: 'Protection juridique',
            content: 'Prise en charge des frais de procédure en cas de litige. Assistance juridique, expertise, frais d\'avocat.'
          }
        ]
      },
      {
        id: 'sinistres-procedures',
        title: 'Gestion des sinistres',
        content: 'Procédures à suivre en cas de problème sur le chantier ou après réception.',
        subsections: [
          {
            id: 'declaration-sinistre',
            title: 'Déclaration et premiers réflexes',
            content: 'Déclaration immédiate à l\'assureur, préservation des preuves, expertise contradictoire, réserves sur les PV.'
          },
          {
            id: 'recours-procedures',
            title: 'Recours et procédures',
            content: 'Mise en jeu des garanties, expertise judiciaire si nécessaire, transaction ou procès selon les cas.'
          }
        ]
      }
    ],
    relatedGuides: ['budget-construction', 'reception-travaux', 'gestion-chantier'],
    downloadUrl: '/resources/guides/assurances-construction.pdf',
    fileSize: '1.9 Mo'
  },
  {
    id: 'isolation-thermique',
    type: 'guide',
    title: 'Isolation thermique performante',
    description: 'Guide technique complet de l\'isolation : matériaux, techniques de pose, performance thermique et conformité RE2020',
    category: 'technique',
    tags: ['isolation', 'thermique', 'matériaux', 'performance', 'ponts thermiques', 'étanchéité'],
    lastUpdated: '2024-01-25',
    difficulty: 'advanced',
    estimatedTime: '20 min',
    readTime: '16 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Isolation thermique 2024 : Guide technique complet | Progineer',
      metaDescription: 'Maîtrisez l\'isolation thermique : matériaux, techniques, performance. Guide complet pour respecter la RE2020 et optimiser le confort.',
      keywords: ['isolation thermique', 'matériaux isolants', 'ponts thermiques', 'étanchéité air', 'RE2020'],
      canonicalUrl: 'https://progineer.fr/workspace/guides/isolation-thermique'
    },
    content: `Guide technique approfondi pour réussir l\'isolation thermique. Matériaux, techniques et mise en œuvre pour une performance optimale.`,
    sections: [
      {
        id: 'principes-isolation',
        title: 'Principes de l\'isolation thermique',
        content: 'Comprendre les mécanismes de transfert thermique pour optimiser l\'isolation.',
        subsections: [
          {
            id: 'transferts-thermiques',
            title: 'Les 3 modes de transfert',
            content: 'Conduction (à travers les matériaux), convection (mouvements d\'air), rayonnement (infrarouge). Stratégies d\'isolation spécifiques.'
          },
          {
            id: 'resistance-thermique',
            title: 'Résistance thermique R',
            content: 'R = épaisseur / conductivité (λ). Plus R est élevé, meilleure est l\'isolation. Résistances en série s\'additionnent.'
          }
        ]
      },
      {
        id: 'materiaux-isolants',
        title: 'Matériaux isolants : choix et performance',
        content: 'Panorama des isolants selon leurs caractéristiques et applications.',
        subsections: [
          {
            id: 'isolants-mineraux',
            title: 'Isolants minéraux',
            content: 'Laine de verre (λ=0,030-0,040), laine de roche (λ=0,034-0,044), perlite, vermiculite. Bon rapport qualité/prix, incombustible.'
          },
          {
            id: 'isolants-synthetiques',
            title: 'Isolants synthétiques',
            content: 'Polystyrène expansé PSE (λ=0,030-0,038), polyuréthane PUR (λ=0,022-0,030). Performance élevée, résistance à l\'humidité.'
          },
          {
            id: 'isolants-naturels',
            title: 'Isolants naturels',
            content: 'Fibre de bois (λ=0,036-0,050), chanvre (λ=0,039-0,060), ouate de cellulose (λ=0,038-0,042). Écologiques, régulation hygrométrique.'
          }
        ]
      },
      {
        id: 'techniques-pose',
        title: 'Techniques de pose et mise en œuvre',
        content: 'Méthodes de pose pour garantir l\'efficacité de l\'isolation.',
        subsections: [
          {
            id: 'isolation-repartie',
            title: 'Isolation répartie',
            content: 'Blocs béton cellulaire, briques monomur. Isolation intégrée au matériau porteur. Simplicité de mise en œuvre.'
          },
          {
            id: 'isolation-interieure',
            title: 'Isolation par l\'intérieur (ITI)',
            content: 'Complexes de doublage, ossatures métalliques, contre-cloisons. Moins coûteuse, mais ponts thermiques et perte de surface.'
          },
          {
            id: 'isolation-exterieure',
            title: 'Isolation par l\'extérieur (ITE)',
            content: 'Enduit sur isolant, bardage ventilé, vêtures. Traitement optimal des ponts thermiques, préservation de l\'inertie.'
          }
        ]
      },
      {
        id: 'ponts-thermiques',
        title: 'Traitement des ponts thermiques',
        content: 'Identifier et traiter les ponts thermiques pour une isolation performante.',
        subsections: [
          {
            id: 'types-ponts-thermiques',
            title: 'Types de ponts thermiques',
            content: 'Ponts linéiques (jonctions), ponts ponctuels (fixations), ponts structurels (balcons). Impact sur les déperditions et condensations.'
          },
          {
            id: 'solutions-traitement',
            title: 'Solutions de traitement',
            content: 'Rupteurs de ponts thermiques, doublages localisés, conception architecturale adaptée. Calculs selon méthode réglementaire.'
          }
        ]
      }
    ],
    relatedGuides: ['re2020-guide', 'etancheite-air', 'ventilation-performante'],
    downloadUrl: '/resources/guides/isolation-thermique.pdf',
    fileSize: '2.8 Mo'
  },
  {
    id: 'construction-bois',
    type: 'guide',
    title: 'Construction bois moderne',
    description: 'Guide complet de la construction bois : techniques, avantages, performance thermique, durabilité et réglementation incendie',
    category: 'technique',
    tags: ['construction bois', 'ossature bois', 'CLT', 'isolation', 'durabilité', 'écologique'],
    lastUpdated: '2024-02-07',
    difficulty: 'advanced',
    estimatedTime: '24 min',
    readTime: '19 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Construction bois 2024 : Guide technique complet | Progineer',
      metaDescription: 'Maîtrisez la construction bois moderne : ossature, CLT, isolation, durabilité. Guide technique pour projet écologique performant.',
      keywords: ['construction bois', 'ossature bois', 'CLT', 'maison bois', 'écologique', 'durabilité'],
      canonicalUrl: 'https://progineer.fr/workspace/guides/construction-bois'
    },
    content: `Guide technique de la construction bois moderne. Techniques innovantes, performance et durabilité pour un habitat écologique.`,
    sections: [
      {
        id: 'avantages-bois',
        title: 'Avantages de la construction bois',
        content: 'Bénéfices environnementaux, techniques et économiques du bois construction.',
        subsections: [
          {
            id: 'impact-environnemental',
            title: 'Impact environnemental',
            content: 'Stockage carbone, énergie grise réduite, ressource renouvelable. Bilan carbone favorable selon ACV.'
          },
          {
            id: 'performances-techniques',
            title: 'Performances techniques',
            content: 'Résistance mécanique élevée, légèreté, rapidité de mise en œuvre. Isolation intégrée possible.'
          },
          {
            id: 'confort-habitant',
            title: 'Confort des habitants',
            content: 'Régulation hygrométrique naturelle, ambiance chaleureuse, acoustique maîtrisée si bien conçue.'
          }
        ]
      },
      {
        id: 'techniques-constructives',
        title: 'Techniques constructives',
        content: 'Panorama des systèmes constructifs bois contemporains.',
        subsections: [
          {
            id: 'ossature-bois',
            title: 'Ossature bois (MOB)',
            content: 'Structure poteaux-poutres, remplissage isolant, contreventement. Technique la plus répandue, économique.'
          },
          {
            id: 'bois-massif-clt',
            title: 'Bois massif et CLT',
            content: 'Panneaux contrecollés, madriers, poteaux-poutres. Esthétique du bois apparent, performance structurelle.'
          },
          {
            id: 'hybride-bois-beton',
            title: 'Construction hybride',
            content: 'Association bois-béton, bois-acier. Optimisation selon contraintes : portée, charge, acoustique.'
          }
        ]
      },
      {
        id: 'conception-thermique',
        title: 'Conception et performance thermique',
        content: 'Optimisation énergétique spécifique aux constructions bois.',
        subsections: [
          {
            id: 'isolation-ossature',
            title: 'Isolation de l\'ossature',
            content: 'Isolation entre montants, doublage intérieur, isolation extérieure. Traitement ponts thermiques linéaires.'
          },
          {
            id: 'etancheite-air',
            title: 'Étanchéité à l\'air',
            content: 'Membrane d\'étanchéité, traitement jonctions, mesure infiltrométrie. Objectif ≤ 0,6 m³/h.m² en maison passive.'
          },
          {
            id: 'inertie-thermique',
            title: 'Inertie thermique',
            content: 'Compensation faible inertie bois : dalle béton, cloisons lourdes, masse thermique intérieure.'
          }
        ]
      },
      {
        id: 'durabilite-protection',
        title: 'Durabilité et protection',
        content: 'Assurer la pérennité des constructions bois face aux agressions.',
        subsections: [
          {
            id: 'protection-humidite',
            title: 'Protection contre l\'humidité',
            content: 'Conception : débords toiture, soubassement, ventilation. Barrières pare-vapeur et pare-pluie adaptées.'
          },
          {
            id: 'traitement-bois',
            title: 'Traitement du bois',
            content: 'Classe d\'emploi selon exposition, traitement insecticide/fongicide. Essences naturellement durables.'
          },
          {
            id: 'reglementation-incendie',
            title: 'Réglementation incendie',
            content: 'Comportement au feu, degré coupe-feu, protection par plaques BA13. Possibilité construction R+3 en ERP.'
          }
        ]
      }
    ],
    relatedGuides: ['isolation-thermique', 're2020-guide', 'etude-sol'],
    downloadUrl: '/resources/guides/construction-bois.pdf',
    fileSize: '3.3 Mo'
  },
  {
    id: 'renovation-energetique',
    type: 'guide',
    title: 'Rénovation énergétique performante',
    description: 'Guide complet de la rénovation énergétique : audit, travaux prioritaires, aides financières et performance globale',
    category: 'reglementation',
    tags: ['rénovation énergétique', 'audit énergétique', 'isolation', 'chauffage', 'aides', 'BBC'],
    lastUpdated: '2024-02-10',
    difficulty: 'intermediate',
    estimatedTime: '23 min',
    readTime: '18 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Rénovation énergétique 2024 : Guide complet performance | Progineer',
      metaDescription: 'Guide complet rénovation énergétique : audit, travaux, aides MaPrimeRénov\'. Atteignez la performance BBC rénovation.',
      keywords: ['rénovation énergétique', 'audit énergétique', 'BBC rénovation', 'MaPrimeRénov', 'isolation'],
      canonicalUrl: 'https://progineer.fr/workspace/guides/renovation-energetique'
    },
    content: `Guide exhaustif pour réussir sa rénovation énergétique. De l\'audit aux travaux, en passant par les aides financières.`,
    sections: [
      {
        id: 'audit-energetique',
        title: 'Audit énergétique préalable',
        content: 'Diagnostic approfondi pour identifier les gisements d\'économies d\'énergie.',
        subsections: [
          {
            id: 'bilan-thermique',
            title: 'Bilan thermique du bâti',
            content: 'Déperditions par paroi, ponts thermiques, perméabilité à l\'air. Thermographie infrarouge, test d\'infiltrométrie.'
          },
          {
            id: 'analyse-equipements',
            title: 'Analyse des équipements',
            content: 'Rendement chauffage, ECS, ventilation, éclairage. Consommations réelles vs théoriques. Potentiel d\'amélioration.'
          },
          {
            id: 'scenarios-travaux',
            title: 'Scénarios de travaux',
            content: 'Bouquets de travaux, ordre de priorité, gains énergétiques attendus. Simulation coûts/bénéfices sur 20 ans.'
          }
        ]
      },
      {
        id: 'travaux-prioritaires',
        title: 'Travaux prioritaires par ordre d\'efficacité',
        content: 'Hiérarchisation des interventions pour optimiser le rapport coût/efficacité.',
        subsections: [
          {
            id: 'isolation-prioritaire',
            title: '1. Isolation de l\'enveloppe',
            content: 'Combles, murs, planchers bas. Traitement ponts thermiques. Jusqu\'à 30% d\'économies. ROI 5-10 ans.'
          },
          {
            id: 'chauffage-performant',
            title: '2. Système de chauffage',
            content: 'Remplacement chaudière ancienne, pompe à chaleur, poêle à bois. 20-40% d\'économies selon système.'
          },
          {
            id: 'ventilation-etancheite',
            title: '3. Ventilation et étanchéité',
            content: 'VMC performante, traitement infiltrations. Amélioration qualité air et réduction déperditions.'
          },
          {
            id: 'menuiseries-ouvrants',
            title: '4. Menuiseries et ouvrants',
            content: 'Fenêtres double/triple vitrage, volets, portes. 10-15% d\'économies. Impact confort important.'
          }
        ]
      },
      {
        id: 'performance-globale',
        title: 'Viser la performance globale',
        content: 'Approche globale pour atteindre les labels de performance énergétique.',
        subsections: [
          {
            id: 'labels-renovation',
            title: 'Labels de rénovation',
            content: 'BBC Effinergie Rénovation, HPE Rénovation, BEPOS Rénovation. Critères de performance, contrôles.'
          },
          {
            id: 'approche-systémique',
            title: 'Approche systémique',
            content: 'Interactions entre composants, équilibrage performance/coût. Éviter travaux contre-productifs.'
          }
        ]
      },
      {
        id: 'pilotage-projet',
        title: 'Pilotage du projet de rénovation',
        content: 'Organisation et suivi pour garantir la qualité et les performances.',
        subsections: [
          {
            id: 'phase-conception',
            title: 'Phase de conception',
            content: 'Maîtrise d\'œuvre spécialisée, bureau d\'études thermiques, AMO financements. Conception intégrée.'
          },
          {
            id: 'execution-controle',
            title: 'Exécution et contrôle',
            content: 'Entreprises RGE, points d\'arrêt qualité, tests intermédiaires. Respect des prescriptions techniques.'
          },
          {
            id: 'commissionnement',
            title: 'Commissionnement',
            content: 'Tests de performance, mesures consommations, optimisation réglages. Suivi post-travaux 1-2 ans.'
          }
        ]
      }
    ],
    relatedGuides: ['financement-travaux', 'isolation-thermique', 'pompes-chaleur'],
    downloadUrl: '/resources/guides/renovation-energetique.pdf',
    fileSize: '2.9 Mo'
  },
  {
    id: 'domotique-maison-connectee',
    type: 'guide',
    title: 'Domotique et maison connectée',
    description: 'Guide complet de la domotique moderne : systèmes, protocoles, installation, sécurité et optimisation énergétique intelligente',
    category: 'technique',
    tags: ['domotique', 'maison connectée', 'smart home', 'automation', 'sécurité', 'énergie'],
    lastUpdated: '2024-02-12',
    difficulty: 'advanced',
    estimatedTime: '25 min',
    readTime: '20 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Domotique 2024 : Guide maison connectée intelligente | Progineer',
      metaDescription: 'Guide complet domotique moderne : systèmes, installation, sécurité, économies énergie. Créez votre maison intelligente.',
      keywords: ['domotique', 'maison connectée', 'smart home', 'automation', 'KNX', 'Z-Wave'],
      canonicalUrl: 'https://progineer.fr/workspace/guides/domotique-maison-connectee'
    },
    content: `Maîtrisez la domotique moderne pour créer une maison intelligente. Technologies, installation et optimisation énergétique.`,
    sections: [
      {
        id: 'introduction-domotique',
        title: 'Introduction à la domotique moderne',
        content: 'Comprendre les enjeux et bénéfices de la maison connectée.',
        subsections: [
          {
            id: 'definition-enjeux',
            title: 'Définition et enjeux',
            content: 'Automatisation, contrôle à distance, optimisation énergétique, sécurité, confort. Évolution vers l\'IoT domestique.'
          },
          {
            id: 'benefices-utilisateurs',
            title: 'Bénéfices pour les utilisateurs',
            content: 'Économies d\'énergie 10-30%, confort d\'usage, sécurité renforcée, valeur patrimoniale. Adaptation PMR/vieillissement.'
          }
        ]
      },
      {
        id: 'technologies-protocoles',
        title: 'Technologies et protocoles',
        content: 'Panorama des solutions techniques disponibles.',
        subsections: [
          {
            id: 'protocoles-filaires',
            title: 'Protocoles filaires',
            content: 'KNX/EIB (standard européen), bus propriétaires. Fiabilité maximale, installation en construction neuve principalement.'
          },
          {
            id: 'protocoles-radio',
            title: 'Protocoles radio',
            content: 'Z-Wave, Zigbee, WiFi, EnOcean. Installation simplifiée, évolutivité, adaptation rénovation. Portée et interférences à considérer.'
          },
          {
            id: 'solutions-hybrides',
            title: 'Solutions hybrides',
            content: 'Combinaison filaire/radio, passerelles d\'intégration, cloud/local. Optimisation selon contraintes et besoins.'
          }
        ]
      },
      {
        id: 'conception-installation',
        title: 'Conception et installation',
        content: 'Méthodes pour concevoir et installer un système domotique efficace.',
        subsections: [
          {
            id: 'analyse-besoins',
            title: 'Analyse des besoins',
            content: 'Cahier des charges fonctionnel, usages prioritaires, évolutivité. Budget et complexité selon ambitions.'
          },
          {
            id: 'architecture-systeme',
            title: 'Architecture du système',
            content: 'Centrales de commande, actionneurs, capteurs, interfaces utilisateur. Redondance et fiabilité critiques.'
          },
          {
            id: 'installation-configuration',
            title: 'Installation et configuration',
            content: 'Câblage, paramétrage, tests, formation utilisateur. Documenter pour maintenance future.'
          }
        ]
      },
      {
        id: 'applications-pratiques',
        title: 'Applications pratiques',
        content: 'Domaines d\'application et fonctionnalités avancées.',
        subsections: [
          {
            id: 'gestion-energie',
            title: 'Gestion énergétique',
            content: 'Pilotage chauffage, éclairage, volets. Optimisation selon occupation, tarifs, production solaire. Smart grid.'
          },
          {
            id: 'securite-surveillance',
            title: 'Sécurité et surveillance',
            content: 'Alarme intrusion, vidéosurveillance, contrôle d\'accès. Simulation de présence, alertes déportées.'
          },
          {
            id: 'confort-ambiance',
            title: 'Confort et ambiance',
            content: 'Éclairage d\'ambiance, audio multiroom, climat zone par zone. Scénarios personnalisés selon activités.'
          }
        ]
      }
    ],
    relatedGuides: ['renovation-energetique', 'ventilation-performante', 'pompes-chaleur'],
    downloadUrl: '/resources/guides/domotique-maison-connectee.pdf',
    fileSize: '3.5 Mo'
  }
];

// Guides existants à maintenir (ceux qui existent déjà dans l'ancien système)
export const existingGuides = [
  {
    id: 'normes-parasismiques',
    title: 'Guide des normes parasismiques',
    category: 'technique'
  },
  {
    id: 'gestion-chantier',
    title: 'Méthodes de gestion de chantier',
    category: 'gestion'
  },
  {
    id: 'construction-ecologique',
    title: 'Construction écologique : principes et matériaux',
    category: 'technique'
  }
];

// Export de tous les guides
export const allGuides = [...mainGuides, ...additionalGuides, ...existingGuides];

// Statistiques des guides mis à jour
export const guidesStats = {
  totalGuides: mainGuides.length,
  publicGuides: mainGuides.filter(g => 'isPublic' in g && g.isPublic).length,
  categories: guideCategories.length,
  lastUpdate: '2024-02-12',
  popularGuides: ['qui-faire-appel', 'permis-construire', 'budget-construction', 're2020-guide', 'renovation-energetique'],
  recentlyAdded: ['domotique-maison-connectee', 'construction-bois', 'ventilation-performante', 'pompes-chaleur']
}; 