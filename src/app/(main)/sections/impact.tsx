// impact.tsx
"use client"
import React from "react"
import ImpactStat from "./ImpactStat"
import campImage from "../../../../public/screenshots/app/8.jpg"
import groupingImage from "../../../../public/screenshots/app/holding.jpeg"
import partnersImage from "../../../../public/screenshots/app/staff.png"

export default function Impact() {
  return (
    <div className="py-5 z-40 flex flex-col items-center">
      <div className="flex flex-col space-y-4 justify-center items-center">
        <h1 className="text-3xl sm:text-5xl tracking-lighter font-bold text-left">
          <span className="text-white">
            MAKING AN IMPACT ACROSS KENYAN CLASSROOMS
          </span>
        </h1>
        <p className="max-w-[900px] text-white-500 md:text-9xl/relaxed lg:text-xl xl:text-2xl dark:text-white-400 bg-white/5 rounded-lg p-4">
          OVER <span className="text-yellow-500">200,000</span> ASSESSMENTS
          CONDUCTED
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 py-1 px-1 w-full max-w-[900px] mx-auto">
        <ImpactStat
          content="By more than 23000 learners and 800 teachers"
          image={groupingImage}
          imageWidth={{ default: "300px", lg: "550px" }}
          imageHeight="60vh"
        />
        <ImpactStat
          content="Across 30 counties and 5 countries"
          image={partnersImage}
          imageWidth={{ default: "300px", lg: "550px" }}
          imageHeight="60vh"
        />
        <ImpactStat
          content="Studies shown proven gain in maths and languages with regular use"
          image={campImage}
          imageWidth={{ default: "300px", lg: "550px" }}
          imageHeight="60vh"
        />
      </div>
    </div>
  )
}
