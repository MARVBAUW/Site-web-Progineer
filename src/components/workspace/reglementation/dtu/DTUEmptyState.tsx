
import React from 'react';
import { ImageOff, AlertTriangle, Info, Search } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

interface DTUEmptyStateProps {
  type?: 'empty' | 'error' | 'noResults';
  message?: string;
  description?: string;
}

export const DTUEmptyState: React.FC<DTUEmptyStateProps> = (props) => {
  const { type = 'empty' } = props;

  // Default messages based on type
  const defaultMessages = {
    empty: {
      title: 'Aucun schéma disponible',
      description: 'Il n\'y a pas de schémas à afficher actuellement.',
      icon: <Info className="h-10 w-10 text-gray-600 dark:text-gray-300" />
    },
    error: {
      title: 'Erreur de chargement',
      description: 'Impossible de charger les schémas. Veuillez réessayer plus tard.',
      icon: <AlertTriangle className="h-10 w-10 text-amber-500" />
    },
    noResults: {
      title: 'Aucun résultat trouvé',
      description: 'Aucun schéma ne correspond à votre recherche.',
      icon: <Search className="h-10 w-10 text-gray-600 dark:text-gray-300" />
    }
  };

  const currentMessage = defaultMessages[type];
  const displayTitle = props.message || currentMessage.title;
  const displayDescription = props.description || currentMessage.description;

  return (
    <div className="text-center py-10 bg-muted/50 rounded-lg border border-border">
      <div className="mx-auto mb-4">
        {currentMessage.icon}
      </div>
      <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">{displayTitle}</h3>
      <p className="text-low-contrast">{displayDescription}</p>
    </div>
  );
};

