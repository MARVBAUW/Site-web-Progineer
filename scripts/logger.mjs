import fs from 'fs/promises';
import path from 'path';

class Logger {
  constructor() {
    this.logDir = path.join(process.cwd(), 'logs');
    this.logFile = path.join(this.logDir, 'veille-scheduler.log');
    this.errorFile = path.join(this.logDir, 'veille-errors.log');
    this.statsFile = path.join(this.logDir, 'veille-stats.json');
  }

  async init() {
    try {
      await fs.mkdir(this.logDir, { recursive: true });
      await this.log('Logger initialisé', 'info');
    } catch (error) {
      console.error('Erreur lors de l\'initialisation du logger:', error);
    }
  }

  async log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}\n`;
    
    try {
      await fs.appendFile(this.logFile, logEntry);
      if (type === 'error') {
        await fs.appendFile(this.errorFile, logEntry);
      }
    } catch (error) {
      console.error('Erreur lors de l\'écriture du log:', error);
    }
  }

  async updateStats(stats) {
    try {
      const currentStats = await this.getStats();
      const updatedStats = {
        ...currentStats,
        ...stats,
        lastUpdated: new Date().toISOString()
      };
      await fs.writeFile(this.statsFile, JSON.stringify(updatedStats, null, 2));
    } catch (error) {
      await this.log(`Erreur lors de la mise à jour des stats: ${error.message}`, 'error');
    }
  }

  async getStats() {
    try {
      const statsContent = await fs.readFile(this.statsFile, 'utf-8');
      return JSON.parse(statsContent);
    } catch (error) {
      return {
        totalGenerated: 0,
        byCategory: {},
        lastGenerated: null,
        lastUpdated: new Date().toISOString()
      };
    }
  }
}

export default new Logger(); 