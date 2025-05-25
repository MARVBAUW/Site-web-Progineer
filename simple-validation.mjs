#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔍 **VALIDATION SIMPLE DES CORRECTIONS D\'ACCESSIBILITÉ MODE DARK**\n');

// Fonction pour rechercher des fichiers récursivement
function findFiles(dir, extensions, files = []) {
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', 'dist', '.git'].includes(item)) {
          findFiles(fullPath, extensions, files);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Ignorer les erreurs de lecture de dossier
  }
  
  return files;
}

// Patterns problématiques à rechercher
const PROBLEMS = [
  { pattern: 'text-gray-300', description: 'Icônes avec contraste insuffisant', severity: 'CRITIQUE' },
  { pattern: 'text-gray-400', description: 'Icônes avec contraste insuffisant', severity: 'CRITIQUE' },
  { pattern: 'border-gray-100', description: 'Bordures non-adaptatives', severity: 'MAJEUR' },
  { pattern: 'text-purple-300', description: 'Couleurs hardcodées problématiques', severity: 'MINEUR' }
];

// Patterns corrigés
const CORRECTIONS = [
  { pattern: 'text-muted-foreground', description: 'Icônes avec contraste adaptatif' },
  { pattern: 'border-border', description: 'Bordures adaptatives' },
  { pattern: 'text-foreground', description: 'Textes avec contraste adaptatif' }
];

function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = { file: filePath, problems: [], corrections: [] };

    // Recherche des problèmes
    for (const { pattern, description, severity } of PROBLEMS) {
      const matches = content.split(pattern).length - 1;
      if (matches > 0) {
        result.problems.push({ pattern, description, severity, count: matches });
      }
    }

    // Recherche des corrections
    for (const { pattern, description } of CORRECTIONS) {
      const matches = content.split(pattern).length - 1;
      if (matches > 0) {
        result.corrections.push({ pattern, description, count: matches });
      }
    }

    return result;
  } catch (error) {
    return null;
  }
}

function main() {
  // Recherche des fichiers TypeScript/React dans src/
  const files = findFiles('src', ['.tsx', '.ts']);
  
  console.log(`📁 Analyse de ${files.length} fichiers...\n`);

  let totalProblems = 0;
  let totalCorrections = 0;
  const problematicFiles = [];
  const correctedFiles = [];

  // Analyse de chaque fichier
  for (const file of files) {
    const result = analyzeFile(file);
    if (!result) continue;

    if (result.problems.length > 0) {
      problematicFiles.push(result);
      totalProblems += result.problems.reduce((sum, p) => sum + p.count, 0);
    }

    if (result.corrections.length > 0) {
      correctedFiles.push(result);
      totalCorrections += result.corrections.reduce((sum, c) => sum + c.count, 0);
    }
  }

  // Rapport des problèmes restants
  console.log('🚨 **PROBLÈMES RESTANTS**\n');
  if (problematicFiles.length === 0) {
    console.log('✅ **AUCUN PROBLÈME CRITIQUE DÉTECTÉ !**');
    console.log('🎉 Les principales corrections d\'accessibilité ont été appliquées.\n');
  } else {
    console.log(`❌ ${problematicFiles.length} fichier(s) avec des problèmes :\n`);
    
    // Afficher les 10 premiers fichiers problématiques
    problematicFiles.slice(0, 10).forEach(file => {
      console.log(`📄 **${path.relative(process.cwd(), file.file)}**`);
      file.problems.forEach(problem => {
        console.log(`   ❌ ${problem.severity}: ${problem.description} (${problem.count}x)`);
      });
      console.log('');
    });
    
    if (problematicFiles.length > 10) {
      console.log(`... et ${problematicFiles.length - 10} autres fichiers\n`);
    }
  }

  // Rapport des corrections appliquées
  console.log('✅ **CORRECTIONS APPLIQUÉES**\n');
  if (totalCorrections === 0) {
    console.log('⚠️  Aucune correction détectée.\n');
  } else {
    console.log(`🎯 ${totalCorrections} corrections appliquées dans ${correctedFiles.length} fichiers\n`);
    
    // Top 5 des fichiers les plus corrigés
    const topCorrected = correctedFiles
      .sort((a, b) => b.corrections.reduce((sum, c) => sum + c.count, 0) - a.corrections.reduce((sum, c) => sum + c.count, 0))
      .slice(0, 5);

    topCorrected.forEach(file => {
      const fileCorrections = file.corrections.reduce((sum, c) => sum + c.count, 0);
      console.log(`📄 **${path.relative(process.cwd(), file.file)}** (${fileCorrections} corrections)`);
    });
    console.log('');
  }

  // Résumé final
  console.log('📊 **RÉSUMÉ FINAL**\n');
  console.log(`🔍 Fichiers analysés: ${files.length}`);
  console.log(`❌ Problèmes restants: ${totalProblems}`);
  console.log(`✅ Corrections appliquées: ${totalCorrections}`);
  console.log(`📁 Fichiers problématiques: ${problematicFiles.length}`);
  console.log(`📁 Fichiers corrigés: ${correctedFiles.length}`);

  // Score d'accessibilité
  const accessibilityScore = totalProblems === 0 ? 100 : Math.max(0, 100 - (totalProblems * 1.5));
  console.log(`\n🎯 **SCORE D'ACCESSIBILITÉ: ${Math.round(accessibilityScore)}/100**`);

  if (accessibilityScore >= 95) {
    console.log('🏆 **EXCELLENT** - Mode dark parfaitement accessible !');
  } else if (accessibilityScore >= 80) {
    console.log('🥈 **BON** - Quelques améliorations possibles');
  } else if (accessibilityScore >= 60) {
    console.log('🥉 **ACCEPTABLE** - Des corrections sont nécessaires');
  } else {
    console.log('⚠️  **INSUFFISANT** - Corrections urgentes requises');
  }

  // Recommandations
  console.log('\n💡 **RECOMMANDATIONS**\n');
  if (totalProblems === 0) {
    console.log('✅ Testez le site en mode dark sur différents appareils');
    console.log('✅ Validez avec des outils d\'accessibilité (aXe, WAVE)');
    console.log('✅ Effectuez des tests utilisateur');
  } else {
    console.log('🔧 Corrigez les problèmes restants identifiés');
    console.log('📚 Consultez DARK_MODE_MIGRATION_GUIDE.md');
    console.log('🔄 Re-exécutez ce script après les corrections');
  }

  console.log('\n' + '='.repeat(60));
  console.log('🌙 Validation terminée - ' + new Date().toLocaleString());
  console.log('='.repeat(60));

  return totalProblems === 0;
}

const isSuccess = main();
process.exit(isSuccess ? 0 : 1); 