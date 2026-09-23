export interface Fraction {
  numerator: number;
  denominator: number;
}

export function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    [a, b] = [b, a % b];
  }
  return a || 1;
}

export function lcm(a: number, b: number): number {
  return Math.abs(a * b) / gcd(a, b);
}

export function simplifyFraction(f: Fraction): Fraction {
  if (f.denominator === 0) throw new Error("Denominator cannot be zero");
  const sign = f.denominator < 0 ? -1 : 1;
  const n = f.numerator * sign;
  const d = f.denominator * sign;
  const divisor = gcd(n, d);
  return { numerator: n / divisor, denominator: d / divisor };
}

export function addFractions(a: Fraction, b: Fraction): Fraction {
  return simplifyFraction({
    numerator: a.numerator * b.denominator + b.numerator * a.denominator,
    denominator: a.denominator * b.denominator,
  });
}

export function subtractFractions(a: Fraction, b: Fraction): Fraction {
  return simplifyFraction({
    numerator: a.numerator * b.denominator - b.numerator * a.denominator,
    denominator: a.denominator * b.denominator,
  });
}

export function multiplyFractions(a: Fraction, b: Fraction): Fraction {
  return simplifyFraction({
    numerator: a.numerator * b.numerator,
    denominator: a.denominator * b.denominator,
  });
}

export function divideFractions(a: Fraction, b: Fraction): Fraction {
  if (b.numerator === 0) throw new Error("Cannot divide by zero");
  return simplifyFraction({
    numerator: a.numerator * b.denominator,
    denominator: a.denominator * b.numerator,
  });
}

export function fractionToDecimal(f: Fraction): number {
  if (f.denominator === 0) throw new Error("Denominator cannot be zero");
  return f.numerator / f.denominator;
}

export function fractionToMixed(f: Fraction): {
  whole: number;
  numerator: number;
  denominator: number;
} {
  const simplified = simplifyFraction(f);
  const whole = Math.trunc(simplified.numerator / simplified.denominator);
  const remainder = Math.abs(simplified.numerator % simplified.denominator);
  return { whole, numerator: remainder, denominator: simplified.denominator };
}

export function formatFraction(f: Fraction): string {
  return `${f.numerator}/${f.denominator}`;
}
