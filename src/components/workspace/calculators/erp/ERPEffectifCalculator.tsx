import React, { useState } from 'react';

const ERPEffectifCalculator: React.FC = () => {
  const [surface, setSurface] = useState(150); // m²
  const [erpType, setErpType] = useState('M');

  // Valeurs réglementaires simplifiées (exemple)
  let ratio = 3; // m²/pers par défaut
  let advice = '';
  switch (erpType) {
    case 'M':
      ratio = 3;
      advice = "Type M (magasins) : 1 pers/3 m².";
      break;
    case 'N':
      ratio = 1.5;
      advice = "Type N (restauration) : 1 pers/1,5 m².";
      break;
    case 'O':
      ratio = 1;
      advice = "Type O (hôtels) : 1 pers/1 m².";
      break;
    default:
      ratio = 3;
      advice = "Vérifiez la réglementation spécifique à votre type d'ERP.";
  }
  const effectif = Math.ceil(surface / ratio);

  return (
    <div>
      <div className="mb-2">Surface accessible au public (m²)</div>
      <input type="number" value={surface} min={1} step={1} onChange={e => setSurface(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Type d'ERP</div>
      <select value={erpType} onChange={e => setErpType(e.target.value)} className="border rounded px-2 py-1 w-full mb-2">
        <option value="M">M (magasins)</option>
        <option value="N">N (restauration)</option>
        <option value="O">O (hôtels)</option>
      </select>
      <div className="mt-4 font-semibold">Effectif théorique : {effectif} personnes</div>
      <div className="mt-2 text-sm text-gray-700">{advice}</div>
    </div>
  );
};

export default ERPEffectifCalculator; 