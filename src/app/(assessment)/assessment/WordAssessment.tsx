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
import { Word } from "./[id]/types"
import { assessmentVariants } from "./Assessment"

type LetterAssessmentProps = {
  wordAssessment: Word[]
  setCurrentAssessment: React.Dispatch<React.SetStateAction<number>>
}
export const WordAssessments = ({
  wordAssessment,
  setCurrentAssessment,
}: LetterAssessmentProps) => {
  const [currentWord, setCurrentWord] = React.useState<number>(0)
  const handleNext = () => {
    if (currentWord < wordAssessment.length - 1) {
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
        <Button onClick={handleNext}>
          <Mic />
          &nbsp; Start Recording
        </Button>
        <Button variant="outline" onClick={handleNext}>
          Next
        </Button>
      </CardFooter>
    </Card>
  )
}
