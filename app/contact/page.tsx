import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ContactForm } from "@/components/contact/ContactForm";
import { site, socialLinks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Math Concepts team — questions, feedback, or calculator requests.",
};

const details = [
  { icon: "mail", label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: "phone", label: "Response time", value: "Within 1–2 business days" },
  { icon: "pin", label: "Availability", value: "Web & mobile, worldwide" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        description="Questions about a calculation, feedback on the app, or a calculator you wish existed — send it over."
      />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-5">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-start gap-4 rounded-2xl card-surface p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-700 text-crimson-400">
                    <Icon name={detail.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-steel-500">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="mt-1 block text-cloud-100 transition-colors hover:text-crimson-400"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-cloud-100">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-600 text-steel-400 transition-colors hover:border-crimson-500/50 hover:text-crimson-400"
                >
                  <Icon name={social.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl card-surface p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
