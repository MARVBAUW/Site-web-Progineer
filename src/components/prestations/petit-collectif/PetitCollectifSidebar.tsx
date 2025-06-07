import React from 'react';
import { Phone, Mail, Calculator, Calendar } from 'lucide-react';
import Button from '@/components/common/Button';
import { InternalLinkText } from '@/utils/internalLinking';

const PetitCollectifSidebar = () => {
  return (
    <div className="sticky top-24 space-y-8">
      <div className="bg-card p-2 rounded-xl shadow-sm border border-border">
        <h3 className="text-xl font-semibold mb-4">Besoin d'un devis ?</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          <InternalLinkText
            text="Contactez-nous pour échanger sur votre projet de petit collectif et obtenir un devis personnalisé auprès de notre maître d'œuvre à Marseille ou en région PACA."
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
      
      <div class="bg-teal-50 dark:bg-teal-900/20 p-2 rounded-xl border border-teal-100 dark:border-teal-800">
        <h3 class="text-xl font-semibold mb-4 text-teal-700 dark:text-teal-300">Focus Petit Collectif</h3>
        <ul className="space-y-2">
          <li class="flex items-start">
            <span class="text-teal-600 dark:text-teal-400 mr-2">•</span>
            <a href="/prestations/petit-collectif#expertise" className="hover:underline">Optimisation foncière</a>
          </li>
          <li class="flex items-start">
            <span class="text-teal-600 dark:text-teal-400 mr-2">•</span>
            <a href="/prestations/petit-collectif#expertise" className="hover:underline">Conception architecturale sur mesure</a>
          </li>
          <li class="flex items-start">
            <span class="text-teal-600 dark:text-teal-400 mr-2">•</span>
            <a href="/prestations/petit-collectif#expertise" className="hover:underline">Suivi de chantier rigoureux</a>
          </li>
          <li class="flex items-start">
            <span class="text-teal-600 dark:text-teal-400 mr-2">•</span>
            <a href="/prestations/petit-collectif#normes" className="hover:underline">Respect des normes (RE2020, HQE)</a>
          </li>
          <li class="flex items-start">
            <span class="text-teal-600 dark:text-teal-400 mr-2">•</span>
            <a href="/prestations/petit-collectif#normes" className="hover:underline">Accompagnement et gestion copropriété</a>
          </li>
        </ul>
        <div className="mt-6 space-y-4">
          <Button href="/contact?service=petit-collectif" variant="outline" className="w-full justify-center bg-card hover:bg-muted/50 border-teal-300 hover:border-teal-400 text-teal-700 hover:text-teal-600 dark:border-teal-700 dark:hover:border-teal-600 dark:text-teal-300 dark:hover:text-teal-200">
            <Calculator className="mr-2 h-4 w-4" /> Devis pour votre collectif
          </Button>
          <Button href="/nos-realisations?tag=collectif" variant="outline" className="w-full justify-center bg-card hover:bg-muted/50 border-teal-300 hover:border-teal-400 text-teal-700 hover:text-teal-600 dark:border-teal-700 dark:hover:border-teal-600 dark:text-teal-300 dark:hover:text-teal-200">
            <Calendar className="mr-2 h-4 w-4" /> Voir nos collectifs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PetitCollectifSidebar;