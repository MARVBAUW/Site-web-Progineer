import React from 'react';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';
import SEOFooter from '@/components/common/SEOFooter';
import PrestationsSubNav from '@/components/prestations/PrestationsSubNav';
import DesignInterieurHero from '@/components/prestations/design-interieur/DesignInterieurHero';
import DesignInterieurSidebar from '@/components/prestations/design-interieur/DesignInterieurSidebar';
import DesignInterieurContent from '@/components/prestations/design-interieur/DesignInterieurContent';
import DesignInterieurSEOContent from '@/components/prestations/design-interieur/DesignInterieurSEOContent';

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
