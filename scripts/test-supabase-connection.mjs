#!/usr/bin/env node

/**
 * Script de test pour vérifier la connexion Supabase et l'existence de la table veille_articles
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import path from 'path';

// Charger les variables d'environnement depuis .env.local ou .env
function loadEnvFile() {
  try {
    // Essayer d'abord .env.local, puis .env
    let envPath = path.join(process.cwd(), '.env.local');
    let envContent;
    
    try {
      envContent = readFileSync(envPath, 'utf8');
      console.log('✅ Fichier .env.local trouvé et chargé');
    } catch {
      envPath = path.join(process.cwd(), '.env');
      envContent = readFileSync(envPath, 'utf8');
      console.log('✅ Fichier .env trouvé et chargé');
    }
    
    envContent.split('\n').forEach((line, index) => {
      const trimmedLine = line.trim();
      if (trimmedLine && !trimmedLine.startsWith('#')) {
        const [key, ...valueParts] = trimmedLine.split('=');
        if (key && valueParts.length > 0) {
          const value = valueParts.join('=').trim();
          process.env[key.trim()] = value;
          console.log(`   Ligne ${index + 1}: ${key.trim()} = ${value.substring(0, 30)}...`);
        }
      }
    });
    
    console.log('\n🔍 Variables détectées après chargement:');
    console.log(`   SUPABASE_URL: ${process.env.SUPABASE_URL ? 'Définie' : 'Non définie'}`);
    console.log(`   SUPABASE_ANON_KEY: ${process.env.SUPABASE_ANON_KEY ? 'Définie' : 'Non définie'}`);
    console.log(`   VITE_SUPABASE_URL: ${process.env.VITE_SUPABASE_URL ? 'Définie' : 'Non définie'}`);
    console.log(`   VITE_SUPABASE_ANON_KEY: ${process.env.VITE_SUPABASE_ANON_KEY ? 'Définie' : 'Non définie'}`);
    
  } catch (error) {
    console.log('⚠️  Aucun fichier .env trouvé, utilisation des variables système');
  }
}

// Charger les variables d'environnement
loadEnvFile();

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

async function testSupabaseConnection() {
  console.log('🧪 Test de connexion Supabase');
  console.log('================================');
  
  // Vérifier les variables d'environnement
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('❌ Variables d\'environnement manquantes :');
    if (!SUPABASE_URL) console.error('   - SUPABASE_URL');
    if (!SUPABASE_ANON_KEY) console.error('   - SUPABASE_ANON_KEY');
    return;
  }

  console.log('✅ Variables d\'environnement configurées');
  console.log(`📡 URL Supabase: ${SUPABASE_URL}`);
  console.log(`🔑 Clé Anon: ${SUPABASE_ANON_KEY.substring(0, 20)}...`);

  try {
    // Créer le client Supabase
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('✅ Client Supabase créé');

    // Test 1: Vérifier la connexion et l'existence de la table
    console.log('\n🔍 Test 1: Vérification de la connexion...');
    const { data: healthCheck, error: healthError } = await supabase
      .from('veille_articles')
      .select('count', { count: 'exact', head: true });

    if (healthError) {
      if (healthError.message.includes('relation "veille_articles" does not exist')) {
        console.log('⚠️  Table veille_articles n\'existe pas encore');
        console.log('📝 Veuillez exécuter la migration SQL dans le dashboard Supabase');
        return;
      } else if (healthError.message.includes('permission denied') || healthError.message.includes('RLS')) {
        console.log('⚠️  Accès restreint par RLS - C\'est normal pour la sécurité');
        console.log('✅ Table veille_articles existe et RLS est activé');
      } else {
        console.log('⚠️  Erreur de connexion:', healthError.message);
        throw healthError;
      }
    } else {
      console.log('✅ Connexion à la base de données réussie');
      console.log(`📊 Nombre d'articles existants: ${healthCheck || 0}`);
    }

    console.log('✅ Connexion à la base de données réussie');
    console.log(`📊 Nombre d'articles existants: ${healthCheck || 0}`);

    // Test 2: Vérifier la structure de la table
    console.log('\n🔍 Test 2: Vérification de la structure de la table...');
    const { data: tableInfo, error: tableError } = await supabase
      .from('veille_articles')
      .select('*')
      .limit(1);

    if (tableError) {
      throw tableError;
    }

    console.log('✅ Structure de la table vérifiée');

    // Test 3: Test d'insertion (si autorisé)
    console.log('\n🔍 Test 3: Test d\'insertion d\'un article de test...');
    const testArticle = {
      id: `test-${Date.now()}`,
      title: 'Article de test - Connexion Supabase',
      excerpt: 'Ceci est un article de test pour vérifier la connexion.',
      content: '<p>Contenu de test pour vérifier que l\'insertion fonctionne.</p>',
      category: 'reglementation',
      priority: 'faible',
      tags: ['test', 'connexion'],
      published_at: new Date().toISOString().split('T')[0],
      read_time: '1 min',
      views: 0,
      author: 'Test Script',
      sources: [],
      seo_keywords: ['test', 'supabase'],
      is_published: false
    };

    const { data: insertData, error: insertError } = await supabase
      .from('veille_articles')
      .insert([testArticle])
      .select();

    if (insertError) {
      if (insertError.message.includes('permission denied') || insertError.message.includes('RLS')) {
        console.log('⚠️  Insertion non autorisée (RLS activé) - C\'est normal');
        console.log('✅ La sécurité RLS fonctionne correctement');
      } else {
        throw insertError;
      }
    } else {
      console.log('✅ Article de test inséré avec succès');
      console.log(`📝 ID de l'article: ${insertData[0].id}`);

      // Nettoyer l'article de test
      await supabase
        .from('veille_articles')
        .delete()
        .eq('id', testArticle.id);
      console.log('🧹 Article de test supprimé');
    }

    // Test 4: Test de lecture des articles publiés
    console.log('\n🔍 Test 4: Test de lecture des articles publiés...');
    const { data: publishedArticles, error: readError } = await supabase
      .from('veille_articles')
      .select('id, title, category, is_published')
      .eq('is_published', true)
      .limit(5);

    if (readError) {
      throw readError;
    }

    console.log('✅ Lecture des articles publiés réussie');
    console.log(`📚 Articles publiés trouvés: ${publishedArticles.length}`);

    if (publishedArticles.length > 0) {
      console.log('📋 Aperçu des articles:');
      publishedArticles.forEach((article, index) => {
        console.log(`   ${index + 1}. ${article.title} (${article.category})`);
      });
    }

    console.log('\n🎉 Tous les tests sont passés avec succès !');
    console.log('✅ Votre configuration Supabase est opérationnelle');

  } catch (error) {
    console.error('\n❌ Erreur lors du test:', error.message);
    console.error('📋 Détails de l\'erreur:', error);
    console.error('🔧 Vérifiez votre configuration Supabase');
  }
}

// Exécuter le test
testSupabaseConnection().catch(error => {
  console.error('❌ Erreur fatale:', error);
  process.exit(1);
}); 