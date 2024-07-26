"use client"
import React from "react"
import ImpactStat from "./ImpactStat"
import heroImage from "../../../../public/hero.jpg"
import campImage from "../../../../public/screenshots/app/8.jpg"
import partnersImage from "../../../../public/screenshots/app/staff.png"
import groupingImage from "../../../../public/screenshots/app/holding.jpeg"

type Props = {}

export default function Impact({}: Props) {
  return (
    <div className="py-5 flex flex-col items-center">
      <div className="flex flex-col space-y-4 justify-center items-center">
      
        <h1 className="text-3xl sm:text-5xl tracking-lighter font-bold text-left">
          Impact
        </h1>
        {/* <p className="max-w-[900px] text-white-500 md:text-9xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed dark:text-white-400">
          We are committed to making a difference in the world. Here are some of the ways we have made an impact.
        </p> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 py-1 px-1 w-full">
      <ImpactStat
          title="40"
          suffix="+"
          description="LEARNING CAMPS \n \n \n 31% improvement in literacy and numeracy outcomes."
          image={campImage}
          imageWidth="300px" 
          imageHeight="550px"
        />
        <ImpactStat
          title="23000"
          suffix="+"
          description="CHILDREN \n \n \n  assessed to identify educational needs across diverse learning environments."
          image={groupingImage}
          imageWidth="300px" 
          imageHeight="550px"
        />
         <ImpactStat
          title="800"
          suffix="+"
          description="TEACHERS \n \n \n \n \n reached"
          image={heroImage}
          imageWidth="300px" 
          imageHeight="550px"
        />
      
        <ImpactStat
          title="15"
          suffix="+"
          description="ORGANIZATIONS \n \n partnered with across 5 countries to create a robust network for comprehensive child development."
          image={partnersImage}
          imageWidth="300px" 
          imageHeight="550px"
        />
       
      </div>
    </div>
  )
}
