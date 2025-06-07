
import React from 'react';
import { Phone, Mail, Calculator, Calendar } from 'lucide-react';
import Button from '@/components/common/Button';
import { InternalLinkText } from '@/utils/internalLinking';

const ConstructionNeuveSidebar = () => {
  return (
    <div className="sticky top-24 space-y-8">
      <div className="bg-card p-2 rounded-xl shadow-sm border border-border">
        <h3 className="text-xl font-semibold mb-4">Besoin d'un devis ?</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          <InternalLinkText
            text="Contactez-nous pour échanger sur votre projet de construction neuve et obtenir un devis personnalisé auprès de notre maître d'œuvre à Marseille ou en région PACA."
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
        <h3 className="text-xl font-semibold mb-4">Nos Prestations de Construction Neuve</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <a href="/construction-neuve#services" className="hover:underline"><InternalLinkText text="Conception architecturale sur mesure" /></a>
          </li>
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <a href="/construction-neuve#types-maisons" className="hover:underline"><InternalLinkText text="Villas modernes et maisons contemporaines" /></a>
          </li>
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <a href="/construction-neuve/construction-ecologique" className="hover:underline"><InternalLinkText text="Maisons écologiques et RE2020" /></a>
          </li>
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <a href="/construction-neuve#maison-traditionnelle" className="hover:underline"><InternalLinkText text="Maisons traditionnelles provençales" /></a>
          </li>
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <a href="/contact?service=construction-neuve" className="hover:underline"><InternalLinkText text="Accompagnement complet de votre projet" /></a>
          </li>
        </ul>
        <div className="mt-6 space-y-4">
          <Button href="/estimation" variant="outline" className="w-full justify-center bg-card hover:bg-muted/50">
            <Calculator className="mr-2 h-4 w-4" /> Estimer mon projet
          </Button>
          <Button href="/contact" variant="outline" className="w-full justify-center bg-card hover:bg-muted/50">
            <Calendar className="mr-2 h-4 w-4" /> Prendre rendez-vous
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConstructionNeuveSidebar;
