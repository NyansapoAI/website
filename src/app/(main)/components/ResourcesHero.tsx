"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Anton, Playfair_Display } from "next/font/google"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
})

export default function ResourcesHero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white bg-black">
      <div className="absolute inset-0 z-0">
        {/* Static Background Image (no carousel for simplicity; adapt if needed) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/imgs/hero/background/bg3.webp"
            alt="Research & Reports"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Radial Gradient Overlay for similar darkening effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.15)_100%)]" />
        </motion.div>
      </div>

      <div className="relative z-30 flex w-full h-screen bg-gradient-to-t from-black items-center justify-center px-4 sm:px-8">
        <div className="flex flex-col items-center justify-end relative translate-y-16 sm:translate-y-24">
          <div className="text-xl sm:text-2xl lg:text-sm font-bold leading-snug tracking-tight lg:leading-tight xl:text-4xl xl:leading-tight 2xl:leading-tight mb-4">
            <div className="flex flex-col gap-2 text-center">
              <br />
              <br />
              <p className={`hero-header ${anton.className}`}>
                RESEARCH & REPORTS
              </p>
            </div>
          </div>
          <div
            className={`hero-text text-center py-4 text-base sm:text-lg leading-normal max-w-4xl text-white ${playfairDisplay.className}`}
          >
            Access our comprehensive collection of research papers, case studies, and impact reports
          </div>
        </div>
      </div>
    </section>
  )
}