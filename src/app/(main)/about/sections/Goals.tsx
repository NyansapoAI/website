"use client"
import React from "react"
import { motion } from "framer-motion"

// Define types for our goal data
interface GoalItem {
  title: string
  description: string
  color: string
}

const Goals: React.FC = () => {
  // Define our goals data with proper typing
  const goalsData: GoalItem[] = [
    {
      title: "LEARNERS",
      description:
        "Personalized assessment that offer real time feedback, making learning reading and math both fun and effective.",
      color: "#e67e22", // Updated to requested hex color
    },
    {
      title: "TEACHERS",
      description:
        "Assessments with 'superhuman' precision. Enabling them to deliver the right level of tutoring to each learner based on the unique needs.",
      color: "#4caf50", // Updated to requested hex color
    },
    {
      title: "SCHOOLS",
      description:
        "Access to smarter teaching. Guaranteed improved learning outcomes, and real-time data for decision making.",
      color: "#5aa2ce", // Updated to requested hex color
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
      className="w-full h-[200px] my-20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-8 w-full text-white">
        {goalsData.map((goal, index) => (
          <div
            key={index}
            className="flex flex-col items-start border-l border-gray-700 pl-4"
          >
            <div className="relative mb-4">{/* Trapezoid shape */}</div>

            {/* Title */}
            <h2
              className={`text-3xl font-bold mb-4`}
              style={{ color: goal.color }}
            >
              {goal.title}
            </h2>

            {/* Description */}
            <p className="text-base lg:text-xl">{goal.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Goals
