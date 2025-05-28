import React from 'react';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';
import SEOFooter from '@/components/common/SEOFooter';
import PrestationsSubNav from '@/components/prestations/PrestationsSubNav';
import RehabilitationHero from '@/components/prestations/rehabilitation/RehabilitationHero';
import RehabilitationSidebar from '@/components/prestations/rehabilitation/RehabilitationSidebar';
import RehabilitationContent from '@/components/prestations/rehabilitation/RehabilitationContent';
import RehabilitationSEOContent from '@/components/prestations/rehabilitation/RehabilitationSEOContent';
import SEOContentSection from '@/components/prestations/rehabilitation/SEOContentSection';

const Rehabilitation = () => {
  return (
    <>
      <SEO
        title="Réhabilitation complète de bâtiments anciens PACA | Progineer"
        description="Experts en réhabilitation de bâtiments anciens ou patrimoniaux en PACA. Redonner vie et fonctionnalité à votre bien tout en préservant son caractère."
        keywords="réhabilitation bâtiment, réhabilitation patrimoine, transformation immeuble, rénovation lourde, PACA"
        canonicalUrl="https://progineer.fr/prestations-maitre-oeuvre/rehabilitation"
      />

      <RehabilitationHero />
      <PrestationsSubNav activeService="rehabilitation" />

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <RehabilitationSidebar />
            </div>
            <div className="lg:col-span-3">
              <RehabilitationContent />
            </div>
          </div>
        </Container>
      </section>

      <RehabilitationSEOContent />

      <SEOContentSection
        title="Réhabilitation de bâtiments anciens et patrimoniaux en PACA"
        intro="Progineer est spécialisé dans la réhabilitation de bâtiments anciens, patrimoniaux ou industriels en région PACA. Nous redonnons vie à votre patrimoine tout en respectant son caractère architectural et en intégrant les normes actuelles de confort, de sécurité et de performance énergétique."
        bullets={[
          "Diagnostic technique et valorisation patrimoniale",
          "Conception de projets sur mesure",
          "Gestion des contraintes réglementaires et techniques",
          "Accompagnement de la conception à la livraison"
        ]}
        conclusion="Notre équipe vous accompagne à chaque étape pour transformer et valoriser durablement votre bien à Marseille, Nice, Toulon et dans toute la région Provence-Alpes-Côte d'Azur."
      />

      <SEOFooter 
        text="Réhabilitation de bâtiments anciens en PACA par Progineer, maître d'œuvre spécialisé dans la transformation et la valorisation du patrimoine bâti. Notre expertise technique et notre sensibilité architecturale nous permettent de mener à bien vos projets de réhabilitation à Marseille, Nice, Toulon et dans toute la région PACA."
        additionalKeywords={[
          "réhabilitation immeuble ancien", 
          "transformation bâtiment Marseille", 
          "mise aux normes bâti ancien", 
          "rénovation lourde patrimoine", 
          "reconversion bâtiment PACA"
        ]}
      />
    </>
  );
};
export default Rehabilitation;
