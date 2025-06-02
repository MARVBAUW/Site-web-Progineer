
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const TimberCalculator: React.FC = () => {
  const [beamLength, setBeamLength] = useState(4); // m
  const [beamWidth, setBeamWidth] = useState(0.1); // m
  const [beamHeight, setBeamHeight] = useState(0.2); // m
  const [load, setLoad] = useState(10); // kN/m
  const [timberClass, setTimberClass] = useState('C24');
  const [serviceClass, setServiceClass] = useState('1');
  const [loadDuration, setLoadDuration] = useState('medium');
  
  // Propriétés mécaniques du bois selon EC5
  const timberProperties: Record<string, { fm: number; E0: number; density: number }> = {
    'C20': { fm: 20, E0: 9500, density: 350 },
    'C24': { fm: 24, E0: 11000, density: 420 },
    'C30': { fm: 30, E0: 12000, density: 460 },
    'GL24h': { fm: 24, E0: 11500, density: 385 },
    'GL28h': { fm: 28, E0: 12600, density: 410 }
  };
  
  // Coefficients de service selon la classe de service
  const serviceClassFactors: Record<string, number> = {
    '1': 0.6,
    '2': 0.8,
    '3': 1.0
  };
  
  // Coefficients de durée de charge
  const loadDurationFactors: Record<string, number> = {
    'permanent': 0.6,
    'long': 0.7,
    'medium': 0.8,
    'short': 0.9,
    'instantaneous': 1.0
  };
  
  const calculateTimberBeam = () => {
    const timber = timberProperties[timberClass];
    const kmod = loadDurationFactors[loadDuration];
    const gamma_m = 1.3; // Coefficient partiel pour le matériau
    
    // Résistance de calcul en flexion
    const fmd = (timber.fm * kmod) / gamma_m;
    
    // Section properties
    const I = (beamWidth * Math.pow(beamHeight, 3)) / 12; // Moment d'inertie
    const W = (beamWidth * Math.pow(beamHeight, 2)) / 6; // Module de flexion
    
    // Efforts internes pour poutre simplement appuyée
    const Mmax = (load * Math.pow(beamLength, 2)) / 8; // Moment maximum
    const Vmax = (load * beamLength) / 2; // Effort tranchant maximum
    
    // Contrainte de flexion
    const sigma_m = Mmax / W;
    
    // Flèche
    const delta = (5 * load * Math.pow(beamLength, 4)) / (384 * timber.E0 * I);
    const deltaLimit = beamLength / 250; // Limite L/250
    
    // Vérifications
    const flexionOK = sigma_m <= fmd;
    const deflectionOK = delta <= deltaLimit;
    
    return {
      fmd: fmd.toFixed(2),
      Mmax: Mmax.toFixed(2),
      sigma_m: sigma_m.toFixed(2),
      delta: (delta * 1000).toFixed(1), // en mm
      deltaLimit: (deltaLimit * 1000).toFixed(1), // en mm
      flexionOK,
      deflectionOK,
      utilization: ((sigma_m / fmd) * 100).toFixed(1)
    };
  };
  
  const results = calculateTimberBeam();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Calculateur Bois (Eurocode 5)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Géométrie de la poutre</h3>
              
              <div>
                <Label htmlFor="length">Longueur (m)</Label>
                <Input 
                  id="length"
                  type="number"
                  step="0.1"
                  value={beamLength.toString()}
                  onChange={(e) => setBeamLength(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="width">Largeur (m)</Label>
                <Input 
                  id="width"
                  type="number"
                  step="0.01"
                  value={beamWidth.toString()}
                  onChange={(e) => setBeamWidth(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="height">Hauteur (m)</Label>
                <Input 
                  id="height"
                  type="number"
                  step="0.01"
                  value={beamHeight.toString()}
                  onChange={(e) => setBeamHeight(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Caractéristiques du bois</h3>
              
              <div>
                <Label htmlFor="timber-class">Classe de résistance</Label>
                <Select value={timberClass} onValueChange={setTimberClass}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="C20">C20</SelectItem>
                    <SelectItem value="C24">C24</SelectItem>
                    <SelectItem value="C30">C30</SelectItem>
                    <SelectItem value="GL24h">GL24h (Lamellé-collé)</SelectItem>
                    <SelectItem value="GL28h">GL28h (Lamellé-collé)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="service-class">Classe de service</Label>
                <Select value={serviceClass} onValueChange={setServiceClass}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 (Intérieur sec)</SelectItem>
                    <SelectItem value="2">2 (Intérieur humide)</SelectItem>
                    <SelectItem value="3">3 (Extérieur)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="load-duration">Durée de charge</Label>
                <Select value={loadDuration} onValueChange={setLoadDuration}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="permanent">Permanente</SelectItem>
                    <SelectItem value="long">Longue durée</SelectItem>
                    <SelectItem value="medium">Moyenne durée</SelectItem>
                    <SelectItem value="short">Courte durée</SelectItem>
                    <SelectItem value="instantaneous">Instantanée</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="load">Charge répartie (kN/m)</Label>
                <Input 
                  id="load"
                  type="number"
                  step="0.1"
                  value={load}
                  onChange={(e) => setLoad(Number(e.target.value))}
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Résultats du calcul</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-medium">Résistance en flexion</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Résistance de calcul fₘ,d</span>
                    <span className="font-medium">{results.fmd} MPa</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Moment maximum Mₘₐₓ</span>
                    <span className="font-medium">{results.Mmax} kNm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contrainte σₘ</span>
                    <span className="font-medium">{results.sigma_m} MPa</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taux d'utilisation</span>
                    <span className={`font-medium ${Number(results.utilization) > 100 ? 'text-red-600' : 'text-green-600'}`}>
                      {results.utilization}%
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium">Flèche</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Flèche calculée</span>
                    <span className="font-medium">{results.delta} mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Flèche limite (L/250)</span>
                    <span className="font-medium">{results.deltaLimit} mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Vérification flèche</span>
                    <span className={`font-medium ${results.deflectionOK ? 'text-green-600' : 'text-red-600'}`}>
                      {results.deflectionOK ? 'OK' : 'NOK'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className={`p-4 rounded-lg border ${results.flexionOK && results.deflectionOK ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <h4 className={`font-medium mb-2 ${results.flexionOK && results.deflectionOK ? 'text-green-800' : 'text-red-800'}`}>
                Conclusion
              </h4>
              <p className={`text-sm ${results.flexionOK && results.deflectionOK ? 'text-green-700' : 'text-red-700'}`}>
                {results.flexionOK && results.deflectionOK 
                  ? "La section est suffisante selon l'Eurocode 5."
                  : "La section est insuffisante. Augmentez les dimensions ou changez de classe de bois."}
              </p>
            </div>
            
            <div className="text-xs text-gray-500">
              <p>Calculs selon l'Eurocode 5 (EN 1995-1-1) pour une poutre simplement appuyée sous charge répartie.</p>
              <p>Coefficients partiels : γₘ = 1.3</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimberCalculator;
