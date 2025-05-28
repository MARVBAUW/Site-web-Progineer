import React from 'react';

const RealizationsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <h4 className="text-xl font-medium mb-3">Maison bois à Marseille</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Construction d'une maison à ossature bois, haute performance énergétique.</p>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <h4 className="text-xl font-medium mb-3">Villa bioclimatique à Aix</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Habitat conçu pour maximiser la lumière naturelle et limiter les besoins en chauffage.</p>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <h4 className="text-xl font-medium mb-3">Extension écologique à Toulon</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Agrandissement d'une maison avec matériaux biosourcés et isolation renforcée.</p>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <h4 className="text-xl font-medium mb-3">Bâtiment passif à Nice</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Réalisation d'un immeuble collectif répondant aux standards passifs et RE2020.</p>
    </div>
  </div>
);

export default RealizationsGrid; 