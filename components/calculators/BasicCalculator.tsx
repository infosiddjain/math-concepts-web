"use client";

import { useMemo, useState } from "react";
import { evaluateExpression } from "@/lib/calculators/expression";
import { KeypadButton } from "./KeypadButton";

function formatResult(value: number): string {
  if (!Number.isFinite(value)) return "Error";
  const rounded = Number(value.toPrecision(12));
  return rounded.toString();
}

const keys: { label: string; value: string; tone: "digit" | "operator" | "action" }[] = [
  { label: "AC", value: "AC", tone: "action" },
  { label: "(", value: "(", tone: "action" },
  { label: ")", value: ")", tone: "action" },
  { label: "⌫", value: "DEL", tone: "action" },
  { label: "7", value: "7", tone: "digit" },
  { label: "8", value: "8", tone: "digit" },
  { label: "9", value: "9", tone: "digit" },
  { label: "÷", value: "÷", tone: "operator" },
  { label: "4", value: "4", tone: "digit" },
  { label: "5", value: "5", tone: "digit" },
  { label: "6", value: "6", tone: "digit" },
  { label: "×", value: "×", tone: "operator" },
  { label: "1", value: "1", tone: "digit" },
  { label: "2", value: "2", tone: "digit" },
  { label: "3", value: "3", tone: "digit" },
  { label: "−", value: "−", tone: "operator" },
  { label: "0", value: "0", tone: "digit" },
  { label: ".", value: ".", tone: "digit" },
  { label: "mod", value: "%", tone: "operator" },
  { label: "+", value: "+", tone: "operator" },
];

export function BasicCalculator() {
  const [expression, setExpression] = useState("");
  const [error, setError] = useState<string | null>(null);

  const preview = useMemo(() => {
    if (!expression.trim()) return null;
    try {
      const result = evaluateExpression(expression);
      return formatResult(result);
    } catch {
      return null;
    }
  }, [expression]);

  function press(value: string) {
    setError(null);
    if (value === "AC") {
      setExpression("");
      return;
    }
    if (value === "DEL") {
      setExpression((prev) => prev.slice(0, -1));
      return;
    }
    setExpression((prev) => prev + value);
  }

  function equals() {
    if (!expression.trim()) return;
    try {
      const result = evaluateExpression(expression);
      setExpression(formatResult(result));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid expression");
    }
  }

  return (
    <div className="mx-auto max-w-md">
      <div className="rounded-2xl border border-gold-500/25 bg-navy-950/60 p-5">
        <p className="h-5 truncate text-right font-mono text-sm text-slate-500">
          {preview && preview !== expression ? `= ${preview}` : " "}
        </p>
        <p className="mt-1 min-h-12 break-all text-right font-serif text-3xl text-ivory-100 sm:text-4xl">
          {expression || "0"}
        </p>
        {error ? <p className="mt-2 text-right text-sm text-rose-300">{error}</p> : null}
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2.5">
        {keys.map((key) => (
          <KeypadButton
            key={key.label}
            tone={key.tone}
            onClick={() => press(key.value)}
          >
            {key.label}
          </KeypadButton>
        ))}
        <KeypadButton tone="equals" span={4} onClick={equals}>
          =
        </KeypadButton>
      </div>
    </div>
  );
}
