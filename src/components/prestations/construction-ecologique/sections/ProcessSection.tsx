import React from 'react';

const ProcessSection = () => (
  <div className="grid grid-cols-1 gap-6 mb-10">
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-khaki-100 text-khaki-700 flex items-center justify-center font-semibold mr-4">1</span>
        <div>
          <h4 className="text-xl font-medium mb-2">Conception bioclimatique</h4>
          <p className="text-gray-600 dark:text-gray-300">Optimisation de l'orientation, de la lumière naturelle et de la ventilation.</p>
        </div>
      </div>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-khaki-100 text-khaki-700 flex items-center justify-center font-semibold mr-4">2</span>
        <div>
          <h4 className="text-xl font-medium mb-2">Choix des matériaux</h4>
          <p className="text-gray-600 dark:text-gray-300">Sélection de matériaux biosourcés, durables et adaptés au climat méditerranéen.</p>
        </div>
      </div>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-khaki-100 text-khaki-700 flex items-center justify-center font-semibold mr-4">3</span>
        <div>
          <h4 className="text-xl font-medium mb-2">Réalisation et suivi de chantier</h4>
          <p className="text-gray-600 dark:text-gray-300">Mise en œuvre des solutions écologiques, suivi qualité et respect des normes.</p>
        </div>
      </div>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-khaki-100 text-khaki-700 flex items-center justify-center font-semibold mr-4">4</span>
        <div>
          <h4 className="text-xl font-medium mb-2">Livraison et accompagnement</h4>
          <p className="text-gray-600 dark:text-gray-300">Remise du projet, conseils d'usage et accompagnement post-livraison.</p>
        </div>
      </div>
    </div>
  </div>
);

export default ProcessSection; 