import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AUDIT_POINTS = [
  { label: "Électricité", critical: true },
  { label: "Thermique", critical: false },
  { label: "Accessibilité", critical: true },
  { label: "Sécurité incendie", critical: true },
  { label: "Ventilation", critical: false },
  { label: "Structure", critical: true },
  { label: "Plomberie", critical: false },
  { label: "Toiture", critical: false },
  { label: "Menuiseries", critical: false },
  { label: "Isolation", critical: false },
];

const TechnicalAuditCalculator: React.FC = () => {
  const [audit, setAudit] = useState(
    AUDIT_POINTS.map(point => ({ ...point, conforme: false, commentaire: "" }))
  );

  const handleCheck = (idx: number) => {
    setAudit(audit => audit.map((item, i) => i === idx ? { ...item, conforme: !item.conforme } : item));
  };

  const handleComment = (idx: number, value: string) => {
    setAudit(audit => audit.map((item, i) => i === idx ? { ...item, commentaire: value } : item));
  };

  const total = audit.length;
  const conformes = audit.filter(a => a.conforme).length;
  const percent = Math.round((conformes / total) * 100);
  const criticalNonConformes = audit.filter(a => a.critical && !a.conforme);

  return (
    <div>
      <h2>Audit technique du bâtiment</h2>
      <div className="space-y-4 mt-4">
        {audit.map((point, idx) => (
          <div key={point.label} className="flex items-center gap-4 mb-2">
            <Checkbox checked={point.conforme} onCheckedChange={() => handleCheck(idx)} id={`audit-${idx}`} />
            <label htmlFor={`audit-${idx}`} className="font-medium min-w-[140px]">{point.label}</label>
            <Input
              placeholder="Commentaire (optionnel)"
              value={point.commentaire}
              onChange={e => handleComment(idx, e.target.value)}
              className="flex-1"
            />
          </div>
        ))}
      </div>
      <div className="mt-6">
        <div className="font-semibold">Score global : {conformes} / {total} ({percent}%)</div>
        {criticalNonConformes.length > 0 && (
          <div className="text-red-600 font-medium mt-2">
            Attention : {criticalNonConformes.map(a => a.label).join(', ')} non conforme(s) !
          </div>
        )}
        {criticalNonConformes.length === 0 && percent === 100 && (
          <div className="text-green-600 font-medium mt-2">Audit conforme sur tous les points critiques.</div>
        )}
      </div>
    </div>
  );
};

export default TechnicalAuditCalculator;
