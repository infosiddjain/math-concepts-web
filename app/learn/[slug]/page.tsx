import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { concepts, getConcept } from "@/lib/content/concepts";
import { getCalculator } from "@/lib/content/calculators-meta";

export function generateStaticParams() {
  return concepts.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/learn/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const concept = getConcept(slug);
  if (!concept) return {};
  return {
    title: concept.title,
    description: concept.summary,
  };
}

export default async function ConceptPage({
  params,
}: PageProps<"/learn/[slug]">) {
  const { slug } = await params;
  const concept = getConcept(slug);
  if (!concept) notFound();

  const relatedCalc = concept.relatedCalculator
    ? getCalculator(concept.relatedCalculator)
    : undefined;

  return (
    <article className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[680px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, rgba(212,175,55,0.35), transparent)",
        }}
      />

      <Container className="relative max-w-3xl py-16 sm:py-20">
        <Link
          href="/learn"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors hover:text-gold-400"
        >
          <Icon name="caretRight" className="h-3.5 w-3.5 rotate-180" />
          All concepts
        </Link>

        <Reveal className="mt-6">
          <div className="flex items-center gap-3 text-xs">
            <span className="font-semibold uppercase tracking-[0.2em] text-gold-500">
              {concept.category}
            </span>
            <span className="text-slate-500">{concept.readTime} read</span>
          </div>
          <h1 className="mt-3 font-serif text-3xl leading-tight text-balance text-ivory-100 sm:text-4xl">
            {concept.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            {concept.summary}
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-8 rounded-2xl border border-gold-500/25 bg-navy-800/50 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
            Key idea
          </p>
          <p className="mt-2 font-serif text-lg leading-snug text-ivory-100">
            {concept.keyIdea}
          </p>
        </Reveal>

        <div className="mt-10 space-y-10">
          {concept.sections.map((section, i) => (
            <Reveal key={section.heading} delay={0.05 + i * 0.05}>
              <h2 className="font-serif text-xl text-ivory-100">{section.heading}</h2>
              <div className="mt-3 space-y-4">
                {section.body.map((paragraph, j) => (
                  <p key={j} className="text-sm leading-relaxed text-slate-400 sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12 rounded-2xl border border-navy-600 bg-navy-950/60 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
            Worked example
          </p>
          <p className="mt-3 font-serif text-lg leading-snug text-ivory-100">
            {concept.worked.problem}
          </p>
          <ol className="mt-5 space-y-3">
            {concept.worked.steps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy-700 text-[11px] font-semibold text-gold-400">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-6 border-t border-navy-700 pt-5 font-serif text-xl text-gold-300">
            {concept.worked.answer}
          </p>
        </Reveal>

        {relatedCalc ? (
          <Reveal delay={0.2} className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-gold-500/25 bg-gradient-to-br from-navy-800 to-navy-900 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                Try it yourself
              </p>
              <p className="mt-1 font-serif text-lg text-ivory-100">
                Use the {relatedCalc.title} to run your own numbers
              </p>
            </div>
            <Button href={`/calculators/${relatedCalc.slug}`}>
              Open {relatedCalc.title}
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
          </Reveal>
        ) : null}
      </Container>
    </article>
  );
}
