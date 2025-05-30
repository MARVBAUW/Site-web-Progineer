
import React, { useState } from 'react';
import { useForm, FormProvider } from "react-hook-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectDetails } from '@/types/project';
import { useNavigate } from 'react-router-dom';
import ProjectGeneralForm from './forms/ProjectGeneralForm';
import ProjectPhaseForm from './forms/ProjectPhaseForm';
import ProjectDateForm from './forms/ProjectDateForm';
import ProjectTeamForm from './forms/ProjectTeamForm';
import ProjectExecutionForm from './forms/ProjectExecutionForm';
import ProjectTechnicalForm from './forms/ProjectTechnicalForm';

const defaultValues: ProjectDetails = {
  id: "",
  projectName: "",
  fileNumber: "",
  workAmount: "",
  projectOwner: "",
  projectType: "residential",
  adminAuthorization: "building_permit",
  automaticDates: true,
  dates: {
    global: {
      startDate: "",
      endDate: ""
    }
  },
  phases: {
    feasibility: false,
    dce: false,
    act: false,
    exe: false,
    reception: false,
    delivery: false
  },
  team: {},
  companies: [], // Add the empty companies array
  execution: {},
  technicalOffices: {},
  trades: {},
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

const ProjectCreationForm = () => {
  const methods = useForm<ProjectDetails>({
    defaultValues
  });
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data: ProjectDetails) => {
    console.log("Form submitted", data);
    setIsSubmitting(true);
    
    try {
      // Get existing projects from localStorage
      const existingProjects = JSON.parse(localStorage.getItem('projects') || '[]');
      
      // Create new project with unique ID and timestamp
      const newProject = {
        ...data,
        id: `project-${Date.now()}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: 'active'
      };
      
      // Add to projects array and save back to localStorage
      existingProjects.push(newProject);
      localStorage.setItem('projects', JSON.stringify(existingProjects));
      
      toast({
        title: "Projet créé avec succès",
        description: `Le projet ${data.projectName} a été créé.`,
      });
      
      // Redirect to projects list
      setTimeout(() => {
        navigate('/workspace/client-area/admin/projects');
      }, 1000);
    } catch (error) {
      console.error("Error saving project:", error);
      toast({
        title: "Erreur lors de la création du projet",
        description: "Une erreur est survenue lors de l'enregistrement du projet.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="border-border">
      <CardContent className="p-6">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="mb-6 grid grid-cols-3 lg:grid-cols-6">
                <TabsTrigger value="general">Générales</TabsTrigger>
                <TabsTrigger value="phases">Phases</TabsTrigger>
                <TabsTrigger value="dates">Dates</TabsTrigger>
                <TabsTrigger value="team">Équipe</TabsTrigger>
                <TabsTrigger value="execution">Exécution</TabsTrigger>
                <TabsTrigger value="technical">Technique</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general">
                <ProjectGeneralForm />
              </TabsContent>
              
              <TabsContent value="phases">
                <ProjectPhaseForm />
              </TabsContent>
              
              <TabsContent value="dates">
                <ProjectDateForm />
              </TabsContent>
              
              <TabsContent value="team">
                <ProjectTeamForm />
              </TabsContent>
              
              <TabsContent value="execution">
                <ProjectExecutionForm />
              </TabsContent>
              
              <TabsContent value="technical">
                <ProjectTechnicalForm />
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-end pt-6">
              <Button 
                type="submit" 
                className="bg-khaki-600 hover:bg-khaki-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enregistrement en cours...' : 'Valider la saisie et enregistrer'}
              </Button>
            </div>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
};

export default ProjectCreationForm;
