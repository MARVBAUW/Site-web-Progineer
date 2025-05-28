import React from 'react';

interface RealisationsSectionProps {
  prestation: string;
}

const exemplesParPrestation: Record<string, { titre: string; description: string }[]> = {
  'montage administratif': [
    { titre: 'Permis de construire maison individuelle', description: "Dossier complet pour une maison neuve à Marseille, incluant plans, notice et suivi administratif." },
    { titre: 'Déclaration préalable extension', description: "Montage du dossier pour une extension de villa à Nice, avec optimisation des délais d'instruction." },
    { titre: 'Changement de destination', description: "Transformation d'un local commercial en logement à Toulon, gestion des autorisations et conformité." }
  ],
  'petit collectif': [
    { titre: 'Immeuble R+2 à Marseille', description: "Conception et suivi de chantier pour un petit collectif de 8 logements, optimisation foncière et qualité architecturale." },
    { titre: 'Résidence à Nice', description: "Construction d'une résidence de 12 appartements, gestion complète du projet de l'étude à la livraison." },
    { titre: 'Collectif social à Toulon', description: "Accompagnement d'un bailleur social pour la réalisation d'un petit collectif à vocation sociale." }
  ],
  'réhabilitation': [
    { titre: "Réhabilitation d'immeuble ancien", description: "Transformation d'un immeuble haussmannien à Marseille, mise aux normes et valorisation du patrimoine." },
    { titre: 'Rénovation patrimoniale à Avignon', description: "Restauration d'un bâtiment classé, respect des contraintes architecturales et techniques." },
    { titre: 'Transformation de bureaux', description: "Réaffectation de bureaux en logements à Aix-en-Provence, gestion des autorisations et travaux lourds." }
  ],
  'construction écologique': [
    { titre: 'Maison bois passive', description: "Construction d'une maison à ossature bois à Fréjus, conception bioclimatique et matériaux biosourcés." },
    { titre: 'Extension écologique', description: "Extension d'une villa à Hyères avec isolation naturelle et panneaux solaires." },
    { titre: 'Immeuble RE2020', description: "Réalisation d'un petit collectif conforme à la réglementation environnementale RE2020 à Antibes." }
  ]
};

const RealisationsSection = ({ prestation }: RealisationsSectionProps) => {
  const exemples = exemplesParPrestation[prestation] || [];
  return (
    <section className="my-12" aria-labelledby="realisations-title">
      <h2 id="realisations-title" className="text-xl font-semibold mb-4">Exemples de réalisations en {prestation}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {exemples.map((ex, idx) => (
          <div key={idx} className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-medium mb-2">{ex.titre}</h3>
            <p className="text-gray-600 dark:text-gray-300">{ex.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RealisationsSection; 