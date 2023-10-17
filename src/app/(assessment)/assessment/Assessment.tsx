"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { LiteracyAssessment, Paragraph, Story } from "./start/types"
import { LetterAssessments } from "./LetterAssessments"
import { WordAssessments } from "./WordAssessment"
import { ParagraphAssessments } from "./ParagraphAssessment"
import { StoryAssessments } from "./StoryAssessment"
import { StoryQuestions } from "./StoryQuestions"
import AssessmentResults from "./AssessmentResults"
import {
  AssessmentContext,
  AssessmentInput,
  initialAssessmentInput,
} from "./AssessmentContext"
import Lottie from "lottie-react"
import transition from "@/lottie/transition.json"
import { Questionnaire } from "./Questionnaire"
type Props = {
  literacyAssessment: LiteracyAssessment["literacyAssessmentContent"]
}
export const assessmentVariants = {
  letter: 0,
  word: 1,
  paragraph: 2,
  story: 3,
  storyQuestions: 4,
  questionnaire: 5,
  results: 6,
} as const

export function Assessment({ literacyAssessment }: Props) {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [assessmentId, setAssessmentId] = React.useState<number | undefined>()
  const [currentItem, setCurrentItem] = React.useState<number>(
    assessmentVariants.letter
  )
  const [assessmentData, setAssessmentData] = React.useState<AssessmentInput>(
    initialAssessmentInput
  )
  React.useEffect(() => {
    if (currentItem > 0) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1700)
    }
  }, [currentItem])

  return (
    <AssessmentContext.Provider
      value={{
        assessmentId: assessmentId,
        setAssessmentId: setAssessmentId,
        assessmentInput: assessmentData,
        setAssessmentInput: setAssessmentData,
      }}
    >
      <Card className="max-w-fit w-full border-none h-full  mt-8  bg-transparent mx-auto ">
        {loading ? (
          <Lottie
            className=" max-w-[625px] max-h-[550px] "
            animationData={transition}
            loop={false}
          />
        ) : (
          <CardContent>
            {currentItem == assessmentVariants.letter ? (
              <LetterAssessments
                letterAssessment={literacyAssessment.letters}
                setCurrentItem={setCurrentItem}
              />
            ) : null}
            {currentItem == assessmentVariants.word ? (
              <WordAssessments
                wordAssessment={literacyAssessment.words}
                setCurrentItem={setCurrentItem}
              />
            ) : null}
            {currentItem == assessmentVariants.paragraph ? (
              <ParagraphAssessments
                paragraphAssessment={literacyAssessment.paragraphs}
                setCurrentItem={setCurrentItem}
              />
            ) : null}
            {currentItem == assessmentVariants.story ? (
              <StoryAssessments
                storyAssessment={literacyAssessment.stories}
                setCurrentItem={setCurrentItem}
              />
            ) : null}
            {currentItem == assessmentVariants.storyQuestions ? (
              <StoryQuestions
                storyQuestions={literacyAssessment.multipleChoiceQuestions}
                setCurrentItem={setCurrentItem}
              />
            ) : null}
            {currentItem == assessmentVariants.questionnaire ? (
              <Questionnaire setCurrentItem={setCurrentItem} />
            ) : null}
            {currentItem == assessmentVariants.results ? (
              <AssessmentResults assessment_id="1" />
            ) : null}
          </CardContent>
        )}
      </Card>
    </AssessmentContext.Provider>
  )
}
