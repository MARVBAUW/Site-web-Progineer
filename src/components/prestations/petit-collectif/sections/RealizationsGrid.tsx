import React from 'react';

const RealizationsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <h4 className="text-xl font-medium mb-3">Immeuble R+2 à Marseille</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Conception et réalisation d'un petit collectif de 8 logements avec optimisation foncière.</p>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <h4 className="text-xl font-medium mb-3">Résidence de standing à Aix</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Projet haut de gamme avec prestations soignées et gestion de copropriété.</p>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <h4 className="text-xl font-medium mb-3">Réhabilitation d'immeuble à Toulon</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Transformation d'un bâtiment ancien en 6 appartements modernes.</p>
    </div>
    <div className="bg-card p-6 rounded-lg shadow-sm border border-gray-100">
      <h4 className="text-xl font-medium mb-3">Résidence services à Nice</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Création d'un petit collectif adapté à des publics spécifiques (seniors, étudiants…)</p>
    </div>
  </div>
);

export default RealizationsGrid; 