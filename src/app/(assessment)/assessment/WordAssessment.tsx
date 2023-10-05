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
import { Mic } from "lucide-react"
import { WhisperApiResponse, Word } from "./start/types"
import { assessmentVariants } from "./Assessment"
import { AssessmentContext } from "./AssessmentContext"
import { RecordButton } from "./RecordButton"

type LetterAssessmentProps = {
  wordAssessment: Word[]
  setCurrentAssessment: React.Dispatch<React.SetStateAction<number>>
}
export const WordAssessments = ({
  wordAssessment,
  setCurrentAssessment,
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
    if (currentWord < 6) {
      setCurrentWord(currentWord + 1)
    } else {
      setCurrentAssessment(assessmentVariants.paragraph)
    }
  }
  const handleBack = () => {
    if (currentWord == 0) setCurrentAssessment(assessmentVariants.letter)
    if (currentWord > 0) {
      setCurrentWord(currentWord - 1)
    }
  }

  return (
    <Card className="max-w-fit  border-none mx-auto px-12">
      <CardHeader>
        <CardTitle>Word Assessment</CardTitle>
        <CardDescription>
          Click the start recording button and read the word in the card
        </CardDescription>
      </CardHeader>
      <CardContent className="py-12">
        <p className="text-4xl text-center bg-secondary rounded-md font-bold w-80 p-16 mx-auto">
          {wordAssessment[currentWord].word}
        </p>
      </CardContent>
      <CardFooter className="flex gap-4 justify-center">
        <Button variant="outline" onClick={handleBack}>
          Back
        </Button>
        <RecordButton
          setCurrentAssessment={setCurrentAssessment}
          callback={handleSave}
        />
        <Button variant="outline" onClick={handleNext}>
          Next
        </Button>
      </CardFooter>
    </Card>
  )
}
