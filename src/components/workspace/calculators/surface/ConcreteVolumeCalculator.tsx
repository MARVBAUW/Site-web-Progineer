import React, { useState } from 'react';

const ConcreteVolumeCalculator: React.FC = () => {
  const [length, setLength] = useState(4); // m
  const [width, setWidth] = useState(0.3); // m
  const [height, setHeight] = useState(0.2); // m
  const [count, setCount] = useState(1);
  const [margin, setMargin] = useState(5); // %

  const volumeUnit = length * width * height;
  const volumeTotal = volumeUnit * count * (1 + margin / 100);
  const nbToupies = volumeTotal / 6;

  return (
    <div>
      <div className="mb-2">Longueur (m)</div>
      <input type="number" value={length} min={0.1} step={0.01} onChange={e => setLength(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Largeur (m)</div>
      <input type="number" value={width} min={0.05} step={0.01} onChange={e => setWidth(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Hauteur (m)</div>
      <input type="number" value={height} min={0.05} step={0.01} onChange={e => setHeight(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Nombre d'éléments</div>
      <input type="number" value={count} min={1} step={1} onChange={e => setCount(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Marge de sécurité (%)</div>
      <input type="number" value={margin} min={0} step={1} onChange={e => setMargin(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mt-4 font-semibold">Volume unitaire : {volumeUnit.toFixed(3)} m³</div>
      <div className="mt-2 font-semibold">Volume total : {volumeTotal.toFixed(2)} m³</div>
      <div className="mt-2 font-semibold">Nombre de toupies (6m³) : {nbToupies.toFixed(1)}</div>
      <div className="mt-2 text-sm text-gray-700">Ajoutez une marge pour les pertes et imprévus. Commandez toujours un peu plus que le strict nécessaire.</div>
    </div>
  );
};

export default ConcreteVolumeCalculator; 