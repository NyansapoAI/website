"use client"
import * as React from "react"
import { Question } from "../types"
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
import { AssessmentContext, Gender } from "./AssessmentContext"
import { generateRandomName } from "@/lib/utils"
type StoryQuestionProps = {
  storyQuestions: Question[]
  setCurrentItem: React.Dispatch<React.SetStateAction<number>>
}
const randomizeAnswers = (
  answers: Question["multipleChoiceQuestionAnswers"]
) => {
  const otherAnswers = answers.filter((item) => !item.correct)
  const correctAnswer = answers.find((item) => item.correct)
  const randomizedAnswers = [correctAnswer!, ...otherAnswers.slice(0, 3)]
  const shuffled = randomizedAnswers.sort(() => 0.5 - Math.random())
  return shuffled
}
export const StoryQuestions = ({
  storyQuestions,
  setCurrentItem,
}: StoryQuestionProps) => {
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0)
  const { setAssessmentInput, setAssessmentId, assessmentInput } =
    React.useContext(AssessmentContext)
  const { firstName, lastName } = generateRandomName()
  const randomizedAnswers = React.useMemo(
    () =>
      randomizeAnswers(
        storyQuestions[currentQuestion].multipleChoiceQuestionAnswers
      ),
    [storyQuestions, currentQuestion]
  )

  const handleChange = (value: string) => {
    //check if the current question is already added
    //if it is, update the answer
    //if not, add the question

    if (
      !assessmentInput.questionAssessmentResults.create.some(
        (item) =>
          item.multipleChoiceQuestion.connect.id ==
          storyQuestions[currentQuestion].id
      )
    ) {
      setAssessmentInput((prev) => {
        return {
          ...prev,
          questionAssessmentResults: {
            create: [
              ...prev.questionAssessmentResults.create,
              {
                answerFromUser:
                  storyQuestions[
                    currentQuestion
                  ].multipleChoiceQuestionAnswers.find(
                    (item) => item.id == parseInt(value)
                  )?.answer ?? "",
                multipleChoiceQuestion: {
                  connect: { id: storyQuestions[currentQuestion].id },
                },
                multipleChoiceQuestionAnswer: {
                  connect: { id: parseInt(value) },
                },
              },
            ],
          },
        }
      })
    } else {
      setAssessmentInput((prev) => {
        return {
          ...prev,
          questionAssessmentResults: {
            create: prev.questionAssessmentResults.create.map((item) => {
              if (
                item.multipleChoiceQuestion.connect.id ==
                storyQuestions[currentQuestion].id
              ) {
                return {
                  ...item,
                  multipleChoiceQuestionAnswer: {
                    connect: { id: parseInt(value) },
                  },
                }
              } else {
                return item
              }
            }),
          },
        }
      })
    }
  }
  const handleNext = () => {
    if (currentQuestion < storyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setCurrentItem(assessmentVariants.results)
      //
    }
  }
  const handleBack = () => {
    if (currentQuestion == 0) setCurrentItem(assessmentVariants.story)
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }
  const handleFinish = () => {
    // mutate(assessmentInput)
    setCurrentItem(assessmentVariants.questionnaire)
  }
  return (
    <Card className="max-w-fit bg-transparent border-none mx-auto px-4 m:px-8">
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
          <RadioGroup onValueChange={handleChange} defaultValue="option-one">
            {randomizedAnswers.map((answer, i) => {
              return (
                <div key={i} className="flex items-center space-x-2 space-y-2">
                  <RadioGroupItem
                    value={answer.id.toString()}
                    id={answer.id.toString()}
                  />
                  <Label className="text-md" htmlFor={answer.answer}>
                    {answer.answer}
                  </Label>
                </div>
              )
            })}
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
