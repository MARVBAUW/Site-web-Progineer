import { motion } from 'framer-motion';
import Container from '@/components/common/Container';
import { ServiceHeader } from '../services/ServiceHeader';
import { ServiceGrid } from '../services/ServiceGrid';
import { services } from '../services/data';
import './animations.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const Services = () => {
  return (
    <section 
      id="services-section" 
      className="py-28 bg-gradient-to-br from-stone-50 to-stone-100/50 dark:from-slate-800 dark:to-slate-900/50 relative overflow-hidden"
    >
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white dark:from-slate-900 to-transparent"></div>
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-khaki-200/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-khaki-300/10 blur-3xl"></div>

      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative z-10"
        >
          <ServiceHeader
            subtitle="Nos prestations"
            title="Des solutions adaptées à vos projets"
            description="Découvrez notre gamme complète de services pour concrétiser vos projets immobiliers en région PACA."
          />
          <ServiceGrid services={services} />
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;
