import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Calculator, 
  ScrollText, 
  Users, 
  Crown,
  TrendingUp,
  Search,
  Filter,
  LogIn,
  UserPlus,
  Shield,
  FolderOpen,
  MessageSquare,
  Settings,
  User,
  Calendar
} from 'lucide-react';
import Container from '@/components/common/Container';
import SEOHeader from '@/components/common/SEOHeader';
import SearchBar from './common/SearchBar';
import ResourceCard from './common/ResourceCard';
import { WorkspaceResource, SearchFilters } from '@/types/workspace';
import { useAuth } from '@/hooks/useAuth';

// Import des données
import { mainGuides, guideCategories, guidesStats } from '@/data/guides/guidesData';
import { allCalculators, calculatorCategories, calculatorsStats } from '@/data/calculators/calculatorsData';
import { allRegulations, regulationCategories, regulationStats } from '@/data/regulation/regulationData';

// Import du composant Veille Réglementaire
import WorkspaceVeilleReglementaire from '@/components/workspace/WorkspaceVeilleReglementaire';

// Composant pour les sous-onglets de réglementation
interface RegulationTabsSectionProps {
  allRegulations: WorkspaceResource[];
  searchQuery: string;
  searchFilters: SearchFilters;
  onResourceClick: (resource: WorkspaceResource) => void;
  onClearFilters: () => void;
}

const RegulationTabsSection: React.FC<RegulationTabsSectionProps> = ({
  allRegulations,
  searchQuery,
  searchFilters,
  onResourceClick,
  onClearFilters
}) => {
  const [activeRegulationTab, setActiveRegulationTab] = useState('all');

  // Filtrage par type de réglementation
  const getFilteredRegulations = (regulationType?: string) => {
    let filtered = allRegulations.filter(r => r.type === 'regulation') as any[];
    
    if (regulationType && regulationType !== 'all') {
      filtered = filtered.filter(r => r.regulationType === regulationType);
    }

    // Filtre par recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.tags.some((tag: string) => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  };

  const filteredRegulations = getFilteredRegulations(activeRegulationTab);

  return (
    <div className="p-0">
      <Tabs value={activeRegulationTab} onValueChange={setActiveRegulationTab} className="space-y-4">
        {/* Sous-onglets réglementation */}
        <div className="bg-muted/50 px-6 py-4 border-b">
          <TabsList className="grid w-full grid-cols-8 bg-card">
            <TabsTrigger value="all" className="text-xs">
              Tous ({allRegulations.filter(r => r.type === 'regulation').length})
            </TabsTrigger>
            <TabsTrigger value="dtu" className="text-xs">
              DTU ({allRegulations.filter(r => (r as any).regulationType === 'dtu').length})
            </TabsTrigger>
            <TabsTrigger value="fire-safety" className="text-xs">
              Incendie ({allRegulations.filter(r => (r as any).regulationType === 'fire-safety').length})
            </TabsTrigger>
            <TabsTrigger value="accessibility" className="text-xs">
              PMR ({allRegulations.filter(r => (r as any).regulationType === 'accessibility').length})
            </TabsTrigger>
            <TabsTrigger value="thermal" className="text-xs">
              Thermique ({allRegulations.filter(r => (r as any).regulationType === 'thermal').length})
            </TabsTrigger>
            <TabsTrigger value="acoustic" className="text-xs">
              Acoustique ({allRegulations.filter(r => (r as any).regulationType === 'acoustic').length})
            </TabsTrigger>
            <TabsTrigger value="seismic" className="text-xs">
              Sismique ({allRegulations.filter(r => (r as any).regulationType === 'seismic').length})
            </TabsTrigger>
            <TabsTrigger value="hygrothermal" className="text-xs">
              Hygrométrie ({allRegulations.filter(r => (r as any).regulationType === 'hygrothermal').length})
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Header avec résultats */}
        <div className="bg-muted/50 px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {filteredRegulations.length} document{filteredRegulations.length > 1 ? 's' : ''} trouvé{filteredRegulations.length > 1 ? 's' : ''}
              </h2>
              {searchQuery && (
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Résultats pour "{searchQuery}"
                </p>
              )}
            </div>
            
            {/* Tri rapide */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-300">Trier par :</span>
              <select className="text-sm border border-border rounded px-2 py-1">
                <option value="recent">Plus récent</option>
                <option value="popular">Plus populaire</option>
                <option value="name">Nom A-Z</option>
                <option value="difficulty">Difficulté</option>
              </select>
            </div>
          </div>
        </div>

        {/* Contenu des onglets */}
        <div className="px-6 pb-6">
          {filteredRegulations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRegulations.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  onClick={onResourceClick}
                  showFullDescription={false}
                  compact={false}
                />
              ))}
            </div>
          ) : (
                                <div className="text-center py-16">
              <Search className="h-16 w-16 mx-auto text-gray-600 dark:text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Aucun document trouvé
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Essayez de modifier vos critères de recherche ou changez de catégorie.
              </p>
              <Button 
                variant="outline"
                onClick={onClearFilters}
              >
                Effacer les filtres
              </Button>
            </div>
          )}
        </div>
      </Tabs>
    </div>
  );
};

