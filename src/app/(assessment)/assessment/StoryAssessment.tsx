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
import { AssessmentContent } from "./AssessmentContent"

type StoryAssessmentProps = {
  storyAssessment: Story[]
  setCurrentItem: React.Dispatch<React.SetStateAction<number>>
}
export const StoryAssessments = ({
  storyAssessment,
  setCurrentItem,
}: StoryAssessmentProps) => {
  const [currentStory, setCurrentStory] = React.useState<number>(0)
  const { setAssessmentInput } = React.useContext(AssessmentContext)
  // const stories = React.useMemo(
  //   () => splitIntoTwoSentencesEach<Story>(storyAssessment),
  //   [storyAssessment]
  // )
  const stories = storyAssessment
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
      setCurrentItem(assessmentVariants.storyQuestions)
    }
  }
  const handleBack = () => {
    if (currentStory == 0) setCurrentItem(assessmentVariants.paragraph)
    if (currentStory > 0) {
      setCurrentStory(currentStory - 1)
    }
  }

  return (
    <Card className="max-w-fit border-none bg-transparent  mx-auto  lg:px-12">
      <CardHeader>
        <CardTitle>Story Assessment</CardTitle>
        <CardDescription>
          Read the story, you will be asked questions about it in the next step.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <AssessmentContent
          suffix="."
          className="text-lg sm:text-xl font-normal px-2 text-left sm:px-4  sm:w-full lg:w-[675px] flex-wrap 
        md:px-8"
          content={stories[currentStory].story}
        />
      </CardContent>
      <CardFooter className="flex gap-4 justify-center">
        {/* <Button variant="outline" onClick={handleBack}>
          Back
        </Button> */}
        {/* <RecordButton setCurrentItem={setCurrentItem} callback={handleSave} /> */}
        <Button onClick={handleNext}>Next</Button>
      </CardFooter>
    </Card>
  )
}
