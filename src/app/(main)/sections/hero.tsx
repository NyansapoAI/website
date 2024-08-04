"use client"
import React, { useState } from "react"
import HeroGallery from "@/app/(main)/components/HeroGallery"
import Link from "next/link"
import Video from "../components/Video"
import { CTA_TEXT } from "@/constants"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { CTAButton } from "../CTAButton"
import { cn } from "@/lib/utils"


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
      <div className="flex flex-col  items-center justify-end relative translate-y-24 text-center">
        {/* <div className="max-w-7xl bg-blue-900 bg-opacity-10 backdrop-blur-lg p-4"> */}
        <div className="text-2xl lg:text-sm font-bold leading-snug tracking-tight lg:leading-tight xl:text-4xl xl:leading-tight 2xl:leading-tight mb-4">
    <div className="flex flex-col gap-2">
          <br/>
          <br/>
            <p>
                {/* <span className="text-cyan-500">A</span> */}
                {/* <span className="text-yellow-500">AI</span>&nbsp;for Children Read, Count & Shine */}
                <span className="text-blue-500">AI FOR CHILDREN:</span> <span className="text-yellow-500 italic">READ, COUNT & SHINE</span>

            </p>
            {/* <span>Read, Count & Shine</span> */}
        </div>
    </div>
    <div className="py-4 text-lg leading-normal max-w-4xl text-white ">
    We work in Sub-Saharan Africa to help educators enhance childrens literacy and numeracy using AI-driven assessments and tailored lesson plans through partnering with NGOs and government to reach 3 million students by 2027, because 90% of children struggle with basic reading and math skills.
    </div>
{/* </div> */}

          <div className="flex flex-wrap gap-4 justify-center items-center ">
            <CTAButton />
            <button
              onClick={() => setIsOpen(true)}
              className="text-accent2 border-2 px-4 py-2 rounded-md border-accent2 flex gap-x-3 items-center "
            >
              
              <Link
                        href="/about"
                        className={cn(
                          // buttonVariants({ variant: "default" }),
                          // "text-lg bg-sky-500 hover:bg-sky-400 text-slate-100"
                        )}
                      >
                        Learn more
                      </Link>
            </button>
            <br/>
      
          </div>
        </div>
      </div>
    </section>
  )
}
