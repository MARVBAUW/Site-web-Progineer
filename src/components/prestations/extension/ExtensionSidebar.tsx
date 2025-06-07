
import React from 'react';
import { Phone, Mail, Calculator, Calendar } from 'lucide-react';
import Button from '@/components/common/Button';
import { InternalLinkText } from '@/utils/internalLinking';

const ExtensionSidebar = () => {
  return (
    <div className="sticky top-24 space-y-8">
      <div className="bg-card p-2 rounded-xl shadow-sm border border-border">
        <h3 className="text-xl font-semibold mb-4">Besoin d'un devis ?</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          <InternalLinkText
            text="Contactez-nous pour échanger sur votre projet d'extension de maison et obtenir un devis personnalisé auprès de notre maître d'œuvre à Marseille ou en région PACA."
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
      
      <div className="bg-sky-50 dark:bg-sky-900/20 p-2 rounded-xl border border-sky-100 dark:border-sky-800">
        <h3 className="text-xl font-semibold mb-4 text-sky-700 dark:text-sky-300">Nos Solutions d'Extension</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-sky-600 dark:text-sky-400 mr-2">•</span>
            <InternalLinkText text="Extension horizontale" href="/prestations/extension-maison#services" />
          </li>
          <li className="flex items-start">
            <span className="text-sky-600 dark:text-sky-400 mr-2">•</span>
            <InternalLinkText text="Surélévation de toiture" href="/prestations/extension-maison/surelevation" />
          </li>
          <li className="flex items-start">
            <span className="text-sky-600 dark:text-sky-400 mr-2">•</span>
            <InternalLinkText text="Extension à ossature bois" href="/prestations/extension-maison/ossature-bois" />
          </li>
          <li className="flex items-start">
            <span className="text-sky-600 dark:text-sky-400 mr-2">•</span>
            <InternalLinkText text="Vérandas et jardins d'hiver" href="/prestations/extension-maison#services" />
          </li>
          <li className="flex items-start">
            <span className="text-sky-600 dark:text-sky-400 mr-2">•</span>
            <InternalLinkText text="Création de suite parentale, bureau..." href="/prestations/extension-maison#options" />
          </li>
        </ul>
        <div className="mt-6 space-y-4">
          <Button href="/contact?service=extension" variant="outline" className="w-full justify-center bg-card hover:bg-muted/50 border-sky-300 hover:border-sky-400 text-sky-700 hover:text-sky-600 dark:border-sky-700 dark:hover:border-sky-600 dark:text-sky-300 dark:hover:text-sky-200">
            <Calculator className="mr-2 h-4 w-4" /> Devis pour votre extension
          </Button>
          <Button href="/nos-realisations?tag=extension" variant="outline" className="w-full justify-center bg-card hover:bg-muted/50 border-sky-300 hover:border-sky-400 text-sky-700 hover:text-sky-600 dark:border-sky-700 dark:hover:border-sky-600 dark:text-sky-300 dark:hover:text-sky-200">
            <Calendar className="mr-2 h-4 w-4" /> Voir nos extensions réalisées
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExtensionSidebar;
