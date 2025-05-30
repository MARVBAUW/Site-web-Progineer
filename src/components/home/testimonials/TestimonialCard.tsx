
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { RatingStars } from '@/components/common/ratings/RatingStars';
import { GoogleBadge } from '@/components/common/badges/GoogleBadge';
import type { Testimonial } from './testimonialData';

interface TestimonialCardProps {
  testimonial: Testimonial;
  direction: number;
}

export const TestimonialCard = ({ testimonial, direction }: TestimonialCardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="md:w-1/3">
        <div className="relative">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-xl mx-auto">
            <div className="w-full h-full bg-gradient-to-br from-progineer-gold/30 to-khaki-800/30 backdrop-blur-sm flex items-center justify-center">
              <Quote className="w-20 h-20 text-white/30" />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4">
            <GoogleBadge />
          </div>
        </div>
      </div>
      
      <div className="md:w-2/3 bg-card/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 relative">
        <RatingStars rating={testimonial.rating} className="mb-4" />
        
        <p className="text-white text-lg md:text-xl mb-6 italic relative z-10">
          "{testimonial.quote}"
        </p>
        
        <div>
          <div className="font-semibold text-white text-lg">{testimonial.author}</div>
          <div className="text-sm text-white/70 mt-1 flex items-center gap-2">
            <span>{testimonial.date}</span>
            <span className="text-white/40">•</span>
            <span>{testimonial.project}</span>
          </div>
        </div>
        
        <div className="absolute top-6 right-6 text-white/10">
          <Quote className="h-16 w-16" />
        </div>
      </div>
    </div>
  );
};
