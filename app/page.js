import { BrandImage } from "@/components/brand-image";
import { ButtonLink, Card, Container, Eyebrow, Pill, Section, SectionCopy, SectionTitle } from "@/components/ui";
import { TrackableButtonLink } from "@/components/trackable-button-link";
import { growthContent } from "@/lib/growth-content";
import { siteContent } from "@/lib/site-content";

export const metadata = siteContent.pageMeta.home;

export default function HomePage() {
  const { home, leadership } = siteContent;

  return (
    <>
      <section className="hero home-hero">
        <Container>
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow-group">
                <Eyebrow>{home.hero.eyebrow}</Eyebrow>
                <Pill>San Antonio, Texas</Pill>
              </div>

              <h1 className="page-title">{home.hero.title}</h1>
              <p className="page-lead">{home.hero.lead}</p>
              <p className="hero-note">{home.hero.note}</p>

              <div className="button-row">
                <TrackableButtonLink href="/contact" eventProps={{ location: "home_hero" }}>
                  Request Information
                </TrackableButtonLink>
                <TrackableButtonLink href="/strategy" variant="secondary" eventProps={{ location: "home_hero" }}>
                  Explore the Strategy
                </TrackableButtonLink>
              </div>

              <div className="grid-3" style={{ marginTop: "0.8rem" }}>
                {home.highlights.map((item) => (
                  <Card key={item.title} className="card-pad">
                    <div className="feature-stat">
                      <strong>{item.title}</strong>
                      <span>{item.text}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="hero-aside">
              <div className="hero-media">
                <div className="hero-media-inner">
                  <div className="hero-media-card">
                    <div className="kicker">Investment snapshot</div>
                    <h2 className="hero-media-title">Private real estate credit focused on income and capital preservation.</h2>
                    <p className="hero-media-copy">
                      We provide accredited investors access to real estate-backed investments structured to generate consistent income through disciplined lending and conservative underwriting.
                    </p>
                  </div>

                  <div className="hero-media-card">
                    <div className="grid-2">
                      <div>
                        <div className="kicker">Primary focus</div>
                        <p className="hero-media-copy">Residential mortgage notes secured by first-position liens.</p>
                      </div>
                      <div>
                        <div className="kicker">Investor Profile</div>
                        <p className="hero-media-copy">Accredited individuals seeking passive income and diversification beyond traditional markets.</p>
                      </div>
                    </div>
                  </div>

                  <BrandImage
                    src="/images/yellow-rose-capital-team-photo.jpg"
                    alt="Yellow Rose Capital team photo"
                    className="hero-photo"
                    fallback={
                        <div
                          style={{
                            minHeight: "270px",
                            display: "grid",
                            alignItems: "end",
                            padding: "1.2rem",
                            background:
                              "linear-gradient(160deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02)), linear-gradient(135deg, rgba(20,38,63,0.32), rgba(214,162,29,0.25))"
                          }}
                        >
                          <div className="hero-media-card" style={{ marginBottom: 0 }}>
                            <div className="kicker" style={{ color: "rgba(255,255,255,0.84)" }}>
                              Founder photo placeholder
                            </div>
                            <p className="hero-media-copy">
                              Add the provided founder/team photo at <code>/public/images/yellow-rose-capital-team-photo.jpg</code>.
                            </p>
                          </div>
                        </div>
                    }
                    priority
                  />
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <Section className="home-story-section">
        <Container>
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div className="stack">
              <Eyebrow>What we do</Eyebrow>
              <SectionTitle>A More Predictable Approach to Real Estate Investing</SectionTitle>
              <SectionCopy>
                Yellow Rose Capital focuses on generating income through real estate-backed lending rather than property ownership. Instead of relying on appreciation or market timing, our strategy centers on producing consistent cash flow from secured debt investments.
              </SectionCopy>

              <SectionCopy>
                Investor capital is deployed into carefully underwritten loans backed by residential real estate, with a focus on capital preservation and disciplined risk management.
              </SectionCopy>

              <div className="button-row">
                <ButtonLink href="/strategy" variant="secondary">
                  Read the Strategy
                </ButtonLink>
              </div>
            </div>

            <Card className="card-pad stack">
              <div className="kicker">Why this matters</div>
              {home.whyInvestorsChoose.map((item) => (
                <div key={item.title} className="stack">
                  <strong>{item.title}</strong>
                  <span className="section-copy" style={{ marginTop: 0 }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-tight">
        <Container>
          <div className="stack">
            <Eyebrow>Strategy snapshot</Eyebrow>
            <SectionTitle>Disciplined real estate lending focused on income, security, and long-term consistency.</SectionTitle>
          </div>

          <div className="grid-2" style={{ marginTop: "1.4rem" }}>
            <Card className="card-pad">
              <div className="stack">
                <div className="kicker">Core themes</div>
                <ul className="muted-list">
                  {home.strategySnapshot.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card className="card-pad">
              <div className="stack">
                <div className="kicker">Approach</div>
                <p className="section-copy" style={{ marginTop: 0 }}>
                  We take a disciplined, relationship-driven approach to investing.
                </p>
                <p className="section-copy" style={{ marginTop: 0 }}>
                  Yellow Rose Capital is built around long-term investor partnerships, with a focus on transparency, consistency, and thoughtful capital deployment. Detailed investment information is shared directly with qualified investors through private offering materials.
                </p>
                <div className="button-row">
                  <ButtonLink href="/strategy" variant="ghost">
                    View Investment Strategy
                  </ButtonLink>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-tight">
        <Container>
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div className="stack">
              <Eyebrow>Insights</Eyebrow>
              <SectionTitle>Insights to help you invest with clarity</SectionTitle>
              <SectionCopy>
                We share straightforward insights on real estate credit, passive investing, and the Texas housing market so you can better understand how these investments work and where they may fit in your portfolio.
              </SectionCopy>
            </div>

            <Card className="card-pad stack">
              <div className="kicker">What you’ll find:</div>
              <ul className="muted-list">
                <li>How passive real estate investing works without managing property</li>
                <li>Insights on residential mortgage notes and private lending</li>
                <li>Perspective on Texas markets and long-term housing fundamentals</li>
                <li>Educational content to help you evaluate opportunities more confidently</li>
              </ul>
              <div className="button-row">
                <TrackableButtonLink href="/insights" variant="secondary" eventProps={{ location: "home_insights" }}>
                  Explore Insights
                </TrackableButtonLink>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid-2" style={{ alignItems: "center" }}>
            <div className="stack">
              <Eyebrow>Leadership</Eyebrow>
              <SectionTitle>Operators who invest alongside the strategy they manage</SectionTitle>
              <SectionCopy>
                Our team is actively involved in sourcing, structuring, and managing real estate investments across San Antonio and surrounding Texas markets bringing hands-on experience, disciplined underwriting, and local insight to every decision.
              </SectionCopy>

              <div className="stack">
                {leadership.map((person) => (
                  <Card key={person.name} className="card-pad">
                    <div className="stack">
                      <BrandImage
                        src={person.image}
                        alt={person.imageAlt || person.name}
                        className="leader-photo leader-photo-home"
                        imgClassName="leader-photo-img"
                        fallback={
                          <div className="leader-photo-fallback">
                            <div className="kicker">{person.name}</div>
                            <p className="section-copy" style={{ marginTop: 0 }}>
                              {person.role}
                            </p>
                          </div>
                        }
                      />
                      <div>
                        <div className="kicker">{person.role}</div>
                        <h3 style={{ margin: "0.35rem 0 0", fontFamily: "var(--serif)", fontSize: "1.5rem" }}>{person.name}</h3>
                      </div>
                      <p className="section-copy" style={{ marginTop: 0 }}>{person.summary}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="button-row">
                <ButtonLink href="/leadership">Meet the Team</ButtonLink>
              </div>
            </div>

            <Card className="card-pad">
              <div className="leader-photo-home-right">
                <BrandImage
                  src="/images/nick-disney-19.jpg"
                  alt="Nick Disney portrait"
                  className="figure-frame"
                  fallback={
                    <div style={{ minHeight: "360px", padding: "1.4rem", display: "grid", alignContent: "end" }}>
                      <div className="stack">
                        <div className="kicker">Leadership photo placeholder</div>
                        <p className="section-copy" style={{ marginTop: 0 }}>
                          Add the provided team photo to complete the leadership presentation.
                        </p>
                      </div>
                    </div>
                  }
                  priority
                />
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-tight">
        <Container>
          <Card className="card-pad">
            <div className="grid-2" style={{ alignItems: "center" }}>
              <div className="stack">
                <Eyebrow>Get started</Eyebrow>
                <SectionTitle>Start with a conversation, not a pitch.</SectionTitle>
                <SectionCopy>
                  If the fit appears right, the team can share private materials and continue the discussion through a relationship-based process.
                </SectionCopy>
              </div>

              <div className="button-row" style={{ justifyContent: "flex-start" }}>
                <TrackableButtonLink href="/contact" eventProps={{ location: "home_lower" }}>
                  Request Information
                </TrackableButtonLink>
                <TrackableButtonLink href="/investor-process" variant="secondary" eventProps={{ location: "home_lower" }}>
                  See the Investor Process
                </TrackableButtonLink>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
