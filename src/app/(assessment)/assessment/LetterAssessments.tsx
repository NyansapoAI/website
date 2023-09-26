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
import { Letter } from "./[id]/types"
import { assessmentVariants } from "./Assessment"

type LetterAssessmentProps = {
  letterAssessment: Letter[]
  setCurrentAssessment: React.Dispatch<React.SetStateAction<number>>
}
export const LetterAssessments = ({
  letterAssessment,
  setCurrentAssessment,
}: LetterAssessmentProps) => {
  const [currentLetter, setCurrentLetter] = React.useState<number>(0)
  const handleNext = () => {
    if (currentLetter < letterAssessment.length - 1) {
      setCurrentLetter(currentLetter + 1)
    } else {
      setCurrentAssessment(assessmentVariants.word)
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
      <CardFooter className="flex justify-center">
        <Button onClick={handleNext}>
          <Mic />
          &nbsp; Start Recording
        </Button>
      </CardFooter>
    </Card>
  )
}
