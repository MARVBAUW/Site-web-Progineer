import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Article {
  id: string;
  title: string;
  content: string;
  summary: string;
  keywords: string[];
  created_at: string;
  source: string;
  status: 'draft' | 'published';
}

export const useVeilleReglementaire = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const generateArticle = async (query: string, source: string = 'manual') => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.functions.invoke('generate-veille-article', {
        body: { 
          query,
          source,
          type: 'article'
        }
      });

      if (error) throw error;
      return data;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to generate article'));
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getArticles = async (status?: 'draft' | 'published') => {
    try {
      let query = supabase
        .from('veille_articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (status) {
        query = query.eq('status', status);
      }

      const { data, error } = await query;
      if (error) throw error;
      const articles = (data ?? []).map((a: any) => ({
        id: a.id,
        title: a.title,
        content: a.content,
        summary: a.excerpt,
        keywords: a.keywords ?? [],
        created_at: a.created_at,
        source: a.source ?? '',
        status: a.is_published ? 'published' : 'draft',
      }));
      return articles as Article[];
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to fetch articles'));
      throw err;
    }
  };

  const publishArticle = async (articleId: string) => {
    try {
      const { error } = await supabase
        .from('veille_articles')
        .update({ is_published: true })
        .eq('id', articleId);

      if (error) throw error;
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to publish article'));
      throw err;
    }
  };

  return {
    generateArticle,
    getArticles,
    publishArticle,
    loading,
    error
  };
}; 