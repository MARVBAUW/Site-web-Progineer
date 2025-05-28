// 10 guides pratiques supplémentaires pour compléter les 15 guides
export const additionalGuides = [
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
        id: 'pompes-chaleur',
        type: 'guide',
        title: 'Pompes à chaleur : guide complet',
        description: 'Tout savoir sur les pompes à chaleur : types, dimensionnement, installation, performance et rentabilité selon la RE2020',
        category: 'technique',
        tags: ['pompe à chaleur', 'PAC', 'chauffage', 'climatisation', 'géothermie', 'aérothermie'],
        lastUpdated: '2024-01-28',
        difficulty: 'advanced',
        estimatedTime: '22 min',
        readTime: '18 min',
        isPublic: true,
        isPremium: false,
        seoData: {
            title: 'Pompes à chaleur 2024 : Guide complet installation | Progineer',
            metaDescription: 'Guide expert des pompes à chaleur : types, dimensionnement, installation, COP. Tout pour choisir et installer votre PAC.',
            keywords: ['pompe à chaleur', 'PAC air-eau', 'PAC géothermique', 'COP', 'dimensionnement PAC'],
            canonicalUrl: 'https://progineer.fr/workspace/guides/pompes-chaleur'
        },
        content: `Guide expert des pompes à chaleur, solution de référence pour la RE2020. Dimensionnement, installation et optimisation des performances.`,
        sections: [
            {
                id: 'types-pompes-chaleur',
                title: 'Types de pompes à chaleur',
                content: 'Classification et caractéristiques des différents systèmes de pompes à chaleur.',
                subsections: [
                    {
                        id: 'pac-aerothermiques',
                        title: 'PAC aérothermiques',
                        content: 'Air-air (split), air-eau (chauffage + ECS). Source froide : air extérieur. COP 3-4. Installation simple, coût modéré.'
                    },
                    {
                        id: 'pac-geothermiques',
                        title: 'PAC géothermiques',
                        content: 'Sol-eau (capteurs horizontaux/verticaux), eau-eau (nappe phréatique). COP 4-6. Investissement élevé, performance stable.'
                    },
                    {
                        id: 'pac-hybrides',
                        title: 'PAC hybrides',
                        content: 'Couplage PAC + chaudière gaz/fioul. Optimisation selon température extérieure. Solution de transition énergétique.'
                    }
                ]
            },
            {
                id: 'dimensionnement',
                title: 'Dimensionnement et performance',
                content: 'Méthodes de calcul pour dimensionner correctement la pompe à chaleur.',
                subsections: [
                    {
                        id: 'calcul-puissance',
                        title: 'Calcul de la puissance',
                        content: 'Bilan thermique selon RT2012/RE2020, température de base, déperditions. Puissance PAC = déperditions × facteur de sécurité.'
                    },
                    {
                        id: 'coefficients-performance',
                        title: 'Coefficients de performance',
                        content: 'COP (conditions normalisées), SCOP (saisonnier), SEER (rafraîchissement). Labels énergétiques A++ à A+++.'
                    },
                    {
                        id: 'temperature-fonctionnement',
                        title: 'Températures de fonctionnement',
                        content: 'Régime basse température 35-45°C optimal. Impact sur COP et dimensionnement émetteurs (plancher chauffant, radiateurs BT).'
                    }
                ]
            },
            {
                id: 'installation',
                title: 'Installation et mise en service',
                content: 'Bonnes pratiques pour l\'installation des pompes à chaleur.',
                subsections: [
                    {
                        id: 'emplacement-unite-exterieure',
                        title: 'Emplacement unité extérieure',
                        content: 'Exposition, ventilation, nuisances sonores, distance hydraulique. Éviter vents dominants et recyclage d\'air.'
                    },
                    {
                        id: 'circuit-hydraulique',
                        title: 'Circuit hydraulique',
                        content: 'Dimensionnement tuyauteries, isolation, vase d\'expansion, circulateurs. Équilibrage et purge indispensables.'
                    },
                    {
                        id: 'regulation-programmation',
                        title: 'Régulation et programmation',
                        content: 'Lois d\'eau, zones de chauffage, programmations horaires. Optimisation selon occupation et apports gratuits.'
                    }
                ]
            },
            {
                id: 'maintenance-depannage',
                title: 'Maintenance et dépannage',
                content: 'Entretien préventif et diagnostic des pannes courantes.',
                subsections: [
                    {
                        id: 'maintenance-preventive',
                        title: 'Maintenance préventive',
                        content: 'Contrôle annuel obligatoire, nettoyage filtres, vérification étanchéité circuit frigorifique. Contrat maintenance recommandé.'
                    },
                    {
                        id: 'pannes-courantes',
                        title: 'Pannes et diagnostics',
                        content: 'Défauts pression, givrage, cycles courts, codes erreur. Méthodes de diagnostic et interventions autorisées.'
                    }
                ]
            }
        ],
        relatedGuides: ['re2020-guide', 'chauffage-performant', 'plancher-chauffant'],
        downloadUrl: '/resources/guides/pompes-chaleur.pdf',
        fileSize: '3.1 Mo'
    },
    {
        id: 'etude-sol',
        type: 'guide',
        title: 'Étude de sol obligatoire',
        description: 'Guide complet de l\'étude géotechnique : réglementation, types d\'études, interprétation des résultats et impact sur les fondations',
        category: 'technique',
        tags: ['étude de sol', 'géotechnique', 'fondations', 'argile', 'sismique', 'G2'],
        lastUpdated: '2024-01-30',
        difficulty: 'advanced',
        estimatedTime: '18 min',
        readTime: '14 min',
        isPublic: true,
        isPremium: false,
        seoData: {
            title: 'Étude de sol 2024 : Guide géotechnique obligatoire | Progineer',
            metaDescription: 'Étude de sol obligatoire : réglementation, G1 G2, argiles gonflantes, fondations. Guide complet pour éviter les sinistres.',
            keywords: ['étude de sol', 'géotechnique', 'G2', 'argiles gonflantes', 'fondations', 'sinistres'],
            canonicalUrl: 'https://progineer.fr/workspace/guides/etude-sol'
        },
        content: `L\'étude de sol est devenue obligatoire pour éviter les sinistres. Guide complet de la géotechnique pour la construction.`,
        sections: [
            {
                id: 'reglementation',
                title: 'Réglementation et obligations',
                content: 'Cadre réglementaire de l\'étude géotechnique depuis la loi ELAN.',
                subsections: [
                    {
                        id: 'loi-elan-2018',
                        title: 'Loi ELAN et obligations',
                        content: 'Obligatoire depuis 2020 en zones d\'aléa retrait-gonflement argiles moyen/fort. Étude G2 avant construction.'
                    },
                    {
                        id: 'zones-aleas',
                        title: 'Cartographie des aléas',
                        content: 'Consultation géorisques.gouv.fr. Zones faible, moyen, fort. Prescriptions techniques selon l\'aléa.'
                    }
                ]
            },
            {
                id: 'types-etudes',
                title: 'Types d\'études géotechniques',
                content: 'Classification des missions géotechniques selon la norme NF P94-500.',
                subsections: [
                    {
                        id: 'etude-g1',
                        title: 'Étude G1 - Préliminaire',
                        content: 'Reconnaissance de site, identification des risques géotechniques. Sondages limités, recommandations générales.'
                    },
                    {
                        id: 'etude-g2',
                        title: 'Étude G2 - Projet',
                        content: 'G2 AVP (avant-projet), G2 PRO (projet). Dimensionnement des fondations, prescriptions détaillées. Obligatoire depuis 2020.'
                    },
                    {
                        id: 'autres-missions',
                        title: 'Autres missions',
                        content: 'G3 (études d\'exécution), G4 (suivi), G5 (diagnostic). Missions complémentaires selon complexité.'
                    }
                ]
            },
            {
                id: 'interpretation-resultats',
                title: 'Interprétation des résultats',
                content: 'Comprendre les conclusions et recommandations géotechniques.',
                subsections: [
                    {
                        id: 'caracteristiques-sol',
                        title: 'Caractéristiques du sol',
                        content: 'Nature des terrains, stratigraphie, portance, compressibilité. Classes de sol selon Eurocode 8 (sismique).'
                    },
                    {
                        id: 'niveau-nappe',
                        title: 'Niveau de nappe',
                        content: 'Variation saisonnière, impact sur fondations, étanchéité sous-sol. Prescriptions de drainage si nécessaire.'
                    },
                    {
                        id: 'retrait-gonflement',
                        title: 'Retrait-gonflement argiles',
                        content: 'Indice de plasticité, VBS, gonflement libre. Prescriptions fondations rigides, coupure capillaire.'
                    }
                ]
            },
            {
                id: 'consequences-fondations',
                title: 'Impact sur les fondations',
                content: 'Adaptation du système de fondation selon les conclusions géotechniques.',
                subsections: [
                    {
                        id: 'fondations-superficielles',
                        title: 'Fondations superficielles',
                        content: 'Semelles isolées, filantes, radier. Ancrage minimum, ferraillage, dispositions anti-retrait.'
                    },
                    {
                        id: 'fondations-profondes',
                        title: 'Fondations profondes',
                        content: 'Pieux, micropieux si sol de faible portance. Calcul portance, longueur d\'ancrage dans couche résistante.'
                    },
                    {
                        id: 'prescriptions-specifiques',
                        title: 'Prescriptions spécifiques',
                        content: 'Joints de rupture, chaînages renforcés, évacuation eaux pluviales. Adaptation selon type d\'aléa.'
                    }
                ]
            }
        ],
        relatedGuides: ['terrain-constructible', 'fondations-construction', 'sinistres-construction'],
        downloadUrl: '/resources/guides/etude-sol.pdf',
        fileSize: '2.3 Mo'
    },
    {
        id: 'financement-travaux',
        type: 'guide',
        title: 'Financement et aides aux travaux',
        description: 'Guide complet des solutions de financement : prêts, aides publiques, crédit d\'impôt, éco-PTZ et subventions locales',
        category: 'preparation',
        tags: ['financement', 'aides', 'prêt travaux', 'éco-PTZ', 'MaPrimeRénov', 'crédit impôt'],
        lastUpdated: '2024-02-01',
        difficulty: 'intermediate',
        estimatedTime: '19 min',
        readTime: '15 min',
        isPublic: true,
        isPremium: false,
        seoData: {
            title: 'Financement travaux 2024 : Aides et prêts complets | Progineer',
            metaDescription: 'Guide complet financement travaux : MaPrimeRénov\', éco-PTZ, aides locales, prêts bancaires. Optimisez votre budget rénovation.',
            keywords: ['financement travaux', 'MaPrimeRénov', 'éco-PTZ', 'aides rénovation', 'prêt travaux'],
            canonicalUrl: 'https://progineer.fr/workspace/guides/financement-travaux'
        },
        content: `Optimisez le financement de vos travaux avec ce guide exhaustif des aides et prêts disponibles en 2024.`,
        sections: [
            {
                id: 'aides-publiques',
                title: 'Aides publiques nationales',
                content: 'Panorama des principales aides de l\'État pour la rénovation énergétique.',
                subsections: [
                    {
                        id: 'maprimerénov',
                        title: 'MaPrimeRénov\'',
                        content: 'Aide principale de l\'ANAH. Montants selon revenus et gains énergétiques. Cumulable avec autres aides. Dossier en ligne.'
                    },
                    {
                        id: 'eco-ptz',
                        title: 'Éco-prêt à taux zéro',
                        content: 'Jusqu\'à 50 000€ sans intérêts. Actions éligibles, bouquet de travaux, performance énergétique globale.'
                    },
                    {
                        id: 'certificats-economie',
                        title: 'Certificats d\'économie d\'énergie',
                        content: 'Primes CEE des fournisseurs d\'énergie. Montants variables, négociables. Cumulable avec autres dispositifs.'
                    }
                ]
            },
            {
                id: 'prets-bancaires',
                title: 'Prêts bancaires spécialisés',
                content: 'Solutions de financement proposées par les établissements bancaires.',
                subsections: [
                    {
                        id: 'pret-travaux-personnel',
                        title: 'Prêt travaux personnel',
                        content: 'Crédit non affecté, 5-10% de taux, jusqu\'à 75 000€. Remboursement 1-10 ans. Pas de justificatifs d\'utilisation.'
                    },
                    {
                        id: 'pret-amelioration-habitat',
                        title: 'Prêt amélioration habitat',
                        content: 'Crédit affecté aux travaux, taux préférentiels, garantie sur les biens. Justificatifs de travaux obligatoires.'
                    }
                ]
            },
            {
                id: 'aides-locales',
                title: 'Aides locales et sectorielles',
                content: 'Dispositifs proposés par les collectivités territoriales et organismes.',
                subsections: [
                    {
                        id: 'aides-collectivites',
                        title: 'Aides des collectivités',
                        content: 'Régions, départements, communes. Programmes spécifiques, conditions de ressources. Consultation site ANIL.'
                    },
                    {
                        id: 'action-logement',
                        title: 'Action Logement',
                        content: 'Prêts employeurs, subventions rénovation énergétique. Conditions d\'entreprise et de revenus. Jusqu\'à 20 000€.'
                    }
                ]
            },
            {
                id: 'optimisation-cumul',
                title: 'Optimisation et cumul des aides',
                content: 'Stratégies pour maximiser les aides en respectant les règles de cumul.',
                subsections: [
                    {
                        id: 'regles-cumul',
                        title: 'Règles de cumul',
                        content: 'Plafonds de cumul, aides incompatibles, ordre de demande. MaPrimeRénov\' + CEE + éco-PTZ possible.'
                    },
                    {
                        id: 'calendrier-demandes',
                        title: 'Calendrier des demandes',
                        content: 'Anticiper les délais, constituer les dossiers, respecter l\'ordre d\'intervention. Devis acceptés avant travaux.'
                    }
                ]
            }
        ],
        relatedGuides: ['budget-construction', 'renovation-energetique', 'assurances-construction'],
        downloadUrl: '/resources/guides/financement-travaux.pdf',
        fileSize: '2.2 Mo'
    },
    {
        id: 'gestion-chantier',
        type: 'guide',
        title: 'Gestion de chantier efficace',
        description: 'Méthodes et outils pour piloter efficacement votre chantier : planning, coordination, qualité, sécurité et réception des travaux',
        category: 'technique',
        tags: ['gestion chantier', 'planning', 'coordination', 'qualité', 'sécurité', 'suivi travaux'],
        lastUpdated: '2024-02-03',
        difficulty: 'intermediate',
        estimatedTime: '17 min',
        readTime: '13 min',
        isPublic: true,
        isPremium: false,
        seoData: {
            title: 'Gestion de chantier 2024 : Guide management efficace | Progineer',
            metaDescription: 'Pilotez efficacement votre chantier : planning, coordination, sécurité, qualité. Méthodes et outils pour réussir vos travaux.',
            keywords: ['gestion chantier', 'planning travaux', 'coordination artisans', 'sécurité chantier', 'suivi qualité'],
            canonicalUrl: 'https://progineer.fr/workspace/guides/gestion-chantier'
        },
        content: `Maîtrisez la gestion de chantier avec des méthodes éprouvées. Planning, coordination et qualité pour un projet réussi.`,
        sections: [
            {
                id: 'preparation-chantier',
                title: 'Préparation du chantier',
                content: 'Étapes préparatoires essentielles avant le démarrage des travaux.',
                subsections: [
                    {
                        id: 'installation-chantier',
                        title: 'Installation de chantier',
                        content: 'Base vie, stockage matériaux, accès, sécurisation. Plan d\'installation conforme aux normes. Déclaration préalable si besoin.'
                    },
                    {
                        id: 'autorisations-administrative',
                        title: 'Autorisations administratives',
                        content: 'Permis de construire, déclaration préalable, autorisation voirie. Affichage réglementaire, assurances à jour.'
                    }
                ]
            },
            {
                id: 'planning-coordination',
                title: 'Planning et coordination',
                content: 'Outils et méthodes pour organiser l\'enchaînement des tâches.',
                subsections: [
                    {
                        id: 'planning-detaille',
                        title: 'Établissement du planning',
                        content: 'Diagramme de Gantt, chemin critique, interdépendances. Intégrer délais d\'approvisionnement et aléas climatiques.'
                    },
                    {
                        id: 'coordination-corps-etat',
                        title: 'Coordination des corps d\'état',
                        content: 'Réunions hebdomadaires, points d\'avancement, résolution des interfaces. Communication fluide entre intervenants.'
                    },
                    {
                        id: 'gestion-approvisionnements',
                        title: 'Gestion des approvisionnements',
                        content: 'Commandes anticipées, contrôle conformité, stockage adapté. Éviter ruptures et retards de livraison.'
                    }
                ]
            },
            {
                id: 'controle-qualite',
                title: 'Contrôle qualité',
                content: 'Méthodes de vérification et validation de la qualité des travaux.',
                subsections: [
                    {
                        id: 'points-arret',
                        title: 'Points d\'arrêt obligatoires',
                        content: 'Implantation, fondations, charpente, étanchéité. Validation avant poursuite des travaux suivants.'
                    },
                    {
                        id: 'controles-techniques',
                        title: 'Contrôles techniques',
                        content: 'Contrôleur technique, bureau de contrôle, coordonnateur SPS. Levées de réserves avant réception.'
                    }
                ]
            },
            {
                id: 'reception-travaux',
                title: 'Réception des travaux',
                content: 'Procédures de réception et mise en service des ouvrages.',
                subsections: [
                    {
                        id: 'reception-provisoire',
                        title: 'Réception provisoire',
                        content: 'Visite contradictoire, procès-verbal, réserves. Point de départ des garanties légales. Remise des DOE.'
                    },
                    {
                        id: 'levee-reserves',
                        title: 'Levée des réserves',
                        content: 'Reprise des malfaçons, vérification conformité, validation définitive. Délais d\'intervention négociés.'
                    }
                ]
            }
        ],
        relatedGuides: ['assurances-construction', 'reception-travaux', 'qui-faire-appel'],
        downloadUrl: '/resources/guides/gestion-chantier.pdf',
        fileSize: '2.0 Mo'
    },
    {
        id: 'ventilation-performante',
        type: 'guide',
        title: 'Ventilation performante et qualité de l\'air',
        description: 'Guide technique de la ventilation : VMC, ventilation naturelle, qualité de l\'air intérieur et conformité réglementaire',
        category: 'technique',
        tags: ['ventilation', 'VMC', 'qualité air', 'hygiène', 'réglementation', 'performance'],
        lastUpdated: '2024-02-05',
        difficulty: 'advanced',
        estimatedTime: '21 min',
        readTime: '17 min',
        isPublic: true,
        isPremium: false,
        seoData: {
            title: 'Ventilation performante 2024 : Guide VMC qualité air | Progineer',
            metaDescription: 'Maîtrisez la ventilation performante : VMC double flux, qualité air intérieur, réglementation. Guide technique complet.',
            keywords: ['ventilation', 'VMC double flux', 'qualité air intérieur', 'ventilation mécanique', 'hygiène'],
            canonicalUrl: 'https://progineer.fr/workspace/guides/ventilation-performante'
        },
        content: `Guide technique approfondi de la ventilation performante. Systèmes, dimensionnement et qualité de l\'air intérieur.`,
        sections: [
            {
                id: 'principes-ventilation',
                title: 'Principes de la ventilation',
                content: 'Comprendre les enjeux et mécanismes de la ventilation des bâtiments.',
                subsections: [
                    {
                        id: 'enjeux-qualite-air',
                        title: 'Enjeux qualité de l\'air',
                        content: 'Polluants intérieurs, humidité, CO2, COV. Impact sur santé et confort. Réglementation QAI tertiaire.'
                    },
                    {
                        id: 'debits-reglementaires',
                        title: 'Débits réglementaires',
                        content: 'Arrêté du 24 mars 1982, débits par local, occupation. Extraction cuisines, salles d\'eau. Apports d\'air neuf.'
                    }
                ]
            },
            {
                id: 'systemes-ventilation',
                title: 'Systèmes de ventilation',
                content: 'Typologie et caractéristiques des différents systèmes.',
                subsections: [
                    {
                        id: 'ventilation-naturelle',
                        title: 'Ventilation naturelle',
                        content: 'Tirage thermique, ventilation traversante, conduits shunt. Adapté aux climats tempérés, coût réduit.'
                    },
                    {
                        id: 'vmc-simple-flux',
                        title: 'VMC simple flux',
                        content: 'Autoréglable ou hygroréglable. Extraction mécanique, entrées d\'air naturelles. Économique, performance limitée.'
                    },
                    {
                        id: 'vmc-double-flux',
                        title: 'VMC double flux',
                        content: 'Récupération de chaleur 80-95%. Filtration air neuf, confort acoustique. Investissement élevé, maintenance importante.'
                    }
                ]
            },
            {
                id: 'dimensionnement',
                title: 'Dimensionnement et installation',
                content: 'Méthodes de calcul et bonnes pratiques d\'installation.',
                subsections: [
                    {
                        id: 'calcul-debits',
                        title: 'Calcul des débits',
                        content: 'Méthode réglementaire, débits de base et pointe. Coefficients d\'intermittence, simultanéité. Logiciels de calcul.'
                    },
                    {
                        id: 'reseaux-distribution',
                        title: 'Réseaux de distribution',
                        content: 'Dimensionnement gaines, vitesses d\'air, pertes de charge. Isolation phonique et thermique des réseaux.'
                    },
                    {
                        id: 'mise-service',
                        title: 'Mise en service',
                        content: 'Équilibrage des débits, réglages, mesures de réception. Remise en main, formation utilisateur.'
                    }
                ]
            },
            {
                id: 'maintenance-exploitation',
                title: 'Maintenance et exploitation',
                content: 'Entretien préventif pour maintenir les performances.',
                subsections: [
                    {
                        id: 'maintenance-preventive',
                        title: 'Maintenance préventive',
                        content: 'Nettoyage filtres, bouches, gaines. Vérification moteurs, échangeurs. Planning d\'entretien annuel.'
                    },
                    {
                        id: 'controles-performancs',
                        title: 'Contrôles de performance',
                        content: 'Mesures débits, consommations, qualité air. Indicateurs de dérive, optimisation fonctionnement.'
                    }
                ]
            }
        ],
        relatedGuides: ['isolation-thermique', 're2020-guide', 'etancheite-air'],
        downloadUrl: '/resources/guides/ventilation-performante.pdf',
        fileSize: '2.7 Mo'
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
export default additionalGuides;
