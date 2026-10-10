import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { concepts } from "@/lib/content/concepts";

export const metadata: Metadata = {
  title: "Learn Math",
  description:
    "Clear explanations of real-world math concepts — percentages, fractions, ratios, algebra, geometry, statistics, and compound interest — each with practice questions.",
};

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Math concepts, tied to real problems"
        description="Short, plain-language reads that connect a formula to a real decision — then a few practice questions to make it stick."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {concepts.map((concept, i) => (
              <Reveal key={concept.slug} delay={i * 0.05}>
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
                  <div className="mt-5 flex items-center justify-between border-t border-ink-700 pt-4 text-xs">
                    <span className="text-steel-400">
                      {concept.level} · {concept.practice.length} practice questions
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-crimson-400">
                      Read
                      <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
