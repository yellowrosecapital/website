import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  Users,
  MapPinned,
  Landmark,
  Mail,
  Phone,
  ChevronRight,
  Briefcase,
  Lock,
  FileText,
  Handshake,
  Home,
  BarChart3
} from "lucide-react";

const BRAND = {
  gold: "#E0AB16",
  blue: "#6E96AD",
  green: "#2F4F23",
  cream: "#F3F0EA",
  ink: "#111111",
};

const LOGO_DARK = "/logo/yellow-rose-capital-logo.svg";
const LOGO_LIGHT = "/logo/yellow-rose-capital-logo-white.png";
const LOGO_MARK = "/logo/yellow-rose-capital-icon-512.png";
const TEAM_PHOTO = "/images/yellow-rose-capital-team-photo.jpg";

const pages = [
  "Home",
  "About",
  "Strategy",
  "Passive Investing",
  "Investor FAQ",
  "Leadership",
  "Investor Process",
  "Contact",
];

const leadership = [
  {
    name: "Nick Disney",
    role: "Co-Founder",
    summary:
      "Nick Disney focuses on private real estate credit, residential note investing, and disciplined asset-backed lending strategies. His work centers on structuring investments that allow individual investors to participate in real estate without directly owning or managing property.",
    detail:
      "Nick has extensive experience sourcing opportunities, evaluating collateral, and structuring investments designed to provide passive real estate exposure for investors seeking diversification outside the stock market.",
    strengths: ["Real estate credit", "Note strategy", "Investor communication", "Deal structuring"],
  },
  {
    name: "Jacob Martinez",
    role: "Co-Founder",
    summary:
      "Jacob Martinez focuses on acquisitions, market intelligence, and transaction execution across the San Antonio residential real estate market.",
    detail:
      "Jacob’s role centers on sourcing opportunities, evaluating local housing market conditions, and helping ensure that investments are backed by strong collateral and practical real estate fundamentals.",
    strengths: ["Deal sourcing", "Market knowledge", "Real estate operations", "Transaction execution"],
  },
];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Logo({ light = false, className = "h-12 w-auto" }) {
  return <img src={light ? LOGO_LIGHT : LOGO_DARK} alt="Yellow Rose Capital" className={cx("object-contain", className)} />;
}

function NavButton({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        "rounded-2xl px-4 py-2 text-sm font-semibold transition",
        active ? "text-black shadow-sm" : "text-stone-700 hover:bg-white hover:text-black"
      )}
      style={active ? { backgroundColor: BRAND.gold } : undefined}
    >
      {label}
    </button>
  );
}

function SectionEyebrow({ children }) {
  return (
    <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[rgb(47,79,35)]">
      {children}
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={cx("rounded-[2rem] border border-black/10 shadow-sm bg-white", className)}>
      {children}
    </div>
  );
}

