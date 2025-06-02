
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const WindPressureCalculator: React.FC = () => {
  const [windRegion, setWindRegion] = useState<string>('');
  const [roughness, setRoughness] = useState<string>('');
  const [buildingHeight, setBuildingHeight] = useState<number>(0);
  const [windPressure, setWindPressure] = useState<number | null>(null);

  const windRegions: { [key: string]: number } = {
    '1': 22, // Zone 1 - vent faible
    '2': 24, // Zone 2 - vent modéré
    '3': 26, // Zone 3 - vent fort
    '4': 28  // Zone 4 - vent très fort
  };

  const roughnessFactors: { [key: string]: number } = {
    'I': 0.16,   // Mer, lacs
    'II': 0.19,  // Campagne
    'III': 0.22, // Banlieue
    'IV': 0.24   // Ville
  };

  const calculateWindPressure = () => {
    if (!windRegion || !roughness || buildingHeight <= 0) return;

    const basicWindSpeed = windRegions[windRegion];
    const roughnessFactor = roughnessFactors[roughness];
    
    // Simplified calculation according to Eurocode 1
    const heightFactor = Math.min(1.7, Math.pow(buildingHeight / 10, 0.16));
    const dynamicPressure = 0.613 * Math.pow(basicWindSpeed * roughnessFactor * heightFactor, 2);
    
    setWindPressure(dynamicPressure);
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Calculateur Pression du Vent - Eurocode 1</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="windRegion">Zone de vent</Label>
            <Select value={windRegion} onValueChange={setWindRegion}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner la zone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Zone 1 (22 m/s)</SelectItem>
                <SelectItem value="2">Zone 2 (24 m/s)</SelectItem>
                <SelectItem value="3">Zone 3 (26 m/s)</SelectItem>
                <SelectItem value="4">Zone 4 (28 m/s)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="roughness">Catégorie de rugosité</Label>
            <Select value={roughness} onValueChange={setRoughness}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner la catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="I">Catégorie I (Mer, lacs)</SelectItem>
                <SelectItem value="II">Catégorie II (Campagne)</SelectItem>
                <SelectItem value="III">Catégorie III (Banlieue)</SelectItem>
                <SelectItem value="IV">Catégorie IV (Ville)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="buildingHeight">Hauteur du bâtiment (m)</Label>
          <Input
            id="buildingHeight"
            type="number"
            value={buildingHeight}
            onChange={(e) => setBuildingHeight(Number(e.target.value))}
            placeholder="Ex: 15"
          />
        </div>

        <Button onClick={calculateWindPressure} className="w-full">
          Calculer la pression
        </Button>

        {windPressure !== null && (
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="font-semibold mb-2">Résultats :</h3>
            <div className="space-y-2">
              <p>Pression dynamique : <span className="font-mono">{windPressure.toFixed(2)} Pa</span></p>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                <p>Paramètres utilisés :</p>
                <p>Zone de vent : {windRegion} ({windRegions[windRegion]} m/s)</p>
                <p>Rugosité : {roughness}</p>
                <p>Hauteur : {buildingHeight} m</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
