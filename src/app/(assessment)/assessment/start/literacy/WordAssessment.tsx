"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { WhisperApiResponse, Word } from "../types"
import { AssessmentConfig, assessmentVariants } from "./Assessment"
import { AssessmentContext } from "./AssessmentContext"
import { RecordButton } from "./RecordButton"
import { AssessmentContent } from "./AssessmentContent"

type LetterAssessmentProps = {
  wordAssessment: Word[]
  setCurrentItem: React.Dispatch<React.SetStateAction<number>>
}
export const WordAssessments = ({
  wordAssessment,
  setCurrentItem,
}: LetterAssessmentProps) => {
  const [currentWord, setCurrentWord] = React.useState<number>(0)
  const { setAssessmentInput } = React.useContext(AssessmentContext)
  const handleSave = (data: WhisperApiResponse) => {
    setAssessmentInput((prev) => {
      return {
        ...prev,
        wordAssessmentResults: {
          create: [
            ...prev.wordAssessmentResults.create,
            {
              answerFromOriginalModelPrediction: data.response,
              durationTheModelTakesToAnalzeEachWordInMilliseconds:
                data.duration,
              expectedAnswer: wordAssessment[currentWord].word,
              localAbsolutePathOfRecordedVoiceFile: data.url,
              urlOfRecordedVoice: data.url,
            },
          ],
        },
      }
    })
    handleNext()
  }
  const handleNext = () => {
    if (currentWord < AssessmentConfig.totalWords) {
      setCurrentWord(currentWord + 1)
    } else {
      setCurrentItem(assessmentVariants.paragraph)
    }
  }
  const handleBack = () => {
    if (currentWord == 0) setCurrentItem(assessmentVariants.letter)
    if (currentWord > 0) {
      setCurrentWord(currentWord - 1)
    }
  }

  return (
    <Card className="max-w-fit bg-transparent border-none mx-auto lg:px-12">
      <CardHeader>
        <CardTitle>Word Assessment</CardTitle>
        <CardDescription>
          Click the start recording button and read the word in the card
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AssessmentContent content={wordAssessment[currentWord].word} />
      </CardContent>
      <CardFooter className="flex gap-4 justify-center">
        {/* <Button variant="outline" onClick={handleBack}>
          Back
        </Button> */}
        <RecordButton setCurrentItem={setCurrentItem} callback={handleSave} />
        {/* <Button variant="outline" onClick={handleNext}>
          Next
        </Button> */}
      </CardFooter>
    </Card>
  )
}
