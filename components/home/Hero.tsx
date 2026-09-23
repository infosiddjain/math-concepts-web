"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const floatingChips = [
  { icon: "percent", label: "18% off $64.99", top: "8%", left: "4%", delay: 0.2 },
  { icon: "function", label: "sin(30°) = 0.5", top: "62%", left: "0%", delay: 0.5 },
  { icon: "scales", label: "3 : 4 = 9 : 12", top: "80%", left: "58%", delay: 0.8 },
  { icon: "swap", label: "12 km → 7.46 mi", top: "4%", left: "62%", delay: 0.35 },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(212,175,55,0.35), transparent)",
        }}
      />

      <Container className="relative py-24 sm:py-32">
        <div className="relative mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-navy-800/60 px-4 py-1.5 text-xs font-medium tracking-wide text-gold-300"
          >
            <Icon name="sparkle" className="h-3.5 w-3.5" />
            Precision calculators, real-world understanding
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl leading-[1.1] text-balance text-ivory-100 sm:text-6xl"
          >
            Calculate with precision.
            <br />
            <span className="gold-gradient-text">Understand with clarity.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Math Concepts brings together every calculator you reach for and the
            real-world thinking behind it — in one refined, distraction-free studio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="/calculators">
              Open Calculators
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
            <Button href="/learn" variant="secondary">
              Explore Real-World Math
            </Button>
          </motion.div>
        </div>

        <div className="relative mx-auto mt-20 hidden h-40 max-w-4xl md:block">
          {floatingChips.map((chip) => (
            <motion.div
              key={chip.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: chip.delay, ease: [0.16, 1, 0.3, 1] }}
              style={{ top: chip.top, left: chip.left }}
              className="absolute flex items-center gap-2 rounded-2xl border border-gold-500/20 bg-navy-800/70 px-4 py-3 text-sm text-ivory-200 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-700 text-gold-400">
                <Icon name={chip.icon} className="h-4 w-4" />
              </span>
              <span className="font-mono text-xs text-ivory-200 sm:text-sm">
                {chip.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
