import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  pageUrl: string;
  businessType?: 'homepage' | 'service' | 'contact' | 'about';
  preventDuplicates?: boolean;
}

/**
 * Composant SEO avancé pour optimiser les performances et éviter les doublons
 * de données structurées. Résout les problèmes Google Search Console.
 */
const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  pageUrl,
  businessType = 'service',
  preventDuplicates = true
}) => {
  // Générer les micro-données optimisées selon le type de page
  const getOptimizedSchema = () => {
    const baseUrl = 'https://progineer.fr';
    const lastModified = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
    
    switch (businessType) {
      case 'homepage':
        return {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "@id": `${baseUrl}/#organization`,
          "name": "Progineer",
          "alternateName": "Progineer PACA",
          "description": "Maître d'œuvre spécialisé en construction, rénovation et extension de maisons sur mesure en région PACA.",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/images/progineer-logo.png`,
            "width": 400,
            "height": 200
          },
          "image": {
            "@type": "ImageObject",
            "url": `${baseUrl}/images/progineer-social-card.jpg`,
            "width": 1200,
            "height": 630
          },
          "telephone": "+33783762156",
          "email": "progineer.moe@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Marseille",
            "addressRegion": "Provence-Alpes-Côte d'Azur",
            "postalCode": "13000",
            "addressCountry": "FR",
            "streetAddress": "Marseille"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 43.296482,
            "longitude": 5.369780
          },
          "areaServed": [
            { "@type": "City", "name": "Marseille" },
            { "@type": "City", "name": "Nice" },
            { "@type": "City", "name": "Toulon" },
            { "@type": "City", "name": "Cannes" },
            { "@type": "City", "name": "Aix-en-Provence" },
            { "@type": "AdministrativeArea", "name": "PACA" }
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 43.296482,
              "longitude": 5.369780
            },
            "geoRadius": "100000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Services de maîtrise d'œuvre",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Construction neuve",
                  "description": "Construction de maisons individuelles sur mesure",
                  "url": `${baseUrl}/prestations-maitre-oeuvre/construction-neuve`
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Rénovation",
                  "description": "Rénovation complète et réhabilitation de bâtiments",
                  "url": `${baseUrl}/prestations-maitre-oeuvre/renovation`
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Extension",
                  "description": "Extension et agrandissement de maisons",
                  "url": `${baseUrl}/prestations-maitre-oeuvre/extension`
                }
              }
            ]
          },
          "priceRange": "€€€",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "18:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/progineer.org",
            "https://www.instagram.com/progineer.moe",
            "https://www.linkedin.com/company/progineer-moe"
          ],
          "dateModified": lastModified
        };
      
      default:
        return null;
    }
  };

  const optimizedSchema = getOptimizedSchema();

  return (
    <Helmet>
      {/* Optimisations techniques critiques */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Optimisations Core Web Vitals */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link rel="dns-prefetch" href="https://progineer.fr" />
      
      {/* Optimisations pour la géolocalisation */}
      <meta name="geo.region" content="FR-PAC" />
      <meta name="geo.placename" content="Marseille, PACA" />
      <meta name="geo.position" content="43.296482;5.369780" />
      <meta name="ICBM" content="43.296482, 5.369780" />
      
      {/* Données structurées optimisées */}
      {optimizedSchema && !preventDuplicates && (
        <script type="application/ld+json">
          {JSON.stringify(optimizedSchema)}
        </script>
      )}
      
      {/* Amélioration de l'indexation des ressources */}
      <meta name="referrer" content="origin-when-cross-origin" />
      
      {/* Optimisation mobile */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Prévention du duplicate content */}
      <link rel="canonical" href={pageUrl} />
      
      {/* Optimisation pour les moteurs de recherche français */}
      <meta name="google-site-verification" content="" />
      <meta name="msvalidate.01" content="" />
    </Helmet>
  );
};

export default SEOOptimizer; 