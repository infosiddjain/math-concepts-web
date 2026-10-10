"use client";

import { type ReactNode } from "react";
import clsx from "clsx";

export function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={clsx("block", className)}>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-steel-400">
        {label}
      </span>
      {children}
    </label>
  );
}

const controlClasses =
  "w-full rounded-xl border border-ink-600 bg-ink-900/70 px-4 py-3 text-base text-cloud-100 outline-none transition-colors placeholder:text-steel-500 focus:border-crimson-500/60";

export function NumberField({
  value,
  onChange,
  placeholder,
  className,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <input
      type="text"
      inputMode="decimal"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={clsx(controlClasses, "font-mono", className)}
    />
  );
}

export function TextField({
  value,
  onChange,
  placeholder,
  type = "text",
  className,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: "text" | "email";
  className?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={clsx(controlClasses, className)}
    />
  );
}

export function SelectField({
  value,
  onChange,
  options,
  className,
}: {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  className?: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={clsx(controlClasses, "appearance-none", className)}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value} className="bg-ink-800">
          {opt.label}
        </option>
      ))}
    </select>
  );
}

export function ResultPanel({
  label,
  value,
  error,
  helper,
}: {
  label: string;
  value?: string;
  error?: string;
  helper?: string;
}) {
  return (
    <div className="rounded-2xl card-surface p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson-400">
        {label}
      </p>
      {error ? (
        <p className="mt-2 text-sm font-medium text-cloud-100">{error}</p>
      ) : (
        <p className="mt-2 break-all font-serif text-3xl text-cloud-100 sm:text-4xl">
          {value ?? "—"}
        </p>
      )}
      {helper && !error ? (
        <p className="mt-2 text-sm text-steel-400">{helper}</p>
      ) : null}
    </div>
  );
}
