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

type Props = {
  data: NumeracyAssessmentContent["numeracyOperations"]
}

export default function NumeracyOperation({ data }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [erasing, setErasing] = useState(false)
  const { setAssessmentInput, setCurrentItem } = useContext(
    NumeracyAssessmentContext
  )
  const currentQuestion = data[currentIndex]

  const handleNext = () => {
    if (currentIndex < numeracyAssessmentConfig.numberRecognition) {
      setCurrentIndex((curr) => curr + 1)
    } else {
      setCurrentItem(numeracyAssessmentVariants.wordProblem)
    }
  }
  const getOperationData = (operator: string) => {
    switch (operator) {
      case "ADDITION":
        return {
          title: "Addition",
          description: "Write the answer in the space provided ",
          operator: <Plus size={25} />,
        }
      case "SUBTRACTION":
        return {
          title: "Subtraction",
          description: "Write the answer in the space provided ",
          operator: <Minus size={25} />,
        }
      case "MULTIPLICATION":
        return {
          title: "Multiplication",
          description: "Write the answer in the space provided",
          operator: <X size={25} />,
        }
      case "DIVISION":
        return {
          title: "Division",
          description: "Write the answer in the space provided",
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
            variant={erasing ? "default" : "outline"}
            className="my-4 border-primary flex items-center gap-2"
            onClick={() => setErasing((e) => !e)}
          >
            <Eraser size={25} />
            <span>Erase</span>
          </Button>
          <div className=" text-3xl 2xl:text-4xl flex flex-col items-center">
            <div className="relative">
              <Canvas
                processImage={false}
                erasing={erasing}
                width={300}
                height={200}
              />
              <div className="flex items-end absolute top-24 right-24">
                <span className="mr-4">
                  {getOperationData(currentQuestion.mathOperator)?.operator}
                </span>
                <div className="flex flex-col gap-2 items-center">
                  <span>{currentQuestion.firstNumber}</span>

                  <span>{currentQuestion.secondNumber}</span>
                </div>
              </div>
            </div>
            <Separator className="bg-primary border-2 border-slate-400" />
            <Canvas erasing={erasing} width={300} height={200} />
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
  erasing: boolean
  processImage?: boolean
}

const Canvas: React.FC<CanvasProps> = ({
  width,
  height,
  erasing,
  processImage = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const handleDownload = () => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const imageUrl = canvas.toDataURL("image/png")
    console.log("image url type", typeof imageUrl)
    console.log("image url", imageUrl)

    // Create a link element
    const link = document.createElement("a")
    link.download = "drawing.png"
    link.href = imageUrl
    link.click()
  }
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext("2d")
    if (!context) return
    console.log("context and canvas found")

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
      context.lineWidth = erasing ? 15 : 5
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
  }, [erasing])

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
        className=" bg-slate-900  p-2"
        ref={canvasRef}
        width={width}
        height={height}
      />
      {processImage ? <Button onClick={handleDownload}>Next</Button> : null}
    </div>
  )
}
