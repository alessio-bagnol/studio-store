const SUPABASE_URL = "https://wvqyqycbtpmewyqakjah.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || "sb_publishable_hsctbznMphT4WoDrv7gpfA_AfIRT-9k";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    if (req.method === "GET") {
      const resp = await fetch(`${SUPABASE_URL}/rest/v1/orders?select=*&order=created_at.desc`, {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`
        }
      });
      const data = await resp.json();
      return res.status(resp.status).json(data);
    }

    if (req.method === "POST") {
      const { customer_name, customer_email, customer_address, customer_phone, items, total_amount } = req.body || {};

      const orderId = `CMD-${Date.now()}`;
      const orderPayload = {
        id: orderId,
        customer_name: customer_name || "",
        customer_email: customer_email || "",
        customer_phone: customer_phone || "",
        customer_address: customer_address || "",
        items: Array.isArray(items) ? items : [],
        total_amount: String(total_amount || "0.00"),
        status: "en_attente"
      };

      const resp = await fetch(`${SUPABASE_URL}/rest/v1/orders`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=representation"
        },
        body: JSON.stringify(orderPayload)
      });

      const data = await resp.json();

      if (!resp.ok) {
        return res.status(resp.status).json({
          success: false,
          error: data?.message || data?.error || "Impossible d'enregistrer la commande."
        });
      }

      const created = Array.isArray(data) ? data[0] : data;
      return res.status(200).json({
        success: true,
        id: created?.id || Date.now(),
        order: created
      });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
