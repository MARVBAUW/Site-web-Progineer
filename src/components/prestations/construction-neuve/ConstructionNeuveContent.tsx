import React from 'react';
import { ConstructionProcess } from '@/components/prestations/renovation/ConstructionProcess';

const ConstructionNeuveContent = () => {
  return (
    <>
      <div id="overview" className="mb-12 md:mb-16 p-4 md:p-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
        <h1 className="text-3xl font-semibold mb-6">Construction sur mesure de votre maison</h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Notre bureau d'études en <strong>maîtrise d'œuvre</strong> vous accompagne dans votre projet de construction de maison sur mesure en région PACA. De la conception des plans à la livraison des clés, nous prenons en charge toutes les étapes de votre projet pour vous offrir une maison qui vous ressemble, adaptée à vos besoins et à votre style de vie.
        </p>

        <div className="mb-12">
          <img 
            src="/images/prestations/PGR_27_resultat.webp" 
            alt="Maison individuelle contemporaine construite par Progineer constructeur de maison en PACA"
            className="w-full h-auto rounded-xl mb-4"
          />
          <p className="text-sm text-low-contrast text-center">Villa contemporaine réalisée à Marseille</p>
        </div>
      </div>

      <div id="constructeur-expertise" className="mt-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Constructeur de maison individuelle en PACA</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
          En tant que <strong>constructeur spécialisé en <a href="#maison-individuelle" className="text-khaki-600 hover:underline">maisons individuelles</a></strong>, Progineer maîtrise 
          toute la chaîne de construction : de la <a href="#services" className="text-khaki-600 hover:underline">conception architecturale</a> à la livraison clé en main. 
          Notre expertise de constructeur nous permet de garantir la qualité, les délais et les coûts 
          pour votre projet de construction en région PACA.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-khaki-700 dark:text-khaki-500">Constructeur local PACA</h3>
            <p className="text-gray-600 dark:text-gray-300">Implantation locale avec connaissance du terrain, des artisans et des contraintes régionales.</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-khaki-700 dark:text-khaki-500">Construction clé en main</h3>
            <p className="text-gray-600 dark:text-gray-300">Prise en charge complète de votre projet du terrain nu à la remise des clés.</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-khaki-700 dark:text-khaki-500">Garanties constructeur</h3>
            <p className="text-gray-600 dark:text-gray-300">Toutes les garanties légales : décennale, parfait achèvement, bon fonctionnement.</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-khaki-700 dark:text-khaki-500">Prix constructeur transparent</h3>
            <p className="text-gray-600 dark:text-gray-300">Devis détaillé et prix maîtrisé sans surprise pour votre budget construction.</p>
          </div>
        </div>
      </div>

      <div id="services" className="mt-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Nos services de construction</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-khaki-700 dark:text-khaki-500">Conception architecturale</h3>
            <p className="text-gray-600 dark:text-gray-300">Plans personnalisés adaptés à vos besoins, votre terrain et vos contraintes budgétaires.</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-khaki-700 dark:text-khaki-500">Dépôt du permis de construire</h3>
            <p className="text-gray-600 dark:text-gray-300">Préparation et suivi de votre dossier auprès des services d'urbanisme. Voir notre service de <a href="/prestations/montage-administratif" className="text-khaki-600 hover:underline">montage de dossier administratif</a>.</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-khaki-700 dark:text-khaki-500">Coordination des travaux</h3>
            <p className="text-gray-600 dark:text-gray-300">Gestion et suivi du chantier pour garantir qualité et respect des délais.</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-khaki-700 dark:text-khaki-500">Assistance à la réception</h3>
            <p className="text-gray-600 dark:text-gray-300">Contrôle final de la construction et accompagnement pour la levée des réserves.</p>
          </div>
        </div>
      </div>

      <div id="process" className="mt-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Notre processus de construction</h2>
        <ConstructionProcess />
      </div>

      <div id="options" className="mt-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Options et personnalisation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-khaki-700 dark:text-khaki-500">Domotique</h3>
            <p className="text-gray-600 dark:text-gray-300">Systèmes intelligents pour contrôler éclairage, chauffage et sécurité de votre maison.</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-khaki-700 dark:text-khaki-500">Énergies renouvelables</h3>
            <p className="text-gray-600 dark:text-gray-300">Solutions écologiques pour réduire votre empreinte carbone et vos factures. En savoir plus sur la <a href="/prestations/construction-ecologique" className="text-khaki-600 hover:underline">construction écologique</a>.</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-khaki-700 dark:text-khaki-500">Piscine & spa</h3>
            <p className="text-gray-600 dark:text-gray-300">Conception et intégration d'espaces de détente et de bien-être dans votre projet.</p>
          </div>
        </div>
      </div>

      <div id="materials" className="mt-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Matériaux et finitions de qualité</h2>
        <div className="bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-12">
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 text-khaki-700 dark:text-khaki-500 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Matériaux durables et écologiques</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Sélection rigoureuse de matériaux respectueux de l'environnement (bois certifié, isolants biosourcés) et adaptés au climat méditerranéen pour une <a href="/prestations/construction-ecologique" className="text-khaki-600 hover:underline">construction durable</a>.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 text-khaki-700 dark:text-khaki-500 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Isolation thermique et phonique performante</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Solutions d'isolation thermique (RT2012, RE2020) et phonique adaptées pour garantir confort été comme hiver et économies d'énergie significatives.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex-shrink-0 text-khaki-700 dark:text-khaki-500 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Finitions intérieures et extérieures personnalisées</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Large choix de revêtements de sol (carrelage, parquet), menuiseries (aluminium, PVC, bois), peintures et équipements sanitaires pour personnaliser votre intérieur et extérieur selon vos goûts et votre budget. Explorez nos solutions de <a href="/prestations/design-interieur" className="text-khaki-600 hover:underline">design d'intérieur</a>.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Sections pour les villes avec style de cartes */}
      <div id="villes-desservies-construction-neuve" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Nos zones d'intervention en construction neuve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Carte Marseille */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_1_resultat.webp" alt="Construction neuve à Marseille" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-sky-600 dark:text-sky-400"><a href="/construction-neuve/marseille" className="hover:underline">Construction Neuve à Marseille</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Construction de <strong>maisons individuelles et villas contemporaines à Marseille</strong>, adaptées au style de vie méditerranéen et aux contraintes locales.
            </p>
            <a href="/contact?service=construction-neuve-marseille" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Construction Marseille</a>
          </div>

          {/* Carte Aix-en-Provence */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_2_resultat.webp" alt="Construction neuve à Aix-en-Provence" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-amber-600 dark:text-amber-400"><a href="/construction-neuve/aix-en-provence" className="hover:underline">Construction Neuve à Aix-en-Provence</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Réalisation de <strong>projets de construction neuve à Aix-en-Provence</strong>, alliant charme provençal, matériaux nobles et performances énergétiques.
            </p>
            <a href="/contact?service=construction-neuve-aix" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Construction Aix</a>
          </div>

          {/* Carte Toulon */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_3_resultat.webp" alt="Construction neuve à Toulon" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-red-600 dark:text-red-400"><a href="/construction-neuve/toulon" className="hover:underline">Construction Neuve à Toulon</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Votre <strong>constructeur de maisons neuves à Toulon</strong> et sur le littoral varois, pour des villas avec vue mer ou des maisons familiales fonctionnelles.
            </p>
            <a href="/contact?service=construction-neuve-toulon" className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Construction Toulon</a>
          </div>

          {/* Carte Nice */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_4_resultat.webp" alt="Construction neuve à Nice" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400"><a href="/construction-neuve/nice" className="hover:underline">Construction Neuve à Nice</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Projets de <strong>construction de villas modernes et maisons d'architecte à Nice</strong> et sur la Côte d'Azur, intégrant les dernières innovations.
            </p>
            <a href="/contact?service=construction-neuve-nice" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Construction Nice</a>
          </div>

          {/* Carte Cannes */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_5_resultat.webp" alt="Construction neuve à Cannes" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-purple-600 dark:text-purple-400"><a href="/construction-neuve/cannes" className="hover:underline">Construction Neuve à Cannes</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Construction de <strong>maisons de prestige et villas de luxe à Cannes</strong>, avec des prestations haut de gamme et une attention particulière aux détails.
            </p>
            <a href="/contact?service=construction-neuve-cannes" className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Construction Cannes</a>
          </div>

          {/* Carte Construction Neuve PACA */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_6_resultat.webp" alt="Construction neuve en PACA" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-green-600 dark:text-green-400"><a href="/construction-neuve/paca" className="hover:underline">Construction Neuve en PACA</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Votre partenaire pour la <strong>construction de votre maison neuve en région PACA</strong>, de la conception des plans à la remise des clés.
            </p>
            <a href="/contact?service=construction-neuve-paca" className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Construction PACA</a>
          </div>
        </div>
      </div>



      {/* Section Types de maisons enrichie et stylisée */}  
      <div id="types-maisons" className="mt-12 py-12">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-10 text-center text-gray-800 dark:text-white">Quel type de maison construire en PACA ?</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Que vous rêviez d'une <a href="#villa-moderne" className="text-sky-600 hover:underline">villa moderne</a>, d'une <a href="#maison-traditionnelle" className="text-amber-600 hover:underline">maison traditionnelle provençale</a>, ou d'une <a href="/prestations/construction-ecologique" className="text-red-600 hover:underline">construction écologique</a>, Progineer réalise la maison qui vous ressemble, adaptée à votre style de vie et à votre budget.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card Maison moderne */} 
          <div id="villa-moderne" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <img src="/images/prestations/PGR_10_resultat.webp" alt="Villa moderne en PACA" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">Maison Moderne / Villa Contemporaine</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
              Lignes épurées, grands volumes, luminosité et matériaux innovants pour une maison design et fonctionnelle. Idéale pour une construction de villa en PACA.
            </p>
            <a href="/realisations?type=moderne" className="mt-auto inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-center">Nos maisons modernes →</a>
          </div>

          {/* Card Maison traditionnelle */} 
          <div id="maison-traditionnelle" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <img src="/images/prestations/PGR_11_resultat.webp" alt="Maison traditionnelle en Provence" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-pink-600 dark:text-pink-400">Maison Traditionnelle / Provençale</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
              Charme de l'ancien, matériaux nobles (pierre, bois), tuiles canal, pour une intégration parfaite dans le paysage provençal. Parfait pour une construction de maison en Provence.
            </p>
            <a href="/realisations?type=traditionnelle" className="mt-auto inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-center">Nos maisons traditionnelles →</a>
          </div>

          {/* Card Maison écologique */} 
          <div id="maison-ecologique" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <img src="/images/prestations/PGR_12_resultat.webp" alt="Maison écologique RE2020" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-teal-600 dark:text-teal-400">Maison Écologique / RE2020</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
              Conception bioclimatique, isolation renforcée, énergies renouvelables pour une maison saine, économe et respectueuse de l'environnement, conforme aux dernières normes (RE2020).
            </p>
            <a href="/prestations/construction-ecologique" className="mt-auto inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-center">Construction écologique →</a>
          </div>

          {/* Card Maison d'architecte */} 
          <div id="maison-architecte" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <img src="/images/prestations/PGR_13_resultat.webp" alt="Maison d'architecte sur mesure" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-orange-600 dark:text-orange-400">Maison d'Architecte</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
              Un design unique et sur-mesure, conçu en collaboration avec des architectes partenaires pour refléter votre personnalité et optimiser votre terrain. Idéal pour un projet de construction unique.
            </p>
            <a href="/contact?type=architecte&service=construction-neuve" className="mt-auto inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-center">Ma maison d'architecte →</a>
          </div>

          {/* Card Maison en bois */} 
          <div id="maison-bois" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <img src="/images/prestations/PGR_14_resultat.webp" alt="Maison en bois écologique" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-cyan-600 dark:text-cyan-400">Maison en Bois</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
              Chaleureuse, écologique et performante, la maison à ossature bois offre de nombreux avantages et une grande liberté architecturale. Explorez les possibilités de la construction bois en PACA.
            </p>
            <a href="/contact?type=bois&service=construction-neuve" className="mt-auto inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-center">Nos maisons en bois →</a>
          </div>

          {/* Card Maison de plain-pied */} 
          <div id="maison-plain-pied" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <img src="/images/prestations/PGR_15_resultat.webp" alt="Maison de plain-pied accessible" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-lime-600 dark:text-lime-400">Maison de Plain-Pied</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
              Accessibilité, fonctionnalité et confort pour tous les âges. Idéale pour optimiser l'espace et faciliter la circulation. Parfaite pour une construction accessible en PACA.
            </p>
            <a href="/contact?type=plain-pied&service=construction-neuve" className="mt-auto inline-block bg-lime-500 hover:bg-lime-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-center">Nos maisons de plain-pied →</a>
          </div>

          {/* Card Maison traditionnelle provençale */} 
          <div id="maison-provencale" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <img src="/images/prestations/PGR_16_resultat.webp" alt="Maison traditionnelle provençale" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-purple-600 dark:text-purple-400">Maisons traditionnelles provençales</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
              Nous réalisons également des maisons de style provençal, caractérisées par leurs toitures en tuiles, leurs façades aux teintes chaudes et leurs volets en bois. Un style intemporel parfaitement adapté au climat méditerranéen et à l'identité régionale.
            </p>
            <a href="/contact?type=provencale&service=construction-neuve" className="mt-auto inline-block bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-center">Nos maisons provençales →</a>
          </div>

          {/* Card Petits collectifs résidentiels */} 
          <div id="petit-collectif" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <img src="/images/prestations/PGR_17_resultat.webp" alt="Petits collectifs résidentiels" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-rose-600 dark:text-rose-400">Petits collectifs résidentiels</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
              Notre expertise s'étend aux projets de petits collectifs résidentiels : immeubles de quelques appartements, résidences privées ou habitats participatifs. Des projets à taille humaine qui favorisent la qualité de vie et le lien social.
            </p>
            <a href="/contact?type=collectif&service=construction-neuve" className="mt-auto inline-block bg-rose-500 hover:bg-rose-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-center">Nos petits collectifs →</a>
          </div>
        </div>
      </div>
    </div>



      {/* Section travaux de construction enrichie et stylisée */}
      <div id="travaux-construction" className="mt-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Les étapes clés des travaux de construction</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
          Les <strong>travaux de construction</strong> d'une <a href="#maison-individuelle" className="text-khaki-600 hover:underline">maison individuelle</a> nécessitent une coordination parfaite 
          entre tous les corps de métier. Notre équipe supervise l'ensemble des travaux, depuis les travaux de 
          terrassement jusqu'aux <a href="#materials" className="text-khaki-600 hover:underline">travaux de finition</a>, en passant par tous les travaux de gros œuvre et de second œuvre.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-khaki-700 dark:text-khaki-500">Travaux de gros œuvre</h3>
            <p className="text-gray-600 dark:text-gray-300">Fondations, élévation des murs, charpente, couverture - les travaux de structure de votre maison.</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-khaki-700 dark:text-khaki-500">Travaux de second œuvre</h3>
            <p className="text-gray-600 dark:text-gray-300">Électricité, plomberie, isolation, cloisons - tous les travaux techniques de votre construction.</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-khaki-700 dark:text-khaki-500">Travaux de finition</h3>
            <p className="text-gray-600 dark:text-gray-300">Peinture, sols, menuiseries, aménagements - les travaux qui donnent vie à votre maison.</p>
          </div>
        </div>
      </div>

      {/* Section constructeur de maison enrichie et stylisée */} 
      <div id="constructeur-de-maison" className="mt-12">
        <h2 className="text-3xl font-semibold mb-8 text-center">Votre constructeur de maison expert en PACA</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
          En tant que <strong>constructeur de maison</strong> spécialisé, nous maîtrisons tous les aspects de la 
          construction résidentielle. Notre expertise de <a href="#constructeur-expertise" className="text-khaki-600 hover:underline">constructeur de maison</a> nous permet d'accompagner 
          les particuliers dans la réalisation de leur projet de construction, du terrain nu à la remise des clés.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-khaki-700 dark:text-khaki-500">Maison personnalisée</h3>
            <p className="text-gray-600 dark:text-gray-300">Chaque projet de <a href="#overview" className="text-khaki-600 hover:underline">construction de maison</a> est unique. Notre approche de constructeur de maison sur mesure s'adapte à vos besoins.</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-khaki-700 dark:text-khaki-500">Maison écologique</h3>
            <p className="text-gray-600 dark:text-gray-300">Construction de <a href="/prestations/construction-ecologique" className="text-khaki-600 hover:underline">maison respectueuse de l'environnement</a> avec des <a href="#materials" className="text-khaki-600 hover:underline">matériaux durables</a> et une conception bioclimatique.</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-khaki-700 dark:text-khaki-500">Maison moderne</h3>
            <p className="text-gray-600 dark:text-gray-300">Spécialiste de la construction de <a href="#villa" className="text-khaki-600 hover:underline">maison contemporaine</a> alliant design, performance et confort de vie.</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-khaki-700 dark:text-khaki-500">Maison traditionnelle</h3>
            <p className="text-gray-600 dark:text-gray-300">Construction de <a href="#maison-traditionnelle" className="text-khaki-600 hover:underline">maison de style provençal</a> respectant l'architecture locale et les traditions régionales.</p>
          </div>
        </div>
      </div>



      {/* Section Solutions Techniques avec style de cartes */}
      <div id="solutions-techniques-construction-neuve" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Solutions Techniques pour Votre Construction Neuve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carte Maîtrise d'œuvre Complète */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_7_resultat.webp" alt="Maîtrise d'œuvre complète pour construction neuve" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-orange-600 dark:text-orange-400"><a href="/construction-neuve/maitrise-oeuvre" className="hover:underline">Maîtrise d'Œuvre Complète</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nous assurons la <strong>conception, le suivi de chantier et la coordination</strong> de tous les corps d'état pour votre projet de construction neuve.
            </p>
            <a href="/contact?service=maitrise-oeuvre-neuf" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Maîtrise d'Œuvre</a>
          </div>

          {/* Carte Construction Écologique */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_8_resultat.webp" alt="Construction écologique et RE2020" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-teal-600 dark:text-teal-400"><a href="/construction-neuve/construction-ecologique" className="hover:underline">Construction Écologique et RE2020</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Conception de <strong>maisons passives, à énergie positive (BEPOS)</strong> et conformes aux exigences de la réglementation environnementale RE2020.
            </p>
            <a href="/contact?service=construction-ecologique-neuf" className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Construction Éco</a>
          </div>
        </div>
      </div>
    </>

  );
};

export default ConstructionNeuveContent;
