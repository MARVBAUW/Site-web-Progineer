# Guide du Système de Veille Réglementaire Automatisé

## Vue d'ensemble

Le système de veille réglementaire de Progineer génère automatiquement des articles d'actualité sur la construction, la rénovation et la réglementation. Il publie 3 articles par semaine (lundi, mercredi, vendredi à 8h00) de manière entièrement automatisée.

## 🎯 Objectifs

- **Génération automatique** : Articles créés par IA sans intervention manuelle
- **Publication programmée** : 3 articles/semaine (lundi, mercredi, vendredi à 8h00)
- **Optimisation SEO** : Articles optimisés pour capter du trafic organique
- **Évitement des doublons** : Vérification automatique des sujets déjà traités
- **Contenu de qualité** : Articles structurés et informatifs

## 📁 Structure du Système

```
src/
├── components/workspace/
│   └── WorkspaceVeilleReglementaire.tsx    # Interface utilisateur
├── data/veille/
│   └── veilleData.ts                       # Données des articles
├── services/
│   └── veilleService.ts                    # Service de gestion
scripts/
└── schedule-veille-articles.mjs            # Scheduler automatique
supabase/functions/
└── generate-veille-article/
    └── index.ts                            # Fonction Edge pour génération IA
```

## 🚀 Fonctionnalités

### 1. Interface Utilisateur
- **Affichage des articles** : Liste paginée avec filtres par catégorie
- **Recherche avancée** : Recherche par titre, contenu et tags
- **Lecture complète** : Vue détaillée avec sources et mots-clés
- **Statistiques** : Métriques de publication et de consultation

### 2. Génération Automatique
- **Sujets variés** : 6 catégories (réglementation, matériaux, énergie, urbanisme, environnement, financement)
- **Contenu structuré** : Articles avec introduction, développement et conclusion
- **Sources intégrées** : Liens vers les sources officielles
- **Optimisation SEO** : Titres, meta-descriptions et mots-clés optimisés

### 3. Planification
- **Horaires fixes** : Lundi, mercredi, vendredi à 8h00
- **Rotation des sujets** : Évite la répétition des thématiques
- **Gestion d'erreurs** : Fallback en cas d'échec de l'IA
- **Logs détaillés** : Traçabilité complète des opérations

## 📊 Catégories d'Articles

### 🏛️ Réglementation
- RE2020 et évolutions
- DPE et audit énergétique
- Normes acoustiques
- Décret tertiaire
- Accessibilité PMR

### 🧱 Matériaux
- Matériaux biosourcés
- Innovations isolation
- Béton bas carbone
- Recyclage et réemploi
- Certifications matériaux

### ⚡ Énergie
- Pompes à chaleur
- Photovoltaïque
- Rénovation énergétique
- Géothermie
- Efficacité énergétique

### 🏙️ Urbanisme
- PLU intercommunaux
- Densification urbaine
- Zones de revitalisation
- Permis de construire
- Dématérialisation

### 🌱 Environnement
- Biodiversité urbaine
- Gestion eaux pluviales
- Îlots de chaleur
- Qualité air intérieur
- Construction durable

### 💰 Financement
- MaPrimeRénov'
- CEE (Certificats d'Économies d'Énergie)
- PTZ (Prêt à Taux Zéro)
- Aides collectivités
- Dispositifs fiscaux

## 🛠️ Installation et Configuration

### Prérequis
```bash
# Node.js 18+ requis
node --version

# Installation des dépendances
npm install
```

### Variables d'environnement
```bash
# .env.local
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_key
NODE_ENV=production
```

### Démarrage du système
```bash
# Démarrer le scheduler automatique
npm run veille:start

# Tester la génération manuellement
npm run veille:test

# Voir les statistiques
npm run veille:stats

# Suivre les logs en temps réel
npm run veille:logs
```

## 📝 Utilisation

### Commandes Disponibles

```bash
# Démarrer le scheduler (production)
npm run veille:start

# Test de génération d'article
npm run veille:test

# Afficher les statistiques
npm run veille:stats

# Suivre les logs
npm run veille:logs
```

### Logs et Monitoring

Les logs sont stockés dans `logs/veille-scheduler.log` :
```
[2025-01-20T08:00:00.000Z] Début de génération automatique d'article
[2025-01-20T08:00:15.000Z] Article généré: "RE2020 : Nouveaux seuils carbone..."
[2025-01-20T08:00:20.000Z] Article publié avec succès
```

