import React from 'react';

import SharedProcessSection from '@/components/common/SharedProcessSection';

const optimisationProcessSteps = [
  {
    title: "Analyse de vos besoins et de l'existant",
    description: "Nous étudions votre mode de vie, vos attentes et les contraintes de votre espace pour définir un projet sur mesure."
  },
  {
    title: "Conception de solutions d'aménagement",
    description: "Nous vous proposons des solutions créatives et fonctionnelles pour optimiser chaque mètre carré : mobilier modulable, rangements intégrés, cloisons amovibles, etc."
  },
  {
    title: "Visualisation 3D et plans détaillés",
    description: "Nous réalisons des plans 3D et des vues détaillées pour vous permettre de vous projeter dans votre futur intérieur optimisé."
  },
  {
    title: "Coordination et suivi des travaux",
    description: "Nous sélectionnons des artisans qualifiés et assurons un suivi rigoureux du chantier pour garantir un résultat conforme à vos attentes."
  },
  {
    title: "Aménagement final et conseils personnalisés",
    description: "Nous vous accompagnons jusqu'à l'aménagement final et vous prodiguons des conseils pour maintenir l'harmonie et la fonctionnalité de votre espace."
  }
];

const OptimisationEspaceContent = () => {
  return (
    <>
      <div id="overview" className="mb-12 md:mb-16 p-4 md:p-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
        <h1 className="text-3xl font-semibold mb-6">Optimisez chaque mètre carré de votre espace</h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Vous souhaitez tirer le meilleur parti de votre surface habitable ? Notre bureau d'études en <strong>maîtrise d'œuvre</strong> vous propose des solutions ingénieuses pour optimiser l'espace de votre logement en région PACA. De la conception à la réalisation, nous mettons notre expertise au service de votre confort quotidien.
        </p>

        <div className="mb-12">
          <img 
            src="/images/prestations/PGR_22_resultat.webp" 
            alt="Exemple d'optimisation d'espace réalisée par Progineer en PACA"
            className="w-full h-auto rounded-xl mb-4"
          />
          <p className="text-sm text-low-contrast text-center">Optimisation d'un appartement à Marseille</p>
        </div>
      </div>

      <div id="services">
        <h2 className="text-2xl font-medium mb-4">Nos services d'optimisation d'espace</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Réaménagement complet</h4>
            <p className="text-gray-600 dark:text-gray-300">Restructuration totale de votre intérieur pour créer des espaces plus fonctionnels et optimisés selon vos besoins spécifiques.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Mobilier sur mesure</h4>
            <p className="text-gray-600 dark:text-gray-300">Création de solutions de rangement personnalisées et adaptées à votre espace pour maximiser chaque recoin.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Aménagement de combles</h4>
            <p className="text-gray-600 dark:text-gray-300">Transformation de vos combles en espace habitable fonctionnel : chambre, bureau, salle de jeux ou espace de stockage.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Création de mezzanines</h4>
            <p className="text-gray-600 dark:text-gray-300">Conception et installation de mezzanines pour exploiter la hauteur sous plafond et créer un niveau supplémentaire.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Solutions pour petits espaces</h4>
            <p className="text-gray-600 dark:text-gray-300">Astuces et aménagements spécifiques pour les studios et petits appartements afin de les rendre plus spacieux et fonctionnels.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Valorisation des espaces perdus</h4>
            <p className="text-gray-600 dark:text-gray-300">Transformation des espaces sous-exploités (sous-escaliers, recoins, niches) en zones utiles et esthétiques.</p>
          </div>
        </div>
      </div>

      <div id="techniques">
        <h2 className="text-2xl font-medium mb-4">Techniques d'optimisation d'espace</h2>
        <div className="bg-card p-6 rounded-lg shadow-sm mb-10">
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="flex-shrink-0 text-khaki-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <strong className="font-medium">Décloisonnement</strong>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Création d'espaces ouverts et multifonctionnels pour gagner en fluidité et en lumière naturelle.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 text-khaki-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <strong className="font-medium">Mobilier modulable</strong>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Utilisation de meubles transformables et multifonctions pour s'adapter aux différents moments de la journée.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 text-khaki-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <strong className="font-medium">Rangements intégrés</strong>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Intégration de solutions de rangement dans les murs, sous les escaliers ou dans les combles pour libérer l'espace au sol.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 text-khaki-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <strong className="font-medium">Jeux de miroirs</strong>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Utilisation stratégique des miroirs pour créer une sensation d'espace et multiplier la lumière naturelle.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 text-khaki-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <strong className="font-medium">Exploitation de la hauteur</strong>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Création de mezzanines, d'étagères en hauteur ou de lits surélevés pour optimiser l'espace vertical.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 text-khaki-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <strong className="font-medium">Portes coulissantes</strong>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Remplacement des portes battantes par des portes coulissantes pour économiser l'espace perdu lors de l'ouverture.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <SharedProcessSection pageTitle="Notre méthode d'optimisation" steps={optimisationProcessSteps} />


      {/* Sections pour les villes avec style de cartes */}
      <div id="villes-desservies-optimisation" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Nos zones d'intervention en optimisation d'espace</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Carte Marseille */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_25_resultat.webp" alt="Optimisation d'espace à Marseille" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-sky-600 dark:text-sky-400"><a href="/optimisation-espace/marseille" className="hover:underline">Optimisation d'espace à Marseille</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Libérez le potentiel de votre <strong>appartement ou maison à Marseille</strong>. Nous transformons les espaces contraints en lieux de vie fonctionnels et agréables.
            </p>
            <a href="/contact?service=optimisation-espace-marseille" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Optimisation Marseille</a>
          </div>

          {/* Carte Aix-en-Provence */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_26_resultat.webp" alt="Optimisation d'espace à Aix-en-Provence" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-amber-600 dark:text-amber-400"><a href="/optimisation-espace/aix-en-provence" className="hover:underline">Optimisation d'espace à Aix-en-Provence</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              À Aix-en-Provence, nous optimisons appartements du centre historique et villas pour un <strong>gain de place et de confort</strong>, en respectant le charme de l'ancien.
            </p>
            <a href="/contact?service=optimisation-espace-aix" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Optimisation Aix</a>
          </div>

          {/* Carte Toulon */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_27_resultat.webp" alt="Optimisation d'espace à Toulon" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-red-600 dark:text-red-400"><a href="/optimisation-espace/toulon" className="hover:underline">Optimisation d'espace à Toulon</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nous apportons des solutions d'<strong>aménagement intelligent à Toulon</strong> pour optimiser chaque mètre carré de votre logement, du studio à la maison familiale.
            </p>
            <a href="/contact?service=optimisation-espace-toulon" className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Optimisation Toulon</a>
          </div>

          {/* Carte Nice */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_28_resultat.webp" alt="Optimisation d'espace à Nice" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400"><a href="/optimisation-espace/nice" className="hover:underline">Optimisation d'espace à Nice</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Optimisez votre <strong>appartement ou studio à Nice</strong> avec nos solutions sur mesure, idéales pour les petites surfaces et les agencements complexes.
            </p>
            <a href="/contact?service=optimisation-espace-nice" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Optimisation Nice</a>
          </div>

          {/* Carte Cannes */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_29_resultat.webp" alt="Optimisation d'espace à Cannes" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-purple-600 dark:text-purple-400"><a href="/optimisation-espace/cannes" className="hover:underline">Optimisation d'espace à Cannes</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              À Cannes, nous créons des <strong>intérieurs fonctionnels et élégants</strong> en optimisant l'agencement de votre appartement ou villa, pour un cadre de vie exceptionnel.
            </p>
            <a href="/contact?service=optimisation-espace-cannes" className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Optimisation Cannes</a>
          </div>

          {/* Carte Optimisation Espace PACA */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_30_resultat.webp" alt="Optimisation d'espace en PACA" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-green-600 dark:text-green-400"><a href="/optimisation-espace/paca" className="hover:underline">Optimisation d'espace en PACA</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Notre expertise en <strong>optimisation d'espace en PACA</strong> vous garantit des solutions innovantes pour maximiser le potentiel de votre bien immobilier.
            </p>
            <a href="/contact?service=optimisation-espace-paca" className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Optimisation PACA</a>
          </div>
        </div>
      </div>

      {/* Section Solutions Techniques avec style de cartes */}
      <div id="solutions-techniques-optimisation" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Solutions Astucieuses pour Gagner de la Place</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carte Mobilier Modulable */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_31_resultat.webp" alt="Mobilier modulable et intelligent" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-orange-600 dark:text-orange-400"><a href="/optimisation-espace/mobilier-modulable" className="hover:underline">Mobilier Modulable et Intelligent</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Conception et intégration de <strong>mobilier transformable</strong> (lits escamotables, tables extensibles, bureaux intégrés) pour un espace polyvalent et adaptable.
            </p>
            <a href="/contact?service=mobilier-modulable" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Mobilier Modulable</a>
          </div>

          {/* Carte Rangements sur Mesure */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_32_resultat.webp" alt="Rangements sur mesure et intégrés" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-teal-600 dark:text-teal-400"><a href="/optimisation-espace/rangements-sur-mesure" className="hover:underline">Rangements sur Mesure et Intégrés</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Création de <strong>placards, dressings, bibliothèques et niches sur mesure</strong> pour exploiter chaque centimètre carré et désencombrer votre intérieur.
            </p>
            <a href="/contact?service=rangements-sur-mesure" className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Rangements</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OptimisationEspaceContent;
