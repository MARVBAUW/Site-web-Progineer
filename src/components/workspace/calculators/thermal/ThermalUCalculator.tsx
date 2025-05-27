import React, { useState } from 'react';

const ThermalUCalculator: React.FC = () => {
  const [resistance, setResistance] = useState(2.5); // m².K/W
  const U = resistance > 0 ? 1 / resistance : 0;

  return (
    <div>
      <div className="mb-2">Résistance thermique totale R (m².K/W)</div>
      <input type="number" value={resistance} min={0.01} step={0.01} onChange={e => setResistance(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mt-4 font-semibold">Coefficient U = 1 / R = {U.toFixed(3)} W/m².K</div>
    </div>
  );
};

export default ThermalUCalculator; 