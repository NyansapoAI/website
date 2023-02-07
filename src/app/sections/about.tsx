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
          Our company is committed to leveraging technology to improve literacy
          and numeracy competencies for primary school learners in Kenya. Our
          team, consisting of educators, technologists, and learning experts,
          has created a variety of innovative products that have successfully
          assisted numerous learners in improving their reading, writing, and
          communication abilities.
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
