import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [imageError, setImageError] = useState<boolean>(false);
  const [triedFallback, setTriedFallback] = useState(false);

  const cleanImageUrl = (url: string): string => {
    if (!url) return '/images/placeholder.svg';
    
    // Nettoyer l'URL en retirant les espaces et les doubles underscores
    let cleanedUrl = url.replace(/\s+/g, '').replace(/_+/g, '_');
    
    // Si l'URL ne commence pas par /images/prestations/, l'ajouter
    if (!cleanedUrl.startsWith('/images/prestations/')) {
      cleanedUrl = `/images/prestations/${cleanedUrl}`;
    }
    
    // Vérifier si l'URL se termine par .webp, sinon l'ajouter
    if (!cleanedUrl.endsWith('.webp')) {
      cleanedUrl = `${cleanedUrl}.webp`;
    }
    
    console.log('URL nettoyée:', cleanedUrl);
    return cleanedUrl;
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Erreur de chargement de l\'image:', e.currentTarget.src);
    setImageError(true);
    
    // Essayer de charger l'image avec un format différent
    const currentSrc = e.currentTarget.src;
    const newSrc = currentSrc.replace('.webp', '.jpg');
    console.log('Tentative de chargement avec format alternatif:', newSrc);
    
    // Créer une nouvelle image pour tester si le format alternatif existe
    const img = new window.Image();
    img.onload = () => {
      console.log('Format alternatif trouvé:', newSrc);
      setImageUrl(newSrc);
      setImageError(false);
    };
    img.onerror = () => {
      console.log('Format alternatif non disponible, utilisation du placeholder');
      setImageUrl('/images/placeholder.svg');
    };
    img.src = newSrc;
  };

  const [imageUrl, setImageUrl] = useState<string>(cleanImageUrl(project.imageUrl));

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={project.title}
          width={400}
          height={300}
          className={`w-full h-48 object-cover rounded-t-lg transition-all duration-300 ${
            imageError ? 'opacity-50' : 'hover:scale-105'
          }`}
          onError={handleImageError}
          priority={index < 3}
          quality={75}
          loading={index < 3 ? 'eager' : 'lazy'}
          onLoad={() => console.log('Image chargée avec succès:', imageUrl)}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-gray-600">{project.description}</p>
      </div>
    </div>
  );
}; 