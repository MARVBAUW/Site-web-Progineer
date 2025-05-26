
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface UseClientAuthOptions {
  redirectIfUnauthenticated?: boolean;
}

export const useClientAuth = (options: UseClientAuthOptions = {}) => {
  const { user, isLoading, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (options.redirectIfUnauthenticated && !isLoading && !isAuthenticated) {
      navigate('/workspace/sign-in');
    }
  }, [isLoading, isAuthenticated, navigate, options.redirectIfUnauthenticated]);

  return {
    isLoaded: !isLoading,
    isSignedIn: isAuthenticated,
    user,
  };
};
