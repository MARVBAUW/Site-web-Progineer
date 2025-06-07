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
      <Container className="py-16 pt-32">
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
        case 'pont-thermique': {
          const longueur = Number(inputValues['longueur']) || 0;
          const psi = Number(inputValues['psi']) || 0;
          const deperdition = longueur * psi;
          newResults['deperdition'] = deperdition.toFixed(2);
          newResults['conformite'] = deperdition < 0.5 ? 'Conforme RE2020' : 'Non conforme RE2020';
          break;
        }
        case 'bilan-carbone': {
          const surface = Number(inputValues['surface']) || 0;
          const typeConstruction = inputValues['type_construction'];
          const energieChauffage = inputValues['energie_chauffage'];
          const isolationParois = inputValues['isolation_parois'];
          
          // Coefficients de carbone selon le type de construction (kgCO2/m²)
          const carboneConstructionMap: { [key: string]: number } = {
            'Béton': 200,
            'Bois': 150,
            'Mixte': 175,
            'Acier': 250
          };
          
          // Coefficients de carbone selon l'énergie (kgCO2/m².an)
          const carboneExploitationMap: { [key: string]: number } = {
            'Électricité': 3.5,
            'Gaz': 2.8,
            'Bois': 1.2,
            'Pompe à chaleur': 1.5
          };
          
          // Coefficients selon le type de construction
          const coefficientsConstruction = {
            'Beton': 0.8,
            'Bois': 0.3,
            'Mixte': 0.5,
            'Acier': 0.7
          };
          
          // Coefficients selon l'énergie
          const coefficientsEnergie = {
            'Electricite': 0.9,
            'Gaz': 0.7,
            'Bois': 0.3,
            'PompeChaleur': 0.4
          };
          
          // Coefficients selon l'isolation
          const coefficientsIsolation = {
            'Standard': 1.0,
            'Renforcee': 0.7,
            'BBC': 0.5
          };
          
          newResults['carbone_construction'] = Math.round(carboneConstructionMap[typeConstruction] || 0);
          newResults['carbone_exploitation'] = carboneExploitationMap[energieChauffage] || 0;
          newResults['total_carbone'] = newResults['carbone_construction'] + newResults['carbone_exploitation'];
          newResults['conformite'] = newResults['total_carbone'] < 14 ? 'Conforme' : 'Non conforme';
          break;
        }
        case 'confort-ete': {
          const surface = Number(inputValues['surface']) || 0;
          const orientation = inputValues['orientation'];
          const typeParoi = inputValues['type_paroi'];
          const surfaceVitree = Number(inputValues['surface_vitree']) || 0;
          const protectionSolaire = inputValues['protection_solaire'];
          
          // Calcul de la température intérieure conventionnelle
          let tic = 0;
          switch (orientation) {
            case 'Sud': tic = 32; break;
            case 'Ouest': tic = 30; break;
            case 'Est': tic = 28; break;
            case 'Nord': tic = 26; break;
          }
          
          // Ajustement selon le type de paroi
          switch (typeParoi) {
            case 'Legere': tic += 2; break;
            case 'Moyenne': tic += 1; break;
            case 'Lourde': tic -= 1; break;
          }
          
          // Ajustement selon la protection solaire
          switch (protectionSolaire) {
            case 'Aucune': tic += 2; break;
            case 'Store': tic -= 1; break;
            case 'Casquette': tic -= 2; break;
            case 'BriseSoleil': tic -= 3; break;
          }
          
          // Calcul des heures d'inconfort
          const ratioVitrage = surfaceVitree / surface;
          const heuresInconfort = Math.round(tic * ratioVitrage * 100);
          
          newResults['heures_inconfort'] = heuresInconfort;
          newResults['conformite'] = heuresInconfort < 350 ? 'Conforme' : 'Non conforme';
          break;
        }
        case 'verification-section': {
          // Calcul des caractéristiques de la section
          const dimensions = String(inputValues['dimensions']);
          const [h, b, tw, tf] = dimensions.split('x').map(Number);
          const A = b * h - (b - 2 * tw) * (h - 2 * tf); // Surface
          const Iy = (b * h**3 - (b - 2 * tw) * (h - 2 * tf)**3) / 12; // Inertie
          const Wy = 2 * Iy / h; // Module de flexion
          const Av = h * tw; // Surface de cisaillement

          // Résistances selon Eurocode 3
          const fy = 235; // Limite d'élasticité (MPa)
          const gammaM0 = 1.0; // Coefficient partiel
          const gammaM1 = 1.1;

          // Résistance à la compression
          const NcRd = A * fy / gammaM0;

          // Résistance à la flexion
          const McRd = Wy * fy / gammaM0;

          // Résistance au cisaillement
          const VcRd = Av * fy / (Math.sqrt(3) * gammaM0);

          // Vérification
          const verification = 
            Number(inputValues['effort_normal']) <= NcRd &&
            Number(inputValues['moment_flechissant']) <= McRd &&
            Number(inputValues['effort_tranchant']) <= VcRd
              ? 'Section vérifiée'
              : 'Section non vérifiée';

          newResults['resistance_compression'] = NcRd;
          newResults['resistance_flexion'] = McRd;
          newResults['resistance_cisaillement'] = VcRd;
          newResults['verification'] = verification;
          break;
        }
        case 'calcul-poutre': {
          const portee = Number(inputValues['portee']) || 0;
          const chargeUniforme = Number(inputValues['charge_uniforme']) || 0;
          const typeAppui = inputValues['type_appui'];
          
          // Coefficients selon le type d'appui
          const coefficientsMap: { [key: string]: { moment: number, fleche: number } } = {
            'Simple': { moment: 0.125, fleche: 5 },
            'Encastre': { moment: 0.083, fleche: 1 },
            'Continue': { moment: 0.1, fleche: 2.5 }
          };
          
          const coeff = coefficientsMap[typeAppui] || { moment: 0.125, fleche: 5 };
          const momentMax = coeff.moment * chargeUniforme * portee * portee;
          const flecheMax = (coeff.fleche * chargeUniforme * Math.pow(portee, 4)) / (210000 * 1000);
          
          // Estimation de la section requise
          const sectionRequise = Math.ceil(Math.sqrt(momentMax * 1000 / 235));
          
          newResults['moment_max'] = momentMax.toFixed(1);
          newResults['fleche_max'] = flecheMax.toFixed(1);
          newResults['section_requise'] = `HEA ${sectionRequise}`;
          break;
        }
        case 'calcul-poteau': {
          const hauteur = Number(inputValues['hauteur']) || 0;
          const effortNormal = Number(inputValues['effort_normal']) || 0;
          const typeAppui = inputValues['type_appui'];
          
          // Coefficients de longueur de flambement selon le type d'appui
          const longueurFlambementMap: { [key: string]: number } = {
            'Articule': 1.0,
            'Encastre': 0.7,
            'Elastique': 0.85
          };
          
          const longueurFlambement = longueurFlambementMap[typeAppui] || 1.0;
          const chargeCritique = (Math.PI * Math.PI * 210000 * 1000) / (longueurFlambement * hauteur * longueurFlambement * hauteur);
          
          // Estimation de la section requise
          const sectionRequise = Math.ceil(Math.sqrt(effortNormal * 1000 / 235));
          
          newResults['charge_critique'] = chargeCritique.toFixed(0);
          newResults['section_requise'] = `HEA ${sectionRequise}`;
          newResults['verification'] = chargeCritique > effortNormal ? 'Poteau OK' : 'Poteau insuffisant';
          break;
        }
        case 'isolation-acoustique': {
          const typeParoi = inputValues['type_paroi'];
          const epaisseur = Number(inputValues['epaisseur']) || 0;
          const surface = Number(inputValues['surface']) || 0;
          
          // Coefficients d'affaiblissement selon le type de paroi (dB/cm)
          const affaiblissementMap: { [key: string]: number } = {
            'Beton': 0.5,
            'Brique': 0.4,
            'Placo': 0.3,
            'Mixte': 0.45
          };
          
          const indiceAffaiblissement = (affaiblissementMap[typeParoi] || 0.4) * epaisseur;
          const isolationPonderee = indiceAffaiblissement - 10 * Math.log10(surface);
          
          newResults['indice_affaiblissement'] = indiceAffaiblissement.toFixed(1);
          newResults['isolation_ponderee'] = isolationPonderee.toFixed(1);
          newResults['conformite'] = isolationPonderee > 30 ? 'Conforme' : 'Non conforme';
          break;
        }
        case 'temps-reverberation': {
          const volume = Number(inputValues['volume']) || 0;
          const typeLocal = inputValues['type_local'];
          const absorptionTotale = Number(inputValues['absorption_totale']) || 0;
          
          // Temps de réverbération cible selon le type de local (s)
          const tempsCibleMap: { [key: string]: number } = {
            'Bureau': 0.6,
            'Salle_reunion': 0.8,
            'Open_space': 0.5,
            'Auditorium': 1.2
          };
          
          const tempsReverberation = 0.161 * volume / absorptionTotale;
          const tempsCible = tempsCibleMap[typeLocal] || 0.6;
          
          newResults['temps_reverberation'] = tempsReverberation.toFixed(2);
          newResults['conformite'] = Math.abs(tempsReverberation - tempsCible) < 0.2 ? 'Conforme' : 'Non conforme';
          break;
        }
        case 'absorption-acoustique': {
          const typeMateriau = inputValues['type_materiau'];
          const epaisseur = Number(inputValues['epaisseur']) || 0;
          const surface = Number(inputValues['surface']) || 0;
          
          // Coefficients d'absorption selon le type de matériau
          const absorptionMap: { [key: string]: number } = {
            'Mousse': 0.8,
            'Laine': 0.9,
            'Tissu': 0.7,
            'Bois': 0.6
          };
          
          const coefficientAbsorption = (absorptionMap[typeMateriau] || 0.7) * (1 - Math.exp(-epaisseur / 5));
          const absorptionTotale = coefficientAbsorption * surface;
          
          newResults['coefficient_absorption'] = coefficientAbsorption.toFixed(2);
          newResults['absorption_totale'] = absorptionTotale.toFixed(1);
          break;
        }
        case 'deperditions-thermiques': {
          const surfaceHabitable = Number(inputValues['surface_habitable']) || 0;
          const hauteurSousPlafond = Number(inputValues['hauteur_sous_plafond']) || 0;
          const uMurs = Number(inputValues['u_murs']) || 0;
          const uPlancher = Number(inputValues['u_plancher']) || 0;
          const uPlafond = Number(inputValues['u_plafond']) || 0;
          const uVitrage = Number(inputValues['u_vitrage']) || 0;
          const surfaceVitrage = Number(inputValues['surface_vitrage']) || 0;

          // Calcul des surfaces
          const surfaceMurs = (surfaceHabitable * 4 * hauteurSousPlafond) - surfaceVitrage;
          const surfacePlancher = surfaceHabitable;
          const surfacePlafond = surfaceHabitable;

          // Calcul des déperditions
          const deperditionsMurs = surfaceMurs * uMurs;
          const deperditionsPlancher = surfacePlancher * uPlancher;
          const deperditionsPlafond = surfacePlafond * uPlafond;
          const deperditionsVitrage = surfaceVitrage * uVitrage;

          // Déperditions totales
          const deperditionsTotales = deperditionsMurs + deperditionsPlancher + deperditionsPlafond + deperditionsVitrage;

          // Vérification conformité RE2020
          const ubat = deperditionsTotales / (surfaceMurs + surfacePlancher + surfacePlafond + surfaceVitrage);
          const conformite = ubat < 0.4 ? 'Conforme RE2020' : 'Non conforme RE2020';

          newResults['deperditions_murs'] = deperditionsMurs.toFixed(2);
          newResults['deperditions_plancher'] = deperditionsPlancher.toFixed(2);
          newResults['deperditions_plafond'] = deperditionsPlafond.toFixed(2);
          newResults['deperditions_vitrage'] = deperditionsVitrage.toFixed(2);
          newResults['deperditions_totales'] = deperditionsTotales.toFixed(2);
          newResults['conformite'] = conformite;
          break;
        }
        case 'bilan-energetique': {
          const surfaceHabitable = Number(inputValues['surface_habitable']) || 0;
          const orientation = inputValues['orientation'];
          const typeConstruction = inputValues['type_construction'];
          const isolation = inputValues['isolation'];
          const energieChauffage = inputValues['energie_chauffage'];

          // Coefficients selon l'orientation
          const coefficientsOrientation = {
            'Nord': 1.2,
            'Sud': 0.8,
            'Est': 1.0,
            'Ouest': 1.1
          };

          // Coefficients selon le type de construction
          const coefficientsConstruction = {
            'Béton': 1.2,
            'Bois': 0.8,
            'Mixte': 1.0,
            'Acier': 1.1
          };

          // Coefficients selon l'isolation
          const coefficientsIsolation = {
            'Standard': 1.2,
            'Renforcée': 0.9,
            'BBC': 0.7
          };

          // Coefficients selon l'énergie
          const coefficientsEnergie = {
            'Électricité': 1.0,
            'Gaz': 0.9,
            'Bois': 0.7,
            'Pompe à chaleur': 0.5
          };

          // Calcul Bbio
          const bbio = 50 * coefficientsOrientation[orientation as keyof typeof coefficientsOrientation] * coefficientsConstruction[typeConstruction as keyof typeof coefficientsConstruction] * coefficientsIsolation[isolation as keyof typeof coefficientsIsolation];

          // Calcul Cep
          const cep = bbio * coefficientsEnergie[energieChauffage as keyof typeof coefficientsEnergie];

          // Calcul Ic
          const ic = cep * 0.2; // Simplifié pour l'exemple

          // Vérification conformité RE2020
          const conformite = bbio < 60 && cep < 100 && ic < 14 ? 'Conforme RE2020' : 'Non conforme RE2020';

          newResults['bbio'] = bbio.toFixed(2);
          newResults['cep'] = cep.toFixed(2);
          newResults['ic'] = ic.toFixed(2);
          newResults['conformite'] = conformite;
          break;
        }
        case 'ges-construction': {
          const surfaceHabitable = Number(inputValues['surface_habitable']) || 0;
          const typeConstruction = inputValues['type_construction'];
          const isolation = inputValues['isolation'];

          // Coefficients de carbone selon le type de construction (kgCO2/m²)
          const carboneConstruction = {
            'Béton': 200,
            'Bois': 150,
            'Mixte': 175,
            'Acier': 250
          };

          // Coefficients selon l'isolation
          const coefficientsIsolation = {
            'Standard': 1.0,
            'Renforcée': 0.8,
            'BBC': 0.6
          };

          // Calcul Ic construction
          const icConstruction = carboneConstruction[typeConstruction as keyof typeof carboneConstruction] * coefficientsIsolation[isolation as keyof typeof coefficientsIsolation];

          // Calcul Ic exploitation (simplifié)
          const icExploitation = icConstruction * 0.1;

          // Calcul Ic total
          const icTotal = icConstruction + icExploitation;

          // Vérification conformité RE2020
          const conformite = icTotal < 14 ? 'Conforme RE2020' : 'Non conforme RE2020';

          newResults['ic_construction'] = icConstruction.toFixed(2);
          newResults['ic_exploitation'] = icExploitation.toFixed(2);
          newResults['ic_total'] = icTotal.toFixed(2);
          newResults['conformite'] = conformite;
          break;
        }
        case 'test-infiltrometrie': {
          const volumeBatiment = Number(inputValues['volume_batiment']) || 0;
          const debitAir = Number(inputValues['debit_air']) || 0;
          const pression = Number(inputValues['pression']) || 0;

          // Calcul de l'indice n50
          const n50 = (debitAir / volumeBatiment) * Math.sqrt(50 / pression);

          // Calcul du débit q4Pa-surf
          const q4pa = debitAir / (volumeBatiment * Math.sqrt(pression / 4));

          // Vérification conformité RE2020
          const conformite = n50 < 0.6 ? 'Conforme RE2020' : 'Non conforme RE2020';

          newResults['n50'] = n50.toFixed(3);
          newResults['q4pa'] = q4pa.toFixed(3);
          newResults['conformite'] = conformite;
          break;
        }
        case 'dimensionnement-vmc': {
          const surfaceHabitable = Number(inputValues['surface_habitable']) || 0;
          const nombrePieces = Number(inputValues['nombre_pieces']) || 0;
          const typeVmc = inputValues['type_vmc'];

          // Calcul du débit total selon DTU 68.3
          let debitTotal = 0;
          if (typeVmc === 'Simple flux') {
            debitTotal = surfaceHabitable * 0.3 + nombrePieces * 15;
          } else {
            debitTotal = surfaceHabitable * 0.5 + nombrePieces * 20;
          }

          // Calcul du débit par pièce
          const debitPiece = debitTotal / nombrePieces;

          // Vérification conformité DTU 68.3
          const conformite = debitPiece >= 15 ? 'Conforme DTU 68.3' : 'Non conforme DTU 68.3';

          newResults['debit_total'] = debitTotal.toFixed(0);
          newResults['debit_piece'] = debitPiece.toFixed(0);
          newResults['conformite'] = conformite;
          break;
        }
        case 'besoins-bioclimatiques': {
          const surfaceHabitable = Number(inputValues['surface_habitable']) || 0;
          const orientation = inputValues['orientation'];
          const typeConstruction = inputValues['type_construction'];
          const isolation = inputValues['isolation'];

          // Coefficients selon l'orientation
          const coefficientsOrientation = {
            'Nord': 1.2,
            'Sud': 0.8,
            'Est': 1.0,
            'Ouest': 1.1
          };

          // Coefficients selon le type de construction
          const coefficientsConstruction = {
            'Béton': 1.2,
            'Bois': 0.8,
            'Mixte': 1.0,
            'Acier': 1.1
          };

          // Coefficients selon l'isolation
          const coefficientsIsolation = {
            'Standard': 1.2,
            'Renforcée': 0.9,
            'BBC': 0.7
          };

          // Calcul des besoins
          const besoinsChauffage = 50 * coefficientsOrientation[orientation as keyof typeof coefficientsOrientation] * coefficientsConstruction[typeConstruction as keyof typeof coefficientsConstruction] * coefficientsIsolation[isolation as keyof typeof coefficientsIsolation];
          const besoinsClimatisation = besoinsChauffage * 0.3;

          // Vérification conformité RE2020
          const conformite = besoinsChauffage < 60 && besoinsClimatisation < 20 ? 'Conforme RE2020' : 'Non conforme RE2020';

          newResults['besoins_chauffage'] = besoinsChauffage.toFixed(2);
          newResults['besoins_climatisation'] = besoinsClimatisation.toFixed(2);
          newResults['conformite'] = conformite;
          break;
        }
        case 'consommation-energetique': {
          const surfaceHabitable = Number(inputValues['surface_habitable']) || 0;
          const typeConstruction = inputValues['type_construction'];
          const isolation = inputValues['isolation'];
          const energieChauffage = inputValues['energie_chauffage'];

          // Coefficients selon le type de construction
          const coefficientsConstruction = {
            'Béton': 1.2,
            'Bois': 0.8,
            'Mixte': 1.0,
            'Acier': 1.1
          };

          // Coefficients selon l'isolation
          const coefficientsIsolation = {
            'Standard': 1.2,
            'Renforcée': 0.9,
            'BBC': 0.7
          };

          // Coefficients selon l'énergie
          const coefficientsEnergie = {
            'Électricité': 1.0,
            'Gaz': 0.9,
            'Bois': 0.7,
            'Pompe à chaleur': 0.5
          };

          // Calcul des consommations
          const consommationChauffage = 50 * coefficientsConstruction[typeConstruction] * coefficientsIsolation[isolation] * coefficientsEnergie[energieChauffage];
          const consommationEcs = 20 * coefficientsConstruction[typeConstruction] * coefficientsIsolation[isolation];
          const consommationEclairage = 10 * coefficientsConstruction[typeConstruction];
          const consommationTotale = consommationChauffage + consommationEcs + consommationEclairage;

          // Vérification conformité RE2020
          const conformite = consommationTotale < 100 ? 'Conforme RE2020' : 'Non conforme RE2020';

          newResults['consommation_chauffage'] = consommationChauffage.toFixed(2);
          newResults['consommation_ecs'] = consommationEcs.toFixed(2);
          newResults['consommation_eclairage'] = consommationEclairage.toFixed(2);
          newResults['consommation_totale'] = consommationTotale.toFixed(2);
          newResults['conformite'] = conformite;
          break;
        }
        default: {
          const firstInput = Object.values(inputValues)[0] || 0;
          newResults['result'] = (Number(firstInput) * 1.2).toFixed(2);
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
        title={`${calculator.title} | Calculateurs Progineer`}
        description={calculator.description}
        keywords={(calculator.seoData?.keywords || []).join(', ')}
        canonicalUrl={`https://progineer.fr/workspace/calculators/${calculator.id}`}
      />

      <div className="pt-32">
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

                {calculator.tags && calculator.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {calculator.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

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
      </div>
    </>
  );
};

export default CalculatorDetailPage;