Les statistiques sont dans `logs/veille-stats.json` :
```json
{
  "totalGenerated": 45,
  "byCategory": {
    "reglementation": 12,
    "materiaux": 8,
    "energie": 10,
    "urbanisme": 7,
    "environnement": 5,
    "financement": 3
  },
  "lastGenerated": "2025-01-20T08:00:00.000Z"
}
```

## 🤖 Fonctionnement de l'IA

### Génération d'Articles
1. **Sélection du sujet** : Rotation automatique entre les catégories
2. **Recherche d'actualités** : Scan des sources officielles
3. **Génération du contenu** : Structure avec introduction, développement, conclusion
4. **Optimisation SEO** : Titres, meta-descriptions, mots-clés
5. **Vérification qualité** : Validation du contenu généré

### Templates d'Articles
```javascript
const templates = {
  reglementation: {
    title: "Nouvelles Réglementations {topic} : Impact Construction PACA",
    structure: [
      "Contexte réglementaire",
      "Principales évolutions", 
      "Impact professionnels",
      "Calendrier application",
      "Recommandations pratiques"
    ]
  },
  // ... autres catégories
}
```

### Optimisation SEO
- **Titres** : 50-60 caractères optimisés
- **Meta-descriptions** : 150-160 caractères
- **Mots-clés** : Géolocalisés PACA/Marseille
- **Structure** : H1, H2, H3 hiérarchisés
- **Liens internes** : Vers autres articles/services

## 📈 Métriques et Performance

### KPIs Suivis
- **Nombre d'articles générés** : Total et par catégorie
- **Taux de publication** : Succès vs échecs
- **Engagement** : Vues, temps de lecture
- **SEO** : Positionnement, trafic organique

### Objectifs
- **3 articles/semaine** : 156 articles/an
- **Taux de succès** : >95% de publications réussies
- **Qualité SEO** : Score >80/100
- **Engagement** : >2 min temps de lecture moyen

## 🔧 Maintenance

### Tâches Régulières
- **Hebdomadaire** : Vérification des logs et statistiques
- **Mensuelle** : Analyse des performances SEO
- **Trimestrielle** : Mise à jour des templates et sujets
- **Semestrielle** : Optimisation de l'algorithme de génération

### Résolution de Problèmes

#### Article non généré
```bash
# Vérifier les logs
npm run veille:logs

# Tester manuellement
npm run veille:test

# Vérifier la configuration
echo $SUPABASE_URL
```

#### Doublons détectés
```bash
# Vérifier la base de données
# Ajuster les critères de détection de doublons
```

#### Erreur de publication
```bash
# Vérifier les permissions Supabase
# Tester la connexion API
```

## 🔒 Sécurité

### Bonnes Pratiques
- **Variables d'environnement** : Jamais en dur dans le code
- **Validation des entrées** : Sanitisation du contenu généré
- **Rate limiting** : Limitation des appels API
- **Logs sécurisés** : Pas d'informations sensibles

### Permissions
- **Lecture** : Accès public aux articles
- **Écriture** : Réservée au système automatisé
- **Administration** : Accès restreint aux logs et stats

## 🚀 Évolutions Futures

### Améliorations Prévues
- **IA plus avancée** : Intégration GPT-4/Claude pour meilleure qualité
- **Sources dynamiques** : Scan automatique des sites officiels
- **Personnalisation** : Articles adaptés aux préférences utilisateur
- **Multimédia** : Intégration d'images et vidéos
- **Analytics avancés** : Tableau de bord détaillé

### Roadmap
- **Q1 2025** : Amélioration qualité contenu
- **Q2 2025** : Intégration sources externes
- **Q3 2025** : Dashboard analytics
- **Q4 2025** : IA multimodale (texte + images)

## 📞 Support

### Contact
- **Email** : support@progineer.fr
- **Documentation** : Ce guide
- **Logs** : `logs/veille-scheduler.log`

### Ressources
- [Documentation Supabase Edge Functions](https://supabase.com/docs/guides/functions)
- [Guide node-cron](https://www.npmjs.com/package/node-cron)
- [Optimisation SEO](https://developers.google.com/search/docs)

---

*Système de veille réglementaire Progineer - Version 1.0*
*Dernière mise à jour : Janvier 2025* 