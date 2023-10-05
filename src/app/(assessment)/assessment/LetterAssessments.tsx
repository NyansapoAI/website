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
import { assessmentVariants } from "./Assessment"
import { Letter, WhisperApiResponse } from "./start/types"
import { AssessmentContext } from "./AssessmentContext"
import { RecordButton } from "./RecordButton"

type LetterAssessmentProps = {
  letterAssessment: Letter[]
  setCurrentAssessment: React.Dispatch<React.SetStateAction<number>>
}
export const LetterAssessments = ({
  letterAssessment,
  setCurrentAssessment,
}: LetterAssessmentProps) => {
  const [currentLetter, setCurrentLetter] = React.useState<number>(0)
  const { setAssessmentInput } = React.useContext(AssessmentContext)
  const handleSave = (data: WhisperApiResponse) => {
    setAssessmentInput((prev) => {
      return {
        ...prev,
        letterAssessmentResults: {
          create: [
            ...prev.letterAssessmentResults.create,
            {
              answerFromOriginalModelPrediction: data.response,
              durationTheModelTakesToAnalzeEachLetterInMilliseconds:
                data.duration,
              expectedAnswer: letterAssessment[currentLetter].letter,
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
    if (currentLetter < 6) {
      setCurrentLetter(currentLetter + 1)
    } else {
      setCurrentAssessment(assessmentVariants.word)
    }
  }
  const handleBack = () => {
    if (currentLetter == 0) return
    if (currentLetter > 0) {
      setCurrentLetter(currentLetter - 1)
    }
  }

  return (
    <Card className="max-w-fit border-none mx-auto px-12">
      <CardHeader>
        <CardTitle>Letter Assessment</CardTitle>
        <CardDescription>
          Click the start recording button and read the letter in the card
        </CardDescription>
      </CardHeader>
      <CardContent className="py-12">
        <p className="text-4xl text-center bg-secondary rounded-md font-bold w-80 p-16 mx-auto">
          {letterAssessment[currentLetter].letter}
        </p>
      </CardContent>
      <CardFooter className="flex gap-4 justify-center">
        <Button variant="outline" onClick={handleBack}>
          Back
        </Button>
        <RecordButton
          callback={handleSave}
          setCurrentAssessment={setCurrentAssessment}
        />
        <Button variant="outline" onClick={handleNext}>
          Next
        </Button>
      </CardFooter>
    </Card>
  )
}
