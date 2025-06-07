import React from 'react';
import SharedProcessSection from '@/components/common/SharedProcessSection';
import SkillsGrid from './sections/SkillsGrid';
import RealizationsGrid from './sections/RealizationsGrid';
import CTASection from './sections/CTASection';

const montageAdministratifProcessSteps = [
  {
    title: "Analyse de votre projet et des contraintes réglementaires",
    description: "Nous étudions la faisabilité de votre projet (construction neuve, rénovation, extension) au regard des règles d'urbanisme (PLU, RNU) et des contraintes techniques."
  },
  {
    title: "Constitution du dossier de demande d'autorisation",
    description: "Nous rassemblons toutes les pièces nécessaires (plans, formulaires Cerfa, études spécifiques) pour constituer un dossier complet et conforme."
  },
  {
    title: "Dépôt et suivi de l'instruction du dossier",
    description: "Nous déposons votre demande en mairie et assurons le suivi de son instruction, en répondant aux éventuelles demandes de pièces complémentaires."
  },
  {
    title: "Affichage réglementaire et assistance jusqu'à l'obtention",
    description: "Nous vous accompagnons dans les démarches d'affichage réglementaire et restons à vos côtés jusqu'à l'obtention définitive de votre autorisation d'urbanisme."
  }
];

const MontageAdministratifContent = () => {
  return (
    <>
      <div id="overview">
        <h1 className="text-3xl font-semibold mb-6">Simplifiez vos démarches administratives</h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Progineer prend en charge toutes vos démarches administratives liées à la construction, la rénovation ou l'extension de votre bien immobilier en région PACA. Notre équipe vous accompagne de la constitution des dossiers à l'obtention des autorisations, pour un projet sécurisé et sans stress.
        </p>
        <div className="mb-12">
          <img 
            src="/images/prestations/PGR_20_resultat.webp" 
            alt="Dossier administratif réalisé par Progineer en région PACA"
            className="w-full h-auto rounded-xl mb-4"
          />
          <p className="text-sm text-low-contrast text-center">Dossier de permis de construire complet à Marseille</p>
        </div>
      </div>

      <div id="expertise" className="mb-8">
        {/* This h2 will be removed as the main title is now h1, and sections will start with h2 */}
        <h2 className="text-3xl font-semibold mb-6">Expertise en montage administratif</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Notre équipe gère l'ensemble des démarches administratives pour garantir la conformité et la rapidité de vos projets. Nous intervenons sur tous types de dossiers : permis de construire, déclarations préalables, autorisations d'urbanisme.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Dossier de permis de construire</h4>
            <p className="text-gray-600 dark:text-gray-300">Constitution et dépôt de dossiers complets auprès des services d'urbanisme.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Déclarations préalables</h4>
            <p className="text-gray-600 dark:text-gray-300">Gestion des déclarations pour travaux, extensions, modifications de façade, etc.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Suivi administratif</h4>
            <p className="text-gray-600 dark:text-gray-300">Suivi des délais d'instruction, réponses aux demandes complémentaires, gestion des recours.</p>
          </div>
          <div className="bg-card p-5 rounded-lg border border-gray-100 shadow-sm">
            <h4 className="font-medium text-lg mb-2">Accompagnement personnalisé</h4>
            <p className="text-gray-600 dark:text-gray-300">Conseil et assistance sur-mesure jusqu'à l'obtention des autorisations.</p>
          </div>
        </div>
      </div>

      <div id="processus">
        <h2 className="text-2xl font-medium mb-4">Notre processus administratif</h2>
        <SharedProcessSection pageTitle="Notre processus de montage administratif" steps={montageAdministratifProcessSteps} />
      </div>

      <div id="competences">
        <h2 className="text-2xl font-medium mb-4">Nos compétences en gestion administrative</h2>
        <SkillsGrid />
      </div>

      <div id="realisations">
        <h2 className="text-2xl font-medium mb-4">Exemples de dossiers réalisés</h2>
        <RealizationsGrid />
      </div>

      <CTASection />

      {/* Sections pour les villes avec style de cartes */}
      <div id="villes-desservies-administratif" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Nos zones d'intervention pour le montage administratif</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Carte Marseille */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_17_resultat.webp" alt="Montage administratif à Marseille" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-sky-600 dark:text-sky-400"><a href="/montage-administratif/marseille" className="hover:underline">Montage administratif à Marseille</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Facilitez vos <strong>démarches administratives à Marseille</strong> avec notre expertise locale pour permis de construire, déclarations préalables et conformité urbanistique.
            </p>
            <a href="/contact?service=montage-administratif-marseille" className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Dossier Administratif Marseille</a>
          </div>

          {/* Carte Aix-en-Provence */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_18_resultat.webp" alt="Montage administratif à Aix-en-Provence" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-amber-600 dark:text-amber-400"><a href="/montage-administratif/aix-en-provence" className="hover:underline">Montage administratif à Aix-en-Provence</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              À Aix-en-Provence, nous gérons vos <strong>dossiers administratifs</strong> avec rigueur et efficacité, en assurant le respect des réglementations locales pour tous vos projets.
            </p>
            <a href="/contact?service=montage-administratif-aix" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Dossier Administratif Aix</a>
          </div>

          {/* Carte Toulon */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_19_resultat.webp" alt="Montage administratif à Toulon" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-red-600 dark:text-red-400"><a href="/montage-administratif/toulon" className="hover:underline">Montage administratif à Toulon</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Notre équipe vous accompagne pour toutes vos <strong>procédures administratives à Toulon</strong>, garantissant la conformité de vos projets de construction ou de rénovation.
            </p>
            <a href="/contact?service=montage-administratif-toulon" className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Dossier Administratif Toulon</a>
          </div>

          {/* Carte Nice */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_20_resultat.webp" alt="Montage administratif à Nice" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-blue-400"><a href="/montage-administratif/nice" className="hover:underline">Montage administratif à Nice</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bénéficiez de notre connaissance des <strong>réglementations d'urbanisme à Nice</strong> pour un montage administratif serein et efficace de vos permis et déclarations.
            </p>
            <a href="/contact?service=montage-administratif-nice" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Dossier Administratif Nice</a>
          </div>

          {/* Carte Cannes */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_21_resultat.webp" alt="Montage administratif à Cannes" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-purple-600 dark:text-purple-400"><a href="/montage-administratif/cannes" className="hover:underline">Montage administratif à Cannes</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              À Cannes, nous assurons la gestion complète de vos <strong>dossiers administratifs</strong> pour des projets immobiliers conformes et sans tracas administratifs.
            </p>
            <a href="/contact?service=montage-administratif-cannes" className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Dossier Administratif Cannes</a>
          </div>

          {/* Carte Montage Administratif PACA */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_22_resultat.webp" alt="Montage administratif en PACA" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-green-600 dark:text-green-400"><a href="/montage-administratif/paca" className="hover:underline">Montage administratif en PACA</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Experts en <strong>montage administratif en PACA</strong>, nous simplifions vos démarches pour tous types de projets, de la conception à l'obtention des autorisations.
            </p>
            <a href="/contact?service=montage-administratif-paca" className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Dossier Administratif PACA</a>
          </div>
        </div>
      </div>

      {/* Section Solutions Techniques avec style de cartes */}
      <div id="solutions-techniques-administratif" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Nos Solutions pour vos Démarches</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Carte Permis de Construire */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_23_resultat.webp" alt="Dossier de Permis de Construire" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-orange-600 dark:text-orange-400"><a href="/montage-administratif/permis-de-construire" className="hover:underline">Dossiers de Permis de Construire (PC)</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Nous constituons et déposons vos <strong>dossiers de permis de construire</strong> pour maisons individuelles, extensions, piscines, et autres constructions neuves.
            </p>
            <a href="/contact?service=permis-construire" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Permis de Construire</a>
          </div>

          {/* Carte Déclaration Préalable */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="/images/prestations/PGR_24_resultat.webp" alt="Dossier de Déclaration Préalable de Travaux" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-teal-600 dark:text-teal-400"><a href="/montage-administratif/declaration-prealable" className="hover:underline">Déclarations Préalables de Travaux (DP)</a></h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Gestion complète de vos <strong>déclarations préalables</strong> pour modifications de façade, clôtures, abris de jardin, petites extensions, et autres travaux non soumis à PC.
            </p>
            <a href="/contact?service=declaration-prealable" className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">Devis Déclaration Préalable</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MontageAdministratifContent;