import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { LinkCheckReport } from '../src/utils/linkChecker/types';

async function generateHtmlReport(report: LinkCheckReport) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Link Check Report - ${new Date().toLocaleDateString()}</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            margin: 20px;
            line-height: 1.6;
          }
          .summary { 
            margin-bottom: 20px;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 8px;
          }
          .broken-links { 
            color: #dc3545;
          }
          table { 
            border-collapse: collapse; 
            width: 100%;
            margin-top: 20px;
          }
          th, td { 
            border: 1px solid #dee2e6; 
            padding: 12px; 
            text-align: left; 
          }
          th { 
            background-color: #f8f9fa;
            font-weight: 600;
          }
          tr:nth-child(even) { 
            background-color: #f8f9fa; 
          }
          .status-404 {
            color: #dc3545;
            font-weight: bold;
          }
          .status-200 {
            color: #28a745;
          }
          .timestamp {
            color: #6c757d;
            font-size: 0.9em;
          }
        </style>
      </head>
      <body>
        <h1>Link Check Report</h1>
        <p class="timestamp">Generated on: ${report.timestamp.toLocaleString()}</p>
        
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
              <th>Type</th>
            </tr>
            ${report.results
              .filter(r => r.is404)
              .map(r => `
                <tr>
                  <td>${r.url}</td>
                  <td class="status-404">${r.status}</td>
                  <td>${r.source.file}</td>
                  <td>${r.source.line}</td>
                  <td>${r.isInternal ? 'Internal' : 'External'}</td>
                </tr>
              `)
              .join('')}
          </table>
        </div>

        <div class="working-links">
          <h2>Working Links</h2>
          <table>
            <tr>
              <th>URL</th>
              <th>Status</th>
              <th>Source File</th>
              <th>Line</th>
              <th>Type</th>
            </tr>
            ${report.results
              .filter(r => !r.is404)
              .map(r => `
                <tr>
                  <td>${r.url}</td>
                  <td class="status-200">${r.status}</td>
                  <td>${r.source.file}</td>
                  <td>${r.source.line}</td>
                  <td>${r.isInternal ? 'Internal' : 'External'}</td>
                </tr>
              `)
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
    const reportPath = join(process.cwd(), 'link-check-report.json');
    const reportContent = await readFile(reportPath, 'utf-8');
    const report = JSON.parse(reportContent) as LinkCheckReport;

    await generateHtmlReport(report);
    console.log('HTML report generated successfully!');
  } catch (error) {
    console.error('Error generating report:', error);
    process.exit(1);
  }
}

main(); 