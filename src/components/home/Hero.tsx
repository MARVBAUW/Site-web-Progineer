import React, { memo, useCallback } from 'react';
import Container from '@/components/common/Container';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroParticles from './hero/HeroParticles';
import ScrollIndicator from './hero/ScrollIndicator';

const Hero = memo(() => {
  const scrollToNextSection = useCallback(() => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section
      id="paca"
      className="relative flex items-center overflow-hidden"
      style={{ height: '100vh' }}
    >
      <HeroBackground />
      <HeroParticles />
      
      <Container className="relative z-20">
        <HeroContent />
      </Container>

      <ScrollIndicator onClick={scrollToNextSection} />
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
