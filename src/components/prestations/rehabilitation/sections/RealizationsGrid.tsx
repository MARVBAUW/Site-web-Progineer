import React from 'react';

const RealizationsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <h4 className="text-xl font-medium mb-3">Réhabilitation d'immeuble haussmannien</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Transformation complète d'un immeuble ancien en logements modernes à Marseille.</p>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <h4 className="text-xl font-medium mb-3">Valorisation patrimoniale à Aix</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Rénovation d'un hôtel particulier avec préservation des éléments historiques.</p>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <h4 className="text-xl font-medium mb-3">Reconversion de bâtiment industriel</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Transformation d'une ancienne usine en lofts et espaces de coworking à Toulon.</p>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <h4 className="text-xl font-medium mb-3">Rénovation lourde à Nice</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Réhabilitation d'un immeuble ancien avec amélioration énergétique et accessibilité.</p>
    </div>
  </div>
);

export default RealizationsGrid; 