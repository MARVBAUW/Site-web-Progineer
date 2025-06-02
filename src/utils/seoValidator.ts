/**
 * Utilitaire de validation SEO pour tester les éléments essentiels
 */

export interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  message: string;
  category: 'title' | 'description' | 'content' | 'structure' | 'images' | 'links' | 'performance' | 'accessibility' | 'best-practices';
  subcategory?: string;
  componentPath?: string;
  text?: string;
  score?: number;
  weight?: number;
}

export interface SEOValidationResult {
  isValid: boolean;
  issues: SEOIssue[];
  score: number;
  categories: {
    seo: number;
    performance: number;
    accessibility: number;
    'best-practices': number;
  };
  subcategories: {
    [key: string]: number;
  };
}

/**
 * Déduplique les problèmes SEO similaires
 */
const deduplicateIssues = (issues: SEOIssue[]): SEOIssue[] => {
  const uniqueIssues = new Map<string, SEOIssue>();
  
  issues.forEach(issue => {
    const key = `${issue.category}-${issue.message}-${issue.componentPath || ''}-${issue.text || ''}`;
    if (!uniqueIssues.has(key)) {
      uniqueIssues.set(key, issue);
    }
  });
  
  return Array.from(uniqueIssues.values());
};

/**
 * Calcule le score selon l'échelle Lighthouse
 * @param issues Liste des problèmes
 * @param total Nombre total de vérifications
 */
const calculateLighthouseScore = (issues: SEOIssue[], total: number): number => {
  if (issues.length === 0) return 100;
  
  // Calculer le score en fonction des poids des problèmes
  const weightedIssues = issues.reduce((sum, issue) => {
    const weight = issue.weight || 1;
    // Les erreurs ont un impact plus important sur le score
    const impact = issue.type === 'error' ? 1 : issue.type === 'warning' ? 0.5 : 0.1;
    return sum + (weight * impact);
  }, 0);
  
  // Calculer le score final sur 100
  const score = Math.max(0, Math.min(100, Math.round(100 - (weightedIssues / total) * 100)));
  return score;
};

/**
 * Valide la structure des titres d'une page
 * @param document Le document HTML à analyser
 * @returns Résultat de la validation avec problèmes potentiels
 */
export const validateHeadingStructure = (document: Document): SEOValidationResult => {
  const issues: SEOIssue[] = [];
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const headingLevels = Array.from(headings).map(h => parseInt(h.tagName[1]));
  
  // Vérifier la présence d'un H1
  const h1 = document.querySelector('h1');
  if (!h1) {
    issues.push({
      type: 'error',
      message: 'Balise H1 manquante',
      category: 'structure',
      subcategory: 'headings',
      weight: 3,
      score: 0
    });
  } else {
    // Vérifier la longueur du H1
    const h1Text = h1.textContent || '';
    if (h1Text.length > 70) {
      issues.push({
        type: 'warning',
        message: 'Le contenu du H1 est trop long (plus de 70 caractères)',
        category: 'content',
        subcategory: 'headings',
        componentPath: h1.getAttribute('data-component-path') || undefined,
        text: h1Text,
        weight: 1,
        score: 50
      });
    }
    
    // Vérifier si le H1 est visible
    const h1Style = window.getComputedStyle(h1);
    if (h1Style.display === 'none' || h1Style.visibility === 'hidden') {
      issues.push({
        type: 'error',
        message: 'Le H1 est masqué visuellement',
        category: 'accessibility',
        subcategory: 'headings',
        componentPath: h1.getAttribute('data-component-path') || undefined,
        weight: 2,
        score: 0
      });
    }
  }
  
  // Vérifier les sauts dans la hiérarchie
  for (let i = 1; i < headingLevels.length; i++) {
    const currentLevel = headingLevels[i];
    const previousLevel = headingLevels[i - 1];
    
    if (currentLevel - previousLevel > 1) {
      const heading = headings[i];
      issues.push({
        type: 'error',
        message: `Saut dans la hiérarchie des titres: H${previousLevel} suivi directement par H${currentLevel}`,
        category: 'structure',
        subcategory: 'headings',
        componentPath: heading.getAttribute('data-component-path') || undefined,
        text: heading.textContent || undefined,
        weight: 2,
        score: 0
      });
    }
  }
  
  const totalChecks = 4; // Nombre total de vérifications pour les titres
  const score = calculateLighthouseScore(issues, totalChecks);
  
  return {
    isValid: issues.length === 0,
    issues,
    score,
    categories: {
      seo: score,
      performance: 100,
      accessibility: issues.some(i => i.category === 'accessibility') ? 50 : 100,
      'best-practices': 100
    },
    subcategories: {
      'headings': score
    }
  };
};

