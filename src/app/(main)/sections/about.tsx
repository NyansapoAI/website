import React from "react"
import SectionHeader from "../components/SectionHeader"
import Slider from "../components/Slider"
import Link from "next/link"
import Gallery from "../components/ImageGallery"
type Props = {}

export default function About({}: Props) {
  return (
    <div
      id="about us"
      className="flex flex-col lg:flex-row-reverse  gap-12 lg py-8 lg:py-16 items-start justify-end"
    >
      <div className="flex flex-col items-left gap-4 justify-left ">
        <h1 className="text-3xl">About Us</h1>
        <div className="text-left flex flex-col gap-4 justify-center items-left">
          <p className="lg:max-w-xl text-lg">
            Our name, Nyansapo, means “wisdom knot” and this embodies the
            mission of our venture. We believe that if we help a  student build
            the proper foundation of skills, that “strong knot” of wisdom will
            carry them  throughout their future education. Nyansapo AI creates
            custom educational tools to  instructors to optimize their workflow.
            By saving instructors’ time and energy, they can maximize outcomes
            for their students, who are then more equipped to jump back into
            their  education.
          </p>
          <Link
            href="/company"
            className="px-6 py-3 rounded-full max-w-fit border-2 border-yellow-500"
          >
            Learn more
          </Link>
        </div>
      </div>
      <Gallery autoPlay={true} />
      {/* <Slider2 /> */}
    </div>
  )
}
