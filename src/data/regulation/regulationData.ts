import { RegulationDocument, WorkspaceCategory, RegulationType } from '@/types/workspace';
import { additionalDTUs } from './additionalDTUs';

// Catégories de réglementation enrichies
export const regulationCategories: WorkspaceCategory[] = [
  {
    id: 'dtu',
    name: 'Documents Techniques Unifiés',
    description: 'Tous les DTU par corps de métier avec règles détaillées',
    icon: 'FileText',
    color: 'blue',
    resourceCount: 180
  },
  {
    id: 'fire-safety',
    name: 'Sécurité Incendie',
    description: 'Réglementation incendie complète : ERP, IGH, habitations',
    icon: 'Flame',
    color: 'red',
    resourceCount: 47
  },
  {
    id: 'accessibility',
    name: 'Accessibilité PMR',
    description: 'Normes accessibilité handicap tous bâtiments',
    icon: 'Accessibility',
    color: 'green',
    resourceCount: 25
  },
  {
    id: 'thermal',
    name: 'Thermique RE2020',
    description: 'Réglementation environnementale et thermique',
    icon: 'Thermometer',
    color: 'orange',
    resourceCount: 15
  },
  {
    id: 'acoustic',
    name: 'Acoustique',
    description: 'Réglementation acoustique bâtiments et urbanisme',
    icon: 'Volume2',
    color: 'purple',
    resourceCount: 18
  },
  {
    id: 'seismic',
    name: 'Règles Parasismiques',
    description: 'Conception parasismique EC8 et PS92',
    icon: 'Activity',
    color: 'yellow',
    resourceCount: 12
  },
  {
    id: 'hygrothermal',
    name: 'Hygrométrie',
    description: 'Gestion humidité, ventilation, condensation',
    icon: 'Droplets',
    color: 'cyan',
    resourceCount: 10
  }
];

