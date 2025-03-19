"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"

// Define types for our goal data
interface GoalItem {
  title: string
  description: string
  color: string
  icon: string // Added icon property for the card image
  image: string
}

const Goals: React.FC = () => {
  // Define our goals data with proper typing
  const goalsData: GoalItem[] = [
    {
      title: "LEARNERS",
      image: "/imgs/goals/learners.jpg",
      description:
        "Personalized assessment that offer real time feedback, making learning reading and math both fun and effective.",
      color: "#e67e22", // Updated to requested hex color
      icon: "/icons/learners-icon.svg", // Placeholder path, replace with actual icon
    },
    {
      title: "TEACHERS",
      image: "/imgs/goals/teachers.jpg",
      description:
        "Assessments with 'superhuman' precision. Enabling them to deliver the right level of tutoring to each learner based on the unique needs.",
      color: "#4caf50", // Updated to requested hex color
      icon: "/icons/teachers-icon.svg", // Placeholder path, replace with actual icon
    },
    {
      title: "SCHOOLS",
      image: "/imgs/goals/school.jpg",
      description:
        "Access to smarter teaching. Guaranteed improved learning outcomes, and real-time data for decision making.",
      color: "#5aa2ce", // Updated to requested hex color
      icon: "/icons/schools-icon.svg", // Placeholder path, replace with actual icon
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
      className="w-full my-20"
    >
      {/* Changed to use flex layout with centering and proper spacing similar to products */}
      <div className="flex flex-wrap justify-center gap-8 mx-auto">
        {goalsData.map((goal, index) => (
          <GoalCard goal={goal} key={index} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

type GoalCardProps = {
  goal: GoalItem
  index: number
}

const GoalCard = ({ goal, index }: GoalCardProps) => {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 w-full max-w-sm"
      style={{ backgroundColor: "white" }}
    >
      {/* Image section - visible on all screen sizes */}
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          src={goal.image}
          alt={goal.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content section */}
      <div
        style={{ backgroundColor: goal.color }}
        className="flex flex-col p-6 flex-grow"
      >
        <h1 className="text-xl sm:text-2xl mb-4 font-semibold text-white">
          {goal.title}
        </h1>
        <p className="tracking-wide text-white flex-grow">{goal.description}</p>
      </div>
    </div>
  )
}

export default Goals
