
import React, { useState } from 'react';
import { BaseFormProps } from '../types/baseFormProps';
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { calculateElectricalCost } from '../utils/montantUtils';
import { ensureNumber } from '../utils/typeConversions';
import { Bolt, CircuitBoard, Zap } from 'lucide-react';

const ElectriciteForm: React.FC<BaseFormProps> = ({
  formData,
  updateFormData,
  goToNextStep,
  goToPreviousStep,
  animationDirection
}) => {
  const [electricalType, setElectricalType] = useState<string>(
    formData.electricalType || 'basic'
  );

  const handleSubmit = () => {
    // Get the surface area
    const surface = ensureNumber(formData.surface);
    
    // Calculate the cost based on electrical type and surface
    const additionalCost = calculateElectricalCost(surface, electricalType);

    // Update form data with electrical type and additional cost
    updateFormData({
      electricalType,
      montantT: ensureNumber(formData.montantT) + additionalCost
    });
    
    // Move to the next step
    goToNextStep();
  };

  return (
    <div className={`transform transition-all duration-300 ${
      animationDirection === 'forward' ? 'translate-x-0' : '-translate-x-0'
    }`}>
      <div className="space-y-6">
        <h3 className="text-lg font-medium mb-4">Électricité</h3>
        
        <div>
          <Label className="mb-2 block">Niveau de prestation en électricité</Label>
          <RadioGroup 
            value={electricalType} 
            onValueChange={setElectricalType}
            className="grid grid-cols-1 gap-3 sm:grid-cols-3"
          >
            <Card 
              className={`cursor-pointer transition-all hover:shadow-md ${electricalType === 'basic' ? 'border-blue-500 bg-blue-50' : ''}`}
              onClick={() => setElectricalType('basic')}
            >
              <CardContent className="pt-4 pb-4 flex flex-col items-center text-center">
                <Bolt className="h-8 w-8 text-yellow-500 mb-2" />
                <RadioGroupItem value="basic" id="electrical-basic" className="sr-only" />
                <Label htmlFor="electrical-basic" className="font-medium">Prestations de base</Label>
                <p className="text-xs text-low-contrast mt-1">
                  Installation électrique standard
                </p>
              </CardContent>
            </Card>
            
            <Card 
              className={`cursor-pointer transition-all hover:shadow-md ${electricalType === 'standard' ? 'border-blue-500 bg-blue-50' : ''}`}
              onClick={() => setElectricalType('standard')}
            >
              <CardContent className="pt-4 pb-4 flex flex-col items-center text-center">
                <CircuitBoard className="h-8 w-8 text-yellow-500 mb-2" />
                <RadioGroupItem value="standard" id="electrical-standard" className="sr-only" />
                <Label htmlFor="electrical-standard" className="font-medium">Prestations avancées</Label>
                <p className="text-xs text-low-contrast mt-1">
                  Câblage renforcé et domotique basique
                </p>
              </CardContent>
            </Card>
            
            <Card 
              className={`cursor-pointer transition-all hover:shadow-md ${electricalType === 'premium' ? 'border-blue-500 bg-blue-50' : ''}`}
              onClick={() => setElectricalType('premium')}
            >
              <CardContent className="pt-4 pb-4 flex flex-col items-center text-center">
                <Zap className="h-8 w-8 text-yellow-500 mb-2" />
                <RadioGroupItem value="premium" id="electrical-premium" className="sr-only" />
                <Label htmlFor="electrical-premium" className="font-medium">Prestations haut de gamme</Label>
                <p className="text-xs text-low-contrast mt-1">
                  Éclairage intelligent et installation haute qualité
                </p>
              </CardContent>
            </Card>
            
            <Card 
              className={`cursor-pointer transition-all hover:shadow-md ${electricalType === 'smart_home' ? 'border-blue-500 bg-blue-50' : ''}`}
              onClick={() => setElectricalType('smart_home')}
            >
              <CardContent className="pt-4 pb-4 flex flex-col items-center text-center">
                <Zap className="h-8 w-8 text-green-500 mb-2" />
                <RadioGroupItem value="smart_home" id="electrical-smart_home" className="sr-only" />
                <Label htmlFor="electrical-smart_home" className="font-medium">Prestations HG + Domotique</Label>
                <p className="text-xs text-low-contrast mt-1">
                  Maison connectée et automatisation complète
                </p>
              </CardContent>
            </Card>
            
            <Card 
              className={`cursor-pointer transition-all hover:shadow-md ${electricalType === 'non_concerne' ? 'border-blue-500 bg-blue-50' : ''}`}
              onClick={() => setElectricalType('non_concerne')}
            >
              <CardContent className="pt-4 pb-4 flex flex-col items-center text-center">
                <RadioGroupItem value="non_concerne" id="electrical-non_concerne" className="sr-only" />
                <Label htmlFor="electrical-non_concerne" className="font-medium">Non concerné</Label>
                <p className="text-xs text-low-contrast mt-1">
                  Pas d'installation électrique requise
                </p>
              </CardContent>
            </Card>
          </RadioGroup>
        </div>
        
        <div className="flex justify-between pt-4">
          <Button variant="outline" onClick={goToPreviousStep}>
            Précédent
          </Button>
          <Button onClick={handleSubmit}>
            Continuer
          </Button>
        </div>
        
        {formData.montantT && (
          <div className="mt-4 p-3 bg-muted rounded-md">
            <p className="text-sm font-medium">Total estimé: {ensureNumber(formData.montantT).toLocaleString()} €</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ElectriciteForm;
