"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { CircleDot, Mic } from "lucide-react"
import { assessmentVariants } from "./Assessment"
import toast from "react-hot-toast"
import { WhisperApiResponse } from "./start/types"
import Spinner from "@/components/ui/spinner"
import Lottie from "lottie-react"
import vocals from "@/lottie/vocals.json"
import EnablePermissions from "./EnablePermissions"
type RecordButtonProps = {
  setCurrentItem: React.Dispatch<React.SetStateAction<number>>
  callback: (response: WhisperApiResponse) => void
}
export const RecordButton = ({
  setCurrentItem,
  callback,
}: RecordButtonProps) => {
  const [startRecording, setStartRecording] = React.useState<boolean>(false)
  const [processing, setProcessing] = React.useState<boolean>(false)
  const [open, setOpen] = React.useState<boolean>(false)
  const [recording, setRecording] = React.useState<MediaRecorder | null>(null)
  const [audioUrl, setAudioUrl] = React.useState<string>("")
  const onRecordingComplete = async (blob: Blob) => {
    setStartRecording(false)
    const formData = new FormData()
    formData.append("uploaded_file", blob)
    const startTime = Date.now()

    try {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_WHISPER_API_URL}/recognize/base_custom`,
        {
          method: "POST",
          body: formData,
        }
      )
      const data = (await resp.json()) as WhisperApiResponse
      const endTime = Date.now()
      const duration = endTime - startTime
      callback({
        ...data,
        duration: duration,
      })
      setProcessing(false)
    } catch (err) {
      console.log(err)
      toast.error("Error in recognizing the audio")
      setProcessing(false)
    }
  }
  function isBrowserSupported() {
    const majorBrowsers = [
      "Chrome",
      "Firefox",
      "Safari",
      "Edge",
      "Opera",
      "Chromium",
    ]
    const userAgent = navigator.userAgent
    return majorBrowsers.some((browser) => userAgent.includes(browser))
  }
  const handleClick = () => {
    setStartRecording(true)
    if (!isBrowserSupported()) {
      toast.error(
        "Your browser is not supported. Please use Chrome, Firefox, Safari, Edge, Opera, Internet Explorer, Brave, Vivaldi, Tor or Chromium.",
        { duration: 10000 }
      )
      return
    }
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const recorder = new MediaRecorder(stream)
      const chunks: Blob[] = []

      recorder.addEventListener("dataavailable", (event: BlobEvent) => {
        chunks.push(event.data)
      })

      recorder.addEventListener("stop", () => {
        const blob = new Blob(chunks, { type: "audio/wav" })
        const audioUrl = URL.createObjectURL(blob)
        setAudioUrl(audioUrl)
        setProcessing(true)
        onRecordingComplete(blob)
      })

      recorder.start()
      setRecording(recorder)
    })
  }
  const stopRecording = () => {
    if (recording) {
      recording.stop()
      setRecording(null)
    } else {
      setOpen(true)
    }
  }
  return (
    <div className="mt-6 md:mt-2">
      <EnablePermissions open={open} setOpen={setOpen} />
      {!startRecording ? (
        <Button
          className="p-6 md:py-4"
          disabled={processing}
          onClick={handleClick}
        >
          {processing ? (
            <>
              <Spinner />
            </>
          ) : (
            <p className="flex gap-1 items-center">
              <Mic size={30} className="" />
              <span className="hidden sm:flex">Start Recording</span>
            </p>
          )}
        </Button>
      ) : (
        <Button
          className="p-6 md:py-4"
          variant="destructive"
          onClick={stopRecording}
        >
          {/* <CircleDot className="animate-pulse" /> */}
          <Lottie className="w-10 h-8  " animationData={vocals} loop={true} />
          &nbsp;Stop Recording
        </Button>
      )}
    </div>
  )
}
