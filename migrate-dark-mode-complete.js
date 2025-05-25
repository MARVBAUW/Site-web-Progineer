const fs = require('fs');
const path = require('path');

// Configuration des remplacements pour le mode dark
const DARK_MODE_REPLACEMENTS = [
  // === TEXTES ===
  { from: /text-gray-900\s+dark:text-white/g, to: 'text-foreground' },
  { from: /text-gray-900\s+dark:text-gray-100/g, to: 'text-foreground' },
  { from: /text-gray-800\s+dark:text-white/g, to: 'text-foreground' },
  { from: /text-gray-800\s+dark:text-gray-100/g, to: 'text-foreground' },
  { from: /text-gray-700\s+dark:text-gray-200/g, to: 'text-muted-foreground' },
  { from: /text-gray-600\s+dark:text-gray-300/g, to: 'text-muted-foreground' },
  { from: /text-gray-500\s+dark:text-gray-400/g, to: 'text-low-contrast' },
  
  // Textes standalone qui ont été oubliés
  { from: /text-gray-900(?!\s+dark:)/g, to: 'text-foreground' },
  { from: /text-gray-800(?!\s+dark:)/g, to: 'text-foreground' },
  { from: /text-gray-700(?!\s+dark:)/g, to: 'text-muted-foreground' },
  { from: /text-gray-600(?!\s+dark:)/g, to: 'text-muted-foreground' },
  { from: /text-gray-500(?!\s+dark:)/g, to: 'text-low-contrast' },

  // === ARRIÈRE-PLANS ===
  { from: /bg-white\s+dark:bg-gray-950/g, to: 'bg-background' },
  { from: /bg-white\s+dark:bg-gray-900/g, to: 'bg-background' },
  { from: /bg-white\s+dark:bg-gray-800/g, to: 'bg-card' },
  { from: /bg-gray-50\s+dark:bg-gray-800/g, to: 'bg-muted' },
  { from: /bg-gray-100\s+dark:bg-gray-800/g, to: 'bg-muted' },
  { from: /bg-gray-50\s+dark:bg-gray-700\/50/g, to: 'bg-muted/50' },
  
  // Arrière-plans standalone
  { from: /bg-white(?!\s+dark:)/g, to: 'bg-card' },
  { from: /bg-gray-50(?!\s+dark:)/g, to: 'bg-muted/50' },
  { from: /bg-gray-100(?!\s+dark:)/g, to: 'bg-muted' },

  // === BORDURES ===
  { from: /border-gray-200\s+dark:border-gray-700/g, to: 'border-border' },
  { from: /border-gray-200\s+dark:border-gray-600/g, to: 'border-border' },
  { from: /border-gray-100\s+dark:border-gray-800/g, to: 'border-border' },
  { from: /border-gray-200(?!\s+dark:)/g, to: 'border-border' },
  { from: /border-gray-300(?!\s+dark:)/g, to: 'border-border' },

  // === HOVERS ===
  { from: /hover:bg-gray-50\s+dark:hover:bg-gray-800/g, to: 'hover:bg-muted/50' },
  { from: /hover:bg-gray-100\s+dark:hover:bg-gray-700/g, to: 'hover:bg-muted' },
  { from: /hover:text-gray-700\s+dark:hover:text-white/g, to: 'hover:text-foreground' },
  { from: /hover:text-gray-800\s+dark:hover:text-white/g, to: 'hover:text-foreground' },

  // === CLASSES SPÉCIALES ===
  // Gradients en mode dark
  { from: /from-khaki-50\s+to-white\s+dark:from-gray-900\s+dark:to-gray-950/g, to: 'from-khaki-50 to-white dark:from-khaki-950 dark:to-background' },
  
  // Badges et labels
  { from: /bg-khaki-100\s+text-khaki-800\s+dark:bg-khaki-900\s+dark:text-khaki-100/g, to: 'bg-primary/10 text-primary' },
  
  // Navbar fixes
  { from: /bg-white\/95\s+dark:bg-gray-900\/95/g, to: 'bg-background/95' },
  { from: /border-stone-200\/50\s+dark:border-gray-700\/50/g, to: 'border-border/50' },
  
  // Autres classes communes
  { from: /text-stone-600\s+dark:text-gray-300/g, to: 'text-muted-foreground' },
  { from: /text-stone-800\s+dark:text-gray-200/g, to: 'text-foreground' },
];

// Fonction pour traiter un fichier
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let changesMade = 0;

    // Appliquer tous les remplacements
    DARK_MODE_REPLACEMENTS.forEach(replacement => {
      const matches = content.match(replacement.from);
      if (matches) {
        content = content.replace(replacement.from, replacement.to);
        changesMade += matches.length;
      }
    });

    // Nettoyer les espaces multiples
    content = content.replace(/\s+/g, ' ');
    content = content.replace(/className="([^"]*)\s+([^"]*)"/g, (match, p1, p2) => {
      const classes = (p1 + ' ' + p2).split(' ').filter(c => c.trim() !== '').join(' ');
      return `className="${classes}"`;
    });

    // Sauvegarder seulement si des changements ont été faits
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ ${filePath}: ${changesMade} remplacements effectués`);
      return changesMade;
    } else {
      console.log(`⏭️  ${filePath}: aucun changement nécessaire`);
      return 0;
    }
  } catch (error) {
    console.error(`❌ Erreur lors du traitement de ${filePath}:`, error.message);
    return 0;
  }
}

// Fonction pour obtenir tous les fichiers à traiter
function getAllFiles(dir, extensions) {
  let files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !['node_modules', '.git', 'dist', 'build'].includes(item)) {
        walkDir(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(fullPath);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Exécution du script
function main() {
  console.log('🌙 MIGRATION COMPLÈTE DU MODE DARK - DÉMARRAGE\n');
  
  const extensions = ['.tsx', '.ts', '.jsx', '.js'];
  const srcDir = path.join(process.cwd(), 'src');
  const files = getAllFiles(srcDir, extensions);
  
  console.log(`📁 Fichiers trouvés: ${files.length}`);
  console.log('🔄 Traitement en cours...\n');
  
  let totalChanges = 0;
  let processedFiles = 0;
  
  files.forEach(file => {
    const changes = processFile(file);
    totalChanges += changes;
    if (changes > 0) processedFiles++;
  });
  
  console.log('\n🎉 MIGRATION TERMINÉE !');
  console.log(`📊 Statistiques:`);
  console.log(`   - Fichiers traités: ${files.length}`);
  console.log(`   - Fichiers modifiés: ${processedFiles}`);
  console.log(`   - Total changements: ${totalChanges}`);
  
  if (totalChanges > 0) {
    console.log('\n✨ Le mode dark est maintenant correctement configuré !');
    console.log('🔄 Redémarrez votre serveur de développement pour voir les changements.');
  }
}

if (require.main === module) {
  main();
}

module.exports = { processFile, getAllFiles, DARK_MODE_REPLACEMENTS }; 