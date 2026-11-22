# État du projet : Studio Store
*Dernière mise à jour : 22/11/2026*

## 🎯 Objectif Global
Boutique e-commerce moderne (Studio Store) avec base de données PostgreSQL Supabase sécurisée (RLS), stockage d'images Drag & Drop et gestion dynamique des catégories.

## 🛠️ Stack Technique & Base de Données
- **Base de données** : Supabase PostgreSQL (`https://wvqyqycbtpmewyqakjah.supabase.co`)
- **Tables créées et vérifiées** :
  - `categories` (Puff, Airpods, et catégories personnalisées)
  - `products` (nom, catégorie, prix, stock, image, etc.)
  - `formules` (lots et tarifs dégressifs)
  - `promocodes` (codes promos)
  - `orders` (commandes clients)
- **Sécurité** : Row Level Security (RLS) activé sur toutes les tables
- **Stockage Images** : Bucket Supabase `product-images` (public)
- **API Serverless** : Vercel Functions dans `/api/` (products, categories, formules, promocodes, upload)

## ✨ Nouvelles Fonctionnalités Ajoutées
1. **Drag & Drop pour les images** :
   - Zone glisser-déposer intuitive dans la modale d'ajout/modification de produit.
   - Prévisualisation instantanée de l'image.
   - Upload automatique vers Supabase Storage (`product-images`) avec fallback DataURL.
2. **Création de catégories à la volée** :
   - Option `+ Créer une nouvelle catégorie...` directement dans le sélecteur.
   - Enregistrement immédiat dans la table `categories` de Supabase.

## 📌 Dépôt GitHub & Déploiement
- Dépôt : `https://github.com/alessio-bagnol/studio-store`
