import React, { useState } from 'react';

const FireEvacuationDistanceCalculator: React.FC = () => {
  const [roomType, setRoomType] = useState('ERP');
  const [exits, setExits] = useState(1);
  const [pathLength, setPathLength] = useState(15); // m

  // Valeurs réglementaires simplifiées (exemple)
  let maxDistance = 0;
  let advice = '';
  switch (roomType) {
    case 'ERP':
      maxDistance = exits > 1 ? 40 : 30;
      advice = "ERP : 30 m max (1 sortie), 40 m max (2 sorties ou plus).";
      break;
    case 'Habitation':
      maxDistance = 20;
      advice = "Habitation : 20 m max jusqu'à une issue.";
      break;
    case 'Industrie':
      maxDistance = 50;
      advice = "Industrie : 50 m max si plusieurs issues.";
      break;
    default:
      maxDistance = 30;
      advice = "Vérifiez la réglementation spécifique.";
  }
  const isCompliant = pathLength <= maxDistance;

  return (
    <div>
      <div className="mb-2">Type de local</div>
      <select value={roomType} onChange={e => setRoomType(e.target.value)} className="border rounded px-2 py-1 w-full mb-2">
        <option value="ERP">ERP (établissement recevant du public)</option>
        <option value="Habitation">Habitation</option>
        <option value="Industrie">Industrie</option>
      </select>
      <div className="mb-2">Nombre de sorties</div>
      <input type="number" value={exits} min={1} step={1} onChange={e => setExits(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Longueur du chemin d'évacuation (m)</div>
      <input type="number" value={pathLength} min={1} step={1} onChange={e => setPathLength(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mt-4 font-semibold">Distance maximale autorisée : {maxDistance} m</div>
      <div className={isCompliant ? "mt-2 text-green-700" : "mt-2 text-red-700"}>{isCompliant ? "Conforme" : "Non conforme : prévoir une issue supplémentaire ou réduire la distance."}</div>
      <div className="mt-2 text-sm text-gray-700">{advice}</div>
    </div>
  );
};

export default FireEvacuationDistanceCalculator; 