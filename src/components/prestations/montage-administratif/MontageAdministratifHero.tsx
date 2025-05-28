import React from 'react';
import Container from '@/components/common/Container';
import { InternalLinkText } from '@/utils/internalLinking';

const MontageAdministratifHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-khaki-50 to-white">
      <Container size="md">
        <div className="text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-khaki-100 text-khaki-800 text-sm font-medium">
            Montage administratif
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Montage administratif & Permis de construire en PACA
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            <InternalLinkText 
              text="Progineer vous accompagne dans toutes vos démarches administratives : permis de construire, déclaration préalable, autorisations et gestion des formalités. Sécurisez et accélérez vos projets en région PACA."
              maxOccurrences={2}
            />
          </p>
        </div>
      </Container>
    </section>
  );
};

export default MontageAdministratifHero; 