
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ClientProjectsCardProps {
  client: {
    projects: {
      id: string;
      title: string;
      type: string;
      location: string;
      status: string;
    }[];
    hasProjects: boolean;
  };
}

const ClientProjectsCard: React.FC<ClientProjectsCardProps> = ({ client }) => {
  return (
    <Card className="border-border">
      <CardHeader className="pb-3 border-b border-gray-100">
        <CardTitle className="text-lg">Projets associés</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        {client.projects && client.projects.length > 0 ? (
          <div className="space-y-3">
            {client.projects.map(project => (
              <Link 
                key={project.id} 
                to={`/workspace/client-area/admin/projects/${project.id}`}
                className="block p-3 border border-border rounded-md hover:bg-muted/50"
              >
                <div className="font-medium text-sm">{project.title}</div>
                <div className="text-xs text-low-contrast">{project.type} - {project.location}</div>
                <Badge variant="outline" className="mt-1 text-xs">{project.status}</Badge>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-sm text-low-contrast mb-3">Aucun projet associé</p>
            <Button 
              variant="outline" 
              size="sm"
              className="text-xs"
            >
              Assigner un projet
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ClientProjectsCard;
