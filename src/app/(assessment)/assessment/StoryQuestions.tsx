"use client"
import * as React from "react"
import { Question } from "./start/types"
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
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import Spinner from "@/components/ui/spinner"
import AssessmentResults from "./AssessmentResults"
import { generateRandomName } from "@/lib/utils"
type StoryQuestionProps = {
  storyQuestions: Question[]
  setCurrentAssessment: React.Dispatch<React.SetStateAction<number>>
}
export const StoryQuestions = ({
  storyQuestions,
  setCurrentAssessment,
}: StoryQuestionProps) => {
  const [success, setSetSuccess] = React.useState<boolean>(false)
  const [learningLevel, setLearningLevel] = React.useState<string>("")
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0)
  const { setAssessmentInput, assessmentInput } =
    React.useContext(AssessmentContext)
  const { firstName, lastName } = generateRandomName()

  const { mutate, isLoading } = useMutation({
    mutationFn: async (data: typeof assessmentInput) => {
      return axios
        .post(
          process.env.NEXT_PUBLIC_API_URL!,
          {
            query:
              "mutation CreateOneLiteracyAssessment($data: LiteracyAssessmentCreateInput!, $literacyAssessmentConfigInput: LiteracyAssessmentConfigInput!) {\r\n  createOneLiteracyAssessment(data: $data) {\r\n    dynamicallyGeneratedLearningLevel(literacyAssessmentConfigInput: $literacyAssessmentConfigInput) {\r\n      dynamicallyGeneratedLearningLevel\r\n    }\r\n  }\r\n}",
            variables: {
              data: {
                ...data,
                student: {
                  create: {
                    age: 10,
                    camp: {
                      connect: {
                        id: parseInt(
                          process.env.NEXT_PUBLIC_ASSESSMENT_CAMP_ID!
                        ),
                      },
                    },
                    gender: Gender.MALE,
                    lastName: lastName,
                    firstName: firstName,
                    grade: 4,
                  },
                },
              },
              literacyAssessmentConfigInput: {},
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => response.data)
    },
    onSuccess: (data) => {
      console.log("data", data.data.createOneLiteracyAssessment)
      setSetSuccess(true)
      setLearningLevel(
        data.data.createOneLiteracyAssessment.dynamicallyGeneratedLearningLevel
          .dynamicallyGeneratedLearningLevel
      )
      // setCurrentAssessment(assessmentVariants.results)
    },
    onError: (error) => {
      console.log("error", error)
    },
  })
  const handleChange = (value: string) => {
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
  }
  const handleNext = () => {
    if (currentQuestion < storyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setCurrentAssessment(assessmentVariants.results)
      //
    }
  }
  const handleBack = () => {
    if (currentQuestion == 0) setCurrentAssessment(assessmentVariants.story)
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }
  const handleFinish = () => {
    console.log("final data", assessmentInput)
    mutate(assessmentInput)
  }
  return success ? (
    <AssessmentResults learningLevel={learningLevel} />
  ) : (
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
          <RadioGroup onValueChange={handleChange} defaultValue="option-one">
            {storyQuestions[currentQuestion].multipleChoiceQuestionAnswers.map(
              (answer, i) => {
                return (
                  <div key={i} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={answer.id.toString()}
                      id={answer.id.toString()}
                    />
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
          <Button onClick={handleFinish}>
            {isLoading ? <Spinner /> : "Finish"}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
