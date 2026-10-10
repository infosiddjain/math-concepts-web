import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { PracticeTopics } from "@/components/practice/PracticeTopics";
import { concepts, practiceQuestionCount } from "@/lib/content/concepts";

export const metadata: Metadata = {
  title: "Practice",
  description:
    "Test what you've learned with short multiple-choice quizzes on percentages, fractions, algebra, geometry, statistics, and more.",
};

export default function PracticePage() {
  const topics = concepts.map((c) => ({
    slug: c.slug,
    title: c.title,
    category: c.category,
    level: c.level,
    questionCount: c.practice.length,
  }));

  return (
    <>
      <PageHero
        eyebrow="Practice"
        title="Check that it actually stuck"
        description={`${practiceQuestionCount} questions across ${concepts.length} concepts. Every answer comes with an explanation, and your best score is saved on this device.`}
      />

      <section className="py-20">
        <Container>
          <PracticeTopics topics={topics} />
        </Container>
      </section>
    </>
  );
}
