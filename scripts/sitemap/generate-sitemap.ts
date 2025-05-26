// Génération automatique du sitemap XML pour Progineer (TypeScript)
import fs from 'fs';
import path from 'path';
// @ts-ignore
import { sitemapGenerator } from './sitemapGenerator.js';

const sitemapXml = sitemapGenerator.generateSitemapXML();
const outputPath = path.resolve('public', 'sitemap.xml');

fs.writeFileSync(outputPath, sitemapXml, 'utf8');
console.log(`Sitemap généré et écrit dans ${outputPath}`); 