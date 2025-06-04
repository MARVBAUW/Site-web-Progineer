import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@/components/common/Container';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Clock, ChevronRight, Store } from 'lucide-react';
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
                <a 
                  href="https://g.co/kgs/jRoxjts" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-card/10 p-2 rounded-full text-white hover:bg-progineer-gold hover:text-white transition-colors" 
                  title="Google My Business"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                  </svg>
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
                  <Link to="/prestations" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm flex items-center justify-center md:justify-start">
                    <ChevronRight className="h-3 w-3 mr-1 text-progineer-gold/70" /> Nos prestations
                  </Link>
                </li>
                <li>
                  <Link to="/realisations" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm flex items-center justify-center md:justify-start">
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
                  <Link to="/prestations/construction-neuve" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm flex items-center justify-center md:justify-start">
                    <ChevronRight className="h-3 w-3 mr-1 text-progineer-gold/70" /> Construction sur mesure
                  </Link>
                </li>
                <li>
                  <Link to="/prestations/renovation" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm flex items-center justify-center md:justify-start">
                    <ChevronRight className="h-3 w-3 mr-1 text-progineer-gold/70" /> Rénovation énergétique
                  </Link>
                </li>
                <li>
                  <Link to="/prestations/extension" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm flex items-center justify-center md:justify-start">
                    <ChevronRight className="h-3 w-3 mr-1 text-progineer-gold/70" /> Extension & agrandissement
                  </Link>
                </li>
                <li>
                  <Link to="/prestations/optimisation-espace" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm flex items-center justify-center md:justify-start">
                    <ChevronRight className="h-3 w-3 mr-1 text-progineer-gold/70" /> Optimisation d'espace
                  </Link>
                </li>
                <li>
                  <Link to="/prestations/design-interieur" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm flex items-center justify-center md:justify-start">
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
                  <Phone className="h-4 w-4 mr-3 text-white flex-shrink-0 mt-0.5" />
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
                  <Mail className="h-4 w-4 mr-3 text-white flex-shrink-0 mt-0.5" />
                  <a href="mailto:progineer.moe@gmail.com" className="text-white/70 dark:text-white/80 hover:text-progineer-gold transition-colors text-sm">
                    progineer.moe@gmail.com
                  </a>
                </li>
                <li className="flex items-start justify-center md:justify-start">
                  <Clock className="h-4 w-4 mr-3 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 dark:text-white/80 text-sm">
                    Lun - Ven: 9h - 18h
                  </span>
                </li>
                <li className="flex items-start justify-center md:justify-start">
                  <MapPin className="h-4 w-4 mr-3 text-white flex-shrink-0 mt-0.5" />
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
              <Link to="/" className="text-progineer-gold hover:underline">Progineer</Link> - Ingénieur, maître d'œuvre à Marseille et en PACA – Spécialiste en construction de maisons sur mesure, rénovation et extension. Nos architectes et ingénieurs vous accompagnent de A à Z. Coordination des corps de métier, respect des délais et expertise technique pour tous vos projets.
            </p>
          </div>
        </Container>
      </div>
    </footer>;
};

export default Footer;
