"use client"
import React, { useState } from "react"
import Image from "next/image"
import { PortableText, PortableTextReactComponents } from "@portabletext/react"
import { motion } from "framer-motion"

interface Feature {
  title: string
  description: string
  icon: {
    asset: {
      url: string
    }
  }
}

interface WhyProps {
  whyNyansapoTitle: string
  whyNyansapoSummary: any[] // Changed from string to any[] for Portable Text
  features: Feature[]
}

const Why: React.FC<WhyProps> = ({
  whyNyansapoTitle,
  whyNyansapoSummary,
  features,
}) => {
  const colors = [
    "rgb(190, 24, 93)",
    "rgb(52, 211, 153)",
    "rgb(59, 130, 246)",
    "rgb(234, 88, 12)",
  ]
  const borderColors = [
    "border-rose-200",
    "border-emerald-200",
    "border-blue-200",
    "border-orange-200",
  ]

  // Custom components for rendering the rich text with correct type structure
  const components: Partial<PortableTextReactComponents> = {
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc pl-6 mb-4 text-gray-700 text-lg">
          {children}
        </ul>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className="mb-1">{children}</li>,
    },
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 mt-40">
          {whyNyansapoTitle}
        </h1>

        <div className="text-center text-gray-700 text-lg mb-16">
          {whyNyansapoSummary ? (
            <PortableText value={whyNyansapoSummary} components={components} />
          ) : (
            <p>No summary available</p>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <FlipCard 
              key={index} 
              feature={feature} 
              color={colors[index % colors.length]} 
              borderColor={borderColors[index % borderColors.length]} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

interface FlipCardProps {
  feature: Feature;
  color: string;
  borderColor: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ feature, color, borderColor }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className="perspective-1000 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(50%-2rem)] min-h-[300px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front of card */}
        <motion.div
          className={`absolute w-full h-full rounded-lg border-2 ${borderColor} flex flex-col items-center justify-center p-8 backface-hidden`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div
            className="p-4 rounded-lg mb-4"
            style={{ backgroundColor: color }}
          >
            <Image
              src={feature.icon.asset.url}
              alt={feature.title}
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-800">
            {feature.title}
          </h3>
        </motion.div>
        
        {/* Back of card */}
        <motion.div
          className={`absolute w-full h-full rounded-lg border-2 ${borderColor} p-8 flex flex-col items-center justify-center backface-hidden`}
          style={{ 
            backgroundColor: color,
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            color: "white"
          }}
        >
          <h3 className="text-xl font-semibold mb-4 text-center">
            {feature.title}
          </h3>
          <p className="text-center">{feature.description}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Why
