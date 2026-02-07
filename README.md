# 🍽️ RestauPOS - Système de Gestion Restaurant & Café

Système complet de gestion pour restaurants et cafés avec caisse enregistreuse, gestion des stocks, fournisseurs, employés et rapports détaillés.

## ✨ Fonctionnalités

### 📊 Tableau de bord
- Vue d'ensemble des ventes en temps réel
- Statistiques du jour
- Alertes de stock bas
- Performances des employés

### 🛒 Point de vente (Caisse)
- Interface tactile intuitive
- Gestion du panier
- Paiement Espèces/Carte
- Validation instantanée

### 💰 Transactions
- Historique complet
- Export CSV
- Filtrage avancé

### 📦 Gestion des stocks
- ✅ Ajout de nouveaux articles
- ✅ Suivi en temps réel
- ✅ Alertes automatiques
- ✅ Liaison avec fournisseurs

### 👥 Gestion des employés
- ✅ Ajout de nouveaux employés
- ✅ Profils détaillés complets
- ✅ Informations de contact
- ✅ Suivi des performances
- ✅ Gestion des salaires

### 🚚 Gestion des fournisseurs (NOUVEAU)
- ✅ Liste complète des fournisseurs
- ✅ Ajout de nouveaux fournisseurs
- ✅ Détails complets (contact, adresse, téléphone, email)
- ✅ Catégorisation
- ✅ Produits fournis

### 📈 Rapports
- ✅ Génération automatique
- ✅ Téléchargement TXT
- ✅ Impression directe
- ✅ Rapports: Ventes, Stocks, Employés

## 🚀 Installation

### Prérequis
- Node.js (v16+)
- npm ou yarn

### Étapes

1. **Extraire le projet**
```bash
unzip restaurant-pos-system.zip
cd restaurant-pos-system
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer l'application**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 📁 Structure

```
restaurant-pos-system/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx              # Navigation
│   │   ├── DashboardView.jsx        # Tableau de bord
│   │   ├── POSView.jsx              # Caisse
│   │   ├── TransactionsView.jsx     # Transactions + Export
│   │   ├── InventoryView.jsx        # Stocks + Ajout articles
│   │   ├── EmployeesView.jsx        # Employés + Ajout + Détails
│   │   ├── SuppliersView.jsx        # Fournisseurs + Ajout + Détails
│   │   └── ReportsView.jsx          # Rapports + Impression
│   ├── data/
│   │   └── initialData.js           # Données initiales
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎯 Fonctionnalités programmées

### ✅ Boutons fonctionnels
- ✅ Ajouter un article (Stock)
- ✅ Ajouter un employé
- ✅ Ajouter un fournisseur
- ✅ Exporter les transactions (CSV)
- ✅ Télécharger les rapports (TXT)
- ✅ Imprimer les rapports
- ✅ Voir les détails (Employés/Fournisseurs)

### ✅ Modales interactives
- Formulaires d'ajout complets
- Validation des données
- Affichage des détails

### ✅ Informations complètes

**Employés:**
- Nom, Poste, Shift
- Téléphone, Email
- Date d'embauche
- Salaire mensuel
- Ventes du jour

**Fournisseurs:**
- Nom de l'entreprise
- Personne de contact
- Téléphone, Email
- Adresse complète
- Catégorie
- Produits fournis

**Stock:**
- Nom, Catégorie
- Stock actuel/minimum
- Unité de mesure
- Prix unitaire
- Fournisseur lié
- Statut (OK/Stock bas)

## 💻 Commandes

```bash
# Développement
npm run dev

# Production
npm run build
npm run preview

# Linter
npm run lint
```

## 🎨 Technologies

- React 18.2
- Vite
- Tailwind CSS 3.4
- Lucide React (icônes)

## 📝 Notes importantes

✅ Tous les boutons sont maintenant **fonctionnels**
✅ Ajout d'articles, employés et fournisseurs **opérationnel**
✅ Export et impression des rapports **implémentés**
✅ Détails complets pour employés et fournisseurs **affichés**
✅ Interface **propre et professionnelle**
✅ Prêt pour **VS Code**

## 🔧 Utilisation dans VS Code

1. Ouvrir le dossier dans VS Code
```bash
code restaurant-pos-system
```

2. Installer les extensions recommandées:
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - ESLint

3. Terminal intégré:
```bash
npm install
npm run dev
```

---

**Développé avec ❤️ pour une gestion optimale de votre restaurant**
