
import React from 'react';
import { Download, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { GuideDocument } from './types';
import { Button } from "@/components/ui/button";

interface PreviewDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedDocument: GuideDocument | null;
  handleDownload: (url: string, title: string) => void;
}

const PreviewDialog: React.FC<PreviewDialogProps> = ({
  isOpen,
  setIsOpen,
  selectedDocument,
  handleDownload
}) => {
  if (!selectedDocument) return null;

  const renderContent = () => {
    switch (selectedDocument.type) {
      case 'pdf':
        return (
          <div className="bg-muted rounded-lg p-4 text-center">
            <iframe 
              src={selectedDocument.url} 
              className="w-full h-[70vh] rounded border border-border"
              title={selectedDocument.title}
            >
              Votre navigateur ne prend pas en charge l'affichage des PDF. 
              <a href={selectedDocument.url} target="_blank" rel="noopener noreferrer">
                Cliquez ici pour télécharger le document.
              </a>
            </iframe>
          </div>
        );
      case 'video':
        return (
          <div className="bg-muted rounded-lg p-4">
            <div className="aspect-video bg-black rounded overflow-hidden">
              <iframe 
                src={selectedDocument.url.replace('watch?v=', 'embed/')} 
                className="w-full h-full" 
                title={selectedDocument.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        );
      case 'text':
        return (
          <div className="prose prose-khaki max-w-none px-2 py-4 prose-headings:text-khaki-800 prose-a:text-khaki-600">
            {selectedDocument.content ? (
              <div dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(selectedDocument.content) }} />
            ) : (
              <p className="text-center text-low-contrast">Contenu non disponible</p>
            )}
          </div>
        );
      default:
        return (
          <div className="text-center p-6">
            <p>Aperçu non disponible pour ce type de document.</p>
          </div>
        );
    }
  };

  // Enhanced markdown to HTML converter
  const convertMarkdownToHtml = (markdown: string): string => {
    let html = markdown
      // Headers
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^#### (.*$)/gm, '<h4>$1</h4>')
      // Bold
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Italic
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Lists
      .replace(/^\- (.*$)/gm, '<li>$1</li>')
      // Links
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      // Line breaks
      .replace(/\n/g, '<br/>');
    
    // Wrap lists in <ul>
    // Find all sequences of <li> tags
    const listRegex = /(<li>.*?<\/li>)(<li>.*?<\/li>)+/g;
    html = html.replace(listRegex, '<ul>$&</ul>');
    
    return html;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return "Date non disponible";
    }
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="pr-10">{selectedDocument.title}</DialogTitle>
          <Button 
            onClick={() => setIsOpen(false)} 
            className="absolute right-4 top-4 p-2 h-8 w-8 rounded-full"
            variant="ghost"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Fermer</span>
          </Button>
        </DialogHeader>
        
        <div className="mt-4">
          {renderContent()}
        </div>

        <div className="mt-4 flex justify-between items-center text-sm text-low-contrast">
          <span>Dernière mise à jour: {formatDate(selectedDocument.lastUpdated)}</span>
          <Button 
            onClick={() => handleDownload(selectedDocument.url, selectedDocument.title)}
            variant="outline"
            size="sm"
            className="flex items-center"
          >
            <Download className="h-4 w-4 mr-2" />
            Télécharger
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewDialog;
