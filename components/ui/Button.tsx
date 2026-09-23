import Link from "next/link";
import { type ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-gold-300 via-gold-500 to-gold-600 text-navy-950 shadow-[0_8px_30px_rgba(212,175,55,0.25)] hover:shadow-[0_8px_36px_rgba(212,175,55,0.4)] hover:brightness-105",
  secondary:
    "border border-gold-500/40 text-ivory-100 hover:border-gold-500/80 hover:bg-navy-800",
  ghost: "text-ivory-100 hover:text-gold-400",
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