// ====== DTU FONDATIONS ======
export const dtuFoundations: RegulationDocument[] = [
  {
    id: 'dtu-13-1',
    type: 'regulation',
    title: 'NF DTU 13.1 - Travaux de fondations superficielles',
    description: 'Exécution des fondations superficielles en béton armé ou non armé',
    regulationType: 'dtu',
    reference: 'NF DTU 13.1',
    scope: 'Fondations superficielles : semelles, longrines, radiers',
    category: 'dtu',
    tags: ['fondations superficielles', 'semelles', 'béton armé', 'ancrage', 'radier'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    isPublic: true,
    isPremium: false,
    applicableFrom: '2017-03-01',
    keyRules: [
      {
        id: 'ancrage-minimum',
        title: 'Ancrage minimum des fondations',
        description: 'Ancrage minimum à 50 cm sous le niveau fini extérieur, hors gel selon zonage climatique. Zone H1: 50cm, Zone H2: 65cm, Zone H3: 85cm. En présence de nappe phréatique : ancrage sous niveau des plus basses eaux + 30 cm minimum',
        mandatory: true,
        exceptions: ['Étude géotechnique spécifique avec justifications', 'Fondations sur pieux ancrés hors gel', 'Protection thermique du sol (isolation périphérique)'],
        references: ['Article 5.2.1', 'Zonage climatique français', 'Carte des zones de gel']
      },
      {
        id: 'ferraillage-minimal',
        title: 'Ferraillage minimal des semelles',
        description: 'Armatures longitudinales ≥ 0,1% section béton dans chaque direction. Espacement ≤ 25 cm en partie courante, ≤ 20 cm en rives. Diamètre ≥ 8 mm pour HA, ≥ 6 mm pour treillis soudé. Armatures transversales obligatoires si L>2m',
        mandatory: true,
        references: ['Article 6.3', 'EC2 - Art 9.3', 'BAEL 91 révisé 99']
      },
      {
        id: 'resistance-caracteristique',
        title: 'Résistance caractéristique béton',
        description: 'Béton minimum C20/25 pour semelles armées, C16/20 pour semelles non armées, C25/30 en milieu agressif (XA1, XA2). Classe exposition : XC2 (humide rarement sec) minimum. Rapport E/C ≤ 0,55',
        mandatory: true,
        references: ['EC2', 'NF EN 206', 'Fascicule 65']
      },
      {
        id: 'etude-geotechnique',
        title: 'Étude géotechnique obligatoire',
        description: 'Étude géotechnique G2 obligatoire pour déterminer : contrainte admissible du sol, niveau de fondation, présence nappe, agressivité des eaux. Mission G1 + G2 selon NF P 94-500',
        mandatory: true,
        exceptions: ['Bâtiments de moins de 2 niveaux sur sols de bonne qualité connue'],
        references: ['NF P 94-500', 'Loi ELAN 2018']
      },
      {
        id: 'drainage-fondations',
        title: 'Drainage des fondations',
        description: 'Drainage obligatoire si : sous-sol habitable, terrain en pente >3%, présence nappe. Drain périphérique Ø≥100mm, pente ≥0,5%, lit de gravier 20/40, géotextile anti-contaminant',
        mandatory: true,
        exceptions: ['Fondations sur terrain très perméable et sec'],
        references: ['DTU 20.1', 'Règles générales drainage']
      },
      {
        id: 'joints-rupture',
        title: 'Joints de rupture et dilatation',
        description: 'Joint de rupture obligatoire entre bâtiments mitoyens. Joint de dilatation si L>30m en zone tempérée, L>25m en zone chaude. Largeur joint = L(mm)/100 + 20mm minimum',
        mandatory: true,
        references: ['DTU 20.1', 'Règles CM66']
      }
    ],
    tolerances: [
      {
        parameter: 'Implantation des fondations',
        tolerance: '± 2 cm',
        conditions: 'Par rapport aux axes théoriques du projet. Vérification par géomètre obligatoire'
      },
      {
        parameter: 'Niveau d\'arase supérieure',
        tolerance: '± 1 cm',
        conditions: 'Par rapport au niveau théorique NGF. Contrôle au niveau laser'
      },
      {
        parameter: 'Épaisseur des semelles',
        tolerance: '± 1 cm pour e ≤ 30 cm, ± 3% pour e > 30 cm',
        conditions: 'Mesure à 1m des angles et milieux de semelle'
      },
      {
        parameter: 'Planéité fond de fouille',
        tolerance: '± 3 cm sous règle de 3 m',
        conditions: 'Avant coulage du béton de propreté'
      },
      {
        parameter: 'Verticalité des murs de fondation',
        tolerance: '± 1 cm par mètre de hauteur',
        conditions: 'Maximum 3 cm sur hauteur totale'
      },
      {
        parameter: 'Positionnement des armatures',
        tolerance: '± 10 mm en plan, ± 5 mm en hauteur',
        conditions: 'Vérification avant coulage béton'
      },
      {
        parameter: 'Enrobage réel des armatures',
        tolerance: '+10 mm, -5 mm',
        conditions: 'Par rapport à l\'enrobage nominal calculé'
      }
    ],
    dimensions: [
      {
        element: 'Débord minimal de semelle',
        dimension: 'Épaisseur mur + 5 cm',
        minimum: '15 cm',
        maximum: '50 cm (économie)',
        conditions: 'De chaque côté du mur porteur. Débord optimal = h/4 à h/3'
      },
      {
        element: 'Épaisseur minimale semelle BA',
        dimension: 'h ≥ max(15 cm ; L/8 ; l/4)',
        minimum: '15 cm',
        conditions: 'L=longueur semelle, l=largeur. Selon calculs EC2 et contrainte sol'
      },
      {
        element: 'Enrobage des armatures',
        dimension: 'cnom = cmin + Δcdev',
        minimum: '5 cm pour fondations XC2, 7 cm pour XC3/XC4',
        conditions: 'cmin selon classe exposition + classe structurale. Δcdev = 10mm'
      },
      {
        element: 'Béton de propreté',
        dimension: '5 à 10 cm d\'épaisseur',
        minimum: '5 cm',
        conditions: 'Béton dosé à 150 kg/m³ minimum. Protection coffrage et armatures'
      },
      {
        element: 'Largeur minimale semelle filante',
        dimension: 'N/(L×σsol admissible)',
        minimum: '40 cm',
        conditions: 'N=charge linéaire, L=longueur, σsol selon étude géotechnique'
      },
      {
        element: 'Surface minimale semelle isolée',
        dimension: 'N/σsol admissible',
        minimum: '0,50 m²',
        conditions: 'N=charge ponctuelle. Côté minimum 70 cm'
      },
      {
        element: 'Hauteur libre sous plancher',
        dimension: 'Selon usage',
        minimum: '1,80 m pour vide sanitaire, 2,20 m pour local',
        conditions: 'Ventilation obligatoire si vide sanitaire'
      },
      {
        element: 'Pente des fouilles',
        dimension: 'Selon nature du terrain',
        minimum: '1/1 (45°) en terrain meuble',
        maximum: '10/1 en terrain rocheux',
        conditions: 'Ou blindage si fouille verticale'
      }
    ],
    relatedDocuments: ['DTU 12', 'DTU 13.2', 'EC2', 'EC7', 'NF P 94-500']
  },
  {
    id: 'dtu-13-2',
    type: 'regulation',
    title: 'NF DTU 13.2 - Travaux de fondations profondes',
    description: 'Exécution des fondations profondes : pieux, micropieux, puits',
    regulationType: 'dtu',
    reference: 'NF DTU 13.2',
    scope: 'Fondations profondes : pieux battus, forés, micropieux, barrettes',
    category: 'dtu',
    tags: ['fondations profondes', 'pieux', 'micropieux', 'forage', 'battage'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '35 min',
    isPublic: true,
    isPremium: false,
    applicableFrom: '2016-09-01',
    keyRules: [
      {
        id: 'reconnaissance-geotechnique',
        title: 'Reconnaissance géotechnique obligatoire',
        description: 'Étude géotechnique G2 obligatoire définissant la portance et les efforts admissibles',
        mandatory: true,
        references: ['NF P 94-500', 'Article 4.1']
      },
      {
        id: 'controles-execution',
        title: 'Contrôles d\'exécution',
        description: 'Contrôle systématique : verticalité, profondeur, intégrité, qualité béton',
        mandatory: true,
        exceptions: ['Allègement possible selon étude de sol et avis bureau de contrôle']
      },
      {
        id: 'beton-pieux',
        title: 'Qualité du béton des pieux',
        description: 'Béton minimum C25/30, consistance S4 ou S5, temps de transport ≤ 1h30',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Verticalité des pieux',
        tolerance: '± 2%',
        conditions: 'Par rapport à la verticale théorique'
      },
      {
        parameter: 'Implantation en plan',
        tolerance: '± 5 cm',
        conditions: 'Centre de gravité du pieu'
      },
      {
        parameter: 'Niveau d\'arase',
        tolerance: '± 3 cm',
        conditions: 'Après recépage'
      }
    ],
    dimensions: [
      {
        element: 'Diamètre minimal pieux forés',
        dimension: 'Selon charges',
        minimum: '30 cm',
        conditions: 'Pieux de diamètre courant'
      },
      {
        element: 'Longueur d\'ancrage en pointe',
        dimension: 'Selon étude géotechnique',
        minimum: '3 × diamètre',
        conditions: 'Dans la couche portante'
      },
      {
        element: 'Espacement minimal entre pieux',
        dimension: '3 × diamètre',
        minimum: '1,5 m',
        conditions: 'Centre à centre'
      }
    ],
    relatedDocuments: ['DTU 13.1', 'NF P 94-262', 'EC7', 'NF EN 1536']
  },
  {
    id: 'dtu-13-3',
    type: 'regulation',
    title: 'NF DTU 13.3 - Dallages - Conception, calcul et exécution',
    description: 'Conception et exécution des dallages béton sur sol',
    regulationType: 'dtu',
    reference: 'NF DTU 13.3',
    scope: 'Dallages industriels et résidentiels sur terre-plein',
    category: 'dtu',
    tags: ['dallage', 'béton', 'dalle', 'sol', 'armatures', 'joints'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    applicableFrom: '2017-06-01',
    keyRules: [
      {
        id: 'preparation-support',
        title: 'Préparation du support',
        description: 'Compactage 95% OPM, couche de forme, protection contre remontées capillaires',
        mandatory: true,
        references: ['Article 6.2', 'DTU 12']
      },
      {
        id: 'armatures-dallage',
        title: 'Armatures de dallage',
        description: 'Treillis soudé minimum ST25. Position à mi-épaisseur ± 1 cm. Recouvrement ≥ 20 cm',
        mandatory: true,
        exceptions: ['Dallage non armé possible si épaisseur ≥ 15 cm et charges limitées']
      },
      {
        id: 'joints-retrait',
        title: 'Joints de retrait',
        description: 'Espacement ≤ 25 fois l\'épaisseur. Profondeur ≥ 1/4 épaisseur. Sciage dans les 24h',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Planéité du dallage',
        tolerance: '± 5 mm sous règle de 2 m',
        conditions: 'Pour usage courant'
      },
      {
        parameter: 'Niveau fini',
        tolerance: '± 1 cm',
        conditions: 'Par rapport au niveau théorique'
      },
      {
        parameter: 'Épaisseur du dallage',
        tolerance: '± 5 mm',
        conditions: 'Pour épaisseur ≤ 15 cm'
      }
    ],
    dimensions: [
      {
        element: 'Épaisseur minimale dallage',
        dimension: 'Selon charges et usage',
        minimum: '12 cm',
        conditions: 'Usage résidentiel courant'
      },
      {
        element: 'Enrobage armatures',
        dimension: 'Selon exposition',
        minimum: '3 cm',
        conditions: 'Face supérieure et inférieure'
      }
    ],
    relatedDocuments: ['DTU 12', 'DTU 21', 'NF EN 13670', 'FD P 11-213']
  }
];

// ====== DTU MAÇONNERIE (DTU 20) ======
export const dtuMaconnerie: RegulationDocument[] = [
  {
    id: 'dtu-20-1',
    type: 'regulation',
    title: 'NF DTU 20.1 - Ouvrages en maçonnerie de petits éléments',
    description: 'Exécution des ouvrages de maçonnerie en blocs, briques, parpaings',
    regulationType: 'dtu',
    reference: 'NF DTU 20.1',
    scope: 'Maçonnerie blocs béton, briques, pierre naturelle, parpaings',
    category: 'dtu',
    tags: ['maçonnerie', 'blocs béton', 'briques', 'mortier', 'chaînages', 'joints'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    applicableFrom: '2020-03-01',
    keyRules: [
      {
        id: 'joints-horizontaux',
        title: 'Joints horizontaux de pose',
        description: 'Épaisseur 8 à 15 mm pour mortier traditionnel (10±2 mm courant). Garnissage complet sur toute la largeur et épaisseur. Mortier classe M5 minimum (résistance 5 MPa). Consistance plastique : affaissement 15-17 cm',
        mandatory: true,
        exceptions: ['Blocs à joints minces : 1-3 mm avec colle spéciale', 'Mortier colle : 2-5 mm'],
        references: ['EN 998-2', 'DTU 20.1 art 5.3']
      },
      {
        id: 'joints-verticaux',
        title: 'Joints verticaux',
        description: 'Joints pleins obligatoires pour murs porteurs. Garnissage sur 2/3 minimum de l\'épaisseur, 100% en zone sismique. Épaisseur 8-15 mm. Mortier identique aux joints horizontaux. Joints aboutés interdits',
        mandatory: true,
        exceptions: ['Blocs à emboîtement : joints creux autorisés pour cloisons non porteuses uniquement'],
        references: ['EC8', 'DTU 20.1 art 5.4']
      },
      {
        id: 'chainages-obligatoires',
        title: 'Chaînages horizontaux et verticaux',
        description: 'Chaînage horizontal à chaque niveau (plancher + linteau). Chaînages verticaux aux angles, intersections et tous les 5m. Section minimum 4 HA 10. Béton C20/25 minimum. Recouvrement ≥ 50 diamètres',
        mandatory: true,
        exceptions: ['Murs non porteurs de hauteur ≤ 3m'],
        references: ['DTU 23.1', 'EC8 en zone sismique', 'EC6']
      },
      {
        id: 'resistance-blocs',
        title: 'Résistance des blocs de maçonnerie',
        description: 'Classe de résistance minimum selon usage : fb ≥ 10 MPa (porteur), fb ≥ 4 MPa (non porteur). Absorption d\'eau ≤ 15% pour béton, ≤ 20% pour terre cuite. Gel/dégel selon zone climatique',
        mandatory: true,
        references: ['EN 771-1', 'EN 771-2', 'EN 771-3']
      },
      {
        id: 'appareillage',
        title: 'Appareillage et liaison des blocs',
        description: 'Recouvrement horizontal ≥ 0,4h du bloc (h=hauteur), minimum 10 cm. Croisement des joints verticaux. Liaison par harpes métalliques si impossibilité de recouvrement. Chaînage raidisseur si L > 5h',
        mandatory: true,
        references: ['DTU 20.1 art 7', 'EC6']
      },
      {
        id: 'protection-intemperies',
        title: 'Protection contre les intempéries',
        description: 'Arrêt du travail si T° < 5°C ou > 35°C. Protection pluie pendant 24h minimum. Humidification des blocs par temps sec et chaud. Cure des joints pendant 7 jours',
        mandatory: true,
        exceptions: ['Mortier antigel autorisé jusqu\'à -5°C avec précautions'],
        references: ['DTU 20.1 art 4']
      }
    ],
    tolerances: [
      {
        parameter: 'Verticalité des murs',
        tolerance: '± 5 mm/m hauteur',
        conditions: 'Maximum 20 mm sur hauteur totale'
      },
      {
        parameter: 'Planéité des parements',
        tolerance: '± 10 mm sous règle de 2 m',
        conditions: 'Pour enduits traditionnels'
      },
      {
        parameter: 'Épaisseur des joints',
        tolerance: '± 2 mm',
        conditions: 'Par rapport à l\'épaisseur nominale'
      }
    ],
    dimensions: [
      {
        element: 'Recouvrement minimal blocs',
        dimension: '0,4 × hauteur du bloc',
        minimum: '10 cm',
        maximum: 'Hauteur totale du bloc',
        conditions: 'Liaison entre blocs consécutifs. Recouvrement optimal = 0,5h'
      },
      {
        element: 'Section minimale chaînage horizontal',
        dimension: 'Selon calcul EC2 et charges',
        minimum: '4 HA 10 (3,14 cm²)',
        conditions: 'Bâtiment R+1 en zone non sismique. +25% en zone sismique'
      },
      {
        element: 'Épaisseur minimale murs porteurs',
        dimension: 'h/20 ≤ e ≤ h/15',
        minimum: '15 cm (blocs 15×20×50)',
        maximum: '25 cm (zone sismique)',
        conditions: 'h=hauteur libre entre planchers. e=épaisseur mur'
      },
      {
        element: 'Longueur maximale mur sans chaînage',
        dimension: '5 × hauteur du mur',
        maximum: '15 m',
        conditions: 'Au-delà : chaînage raidisseur vertical obligatoire'
      },
      {
        element: 'Hauteur maximale mur sans plancher',
        dimension: '20 × épaisseur',
        maximum: '3,50 m',
        conditions: 'Pour murs de 20 cm : hauteur max 4,00 m'
      },
      {
        element: 'Ouvertures maximales',
        dimension: 'Largeur ≤ 3,00 m, Hauteur ≤ 2,50 m',
        conditions: 'Linteau BA obligatoire. Retombée ≥ 15 cm dans chaînage'
      },
      {
        element: 'Distance minimale entre ouvertures',
        dimension: '≥ 0,5 m',
        minimum: '2 longueurs de bloc',
        conditions: 'Mesure entre tableaux. Trumeaux minimum 50 cm'
      },
      {
        element: 'Ancrage chaînage dans mur',
        dimension: 'Scellement ≥ 25 cm',
        minimum: '20 cm + crochet',
        conditions: 'Dans zone comprimée du chaînage horizontal'
      }
    ],
    relatedDocuments: ['DTU 23.1', 'DTU 26.1', 'NF EN 771', 'EC6', 'EC8']
  },
  {
    id: 'dtu-21',
    type: 'regulation',
    title: 'NF DTU 21 - Exécution des travaux en béton',
    description: 'Exécution des ouvrages en béton coulé en place',
    regulationType: 'dtu',
    reference: 'NF DTU 21',
    scope: 'Béton armé et béton précontraint coulés en place',
    category: 'dtu',
    tags: ['béton armé', 'coffrage', 'ferraillage', 'coulage', 'cure'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '40 min',
    isPublic: true,
    isPremium: false,
    applicableFrom: '2016-07-01',
    keyRules: [
      {
        id: 'resistance-beton',
        title: 'Résistance caractéristique du béton',
        description: 'Béton minimum C20/25 pour BA courant, C25/30 pour ouvrages exposés, C30/37 pour précontraint',
        mandatory: true,
        references: ['EC2', 'Article 5.1']
      },
      {
        id: 'enrobage-armatures',
        title: 'Enrobage des armatures',
        description: 'Enrobage selon classe exposition : XC1=20mm, XC2=25mm, XC3/XC4=30mm',
        mandatory: true,
        exceptions: ['Réduction possible avec BHP ou protection spéciale']
      },
      {
        id: 'cure-beton',
        title: 'Cure du béton',
        description: 'Protection contre dessiccation pendant 7 jours minimum. Arrosage ou produit de cure',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Dimensions des ouvrages',
        tolerance: '± 1 cm',
        conditions: 'Pour dimensions courantes < 3 m'
      },
      {
        parameter: 'Enrobage des armatures',
        tolerance: '+10 mm / -5 mm',
        conditions: 'Par rapport à l\'enrobage nominal'
      },
      {
        parameter: 'Planéité des parements',
        tolerance: '± 5 mm sous règle de 2 m',
        conditions: 'Béton brut de décoffrage'
      }
    ],
    dimensions: [
      {
        element: 'Épaisseur minimale voiles BA',
        dimension: 'Selon élancement',
        minimum: '15 cm',
        conditions: 'Voiles porteurs courants'
      },
      {
        element: 'Diamètre minimal armatures',
        dimension: 'Selon sollicitations',
        minimum: '6 mm',
        conditions: 'Armatures principales HA'
      }
    ],
    relatedDocuments: ['EC2', 'NF EN 13670', 'DTU 23.1', 'NF EN 206']
  },
  {
    id: 'dtu-20-12',
    type: 'regulation',
    title: 'NF DTU 20.12 - Gros œuvre en maçonnerie des toitures destinées à recevoir un revêtement d\'étanchéité',
    description: 'Maçonnerie de toitures-terrasses et supports d\'étanchéité',
    regulationType: 'dtu',
    reference: 'NF DTU 20.12',
    scope: 'Supports maçonnés pour étanchéité toitures-terrasses',
    category: 'dtu',
    tags: ['toiture-terrasse', 'support étanchéité', 'maçonnerie', 'pente', 'évacuation'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'pentes-evacuation',
        title: 'Pentes d\'évacuation',
        description: 'Pente minimale 1% vers évacuations. 2% en terrasse inaccessible. Pente maximale 5%. Forme de pente réalisée par béton de pente ou chape de pente selon DTU 26.2. Points hauts et points bas déterminés',
        mandatory: true,
        references: ['DTU 43.1', 'DTU 26.2']
      },
      {
        id: 'planéité-support',
        title: 'Planéité du support',
        description: 'Tolérance ± 7 mm sous règle de 2 m. Absence de contre-pentes. Vérification avant pose étanchéité. Contrôle à la règle et niveau laser',
        mandatory: true,
        references: ['DTU 43.1']
      },
      {
        id: 'relevés-etancheite',
        title: 'Relevés d\'étanchéité',
        description: 'Relevés maçonnés hauteur ≥ 15 cm au-dessus protection. Angle chanfreiné à 45°. Gorge de décrochement si hauteur > 20 cm. Enduit lisse obligatoire',
        mandatory: true,
        references: ['DTU 43.1']
      },
      {
        id: 'evacuation-ep',
        title: 'Évacuation eaux pluviales',
        description: 'Évacuation par descentes EP ou gargouilles. Section entrées égout selon DTU 60.11. Grilles crapaudines obligatoires. Débit évacuation 4 l/s par 100 m²',
        mandatory: true,
        references: ['DTU 60.11']
      },
      {
        id: 'joints-dilatation',
        title: 'Joints de dilatation',
        description: 'Joints structuraux traversants. Calfeutrement spécial étanche. Largeur ≥ 20 mm. Profil waterstop si nécessaire',
        mandatory: true
      },
      {
        id: 'protection-etancheite',
        title: 'Protection de l\'étanchéité',
        description: 'Protection lourde (dalles, gravillons) ou légère (asphalte, peinture). Isolation thermique sous étanchéité si requise. Pare-vapeur selon calcul condensation',
        mandatory: true,
        exceptions: ['Étanchéité autoprotégée'],
        references: ['DTU 43.1']
      }
    ],
    tolerances: [
      {
        parameter: 'Planéité générale',
        tolerance: '± 7 mm sous règle de 2 m',
        conditions: 'Support fini avant étanchéité'
      },
      {
        parameter: 'Pentes réalisées',
        tolerance: '± 0,2%',
        conditions: 'Contrôle au niveau laser'
      },
      {
        parameter: 'Niveau des évacuations',
        tolerance: '± 5 mm',
        conditions: 'Par rapport au niveau théorique'
      }
    ],
    dimensions: [
      {
        element: 'Pente minimale courante',
        dimension: '1% vers évacuations',
        minimum: '0,5% en zone abritée',
        maximum: '5% (au-delà : couverture)',
        conditions: 'Mesure après mise en œuvre'
      },
      {
        element: 'Hauteur relevés',
        dimension: '≥ 15 cm au-dessus protection',
        minimum: '10 cm si autoprotégée',
        conditions: 'Protection lourde, légère ou autoprotégée'
      },
      {
        element: 'Épaisseur béton de pente',
        dimension: 'Variable selon pente',
        minimum: '4 cm en point haut',
        conditions: 'Béton C20/25 minimum avec treillis'
      },
      {
        element: 'Section minimale évacuations',
        dimension: 'Selon surface et pluviométrie',
        minimum: '100 mm Ø par 100 m²',
        conditions: 'Calcul selon DTU 60.11'
      }
    ],
    relatedDocuments: ['DTU 43.1', 'DTU 20.1', 'DTU 26.2', 'DTU 60.11']
  },
  {
    id: 'dtu-20-13',
    type: 'regulation',
    title: 'NF DTU 20.13 - Cloisons en maçonnerie de petits éléments',
    description: 'Cloisons non porteuses en blocs de béton, terre cuite',
    regulationType: 'dtu',
    reference: 'NF DTU 20.13',
    scope: 'Cloisons distributives non porteuses',
    category: 'dtu',
    tags: ['cloison', 'séparatif', 'non porteur', 'acoustique', 'blocs'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'liaison-gros-oeuvre',
        title: 'Liaison au gros œuvre',
        description: 'Liaison souple en tête par joint élastomère ou mousse. Calfeutrement périphérique au mastic. Joints de dilatation si longueur > 8 m. Fixation par pattes métalliques scellées',
        mandatory: true,
        references: ['DTU 20.1']
      },
      {
        id: 'epaisseur-cloisons',
        title: 'Épaisseur des cloisons',
        description: 'Épaisseur ≥ 7 cm pour h ≤ 2,60 m. Épaisseur ≥ 10 cm pour h > 2,60 m. Blocs creux ou perforés acceptés. Resistance caractéristique fb ≥ 2 MPa minimum',
        mandatory: true,
        references: ['EN 771']
      },
      {
        id: 'mortier-pose',
        title: 'Mortier de pose',
        description: 'Mortier bâtard ou colle selon fabricant. Épaisseur joints 8-15 mm traditionnels, 2-3 mm pour colle. Classe M2,5 minimum. Garnissage complet des joints horizontaux',
        mandatory: true,
        references: ['EN 998-2']
      },
      {
        id: 'ouvertures-cloisons',
        title: 'Ouvertures dans cloisons',
        description: 'Largeur ≤ 1,20 m sans linteau. Au-delà : linteau BA ou préfabriqué. Saignées limitées : profondeur ≤ 1/3 épaisseur, largeur ≤ 10 cm',
        mandatory: true,
        exceptions: ['Blocs à bancher : saignées interdites']
      },
      {
        id: 'isolation-acoustique',
        title: 'Performance acoustique',
        description: 'DnT,A ≥ 40 dB entre locaux. Doublage acoustique si nécessaire. Traitement des transmissions latérales. Calfeutrement des liaisons périphériques',
        mandatory: true,
        references: ['NRA', 'EN ISO 717-1']
      },
      {
        id: 'finitions',
        title: 'Finitions et revêtements',
        description: 'Enduit plâtre ou ciment selon exposition. Carrelage sur enduit intermédiaire. Charges suspendues ≤ 30 kg/ml avec fixations adaptées',
        mandatory: true,
        references: ['DTU 25.1', 'DTU 52.2']
      }
    ],
    tolerances: [
      {
        parameter: 'Verticalité des cloisons',
        tolerance: '± 10 mm',
        conditions: 'Hauteur ≤ 3 m'
      },
      {
        parameter: 'Planéité sous règle 2 m',
        tolerance: '± 10 mm',
        conditions: 'Avant finition'
      },
      {
        parameter: 'Épaisseur des joints',
        tolerance: '± 2 mm',
        conditions: 'Par rapport nominal'
      }
    ],
    dimensions: [
      {
        element: 'Hauteur maximale cloison',
        dimension: 'h ≤ 3,20 m',
        conditions: 'Sans raidisseur. Au-delà : étude spécifique'
      },
      {
        element: 'Longueur maximale sans joint',
        dimension: '8 m',
        conditions: 'Au-delà : joint de dilatation'
      },
      {
        element: 'Jeu en tête de cloison',
        dimension: '10-20 mm',
        conditions: 'Comblé par joint souple'
      },
      {
        element: 'Largeur maximale ouvertures',
        dimension: '1,20 m sans linteau',
        maximum: '2,00 m avec linteau',
        conditions: 'Hauteur ≤ 2,20 m'
      }
    ],
    relatedDocuments: ['DTU 20.1', 'DTU 25.41', 'EN 771', 'NRA']
  }
];

// ====== DTU PANNEAUX PRÉFABRIQUÉS (DTU 22) ======
export const dtuPanneauxPrefabriques: RegulationDocument[] = [
  {
    id: 'dtu-22-1',
    type: 'regulation',
    title: 'NF DTU 22.1 - Murs extérieurs en panneaux préfabriqués de grandes dimensions',
    description: 'Murs extérieurs en panneaux béton préfabriqués type plaque pleine ou nervurée',
    regulationType: 'dtu',
    reference: 'NF DTU 22.1',
    scope: 'Panneaux préfabriqués béton pour murs extérieurs',
    category: 'dtu',
    tags: ['panneau préfabriqué', 'béton', 'mur extérieur', 'assemblage', 'étanchéité'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '35 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'assemblage-panneaux',
        title: 'Assemblage des panneaux',
        description: 'Assemblages mécaniques dimensionnés selon EC2. Joints étanches. Réglage et calage précis. Fixations par équerres, consoles ou ancrages boulonnés. Résistance sismique vérifiée',
        mandatory: true,
        references: ['EC2', 'EC8']
      },
      {
        id: 'etancheite-joints',
        title: 'Étanchéité des joints',
        description: 'Joints verticaux et horizontaux traités. Mastic ou profilés EPDM. Bavettes obligatoires. Fond de joint en mousse fermée. Larmier sur joints horizontaux',
        mandatory: true,
        references: ['DTU 44.1']
      },
      {
        id: 'resistance-beton-panneau',
        title: 'Résistance du béton',
        description: 'Béton C25/30 minimum. Classe exposition XC3/XC4. Enrobage ≥ 30 mm. Armatures HA B500 minimum. Contrôle qualité selon NF EN 13369',
        mandatory: true,
        references: ['EC2', 'NF EN 13369']
      },
      {
        id: 'manutention-pose',
        title: 'Manutention et pose',
        description: 'Ancrages de levage certifiés. Plan de levage obligatoire. Étaiement provisoire dimensionné. Contrôle géométrique avant fixation définitive',
        mandatory: true,
        references: ['NF EN 13369']
      },
      {
        id: 'isolation-panneau',
        title: 'Isolation thermique',
        description: 'Panneaux sandwich avec isolant central ou isolation rapportée. Rupture ponts thermiques aux fixations. Performance thermique selon RE2020',
        mandatory: true,
        exceptions: ['Panneaux en béton cellulaire auto-isolants'],
        references: ['RE2020']
      },
      {
        id: 'finitions-exterieures',
        title: 'Finitions extérieures',
        description: 'Aspect béton architectonique ou revêtement rapporté. Protection surface par hydrofuge ou peinture. Teinte et texture selon cahier des charges',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Dimensions des panneaux',
        tolerance: '± 5 mm',
        conditions: 'Longueur et largeur'
      },
      {
        parameter: 'Planéité des faces',
        tolerance: '± 3 mm sous règle de 2 m',
        conditions: 'Face extérieure visible'
      },
      {
        parameter: 'Implantation en plan',
        tolerance: '± 10 mm',
        conditions: 'Par rapport aux axes théoriques'
      },
      {
        parameter: 'Verticalité',
        tolerance: '± 10 mm par étage',
        conditions: 'Maximum 20 mm sur hauteur totale'
      }
    ],
    dimensions: [
      {
        element: 'Dimensions maximales panneaux',
        dimension: 'Selon moyens de levage',
        maximum: '3,20 × 12,00 m courant',
        conditions: 'Poids ≤ 15 tonnes par élément'
      },
      {
        element: 'Épaisseur minimale',
        dimension: 'Selon calcul statique',
        minimum: '14 cm pour panneau porteur',
        conditions: '8 cm minimum pour panneau de bardage'
      },
      {
        element: 'Largeur des joints',
        dimension: '15-25 mm courant',
        minimum: '10 mm minimum',
        maximum: '40 mm maximum',
        conditions: 'Joint vertical et horizontal'
      },
      {
        element: 'Profondeur joints',
        dimension: '≥ 15 mm',
        conditions: 'Pour logement du mastic'
      },
      {
        element: 'Ancrages et fixations',
        dimension: 'Selon efforts de calcul',
        minimum: 'Ø 12 mm pour fixations principales',
        conditions: 'Acier inoxydable ou galvanisé'
      }
    ],
    relatedDocuments: ['DTU 21', 'EC2', 'DTU 44.1', 'NF EN 13369', 'RE2020']
  }
];

// ====== DTU STRUCTURES PRÉFABRIQUÉES (DTU 23) ======
export const dtuStructuresPrefabriquees: RegulationDocument[] = [
  {
    id: 'dtu-23-1',
    type: 'regulation',
    title: 'NF DTU 23.1 - Murs en béton banché',
    description: 'Exécution des murs en béton coulé entre banches',
    regulationType: 'dtu',
    reference: 'NF DTU 23.1',
    scope: 'Murs en béton armé coulés en place entre banches',
    category: 'dtu',
    tags: ['béton banché', 'coffrage', 'voiles', 'murs porteurs'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '35 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'coffrage-banche',
        title: 'Système de coffrage',
        description: 'Banches métalliques ou bois. Étanchéité des joints. Contreventement et stabilité',
        mandatory: true
      },
      {
        id: 'coulage-beton-banche',
        title: 'Coulage du béton',
        description: 'Béton autoplaçant recommandé. Vibration adaptée. Coulage continu par levées',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 21', 'EC2']
  },
  {
    id: 'dtu-23-2',
    type: 'regulation',
    title: 'NF DTU 23.2 - Planchers à dalles alvéolaires préfabriquées en béton',
    description: 'Planchers en dalles alvéolaires précontraintes',
    regulationType: 'dtu',
    reference: 'NF DTU 23.2',
    scope: 'Dalles alvéolaires précontraintes pour planchers',
    category: 'dtu',
    tags: ['dalle alvéolaire', 'précontraint', 'plancher', 'prémoulé'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'appui-dalles',
        title: 'Appuis des dalles',
        description: 'Longueur d\'appui ≥ 50 mm sur maçonnerie, ≥ 75 mm sur béton armé. Répartition uniforme des charges. Feuillure d\'appui recommandée. Niveau parfait des appuis vérifié au laser',
        mandatory: true,
        references: ['EC2', 'NF EN 1168']
      },
      {
        id: 'resistance-dalles',
        title: 'Résistance des dalles',
        description: 'Béton C35/45 minimum. Précontrainte par torons Y1860. Armatures transversales selon calcul. Contrôle qualité selon NF EN 1168. Certificat de conformité obligatoire',
        mandatory: true,
        references: ['EC2', 'NF EN 1168']
      },
      {
        id: 'assemblage-dalles',
        title: 'Assemblage et liaison',
        description: 'Joints entre dalles calfeutrés au mortier. Chaînage périphérique obligatoire. Armatures de liaison ancrées dans dalles. Table de compression coulée en place',
        mandatory: true,
        references: ['DTU 23.1']
      },
      {
        id: 'manutention-dalles',
        title: 'Manutention et pose',
        description: 'Levage par élingues textiles ou palonniers. Stockage sur cales espacées selon portée. Pose à sec sur appuis nivelés. Vérification portée et surcharges',
        mandatory: true,
        references: ['NF EN 1168']
      },
      {
        id: 'etancheite-plancher',
        title: 'Étanchéité et finition',
        description: 'Rebouchage alvéoles en about. Joint entre dalles étanche. Chape rapportée selon DTU 26.2. Isolant acoustique si requis',
        mandatory: true,
        references: ['DTU 26.2']
      },
      {
        id: 'percements-reservations',
        title: 'Percements et réservations',
        description: 'Percements ≤ Ø 50 mm autorisés. Réservations en usine recommandées. Renforcements locaux si nécessaire. Étude spécifique pour grandes ouvertures',
        mandatory: true,
        exceptions: ['Percements interdits en zone d\'about'],
        references: ['NF EN 1168']
      }
    ],
    tolerances: [
      {
        parameter: 'Niveau des appuis',
        tolerance: '± 5 mm',
        conditions: 'Vérification laser avant pose'
      },
      {
        parameter: 'Planéité du plancher',
        tolerance: '± 10 mm sous règle de 2 m',
        conditions: 'Avant table de compression'
      },
      {
        parameter: 'Largeur des joints',
        tolerance: '± 5 mm',
        conditions: 'Entre dalles adjacentes'
      }
    ],
    dimensions: [
      {
        element: 'Longueur d\'appui minimale',
        dimension: '≥ 50 mm sur maçonnerie',
        minimum: '≥ 75 mm sur béton armé',
        conditions: 'Feuillure recommandée'
      },
      {
        element: 'Portée maximale courante',
        dimension: 'Selon calcul et charges',
        maximum: '15 m pour dalle 20 cm',
        conditions: 'Vérification flèche L/250'
      },
      {
        element: 'Épaisseur standard',
        dimension: '16, 20, 25, 32 cm',
        conditions: 'Selon portée et charges'
      },
      {
        element: 'Largeur standard',
        dimension: '1,20 m standard',
        conditions: 'Autres largeurs possibles'
      },
      {
        element: 'Épaisseur table compression',
        dimension: '≥ 40 mm',
        minimum: '50 mm avec treillis soudé',
        conditions: 'Béton C25/30 minimum'
      }
    ],
    relatedDocuments: ['EC2', 'DTU 21', 'NF EN 1168', 'DTU 26.2']
  },
  {
    id: 'dtu-23-3',
    type: 'regulation',
    title: 'NF DTU 23.3 - Dalles et volées d\'escalier préfabriquées en béton armé',
    description: 'Escaliers en éléments préfabriqués béton armé',
    regulationType: 'dtu',
    reference: 'NF DTU 23.3',
    scope: 'Escaliers préfabriqués en béton armé',
    category: 'dtu',
    tags: ['escalier préfabriqué', 'volée', 'palier', 'béton armé'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'pose-escalier-prefab',
        title: 'Pose des éléments',
        description: 'Appuis dimensionnés. Liaison aux gros œuvre. Réglage précis des niveaux',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 21', 'EC2']
  },
  {
    id: 'dtu-23-4',
    type: 'regulation',
    title: 'NF DTU 23.4 - Structures en béton préfabriqué assemblées par joints secs',
    description: 'Assemblages mécaniques de structures préfabriquées',
    regulationType: 'dtu',
    reference: 'NF DTU 23.4',
    scope: 'Structures préfabriquées assemblées sans mortier',
    category: 'dtu',
    tags: ['joint sec', 'assemblage mécanique', 'préfabriqué', 'structure'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '40 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'assemblages-mecaniques',
        title: 'Assemblages mécaniques',
        description: 'Connecteurs métalliques certifiés. Calculs selon EC2. Contrôles de serrage',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['EC2', 'DTU 21']
  },
  {
    id: 'dtu-23-5',
    type: 'regulation',
    title: 'NF DTU 23.5 - Planchers à poutrelles en béton et entrevous',
    description: 'Planchers poutrelles béton précontraint et entrevous',
    regulationType: 'dtu',
    reference: 'NF DTU 23.5',
    scope: 'Planchers à poutrelles précontraintes et entrevous',
    category: 'dtu',
    tags: ['poutrelle précontrainte', 'entrevous', 'plancher', 'table compression'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'portee-poutrelles',
        title: 'Portée des poutrelles',
        description: 'Portée limitée selon section et charges. Flèche contrôlée. Appuis ≥ 40 mm',
        mandatory: true
      },
      {
        id: 'table-compression',
        title: 'Table de compression',
        description: 'Épaisseur ≥ 4 cm. Béton C20/25 minimum. Treillis soudé obligatoire',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 21', 'EC2']
  }
];

// ====== DTU CHARPENTES BOIS (DTU 31) ======
export const dtuCharpentes: RegulationDocument[] = [
  {
    id: 'dtu-31-1',
    type: 'regulation',
    title: 'NF DTU 31.1 - Charpente et escalier en bois',
    description: 'Conception et exécution des charpentes traditionnelles en bois',
    regulationType: 'dtu',
    reference: 'NF DTU 31.1',
    scope: 'Charpentes traditionnelles, fermettes, escaliers bois',
    category: 'dtu',
    tags: ['charpente bois', 'fermettes', 'escalier', 'assemblages', 'essences'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '35 min',
    isPublic: true,
    isPremium: false,
    applicableFrom: '2011-12-01',
    keyRules: [
      {
        id: 'classes-emploi',
        title: 'Classes d\'emploi du bois',
        description: 'Classe 1 : intérieur sec, Classe 2 : intérieur humide, Classe 3 : extérieur abrité',
        mandatory: true,
        references: ['NF EN 335']
      },
      {
        id: 'assemblages-traditionnels',
        title: 'Assemblages traditionnels',
        description: 'Tenon-mortaise, mi-bois, queue d\'aronde. Dimensions selon efforts transmis',
        mandatory: true,
        exceptions: ['Assemblages par connecteurs métalliques selon EC5']
      }
    ],
    tolerances: [
      {
        parameter: 'Flèche des poutres',
        tolerance: 'L/300 en service',
        conditions: 'Sous charges permanentes + variables'
      }
    ],
    dimensions: [
      {
        element: 'Section minimale pannes',
        dimension: 'Selon portée et charges',
        minimum: '63 × 175 mm',
        conditions: 'Portée courante 3-4 m'
      }
    ],
    relatedDocuments: ['EC5', 'DTU 31.2', 'NF EN 14081']
  },
  {
    id: 'dtu-31-2',
    type: 'regulation',
    title: 'NF DTU 31.2 - Construction de maisons et bâtiments à ossature bois',
    description: 'Construction d\'ossatures bois avec isolation entre montants',
    regulationType: 'dtu',
    reference: 'NF DTU 31.2',
    scope: 'Maisons et bâtiments à ossature bois jusqu\'à R+3',
    category: 'dtu',
    tags: ['ossature bois', 'isolation', 'pare-vapeur', 'contreventement'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '45 min',
    isPublic: true,
    isPremium: false,
    applicableFrom: '2019-09-01',
    keyRules: [
      {
        id: 'contreventement',
        title: 'Contreventement de l\'ossature',
        description: 'Voiles travaillants : panneaux OSB ≥ 9 mm ou panneaux contreplaqué ≥ 8 mm',
        mandatory: true
      },
      {
        id: 'isolation-continue',
        title: 'Isolation thermique continue',
        description: 'Traitement des ponts thermiques. Isolation entre montants + isolation extérieure recommandée',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Verticalité des murs',
        tolerance: '± 10 mm',
        conditions: 'Par rapport à la verticale théorique'
      }
    ],
    dimensions: [
      {
        element: 'Entraxe des montants',
        dimension: '40 à 60 cm',
        conditions: 'Selon charges et isolation'
      }
    ],
    relatedDocuments: ['DTU 31.1', 'DTU 45.10', 'RE2020']
  },
  {
    id: 'dtu-31-3',
    type: 'regulation',
    title: 'NF DTU 31.3 - Charpentes en bois assemblées par connecteurs métalliques ou goussets',
    description: 'Charpentes avec assemblages par connecteurs métalliques',
    regulationType: 'dtu',
    reference: 'NF DTU 31.3',
    scope: 'Charpentes bois avec connecteurs métalliques certifiés',
    category: 'dtu',
    tags: ['connecteur métallique', 'gousset', 'assemblage', 'charpente industrielle'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '35 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'connecteurs-certifies',
        title: 'Connecteurs certifiés',
        description: 'Connecteurs avec marquage CE ou avis technique. Calculs selon EC5. Installation selon prescriptions fabricant',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 31.1', 'EC5']
  },
  {
    id: 'dtu-31-4',
    type: 'regulation',
    title: 'NF DTU 31.4 - Façades à ossature bois',
    description: 'Façades et murs rideaux en ossature bois',
    regulationType: 'dtu',
    reference: 'NF DTU 31.4',
    scope: 'Façades ossature bois rapportées sur structure',
    category: 'dtu',
    tags: ['façade bois', 'mur rideau', 'ossature', 'bardage'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '40 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'fixation-facade',
        title: 'Fixation à la structure',
        description: 'Fixations mécaniques dimensionnées. Joints de dilatation. Étanchéité air et eau',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 31.2', 'DTU 41.2']
  }
];

// ====== DTU CHARPENTES MÉTALLIQUES (DTU 32) ======
export const dtuCharpentesMetalliques: RegulationDocument[] = [
  {
    id: 'dtu-32-1',
    type: 'regulation',
    title: 'NF DTU 32.1 - Charpentes et ossatures en acier',
    description: 'Construction de charpentes métalliques en acier',
    regulationType: 'dtu',
    reference: 'NF DTU 32.1',
    scope: 'Charpentes acier assemblées par boulonnage ou soudage',
    category: 'dtu',
    tags: ['charpente acier', 'ossature métallique', 'soudage', 'boulonnage'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '45 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'protection-corrosion',
        title: 'Protection contre la corrosion',
        description: 'Traitement anticorrosion selon exposition. Galvanisation ou peinture adaptée',
        mandatory: true
      },
      {
        id: 'assemblages-soudes',
        title: 'Assemblages soudés',
        description: 'Soudeurs qualifiés. Contrôles non destructifs. Qualité selon EN 1090',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['EC3', 'EN 1090', 'DTU 59.5']
  },
  {
    id: 'dtu-32-3',
    type: 'regulation',
    title: 'NF DTU 32.3 - Construction d\'ossatures en acier pour maisons et bâtiments résidentiels',
    description: 'Ossatures acier pour constructions résidentielles',
    regulationType: 'dtu',
    reference: 'NF DTU 32.3',
    scope: 'Ossatures légères en acier pour maisons individuelles',
    category: 'dtu',
    tags: ['ossature acier légère', 'résidentiel', 'profil mince', 'montant'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'profiles-certifies',
        title: 'Profils certifiés',
        description: 'Profils à froid galvanisés. Épaisseur minimum selon portée. Assemblages vissés',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 32.1', 'EC3']
  }
];

// ====== SÉCURITÉ INCENDIE ======
export const fireRegulationERP: RegulationDocument[] = [
  {
    id: 'erp-type-m',
    type: 'regulation',
    title: 'ERP Type M - Magasins de vente, centres commerciaux',
    description: 'Réglementation sécurité incendie pour magasins et centres commerciaux',
    regulationType: 'fire-safety',
    reference: 'ERP Type M',
    scope: 'Magasins, centres commerciaux, grandes surfaces, commerces',
    category: 'fire-safety',
    tags: ['ERP', 'magasin', 'commerce', 'effectif', 'évacuation', 'résistance au feu'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '45 min',
    isPublic: true,
    isPremium: false,
    applicableFrom: '1980-06-25',
    keyRules: [
      {
        id: 'calcul-effectif-magasin',
        title: 'Calcul de l\'effectif public',
        description: 'Surface accessible au public/3 m² (sous-sol, RDC), Surface accessible/2 m² (étages). Surface totale - surfaces non accessibles (réserves, bureaux, locaux techniques). Majoration de 10% pour centre commercial',
        mandatory: true,
        exceptions: ['Espaces de circulation : effectif = longueur × largeur/3'],
        references: ['Article M 2', 'IT 246 § M2']
      },
      {
        id: 'degagements-largeur',
        title: 'Largeur des dégagements',
        description: '1 UP (0,60 m) par tranche de 100 personnes (niveau, sous-sol). 1 UP par 150 personnes (étages). Minimum 2 sorties si effectif > 50 personnes. Répartition : sortie principale ≥ 2/3 effectif',
        mandatory: true,
        exceptions: ['1 seule sortie autorisée si effectif ≤ 50 personnes et distance ≤ 25 m', 'Balcons, terrasses : 1 UP/50 personnes'],
        references: ['Article M 4', 'CO 36', 'CO 37']
      },
      {
        id: 'resistance-structure',
        title: 'Résistance au feu de la structure',
        description: 'SF 1h (1ère catégorie), SF 1/2h (2e, 3e, 4e catégories). Planchers : PF 1/2h minimum. Escaliers : CF 1h. Parois : CF selon article CO 12. Structure métallique : SF ou protection',
        mandatory: true,
        exceptions: ['5e catégorie : aucune exigence si RDC plain-pied'],
        references: ['Article M 3', 'CO 12', 'CO 13']
      },
      {
        id: 'detection-alarme',
        title: 'Détection et alarme',
        description: 'SSI catégorie A (1ère à 3e catégorie : détection automatique généralisée + alarme). SSI catégorie B (4e catégorie). Déclencheurs manuels à moins de 30m de tout point. CMSI en local protégé',
        mandatory: true,
        exceptions: ['5e catégorie : équipement d\'alarme type 4 seulement'],
        references: ['Article MS 53', 'MS 54', 'MS 61']
      },
      {
        id: 'desenfumage',
        title: 'Désenfumage des locaux',
        description: 'Désenfumage naturel ou mécanique obligatoire si surface > 300 m² (RDC), > 100 m² (sous-sol, étages). Exutoires : 1/200e de la surface pour magasin. Amenées d\'air : surface égale aux exutoires',
        mandatory: true,
        exceptions: ['Locaux ≤ 300 m² communicant largement avec l\'extérieur'],
        references: ['Article M 36', 'IT 246 § M36']
      },
      {
        id: 'moyens-secours',
        title: 'Moyens de secours',
        description: 'Extincteurs portatifs : 1 appareil/200 m² et par niveau. RIA si surface > 500 m². Colonnes sèches si hauteur > 18m. Surpresseurs si hauteur > 50m. Service sécurité incendie selon catégorie',
        mandatory: true,
        references: ['Article MS 38', 'MS 41', 'MS 46']
      },
      {
        id: 'amenagement-technique',
        title: 'Aménagement et installations techniques',
        description: 'Réaction au feu : M1 pour sol circulation, M0 pour plafond. Éclairage sécurité obligatoire. Ventilation mécanique asservie SSI. Coupure électrique générale accessible pompiers',
        mandatory: true,
        references: ['Article AM 9', 'AM 10', 'EL 4']
      }
    ],
    tolerances: [],
    dimensions: [
      {
        element: 'Largeur unité de passage',
        dimension: '0,60 m (1 UP)',
        conditions: 'Base de calcul des dégagements. Passage libre réel ≥ 0,60 m'
      },
      {
        element: 'Distance maximale au dégagement',
        dimension: '30 m au niveau principal',
        maximum: '25 m en étage/sous-sol',
        conditions: 'Depuis tout point accessible au public. Distance parcourue réelle'
      },
      {
        element: 'Largeur minimale des portes',
        dimension: '0,80 m (portes principales)',
        minimum: '0,80 m pour sortie, 0,70 m pour porte intérieure',
        conditions: 'Passage libre. Déduction des vantaux, poignées, obstacles'
      },
      {
        element: 'Largeur dégagements protégés',
        dimension: 'Selon effectif évacué',
        minimum: '1,40 m pour escalier principal',
        conditions: '1 UP par 100 personnes. Largeur palier = largeur escalier'
      },
      {
        element: 'Hauteur libre passages',
        dimension: '2,10 m minimum',
        minimum: '2,00 m sous obstacle ponctuel',
        conditions: 'Dans tous les dégagements et locaux accessibles au public'
      },
      {
        element: 'Dimensions sas d\'indépendance',
        dimension: '1,20 × 2,00 m',
        minimum: 'Surface ≥ 2,40 m²',
        conditions: 'Entre locaux à risques et circulation. 2 portes CF'
      },
      {
        element: 'Surface exutoires de désenfumage',
        dimension: '1/200e surface du local',
        minimum: '0,5 m² par exutoire',
        conditions: 'Magasin > 300 m². Position haute, commande ≤ 1,80 m'
      },
      {
        element: 'Largeur amenées d\'air frais',
        dimension: 'Surface = surface des exutoires',
        minimum: '1/400e de la surface du local',
        conditions: 'Position basse. Protégées contre intrusion'
      },
      {
        element: 'Distance déclencheurs manuels',
        dimension: '30 m maximum',
        conditions: 'Depuis tout point du local. Visible et accessible'
      },
      {
        element: 'Espacement extincteurs',
        dimension: 'Distance parcourue ≤ 15 m',
        conditions: '1 extincteur/200 m² minimum. Types adaptés aux risques'
      }
    ],
    relatedDocuments: ['Code de la construction', 'Arrêté du 25 juin 1980', 'IT 246']
  },
  {
    id: 'erp-type-l',
    type: 'regulation',
    title: 'ERP Type L - Salles d\'auditions, de conférences, de réunions',
    description: 'Sécurité incendie des salles de spectacles, cinémas, théâtres',
    regulationType: 'fire-safety',
    reference: 'ERP Type L',
    scope: 'Salles de spectacles, cinémas, salles de conférences',
    category: 'fire-safety',
    tags: ['spectacle', 'cinéma', 'théâtre', 'effectif', 'scène', 'gradin'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '40 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'effectif-salle',
        title: 'Calcul effectif en salle',
        description: 'Sièges fixes : 1 personne/siège. Bancs : 0,50 m/personne. Debout : 3 personnes/m²',
        mandatory: true
      },
      {
        id: 'largeur-degagements-l',
        title: 'Largeur des dégagements',
        description: '1 UP par tranche de 100 personnes (niveau/sous-sol), 1 UP par 125 personnes (étage)',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [
      {
        element: 'Largeur minimale allées',
        dimension: '1,20 m',
        conditions: 'Allées desservant plus de 50 places'
      }
    ],
    relatedDocuments: ['Arrêté du 25 juin 1980', 'IT 246']
  },
  {
    id: 'erp-type-j',
    type: 'regulation',
    title: 'ERP Type J - Structures d\'accueil pour personnes âgées et personnes handicapées',
    description: 'Sécurité incendie des établissements d\'hébergement pour personnes âgées ou handicapées',
    regulationType: 'fire-safety',
    reference: 'ERP Type J',
    scope: 'EHPAD, maisons de retraite, foyers d\'hébergement handicapés',
    category: 'fire-safety',
    tags: ['EHPAD', 'personnes âgées', 'handicapés', 'évacuation assistée', 'compartimentage'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '45 min',
    isPublic: true,
    isPremium: false,
    applicableFrom: '1980-06-25',
    keyRules: [
      {
        id: 'effectif-type-j',
        title: 'Calcul de l\'effectif',
        description: 'Chambres : 1 personne/lit + personnel. Locaux collectifs : densité selon usage. Personnel : 1 personne/3 résidents en journée, 1/10 la nuit',
        mandatory: true,
        references: ['Article J 2']
      },
      {
        id: 'compartimentage-j',
        title: 'Compartimentage coupe-feu',
        description: 'Compartiments ≤ 650 m² et ≤ 30 lits. Parois CF 1h, portes CF 1/2h. Recoupement des circulations horizontales tous les 30 m',
        mandatory: true,
        references: ['Article J 19', 'CO 24']
      },
      {
        id: 'evacuation-differentielle',
        title: 'Évacuation différentielle',
        description: 'Évacuation horizontale prioritaire vers compartiment adjacent. Transfert vers extérieur en 2e phase. Espaces d\'attente sécurisés pour personnes non autonomes',
        mandatory: true,
        references: ['Article J 23']
      },
      {
        id: 'detection-type-j',
        title: 'Détection incendie',
        description: 'SSI catégorie A obligatoire. Détection dans toutes les chambres et locaux à risques. Report en poste de surveillance permanent. Alarme générale sélective',
        mandatory: true,
        references: ['Article J 31']
      },
      {
        id: 'desenfumage-j',
        title: 'Désenfumage',
        description: 'Désenfumage des circulations horizontales encloisonnées. Exutoires ou extraction mécanique. Amenées d\'air compensatrices',
        mandatory: true,
        references: ['Article J 36']
      },
      {
        id: 'personnel-securite-j',
        title: 'Personnel et organisation',
        description: 'Personnel de nuit compétent en sécurité incendie. Exercices d\'évacuation semestriels. Registre de sécurité tenu à jour. Formation du personnel',
        mandatory: true,
        references: ['Article J 42']
      }
    ],
    tolerances: [],
    dimensions: [
      {
        element: 'Compartiment maximum',
        dimension: '650 m² et 30 lits',
        conditions: 'Séparation CF 1h'
      },
      {
        element: 'Largeur dégagements',
        dimension: '1,40 m minimum',
        conditions: 'Circulation principale avec brancards'
      },
      {
        element: 'Distance au dégagement',
        dimension: '≤ 30 m depuis toute chambre',
        conditions: 'Distance parcourue réelle'
      }
    ],
    relatedDocuments: ['Arrêté du 25 juin 1980', 'Code de la santé publique']
  },
  {
    id: 'erp-type-n',
    type: 'regulation',
    title: 'ERP Type N - Restaurants et débits de boissons',
    description: 'Sécurité incendie des restaurants, bars, brasseries, discothèques',
    regulationType: 'fire-safety',
    reference: 'ERP Type N',
    scope: 'Restaurants, bars, cafés, discothèques, boîtes de nuit',
    category: 'fire-safety',
    tags: ['restaurant', 'bar', 'discothèque', 'cuisine', 'effectif'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '35 min',
    isPublic: true,
    isPremium: false,
    applicableFrom: '1980-06-25',
    keyRules: [
      {
        id: 'effectif-restaurant',
        title: 'Calcul de l\'effectif',
        description: 'Salle restaurant : 1 personne/m² + personnel. Salle debout : 3 personnes/m². Cuisine : selon personnel déclaré. Terrasse : 1 personne/m²',
        mandatory: true,
        references: ['Article N 2']
      },
      {
        id: 'degagements-n',
        title: 'Dégagements',
        description: '1 UP/100 personnes (niveau, sous-sol), 1 UP/150 personnes (étages). 2 sorties si effectif > 50. Largeur totale ≥ nombre d\'UP calculé',
        mandatory: true,
        references: ['Article N 4']
      },
      {
        id: 'cuisines-securite',
        title: 'Sécurité des cuisines',
        description: 'Isolement CF des cuisines si puissance > 20 kW. Extraction des buées et graisses. Dispositif d\'arrêt d\'urgence gaz. Extinction automatique si puissance > 70 kW',
        mandatory: true,
        references: ['Article N 18', 'Article CH']
      },
      {
        id: 'discoteques-specifique',
        title: 'Dispositions spécifiques discothèques',
        description: 'Éclairage de sécurité renforcé. Sonorisation d\'alarme adaptée au niveau sonore. Surveillance permanente. Contrôle d\'accès',
        mandatory: true,
        exceptions: ['Établissements sans piste de danse'],
        references: ['Article N 20']
      }
    ],
    tolerances: [],
    dimensions: [
      {
        element: 'Distance au dégagement',
        dimension: '≤ 30 m au niveau principal',
        maximum: '≤ 25 m en étage/sous-sol',
        conditions: 'Distance parcourue réelle'
      },
      {
        element: 'Largeur portes cuisine',
        dimension: '≥ 0,80 m',
        conditions: 'Communication avec salle'
      }
    ],
    relatedDocuments: ['Arrêté du 25 juin 1980', 'Arrêté du 10 octobre 2005']
  },
  {
    id: 'erp-type-o',
    type: 'regulation',
    title: 'ERP Type O - Hôtels et pensions de famille',
    description: 'Sécurité incendie des hôtels, résidences de tourisme, pensions',
    regulationType: 'fire-safety',
    reference: 'ERP Type O',
    scope: 'Hôtels, résidences de tourisme, pensions de famille, auberges',
    category: 'fire-safety',
    tags: ['hôtel', 'pension', 'chambre', 'évacuation', 'désenfumage'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '40 min',
    isPublic: true,
    isPremium: false,
    applicableFrom: '1980-06-25',
    keyRules: [
      {
        id: 'effectif-hotel',
        title: 'Calcul de l\'effectif',
        description: 'Chambres : 1 personne/lit (2 minimum par chambre). Salles communes : densité selon usage. Personnel : selon déclaration',
        mandatory: true,
        references: ['Article O 2']
      },
      {
        id: 'isolement-chambres',
        title: 'Isolement des chambres',
        description: 'Parois entre chambres CF 1/2h minimum. Portes de chambres PF 1/4h. Bloc-porte ferme-porte sur circulation. Serrures ouvrables de l\'intérieur sans clé',
        mandatory: true,
        references: ['Article O 19']
      },
      {
        id: 'circulations-o',
        title: 'Circulations horizontales',
        description: 'Largeur ≥ 1,40 m si longueur > 20 m. Recoupement par portes CF 1/2h tous les 30 m. Désenfumage si encloisonnées',
        mandatory: true,
        references: ['Article O 13']
      },
      {
        id: 'detection-hotel',
        title: 'Détection incendie',
        description: 'SSI catégorie A si > 4e catégorie. Détection dans chambres et locaux à risques. Équipement d\'alarme sonore dans toutes les chambres',
        mandatory: true,
        references: ['Article O 25']
      },
      {
        id: 'information-clients',
        title: 'Information des clients',
        description: 'Plan d\'évacuation dans chaque chambre. Consignes de sécurité affichées. Instructions en français et langues étrangères selon clientèle',
        mandatory: true,
        references: ['Article O 21']
      }
    ],
    tolerances: [],
    dimensions: [
      {
        element: 'Distance chambre-escalier',
        dimension: '≤ 35 m en cul-de-sac',
        maximum: '≤ 50 m si 2 issues',
        conditions: 'Distance parcourue depuis porte chambre'
      },
      {
        element: 'Largeur circulations',
        dimension: '≥ 1,00 m',
        minimum: '≥ 1,40 m si longueur > 20 m',
        conditions: 'Circulation horizontale principale'
      }
    ],
    relatedDocuments: ['Arrêté du 25 juin 1980', 'Code du tourisme']
  },
  {
    id: 'erp-type-p',
    type: 'regulation',
    title: 'ERP Type P - Salles de danse et salles de jeux',
    description: 'Sécurité incendie des salles de bal, discothèques, salles de jeux',
    regulationType: 'fire-safety',
    reference: 'ERP Type P',
    scope: 'Salles de danse, discothèques, salles de jeux, bowlings',
    category: 'fire-safety',
    tags: ['danse', 'jeux', 'discothèque', 'bowling', 'effectif'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    applicableFrom: '1980-06-25',
    keyRules: [
      {
        id: 'effectif-danse',
        title: 'Calcul de l\'effectif',
        description: 'Piste de danse : 3 personnes/m². Salle assise : 1 personne/siège. Salle debout : 3 personnes/m². Jeux : selon nombre postes + spectateurs',
        mandatory: true,
        references: ['Article P 2']
      },
      {
        id: 'eclairage-ambiance',
        title: 'Éclairage et ambiance',
        description: 'Éclairage de sécurité obligatoire même en ambiance tamisée. Balisage des dégagements visible. Éclairage d\'évacuation renforcé',
        mandatory: true,
        references: ['Article P 8']
      },
      {
        id: 'sonorisation-alarme',
        title: 'Sonorisation et alarme',
        description: 'Dispositif d\'alarme sonore adapté au niveau d\'ambiance. Possibilité de coupure musique pour diffusion alarme. Signal visuel complémentaire',
        mandatory: true,
        references: ['Article P 12']
      }
    ],
    tolerances: [],
    dimensions: [
      {
        element: 'Distance aux dégagements',
        dimension: '≤ 30 m depuis tout point',
        conditions: 'Distance parcourue réelle'
      }
    ],
    relatedDocuments: ['Arrêté du 25 juin 1980']
  },
  {
    id: 'erp-type-r',
    type: 'regulation',
    title: 'ERP Type R - Établissements d\'éveil, d\'enseignement, de formation',
    description: 'Sécurité incendie des écoles, collèges, lycées, universités, crèches',
    regulationType: 'fire-safety',
    reference: 'ERP Type R',
    scope: 'Crèches, écoles, collèges, lycées, universités, centres de formation',
    category: 'fire-safety',
    tags: ['école', 'enseignement', 'crèche', 'université', 'enfants'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '45 min',
    isPublic: true,
    isPremium: false,
    applicableFrom: '1980-06-25',
    keyRules: [
      {
        id: 'effectif-enseignement',
        title: 'Calcul de l\'effectif',
        description: 'Salles classe : effectif réel déclaré. Amphithéâtres : 1 personne/siège. Ateliers : selon surface/activité. Restaurants scolaires : 1 personne/m²',
        mandatory: true,
        references: ['Article R 2']
      },
      {
        id: 'escaliers-r',
        title: 'Escaliers et dégagements',
        description: 'Largeur ≥ 1,50 m pour effectif > 200 personnes. Paliers de repos tous les 25 marches maximum. Main courante obligatoire des 2 côtés',
        mandatory: true,
        references: ['Article R 13']
      },
      {
        id: 'locaux-sommeil',
        title: 'Locaux de sommeil (crèches)',
        description: 'Locaux au niveau d\'évacuation vers extérieur. Si étage : issue de secours spécifique. Détection incendie obligatoire. Surveillance permanente',
        mandatory: true,
        exceptions: ['Dérogation possible avec mesures compensatoires'],
        references: ['Article R 21']
      },
      {
        id: 'exercices-evacuation',
        title: 'Exercices d\'évacuation',
        description: 'Exercice trimestriel obligatoire. Consignes affichées dans chaque local. Formation du personnel. Registre des exercices tenu à jour',
        mandatory: true,
        references: ['Article R 47']
      },
      {
        id: 'laboratoires-ateliers',
        title: 'Laboratoires et ateliers',
        description: 'Isolement selon activité et matières stockées. Dispositifs de coupure d\'urgence. Moyens d\'extinction adaptés aux risques. Ventilation renforcée',
        mandatory: true,
        references: ['Article R 23']
      }
    ],
    tolerances: [],
    dimensions: [
      {
        element: 'Distance aux dégagements',
        dimension: '≤ 25 m depuis toute salle',
        conditions: 'Distance parcourue réelle'
      },
      {
        element: 'Largeur dégagements',
        dimension: '1 UP/100 personnes',
        minimum: '1,50 m si effectif > 200',
        conditions: 'Escaliers et circulations principales'
      }
    ],
         relatedDocuments: ['Arrêté du 25 juin 1980', 'Code de l\'éducation']
   },
   {
     id: 'erp-type-s',
     type: 'regulation',
     title: 'ERP Type S - Bibliothèques, centres de documentation et de consultation d\'archives',
     description: 'Sécurité incendie des bibliothèques, archives, centres de documentation',
     regulationType: 'fire-safety',
     reference: 'ERP Type S',
     scope: 'Bibliothèques, médiathèques, centres d\'archives, centres de documentation',
     category: 'fire-safety',
     tags: ['bibliothèque', 'archive', 'documentation', 'stockage', 'effectif'],
     lastUpdated: '2024-01-15',
     difficulty: 'intermediate',
     estimatedTime: '35 min',
     isPublic: true,
     isPremium: false,
     applicableFrom: '1980-06-25',
     keyRules: [
       {
         id: 'effectif-bibliotheque',
         title: 'Calcul de l\'effectif',
         description: 'Salles de lecture : 1 personne/siège + debout. Espaces circulation : 1 personne/10 m². Magasins : personnel seul. Salle conférence : 1 personne/siège',
         mandatory: true,
         references: ['Article S 2']
       },
       {
         id: 'magasins-stockage',
         title: 'Magasins de stockage',
         description: 'Isolement CF 2h si surface > 300 m². Détection incendie obligatoire. Accès réservé au personnel. Ventilation adaptée. Rayonnages métalliques recommandés',
         mandatory: true,
         references: ['Article S 15']
       },
       {
         id: 'protection-documents',
         title: 'Protection des documents',
         description: 'Extinction automatique par gaz inerte dans locaux précieux. Limitation des matériaux combustibles. Détection très précoce par aspiration',
         mandatory: true,
         exceptions: ['Documents de valeur moindre'],
         references: ['Article S 18']
       },
       {
         id: 'degagements-s',
         title: 'Dégagements',
         description: '1 UP/100 personnes. Largeur minimale 1,40 m pour circulations principales. Issues de secours depuis magasins',
         mandatory: true,
         references: ['Article S 4']
       }
     ],
     tolerances: [],
     dimensions: [
       {
         element: 'Distance aux dégagements',
         dimension: '≤ 40 m depuis magasins',
         maximum: '≤ 30 m depuis salles lecture',
         conditions: 'Distance parcourue réelle'
       },
       {
         element: 'Hauteur stockage',
         dimension: '≤ 8 m sans protection',
         maximum: '≤ 12 m avec protection automatique',
         conditions: 'Hauteur rayonnages documents'
       }
     ],
     relatedDocuments: ['Arrêté du 25 juin 1980', 'Code du patrimoine']
   },
   {
     id: 'erp-type-t',
     type: 'regulation',
     title: 'ERP Type T - Salles d\'exposition',
     description: 'Sécurité incendie des salles d\'exposition, foires, salons',
     regulationType: 'fire-safety',
     reference: 'ERP Type T',
     scope: 'Salles exposition, foires, salons, galeries d\'art, musées temporaires',
     category: 'fire-safety',
     tags: ['exposition', 'foire', 'salon', 'stand', 'effectif'],
     lastUpdated: '2024-01-15',
     difficulty: 'intermediate',
     estimatedTime: '35 min',
     isPublic: true,
     isPremium: false,
     applicableFrom: '1980-06-25',
     keyRules: [
       {
         id: 'effectif-exposition',
         title: 'Calcul de l\'effectif',
         description: 'Surface accessible/3 m² + exposants + personnel. Stands : selon surface et activité. Conférences : 1 personne/siège',
         mandatory: true,
         references: ['Article T 2']
       },
       {
         id: 'amenagement-stands',
         title: 'Aménagement des stands',
         description: 'Matériaux M2 maximum. Allées ≥ 1,40 m entre stands. Interdiction stockage sous stands. Alimentation électrique protégée',
         mandatory: true,
         references: ['Article T 15']
       },
       {
         id: 'reaction-feu-expo',
         title: 'Réaction au feu',
         description: 'Décors et stands : M2 maximum. Tentures : M1. Revêtements sol : M3. Gros mobilier : M3. Contrôle avant ouverture',
         mandatory: true,
         references: ['Article T 12']
       },
       {
         id: 'degagements-expo',
         title: 'Dégagements et circulations',
         description: 'Allées principales ≥ 3 m. Allées secondaires ≥ 1,40 m. Distance ≤ 30 m depuis tout point. Signalisation renforcée',
         mandatory: true,
         references: ['Article T 4']
       }
     ],
     tolerances: [],
     dimensions: [
       {
         element: 'Largeur allées principales',
         dimension: '≥ 3,00 m',
         conditions: 'Entre îlots de stands'
       },
       {
         element: 'Largeur allées secondaires',
         dimension: '≥ 1,40 m',
         conditions: 'Accès aux stands'
       },
       {
         element: 'Hauteur stands',
         dimension: '≤ 3,00 m en général',
         maximum: '≤ 5,00 m avec étude spécifique',
         conditions: 'Selon hauteur sous plafond'
       }
     ],
     relatedDocuments: ['Arrêté du 25 juin 1980', 'Arrêté du 18 novembre 1987']
   },
   {
     id: 'erp-type-u',
     type: 'regulation',
     title: 'ERP Type U - Établissements sanitaires',
     description: 'Sécurité incendie des hôpitaux, cliniques, centres de soins',
     regulationType: 'fire-safety',
     reference: 'ERP Type U',
     scope: 'Hôpitaux, cliniques, centres de soins, dispensaires, maternités',
     category: 'fire-safety',
     tags: ['hôpital', 'clinique', 'soin', 'patients', 'évacuation assistée'],
     lastUpdated: '2024-01-15',
     difficulty: 'advanced',
     estimatedTime: '50 min',
     isPublic: true,
     isPremium: false,
     applicableFrom: '1980-06-25',
     keyRules: [
       {
         id: 'effectif-sanitaire',
         title: 'Calcul de l\'effectif',
         description: 'Lits : 1 personne/lit + accompagnants + personnel. Consultations : selon planning. Urgences : capacité d\'accueil déclarée',
         mandatory: true,
         references: ['Article U 2']
       },
       {
         id: 'compartimentage-u',
         title: 'Compartimentage',
         description: 'Compartiments ≤ 1000 m² et ≤ 40 lits. Parois CF 1h minimum. Recoupement circulations tous les 40 m. Sas d\'indépendance pour locaux à risques',
         mandatory: true,
         references: ['Article U 19']
       },
       {
         id: 'evacuation-differentielle-u',
         title: 'Évacuation différentielle',
         description: 'Transfert horizontal prioritaire. Espaces d\'attente sécurisés. Évacuation verticale en dernier recours. Moyens spéciaux (matelas évacuation)',
         mandatory: true,
         references: ['Article U 23']
       },
       {
         id: 'detection-u',
         title: 'Détection et alarme',
         description: 'SSI catégorie A obligatoire. Détection dans toutes les chambres et locaux techniques. Report au poste de sécurité permanent. Alarme générale sélective',
         mandatory: true,
         references: ['Article U 31']
       },
       {
         id: 'installations-medicales',
         title: 'Installations médicales',
         description: 'Alimentation électrique secourus pour équipements vitaux. Ventilation maintenue en cas d\'incendie pour certains locaux. Stockage produits dangereux isolé',
         mandatory: true,
         references: ['Article U 15']
       },
       {
         id: 'personnel-securite-u',
         title: 'Personnel et organisation',
         description: 'Service de sécurité incendie permanent. Personnel formé à l\'évacuation des patients. Exercices adaptés aux contraintes sanitaires',
         mandatory: true,
         references: ['Article U 42']
       }
     ],
     tolerances: [],
     dimensions: [
       {
         element: 'Compartiment hospitalisation',
         dimension: '≤ 1000 m² et ≤ 40 lits',
         conditions: 'Séparation CF 1h'
       },
       {
         element: 'Largeur circulations',
         dimension: '≥ 2,00 m',
         conditions: 'Circulation principale avec brancards'
       },
       {
         element: 'Distance chambre-escalier',
         dimension: '≤ 40 m',
         conditions: 'Distance parcourue réelle'
       }
     ],
     relatedDocuments: ['Arrêté du 25 juin 1980', 'Code de la santé publique']
   },
   {
     id: 'erp-type-v',
     type: 'regulation',
     title: 'ERP Type V - Établissements de culte',
     description: 'Sécurité incendie des églises, mosquées, synagogues, temples',
     regulationType: 'fire-safety',
     reference: 'ERP Type V',
     scope: 'Églises, mosquées, synagogues, temples, chapelles, lieux de culte',
     category: 'fire-safety',
     tags: ['culte', 'église', 'mosquée', 'synagogue', 'temple', 'effectif'],
     lastUpdated: '2024-01-15',
     difficulty: 'intermediate',
     estimatedTime: '30 min',
     isPublic: true,
     isPremium: false,
     applicableFrom: '1980-06-25',
     keyRules: [
       {
         id: 'effectif-culte',
         title: 'Calcul de l\'effectif',
         description: 'Places assises : 1 personne/siège. Espaces debout : 3 personnes/m². Chœur/chorale : effectif réel. Tribune : selon configuration',
         mandatory: true,
         references: ['Article V 2']
       },
       {
         id: 'degagements-v',
         title: 'Dégagements',
         description: '1 UP/100 personnes. Répartition équilibrée des sorties. Largeur minimale 1,40 m. Distance ≤ 30 m depuis tout point',
         mandatory: true,
         references: ['Article V 4']
       },
       {
         id: 'protection-patrimoine',
         title: 'Protection du patrimoine',
         description: 'Extinction adaptée aux œuvres d\'art. Éviter dégâts d\'eau sur objets précieux. Détection précoce recommandée. Compartimentage pour isolation',
         mandatory: true,
         exceptions: ['Bâtiments sans valeur patrimoniale'],
         references: ['Article V 15']
       },
       {
         id: 'equipements-culte',
         title: 'Équipements spécifiques',
         description: 'Éclairage bougies réglementé. Installations électriques protégées. Chauffage à sécurité renforcée. Sonorisation compatible alarme',
         mandatory: true,
         references: ['Article V 12']
       }
     ],
     tolerances: [],
     dimensions: [
       {
         element: 'Distance aux dégagements',
         dimension: '≤ 30 m depuis toute place',
         conditions: 'Distance parcourue réelle'
       },
       {
         element: 'Largeur allées intérieures',
         dimension: '≥ 1,20 m',
         conditions: 'Entre rangées de sièges'
       }
     ],
     relatedDocuments: ['Arrêté du 25 juin 1980', 'Code du patrimoine']
   },
   {
     id: 'erp-type-w',
     type: 'regulation',
     title: 'ERP Type W - Administrations, banques, bureaux',
     description: 'Sécurité incendie des administrations, banques, bureaux ouverts au public',
     regulationType: 'fire-safety',
     reference: 'ERP Type W',
     scope: 'Administrations, banques, bureaux recevant du public, centres d\'affaires',
     category: 'fire-safety',
     tags: ['administration', 'banque', 'bureau', 'accueil public', 'effectif'],
     lastUpdated: '2024-01-15',
     difficulty: 'intermediate',
     estimatedTime: '35 min',
     isPublic: true,
     isPremium: false,
     applicableFrom: '1980-06-25',
     keyRules: [
       {
         id: 'effectif-bureau',
         title: 'Calcul de l\'effectif',
         description: 'Bureaux ouverts au public : surface/10 m² + personnel. Guichets : nombre de postes × coeff. Salles réunion : 1 personne/siège',
         mandatory: true,
         references: ['Article W 2']
       },
       {
         id: 'degagements-w',
         title: 'Dégagements',
         description: '1 UP/100 personnes (niveau, sous-sol), 1 UP/150 personnes (étages). Distance ≤ 30 m. Largeur minimale 1,40 m',
         mandatory: true,
         references: ['Article W 4']
       },
       {
         id: 'locaux-archives',
         title: 'Locaux d\'archives',
         description: 'Isolement CF selon volume stocké. Détection incendie obligatoire. Accès contrôlé. Extinction adaptée (éviter dégâts eau)',
         mandatory: true,
         references: ['Article W 15']
       },
       {
         id: 'securite-bancaire',
         title: 'Spécificités bancaires',
         description: 'Compatibilité sécurité incendie/sécurité malveillance. Sas d\'accès autorisés. Issues de secours sécurisées. Alarme intrusion distincte',
         mandatory: true,
         exceptions: ['Bureaux sans manipulation espèces'],
         references: ['Article W 18']
       }
     ],
     tolerances: [],
     dimensions: [
       {
         element: 'Distance aux dégagements',
         dimension: '≤ 30 m depuis tout point public',
         conditions: 'Distance parcourue réelle'
       },
       {
         element: 'Largeur guichets',
         dimension: '≥ 0,60 m par file',
         conditions: 'Passage libre pour évacuation'
       }
     ],
     relatedDocuments: ['Arrêté du 25 juin 1980', 'Code monétaire et financier']
   },
   {
     id: 'erp-type-x',
     type: 'regulation',
     title: 'ERP Type X - Établissements sportifs couverts',
     description: 'Sécurité incendie des gymnases, piscines, patinoires, salles de sport',
     regulationType: 'fire-safety',
     reference: 'ERP Type X',
     scope: 'Gymnases, piscines couvertes, patinoires, salles de sport, dojos',
     category: 'fire-safety',
     tags: ['sport', 'gymnase', 'piscine', 'patinoire', 'gradins', 'effectif'],
     lastUpdated: '2024-01-15',
     difficulty: 'intermediate',
     estimatedTime: '40 min',
     isPublic: true,
     isPremium: false,
     applicableFrom: '1980-06-25',
     keyRules: [
       {
         id: 'effectif-sportif',
         title: 'Calcul de l\'effectif',
         description: 'Pratiquants : selon activité et surface. Spectateurs : 1 personne/siège ou 3/m² debout. Vestiaires : 1 personne/4 m². Piscine : 1 personne/3 m² bassin',
         mandatory: true,
         references: ['Article X 2']
       },
       {
         id: 'degagements-x',
         title: 'Dégagements',
         description: '1 UP/100 personnes. Répartition équilibrée autour aire de sport. Vomitoires pour gradins. Distance ≤ 30 m',
         mandatory: true,
         references: ['Article X 4']
       },
       {
         id: 'vestiaires-douches',
         title: 'Vestiaires et douches',
         description: 'Aménagement évitant la panique (pas de cul-de-sac). Sol antidérapant. Évacuation possible en tenue légère. Chauffage sécurisé',
         mandatory: true,
         references: ['Article X 15']
       },
       {
         id: 'piscines-specifique',
         title: 'Spécificités piscines',
         description: 'Évacuation depuis bassins facilitée. Produits chimiques stockés en local isolé CF 2h. Ventilation renforcée. Alarme adaptée à l\'acoustique',
         mandatory: true,
         exceptions: ['Pataugeoires < 2 m²'],
         references: ['Article X 18']
       },
       {
         id: 'equipements-sportifs',
         title: 'Équipements sportifs',
         description: 'Matériels de sport non combustibles ou M2. Filets et buts amovibles pour évacuation. Protection des équipements électriques',
         mandatory: true,
         references: ['Article X 12']
       }
     ],
     tolerances: [],
     dimensions: [
       {
         element: 'Distance aires sport-sorties',
         dimension: '≤ 30 m',
         conditions: 'Depuis tout point de l\'aire'
       },
       {
         element: 'Largeur vomitoires gradins',
         dimension: '≥ 1,20 m',
         conditions: 'Évacuation spectateurs'
       },
       {
         element: 'Largeur vestiaires',
         dimension: '≥ 1,40 m',
         conditions: 'Circulation principale'
       }
     ],
     relatedDocuments: ['Arrêté du 25 juin 1980', 'Code du sport']
   },
   {
     id: 'erp-type-y',
     type: 'regulation',
     title: 'ERP Type Y - Musées',
     description: 'Sécurité incendie des musées, galeries d\'art permanentes',
     regulationType: 'fire-safety',
     reference: 'ERP Type Y',
     scope: 'Musées, galeries d\'art, centres d\'interprétation, écomusées',
     category: 'fire-safety',
     tags: ['musée', 'galerie art', 'collection', 'patrimoine', 'effectif'],
     lastUpdated: '2024-01-15',
     difficulty: 'advanced',
     estimatedTime: '40 min',
     isPublic: true,
     isPremium: false,
     applicableFrom: '1980-06-25',
     keyRules: [
       {
         id: 'effectif-musee',
         title: 'Calcul de l\'effectif',
         description: 'Salles exposition : surface/5 m² en simultané. Réserves : personnel seul. Auditorium : 1 personne/siège. Ateliers pédagogiques : selon activité',
         mandatory: true,
         references: ['Article Y 2']
       },
       {
         id: 'protection-collections',
         title: 'Protection des collections',
         description: 'Extinction par gaz inerte pour œuvres précieuses. Éviter dégâts d\'eau. Détection très précoce par aspiration. Compartimentage des réserves',
         mandatory: true,
         references: ['Article Y 15']
       },
       {
         id: 'reserves-stockage',
         title: 'Réserves et stockage',
         description: 'Isolement CF 2h. Accès strictement contrôlé. Détection incendie obligatoire. Matériaux de conditionnement M1. Climat contrôlé maintenu',
         mandatory: true,
         references: ['Article Y 18']
       },
       {
         id: 'degagements-y',
         title: 'Dégagements',
         description: '1 UP/100 personnes. Largeur adaptée au flux touristique. Signalisation renforcée (multilingue). Distance ≤ 40 m en général',
         mandatory: true,
         references: ['Article Y 4']
       },
       {
         id: 'eclairage-expo',
         title: 'Éclairage et ambiance',
         description: 'Éclairage sécurité adapté à l\'ambiance tamisée. Sources chaudes éloignées des œuvres. Éclairage d\'évacuation contrasté',
         mandatory: true,
         references: ['Article Y 12']
       }
     ],
     tolerances: [],
     dimensions: [
       {
         element: 'Distance aux dégagements',
         dimension: '≤ 40 m depuis réserves',
         maximum: '≤ 30 m depuis salles exposition',
         conditions: 'Distance parcourue réelle'
       },
       {
         element: 'Largeur minimale circulation',
         dimension: '≥ 1,40 m',
         conditions: 'Flux touristique important'
       }
     ],
     relatedDocuments: ['Arrêté du 25 juin 1980', 'Code du patrimoine', 'Directive musées de France']
   },
   {
     id: 'habitation-r-plus-3',
    type: 'regulation',
    title: 'Habitation R+3 et plus - Sécurité incendie',
    description: 'Règles de sécurité incendie pour immeubles d\'habitation de 3ème famille',
    regulationType: 'fire-safety',
    reference: 'Arrêté 31 janvier 1986',
    scope: 'Immeubles habitation R+3 à R+7 (3ème famille)',
    category: 'fire-safety',
    tags: ['habitation', 'immeuble', 'dégagements', 'désenfumage', 'colonnes sèches'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '35 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'escaliers-proteges',
        title: 'Escaliers protégés obligatoires',
        description: 'Escaliers encloisonnés CF 1h, portes CF 1/2h, désenfumage naturel ou mécanique',
        mandatory: true
      },
      {
        id: 'colonnes-seches',
        title: 'Colonnes sèches',
        description: 'Obligatoires si plancher haut > 18 m. Prises de raccordement tous les 2 niveaux',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [
      {
        element: 'Largeur minimale escaliers',
        dimension: '1,20 m',
        conditions: 'Escaliers principaux'
      }
    ],
    relatedDocuments: ['Arrêté 31 janvier 1986', 'Code de la construction']
  }
];

// ====== ACCESSIBILITÉ PMR ======
export const accessibilityRegulation: RegulationDocument[] = [
  {
    id: 'accessibilite-erp-neuf',
    type: 'regulation',
    title: 'Accessibilité ERP neufs - Décret 2006-555',
    description: 'Règles d\'accessibilité handicapés pour ERP et IOP neufs',
    regulationType: 'accessibility',
    reference: 'Décret 2006-555',
    scope: 'Tous ERP et IOP neufs, tous types de handicap',
    category: 'accessibility',
    tags: ['accessibilité', 'handicap', 'ERP', 'rampe', 'largeur', 'signalétique'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    applicableFrom: '2007-01-01',
    keyRules: [
      {
        id: 'cheminement-accessible',
        title: 'Cheminement extérieur accessible',
        description: 'Largeur ≥ 1,40 m pour croisement 2 fauteuils. Pente ≤ 5% (≤ 4% recommandée). Ressaut ≤ 2 cm (≤ 4 cm si chanfreiné à 33%). Dévers ≤ 2%. Sol stable, non glissant, non meuble',
        mandatory: true,
        exceptions: ['Largeur 1,20 m si impossibilité technique majeure avec aires de croisement tous les 10 m'],
        references: ['Arrêté 8 décembre 2014 art 2']
      },
      {
        id: 'portes-accessibles',
        title: 'Portes et portails accessibles',
        description: 'Largeur utile ≥ 0,77 m (passage libre). Portes principales ≥ 0,83 m. Effort ouverture ≤ 50 N. Dispositif fermeture temporisé ≥ 7 secondes. Poignée entre 0,90 et 1,30 m',
        mandatory: true,
        exceptions: ['Portes coupe-feu : effort ≤ 65 N'],
        references: ['Arrêté 8 décembre 2014 art 10']
      },
      {
        id: 'rampe-pente',
        title: 'Rampes d\'accès',
        description: 'Pente ≤ 5% en usage permanent (≤ 8% sur 2 m max, ≤ 10% sur 0,5 m max). Largeur ≥ 1,20 m. Palier repos tous les 10 m (1,40 × 1,70 m). Main courante obligatoire si dénivelé > 40 cm',
        mandatory: true,
        exceptions: ['Pente ≤ 12% autorisée sur 0,50 m avec accord commission accessibilité'],
        references: ['Arrêté 8 décembre 2014 art 3']
      },
      {
        id: 'stationnement-pmr',
        title: 'Places de stationnement PMR',
        description: '2% des places (minimum 1). Dimensions 3,30 × 5,00 m. Passage latéral ≥ 0,80 m. Située sur cheminement accessible. Signalisation verticale et marquage au sol obligatoires',
        mandatory: true,
        exceptions: ['1% seulement pour parkings > 500 places'],
        references: ['Arrêté 8 décembre 2014 art 4']
      },
      {
        id: 'ascenseurs-accessibles',
        title: 'Ascenseurs accessibles',
        description: 'Obligatoire si bâtiment > RDC recevant public. Cabine ≥ 1,00 × 1,30 m. Porte ≥ 0,80 m. Palier 1,50 × 1,50 m. Boutons entre 0,90 et 1,30 m. Signal sonore et visuel',
        mandatory: true,
        exceptions: ['Escalator/tapis roulant possible en complément'],
        references: ['Arrêté 8 décembre 2014 art 12']
      },
      {
        id: 'sanitaires-pmr',
        title: 'Sanitaires accessibles PMR',
        description: '1 cabinet PMR par groupe de sanitaires. Dimensions 1,50 × 2,10 m. Porte ouvrant vers extérieur. Cuvette suspendue hauteur 0,45-0,50 m. Barre appui relevable à droite. Lave-mains accessible',
        mandatory: true,
        exceptions: ['Exemption possible si sanitaires familiaux accessibles à proximité'],
        references: ['Arrêté 8 décembre 2014 art 15']
      },
      {
        id: 'signalisation-pmr',
        title: 'Signalisation et information',
        description: 'Signalétique homogène, contrastée, lisible. Pictogrammes normalisés. Information en relief et braille à 0,90-1,30 m. Signalisation sonore si nécessaire. Éclairage adapté',
        mandatory: true,
        references: ['Arrêté 8 décembre 2014 art 14']
      }
    ],
    tolerances: [
      {
        parameter: 'Largeur de passage',
        tolerance: '+ 5 cm / - 0 cm',
        conditions: 'Mesure au point le plus étroit'
      }
    ],
    dimensions: [
      {
        element: 'Espace de manœuvre devant porte',
        dimension: '1,70 × 2,20 m (côté tirant)',
        minimum: '1,70 × 1,70 m (côté poussant)',
        conditions: 'Rectangle libre d\'obstacle. Si sas : 2,20 × 2,20 m'
      },
      {
        element: 'Hauteur des poignées',
        dimension: '0,90 à 1,30 m',
        conditions: 'Par rapport au sol fini. Effort ≤ 50 N pour ouverture'
      },
      {
        element: 'Places PMR stationnement',
        dimension: '3,30 × 5,00 m',
        conditions: 'Passage latéral ≥ 0,80 m. Reliée à entrée accessible'
      },
      {
        element: 'Largeur palier d\'étage',
        dimension: '1,50 × 1,50 m',
        minimum: '1,20 m si porte coulissante',
        conditions: 'Devant porte d\'ascenseur et palier d\'escalier'
      },
      {
        element: 'Marches escalier accessible',
        dimension: 'Hauteur ≤ 16 cm, giron ≥ 28 cm',
        conditions: 'Nez de marche contrasté. Première et dernière marche contrastées'
      },
      {
        element: 'Main courante escalier',
        dimension: 'Hauteur 0,80-1,00 m',
        conditions: 'Des 2 côtés si largeur > 1,20 m. Prolongée de 30 cm en haut/bas'
      },
      {
        element: 'Aire retournement fauteuil',
        dimension: 'Cercle Ø 1,50 m',
        conditions: 'Dans chaque local accessible au public'
      },
      {
        element: 'Guichet/comptoir accessible',
        dimension: 'Largeur ≥ 0,60 m, hauteur ≤ 0,80 m',
        conditions: 'Vide en partie inférieure : hauteur ≥ 0,70 m, profondeur ≥ 0,30 m'
      },
      {
        element: 'Cabinet aisance PMR',
        dimension: '1,50 × 2,10 m (hors débattement porte)',
        conditions: 'Porte 0,80 m ouvrant vers extérieur. Espace latéral ≥ 0,80 m'
      },
      {
        element: 'Hauteur équipements',
        dimension: '0,90-1,30 m (commandes)',
        minimum: '0,40 m mini sol (prises)',
        maximum: '1,30 m maxi (interrupteurs)',
        conditions: 'Dispositifs de service accessible en position assise'
      }
    ],
    relatedDocuments: ['Arrêté 8 décembre 2014', 'Arrêté 20 avril 2017']
  },
  {
    id: 'accessibilite-logement',
    type: 'regulation',
    title: 'Accessibilité logements neufs - Arrêté 24 décembre 2015',
    description: 'Règles accessibilité pour logements collectifs neufs',
    regulationType: 'accessibility',
    reference: 'Arrêté 24 décembre 2015',
    scope: 'Logements collectifs neufs, maisons individuelles',
    category: 'accessibility',
    tags: ['logement', 'handicap', 'porte', 'salle de bain', 'cuisine'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'acces-logement',
        title: 'Accès au logement',
        description: 'Une entrée accessible par logement. Largeur ≥ 0,80 m. Seuil ≤ 2 cm',
        mandatory: true
      },
      {
        id: 'circulation-interieure',
        title: 'Circulation intérieure',
        description: 'Largeur des circulations ≥ 0,90 m. Portes intérieures ≥ 0,77 m',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [
      {
        element: 'Espace libre devant WC',
        dimension: '0,80 × 1,30 m',
        conditions: 'Minimum devant cuvette'
      }
    ],
    relatedDocuments: ['Décret 2006-555', 'Code de la construction']
  }
];

// ====== THERMIQUE RE2020 ======
export const thermalRegulation: RegulationDocument[] = [
  {
    id: 're2020-indicateurs',
    type: 'regulation',
    title: 'RE2020 - Les 5 indicateurs de performance',
    description: 'Détail des 5 indicateurs de la Réglementation Environnementale 2020',
    regulationType: 'thermal',
    reference: 'Arrêté 4 août 2021',
    scope: 'Bâtiments neufs résidentiels et tertiaires',
    category: 'thermal',
    tags: ['RE2020', 'Bbio', 'Cep', 'Ic', 'DH', 'performance énergétique'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '40 min',
    isPublic: true,
    isPremium: false,
    applicableFrom: '2022-01-01',
    keyRules: [
      {
        id: 'bbio-besoin',
        title: 'Bbio - Besoin bioclimatique',
        description: 'Bbio ≤ Bbiomax (zone climatique). Qualité conception bioclimatique : isolation renforcée, optimisation apports solaires, inertie thermique. Bbiomax H1 = 63 pts, H2 = 65 pts, H3 = 75 pts. Calcul selon surface habitable et compacité',
        mandatory: true,
        exceptions: ['Modulation selon altitude, zone de bruit, contraintes architecturales'],
        references: ['Méthode TH-BCE 2020', 'Arrêté 4 août 2021']
      },
      {
        id: 'cep-consommation',
        title: 'Cep - Consommation énergie primaire',
        description: 'Cep ≤ Cepmax et Cep,nr ≤ Cep,nr max. 5 usages : chauffage, ECS, refroidissement, éclairage, auxiliaires. Cepmax H1 = 85 kWh/m².an, H2 = 75 kWh/m².an, H3 = 65 kWh/m².an. Cep,nr ≤ 55 kWh/m².an (énergies non renouvelables)',
        mandatory: true,
        exceptions: ['Modulation selon surface, contraintes urbaines, systèmes innovants'],
        references: ['Arrêté 4 août 2021 art 14']
      },
      {
        id: 'ic-carbone',
        title: 'Ic - Impact carbone',
        description: 'Ic construction ≤ Ic max selon typologie. Maison : Ic ≤ 640 kgCO2eq/m². Collectif ≤ 740 kgCO2eq/m². Émissions GES cycle de vie 50 ans : matériaux, transport, mise en œuvre, fin de vie. Calcul ACV selon EN 15978',
        mandatory: true,
        exceptions: ['Modulation selon zone sismique, contraintes locales'],
        references: ['Base INIES', 'EN 15978', 'Arrêté 4 août 2021']
      },
      {
        id: 'dh-confort',
        title: 'DH - Degrés-heures d\'inconfort',
        description: 'DH ≤ DHmax selon zone. H1/H2 = 350 DH, H3 = 425 DH. Inconfort si T°int > 26°C en journée, > 28°C la nuit. Calcul 8760h/an. Limitation besoin climatisation, favorise conception bioclimatique',
        mandatory: true,
        exceptions: ['Majoration possible avec systèmes adaptatifs, protections solaires mobiles'],
        references: ['Méthode TH-BCE 2020', 'NF EN 16798']
      },
      {
        id: 'energie-renouvelable',
        title: 'Recours aux énergies renouvelables',
        description: 'Production EnR obligatoire : 5 kWh/m².an minimum (PV, solaire thermique, biomasse, géothermie, éolien). Autoconsommation privilégiée. Réseaux de chaleur EnR&R autorisés',
        mandatory: true,
        exceptions: ['Impossibilité technique justifiée par bureau de contrôle'],
        references: ['Art 16 arrêté 4 août 2021']
      },
      {
        id: 'etancheite-air',
        title: 'Étanchéité à l\'air renforcée',
        description: 'Perméabilité Q4Pa-surf ≤ 0,6 m³/h.m² (maisons), ≤ 1,0 m³/h.m² (collectif). Test obligatoire par opérateur certifié. Mesure sous 4 Pa. Points singuliers traités : menuiseries, passages gaines, jonctions',
        mandatory: true,
        references: ['NF EN ISO 9972', 'FD P 50-784']
      },
      {
        id: 'ventilation-performance',
        title: 'Système de ventilation performant',
        description: 'VMC double flux obligatoire si possible. Rendement ≥ 85%. VMC simple flux hygro B acceptée. Débit fonction occupation réelle. Puits canadien/provençal autorisé en complément',
        mandatory: true,
        exceptions: ['Ventilation naturelle avec dispositifs autorégulés en secteur protégé'],
        references: ['Arrêté 24 mars 1982 modifié']
      }
    ],
    tolerances: [
      {
        parameter: 'Performance énergétique',
        tolerance: '± 5% sur calcul Cep',
        conditions: 'Vérification par bureau de contrôle'
      },
      {
        parameter: 'Test étanchéité air',
        tolerance: '+10% sur seuils réglementaires',
        conditions: 'Si première mesure. Reprise obligatoire si dépassement'
      }
    ],
    dimensions: [
      {
        element: 'Isolation murs extérieurs',
        dimension: 'R ≥ 4,0 m².K/W',
        minimum: 'R = 3,7 m².K/W (ITI contrainte)',
        conditions: 'Rupture ponts thermiques. Ψ ≤ 0,5 W/m.K'
      },
      {
        element: 'Isolation toiture/combles',
        dimension: 'R ≥ 8,0 m².K/W',
        minimum: 'R = 7,5 m².K/W (contrainte)',
        conditions: 'Étanchéité air soignée. Pare-vapeur continu'
      },
      {
        element: 'Isolation plancher bas',
        dimension: 'R ≥ 4,0 m².K/W',
        minimum: 'R = 3,0 m².K/W (contrainte)',
        conditions: 'Sous face ou chape isolante'
      },
      {
        element: 'Menuiseries performances',
        dimension: 'Uw ≤ 1,3 W/m².K',
        minimum: 'Sw ≥ 0,3 (facteur solaire)',
        conditions: 'Triple vitrage recommandé zones H1/H2'
      },
      {
        element: 'Ponts thermiques linéiques',
        dimension: 'Ψ moyen ≤ 0,28 W/m.K',
        conditions: 'Calcul selon méthode réglementaire ou Therm'
      },
      {
        element: 'Surface minimum EnR',
        dimension: '5 kWh/m².an production',
        minimum: '2 m² PV pour 100 m² habitable',
        conditions: 'Ou équivalent autres EnR (solaire thermique, géothermie)'
      },
      {
        element: 'Débits ventilation minimum',
        dimension: '0,3 vol/h base + modulation',
        minimum: '15 m³/h par occupant',
        conditions: 'Détection présence/CO2 autorisée'
      },
      {
        element: 'Inertie thermique minimum',
        dimension: 'Classe I3 (moyenne)',
        minimum: 'Classe I2 (faible) acceptée',
        conditions: 'Matériaux lourds privilégiés : béton, pierre, terre cuite'
      }
    ],
    relatedDocuments: ['Arrêté 4 août 2021', 'Méthode TH-BCE 2020', 'Base INIES']
  },
  {
    id: 'rt-existant',
    type: 'regulation',
    title: 'RT Existant - Rénovation thermique',
    description: 'Réglementation thermique pour la rénovation de bâtiments existants',
    regulationType: 'thermal',
    reference: 'Arrêté 3 mai 2007',
    scope: 'Rénovation de bâtiments existants > 1000 m²',
    category: 'thermal',
    tags: ['rénovation', 'isolation', 'performance', 'RT existant'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'isolation-renovation',
        title: 'Performance des éléments isolés',
        description: 'R ≥ 2,8 m².K/W (murs), R ≥ 4,5 m².K/W (toitures), R ≥ 2,1 m².K/W (planchers bas)',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['Arrêté 3 mai 2007', 'Guide ADEME']
  }
];

// ====== ACOUSTIQUE ======
export const acousticRegulation: RegulationDocument[] = [
  {
    id: 'nra-logements',
    type: 'regulation',
    title: 'NRA - Nouvelle Réglementation Acoustique logements',
    description: 'Réglementation acoustique pour bâtiments d\'habitation neufs',
    regulationType: 'acoustic',
    reference: 'Arrêté 30 juin 1999',
    scope: 'Bâtiments d\'habitation neufs',
    category: 'acoustic',
    tags: ['acoustique', 'logement', 'isolement', 'bruit', 'DnT,A'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    applicableFrom: '2000-01-01',
    keyRules: [
      {
        id: 'isolement-aerien-exterieur',
        title: 'Isolement aux bruits aériens extérieurs',
        description: 'DnT,A,tr ≥ 30 dB (voies ordinaires), ≥ 35 dB (voies importantes), ≥ 38 dB (voies ferrées)',
        mandatory: true,
        references: ['Arrêté 30 juin 1999']
      },
      {
        id: 'isolement-entre-logements',
        title: 'Isolement entre logements',
        description: 'DnT,A ≥ 53 dB (murs séparatifs), DnT,A ≥ 50 dB (sols)',
        mandatory: true
      },
      {
        id: 'bruit-impact',
        title: 'Bruits d\'impact',
        description: 'L\'nT,w ≤ 58 dB (sols entre logements)',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Isolement acoustique DnT,A',
        tolerance: '- 3 dB toléré',
        conditions: 'Mesure in situ'
      }
    ],
    dimensions: [],
    relatedDocuments: ['NF EN ISO 717', 'NF S 31-057']
  },
  {
    id: 'acoustique-erp',
    type: 'regulation',
    title: 'Acoustique dans les ERP',
    description: 'Réglementation acoustique pour établissements recevant du public',
    regulationType: 'acoustic',
    reference: 'Décret 2006-892',
    scope: 'ERP de tous types : enseignement, santé, hôtellerie',
    category: 'acoustic',
    tags: ['ERP', 'acoustique', 'réverbération', 'isolement', 'école'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'isolement-exterieur-erp',
        title: 'Isolement extérieur ERP',
        description: 'DnT,A,tr ≥ 30 dB minimum. Majoré selon exposition au bruit',
        mandatory: true
      },
      {
        id: 'reverberation-salles',
        title: 'Temps de réverbération',
        description: 'TR ≤ 0,8 s (salles classe), TR ≤ 1,2 s (restaurants)',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['Arrêté 25 avril 2003', 'NF S 31-080']
  }
];

// ====== PARASISMIQUE ======
export const seismicRegulation: RegulationDocument[] = [
  {
    id: 'eurocode-8',
    type: 'regulation',
    title: 'Eurocode 8 - Conception parasismique',
    description: 'Règles de conception parasismique des structures',
    regulationType: 'seismic',
    reference: 'NF EN 1998',
    scope: 'Conception parasismique tous types de structures',
    category: 'seismic',
    tags: ['séisme', 'conception', 'accélération', 'ductilité', 'contreventement'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '45 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'zonage-sismique',
        title: 'Zonage sismique français',
        description: 'Zone 1 (très faible), Zone 2 (faible), Zone 3 (modérée), Zone 4 (moyenne), Zone 5 (forte)',
        mandatory: true,
        references: ['Décret 2010-1255']
      },
      {
        id: 'acceleration-reference',
        title: 'Accélération de référence',
        description: 'agr = 0,4 m/s² (zone 1), 0,7 m/s² (zone 2), 1,1 m/s² (zone 3), 1,6 m/s² (zone 4), 3,0 m/s² (zone 5)',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['Décret 2010-1255', 'Arrêté 22 octobre 2010']
  }
];

// ====== HYGROMÉTRIE ======
export const hygrothermalRegulation: RegulationDocument[] = [
  {
    id: 'condensation-parois',
    type: 'regulation',
    title: 'Prévention condensation dans les parois',
    description: 'Règles de prévention des condensations superficielles et interstitielles',
    regulationType: 'hygrothermal',
    reference: 'NF EN ISO 13788',
    scope: 'Parois de bâtiments : murs, toitures, planchers',
    category: 'hygrothermal',
    tags: ['condensation', 'vapeur d\'eau', 'pare-vapeur', 'perméabilité'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'pare-vapeur-obligatoire',
        title: 'Pare-vapeur côté chaud',
        description: 'Sd ≥ 18 m pour climat français. Continuité obligatoire',
        mandatory: true,
        exceptions: ['Murs perspirants avec matériaux hygrorégulants']
      },
      {
        id: 'verification-glaser',
        title: 'Vérification méthode Glaser',
        description: 'Calcul des risques de condensation interstitielle selon NF EN ISO 13788',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['NF EN ISO 13788', 'Règles Th-Bât']
  }
];

// ====== DTU COMPLÉMENTAIRES SECOND ŒUVRE ======
export const dtuSecondOeuvre: RegulationDocument[] = [
  {
    id: 'dtu-36-1',
    type: 'regulation',
    title: 'NF DTU 36.1 - Menuiserie en bois',
    description: 'Fenêtres et portes-fenêtres en bois',
    regulationType: 'dtu',
    reference: 'NF DTU 36.1',
    scope: 'Menuiseries bois : fenêtres, portes-fenêtres, volets',
    category: 'dtu',
    tags: ['menuiserie bois', 'fenêtre', 'pose', 'étanchéité'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'etancheite-menuiserie',
        title: 'Étanchéité à l\'eau et à l\'air',
        description: 'Calfeutrement continu. Bavettes et rejingots obligatoires',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Équerrage des menuiseries',
        tolerance: '± 2 mm par mètre',
        conditions: 'Diagonales et angles droits'
      }
    ],
    dimensions: [
      {
        element: 'Jeu de pose menuiserie',
        dimension: '10-20 mm',
        conditions: 'Selon matériau du gros œuvre'
      }
    ],
    relatedDocuments: ['DTU 36.5', 'DTU 20.1', 'NF EN 14351']
  },
  {
    id: 'dtu-37-1',
    type: 'regulation',
    title: 'NF DTU 37.1 - Menuiseries métalliques',
    description: 'Fenêtres et portes-fenêtres métalliques',
    regulationType: 'dtu',
    reference: 'NF DTU 37.1',
    scope: 'Menuiseries aluminium, acier, PVC',
    category: 'dtu',
    tags: ['menuiserie métallique', 'aluminium', 'PVC', 'rupture pont thermique'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'rupture-pont-thermique',
        title: 'Rupture de pont thermique',
        description: 'RPT obligatoire pour menuiseries aluminium en logement',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [],
    relatedDocuments: ['DTU 36.5', 'NF EN 14351']
  },
  {
    id: 'dtu-58-1',
    type: 'regulation',
    title: 'NF DTU 58.1 - Plafonds suspendus',
    description: 'Plafonds suspendus à ossature métallique',
    regulationType: 'dtu',
    reference: 'NF DTU 58.1',
    scope: 'Plafonds suspendus décoratifs et techniques',
    category: 'dtu',
    tags: ['plafond suspendu', 'ossature métallique', 'dalle minérale'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '25 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'charge-plafond',
        title: 'Charges admissibles',
        description: 'Charge utile max 15 kg/m² en plus du poids propre',
        mandatory: true
      }
    ],
    tolerances: [],
    dimensions: [
      {
        element: 'Hauteur libre mini sous plafond',
        dimension: '2,20 m en logement',
        conditions: 'Hauteur réglementaire'
      }
    ],
    relatedDocuments: ['DTU 25.41', 'NF EN 13964']
  }
];

// ====== DTU ISOLATION ======
export const dtuIsolation: RegulationDocument[] = [
  {
    id: 'dtu-45-10',
    type: 'regulation',
    title: 'NF DTU 45.10 - Isolation des combles par panneaux ou rouleaux',
    description: 'Isolation thermique des combles perdus et aménagés',
    regulationType: 'dtu',
    reference: 'NF DTU 45.10',
    scope: 'Isolation combles par laines minérales manufacturées',
    category: 'dtu',
    tags: ['isolation combles', 'laine minérale', 'pont thermique', 'pare-vapeur'],
    lastUpdated: '2024-01-15',
    difficulty: 'intermediate',
    estimatedTime: '30 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'epaisseur-isolation-combles',
        title: 'Épaisseur d\'isolation',
        description: 'R ≥ 7 m².K/W en combles perdus pour RT2012. R ≥ 10 m².K/W recommandé RE2020',
        mandatory: true,
        references: ['RE2020', 'RT2012']
      },
      {
        id: 'pare-vapeur-combles',
        title: 'Pare-vapeur côté chauffé',
        description: 'Sd ≥ 18 m obligatoire côté chauffé. Continuité des lés assurée',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Continuité isolation',
        tolerance: 'Absence de pont thermique',
        conditions: 'Contrôle thermographique'
      }
    ],
    dimensions: [
      {
        element: 'Épaisseur mini isolation combles',
        dimension: 'Selon performance visée',
        minimum: '300 mm pour R = 7 m².K/W',
        conditions: 'Laine de verre λ = 0,040 W/m.K'
      }
    ],
    relatedDocuments: ['DTU 31.2', 'RE2020', 'Règles Th-Bât']
  }
];

// ====== DTU TECHNIQUES SPÉCIALES ======
export const dtuTechniquesSpeciales: RegulationDocument[] = [
  {
    id: 'dtu-60-1',
    type: 'regulation',
    title: 'NF DTU 60.1 - Plomberie sanitaire pour bâtiments d\'habitation',
    description: 'Réseaux de distribution et évacuation d\'eau',
    regulationType: 'dtu',
    reference: 'NF DTU 60.1',
    scope: 'Distribution eau chaude/froide et évacuation EU/EV',
    category: 'dtu',
    tags: ['plomberie', 'distribution eau', 'évacuation', 'dimensionnement'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '40 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'pression-distribution',
        title: 'Pression de service',
        description: 'Pression mini 0,3 bar au robinet le plus défavorisé. Pression maxi 4 bar',
        mandatory: true
      },
      {
        id: 'pente-evacuation',
        title: 'Pentes des évacuations',
        description: 'EU : 1-3 cm/m. EV : 0,5-1 cm/m. Adaptation selon diamètre',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Pente des canalisations',
        tolerance: '± 0,2 cm/m',
        conditions: 'Vérification par niveau laser'
      }
    ],
    dimensions: [
      {
        element: 'Diamètre mini chute EU',
        dimension: '100 mm',
        conditions: 'Chute principale immeuble'
      }
    ],
    relatedDocuments: ['DTU 60.5', 'DTU 64.1', 'NF EN 806']
  },
  {
    id: 'dtu-65-14',
    type: 'regulation',
    title: 'NF DTU 65.14 - Exécution des planchers chauffants à eau chaude',
    description: 'Planchers chauffants basse température',
    regulationType: 'dtu',
    reference: 'NF DTU 65.14',
    scope: 'Planchers chauffants hydrauliques basse température',
    category: 'dtu',
    tags: ['plancher chauffant', 'eau chaude', 'isolant', 'chape'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '35 min',
    isPublic: true,
    isPremium: false,
    keyRules: [
      {
        id: 'isolation-plancher-chauffant',
        title: 'Isolation sous tubes',
        description: 'R ≥ 1,5 m².K/W en partie courante. R ≥ 2 m².K/W en rive',
        mandatory: true
      },
      {
        id: 'temperature-surface',
        title: 'Température de surface',
        description: 'Température surface ≤ 28°C en occupation. ≤ 35°C en salles de bain',
        mandatory: true
      }
    ],
    tolerances: [
      {
        parameter: 'Espacement des tubes',
        tolerance: '± 10 mm',
        conditions: 'Par rapport au plan de calepinage'
      }
    ],
    dimensions: [
      {
        element: 'Épaisseur chape sur tubes',
        dimension: '50-70 mm',
        minimum: '45 mm au-dessus des tubes',
        conditions: 'Chape fluide ou traditionnelle'
      }
    ],
    relatedDocuments: ['DTU 26.2', 'DTU 65.12', 'NF EN 1264']
  }
];

// Export de toutes les réglementations
export const allRegulations = [
  ...dtuFoundations,
  ...dtuMaconnerie, 
  ...dtuPanneauxPrefabriques,
  ...dtuStructuresPrefabriquees,
  ...dtuCharpentes,
  ...dtuCharpentesMetalliques,
  ...dtuSecondOeuvre,
  ...dtuIsolation,
  ...dtuTechniquesSpeciales,
  ...additionalDTUs,
  ...fireRegulationERP,
  ...accessibilityRegulation,
  ...thermalRegulation,
  ...acousticRegulation,
  ...seismicRegulation,
  ...hygrothermalRegulation
];

// Statistiques réglementation mises à jour
export const regulationStats = {
  totalDocuments: allRegulations.length,
  publicDocuments: allRegulations.filter(r => r.isPublic).length,
  categories: regulationCategories.length,
  lastUpdate: '2024-01-15',
  popularDocuments: ['dtu-20-1', 'dtu-13-1', 'erp-type-m', 're2020-indicateurs'],
  recentlyAdded: ['erp-type-j', 'erp-type-n', 'erp-type-o', 'erp-type-p', 'erp-type-r', 'erp-type-s', 'erp-type-t', 'erp-type-u', 'erp-type-v', 'erp-type-w', 'erp-type-x', 'erp-type-y']
}; 