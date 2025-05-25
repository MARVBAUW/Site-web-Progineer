
import React from 'react';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';
import SEOFooter from '@/components/common/SEOFooter';
import PrestationsSubNav from '@/components/prestations/PrestationsSubNav';
import ConstructionNeuveHero from '@/components/prestations/construction-neuve/ConstructionNeuveHero';
import ConstructionNeuveSidebar from '@/components/prestations/construction-neuve/ConstructionNeuveSidebar';
import ConstructionNeuveContent from '@/components/prestations/construction-neuve/ConstructionNeuveContent';
import ConstructionNeuveSEOContent from '@/components/prestations/construction-neuve/ConstructionNeuveSEOContent';

const ConstructionNeuve = () => {
  return (
    <>
      <SEO 
        title="Constructeur Maison Individuelle PACA | Construction Sur Mesure Marseille | Progineer"
        description="Constructeur spécialisé en maisons individuelles à Marseille et en PACA. Créez la maison de vos rêves avec Progineer, constructeur-maître d'œuvre expert en construction clé en main."
        keywords="constructeur maison individuelle, constructeur marseille, construction maison sur mesure PACA, constructeur de maison, maison clé en main, constructeur local PACA"
        canonicalUrl="https://progineer.fr/prestations-maitre-oeuvre/construction-neuve"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Construction de maison neuve",
          "provider": {
            "@type": "ProfessionalService",
            "name": "Progineer",
            "image": "https://progineer.fr/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Marseille",
              "addressRegion": "PACA",
              "addressCountry": "FR"
            }
          },
          "areaServed": {
            "@type": "State",
            "name": "Provence-Alpes-Côte d'Azur"
          },
          "serviceType": "Construction neuve",
          "description": "Service de construction de maisons individuelles sur mesure en PACA"
        }}
      />

      <ConstructionNeuveHero />
      <PrestationsSubNav activeService="construction-neuve" />

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <ConstructionNeuveSidebar />
            </div>
            <div className="lg:col-span-3">
              <ConstructionNeuveContent />
            </div>
          </div>
        </Container>
      </section>

      <ConstructionNeuveSEOContent />

      <SEOFooter 
        text="Construction de maisons individuelles sur mesure en PACA par Progineer, constructeur de maison et maître d'œuvre spécialisé. Notre expertise de constructeur de maison local vous accompagne dans tous vos travaux de construction clé en main à Marseille, Nice, Toulon et dans toute la région Provence-Alpes-Côte d'Azur pour créer la maison de vos rêves."
        additionalKeywords={[
          "constructeur de maison", 
          "constructeur de maison individuelle", 
          "travaux de construction", 
          "travaux construction maison", 
          "constructeur de maison marseille", 
          "construction de maison PACA", 
          "travaux gros œuvre", 
          "constructeur de maison moderne"
        ]}
      />
    </>
  );
};

export default ConstructionNeuve;
