export interface NavLink {
  name: string;
  path: string;
  subLinks?: { name: string; path: string }[];
}

export const navLinks: NavLink[] = [
  { name: 'Accueil', path: '/' },
  { 
    name: 'Nos prestations', 
    path: '/prestations-maitre-oeuvre',
    subLinks: [
      { name: 'Toutes nos prestations', path: '/prestations-maitre-oeuvre' },
      { name: 'Construction neuve', path: '/prestations-maitre-oeuvre/construction-neuve' },
      { name: 'Rénovation', path: '/prestations-maitre-oeuvre/renovation' },
      { name: 'Extension', path: '/prestations-maitre-oeuvre/extension' },
      { name: 'Optimisation d\'espace', path: '/prestations-maitre-oeuvre/optimisation-espace' },
      { name: 'Design d\'intérieur', path: '/prestations-maitre-oeuvre/design-interieur' },
      { name: 'Montage administratif', path: '/prestations-maitre-oeuvre/montage-administratif' },
      { name: 'Petit collectif', path: '/prestations-maitre-oeuvre/petit-collectif' },
      { name: 'Réhabilitation', path: '/prestations-maitre-oeuvre/rehabilitation' },
      { name: 'Construction écologique', path: '/prestations-maitre-oeuvre/construction-ecologique' },
    ]
  },
  { name: 'Nos réalisations', path: '/realisations-architecte-maison' },
  { name: 'Notre équipe', path: '/equipe-maitrise-oeuvre' },
  { name: 'Workspace', path: '/workspace' },
];
