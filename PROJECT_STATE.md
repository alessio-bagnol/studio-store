# État du projet : Studio Store
*Dernière mise à jour : 22/11/2026*

## 🎯 Objectif Global
Boutique e-commerce moderne (Studio Store) avec base de données PostgreSQL Supabase sécurisée (RLS), stockage d'images Drag & Drop, gestion dynamique des catégories (mise à jour immédiate sur le sélecteur du catalogue client avec icônes intelligentes) et fiches produits aux caractéristiques adaptées par catégorie.

## ✨ Dernières Mises à Jour Appliquées
1. **Fiche Produit dynamique par catégorie (Titres, Icônes et Spécifications)** :
   - Remplacement des 3 cartes fixes (qui étaient réservées aux Puffs : Saveurs, Capacité, Durée).
   - Adaptation automatique selon la catégorie du produit :
     - **Puff / Vape** : ⚡ Saveurs principales, 💨 Capacité (Puffs), 🔋 Durée estimée (USB-C).
     - **AirPods / Audio / Écouteurs** : 🎧 Audio & Réduction du bruit (ANC/Spatial), 🔋 Autonomie (30h), ⚡ Connectivité & Boîtier (MagSafe).
     - **Vêtements / Mode / Textile** : 👕 Matière & Qualité (100% Coton), 📏 Coupe & Tailles (S - XL), 🧼 Entretien (30°C).
     - **Chaussures / Sneakers** : 👟 Modèle & Matériaux, 📏 Pointures (38-45), ✨ Condition & Boîte d'origine.
     - **Casquettes / Accessoires** : 🧢 Style & Finition, 📐 Taille & Réglage, ☀️ Protection & Usage.
     - **Montres** : ⌚ Mouvement & Boîtier, 💧 Étanchéité, 🛡️ Garantie & Bracelet.
     - **Sacs** : 🎒 Matière & Volume, 📏 Dimensions, 🔒 Finition & Zips.
     - **Autres catégories** : 🏷️ Caractéristiques, 📦 Disponibilité, 🚚 Expédition & Suivi.
2. **Onglets & Badges de Catégories intelligents** :
   - Détection automatique et affectation de l'icône correspondante (🚬, 🎧, 👕, 👟, 🧢, ⌚, 🎒, ✨, 📱, 🏷️).
3. **Formulaire Admin intelligent** :
   - Le libellé et le placeholder du champ de caractéristiques s'ajustent automatiquement selon la catégorie sélectionnée (ex: "Saveurs" pour Puff, "Matière / Tailles / Couleurs" pour Vêtements, "Caractéristiques Audio" pour AirPods).
4. **Codes Promos avec conditions avancées & Fenêtre élargie** :
   - Fenêtre `max-w-2xl`.
   - Multi-catégories, montant minimum, et nombre d'articles minimum.

## 📌 Dépôt GitHub & Déploiement
- Dépôt : `https://github.com/alessio-bagnol/studio-store`
- Hébergement : Vercel auto-deploy sur `main`
- Base de données : Supabase (`wvqyqycbtpmewyqakjah.supabase.co`)
