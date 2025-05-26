// Génération automatique du sitemap XML pour Progineer
import fs from 'fs';
import path from 'path';
import { generateDefaultSitemap } from '../src/utils/sitemapGenerator.js';

const sitemapXml = generateDefaultSitemap();
const outputPath = path.resolve('public', 'sitemap.xml');

fs.writeFileSync(outputPath, sitemapXml, 'utf8');
console.log(`Sitemap généré et écrit dans ${outputPath}`); 