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
    "Clear explanations of real-world math concepts — compound interest, percentages, ratios, geometry, probability, and fractions.",
};

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Math concepts, tied to real problems"
        description="Short, plain-language reads that connect a formula to a real decision — money, cooking, building, or chance."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {concepts.map((concept, i) => (
              <Reveal key={concept.slug} delay={i * 0.05}>
                <Link
                  href={`/learn/${concept.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-navy-600 bg-navy-800/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:bg-navy-800"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold uppercase tracking-[0.2em] text-gold-500">
                      {concept.category}
                    </span>
                    <span className="text-slate-500">{concept.readTime} read</span>
                  </div>
                  <h3 className="mt-4 font-serif text-xl text-ivory-100">
                    {concept.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                    {concept.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Read the concept
                    <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
