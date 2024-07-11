"use client"
import React from "react"
import ImpactStat from "./ImpactStat"
import heroImage from "../../../../public/screenshots/app/teacher.jpeg"
import campImage from "../../../../public/screenshots/app/home-screen.jpg"
import partnersImage from "../../../../public/screenshots/app/newpartners.jpeg"
import groupingImage from "../../../../public/screenshots/app/grouping.jpeg"

type Props = {}

export default function Impact({}: Props) {
  return (
    <div className="py-16 flex flex-col items-center">
      <div className="flex flex-col space-y-4 justify-center items-center">
        <h1 className="text-3xl sm:text-5xl tracking-lighter font-bold text-left">
          Our Impact
        </h1>
        <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
          We are committed to making a difference in the world. Here are some of
          the ways we&apos;ve made an impact.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 py-12 px-7"> {/* Added px-4 for padding */}
        <ImpactStat
          title="5000"
          suffix="+"
          description="CHILDREN \n \n Assessed in schools around Kenya"
          image={groupingImage}
          imageWidth="250px" 
          imageHeight="350px"
        />
        <ImpactStat
          title="40"
          suffix="+"
          description="LEARNING CAMPS \n \n Conducted in Various Schools in Kenya"
          image={campImage}
          imageWidth="250px" 
          imageHeight="350px"
        />
        <ImpactStat
          title="15"
          description="ORGANIZATION \n \n \n Partnered with in Kenya"
          image={partnersImage}
          imageWidth="250px" 
          imageHeight="350px"
        />
        <ImpactStat
          title="200"
          suffix="+"
          description="TEACHERS \n \n Worked within the learning Camps we have been having"
          image={heroImage}
          imageWidth="250px" 
          imageHeight="350px"
        />
      </div>
    </div>
  )
}
