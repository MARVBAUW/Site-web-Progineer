#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔧 **CORRECTION AUTOMATIQUE DES PROBLÈMES DE CONTRASTE MODE DARK**\n');

// Fonction pour rechercher des fichiers récursivement
function findFiles(dir, extensions, files = []) {
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', 'dist', '.git', '.next'].includes(item)) {
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

// Corrections à appliquer
const corrections = [
  {
    pattern: /className="([^"]*?)text-foreground(?!\s+dark:)([^"]*?)"/g,
    replacement: 'className="$1text-gray-900 dark:text-white$2"',
    description: 'text-foreground → text-gray-900 dark:text-white'
  },
  {
    pattern: /className="([^"]*?)text-muted-foreground(?!\s+dark:)([^"]*?)"/g,
    replacement: 'className="$1text-gray-600 dark:text-gray-300$2"',
    description: 'text-muted-foreground → text-gray-600 dark:text-gray-300'
  },
  // Corrections pour les cas où les classes sont dans des template literals
  {
    pattern: /className=\{`([^`]*?)text-foreground(?!\s+dark:)([^`]*?)`\}/g,
    replacement: 'className={`$1text-gray-900 dark:text-white$2`}',
    description: 'text-foreground (template) → text-gray-900 dark:text-white'
  },
  {
    pattern: /className=\{`([^`]*?)text-muted-foreground(?!\s+dark:)([^`]*?)`\}/g,
    replacement: 'className={`$1text-gray-600 dark:text-gray-300$2`}',
    description: 'text-muted-foreground (template) → text-gray-600 dark:text-gray-300'
  },
  // Corrections pour les concaténations de strings
  {
    pattern: /(["\`])([^"`]*?)text-foreground(?!\s+dark:)([^"`]*?)\1/g,
    replacement: '$1$2text-gray-900 dark:text-white$3$1',
    description: 'text-foreground (concat) → text-gray-900 dark:text-white'
  },
  {
    pattern: /(["\`])([^"`]*?)text-muted-foreground(?!\s+dark:)([^"`]*?)\1/g,
    replacement: '$1$2text-gray-600 dark:text-gray-300$3$1',
    description: 'text-muted-foreground (concat) → text-gray-600 dark:text-gray-300'
  }
];

// Statistiques
let totalFiles = 0;
let modifiedFiles = 0;
let totalReplacements = 0;

const files = findFiles('./src', ['.tsx', '.ts', '.jsx', '.js']);
totalFiles = files.length;

console.log(`📁 **${totalFiles} fichiers trouvés**\n`);

for (const file of files) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    let fileReplacements = 0;
    
    // Appliquer toutes les corrections
    for (const correction of corrections) {
      const matches = content.match(correction.pattern);
      if (matches) {
        content = content.replace(correction.pattern, correction.replacement);
        fileReplacements += matches.length;
      }
    }
    
    // Si le fichier a été modifié, le sauvegarder
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      modifiedFiles++;
      totalReplacements += fileReplacements;
      
      console.log(`✅ ${path.relative('./src', file)} - ${fileReplacements} corrections`);
    }
  } catch (error) {
    console.error(`❌ Erreur avec ${file}:`, error.message);
  }
}

console.log('\n' + '='.repeat(50));
console.log('📊 **RÉSUMÉ DES CORRECTIONS**');
console.log('='.repeat(50));
console.log(`📁 Fichiers analysés: ${totalFiles}`);
console.log(`✅ Fichiers modifiés: ${modifiedFiles}`);
console.log(`🔧 Total corrections: ${totalReplacements}`);
console.log('\n🎯 **CORRECTIONS APPLIQUÉES:**');

for (const correction of corrections) {
  console.log(`   • ${correction.description}`);
}

console.log('\n✨ **PROBLÈMES DE CONTRASTE RÉSOLUS !**');
console.log('📋 **Prochaines étapes:**');
console.log('   1. Vérifier visuellement la page principale');
console.log('   2. Tester le basculement entre modes clair/dark');
console.log('   3. Valider les contrastes sur d\'autres pages');

process.exit(0); 