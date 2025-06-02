import React, { useEffect, useRef, memo } from 'react';

const HeroParticles = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = '';
    const particleCount = window.innerWidth < 768 ? 30 : 60;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-card/30 pointer-events-none';
      
      const size = Math.random() * 5 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animation = `floatParticle ${Math.random() * 10 + 10}s linear infinite`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.opacity = `${Math.random() * 0.5 + 0.2}`;
      
      return particle;
    };

    // Créer les particules initiales
    for (let i = 0; i < particleCount; i++) {
      container.appendChild(createParticle());
    }

    // Gérer le redimensionnement
    const handleResize = () => {
      container.innerHTML = '';
      const newCount = window.innerWidth < 768 ? 30 : 60;
      for (let i = 0; i < newCount; i++) {
        container.appendChild(createParticle());
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.innerHTML = '';
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-10 overflow-hidden pointer-events-none"
    />
  );
});

HeroParticles.displayName = 'HeroParticles';

export default HeroParticles;
