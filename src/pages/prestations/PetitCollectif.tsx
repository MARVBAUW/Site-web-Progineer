import React from 'react';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';
import SEOFooter from '@/components/common/SEOFooter';
import PrestationsSubNav from '@/components/prestations/PrestationsSubNav';
import PetitCollectifHero from '@/components/prestations/petit-collectif/PetitCollectifHero';
import PetitCollectifSidebar from '@/components/prestations/petit-collectif/PetitCollectifSidebar';
import PetitCollectifContent from '@/components/prestations/petit-collectif/PetitCollectifContent';
import PetitCollectifSEOContent from '@/components/prestations/petit-collectif/PetitCollectifSEOContent';
import SEOContentSection from '@/components/common/SEOContentSection';


const PetitCollectif = () => {
  return (
    <>
      <SEO
        title="Construction de petit collectif résidentiel PACA | Progineer"
        description="Maître d'œuvre spécialiste des petits collectifs résidentiels en PACA. De l'optimisation foncière à la livraison, nous concevons des immeubles de qualité."
        keywords="petit collectif résidentiel, construction immeuble, maître d'œuvre Marseille, R+2, R+3, PACA"
        canonicalUrl="https://progineer.fr/prestations-maitre-oeuvre/petit-collectif"
      />

      <PetitCollectifHero />
      <PrestationsSubNav activeService="petit-collectif" />

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <PetitCollectifSidebar />
            </div>
            <div className="lg:col-span-3">
              <PetitCollectifContent />
            </div>
          </div>
        </Container>
      </section>

      <PetitCollectifSEOContent />

      <SEOContentSection
        title="Construction de petits collectifs résidentiels en PACA"
        intro="Progineer est votre partenaire privilégié pour la conception et la réalisation de petits collectifs résidentiels en région PACA. Nous maîtrisons toutes les étapes, de l'étude de faisabilité à la livraison, en passant par l'optimisation foncière et la gestion des corps d'état."
        bullets={[
          "Optimisation de la constructibilité et de la rentabilité foncière",
          "Conception architecturale sur mesure (R+1, R+2, R+3...)",
          "Gestion complète du projet : permis de construire, suivi de chantier, livraison",
          "Respect des normes RT2012/RE2020 et des exigences de qualité",
          "Coordination efficace des entreprises et artisans locaux"
        ]}
        conclusion="Faites confiance à notre expertise pour vos projets de petits collectifs à Marseille, Aix-en-Provence, Toulon et sur toute la Côte d'Azur, garantissant des réalisations de qualité, durables et rentables."
      />

      <SEOFooter 
        text="Construction de petits collectifs résidentiels en PACA par Progineer, maître d'œuvre expert en promotion immobilière à taille humaine. De la conception à la réalisation, nous vous accompagnons dans tous vos projets immobiliers à Marseille, Nice, Toulon et dans toute la région PACA."
        additionalKeywords={[
          "immeubles résidentiels PACA", 
          "petit collectif Marseille", 
          "construction R+2 Nice", 
          "promotion immobilière Toulon", 
          "résidence petit collectif"
        ]}
      />
    </>
  );
};
export default PetitCollectif;
