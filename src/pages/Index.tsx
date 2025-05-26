
import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import ExpertiseSection from '../components/home/ExpertiseSection';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';
import StatsSection from '../components/home/StatsSection';
import LocationMap from '../components/home/LocationMap';
import InnovationHub from '../components/home/InnovationHub';
import { getBusinessStructuredData } from '../utils/googleBusiness';
import SEO from '../components/common/SEO';
import SEOFooter from '@/components/common/SEOFooter';

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

  return (
    <>
      <SEO 
        title="Architecte & Maître d'œuvre Marseille | Constructeur Maison PACA | Progineer"
        description="Cabinet d'architecture et constructeur-maître d'œuvre à Marseille spécialisé en conception et construction de maisons individuelles. Expertise architecturale et coordination complète pour vos projets en PACA."
        keywords="architecte marseille, maître d'œuvre PACA, constructeur maison individuelle, cabinet architecture, construction sur mesure marseille, architecte PACA, constructeur marseille"
        canonicalUrl="https://progineer.fr/"
        structuredData={getBusinessStructuredData()}
      />
      
      <main className="overflow-hidden">
        <div className="sr-only" role="heading" aria-level={1}>Architecte et Maître d'œuvre à Marseille | Constructeur de Maisons PACA</div>
        <Hero />
        <ExpertiseSection />
        <Services />
        <StatsSection />
        <Testimonials />
        <LocationMap />
        <CTASection />
        <InnovationHub />
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
