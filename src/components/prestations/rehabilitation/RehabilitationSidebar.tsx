import React from 'react';
import { Phone, Mail, Calculator, Calendar } from 'lucide-react';
import Button from '@/components/common/Button';
import { InternalLinkText } from '@/utils/internalLinking';

const RehabilitationSidebar = () => {
  return (
    <div className="sticky top-24 space-y-8">
      <div className="bg-card p-2 rounded-xl shadow-sm border border-border">
        <h3 className="text-xl font-semibold mb-4">Besoin d'un devis ?</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          <InternalLinkText
            text="Contactez-nous pour échanger sur votre projet de réhabilitation et obtenir un devis personnalisé auprès de notre maître d'œuvre à Marseille ou en région PACA."
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
      
      <div className="bg-amber-50 dark:bg-amber-900/20 p-2 rounded-xl border border-amber-100 dark:border-amber-800">
        <h3 className="text-xl font-semibold mb-4 text-amber-700 dark:text-amber-300">Expertise en Réhabilitation Patrimoniale</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
            <a href="/prestations/rehabilitation#processus" className="hover:underline">Diagnostic patrimonial et structurel</a>
          </li>
          <li className="flex items-start">
            <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
            <a href="/prestations/rehabilitation#restauration-facades" className="hover:underline">Restauration de façades anciennes</a>
          </li>
          <li className="flex items-start">
            <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
            <a href="/prestations/rehabilitation#consolidation-structurelle" className="hover:underline">Consolidation structurelle et reprise en sous-œuvre</a>
          </li>
          <li className="flex items-start">
            <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
            <a href="/prestations/rehabilitation#rehabilitation-energetique" className="hover:underline">Réhabilitation énergétique respectueuse</a>
          </li>
          <li className="flex items-start">
            <span className="text-amber-600 dark:text-amber-400 mr-2">•</span>
            <a href="/prestations/rehabilitation#realisations" className="hover:underline">Valorisation d'immeubles et monuments</a>
          </li>
        </ul>
        <div className="mt-6 space-y-4">
          <Button href="/contact?service=rehabilitation" variant="outline" className="w-full justify-center bg-card hover:bg-muted/50 border-amber-300 hover:border-amber-400 text-amber-700 hover:text-amber-600 dark:border-amber-700 dark:hover:border-amber-600 dark:text-amber-300 dark:hover:text-amber-200">
            <Calculator className="mr-2 h-4 w-4" /> Devis réhabilitation
          </Button>
          <Button href="/nos-realisations?tag=rehabilitation" variant="outline" className="w-full justify-center bg-card hover:bg-muted/50 border-amber-300 hover:border-amber-400 text-amber-700 hover:text-amber-600 dark:border-amber-700 dark:hover:border-amber-600 dark:text-amber-300 dark:hover:text-amber-200">
            <Calendar className="mr-2 h-4 w-4" /> Nos réhabilitations
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RehabilitationSidebar;