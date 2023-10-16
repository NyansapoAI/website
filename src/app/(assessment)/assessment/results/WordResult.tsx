import React from "react"
import WordInfoPanel from "./panels/WordInfoPanel"
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover"
import { LiteracyAssessmentResult } from "../start/types"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"

type WordResultProps = {
  title: string
  data: LiteracyAssessmentResult["literacyAssessment"]["wordAssessmentResults"]
}
export default function WordResult({ title, data }: WordResultProps) {
  return (
    <Card className="bg-transparent border-none flex flex-col gap-2 p-4">
      <CardTitle>
        <h2 className="text-xl">{title}</h2>
      </CardTitle>
      <CardDescription>to listen to the audio, click on a word</CardDescription>
      <div className="flex justify-between">
        <div className="flex gap-2 flex-wrap">
          {data.map((result, i) => (
            <Popover key={i}>
              <PopoverTrigger className="active:border-2 border-teal-400">
                <span
                  className={`text-2xl ${
                    result.correctAccordingToModelPrediction.correct
                      ? "text-lime-600 dark:text-lime-500"
                      : "text-rose-400 dark:text-rose-400"
                  }`}
                >
                  {result.expectedAnswer}
                </span>
              </PopoverTrigger>
              <PopoverContent>
                {<WordInfoPanel result={result} />}
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>
    </Card>
  )
}
