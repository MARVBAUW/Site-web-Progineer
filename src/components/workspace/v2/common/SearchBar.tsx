import React, { useState, useCallback } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, X, Filter } from 'lucide-react';
import { SearchFilters } from '@/types/workspace';

interface SearchBarProps {
  onSearch: (query: string, filters: SearchFilters) => void;
  placeholder?: string;
  filters?: SearchFilters;
  showFilters?: boolean;
  categories?: Array<{ id: string; name: string; count: number }>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = "Rechercher dans le workspace...",
  filters = {},
  showFilters = true,
  categories = []
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<SearchFilters>(filters);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const handleSearch = useCallback(() => {
    onSearch(searchQuery, activeFilters);
  }, [searchQuery, activeFilters, onSearch]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    const newFilters = { ...activeFilters, [key]: value };
    setActiveFilters(newFilters);
    onSearch(searchQuery, newFilters);
  };

  const removeFilter = (key: keyof SearchFilters) => {
    const newFilters = { ...activeFilters };
    delete newFilters[key];
    setActiveFilters(newFilters);
    onSearch(searchQuery, newFilters);
  };

  const clearAllFilters = () => {
    setActiveFilters({});
    setSearchQuery('');
    onSearch('', {});
  };

  const activeFilterCount = Object.keys(activeFilters).length;

  return (
    <div className="space-y-4">
      {/* Barre de recherche principale */}
      <div className="relative flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-low-contrast" />
          <Input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="pl-10 pr-4"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        
        <Button onClick={handleSearch} className="px-6">
          <Search className="h-4 w-4 mr-2" />
          Rechercher
        </Button>
        
        {showFilters && (
          <Button
            variant="outline"
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            className="relative"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filtres
            {activeFilterCount > 0 && (
              <Badge 
                variant="secondary" 
                className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs flex items-center justify-center"
              >
                {activeFilterCount}
              </Badge>
            )}
          </Button>
        )}
      </div>

      {/* Filtres actifs */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-sm text-gray-600 dark:text-gray-300">Filtres actifs :</span>
          {activeFilters.category && (
            <Badge variant="outline" className="flex items-center gap-1">
              Catégorie: {activeFilters.category}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFilter('category')}
                className="h-4 w-4 p-0 ml-1"
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          {activeFilters.difficulty && (
            <Badge variant="outline" className="flex items-center gap-1">
              Niveau: {activeFilters.difficulty}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFilter('difficulty')}
                className="h-4 w-4 p-0 ml-1"
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          {activeFilters.type && (
            <Badge variant="outline" className="flex items-center gap-1">
              Type: {activeFilters.type}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFilter('type')}
                className="h-4 w-4 p-0 ml-1"
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          {activeFilters.isPremium !== undefined && (
            <Badge variant="outline" className="flex items-center gap-1">
              {activeFilters.isPremium ? 'Premium' : 'Gratuit'}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeFilter('isPremium')}
                className="h-4 w-4 p-0 ml-1"
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-red-600 hover:text-red-800"
          >
            Effacer tout
          </Button>
        </div>
      )}

      {/* Filtres avancés */}
      {showAdvancedFilters && (
        <div className="bg-muted/50 p-4 rounded-lg border space-y-4">
          <h3 className="font-medium text-gray-900 dark:text-white">Filtres avancés</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Filtre par catégorie */}
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                Catégorie
              </label>
              <select
                value={activeFilters.category || ''}
                onChange={(e) => handleFilterChange('category', e.target.value || undefined)}
                className="w-full rounded-md border border-border px-3 py-2 text-sm"
              >
                <option value="">Toutes les catégories</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name} ({cat.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Filtre par difficulté */}
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                Niveau de difficulté
              </label>
              <select
                value={activeFilters.difficulty || ''}
                onChange={(e) => handleFilterChange('difficulty', e.target.value || undefined)}
                className="w-full rounded-md border border-border px-3 py-2 text-sm"
              >
                <option value="">Tous les niveaux</option>
                <option value="beginner">Débutant</option>
                <option value="intermediate">Intermédiaire</option>
                <option value="advanced">Avancé</option>
              </select>
            </div>

            {/* Filtre par type */}
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                Type de ressource
              </label>
              <select
                value={activeFilters.type || ''}
                onChange={(e) => handleFilterChange('type', e.target.value || undefined)}
                className="w-full rounded-md border border-border px-3 py-2 text-sm"
              >
                <option value="">Tous les types</option>
                <option value="guide">Guides</option>
                <option value="calculator">Calculateurs</option>
                <option value="regulation">Réglementation</option>
              </select>
            </div>

            {/* Filtre Premium */}
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
                Accès
              </label>
              <select
                value={activeFilters.isPremium === undefined ? '' : activeFilters.isPremium ? 'premium' : 'free'}
                onChange={(e) => {
                  const value = e.target.value;
                  handleFilterChange('isPremium', value === '' ? undefined : value === 'premium');
                }}
                className="w-full rounded-md border border-border px-3 py-2 text-sm"
              >
                <option value="">Tous</option>
                <option value="free">Gratuit</option>
                <option value="premium">Premium</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar; 