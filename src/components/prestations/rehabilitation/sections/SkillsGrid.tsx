import React from 'react';

const SkillsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Diagnostic technique</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Analyse de l'état du bâti, identification des pathologies et des potentiels d'amélioration.</p>
    </div>
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Valorisation patrimoniale</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Mise en valeur des éléments architecturaux et adaptation aux usages contemporains.</p>
    </div>
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Mise aux normes</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Respect des réglementations en vigueur (sécurité, accessibilité, énergie).</p>
    </div>
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Gestion administrative</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Maîtrise des démarches, autorisations et suivi des dossiers.</p>
    </div>
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Suivi de chantier</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Coordination des entreprises, respect des délais et du budget.</p>
    </div>
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Accompagnement patrimonial</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Conseil sur la valorisation et la préservation du patrimoine bâti.</p>
    </div>
  </div>
);

export default SkillsGrid; 