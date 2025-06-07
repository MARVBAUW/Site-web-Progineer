import React from 'react';
import SEOContentSection from '@/components/seo/SEOContentSection';

const PetitCollectifSEOContent = () => {
  const seoContent = {
    title: "Construction de petits collectifs résidentiels en PACA",
    content: {
      introduction: "Progineer accompagne promoteurs et investisseurs dans la conception et la réalisation de petits immeubles résidentiels à taille humaine. Nous intervenons de l'optimisation foncière à la livraison, en passant par le montage administratif et la gestion de chantier, pour garantir des projets performants, durables et parfaitement intégrés dans leur environnement urbain.",
      sections: [
        {
          title: "Notre expertise en petits collectifs",
          content: "Nous réalisons une étude de faisabilité et une optimisation du foncier, une conception architecturale sur mesure, la gestion administrative et le suivi des autorisations. Nous assurons le respect des normes environnementales et de sécurité, avec un accompagnement personnalisé jusqu'à la livraison."
        },
        {
          title: "Votre partenaire de confiance en PACA",
          content: "Nos experts vous accompagnent à chaque étape pour assurer la réussite de votre projet immobilier à Marseille, Nice, Toulon et dans toute la région Provence-Alpes-Côte d'Azur. Nous sommes dédiés à la qualité et à la satisfaction de nos clients."
        }
      ]
    },
    faq: [
      {
        question: "Quelle est la taille typique d'un petit collectif que vous construisez ?",
        answer: "Nous nous spécialisons dans les immeubles de type R+2 à R+4, comprenant généralement entre 5 et 20 logements. L'objectif est de créer des résidences à taille humaine, bien intégrées et conviviales."
      },
      {
        question: "Comment optimisez-vous le foncier disponible ?",
        answer: "Nous analysons en détail le potentiel de chaque terrain (règles d'urbanisme, contraintes techniques, orientation) pour maximiser la surface constructible et la qualité des logements, tout en respectant l'environnement du projet."
      },
      {
        question: "Quelles garanties offrez-vous pour la construction ?",
        answer: "Tous nos projets bénéficient des garanties légales : garantie de parfait achèvement, garantie biennale et garantie décennale. Nous travaillons avec des artisans qualifiés et assurés pour une construction sereine."
      }
    ],
    schemaType: "Service",
    keywords: [
      "construction petit immeuble PACA",
      "promoteur petit collectif Marseille",
      "investissement immobilier Nice",
      "maître d'oeuvre collectif Toulon",
      "conception immeuble résidentiel",
      "optimisation foncière construction"
    ]
  };

  return <SEOContentSection {...seoContent} />;
};

export default PetitCollectifSEOContent;