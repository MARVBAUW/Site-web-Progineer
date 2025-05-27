import React, { useState } from 'react';

const FireExtinguisherCalculator: React.FC = () => {
  const [surface, setSurface] = useState(200); // m²
  const [risk, setRisk] = useState('A');
  const [levels, setLevels] = useState(1);

  // Norme : 1 extincteur 6L pour 200 m², au moins 1 par niveau
  const nbExtincteurs = Math.max(Math.ceil(surface / 200), levels);
  let type = '';
  let advice = '';
  switch (risk) {
    case 'A':
      type = 'Eau pulvérisée avec additif (6L)';
      advice = "Risque A (feux secs) : extincteurs à eau pulvérisée recommandés.";
      break;
    case 'B':
      type = 'CO₂ (5kg) ou poudre ABC (6kg)';
      advice = "Risque B (liquides inflammables) : extincteurs CO₂ ou poudre ABC recommandés.";
      break;
    case 'C':
      type = 'Poudre ABC (6kg)';
      advice = "Risque C (gaz) : extincteurs poudre ABC recommandés.";
      break;
    default:
      type = 'Eau pulvérisée (6L)';
      advice = "Vérifiez la nature du risque pour choisir le bon extincteur.";
  }

  return (
    <div>
      <div className="mb-2">Surface à protéger (m²)</div>
      <input type="number" value={surface} min={1} step={1} onChange={e => setSurface(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Type de risque</div>
      <select value={risk} onChange={e => setRisk(e.target.value)} className="border rounded px-2 py-1 w-full mb-2">
        <option value="A">A (feux secs : papier, bois, tissus)</option>
        <option value="B">B (liquides inflammables)</option>
        <option value="C">C (gaz)</option>
      </select>
      <div className="mb-2">Nombre de niveaux</div>
      <input type="number" value={levels} min={1} step={1} onChange={e => setLevels(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mt-4 font-semibold">Nombre d'extincteurs requis : {nbExtincteurs}</div>
      <div className="mt-2 text-sm text-gray-700">Type recommandé : {type}</div>
      <div className="mt-2 text-sm text-gray-700">{advice}</div>
    </div>
  );
};

export default FireExtinguisherCalculator; 