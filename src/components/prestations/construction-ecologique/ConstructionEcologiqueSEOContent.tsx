import React from 'react';
import SEOContentSection from '@/components/seo/SEOContentSection';

const ConstructionEcologiqueSEOContent = () => {
  const seoContent = {
    title: "Construction écologique et bioclimatique en PACA",
    content: {
      introduction: "Progineer vous propose des solutions innovantes pour la construction de maisons écologiques, bioclimatiques et à faible impact environnemental en région PACA. Nous privilégions les matériaux biosourcés, l'ossature bois, et la conception passive pour garantir un habitat sain, confortable et économe en énergie.",
      sections: [
        {
          title: "Notre démarche éco-responsable",
          content: "Nous assurons une conception bioclimatique et une optimisation énergétique, l'utilisation de matériaux durables et locaux, le respect des normes environnementales (RE2020, BBC, etc.). Nous offrons un accompagnement global, de la conception à la réalisation."
        },
        {
          title: "Bâtir un avenir durable en PACA",
          content: "Faites confiance à notre expertise pour concrétiser votre projet de construction écologique à Marseille, Nice, Toulon et dans toute la région Provence-Alpes-Côte d'Azur. Ensemble, construisons des habitats respectueux de l'environnement et de votre bien-être."
        }
      ]
    },
    faq: [
      {
        question: "Qu'est-ce qu'une conception bioclimatique ?",
        answer: "C'est une approche qui vise à tirer le meilleur parti des conditions climatiques et de l'environnement du site (orientation, soleil, vent) pour réduire les besoins en chauffage, climatisation et éclairage artificiel. Cela passe par une bonne isolation, des ouvertures bien placées, des protections solaires, etc."
      },
      {
        question: "Quels matériaux biosourcés utilisez-vous ?",
        answer: "Nous privilégions le bois (ossature, bardage, isolation), la paille, le chanvre, la ouate de cellulose, le liège... Ces matériaux sont renouvelables, stockent du carbone et offrent d'excellentes performances thermiques et hygrométriques."
      },
      {
        question: "Une maison écologique est-elle plus chère ?",
        answer: "L'investissement initial peut être légèrement supérieur, mais il est rapidement amorti par les économies d'énergie significatives sur le long terme. De plus, de nombreuses aides financières existent pour encourager la construction écologique (MaPrimeRénov', éco-PTZ, etc.)."
      }
    ],
    schemaType: "Service",
    keywords: [
      "construction écologique PACA",
      "maison bioclimatique Marseille",
      "ossature bois Nice",
      "matériaux biosourcés Toulon",
      "habitat passif RE2020",
      "maître d'oeuvre éco-construction"
    ]
  };

  return <SEOContentSection {...seoContent} />;
};

export default ConstructionEcologiqueSEOContent;