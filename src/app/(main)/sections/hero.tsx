"use client"
import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { CTAButton } from "../CTAButton"
import { cn } from "@/lib/utils"
import { Anton, Playfair_Display } from "next/font/google"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
})

type Props = {}

const carouselImgs = [
  { src: "/imgs/hero/background/bg3.webp", alt: "Hero Background" },
  { src: "/imgs/hero/background/bg2.webp", alt: "Hero Background" },
  { src: "/imgs/hero/background/bg1.webp", alt: "Hero Background" },
]

export default function Hero({}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex)
      setCurrentIndex((prev) =>
        prev === carouselImgs.length - 1 ? 0 : prev + 1
      )
    }, 7000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section className="relative min-h-screen overflow-hidden text-white bg-black">
      <div className="absolute inset-0 z-0">
        {/* Previous Image for Smooth Crossfade */}
        {prevIndex !== null && (
          <motion.div
            key={prevIndex}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={carouselImgs[prevIndex].src}
              alt={carouselImgs[prevIndex].alt}
              fill
              className="object-cover"
              priority
              quality={100}
            />
          </motion.div>
        )}

        {/* Current Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={carouselImgs[currentIndex].src}
            alt={carouselImgs[currentIndex].alt}
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.15)_100%)]" />
        </motion.div>
      </div>

      <div className="relative z-30 flex w-full h-screen bg-gradient-to-t from-black items-center justify-center">
        <div className="flex flex-col items-center justify-end relative translate-y-24">
          <div className="text-2xl lg:text-sm font-bold leading-snug tracking-tight lg:leading-tight xl:text-4xl xl:leading-tight 2xl:leading-tight mb-4">
            <div className="flex flex-col gap-2 text-center">
              <br />
              <br />
              <p className={`hero-header ${anton.className}`}>
                Maximize learning with AI Powered Assessments
              </p>
            </div>
          </div>
          <div
            className={`hero-text text-center py-4 text-lg leading-normal max-w-4xl text-white ${playfairDisplay.className}`}
          >
            Improve learning outcomes through data driven assessments solutions
            for students, teachers and schools.
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <CTAButton />
            <button
              onClick={() => setIsOpen(true)}
              className="text-accent2 border-2 px-4 py-2 rounded-md border-accent2 flex gap-x-3 items-center"
            >
              <Link href="/about" className={cn()}>
                Learn more
              </Link>
            </button>
            <br />
          </div>
        </div>
      </div>
    </section>
  )
}
