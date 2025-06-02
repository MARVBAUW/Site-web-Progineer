import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/use-toast';

const SESSION_TIMEOUT = 60 * 60 * 1000; // 1 heure en millisecondes
const WARNING_TIME = 5 * 60 * 1000; // 5 minutes avant la déconnexion

export const useSessionTimeout = () => {
  const navigate = useNavigate();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const warningTimeoutRef = useRef<NodeJS.Timeout>();

  const resetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (warningTimeoutRef.current) {
      clearTimeout(warningTimeoutRef.current);
    }

    // Définir le timer d'avertissement
    warningTimeoutRef.current = setTimeout(() => {
      toast({
        title: "Session expirant bientôt",
        description: "Votre session expirera dans 5 minutes. Voulez-vous rester connecté ?",
        duration: 10000,
        action: (
          <div className="flex justify-end mt-4">
            <button
              onClick={() => {
                resetTimer();
                toast({
                  title: "Session prolongée",
                  description: "Votre session a été prolongée d'une heure.",
                });
              }}
              className="bg-khaki-600 text-white px-4 py-2 rounded-md hover:bg-khaki-700"
            >
              Rester connecté
            </button>
          </div>
        ),
      });
    }, SESSION_TIMEOUT - WARNING_TIME);

    // Définir le timer de déconnexion
    timeoutRef.current = setTimeout(async () => {
      await supabase.auth.signOut();
      toast({
        title: "Session expirée",
        description: "Votre session a expiré. Veuillez vous reconnecter.",
        variant: "destructive",
      });
      navigate('/workspace/sign-in');
    }, SESSION_TIMEOUT);
  };

  useEffect(() => {
    // Réinitialiser le timer sur les événements utilisateur
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    
    const handleUserActivity = () => {
      resetTimer();
    };

    events.forEach(event => {
      window.addEventListener(event, handleUserActivity);
    });

    // Initialiser le timer
    resetTimer();

    // Nettoyer les event listeners et timers
    return () => {
      events.forEach(event => {
        window.removeEventListener(event, handleUserActivity);
      });
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (warningTimeoutRef.current) {
        clearTimeout(warningTimeoutRef.current);
      }
    };
  }, [navigate]);
}; 