function Header({ currentPage, setCurrentPage }) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-4">
          <Logo className="h-12" />
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[rgb(47,79,35)]">Yellow Rose Capital</div>
            <div className="text-sm text-stone-700">Passive Real Estate Investments</div>
          </div>
        </div>

        <nav className="flex flex-wrap gap-2">
          {pages.map((page) => (
            <NavButton key={page} label={page} active={page === currentPage} onClick={() => setCurrentPage(page)} />
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero({ setCurrentPage }) {
  return (
    <section className="bg-[rgb(243,240,234)] border-b border-black/10">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <SectionEyebrow>Passive real estate investing</SectionEyebrow>

          <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-6xl">
            Invest in real estate without owning property.
          </h1>

          <p className="mt-6 text-xl leading-9 text-black max-w-2xl">
            Yellow Rose Capital works primarily with accredited individual investors, professionals, and business owners who want passive exposure to real estate and diversification outside traditional public market investments.
          </p>

          <p className="mt-6 text-base text-stone-700 leading-8">
            The firm focuses on asset‑backed real estate credit investments secured by residential real estate collateral. Specific investment opportunities are shared privately with qualified investors through offering documents including a Private Placement Memorandum.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={() => setCurrentPage("Passive Investing")}
              className="rounded-2xl px-5 py-3 font-semibold text-black"
              style={{ backgroundColor: BRAND.gold }}
            >
              Learn About Passive Investing
            </button>

            <button
              onClick={() => setCurrentPage("Contact")}
              className="rounded-2xl border border-black/10 px-5 py-3 font-semibold"
            >
              Speak With Our Team
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-black/10">
          <img src={TEAM_PHOTO} alt="Nick Disney and Jacob Martinez" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function HomePage({ setCurrentPage }) {
  return (
    <div>
      <Hero setCurrentPage={setCurrentPage} />

      <section className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-3 gap-6">
        <Card className="p-6">
          <Home className="h-6 w-6" style={{ color: BRAND.gold }} />
          <h3 className="mt-4 font-semibold">Real estate exposure</h3>
          <p className="mt-2 text-sm text-stone-700">Gain exposure to real estate without managing tenants, repairs, or property operations.</p>
        </Card>

        <Card className="p-6">
          <BarChart3 className="h-6 w-6" style={{ color: BRAND.gold }} />
          <h3 className="mt-4 font-semibold">Diversification</h3>
          <p className="mt-2 text-sm text-stone-700">Many investors participate to diversify outside traditional stock and bond portfolios.</p>
        </Card>

        <Card className="p-6">
          <ShieldCheck className="h-6 w-6" style={{ color: BRAND.gold }} />
          <h3 className="mt-4 font-semibold">Asset‑backed investments</h3>
          <p className="mt-2 text-sm text-stone-700">Investments are structured around real estate collateral rather than unsecured investments.</p>
        </Card>
      </section>
    </div>
  );
}

function StrategyPage() {
  const pillars = [
    {
      title: "Residential real estate credit",
      text: "Yellow Rose Capital focuses on real estate credit investments secured by residential real estate collateral rather than speculative property appreciation alone.",
    },
    {
      title: "Mortgage notes and loans",
      text: "The strategy includes originating and acquiring mortgage notes and other real estate-backed debt opportunities through affiliated investment vehicles.",
    },
    {
      title: "Texas market focus",
      text: "The platform emphasizes Texas residential markets, with operating familiarity and sourcing relationships centered around San Antonio and surrounding areas.",
    },
    {
      title: "Collateral-first underwriting",
      text: "Opportunities are evaluated based on collateral quality, loan structure, borrower profile, and downside protection rather than promotional return claims.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionEyebrow>Investment strategy</SectionEyebrow>

      <div className="mt-4 grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h1 className="text-4xl font-semibold leading-tight">
            A real estate credit strategy built around residential collateral and disciplined underwriting.
          </h1>

          <p className="mt-6 text-lg text-stone-700 leading-8">
            Yellow Rose Capital is positioned around private real estate credit rather than direct property ownership. The strategy is designed for accredited individual investors seeking passive exposure to real estate through asset-backed investments managed by an experienced operator.
          </p>

          <p className="mt-6 text-lg text-stone-700 leading-8">
            Through affiliated investment vehicles, the firm focuses on originating and acquiring residential mortgage notes and other real estate-backed debt opportunities. The emphasis remains on collateral quality, practical underwriting, and market familiarity in Texas residential real estate.
          </p>
        </div>

        <Card className="p-8 bg-[rgb(243,240,234)]">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[rgb(47,79,35)]">How the strategy works</div>
          <div className="mt-6 space-y-4 text-sm leading-7 text-stone-700">
            <div className="flex items-start gap-3"><ChevronRight className="mt-1 h-4 w-4 text-[rgb(47,79,35)]" />Investor capital is deployed into residential real estate credit opportunities rather than direct property management.</div>
            <div className="flex items-start gap-3"><ChevronRight className="mt-1 h-4 w-4 text-[rgb(47,79,35)]" />The manager handles sourcing, underwriting, structuring, and ongoing oversight of the investment portfolio.</div>
            <div className="flex items-start gap-3"><ChevronRight className="mt-1 h-4 w-4 text-[rgb(47,79,35)]" />Investments are generally backed by residential real estate collateral, creating a more asset-based framework than unsecured alternatives.</div>
            <div className="flex items-start gap-3"><ChevronRight className="mt-1 h-4 w-4 text-[rgb(47,79,35)]" />Specific opportunities are shared privately with qualified investors through confidential offering documents, including a Private Placement Memorandum.</div>
          </div>
        </Card>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {pillars.map((pillar) => (
          <Card key={pillar.title} className="p-8">
            <h3 className="text-xl font-semibold">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-7 text-stone-700">{pillar.text}</p>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
        <SectionEyebrow>Approach to risk</SectionEyebrow>
        <p className="mt-4 text-base leading-8 text-stone-700">
          Yellow Rose Capital presents its strategy through the lens of underwriting discipline, collateral support, and portfolio oversight. Investments in private real estate funds involve risk and are illiquid, and detailed information regarding any opportunity is provided only through confidential offering materials made available to qualified investors.
        </p>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionEyebrow>About Yellow Rose Capital</SectionEyebrow>

      <div className="mt-4 grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h1 className="text-4xl font-semibold leading-tight">
            Built for investors seeking passive real estate exposure beyond the stock market.
          </h1>

          <p className="mt-6 text-lg leading-8 text-stone-700">
            Yellow Rose Capital is a private real estate investment brand focused on serving accredited individual investors who want to participate in real estate passively. The firm is designed for investors who value diversification, tangible asset exposure, and a more hands-off alternative to directly owning and managing property.
          </p>

          <p className="mt-6 text-lg leading-8 text-stone-700">
            Rather than asking investors to source deals, evaluate collateral, or oversee day-to-day operations, Yellow Rose Capital handles the sourcing, underwriting, structuring, and ongoing oversight of investment opportunities through affiliated investment vehicles. This allows investors to access real estate-backed strategies in a more streamlined and passive format.
          </p>

          <p className="mt-6 text-lg leading-8 text-stone-700">
            The public-facing brand remains Yellow Rose Capital. Specific opportunities, fund terms, and detailed offering information are shared privately with qualified investors through confidential offering documents, including a Private Placement Memorandum.
          </p>
        </div>

        <Card className="p-8 bg-[rgb(243,240,234)]">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[rgb(47,79,35)]">What Yellow Rose Capital is built around</div>
          <div className="mt-6 space-y-4 text-sm leading-7 text-stone-700">
            <div className="flex items-start gap-3"><ChevronRight className="mt-1 h-4 w-4 text-[rgb(47,79,35)]" />Passive real estate exposure for accredited individual investors</div>
            <div className="flex items-start gap-3"><ChevronRight className="mt-1 h-4 w-4 text-[rgb(47,79,35)]" />Asset-backed investment strategies secured by residential real estate collateral</div>
            <div className="flex items-start gap-3"><ChevronRight className="mt-1 h-4 w-4 text-[rgb(47,79,35)]" />Operator-led sourcing, underwriting, and portfolio oversight</div>
            <div className="flex items-start gap-3"><ChevronRight className="mt-1 h-4 w-4 text-[rgb(47,79,35)]" />A relationship-driven investor process rather than a public offering page</div>
          </div>
        </Card>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <ShieldCheck className="h-6 w-6" style={{ color: BRAND.gold }} />
          <h3 className="mt-4 text-lg font-semibold">Collateral-focused</h3>
          <p className="mt-2 text-sm leading-7 text-stone-700">
            The investment approach emphasizes real estate collateral, underwriting discipline, and practical downside awareness.
          </p>
        </Card>

        <Card className="p-6">
          <Users className="h-6 w-6" style={{ color: BRAND.gold }} />
          <h3 className="mt-4 text-lg font-semibold">Investor-aligned</h3>
          <p className="mt-2 text-sm leading-7 text-stone-700">
            The brand is built for investors who want real estate exposure without taking on the responsibilities of active ownership.
          </p>
        </Card>

        <Card className="p-6">
          <MapPinned className="h-6 w-6" style={{ color: BRAND.gold }} />
          <h3 className="mt-4 text-lg font-semibold">Texas-rooted</h3>
          <p className="mt-2 text-sm leading-7 text-stone-700">
            The strategy reflects local market familiarity, especially in San Antonio and surrounding Texas residential markets.
          </p>
        </Card>
      </div>
    </section>
  );
}

function PassiveInvestingPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">

      <SectionEyebrow>Passive real estate investing</SectionEyebrow>

      <h1 className="mt-4 text-4xl font-semibold">
        How passive real estate investing works
      </h1>

      <p className="mt-6 text-lg text-stone-700 leading-8">
        Many investors want exposure to real estate but do not want to manage rental properties, deal with tenants, or spend time operating real estate projects.
      </p>

      <p className="mt-6 text-lg text-stone-700 leading-8">
        Passive real estate investing allows accredited investors to participate in real estate investments while the investment manager handles sourcing opportunities, underwriting loans, and managing the investment portfolio.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">

        <Card className="p-6">
          <Users className="h-6 w-6" style={{ color: BRAND.gold }} />
          <h3 className="mt-4 font-semibold">Investor capital</h3>
          <p className="text-sm mt-2 text-stone-700">Investors provide capital into real estate investments managed by experienced operators.</p>
        </Card>

        <Card className="p-6">
          <Briefcase className="h-6 w-6" style={{ color: BRAND.gold }} />
          <h3 className="mt-4 font-semibold">Professional management</h3>
          <p className="text-sm mt-2 text-stone-700">The investment manager sources opportunities, performs underwriting, and manages the investment.</p>
        </Card>

        <Card className="p-6">
          <Handshake className="h-6 w-6" style={{ color: BRAND.gold }} />
          <h3 className="mt-4 font-semibold">Passive investment exposure</h3>
          <p className="text-sm mt-2 text-stone-700">Investors receive distributions from the investment without being involved in day‑to‑day operations.</p>
        </Card>

      </div>

    </section>
  );
}

function FAQPage() {
  const faqs = [
    {
      q: "Who typically invests with Yellow Rose Capital?",
      a: "Most of our investors are individual accredited investors, professionals, and business owners who want passive exposure to real estate."
    },
    {
      q: "Do I have to manage property?",
      a: "No. Investments are designed to be passive. The investment team handles sourcing opportunities, underwriting deals, and managing the investments."
    },
    {
      q: "Why do investors participate?",
      a: "Many investors want to diversify outside the stock market while gaining exposure to real estate-backed investments."
    },
    {
      q: "Is this like buying a rental property?",
      a: "No. Passive investing allows individuals to invest in real estate opportunities without owning property directly or managing tenants."
    }
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">

      <SectionEyebrow>Investor FAQ</SectionEyebrow>

      <h1 className="mt-4 text-4xl font-semibold">Common investor questions</h1>

      <div className="mt-12 space-y-6">

        {faqs.map((faq,i)=> (
          <Card key={i} className="p-6">
            <h3 className="font-semibold text-lg">{faq.q}</h3>
            <p className="text-stone-700 mt-2">{faq.a}</p>
          </Card>
        ))}

      </div>

    </section>
  );
}

function LeadershipPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <SectionEyebrow>Leadership</SectionEyebrow>

      <h1 className="mt-4 text-4xl font-semibold">
        Experienced real estate operators
      </h1>

      <div className="mt-10 overflow-hidden rounded-[2rem] border border-black/10">
        <img src={TEAM_PHOTO} className="w-full h-[450px] object-cover" />
      </div>

      <div className="mt-12 grid gap-6">

        {leadership.map((member)=> (
          <Card key={member.name} className="p-8">
            <h3 className="text-2xl font-semibold">{member.name}</h3>
            <div className="text-sm text-stone-500 mb-4">{member.role}</div>

            <p className="text-stone-700 leading-7">{member.summary}</p>
            <p className="text-stone-700 mt-4 leading-7">{member.detail}</p>
          </Card>
        ))}

      </div>

    </section>
  );
}

function InvestorProcessPage() {
  const steps = [
    {
      icon: Users,
      title: "Initial conversation",
      text: "Prospective investors begin with a direct conversation to determine fit, answer questions, and establish a relationship with the firm.",
    },
    {
      icon: Briefcase,
      title: "Qualification and suitability",
      text: "Yellow Rose Capital reviews whether an investor is a qualified fit for private real estate investments and whether additional information may be appropriate to share.",
    },
    {
      icon: Lock,
      title: "Private access to offering materials",
      text: "Detailed opportunity information, offering terms, and subscription documents are made available privately through confidential offering materials, including a Private Placement Memorandum.",
    },
    {
      icon: FileText,
      title: "Ongoing updates",
      text: "After investing, capital partners receive ongoing communication and reporting through the manager’s investor process rather than public website disclosures.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionEyebrow>Investor process</SectionEyebrow>

      <div className="mt-4 grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h1 className="text-4xl font-semibold leading-tight">
            A private, relationship-driven process for passive real estate investors.
          </h1>

          <p className="mt-6 text-lg leading-8 text-stone-700">
            Yellow Rose Capital is structured around direct investor relationships rather than an open public offering model. The website is intended to educate prospective investors, introduce the firm, and provide a path to begin a conversation.
          </p>

          <p className="mt-6 text-lg leading-8 text-stone-700">
            Detailed information about any specific investment opportunity is shared privately with qualified investors through confidential offering documents. This allows investors to evaluate opportunities in a more thoughtful, informed, and compliant process.
          </p>
        </div>

        <Card className="p-8 bg-[rgb(243,240,234)]">
          <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[rgb(47,79,35)]">Why the process matters</div>
          <p className="mt-4 text-sm leading-7 text-stone-700">
            Private real estate investments require more than a simple online checkout flow. The investor process is designed to create clarity, answer questions, and ensure that offering information is shared appropriately through confidential documents rather than broad public promotion.
          </p>
        </Card>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step) => (
          <Card key={step.title} className="p-6">
            <step.icon className="h-6 w-6" style={{ color: BRAND.gold }} />
            <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-7 text-stone-700">{step.text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="bg-[rgb(17,17,17)] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">

        <Logo light className="h-14" />

        <h1 className="mt-6 text-4xl font-semibold">
          Start a conversation
        </h1>

        <p className="mt-4 text-stone-300">
          If you are an investor interested in passive real estate opportunities, contact our team to learn more.
        </p>

        <div className="mt-10 max-w-3xl space-y-6 text-sm text-stone-400 leading-7">
          <p>
            This website is provided for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Any investment opportunities referenced on this site are available only to qualified investors through confidential offering documents including a Private Placement Memorandum. Past performance does not guarantee future results.
          </p>

          <p>
            Investments in private real estate funds involve risk and are illiquid. Prospective investors should review all offering documents and consult their own legal, tax, and financial advisors before investing.
          </p>
        </div>

      </div>
    </section>
  );
}

function Footer({ setCurrentPage }) {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 flex justify-between">
        <div>
          <div className="text-sm uppercase tracking-[0.28em] text-[rgb(47,79,35)]">Yellow Rose Capital</div>
          <p className="text-sm text-stone-600 mt-3">
            Passive real estate investments for individual investors seeking diversification outside the stock market.
          </p>
        </div>

        <button onClick={()=>setCurrentPage("Contact")} className="rounded-2xl px-4 py-2 text-black font-semibold" style={{backgroundColor: BRAND.gold}}>
          Contact
        </button>

      </div>
    </footer>
  );
}

export default function YellowRoseCapitalWebsite() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderedPage = useMemo(() => {
    switch (currentPage) {
      case "About":
        return <AboutPage />;
      case "Strategy":
        return <StrategyPage />;
      case "Passive Investing":
        return <PassiveInvestingPage />;
      case "Investor FAQ":
        return <FAQPage />;
      case "Leadership":
        return <LeadershipPage />;
      case "Investor Process":
        return <InvestorProcessPage />;
      case "Contact":
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-[rgb(243,240,234)] text-black">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <motion.main
        key={currentPage}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
      >
        {renderedPage}
      </motion.main>

      <Footer setCurrentPage={setCurrentPage} />

    </div>
  );
}
