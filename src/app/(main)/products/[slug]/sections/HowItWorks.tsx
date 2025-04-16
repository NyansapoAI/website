"use client"

// components/HowItWorks.tsx
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

// Types definition
interface Step {
  id: number
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  imagePosition: "left" | "right"
  dotColor: string
}

// Constant data
const HOW_IT_WORKS_DATA: Step[] = [
  {
    id: 1,
    title: "Teachers assign assessments",
    description:
      "This is conducted during lessons or designated checkpoints. The assessments are aligned with Kenya's Competency Based Curriculum (CBC) and focus on language and mathematics activities.",
    imageSrc: "/imgs/gallery/1.png",
    imageAlt: "Teacher assigning assessments",
    imagePosition: "left",
    dotColor: "bg-blue-500",
  },
  {
    id: 2,
    title: "Learners complete assessments",
    description:
      "With an option for immediate feedback where speech-to-text is leveraged for literacy assessments and computer vision for some numeracy assessments. The app offers hints and explanations to help learners understand mistakes made and further reinforce concepts.",
    imageSrc: "/imgs/gallery/2.png",
    imageAlt: "Student completing assessment",
    imagePosition: "right",
    dotColor: "bg-pink-500",
  },
  {
    id: 3,
    title: "Teachers access real-time student and class data",
    description:
      "This allows them to dynamically group learners based on their learning levels aligned to the CBC curriculum, access student performance indicators, plan instruction to focus on challenging areas and assign interactive activities suited for different levels.",
    imageSrc: "/imgs/gallery/3.png",
    imageAlt: "Teacher analyzing student data",
    imagePosition: "left",
    dotColor: "bg-green-500",
  },
  {
    id: 4,
    title: "School leaders and parents access the platform",
    description:
      "They can assess the platform through simplified progress records, gaining insights into student performance and educational progress.",
    imageSrc: "/imgs/gallery/5.png",
    imageAlt: "School leaders and parents viewing progress records",
    imagePosition: "right",
    dotColor: "bg-yellow-500",
  },
]

// StepItem Component
const StepItem: React.FC<{ step: Step }> = ({ step }) => {
  const isLeft = step.imagePosition === "left"

  return (
    <div className="flex flex-col md:flex-row items-center justify-between my-8 md:my-16 relative">
      {/* Dot indicator (only visible on mobile) */}
      <div
        className={`absolute -left-3 top-0 h-6 w-6 rounded-full ${step.dotColor} md:hidden`}
      ></div>

      {/* Left-side content */}
      <div
        className={`w-full md:w-1/2 ${
          isLeft ? "order-2 md:pl-6" : "order-2 md:order-1 md:pr-6"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3"
        >
          <h3 className="text-lg font-semibold mb-1 text-black">
            {step.title}
          </h3>
          <p className="text-gray-700 text-sm md:text-base">
            {step.description}
          </p>
        </motion.div>
      </div>

      {/* Image with dot (colored circle) */}
      <div
        className={`w-full md:w-1/2 relative ${
          isLeft ? "order-1 mb-4 md:mb-0" : "order-1 md:order-2 mb-4 md:mb-0"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div
            className={`absolute ${
              isLeft ? "-left-3" : "-right-3"
            } -bottom-3 h-8 w-8 rounded-full ${step.dotColor} hidden md:block`}
          ></div>
          <div className="rounded-lg overflow-hidden shadow-md max-w-xs mx-auto md:max-w-md lg:max-w-lg">
            <Image
              src={step.imageSrc}
              alt={step.imageAlt}
              width={400}
              height={350}
              className="w-full object-cover object-top h-[200px] md:h-[250px] lg:h-[280px]"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Main Component
const HowItWorks: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 relative overflow-hidden bg-white">
      {/* Dotted blue arc background (only visible on desktop) */}
      <div className="hidden lg:block absolute top-0 right-0 w-full h-full pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,0 Q300,100 600,400 T1300,800"
            stroke="#4299e1"
            strokeWidth="4"
            strokeDasharray="20 20"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-700">
            How It Works
          </h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            How the Nyansapo Teaching App works to support learning in Kenyan
            schools
          </p>
        </motion.div>

        <div className="space-y-6 md:space-y-0">
          {HOW_IT_WORKS_DATA.map((step) => (
            <StepItem key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
