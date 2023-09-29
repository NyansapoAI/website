"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { LiteracyAssessment } from "./[id]/types"
import { LetterAssessments } from "./LetterAssessments"
import { WordAssessments } from "./WordAssessment"
import { ParagraphAssessments } from "./ParagraphAssessment"
import { StoryAssessments } from "./StoryAssessment"
import { StoryQuestions } from "./StoryQuestions"
import AssessmentResults from "./AssessmentResults"

type Props = {
  literacyAssessment: LiteracyAssessment
}
export const assessmentVariants = {
  letter: 0,
  word: 1,
  paragraph: 2,
  story: 3,
  storyQuestions: 4,
  results: 5,
} as const

export function Assessment({ literacyAssessment }: Props) {
  const [currentAssessment, setCurrentAssessment] = React.useState<number>(
    assessmentVariants.letter
  )
  return (
    <Card className="max-w-fit mt-8 bg-transparent mx-auto ">
      <CardContent>
        {currentAssessment == assessmentVariants.letter ? (
          <LetterAssessments
            letterAssessment={
              literacyAssessment.literacyAssessmentContent.letters
            }
            setCurrentAssessment={setCurrentAssessment}
          />
        ) : null}
        {currentAssessment == assessmentVariants.word ? (
          <WordAssessments
            wordAssessment={literacyAssessment.literacyAssessmentContent.words}
            setCurrentAssessment={setCurrentAssessment}
          />
        ) : null}
        {currentAssessment == assessmentVariants.paragraph ? (
          <ParagraphAssessments
            paragraphAssessment={
              literacyAssessment.literacyAssessmentContent.paragraphs
            }
            setCurrentAssessment={setCurrentAssessment}
          />
        ) : null}
        {currentAssessment == assessmentVariants.story ? (
          <StoryAssessments
            storyAssessment={
              literacyAssessment.literacyAssessmentContent.stories
            }
            setCurrentAssessment={setCurrentAssessment}
          />
        ) : null}
        {currentAssessment == assessmentVariants.storyQuestions ? (
          <StoryQuestions
            storyQuestions={
              literacyAssessment.literacyAssessmentContent
                .multipleChoiceQuestions
            }
            setCurrentAssessment={setCurrentAssessment}
          />
        ) : null}
        {currentAssessment == assessmentVariants.results ? (
          <AssessmentResults literacy_assessment_id={literacyAssessment.id} />
        ) : null}
      </CardContent>
    </Card>
  )
}
