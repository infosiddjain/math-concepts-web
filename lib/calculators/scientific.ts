export type AngleMode = "deg" | "rad";

function toRadians(value: number, mode: AngleMode): number {
  return mode === "deg" ? (value * Math.PI) / 180 : value;
}

function fromRadians(value: number, mode: AngleMode): number {
  return mode === "deg" ? (value * 180) / Math.PI : value;
}

export function sin(value: number, mode: AngleMode): number {
  return Math.sin(toRadians(value, mode));
}

export function cos(value: number, mode: AngleMode): number {
  return Math.cos(toRadians(value, mode));
}

export function tan(value: number, mode: AngleMode): number {
  return Math.tan(toRadians(value, mode));
}

export function asin(value: number, mode: AngleMode): number {
  return fromRadians(Math.asin(value), mode);
}

export function acos(value: number, mode: AngleMode): number {
  return fromRadians(Math.acos(value), mode);
}

export function atan(value: number, mode: AngleMode): number {
  return fromRadians(Math.atan(value), mode);
}

export function log10(value: number): number {
  if (value <= 0) throw new Error("Logarithm undefined for values <= 0");
  return Math.log10(value);
}

export function ln(value: number): number {
  if (value <= 0) throw new Error("Natural log undefined for values <= 0");
  return Math.log(value);
}

export function sqrt(value: number): number {
  if (value < 0) throw new Error("Square root undefined for negative numbers");
  return Math.sqrt(value);
}

export function cbrt(value: number): number {
  return Math.cbrt(value);
}

export function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

export function factorial(value: number): number {
  if (value < 0 || !Number.isInteger(value)) {
    throw new Error("Factorial requires a non-negative integer");
  }
  if (value > 170) throw new Error("Value too large for factorial");
  let result = 1;
  for (let i = 2; i <= value; i++) result *= i;
  return result;
}

export function reciprocal(value: number): number {
  if (value === 0) throw new Error("Reciprocal undefined for zero");
  return 1 / value;
}

export function percentOf(value: number): number {
  return value / 100;
}
