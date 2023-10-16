import React from "react"
import ParagraphSentence from "./ParagraphSentence"
import { LiteracyAssessmentResult } from "../start/types"

type ParagraphResultProps = {
  title: string
  data: LiteracyAssessmentResult["literacyAssessment"]["paragraphSentenceResults"]
}

export default function ParagraphResult({ title, data }: ParagraphResultProps) {
  return (
    <section className="flex flex-col gap-2  p-4">
      <h2 className="text-xl">{title}</h2>
      <div className="">
        <div className="flex flex-col divide-y-2 divide-gray-200 dark:divide-slate-600 gap-2 flex-wrap ">
          {data.length > 0 &&
            data.map((result, i) => (
              <ParagraphSentence key={i} result={result} />
            ))}
        </div>
      </div>
    </section>
  )
}
