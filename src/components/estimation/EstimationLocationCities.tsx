
import React from 'react';
import Container from '@/components/common/Container';

const EstimationLocationCities = () => {
  const cities = [
    "Marseille", "Nice", "Toulon", "Aix-en-Provence", "Cannes", 
    "Antibes", "Fréjus", "Saint-Raphaël", "La Ciotat", "Hyères", 
    "Martigues", "Aubagne", "Cagnes-sur-Mer", "Salon-de-Provence", 
    "La Seyne-sur-Mer", "Istres"
  ];

  return (
    <>
      <section className="py-12 bg-progineer-light/50 dark:bg-slate-800/50">
        <Container>
          <h2 className="text-xl font-medium mb-6 text-center text-progineer-dark dark:text-white">
            Zones d'intervention pour vos projets de construction et rénovation
          </h2>
          
          <div className="text-sm text-progineer-dark/70 dark:text-gray-300 text-center max-w-4xl mx-auto columns-2 md:columns-4 gap-8">
            {cities.map((city) => (
              <p key={city} className="mb-2">{city}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-8 bg-progineer-light/30 dark:bg-slate-900/30 border-t border-progineer-gold/10">
        <Container>
          <div className="text-sm text-progineer-dark/60 dark:text-gray-400">
            <h2 className="text-base font-medium mb-2 text-progineer-dark dark:text-white">Estimation de projets de construction en PACA</h2>
            <p>
              Progineer, ingénieur et maître d'œuvre à Marseille et en PACA – Spécialiste en construction de maisons sur mesure, rénovation et extension. Estimation précise de vos projets par nos architectes et ingénieurs. Nous intervenons à Marseille, Nice, Toulon, Cannes, Saint-Tropez et dans toute la région PACA pour vous proposer un devis détaillé et personnalisé. Confiez-nous votre projet de construction neuve, d'extension ou de rénovation pour bénéficier d'un accompagnement sur-mesure par des professionnels expérimentés.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default EstimationLocationCities;
