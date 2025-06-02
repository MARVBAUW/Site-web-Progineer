import React, { useEffect, useState } from 'react';
import { AlertTriangle, Info, X, Copy, CheckCircle2 } from 'lucide-react';
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
          .map(issue => {
            let details = `[${issue.type.toUpperCase()}] ${issue.message}`;
            if (issue.componentPath) {
              details += `\n   Composant: ${issue.componentPath}`;
            }
            if (issue.text) {
              details += `\n   Texte: "${issue.text}"`;
            }
            if (issue.score !== undefined) {
              details += `\n   Score: ${issue.score}`;
            }
            return details;
          })
          .join('\n');
        return `${category.toUpperCase()}:\n${categoryIssues}`;
      })
      .join('\n\n');

    const scoreInfo = `\n\nScores par catégorie:
SEO: ${validationResult.categories.seo}
Performance: ${validationResult.categories.performance}
Accessibilité: ${validationResult.categories.accessibility}
Bonnes pratiques: ${validationResult.categories['best-practices']}

Score global: ${validationResult.score}`;

    navigator.clipboard.writeText(formattedIssues + scoreInfo);
    setIsCopied(true);
    toast({
      title: 'Issues copiées',
      description: 'Les problèmes SEO ont été copiés dans le presse-papiers',
    });
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (!validationResult) {
    return null;
  }

  const issuesByCategory = validationResult.issues.reduce((acc, issue) => {
    if (!acc[issue.category]) {
      acc[issue.category] = [];
    }
    acc[issue.category].push(issue);
    return acc;
  }, {} as Record<string, SEOIssue[]>);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 50) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 50) return 'À améliorer';
    return 'Mauvais';
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'seo':
        return 'SEO';
      case 'performance':
        return 'Performance';
      case 'accessibility':
        return 'Accessibilité';
      case 'best-practices':
        return 'Bonnes pratiques';
      default:
        return category.toUpperCase();
    }
  };

  const getSubcategoryLabel = (subcategory: string) => {
    switch (subcategory) {
      case 'headings':
        return 'Structure des titres';
      case 'meta-tags':
        return 'Méta-balises';
      case 'images':
        return 'Images';
      case 'links':
        return 'Liens';
      case 'content':
        return 'Contenu';
      case 'structure':
        return 'Structure';
      default:
        return subcategory;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {validationResult.isValid ? (
            <CheckCircle2 className="h-5 w-5 text-green-500" />
          ) : (
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
          )}
          <div>
            <h3 className="font-semibold">Problèmes SEO détectés</h3>
            <div className={`text-sm ${getScoreColor(validationResult.score)}`}>
              Score global: {Math.round(validationResult.score * 100)}%
            </div>
          </div>
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
        <div className="max-h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {Object.entries(validationResult.categories).map(([category, score]) => (
              <div key={category} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {getCategoryLabel(category)}
                </div>
                <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
                  {score}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {getScoreLabel(score)}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Score global
              </div>
              <div className={`text-3xl font-bold ${getScoreColor(validationResult.score)}`}>
                {validationResult.score}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {getScoreLabel(validationResult.score)}
              </div>
            </div>
          </div>

          {Object.entries(validationResult.subcategories).length > 0 && (
            <div className="mb-6">
              <h4 className="font-medium text-sm text-gray-700 dark:text-gray-300 mb-2">
                Détails par sous-catégorie
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(validationResult.subcategories).map(([subcategory, score]) => (
                  <div key={subcategory} className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow-sm">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      {getSubcategoryLabel(subcategory)}
                    </div>
                    <div className={`text-lg font-bold ${getScoreColor(score)}`}>
                      {score}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-4">
            {Object.entries(issuesByCategory).map(([category, issues]) => (
              <div key={category} className="space-y-2">
                <h4 className="font-medium text-sm text-gray-700 dark:text-gray-300 sticky top-0 bg-white dark:bg-gray-800 py-2">
                  {getCategoryLabel(category)}
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
                      <div className="flex flex-col">
                        <span>{issue.message}</span>
                        {issue.componentPath && (
                          <span className="text-xs opacity-75">
                            Composant: {issue.componentPath}
                          </span>
                        )}
                        {issue.text && (
                          <span className="text-xs opacity-75">
                            Texte: "{issue.text}"
                          </span>
                        )}
                        {issue.score !== undefined && (
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Score : <span className={getScoreColor(issue.score)}>{issue.score}</span>
                            {issue.weight && (
                              <span className="text-xs ml-1">
                                (Poids: {issue.weight})
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SEOValidator;
