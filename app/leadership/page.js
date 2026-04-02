import { BrandImage } from "@/components/brand-image";
import { ButtonLink, Card, Container, Eyebrow, Section, SectionCopy, SectionTitle } from "@/components/ui";
import { siteContent } from "@/lib/site-content";

export const metadata = siteContent.pageMeta.leadership;

export default function LeadershipPage() {
  const { leadership } = siteContent;

  return (
    <>
      <Section className="hero">
        <Container>
          <div className="leadership-hero-grid">
            <div className="stack">
              <Eyebrow>Leadership</Eyebrow>
              <h1 className="page-title">Experienced operators with practical real estate and investor experience.</h1>
              <p className="page-lead">
                Our team is directly involved in sourcing, underwriting, and managing real estate investments across San Antonio and surrounding Texas markets bringing hands-on experience and local insight to every decision.
              </p>
            </div>

            <Card className="card-pad">
              <BrandImage
                src="/images/yellow-rose-capital-team-photo.jpg"
                alt="Yellow Rose Capital founders"
                className="figure-frame leadership-hero-photo"
                fallback={
                  <div style={{ minHeight: "420px", padding: "1.4rem", display: "grid", alignContent: "end" }}>
                    <div className="stack">
                      <div className="kicker">Leadership photo placeholder</div>
                      <p className="section-copy" style={{ marginTop: 0 }}>
                        Add the team photo to <code>/public/images/yellow-rose-capital-team-photo.jpg</code> for the final build.
                      </p>
                    </div>
                  </div>
                }
                priority
              />
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="section-tight">
        <Container>
          <div className="leadership-founder-grid">
            <div className="grid-2">
              {leadership.map((person) => (
                <Card key={person.name} className="card-pad leadership-founder-card">
                  <BrandImage
                    src={person.image}
                    alt={person.imageAlt || person.name}
                    className="leader-photo leadership-founder-photo"
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
                  <div className="stack">
                    <div className="kicker">{person.role}</div>
                    <h2 style={{ margin: 0, fontFamily: "var(--serif)", fontSize: "2rem" }}>{person.name}</h2>
                    {person.bio ? (
                      person.bio.map((paragraph) => (
                        <p key={paragraph} className="section-copy" style={{ marginTop: 0 }}>
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <>
                        <p className="section-copy" style={{ marginTop: 0 }}>{person.summary}</p>
                        <p className="section-copy" style={{ marginTop: 0 }}>{person.details}</p>
                      </>
                    )}
                    {person.strengths?.length ? (
                      <div className="strengths">
                        {person.strengths.map((item) => (
                          <span key={item} className="strength">
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="card-pad stack">
            <div className="kicker">Leadership positioning</div>
            <SectionTitle>Built on real experience, not just presentation</SectionTitle>
            <SectionCopy>
              Our team is actively involved in the investments we manage bringing hands-on experience, local market knowledge, and disciplined decision-making to every stage of the process.
            </SectionCopy>
            <div className="button-row">
              <ButtonLink href="/contact">Speak with Our Team</ButtonLink>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
