import React, { useState } from 'react';

const FireCalorificCalculator: React.FC = () => {
  const [surface, setSurface] = useState(100); // m²
  const [mass, setMass] = useState(500); // kg
  const [pci, setPci] = useState(17000); // kJ/kg (ex : bois sec)

  // Q = m × PCI / S (en kJ/m²), conversion en MJ/m²
  const Q = surface > 0 ? (mass * pci) / surface / 1000 : 0;
  let advice = '';
  if (Q > 600) {
    advice = "Charge calorifique élevée (>600 MJ/m²) : prévoir compartimentage, désenfumage renforcé, limiter les matériaux combustibles.";
  } else if (Q > 400) {
    advice = "Charge calorifique modérée (>400 MJ/m²) : vérifier la conformité réglementaire, limiter les apports combustibles.";
  } else {
    advice = "Charge calorifique faible : situation courante, risque maîtrisé.";
  }

  return (
    <div>
      <div className="mb-2">Surface du local (m²)</div>
      <input type="number" value={surface} min={1} step={1} onChange={e => setSurface(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Masse de matériaux combustibles (kg)</div>
      <input type="number" value={mass} min={0} step={1} onChange={e => setMass(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Pouvoir calorifique inférieur PCI (kJ/kg)</div>
      <input type="number" value={pci} min={1000} step={100} onChange={e => setPci(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mt-4 font-semibold">Charge calorifique Q = {Q.toFixed(1)} MJ/m²</div>
      <div className="mt-2 text-sm text-gray-700">{advice}</div>
    </div>
  );
};

export default FireCalorificCalculator; 