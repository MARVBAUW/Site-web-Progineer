import React from 'react';

const ProcessSection = () => (
  <div className="grid grid-cols-1 gap-6 mb-10">
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-khaki-100 text-khaki-700 flex items-center justify-center font-semibold mr-4">1</span>
        <div>
          <h4 className="text-xl font-medium mb-2">Analyse réglementaire</h4>
          <p className="text-gray-600 dark:text-gray-300">Étude du PLU, des servitudes et des contraintes administratives propres à votre projet.</p>
        </div>
      </div>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-khaki-100 text-khaki-700 flex items-center justify-center font-semibold mr-4">2</span>
        <div>
          <h4 className="text-xl font-medium mb-2">Constitution du dossier</h4>
          <p className="text-gray-600 dark:text-gray-300">Préparation des pièces administratives, plans, notices et formulaires nécessaires.</p>
        </div>
      </div>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-khaki-100 text-khaki-700 flex items-center justify-center font-semibold mr-4">3</span>
        <div>
          <h4 className="text-xl font-medium mb-2">Dépôt et suivi</h4>
          <p className="text-gray-600 dark:text-gray-300">Dépôt du dossier en mairie, suivi de l'instruction, gestion des demandes complémentaires.</p>
        </div>
      </div>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start">
        <span className="flex-shrink-0 w-10 h-10 rounded-full bg-khaki-100 text-khaki-700 flex items-center justify-center font-semibold mr-4">4</span>
        <div>
          <h4 className="text-xl font-medium mb-2">Obtention de l'autorisation</h4>
          <p className="text-gray-600 dark:text-gray-300">Accompagnement jusqu'à l'obtention du permis ou de l'accord administratif final.</p>
        </div>
      </div>
    </div>
  </div>
);

export default ProcessSection; 