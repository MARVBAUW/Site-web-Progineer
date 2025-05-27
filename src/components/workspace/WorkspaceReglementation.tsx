import React, { useState, useEffect } from 'react';
import { Search, FileText, Download } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import WorkspaceFileViewer from './fileViewer/WorkspaceFileViewer';
import { InternalLinkText } from '@/utils/internalLinking';
import FAQStructuredData from '@/components/seo/FAQStructuredData';

interface RegulationDocument {
  id: string;
  title: string;
  description: string;
  filename: string;
  type: string;
  category: string;
  lastUpdate: string;
  url: string;
  version: string; // Added the required version property
  isNew?: boolean;
}

const WorkspaceReglementation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewerOpen, setViewerOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<RegulationDocument | null>(null);

  // Liste des documents de réglementation
  const regulationDocuments: RegulationDocument[] = [
    {
      id: 'norme-parasismique',
      title: 'Guide des normes parasismiques',
      description: 'Guide complet sur les normes parasismiques pour la construction en France',
      filename: 'Normes parasismiques en construction.pdf',
      type: 'pdf',
      category: 'Réglementation technique',
      lastUpdate: '2023-09-15',
      url: '/resources/guides/normes-parasismiques.pdf',
      version: '2023',
      isNew: true
    },
    {
      id: 'liste-dtu',
      title: 'Liste des DTUs du bâtiment',
      description: 'Liste complète des Documents Techniques Unifiés (DTU) pour le bâtiment',
      filename: 'Liste DTU batiment.pdf',
      type: 'pdf',
      category: 'Normes et DTU',
      lastUpdate: '2023-06-08',
      url: '/resources/documents/liste-dtu-batiment.pdf',
      version: '2023'
    },
    {
      id: 'texte-reglementation',
      title: 'Texte intégral de la réglementation du bâtiment',
      description: 'Texte officiel de la réglementation en vigueur pour le bâtiment',
      filename: 'Texte réglementation bâtiment.pdf',
      type: 'pdf',
      category: 'Textes officiels',
      lastUpdate: '2023-05-10',
      url: '/resources/documents/texte-integral-reglementation.pdf',
      version: '2023'
    },
    {
      id: 'guide-renovation-energetique',
      title: 'Guide de la rénovation énergétique RE2020',
      description: 'Guide pratique pour la rénovation énergétique selon la RE2020',
      filename: 'Guide rénovation énergétique.pdf',
      type: 'pdf',
      category: 'Énergie',
      lastUpdate: '2023-07-22',
      url: '/resources/guides/guide-renovation-energetique.pdf',
      version: '2023'
    }
  ];

  const filteredDocuments = regulationDocuments.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Restaure l'état et le scroll au montage
  useEffect(() => {
    const savedState = sessionStorage.getItem('workspace_reglementation_state');
    if (savedState) {
      const { search } = JSON.parse(savedState);
      setSearchQuery(search || '');
    }
    const savedScroll = sessionStorage.getItem('workspace_reglementation_scroll');
    if (savedScroll) {
      setTimeout(() => window.scrollTo(0, Number(savedScroll)), 50);
      sessionStorage.removeItem('workspace_reglementation_scroll');
    }
  }, []);

  // Sauvegarde l'état à chaque changement
  useEffect(() => {
    sessionStorage.setItem('workspace_reglementation_state', JSON.stringify({
      search: searchQuery,
    }));
  }, [searchQuery]);

  const handleDocumentClick = (document: RegulationDocument) => {
    sessionStorage.setItem('workspace_reglementation_scroll', window.scrollY.toString());
    setSelectedFile(document);
    setViewerOpen(true);
  };

  const handleFileClose = () => {
    setViewerOpen(false);
    setSelectedFile(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-medium mb-2">Réglementation et normes</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Consultez la réglementation technique du bâtiment, les DTUs et les normes en vigueur.
        </p>
        
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-low-contrast" />
          <Input
            type="search"
            placeholder="Rechercher un document..."
            className="pl-9 bg-card"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDocuments.map((document) => (
            <Card 
              key={document.id} 
              className="hover:shadow-md transition-shadow cursor-pointer" 
              onClick={() => handleDocumentClick(document)}
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div className="bg-stone-100 p-2 rounded">
                    <FileText className="h-6 w-6 text-khaki-600" />
                  </div>
                  {document.isNew && (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-100">
                      Nouveau
                    </Badge>
                  )}
                </div>
                
                <h3 className="font-medium text-lg mt-4 mb-2">{document.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{document.description}</p>
                
                <div className="flex items-center justify-between text-xs text-low-contrast">
                  <span>Mis à jour: {document.lastUpdate}</span>
                  <span className="bg-stone-100 py-1 px-2 rounded">{document.category}</span>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4 flex items-center justify-center gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(document.url, '_blank');
                  }}
                >
                  <Download className="h-4 w-4" />
                  Télécharger
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-low-contrast">Aucun document ne correspond à votre recherche.</p>
          </div>
        )}
      </div>

      {/* Viewer for PDF documents */}
      <WorkspaceFileViewer
        file={selectedFile}
        isOpen={viewerOpen}
        onClose={handleFileClose}
      />

      {/* Bloc SEO Footer et FAQ */}
      <div className="mt-16 space-y-8">
        <div className="bg-stone-50 border-t border-stone-200 p-6 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">À propos de la réglementation</h2>
          <p className="text-gray-700 mb-4">
            <InternalLinkText text={
              `Progineer met à disposition une base documentaire complète sur la réglementation du bâtiment, les DTU, les normes techniques et la rénovation énergétique en PACA. Accédez à des guides pratiques, des textes officiels et des outils pour rester conforme aux exigences légales. Découvrez aussi nos calculateurs et nos guides pour aller plus loin.`
            } maxOccurrences={4} />
          </p>
        </div>
        <div className="bg-stone-100 border border-stone-200 p-6 rounded-xl">
          <h2 className="text-lg font-semibold mb-4">Questions fréquentes sur la réglementation</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded">
              <strong>Les documents sont-ils à jour ?</strong>
              <p>Oui, nous mettons à jour régulièrement notre base documentaire pour refléter les dernières évolutions réglementaires.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <strong>Puis-je télécharger les textes officiels ?</strong>
              <p>Oui, tous les documents sont téléchargeables au format PDF.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <strong>Comment trouver une norme ou un DTU précis ?</strong>
              <p>Utilisez la barre de recherche ou filtrez par catégorie pour accéder rapidement au document souhaité.</p>
            </div>
            <div className="bg-white p-4 rounded">
              <strong>Puis-je suggérer un ajout ?</strong>
              <p>Oui, contactez-nous pour proposer l'ajout d'un document ou d'une nouvelle rubrique.</p>
            </div>
          </div>
          {/* Données structurées FAQ pour Google */}
          <FAQStructuredData
            faqs={[
              { question: "Les documents sont-ils à jour ?", answer: "Oui, nous mettons à jour régulièrement notre base documentaire pour refléter les dernières évolutions réglementaires." },
              { question: "Puis-je télécharger les textes officiels ?", answer: "Oui, tous les documents sont téléchargeables au format PDF." },
              { question: "Comment trouver une norme ou un DTU précis ?", answer: "Utilisez la barre de recherche ou filtrez par catégorie pour accéder rapidement au document souhaité." },
              { question: "Puis-je suggérer un ajout ?", answer: "Oui, contactez-nous pour proposer l'ajout d'un document ou d'une nouvelle rubrique." }
            ]}
            pageUrl="https://progineer.fr/workspace/reglementation"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkspaceReglementation;
