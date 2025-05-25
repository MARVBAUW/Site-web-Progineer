#!/usr/bin/env node

/**
 * Script pour tester l'Edge Function déployée
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

async function testEdgeFunction() {
  console.log('🧪 Test de l\'Edge Function déployée');
  console.log('===================================');
  
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.log('❌ Variables d\'environnement manquantes');
    return;
  }
  
  const url = `${SUPABASE_URL}/functions/v1/generate-veille-article`;
  
  try {
    console.log('📡 Appel de l\'Edge Function...');
    console.log('URL:', url);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`
      },
      body: JSON.stringify({
        topic: 'Test automatisation RE2020',
        category: 'reglementation',
        keywords: ['RE2020', 'test', 'automatisation', 'PACA'],
        sources: []
      })
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log('✅ Edge Function fonctionne !');
      console.log('📝 Article généré:', result.article?.title || 'Titre non disponible');
    } else {
      console.log('⚠️  Edge Function pas encore déployée ou erreur');
      console.log('Status:', response.status);
      console.log('Message:', await response.text());
    }
    
  } catch (error) {
    console.log('❌ Erreur lors du test:', error.message);
    console.log('💡 L\'Edge Function n\'est probablement pas encore déployée');
  }
}

testEdgeFunction();
