import { Card, Container, Eyebrow, Section, SectionCopy, SectionTitle } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { siteContent } from "@/lib/site-content";

export const metadata = siteContent.pageMeta.contact;

export default function ContactPage() {
  return (
    <>
      <Section className="hero">
        <Container>
          <div className="stack">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="page-title">Request information through a simple and compliant process.</h1>
            <p className="page-lead">{siteContent.contact.intro}</p>
          </div>
        </Container>
      </Section>

      <Section className="section-tight">
        <Container>
          <div className="grid-2" style={{ alignItems: "start" }}>
            <Card className="card-pad">
              <ContactForm />
            </Card>

            <div className="stack">
              <Card className="card-pad stack">
                <div className="kicker">What happens next</div>
                <SectionCopy style={{ marginTop: 0 }}>
                  The team reviews the inquiry, checks for fit, and follows up if a private conversation is appropriate.
                </SectionCopy>
              </Card>

              <Card className="card-pad stack">
                <div className="kicker">Compliance language</div>
                <p className="disclaimer-box" style={{ marginTop: 0 }}>
                  This website is provided for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Any investment opportunities referenced on this site are available only to qualified investors through confidential offering documents including a Private Placement Memorandum. Past performance does not guarantee future results.
                </p>
                <p className="disclaimer-box">
                  Investments in private real estate funds involve risk and are illiquid. Prospective investors should review offering documents carefully and consult their own legal, tax, and financial advisors.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
