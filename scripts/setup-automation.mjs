#!/usr/bin/env node

/**
 * Script pour configurer l'automatisation complète du système de veille
 */

import { writeFileSync, mkdirSync } from 'fs';
import path from 'path';

console.log('🚀 Configuration de l\'automatisation complète');
console.log('==============================================');

// Créer le dossier .github/workflows s'il n'existe pas
try {
  mkdirSync('.github', { recursive: true });
  mkdirSync('.github/workflows', { recursive: true });
  console.log('📁 Dossier .github/workflows créé');
} catch (error) {
  console.log('📁 Dossier .github/workflows existe déjà');
}

// Créer le workflow GitHub Actions
const githubWorkflow = `name: Génération Automatique Articles Veille

on:
  schedule:
    # Lundi, Mercredi, Vendredi à 8h00 UTC (9h00 Paris)
    - cron: '0 8 * * 1,3,5'
  workflow_dispatch: # Permet de déclencher manuellement

jobs:
  generate-article:
    runs-on: ubuntu-latest
    
    steps:
    - name: Générer article de veille
      run: |
        curl -X POST \\
          -H "Content-Type: application/json" \\
          -H "Authorization: Bearer \${{ secrets.SUPABASE_SERVICE_ROLE_KEY }}" \\
          -d '{
            "topic": "Évolutions réglementaires construction",
            "category": "reglementation",
            "keywords": ["RE2020", "construction", "PACA", "réglementation"]
          }' \\
          https://your-project.supabase.co/functions/v1/generate-veille-article
      
    - name: Notification succès
      if: success()
      run: echo "✅ Article de veille généré avec succès"
      
    - name: Notification échec
      if: failure()
      run: echo "❌ Erreur lors de la génération d'article"
`;

writeFileSync('.github/workflows/veille-automation.yml', githubWorkflow);
console.log('✅ Workflow GitHub Actions créé : .github/workflows/veille-automation.yml');

// Créer le script de test de l'Edge Function
const testEdgeFunction = `#!/usr/bin/env node

/**
 * Script pour tester l'Edge Function déployée
 */

import { readFileSync } from 'fs';
import path from 'path';

// Charger les variables d'environnement
function loadEnv() {
  try {
    const envContent = readFileSync(path.join(process.cwd(), '.env'), 'utf8');
    envContent.split('\\n').forEach((line) => {
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
  console.log('🧪 Test de l\\'Edge Function déployée');
  console.log('===================================');
  
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.log('❌ Variables d\\'environnement manquantes');
    return;
  }
  
  const url = \`\${SUPABASE_URL}/functions/v1/generate-veille-article\`;
  
  try {
    console.log('📡 Appel de l\\'Edge Function...');
    console.log('URL:', url);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${SUPABASE_SERVICE_ROLE_KEY}\`
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
    console.log('💡 L\\'Edge Function n\\'est probablement pas encore déployée');
  }
}

testEdgeFunction();
`;

writeFileSync('scripts/test-edge-function.mjs', testEdgeFunction);
console.log('✅ Script de test créé : scripts/test-edge-function.mjs');

// Créer le guide de déploiement
const deploymentGuide = `# 🚀 Guide de Déploiement Automatisation Complète

## Étape 1 : Déployer l'Edge Function Supabase

1. **Connectez-vous à votre dashboard Supabase** : https://supabase.com/dashboard
2. **Allez dans "Edge Functions"** (menu de gauche)
3. **Cliquez sur "Create a new function"**
4. **Nom de la fonction** : \`generate-veille-article\`
5. **Copiez le code** depuis \`supabase/functions/generate-veille-article/index.ts\`
6. **Configurez les variables d'environnement** dans Supabase :
   - \`SUPABASE_URL\` = https://your-project.supabase.co
   - \`SUPABASE_ANON_KEY\` = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   - \`ANTHROPIC_API_KEY\` = sk-ant-api03-your-key-here
7. **Déployez la fonction**

## Étape 2 : Tester l'Edge Function

\`\`\`bash
npm run test:edge-function
\`\`\`

## Étape 3 : Configurer GitHub Actions (Automatisation)

1. **Poussez votre code sur GitHub** (si pas déjà fait)
2. **Allez dans Settings → Secrets and variables → Actions**
3. **Ajoutez le secret** :
   - Nom : \`SUPABASE_SERVICE_ROLE_KEY\`
   - Valeur : \`your-jwt-key-here\`

## Étape 4 : Vérifier l'automatisation

- **Workflow créé** : \`.github/workflows/veille-automation.yml\`
- **Planning** : Lundi, Mercredi, Vendredi à 8h00 UTC (9h00 Paris)
- **Test manuel** : Onglet "Actions" → "Run workflow"

## 🎯 Résultat Final

Une fois configuré, votre système :
- ✅ Génère automatiquement des articles 3x/semaine
- ✅ Fonctionne sans votre PC (serveurs GitHub/Supabase)
- ✅ Sauvegarde les articles dans votre base Supabase
- ✅ Articles visibles sur votre site déployé

## 🔧 Commandes Utiles

\`\`\`bash
# Tester l'Edge Function
npm run test:edge-function

# Générer un article manuellement
npm run veille:test

# Voir les logs
npm run veille:logs
\`\`\`
`;

writeFileSync('GUIDE_AUTOMATISATION_COMPLETE.md', deploymentGuide);
console.log('✅ Guide créé : GUIDE_AUTOMATISATION_COMPLETE.md');

// Ajouter les commandes NPM
const packageJsonPath = 'package.json';
try {
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
  
  packageJson.scripts = {
    ...packageJson.scripts,
    'test:edge-function': 'node scripts/test-edge-function.mjs',
    'setup:automation': 'node scripts/setup-automation.mjs'
  };
  
  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Commandes NPM ajoutées au package.json');
} catch (error) {
  console.log('⚠️  Impossible de modifier package.json:', error.message);
}

console.log('\\n🎉 Configuration terminée !');
console.log('============================');
console.log('📖 Consultez GUIDE_AUTOMATISATION_COMPLETE.md pour les prochaines étapes');
console.log('🧪 Testez avec : npm run test:edge-function'); 