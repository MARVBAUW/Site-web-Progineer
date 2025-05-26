/**
 * Générateur automatique de sitemap pour maintenir la cohérence
 * et éviter les erreurs manuelles dans Google Search Console
 */
import * as fs from 'fs';
import * as path from 'path';
// Importer les données dynamiques (corrigé)
import { guides } from '../../../../src/components/workspace/guides/guidesData';
import { allRegulations } from '../../../../src/data/regulation/regulationData';
import veilleArticles from '../../../../src/data/veille/veilleData';

// Correction du chemin des pages statiques
const staticPagesDir = path.resolve(__dirname, '../../../../src/pages');

// Fonction pour parcourir dynamiquement tous les calculateurs
function getAllCalculators() {
    const calculatorsDir = path.resolve(__dirname, '../../../../components/workspace/calculators');
    let urls = [];
    function walk(dir, prefix = '/workspace/calculators') {
        fs.readdirSync(dir).forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            if (stat && stat.isDirectory()) {
                walk(filePath, prefix + '/' + file);
            } else if ((file.endsWith('.tsx') || file.endsWith('.js')) && file !== 'index.tsx') {
                const slug = file.replace(/\.(tsx|js)$/, '');
                // Exclure les calculateurs "comingSoon" si flag présent dans le fichier
                const content = fs.readFileSync(filePath, 'utf-8');
                if (!/comingSoon\s*[:=]\s*true/.test(content)) {
                    urls.push(prefix + '/' + slug);
                }
            }
        });
    }
    walk(calculatorsDir);
    return urls;
}

// Fonction pour lister tous les fichiers PDF publics
function getAllPublicPDFs() {
    const resourcesDir = path.resolve('public/resources');
    let pdfs = [];
    function walk(dir, prefix = '/resources') {
        if (!fs.existsSync(dir)) return [];
        fs.readdirSync(dir).forEach(file => {
            const filePath = path.join(dir, file);
            const stat = fs.statSync(filePath);
            if (stat && stat.isDirectory()) {
                pdfs = pdfs.concat(walk(filePath, prefix + '/' + file));
            } else if (file.endsWith('.pdf')) {
                pdfs.push(prefix + '/' + file);
            }
        });
        return pdfs;
    }
    return walk(resourcesDir);
}

// Génération des URLs dynamiques (corrigé)
const calculators = getAllCalculators();
const pdfs = getAllPublicPDFs();

// Liens du footer à inclure explicitement
const footerLinks = [
    '/',
    '/estimation',
    '/prestations-maitre-oeuvre',
    '/realisations-architecte-maison',
    '/equipe-maitrise-oeuvre',
    '/contact',
    '/prestations-maitre-oeuvre/construction-neuve',
    '/prestations-maitre-oeuvre/renovation',
    '/prestations-maitre-oeuvre/extension',
    '/prestations-maitre-oeuvre/optimisation-espace',
    '/prestations-maitre-oeuvre/design-interieur',
    '/sitemap',
    '/mentions-legales',
    '/cgv',
    '/cgu',
    '/privacy-policy',
    '/faq',
    '/devenir-partenaire',
    '/parrainage',
    '/sitemap.xml'
];

// Génération des URLs dynamiques
const regulationUrls = allRegulations.filter(r => r.isPublic).map(r => `/workspace/regulation/${r.id}`);
const guideUrls = guides.map(g => `/workspace/guides/${g.id}`);
const veilleUrls = veilleArticles.map(v => `/workspace/veille/${v.id}`);

// Regroupement et déduplication (corrigé)
let allUrls = [
    ...footerLinks,
    ...regulationUrls,
    ...guideUrls,
    ...veilleUrls,
    ...calculators,
    ...pdfs
];
// Exclusion des routes /client et /admin
allUrls = allUrls.filter(url => !url.startsWith('/client') && !url.startsWith('/admin'));
// Déduplication stricte
allUrls = Array.from(new Set(allUrls));

