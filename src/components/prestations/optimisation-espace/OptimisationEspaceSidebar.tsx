
import React from 'react';
import { Phone, Mail, Calculator, Calendar } from 'lucide-react';
import Button from '@/components/common/Button';
import { InternalLinkText } from '@/utils/internalLinking';

const OptimisationEspaceSidebar = () => {
  return (
    <div className="sticky top-24 space-y-8">
      <div className="bg-card p-2 rounded-xl shadow-sm border border-border">
        <h3 className="text-xl font-semibold mb-4">Besoin d'un devis ?</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          <InternalLinkText
            text="Contactez-nous pour échanger sur votre projet d'optimisation d'espace et obtenir un devis personnalisé auprès de notre maître d'œuvre à Marseille ou en région PACA."
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
        <h3 className="text-xl font-semibold mb-4">Focus Aménagement de Combles</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <a href="/prestations/optimisation-espace/amenagement-combles" className="hover:underline"><InternalLinkText text="Transformer vos combles en pièce à vivre" /></a>
          </li>
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <a href="/prestations/optimisation-espace/creation-mezzanine" className="hover:underline"><InternalLinkText text="Création de mezzanines sur mesure" /></a>
          </li>
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <a href="/prestations/optimisation-espace/mobilier-sur-mesure" className="hover:underline"><InternalLinkText text="Mobilier et rangements optimisés" /></a>
          </li>
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <a href="/prestations/optimisation-espace/petits-espaces" className="hover:underline"><InternalLinkText text="Solutions pour petits appartements" /></a>
          </li>
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <a href="/contact?subject=optimisation-espace" className="hover:underline"><InternalLinkText text="Obtenir une étude personnalisée" /></a>
          </li>
        </ul>
        <div className="mt-6 space-y-4">
          <Button href="/estimation?service=optimisation" variant="outline" className="w-full justify-center bg-card hover:bg-muted/50">
            <Calculator className="mr-2 h-4 w-4" /> Estimer votre aménagement
          </Button>
          <Button href="/contact?service=optimisation" variant="outline" className="w-full justify-center bg-card hover:bg-muted/50">
            <Calendar className="mr-2 h-4 w-4" /> Discutons de votre projet
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OptimisationEspaceSidebar;
