import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Container from '@/components/common/Container';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';
import { navLinks } from './navbar/types';
import Logo from '@/components/common/Logo';
import ThemeToggle from '@/components/theme/ThemeToggle';
import { Iridescence } from "@/components/ui/iridescence";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const [fogScroll, setFogScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const maxScroll = 200;
      const scrollY = Math.min(window.scrollY, maxScroll);
      setFogScroll(scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className="fixed top-0 w-full z-50 transition-all duration-300 h-20 border-b border-stone-200 shadow-lg overflow-hidden"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 z-0">
            <Iridescence
              className="w-full h-full"
              color={[0.98, 0.98, 1.0]}
              mouseReact={true}
              amplitude={0.08}
              speed={0.4}
            />
          </div>
          <div className="relative z-10">
            <Container size="lg">
              <nav className="flex items-center justify-between w-full h-20">
                <div className="flex-shrink-0 relative z-50 h-20 flex items-center">
                  <Logo 
                    variant={isScrolled || location.pathname !== '/' ? 'metallic' : 'metallic'} 
                    size="md" 
                  />
                </div>

                <DesktopNav 
                  navLinks={navLinks} 
                  openDropdown={openDropdown} 
                  toggleDropdown={toggleDropdown} 
                />

                <div className="flex items-center gap-4 relative z-50">
                  <ThemeToggle />
                  
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
          </div>
        </div>
      </header>

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
