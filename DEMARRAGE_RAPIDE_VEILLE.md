# 🚀 Démarrage Rapide - Système de Veille Réglementaire

## ✅ Prérequis

- Node.js 18+ installé
- Compte Supabase configuré
- Clé API Anthropic Claude

## 🔧 Configuration en 5 Minutes

### 1. Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet :

```bash
# Configuration Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Configuration Anthropic Claude AI
ANTHROPIC_API_KEY=sk-ant-api03-your-key-here

# Configuration pour le frontend
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 2. Base de Données

```bash
# Créer la table des articles
supabase db push

# Ou manuellement dans l'interface Supabase :
# Copiez le contenu de supabase/migrations/20250120000000_create_veille_articles.sql
```

### 3. Fonction Edge Supabase

```bash
# Déployer la fonction de génération
supabase functions deploy generate-veille-article

# Configurer la clé Anthropic
supabase secrets set ANTHROPIC_API_KEY=sk-ant-your-key-here
```

### 4. Test du Système

```bash
# Installer les dépendances
npm install

# Tester la génération d'articles
npm run veille:test
```

## 🧪 Vérification du Fonctionnement

### Test Rapide

```bash
npm run veille:test
```

**Résultat attendu :**
```
🧪 Test de génération d'article de veille réglementaire
================================================
✅ Variables d'environnement configurées

🚀 Test de génération avec différents sujets...

📝 Test 1/3 : RE2020 évolutions 2025
   📡 Appel API: https://your-project.supabase.co/functions/v1/generate-veille-article
✅ Article généré avec succès !
   Titre: RE2020 : Nouvelles Exigences Carbone en PACA
   Catégorie: reglementation
   Temps de lecture: 8 min
   💾 Article sauvegardé: test-1-test-1737123456789.json
```

### Vérification en Base

```sql
-- Dans l'interface Supabase SQL Editor
SELECT id, title, category, is_published, created_at 
FROM veille_articles 
ORDER BY created_at DESC 
LIMIT 5;
```

## 🤖 Démarrage de la Production

### Lancement du Scheduler Automatique

```bash
# Démarrer la génération automatique (3x/semaine)
npm run veille:start
```

**Le système va :**
- ✅ Générer des articles lundi/mercredi/vendredi à 8h00
- ✅ Utiliser votre clé Anthropic pour du contenu de qualité
- ✅ Publier automatiquement sur votre site
- ✅ Optimiser le SEO pour la région PACA

### Monitoring

```bash
# Voir les statistiques
npm run veille:stats

# Suivre les logs en temps réel
npm run veille:logs

# Arrêter le scheduler
Ctrl+C
```

## 📊 Interface Utilisateur

L'interface est déjà intégrée dans votre workspace :
- **URL** : `https://votre-site.com/workspace` → Onglet "Veille Réglementaire"
- **Fonctionnalités** : Recherche, filtres, lecture complète, statistiques

## 🔍 Résolution de Problèmes

### Erreur "Variables d'environnement manquantes"
```bash
# Vérifiez votre fichier .env.local
cat .env.local

# Redémarrez après modification
npm run veille:test
```

### Erreur "Clé API Anthropic invalide"
```bash
# Vérifiez votre clé sur console.anthropic.com
# Régénérez si nécessaire
supabase secrets set ANTHROPIC_API_KEY=nouvelle-clé
```

### Erreur de base de données
```bash
# Vérifiez la connexion Supabase
supabase status

# Appliquez la migration si nécessaire
supabase db push
```

## 📈 Optimisation

### Personnalisation des Sujets

Modifiez `scripts/schedule-veille-articles.mjs` ligne 85+ :

```javascript
const allTopics = [
  {
    topic: 'Votre sujet personnalisé',
    category: 'reglementation',
    keywords: ['mot-clé1', 'mot-clé2', 'PACA']
  },
  // ... autres sujets
];
```

### Fréquence de Publication

Modifiez la ligne 25 dans `scripts/schedule-veille-articles.mjs` :

```javascript
// Actuel : lundi, mercredi, vendredi à 8h00
const schedule = '0 0 8 * * 1,3,5';

// Quotidien à 9h00 :
const schedule = '0 0 9 * * *';

// Deux fois par semaine :
const schedule = '0 0 8 * * 2,5';
```

## 🎯 Résultat Final

Une fois configuré, votre système :

✅ **Génère automatiquement** 3 articles/semaine de qualité professionnelle  
✅ **Publie sans intervention** sur votre site web  
✅ **Optimise le SEO** pour capter du trafic PACA/Marseille  
✅ **Évite les doublons** grâce à la vérification automatique  
✅ **Fournit des métriques** de performance et d'engagement  

---

**🚀 Votre système de veille réglementaire automatisé est maintenant opérationnel !**

*Temps de configuration : ~10 minutes*  
*Maintenance requise : Aucune*  
*Articles générés : 156/an automatiquement* 