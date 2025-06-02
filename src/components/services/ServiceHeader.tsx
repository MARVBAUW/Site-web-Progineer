import { motion } from 'framer-motion';
import type { ServiceHeaderProps } from './types';

export const ServiceHeader = ({ title, subtitle, description }: ServiceHeaderProps) => {
  return (
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-block px-4 py-1 mb-4 rounded-full bg-khaki-100 text-khaki-800 text-sm font-medium"
      >
        {subtitle}
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-semibold mb-4 text-gray-900 dark:text-white"
      >
        {title}
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-gray-600 dark:text-gray-300 text-lg"
      >
        {description}
      </motion.p>
    </div>
  );
}; 