/**
 * Valide les méta balises d'une page
 * @param document Le document HTML à analyser
 * @returns Résultat de la validation avec problèmes potentiels
 */
export const validateMetaTags = (document: Document): SEOValidationResult => {
  const issues: SEOIssue[] = [];
  const totalChecks = 7; // Nombre total de vérifications pour les méta-balises
  
  // Vérifier la présence et la longueur de la meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    issues.push({
      type: 'error',
      message: 'Meta description manquante',
      category: 'description',
      subcategory: 'meta-tags',
      weight: 3,
      score: 0
    });
  } else {
    const descriptionContent = metaDescription.getAttribute('content') || '';
    if (descriptionContent.length < 50) {
      issues.push({
        type: 'warning',
        message: 'Meta description trop courte (moins de 50 caractères)',
        category: 'description',
        subcategory: 'meta-tags',
        text: descriptionContent,
        weight: 1,
        score: 50
      });
    } else if (descriptionContent.length > 160) {
      issues.push({
        type: 'warning',
        message: 'Meta description trop longue (plus de 160 caractères)',
        category: 'description',
        subcategory: 'meta-tags',
        text: descriptionContent,
        weight: 1,
        score: 50
      });
    }
  }
  
  // Vérifier la présence et la longueur du title
  const titleTag = document.querySelector('title');
  if (!titleTag) {
    issues.push({
      type: 'error',
      message: 'Balise title manquante',
      category: 'title',
      subcategory: 'meta-tags',
      weight: 3,
      score: 0
    });
  } else {
    const titleContent = titleTag.textContent || '';
    if (titleContent.length < 10) {
      issues.push({
        type: 'warning',
        message: 'Titre trop court (moins de 10 caractères)',
        category: 'title',
        subcategory: 'meta-tags',
        text: titleContent,
        weight: 1,
        score: 50
      });
    } else if (titleContent.length > 70) {
      issues.push({
        type: 'warning',
        message: 'Titre trop long (plus de 70 caractères)',
        category: 'title',
        subcategory: 'meta-tags',
        text: titleContent,
        weight: 1,
        score: 50
      });
    }
  }
  
  const score = calculateLighthouseScore(issues, totalChecks);
  
  return {
    isValid: issues.length === 0,
    issues,
    score,
    categories: {
      seo: score,
      performance: 100,
      accessibility: 100,
      'best-practices': 100
    },
    subcategories: {
      'meta-tags': score
    }
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
      category: 'structure',
      weight: 3,
      score: 0
    });
    return {
      isValid: false,
      issues,
      score: 0,
      categories: {
        seo: 0,
        performance: 0,
        accessibility: 0,
        'best-practices': 0
      },
      subcategories: {}
    };
  }
  
  // Analyser chaque script JSON-LD
  let hasMainEntity = false;
  let hasValidSchema = true;
  
  schemaScripts.forEach((script, index) => {
    try {
      const schemaData = JSON.parse(script.textContent || '{}');
      
      // Vérifier le contexte
      if (!schemaData['@context'] || schemaData['@context'] !== 'https://schema.org') {
        issues.push({
          type: 'error',
          message: `Script JSON-LD #${index + 1} : contexte Schema.org manquant ou incorrect`,
          category: 'structure',
          weight: 1,
          score: 0.5
        });
        hasValidSchema = false;
      }
      
      // Vérifier le type
      if (!schemaData['@type']) {
        issues.push({
          type: 'error',
          message: `Script JSON-LD #${index + 1} : type Schema.org manquant`,
          category: 'structure',
          weight: 1,
          score: 0.5
        });
        hasValidSchema = false;
      }
      
      // Vérifier les entités principales courantes
      if (['Organization', 'LocalBusiness', 'Service', 'WebPage', 'Article'].includes(schemaData['@type'])) {
        hasMainEntity = true;
      }
      
    } catch (error) {
      issues.push({
        type: 'error',
        message: `Script JSON-LD #${index + 1} : erreur de parsing JSON`,
        category: 'structure',
        weight: 1,
        score: 0
      });
      hasValidSchema = false;
    }
  });
  
  if (!hasMainEntity) {
    issues.push({
      type: 'error',
      message: 'Aucune entité principale Schema.org trouvée (Organization, LocalBusiness, Service, etc.)',
      category: 'structure',
      weight: 1,
      score: 0.5
    });
    hasValidSchema = false;
  }
  
  const score = calculateLighthouseScore(issues, 3);
  
  return {
    isValid: hasValidSchema,
    issues,
    score,
    categories: {
      seo: hasValidSchema ? 1 : 0.5,
      performance: 1,
      accessibility: 1,
      'best-practices': 1
    },
    subcategories: {}
  };
};

