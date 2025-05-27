import React, { useState } from 'react';

const MaterialQuantityCalculator: React.FC = () => {
  const [surface, setSurface] = useState(20); // m²
  const [material, setMaterial] = useState('carrelage');
  const [yieldValue, setYieldValue] = useState(1); // rendement au m²
  const [margin, setMargin] = useState(10); // %

  // Valeurs de rendement par défaut
  const yields: Record<string, number> = {
    carrelage: 1,
    peinture: 0.1,
    isolant: 1,
    cloison: 1,
  };

  const unit: Record<string, string> = {
    carrelage: 'm²',
    peinture: 'L',
    isolant: 'm²',
    cloison: 'm²',
  };

  const effectiveYield = yieldValue || yields[material] || 1;
  const quantity = surface / effectiveYield * (1 + margin / 100);

  let advice = '';
  if (material === 'peinture') advice = "Prévoyez 2 couches pour un résultat optimal. Ajoutez une marge pour les pertes.";
  else if (material === 'carrelage') advice = "Ajoutez 10% de marge pour les découpes et chutes.";
  else advice = "Ajoutez une marge pour les pertes et découpes.";

  return (
    <div>
      <div className="mb-2">Surface à couvrir (m²)</div>
      <input type="number" value={surface} min={1} step={0.1} onChange={e => setSurface(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Type de matériau</div>
      <select value={material} onChange={e => setMaterial(e.target.value)} className="border rounded px-2 py-1 w-full mb-2">
        <option value="carrelage">Carrelage</option>
        <option value="peinture">Peinture</option>
        <option value="isolant">Isolant</option>
        <option value="cloison">Cloison</option>
      </select>
      <div className="mb-2">Rendement ({unit[material]} par unité)</div>
      <input type="number" value={effectiveYield} min={0.01} step={0.01} onChange={e => setYieldValue(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Marge de sécurité (%)</div>
      <input type="number" value={margin} min={0} step={1} onChange={e => setMargin(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mt-4 font-semibold">Quantité à prévoir : {quantity.toFixed(2)} {unit[material]}</div>
      <div className="mt-2 text-sm text-gray-700">{advice}</div>
    </div>
  );
};

export default MaterialQuantityCalculator; 