import React from 'react';

const RealizationsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <h4 className="text-xl font-medium mb-3">Permis de construire maison individuelle</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Dossier complet et obtention du permis pour une maison neuve à Marseille.</p>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <h4 className="text-xl font-medium mb-3">Déclaration préalable d’extension</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Gestion administrative pour l’agrandissement d’une villa à Aix-en-Provence.</p>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <h4 className="text-xl font-medium mb-3">Changement de destination</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Transformation d’un local commercial en logement à Toulon.</p>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <h4 className="text-xl font-medium mb-3">Gestion de recours</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Accompagnement d’un client lors d’un recours administratif à Nice.</p>
    </div>
  </div>
);

export default RealizationsGrid; 