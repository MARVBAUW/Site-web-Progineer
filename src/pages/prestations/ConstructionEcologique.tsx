import React from 'react';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';
import SEOFooter from '@/components/common/SEOFooter';
import PrestationsSubNav from '@/components/prestations/PrestationsSubNav';
import ConstructionEcologiqueHero from '@/components/prestations/construction-ecologique/ConstructionEcologiqueHero';
import ConstructionEcologiqueSidebar from '@/components/prestations/construction-ecologique/ConstructionEcologiqueSidebar';
import ConstructionEcologiqueContent from '@/components/prestations/construction-ecologique/ConstructionEcologiqueContent';
import ConstructionEcologiqueSEOContent from '@/components/prestations/construction-ecologique/ConstructionEcologiqueSEOContent';
import SEOContentSection from '@/components/common/SEOContentSection';


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
        title="Construction écologique et habitat durable en PACA"
        intro="Progineer s'engage pour un habitat plus respectueux de l'environnement en région PACA. Nous concevons et réalisons des projets de construction écologique, en privilégiant les matériaux biosourcés, la conception bioclimatique et les solutions énergétiques performantes."
        bullets={[
          "Conception bioclimatique : orientation, apports solaires, ventilation naturelle",
          "Utilisation de matériaux écologiques et biosourcés (bois, paille, chanvre, ouate de cellulose...)",
          "Optimisation de l'isolation thermique et de l'étanchéité à l'air",
          "Intégration de systèmes d'énergies renouvelables (solaire thermique, photovoltaïque)",
          "Accompagnement vers les labels environnementaux (Passivhaus, BDM...)"
        ]}
        conclusion="Optez pour une construction écologique avec Progineer à Marseille, Aix-en-Provence, Avignon et sur toute la Côte d'Azur, pour un habitat sain, confortable, économe en énergie et à faible impact environnemental."
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
