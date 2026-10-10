import Link from "next/link";
import { type ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-crimson-500 to-crimson-600 text-on-accent shadow-[0_8px_30px_rgba(13,92,99,0.25)] hover:shadow-[0_8px_36px_rgba(13,92,99,0.4)] hover:brightness-105",
  secondary:
    "border border-crimson-500/40 text-cloud-100 hover:border-crimson-500/80 hover:bg-ink-800",
  ghost: "text-cloud-100 hover:text-crimson-400",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-out";

export function Button({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = clsx(baseClasses, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
