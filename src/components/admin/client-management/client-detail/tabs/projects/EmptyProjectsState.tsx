
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const EmptyProjectsState: React.FC = () => {
  return (
    <div className="bg-muted/50 p-6 rounded-md border border-dashed border-border text-center">
      <h4 className="font-medium mb-2">Aucun projet associé</h4>
      <p className="text-sm text-low-contrast mb-4">Ce client n'a pas encore de projet associé.</p>
      <div className="space-y-4">
        <Button className="bg-khaki-600 hover:bg-khaki-700">
          Assigner un projet existant
        </Button>
        <div className="text-center">
          <span className="text-sm text-low-contrast">ou</span>
        </div>
        <Button 
          variant="outline"
          asChild
        >
          <Link to="/workspace/client-area/admin/projects/create">
            Créer un nouveau projet
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default EmptyProjectsState;
