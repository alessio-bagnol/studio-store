export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const products = [
    {
      id: 1,
      name: "Tornado 9000 - Strawberry Watermelon",
      category: "Puff",
      price: "20,00 €",
      old_price: "25,00 €",
      stock: 15,
      incoming_stock: 0,
      image: "/real_photos/photo/IMG_3292.jpg",
      flavors: "Fraise Pastèque",
      description: "Puff RandM Tornado 9000 bouffées. Saveur fraîche et sucrée, rechargeable en USB-C."
    },
    {
      id: 2,
      name: "Tornado 9000 - Blueberry Ice",
      category: "Puff",
      price: "20,00 €",
      old_price: "25,00 €",
      stock: 10,
      incoming_stock: 0,
      image: "/real_photos/photo/IMG_3293.jpg",
      flavors: "Myrtille Glacée",
      description: "Myrtille intense avec un effet fraîcheur givré. 9000 puffs de pur plaisir."
    },
    {
      id: 3,
      name: "Tornado 9000 - Cherry Cola",
      category: "Puff",
      price: "20,00 €",
      old_price: "",
      stock: 8,
      incoming_stock: 0,
      image: "/real_photos/photo/IMG_3294.jpg",
      flavors: "Cerise Cola",
      description: "Le goût pétillant du cola combiné à la cerise gourmande."
    },
    {
      id: 4,
      name: "Tornado 9000 - Peach Mango Pineapple",
      category: "Puff",
      price: "20,00 €",
      old_price: "",
      stock: 12,
      incoming_stock: 0,
      image: "/real_photos/photo/IMG_3295.jpg",
      flavors: "Pêche Mangue Ananas",
      description: "Cocktail tropical fruité et ensoleillé pour une vape douce."
    },
    {
      id: 5,
      name: "Airpods Pro 2 (ANC Edition)",
      category: "Airpods",
      price: "45,00 €",
      old_price: "60,00 €",
      stock: 5,
      incoming_stock: 0,
      image: "/real_photos/photo/IMG_3296.jpg",
      flavors: "Blanc",
      description: "Écouteurs sans fil avec réduction active du bruit (ANC), mode transparence et boîtier MagSafe."
    },
    {
      id: 6,
      name: "Airpods 3 MagSafe",
      category: "Airpods",
      price: "40,00 €",
      old_price: "50,00 €",
      stock: 6,
      incoming_stock: 0,
      image: "/real_photos/photo/IMG_3297.jpg",
      flavors: "Blanc",
      description: "Audio spatial personnalisé, résistance à l'eau et autonomie prolongée."
    }
  ];

  return res.status(200).json(products);
}
