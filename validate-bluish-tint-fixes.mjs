#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 VALIDATION SUPPRESSION TEINTE BLEUTÉE');
console.log('='.repeat(60));

// Fichiers principaux de la page d'accueil et header
const mainFiles = [
  'src/components/layout/Navbar.tsx',
  'src/components/home/Hero.tsx',
  'src/components/home/ExpertiseSection.tsx',
  'src/components/home/Services.tsx',
  'src/components/home/StatsSection.tsx',
  'src/components/home/CTASection.tsx',
  'src/components/home/InnovationHub.tsx',
  'src/components/home/LocationMap.tsx',
  'src/components/contact/ContactHero.tsx',
  'src/components/estimation/EstimationHero.tsx',
  'src/components/estimation/EstimationTrustMetrics.tsx',
  'src/components/estimation/EstimationBenefits.tsx',
  'src/components/estimation/visualizer/EstimationVisualizer.tsx',
  'src/pages/Equipe.tsx'
];

// Patterns problématiques à rechercher
const problematicPatterns = [
  {
    name: 'gray-900 en mode dark',
    pattern: /dark:.*gray-9\d+/g,
    severity: 'high',
    description: 'Couleurs gray-900 qui donnent une teinte bleutée'
  },
  {
    name: 'gray-800 en mode dark',
    pattern: /dark:.*gray-8\d+/g,
    severity: 'high', 
    description: 'Couleurs gray-800 qui donnent une teinte bleutée'
  },
  {
    name: 'gray-700 en mode dark',
    pattern: /dark:.*gray-7\d+/g,
    severity: 'medium',
    description: 'Couleurs gray-700 potentiellement bleutées'
  },
  {
    name: 'from-gray- dans gradients dark',
    pattern: /dark:from-gray-\d+/g,
    severity: 'high',
    description: 'Gradients commençant par gray en mode dark'
  },
  {
    name: 'to-gray- dans gradients dark',
    pattern: /dark:to-gray-\d+/g,
    severity: 'high',
    description: 'Gradients finissant par gray en mode dark'
  },
  {
    name: 'via-gray- dans gradients dark',
    pattern: /dark:via-gray-\d+/g,
    severity: 'medium',
    description: 'Gradients avec via gray en mode dark'
  }
];

// Corrections attendues (patterns valides)
const validPatterns = [
  /dark:.*slate-[789]\d*/g,
  /dark:from-slate-\d+/g,
  /dark:to-slate-\d+/g,
  /dark:via-slate-\d+/g
];

let totalIssues = 0;
let totalFixed = 0;
let problematicFiles = [];

console.log('📋 ANALYSE DES FICHIERS PRINCIPAUX\n');

// Fonction d'analyse d'un fichier
function analyzeFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return { exists: false, issues: [], fixes: 0 };
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  let fixes = 0;

  // Vérification des patterns problématiques
  problematicPatterns.forEach(({ name, pattern, severity, description }) => {
    const matches = content.match(pattern);
    if (matches) {
      issues.push({
        name,
        severity,
        description,
        count: matches.length,
        matches: matches.slice(0, 5) // Limité à 5 exemples
      });
    }
  });

  // Comptage des corrections appliquées (patterns slate)
  validPatterns.forEach(pattern => {
    const matches = content.match(pattern);
    if (matches) {
      fixes += matches.length;
    }
  });

  return { exists: true, issues, fixes };
}

// Analyse de chaque fichier
mainFiles.forEach(filePath => {
  const result = analyzeFile(filePath);
  const filename = path.basename(filePath);
  
  console.log(`📄 ${filename}`);
  
  if (!result.exists) {
    console.log('   ❌ Fichier non trouvé');
    return;
  }

  // Corrections appliquées (slate utilisé)
  if (result.fixes > 0) {
    console.log(`   ✅ Corrections slate appliquées: ${result.fixes}`);
    totalFixed += result.fixes;
  }

  // Problèmes restants
  if (result.issues.length > 0) {
    console.log(`   🔴 PROBLÈMES DÉTECTÉS: ${result.issues.length}`);
    problematicFiles.push(filename);
    
    result.issues.forEach(issue => {
      const severity = issue.severity === 'high' ? '🚨' : '⚠️';
      console.log(`      ${severity} ${issue.name}: ${issue.count} occurrence(s)`);
      console.log(`         ${issue.description}`);
      
      if (issue.matches) {
        issue.matches.forEach(match => {
          console.log(`         "${match}"`);
        });
      }
      totalIssues += issue.count;
    });
  }

  if (result.issues.length === 0) {
    console.log('   🎉 Aucune teinte bleutée détectée !');
  }

  console.log('');
});

// Recherche globale dans tous les fichiers TSX
console.log('🔧 VÉRIFICATION GLOBALE\n');

const srcDir = path.join(__dirname, 'src');
function findTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

const allTsxFiles = findTsxFiles(srcDir);
let globalIssues = 0;

allTsxFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(__dirname, filePath);
  
  // Vérification rapide des patterns problématiques
  const hasGrayDark = /dark:.*gray-[89]\d+/.test(content);
  
  if (hasGrayDark && !mainFiles.includes(relativePath.replace(/\\/g, '/'))) {
    console.log(`⚠️  ${path.basename(filePath)}: Teintes gray- détectées`);
    globalIssues++;
  }
});

if (globalIssues === 0) {
  console.log('✅ Aucun problème global de teinte bleutée détecté');
}

// Résumé final
console.log('\n' + '='.repeat(60));
console.log('📊 RÉSUMÉ FINAL');
console.log('='.repeat(60));

if (totalIssues === 0 && globalIssues === 0) {
  console.log('🎉 FÉLICITATIONS !');
  console.log('✓ Toutes les teintes bleutées ont été supprimées');
  console.log('✓ Header/Navbar sans teinte bleutée');
  console.log('✓ Page principale adaptée au mode sombre');
  console.log(`✓ ${totalFixed} corrections slate appliquées`);
  console.log('\n🌟 Le site n\'a plus de teinte bleutée en mode sombre !');
} else {
  console.log(`🔴 Problèmes restants: ${totalIssues + globalIssues}`);
  console.log(`✅ Corrections appliquées: ${totalFixed}`);
  
  if (problematicFiles.length > 0) {
    console.log(`\n📁 Fichiers à corriger: ${problematicFiles.join(', ')}`);
  }
  
  console.log('\n💡 Actions recommandées:');
  console.log('   • Remplacer gray-900 par slate-900');
  console.log('   • Remplacer gray-800 par slate-800');
  console.log('   • Remplacer gray-700 par slate-700');
}

console.log('\n' + '='.repeat(60)); 