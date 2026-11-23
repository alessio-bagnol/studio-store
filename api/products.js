const SUPABASE_URL = "https://wvqyqycbtpmewyqakjah.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || "sb_publishable_hsctbznMphT4WoDrv7gpfA_AfIRT-9k";

function sanitizeProduct(body) {
  let flavors = body.flavors || "";
  if (body.couleur !== undefined || body.taille !== undefined) {
    let parts = [];
    if (body.couleur && body.couleur.toString().trim()) parts.push(`Couleur: ${body.couleur.toString().trim()}`);
    if (body.taille && body.taille.toString().trim()) parts.push(`Taille: ${body.taille.toString().trim()}`);
    if (parts.length > 0) flavors = parts.join(" | ");
  }
  let isPreorder = body.allow_preorder === true || body.is_preorder === true || String(body.allow_preorder) === "true";
  if (isPreorder && !flavors.includes("[PREORDER]")) {
    flavors = (flavors + " [PREORDER]").trim();
  } else if (body.allow_preorder === false && flavors.includes("[PREORDER]")) {
    flavors = flavors.replace(/\s*\[PREORDER\]/g, "").trim();
  }
  return {
    name: body.name || "",
    category: (body.category || "Puff").trim(),
    price: body.price || "20,00 €",
    old_price: body.old_price || "",
    description: body.description || "",
    image: body.image || "",
    stock: parseInt(body.stock) || 0,
    incoming_stock: parseInt(body.incoming_stock) || 0,
    available_at: body.available_at || "",
    flavors: flavors
  };
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { id } = req.query;

  try {
    if (req.method === "GET") {
      const resp = await fetch(`${SUPABASE_URL}/rest/v1/products?select=*&order=id.asc`, {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`
        }
      });
      const data = await resp.json();
      return res.status(resp.status).json(data);
    }

    if (req.method === "POST") {
      const cleanData = sanitizeProduct(req.body);
      
      // Auto-register category in categories table if new
      if (cleanData.category && !["Puff", "Airpods"].includes(cleanData.category)) {
        try {
          const s = cleanData.category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          let icon = "🏷️";
          if (s.includes("puff") || s.includes("vape")) icon = "🚬";
          else if (s.includes("airpod") || s.includes("audio") || s.includes("ecouteur") || s.includes("casque")) icon = "🎧";
          else if (s.includes("vetement") || s.includes("habit") || s.includes("mode") || s.includes("textile") || s.includes("t-shirt") || s.includes("polo")) icon = "👕";
          else if (s.includes("chaussure") || s.includes("sneaker") || s.includes("basket")) icon = "👟";
          else if (s.includes("casquette") || s.includes("bonnet") || s.includes("chapeau")) icon = "🧢";
          else if (s.includes("montre") || s.includes("watch")) icon = "⌚";
          else if (s.includes("sac")) icon = "🎒";
          else if (s.includes("accessoire") || s.includes("bijou")) icon = "✨";

          await fetch(`${SUPABASE_URL}/rest/v1/categories`, {
            method: "POST",
            headers: {
              apikey: SUPABASE_KEY,
              Authorization: `Bearer ${SUPABASE_KEY}`,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: cleanData.category, icon })
          });
        } catch (e) {}
      }

      const resp = await fetch(`${SUPABASE_URL}/rest/v1/products`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=representation"
        },
        body: JSON.stringify(cleanData)
      });
      const data = await resp.json();
      return res.status(resp.status).json(data);
    }

    if (req.method === "PUT") {
      const targetId = id || req.body?.id;
      const cleanData = sanitizeProduct(req.body);

      const resp = await fetch(`${SUPABASE_URL}/rest/v1/products?id=eq.${targetId}`, {
        method: "PATCH",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=representation"
        },
        body: JSON.stringify(cleanData)
      });
      const data = await resp.json();
      return res.status(resp.status).json(data);
    }

    if (req.method === "DELETE") {
      const targetId = id || req.query?.id;
      await fetch(`${SUPABASE_URL}/rest/v1/products?id=eq.${targetId}`, {
        method: "DELETE",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`
        }
      });
      return res.status(200).json({ success: true });
    }

    res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Products API error:", error);
    res.status(500).json({ error: error.message });
  }
}
