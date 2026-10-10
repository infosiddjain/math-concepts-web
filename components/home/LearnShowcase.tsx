import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { concepts } from "@/lib/content/concepts";

export function LearnShowcase() {
  const featured = concepts.slice(0, 3);

  return (
    <section className="border-t border-ink-700 bg-ink-900 py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Learn"
            title="Math concepts, tied to real problems"
            description="Short, clear reads that connect a formula to a moment in real life — a ladder against a wall, a sale price, a recipe for ten."
            className="max-w-xl"
          />
          <div className="flex items-center gap-6">
            <Button href="/practice" variant="ghost" className="px-0">
              <Icon name="practice" className="h-4 w-4" />
              Practice
            </Button>
            <Button href="/learn" variant="ghost" className="px-0">
              View all
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {featured.map((concept, i) => (
            <Reveal key={concept.slug} delay={i * 0.08}>
              <Link
                href={`/learn/${concept.slug}`}
                className="group flex h-full flex-col rounded-2xl card-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-steel-400 hover:bg-ink-800"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold uppercase tracking-[0.2em] text-crimson-400">
                    {concept.category}
                  </span>
                  <span className="text-steel-500">{concept.readTime} read</span>
                </div>
                <h3 className="mt-4 font-serif text-xl text-cloud-100">
                  {concept.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-400">
                  {concept.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-crimson-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Read the concept
                  <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
