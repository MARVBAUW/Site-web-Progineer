
import React from 'react';
import Container from '@/components/common/Container';
import { Button } from "@/components/ui/button";
import { scrollToForm } from './utils/scrollToForm';

const EstimationTrustMetrics = () => {
  return (
    <section className="py-16 bg-stone-50/70 dark:bg-slate-800/70">
      <Container size="md">
        <h2 className="text-2xl md:text-3xl font-rare tracking-wide mb-6 text-center text-progineer-gold">
          Notre expertise en chiffres
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <div className="text-center p-4">
            <p className="text-4xl font-bold text-progineer-gold mb-2">+50</p>
            <p className="text-gray-600 dark:text-gray-300 px-[10px] font-thin">Références de projets réalisés</p>
          </div>
          
          <div className="text-center p-4">
            <p className="text-4xl font-bold text-progineer-gold mb-2">98%</p>
            <p className="text-gray-600 dark:text-gray-300">Clients satisfaits</p>
          </div>
          
          <div className="text-center p-4">
            <p className="text-4xl font-bold text-progineer-gold mb-2">5+</p>
            <p className="text-gray-600 dark:text-gray-300">Années d'expérience</p>
          </div>
          
          <div className="text-center p-4">
            <p className="text-4xl font-bold text-progineer-gold mb-2">+10</p>
            <p className="text-gray-600 dark:text-gray-300">Villes couvertes</p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="mb-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Faites confiance à notre équipe d'experts pour vous accompagner dans votre projet de construction ou de rénovation en région PACA.
          </p>
          <Button 
            onClick={scrollToForm}
            className="bg-progineer-gold hover:bg-progineer-gold/90 text-white"
          >
            Demander une estimation
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default EstimationTrustMetrics;
