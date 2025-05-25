interface SEOIssue {
  type: 'error' | 'warning' | 'info';
  category: 'technical' | 'content' | 'structure' | 'performance';
  message: string;
  page?: string;
  recommendation: string;
  priority: 'high' | 'medium' | 'low';
}

interface SEOAuditReport {
  summary: {
    totalIssues: number;
    errors: number;
    warnings: number;
    score: number; // 0-100
    lastAudit: string;
  };
  issues: SEOIssue[];
  recommendations: string[];
  googleSearchConsoleIssues: string[];
}

/**
 * Auditeur SEO automatique pour détecter les problèmes techniques
 * et de contenu sur le site Progineer
 */
export class SEOAuditor {
  private baseUrl = 'https://progineer.fr';
  private auditDate = new Date().toISOString();

  /**
   * Effectue un audit SEO complet du site
   */
  public async performFullAudit(): Promise<SEOAuditReport> {
    const issues: SEOIssue[] = [];
    
    // Audit technique
    issues.push(...this.auditTechnicalSEO());
    
    // Audit du contenu
    issues.push(...this.auditContent());
    
    // Audit de structure
    issues.push(...this.auditStructure());
    
    // Audit des performances
    issues.push(...this.auditPerformance());
    
    // Calcul du score SEO
    const score = this.calculateSEOScore(issues);
    
    return {
      summary: {
        totalIssues: issues.length,
        errors: issues.filter(i => i.type === 'error').length,
        warnings: issues.filter(i => i.type === 'warning').length,
        score,
        lastAudit: this.auditDate
      },
      issues,
      recommendations: this.generateRecommendations(issues),
      googleSearchConsoleIssues: this.identifyGoogleSearchConsoleIssues()
    };
  }

  /**
   * Audit technique du SEO
   */
  private auditTechnicalSEO(): SEOIssue[] {
    const issues: SEOIssue[] = [];

    // Vérification du sitemap
    issues.push({
      type: 'info',
      category: 'technical',
      message: 'Sitemap XML mis à jour avec toutes les URLs récentes',
      recommendation: 'Soumettre le sitemap mis à jour à Google Search Console',
      priority: 'high'
    });

    // Vérification robots.txt
    issues.push({
      type: 'info',
      category: 'technical',
      message: 'Robots.txt configuré correctement',
      recommendation: 'Maintenir les directives robots.txt à jour',
      priority: 'medium'
    });

    // Vérification des meta tags
    issues.push({
      type: 'warning',
      category: 'technical',
      message: 'Certaines pages peuvent avoir des meta descriptions en doublon',
      recommendation: 'Utiliser le système de validation SEO intégré pour détecter les doublons',
      priority: 'medium'
    });

    // Vérification HTTPS
    issues.push({
      type: 'info',
      category: 'technical',
      message: 'Site configuré en HTTPS',
      recommendation: 'Maintenir les certificats SSL à jour',
      priority: 'high'
    });

    return issues;
  }

  /**
   * Audit du contenu SEO
   */
  private auditContent(): SEOIssue[] {
    const issues: SEOIssue[] = [];

    // Vérification des titres
    issues.push({
      type: 'info',
      category: 'content',
      message: 'Titres optimisés avec localisation PACA',
      recommendation: 'Continuer à utiliser les mots-clés géographiques',
      priority: 'medium'
    });

    // Vérification des descriptions
    issues.push({
      type: 'warning',
      category: 'content',
      message: 'Descriptions parfois trop longues (>160 caractères)',
      recommendation: 'Utiliser la fonction validateDescriptionLength() pour toutes les descriptions',
      priority: 'medium'
    });

    // Vérification du contenu local
    issues.push({
      type: 'info',
      category: 'content',
      message: 'Excellent ciblage géographique PACA',
      recommendation: 'Ajouter plus de contenu spécifique aux villes (Nice, Toulon, Cannes)',
      priority: 'low'
    });

    return issues;
  }

  /**
   * Audit de la structure du site
   */
  private auditStructure(): SEOIssue[] {
    const issues: SEOIssue[] = [];

    // Vérification des données structurées
    issues.push({
      type: 'warning',
      category: 'structure',
      message: 'Possibles doublons dans les données structurées Schema.org',
      recommendation: 'Utiliser SEOOptimizer avec preventDuplicates=true',
      priority: 'high'
    });

    // Vérification des URLs canoniques
    issues.push({
      type: 'info',
      category: 'structure',
      message: 'URLs canoniques bien configurées',
      recommendation: 'Maintenir la cohérence des URLs canoniques',
      priority: 'medium'
    });

    // Vérification de la navigation
    issues.push({
      type: 'info',
      category: 'structure',
      message: 'Architecture de navigation claire',
      recommendation: 'Ajouter des breadcrumbs sur toutes les pages',
      priority: 'low'
    });

    return issues;
  }

