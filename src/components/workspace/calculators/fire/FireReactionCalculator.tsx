import React, { useState } from 'react';

const MATERIALS = [
  { name: 'Béton', classement: 'A1', min: 0 },
  { name: 'Acier', classement: 'A1', min: 0 },
  { name: 'Laine de roche', classement: 'A1', min: 0 },
  { name: 'Plâtre', classement: 'A2', min: 0 },
  { name: 'Bois massif', classement: 'D', min: 10 },
  { name: 'Bois composite', classement: 'E', min: 10 },
  { name: 'PVC', classement: 'E', min: 0 },
  { name: 'Polystyrène', classement: 'F', min: 0 },
  { name: 'Peinture intumescente', classement: 'B', min: 0 },
];

const USAGES = [
  { value: 'ERP', label: 'ERP (public)' },
  { value: 'Habitation', label: 'Habitation' },
  { value: 'Industrie', label: 'Industrie' },
];

const FireReactionCalculator: React.FC = () => {
  const [material, setMaterial] = useState(MATERIALS[0].name);
  const [thickness, setThickness] = useState(10);
  const [usage, setUsage] = useState(USAGES[0].value);

  const mat = MATERIALS.find(m => m.name === material);
  let classement = mat ? mat.classement : 'F';
  let advice = '';

  // Exemples de règles complémentaires
  if (mat) {
    if (mat.name.includes('Bois') && thickness < mat.min) {
      classement = 'E';
      advice = "Épaisseur insuffisante pour le bois massif/composite. Privilégier ≥ 10 mm pour une meilleure réaction au feu.";
    }
    if (mat.classement === 'A1' && usage === 'ERP') {
      advice = "Matériau incombustible, conforme pour tous usages.";
    } else if (mat.classement === 'E' || mat.classement === 'F') {
      advice = "Attention : matériau combustible, usage limité en ERP et locaux à risques.";
    } else if (mat.classement === 'B' || mat.classement === 'C') {
      advice = "Matériau à réaction au feu améliorée, vérifier la conformité selon l'usage.";
    }
  }

  return (
    <div>
      <div className="mb-2">Matériau</div>
      <select value={material} onChange={e => setMaterial(e.target.value)} className="border rounded px-2 py-1 w-full mb-2">
        {MATERIALS.map(m => (
          <option key={m.name} value={m.name}>{m.name}</option>
        ))}
      </select>
      <div className="mb-2">Épaisseur (mm)</div>
      <input type="number" value={thickness} min={1} step={1} onChange={e => setThickness(Number(e.target.value))} className="border rounded px-2 py-1 w-full mb-2" />
      <div className="mb-2">Usage</div>
      <select value={usage} onChange={e => setUsage(e.target.value)} className="border rounded px-2 py-1 w-full mb-2">
        {USAGES.map(u => (
          <option key={u.value} value={u.value}>{u.label}</option>
        ))}
      </select>
      <div className="mt-4 font-semibold">Classement au feu : {classement}</div>
      <div className="mt-2 text-sm text-gray-700">{advice}</div>
    </div>
  );
};

export default FireReactionCalculator; 