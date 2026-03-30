const SITE_NAME = "Yellow Rose Capital";
const SHARE_IMAGE = "/og/yellow-rose-capital-share.svg";

export function createPageMetadata({ title, description, path, keywords = [] }) {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description,
      url: path,
      images: [
        {
          url: SHARE_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} share card`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SHARE_IMAGE]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        maxSnippet: -1,
        maxImagePreview: "large",
        maxVideoPreview: -1
      }
    }
  };
}
