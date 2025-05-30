import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@/components/common/Container';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Clock, ChevronRight } from 'lucide-react';
import Logo from '@/components/common/Logo';

const Footer = () => {
  return <footer className="bg-progineer-dark dark:bg-gray-950">
      {/* Sections précédentes du footer */}
      {/* Top Section with Border */}
      <div className="border-b border-white/10">
        <Container size="lg" className="py-14 bg-[#202014]/[0.94]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Company Info */}
            <div className="md:col-span-4">
              <Logo variant="white" withTagline className="mx-auto md:mx-0 mb-6" />
              <p className="text-white/80 dark:text-white/90 mb-6 text-sm leading-relaxed">
                Entreprise d'architecture, de maîtrise d'œuvre et de construction 
                de maisons sur mesure en région PACA. Notre équipe vous accompagne 
                de la conception à la réalisation.
              </p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="https://www.facebook.com/people/Progineer-Ma%C3%AEtrise-Doeuvre/61572478063277/" target="_blank" rel="noopener noreferrer" className="bg-card/10 p-2 rounded-full text-white hover:bg-progineer-gold hover:text-white transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://www.instagram.com/progineer_moe/" target="_blank" rel="noopener noreferrer" className="bg-card/10 p-2 rounded-full text-white hover:bg-progineer-gold hover:text-white transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/company/105527808/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="bg-card/10 p-2 rounded-full text-white hover:bg-progineer-gold hover:text-white transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="https://g.co/kgs/jRoxjts" target="_blank" rel="noopener noreferrer" className="bg-card/10 p-2 rounded-full text-white hover:bg-progineer-gold hover:text-white transition-colors" title="Google My Business">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21.35 11.1c-.13-.28-.38-.47-.68-.52l-2.19-.32-.98-2.01c-.12-.25-.37-.41-.65-.41s-.53.16-.65.41l-.98 2.01-2.19.32c-.3.05-.55.24-.68.52-.13.28-.09.6.1.83l1.59 1.55-.38 2.18c-.05.3.07.6.3.78.23.18.55.2.8.06l1.96-1.03 1.96 1.03c.11.06.23.09.35.09.16 0 .32-.05.45-.15.23-.18.35-.48.3-.78l-.38-2.18 1.59-1.55c.19-.23.23-.55.1-.83z"/></svg>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-2">
              <h3 className="text-white text-lg font-medium mb-5 pb-2 border-b border-white/10 text-center md:text-left">Navigation</h3>
              <ul className="space-y-3 text-center md:text-left">
                <li>
                  <Link to="/" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm flex items-center justify-center md:justify-start">
                    <ChevronRight className="h-3 w-3 mr-1 text-progineer-gold/70" /> Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/estimation" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm flex items-center justify-center md:justify-start">
                    <ChevronRight className="h-3 w-3 mr-1 text-progineer-gold/70" /> Estimer mon projet
                  </Link>
                </li>
                <li>
                  <Link to="/prestations-maitre-oeuvre" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm flex items-center justify-center md:justify-start">
                    <ChevronRight className="h-3 w-3 mr-1 text-progineer-gold/70" /> Nos prestations
                  </Link>
                </li>
                <li>
                  <Link to="/realisations-architecte-maison" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm flex items-center justify-center md:justify-start">
                    <ChevronRight className="h-3 w-3 mr-1 text-progineer-gold/70" /> Nos réalisations
                  </Link>
                </li>
                <li>
                  <Link to="/equipe-maitrise-oeuvre" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm flex items-center justify-center md:justify-start">
                    <ChevronRight className="h-3 w-3 mr-1 text-progineer-gold/70" /> Notre équipe
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm flex items-center justify-center md:justify-start">
                    <ChevronRight className="h-3 w-3 mr-1 text-progineer-gold/70" /> Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="md:col-span-3">
              <h3 className="text-white text-lg font-medium mb-5 pb-2 border-b border-white/10 text-center md:text-left">Nos services</h3>
              <ul className="space-y-3 text-center md:text-left">
                <li>
                  <Link to="/prestations-maitre-oeuvre/construction-neuve" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm flex items-center justify-center md:justify-start">
                    <ChevronRight className="h-3 w-3 mr-1 text-progineer-gold/70" /> Construction sur mesure
                  </Link>
                </li>
                <li>
                  <Link to="/prestations-maitre-oeuvre/renovation" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm flex items-center justify-center md:justify-start">
                    <ChevronRight className="h-3 w-3 mr-1 text-progineer-gold/70" /> Rénovation énergétique
                  </Link>
                </li>
                <li>
                  <Link to="/prestations-maitre-oeuvre/extension" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm flex items-center justify-center md:justify-start">
                    <ChevronRight className="h-3 w-3 mr-1 text-progineer-gold/70" /> Extension & agrandissement
                  </Link>
                </li>
                <li>
                  <Link to="/prestations-maitre-oeuvre/optimisation-espace" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm flex items-center justify-center md:justify-start">
                    <ChevronRight className="h-3 w-3 mr-1 text-progineer-gold/70" /> Optimisation d'espace
                  </Link>
                </li>
                <li>
                  <Link to="/prestations-maitre-oeuvre/design-interieur" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm flex items-center justify-center md:justify-start">
                    <ChevronRight className="h-3 w-3 mr-1 text-progineer-gold/70" /> Design d'espace
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm flex items-center justify-center md:justify-start">
                    <ChevronRight className="h-3 w-3 mr-1 text-progineer-gold/70" /> Plan du site
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-3">
              <h3 className="text-white text-lg font-medium mb-5 pb-2 border-b border-white/10 text-center md:text-left">Contact</h3>
              <ul className="space-y-4 text-center md:text-left">
                <li className="flex items-start justify-center md:justify-start">
                  <Phone className="h-4 w-4 mr-3 text-progineer-gold flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <a href="tel:+33783762156" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm">
                      +33 7 83 76 21 56 (Marvin)
                    </a>
                    <a href="tel:+33611498716" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm">
                      +33 6 11 49 87 16 (Mael)
                    </a>
                  </div>
                </li>
                <li className="flex items-start justify-center md:justify-start">
                  <Mail className="h-4 w-4 mr-3 text-progineer-gold flex-shrink-0 mt-0.5" />
                  <a href="mailto:progineer.moe@gmail.com" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm">
                    progineer.moe@gmail.com
                  </a>
                </li>
                <li className="flex items-start justify-center md:justify-start">
                  <Clock className="h-4 w-4 mr-3 text-progineer-gold flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 dark:text-white/80 text-sm">
                    Lun - Ven: 9h - 18h
                  </span>
                </li>
                <li className="flex items-start justify-center md:justify-start">
                  <MapPin className="h-4 w-4 mr-3 text-progineer-gold flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 dark:text-white/80 text-sm">
                    Marseille, Saint-Tropez, Toulon,<br /> 
                    Nice, Cannes, Fréjus, région PACA
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom section */}
      <div className="py-6 bg-[0#202014f0] bg-[#202014]/[0.94]">
        <Container size="lg">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-xs text-white/50 dark:text-white/60">
                &copy; {new Date().getFullYear()} Progineer. Tous droits réservés.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              {/* Liens existants */}
              <Link to="/mentions-legales" className="text-xs text-white/50 dark:text-white/60 hover:text-progineer-gold transition-colors">Mentions légales</Link>
              <Link to="/cgv" className="text-xs text-white/50 dark:text-white/60 hover:text-progineer-gold transition-colors">CGV</Link>
              <Link to="/cgu" className="text-xs text-white/50 dark:text-white/60 hover:text-progineer-gold transition-colors">CGU</Link>
              <Link to="/privacy-policy" className="text-xs text-white/50 dark:text-white/60 hover:text-progineer-gold transition-colors">Confidentialité</Link>
              <Link to="/faq" className="text-xs text-white/50 dark:text-white/60 hover:text-progineer-gold transition-colors">FAQ</Link>
              <Link to="/devenir-partenaire" className="text-xs text-white/50 dark:text-white/60 hover:text-progineer-gold transition-colors">Devenir partenaire</Link>
              <Link to="/parrainage" className="text-xs text-white/50 dark:text-white/60 hover:text-progineer-gold transition-colors">Parrainage</Link>
              <Link to="/sitemap.xml" className="text-xs text-white/50 dark:text-white/60 hover:text-progineer-gold transition-colors">Sitemap XML</Link>

              {/* Nouveau lien vers l'annuaire */}
              <a 
                href="https://www.maitredoeuvre.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-white/50 dark:text-white/60 hover:text-progineer-gold transition-colors"
              >
                Trouver un maitre d'oeuvre
              </a>
            </div>
          </div>

          {/* Section SEO Footer */}
          <div className="mt-6 pt-6 border-t border-white/10 text-xs text-white/30 dark:text-white/40 text-center md:text-left">
            <p className="max-w-4xl">
              Ingénieur, maître d'œuvre à Marseille et en PACA – Spécialiste en construction de maisons sur mesure, rénovation et extension. Nos architectes et ingénieurs vous accompagnent de A à Z. Coordination des corps de métier, respect des délais et expertise technique pour tous vos projets.
            </p>
          </div>
        </Container>
      </div>
    </footer>;
};

export default Footer;
