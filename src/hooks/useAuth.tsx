
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { User as SupabaseUser } from '@supabase/supabase-js';

// Type pour l'utilisateur avec les propriétés nécessaires
export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role?: 'client' | 'admin';
  user_metadata?: {
    full_name?: string;
    [key: string]: any;
  };
  app_metadata?: {
    [key: string]: any;
  };
  aud?: string;
  created_at?: string;
}

// Type pour le contexte d'authentification
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, metadata?: { full_name?: string; [key: string]: any }) => Promise<void>;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signUpWithGoogle: () => Promise<void>;
}

// Contexte d'authentification
const AuthContext = createContext<AuthContextType | null>(null);

// Provider d'authentification
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Simulation de vérification de l'authentification au chargement
  useEffect(() => {
    const checkAuth = () => {
      try {
        const storedUser = localStorage.getItem('auth_user');
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          setUser(userData);
        }
      } catch (error) {
        console.error('Erreur lors de la vérification de l\'authentification:', error);
        localStorage.removeItem('auth_user');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // Simulation d'une API call - à remplacer par votre logique d'authentification
      if (email && password) {
        const userData: User = {
          id: 'user_' + Math.random().toString(36).substr(2, 9),
          email,
          firstName: 'Client',
          lastName: 'Test',
          role: 'client',
          user_metadata: {
            full_name: 'Client Test'
          },
          app_metadata: {},
          aud: 'authenticated',
          created_at: new Date().toISOString()
        };
        
        setUser(userData);
        localStorage.setItem('auth_user', JSON.stringify(userData));
      } else {
        throw new Error('Email et mot de passe requis');
      }
    } catch (error) {
      console.error('Erreur de connexion:', error);
      setError(error instanceof Error ? error.message : 'Erreur de connexion');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string, metadata?: { full_name?: string; [key: string]: any }) => {
    setIsLoading(true);
    setError(null);
    try {
      if (email && password) {
        const userData: User = {
          id: 'user_' + Math.random().toString(36).substr(2, 9),
          email,
          firstName: metadata?.full_name?.split(' ')[0] || 'Nouveau',
          lastName: metadata?.full_name?.split(' ').slice(1).join(' ') || 'Client',
          role: 'client',
          user_metadata: {
            full_name: metadata?.full_name || 'Nouveau Client',
            ...metadata
          },
          app_metadata: {},
          aud: 'authenticated',
          created_at: new Date().toISOString()
        };
        
        setUser(userData);
        localStorage.setItem('auth_user', JSON.stringify(userData));
      } else {
        throw new Error('Email et mot de passe requis');
      }
    } catch (error) {
      console.error('Erreur d\'inscription:', error);
      setError(error instanceof Error ? error.message : 'Erreur d\'inscription');
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setUser(null);
      localStorage.removeItem('auth_user');
      setError(null);
    } catch (error) {
      console.error('Erreur de déconnexion:', error);
      setError(error instanceof Error ? error.message : 'Erreur de déconnexion');
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    setError('Connexion Google non implémentée dans cette version de démonstration');
  };

  const signUpWithGoogle = async () => {
    setError('Inscription Google non implémentée dans cette version de démonstration');
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    loading: isLoading,
    error,
    signIn,
    signUp,
    signOut,
    signInWithGoogle,
    signUpWithGoogle
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook pour utiliser l'authentification
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé dans un AuthProvider');
  }
  return context;
};
