#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 VALIDATION COMPLÈTE DES CORRECTIONS DARK MODE');
console.log('='.repeat(60));

// Fichiers principaux vérifiés
const checkedFiles = [
  'src/components/home/LocationMap.tsx',
  'src/components/home/Services.tsx',
  'src/components/home/InnovationHub.tsx',
  'src/components/contact/ContactLocationMap.tsx',
  'src/components/estimation/EstimationLocationCities.tsx',
  'src/components/estimation/visualizer/EstimationVisualizer.tsx',
  'src/pages/Equipe.tsx',
  'src/components/workspace/v2/WorkspaceLayout.tsx',
  'src/components/estimation/EstimationTrustMetrics.tsx',
  'src/components/contact/ContactHero.tsx',
  'src/components/estimation/EstimationHero.tsx',
  'src/components/estimation/EstimationBenefits.tsx'
];

// Problèmes spécifiques recherchés
const problemPatterns = [
  {
    name: 'Gradients sans dark mode',
    pattern: /bg-gradient-to-\w+ from-(?:white|stone|blue|green|amber|purple|rose)-\d+(?! dark:)/g,
    severity: 'high'
  },
  {
    name: 'progineer-light sans dark mode',
    pattern: /bg-progineer-light(?! dark:)/g,
    severity: 'high'
  },
  {
    name: 'text-progineer-dark sans dark mode',
    pattern: /text-progineer-dark(?! dark:)/g,
    severity: 'medium'
  },
  {
    name: 'Arrière-plans stone/white sans dark mode',
    pattern: /bg-(?:stone|white)-\d+(?! dark:)/g,
    severity: 'medium'
  },
  {
    name: 'Bordures claires sans dark mode',
    pattern: /border-(?:stone|gray)-(?:100|200)(?! dark:)/g,
    severity: 'low'
  }
];

// Corrections spécifiques à vérifier
const expectedFixes = [
  {
    file: 'src/components/home/LocationMap.tsx',
    fixes: [
      'bg-gradient-to-b from-white to-stone-100 dark:from-gray-900 dark:to-gray-800',
      'bg-gradient-to-b from-stone-50 dark:from-gray-800 to-transparent',
      'bg-khaki-100/30 dark:bg-khaki-400/10',
      'bg-khaki-100 dark:bg-khaki-800 text-khaki-800 dark:text-khaki-200'
    ]
  },
  {
    file: 'src/components/home/Services.tsx',
    fixes: [
      'dark:from-blue-900/20 dark:to-indigo-900/20',
      'dark:from-green-900/20 dark:to-emerald-900/20',
      'dark:from-amber-900/20 dark:to-yellow-900/20'
    ]
  },
  {
    file: 'src/components/estimation/EstimationTrustMetrics.tsx',
    fixes: [
      'bg-stone-50/70 dark:bg-gray-800/70',
      'text-gray-600 dark:text-gray-300'
    ]
  }
];

let totalIssues = 0;
let totalFixed = 0;

console.log('📋 ANALYSE DES CORRECTIONS\n');

// Fonction d'analyse d'un fichier
function analyzeFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return { exists: false, issues: [], fixes: [] };
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  const fixes = [];

  // Recherche des problèmes restants
  problemPatterns.forEach(({ name, pattern, severity }) => {
    const matches = content.match(pattern);
    if (matches) {
      issues.push({
        name,
        severity,
        count: matches.length,
        matches: matches.slice(0, 3) // Limité à 3 exemples
      });
    }
  });

  // Vérification des corrections appliquées
  const expectedFile = expectedFixes.find(f => f.file === filePath);
  if (expectedFile) {
    expectedFile.fixes.forEach(fix => {
      if (content.includes(fix)) {
        fixes.push(fix);
      }
    });
  }

  return { exists: true, issues, fixes };
}

