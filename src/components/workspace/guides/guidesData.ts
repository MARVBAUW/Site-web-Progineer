import { GuideDocument } from './types';

// Guide categories
export const guideCategories = [
  { id: 'debutant', name: 'Débutant' },
  { id: 'intermediaire', name: 'Intermédiaire' },
  { id: 'avance', name: 'Avancé' }
];

// List of guides available in the workspace
export const guides: GuideDocument[] = [
  {
    id: 'choix-professionnel',
    title: 'Qui faire appel pour mon projet ?',
    description: 'Architecte, maître d\'œuvre, entrepreneur : guide complet pour choisir le bon professionnel selon votre projet',
    type: 'pdf',
    url: '/resources/guides/choix-professionnel.pdf',
    categoryId: 'debutant',
    lastUpdated: '2024-01-15',
    fileSize: '1.2 Mo',
    isNew: true,
    isFeatured: true,
    tags: ['architecte', 'maître d\'œuvre', 'entrepreneur'],
    readingTime: '10 min'
  },
  {
    id: 'permis-construire',
    title: 'Permis de construire : démarches complètes',
    description: 'Guide étape par étape pour obtenir votre permis de construire : documents, délais, recours et conseils pratiques',
    type: 'pdf',
    url: '/resources/guides/permis-construire.pdf',
    categoryId: 'intermediaire',
    lastUpdated: '2024-01-10',
    fileSize: '1.5 Mo',
    tags: ['permis de construire', 'urbanisme', 'démarches'],
    readingTime: '12 min'
  },
  {
    id: 'budget-construction',
    title: 'Établir son budget de construction',
    description: 'Méthode complète pour estimer et optimiser le budget de votre projet : coûts, financement, imprévus et conseils',
    type: 'pdf',
    url: '/resources/guides/budget-construction.pdf',
    categoryId: 'intermediaire',
    lastUpdated: '2024-01-12',
    fileSize: '1.3 Mo',
    tags: ['budget', 'coût construction', 'financement'],
    readingTime: '15 min'
  },
  {
    id: 'terrain-constructible',
    title: 'Choisir son terrain constructible',
    description: 'Critères essentiels pour bien choisir votre terrain : réglementation, géotechnique, réseaux, exposition et négociation',
    type: 'pdf',
    url: '/resources/guides/terrain-constructible.pdf',
    categoryId: 'intermediaire',
    lastUpdated: '2024-01-08',
    fileSize: '1.4 Mo',
    tags: ['terrain', 'constructible', 'PLU'],
    readingTime: '14 min'
  },
  {
    id: 're2020',
    title: 'Comprendre la RE2020',
    description: 'Guide complet de la réglementation environnementale 2020 : exigences, calculs, solutions techniques et impact sur votre projet',
    type: 'pdf',
    url: '/resources/guides/re2020.pdf',
    categoryId: 'avance',
    lastUpdated: '2024-01-20',
    fileSize: '1.8 Mo',
    tags: ['RE2020', 'réglementation', 'environnement'],
    readingTime: '18 min'
  },
  {
    id: 'assurances-construction',
    title: 'Assurances construction : protection complète',
    description: 'Guide complet des assurances obligatoires et optionnelles pour votre projet de construction : responsabilité, dommages-ouvrage et garanties',
    type: 'pdf',
    url: '/resources/guides/assurances-construction.pdf',
    categoryId: 'intermediaire',
    lastUpdated: '2024-01-22',
    fileSize: '1.6 Mo',
    tags: ['assurances', 'responsabilité décennale', 'dommages-ouvrage'],
    readingTime: '16 min'
  },
  {
    id: 'isolation-thermique',
    title: 'Isolation thermique performante',
    description: 'Guide technique complet de l\'isolation : matériaux, techniques de pose, performance thermique et conformité RE2020',
    type: 'pdf',
    url: '/resources/guides/isolation-thermique.pdf',
    categoryId: 'avance',
    lastUpdated: '2024-01-25',
    fileSize: '2.0 Mo',
    tags: ['isolation', 'thermique', 'matériaux'],
    readingTime: '20 min'
  },
  {
    id: 'construction-bois',
    title: 'Construction bois moderne',
    description: 'Guide complet de la construction bois : techniques, avantages, performance thermique, durabilité et réglementation incitative',
    type: 'pdf',
    url: '/resources/guides/construction-bois.pdf',
    categoryId: 'avance',
    lastUpdated: '2024-02-07',
    fileSize: '2.4 Mo',
    tags: ['construction bois', 'ossature bois', 'CLT'],
    readingTime: '24 min'
  },
  {
    id: 'renovation-energetique',
    title: 'Rénovation énergétique performante',
    description: 'Guide complet de la rénovation énergétique : audit, travaux prioritaires, aides financières et performance globale',
    type: 'pdf',
    url: '/resources/guides/renovation-energetique.pdf',
    categoryId: 'intermediaire',
    lastUpdated: '2024-02-10',
    fileSize: '2.3 Mo',
    tags: ['rénovation énergétique', 'audit énergétique', 'isolation'],
    readingTime: '23 min'
  },
  {
    id: 'domotique',
    title: 'Domotique et maison connectée',
    description: 'Guide complet de la domotique moderne : systèmes, protocoles, installation, sécurité et optimisation énergétique intelligente',
    type: 'pdf',
    url: '/resources/guides/domotique.pdf',
    categoryId: 'avance',
    lastUpdated: '2024-02-12',
    fileSize: '2.5 Mo',
    tags: ['domotique', 'maison connectée', 'smart home'],
    readingTime: '25 min'
  }
];
