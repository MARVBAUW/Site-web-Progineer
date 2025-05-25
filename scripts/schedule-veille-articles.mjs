#!/usr/bin/env node

/**
 * Script de planification automatique des articles de veille réglementaire
 * Exécute la génération et publication d'articles les lundi, mercredi et vendredi à 8h00
 */

import cron from 'node-cron';
import fetch from 'node-fetch';
import fs from 'fs/promises';
import path from 'path';

class VeilleScheduler {
  constructor() {
    this.apiEndpoint = process.env.SUPABASE_URL || 'http://localhost:54321';
    this.apiKey = process.env.SUPABASE_ANON_KEY || '';
    this.logFile = path.join(process.cwd(), 'logs', 'veille-scheduler.log');
    this.isRunning = false;
  }

  async init() {
    // Créer le dossier de logs s'il n'existe pas
    await this.ensureLogDirectory();
    
    // Programmer les tâches
    this.scheduleArticleGeneration();
    
    await this.log('Scheduler de veille réglementaire démarré');
    console.log('🚀 Scheduler de veille réglementaire démarré');
    console.log('📅 Articles programmés : Lundi, Mercredi, Vendredi à 8h00');
  }

  async ensureLogDirectory() {
    try {
      await fs.mkdir(path.dirname(this.logFile), { recursive: true });
    } catch (error) {
      console.error('Erreur lors de la création du dossier logs:', error);
    }
  }

  scheduleArticleGeneration() {
    // Programmer pour lundi, mercredi, vendredi à 8h00
    // Format cron: seconde minute heure jour mois jour_semaine
    const schedule = '0 0 8 * * 1,3,5'; // 8h00 les lundi (1), mercredi (3), vendredi (5)

    cron.schedule(schedule, async () => {
      if (this.isRunning) {
        await this.log('Génération déjà en cours, passage ignoré');
        return;
      }

      this.isRunning = true;
      await this.log('Début de génération automatique d\'article');
      
      try {
        await this.generateAndPublishArticle();
        await this.log('Article généré et publié avec succès');
      } catch (error) {
        await this.log(`Erreur lors de la génération: ${error.message}`);
        console.error('Erreur:', error);
      } finally {
        this.isRunning = false;
      }
    }, {
      timezone: "Europe/Paris"
    });

    // Tâche de test (optionnelle) - tous les jours à 9h00 en mode développement
    if (process.env.NODE_ENV === 'development') {
      cron.schedule('0 0 9 * * *', async () => {
        await this.log('Test de génération d\'article (mode développement)');
        console.log('🧪 Test de génération d\'article');
      }, {
        timezone: "Europe/Paris"
      });
    }
  }

  async generateAndPublishArticle() {
    try {
      // 1. Obtenir des suggestions de sujets
      const topics = await this.getTopicSuggestions();
      
      if (topics.length === 0) {
        throw new Error('Aucun sujet disponible pour la génération');
      }

      // 2. Sélectionner un sujet aléatoirement
      const selectedTopic = topics[Math.floor(Math.random() * topics.length)];
      
      // 3. Générer l'article
      const article = await this.generateArticle(selectedTopic);
      
      if (!article.success) {
        throw new Error(article.error || 'Échec de génération d\'article');
      }

      // 4. Publier l'article
      const published = await this.publishArticle(article.article);
      
      if (!published) {
        throw new Error('Échec de publication de l\'article');
      }

      await this.log(`Article publié: "${article.article.title}"`);
      console.log(`✅ Article publié: "${article.article.title}"`);

      // 5. Mettre à jour les statistiques
      await this.updateStats(article.article);

    } catch (error) {
      await this.log(`Erreur lors de la génération/publication: ${error.message}`);
      throw error;
    }
  }

  async getTopicSuggestions() {
    // Sujets prédéfinis avec rotation
    const allTopics = [
      {
        topic: 'RE2020 évolutions 2025',
        category: 'reglementation',
        keywords: ['RE2020', 'réglementation environnementale', 'construction neuve', 'seuils carbone']
      },
      {
        topic: 'DPE et audit énergétique',
        category: 'energie',
        keywords: ['DPE', 'audit énergétique', 'passoires thermiques', 'rénovation énergétique']
      },
      {
        topic: 'Matériaux biosourcés innovation',
        category: 'materiaux',
        keywords: ['matériaux biosourcés', 'construction durable', 'innovation', 'carbone biogénique']
      },
      {
        topic: 'Urbanisme et dématérialisation',
        category: 'urbanisme',
        keywords: ['urbanisme', 'dématérialisation', 'permis construire', 'autorisations']
      },
      {
        topic: 'Certificats économies énergie',
        category: 'financement',
        keywords: ['CEE', 'certificats économies énergie', 'financement', 'efficacité énergétique']
      },
      {
        topic: 'Décret tertiaire obligations',
        category: 'reglementation',
        keywords: ['décret tertiaire', 'éco énergie tertiaire', 'bâtiments tertiaires', 'OPERAT']
      },
      {
        topic: 'Normes acoustiques évolution',
        category: 'reglementation',
        keywords: ['normes acoustiques', 'isolation phonique', 'confort sonore', 'réglementation']
      },
      {
        topic: 'Zones revitalisation centres-villes',
        category: 'urbanisme',
        keywords: ['zones revitalisation', 'centres-villes', 'rénovation urbaine', 'Denormandie']
      }
    ];

    // Obtenir les articles déjà publiés pour éviter les doublons
    const publishedTopics = await this.getPublishedTopics();
    
    // Filtrer les sujets non encore traités
    const availableTopics = allTopics.filter(topic => 
      !publishedTopics.some(published => 
        published.toLowerCase().includes(topic.topic.toLowerCase().split(' ')[0])
      )
    );

    return availableTopics.length > 0 ? availableTopics : allTopics.slice(0, 3);
  }

