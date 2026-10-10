import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { PracticeQuiz } from "@/components/practice/PracticeQuiz";
import { concepts, getConcept } from "@/lib/content/concepts";

export function generateStaticParams() {
  return concepts.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/practice/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const concept = getConcept(slug);
  if (!concept) return {};
  return {
    title: `Practice: ${concept.title}`,
    description: `${concept.practice.length} practice questions on ${concept.title.toLowerCase()}, each with a worked explanation.`,
  };
}

export default async function PracticeQuizPage({
  params,
}: PageProps<"/practice/[slug]">) {
  const { slug } = await params;
  const concept = getConcept(slug);
  if (!concept) notFound();

  return (
    <Container className="max-w-3xl py-16 sm:py-20">
      <Link
        href="/practice"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-steel-400 transition-colors hover:text-crimson-400"
      >
        <Icon name="caretRight" className="h-3.5 w-3.5 rotate-180" />
        All practice sets
      </Link>

      <div className="mt-6 flex items-center gap-3 text-xs">
        <span className="font-semibold uppercase tracking-[0.2em] text-crimson-400">
          Practice
        </span>
        <span className="text-steel-500">{concept.category}</span>
      </div>
      <h1 className="mt-3 font-serif text-3xl leading-tight text-balance text-cloud-100 sm:text-4xl">
        {concept.title}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-steel-400">{concept.keyIdea}</p>

      <div className="mt-8">
        <PracticeQuiz slug={concept.slug} questions={concept.practice} />
      </div>

      <Link
        href={`/learn/${concept.slug}`}
        className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-crimson-400 hover:text-crimson-300"
      >
        <Icon name="book" className="h-4 w-4" />
        Review the concept first
      </Link>
    </Container>
  );
}
