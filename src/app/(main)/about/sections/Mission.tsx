"use client"
import React from "react"
import { Anton } from "next/font/google"
import { motion } from "framer-motion"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
})

const Mission = () => {
  return (
    <motion.div
      className="flex flex-col gap-4 pt-14 mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
    >
      <h1 className="text-lg lg:text-xl font-bold pt-4 text-yellow-500">
        Our Mission
      </h1>
      <h2
        className={`text-5xl lg:text-7xl font-bold w-full text-left uppercase ${anton.className}`}
      >
        Doubling reading and math outcomes in sub-saharan Africa through AI
        powered <span className="text-yellow-500">assesments</span>.
      </h2>
    </motion.div>
  )
}

export default Mission
