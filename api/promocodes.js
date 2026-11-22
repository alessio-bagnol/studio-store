const SUPABASE_URL = "https://wvqyqycbtpmewyqakjah.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || "sb_publishable_hsctbznMphT4WoDrv7gpfA_AfIRT-9k";

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
      const resp = await fetch(`${SUPABASE_URL}/rest/v1/promocodes?select=*&order=id.desc`, {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`
        }
      });
      const data = await resp.json();
      return res.status(200).json(data);
    }

    if (req.method === "POST") {
      const payload = { ...req.body };
      if (!payload.discount_percent && payload.value) {
        payload.discount_percent = parseInt(payload.value) || 10;
      }

      // Try inserting full payload
      let resp = await fetch(`${SUPABASE_URL}/rest/v1/promocodes`, {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=representation"
        },
        body: JSON.stringify(payload)
      });

      // If failed due to extra columns, fallback to base columns
      if (!resp.ok) {
        const fallback = {
          code: payload.code,
          discount_percent: payload.discount_percent || 10,
          active: payload.active !== undefined ? payload.active : 1,
          max_uses: payload.max_uses || 0
        };
        resp = await fetch(`${SUPABASE_URL}/rest/v1/promocodes`, {
          method: "POST",
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
            "Content-Type": "application/json",
            Prefer: "return=representation"
          },
          body: JSON.stringify(fallback)
        });
      }

      const data = await resp.json();
      return res.status(resp.status).json(data);
    }

    if (req.method === "PUT") {
      const targetId = id || req.body?.id;
      const resp = await fetch(`${SUPABASE_URL}/rest/v1/promocodes?id=eq.${targetId}`, {
        method: "PATCH",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=representation"
        },
        body: JSON.stringify(req.body)
      });
      const data = await resp.json();
      return res.status(resp.status).json(data);
    }

    if (req.method === "DELETE") {
      const targetId = id || req.query?.id;
      await fetch(`${SUPABASE_URL}/rest/v1/promocodes?id=eq.${targetId}`, {
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
    console.error("Promocodes API error:", error);
    res.status(500).json({ error: error.message });
  }
}