  async getPublishedTopics() {
    try {
      // En production, ceci interrogerait la base de données
      // Pour la simulation, on retourne une liste vide
      return [];
    } catch (error) {
      await this.log(`Erreur lors de la récupération des sujets publiés: ${error.message}`);
      return [];
    }
  }

  async generateArticle(topicData) {
    try {
      const response = await fetch(`${this.apiEndpoint}/functions/v1/generate-veille-article`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(topicData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      await this.log(`Erreur lors de l'appel API de génération: ${error.message}`);
      
      // Fallback: génération locale simplifiée
      return this.generateArticleLocally(topicData);
    }
  }

  async generateArticleLocally(topicData) {
    // Génération locale simplifiée en cas d'échec de l'API
    const article = {
      id: `veille-${Date.now()}`,
      title: `${topicData.topic} : Actualités Construction PACA`,
      excerpt: `Découvrez les dernières évolutions concernant ${topicData.topic} et leur impact sur vos projets en région PACA.`,
      content: this.generateSimpleContent(topicData.topic),
      category: topicData.category,
      priority: 'moyenne',
      tags: topicData.keywords,
      publishedAt: new Date().toISOString().split('T')[0],
      readTime: '8 min',
      views: 0,
      author: 'Équipe Progineer',
      sources: [],
      seoKeywords: topicData.keywords
    };

    return { success: true, article };
  }

  generateSimpleContent(topic) {
    return `
      <h3>Actualités ${topic}</h3>
      <p>Les évolutions récentes concernant ${topic} impactent directement les professionnels de la construction en région PACA. Cette analyse vous présente les points clés à retenir.</p>
      
      <h4>Points essentiels</h4>
      <ul>
        <li>Évolution réglementaire majeure</li>
        <li>Impact sur les projets en cours</li>
        <li>Recommandations pratiques</li>
        <li>Échéances à respecter</li>
      </ul>
      
      <h4>Recommandations pour les professionnels</h4>
      <p>Il est essentiel de s'adapter rapidement à ces évolutions pour maintenir la conformité de vos projets et optimiser vos pratiques professionnelles.</p>
    `;
  }

  async publishArticle(article) {
    try {
      // En production, ceci publierait l'article sur le site
      // Pour la simulation, on sauvegarde localement
      await this.saveArticleLocally(article);
      return true;
    } catch (error) {
      await this.log(`Erreur lors de la publication: ${error.message}`);
      return false;
    }
  }

  async saveArticleLocally(article) {
    try {
      const articlesDir = path.join(process.cwd(), 'generated-articles');
      await fs.mkdir(articlesDir, { recursive: true });
      
      const filename = `${article.id}.json`;
      const filepath = path.join(articlesDir, filename);
      
      await fs.writeFile(filepath, JSON.stringify(article, null, 2));
      await this.log(`Article sauvegardé localement: ${filename}`);
    } catch (error) {
      await this.log(`Erreur lors de la sauvegarde locale: ${error.message}`);
      throw error;
    }
  }

  async updateStats(article) {
    try {
      const statsFile = path.join(process.cwd(), 'logs', 'veille-stats.json');
      let stats = { totalGenerated: 0, byCategory: {}, lastGenerated: null };
      
      try {
        const existingStats = await fs.readFile(statsFile, 'utf-8');
        stats = JSON.parse(existingStats);
      } catch {
        // Fichier n'existe pas encore
      }

      stats.totalGenerated += 1;
      stats.byCategory[article.category] = (stats.byCategory[article.category] || 0) + 1;
      stats.lastGenerated = new Date().toISOString();

      await fs.writeFile(statsFile, JSON.stringify(stats, null, 2));
    } catch (error) {
      await this.log(`Erreur lors de la mise à jour des stats: ${error.message}`);
    }
  }

  async log(message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}\n`;
    
    try {
      await fs.appendFile(this.logFile, logEntry);
    } catch (error) {
      console.error('Erreur lors de l\'écriture du log:', error);
    }
  }

  // Méthode pour tester la génération manuellement
  async testGeneration() {
    console.log('🧪 Test de génération d\'article...');
    
    try {
      await this.generateAndPublishArticle();
      console.log('✅ Test réussi !');
    } catch (error) {
      console.error('❌ Test échoué:', error.message);
    }
  }

  // Méthode pour arrêter le scheduler
  stop() {
    console.log('🛑 Arrêt du scheduler de veille réglementaire');
    process.exit(0);
  }
}

// Initialisation et démarrage
const scheduler = new VeilleScheduler();

// Gestion des signaux pour arrêt propre
process.on('SIGINT', () => scheduler.stop());
process.on('SIGTERM', () => scheduler.stop());

// Démarrage du scheduler
scheduler.init().catch(error => {
  console.error('Erreur lors du démarrage du scheduler:', error);
  process.exit(1);
});

// Export pour utilisation en module
export default VeilleScheduler; 