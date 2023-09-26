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
import { Paragraph } from "./[id]/types"
import { assessmentVariants } from "./Assessment"

type ParagraphAssessmentProps = {
  paragraphAssessment: Paragraph[]
  setCurrentAssessment: React.Dispatch<React.SetStateAction<number>>
}
export const ParagraphAssessments = ({
  paragraphAssessment,
  setCurrentAssessment,
}: ParagraphAssessmentProps) => {
  const [currentParagraph, setCurrentParagraph] = React.useState<number>(0)
  const handleNext = () => {
    if (currentParagraph < paragraphAssessment.length - 1) {
      setCurrentParagraph(currentParagraph + 1)
    } else {
      setCurrentAssessment(assessmentVariants.story)
    }
  }
  const handleBack = () => {
    if (currentParagraph == 0) setCurrentAssessment(assessmentVariants.word)
    if (currentParagraph > 0) {
      setCurrentParagraph(currentParagraph - 1)
    }
  }

  return (
    <Card className="max-w-fit border-none mx-auto px-4 md:px-12">
      <CardHeader>
        <CardTitle>Paragraph Assessment</CardTitle>
        <CardDescription>
          Click the start recording button and read the paragraph in the card
        </CardDescription>
      </CardHeader>
      <CardContent className="py-6 md:py-12">
        <p className="text-xl text-center bg-secondary rounded-md font-semibold max-w-[500px] p-8 md:p-16 mx-auto">
          {paragraphAssessment[currentParagraph].paragraph}
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
