interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

interface SitemapSection {
  title: string;
  entries: SitemapEntry[];
}

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

interface SitemapConfig {
  baseUrl: string;
  urls: SitemapUrl[];
}

/**
 * Générateur automatique de sitemap pour maintenir la cohérence
 * et éviter les erreurs manuelles dans Google Search Console
 */
export class SitemapGenerator {
  private baseUrl = 'https://progineer.fr';
  private currentDate = new Date().toISOString().split('T')[0];

  /**
   * Génère toutes les entrées du sitemap de manière structurée
   */
  public generateSitemapData(): SitemapSection[] {
    return [
      {
        title: 'Pages principales',
        entries: [
          { url: '/', lastmod: this.currentDate, changefreq: 'monthly', priority: 1.0 },
          { url: '/prestations-maitre-oeuvre', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.9 },
          { url: '/realisations-architecte-maison', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.8 },
          { url: '/realisations-architecturales', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.8 },
          { url: '/equipe-maitrise-oeuvre', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.7 },
          { url: '/estimation', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.9 },
          { url: '/contact', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.8 },
          { url: '/a-propos', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.7 },
          { url: '/sitemap', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.5 },
        ]
      },
      {
        title: 'Pages de prestations principales',
        entries: [
          { url: '/prestations-maitre-oeuvre/construction-neuve', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.8 },
          { url: '/prestations-maitre-oeuvre/renovation', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.8 },
          { url: '/prestations-maitre-oeuvre/extension', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.8 },
          { url: '/prestations-maitre-oeuvre/optimisation-espace', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.7 },
          { url: '/prestations-maitre-oeuvre/design-interieur', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.7 },
          { url: '/prestations-maitre-oeuvre/montage-administratif', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.7 },
          { url: '/prestations-maitre-oeuvre/petit-collectif', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.7 },
          { url: '/prestations-maitre-oeuvre/rehabilitation', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.7 },
          { url: '/prestations-maitre-oeuvre/construction-ecologique', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.7 },
        ]
      },
      {
        title: 'Pages spécifiques villes',
        entries: [
          { url: '/prestations-maitre-oeuvre/construction-neuve/marseille', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.7 },
          { url: '/prestations-maitre-oeuvre/construction-neuve/aix-en-provence', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.7 },
          { url: '/prestations-maitre-oeuvre/renovation/marseille', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.7 },
          { url: '/prestations-maitre-oeuvre/renovation/aix-en-provence', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.7 },
        ]
      },
      {
        title: 'Pages partenariat et parrainage',
        entries: [
          { url: '/parrainage', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.6 },
          { url: '/devenir-partenaire', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.6 },
        ]
      },
      {
        title: 'Pages légales',
        entries: [
          { url: '/mentions-legales', lastmod: this.currentDate, changefreq: 'yearly', priority: 0.4 },
          { url: '/privacy-policy', lastmod: this.currentDate, changefreq: 'yearly', priority: 0.4 },
          { url: '/cgu', lastmod: this.currentDate, changefreq: 'yearly', priority: 0.4 },
          { url: '/cgv', lastmod: this.currentDate, changefreq: 'yearly', priority: 0.4 },
          { url: '/faq', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.6 },
        ]
      },
      {
        title: 'Workspace et ressources',
        entries: [
          { url: '/workspace', lastmod: this.currentDate, changefreq: 'weekly', priority: 0.8 },
          { url: '/workspace/resources/guides/reglementation-complete-batiment', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.7 },
          { url: '/workspace/resources/documents/texte-integral-reglementation', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.7 },
        ]
      },
      {
        title: 'Ressources PDF',
        entries: [
          { url: '/resources/guides/reglementation-complete-batiment.pdf', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.6 },
          { url: '/resources/documents/texte-integral-reglementation.pdf', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.6 },
          { url: '/resources/guides/guide-renovation-energetique.pdf', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.6 },
          { url: '/resources/guides/normes-parasismiques.pdf', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.6 },
          { url: '/resources/documents/liste-dtu-batiment.pdf', lastmod: this.currentDate, changefreq: 'monthly', priority: 0.5 },
        ]
      }
    ];
  }

  /**
   * Génère le XML du sitemap complet
   */
  public generateSitemapXML(): string {
    const sections = this.generateSitemapData();
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    sections.forEach(section => {
      xml += `\n  <!-- ${section.title} -->`;
      section.entries.forEach(entry => {
        xml += `\n  <url>
    <loc>${this.baseUrl}${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`;
      });
      xml += '\n';
    });

    xml += '\n</urlset>';
    return xml;
  }

  /**
   * Valide une URL pour inclusion dans le sitemap
   */
  public validateUrl(url: string): boolean {
    // Vérifie les patterns d'URL valides
    const validPatterns = [
      /^\/$/,  // Homepage
      /^\/[a-z-]+$/,  // Pages simples
      /^\/[a-z-]+\/[a-z-]+$/,  // Pages de niveau 2
      /^\/[a-z-]+\/[a-z-]+\/[a-z-]+$/,  // Pages de niveau 3
      /^\/resources\/.*\.pdf$/,  // Fichiers PDF
      /^\/workspace\/.*$/  // Pages workspace
    ];

    return validPatterns.some(pattern => pattern.test(url));
  }

