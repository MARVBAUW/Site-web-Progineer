/**
 * Utilitaire de validation SEO pour tester les éléments essentiels
 */

export interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  category: 'title' | 'description' | 'content' | 'structure' | 'images' | 'links';
}

export interface SEOValidationResult {
  isValid: boolean;
  issues: SEOIssue[];
}

/**
 * Valide la structure des titres d'une page
 * @param document Le document HTML à analyser
 * @returns Résultat de la validation avec problèmes potentiels
 */
export const validateHeadingStructure = (document: Document): SEOValidationResult => {
  const issues: SEOIssue[] = [];
  const h1Elements = document.querySelectorAll('h1');
  
  // Vérifier la présence et l'unicité de H1
  if (h1Elements.length === 0) {
    issues.push({
      type: 'error',
      message: 'Aucune balise H1 trouvée sur la page',
      category: 'structure'
    });
  } else if (h1Elements.length > 1) {
    issues.push({
      type: 'warning',
      message: `Plusieurs balises H1 trouvées (${h1Elements.length}). La page devrait avoir une seule balise H1`,
      category: 'structure'
    });
  }
  
  // Vérifier le contenu du H1
  if (h1Elements.length === 1) {
    const h1Content = h1Elements[0].textContent || '';
    if (h1Content.length < 10) {
      issues.push({
        type: 'warning',
        message: 'Le contenu du H1 est trop court (moins de 10 caractères)',
        category: 'content'
      });
    }
    if (h1Content.length > 70) {
      issues.push({
        type: 'warning',
        message: 'Le contenu du H1 est trop long (plus de 70 caractères)',
        category: 'content'
      });
    }
  }
  
  // Vérifier la hiérarchie des titres
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let previousLevel = 1;
  
  for (let i = 0; i < headings.length; i++) {
    const currentLevel = parseInt(headings[i].tagName.substring(1));
    
    // Vérifier qu'on ne saute pas de niveaux de titre
    if (currentLevel > previousLevel + 1) {
      issues.push({
        type: 'warning',
        message: `Saut dans la hiérarchie des titres: H${previousLevel} suivi directement par H${currentLevel}`,
        category: 'structure'
      });
    }
    
    previousLevel = currentLevel;
  }
  
  return {
    isValid: issues.length === 0,
    issues
  };
};

/**
 * Valide les méta balises d'une page
 * @param document Le document HTML à analyser
 * @returns Résultat de la validation avec problèmes potentiels
 */
export const validateMetaTags = (document: Document): SEOValidationResult => {
  const issues: SEOIssue[] = [];
  
  // Vérifier la présence et la longueur de la meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    issues.push({
      type: 'error',
      message: 'Meta description manquante',
      category: 'description'
    });
  } else {
    const descriptionContent = metaDescription.getAttribute('content') || '';
    if (descriptionContent.length < 50) {
      issues.push({
        type: 'warning',
        message: 'Meta description trop courte (moins de 50 caractères)',
        category: 'description'
      });
    } else if (descriptionContent.length > 160) {
      issues.push({
        type: 'warning',
        message: 'Meta description trop longue (plus de 160 caractères)',
        category: 'description'
      });
    }
  }
  
  // Vérifier la présence et la longueur du title
  const titleTag = document.querySelector('title');
  if (!titleTag) {
    issues.push({
      type: 'error',
      message: 'Balise title manquante',
      category: 'title'
    });
  } else {
    const titleContent = titleTag.textContent || '';
    if (titleContent.length < 10) {
      issues.push({
        type: 'warning',
        message: 'Titre trop court (moins de 10 caractères)',
        category: 'title'
      });
    } else if (titleContent.length > 70) {
      issues.push({
        type: 'warning',
        message: 'Titre trop long (plus de 70 caractères)',
        category: 'title'
      });
    }
  }
  
  // Vérifier les Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogImage = document.querySelector('meta[property="og:image"]');
  
  if (!ogTitle) issues.push({
    type: 'error',
    message: 'Balise og:title manquante',
    category: 'title'
  });
  if (!ogDescription) issues.push({
    type: 'error',
    message: 'Balise og:description manquante',
    category: 'description'
  });
  if (!ogImage) issues.push({
    type: 'error',
    message: 'Balise og:image manquante',
    category: 'images'
  });
  
  return {
    isValid: issues.length === 0,
    issues
  };
};

/**
 * Valide la présence de données structurées Schema.org
 * @param document Le document HTML à analyser
 * @returns Résultat de la validation avec problèmes potentiels
 */
export const validateSchemaData = (document: Document): SEOValidationResult => {
  const issues: SEOIssue[] = [];
  
  // Vérifier la présence de script JSON-LD
  const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');
  
  if (schemaScripts.length === 0) {
    issues.push({
      type: 'error',
      message: 'Aucune donnée structurée Schema.org (JSON-LD) trouvée',
      category: 'structure'
    });
    return {
      isValid: false,
      issues
    };
  }
  
  // Analyser chaque script JSON-LD
  let hasMainEntity = false;
  
  schemaScripts.forEach((script, index) => {
    try {
      const schemaData = JSON.parse(script.textContent || '{}');
      if (!schemaData['@context'] || schemaData['@context'] !== 'https://schema.org') {
        issues.push({
          type: 'error',
          message: `Script JSON-LD #${index + 1} : contexte Schema.org manquant ou incorrect`,
          category: 'structure'
        });
      }
      
      if (!schemaData['@type']) {
        issues.push({
          type: 'error',
          message: `Script JSON-LD #${index + 1} : type Schema.org manquant`,
          category: 'structure'
        });
      }
      
      // Vérifier les entités principales courantes
      if (['Organization', 'LocalBusiness', 'Service', 'WebPage', 'Article'].includes(schemaData['@type'])) {
        hasMainEntity = true;
      }
      
    } catch (error) {
      issues.push({
        type: 'error',
        message: `Script JSON-LD #${index + 1} : erreur de parsing JSON`,
        category: 'structure'
      });
    }
  });
  
  if (!hasMainEntity) {
    issues.push({
      type: 'error',
      message: 'Aucune entité principale Schema.org trouvée (Organization, LocalBusiness, Service, etc.)',
      category: 'structure'
    });
  }
  
  return {
    isValid: issues.length === 0,
    issues
  };
};

/**
 * Fonction principale pour valider tous les aspects SEO d'une page
 * @returns Résultat global de la validation SEO
 */
export const validatePageSEO = (): SEOValidationResult => {
  if (typeof document === 'undefined') {
    return { isValid: false, issues: [{
      type: 'error',
      message: 'Document non disponible',
      category: 'structure'
    }] };
  }
  
  const headingResults = validateHeadingStructure(document);
  const metaResults = validateMetaTags(document);
  const schemaResults = validateSchemaData(document);
  
  const allIssues = [
    ...headingResults.issues,
    ...metaResults.issues,
    ...schemaResults.issues
  ];
  
  return {
    isValid: allIssues.length === 0,
    issues: allIssues
  };
};
