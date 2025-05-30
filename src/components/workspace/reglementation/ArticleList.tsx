
import React from 'react';
import { Search } from 'lucide-react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { ArticleCard } from './ArticleCard';

interface ArticleListProps {
  filteredArticles: any[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
  handleArticleClick: (article: any) => void;
}

export const ArticleList: React.FC<ArticleListProps> = ({ 
  filteredArticles, 
  page, 
  setPage, 
  itemsPerPage,
  handleArticleClick
}) => {
  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const paginatedArticles = filteredArticles.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  if (filteredArticles.length === 0) {
    return (
      <div className="text-center py-10 bg-muted/50 rounded-lg">
        <Search className="h-10 w-10 text-gray-600 dark:text-gray-300 mx-auto mb-3" />
        <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300">Aucun résultat trouvé</h3>
        <p className="text-low-contrast mt-1">Essayez de modifier vos critères de recherche</p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-6">
        {paginatedArticles.map((article) => (
          <ArticleCard 
            key={article.id} 
            article={article} 
            onArticleClick={handleArticleClick} 
          />
        ))}
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setPage(page => Math.max(1, page - 1))}
                className={page <= 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
            
            {Array.from({ length: totalPages }).map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink 
                  onClick={() => setPage(i + 1)}
                  isActive={page === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => setPage(page => Math.min(totalPages, page + 1))}
                className={page >= totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};
