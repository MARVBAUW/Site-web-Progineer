import React, { Suspense, lazy } from 'react';

const ProjectCard = lazy(() => import('./ProjectCard'));

interface ProjectCardWrapperProps {
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

const ProjectCardWrapper: React.FC<ProjectCardWrapperProps> = ({ project }) => (
  <Suspense fallback={<div className="animate-pulse bg-gray-200 h-64 rounded-lg" />}>
    <ProjectCard project={project} />
  </Suspense>
);

export default ProjectCardWrapper; 