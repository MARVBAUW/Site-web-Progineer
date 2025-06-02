import { 
  HomeIcon, 
  Gauge, 
  Maximize, 
  Ruler, 
  Paintbrush,
  Building2,
  FileText,
  Leaf,
  Building
} from 'lucide-react';
import type { Service } from './types';

export const services: Service[] = [
  {
    id: 'construction',
    title: 'Construction sur mesure',
    description: 'Construction de maisons individuelles et petits collectifs parfaitement adaptés à vos besoins et à votre terrain.',
    icon: HomeIcon,
    link: '/prestations/construction-neuve',
    slug: 'construction-neuve',
    bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
    iconColor: 'text-indigo-500',
    borderColor: 'border-indigo-100',
    details: [
      'Étude de faisabilité complète',
      'Conception architecturale personnalisée',
      'Optimisation des coûts et des délais',
      'Coordination des artisans et suivi de chantier',
      'Gestion administrative (permis de construire, déclarations)',
      'Garantie de livraison dans les délais convenus'
    ]
  },
  {
    id: 'renovation',
    title: 'Rénovation énergétique',
    description: 'Améliorez la performance énergétique de votre logement tout en valorisant votre patrimoine immobilier.',
    icon: Gauge,
    link: '/prestations/renovation',
    slug: 'renovation',
    bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
    iconColor: 'text-emerald-500',
    borderColor: 'border-emerald-100',
    details: [
      'Audit énergétique complet',
      'Diagnostic de Performance Énergétique (DPE)',
      'Solutions adaptées aux normes RE2020',
      'Accompagnement aux aides financières (MaPrimeRénov, CEE)',
      'Isolation thermique et phonique',
      'Installation de systèmes de chauffage écologiques'
    ]
  },
  {
    id: 'extension',
    title: 'Extension de maison',
    description: 'Agrandissez votre espace de vie avec une extension parfaitement intégrée à votre maison existante.',
    icon: Maximize,
    link: '/prestations/extension',
    slug: 'extension',
    bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20',
    iconColor: 'text-amber-500',
    borderColor: 'border-amber-100',
    details: [
      'Étude de faisabilité et contraintes',
      'Conception architecturale harmonieuse',
      'Optimisation de l\'espace',
      'Respect des normes d\'urbanisme',
      'Coordination des travaux',
      'Suivi de chantier'
    ]
  },
  {
    id: 'optimisation',
    title: 'Optimisation d\'espace',
    description: 'Transformez votre intérieur pour en tirer le meilleur parti et améliorer votre confort quotidien.',
    icon: Ruler,
    link: '/prestations/optimisation-espace',
    slug: 'optimisation-espace',
    bgColor: 'bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20',
    iconColor: 'text-violet-500',
    borderColor: 'border-violet-100',
    details: [
      'Analyse des besoins et contraintes',
      'Solutions d\'aménagement innovantes',
      'Optimisation de la circulation',
      'Création d\'espaces multifonctions',
      'Conseils en mobilier et rangement',
      'Suivi de la mise en œuvre'
    ]
  },
  {
    id: 'design',
    title: 'Design d\'espace',
    description: 'Créez des intérieurs esthétiques et fonctionnels qui reflètent votre personnalité et votre mode de vie.',
    icon: Paintbrush,
    link: '/prestations/design-interieur',
    slug: 'design-interieur',
    bgColor: 'bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20',
    iconColor: 'text-rose-500',
    borderColor: 'border-rose-100',
    details: [
      'Conception d\'intérieur personnalisée',
      'Choix des matériaux et des finitions',
      'Plans d\'aménagement détaillés',
      'Conseils en décoration et mobilier',
      'Moodboards et visualisations 3D',
      'Suivi de la mise en œuvre'
    ]
  },
  {
    id: 'administratif',
    title: 'Montage administratif',
    description: 'Simplifiez vos démarches administratives grâce à notre accompagnement expert pour tous vos projets de construction.',
    icon: FileText,
    link: '/prestations/montage-administratif',
    slug: 'montage-administratif',
    bgColor: 'bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20',
    iconColor: 'text-sky-500',
    borderColor: 'border-sky-100',
    details: [
      'Élaboration des dossiers de permis de construire',
      'Déclarations préalables de travaux',
      'Accompagnement aux autorisations d\'urbanisme',
      'Suivi des délais d\'instruction',
      'Assistance aux recours éventuels',
      'Relations avec les services d\'urbanisme'
    ]
  },
  {
    id: 'petit-collectif',
    title: 'Petit collectif',
    description: 'Conception et réalisation de projets immobiliers collectifs de petite taille, adaptés aux besoins de votre copropriété.',
    icon: Building2,
    link: '/prestations/petit-collectif',
    slug: 'petit-collectif',
    bgColor: 'bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20',
    iconColor: 'text-teal-500',
    borderColor: 'border-teal-100',
    details: [
      'Étude de faisabilité collective',
      'Conception architecturale adaptée',
      'Gestion des copropriétaires',
      'Coordination des travaux',
      'Suivi administratif',
      'Garantie de livraison'
    ]
  },
  {
    id: 'rehabilitation',
    title: 'Réhabilitation',
    description: 'Transformation et modernisation de bâtiments existants pour leur donner une nouvelle vie et améliorer leur performance.',
    icon: Building,
    link: '/prestations/rehabilitation',
    slug: 'rehabilitation',
    bgColor: 'bg-gradient-to-br from-lime-50 to-green-50 dark:from-lime-900/20 dark:to-green-900/20',
    iconColor: 'text-lime-500',
    borderColor: 'border-lime-100',
    details: [
      'Diagnostic complet du bâtiment',
      'Solutions de réhabilitation adaptées',
      'Mise aux normes',
      'Amélioration énergétique',
      'Coordination des travaux',
      'Suivi de chantier'
    ]
  },
  {
    id: 'construction-ecologique',
    title: 'Construction écologique',
    description: 'Réalisation de projets de construction respectueux de l\'environnement, utilisant des matériaux durables et des techniques innovantes.',
    icon: Leaf,
    link: '/prestations/construction-ecologique',
    slug: 'construction-ecologique',
    bgColor: 'bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20',
    iconColor: 'text-emerald-500',
    borderColor: 'border-emerald-100',
    details: [
      'Conception bioclimatique',
      'Matériaux écologiques',
      'Énergies renouvelables',
      'Gestion des déchets',
      'Performance énergétique',
      'Certification environnementale'
    ]
  }
]; 