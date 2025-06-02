import React from "react";
import Button from "@/components/common/Button";
import { Link } from "react-router-dom";
import { InternalLinkText } from "@/utils/internalLinking";
import ImageLoader from "@/components/common/ImageLoader";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    location: string;
    category: string;
    description: string;
    image: string;
    slug: string;
  };
}

const ProjectCard: React.FC<{ project: ProjectCardProps["project"] }> = ({ project }) => {
  const projectLink = `/realisations/${project.slug}`;

  return (
    <div 
      className="bg-card rounded-xl overflow-hidden shadow-sm border border-border transition-transform duration-300 hover:shadow-md hover:-translate-y-1"
    >
      <div className="h-64 overflow-hidden">
        <ImageLoader 
          src={project.image}
          alt={`Projet ${project.title} à ${project.location}`}
          className="w-full h-full object-cover object-[center_30%] transition-transform duration-500 hover:scale-105 [filter:sepia(30%)_saturate(150%)_hue-rotate(5deg)_brightness(90%)]"
          fallbackSrc="/placeholder.svg"
          onError={() => console.warn(`Failed to load image: ${project.image}`)}
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-low-contrast">{project.location}</span>
          <span className="px-3 py-1 bg-khaki-100 text-khaki-800 text-xs rounded-full">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          <InternalLinkText text={project.description} maxOccurrences={1} />
        </p>
        <Link to={`/realisations/${project.slug}`}>
          <Button variant="outline" className="w-full justify-center">
            Voir le projet
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
