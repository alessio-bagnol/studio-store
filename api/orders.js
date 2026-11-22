export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    return res.status(200).json({ success: true, id: orderId, order_id: orderId });
  }

  return res.status(200).json({ success: true, orders: [] });
}
