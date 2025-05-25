import { Calculator, WorkspaceCategory, CalculatorType } from '@/types/workspace';

// Catégories de calculateurs étendues
export const calculatorCategories: WorkspaceCategory[] = [
  {
    id: 'thermal',
    name: 'Thermique RE2020',
    description: 'Calculs de performance thermique et énergétique RE2020',
    icon: 'Thermometer',
    color: 'red',
    resourceCount: 8
  },
  {
    id: 'eurocodes',
    name: 'Eurocodes Structures',
    description: 'Calculs structurels selon normes européennes EC0-EC9',
    icon: 'Calculator',
    color: 'blue',
    resourceCount: 12
  },
  {
    id: 'acoustic',
    name: 'Acoustique Professionnelle',
    description: 'Isolation, réverbération et confort acoustique',
    icon: 'Volume2',
    color: 'purple',
    resourceCount: 6
  },
  {
    id: 'fire',
    name: 'Sécurité Incendie',
    description: 'Calculs réglementaires ERP, résistance au feu, désenfumage',
    icon: 'Flame',
    color: 'orange',
    resourceCount: 7
  },
  {
    id: 'accessibility',
    name: 'Accessibilité PMR',
    description: 'Calculs conformité handicapés, rampes, circulations',
    icon: 'Accessibility',
    color: 'green',
    resourceCount: 5
  },
  {
    id: 'fluids',
    name: 'Fluides & Réseaux',
    description: 'Plomberie, électricité, ventilation, climatisation',
    icon: 'Droplets',
    color: 'cyan',
    resourceCount: 6
  },
  {
    id: 'financial',
    name: 'Financier & Économique',
    description: 'Rentabilité, coûts, devis, financement projet',
    icon: 'DollarSign',
    color: 'yellow',
    resourceCount: 6
  },
  {
    id: 'surface',
    name: 'Surfaces & Métrés',
    description: 'Calculs de surfaces, volumes, quantitatifs',
    icon: 'Square',
    color: 'indigo',
    resourceCount: 4
  }
];

