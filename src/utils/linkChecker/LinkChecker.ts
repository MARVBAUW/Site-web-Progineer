import { LinkCheckResult, LinkCheckReport, LinkCheckerConfig } from './types';
import { readFile, readdir } from 'fs/promises';
import { join } from 'path';
import axios from 'axios';
import { glob } from 'glob';

export class LinkChecker {
  private checkedUrls: Set<string> = new Set();
  private results: LinkCheckResult[] = [];
  private config: LinkCheckerConfig;

  constructor(config: Partial<LinkCheckerConfig> = {}) {
    this.config = {
      baseUrl: 'https://progineer.fr',
      excludePatterns: ['node_modules', 'dist', 'build'],
      alertThreshold: 5,
      checkInterval: 24 * 60 * 60 * 1000, // 24 heures
      ignorePatterns: [],
      ...config
    };
  }

  async checkAllLinks(): Promise<LinkCheckReport> {
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

  private async getAllFiles(): Promise<string[]> {
    const patterns = [
      'src/**/*.{ts,tsx,js,jsx}',
      'public/**/*.{html,css}'
    ];

    const files = await Promise.all(
      patterns.map(pattern => glob(pattern, { ignore: this.config.excludePatterns }))
    );

    return files.flat();
  }

  private async checkFile(filePath: string): Promise<void> {
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

  private extractLinks(content: string): string[] {
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

    const links = new Set<string>();

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

  private async checkLink(url: string, source: string): Promise<void> {
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

  private async checkUrl(url: string, isInternal: boolean, source: string): Promise<LinkCheckResult> {
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

  private findLineNumber(filePath: string, url: string): number {
    // Implémentation basique - à améliorer
    return 0;
  }

  private generateReport(): LinkCheckReport {
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