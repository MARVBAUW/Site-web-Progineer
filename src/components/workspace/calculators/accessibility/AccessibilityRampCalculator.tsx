
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export const AccessibilityRampCalculator: React.FC = () => {
  const [height, setHeight] = useState<number>(0);
  const [slope, setSlope] = useState<number>(8.33); // 8.33% = 1:12 ratio
  const [result, setResult] = useState<{
    rampLength: number;
    landingLength: number;
    totalLength: number;
  } | null>(null);

  const calculateRamp = () => {
    if (height <= 0) return;

    const rampLength = (height * 100) / slope; // Length in same units as height
    const landingLength = Math.ceil(rampLength / 9) * 1.5; // Landing every 9m, 1.5m length
    const totalLength = rampLength + landingLength;

    setResult({
      rampLength,
      landingLength,
      totalLength
    });
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Calculateur de Rampe d'Accessibilité</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="height">Hauteur à franchir (cm)</Label>
            <Input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              placeholder="Ex: 15"
            />
          </div>
          
          <div>
            <Label htmlFor="slope">Pente (%)</Label>
            <Input
              id="slope"
              type="number"
              value={slope}
              onChange={(e) => setSlope(Number(e.target.value))}
              placeholder="Ex: 8.33"
              step="0.1"
            />
          </div>
        </div>

        <Button onClick={calculateRamp} className="w-full">
          Calculer
        </Button>

        {result && (
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="font-semibold mb-2">Résultats :</h3>
            <div className="space-y-2">
              <p>Longueur de rampe : <span className="font-mono">{result.rampLength.toFixed(1)} cm</span></p>
              <p>Longueur des paliers : <span className="font-mono">{result.landingLength.toFixed(1)} cm</span></p>
              <p>Longueur totale : <span className="font-mono">{result.totalLength.toFixed(1)} cm</span></p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
