import { VeilleArticle, ArticleCategory } from '@/data/veille/veilleData';

interface ArticleGenerationRequest {
  topic: string;
  category: ArticleCategory;
  keywords: string[];
  sources?: string[];
}

interface ArticleGenerationResponse {
  success: boolean;
  article?: VeilleArticle;
  error?: string;
}

/**
 * Service de gestion de la veille réglementaire automatisée
 * Gère la génération, la publication et la planification des articles
 */
export class VeilleService {
  private static instance: VeilleService;
  private apiEndpoint = '/api/veille';

  private constructor() {}

  public static getInstance(): VeilleService {
    if (!VeilleService.instance) {
      VeilleService.instance = new VeilleService();
    }
    return VeilleService.instance;
  }

  /**
   * Génère un nouvel article via l'IA
   */
  async generateArticle(request: ArticleGenerationRequest): Promise<ArticleGenerationResponse> {
    try {
      const response = await fetch(`${this.apiEndpoint}/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erreur lors de la génération d\'article:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      };
    }
  }

  /**
   * Publie un article sur le site
   */
  async publishArticle(article: VeilleArticle): Promise<boolean> {
    try {
      const response = await fetch(`${this.apiEndpoint}/publish`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(article),
      });

      return response.ok;
    } catch (error) {
      console.error('Erreur lors de la publication:', error);
      return false;
    }
  }

  /**
   * Récupère les sujets tendances pour la génération d'articles
   */
  async getTrendingTopics(): Promise<string[]> {
    try {
      const response = await fetch(`${this.apiEndpoint}/trending-topics`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.topics || [];
    } catch (error) {
      console.error('Erreur lors de la récupération des sujets tendances:', error);
      return [];
    }
  }

  /**
   * Vérifie les doublons avant publication
   */
  async checkDuplicates(title: string, keywords: string[]): Promise<boolean> {
    try {
      const response = await fetch(`${this.apiEndpoint}/check-duplicates`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, keywords }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.isDuplicate || false;
    } catch (error) {
      console.error('Erreur lors de la vérification des doublons:', error);
      return false;
    }
  }

  /**
   * Programme la publication automatique d'articles
   */
  async scheduleAutomaticPublication(): Promise<void> {
    const schedule = {
      monday: { hour: 8, minute: 0 },
      wednesday: { hour: 8, minute: 0 },
      friday: { hour: 8, minute: 0 }
    };

    try {
      await fetch(`${this.apiEndpoint}/schedule`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(schedule),
      });
    } catch (error) {
      console.error('Erreur lors de la programmation:', error);
    }
  }

  /**
   * Optimise le SEO d'un article
   */
  optimizeArticleSEO(article: Partial<VeilleArticle>): Partial<VeilleArticle> {
    const optimized = { ...article };

    // Optimisation du titre (50-60 caractères)
    if (optimized.title && optimized.title.length > 60) {
      optimized.title = optimized.title.substring(0, 57) + '...';
    }

    // Optimisation de l'excerpt (150-160 caractères)
    if (optimized.excerpt && optimized.excerpt.length > 160) {
      optimized.excerpt = optimized.excerpt.substring(0, 157) + '...';
    }

    // Génération de mots-clés SEO si manquants
    if (!optimized.seoKeywords && optimized.tags) {
      optimized.seoKeywords = optimized.tags.map(tag => 
        `${tag} PACA`
      ).concat([
        'construction PACA',
        'rénovation Marseille',
        'maître d\'œuvre PACA'
      ]);
    }

    return optimized;
  }

  /**
   * Génère des suggestions de sujets basées sur l'actualité
   */
  async generateTopicSuggestions(): Promise<ArticleGenerationRequest[]> {
    const categories: ArticleCategory[] = [
      'reglementation',
      'materiaux',
      'energie',
      'urbanisme',
      'environnement',
      'financement'
    ];

    const suggestions: ArticleGenerationRequest[] = [];

    for (const category of categories) {
      const topics = await this.getCategoryTopics(category);
      
      for (const topic of topics.slice(0, 2)) { // 2 sujets par catégorie max
        suggestions.push({
          topic,
          category,
          keywords: this.generateKeywords(topic, category),
        });
      }
    }

    return suggestions;
  }

  /**
   * Récupère les sujets d'actualité pour une catégorie
   */
  private async getCategoryTopics(category: ArticleCategory): Promise<string[]> {
    const topicsByCategory = {
      reglementation: [
        'Nouvelles normes RE2020',
        'Évolution DPE 2025',
        'Réglementation acoustique',
        'Normes accessibilité'
      ],
      materiaux: [
        'Matériaux biosourcés',
        'Innovation isolation',
        'Béton bas carbone',
        'Recyclage matériaux'
      ],
      energie: [
        'Pompes à chaleur',
        'Photovoltaïque',
        'Rénovation énergétique',
        'Géothermie'
      ],
      urbanisme: [
        'PLU intercommunal',
        'Densification urbaine',
        'Zones revitalisation',
        'Permis construire'
      ],
      environnement: [
        'Biodiversité urbaine',
        'Gestion eaux pluviales',
        'Îlots chaleur',
        'Qualité air intérieur'
      ],
      financement: [
        'MaPrimeRénov',
        'CEE évolution',
        'PTZ 2025',
        'Aides collectivités'
      ]
    };

    return topicsByCategory[category] || [];
  }

  /**
   * Génère des mots-clés optimisés pour un sujet et une catégorie
   */
  private generateKeywords(topic: string, category: ArticleCategory): string[] {
    const baseKeywords = [
      `${topic} PACA`,
      `${topic} Marseille`,
      `${category} construction`,
      'maître d\'œuvre PACA'
    ];

    const categoryKeywords = {
      reglementation: ['réglementation construction', 'normes bâtiment'],
      materiaux: ['matériaux construction', 'innovation bâtiment'],
      energie: ['efficacité énergétique', 'transition énergétique'],
      urbanisme: ['urbanisme PACA', 'aménagement territoire'],
      environnement: ['construction durable', 'environnement bâtiment'],
      financement: ['aides construction', 'financement travaux']
    };

    return [...baseKeywords, ...(categoryKeywords[category] || [])];
  }
}

export default VeilleService; 