import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calculator, Clock, Calendar, Share2, Info, Play, BookOpen, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Container from '@/components/common/Container';
import SEOHeader from '@/components/common/SEOHeader';
import { allCalculators } from '@/data/calculators/calculatorsData';

const CalculatorDetailPage: React.FC = () => {
  const { calculatorId } = useParams<{ calculatorId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('calculator');
  const [inputValues, setInputValues] = useState<{ [key: string]: number | string }>({});
  const [results, setResults] = useState<{ [key: string]: number | string }>({});
  const [isCalculating, setIsCalculating] = useState(false);

  // Trouver le calculateur par ID
  const calculator = allCalculators.find(c => c.id === calculatorId);

  if (!calculator) {
    return (
      <Container className="py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Calculateur non trouvé</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Le calculateur demandé n'existe pas ou a été supprimé.</p>
          <Button onClick={() => navigate('/workspace?tab=calculateurs')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux calculateurs
          </Button>
        </div>
      </Container>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-muted text-foreground border-border';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'Débutant';
      case 'intermediate':
        return 'Intermédiaire';
      case 'advanced':
        return 'Avancé';
      default:
        return '';
    }
  };

  const getCategoryLabel = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      'thermal': 'Thermique RE2020',
      'eurocodes': 'Eurocodes Structures',
      'acoustic': 'Acoustique',
      'fire': 'Sécurité Incendie',
      'accessibility': 'Accessibilité PMR',
      'fluids': 'Fluides & Réseaux',
      'financial': 'Financier & Économique',
      'surface': 'Surfaces & Métrés'
    };
    return categoryMap[category] || category;
  };

  const handleInputChange = (inputId: string, value: string) => {
    setInputValues(prev => ({
      ...prev,
      [inputId]: value
    }));
  };

  const performCalculation = () => {
    setIsCalculating(true);
    setTimeout(() => {
      const newResults: { [key: string]: number | string } = {};
      switch (calculator.id) {
        case 'resistance-thermique': {
          const epaisseur = Number(inputValues['epaisseur']) || 0;
          const conductivite = Number(inputValues['conductivite']) || 1;
          newResults['resistance'] = conductivite > 0 ? (epaisseur / 1000 / conductivite).toFixed(3) : 'Erreur';
          newResults['unite'] = 'm².K/W';
          break;
        }
        case 'coefficient-u': {
          const resistanceTotal = Number(inputValues['resistance']) || 1;
          newResults['coefficientU'] = resistanceTotal > 0 ? (1 / resistanceTotal).toFixed(3) : 'Erreur';
          newResults['unite'] = 'W/m².K';
          break;
        }
        case 'surface-habitable': {
          const longueur = Number(inputValues['longueur']) || 0;
          const largeur = Number(inputValues['largeur']) || 0;
          const hauteur = Number(inputValues['hauteur']) || 0;
          newResults['surface'] = (longueur * largeur).toFixed(2);
          newResults['volume'] = (longueur * largeur * hauteur).toFixed(2);
          newResults['unitesSurface'] = 'm²';
          newResults['unitesVolume'] = 'm³';
          break;
        }
        case 'places-parking-pmr': {
          const totalPlaces = Number(inputValues['totalPlaces']) || 0;
          let placesPMR = 0;
          if (totalPlaces <= 500) {
            placesPMR = Math.max(1, Math.ceil(totalPlaces * 0.02));
          } else {
            placesPMR = 10 + Math.ceil((totalPlaces - 500) * 0.005);
          }
          newResults['placesPMR'] = placesPMR;
          newResults['pourcentage'] = totalPlaces > 0 ? ((placesPMR / totalPlaces) * 100).toFixed(1) : '0.0';
          break;
        }
        case 'effectif-erp': {
          const surface = Number(inputValues['surface']) || 0;
          const typeERP = inputValues['typeERP'] || 'M';
          let densiteOccupation = 3;
          switch (typeERP) {
            case 'L': densiteOccupation = 1; break;
            case 'N': densiteOccupation = 1.5; break;
            case 'O': densiteOccupation = 8; break;
            case 'R': densiteOccupation = 2; break;
            default: densiteOccupation = 3; break;
          }
          newResults['effectif'] = densiteOccupation > 0 ? Math.ceil(surface / densiteOccupation) : 'Erreur';
          newResults['densite'] = densiteOccupation;
          break;
        }
        case 'rentabilite-investissement': {
          const investissement = Number(inputValues['investissement']) || 0;
          const loyer = Number(inputValues['loyer']) || 0;
          const charges = Number(inputValues['charges']) || 0;
          const loyerNet = loyer - charges;
          const rendementBrut = investissement > 0 ? (loyer * 12 / investissement * 100) : 0;
          const rendementNet = investissement > 0 ? (loyerNet * 12 / investissement * 100) : 0;
          newResults['rendementBrut'] = rendementBrut.toFixed(2);
          newResults['rendementNet'] = rendementNet.toFixed(2);
          newResults['loyerNet'] = loyerNet.toFixed(2);
          break;
        }
        default: {
          const firstInput = Object.values(inputValues)[0] || 0;
          newResults['resultat'] = (Number(firstInput) * 1.2).toFixed(2);
          newResults['unite'] = 'unité';
        }
      }
      setResults(newResults);
      setIsCalculating(false);
    }, 1000);
  };

  const exportResults = () => {
    const resultText = `
RÉSULTATS DE CALCUL
==================
Calculateur: ${calculator.title}
Date: ${new Date().toLocaleDateString('fr-FR')}

PARAMÈTRES D'ENTRÉE:
${Object.entries(inputValues).map(([key, value]) => `${key}: ${value}`).join('\n')}

RÉSULTATS:
${Object.entries(results).map(([key, value]) => `${key}: ${value}`).join('\n')}

Généré par Progineer - ${window.location.href}
    `;
    
    const blob = new Blob([resultText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `calcul_${calculator.id}_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <SEOHeader
        title={calculator.seoData?.title || calculator.title}
        description={calculator.seoData?.metaDescription || calculator.description}
        keywords={calculator.seoData?.keywords?.join(', ') || calculator.tags.join(', ')}
        canonicalUrl={calculator.seoData?.canonicalUrl || `https://progineer.fr/workspace/calculators/${calculator.id}`}
      />

      <Container className="py-8">
        {/* Navigation */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/workspace?tab=calculateurs')}
            className="text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux calculateurs
          </Button>
        </div>

        {/* Header du calculateur */}
        <div className="bg-card rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Calculateur</span>
                {calculator.difficulty && (
                  <Badge 
                    variant="outline" 
                    className={getDifficultyColor(calculator.difficulty)}
                  >
                    {getDifficultyLabel(calculator.difficulty)}
                  </Badge>
                )}
                {calculator.isPremium && (
                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                    Premium
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {calculator.title}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {calculator.description}
              </p>

              {/* Métadonnées */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-low-contrast mb-6">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{calculator.estimatedTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Mis à jour le {formatDate(calculator.lastUpdated)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Info className="h-4 w-4" />
                  <span>{getCategoryLabel(calculator.category)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu détaillé avec onglets */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="calculator">Calculateur</TabsTrigger>
            <TabsTrigger value="overview">Aperçu</TabsTrigger>
            <TabsTrigger value="inputs">Paramètres</TabsTrigger>
            <TabsTrigger value="formula">Formule</TabsTrigger>
            <TabsTrigger value="examples">Exemples</TabsTrigger>
          </TabsList>

          {/* Onglet Calculateur - NOUVEAU */}
          <TabsContent value="calculator" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Formulaire de calcul */}
              <Card>
                <CardHeader>
                  <CardTitle>Paramètres de calcul</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Inputs dynamiques basés sur le calculateur */}
                  {calculator.id === 'resistance-thermique' && (
                    <>
                      <div>
                        <Label htmlFor="epaisseur">Épaisseur (mm)</Label>
                        <Input
                          id="epaisseur"
                          type="number"
                          placeholder="100"
                          value={inputValues.epaisseur || ''}
                          onChange={(e) => handleInputChange('epaisseur', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="conductivite">Conductivité thermique (W/m.K)</Label>
                        <Input
                          id="conductivite"
                          type="number"
                          step="0.001"
                          placeholder="0.040"
                          value={inputValues.conductivite || ''}
                          onChange={(e) => handleInputChange('conductivite', e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  {calculator.id === 'coefficient-u' && (
                    <>
                      <div>
                        <Label htmlFor="resistance">Résistance thermique totale (m².K/W)</Label>
                        <Input
                          id="resistance"
                          type="number"
                          step="0.01"
                          placeholder="2.5"
                          value={inputValues.resistance || ''}
                          onChange={(e) => handleInputChange('resistance', e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  {calculator.id === 'surface-habitable' && (
                    <>
                      <div>
                        <Label htmlFor="longueur">Longueur (m)</Label>
                        <Input
                          id="longueur"
                          type="number"
                          step="0.01"
                          placeholder="10.5"
                          value={inputValues.longueur || ''}
                          onChange={(e) => handleInputChange('longueur', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="largeur">Largeur (m)</Label>
                        <Input
                          id="largeur"
                          type="number"
                          step="0.01"
                          placeholder="8.2"
                          value={inputValues.largeur || ''}
                          onChange={(e) => handleInputChange('largeur', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="hauteur">Hauteur (m)</Label>
                        <Input
                          id="hauteur"
                          type="number"
                          step="0.01"
                          placeholder="2.5"
                          value={inputValues.hauteur || ''}
                          onChange={(e) => handleInputChange('hauteur', e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  {calculator.id === 'places-parking-pmr' && (
                    <>
                      <div>
                        <Label htmlFor="totalPlaces">Nombre total de places de parking</Label>
                        <Input
                          id="totalPlaces"
                          type="number"
                          placeholder="100"
                          value={inputValues.totalPlaces || ''}
                          onChange={(e) => handleInputChange('totalPlaces', e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  {calculator.id === 'effectif-erp' && (
                    <>
                      <div>
                        <Label htmlFor="surface">Surface accessible au public (m²)</Label>
                        <Input
                          id="surface"
                          type="number"
                          placeholder="150"
                          value={inputValues.surface || ''}
                          onChange={(e) => handleInputChange('surface', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="typeERP">Type d'ERP</Label>
                        <select 
                          id="typeERP"
                          className="w-full p-2 border border-border rounded"
                          value={inputValues.typeERP || 'M'}
                          onChange={(e) => handleInputChange('typeERP', e.target.value)}
                        >
                          <option value="M">M - Magasins</option>
                          <option value="L">L - Spectacles</option>
                          <option value="N">N - Restaurants</option>
                          <option value="O">O - Hôtels</option>
                          <option value="R">R - Enseignement</option>
                        </select>
                      </div>
                    </>
                  )}

                  {calculator.id === 'rentabilite-investissement' && (
                    <>
                      <div>
                        <Label htmlFor="investissement">Montant de l'investissement (€)</Label>
                        <Input
                          id="investissement"
                          type="number"
                          placeholder="200000"
                          value={inputValues.investissement || ''}
                          onChange={(e) => handleInputChange('investissement', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="loyer">Loyer mensuel brut (€)</Label>
                        <Input
                          id="loyer"
                          type="number"
                          placeholder="1200"
                          value={inputValues.loyer || ''}
                          onChange={(e) => handleInputChange('loyer', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="charges">Charges mensuelles (€)</Label>
                        <Input
                          id="charges"
                          type="number"
                          placeholder="200"
                          value={inputValues.charges || ''}
                          onChange={(e) => handleInputChange('charges', e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  {/* Calculateur générique pour les autres */}
                  {!['resistance-thermique', 'coefficient-u', 'surface-habitable', 'places-parking-pmr', 'effectif-erp', 'rentabilite-investissement'].includes(calculator.id) && (
                    <div>
                      <Label htmlFor="valeur">Valeur d'entrée</Label>
                      <Input
                        id="valeur"
                        type="number"
                        placeholder="100"
                        value={inputValues.valeur || ''}
                        onChange={(e) => handleInputChange('valeur', e.target.value)}
                      />
                    </div>
                  )}

                  <Button 
                    onClick={performCalculation}
                    disabled={isCalculating}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    {isCalculating ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Calcul en cours...
                      </>
                    ) : (
                      <>
                        <Calculator className="h-4 w-4 mr-2" />
                        Calculer
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Résultats */}
              <Card>
                <CardHeader>
                  <CardTitle>Résultats</CardTitle>
                </CardHeader>
                <CardContent>
                  {Object.keys(results).length > 0 ? (
                    <div className="space-y-4">
                      {Object.entries(results).map(([key, value]) => (
                        <div key={key} className="bg-blue-50 rounded-lg p-4">
                          <div className="text-sm text-blue-600 font-medium mb-1">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </div>
                          <div className="text-2xl font-bold text-blue-900">
                            {value}
                          </div>
                        </div>
                      ))}
                      
                      <Button 
                        onClick={exportResults}
                        variant="outline"
                        className="w-full mt-4"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Exporter les résultats
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-low-contrast">
                      <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Remplissez les paramètres et cliquez sur "Calculer" pour voir les résultats</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Description détaillée */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Description</CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {calculator.description}
                    </p>
                    
                    {/* Tags */}
                    {calculator.tags && calculator.tags.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-medium mb-3">Mots-clés</h4>
                        <div className="flex flex-wrap gap-2">
                          {calculator.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Informations */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Informations</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Catégorie</span>
                      <span className="font-medium">{getCategoryLabel(calculator.category)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Difficulté</span>
                      <span className="font-medium">{getDifficultyLabel(calculator.difficulty || '')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Temps estimé</span>
                      <span className="font-medium">{calculator.estimatedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Accès</span>
                      <span className="font-medium">
                        {calculator.isPremium ? 'Premium' : 'Gratuit'}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Calculateurs liés */}
                {calculator.relatedCalculators && calculator.relatedCalculators.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Calculateurs liés</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {calculator.relatedCalculators.map((relatedId, index) => {
                          const relatedCalc = allCalculators.find(c => c.id === relatedId);
                          if (!relatedCalc) return null;
                          
                          return (
                            <div 
                              key={index} 
                              className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                              onClick={() => navigate(`/workspace/calculators/${relatedCalc.id}`)}
                            >
                              <h4 className="font-medium text-sm text-gray-900 dark:text-white mb-1">
                                {relatedCalc.title}
                              </h4>
                              <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                                {relatedCalc.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="inputs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Paramètres d'entrée</CardTitle>
              </CardHeader>
              <CardContent>
                {calculator.inputs && calculator.inputs.length > 0 ? (
                  <div className="space-y-4">
                    {calculator.inputs.map((input, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900 dark:text-white">{input.label}</h4>
                          <div className="flex items-center gap-2">
                            {input.required && (
                              <Badge variant="outline" className="text-xs">
                                Obligatoire
                              </Badge>
                            )}
                            {input.unit && (
                              <Badge variant="secondary" className="text-xs">
                                {input.unit}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                          <p>Type : <span className="font-medium">{input.type}</span></p>
                          {input.min !== undefined && (
                            <p>Minimum : <span className="font-medium">{input.min}</span></p>
                          )}
                          {input.max !== undefined && (
                            <p>Maximum : <span className="font-medium">{input.max}</span></p>
                          )}
                          {input.placeholder && (
                            <p>Exemple : <span className="font-medium">{input.placeholder}</span></p>
                          )}
                          {input.helpText && (
                            <p className="text-blue-600 italic">{input.helpText}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">Aucun paramètre d'entrée défini.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="formula" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Formule de calcul</CardTitle>
              </CardHeader>
              <CardContent>
                {calculator.formula ? (
                  <div className="bg-muted/50 rounded-lg p-4 font-mono text-lg">
                    {calculator.formula}
                  </div>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">Formule non disponible.</p>
                )}
                
                {calculator.outputs && calculator.outputs.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-medium mb-3">Résultats calculés</h4>
                    <div className="space-y-3">
                      {calculator.outputs.map((output, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <span className="font-medium">{output.label}</span>
                          <div className="flex items-center gap-2">
                            {output.unit && (
                              <Badge variant="secondary" className="text-xs">
                                {output.unit}
                              </Badge>
                            )}
                            <Badge variant="outline" className="text-xs">
                              {output.format}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Exemples d'utilisation</CardTitle>
              </CardHeader>
              <CardContent>
                {calculator.examples && calculator.examples.length > 0 ? (
                  <div className="space-y-6">
                    {calculator.examples.map((example, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">{example.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{example.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium text-sm mb-2">Données d'entrée</h5>
                            <div className="bg-blue-50 rounded p-3 text-sm">
                              {Object.entries(example.inputs).map(([key, value]) => (
                                <div key={key} className="flex justify-between">
                                  <span>{key}:</span>
                                  <span className="font-medium">{String(value)}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {example.expectedOutputs && (
                            <div>
                              <h5 className="font-medium text-sm mb-2">Résultats attendus</h5>
                              <div className="bg-green-50 rounded p-3 text-sm">
                                {Object.entries(example.expectedOutputs).map(([key, value]) => (
                                  <div key={key} className="flex justify-between">
                                    <span>{key}:</span>
                                    <span className="font-medium">{String(value)}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300">Aucun exemple disponible.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Container>
    </>
  );
};

export default CalculatorDetailPage; 