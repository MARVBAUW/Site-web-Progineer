#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 VALIDATION FINALE DES CORRECTIONS DARK MODE');
console.log('='.repeat(50));

// Fichiers principaux à vérifier
const mainFiles = [
  'src/components/home/ExpertiseSection.tsx',
  'src/components/home/Services.tsx', 
  'src/components/home/StatsSection.tsx',
  'src/components/home/CTASection.tsx',
  'src/components/home/InnovationHub.tsx',
  'src/components/contact/ContactLocationMap.tsx',
  'src/components/estimation/EstimationLocationCities.tsx'
];

// Problèmes spécifiques à vérifier
const validations = [
  {
    name: 'Services - Gradients d\'arrière-plan',
    check: (content) => {
      const patterns = [
        /from-blue-50 to-indigo-50 dark:from-blue-900\/20 dark:to-indigo-900\/20/,
        /from-green-50 to-emerald-50 dark:from-green-900\/20 dark:to-emerald-900\/20/,
        /from-amber-50 to-yellow-50 dark:from-amber-900\/20 dark:to-yellow-900\/20/,
        /from-purple-50 to-violet-50 dark:from-purple-900\/20 dark:to-violet-900\/20/,
        /from-rose-50 to-pink-50 dark:from-rose-900\/20 dark:to-pink-900\/20/
      ];
      return patterns.every(pattern => pattern.test(content));
    }
  },
  {
    name: 'InnovationHub - Gradients des sections',
    check: (content) => {
      const patterns = [
        /from-indigo-50 to-purple-50 dark:from-indigo-900\/20 dark:to-purple-900\/20/,
        /from-emerald-50 to-green-50 dark:from-emerald-900\/20 dark:to-green-900\/20/,
        /from-amber-50 to-yellow-50 dark:from-amber-900\/20 dark:to-yellow-900\/20/
      ];
      return patterns.every(pattern => pattern.test(content));
    }
  },
  {
    name: 'Sections d\'arrière-plan principales',
    check: (content) => {
      const patterns = [
        /from-stone-50.*dark:from-gray-/,
        /from-stone-100.*dark:from-gray-/,
        /from-white.*dark:from-gray-/
      ];
      return patterns.some(pattern => pattern.test(content));
    }
  },
  {
    name: 'Textes adaptatifs',
    check: (content) => {
      const hasProgineerDark = content.includes('text-progineer-dark');
      if (hasProgineerDark) {
        return content.includes('dark:text-white') || content.includes('dark:text-gray-');
      }
      return true;
    }
  }
];

// Fonction pour analyser un fichier
function analyzeFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return { exists: false, issues: ['Fichier non trouvé'] };
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  const successes = [];

  validations.forEach(validation => {
    if (validation.check(content)) {
      successes.push(validation.name);
    } else {
      issues.push(validation.name);
    }
  });

  // Vérifications spécifiques par fichier
  const filename = path.basename(filePath);
  
  if (filename === 'Services.tsx') {
    const servicesBgPattern = /bgColor.*dark:/g;
    const matches = content.match(servicesBgPattern);
    if (!matches || matches.length < 5) {
      issues.push('Tous les services n\'ont pas de variantes dark mode');
    }
  }

  if (filename === 'InnovationHub.tsx') {
    const sectionColorPattern = /color.*dark:/g;
    const matches = content.match(sectionColorPattern);
    if (!matches || matches.length < 3) {
      issues.push('Toutes les sections n\'ont pas de variantes dark mode');
    }
  }

  return { exists: true, issues, successes };
}

// Analyse des fichiers
let totalIssues = 0;
let totalSuccesses = 0;

console.log('\n📋 ANALYSE PAR FICHIER\n');

mainFiles.forEach(filePath => {
  const result = analyzeFile(filePath);
  const filename = path.basename(filePath);
  
  console.log(`📄 ${filename}`);
  
  if (!result.exists) {
    console.log('   ❌ Fichier non trouvé');
    totalIssues++;
    return;
  }

  if (result.successes.length > 0) {
    console.log(`   ✅ Corrections validées: ${result.successes.length}`);
    result.successes.forEach(success => {
      console.log(`      • ${success}`);
    });
    totalSuccesses += result.successes.length;
  }

  if (result.issues.length > 0) {
    console.log(`   ⚠️  Problèmes restants: ${result.issues.length}`);
    result.issues.forEach(issue => {
      console.log(`      • ${issue}`);
    });
    totalIssues += result.issues.length;
  }

  if (result.issues.length === 0 && result.successes.length > 0) {
    console.log('   🎉 Fichier entièrement corrigé !');
  }
  
  console.log('');
});

// Vérifications globales supplémentaires
console.log('🔧 VÉRIFICATIONS GLOBALES\n');

// Vérifier les principales couleurs d'arrière-plan problématiques
const problematicPatterns = [
  { pattern: /bg-gradient-to-br from-\w+-50(?! dark:)/, issue: 'Gradient sans variante dark mode' },
  { pattern: /text-progineer-dark(?! dark:)/, issue: 'Texte progineer-dark sans variante dark' },
  { pattern: /bg-progineer-light(?! dark:)/, issue: 'Arrière-plan progineer-light sans variante dark' }
];

let globalIssues = 0;

mainFiles.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const filename = path.basename(filePath);
  
  problematicPatterns.forEach(({ pattern, issue }) => {
    if (pattern.test(content)) {
      console.log(`⚠️  ${filename}: ${issue}`);
      globalIssues++;
    }
  });
});

if (globalIssues === 0) {
  console.log('✅ Aucun problème global détecté');
}

// Résumé final
console.log('\n' + '='.repeat(50));
console.log('📊 RÉSUMÉ FINAL');
console.log('='.repeat(50));
console.log(`✅ Corrections validées: ${totalSuccesses}`);
console.log(`⚠️  Problèmes restants: ${totalIssues + globalIssues}`);

if (totalIssues + globalIssues === 0) {
  console.log('\n🎉 FÉLICITATIONS !');
  console.log('Toutes les corrections de contraste dark mode ont été appliquées avec succès.');
  console.log('Les cartes de services, sections InnovationHub, et zones d\'intervention');
  console.log('s\'adaptent maintenant correctement au mode sombre.');
} else {
  console.log('\n⚠️  Il reste des corrections à apporter.');
  console.log('Vérifiez les problèmes listés ci-dessus.');
}

console.log('\n' + '='.repeat(50)); 