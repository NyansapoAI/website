"use client"
import React, { useState } from "react"
import HeroGallery from "@components/HeroGallery"
import Link from "next/link"
import Video from "../components/Video"
import { CTA_TEXT } from "@/constants"
import Image from "next/image"

type Props = {}

export default function Hero({}: Props) {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <section className="relative min-h-screen  text-white  bg-no-repeat bg-cover w-full">
      {/* <Video isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      <video
        autoPlay={true}
        loop
        muted
        width="320"
        controls
        height="180"
        className="absolute object-cover w-full h-full top-0 left-0 z-0 "
      >
        <source
          src="https://res.cloudinary.com/dkhw5zfzf/video/upload/v1692707107/5410154f-642b-4165-9548-9e3906aa6ad4_mczi1q.mp4"
          type="video/mp4"
        />
      </video>
      <div className="relative z-30 flex w-full h-screen bg-gradient-to-t from-black items-center justify-center">
        <div className=" flex-col gap-8 items-center justify-end  relative translate-y-24  text-center">
          <div className="max-w-xl">
            <div className="text-4xl lg:text-5xl font-bold leading-snug tracking-tight lg:leading-tight xl:text-6xl  xl:leading-tight 2xl:leading-tight">
              <div className="flex flex-col gap-2">
                <p>
                  <span className="text-cyan-500">A</span>
                  <span className="text-yellow-500">I</span>&nbsp;for children
                </p>
                <span>read, count & shine</span>
              </div>
            </div>
            <p className="py-4 text-lg leading-normal  max-w-lg text-gray-300">
              We partner with organizations to support and scale literacy and
              numeracy interventions by leveraging AI
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-4 py-2 text-lg font-medium text-center text-accent-foreground bg-accent rounded-md inine "
            >
              {CTA_TEXT}
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              className="text-accent2 border-2 px-4 py-2 rounded-md border-accent2 flex gap-x-3 items-center "
            >
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
