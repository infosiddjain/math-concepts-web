import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-navy-700 bg-grid">
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[680px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(212,175,55,0.35), transparent)",
        }}
      />
      <Container className="relative py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-500">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-serif text-3xl leading-tight text-balance text-ivory-100 sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
              {description}
            </p>
          ) : null}
        </Reveal>
        {children}
      </Container>
    </section>
  );
}
