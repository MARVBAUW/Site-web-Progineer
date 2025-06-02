import { supabase } from '@/integrations/supabase/client';
import { useEffect, useState } from 'react';

export const useSupabase = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const { data, error } = await supabase.from('profiles').select('id').limit(1);
        if (error) throw error;
        setIsInitialized(true);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to initialize Supabase'));
        console.error('Supabase initialization error:', err);
      }
    };

    checkConnection();
  }, []);

  return { 
    supabase,
    isInitialized,
    error
  };
};
