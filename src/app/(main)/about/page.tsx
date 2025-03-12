import { Metadata } from "next"
import React from "react"
import NewsLetter from "./sections/NewsLetter"
import Story from "./sections/Story"
import Mission from "./sections/Mission"
import Narration from "./sections/Narration"
import Goals from "./sections/Goals"

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
      <Story />
      <Mission />
      <Narration />
      <Goals />
      {/* <NewsLetter /> */}
    </div>
  )
}
