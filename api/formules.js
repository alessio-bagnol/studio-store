export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const formules = [
    { id: 1, category: "Puff", qty: 2, price: "35,00 €" },
    { id: 2, category: "Puff", qty: 3, price: "50,00 €" },
    { id: 3, category: "Puff", qty: 5, price: "75,00 €" },
    { id: 4, category: "Puff", qty: 10, price: "140,00 €" },
    { id: 5, category: "Airpods", qty: 2, price: "80,00 €" }
  ];
  return res.status(200).json(formules);
}