interface WorkspaceLayoutProps {
  defaultTab?: string;
}

const WorkspaceLayout: React.FC<WorkspaceLayoutProps> = ({ defaultTab = 'guides' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({});
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  // Combinaison de toutes les ressources
  const allResources: WorkspaceResource[] = useMemo(() => [
    ...mainGuides,
    ...allCalculators,
    ...allRegulations
  ], []);

  // Filtrage des ressources
  const filteredResources = useMemo(() => {
    let filtered = allResources;

    // Filtre par onglet actif
    if (activeTab !== 'all' && activeTab !== 'client-space') {
      filtered = filtered.filter(resource => {
        switch (activeTab) {
          case 'guides':
            return resource.type === 'guide';
          case 'calculators':
            return resource.type === 'calculator';
          case 'regulation':
            return resource.type === 'regulation';
          default:
            return true;
        }
      });
    }

    // Filtre par recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Filtres avancés
    if (searchFilters.category) {
      filtered = filtered.filter(resource => 
        resource.category === searchFilters.category
      );
    }

    if (searchFilters.difficulty) {
      filtered = filtered.filter(resource => 
        resource.difficulty === searchFilters.difficulty
      );
    }

    if (searchFilters.type) {
      filtered = filtered.filter(resource => 
        resource.type === searchFilters.type
      );
    }

    if (searchFilters.isPremium !== undefined) {
      filtered = filtered.filter(resource => 
        resource.isPremium === searchFilters.isPremium
      );
    }

    return filtered;
  }, [allResources, activeTab, searchQuery, searchFilters]);

  // Catégories pour les filtres
  const currentCategories = useMemo(() => {
    switch (activeTab) {
      case 'guides':
        return guideCategories.map(cat => ({ 
          id: cat.id, 
          name: cat.name, 
          count: cat.resourceCount 
        }));
      case 'calculators':
        return calculatorCategories.map(cat => ({ 
          id: cat.id, 
          name: cat.name, 
          count: cat.resourceCount 
        }));
      case 'regulation':
        return regulationCategories.map(cat => ({ 
          id: cat.id, 
          name: cat.name, 
          count: cat.resourceCount 
        }));
      default:
        return [];
    }
  }, [activeTab]);

  const handleSearch = (query: string, filters: SearchFilters) => {
    setSearchQuery(query);
    setSearchFilters(filters);
  };

  const handleResourceClick = (resource: WorkspaceResource) => {
    // Navigation vers la ressource spécifique selon le type
    switch (resource.type) {
      case 'guide':
        // Pour les guides, navigation vers une page détaillée
        navigate(`/workspace/guides/${resource.id}`);
        break;
      case 'calculator':
        // Pour les calculateurs, navigation vers le calculateur spécifique
        navigate(`/workspace/calculators/${resource.id}`);
        break;
      case 'regulation':
        // Pour la réglementation, navigation vers le document
        navigate(`/workspace/regulation/${resource.id}`);
        break;
      default:
        console.log('Type de ressource non reconnu:', resource.type);
    }
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Reset des filtres lors du changement d'onglet
    setSearchQuery('');
    setSearchFilters({});
  };

  // Statistiques globales
  const totalStats = {
    guides: guidesStats.totalGuides,
    calculators: calculatorsStats.totalCalculators,
    regulations: regulationStats.totalDocuments,
    total: guidesStats.totalGuides + calculatorsStats.totalCalculators + regulationStats.totalDocuments
  };

  // SEO Data
  const workspaceStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Workspace Progineer - Plateforme technique complète",
    "description": `Plus de ${totalStats.total} ressources techniques : guides, calculateurs professionnels, réglementation pour vos projets de construction en PACA.`,
    "url": "https://progineer.fr/workspace",
    "publisher": {
      "@type": "Organization",
      "name": "Progineer",
      "logo": {
        "@type": "ImageObject", 
        "url": "https://progineer.fr/images/progineer-logo.png"
      }
    }
  };

  // Fonction pour naviguer vers l'espace client
  const handleClientAreaNavigation = (section?: string) => {
    if (!isAuthenticated) {
      navigate('/workspace/sign-in');
      return;
    }
    
    const baseUrl = '/workspace/client-area';
    if (section) {
      navigate(`${baseUrl}/${section}`);
    } else {
      navigate(baseUrl);
    }
  };

  // Contenu de l'espace client
  const renderClientSpaceContent = () => {
    if (!isAuthenticated) {
      return (
        <div className="text-center py-16">
          <Shield className="h-16 w-16 mx-auto text-gray-600 dark:text-gray-300 mb-6" />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Espace Client Privé
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            Accédez à votre espace personnel pour gérer vos projets, consulter vos documents et communiquer avec notre équipe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/workspace/sign-in')}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Se connecter
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/workspace/sign-up')}
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Créer un compte
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Bienvenue, {user?.firstName || 'Client'} !
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Gérez vos projets et accédez à vos documents personnalisés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 cursor-pointer hover:shadow-md transition-shadow"
               onClick={() => handleClientAreaNavigation('projects')}>
            <FolderOpen className="h-8 w-8 text-blue-600 mb-4" />
            <h4 className="text-lg font-semibold text-blue-900 mb-2">Mes Projets</h4>
            <p className="text-blue-700 text-sm">
              Suivez l'avancement de vos projets de construction et rénovation
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 cursor-pointer hover:shadow-md transition-shadow"
               onClick={() => handleClientAreaNavigation('messages')}>
            <MessageSquare className="h-8 w-8 text-green-600 mb-4" />
            <h4 className="text-lg font-semibold text-green-900 mb-2">Messages</h4>
            <p className="text-green-700 text-sm">
              Communiquez directement avec notre équipe technique
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 cursor-pointer hover:shadow-md transition-shadow"
               onClick={() => handleClientAreaNavigation('planning')}>
            <Calendar className="h-8 w-8 text-purple-600 mb-4" />
            <h4 className="text-lg font-semibold text-purple-900 mb-2">Planning</h4>
            <p className="text-purple-700 text-sm">
              Consultez le planning détaillé de vos travaux
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 cursor-pointer hover:shadow-md transition-shadow"
               onClick={() => handleClientAreaNavigation('profile')}>
            <User className="h-8 w-8 text-orange-600 mb-4" />
            <h4 className="text-lg font-semibold text-orange-900 mb-2">Mon Profil</h4>
            <p className="text-orange-700 text-sm">
              Gérez vos informations personnelles et préférences
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 cursor-pointer hover:shadow-md transition-shadow"
               onClick={() => handleClientAreaNavigation('settings')}>
            <Settings className="h-8 w-8 text-gray-600 dark:text-gray-300 mb-4" />
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Paramètres</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Configurez vos préférences et notifications
            </p>
          </div>

          <div className="bg-gradient-to-br from-khaki-50 to-khaki-100 rounded-xl p-6 cursor-pointer hover:shadow-md transition-shadow"
               onClick={() => handleClientAreaNavigation()}>
            <Crown className="h-8 w-8 text-khaki-600 mb-4" />
            <h4 className="text-lg font-semibold text-khaki-900 mb-2">Tableau de bord</h4>
            <p className="text-khaki-700 text-sm">
              Vue d'ensemble de tous vos éléments
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <SEOHeader
        title={`Workspace Technique | Plus de ${totalStats.total} ressources professionnelles du bâtiment`}
        description={`Plateforme complète : ${totalStats.guides} guides pratiques, ${totalStats.calculators} calculateurs professionnels, ${totalStats.regulations} documents réglementaires pour vos projets en PACA.`}
        keywords="workspace bâtiment, guides construction, calculateurs Eurocodes, réglementation DTU, outils thermiques, calculateurs acoustiques, RE2020, sécurité incendie"
        canonicalUrl="https://progineer.fr/workspace"
        structuredData={workspaceStructuredData}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-khaki-50 via-white to-stone-50">
        <Container size="lg">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-2 mb-6">
              <Badge variant="outline" className="bg-khaki-100 text-khaki-800 border-khaki-200">
                🏗️ Workspace Pro v2.0
              </Badge>
              <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                {totalStats.total}+ Ressources
              </Badge>
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                <TrendingUp className="h-3 w-3 mr-1" />
                SEO Optimisé
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-khaki-600 to-stone-800 bg-clip-text text-transparent">
              Plateforme Technique Complète
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              La référence technique du bâtiment : <strong>guides pratiques</strong>, <strong>calculateurs professionnels</strong>, 
              <strong>réglementation complète</strong> et <strong>outils avancés</strong> pour tous vos projets en PACA.
            </p>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
              <div className="bg-card/80 backdrop-blur rounded-lg p-4 border border-khaki-100">
                <div className="text-2xl font-bold text-khaki-600">{totalStats.guides}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Guides Pratiques</div>
              </div>
              <div className="bg-card/80 backdrop-blur rounded-lg p-4 border border-blue-100">
                <div className="text-2xl font-bold text-blue-600">{totalStats.calculators}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Calculateurs</div>
              </div>
              <div className="bg-card/80 backdrop-blur rounded-lg p-4 border border-green-100">
                <div className="text-2xl font-bold text-green-600">{totalStats.regulations}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">DTU & Normes</div>
              </div>
              <div className="bg-card/80 backdrop-blur rounded-lg p-4 border border-purple-100">
                <div className="text-2xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Accès Libre</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <Container size="lg">
          {/* Barre de recherche globale */}
          {activeTab !== 'client-space' && (
            <div className="mb-8">
              <SearchBar
                onSearch={handleSearch}
                placeholder="Rechercher dans toutes les ressources..."
                categories={currentCategories}
                showFilters={true}
              />
            </div>
          )}

          <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-8">
            
            {/* Enhanced Tab Navigation */}
            <div className="bg-card rounded-2xl p-2 shadow-lg border border-border">
              <TabsList className="w-full bg-transparent grid grid-cols-2 lg:grid-cols-5 gap-2">
                <TabsTrigger 
                  value="guides" 
                  className="data-[state=active]:bg-khaki-100 data-[state=active]:text-khaki-800 rounded-xl py-3 px-4 transition-all"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  <div className="text-left">
                    <div className="font-medium">Guides Pratiques</div>
                    <div className="text-xs opacity-70">{totalStats.guides} guides</div>
                  </div>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="calculators" 
                  className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800 rounded-xl py-3 px-4 transition-all"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  <div className="text-left">
                    <div className="font-medium">Calculateurs</div>
                    <div className="text-xs opacity-70">{totalStats.calculators} outils</div>
                  </div>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="regulation" 
                  className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800 rounded-xl py-3 px-4 transition-all"
                >
                  <ScrollText className="h-5 w-5 mr-2" />
                  <div className="text-left">
                    <div className="font-medium">Réglementation</div>
                    <div className="text-xs opacity-70">{totalStats.regulations} documents</div>
                  </div>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="veille-reglementaire" 
                  className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-800 rounded-xl py-3 px-4 transition-all"
                >
                  <TrendingUp className="h-5 w-5 mr-2" />
                  <div className="text-left">
                    <div className="font-medium">Veille Réglementaire</div>
                    <div className="text-xs opacity-70">10 articles</div>
                  </div>
                </TabsTrigger>
                
                <TabsTrigger 
                  value="client-space" 
                  className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800 rounded-xl py-3 px-4 transition-all"
                >
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    <Crown className="h-3 w-3 mr-1 text-yellow-500" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">Espace Client</div>
                    <div className="text-xs opacity-70">Accès privé</div>
                  </div>
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tab Contents */}
            <div className="bg-card rounded-xl shadow-md border border-border overflow-hidden">
              
              {/* Tab Content pour Espace Client */}
              <TabsContent value="client-space" className="p-6 m-0">
                {renderClientSpaceContent()}
              </TabsContent>

              {/* Autres onglets */}
              <TabsContent value="guides" className="m-0">
                {/* Header avec résultats */}
                <div className="bg-muted/50 px-6 py-4 border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {filteredResources.length} ressource{filteredResources.length > 1 ? 's' : ''} trouvée{filteredResources.length > 1 ? 's' : ''}
                      </h2>
                      {searchQuery && (
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Résultats pour "{searchQuery}"
                        </p>
                      )}
                    </div>
                    
                    {/* Tri rapide */}
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Trier par :</span>
                      <select className="text-sm border border-border rounded px-2 py-1">
                        <option value="recent">Plus récent</option>
                        <option value="popular">Plus populaire</option>
                        <option value="name">Nom A-Z</option>
                        <option value="difficulty">Difficulté</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Grille des ressources */}
                <div className="p-6">
                  {filteredResources.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredResources.map((resource) => (
                        <ResourceCard
                          key={resource.id}
                          resource={resource}
                          onClick={handleResourceClick}
                          showFullDescription={false}
                          compact={false}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <Search className="h-16 w-16 mx-auto text-gray-600 dark:text-gray-300 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        Aucune ressource trouvée
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Essayez de modifier vos critères de recherche ou vos filtres.
                      </p>
                      <Button 
                        variant="outline"
                        onClick={() => {
                          setSearchQuery('');
                          setSearchFilters({});
                        }}
                      >
                        Effacer les filtres
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="calculators" className="m-0">
                {/* Header avec résultats */}
                <div className="bg-muted/50 px-6 py-4 border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {filteredResources.length} ressource{filteredResources.length > 1 ? 's' : ''} trouvée{filteredResources.length > 1 ? 's' : ''}
                      </h2>
                      {searchQuery && (
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Résultats pour "{searchQuery}"
                        </p>
                      )}
                    </div>
                    
                    {/* Tri rapide */}
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600 dark:text-gray-300">Trier par :</span>
                      <select className="text-sm border border-border rounded px-2 py-1">
                        <option value="recent">Plus récent</option>
                        <option value="popular">Plus populaire</option>
                        <option value="name">Nom A-Z</option>
                        <option value="difficulty">Difficulté</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Grille des ressources */}
                <div className="p-6">
                  {filteredResources.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredResources.map((resource) => (
                        <ResourceCard
                          key={resource.id}
                          resource={resource}
                          onClick={handleResourceClick}
                          showFullDescription={false}
                          compact={false}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <Search className="h-16 w-16 mx-auto text-gray-600 dark:text-gray-300 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        Aucune ressource trouvée
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Essayez de modifier vos critères de recherche ou vos filtres.
                      </p>
                      <Button 
                        variant="outline"
                        onClick={() => {
                          setSearchQuery('');
                          setSearchFilters({});
                        }}
                      >
                        Effacer les filtres
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="regulation" className="m-0">
                {/* Sous-onglets pour la réglementation */}
                <RegulationTabsSection 
                  allRegulations={allRegulations}
                  searchQuery={searchQuery}
                  searchFilters={searchFilters}
                  onResourceClick={handleResourceClick}
                  onClearFilters={() => {
                    setSearchQuery('');
                    setSearchFilters({});
                  }}
                />
              </TabsContent>

              <TabsContent value="veille-reglementaire" className="m-0">
                <div className="p-6">
                  <WorkspaceVeilleReglementaire />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </Container>
      </section>

      {/* SEO Footer */}
      <section className="py-12 bg-gradient-to-r from-stone-50 to-khaki-50 dark:from-slate-800 dark:to-khaki-900 border-t border-stone-200 dark:border-slate-700">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              La référence technique du bâtiment en PACA
            </h2>
            <div className="text-sm text-gray-600 dark:text-gray-300 space-y-2 max-w-4xl mx-auto">
              <p>
                <strong>Workspace Progineer v2.0</strong> - Plateforme technique complète pour professionnels et particuliers : 
                {totalStats.guides} guides construction RE2020, {totalStats.calculators} calculateurs Eurocodes thermiques et acoustiques, 
                {totalStats.regulations} documents réglementaires DTU complets, outils sécurité incendie et accessibilité PMR. 
                Plus de {totalStats.total} ressources professionnelles pour réussir vos projets de construction, rénovation 
                et extension en région Provence-Alpes-Côte d'Azur.
              </p>
              <p>
                <strong>Mots-clés :</strong> calculateurs Eurocodes, guides RE2020, DTU bâtiment, calculateurs thermiques, 
                outils acoustiques, réglementation incendie, accessibilité PMR, calculateurs structure, 
                outils géotechnique, workspace technique Marseille PACA.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default WorkspaceLayout; 
