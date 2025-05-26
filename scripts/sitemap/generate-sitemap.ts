// Génération automatique du sitemap XML pour Progineer (TypeScript)
import * as fs from 'fs';
import * as path from 'path';
// @ts-ignore
import { sitemapGenerator } from './src/utils/sitemapGenerator.js';

const sitemapXml = sitemapGenerator.generateSitemapXML();
const outputPath = path.resolve('public', 'sitemap.xml');

// Écriture sans BOM
fs.writeFileSync(outputPath, Buffer.from(sitemapXml, 'utf8'));
console.log(`Sitemap généré et écrit dans ${outputPath}`); 