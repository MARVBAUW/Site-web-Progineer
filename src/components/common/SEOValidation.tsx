import React, { useState } from 'react';
import { Copy, X, AlertTriangle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

/**
 * Props for validating the SEO implementation on a page
 */
interface SEOValidationProps {
  title?: string;
  description?: string;
  h1Text?: string;
  url?: string;
  schemaType?: string;
  hasSchema?: boolean;
  images?: {
    src: string;
    alt?: string;
  }[];
  links?: {
    href: string;
    text?: string;
  }[];
}

/**
 * Component to validate SEO implementation (meant for development only)
 */
const SEOValidation: React.FC<SEOValidationProps> = ({
  title,
  description,
  h1Text,
  url,
  schemaType,
  hasSchema,
  images = [],
  links = []
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  // Only run in development mode
  if (!import.meta.env.DEV) {
    return null;
  }
  
  // Validate SEO elements
  const issues: Array<{
    type: 'error' | 'warning' | 'info';
    message: string;
    category: 'title' | 'description' | 'content' | 'structure' | 'images' | 'links';
  }> = [];
  
  // Title validation
  if (!title) {
    issues.push({
      type: 'error',
      message: 'Title manquant',
      category: 'title'
    });
  } else if (title.length < 10) {
    issues.push({
      type: 'error',
      message: 'Title trop court (minimum 10 caractères)',
      category: 'title'
    });
  } else if (title.length > 70) {
    issues.push({
      type: 'warning',
      message: 'Title trop long (maximum 70 caractères)',
      category: 'title'
    });
  }
  
  // Description validation
  if (!description) {
    issues.push({
      type: 'error',
      message: 'Meta description manquante',
      category: 'description'
    });
  } else if (description.length < 50) {
    issues.push({
      type: 'error',
      message: 'Meta description trop courte (minimum 50 caractères)',
      category: 'description'
    });
  } else if (description.length > 160) {
    issues.push({
      type: 'warning',
      message: 'Meta description trop longue (maximum 160 caractères)',
      category: 'description'
    });
  }
  
  // H1 validation
  if (!h1Text) {
    issues.push({
      type: 'error',
      message: 'Balise H1 manquante',
      category: 'content'
    });
  }
  
  // Schema validation
  if (!hasSchema) {
    issues.push({
      type: 'warning',
      message: 'Données structurées Schema.org manquantes',
      category: 'structure'
    });
  }

  // Images validation
  images.forEach((image, index) => {
    if (!image.alt) {
      issues.push({
        type: 'warning',
        message: `Image ${index + 1} sans attribut alt`,
        category: 'images'
      });
    }
  });

  // Links validation
  links.forEach((link, index) => {
    if (!link.text || link.text.length < 3) {
      issues.push({
        type: 'warning',
        message: `Lien ${index + 1} sans texte descriptif`,
        category: 'links'
      });
    }
  });
  
  // If no issues, don't render anything
  if (issues.length === 0) {
    return null;
  }

  const copyIssues = () => {
    const text = issues.map(issue => 
      `${issue.type.toUpperCase()} - ${issue.category}: ${issue.message}`
    ).join('\n');
    
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      toast({
        title: "Erreurs SEO copiées",
        description: "Les erreurs ont été copiées dans le presse-papier",
      });
      setTimeout(() => setIsCopied(false), 2000);
    });
  };
  
  // Group issues by category
  const groupedIssues = issues.reduce((acc, issue) => {
    if (!acc[issue.category]) {
      acc[issue.category] = [];
    }
    acc[issue.category].push(issue);
    return acc;
  }, {} as Record<string, typeof issues>);

  return (
    <div className={`fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-50 border border-gray-200 dark:border-gray-700 max-w-md transition-all duration-300 ${isExpanded ? 'w-96' : 'w-12'}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          <h3 className="font-semibold text-sm">Validation SEO</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={copyIssues}
            className="h-8 w-8 p-0"
          >
            <Copy className={`h-4 w-4 ${isCopied ? 'text-green-500' : 'text-gray-500'}`} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4 text-gray-500" />
          </Button>
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-4">
          {Object.entries(groupedIssues).map(([category, categoryIssues]) => (
            <div key={category} className="space-y-2">
              <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                {category}
              </h4>
              <ul className="space-y-1">
                {categoryIssues.map((issue, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    {issue.type === 'error' ? (
                      <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                    ) : (
                      <Info className="h-4 w-4 text-amber-500 mt-0.5" />
                    )}
                    <span className={issue.type === 'error' ? 'text-red-600 dark:text-red-400' : 'text-amber-600 dark:text-amber-400'}>
                      {issue.message}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Visible uniquement en mode développement
          </div>
        </div>
      )}
    </div>
  );
};

export default SEOValidation;
