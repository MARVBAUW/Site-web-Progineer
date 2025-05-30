import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Container from '@/components/common/Container';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';
import { navLinks } from './navbar/types';
import Logo from '@/components/common/Logo';
import ThemeToggle from '@/components/theme/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    // Vérifier l'état initial
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm",
          isScrolled || isOpen
            ? "bg-card/95 dark:bg-slate-900/95 py-2 border-b border-border/50 h-20" 
            : "bg-transparent py-3 h-20"
        )}
      >
        <Container size="lg">
          <nav className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex-shrink-0 relative z-50">
              <Logo 
                variant={isScrolled || location.pathname !== '/' ? 'metallic' : 'metallic'} 
                size="md" 
              />
            </div>

            {/* Desktop Navigation */}
            <DesktopNav 
              navLinks={navLinks} 
              openDropdown={openDropdown} 
              toggleDropdown={toggleDropdown} 
            />

            {/* Theme Toggle */}
            <div className="flex items-center gap-4 relative z-50">
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-stone-800 dark:hover:text-white hover:bg-stone-100/50 dark:hover:bg-slate-800/50"
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </nav>
        </Container>
      </header>
      <div style={{ paddingTop: '5rem' }} />

      {/* Mobile Navigation - Now positioned outside the header */}
      <MobileNav 
        isOpen={isOpen} 
        navLinks={navLinks} 
        openDropdown={openDropdown} 
        toggleDropdown={toggleDropdown} 
      />
    </>
  );
};

export default Navbar;
