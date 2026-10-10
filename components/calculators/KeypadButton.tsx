"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { type ReactNode } from "react";

type Tone = "digit" | "operator" | "action" | "equals" | "function";

const toneClasses: Record<Tone, string> = {
  digit:
    "bg-ink-800 text-cloud-100 hover:bg-ink-700 border border-ink-600",
  operator:
    "bg-ink-700 text-crimson-300 hover:bg-ink-600 border border-ink-600",
  action:
    "bg-ink-900 text-steel-400 hover:bg-ink-800 border border-ink-600",
  equals:
    "bg-gradient-to-b from-crimson-500 to-crimson-600 text-on-accent shadow-[0_6px_24px_rgba(13,92,99,0.3)]",
  function:
    "bg-ink-800/70 text-cloud-200 hover:bg-ink-700 border border-ink-600 text-xs sm:text-sm",
};

export function KeypadButton({
  children,
  onClick,
  tone = "digit",
  className,
  span = 1,
}: {
  children: ReactNode;
  onClick: () => void;
  tone?: Tone;
  className?: string;
  span?: number;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.94 }}
      transition={{ duration: 0.12 }}
      style={span > 1 ? { gridColumn: `span ${span} / span ${span}` } : undefined}
      className={clsx(
        "flex h-12 items-center justify-center rounded-xl text-base font-medium transition-colors duration-150 sm:h-14 sm:text-lg",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </motion.button>
  );
}
