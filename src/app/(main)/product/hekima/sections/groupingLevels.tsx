import React from "react"

interface GroupingLevel {
  level: string
  color: string
  description: string
}

const groupingLevels: GroupingLevel[] = [
  {
    level: "Exceeding Expectation",
    color: "bg-blue-500",
    description: "Students who demonstrate mastery",
  },
  {
    level: "Meets Expectation",
    color: "bg-green-500",
    description: "Students performing at grade level",
  },
  {
    level: "Approaching Expectation",
    color: "bg-amber-500",
    description: "Students needing moderate support",
  },
  {
    level: "Below Expectation",
    color: "bg-red-500",
    description: "Students requiring intensive intervention",
  },
]

const GroupingLevelsComponent: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto text-center p-6">
      <h2 className="text-2xl font-bold mb-6">
        Ensure your math curriculum is impactful and consistent.
      </h2>
      <div className="space-y-4">
        {groupingLevels.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-100 rounded-lg p-4 shadow-sm"
          >
            <span
              className={`${item.color} text-white font-bold px-4 py-2 rounded-lg mr-4`}
            >
              {index + 1}
            </span>
            <p className="text-left text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GroupingLevelsComponent
