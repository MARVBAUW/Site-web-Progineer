import React, { useState } from 'react';

const ThermalBridgeCalculator: React.FC = () => {
  const [length, setLength] = useState(5); // m
  const [psi, setPsi] = useState(0.5); // W/m.K
  const [deltaT, setDeltaT] = useState(15); // K
  const Q = psi * length * deltaT;

  return (
    <div>
      <div className="mb-2">Longueur du pont thermique (m)</div>
      <input type="number" value={length} min={0} step={0.01} onChange={e => setLength(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Coefficient linéique Ψ (W/m.K)</div>
      <input type="number" value={psi} min={0} step={0.01} onChange={e => setPsi(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Différence de température ΔT (K)</div>
      <input type="number" value={deltaT} min={0} step={0.1} onChange={e => setDeltaT(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mt-4 font-semibold">Déperdition Q = Ψ × L × ΔT = {Q.toFixed(2)} W</div>
    </div>
  );
};

export default ThermalBridgeCalculator; 