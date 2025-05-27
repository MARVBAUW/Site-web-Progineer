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

const ColumnCalculator: React.FC = () => {
  const [height, setHeight] = useState(3); // m
  const [load, setLoad] = useState(200); // kN
  const [width, setWidth] = useState(0.3); // m
  const [depth, setDepth] = useState(0.3); // m
  const [material, setMaterial] = useState('béton');

  // Calculs simplifiés
  const area = width * depth; // m²
  const stress = load / (area * 1000); // MPa
  let advice = '';
  if (stress > 20) advice = "Contrainte élevée : augmenter la section ou choisir un matériau plus résistant.";
  else advice = "Dimensionnement correct (vérification simplifiée).";

  return (
    <div>
      <div className="mb-2">Hauteur du poteau (m)</div>
      <input type="number" value={height} min={1} step={0.1} onChange={e => setHeight(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Charge axiale (kN)</div>
      <input type="number" value={load} min={1} step={1} onChange={e => setLoad(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Largeur (m)</div>
      <input type="number" value={width} min={0.1} step={0.01} onChange={e => setWidth(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Profondeur (m)</div>
      <input type="number" value={depth} min={0.1} step={0.01} onChange={e => setDepth(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Matériau</div>
      <select value={material} onChange={e => setMaterial(e.target.value)} className="border rounded px-2 py-1 w-full mb-2">
        <option value="béton">Béton</option>
        <option value="acier">Acier</option>
        <option value="bois">Bois</option>
      </select>
      <div className="mt-4 font-semibold">Contrainte axiale : {stress.toFixed(2)} MPa</div>
      <div className="mt-2 text-sm text-gray-700">{advice}</div>
    </div>
  );
};

export default ColumnCalculator;
