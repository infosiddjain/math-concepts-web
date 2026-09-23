export interface UnitDef {
  id: string;
  label: string;
  toBase: number; // multiply by this to get base unit
}

export interface UnitCategory {
  id: string;
  label: string;
  baseLabel: string;
  units: UnitDef[];
}

export const unitCategories: UnitCategory[] = [
  {
    id: "length",
    label: "Length",
    baseLabel: "meters",
    units: [
      { id: "mm", label: "Millimeters", toBase: 0.001 },
      { id: "cm", label: "Centimeters", toBase: 0.01 },
      { id: "m", label: "Meters", toBase: 1 },
      { id: "km", label: "Kilometers", toBase: 1000 },
      { id: "in", label: "Inches", toBase: 0.0254 },
      { id: "ft", label: "Feet", toBase: 0.3048 },
      { id: "yd", label: "Yards", toBase: 0.9144 },
      { id: "mi", label: "Miles", toBase: 1609.344 },
    ],
  },
  {
    id: "weight",
    label: "Weight & Mass",
    baseLabel: "kilograms",
    units: [
      { id: "mg", label: "Milligrams", toBase: 0.000001 },
      { id: "g", label: "Grams", toBase: 0.001 },
      { id: "kg", label: "Kilograms", toBase: 1 },
      { id: "t", label: "Metric Tons", toBase: 1000 },
      { id: "oz", label: "Ounces", toBase: 0.0283495 },
      { id: "lb", label: "Pounds", toBase: 0.453592 },
    ],
  },
  {
    id: "volume",
    label: "Volume",
    baseLabel: "liters",
    units: [
      { id: "ml", label: "Milliliters", toBase: 0.001 },
      { id: "l", label: "Liters", toBase: 1 },
      { id: "gal", label: "Gallons (US)", toBase: 3.78541 },
      { id: "qt", label: "Quarts (US)", toBase: 0.946353 },
      { id: "cup", label: "Cups (US)", toBase: 0.24 },
      { id: "tbsp", label: "Tablespoons", toBase: 0.0147868 },
      { id: "tsp", label: "Teaspoons", toBase: 0.00492892 },
    ],
  },
  {
    id: "area",
    label: "Area",
    baseLabel: "square meters",
    units: [
      { id: "sqm", label: "Square Meters", toBase: 1 },
      { id: "sqkm", label: "Square Kilometers", toBase: 1_000_000 },
      { id: "sqft", label: "Square Feet", toBase: 0.092903 },
      { id: "acre", label: "Acres", toBase: 4046.86 },
      { id: "hectare", label: "Hectares", toBase: 10000 },
    ],
  },
  {
    id: "speed",
    label: "Speed",
    baseLabel: "meters/second",
    units: [
      { id: "mps", label: "Meters/second", toBase: 1 },
      { id: "kmh", label: "Kilometers/hour", toBase: 0.277778 },
      { id: "mph", label: "Miles/hour", toBase: 0.44704 },
      { id: "knot", label: "Knots", toBase: 0.514444 },
    ],
  },
  {
    id: "time",
    label: "Time",
    baseLabel: "seconds",
    units: [
      { id: "sec", label: "Seconds", toBase: 1 },
      { id: "min", label: "Minutes", toBase: 60 },
      { id: "hr", label: "Hours", toBase: 3600 },
      { id: "day", label: "Days", toBase: 86400 },
      { id: "week", label: "Weeks", toBase: 604800 },
    ],
  },
  {
    id: "data",
    label: "Digital Storage",
    baseLabel: "megabytes",
    units: [
      { id: "kb", label: "Kilobytes", toBase: 0.001 },
      { id: "mb", label: "Megabytes", toBase: 1 },
      { id: "gb", label: "Gigabytes", toBase: 1000 },
      { id: "tb", label: "Terabytes", toBase: 1_000_000 },
    ],
  },
  {
    id: "temperature",
    label: "Temperature",
    baseLabel: "celsius",
    units: [], // handled specially — see temperatureUnits/convertTemperature
  },
];

export function convertUnit(
  categoryId: string,
  fromUnitId: string,
  toUnitId: string,
  value: number
): number {
  const category = unitCategories.find((c) => c.id === categoryId);
  if (!category) throw new Error("Unknown category");

  if (categoryId === "temperature") {
    return convertTemperature(fromUnitId, toUnitId, value);
  }

  const fromUnit = category.units.find((u) => u.id === fromUnitId);
  const toUnit = category.units.find((u) => u.id === toUnitId);
  if (!fromUnit || !toUnit) throw new Error("Unknown unit");

  const baseValue = value * fromUnit.toBase;
  return baseValue / toUnit.toBase;
}

export const temperatureUnits = [
  { id: "c", label: "Celsius" },
  { id: "f", label: "Fahrenheit" },
  { id: "k", label: "Kelvin" },
];

export function convertTemperature(from: string, to: string, value: number): number {
  let celsius: number;
  if (from === "c") celsius = value;
  else if (from === "f") celsius = ((value - 32) * 5) / 9;
  else if (from === "k") celsius = value - 273.15;
  else throw new Error("Unknown temperature unit");

  if (to === "c") return celsius;
  if (to === "f") return (celsius * 9) / 5 + 32;
  if (to === "k") return celsius + 273.15;
  throw new Error("Unknown temperature unit");
}
