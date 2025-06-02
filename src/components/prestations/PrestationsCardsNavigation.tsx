import React from 'react';

const prestations = [
  {
    slug: 'design-interieur',
    title: "Design d'intérieur",
    image: '/images/prestations/PGR CLAIR _9__resultat.webp',
    alt: "Design d'intérieur"
  },
  {
    slug: 'montage-administratif',
    title: 'Montage administratif',
    image: '/images/prestations/montage-administratif.webp',
    alt: 'Montage administratif'
  },
  {
    slug: 'petit-collectif',
    title: 'Petit collectif',
    image: '/images/prestations/petit-collectif.webp',
    alt: 'Petit collectif'
  },
  {
    slug: 'rehabilitation',
    title: 'Réhabilitation',
    image: '/images/prestations/rehabilitation.webp',
    alt: 'Réhabilitation'
  },
  {
    slug: 'construction-ecologique',
    title: 'Construction écologique',
    image: '/images/prestations/construction-ecologique.webp',
    alt: 'Construction écologique'
  },
  // ... autres prestations principales
];

const PrestationsCardsNavigation = () => (
  <nav aria-label="Navigation des prestations" className="my-8">
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {prestations.map((prestation) => (
        <li key={prestation.slug}>
          <a href={`/prestations/${prestation.slug}`}
            className="block bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:shadow-md transition p-4 text-center group focus:outline-none focus:ring-2 focus:ring-khaki-600">
            <img src={prestation.image} alt={prestation.alt} className="w-full h-32 object-cover rounded mb-3" loading="lazy" />
            <span className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-khaki-700 transition">{prestation.title}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default PrestationsCardsNavigation; 