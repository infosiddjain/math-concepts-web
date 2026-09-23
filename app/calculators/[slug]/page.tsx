import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalculatorShell } from "@/components/calculators/CalculatorShell";
import { BasicCalculator } from "@/components/calculators/BasicCalculator";
import { ScientificCalculator } from "@/components/calculators/ScientificCalculator";
import { PercentageCalculator } from "@/components/calculators/PercentageCalculator";
import { UnitConverter } from "@/components/calculators/UnitConverter";
import { FractionCalculator } from "@/components/calculators/FractionCalculator";
import { RatioCalculator } from "@/components/calculators/RatioCalculator";
import { calculators, getCalculator } from "@/lib/content/calculators-meta";

export function generateStaticParams() {
  return calculators.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/calculators/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const meta = getCalculator(slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
  };
}

const widgets: Record<string, React.ComponentType> = {
  basic: BasicCalculator,
  scientific: ScientificCalculator,
  percentage: PercentageCalculator,
  "unit-converter": UnitConverter,
  fraction: FractionCalculator,
  "ratio-proportion": RatioCalculator,
};

export default async function CalculatorPage({
  params,
}: PageProps<"/calculators/[slug]">) {
  const { slug } = await params;
  const meta = getCalculator(slug);
  const Widget = widgets[slug];

  if (!meta || !Widget) notFound();

  return (
    <CalculatorShell meta={meta}>
      <Widget />
    </CalculatorShell>
  );
}
