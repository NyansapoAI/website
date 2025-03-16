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
  statNumber: string | number
  suffix?: string
  label: string
  description: string
  image?: ImageType
  imageWidth?: string | { default: string; lg: string }
  imageHeight?: string | { default: string; lg: string }
}

const ImpactStat = ({
  statNumber,
  suffix = "",
  label,
  description,
  image,
  imageWidth,
  imageHeight,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false)

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

      {/* Content container with layered stats */}
      <div className="relative z-10 flex flex-col p-4 rounded-lg w-full">
        {/* Large number display with CountUp */}
        <div
          className={`text-6xl sm:text-7xl font-bold ${anton.className} text-yellow-500`}
        >
          <CountUp
            start={0}
            end={Number(statNumber)}
            enableScrollSpy
            separator=","
          >
            {({ countUpRef }) => (
              <div className="flex items-center">
                <span ref={countUpRef} />
                <span>{suffix}</span>
              </div>
            )}
          </CountUp>
        </div>

        {/* Bold label */}
        <div className="text-2xl sm:text-3xl font-extrabold uppercase mt-2 text-white">
          {label}
        </div>

        {/* Description text */}
        <div className="text-lg mt-2 text-white-200">{description}</div>
      </div>
    </div>
  )
}

export default ImpactStat
