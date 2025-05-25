#!/usr/bin/env node

/**
 * Script pour déployer l'Edge Function via l'API REST Supabase
 */

import { readFileSync } from 'fs';
import path from 'path';

// Charger les variables d'environnement
function loadEnv() {
  try {
    const envContent = readFileSync(path.join(process.cwd(), '.env'), 'utf8');
    envContent.split('\n').forEach((line) => {
      const trimmedLine = line.trim();
      if (trimmedLine && !trimmedLine.startsWith('#')) {
        const [key, ...valueParts] = trimmedLine.split('=');
        if (key && valueParts.length > 0) {
          process.env[key.trim()] = valueParts.join('=').trim();
        }
      }
    });
  } catch (error) {
    console.log('Erreur chargement .env:', error.message);
  }
}

loadEnv();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('🚀 Déploiement de l\'Edge Function generate-veille-article');
console.log('=====================================================');

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.log('❌ Variables d\'environnement manquantes');
  console.log('   - SUPABASE_URL:', SUPABASE_URL ? 'OK' : 'MANQUANT');
  console.log('   - SUPABASE_SERVICE_ROLE_KEY:', SUPABASE_SERVICE_ROLE_KEY ? 'OK' : 'MANQUANT');
  process.exit(1);
}

async function deployEdgeFunction() {
  try {
    // Lire le code de l'Edge Function
    const functionCode = readFileSync(
      path.join(process.cwd(), 'supabase/functions/generate-veille-article/index.ts'),
      'utf8'
    );

    console.log('📁 Code de l\'Edge Function chargé');
    console.log(`📊 Taille: ${functionCode.length} caractères`);

    // Pour le moment, affichons les instructions manuelles
    console.log('\n📋 Instructions de déploiement manuel :');
    console.log('=====================================');
    console.log('1. Connectez-vous à votre dashboard Supabase');
    console.log('2. Allez dans "Edge Functions"');
    console.log('3. Cliquez sur "Create a new function"');
    console.log('4. Nom: generate-veille-article');
    console.log('5. Copiez-collez le code depuis:');
    console.log('   supabase/functions/generate-veille-article/index.ts');
    console.log('6. Déployez la fonction');

    console.log('\n🔧 Variables d\'environnement à configurer dans Supabase :');
    console.log('========================================================');
    console.log('SUPABASE_URL=' + SUPABASE_URL);
    console.log('SUPABASE_ANON_KEY=' + process.env.SUPABASE_ANON_KEY);
    console.log('ANTHROPIC_API_KEY=' + process.env.ANTHROPIC_API_KEY);

    console.log('\n✅ Une fois déployée, l\'URL sera :');
    console.log(`${SUPABASE_URL}/functions/v1/generate-veille-article`);

  } catch (error) {
    console.error('❌ Erreur:', error.message);
  }
}

deployEdgeFunction(); 