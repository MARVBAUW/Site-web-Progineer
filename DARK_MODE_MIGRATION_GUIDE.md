# 🌙 Guide de migration - Mode Dark

## ✅ **Classes à remplacer systématiquement**

### **Textes**
```bash
❌ Ancien                  ✅ Nouveau
text-gray-900            → text-foreground
text-gray-800            → text-foreground  
text-gray-700            → text-muted-foreground
text-gray-600            → text-muted-foreground
text-gray-500            → text-low-contrast
text-white               → text-foreground
```

### **Arrière-plans**
```bash
❌ Ancien                  ✅ Nouveau
bg-white                 → bg-background ou bg-card
bg-gray-50               → bg-muted/50
bg-gray-100              → bg-muted
bg-gray-200              → bg-surface-secondary
```

### **Bordures**
```bash
❌ Ancien                  ✅ Nouveau
border-gray-200          → border-border
border-gray-300          → border-border
border-white             → border-border
```

### **Classes spéciales pour un contraste optimal**
```bash
.text-high-contrast      → Texte à contraste maximum
.text-medium-contrast    → Texte à contraste moyen  
.text-low-contrast       → Texte à faible contraste
.bg-surface-primary      → Arrière-plan principal
.bg-surface-secondary    → Arrière-plan secondaire
.bg-surface-tertiary     → Arrière-plan tertiaire
```

## 🎯 **Exemples de conversion**

### **Avant (problématique)**
```jsx
<div className="bg-white border border-gray-200 text-gray-900">
  <h2 className="text-gray-800">Titre</h2>
  <p className="text-gray-600">Description</p>
</div>
```

### **Après (accessible)**
```jsx
<div className="bg-card border border-border text-foreground">
  <h2 className="text-foreground">Titre</h2>
  <p className="text-muted-foreground">Description</p>
</div>
```

## 🔥 **Classes critiques à éviter absolument**

- `text-black` / `text-white` → Utilisez `text-foreground`
- `bg-gray-*` sans variante dark → Utilisez le système de tokens
- Couleurs hardcodées en CSS → Utilisez les variables CSS

## 🚀 **Nouveaux utilitaires disponibles**

### **Couleurs Progineer harmonisées**
- `.progineer-gold` → Couleur primaire (s'adapte au mode)
- `.bg-progineer-gold` → Arrière-plan primaire
- `.border-progineer-gold` → Bordure primaire
- `.progineer-dark` → Couleur de texte principale

### **Variables CSS disponibles**
```css
/* Mode clair et sombre automatique */
hsl(var(--foreground))      /* Texte principal */
hsl(var(--muted-foreground)) /* Texte secondaire */
hsl(var(--background))      /* Arrière-plan */
hsl(var(--card))           /* Cartes */
hsl(var(--border))         /* Bordures */
hsl(var(--primary))        /* Couleur principale */
```

## ⚡ **Actions prioritaires**

1. **Remplacer toutes les classes text-gray-***
2. **Remplacer tous les bg-white et bg-gray-***  
3. **Remplacer toutes les border-gray-***
4. **Tester le contraste avec un outil d'accessibilité**
5. **Valider sur différentes tailles d'écran**

## 🎨 **Ratios de contraste respectés**

- **Texte normal** : minimum 4.5:1 
- **Texte large** : minimum 3:1
- **Éléments interactifs** : minimum 3:1
- **Éléments graphiques** : minimum 3:1

---

> 💡 **Astuce** : Utilisez les DevTools pour tester le mode dark en temps réel et vérifier l'accessibilité 