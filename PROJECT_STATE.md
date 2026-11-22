# État du projet : Studio Store
*Dernière mise à jour : 22/11/2026*

## 🎯 Objectif Global
Boutique e-commerce moderne (Studio Store) avec base de données PostgreSQL Supabase sécurisée (RLS), stockage d'images Drag & Drop, gestion dynamique des catégories (avec mise à jour immédiate sur le sélecteur du catalogue client) et système complet de codes promo avec conditions avancées.

## ✨ Dernières Mises à Jour Appliquées
1. **Affichage dynamique des catégories sur la page d'accueil (Boutons Pilules)** :
   - Le bandeau de catégories d'accueil (`[🚬 Puff] [🎧 AirPods Pro 2]`) n'est plus figé !
   - Toute nouvelle catégorie créée sur un produit apparaît automatiquement sous forme d'onglet cliquable.
   - Les visiteurs peuvent filtrer le catalogue sur n'importe quelle catégorie.
2. **Gestion et renommage des catégories dans l'Admin** :
   - Ajout d'un bouton `🏷️ Renommer catégorie` dans le panneau Admin permettant de renommer n'importe quelle catégorie sur l'ensemble des produits associés.
   - Modification de la catégorie directement possible depuis la modale d'édition de produit.
3. **Codes Promos avec conditions avancées & Fenêtre agrandie** :
   - La fenêtre de création/modification de code promo a été agrandie (`max-w-2xl`) pour une lisibilité parfaite.
   - **Condition par catégorie** : Possibilité de restreindre un code promo à une catégorie spécifique (*Toutes*, *Puff*, *Airpods*, ou catégorie personnalisée).
   - **Condition montant minimum** : Définition d'un montant d'achat minimum requis pour débloquer le code.
   - **Condition articles minimum** : Définition d'un nombre d'articles requis dans le panier.
   - Contrôle et messages d'erreur explicites dans le panier si les conditions ne sont pas remplies.

## 📌 Dépôt GitHub & Déploiement
- Dépôt : `https://github.com/alessio-bagnol/studio-store`
