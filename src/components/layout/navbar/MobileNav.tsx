
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Phone, Mail } from 'lucide-react';
import Button from '@/components/common/Button';
import Container from '@/components/common/Container';
import { NavLink } from './types';
import { useIsMobile } from '@/hooks/use-mobile';
import { useAuth } from '@/hooks/useAuth';
import LogoutButton from '@/components/auth/LogoutButton';

interface MobileNavProps {
  isOpen: boolean;
  navLinks: NavLink[];
  openDropdown: string | null;
  toggleDropdown: (name: string | null) => void;
}

const MobileNav = ({
  isOpen,
  navLinks,
  openDropdown,
  toggleDropdown
}: MobileNavProps) => {
  const isMobile = useIsMobile();
  const { user } = useAuth();

  // Nouvelle logique d'ouverture/réduction
  // - Si rien n'est sélectionné, tout est déroulé
  // - Quand on clique sur une section principale: on affiche seulement sa sous-section
  // - Si openDropdown est null => tout est visible
  // - Si openDropdown est défini => une seule section déployée

  if (!isOpen) return null;

  return (
    // Positionnement absolu par rapport au viewport, indépendant du header
    <div className="fixed inset-0 top-20 z-40 bg-background shadow-lg overflow-y-auto">
      <Container className="flex flex-col py-6 space-y-4 min-h-screen">
        {/* Changement ici : flex-grow simplement pour que le contenu remplisse l'espace */}
        <ul className="flex-grow">
          {navLinks.map(item => {
            // Doit-on afficher la section déployée ?
            const isOpened = openDropdown === null || openDropdown === item.name;
            return (
              <React.Fragment key={item.name}>
                <li className="border-b border-stone-200 dark:border-gray-700">
                  {item.subLinks ? (
                    <button
                      onClick={() => {
                        // Si déjà ouvert, cliquer réduit tout; sinon, ouvre seulement celui-ci
                        toggleDropdown(openDropdown === item.name ? null : item.name);
                      }}
                      className={cn(
                        "flex items-center justify-between w-full text-base font-medium text-gray-900 dark:text-white hover:text-khaki-800 dark:hover:text-khaki-400 py-3 px-2",
                        openDropdown === item.name && "bg-stone-100 dark:bg-gray-800"
                      )}
                      aria-expanded={isOpened}
                      aria-controls={`mobile-nav-section-${item.name}`}
                    >
                      <span>{item.name}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform ${isOpened ? "rotate-180" : ""}`}
                      >
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className="block text-base font-medium text-gray-900 dark:text-white hover:text-khaki-800 dark:hover:text-khaki-400 py-3 px-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
                {/* Toujours afficher les sous-sections s'il y en a,
                    sauf si openDropdown est défini et ce n'est pas le bon item */}
                {item.subLinks && isOpened && (
                  <li
                    className="pl-3 mb-3 bg-muted rounded-md"
                    id={`mobile-nav-section-${item.name}`}
                  >
                    <ul className="space-y-1 border-l border-stone-200 dark:border-gray-700 pl-3 py-3">
                      {item.subLinks.map(subLink => (
                        <li key={subLink.name}>
                          <Link
                            to={subLink.path}
                            className="block py-2 px-3 text-sm text-gray-600 dark:text-gray-300 hover:text-khaki-800 dark:hover:text-khaki-400 hover:bg-muted rounded-md"
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ul>

        <div className="mt-auto space-y-4 pt-4 border-t border-border">
          <div className="flex flex-col space-y-2">
            <a href="tel:+33783762156" className="flex items-center py-2 text-gray-900 dark:text-white">
              <Phone className="h-4 w-4 mr-2 text-khaki-600 dark:text-khaki-400" />
              <span className="text-sm">+33 7 83 76 21 56</span>
            </a>
            <a href="mailto:progineer.moe@gmail.com" className="flex items-center py-2 text-gray-900 dark:text-white">
              <Mail className="h-4 w-4 mr-2 text-khaki-600 dark:text-khaki-400" />
              <span className="text-sm">progineer.moe@gmail.com</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {user ? (
              <>
                <Button href="/workspace/client-area" className="w-full justify-center py-2 text-sm">
                  Mon espace
                </Button>
                <LogoutButton
                  variant="outline"
                  size="sm"
                  className="w-full justify-center py-2 text-sm border-red-200 text-red-600"
                />
              </>
            ) : (
              <>
                <Button href="/contact" className="w-full justify-center py-2 text-sm">
                  Contact
                </Button>
                <Button href="/estimation" variant="outline" className="w-full justify-center py-2 text-sm bg-khaki-600 hover:bg-khaki-700 text-white !text-white">
                  Estimation
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MobileNav;
