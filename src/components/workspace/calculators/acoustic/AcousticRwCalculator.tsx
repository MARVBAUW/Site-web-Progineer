import React, { useState } from 'react';

const AcousticRwCalculator: React.FC = () => {
  const [surface, setSurface] = useState(10); // m²
  const [mass, setMass] = useState(50); // kg/m²
  const [wallType, setWallType] = useState('béton');

  // Loi de masse simplifiée : Rw = 20*log10(m) - 47 (m en kg/m²)
  const Rw = mass > 0 ? Math.round(20 * Math.log10(mass) - 47) : 0;
  let advice = '';
  if (Rw < 30) advice = "Affaiblissement faible : isolation insuffisante pour locaux sensibles.";
  else if (Rw < 45) advice = "Affaiblissement moyen : adapté aux logements standards.";
  else advice = "Affaiblissement élevé : bon confort acoustique.";

  return (
    <div>
      <div className="mb-2">Surface de la paroi (m²)</div>
      <input type="number" value={surface} min={1} step={1} onChange={e => setSurface(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Masse surfacique (kg/m²)</div>
      <input type="number" value={mass} min={1} step={1} onChange={e => setMass(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Type de paroi</div>
      <select value={wallType} onChange={e => setWallType(e.target.value)} className="border rounded px-2 py-1 w-full mb-2">
        <option value="béton">Béton</option>
        <option value="brique">Brique</option>
        <option value="plâtre">Plâtre</option>
        <option value="ossature bois">Ossature bois</option>
      </select>
      <div className="mt-4 font-semibold">Indice Rw ≈ {Rw} dB</div>
      <div className="mt-2 text-sm text-gray-700">{advice}</div>
    </div>
  );
};

export default AcousticRwCalculator; 