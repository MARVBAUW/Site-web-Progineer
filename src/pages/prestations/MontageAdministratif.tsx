import React from 'react';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';
import SEOFooter from '@/components/common/SEOFooter';
import PrestationsSubNav from '@/components/prestations/PrestationsSubNav';
import MontageAdministratifHero from '@/components/prestations/montage-administratif/MontageAdministratifHero';
import MontageAdministratifSidebar from '@/components/prestations/montage-administratif/MontageAdministratifSidebar';
import MontageAdministratifContent from '@/components/prestations/montage-administratif/MontageAdministratifContent';
import MontageAdministratifSEOContent from '@/components/prestations/montage-administratif/MontageAdministratifSEOContent';
import SEOContentSection from '@/components/prestations/montage-administratif/SEOContentSection';

const MontageAdministratif = () => {
  return (
    <>
      <SEO 
        title="Montage administratif & Permis de construire | Maître d'œuvre PACA"
        description="Expert en montage administratif et permis de construire en région PACA. Accompagnement personnalisé pour tous vos dossiers d'urbanisme à Marseille, Nice et Toulon."
        keywords="montage administratif, permis de construire, dossier urbanisme, maître d'œuvre PACA, autorisation travaux"
        canonicalUrl="https://progineer.fr/prestations-maitre-oeuvre/montage-administratif"
      />

      <MontageAdministratifHero />
      <PrestationsSubNav activeService="montage-administratif" />

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <MontageAdministratifSidebar />
            </div>
            <div className="lg:col-span-3">
              <MontageAdministratifContent />
            </div>
          </div>
        </Container>
      </section>

      <MontageAdministratifSEOContent />

      <SEOContentSection
        title="Montage administratif et permis de construire en PACA"
        intro="Progineer vous accompagne dans toutes vos démarches administratives liées à la construction, la rénovation ou l'extension de votre bien immobilier en région PACA. Notre équipe prend en charge la constitution des dossiers de permis de construire, les déclarations préalables, et assure un suivi rigoureux auprès des services d'urbanisme pour garantir la conformité et la rapidité de vos projets."
        bullets={[
          "Analyse des règles d'urbanisme applicables",
          "Préparation complète des dossiers administratifs",
          "Suivi des délais d'instruction et gestion des recours",
          "Assistance personnalisée jusqu'à l'obtention des autorisations"
        ]}
        conclusion="Faites confiance à notre expertise pour sécuriser vos démarches et optimiser les délais de réalisation de vos projets immobiliers à Marseille, Nice, Toulon et dans toute la région Provence-Alpes-Côte d'Azur."
      />

      <SEOFooter 
        text="Montage administratif et permis de construire en région PACA par Progineer, maître d'œuvre spécialisé dans les démarches d'urbanisme. Notre expertise vous garantit une gestion optimale de vos dossiers administratifs à Marseille, Nice, Toulon et dans toute la région Provence-Alpes-Côte d'Azur."
        additionalKeywords={[
          "permis de construire PACA", 
          "déclaration préalable Marseille", 
          "dossier urbanisme Nice", 
          "autorisation travaux Toulon", 
          "montage administratif construction"
        ]}
      />
    </>
  );
};
export default MontageAdministratif;
