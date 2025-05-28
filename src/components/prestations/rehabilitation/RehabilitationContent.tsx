import React from 'react';
import ProcessSection from './sections/ProcessSection';
import SkillsGrid from './sections/SkillsGrid';
import RealizationsGrid from './sections/RealizationsGrid';
import CTASection from './sections/CTASection';

const RehabilitationContent = () => (
  <main className="flex-1">
    <section className="mb-10">
      <h2 className="text-3xl font-bold mb-4">Réhabilitation</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Redonnez vie à votre patrimoine bâti grâce à une réhabilitation sur mesure, respectueuse de l'histoire et des normes actuelles. Notre équipe vous accompagne de l'étude patrimoniale à la livraison, pour des projets valorisés et durables.</p>
      <div className="mb-12">
        <img
          src="/images/prestations/PROGINEER-3-.png"
          alt="Réhabilitation de bâtiment par Progineer en région PACA"
          className="w-full h-auto rounded-xl mb-4"
        />
        <p className="text-sm text-low-contrast text-center">Réhabilitation d'immeuble ancien à Marseille</p>
      </div>
    </section>
    <ProcessSection />
    <SkillsGrid />
    <RealizationsGrid />
    <CTASection />
  </main>
);

export default RehabilitationContent; 