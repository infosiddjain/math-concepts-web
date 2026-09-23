"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import {
  addFractions,
  subtractFractions,
  multiplyFractions,
  divideFractions,
  fractionToDecimal,
  fractionToMixed,
  formatFraction,
} from "@/lib/calculators/fraction";
import { Field, NumberField, ResultPanel } from "./fields";

type Op = "+" | "−" | "×" | "÷";
const ops: Op[] = ["+", "−", "×", "÷"];

export function FractionCalculator() {
  const [n1, setN1] = useState("1");
  const [d1, setD1] = useState("2");
  const [n2, setD2n] = useState("1");
  const [d2, setD2] = useState("3");
  const [op, setOp] = useState<Op>("+");

  const result = useMemo(() => {
    const a = { numerator: parseInt(n1, 10), denominator: parseInt(d1, 10) };
    const b = { numerator: parseInt(n2, 10), denominator: parseInt(d2, 10) };

    if ([a.numerator, a.denominator, b.numerator, b.denominator].some(Number.isNaN)) {
      return { error: "Enter whole numbers for each numerator and denominator" };
    }
    if (a.denominator === 0 || b.denominator === 0) {
      return { error: "Denominator cannot be zero" };
    }

    try {
      const fn =
        op === "+"
          ? addFractions
          : op === "−"
          ? subtractFractions
          : op === "×"
          ? multiplyFractions
          : divideFractions;
      const raw = fn(a, b);
      const mixed = fractionToMixed(raw);
      const mixedLabel =
        mixed.whole !== 0 && mixed.numerator !== 0
          ? `${mixed.whole} ${mixed.numerator}/${mixed.denominator}`
          : null;

      return {
        value: formatFraction(raw),
        helper: `Decimal: ${fractionToDecimal(raw).toPrecision(6).replace(/\.?0+$/, "")}${
          mixedLabel ? ` · Mixed number: ${mixedLabel}` : ""
        }`,
      };
    } catch (err) {
      return { error: err instanceof Error ? err.message : "Invalid fraction" };
    }
  }, [n1, d1, n2, d2, op]);

  return (
    <div className="mx-auto max-w-xl">
      <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
        <FractionInput
          numerator={n1}
          denominator={d1}
          onNumerator={setN1}
          onDenominator={setD1}
        />

        <div className="mx-auto flex gap-1.5">
          {ops.map((o) => (
            <button
              key={o}
              onClick={() => setOp(o)}
              className={clsx(
                "flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition-colors",
                op === o
                  ? "bg-gold-500 text-navy-950"
                  : "border border-navy-600 text-slate-400 hover:text-ivory-100"
              )}
            >
              {o}
            </button>
          ))}
        </div>

        <FractionInput
          numerator={n2}
          denominator={d2}
          onNumerator={setD2n}
          onDenominator={setD2}
        />
      </div>

      <div className="mt-8">
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

function FractionInput({
  numerator,
  denominator,
  onNumerator,
  onDenominator,
}: {
  numerator: string;
  denominator: string;
  onNumerator: (v: string) => void;
  onDenominator: (v: string) => void;
}) {
  return (
    <div className="space-y-2">
      <Field label="Numerator">
        <NumberField value={numerator} onChange={onNumerator} />
      </Field>
      <div className="h-px w-full bg-navy-600" />
      <Field label="Denominator">
        <NumberField value={denominator} onChange={onDenominator} />
      </Field>
    </div>
  );
}
