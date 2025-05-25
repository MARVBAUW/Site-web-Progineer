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

console.log('URL:', url);
console.log('Key (premiers 20 chars):', key ? key.substring(0, 20) + '...' : 'Non définie');

if (!url || !key) {
  console.log('❌ Variables manquantes');
  process.exit(1);
}

try {
  const supabase = createClient(url, key);
  
  // Test ultra-simple - juste vérifier l'auth
  const { data, error } = await supabase.auth.getSession();
  
  if (error) {
    console.log('❌ Erreur auth:', error.message);
  } else {
    console.log('✅ Connexion Supabase OK');
    console.log('Session:', data.session ? 'Connecté' : 'Non connecté');
  }
  
} catch (err) {
  console.log('❌ Erreur:', err.message);
} 