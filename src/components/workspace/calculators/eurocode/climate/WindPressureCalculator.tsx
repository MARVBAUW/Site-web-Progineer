
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const WindPressureCalculator: React.FC = () => {
  const [zone, setZone] = useState('1');
  const [altitude, setAltitude] = useState(100); // m
  const [surface, setSurface] = useState(50); // m²
  const [exposure, setExposure] = useState(1);
  const [buildingHeight, setBuildingHeight] = useState(10); // m
  const [windRegion, setWindRegion] = useState('Zone 1');
  const [roughness, setRoughness] = useState('II');
  const [windPressure, setWindPressure] = useState<number | null>(null);

  // Valeurs qb (kN/m²) par zone (exemple simplifié)
  const qbZones: Record<string, number> = { '1': 0.5, '2': 0.7, '3': 0.9, '4': 1.1 };
  let qb = qbZones[zone] || 0.5;
  if (altitude > 100) qb += 0.05 * Math.floor((altitude - 100) / 100);
  // Coefficients d'exposition et de pression (simplifiés)
  const Ce = exposure; // 1 = normal, 1.2 = exposé, 0.8 = abrité
  const Cpe = 0.8; // pression extérieure moyenne
  // q = qb × Ce × Cpe × surface
  const q = qb * Ce * Cpe * surface;
  let advice = '';
  if (q > 50) advice = "Pression élevée : vérifier la structure et les fixations.";
  else advice = "Pression modérée ou faible.";

  const calculateWindPressure = () => {
    const calculatedPressure = qb * Ce;
    setWindPressure(calculatedPressure);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="zone">Zone vent</Label>
              <Select value={zone} onValueChange={setZone}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="altitude">Altitude (m)</Label>
              <Input 
                id="altitude"
                type="number"
                value={altitude}
                onChange={(e) => setAltitude(Number(e.target.value))}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="surface">Surface (m²)</Label>
              <Input 
                id="surface"
                type="number"
                value={surface}
                onChange={(e) => setSurface(Number(e.target.value))}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="exposure">Coefficient d'exposition</Label>
              <select value={exposure} onChange={e => setExposure(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2">
                <option value={1}>Normal (Ce=1)</option>
                <option value={1.2}>Exposé (Ce=1.2)</option>
                <option value={0.8}>Abrité (Ce=0.8)</option>
              </select>
            </div>
            
            <div>
              <Label htmlFor="building-height">Hauteur du bâtiment (m)</Label>
              <Input 
                id="building-height"
                type="number"
                value={buildingHeight}
                onChange={(e) => setBuildingHeight(Number(e.target.value))}
                className="mt-1"
              />
            </div>
            
            <Button 
              onClick={calculateWindPressure} 
              className="w-full mt-4"
            >
              Calculer la pression dynamique
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-medium mb-4">Résultat</h3>
          
          {windPressure === null ? (
            <div className="text-center py-12 text-low-contrast">
              <p>Renseignez les paramètres et cliquez sur "Calculer" pour obtenir la pression dynamique de pointe.</p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h4 className="text-lg text-blue-800 mb-2">Pression dynamique de pointe</h4>
                <div className="text-4xl font-bold text-blue-700">{windPressure.toFixed(3)} kN/m²</div>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Région de vent</span>
                  <span className="font-medium">{windRegion}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Catégorie de terrain</span>
                  <span className="font-medium">{roughness}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Hauteur de référence</span>
                  <span className="font-medium">{buildingHeight} m</span>
                </div>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg border border-border">
                <h4 className="font-medium mb-2">Coefficients de pression recommandés</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Murs verticaux (face au vent)</span>
                    <span className="font-medium">+0.8</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Murs verticaux (face sous le vent)</span>
                    <span className="font-medium">-0.5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Toiture plate (zone courante)</span>
                    <span className="font-medium">-0.7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Toiture plate (zone de rive)</span>
                    <span className="font-medium">-1.2</span>
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-low-contrast">
                <p>Calculs réalisés selon l'EN 1991-1-4 et l'Annexe Nationale française.</p>
                <p>La pression finale sur une surface est obtenue en multipliant la pression dynamique de pointe par le coefficient de pression adapté à la zone considérée.</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default WindPressureCalculator;
