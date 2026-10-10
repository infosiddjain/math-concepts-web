import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

const features = [
  {
    icon: "target",
    title: "Built for accuracy",
    description:
      "Every calculator is powered by careful, tested math logic — no rounding surprises, no hidden shortcuts.",
  },
  {
    icon: "bulb",
    title: "Learn the 'why'",
    description:
      "Each concept comes with a plain-language explanation and a worked, real-world example — not just a formula.",
  },
  {
    icon: "compass",
    title: "One studio, every tool",
    description:
      "From everyday percentages to scientific functions, fractions, and unit conversions — no more juggling apps.",
  },
  {
    icon: "shield",
    title: "Private by design",
    description:
      "Your calculations happen on your device. Nothing you type is required to reach a server to get an answer.",
  },
];

export function FeatureGrid() {
  return (
    <section className="border-t border-ink-700 bg-ink-900 py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Math Concepts"
          title="A calculator studio that respects your time"
          description="Designed to feel less like a utility and more like a well-made instrument — fast, precise, and pleasant to use daily."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl card-surface p-6 transition-colors duration-300 hover:border-steel-400">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink-700 text-crimson-400 transition-transform duration-300 group-hover:scale-105">
                  <Icon name={feature.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-lg text-cloud-100">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-400">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
