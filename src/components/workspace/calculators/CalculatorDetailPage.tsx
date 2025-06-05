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
          const surfaceMurs = 2 * (Math.sqrt(surfaceHabitable) + Math.sqrt(surfaceHabitable)) * hauteurSousPlafond - surfaceVitrage;
          const surfacePlancher = surfaceHabitable;
          const surfacePlafond = surfaceHabitable;
          
          // Calcul des déperditions par paroi
          const deperditionsMurs = surfaceMurs * uMurs * 19; // 19°C de différence moyenne
          const deperditionsPlancher = surfacePlancher * uPlancher * 19;
          const deperditionsPlafond = surfacePlafond * uPlafond * 19;
          const deperditionsVitrage = surfaceVitrage * uVitrage * 19;
          
          // Calcul des déperditions totales
          const deperditionsTotales = deperditionsMurs + deperditionsPlancher + deperditionsPlafond + deperditionsVitrage;
          
          // Calcul du coefficient Ubat
          const uBat = deperditionsTotales / (surfaceHabitable * 19);
          
          newResults['deperditions_totales'] = Math.round(deperditionsTotales);
          newResults['ubat'] = uBat.toFixed(2);
          newResults['conformite'] = uBat < 0.4 ? 'Conforme RE2020' : 'Non conforme RE2020';
          break;
        }
        case 'ponts-thermiques': {
          const longueur = Number(inputValues['longueur']) || 0;
          const coefficientPsi = Number(inputValues['coefficient_psi']) || 0;
          const deltaT = Number(inputValues['temperature_interieure']) - Number(inputValues['temperature_exterieure']) || 0;
          
          const deperdition = longueur * coefficientPsi * deltaT;
          newResults['deperdition'] = deperdition.toFixed(2);
          newResults['conformite'] = coefficientPsi < 0.5 ? 'Conforme' : 'Non conforme';
          break;
        }
        case 'resistance-feu': {
          const typeElement = inputValues['type_element'] || '';
          const typeMateriau = inputValues['type_materiau'] || '';
          const chargeAppliquee = Number(inputValues['charge_appliquee']) || 0;
          const typeProtection = inputValues['type_protection'] || '';
          
          // Résistance de base selon le matériau
          const resistanceBase: { [key: string]: number } = {
            'Beton': 120,
            'Acier': 60,
            'Bois': 30,
            'Maconnerie': 90
          };
          
          // Coefficient de charge
          const coefficientCharge = chargeAppliquee > 100 ? 0.8 : 1;
          
          // Coefficient de protection
          const coefficientProtection: { [key: string]: number } = {
            'Aucune': 1,
            'Platre': 1.5,
            'Beton': 2,
            'LaineMineral': 1.3
          };
          
          const resistance = Math.round(resistanceBase[typeMateriau] * coefficientCharge * coefficientProtection[typeProtection]);
          newResults['resistance'] = resistance;
          newResults['conformite'] = resistance >= 60 ? 'Conforme' : 'Non conforme';
          break;
        }
        case 'desenfumage': {
          const surfaceLocal = Number(inputValues['surface_local']) || 0;
          const hauteurPlafond = Number(inputValues['hauteur_plafond']) || 0;
          const typeEtablissement = inputValues['type_etablissement'] || '';
          const nombreEtages = Number(inputValues['nombre_etages']) || 0;
          
          // Calcul de la section d'extraction
          const volumeLocal = surfaceLocal * hauteurPlafond;
          const coefficientType: { [key: string]: number } = {
            'ERP': 0.8,
            'IGH': 1.2,
            'Habitation': 0.6
          };
          
          const sectionExtraction = Math.round(volumeLocal * coefficientType[typeEtablissement] * 0.1);
          newResults['section_extraction'] = sectionExtraction;
          newResults['section_amenee'] = Math.round(sectionExtraction * 0.8);
          newResults['puissance_extracteur'] = Math.round(volumeLocal * 6);
          break;
        }
        case 'rampe-acces': {
          const hauteurFranchir = Number(inputValues['hauteur_franchir']) || 0;
          const typeRampe = inputValues['type_rampe'] || '';
          const espaceDisponible = Number(inputValues['espace_disponible']) || 0;
          
          // Calcul de la longueur minimale
          const penteMax = 5; // 5%
          const longueurMinimale = (hauteurFranchir * 100) / penteMax;
          
          // Ajustement selon le type de rampe
          const coefficientType = typeRampe === 'Courbe' ? 1.2 : 1;
          
          const longueurRequise = Math.round(longueurMinimale * coefficientType);
          newResults['longueur_requise'] = longueurRequise;
          newResults['pente'] = penteMax;
          newResults['conformite'] = longueurRequise <= espaceDisponible ? 'Conforme' : 'Non conforme';
          break;
        }
        case 'dimensionnement-plomberie': {
          const nombreEquipements = Number(inputValues['nombre_equipements']) || 0;
          const typeEquipements = inputValues['type_equipements'] || '';
          const hauteurChute = Number(inputValues['hauteur_chute']) || 0;
          const longueurTuyauterie = Number(inputValues['longueur_tuyauterie']) || 0;
          
          // Débit unitaire selon le type d'équipement
          const debitUnitaire: { [key: string]: number } = {
            'WC': 0.13,
            'Lavabo': 0.07,
            'Douche': 0.2,
            'Baignoire': 0.3
          };
          
          // Calcul du débit total
          const debitTotal = nombreEquipements * debitUnitaire[typeEquipements];
          
          // Calcul du diamètre minimal
          const diametreMinimal = Math.sqrt((4 * debitTotal) / (Math.PI * 2)) * 1000;
          
          // Calcul des pertes de charge
          const pertesCharge = (longueurTuyauterie * 0.1) + (hauteurChute * 0.2);
          
          newResults['diametre_tuyauterie'] = Math.round(diametreMinimal);
          newResults['debit_total'] = debitTotal.toFixed(2);
          newResults['pertes_charge'] = pertesCharge.toFixed(2);
          break;
        }
        case 'volume-terrassement': {
          const surfaceTerrain = Number(inputValues['surface_terrain']) || 0;
          const profondeurExcavation = Number(inputValues['profondeur_excavation']) || 0;
          const penteTerrain = Number(inputValues['pente_terrain']) || 0;
          const typeSol = inputValues['type_sol'] || '';
          
          // Calcul du volume brut
          const volumeBrut = surfaceTerrain * profondeurExcavation;
          
          // Coefficient selon le type de sol
          const coefficientSol: { [key: string]: number } = {
            'Terre': 1.2,
            'Roche': 1.5,
            'Sable': 1.1
          };
          
          // Ajustement selon la pente
          const coefficientPente = 1 + (penteTerrain / 100);
          
          const volumeExcavation = Math.round(volumeBrut * coefficientSol[typeSol] * coefficientPente);
          newResults['volume_excavation'] = volumeExcavation;
          newResults['volume_remblai'] = Math.round(volumeExcavation * 0.8);
          newResults['volume_transport'] = Math.round(volumeExcavation - newResults['volume_remblai']);
          break;
        }
        case 'calcul-moments': {
          // Coefficients selon type de structure
          const coefficients: Record<string, { moment: number; effort: number; fleche: number }> = {
            PoutreSimple: { moment: 1/8, effort: 1/2, fleche: 5/384 },
            PoutreContinue: { moment: 1/10, effort: 0.6, fleche: 1/185 },
            Portique: { moment: 1/12, effort: 0.5, fleche: 1/250 }
          };

          const typeStructure = String(inputValues['type_structure']);
          const coef = coefficients[typeStructure];
          const q = Number(inputValues['charge_permanente']) + Number(inputValues['charge_exploitation']);
          const L = Number(inputValues['portee']);

          // Calculs selon Eurocode 0
          const momentMax = coef.moment * q * L * L;
          const effortTranchantMax = coef.effort * q * L;
          const flecheMax = coef.fleche * q * L * L * L * L / (210e9 * 1e-6); // E = 210 GPa

          newResults['moment_max'] = momentMax;
          newResults['effort_tranchant_max'] = effortTranchantMax;
          newResults['fleche_max'] = flecheMax;
          break;
        }
        case 'verification-poteaux': {
          // Caractéristiques de la section
          const section = String(inputValues['section']);
          const [b_poteau, h_poteau] = section.split('x').map(Number);
          const A_poteau = b_poteau * h_poteau;
          const I_poteau = b_poteau * h_poteau**3 / 12;
          const i_poteau = Math.sqrt(I_poteau / A_poteau);

          // Paramètres selon matériau
          const typeMateriau = String(inputValues['type_materiau']);
          const params = typeMateriau === 'Acier' 
            ? { E: 210e9, fy: 235e6, gammaM1: 1.1 }
            : { E: 30e9, fy: 25e6, gammaM1: 1.5 };

          // Calcul du flambement
          const L = Number(inputValues['hauteur']);
          const lambda = L / i_poteau;
          const lambda1 = Math.PI * Math.sqrt(params.E / params.fy);
          const lambdaRel = lambda / lambda1;
          const phi = 0.5 * (1 + 0.21 * (lambdaRel - 0.2) + lambdaRel**2);
          const chi = 1 / (phi + Math.sqrt(phi**2 - lambdaRel**2));

          // Résistances
          const NcRd = chi * A_poteau * params.fy / params.gammaM1;
          const McRd = A_poteau * h_poteau * params.fy / (4 * params.gammaM1);

          // Vérification
          const verification = 
            Number(inputValues['effort_normal']) <= NcRd &&
            Number(inputValues['moment_flechissant']) <= McRd
              ? 'Poteau vérifié'
              : 'Poteau non vérifié';

          newResults['resistance_compression'] = NcRd;
          newResults['resistance_flexion'] = McRd;
          newResults['coefficient_flambement'] = chi;
          newResults['verification'] = verification;
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