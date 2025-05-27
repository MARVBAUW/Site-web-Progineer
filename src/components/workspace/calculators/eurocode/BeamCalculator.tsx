import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calculator, Download, RefreshCw } from 'lucide-react';
import { toast } from "sonner";

const BeamCalculator: React.FC = () => {
  const [span, setSpan] = useState(4); // m
  const [load, setLoad] = useState(10); // kN/m
  const [width, setWidth] = useState(0.2); // m
  const [height, setHeight] = useState(0.4); // m
  const [material, setMaterial] = useState('béton');

  // Calculs simplifiés
  const inertia = (width * Math.pow(height, 3)) / 12; // m4
  const momentMax = (load * Math.pow(span, 2)) / 8; // kNm
  const fleche = (5 * load * Math.pow(span, 4)) / (384 * 30000 * 1e6 * inertia); // E = 30 GPa béton
  let advice = '';
  if (fleche > span * 1000 / 250) advice = "Flèche excessive : augmenter la hauteur ou la largeur de la poutre.";
  else advice = "Dimensionnement correct (vérification simplifiée).";

  return (
    <div>
      <div className="mb-2">Portée (m)</div>
      <input type="number" value={span} min={1} step={0.1} onChange={e => setSpan(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Charge uniformément répartie (kN/m)</div>
      <input type="number" value={load} min={1} step={0.1} onChange={e => setLoad(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Largeur de la poutre (m)</div>
      <input type="number" value={width} min={0.05} step={0.01} onChange={e => setWidth(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Hauteur de la poutre (m)</div>
      <input type="number" value={height} min={0.05} step={0.01} onChange={e => setHeight(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Matériau</div>
      <select value={material} onChange={e => setMaterial(e.target.value)} className="border rounded px-2 py-1 w-full mb-2">
        <option value="béton">Béton</option>
        <option value="acier">Acier</option>
        <option value="bois">Bois</option>
      </select>
      <div className="mt-4 font-semibold">Moment max : {momentMax.toFixed(2)} kNm</div>
      <div className="mt-2 font-semibold">Flèche estimée : {fleche.toFixed(2)} mm</div>
      <div className="mt-2 text-sm text-gray-700">{advice}</div>
    </div>
  );
};

export default BeamCalculator;
