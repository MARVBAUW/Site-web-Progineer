import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ServiceCardProps } from './types';

export const ServiceCard = ({ service, className = '' }: ServiceCardProps) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      className={`perspective-700 h-full ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="transform-style-3d h-full w-full">
        <div 
          className={`${service.bgColor} rounded-xl p-6 md:p-7 shadow-sm border ${service.borderColor}
            transition-all duration-300 hover:shadow-lg h-full group transform`}
          style={{transformStyle: 'preserve-3d'}}
        >
          <div className="flex flex-col h-full">
            <div className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg ${service.iconColor} mb-4 
              relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
              <div className="absolute inset-0 bg-current opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Icon className="h-6 w-6 md:h-7 md:w-7 relative z-10" />
            </div>
            
            <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:translate-z-10 transition-transform duration-300">
              {service.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow text-sm md:text-base">
              {service.description}
            </p>

            <ul className="space-y-2 mb-4">
              {service.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-khaki-500 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-300 text-sm">{detail}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
              <Link 
                to={`/prestations/${service.slug}`}
                className={`inline-flex items-center text-gray-600 dark:text-gray-300 hover:${service.iconColor} font-medium transition-colors duration-300 group-hover:translate-z-5`}
              >
                <span>En savoir plus</span>
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}; 