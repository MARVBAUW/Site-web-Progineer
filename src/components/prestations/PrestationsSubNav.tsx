import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '@/components/common/Container';
import { cn } from '@/lib/utils';

interface PrestationsSubNavProps {
  activeService?: string;
}

const services = [
  {
    id: 'construction-neuve',
    name: 'Construction neuve',
    path: '/prestations/construction-neuve',
    icon: '🏡'
  },
  {
    id: 'renovation',
    name: 'Rénovation',
    path: '/prestations/renovation',
    icon: '🔨'
  },
  {
    id: 'extension',
    name: 'Extension',
    path: '/prestations/extension',
    icon: '🏗️'
  },
  {
    id: 'optimisation-espace',
    name: 'Optimisation d\'espace',
    path: '/prestations/optimisation-espace',
    icon: '📐'
  },
  {
    id: 'design-interieur',
    name: 'Design d\'intérieur',
    path: '/prestations/design-interieur',
    icon: '🎨'
  },
  {
    id: 'montage-administratif',
    name: 'Montage administratif',
    path: '/prestations/montage-administratif',
    icon: '📄'
  },
  {
    id: 'petit-collectif',
    name: 'Petit collectif',
    path: '/prestations/petit-collectif',
    icon: '🏢'
  },
  {
    id: 'rehabilitation',
    name: 'Réhabilitation',
    path: '/prestations/rehabilitation',
    icon: '🏚️'
  },
  {
    id: 'construction-ecologique',
    name: 'Construction écologique',
    path: '/prestations/construction-ecologique',
    icon: '🌱'
  }
];

const PrestationsSubNav: React.FC<PrestationsSubNavProps> = ({ activeService }) => {
  const location = useLocation();
  
  return (
    <div className="sticky top-16 z-20 bg-card border-b border-border">
      <Container size="lg">
        <div className="flex items-center justify-between overflow-x-auto py-2 scrollbar-hide">
          <nav className="flex space-x-1 w-full justify-center pl-2">
            <Link
              to="/prestations"
              className={cn(
                "flex items-center px-2 py-1 text-xs font-medium rounded-lg transition-colors",
                location.pathname === "/prestations"
                  ? "bg-khaki-100 text-khaki-900"
                  : "text-gray-600 dark:text-gray-300 hover:bg-muted hover:text-gray-900 dark:text-white"
              )}
            >
              Toutes nos prestations
            </Link>
            
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.path}
                className={cn(
                  "flex items-center px-2 py-1 text-xs font-medium rounded-lg whitespace-nowrap transition-colors",
                  (activeService === service.id || location.pathname === service.path)
                    ? "bg-khaki-100 text-khaki-900"
                    : "text-gray-600 dark:text-gray-300 hover:bg-muted hover:text-gray-900 dark:text-white"
                )}
              >
                <span className="mr-1.5" aria-hidden="true">{service.icon}</span>
                {service.name}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default PrestationsSubNav;