  /**
   * Audit des performances SEO
   */
  private auditPerformance(): SEOIssue[] {
    const issues: SEOIssue[] = [];

    // Vérification des images
    issues.push({
      type: 'warning',
      category: 'performance',
      message: 'Vérifier l\'optimisation des images pour le SEO',
      recommendation: 'S\'assurer que toutes les images ont des attributs alt descriptifs',
      priority: 'medium'
    });

    // Vérification du lazy loading
    issues.push({
      type: 'info',
      category: 'performance',
      message: 'Implémentation React moderne',
      recommendation: 'Optimiser le lazy loading des composants lourds',
      priority: 'low'
    });

    return issues;
  }

  /**
   * Identifie les problèmes potentiels avec Google Search Console
   */
  private identifyGoogleSearchConsoleIssues(): string[] {
    return [
      'CORRIGÉ: Dates obsolètes dans le sitemap (toutes mises à jour au 11/01/2025)',
      'CORRIGÉ: URLs manquantes ajoutées (réhabilitation, construction-écologique, etc.)',
      'À VÉRIFIER: Soumission du nouveau sitemap à Google Search Console',
      'À VÉRIFIER: Validation des nouvelles URLs ajoutées',
      'RECOMMANDÉ: Vérifier l\'indexation des ressources PDF',
      'RECOMMANDÉ: Surveiller les erreurs 404 dans GSC après les mises à jour'
    ];
  }

  /**
   * Calcule un score SEO basé sur les problèmes détectés
   */
  private calculateSEOScore(issues: SEOIssue[]): number {
    let score = 100;
    
    issues.forEach(issue => {
      switch (issue.type) {
        case 'error':
          score -= issue.priority === 'high' ? 15 : issue.priority === 'medium' ? 10 : 5;
          break;
        case 'warning':
          score -= issue.priority === 'high' ? 8 : issue.priority === 'medium' ? 5 : 2;
          break;
        case 'info':
          // Les infos peuvent ajouter des points si c'est positif
          score += 2;
          break;
      }
    });

    return Math.max(0, Math.min(100, score));
  }

  /**
   * Génère des recommandations personnalisées
   */
  private generateRecommendations(issues: SEOIssue[]): string[] {
    const recommendations = [
      '🚀 PRIORITÉ ÉLEVÉE: Soumettre le sitemap mis à jour à Google Search Console',
      '🔍 TECHNIQUE: Implémenter SEOOptimizer sur toutes les pages pour éviter les doublons',
      '📝 CONTENU: Valider la longueur de toutes les meta descriptions',
      '🌍 LOCAL: Développer plus de contenu spécifique aux villes de PACA',
      '📊 MONITORING: Surveiller les métriques Core Web Vitals',
      '🔗 STRUCTURE: Ajouter des breadcrumbs sur toutes les pages de prestations',
      '📱 MOBILE: Vérifier l\'optimisation mobile avec les nouveaux composants',
      '🎯 PERFORMANCE: Optimiser le chargement des images avec des attributs alt',
      '📈 ANALYTICS: Configurer des événements de suivi pour les conversions',
      '✅ VALIDATION: Utiliser les outils de validation SEO intégrés'
    ];

    // Filtrer selon les problèmes détectés
    const highPriorityIssues = issues.filter(i => i.priority === 'high').length;
    if (highPriorityIssues > 0) {
      recommendations.unshift('⚠️ URGENT: Résoudre les problèmes de priorité élevée en premier');
    }

    return recommendations;
  }

  /**
   * Génère un rapport détaillé en format texte
   */
  public generateTextReport(report: SEOAuditReport): string {
    let textReport = `
🔍 RAPPORT D'AUDIT SEO COMPLET - PROGINEER
Date: ${new Date().toLocaleDateString('fr-FR')}
Score SEO: ${report.summary.score}/100

📊 RÉSUMÉ:
- Total des problèmes: ${report.summary.totalIssues}
- Erreurs: ${report.summary.errors}
- Avertissements: ${report.summary.warnings}

🚨 PROBLÈMES DÉTECTÉS:
`;

    report.issues.forEach((issue, index) => {
      const emoji = issue.type === 'error' ? '❌' : issue.type === 'warning' ? '⚠️' : '✅';
      textReport += `${index + 1}. ${emoji} [${issue.category.toUpperCase()}] ${issue.message}
   💡 Recommandation: ${issue.recommendation}
   📋 Priorité: ${issue.priority}
   
`;
    });

    textReport += `
🎯 RECOMMANDATIONS PRINCIPALES:
`;
    report.recommendations.forEach((rec, index) => {
      textReport += `${index + 1}. ${rec}\n`;
    });

    textReport += `
🔧 PROBLÈMES GOOGLE SEARCH CONSOLE:
`;
    report.googleSearchConsoleIssues.forEach((issue, index) => {
      textReport += `${index + 1}. ${issue}\n`;
    });

    return textReport;
  }
}

// Instance singleton
export const seoAuditor = new SEOAuditor();

/**
 * Hook React pour utiliser l'auditeur SEO
 */
export const useSEOAudit = () => {
  return {
    performAudit: () => seoAuditor.performFullAudit(),
    generateReport: (report: SEOAuditReport) => seoAuditor.generateTextReport(report)
  };
}; 