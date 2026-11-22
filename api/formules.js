const SUPABASE_URL = "https://wvqyqycbtpmewyqakjah.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || "sb_publishable_hsctbznMphT4WoDrv7gpfA_AfIRT-9k";

function sanitizeFormule(body) {
  let price = (body.price || "0,00 €").toString().trim();
  if (!price.includes("€")) {
    price = `${price} €`;
  }
  return {
    category: (body.category || "Puff").trim(),
    qty: parseInt(body.qty) || 1,
    price: price
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
      const resp = await fetch(`${SUPABASE_URL}/rest/v1/formules?select=*&order=qty.asc`, {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`
        }
      });
      const data = await resp.json();
      return res.status(200).json(data);
    }

    if (req.method === "POST") {
      const cleanData = sanitizeFormule(req.body);
      const resp = await fetch(`${SUPABASE_URL}/rest/v1/formules`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          "Prefer": "return=representation"
        },
        body: JSON.stringify(cleanData)
      });
      const data = await resp.json();
      return res.status(resp.status).json(data);
    }

    if (req.method === "PUT" || req.method === "PATCH") {
      const targetId = id || req.body.id;
      if (!targetId) {
        return res.status(400).json({ error: "Missing formule id" });
      }

      const updateData = {};
      if (req.body.category !== undefined) updateData.category = req.body.category.trim();
      if (req.body.qty !== undefined) updateData.qty = parseInt(req.body.qty) || 1;
      if (req.body.price !== undefined) {
        let p = req.body.price.toString().trim();
        if (!p.includes("€")) p = `${p} €`;
        updateData.price = p;
      }

      const resp = await fetch(`${SUPABASE_URL}/rest/v1/formules?id=eq.${targetId}`, {
        method: "PATCH",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          "Prefer": "return=representation"
        },
        body: JSON.stringify(updateData)
      });
      const data = await resp.json();
      return res.status(resp.status).json(data);
    }

    if (req.method === "DELETE") {
      if (!id) {
        return res.status(400).json({ error: "Missing formule id" });
      }
      const resp = await fetch(`${SUPABASE_URL}/rest/v1/formules?id=eq.${id}`, {
        method: "DELETE",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`
        }
      });
      return res.status(204).end();
    }

    res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
