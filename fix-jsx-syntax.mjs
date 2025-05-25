import fs from 'fs';
import path from 'path';

// Configuration des corrections de syntaxe JSX
const JSX_FIXES = [
  // Correction des balises H2 malformées
  { 
    from: /className="text-3xl md:text-4xl font-semibold mb-4 text-foreground"\s+/g, 
    to: 'className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">',
    description: 'Correction balises H2 md:text-4xl'
  },
  { 
    from: /className="text-3xl font-semibold mb-4 text-foreground"\s+/g, 
    to: 'className="text-3xl font-semibold mb-4 text-foreground">',
    description: 'Correction balises H2 simples'
  },
  { 
    from: /className="text-3xl md:text-4xl font-rare tracking-wide mb-4 text-foreground"\s+/g, 
    to: 'className="text-3xl md:text-4xl font-rare tracking-wide mb-4 text-foreground">',
    description: 'Correction balises H2 font-rare'
  },
  
  // Correction spécifique pour les balises motion.h2
  { 
    from: /<motion\.h2 variants={itemVariants} className="text-3xl md:text-4xl font-semibold mb-4 text-foreground"\s+/g, 
    to: '<motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">',
    description: 'Correction balises motion.h2'
  }
];

// Fonction pour traiter un fichier
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let changesMade = 0;
    let appliedFixes = [];

    // Appliquer toutes les corrections
    JSX_FIXES.forEach(fix => {
      const matches = content.match(fix.from);
      if (matches) {
        content = content.replace(fix.from, fix.to);
        changesMade += matches.length;
        appliedFixes.push(fix.description);
      }
    });

    // Sauvegarder seulement si des changements ont été faits
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ ${filePath}: ${changesMade} corrections JSX`);
      appliedFixes.forEach(fix => console.log(`   → ${fix}`));
      return changesMade;
    } else {
      console.log(`⏭️  ${filePath}: syntaxe JSX déjà correcte`);
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
  console.log('🔧 CORRECTION DES ERREURS SYNTAXE JSX - DÉMARRAGE\n');
  
  const extensions = ['.tsx', '.ts', '.jsx', '.js'];
  const srcDir = path.join(process.cwd(), 'src');
  const files = getAllFiles(srcDir, extensions);
  
  console.log(`📁 Fichiers à analyser: ${files.length}`);
  console.log('🔍 Recherche des erreurs de syntaxe JSX...\n');
  
  let totalChanges = 0;
  let processedFiles = 0;
  
  files.forEach(file => {
    const changes = processFile(file);
    totalChanges += changes;
    if (changes > 0) processedFiles++;
  });
  
  console.log('\n🎉 CORRECTION DES ERREURS JSX TERMINÉE !');
  console.log(`📊 Statistiques:`);
  console.log(`   - Fichiers analysés: ${files.length}`);
  console.log(`   - Fichiers corrigés: ${processedFiles}`);
  console.log(`   - Total corrections: ${totalChanges}`);
  
  if (totalChanges > 0) {
    console.log('\n✨ Toutes les erreurs de syntaxe JSX sont corrigées !');
    console.log('🔄 Votre site devrait maintenant se compiler sans erreur.');
  } else {
    console.log('\n✅ Aucune erreur de syntaxe JSX détectée !');
  }
}

main(); 