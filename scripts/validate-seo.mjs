#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

/**
 * Script de validation SEO pour Progineer
 * Vérifie l'implémentation des bonnes pratiques SEO
 */

class SEOValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.successes = [];
  }

  log(type, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${type.toUpperCase()}: ${message}`;
    
    switch (type) {
      case 'error':
        this.errors.push(message);
        console.error(`❌ ${message}`);
        break;
      case 'warning':
        this.warnings.push(message);
        console.warn(`⚠️  ${message}`);
        break;
      case 'success':
        this.successes.push(message);
        console.log(`✅ ${message}`);
        break;
      default:
        console.log(`ℹ️  ${message}`);
    }
  }

  checkFileExists(filePath, description) {
    const fullPath = path.join(projectRoot, filePath);
    if (fs.existsSync(fullPath)) {
      this.log('success', `${description} existe: ${filePath}`);
      return true;
    } else {
      this.log('error', `${description} manquant: ${filePath}`);
      return false;
    }
  }

  checkIndexHtml() {
    const indexPath = path.join(projectRoot, 'index.html');
    if (!this.checkFileExists('index.html', 'Fichier index.html')) {
      return;
    }

    const content = fs.readFileSync(indexPath, 'utf8');
    
    // Vérifier les balises meta essentielles
    const checks = [
      { regex: /<title>.*<\/title>/, name: 'Balise title' },
      { regex: /<meta name="description"/, name: 'Meta description' },
      { regex: /<meta name="keywords"/, name: 'Meta keywords' },
      { regex: /<meta property="og:title"/, name: 'Open Graph title' },
      { regex: /<meta property="og:description"/, name: 'Open Graph description' },
      { regex: /<meta property="og:image"/, name: 'Open Graph image' },
      { regex: /<meta name="twitter:card"/, name: 'Twitter Card' },
      { regex: /<link rel="canonical"/, name: 'URL canonique' },
      { regex: /<meta name="robots"/, name: 'Directives robots' },
      { regex: /<html lang="fr"/, name: 'Langue française' }
    ];

    checks.forEach(check => {
      if (check.regex.test(content)) {
        this.log('success', `${check.name} présente dans index.html`);
      } else {
        this.log('error', `${check.name} manquante dans index.html`);
      }
    });

    // Vérifier la longueur du title
    const titleMatch = content.match(/<title>(.*?)<\/title>/);
    if (titleMatch) {
      const titleLength = titleMatch[1].length;
      if (titleLength >= 30 && titleLength <= 60) {
        this.log('success', `Longueur du title optimale: ${titleLength} caractères`);
      } else {
        this.log('warning', `Longueur du title non optimale: ${titleLength} caractères (recommandé: 30-60)`);
      }
    }

    // Vérifier la longueur de la meta description
    const descMatch = content.match(/<meta name="description" content="(.*?)"/);
    if (descMatch) {
      const descLength = descMatch[1].length;
      if (descLength >= 120 && descLength <= 160) {
        this.log('success', `Longueur de la meta description optimale: ${descLength} caractères`);
      } else {
        this.log('warning', `Longueur de la meta description non optimale: ${descLength} caractères (recommandé: 120-160)`);
      }
    }
  }

  checkRobotsTxt() {
    const robotsPath = path.join(projectRoot, 'public', 'robots.txt');
    if (!this.checkFileExists('public/robots.txt', 'Fichier robots.txt')) {
      return;
    }

    const content = fs.readFileSync(robotsPath, 'utf8');
    
    const checks = [
      { regex: /User-agent: \*/, name: 'User-agent général' },
      { regex: /Sitemap:/, name: 'Référence au sitemap' },
      { regex: /Allow: \//, name: 'Autorisation générale' },
      { regex: /Disallow: \/admin\//, name: 'Blocage des pages admin' }
    ];

    checks.forEach(check => {
      if (check.regex.test(content)) {
        this.log('success', `${check.name} présent dans robots.txt`);
      } else {
        this.log('warning', `${check.name} manquant dans robots.txt`);
      }
    });
  }

  checkSitemap() {
    const sitemapPath = path.join(projectRoot, 'public', 'sitemap.xml');
    if (!this.checkFileExists('public/sitemap.xml', 'Fichier sitemap.xml')) {
      return;
    }

    const content = fs.readFileSync(sitemapPath, 'utf8');
    
    // Vérifier la structure XML
    if (content.includes('<?xml version="1.0"') && content.includes('<urlset')) {
      this.log('success', 'Structure XML du sitemap valide');
    } else {
      this.log('error', 'Structure XML du sitemap invalide');
    }

    // Compter les URLs
    const urlMatches = content.match(/<url>/g);
    if (urlMatches) {
      const urlCount = urlMatches.length;
      this.log('success', `Sitemap contient ${urlCount} URLs`);
      
      if (urlCount < 10) {
        this.log('warning', 'Peu d\'URLs dans le sitemap, considérez en ajouter plus');
      }
    }

    // Vérifier les dates de modification
    if (content.includes('<lastmod>')) {
      this.log('success', 'Dates de modification présentes dans le sitemap');
    } else {
      this.log('warning', 'Dates de modification manquantes dans le sitemap');
    }
  }

  checkSEOComponents() {
    const seoComponentsPath = path.join(projectRoot, 'src', 'components', 'seo');
    
    if (!fs.existsSync(seoComponentsPath)) {
      this.log('error', 'Dossier des composants SEO manquant');
      return;
    }

    const seoFiles = [
      'SEOOptimizer.tsx',
      'EnhancedSEO.tsx',
      'FAQStructuredData.tsx',
      'SEOBreadcrumb.tsx'
    ];

    seoFiles.forEach(file => {
      this.checkFileExists(`src/components/seo/${file}`, `Composant SEO ${file}`);
    });
  }

  checkImages() {
    const imagesPath = path.join(projectRoot, 'public', 'images');
    
    const requiredImages = [
      'progineer-logo.png',
      'progineer-social-card.jpg'
    ];

    requiredImages.forEach(image => {
      this.checkFileExists(`public/images/${image}`, `Image ${image}`);
    });
  }

  checkPackageJson() {
    const packagePath = path.join(projectRoot, 'package.json');
    if (!this.checkFileExists('package.json', 'Fichier package.json')) {
      return;
    }

    const content = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    
    const seoPackages = [
      'react-helmet-async',
      '@types/react-helmet'
    ];

    seoPackages.forEach(pkg => {
      if (content.dependencies?.[pkg] || content.devDependencies?.[pkg]) {
        this.log('success', `Package SEO ${pkg} installé`);
      } else {
        this.log('warning', `Package SEO ${pkg} manquant`);
      }
    });
  }

  generateReport() {
    console.log('\n' + '='.repeat(60));
    console.log('📊 RAPPORT DE VALIDATION SEO PROGINEER');
    console.log('='.repeat(60));
    
    console.log(`\n✅ Succès: ${this.successes.length}`);
    console.log(`⚠️  Avertissements: ${this.warnings.length}`);
    console.log(`❌ Erreurs: ${this.errors.length}`);
    
    if (this.errors.length > 0) {
      console.log('\n🔴 ERREURS À CORRIGER:');
      this.errors.forEach((error, index) => {
        console.log(`${index + 1}. ${error}`);
      });
    }
    
    if (this.warnings.length > 0) {
      console.log('\n🟡 AMÉLIORATIONS RECOMMANDÉES:');
      this.warnings.forEach((warning, index) => {
        console.log(`${index + 1}. ${warning}`);
      });
    }
    
    const score = Math.round((this.successes.length / (this.successes.length + this.warnings.length + this.errors.length)) * 100);
    console.log(`\n📈 Score SEO: ${score}%`);
    
    if (score >= 90) {
      console.log('🎉 Excellent! Votre SEO est bien optimisé.');
    } else if (score >= 70) {
      console.log('👍 Bon travail! Quelques améliorations possibles.');
    } else {
      console.log('⚠️  Des améliorations importantes sont nécessaires.');
    }
    
    console.log('\n' + '='.repeat(60));
  }

  run() {
    console.log('🔍 Validation SEO en cours...\n');
    
    this.checkIndexHtml();
    this.checkRobotsTxt();
    this.checkSitemap();
    this.checkSEOComponents();
    this.checkImages();
    this.checkPackageJson();
    
    this.generateReport();
  }
}

// Exécuter la validation
const validator = new SEOValidator();
validator.run(); 