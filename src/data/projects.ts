export interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  description: string;
  image: string;
  slug: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Maison contemporaine avec vue panoramique',
    location: 'PACA',
    category: 'Construction neuve',
    description: 'Villa moderne à l\'architecture audacieuse, intégrant des matériaux contemporains et des lignes épurées, conçue par notre maître d\'œuvre à Marseille.',
    image: '/images/prestations/PROGINEER-37-_resultat.webp',
    slug: 'maison-contemporaine-vue-panoramique'
  },
  {
    id: 2,
    title: 'Restructuration d\'une friche',
    location: 'Lomme / Lille',
    category: 'Réhabilitation',
    description: 'Transformation d\'un site industriel en espace de vie moderne et fonctionnel. Conservation des éléments architecturaux d\'origine.',
    image: '/images/prestations/PGR_99_resultat.webp',
    slug: 'restructuration-friche-lomme'
  },
  {
    id: 3,
    title: 'Logements collectifs',
    location: 'Clermont-Ferrand',
    category: 'Petit collectif',
    description: 'Ensemble de logements collectifs alliant confort, esthétique et durabilité. Espaces communs végétalisés et matériaux biosourcés.',
    image: '/images/prestations/PGR_36_resultat.webp',
    slug: 'logements-collectifs-clermont'
  },
  {
    id: 4,
    title: 'Rénovation appartement haussmannien',
    location: 'Marseille',
    category: 'Rénovation',
    description: 'Rénovation complète d\'un appartement haussmannien alliant éléments d\'époque et design contemporain.',
    image: '/images/prestations/PGR_23_resultat.webp',
    slug: 'renovation-haussmannien-marseille'
  },
  {
    id: 5,
    title: 'Extension contemporaine',
    location: 'Aix-en-Provence',
    category: 'Extension',
    description: 'Extension en ossature bois créant un espace de vie lumineux ouvert sur le jardin. Baies vitrées XXL et toiture végétalisée.',
    image: '/images/prestations/PGR_34_resultat.webp',
    slug: 'extension-contemporaine-aix'
  },
  {
    id: 6,
    title: 'Maison passive',
    location: 'Toulon',
    category: 'Construction écologique',
    description: 'Maison à énergie positive utilisant des matériaux biosourcés et des technologies innovantes pour un impact environnemental minimal.',
    image: '/images/prestations/PGR_44_resultat.webp',
    slug: 'maison-passive-toulon'
  },
]; 