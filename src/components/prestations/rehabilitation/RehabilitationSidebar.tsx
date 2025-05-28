import React from 'react';

const RehabilitationSidebar = () => (
  <aside className="flex flex-col gap-6">
    <div className="sticky top-24 bg-stone-50 rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Pourquoi nous choisir ?</h2>
      <ul className="space-y-4">
        <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Expertise réhabilitation</h3><p className="text-sm text-gray-600 dark:text-gray-300">Maîtrise des contraintes techniques et patrimoniales, valorisation du bâti existant.</p></div></li>
        <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Accompagnement global</h3><p className="text-sm text-gray-600 dark:text-gray-300">De l'étude de faisabilité à la réception des travaux, suivi personnalisé.</p></div></li>
        <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Respect du patrimoine</h3><p className="text-sm text-gray-600 dark:text-gray-300">Solutions sur mesure pour préserver et mettre en valeur l'existant.</p></div></li>
      </ul>
      <div className="mt-8 space-y-4">
        <a href="/estimation" className="relative inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-khaki-600 text-khaki-50 shadow hover:bg-khaki-700 h-10 text-sm px-4 w-full justify-center">Estimer mon projet</a>
        <a href="/contact" className="relative inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 text-sm px-4 w-full justify-center">Prendre rendez-vous</a>
      </div>
    </div>
    <div className="bg-card p-6 rounded-xl shadow-sm border border-border mt-6">
      <h2 className="text-2xl font-semibold mb-6">Nos services réhabilitation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
          <h4 className="font-medium text-lg mb-2">Diagnostic technique</h4>
          <p className="text-gray-600 dark:text-gray-300">Analyse structurelle et patrimoniale du bâti existant.</p>
        </div>
        <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
          <h4 className="font-medium text-lg mb-2">Valorisation patrimoniale</h4>
          <p className="text-gray-600 dark:text-gray-300">Préservation et mise en valeur des éléments historiques.</p>
        </div>
        <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
          <h4 className="font-medium text-lg mb-2">Mise aux normes</h4>
          <p className="text-gray-600 dark:text-gray-300">Sécurité, accessibilité, conformité réglementaire.</p>
        </div>
        <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
          <h4 className="font-medium text-lg mb-2">Rénovation énergétique</h4>
          <p className="text-gray-600 dark:text-gray-300">Amélioration des performances thermiques et acoustiques.</p>
        </div>
      </div>
    </div>
  </aside>
);

export default RehabilitationSidebar; 