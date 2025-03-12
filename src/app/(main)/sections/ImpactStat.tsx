// ImpactStat.tsx
import React, { useState } from "react"
import CountUp from "react-countup"
import { StaticImageData } from "next/image"
import { Anton } from "next/font/google"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
})

type ImageType = string | StaticImageData

type Props = {
  content: string
  image?: ImageType
  imageWidth?: string | { default: string; lg: string }
  imageHeight?: string | { default: string; lg: string }
}

const KEYWORDS = [
  "learners",
  "teachers",
  "counties",
  "countries",
  "maths",
  "languages",
  "gain",
]

const ImpactStat = ({ content, image, imageWidth, imageHeight }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  const renderContent = () => {
    const parts = content.split(/(\d+[%+]?|\b)/gi)

    return parts.map((part, index) => {
      const numberMatch = part.match(/(\d+)([%+]?)/)
      const isKeyword = KEYWORDS.some(
        (keyword) => part.toLowerCase() === keyword.toLowerCase()
      )

      if (numberMatch) {
        const [, number, suffix] = numberMatch
        return (
          <CountUp
            key={index}
            start={0}
            end={parseInt(number)}
            suffix={suffix}
            enableScrollSpy
            className="text-yellow-500 inline-block"
          >
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
        )
      }

      if (isKeyword) {
        return (
          <span key={index} className="text-yellow-500">
            {part}
          </span>
        )
      }

      return <span key={index}>{part}</span>
    })
  }

  return (
    <div
      className="flex flex-col items-center !w-[90vw] justify-center p-4 lg:w-[30vw] rounded-lg text-white relative my-9 overflow-hidden"
      style={{
        width: typeof imageWidth === "object" ? imageWidth.default : imageWidth,
        height:
          typeof imageHeight === "object" ? imageHeight.default : imageHeight,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-300"
        style={{
          backgroundImage: image
            ? `url(${typeof image === "string" ? image : image.src})`
            : "none",
          filter: isHovered ? "blur(1px)" : "blur(0px)",
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative z-10">
        <p
          className={`text-5xl text-left font-bold uppercase ${anton.className}`}
        >
          {renderContent()}
        </p>
      </div>
    </div>
  )
}

export default ImpactStat
