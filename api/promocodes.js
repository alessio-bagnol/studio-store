export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const codes = [
    { id: 1, code: "STUDIO10", discount_percent: 10, active: 1, max_uses: 100, times_used: 3 },
    { id: 2, code: "BIENVENUE", discount_percent: 5, active: 1, max_uses: 50, times_used: 1 }
  ];
  return res.status(200).json(codes);
}
