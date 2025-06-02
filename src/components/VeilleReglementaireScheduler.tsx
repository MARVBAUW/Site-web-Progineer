import { useState, useEffect } from 'react';
import { useVeilleReglementaire } from '@/hooks/useVeilleReglementaire';

interface Article {
  id: string;
  title: string;
  content: string;
  summary: string;
  keywords: string[];
  created_at: string;
  source: string;
  status: 'draft' | 'published';
}

export const VeilleReglementaireScheduler = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const { generateArticle, getArticles, publishArticle } = useVeilleReglementaire();

  // Charger les articles au montage
  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      const data = await getArticles();
      setArticles(data);
    } catch (error) {
      console.error('Erreur lors du chargement des articles:', error);
    }
  };

  const handleGenerateArticle = async () => {
    setLoading(true);
    try {
      const topics = [
        "Réglementation thermique RE2020 : dernières évolutions",
        "Innovations en matière de construction durable",
        "Aides et financements pour la rénovation énergétique",
        "Urbanisme et aménagement en région PACA",
        "Nouvelles normes de sécurité incendie",
        "Matériaux biosourcés et construction écologique",
        "Économie circulaire dans le bâtiment"
      ];

      // Sélectionner un sujet aléatoire
      const randomTopic = topics[Math.floor(Math.random() * topics.length)];
      
      const result = await generateArticle(randomTopic, 'scheduled');
      await loadArticles(); // Recharger la liste
    } catch (error) {
      console.error('Erreur lors de la génération:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePublish = async (articleId: string) => {
    try {
      await publishArticle(articleId);
      await loadArticles(); // Recharger la liste
    } catch (error) {
      console.error('Erreur lors de la publication:', error);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Veille Réglementaire</h2>
        <button
          onClick={handleGenerateArticle}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? 'Génération...' : 'Générer un article'}
        </button>
      </div>

      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="border rounded-lg p-4 bg-white shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-600 mb-2">{article.summary}</p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                {new Date(article.created_at).toLocaleDateString()}
              </div>
              <div className="space-x-2">
                {article.status === 'draft' && (
                  <button
                    onClick={() => handlePublish(article.id)}
                    className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Publier
                  </button>
                )}
                <span className={`px-2 py-1 rounded-full text-xs ${
                  article.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {article.status === 'published' ? 'Publié' : 'Brouillon'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 