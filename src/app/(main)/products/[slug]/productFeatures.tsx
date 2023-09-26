import SanityImage from "@/components/ui/SanityImage"
import React from "react"
export type Feature = {
  title: string
  description: string
  video: string
  icon: {
    asset: {
      _id: string
      metadata: {
        lqip: string
      }
    }
    description: string
  }
}
type Props = {
  features: Feature[]
}

export default function ProductFeatures({ features }: Props) {
  return (
    <div className="my-8 2xl:my-12">
      <h2 className="text-3xl font-bold text-center my-6">Features</h2>
      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-12 2xl:gap-16">
        {features.map((feature, i) => {
          return (
            <div
              key={i}
              className="flex items-center flex-col gap-4 text-center"
            >
              {feature.video ? (
                <video className="w-full h-auto" controls>
                  <source src={feature.video} type="video/mp4" />
                </video>
              ) : (
                <SanityImage
                  imageWidth={75}
                  altText={feature.title}
                  imageData={feature.icon}
                />
              )}
              <div>
                <h3 className="text-xl py-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
