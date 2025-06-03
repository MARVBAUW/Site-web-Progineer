import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

// Ajout des déclarations de types pour marked et gray-matter
declare module 'marked';
declare module 'gray-matter';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  priority: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  views: number;
  author: string;
  sources: { title: string; url: string }[];
  seoKeywords: string[];
  isNew: boolean;
  isPremium: boolean;
  content: string;
}

const VeilleReglementaire: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const navigate = useNavigate();

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
              ...data,
              content: marked(content),
            } as Article;
          })
          .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        setArticles(loadedArticles);
      } catch (error) {
        console.error('Erreur lors du chargement des articles:', error);
      }
    };
    loadArticles();
  }, []);

  const handleArticleClick = (articleId: string) => {
    navigate(`/veille-reglementaire/${articleId}`);
  };

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
                <CardDescription>{article.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">{article.category}</Badge>
                  <Badge variant="outline">{article.priority}</Badge>
                  {article.isNew && <Badge variant="secondary">Nouveau</Badge>}
                  {article.isPremium && <Badge variant="default">Premium</Badge>}
                </div>
                <div className="text-sm text-gray-500">
                  <p>Publié le {format(new Date(article.publishedAt), 'dd MMMM yyyy', { locale: fr })}</p>
                  <p>{article.readTime} de lecture</p>
                  <p>{article.views} vues</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleArticleClick(article.id)}>Lire l'article</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VeilleReglementaire; 