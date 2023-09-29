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
import { CircleDot, Mic } from "lucide-react"
import { Letter } from "./[id]/types"
import { assessmentVariants } from "./Assessment"
import toast from "react-hot-toast"

type LetterAssessmentProps = {
  letterAssessment: Letter[]
  setCurrentAssessment: React.Dispatch<React.SetStateAction<number>>
}
export const LetterAssessments = ({
  letterAssessment,
  setCurrentAssessment,
}: LetterAssessmentProps) => {
  const [currentLetter, setCurrentLetter] = React.useState<number>(0)
  const handleNext = () => {
    if (currentLetter < letterAssessment.length - 1) {
      setCurrentLetter(currentLetter + 1)
    } else {
      setCurrentAssessment(assessmentVariants.word)
    }
  }
  const handleBack = () => {
    if (currentLetter == 0) return
    if (currentLetter > 0) {
      setCurrentLetter(currentLetter - 1)
    }
  }

  return (
    <Card className="max-w-fit border-none mx-auto px-12">
      <CardHeader>
        <CardTitle>Letter Assessment</CardTitle>
        <CardDescription>
          Click the start recording button and read the letter in the card
        </CardDescription>
      </CardHeader>
      <CardContent className="py-12">
        <p className="text-4xl text-center bg-secondary rounded-md font-bold w-80 p-16 mx-auto">
          {letterAssessment[currentLetter].letter}
        </p>
      </CardContent>
      <CardFooter className="flex gap-4 justify-center">
        <Button variant="outline" onClick={handleBack}>
          Back
        </Button>
        <RecordButton setCurrentAssessment={setCurrentAssessment} />
        <Button variant="outline" onClick={handleNext}>
          Next
        </Button>
      </CardFooter>
    </Card>
  )
}
type RecordButtonProps = {
  setCurrentAssessment: React.Dispatch<React.SetStateAction<number>>
}
const RecordButton = ({ setCurrentAssessment }: RecordButtonProps) => {
  const [startRecording, setStartRecording] = React.useState<boolean>(false)
  const [prediction, setPrediction] = React.useState<string>("")
  const [recording, setRecording] = React.useState<MediaRecorder | null>(null)
  const [audioUrl, setAudioUrl] = React.useState<string>("")
  const onRecordingComplete = async (blob: Blob) => {
    setStartRecording(false)
    const formData = new FormData()
    formData.append("uploaded_file", blob)
    const audioUrl = URL.createObjectURL(blob)
    setAudioUrl(audioUrl)
    try {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_WHISPER_API_URL}/recognize/base_custom`,
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      )
      console.log(resp)
      const data = await resp.json()
      console.log(data)
    } catch (err) {
      console.log(err)
      toast.error("Error in recognizing the audio")
    }
  }

  const handleClick = () => {
    setStartRecording(true)
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const recorder = new MediaRecorder(stream)
      const chunks: Blob[] = []

      recorder.addEventListener("dataavailable", (event: BlobEvent) => {
        chunks.push(event.data)
      })

      recorder.addEventListener("stop", () => {
        const blob = new Blob(chunks, { type: "audio/wav" })
        onRecordingComplete(blob)
      })

      recorder.start()
      setRecording(recorder)
    })

    setCurrentAssessment(assessmentVariants.letter)
  }
  const stopRecording = () => {
    if (recording) {
      recording.stop()
      setRecording(null)
    }
  }
  return (
    <>
      {!startRecording ? (
        <Button onClick={handleClick}>
          <Mic />
          &nbsp; Start Recording
        </Button>
      ) : (
        <Button variant="destructive" onClick={stopRecording}>
          <CircleDot className="animate-pulse" />
          &nbsp; Stop Recording
        </Button>
      )}
    </>
  )
}
