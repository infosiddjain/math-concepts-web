"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { type ReactNode } from "react";

type Tone = "digit" | "operator" | "action" | "equals" | "function";

const toneClasses: Record<Tone, string> = {
  digit:
    "bg-navy-800 text-ivory-100 hover:bg-navy-700 border border-navy-600",
  operator:
    "bg-navy-700 text-gold-300 hover:bg-navy-600 border border-navy-600",
  action:
    "bg-navy-900 text-slate-300 hover:bg-navy-800 border border-navy-600",
  equals:
    "bg-gradient-to-b from-gold-300 via-gold-500 to-gold-600 text-navy-950 shadow-[0_6px_24px_rgba(212,175,55,0.3)]",
  function:
    "bg-navy-800/70 text-ivory-200 hover:bg-navy-700 border border-navy-600 text-xs sm:text-sm",
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
