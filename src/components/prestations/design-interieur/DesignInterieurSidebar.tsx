
import React from 'react';
import { Phone, Mail, Calculator, Calendar } from 'lucide-react';
import Button from '@/components/common/Button';
import { InternalLinkText } from '@/utils/internalLinking';

const DesignInterieurSidebar = () => {
  return (
    <div className="space-y-8">
      <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
        <h3 className="text-xl font-semibold mb-4">Besoin d'un devis ?</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          <InternalLinkText
            text="Contactez-nous pour échanger sur votre projet de design d'intérieur et obtenir un devis personnalisé avec un maître d'œuvre à Marseille ou en région PACA."
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
      
      <div className="bg-khaki-50 p-6 rounded-xl border border-khaki-100">
        <h3 className="text-xl font-semibold mb-4">Nos services design</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <InternalLinkText text="Conception d'espaces résidentiels" />
          </li>
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <InternalLinkText text="Aménagement de locaux professionnels" />
          </li>
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <InternalLinkText text="Home staging pour valorisation" />
          </li>
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <InternalLinkText text="Sélection de mobilier et décoration" />
          </li>
          <li className="flex items-start">
            <span className="text-khaki-600 mr-2">•</span>
            <InternalLinkText text="Visualisation 3D et moodboards" />
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
