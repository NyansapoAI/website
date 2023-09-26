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
import { Story } from "./[id]/types"
import { assessmentVariants } from "./Assessment"

type StoryAssessmentProps = {
  storyAssessment: Story[]
  setCurrentAssessment: React.Dispatch<React.SetStateAction<number>>
}
export const StoryAssessments = ({
  storyAssessment,
  setCurrentAssessment,
}: StoryAssessmentProps) => {
  const [currentStory, setCurrentStory] = React.useState<number>(0)
  const handleNext = () => {
    if (currentStory < storyAssessment.length - 1) {
      setCurrentStory(currentStory + 1)
    } else {
      setCurrentAssessment(assessmentVariants.storyQuestions)
    }
  }
  const handleBack = () => {
    if (currentStory == 0) setCurrentAssessment(assessmentVariants.paragraph)
    if (currentStory > 0) {
      setCurrentStory(currentStory - 1)
    }
  }

  return (
    <Card className="max-w-fit border-none mx-auto px-4 md:px-8">
      <CardHeader>
        <CardTitle>Story Assessment</CardTitle>
        <CardDescription>
          Click the start recording button and read the story in the card
        </CardDescription>
      </CardHeader>
      <CardContent className="py-6 ">
        <p className="text-xl lg:text-2xl text-center bg-secondary rounded-md font-semibold  p-8 md:p-12 mx-auto">
          {storyAssessment[currentStory].story}
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
