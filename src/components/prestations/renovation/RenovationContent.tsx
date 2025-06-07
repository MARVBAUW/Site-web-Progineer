import React from 'react';
import ConstructionProcess from './ConstructionProcess';

const RenovationContent = () => {
  return (
    <>
      <div id="overview" className="mb-12 md:mb-16 p-4 md:p-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
        <h1 className="text-3xl font-semibold mb-6">Rénovation complète de maisons et appartements</h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Notre bureau d'études en <strong>maîtrise d'œuvre</strong> vous accompagne dans tous vos projets de rénovation en région PACA. Que vous souhaitiez moderniser votre logement, optimiser votre espace de vie ou améliorer les performances énergétiques de votre habitation, notre équipe d'experts vous propose des solutions personnalisées et adaptées à vos besoins.
        </p>

        <div className="mb-12">
          <img 
            src="/images/prestations/PGR_26_resultat.webp" 
            alt="Projet de rénovation réalisé par Progineer en PACA"
            className="w-full h-auto rounded-xl mb-4"
          />
          <p className="text-sm text-low-contrast text-center">Rénovation complète d'une maison à Marseille</p>
        </div>
      </div>

      <div id="services">
        <h2 className="text-2xl font-medium mb-4">Nos services de rénovation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Rénovation complète</h4>
            <p className="text-gray-600 dark:text-gray-300">Transformation intégrale de votre bien immobilier, de la structure aux finitions.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Rénovation partielle</h4>
            <p className="text-gray-600 dark:text-gray-300">Modernisation ciblée de certaines pièces ou éléments de votre habitat.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Rénovation énergétique</h4>
            <p className="text-gray-600 dark:text-gray-300">Amélioration de l'isolation et des systèmes techniques pour réduire votre consommation.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Rénovation patrimoniale</h4>
            <p className="text-gray-600 dark:text-gray-300">Restauration respectueuse de biens anciens ou à caractère historique.</p>
          </div>
        </div>
      </div>

      <div id="process">
        <ConstructionProcess />
      </div>

      <div id="energy">
        <h2 className="text-2xl font-medium mb-4">Rénovation énergétique</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Isolation thermique</h4>
            <p className="text-gray-600 dark:text-gray-300">Solutions performantes pour murs, toiture et planchers adaptées au climat méditerranéen.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Menuiseries isolantes</h4>
            <p className="text-gray-600 dark:text-gray-300">Remplacement des fenêtres et portes pour une meilleure étanchéité et isolation.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Chauffage efficient</h4>
            <p className="text-gray-600 dark:text-gray-300">Installation de systèmes modernes et économes : pompe à chaleur, climatisation réversible, etc.</p>
          </div>
        </div>
      </div>

      <div id="materials">
        <h2 className="text-2xl font-medium mb-4">Matériaux et finitions</h2>
        <div className="bg-card p-6 rounded-lg shadow-sm mb-8">
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="flex-shrink-0 text-khaki-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <strong className="font-medium">Matériaux écologiques</strong>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Large choix de matériaux naturels et durables : chaux, terre cuite, bois local, etc.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 text-khaki-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <strong className="font-medium">Finitions personnalisées</strong>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Peintures, revêtements et menuiseries adaptés à vos goûts et au style de votre bien.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="flex-shrink-0 text-khaki-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <strong className="font-medium">Solutions innovantes</strong>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Intégration de matériaux techniques pour répondre aux enjeux d'isolation, d'acoustique et de durabilité.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Sections pour les villes avec style de cartes */}
      <div id="villes-desservies" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Nos zones d'intervention en rénovation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Carte Marseille */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_1_resultat.webp" alt="Rénovation à Marseille" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-sky-600 dark:text-sky-400"><a href="/renovation/marseille" className="hover:underline">Rénovation à Marseille</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Spécialistes de la <strong>rénovation d'appartements et maisons à Marseille</strong>, nous maîtrisons les spécificités du bâti marseillais, des appartements Haussmanniens du centre-ville aux villas du Prado ou de la Corniche. Bénéficiez de solutions sur-mesure pour votre <a href="/renovation/marseille/appartement" className="text-sky-600 dark:text-sky-400 hover:underline">rénovation d'appartement à Marseille</a> ou la <a href="/renovation/marseille/maison" className="text-sky-600 dark:text-sky-400 hover:underline">rénovation de maison à Marseille</a>.
            </p>
            <a href="/contact?service=renovation-marseille" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Rénovation Marseille</a>
          </div>

          {/* Carte Aix-en-Provence */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_2_resultat.webp" alt="Rénovation à Aix-en-Provence" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-amber-600 dark:text-amber-400"><a href="/renovation/aix-en-provence" className="hover:underline">Rénovation à Aix-en-Provence</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              À Aix-en-Provence, nous rénovons appartements du centre historique, bastides provençales et villas contemporaines. Nous respectons l'héritage architectural aixois tout en apportant modernité et confort. Découvrez nos services de <a href="/renovation/aix-en-provence/appartement" className="text-amber-600 dark:text-amber-400 hover:underline">rénovation d'appartement à Aix-en-Provence</a> et <a href="/renovation/aix-en-provence/maison" className="text-amber-600 dark:text-amber-400 hover:underline">rénovation de bastide à Aix</a>.
            </p>
            <a href="/contact?service=renovation-aix" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Rénovation Aix</a>
          </div>

          {/* Carte Toulon */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_3_resultat.webp" alt="Rénovation à Toulon" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-red-600 dark:text-red-400"><a href="/renovation/toulon" className="hover:underline">Rénovation à Toulon</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nous accompagnons vos projets de <strong>rénovation à Toulon</strong>, en tenant compte des spécificités de l'habitat varois. Du centre ancien aux quartiers résidentiels du Mourillon, nous adaptons nos solutions pour votre <a href="/renovation/toulon/appartement" className="text-red-600 dark:text-red-400 hover:underline">rénovation d'appartement à Toulon</a> ou <a href="/renovation/toulon/villa" className="text-red-600 dark:text-red-400 hover:underline">rénovation de villa à Toulon</a>.
            </p>
            <a href="/contact?service=renovation-toulon" className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Rénovation Toulon</a>
          </div>

          {/* Carte Nice */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_4_resultat.webp" alt="Rénovation à Nice" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400"><a href="/renovation/nice" className="hover:underline">Rénovation à Nice</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Notre équipe intervient pour tous vos projets de <strong>rénovation à Nice</strong>. De la Promenade des Anglais au Vieux Nice, nous connaissons l'architecture niçoise et ses contraintes. Contactez-nous pour une <a href="/renovation/nice/appartement" className="text-blue-600 dark:text-blue-400 hover:underline">rénovation d'appartement à Nice</a> ou une <a href="/renovation/nice/villa-belle-epoque" className="text-blue-600 dark:text-blue-400 hover:underline">rénovation de villa Belle Époque</a>.
            </p>
            <a href="/contact?service=renovation-nice" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Rénovation Nice</a>
          </div>

          {/* Carte Cannes */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_5_resultat.webp" alt="Rénovation à Cannes" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-purple-600 dark:text-purple-400"><a href="/renovation/cannes" className="hover:underline">Rénovation à Cannes</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              À Cannes, nous mettons notre expertise au service de votre <strong>projet de rénovation</strong>, qu'il s'agisse d'appartements sur la Croisette ou de villas à Super Cannes. Explorez nos solutions pour la <a href="/renovation/cannes/appartement-luxe" className="text-purple-600 dark:text-purple-400 hover:underline">rénovation d'appartement de luxe à Cannes</a> ou la <a href="/renovation/cannes/villa-contemporaine" className="text-purple-600 dark:text-purple-400 hover:underline">rénovation de villa contemporaine</a>.
            </p>
            <a href="/contact?service=renovation-cannes" className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Rénovation Cannes</a>
          </div>

          {/* Carte Rénovation Appartement PACA */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_6_resultat.webp" alt="Rénovation appartement PACA" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-green-600 dark:text-green-400"><a href="/renovation/appartement-paca" className="hover:underline">Rénovation d'Appartements en PACA</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Spécialistes de la <strong>rénovation d'appartements en PACA</strong>, nous gérons les contraintes de copropriété et optimisons les espaces restreints. Que ce soit pour un studio, un T2, T3 ou un grand appartement familial, nous avons la solution.
            </p>
            <a href="/contact?service=renovation-appartement-paca" className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Rénovation Appartement</a>
          </div>
        </div>
      </div>

      {/* Section Solutions Techniques avec style de cartes */}
      <div id="solutions-techniques" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Solutions Techniques pour Votre Rénovation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carte Isolation Thermique */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_7_resultat.webp" alt="Isolation thermique en rénovation" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-orange-600 dark:text-orange-400"><a href="/renovation/isolation-thermique" className="hover:underline">Solutions d'Isolation Thermique</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              L'<strong>isolation thermique</strong> est cruciale en PACA. Nous proposons des solutions pour murs, toiture, planchers et menuiseries, adaptées au climat méditerranéen, pour un confort optimal et des économies d'énergie. Découvrez nos techniques d'<a href="/renovation/isolation-thermique/ite" className="text-orange-600 dark:text-orange-400 hover:underline">isolation par l'extérieur (ITE)</a> et <a href="/renovation/isolation-thermique/iti" className="text-orange-600 dark:text-orange-400 hover:underline">isolation par l'intérieur (ITI)</a>.
            </p>
            <a href="/contact?service=isolation-thermique" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Isolation</a>
          </div>

          {/* Carte Chauffage et Climatisation */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_8_resultat.webp" alt="Chauffage et climatisation en rénovation" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-teal-600 dark:text-teal-400"><a href="/renovation/chauffage-climatisation" className="hover:underline">Systèmes de Chauffage et Climatisation</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nous installons des <strong>systèmes de chauffage et climatisation</strong> performants : <a href="/renovation/chauffage-climatisation/pompe-a-chaleur" className="text-teal-600 dark:text-teal-400 hover:underline">pompes à chaleur</a>, <a href="/renovation/chauffage-climatisation/climatisation-reversible" className="text-teal-600 dark:text-teal-400 hover:underline">climatisation réversible</a>, solutions solaires. Optimisez votre confort et respectez l'environnement.
            </p>
            <a href="/contact?service=chauffage-climatisation" className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Chauffage & Clim</a>
          </div>
        </div>
      </div>

      {/* Section travaux de rénovation enrichie */}
      <div id="travaux-renovation" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Travaux de rénovation complète</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Les <strong>travaux de rénovation</strong> nécessitent une planification minutieuse et une coordination 
          experte de tous les corps de métier. Notre équipe supervise l'ensemble de vos travaux de rénovation, 
          depuis les travaux de démolition jusqu'aux travaux de finition, en passant par tous les travaux 
          techniques et travaux d'aménagement.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Travaux de démolition</h4>
            <p className="text-gray-600 dark:text-gray-300">Dépose des éléments existants, cloisonnement, ouvertures - les travaux préparatoires à votre rénovation.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Travaux de rénovation lourde</h4>
            <p className="text-gray-600 dark:text-gray-300">Gros œuvre, modification de structure, reprises en sous-œuvre - les travaux techniques complexes.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Travaux de finition</h4>
            <p className="text-gray-600 dark:text-gray-300">Revêtements, peintures, aménagements - les travaux qui subliment votre rénovation.</p>
          </div>
        </div>
      </div>

      {/* Section travaux par type */}
      <div id="types-travaux" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Types de travaux de rénovation</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Nos <strong>travaux de rénovation</strong> couvrent tous les aspects de votre projet, avec une expertise 
          reconnue dans chaque domaine. Des travaux d'électricité aux travaux de plomberie, en passant par 
          les travaux d'isolation et les travaux de menuiserie, nous coordonnons l'ensemble.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Travaux d'électricité</h4>
            <p className="text-gray-600 dark:text-gray-300">Mise aux normes, création de circuits, domotique - tous les travaux électriques pour votre rénovation.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Travaux de plomberie</h4>
            <p className="text-gray-600 dark:text-gray-300">Création, modification, mise aux normes des réseaux d'eau et d'évacuation pour vos travaux.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Travaux d'isolation</h4>
            <p className="text-gray-600 dark:text-gray-300">Isolation thermique et phonique adaptée au climat méditerranéen et à votre type d'habitat.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Travaux de menuiserie</h4>
            <p className="text-gray-600 dark:text-gray-300">Fenêtres, portes, placards, aménagements sur mesure - tous les travaux bois de votre rénovation.</p>
          </div>
        </div>
      </div>

      {/* Section coût travaux */}
      <div id="cout-travaux" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Coût des travaux de rénovation</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Le coût des <strong>travaux de rénovation</strong> varie selon l'ampleur du projet et la nature des 
          travaux. Notre équipe vous fournit une estimation détaillée de tous vos travaux, du devis 
          initial au suivi budgétaire pendant les travaux.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h4 className="font-medium text-lg mb-3">Estimation travaux de rénovation au m²</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong>Travaux légers :</strong> 300-600€/m²<br />
              <span className="text-gray-600 dark:text-gray-300">Peinture, sols, électricité de base</span>
            </div>
            <div>
              <strong>Travaux moyens :</strong> 600-1200€/m²<br />
              <span className="text-gray-600 dark:text-gray-300">Salle de bain, cuisine, cloisons</span>
            </div>
            <div>
              <strong>Travaux lourds :</strong> 1200-2000€/m²<br />
              <span className="text-gray-600 dark:text-gray-300">Structure, gros œuvre, tout corps d'état</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RenovationContent;
