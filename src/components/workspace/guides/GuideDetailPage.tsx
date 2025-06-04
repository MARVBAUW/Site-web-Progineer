import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Download, Eye, Share2, BookOpen, Tags, FileText, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Container from '@/components/common/Container';
import SEOHeader from '@/components/common/SEOHeader';
import { mainGuides } from '@/data/guides/guidesData';
import { InternalLinkText } from '@/utils/internalLinking';
import FAQStructuredData from '@/components/seo/FAQStructuredData';

const GuideDetailPage: React.FC = () => {
  const { guideId } = useParams<{ guideId: string }>();
  const navigate = useNavigate();

  // Trouver le guide par ID
  const guide = mainGuides.find(g => g.id === guideId);

  if (!guide) {
    return (
      <Container className="py-16 pt-32">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Guide non trouvé</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Le guide demandé n'existe pas ou a été supprimé.</p>
          <Button onClick={() => navigate('/workspace?tab=guides')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux guides
          </Button>
        </div>
      </Container>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-muted text-foreground border-border';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'Débutant';
      case 'intermediate':
        return 'Intermédiaire';
      case 'advanced':
        return 'Avancé';
      default:
        return '';
    }
  };

  const exportGuideAsText = () => {
    let content = `
${guide.title.toUpperCase()}
${'='.repeat(guide.title.length)}

Description: ${guide.description}
Catégorie: ${guide.category}
Difficulté: ${getDifficultyLabel(guide.difficulty || '')}
Temps de lecture: ${guide.estimatedTime || guide.readTime}
Dernière mise à jour: ${formatDate(guide.lastUpdated)}

Tags: ${guide.tags?.join(', ') || 'Aucun tag'}

CONTENU:
--------
`;

    if (guide.content) {
      content += guide.content + '\n\n';
    }

    if (guide.sections) {
      guide.sections.forEach((section, index) => {
        content += `${index + 1}. ${section.title}\n`;
        content += '-'.repeat(section.title.length + 3) + '\n';
        content += section.content + '\n\n';
        
        if (section.subsections) {
          section.subsections.forEach((subsection, subIndex) => {
            content += `  ${index + 1}.${subIndex + 1}. ${subsection.title}\n`;
            content += '  ' + '-'.repeat(subsection.title.length + 6) + '\n';
            content += '  ' + subsection.content.replace(/\n/g, '\n  ') + '\n\n';
          });
        }
      });
    }

    content += `
---
Généré par Progineer - ${window.location.href}
Date d'export: ${new Date().toLocaleDateString('fr-FR')}
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `guide_${guide.id}_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const exportGuideAsMarkdown = () => {
    let content = `# ${guide.title}\n\n`;
    
    content += `**Description:** ${guide.description}\n\n`;
    content += `**Catégorie:** ${guide.category}\n`;
    content += `**Difficulté:** ${getDifficultyLabel(guide.difficulty || '')}\n`;
    content += `**Temps de lecture:** ${guide.estimatedTime || guide.readTime}\n`;
    content += `**Dernière mise à jour:** ${formatDate(guide.lastUpdated)}\n\n`;
    
    content += `**Tags:** ${guide.tags?.map(tag => `\`${tag}\``).join(', ') || 'Aucun tag'}\n\n`;
    
    content += `---\n\n`;

    if (guide.content) {
      content += guide.content + '\n\n';
    }

    if (guide.sections) {
      guide.sections.forEach((section, index) => {
        content += `## ${index + 1}. ${section.title}\n\n`;
        content += section.content + '\n\n';
        
        if (section.subsections) {
          section.subsections.forEach((subsection, subIndex) => {
            content += `### ${index + 1}.${subIndex + 1}. ${subsection.title}\n\n`;
            content += subsection.content + '\n\n';
          });
        }
      });
    }

    content += `---\n\n`;
    content += `*Généré par [Progineer](${window.location.href}) le ${new Date().toLocaleDateString('fr-FR')}*\n`;

    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `guide_${guide.id}_${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const printGuide = () => {
    const printContent = `
      <html>
        <head>
          <title>${guide.title} - Progineer</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              line-height: 1.6; 
              max-width: 800px; 
              margin: 0 auto; 
              padding: 20px;
              color: #333;
            }
            h1 { 
              color: #2c3e50; 
              border-bottom: 3px solid #3498db; 
              padding-bottom: 10px;
            }
            h2 { 
              color: #34495e; 
              margin-top: 30px;
              border-left: 4px solid #3498db;
              padding-left: 15px;
            }
            h3 { 
              color: #7f8c8d; 
              margin-left: 20px;
            }
            .meta-info { 
              background: #ecf0f1; 
              padding: 15px; 
              border-radius: 5px; 
              margin: 20px 0;
            }
            .tags { 
              margin: 10px 0; 
            }
            .tag { 
              background: #3498db; 
              color: white; 
              padding: 2px 8px; 
              border-radius: 3px; 
              font-size: 12px;
              margin-right: 5px;
            }
            .content { 
              margin: 20px 0; 
            }
            .footer { 
              margin-top: 40px; 
              padding-top: 20px; 
              border-top: 1px solid #bdc3c7; 
              font-size: 12px; 
              color: #7f8c8d;
            }
            @media print {
              body { margin: 0; padding: 15px; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <h1>${guide.title}</h1>
          
          <div class="meta-info">
            <strong>Description:</strong> ${guide.description}<br>
            <strong>Catégorie:</strong> ${guide.category}<br>
            <strong>Difficulté:</strong> ${getDifficultyLabel(guide.difficulty || '')}<br>
            <strong>Temps de lecture:</strong> ${guide.estimatedTime || guide.readTime}<br>
            <strong>Dernière mise à jour:</strong> ${formatDate(guide.lastUpdated)}
          </div>

          <div class="tags">
            <strong>Tags:</strong> 
            ${guide.tags?.map(tag => `<span class="tag">${tag}</span>`).join('') || 'Aucun tag'}
          </div>

          <div class="content">
            ${guide.content ? guide.content.replace(/\n/g, '<br>') : ''}
            
            ${guide.sections ? guide.sections.map((section, index) => `
              <h2>${index + 1}. ${section.title}</h2>
              <p>${section.content.replace(/\n/g, '<br>')}</p>
              
              ${section.subsections ? section.subsections.map((subsection, subIndex) => `
                <h3>${index + 1}.${subIndex + 1}. ${subsection.title}</h3>
                <p style="margin-left: 20px;">${subsection.content.replace(/\n/g, '<br>')}</p>
              `).join('') : ''}
            `).join('') : ''}
          </div>

          <div class="footer">
            Généré par Progineer - ${window.location.href}<br>
            Date d'impression: ${new Date().toLocaleDateString('fr-FR')}
          </div>
        </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
      printWindow.print();
    }
  };

  return (
    <>
      <SEOHeader
        title={guide.seoData?.title || guide.title}
        description={guide.seoData?.metaDescription || guide.description}
        keywords={(guide.seoData?.keywords || []).join(', ')}
        canonicalUrl={guide.seoData?.canonicalUrl}
      />

      <div className="pt-32">
        <Container className="py-8">
          {/* Navigation */}
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/workspace?tab=guides')}
              className="text-khaki-600 hover:text-khaki-700"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux guides
            </Button>
          </div>

          {/* Header du guide */}
          <div className="bg-card rounded-xl shadow-lg p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-khaki-600" />
                  <span className="text-sm font-medium text-khaki-600">Guide Pratique</span>
                  {guide.difficulty && (
                    <Badge 
                      variant="outline" 
                      className={getDifficultyColor(guide.difficulty)}
                    >
                      {getDifficultyLabel(guide.difficulty)}
                    </Badge>
                  )}
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {guide.title}
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  <InternalLinkText text={guide.description} maxOccurrences={2} />
                </p>

                {/* Métadonnées */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-low-contrast mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{guide.estimatedTime || guide.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Mis à jour le {formatDate(guide.lastUpdated)}</span>
                  </div>
                </div>

                {/* Tags */}
                {guide.tags && guide.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Tags className="h-4 w-4 text-gray-400 mt-1" />
                    {guide.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Actions d'export */}
                <div className="flex flex-wrap gap-3">
                  {guide.downloadUrl && (
                    <Button 
                      onClick={() => window.open(guide.downloadUrl, '_blank')}
                      className="bg-khaki-600 hover:bg-khaki-700"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Télécharger PDF ({guide.fileSize})
                    </Button>
                  )}
                  
                  <Button variant="outline" onClick={exportGuideAsText}>
                    <FileText className="h-4 w-4 mr-2" />
                    Exporter TXT
                  </Button>
                  
                  <Button variant="outline" onClick={exportGuideAsMarkdown}>
                    <Download className="h-4 w-4 mr-2" />
                    Exporter MD
                  </Button>
                  
                  <Button variant="outline" onClick={printGuide}>
                    <Printer className="h-4 w-4 mr-2" />
                    Imprimer
                  </Button>
                  
                  <Button variant="outline">
                    <Share2 className="h-4 w-4 mr-2" />
                    Partager
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu du guide */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contenu principal */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Contenu du guide</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  {guide.content && (
                    <div className="whitespace-pre-wrap">
                      {guide.content}
                    </div>
                  )}
                  
                  {guide.sections && guide.sections.map((section, index) => (
                    <div key={section.id || index} className="mb-8">
                      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                        {section.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {section.content}
                      </p>
                      
                      {section.subsections && section.subsections.map((subsection, subIndex) => (
                        <div key={subsection.id || subIndex} className="ml-6 mb-6">
                          <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">
                            {subsection.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {subsection.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Export rapide */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Export rapide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" size="sm" onClick={exportGuideAsText} className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Format Texte (.txt)
                  </Button>
                  <Button variant="outline" size="sm" onClick={exportGuideAsMarkdown} className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Format Markdown (.md)
                  </Button>
                  <Button variant="outline" size="sm" onClick={printGuide} className="w-full justify-start">
                    <Printer className="h-4 w-4 mr-2" />
                    Version imprimable
                  </Button>
                </CardContent>
              </Card>

              {/* Guides liés */}
              {guide.relatedGuides && guide.relatedGuides.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Guides liés</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {guide.relatedGuides.map((relatedId, index) => {
                        const relatedGuide = mainGuides.find(g => g.id === relatedId);
                        if (!relatedGuide) return null;
                        
                        return (
                          <div 
                            key={index} 
                            className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                            onClick={() => navigate(`/workspace/guides/${relatedGuide.id}`)}
                          >
                            <h4 className="font-medium text-sm text-gray-900 dark:text-white mb-1">
                              {relatedGuide.title}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                              {relatedGuide.description}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Informations supplémentaires */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Informations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Catégorie</span>
                    <span className="font-medium">{guide.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Type</span>
                    <span className="font-medium">Guide pratique</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Accès</span>
                    <span className="font-medium">
                      {guide.isPremium ? 'Premium' : 'Gratuit'}
                    </span>
                  </div>
                  {guide.fileSize && (
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Taille</span>
                      <span className="font-medium">{guide.fileSize}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
        {/* Bloc SEO Footer et FAQ */}
        <section className="py-8 bg-card border-t border-stone-200 mt-12">
          <Container>
            <div className="text-sm text-stone-500 space-y-6">
              <p>
                <InternalLinkText text={`Retrouvez d'autres guides pratiques, calculateurs et ressources sur Progineer pour optimiser vos projets de construction et rénovation en région PACA. Consultez aussi nos fiches de réglementation et nos outils de veille pour rester informé des dernières évolutions.`} maxOccurrences={4} />
              </p>
              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">Questions fréquentes sur ce guide</h2>
                <div className="space-y-4">
                  <div className="bg-stone-100 p-4 rounded">
                    <strong>Ce guide est-il à jour ?</strong>
                    <p>Oui, ce guide est régulièrement mis à jour par nos experts pour refléter les dernières évolutions réglementaires et techniques.</p>
                  </div>
                  <div className="bg-stone-100 p-4 rounded">
                    <strong>Puis-je télécharger ce guide ?</strong>
                    <p>Oui, vous pouvez le télécharger au format PDF ou TXT pour une utilisation hors ligne.</p>
                  </div>
                  <div className="bg-stone-100 p-4 rounded">
                    <strong>À qui s'adresse ce guide ?</strong>
                    <p>Ce guide s'adresse aux particuliers, professionnels, architectes et artisans souhaitant réussir leur projet en PACA.</p>
                  </div>
                  <div className="bg-stone-100 p-4 rounded">
                    <strong>Comment contacter un expert Progineer ?</strong>
                    <p>Utilisez le formulaire de contact du site pour poser vos questions ou demander un accompagnement personnalisé.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Données structurées FAQ pour Google */}
            <FAQStructuredData
              faqs={[
                { question: "Ce guide est-il à jour ?", answer: "Oui, ce guide est régulièrement mis à jour par nos experts pour refléter les dernières évolutions réglementaires et techniques." },
                { question: "Puis-je télécharger ce guide ?", answer: "Oui, vous pouvez le télécharger au format PDF ou TXT pour une utilisation hors ligne." },
                { question: "À qui s'adresse ce guide ?", answer: "Ce guide s'adresse aux particuliers, professionnels, architectes et artisans souhaitant réussir leur projet en PACA." },
                { question: "Comment contacter un expert Progineer ?", answer: "Utilisez le formulaire de contact du site pour poser vos questions ou demander un accompagnement personnalisé." }
              ]}
              pageUrl={`https://progineer.fr/workspace/guides/${guide.id}`}
            />
          </Container>
        </section>
      </div>
    </>
  );
};

export default GuideDetailPage; 