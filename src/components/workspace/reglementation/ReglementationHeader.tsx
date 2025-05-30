
import React from 'react';
import SEOHeader from '@/components/common/SEOHeader';
import { articles } from '../data/reglementationArticles';

export const ReglementationHeader: React.FC = () => {
  return (
    <>
      {/* SEO Enhancement with our new component */}
      <SEOHeader 
        title="Veille réglementaire construction et immobilier"
        description="Actualités et veille juridique pour les professionnels de la construction, architectes et maîtres d'œuvre. Nouvelles lois, règlements et normes du secteur de l'immobilier en PACA."
        keywords="veille réglementaire construction, actualité immobilier, nouvelles normes bâtiment, réglementation architecte, RE2020, loi climat résilience, DPE, PACA, Marseille"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Veille réglementaire de Progineer",
          "description": "Articles de veille juridique et réglementaire pour les professionnels de la construction et de l'immobilier en PACA",
          "publisher": {
            "@type": "Organization",
            "name": "Progineer",
            "logo": {
              "@type": "ImageObject",
              "url": "https://progineer.fr/images/progineer-logo.png"
            }
          },
          "blogPost": articles.slice(0, 5).map(article => ({
            "@type": "BlogPosting",
            "headline": article.title,
            "description": article.description,
            "datePublished": article.date,
            "author": {
              "@type": "Organization",
              "name": "Progineer"
            },
            "keywords": article.keywords.join(", ")
          }))
        }}
      />

      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Veille réglementaire construction et immobilier</h1>
        <p className="text-gray-600 dark:text-gray-300">L'actualité juridique et réglementaire du secteur de la construction et de l'immobilier, mise à jour régulièrement par notre intelligence artificielle spécialisée.</p>
      </div>
    </>
  );
};

export default ReglementationHeader;
