
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction } from 'lucide-react';

const TallyEstimationForm = () => {
  // Make sure Tally is loaded and embedded properly
  useEffect(() => {
    // Check if Tally is already defined
    if (typeof window !== 'undefined') {
      if (window.Tally && typeof window.Tally.loadEmbeds === 'function') {
        window.Tally.loadEmbeds();
      } else {
        // Force reload iframe
        const iframes = document.querySelectorAll('iframe[data-tally-src]:not([src])');
        iframes.forEach((iframe: HTMLIFrameElement) => {
          if (iframe.dataset.tallySrc) {
            iframe.src = iframe.dataset.tallySrc;
          }
        });
      }
    }
  }, []);

  return (
    <Card className="shadow-md bg-card/95">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl flex items-center">
          <Construction className="h-5 w-5 mr-2 text-blue-500" />
          Estimation détaillée de votre projet
        </CardTitle>
        <CardDescription>
          Estimez le coût de votre projet de construction ou rénovation en quelques étapes simples.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <iframe 
            data-tally-src="https://tally.so/embed/nGB6KO?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height={631}
            frameBorder={0}
            title="ESTIMER VOTRE PROJET"
          ></iframe>
          
          <div className="text-xs text-low-contrast mt-4 text-center">
            * Cette estimation détaillée est fournie à titre indicatif et pourra être affinée lors d'un rendez-vous avec nos experts Progineer.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TallyEstimationForm;
