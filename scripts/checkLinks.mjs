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
      // Patterns avec variables - plus restrictifs pour éviter les faux positifs
      // On s'attend à ce que la variable contienne une chaîne de type URL
      /to={{?`([^`]+?)`?}?}/g, 
      /href={{?`([^`]+?)`?}?}/g,
      /path={{?`([^`]+?)`?}?}/g,
      /url={{?`([^`]+?)`?}?}/g
    ];

    const links = new Set();
    const commonFalsePositives = [/^{.*}$/, /^\w+\.\w+$/, /^\w+$/]; // Ex: {variable}, link.href, targetUrl
    const tileServerPlaceholders = /{[xyzs]}/i; // Pattern pour détecter les placeholders de serveur de tuiles
    const googleFontDomains = ["fonts.googleapis.com", "fonts.gstatic.com"];

    for (const pattern of linkPatterns) {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const rawUrl = match[1];
        if (rawUrl && !rawUrl.startsWith('#') && !this.config.ignorePatterns.some(p => rawUrl.includes(p))) {
          
          // Ignorer les URL de serveurs de tuiles avec placeholders
          if (tileServerPlaceholders.test(rawUrl)) {
            // console.log(`Skipping tile server URL template: ${rawUrl}`);
            continue;
          }

          // Ignorer les domaines de polices Google spécifiques car HEAD request peut échouer
          try {
            const parsedUrl = new URL(rawUrl.startsWith('//') ? `https:${rawUrl}` : rawUrl);
            if (googleFontDomains.includes(parsedUrl.hostname)) {
              // console.log(`Skipping Google Font domain: ${rawUrl}`);
              continue;
            }
          } catch (e) {
            // Si l'URL n'est pas valide (ex: chemin relatif), on continue le traitement normal
          }

          // Vérifier si l'URL brute ressemble à un faux positif commun avant nettoyage
          if (commonFalsePositives.some(fpPattern => fpPattern.test(rawUrl.trim()))) {
            // console.log(`Skipping potential false positive (raw): ${rawUrl}`);
            continue;
          }

          // Nettoyer l'URL des variables et expressions
          const cleanUrl = rawUrl
            .replace(/\${[^}]+}/g, '') // Supprimer les expressions ${...}
            .replace(/[`'"']/g, '')    // Supprimer les backticks et guillemets
            .trim();
          
          // Vérifier à nouveau après nettoyage
          if (cleanUrl && !commonFalsePositives.some(fpPattern => fpPattern.test(cleanUrl))) {
            // Vérifier si c'est une URL valide (commence par http, https, / ou un nom de fichier avec extension)
            if (cleanUrl.match(/^(https?:\/\/|\/|\w+\.\w+)/i)) {
                 links.add(cleanUrl);
            } else {
                // console.log(`Skipping potential false positive (cleaned): ${cleanUrl}`);
            }
          } else if (cleanUrl) {
            // console.log(`Skipping potential false positive (cleaned, matched common): ${cleanUrl}`);
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
      // N'ajouter que les liens brisés ou ceux qui ne sont pas des succès (2xx)
      // ou si le statut est 0 (erreur réseau)
      if (result.status < 200 || result.status >= 300 || result.status === 0) {
        this.results.push(result);
      }
    } catch (error) {
      console.error(`Error checking link ${url}:`, error);
      // Enregistrer également les erreurs de vérification comme des problèmes
      this.results.push({
        url: fullUrl,
        status: 0, // Statut 0 pour indiquer une erreur de vérification
        isInternal,
        is404: true, // Considérer comme brisé
        lastChecked: new Date(),
        source: {
          file: source,
          line: await this.findLineNumber(source, url) 
        },
        error: error.message
      });
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
          line: await this.findLineNumber(source, url) // Ajout de await ici
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
          line: await this.findLineNumber(source, url) // Ajout de await ici (déjà présent dans la version précédente, mais on s'assure)
        }
      };
    }
  }

  async findLineNumber(filePath, url) {
    // Tenter de trouver le numéro de ligne de manière plus précise
    try {
      const content = await readFile(filePath, 'utf-8');
      const lines = content.split('\n');
      // Échapper les caractères spéciaux dans l'URL pour la recherche regex
      const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedUrl);
      for (let i = 0; i < lines.length; i++) {
        if (regex.test(lines[i])) {
          return i + 1; // Les numéros de ligne sont généralement basés sur 1
        }
      }
    } catch (error) {
      // console.error(`Could not read file ${filePath} to find line number for ${url}:`, error);
    }
    return 0; // Retourner 0 si non trouvé ou en cas d'erreur
  }

  generateReport() {
    // this.results ne contient maintenant que les liens avec des problèmes (non 2xx ou erreur réseau)
    const brokenLinks = this.results.filter(r => r.is404 || r.status === 0);
    const totalProblematicLinks = this.results.length;

    // Les statistiques suivantes sont basées sur les liens problématiques
    const internalProblematicLinks = this.results.filter(r => r.isInternal);
    const externalProblematicLinks = this.results.filter(r => !r.isInternal);
    const brokenInternalLinks = internalProblematicLinks.filter(r => r.is404 || r.status === 0);
    const brokenExternalLinks = externalProblematicLinks.filter(r => !r.is404 || r.status === 0);

    return {
      timestamp: new Date(),
      totalProblematicLinks: totalProblematicLinks,
      brokenLinks: brokenLinks.length, // Nombre de liens réellement cassés (404 ou erreur)
      results: this.results, // Contient uniquement les liens avec des problèmes
      summary: {
        internalProblematicLinks: internalProblematicLinks.length,
        externalProblematicLinks: externalProblematicLinks.length,
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
    console.log(`Total des liens problématiques : ${report.totalProblematicLinks}`);
    console.log(`Liens brisés : ${report.brokenLinks}`);
    console.log(`Liens internes problématiques : ${report.summary.internalProblematicLinks}`);
    console.log(`Liens externes problématiques : ${report.summary.externalProblematicLinks}`);
    console.log(`Liens internes brisés : ${report.summary.brokenInternalLinks}`);
    console.log(`Liens externes brisés : ${report.summary.brokenExternalLinks}`);

    if (report.brokenLinks > 0) {
      console.log('\nLiens brisés :');
      report.results
        .filter(r => r.is404 || r.status === 0) // Assurer que le filtre ici correspond à la logique de generateReport
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