import Image from "next/image"
import React from "react"
import image1 from "@imgs/hero/1.png"
type Props = {}

function HeroGallery({}: Props) {
  return (
    <div className="relative ">
      <div className="w-48 h-48 sm:h-64 sm:w-64 absolute left-10 bottom-0 rounded-full z-0 bg-cyan-600"></div>
      <div className="w-56 h-56 sm:h-80 sm:w-80 absolute top-0 right-10 rounded-full bg-cyan-200 z-0"></div>
      <div className="z-50  duration-300 relative">
        <Image
          src={image1.src}
          width={800}
          height={800}
          alt="children doing activities"
        />
      </div>
    </div>
  )
}

export default HeroGallery
