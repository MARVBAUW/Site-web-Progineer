import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ServiceData {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed: string[];
  offers?: {
    name: string;
    description: string;
    priceRange?: string;
  }[];
}

interface ServiceStructuredDataProps {
  service: ServiceData;
}

/**
 * Composant pour générer les données structurées des services
 * Améliore la visibilité dans les résultats de recherche locaux
 */
const ServiceStructuredData: React.FC<ServiceStructuredDataProps> = ({ service }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "url": service.url,
    "serviceType": service.serviceType,
    "provider": {
      "@type": "Organization",
      "name": service.provider.name,
      "url": service.provider.url,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Marseille",
        "addressRegion": "Provence-Alpes-Côte d'Azur",
        "postalCode": "13000",
        "addressCountry": "FR"
      },
      "telephone": "+33783762156",
      "email": "progineer.moe@gmail.com"
    },
    "areaServed": service.areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "hasOfferCatalog": service.offers ? {
      "@type": "OfferCatalog",
      "name": `Offres ${service.name}`,
      "itemListElement": service.offers.map(offer => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": offer.name,
          "description": offer.description
        },
        ...(offer.priceRange && { "priceRange": offer.priceRange })
      }))
    } : undefined
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default ServiceStructuredData;

/**
 * Données des services Progineer pour les données structurées
 */
export const progineeerServices = {
  constructionNeuve: {
    name: "Construction de maisons neuves",
    description: "Construction de maisons individuelles sur mesure en région PACA. Conception architecturale, coordination des travaux et suivi de chantier.",
    url: "https://progineer.fr/prestations-maitre-oeuvre/construction-neuve",
    serviceType: "Construction",
    provider: {
      name: "Progineer",
      url: "https://progineer.fr"
    },
    areaServed: ["Marseille", "Nice", "Toulon", "Cannes", "Aix-en-Provence", "Fréjus"],
    offers: [
      {
        name: "Maison contemporaine",
        description: "Construction de maison moderne avec design contemporain",
        priceRange: "€€€"
      },
      {
        name: "Maison traditionnelle",
        description: "Construction de maison dans le style architectural régional",
        priceRange: "€€€"
      }
    ]
  },
  renovation: {
    name: "Rénovation de maisons",
    description: "Rénovation complète et réhabilitation de bâtiments existants. Modernisation, amélioration énergétique et restructuration.",
    url: "https://progineer.fr/prestations-maitre-oeuvre/renovation",
    serviceType: "Rénovation",
    provider: {
      name: "Progineer",
      url: "https://progineer.fr"
    },
    areaServed: ["Marseille", "Nice", "Toulon", "Cannes", "Aix-en-Provence", "Fréjus"],
    offers: [
      {
        name: "Rénovation énergétique",
        description: "Amélioration de la performance énergétique du bâtiment",
        priceRange: "€€"
      },
      {
        name: "Rénovation complète",
        description: "Restructuration totale de l'habitat",
        priceRange: "€€€"
      }
    ]
  },
  extension: {
    name: "Extension de maisons",
    description: "Extension et agrandissement de maisons existantes. Création d'espaces supplémentaires adaptés à vos besoins.",
    url: "https://progineer.fr/prestations-maitre-oeuvre/extension",
    serviceType: "Extension",
    provider: {
      name: "Progineer",
      url: "https://progineer.fr"
    },
    areaServed: ["Marseille", "Nice", "Toulon", "Cannes", "Aix-en-Provence", "Fréjus"],
    offers: [
      {
        name: "Extension horizontale",
        description: "Agrandissement au niveau du sol",
        priceRange: "€€"
      },
      {
        name: "Surélévation",
        description: "Extension verticale avec étage supplémentaire",
        priceRange: "€€€"
      }
    ]
  },
  designInterieur: {
    name: "Design d'intérieur",
    description: "Conception et aménagement d'espaces intérieurs. Optimisation de l'espace et création d'ambiances sur mesure.",
    url: "https://progineer.fr/prestations-maitre-oeuvre/design-interieur",
    serviceType: "Design",
    provider: {
      name: "Progineer",
      url: "https://progineer.fr"
    },
    areaServed: ["Marseille", "Nice", "Toulon", "Cannes", "Aix-en-Provence", "Fréjus"],
    offers: [
      {
        name: "Aménagement complet",
        description: "Conception globale de l'espace intérieur",
        priceRange: "€€"
      },
      {
        name: "Décoration d'intérieur",
        description: "Conseil en décoration et mobilier",
        priceRange: "€"
      }
    ]
  }
}; 