"use client"
import * as React from "react"
import { Question } from "./[id]/types"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { assessmentVariants } from "./Assessment"

type StoryQuestionProps = {
  storyQuestions: Question[]
  setCurrentAssessment: React.Dispatch<React.SetStateAction<number>>
}
export const StoryQuestions = ({
  storyQuestions,
  setCurrentAssessment,
}: StoryQuestionProps) => {
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0)
  const handleNext = () => {
    if (currentQuestion < storyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      //
    }
  }
  const handleBack = () => {
    if (currentQuestion == 0) setCurrentAssessment(assessmentVariants.story)
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }
  const handleFinish = () => {}
  return (
    <Card className="max-w-fit border-none mx-auto px-4 m:px-8">
      <CardHeader>
        <CardTitle>Story Questions</CardTitle>
        <CardDescription>
          Answer the following questions from the story you have just read
        </CardDescription>
      </CardHeader>
      <CardContent className="mb-4">
        <div>
          <p className="text-2xl mb-4">
            {storyQuestions[currentQuestion].question}
          </p>
          <RadioGroup defaultValue="option-one">
            {storyQuestions[currentQuestion].multipleChoiceQuestionAnswers.map(
              (answer, i) => {
                return (
                  <div key={i} className="flex items-center space-x-2">
                    <RadioGroupItem value={answer.answer} id={answer.answer} />
                    <Label className="text-md" htmlFor={answer.answer}>
                      {answer.answer}
                    </Label>
                  </div>
                )
              }
            )}
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter className="flex gap-4 justify-center">
        <Button variant="outline" onClick={handleBack}>
          Back
        </Button>
        {currentQuestion < storyQuestions.length - 1 ? (
          <Button onClick={handleNext}>Next</Button>
        ) : (
          <Button onClick={handleFinish}>Finish</Button>
        )}
      </CardFooter>
    </Card>
  )
}
