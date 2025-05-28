import React from 'react';

const PetitCollectifSidebar = () => (
  <aside className="flex flex-col gap-6">
    <div className="sticky top-24 bg-stone-50 rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Pourquoi nous choisir ?</h2>
      <ul className="space-y-4">
        <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Expertise petit collectif</h3><p className="text-sm text-gray-600 dark:text-gray-300">Connaissance des enjeux techniques et réglementaires propres aux petits immeubles résidentiels.</p></div></li>
        <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Optimisation foncière</h3><p className="text-sm text-gray-600 dark:text-gray-300">Valorisation du terrain, conception adaptée à la parcelle et au PLU.</p></div></li>
        <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Accompagnement global</h3><p className="text-sm text-gray-600 dark:text-gray-300">De la faisabilité à la livraison, suivi personnalisé à chaque étape.</p></div></li>
      </ul>
      <div className="mt-8 space-y-4">
        <a href="/estimation" className="relative inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-khaki-600 text-khaki-50 shadow hover:bg-khaki-700 h-10 text-sm px-4 w-full justify-center">Estimer mon projet</a>
        <a href="/contact" className="relative inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 text-sm px-4 w-full justify-center">Prendre rendez-vous</a>
      </div>
    </div>
    <div className="bg-card p-6 rounded-xl shadow-sm border border-border mt-6">
      <h2 className="text-2xl font-semibold mb-6">Nos services petit collectif</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
          <h4 className="font-medium text-lg mb-2">Conception architecturale</h4>
          <p className="text-gray-600 dark:text-gray-300">Plans sur mesure adaptés à la parcelle et au PLU.</p>
        </div>
        <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
          <h4 className="font-medium text-lg mb-2">Optimisation foncière</h4>
          <p className="text-gray-600 dark:text-gray-300">Valorisation du terrain et optimisation des surfaces.</p>
        </div>
        <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
          <h4 className="font-medium text-lg mb-2">Gestion administrative</h4>
          <p className="text-gray-600 dark:text-gray-300">Montage des dossiers, obtention des autorisations.</p>
        </div>
        <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
          <h4 className="font-medium text-lg mb-2">Suivi de chantier</h4>
          <p className="text-gray-600 dark:text-gray-300">Coordination des travaux et contrôle qualité.</p>
        </div>
      </div>
    </div>
  </aside>
);

export default PetitCollectifSidebar; 