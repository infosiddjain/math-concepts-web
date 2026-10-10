"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { useBestScores } from "@/lib/practice-progress";

export interface PracticeTopic {
  slug: string;
  title: string;
  category: string;
  level: string;
  questionCount: number;
}

export function PracticeTopics({ topics }: { topics: PracticeTopic[] }) {
  const best = useBestScores();

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic, i) => {
        const score = best[topic.slug];
        const done = score !== undefined;
        return (
          <Reveal key={topic.slug} delay={i * 0.04}>
            <Link
              href={`/practice/${topic.slug}`}
              className="group flex h-full flex-col rounded-2xl card-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-steel-400 hover:bg-ink-800"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold uppercase tracking-[0.2em] text-crimson-400">
                  {topic.category}
                </span>
                <span className="text-steel-500">{topic.level}</span>
              </div>
              <h3 className="mt-4 flex-1 font-serif text-xl text-cloud-100">{topic.title}</h3>
              <div className="mt-5 h-1 overflow-hidden rounded-full bg-ink-700">
                <div
                  className="h-full rounded-full bg-crimson-500"
                  style={{ width: `${done ? (score / topic.questionCount) * 100 : 0}%` }}
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="text-steel-400">
                  {done
                    ? `Best ${score} / ${topic.questionCount}`
                    : `${topic.questionCount} questions`}
                </span>
                <span className="inline-flex items-center gap-1.5 font-semibold text-crimson-400">
                  {done ? "Practice again" : "Start"}
                  <Icon name="arrowRight" className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
