"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import {
  percentOfValue,
  whatPercent,
  percentChange,
  increaseByPercent,
  decreaseByPercent,
} from "@/lib/calculators/percentage";
import { Field, NumberField, ResultPanel } from "./fields";

type Mode = "of" | "isWhatPercent" | "change" | "adjust";

const modes: { id: Mode; label: string }[] = [
  { id: "of", label: "X% of Y" },
  { id: "isWhatPercent", label: "X is what % of Y" },
  { id: "change", label: "% change" },
  { id: "adjust", label: "Increase / decrease" },
];

export function PercentageCalculator() {
  const [mode, setMode] = useState<Mode>("of");
  const [a, setA] = useState("20");
  const [b, setB] = useState("150");
  const [adjustDirection, setAdjustDirection] = useState<"increase" | "decrease">("increase");

  const result = useMemo(() => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (Number.isNaN(numA) || Number.isNaN(numB)) {
      return { error: "Enter valid numbers in both fields" };
    }
    try {
      if (mode === "of") {
        const value = percentOfValue(numA, numB);
        return {
          value: formatNum(value),
          helper: `${formatNum(numA)}% of ${formatNum(numB)}`,
        };
      }
      if (mode === "isWhatPercent") {
        const value = whatPercent(numA, numB);
        return {
          value: `${formatNum(value)}%`,
          helper: `${formatNum(numA)} is ${formatNum(value)}% of ${formatNum(numB)}`,
        };
      }
      if (mode === "change") {
        const value = percentChange(numA, numB);
        const direction = value >= 0 ? "increase" : "decrease";
        return {
          value: `${formatNum(Math.abs(value))}% ${direction}`,
          helper: `From ${formatNum(numA)} to ${formatNum(numB)}`,
        };
      }
      const value =
        adjustDirection === "increase"
          ? increaseByPercent(numA, numB)
          : decreaseByPercent(numA, numB);
      return {
        value: formatNum(value),
        helper: `${formatNum(numA)} ${adjustDirection}d by ${formatNum(numB)}%`,
      };
    } catch (err) {
      return { error: err instanceof Error ? err.message : "Invalid input" };
    }
  }, [a, b, mode, adjustDirection]);

  const labels = getLabels(mode);

  return (
    <div className="mx-auto max-w-xl">
      <div className="flex flex-wrap gap-2">
        {modes.map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={clsx(
              "rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-colors",
              mode === m.id
                ? "bg-crimson-500 text-on-accent"
                : "border border-ink-600 text-steel-400 hover:text-cloud-100"
            )}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label={labels.a}>
          <NumberField value={a} onChange={setA} />
        </Field>
        <Field label={labels.b}>
          <NumberField value={b} onChange={setB} />
        </Field>
      </div>

      {mode === "adjust" ? (
        <div className="mt-4 inline-flex overflow-hidden rounded-full border border-ink-600 text-xs">
          {(["increase", "decrease"] as const).map((d) => (
            <button
              key={d}
              onClick={() => setAdjustDirection(d)}
              className={clsx(
                "px-4 py-2 font-semibold uppercase tracking-wide transition-colors",
                adjustDirection === d
                  ? "bg-crimson-500 text-on-accent"
                  : "bg-ink-900 text-steel-400 hover:text-cloud-100"
              )}
            >
              {d}
            </button>
          ))}
        </div>
      ) : null}

      <div className="mt-6">
        <ResultPanel
          label="Result"
          value={"value" in result ? result.value : undefined}
          error={"error" in result ? result.error : undefined}
          helper={"helper" in result ? result.helper : undefined}
        />
      </div>
    </div>
  );
}

function getLabels(mode: Mode): { a: string; b: string } {
  switch (mode) {
    case "of":
      return { a: "Percent (%)", b: "Of value" };
    case "isWhatPercent":
      return { a: "Part", b: "Whole" };
    case "change":
      return { a: "From value", b: "To value" };
    case "adjust":
      return { a: "Starting value", b: "Percent (%)" };
  }
}

function formatNum(value: number): string {
  return Number(value.toPrecision(10)).toString();
}
