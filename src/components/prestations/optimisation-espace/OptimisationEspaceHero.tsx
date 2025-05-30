
import React from 'react';
import Container from '@/components/common/Container';
import { InternalLinkText } from '@/utils/internalLinking';

const OptimisationEspaceHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-khaki-50 to-white">
      <Container size="md">
        <div className="text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-khaki-100 text-khaki-800 text-sm font-medium">
            Optimisation d'espace
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Optimisation d'espace à Marseille et PACA
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            <InternalLinkText 
              text="Maximisez le potentiel de votre surface habitable grâce à nos solutions d'aménagement intelligentes et fonctionnelles. Transformez chaque mètre carré en espace utile."
              maxOccurrences={2}
            />
          </p>
        </div>
      </Container>
    </section>
  );
};

export default OptimisationEspaceHero;
