import React from 'react';
import ProcessSection from './sections/ProcessSection';
import SkillsGrid from './sections/SkillsGrid';
import RealizationsGrid from './sections/RealizationsGrid';
import CTASection from './sections/CTASection';

const PetitCollectifContent = () => {
  return (
    <>
      <div id="overview">
        <h2 className="text-3xl font-semibold mb-6">Concevez votre petit collectif résidentiel</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Progineer accompagne promoteurs et investisseurs dans la réalisation de petits immeubles résidentiels à taille humaine en région PACA. Nous intervenons de l'optimisation foncière à la livraison, pour des projets performants, durables et parfaitement intégrés dans leur environnement urbain.
        </p>
        <div className="mb-12">
          <img 
            src="/images/prestations/PROGINEER-2-.png" 
            alt="Petit collectif résidentiel réalisé par Progineer en région PACA"
            className="w-full h-auto rounded-xl mb-4"
          />
          <p className="text-sm text-low-contrast text-center">Immeuble résidentiel à taille humaine à Marseille</p>
        </div>
      </div>

      <div id="expertise" className="mb-8">
        <h2 className="text-3xl font-semibold mb-6">Expertise en promotion immobilière</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Notre équipe gère toutes les étapes de la promotion immobilière, de la conception à la livraison, en passant par le suivi administratif et la coordination de chantier.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Optimisation foncière</h4>
            <p className="text-gray-600 dark:text-gray-300">Étude de faisabilité, valorisation du foncier et montage d'opérations immobilières.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Conception sur mesure</h4>
            <p className="text-gray-600 dark:text-gray-300">Plans architecturaux adaptés, respect des normes et intégration urbaine.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Suivi de chantier</h4>
            <p className="text-gray-600 dark:text-gray-300">Coordination des entreprises, suivi qualité, respect des délais et du budget.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Accompagnement personnalisé</h4>
            <p className="text-gray-600 dark:text-gray-300">Conseil et assistance à chaque étape, gestion des relations avec les copropriétaires.</p>
          </div>
        </div>
      </div>

      <div id="processus">
        <h3 className="text-2xl font-medium mb-4">Notre processus de promotion immobilière</h3>
        <ProcessSection />
      </div>

      <div id="competences">
        <h3 className="text-2xl font-medium mb-4">Nos compétences en petit collectif</h3>
        <SkillsGrid />
      </div>

      <div id="realisations">
        <h3 className="text-2xl font-medium mb-4">Exemples de réalisations</h3>
        <RealizationsGrid />
      </div>

      <div id="marseille" className="mt-8">
        <h3 className="text-2xl font-medium mb-4">Petit collectif à Marseille</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Nous réalisons des petits collectifs résidentiels parfaitement intégrés dans le tissu urbain marseillais, en optimisant chaque parcelle de terrain.
        </p>
      </div>
      <div id="aix" className="mt-6">
        <h3 className="text-2xl font-medium mb-4">Petit collectif à Aix-en-Provence</h3>
        <p className="text-gray-600 dark:text-gray-300">
          À Aix-en-Provence, nous concevons des immeubles à taille humaine qui valorisent le patrimoine local tout en répondant aux besoins contemporains.
        </p>
      </div>
      <div id="toulon" className="mt-6">
        <h3 className="text-2xl font-medium mb-4">Petit collectif à Toulon</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Notre équipe intervient à Toulon pour des projets de petits collectifs adaptés à la demande locale et aux contraintes foncières.
        </p>
      </div>
      <div id="nice" className="mt-6">
        <h3 className="text-2xl font-medium mb-4">Petit collectif à Nice</h3>
        <p className="text-gray-600 dark:text-gray-300">
          À Nice, nous proposons des solutions innovantes pour la construction de petits immeubles résidentiels, en harmonie avec l'architecture niçoise.
        </p>
      </div>
      <div id="cannes" className="mt-6">
        <h3 className="text-2xl font-medium mb-4">Petit collectif à Cannes</h3>
        <p className="text-gray-600 dark:text-gray-300">
          À Cannes, nous accompagnons les promoteurs dans la réalisation de résidences élégantes et fonctionnelles, adaptées à la clientèle locale.
        </p>
      </div>

      <div id="normes" className="mt-8">
        <h3 className="text-2xl font-medium mb-4">Normes environnementales et gestion de copropriété</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Nous intégrons les dernières normes environnementales (RE2020, HQE…) et accompagnons la gestion de copropriété pour garantir la pérennité de votre investissement.
        </p>
      </div>

      <CTASection />
    </>
  );
};

export default PetitCollectifContent; 