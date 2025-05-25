#!/usr/bin/env node

/**
 * Script de test simple pour Supabase
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import path from 'path';

// Charger les variables d'environnement
function loadEnvFile() {
  try {
    let envPath = path.join(process.cwd(), '.env.local');
    let envContent;
    
    try {
      envContent = readFileSync(envPath, 'utf8');
      console.log('✅ Fichier .env.local trouvé');
    } catch {
      envPath = path.join(process.cwd(), '.env');
      envContent = readFileSync(envPath, 'utf8');
      console.log('✅ Fichier .env trouvé');
    }
    
    envContent.split('\n').forEach((line, index) => {
      const trimmedLine = line.trim();
      if (trimmedLine && !trimmedLine.startsWith('#')) {
        const [key, ...valueParts] = trimmedLine.split('=');
        if (key && valueParts.length > 0) {
          const value = valueParts.join('=').trim();
          process.env[key.trim()] = value;
          console.log(`   ${key.trim()} = ${value.substring(0, 20)}...`);
        }
      }
    });
  } catch (error) {
    console.log('❌ Erreur chargement .env:', error.message);
  }
}

loadEnvFile();

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

async function testSimple() {
  console.log('🧪 Test Supabase Simple');
  console.log('======================');
  
  console.log('URL:', SUPABASE_URL);
  console.log('Key:', SUPABASE_ANON_KEY ? 'Définie' : 'Non définie');
  
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.log('❌ Variables manquantes');
    return;
  }
  
  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('✅ Client créé');
    
    // Test très simple - juste une requête SELECT basique
    console.log('🔍 Test de requête simple...');
    const { data, error } = await supabase
      .from('veille_articles')
      .select('id')
      .limit(1);
    
    if (error) {
      console.log('❌ Erreur:', error);
      console.log('Code:', error.code);
      console.log('Message:', error.message);
      console.log('Details:', error.details);
      console.log('Hint:', error.hint);
    } else {
      console.log('✅ Requête réussie');
      console.log('Données:', data);
    }
    
  } catch (err) {
    console.log('❌ Erreur catch:', err);
  }
}

testSimple(); 