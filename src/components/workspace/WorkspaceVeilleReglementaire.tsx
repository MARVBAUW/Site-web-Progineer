import React, { useState, useMemo } from 'react';
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
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';
import { veilleArticles, VeilleArticle, ArticleCategory } from '@/data/veille/veilleData';
import { InternalLinkText } from '@/utils/internalLinking';
import FAQStructuredData from '@/components/seo/FAQStructuredData';

interface WorkspaceVeilleReglementaireProps {
  className?: string;
}

const WorkspaceVeilleReglementaire: React.FC<WorkspaceVeilleReglementaireProps> = ({ className }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ArticleCategory | 'all'>('all');
  const [selectedArticle, setSelectedArticle] = useState<VeilleArticle | null>(null);

  // Utiliser les données statiques pour le moment
  const articles = veilleArticles;

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

  if (selectedArticle) {
    return (
      <div className={`space-y-6 ${className}`}>
        {/* Header avec retour */}
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="outline" 
            onClick={() => setSelectedArticle(null)}
            className="flex items-center gap-2"
          >
            ← Retour aux articles
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
  }

  return (
    <div className={`space-y-6 ${className}`}>
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
        
        {/* Message de configuration */}
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg max-w-2xl mx-auto">
          <p className="text-sm text-blue-800">
            <strong>🚀 Système en cours de configuration</strong><br/>
            Les articles sont actuellement affichés en mode démo. 
            Configurez vos clés API dans le fichier <code>.env.local</code> pour activer la génération automatique.
          </p>
        </div>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="bg-card rounded-xl p-6 shadow-sm border">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Rechercher dans les articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-500">Filtrer par :</span>
          </div>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.value)}
              className="flex items-center gap-2"
            >
              {category.label}
              <Badge variant="secondary" className="ml-1">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">{articles.length}</div>
            <div className="text-sm text-gray-600">Articles publiés</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">3</div>
            <div className="text-sm text-gray-600">Articles / semaine</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <AlertCircle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-600">
              {articles.filter(a => a.priority === 'haute').length}
            </div>
            <div className="text-sm text-gray-600">Priorité haute</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">
              {articles.length > 0 ? Math.round(articles.reduce((acc, a) => acc + parseInt(a.readTime), 0) / articles.length) : 0}
            </div>
            <div className="text-sm text-gray-600">Min lecture moy.</div>
          </CardContent>
        </Card>
      </div>

      {/* Liste des articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getCategoryColor(article.category)}>
                    {article.category}
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {article.priority}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-khaki-600 transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(article.publishedAt)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {article.views}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {article.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{article.tags.length - 3}
                    </Badge>
                  )}
                </div>

                <Button 
                  className="w-full"
                  onClick={() => setSelectedArticle(article)}
                >
                  Lire l'article
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">
            Aucun article trouvé
          </h3>
          <p className="text-gray-500">
            Essayez de modifier vos critères de recherche ou de filtrage.
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