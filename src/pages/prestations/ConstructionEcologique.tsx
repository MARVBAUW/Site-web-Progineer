import React from 'react';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';
import SEOFooter from '@/components/common/SEOFooter';
import PrestationsSubNav from '@/components/prestations/PrestationsSubNav';
import ConstructionEcologiqueHero from '@/components/prestations/construction-ecologique/ConstructionEcologiqueHero';
import ConstructionEcologiqueSidebar from '@/components/prestations/construction-ecologique/ConstructionEcologiqueSidebar';
import ConstructionEcologiqueContent from '@/components/prestations/construction-ecologique/ConstructionEcologiqueContent';
import ConstructionEcologiqueSEOContent from '@/components/prestations/construction-ecologique/ConstructionEcologiqueSEOContent';
import SEOContentSection from '@/components/prestations/construction-ecologique/SEOContentSection';

const ConstructionEcologique = () => {
  return (
    <>
      <SEO
        title="Construction écologique et bioclimatique | Maître d'œuvre PACA"
        description="Construction écologique en région PACA : maisons bois, matériaux biosourcés, conception bioclimatique et bâtiments passifs par Progineer, maître d'œuvre éco-responsable."
        keywords="construction écologique, maison bois, matériaux biosourcés, bioclimatique, passif, RE2020, PACA"
        canonicalUrl="https://progineer.fr/prestations-maitre-oeuvre/construction-ecologique"
      />

      <ConstructionEcologiqueHero />
      <PrestationsSubNav activeService="construction-ecologique" />

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <ConstructionEcologiqueSidebar />
            </div>
            <div className="lg:col-span-3">
              <ConstructionEcologiqueContent />
            </div>
          </div>
        </Container>
      </section>

      <ConstructionEcologiqueSEOContent />

      <SEOContentSection
        title="Construction écologique et bioclimatique en PACA"
        intro="Progineer vous propose des solutions innovantes pour la construction de maisons écologiques, bioclimatiques et à faible impact environnemental en région PACA. Nous privilégions les matériaux biosourcés, l'ossature bois, et la conception passive pour garantir un habitat sain, confortable et économe en énergie."
        bullets={[
          "Conception bioclimatique et optimisation énergétique",
          "Utilisation de matériaux durables et locaux",
          "Respect des normes environnementales (RE2020, BBC, etc.)",
          "Accompagnement global, de la conception à la réalisation"
        ]}
        conclusion="Faites confiance à notre expertise pour concrétiser votre projet de construction écologique à Marseille, Nice, Toulon et dans toute la région Provence-Alpes-Côte d'Azur."
      />

      <SEOFooter 
        text="Construction écologique en région PACA par Progineer, maître d'œuvre spécialisé en habitat durable et éco-construction. Nos solutions innovantes en ossature bois, conception bioclimatique et matériaux biosourcés répondent aux défis environnementaux actuels tout en s'adaptant parfaitement au climat méditerranéen de Marseille, Nice, Toulon et toute la région PACA."
        additionalKeywords={[
          "maison écologique PACA", 
          "construction bois Marseille", 
          "habitat bioclimatique", 
          "matériaux biosourcés méditerranée", 
          "bâtiment basse consommation"
        ]}
      />
    </>
  );
};
export default ConstructionEcologique;
