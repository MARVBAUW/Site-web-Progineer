# 🚀 Guide de Déploiement Automatisation Complète

## Étape 1 : Déployer l'Edge Function Supabase

1. **Connectez-vous à votre dashboard Supabase** : https://supabase.com/dashboard
2. **Allez dans "Edge Functions"** (menu de gauche)
3. **Cliquez sur "Create a new function"**
4. **Nom de la fonction** : `generate-veille-article`
5. **Copiez le code** depuis `supabase/functions/generate-veille-article/index.ts`
6. **Configurez les variables d'environnement** dans Supabase :
   - `SUPABASE_URL` = https://usakxozksekpuoukvksj.supabase.co
   - `SUPABASE_ANON_KEY` = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   - `ANTHROPIC_API_KEY` = sk-ant-api03-59E30vBrQafl6CIiqGWQ3Rljz_0eDCNyN7FOfB4Gy8LLek9nqo7...
7. **Déployez la fonction**

## Étape 2 : Tester l'Edge Function

```bash
npm run test:edge-function
```

## Étape 3 : Configurer GitHub Actions (Automatisation)

1. **Poussez votre code sur GitHub** (si pas déjà fait)
2. **Allez dans Settings → Secrets and variables → Actions**
3. **Ajoutez le secret** :
   - Nom : `SUPABASE_SERVICE_ROLE_KEY`
   - Valeur : `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzYWt4b3prc2VrcHVvdWt2a3NqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0Mjk5ODU3MywiZXhwIjoyMDU4NTc0NTczfQ.VdjqdvzeZ1xcPm9LQw0anW3JUX8ONlL6qCHe3YL0h1o`

## Étape 4 : Vérifier l'automatisation

- **Workflow créé** : `.github/workflows/veille-automation.yml`
- **Planning** : Lundi, Mercredi, Vendredi à 8h00 UTC (9h00 Paris)
- **Test manuel** : Onglet "Actions" → "Run workflow"

## 🎯 Résultat Final

Une fois configuré, votre système :
- ✅ Génère automatiquement des articles 3x/semaine
- ✅ Fonctionne sans votre PC (serveurs GitHub/Supabase)
- ✅ Sauvegarde les articles dans votre base Supabase
- ✅ Articles visibles sur votre site déployé

## 🔧 Commandes Utiles

```bash
# Tester l'Edge Function
npm run test:edge-function

# Générer un article manuellement
npm run veille:test

# Voir les logs
npm run veille:logs
```
