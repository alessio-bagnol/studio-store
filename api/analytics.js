const SUPABASE_URL = "https://wvqyqycbtpmewyqakjah.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || "sb_publishable_hsctbznMphT4WoDrv7gpfA_AfIRT-9k";

const headers = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`
};

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    if (req.method === "GET") {
      const [ordersResp, productsResp] = await Promise.all([
        fetch(`${SUPABASE_URL}/rest/v1/orders?select=*&order=created_at.desc`, { headers }),
        fetch(`${SUPABASE_URL}/rest/v1/products?select=*&order=id.asc`, { headers })
      ]);

      const orders = await ordersResp.json();
      const products = await productsResp.json();

      return res.status(200).json({
        visits: [],
        visitsOverTime: [],
        orders: Array.isArray(orders) ? orders : [],
        products: Array.isArray(products) ? products : []
      });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
