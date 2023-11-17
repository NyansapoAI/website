import React, { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { WhisperApiResponseHandWriting } from "../types"
import toast from "react-hot-toast"
import Spinner from "@/components/ui/spinner"
import { cn } from "@/lib/utils"
import { Eraser } from "lucide-react"

interface CanvasProps {
  width: number
  height: number
  lineWidth?: number
  erasing: boolean
  callback?: (data: WhisperApiResponseHandWriting) => void
  processImage?: boolean
}
export const Canvas: React.FC<CanvasProps> = ({
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
          `${process.env.NEXT_PUBLIC_WHISPER_API_URL}/vision_recognition`,
          {
            method: "POST",
            body: formData,
          }
        )
        const data = (await resp.json()) as WhisperApiResponseHandWriting
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
