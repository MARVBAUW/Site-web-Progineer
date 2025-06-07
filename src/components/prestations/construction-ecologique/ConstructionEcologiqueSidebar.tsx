import React from 'react';
import { Phone, Mail, Calculator, Calendar } from 'lucide-react';
import Button from '@/components/common/Button';
import { InternalLinkText } from '@/utils/internalLinking';

const ConstructionEcologiqueSidebar = () => {
  return (
    <div className="sticky top-24 space-y-8">
      <div className="bg-card p-2 rounded-xl shadow-sm border border-border">
        <h3 className="text-xl font-semibold mb-4">Besoin d'un devis ?</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          <InternalLinkText
            text="Contactez-nous pour échanger sur votre projet de construction écologique et obtenir un devis personnalisé auprès de notre maître d'œuvre à Marseille ou en région PACA."
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
      
      <div className="bg-green-50 dark:bg-green-900/20 p-2 rounded-xl border border-green-100 dark:border-green-800">
        <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">Focus Construction Écologique</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-green-600 dark:text-green-400 mr-2">•</span>
            <a href="/prestations/construction-ecologique#conception-bioclimatique" className="hover:underline">Conception bioclimatique</a>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 dark:text-green-400 mr-2">•</span>
            <a href="/prestations/construction-ecologique#materiaux-biosources" className="hover:underline">Matériaux biosourcés et durables</a>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 dark:text-green-400 mr-2">•</span>
            <a href="/prestations/construction-ecologique#isolation-biosourcee" className="hover:underline">Isolation biosourcée performante</a>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 dark:text-green-400 mr-2">•</span>
            <a href="/prestations/construction-ecologique#systemes-energies-renouvelables" className="hover:underline">Systèmes d'énergies renouvelables</a>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 dark:text-green-400 mr-2">•</span>
            <a href="/prestations/construction-ecologique#normes-re2020" className="hover:underline">Respect des normes RE2020</a>
          </li>
        </ul>
        <div className="mt-6 space-y-4">
          <Button href="/contact?service=construction-ecologique" variant="outline" className="w-full justify-center bg-card hover:bg-muted/50 border-green-300 hover:border-green-400 text-green-700 hover:text-green-600 dark:border-green-700 dark:hover:border-green-600 dark:text-green-300 dark:hover:text-green-200">
            <Calculator className="mr-2 h-4 w-4" /> Devis construction écologique
          </Button>
          <Button href="/nos-realisations?tag=ecologique" variant="outline" className="w-full justify-center bg-card hover:bg-muted/50 border-green-300 hover:border-green-400 text-green-700 hover:text-green-600 dark:border-green-700 dark:hover:border-green-600 dark:text-green-300 dark:hover:text-green-200">
            <Calendar className="mr-2 h-4 w-4" /> Voir nos projets écologiques
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConstructionEcologiqueSidebar;