import React from "react"
import CompanyLanding from "./sections/landing"
import Locations from "./sections/Locations"
import NewsLetter from "./sections/NewsLetter"
import Partners from "./sections/partners"
import Research from "./sections/Research"
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
      <Research />
      <Team />
      <Locations />
      <Partners />
      <NewsLetter />
    </div>
  )
}
