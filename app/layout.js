import { Suspense } from "react";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteAnalytics } from "@/components/site-analytics";
import { siteContent } from "@/lib/site-content";

const siteUrl = process.env.SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yellow Rose Capital",
    template: "%s | Yellow Rose Capital"
  },
  description:
    "Passive real estate investing backed by real assets for accredited individual investors.",
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Suspense fallback={null}>
            <SiteAnalytics />
          </Suspense>
          <SiteHeader navItems={siteContent.navItems} />
          <main>{children}</main>
          <SiteFooter navItems={siteContent.navItems} disclaimer={siteContent.disclaimer} />
        </div>
      </body>
    </html>
  );
}
