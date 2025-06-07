import React from 'react';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';
import SEOFooter from '@/components/common/SEOFooter';
import PrestationsSubNav from '@/components/prestations/PrestationsSubNav';
import RenovationHero from '@/components/prestations/renovation/RenovationHero';
import RenovationSidebar from '@/components/prestations/renovation/RenovationSidebar';
import RenovationContent from '@/components/prestations/renovation/RenovationContent';
import RenovationSEOContent from '@/components/prestations/renovation/RenovationSEOContent';
import SEOContentSection from '@/components/common/SEOContentSection';

const Renovation = () => {
  return (
    <>
      <SEO 
        title="Rénovation complète de maisons et appartements en PACA | Progineer"
        description="Experts en rénovation à Marseille et en PACA. Transformez votre habitat avec Progineer, maître d'œuvre spécialisé en rénovation complète de maisons et appartements."
        keywords="rénovation maison, rénovation appartement, transformation habitat, maître d'œuvre PACA, rénovation complète"
        canonicalUrl="https://progineer.fr/prestations-maitre-oeuvre/renovation"
      />

      <RenovationHero />
      <PrestationsSubNav activeService="renovation" />

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <RenovationSidebar />
            </div>
            <div className="lg:col-span-3">
              <RenovationContent />
            </div>
          </div>
        </Container>
      </section>

      <RenovationSEOContent />

      <SEOContentSection
        title="Rénovation de maison et d'appartement en PACA"
        intro="La rénovation d'une maison ou d'un appartement est un projet complexe qui nécessite l'expertise d'un professionnel. En tant que maître d'œuvre spécialisé en rénovation à Marseille et en région PACA, nous vous accompagnons dans la transformation de votre habitat, qu'il s'agisse d'une rénovation énergétique, d'une rénovation partielle ou d'une réhabilitation complète."
        bullets={[
          "Approche globale de la rénovation (audit, conception, livraison)",
          "Rénovation énergétique pour optimiser le confort et les économies",
          "Travaux sur mesure adaptés à vos besoins et à votre budget",
          "Respect de l'architecture locale et des normes en vigueur"
        ]}
        conclusion="Faites confiance à notre équipe pour transformer durablement votre bien à Marseille, Nice, Toulon et dans toute la région Provence-Alpes-Côte d'Azur."
      />

      <SEOFooter 
        text="Travaux de rénovation de maisons et d'appartements en PACA par Progineer, maître d'œuvre spécialisé en travaux de transformation d'habitat. Nos experts vous accompagnent dans tous vos travaux de rénovation à Marseille, Nice, Toulon et dans toute la région Provence-Alpes-Côte d'Azur pour améliorer votre confort et valoriser votre patrimoine."
        additionalKeywords={[
          "travaux de rénovation", 
          "travaux rénovation maison", 
          "travaux de rénovation appartement", 
          "travaux rénovation PACA", 
          "travaux électricité rénovation", 
          "travaux plomberie rénovation", 
          "coût travaux rénovation", 
          "travaux isolation thermique"
        ]}
      />
    </>
  );
};

export default Renovation;
