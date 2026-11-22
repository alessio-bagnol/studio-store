# État du projet : Studio Store
*Dernière mise à jour : 22/11/2026*

## 🎯 Objectif Global
Boutique e-commerce moderne (Studio Store) avec base de données PostgreSQL Supabase sécurisée (RLS), stockage d'images Drag & Drop, gestion dynamique des catégories, gestion intégrale des Tarifs & Formules (création, modification, suppression), et fiches produits aux caractéristiques adaptées par catégorie.

## ✨ Dernières Mises à Jour Appliquées
1. **Gestion Complète des Tarifs & Formules (Admin)** :
   - Ajout du bouton `+ Créer une formule` dans l'en-tête du tableau *Tarifs & Formules*.
   - Panneau de création intuitif permettant de :
     - Sélectionner la catégorie ciblée (parmi toutes les catégories existantes ou nouvelles).
     - Renseigner la quantité du pack (ex: 2, 3, 5, 10...).
     - Renseigner le prix du pack (ex: 35,00 €).
   - Possibilité de modifier en place la catégorie, la quantité et le prix de chaque pack.
   - Ajout du bouton de suppression directe (corbeille rouge) avec demande de confirmation.
   - Mise à jour de l'API Serverless `/api/formules` (GET, POST, PUT, DELETE) connectée en temps réel à Supabase.
   - Ajout de la règle de réécriture Vercel `/api/formules/:id`.
2. **Fiche Produit dynamique par catégorie (Titres, Icônes et Spécifications)** :
   - Adaptation automatique selon la catégorie du produit (Puff, AirPods, Vêtements, Chaussures, Casquettes, Montres, etc.).
3. **Onglets & Badges de Catégories intelligents** :
   - Détection automatique et affectation de l'icône correspondante (🚬, 🎧, 👕, 👟, 🧢, ⌚, 🎒, ✨, 📱, 🏷️).
4. **Formulaire Admin adaptatif** :
   - Libellé et placeholder intelligents selon la catégorie du produit.
5. **Codes Promos avec conditions avancées & Fenêtre élargie** :
   - Fenêtre `max-w-2xl`, multi-catégories, montant minimum, et nombre d'articles minimum.

## 📌 Dépôt GitHub & Déploiement
- Dépôt : `https://github.com/alessio-bagnol/studio-store`
- Hébergement : Vercel auto-deploy sur `main`
- Base de données : Supabase (`wvqyqycbtpmewyqakjah.supabase.co`)
