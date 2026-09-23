"use client";

import { useState } from "react";
import clsx from "clsx";
import {
  sin,
  cos,
  tan,
  asin,
  acos,
  atan,
  log10,
  ln,
  sqrt,
  cbrt,
  power,
  factorial,
  reciprocal,
  type AngleMode,
} from "@/lib/calculators/scientific";
import { KeypadButton } from "./KeypadButton";

function formatResult(value: number): string {
  if (!Number.isFinite(value)) return "Error";
  const rounded = Number(value.toPrecision(12));
  return rounded.toString();
}

function applyBinary(op: string, a: number, b: number): number {
  switch (op) {
    case "+":
      return a + b;
    case "−":
      return a - b;
    case "×":
      return a * b;
    case "÷":
      if (b === 0) throw new Error("Division by zero");
      return a / b;
    case "^":
      return power(a, b);
    default:
      return b;
  }
}

export function ScientificCalculator() {
  const [display, setDisplay] = useState("0");
  const [accumulator, setAccumulator] = useState<number | null>(null);
  const [pendingOp, setPendingOp] = useState<string | null>(null);
  const [startFresh, setStartFresh] = useState(true);
  const [mode, setMode] = useState<AngleMode>("deg");
  const [error, setError] = useState<string | null>(null);

  function safeSetDisplay(value: number) {
    if (!Number.isFinite(value)) {
      setError("Undefined result");
      setDisplay("Error");
      setStartFresh(true);
      return;
    }
    setError(null);
    setDisplay(formatResult(value));
    setStartFresh(true);
  }

  function pressDigit(d: string) {
    setError(null);
    if (startFresh || display === "0" || display === "Error") {
      setDisplay(d === "." ? "0." : d);
      setStartFresh(false);
      return;
    }
    if (d === "." && display.includes(".")) return;
    setDisplay((prev) => prev + d);
  }

  function pressBinary(op: string) {
    setError(null);
    const current = parseFloat(display);
    if (pendingOp && accumulator !== null && !startFresh) {
      try {
        const result = applyBinary(pendingOp, accumulator, current);
        setAccumulator(result);
        setDisplay(formatResult(result));
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error");
      }
    } else {
      setAccumulator(current);
    }
    setPendingOp(op);
    setStartFresh(true);
  }

  function pressEquals() {
    if (pendingOp === null || accumulator === null) return;
    setError(null);
    try {
      const current = parseFloat(display);
      const result = applyBinary(pendingOp, accumulator, current);
      safeSetDisplay(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
      setDisplay("Error");
    }
    setPendingOp(null);
    setAccumulator(null);
  }

  function pressFunction(fn: string) {
    setError(null);
    const current = parseFloat(display);
    try {
      switch (fn) {
        case "sin":
          return safeSetDisplay(sin(current, mode));
        case "cos":
          return safeSetDisplay(cos(current, mode));
        case "tan":
          return safeSetDisplay(tan(current, mode));
        case "asin":
          return safeSetDisplay(asin(current, mode));
        case "acos":
          return safeSetDisplay(acos(current, mode));
        case "atan":
          return safeSetDisplay(atan(current, mode));
        case "log":
          return safeSetDisplay(log10(current));
        case "ln":
          return safeSetDisplay(ln(current));
        case "sqrt":
          return safeSetDisplay(sqrt(current));
        case "cbrt":
          return safeSetDisplay(cbrt(current));
        case "sq":
          return safeSetDisplay(power(current, 2));
        case "inv":
          return safeSetDisplay(reciprocal(current));
        case "fact":
          return safeSetDisplay(factorial(current));
        case "pm":
          return safeSetDisplay(current * -1);
        case "pi":
          setDisplay(formatResult(Math.PI));
          setStartFresh(true);
          return;
        case "e":
          setDisplay(formatResult(Math.E));
          setStartFresh(true);
          return;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
      setDisplay("Error");
      setStartFresh(true);
    }
  }

  function pressAC() {
    setDisplay("0");
    setAccumulator(null);
    setPendingOp(null);
    setStartFresh(true);
    setError(null);
  }

  function pressDel() {
    setError(null);
    setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  }

  const functionKeys = [
    ["sin", "cos", "tan", "sq"],
    ["asin", "acos", "atan", "sqrt"],
    ["log", "ln", "cbrt", "fact"],
    ["pi", "e", "inv", "pm"],
  ];

  return (
    <div className="mx-auto max-w-xl">
      <div className="rounded-2xl border border-gold-500/25 bg-navy-950/60 p-5">
        <div className="flex items-center justify-between">
          <div className="inline-flex overflow-hidden rounded-full border border-navy-600 text-xs">
            {(["deg", "rad"] as AngleMode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={clsx(
                  "px-3 py-1.5 font-semibold uppercase tracking-wide transition-colors",
                  mode === m
                    ? "bg-gold-500 text-navy-950"
                    : "bg-navy-900 text-slate-400 hover:text-ivory-100"
                )}
              >
                {m}
              </button>
            ))}
          </div>
          {pendingOp ? (
            <span className="font-mono text-xs text-slate-500">
              {formatResult(accumulator ?? 0)} {pendingOp}
            </span>
          ) : null}
        </div>
        <p className="mt-3 min-h-12 break-all text-right font-serif text-3xl text-ivory-100 sm:text-4xl">
          {display}
        </p>
        {error ? <p className="mt-2 text-right text-sm text-rose-300">{error}</p> : null}
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        {functionKeys.map((row) =>
          row.map((fn) => (
            <KeypadButton key={fn} tone="function" onClick={() => pressFunction(fn)}>
              {fnLabel(fn)}
            </KeypadButton>
          ))
        )}
      </div>

      <div className="mt-3 grid grid-cols-4 gap-2.5">
        <KeypadButton tone="action" onClick={pressAC}>
          AC
        </KeypadButton>
        <KeypadButton tone="action" onClick={pressDel}>
          ⌫
        </KeypadButton>
        <KeypadButton tone="operator" onClick={() => pressBinary("^")}>
          x^y
        </KeypadButton>
        <KeypadButton tone="operator" onClick={() => pressBinary("÷")}>
          ÷
        </KeypadButton>

        <KeypadButton onClick={() => pressDigit("7")}>7</KeypadButton>
        <KeypadButton onClick={() => pressDigit("8")}>8</KeypadButton>
        <KeypadButton onClick={() => pressDigit("9")}>9</KeypadButton>
        <KeypadButton tone="operator" onClick={() => pressBinary("×")}>
          ×
        </KeypadButton>

        <KeypadButton onClick={() => pressDigit("4")}>4</KeypadButton>
        <KeypadButton onClick={() => pressDigit("5")}>5</KeypadButton>
        <KeypadButton onClick={() => pressDigit("6")}>6</KeypadButton>
        <KeypadButton tone="operator" onClick={() => pressBinary("−")}>
          −
        </KeypadButton>

        <KeypadButton onClick={() => pressDigit("1")}>1</KeypadButton>
        <KeypadButton onClick={() => pressDigit("2")}>2</KeypadButton>
        <KeypadButton onClick={() => pressDigit("3")}>3</KeypadButton>
        <KeypadButton tone="operator" onClick={() => pressBinary("+")}>
          +
        </KeypadButton>

        <KeypadButton onClick={() => pressDigit("0")} span={2}>
          0
        </KeypadButton>
        <KeypadButton onClick={() => pressDigit(".")}>.</KeypadButton>
        <KeypadButton tone="equals" onClick={pressEquals}>
          =
        </KeypadButton>
      </div>
    </div>
  );
}

function fnLabel(fn: string): string {
  const labels: Record<string, string> = {
    sin: "sin",
    cos: "cos",
    tan: "tan",
    asin: "sin⁻¹",
    acos: "cos⁻¹",
    atan: "tan⁻¹",
    sq: "x²",
    sqrt: "√x",
    log: "log",
    ln: "ln",
    cbrt: "∛x",
    fact: "x!",
    pi: "π",
    e: "e",
    inv: "1/x",
    pm: "±",
  };
  return labels[fn] ?? fn;
}
