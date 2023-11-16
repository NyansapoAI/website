import React, { useContext, useState } from "react"
import {
  NumeracyAssessmentContent,
  numeracyAssessmentConfig,
  numeracyAssessmentVariants,
} from "./NumeracyAssessments"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { AssessmentContent } from "../literacy/AssessmentContent"
import { RecordButton } from "../literacy/RecordButton"
import { NumeracyAssessmentContext } from "./NumeracyAssessmentContext"
import { Separator } from "@/components/ui/separator"
import { Divide, Eraser, Minus, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhisperApiResponse, WhisperApiResponseHandWriting } from "../types"
import { Canvas } from "./Canvas"

type Props = {
  data: NumeracyAssessmentContent["numeracyOperations"]
  operator: string
}

export default function NumeracyOperation({ data }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [erasing, setErasing] = useState(false)
  const { setAssessmentInput, setCurrentItem } = useContext(
    NumeracyAssessmentContext
  )
  const currentQuestion = data[currentIndex]
  const handleSave = (operationData: WhisperApiResponseHandWriting) => {
    setAssessmentInput((prev) => {
      return {
        ...prev,
        data: {
          ...prev.data,
          numeracyOperationResults: {
            create: [
              ...prev.data.numeracyOperationResults.create,
              {
                answerFromOriginalModelPrediction: operationData.response,
                durationTheModelTakesToAnalzeEachScreenshotInMilliseconds: 0,
                numeracyOperation: {
                  connect: {
                    id: currentQuestion.id,
                  },
                },
                index: currentIndex,
                localAbsolutePathOfScreenshot: "",
                urlOfScreenshot: operationData.url,
              },
            ],
          },
        },
      }
    })
    handleNext()
  }

  const handleNext = () => {
    if (currentIndex < numeracyAssessmentConfig.numberRecognition) {
      setCurrentIndex((curr) => curr + 1)
    } else {
      if (currentQuestion.mathOperator === "ADDITION")
        setCurrentItem(numeracyAssessmentVariants.subtraction)
      else if (currentQuestion.mathOperator === "SUBTRACTION")
        setCurrentItem(numeracyAssessmentVariants.multiplication)
      else if (currentQuestion.mathOperator === "MULTIPLICATION")
        setCurrentItem(numeracyAssessmentVariants.division)
      else if (currentQuestion.mathOperator === "DIVISION")
        setCurrentItem(numeracyAssessmentVariants.wordProblem)
    }
  }
  const getOperationData = (operator: string) => {
    switch (operator) {
      case "ADDITION":
        return {
          title: "Addition",
          description: "Write the answer in the space provided at the bottom ",
          operator: <Plus size={25} />,
        }
      case "SUBTRACTION":
        return {
          title: "Subtraction",
          description: "Write the answer in the space provided at the bottom ",
          operator: <Minus size={25} />,
        }
      case "MULTIPLICATION":
        return {
          title: "Multiplication",
          description: "Write the answer in the space provided at the bottom",
          operator: <X size={25} />,
        }
      case "DIVISION":
        return {
          title: "Division",
          description: "Write the answer in the space provided at the bottom",
          operator: <Divide size={25} />,
        }
    }
  }
  return (
    <Card className="max-w-fit shadow-none border-none bg-transparent mx-auto lg:px-12">
      <CardHeader>
        <CardTitle>
          {getOperationData(currentQuestion.mathOperator)?.title}
        </CardTitle>
        <CardDescription className="max-w-2xl">
          {getOperationData(currentQuestion.mathOperator)?.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <Button
            variant={erasing ? "destructive" : "outline"}
            className="mb-2 border-primary flex items-center gap-2"
            onClick={() => setErasing((e) => !e)}
          >
            <Eraser size={25} />
            <span>{erasing ? "Stop erasing" : "Erase"} </span>
          </Button>
          <div className=" text-3xl 2xl:text-4xl flex flex-col items-center">
            <div className="relative bg-slate-900">
              <Canvas
                processImage={false}
                lineWidth={3}
                erasing={erasing}
                width={320}
                height={160}
              />
              <div className="flex items-end absolute z-0 top-12 right-16">
                <span className="mr-4 text-4xl font-bold">
                  {getOperationData(currentQuestion.mathOperator)?.operator}
                </span>
                <div className="flex text-5xl font-semibold flex-col gap-2 items-center">
                  <span>{currentQuestion.firstNumber}</span>

                  <span>{currentQuestion.secondNumber}</span>
                </div>
              </div>
            </div>
            {/* <Separator className="bg-primary  max-w-[330px] border-2 border-slate-400" /> */}

            <Canvas
              callback={handleSave}
              erasing={erasing}
              width={320}
              height={150}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-4 justify-center">
        {/* <Button variant="outline" onClick={handleBack}>
          Back
        </Button> */}
      </CardFooter>
    </Card>
  )
}
