const SUPABASE_URL = "https://wvqyqycbtpmewyqakjah.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || "sb_publishable_hsctbznMphT4WoDrv7gpfA_AfIRT-9k";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const resp = await fetch(`${SUPABASE_URL}/rest/v1/promocodes?select=*`, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`
      }
    });
    const data = await resp.json();
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
