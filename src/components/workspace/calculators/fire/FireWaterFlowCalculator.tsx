import React, { useState } from 'react';

const FireWaterFlowCalculator: React.FC = () => {
  const [surface, setSurface] = useState(200); // m²
  const [type, setType] = useState('ERP');
  const [levels, setLevels] = useState(1);

  // Valeurs réglementaires (exemples simplifiés)
  let flow = 0;
  let advice = '';
  switch (type) {
    case 'ERP':
      flow = Math.ceil(surface / 100) * 60; // 60 L/min/100 m²
      advice = "ERP : 60 L/min pour 100 m², prévoir une réserve adaptée.";
      break;
    case 'Habitation':
      flow = Math.ceil(surface / 200) * 30; // 30 L/min/200 m²
      advice = "Habitation : 30 L/min pour 200 m², prévoir un point d'eau par niveau.";
      break;
    case 'Industrie':
      flow = Math.ceil(surface / 100) * 90; // 90 L/min/100 m²
      advice = "Industrie : 90 L/min pour 100 m², prévoir des poteaux incendie adaptés.";
      break;
    default:
      flow = 60;
      advice = "Référez-vous à la réglementation spécifique de votre établissement.";
  }
  flow = flow * levels;

  return (
    <div>
      <div className="mb-2">Surface à protéger (m²)</div>
      <input type="number" value={surface} min={1} step={1} onChange={e => setSurface(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Type de local</div>
      <select value={type} onChange={e => setType(e.target.value)} className="border rounded px-2 py-1 w-full mb-2">
        <option value="ERP">ERP (établissement recevant du public)</option>
        <option value="Habitation">Habitation</option>
        <option value="Industrie">Industrie</option>
      </select>
      <div className="mb-2">Nombre de niveaux</div>
      <input type="number" value={levels} min={1} step={1} onChange={e => setLevels(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mt-4 font-semibold">Débit minimal à prévoir : {flow} L/min</div>
      <div className="mt-2 text-sm text-gray-700">{advice}</div>
    </div>
  );
};

export default FireWaterFlowCalculator; 