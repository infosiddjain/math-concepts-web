import { gcd } from "./fraction";

export function simplifyRatio(a: number, b: number): { a: number; b: number } {
  if (a === 0 && b === 0) return { a: 0, b: 0 };
  const divisor = gcd(a, b);
  return { a: a / divisor, b: b / divisor };
}

// Solves a/b = c/x for the missing value. Pass `null` for the unknown term.
export function solveProportion(
  a: number | null,
  b: number | null,
  c: number | null,
  d: number | null
): number {
  const unknowns = [a, b, c, d].filter((v) => v === null).length;
  if (unknowns !== 1) {
    throw new Error("Exactly one value must be left blank to solve for it");
  }

  if (a === null) {
    if (d === null || c === null || b === null) throw new Error("Missing values");
    if (c === 0) throw new Error("c cannot be zero");
    return (b! * d) / c;
  }
  if (b === null) {
    if (a === null || c === null || d === null) throw new Error("Missing values");
    if (d === 0) throw new Error("d cannot be zero");
    return (a! * d) / c!;
  }
  if (c === null) {
    if (a === 0) throw new Error("a cannot be zero");
    return (b! * d!) / a!;
  }
  // d is null
  if (a === 0) throw new Error("a cannot be zero");
  return (b! * c!) / a!;
}

export function scaleRatio(a: number, b: number, factor: number): { a: number; b: number } {
  return { a: a * factor, b: b * factor };
}
