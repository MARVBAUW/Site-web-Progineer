import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  Clock, 
  Eye, 
  Search, 
  Filter,
  TrendingUp,
  FileText,
  AlertCircle,
  BookOpen,
  ExternalLink,
  Share2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { veilleArticles, VeilleArticle, ArticleCategory, isArticleRecent } from '@/data/veille/veilleData';
import { InternalLinkText } from '@/utils/internalLinking';
import FAQStructuredData from '@/components/seo/FAQStructuredData';
import { Helmet } from 'react-helmet-async';
import { toast } from 'sonner';

interface WorkspaceVeilleReglementaireProps {
  className?: string;
}

const WorkspaceVeilleReglementaire = ({ className }: WorkspaceVeilleReglementaireProps): JSX.Element => {
  const navigate = useNavigate();
  const { articleSlug } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | 'all'>('all');
  const [selectedArticle, setSelectedArticle] = useState<VeilleArticle | null>(null);

  // Utiliser les données statiques pour le moment
  const articles = veilleArticles;

  // Navigation entre les articles
  const currentArticleIndex = useMemo(() => {
    if (!selectedArticle) return -1;
    return articles.findIndex(a => a.slug === selectedArticle.slug);
  }, [selectedArticle, articles]);

  const nextArticle = useMemo(() => {
    if (currentArticleIndex === -1 || currentArticleIndex === articles.length - 1) return null;
    return articles[currentArticleIndex + 1];
  }, [currentArticleIndex, articles]);

  const previousArticle = useMemo(() => {
    if (currentArticleIndex <= 0) return null;
    return articles[currentArticleIndex - 1];
  }, [currentArticleIndex, articles]);

  const handleShare = async (article: VeilleArticle) => {
    const url = `${window.location.origin}/workspace/veille/${article.slug}`;
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Lien copié dans le presse-papier');
    } catch (err) {
      toast.error('Impossible de copier le lien');
    }
  };

  // Gérer l'URL de l'article
  useEffect(() => {
    if (articleSlug) {
      const article = articles.find(a => a.slug === articleSlug);
      if (article) {
        setSelectedArticle(article);
      } else {
        // Si l'article n'existe pas, rediriger vers la liste
        navigate('/workspace?tab=veille-reglementaire');
      }
    } else {
      setSelectedArticle(null);
    }
  }, [articleSlug, articles, navigate]);

  // Filtrer les articles
  const filteredArticles = useMemo(() => {
    return articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [articles, searchQuery, selectedCategory]);

  // Catégories disponibles
  const categories: { value: ArticleCategory | 'all'; label: string; count: number }[] = [
    { value: 'all', label: 'Tous les articles', count: articles.length },
    { value: 'reglementation', label: 'Réglementation', count: articles.filter(a => a.category === 'reglementation').length },
    { value: 'materiaux', label: 'Matériaux', count: articles.filter(a => a.category === 'materiaux').length },
    { value: 'energie', label: 'Énergie', count: articles.filter(a => a.category === 'energie').length },
    { value: 'urbanisme', label: 'Urbanisme', count: articles.filter(a => a.category === 'urbanisme').length },
    { value: 'environnement', label: 'Environnement', count: articles.filter(a => a.category === 'environnement').length },
    { value: 'financement', label: 'Financement', count: articles.filter(a => a.category === 'financement').length }
  ];

  const getCategoryColor = (category: ArticleCategory) => {
    const colors = {
      reglementation: 'bg-red-100 text-red-800',
      materiaux: 'bg-green-100 text-green-800',
      energie: 'bg-blue-100 text-blue-800',
      urbanisme: 'bg-purple-100 text-purple-800',
      environnement: 'bg-emerald-100 text-emerald-800',
      financement: 'bg-orange-100 text-orange-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleArticleClick = (article: VeilleArticle) => {
    navigate(`/workspace/veille/${article.slug}`);
  };

  const handleBackClick = () => {
    navigate('/workspace?tab=veille-reglementaire');
  };

  if (selectedArticle) {
    return (
      <>
        <Helmet>
          <title>{selectedArticle.title} | Veille Réglementaire Progineer</title>
          <meta name="description" content={selectedArticle.excerpt} />
          <meta name="keywords" content={selectedArticle.seoKeywords.join(', ')} />
          <meta property="og:title" content={selectedArticle.title} />
          <meta property="og:description" content={selectedArticle.excerpt} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={`${window.location.origin}/workspace/veille/${selectedArticle.slug}`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={selectedArticle.title} />
          <meta name="twitter:description" content={selectedArticle.excerpt} />
        </Helmet>

        <div className={`space-y-6 pt-32 ${className}`}>
          {/* Header avec navigation et partage */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                onClick={handleBackClick}
                className="flex items-center gap-2"
              >
                ← Retour aux articles
              </Button>
              {previousArticle && (
                <Button
                  variant="ghost"
                  onClick={() => handleArticleClick(previousArticle)}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Article précédent
                </Button>
              )}
            </div>
            <Button
              variant="outline"
              onClick={() => handleShare(selectedArticle)}
              className="flex items-center gap-2"
            >
              <Share2 className="h-4 w-4" />
              Partager
            </Button>
          </div>

          {/* Article complet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-khaki-50 to-khaki-100">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className={getCategoryColor(selectedArticle.category)}>
                    {selectedArticle.category}
                  </Badge>
                  {isArticleRecent(selectedArticle.publishedAt) && (
                    <Badge variant="outline" className="bg-green-600 text-white border-green-700">
                      Nouveau
                    </Badge>
                  )}
                  <Badge variant="outline" className="flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {selectedArticle.priority}
                  </Badge>
                </div>
                <CardTitle className="text-2xl md:text-3xl leading-tight">
                  {selectedArticle.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-600 mt-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(selectedArticle.publishedAt)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {selectedArticle.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {selectedArticle.views} vues
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <div className="text-xl text-gray-700 mb-6 font-medium">
                    {selectedArticle.excerpt}
                  </div>
                  <div 
                    className="space-y-4"
                    dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                  />
                </div>
                
                {/* Tags */}
                <div className="mt-8 pt-6 border-t">
                  <h4 className="font-semibold mb-3">Mots-clés :</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedArticle.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Sources */}
                {selectedArticle.sources && selectedArticle.sources.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">Sources :</h4>
                    <div className="space-y-2">
                      {selectedArticle.sources.map((source, index) => (
                        <a
                          key={index}
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {source.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation entre articles */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            {previousArticle && (
              <Button
                variant="ghost"
                onClick={() => handleArticleClick(previousArticle)}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                {previousArticle.title}
              </Button>
            )}
            {nextArticle && (
              <Button
                variant="ghost"
                onClick={() => handleArticleClick(nextArticle)}
                className="flex items-center gap-2 ml-auto"
              >
                {nextArticle.title}
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Bloc SEO Footer et FAQ */}
          <div className="mt-16 space-y-8">
            <div className="bg-stone-50 border-t border-stone-200 p-6 rounded-xl">
              <h2 className="text-lg font-semibold mb-4">À propos de la veille réglementaire</h2>
              <p className="text-gray-700 mb-4">
                <InternalLinkText text={
                  `Progineer propose une veille réglementaire actualisée pour le secteur de la construction, de la rénovation et de l'urbanisme en PACA. Retrouvez les dernières actualités, analyses, textes officiels et évolutions législatives. Découvrez aussi nos guides pratiques, calculateurs et fiches de réglementation pour aller plus loin.`
                } maxOccurrences={4} />
              </p>
            </div>
            <div className="bg-stone-100 border border-stone-200 p-6 rounded-xl">
              <h2 className="text-lg font-semibold mb-4">Questions fréquentes sur la veille réglementaire</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded">
                  <strong>La veille est-elle à jour ?</strong>
                  <p>Oui, les articles sont mis à jour régulièrement pour refléter les dernières évolutions réglementaires et techniques.</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <strong>Puis-je recevoir les nouveautés par email ?</strong>
                  <p>Oui, inscrivez-vous à notre newsletter pour recevoir les dernières actualités et analyses directement dans votre boîte mail.</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <strong>Comment suggérer un sujet de veille ?</strong>
                  <p>Contactez-nous via le formulaire pour proposer un sujet ou une thématique à surveiller.</p>
                </div>
                <div className="bg-white p-4 rounded">
                  <strong>La veille couvre-t-elle toute la France ?</strong>
                  <p>La veille est principalement axée sur la région PACA, mais inclut aussi les grandes évolutions nationales.</p>
                </div>
              </div>
              {/* Données structurées FAQ pour Google */}
              <FAQStructuredData
                faqs={[
                  { question: "La veille est-elle à jour ?", answer: "Oui, les articles sont mis à jour régulièrement pour refléter les dernières évolutions réglementaires et techniques." },
                  { question: "Puis-je recevoir les nouveautés par email ?", answer: "Oui, inscrivez-vous à notre newsletter pour recevoir les dernières actualités et analyses directement dans votre boîte mail." },
                  { question: "Comment suggérer un sujet de veille ?", answer: "Contactez-nous via le formulaire pour proposer un sujet ou une thématique à surveiller." },
                  { question: "La veille couvre-t-elle toute la France ?", answer: "La veille est principalement axée sur la région PACA, mais inclut aussi les grandes évolutions nationales." }
                ]}
                pageUrl="https://progineer.fr/workspace/veille-reglementaire"
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className={`space-y-6 pt-8 ${className}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <TrendingUp className="h-8 w-8 text-khaki-600" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Articles de Veille Réglementaire
          </h2>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Restez informé des dernières actualités réglementaires, techniques et environnementales 
          du secteur de la construction et de la rénovation.
        </p>
      </div>

      {/* Filtres et recherche */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Rechercher un article..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value)}
              className="whitespace-nowrap"
            >
              {category.label}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* Liste des articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <Card key={article.id} className="group hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge className={getCategoryColor(article.category)}>
                  {article.category}
                </Badge>
                {isArticleRecent(article.publishedAt) && (
                  <Badge variant="outline" className="bg-green-600 text-white border-green-700">
                    Nouveau
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl line-clamp-2 group-hover:text-khaki-600 transition-colors">
                {article.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <p className="text-gray-600 line-clamp-3 mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {article.views} vues
                </div>
              </div>
            </CardContent>
            <div className="px-6 pb-6">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  {formatDate(article.publishedAt)}
                </div>
                <Button
                  variant="ghost"
                  onClick={() => handleArticleClick(article)}
                  className="group-hover:bg-khaki-50"
                >
                  Lire →
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Message si aucun résultat */}
      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun article trouvé</h3>
          <p className="text-gray-600">
            Essayez de modifier vos critères de recherche ou de réinitialiser les filtres.
          </p>
        </div>
      )}

      {/* Bloc SEO Footer et FAQ */}
      <div className="mt-16 space-y-8">
        <div className="bg-stone-50 border-t border-stone-200 p-6 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">À propos de la veille réglementaire</h2>
          <p className="text-gray-700 mb-4">
            <InternalLinkText text={
              `Progineer propose une veille réglementaire actualisée pour le secteur de la construction, de la rénovation et de l'urbanisme en PACA. Retrouvez les dernières actualités, analyses, textes officiels et évolutions législatives. Découvrez aussi nos guides pratiques, calculateurs et fiches de réglementation pour aller plus loin.`
            } maxOccurrences={4} />
          </p>
        </div>
        <div className="bg-stone-100 border border-stone-200 p-6 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">Questions fréquentes sur la veille réglementaire</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded">
              <strong>La veille est-elle à jour ?</strong>
              <p>Oui, les articles sont mis à jour régulièrement pour refléter les dernières évolutions réglementaires et techniques.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <strong>Puis-je recevoir les nouveautés par email ?</strong>
              <p>Oui, inscrivez-vous à notre newsletter pour recevoir les dernières actualités et analyses directement dans votre boîte mail.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <strong>Comment suggérer un sujet de veille ?</strong>
              <p>Contactez-nous via le formulaire pour proposer un sujet ou une thématique à surveiller.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <strong>La veille couvre-t-elle toute la France ?</strong>
              <p>La veille est principalement axée sur la région PACA, mais inclut aussi les grandes évolutions nationales.</p>
            </div>
          </div>
          {/* Données structurées FAQ pour Google */}
          <FAQStructuredData
            faqs={[
              { question: "La veille est-elle à jour ?", answer: "Oui, les articles sont mis à jour régulièrement pour refléter les dernières évolutions réglementaires et techniques." },
              { question: "Puis-je recevoir les nouveautés par email ?", answer: "Oui, inscrivez-vous à notre newsletter pour recevoir les dernières actualités et analyses directement dans votre boîte mail." },
              { question: "Comment suggérer un sujet de veille ?", answer: "Contactez-nous via le formulaire pour proposer un sujet ou une thématique à surveiller." },
              { question: "La veille couvre-t-elle toute la France ?", answer: "La veille est principalement axée sur la région PACA, mais inclut aussi les grandes évolutions nationales." }
            ]}
            pageUrl="https://progineer.fr/workspace/veille-reglementaire"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkspaceVeilleReglementaire; 