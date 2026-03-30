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
          <div className="stack">
            <Eyebrow>Leadership</Eyebrow>
            <h1 className="page-title">Experienced operators with practical real estate and investor experience.</h1>
            <p className="page-lead">
              The leadership page should feel substantive and credible, with founder photography and clear operator bios.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="section-tight">
        <Container>
          <div className="leadership-grid">
            <Card className="card-pad">
              <BrandImage
                src="/images/yellow-rose-capital-team-photo.jpg"
                alt="Yellow Rose Capital founders"
                className="figure-frame"
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

            <div className="grid-2">
              {leadership.map((person) => (
                <Card key={person.name} className="card-pad stack">
                  <BrandImage
                    src={person.image}
                    alt={person.imageAlt || person.name}
                    className="leader-photo"
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
                  <div className="kicker">{person.role}</div>
                  <h2 style={{ margin: 0, fontFamily: "var(--serif)", fontSize: "2rem" }}>{person.name}</h2>
                  <p className="section-copy" style={{ marginTop: 0 }}>{person.summary}</p>
                  <p className="section-copy" style={{ marginTop: 0 }}>{person.details}</p>
                  <div className="strengths">
                    {person.strengths.map((item) => (
                      <span key={item} className="strength">
                        {item}
                      </span>
                    ))}
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
            <SectionTitle>Show practical experience, not inflated branding.</SectionTitle>
            <SectionCopy>
              The goal is to build trust with qualified investors by showing real operating depth, local knowledge, and clear roles in the investment process.
            </SectionCopy>
            <div className="button-row">
              <ButtonLink href="/contact">Talk to the Team</ButtonLink>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
