#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration des remplacements
const REPLACEMENTS = [
  // Textes
  { from: /text-gray-900/g, to: 'text-foreground' },
  { from: /text-gray-800/g, to: 'text-foreground' },
  { from: /text-gray-700/g, to: 'text-muted-foreground' },
  { from: /text-gray-600/g, to: 'text-muted-foreground' },
  { from: /text-gray-500/g, to: 'text-low-contrast' },
  
  // Arrière-plans
  { from: /bg-white(?!\w)/g, to: 'bg-background' },
  { from: /bg-gray-50(?!\w)/g, to: 'bg-muted/50' },
  { from: /bg-gray-100(?!\w)/g, to: 'bg-muted' },
  { from: /bg-gray-200(?!\w)/g, to: 'bg-surface-secondary' },
  
  // Bordures
  { from: /border-gray-200/g, to: 'border-border' },
  { from: /border-gray-300/g, to: 'border-border' },
  { from: /border-white/g, to: 'border-border' },
  
  // Hovers spécifiques
  { from: /hover:bg-gray-50/g, to: 'hover:bg-muted/50' },
  { from: /hover:bg-gray-100/g, to: 'hover:bg-muted' },
  { from: /hover:text-gray-700/g, to: 'hover:text-foreground' },
  { from: /hover:text-gray-800/g, to: 'hover:text-foreground' },
];

// Fichiers à exclure
const EXCLUDE_PATTERNS = [
  'node_modules/**',
  '.git/**',
  'dist/**',
  'build/**',
  '*.min.js',
  '*.min.css'
];

// Fonction pour obtenir tous les fichiers React/CSS
function getTargetFiles() {
  const patterns = [
    'src/**/*.tsx',
    'src/**/*.ts', 
    'src/**/*.jsx',
    'src/**/*.js',
    'src/**/*.css'
  ];
  
  let files = [];
  
  patterns.forEach(pattern => {
    const matches = glob.sync(pattern, { 
      ignore: EXCLUDE_PATTERNS 
    });
    files = files.concat(matches);
  });
  
  return [...new Set(files)]; // Supprimer les doublons
}

// Fonction pour appliquer les remplacements
function applyReplacements(content) {
  let updatedContent = content;
  let changeCount = 0;
  
  REPLACEMENTS.forEach(({ from, to }) => {
    const matches = updatedContent.match(from);
    if (matches) {
      changeCount += matches.length;
      updatedContent = updatedContent.replace(from, to);
    }
  });
  
  return { content: updatedContent, changes: changeCount };
}

// Fonction pour traiter un fichier
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: newContent, changes } = applyReplacements(content);
    
    if (changes > 0) {
      fs.writeFileSync(filePath, newContent);
      console.log(`✅ ${filePath}: ${changes} changement(s)`);
      return changes;
    } else {
      console.log(`⏭️  ${filePath}: aucun changement nécessaire`);
      return 0;
    }
  } catch (error) {
    console.error(`❌ Erreur avec ${filePath}:`, error.message);
    return 0;
  }
}

// Fonction pour créer un rapport
function generateReport(totalFiles, totalChanges, startTime) {
  const duration = Date.now() - startTime;
  
  console.log('\n' + '='.repeat(60));
  console.log('🌙 RAPPORT DE MIGRATION MODE DARK');
  console.log('='.repeat(60));
  console.log(`📁 Fichiers traités: ${totalFiles}`);
  console.log(`🔄 Total des changements: ${totalChanges}`);
  console.log(`⏱️  Temps d'exécution: ${duration}ms`);
  console.log('='.repeat(60));
  
  if (totalChanges > 0) {
    console.log('\n✨ Migration terminée avec succès !');
    console.log('📋 Actions recommandées:');
    console.log('   1. Testez le mode dark sur différentes pages');
    console.log('   2. Vérifiez les contrastes avec les DevTools');
    console.log('   3. Validez l\'accessibilité (WCAG 2.1)');
    console.log('   4. Testez sur mobile et desktop');
  } else {
    console.log('\n🎉 Aucune migration nécessaire - le code est déjà optimal !');
  }
}

// Script principal
function main() {
  console.log('🚀 Démarrage de la migration automatique du mode dark...\n');
  
  const startTime = Date.now();
  const files = getTargetFiles();
  let totalChanges = 0;
  
  console.log(`📂 ${files.length} fichier(s) à traiter\n`);
  
  files.forEach(file => {
    totalChanges += processFile(file);
  });
  
  generateReport(files.length, totalChanges, startTime);
}

// Exécution du script
if (require.main === module) {
  main();
}

module.exports = { applyReplacements, processFile }; 