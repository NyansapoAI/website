import React from "react"
import CompanyLanding from "./sections/landing"
import Story from "./sections/Story"
import Team from "./sections/Team"
import Values from "./sections/Values"

type Props = {}

export default function page({}: Props) {
  return (
    <div className="text-dark dark:text-white">
      <CompanyLanding />
      <Values />
      <Story />
      <Team />
    </div>
  )
}
