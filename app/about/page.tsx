import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Math Concepts is a precision calculator and learning studio built to make everyday math fast, accurate, and genuinely understandable.",
};

const values = [
  {
    icon: "target",
    title: "Accuracy first",
    body: "Every formula is implemented carefully and covered by real test cases — a calculator you can trust with numbers that matter.",
  },
  {
    icon: "bulb",
    title: "Understanding over memorizing",
    body: "We pair every tool with the reasoning behind it, so using Math Concepts leaves you a little sharper than before.",
  },
  {
    icon: "shield",
    title: "Respect for your data",
    body: "Calculations run on your device. We don't require an account, and we don't sell your information.",
  },
  {
    icon: "sparkle",
    title: "Crafted, not just functional",
    body: "Good tools should feel considered. We put the same care into the interface as we do into the math itself.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Math, made precise and worth understanding"
        description="Math Concepts started from a simple frustration: calculator apps are either cluttered with ads or too basic to be useful, and almost none of them explain the 'why' behind the answer."
      />

      <section className="py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="font-serif text-2xl text-cloud-100">Our approach</h2>
            <p className="mt-4 text-base leading-relaxed text-steel-400">
              We built Math Concepts as a single, focused studio — one place for the
              calculators people reach for every day, and one place to actually understand
              the math behind a discount, a loan, a recipe, or a right angle. No clutter,
              no noise, just precise tools and clear explanations.
            </p>
            <p className="mt-4 text-base leading-relaxed text-steel-400">
              Whether you&apos;re a student working through homework, a professional who
              needs a fast and reliable conversion, or someone who&apos;s simply curious how
              the math around them actually works, Math Concepts is designed to get out
              of your way and give you the right answer — with the reasoning attached.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-ink-700 bg-ink-950 py-20">
        <Container>
          <Reveal className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-crimson-400">
              What we stand for
            </p>
            <h2 className="mt-3 font-serif text-3xl text-cloud-100">
              Principles behind every screen
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="flex gap-4 rounded-2xl card-surface p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-700 text-crimson-400">
                    <Icon name={value.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-cloud-100">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-400">
                      {value.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal className="flex flex-col items-center gap-6 rounded-3xl card-surface px-8 py-14 text-center">
            <h2 className="font-serif text-2xl text-cloud-100 sm:text-3xl">
              Have a question, or a calculator you&apos;d like to see?
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-steel-400">
              We read every message. Tell us what would make Math Concepts more useful for you.
            </p>
            <Button href="/contact">
              Contact Us
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
