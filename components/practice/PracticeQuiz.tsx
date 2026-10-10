"use client";

import { useState } from "react";
import clsx from "clsx";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import type { PracticeQuestion } from "@/lib/content/concepts";
import { saveBestScore, useBestScores } from "@/lib/practice-progress";

const letters = ["A", "B", "C", "D"];

function resultMessage(score: number, total: number) {
  if (score === total) return "Perfect score — you've got this one.";
  if (score / total >= 0.7) return "Solid work. One more pass and you'll have it all.";
  return "Worth another look at the concept, then try again.";
}

export function PracticeQuiz({
  slug,
  questions,
}: {
  slug: string;
  questions: PracticeQuestion[];
}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const best = useBestScores()[slug];

  const total = questions.length;
  const question = questions[index];
  const answered = selected !== null;
  const isLast = index === total - 1;

  function choose(option: number) {
    if (answered) return;
    setSelected(option);
    if (option === question.answer) setScore((s) => s + 1);
  }

  function next() {
    if (isLast) {
      saveBestScore(slug, score);
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    return (
      <div className="rounded-2xl card-surface p-6 text-center sm:p-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-crimson-500 text-on-accent">
          <Icon name="trophy" className="h-7 w-7" />
        </span>
        <p className="mt-5 font-serif text-4xl text-cloud-100">
          {score} <span className="text-steel-400">/ {total}</span>
        </p>
        <p className="mt-3 text-sm leading-relaxed text-steel-400 sm:text-base">
          {resultMessage(score, total)}
        </p>
        {best !== undefined ? (
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-steel-500">
            Best so far: {best} / {total}
          </p>
        ) : null}
        <div className="mt-7 flex justify-center">
          <Button onClick={restart} variant="secondary">
            <Icon name="retry" className="h-4 w-4" />
            Try again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl card-surface p-6 sm:p-8">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold uppercase tracking-[0.2em] text-crimson-400">
          Question {index + 1} of {total}
        </span>
        <span className="text-steel-400">Score {score}</span>
      </div>
      <div className="mt-3 h-1 overflow-hidden rounded-full bg-ink-700">
        <div
          className="h-full rounded-full bg-crimson-500 transition-all duration-500"
          style={{ width: `${((index + (answered ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      <p className="mt-6 font-serif text-xl leading-snug text-cloud-100">
        {question.question}
      </p>

      <div className="mt-5 grid gap-3">
        {question.options.map((option, i) => {
          const isCorrect = i === question.answer;
          const isPicked = i === selected;
          return (
            <button
              key={option}
              type="button"
              disabled={answered}
              onClick={() => choose(i)}
              className={clsx(
                "flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors sm:text-base",
                !answered &&
                  "border-ink-600 bg-ink-900/60 text-cloud-100 hover:border-crimson-500/60 hover:bg-ink-700",
                answered && isCorrect && "border-cloud-100 bg-cloud-100 text-ink-900",
                answered && isPicked && !isCorrect && "border-crimson-500 bg-crimson-500/15 text-cloud-100",
                answered && !isPicked && !isCorrect && "border-ink-700 bg-ink-900/40 text-steel-500"
              )}
            >
              <span
                className={clsx(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                  answered && isCorrect ? "bg-ink-900 text-cloud-100" : "bg-ink-700 text-steel-400"
                )}
              >
                {letters[i]}
              </span>
              <span className="flex-1">{option}</span>
              {answered && isCorrect ? <Icon name="check" className="h-5 w-5 shrink-0" /> : null}
              {answered && isPicked && !isCorrect ? (
                <Icon name="wrong" className="h-5 w-5 shrink-0 text-crimson-400" />
              ) : null}
            </button>
          );
        })}
      </div>

      {answered ? (
        <div className="mt-5 rounded-xl border border-ink-600 bg-ink-950/50 p-4" aria-live="polite">
          <p
            className={clsx(
              "text-xs font-semibold uppercase tracking-[0.2em]",
              selected === question.answer ? "text-cloud-100" : "text-crimson-400"
            )}
          >
            {selected === question.answer ? "Correct" : "Not quite"}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-steel-400 sm:text-base">
            {question.explanation}
          </p>
        </div>
      ) : null}

      <div className="mt-6 flex justify-end">
        <Button onClick={next} className={clsx(!answered && "pointer-events-none opacity-40")}>
          {isLast ? "See results" : "Next question"}
          <Icon name="arrowRight" className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
