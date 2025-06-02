import { ComponentType, SVGProps } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  link: string;
  slug: string;
  bgColor: string;
  iconColor: string;
  borderColor: string;
  details: string[];
}

export interface ServiceCardProps {
  service: Service;
  className?: string;
}

export interface ServiceGridProps {
  services: Service[];
}

export interface ServiceHeaderProps {
  title: string;
  subtitle: string;
  description: string;
} 