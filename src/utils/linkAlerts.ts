import { LinkCheckResult } from './linkChecker/types';
import nodemailer from 'nodemailer';

interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export class LinkAlertSystem {
  private readonly alertThreshold: number;
  private readonly emailConfig: EmailConfig;
  private readonly recipients: string[];

  constructor(
    alertThreshold: number = 5,
    emailConfig: EmailConfig,
    recipients: string[] = ['admin@progineer.fr']
  ) {
    this.alertThreshold = alertThreshold;
    this.emailConfig = emailConfig;
    this.recipients = recipients;
  }

  async checkAndAlert(results: LinkCheckResult[]): Promise<void> {
    const brokenLinks = results.filter(r => r.is404);
    
    if (brokenLinks.length >= this.alertThreshold) {
      await this.sendAlert(brokenLinks);
    }
  }
  
  private async sendAlert(brokenLinks: LinkCheckResult[]): Promise<void> {
    const transporter = nodemailer.createTransport(this.emailConfig);
    const message = this.formatAlertMessage(brokenLinks);

    try {
      await transporter.sendMail({
        from: this.emailConfig.auth.user,
        to: this.recipients.join(', '),
        subject: '🚨 Broken Links Alert - Progineer',
        html: message
      });

      console.log('Alert email sent successfully');
    } catch (error) {
      console.error('Error sending alert email:', error);
    }
  }
  
  private formatAlertMessage(links: LinkCheckResult[]): string {
    const internalLinks = links.filter(l => l.isInternal);
    const externalLinks = links.filter(l => !l.isInternal);

    return `
      <h1>Broken Links Alert</h1>
      <p>Found ${links.length} broken links on the website.</p>
      
      <h2>Internal Broken Links (${internalLinks.length})</h2>
      <ul>
        ${internalLinks.map(link => `
          <li>
            <strong>URL:</strong> ${link.url}<br>
            <strong>Status:</strong> ${link.status}<br>
            <strong>Source:</strong> ${link.source.file}:${link.source.line}
          </li>
        `).join('')}
      </ul>

      <h2>External Broken Links (${externalLinks.length})</h2>
      <ul>
        ${externalLinks.map(link => `
          <li>
            <strong>URL:</strong> ${link.url}<br>
            <strong>Status:</strong> ${link.status}<br>
            <strong>Source:</strong> ${link.source.file}:${link.source.line}
          </li>
        `).join('')}
      </ul>

      <p>Please check these links and fix them as soon as possible.</p>
    `;
  }
} 