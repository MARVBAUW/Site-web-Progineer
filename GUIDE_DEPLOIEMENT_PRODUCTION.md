# 🚀 Guide de Déploiement Production - Système de Veille IA

## 🔐 **Problème : Comment déployer avec l'IA sans exposer les clés ?**

### **✅ Solution 1 : Variables d'environnement Supabase (RECOMMANDÉE)**

1. **Connectez-vous au Supabase Dashboard** : https://supabase.com/dashboard
2. **Allez dans votre projet** → Settings → Edge Functions
3. **Variables d'environnement** → Add new variable :
   ```
   ANTHROPIC_API_KEY = sk-ant-api03-votre-vraie-clé-ici
   ```
4. **Déployez l'Edge Function** depuis le dashboard
5. **Testez** : Les clés restent sécurisées côté serveur !

### **✅ Solution 2 : Déploiement via CLI Supabase**

```bash
# 1. Installer Supabase CLI
npm install -g supabase

# 2. Login
supabase login

# 3. Lier le projet
supabase link --project-ref votre-project-id

# 4. Configurer les secrets
supabase secrets set ANTHROPIC_API_KEY=sk-ant-api03-votre-clé

# 5. Déployer
supabase functions deploy generate-veille-article
```

### **✅ Solution 3 : Service Backend dédié**

Créer un service Node.js/Python séparé avec vos clés :

```javascript
// backend/server.js
const express = require('express');
const app = express();

app.post('/generate-article', async (req, res) => {
  const apiKey = process.env.ANTHROPIC_API_KEY; // Variable serveur
  // Logique de génération IA
  res.json(article);
});

app.listen(3001);
```

## 🎯 **Avantages de chaque solution :**

| Solution | Sécurité | Simplicité | Coût |
|----------|----------|------------|------|
| Supabase Edge Functions | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| CLI Supabase | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Backend dédié | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |

## 🚀 **Déploiement Complet avec Solution 1**

### **Étape 1 : Nettoyer le code GitHub**
✅ **FAIT** - Code poussé sans clés sensibles

### **Étape 2 : Configurer Supabase**

1. **Dashboard Supabase** → Votre projet
2. **Database** → SQL Editor → Nouvelle requête :
   ```sql
   -- Copier le contenu de supabase/migrations/20250120000000_create_veille_articles.sql
   ```
3. **Edge Functions** → Create function → `generate-veille-article`
4. **Copier le code** depuis `supabase/functions/generate-veille-article/index.ts`
5. **Variables d'environnement** :
   ```
   SUPABASE_URL = https://votre-project.supabase.co
   SUPABASE_ANON_KEY = votre-clé-publique
   ANTHROPIC_API_KEY = sk-ant-api03-votre-clé-privée
   ```
6. **Deploy**

### **Étape 3 : Tester le déploiement**

```bash
# Test local avec variables locales
npm run veille:test

# Test de l'Edge Function déployée
curl -X POST https://votre-project.supabase.co/functions/v1/generate-veille-article \
  -H "Authorization: Bearer YOUR_ANON_KEY" \
  -H "Content-Type: application/json" \
  -d '{"topic": "RE2020", "category": "reglementation", "keywords": ["RE2020", "construction"]}'
```

### **Étape 4 : Automatisation GitHub Actions**

Le workflow `.github/workflows/veille-automation.yml` appelera directement votre Edge Function déployée.

**Secrets GitHub à configurer** :
- `SUPABASE_SERVICE_ROLE_KEY` (pour l'automatisation)

## 🎉 **Résultat Final**

- ✅ **Code source propre** sans clés sensibles
- ✅ **IA fonctionnelle** via Edge Functions sécurisées
- ✅ **Automatisation** 3x/semaine via GitHub Actions
- ✅ **Base de données** Supabase opérationnelle
- ✅ **Interface web** avec onglet Veille visible

## 🔧 **Dépannage**

### Si l'IA ne fonctionne pas :
1. Vérifier les variables d'environnement Supabase
2. Tester la clé Anthropic directement
3. Consulter les logs Edge Function

### Si les articles ne s'affichent pas :
1. Vérifier la table `veille_articles` dans Supabase
2. Contrôler les permissions RLS
3. Tester l'API locale : `npm run veille:test-db`

---

**🚀 Avec cette approche, votre site sera en ligne avec l'IA 100% fonctionnelle et sécurisée !** 