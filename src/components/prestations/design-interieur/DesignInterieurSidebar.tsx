import React from 'react';
import { Phone, Mail, Calculator, Calendar } from 'lucide-react';
import Button from '@/components/common/Button';
import { InternalLinkText } from '@/utils/internalLinking';

const DesignInterieurSidebar = () => {
  return (
    <div className="sticky top-24 space-y-8">
      <div className="bg-card p-2 rounded-xl shadow-sm border border-border">
        <h3 className="text-xl font-semibold mb-4">Besoin d'un devis ?</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          <InternalLinkText
            text="Contactez-nous pour échanger sur votre projet de design intérieur et obtenir un devis personnalisé auprès de notre maître d'œuvre à Marseille ou en région PACA."
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
        <h3 className="text-xl font-semibold mb-4">Explorez Nos Services de Design</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <InternalLinkText text="Conception architecturale et plans 3D" />
          </li>
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <InternalLinkText text="Design et décoration d'espaces" />
          </li>
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <InternalLinkText text="Coordination et suivi de chantier" />
          </li>
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <InternalLinkText text="Optimisation d'Espace et Agencement" />
          </li>
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <InternalLinkText text="Mobilier sur Mesure et Décoration" />
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

export default DesignInterieurSidebar;
