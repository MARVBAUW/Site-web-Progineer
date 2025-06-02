import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '@/components/common/Container';
import { Button } from '@/components/ui/button';
import { Calculator, Home, Building, FileText } from 'lucide-react';

const Estimation = () => {
  return (
    <>
      <Helmet>
        <title>Estimation de projet | Progineer - Maîtrise d'œuvre en PACA</title>
        <meta name="description" content="Estimez le coût de votre projet de construction ou rénovation avec Progineer. Obtenez une estimation gratuite et personnalisée pour votre projet en région PACA." />
      </Helmet>

      <Container size="lg" className="py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Estimation de votre projet</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <Calculator className="w-12 h-12 text-progineer-gold mb-4" />
              <h2 className="text-xl font-semibold mb-3">Estimation gratuite</h2>
              <p className="text-muted-foreground">Obtenez une estimation précise et détaillée de votre projet.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <Home className="w-12 h-12 text-progineer-gold mb-4" />
              <h2 className="text-xl font-semibold mb-3">Projet sur mesure</h2>
              <p className="text-muted-foreground">Une solution adaptée à vos besoins et à votre budget.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <Building className="w-12 h-12 text-progineer-gold mb-4" />
              <h2 className="text-xl font-semibold mb-3">Expertise locale</h2>
              <p className="text-muted-foreground">Une connaissance approfondie du marché immobilier en PACA.</p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Comment ça marche ?</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-progineer-gold/10 p-3 rounded-full mr-4">
                  <FileText className="w-6 h-6 text-progineer-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">1. Remplissez le formulaire</h3>
                  <p className="text-muted-foreground">Décrivez votre projet en détail pour une estimation précise.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-progineer-gold/10 p-3 rounded-full mr-4">
                  <Calculator className="w-6 h-6 text-progineer-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">2. Analyse de votre projet</h3>
                  <p className="text-muted-foreground">Nos experts analysent votre demande et établissent un devis détaillé.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-progineer-gold/10 p-3 rounded-full mr-4">
                  <Building className="w-6 h-6 text-progineer-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">3. Devis personnalisé</h3>
                  <p className="text-muted-foreground">Recevez une estimation complète et détaillée de votre projet.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" className="bg-progineer-gold hover:bg-progineer-gold/90">
                Commencer l'estimation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Estimation;
