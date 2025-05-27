import React, { useState } from 'react';

const ERPCategoryCalculator: React.FC = () => {
  const [effectif, setEffectif] = useState(100);

  // Seuils réglementaires (exemple France)
  let category = 5;
  let advice = '';
  if (effectif > 1500) {
    category = 1;
    advice = "Catégorie 1 : >1500 personnes (grands ERP).";
  } else if (effectif > 700) {
    category = 2;
    advice = "Catégorie 2 : 701 à 1500 personnes.";
  } else if (effectif > 300) {
    category = 3;
    advice = "Catégorie 3 : 301 à 700 personnes.";
  } else if (effectif > 200) {
    category = 4;
    advice = "Catégorie 4 : 201 à 300 personnes.";
  } else {
    category = 5;
    advice = "Catégorie 5 : ≤200 personnes (petits ERP).";
  }

  return (
    <div>
      <div className="mb-2">Effectif théorique</div>
      <input type="number" value={effectif} min={1} step={1} onChange={e => setEffectif(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mt-4 font-semibold">Catégorie ERP : {category}</div>
      <div className="mt-2 text-sm text-gray-700">{advice}</div>
    </div>
  );
};

export default ERPCategoryCalculator; 