import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class LinkChecker {
  constructor(config) {
    this.config = {
      baseUrl: 'https://progineer.fr',
      excludePatterns: ['node_modules', 'dist', 'build'],
      alertThreshold: 5,
      checkInterval: 24 * 60 * 60 * 1000,
      ignorePatterns: ['mailto:', 'tel:', 'javascript:', '#', 'data:'],
      ...config
    };
    this.checkedUrls = new Set();
    this.results = [];
  }

  async checkAllLinks() {
    console.log('Starting link check...');
    this.checkedUrls.clear();
    this.results = [];

    const files = await this.getAllFiles();
    console.log(`Found ${files.length} files to check`);

    for (const file of files) {
      await this.checkFile(file);
    }

    return this.generateReport();
  }

  async getAllFiles() {
    const patterns = [
      'src/**/*.{ts,tsx,js,jsx}',
      'public/**/*.{html,css}'
    ];

    const files = await Promise.all(
      patterns.map(pattern => glob(pattern, { ignore: this.config.excludePatterns }))
    );

    return files.flat();
  }

  async checkFile(filePath) {
    try {
      const content = await readFile(filePath, 'utf-8');
      const links = this.extractLinks(content);
      
      for (const link of links) {
        await this.checkLink(link, filePath);
      }
    } catch (error) {
      console.error(`Error checking file ${filePath}:`, error);
    }
  }

  extractLinks(content) {
    const linkPatterns = [
      // Patterns HTML standards
      /href=["']([^"']+)["']/g,
      /to=["']([^"']+)["']/g,
      /path=["']([^"']+)["']/g,
      /url=["']([^"']+)["']/g,
      // Patterns React spécifiques
      /to={["']([^"']+)["']}/g,
      /href={["']([^"']+)["']}/g,
      /path={["']([^"']+)["']}/g,
      /url={["']([^"']+)["']}/g,
      // Patterns avec template literals
      /to={`([^`]+)`}/g,
      /href={`([^`]+)`}/g,
      /path={`([^`]+)`}/g,
      /url={`([^`]+)`}/g,
      // Patterns avec variables
      /to={([^}]+)}/g,
      /href={([^}]+)}/g,
      /path={([^}]+)}/g,
      /url={([^}]+)}/g
    ];

    const links = new Set();

    for (const pattern of linkPatterns) {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const url = match[1];
        if (url && !url.startsWith('#') && !this.config.ignorePatterns.some(pattern => url.includes(pattern))) {
          // Nettoyer l'URL des variables et expressions
          const cleanUrl = url
            .replace(/\${[^}]+}/g, '') // Supprimer les expressions ${...}
            .replace(/[`'"]/g, '') // Supprimer les backticks et guillemets
            .trim();
          
          if (cleanUrl) {
            links.add(cleanUrl);
          }
        }
      }
    }

    return Array.from(links);
  }

  async checkLink(url, source) {
    if (this.checkedUrls.has(url)) return;
    this.checkedUrls.add(url);

    const isInternal = url.startsWith('/') || url.startsWith(this.config.baseUrl);
    const fullUrl = isInternal && url.startsWith('/') 
      ? `${this.config.baseUrl}${url}`
      : url;

    try {
      const result = await this.checkUrl(fullUrl, isInternal, source);
      this.results.push(result);
    } catch (error) {
      console.error(`Error checking link ${url}:`, error);
    }
  }

  async checkUrl(url, isInternal, source) {
    try {
      const response = await axios.head(url, {
        timeout: 5000,
        validateStatus: null
      });

      return {
        url,
        status: response.status,
        isInternal,
        is404: response.status === 404,
        lastChecked: new Date(),
        source: {
          file: source,
          line: this.findLineNumber(source, url)
        }
      };
    } catch (error) {
      return {
        url,
        status: error.response?.status || 0,
        isInternal,
        is404: true,
        lastChecked: new Date(),
        source: {
          file: source,
          line: this.findLineNumber(source, url)
        }
      };
    }
  }

  findLineNumber(filePath, url) {
    // Implémentation basique - à améliorer
    return 0;
  }

  generateReport() {
    const brokenLinks = this.results.filter(r => r.is404);
    const internalLinks = this.results.filter(r => r.isInternal);
    const externalLinks = this.results.filter(r => !r.isInternal);
    const brokenInternalLinks = brokenLinks.filter(r => r.isInternal);
    const brokenExternalLinks = brokenLinks.filter(r => !r.isInternal);

    return {
      timestamp: new Date(),
      totalLinks: this.results.length,
      brokenLinks: brokenLinks.length,
      results: this.results,
      summary: {
        internalLinks: internalLinks.length,
        externalLinks: externalLinks.length,
        brokenInternalLinks: brokenInternalLinks.length,
        brokenExternalLinks: brokenExternalLinks.length
      }
    };
  }
}

async function main() {
  try {
    // Charger la configuration
    const configPath = path.join(process.cwd(), 'config', 'link-checker.json');
    const configContent = await readFile(configPath, 'utf-8');
    const config = JSON.parse(configContent);

    // Initialiser le vérificateur de liens
    const checker = new LinkChecker(config);

    // Lancer la vérification
    console.log('Démarrage de la vérification des liens...');
    const report = await checker.checkAllLinks();

    // Sauvegarder le rapport
    const reportPath = path.join(process.cwd(), 'link-check-report.json');
    await writeFile(reportPath, JSON.stringify(report, null, 2));

    // Afficher le résumé
    console.log('\nRésumé de la vérification :');
    console.log('------------------------');
    console.log(`Total des liens : ${report.totalLinks}`);
    console.log(`Liens brisés : ${report.brokenLinks}`);
    console.log(`Liens internes : ${report.summary.internalLinks}`);
    console.log(`Liens externes : ${report.summary.externalLinks}`);
    console.log(`Liens internes brisés : ${report.summary.brokenInternalLinks}`);
    console.log(`Liens externes brisés : ${report.summary.brokenExternalLinks}`);

    if (report.brokenLinks > 0) {
      console.log('\nLiens brisés :');
      report.results
        .filter(r => r.is404)
        .forEach(link => {
          console.log(`- ${link.url} (${link.source.file}:${link.source.line})`);
        });
    }

    console.log('\nRapport complet sauvegardé dans : link-check-report.json');
  } catch (error) {
    console.error('Erreur lors de la vérification des liens :', error);
    process.exit(1);
  }
}

main(); 