import React from "react"
import Image from "next/image"

interface AwardLogo {
  asset: {
    url: string
    metadata: {
      lqip: string
    }
  }
  alt?: string
}

interface AwardsProps {
  title: string
  description: string
  awardLogos: AwardLogo[]
}

const Awards: React.FC<AwardsProps> = ({ title, description, awardLogos }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-pink-600">
          {title || "Awards and Accolades"}
        </h2>

        <p className="text-center text-green-600 text-lg mb-12 max-w-3xl mx-auto">
          {description ||
            "Recognized as one of the Strongest Foundational Literacy and Numeracy Assessment Solutions"}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {awardLogos.map((logo, index) => (
            <div
              key={index}
              className="relative w-full h-24 transition-transform hover:scale-105"
            >
              <div className="flex items-center justify-center h-full">
                <Image
                  src={logo.asset.url}
                  alt={logo.alt || `Awards logo ${index + 1}`}
                  width={200}
                  height={180}
                  className="object-contain max-h-24"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Awards
