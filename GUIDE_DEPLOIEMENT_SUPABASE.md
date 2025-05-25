# 🚀 Guide de Déploiement Supabase - Système de Veille Réglementaire

## 📋 Prérequis
- Compte Supabase actif
- Projet Supabase configuré
- Variables d'environnement configurées dans `.env`

## 🗄️ Étape 1 : Créer la Table `veille_articles`

### Via le Dashboard Supabase :
1. Allez sur **https://supabase.com/dashboard**
2. Sélectionnez votre projet
3. Cliquez sur **"SQL Editor"** dans la barre latérale
4. Créez une nouvelle requête et collez le contenu suivant :

**Option 1 - Migration Complète :**
```sql
-- Migration simplifiée pour créer la table des articles de veille réglementaire
-- Compatible avec le parser SQL de Supabase

-- Créer la table principale
CREATE TABLE veille_articles (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  priority TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  published_at DATE NOT NULL,
  read_time TEXT NOT NULL,
  views INTEGER NOT NULL DEFAULT 0,
  author TEXT NOT NULL,
  sources JSONB DEFAULT '[]',
  seo_keywords TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_published BOOLEAN DEFAULT FALSE
);

-- Ajouter les contraintes de vérification
ALTER TABLE veille_articles ADD CONSTRAINT check_category 
  CHECK (category IN ('reglementation', 'materiaux', 'energie', 'urbanisme', 'environnement', 'financement'));

ALTER TABLE veille_articles ADD CONSTRAINT check_priority 
  CHECK (priority IN ('haute', 'moyenne', 'faible'));

-- Créer les index pour améliorer les performances
CREATE INDEX idx_veille_articles_category ON veille_articles(category);
CREATE INDEX idx_veille_articles_published_at ON veille_articles(published_at);
CREATE INDEX idx_veille_articles_is_published ON veille_articles(is_published);
CREATE INDEX idx_veille_articles_priority ON veille_articles(priority);
CREATE INDEX idx_veille_articles_tags ON veille_articles USING GIN(tags);
CREATE INDEX idx_veille_articles_seo_keywords ON veille_articles USING GIN(seo_keywords);

-- Activer RLS (Row Level Security)
ALTER TABLE veille_articles ENABLE ROW LEVEL SECURITY;

-- Créer les politiques de sécurité
CREATE POLICY "Articles publiés lisibles par tous" ON veille_articles
    FOR SELECT USING (is_published = true);

CREATE POLICY "Gestion articles par services" ON veille_articles
    FOR ALL USING (auth.role() = 'service_role');
```

**Option 2 - Migration Basique (si Option 1 échoue) :**
```sql
-- Migration basique pour créer la table des articles de veille réglementaire
-- Version ultra-simplifiée pour Supabase

CREATE TABLE veille_articles (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  priority TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  published_at DATE NOT NULL,
  read_time TEXT NOT NULL,
  views INTEGER DEFAULT 0,
  author TEXT NOT NULL,
  sources JSONB DEFAULT '[]',
  seo_keywords TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_published BOOLEAN DEFAULT FALSE
);
```

5. Cliquez sur **"Run"** pour exécuter la migration

## ⚡ Étape 2 : Déployer la Edge Function

### Via le Dashboard Supabase :
1. Dans votre projet Supabase, allez dans **"Edge Functions"**
2. Cliquez sur **"Create a new function"**
3. Nommez la fonction : `generate-veille-article`
4. Copiez le contenu du fichier `supabase/functions/generate-veille-article/index.ts`
5. Cliquez sur **"Deploy function"**

### Configuration des variables d'environnement :
1. Dans **"Edge Functions"**, cliquez sur votre fonction
2. Allez dans l'onglet **"Settings"**
3. Ajoutez les variables d'environnement :
   - `ANTHROPIC_API_KEY` : Votre clé API Anthropic
   - `SUPABASE_URL` : URL de votre projet
   - `SUPABASE_ANON_KEY` : Votre clé anon

## 🧪 Étape 3 : Tester le Système

### Test de la Edge Function :
```bash
npm run veille:test
```

### Test manuel via curl :
```bash
curl -X POST 'https://your-project-ref.supabase.co/functions/v1/generate-veille-article' \
  -H 'Authorization: Bearer YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "topic": "RE2020 évolutions 2025",
    "category": "reglementation",
    "keywords": ["RE2020", "réglementation", "construction", "PACA"]
  }'
```

## 📊 Étape 4 : Vérifier les Données

### Via le Dashboard :
1. Allez dans **"Table Editor"**
2. Sélectionnez la table `veille_articles`
3. Vérifiez que les articles sont bien créés

### Via l'interface :
1. Allez sur `http://localhost:8081/workspace`
2. Cliquez sur l'onglet **"Veille Réglementaire"**
3. Vérifiez que les articles s'affichent

## 🔄 Étape 5 : Automatisation (Optionnel)

### Scheduler automatique :
Pour activer la génération automatique 3x/semaine :

```bash
npm run veille:start
```

### Configuration cron :
Le scheduler génère automatiquement des articles :
- **Lundi 8h00** : Réglementation
- **Mercredi 8h00** : Matériaux/Énergie  
- **Vendredi 8h00** : Urbanisme/Environnement

## 🎯 Résultat Final

Une fois déployé, vous aurez :
- ✅ **Table `veille_articles`** opérationnelle
- ✅ **Edge Function** pour génération IA
- ✅ **Interface utilisateur** fonctionnelle
- ✅ **Système automatisé** (optionnel)

## 🔧 Dépannage

### Erreurs communes :
1. **"Function not found"** : Vérifiez le nom de la fonction
2. **"Unauthorized"** : Vérifiez les clés API
3. **"Table doesn't exist"** : Exécutez la migration SQL
4. **"Claude API error"** : Vérifiez la clé Anthropic
5. **"WITH and subquery statements not supported"** : Utilisez l'Option 2 (migration basique)
6. **"Parser error"** : Exécutez les commandes SQL une par une

### Logs :
- **Edge Function** : Dashboard Supabase > Edge Functions > Logs
- **Base de données** : Dashboard Supabase > Logs
- **Application** : Console navigateur

## 📞 Support

En cas de problème :
1. Vérifiez les logs Supabase
2. Testez les variables d'environnement
3. Consultez la documentation Supabase
4. Utilisez le mode fallback local

---

**🎉 Félicitations !** Votre système de veille réglementaire automatisé est maintenant opérationnel ! 