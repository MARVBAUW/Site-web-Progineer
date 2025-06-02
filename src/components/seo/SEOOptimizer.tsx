import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOOptimizerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  type?: string;
  url?: string;
}

/**
 * Composant SEO avancé pour optimiser les performances et éviter les doublons
 * de données structurées. Résout les problèmes Google Search Console.
 */
export const SEOOptimizer: React.FC<SEOOptimizerProps> = ({
  title = 'Progineer - Maître d\'œuvre à Marseille',
  description = 'Progineer, maître d\'œuvre à Marseille, spécialiste en construction, rénovation et extension de maisons. Expertise en optimisation énergétique et design d\'intérieur.',
  keywords = ['maître d\'œuvre', 'construction', 'rénovation', 'extension', 'Marseille', 'PACA'],
  image = 'https://progineer.fr/images/og-image.jpg',
  type = 'website',
  url = 'https://progineer.fr'
}) => {
  return (
    <Helmet>
      {/* Balises meta de base */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Optimisations Core Web Vitals */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://progineer.fr" />
      
      {/* Balises supplémentaires */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="fr" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Progineer" />
    </Helmet>
  );
};

export default SEOOptimizer; 