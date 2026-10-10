"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { simplifyRatio, solveProportion } from "@/lib/calculators/ratio";
import { Field, NumberField, ResultPanel } from "./fields";

type Mode = "simplify" | "solve";

export function RatioCalculator() {
  const [mode, setMode] = useState<Mode>("simplify");

  const [a, setA] = useState("4");
  const [b, setB] = useState("6");

  const [pa, setPa] = useState("2");
  const [pb, setPb] = useState("3");
  const [pc, setPc] = useState("10");
  const [pd, setPd] = useState("");

  const simplifyResult = useMemo(() => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (Number.isNaN(numA) || Number.isNaN(numB)) return { error: "Enter valid numbers" };
    if (numA === 0 && numB === 0) return { error: "Both values cannot be zero" };
    const simplified = simplifyRatio(numA, numB);
    return {
      value: `${formatNum(simplified.a)} : ${formatNum(simplified.b)}`,
      helper: `${formatNum(numA)} : ${formatNum(numB)} simplified`,
    };
  }, [a, b]);

  const solveResult = useMemo(() => {
    const values = [pa, pb, pc, pd].map((v) => (v.trim() === "" ? null : parseFloat(v)));
    const blanks = values.filter((v) => v === null).length;
    const invalid = values.some((v) => v !== null && Number.isNaN(v));

    if (invalid) return { error: "Enter valid numbers" };
    if (blanks !== 1) return { error: "Leave exactly one field blank to solve for it" };

    try {
      const solved = solveProportion(
        values[0],
        values[1],
        values[2],
        values[3]
      );
      const filled = values.map((v) => (v === null ? formatNum(solved) : formatNum(v)));
      return {
        value: formatNum(solved),
        helper: `${filled[0]} : ${filled[1]} = ${filled[2]} : ${filled[3]}`,
      };
    } catch (err) {
      return { error: err instanceof Error ? err.message : "Could not solve" };
    }
  }, [pa, pb, pc, pd]);

  return (
    <div className="mx-auto max-w-xl">
      <div className="flex flex-wrap gap-2">
        {(["simplify", "solve"] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={clsx(
              "rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-colors",
              mode === m
                ? "bg-crimson-500 text-on-accent"
                : "border border-ink-600 text-steel-400 hover:text-cloud-100"
            )}
          >
            {m === "simplify" ? "Simplify a ratio" : "Solve a proportion"}
          </button>
        ))}
      </div>

      {mode === "simplify" ? (
        <>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Field label="A">
              <NumberField value={a} onChange={setA} />
            </Field>
            <Field label="B">
              <NumberField value={b} onChange={setB} />
            </Field>
          </div>
          <div className="mt-6">
            <ResultPanel
              label="Simplified ratio"
              value={"value" in simplifyResult ? simplifyResult.value : undefined}
              error={"error" in simplifyResult ? simplifyResult.error : undefined}
              helper={"helper" in simplifyResult ? simplifyResult.helper : undefined}
            />
          </div>
        </>
      ) : (
        <>
          <p className="mt-6 text-sm text-steel-400">
            Solve a : b = c : d — leave exactly one field empty.
          </p>
          <div className="mt-4 grid grid-cols-4 items-center gap-2">
            <NumberField value={pa} onChange={setPa} placeholder="a" />
            <span className="text-center text-steel-500">:</span>
            <NumberField value={pb} onChange={setPb} placeholder="b" />
            <span className="text-center text-steel-500">=</span>
          </div>
          <div className="mt-2 grid grid-cols-4 items-center gap-2">
            <NumberField value={pc} onChange={setPc} placeholder="c" />
            <span className="text-center text-steel-500">:</span>
            <NumberField value={pd} onChange={setPd} placeholder="d" />
            <span />
          </div>
          <div className="mt-6">
            <ResultPanel
              label="Solved value"
              value={"value" in solveResult ? solveResult.value : undefined}
              error={"error" in solveResult ? solveResult.error : undefined}
              helper={"helper" in solveResult ? solveResult.helper : undefined}
            />
          </div>
        </>
      )}
    </div>
  );
}

function formatNum(value: number): string {
  return Number(value.toPrecision(10)).toString();
}
