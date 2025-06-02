# Système de Vérification des Liens

Ce système permet de vérifier automatiquement les liens internes et externes du site web, de générer des rapports et d'envoyer des alertes en cas de liens brisés.

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Copier le fichier `.env.example` vers `.env` et configurer les variables :
```bash
cp .env.example .env
```

3. Configurer les paramètres SMTP pour les alertes par email.

## Utilisation

### Vérification des Liens
```bash
# Lancer la vérification
npm run check-links

# Générer le rapport HTML
npm run generate-report

# Envoyer les alertes
npm run send-alert
```

### Dashboard
Le dashboard de surveillance est accessible à l'adresse `/admin/link-monitoring`. Il affiche :
- Nombre total de liens
- Nombre de liens brisés
- Statistiques des liens internes/externes
- Liste détaillée des liens brisés

### Configuration
Le système peut être configuré dans `config/link-checker.json` :
```json
{
  "baseUrl": "https://progineer.fr",
  "excludePatterns": ["node_modules", "dist", "build"],
  "alertThreshold": 5,
  "checkInterval": 86400000
}
```

## Intégration CI/CD
Le système s'intègre avec GitHub Actions pour :
- Vérifier les liens à chaque push sur main
- Vérifier les liens à chaque pull request
- Vérifier les liens quotidiennement à minuit

## Alertes
Les alertes sont envoyées quand :
- Le nombre de liens brisés dépasse le seuil
- La vérification échoue
- Des liens internes critiques sont brisés

## Maintenance

### Ajout de Nouveaux Liens
1. Utiliser le mapper d'URL pour les liens internes
2. Suivre les conventions de nommage
3. Mettre à jour la documentation

### Vérification des Liens
1. Lancer la vérification
2. Examiner le rapport
3. Corriger les liens brisés
4. Mettre à jour la documentation

### Gestion des Alertes
1. Examiner l'email d'alerte
2. Vérifier les liens brisés
3. Corriger les problèmes
4. Mettre à jour la documentation

## Dépannage

### Problèmes Courants
1. **Échec de Connexion SMTP**
   - Vérifier les identifiants SMTP
   - Vérifier la connectivité réseau
   - Vérifier les paramètres du pare-feu

2. **Timeout du Vérificateur**
   - Augmenter le timeout dans la configuration
   - Vérifier la connectivité réseau
   - Vérifier l'état du serveur cible

3. **Faux Positifs**
   - Ajouter les URLs aux patterns d'exclusion
   - Vérifier la configuration du serveur
   - Vérifier les chaînes de redirection

## Contribution
1. Fork du repository
2. Création d'une branche feature
3. Modification du code
4. Soumission d'une pull request

## Licence
Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails. 