import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function CTASection() {
  return (
    <section className="border-t border-ink-700 bg-ink-950 py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl card-surface px-8 py-16 text-center sm:px-16">
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(212,175,55,0.3), transparent)",
              }}
            />
            <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink-700 text-crimson-400">
              <Icon name="infinity" className="h-6 w-6" />
            </span>
            <h2 className="relative mt-6 font-serif text-3xl text-balance text-cloud-100 sm:text-4xl">
              Bring precision to every calculation you make
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-sm leading-relaxed text-steel-400 sm:text-base">
              Free to use, no sign-up required. Start with a calculator, or start with a concept — either way, you&apos;ll understand the math better than before.
            </p>
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/calculators">Open Calculators</Button>
              <Button href="/about" variant="secondary">
                About Math Concepts
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
