
import React, { useState } from 'react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FilePlus2, FileSpreadsheet, FileText, FileCode, FileCheck, TrendingUp } from 'lucide-react';
import SEOHeader from '@/components/common/SEOHeader';

// Import workspace components
import WorkspaceGuides from '@/components/workspace/WorkspaceGuides';
import WorkspaceCalculateurs from '@/components/workspace/WorkspaceCalculateurs';
import WorkspaceReglementation from '@/components/workspace/WorkspaceReglementation';
import WorkspaceVeilleReglementaire from '@/components/workspace/WorkspaceVeilleReglementaire';
import WorkspaceEspaceClient from '@/components/workspace/WorkspaceEspaceClient';

const Workspace = () => {
  const [activeTab, setActiveTab] = useState('guides');
  const [email, setEmail] = useState('');

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Scroll to top when changing tabs
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici on pourrait intégrer la logique d'inscription réelle
    setEmail('');
    alert('Merci pour votre inscription ! Vous serez informé du lancement de nos nouvelles fonctionnalités.');
  };

  // Structured data for the workspace page
  const workspaceStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Workspace Progineer - Ressources et outils pour vos projets",
    "description": "Explorez nos guides, modèles, fichiers Excel de rentabilité, veille réglementaire et outils de gestion de projet.",
    "url": "https://progineer.fr/workspace",
    "publisher": {
      "@type": "Organization",
      "name": "Progineer",
      "logo": {
        "@type": "ImageObject",
        "url": "https://progineer.fr/images/progineer-logo.png"
      }
    },
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://progineer.fr",
      "name": "Progineer - Maître d'œuvre en PACA"
    }
  };

  return (
    <>
      <SEOHeader
        title="Workspace - Ressources et outils pour vos projets"
        description="Explorez nos guides pratiques, calculateurs, articles de veille réglementaire et ressources documentaires pour vos projets de construction et rénovation en PACA."
        keywords="ressources construction, guides rénovation, outils maître d'œuvre, veille réglementaire, calculateurs chantier, actualités construction"
        canonicalUrl="https://progineer.fr/workspace"
        structuredData={workspaceStructuredData}
      />

      {/* Hero section with proper H1 */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-khaki-50 to-white">
        <Container size="md">
          <div className="text-center">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-khaki-100 text-khaki-800 text-sm font-medium">
              Workspace
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Espace ressources Progineer
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Explorez nos guides, calculateurs, articles de veille réglementaire, 
              documentation technique et outils de gestion de projet.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <Container>
          <div className="bg-card rounded-xl p-8 shadow-md border border-border">
            <Tabs defaultValue="guides" value={activeTab} onValueChange={handleTabChange} className="space-y-8">
              <TabsList className="w-full max-w-6xl mx-auto bg-khaki-50 p-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
                <TabsTrigger 
                  value="guides" 
                  className="flex flex-col md:flex-row items-center gap-1 md:gap-2 data-[state=active]:bg-card text-xs md:text-sm p-2"
                >
                  <FileText className="h-4 w-4" />
                  <span className="hidden sm:inline">Guides pratiques</span>
                  <span className="sm:hidden">Guides</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="calculateurs" 
                  className="flex flex-col md:flex-row items-center gap-1 md:gap-2 data-[state=active]:bg-card text-xs md:text-sm p-2"
                >
                  <FileSpreadsheet className="h-4 w-4" />
                  <span className="hidden sm:inline">Calculateurs</span>
                  <span className="sm:hidden">Calculs</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="reglementation" 
                  className="flex flex-col md:flex-row items-center gap-1 md:gap-2 data-[state=active]:bg-card text-xs md:text-sm p-2"
                >
                  <FileCheck className="h-4 w-4" />
                  <span className="hidden sm:inline">Réglementation</span>
                  <span className="sm:hidden">Règles</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="veille-reglementaire" 
                  className="flex flex-col md:flex-row items-center gap-1 md:gap-2 data-[state=active]:bg-card text-xs md:text-sm p-2"
                >
                  <TrendingUp className="h-4 w-4" />
                  <span className="hidden sm:inline">Veille Réglementaire</span>
                  <span className="sm:hidden">Veille</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="espace-client" 
                  className="flex flex-col md:flex-row items-center gap-1 md:gap-2 data-[state=active]:bg-card text-xs md:text-sm p-2"
                >
                  <FileCode className="h-4 w-4" />
                  <span className="hidden sm:inline">Espace client</span>
                  <span className="sm:hidden">Client</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="guides" className="mt-6">
                <WorkspaceGuides />
              </TabsContent>
              
              <TabsContent value="calculateurs" className="mt-6">
                <WorkspaceCalculateurs />
              </TabsContent>
              
              <TabsContent value="reglementation" className="mt-6">
                <WorkspaceReglementation />
              </TabsContent>
              
              <TabsContent value="veille-reglementaire" className="mt-6">
                <WorkspaceVeilleReglementaire />
              </TabsContent>
              
              <TabsContent value="espace-client" className="mt-6">
                <WorkspaceEspaceClient />
              </TabsContent>
            </Tabs>
            
            {/* Newsletter Subscription */}
            <div className="text-center bg-khaki-50 p-8 rounded-xl border border-khaki-100 mt-12">
              <h3 className="text-xl font-semibold mb-4">Soyez informé des nouvelles ressources</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Inscrivez-vous pour être informé en priorité lorsque de nouvelles ressources sont disponibles.
              </p>
              
              <div className="max-w-md mx-auto">
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Votre adresse email"
                    className="px-4 py-2 border border-border rounded-md flex-grow focus:ring-khaki-500 focus:border-khaki-500"
                    required
                  />
                  <Button type="submit">
                    <FilePlus2 className="mr-2 h-4 w-4" />
                    S'inscrire
                  </Button>
                </form>
                <p className="text-xs text-low-contrast mt-2">
                  En vous inscrivant, vous acceptez de recevoir des emails de Progineer. 
                  Vous pourrez vous désinscrire à tout moment.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SEO Footer */}
      <section className="py-8 bg-card border-t border-stone-200">
        <Container>
          <div className="text-sm text-stone-500">
            <p>
              Ingénieur, maître d'œuvre à Marseille et en PACA – Spécialiste en construction de maisons sur mesure, rénovation et extension. Retrouvez toutes nos ressources et outils pour faciliter vos projets immobiliers en région Provence-Alpes-Côte d'Azur.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Workspace;
