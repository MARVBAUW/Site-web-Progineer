
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Github } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import FormField from './FormField';
import AuthButton from './AuthButton';

// Vérifier si l'email entré est un email administrateur
const ADMIN_EMAILS = ['marvinbauwens@gmail.com', 'progineer.moe@gmail.com'];

const LoginForm = () => {
  const navigate = useNavigate();
  const { signIn, signInWithGoogle, loading, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  // Vérifier si l'email entré est un email administrateur
  const isAdminSignin = ADMIN_EMAILS.includes(email.toLowerCase());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!email.trim()) {
      setFormError('L\'email est requis');
      return;
    }

    if (!password.trim()) {
      setFormError('Le mot de passe est requis');
      return;
    }

    console.log('Submitting login form with email:', email);
    await signIn(email, password);
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (err) {
      console.error('Google Sign-In Error:', err);
      setFormError('Erreur lors de la connexion avec Google');
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Connectez-vous à votre compte
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Entrez vos identifiants pour accéder à votre espace client
        </p>
      </div>

      {isAdminSignin && (
        <Alert className="mb-4 bg-amber-50 border-amber-200">
          <AlertDescription className="text-amber-700">
            <strong>Connexion administrateur</strong> - Accès privilégié pour {email}
          </AlertDescription>
        </Alert>
      )}

      {(error || formError) && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>
            {formError || error}
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          isAdmin={isAdminSignin}
          disabled={loading}
        />

        <FormField
          id="password"
          label="Mot de passe"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />

        <AuthButton loading={loading} isAdmin={isAdminSignin}>
          {isAdminSignin ? 'Connexion administrateur' : 'Se connecter'}
        </AuthButton>
      </form>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border"></span>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-card text-low-contrast">
            Ou continuer avec
          </span>
        </div>
      </div>

      <AuthButton
        type="button"
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="bg-card hover:bg-muted/50 text-gray-600 dark:text-gray-300 border border-border"
      >
        <Github className="mr-2 h-5 w-5" />
        Continuer avec Google
      </AuthButton>
    </div>
  );
};

export default LoginForm;
