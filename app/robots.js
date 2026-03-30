export default function robots() {
  const baseUrl = process.env.SITE_URL || "http://localhost:3000";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"]
      }
    ],
    sitemap: new URL("/sitemap.xml", baseUrl).toString()
  };
}
