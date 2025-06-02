import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface SEOBreadcrumbProps {
  items: BreadcrumbItem[];
}

/**
 * Composant de fil d'Ariane optimisé pour le SEO avec données structurées
 */
export const SEOBreadcrumb: React.FC<SEOBreadcrumbProps> = ({ items }) => {
  const baseUrl = 'https://progineer.fr';
  
  // Générer les données structurées pour le fil d'Ariane
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      'item': `${baseUrl}${item.path}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <nav aria-label="Fil d'Ariane" className="py-2">
        <ol className="flex flex-wrap items-center text-sm">
          <li className="flex items-center">
            <Link to="/" className="text-gray-600 hover:text-progineer-gold">
              Accueil
            </Link>
            <span className="mx-2 text-gray-400">/</span>
          </li>
          
          {items.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index === items.length - 1 ? (
                <span className="text-gray-900 font-medium">{item.label}</span>
              ) : (
                <>
                  <Link 
                    to={item.path}
                    className="text-gray-600 hover:text-progineer-gold"
                  >
                    {item.label}
                  </Link>
                  <span className="mx-2 text-gray-400">/</span>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};