console.log('Sitemap - Réglementations:', regulationUrls.length);
console.log('Sitemap - Guides:', guideUrls.length);
console.log('Sitemap - Veille:', veilleUrls.length);
console.log('Sitemap - Calculateurs:', calculators.length);
console.log('Sitemap - Liens footer:', footerLinks.length);
console.log('Sitemap - PDF publics:', pdfs.length);
console.log('Sitemap - Total unique:', allUrls.length);

export class SitemapGenerator {
    constructor() {
        this.baseUrl = 'https://progineer.fr';
        this.currentDate = new Date().toISOString().split('T')[0];
    }
    /**
     * Génère toutes les entrées du sitemap de manière structurée
     */
    generateSitemapData() {
        // 1. Pages statiques (hors /client et /admin)
        const staticPages = this.getStaticPages();
        // 2. Guides dynamiques
        const guideUrls = guides.map(g => ({
            url: `/workspace/guides/${g.id}`,
            lastmod: this.currentDate,
            changefreq: 'monthly',
            priority: 0.7
        }));
        // 3. Réglementations dynamiques
        const regulationUrls = allRegulations.filter(r => r.isPublic).map(r => ({
            url: `/workspace/regulation/${r.id}`,
            lastmod: this.currentDate,
            changefreq: 'monthly',
            priority: 0.7
        }));
        // 4. (Optionnel) Calculateurs dynamiques
        // À adapter si vous avez une liste de calculateurs dynamiques
        // const calculatorUrls = calculators.map(c => ({
        //   url: `/workspace/calculators/${c.id}`,
        //   lastmod: this.currentDate,
        //   changefreq: 'monthly',
        //   priority: 0.7
        // }));
        return [
            { title: 'Pages statiques', entries: staticPages },
            { title: 'Guides', entries: guideUrls },
            { title: 'Réglementations', entries: regulationUrls },
            // { title: 'Calculateurs', entries: calculatorUrls },
        ];
    }
    /**
     * Récupère toutes les pages statiques du site (hors /client et /admin)
     */
    getStaticPages() {
        const walk = (dir, prefix = '') => {
            let results = [];
            fs.readdirSync(dir).forEach(file => {
                const filePath = path.join(dir, file);
                const stat = fs.statSync(filePath);
                if (stat && stat.isDirectory()) {
                    results = results.concat(walk(filePath, prefix + '/' + file));
                } else if (file.endsWith('.tsx') || file.endsWith('.js')) {
                    const route = prefix + '/' + file.replace(/\.(tsx|js)$/, '');
                    if (!route.startsWith('/client') && !route.startsWith('/admin') && route !== '/_app' && route !== '/_document' && route !== '/404') {
                        results.push({
                            url: route === '/Index' ? '/' : route,
                            lastmod: this.currentDate,
                            changefreq: 'monthly',
                            priority: 0.6
                        });
                    }
                }
            });
            return results;
        };
        return walk(staticPagesDir);
    }
    /**
     * Génère le XML du sitemap complet
     */
    generateSitemapXML() {
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
    validateUrl(url) {
        // Vérifie les patterns d'URL valides
        const validPatterns = [
            /^\/$/, // Homepage
            /^\/[a-z-]+$/, // Pages simples
            /^\/[a-z-]+\/[a-z-]+$/, // Pages de niveau 2
            /^\/[a-z-]+\/[a-z-]+\/[a-z-]+$/, // Pages de niveau 3
            /^\/resources\/.*\.pdf$/, // Fichiers PDF
            /^\/workspace\/.*$/ // Pages workspace
        ];
        return validPatterns.some(pattern => pattern.test(url));
    }
    /**
     * Génère un rapport de validation du sitemap
     */
    generateValidationReport() {
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
    findDuplicateUrls() {
        const sections = this.generateSitemapData();
        const allUrls = sections.flatMap(section => section.entries.map(entry => entry.url));
        const urlCounts = allUrls.reduce((acc, url) => {
            acc[url] = (acc[url] || 0) + 1;
            return acc;
        }, {});
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
export function generateSitemap(config) {
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
export function getDefaultSitemapConfig() {
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
export function validateSitemapUrl(url) {
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
export function generateDefaultSitemap() {
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
