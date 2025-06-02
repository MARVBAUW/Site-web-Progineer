import React, { useEffect, useState } from 'react';
import { AlertTriangle, Info, X, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { validatePageSEO, SEOIssue, SEOValidationResult } from '@/utils/seoValidator';

/**
 * Composant pour valider et afficher les problèmes SEO d'une page
 * Visible uniquement en mode développement
 */
export const SEOValidator: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [validationResult, setValidationResult] = useState<SEOValidationResult | null>(null);

  useEffect(() => {
    const result = validatePageSEO();
    setValidationResult(result);
  }, []);

  const copyIssues = () => {
    if (!validationResult) return;

    const issuesByCategory = validationResult.issues.reduce((acc, issue) => {
      if (!acc[issue.category]) {
        acc[issue.category] = [];
      }
      acc[issue.category].push(issue);
      return acc;
    }, {} as Record<string, SEOIssue[]>);

    const formattedIssues = Object.entries(issuesByCategory)
      .map(([category, issues]) => {
        const categoryIssues = issues
          .map(issue => `[${issue.type.toUpperCase()}] ${issue.message}`)
          .join('\n');
        return `${category.toUpperCase()}:\n${categoryIssues}`;
      })
      .join('\n\n');

    navigator.clipboard.writeText(formattedIssues);
    setIsCopied(true);
    toast({
      title: 'Issues copiées',
      description: 'Les problèmes SEO ont été copiés dans le presse-papiers',
    });
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (!validationResult || validationResult.isValid) {
    return null;
  }

  const issuesByCategory = validationResult.issues.reduce((acc, issue) => {
    if (!acc[issue.category]) {
      acc[issue.category] = [];
    }
    acc[issue.category].push(issue);
    return acc;
  }, {} as Record<string, SEOIssue[]>);

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-500" />
          <h3 className="font-semibold">Problèmes SEO détectés</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={copyIssues}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <Copy className="h-4 w-4 mr-1" />
            {isCopied ? 'Copié !' : 'Copier'}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            {isExpanded ? 'Réduire' : 'Développer'}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setValidationResult(null)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-4">
          {Object.entries(issuesByCategory).map(([category, issues]) => (
            <div key={category} className="space-y-2">
              <h4 className="font-medium text-sm text-gray-700 dark:text-gray-300">
                {category.toUpperCase()}
              </h4>
              <ul className="space-y-1">
                {issues.map((issue, index) => (
                  <li
                    key={index}
                    className={`text-sm flex items-start gap-2 ${
                      issue.type === 'error'
                        ? 'text-red-600 dark:text-red-400'
                        : issue.type === 'warning'
                        ? 'text-yellow-600 dark:text-yellow-400'
                        : 'text-blue-600 dark:text-blue-400'
                    }`}
                  >
                    {issue.type === 'error' ? (
                      <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    ) : (
                      <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    )}
                    <span>{issue.message}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SEOValidator;
