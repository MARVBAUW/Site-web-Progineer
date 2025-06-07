import React from 'react';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';
import SEOFooter from '@/components/common/SEOFooter';
import PrestationsSubNav from '@/components/prestations/PrestationsSubNav';
import RehabilitationHero from '@/components/prestations/rehabilitation/RehabilitationHero';
import RehabilitationSidebar from '@/components/prestations/rehabilitation/RehabilitationSidebar';
import RehabilitationContent from '@/components/prestations/rehabilitation/RehabilitationContent';
import RehabilitationSEOContent from '@/components/prestations/rehabilitation/RehabilitationSEOContent';
import SEOContentSection from '@/components/common/SEOContentSection';


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
        title="Réhabilitation et transformation de bâtiments en PACA"
        intro="Progineer redonne vie à vos bâtiments anciens ou existants en région PACA. Nous sommes spécialisés dans la réhabilitation complète, la transformation et la mise aux normes de tous types de biens, du patrimoine remarquable aux structures plus modestes nécessitant une seconde jeunesse."
        bullets={[
          "Diagnostic structurel et pathologique du bâtiment existant",
          "Conception de projets de réhabilitation respectueux du bâti et innovants",
          "Gestion des contraintes techniques et réglementaires (accessibilité, sécurité, thermique)",
          "Valorisation du patrimoine architectural et amélioration du confort",
          "Coordination des travaux de démolition, gros œuvre, second œuvre et finitions"
        ]}
        conclusion="Confiez-nous la réhabilitation de votre bien à Marseille, Aix-en-Provence, Cannes ou ailleurs en PACA pour une transformation réussie, alliant respect du caractère originel et performances modernes."
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
