
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const TimberCalculator: React.FC = () => {
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [woodType, setWoodType] = useState<string>('');
  const [load, setLoad] = useState<string>('');
  const [result, setResult] = useState<{
    volume: number;
    weight: number;
    resistance: number;
  } | null>(null);

  const woodDensities: { [key: string]: number } = {
    'chene': 700,
    'hetre': 650,
    'pin': 500,
    'sapin': 450,
    'douglas': 520
  };

  const calculateTimber = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    const h = parseFloat(height);
    const loadValue = parseFloat(load);

    if (l <= 0 || w <= 0 || h <= 0 || !woodType) return;

    const volume = (l * w * h) / 1000000; // Convert mm³ to m³
    const density = woodDensities[woodType] || 500;
    const weight = volume * density;
    
    // Simplified resistance calculation (for demonstration)
    const resistance = (w * h * h) / 6 * 30; // Simplified bending resistance

    setResult({
      volume,
      weight,
      resistance
    });
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Calculateur Bois - Eurocode 5</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="length">Longueur (mm)</Label>
            <Input
              id="length"
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              placeholder="Ex: 3000"
            />
          </div>
          
          <div>
            <Label htmlFor="width">Largeur (mm)</Label>
            <Input
              id="width"
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              placeholder="Ex: 200"
            />
          </div>

          <div>
            <Label htmlFor="height">Hauteur (mm)</Label>
            <Input
              id="height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Ex: 400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="woodType">Type de bois</Label>
            <Select value={woodType} onValueChange={setWoodType}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionner le type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="chene">Chêne</SelectItem>
                <SelectItem value="hetre">Hêtre</SelectItem>
                <SelectItem value="pin">Pin</SelectItem>
                <SelectItem value="sapin">Sapin</SelectItem>
                <SelectItem value="douglas">Douglas</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="load">Charge (kN)</Label>
            <Input
              id="load"
              type="number"
              value={load}
              onChange={(e) => setLoad(e.target.value)}
              placeholder="Ex: 10"
            />
          </div>
        </div>

        <Button onClick={calculateTimber} className="w-full">
          Calculer
        </Button>

        {result && (
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="font-semibold mb-2">Résultats :</h3>
            <div className="space-y-2">
              <p>Volume : <span className="font-mono">{result.volume.toFixed(3)} m³</span></p>
              <p>Poids : <span className="font-mono">{result.weight.toFixed(1)} kg</span></p>
              <p>Résistance (approx.) : <span className="font-mono">{result.resistance.toFixed(0)} kN.mm</span></p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
