import React, { useState } from 'react';

const FootprintCalculator: React.FC = () => {
  const [terrain, setTerrain] = useState(500); // m²
  const [batiment, setBatiment] = useState(100); // m²
  const [cos, setCos] = useState(0.5);

  const emprise = (batiment / terrain) * 100;
  const maxConstructible = terrain * cos;

  return (
    <div>
      <div className="mb-2">Surface du terrain (m²)</div>
      <input type="number" value={terrain} min={1} step={1} onChange={e => setTerrain(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Surface bâtie (m²)</div>
      <input type="number" value={batiment} min={1} step={1} onChange={e => setBatiment(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">COS (coefficient d’occupation des sols)</div>
      <input type="number" value={cos} min={0.1} step={0.01} onChange={e => setCos(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mt-4 font-semibold">Emprise au sol : {emprise.toFixed(2)} %</div>
      <div className="mt-2 font-semibold">Surface constructible max : {maxConstructible.toFixed(2)} m²</div>
      <div className="mt-2 text-sm text-gray-700">Vérifiez la réglementation locale (PLU, COS, etc.) pour la constructibilité.</div>
    </div>
  );
};

export default FootprintCalculator; 