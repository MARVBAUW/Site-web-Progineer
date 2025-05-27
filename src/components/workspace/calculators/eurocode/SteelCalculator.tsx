import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon, CircleOff } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const SteelCalculator: React.FC = () => {
  const [length, setLength] = useState(6); // m
  const [area, setArea] = useState(0.01); // m²
  const [load, setLoad] = useState(100); // kN
  const [grade, setGrade] = useState('S235');

  // Calculs simplifiés
  const stress = load / (area * 1000); // MPa
  let limit = 235;
  if (grade === 'S275') limit = 275;
  if (grade === 'S355') limit = 355;
  let advice = '';
  if (stress > limit * 0.6) advice = "Contrainte élevée : augmenter la section ou choisir une nuance supérieure.";
  else advice = "Dimensionnement correct (vérification simplifiée).";

  return (
    <div>
      <div className="mb-2">Longueur (m)</div>
      <input type="number" value={length} min={1} step={0.1} onChange={e => setLength(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Section (m²)</div>
      <input type="number" value={area} min={0.001} step={0.001} onChange={e => setArea(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Charge axiale (kN)</div>
      <input type="number" value={load} min={1} step={1} onChange={e => setLoad(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Nuance d'acier</div>
      <select value={grade} onChange={e => setGrade(e.target.value)} className="border rounded px-2 py-1 w-full mb-2">
        <option value="S235">S235</option>
        <option value="S275">S275</option>
        <option value="S355">S355</option>
      </select>
      <div className="mt-4 font-semibold">Contrainte axiale : {stress.toFixed(2)} MPa</div>
      <div className="mt-2 text-sm text-gray-700">{advice}</div>
    </div>
  );
};

export default SteelCalculator;
