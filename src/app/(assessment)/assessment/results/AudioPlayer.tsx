import { Pause, Play } from "lucide-react"
import React from "react"

type Props = {
  audioLink: string
}

export default function AudioPlayer({ audioLink }: Props) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const audio = React.useMemo(() => new Audio(audioLink), [audioLink])

  const handleClick = () => {
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }
  React.useEffect(() => {
    const currentAudio = audio
    currentAudio.addEventListener("ended", () => {
      setIsPlaying(false)
    })
    return () => {
      currentAudio.removeEventListener("ended", () => {
        setIsPlaying(false)
      })
      audio.pause()
      audio.currentTime = 0
      setIsPlaying(false)
    }
  }, [audio])

  return (
    <button
      className="flex items-center justify-center hover:scale-110 duration-200 "
      onClick={handleClick}
    >
      {isPlaying ? <Pause /> : <Play />}
    </button>
  )
}
