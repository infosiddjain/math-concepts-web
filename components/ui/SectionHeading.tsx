import { type ReactNode } from "react";
import clsx from "clsx";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl leading-tight text-balance text-ivory-100 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-400">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
