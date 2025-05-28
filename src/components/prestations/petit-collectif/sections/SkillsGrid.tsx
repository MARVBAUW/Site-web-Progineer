import React from 'react';

const SkillsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Optimisation foncière</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Valorisation du terrain et montage d'opérations immobilières rentables.</p>
    </div>
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Conception sur mesure</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Plans adaptés, respect des normes et intégration dans le tissu urbain.</p>
    </div>
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Gestion administrative</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Maîtrise des démarches, autorisations et suivi des dossiers.</p>
    </div>
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Suivi de chantier</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Coordination des entreprises, respect des délais et du budget.</p>
    </div>
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Gestion de copropriété</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Accompagnement à la création et à la gestion de la copropriété.</p>
    </div>
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Respect des normes environnementales</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Intégration des exigences RE2020, HQE et solutions durables.</p>
    </div>
  </div>
);

export default SkillsGrid; 