import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { calculators } from "@/lib/content/calculators-meta";

export const metadata: Metadata = {
  title: "Calculators",
  description:
    "Basic, scientific, percentage, unit conversion, fraction, and ratio calculators — precise, instant, and free.",
};

export default function CalculatorsPage() {
  const categories = Array.from(new Set(calculators.map((c) => c.category)));

  return (
    <>
      <PageHero
        eyebrow="Calculators"
        title="Every calculation, one refined toolset"
        description="Pick a tool below. Each calculator runs entirely in your browser — fast, accurate, and private."
      />

      <section className="py-20">
        <Container>
          {categories.map((category) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-gold-500">
                {category}
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {calculators
                  .filter((c) => c.category === category)
                  .map((calc, i) => (
                    <Reveal key={calc.slug} delay={i * 0.05}>
                      <Link
                        href={`/calculators/${calc.slug}`}
                        className="group flex h-full flex-col rounded-2xl border border-navy-600 bg-navy-800/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:bg-navy-800"
                      >
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-700 text-gold-400">
                          <Icon name={calc.icon} className="h-5 w-5" />
                        </span>
                        <h3 className="mt-5 font-serif text-lg text-ivory-100">
                          {calc.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                          {calc.description}
                        </p>
                        <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          Open calculator
                          <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
