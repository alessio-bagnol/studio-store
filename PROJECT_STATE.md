# État du projet : Studio Store
*Dernière mise à jour : 22/11/2026*

## 🎯 Objectif Global
Boutique e-commerce moderne (Studio Store) proposant des puffs (Tornado 9000, saveurs variées) et des équipements audio (Airpods). Le site comprend la sélection par lots/formules, le panier, l'estimation des frais de livraison via l'API Adresse Gouv, le paiement Stripe, le suivi de commande et un tableau de bord administrateur (#admin).

## 🛠️ Stack Technique & Prérequis
- **Frontend** : React 18 SPA + Tailwind CSS + Framer Motion + Lucide Icons
- **Backend / API** : Vercel Serverless Functions (`api/products.js`, `api/formules.js`, `api/promocodes.js`, `api/orders.js`, `api/social-stats.js`)
- **Hébergement** : GitHub (`alessio-bagnol/studio-store`), Vercel & GitHub Pages
- **Photos réelles** : Stockées sous `real_photos/photo/` (IMG_3292 à IMG_3297 + logo.jpg)

## 📌 Architecture & Fichiers Clés
- `index.html` : Entrée de l'application (titre Studio Store, fonts Clash Display & Inter)
- `vercel.json` : Règles de réécriture et routage SPA / Serverless API
- `assets/index-DYvV6U29.js` : Bundle applicatif avec fallback immédiat sur les produits par défaut
- `assets/index-DuwIypge.css` : Styles Tailwind compilés
- `api/products.js` : Endpoint API des produits et stocks
- `api/formules.js` : Tarification dégressive par lots
- `api/promocodes.js` : Codes promos actifs (ex: STUDIO10)

## ✅ Réalisations récentes
- Téléchargement et récupération intégrale du site depuis Render (`puffstore-exih.onrender.com`)
- Renommage de la marque en **Studio Store** (titre HTML, métadonnées, branding)
- Récupération et intégration des photos réelles de puffs et airpods depuis le dossier local (`IMG_3292.jpg` à `IMG_3297.jpg`)
- Création des Serverless Functions Vercel dans `/api/` pour alimenter le catalogue et le panier sans dépendre d'une base de données externe
- Injection de données de secours directement dans le bundle JS (`iJ`)
- Création et publication du dépôt GitHub : `https://github.com/alessio-bagnol/studio-store`
- Activation de GitHub Pages : `https://alessio-bagnol.github.io/studio-store/`

## ⏳ Prochaine étape immédiate (Action prioritaire)
- Déploiement Vercel en 1 clic via le lien d'import Vercel pré-rempli.
- Appliquer les modifications spécifiques demandées par l'utilisateur (prix, saveurs, design, coordonnées Instagram/contact).
- Reconstruire éventuellement les composants sources React propres (Vite) si l'utilisateur souhaite modifier en profondeur la structure.

## 🔒 Sécurité & Environnement
- `.gitignore` configuré pour bloquer les fichiers sensibles (.env).