  /**
   * Génère un rapport de validation du sitemap
   */
  public generateValidationReport(): {
    totalUrls: number;
    validUrls: number;
    invalidUrls: string[];
    lastGenerated: string;
  } {
    const sections = this.generateSitemapData();
    const allUrls = sections.flatMap(section => section.entries.map(entry => entry.url));
    const invalidUrls = allUrls.filter(url => !this.validateUrl(url));

    return {
      totalUrls: allUrls.length,
      validUrls: allUrls.length - invalidUrls.length,
      invalidUrls,
      lastGenerated: this.currentDate
    };
  }

  /**
   * Détecte les URLs en doublon
   */
  public findDuplicateUrls(): string[] {
    const sections = this.generateSitemapData();
    const allUrls = sections.flatMap(section => section.entries.map(entry => entry.url));
    const urlCounts = allUrls.reduce((acc, url) => {
      acc[url] = (acc[url] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.keys(urlCounts).filter(url => urlCounts[url] > 1);
  }
}

// Instance singleton
export const sitemapGenerator = new SitemapGenerator();

/**
 * Hook pour utiliser le générateur de sitemap dans les composants React
 */
export const useSitemapGenerator = () => {
  return {
    generateXML: () => sitemapGenerator.generateSitemapXML(),
    validate: () => sitemapGenerator.generateValidationReport(),
    findDuplicates: () => sitemapGenerator.findDuplicateUrls(),
    updateDate: new Date().toISOString().split('T')[0]
  };
};

/**
 * Génère un sitemap XML conforme aux standards
 */
export function generateSitemap(config: SitemapConfig): string {
  const { baseUrl, urls } = config;
  
  const urlEntries = urls.map(url => {
    const fullUrl = url.loc.startsWith('http') ? url.loc : `${baseUrl}${url.loc}`;
    
    return `  <url>
    <loc>${fullUrl}</loc>${url.lastmod ? `
    <lastmod>${url.lastmod}</lastmod>` : ''}${url.changefreq ? `
    <changefreq>${url.changefreq}</changefreq>` : ''}${url.priority !== undefined ? `
    <priority>${url.priority}</priority>` : ''}
  </url>`;
  }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

/**
 * Configuration par défaut du sitemap pour Progineer
 */
export function getDefaultSitemapConfig(): SitemapConfig {
  const baseUrl = 'https://progineer.fr';
  const today = new Date().toISOString().split('T')[0];
  
  return {
    baseUrl,
    urls: [
      // Pages principales
      {
        loc: '/',
        lastmod: today,
        changefreq: 'monthly',
        priority: 1.0
      },
      {
        loc: '/prestations-maitre-oeuvre',
        lastmod: today,
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        loc: '/realisations-architecte-maison',
        lastmod: today,
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/estimation',
        lastmod: today,
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        loc: '/contact',
        lastmod: today,
        changefreq: 'monthly',
        priority: 0.8
      },
      
      // Pages de prestations
      {
        loc: '/prestations-maitre-oeuvre/construction-neuve',
        lastmod: today,
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/prestations-maitre-oeuvre/renovation',
        lastmod: today,
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/prestations-maitre-oeuvre/extension',
        lastmod: today,
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        loc: '/prestations-maitre-oeuvre/design-interieur',
        lastmod: today,
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        loc: '/prestations-maitre-oeuvre/optimisation-espace',
        lastmod: today,
        changefreq: 'monthly',
        priority: 0.7
      },
      
      // Pages légales
      {
        loc: '/mentions-legales',
        lastmod: today,
        changefreq: 'yearly',
        priority: 0.4
      },
      {
        loc: '/privacy-policy',
        lastmod: today,
        changefreq: 'yearly',
        priority: 0.4
      },
      {
        loc: '/cgu',
        lastmod: today,
        changefreq: 'yearly',
        priority: 0.4
      },
      {
        loc: '/cgv',
        lastmod: today,
        changefreq: 'yearly',
        priority: 0.4
      },
      {
        loc: '/faq',
        lastmod: today,
        changefreq: 'monthly',
        priority: 0.6
      },
      
      // Autres pages importantes
      {
        loc: '/equipe-maitrise-oeuvre',
        lastmod: today,
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        loc: '/parrainage',
        lastmod: today,
        changefreq: 'monthly',
        priority: 0.6
      },
      {
        loc: '/devenir-partenaire',
        lastmod: today,
        changefreq: 'monthly',
        priority: 0.6
      }
    ]
  };
}

/**
 * Valide une URL de sitemap
 */
export function validateSitemapUrl(url: SitemapUrl): boolean {
  // Vérifier que l'URL est valide
  if (!url.loc || url.loc.trim() === '') {
    return false;
  }
  
  // Vérifier la priorité
  if (url.priority !== undefined && (url.priority < 0 || url.priority > 1)) {
    return false;
  }
  
  // Vérifier la date de modification
  if (url.lastmod && !/^\d{4}-\d{2}-\d{2}$/.test(url.lastmod)) {
    return false;
  }
  
  return true;
}

/**
 * Génère le sitemap par défaut pour Progineer
 */
export function generateDefaultSitemap(): string {
  const config = getDefaultSitemapConfig();
  
  // Valider toutes les URLs
  const validUrls = config.urls.filter(validateSitemapUrl);
  
  if (validUrls.length !== config.urls.length) {
    console.warn('Certaines URLs du sitemap sont invalides et ont été exclues');
  }
  
  return generateSitemap({
    ...config,
    urls: validUrls
  });
} 