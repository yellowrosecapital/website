import { ButtonLink, Card, Container, Eyebrow, Section, SectionCopy, SectionTitle } from "@/components/ui";
import { siteContent } from "@/lib/site-content";

export const metadata = siteContent.pageMeta.about;

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <>
      <Section className="hero">
        <Container>
          <div className="stack">
            <Eyebrow>About Yellow Rose Capital</Eyebrow>
            <h1 className="page-title">A private investment brand built for passive real estate participation.</h1>
            <p className="page-lead">{about.intro}</p>
          </div>
        </Container>
      </Section>

      <Section className="section-tight">
        <Container>
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div className="stack">
              <SectionTitle>Why the firm exists</SectionTitle>
              <SectionCopy>{about.philosophy}</SectionCopy>
              <SectionCopy>{about.whoItServes}</SectionCopy>
              <div className="button-row">
                <ButtonLink href="/strategy">Read the Strategy</ButtonLink>
              </div>
            </div>

            <Card className="card-pad stack">
              <div className="kicker">Public brand rules</div>
              <div className="muted-list" style={{ paddingLeft: "1.1rem" }}>
                {about.commitments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid-3">
            <Card className="card-pad">
              <div className="kicker">Investor audience</div>
              <p className="section-copy">{about.whoItServes}</p>
            </Card>
            <Card className="card-pad">
              <div className="kicker">Tone</div>
              <p className="section-copy">
                The public site should feel institutional and high-end without becoming promotional or flashy.
              </p>
            </Card>
            <Card className="card-pad">
              <div className="kicker">Positioning</div>
              <p className="section-copy">
                Yellow Rose Capital leads the public story. Affiliate fund references remain secondary and private.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
