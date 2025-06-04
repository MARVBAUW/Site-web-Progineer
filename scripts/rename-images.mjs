import fs from 'fs';
import path from 'path';

const PRESTATIONS_DIR = path.join(process.cwd(), 'public', 'images', 'prestations');

function cleanFileName(fileName) {
  // Supprimer les espaces et les doubles underscores
  return fileName
    .replace(/\s+/g, '')  // Supprimer tous les espaces
    .replace(/_{2,}/g, '_')  // Remplacer les doubles underscores par un seul
    .replace(/PGR_(\d+)_resultat\.webp/, 'PGR_$1_resultat.webp');  // Standardiser le format
}

function renameImages() {
  const files = fs.readdirSync(PRESTATIONS_DIR);
  
  files.forEach(file => {
    if (file.endsWith('.webp')) {
      const oldPath = path.join(PRESTATIONS_DIR, file);
      const newFileName = cleanFileName(file);
      const newPath = path.join(PRESTATIONS_DIR, newFileName);
      
      if (oldPath !== newPath) {
        console.log(`Renommage de ${file} vers ${newFileName}`);
        fs.renameSync(oldPath, newPath);
      }
    }
  });
}

renameImages(); 