import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

// Type pour l'utilisateur
export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role?: 'client' | 'admin';
}

// Type pour le contexte d'authentification
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, firstName?: string, lastName?: string) => Promise<void>;
  signOut: () => Promise<void>;
}

// Contexte d'authentification
const AuthContext = createContext<AuthContextType | null>(null);

// Provider d'authentification
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
    try {
      // Simulation d'une API call - à remplacer par votre logique d'authentification
      // Ici on simule une authentification réussie
      if (email && password) {
        const userData: User = {
          id: 'user_' + Math.random().toString(36).substr(2, 9),
          email,
          firstName: 'Client',
          lastName: 'Test',
          role: 'client'
        };
        
        setUser(userData);
        localStorage.setItem('auth_user', JSON.stringify(userData));
      } else {
        throw new Error('Email et mot de passe requis');
      }
    } catch (error) {
      console.error('Erreur de connexion:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string, firstName?: string, lastName?: string) => {
    setIsLoading(true);
    try {
      // Simulation d'une API call - à remplacer par votre logique d'inscription
      if (email && password) {
        const userData: User = {
          id: 'user_' + Math.random().toString(36).substr(2, 9),
          email,
          firstName: firstName || 'Nouveau',
          lastName: lastName || 'Client',
          role: 'client'
        };
        
        setUser(userData);
        localStorage.setItem('auth_user', JSON.stringify(userData));
      } else {
        throw new Error('Email et mot de passe requis');
      }
    } catch (error) {
      console.error('Erreur d\'inscription:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setUser(null);
      localStorage.removeItem('auth_user');
    } catch (error) {
      console.error('Erreur de déconnexion:', error);
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    signIn,
    signUp,
    signOut
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
