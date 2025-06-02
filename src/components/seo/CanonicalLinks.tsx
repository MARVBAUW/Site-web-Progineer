import React from 'react';
import { Helmet } from 'react-helmet-async';

interface CanonicalLinksProps {
  url: string;
  alternateUrls?: {
    lang: string;
    url: string;
  }[];
}

export const CanonicalLinks: React.FC<CanonicalLinksProps> = ({
  url,
  alternateUrls = []
}) => {
  const baseUrl = 'https://progineer.fr';
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;

  return (
    <Helmet>
      {/* URL canonique principale */}
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
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />
    </Helmet>
  );
};
