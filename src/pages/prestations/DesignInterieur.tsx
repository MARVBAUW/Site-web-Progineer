import React from 'react';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';
import SEOFooter from '@/components/common/SEOFooter';
import PrestationsSubNav from '@/components/prestations/PrestationsSubNav';
import DesignInterieurHero from '@/components/prestations/design-interieur/DesignInterieurHero';
import DesignInterieurSidebar from '@/components/prestations/design-interieur/DesignInterieurSidebar';
import DesignInterieurContent from '@/components/prestations/design-interieur/DesignInterieurContent';
import DesignInterieurSEOContent from '@/components/prestations/design-interieur/DesignInterieurSEOContent';
import SEOContentSection from '@/components/prestations/design-interieur/SEOContentSection';

const DesignInterieur = () => {
  return (
    <>
      <SEO 
        title="Architecte d'Intérieur Marseille | Design Espace PACA | Progineer"
        description="Architecte d'intérieur expert à Marseille et en PACA. Créez des espaces harmonieux et fonctionnels avec Progineer, architecte d'intérieur spécialisé en aménagement sur-mesure."
        keywords="architecte d'intérieur marseille, design d'intérieur PACA, aménagement espace, architecte intérieur, conception espace PACA, architecte d'intérieur expert"
        canonicalUrl="https://progineer.fr/prestations-maitre-oeuvre/design-interieur"
      />

      <DesignInterieurHero />
      <PrestationsSubNav activeService="design-interieur" />

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <DesignInterieurSidebar />
            </div>
            <div className="lg:col-span-3">
              <DesignInterieurContent />
            </div>
          </div>
        </Container>
      </section>

      <DesignInterieurSEOContent />

      <SEOContentSection
        title="Design d'intérieur : créez des espaces qui vous ressemblent en PACA"
        intro="Le design d'intérieur va bien au-delà de la simple décoration : c'est l'art de créer des espaces qui allient esthétique et fonctionnalité. Notre expertise en tant qu'architecte d'intérieur nous permet de transformer vos espaces en lieux de vie uniques, parfaitement adaptés à votre style de vie et à vos aspirations."
        bullets={[
          "Approche créative et personnalisée pour chaque projet",
          "Harmonie des matériaux, des couleurs et des styles",
          "Gestion complète du projet, du concept à la réalisation",
          "Valorisation de votre intérieur et optimisation de l'espace"
        ]}
        conclusion="Faites confiance à notre équipe pour sublimer votre intérieur à Marseille, Nice, Toulon et dans toute la région Provence-Alpes-Côte d'Azur."
      />

      <SEOFooter 
        text="Architecte d'intérieur à Marseille et en PACA par Progineer, cabinet spécialisé en conception d'espaces. Nos architectes d'intérieur vous accompagnent dans tous vos projets de design intérieur à Marseille, Nice, Toulon et dans toute la région Provence-Alpes-Côte d'Azur pour créer des espaces qui vous ressemblent."
        additionalKeywords={[
          "architecte d'intérieur marseille", 
          "architecte intérieur PACA", 
          "cabinet architecture intérieure", 
          "conception espace intérieur", 
          "architecte d'intérieur expert", 
          "design architectural intérieur"
        ]}
      />
    </>
  );
};

export default DesignInterieur;
