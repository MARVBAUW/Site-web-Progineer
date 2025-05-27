import React, { useState } from 'react';

const AcousticLevelCalculator: React.FC = () => {
  const [level1, setLevel1] = useState(80); // dB à 1m
  const [distance, setDistance] = useState(5); // m
  const [propagation, setPropagation] = useState('champ libre');

  // L2 = L1 - 20*log10(d2/d1) (champ libre)
  const d1 = 1; // référence 1m
  const L2 = distance > 0 ? (level1 - 20 * Math.log10(distance / d1)) : 0;
  let advice = '';
  if (L2 > 70) advice = "Niveau sonore élevé : risque pour l'audition à long terme.";
  else if (L2 > 50) advice = "Niveau sonore modéré : attention au confort.";
  else advice = "Niveau sonore faible.";

  return (
    <div>
      <div className="mb-2">Niveau à la source (dB à 1m)</div>
      <input type="number" value={level1} min={0} step={1} onChange={e => setLevel1(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Distance à la source (m)</div>
      <input type="number" value={distance} min={0.1} step={0.1} onChange={e => setDistance(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Type de propagation</div>
      <select value={propagation} onChange={e => setPropagation(e.target.value)} className="border rounded px-2 py-1 w-full mb-2">
        <option value="champ libre">Champ libre</option>
        <option value="intérieur">Intérieur</option>
      </select>
      <div className="mt-4 font-semibold">Niveau à {distance} m ≈ {L2.toFixed(1)} dB</div>
      <div className="mt-2 text-sm text-gray-700">{advice}</div>
    </div>
  );
};

export default AcousticLevelCalculator; 