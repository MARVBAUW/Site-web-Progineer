#!/usr/bin/env node

/**
 * Script pour tester l'Edge Function avec plus de détails
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

async function testEdgeFunctionDetailed() {
  console.log('🧪 Test détaillé de l\'Edge Function');
  console.log('===================================');
  
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.log('❌ Variables d\'environnement manquantes');
    return;
  }
  
  const url = `${SUPABASE_URL}/functions/v1/generate-veille-article`;
  
  try {
    console.log('📡 Appel de l\'Edge Function...');
    console.log('URL:', url);
    
    const testData = {
      topic: 'Nouvelles normes RE2020 pour 2025',
      category: 'reglementation',
      keywords: ['RE2020', 'normes', '2025', 'PACA', 'construction'],
      sources: []
    };
    
    console.log('📝 Données envoyées:', JSON.stringify(testData, null, 2));
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
      },
      body: JSON.stringify(testData)
    });
    
    console.log('📊 Status:', response.status);
    console.log('📊 Headers:', Object.fromEntries(response.headers.entries()));
    
    const result = await response.json();
    console.log('📋 Réponse complète:', JSON.stringify(result, null, 2));
    
    if (response.ok && result.success) {
      console.log('✅ Edge Function fonctionne parfaitement !');
      console.log('📝 Article généré:');
      console.log('   - ID:', result.article?.id);
      console.log('   - Titre:', result.article?.title);
      console.log('   - Catégorie:', result.article?.category);
      console.log('   - Publié:', result.article?.is_published ? 'Oui' : 'Non');
    } else {
      console.log('⚠️  Problème détecté');
    }
    
  } catch (error) {
    console.log('❌ Erreur lors du test:', error.message);
  }
}

testEdgeFunctionDetailed(); 