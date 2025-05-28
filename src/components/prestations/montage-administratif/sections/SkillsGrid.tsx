import React from 'react';

const SkillsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Maîtrise du droit de l’urbanisme</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Expertise des réglementations locales et nationales pour sécuriser vos projets.</p>
    </div>
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Rédaction de dossiers</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Constitution de dossiers complets et conformes pour toutes les démarches administratives.</p>
    </div>
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Gestion des délais</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Suivi rigoureux des délais d’instruction et anticipation des étapes clés.</p>
    </div>
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Dialogue avec l’administration</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Relations efficaces avec les services instructeurs et gestion des demandes complémentaires.</p>
    </div>
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Gestion des recours</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Accompagnement en cas de recours ou de contentieux administratif.</p>
    </div>
    <div className="bg-muted/50 p-4 rounded-lg">
      <h4 className="font-medium mb-2">Accompagnement personnalisé</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">Conseil sur-mesure et suivi individualisé jusqu’à l’obtention de l’autorisation.</p>
    </div>
  </div>
);

export default SkillsGrid; 