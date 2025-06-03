import React from 'react';
import ProcessSection from './sections/ProcessSection';
import SkillsGrid from './sections/SkillsGrid';
import RealizationsGrid from './sections/RealizationsGrid';
import CTASection from './sections/CTASection';

const MontageAdministratifContent = () => {
  return (
    <>
      <div id="overview">
        <h2 className="text-3xl font-semibold mb-6">Simplifiez vos démarches administratives</h2>
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
        <h3 className="text-2xl font-medium mb-4">Notre processus administratif</h3>
        <ProcessSection />
      </div>

      <div id="competences">
        <h3 className="text-2xl font-medium mb-4">Nos compétences en gestion administrative</h3>
        <SkillsGrid />
      </div>

      <div id="realisations">
        <h3 className="text-2xl font-medium mb-4">Exemples de dossiers réalisés</h3>
        <RealizationsGrid />
      </div>

      <div id="marseille" className="mt-8">
        <h3 className="text-2xl font-medium mb-4">Montage administratif à Marseille</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Notre équipe accompagne les particuliers et professionnels dans toutes leurs démarches administratives à Marseille. Nous connaissons parfaitement les spécificités locales et les exigences des services d'urbanisme de la ville.
        </p>
      </div>
      <div id="aix" className="mt-6">
        <h3 className="text-2xl font-medium mb-4">Montage administratif à Aix-en-Provence</h3>
        <p className="text-gray-600 dark:text-gray-300">
          À Aix-en-Provence, nous optimisons vos dossiers pour garantir des délais rapides et une conformité parfaite avec les règles d'urbanisme locales.
        </p>
      </div>
      <div id="toulon" className="mt-6">
        <h3 className="text-2xl font-medium mb-4">Montage administratif à Toulon</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Nous intervenons à Toulon et dans tout le Var pour faciliter vos démarches administratives, de la déclaration préalable au permis de construire.
        </p>
      </div>
      <div id="nice" className="mt-6">
        <h3 className="text-2xl font-medium mb-4">Montage administratif à Nice</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Notre expertise des procédures niçoises vous assure un accompagnement efficace et personnalisé pour tous vos projets.
        </p>
      </div>
      <div id="cannes" className="mt-6">
        <h3 className="text-2xl font-medium mb-4">Montage administratif à Cannes</h3>
        <p className="text-gray-600 dark:text-gray-300">
          À Cannes, nous prenons en charge la gestion complète de vos dossiers administratifs, pour des projets immobiliers en toute sérénité.
        </p>
      </div>

      <div id="demarches-en-ligne" className="mt-8">
        <h3 className="text-2xl font-medium mb-4">Démarches en ligne et gestion des recours</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Nous utilisons les plateformes numériques pour accélérer le dépôt et le suivi de vos dossiers. En cas de recours ou de demande complémentaire, notre équipe vous assiste à chaque étape.
        </p>
      </div>

      <CTASection />
    </>
  );
};

export default MontageAdministratifContent; 