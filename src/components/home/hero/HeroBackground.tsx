import React, { memo } from 'react';

const HeroBackground = memo(() => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('/images/prestations/PGR_55_resultat.webp')`,
          backgroundPosition: 'center',
        }}
      />
    </div>
  );
});

HeroBackground.displayName = 'HeroBackground';

export default HeroBackground;
