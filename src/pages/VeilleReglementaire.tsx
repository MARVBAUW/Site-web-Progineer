import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Iridescence } from '@/components/ui/iridescence';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { veilleArticles, type VeilleArticle } from '@/data/veille/veilleData';
import WorkspaceArticleDetail from '@/components/workspace/WorkspaceArticleDetail';

interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  date: string;
  category: string;
  source: string;
  readTime: string;
  keywords: string[];
  resources?: {
    name: string;
    url: string;
    type: string;
    description?: string;
  }[];
  slug: string;
  priority?: string;
  tags?: string[];
  views?: number;
  author?: string;
  isNew?: boolean;
  isPremium?: boolean;
}

const VeilleReglementaire: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    const loadArticles = () => {
      try {
        const loadedArticles = veilleArticles
          .map((veilleArticle: VeilleArticle) => ({
            id: veilleArticle.id,
            title: veilleArticle.title,
            description: veilleArticle.excerpt,
            content: veilleArticle.content,
            date: veilleArticle.publishedAt,
            category: veilleArticle.category,
            source: veilleArticle.sources?.[0]?.title || 'Source non spécifiée',
            readTime: veilleArticle.readTime,
            keywords: veilleArticle.seoKeywords || [],
            resources: veilleArticle.sources?.map((source) => ({
              name: source.title,
              url: source.url,
              type: 'link',
              description: source.title
            })),
            slug: veilleArticle.slug,
            priority: veilleArticle.priority,
            tags: veilleArticle.tags,
            views: veilleArticle.views,
            author: veilleArticle.author,
            isNew: veilleArticle.isNew,
            isPremium: veilleArticle.isPremium
          } as Article))
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setArticles(loadedArticles);

        // Si un slug est présent dans l'URL, trouver l'article correspondant
        if (slug) {
          const article = loadedArticles.find(a => a.slug === slug);
          if (article) {
            setCurrentArticle(article);
          } else {
            navigate('/veille-reglementaire');
          }
        }
      } catch (error) {
        console.error('Erreur lors du chargement des articles:', error);
      }
    };
    loadArticles();
  }, [slug, navigate]);

  const handleArticleClick = (article: Article) => {
    navigate(`/veille-reglementaire/${article.slug}`);
  };

  // Si un article est sélectionné, afficher son détail
  if (currentArticle) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/veille-reglementaire')}
          className="mb-4"
        >
          ← Retour à la liste
        </Button>
        <WorkspaceArticleDetail
          article={currentArticle}
          isOpen={true}
          onClose={() => navigate('/veille-reglementaire')}
        />
      </div>
    );
  }

  // Sinon, afficher la liste des articles
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Veille Réglementaire</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{article.title}</CardTitle>
                <CardDescription>{article.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">{article.category}</Badge>
                  {article.priority && <Badge variant="outline">{article.priority}</Badge>}
                  {article.isNew && <Badge variant="secondary">Nouveau</Badge>}
                  {article.isPremium && <Badge variant="default">Premium</Badge>}
                </div>
                <div className="text-sm text-gray-500">
                  <p>Publié le {format(new Date(article.date), 'dd MMMM yyyy', { locale: fr })}</p>
                  <p>{article.readTime} de lecture</p>
                  {article.views && <p>{article.views} vues</p>}
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleArticleClick(article)}>Lire l'article</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VeilleReglementaire;