import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const SnowLoadCalculator: React.FC = () => {
  const [zone, setZone] = useState('A1');
  const [altitude, setAltitude] = useState(200); // m
  const [surface, setSurface] = useState(100); // m²
  const [exposure, setExposure] = useState(1);

  // Valeurs Sk (kN/m²) par zone (exemple simplifié)
  const skZones: Record<string, number> = { 'A1': 0.45, 'A2': 0.65, 'B': 0.85, 'C': 1.1 };
  let Sk = skZones[zone] || 0.45;
  if (altitude > 200) Sk += 0.1 * Math.floor((altitude - 200) / 200);
  // Coefficients d'exposition et thermique (simplifiés)
  const Ce = exposure; // 1 = normal, 1.2 = exposé, 0.8 = abrité
  const Ct = 1; // non chauffé
  // S = Sk × Ce × Ct × surface
  const S = Sk * Ce * Ct * surface;
  let advice = '';
  if (S > 100) advice = "Charge importante : vérifier la structure et le déneigement.";
  else advice = "Charge modérée ou faible.";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="snow-region">Région de neige</Label>
              <Select value={zone} onValueChange={setZone}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A1">Région A1</SelectItem>
                  <SelectItem value="A2">Région A2</SelectItem>
                  <SelectItem value="B">Région B</SelectItem>
                  <SelectItem value="C">Région C</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-low-contrast mt-1">Selon la carte de l'Annexe Nationale française</p>
            </div>
            
            <div>
              <Label htmlFor="altitude">Altitude du site (m)</Label>
              <Input 
                id="altitude"
                type="number"
                value={altitude}
                onChange={(e) => setAltitude(Number(e.target.value))}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="surface">Surface de la toiture (m²)</Label>
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
            
            <Button 
              className="w-full mt-4"
            >
              Calculer la charge de neige
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h3 className="text-xl font-medium mb-4">Résultat</h3>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h4 className="text-lg text-blue-800 mb-2">Charge de neige sur la toiture</h4>
              <div className="text-4xl font-bold text-blue-700">{S.toFixed(2)} kN</div>
            </div>
            
            <Separator />
            
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Région de neige</span>
                <span className="font-medium">{zone}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Altitude</span>
                <span className="font-medium">{altitude} m</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Surface</span>
                <span className="font-medium">{surface} m²</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Coefficient d'exposition Ce</span>
                <span className="font-medium">{Ce}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Coefficient thermique Ct</span>
                <span className="font-medium">{Ct}</span>
              </div>
            </div>
            
            <div className="text-xs text-low-contrast">
              <p>{advice}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SnowLoadCalculator;
