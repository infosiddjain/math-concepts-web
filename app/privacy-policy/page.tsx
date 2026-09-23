import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Math Concepts handles your data across our website and mobile app.",
};

const sections = [
  {
    heading: "1. Overview",
    body: [
      `This Privacy Policy explains how ${site.name} ("we", "us", "our") handles information when you use our website and mobile application (together, the "Service"). We built Math Concepts to require as little of your data as possible.`,
    ],
  },
  {
    heading: "2. Information we do not collect",
    body: [
      "All calculator computations run locally on your device or in your browser. The numbers, expressions, and values you enter into any calculator are never transmitted to our servers, stored by us, or shared with any third party.",
      "You do not need to create an account to use any calculator or to read any Learn article.",
    ],
  },
  {
    heading: "3. Information you choose to provide",
    body: [
      "If you use the Contact form, the name, email address, and message you enter are sent directly to our support inbox via your own email application (a standard 'mailto' link) — this information passes through your email provider, not through our servers.",
      "If you contact us directly by email, we retain that correspondence only as long as needed to respond to and resolve your inquiry.",
    ],
  },
  {
    heading: "4. Analytics and cookies",
    body: [
      "The current version of Math Concepts does not use third-party advertising trackers. If we introduce privacy-respecting, aggregated analytics in the future (for example, to understand which calculators are most useful), we will update this policy and, where required by law, request your consent.",
      "Our website may use strictly necessary cookies required for the site to function (such as remembering a display preference). These do not identify you personally.",
    ],
  },
  {
    heading: "5. Children's privacy",
    body: [
      "Math Concepts is intended to be usable by students of all ages as a learning and calculation tool, and we do not knowingly collect personal information from anyone, including children. Because we don't require accounts or collect calculation data, no personal information is gathered from users of any age through normal use of the Service.",
    ],
  },
  {
    heading: "6. Data security",
    body: [
      "Because calculations are processed on-device and we collect minimal information, there is very little of your data for us to secure. Any information you voluntarily send us by email is protected using the security practices of standard email providers.",
    ],
  },
  {
    heading: "7. Third-party links",
    body: [
      "Our Service may link to third-party sites (for example, app store listings). We are not responsible for the privacy practices of those external sites, and we encourage you to review their policies.",
    ],
  },
  {
    heading: "8. Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in the Service or applicable law. We will update the effective date below when we do, and material changes will be noted prominently on this page.",
    ],
  },
  {
    heading: "9. Contact us",
    body: [
      `If you have questions about this Privacy Policy, please reach us at ${site.email} or through our Contact page.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Effective date: January 1, 2026. Math Concepts is designed to work with as little of your data as possible."
      />

      <section className="py-20">
        <Container className="max-w-3xl space-y-10">
          {sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 0.04}>
              <h2 className="font-serif text-xl text-ivory-100">{section.heading}</h2>
              <div className="mt-3 space-y-3">
                {section.body.map((p, j) => (
                  <p key={j} className="text-sm leading-relaxed text-slate-400 sm:text-base">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
