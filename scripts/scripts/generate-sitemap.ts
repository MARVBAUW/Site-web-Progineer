// Génération automatique du sitemap XML pour Progineer (toutes URLs)
import fs from 'fs';
import path from 'path';
// @ts-ignore
import { allRegulations } from '../../build-sitemap-tmp/src/data/regulation/regulationData.js';
// @ts-ignore
import { allCalculators } from '../../build-sitemap-tmp/src/data/calculators/calculatorsData.js';
// @ts-ignore
import { allGuides } from '../../build-sitemap-tmp/src/data/guides/guidesData.js';

// Pages statiques (à adapter si besoin)
const staticPages = [
  '/',
  '/Prestations',
  '/Workspace',
  '/Equipe',
  '/Sitemap',
  '/RealisationsArchitecturales',
  '/Realisations',
  '/Parrainage',
  '/NotFound',
  '/DevenirPartenaire',
  '/WorkspaceNew',
  '/SitemapXML',
  '/Partenaires',
  '/PrivacyPolicy',
  '/Legal',
  '/FAQ',
  '/Estimation',
  '/CGV',
  '/Contact',
  '/CGU',
  '/About',
  // Prestations
  '/prestations/MontageAdministratif',
  '/prestations/PetitCollectif',
  '/prestations/OptimisationEspace',
  '/prestations/DesignInterieur',
  '/prestations/ConstructionNeuve',
  '/prestations/Extension',
  '/prestations/Renovation',
  '/prestations/Rehabilitation',
  '/prestations/ConstructionEcologique',
  // Client
  '/client/SignIn',
  '/client/EstimationTravaux',
  '/client/DevisHonoraires',
  '/client/ClientProjects',
  '/client/ClientPlanning',
  '/client/ClientOnboarding',
  '/client/ClientMessages',
  '/client/ClientDocuments',
  '/client/ClientDocumentation',
  '/client/ClientBudget',
  '/client/ClientArea',
  '/client/AdminSettings',
  '/client/AdminProjectsOverview',
  '/client/AdminProjects',
  '/client/AdminProjectEdit',
  '/client/AdminProjectDetail',
  '/client/AdminProjectCreation',
  '/client/AdminPartners',
  '/client/AdminNotifications',
  '/client/AdminDocuments',
  '/client/AdminClients',
  '/client/AdminClientDetail',
  '/client/AdminAssignClient',
  '/client/SignUp',
  '/client/ClientProfile',
  '/client/ClientSettings',
  // Landing pages guides/documents
  '/workspace/resources/guides/guide-renovation-energetique',
  '/workspace/resources/guides/normes-parasismiques',
  '/workspace/resources/documents/liste-dtu-batiment',
  '/workspace/resources/documents/texte-integral-reglementation',
];

// URLs dynamiques réglementation
const regulationUrls = allRegulations.map((r: any) => `/workspace/regulation/${r.id}`);
// URLs dynamiques calculateurs
const calculatorUrls = allCalculators.map((c: any) => `/workspace/calculators/${c.id}`);
// URLs dynamiques guides
const guideUrls = allGuides.map((g: any) => `/workspace/guides/${g.id}`);

const allUrls = [...staticPages, ...regulationUrls, ...calculatorUrls, ...guideUrls];

const baseUrl = 'https://progineer.fr';
const today = new Date().toISOString().split('T')[0];

function generateSitemapXml(urls: string[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url>\n    <loc>${baseUrl}${url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`).join('\n')}\n</urlset>`;
}

try {
  const sitemapXml = generateSitemapXml(allUrls);
  const outputPath = path.resolve('public', 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemapXml, 'utf8');
  console.log(`Sitemap généré avec ${allUrls.length} URLs et écrit dans ${outputPath}`);
} catch (e) {
  console.error('Erreur lors de la génération du sitemap:', e);
  process.exit(1);
} 