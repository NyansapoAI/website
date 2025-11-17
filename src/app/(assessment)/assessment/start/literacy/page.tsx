// app/assessment/start/literacy/page.tsx
// This is a Server Component (no "use client" → perfect for data fetching)

import { Assessment } from "./Assessment";
import type { LiteracyAssessmentContent } from "../types"; // adjust path if needed

const fetchAssessment = async (id: string) => {
  const res = await fetch("https://graphql.nyansapoai.net/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // Important: prevents caching issues during build on Vercel
    cache: "no-store",
    body: JSON.stringify({
      query: `
        query LiteracyAssessmentContent($where: LiteracyAssessmentContentWhereUniqueInput!) {
          literacyAssessmentContent(where: $where) {
            id
            words { id word literacyAssessmentContentId }
            paragraphs { id paragraph literacyAssessmentContentId }
            stories { id story literacyAssessmentContentId }
            letters { id letter literacyAssessmentContentId }
            multipleChoiceQuestions {
              id
              literacyAssessmentContentId
              question
              multipleChoiceQuestionAnswers {
                id
                answer
                correct
              }
            }
          }
        }
      `,
      variables: { where: { id: parseInt(id) } },
    }),
  });

  if (!res.ok) throw new Error("Failed to fetch");
  const json = await res.json();
  return json.data.literacyAssessmentContent as LiteracyAssessmentContent;
};

export default async function LiteracyPage() {
  let literacyAssessment: LiteracyAssessmentContent | null = null;
  let error = false;

  try {
    literacyAssessment = await fetchAssessment("1");
  } catch (err) {
    console.error("Failed to load literacy assessment:", err);
    error = true;
  }

  return (
    <div className="sm:px-8 md:px-16 py-6 md:py-8 mx-auto max-w-[1920px]">
      {error || !literacyAssessment ? (
        <p className="text-xl p-8 text-destructive text-center">
          Something went wrong. Please refresh the page or try again later.
        </p>
      ) : (
        <Assessment literacyAssessment={literacyAssessment} />
      )}
    </div>
  );
}