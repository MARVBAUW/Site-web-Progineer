import React, { useRef } from 'react';
import Container from '@/components/common/Container';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Home, 
  Building, 
  CircleHelp, 
  Users2, 
  FileText,
  LayoutDashboard,
  Construction,
  Brush,
  Building2,
  Ruler,
  Lightbulb,
  FileCode,
  RefreshCw,
  HomeIcon, 
  Gauge, 
  Maximize, 
  Paintbrush,
  Leaf,
  Users,
  Handshake,
  Calculator,
  HelpCircle,
  Map
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import './animations.css';

const InnovationHub = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const sections = [
    {
      title: "Nos prestations",
      links: [
        { name: "Construction sur mesure", href: "/prestations/construction-neuve", icon: HomeIcon },
        { name: "Rénovation énergétique", href: "/prestations/renovation", icon: Gauge },
        { name: "Extension & agrandissement", href: "/prestations/extension", icon: Maximize },
        { name: "Optimisation d'espace", href: "/prestations/optimisation-espace", icon: Ruler },
        { name: "Design d'espace", href: "/prestations/design-interieur", icon: Paintbrush },
        { name: "Montage administratif", href: "/prestations/montage-administratif", icon: FileText },
        { name: "Petit collectif", href: "/prestations/petit-collectif", icon: Building2 },
        { name: "Réhabilitation", href: "/prestations/rehabilitation", icon: Building },
        { name: "Construction écologique", href: "/prestations/construction-ecologique", icon: Leaf }
      ]
    },
    {
      title: "Notre entreprise",
      links: [
        { name: "À propos", href: "/about", icon: Users },
        { name: "Nos réalisations", href: "/realisations", icon: Building2 },
        { name: "Notre équipe", href: "/equipe", icon: Users },
        { name: "Programme de parrainage", href: "/parrainage", icon: Handshake },
        { name: "Devenir partenaire", href: "/partenaires", icon: Handshake }
      ]
    },
    {
      title: "Informations",
      links: [
        { name: "Estimer mon projet", href: "/estimation", icon: Calculator },
        { name: "Nous contacter", href: "/contact", icon: FileText },
        { name: "FAQ", href: "/faq", icon: HelpCircle },
        { name: "Mentions légales", href: "/legal", icon: FileText },
        { name: "Plan du site", href: "/sitemap", icon: Map },
        { name: "Conditions générales", href: "/cgv", icon: FileText }
      ]
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };
  
  const linkVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    })
  };

  return (
    <section ref={ref} className="py-28 bg-gradient-to-b from-stone-50 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-900 to-transparent opacity-5"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-progineer-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-progineer-gold/5 rounded-full blur-3xl"></div>
      
      {/* Lignes de connexion */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-progineer-gold/30 to-transparent"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-progineer-gold/20 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-progineer-gold/10 to-transparent"></div>
        
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-progineer-gold/30 to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-progineer-gold/20 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-progineer-gold/10 to-transparent"></div>
      </div>
      
      <Container>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative z-10"
        >
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.div variants={itemVariants} className="inline-block px-4 py-1 mb-4 rounded-full bg-khaki-100 text-khaki-800 text-sm font-medium">
              Centre d'innovation
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900 dark:text-white">
              Explorez nos ressources
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 text-lg">
              Découvrez l'écosystème complet de nos services et ressources pour vous accompagner dans tous vos projets.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.li
                        key={link.name}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Link
                          to={link.href}
                          className="flex items-center text-gray-600 dark:text-gray-300 hover:text-khaki-500 dark:hover:text-khaki-400 transition-colors duration-200"
                        >
                          <Icon className="h-5 w-5 mr-3" />
                          <span>{link.name}</span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
          
          {/* Badge futuriste en bas de section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex justify-center mt-16"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-khaki-100 via-progineer-gold/20 to-khaki-100 shadow-sm backdrop-blur-sm">
              <span className="text-khaki-800 text-sm mr-2">Découvrez notre approche innovante</span>
              <div className="w-2 h-2 rounded-full bg-progineer-gold animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default InnovationHub;
