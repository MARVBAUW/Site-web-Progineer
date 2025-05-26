import React, { useState } from 'react';
import { GuideDocument } from './guides/types';
import { GuideCard } from './guides/GuideCard';
import { DocumentDialog } from './guides/DocumentDialog';
import PreviewDialog from './guides/PreviewDialog';
import { FeaturedGuides } from './guides/FeaturedGuides';
import { useToast } from '@/hooks/use-toast';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from 'lucide-react';
import { checkFileAccessibility } from '@/utils/fileUtils';
import { InternalLinkText } from '@/utils/internalLinking';
import FAQStructuredData from '@/components/seo/FAQStructuredData';

// Import guides data
import { guides, guideCategories } from './guides/guidesData';

const WorkspaceGuides = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [documentDialogOpen, setDocumentDialogOpen] = useState(false);
  const [previewDialogOpen, setPreviewDialogOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<GuideDocument | null>(null);

  // Filter featured guides (isNew or isFeatured)
  const featuredGuides = guides.filter(guide => guide.isNew || guide.isFeatured);

  // Filter guides based on search query and category
  const filteredGuides = guides.filter(guide => {
    const matchesSearch = 
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      guide.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === 'all' || 
      guide.categoryId === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleDocumentClick = (document: GuideDocument) => {
    setSelectedDocument(document);
    setDocumentDialogOpen(true);
  };

  const handleDownload = async (url: string, title: string) => {
    try {
      const exists = await checkFileAccessibility(url);
      if (!exists) {
        toast({
          title: "Fichier non disponible",
          description: "Ce document n'est pas disponible pour le moment.",
          variant: "destructive"
        });
        return;
      }
      
      const link = document.createElement('a');
      link.href = url;
      link.download = title;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Téléchargement réussi",
        description: `Le document "${title}" a été téléchargé avec succès.`
      });
    } catch (error) {
      toast({
        title: "Erreur de téléchargement",
        description: "Une erreur est survenue lors du téléchargement.",
        variant: "destructive"
      });
    }
  };

  const handlePreview = (document: GuideDocument) => {
    setSelectedDocument(document);
    setDocumentDialogOpen(false);
    setPreviewDialogOpen(true);
  };

  return (
    <div className="space-y-8">
      {featuredGuides.length > 0 && (
        <FeaturedGuides 
          featuredGuides={featuredGuides} 
          handleDocumentClick={handleDocumentClick} 
        />
      )}
      
      <div>
        <h2 className="text-2xl font-medium mb-6">Guides pratiques</h2>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow md:max-w-lg">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-low-contrast" />
            <Input
              type="search"
              placeholder="Rechercher un guide..."
              className="pl-9 bg-card"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="w-full md:w-64">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger>
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les catégories</SelectItem>
                {guideCategories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredGuides.map((guide) => (
            <GuideCard 
              key={guide.id} 
              document={guide} 
              onClick={handleDocumentClick} 
            />
          ))}
        </div>
        
        {filteredGuides.length === 0 && (
          <div className="text-center py-12">
            <p className="text-low-contrast">
              Aucun guide ne correspond à votre recherche.
            </p>
          </div>
        )}
      </div>
      
      <DocumentDialog
        isOpen={documentDialogOpen}
        setIsOpen={setDocumentDialogOpen}
        selectedDocument={selectedDocument}
        handleDownload={handleDownload}
        handlePreview={handlePreview}
      />
      
      <PreviewDialog
        isOpen={previewDialogOpen}
        setIsOpen={setPreviewDialogOpen}
        selectedDocument={selectedDocument}
        handleDownload={handleDownload}
      />

      {/* Bloc SEO Footer et FAQ */}
      <div className="mt-16 space-y-8">
        <div className="bg-stone-50 border-t border-stone-200 p-6 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">À propos de nos guides pratiques</h2>
          <p className="text-gray-700 mb-4">
            <InternalLinkText text={
              `Progineer propose une collection de guides pratiques pour la construction, la rénovation et la gestion de projet en PACA. Nos guides couvrent toutes les étapes d'un projet, de la préparation à la réception des travaux, et sont rédigés par des experts du bâtiment. Découvrez aussi nos calculateurs professionnels et nos fiches de réglementation pour aller plus loin dans vos démarches.`
            } maxOccurrences={4} />
          </p>
        </div>
        <div className="bg-stone-100 border border-stone-200 p-6 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">Questions fréquentes sur les guides</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded">
              <strong>Les guides sont-ils gratuits ?</strong>
              <p>La plupart des guides sont accessibles gratuitement. Certains contenus premium peuvent nécessiter un compte.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <strong>Puis-je télécharger les guides ?</strong>
              <p>Oui, chaque guide est consultable en ligne et téléchargeable au format PDF pour une utilisation hors connexion.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <strong>Qui rédige les guides Progineer ?</strong>
              <p>Nos guides sont rédigés par des ingénieurs, architectes et experts du bâtiment, avec une veille régulière sur la réglementation.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <strong>Comment trouver un guide spécifique ?</strong>
              <p>Utilisez la barre de recherche ou filtrez par catégorie pour trouver rapidement le guide adapté à votre besoin.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <strong>Puis-je suggérer un sujet de guide ?</strong>
              <p>Oui, contactez-nous via le formulaire de contact pour proposer un sujet ou une amélioration de contenu.</p>
            </div>
          </div>
          {/* Données structurées FAQ pour Google */}
          <FAQStructuredData
            faqs={[
              { question: "Les guides sont-ils gratuits ?", answer: "La plupart des guides sont accessibles gratuitement. Certains contenus premium peuvent nécessiter un compte." },
              { question: "Puis-je télécharger les guides ?", answer: "Oui, chaque guide est consultable en ligne et téléchargeable au format PDF pour une utilisation hors connexion." },
              { question: "Qui rédige les guides Progineer ?", answer: "Nos guides sont rédigés par des ingénieurs, architectes et experts du bâtiment, avec une veille régulière sur la réglementation." },
              { question: "Comment trouver un guide spécifique ?", answer: "Utilisez la barre de recherche ou filtrez par catégorie pour trouver rapidement le guide adapté à votre besoin." },
              { question: "Puis-je suggérer un sujet de guide ?", answer: "Oui, contactez-nous via le formulaire de contact pour proposer un sujet ou une amélioration de contenu." }
            ]}
            pageUrl="https://progineer.fr/workspace/guides"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkspaceGuides;
