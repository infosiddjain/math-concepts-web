export interface CalculatorMeta {
  slug: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export const calculators: CalculatorMeta[] = [
  {
    slug: "basic",
    title: "Basic Calculator",
    description: "Everyday arithmetic — addition, subtraction, multiplication, division, and more, with full expression support.",
    icon: "calculator",
    category: "Everyday",
  },
  {
    slug: "scientific",
    title: "Scientific Calculator",
    description: "Trigonometry, logarithms, powers, roots, and factorials for advanced coursework and engineering.",
    icon: "function",
    category: "Advanced",
  },
  {
    slug: "percentage",
    title: "Percentage Calculator",
    description: "Discounts, tips, tax, markups, and percentage change — solved instantly with clear steps.",
    icon: "percent",
    category: "Everyday",
  },
  {
    slug: "unit-converter",
    title: "Unit Converter",
    description: "Convert length, weight, volume, area, speed, time, temperature, and digital storage in one place.",
    icon: "swap",
    category: "Everyday",
  },
  {
    slug: "fraction",
    title: "Fraction Calculator",
    description: "Add, subtract, multiply, and divide fractions with automatic simplification and mixed numbers.",
    icon: "divide",
    category: "Foundations",
  },
  {
    slug: "ratio-proportion",
    title: "Ratio & Proportion",
    description: "Simplify ratios and solve proportions — perfect for recipes, scale drawings, and mixing.",
    icon: "scales",
    category: "Foundations",
  },
];

export function getCalculator(slug: string): CalculatorMeta | undefined {
  return calculators.find((c) => c.slug === slug);
}
