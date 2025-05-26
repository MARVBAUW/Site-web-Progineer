
import { ReactNode } from 'react';
import { AuthContext } from './AuthContext';
import { useAuthState } from './useAuthState';
import { useSignIn } from './useSignIn';
import { useSignUp } from './useSignUp';
import { useSignOut } from './useSignOut';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { session, user, loading, error, setError, setLoading } = useAuthState();
  const { signIn, signInWithGoogle } = useSignIn(setLoading, setError);
  const { signUp, signUpWithGoogle } = useSignUp(setLoading, setError);
  const { signOut } = useSignOut(setLoading, setError);

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        loading,
        error,
        isAuthenticated: !!user,
        isLoading: loading,
        signIn,
        signUp,
        signOut,
        signInWithGoogle,
        signUpWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
