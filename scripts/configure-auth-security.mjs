import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Charger les variables d'environnement
dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function configureAuthSecurity() {
  try {
    // Activer la protection contre les mots de passe compromis
    const { data, error } = await supabase.auth.admin.updateAuthConfig({
      password_protection: {
        enabled: true,
        min_length: 8,
        require_special_chars: true,
        require_numbers: true,
        require_uppercase: true,
        require_lowercase: true,
        check_hibp: true // Active la vérification HaveIBeenPwned
      }
    });

    if (error) {
      console.error('Erreur lors de la configuration de la sécurité:', error);
      process.exit(1);
    }

    console.log('✅ Configuration de sécurité mise à jour avec succès');
    console.log('Configuration actuelle:', data);
  } catch (error) {
    console.error('Erreur inattendue:', error);
    process.exit(1);
  }
}

// Exécution
configureAuthSecurity(); 