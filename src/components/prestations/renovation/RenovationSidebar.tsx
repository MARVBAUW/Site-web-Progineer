
import React from 'react';
import { Phone, Mail, Calculator, Calendar } from 'lucide-react';
import Button from '@/components/common/Button';
import { InternalLinkText } from '@/utils/internalLinking';

const RenovationSidebar = () => {
  return (
    <div className="sticky top-24 space-y-8">
      <div className="bg-card p-2 rounded-xl shadow-sm border border-border">
        <h3 className="text-xl font-semibold mb-4">Besoin d'un devis ?</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          <InternalLinkText
            text="Contactez-nous pour échanger sur votre projet de rénovation et obtenir un devis personnalisé auprès de notre maître d'œuvre à Marseille ou en région PACA."
            maxOccurrences={2}
          />
        </p>
        <div className="space-y-4">
          <Button href="/contact" className="w-full justify-center">
            <Phone className="mr-2 h-4 w-4" /> Nous appeler
          </Button>
          <Button href="/contact" variant="outline" className="w-full justify-center">
            <Mail className="mr-2 h-4 w-4" /> Nous écrire
          </Button>
        </div>
      </div>
      
<div className="bg-khaki-50 p-2 rounded-xl border border-khaki-100">
        <h3 className="text-xl font-semibold mb-4">Focus sur la Rénovation Énergétique</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <a href="/prestations/renovation/isolation-thermique" className="hover:underline"><InternalLinkText text="Isolation thermique (ITE, ITI)" /></a>
          </li>
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <a href="/prestations/renovation/menuiseries-isolantes" className="hover:underline"><InternalLinkText text="Menuiseries isolantes (fenêtres, portes)" /></a>
          </li>
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <a href="/prestations/renovation/chauffage-performant" className="hover:underline"><InternalLinkText text="Systèmes de chauffage performants" /></a>
          </li>
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <a href="/prestations/renovation/ventilation-efficace" className="hover:underline"><InternalLinkText text="Ventilation efficace (VMC)" /></a>
          </li>
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <a href="/contact?subject=aides-renovation-energetique" className="hover:underline"><InternalLinkText text="Découvrir les aides financières" /></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RenovationSidebar;
