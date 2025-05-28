import React from 'react';

interface FAQSEOSectionProps {
  prestation: string;
}

const faqParPrestation: Record<string, { question: string; reponse: string }[]> = {
  'montage administratif': [
    { question: 'Quelles sont les étapes pour obtenir un permis de construire ?', reponse: "Nous vous accompagnons dans la constitution du dossier, le dépôt en mairie, le suivi des échanges avec l'administration et la gestion des pièces complémentaires jusqu'à l'obtention de l'autorisation." },
    { question: 'Progineer peut-il gérer les recours administratifs ?', reponse: "Oui, nous assurons le suivi des recours des tiers et vous conseillons sur les démarches à entreprendre en cas de contestation." },
    { question: 'Intervenez-vous sur toute la région PACA ?', reponse: "Oui, nous intervenons à Marseille, Nice, Toulon et dans toute la région Provence-Alpes-Côte d'Azur pour vos dossiers administratifs." }
  ],
  'petit collectif': [
    { question: "Quelles sont les spécificités d'un petit collectif ?", reponse: "Un petit collectif se distingue par sa taille humaine (généralement moins de 20 logements), une gestion simplifiée et une meilleure intégration urbaine." },
    { question: 'Progineer prend-il en charge la gestion de chantier ?', reponse: "Oui, nous assurons la coordination des entreprises, le suivi du planning et la réception des travaux jusqu'à la livraison." },
    { question: 'Quels avantages à construire en petit collectif ?', reponse: "Optimisation foncière, coûts maîtrisés, qualité architecturale et attractivité pour les investisseurs ou occupants." }
  ],
  'réhabilitation': [
    { question: 'Quelle différence entre réhabilitation et rénovation ?', reponse: "La réhabilitation vise à transformer ou valoriser un bâtiment existant, souvent ancien, tout en respectant son caractère. La rénovation est plus centrée sur la remise à neuf sans transformation majeure." },
    { question: 'Progineer gère-t-il les démarches administratives ?', reponse: "Oui, nous prenons en charge les autorisations, les relations avec l'ABF (Architecte des Bâtiments de France) et le suivi des dossiers en mairie." },
    { question: 'Peut-on réhabiliter un bâtiment classé ?', reponse: "Oui, avec une expertise spécifique et en respectant les contraintes patrimoniales et réglementaires. Progineer a l'expérience de ce type de projets." }
  ],
  'construction écologique': [
    { question: "Qu'est-ce qu'une construction écologique ?", reponse: "C'est une construction qui privilégie les matériaux biosourcés, la performance énergétique, le respect de l'environnement et le confort des occupants." },
    { question: 'Progineer propose-t-il des maisons passives ?', reponse: "Oui, nous concevons des maisons passives et bioclimatiques adaptées au climat méditerranéen et à la réglementation RE2020." },
    { question: "Quels sont les avantages d'une extension écologique ?", reponse: "Réduction de l'empreinte carbone, économies d'énergie, valorisation du patrimoine et confort accru pour les occupants." }
  ]
};

const FAQSEOSection = ({ prestation }: FAQSEOSectionProps) => {
  const faq = faqParPrestation[prestation] || [];
  return (
    <section className="my-12" aria-labelledby="faq-title">
      <h2 id="faq-title" className="text-xl font-semibold mb-4">Questions fréquentes sur la {prestation}</h2>
      <dl className="space-y-6">
        {faq.map((item, idx) => (
          <div key={idx}>
            <dt className="font-medium text-gray-900 dark:text-white mb-1">{item.question}</dt>
            <dd className="text-gray-600 dark:text-gray-300 ml-2">{item.reponse}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default FAQSEOSection; 