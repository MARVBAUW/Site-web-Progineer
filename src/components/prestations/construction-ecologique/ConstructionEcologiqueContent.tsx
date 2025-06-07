import React from 'react';
import ProcessSection from './sections/ProcessSection';
import SkillsGrid from './sections/SkillsGrid';
import RealizationsGrid from './sections/RealizationsGrid';
import CTASection from './sections/CTASection';

const ConstructionEcologiqueContent = () => (
  <main className="flex-1">
    <section className="mb-10">
      <h1 className="text-3xl font-bold mb-4">Construction écologique</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Optez pour une construction respectueuse de l'environnement, performante et durable. Nous vous accompagnons à chaque étape, de la conception bioclimatique au choix des matériaux biosourcés, jusqu'à la livraison de votre projet écologique.</p>
      <div className="mb-12">
        <img
          src="/images/prestations/PGR_19_resultat.webp"
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
      {/* Sections pour les villes avec style de cartes */}
      <div id="villes-desservies" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Nos zones d'intervention en construction écologique</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Carte Marseille */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_1_resultat.webp" alt="Construction écologique à Marseille" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-sky-600 dark:text-sky-400"><a href="/construction-ecologique/marseille" className="hover:underline">Construction écologique à Marseille</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Spécialistes de la <strong>construction écologique à Marseille</strong>, nous concevons des maisons et bâtiments respectueux de l'environnement, adaptés au contexte urbain et périurbain marseillais.
            </p>
            <a href="/contact?service=construction-ecologique-marseille" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Construction Écologique Marseille</a>
          </div>

          {/* Carte Aix-en-Provence */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_2_resultat.webp" alt="Construction écologique à Aix-en-Provence" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-amber-600 dark:text-amber-400"><a href="/construction-ecologique/aix-en-provence" className="hover:underline">Construction écologique à Aix-en-Provence</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              À Aix-en-Provence, nous réalisons des <strong>constructions écologiques</strong> qui s'intègrent harmonieusement dans le paysage provençal, en utilisant des matériaux durables et des techniques innovantes.
            </p>
            <a href="/contact?service=construction-ecologique-aix" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Construction Écologique Aix</a>
          </div>

          {/* Carte Toulon */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_3_resultat.webp" alt="Construction écologique à Toulon" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-red-600 dark:text-red-400"><a href="/construction-ecologique/toulon" className="hover:underline">Construction écologique à Toulon</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nous accompagnons vos projets de <strong>construction écologique à Toulon</strong>, en mettant l'accent sur la performance énergétique et le respect de l'environnement littoral et urbain.
            </p>
            <a href="/contact?service=construction-ecologique-toulon" className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Construction Écologique Toulon</a>
          </div>

          {/* Carte Nice */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_4_resultat.webp" alt="Construction écologique à Nice" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400"><a href="/construction-ecologique/nice" className="hover:underline">Construction écologique à Nice</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Notre équipe intervient pour tous vos projets de <strong>construction écologique à Nice</strong>, en proposant des solutions architecturales durables et économes en énergie.
            </p>
            <a href="/contact?service=construction-ecologique-nice" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Construction Écologique Nice</a>
          </div>

          {/* Carte Cannes */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_5_resultat.webp" alt="Construction écologique à Cannes" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-purple-600 dark:text-purple-400"><a href="/construction-ecologique/cannes" className="hover:underline">Construction écologique à Cannes</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              À Cannes, nous mettons notre expertise au service de votre <strong>projet de construction écologique</strong>, en alliant design contemporain et respect des normes environnementales les plus strictes.
            </p>
            <a href="/contact?service=construction-ecologique-cannes" className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Construction Écologique Cannes</a>
          </div>

          {/* Carte Construction écologique PACA */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_6_resultat.webp" alt="Construction écologique PACA" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-green-600 dark:text-green-400"><a href="/construction-ecologique/paca" className="hover:underline">Construction écologique en PACA</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Spécialistes de la <strong>construction écologique en PACA</strong>, nous vous aidons à bâtir un avenir plus durable avec des maisons saines, performantes et économes en énergie.
            </p>
            <a href="/contact?service=construction-ecologique-paca" className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Construction Écologique PACA</a>
          </div>
        </div>
      </div>

      {/* Section Solutions Techniques avec style de cartes */}
      <div id="solutions-techniques" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Solutions Techniques pour Votre Construction Écologique</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carte Isolation Thermique */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_7_resultat.webp" alt="Isolation biosourcée en construction écologique" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-orange-600 dark:text-orange-400"><a href="/construction-ecologique/isolation-biosourcee" className="hover:underline">Isolation Biosourcée et Performante</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              L'<strong>isolation thermique</strong> est clé en construction écologique. Nous utilisons des matériaux biosourcés (fibre de bois, ouate de cellulose, chanvre) pour une performance optimale et un faible impact environnemental.
            </p>
            <a href="/contact?service=isolation-biosourcee" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Isolation Biosourcée</a>
          </div>

          {/* Carte Énergies Renouvelables */} 
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_8_resultat.webp" alt="Énergies renouvelables en construction écologique" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-teal-600 dark:text-teal-400"><a href="/construction-ecologique/energies-renouvelables" className="hover:underline">Systèmes d'Énergies Renouvelables</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nous intégrons des <strong>systèmes d'énergies renouvelables</strong> : panneaux solaires photovoltaïques, chauffe-eau solaire, pompes à chaleur géothermiques ou aérothermiques pour une autonomie énergétique accrue.
            </p>
            <a href="/contact?service=energies-renouvelables" className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Énergies Renouvelables</a>
          </div>
        </div>
      </div>
  </main>
);

export default ConstructionEcologiqueContent;