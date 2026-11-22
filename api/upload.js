const SUPABASE_URL = "https://wvqyqycbtpmewyqakjah.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || "sb_publishable_hsctbznMphT4WoDrv7gpfA_AfIRT-9k";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, data, type } = req.body;
    if (!data) {
      return res.status(400).json({ error: "Missing image data" });
    }

    const cleanBase64 = data.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(cleanBase64, "base64");
    const fileName = `${Date.now()}_${name ? name.replace(/[^a-zA-Z0-9.-]/g, "_") : "upload.jpg"}`;
    const contentType = type || "image/jpeg";

    const uploadResp = await fetch(
      `${SUPABASE_URL}/storage/v1/object/product-images/${fileName}`,
      {
        method: "POST",
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
          "Content-Type": contentType,
        },
        body: buffer,
      }
    );

    if (!uploadResp.ok) {
      const errText = await uploadResp.text();
      throw new Error(`Upload failed: ${errText}`);
    }

    const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/product-images/${fileName}`;
    return res.status(200).json({ url: publicUrl });
  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({ error: error.message });
  }
}
