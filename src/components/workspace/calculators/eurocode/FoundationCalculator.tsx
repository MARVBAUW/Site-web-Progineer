import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Calculator, Download, RefreshCw } from 'lucide-react';
import { toast } from "sonner";

const FoundationCalculator: React.FC = () => {
  const [width, setWidth] = useState(1); // m
  const [length, setLength] = useState(1); // m
  const [depth, setDepth] = useState(1); // m
  const [load, setLoad] = useState(500); // kN
  const [soil, setSoil] = useState('argile');

  // Valeurs de capacité portante (kPa)
  let qlim = 200;
  if (soil === 'sable') qlim = 250;
  if (soil === 'roche') qlim = 1000;
  const area = width * length; // m²
  const stress = load / area; // kPa
  let advice = '';
  if (stress > qlim * 0.6) advice = "Capacité portante dépassée ou limite atteinte : augmenter la surface ou améliorer le sol.";
  else advice = "Dimensionnement correct (vérification simplifiée).";

  return (
    <div>
      <div className="mb-2">Largeur (m)</div>
      <input type="number" value={width} min={0.2} step={0.01} onChange={e => setWidth(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Longueur (m)</div>
      <input type="number" value={length} min={0.2} step={0.01} onChange={e => setLength(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Profondeur (m)</div>
      <input type="number" value={depth} min={0.2} step={0.01} onChange={e => setDepth(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Charge totale (kN)</div>
      <input type="number" value={load} min={1} step={1} onChange={e => setLoad(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Type de sol</div>
      <select value={soil} onChange={e => setSoil(e.target.value)} className="border rounded px-2 py-1 w-full mb-2">
        <option value="argile">Argile</option>
        <option value="sable">Sable</option>
        <option value="roche">Roche</option>
      </select>
      <div className="mt-4 font-semibold">Contrainte au sol : {stress.toFixed(2)} kPa</div>
      <div className="mt-2 text-sm text-gray-700">{advice}</div>
    </div>
  );
};

export default FoundationCalculator;
