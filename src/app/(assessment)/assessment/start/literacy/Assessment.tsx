"use client"
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { LiteracyAssessment, Paragraph, Story } from "../types"
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
import { ResultsQuestionnaire } from "./ResultsQuestionnaire"
import { useRef } from "react"
import autoAnimate from "@formkit/auto-animate"
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
  feedback: 7,
} as const
export const AssessmentConfig = {
  totalLetters: 2,
  totalWords: 2,
  totalParagraphs: 1,
} as const
export function Assessment({ literacyAssessment }: Props) {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [assessmentId, setAssessmentId] = React.useState<number | undefined>()
  const [currentItem, setCurrentItem] = React.useState<number>(
    assessmentVariants.letter
  )
  const [feedbackId, setFeedbackId] = React.useState<string>("")
  const [assessmentData, setAssessmentData] = React.useState<AssessmentInput>(
    initialAssessmentInput
  )
  const parent = useRef(null)

  React.useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])
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
        feedbackId: feedbackId,
        setFeedbackId: setFeedbackId,
        setAssessmentId: setAssessmentId,
        assessmentInput: assessmentData,
        setAssessmentInput: setAssessmentData,
      }}
    >
      <Card className="sm:max-w-fit w-full border-none h-full  mt-8  bg-transparent mx-auto ">
        {loading ? (
          <Lottie
            className=" max-w-[625px] max-h-[600px] "
            animationData={transition}
            loop={false}
          />
        ) : (
          <CardContent ref={parent}>
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
              <AssessmentResults
                setCurrentItem={setCurrentItem}
                assessment_id="1"
              />
            ) : null}

            {currentItem == assessmentVariants.feedback ? (
              <ResultsQuestionnaire setCurrentItem={setCurrentItem} />
            ) : null}
          </CardContent>
        )}
      </Card>
    </AssessmentContext.Provider>
  )
}
