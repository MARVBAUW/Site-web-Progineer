import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Iridescence } from '@/components/ui/iridescence';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { marked } from 'marked';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import WorkspaceArticleDetail from '@/components/workspace/WorkspaceArticleDetail';

// Ajout des déclarations de types pour marked et gray-matter
declare module 'marked';
declare module 'gray-matter';

interface Article {
  id: number;
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
    const loadArticles = async () => {
      try {
        const articlesDir = path.join(process.cwd(), 'src/data/veille/articles');
        const files = fs.readdirSync(articlesDir);
        const loadedArticles = files
          .filter(file => file.endsWith('.md'))
          .map(file => {
            const filePath = path.join(articlesDir, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data, content } = matter(fileContent);
            return {
              id: parseInt(data.id.replace('veille-', '')),
              title: data.title,
              description: data.excerpt,
              content: marked(content),
              date: data.publishedAt,
              category: data.category,
              source: data.sources?.[0]?.title || 'Source non spécifiée',
              readTime: data.readTime,
              keywords: data.seoKeywords || [],
              resources: data.sources?.map((source: any) => ({
                name: source.title,
                url: source.url,
                type: 'link',
                description: source.title
              })),
              slug: data.slug,
              priority: data.priority,
              tags: data.tags,
              views: data.views,
              author: data.author,
              isNew: data.isNew,
              isPremium: data.isPremium
            } as Article;
          })
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