# État du projet : Studio Store
*Dernière mise à jour : 23/11/2026 16:42*

## 🎯 Objectif Global
Boutique e-commerce moderne (Studio Store) avec base de données PostgreSQL Supabase sécurisée (RLS), stockage d'images Drag & Drop, gestion dynamique des catégories, gestion intégrale des Tarifs & Formules, fiches produits adaptées par catégorie, système complet de précommandes, calcul universel du panier et formatage automatique des devises.

## ✨ Dernières Mises à Jour Appliquées
1. **Formatage Automatique du Symbole Euro (€)** :
   - Ajout automatique du suffixe ` €` lors de la saisie d'un nombre brut (ex: `13` devient automatiquement `13 €`) dans la fiche produit, les cartes catalogue et le formulaire admin.
2. **Calcul Intégral et Dynamique du Panier (Mon Panier)** :
   - Prise en compte de toutes les catégories (Vêtements, Chaussures, etc.) dans le calcul du sous-total, du total et des remises (les produits hors Puff/AirPods ne sont plus ignorés).
   - Affichage du prix unitaire et total pour chaque article directement sur sa ligne dans le tiroir du panier.
   - Ligne récapitulative des autres articles dans le détail du panier.
3. **Système de Précommandes (Admin & Storefront)** :
   - Case à cocher dédiée sous le champ stock dans l'administration.
   - Bannière d'information sur la fiche produit et commande autorisée même avec un stock à 0.
   - Badge ambré `⏳ Précommande` sur la ligne du panier.
4. **Tailles et Vêtements** :
   - Sélection multi-tailles (XS, S, M, L, XL) et affichage propre sur la fiche produit.

## 📌 Dépôt GitHub & Déploiement
- Dépôt : `https://github.com/alessio-bagnol/studio-store`
- Hébergement : Vercel auto-deploy sur `main`
- Base de données : Supabase (`wvqyqycbtpmewyqakjah.supabase.co`)
