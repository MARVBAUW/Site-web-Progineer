import React from 'react';
import Container from '@/components/common/Container';
import SEO from '@/components/common/SEO';
import SEOFooter from '@/components/common/SEOFooter';
import PrestationsSubNav from '@/components/prestations/PrestationsSubNav';
import MontageAdministratifHero from '@/components/prestations/montage-administratif/MontageAdministratifHero';
import MontageAdministratifSidebar from '@/components/prestations/montage-administratif/MontageAdministratifSidebar';
import MontageAdministratifContent from '@/components/prestations/montage-administratif/MontageAdministratifContent';
import MontageAdministratifSEOContent from '@/components/prestations/montage-administratif/MontageAdministratifSEOContent';
import SEOContentSection from '@/components/common/SEOContentSection';


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
        intro="Progineer vous accompagne dans toutes vos démarches administratives liées à vos projets de construction ou de rénovation en région PACA. Nous assurons le montage complet de vos dossiers de permis de construire, déclarations préalables, et autres autorisations d'urbanisme."
        bullets={[
          "Analyse de la faisabilité réglementaire de votre projet",
          "Constitution et dépôt des dossiers (PC, DP, AT)",
          "Suivi de l'instruction auprès des services administratifs",
          "Interface avec les architectes des bâtiments de France (ABF)",
          "Optimisation des délais et sécurisation juridique"
        ]}
        conclusion="Notre expertise vous garantit une gestion sereine et efficace de vos démarches administratives à Marseille, Nice, Toulon et dans toute la région Provence-Alpes-Côte d'Azur."
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
