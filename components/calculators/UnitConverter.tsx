"use client";

import { useMemo, useState } from "react";
import {
  unitCategories,
  temperatureUnits,
  convertUnit,
  convertTemperature,
} from "@/lib/calculators/units";
import { Field, NumberField, SelectField, ResultPanel } from "./fields";
import { Icon } from "@/components/ui/Icon";

export function UnitConverter() {
  const [categoryId, setCategoryId] = useState("length");
  const category = unitCategories.find((c) => c.id === categoryId)!;
  const isTemperature = categoryId === "temperature";
  const unitOptions = isTemperature ? temperatureUnits : category.units;

  const [fromUnit, setFromUnit] = useState(unitOptions[0].id);
  const [toUnit, setToUnit] = useState(unitOptions[1]?.id ?? unitOptions[0].id);
  const [value, setValue] = useState("1");

  function selectCategory(id: string) {
    const nextCategory = unitCategories.find((c) => c.id === id)!;
    const nextUnits = id === "temperature" ? temperatureUnits : nextCategory.units;
    setCategoryId(id);
    setFromUnit(nextUnits[0].id);
    setToUnit(nextUnits[1]?.id ?? nextUnits[0].id);
  }

  function swap() {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  }

  const result = useMemo(() => {
    const num = parseFloat(value);
    if (Number.isNaN(num)) return { error: "Enter a valid number" };
    try {
      const converted = isTemperature
        ? convertTemperature(fromUnit, toUnit, num)
        : convertUnit(categoryId, fromUnit, toUnit, num);
      const toLabel = unitOptions.find((u) => u.id === toUnit)?.label ?? "";
      return {
        value: `${formatNum(converted)}`,
        helper: `${formatNum(num)} ${
          unitOptions.find((u) => u.id === fromUnit)?.label ?? ""
        } = ${formatNum(converted)} ${toLabel}`,
      };
    } catch (err) {
      return { error: err instanceof Error ? err.message : "Conversion error" };
    }
  }, [value, fromUnit, toUnit, categoryId, isTemperature, unitOptions]);

  return (
    <div className="mx-auto max-w-xl">
      <Field label="Category">
        <SelectField
          value={categoryId}
          onChange={selectCategory}
          options={unitCategories.map((c) => ({ value: c.id, label: c.label }))}
        />
      </Field>

      <div className="mt-4 grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
        <Field label="From">
          <SelectField
            value={fromUnit}
            onChange={setFromUnit}
            options={unitOptions.map((u) => ({ value: u.id, label: u.label }))}
          />
        </Field>

        <button
          type="button"
          onClick={swap}
          aria-label="Swap units"
          className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-ink-600 text-crimson-400 transition-colors hover:border-crimson-500/60 sm:mb-0.5"
        >
          <Icon name="swap" className="h-5 w-5" />
        </button>

        <Field label="To">
          <SelectField
            value={toUnit}
            onChange={setToUnit}
            options={unitOptions.map((u) => ({ value: u.id, label: u.label }))}
          />
        </Field>
      </div>

      <Field label="Value" className="mt-4">
        <NumberField value={value} onChange={setValue} />
      </Field>

      <div className="mt-6">
        <ResultPanel
          label="Converted value"
          value={"value" in result ? result.value : undefined}
          error={"error" in result ? result.error : undefined}
          helper={"helper" in result ? result.helper : undefined}
        />
      </div>
    </div>
  );
}

function formatNum(value: number): string {
  return Number(value.toPrecision(10)).toString();
}
