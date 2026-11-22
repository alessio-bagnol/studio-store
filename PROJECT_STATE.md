# État du projet : Studio Store
*Dernière mise à jour : 23/11/2026*

## 🎯 Objectif Global
Boutique e-commerce moderne (Studio Store) avec base de données PostgreSQL Supabase sécurisée (RLS), stockage d'images Drag & Drop, gestion dynamique des catégories, gestion intégrale des Tarifs & Formules, et fiches produits aux caractéristiques adaptées par catégorie (avec champs dédiés Couleurs & Tailles pour les vêtements).

## ✨ Dernières Mises à Jour Appliquées
1. **Champs Dédiés Couleur & Taille pour les Vêtements (Admin Modal)** :
   - Réorganisation propre de la grille dans la fenêtre d'ajout / modification de produit :
     - Ligne 1 : Stock (1/3), Restock (1/3), Date Dispo (1/3).
     - Ligne 2 : Section dédiée et spacieuse pour les vêtements avec 2 champs séparés :
       - 🎨 **Couleurs disponibles** (ex: *Noir, Blanc, Gris chiné, Kaki...*)
       - 📏 **Tailles disponibles** (ex: *S, M, L, XL, XXL...*)
   - Pour les autres catégories (Puff, AirPods, Chaussures...), le champ s'adapte en un champ dédié aux caractéristiques spécifiques.
   - Synchronisation automatique avec l'API Supabase sous le format `Couleur: ... | Taille: ...`.
2. **Affichage Storefront adaptatif pour les Vêtements** :
   - Sur la fiche produit ouverte par le client :
     - Carte 1 : 🎨 **Couleurs disponibles** (affiche les coloris saisis)
     - Carte 2 : 📏 **Tailles disponibles** (affiche les tailles saisies)
     - Carte 3 : 👕 **Matière & Entretien** (100% Coton Premium - Lavage 30°C)
3. **Gestion Complète des Tarifs & Formules (Admin)** :
   - Bouton `+ Créer une formule` avec sélection de catégorie, quantité de pack et prix.
   - Édition complète en place (catégorie, quantité, prix) et bouton de suppression (corbeille rouge).
4. **Codes Promos & Contraste des Badges** :
   - Contraste garanti (fond rose `#db2777` avec texte blanc éclatant `✓`).
   - Conditions avancées (multi-catégories, montant minimum, nombre d'articles).

## 📌 Dépôt GitHub & Déploiement
- Dépôt : `https://github.com/alessio-bagnol/studio-store`
- Hébergement : Vercel auto-deploy sur `main`
- Base de données : Supabase (`wvqyqycbtpmewyqakjah.supabase.co`)
