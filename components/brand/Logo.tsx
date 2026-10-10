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
      <span className="rounded-xl bg-[#0D5C63] p-1.5 ring-1 ring-steel-400/30 transition-shadow group-hover:ring-crimson-500/60">
        <LogoMark animated className={markClassName} />
      </span>
      <span className="font-serif text-lg tracking-wide text-cloud-100">
        Math <span className="crimson-gradient-text">Concepts</span>
      </span>
    </Link>
  );
}