// Analyse de chaque fichier
checkedFiles.forEach(filePath => {
  const result = analyzeFile(filePath);
  const filename = path.basename(filePath);
  
  console.log(`📄 ${filename}`);
  
  if (!result.exists) {
    console.log('   ❌ Fichier non trouvé');
    return;
  }

  // Corrections appliquées
  if (result.fixes.length > 0) {
    console.log(`   ✅ Corrections validées: ${result.fixes.length}`);
    result.fixes.forEach(fix => {
      console.log(`      • ${fix.substring(0, 60)}...`);
    });
    totalFixed += result.fixes.length;
  }

  // Problèmes restants
  if (result.issues.length > 0) {
    console.log(`   ⚠️  Problèmes détectés: ${result.issues.length}`);
    result.issues.forEach(issue => {
      const severity = issue.severity === 'high' ? '🔴' : 
                     issue.severity === 'medium' ? '🟡' : '🟢';
      console.log(`      ${severity} ${issue.name}: ${issue.count} occurrence(s)`);
      if (issue.matches) {
        issue.matches.forEach(match => {
          console.log(`         "${match}"`);
        });
      }
      totalIssues += issue.count;
    });
  }

  if (result.issues.length === 0 && result.fixes.length > 0) {
    console.log('   🎉 Fichier entièrement corrigé !');
  }

  console.log('');
});

// Vérifications globales supplémentaires
console.log('🔧 VÉRIFICATIONS GLOBALES\n');

// Recherche de nouveaux problèmes potentiels
const globalPatterns = [
  { pattern: /className="[^"]*from-blue-\d+(?! dark:)/g, name: 'Gradients bleus sans dark mode' },
  { pattern: /className="[^"]*bg-white(?! dark:)/g, name: 'Arrière-plans blancs sans dark mode' },
  { pattern: /style.*background.*linear-gradient/gi, name: 'Gradients CSS inline' }
];

let globalIssues = 0;

checkedFiles.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const filename = path.basename(filePath);
  
  globalPatterns.forEach(({ pattern, name }) => {
    const matches = content.match(pattern);
    if (matches) {
      console.log(`⚠️  ${filename}: ${name} (${matches.length})`);
      globalIssues += matches.length;
    }
  });
});

if (globalIssues === 0) {
  console.log('✅ Aucun problème global détecté');
}

// Vérification des couleurs bleutées potentielles
console.log('\n🔵 VÉRIFICATION COULEURS BLEUTÉES\n');

const bluePatterns = [
  /text-blue-\d+/g,
  /bg-blue-\d+/g,
  /border-blue-\d+/g,
  /from-blue-\d+/g,
  /to-blue-\d+/g
];

let blueIssues = 0;

checkedFiles.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  const filename = path.basename(filePath);
  
  bluePatterns.forEach(pattern => {
    const matches = content.match(pattern);
    if (matches) {
      // Vérifier si c'est dans un contexte approprié (cartes de services par exemple)
      const isInServiceCard = matches.some(match => 
        content.includes(`${match}`) && 
        content.includes('dark:from-blue-900/20')
      );
      
      if (!isInServiceCard) {
        console.log(`🔵 ${filename}: Couleur bleue détectée - ${matches[0]}`);
        blueIssues++;
      }
    }
  });
});

if (blueIssues === 0) {
  console.log('✅ Aucune couleur bleue problématique détectée');
}

// Résumé final
console.log('\n' + '='.repeat(60));
console.log('📊 RÉSUMÉ FINAL');
console.log('='.repeat(60));
console.log(`✅ Corrections validées: ${totalFixed}`);
console.log(`⚠️  Problèmes restants: ${totalIssues + globalIssues + blueIssues}`);

if (totalIssues + globalIssues + blueIssues === 0) {
  console.log('\n🎉 FÉLICITATIONS !');
  console.log('Toutes les corrections de mode sombre ont été appliquées avec succès.');
  console.log('✓ Sections LocationMap corrigées');
  console.log('✓ Cartes de services adaptées');
  console.log('✓ Gradients d\'arrière-plan corrigés');
  console.log('✓ Couleurs progineer-light remplacées');
  console.log('✓ Textes adaptés au mode sombre');
  console.log('\nLe site s\'adapte maintenant parfaitement au mode sombre !');
} else {
  console.log('\n⚠️  Il reste quelques corrections à apporter.');
  console.log('Vérifiez les problèmes listés ci-dessus.');
}

console.log('\n' + '='.repeat(60)); 