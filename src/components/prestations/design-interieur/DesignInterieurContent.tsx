import React from 'react';
import ProcessSection from './sections/ProcessSection';
import SkillsGrid from './sections/SkillsGrid';
import RealizationsGrid from './sections/RealizationsGrid';
import CTASection from './sections/CTASection';

const DesignInterieurContent = () => {
  return (
    <>
      <div id="overview">
        <h2 className="text-3xl font-semibold mb-6">Transformez votre intérieur</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Chez Progineer, notre équipe d'<strong>architectes d'intérieur</strong> crée des espaces qui vous ressemblent. Nous concevons des intérieurs harmonieux, fonctionnels et esthétiques qui répondent à vos besoins spécifiques et reflètent votre personnalité. Chaque projet est unique et bénéficie d'une approche personnalisée.
        </p>

        <div className="mb-12">
          <img 
            src="/images/prestations/PROGINEER-21-_resultat.webp" 
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
        <h3 className="text-2xl font-medium mb-4">Notre processus créatif</h3>
        <ProcessSection />
      </div>

      <div id="amenagement">
        <h3 className="text-2xl font-medium mb-4">Nos compétences en design</h3>
        <SkillsGrid />
      </div>

      <div id="realisations">
        <h3 className="text-2xl font-medium mb-4">Exemples de réalisations</h3>
        <RealizationsGrid />
      </div>

      <div id="marseille" className="mt-8">
        <h3 className="text-2xl font-medium mb-4">Design d'intérieur à Marseille</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Notre équipe de designers intervient dans tous les quartiers de Marseille pour transformer votre intérieur. Du Panier aux quartiers sud, en passant par les nouveaux aménagements d'Euroméditerranée, nous adaptons notre expertise aux spécificités de chaque lieu et de chaque style architectural.
        </p>
      </div>

      <div id="aix" className="mt-6">
        <h3 className="text-2xl font-medium mb-4">Design d'intérieur à Aix-en-Provence</h3>
        <p className="text-gray-600 dark:text-gray-300">
          À Aix-en-Provence, nous concevons des espaces intérieurs qui allient le charme provençal à la modernité. Nos designers savent valoriser les éléments architecturaux historiques tout en créant des espaces fonctionnels et contemporains.
        </p>
      </div>

      <div id="toulon" className="mt-6">
        <h3 className="text-2xl font-medium mb-4">Design d'intérieur à Toulon</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Notre équipe intervient également à Toulon et ses environs pour tous vos projets de design d'intérieur. De la réorganisation des espaces à la création d'ambiances personnalisées, nous transformons votre habitat pour qu'il vous ressemble.
        </p>
      </div>

      <div id="nice" className="mt-6">
        <h3 className="text-2xl font-medium mb-4">Design d'intérieur à Nice</h3>
        <p className="text-gray-600 dark:text-gray-300">
          À Nice, nous créons des intérieurs qui s'inspirent de la lumière méditerranéenne et des influences italiennes propres à la région. Nos designers connaissent parfaitement les spécificités de l'habitat niçois et proposent des solutions sur mesure.
        </p>
      </div>

      <div id="cannes" className="mt-6">
        <h3 className="text-2xl font-medium mb-4">Design d'intérieur à Cannes</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Pour vos projets à Cannes, nous concevons des espaces intérieurs qui reflètent l'élégance et le raffinement de la Côte d'Azur. Du choix des matériaux à la disposition des espaces, chaque détail est pensé pour créer un intérieur harmonieux et fonctionnel.
        </p>
      </div>

      <div id="domotique" className="mt-8">
        <h3 className="text-2xl font-medium mb-4">Intégration de solutions domotiques</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Nous intégrons les dernières innovations en matière de domotique pour rendre votre intérieur plus intelligent et connecté. Éclairage, chauffage, sécurité, multimédia : nous vous proposons des solutions adaptées à vos besoins pour un confort optimal.
        </p>
      </div>

      <div id="loft" className="mt-6">
        <h3 className="text-2xl font-medium mb-4">Aménagement de lofts et espaces atypiques</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Nous sommes spécialistes dans l'aménagement d'espaces atypiques comme les lofts, les mezzanines ou les combles. Notre approche créative nous permet de tirer le meilleur parti de ces volumes singuliers et de créer des espaces de vie originaux et fonctionnels.
        </p>
      </div>

      <CTASection />
    </>
  );
};

export default DesignInterieurContent;
