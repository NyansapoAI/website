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
import { AssessmentConfig, assessmentVariants } from "./Assessment"
import { AssessmentContext } from "./AssessmentContext"
import { RecordButton } from "./RecordButton"
import { AssessmentContent } from "./AssessmentContent"
import { Letter, WhisperApiResponse } from "../types"

type LetterAssessmentProps = {
  letterAssessment: Letter[]
  setCurrentItem: React.Dispatch<React.SetStateAction<number>>
}
export const LetterAssessments = ({
  letterAssessment,
  setCurrentItem,
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
    if (currentLetter < AssessmentConfig.totalLetters) {
      setCurrentLetter(currentLetter + 1)
    } else {
      setCurrentItem(assessmentVariants.word)
    }
  }
  const handleBack = () => {
    if (currentLetter == 0) return
    if (currentLetter > 0) {
      setCurrentLetter(currentLetter - 1)
    }
  }

  return (
    <Card className="max-w-fit shadow-none border-none bg-transparent mx-auto lg:px-12">
      <CardHeader>
        <CardTitle>Letter Assessment</CardTitle>
        <CardDescription className="max-w-2xl">
          Click the start recording button and read the letter in the card, once
          you are done reading, click stop recording
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AssessmentContent content={letterAssessment[currentLetter].letter} />
      </CardContent>
      <CardFooter className="flex gap-4 justify-center">
        {/* <Button variant="outline" onClick={handleBack}>
          Back
        </Button> */}
        <RecordButton callback={handleSave} setCurrentItem={setCurrentItem} />
        {/* <Button variant="outline" onClick={handleNext}>
          Next
        </Button> */}
      </CardFooter>
    </Card>
  )
}
