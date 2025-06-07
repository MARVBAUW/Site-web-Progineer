import React from 'react';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';
import SEOFooter from '@/components/common/SEOFooter';
import PrestationsSubNav from '@/components/prestations/PrestationsSubNav';
import OptimisationEspaceHero from '@/components/prestations/optimisation-espace/OptimisationEspaceHero';
import OptimisationEspaceSidebar from '@/components/prestations/optimisation-espace/OptimisationEspaceSidebar';
import OptimisationEspaceContent from '@/components/prestations/optimisation-espace/OptimisationEspaceContent';
import OptimisationEspaceSEOContent from '@/components/prestations/optimisation-espace/OptimisationEspaceSEOContent';
import SEOContentSection from '@/components/common/SEOContentSection';

const OptimisationEspace = () => {
  return (
    <>
      <SEO 
        title="Optimisation d'espace et aménagement intérieur en PACA | Progineer"
        description="Maximisez votre surface habitable grâce à nos solutions d'optimisation d'espace à Marseille et en PACA. Progineer, maître d'œuvre spécialiste de l'aménagement intelligent."
        keywords="optimisation d'espace, aménagement intérieur, gain de place, maître d'œuvre PACA, petit espace"
        canonicalUrl="https://progineer.fr/prestations-maitre-oeuvre/optimisation-espace"
      />

      <OptimisationEspaceHero />
      <PrestationsSubNav activeService="optimisation-espace" />

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <OptimisationEspaceSidebar />
            </div>
            <div className="lg:col-span-3">
              <OptimisationEspaceContent />
            </div>
          </div>
        </Container>
      </section>

      <OptimisationEspaceSEOContent />

      <SEOContentSection
        title="Optimisation d'espace : solutions d'aménagement intelligent en PACA"
        intro="L'optimisation de l'espace est un enjeu majeur, particulièrement dans les zones urbaines où chaque mètre carré compte. Notre expertise en tant que maître d'œuvre nous permet de repenser intelligemment vos espaces pour maximiser leur potentiel et créer des aménagements fonctionnels qui répondent parfaitement à vos besoins."
        bullets={[
          "Solutions d'agencement sur mesure et plans fonctionnels",
          "Gain de place grâce à des aménagements innovants",
          "Espaces multifonctionnels et rangements optimisés",
          "Approche personnalisée selon vos besoins et votre mode de vie"
        ]}
        conclusion="Confiez-nous l'optimisation de votre espace à Marseille, Nice, Toulon et dans toute la région Provence-Alpes-Côte d'Azur pour un habitat plus fonctionnel et agréable à vivre."
      />

      <SEOFooter 
        text="Optimisation d'espace à Marseille et en PACA par Progineer, maître d'œuvre spécialisé en aménagement intérieur. Nos experts vous accompagnent dans tous vos projets d'optimisation d'espace à Marseille, Nice, Toulon et dans toute la région Provence-Alpes-Côte d'Azur pour maximiser le potentiel de vos surfaces."
        additionalKeywords={[
          "gain de place habitat", 
          "aménagement optimal PACA", 
          "solutions petits espaces", 
          "agencement intelligent Marseille", 
          "optimisation surface habitable"
        ]}
      />
    </>
  );
};

export default OptimisationEspace;
