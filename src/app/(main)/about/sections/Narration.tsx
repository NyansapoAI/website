"use client"
import React from "react"
import { motion } from "framer-motion"

const Narration = () => {
  return (
    <motion.div
      className="p-4 lg:border-l-2 border-l-white lg:ml-[30vw] xl:ml-[40vw]"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
    >
      <p className="font-normal text-white text-[20px] lg:text-[28px] leading-[30px] mt-4 mb-4">
        Our name, Nyansapo, means “wisdom knot” and this embodies the mission of
        our venture. We believe that if we help a student build the proper
        foundation of skills, that “strong knot” of wisdom will carry them
        throughout their future education. Nyansapo AI creates custom
        educational tools to instructors to optimize their workflow. By saving
        instructors’ time and energy, they can maximize outcomes for their
        students, who are then more equipped to jump back into their education.
      </p>
    </motion.div>
  )
}

export default Narration
