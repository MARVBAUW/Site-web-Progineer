import React from 'react';
import Button from '@/components/common/Button';
import { Calculator, Calendar } from 'lucide-react';

const CTASection = () => (
  <section className="mt-12 text-center">
    <h3 className="text-2xl font-semibold mb-4">Vous avez un projet de réhabilitation ?</h3>
    <p className="mb-6 text-gray-600 dark:text-gray-300">Contactez-nous pour un premier échange sans engagement ou utilisez notre outil d'estimation pour obtenir un rapport détaillé.</p>
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <Button href="/estimation" variant="outline" className="justify-center bg-card hover:bg-muted/50">
        <Calculator className="mr-2 h-4 w-4" /> Estimer mon projet
      </Button>
      <Button href="/contact" variant="outline" className="justify-center bg-card hover:bg-muted/50">
        <Calendar className="mr-2 h-4 w-4" /> Prendre rendez-vous
      </Button>
    </div>
  </section>
);

export default CTASection; 