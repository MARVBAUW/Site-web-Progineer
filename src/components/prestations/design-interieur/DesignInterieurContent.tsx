import React from 'react';
import SharedProcessSection from '@/components/common/SharedProcessSection';
import SkillsGrid from './sections/SkillsGrid';
import RealizationsGrid from './sections/RealizationsGrid';
import CTASection from './sections/CTASection';

const designInterieurProcessSteps = [
  {
    title: "Écoute et analyse de vos besoins",
    description: "Nous commençons par une écoute attentive de vos attentes, de votre style de vie et de vos inspirations pour cerner l'ambiance que vous souhaitez créer."
  },
  {
    title: "Concept et planches d'ambiance",
    description: "Nous traduisons vos envies en un concept créatif, illustré par des planches d'ambiance qui regroupent couleurs, matières, mobilier et accessoires."
  },
  {
    title: "Plans et visualisations 3D",
    description: "Nous élaborons des plans d'aménagement détaillés et des visualisations 3D pour vous permettre de vous projeter concrètement dans votre futur intérieur."
  },
  {
    title: "Coordination et réalisation des travaux",
    description: "Nous assurons la coordination des artisans et le suivi du chantier pour garantir une réalisation fidèle au projet et dans le respect des délais."
  }
];

const DesignInterieurContent = () => {
  return (
    <>
      <div id="overview">
        <h1 className="text-3xl font-semibold mb-6">Transformez votre intérieur</h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Chez Progineer, notre équipe d'<strong>architectes d'intérieur</strong> crée des espaces qui vous ressemblent. Nous concevons des intérieurs harmonieux, fonctionnels et esthétiques qui répondent à vos besoins spécifiques et reflètent votre personnalité. Chaque projet est unique et bénéficie d'une approche personnalisée.
        </p>

        <div className="mb-12">
          <img 
            src="/images/prestations/PGR_21_resultat.webp" 
            alt="Exemple de design d'intérieur réalisé par Progineer en PACA"
            className="w-full h-auto rounded-xl mb-4"
          />
          <p className="text-sm text-low-contrast text-center">Aménagement intérieur contemporain à Marseille</p>
        </div>
      </div>

      <div id="architecte-interieur" className="mb-8">
        <h2 className="text-3xl font-semibold mb-6">Architecte d'intérieur en PACA</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Notre équipe d'<strong>architectes d'intérieur</strong> transforme vos espaces de vie en lieux 
          uniques et fonctionnels. Spécialisés dans l'aménagement d'intérieur en région PACA, nous 
          créons des espaces qui allient esthétique contemporaine et art de vivre méditerranéen.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Conception architecturale intérieure</h4>
            <p className="text-gray-600 dark:text-gray-300">Plans d'aménagement, circulation des espaces et optimisation des volumes.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Design et décoration</h4>
            <p className="text-gray-600 dark:text-gray-300">Choix des matériaux, couleurs et mobilier pour créer l'ambiance souhaitée.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Coordination des travaux</h4>
            <p className="text-gray-600 dark:text-gray-300">Suivi de la réalisation et coordination avec les artisans spécialisés.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Accompagnement personnalisé</h4>
            <p className="text-gray-600 dark:text-gray-300">Conseil en ameublement et décoration pour finaliser votre projet.</p>
          </div>
        </div>
      </div>

      <div id="services">
        <h2 className="text-2xl font-medium mb-4">Notre processus créatif</h2>
        <SharedProcessSection pageTitle="Notre processus de design d'intérieur" steps={designInterieurProcessSteps} />
      </div>

      <div id="amenagement">
        <h2 className="text-2xl font-medium mb-4">Nos compétences en design</h2>
        <SkillsGrid />
      </div>

      <div id="realisations">
        <h2 className="text-2xl font-medium mb-4">Exemples de réalisations</h2>
        <RealizationsGrid />
      </div>

      <CTASection />

      {/* Sections pour les villes avec style de cartes */}
      <div id="villes-desservies" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Nos zones d'intervention en design d'intérieur</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Carte Marseille */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_1_resultat.webp" alt="Design d'intérieur à Marseille" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-sky-600 dark:text-sky-400"><a href="/design-interieur/marseille" className="hover:underline">Design d'intérieur à Marseille</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Passionnés par le <strong>design d'intérieur à Marseille</strong>, nous transformons appartements haussmanniens, lofts industriels et villas modernes en espaces de vie uniques et personnalisés.
            </p>
            <a href="/contact?service=design-interieur-marseille" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Design Marseille</a>
          </div>

          {/* Carte Aix-en-Provence */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_2_resultat.webp" alt="Design d'intérieur à Aix-en-Provence" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-amber-600 dark:text-amber-400"><a href="/design-interieur/aix-en-provence" className="hover:underline">Design d'intérieur à Aix-en-Provence</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              À Aix-en-Provence, notre expertise en <strong>design d'intérieur</strong> sublime appartements du centre historique, bastides de charme et maisons contemporaines, en alliant élégance et fonctionnalité.
            </p>
            <a href="/contact?service=design-interieur-aix" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Design Aix</a>
          </div>

          {/* Carte Toulon */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_3_resultat.webp" alt="Design d'intérieur à Toulon" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-red-600 dark:text-red-400"><a href="/design-interieur/toulon" className="hover:underline">Design d'intérieur à Toulon</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nous créons des <strong>intérieurs inspirants à Toulon</strong>, en optimisant les espaces et en jouant avec la lumière naturelle pour des appartements avec vue mer ou des maisons de ville.
            </p>
            <a href="/contact?service=design-interieur-toulon" className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Design Toulon</a>
          </div>

          {/* Carte Nice */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_4_resultat.webp" alt="Design d'intérieur à Nice" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400"><a href="/design-interieur/nice" className="hover:underline">Design d'intérieur à Nice</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Notre équipe de <strong>designers d'intérieur à Nice</strong> imagine des ambiances uniques pour vos appartements sur la Promenade des Anglais, vos villas sur les collines ou vos pied-à-terre dans le Vieux Nice.
            </p>
            <a href="/contact?service=design-interieur-nice" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Design Nice</a>
          </div>

          {/* Carte Cannes */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_5_resultat.webp" alt="Design d'intérieur à Cannes" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-purple-600 dark:text-purple-400"><a href="/design-interieur/cannes" className="hover:underline">Design d'intérieur à Cannes</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              À Cannes, nous concevons des <strong>intérieurs de prestige</strong> pour appartements de luxe et villas d'exception, en mariant matériaux nobles, design contemporain et touches d'originalité.
            </p>
            <a href="/contact?service=design-interieur-cannes" className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Design Cannes</a>
          </div>

          {/* Carte Design d'intérieur PACA */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_6_resultat.webp" alt="Design d'intérieur PACA" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-green-600 dark:text-green-400"><a href="/design-interieur/paca" className="hover:underline">Design d'intérieur en PACA</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Spécialistes du <strong>design d'intérieur en PACA</strong>, nous créons des espaces de vie qui reflètent votre style et optimisent votre bien-être, de la conception à la réalisation.
            </p>
            <a href="/contact?service=design-interieur-paca" className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Design PACA</a>
          </div>
        </div>
      </div>

      {/* Section Solutions Techniques avec style de cartes */}
      <div id="solutions-techniques" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Solutions Créatives pour Votre Intérieur</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carte Optimisation d'Espace */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_7_resultat.webp" alt="Optimisation d'espace en design d'intérieur" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-orange-600 dark:text-orange-400"><a href="/design-interieur/optimisation-espace" className="hover:underline">Optimisation d'Espace et Agencement</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nous excellons dans l'<strong>optimisation des petits espaces</strong> et l'agencement intelligent pour maximiser la fonctionnalité et le confort de chaque pièce, du studio à la grande maison.
            </p>
            <a href="/contact?service=optimisation-espace" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Optimisation Espace</a>
          </div>

          {/* Carte Mobilier sur Mesure et Décoration */} 
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_8_resultat.webp" alt="Mobilier sur mesure en design d'intérieur" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-teal-600 dark:text-teal-400"><a href="/design-interieur/mobilier-sur-mesure" className="hover:underline">Mobilier sur Mesure et Décoration Personnalisée</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nous concevons du <strong>mobilier sur mesure</strong> (dressings, bibliothèques, cuisines) et sélectionnons des pièces de décoration uniques pour créer un intérieur qui vous est propre.
            </p>
            <a href="/contact?service=mobilier-sur-mesure" className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Mobilier sur Mesure</a>
          </div>

          {/* Carte Intégration de solutions domotiques */} 
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_9_resultat.webp" alt="Intégration de solutions domotiques" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400"><a href="/design-interieur/domotique" className="hover:underline">Intégration de solutions domotiques</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nous intégrons les dernières innovations en matière de domotique pour rendre votre intérieur plus intelligent et connecté. Éclairage, chauffage, sécurité, multimédia : nous vous proposons des solutions adaptées à vos besoins pour un confort optimal.
            </p>
            <a href="/contact?service=domotique" className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Domotique</a>
          </div>

          {/* Carte Aménagement de lofts et espaces atypiques */} 
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_10_resultat.webp" alt="Aménagement de lofts et espaces atypiques" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-pink-600 dark:text-pink-400"><a href="/design-interieur/espaces-atypiques" className="hover:underline">Aménagement de lofts et espaces atypiques</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nous sommes spécialistes dans l'aménagement d'espaces atypiques comme les lofts, les mezzanines ou les combles. Notre approche créative nous permet de tirer le meilleur parti de ces volumes singuliers et de créer des espaces de vie originaux et fonctionnels.
            </p>
            <a href="/contact?service=espaces-atypiques" className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Espaces Atypiques</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignInterieurContent;
