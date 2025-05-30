import React from 'react';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';
import SEOFooter from '@/components/common/SEOFooter';
import PrestationsSubNav from '@/components/prestations/PrestationsSubNav';
import ExtensionHero from '@/components/prestations/extension/ExtensionHero';
import ExtensionSidebar from '@/components/prestations/extension/ExtensionSidebar';
import ExtensionContent from '@/components/prestations/extension/ExtensionContent';
import ExtensionSEOContent from '@/components/prestations/extension/ExtensionSEOContent';
import SEOContentSection from '@/components/prestations/extension/SEOContentSection';

const Extension = () => {
  return (
    <>
      <SEO 
        title="Extension de maison sur mesure en PACA | Maître d'œuvre Progineer"
        description="Spécialiste en extension de maison à Marseille et en PACA. Agrandissez votre espace habitable avec une extension sur-mesure réalisée par Progineer, votre maître d'œuvre expert."
        keywords="extension maison, agrandissement maison, extension sur-mesure, maître d'œuvre PACA, extension Marseille, surélévation, ajout étage"
        canonicalUrl="https://progineer.fr/prestations-maitre-oeuvre/extension"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Extension de maison",
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
          "serviceType": "Extension de maison",
          "description": "Service d'extension et d'agrandissement de maison sur mesure en PACA"
        }}
      />

      <ExtensionHero />
      <PrestationsSubNav activeService="extension" />

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <ExtensionSidebar />
            </div>
            <div className="lg:col-span-3">
              <ExtensionContent />
            </div>
          </div>
        </Container>
      </section>

      <ExtensionSEOContent />

      <SEOContentSection
        title="Extension de maison en PACA : l'expertise d'un maître d'œuvre"
        intro="L'extension de maison représente une solution idéale pour gagner de l'espace habitable sans déménager. En tant que maître d'œuvre spécialisé dans l'extension à Marseille et en région PACA, nous vous accompagnons dans la réalisation de votre projet d'agrandissement, qu'il s'agisse d'une extension traditionnelle, d'une surélévation ou d'un ajout d'étage."
        bullets={[
          "Solutions d'agrandissement sur mesure (extension, surélévation, ossature bois)",
          "Accompagnement expert de l'étude à la livraison",
          "Gestion des démarches administratives et permis de construire",
          "Respect des normes de construction et de la performance énergétique"
        ]}
        conclusion="Confiez votre projet d'extension à notre équipe pour valoriser et agrandir votre habitat à Marseille, Nice, Toulon et dans toute la région Provence-Alpes-Côte d'Azur."
      />

      <SEOFooter 
        text="Extension et agrandissement de maisons en PACA par Progineer, maître d'œuvre spécialisé dans les projets d'extension. Nos experts vous accompagnent dans tous vos projets d'agrandissement à Marseille, Nice, Toulon et dans toute la région Provence-Alpes-Côte d'Azur pour optimiser et valoriser votre habitat."
        additionalKeywords={[
          "extension maison contemporaine", 
          "agrandissement villa PACA", 
          "surélévation maison Marseille", 
          "véranda sur mesure", 
          "extension bois méditerranée"
        ]}
      />
    </>
  );
};

export default Extension;
