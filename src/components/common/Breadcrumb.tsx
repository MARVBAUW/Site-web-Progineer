import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Container from './Container';

interface BreadcrumbItem {
  label: string;
  href: string;
}

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Accueil', href: '/' },
    ...pathnames.map((value, index) => {
      const href = `/${pathnames.slice(0, index + 1).join('/')}`;
      const label = value
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return { label, href };
    }),
  ];

  return (
    <nav className="py-3 bg-transparent">
      <Container>
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              )}
              <Link
                to={item.href}
                className={`${
                  index === breadcrumbItems.length - 1
                    ? 'text-progineer-gold font-medium'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
};

export default Breadcrumb; 