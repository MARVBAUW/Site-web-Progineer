import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { AlertCircle, Download, Info } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AccessibilityRampCalculator: React.FC = () => {
  const { toast } = useToast();
  const [height, setHeight] = useState(0.5); // m
  const [length, setLength] = useState(6); // m
  const [rampType, setRampType] = useState('permanent');
  const [isConstruction, setIsConstruction] = useState(false);
  const [hasPalier, setHasPalier] = useState(false);
  const [palierLength, setPalierLength] = useState('140');
  
  const slope = length > 0 ? (height / length) * 100 : 0;
  let advice = '';
  if (slope <= 5) advice = "Conforme : pente ≤ 5% (rampe permanente sans palier).";
  else if (slope <= 8) advice = "Toléré : pente ≤ 8% sur 2 m max (palier obligatoire).";
  else if (slope <= 10) advice = "Toléré : pente ≤ 10% sur 0,5 m max (palier obligatoire).";
  else advice = "Non conforme : pente trop forte pour l'accessibilité PMR.";
  
  // Calcul du pourcentage de pente
  const calculateSlope = () => {
    const height = parseFloat(height.toFixed(2));
    const availLen = parseFloat(length.toFixed(2));
    
    if (hasPalier) {
      const palierLen = parseFloat(palierLength);
      // Soustraire la longueur du palier
      const adjustedLength = Math.max(0, availLen - palierLen);
      return (height / adjustedLength) * 100;
    } else {
      return (height / availLen) * 100;
    }
  };
  
  // Vérifier si la pente est conforme
  const isSlopeCompliant = () => {
    const slope = calculateSlope();
    
    if (rampType === 'permanent') {
      // Arrêté du 8 décembre 2014
      if (isConstruction) {
        // Nouvelles constructions: max 5%
        return slope <= 5;
      } else {
        // Constructions existantes: max 6% (ou 10% si longueur < 2m)
        const rampLength = parseFloat(length.toFixed(2));
        if (rampLength < 2) {
          return slope <= 10;
        } else if (rampLength < 4) {
          return slope <= 8;
        } else {
          return slope <= 6;
        }
      }
    } else if (rampType === 'temporary') {
      // Rampe temporaire: moins stricte, jusqu'à 15%
      return slope <= 15;
    }
    
    return false;
  };
  
  // Calcul de la longueur nécessaire pour une pente à 5%
  const calculateRequiredLength = () => {
    const height = parseFloat(height.toFixed(2));
    const targetSlope = isConstruction ? 5 : 6; // 5% pour nouvelle construction, 6% pour existant
    
    // Calcul de base: longueur = hauteur / (pente/100)
    let requiredLength = height / (targetSlope / 100);
    
    // Ajout de la longueur du palier si nécessaire
    if (hasPalier) {
      requiredLength += parseFloat(palierLength);
    }
    
    return requiredLength;
  };
  
  // Vérifier si un palier de repos est nécessaire
  const isPalierRequired = () => {
    const rampLength = parseFloat(length.toFixed(2));
    
    // Selon les normes, un palier est requis tous les 10m
    return rampLength > 10;
  };
  
  // Recommendations pour la rampe
  const getRampRecommendations = () => {
    const slope = calculateSlope();
    const rampLength = parseFloat(length.toFixed(2));
    const recommendations = [];
    
    // Vérifier la pente
    if (slope > 5 && isConstruction) {
      recommendations.push("La pente doit être réduite à 5% maximum pour les nouvelles constructions.");
    } else if (slope > 6 && !isConstruction && rampLength >= 4) {
      recommendations.push("La pente doit être réduite à 6% maximum pour cette longueur.");
    } else if (slope > 8 && !isConstruction && rampLength >= 2 && rampLength < 4) {
      recommendations.push("La pente doit être réduite à 8% maximum pour cette longueur.");
    } else if (slope > 10 && !isConstruction && rampLength < 2) {
      recommendations.push("La pente doit être réduite à 10% maximum pour cette longueur.");
    }
    
    // Vérifier le besoin d'un palier de repos
    if (isPalierRequired() && !hasPalier) {
      recommendations.push("Un palier de repos est requis tous les 10 mètres de rampe.");
    }
    
    // Recommandations sur les dimensions du palier
    if (hasPalier && parseFloat(palierLength) < 140) {
      recommendations.push("Le palier de repos doit avoir une longueur minimale de 1,40 mètre hors débattement de porte.");
    }
    
    // Recommandations sur les garde-corps et mains courantes
    if (height > 0.4) {
      recommendations.push("Un garde-corps est obligatoire lorsque la hauteur de chute dépasse 0,40 mètre.");
    }
    
    recommendations.push("Une main courante est recommandée lorsque la pente est supérieure à 4%.");
    
    // Largeur minimale
    recommendations.push("La largeur minimale de la rampe doit être de 1,20 mètre.");
    
    return recommendations;
  };
  
  const handleDownload = () => {
    toast({
      title: "Téléchargement démarré",
      description: "Le rapport est en cours de téléchargement."
    });
  };
  
  // Obtenir la classe de conformité
  const getComplianceClass = () => {
    const slope = calculateSlope();
    if (isSlopeCompliant()) {
      return "text-green-600";
    } else if (rampType === 'permanent' && ((isConstruction && slope <= 8) || (!isConstruction && slope <= 12))) {
      return "text-yellow-600";
    } else {
      return "text-red-600";
    }
  };
  
  const recommendations = getRampRecommendations();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculateur de Rampe d'Accessibilité</CardTitle>
        <CardDescription>
          Dimensionnez votre rampe d'accès PMR conforme à la réglementation
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="height">Hauteur à franchir (m)</Label>
              <Input 
                id="height"
                type="number" 
                min="0"
                max="3"
                step="0.01"
                value={height} 
                onChange={(e) => setHeight(Number(e.target.value))}
              />
            </div>
            
            <div>
              <Label htmlFor="length">Longueur de rampe (m)</Label>
              <Input 
                id="length"
                type="number" 
                min="0.1"
                max="20"
                step="0.1"
                value={length} 
                onChange={(e) => setLength(Number(e.target.value))}
              />
            </div>
            
            <div>
              <Label htmlFor="rampType">Type de rampe</Label>
              <Select 
                value={rampType} 
                onValueChange={setRampType}
              >
                <SelectTrigger id="rampType">
                  <SelectValue placeholder="Sélectionner un type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="permanent">Rampe permanente</SelectItem>
                  <SelectItem value="temporary">Rampe amovible/temporaire</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isConstruction}
                onChange={(e) => setIsConstruction(e.target.checked)}
                id="isConstruction"
                className="h-4 w-4 rounded"
              />
              <Label htmlFor="isConstruction">Nouvelle construction (norme plus stricte)</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={hasPalier}
                onChange={(e) => setHasPalier(e.target.checked)}
                id="hasPalier"
                className="h-4 w-4 rounded"
              />
              <Label htmlFor="hasPalier">Palier de repos intermédiaire</Label>
            </div>
            
            {hasPalier && (
              <div>
                <Label htmlFor="palierLength">Longueur du palier (cm)</Label>
                <Input 
                  id="palierLength"
                  type="number" 
                  min="140"
                  max="300"
                  value={palierLength} 
                  onChange={(e) => setPalierLength(e.target.value)}
                />
              </div>
            )}
          </div>
        </div>
        
        <div className="rounded-md border p-5 bg-slate-50">
          <h3 className="text-lg font-medium mb-4">Résultats</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <p className="text-sm text-low-contrast">Pente calculée</p>
              <p className={`text-2xl font-semibold ${getComplianceClass()}`}>
                {slope.toFixed(2)}%
              </p>
              <p className={`text-sm font-medium ${getComplianceClass()}`}>
                {isSlopeCompliant() ? "Conforme" : "Non conforme"}
              </p>
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-low-contrast">Longueur minimale requise</p>
              <p className="text-2xl font-semibold">
                {calculateRequiredLength().toFixed(2)} m
              </p>
              <p className="text-sm text-low-contrast">
                Pour une pente conforme de {isConstruction ? "5%" : "6%"}
              </p>
            </div>
          </div>
        </div>
        
        {!isSlopeCompliant() && (
          <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded text-sm text-red-700">
            <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium">Non conforme à la réglementation</p>
              <p className="mt-1">
                La pente calculée ({slope.toFixed(2)}%) est supérieure à la pente maximale autorisée. Vous devez augmenter la longueur disponible ou installer un élévateur PMR.
              </p>
            </div>
          </div>
        )}
        
        <div className="space-y-3">
          <h3 className="text-lg font-medium">Recommandations</h3>
          <ul className="space-y-2">
            {recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Info className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-end">
          <Button onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            Télécharger le rapport
          </Button>
        </div>
      </CardContent>
      <CardFooter className="text-xs text-low-contrast">
        Ce calculateur est basé sur les normes d'accessibilité définies par l'arrêté du 8 décembre 2014 et les recommandations de l'article R.111-19-2 du Code de la construction et de l'habitation.
      </CardFooter>
    </Card>
  );
};

export default AccessibilityRampCalculator;
