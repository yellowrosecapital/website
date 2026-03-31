import { createPageMetadata } from "@/lib/seo";

export const siteContent = {
  brand: {
    name: "Yellow Rose Capital",
    tagline: "Passive real estate investments for accredited individual investors",
    location: "San Antonio, Texas"
  },
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Strategy", href: "/strategy" },
    { label: "Insights", href: "/insights" },
    { label: "Passive Real Estate Investing", href: "/passive-real-estate-investing" },
    { label: "Investor FAQ", href: "/investor-faq" },
    { label: "Leadership", href: "/leadership" },
    { label: "Investor Process", href: "/investor-process" },
    { label: "Contact", href: "/contact" }
  ],
  disclaimer:
    "This website is provided for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Any investment opportunities referenced on this site are available only to qualified investors through confidential offering documents including a Private Placement Memorandum. Past performance does not guarantee future results. Investments in private real estate funds involve risk and are illiquid. Prospective investors should review offering documents carefully and consult their own legal, tax, and financial advisors.",
  pageMeta: {
    home: createPageMetadata({
      title: "Home",
      description:
        "Passive real estate investing backed by real assets for accredited individual investors.",
      path: "/",
      keywords: [
        "passive real estate investing",
        "private real estate credit",
        "accredited investors"
      ]
    }),
    about: createPageMetadata({
      title: "About",
      description:
        "Learn how Yellow Rose Capital serves accredited investors seeking passive exposure to private real estate credit.",
      path: "/about",
      keywords: ["Yellow Rose Capital", "private real estate credit"]
    }),
    strategy: createPageMetadata({
      title: "Strategy",
      description:
        "An overview of Yellow Rose Capital's private real estate credit strategy centered on residential collateral and disciplined underwriting.",
      path: "/strategy",
      keywords: ["residential mortgage notes", "first-position liens", "Texas real estate"]
    }),
    passive: createPageMetadata({
      title: "Passive Real Estate Investing",
      description:
        "A simple explanation of passive real estate investing and why some investors prefer it to direct property ownership.",
      path: "/passive-real-estate-investing",
      keywords: ["passive real estate investing", "real estate education"]
    }),
    faq: createPageMetadata({
      title: "Investor FAQ",
      description:
        "Common questions about Yellow Rose Capital, passive real estate investing, and the investor process.",
      path: "/investor-faq",
      keywords: ["investor FAQ", "accredited investors"]
    }),
    leadership: createPageMetadata({
      title: "Leadership",
      description:
        "Meet the founders behind Yellow Rose Capital and their real estate operating experience.",
      path: "/leadership",
      keywords: ["Nick Disney", "Jacob Martinez", "real estate leadership"]
    }),
    process: createPageMetadata({
      title: "Investor Process",
      description:
        "A relationship-based process for qualified investors who want to learn more about private real estate credit opportunities.",
      path: "/investor-process",
      keywords: ["investor process", "qualified investors", "private materials"]
    }),
    contact: createPageMetadata({
      title: "Contact",
      description:
        "Request information from Yellow Rose Capital through a simple, compliant contact process.",
      path: "/contact",
      keywords: ["contact Yellow Rose Capital", "request information"]
    })
  },
  home: {
    hero: {
      eyebrow: "Passive real estate investing",
      title: "Passive real estate investing backed by real assets.",
      lead:
        "Yellow Rose Capital provides accredited investors access to consistent income through privately originated real estate debt investments secured by single-family residential properties.",
      note:
        "This site introduces the firm, its philosophy, and its strategy at a high level. Detailed offering information is shared privately with qualified investors through confidential materials."
    },
    highlights: [
      {
        title: "Private real estate credit",
        text: "The public story centers on asset-backed investments secured by residential real estate rather than a speculative property-flipping posture."
      },
      {
        title: "Texas market familiarity",
        text: "The firm emphasizes local knowledge of San Antonio and surrounding Texas residential markets."
      },
      {
        title: "Operator-led management",
        text: "Investors participate passively while the manager handles sourcing, underwriting, and portfolio oversight."
      }
    ],
    whatWeDo: [
      "Originates and acquires single-family mortgage notes secured by first-position liens.",
      "Focuses on private real estate debt rather than direct property ownership.",
      "Speaks to accredited individual investors seeking passive exposure and diversification."
    ],
    whyInvestorsChoose: [
      {
        title: "Income-oriented exposure",
        text: "The strategy is designed for investors who want a real estate-backed path to income exposure without taking on landlord responsibilities."
      },
      {
        title: "Capital preservation mindset",
        text: "The public narrative emphasizes discipline, collateral, and downside awareness."
      },
      {
        title: "Diversification beyond public markets",
        text: "Some investors want exposure to real assets without tying their entire allocation to stocks and bonds."
      }
    ],
    strategySnapshot: [
      "Short-term rehab and bridge lending opportunities.",
      "Long-term owner-occupied mortgage note acquisition.",
      "First-position lien security and collateral-first underwriting.",
      "Texas residential real estate, especially San Antonio and surrounding markets."
    ]
  },
  about: {
    intro:
      "Yellow Rose Capital is a private real estate investment brand built for accredited individual investors who want passive exposure to real estate through a relationship-based process.",
    philosophy:
      "The firm is intentionally conservative in tone and structure. It aims to present private real estate credit in a way that feels disciplined, understandable, and trustworthy for experienced individual investors.",
    whoItServes:
      "The website is written for accredited individuals, business owners, professionals, and high-net-worth investors who want to diversify beyond public markets without directly operating properties.",
    commitments: [
      "Lead with Yellow Rose Capital as the public brand.",
      "Keep detailed offering materials private.",
      "Use straightforward language that educates rather than sells.",
      "Maintain a Texas-rooted, institutional, and polished feel."
    ]
  },
  strategy: {
    intro:
      "Yellow Rose Capital focuses on private real estate credit with a residential collateral base and a Texas operating lens.",
    pillars: [
      {
        title: "Residential real estate credit",
        text: "The public strategy centers on mortgage notes and real estate-backed debt rather than speculative public-market style products."
      },
      {
        title: "First-position security",
        text: "The emphasis is on collateral quality and first-position liens to support a disciplined underwriting framework."
      },
      {
        title: "Texas market focus",
        text: "The firm highlights experience in San Antonio and surrounding Texas residential markets."
      },
      {
        title: "Two-strategy mix",
        text: "The public narrative can reference both short-term rehab or bridge lending and long-term owner-occupied note acquisition at a high level."
      }
    ],
    process: [
      "Source and review residential credit opportunities.",
      "Evaluate collateral, borrower profile, and loan structure.",
      "Deploy capital through affiliated investment vehicles only after qualification.",
      "Provide investor communication through private channels rather than public website disclosures."
    ]
  },
  passive: {
    intro:
      "Passive real estate investing means participating in real estate opportunities without being responsible for day-to-day ownership or operations.",
    sections: [
      {
        title: "Why investors choose it",
        text: "Many investors prefer passive exposure because they want real estate upside without managing tenants, repairs, or project execution."
      },
      {
        title: "How it works",
        text: "A manager sources, underwrites, and oversees the investment while the investor remains hands-off."
      },
      {
        title: "Why collateral matters",
        text: "Real estate-backed investments can feel more tangible to some investors because they are secured by underlying assets."
      },
      {
        title: "Who it may fit",
        text: "The message is aimed at accredited individuals who want diversification, income orientation, and a more measured risk conversation."
      }
    ],
    considerations: [
      "Private real estate investments are illiquid.",
      "All investments involve risk.",
      "No outcome should be assumed or guaranteed.",
      "Detailed documents should be reviewed privately."
    ]
  },
  faq: [
    {
      question: "Who is this site written for?",
      answer:
        "The site is written for accredited individual investors, professionals, business owners, and high-net-worth individuals who want passive exposure to real estate."
    },
    {
      question: "What does passive investing mean here?",
      answer:
        "It means investors do not manage property directly. Yellow Rose Capital handles sourcing, underwriting, structuring, and ongoing oversight."
    },
    {
      question: "Do investors manage anything themselves?",
      answer:
        "No. The investment is designed to be passive. Investors review the opportunity privately and then remain hands-off once they subscribe."
    },
    {
      question: "How does real estate collateral fit into the strategy?",
      answer:
        "The strategy focuses on residential credit secured by real estate collateral, with a public emphasis on first-position liens and disciplined underwriting."
    },
    {
      question: "How do people get more detailed information?",
      answer:
        "Qualified investors can request information through the contact process and, if appropriate, receive confidential offering materials."
    },
    {
      question: "How does someone start?",
      answer:
        "The first step is a simple introduction through the contact form. From there, the team can determine whether there is a fit for a private conversation."
    }
  ],
  leadership: [
    {
      name: "Nick Disney",
      role: "Co-Founder",
      image: "/images/nick-disney.jpg",
      imageAlt: "Nick Disney, co-founder of Yellow Rose Capital",
      summary:
        "Nick Disney brings more than 15 years of residential real estate investing experience, including mortgage notes and rental properties, with a focus on helping investors participate in real estate passively.",
      details:
        "His background includes managing a large number of transactions, evaluating collateral, and thinking through investments from the perspective of a disciplined operator.",
      strengths: ["Residential investing", "Mortgage notes", "Investor communication", "Practical underwriting"]
    },
    {
      name: "Jacob Martinez",
      role: "Co-Founder",
      image: "/images/jacob-martinez.jpg",
      imageAlt: "Jacob Martinez, co-founder of Yellow Rose Capital",
      summary:
        "Jacob Martinez is a U.S. Air Force veteran and former San Antonio firefighter with extensive off-market single-family investing experience.",
      details:
        "His experience includes raising private capital, building systems for sourcing and underwriting deals, and executing transactions in local residential markets.",
      strengths: ["Deal sourcing", "Transaction execution", "Local market knowledge", "Systems and operations"]
    }
  ],
  process: [
    {
      step: "01",
      title: "Initial inquiry",
      text: "A qualified investor reaches out through the contact form to start a conversation."
    },
    {
      step: "02",
      title: "Qualification and fit",
      text: "The team confirms whether the investor appears to be a fit for the private process."
    },
    {
      step: "03",
      title: "Private materials",
      text: "If appropriate, the investor receives access to confidential offering documents."
    },
    {
      step: "04",
      title: "Review and diligence",
      text: "The investor reviews the private materials and asks questions before making any decision."
    },
    {
      step: "05",
      title: "Subscription",
      text: "Any investment is completed through the private subscription process, not a public checkout flow."
    },
    {
      step: "06",
      title: "Ongoing communication",
      text: "After investing, communication continues through the manager's private investor process."
    }
  ],
  contact: {
    intro:
      "If you are an accredited individual investor interested in learning more about private real estate credit, use the form below to start a conversation.",
    fields: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      investorType: "Investor type",
      accreditedStatus: "Accredited status",
      investmentRange: "Potential investment size",
      message: "Message",
      company: "Company"
    },
    investorTypes: [
      "Accredited individual investor",
      "Business owner",
      "Professional",
      "High-net-worth individual",
      "Other"
    ],
    accreditedStatuses: ["Yes", "No", "Unsure"],
    investmentRanges: [
      "Under $50k",
      "$50k-$100k",
      "$100k-$250k",
      "$250k-$500k",
      "$500k+",
      "Not sure yet"
    ],
    successMessage:
      "Thanks for reaching out. Your inquiry has been received and the team will review it and respond if there appears to be a fit.",
    errorMessage:
      "We could not submit your message right now. Please review the form and try again, or contact the team through another channel if one is available."
  }
};
