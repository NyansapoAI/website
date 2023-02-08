import React from "react"
import SectionHeader from "../components/SectionHeader"
import Slider from "../components/Slider"
import Link from "next/link"
type Props = {}

export default function About({}: Props) {
  return (
    <div id="company" className="flex flex-col gap-4 items-center ">
      <SectionHeader pretitle="Who we are" title="About Us">
        <span className="w-full">
          Our name, Nyansapo, means “wisdom knot” and this embodies the mission
          of our venture. We believe that if we help a  student build the proper
          foundation of skills, that “strong knot” of wisdom will carry them 
          throughout their future education. Nyansapo AI creates custom
          educational tools to  instructors to optimize their workflow. By
          saving instructors’ time and energy, they can maximize outcomes for
          their students, who are then more equipped to jump back into their 
          education.
        </span>
      </SectionHeader>
      <Link
        href="/company"
        className="px-6 py-3 rounded-full border-2 border-yellow-500"
      >
        Learn more
      </Link>
      <Slider />
      {/* <Slider2 /> */}
    </div>
  )
}
