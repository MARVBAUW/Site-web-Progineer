#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';

// Clés correctes directement dans le script
const url = 'https://your-project.supabase.co';
const key = 'your-jwt-key-here';

console.log('🧪 Test avec les bonnes clés JWT');
console.log('================================');

console.log('URL:', url);
console.log('Key (premiers 30 chars):', key.substring(0, 30) + '...');

try {
  const supabase = createClient(url, key);
  
  // Test d'existence de la table
  console.log('🔍 Test d\'existence de la table...');
  const { data, error } = await supabase
    .from('veille_articles')
    .select('count', { count: 'exact', head: true });
  
  if (error) {
    console.log('📋 Détails de l\'erreur:', error);
    
    if (error.message && error.message.includes('relation "veille_articles" does not exist')) {
      console.log('❌ Table veille_articles n\'existe pas');
      console.log('📝 Vous devez exécuter la migration SQL dans le dashboard Supabase');
      console.log('📁 Fichier: supabase/migrations/20250120000000_create_veille_articles.sql');
    } else if (error.message && (error.message.includes('permission denied') || error.message.includes('RLS'))) {
      console.log('✅ Table veille_articles existe');
      console.log('⚠️  Accès restreint par RLS (normal pour la sécurité)');
    } else {
      console.log('❌ Autre erreur:', error.message);
    }
  } else {
    console.log('✅ Table veille_articles existe et accessible');
    console.log(`📊 Nombre d'articles: ${data || 0}`);
  }
  
} catch (err) {
  console.log('❌ Erreur catch:', err.message);
} 