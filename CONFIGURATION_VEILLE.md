# Configuration du Système de Veille Réglementaire

## 🔧 Variables d'Environnement Requises

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```bash
# Configuration Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Configuration Anthropic Claude AI
ANTHROPIC_API_KEY=your_anthropic_api_key

# Configuration générale
NODE_ENV=production
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🚀 Étapes de Mise en Place

### 1. Configuration Supabase

1. **Créer la base de données** :
   ```bash
   # Appliquer la migration
   supabase db push
   ```

2. **Vérifier la table** :
   ```sql
   SELECT * FROM veille_articles LIMIT 5;
   ```

### 2. Configuration Anthropic

1. **Obtenir votre clé API** :
   - Rendez-vous sur [console.anthropic.com](https://console.anthropic.com)
   - Créez un compte ou connectez-vous
   - Générez une clé API
   - Ajoutez-la dans `.env.local` : `ANTHROPIC_API_KEY=sk-ant-...`

2. **Tester la connexion** :
   ```bash
   npm run veille:test
   ```

### 3. Déploiement de la Fonction Edge

1. **Déployer sur Supabase** :
   ```bash
   supabase functions deploy generate-veille-article
   ```

2. **Configurer les variables d'environnement** :
   ```bash
   supabase secrets set ANTHROPIC_API_KEY=your_key_here
   ```

### 4. Démarrage du Système

1. **Lancer le scheduler** :
   ```bash
   npm run veille:start
   ```

2. **Vérifier les logs** :
   ```bash
   npm run veille:logs
   ```

## 📊 Monitoring et Maintenance

### Commandes Utiles

```bash
# Tester la génération d'un article
npm run veille:test

# Voir les statistiques
npm run veille:stats

# Suivre les logs en temps réel
npm run veille:logs

# Arrêter le scheduler
Ctrl+C dans le terminal
```

### Vérification du Fonctionnement

1. **Test manuel** :
   ```bash
   curl -X POST https://your-project.supabase.co/functions/v1/generate-veille-article \
     -H "Authorization: Bearer YOUR_ANON_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "topic": "RE2020 évolutions 2025",
       "category": "reglementation",
       "keywords": ["RE2020", "construction", "PACA"]
     }'
   ```

2. **Vérifier en base** :
   ```sql
   SELECT id, title, category, is_published, created_at 
   FROM veille_articles 
   ORDER BY created_at DESC 
   LIMIT 10;
   ```

## 🔒 Sécurité

### Variables Sensibles
- ❌ **Ne jamais commiter** les clés API dans le code
- ✅ **Utiliser** les variables d'environnement
- ✅ **Configurer** les secrets Supabase pour les Edge Functions

### Permissions
- **Lecture publique** : Articles publiés uniquement
- **Écriture** : Réservée aux services authentifiés
- **Administration** : Accès via service_role_key

## 🐛 Résolution de Problèmes

### Erreur "Clé API Anthropic manquante"
```bash
# Vérifier la variable
echo $ANTHROPIC_API_KEY

# Reconfigurer si nécessaire
supabase secrets set ANTHROPIC_API_KEY=your_new_key
```

### Erreur de base de données
```bash
# Vérifier la connexion
supabase status

# Redémarrer si nécessaire
supabase stop && supabase start
```

### Articles non générés
```bash
# Vérifier les logs
npm run veille:logs

# Tester manuellement
npm run veille:test
```

## 📈 Optimisation

### Performance
- **Cache** : Les articles sont mis en cache côté client
- **Index** : Base de données optimisée avec index
- **Pagination** : Chargement progressif des articles

### SEO
- **Mots-clés** : Optimisation automatique pour PACA/Marseille
- **Structure** : HTML sémantique avec balises appropriées
- **Meta-données** : Titre et description optimisés

## 🔄 Mise à Jour

### Déploiement des Modifications
```bash
# Mettre à jour la fonction Edge
supabase functions deploy generate-veille-article

# Redémarrer le scheduler
npm run veille:start
```

### Sauvegarde
```bash
# Exporter les articles
supabase db dump --data-only --table=veille_articles > backup_articles.sql
```

---

**✅ Une fois configuré, le système génère automatiquement 3 articles par semaine !** 