/**
 * Valide les images de la page
 */
export const validateImages = (document: Document): SEOValidationResult => {
  const issues: SEOIssue[] = [];
  const images = document.querySelectorAll('img');
  const totalChecks = images.length * 3; // 3 vérifications par image
  
  images.forEach((img, index) => {
    // Vérifier l'attribut alt
    if (!img.hasAttribute('alt')) {
      issues.push({
        type: 'error',
        message: `Image #${index + 1} : attribut alt manquant`,
        category: 'images',
        weight: 1,
        score: 0
      });
    }
    
    // Vérifier le lazy loading
    if (!img.hasAttribute('loading')) {
      issues.push({
        type: 'warning',
        message: `Image #${index + 1} : lazy loading non activé`,
        category: 'performance',
        weight: 1,
        score: 50
      });
    }
    
    // Vérifier les dimensions
    if (!img.hasAttribute('width') || !img.hasAttribute('height')) {
      issues.push({
        type: 'warning',
        message: `Image #${index + 1} : dimensions non spécifiées`,
        category: 'performance',
        weight: 1,
        score: 50
      });
    }
  });
  
  const score = calculateLighthouseScore(issues, totalChecks);
  
  return {
    isValid: issues.length === 0,
    issues,
    score,
    categories: {
      seo: 100,
      performance: score,
      accessibility: issues.some(i => i.category === 'images') ? 50 : 100,
      'best-practices': 100
    },
    subcategories: {}
  };
};

/**
 * Valide les performances de la page
 */
export const validatePerformance = (document: Document): SEOValidationResult => {
  const issues: SEOIssue[] = [];
  const totalChecks = 3; // Nombre total de vérifications
  
  // Vérifier les images non optimisées
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    const src = img.getAttribute('src') || '';
    if (src.endsWith('.png') || src.endsWith('.jpg') || src.endsWith('.jpeg')) {
      issues.push({
        type: 'warning',
        message: `Image #${index + 1} : format non optimisé (utilisez WebP)`,
        category: 'performance',
        weight: 1,
        score: 50
      });
    }
  });
  
  // Vérifier les scripts non asynchrones
  const scripts = document.querySelectorAll('script:not([async]):not([defer])');
  scripts.forEach((script, index) => {
    if (!script.hasAttribute('async') && !script.hasAttribute('defer')) {
      issues.push({
        type: 'warning',
        message: `Script #${index + 1} : chargement bloquant (ajoutez async ou defer)`,
        category: 'performance',
        weight: 1,
        score: 50
      });
    }
  });
  
  // Vérifier les polices non optimisées
  const fontLinks = document.querySelectorAll('link[rel="stylesheet"][href*="font"]');
  fontLinks.forEach((link, index) => {
    if (!link.hasAttribute('media') || link.getAttribute('media') !== 'print') {
      issues.push({
        type: 'warning',
        message: `Police #${index + 1} : chargement non optimisé (ajoutez media="print")`,
        category: 'performance',
        weight: 1,
        score: 50
      });
    }
  });
  
  const score = calculateLighthouseScore(issues, totalChecks);
  
  return {
    isValid: issues.length === 0,
    issues,
    score,
    categories: {
      seo: 100,
      performance: score,
      accessibility: 100,
      'best-practices': 100
    },
    subcategories: {}
  };
};

