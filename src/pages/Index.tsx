import React, { useEffect, Suspense, lazy } from 'react';
import Hero from '../components/home/Hero';
import Container from '@/components/common/Container';
import { getBusinessStructuredData } from '../utils/googleBusiness';
import { EnhancedSEO } from '@/components/seo/EnhancedSEO';
import SEOFooter from '@/components/common/SEOFooter';
import ProjectCardWrapper from '@/components/realisations/ProjectCardWrapper';

// Lazy loading des composants non critiques
const ExpertiseSection = lazy(() => import('../components/home/ExpertiseSection'));
const Services = lazy(() => import('../components/home/Services'));
const Testimonials = lazy(() => import('../components/home/Testimonials'));
const CTASection = lazy(() => import('../components/home/CTASection'));
const StatsSection = lazy(() => import('../components/home/StatsSection'));
const LocationMap = lazy(() => import('../components/home/LocationMap'));
const InnovationHub = lazy(() => import('../components/home/InnovationHub'));

// Importation des données
import { projects } from '@/data/projects';

// Importation des feuilles de style pour les animations
import '../components/home/animations.css';

const Index = () => {
  // Ajouter du CSS dynamique pour améliorer les performances globales de la page
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
      }
      
      .perspective-700 {
        perspective: 700px;
      }
      
      .transform-style-3d {
        transform-style: preserve-3d;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Données structurées Schema.org
  const schemaData = {
    type: "ProfessionalService",
    name: "Progineer",
    description: "Cabinet d'architecture et maître d'œuvre spécialisé en construction, rénovation et extension de maisons sur mesure en région PACA. Expertise technique et coordination complète de projets.",
    url: "https://progineer.fr",
    image: "https://progineer.fr/images/progineer-social-card.webp",
    address: {
      streetAddress: "Marseille",
      addressLocality: "Marseille",
      addressRegion: "Provence-Alpes-Côte d'Azur",
      postalCode: "13000",
      addressCountry: "FR"
    },
    geo: {
      latitude: "43.296482",
      longitude: "5.369780"
    },
    areaServed: {
      type: "AdministrativeArea",
      name: "PACA"
    },
    additionalData: {
      "@type": "ProfessionalService",
      telephone: "+33783762156",
      email: "progineer.moe@gmail.com",
      priceRange: "€€€",
      foundingDate: "2020",
      numberOfEmployees: "5-10",
      slogan: "Votre architecte et maître d'œuvre en PACA",
      openingHours: "Mo-Fr 09:00-18:00",
      sameAs: [
        "https://www.facebook.com/people/Progineer-Ma%C3%AEtrise-Doeuvre/61572478063277/",
        "https://www.instagram.com/progineer_moe/",
        "https://www.linkedin.com/company/105527808/admin/dashboard/"
      ]
    }
  };

  return (
    <>
      <EnhancedSEO 
        title="Architecte & Maître d'œuvre Marseille | Constructeur Maison PACA | Progineer"
        description="Cabinet d'architecture et constructeur-maître d'œuvre à Marseille spécialisé en conception et construction de maisons individuelles. Expertise architecturale et coordination complète pour vos projets en PACA."
        keywords={[
          "architecte marseille",
          "maître d'œuvre PACA",
          "constructeur maison individuelle",
          "cabinet architecture",
          "construction sur mesure marseille",
          "architecte PACA",
          "constructeur marseille"
        ]}
        url="https://progineer.fr/"
        schemaData={schemaData}
      />
      
      <main className="w-full">
        <Hero />
        
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Chargement...</div>}>
          <ExpertiseSection />
          <Services />
          
          {/* Section des projets récents */}
          <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <Container>
              <h2 className="text-3xl font-bold mb-8 text-center">Nos Dernières Réalisations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.slice(0, 3).map((project) => (
                  <ProjectCardWrapper key={project.id} project={project} />
                ))}
              </div>
            </Container>
          </section>

          <StatsSection />
          <Testimonials />
          <LocationMap />
          <CTASection />
          <InnovationHub />
        </Suspense>
      </main>
      
      <SEOFooter 
        text="Votre architecte et maître d'œuvre à Marseille et en PACA. Progineer, cabinet d'architecture et constructeur spécialisé, assure la conception architecturale, la coordination des corps de métier et le respect des délais pour vos projets de construction et travaux de rénovation. Notre expertise technique d'architecte-constructeur garantit la réussite de votre projet immobilier en Provence-Alpes-Côte d'Azur."
        additionalKeywords={[
          "architecte marseille", 
          "constructeur de maison", 
          "constructeur maison individuelle", 
          "travaux construction", 
          "travaux de rénovation", 
          "maître d'œuvre marseille", 
          "cabinet architecture PACA", 
          "travaux maison individuelle", 
          "architecte constructeur"
        ]}
      />

      {/* Discreet backlink section */}
      <div className="sr-only">
        <a 
          href="https://www.maitredoeuvre.com/" 
          rel="nofollow" 
          target="_blank"
        >
          Annuaire de maitres d'oeuvre
        </a>
      </div>
    </>
  );
};

export default Index;
