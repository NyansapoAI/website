"use client"
import React from "react"
import ImpactStat from "../../sections/ImpactStat"
import { motion } from "framer-motion"

const imagesBg = {
  campImage: "screenshots/app/8.jpg",
  groupingImage: "screenshots/app/holding.jpeg",
  partnersImage: "screenshots/app/staff.png",
}

const Goals = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 lg:gap-0 py-1 px-1 w-full">
        <ImpactStat
          statNumber={1}
          label="FEEDBACK"
          description="Immediate reading and math feedback for children"
          image={imagesBg.campImage}
          imageWidth="300px"
          imageHeight="60vh"
        />
        <ImpactStat
          statNumber={2}
          label="DATA"
          description="Actionable learning data for teachers"
          image={imagesBg.groupingImage}
          imageWidth="300px"
          imageHeight="60vh"
        />
        <ImpactStat
          statNumber={3}
          label="SUPPORT"
          description="Intervention Support tools for high impact programs by government and NGOs"
          image={imagesBg.partnersImage}
          imageWidth="300px"
          imageHeight="60vh"
        />
      </div>
    </motion.div>
  )
}

export default Goals