// CALCULATEURS THERMIQUES RE2020 ÉTENDUS (8 calculateurs)
export const thermalCalculators: Calculator[] = [
  {
    id: 'resistance-thermique',
    type: 'calculator',
    title: 'Résistance thermique (R)',
    description: 'Calcul de la résistance thermique d\'un matériau ou d\'un élément constructif selon RE2020',
    calculatorType: 'thermal',
    category: 'thermal',
    tags: ['résistance', 'thermique', 'isolation', 'lambda', 'épaisseur', 'RE2020'],
    lastUpdated: '2024-02-15',
    difficulty: 'beginner',
    estimatedTime: '5 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur résistance thermique R RE2020 | Isolation performante',
      metaDescription: 'Calculez la résistance thermique R de vos matériaux d\'isolation selon RE2020. Outil gratuit avec formule R = e/λ.',
      keywords: ['résistance thermique', 'calcul R', 'isolation', 'lambda', 'RE2020', 'thermique'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/resistance-thermique'
    },
    inputs: [
      {
        id: 'epaisseur',
        label: 'Épaisseur du matériau',
        type: 'number',
        unit: 'm',
        required: true,
        min: 0.001,
        max: 1,
        placeholder: '0.10',
        helpText: 'Épaisseur en mètres (ex: 10cm = 0.10m)'
      },
      {
        id: 'lambda',
        label: 'Conductivité thermique (λ)',
        type: 'number',
        unit: 'W/m.K',
        required: true,
        min: 0.001,
        max: 10,
        placeholder: '0.035',
        helpText: 'Conductivité thermique du matériau en W/m.K'
      }
    ],
    outputs: [
      {
        id: 'resistance',
        label: 'Résistance thermique',
        unit: 'm².K/W',
        format: 'number',
        precision: 3
      },
      {
        id: 'conformite_re2020',
        label: 'Conformité RE2020',
        format: 'text'
      }
    ],
    formula: 'R = e / λ',
    validationRules: [
      {
        field: 'epaisseur',
        rule: 'min',
        value: 0.001,
        message: 'L\'épaisseur doit être supérieure à 0'
      },
      {
        field: 'lambda',
        rule: 'min',
        value: 0.001,
        message: 'La conductivité doit être supérieure à 0'
      }
    ],
    examples: [
      {
        title: 'Laine de verre 10cm',
        description: 'Isolation laine de verre épaisseur 100mm',
        inputs: { epaisseur: 0.10, lambda: 0.035 },
        expectedOutputs: { resistance: 2.857 }
      }
    ],
    relatedCalculators: ['coefficient-u', 'pont-thermique', 'deperditions-thermiques']
  },
  {
    id: 'coefficient-u',
    type: 'calculator',
    title: 'Coefficient U (transmission thermique)',
    description: 'Calcul du coefficient de transmission thermique U d\'une paroi multicouche selon RE2020',
    calculatorType: 'thermal',
    category: 'thermal',
    tags: ['coefficient U', 'transmission', 'thermique', 'paroi', 'multicouche', 'RE2020'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '8 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur coefficient U RE2020 - Transmission thermique paroi',
      metaDescription: 'Calculez le coefficient U de transmission thermique de vos parois selon RE2020. Outil professionnel conforme.',
      keywords: ['coefficient U', 'transmission thermique', 'paroi', 'RE2020', 'thermique'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/coefficient-u'
    },
    inputs: [
      {
        id: 'resistances',
        label: 'Résistances thermiques des couches',
        type: 'text',
        required: true,
        placeholder: '0.13,2.5,0.04',
        helpText: 'Résistances séparées par des virgules (Rsi, couches, Rse)'
      }
    ],
    outputs: [
      {
        id: 'coefficient_u',
        label: 'Coefficient U',
        unit: 'W/m².K',
        format: 'number',
        precision: 3
      },
      {
        id: 'classe_thermique',
        label: 'Classe thermique RE2020',
        format: 'text'
      }
    ],
    formula: 'U = 1 / (Rsi + ΣR + Rse)',
    relatedCalculators: ['resistance-thermique', 'pont-thermique', 'deperditions-thermiques']
  },
  {
    id: 'deperditions-thermiques',
    type: 'calculator',
    title: 'Déperditions thermiques bâtiment',
    description: 'Calcul des déperditions thermiques totales d\'un bâtiment selon méthode RE2020',
    calculatorType: 'thermal',
    category: 'thermal',
    tags: ['déperditions', 'thermique', 'bâtiment', 'chauffage', 'RE2020', 'Ubat'],
    lastUpdated: '2024-02-15',
    difficulty: 'advanced',
    estimatedTime: '15 min',
    isPublic: true,
    isPremium: true,
    seoData: {
      title: 'Calculateur déperditions thermiques RE2020 - Bilan énergétique',
      metaDescription: 'Calculez les déperditions thermiques de votre bâtiment selon RE2020. Dimensionnement chauffage.',
      keywords: ['déperditions thermiques', 'bilan thermique', 'RE2020', 'chauffage', 'Ubat'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/deperditions-thermiques'
    },
    inputs: [
      {
        id: 'surface_habitable',
        label: 'Surface habitable',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 10,
        max: 1000,
        placeholder: '150'
      },
      {
        id: 'hauteur_sous_plafond',
        label: 'Hauteur sous plafond',
        type: 'number',
        unit: 'm',
        required: true,
        min: 2.0,
        max: 4.0,
        placeholder: '2.5'
      },
      {
        id: 'u_murs',
        label: 'Coefficient U murs',
        type: 'number',
        unit: 'W/m².K',
        required: true,
        min: 0.1,
        max: 2.0,
        placeholder: '0.20'
      },
      {
        id: 'u_toiture',
        label: 'Coefficient U toiture',
        type: 'number',
        unit: 'W/m².K',
        required: true,
        min: 0.1,
        max: 2.0,
        placeholder: '0.15'
      },
      {
        id: 'u_plancher',
        label: 'Coefficient U plancher bas',
        type: 'number',
        unit: 'W/m².K',
        required: true,
        min: 0.1,
        max: 2.0,
        placeholder: '0.25'
      },
      {
        id: 'u_menuiseries',
        label: 'Coefficient U menuiseries',
        type: 'number',
        unit: 'W/m².K',
        required: true,
        min: 0.8,
        max: 6.0,
        placeholder: '1.4'
      },
      {
        id: 'surface_menuiseries',
        label: 'Surface menuiseries',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 5,
        max: 200,
        placeholder: '25'
      },
      {
        id: 'delta_t',
        label: 'Écart de température',
        type: 'number',
        unit: '°C',
        required: true,
        min: 10,
        max: 40,
        placeholder: '19'
      }
    ],
    outputs: [
      {
        id: 'deperditions_totales',
        label: 'Déperditions totales',
        unit: 'W',
        format: 'number',
        precision: 0
      },
      {
        id: 'puissance_chauffage',
        label: 'Puissance chauffage nécessaire',
        unit: 'kW',
        format: 'number',
        precision: 1
      },
      {
        id: 'ubat',
        label: 'Ubat moyen',
        unit: 'W/m².K',
        format: 'number',
        precision: 3
      },
      {
        id: 'conformite_re2020',
        label: 'Conformité RE2020',
        format: 'text'
      }
    ],
    formula: 'Φ = Σ(U × S × ΔT) + Φponts thermiques',
    relatedCalculators: ['coefficient-u', 'pont-thermique', 'bilan-energetique-re2020']
  },
  {
    id: 'pont-thermique',
    type: 'calculator',
    title: 'Ponts thermiques linéiques',
    description: 'Calcul des déperditions par ponts thermiques linéiques selon méthode RE2020',
    calculatorType: 'thermal',
    category: 'thermal',
    tags: ['pont thermique', 'linéique', 'déperditions', 'jonction', 'RE2020'],
    lastUpdated: '2024-02-15',
    difficulty: 'advanced',
    estimatedTime: '12 min',
    isPublic: true,
    isPremium: true,
    seoData: {
      title: 'Calculateur ponts thermiques RE2020 - Déperditions linéiques',
      metaDescription: 'Calculez les déperditions par ponts thermiques selon RE2020. Jonctions, angles, perçages.',
      keywords: ['pont thermique', 'déperditions linéiques', 'RE2020', 'jonction', 'isolation'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/pont-thermique'
    },
    inputs: [
      {
        id: 'type_pont',
        label: 'Type de pont thermique',
        type: 'select',
        required: true,
        options: [
          { value: 'angle_mur', label: 'Angle de murs - ψ = 0.06 W/m.K' },
          { value: 'plancher_mur', label: 'Plancher/mur - ψ = 0.65 W/m.K' },
          { value: 'toiture_mur', label: 'Toiture/mur - ψ = 0.55 W/m.K' },
          { value: 'menuiserie_mur', label: 'Menuiserie/mur - ψ = 0.20 W/m.K' },
          { value: 'balcon_dalle', label: 'Balcon/dalle - ψ = 0.90 W/m.K' },
          { value: 'refend_facade', label: 'Refend/façade - ψ = 0.15 W/m.K' }
        ]
      },
      {
        id: 'longueur',
        label: 'Longueur du pont thermique',
        type: 'number',
        unit: 'm',
        required: true,
        min: 0.1,
        max: 100,
        placeholder: '10'
      }
    ],
    outputs: [
      {
        id: 'coefficient_psi',
        label: 'Coefficient ψ',
        unit: 'W/m.K',
        format: 'number',
        precision: 3
      },
      {
        id: 'deperdition_pont',
        label: 'Déperdition pont thermique',
        unit: 'W/K',
        format: 'number',
        precision: 2
      }
    ],
    formula: 'Φ = ψ × L × ΔT',
    relatedCalculators: ['deperditions-thermiques', 'coefficient-u']
  },
  {
    id: 'bilan-energetique-re2020',
    type: 'calculator',
    title: 'Bilan énergétique RE2020',
    description: 'Calcul simplifié du bilan énergétique selon méthode RE2020 - Bbio, Cep, Ic',
    calculatorType: 'thermal',
    category: 'thermal',
    tags: ['RE2020', 'bilan énergétique', 'Bbio', 'Cep', 'Ic', 'performance'],
    lastUpdated: '2024-02-15',
         difficulty: 'advanced',
    estimatedTime: '20 min',
    isPublic: true,
    isPremium: true,
    seoData: {
      title: 'Calculateur bilan énergétique RE2020 - Bbio Cep Ic',
      metaDescription: 'Calculez le bilan énergétique RE2020 : Bbio, Cep, Ic. Outil conforme à la réglementation environnementale.',
      keywords: ['RE2020', 'bilan énergétique', 'Bbio', 'Cep', 'Ic construction', 'performance'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/bilan-energetique-re2020'
    },
    inputs: [
      {
        id: 'surface_habitable',
        label: 'Surface habitable',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 30,
        max: 500,
        placeholder: '150'
      },
      {
        id: 'zone_climatique',
        label: 'Zone climatique',
        type: 'select',
        required: true,
        options: [
          { value: 'H1a', label: 'H1a - Nord-Est très froid' },
          { value: 'H1b', label: 'H1b - Nord-Ouest froid' },
          { value: 'H1c', label: 'H1c - Est continental' },
          { value: 'H2a', label: 'H2a - Ouest océanique' },
          { value: 'H2b', label: 'H2b - Sud-Ouest' },
          { value: 'H2c', label: 'H2c - Sud-Est' },
          { value: 'H2d', label: 'H2d - Rhône-Alpes montagne' },
          { value: 'H3', label: 'H3 - Méditerranée' }
        ]
      },
      {
        id: 'compacite',
        label: 'Compacité du bâtiment',
        type: 'number',
        unit: 'm³/m²',
        required: true,
        min: 0.8,
        max: 3.0,
        placeholder: '1.2'
      }
    ],
    outputs: [
      {
        id: 'bbio',
        label: 'Bbio (besoin bioclimatique)',
        unit: 'points',
        format: 'number',
        precision: 1
      },
      {
        id: 'bbio_max',
        label: 'Bbio max autorisé',
        unit: 'points',
        format: 'number',
        precision: 1
      },
      {
        id: 'conformite_bbio',
        label: 'Conformité Bbio',
        format: 'text'
      }
    ],
    relatedCalculators: ['deperditions-thermiques', 'ges-construction']
  },
  {
    id: 'ges-construction',
    type: 'calculator',
    title: 'GES construction (Ic construction)',
    description: 'Calcul des émissions de gaz à effet de serre de la construction selon RE2020',
    calculatorType: 'thermal',
    category: 'thermal',
    tags: ['GES', 'carbone', 'Ic construction', 'RE2020', 'émissions', 'ACV'],
    lastUpdated: '2024-02-15',
    difficulty: 'advanced',
    estimatedTime: '15 min',
    isPublic: true,
    isPremium: true,
    seoData: {
      title: 'Calculateur GES construction RE2020 - Ic construction carbone',
      metaDescription: 'Calculez l\'impact carbone Ic construction selon RE2020. Émissions GES matériaux et équipements.',
      keywords: ['GES construction', 'Ic construction', 'RE2020', 'carbone', 'ACV', 'émissions'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/ges-construction'
    },
    inputs: [
      {
        id: 'surface_habitable',
        label: 'Surface habitable',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 30,
        max: 500,
        placeholder: '150'
      },
      {
        id: 'type_structure',
        label: 'Type de structure',
        type: 'select',
        required: true,
        options: [
          { value: 'beton', label: 'Béton traditionnel - 350 kgCO2/m²' },
          { value: 'bois', label: 'Ossature bois - 180 kgCO2/m²' },
          { value: 'mixte', label: 'Structure mixte - 250 kgCO2/m²' },
          { value: 'paille', label: 'Paille/terre - 120 kgCO2/m²' }
        ]
      },
      {
        id: 'isolation',
        label: 'Type d\'isolation',
        type: 'select',
        required: true,
        options: [
          { value: 'laine_verre', label: 'Laine de verre - 45 kgCO2/m²' },
          { value: 'laine_roche', label: 'Laine de roche - 38 kgCO2/m²' },
          { value: 'pse', label: 'Polystyrène expansé - 95 kgCO2/m²' },
          { value: 'fibre_bois', label: 'Fibre de bois - 25 kgCO2/m²' },
          { value: 'ouate', label: 'Ouate de cellulose - 15 kgCO2/m²' }
        ]
      }
    ],
    outputs: [
      {
        id: 'ic_construction',
        label: 'Ic construction',
        unit: 'kgCO2eq/m²',
        format: 'number',
        precision: 1
      },
      {
        id: 'ic_max',
        label: 'Ic max autorisé',
        unit: 'kgCO2eq/m²',
        format: 'number',
        precision: 1
      },
      {
        id: 'conformite_carbone',
        label: 'Conformité carbone',
        format: 'text'
      }
    ],
    relatedCalculators: ['bilan-energetique-re2020']
  },
  {
    id: 'infiltrometrie',
    type: 'calculator',
    title: 'Test d\'infiltrométrie',
    description: 'Calcul et analyse des résultats de test d\'étanchéité à l\'air (infiltrométrie)',
    calculatorType: 'thermal',
    category: 'thermal',
    tags: ['infiltrométrie', 'étanchéité air', 'n50', 'Q4Pa-surf', 'RE2020'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '10 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur infiltrométrie - Test étanchéité air RE2020',
      metaDescription: 'Analysez vos résultats de test d\'infiltrométrie. Conformité n50 et Q4Pa-surf selon RE2020.',
      keywords: ['infiltrométrie', 'étanchéité air', 'n50', 'Q4Pa-surf', 'RE2020', 'test'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/infiltrometrie'
    },
    inputs: [
      {
        id: 'volume_habitable',
        label: 'Volume habitable chauffé',
        type: 'number',
        unit: 'm³',
        required: true,
        min: 100,
        max: 2000,
        placeholder: '375'
      },
      {
        id: 'surface_deperditive',
        label: 'Surface déperditive',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 100,
        max: 1000,
        placeholder: '280'
      },
      {
        id: 'debit_fuite_50pa',
        label: 'Débit de fuite à 50 Pa',
        type: 'number',
        unit: 'm³/h',
        required: true,
        min: 50,
        max: 5000,
        placeholder: '450'
      }
    ],
    outputs: [
      {
        id: 'n50',
        label: 'n50 (renouvellement d\'air)',
        unit: 'vol/h',
        format: 'number',
        precision: 2
      },
      {
        id: 'q4pa_surf',
        label: 'Q4Pa-surf',
        unit: 'm³/h.m²',
        format: 'number',
        precision: 2
      },
      {
        id: 'conformite_re2020',
        label: 'Conformité RE2020',
        format: 'text'
      },
      {
        id: 'classe_etancheite',
        label: 'Classe d\'étanchéité',
        format: 'text'
      }
    ],
    formula: 'n50 = Q50 / Vh ; Q4Pa-surf = 0,07 × Q50 / Sdep',
    relatedCalculators: ['ventilation-vmc', 'deperditions-thermiques']
  },
  {
    id: 'ventilation-vmc',
    type: 'calculator',
    title: 'Dimensionnement VMC',
    description: 'Calcul des débits de ventilation et dimensionnement VMC selon DTU 68.3',
    calculatorType: 'thermal',
    category: 'thermal',
    tags: ['VMC', 'ventilation', 'débit', 'renouvellement air', 'DTU 68.3'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '12 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur VMC - Dimensionnement ventilation DTU 68.3',
      metaDescription: 'Dimensionnez votre VMC : débits d\'extraction, renouvellement d\'air selon DTU 68.3.',
      keywords: ['VMC', 'ventilation', 'débit', 'dimensionnement', 'DTU 68.3', 'extraction'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/ventilation-vmc'
    },
    inputs: [
      {
        id: 'nb_pieces_principales',
        label: 'Nombre de pièces principales',
        type: 'number',
        required: true,
        min: 1,
        max: 10,
        placeholder: '4'
      },
      {
        id: 'nb_cuisines',
        label: 'Nombre de cuisines',
        type: 'number',
        required: true,
        min: 1,
        max: 3,
        placeholder: '1'
      },
      {
        id: 'nb_sdb',
        label: 'Nombre de salles de bain',
        type: 'number',
        required: true,
        min: 0,
        max: 5,
        placeholder: '1'
      },
      {
        id: 'nb_wc',
        label: 'Nombre de WC séparés',
        type: 'number',
        required: true,
        min: 0,
        max: 5,
        placeholder: '1'
      }
    ],
    outputs: [
      {
        id: 'debit_extraction_total',
        label: 'Débit d\'extraction total',
        unit: 'm³/h',
        format: 'number',
        precision: 0
      },
      {
        id: 'debit_soufflage',
        label: 'Débit de soufflage (si DF)',
        unit: 'm³/h',
        format: 'number',
        precision: 0
      },
      {
        id: 'type_vmc_recommande',
        label: 'Type VMC recommandé',
        format: 'text'
      }
    ],
    relatedCalculators: ['infiltrometrie', 'deperditions-thermiques']
  }
];

// CALCULATEURS EUROCODES COMPLETS (12 calculateurs)
export const eurocodesCalculators: Calculator[] = [
  {
    id: 'combinaisons-actions',
    type: 'calculator',
    title: 'Combinaisons d\'actions EC0',
    description: 'Calcul des combinaisons d\'actions selon Eurocode 0 pour États Limites Ultimes et de Service',
    calculatorType: 'eurocodes',
    category: 'eurocodes',
    tags: ['Eurocode 0', 'EC0', 'combinaisons', 'ELU', 'ELS', 'actions', 'charges'],
    lastUpdated: '2024-02-15',
    difficulty: 'advanced',
    estimatedTime: '10 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur combinaisons actions Eurocode 0 - ELU ELS',
      metaDescription: 'Calculez les combinaisons d\'actions selon EC0. Outil professionnel pour ELU et ELS avec coefficients γ.',
      keywords: ['Eurocode 0', 'EC0', 'combinaisons actions', 'ELU', 'ELS', 'calcul structure'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/combinaisons-actions'
    },
    inputs: [
      {
        id: 'charges_permanentes',
        label: 'Charges permanentes (G)',
        type: 'number',
        unit: 'kN/m²',
        required: true,
        min: 0,
        placeholder: '5.0'
      },
      {
        id: 'charges_exploitation',
        label: 'Charges d\'exploitation (Q)',
        type: 'number',
        unit: 'kN/m²',
        required: true,
        min: 0,
        placeholder: '1.5'
      },
      {
        id: 'vent',
        label: 'Action du vent (W)',
        type: 'number',
        unit: 'kN/m²',
        required: false,
        min: 0,
        placeholder: '0.8'
      },
      {
        id: 'neige',
        label: 'Charge de neige (S)',
        type: 'number',
        unit: 'kN/m²',
        required: false,
        min: 0,
        placeholder: '0.45'
      }
    ],
    outputs: [
      {
        id: 'elu_fondamentale',
        label: 'ELU Combinaison fondamentale',
        unit: 'kN/m²',
        format: 'number',
        precision: 2
      },
      {
        id: 'elu_accidentelle',
        label: 'ELU Combinaison accidentelle',
        unit: 'kN/m²',
        format: 'number',
        precision: 2
      },
      {
        id: 'els_caracteristique',
        label: 'ELS Combinaison caractéristique',
        unit: 'kN/m²',
        format: 'number',
        precision: 2
      },
      {
        id: 'els_frequente',
        label: 'ELS Combinaison fréquente',
        unit: 'kN/m²',
        format: 'number',
        precision: 2
      }
    ],
    formula: 'ELU: 1.35G + 1.5Q₁ + 1.5×0.7Qᵢ + 1.5×0.6W',
    relatedCalculators: ['charges-exploitation-ec1', 'action-vent-ec1', 'flexion-ba-ec2']
  },
  {
    id: 'charges-exploitation-ec1',
    type: 'calculator',
    title: 'Charges d\'exploitation EC1',
    description: 'Détermination des charges d\'exploitation selon Eurocode 1 par type d\'usage',
    calculatorType: 'eurocodes',
    category: 'eurocodes',
    tags: ['Eurocode 1', 'EC1', 'charges exploitation', 'surcharges', 'usage', 'plancher'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '8 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur charges exploitation EC1 - Surcharges plancher',
      metaDescription: 'Déterminez les charges d\'exploitation selon EC1 par usage : bureaux, habitation, commerce, stockage.',
      keywords: ['Eurocode 1', 'EC1', 'charges exploitation', 'surcharges', 'plancher', 'usage'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/charges-exploitation-ec1'
    },
    inputs: [
      {
        id: 'categorie_usage',
        label: 'Catégorie d\'usage',
        type: 'select',
        required: true,
        options: [
          { value: 'A', label: 'A - Habitation, résidentiel - 1.5 kN/m²' },
          { value: 'B', label: 'B - Bureaux - 2.5 kN/m²' },
          { value: 'C1', label: 'C1 - Lieux de réunion avec tables - 3.0 kN/m²' },
          { value: 'C2', label: 'C2 - Lieux de réunion avec sièges fixes - 4.0 kN/m²' },
          { value: 'C3', label: 'C3 - Lieux sans obstacles à la circulation - 5.0 kN/m²' },
          { value: 'C4', label: 'C4 - Lieux d\'activités physiques - 5.0 kN/m²' },
          { value: 'C5', label: 'C5 - Lieux de grande affluence - 5.0 kN/m²' },
          { value: 'D1', label: 'D1 - Commerces de détail - 4.0 kN/m²' },
          { value: 'D2', label: 'D2 - Grands magasins - 5.0 kN/m²' },
          { value: 'E1', label: 'E1 - Stockage léger (≤ 2.5 kN/m³) - 7.5 kN/m²' },
          { value: 'E2', label: 'E2 - Stockage moyen (≤ 4.0 kN/m³) - 12.5 kN/m²' }
        ]
      },
      {
        id: 'surface_influence',
        label: 'Surface d\'influence',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 1,
        max: 1000,
        placeholder: '50'
      }
    ],
    outputs: [
      {
        id: 'charge_repartie',
        label: 'Charge répartie qk',
        unit: 'kN/m²',
        format: 'number',
        precision: 2
      },
      {
        id: 'charge_concentree',
        label: 'Charge concentrée Qk',
        unit: 'kN',
        format: 'number',
        precision: 1
      },
      {
        id: 'coefficient_reduction',
        label: 'Coefficient de réduction αA',
        format: 'number',
        precision: 3
      }
    ],
    relatedCalculators: ['combinaisons-actions', 'flexion-ba-ec2']
  },
  {
    id: 'flexion-ba-ec2',
    type: 'calculator',
    title: 'Flexion simple béton armé',
    description: 'Dimensionnement d\'une poutre en béton armé soumise à la flexion simple selon Eurocode 2',
    calculatorType: 'eurocodes',
    category: 'eurocodes',
    tags: ['Eurocode 2', 'béton armé', 'flexion', 'poutre', 'dimensionnement'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '15 min',
    isPublic: true,
    isPremium: true,
    seoData: {
      title: 'Calculateur flexion béton armé EC2 - Dimensionnement poutre',
      metaDescription: 'Dimensionnez vos poutres béton armé en flexion selon EC2. Calcul des armatures et vérifications.',
      keywords: ['Eurocode 2', 'flexion béton armé', 'dimensionnement poutre', 'armatures'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/flexion-ba'
    },
    inputs: [
      {
        id: 'moment_sollicitant',
        label: 'Moment sollicitant Ed',
        type: 'number',
        unit: 'kN.m',
        required: true,
        min: 0,
        placeholder: '150'
      },
      {
        id: 'largeur',
        label: 'Largeur de la poutre',
        type: 'number',
        unit: 'm',
        required: true,
        min: 0.1,
        max: 2.0,
        placeholder: '0.25'
      },
      {
        id: 'hauteur',
        label: 'Hauteur de la poutre',
        type: 'number',
        unit: 'm',
        required: true,
        min: 0.1,
        max: 2.0,
        placeholder: '0.50'
      },
      {
        id: 'enrobage',
        label: 'Enrobage des armatures',
        type: 'number',
        unit: 'm',
        required: true,
        min: 0.015,
        max: 0.070,
        placeholder: '0.030'
      }
    ],
    outputs: [
      {
        id: 'section_acier',
        label: 'Section d\'acier nécessaire',
        unit: 'cm²',
        format: 'number',
        precision: 2
      },
      {
        id: 'choix_armatures',
        label: 'Choix d\'armatures',
        format: 'text'
      }
    ],
    relatedCalculators: ['combinaisons-actions', 'compression-ba']
  },
  {
    id: 'action-vent-ec1',
    type: 'calculator',
    title: 'Action du vent EC1',
    description: 'Calcul de la pression du vent selon Eurocode 1',
    calculatorType: 'eurocodes',
    category: 'eurocodes',
    tags: ['Eurocode 1', 'EC1', 'vent', 'pression', 'ventilation'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '8 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur action vent EC1 - Pression vent',
      metaDescription: 'Calculez la pression du vent selon EC1. Outil professionnel pour calculer la pression du vent.',
      keywords: ['Eurocode 1', 'EC1', 'vent', 'pression', 'ventilation'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/action-vent-ec1'
    },
    inputs: [
      {
        id: 'zone_vent',
        label: 'Zone de vent',
        type: 'select',
        required: true,
        options: [
          { value: 'A', label: 'A - Terrain ouvert' },
          { value: 'B', label: 'B - Terrain avec quelques obstacles' },
          { value: 'C', label: 'C - Ville avec hautes constructions' },
          { value: 'D', label: 'D - Ville avec hautes constructions et obstacles' }
        ]
      },
      {
        id: 'hauteur_construction',
        label: 'Hauteur de la construction',
        type: 'number',
        unit: 'm',
        required: true,
        min: 10,
        max: 200,
        placeholder: '50'
      },
      {
        id: 'largeur_construction',
        label: 'Largeur de la construction',
        type: 'number',
        unit: 'm',
        required: true,
        min: 10,
        max: 200,
        placeholder: '50'
      },
      {
        id: 'coefficient_exposition',
        label: 'Coefficient d\'exposition',
        type: 'number',
        unit: '1',
        required: true,
        min: 1.0,
        max: 2.0,
        placeholder: '1.5'
      }
    ],
    outputs: [
      {
        id: 'pression_vent',
        label: 'Pression du vent',
        unit: 'kN/m²',
        format: 'number',
        precision: 2
      }
    ],
    formula: 'q = 0.5 * ρ * v² * C_e * C_p',
    relatedCalculators: ['combinaisons-actions']
  },
  {
    id: 'compression-ba',
    type: 'calculator',
    title: 'Compression simple béton armé',
    description: 'Calcul de la compression simple d\'une section en béton armé selon Eurocode 2',
    calculatorType: 'eurocodes',
    category: 'eurocodes',
    tags: ['Eurocode 2', 'béton armé', 'compression', 'section', 'dimensionnement'],
    lastUpdated: '2024-01-15',
    difficulty: 'advanced',
    estimatedTime: '15 min',
    isPublic: true,
    isPremium: true,
    seoData: {
      title: 'Calculateur compression béton armé EC2 - Dimensionnement section',
      metaDescription: 'Dimensionnez votre section en béton armé en compression selon EC2. Calcul des armatures et vérifications.',
      keywords: ['Eurocode 2', 'compression béton armé', 'dimensionnement section', 'armatures'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/compression-ba'
    },
    inputs: [
      {
        id: 'surface_compression',
        label: 'Surface de compression',
        type: 'number',
        unit: 'mm²',
        required: true,
        min: 100,
        max: 100000,
        placeholder: '50000'
      },
      {
        id: 'resistance_beton',
        label: 'Résistance du béton',
        type: 'number',
        unit: 'MPa',
        required: true,
        min: 20,
        max: 100,
        placeholder: '50'
      },
      {
        id: 'coefficient_acier',
        label: 'Coefficient d\'acier',
        type: 'number',
        unit: '1',
        required: true,
        min: 0.0,
        max: 1.0,
        placeholder: '0.8'
      }
    ],
    outputs: [
      {
        id: 'section_acier_necessaire',
        label: 'Section d\'acier nécessaire',
        unit: 'mm²',
        format: 'number',
        precision: 2
      },
      {
        id: 'choix_armatures',
        label: 'Choix d\'armatures',
        format: 'text'
      }
    ],
    formula: 'N = A_c * f_cd + A_s * f_yd',
    relatedCalculators: ['flexion-ba-ec2']
  },
  {
    id: 'charges-neige-ec1',
    type: 'calculator',
    title: 'Charges de neige EC1',
    description: 'Calcul des charges de neige selon Eurocode 1 en fonction de l\'altitude et de la région',
    calculatorType: 'eurocodes',
    category: 'eurocodes',
    tags: ['Eurocode 1', 'EC1', 'neige', 'charges', 'altitude', 'région'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '10 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur charges neige EC1 - Surcharges neige toiture',
      metaDescription: 'Calculez les charges de neige selon EC1 par région et altitude. Dimensionnement toiture neige.',
      keywords: ['Eurocode 1', 'EC1', 'charges neige', 'surcharges', 'toiture', 'altitude'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/charges-neige-ec1'
    },
    inputs: [
      {
        id: 'region_neige',
        label: 'Région de neige',
        type: 'select',
        required: true,
        options: [
          { value: 'A1', label: 'A1 - Plaines françaises ≤ 200m' },
          { value: 'A2', label: 'A2 - Plaines 200-500m' },
          { value: 'B1', label: 'B1 - Montagnes 500-1000m' },
          { value: 'B2', label: 'B2 - Montagnes 1000-2000m' },
          { value: 'C1', label: 'C1 - Alpes > 2000m' },
          { value: 'C2', label: 'C2 - Alpes extrêmes' },
          { value: 'D', label: 'D - Corse' },
          { value: 'E', label: 'E - DOM-TOM' }
        ]
      },
      {
        id: 'altitude',
        label: 'Altitude du site',
        type: 'number',
        unit: 'm',
        required: true,
        min: 0,
        max: 3000,
        placeholder: '500'
      },
      {
        id: 'coefficient_exposition',
        label: 'Coefficient d\'exposition Ce',
        type: 'select',
        required: true,
        options: [
          { value: '0.8', label: '0.8 - Terrain abrité' },
          { value: '1.0', label: '1.0 - Terrain normal' },
          { value: '1.2', label: '1.2 - Terrain exposé au vent' }
        ]
      }
    ],
    outputs: [
      {
        id: 'charge_neige_sol',
        label: 'Charge neige au sol sk',
        unit: 'kN/m²',
        format: 'number',
        precision: 2
      },
      {
        id: 'charge_neige_toiture',
        label: 'Charge neige sur toiture',
        unit: 'kN/m²',
        format: 'number',
        precision: 2
      }
    ],
    formula: 's = μ × Ce × Ct × sk',
    relatedCalculators: ['combinaisons-actions', 'charges-exploitation-ec1']
  },
  {
    id: 'charpente-bois-ec5',
    type: 'calculator',
    title: 'Dimensionnement charpente bois EC5',
    description: 'Calcul de dimensionnement des éléments de charpente bois selon Eurocode 5',
    calculatorType: 'eurocodes',
    category: 'eurocodes',
    tags: ['Eurocode 5', 'EC5', 'charpente', 'bois', 'flexion', 'compression'],
    lastUpdated: '2024-02-15',
    difficulty: 'advanced',
    estimatedTime: '18 min',
    isPublic: true,
    isPremium: true,
    seoData: {
      title: 'Calculateur charpente bois EC5 - Dimensionnement structure',
      metaDescription: 'Dimensionnez vos éléments de charpente bois selon EC5. Poutres, poteaux, contreventement.',
      keywords: ['Eurocode 5', 'EC5', 'charpente bois', 'dimensionnement', 'structure bois'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/charpente-bois-ec5'
    },
    inputs: [
      {
        id: 'type_element',
        label: 'Type d\'élément',
        type: 'select',
        required: true,
        options: [
          { value: 'poutre', label: 'Poutre fléchie' },
          { value: 'poteau', label: 'Poteau comprimé' },
          { value: 'contrevent', label: 'Contreventement' }
        ]
      },
      {
        id: 'classe_service',
        label: 'Classe de service',
        type: 'select',
        required: true,
        options: [
          { value: '1', label: 'Classe 1 - Intérieur chauffé' },
          { value: '2', label: 'Classe 2 - Couvert non chauffé' },
          { value: '3', label: 'Classe 3 - Extérieur' }
        ]
      },
      {
        id: 'largeur',
        label: 'Largeur (b)',
        type: 'number',
        unit: 'mm',
        required: true,
        min: 50,
        max: 500,
        placeholder: '200'
      },
      {
        id: 'hauteur',
        label: 'Hauteur (h)',
        type: 'number',
        unit: 'mm',
        required: true,
        min: 100,
        max: 1000,
        placeholder: '400'
      },
      {
        id: 'longueur',
        label: 'Longueur/portée',
        type: 'number',
        unit: 'm',
        required: true,
        min: 1,
        max: 20,
        placeholder: '6'
      },
      {
        id: 'moment_sollicitant',
        label: 'Moment sollicitant (si poutre)',
        type: 'number',
        unit: 'kN.m',
        required: false,
        min: 0,
        placeholder: '45'
      }
    ],
    outputs: [
      {
        id: 'contrainte_admissible',
        label: 'Contrainte admissible',
        unit: 'MPa',
        format: 'number',
        precision: 2
      },
      {
        id: 'contrainte_appliquee',
        label: 'Contrainte appliquée',
        unit: 'MPa',
        format: 'number',
        precision: 2
      },
      {
        id: 'verification',
        label: 'Vérification',
        format: 'text'
      }
    ],
    relatedCalculators: ['charges-neige-ec1', 'action-vent-ec1']
  }
];

// Calculateurs acoustiques
export const acousticCalculators: Calculator[] = [
  {
    id: 'isolement-acoustique',
    type: 'calculator',
    title: 'Isolement acoustique DnT,w',
    description: 'Calcul de l\'isolement acoustique pondéré in situ selon NF EN ISO 717-1',
    calculatorType: 'acoustic',
    category: 'acoustic',
    tags: ['acoustique', 'isolement', 'DnT,w', 'cloison', 'mur', 'bruit'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '12 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur isolement acoustique DnT,w - Cloisons murs',
      metaDescription: 'Calculez l\'isolement acoustique DnT,w de vos cloisons et murs selon normes NF EN ISO 717-1.',
      keywords: ['isolement acoustique', 'DnT,w', 'acoustique', 'cloison', 'mur', 'bruit'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/isolement-acoustique'
    },
    inputs: [
      {
        id: 'masse_surfacique',
        label: 'Masse surfacique',
        type: 'number',
        unit: 'kg/m²',
        required: true,
        min: 10,
        max: 1000,
        placeholder: '180'
      },
      {
        id: 'epaisseur',
        label: 'Épaisseur totale',
        type: 'number',
        unit: 'm',
        required: true,
        min: 0.05,
        max: 0.50,
        placeholder: '0.20'
      },
      {
        id: 'type_paroi',
        label: 'Type de paroi',
        type: 'select',
        required: true,
        options: [
          { value: 'simple', label: 'Paroi simple homogène' },
          { value: 'double', label: 'Cloison double avec lame d\'air' },
          { value: 'composite', label: 'Paroi composite multicouche' }
        ]
      }
    ],
    outputs: [
      {
        id: 'dntw',
        label: 'DnT,w calculé',
        unit: 'dB',
        format: 'number',
        precision: 1
      },
      {
        id: 'performance',
        label: 'Performance acoustique',
        format: 'text'
      },
      {
        id: 'conformite_reglementaire',
        label: 'Conformité réglementaire',
        format: 'text'
      }
    ],
    formula: 'DnT,w = 20×log(f×m) - 47,3 + corrections',
    relatedCalculators: ['bruit-impact', 'absorption-acoustique', 'reverberation-tr']
  },
  {
    id: 'bruit-impact',
    type: 'calculator',
    title: 'Bruit d\'impact L\'nT,w',
    description: 'Calcul de l\'isolement aux bruits d\'impact des planchers selon NF EN ISO 717-2',
    calculatorType: 'acoustic',
    category: 'acoustic',
    tags: ['acoustique', 'impact', 'L\'nT,w', 'plancher', 'isolation phonique'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '10 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur bruit impact L\'nT,w - Isolation plancher',
      metaDescription: 'Calculez l\'isolement aux bruits d\'impact L\'nT,w de vos planchers selon NF EN ISO 717-2.',
      keywords: ['bruit impact', 'L\'nT,w', 'acoustique', 'plancher', 'isolation phonique'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/bruit-impact'
    },
    inputs: [
      {
        id: 'type_plancher',
        label: 'Type de plancher',
        type: 'select',
        required: true,
        options: [
          { value: 'beton_nu', label: 'Dalle béton nue - 80 dB' },
          { value: 'beton_carrelage', label: 'Dalle + carrelage - 85 dB' },
          { value: 'beton_parquet', label: 'Dalle + parquet collé - 75 dB' },
          { value: 'bois_nu', label: 'Plancher bois nu - 90 dB' },
          { value: 'bois_revetement', label: 'Plancher bois + revêtement - 70 dB' }
        ]
      },
      {
        id: 'epaisseur_dalle',
        label: 'Épaisseur dalle/plancher',
        type: 'number',
        unit: 'cm',
        required: true,
        min: 5,
        max: 50,
        placeholder: '20'
      },
      {
        id: 'revetement_sol',
        label: 'Revêtement de sol',
        type: 'select',
        required: true,
        options: [
          { value: 'aucun', label: 'Aucun revêtement - 0 dB' },
          { value: 'carrelage', label: 'Carrelage - +5 dB' },
          { value: 'parquet_colle', label: 'Parquet collé - -5 dB' },
          { value: 'parquet_flottant', label: 'Parquet flottant - -10 dB' },
          { value: 'moquette', label: 'Moquette épaisse - -25 dB' },
          { value: 'liege', label: 'Liège sous parquet - -15 dB' }
        ]
      }
    ],
    outputs: [
      {
        id: 'lntw',
        label: 'L\'nT,w calculé',
        unit: 'dB',
        format: 'number',
        precision: 1
      },
      {
        id: 'amelioration_revetement',
        label: 'Amélioration par revêtement',
        unit: 'dB',
        format: 'number',
        precision: 1
      },
      {
        id: 'conformite_reglementaire',
        label: 'Conformité réglementaire',
        format: 'text'
      }
    ],
    relatedCalculators: ['isolement-acoustique', 'absorption-acoustique']
  },
  {
    id: 'absorption-acoustique',
    type: 'calculator',
    title: 'Absorption acoustique αw',
    description: 'Calcul du coefficient d\'absorption acoustique pondéré des matériaux',
    calculatorType: 'acoustic',
    category: 'acoustic',
    tags: ['acoustique', 'absorption', 'αw', 'matériaux', 'réverbération'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '8 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur absorption acoustique αw - Matériaux absorbants',
      metaDescription: 'Calculez le coefficient d\'absorption acoustique αw des matériaux. Traitement acoustique local.',
      keywords: ['absorption acoustique', 'αw', 'matériaux absorbants', 'traitement acoustique'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/absorption-acoustique'
    },
    inputs: [
      {
        id: 'type_materiau',
        label: 'Type de matériau',
        type: 'select',
        required: true,
        options: [
          { value: 'laine_minerale', label: 'Laine minérale 50mm - αw=0.85' },
          { value: 'mousse_acoustique', label: 'Mousse acoustique - αw=0.90' },
          { value: 'bois_perfore', label: 'Bois perforé + laine - αw=0.75' },
          { value: 'metal_perfore', label: 'Métal perforé + laine - αw=0.80' },
          { value: 'tissu_tendu', label: 'Tissu tendu + laine - αw=0.70' },
          { value: 'beton_nu', label: 'Béton nu - αw=0.05' },
          { value: 'platre', label: 'Plâtre lisse - αw=0.03' },
          { value: 'bois_massif', label: 'Bois massif - αw=0.10' }
        ]
      },
      {
        id: 'surface',
        label: 'Surface du matériau',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 0.1,
        max: 1000,
        placeholder: '25'
      },
      {
        id: 'epaisseur',
        label: 'Épaisseur matériau absorbant',
        type: 'number',
        unit: 'mm',
        required: false,
        min: 10,
        max: 200,
        placeholder: '50'
      }
    ],
    outputs: [
      {
        id: 'coefficient_absorption',
        label: 'Coefficient αw',
        format: 'number',
        precision: 2
      },
      {
        id: 'aire_absorption_equivalente',
        label: 'Aire d\'absorption équivalente',
        unit: 'm² Sabine',
        format: 'number',
        precision: 1
      },
      {
        id: 'efficacite_traitement',
        label: 'Efficacité du traitement',
        format: 'text'
      }
    ],
    relatedCalculators: ['reverberation-tr', 'isolement-acoustique']
  },
  {
    id: 'reverberation-tr',
    type: 'calculator',
    title: 'Temps de réverbération TR',
    description: 'Calcul du temps de réverbération d\'un local selon formule de Sabine',
    calculatorType: 'acoustic',
    category: 'acoustic',
    tags: ['acoustique', 'réverbération', 'TR', 'Sabine', 'local', 'traitement'],
    lastUpdated: '2024-02-15',
    difficulty: 'advanced',
    estimatedTime: '15 min',
    isPublic: true,
    isPremium: true,
    seoData: {
      title: 'Calculateur temps réverbération TR - Formule Sabine',
      metaDescription: 'Calculez le temps de réverbération TR de vos locaux selon Sabine. Dimensionnement traitement acoustique.',
      keywords: ['temps réverbération', 'TR', 'Sabine', 'acoustique local', 'traitement acoustique'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/reverberation-tr'
    },
    inputs: [
      {
        id: 'volume_local',
        label: 'Volume du local',
        type: 'number',
        unit: 'm³',
        required: true,
        min: 10,
        max: 10000,
        placeholder: '300'
      },
      {
        id: 'surface_sols',
        label: 'Surface des sols',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 5,
        max: 2000,
        placeholder: '100'
      },
      {
        id: 'materiau_sol',
        label: 'Matériau du sol',
        type: 'select',
        required: true,
        options: [
          { value: 'beton', label: 'Béton/carrelage - α=0.02' },
          { value: 'parquet', label: 'Parquet bois - α=0.10' },
          { value: 'moquette', label: 'Moquette - α=0.30' },
          { value: 'linoléum', label: 'Linoléum - α=0.03' }
        ]
      },
      {
        id: 'surface_murs',
        label: 'Surface des murs',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 20,
        max: 5000,
        placeholder: '180'
      },
      {
        id: 'materiau_murs',
        label: 'Matériau des murs',
        type: 'select',
        required: true,
        options: [
          { value: 'beton_nu', label: 'Béton nu - α=0.02' },
          { value: 'platre', label: 'Plâtre peint - α=0.03' },
          { value: 'bois', label: 'Lambris bois - α=0.10' },
          { value: 'absorb_leger', label: 'Absorbant léger - α=0.60' },
          { value: 'absorb_lourd', label: 'Absorbant lourd - α=0.85' }
        ]
      },
      {
        id: 'surface_plafond',
        label: 'Surface du plafond',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 5,
        max: 2000,
        placeholder: '100'
      },
      {
        id: 'materiau_plafond',
        label: 'Matériau du plafond',
        type: 'select',
        required: true,
        options: [
          { value: 'beton_nu', label: 'Béton nu - α=0.02' },
          { value: 'platre', label: 'Plâtre - α=0.03' },
          { value: 'faux_plafond', label: 'Faux-plafond standard - α=0.50' },
          { value: 'faux_plafond_absorb', label: 'Faux-plafond absorbant - α=0.85' }
        ]
      }
    ],
    outputs: [
      {
        id: 'aire_absorption_totale',
        label: 'Aire d\'absorption totale',
        unit: 'm² Sabine',
        format: 'number',
        precision: 1
      },
      {
        id: 'tr_500hz',
        label: 'TR à 500 Hz',
        unit: 's',
        format: 'number',
        precision: 2
      },
      {
        id: 'tr_optimal',
        label: 'TR optimal recommandé',
        unit: 's',
        format: 'number',
        precision: 2
      },
      {
        id: 'correction_necessaire',
        label: 'Correction nécessaire',
        format: 'text'
      }
    ],
    formula: 'TR = 0.161 × V / A',
    relatedCalculators: ['absorption-acoustique', 'isolement-acoustique']
  },
  {
    id: 'niveaux-sonores',
    type: 'calculator',
    title: 'Niveaux sonores et dBA',
    description: 'Calcul et conversion des niveaux sonores, addition de sources sonores',
    calculatorType: 'acoustic',
    category: 'acoustic',
    tags: ['acoustique', 'décibels', 'dBA', 'niveau sonore', 'sources multiples'],
    lastUpdated: '2024-02-15',
    difficulty: 'beginner',
    estimatedTime: '8 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur niveaux sonores dBA - Addition décibels',
      metaDescription: 'Calculez et additionnez les niveaux sonores en dBA. Outil pratique pour sources sonores multiples.',
      keywords: ['niveau sonore', 'dBA', 'décibels', 'acoustique', 'sources sonores'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/niveaux-sonores'
    },
    inputs: [
      {
        id: 'source1',
        label: 'Source sonore 1',
        type: 'number',
        unit: 'dB',
        required: true,
        min: 0,
        max: 140,
        placeholder: '65'
      },
      {
        id: 'source2',
        label: 'Source sonore 2',
        type: 'number',
        unit: 'dB',
        required: false,
        min: 0,
        max: 140,
        placeholder: '60'
      },
      {
        id: 'source3',
        label: 'Source sonore 3',
        type: 'number',
        unit: 'dB',
        required: false,
        min: 0,
        max: 140,
        placeholder: '55'
      },
      {
        id: 'distance',
        label: 'Distance de mesure',
        type: 'number',
        unit: 'm',
        required: false,
        min: 0.1,
        max: 1000,
        placeholder: '10'
      }
    ],
    outputs: [
      {
        id: 'niveau_total',
        label: 'Niveau sonore total',
        unit: 'dB',
        format: 'number',
        precision: 1
      },
      {
        id: 'niveau_distance',
        label: 'Niveau à 1m (si distance)',
        unit: 'dB',
        format: 'number',
        precision: 1
      },
      {
        id: 'interpretation',
        label: 'Interprétation du niveau',
        format: 'text'
      }
    ],
    formula: 'L_total = 10×log₁₀(Σ10^(Li/10))',
    relatedCalculators: ['isolement-acoustique', 'bruit-impact']
  },
  {
    id: 'acoustique-urbanisme',
    type: 'calculator',
    title: 'Acoustique et urbanisme',
    description: 'Calcul des nuisances sonores urbaines et respect des seuils réglementaires',
    calculatorType: 'acoustic',
    category: 'acoustic',
    tags: ['acoustique', 'urbanisme', 'nuisances', 'réglementation', 'environnement'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '12 min',
    isPublic: true,
    isPremium: true,
    seoData: {
      title: 'Calculateur acoustique urbanisme - Nuisances sonores',
      metaDescription: 'Évaluez les nuisances sonores urbaines. Conformité réglementaire et protection acoustique.',
      keywords: ['acoustique urbanisme', 'nuisances sonores', 'réglementation', 'environnement'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/acoustique-urbanisme'
    },
    inputs: [
      {
        id: 'type_zone',
        label: 'Type de zone',
        type: 'select',
        required: true,
        options: [
          { value: 'residentiel', label: 'Zone résidentielle - 55/45 dB' },
          { value: 'mixte', label: 'Zone mixte - 60/50 dB' },
          { value: 'activites', label: 'Zone d\'activités - 65/55 dB' },
          { value: 'industrielle', label: 'Zone industrielle - 70/60 dB' }
        ]
      },
      {
        id: 'periode',
        label: 'Période',
        type: 'select',
        required: true,
        options: [
          { value: 'jour', label: 'Jour (6h-22h)' },
          { value: 'nuit', label: 'Nuit (22h-6h)' }
        ]
      },
      {
        id: 'niveau_ambiant',
        label: 'Niveau sonore ambiant',
        type: 'number',
        unit: 'dB(A)',
        required: true,
        min: 30,
        max: 80,
        placeholder: '58'
      },
      {
        id: 'niveau_installation',
        label: 'Niveau installation seule',
        type: 'number',
        unit: 'dB(A)',
        required: true,
        min: 20,
        max: 80,
        placeholder: '52'
      }
    ],
    outputs: [
      {
        id: 'seuil_reglementaire',
        label: 'Seuil réglementaire',
        unit: 'dB(A)',
        format: 'number',
        precision: 0
      },
      {
        id: 'emergence',
        label: 'Émergence calculée',
        unit: 'dB',
        format: 'number',
        precision: 1
      },
      {
        id: 'emergence_limite',
        label: 'Émergence limite',
        unit: 'dB',
        format: 'number',
        precision: 0
      },
      {
        id: 'conformite',
        label: 'Conformité réglementaire',
        format: 'text'
      }
    ],
    relatedCalculators: ['niveaux-sonores', 'isolement-acoustique']
  }
];

// Calculateurs sécurité incendie
export const fireCalculators: Calculator[] = [
  {
    id: 'effectif-erp',
    type: 'calculator',
    title: 'Effectif ERP par catégorie',
    description: 'Calcul de l\'effectif d\'un Établissement Recevant du Public selon le type d\'activité',
    calculatorType: 'fire',
    category: 'fire',
    tags: ['ERP', 'effectif', 'sécurité incendie', 'établissement public', 'catégorie'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '8 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur effectif ERP - Sécurité incendie établissements',
      metaDescription: 'Calculez l\'effectif de votre ERP selon le type (M, N, O, R, etc.). Outil conforme réglementation incendie.',
      keywords: ['effectif ERP', 'sécurité incendie', 'ERP catégorie', 'établissement public'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/effectif-erp'
    },
    inputs: [
      {
        id: 'type_erp',
        label: 'Type d\'ERP',
        type: 'select',
        required: true,
        options: [
          { value: 'J', label: 'J - Structures d\'accueil pour personnes âgées' },
          { value: 'L', label: 'L - Salles d\'audition, de conférences' },
          { value: 'M', label: 'M - Magasins de vente' },
          { value: 'N', label: 'N - Restaurants, débits de boissons' },
          { value: 'O', label: 'O - Hôtels et pensions de famille' },
          { value: 'P', label: 'P - Salles de danse et salles de jeux' },
          { value: 'R', label: 'R - Établissements d\'enseignement' },
          { value: 'S', label: 'S - Bibliothèques, centres de documentation' },
          { value: 'T', label: 'T - Salles d\'exposition' },
          { value: 'U', label: 'U - Établissements de soins' },
          { value: 'V', label: 'V - Établissements de culte' },
          { value: 'W', label: 'W - Administrations, banques, bureaux' },
          { value: 'X', label: 'X - Établissements sportifs couverts' },
          { value: 'Y', label: 'Y - Musées' }
        ]
      },
      {
        id: 'surface',
        label: 'Surface accessible au public',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 1,
        placeholder: '200'
      }
    ],
    outputs: [
      {
        id: 'effectif_calcule',
        label: 'Effectif calculé',
        unit: 'personnes',
        format: 'number',
        precision: 0
      },
      {
        id: 'categorie_erp',
        label: 'Catégorie ERP',
        format: 'text'
      },
      {
        id: 'exigences_securite',
        label: 'Principales exigences',
        format: 'text'
      }
    ],
    formula: 'Effectif = Surface × Densité selon type ERP',
    relatedCalculators: ['degagement-erp', 'resistance-feu-erp', 'desenfumage-erp']
  },
  {
    id: 'degagement-erp',
    type: 'calculator',
    title: 'Dégagement ERP',
    description: 'Calcul du dégagement d\'un Établissement Recevant du Public selon le type d\'activité',
    calculatorType: 'fire',
    category: 'fire',
    tags: ['ERP', 'dégagement', 'établissement public', 'catégorie'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '8 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur dégagement ERP - Sécurité incendie établissements',
      metaDescription: 'Calculez le dégagement de votre ERP selon le type (M, N, O, R, etc.). Outil conforme réglementation incendie.',
      keywords: ['dégagement ERP', 'sécurité incendie', 'ERP catégorie', 'établissement public'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/degagement-erp'
    },
    inputs: [
      {
        id: 'type_erp',
        label: 'Type d\'ERP',
        type: 'select',
        required: true,
        options: [
          { value: 'J', label: 'J - Structures d\'accueil pour personnes âgées' },
          { value: 'L', label: 'L - Salles d\'audition, de conférences' },
          { value: 'M', label: 'M - Magasins de vente' },
          { value: 'N', label: 'N - Restaurants, débits de boissons' },
          { value: 'O', label: 'O - Hôtels et pensions de famille' },
          { value: 'P', label: 'P - Salles de danse et salles de jeux' },
          { value: 'R', label: 'R - Établissements d\'enseignement' },
          { value: 'S', label: 'S - Bibliothèques, centres de documentation' },
          { value: 'T', label: 'T - Salles d\'exposition' },
          { value: 'U', label: 'U - Établissements de soins' },
          { value: 'V', label: 'V - Établissements de culte' },
          { value: 'W', label: 'W - Administrations, banques, bureaux' },
          { value: 'X', label: 'X - Établissements sportifs couverts' },
          { value: 'Y', label: 'Y - Musées' }
        ]
      },
      {
        id: 'surface',
        label: 'Surface accessible au public',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 1,
        placeholder: '200'
      }
    ],
    outputs: [
      {
        id: 'degagement_calcule',
        label: 'Dégagement calculé',
        unit: 'm²',
        format: 'number',
        precision: 0
      },
      {
        id: 'conformite_securite',
        label: 'Conformité sécurité',
        format: 'text'
      }
    ],
    formula: 'Dégagement = Surface × Densité selon type ERP',
    relatedCalculators: ['effectif-erp']
  },
  {
    id: 'resistance-feu-erp',
    type: 'calculator',
    title: 'Résistance au feu ERP',
    description: 'Calcul de la résistance au feu d\'un Établissement Recevant du Public selon le type d\'activité',
    calculatorType: 'fire',
    category: 'fire',
    tags: ['ERP', 'résistance au feu', 'établissement public', 'catégorie'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '8 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur résistance au feu ERP - Sécurité incendie établissements',
      metaDescription: 'Calculez la résistance au feu de votre ERP selon le type (M, N, O, R, etc.). Outil conforme réglementation incendie.',
      keywords: ['résistance au feu ERP', 'sécurité incendie', 'ERP catégorie', 'établissement public'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/resistance-feu-erp'
    },
    inputs: [
      {
        id: 'type_erp',
        label: 'Type d\'ERP',
        type: 'select',
        required: true,
        options: [
          { value: 'J', label: 'J - Structures d\'accueil pour personnes âgées' },
          { value: 'L', label: 'L - Salles d\'audition, de conférences' },
          { value: 'M', label: 'M - Magasins de vente' },
          { value: 'N', label: 'N - Restaurants, débits de boissons' },
          { value: 'O', label: 'O - Hôtels et pensions de famille' },
          { value: 'P', label: 'P - Salles de danse et salles de jeux' },
          { value: 'R', label: 'R - Établissements d\'enseignement' },
          { value: 'S', label: 'S - Bibliothèques, centres de documentation' },
          { value: 'T', label: 'T - Salles d\'exposition' },
          { value: 'U', label: 'U - Établissements de soins' },
          { value: 'V', label: 'V - Établissements de culte' },
          { value: 'W', label: 'W - Administrations, banques, bureaux' },
          { value: 'X', label: 'X - Établissements sportifs couverts' },
          { value: 'Y', label: 'Y - Musées' }
        ]
      },
      {
        id: 'surface',
        label: 'Surface accessible au public',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 1,
        placeholder: '200'
      }
    ],
    outputs: [
      {
        id: 'resistance_feu_calcule',
        label: 'Résistance au feu calculée',
        unit: 'minutes',
        format: 'number',
        precision: 0
      },
      {
        id: 'conformite_securite',
        label: 'Conformité sécurité',
        format: 'text'
      }
    ],
    formula: 'Résistance au feu = Surface × Densité selon type ERP',
    relatedCalculators: ['effectif-erp']
  },
  {
    id: 'desenfumage-erp',
    type: 'calculator',
    title: 'Désenfumage ERP',
    description: 'Calcul du désenfumage d\'un Établissement Recevant du Public selon le type d\'activité',
    calculatorType: 'fire',
    category: 'fire',
    tags: ['ERP', 'désenfumage', 'établissement public', 'catégorie'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '8 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur désenfumage ERP - Sécurité incendie établissements',
      metaDescription: 'Calculez le désenfumage de votre ERP selon le type (M, N, O, R, etc.). Outil conforme réglementation incendie.',
      keywords: ['désenfumage ERP', 'sécurité incendie', 'ERP catégorie', 'établissement public'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/desenfumage-erp'
    },
    inputs: [
      {
        id: 'type_erp',
        label: 'Type d\'ERP',
        type: 'select',
        required: true,
        options: [
          { value: 'J', label: 'J - Structures d\'accueil pour personnes âgées' },
          { value: 'L', label: 'L - Salles d\'audition, de conférences' },
          { value: 'M', label: 'M - Magasins de vente' },
          { value: 'N', label: 'N - Restaurants, débits de boissons' },
          { value: 'O', label: 'O - Hôtels et pensions de famille' },
          { value: 'P', label: 'P - Salles de danse et salles de jeux' },
          { value: 'R', label: 'R - Établissements d\'enseignement' },
          { value: 'S', label: 'S - Bibliothèques, centres de documentation' },
          { value: 'T', label: 'T - Salles d\'exposition' },
          { value: 'U', label: 'U - Établissements de soins' },
          { value: 'V', label: 'V - Établissements de culte' },
          { value: 'W', label: 'W - Administrations, banques, bureaux' },
          { value: 'X', label: 'X - Établissements sportifs couverts' },
          { value: 'Y', label: 'Y - Musées' }
        ]
      },
      {
        id: 'surface',
        label: 'Surface accessible au public',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 1,
        placeholder: '200'
      }
    ],
    outputs: [
      {
        id: 'desenfumage_calcule',
        label: 'Désenfumage calculé',
        unit: 'minutes',
        format: 'number',
        precision: 0
      },
      {
        id: 'conformite_securite',
        label: 'Conformité sécurité',
        format: 'text'
      }
    ],
    formula: 'Désenfumage = Surface × Densité selon type ERP',
    relatedCalculators: ['effectif-erp']
  }
];

// CALCULATEURS ACCESSIBILITÉ PMR (5 calculateurs)
export const accessibilityCalculators: Calculator[] = [
  {
    id: 'rampe-pmr',
    type: 'calculator',
    title: 'Rampe d\'accès PMR',
    description: 'Calcul des dimensions et pentes de rampes d\'accès pour personnes à mobilité réduite',
    calculatorType: 'accessibility',
    category: 'accessibility',
    tags: ['PMR', 'accessibilité', 'rampe', 'pente', 'handicap', 'réglementation'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '10 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur rampe PMR - Accessibilité handicapés',
      metaDescription: 'Calculez les dimensions de vos rampes PMR : pente, longueur, paliers. Conforme réglementation accessibilité.',
      keywords: ['rampe PMR', 'accessibilité', 'handicap', 'pente rampe', 'réglementation'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/rampe-pmr'
    },
    inputs: [
      {
        id: 'denivele',
        label: 'Dénivelé à franchir',
        type: 'number',
        unit: 'cm',
        required: true,
        min: 1,
        max: 300,
        placeholder: '20'
      },
      {
        id: 'longueur_disponible',
        label: 'Longueur disponible',
        type: 'number',
        unit: 'm',
        required: false,
        min: 0.5,
        max: 50,
        placeholder: '4'
      },
      {
        id: 'usage',
        label: 'Type d\'usage',
        type: 'select',
        required: true,
        options: [
          { value: 'temporaire', label: 'Usage temporaire - 10% max' },
          { value: 'permanent', label: 'Usage permanent - 5% max' },
          { value: 'erp', label: 'ERP - 5% max + paliers' }
        ]
      }
    ],
    outputs: [
      {
        id: 'pente_calculee',
        label: 'Pente calculée',
        unit: '%',
        format: 'number',
        precision: 1
      },
      {
        id: 'longueur_necessaire',
        label: 'Longueur minimale nécessaire',
        unit: 'm',
        format: 'number',
        precision: 2
      },
      {
        id: 'nb_paliers',
        label: 'Nombre de paliers nécessaires',
        format: 'number',
        precision: 0
      },
      {
        id: 'conformite',
        label: 'Conformité réglementaire',
        format: 'text'
      }
    ],
    formula: 'Pente = dénivelé / longueur × 100',
    relatedCalculators: ['largeur-passage-pmr', 'ascenseur-pmr']
  },
  {
    id: 'largeur-passage-pmr',
    type: 'calculator',
    title: 'Largeur de passage PMR',
    description: 'Calcul des largeurs de passage et circulations pour PMR selon type de local',
    calculatorType: 'accessibility',
    category: 'accessibility',
    tags: ['PMR', 'accessibilité', 'largeur', 'passage', 'circulation', 'porte'],
    lastUpdated: '2024-02-15',
    difficulty: 'beginner',
    estimatedTime: '8 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur largeur passage PMR - Circulation accessibilité',
      metaDescription: 'Vérifiez les largeurs de passage PMR : portes, couloirs, escaliers. Conformité accessibilité.',
      keywords: ['largeur passage PMR', 'circulation PMR', 'accessibilité', 'porte PMR'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/largeur-passage-pmr'
    },
    inputs: [
      {
        id: 'type_passage',
        label: 'Type de passage',
        type: 'select',
        required: true,
        options: [
          { value: 'porte_simple', label: 'Porte simple - 80cm min' },
          { value: 'porte_principale', label: 'Porte principale - 90cm min' },
          { value: 'couloir', label: 'Couloir - 120cm min' },
          { value: 'palier', label: 'Palier devant porte - 150×150cm' },
          { value: 'escalier', label: 'Escalier - 120cm min' }
        ]
      },
      {
        id: 'largeur_existante',
        label: 'Largeur existante',
        type: 'number',
        unit: 'cm',
        required: true,
        min: 50,
        max: 500,
        placeholder: '90'
      },
      {
        id: 'frequentation',
        label: 'Niveau de fréquentation',
        type: 'select',
        required: true,
        options: [
          { value: 'faible', label: 'Faible fréquentation' },
          { value: 'normale', label: 'Fréquentation normale' },
          { value: 'forte', label: 'Forte fréquentation' }
        ]
      }
    ],
    outputs: [
      {
        id: 'largeur_minimale',
        label: 'Largeur minimale requise',
        unit: 'cm',
        format: 'number',
        precision: 0
      },
      {
        id: 'largeur_recommandee',
        label: 'Largeur recommandée',
        unit: 'cm',
        format: 'number',
        precision: 0
      },
      {
        id: 'conformite',
        label: 'Conformité',
        format: 'text'
      }
    ],
    relatedCalculators: ['rampe-pmr', 'places-parking-pmr']
  },
  {
    id: 'places-parking-pmr',
    type: 'calculator',
    title: 'Places de parking PMR',
    description: 'Calcul du nombre de places de stationnement PMR obligatoires selon la capacité',
    calculatorType: 'accessibility',
    category: 'accessibility',
    tags: ['PMR', 'parking', 'stationnement', 'accessibilité', 'places'],
    lastUpdated: '2024-02-15',
    difficulty: 'beginner',
    estimatedTime: '5 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur places parking PMR - Stationnement accessibilité',
      metaDescription: 'Calculez le nombre obligatoire de places PMR pour votre parking selon la réglementation.',
      keywords: ['places parking PMR', 'stationnement PMR', 'accessibilité parking'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/places-parking-pmr'
    },
    inputs: [
      {
        id: 'nb_places_total',
        label: 'Nombre total de places',
        type: 'number',
        required: true,
        min: 1,
        max: 2000,
        placeholder: '100'
      },
      {
        id: 'type_parking',
        label: 'Type de parking',
        type: 'select',
        required: true,
        options: [
          { value: 'public', label: 'Parking public' },
          { value: 'prive_erp', label: 'Parking privé d\'ERP' },
          { value: 'logement', label: 'Parking de logements' },
          { value: 'bureaux', label: 'Parking de bureaux' }
        ]
      }
    ],
    outputs: [
      {
        id: 'places_pmr_obligatoires',
        label: 'Places PMR obligatoires',
        format: 'number',
        precision: 0
      },
      {
        id: 'pourcentage',
        label: 'Pourcentage réglementaire',
        unit: '%',
        format: 'number',
        precision: 1
      },
      {
        id: 'dimensions_places',
        label: 'Dimensions des places PMR',
        format: 'text'
      }
    ],
    formula: 'Places PMR = max(1, total × pourcentage)',
    relatedCalculators: ['largeur-passage-pmr', 'ascenseur-pmr']
  },
  {
    id: 'ascenseur-pmr',
    type: 'calculator',
    title: 'Ascenseur accessible PMR',
    description: 'Vérification des dimensions et caractéristiques d\'un ascenseur accessible PMR',
    calculatorType: 'accessibility',
    category: 'accessibility',
    tags: ['PMR', 'ascenseur', 'accessibilité', 'dimensions', 'cabine'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '12 min',
    isPublic: true,
    isPremium: true,
    seoData: {
      title: 'Calculateur ascenseur PMR - Accessibilité vertical',
      metaDescription: 'Vérifiez la conformité PMR de votre ascenseur : dimensions cabine, palier, commandes.',
      keywords: ['ascenseur PMR', 'accessibilité verticale', 'cabine ascenseur', 'dimensions PMR'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/ascenseur-pmr'
    },
    inputs: [
      {
        id: 'largeur_cabine',
        label: 'Largeur de cabine',
        type: 'number',
        unit: 'cm',
        required: true,
        min: 80,
        max: 300,
        placeholder: '110'
      },
      {
        id: 'profondeur_cabine',
        label: 'Profondeur de cabine',
        type: 'number',
        unit: 'cm',
        required: true,
        min: 80,
        max: 300,
        placeholder: '140'
      },
      {
        id: 'largeur_porte',
        label: 'Largeur de porte',
        type: 'number',
        unit: 'cm',
        required: true,
        min: 70,
        max: 150,
        placeholder: '90'
      },
      {
        id: 'type_commandes',
        label: 'Type de commandes',
        type: 'select',
        required: true,
        options: [
          { value: 'boutons', label: 'Boutons standard' },
          { value: 'tactiles', label: 'Commandes tactiles' },
          { value: 'vocales', label: 'Commandes vocales' }
        ]
      }
    ],
    outputs: [
      {
        id: 'surface_cabine',
        label: 'Surface de cabine',
        unit: 'm²',
        format: 'number',
        precision: 2
      },
      {
        id: 'conformite_dimensions',
        label: 'Conformité dimensions',
        format: 'text'
      },
      {
        id: 'conformite_commandes',
        label: 'Conformité commandes',
        format: 'text'
      }
    ],
    relatedCalculators: ['rampe-pmr', 'largeur-passage-pmr']
  },
  {
    id: 'sanitaires-pmr',
    type: 'calculator',
    title: 'Sanitaires accessibles PMR',
    description: 'Dimensionnement et aménagement de sanitaires accessibles PMR',
    calculatorType: 'accessibility',
    category: 'accessibility',
    tags: ['PMR', 'sanitaires', 'WC', 'accessibilité', 'dimensions'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '15 min',
    isPublic: true,
    isPremium: true,
    seoData: {
      title: 'Calculateur sanitaires PMR - WC accessibles',
      metaDescription: 'Dimensionnez vos sanitaires PMR : WC, lavabo, barres d\'appui. Conformité accessibilité.',
      keywords: ['sanitaires PMR', 'WC PMR', 'accessibilité sanitaires', 'dimensions WC'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/sanitaires-pmr'
    },
    inputs: [
      {
        id: 'largeur_local',
        label: 'Largeur du local',
        type: 'number',
        unit: 'cm',
        required: true,
        min: 120,
        max: 400,
        placeholder: '150'
      },
      {
        id: 'profondeur_local',
        label: 'Profondeur du local',
        type: 'number',
        unit: 'cm',
        required: true,
        min: 120,
        max: 400,
        placeholder: '210'
      },
      {
        id: 'type_cuvette',
        label: 'Type de cuvette',
        type: 'select',
        required: true,
        options: [
          { value: 'suspendue', label: 'Cuvette suspendue' },
          { value: 'posee', label: 'Cuvette posée au sol' }
        ]
      },
      {
        id: 'avec_lavabo',
        label: 'Avec lavabo dans le local',
        type: 'select',
        required: true,
        options: [
          { value: 'oui', label: 'Oui' },
          { value: 'non', label: 'Non' }
        ]
      }
    ],
    outputs: [
      {
        id: 'surface_minimale',
        label: 'Surface minimale requise',
        unit: 'm²',
        format: 'number',
        precision: 2
      },
      {
        id: 'espace_transfert',
        label: 'Espace de transfert libre',
        unit: 'cm',
        format: 'text'
      },
      {
        id: 'hauteur_cuvette',
        label: 'Hauteur cuvette recommandée',
        unit: 'cm',
        format: 'text'
      },
      {
        id: 'conformite',
        label: 'Conformité générale',
        format: 'text'
      }
    ],
    relatedCalculators: ['largeur-passage-pmr', 'rampe-pmr']
  }
];

// CALCULATEURS FLUIDES & RÉSEAUX (6 calculateurs)
export const fluidsCalculators: Calculator[] = [
  {
    id: 'debit-eau-sanitaire',
    type: 'calculator',
    title: 'Débit eau chaude sanitaire',
    description: 'Calcul des débits et dimensionnement des installations d\'eau chaude sanitaire',
    calculatorType: 'fluids',
    category: 'fluids',
    tags: ['ECS', 'eau chaude', 'débit', 'dimensionnement', 'plomberie'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '12 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur débit ECS - Eau chaude sanitaire',
      metaDescription: 'Dimensionnez vos installations ECS : débits, production, stockage. Calcul conforme DTU 60.11.',
      keywords: ['débit ECS', 'eau chaude sanitaire', 'dimensionnement ECS', 'plomberie'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/debit-eau-sanitaire'
    },
    inputs: [
      {
        id: 'type_logement',
        label: 'Type de logement',
        type: 'select',
        required: true,
        options: [
          { value: 'T1', label: 'T1 - 1 personne' },
          { value: 'T2', label: 'T2 - 2 personnes' },
          { value: 'T3', label: 'T3 - 3 personnes' },
          { value: 'T4', label: 'T4 - 4 personnes' },
          { value: 'T5', label: 'T5+ - 5+ personnes' }
        ]
      },
      {
        id: 'nb_logements',
        label: 'Nombre de logements',
        type: 'number',
        required: true,
        min: 1,
        max: 200,
        placeholder: '1'
      },
      {
        id: 'equipements',
        label: 'Équipements',
        type: 'select',
        required: true,
        options: [
          { value: 'standard', label: 'Standard (évier, lavabo, douche)' },
          { value: 'confort', label: 'Confort (+ baignoire)' },
          { value: 'luxe', label: 'Luxe (+ équipements multiples)' }
        ]
      }
    ],
    outputs: [
      {
        id: 'debit_base',
        label: 'Débit de base',
        unit: 'L/min',
        format: 'number',
        precision: 1
      },
      {
        id: 'debit_pointe',
        label: 'Débit de pointe',
        unit: 'L/min',
        format: 'number',
        precision: 1
      },
      {
        id: 'volume_stockage',
        label: 'Volume de stockage recommandé',
        unit: 'L',
        format: 'number',
        precision: 0
      },
      {
        id: 'puissance_recommandee',
        label: 'Puissance recommandée',
        unit: 'kW',
        format: 'number',
        precision: 1
      }
    ],
    formula: 'Débit = Nb équipements × coeff simultanéité × débit unitaire',
    relatedCalculators: ['pression-eau', 'dimensionnement-tuyauterie']
  },
  {
    id: 'pression-eau',
    type: 'calculator',
    title: 'Calcul pression eau',
    description: 'Calcul des pressions et pertes de charge dans les réseaux d\'eau',
    calculatorType: 'fluids',
    category: 'fluids',
    tags: ['pression', 'eau', 'perte charge', 'réseau', 'hydraulique'],
    lastUpdated: '2024-02-15',
    difficulty: 'advanced',
    estimatedTime: '15 min',
    isPublic: true,
    isPremium: true,
    seoData: {
      title: 'Calculateur pression eau - Pertes de charge hydraulique',
      metaDescription: 'Calculez les pressions et pertes de charge dans vos réseaux d\'eau. Dimensionnement hydraulique.',
      keywords: ['pression eau', 'perte charge', 'hydraulique', 'réseau eau', 'dimensionnement'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/pression-eau'
    },
    inputs: [
      {
        id: 'debit',
        label: 'Débit',
        type: 'number',
        unit: 'L/min',
        required: true,
        min: 1,
        max: 1000,
        placeholder: '15'
      },
      {
        id: 'diametre',
        label: 'Diamètre de canalisation',
        type: 'select',
        required: true,
        options: [
          { value: '12', label: '12 mm' },
          { value: '16', label: '16 mm' },
          { value: '20', label: '20 mm' },
          { value: '25', label: '25 mm' },
          { value: '32', label: '32 mm' },
          { value: '40', label: '40 mm' },
          { value: '50', label: '50 mm' }
        ]
      },
      {
        id: 'longueur',
        label: 'Longueur de canalisation',
        type: 'number',
        unit: 'm',
        required: true,
        min: 1,
        max: 100,
        placeholder: '20'
      },
      {
        id: 'denivele',
        label: 'Dénivelé',
        type: 'number',
        unit: 'm',
        required: true,
        min: -20,
        max: 50,
        placeholder: '5'
      }
    ],
    outputs: [
      {
        id: 'vitesse_ecoulement',
        label: 'Vitesse d\'écoulement',
        unit: 'm/s',
        format: 'number',
        precision: 2
      },
      {
        id: 'perte_charge_lineaire',
        label: 'Perte de charge linéaire',
        unit: 'mCE/m',
        format: 'number',
        precision: 3
      },
      {
        id: 'perte_charge_totale',
        label: 'Perte de charge totale',
        unit: 'mCE',
        format: 'number',
        precision: 2
      },
      {
        id: 'pression_necessaire',
        label: 'Pression nécessaire',
        unit: 'bar',
        format: 'number',
        precision: 1
      }
    ],
    relatedCalculators: ['debit-eau-sanitaire', 'dimensionnement-tuyauterie']
  },
  {
    id: 'dimensionnement-tuyauterie',
    type: 'calculator',
    title: 'Dimensionnement tuyauterie',
    description: 'Choix du diamètre optimal des canalisations selon débit et vitesse',
    calculatorType: 'fluids',
    category: 'fluids',
    tags: ['tuyauterie', 'diamètre', 'canalisation', 'vitesse', 'dimensionnement'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '10 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur dimensionnement tuyauterie - Diamètre canalisation',
      metaDescription: 'Dimensionnez vos canalisations : diamètre optimal selon débit, vitesse admissible.',
      keywords: ['dimensionnement tuyauterie', 'diamètre canalisation', 'vitesse écoulement'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/dimensionnement-tuyauterie'
    },
    inputs: [
      {
        id: 'debit',
        label: 'Débit',
        type: 'number',
        unit: 'L/min',
        required: true,
        min: 1,
        max: 1000,
        placeholder: '25'
      },
      {
        id: 'vitesse_max',
        label: 'Vitesse maximale admissible',
        type: 'select',
        required: true,
        options: [
          { value: '1.0', label: '1.0 m/s - Distribution générale' },
          { value: '1.5', label: '1.5 m/s - Réseau intérieur' },
          { value: '2.0', label: '2.0 m/s - Refoulement' },
          { value: '3.0', label: '3.0 m/s - Cas particulier' }
        ]
      },
      {
        id: 'materiau',
        label: 'Matériau de canalisation',
        type: 'select',
        required: true,
        options: [
          { value: 'cuivre', label: 'Cuivre' },
          { value: 'pvc', label: 'PVC' },
          { value: 'per', label: 'PER' },
          { value: 'acier', label: 'Acier galvanisé' },
          { value: 'inox', label: 'Inox' }
        ]
      }
    ],
    outputs: [
      {
        id: 'diametre_theorique',
        label: 'Diamètre théorique',
        unit: 'mm',
        format: 'number',
        precision: 1
      },
      {
        id: 'diametre_commercial',
        label: 'Diamètre commercial',
        unit: 'mm',
        format: 'text'
      },
      {
        id: 'vitesse_reelle',
        label: 'Vitesse réelle',
        unit: 'm/s',
        format: 'number',
        precision: 2
      }
    ],
    formula: 'D = √(4×Q/(π×v))',
    relatedCalculators: ['debit-eau-sanitaire', 'pression-eau']
  },
  {
    id: 'puissance-electrique',
    type: 'calculator',
    title: 'Puissance électrique logement',
    description: 'Calcul de la puissance électrique nécessaire et dimensionnement du tableau',
    calculatorType: 'fluids',
    category: 'fluids',
    tags: ['électricité', 'puissance', 'tableau électrique', 'dimensionnement'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '12 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur puissance électrique - Dimensionnement installation',
      metaDescription: 'Calculez la puissance électrique de votre logement. Dimensionnement tableau et abonnement.',
      keywords: ['puissance électrique', 'dimensionnement électrique', 'tableau électrique'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/puissance-electrique'
    },
    inputs: [
      {
        id: 'surface_logement',
        label: 'Surface du logement',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 20,
        max: 500,
        placeholder: '100'
      },
      {
        id: 'chauffage_electrique',
        label: 'Chauffage électrique',
        type: 'select',
        required: true,
        options: [
          { value: 'oui', label: 'Oui' },
          { value: 'non', label: 'Non' }
        ]
      },
      {
        id: 'eau_chaude_electrique',
        label: 'Eau chaude électrique',
        type: 'select',
        required: true,
        options: [
          { value: 'oui', label: 'Oui' },
          { value: 'non', label: 'Non' }
        ]
      },
      {
        id: 'equipements_speciaux',
        label: 'Équipements spéciaux',
        type: 'select',
        required: true,
        options: [
          { value: 'aucun', label: 'Aucun' },
          { value: 'piscine', label: 'Piscine' },
          { value: 'climatisation', label: 'Climatisation' },
          { value: 'atelier', label: 'Atelier/garage' }
        ]
      }
    ],
    outputs: [
      {
        id: 'puissance_necessaire',
        label: 'Puissance nécessaire',
        unit: 'kVA',
        format: 'number',
        precision: 0
      },
      {
        id: 'abonnement_recommande',
        label: 'Abonnement recommandé',
        unit: 'kVA',
        format: 'text'
      },
      {
        id: 'intensite_max',
        label: 'Intensité maximale',
        unit: 'A',
        format: 'number',
        precision: 0
      }
    ],
    relatedCalculators: ['section-cables', 'protection-differentielle']
  },
  {
    id: 'section-cables',
    type: 'calculator',
    title: 'Section des câbles électriques',
    description: 'Calcul de la section des conducteurs selon intensité et longueur',
    calculatorType: 'fluids',
    category: 'fluids',
    tags: ['câbles', 'section', 'conducteur', 'intensité', 'chute tension'],
    lastUpdated: '2024-02-15',
    difficulty: 'advanced',
    estimatedTime: '15 min',
    isPublic: true,
    isPremium: true,
    seoData: {
      title: 'Calculateur section câbles - Dimensionnement conducteurs',
      metaDescription: 'Calculez la section de vos câbles électriques selon intensité et chute de tension admissible.',
      keywords: ['section câbles', 'dimensionnement conducteurs', 'chute tension', 'intensité'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/section-cables'
    },
    inputs: [
      {
        id: 'intensite',
        label: 'Intensité',
        type: 'number',
        unit: 'A',
        required: true,
        min: 1,
        max: 1000,
        placeholder: '20'
      },
      {
        id: 'longueur',
        label: 'Longueur de ligne',
        type: 'number',
        unit: 'm',
        required: true,
        min: 1,
        max: 500,
        placeholder: '25'
      },
      {
        id: 'installation',
        label: 'Mode d\'installation',
        type: 'select',
        required: true,
        options: [
          { value: 'apparent', label: 'Apparent ou goulotte' },
          { value: 'encastre', label: 'Encastré dans isolation' },
          { value: 'enterre', label: 'Enterré' },
          { value: 'combles', label: 'Sous combles' }
        ]
      },
      {
        id: 'materiau',
        label: 'Matériau conducteur',
        type: 'select',
        required: true,
        options: [
          { value: 'cuivre', label: 'Cuivre' },
          { value: 'aluminium', label: 'Aluminium' }
        ]
      }
    ],
    outputs: [
      {
        id: 'section_thermique',
        label: 'Section thermique',
        unit: 'mm²',
        format: 'number',
        precision: 1
      },
      {
        id: 'section_chute_tension',
        label: 'Section chute de tension',
        unit: 'mm²',
        format: 'number',
        precision: 1
      },
      {
        id: 'section_retenue',
        label: 'Section à retenir',
        unit: 'mm²',
        format: 'text'
      }
    ],
    relatedCalculators: ['puissance-electrique', 'protection-differentielle']
  },
  {
    id: 'debit-ventilation',
    type: 'calculator',
    title: 'Débit de ventilation',
    description: 'Calcul des débits de ventilation selon usage et réglementation',
    calculatorType: 'fluids',
    category: 'fluids',
    tags: ['ventilation', 'débit', 'air', 'renouvellement', 'VMC'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '10 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur débit ventilation - Renouvellement air',
      metaDescription: 'Calculez les débits de ventilation requis selon l\'usage. Dimensionnement VMC et ventilation.',
      keywords: ['débit ventilation', 'renouvellement air', 'VMC', 'qualité air'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/debit-ventilation'
    },
    inputs: [
      {
        id: 'type_local',
        label: 'Type de local',
        type: 'select',
        required: true,
        options: [
          { value: 'bureau', label: 'Bureau - 25 m³/h/pers' },
          { value: 'salle_reunion', label: 'Salle de réunion - 30 m³/h/pers' },
          { value: 'commerce', label: 'Commerce - 22 m³/h/pers' },
          { value: 'restaurant', label: 'Restaurant - 30 m³/h/pers' },
          { value: 'ecole', label: 'École - 15 m³/h/pers' },
          { value: 'logement', label: 'Logement - selon pièces' }
        ]
      },
      {
        id: 'surface',
        label: 'Surface',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 5,
        max: 2000,
        placeholder: '50'
      },
      {
        id: 'nb_occupants',
        label: 'Nombre d\'occupants',
        type: 'number',
        required: true,
        min: 1,
        max: 500,
        placeholder: '10'
      }
    ],
    outputs: [
      {
        id: 'debit_extraction',
        label: 'Débit d\'extraction',
        unit: 'm³/h',
        format: 'number',
        precision: 0
      },
      {
        id: 'debit_soufflage',
        label: 'Débit de soufflage',
        unit: 'm³/h',
        format: 'number',
        precision: 0
      },
      {
        id: 'taux_renouvellement',
        label: 'Taux de renouvellement',
        unit: 'vol/h',
        format: 'number',
        precision: 1
      }
    ],
    relatedCalculators: ['ventilation-vmc', 'infiltrometrie']
  }
];

// CALCULATEURS FINANCIER & ÉCONOMIQUE (6 calculateurs)
export const financialCalculators: Calculator[] = [
  {
    id: 'rentabilite-investissement',
    type: 'calculator',
    title: 'Rentabilité investissement immobilier',
    description: 'Calcul de la rentabilité d\'un investissement immobilier locatif',
    calculatorType: 'financial',
    category: 'financial',
    tags: ['rentabilité', 'investissement', 'immobilier', 'locatif', 'ROI'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '12 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur rentabilité immobilier - ROI investissement locatif',
      metaDescription: 'Calculez la rentabilité de votre investissement immobilier : rentabilité brute, nette, cash-flow.',
      keywords: ['rentabilité immobilier', 'investissement locatif', 'ROI', 'rendement'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/rentabilite-investissement'
    },
    inputs: [
      {
        id: 'prix_achat',
        label: 'Prix d\'achat',
        type: 'number',
        unit: '€',
        required: true,
        min: 10000,
        max: 2000000,
        placeholder: '200000'
      },
      {
        id: 'frais_acquisition',
        label: 'Frais d\'acquisition',
        type: 'number',
        unit: '€',
        required: true,
        min: 0,
        max: 50000,
        placeholder: '15000'
      },
      {
        id: 'travaux',
        label: 'Travaux',
        type: 'number',
        unit: '€',
        required: false,
        min: 0,
        max: 100000,
        placeholder: '10000'
      },
      {
        id: 'loyer_mensuel',
        label: 'Loyer mensuel',
        type: 'number',
        unit: '€/mois',
        required: true,
        min: 200,
        max: 5000,
        placeholder: '800'
      },
      {
        id: 'charges_annuelles',
        label: 'Charges annuelles',
        type: 'number',
        unit: '€/an',
        required: true,
        min: 0,
        max: 10000,
        placeholder: '1500'
      }
    ],
    outputs: [
      {
        id: 'investissement_total',
        label: 'Investissement total',
        unit: '€',
        format: 'number',
        precision: 0
      },
      {
        id: 'rentabilite_brute',
        label: 'Rentabilité brute',
        unit: '%',
        format: 'number',
        precision: 2
      },
      {
        id: 'rentabilite_nette',
        label: 'Rentabilité nette',
        unit: '%',
        format: 'number',
        precision: 2
      },
      {
        id: 'cash_flow_mensuel',
        label: 'Cash-flow mensuel',
        unit: '€/mois',
        format: 'number',
        precision: 0
      }
    ],
    formula: 'Rentabilité = (Loyers annuels / Investissement total) × 100',
    relatedCalculators: ['financement-pret', 'plus-value-immobiliere']
  },
  {
    id: 'financement-pret',
    type: 'calculator',
    title: 'Financement et capacité d\'emprunt',
    description: 'Calcul de la capacité d\'emprunt et simulation de prêt immobilier',
    calculatorType: 'financial',
    category: 'financial',
    tags: ['prêt', 'financement', 'capacité emprunt', 'mensualités', 'taux'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '10 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur financement prêt - Capacité emprunt immobilier',
      metaDescription: 'Calculez votre capacité d\'emprunt et simulez votre prêt immobilier. Mensualités et coût total.',
      keywords: ['capacité emprunt', 'prêt immobilier', 'financement', 'mensualités', 'simulation'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/financement-pret'
    },
    inputs: [
      {
        id: 'revenus_mensuels',
        label: 'Revenus mensuels nets',
        type: 'number',
        unit: '€/mois',
        required: true,
        min: 1000,
        max: 50000,
        placeholder: '4000'
      },
      {
        id: 'charges_mensuelles',
        label: 'Charges mensuelles',
        type: 'number',
        unit: '€/mois',
        required: true,
        min: 0,
        max: 10000,
        placeholder: '800'
      },
      {
        id: 'apport',
        label: 'Apport personnel',
        type: 'number',
        unit: '€',
        required: true,
        min: 0,
        max: 500000,
        placeholder: '50000'
      },
      {
        id: 'taux_interet',
        label: 'Taux d\'intérêt',
        type: 'number',
        unit: '%',
        required: true,
        min: 0.5,
        max: 10,
        placeholder: '2.5'
      },
      {
        id: 'duree',
        label: 'Durée du prêt',
        type: 'select',
        required: true,
        options: [
          { value: '15', label: '15 ans' },
          { value: '20', label: '20 ans' },
          { value: '25', label: '25 ans' },
          { value: '30', label: '30 ans' }
        ]
      }
    ],
    outputs: [
      {
        id: 'capacite_emprunt',
        label: 'Capacité d\'emprunt',
        unit: '€',
        format: 'number',
        precision: 0
      },
      {
        id: 'mensualite',
        label: 'Mensualité',
        unit: '€/mois',
        format: 'number',
        precision: 0
      },
      {
        id: 'cout_total',
        label: 'Coût total du crédit',
        unit: '€',
        format: 'number',
        precision: 0
      },
      {
        id: 'taux_endettement',
        label: 'Taux d\'endettement',
        unit: '%',
        format: 'number',
        precision: 1
      }
    ],
    relatedCalculators: ['rentabilite-investissement', 'cout-construction']
  },
  {
    id: 'cout-construction',
    type: 'calculator',
    title: 'Coût de construction au m²',
    description: 'Estimation du coût de construction selon type et qualité',
    calculatorType: 'financial',
    category: 'financial',
    tags: ['coût construction', 'prix m²', 'estimation', 'budget', 'devis'],
    lastUpdated: '2024-02-15',
    difficulty: 'beginner',
    estimatedTime: '8 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur coût construction - Prix m² construction 2024',
      metaDescription: 'Estimez le coût de votre construction au m² selon type, qualité et région. Barème 2024.',
      keywords: ['coût construction', 'prix m²', 'estimation construction', 'budget maison'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/cout-construction'
    },
    inputs: [
      {
        id: 'surface',
        label: 'Surface habitable',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 50,
        max: 500,
        placeholder: '150'
      },
      {
        id: 'type_construction',
        label: 'Type de construction',
        type: 'select',
        required: true,
        options: [
          { value: 'traditionnelle', label: 'Traditionnelle (béton/brique) - 1200-1600€/m²' },
          { value: 'bois', label: 'Ossature bois - 1100-1500€/m²' },
          { value: 'contemporaine', label: 'Contemporaine/design - 1600-2200€/m²' },
          { value: 'passive', label: 'Maison passive - 2000-2800€/m²' }
        ]
      },
      {
        id: 'niveau_finition',
        label: 'Niveau de finition',
        type: 'select',
        required: true,
        options: [
          { value: 'standard', label: 'Standard (-10%)' },
          { value: 'soigne', label: 'Soigné (référence)' },
          { value: 'haut_gamme', label: 'Haut de gamme (+25%)' },
          { value: 'luxe', label: 'Luxe (+50%)' }
        ]
      },
      {
        id: 'region',
        label: 'Région',
        type: 'select',
        required: true,
        options: [
          { value: 'province', label: 'Province (-5%)' },
          { value: 'moyenne', label: 'Ville moyenne (référence)' },
          { value: 'grande_ville', label: 'Grande ville (+10%)' },
          { value: 'ile_france', label: 'Île-de-France (+20%)' }
        ]
      }
    ],
    outputs: [
      {
        id: 'prix_m2',
        label: 'Prix au m² estimé',
        unit: '€/m²',
        format: 'number',
        precision: 0
      },
      {
        id: 'cout_total',
        label: 'Coût total estimé',
        unit: '€',
        format: 'number',
        precision: 0
      },
      {
        id: 'fourchette_basse',
        label: 'Fourchette basse',
        unit: '€',
        format: 'number',
        precision: 0
      },
      {
        id: 'fourchette_haute',
        label: 'Fourchette haute',
        unit: '€',
        format: 'number',
        precision: 0
      }
    ],
    relatedCalculators: ['financement-pret', 'rentabilite-investissement']
  },
  {
    id: 'plus-value-immobiliere',
    type: 'calculator',
    title: 'Plus-value immobilière',
    description: 'Calcul de la plus-value immobilière et de l\'imposition',
    calculatorType: 'financial',
    category: 'financial',
    tags: ['plus-value', 'immobilier', 'fiscalité', 'abattement', 'impôts'],
    lastUpdated: '2024-02-15',
    difficulty: 'advanced',
    estimatedTime: '15 min',
    isPublic: true,
    isPremium: true,
    seoData: {
      title: 'Calculateur plus-value immobilière - Fiscalité vente bien',
      metaDescription: 'Calculez votre plus-value immobilière et l\'imposition. Abattements selon durée de détention.',
      keywords: ['plus-value immobilière', 'fiscalité', 'vente immobilier', 'abattement', 'impôts'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/plus-value-immobiliere'
    },
    inputs: [
      {
        id: 'prix_vente',
        label: 'Prix de vente',
        type: 'number',
        unit: '€',
        required: true,
        min: 10000,
        max: 5000000,
        placeholder: '350000'
      },
      {
        id: 'prix_achat',
        label: 'Prix d\'achat',
        type: 'number',
        unit: '€',
        required: true,
        min: 5000,
        max: 3000000,
        placeholder: '250000'
      },
      {
        id: 'frais_achat',
        label: 'Frais d\'acquisition',
        type: 'number',
        unit: '€',
        required: true,
        min: 0,
        max: 100000,
        placeholder: '20000'
      },
      {
        id: 'travaux',
        label: 'Travaux effectués',
        type: 'number',
        unit: '€',
        required: false,
        min: 0,
        max: 200000,
        placeholder: '15000'
      },
      {
        id: 'duree_detention',
        label: 'Durée de détention',
        type: 'number',
        unit: 'années',
        required: true,
        min: 0,
        max: 50,
        placeholder: '8'
      },
      {
        id: 'residence_principale',
        label: 'Résidence principale',
        type: 'select',
        required: true,
        options: [
          { value: 'oui', label: 'Oui (exonération totale)' },
          { value: 'non', label: 'Non (taxation)' }
        ]
      }
    ],
    outputs: [
      {
        id: 'plus_value_brute',
        label: 'Plus-value brute',
        unit: '€',
        format: 'number',
        precision: 0
      },
      {
        id: 'abattement_duree',
        label: 'Abattement pour durée',
        unit: '%',
        format: 'number',
        precision: 1
      },
      {
        id: 'plus_value_imposable',
        label: 'Plus-value imposable',
        unit: '€',
        format: 'number',
        precision: 0
      },
      {
        id: 'impot_total',
        label: 'Impôt total dû',
        unit: '€',
        format: 'number',
        precision: 0
      }
    ],
    relatedCalculators: ['rentabilite-investissement', 'financement-pret']
  },
  {
    id: 'charges-copropriete',
    type: 'calculator',
    title: 'Charges de copropriété',
    description: 'Estimation des charges de copropriété selon type et services',
    calculatorType: 'financial',
    category: 'financial',
    tags: ['charges', 'copropriété', 'syndic', 'entretien', 'provisions'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '10 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur charges copropriété - Estimation mensuelle',
      metaDescription: 'Estimez vos charges de copropriété selon type d\'immeuble et services. Budget prévisionnel.',
      keywords: ['charges copropriété', 'syndic', 'entretien immeuble', 'provisions'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/charges-copropriete'
    },
    inputs: [
      {
        id: 'surface_logement',
        label: 'Surface du logement',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 20,
        max: 300,
        placeholder: '65'
      },
      {
        id: 'type_immeuble',
        label: 'Type d\'immeuble',
        type: 'select',
        required: true,
        options: [
          { value: 'ancien_sans_ascenseur', label: 'Ancien sans ascenseur - 25€/m²/an' },
          { value: 'ancien_avec_ascenseur', label: 'Ancien avec ascenseur - 35€/m²/an' },
          { value: 'recent_sans_service', label: 'Récent sans service - 30€/m²/an' },
          { value: 'recent_avec_service', label: 'Récent avec services - 45€/m²/an' },
          { value: 'standing', label: 'Standing/luxe - 60€/m²/an' }
        ]
      },
      {
        id: 'services',
        label: 'Services inclus',
        type: 'select',
        required: true,
        options: [
          { value: 'base', label: 'Base (nettoyage, entretien)' },
          { value: 'standard', label: 'Standard (+ gardien/concierge)' },
          { value: 'complet', label: 'Complet (+ espaces verts, piscine)' }
        ]
      },
      {
        id: 'region',
        label: 'Région',
        type: 'select',
        required: true,
        options: [
          { value: 'province', label: 'Province (-20%)' },
          { value: 'ville_moyenne', label: 'Ville moyenne (référence)' },
          { value: 'grande_ville', label: 'Grande ville (+15%)' },
          { value: 'paris', label: 'Paris (+40%)' }
        ]
      }
    ],
    outputs: [
      {
        id: 'charges_annuelles',
        label: 'Charges annuelles',
        unit: '€/an',
        format: 'number',
        precision: 0
      },
      {
        id: 'charges_mensuelles',
        label: 'Charges mensuelles',
        unit: '€/mois',
        format: 'number',
        precision: 0
      },
      {
        id: 'charges_m2',
        label: 'Charges au m²/an',
        unit: '€/m²/an',
        format: 'number',
        precision: 0
      }
    ],
    relatedCalculators: ['rentabilite-investissement', 'cout-construction']
  },
  {
    id: 'amortissement-bien',
    type: 'calculator',
    title: 'Amortissement fiscal',
    description: 'Calcul de l\'amortissement fiscal pour investissement locatif',
    calculatorType: 'financial',
    category: 'financial',
    tags: ['amortissement', 'fiscal', 'LMNP', 'LMP', 'défiscalisation'],
    lastUpdated: '2024-02-15',
    difficulty: 'advanced',
    estimatedTime: '18 min',
    isPublic: true,
    isPremium: true,
    seoData: {
      title: 'Calculateur amortissement fiscal - LMNP LMP défiscalisation',
      metaDescription: 'Calculez l\'amortissement fiscal de votre bien locatif. Optimisation LMNP et LMP.',
      keywords: ['amortissement fiscal', 'LMNP', 'LMP', 'défiscalisation', 'investissement locatif'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/amortissement-bien'
    },
    inputs: [
      {
        id: 'prix_bien',
        label: 'Prix du bien',
        type: 'number',
        unit: '€',
        required: true,
        min: 50000,
        max: 2000000,
        placeholder: '300000'
      },
      {
        id: 'valeur_terrain',
        label: 'Valeur du terrain',
        type: 'number',
        unit: '€',
        required: false,
        min: 0,
        max: 500000,
        placeholder: '50000'
      },
      {
        id: 'mobilier',
        label: 'Mobilier et équipements',
        type: 'number',
        unit: '€',
        required: false,
        min: 0,
        max: 100000,
        placeholder: '20000'
      },
      {
        id: 'regime_fiscal',
        label: 'Régime fiscal',
        type: 'select',
        required: true,
        options: [
          { value: 'lmnp', label: 'LMNP (Loueur Meublé Non Professionnel)' },
          { value: 'lmp', label: 'LMP (Loueur Meublé Professionnel)' },
          { value: 'sci_is', label: 'SCI à l\'IS' }
        ]
      },
      {
        id: 'annee_acquisition',
        label: 'Année d\'acquisition',
        type: 'number',
        required: true,
        min: 2010,
        max: 2024,
        placeholder: '2023'
      }
    ],
    outputs: [
      {
        id: 'amortissement_annuel',
        label: 'Amortissement annuel',
        unit: '€/an',
        format: 'number',
        precision: 0
      },
      {
        id: 'amortissement_cumulé',
        label: 'Amortissement cumulé à ce jour',
        unit: '€',
        format: 'number',
        precision: 0
      },
      {
        id: 'valeur_nette_comptable',
        label: 'Valeur nette comptable',
        unit: '€',
        format: 'number',
        precision: 0
      },
      {
        id: 'economie_impots_annuelle',
        label: 'Économie d\'impôts annuelle',
        unit: '€/an',
        format: 'number',
        precision: 0
      }
    ],
    relatedCalculators: ['rentabilite-investissement', 'plus-value-immobiliere']
  }
];

// CALCULATEURS SURFACES & MÉTRÉS (4 calculateurs)
export const surfaceCalculators: Calculator[] = [
  {
    id: 'surface-habitable',
    type: 'calculator',
    title: 'Surface habitable (loi Carrez)',
    description: 'Calcul de la surface habitable selon la loi Carrez et surface utile',
    calculatorType: 'surface',
    category: 'surface',
    tags: ['surface', 'habitable', 'loi Carrez', 'SHON', 'SHOB'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '12 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur surface habitable - Loi Carrez surface utile',
      metaDescription: 'Calculez la surface habitable selon loi Carrez, surface utile, SHON. Outil conforme réglementation.',
      keywords: ['surface habitable', 'loi Carrez', 'surface utile', 'SHON', 'SHOB'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/surface-habitable'
    },
    inputs: [
      {
        id: 'longueur',
        label: 'Longueur de la pièce',
        type: 'number',
        unit: 'm',
        required: true,
        min: 1,
        max: 50,
        placeholder: '5.5'
      },
      {
        id: 'largeur',
        label: 'Largeur de la pièce',
        type: 'number',
        unit: 'm',
        required: true,
        min: 1,
        max: 50,
        placeholder: '4.2'
      },
      {
        id: 'hauteur_sous_plafond',
        label: 'Hauteur sous plafond',
        type: 'number',
        unit: 'm',
        required: true,
        min: 1.5,
        max: 5,
        placeholder: '2.5'
      },
      {
        id: 'surfaces_deduire',
        label: 'Surfaces à déduire',
        type: 'number',
        unit: 'm²',
        required: false,
        min: 0,
        max: 20,
        placeholder: '1.5',
        helpText: 'Cloisons, gaines, escaliers...'
      },
      {
        id: 'type_piece',
        label: 'Type de pièce',
        type: 'select',
        required: true,
        options: [
          { value: 'principale', label: 'Pièce principale' },
          { value: 'cuisine', label: 'Cuisine' },
          { value: 'salle_bain', label: 'Salle de bain' },
          { value: 'wc', label: 'WC' },
          { value: 'degagement', label: 'Dégagement/couloir' },
          { value: 'combles', label: 'Combles aménagés' },
          { value: 'cave', label: 'Cave/sous-sol' }
        ]
      }
    ],
    outputs: [
      {
        id: 'surface_brute',
        label: 'Surface brute',
        unit: 'm²',
        format: 'number',
        precision: 2
      },
      {
        id: 'surface_carrez',
        label: 'Surface loi Carrez',
        unit: 'm²',
        format: 'number',
        precision: 2
      },
      {
        id: 'surface_utile',
        label: 'Surface utile',
        unit: 'm²',
        format: 'number',
        precision: 2
      },
      {
        id: 'prise_en_compte',
        label: 'Prise en compte réglementaire',
        format: 'text'
      }
    ],
    formula: 'Surface Carrez = Surface si hauteur ≥ 1,80m',
    relatedCalculators: ['emprise-au-sol', 'volume-beton']
  },
  {
    id: 'emprise-au-sol',
    type: 'calculator',
    title: 'Emprise au sol et COS',
    description: 'Calcul de l\'emprise au sol et coefficient d\'occupation des sols',
    calculatorType: 'surface',
    category: 'surface',
    tags: ['emprise', 'COS', 'coefficient', 'urbanisme', 'constructibilité'],
    lastUpdated: '2024-02-15',
    difficulty: 'intermediate',
    estimatedTime: '10 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur emprise au sol - COS coefficient occupation',
      metaDescription: 'Calculez l\'emprise au sol et le COS de votre construction. Vérification conformité urbanisme.',
      keywords: ['emprise au sol', 'COS', 'coefficient occupation', 'urbanisme', 'constructibilité'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/emprise-au-sol'
    },
    inputs: [
      {
        id: 'surface_terrain',
        label: 'Surface du terrain',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 100,
        max: 10000,
        placeholder: '800'
      },
      {
        id: 'surface_construction',
        label: 'Surface de construction au sol',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 50,
        max: 2000,
        placeholder: '120'
      },
      {
        id: 'surface_plancher_total',
        label: 'Surface de plancher totale',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 50,
        max: 5000,
        placeholder: '200'
      },
      {
        id: 'cos_autorise',
        label: 'COS autorisé par PLU',
        type: 'number',
        required: false,
        min: 0.1,
        max: 3.0,
        placeholder: '0.4'
      },
      {
        id: 'emprise_max_autorisee',
        label: 'Emprise max autorisée',
        type: 'number',
        unit: '%',
        required: false,
        min: 10,
        max: 100,
        placeholder: '30'
      }
    ],
    outputs: [
      {
        id: 'emprise_calculee',
        label: 'Emprise au sol',
        unit: '%',
        format: 'number',
        precision: 1
      },
      {
        id: 'cos_calcule',
        label: 'COS réalisé',
        format: 'number',
        precision: 2
      },
      {
        id: 'surface_constructible_restante',
        label: 'Surface constructible restante',
        unit: 'm²',
        format: 'number',
        precision: 0
      },
      {
        id: 'conformite_urbanisme',
        label: 'Conformité urbanisme',
        format: 'text'
      }
    ],
    formula: 'Emprise = (Surface construction / Surface terrain) × 100',
    relatedCalculators: ['surface-habitable', 'cout-construction']
  },
  {
    id: 'volume-beton',
    type: 'calculator',
    title: 'Volume de béton',
    description: 'Calcul du volume de béton pour dalles, poutres, poteaux et fondations',
    calculatorType: 'surface',
    category: 'surface',
    tags: ['béton', 'volume', 'dalle', 'fondation', 'poteau', 'poutre'],
    lastUpdated: '2024-02-15',
    difficulty: 'beginner',
    estimatedTime: '8 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur volume béton - Dalle fondation poteau poutre',
      metaDescription: 'Calculez le volume de béton nécessaire : dalles, fondations, poteaux, poutres. Commande béton prêt.',
      keywords: ['volume béton', 'dalle béton', 'fondation', 'poteau', 'poutre', 'commande béton'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/volume-beton'
    },
    inputs: [
      {
        id: 'type_element',
        label: 'Type d\'élément',
        type: 'select',
        required: true,
        options: [
          { value: 'dalle', label: 'Dalle/plancher' },
          { value: 'fondation_semelle', label: 'Fondation/semelle' },
          { value: 'poteau', label: 'Poteau' },
          { value: 'poutre', label: 'Poutre' },
          { value: 'voile', label: 'Voile/mur' }
        ]
      },
      {
        id: 'longueur',
        label: 'Longueur',
        type: 'number',
        unit: 'm',
        required: true,
        min: 0.1,
        max: 100,
        placeholder: '10'
      },
      {
        id: 'largeur',
        label: 'Largeur',
        type: 'number',
        unit: 'm',
        required: true,
        min: 0.1,
        max: 20,
        placeholder: '8'
      },
      {
        id: 'hauteur_epaisseur',
        label: 'Hauteur/Épaisseur',
        type: 'number',
        unit: 'm',
        required: true,
        min: 0.05,
        max: 5,
        placeholder: '0.20'
      },
      {
        id: 'nombre_elements',
        label: 'Nombre d\'éléments',
        type: 'number',
        required: true,
        min: 1,
        max: 100,
        placeholder: '1'
      },
      {
        id: 'marge_chute',
        label: 'Marge pour chutes',
        type: 'select',
        required: true,
        options: [
          { value: '5', label: '5% - Coulage précis' },
          { value: '10', label: '10% - Standard' },
          { value: '15', label: '15% - Forme complexe' }
        ]
      }
    ],
    outputs: [
      {
        id: 'volume_unitaire',
        label: 'Volume unitaire',
        unit: 'm³',
        format: 'number',
        precision: 3
      },
      {
        id: 'volume_total',
        label: 'Volume total',
        unit: 'm³',
        format: 'number',
        precision: 2
      },
      {
        id: 'volume_avec_marge',
        label: 'Volume avec marge',
        unit: 'm³',
        format: 'number',
        precision: 2
      },
      {
        id: 'nb_toupies',
        label: 'Nombre de toupies (6m³)',
        format: 'number',
        precision: 1
      }
    ],
    formula: 'Volume = Longueur × Largeur × Hauteur × Nombre',
    relatedCalculators: ['surface-habitable', 'quantite-materiaux']
  },
  {
    id: 'quantite-materiaux',
    type: 'calculator',
    title: 'Quantité de matériaux',
    description: 'Calcul des quantités de matériaux : carrelage, peinture, isolant, cloisons',
    calculatorType: 'surface',
    category: 'surface',
    tags: ['matériaux', 'quantité', 'carrelage', 'peinture', 'isolant', 'métré'],
    lastUpdated: '2024-02-15',
    difficulty: 'beginner',
    estimatedTime: '10 min',
    isPublic: true,
    isPremium: false,
    seoData: {
      title: 'Calculateur quantité matériaux - Carrelage peinture isolant',
      metaDescription: 'Calculez les quantités de matériaux nécessaires : carrelage, peinture, isolant, cloisons. Métré précis.',
      keywords: ['quantité matériaux', 'carrelage', 'peinture', 'isolant', 'métré', 'devis'],
      canonicalUrl: 'https://progineer.fr/workspace/calculators/quantite-materiaux'
    },
    inputs: [
      {
        id: 'type_materiau',
        label: 'Type de matériau',
        type: 'select',
        required: true,
        options: [
          { value: 'carrelage', label: 'Carrelage/revêtement sol' },
          { value: 'peinture', label: 'Peinture' },
          { value: 'papier_peint', label: 'Papier peint' },
          { value: 'isolant', label: 'Isolant' },
          { value: 'cloison_ba13', label: 'Cloison BA13' },
          { value: 'lambris', label: 'Lambris' }
        ]
      },
      {
        id: 'surface_a_couvrir',
        label: 'Surface à couvrir',
        type: 'number',
        unit: 'm²',
        required: true,
        min: 1,
        max: 1000,
        placeholder: '30'
      },
      {
        id: 'dimensions_ouvertures',
        label: 'Surface des ouvertures',
        type: 'number',
        unit: 'm²',
        required: false,
        min: 0,
        max: 100,
        placeholder: '5',
        helpText: 'Portes, fenêtres à déduire'
      },
      {
        id: 'format_carrelage',
        label: 'Format carrelage (si applicable)',
        type: 'select',
        required: false,
        options: [
          { value: '30x30', label: '30×30 cm' },
          { value: '45x45', label: '45×45 cm' },
          { value: '60x60', label: '60×60 cm' },
          { value: '30x60', label: '30×60 cm' },
          { value: '20x80', label: '20×80 cm' }
        ]
      },
      {
        id: 'rendement_peinture',
        label: 'Rendement peinture (si applicable)',
        type: 'select',
        required: false,
        options: [
          { value: '8', label: '8 m²/L - Peinture standard' },
          { value: '12', label: '12 m²/L - Peinture haute qualité' },
          { value: '6', label: '6 m²/L - Peinture épaisse' }
        ]
      }
    ],
    outputs: [
      {
        id: 'surface_nette',
        label: 'Surface nette à couvrir',
        unit: 'm²',
        format: 'number',
        precision: 2
      },
      {
        id: 'quantite_necessaire',
        label: 'Quantité nécessaire',
        format: 'text'
      },
      {
        id: 'quantite_avec_chute',
        label: 'Quantité avec chutes (+10%)',
        format: 'text'
      },
      {
        id: 'cout_estime',
        label: 'Coût estimé (ordre de grandeur)',
        unit: '€',
        format: 'text'
      }
    ],
    relatedCalculators: ['surface-habitable', 'volume-beton', 'cout-construction']
  }
];

// EXPORT DE TOUS LES CALCULATEURS
export const allCalculators = [
  ...thermalCalculators,
  ...eurocodesCalculators,
  ...acousticCalculators,
  ...fireCalculators,
  ...accessibilityCalculators,
  ...fluidsCalculators,
  ...financialCalculators,
  ...surfaceCalculators
];

// STATISTIQUES DES CALCULATEURS MISES À JOUR
export const calculatorsStats = {
  totalCalculators: allCalculators.length,
  publicCalculators: allCalculators.filter(c => c.isPublic).length,
  premiumCalculators: allCalculators.filter(c => c.isPremium).length,
  categories: calculatorCategories.length,
  lastUpdate: '2024-02-15',
  popularCalculators: ['resistance-thermique', 'coefficient-u', 'combinaisons-actions', 'isolement-acoustique', 'effectif-erp'],
  recentlyAdded: [
    'bilan-energetique-re2020', 'charpente-bois-ec5', 'reverberation-tr', 
    'rampe-pmr', 'debit-eau-sanitaire', 'rentabilite-investissement', 'volume-beton'
  ],
  byCategory: {
    thermal: thermalCalculators.length,
    eurocodes: eurocodesCalculators.length,
    acoustic: acousticCalculators.length,
    fire: fireCalculators.length,
    accessibility: accessibilityCalculators.length,
    fluids: fluidsCalculators.length,
    financial: financialCalculators.length,
    surface: surfaceCalculators.length
  }
}; 