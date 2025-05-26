
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';

const AuthExample = () => {
  const { user, isLoading, signOut } = useAuth();

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  if (!user) {
    return <div>Non connecté</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Exemple d'authentification</h2>
      <p>Utilisateur connecté: {user.email}</p>
      <Button onClick={signOut} className="mt-2">
        Se déconnecter
      </Button>
    </div>
  );
};

export default AuthExample;
