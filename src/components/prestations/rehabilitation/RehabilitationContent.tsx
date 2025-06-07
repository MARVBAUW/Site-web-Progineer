import React from 'react';
import SharedProcessSection from '@/components/common/SharedProcessSection';
import SkillsGrid from './sections/SkillsGrid';
import RealizationsGrid from './sections/RealizationsGrid';
import CTASection from './sections/CTASection';

const rehabilitationProcessSteps = [
  {
    title: "Diagnostic complet du bâtiment existant",
    description: "Analyse structurelle, thermique, et patrimoniale pour identifier les pathologies, les potentiels et les contraintes du bâti ancien."
  },
  {
    title: "Conception du projet de réhabilitation",
    description: "Élaboration de solutions techniques et architecturales respectueuses du caractère du bâtiment, tout en intégrant les normes actuelles et vos besoins."
  },
  {
    title: "Gestion des démarches administratives spécifiques",
    description: "Accompagnement pour l'obtention des autorisations nécessaires (permis de construire, déclaration préalable, subventions éventuelles)."
  },
  {
    title: "Suivi rigoureux des travaux de réhabilitation",
    description: "Coordination des artisans spécialisés, contrôle qualité et respect des techniques de restauration pour préserver l'authenticité du lieu."
  }
];

const RehabilitationContent = () => (
  <main className="flex-1">
    <section className="mb-10">
      <h1 className="text-3xl font-bold mb-4">Réhabilitation</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Redonnez vie à votre patrimoine bâti grâce à une réhabilitation sur mesure, respectueuse de l'histoire et des normes actuelles. Notre équipe vous accompagne de l'étude patrimoniale à la livraison, pour des projets valorisés et durables.</p>
      <div className="mb-12">
        <img
          src="/images/prestations/PGR_6_resultat.webp"
          alt="Réhabilitation de bâtiment par Progineer en région PACA"
          className="w-full h-auto rounded-xl mb-4"
        />
        <p className="text-sm text-low-contrast text-center">Réhabilitation d'immeuble ancien à Marseille</p>
      </div>
    </section>
    <SharedProcessSection pageTitle="Notre processus de réhabilitation" steps={rehabilitationProcessSteps} />
    <SkillsGrid />
    <RealizationsGrid />
    <CTASection />

      {/* Sections pour les villes avec style de cartes */}
      <div id="villes-desservies-rehabilitation" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Nos zones d'intervention en réhabilitation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Carte Marseille */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_41_resultat.webp" alt="Réhabilitation à Marseille" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-sky-600 dark:text-sky-400"><a href="/rehabilitation/marseille" className="hover:underline">Réhabilitation à Marseille</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Spécialistes de la <strong>réhabilitation du patrimoine marseillais</strong>, nous intervenons sur des immeubles anciens, appartements de caractère et bastides.
            </p>
            <a href="/contact?service=rehabilitation-marseille" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Réhab Marseille</a>
          </div>

          {/* Carte Aix-en-Provence */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_42_resultat.webp" alt="Réhabilitation à Aix-en-Provence" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-amber-600 dark:text-amber-400"><a href="/rehabilitation/aix-en-provence" className="hover:underline">Réhabilitation à Aix-en-Provence</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nous menons des projets de <strong>réhabilitation à Aix-en-Provence</strong>, en préservant le cachet des hôtels particuliers et des demeures provençales.
            </p>
            <a href="/contact?service=rehabilitation-aix" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Réhab Aix</a>
          </div>

          {/* Carte Toulon */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_43_resultat.webp" alt="Réhabilitation à Toulon" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-red-600 dark:text-red-400"><a href="/rehabilitation/toulon" className="hover:underline">Réhabilitation à Toulon</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Valorisation du <strong>patrimoine bâti de Toulon</strong> par des réhabilitations soignées, des façades haussmanniennes aux villas du littoral.
            </p>
            <a href="/contact?service=rehabilitation-toulon" className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Réhab Toulon</a>
          </div>

          {/* Carte Nice */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_44_resultat.webp" alt="Réhabilitation à Nice" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400"><a href="/rehabilitation/nice" className="hover:underline">Réhabilitation à Nice</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Notre expertise en <strong>réhabilitation à Nice</strong> s'étend des palais Belle Époque aux immeubles du Vieux Nice, en respectant leur identité.
            </p>
            <a href="/contact?service=rehabilitation-nice" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Réhab Nice</a>
          </div>

          {/* Carte Cannes */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_45_resultat.webp" alt="Réhabilitation à Cannes" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-purple-600 dark:text-purple-400"><a href="/rehabilitation/cannes" className="hover:underline">Réhabilitation à Cannes</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Réhabilitation de <strong>villas de prestige et d'appartements de luxe à Cannes</strong>, alliant conservation du patrimoine et prestations haut de gamme.
            </p>
            <a href="/contact?service=rehabilitation-cannes" className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Réhab Cannes</a>
          </div>

          {/* Carte Réhabilitation Patrimoine PACA */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_46_resultat.webp" alt="Réhabilitation patrimoine en PACA" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-green-600 dark:text-green-400"><a href="/rehabilitation/paca" className="hover:underline">Réhabilitation Patrimoine en PACA</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nous sommes experts en <strong>réhabilitation du patrimoine architectural en PACA</strong>, des mas provençaux aux châteaux et monuments historiques.
            </p>
            <a href="/contact?service=rehabilitation-paca" className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Réhab PACA</a>
          </div>
        </div>
      </div>

      {/* Section Solutions Techniques avec style de cartes */}
      <div id="solutions-techniques-rehabilitation" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Techniques de Réhabilitation du Patrimoine</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carte Restauration de Façades Anciennes */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_47_resultat.webp" alt="Restauration de façades anciennes" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-orange-600 dark:text-orange-400"><a href="/rehabilitation/restauration-facades" className="hover:underline">Restauration de Façades Anciennes</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Maîtrise des techniques de <strong>nettoyage, réparation et ravalement de façades en pierre</strong>, enduits traditionnels, et éléments décoratifs.
            </p>
            <a href="/contact?service=restauration-facades" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Façade</a>
          </div>

          {/* Carte Consolidation Structurelle */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_48_resultat.webp" alt="Consolidation structurelle de bâtiments anciens" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-teal-600 dark:text-teal-400"><a href="/rehabilitation/consolidation-structurelle" className="hover:underline">Consolidation Structurelle et Reprise en Sous-Œuvre</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Solutions de <strong>renforcement des structures anciennes</strong> (planchers, murs porteurs, fondations) pour assurer la pérennité du bâtiment.
            </p>
            <a href="/contact?service=consolidation-structurelle" className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Consolidation</a>
          </div>
        </div>
      </div>
  </main>
);

export default RehabilitationContent;