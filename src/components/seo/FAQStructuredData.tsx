import React from 'react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQStructuredDataProps {
  faqs: FAQItem[];
  pageUrl?: string;
}

/**
 * Composant pour générer automatiquement les données structurées FAQ
 * Améliore les chances d'apparaître dans les rich snippets Google
 */
const FAQStructuredData: React.FC<FAQStructuredDataProps> = ({
  faqs,
  pageUrl = 'https://progineer.fr/faq'
}) => {
  // Générer les données structurées FAQ selon le format Schema.org
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq, index) => ({
      "@type": "Question",
      "@id": `${pageUrl}#faq-${index + 1}`,
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Validation des données
  const validFaqs = faqs.filter(faq => 
    faq.question && faq.question.trim() !== '' &&
    faq.answer && faq.answer.trim() !== ''
  );

  if (validFaqs.length === 0) {
    console.warn('FAQStructuredData: Aucune FAQ valide fournie');
    return null;
  }

  if (validFaqs.length !== faqs.length) {
    console.warn('FAQStructuredData: Certaines FAQ sont invalides et ont été exclues');
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
    </Helmet>
  );
};

export default FAQStructuredData;

/**
 * Hook pour générer facilement des données FAQ pour Progineer
 */
export const useProgineeerFAQs = (): FAQItem[] => {
  return [
    {
      question: "Qu'est-ce qu'un maître d'œuvre ?",
      answer: "Un maître d'œuvre est un professionnel qui coordonne et supervise l'ensemble des travaux de construction ou de rénovation. Il assure la liaison entre le client et les différents corps de métier, garantit le respect des délais, du budget et de la qualité des travaux."
    },
    {
      question: "Quelle est la différence entre un architecte et un maître d'œuvre ?",
      answer: "L'architecte conçoit les plans et l'esthétique du projet, tandis que le maître d'œuvre se concentre sur la coordination et la réalisation des travaux. Chez Progineer, nous combinons les deux expertises pour un service complet."
    },
    {
      question: "Dans quelles zones intervenez-vous ?",
      answer: "Progineer intervient dans toute la région PACA : Marseille, Nice, Toulon, Cannes, Aix-en-Provence, Fréjus et leurs environs. Nous nous déplaçons dans un rayon de 100 km autour de Marseille."
    },
    {
      question: "Combien coûte une prestation de maîtrise d'œuvre ?",
      answer: "Le coût varie selon la complexité et l'ampleur du projet. Nous proposons un devis gratuit et personnalisé. En général, nos honoraires représentent entre 8% et 15% du montant total des travaux."
    },
    {
      question: "Combien de temps dure un projet de construction ?",
      answer: "La durée dépend du type de projet : 6 à 12 mois pour une construction neuve, 3 à 8 mois pour une rénovation complète, 2 à 4 mois pour une extension. Nous établissons un planning détaillé dès le début du projet."
    },
    {
      question: "Proposez-vous des garanties sur vos travaux ?",
      answer: "Oui, tous nos projets bénéficient des garanties légales : garantie de parfait achèvement (1 an), garantie biennale (2 ans) et garantie décennale (10 ans). Nous souscrivons également une assurance responsabilité civile professionnelle."
    }
  ];
}; 