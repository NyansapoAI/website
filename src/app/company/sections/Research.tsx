import RocketLaunchIcon from "@/app/components/icons/RocketLaunchIcon"
import { Mark } from "@/app/sections/Mark"
import Image from "next/image"
import React from "react"

type Props = {}

export default function Research({}: Props) {
  return (
    <div className="flex py-8 flex-wrap gap-12 items-center justify-between ">
      <div className=" flex-1 items-end">
        <Image
          width={600}
          className="aspect-auto w-full h-full"
          height={600}
          src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"
          alt="research illustration"
        />
      </div>
      <div className="w-full px-4 md:w-1/2">
        <div className="w-8 h-8 mb-4">
          <RocketLaunchIcon />
        </div>

        <h1 className=" text-4xl xl:text-4xl mb-6">Research and Development</h1>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 ">
          At NyansapoAI we do not just develop technology for technology&apos;s
          sake, but rather we work with our partners and develop solutions that
          drive real growth for our partners.
        </p>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4">
          In order to understand our partners and stakeholders, we have
          interviewed <Mark>30+</Mark> managers from <Mark>15 </Mark> NGOs from
          Kenya, Uganda, Mozambique, Botswana and Tanzania and
          <Mark>50+</Mark> bootcamp instructors. We have operated
          <Mark>20+</Mark> learning camps targeting <Mark>1000+</Mark> children
          to test and improve our solutions.
        </p>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4">
          At NyansapoAI, we listen and we develop solutions for our partners
        </p>
      </div>
    </div>
  )
}
