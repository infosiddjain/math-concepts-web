import Link from "next/link";
import clsx from "clsx";
import { LogoMark } from "./LogoMark";

export function Logo({
  className,
  markClassName = "h-9 w-9",
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <Link
      href="/"
      className={clsx(
        "inline-flex items-center gap-2.5 group",
        className
      )}
    >
      <span className="rounded-xl bg-navy-800 p-1.5 ring-1 ring-gold-500/25 transition-shadow group-hover:ring-gold-500/50">
        <LogoMark className={markClassName} />
      </span>
      <span className="font-serif text-lg tracking-wide text-ivory-100">
        Math <span className="gold-gradient-text">Concepts</span>
      </span>
    </Link>
  );
}
