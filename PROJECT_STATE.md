# État du projet : Studio Store
*Dernière mise à jour : 23/11/2026 à 14:50*

## 🎯 Objectif Global
Boutique e-commerce moderne (Studio Store) avec base de données PostgreSQL Supabase sécurisée (RLS), stockage d'images Drag & Drop, gestion dynamique des catégories, gestion intégrale des Tarifs & Formules, fiches produits adaptées par catégorie, et système complet de précommandes pour les produits sans stock immédiat.

## ✨ Dernières Mises à Jour Appliquées
1. **Système de Précommandes (Admin & Storefront)** :
   - **Bouton switch dans l'Admin** : Ajout d'une option d'activation des précommandes dans le formulaire d'ajout et d'édition de produit (`⏳ Activer les précommandes`).
   - **Maintien de la commande à stock 0** : Lorsqu'un produit est en précommande et a 0 de stock, il reste actif (non grisé), affiche un badge ambré `Précommande`, et les clients peuvent l'ajouter au panier sans blocage de quantité.
   - **Pop-up / Alerte claire sur la fiche produit** : Dès qu'un client clique sur l'article, un bandeau informatif très lisible s'affiche : *"Article disponible en précommande — Vous pouvez commander cet article dès maintenant même en rupture de stock ! Les délais de livraison seront simplement un peu plus longs."*
   - **Bouton d'action adapté** : Le bouton principal passe en ambré élégant avec le libellé *"Précommander cet article"*.
   - **Suivi dans le panier** : Affichage d'un badge distinctif `⏳ Précommande (délais plus longs)` sur la ligne de l'article dans le panier.
   - **Indicateur dans le catalogue Admin** : Affichage clair `⏳ Précommande ouverte` dans la colonne Stock du tableau d'administration.
2. **Champs Dédiés Couleur & Taille pour les Vêtements (Admin Modal)** :
   - Grille propre avec champs spacieux séparés pour les vêtements (Couleurs & Tailles), synchronisés avec Supabase.
3. **Affichage Storefront adaptatif pour les Vêtements** :
   - Cartes dynamiques sur la fiche produit (Couleurs, Tailles, Matière & Entretien).
4. **Gestion Complète des Tarifs & Formules & Codes Promos** :
   - Packs de quantités dégressifs avec création / édition / suppression en direct.
   - Codes promos avec conditions avancées.
5. **Zoom 80% Desktop** :
   - Règle de zoom intégrée par défaut sur desktop pour une vue d'ensemble plus nette.

## 📌 Dépôt GitHub & Déploiement
- Dépôt : `https://github.com/alessio-bagnol/studio-store`
- Hébergement : Vercel auto-deploy sur `main`
- Base de données : Supabase (`wvqyqycbtpmewyqakjah.supabase.co`)
