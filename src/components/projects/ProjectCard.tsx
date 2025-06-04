import { useState } from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const [triedFallback, setTriedFallback] = useState(false);

  const handleImageError = () => {
    if (!triedFallback) {
      setTriedFallback(true);
      // Essayer le format alternatif
      const newUrl = project.imageUrl
        .replace(/PGR_(\d+)_resultat\.webp/, 'PGR _$1__resultat.webp');
      setImageUrl(newUrl);
    } else {
      setImageError(true);
    }
  };

  const [imageUrl, setImageUrl] = useState(project.imageUrl);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={imageError ? '/placeholder.svg' : imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          onError={handleImageError}
          priority
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-gray-600">{project.description}</p>
      </div>
    </div>
  );
} 