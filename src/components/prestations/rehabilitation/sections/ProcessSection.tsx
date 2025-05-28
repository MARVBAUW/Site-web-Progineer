import React from 'react';

const ProcessSection = () => (
  <div className="grid grid-cols-1 gap-6 mb-10">
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-khaki-100 text-khaki-700 flex items-center justify-center font-semibold mr-4">1</span>
        <div>
          <h4 className="text-xl font-medium mb-2">Diagnostic et étude patrimoniale</h4>
          <p className="text-gray-600 dark:text-gray-300">Analyse de l'existant, identification des contraintes et potentiel patrimonial.</p>
        </div>
      </div>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-khaki-100 text-khaki-700 flex items-center justify-center font-semibold mr-4">2</span>
        <div>
          <h4 className="text-xl font-medium mb-2">Conception et valorisation</h4>
          <p className="text-gray-600 dark:text-gray-300">Projet sur mesure, valorisation des éléments architecturaux, adaptation aux usages contemporains.</p>
        </div>
      </div>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-khaki-100 text-khaki-700 flex items-center justify-center font-semibold mr-4">3</span>
        <div>
          <h4 className="text-xl font-medium mb-2">Mise aux normes et autorisations</h4>
          <p className="text-gray-600 dark:text-gray-300">Respect des réglementations, obtention des autorisations nécessaires.</p>
        </div>
      </div>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-khaki-100 text-khaki-700 flex items-center justify-center font-semibold mr-4">4</span>
        <div>
          <h4 className="text-xl font-medium mb-2">Suivi de chantier et livraison</h4>
          <p className="text-gray-600 dark:text-gray-300">Coordination des travaux, contrôle qualité, livraison du projet réhabilité.</p>
        </div>
      </div>
    </div>
  </div>
);

export default ProcessSection; 