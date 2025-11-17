"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Anton, Playfair_Display } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400" });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], weight: "400" });

// List all your 9 images
const backgroundImages = [
  "/imgs/gallery/1.jpg",
  "/imgs/gallery/2.jpg",
  "/imgs/gallery/3.jpg",
  "/imgs/gallery/4.jpg",
  "/imgs/gallery/5.jpg",
  "/imgs/gallery/6.jpg",
  "/imgs/gallery/7.jpg",
  "/imgs/gallery/8.jpg",
  "/imgs/gallery/9.jpg",
];

export default function ResourcesHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white bg-black">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={backgroundImages[currentIndex]}
              alt={`Hero background ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority
              quality={95}
            />
          </motion.div>
        </AnimatePresence>

        {/* Darkening overlay (keeps text readable) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Content */}
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

      {/* Optional: Little dots indicator at bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2">
        {backgroundImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}