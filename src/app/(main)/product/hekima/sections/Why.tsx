"use client"
import React from "react"
import { Activity, Users, BarChart, Rocket } from "lucide-react"

interface Section {
  id: string
  title: string
  description: string | React.ReactNode
  icon: React.ElementType
  color: string
  borderColor: string
}

type SectionId = "agency" | "grouping" | "outcomes" | "impact"

type Sections = {
  [K in SectionId]: Section
}

const Why = () => {
  const sections: Sections = {
    agency: {
      id: "agency",
      title: "Faster, Smarter Assessments",
      description:
        "Traditional assessments are time-consuming, delaying instruction. Nyansapo digitizes EGRA, EGMA, and Uwezo assessments, delivering instant results so learning can begin immediately.",
      icon: Activity,
      color: "rgb(190, 24, 93)", // rose-600
      borderColor: "border-rose-200",
    },
    grouping: {
      id: "grouping",
      title: "Real-Time Student Grouping",
      description: (
        <span>
          Our app dynamically groups students based on performance: Exceeding (
          <span className="text-blue-600">Blue</span>), Meets (
          <span className="text-green-600">Green</span>), Approaching (
          <span className="text-amber-600">Amber</span>), and Below Expectation
          (<span className="text-red-600">Red</span>). Groups automatically
          adjust as students progress.
        </span>
      ),
      icon: Users,
      color: "rgb(37, 99, 235)", // blue-600
      borderColor: "border-blue-200",
    },
    outcomes: {
      id: "outcomes",
      title: "Guaranteed Improved Learning",
      description:
        "Track accuracy, analyze consistency, and measure speed of recall. Our powerful analytics help teachers refine teaching strategies and ensure student mastery of concepts.",
      icon: BarChart,
      color: "rgb(22, 163, 74)", // green-600
      borderColor: "border-green-200",
    },
    impact: {
      id: "impact",
      title: "Scalable Impact",
      description:
        "Enhance collaboration across teachers, administrators, and parents with instant reports, school-wide dashboards, and simplified progress summaries for home support.",
      icon: Rocket,
      color: "rgb(217, 119, 6)", // amber-600
      borderColor: "border-amber-200",
    },
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 mt-40">
          WHY CHOOSE HEKIMA LEARNING?
        </h1>

        <p className="text-center text-gray-700 text-lg mb-16">
          Superhuman&apos; precision, enabling them to deliver the right level
          of tutoring to each learner based on their unique needs
        </p>

        <div className="space-y-6">
          {(Object.entries(sections) as [SectionId, Section][]).map(
            ([id, section]) => (
              <div
                key={id}
                className={`p-6 rounded-lg border-2 ${section.borderColor} transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="p-2 rounded-lg shrink-0"
                    style={{ backgroundColor: section.color }}
                  >
                    <section.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {section.title}
                    </h3>
                    <p className="text-gray-700">{section.description}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Why
