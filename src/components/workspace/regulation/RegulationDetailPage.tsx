import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ScrollText, Clock, Calendar, Download, Eye, Share2, FileText, ExternalLink, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Container from '@/components/common/Container';
import SEOHeader from '@/components/common/SEOHeader';
import { allRegulations } from '@/data/regulation/regulationData';

const RegulationDetailPage: React.FC = () => {
  const { regulationId } = useParams<{ regulationId: string }>();
  const navigate = useNavigate();

  // Trouver le document de réglementation par ID
  const regulation = allRegulations.find(r => r.id === regulationId);

  if (!regulation) {
    return (
      <Container className="py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Document non trouvé</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Le document de réglementation demandé n'existe pas ou a été supprimé.</p>
          <Button onClick={() => navigate('/workspace/regulation')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à la réglementation
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

  const getCategoryLabel = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      'dtu': 'Documents Techniques Unifiés',
      'normes': 'Normes techniques',
      'reglementation': 'Réglementation officielle',
      'guides': 'Guides techniques',
      'eurocode': 'Eurocodes',
      'accessibilite': 'Accessibilité',
      'fire-safety': 'Sécurité Incendie',
      'thermal': 'Thermique RE2020'
    };
    return categoryMap[category] || category;
  };

  const getRegulationTypeLabel = (type: string) => {
    const typeMap: { [key: string]: string } = {
      'dtu': 'Document Technique Unifié',
      'eurocode': 'Norme Eurocode',
      'fire-safety': 'Réglementation Incendie',
      'accessibility': 'Accessibilité PMR',
      'thermal': 'Réglementation Thermique',
      'seismic': 'Règles Parasismiques',
      'environmental': 'Réglementation Environnementale'
    };
    return typeMap[type] || type;
  };

  const exportRegulationAsText = () => {
    let content = `
${regulation.title.toUpperCase()}
${'='.repeat(regulation.title.length)}

Référence: ${regulation.reference}
Type: ${getRegulationTypeLabel(regulation.regulationType)}
Catégorie: ${getCategoryLabel(regulation.category)}
Domaine d'application: ${regulation.scope}
Dernière mise à jour: ${formatDate(regulation.lastUpdated)}
${regulation.applicableFrom ? `En vigueur depuis: ${formatDate(regulation.applicableFrom)}` : ''}

Description: ${regulation.description}

Tags: ${regulation.tags.join(', ')}

RÈGLES PRINCIPALES:
==================
`;

    if (regulation.keyRules && regulation.keyRules.length > 0) {
      regulation.keyRules.forEach((rule, index) => {
        content += `\n${index + 1}. ${rule.title} ${rule.mandatory ? '[OBLIGATOIRE]' : ''}\n`;
        content += '-'.repeat(rule.title.length + 10) + '\n';
        content += rule.description + '\n';
        
        if (rule.exceptions && rule.exceptions.length > 0) {
          content += '\nExceptions:\n';
          rule.exceptions.forEach(exception => {
            content += `  • ${exception}\n`;
          });
        }
        
        if (rule.references && rule.references.length > 0) {
          content += `\nRéférences: ${rule.references.join(', ')}\n`;
        }
        content += '\n';
      });
    }

    if (regulation.tolerances && regulation.tolerances.length > 0) {
      content += '\nTOLÉRANCES D\'EXÉCUTION:\n';
      content += '========================\n';
      regulation.tolerances.forEach(tolerance => {
        content += `${tolerance.parameter}: ${tolerance.tolerance}`;
        if (tolerance.conditions) {
          content += ` (${tolerance.conditions})`;
        }
        content += '\n';
      });
    }

    if (regulation.dimensions && regulation.dimensions.length > 0) {
      content += '\nDIMENSIONS RÉGLEMENTAIRES:\n';
      content += '===========================\n';
      regulation.dimensions.forEach(dimension => {
        content += `${dimension.element}: ${dimension.dimension}`;
        if (dimension.minimum) content += ` (min: ${dimension.minimum})`;
        if (dimension.maximum) content += ` (max: ${dimension.maximum})`;
        if (dimension.conditions) content += ` - ${dimension.conditions}`;
        content += '\n';
      });
    }

    content += `
---
Généré par Progineer - ${window.location.href}
Date d'export: ${new Date().toLocaleDateString('fr-FR')}
IMPORTANT: Vérifiez toujours les textes officiels pour une valeur juridique complète.
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `regulation_${regulation.id}_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const printRegulation = () => {
    const printContent = `
      <html>
        <head>
          <title>${regulation.title} - Progineer</title>
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
              border-bottom: 3px solid #27ae60; 
              padding-bottom: 10px;
            }
            h2 { 
              color: #34495e; 
              margin-top: 30px;
              border-left: 4px solid #27ae60;
              padding-left: 15px;
            }
            .meta-info { 
              background: #ecf0f1; 
              padding: 15px; 
              border-radius: 5px; 
              margin: 20px 0;
              border-left: 4px solid #27ae60;
            }
            .rule { 
              margin: 15px 0; 
              padding: 10px;
              background: #f8f9fa;
              border-radius: 5px;
            }
            .rule-title { 
              font-weight: bold; 
              color: #2c3e50;
              margin-bottom: 5px;
            }
            .mandatory { 
              background: #fff3cd; 
              border: 1px solid #ffeaa7;
              color: #856404;
              padding: 2px 6px;
              border-radius: 3px;
              font-size: 12px;
              margin-left: 10px;
            }
            .exceptions { 
              background: #fff3cd; 
              padding: 8px; 
              margin: 8px 0;
              border-radius: 4px;
              border-left: 3px solid #f39c12;
            }
            .tolerance-table { 
              width: 100%; 
              border-collapse: collapse; 
              margin: 15px 0;
            }
            .tolerance-table th, .tolerance-table td { 
              border: 1px solid #ddd; 
              padding: 8px; 
              text-align: left;
            }
            .tolerance-table th { 
              background: #f2f2f2; 
              font-weight: bold;
            }
            .footer { 
              margin-top: 40px; 
              padding-top: 20px; 
              border-top: 1px solid #bdc3c7; 
              font-size: 12px; 
              color: #7f8c8d;
            }
            .warning { 
              background: #d4edda; 
              border: 1px solid #c3e6cb; 
              color: #155724; 
              padding: 10px; 
              border-radius: 5px; 
              margin: 15px 0;
            }
            @media print {
              body { margin: 0; padding: 15px; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <h1>${regulation.title}</h1>
          
          <div class="meta-info">
            <strong>Référence:</strong> ${regulation.reference}<br>
            <strong>Type:</strong> ${getRegulationTypeLabel(regulation.regulationType)}<br>
            <strong>Catégorie:</strong> ${getCategoryLabel(regulation.category)}<br>
            <strong>Domaine d'application:</strong> ${regulation.scope}<br>
            <strong>Dernière mise à jour:</strong> ${formatDate(regulation.lastUpdated)}<br>
            ${regulation.applicableFrom ? `<strong>En vigueur depuis:</strong> ${formatDate(regulation.applicableFrom)}<br>` : ''}
          </div>

          <p><strong>Description:</strong> ${regulation.description}</p>

          ${regulation.keyRules && regulation.keyRules.length > 0 ? `
            <h2>Règles principales</h2>
            ${regulation.keyRules.map((rule, index) => `
              <div class="rule">
                <div class="rule-title">
                  ${index + 1}. ${rule.title}
                  ${rule.mandatory ? '<span class="mandatory">OBLIGATOIRE</span>' : ''}
                </div>
                <p>${rule.description}</p>
                ${rule.exceptions && rule.exceptions.length > 0 ? `
                  <div class="exceptions">
                    <strong>Exceptions:</strong><br>
                    ${rule.exceptions.map(exception => `• ${exception}`).join('<br>')}
                  </div>
                ` : ''}
                ${rule.references && rule.references.length > 0 ? `
                  <p><em>Références: ${rule.references.join(', ')}</em></p>
                ` : ''}
              </div>
            `).join('')}
          ` : ''}

          ${regulation.tolerances && regulation.tolerances.length > 0 ? `
            <h2>Tolérances d'exécution</h2>
            <table class="tolerance-table">
              <thead>
                <tr>
                  <th>Paramètre</th>
                  <th>Tolérance</th>
                  <th>Conditions</th>
                </tr>
              </thead>
              <tbody>
                ${regulation.tolerances.map(tolerance => `
                  <tr>
                    <td>${tolerance.parameter}</td>
                    <td>${tolerance.tolerance}</td>
                    <td>${tolerance.conditions || '-'}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          ` : ''}

          ${regulation.dimensions && regulation.dimensions.length > 0 ? `
            <h2>Dimensions réglementaires</h2>
            ${regulation.dimensions.map(dimension => `
              <div class="rule">
                <div class="rule-title">${dimension.element}</div>
                <p><strong>Dimension:</strong> ${dimension.dimension}</p>
                ${dimension.minimum ? `<p><strong>Minimum:</strong> ${dimension.minimum}</p>` : ''}
                ${dimension.maximum ? `<p><strong>Maximum:</strong> ${dimension.maximum}</p>` : ''}
                ${dimension.conditions ? `<p><em>${dimension.conditions}</em></p>` : ''}
              </div>
            `).join('')}
          ` : ''}

          <div class="warning">
            <strong>Avertissement juridique:</strong> Ce document est une synthèse technique. 
            Pour une valeur juridique complète, référez-vous toujours aux textes officiels 
            publiés au Journal Officiel.
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
        title={regulation.seoData?.title || regulation.title}
        description={regulation.seoData?.metaDescription || regulation.description}
        keywords={regulation.seoData?.keywords?.join(', ') || regulation.tags.join(', ')}
        canonicalUrl={regulation.seoData?.canonicalUrl || `https://progineer.fr/workspace/regulation/${regulation.id}`}
      />

      <Container className="py-8">
        {/* Navigation */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/workspace/regulation')}
            className="text-green-600 hover:text-green-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à la réglementation
          </Button>
        </div>

        {/* Header du document */}
        <div className="bg-card rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <ScrollText className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-green-600">
                  {getRegulationTypeLabel(regulation.regulationType)}
                </span>
                {regulation.isPremium && (
                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                    Premium
                  </Badge>
                )}
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  {regulation.reference}
                </Badge>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {regulation.title}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {regulation.description}
              </p>

              {/* Domaine d'application */}
              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">Domaine d'application</h3>
                <p className="text-gray-600 dark:text-gray-300">{regulation.scope}</p>
              </div>

              {/* Métadonnées */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-low-contrast mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Mis à jour le {formatDate(regulation.lastUpdated)}</span>
                </div>
                {regulation.applicableFrom && (
                  <div className="flex items-center gap-1">
                    <span>Applicable depuis le {formatDate(regulation.applicableFrom)}</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              {regulation.tags && regulation.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {regulation.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Actions d'export */}
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="outline"
                  onClick={exportRegulationAsText}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Exporter TXT
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={printRegulation}
                >
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

        {/* Contenu du document */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Règles principales */}
            {regulation.keyRules && regulation.keyRules.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Règles principales</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {regulation.keyRules.map((rule, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-gray-900 dark:text-white">{rule.title}</h4>
                        <div className="flex items-center gap-2">
                          {rule.mandatory && (
                            <Badge variant="outline" className="text-xs bg-red-50 text-red-700 border-red-200">
                              Obligatoire
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                        {rule.description}
                      </p>
                      
                      {rule.exceptions && rule.exceptions.length > 0 && (
                        <div className="bg-orange-50 rounded p-3 mb-3">
                          <h5 className="font-medium text-orange-900 text-xs mb-1">Exceptions :</h5>
                          <ul className="text-orange-800 text-xs space-y-1">
                            {rule.exceptions.map((exception, excIndex) => (
                              <li key={excIndex}>• {exception}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {rule.references && rule.references.length > 0 && (
                        <div className="text-xs text-gray-600 dark:text-gray-300">
                          <span className="font-medium">Références : </span>
                          {rule.references.join(', ')}
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Tolérances */}
            {regulation.tolerances && regulation.tolerances.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Tolérances d'exécution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b bg-muted/50">
                          <th className="text-left p-3 font-medium">Paramètre</th>
                          <th className="text-left p-3 font-medium">Tolérance</th>
                          <th className="text-left p-3 font-medium">Conditions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {regulation.tolerances.map((tolerance, index) => (
                          <tr key={index} className="border-b">
                            <td className="p-3">{tolerance.parameter}</td>
                            <td className="p-3 font-mono">{tolerance.tolerance}</td>
                            <td className="p-3 text-gray-600 dark:text-gray-300">{tolerance.conditions || '-'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Dimensions */}
            {regulation.dimensions && regulation.dimensions.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Dimensions réglementaires</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {regulation.dimensions.map((dimension, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">{dimension.element}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600 dark:text-gray-300">Dimension : </span>
                            <span className="font-medium">{dimension.dimension}</span>
                          </div>
                          {dimension.minimum && (
                            <div>
                              <span className="text-gray-600 dark:text-gray-300">Minimum : </span>
                              <span className="font-medium text-red-600">{dimension.minimum}</span>
                            </div>
                          )}
                          {dimension.maximum && (
                            <div>
                              <span className="text-gray-600 dark:text-gray-300">Maximum : </span>
                              <span className="font-medium text-red-600">{dimension.maximum}</span>
                            </div>
                          )}
                        </div>
                        {dimension.conditions && (
                          <p className="text-gray-600 dark:text-gray-300 text-xs mt-2">{dimension.conditions}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Export rapide */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Export rapide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" onClick={exportRegulationAsText} className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Format Texte (.txt)
                </Button>
                <Button variant="outline" size="sm" onClick={printRegulation} className="w-full justify-start">
                  <Printer className="h-4 w-4 mr-2" />
                  Version imprimable
                </Button>
              </CardContent>
            </Card>

            {/* Documents liés */}
            {regulation.relatedDocuments && regulation.relatedDocuments.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Documents liés</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {regulation.relatedDocuments.map((relatedId, index) => {
                      const relatedDoc = allRegulations.find(r => r.id === relatedId);
                      if (!relatedDoc) {
                        return (
                          <div key={index} className="p-3 border rounded-lg bg-muted/50">
                            <h4 className="font-medium text-sm text-gray-600 dark:text-gray-300 mb-1">
                              {relatedId}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-300">
                              Document de référence externe
                            </p>
                          </div>
                        );
                      }
                      
                      return (
                        <div 
                          key={index} 
                          className="p-3 border rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                          onClick={() => navigate(`/workspace/regulation/${relatedDoc.id}`)}
                        >
                          <h4 className="font-medium text-sm text-gray-900 dark:text-white mb-1">
                            {relatedDoc.title}
                          </h4>
                          <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                            {relatedDoc.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Informations sur le document */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Informations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Référence</span>
                  <span className="font-medium">{regulation.reference}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Type</span>
                  <span className="font-medium">{getRegulationTypeLabel(regulation.regulationType)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Catégorie</span>
                  <span className="font-medium">{getCategoryLabel(regulation.category)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Accès</span>
                  <span className="font-medium">
                    {regulation.isPremium ? 'Premium' : 'Gratuit'}
                  </span>
                </div>
                {regulation.applicableFrom && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">En vigueur depuis</span>
                    <span className="font-medium">{formatDate(regulation.applicableFrom)}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Informations de supersession */}
            {regulation.supersedes && regulation.supersedes.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Documents remplacés</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {regulation.supersedes.map((superseded, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <ArrowLeft className="h-3 w-3" />
                        <span>{superseded}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Mise à jour */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dernière mise à jour</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <p className="mb-2">
                    Ce document a été mis à jour le <strong>{formatDate(regulation.lastUpdated)}</strong>
                  </p>
                  <p className="text-xs">
                    Les données présentées sont issues des textes officiels en vigueur.
                    Vérifiez toujours les dernières versions sur les sites officiels.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RegulationDetailPage; 