import fs from 'fs';
import path from 'path';

const PRESTATIONS_DIR = path.join(process.cwd(), 'public', 'images', 'prestations');

function validateImages() {
  const requiredImages = [
    'PGR _37__resultat.webp',
    'PGR_99_resultat.webp',
    'PGR_36_resultat.webp',
    'PGR_34_resultat.webp',
    'PGR_44_resultat.webp',
    'PGR _23__resultat.webp'
  ];

  const missingImages = requiredImages.filter(image => 
    !fs.existsSync(path.join(PRESTATIONS_DIR, image))
  );

  if (missingImages.length > 0) {
    console.error('Images manquantes :', missingImages);
    process.exit(1);
  }
}

validateImages(); 