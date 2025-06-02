import { LinkChecker } from '../utils/linkChecker/LinkChecker';
import fs from 'fs/promises';
import path from 'path';

async function main() {
  try {
    // Charger la configuration
    const configPath = path.join(process.cwd(), 'config', 'link-checker.json');
    const configContent = await fs.readFile(configPath, 'utf-8');
    const config = JSON.parse(configContent);

    // Initialiser le vérificateur de liens
    const checker = new LinkChecker(config);

    // Lancer la vérification
    console.log('Démarrage de la vérification des liens...');
    const report = await checker.checkAllLinks();

    // Sauvegarder le rapport
    const reportPath = path.join(process.cwd(), 'link-check-report.json');
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));

    // Afficher le résumé
    console.log('\nRésumé de la vérification :');
    console.log('------------------------');
    console.log(`Total des liens : ${report.totalLinks}`);
    console.log(`Liens brisés : ${report.brokenLinks}`);
    console.log(`Liens internes : ${report.summary.internalLinks}`);
    console.log(`Liens externes : ${report.summary.externalLinks}`);
    console.log(`Liens internes brisés : ${report.summary.brokenInternalLinks}`);
    console.log(`Liens externes brisés : ${report.summary.brokenExternalLinks}`);

    if (report.brokenLinks > 0) {
      console.log('\nLiens brisés :');
      report.results
        .filter(r => r.is404)
        .forEach(link => {
          console.log(`- ${link.url} (${link.source.file}:${link.source.line})`);
        });
    }

    console.log('\nRapport complet sauvegardé dans : link-check-report.json');
  } catch (error) {
    console.error('Erreur lors de la vérification des liens :', error);
    process.exit(1);
  }
}

main(); 