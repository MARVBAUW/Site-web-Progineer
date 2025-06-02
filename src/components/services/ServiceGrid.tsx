import { motion } from 'framer-motion';
import { ServiceCard } from './ServiceCard';
import type { ServiceGridProps } from './types';

const getColumnSpan = (index: number, totalServices: number): string => {
  // Si c'est la dernière carte et qu'elle est seule dans sa rangée
  if (index === totalServices - 1 && totalServices % 3 === 1) {
    return 'col-span-12 md:col-span-6 md:col-start-4';
  }
  // Si c'est l'avant-dernière carte et qu'il ne reste qu'une carte
  if (index === totalServices - 2 && totalServices % 3 === 1) {
    return 'col-span-12 md:col-span-6';
  }
  // Distribution par défaut
  return 'col-span-12 md:col-span-4';
};

export const ServiceGrid = ({ services }: ServiceGridProps) => {
  return (
    <div className="grid grid-cols-12 gap-6 md:gap-8">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          className={getColumnSpan(index, services.length)}
        />
      ))}
    </div>
  );
}; 