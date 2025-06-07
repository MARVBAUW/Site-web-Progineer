import React from 'react';
import SharedProcessSection from '@/components/common/SharedProcessSection';
import SkillsGrid from './sections/SkillsGrid';
import RealizationsGrid from './sections/RealizationsGrid';
import CTASection from './sections/CTASection';

const petitCollectifProcessSteps = [
  {
    title: "Étude de faisabilité et conception préliminaire",
    description: "Analyse du terrain, des contraintes réglementaires et élaboration des premières esquisses pour définir le potentiel du projet."
  },
  {
    title: "Conception architecturale et technique détaillée",
    description: "Réalisation des plans détaillés, choix des matériaux, et intégration des solutions techniques pour optimiser la performance et les coûts."
  },
  {
    title: "Montage du dossier de permis de construire",
    description: "Constitution et dépôt du dossier de permis de construire, incluant toutes les pièces graphiques et administratives requises."
  },
  {
    title: "Consultation des entreprises et suivi de chantier",
    description: "Sélection des entreprises, coordination des travaux, et suivi rigoureux du chantier jusqu'à la livraison du petit collectif."
  }
];

const PetitCollectifContent = () => {
  return (
    <>
      <div id="overview">
        <h1 className="text-3xl font-semibold mb-6">Concevez votre petit collectif résidentiel</h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Progineer accompagne promoteurs et investisseurs dans la réalisation de petits immeubles résidentiels à taille humaine en région PACA. Nous intervenons de l'optimisation foncière à la livraison, pour des projets performants, durables et parfaitement intégrés dans leur environnement urbain.
        </p>
        <div className="mb-12">
          <img 
            src="/images/prestations/PGR_14_resultat.webp" 
            alt="Petit collectif résidentiel réalisé par Progineer en région PACA"
            className="w-full h-auto rounded-xl mb-4"
          />
          <p className="text-sm text-low-contrast text-center">Immeuble résidentiel à taille humaine à Marseille</p>
        </div>
      </div>

      <div id="expertise" className="mb-8">
        {/* This h2 will be removed as the main title is now h1, and sections will start with h2 */}
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
        <h2 className="text-2xl font-medium mb-4">Notre processus de promotion immobilière</h2>
        <SharedProcessSection pageTitle="Notre processus pour les petits collectifs" steps={petitCollectifProcessSteps} />
      </div>

      <div id="competences">
        <h2 className="text-2xl font-medium mb-4">Nos compétences en petit collectif</h2>
        <SkillsGrid />
      </div>

      <div id="realisations">
        <h2 className="text-2xl font-medium mb-4">Exemples de réalisations</h2>
        <RealizationsGrid />
      </div>

      <CTASection />

      {/* Sections pour les villes avec style de cartes */}
      <div id="villes-desservies-collectif" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Nos zones d'intervention pour les petits collectifs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Carte Marseille */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_33_resultat.webp" alt="Petit collectif à Marseille" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-sky-600 dark:text-sky-400"><a href="/petit-collectif/marseille" className="hover:underline">Petit collectif à Marseille</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Développement de <strong>petits immeubles résidentiels à Marseille</strong>, optimisant le foncier disponible et s'intégrant harmonieusement au tissu urbain.
            </p>
            <a href="/contact?service=petit-collectif-marseille" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Collectif Marseille</a>
          </div>

          {/* Carte Aix-en-Provence */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_34_resultat.webp" alt="Petit collectif à Aix-en-Provence" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-amber-600 dark:text-amber-400"><a href="/petit-collectif/aix-en-provence" className="hover:underline">Petit collectif à Aix-en-Provence</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Conception de <strong>petits collectifs à Aix-en-Provence</strong>, alliant respect du patrimoine architectural et exigences de confort moderne pour les résidents.
            </p>
            <a href="/contact?service=petit-collectif-aix" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Collectif Aix</a>
          </div>

          {/* Carte Toulon */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_35_resultat.webp" alt="Petit collectif à Toulon" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-red-600 dark:text-red-400"><a href="/petit-collectif/toulon" className="hover:underline">Petit collectif à Toulon</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Réalisation de <strong>projets immobiliers collectifs à Toulon</strong>, adaptés aux besoins du marché local et aux spécificités du littoral varois.
            </p>
            <a href="/contact?service=petit-collectif-toulon" className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Collectif Toulon</a>
          </div>

          {/* Carte Nice */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_36_resultat.webp" alt="Petit collectif à Nice" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400"><a href="/petit-collectif/nice" className="hover:underline">Petit collectif à Nice</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Construction de <strong>petits ensembles résidentiels à Nice</strong>, conçus pour s'intégrer à l'architecture niçoise et offrir un cadre de vie de qualité.
            </p>
            <a href="/contact?service=petit-collectif-nice" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Collectif Nice</a>
          </div>

          {/* Carte Cannes */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_37_resultat.webp" alt="Petit collectif à Cannes" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-purple-600 dark:text-purple-400"><a href="/petit-collectif/cannes" className="hover:underline">Petit collectif à Cannes</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Accompagnement de promoteurs pour des <strong>petits collectifs haut de gamme à Cannes</strong>, alliant élégance, fonctionnalité et respect des normes.
            </p>
            <a href="/contact?service=petit-collectif-cannes" className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Collectif Cannes</a>
          </div>

          {/* Carte Petit Collectif PACA */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_38_resultat.webp" alt="Petit collectif en PACA" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-green-600 dark:text-green-400"><a href="/petit-collectif/paca" className="hover:underline">Petits collectifs en PACA</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Notre expertise en <strong>promotion de petits collectifs en PACA</strong> vous assure des projets rentables, durables et attractifs pour les futurs résidents.
            </p>
            <a href="/contact?service=petit-collectif-paca" className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Collectif PACA</a>
          </div>
        </div>
      </div>

      {/* Section Solutions Techniques avec style de cartes */}
      <div id="solutions-techniques-collectif" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Solutions pour Promoteurs et Investisseurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carte Conception Architecturale */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_39_resultat.webp" alt="Conception architecturale de petits collectifs" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-orange-600 dark:text-orange-400"><a href="/petit-collectif/conception-architecturale" className="hover:underline">Conception Architecturale Optimisée</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Élaboration de <strong>plans architecturaux intelligents</strong>, maximisant la surface habitable, la luminosité et l'intégration paysagère de vos petits collectifs.
            </p>
            <a href="/contact?service=conception-collectif" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Conception</a>
          </div>

          {/* Carte Suivi de Chantier Rigoureux */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_40_resultat.webp" alt="Suivi de chantier pour petits collectifs" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-teal-600 dark:text-teal-400"><a href="/petit-collectif/suivi-chantier" className="hover:underline">Suivi de Chantier et Maîtrise d'Œuvre</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Pilotage complet des travaux</strong>, de la sélection des entreprises à la réception, garantissant qualité, respect des délais et maîtrise des coûts.
            </p>
            <a href="/contact?service=suivi-chantier-collectif" className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Suivi Chantier</a>
          </div>

          {/* Carte Normes Environnementales et Gestion de Copropriété */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_41_resultat.webp" alt="Normes environnementales et gestion de copropriété pour petits collectifs" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-lime-600 dark:text-lime-400"><a href="/petit-collectif/normes-copropriete" className="hover:underline">Normes environnementales et gestion de copropriété</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nous intégrons les dernières <strong>normes environnementales (RE2020, HQE…)</strong> et accompagnons la <strong>gestion de copropriété</strong> pour garantir la pérennité de votre investissement.
            </p>
            <a href="/contact?service=normes-copropriete-collectif" className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Infos Normes & Copro</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetitCollectifContent;