import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { calculators } from "@/lib/content/calculators-meta";

export function CalculatorsShowcase() {
  return (
    <section className="border-t border-ink-700 bg-ink-950 py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Calculators"
            title="Every calculation, one refined toolset"
            description="Six precision tools covering the math people actually reach for — every day and in the classroom."
            className="max-w-xl"
          />
          <Button href="/calculators" variant="ghost" className="px-0">
            View all
            <Icon name="arrowRight" className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calc, i) => (
            <Reveal key={calc.slug} delay={i * 0.06}>
              <Link
                href={`/calculators/${calc.slug}`}
                className="group flex h-full flex-col rounded-2xl card-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-steel-400 hover:bg-ink-800"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink-700 text-crimson-400">
                    <Icon name={calc.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-steel-500">
                    {calc.category}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-lg text-cloud-100">
                  {calc.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-400">
                  {calc.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-crimson-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Open calculator
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
