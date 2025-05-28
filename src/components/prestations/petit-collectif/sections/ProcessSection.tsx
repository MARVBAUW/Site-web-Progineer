import React from 'react';

const ProcessSection = () => (
  <div className="grid grid-cols-1 gap-6 mb-10">
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-khaki-100 text-khaki-700 flex items-center justify-center font-semibold mr-4">1</span>
        <div>
          <h4 className="text-xl font-medium mb-2">Étude de faisabilité</h4>
          <p className="text-gray-600 dark:text-gray-300">Analyse du terrain, du PLU et des contraintes pour optimiser le projet.</p>
        </div>
      </div>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-khaki-100 text-khaki-700 flex items-center justify-center font-semibold mr-4">2</span>
        <div>
          <h4 className="text-xl font-medium mb-2">Conception architecturale</h4>
          <p className="text-gray-600 dark:text-gray-300">Plans sur mesure, optimisation des espaces et intégration urbaine.</p>
        </div>
      </div>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-khaki-100 text-khaki-700 flex items-center justify-center font-semibold mr-4">3</span>
        <div>
          <h4 className="text-xl font-medium mb-2">Montage administratif</h4>
          <p className="text-gray-600 dark:text-gray-300">Dossiers, autorisations, gestion des démarches auprès des collectivités.</p>
        </div>
      </div>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-khaki-100 text-khaki-700 flex items-center justify-center font-semibold mr-4">4</span>
        <div>
          <h4 className="text-xl font-medium mb-2">Suivi et livraison</h4>
          <p className="text-gray-600 dark:text-gray-300">Coordination des travaux, contrôle qualité, livraison et gestion de copropriété.</p>
        </div>
      </div>
    </div>
  </div>
);

export default ProcessSection; 