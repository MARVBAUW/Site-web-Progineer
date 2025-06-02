import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SchemaOrgData } from './SchemaOrgData';

interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  type?: string;
  url: string;
  noIndex?: boolean;
  noFollow?: boolean;
  alternateUrls?: {
    lang: string;
    url: string;
  }[];
  schemaData?: {
    type: string;
    name: string;
    description: string;
    url: string;
    image?: string;
    address?: {
      streetAddress?: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    geo?: {
      latitude: string;
      longitude: string;
    };
    areaServed?: {
      type: string;
      name: string;
    };
    potentialAction?: {
      type: string;
      target: string;
    };
    itemListElement?: Array<{
      "@type": string;
      position: number;
      name: string;
      description: string;
      url?: string;
      image?: string;
    }>;
    additionalData?: Record<string, any>;
  };
}

export const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  keywords = [],
  image = 'https://progineer.fr/images/og-image.jpg',
  type = 'website',
  url,
  noIndex = false,
  noFollow = false,
  alternateUrls = [],
  schemaData
}) => {
  const baseUrl = 'https://progineer.fr';
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
  
  // Créer la directive robots
  const robotsContent = [
    noIndex ? 'noindex' : 'index',
    noFollow ? 'nofollow' : 'follow',
    'max-snippet:-1',
    'max-image-preview:large',
    'max-video-preview:-1'
  ].join(', ');

  return (
    <>
      <Helmet>
        {/* Balises meta de base */}
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords.length > 0 && (
          <meta name="keywords" content={keywords.join(', ')} />
        )}
        
        {/* Directives robots */}
        <meta name="robots" content={robotsContent} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={fullUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        
        {/* URL canonique */}
        <link rel="canonical" href={fullUrl} />
        
        {/* URLs alternatives pour les versions linguistiques */}
        {alternateUrls.map(({ lang, url }) => (
          <link
            key={lang}
            rel="alternate"
            hrefLang={lang}
            href={url.startsWith('http') ? url : `${baseUrl}${url}`}
          />
        ))}
        
        {/* URL par défaut pour les langues non spécifiées */}
        {alternateUrls.length > 0 && (
          <link rel="alternate" hrefLang="x-default" href={fullUrl} />
        )}
        
        {/* Optimisations Core Web Vitals */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href={baseUrl} />
        
        {/* Balises supplémentaires */}
        <meta name="language" content="fr" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Progineer" />
      </Helmet>

      {/* Données structurées Schema.org */}
      {schemaData && (
        <SchemaOrgData
          type={schemaData.type}
          name={schemaData.name}
          description={schemaData.description}
          url={schemaData.url}
          image={schemaData.image}
          address={schemaData.address}
          geo={schemaData.geo}
          areaServed={schemaData.areaServed}
          potentialAction={schemaData.potentialAction}
          itemListElement={schemaData.itemListElement}
          additionalData={schemaData.additionalData}
        />
      )}
    </>
  );
};
