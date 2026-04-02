import { createPageMetadata } from "@/lib/seo";

export const siteContent = {
  brand: {
    name: "Yellow Rose Capital",
    tagline: "Passive real estate investments for accredited individual investors",
    location: "San Antonio, Texas"
  },
  navItems: [
    { label: "Home", href: "/" },
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
    strategy: createPageMetadata({
      title: "Strategy",
      description:
        "Private real estate credit centered on residential collateral, disciplined underwriting, and Texas market focus.",
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
        title: "Investment Strategy",
        text: "We originate and acquire residential mortgage notes and short-term real estate loans, focusing on conservative leverage and consistent income generation."
      },
      {
        title: "Market Focus",
        text: "We concentrate on Texas markets we understand deeply, prioritizing areas with strong population growth, housing demand, and long-term stability."
      },
      {
        title: "Our Approach",
        text: "Our team actively sources, underwrites, and manages each investment with a focus on capital preservation, disciplined risk management, and consistent execution."
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
        text: "We emphasizes discipline, collateral, and downside awareness."
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
  strategy: {
      intro:
        "Yellow Rose Capital focuses on private real estate credit secured by residential collateral, with an emphasis on income, capital preservation, and Texas markets.",
      pillars: [
        {
          title: "Income-oriented capital",
          text: "We originate and acquire residential mortgage notes and short-term real estate loans structured to generate current income rather than rely on speculative appreciation."
        },
        {
          title: "Collateral-first underwriting",
          text: "Every opportunity is evaluated around collateral quality, lien position, borrower context, and downside protection."
        },
        {
          title: "Texas market focus",
          text: "Our public focus stays on San Antonio and surrounding Texas markets where local knowledge and disciplined execution matter."
        }
      ],
    publicNote:
      "The strategy may include both short-term bridge or rehab lending and longer-duration note acquisition, but detailed deal terms stay private.",
    process: [
      "Source residential credit opportunities within target Texas markets.",
      "Underwrite collateral, borrower profile, and loan structure.",
      "Deploy capital through structured investment vehicles.",
      "Provide detailed investment information through private materials."
    ]
  },
  passive: {
    intro:
      "Passive real estate investing means participating in real estate opportunities without being responsible for day-to-day ownership or operations.",
    sections: [
      {
        title: "Why investors choose it",
        text: "Many investors are looking for exposure to real estate without the responsibilities of ownership. Private real estate credit offers a way to generate income backed by real assets without managing tenants, renovations, or day-to-day operations."
      },
      {
        title: "How it works",
        text: "We source, underwrite, and manage each investment, while investors participate passively. The focus is on disciplined lending, asset-backed security, and consistent income generation."
      },
      {
        title: "Why collateral matters",
        text: "Each investment is secured by residential real estate, providing a tangible asset behind the investment. This structure helps prioritize capital preservation alongside income."
      },
      {
        title: "Who it may fit",
        text: "This approach is designed for accredited investors seeking passive income, portfolio diversification, and exposure to real estate-backed investments with a focus on risk management."
      }
    ],
    considerations: [
      "Private real estate investments are generally illiquid and intended for longer-term holding periods.",
      "All investments involve risk, including potential loss of capital.",
      "Returns are not guaranteed and will vary based on investment performance.",
      "Investment details are provided through confidential offering documents."
    ]
  },
  faq: [
    {
      question: "What does the fund invest in?",
      answer:
        "We focus on residential real estate credit, including mortgage notes and short-term real estate loans. These investments are secured by residential properties, typically in Texas markets where we have direct operating experience."
    },
    {
      question: "How do investors make money?",
      answer:
        "Investors earn returns through the income generated by the underlying loans and mortgage notes. The focus is on consistent income backed by real estate, rather than relying on property appreciation."
    },
    {
      question: "How is this different from owning rental real estate?",
      answer:
        "This approach does not require investors to buy, manage, or maintain rental properties directly. The strategy is focused on real estate credit, so investors participate in income generation through loans and mortgage notes rather than property ownership."
    },
    {
      question: "Why invest in real estate credit instead of property directly?",
      answer:
        "Real estate credit can provide a more passive way to participate in real estate. The emphasis is on income, collateral, and disciplined underwriting rather than day-to-day property operations."
    },
    {
      question: "Will I be responsible for managing properties?",
      answer:
        "No. Investors are not responsible for managing properties, tenants, or renovations. Yellow Rose Capital handles sourcing, underwriting, and management so investors can participate passively."
    },
    {
      question: "Who is this investment designed for?",
      answer:
        "This approach is designed for accredited investors seeking passive income, portfolio diversification, and exposure to real estate-backed investments with a focus on risk management."
    },
    {
      question: "What role do you play in the investments?",
      answer:
        "We are actively involved in sourcing, underwriting, and managing each investment. Our role is to oversee the entire process, allowing investors to participate passively."
    },
    {
      question: "How is risk managed?",
      answer:
        "Risk is managed through disciplined underwriting, conservative loan-to-value ratios, and a focus on first-position collateral. Each investment is evaluated based on the strength of the asset, borrower, and structure."
    },
    {
      question: "Is this investment liquid?",
      answer:
        "No. These investments are generally illiquid and are intended for investors with a longer-term perspective."
    },
    {
      question: "How do I get more details?",
      answer:
        "Detailed investment information, including underwriting and offering materials, is provided privately to qualified investors. You can request information to begin that process."
    }
  ],
  leadership: [
    {
      name: "Nick Disney",
      role: "Co-Founder",
      image: "/images/nick-disney.jpg",
      imageAlt: "Nick Disney, co-founder of Yellow Rose Capital",
      summary:
        "Nick Disney has been investing in residential real estate for over 15 years, managing a portfolio of mortgage notes and rental properties while completing hundreds of real estate transactions.",
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
      title: "INITIAL CONVERSATION",
      text: "You reach out to start the conversation. We connect to learn more about your goals and answer any initial questions."
    },
    {
      step: "02",
      title: "ALIGNMENT & FIT",
      text: "We determine if there’s a mutual fit. We evaluate alignment based on your objectives and the structure of the investment."
    },
    {
      step: "03",
      title: "PRIVATE INFORMATION",
      text: "Detailed information is shared privately. Qualified investors receive access to additional materials and offering details."
    },
    {
      step: "04",
      title: "REVIEW & DISCUSSION",
      text: "You review the materials and ask questions. We walk through the details together so you can make an informed decision."
    },
    {
      step: "05",
      title: "INVESTMENT PROCESS",
      text: "Investments are completed through a private process. If you decide to move forward, everything is handled through formal subscription documents."
    },
    {
      step: "06",
      title: "ONGOING COMMUNICATION",
      text: "Communication continues after you invest. We provide ongoing updates and remain available for questions."
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
