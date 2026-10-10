"use client";

import { useMemo, useSyncExternalStore } from "react";

const STORAGE_KEY = "math-concepts:practice-best";

/** Best score so far for each concept slug. */
export type BestScores = Record<string, number>;

const listeners = new Set<() => void>();

function readRaw(): string {
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? "{}";
  } catch {
    return "{}";
  }
}

function parse(raw: string): BestScores {
  try {
    const value: unknown = JSON.parse(raw);
    return value && typeof value === "object" ? (value as BestScores) : {};
  } catch {
    return {};
  }
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function useBestScores(): BestScores {
  const raw = useSyncExternalStore(subscribe, readRaw, () => "{}");
  return useMemo(() => parse(raw), [raw]);
}

export function saveBestScore(slug: string, score: number) {
  const scores = parse(readRaw());
  if ((scores[slug] ?? -1) >= score) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...scores, [slug]: score }));
  } catch {
    // Storage unavailable (private mode) — the score just isn't remembered.
    return;
  }
  listeners.forEach((notify) => notify());
}
