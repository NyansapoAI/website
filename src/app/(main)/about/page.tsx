import { Separator } from "@/components/ui/separator"
import { Metadata } from "next"
import React from "react"
import CompanyLanding from "./sections/landing"
import Locations from "./sections/Locations"
import NewsLetter from "./sections/NewsLetter"
import Research from "./sections/Research"
import Story from "./sections/Story"
import Team from "./sections/Team"
import Values from "./sections/Values"

type Props = {}
export const metadata: Metadata = {
  title: "Company",
  description: "about Nyansapo AI",
  keywords: [
    "nyansapoAI",
    "nyansapo AI",
    "Nyansapo AI",
    "Nyansapo",
    "nyansapo",
    "Nyansapo Artificial Intelligence",
    "literacy and numeracy bootcamps",
    "teaching at the right level",
    "accelerated learning",
  ],
}
export const revalidate = 86400
export default function page({}: Props) {
  return (
    <div className="text-dark dark:text-white mt-20 px-8 md:px-16 xl:px-32 2xl:px-64 mx-auto max-w-[1920px]">
      {/* <CompanyLanding /> */}
      <Story />
      <Values />
      <Separator />
      <Separator />
      <Research />
      <Separator />
      <Team />
      <Separator />
      <Locations />
      {/* <Separator /> */}
      {/* <Partners /> */}
      {/* <Separator /> */}
      <NewsLetter />
    </div>
  )
}
