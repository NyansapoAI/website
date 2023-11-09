import React, { useContext, useEffect, useRef, useState } from "react"
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
import toast from "react-hot-toast"
import Spinner from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

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

interface CanvasProps {
  width: number
  height: number
  lineWidth?: number
  erasing: boolean
  callback?: (data: WhisperApiResponseHandWriting) => void
  processImage?: boolean
}

const Canvas: React.FC<CanvasProps> = ({
  width,
  height,
  lineWidth,
  callback,
  erasing,
  processImage = true,
}) => {
  const [processing, setProcessing] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const handleDownload = async () => {
    setProcessing(true)
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    canvas.toBlob(async (blob) => {
      if (!blob) {
        console.error("Canvas toBlob() method returned null.")
        return
      }

      const formData = new FormData()
      formData.append("uploaded_file", blob, "drawing.png")
      try {
        const resp = await fetch(
          `${process.env.NEXT_PUBLIC_WHISPER_API_URL}/hand_writing_recognition`,
          {
            method: "POST",
            body: formData,
          }
        )
        const data = (await resp.json()) as WhisperApiResponseHandWriting
        console.log("whisper resp", data)
        setProcessing(false)
        if (data.response.includes("failed")) {
          toast.error("Error in recognizing the image,please try again")
          return
        }
        callback &&
          callback({
            ...data,
          })
      } catch (err) {
        console.log(err)
        toast.error("Error in recognizing the image")
        setProcessing(false)
      }
      clearCanvas()
    })
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext("2d")
    if (!context) return
    console.log("context and canvas found")
    canvas.style.cursor = erasing ? "grab" : "default"

    let drawing = false

    const startDraw = (event: MouseEvent | TouchEvent) => {
      drawing = true
      draw(event)
    }

    const endDraw = () => {
      drawing = false
      context.beginPath()
    }

    const draw = (event: MouseEvent | TouchEvent) => {
      if (!drawing) return
      context.lineWidth = erasing ? 15 : lineWidth ?? 5
      context.lineCap = "round"
      context.strokeStyle = erasing ? "rgba(0,0,0,1.0)" : "yellow"

      context.globalCompositeOperation = erasing
        ? "destination-out"
        : "source-over"

      let x = "clientX" in event ? event.clientX : event.touches[0].clientX
      let y = "clientY" in event ? event.clientY : event.touches[0].clientY
      const rect = canvas.getBoundingClientRect()
      x -= rect.left
      y -= rect.top

      context.lineTo(x, y)
      context.stroke()
      context.beginPath()
      context.moveTo(x, y)
    }

    canvas.addEventListener("mousedown", startDraw)
    canvas.addEventListener("mouseup", endDraw)
    canvas.addEventListener("mousemove", draw)

    // For touch screens
    canvas.addEventListener("touchstart", startDraw)
    canvas.addEventListener("touchend", endDraw)
    canvas.addEventListener("touchmove", draw)

    return () => {
      canvas.removeEventListener("mousedown", startDraw)
      canvas.removeEventListener("mouseup", endDraw)
      canvas.removeEventListener("mousemove", draw)

      canvas.removeEventListener("touchstart", startDraw)
      canvas.removeEventListener("touchend", endDraw)
      canvas.removeEventListener("touchmove", draw)
    }
  }, [erasing, lineWidth])

  const clearCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d")
    if (!context) return
    context.clearRect(0, 0, canvas.width, canvas.height)
  }
  return (
    <div className="flex flex-col gap-4 items-center">
      <canvas
        className={cn(
          processImage
            ? "bg-slate-900  border-2 border-green-600"
            : "bg-transparent",
          "z-20 p-2"
        )}
        ref={canvasRef}
        width={width}
        height={height}
      />
      {processImage ? (
        <Button onClick={handleDownload}>
          {processing ? <Spinner /> : "Next"}
        </Button>
      ) : null}
    </div>
  )
}
