import React from 'react';
import ProcessSection from './sections/ProcessSection';
import SkillsGrid from './sections/SkillsGrid';
import RealizationsGrid from './sections/RealizationsGrid';
import CTASection from './sections/CTASection';

const ConstructionEcologiqueContent = () => (
  <main className="flex-1">
    <section className="mb-10">
      <h2 className="text-3xl font-bold mb-4">Construction écologique</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Optez pour une construction respectueuse de l'environnement, performante et durable. Nous vous accompagnons à chaque étape, de la conception bioclimatique au choix des matériaux biosourcés, jusqu'à la livraison de votre projet écologique.</p>
      <div className="mb-12">
        <img
          src="/images/prestations/PROGINEER-4-.png"
          alt="Construction écologique réalisée par Progineer en région PACA"
          className="w-full h-auto rounded-xl mb-4"
        />
        <p className="text-sm text-low-contrast text-center">Maison bioclimatique à ossature bois à Marseille</p>
      </div>
    </section>
    <ProcessSection />
    <SkillsGrid />
    <RealizationsGrid />
    <CTASection />
  </main>
);

export default ConstructionEcologiqueContent; 