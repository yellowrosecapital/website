import { createPageMetadata } from "@/lib/seo";

export const growthContent = {
  shareSnippets: [
    "First-position liens and disciplined underwriting.",
    "A focus on income, not speculation.",
    "Long-term, relationship-driven investing."
  ],
  copyBlocks: [
    "The role of residential mortgage notes and private credit.",
    "How we approach underwriting and risk.",
    "Why we focus on Texas markets."
  ],
  posts: [
    {
      slug: "passive-real-estate-investing-explained",
      title: "Passive Real Estate Investing, Explained",
      category: "Investor education",
      publishedAt: "2026-03-30",
      readTime: "4 min read",
      excerpt:
        "A simple introduction to passive real estate investing for accredited individual investors who want exposure without day-to-day property management.",
      description:
        "Understand passive real estate investing, how it differs from direct ownership, and why some investors prefer a manager-led structure.",
      keywords: [
        "passive real estate investing",
        "accredited investors",
        "real estate education"
      ],
      sections: [
        {
          heading: "What passive investing means",
          body:
            "Passive real estate investing means participating in real estate opportunities while a manager handles sourcing, underwriting, and oversight. The investor is not answering tenant calls or managing repairs."
        },
        {
          heading: "Why some investors prefer it",
          body:
            "Many investors want real estate exposure, but they want it in a format that fits alongside a business, career, or existing portfolio. Passive structures can help reduce the operational burden of direct ownership."
        },
        {
          heading: "How Yellow Rose Capital frames it",
          body:
            "The public site focuses on residential credit, collateral awareness, and a disciplined investor process rather than public solicitation or return hype."
        }
      ],
      metadata: createPageMetadata({
        title: "Passive Real Estate Investing, Explained",
        description:
          "A simple introduction to passive real estate investing and how it differs from direct property ownership.",
        path: "/insights/passive-real-estate-investing-explained",
        keywords: [
          "passive real estate investing",
          "private real estate credit",
          "accredited investors"
        ]
      })
    },
    {
      slug: "why-first-position-liens-matter",
      title: "Why First-Position Liens Matter",
      category: "Strategy",
      publishedAt: "2026-03-30",
      readTime: "5 min read",
      excerpt:
        "A plain-English explanation of why first-position liens are central to the collateral story in a conservative residential credit strategy.",
      description:
        "Learn why first-position liens are important in residential real estate credit and how collateral-first underwriting changes the conversation.",
      keywords: [
        "first-position liens",
        "residential real estate credit",
        "mortgage notes"
      ],
      sections: [
        {
          heading: "What first position means",
          body:
            "A first-position lien sits at the front of the collateral stack. In practical terms, that means the lender has priority over junior liens in a workout or recovery scenario."
        },
        {
          heading: "Why investors care",
          body:
            "Investors who focus on downside awareness often care more about collateral position than marketing language. First position is one part of the broader risk discussion, not a guarantee."
        },
        {
          heading: "How the website should describe it",
          body:
            "The public website should describe the concept at a high level and keep the detailed economics and underwriting terms inside private offering materials."
        }
      ],
      metadata: createPageMetadata({
        title: "Why First-Position Liens Matter",
        description:
          "A plain-English explanation of why first-position liens matter in residential real estate credit.",
        path: "/insights/why-first-position-liens-matter",
        keywords: [
          "first-position liens",
          "private credit",
          "residential real estate"
        ]
      })
    },
    {
      slug: "texas-residential-note-strategy",
      title: "Texas Residential Note Strategy",
      category: "Texas markets",
      publishedAt: "2026-03-30",
      readTime: "4 min read",
      excerpt:
        "How a Texas-based team can frame residential note investing around local market familiarity, process, and consistency.",
      description:
        "A short educational note on how local market familiarity can support a residential mortgage note strategy in Texas.",
      keywords: [
        "Texas residential real estate",
        "San Antonio notes",
        "mortgage note strategy"
      ],
      sections: [
        {
          heading: "Local familiarity matters",
          body:
            "A Texas-based team can build practical familiarity with neighborhoods, borrower behavior, and market dynamics that matter when reviewing residential credit opportunities."
        },
        {
          heading: "Why San Antonio shows up often",
          body:
            "San Antonio and the surrounding markets provide a useful local reference point for a firm that wants to keep the public story grounded in a real operating geography."
        },
        {
          heading: "What to avoid in the public story",
          body:
            "The public story should not drift into hype, general solicitation, or overly specific offering claims. It should stay educational and relationship-based."
        }
      ],
      metadata: createPageMetadata({
        title: "Texas Residential Note Strategy",
        description:
          "A short educational note on Texas residential note investing and local market familiarity.",
        path: "/insights/texas-residential-note-strategy",
        keywords: [
          "Texas residential real estate",
          "San Antonio note investing",
          "private real estate credit"
        ]
      })
    }
  ]
};
