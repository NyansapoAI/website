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
import { Story, WhisperApiResponse } from "./start/types"
import { assessmentVariants } from "./Assessment"
import { AssessmentContext } from "./AssessmentContext"
import { RecordButton } from "./RecordButton"
import { splitIntoTwoSentencesEach } from "@/lib/utils"

type StoryAssessmentProps = {
  storyAssessment: Story[]
  setCurrentAssessment: React.Dispatch<React.SetStateAction<number>>
}
export const StoryAssessments = ({
  storyAssessment,
  setCurrentAssessment,
}: StoryAssessmentProps) => {
  const [currentStory, setCurrentStory] = React.useState<number>(0)
  const { setAssessmentInput } = React.useContext(AssessmentContext)
  const stories = React.useMemo(
    () => splitIntoTwoSentencesEach<Story>(storyAssessment),
    [storyAssessment]
  )
  const handleSave = (data: WhisperApiResponse) => {
    setAssessmentInput((prev) => {
      return {
        ...prev,
        storySentenceResults: {
          create: [
            ...prev.storySentenceResults.create,
            {
              answerFromOriginalModelPrediction: data.response,
              durationTheModelTakesToAnalzeEachSentenceInMilliseconds:
                data.duration,
              expectedAnswer: stories[currentStory].story,
              index: stories[currentStory].index ?? currentStory,
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
    if (currentStory < stories.length - 1) {
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
        <p className="text-xl text-center bg-secondary rounded-md font-semibold max-w-[500px] min-h-[200px]  p-8 md:p-12 mx-auto">
          {stories[currentStory].story}
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
