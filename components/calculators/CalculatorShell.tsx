import Link from "next/link";
import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import type { CalculatorMeta } from "@/lib/content/calculators-meta";

export function CalculatorShell({
  meta,
  children,
}: {
  meta: CalculatorMeta;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-navy-700 bg-grid py-16 sm:py-20">
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[680px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, rgba(212,175,55,0.35), transparent)",
        }}
      />
      <Container className="relative">
        <Link
          href="/calculators"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors hover:text-gold-400"
        >
          <Icon name="caretRight" className="h-3.5 w-3.5 rotate-180" />
          All calculators
        </Link>

        <Reveal className="mt-6 flex items-center gap-4">
          <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-700 text-gold-400">
            <Icon name={meta.icon} className="h-7 w-7" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-500">
              {meta.category}
            </p>
            <h1 className="font-serif text-2xl text-ivory-100 sm:text-3xl">
              {meta.title}
            </h1>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
          {meta.description}
        </Reveal>

        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}
