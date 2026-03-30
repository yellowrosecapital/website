import { siteContent } from "@/lib/site-content";
import { growthContent } from "@/lib/growth-content";

export default function sitemap() {
  const baseUrl = process.env.SITE_URL || "http://localhost:3000";

  const staticRoutes = siteContent.navItems.map((item) => ({
    url: new URL(item.href, baseUrl).toString(),
    lastModified: new Date()
  }));

  const insightRoutes = growthContent.posts.map((post) => ({
    url: new URL(`/insights/${post.slug}`, baseUrl).toString(),
    lastModified: new Date(post.publishedAt)
  }));

  return [...staticRoutes, ...insightRoutes];
}
