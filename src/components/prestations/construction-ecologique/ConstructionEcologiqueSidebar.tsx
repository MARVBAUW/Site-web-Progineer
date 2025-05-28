import React from 'react';

const ConstructionEcologiqueSidebar = () => (
  <aside className="flex flex-col gap-6">
    <div className="sticky top-24 bg-stone-50 rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Pourquoi nous choisir ?</h2>
      <ul className="space-y-4">
        <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Expertise écologique</h3><p className="text-sm text-gray-600 dark:text-gray-300">Maîtrise des solutions biosourcées, conception bioclimatique, RE2020 et habitat passif.</p></div></li>
        <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Accompagnement global</h3><p className="text-sm text-gray-600 dark:text-gray-300">De la conception à la livraison, suivi personnalisé et conseils sur les aides écologiques.</p></div></li>
        <li className="flex items-start"><span className="text-khaki-600 mr-2 mt-1 text-lg">✓</span><div><h3 className="font-medium text-lg">Solutions sur mesure</h3><p className="text-sm text-gray-600 dark:text-gray-300">Adaptation au climat méditerranéen, choix des matériaux, performance et confort.</p></div></li>
      </ul>
      <div className="mt-8 space-y-4">
        <a href="/estimation" className="relative inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-khaki-600 text-khaki-50 shadow hover:bg-khaki-700 h-10 text-sm px-4 w-full justify-center">Estimer mon projet</a>
        <a href="/contact" className="relative inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 text-sm px-4 w-full justify-center">Prendre rendez-vous</a>
      </div>
    </div>
    <div className="bg-card p-6 rounded-xl shadow-sm border border-border mt-6">
      <h3 className="text-xl font-semibold mb-4">Nos services écologiques</h3>
      <ul className="space-y-2">
        <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Construction bois et ossature bois</span></li>
        <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Matériaux biosourcés et géosourcés</span></li>
        <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Conception bioclimatique et passive</span></li>
        <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Énergies renouvelables et gestion de l'eau</span></li>
        <li className="flex items-start"><span className="text-khaki-600 mr-2">•</span><span>Isolation naturelle et performante</span></li>
      </ul>
    </div>
  </aside>
);

export default ConstructionEcologiqueSidebar; 