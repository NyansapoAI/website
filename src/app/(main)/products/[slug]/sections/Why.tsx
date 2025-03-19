"use client"
import React from "react"
import Image from "next/image"
import { PortableText, PortableTextReactComponents } from "@portabletext/react"

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

        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border-2 ${
                borderColors[index % borderColors.length]
              } transition-all duration-300`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-2 rounded-lg shrink-0"
                  style={{ backgroundColor: colors[index % colors.length] }}
                >
                  <Image
                    src={feature.icon.asset.url}
                    alt={feature.title}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Why
