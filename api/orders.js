const SUPABASE_URL = "https://wvqyqycbtpmewyqakjah.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || "sb_publishable_hsctbznMphT4WoDrv7gpfA_AfIRT-9k";

const headers = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json"
};

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { id, track, success } = req.query;

  try {
    if (req.method === "GET") {
      if (track) {
        const resp = await fetch(`${SUPABASE_URL}/rest/v1/orders?id=eq.${encodeURIComponent(track)}&select=*`, { headers });
        const data = await resp.json();
        const order = Array.isArray(data) ? data[0] : data;
        if (!order) return res.status(404).json({ error: "Commande introuvable" });
        return res.status(200).json(order);
      }

      const resp = await fetch(`${SUPABASE_URL}/rest/v1/orders?select=*&order=created_at.desc`, { headers });
      const data = await resp.json();
      return res.status(resp.status).json(data);
    }

    if (req.method === "POST") {
      if (success) {
        return res.status(200).json({ success: true });
      }

      const { customer_name, customer_email, customer_address, customer_phone, items, total_amount } = req.body || {};
      const orderItems = Array.isArray(items) ? items : [];
      const orderId = `CMD-${Date.now()}`;

      const orderPayload = {
        id: orderId,
        customer_name: customer_name || "",
        customer_email: customer_email || "",
        customer_phone: customer_phone || "",
        customer_address: customer_address || "",
        items: orderItems,
        total_amount: String(total_amount || "0.00"),
        status: "traitement"
      };

      const resp = await fetch(`${SUPABASE_URL}/rest/v1/orders`, {
        method: "POST",
        headers: { ...headers, Prefer: "return=representation" },
        body: JSON.stringify(orderPayload)
      });

      const data = await resp.json();

      if (!resp.ok) {
        return res.status(resp.status).json({
          success: false,
          error: data?.message || data?.error || "Impossible d'enregistrer la commande."
        });
      }

      // Décrémenter le stock des produits commandés
      for (const item of orderItems) {
        if (!item?.id || !item?.quantity) continue;
        try {
          const pResp = await fetch(`${SUPABASE_URL}/rest/v1/products?id=eq.${encodeURIComponent(item.id)}&select=id,stock`, { headers });
          const pData = await pResp.json();
          const prod = Array.isArray(pData) ? pData[0] : pData;
          if (prod && typeof prod.stock === "number") {
            const newStock = Math.max(0, prod.stock - (parseInt(item.quantity) || 0));
            await fetch(`${SUPABASE_URL}/rest/v1/products?id=eq.${encodeURIComponent(item.id)}`, {
              method: "PATCH",
              headers,
              body: JSON.stringify({ stock: newStock })
            });
          }
        } catch (e) {
          console.error("Stock update error for item", item.id, e);
        }
      }

      const created = Array.isArray(data) ? data[0] : data;
      return res.status(200).json({
        success: true,
        id: created?.id || orderId,
        order: created
      });
    }

    if (req.method === "PUT") {
      const targetId = id || req.body?.id;
      const { status } = req.body || {};
      if (!targetId || !status) {
        return res.status(400).json({ error: "ID et statut requis" });
      }
      const resp = await fetch(`${SUPABASE_URL}/rest/v1/orders?id=eq.${encodeURIComponent(targetId)}`, {
        method: "PATCH",
        headers: { ...headers, Prefer: "return=representation" },
        body: JSON.stringify({ status })
      });
      const data = await resp.json();
      return res.status(resp.status).json(data);
    }

    if (req.method === "DELETE") {
      const targetId = id || req.body?.id;
      if (!targetId) return res.status(400).json({ error: "ID requis" });
      const resp = await fetch(`${SUPABASE_URL}/rest/v1/orders?id=eq.${encodeURIComponent(targetId)}`, {
        method: "DELETE",
        headers
      });
      return res.status(resp.ok ? 200 : resp.status).json({ success: resp.ok });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
