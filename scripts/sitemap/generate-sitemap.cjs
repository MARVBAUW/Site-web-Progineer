// Générateur de sitemap XML Progineer - Node.js pur
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://progineer.fr';
const TODAY = new Date().toISOString().split('T')[0];

// 1. Pages statiques (hors /client, /admin, _app, _document, 404)
function getStaticPages() {
  const pagesDir = path.resolve(__dirname, '../../src/pages');
  function walk(dir, prefix = '') {
    let results = [];
    fs.readdirSync(dir).forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        results = results.concat(walk(filePath, prefix + '/' + file));
      } else if (file.endsWith('.tsx') || file.endsWith('.js')) {
        const route = prefix + '/' + file.replace(/\.(tsx|js)$/, '');
        if (!route.startsWith('/client') && !route.startsWith('/admin') && !['_app','_document','404'].includes(route.replace(/^\//,''))) {
          results.push(route === '/Index' ? '/' : route);
        }
      }
    });
    return results;
  }
  return walk(pagesDir);
}

// 2. Guides dynamiques (extraction regex)
function getGuides() {
  const file = path.resolve(__dirname, '../../src/components/workspace/guides/guidesData.ts');
  if (!fs.existsSync(file)) return [];
  const content = fs.readFileSync(file, 'utf-8');
  const regex = /id:\s*['"]([a-zA-Z0-9\-_]+)['"]/g;
  let match, ids = [];
  while ((match = regex.exec(content)) !== null) {
    ids.push(`/workspace/guides/${match[1]}`);
  }
  return Array.from(new Set(ids));
}

// 3. Réglementations dynamiques (isPublic)
function getRegulations() {
  const file = path.resolve(__dirname, '../../src/data/regulation/regulationData.ts');
  if (!fs.existsSync(file)) return [];
  const content = fs.readFileSync(file, 'utf-8');
  const regex = /{[^}]*id:\s*['"]([a-zA-Z0-9\-_]+)['"][^}]*isPublic:\s*true[^}]*}/g;
  let match, ids = [];
  while ((match = regex.exec(content)) !== null) {
    ids.push(`/workspace/regulation/${match[1]}`);
  }
  return Array.from(new Set(ids));
}

// 4. Veille (extraction regex)
function getVeille() {
  const file = path.resolve(__dirname, '../../src/data/veille/veilleData.ts');
  if (!fs.existsSync(file)) return [];
  const content = fs.readFileSync(file, 'utf-8');
  const regex = /id:\s*['"]([a-zA-Z0-9\-_]+)['"]/g;
  let match, ids = [];
  while ((match = regex.exec(content)) !== null) {
    ids.push(`/workspace/veille/${match[1]}`);
  }
  return Array.from(new Set(ids));
}

// 5. Calculateurs dynamiques (hors index et comingSoon)
function getCalculators() {
  const calculatorsDir = path.resolve(__dirname, '../../src/components/workspace/calculators');
  let urls = [];
  function walk(dir, prefix = '/workspace/calculators') {
    fs.readdirSync(dir).forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        walk(filePath, prefix + '/' + file);
      } else if ((file.endsWith('.tsx') || file.endsWith('.js')) && file !== 'index.tsx') {
        const slug = file.replace(/\.(tsx|js)$/, '');
        const content = fs.readFileSync(filePath, 'utf-8');
        if (!/comingSoon\s*[:=]\s*true/.test(content)) {
          urls.push(prefix + '/' + slug);
        }
      }
    });
  }
  if (fs.existsSync(calculatorsDir)) walk(calculatorsDir);
  return Array.from(new Set(urls));
}

// 6. PDF publics
function getPDFs() {
  const resourcesDir = path.resolve('public/resources');
  let pdfs = [];
  function walk(dir, prefix = '/resources') {
    if (!fs.existsSync(dir)) return [];
    fs.readdirSync(dir).forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        pdfs = pdfs.concat(walk(filePath, prefix + '/' + file));
      } else if (file.endsWith('.pdf')) {
        pdfs.push(prefix + '/' + file);
      }
    });
    return pdfs;
  }
  return walk(resourcesDir);
}

// 7. Liens du footer
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

// 8. Regroupement, exclusion, déduplication
function buildAllUrls() {
  let all = [
    ...getStaticPages(),
    ...getGuides(),
    ...getRegulations(),
    ...getVeille(),
    ...getCalculators(),
    ...getPDFs(),
    ...footerLinks
  ];
  all = all.filter(url => !url.startsWith('/client') && !url.startsWith('/admin'));
  return Array.from(new Set(all));
}

// Fonction de mapping des priorités
function getPriority(url) {
  if (url === '/') return 1.0;
  if (/^\/(equipe-maitrise-oeuvre|prestations-maitre-oeuvre(\/|$)|realisations-architecte-maison|contact|estimation|faq|parrainage|devenir-partenaire)/i.test(url)) return 0.9;
  if (/^\/(workspace|workspace\/guides|workspace\/regulation|workspace\/veille)/i.test(url)) return 0.8;
  if (/^\/workspace\/calculators|\.pdf$/.test(url)) return 0.7;
  if (/(mentions-legales|privacy-policy|cgu|cgv|sitemap)/i.test(url)) return 0.5;
  return 0.6;
}

// 9. Génération du XML
function buildSitemapXml(urls) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="sitemap.xsl"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  urls.forEach(url => {
    xml += `\n  <url>\n    <loc>${BASE_URL}${url}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${getPriority(url)}</priority>\n  </url>`;
  });
  xml += '\n</urlset>';
  return xml;
}

// 10. Exécution
let urls = buildAllUrls();
urls = urls.sort((a, b) => getPriority(b) - getPriority(a));
const xml = buildSitemapXml(urls);
const outputPath = path.resolve('public', 'sitemap.xml');
fs.writeFileSync(outputPath, Buffer.from(xml, 'utf8'));

console.log('Sitemap généré avec succès !');
console.log('Pages statiques :', getStaticPages().length);
console.log('Guides :', getGuides().length);
console.log('Réglementations :', getRegulations().length);
console.log('Veille :', getVeille().length);
console.log('Calculateurs :', getCalculators().length);
console.log('PDF publics :', getPDFs().length);
console.log('Liens footer :', footerLinks.length);
console.log('Total unique :', urls.length); 