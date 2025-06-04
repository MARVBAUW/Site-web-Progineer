export interface NavLink {
  name: string;
  path: string;
  subLinks?: { name: string; path: string }[];
}

export const navLinks: NavLink[] = [
  { name: 'Accueil', path: '/' },
  { 
    name: 'Nos prestations', 
    path: '/prestations',
    subLinks: [
      { name: 'Toutes nos prestations', path: '/prestations' },
      { name: 'Construction neuve', path: '/prestations/construction-neuve' },
      { name: 'Rénovation', path: '/prestations/renovation' },
      { name: 'Extension', path: '/prestations/extension' },
      { name: 'Optimisation d\'espace', path: '/prestations/optimisation-espace' },
      { name: 'Design d\'intérieur', path: '/prestations/design-interieur' },
      { name: 'Montage administratif', path: '/prestations/montage-administratif' },
      { name: 'Petit collectif', path: '/prestations/petit-collectif' },
      { name: 'Réhabilitation', path: '/prestations/rehabilitation' },
      { name: 'Construction écologique', path: '/prestations/construction-ecologique' },
    ]
  },
  { name: 'Nos réalisations', path: '/realisations' },
  { name: 'Notre équipe', path: '/equipe' },
  { name: 'Workspace', path: '/workspace' },
];
