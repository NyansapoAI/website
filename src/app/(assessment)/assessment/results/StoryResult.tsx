import React from "react"
import StorySentence from "./StorySentence"
import { LiteracyAssessmentResult } from "../start/types"
export type StoryResultProps = {
  title: string
  data: LiteracyAssessmentResult["literacyAssessment"]["storySentenceResults"]
}

export default function StoryResult({ title, data }: StoryResultProps) {
  return (
    <section className="flex flex-col gap-2  p-4">
      <h2 className="text-xl">{title}</h2>
      <div className="">
        <div className="flex flex-col gap-2 flex-wrap ">
          {data.length > 0 &&
            data.map((result, i) => <StorySentence key={i} result={result} />)}
        </div>
      </div>
    </section>
  )
}
