import React from 'react';

interface SEOImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string; // Obligatoire pour le SEO
  priority?: boolean;
}

/**
 * Composant d'image optimisé pour le SEO
 * - Attribut alt obligatoire pour l'accessibilité
 * - Lazy loading par défaut
 * - Support des images responsives
 * - Optimisations pour Core Web Vitals
 */
const SEOImage: React.FC<SEOImageProps> = ({
  alt,
  loading = 'lazy',
  priority = false,
  className = '',
  ...props
}) => {
  // Validation de l'attribut alt (obligatoire pour le SEO)
  if (!alt || alt.trim() === '') {
    console.warn('SEOImage: L\'attribut alt est obligatoire pour le SEO et l\'accessibilité');
  }

  // Si l'image est prioritaire (above the fold), utiliser eager loading
  const finalLoading = priority ? 'eager' : (loading as 'lazy' | 'eager');

  return (
    <img
      {...props}
      alt={alt}
      loading={finalLoading}
      className={className}
      decoding="async"
    />
  );
};

export default SEOImage; 