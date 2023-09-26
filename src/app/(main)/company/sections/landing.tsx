import React from "react"
import { Mark } from "@/app/sections/Mark"
import Gallery from "@/app/components/ImageGallery"

type Props = {}

export default function CompanyLanding({}: Props) {
  return (
    <div className="w-full flex flex-col items-center  justify-center min-h-screen">
      <div className="relative mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="w-full  px-4">
            <div className="flex flex-col items-center justify-start">
              <h1 className="font-bold mb-6 text-4xl ">
                We Leverage Artificial Intelligence to improving foundational
                Literacy and Numeracy skills
              </h1>
              <p className="leading-8 lg:max-w-xl">
                UNESCO estimates that <Mark>250 million</Mark> children cannot
                read, write or count well. Without these basic  foundational
                skills, students are unable to progress with their education. We
                partner with NGOs and other actors who provide education
                programs to equip as many children as possible to  have the
                foundational skills to learn well by offering and co -creating
                custom digital educational tools
              </p>
            </div>
          </div>
          <Gallery autoPlay={true} />
        </div>
      </div>
    </div>
  )
}
