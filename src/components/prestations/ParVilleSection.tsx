import React from 'react';

interface ParVilleSectionProps {
  prestation: string;
}

const villes = [
  'Marseille',
  'Nice',
  'Toulon',
  'Aix-en-Provence',
  'Avignon',
  'Cannes',
  'Antibes',
  'Fréjus',
  'Hyères',
  'Arles',
];

const ParVilleSection = ({ prestation }: ParVilleSectionProps) => (
  <section className="my-12" aria-labelledby="par-ville-title">
    <h2 id="par-ville-title" className="text-xl font-semibold mb-4">{prestation.charAt(0).toUpperCase() + prestation.slice(1)} en région PACA : nos interventions par ville</h2>
    <ul className="flex flex-wrap gap-3">
      {villes.map((ville) => (
        <li key={ville} className="bg-khaki-100 text-khaki-800 px-4 py-2 rounded-full text-sm font-medium">
          {prestation} à {ville}
        </li>
      ))}
    </ul>
    <p className="mt-4 text-gray-600 dark:text-gray-300">
      Progineer intervient pour tous vos besoins de {prestation} dans les principales villes de Provence-Alpes-Côte d'Azur. Contactez-nous pour un accompagnement local et personnalisé.
    </p>
  </section>
);

export default ParVilleSection; 