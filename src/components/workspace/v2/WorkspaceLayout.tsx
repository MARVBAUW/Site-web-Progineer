
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import WorkspaceGuides from '@/components/workspace/WorkspaceGuides';
import WorkspaceCalculateurs from '@/components/workspace/WorkspaceCalculateurs';
import WorkspaceReglementation from '@/components/workspace/WorkspaceReglementation';
import WorkspaceEspaceClient from '@/components/workspace/WorkspaceEspaceClient';

interface WorkspaceLayoutProps {
  defaultTab?: string;
}

const WorkspaceLayout: React.FC<WorkspaceLayoutProps> = ({ defaultTab = 'guides' }) => {
  const { user } = useAuth();
  
  // Extract first name from user metadata or email
  const getFirstName = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name.split(' ')[0];
    }
    if (user?.email) {
      return user.email.split('@')[0];
    }
    return 'Utilisateur';
  };

  const firstName = getFirstName();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Bienvenue {firstName}
          </h1>
          <p className="text-muted-foreground">
            Accédez à tous vos outils professionnels en un seul endroit
          </p>
        </div>

        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="calculateurs">Calculateurs</TabsTrigger>
            <TabsTrigger value="reglementation">Réglementation</TabsTrigger>
            <TabsTrigger value="client">Espace Client</TabsTrigger>
          </TabsList>
          
          <TabsContent value="guides">
            <WorkspaceGuides />
          </TabsContent>
          
          <TabsContent value="calculateurs">
            <WorkspaceCalculateurs />
          </TabsContent>
          
          <TabsContent value="reglementation">
            <WorkspaceReglementation />
          </TabsContent>
          
          <TabsContent value="client">
            <WorkspaceEspaceClient />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WorkspaceLayout;
