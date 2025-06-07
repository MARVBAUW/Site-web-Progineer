import React from 'react';

import SharedProcessSection from '@/components/common/SharedProcessSection';

const extensionProcessSteps = [
  {
    title: "Étude de faisabilité",
    description: "Analyse du terrain, de la structure existante et des contraintes réglementaires pour évaluer les possibilités d'extension."
  },
  {
    title: "Conception architecturale",
    description: "Création de plans et esquisses pour visualiser le projet et définir les volumes, les ouvertures et les matériaux."
  },
  {
    title: "Démarches administratives",
    description: "Préparation et dépôt des demandes d'autorisation (permis de construire, déclaration préalable) auprès des services d'urbanisme."
  },
  {
    title: "Consultation des entreprises",
    description: "Sélection des artisans qualifiés et négociation des devis pour optimiser le budget tout en garantissant la qualité des prestations."
  },
  {
    title: "Suivi des travaux",
    description: "Coordination des différents corps de métier, contrôle de la qualité d'exécution et respect des délais et du budget."
  },
  {
    title: "Réception de l'ouvrage",
    description: "Vérification de la conformité des travaux et accompagnement pour la levée des réserves éventuelles."
  }
];

const ExtensionContent = () => {
  return (
    <>
      <div id="overview">
        <h1 className="text-3xl font-semibold mb-6">Extension sur mesure pour votre habitat</h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Vous manquez d'espace dans votre maison ? Notre bureau d'études en <strong>maîtrise d'œuvre</strong> vous accompagne dans votre projet d'extension en région PACA. De la conception à la réalisation, nous vous proposons des solutions personnalisées pour agrandir votre espace de vie tout en valorisant votre patrimoine immobilier.
        </p>

        <div className="mb-12">
          <img 
            src="/images/prestations/PGR_23_resultat.webp" 
            alt="Exemple d'extension de maison réalisée par Progineer en PACA"
            className="w-full h-auto rounded-xl mb-4"
          />
          <p className="text-sm text-low-contrast text-center">Extension contemporaine d'une villa à Marseille</p>
        </div>
      </div>

      <div id="services">
        <h2 className="text-2xl font-medium mb-4">Nos services d'extension</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Extension horizontale</h4>
            <p className="text-gray-600 dark:text-gray-300">Agrandissement de plain-pied pour créer de nouvelles pièces de vie (salon, cuisine, chambre) en harmonie avec l'existant.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Surélévation</h4>
            <p className="text-gray-600 dark:text-gray-300">Ajout d'un étage supplémentaire pour maximiser la surface habitable sans réduire votre espace extérieur.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Extension à toit plat</h4>
            <p className="text-gray-600 dark:text-gray-300">Solution contemporaine et épurée, idéale pour les maisons modernes et offrant la possibilité d'une toiture végétalisée.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Véranda et jardin d'hiver</h4>
            <p className="text-gray-600 dark:text-gray-300">Espace de transition entre intérieur et extérieur, baigné de lumière pour profiter de votre jardin toute l'année.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Extension en bois</h4>
            <p className="text-gray-600 dark:text-gray-300">Solution écologique et rapide à mettre en œuvre, offrant une excellente isolation thermique et un design chaleureux.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Extension modulaire</h4>
            <p className="text-gray-600 dark:text-gray-300">Système flexible et évolutif permettant d'agrandir votre espace selon vos besoins actuels et futurs.</p>
          </div>
        </div>
      </div>

      <SharedProcessSection pageTitle="Notre processus d'extension" steps={extensionProcessSteps} />

      <div id="options">
        <h2 className="text-2xl font-medium mb-4">Options d'extension populaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="h-48 bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600607687126-8a3414349a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Extension cuisine" className="object-cover w-full h-full" />
            </div>
            <div className="p-4">
              <h4 className="font-medium">Extension cuisine</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Idéale pour créer une cuisine ouverte et conviviale, parfaite pour recevoir famille et amis.</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="h-48 bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Espace bureau" className="object-cover w-full h-full" />
            </div>
            <div className="p-4">
              <h4 className="font-medium">Espace bureau</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Un espace de travail à domicile lumineux et isolé pour plus de confort et de concentration.</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="h-48 bg-gray-200 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Suite parentale" className="object-cover w-full h-full" />
            </div>
            <div className="p-4">
              <h4 className="font-medium">Suite parentale</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Une extension pour créer un espace privé avec chambre, dressing et salle de bain.</p>
            </div>
          </div>
        </div>
      </div>


      {/* Sections pour les villes avec style de cartes */}
      <div id="villes-desservies-extension" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Nos zones d'intervention en extension de maison</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Carte Marseille */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_9_resultat.webp" alt="Extension de maison à Marseille" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-sky-600 dark:text-sky-400"><a href="/extension/marseille" className="hover:underline">Extension à Marseille</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Experts en <strong>extension de maison à Marseille</strong>, nous adaptons nos solutions aux villas des quartiers sud, maisons de ville et bastides, en respectant les spécificités locales.
            </p>
            <a href="/contact?service=extension-marseille" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Extension Marseille</a>
          </div>

          {/* Carte Aix-en-Provence */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_10_resultat.webp" alt="Extension de maison à Aix-en-Provence" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-amber-600 dark:text-amber-400"><a href="/extension/aix-en-provence" className="hover:underline">Extension à Aix-en-Provence</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              À Aix-en-Provence, nous réalisons des <strong>extensions de maison</strong> qui allient respect du patrimoine et modernité, pour agrandir votre espace de vie avec élégance.
            </p>
            <a href="/contact?service=extension-aix" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Extension Aix</a>
          </div>

          {/* Carte Toulon */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_11_resultat.webp" alt="Extension de maison à Toulon" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-red-600 dark:text-red-400"><a href="/extension/toulon" className="hover:underline">Extension à Toulon</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nous concevons des <strong>extensions de maison à Toulon</strong> adaptées au climat et au terrain, en optimisant les vues et la luminosité pour un confort accru.
            </p>
            <a href="/contact?service=extension-toulon" className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Extension Toulon</a>
          </div>

          {/* Carte Nice */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_12_resultat.webp" alt="Extension de maison à Nice" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400"><a href="/extension/nice" className="hover:underline">Extension à Nice</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pour votre <strong>extension de maison à Nice</strong>, nous proposons des solutions sur mesure qui valorisent votre bien et s'inspirent de l'architecture locale avec une touche contemporaine.
            </p>
            <a href="/contact?service=extension-nice" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Extension Nice</a>
          </div>

          {/* Carte Cannes */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_13_resultat.webp" alt="Extension de maison à Cannes" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-purple-600 dark:text-purple-400"><a href="/extension/cannes" className="hover:underline">Extension à Cannes</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              À Cannes, nous créons des <strong>extensions de maison</strong> élégantes et fonctionnelles, en parfaite harmonie avec l'architecture existante et l'identité cannoise.
            </p>
            <a href="/contact?service=extension-cannes" className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Extension Cannes</a>
          </div>

          {/* Carte Extension PACA */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_14_resultat.webp" alt="Extension de maison en PACA" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-green-600 dark:text-green-400"><a href="/extension/paca" className="hover:underline">Extension en PACA</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Spécialistes de l'<strong>extension de maison en PACA</strong>, nous vous accompagnons de A à Z pour agrandir votre espace de vie et valoriser votre patrimoine immobilier.
            </p>
            <a href="/contact?service=extension-paca" className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Projet Extension PACA</a>
          </div>
        </div>
      </div>

      {/* Section Solutions Techniques avec style de cartes */}
      <div id="solutions-techniques-extension" className="mt-12">
        {/* <h2 className="text-3xl font-semibold mb-6 text-center">Solutions Techniques pour Votre Extension</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carte Surélévation */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_15_resultat.webp" alt="Surélévation de maison" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-orange-600 dark:text-orange-400"><a href="/extension/surelevation" className="hover:underline">Surélévation et Agrandissement Vertical</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Optimisez votre surface habitable sans empiéter sur votre jardin grâce à nos solutions de <strong>surélévation de maison</strong>, une technique idéale en milieu urbain dense.
            </p>
            <a href="/contact?service=surelevation" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Surélévation</a>
          </div>

          {/* Carte Extension Bois */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_16_resultat.webp" alt="Extension en ossature bois" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-teal-600 dark:text-teal-400"><a href="/extension/ossature-bois" className="hover:underline">Extension en Ossature Bois</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              L'<strong>extension en ossature bois</strong> offre une solution écologique, rapide à mettre en œuvre et performante en termes d'isolation, pour un agrandissement chaleureux et durable.
            </p>
            <a href="/contact?service=extension-bois" className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Extension Bois</a>
          </div>
          {/* Carte Vérandas et Pergolas */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_17_resultat.webp" alt="Vérandas et pergolas bioclimatiques" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-lime-600 dark:text-lime-400"><a href="/extension/veranda-pergola" className="hover:underline">Vérandas et Pergolas Bioclimatiques</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Créez un espace de vie supplémentaire lumineux et confortable avec nos <strong>vérandas et pergolas bioclimatiques</strong>, conçues sur mesure pour s'adapter à votre style.
            </p>
            <a href="/contact?service=veranda-pergola" className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Véranda/Pergola</a>
          </div>

          {/* Carte Aménagement de Combles */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_18_resultat.webp" alt="Aménagement de combles" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-fuchsia-600 dark:text-fuchsia-400"><a href="/extension/amenagement-combles" className="hover:underline">Aménagement de Combles</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Transformez vos combles perdus en un espace de vie fonctionnel et agréable : chambre, bureau, salle de jeux... Une solution astucieuse pour <strong>gagner des mètres carrés</strong>.
            </p>
            <a href="/contact?service=amenagement-combles" className="inline-block bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Combles</a>
          </div>

          {/* Carte Extension de terrasses */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_19_resultat.webp" alt="Extension de terrasse" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-cyan-600 dark:text-cyan-400"><a href="/extension/terrasse" className="hover:underline">Extension de terrasses</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nous concevons et réalisons des <strong>extensions de terrasses</strong> qui s'intègrent parfaitement à votre habitat. Du choix des matériaux à la définition des niveaux et des garde-corps, chaque détail est pensé pour créer un espace extérieur convivial et esthétique.
            </p>
            <a href="/contact?service=extension-terrasse" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Terrasse</a>
          </div>

          {/* Carte Intégration de piscines et pool-houses */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_20_resultat.webp" alt="Intégration de piscine et pool-house" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-sky-600 dark:text-sky-400"><a href="/extension/piscine-pool-house" className="hover:underline">Intégration de piscines et pool-houses</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nous vous accompagnons dans l'aménagement de vos espaces extérieurs avec l'<strong>intégration de piscines</strong> et la création de <strong>pool-houses</strong>. Des solutions sur mesure pour profiter pleinement de la douceur du climat méditerranéen.
            </p>
            <a href="/contact?service=piscine-pool-house" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Piscine/Pool House</a>
          </div>
        </div>
      </div>
    </>

  );
};

export default ExtensionContent;
