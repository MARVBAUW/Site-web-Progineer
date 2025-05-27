import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Calculator, HomeIcon, Building2, Scale, PiggyBank, Ruler, Thermometer, Volume } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InternalLinkText } from '@/utils/internalLinking';
import FAQStructuredData from '@/components/seo/FAQStructuredData';

// Import workspace components
import FraisNotaireCalculator from '@/components/workspace/calculators/immobilier/FraisNotaireCalculator';
import RentabiliteLocativeCalculator from '@/components/workspace/calculators/rentability/RentabilityCalculator';
import SurfaceHabitableCalculator from '@/components/workspace/calculators/immobilier/SurfaceHabitableCalculator';
import AcousticCalculator from '@/components/workspace/calculators/acoustic/AcousticCalculator';
import DpeCalculator from '@/components/workspace/calculators/thermal/DpeCalculator';
import CapaciteEmpruntCalculator from '@/components/workspace/calculators/financier/CapaciteEmpruntCalculator';
import EurocodesCalculator from '@/components/workspace/calculators/eurocode/EurocodeCalculators';
import SimulationManager from './calculateurs/simulation/SimulationManager';
import CalculatorDirectory from './CalculatorDirectory';
import { useToast } from '@/hooks/use-toast';

const WorkspaceCalculateurs = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("immobilier");
  
  // Extract the tab parameter from URL if available
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, []);

  // Restaure l'état et le scroll au montage
  useEffect(() => {
    const savedState = sessionStorage.getItem('workspace_calculateurs_state');
    if (savedState) {
      const { activeTab } = JSON.parse(savedState);
      if (activeTab) setActiveTab(activeTab);
    }
    const savedScroll = sessionStorage.getItem('workspace_calculateurs_scroll');
    if (savedScroll) {
      setTimeout(() => window.scrollTo(0, Number(savedScroll)), 50);
      sessionStorage.removeItem('workspace_calculateurs_scroll');
    }
  }, []);

  // Sauvegarde l'état à chaque changement
  useEffect(() => {
    sessionStorage.setItem('workspace_calculateurs_state', JSON.stringify({
      activeTab,
    }));
  }, [activeTab]);

  return (
    <div className="space-y-6">
      <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-200 mb-6">
        <h3 className="text-zinc-800 font-medium flex items-center gap-2 mb-2">
          <Calculator className="h-5 w-5" />
          Calculateurs et Simulations
        </h3>
        <p className="text-zinc-700 text-sm">
          Accédez à nos outils de calcul spécialisés pour différents aspects de vos projets.
          Ces calculateurs vous aideront à estimer les coûts, dimensionner vos espaces et vérifier la conformité réglementaire.
        </p>
      </div>

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-zinc-100 p-1 flex flex-wrap">
          <TabsTrigger value="directory" className="data-[state=active]:bg-card flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            <span>Répertoire</span>
          </TabsTrigger>
          <TabsTrigger value="immobilier" className="data-[state=active]:bg-card flex items-center gap-2">
            <HomeIcon className="h-4 w-4" />
            <span>Immobilier</span>
          </TabsTrigger>
          <TabsTrigger value="projet" className="data-[state=active]:bg-card flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            <span>Projet</span>
          </TabsTrigger>
          <TabsTrigger value="financier" className="data-[state=active]:bg-card flex items-center gap-2">
            <PiggyBank className="h-4 w-4" />
            <span>Financier</span>
          </TabsTrigger>
          <TabsTrigger value="reglementaire" className="data-[state=active]:bg-card flex items-center gap-2">
            <Scale className="h-4 w-4" />
            <span>Réglementaire</span>
          </TabsTrigger>
          <TabsTrigger value="technique" className="data-[state=active]:bg-card flex items-center gap-2">
            <Ruler className="h-4 w-4" />
            <span>Technique</span>
          </TabsTrigger>
          <TabsTrigger value="simulations" className="data-[state=active]:bg-card flex items-center gap-2">
            <Calculator className="h-4 w-4" />
            <span>Mes simulations</span>
          </TabsTrigger>
        </TabsList>

        {/* Répertoire complet des calculateurs */}
        <TabsContent value="directory">
          <CalculatorDirectory />
        </TabsContent>

        {/* Onglet Immobilier */}
        <TabsContent value="immobilier">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Surface habitable</CardTitle>
              </CardHeader>
              <CardContent>
                <SurfaceHabitableCalculator />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Frais de notaire</CardTitle>
              </CardHeader>
              <CardContent>
                <FraisNotaireCalculator />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Onglet Projet */}
        <TabsContent value="projet">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">DPE prévisionnel</CardTitle>
              </CardHeader>
              <CardContent>
                <DpeCalculator />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Eurocodes</CardTitle>
              </CardHeader>
              <CardContent>
                <EurocodesCalculator />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Acoustique</CardTitle>
              </CardHeader>
              <CardContent>
                <AcousticCalculator />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Onglet Financier */}
        <TabsContent value="financier">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Capacité d'emprunt</CardTitle>
              </CardHeader>
              <CardContent>
                <CapaciteEmpruntCalculator />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Rentabilité locative</CardTitle>
              </CardHeader>
              <CardContent>
                <RentabiliteLocativeCalculator />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Onglet Réglementaire */}
        <TabsContent value="reglementaire">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vérification accessibilité</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-md">
                  <p className="text-sm text-blue-800">Ce calculateur sera disponible prochainement.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tableau de classification ERP</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 p-4 rounded-md">
                  <p className="text-sm text-blue-800">Ce calculateur sera disponible prochainement.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Onglet Technique */}
        <TabsContent value="technique">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Volume className="h-4 w-4" />
                  Acoustique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AcousticCalculator />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Thermometer className="h-4 w-4" />
                  DPE
                </CardTitle>
              </CardHeader>
              <CardContent>
                <DpeCalculator />
              </CardContent>
            </Card>
          </div>
          <EurocodesCalculator />
        </TabsContent>

        {/* Onglet Mes simulations */}
        <TabsContent value="simulations">
          <SimulationManager />
        </TabsContent>
      </Tabs>

      {/* Bloc SEO Footer et FAQ */}
      <div className="mt-16 space-y-8">
        <div className="bg-stone-50 border-t border-stone-200 p-6 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">À propos de nos calculateurs</h2>
          <p className="text-gray-700 mb-4">
            <InternalLinkText text={
              `Progineer met à disposition des calculateurs professionnels pour la construction, la rénovation et l'investissement immobilier en PACA. Nos outils couvrent l'estimation de surface, la rentabilité locative, les frais de notaire, la conformité réglementaire et bien plus. Découvrez aussi nos guides pratiques et nos fiches de réglementation pour compléter vos analyses.`
            } maxOccurrences={4} />
          </p>
        </div>
        <div className="bg-stone-100 border border-stone-200 p-6 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">Questions fréquentes sur les calculateurs</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded">
              <strong>Les calculateurs sont-ils gratuits ?</strong>
              <p>La plupart des calculateurs sont accessibles gratuitement. Certains outils avancés peuvent nécessiter un compte ou un accès premium.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <strong>Comment utiliser les calculateurs ?</strong>
              <p>Choisissez le calculateur adapté à votre besoin, saisissez vos données et obtenez instantanément les résultats et conseils associés.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <strong>Puis-je sauvegarder mes simulations ?</strong>
              <p>Oui, en créant un compte, vous pouvez sauvegarder vos simulations et y accéder à tout moment.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <strong>Les résultats sont-ils fiables ?</strong>
              <p>Nos calculateurs sont conçus par des experts et régulièrement mis à jour pour garantir la fiabilité des résultats.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <strong>Puis-je suggérer un nouveau calculateur ?</strong>
              <p>Oui, contactez-nous pour proposer un nouvel outil ou une amélioration.</p>
            </div>
          </div>
          {/* Données structurées FAQ pour Google */}
          <FAQStructuredData
            faqs={[
              { question: "Les calculateurs sont-ils gratuits ?", answer: "La plupart des calculateurs sont accessibles gratuitement. Certains outils avancés peuvent nécessiter un compte ou un accès premium." },
              { question: "Comment utiliser les calculateurs ?", answer: "Choisissez le calculateur adapté à votre besoin, saisissez vos données et obtenez instantanément les résultats et conseils associés." },
              { question: "Puis-je sauvegarder mes simulations ?", answer: "Oui, en créant un compte, vous pouvez sauvegarder vos simulations et y accéder à tout moment." },
              { question: "Les résultats sont-ils fiables ?", answer: "Nos calculateurs sont conçus par des experts et régulièrement mis à jour pour garantir la fiabilité des résultats." },
              { question: "Puis-je suggérer un nouveau calculateur ?", answer: "Oui, contactez-nous pour proposer un nouvel outil ou une amélioration." }
            ]}
            pageUrl="https://progineer.fr/workspace/calculateurs"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkspaceCalculateurs;
