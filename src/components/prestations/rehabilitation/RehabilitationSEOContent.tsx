import React from 'react';
import SEOContentSection from '@/components/seo/SEOContentSection';

const RehabilitationSEOContent = () => {
  const seoContent = {
    title: "Réhabilitation de bâtiments anciens et patrimoniaux en PACA",
    content: {
      introduction: "Progineer est spécialisé dans la réhabilitation de bâtiments anciens, patrimoniaux ou industriels en région PACA. Nous redonnons vie à votre patrimoine tout en respectant son caractère architectural et en intégrant les normes actuelles de confort, de sécurité et de performance énergétique.",
      sections: [
        {
          title: "Notre expertise en réhabilitation",
          content: "Nous effectuons un diagnostic technique et une valorisation patrimoniale, la conception de projets sur mesure, la gestion des contraintes réglementaires et techniques. Nous vous accompagnons de la conception à la livraison."
        },
        {
          title: "Valorisez votre patrimoine avec Progineer",
          content: "Notre équipe vous accompagne à chaque étape pour transformer et valoriser durablement votre bien à Marseille, Nice, Toulon et dans toute la région Provence-Alpes-Côte d'Azur. Faites confiance à notre savoir-faire pour une réhabilitation réussie."
        }
      ]
    },
    faq: [
      {
        question: "Quels types de bâtiments réhabilitez-vous ?",
        answer: "Nous intervenons sur tous types de bâtiments : immeubles d'habitation, maisons de maître, bâtiments industriels, locaux commerciaux, monuments historiques (en collaboration avec les ABF). Chaque projet est unique."
      },
      {
        question: "Comment gérez-vous les contraintes des bâtiments anciens ?",
        answer: "Notre expertise couvre les diagnostics structurels, la gestion de l'amiante/plomb, le respect des éléments architecturaux d'origine, et l'intégration discrète des techniques modernes (isolation, ventilation, etc.)."
      },
      {
        question: "La réhabilitation améliore-t-elle la performance énergétique ?",
        answer: "Absolument. C'est un axe majeur de nos projets. Nous proposons des solutions d'isolation thermique par l'intérieur ou l'extérieur (si possible), le remplacement des menuiseries, et l'installation de systèmes de chauffage/ventilation performants, tout en préservant le cachet du bâtiment."
      }
    ],
    schemaType: "Service",
    keywords: [
      "réhabilitation bâtiment ancien PACA",
      "rénovation patrimoine Marseille",
      "transformation immeuble Nice",
      "maître d'oeuvre réhabilitation Toulon",
      "valorisation patrimoine architectural",
      "mise aux normes bâtiment ancien"
    ]
  };

  return <SEOContentSection {...seoContent} />;
};

export default RehabilitationSEOContent;