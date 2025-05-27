import React, { useState } from 'react';

const FireSmokeExtractionCalculator: React.FC = () => {
  const [surface, setSurface] = useState(100); // m²
  const [height, setHeight] = useState(3); // m
  const [type, setType] = useState('ERP');

  // Coefficient k selon le type de local (exemples réglementaires)
  let k = 12; // m³/h/m² par défaut
  let advice = '';
  switch (type) {
    case 'ERP':
      k = 12;
      advice = "ERP : 12 volumes/heure, extraction mécanique ou naturelle selon configuration.";
      break;
    case 'Habitation':
      k = 6;
      advice = "Habitation : 6 volumes/heure, extraction naturelle souvent suffisante.";
      break;
    case 'Industrie':
      k = 18;
      advice = "Industrie : 18 volumes/heure, extraction mécanique recommandée.";
      break;
    default:
      k = 12;
      advice = "Référez-vous à la réglementation spécifique de votre établissement.";
  }
  // Q = S × H × k (en m³/h)
  const Q = surface * height * k;

  return (
    <div>
      <div className="mb-2">Surface du local (m²)</div>
      <input type="number" value={surface} min={1} step={1} onChange={e => setSurface(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Hauteur sous plafond (m)</div>
      <input type="number" value={height} min={1} step={0.1} onChange={e => setHeight(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Type de local</div>
      <select value={type} onChange={e => setType(e.target.value)} className="border rounded px-2 py-1 w-full mb-2">
        <option value="ERP">ERP (établissement recevant du public)</option>
        <option value="Habitation">Habitation</option>
        <option value="Industrie">Industrie</option>
      </select>
      <div className="mt-4 font-semibold">Débit minimal Q = {Q.toLocaleString()} m³/h</div>
      <div className="mt-2 text-sm text-gray-700">{advice}</div>
    </div>
  );
};

export default FireSmokeExtractionCalculator; 