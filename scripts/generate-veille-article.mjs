import logger from './logger.mjs';
import { retry } from './utils/retry.mjs';

const TOPICS = [
  {
    topic: "Évolutions réglementaires construction",
    category: "reglementation",
    keywords: ["RE2020", "construction", "PACA", "réglementation"]
  },
  {
    topic: "Innovations matériaux biosourcés",
    category: "materiaux",
    keywords: ["biosourcé", "construction", "PACA", "innovation"]
  },
  {
    topic: "Pompes à chaleur et efficacité énergétique",
    category: "energie",
    keywords: ["PAC", "énergie", "PACA", "efficacité"]
  }
];

async function generateArticle() {
  await logger.init();
  await logger.log('Démarrage de la génération d\'article');

  try {
    // Sélection aléatoire d'un sujet
    const selectedTopic = TOPICS[Math.floor(Math.random() * TOPICS.length)];
    await logger.log(`Sujet sélectionné: ${selectedTopic.topic}`);

    // Tentative de génération avec retry
    const article = await retry(
      async () => {
        const response = await fetch(`${process.env.SUPABASE_URL}/functions/v1/generate-veille-article`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`
          },
          body: JSON.stringify(selectedTopic)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
      },
      {
        retries: parseInt(process.env.VEILLE_RETRY_ATTEMPTS || '3'),
        minTimeout: parseInt(process.env.VEILLE_RETRY_DELAY || '1000')
      }
    );

    // Mise à jour des statistiques
    const stats = await logger.getStats();
    await logger.updateStats({
      totalGenerated: (stats.totalGenerated || 0) + 1,
      byCategory: {
        ...stats.byCategory,
        [selectedTopic.category]: (stats.byCategory?.[selectedTopic.category] || 0) + 1
      },
      lastGenerated: new Date().toISOString()
    });

    await logger.log('Article généré avec succès');
    return article;
  } catch (error) {
    await logger.log(`Erreur lors de la génération: ${error.message}`, 'error');
    throw error;
  }
}

// Exécution
if (require.main === module) {
  generateArticle().catch(async (error) => {
    await logger.log(`Échec de la génération: ${error.message}`, 'error');
    process.exit(1);
  });
}

export default generateArticle; 