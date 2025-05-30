
import React, { useState } from 'react';
import { ArrowLeft, Calendar, FileText, Link2, Clock, Search, BookOpen, Share2, Download } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Button from '@/components/common/Button';
import { useToast } from "@/components/ui/use-toast";

interface ArticleDetailProps {
  article: {
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
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const WorkspaceArticleDetail = ({ article, isOpen, onClose }: ArticleDetailProps) => {
  const { toast } = useToast();
  const [isDownloading, setIsDownloading] = useState<string | null>(null);
  
  if (!article) return null;

  // Format the date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Handle share functionality
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.description,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support sharing
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Lien copié",
        description: "Le lien de l'article a été copié dans votre presse-papier.",
        duration: 3000,
      });
    }
  };

  // Generate a random number of views for the article
  const getRandomViews = () => {
    return Math.floor(Math.random() * 400) + 100;
  };
  
  // Handle clicks on resource links
  const handleResourceClick = (resource: { name: string; url: string; type: string; }) => {
    if (!resource.url || resource.url === '#') {
      toast({
        title: "Ressource disponible prochainement",
        description: `La ressource "${resource.name}" sera disponible dans une prochaine mise à jour.`,
        duration: 3000,
      });
      return;
    }
    
    setIsDownloading(resource.name);
    
    // For external links, open in new tab
    if (resource.url.startsWith('http')) {
      window.open(resource.url, '_blank', 'noopener,noreferrer');
      setIsDownloading(null);
      return;
    }
    
    // For file downloads
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = resource.url;
      link.download = resource.name.replace(/\s+/g, '-').toLowerCase() + '.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Téléchargement réussi",
        description: `Le document "${resource.name}" a été téléchargé avec succès.`,
        duration: 3000,
      });
      setIsDownloading(null);
    }, 1000); // Simulate download delay
  };

  // Parse and format markdown content into proper HTML
  const parseMarkdown = (content: string) => {
    // Step 1: Handle headings - make sure to handle them in order from h1 to h6
    let formattedContent = content
      .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-10 mb-6 text-gray-900 dark:text-white border-b pb-2">$1</h1>')
      .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">$1</h2>')
      .replace(/^### (.+)$/gm, '<h3 class="text-xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">$1</h3>')
      .replace(/^#### (.+)$/gm, '<h4 class="text-lg font-semibold mt-5 mb-2 text-gray-600 dark:text-gray-300">$1</h4>')
      .replace(/^##### (.+)$/gm, '<h5 class="text-base font-semibold mt-4 mb-2 text-gray-600 dark:text-gray-300">$1</h5>')
      .replace(/^###### (.+)$/gm, '<h6 class="text-sm font-semibold mt-3 mb-2 text-gray-600 dark:text-gray-300">$1</h6>');

    // Step 2: Handle bold and italic text
    formattedContent = formattedContent
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>');

    // Step 3: Handle bullet lists
    formattedContent = formattedContent.replace(/^- (.+)$/gm, '<li class="ml-6 py-1.5 list-disc text-gray-600 dark:text-gray-300">$1</li>');
    const listRegex = /(<li class="ml-6 py-1.5 list-disc text-gray-600 dark:text-gray-300">.*<\/li>[\r\n]*)+/g;
    formattedContent = formattedContent.replace(listRegex, '<ul class="my-4 space-y-1">$&</ul>');

    // Step 4: Handle numbered lists
    formattedContent = formattedContent.replace(/^(\d+)\. (.+)$/gm, '<li class="ml-6 py-1.5 list-decimal text-gray-600 dark:text-gray-300">$2</li>');
    const olRegex = /(<li class="ml-6 py-1.5 list-decimal text-gray-600 dark:text-gray-300">.*<\/li>[\r\n]*)+/g;
    formattedContent = formattedContent.replace(olRegex, '<ol class="my-4 space-y-1 list-decimal">$&</ol>');

    // Step 5: Handle links with enhanced styling
    formattedContent = formattedContent.replace(
      /\[(.+?)\]\((.+?)\)/g, 
      '<a href="$2" class="text-khaki-600 hover:text-khaki-700 underline decoration-khaki-200 hover:decoration-khaki-400 transition-colors" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    // Step 6: Handle paragraphs with improved spacing and readability
    const paragraphs = formattedContent.split(/\n\n+/);
    formattedContent = paragraphs.map(p => {
      if (p.trim().startsWith('<h') || 
          p.trim().startsWith('<ul') || 
          p.trim().startsWith('<ol') ||
          p.trim().startsWith('<li') ||
          p.trim() === '') {
        return p;
      }
      return `<p class="my-4 leading-relaxed text-gray-600 dark:text-gray-300">${ p.trim() }</p>`;
    }).join('\n\n');

    // Step 7: Handle line breaks within paragraphs
    formattedContent = formattedContent.replace(
      /<p class="my-4 leading-relaxed text-gray-600 dark:text-gray-300">(.*?)\n(.*?)<\/p>/g, 
      '<p class="my-4 leading-relaxed text-gray-600 dark:text-gray-300">$1<br>$2</p>'
    );

    return formattedContent;
  };

  // Generate table of contents from the headings
  const generateTableOfContents = (content: string) => {
    const headingRegex = /^(#{1,3}) (.+)$/gm;
    const matches = [...content.matchAll(headingRegex)];
    
    if (matches.length <= 1) return null;
    
    return (
                <div className="bg-muted/50/50 p-6 rounded-lg mb-8 border border-border backdrop-blur-sm">
        <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b">
          <BookOpen className="h-5 w-5 text-khaki-600" />
          <span>Table des matières</span>
        </div>
        <nav>
          <ul className="space-y-2">
            {matches.map((match, index) => {
              const level = match[1].length;
              const title = match[2];
              const anchor = `section-${index}`;
              
              return (
                <li 
                  key={index} 
                  className={`
                    ${level > 1 ? `ml-${(level-1)*4}` : ''}
                    text-khaki-600 hover:text-khaki-800 cursor-pointer transition-colors
                  `}
                >
                  <button 
                    onClick={() => {
                      const element = document.getElementById(anchor);
                      if (element) {
                        element.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                    }}
                    className="text-left w-full py-1 hover:underline decoration-khaki-200"
                  >
                    {title}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  };

  // Add anchors to headings in the content
  const addAnchorsToContent = (content: string) => {
    const headingRegex = /^(#{1,3}) (.+)$/gm;
    let result = content;
    let index = 0;
    
    result = result.replace(headingRegex, (match, hashes, title) => {
      const anchor = `section-${index++}`;
      return `${hashes} ${title} <a id="${anchor}"></a>`;
    });
    
    return result;
  };

  const processedContent = addAnchorsToContent(article.content);
  const tableOfContents = generateTableOfContents(article.content);

  // Default resources if none are provided
  const resources = article.resources || [
    {
      name: "Guide complet sur la réglementation",
      url: "/resources/guides/reglementation-complete-batiment.pdf",
      type: "pdf",
      description: "Un guide exhaustif sur les dernières réglementations du bâtiment"
    },
    {
      name: "Webinaire explicatif (replay)",
      url: "https://www.youtube.com/watch?v=example",
      type: "video",
      description: "Replay du webinaire explicatif sur les changements réglementaires"
    },
    {
      name: "Texte intégral de la réglementation",
      url: "/resources/documents/texte-integral-reglementation.pdf", 
      type: "pdf",
      description: "Le texte officiel complet de la nouvelle réglementation"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="relative">
          <button 
            onClick={onClose} 
            className="absolute left-0 top-0 text-low-contrast hover:text-gray-600 dark:text-gray-300 transition-colors"
            aria-label="Retour"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center justify-between gap-2 text-sm text-khaki-600 mb-2 mt-2">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="capitalize">{article.category}</span>
              <span className="text-gray-600 dark:text-gray-300">•</span>
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                <span>{article.readTime} de lecture</span>
              </div>
              <span className="text-gray-600 dark:text-gray-300">•</span>
              <div className="flex items-center gap-1">
                <Search className="h-3.5 w-3.5" />
                <span>{getRandomViews()} vues</span>
              </div>
            </div>
            <button 
              onClick={handleShare}
              className="flex items-center gap-1 text-low-contrast hover:text-khaki-600 transition-colors"
              aria-label="Partager l'article"
            >
              <Share2 className="h-4 w-4" />
            </button>
          </div>

          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white mt-4">
            {article.title}
          </DialogTitle>
          
          <DialogDescription className="text-base text-gray-600 dark:text-gray-300 mt-2">
            {article.description}
          </DialogDescription>

          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 border-y border-gray-100 py-3 mt-4">
            <Calendar className="h-4 w-4" />
            <span>Publié le {formatDate(article.date)}</span>
            <span className="text-gray-600 dark:text-gray-300">•</span>
            <span>Source: {article.source}</span>
          </div>
        </DialogHeader>

        {/* Table of Contents */}
        {tableOfContents}

        <div className="prose prose-khaki max-w-none">
          {/* Article content using the enhanced markdown parser */}
          <div 
            dangerouslySetInnerHTML={{ __html: parseMarkdown(processedContent) }}
            className="article-content space-y-4"
          />
          
          {/* Implications section with enhanced styling */}
          <div className="mt-12 space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Implications pour les professionnels
            </h3>
            <div className="bg-khaki-50/50 border-l-4 border-khaki-400 p-6 rounded-r-lg space-y-4">
              <p className="text-gray-900 dark:text-white">
                Les professionnels du secteur de la construction et de l'immobilier doivent s'adapter rapidement à ces 
                évolutions réglementaires. Une veille juridique constante et une formation continue sont désormais 
                indispensables pour rester conformes aux exigences légales.
              </p>
              <p className="text-gray-900 dark:text-white">
                Les maîtres d'œuvre et architectes sont particulièrement concernés, car ils doivent intégrer ces 
                nouvelles dispositions dès la phase de conception des projets pour éviter des modifications coûteuses 
                ultérieurement.
              </p>
            </div>
          </div>

          {/* Resources section with improved visual hierarchy and download functionality */}
          <div className="mt-12 space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Ressources complémentaires
            </h3>
            <ul className="bg-muted/50/50 p-6 rounded-lg space-y-3 border border-gray-100">
              {resources.map((resource, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Link2 className="h-4 w-4 text-khaki-600 flex-shrink-0" />
                  <button 
                    onClick={() => handleResourceClick(resource)}
                    className="text-khaki-600 hover:text-khaki-700 hover:underline text-left transition-colors flex-grow"
                    disabled={isDownloading === resource.name}
                  >
                    <div className="flex items-center justify-between">
                      <span>{resource.name}</span>
                      {isDownloading === resource.name ? (
                        <span className="text-sm text-low-contrast animate-pulse">Téléchargement...</span>
                      ) : (
                        <Download className="h-4 w-4 opacity-70" />
                      )}
                    </div>
                    {resource.description && (
                      <p className="text-sm text-low-contrast mt-1">{resource.description}</p>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer section with keywords and back button */}
        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="flex flex-wrap gap-2 mb-6">
            {article.keywords.map((keyword, idx) => (
              <span 
                key={idx} 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-khaki-50 text-khaki-700 hover:bg-khaki-100 transition-colors"
              >
                #{keyword}
              </span>
            ))}
          </div>
          <Button 
            onClick={onClose} 
            variant="outline" 
            className="w-full"
          >
            Retour à la veille réglementaire
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkspaceArticleDetail;
