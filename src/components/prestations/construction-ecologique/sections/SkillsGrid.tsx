import React from 'react';

const SkillsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Conception bioclimatique</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Optimisation de l'orientation, de la lumière et de la ventilation naturelle.</p>
    </div>
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Matériaux biosourcés</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Sélection de matériaux durables, locaux et à faible impact environnemental.</p>
    </div>
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Performance énergétique</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Respect des normes RE2020, conception passive, réduction des consommations.</p>
    </div>
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Gestion de projet</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Suivi de chantier, coordination des entreprises, respect des délais.</p>
    </div>
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Innovation environnementale</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Intégration de solutions innovantes pour un habitat sain et durable.</p>
    </div>
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Accompagnement global</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Conseil, assistance administrative et technique, accompagnement post-livraison.</p>
    </div>
  </div>
);

export default SkillsGrid; 