/**
 * Valide l'accessibilité de la page
 */
export const validateAccessibility = (document: Document): SEOValidationResult => {
  const issues: SEOIssue[] = [];
  const totalChecks = 3; // Nombre total de vérifications
  
  // Vérifier les contrastes de couleur
  const elements = document.querySelectorAll('*');
  elements.forEach((element, index) => {
    const style = window.getComputedStyle(element);
    const backgroundColor = style.backgroundColor;
    const color = style.color;
    
    if (element.textContent && element.textContent.trim()) {
      if (backgroundColor === 'transparent' || color === 'transparent') {
        issues.push({
          type: 'warning',
          message: `Élément #${index + 1} : contraste potentiellement insuffisant`,
          category: 'accessibility',
          weight: 1,
          score: 50
        });
      }
    }
  });
  
  // Vérifier les attributs ARIA
  const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
  interactiveElements.forEach((element, index) => {
    if (!element.hasAttribute('aria-label') && !element.hasAttribute('aria-labelledby')) {
      issues.push({
        type: 'warning',
        message: `Élément interactif #${index + 1} : attribut ARIA manquant`,
        category: 'accessibility',
        weight: 1,
        score: 50
      });
    }
  });
  
  // Vérifier les rôles ARIA
  const elementsWithRole = document.querySelectorAll('[role]');
  elementsWithRole.forEach((element, index) => {
    const role = element.getAttribute('role');
    if (!['button', 'link', 'menuitem', 'tab', 'checkbox', 'radio', 'textbox'].includes(role || '')) {
      issues.push({
        type: 'warning',
        message: `Élément #${index + 1} : rôle ARIA non standard (${role})`,
        category: 'accessibility',
        weight: 1,
        score: 50
      });
    }
  });
  
  const score = calculateLighthouseScore(issues, totalChecks);
  
  return {
    isValid: issues.length === 0,
    issues,
    score,
    categories: {
      seo: 100,
      performance: 100,
      accessibility: score,
      'best-practices': 100
    },
    subcategories: {}
  };
};

/**
 * Valide les bonnes pratiques
 */
export const validateBestPractices = (document: Document): SEOValidationResult => {
  const issues: SEOIssue[] = [];
  const totalChecks = 3; // Nombre total de vérifications
  
  // Vérifier les liens externes
  const externalLinks = document.querySelectorAll('a[href^="http"]');
  externalLinks.forEach((link, index) => {
    if (!link.hasAttribute('rel') || !link.getAttribute('rel')?.includes('noopener')) {
      issues.push({
        type: 'warning',
        message: `Lien externe #${index + 1} : attribut rel="noopener" manquant`,
        category: 'best-practices',
        weight: 1,
        score: 50
      });
    }
  });
  
  // Vérifier les formulaires
  const forms = document.querySelectorAll('form');
  forms.forEach((form, index) => {
    if (!form.hasAttribute('action')) {
      issues.push({
        type: 'warning',
        message: `Formulaire #${index + 1} : attribut action manquant`,
        category: 'best-practices',
        weight: 1,
        score: 50
      });
    }
  });
  
  // Vérifier les balises meta viewport
  const viewport = document.querySelector('meta[name="viewport"]');
  if (!viewport) {
    issues.push({
      type: 'error',
      message: 'Balise meta viewport manquante',
      category: 'best-practices',
      weight: 3,
      score: 0
    });
  } else {
    const content = viewport.getAttribute('content') || '';
    if (!content.includes('width=device-width')) {
      issues.push({
        type: 'warning',
        message: 'Meta viewport : width=device-width manquant',
        category: 'best-practices',
        weight: 1,
        score: 50
      });
    }
  }
  
  const score = calculateLighthouseScore(issues, totalChecks);
  
  return {
    isValid: issues.length === 0,
    issues,
    score,
    categories: {
      seo: 100,
      performance: 100,
      accessibility: 100,
      'best-practices': score
    },
    subcategories: {}
  };
};

