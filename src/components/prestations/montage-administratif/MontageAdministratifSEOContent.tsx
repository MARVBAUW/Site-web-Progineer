import React from 'react';
import SEOContentSection from '@/components/seo/SEOContentSection';

const MontageAdministratifSEOContent = () => {
  const seoContent = {
    title: "Montage administratif et permis de construire en PACA",
    content: {
      introduction: "Progineer vous accompagne dans toutes vos démarches administratives liées à la construction, la rénovation ou l'extension de votre bien immobilier en région PACA. Notre équipe prend en charge la constitution des dossiers de permis de construire, les déclarations préalables, et assure un suivi rigoureux auprès des services d'urbanisme pour garantir la conformité et la rapidité de vos projets.",
      sections: [
        {
          title: "Nos services pour vos démarches administratives",
          content: "Nous proposons une analyse des règles d'urbanisme applicables, la préparation complète des dossiers administratifs (permis de construire, déclaration préalable), le suivi des délais d'instruction et la gestion des éventuels recours. Bénéficiez d'une assistance personnalisée jusqu'à l'obtention des autorisations nécessaires."
        },
        {
          title: "Pourquoi choisir Progineer ?",
          content: "Faites confiance à notre expertise pour sécuriser vos démarches et optimiser les délais de réalisation de vos projets immobiliers à Marseille, Nice, Toulon et dans toute la région Provence-Alpes-Côte d'Azur. Nous mettons notre savoir-faire à votre service pour une tranquillité d'esprit totale."
        }
      ]
    },
    faq: [
      {
        question: "Quels documents sont nécessaires pour un permis de construire ?",
        answer: "Les documents varient selon le projet, mais incluent généralement un plan de situation, un plan de masse, des plans de coupe, des façades, une notice descriptive, et des photographies. Nous vous aidons à rassembler toutes les pièces requises."
      },
      {
        question: "Combien de temps prend l'instruction d'un permis de construire ?",
        answer: "Le délai d'instruction légal est généralement de 2 mois pour une maison individuelle et de 3 mois pour les autres projets. Ce délai peut être majoré dans certains cas (secteur protégé, etc.). Nous assurons un suivi proactif."
      },
      {
        question: "Que faire en cas de refus de permis de construire ?",
        answer: "En cas de refus, il est possible de faire un recours gracieux auprès de la mairie, un recours contentieux auprès du tribunal administratif, ou de modifier le projet pour répondre aux motifs du refus. Nous vous conseillons sur la meilleure stratégie."
      }
    ],
    schemaType: "Service",
    keywords: [
      "montage dossier permis construire PACA",
      "aide permis de construire Marseille",
      "conseil urbanisme Nice",
      "déclaration préalable travaux Toulon",
      "maître d'oeuvre démarches administratives",
      "accompagnement permis construire",
      "expert urbanisme PACA"
    ]
  };

  return <SEOContentSection {...seoContent} />;
};

export default MontageAdministratifSEOContent;