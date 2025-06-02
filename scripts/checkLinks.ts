import { LinkChecker } from '../src/utils/linkChecker/LinkChecker';
import { writeFile } from 'fs/promises';
import { join } from 'path';

async function generateHtmlReport(report: any) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Link Check Report</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          .summary { margin-bottom: 20px; }
          .broken-links { color: red; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #f2f2f2; }
          tr:nth-child(even) { background-color: #f9f9f9; }
        </style>
      </head>
      <body>
        <h1>Link Check Report</h1>
        <div class="summary">
          <h2>Summary</h2>
          <p>Total Links: ${report.totalLinks}</p>
          <p>Broken Links: ${report.brokenLinks}</p>
          <p>Internal Links: ${report.summary.internalLinks}</p>
          <p>External Links: ${report.summary.externalLinks}</p>
          <p>Broken Internal Links: ${report.summary.brokenInternalLinks}</p>
          <p>Broken External Links: ${report.summary.brokenExternalLinks}</p>
        </div>
        <div class="broken-links">
          <h2>Broken Links</h2>
          <table>
            <tr>
              <th>URL</th>
              <th>Status</th>
              <th>Source File</th>
              <th>Line</th>
            </tr>
            ${report.results
              .filter((r: any) => r.is404)
              .map(
                (r: any) => `
                <tr>
                  <td>${r.url}</td>
                  <td>${r.status}</td>
                  <td>${r.source.file}</td>
                  <td>${r.source.line}</td>
                </tr>
              `
              )
              .join('')}
          </table>
        </div>
      </body>
    </html>
  `;

  await writeFile('link-check-report.html', html);
}

async function main() {
  try {
    console.log('Starting link check...');
    const checker = new LinkChecker();
    const report = await checker.checkAllLinks();
    
    // Sauvegarde du rapport JSON
    await writeFile(
      'link-check-report.json',
      JSON.stringify(report, null, 2)
    );

    // Génération du rapport HTML
    await generateHtmlReport(report);

    console.log('Link check completed successfully!');
    console.log(`Found ${report.brokenLinks} broken links out of ${report.totalLinks} total links.`);
    
    if (report.brokenLinks > 0) {
      process.exit(1);
    }
  } catch (error) {
    console.error('Error during link check:', error);
    process.exit(1);
  }
}

main(); 