
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WorkspaceGuides from '@/components/workspace/WorkspaceGuides';
import WorkspaceCalculateurs from '@/components/workspace/WorkspaceCalculateurs';
import WorkspaceReglementation from '@/components/workspace/WorkspaceReglementation';
import WorkspaceEspaceClient from '@/components/workspace/WorkspaceEspaceClient';

interface WorkspaceLayoutProps {
  defaultTab?: string;
}

const WorkspaceLayout: React.FC<WorkspaceLayoutProps> = ({ defaultTab = 'guides' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Workspace Progineer
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Votre espace de travail professionnel pour l'architecture et la construction
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="guides">Guides & Références</TabsTrigger>
            <TabsTrigger value="calculators">Calculateurs</TabsTrigger>
            <TabsTrigger value="regulations">Réglementation</TabsTrigger>
            <TabsTrigger value="client-area">Espace Client</TabsTrigger>
          </TabsList>

          <TabsContent value="guides" className="space-y-6">
            <WorkspaceGuides />
          </TabsContent>

          <TabsContent value="calculators" className="space-y-6">
            <WorkspaceCalculateurs />
          </TabsContent>

          <TabsContent value="regulations" className="space-y-6">
            <WorkspaceReglementation />
          </TabsContent>

          <TabsContent value="client-area" className="space-y-6">
            <WorkspaceEspaceClient />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WorkspaceLayout;
