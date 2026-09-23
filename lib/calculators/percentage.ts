export function percentOfValue(percent: number, whole: number): number {
  return (percent / 100) * whole;
}

export function whatPercent(part: number, whole: number): number {
  if (whole === 0) throw new Error("Whole cannot be zero");
  return (part / whole) * 100;
}

export function percentChange(from: number, to: number): number {
  if (from === 0) throw new Error("Starting value cannot be zero");
  return ((to - from) / from) * 100;
}

export function increaseByPercent(value: number, percent: number): number {
  return value * (1 + percent / 100);
}

export function decreaseByPercent(value: number, percent: number): number {
  return value * (1 - percent / 100);
}
