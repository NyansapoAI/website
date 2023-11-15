"use client"
import * as React from "react"
import { WhisperApiResponseHandWriting } from "../types"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { NumeracyAssessmentContext } from "./NumeracyAssessmentContext"
import {
  NumeracyAssessmentContent,
  numeracyAssessmentConfig,
  numeracyAssessmentVariants,
} from "./NumeracyAssessments"
import { Canvas } from "./Canvas"
import { Eraser } from "lucide-react"
type StoryQuestionProps = {
  data: NumeracyAssessmentContent["wordProblems"]
}

export const WordProblem = ({ data: wordProblems }: StoryQuestionProps) => {
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0)
  const [erasing, setErasing] = React.useState(false)
  const { setAssessmentInput, setCurrentItem, assessmentInput } =
    React.useContext(NumeracyAssessmentContext)
  console.log(wordProblems)
  const handleSave = (resp: WhisperApiResponseHandWriting) => {
    setAssessmentInput((prev) => {
      return {
        ...prev,
        data: {
          ...prev.data,
          wordProblemResults: {
            create: [
              ...prev.data.wordProblemResults.create,
              {
                wordProblem: {
                  connect: {
                    id: wordProblems[currentQuestion].id,
                  },
                },
                durationTheModelTakesToAnalzeEachScreenshotInMilliseconds: 0,
                urlOfScreenshot: resp.url,
                localAbsolutePathOfScreenshot: "",
                answerFromOriginalModelPrediction: resp.response,
              },
            ],
          },
        },
      }
    })
    setCurrentItem(numeracyAssessmentVariants.questionnaire)
  }

  const handleFinish = () => {
    // mutate(assessmentInput)
    setCurrentItem(numeracyAssessmentVariants.questionnaire)
  }
  return (
    <Card className="max-w-fit bg-transparent border-none mx-auto px-4 m:px-8">
      <CardHeader>
        <CardTitle>Word Problem</CardTitle>
        <CardDescription>Answer the following problem</CardDescription>
      </CardHeader>
      <CardContent className="mb-4">
        <div className="">
          <p className="text-2xl mb-4">
            {wordProblems[currentQuestion].problem}
          </p>
          <div className=" max-w-fit mx-auto">
            <Button
              variant={erasing ? "destructive" : "outline"}
              className="mb-2 border-primary flex items-center gap-2"
              onClick={() => setErasing((e) => !e)}
            >
              <Eraser size={25} />
              <span>{erasing ? "Stop erasing" : "Erase"} </span>
            </Button>
            <div className="bg-slate-900">
              <Canvas
                processImage={false}
                width={400}
                lineWidth={3}
                height={200}
                erasing={erasing}
              />
            </div>
          </div>
          <div className="max-w-fit mx-auto">
            <p className="py-2">Answer</p>
            <Canvas
              width={400}
              height={200}
              callback={handleSave}
              erasing={erasing}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
