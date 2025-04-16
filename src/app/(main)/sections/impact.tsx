// impact.tsx
"use client"
import React from "react"
import ImpactStat from "./ImpactStat"
import campImage from "../../../../public/screenshots/app/stat1.jpg"
import groupingImage from "../../../../public/screenshots/app/stat3.jpg"
import partnersImage from "../../../../public/screenshots/app/stat2.jpg"

export default function Impact() {
  return (
    <div className="py-5 z-40 flex flex-col items-center">
      <div className="flex flex-col space-y-4 justify-center items-center">
        <h1 className="text-3xl sm:text-5xl tracking-lighter font-bold text-left">
          <span className="text-white">
            MAKING LEARNING VISIBLE AND ACTIONABLE FOR
          </span>
        </h1>
        {/* <p className="max-w-[900px] text-white-500 md:text-9xl/relaxed lg:text-4xl xl:text-4xl dark:text-white-400 bg-white/5 rounded-lg p-4">
          OVER <span className="text-yellow-500">200,000</span> ASSESSMENTS
          CONDUCTED
        </p> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 p-2 w-full max-w-[900px] md:flex md:flex-col lg:grid-cols-none lg:max-w-[1200px] lg:flex lg:flex-row mx-auto">
        <ImpactStat
          statNumber={23000}
          suffix="+"
          label="LEARNERS"
          description="Assessed with the help of over 800 teachers"
          image={groupingImage}
          imageWidth={{ default: "450px", lg: "650px" }}
          imageHeight="75vh"
        />
        <ImpactStat
          statNumber={30}
          label="COUNTIES"
          description="Across 5 countries reaching diverse populations"
          image={partnersImage}
          imageWidth={{ default: "450px", lg: "550px" }}
          imageHeight="75vh"
        />
        <ImpactStat
          statNumber={31}
          suffix="%"
          label="GAIN"
          description="in foundational literacy and numeracy with regular use"
          image={campImage}
          imageWidth={{ default: "450px", lg: "550px" }}
          imageHeight="75vh"
        />
      </div>
    </div>
  )
}
