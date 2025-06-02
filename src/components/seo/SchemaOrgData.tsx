import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaOrgDataProps {
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
  }>;
  additionalData?: Record<string, any>;
}

export const SchemaOrgData: React.FC<SchemaOrgDataProps> = ({
  type,
  name,
  description,
  url,
  image,
  address,
  geo,
  areaServed,
  potentialAction,
  itemListElement,
  additionalData = {}
}) => {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    description,
    url,
    ...(image && { image }),
    ...(address && {
      address: {
        '@type': 'PostalAddress',
        ...address
      }
    }),
    ...(geo && {
      geo: {
        '@type': 'GeoCoordinates',
        ...geo
      }
    }),
    ...(areaServed && {
      areaServed: {
        '@type': areaServed.type,
        name: areaServed.name
      }
    }),
    ...(potentialAction && {
      potentialAction: {
        '@type': potentialAction.type,
        target: potentialAction.target
      }
    }),
    ...(itemListElement && { itemListElement }),
    ...additionalData
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}; 