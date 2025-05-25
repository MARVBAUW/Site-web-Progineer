#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

console.log('🔍 **VALIDATION DES CORRECTIONS D\'ACCESSIBILITÉ MODE DARK**\n');

// Patterns problématiques à rechercher
const PROBLEMATIC_PATTERNS = [
  {
    pattern: /text-gray-300/g,
    description: 'Icônes avec contraste insuffisant (text-gray-300)',
    severity: 'CRITIQUE'
  },
  {
    pattern: /text-gray-400/g,
    description: 'Icônes avec contraste insuffisant (text-gray-400)',
    severity: 'CRITIQUE'
  },
  {
    pattern: /border-gray-100/g,
    description: 'Bordures non-adaptatives (border-gray-100)',
    severity: 'MAJEUR'
  },
  {
    pattern: /text-purple-300/g,
    description: 'Couleurs hardcodées problématiques (text-purple-300)',
    severity: 'MINEUR'
  },
  {
    pattern: /bg-white(?!\s+dark:)/g,
    description: 'Arrière-plans non-adaptatifs (bg-white sans variante dark)',
    severity: 'MAJEUR'
  }
];

// Patterns corrigés à valider
const CORRECTED_PATTERNS = [
  {
    pattern: /text-muted-foreground/g,
    description: 'Icônes avec contraste adaptatif (text-muted-foreground)',
    type: 'CORRECT'
  },
  {
    pattern: /border-border/g,
    description: 'Bordures adaptatives (border-border)',
    type: 'CORRECT'
  },
  {
    pattern: /text-foreground/g,
    description: 'Textes avec contraste adaptatif (text-foreground)',
    type: 'CORRECT'
  }
];

function scanFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const results = {
      file: filePath,
      problems: [],
      corrections: []
    };

    // Recherche des patterns problématiques
    for (const { pattern, description, severity } of PROBLEMATIC_PATTERNS) {
      const matches = content.match(pattern);
      if (matches) {
        results.problems.push({
          description,
          severity,
          count: matches.length,
          matches: matches.slice(0, 3) // Limiter l'affichage
        });
      }
    }

    // Recherche des patterns corrigés
    for (const { pattern, description, type } of CORRECTED_PATTERNS) {
      const matches = content.match(pattern);
      if (matches) {
        results.corrections.push({
          description,
          count: matches.length
        });
      }
    }

    return results;
  } catch (error) {
    console.error(`❌ Erreur lors de la lecture du fichier ${filePath}:`, error.message);
    return null;
  }
}

function main() {
  // Recherche de tous les fichiers TypeScript/React
  const files = globSync('src/**/*.{tsx,ts}', { 
    ignore: ['node_modules/**', 'dist/**', '**/*.d.ts'] 
  });

  console.log(`📁 Analyse de ${files.length} fichiers...\n`);

  let totalProblems = 0;
  let totalCorrections = 0;
  const problematicFiles = [];
  const correctedFiles = [];

  // Analyse de chaque fichier
  for (const file of files) {
    const result = scanFile(file);
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
    console.log('✅ **AUCUN PROBLÈME DÉTECTÉ !**');
    console.log('🎉 Toutes les corrections d\'accessibilité ont été appliquées avec succès.\n');
  } else {
    problematicFiles.forEach(file => {
      console.log(`📄 **${file.file}**`);
      file.problems.forEach(problem => {
        console.log(`   ❌ ${problem.severity}: ${problem.description}`);
        console.log(`      🔢 ${problem.count} occurrence(s) trouvée(s)`);
        if (problem.matches.length > 0) {
          console.log(`      📝 Exemples: ${problem.matches.join(', ')}`);
        }
      });
      console.log('');
    });
  }

  // Rapport des corrections appliquées
  console.log('✅ **CORRECTIONS APPLIQUÉES**\n');
  if (correctedFiles.length === 0) {
    console.log('⚠️  Aucune correction détectée. Vérifiez que les corrections ont été appliquées.\n');
  } else {
    const topCorrectedFiles = correctedFiles
      .sort((a, b) => b.corrections.reduce((sum, c) => sum + c.count, 0) - a.corrections.reduce((sum, c) => sum + c.count, 0))
      .slice(0, 10);

    topCorrectedFiles.forEach(file => {
      const totalFileCorrections = file.corrections.reduce((sum, c) => sum + c.count, 0);
      console.log(`📄 **${file.file}** (${totalFileCorrections} corrections)`);
      file.corrections.forEach(correction => {
        console.log(`   ✅ ${correction.description}: ${correction.count} utilisations`);
      });
      console.log('');
    });
  }

  // Résumé final
  console.log('📊 **RÉSUMÉ FINAL**\n');
  console.log(`🔍 Fichiers analysés: ${files.length}`);
  console.log(`❌ Problèmes restants: ${totalProblems}`);
  console.log(`✅ Corrections appliquées: ${totalCorrections}`);
  console.log(`📁 Fichiers avec problèmes: ${problematicFiles.length}`);
  console.log(`📁 Fichiers corrigés: ${correctedFiles.length}`);

  // Score d'accessibilité
  const accessibilityScore = totalProblems === 0 ? 100 : Math.max(0, 100 - (totalProblems * 2));
  console.log(`\n🎯 **SCORE D'ACCESSIBILITÉ: ${accessibilityScore}/100**`);

  if (accessibilityScore >= 95) {
    console.log('🏆 **EXCELLENT** - Mode dark parfaitement accessible !');
  } else if (accessibilityScore >= 80) {
    console.log('🥈 **BON** - Quelques améliorations mineures possibles');
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
    console.log('✅ Effectuez des tests utilisateur en mode dark');
  } else {
    console.log('🔧 Corrigez les problèmes restants identifiés ci-dessus');
    console.log('🔄 Re-exécutez ce script après les corrections');
    console.log('📚 Consultez la documentation sur les bonnes pratiques');
  }

  console.log('\n' + '='.repeat(60));
  console.log('🌙 Validation des corrections d\'accessibilité mode dark terminée');
  console.log('='.repeat(60));

  // Code de sortie
  process.exit(totalProblems === 0 ? 0 : 1);
}

main(); 