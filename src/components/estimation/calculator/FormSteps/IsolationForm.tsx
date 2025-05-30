import React from 'react';
import { BaseFormProps } from '../types/formTypes';
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Shield, ShieldCheck, Award, Leaf, Wrench } from 'lucide-react';
import { calculateInsulationCost } from '../utils/montantUtils';
import { ensureNumber } from '../utils/typeConversions';

interface ExtendedBaseFormProps extends BaseFormProps {
  defaultValues?: any;
  onSubmit?: (data: any) => void;
}

const IsolationForm: React.FC<ExtendedBaseFormProps> = ({
  formData,
  updateFormData,
  goToNextStep,
  goToPreviousStep,
  animationDirection,
  defaultValues,
  onSubmit
}) => {
  const [insulationType, setInsulationType] = React.useState<string>(
    defaultValues?.insulationType || formData.insulationType || 'standard'
  );

  const handleContinue = () => {
    const data = { insulationType };
    
    // Calculate the insulation cost based on the selected type and add it to the total
    const surface = ensureNumber(formData.surface, 0);
    const insulationCost = calculateInsulationCost(insulationType, surface);
    
    // Update the montantT (total amount) with the insulation cost
    const currentTotal = ensureNumber(formData.montantT, 0);
    const newTotal = currentTotal + insulationCost;
    
    // Include the calculated cost in the update
    const updatedData = {
      ...data,
      montantT: newTotal
    };
    
    console.log('Isolation form submitted:', updatedData);
    
    if (onSubmit) {
      onSubmit(updatedData);
    } else {
      updateFormData(updatedData);
      goToNextStep();
    }
  };

  return (
    <div className={`transform transition-all duration-300 ${
      animationDirection === 'forward' ? 'translate-x-0' : '-translate-x-0'
    }`}>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Type d'isolation</h3>
          
          <RadioGroup 
            value={insulationType} 
            onValueChange={setInsulationType}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            <Card 
              className={`cursor-pointer transition-all hover:shadow-md ${insulationType === 'standard' ? 'border-blue-500 bg-blue-50' : ''}`}
              onClick={() => setInsulationType('standard')}
            >
              <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
                <Shield className="h-10 w-10 text-blue-500 mb-3" />
                <RadioGroupItem value="standard" id="isolation-standard" className="sr-only" />
                <Label htmlFor="isolation-standard" className="font-medium">Standard (RT2012)</Label>
                <p className="text-xs text-low-contrast mt-2">
                  Isolation réglementaire conforme à la RT2012
                </p>
                <p className="text-sm font-semibold mt-2">80€/m²</p>
              </CardContent>
            </Card>
            
            <Card 
              className={`cursor-pointer transition-all hover:shadow-md ${insulationType === 'reinforced' ? 'border-blue-500 bg-blue-50' : ''}`}
              onClick={() => setInsulationType('reinforced')}
            >
              <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
                <ShieldCheck className="h-10 w-10 text-blue-500 mb-3" />
                <RadioGroupItem value="reinforced" id="isolation-reinforced" className="sr-only" />
                <Label htmlFor="isolation-reinforced" className="font-medium">Renforcée (RT2020)</Label>
                <p className="text-xs text-low-contrast mt-2">
                  Isolation haute performance énergétique
                </p>
                <p className="text-sm font-semibold mt-2">100€/m²</p>
              </CardContent>
            </Card>
            
            <Card 
              className={`cursor-pointer transition-all hover:shadow-md ${insulationType === 'passive' ? 'border-blue-500 bg-blue-50' : ''}`}
              onClick={() => setInsulationType('passive')}
            >
              <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
                <Award className="h-10 w-10 text-blue-500 mb-3" />
                <RadioGroupItem value="passive" id="isolation-passive" className="sr-only" />
                <Label htmlFor="isolation-passive" className="font-medium">Maison passive</Label>
                <p className="text-xs text-low-contrast mt-2">
                  Isolation très haute performance pour maison passive
                </p>
                <p className="text-sm font-semibold mt-2">120€/m²</p>
              </CardContent>
            </Card>
            
            <Card 
              className={`cursor-pointer transition-all hover:shadow-md ${insulationType === 'ecological' ? 'border-blue-500 bg-blue-50' : ''}`}
              onClick={() => setInsulationType('ecological')}
            >
              <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
                <Leaf className="h-10 w-10 text-green-500 mb-3" />
                <RadioGroupItem value="ecological" id="isolation-ecological" className="sr-only" />
                <Label htmlFor="isolation-ecological" className="font-medium">Matériaux écologiques</Label>
                <p className="text-xs text-low-contrast mt-2">
                  Isolation en matériaux naturels et écologiques
                </p>
                <p className="text-sm font-semibold mt-2">110€/m²</p>
              </CardContent>
            </Card>
            
            <Card 
              className={`cursor-pointer transition-all hover:shadow-md ${insulationType === 'renovation' ? 'border-blue-500 bg-blue-50' : ''}`}
              onClick={() => setInsulationType('renovation')}
            >
              <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
                <Wrench className="h-10 w-10 text-orange-500 mb-3" />
                <RadioGroupItem value="renovation" id="isolation-renovation" className="sr-only" />
                <Label htmlFor="isolation-renovation" className="font-medium">Rénovation standard</Label>
                <p className="text-xs text-low-contrast mt-2">
                  Isolation adaptée aux projets de rénovation
                </p>
                <p className="text-sm font-semibold mt-2">90€/m²</p>
              </CardContent>
            </Card>
            
            <Card 
              className={`cursor-pointer transition-all hover:shadow-md ${insulationType === 'non_concerne' ? 'border-blue-500 bg-blue-50' : ''}`}
              onClick={() => setInsulationType('non_concerne')}
            >
              <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
                <Shield className="h-10 w-10 text-low-contrast mb-3" />
                <RadioGroupItem value="non_concerne" id="isolation-non-concerne" className="sr-only" />
                <Label htmlFor="isolation-non-concerne" className="font-medium">Non concerné</Label>
                <p className="text-xs text-low-contrast mt-2">
                  Pas d'isolation dans ce projet
                </p>
                <p className="text-sm font-semibold mt-2">0€/m²</p>
              </CardContent>
            </Card>
          </RadioGroup>
        </div>
        
        <div className="flex justify-between pt-4">
          <Button 
            type="button" 
            variant="outline" 
            onClick={goToPreviousStep}
          >
            Précédent
          </Button>
          
          <Button 
            type="button"
            onClick={handleContinue}
          >
            Continuer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IsolationForm;
