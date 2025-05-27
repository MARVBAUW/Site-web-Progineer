import React, { useState } from 'react';

const AcousticReverbCalculator: React.FC = () => {
  const [volume, setVolume] = useState(100); // m³
  const [absorption, setAbsorption] = useState(20); // m² eq. sabine
  const [roomType, setRoomType] = useState('bureau');

  // Sabine : TR = 0.16 * V / A
  const TR = absorption > 0 ? (0.16 * volume / absorption) : 0;
  let advice = '';
  if (TR > 1.5) advice = "Réverbération trop longue : ajouter des matériaux absorbants.";
  else if (TR > 0.8) advice = "Réverbération correcte pour un bureau ou logement.";
  else advice = "Réverbération faible : bon confort acoustique.";

  return (
    <div>
      <div className="mb-2">Volume du local (m³)</div>
      <input type="number" value={volume} min={1} step={1} onChange={e => setVolume(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Surface d'absorption équivalente (m² sabine)</div>
      <input type="number" value={absorption} min={1} step={1} onChange={e => setAbsorption(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Type de local</div>
      <select value={roomType} onChange={e => setRoomType(e.target.value)} className="border rounded px-2 py-1 w-full mb-2">
        <option value="bureau">Bureau</option>
        <option value="salle de classe">Salle de classe</option>
        <option value="restaurant">Restaurant</option>
        <option value="salle de sport">Salle de sport</option>
      </select>
      <div className="mt-4 font-semibold">Temps de réverbération TR ≈ {TR.toFixed(2)} s</div>
      <div className="mt-2 text-sm text-gray-700">{advice}</div>
    </div>
  );
};

export default AcousticReverbCalculator; 