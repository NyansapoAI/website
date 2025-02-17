"use client"
import React from "react"
import { Activity, Users, BarChart, Rocket } from "lucide-react"

interface Section {
  id: string
  title: string
  description: string
  icon: React.ElementType
  color: string
  borderColor: string
}

type SectionId = "agency" | "instruction" | "collaboration" | "innovation"

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
    instruction: {
      id: "instruction",
      title: "Real-Time Student Grouping",
      description:
        "Fixed learning groups can slow student progress. Our app dynamically adjusts groups based on real-time performance, ensuring each child gets the right support at the right time.",
      icon: Users,
      color: "rgb(52, 211, 153)", // emerald-400
      borderColor: "border-emerald-200",
    },
    collaboration: {
      id: "collaboration",
      title: "Data-Driven Instruction",
      description:
        "With automatic insights on student progress, teachers and program managers can identify struggling learners, personalize instruction, and make informed decisions to improve learning outcomes.",
      icon: BarChart,
      color: "rgb(59, 130, 246)", // blue-500
      borderColor: "border-blue-200",
    },
    innovation: {
      id: "innovation",
      title: "Scalable, High-Impact Programs",
      description:
        "By streamlining assessments and tracking learning gains, Nyansapo enables organizations and governments to run large-scale literacy and numeracy programs efficiently, maximizing impact with minimal effort.",
      icon: Rocket,
      color: "rgb(234, 88, 12)", // orange-600
      borderColor: "border-orange-200",
    },
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 mt-40">
          WHY CHOOSE NYANSAPO Teaching APP?
        </h1>

        <p className="text-center text-gray-700 text-lg mb-16">
          Nyansapo makes it easier and faster for education programs to assess,
          group, and support students in foundational literacy and numeracy.
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
