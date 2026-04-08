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

              <Card className="card-pad stack compliance-card">
                <div className="kicker">Compliance Notice</div>
                <p className="disclaimer-box" style={{ marginTop: 0 }}>
                  This website is provided for informational purposes only and does not constitute an offer to sell or a solicitation to buy any securities.
                </p>
                <p className="disclaimer-box">
                  Any investment opportunities referenced are available only to qualified investors through confidential offering materials, including a Private Placement Memorandum.
                </p>
                <p className="disclaimer-box">
                  Investments in private real estate funds involve risk and are not liquid. Prospective investors should carefully review all offering documents and consult with their legal, tax, and financial advisors before making any investment decision.
                </p>
                <p className="disclaimer-box">
                  Past performance is not indicative of future results.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
