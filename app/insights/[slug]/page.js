import { notFound } from "next/navigation";

import { Card, Container, Eyebrow, Section, SectionCopy, SectionTitle } from "@/components/ui";
import { TrackableButtonLink } from "@/components/trackable-button-link";
import { growthContent } from "@/lib/growth-content";

export function generateStaticParams() {
  return growthContent.posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = growthContent.posts.find((item) => item.slug === params.slug);

  return post?.metadata || {};
}

export default function InsightArticlePage({ params }) {
  const post = growthContent.posts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Section className="hero">
        <Container>
          <div className="stack">
            <Eyebrow>{post.category}</Eyebrow>
            <h1 className="page-title">{post.title}</h1>
            <p className="page-lead">{post.description}</p>
            <div className="footer-note">
              {post.publishedAt} - {post.readTime}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="section-tight">
        <Container>
          <div className="grid-2" style={{ alignItems: "start" }}>
            <div className="flow">
              {post.sections.map((section) => (
                <Card key={section.heading} className="card-pad stack">
                  <SectionTitle style={{ fontSize: "1.5rem" }}>{section.heading}</SectionTitle>
                  <SectionCopy style={{ marginTop: 0 }}>{section.body}</SectionCopy>
                </Card>
              ))}
            </div>

            <Card className="card-pad stack">
              <div className="kicker">Editorial note</div>
              <SectionCopy style={{ marginTop: 0 }}>
                These articles are educational and informational. They are meant to reinforce the firm's public positioning, not to solicit investment.
              </SectionCopy>
              <div className="button-row">
                <TrackableButtonLink href="/insights" variant="secondary" eventProps={{ location: "insight_article" }}>
                  Back to Insights
                </TrackableButtonLink>
                <TrackableButtonLink href="/contact" eventProps={{ location: "insight_article" }}>
                  Request Information
                </TrackableButtonLink>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
