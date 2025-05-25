import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  Eye, 
  Download, 
  Calculator, 
  FileText, 
  ScrollText, 
  Crown,
  Star,
  Calendar,
  Tag,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { WorkspaceResource } from '@/types/workspace';

interface ResourceCardProps {
  resource: WorkspaceResource;
  onClick?: (resource: WorkspaceResource) => void;
  showFullDescription?: boolean;
  compact?: boolean;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  resource, 
  onClick, 
  showFullDescription = false,
  compact = false 
}) => {
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide':
        return <FileText className="h-4 w-4" />;
      case 'calculator':
        return <Calculator className="h-4 w-4" />;
      case 'regulation':
        return <ScrollText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'guide':
        return 'Guide';
      case 'calculator':
        return 'Calculateur';
      case 'regulation':
        return 'Réglementation';
      default:
        return 'Ressource';
    }
  };

  const getDifficultyColor = (difficulty?: string) => {
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

  const getDifficultyLabel = (difficulty?: string) => {
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const handleCardClick = () => {
    if (onClick) {
      onClick(resource);
    }
  };

  return (
    <Card 
      className={`group transition-all duration-200 hover:shadow-lg hover:border-khaki-200 cursor-pointer ${
        compact ? 'h-auto' : 'h-full'
      } relative overflow-hidden`}
      onClick={handleCardClick}
    >
      {/* Header avec type et premium badge */}
      <CardHeader className={compact ? 'pb-3' : 'pb-4'}>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-khaki-600">
              {getTypeIcon(resource.type)}
              <span className="text-xs font-medium">
                {getTypeLabel(resource.type)}
              </span>
            </div>
            {resource.isPremium && (
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                <Crown className="h-3 w-3 mr-1" />
                Premium
              </Badge>
            )}
          </div>
          
          {/* Tags principaux */}
          <div className="flex gap-1">
            {resource.difficulty && (
              <Badge 
                variant="outline" 
                className={`text-xs ${getDifficultyColor(resource.difficulty)}`}
              >
                {getDifficultyLabel(resource.difficulty)}
              </Badge>
            )}
          </div>
        </div>

        <CardTitle className={`group-hover:text-khaki-700 transition-colors ${
          compact ? 'text-base leading-tight' : 'text-lg'
        }`}>
          {resource.title}
        </CardTitle>

        <CardDescription className={`${compact ? 'text-sm line-clamp-2' : ''}`}>
          {showFullDescription ? resource.description : 
           resource.description.length > 120 ? 
           `${resource.description.substring(0, 120)}...` : 
           resource.description
          }
        </CardDescription>
      </CardHeader>

      {!compact && (
        <CardContent className="space-y-3">
          {/* Tags */}
          {resource.tags && resource.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {resource.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  <Tag className="h-2 w-2 mr-1" />
                  {tag}
                </Badge>
              ))}
              {resource.tags.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{resource.tags.length - 3}
                </Badge>
              )}
            </div>
          )}

          {/* Métadonnées */}
          <div className="flex items-center justify-between text-xs text-low-contrast">
            <div className="flex items-center gap-3">
              {resource.estimatedTime && (
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {resource.estimatedTime}
                </div>
              )}
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formatDate(resource.lastUpdated)}
              </div>
            </div>
          </div>
        </CardContent>
      )}

      <CardFooter className={`pt-0 ${compact ? 'pb-3' : ''}`}>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2 text-xs text-low-contrast">
            {compact && resource.estimatedTime && (
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {resource.estimatedTime}
              </div>
            )}
            {compact && (
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formatDate(resource.lastUpdated)}
              </div>
            )}
          </div>

          <Button 
            variant="ghost" 
            size="sm" 
            className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto"
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
          >
            {resource.type === 'calculator' ? 'Calculer' : 'Lire'}
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardFooter>

      {/* Indicateur de nouveauté */}
      {resource.lastUpdated && 
       new Date(resource.lastUpdated) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) && (
        <div className="absolute top-2 right-2">
          <Badge className="bg-green-500 text-white text-xs px-2 py-1">
            <Star className="h-2 w-2 mr-1" />
            Nouveau
          </Badge>
        </div>
      )}
    </Card>
  );
};

export default ResourceCard; 