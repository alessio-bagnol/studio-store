export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  return res.status(200).json({
    insta: { followers: "2.4k", following: "180", posts: "32" },
    discord: { name: "Studio Store", members: 350, online: 120, iconUrl: "/real_photos/photo/logo.jpg" }
  });
}