/**
 * Fonction principale pour valider tous les aspects SEO d'une page
 * @returns Résultat global de la validation SEO
 */
export const validatePageSEO = (): SEOValidationResult => {
  if (typeof document === 'undefined') {
    return { 
      isValid: false, 
      issues: [{
        type: 'error',
        message: 'Document non disponible',
        category: 'structure',
        weight: 3,
        score: 0
      }],
      score: 0,
      categories: {
        seo: 0,
        performance: 0,
        accessibility: 0,
        'best-practices': 0
      },
      subcategories: {}
    };
  }
  
  const headingResults = validateHeadingStructure(document);
  const metaResults = validateMetaTags(document);
  const schemaResults = validateSchemaData(document);
  const imageResults = validateImages(document);
  const performanceResults = validatePerformance(document);
  const accessibilityResults = validateAccessibility(document);
  const bestPracticesResults = validateBestPractices(document);
  
  const allIssues = deduplicateIssues([
    ...headingResults.issues,
    ...metaResults.issues,
    ...schemaResults.issues,
    ...imageResults.issues,
    ...performanceResults.issues,
    ...accessibilityResults.issues,
    ...bestPracticesResults.issues
  ]);
  
  // Calculer les scores par catégorie
  const seoIssues = allIssues.filter(issue => 
    ['title', 'description', 'content', 'structure'].includes(issue.category)
  );
  const performanceIssues = allIssues.filter(issue => 
    ['performance', 'images'].includes(issue.category)
  );
  const accessibilityIssues = allIssues.filter(issue => 
    ['accessibility'].includes(issue.category)
  );
  const bestPracticesIssues = allIssues.filter(issue => 
    ['best-practices'].includes(issue.category)
  );
  
  // Calculer les scores par catégorie avec le bon nombre de vérifications
  const seoScore = calculateLighthouseScore(seoIssues, 12); // 12 vérifications SEO
  const performanceScore = calculateLighthouseScore(performanceIssues, 10); // 10 vérifications performance
  const accessibilityScore = calculateLighthouseScore(accessibilityIssues, 8); // 8 vérifications accessibilité
  const bestPracticesScore = calculateLighthouseScore(bestPracticesIssues, 9); // 9 vérifications bonnes pratiques
  
  // Calculer le score global (moyenne pondérée des scores par catégorie)
  const weights = {
    seo: 0.3,
    performance: 0.3,
    accessibility: 0.2,
    'best-practices': 0.2
  };
  
  const averageScore = Math.round(
    seoScore * weights.seo +
    performanceScore * weights.performance +
    accessibilityScore * weights.accessibility +
    bestPracticesScore * weights['best-practices']
  );
  
  // Calculer les scores par sous-catégorie
  const subcategories: { [key: string]: number } = {};
  const subcategoryIssues: { [key: string]: SEOIssue[] } = {};
  
  allIssues.forEach(issue => {
    if (issue.subcategory) {
      if (!subcategoryIssues[issue.subcategory]) {
        subcategoryIssues[issue.subcategory] = [];
      }
      subcategoryIssues[issue.subcategory].push(issue);
    }
  });
  
  Object.entries(subcategoryIssues).forEach(([subcategory, issues]) => {
    const totalChecks = issues.length * 2; // Nombre de vérifications par sous-catégorie
    subcategories[subcategory] = calculateLighthouseScore(issues, totalChecks);
  });
  
  return {
    isValid: allIssues.length === 0,
    issues: allIssues,
    score: averageScore,
    categories: {
      seo: seoScore,
      performance: performanceScore,
      accessibility: accessibilityScore,
      'best-practices': bestPracticesScore
    },
    subcategories
  };
};
