#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import path from 'path';

// Charger .env
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
    console.log('Erreur:', error.message);
  }
}

loadEnv();

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_ANON_KEY;

console.log('🧪 Test existence table veille_articles');
console.log('=======================================');

console.log('URL:', url);
console.log('Key (premiers 30 chars):', key ? key.substring(0, 30) + '...' : 'Non définie');

if (!url || !key) {
  console.log('❌ Variables manquantes');
  process.exit(1);
}

try {
  const supabase = createClient(url, key);
  
  // Test d'existence de la table
  console.log('🔍 Test d\'existence de la table...');
  const { data, error } = await supabase
    .from('veille_articles')
    .select('count', { count: 'exact', head: true });
  
  if (error) {
    console.log('📋 Détails de l\'erreur:', error);
    console.log('📋 Message:', error.message);
    console.log('📋 Code:', error.code);
    console.log('📋 Details:', error.details);
    console.log('📋 Hint:', error.hint);
    
    if (error.message && error.message.includes('relation "veille_articles" does not exist')) {
      console.log('❌ Table veille_articles n\'existe pas');
      console.log('📝 Vous devez exécuter la migration SQL dans le dashboard Supabase');
      console.log('📁 Fichier: supabase/migrations/20250120000000_create_veille_articles.sql');
    } else if (error.message && (error.message.includes('permission denied') || error.message.includes('RLS'))) {
      console.log('✅ Table veille_articles existe');
      console.log('⚠️  Accès restreint par RLS (normal pour la sécurité)');
    } else {
      console.log('❌ Erreur non identifiée');
    }
  } else {
    console.log('✅ Table veille_articles existe et accessible');
    console.log(`📊 Nombre d'articles: ${data || 0}`);
  }
  
} catch (err) {
  console.log('❌ Erreur:', err.message);
} 