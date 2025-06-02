import { readFile } from 'fs/promises';
import { join } from 'path';
import { LinkCheckReport } from '../src/utils/linkChecker/types';
import { LinkAlertSystem } from '../src/utils/linkAlerts';

async function main() {
  try {
    // Lire le rapport
    const reportPath = join(process.cwd(), 'link-check-report.json');
    const reportContent = await readFile(reportPath, 'utf-8');
    const report = JSON.parse(reportContent) as LinkCheckReport;

    // Configurer le système d'alerte
    const alertSystem = new LinkAlertSystem(
      5, // Seuil d'alerte
      {
        host: process.env.SMTP_HOST || '',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER || '',
          pass: process.env.SMTP_PASS || ''
        }
      },
      (process.env.ALERT_RECIPIENTS || '').split(',')
    );

    // Vérifier et envoyer l'alerte si nécessaire
    await alertSystem.checkAndAlert(report.results);
    console.log('Alert check completed successfully!');
  } catch (error) {
    console.error('Error sending alert:', error);
    process.exit(1);
  }
}

main(); 