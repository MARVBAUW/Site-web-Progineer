import React, { useState } from 'react';

const ParkingPMRCalculator: React.FC = () => {
  const [totalPlaces, setTotalPlaces] = useState(50);

  // Règle : 2% de places PMR, minimum 1, arrondi supérieur
  const pmrPlaces = totalPlaces <= 500 ? Math.max(1, Math.ceil(totalPlaces * 0.02)) : 10 + Math.ceil((totalPlaces - 500) * 0.005);
  const percent = totalPlaces > 0 ? ((pmrPlaces / totalPlaces) * 100).toFixed(1) : '0.0';
  let advice = '';
  if (pmrPlaces / totalPlaces < 0.02) advice = "Attention : le minimum réglementaire est de 2%.";
  else advice = "Conforme à la réglementation.";

  return (
    <div>
      <div className="mb-2">Nombre total de places de parking</div>
      <input type="number" value={totalPlaces} min={1} step={1} onChange={e => setTotalPlaces(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mt-4 font-semibold">Places PMR requises : {pmrPlaces} ({percent}%)</div>
      <div className="mt-2 text-sm text-gray-700">{advice}</div>
    </div>
  );
};

export default ParkingPMRCalculator; 